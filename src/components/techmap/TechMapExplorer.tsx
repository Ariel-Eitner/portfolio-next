"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import type { PointerEvent as ReactPointerEvent } from "react";

import type { Lang } from "@/i18n/config";
import type { Copy } from "@/data/copy";
import {
  areaById,
  areas,
  planes,
  TOTAL_TECH,
  type Area,
} from "@/data/techMap/areas";
import { VIEWBOX, graph, neighbours } from "@/data/techMap/layout";

/* --------------------------------------------------------------------------
   Constantes de dibujo. Están en unidades del viewBox, no en píxeles: a k = 1
   el mapa entero entra en el contenedor y todo se escala con él.
-------------------------------------------------------------------------- */

const FONT_NUCLEUS = 38;
const FONT_AREA = 30;
const FONT_TECH = 19;
const LINE_HEIGHT = 34;

/** Por encima de este zoom se muestran las etiquetas de todas las tecnologías. */
const TECH_LABEL_ZOOM = 1.55;

const MIN_K = 0.7;
const MAX_K = 7;

/** Zoom inicial en pantallas chicas: el mapa completo ahí es ilegible. */
const COARSE_K = 2;

/**
 * Cuánto se apaga lo que no está en foco. Fijar un área es una decisión, así
 * que apaga fuerte; pasar el mouse por encima es exploratorio y apaga apenas.
 * Con un solo valor agresivo, mover el cursor por el mapa lo hacía parpadear.
 */
const DIM_SELECTED = 0.1;
const DIM_HOVER = 0.42;

/** Umbral en píxeles de pantalla para distinguir un clic de un arrastre. */
const DRAG_SLOP = 6;

/**
 * Halo del color del lienzo detrás del texto. Con `paint-order: stroke` el
 * trazo se pinta antes que el relleno, así que actúa de recorte: sin esto las
 * aristas de solapamiento cruzan las etiquetas por el medio y se vuelven
 * ilegibles justo en la zona más densa del mapa.
 */
const LABEL_HALO = {
  stroke: "#0a0a0d",
  strokeLinejoin: "round" as const,
  paintOrder: "stroke" as const,
};

const COARSE_QUERY = "(max-width: 767px)";

type View = { x: number; y: number; k: number };

const IDENTITY: View = { x: 0, y: 0, k: 1 };

const COARSE_VIEW: View = {
  k: COARSE_K,
  x: VIEWBOX.cx * (1 - COARSE_K),
  y: VIEWBOX.cy * (1 - COARSE_K),
};

const transformOf = (v: View) => `translate(${v.x} ${v.y}) scale(${v.k})`;

/**
 * `matchMedia` es un sistema externo, así que se lee con `useSyncExternalStore`
 * y no con un `useState` + efecto: en el servidor devuelve `false`, el HTML sale
 * con la vista de escritorio y React reconcilia después de hidratar, sin render
 * en cascada ni desajuste de hidratación.
 */
function useCoarseViewport(): boolean {
  return useSyncExternalStore(
    (notify) => {
      const query = window.matchMedia(COARSE_QUERY);
      query.addEventListener("change", notify);
      return () => query.removeEventListener("change", notify);
    },
    () => window.matchMedia(COARSE_QUERY).matches,
    () => false,
  );
}

/**
 * Parte una etiqueta en dos líneas equilibradas. Sin esto, "Arquitectura de
 * software" mide más que la distancia entre dos áreas vecinas y los textos se
 * pisan en la vista general.
 */
function splitLabel(label: string): string[] {
  const words = label.split(" ");
  if (words.length < 2 || label.length <= 12) return [label];

  let best = 1;
  let bestDelta = Infinity;
  for (let i = 1; i < words.length; i++) {
    const a = words.slice(0, i).join(" ").length;
    const b = words.slice(i).join(" ").length;
    const delta = Math.abs(a - b);
    if (delta < bestDelta) {
      bestDelta = delta;
      best = i;
    }
  }
  return [words.slice(0, best).join(" "), words.slice(best).join(" ")];
}

/**
 * Recibe sólo `mapPage` y no el diccionario entero: todo lo que se le pasa a un
 * componente cliente viaja en el payload de React, y el resto del copy (bullets
 * de experiencia, proyectos, FAQ) no lo usa nadie acá.
 */
type Props = { lang: Lang; t: Copy["mapPage"] };

export default function TechMapExplorer({ lang, t }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const gRef = useRef<SVGGElement>(null);

  const [selected, setSelected] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [showTechLabels, setShowTechLabels] = useState(false);

  const isCoarse = useCoarseViewport();

  /* ------------------------------------------------------------ pan y zoom */

  /**
   * El encuadre vive en un ref y se escribe directo sobre el `<g>`, no en el
   * estado de React.
   *
   * Con estado, cada píxel de arrastre reconciliaba los ~250 nodos y aristas del
   * grafo —y en desarrollo, con StrictMode, dos veces por evento—. De ahí venía
   * la sensación de que el mapa "responde poco": no es que ignorara los eventos,
   * es que repintaba el árbol entero en cada uno. Ahora un paneo no dispara
   * ningún render; sólo lo hace cruzar el umbral de zoom que muestra las
   * etiquetas de tecnologías.
   *
   * El `transform` no se declara en el JSX a propósito: si React lo gestionara,
   * lo reescribiría a su valor en cada render y pisaría el del usuario.
   */
  const viewRef = useRef<View>(IDENTITY);
  const touched = useRef(false);

  const applyView = useCallback(() => {
    gRef.current?.setAttribute("transform", transformOf(viewRef.current));
    // Con el mismo valor React no re-renderiza, así que esto es gratis salvo
    // en el frame exacto en que se cruza el umbral.
    setShowTechLabels(viewRef.current.k >= TECH_LABEL_ZOOM);
  }, []);

  // Encuadre de partida. Mientras el usuario no toque el mapa, cambiar el tamaño
  // de la ventana lo reencuadra solo.
  useEffect(() => {
    if (touched.current) return;
    viewRef.current = isCoarse ? COARSE_VIEW : IDENTITY;
    applyView();
  }, [isCoarse, applyView]);

  const toLocal = useCallback((clientX: number, clientY: number) => {
    const ctm = svgRef.current?.getScreenCTM();
    if (!ctm) return { x: 0, y: 0 };
    const point = new DOMPoint(clientX, clientY).matrixTransform(ctm.inverse());
    return { x: point.x, y: point.y };
  }, []);

  const zoomAt = useCallback(
    (factor: number, cx: number, cy: number) => {
      const prev = viewRef.current;
      const k = Math.min(MAX_K, Math.max(MIN_K, prev.k * factor));
      const applied = k / prev.k;
      if (applied === 1) return;
      touched.current = true;
      viewRef.current = {
        k,
        x: cx - (cx - prev.x) * applied,
        y: cy - (cy - prev.y) * applied,
      };
      applyView();
    },
    [applyView],
  );

  const zoomCentre = useCallback(
    (factor: number) => zoomAt(factor, VIEWBOX.cx, VIEWBOX.cy),
    [zoomAt],
  );

  const resetView = useCallback(() => {
    touched.current = true;
    viewRef.current = IDENTITY;
    applyView();
  }, [applyView]);

  // El wheel va como listener nativo no pasivo: React lo registra en la raíz y
  // ahí `preventDefault()` no siempre llega a tiempo para frenar el scroll.
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      const { x, y } = toLocal(event.clientX, event.clientY);
      zoomAt(Math.exp(-event.deltaY * 0.0015), x, y);
    };

    svg.addEventListener("wheel", onWheel, { passive: false });
    return () => svg.removeEventListener("wheel", onWheel);
  }, [toLocal, zoomAt]);

  /* ------------------------------------------------------------- punteros */

  // Punteros activos: uno es paneo, dos son pellizco.
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const pinchDistance = useRef<number | null>(null);

  /**
   * Qué se apretó y dónde.
   *
   * La selección se resuelve en `pointerup` y no con `onClick` porque el `<svg>`
   * captura el puntero para que el paneo no se corte al salirse del recuadro, y
   * capturar reapunta también los eventos de ratón compatibles: el `click`
   * terminaba llegando al `<svg>` en lugar de al nodo, así que ningún clic sobre
   * un área seleccionaba nada. Acá el nodo se anota en `pointerdown` y se
   * confirma en `pointerup` si el puntero casi no se movió.
   */
  const press = useRef<{ id: string | null; x: number; y: number; moved: boolean }>({
    id: null,
    x: 0,
    y: 0,
    moved: false,
  });

  // Fase de captura: corre antes que el manejador del nodo, que es el que apunta
  // su id. Si se reiniciara en la fase de burbujeo, lo borraría.
  const onPointerDownCapture = (event: ReactPointerEvent<SVGSVGElement>) => {
    press.current = { id: null, x: event.clientX, y: event.clientY, moved: false };
  };

  const onPointerDown = (event: ReactPointerEvent<SVGSVGElement>) => {
    svgRef.current?.setPointerCapture(event.pointerId);
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (svgRef.current) svgRef.current.style.cursor = "grabbing";
  };

  const onPointerMove = (event: ReactPointerEvent<SVGSVGElement>) => {
    const active = pointers.current;
    if (!active.has(event.pointerId)) return;

    if (
      !press.current.moved &&
      Math.hypot(event.clientX - press.current.x, event.clientY - press.current.y) >
        DRAG_SLOP
    ) {
      press.current.moved = true;
    }

    const previous = active.get(event.pointerId)!;
    active.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (active.size === 1) {
      if (!press.current.moved) return;
      const from = toLocal(previous.x, previous.y);
      const to = toLocal(event.clientX, event.clientY);
      touched.current = true;
      viewRef.current = {
        ...viewRef.current,
        x: viewRef.current.x + (to.x - from.x),
        y: viewRef.current.y + (to.y - from.y),
      };
      applyView();
      return;
    }

    if (active.size === 2) {
      press.current.moved = true;
      const [a, b] = [...active.values()] as [
        { x: number; y: number },
        { x: number; y: number },
      ];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      const centre = toLocal((a.x + b.x) / 2, (a.y + b.y) / 2);
      if (pinchDistance.current !== null && pinchDistance.current > 0) {
        zoomAt(distance / pinchDistance.current, centre.x, centre.y);
      }
      pinchDistance.current = distance;
    }
  };

  const releasePointer = (event: ReactPointerEvent<SVGSVGElement>) => {
    pointers.current.delete(event.pointerId);
    if (pointers.current.size < 2) pinchDistance.current = null;
    if (pointers.current.size === 0 && svgRef.current) {
      svgRef.current.style.cursor = "grab";
    }
  };

  const onPointerUp = (event: ReactPointerEvent<SVGSVGElement>) => {
    releasePointer(event);
    if (press.current.moved) return;
    // Sin arrastre de por medio, esto fue un clic: sobre un área la fija o la
    // suelta; sobre el fondo o el núcleo, limpia la selección.
    const id = press.current.id;
    setSelected((prev) => (id && id !== prev ? id : null));
  };

  /* ---------------------------------------------------------------- foco */

  // Nodo que manda el resaltado: el seleccionado gana sobre el que está bajo
  // el cursor, para que mover el mouse no borre lo que el usuario acaba de fijar.
  const focusId = selected ?? hovered;
  const dim = selected ? DIM_SELECTED : DIM_HOVER;

  const focusSet = useMemo(() => {
    if (!focusId) return null;
    const set = new Set<string>([focusId]);
    for (const id of neighbours.get(focusId) ?? []) set.add(id);
    // Al fijar un área, sus tecnologías siguen encendidas aunque el foco pase
    // a un vecino: son parte de la misma unidad de lectura.
    for (const node of graph.nodes) {
      if (node.kind === "tech" && node.areaId === focusId) set.add(node.id);
    }
    return set;
  }, [focusId]);

  const selectedArea: Area | null = selected ? (areaById.get(selected) ?? null) : null;
  const selectedPlane = selectedArea
    ? planes.find((p) => p.id === selectedArea.plane)
    : undefined;

  const opacityOf = (id: string) => (!focusSet ? 1 : focusSet.has(id) ? 1 : dim);

  // El hover sólo se atiende con el puntero levantado: durante un arrastre el
  // resaltado saltaría de nodo en nodo siguiendo al cursor.
  const enter = (id: string) => () => {
    if (pointers.current.size === 0) setHovered(id);
  };
  const leave = (id: string) => () => {
    setHovered((prev) => (prev === id ? null : prev));
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-8">
      <div>
        <div className="relative overflow-hidden rounded-2xl border border-hairline bg-[#0a0a0d]">
          <svg
            ref={svgRef}
            viewBox={`${VIEWBOX.x} ${VIEWBOX.y} ${VIEWBOX.w} ${VIEWBOX.h}`}
            preserveAspectRatio="xMidYMid meet"
            role="group"
            aria-label={t.title}
            /* En escritorio la caja adopta la proporción del mapa: así no queda
               franja negra arriba y abajo y el grafo usa todo el ancho. En móvil
               manda la altura, porque la vista arranca acercada. */
            className="h-[62svh] min-h-95 w-full cursor-grab touch-none select-none md:h-auto md:max-h-[78svh]"
            style={{ aspectRatio: `${VIEWBOX.w} / ${VIEWBOX.h}` }}
            onPointerDownCapture={onPointerDownCapture}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={releasePointer}
            onPointerLeave={(event) => {
              releasePointer(event);
              setHovered(null);
            }}
          >
            <defs>
              <radialGradient id="tm-halo" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffb224" stopOpacity="0.14" />
                <stop offset="100%" stopColor="#ffb224" stopOpacity="0" />
              </radialGradient>
            </defs>

            <g ref={gRef}>
              <circle
                cx={VIEWBOX.cx}
                cy={VIEWBOX.cy}
                r={560}
                fill="url(#tm-halo)"
                pointerEvents="none"
              />

              {/* Aristas: primero las de solapamiento, que van al fondo. */}
              <g pointerEvents="none">
                {graph.links.map((link) => {
                  const lit =
                    !focusSet ||
                    (focusSet.has(link.source) && focusSet.has(link.target));
                  const base =
                    link.kind === "overlap" ? 0.22 : link.kind === "core" ? 0.3 : 0.4;
                  return (
                    <line
                      key={link.id}
                      x1={link.x1}
                      y1={link.y1}
                      x2={link.x2}
                      y2={link.y2}
                      stroke={link.kind === "overlap" ? "#c084fc" : "#3f3f4a"}
                      strokeWidth={link.kind === "branch" ? 1 : 1.6}
                      strokeDasharray={link.kind === "overlap" ? "7 9" : undefined}
                      opacity={lit ? base : 0.04}
                    />
                  );
                })}
              </g>

              {/* Tecnologías. Decorativas para lectores de pantalla: el índice
                  completo debajo del mapa cubre el mismo contenido en HTML. */}
              <g aria-hidden="true">
                {graph.nodes
                  .filter((node) => node.kind === "tech")
                  .map((node) => {
                    const visible = showTechLabels || focusId === node.areaId;
                    return (
                      <g
                        key={node.id}
                        opacity={opacityOf(node.id)}
                        className="cursor-pointer"
                        onPointerEnter={enter(node.areaId)}
                        onPointerLeave={leave(node.areaId)}
                        onPointerDown={() => {
                          press.current.id = node.areaId;
                        }}
                      >
                        <title>{node.label[lang]}</title>
                        {/* Blanco de pulsación holgado: el punto visible mide 7
                            unidades, unos 2 px en la vista general. */}
                        <circle cx={node.x} cy={node.y} r={22} fill="transparent" />
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={node.r}
                          fill={node.color}
                          fillOpacity={0.85}
                        />
                        {visible ? (
                          /* Los vecinos del abanico alternan altura de
                             etiqueta: a esta densidad, todas a la misma
                             distancia se solapan unas con otras. */
                          <text
                            x={node.x}
                            y={
                              node.y +
                              node.r +
                              FONT_TECH +
                              (node.slot % 2 === 1 ? FONT_TECH * 1.05 : 0)
                            }
                            textAnchor="middle"
                            fontSize={FONT_TECH}
                            fill="#c9c9d1"
                            {...LABEL_HALO}
                            strokeWidth={4}
                            style={{ fontFamily: "var(--font-mono)" }}
                          >
                            {node.short[lang]}
                          </text>
                        ) : null}
                      </g>
                    );
                  })}
              </g>

              {/* Áreas y núcleo: los únicos nodos interactivos y enfocables. */}
              {graph.nodes
                .filter((node) => node.kind !== "tech")
                .map((node) => {
                  const isArea = node.kind === "area";
                  const lines = splitLabel(node.short[lang]);
                  const active = focusId === node.id;
                  const font = isArea ? FONT_AREA : FONT_NUCLEUS;

                  // El bloque de texto se centra sobre un punto desplazado desde
                  // el nodo: hacia dentro del anillo en las áreas (donde no hay
                  // nada), recto hacia abajo en el núcleo.
                  const offset = node.r + 14 + (lines.length * LINE_HEIGHT) / 2;
                  const anchorX =
                    node.angle === null ? node.x : node.x - Math.cos(node.angle) * offset;
                  const anchorY =
                    node.angle === null
                      ? node.y + offset
                      : node.y - Math.sin(node.angle) * offset;
                  const firstBaseline =
                    anchorY - ((lines.length - 1) * LINE_HEIGHT) / 2 + font * 0.36;

                  return (
                    <g
                      key={node.id}
                      opacity={opacityOf(node.id)}
                      role={isArea ? "button" : undefined}
                      tabIndex={isArea ? 0 : undefined}
                      aria-pressed={isArea ? selected === node.id : undefined}
                      className={isArea ? "cursor-pointer" : undefined}
                      style={{ outline: "none" }}
                      onPointerEnter={enter(node.id)}
                      onPointerLeave={leave(node.id)}
                      onFocus={() => setHovered(node.id)}
                      onBlur={() => setHovered(null)}
                      onPointerDown={() => {
                        press.current.id = isArea ? node.id : null;
                      }}
                      onKeyDown={(event) => {
                        if (!isArea) return;
                        if (event.key !== "Enter" && event.key !== " ") return;
                        event.preventDefault();
                        setSelected((prev) => (prev === node.id ? null : node.id));
                      }}
                    >
                      <title>{node.label[lang]}</title>
                      {/* Blanco de pulsación: el círculo visible ronda los 12 px
                          en pantalla, demasiado fino para apuntarle con el dedo. */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={node.r + 26}
                        fill="transparent"
                      />
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={node.r + (active ? 7 : 0)}
                        fill={node.color}
                        fillOpacity={active ? 0.3 : 0.16}
                        stroke={node.color}
                        strokeWidth={active ? 3.5 : 2}
                      />
                      {lines.map((line, i) => (
                        <text
                          key={line}
                          x={anchorX}
                          y={firstBaseline + i * LINE_HEIGHT}
                          textAnchor="middle"
                          fontSize={font}
                          fontWeight={600}
                          fill={active ? node.color : "#e6e6ea"}
                          {...LABEL_HALO}
                          strokeWidth={6}
                        >
                          {line}
                        </text>
                      ))}
                    </g>
                  );
                })}
            </g>
          </svg>

          {/* Controles */}
          <div className="absolute right-3 top-3 flex flex-col gap-1.5">
            <MapButton label={t.zoomIn} onClick={() => zoomCentre(1.35)}>
              +
            </MapButton>
            <MapButton label={t.zoomOut} onClick={() => zoomCentre(1 / 1.35)}>
              −
            </MapButton>
            <MapButton label={t.focusAll} onClick={resetView}>
              <svg
                viewBox="0 0 24 24"
                className="size-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
              </svg>
            </MapButton>
          </div>

          <p className="pointer-events-none absolute bottom-3 left-4 right-4 font-mono text-[0.68rem] leading-relaxed text-ink-faint">
            {isCoarse ? t.hintMobile : t.hint}
          </p>
        </div>

        {/* Leyenda */}
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
          <span className="eyebrow">{t.legendTitle}</span>
          {planes.map((plane) => (
            <span
              key={plane.id}
              className="inline-flex items-center gap-2 font-mono text-xs text-ink-muted"
            >
              <span
                className="size-2.5 rounded-full"
                style={{ backgroundColor: plane.color }}
              />
              {plane.label[lang]}
            </span>
          ))}
          <span className="font-mono text-xs text-ink-faint">
            {areas.length} {t.areasNoun} · {TOTAL_TECH} {t.techNoun}
          </span>
        </div>
      </div>

      {/* Panel de detalle */}
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="card-hairline rounded-2xl p-6">
          {selectedArea ? (
            <>
              <div className="flex items-start justify-between gap-3">
                <p className="eyebrow" style={{ color: selectedPlane?.color }}>
                  {selectedPlane?.label[lang]}
                </p>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="-mr-1 -mt-1 rounded-md p-1 text-ink-faint transition-colors hover:text-ink"
                  aria-label={t.closePanel}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="size-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>

              <h3 className="mt-3 text-h3 font-semibold text-ink">
                {selectedArea.label[lang]}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {selectedArea.summary[lang]}
              </p>

              <h4 className="eyebrow mt-7">{t.conceptsTitle}</h4>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {selectedArea.concepts[lang].map((concept) => (
                  <li
                    key={concept}
                    className="rounded border border-hairline px-2 py-1 text-[0.72rem] text-ink-muted"
                  >
                    {concept}
                  </li>
                ))}
              </ul>

              <h4 className="eyebrow mt-6">{t.techTitle}</h4>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {selectedArea.tech.map((tech) => (
                  <li
                    key={tech.name}
                    className="rounded border px-2 py-1 font-mono text-[0.72rem]"
                    style={{
                      borderColor: `${selectedPlane?.color}55`,
                      color: selectedPlane?.color,
                    }}
                  >
                    {tech.name}
                  </li>
                ))}
              </ul>

              <h4 className="eyebrow mt-6">{t.relatedTitle}</h4>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {selectedArea.related.map((id) => {
                  const related = areaById.get(id);
                  if (!related) return null;
                  return (
                    <li key={id}>
                      <button
                        type="button"
                        onClick={() => setSelected(id)}
                        className="rounded border border-hairline px-2 py-1 text-[0.72rem] text-ink-muted transition-colors hover:border-hairline-strong hover:text-ink"
                      >
                        {related.label[lang]} ↗
                      </button>
                    </li>
                  );
                })}
              </ul>
            </>
          ) : (
            <>
              <p className="eyebrow">{t.coreLabel}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                {t.selectPrompt}
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-1.5">
                {areas.map((area) => (
                  <li key={area.id}>
                    <button
                      type="button"
                      onClick={() => setSelected(area.id)}
                      onPointerEnter={enter(area.id)}
                      onPointerLeave={leave(area.id)}
                      className="w-full rounded border border-hairline px-2 py-1.5 text-left text-[0.72rem] leading-tight text-ink-muted transition-colors hover:border-hairline-strong hover:text-ink"
                    >
                      <span
                        className="mr-1.5 inline-block size-1.5 rounded-full align-middle"
                        style={{
                          backgroundColor: planes.find((p) => p.id === area.plane)?.color,
                        }}
                      />
                      {area.label[lang]}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </aside>
    </div>
  );
}

function MapButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="grid size-9 place-items-center rounded-md border border-hairline bg-canvas/80 text-sm text-ink-muted backdrop-blur transition-colors hover:border-hairline-strong hover:text-ink"
    >
      {children}
    </button>
  );
}

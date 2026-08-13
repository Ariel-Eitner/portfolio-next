/**
 * Layout del mapa técnico.
 *
 * Es deterministaː posiciones calculadas con trigonometría pura, sin azar y sin
 * simulación física. Eso permite tres cosas que una simulación tipo d3-force no
 * daría acá:
 *
 *   1. El SVG se renderiza en el servidor con las etiquetas dentro del HTML, así
 *      que Google indexa el contenido del mapa (y funciona sin JavaScript).
 *   2. La hidratación no repinta nada: servidor y cliente calculan lo mismo.
 *   3. Cero dependencias nuevas y cero coste de CPU al montar.
 *
 * Las áreas se distribuyen sobre una elipse en tres niveles de radio alternados
 * (i % 3) para que dos vecinas nunca queden a la misma distancia del centro; si
 * no, sus racimos de tecnologías se pisarían. De cada área sale un abanico de
 * nodos hacia afuera, en dos sub-anillos.
 */

import {
  areas,
  nucleus,
  planeColor,
  type Bilingual,
  type PlaneId,
} from "./areas";

export const CANVAS = { w: 2200, h: 1500 } as const;

const CX = CANVAS.w / 2;
const CY = CANVAS.h / 2;

/** Radios de la elipse por nivel; el índice del área elige el nivel (i % 3). */
const RING = [
  { rx: 560, ry: 340 },
  { rx: 790, ry: 480 },
  { rx: 960, ry: 590 },
];

/** Abanico de tecnologías: dos sub-anillos alrededor del área, hacia afuera. */
const FAN = [
  { count: 4, radius: 66, spread: 1.75 },
  { count: Infinity, radius: 106, spread: 2.25 },
];

const NUCLEUS_R = 56;
const TECH_R = 7;
const AREA_R_MIN = 28;
const AREA_R_MAX = 41;

export type NodeKind = "nucleus" | "area" | "tech";

export type MapNode = {
  id: string;
  kind: NodeKind;
  /** Para una tecnología, el área de la que cuelga. Para un área, su propio id. */
  areaId: string;
  plane: PlaneId | "nucleus";
  color: string;
  x: number;
  y: number;
  r: number;
  label: Bilingual;
  /** Etiqueta corta: la única que se dibuja dentro del SVG. */
  short: Bilingual;
  /** Posición de la tecnología dentro del abanico de su área (0 para el resto). */
  slot: number;
  /**
   * Ángulo del centro del mapa hacia el nodo. El abanico de tecnologías sale en
   * esa dirección, así que la etiqueta del área se coloca en la contraria: hacia
   * el interior del anillo, que es la única zona realmente vacía del dibujo.
   * `null` en el núcleo, que no tiene "afuera".
   */
  angle: number | null;
};

export type LinkKind = "core" | "branch" | "overlap";

export type MapLink = {
  id: string;
  source: string;
  target: string;
  kind: LinkKind;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

const both = (value: string): Bilingual => ({ es: value, en: value });

/** Ángulo del área `i`: arranca arriba y gira en sentido horario. */
function areaAngle(i: number, total: number): number {
  return -Math.PI / 2 + (i / total) * Math.PI * 2;
}

/**
 * Reparte `count` puntos en un abanico centrado en `theta`, a `radius` del
 * origen del área. Con un solo punto, va justo sobre el eje.
 */
function fanAngles(theta: number, count: number, spread: number): number[] {
  if (count === 1) return [theta];
  const step = spread / (count - 1);
  return Array.from({ length: count }, (_, j) => theta - spread / 2 + j * step);
}

function buildGraph() {
  const nodes: MapNode[] = [];
  const links: MapLink[] = [];
  const position = new Map<string, { x: number; y: number }>();

  nodes.push({
    id: nucleus.id,
    kind: "nucleus",
    areaId: "",
    plane: "nucleus",
    color: "#ffb224",
    x: CX,
    y: CY,
    r: NUCLEUS_R,
    label: nucleus.label,
    short: nucleus.label,
    slot: 0,
    angle: null,
  });
  position.set(nucleus.id, { x: CX, y: CY });

  // Radio del área proporcional a cuánto abarca (conceptos + tecnologías).
  const weights = areas.map((a) => a.concepts.es.length + a.tech.length);
  const minW = Math.min(...weights);
  const maxW = Math.max(...weights);
  const areaRadius = (w: number) =>
    AREA_R_MIN + ((w - minW) / (maxW - minW || 1)) * (AREA_R_MAX - AREA_R_MIN);

  areas.forEach((area, i) => {
    const theta = areaAngle(i, areas.length);
    const ring = RING[i % RING.length]!;
    const x = CX + ring.rx * Math.cos(theta);
    const y = CY + ring.ry * Math.sin(theta);
    const r = areaRadius(weights[i]!);
    const color = planeColor(area.plane);
    // Dirección "hacia afuera" real: desde el centro hacia el área. No sirve
    // `theta` a secas porque la elipse desplaza el ángulo respecto del círculo.
    const outward = Math.atan2(y - CY, x - CX);

    nodes.push({
      id: area.id,
      kind: "area",
      areaId: area.id,
      plane: area.plane,
      color,
      x,
      y,
      r,
      label: area.label,
      short: area.label,
      slot: 0,
      angle: outward,
    });
    position.set(area.id, { x, y });

    links.push({
      id: `${nucleus.id}~${area.id}`,
      source: nucleus.id,
      target: area.id,
      kind: "core",
      x1: CX,
      y1: CY,
      x2: x,
      y2: y,
    });

    let placed = 0;
    for (const tier of FAN) {
      const remaining = area.tech.length - placed;
      if (remaining <= 0) break;
      const count = Math.min(remaining, tier.count);
      const angles = fanAngles(outward, count, tier.spread);

      angles.forEach((angle, j) => {
        const tech = area.tech[placed + j]!;
        const tx = x + tier.radius * Math.cos(angle);
        const ty = y + tier.radius * Math.sin(angle);
        const id = `${area.id}::${placed + j}`;

        nodes.push({
          id,
          kind: "tech",
          areaId: area.id,
          plane: area.plane,
          color,
          x: tx,
          y: ty,
          r: TECH_R,
          label: both(tech.name),
          short: both(tech.short ?? tech.name),
          slot: placed + j,
          angle,
        });
        position.set(id, { x: tx, y: ty });

        links.push({
          id: `${area.id}~${id}`,
          source: area.id,
          target: id,
          kind: "branch",
          x1: x,
          y1: y,
          x2: tx,
          y2: ty,
        });
      });

      placed += count;
    }
  });

  // Aristas de solapamiento entre áreas, sin duplicar el par en los dos sentidos.
  const seen = new Set<string>();
  for (const area of areas) {
    for (const other of area.related) {
      const key = [area.id, other].sort().join("~");
      if (seen.has(key)) continue;
      seen.add(key);
      const a = position.get(area.id);
      const b = position.get(other);
      if (!a || !b) continue;
      links.push({
        id: `overlap:${key}`,
        source: area.id,
        target: other,
        kind: "overlap",
        x1: a.x,
        y1: a.y,
        x2: b.x,
        y2: b.y,
      });
    }
  }

  return { nodes, links };
}

export const graph = buildGraph();

/**
 * Encuadre ajustado al contenido real.
 *
 * `CANVAS` es la caja donde se calculan las posiciones; el grafo nunca la llena
 * del todo. Dibujar con ese viewBox dejaba un marco vacío alrededor y encogía el
 * mapa dentro del contenedor. El viewBox de verdad es la caja de los nodos más
 * un margen —más generoso abajo, que es donde caen las etiquetas—.
 */
export const VIEWBOX = (() => {
  // Más margen a los lados que arriba: las etiquetas se centran bajo el nodo y
  // las de las áreas del extremo izquierdo y derecho sobresalen de la caja.
  const PAD_X = 92;
  const PAD_TOP = 70;
  const PAD_BOTTOM = 125;

  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  for (const node of graph.nodes) {
    minX = Math.min(minX, node.x - node.r);
    minY = Math.min(minY, node.y - node.r);
    maxX = Math.max(maxX, node.x + node.r);
    maxY = Math.max(maxY, node.y + node.r);
  }

  const x = minX - PAD_X;
  const y = minY - PAD_TOP;
  return {
    x,
    y,
    w: maxX + PAD_X - x,
    h: maxY + PAD_BOTTOM - y,
    get cx() {
      return this.x + this.w / 2;
    },
    get cy() {
      return this.y + this.h / 2;
    },
  };
})();

/** Vecinos de cada nodo — alimenta el resaltado al seleccionar. */
export const neighbours: Map<string, Set<string>> = (() => {
  const map = new Map<string, Set<string>>();
  const add = (a: string, b: string) => {
    const set = map.get(a) ?? new Set<string>();
    set.add(b);
    map.set(a, set);
  };
  for (const link of graph.links) {
    add(link.source, link.target);
    add(link.target, link.source);
  }
  return map;
})();

export const nodeById = new Map(graph.nodes.map((n) => [n.id, n]));

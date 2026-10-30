"use client";

import Image from "next/image";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import styles from "./faro.module.css";
import municipalSearch from "../../../public/images/faro/municipal-busqueda.png";
import municipalReading from "../../../public/images/faro/municipal-lectura.png";
import municipalMap from "../../../public/images/faro/municipal-mapa.png";
import nationalSearch from "../../../public/images/faro/nacional-busqueda.png";
import nationalReading from "../../../public/images/faro/nacional-lectura.png";
import nationalMap from "../../../public/images/faro/nacional-mapa.png";

const screenshots = {
  municipal: {
    busqueda: municipalSearch,
    lectura: municipalReading,
    mapa: municipalMap,
  },
  nacional: {
    busqueda: nationalSearch,
    lectura: nationalReading,
    mapa: nationalMap,
  },
};

const tools = [
  {
    id: "busqueda",
    title: "Búsqueda normativa",
    description:
      "Localización de normas por número o tema, con filtros para acotar la consulta.",
    detail:
      "Búsqueda y filtros temáticos para pasar de una consulta general a las normas relevantes.",
  },
  {
    id: "lectura",
    title: "Lectura por artículos",
    description:
      "Texto organizado, índice de artículos y acceso a las referencias de la norma.",
    detail:
      "Navegación por el articulado y consulta del contexto normativo desde una misma ficha.",
  },
  {
    id: "mapa",
    title: "Mapa legal en 2D",
    description:
      "Exploración visual de referencias, modificaciones y derogaciones entre normas.",
    detail:
      "Vista general de la red normativa: grupos de normas y conexiones entre distintas áreas, sin una disposición seleccionada.",
  },
] as const;

const scopes = [
  {
    id: "municipal",
    label: "Municipal",
    caption: "San Fernando del Valle de Catamarca",
  },
  {
    id: "nacional",
    label: "Nacional",
    caption: "Observatorio de Leyes · Argentina",
  },
] as const;

export default function ToolsShowcase() {
  const [selectedTool, setSelectedTool] = useState(2);
  const [selectedScope, setSelectedScope] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const tabs = useRef<HTMLDivElement>(null);
  const instance = useId();
  const tool = tools[selectedTool]!;
  const scope = scopes[selectedScope]!;
  const image = screenshots[scope.id][tool.id];
  const description =
    tool.id === "mapa"
      ? `Vista general del mapa legal ${scope.label.toLowerCase()}, sin normas seleccionadas. ${scope.caption}.`
      : `${tool.title}: captura del ${scope.label.toLowerCase()}. ${scope.caption}.`;

  function navigateTabs(event: KeyboardEvent<HTMLDivElement>) {
    let next: number;
    if (event.key === "ArrowDown" || event.key === "ArrowRight")
      next = (selectedTool + 1) % tools.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft")
      next = (selectedTool + tools.length - 1) % tools.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = tools.length - 1;
    else return;
    event.preventDefault();
    setSelectedTool(next);
    tabs.current?.querySelectorAll<HTMLButtonElement>("button")[next]?.focus();
  }

  return (
    <section
      className={`${styles.section} ${styles.toolsSection}`}
      aria-labelledby="herramientas-titulo"
    >
      <div id="herramientas" className={styles.sectionIntro}>
        <p className={styles.eyebrow}>HERRAMIENTAS EN CONTEXTO</p>
        <div>
          <h2 id="herramientas-titulo">
            Funciones concretas.
            <br />
            <em>Una experiencia compartida.</em>
          </h2>
          <p>
            Seleccione una función y consulte su aplicación en ambos
            observatorios. Las capturas muestran interfaces reales, con
            contenidos y configuraciones propios de cada ámbito.
          </p>
        </div>
      </div>

      <div className={styles.toolsLayout}>
        <div
          ref={tabs}
          className={styles.toolTabs}
          role="tablist"
          aria-label="Funciones compartidas"
          aria-orientation="vertical"
          onKeyDown={navigateTabs}
        >
          {tools.map((item, index) => (
            <button
              key={item.id}
              id={`${instance}-tab-${item.id}`}
              type="button"
              role="tab"
              aria-selected={index === selectedTool}
              aria-controls={`${instance}-panel`}
              tabIndex={index === selectedTool ? 0 : -1}
              onClick={() => setSelectedTool(index)}
            >
              <span className={styles.toolNumber}>0{index + 1}</span>
              <span>
                <strong>{item.title}</strong>
                <span className={styles.toolDescription}>
                  {item.description}
                </span>
              </span>
              <span className={styles.toolArrow} aria-hidden="true">
                ↗
              </span>
            </button>
          ))}
        </div>

        <div
          id={`${instance}-panel`}
          className={styles.toolPanel}
          role="tabpanel"
          aria-labelledby={`${instance}-tab-${tool.id}`}
          tabIndex={0}
        >
          <div className={styles.toolPanelHeader}>
            <div
              className={styles.scopeSwitch}
              role="group"
              aria-label="Ámbito de la captura"
            >
              {scopes.map((item, index) => (
                <button
                  type="button"
                  key={item.id}
                  aria-pressed={selectedScope === index}
                  onClick={() => setSelectedScope(index)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              className={styles.enlargeButton}
              onClick={() => dialog.current?.showModal()}
            >
              Ampliar captura <span aria-hidden="true">↗</span>
            </button>
          </div>
          <figure className={styles.toolFigure}>
            <div className={styles.toolImage}>
              <Image
                key={image.src}
                src={image}
                alt={description}
                width={1440}
                height={1000}
                sizes="(max-width: 760px) 90vw, 62vw"
              />
            </div>
            <figcaption>
              <span>{scope.caption}</span>
              <p>{tool.detail}</p>
            </figcaption>
          </figure>
        </div>
      </div>

      <dialog
        ref={dialog}
        className={styles.captureDialog}
        aria-labelledby={`${instance}-dialog-title`}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className={styles.dialogHeader}>
          <h3 id={`${instance}-dialog-title`}>
            {tool.title} · {scope.label}
          </h3>
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            aria-label="Cerrar captura ampliada"
          >
            Cerrar <span aria-hidden="true">×</span>
          </button>
        </div>
        <Image
          src={image}
          alt={description}
          width={1440}
          height={1000}
          sizes="95vw"
        />
      </dialog>
    </section>
  );
}

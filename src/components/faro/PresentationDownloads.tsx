import styles from "./presentation.module.css";

const editions = [
  { mode: "claro", title: "Edición clara", text: "Fondo claro, ideal para leer e imprimir.", symbol: "☀" },
  { mode: "oscuro", title: "Edición oscura", text: "Fondo azul profundo para presentar en pantalla.", symbol: "◐" },
] as const;

export default function PresentationDownloads() {
  return (
    <section id="presentacion" className={styles.downloads} aria-labelledby="descargas-titulo">
      <div className={styles.downloadIntro}>
        <p className={styles.kicker}>PARA LEER Y COMPARTIR</p>
        <h2 id="descargas-titulo">Conocé FARO<br /><em>en detalle.</em></h2>
        <p>Un recorrido por la búsqueda, la lectura de normas y el mapa legal, con ejemplos de Catamarca y acceso al Digesto público. Dos ediciones con el mismo contenido.</p>
        <span className={styles.documentMeta}>27 páginas · Presentación en PDF</span>
      </div>
      <div className={styles.downloadOptions}>
        {editions.map((edition) => (
          <a key={edition.mode} href={`/faro/documentos/faro-presentacion-${edition.mode}.pdf`} target="_blank" rel="noopener noreferrer" className={styles.downloadCard}>
            <span className={styles.editionIcon} aria-hidden="true">{edition.symbol}</span>
            <div><h3>{edition.title}</h3><p>{edition.text}</p><span>Abrir PDF · 8,5 MB <span aria-hidden="true">↗</span></span></div>
          </a>
        ))}
      </div>
    </section>
  );
}

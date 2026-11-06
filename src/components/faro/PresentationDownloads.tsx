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
        <h2 id="descargas-titulo">Llevá la presentación<br /><em>con vos.</em></h2>
        <p>El recorrido completo, con ejemplos reales de consulta municipal y nacional. Dos ediciones con el mismo contenido.</p>
        <span className={styles.documentMeta}>25 páginas · Capturas de FARO 0.15.1</span>
      </div>
      <div className={styles.downloadOptions}>
        {editions.map((edition) => (
          <a key={edition.mode} href={`/faro/documentos/faro-presentacion-${edition.mode}.pdf`} download className={styles.downloadCard}>
            <span className={styles.editionIcon} aria-hidden="true">{edition.symbol}</span>
            <div><h3>{edition.title}</h3><p>{edition.text}</p><span>Descargar PDF · 9 MB <span aria-hidden="true">↓</span></span></div>
          </a>
        ))}
      </div>
    </section>
  );
}

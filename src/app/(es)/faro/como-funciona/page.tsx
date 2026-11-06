import type { Metadata, Viewport } from "next";
import Link from "next/link";
import ThemeToggle from "@/components/faro/ThemeToggle";
import PresentationImage from "@/components/faro/PresentationImage";
import PresentationDownloads from "@/components/faro/PresentationDownloads";
import brand from "@/components/faro/faro.module.css";
import styles from "@/components/faro/presentation.module.css";
import { faroMetadata } from "@/lib/faro-seo";
import { absolute } from "@/lib/seo";

const title = "Cómo funciona FARO | Un recorrido por el digesto digital";
const description = "Conocé FARO con ejemplos reales: búsqueda de normas, estado de vigencia, categorías, lectura por artículos y mapa legal. Presentación descargable en PDF.";
const url = absolute("/faro/como-funciona");
export const metadata: Metadata = {
  ...faroMetadata, title: { absolute: title }, description,
  alternates: { canonical: url },
  openGraph: { ...faroMetadata.openGraph, title, description, url },
  twitter: { ...faroMetadata.twitter, title, description },
};
export const viewport: Viewport = { themeColor: "#f7f8f5", colorScheme: "light" };

const chapters = [
  { id: "encontrar", label: "Encontrar", title: "Una pregunta. Un punto de partida.", lead: "Escribí un tema, un nombre o un número. La búsqueda y sus filtros ayudan a pasar de una consulta amplia a una norma concreta.", image: "cat-resultados", alt: "Resultados de Carta Orgánica con identificación, vigencia y categoría", caption: "Búsqueda de «Carta Orgánica» con el filtro Vigente. Catamarca, ámbito municipal.", points: ["Reconocé cada resultado por su título, tipo y año.", "Combiná categoría, tipo de norma y estado de vigencia.", "También podés empezar por el catálogo de categorías."] },
  { id: "reconocer", label: "Reconocer", title: "El contexto, desde la primera mirada.", lead: "La ficha reúne las señales que necesitás para ubicar la norma. El estado de vigencia y la categoría tienen su propio espacio, junto al título y el resumen.", image: "cat-ficha", alt: "Ficha de la Carta Orgánica de Catamarca con indicadores de vigencia y categoría", caption: "Carta Orgánica · 1993. La categoría Constitucional enlaza otras normas de la misma materia.", points: ["El estado se expresa con texto y color.", "La categoría permite continuar la exploración por tema.", "El resumen anticipa qué organiza y regula la disposición."] },
  { id: "consultar", label: "Consultar", title: "Los datos y la fuente, a mano.", lead: "Consultar una norma también implica conocer su origen. La ficha muestra las fechas y el organismo emisor disponibles, y ofrece acceso al texto oficial cuando hay una fuente externa verificada.", image: "cat-categorias", alt: "Catálogo municipal de categorías con nombres, descripciones y cantidad de normas", caption: "El catálogo organiza la consulta por materia. Cada norma conserva sus datos y fuentes en su propia ficha.", points: ["Identificá el emisor y las fechas registradas.", "Abrí el texto oficial desde el enlace de la ficha.", "Distinguí la información que orienta la consulta del documento original."] },
  { id: "leer", label: "Leer", title: "Llegar al artículo. Leer. Compartir.", lead: "El índice organiza el recorrido por el texto. Cada artículo conserva sus acciones para copiar la disposición o compartir un enlace a su ubicación.", image: "cat-articulo", alt: "Artículo 14 de la Carta Orgánica con acciones para copiar texto y enlace", caption: "Artículo 14 de la Carta Orgánica: protección del ambiente. Captura del lector municipal.", points: ["Recorré capítulos y artículos desde el índice.", "Copiá el texto del artículo que necesitás consultar.", "Compartí un enlace directo al punto de lectura."] },
  { id: "conectar", label: "Conectar", title: "Una norma también es parte de una red.", lead: "El mapa legal permite explorar las referencias, modificaciones y derogaciones que están registradas. Seleccionar una disposición ayuda a reconocer su entorno normativo.", image: "cat-mapa-seleccion", alt: "Mapa municipal con la Constitución de Catamarca y sus conexiones seleccionadas", caption: "Constitución de Catamarca seleccionada en el mapa municipal. Los vínculos representan relaciones registradas.", points: ["Buscá una norma dentro del mapa.", "Seleccioná un nodo para destacar sus conexiones.", "Usá el mapa para orientar la consulta y volver al texto."] },
] as const;
const navigation = [...chapters.map(({ id, label }) => ({ id, label })), { id: "movil", label: "En el celular" }];

export default function FaroHowItWorks() {
  return (
    <div className={brand.page} data-faro-theme="light">
      <a href="#contenido" className={brand.skip}>Saltar al contenido</a>
      <header className={brand.header}>
        <nav className={brand.nav} aria-label="Navegación de FARO">
          <Link href="/faro" className={brand.wordmark}><span className={brand.brandStar} aria-hidden="true">✦</span> FARO<span className={brand.brandCaption}>NORMATIVA MUNICIPAL</span></Link>
          <div className={brand.navLinks}><Link href="/faro">La plataforma</Link><a href="#recorrido">El recorrido</a><a href="#presentacion">Descargas</a></div>
          <div className={brand.navActions}><Link href="/faro#contacto" className={brand.navCta}>Contacto <span aria-hidden="true">↗</span></Link><ThemeToggle /></div>
        </nav>
      </header>
      <main id="contenido">
        <section className={styles.journeyHero} aria-labelledby="recorrido-titulo">
          <nav aria-label="Ruta de navegación" className={styles.breadcrumb}><Link href="/faro">FARO</Link><span aria-hidden="true">/</span><span aria-current="page">Cómo funciona</span></nav>
          <p className={styles.kicker}>UN RECORRIDO POR LA PLATAFORMA</p>
          <h1 id="recorrido-titulo">Encontrar. Comprender.<br /><em>Conectar.</em></h1>
          <div className={styles.heroBottom}><p>De la primera búsqueda al artículo que necesitás. Conocé FARO a través de ejemplos reales y descubrí cómo se organiza la consulta normativa.</p><a href="#encontrar" className={styles.solidLink}>Comenzar el recorrido <span aria-hidden="true">↓</span></a></div>
          <div className={styles.journeyFacts}><span>Ejemplo municipal · Catamarca</span><span>Lectura web y móvil</span><span>Presentación disponible en PDF</span></div>
        </section>
        <div id="recorrido" className={styles.journeyLayout}>
          <aside className={styles.chapterNav}><p className={styles.kicker}>EL RECORRIDO</p><nav aria-label="Capítulos del recorrido"><ol>{navigation.map((chapter, index) => <li key={chapter.id}><a href={`#${chapter.id}`}><span>{String(index + 1).padStart(2, "0")}</span>{chapter.label}</a></li>)}</ol></nav><a href="#presentacion" className={styles.inlineLink}>Descargar presentación ↓</a></aside>
          <div className={styles.chapterContent}>
            {chapters.map((chapter, index) => <section id={chapter.id} key={chapter.id} className={styles.chapter} aria-labelledby={`${chapter.id}-titulo`}>
              <p className={styles.kicker}>{String(index + 1).padStart(2, "0")} / {chapter.label.toUpperCase()}</p>
              <h2 id={`${chapter.id}-titulo`}>{chapter.title}</h2>
              <p className={styles.chapterLead}>{chapter.lead}</p>
              {chapter.id === "consultar" ? <div className={styles.sourcePanel}><span aria-hidden="true">↗</span><div><h3>Ver texto oficial</h3><p>El acceso a la fuente acompaña la ficha. Las fechas se muestran cuando están disponibles; no se completan con datos supuestos.</p></div></div> : <PresentationImage src={`/images/faro/recorrido/${chapter.image}.webp`} alt={chapter.alt} caption={chapter.caption} />}
              <ul className={styles.points}>{chapter.points.map(point => <li key={point}>{point}</li>)}</ul>
              {chapter.id === "conectar" && <p className={styles.note}>Las conexiones orientan la exploración. La vigencia y los efectos de una norma requieren revisar sus fuentes y su contexto jurídico.</p>}
            </section>)}
            <section className={`${styles.chapter} ${styles.nationalChapter}`} aria-labelledby="nacional-titulo"><p className={styles.kicker}>OTRO ÁMBITO, LA MISMA IDEA</p><h2 id="nacional-titulo">El texto y una explicación al lado.</h2><p className={styles.chapterLead}>El Observatorio de Leyes muestra esta experiencia en el ámbito nacional. En este ejemplo de la Ley 27.275, el articulado se acompaña con una explicación en lenguaje claro.</p><PresentationImage src="/images/faro/recorrido/nac-lectura.webp" alt="Ley 27.275 en el Observatorio de Leyes con texto y explicación en dos columnas" caption="Ejemplo del Observatorio Nacional. La explicación orienta la lectura y no reemplaza el texto normativo." /><a className={styles.inlineLink} href="https://observatorio-de-leyes.com" target="_blank" rel="noreferrer">Explorar el Observatorio de Leyes ↗</a></section>
            <section id="movil" className={styles.chapter} aria-labelledby="movil-titulo"><p className={styles.kicker}>06 / EN EL CELULAR</p><h2 id="movil-titulo">La consulta sigue donde estés.</h2><p className={styles.chapterLead}>La ficha adapta sus datos a una pantalla pequeña. El articulado mantiene sus acciones para seguir leyendo, copiar o compartir desde el celular.</p><div className={styles.phones}><PresentationImage src="/images/faro/recorrido/cat-mobile-ficha.webp" alt="Ficha de la Carta Orgánica en un celular" caption="Identificación, vigencia y categoría." mobile /><PresentationImage src="/images/faro/recorrido/cat-mobile-articulo.webp" alt="Artículo 14 con acciones de lectura en un celular" caption="Lectura y acciones del artículo." mobile /></div></section>
          </div>
        </div>
        <PresentationDownloads />
        <section className={styles.journeyEnd}><p className={styles.kicker}>EL SIGUIENTE PASO</p><h2>Un recorrido propio<br /><em>para cada institución.</em></h2><p>Conocé las etapas de implementación y las posibilidades de FARO para tu municipio.</p><Link href="/faro#implementacion" className={styles.solidLink}>Ver la propuesta de implementación →</Link><Link href="/faro" className={styles.inlineLink}>Volver a FARO</Link></section>
      </main>
      <footer className={brand.footer}><Link href="/faro" className={brand.wordmark}>✦ FARO</Link><span>Fuente Abierta de Regulación y Ordenamiento.</span><Link href="/">Volver al portafolio ↗</Link></footer>
    </div>
  );
}

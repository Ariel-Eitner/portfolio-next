import type { Metadata, Viewport } from "next";
import Link from "next/link";
import ThemeToggle from "@/components/faro/ThemeToggle";
import PresentationImage from "@/components/faro/PresentationImage";
import PresentationDownloads from "@/components/faro/PresentationDownloads";
import brand from "@/components/faro/faro.module.css";
import styles from "@/components/faro/presentation.module.css";
import { faroMetadata } from "@/lib/faro-seo";
import { absolute } from "@/lib/seo";
import { municipalDemo } from "@/data/faro";

const title = "Cómo funciona FARO | Un recorrido por el digesto digital";
const description = "Explorá FARO en el Digesto público de Catamarca: búsqueda, vigencia, categorías, artículos y guía del mapa legal. Recorrido visual y presentaciones PDF.";
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
  { id: "consultar", label: "Consultar", title: "Una materia, un recorrido.", lead: "Si preferís comenzar por un tema, el catálogo de categorías reúne la normativa incorporada por materia. Desde allí podés abrir un listado y continuar hasta la ficha de cada norma.", image: "cat-categorias", alt: "Catálogo municipal de categorías con nombres, descripciones y cantidad de normas", caption: "Categorías del Digesto Municipal de Catamarca. La cobertura corresponde a las normas incorporadas.", points: ["Elegí una materia para explorar sus normas.", "Revisá en la ficha el emisor y las fechas disponibles.", "Consultá el texto oficial cuando la ficha disponga de un enlace a la fuente."] },
  { id: "leer", label: "Leer", title: "Llegar al artículo. Leer. Compartir.", lead: "El índice organiza el recorrido por el texto. Cada artículo conserva sus acciones para copiar la disposición o compartir un enlace a su ubicación.", image: "cat-articulo", alt: "Artículo 14 de la Carta Orgánica con acciones para copiar texto y enlace", caption: "Artículo 14 de la Carta Orgánica: protección del ambiente. Captura del lector municipal.", points: ["Recorré capítulos y artículos desde el índice.", "Copiá el texto del artículo que necesitás consultar.", "Compartí un enlace directo al punto de lectura."] },
  { id: "conectar", label: "Conectar", title: "De la ficha a sus conexiones.", lead: "El enlace «Ver en el mapa legal» abre la norma seleccionada para explorar su contexto. También podés buscar otra disposición dentro del mapa y seguir sus conexiones hasta volver al texto.", image: "cat-mapa-seleccion", alt: "Mapa municipal con la Constitución de Catamarca y sus conexiones seleccionadas", caption: "Constitución de Catamarca seleccionada en el mapa público. El panel permite recorrer las conexiones y abrir cada norma.", points: ["Abrí el mapa desde una ficha o buscá por nombre o número.", "Reconocé el tipo y la dirección de las relaciones en el panel.", "Consultá la guía para interpretar colores, tamaños y vínculos."] },
] as const;
const navigation = [...chapters.map(({ id, label }) => ({ id, label })), { id: "movil", label: "En el celular" }];

export default function FaroHowItWorks() {
  return (
    <div className={brand.page} data-faro-theme="light">
      <a href="#contenido" className={brand.skip}>Saltar al contenido</a>
      <header className={brand.header}>
        <nav className={brand.nav} aria-label="Navegación de FARO">
          <Link href="/faro" className={brand.wordmark}><span className={brand.brandStar} aria-hidden="true">✦</span> FARO<span className={brand.brandCaption}>NORMATIVA MUNICIPAL</span></Link>
          <div className={brand.navLinks}><Link href="/faro">La plataforma</Link><a href="#recorrido">El recorrido</a><a href="#presentacion">Presentaciones</a></div>
          <div className={brand.navActions}><Link href="/faro#contacto" className={brand.navCta}>Contacto <span aria-hidden="true">↗</span></Link><ThemeToggle /></div>
        </nav>
      </header>
      <main id="contenido">
        <section className={styles.journeyHero} aria-labelledby="recorrido-titulo">
          <nav aria-label="Ruta de navegación" className={styles.breadcrumb}><Link href="/faro">FARO</Link><span aria-hidden="true">/</span><span aria-current="page">Cómo funciona</span></nav>
          <p className={styles.kicker}>UN RECORRIDO POR LA PLATAFORMA</p>
          <h1 id="recorrido-titulo">Encontrar. Comprender.<br /><em>Conectar.</em></h1>
          <div className={styles.heroBottom}><p>De la primera búsqueda al artículo que necesitás. Conocé cómo se consulta la normativa en Catamarca o explorá el Digesto directamente.</p><a href={municipalDemo.url} target="_blank" rel="noreferrer" className={styles.solidLink}>Explorar el Digesto de Catamarca <span aria-hidden="true">↗</span></a></div>
          <div className={styles.journeyFacts}><span>Implementación pública · Catamarca</span><span>Consulta web y móvil</span><span>Presentaciones clara y oscura en PDF</span></div>
        </section>
        <div id="recorrido" className={styles.journeyLayout}>
          <aside className={styles.chapterNav}><p className={styles.kicker}>EL RECORRIDO</p><nav aria-label="Capítulos del recorrido"><ol>{navigation.map((chapter, index) => <li key={chapter.id}><a href={`#${chapter.id}`}><span>{String(index + 1).padStart(2, "0")}</span>{chapter.label}</a></li>)}</ol></nav><a href="#presentacion" className={styles.inlineLink}>Ver presentaciones PDF →</a></aside>
          <div className={styles.chapterContent}>
            {chapters.map((chapter, index) => <section id={chapter.id} key={chapter.id} className={styles.chapter} aria-labelledby={`${chapter.id}-titulo`}>
              <p className={styles.kicker}>{String(index + 1).padStart(2, "0")} / {chapter.label.toUpperCase()}</p>
              <h2 id={`${chapter.id}-titulo`}>{chapter.title}</h2>
              <p className={styles.chapterLead}>{chapter.lead}</p>
              <PresentationImage src={`/images/faro/recorrido/${chapter.image}.webp`} alt={chapter.alt} caption={chapter.caption} />
              <ul className={styles.points}>{chapter.points.map(point => <li key={point}>{point}</li>)}</ul>
              {chapter.id === "conectar" && <>
                <p className={styles.chapterLead}>La guía «Cómo leer el mapa» explica qué representan los círculos y las líneas. Los colores identifican categorías y el tamaño refleja la cantidad de artículos. Una cita detectada en el texto no equivale por sí sola a una modificación o derogación.</p>
                <PresentationImage src="/images/faro/recorrido/cat-mapa-guia.webp" alt="Guía del mapa legal de Catamarca con explicación de colores, tamaños y relaciones" caption="Ayuda integrada en el mapa público, disponible también desde el botón Guía en el celular." />
                <p className={styles.note}>Las conexiones orientan la exploración. La vigencia y los efectos de una norma requieren revisar sus fuentes y su contexto jurídico.</p>
              </>}
            </section>)}
            <section className={`${styles.chapter} ${styles.nationalChapter}`} aria-labelledby="nacional-titulo"><p className={styles.kicker}>OTRO ÁMBITO, LA MISMA IDEA</p><h2 id="nacional-titulo">El texto y una explicación al lado.</h2><p className={styles.chapterLead}>El Observatorio de Leyes muestra esta experiencia en el ámbito nacional. En este ejemplo de la Ley 27.275, el articulado se acompaña con una explicación en lenguaje claro.</p><PresentationImage src="/images/faro/recorrido/nac-lectura.webp" alt="Ley 27.275 en el Observatorio de Leyes con texto y explicación en dos columnas" caption="Ejemplo del Observatorio Nacional. La explicación orienta la lectura y no reemplaza el texto normativo." /><a className={styles.inlineLink} href="https://observatorio-de-leyes.com" target="_blank" rel="noreferrer">Explorar el Observatorio de Leyes ↗</a></section>
            <section id="movil" className={styles.chapter} aria-labelledby="movil-titulo">
              <p className={styles.kicker}>06 / EN EL CELULAR</p><h2 id="movil-titulo">La consulta sigue donde estés.</h2>
              <p className={styles.chapterLead}>La ficha adapta sus datos a una pantalla pequeña. El articulado mantiene sus acciones para seguir leyendo, copiar o compartir desde el celular.</p>
              <div className={styles.phones}><PresentationImage src="/images/faro/recorrido/cat-mobile-ficha.webp" alt="Ficha de la Carta Orgánica en un celular" caption="Identificación, vigencia y categoría." mobile /><PresentationImage src="/images/faro/recorrido/cat-mobile-articulo.webp" alt="Artículo 14 con acciones de lectura en un celular" caption="Lectura y acciones del artículo." mobile /></div>
              <p className={styles.chapterLead}>En el mapa móvil, el botón Guía permite consultar cómo se representan las normas y sus relaciones.</p>
              <div className={styles.mobileGuide}><PresentationImage src="/images/faro/recorrido/cat-mobile-mapa-guia.webp" alt="Guía del mapa legal de Catamarca abierta desde un celular" caption="La ayuda del mapa también acompaña la consulta móvil." mobile /></div>
            </section>
          </div>
        </div>
        <PresentationDownloads />
        <section className={styles.journeyEnd}><p className={styles.kicker}>EL SIGUIENTE PASO</p><h2>Probalo en Catamarca.<br /><em>Imaginá tu municipio.</em></h2><p>Explorá el Digesto público y conocé las etapas de implementación de FARO para tu institución.</p><a href={municipalDemo.url} target="_blank" rel="noreferrer" className={styles.solidLink}>Explorar el Digesto de Catamarca ↗</a><Link href="/faro#implementacion" className={styles.inlineLink}>Ver la propuesta de implementación →</Link><Link href="/faro" className={styles.inlineLink}>Volver a FARO</Link></section>
      </main>
      <footer className={brand.footer}><Link href="/faro" className={brand.wordmark}>✦ FARO</Link><span>Fuente Abierta de Regulación y Ordenamiento.</span><Link href="/">Volver al portafolio ↗</Link></footer>
    </div>
  );
}

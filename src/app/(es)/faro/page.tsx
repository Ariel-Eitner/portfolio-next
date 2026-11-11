import type { Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import Lighthouse from "@/components/faro/Lighthouse";
import ToolsShowcase from "@/components/faro/ToolsShowcase";
import ThemeToggle from "@/components/faro/ThemeToggle";
import PresentationTeaser from "@/components/faro/PresentationTeaser";
import PresentationDownloads from "@/components/faro/PresentationDownloads";
import styles from "@/components/faro/faro.module.css";
import { profile, projects } from "@/data/profile";
import { faro, municipalDemo, faroQuestions as questions } from "@/data/faro";
import { faroMetadata, faroJsonLd } from "@/lib/faro-seo";
const nationalDemo = projects.find(
  (project) => project.id === "observatorio",
)!.href!;
const email = `mailto:${profile.email}?subject=${encodeURIComponent("FARO · Solicitud institucional de información")}&body=${encodeURIComponent("Se solicita información sobre FARO y la coordinación de una demostración.\n\nMunicipio o institución:\nNombre y cargo de la persona de contacto:\nTeléfono:\nNecesidades y alcance previsto:\nDisponibilidad para una demostración:\n\nSaludos cordiales.")}`;
const whatsapp = `https://wa.me/${profile.phoneHref.replace(/\D/g, "")}?text=${encodeURIComponent("Se solicita información sobre FARO y la coordinación de una demostración para una institución municipal.")}`;

export const metadata = faroMetadata;
export const viewport: Viewport = {
  themeColor: "#f7f8f5",
  colorScheme: "light",
};

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} />
    </svg>
  );
}

const capabilities = [
  {
    number: "01",
    title: "Encontrar, sin recorrer carpetas.",
    text: "Búsqueda por palabras, número, año y categoría. Una puerta de entrada común para el equipo municipal y la ciudadanía.",
    tag: "DIGESTO DIGITAL",
  },
  {
    number: "02",
    title: "Entender qué norma se relaciona con cuál.",
    text: "Reformas, derogaciones y referencias conectadas. Un mapa legal que ayuda a recorrer el contexto de cada disposición.",
    tag: "MAPA LEGAL",
  },
  {
    number: "03",
    title: "Leer con el contexto a mano.",
    text: "Articulado navegable, resúmenes para orientarse y vínculos a las fuentes de origen. La información organizada para consultar y compartir.",
    tag: "CONSULTA CLARA",
  },
];

export default function FaroPage() {
  return (
    <div className={styles.page} data-faro-theme="light">
      <a href="#contenido" className={styles.skip}>
        Saltar al contenido
      </a>
      <header className={styles.header}>
        <nav className={styles.nav} aria-label="Navegación de FARO">
          <a className={styles.wordmark} href="/faro" aria-label="FARO, inicio">
            <span className={styles.brandStar} aria-hidden="true">
              ✦
            </span>{" "}
            FARO<span className={styles.brandCaption}>NORMATIVA MUNICIPAL</span>
          </a>
          <div className={styles.navLinks}>
            <a href="#plataforma">La plataforma</a>
            <a href="#herramientas">Funciones</a>
            <Link href="/faro/como-funciona">Cómo funciona</Link>
            <a href="#implementacion">Implementación</a>
            <Link href="/" className={styles.portfolioLink}>
              Desarrollo <Arrow diagonal />
            </Link>
          </div>
          <div className={styles.navActions}>
            <a href="#contacto" className={styles.navCta}>
              Contacto <Arrow />
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main id="contenido">
        <section className={styles.hero} aria-labelledby="faro-titulo">
          <div className={styles.heroInner}>
            <Lighthouse />
            <div className={styles.heroCopy}>
              <nav
                className={styles.breadcrumb}
                aria-label="Ruta de navegación"
              >
                <ol>
                  <li>
                    <Link href="/">Inicio</Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <span aria-current="page">{faro.name}</span>
                  </li>
                </ol>
              </nav>
              <p className={styles.eyebrow}>
                <span /> INFORMACIÓN PÚBLICA. MEJORES DECISIONES.
              </p>
              <h1 id="faro-titulo">
                FARO: digesto digital
                <br />
                <em>para municipios.</em>
              </h1>
              <p className={styles.heroDescription}>
                Organice ordenanzas, decretos y resoluciones en un solo lugar.
                Software de normativa municipal para equipos de gobierno y
                ciudadanía, con búsqueda, lectura por artículos y mapa legal.
              </p>
              <div className={styles.actions}>
                <a href={municipalDemo.url} target="_blank" rel="noreferrer" className={styles.primary}>
                  Explorar el Digesto de Catamarca <Arrow diagonal />
                </a>
                <Link href="/faro/como-funciona" className={styles.textLink}>
                  Ver cómo funciona <Arrow />
                </Link>
                <a href="#contacto" className={styles.textLink}>
                  Solicitar una demostración <Arrow />
                </a>
              </div>
              <p className={styles.heroNote}>
                El Digesto Municipal de Catamarca está disponible para consultar.
                <br />
                Para municipios de Argentina y toda su comunidad.
              </p>
            </div>
          </div>
          <div className={styles.heroStrip}>
            <span>FUENTE ABIERTA DE REGULACIÓN Y ORDENAMIENTO</span>
            <div>
              <span>Ordenar.</span>
              <span>Conectar.</span>
              <span>Dar claridad.</span>
            </div>
          </div>
        </section>

        <PresentationTeaser />

        <section className={styles.section} aria-labelledby="plataforma-titulo">
          <div id="plataforma" className={styles.sectionIntro}>
            <p className={styles.eyebrow}>01 / LA PLATAFORMA</p>
            <div>
              <h2 id="plataforma-titulo">
                Un digesto municipal
                <br /><em>accesible y conectado.</em>
              </h2>
              <p>
                FARO, Fuente Abierta de Regulación y Ordenamiento, permite
                organizar ordenanzas, decretos y resoluciones en un digesto
                municipal accesible. Sus herramientas de búsqueda, lectura por
                artículos y mapa legal facilitan el acceso a la información
                normativa.
              </p>
            </div>
          </div>
          <div className={styles.capabilities}>
            {capabilities.map((item) => (
              <article key={item.number} className={styles.capability}>
                <div className={styles.capabilityTop}>
                  <span>{item.number}</span>
                  <Arrow diagonal />
                </div>
                <p className={styles.smallLabel}>{item.tag}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <ToolsShowcase />

        <section className={styles.demoSection} aria-labelledby="demo-titulo">
          <div className={styles.demoGallery}>
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}>APLICACIONES DE LA PLATAFORMA</p>
              <div>
                <h2 id="demo-titulo">
                  Una base compartida.
                  <br />
                  <em>Distintos ámbitos de aplicación.</em>
                </h2>
                <p>
                  La experiencia municipal y la nacional muestran cómo la
                  búsqueda, la lectura y las relaciones normativas pueden
                  organizarse a distintas escalas.
                </p>
              </div>
            </div>
            <div className={styles.implementationGrid}>
              <article className={styles.implementationCard}>
                <div className={styles.implementationImage}>
                  <Image
                    src="/images/faro/recorrido/cat-inicio.webp"
                    alt="Inicio del digesto municipal de Catamarca con búsqueda y categorías temáticas."
                    width={1440}
                    height={1000}
                    sizes="(max-width: 760px) 90vw, 44vw"
                  />
                </div>
                <div className={styles.implementationText}>
                  <p className={styles.smallLabel}>ÁMBITO MUNICIPAL</p>
                  <h3>San Fernando del Valle de Catamarca</h3>
                  <p>
                    Una implementación de FARO disponible en línea: búsqueda,
                    fichas, lectura por artículos y mapa legal de la normativa incorporada.
                  </p>
                  <a
                    href={municipalDemo.url}
                    className={styles.textLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Explorar el Digesto de Catamarca{" "}
                    <Arrow diagonal />
                  </a>
                </div>
              </article>
              <article className={styles.implementationCard}>
                <div className={styles.implementationImage}>
                  <Image
                    src="/images/faro/nacional-inicio.png"
                    alt="Inicio del Observatorio de Leyes con su buscador de legislación argentina."
                    width={1440}
                    height={1000}
                    sizes="(max-width: 760px) 90vw, 44vw"
                  />
                </div>
                <div className={styles.implementationText}>
                  <p className={styles.smallLabel}>ÁMBITO NACIONAL</p>
                  <h3>Observatorio de Leyes</h3>
                  <p>
                    Legislación argentina con herramientas de búsqueda, lectura
                    y exploración de conexiones normativas.
                  </p>
                  <a
                    href={nationalDemo}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.textLink}
                  >
                    Consultar el observatorio nacional <Arrow diagonal />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section
          className={styles.section}
          aria-labelledby="implementacion-titulo"
        >
          <div id="implementacion" className={styles.sectionIntro}>
            <p className={styles.eyebrow}>02 / UN CAMINO POSIBLE</p>
            <div>
              <h2 id="implementacion-titulo">
                Cada municipio tiene su historia.
                <br />
                <em>La implementación también.</em>
              </h2>
              <p>
                El punto de partida se adapta al material disponible y a las
                necesidades del equipo municipal. Un proceso por etapas, con un
                alcance acordado.
              </p>
            </div>
          </div>
          <ol className={styles.steps}>
            <li>
              <span>01</span>
              <h3>Relevamiento</h3>
              <p>
                Identificación de las fuentes, el volumen de normativa y las
                consultas más frecuentes.
              </p>
            </li>
            <li>
              <span>02</span>
              <h3>Organización</h3>
              <p>
                Definición de categorías, prioridades y etapas de incorporación
                con el equipo municipal.
              </p>
            </li>
            <li>
              <span>03</span>
              <h3>Puesta en marcha</h3>
              <p>
                Configuración de la plataforma, revisión del contenido inicial y
                capacitación de sus responsables.
              </p>
            </li>
            <li>
              <span>04</span>
              <h3>Acompañamiento</h3>
              <p>
                Actualización, soporte y mantenimiento conforme al alcance
                acordado con la institución.
              </p>
            </li>
          </ol>
          <div className={styles.implementationGrid}>
            <article className={styles.implementationCard}>
              <div className={styles.implementationText}>
                <h3>De archivos dispersos a un digesto digital</h3>
                <p>
                  Se relevan las ordenanzas, los decretos y las resoluciones
                  disponibles, sus fuentes y sus formatos. Se acuerdan las
                  categorías y las prioridades de carga, distinguiendo una ficha
                  de referencia de una norma con articulado completo. Si hay
                  documentos escaneados o en papel, se evalúan las tareas de
                  digitalización y revisión antes de cotizar.
                </p>
              </div>
            </article>
            <article className={styles.implementationCard}>
              <div className={styles.implementationText}>
                <h3>Un circuito para actualizar la normativa</h3>
                <p>
                  La implementación define responsables, revisión de fuentes y
                  frecuencia de publicación con el equipo municipal. Las
                  referencias, modificaciones y derogaciones se incorporan
                  conforme se verifica la información. El alcance de la
                  capacitación, el soporte y el mantenimiento queda establecido
                  en la propuesta.
                </p>
              </div>
            </article>
          </div>
          <div className={styles.scope}>
            <span aria-hidden="true">↳</span>
            <p>
              <strong>Una propuesta a medida, desde el principio.</strong>{" "}
              Implementación, organización del corpus y acompañamiento, con
              precios y alcance definidos para cada municipio.
            </p>
            <a href="#contacto">
              Solicitar una propuesta <Arrow />
            </a>
          </div>
        </section>

        <PresentationDownloads />

        <section
          id="preguntas"
          className={styles.faqSection}
          aria-labelledby="preguntas-titulo"
        >
          <div className={styles.faqInner}>
            <div>
              <p className={styles.eyebrow}>ANTES DE EMPEZAR</p>
              <h2 id="preguntas-titulo">
                Preguntas <br />
                <em>concretas.</em>
              </h2>
              <p>Información para evaluar una implementación municipal.</p>
            </div>
            <div className={styles.questions}>
              {questions.map(([question, answer]) => (
                <details key={question}>
                  <summary>
                    {question}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="investigacion-titulo">
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>DISEÑO Y DESARROLLO</p>
            <div>
              <h2 id="investigacion-titulo">Cómo se organiza la información normativa</h2>
              <p>
                Desarrollado por <Link href="/">{profile.name}</Link>. Estas
                investigaciones sobre el Observatorio de Leyes explican el
                enfoque de búsqueda, lectura y relaciones entre normas que
                también orienta la propuesta municipal de FARO.
              </p>
              <p>
                <Link className={styles.textLink} href="/investigacion/mapa-legal-observatorio-leyes">
                  Diseño de un mapa legal para explorar relaciones normativas <Arrow />
                </Link>
              </p>
              <p>
                <Link className={styles.textLink} href="/investigacion/reduccion-costos-lectura-observatorio-leyes">
                  Cómo facilitar la búsqueda y la lectura de legislación <Arrow />
                </Link>
              </p>
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className={styles.contact}
          aria-labelledby="contacto-titulo"
        >
          <div className={styles.contactInner}>
            <div className={styles.contactStar} aria-hidden="true">
              ✦
            </div>
            <p className={styles.eyebrow}>SOLICITUDES INSTITUCIONALES</p>
            <h2 id="contacto-titulo">
              Información clara para <br />
              <em>la gestión municipal.</em>
            </h2>
            <div className={styles.contactDescription}>
              <p>
                Solicite una demostración de la plataforma y una evaluación de
                las necesidades de su institución.
              </p>
              <p>
                La propuesta incluirá el alcance, las etapas de implementación y
                las condiciones del servicio.
              </p>
            </div>
            <div className={styles.actions}>
              <a href={email} className={styles.goldButton}>
                Solicitar información <Arrow />
              </a>
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className={styles.contactSecondary}
              >
                Consultar por WhatsApp <Arrow diagonal />
              </a>
            </div>
            <span className={styles.contactPerson}>
              Consultas sobre FARO ·{" "}
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </span>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <a href="/faro" className={styles.wordmark}>
          ✦ FARO
        </a>
        <span>Fuente Abierta de Regulación y Ordenamiento.</span>
        <Link href="/">
          Volver al portafolio de {profile.name} <Arrow diagonal />
        </Link>
      </footer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faroJsonLd()).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}

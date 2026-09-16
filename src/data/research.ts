import type { Lang } from "@/i18n/config";

type Localized<T> = Record<Lang, T>;

export type ResearchCategoryId =
  | "architecture"
  | "security"
  | "webEngineering"
  | "aiData";

export type ResearchSection = {
  title: Localized<string>;
  paragraphs: Localized<string[]>;
};

export type ResearchArticle = {
  slug: "legal-map-law-observatory" | "reducing-reading-costs-law-observatory";
  route: "legalMapResearch" | "readingCostResearch";
  category: ResearchCategoryId;
  publishedAt: string;
  readingMinutes: number;
  title: Localized<string>;
  excerpt: Localized<string>;
  summary: Localized<string>;
  readerGuide: Localized<{
    problem: string;
    solution: string;
    contents: string;
  }>;
  tags: string[];
  sections: ResearchSection[];
  pdfHref: string;
};

export const researchCategories: Record<
  ResearchCategoryId,
  { label: Localized<string>; description: Localized<string> }
> = {
  architecture: {
    label: { es: "Arquitectura y sistemas", en: "Architecture & systems" },
    description: {
      es: "Diseño de sistemas, modelos de datos y decisiones que sostienen productos en producción.",
      en: "System design, data models, and decisions that sustain production products.",
    },
  },
  security: {
    label: { es: "Seguridad aplicada", en: "Applied security" },
    description: {
      es: "Análisis responsables, hardening y aprendizajes verificables sobre seguridad web.",
      en: "Responsible analysis, hardening, and verifiable lessons in web security.",
    },
  },
  webEngineering: {
    label: { es: "Ingeniería web", en: "Web engineering" },
    description: {
      es: "Rendimiento, SEO técnico, accesibilidad, testing y observabilidad.",
      en: "Performance, technical SEO, accessibility, testing, and observability.",
    },
  },
  aiData: {
    label: { es: "IA y datos", en: "AI & data" },
    description: {
      es: "Automatización, análisis documental e integración de sistemas inteligentes.",
      en: "Automation, document analysis, and intelligent-system integration.",
    },
  },
};

export const researchUi: Localized<{
  eyebrow: string;
  title: string;
  intro: string;
  readingTime: string;
  readArticle: string;
  publication: string;
  tableOfContents: string;
  readerGuide: string;
  problem: string;
  solution: string;
  contents: string;
  relatedProject: string;
  downloadPdf: string;
  disclosure: string;
}> = {
  es: {
    eyebrow: "Investigación técnica",
    title: "Investigación aplicada sobre sistemas reales",
    intro: "Casos de estudio, análisis e informes técnicos sobre arquitectura, seguridad, ingeniería web, IA y datos.",
    readingTime: "min de lectura",
    readArticle: "Leer investigación",
    publication: "Publicación",
    tableOfContents: "En este análisis",
    readerGuide: "Antes de abrir el paper",
    problem: "Problema",
    solution: "Resolución",
    contents: "Qué vas a encontrar",
    relatedProject: "Proyecto relacionado",
    downloadPdf: "Descargar PDF",
    disclosure: "El contenido describe decisiones técnicas publicables. No incluye datos privados, credenciales ni detalles de seguridad explotables.",
  },
  en: {
    eyebrow: "Technical research",
    title: "Applied research on real systems",
    intro: "Case studies, analyses, and technical reports on architecture, security, web engineering, AI, and data.",
    readingTime: "min read",
    readArticle: "Read research",
    publication: "Publication",
    tableOfContents: "In this analysis",
    readerGuide: "Before opening the paper",
    problem: "Problem",
    solution: "Resolution",
    contents: "What you will find",
    relatedProject: "Related project",
    downloadPdf: "Download PDF",
    disclosure: "This article covers publishable technical decisions. It does not include private data, credentials, or exploitable security details.",
  },
};

export const legalMapArticle: ResearchArticle = {
  slug: "legal-map-law-observatory",
  route: "legalMapResearch",
  category: "architecture",
  publishedAt: "2026-09-16",
  readingMinutes: 7,
  title: {
    es: "Diseño de un mapa legal navegable para el Observatorio de Leyes",
    en: "Designing a navigable legal map for the Law Observatory",
  },
  excerpt: {
    es: "Cómo convertir relaciones legales complejas en una interfaz explorable, conectada a búsqueda y a un modelo de datos mantenible.",
    en: "How to turn complex legal relationships into an explorable interface connected to search and a maintainable data model.",
  },
  summary: {
    es: "Un caso de estudio sobre modelado de relaciones, visualización y límites de producto al construir una herramienta para explorar legislación argentina.",
    en: "A case study in relationship modelling, visualisation, and product boundaries while building a tool to explore Argentine legislation.",
  },
  readerGuide: {
    es: {
      problem: "El grafo normativo crecía con cada relación entre leyes y terminaba siendo costoso de calcular y difícil de explorar. Las conexiones quedaban dispersas, sin una forma clara de entender el contexto de una norma.",
      solution: "Se rediseñó el sistema para consultar y visualizar únicamente el contexto necesario de cada norma, con relaciones trazables y una navegación que deriva al texto legal y a la búsqueda del Observatorio.",
      contents: "El PDF explica el diagnóstico de escala, el cambio de estrategia que llevó el costo a un régimen constante y las decisiones de datos y visualización detrás del grafo interactivo.",
    },
    en: {
      problem: "The regulatory graph grew with every relationship between laws, becoming costly to calculate and difficult to explore. Connections were scattered, with no clear way to understand a regulation's context.",
      solution: "The system was redesigned to query and visualise only the context needed for each regulation, with traceable relationships and navigation that leads to the legal text and the Observatory search.",
      contents: "The PDF covers the scale diagnosis, the strategy change that brought cost into a constant regime, and the data and visualisation decisions behind the interactive graph.",
    },
  },
  tags: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "D3", "Full-text search"],
  pdfHref: "/papers/diseno-mapa-legal-observatorio-leyes.pdf",
  sections: [
    {
      title: { es: "El problema", en: "The problem" },
      paragraphs: {
        es: [
          "La legislación no se comporta como una lista plana. Una ley puede modificar, complementar, reglamentar o dejar sin efecto partes de otra norma. Cuando esas relaciones sólo aparecen como referencias dispersas, encontrar contexto exige demasiado trabajo manual.",
          "El objetivo del mapa fue hacer visibles esas conexiones sin reemplazar la lectura de la fuente legal. La interfaz tenía que orientar la exploración, mantener enlaces verificables a las normas y convivir con la búsqueda textual del Observatorio.",
        ],
        en: [
          "Legislation does not behave like a flat list. One law can amend, supplement, regulate, or repeal parts of another. When those relationships only appear as scattered references, finding context takes too much manual work.",
          "The map's goal was to make those connections visible without replacing the reading of the legal source. The interface had to guide exploration, retain verifiable links to regulations, and coexist with the Observatory's text search.",
        ],
      },
    },
    {
      title: { es: "Modelar relaciones antes de dibujar nodos", en: "Model relationships before drawing nodes" },
      paragraphs: {
        es: [
          "La visualización no es la fuente de verdad. Primero conviene expresar las normas y sus vínculos en un modelo relacional que permita consultar origen, destino, tipo de relación y evidencia. Eso permite que el grafo sea una vista derivada y no un conjunto de conexiones hardcodeadas en el frontend.",
          "Con NestJS, Prisma y PostgreSQL, el backend puede servir tanto los resultados de búsqueda como un subconjunto de relaciones para cada norma. La misma capa de datos evita que el mapa y el detalle documental cuenten historias distintas.",
        ],
        en: [
          "The visualisation is not the source of truth. Regulations and their links should first be expressed in a relational model that can query source, target, relationship type, and evidence. That makes the graph a derived view rather than a set of frontend-hardcoded connections.",
          "With NestJS, Prisma, and PostgreSQL, the backend can serve both search results and a subset of relationships for each regulation. The same data layer prevents the map and the document detail from telling different stories.",
        ],
      },
    },
    {
      title: { es: "Una visualización que ayuda a decidir", en: "A visualisation that helps decisions" },
      paragraphs: {
        es: [
          "D3 permite representar una red sin convertirla en una imagen fija. El desafío no es sólo dibujar enlaces: es controlar la densidad, priorizar el contexto cercano y ofrecer una salida clara hacia el texto de cada norma.",
          "Por eso el mapa se entiende como una puerta de entrada. Los nodos seleccionados deben revelar relaciones relevantes y derivar al documento o a una búsqueda filtrada. La navegación visual complementa la búsqueda; no compite con ella.",
        ],
        en: [
          "D3 makes it possible to represent a network without turning it into a static image. The challenge is not only drawing links: it is controlling density, prioritising nearby context, and offering a clear way into each regulation's text.",
          "That is why the map is treated as an entry point. Selected nodes should reveal meaningful relationships and lead to a document or filtered search. Visual navigation complements search; it does not compete with it.",
        ],
      },
    },
    {
      title: { es: "Límites que hacen al sistema confiable", en: "Boundaries that make the system reliable" },
      paragraphs: {
        es: [
          "Un mapa legal gana utilidad cuando puede explicar por qué muestra una relación. La trazabilidad de cada vínculo, el control de datos incompletos y una respuesta previsible cuando no hay conexiones son tan importantes como la animación del grafo.",
          "La lección es general: antes de elegir una librería de visualización, hay que definir qué decisión ayuda a tomar la interfaz y cuál es la fuente verificable detrás de cada elemento que muestra.",
        ],
        en: [
          "A legal map becomes useful when it can explain why it shows a relationship. Traceability for every link, handling incomplete data, and predictable behaviour when no connections exist matter as much as the graph's animation.",
          "The broader lesson is simple: before choosing a visualisation library, define which decision the interface helps make and what verifiable source stands behind every element it displays.",
        ],
      },
    },
  ],
};

export const readingCostArticle: ResearchArticle = {
  slug: "reducing-reading-costs-law-observatory",
  route: "readingCostResearch",
  category: "webEngineering",
  publishedAt: "2026-09-16",
  readingMinutes: 9,
  title: {
    es: "Reducción del costo marginal por visita en el Observatorio de Leyes",
    en: "Reducing marginal cost per visit in the Law Observatory",
  },
  excerpt: {
    es: "Cómo pasar de un servicio que se acercaba al límite operativo a un modelo de costo acotado mediante caché, compresión e invalidación selectiva.",
    en: "How a service approaching its operating limit moved to a bounded-cost model through caching, compression, and selective invalidation.",
  },
  summary: {
    es: "Un análisis de la arquitectura que elevaba el costo por visita en un servicio público de datos legislativos y de las intervenciones que redujeron transferencias, renderizados e invalidaciones innecesarias.",
    en: "An analysis of the architecture that raised cost per visit in a public legislative-data service, and the interventions that reduced unnecessary transfers, renders, and invalidations.",
  },
  readerGuide: {
    es: {
      problem: "Con 8.034 normas y 90.945 artículos, el Observatorio sufría suspensiones por costo operativo. El backend recibía cerca de 1.600 solicitudes por hora frente a 46 visitas: el costo no era una función del tráfico, sino del diseño.",
      solution: "Se restauró la entrega cacheable desde CDN, se comprimieron respuestas con Brotli/gzip, se reemplazó la invalidación total por deltas y se precalculó en servidor la resolución de referencias.",
      contents: "El PDF documenta el modelo de costo, el diagnóstico experimental, las intervenciones, la verificación con huella de enlaces y los resultados. Incluye límites y proyecciones, sin prometer una factura futura antes del ciclo posterior al despliegue.",
    },
    en: {
      problem: "With 8,034 regulations and 90,945 articles, the Observatory faced suspensions caused by operating cost. The backend received roughly 1,600 requests per hour for 46 visits: cost was not a function of traffic, but of design.",
      solution: "Cacheable CDN delivery was restored, responses were compressed with Brotli/gzip, full invalidation was replaced with deltas, and reference resolution was precomputed on the server.",
      contents: "The PDF documents the cost model, experimental diagnosis, interventions, link-fingerprint verification, and results. It includes limitations and projections without claiming a future bill before the post-deployment cycle.",
    },
  },
  tags: ["Next.js", "CDN", "Brotli", "Caching", "Performance", "Observability"],
  pdfHref: "/papers/reduccion-costos-lectura-observatorio-leyes.pdf",
  sections: [
    {
      title: { es: "Cuando el costo no sigue al tráfico", en: "When cost does not follow traffic" },
      paragraphs: {
        es: [
          "El punto de partida fue un ciclo de agosto de 2026 con USD 18,98 consumidos sobre un tope de USD 20. Los tres rubros atacados representaban el 78 % del total, pero el tráfico por sí solo no explicaba esa presión operativa.",
          "El sistema atendía aproximadamente 46 visitas por hora mientras el backend recibía cerca de 1.600 solicitudes por hora. La diferencia reveló que páginas aparentemente estáticas se regeneraban y transferían datos mucho más de lo necesario.",
        ],
        en: [
          "The starting point was an August 2026 cycle with USD 18.98 spent against a USD 20 cap. The three targeted categories accounted for 78% of the total, but traffic alone did not explain that operating pressure.",
          "The system served roughly 46 visits per hour while the backend received close to 1,600 requests per hour. The gap showed that apparently static pages were regenerating and transferring far more data than necessary.",
        ],
      },
    },
    {
      title: { es: "Diagnóstico por capas", en: "Layered diagnosis" },
      paragraphs: {
        es: [
          "La jerarquía de caché impedía servir páginas desde CDN. Además, cada página incluía un diccionario completo de normas: en un caso llegó a 1.100 kB y representó el 94,6 % del HTML. Las actualizaciones invalidaban todo el sitio, y el backend entregaba respuestas sin compresión.",
          "La resolución parcial de citas en el cliente sumaba descargas perezosas adicionales. Medir cada una de estas capas evitó tratar el costo como un síntoma único y permitió priorizar cambios que reducían trabajo repetido.",
        ],
        en: [
          "The cache hierarchy prevented pages from being served from the CDN. In addition, every page included a full regulation dictionary: one case reached 1,100 kB and represented 94.6% of the HTML. Updates invalidated the entire site, and the backend delivered uncompressed responses.",
          "Partial client-side citation resolution added extra lazy downloads. Measuring each layer avoided treating cost as a single symptom and made it possible to prioritise changes that reduced repeated work.",
        ],
      },
    },
    {
      title: { es: "Intervenciones sobre transferencia y trabajo", en: "Interventions on transfer and work" },
      paragraphs: {
        es: [
          "La primera intervención restauró la cacheabilidad y la entrega desde CDN. Luego se negoció compresión Brotli/gzip y se eligió Brotli en calidad 5 como el punto de equilibrio entre reducción y CPU.",
          "La invalidación total salió del protocolo y fue reemplazada por actualizaciones incrementales mediante deltas. Finalmente, la resolución de referencias pasó a precalcularse en servidor; el diccionario completo quedó como una carga perezosa para los casos que realmente lo requieren.",
        ],
        en: [
          "The first intervention restored cacheability and CDN delivery. Brotli/gzip compression was then negotiated, with Brotli quality 5 selected as the balance between reduction and CPU.",
          "Full invalidation was removed from the protocol and replaced with incremental delta updates. Finally, reference resolution moved to server-side precomputation; the full dictionary remained a lazy load for the cases that actually require it.",
        ],
      },
    },
    {
      title: { es: "Resultados y verificación", en: "Results and verification" },
      paragraphs: {
        es: [
          "En una muestra de doce páginas, el HTML bajó de 47.523 kB a 14.924 kB: 68,6 % menos. Una página de artículo pasó de 2.796 kB a 65 kB y la portada de 2.830 kB a 95 kB. El endpoint de navegación se redujo de 2.492.565 B a 7.147 B en crudo y a 2.520 B con Brotli.",
          "La proyección de un rastreo completo cayó de aproximadamente 57 GB a 3 GB. Para detectar regresiones silenciosas, una huella de enlaces verifica la resolución de citas y conserva correctamente las autorreferencias. El paper distingue estos resultados medidos de la validación final de facturación, que corresponde al ciclo siguiente al despliegue.",
        ],
        en: [
          "Across a sample of twelve pages, HTML fell from 47,523 kB to 14,924 kB: 68.6% less. An article page dropped from 2,796 kB to 65 kB, and the home page from 2,830 kB to 95 kB. The navigation endpoint was reduced from 2,492,565 B to 7,147 B raw and 2,520 B with Brotli.",
          "The projection for a full crawl fell from approximately 57 GB to 3 GB. To detect silent regressions, a link fingerprint verifies citation resolution and preserves self-references correctly. The paper distinguishes these measured results from final billing validation, which belongs to the cycle after deployment.",
        ],
      },
    },
  ],
};

export const researchArticles = [readingCostArticle, legalMapArticle];
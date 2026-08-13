/**
 * Modelo del mapa técnico.
 *
 * Quince áreas del desarrollo web profesional, cada una con lo que abarca
 * (`concepts`) y las tecnologías concretas con las que la trabajo (`tech`).
 * Las áreas se agrupan en cuatro "planos" que sólo determinan color y orden
 * en el anillo; los vínculos `related` son los que muestran que en la práctica
 * las disciplinas se superponen.
 *
 * El texto va en español e inglés en la misma estructura: el grafo y el índice
 * legible se renderizan desde acá en los dos idiomas.
 */

import type { Lang } from "@/i18n/config";

export type Bilingual = Record<Lang, string>;
export type BilingualList = Record<Lang, string[]>;

export type PlaneId = "frontend" | "backend" | "infra" | "cross";

export type Plane = {
  id: PlaneId;
  label: Bilingual;
  color: string;
};

export const NUCLEUS_COLOR = "#ffb224";

export const planes: Plane[] = [
  {
    id: "frontend",
    label: { es: "Frontend", en: "Frontend" },
    color: "#60a5fa",
  },
  {
    id: "backend",
    label: { es: "Backend y datos", en: "Backend & data" },
    color: "#34d399",
  },
  {
    id: "infra",
    label: { es: "Infraestructura", en: "Infrastructure" },
    color: "#22d3ee",
  },
  {
    id: "cross",
    label: { es: "Capas transversales", en: "Cross-cutting layers" },
    color: "#c084fc",
  },
];

export const planeById = new Map(planes.map((p) => [p.id, p]));

export function planeColor(id: PlaneId): string {
  return planeById.get(id)?.color ?? NUCLEUS_COLOR;
}

/** Una tecnología del mapa. `short` es sólo la etiqueta que entra en el SVG. */
export type Tech = { name: string; short?: string };

const t = (name: string, short?: string): Tech => ({ name, short });

export type Area = {
  id: string;
  plane: PlaneId;
  label: Bilingual;
  /** Una línea, para el nodo seleccionado y las tarjetas. */
  tagline: Bilingual;
  /** Dos o tres frases, para el índice legible y el panel de detalle. */
  summary: Bilingual;
  concepts: BilingualList;
  tech: Tech[];
  /** Otras áreas con las que se solapa. Genera las aristas área ↔ área. */
  related: string[];
};

export const nucleus = {
  id: "sistema",
  label: {
    es: "Sistema web en producción",
    en: "Web system in production",
  } satisfies Bilingual,
  tagline: {
    es: "Todo lo de abajo sostiene esto.",
    en: "Everything below holds this up.",
  } satisfies Bilingual,
};

export const areas: Area[] = [
  /* ---------------------------------------------------------------- FRONTEND */
  {
    id: "rendimiento",
    plane: "frontend",
    label: { es: "Rendimiento", en: "Performance" },
    tagline: {
      es: "Que el sitio sea rápido, y que se pueda demostrar.",
      en: "Making the site fast, and being able to prove it.",
    },
    summary: {
      es: "Rendimiento web medido, no intuido: cuánto JavaScript llega al navegador, cuándo pinta el primer contenido y cuánto tarda el backend en responder. Es mucho más grande que «optimizar imágenes»: cruza frontend, base de datos, caché e infraestructura.",
      en: "Web performance measured, not guessed: how much JavaScript reaches the browser, when the first content paints, how long the backend takes to answer. It's far bigger than «optimise the images»: it cuts across frontend, database, cache and infrastructure.",
    },
    concepts: {
      es: [
        "Tiempo de carga",
        "JavaScript enviado al navegador",
        "SSR / SSG / ISR / CSR",
        "Code splitting",
        "Lazy loading",
        "Optimización de imágenes",
        "Estrategias de caché",
        "CDN",
        "Compresión",
        "Core Web Vitals (LCP, INP, CLS)",
        "Consultas lentas",
        "Consumo de CPU y memoria",
        "Optimización del backend",
      ],
      en: [
        "Load time",
        "JavaScript shipped to the browser",
        "SSR / SSG / ISR / CSR",
        "Code splitting",
        "Lazy loading",
        "Image optimisation",
        "Caching strategies",
        "CDN",
        "Compression",
        "Core Web Vitals (LCP, INP, CLS)",
        "Slow queries",
        "CPU and memory usage",
        "Backend optimisation",
      ],
    },
    tech: [
      t("Next.js SSR / ISR", "SSR · ISR"),
      t("React Server Components", "RSC"),
      t("next/image + sharp", "next/image"),
      t("Code splitting"),
      t("Cloudflare CDN"),
      t("Redis"),
      t("Vercel Edge"),
      t("Lighthouse CI"),
    ],
    related: ["bases-de-datos", "infraestructura", "seo-tecnico", "observabilidad"],
  },
  {
    id: "estado",
    plane: "frontend",
    label: { es: "Estado y datos en cliente", en: "Client state & data" },
    tagline: {
      es: "Quién es dueño de cada dato y cuándo deja de ser válido.",
      en: "Who owns each piece of data, and when it stops being valid.",
    },
    summary: {
      es: "En una aplicación grande, la mitad de los bugs son de estado: datos duplicados entre servidor y cliente, cachés que no se invalidan, listas que se desincronizan. Separar estado local, estado global y server state es una decisión de arquitectura, no de librería.",
      en: "In a large application, half the bugs are state bugs: data duplicated between server and client, caches that never invalidate, lists that drift out of sync. Separating local state, global state and server state is an architecture decision, not a library choice.",
    },
    concepts: {
      es: [
        "Estado local",
        "Estado global",
        "Server state",
        "Caché de datos",
        "Sincronización",
        "Actualizaciones optimistas",
        "Paginación",
        "Scroll infinito",
        "WebSockets",
        "Datos en tiempo real",
        "Invalidación de caché",
        "Formularios y validación en cliente",
      ],
      en: [
        "Local state",
        "Global state",
        "Server state",
        "Data caching",
        "Synchronisation",
        "Optimistic updates",
        "Pagination",
        "Infinite scrolling",
        "WebSockets",
        "Real-time data",
        "Cache invalidation",
        "Forms and client-side validation",
      ],
    },
    tech: [
      t("Redux Toolkit", "Redux TK"),
      t("Zustand"),
      t("TanStack Query"),
      t("SWR"),
      t("React Context"),
      t("Server Actions"),
      t("WebSockets"),
    ],
    related: ["arquitectura", "apis", "rendimiento"],
  },
  {
    id: "accesibilidad",
    plane: "frontend",
    label: { es: "Accesibilidad", en: "Accessibility" },
    tagline: {
      es: "Que el producto funcione sin mouse y sin ver la pantalla.",
      en: "The product working without a mouse and without seeing the screen.",
    },
    summary: {
      es: "Tiene una parte de diseño, pero la mayor parte es desarrollo: HTML semántico, orden del foco, roles ARIA sólo donde el HTML no alcanza, y formularios que un lector de pantalla pueda recorrer. Además es lo mismo que necesita Google para entender la página.",
      en: "Part of it is design, but most of it is development: semantic HTML, focus order, ARIA roles only where HTML falls short, and forms a screen reader can actually walk through. It also happens to be exactly what Google needs to understand the page.",
    },
    concepts: {
      es: [
        "HTML semántico",
        "ARIA",
        "Navegación por teclado",
        "Lectores de pantalla",
        "Contraste de color",
        "Gestión del foco",
        "Formularios accesibles",
        "Captchas accesibles",
        "Tecnologías asistivas",
        "Texto alternativo",
        "Jerarquía de encabezados y landmarks",
        "prefers-reduced-motion",
      ],
      en: [
        "Semantic HTML",
        "ARIA",
        "Keyboard navigation",
        "Screen readers",
        "Colour contrast",
        "Focus management",
        "Accessible forms",
        "Accessible captchas",
        "Assistive technologies",
        "Alternative text",
        "Heading hierarchy and landmarks",
        "prefers-reduced-motion",
      ],
    },
    tech: [
      t("HTML semántico", "HTML sem."),
      t("ARIA"),
      t("shadcn/ui (Radix)", "Radix"),
      t("Lighthouse a11y", "a11y audit"),
      t("Focus management", "Focus"),
    ],
    related: ["seo-tecnico", "compatibilidad", "calidad"],
  },
  {
    id: "compatibilidad",
    plane: "frontend",
    label: { es: "Compatibilidad", en: "Compatibility" },
    tagline: {
      es: "«Funciona en Chrome» no es una respuesta.",
      en: "«It works on Chrome» is not an answer.",
    },
    summary: {
      es: "El mismo código corriendo en navegadores, sistemas operativos, resoluciones y velocidades de conexión distintas. Safari suele ser el que rompe, y las diferencias aparecen recién en producción si no hay una suite que corra en varios motores.",
      en: "The same code running across browsers, operating systems, resolutions and connection speeds. Safari is usually the one that breaks, and the differences only surface in production unless a suite runs against several engines.",
    },
    concepts: {
      es: [
        "Chrome, Firefox, Safari, Edge",
        "Android e iOS",
        "Escritorio y móvil",
        "Distintas resoluciones",
        "Conexiones lentas",
        "Diseño responsive",
        "Polyfills",
        "Degradación elegante",
        "Diferencias entre motores de render",
        "Modo oscuro y preferencias del sistema",
      ],
      en: [
        "Chrome, Firefox, Safari, Edge",
        "Android and iOS",
        "Desktop and mobile",
        "Different resolutions",
        "Slow connections",
        "Responsive design",
        "Polyfills",
        "Graceful degradation",
        "Rendering engine differences",
        "Dark mode and system preferences",
      ],
    },
    tech: [
      t("Playwright multi-navegador", "Playwright ×3"),
      t("Tailwind CSS"),
      t("PostCSS / Autoprefixer", "Autoprefixer"),
      t("React Native"),
      t("Diseño mobile-first", "Mobile-first"),
    ],
    related: ["accesibilidad", "testing", "rendimiento"],
  },

  /* ----------------------------------------------------------------- BACKEND */
  {
    id: "arquitectura",
    plane: "backend",
    label: { es: "Arquitectura de software", en: "Software architecture" },
    tagline: {
      es: "Cómo está construido el sistema, y qué cuesta cambiarlo.",
      en: "How the system is built, and what it costs to change it.",
    },
    summary: {
      es: "Los límites entre módulos y servicios, quién puede llamar a quién y qué contrato los une. Monolito o microservicios es una decisión de costo, no de moda: lo que importa es que las responsabilidades estén separadas y que los contratos se verifiquen en tiempo de compilación.",
      en: "The boundaries between modules and services, who may call whom, and what contract binds them. Monolith or microservices is a cost decision, not a fashion one: what matters is that responsibilities are separated and contracts are verified at compile time.",
    },
    concepts: {
      es: [
        "Arquitectura frontend/backend",
        "Monolito vs microservicios",
        "Separación de responsabilidades",
        "Diseño de APIs",
        "Modularidad",
        "Patrones de diseño",
        "Inyección de dependencias",
        "Escalabilidad",
        "Estructura del proyecto",
        "Comunicación entre servicios",
        "Límites de dominio",
        "Contratos compartidos y versionados",
      ],
      en: [
        "Frontend/backend architecture",
        "Monolith vs microservices",
        "Separation of concerns",
        "API design",
        "Modularity",
        "Design patterns",
        "Dependency injection",
        "Scalability",
        "Project structure",
        "Service-to-service communication",
        "Domain boundaries",
        "Shared, versioned contracts",
      ],
    },
    tech: [
      t("NestJS"),
      t("Next.js App Router", "App Router"),
      t("gRPC + protobuf", "gRPC"),
      t("Monorepo"),
      t("Contratos TypeScript", "Contratos TS"),
      t("Prisma ORM", "Prisma"),
      t("Laravel"),
      t("Docker Compose", "Compose"),
    ],
    related: ["apis", "bases-de-datos", "infraestructura", "calidad", "estado"],
  },
  {
    id: "apis",
    plane: "backend",
    label: { es: "APIs e integración", en: "APIs & integration" },
    tagline: {
      es: "Todo lo que pasa entre dos sistemas que no se conocen.",
      en: "Everything that happens between two systems that don't know each other.",
    },
    summary: {
      es: "Diseñar la superficie por la que un sistema habla con otro: contratos, versionado, validación de entrada y qué pasa cuando el otro lado falla o repite el mismo webhook tres veces. La idempotencia deja de ser teórica cuando hay un cobro de por medio.",
      en: "Designing the surface through which one system talks to another: contracts, versioning, input validation, and what happens when the other side fails or replays the same webhook three times. Idempotency stops being theoretical once money is involved.",
    },
    concepts: {
      es: [
        "REST",
        "GraphQL",
        "gRPC",
        "WebSockets",
        "Webhooks",
        "OAuth 2.0",
        "Consumo de APIs externas",
        "Rate limits",
        "Versionado de API",
        "Documentación (OpenAPI)",
        "Validación de entrada",
        "Serialización",
        "Idempotencia",
        "Paginación y filtros",
        "Manejo y códigos de error",
      ],
      en: [
        "REST",
        "GraphQL",
        "gRPC",
        "WebSockets",
        "Webhooks",
        "OAuth 2.0",
        "Third-party API consumption",
        "Rate limits",
        "API versioning",
        "Documentation (OpenAPI)",
        "Input validation",
        "Serialisation",
        "Idempotency",
        "Pagination and filtering",
        "Error handling and status codes",
      ],
    },
    tech: [
      t("APIs REST", "REST"),
      t("GraphQL"),
      t("gRPC"),
      t("Webhooks"),
      t("OAuth 2.0 / JWT", "OAuth · JWT"),
      t("Stripe"),
      t("Mercado Pago", "Mercado Pago"),
      t("OpenAI API"),
      t("Anthropic Claude API", "Claude API"),
      t("Zoho CRM API", "Zoho CRM"),
      t("OpenAPI / Swagger", "OpenAPI"),
      t("Zod / class-validator", "Zod"),
    ],
    related: ["arquitectura", "seguridad", "confiabilidad", "estado"],
  },
  {
    id: "bases-de-datos",
    plane: "backend",
    label: { es: "Bases de datos", en: "Databases" },
    tagline: {
      es: "Que una búsqueda tarde 20 ms y no 2 segundos.",
      en: "The difference between a 20 ms search and a 2 second one.",
    },
    summary: {
      es: "Es una disciplina propia: modelar el esquema, elegir los índices correctos, entender el plan de ejecución de una consulta y versionar cada migración. La diferencia entre un producto que escala y uno que se cae un martes a la tarde suele estar acá.",
      en: "A discipline of its own: modelling the schema, choosing the right indexes, reading a query's execution plan and versioning every migration. The difference between a product that scales and one that falls over on a Tuesday afternoon usually lives here.",
    },
    concepts: {
      es: [
        "Diseño del esquema",
        "Relaciones y normalización",
        "Índices",
        "Consultas y planes de ejecución",
        "Transacciones",
        "Concurrencia y bloqueos",
        "Migraciones versionadas",
        "Integridad referencial",
        "Replicación",
        "Backups y restauración",
        "Optimización de consultas",
        "Cachés",
        "SQL vs NoSQL",
        "Búsqueda full-text",
      ],
      en: [
        "Schema design",
        "Relationships and normalisation",
        "Indexes",
        "Queries and execution plans",
        "Transactions",
        "Concurrency and locking",
        "Versioned migrations",
        "Referential integrity",
        "Replication",
        "Backups and restore",
        "Query optimisation",
        "Caches",
        "SQL vs NoSQL",
        "Full-text search",
      ],
    },
    tech: [
      t("PostgreSQL"),
      t("MySQL"),
      t("MongoDB"),
      t("Supabase"),
      t("Prisma ORM", "Prisma"),
      t("Redis"),
      t("SQLite"),
      t("Migraciones SQL", "Migraciones"),
      t("Full-text search", "Full-text"),
    ],
    related: ["arquitectura", "rendimiento", "confiabilidad", "observabilidad"],
  },

  /* ---------------------------------------------------------------- INFRAESTR */
  {
    id: "infraestructura",
    plane: "infra",
    label: { es: "Infraestructura y DevOps", en: "Infrastructure & DevOps" },
    tagline: {
      es: "Dónde y cómo vive la aplicación.",
      en: "Where and how the application actually lives.",
    },
    summary: {
      es: "Contenedores, pipelines, dominios, certificados y CDN. El objetivo es que desplegar sea aburrido: el mismo artefacto en desarrollo y en producción, entornos separados y un pipeline que corra tests antes de dejar pasar nada.",
      en: "Containers, pipelines, domains, certificates and CDN. The goal is for deployment to be boring: the same artifact in development and production, separate environments, and a pipeline that runs the tests before letting anything through.",
    },
    concepts: {
      es: [
        "Servidores",
        "Contenedores",
        "CI/CD",
        "Despliegues y rollback",
        "Reverse proxy",
        "CDN",
        "DNS",
        "Balanceo de carga",
        "Variables de entorno y secretos",
        "Logs",
        "Backups",
        "Escalado horizontal y vertical",
        "Cloud",
        "Gestión de dominios",
        "Certificados SSL/TLS",
        "Tareas programadas (crons)",
      ],
      en: [
        "Servers",
        "Containers",
        "CI/CD",
        "Deployments and rollback",
        "Reverse proxy",
        "CDN",
        "DNS",
        "Load balancing",
        "Environment variables and secrets",
        "Logs",
        "Backups",
        "Horizontal and vertical scaling",
        "Cloud",
        "Domain management",
        "SSL/TLS certificates",
        "Scheduled jobs (crons)",
      ],
    },
    tech: [
      t("Docker"),
      t("Docker Compose", "Compose"),
      t("Kubernetes", "K8s"),
      t("GitHub Actions", "GH Actions"),
      t("Vercel"),
      t("Render"),
      t("Microsoft Azure", "Azure"),
      t("AWS S3"),
      t("Cloudflare (WAF, CDN)", "Cloudflare"),
      t("Nginx"),
      t("Vercel Crons", "Crons"),
    ],
    related: ["confiabilidad", "seguridad", "observabilidad", "rendimiento", "arquitectura"],
  },
  {
    id: "confiabilidad",
    plane: "infra",
    label: { es: "Confiabilidad", en: "Reliability" },
    tagline: {
      es: "Distinto de rendimiento: ¿sigue funcionando bien?",
      en: "Different from performance: is it still working correctly?",
    },
    summary: {
      es: "Rendimiento pregunta qué tan rápido responde; confiabilidad pregunta si sigue respondiendo cuando algo falla. Reintentos con backoff, timeouts, fallbacks y procesamiento idempotente son lo que separa un incidente de una caída.",
      en: "Performance asks how fast it responds; reliability asks whether it still responds when something breaks. Retries with backoff, timeouts, fallbacks and idempotent processing are what separate an incident from an outage.",
    },
    concepts: {
      es: [
        "Manejo de errores",
        "Reintentos con backoff",
        "Timeouts",
        "Circuit breakers",
        "Fallbacks",
        "Redundancia",
        "Backups",
        "Recuperación ante desastres",
        "Degradación elegante",
        "Alta disponibilidad",
        "Idempotencia",
        "Colas y reprocesamiento",
      ],
      en: [
        "Error handling",
        "Retries with backoff",
        "Timeouts",
        "Circuit breakers",
        "Fallbacks",
        "Redundancy",
        "Backups",
        "Disaster recovery",
        "Graceful degradation",
        "High availability",
        "Idempotency",
        "Queues and reprocessing",
      ],
    },
    tech: [
      t("Webhooks idempotentes", "Idempotencia"),
      t("Reintentos con backoff", "Backoff"),
      t("Timeouts"),
      t("Health checks"),
      t("Backups automatizados", "Backups"),
      t("Entornos dev / tst / prod", "dev·tst·prod"),
    ],
    related: ["infraestructura", "apis", "observabilidad", "bases-de-datos"],
  },

  /* ------------------------------------------------------------- TRANSVERSAL */
  {
    id: "seguridad",
    plane: "cross",
    label: { es: "Ciberseguridad", en: "Cybersecurity" },
    tagline: {
      es: "Proteger el sistema, los datos y las cuentas.",
      en: "Protecting the system, the data and the accounts.",
    },
    summary: {
      es: "Validación de todo lo que entra, autenticación y autorización separadas, secretos fuera del repositorio y cabeceras que cierren lo que el navegador deja abierto por defecto. La superficie de ataque incluye las dependencias y la infraestructura, no sólo el código propio.",
      en: "Validating everything that comes in, keeping authentication and authorisation separate, secrets out of the repo, and headers that close what the browser leaves open by default. The attack surface includes your dependencies and your infrastructure, not just your own code.",
    },
    concepts: {
      es: [
        "SQL Injection",
        "XSS",
        "CSRF",
        "SSRF",
        "CORS",
        "Autenticación",
        "Autorización y roles",
        "JWT y sesiones",
        "Hashing de contraseñas",
        "Rate limiting",
        "Protección de APIs",
        "Gestión de secretos",
        "Validación de entradas",
        "Seguridad de dependencias",
        "Cabeceras de seguridad y CSP",
        "HTTPS/TLS",
        "Seguridad de infraestructura",
      ],
      en: [
        "SQL injection",
        "XSS",
        "CSRF",
        "SSRF",
        "CORS",
        "Authentication",
        "Authorisation and roles",
        "JWT and sessions",
        "Password hashing",
        "Rate limiting",
        "API protection",
        "Secret management",
        "Input validation",
        "Dependency security",
        "Security headers and CSP",
        "HTTPS/TLS",
        "Infrastructure security",
      ],
    },
    tech: [
      t("Auth0"),
      t("JWT en cookies HTTP-only", "JWT + cookies"),
      t("Hashing bcrypt / Argon2", "bcrypt"),
      t("Cloudflare WAF", "WAF"),
      t("reCAPTCHA v3", "reCAPTCHA"),
      t("Content Security Policy", "CSP"),
      t("Rate limiting"),
      t("HTTPS / TLS", "TLS"),
    ],
    related: ["apis", "infraestructura", "dependencias", "confiabilidad"],
  },
  {
    id: "observabilidad",
    plane: "cross",
    label: { es: "Observabilidad", en: "Observability" },
    tagline: {
      es: "¿Qué está pasando dentro del sistema, ahora mismo?",
      en: "What is happening inside the system, right now?",
    },
    summary: {
      es: "La mayoría de los sitios chicos no la tienen, y por eso se enteran de los problemas por un mail de un usuario. Con observabilidad la frase deja de ser «va lento» y pasa a ser «el endpoint /laws/search tarda 1,8 s y falla el 4 % de las veces».",
      en: "Most small sites don't have it, which is why they find out about problems from a user's email. With observability, «it feels slow» turns into «the /laws/search endpoint takes 1.8 s and fails 4 % of the time».",
    },
    concepts: {
      es: [
        "Logs estructurados",
        "Seguimiento de errores",
        "Métricas",
        "Monitoreo",
        "Trazas distribuidas",
        "Latencia por endpoint",
        "Volumen de requests",
        "Errores 5xx",
        "Uso de CPU y memoria",
        "Rendimiento de la base de datos",
        "Alertas",
        "Health checks",
        "Analítica de producto",
      ],
      en: [
        "Structured logs",
        "Error tracking",
        "Metrics",
        "Monitoring",
        "Distributed tracing",
        "Per-endpoint latency",
        "Request volume",
        "5xx errors",
        "CPU and memory usage",
        "Database performance",
        "Alerting",
        "Health checks",
        "Product analytics",
      ],
    },
    tech: [
      t("Sentry"),
      t("Google Analytics 4", "GA4"),
      t("Hotjar"),
      t("Vercel Analytics", "Vercel An."),
      t("Logs estructurados", "Logs"),
      t("Health checks"),
      t("Google Search Console", "Search Console"),
    ],
    related: ["infraestructura", "rendimiento", "confiabilidad", "bases-de-datos"],
  },
  {
    id: "testing",
    plane: "cross",
    label: { es: "Testing y QA", en: "Testing & QA" },
    tagline: {
      es: "Comprobar el recorrido completo, no sólo las funciones.",
      en: "Checking the whole journey, not just the functions.",
    },
    summary: {
      es: "Tests unitarios sobre la lógica de dominio, de integración sobre las APIs y E2E sobre los recorridos que dan plata: login, checkout, formularios. Un E2E puede recorrer usuario → login → API → base de datos de forma automática en cada push.",
      en: "Unit tests over domain logic, integration tests over the APIs and E2E over the journeys that make money: login, checkout, forms. An E2E can walk user → login → API → database automatically on every push.",
    },
    concepts: {
      es: [
        "Tests unitarios",
        "Tests de integración",
        "Tests end-to-end",
        "Tests de APIs",
        "Tests de componentes",
        "Tests de regresión",
        "Tests de carga",
        "Tests de estrés",
        "Tests de seguridad",
        "Cobertura",
        "Fixtures y mocks",
        "Tests en CI",
      ],
      en: [
        "Unit tests",
        "Integration tests",
        "End-to-end tests",
        "API tests",
        "Component tests",
        "Regression tests",
        "Load tests",
        "Stress tests",
        "Security tests",
        "Coverage",
        "Fixtures and mocks",
        "Tests in CI",
      ],
    },
    tech: [
      t("Playwright"),
      t("Jest"),
      t("Vitest"),
      t("Cypress"),
      t("Testing Library", "RTL"),
      t("PHPUnit"),
      t("pytest"),
      t("Storybook"),
      t("SonarQube"),
    ],
    related: ["calidad", "compatibilidad", "infraestructura", "confiabilidad"],
  },
  {
    id: "seo-tecnico",
    plane: "cross",
    label: { es: "SEO técnico", en: "Technical SEO" },
    tagline: {
      es: "Que Google pueda rastrear, entender e indexar el sitio.",
      en: "Letting Google crawl, understand and index the site.",
    },
    summary: {
      es: "No es escribir contenido: es que la infraestructura del sitio deje que un rastreador lo recorra. Sitemaps, canonical, structured data, códigos de estado correctos, redirecciones 301 en cada migración de URLs y renderizado en servidor de lo que tiene que indexarse.",
      en: "It isn't about writing content: it's about the site's plumbing letting a crawler through. Sitemaps, canonicals, structured data, correct status codes, 301 redirects on every URL migration, and server rendering for anything that has to be indexed.",
    },
    concepts: {
      es: [
        "Sitemap XML",
        "robots.txt",
        "URL canónica",
        "Metadata y títulos",
        "Structured data / JSON-LD",
        "Estructura de URLs",
        "Redirecciones 301",
        "Códigos de estado HTTP",
        "SSR e indexación",
        "Crawling y presupuesto de rastreo",
        "Enlazado interno",
        "Open Graph y Twitter Cards",
        "Core Web Vitals",
        "hreflang e internacionalización",
      ],
      en: [
        "XML sitemap",
        "robots.txt",
        "Canonical URLs",
        "Metadata and titles",
        "Structured data / JSON-LD",
        "URL structure",
        "301 redirects",
        "HTTP status codes",
        "SSR and indexing",
        "Crawling and crawl budget",
        "Internal linking",
        "Open Graph and Twitter Cards",
        "Core Web Vitals",
        "hreflang and internationalisation",
      ],
    },
    tech: [
      t("Sitemaps dinámicos", "Sitemaps"),
      t("JSON-LD (schema.org)", "JSON-LD"),
      t("Metadata API de Next.js", "Metadata API"),
      t("Redirecciones 301", "301"),
      t("Open Graph"),
      t("hreflang"),
      t("Lighthouse + Puppeteer", "Lighthouse"),
      t("Google Search Console", "Search Console"),
    ],
    related: ["rendimiento", "accesibilidad", "arquitectura", "observabilidad"],
  },
  {
    id: "calidad",
    plane: "cross",
    label: { es: "Calidad del código", en: "Code quality" },
    tagline: {
      es: "La parte que el usuario no ve y paga igual.",
      en: "The part the user never sees and pays for anyway.",
    },
    summary: {
      es: "Tipos estrictos, convenciones consistentes, revisiones de código y refactors a tiempo. La deuda técnica no es un problema estético: es la razón por la que una funcionalidad que debería tomar dos días termina tomando dos semanas.",
      en: "Strict types, consistent conventions, code review and refactors done in time. Technical debt isn't an aesthetic problem: it's why a feature that should take two days ends up taking two weeks.",
    },
    concepts: {
      es: [
        "TypeScript estricto",
        "Linting",
        "Formateo automático",
        "Code review",
        "Refactoring",
        "SOLID",
        "DRY",
        "Complejidad ciclomática",
        "Convenciones de nombres",
        "Documentación técnica",
        "Deuda técnica",
        "Git hooks y commits convencionales",
      ],
      en: [
        "Strict TypeScript",
        "Linting",
        "Automatic formatting",
        "Code review",
        "Refactoring",
        "SOLID",
        "DRY",
        "Cyclomatic complexity",
        "Naming conventions",
        "Technical documentation",
        "Technical debt",
        "Git hooks and conventional commits",
      ],
    },
    tech: [
      t("TypeScript strict", "TS strict"),
      t("ESLint"),
      t("Prettier"),
      t("Husky"),
      t("SonarQube"),
      t("Code review"),
    ],
    related: ["arquitectura", "testing", "dependencias", "accesibilidad"],
  },
  {
    id: "dependencias",
    plane: "cross",
    label: { es: "Dependencias y supply chain", en: "Dependencies & supply chain" },
    tagline: {
      es: "Un npm install puede traer otras cincuenta librerías.",
      en: "One npm install can drag in fifty more libraries.",
    },
    summary: {
      es: "Cada paquete que se instala entra al build y a producción con los mismos permisos que el código propio. Lockfiles, auditorías, actualizaciones a tiempo y criterio para no adoptar librerías abandonadas son parte del trabajo, no un extra.",
      en: "Every package you install enters the build and production with the same privileges as your own code. Lockfiles, audits, timely updates and the judgement not to adopt abandoned libraries are part of the job, not an extra.",
    },
    concepts: {
      es: [
        "Paquetes npm",
        "Vulnerabilidades conocidas (CVE)",
        "Versionado semántico",
        "Lockfiles",
        "Dependencias transitivas",
        "Actualizaciones y breaking changes",
        "Licencias",
        "Supply chain de software",
        "Dependencias abandonadas",
        "Auditorías automáticas",
        "Tamaño del bundle",
      ],
      en: [
        "npm packages",
        "Known vulnerabilities (CVE)",
        "Semantic versioning",
        "Lockfiles",
        "Transitive dependencies",
        "Updates and breaking changes",
        "Licences",
        "Software supply chain",
        "Abandoned dependencies",
        "Automated audits",
        "Bundle size",
      ],
    },
    tech: [
      t("npm"),
      t("Lockfiles"),
      t("Dependabot"),
      t("npm audit"),
      t("Composer"),
      t("SemVer"),
    ],
    related: ["seguridad", "calidad", "infraestructura"],
  },
];

export const areaById = new Map(areas.map((a) => [a.id, a]));

export const TOTAL_TECH = areas.reduce((n, a) => n + a.tech.length, 0);

/* -------------------------------------------------------------------------- */
/*  Recorridos: cómo se cruzan las áreas en un request real                    */
/* -------------------------------------------------------------------------- */

export type FlowStep = { label: Bilingual; areas: string[] };

export type Flow = {
  id: string;
  title: Bilingual;
  caption: Bilingual;
  steps: FlowStep[];
};

export const flows: Flow[] = [
  {
    id: "busqueda",
    title: {
      es: "Una búsqueda en el Observatorio de Leyes",
      en: "A search in the Law Observatory",
    },
    caption: {
      es: "Nueve saltos para devolver una lista de leyes. Cada uno pertenece a un área distinta.",
      en: "Nine hops to return a list of laws. Each one belongs to a different area.",
    },
    steps: [
      { label: { es: "Usuario", en: "User" }, areas: ["accesibilidad", "compatibilidad"] },
      { label: { es: "Next.js", en: "Next.js" }, areas: ["rendimiento", "estado"] },
      { label: { es: "Cloudflare", en: "Cloudflare" }, areas: ["infraestructura", "seguridad"] },
      { label: { es: "NestJS", en: "NestJS" }, areas: ["arquitectura", "apis"] },
      { label: { es: "Auth + rate limit", en: "Auth + rate limit" }, areas: ["seguridad"] },
      { label: { es: "Búsqueda full-text", en: "Full-text search" }, areas: ["bases-de-datos"] },
      { label: { es: "PostgreSQL", en: "PostgreSQL" }, areas: ["bases-de-datos", "rendimiento"] },
      { label: { es: "Caché", en: "Cache" }, areas: ["rendimiento", "confiabilidad"] },
      { label: { es: "Sentry + métricas", en: "Sentry + metrics" }, areas: ["observabilidad"] },
    ],
  },
  {
    id: "checkout",
    title: {
      es: "Un checkout multi-país",
      en: "A multi-country checkout",
    },
    caption: {
      es: "Donde hay dinero, la idempotencia y la trazabilidad dejan de ser opcionales.",
      en: "Where money is involved, idempotency and traceability stop being optional.",
    },
    steps: [
      { label: { es: "Formulario", en: "Form" }, areas: ["accesibilidad", "estado"] },
      { label: { es: "API Route", en: "API route" }, areas: ["apis", "seguridad"] },
      { label: { es: "Gateway Laravel", en: "Laravel gateway" }, areas: ["arquitectura", "apis"] },
      { label: { es: "Stripe / Mercado Pago", en: "Stripe / Mercado Pago" }, areas: ["apis"] },
      { label: { es: "Webhook idempotente", en: "Idempotent webhook" }, areas: ["confiabilidad", "apis"] },
      { label: { es: "PostgreSQL", en: "PostgreSQL" }, areas: ["bases-de-datos"] },
      { label: { es: "Zoho CRM", en: "Zoho CRM" }, areas: ["apis"] },
      { label: { es: "E2E Playwright", en: "Playwright E2E" }, areas: ["testing"] },
      { label: { es: "Sentry", en: "Sentry" }, areas: ["observabilidad"] },
    ],
  },
  {
    id: "deploy",
    title: {
      es: "De un push a producción",
      en: "From a push to production",
    },
    caption: {
      es: "El pipeline que hace que desplegar sea aburrido, que es exactamente lo que se busca.",
      en: "The pipeline that makes deploying boring, which is exactly the point.",
    },
    steps: [
      { label: { es: "git push", en: "git push" }, areas: ["calidad"] },
      { label: { es: "GitHub Actions", en: "GitHub Actions" }, areas: ["infraestructura"] },
      { label: { es: "Lint + typecheck", en: "Lint + typecheck" }, areas: ["calidad"] },
      { label: { es: "Tests", en: "Tests" }, areas: ["testing"] },
      { label: { es: "npm audit", en: "npm audit" }, areas: ["dependencias", "seguridad"] },
      { label: { es: "Build Docker", en: "Docker build" }, areas: ["infraestructura"] },
      { label: { es: "Deploy", en: "Deploy" }, areas: ["infraestructura", "confiabilidad"] },
      { label: { es: "Lighthouse CI", en: "Lighthouse CI" }, areas: ["rendimiento", "seo-tecnico"] },
      { label: { es: "Search Console", en: "Search Console" }, areas: ["seo-tecnico", "observabilidad"] },
    ],
  },
];

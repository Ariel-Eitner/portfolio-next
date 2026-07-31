/**
 * Fuente única de contenido del portfolio.
 * Editá sólo este archivo para actualizar el sitio: las secciones se derivan de acá.
 */

export const site = {
  url: "https://portfolio-next-xi-nine.vercel.app",
  gaId: "G-7D5PXZ28B6",
} as const;

export const profile = {
  name: "Ariel Eitner",
  initials: "AE",
  role: "Desarrollador Full Stack",
  tagline: "Next.js · React · TypeScript · NestJS · Node.js",
  location: "Buenos Aires, Argentina",
  availability: "Disponible para trabajo remoto",
  yearsOfExperience: "6+",
  email: "ariel.10.e@hotmail.com",
  phone: "+54 9 11 6529-3997",
  phoneHref: "+5491165293997",
  github: "https://github.com/Ariel-Eitner",
  linkedin: "https://www.linkedin.com/in/ariel-eitner-414171225/",
  /**
   * Frase de apertura del hero. Se parte en líneas para controlar el ritmo
   * tipográfico en pantallas grandes.
   */
  heroStatement: [
    "Arquitectura, backend",
    "e infraestructura",
    "para plataformas",
    "en producción.",
  ],
  summary:
    "Desarrollador Full Stack con más de 6 años construyendo aplicaciones web escalables en el ecosistema TypeScript (Next.js, React, NestJS, Prisma) y PHP/Laravel, con Python para automatización, scraping y análisis de datos.",
  summarySecondary:
    "Actualmente lidero el desarrollo de una plataforma edtech multi-país: microservicios dockerizados, pasarelas de pago internacionales, integración de modelos de lenguaje, SEO técnico, testing E2E y CI/CD.",
  summaryTertiary:
    "Mi formación inicial en electrónica orientó el modo en que abordo el software: prioridad a los límites explícitos entre componentes, a la trazabilidad de los estados y al costo de mantenimiento a mediano plazo.",
} as const;

/* -------------------------------------------------------------------------- */
/*  Métricas del hero                                                          */
/* -------------------------------------------------------------------------- */

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "6+", label: "años de experiencia" },
  { value: "125+", label: "páginas en producción" },
  { value: "300+", label: "componentes en el portal que lidero" },
  { value: "145+", label: "API routes escritas y mantenidas" },
];

/* -------------------------------------------------------------------------- */
/*  Principios — reemplaza la vieja sección "Servicios"                        */
/* -------------------------------------------------------------------------- */

export type Principle = { title: string; body: string };

export const principles: Principle[] = [
  {
    title: "Arquitectura y contratos tipados",
    body: "Separación de responsabilidades entre capas y servicios, con contratos TypeScript compartidos y verificados en tiempo de compilación. Microservicios comunicados por gRPC sobre esquemas protobuf y librerías de contratos versionadas entre backend y frontend.",
  },
  {
    title: "Integración de pasarelas de pago",
    body: "Stripe, Mercado Pago, PayPal y Rebill sobre un checkout multi-país. Procesamiento de webhooks idempotente, reconciliación de estados de orden, política de reintentos y trazabilidad de transacciones en una pasarela propia.",
  },
  {
    title: "SEO técnico",
    body: "Sitemaps dinámicos, structured data JSON-LD (schema.org), migración de URLs con redirecciones 301, optimización de Core Web Vitals y auditorías Lighthouse automatizadas con Puppeteer, monitoreadas en Google Search Console.",
  },
  {
    title: "Integración de modelos de lenguaje",
    body: "APIs de Anthropic Claude y OpenAI aplicadas a funcionalidades de producto: extracción y análisis de datos sobre documentos legales, asistencia de escritura con respuesta en streaming y agentes conversacionales con contexto persistido.",
  },
  {
    title: "Testing automatizado",
    body: "Playwright para flujos E2E de checkout y formularios, Vitest y Jest sobre lógica de dominio, Cypress y PHPUnit según el stack. Análisis estático y control de deuda técnica con SonarQube.",
  },
  {
    title: "CI/CD e infraestructura",
    body: "GitHub Actions con entornos separados de desarrollo y producción, contenedores Docker para paridad con producción, orquestación con Docker Compose y Kubernetes, tareas programadas en Vercel Crons y migraciones SQL versionadas.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Stack técnico                                                              */
/* -------------------------------------------------------------------------- */

export type SkillGroup = { category: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "shadcn/ui",
      "Redux Toolkit",
      "Zustand",
      "SWR",
      "Framer Motion",
      "Astro",
      "React Native",
      "Responsive mobile-first",
    ],
  },
  {
    category: "Backend",
    items: [
      "NestJS",
      "Node.js",
      "Laravel (7–11)",
      "PHP",
      "Express",
      "APIs REST",
      "GraphQL",
      "Microservicios gRPC",
      "WebSockets",
      "Prisma ORM",
    ],
  },
  {
    category: "Bases de datos",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Supabase",
      "Migraciones SQL versionadas",
      "SQLite",
      "Firebase",
      "Optimización de consultas",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "Vercel (deploy + crons)",
      "Render",
      "Microsoft Azure",
      "AWS S3",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "GitHub Actions",
      "Cloudflare (WAF, CDN)",
      "Git",
    ],
  },
  {
    category: "Pagos e integraciones",
    items: [
      "Stripe",
      "Mercado Pago",
      "PayPal",
      "Rebill",
      "Auth0",
      "Zoho CRM",
      "Google Sheets API",
      "OpenAI API",
      "Anthropic Claude API",
      "Apollo.io",
      "Vimeo API",
      "WordPress",
    ],
  },
  {
    category: "SEO y analítica",
    items: [
      "SEO técnico",
      "Google Search Console",
      "Sitemaps dinámicos",
      "JSON-LD (schema.org)",
      "Core Web Vitals",
      "Lighthouse",
      "Google Analytics",
      "Hotjar",
      "Sentry",
    ],
  },
  {
    category: "Calidad y testing",
    items: [
      "Playwright (E2E)",
      "Jest",
      "Vitest",
      "Cypress",
      "Testing Library",
      "PHPUnit",
      "SonarQube",
      "ESLint",
      "Prettier",
      "Husky",
      "Storybook",
      "Code review",
    ],
  },
  {
    category: "Python",
    items: [
      "BeautifulSoup",
      "Playwright",
      "Puppeteer",
      "Procesamiento de PDFs",
      "Exportación a Excel",
      "Apps de escritorio",
      "Análisis cuantitativo",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Experiencia                                                                */
/* -------------------------------------------------------------------------- */

export type Job = {
  company: string;
  role: string;
  period: string;
  mode: string;
  current?: boolean;
  bullets: string[];
  tags: string[];
};

export const experience: Job[] = [
  {
    company: "MSK LATAM",
    role: "Desarrollador Líder Full Stack",
    period: "2024 — Presente",
    mode: "Remoto",
    current: true,
    bullets: [
      "Lidero el desarrollo del portal de conocimiento médico multi-país (edtech/ecommerce) con Next.js, React, TypeScript y Tailwind CSS: ~50 páginas, más de 100 API routes y 300+ componentes, con internacionalización (next-intl) para toda LATAM.",
      "Integré las pasarelas Stripe, Mercado Pago, PayPal y Rebill en el checkout y en una pasarela de pagos propia, habilitando cobros online en múltiples países.",
      "Desarrollo y mantengo una arquitectura de microservicios backend en Laravel dockerizados: gateway de pagos, integración con Zoho CRM, generación de certificados PDF con códigos QR e intranet administrativa.",
      "SEO técnico end-to-end: sitemaps dinámicos, structured data JSON-LD, migración de URLs, Core Web Vitals y auditorías con Lighthouse seguidas en Google Search Console.",
      "Testing automatizado con Playwright (E2E de checkout y formularios), Vitest y Jest; calidad de código con SonarQube.",
      "CI/CD con GitHub Actions (entornos dev/prod), Docker y cron jobs en Vercel; datos en Supabase (PostgreSQL) con migraciones versionadas.",
      "Autenticación con Auth0 y reCAPTCHA v3; seguridad con Cloudflare (WAF, CDN); monitoreo con Sentry, Google Analytics y Hotjar.",
      "Desarrollé un asistente de venta presencial para el equipo comercial (Next.js, shadcn/ui, Zustand) que crea leads, contactos y órdenes en Zoho CRM, con sincronización a Google Sheets cada 5 minutos vía Vercel Crons.",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Laravel",
      "Docker",
      "Supabase",
      "Stripe",
      "Playwright",
    ],
  },
  {
    company: "ScriptAI",
    role: "Ingeniero de Software Full Stack",
    period: "2023 — 2024",
    mode: "Remoto",
    bullets: [
      "Diseñé y desarrollé una plataforma SaaS con IA de punta a punta: frontend, backend y base de datos.",
      "Integré la API de OpenAI para un chatbot conversacional y un editor de texto con asistencia de IA en tiempo real.",
      "Implementé autenticación segura con Auth0 (SSO, sesiones y roles) e infraestructura cloud en Microsoft Azure.",
    ],
    tags: ["React", "Node.js", "OpenAI API", "Auth0", "Azure"],
  },
  {
    company: "Clientes y proyectos propios",
    role: "Desarrollador Freelance",
    period: "2019 — 2022",
    mode: "Buenos Aires",
    bullets: [
      "Desarrollé una aplicación móvil con React Native (Android/iOS) usando Firebase, GraphQL (Apollo Server) y MongoDB.",
      "Construí sitios web completos para clientes de bienes raíces y servicios con PHP, MySQL, JavaScript y SASS, gestionando la relación directa con los clientes.",
    ],
    tags: ["React Native", "GraphQL", "MongoDB", "PHP", "MySQL"],
  },
];

/* -------------------------------------------------------------------------- */
/*  Proyectos                                                                  */
/* -------------------------------------------------------------------------- */

export type Project = {
  title: string;
  blurb: string;
  description: string;
  stack: string[];
  href?: string;
  /** Métrica breve que da escala al proyecto de un vistazo. */
  metric?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Observatorio de Leyes Argentinas",
    blurb: "Plataforma freemium que digitaliza, busca y explica la legislación argentina.",
    description:
      "Leyes, DNU, códigos y jurisprudencia en un solo lugar. Backend NestJS + Prisma con 24 modelos sobre Supabase/PostgreSQL y frontend en Next.js. Análisis de contratos con Anthropic Claude, pagos con Mercado Pago vía webhooks, visualización de grafos con D3, búsqueda full-text y SEO industrial: sitemaps dinámicos, JSON-LD y una auditoría propia con Lighthouse + Puppeteer.",
    stack: [
      "NestJS",
      "Prisma",
      "Supabase",
      "Next.js",
      "Claude API",
      "Mercado Pago",
      "D3",
    ],
    href: "https://observatorio-de-leyes-front.vercel.app",
    metric: "75 páginas · 45 API routes en producción",
    featured: true,
  },
  {
    title: "Plataforma de trading cuantitativo",
    blurb: "Motor propio de backtesting vela a vela, sin look-ahead.",
    description:
      "Optimización multi-core, análisis walk-forward y simulaciones de Monte Carlo, con métricas Sharpe, Sortino y Calmar. Incluye un bot de paper trading alimentado con datos de Binance y un dashboard web para seguir la operatoria.",
    stack: ["Python", "pandas", "Binance API", "Dashboard web"],
    metric: "Backtesting sin look-ahead bias",
    featured: true,
  },
  {
    title: "Domus Commerce",
    blurb: "Motor headless de creación de sitios web con editor visual.",
    description:
      "Microservicios NestJS sobre Supabase, una librería de contratos TypeScript compartida entre servicios, renderer en Next.js y un editor visual drag-and-drop construido con @dnd-kit.",
    stack: ["NestJS", "Supabase", "Next.js", "@dnd-kit", "TypeScript"],
  },
  {
    title: "Automatizador de leads B2B",
    blurb: "Scraping de LinkedIn con enriquecimiento de emails.",
    description:
      "Extracción de perfiles con enriquecimiento vía la API de Apollo.io y exportación a Excel. Distribuido como aplicación de escritorio (.exe), con tests en pytest y versionado.",
    stack: ["Python", "Playwright", "Apollo.io", "pytest"],
  },
  {
    title: "Nuum · Chanchito",
    blurb: "Apps fintech de gestión de finanzas personales.",
    description:
      "Backend NestJS con MongoDB y Prisma, autenticación JWT sobre cookies HTTP-only y dashboards con Recharts. E2E con Cypress, calidad con SonarQube, manifiesto de estándares de código y despliegue con Docker/Kubernetes.",
    stack: ["NestJS", "MongoDB", "Prisma", "Recharts", "Cypress", "Kubernetes"],
  },
  {
    title: "MedPrime",
    blurb: "Plataforma médica desplegada en tres entornos.",
    description:
      "MVP con backend Laravel 11 (Octane, Sanctum, OAuth social) y frontend Next.js. Video con la API de Vimeo, almacenamiento en AWS S3 y pagos con Mercado Pago, con despliegue multi-entorno dev/tst/prod sobre Docker.",
    stack: ["Laravel 11", "Next.js", "Vimeo API", "AWS S3", "Docker"],
  },
  {
    title: "Monorepo de microservicios gRPC",
    blurb: "API gateway y servicios comunicados por protobuf.",
    description:
      "Gateway más servicios NestJS que se comunican por gRPC con contratos protobuf, persistencia con Prisma + MySQL y orquestación local con Docker Compose.",
    stack: ["NestJS", "gRPC", "protobuf", "Prisma", "MySQL"],
  },
  {
    title: "ScriptAI",
    blurb: "Editor de guiones de cine asistido por IA.",
    description:
      "Plataforma SaaS con un editor de texto que sugiere y reescribe en tiempo real usando la API de OpenAI, más un chatbot conversacional. Autenticación con Auth0 e infraestructura en Microsoft Azure.",
    stack: ["React", "Node.js", "OpenAI API", "Auth0", "Azure"],
    href: "https://scriptai-client.netlify.app/",
  },
];

/* -------------------------------------------------------------------------- */
/*  Formación e idiomas                                                        */
/* -------------------------------------------------------------------------- */

export type Education = { title: string; issuer: string };

export const education: Education[] = [
  {
    title: "Desarrollo Web con HTML, CSS3, JavaScript, PHP y MySQL",
    issuer: "Udemy",
  },
  { title: "React Native para Android e iOS", issuer: "Udemy" },
  {
    title: "Formación continua autodidacta",
    issuer: "Next.js, NestJS, TypeScript y arquitectura de software",
  },
];

export type Language = { name: string; level: string; detail: string };

export const languages: Language[] = [
  { name: "Español", level: "Nativo", detail: "Lengua materna" },
  {
    name: "Inglés",
    level: "B2 · Avanzado",
    detail: "Lectura técnica, escritura y conversación",
  },
];

/* -------------------------------------------------------------------------- */
/*  Navegación                                                                 */
/* -------------------------------------------------------------------------- */

export type NavItem = { href: string; label: string };

export const navItems: NavItem[] = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#enfoque", label: "Enfoque" },
  { href: "#stack", label: "Stack" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

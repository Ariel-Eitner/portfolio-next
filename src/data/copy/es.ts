import type { Copy } from './types';

const es: Copy = {
	lang: 'es',

	meta: {
		siteName: 'Ariel Eitner — Desarrollador Full Stack',
		role: 'Desarrollador Full Stack',
		home: {
			title: 'Ariel Eitner — Ingeniería de software, IA y tecnología institucional',
			description:
				'Desarrollo productos digitales, diseño arquitecturas de software y exploro cómo la inteligencia artificial puede resolver problemas concretos. Comparto investigaciones, proyectos y aprendizajes sobre ingeniería, automatización y ciberseguridad.',
		},
		techMap: {
			title: 'Mapa técnico: arquitectura, performance, seguridad y DevOps',
			description:
				'Mapa interactivo de las 15 áreas del desarrollo web profesional y las tecnologías que manejo en cada una: arquitectura de software, rendimiento, ciberseguridad, SEO técnico, bases de datos, infraestructura, observabilidad, testing, confiabilidad, accesibilidad y calidad de código.',
		},
		research: {
			title: 'Investigación técnica: arquitectura, seguridad e ingeniería web',
			description:
				'Investigación técnica de Ariel Eitner sobre arquitectura de software, ciberseguridad aplicada, ingeniería web, IA y datos. Casos de estudio y análisis basados en sistemas reales.',
		},
		legalMapResearch: {
			title: 'Diseño de un mapa legal navegable para el Observatorio de Leyes',
			description:
				'Caso de estudio sobre el diseño de un mapa legal navegable: modelado de relaciones, visualización con D3, búsqueda y decisiones de arquitectura para el Observatorio de Leyes Argentinas.',
		},
		readingCostResearch: {
			title: 'Reducción del costo marginal por visita en el Observatorio de Leyes',
			description:
				'Caso de estudio sobre la reducción de costos operativos del Observatorio de Leyes mediante caché CDN, compresión Brotli, invalidación incremental y precómputo de referencias.',
		},
		keywords: [
			'Ariel Eitner',
			'Ariel Eitner desarrollador',
			'desarrollador full stack',
			'desarrollador full stack Argentina',
			'desarrollador full stack Buenos Aires',
			'programador Next.js',
			'desarrollador React',
			'desarrollador TypeScript',
			'desarrollador NestJS',
			'desarrollador Node.js',
			'desarrollador Laravel',
			'desarrollador backend',
			'desarrollador frontend',
			'desarrollador remoto',
			'contratar desarrollador full stack',
			'freelance Next.js',
			'arquitectura de software',
			'microservicios',
			'APIs REST',
			'GraphQL',
			'gRPC',
			'PostgreSQL',
			'Prisma ORM',
			'Supabase',
			'Docker',
			'Kubernetes',
			'CI/CD',
			'GitHub Actions',
			'Vercel',
			'Cloudflare',
			'SEO técnico',
			'Core Web Vitals',
			'structured data JSON-LD',
			'pasarelas de pago',
			'Stripe',
			'Mercado Pago',
			'integración de IA',
			'OpenAI API',
			'Claude API',
			'testing E2E',
			'Playwright',
			'observabilidad',
			'portfolio desarrollador',
		],
		ogAlt: 'Ariel Eitner — Desarrollador Full Stack en Buenos Aires, Argentina',
	},

	ui: {
		skipToContent: 'Saltar al contenido',
		hire: 'Contratame',
		openMenu: 'Abrir menú',
		closeMenu: 'Cerrar menú',
		switchLangLabel: 'Ver en inglés',
		mailSubject: 'Hablemos de un proyecto',
		externalLink: 'abre en una pestaña nueva',
		backToHome: 'Volver al inicio',
		currentRole: 'Actual',
		aboutMenu: 'Sobre mí',
	},

	nav: [
		{ key: 'about', id: 'sobre-mi', label: 'Sobre mí' },
		{ key: 'approach', id: 'enfoque', label: 'Enfoque' },
		{ key: 'stack', id: 'stack', label: 'Stack' },
		{ key: 'experience', id: 'experiencia', label: 'Experiencia' },
		{ key: 'projects', id: 'proyectos', label: 'Proyectos' },
		{ key: 'map', id: 'mapa', label: 'Mapa técnico' },
		{ key: 'research', id: 'investigacion', label: 'Investigación' },
		{ key: 'contact', id: 'contacto', label: 'Contacto' },
	],

	hero: {
		availability: 'Disponible para trabajo remoto',
		role: 'Ingeniería de software · IA aplicada',
		headline: 'Ingeniería de software, inteligencia artificial y tecnología aplicada a instituciones.',
		tagline: 'Next.js · React · TypeScript · NestJS · Laravel · PostgreSQL',
		statement:
			'Desarrollo productos digitales, diseño arquitecturas de software y exploro cómo la IA puede resolver problemas concretos.',
		lead:
			'Comparto investigaciones, proyectos y aprendizajes sobre ingeniería, automatización y ciberseguridad.',
		areas: [
			'Ingeniería de software',
			'IA aplicada',
			'Ciberseguridad',
			'Modernización institucional',
		],
		ctaProjects: 'Ver proyectos',
		ctaMail: 'Escribime',
		ctaCv: 'Descargar CV',
		portraitAlt: 'Retrato de Ariel Eitner, desarrollador full stack en Buenos Aires, Argentina',
	},

	stats: {
		years: 'años de experiencia',
		pages: 'páginas en producción',
		components: 'componentes en el portal que lidero',
		routes: 'API routes escritas y mantenidas',
	},

	about: {
		eyebrow: 'Sobre mí',
		title: 'Perfil profesional',
		paragraphs: [
			'Soy Ariel Eitner, desarrollador full stack con más de 6 años construyendo aplicaciones web escalables en el ecosistema TypeScript —Next.js, React, NestJS, Prisma— y en PHP/Laravel, con Python para automatización, scraping y análisis de datos.',
			'Actualmente lidero el desarrollo de una plataforma edtech multi-país: microservicios dockerizados, pasarelas de pago internacionales, integración de modelos de lenguaje, SEO técnico, testing E2E y CI/CD sobre GitHub Actions.',
			'Mi formación inicial en electrónica orientó el modo en que abordo el software: prioridad a los límites explícitos entre componentes, a la trazabilidad de los estados y al costo de mantenimiento a mediano plazo.',
			'Trabajo en remoto para equipos de Argentina, LATAM y Estados Unidos, tanto en posiciones full-time como en contratos por proyecto.',
		],
		languagesTitle: 'Idiomas',
		languages: [
			{ name: 'Español', level: 'Nativo', detail: 'Lengua materna' },
			{
				name: 'Inglés',
				level: 'B2 · Avanzado',
				detail: 'Lectura técnica, escritura y conversación',
			},
		],
		educationTitle: 'Formación',
		education: [
			{
				title: 'Desarrollo Web con HTML, CSS3, JavaScript, PHP y MySQL',
				issuer: 'Udemy',
			},
			{ title: 'React Native para Android e iOS', issuer: 'Udemy' },
			{
				title: 'Formación continua autodidacta',
				issuer: 'Next.js, NestJS, TypeScript y arquitectura de software',
			},
		],
		baseTitle: 'Base',
		location: 'Buenos Aires, Argentina',
		availability: 'Disponible para trabajo remoto',
	},

	principles: {
		eyebrow: 'Enfoque',
		title: 'Cómo trabajo',
		intro: 'Seis áreas donde concentro las decisiones técnicas que sostienen un producto en producción.',
		items: {
			arquitectura: {
				title: 'Arquitectura y contratos tipados',
				body: 'Separación de responsabilidades entre capas y servicios, con contratos TypeScript compartidos y verificados en tiempo de compilación. Microservicios comunicados por gRPC sobre esquemas protobuf y librerías de contratos versionadas entre backend y frontend.',
			},
			pagos: {
				title: 'Integración de pasarelas de pago',
				body: 'Stripe, Mercado Pago, PayPal y Rebill sobre un checkout multi-país. Procesamiento de webhooks idempotente, reconciliación de estados de orden, política de reintentos y trazabilidad de transacciones en una pasarela propia.',
			},
			seo: {
				title: 'SEO técnico',
				body: 'Sitemaps dinámicos, structured data JSON-LD (schema.org), migración de URLs con redirecciones 301, optimización de Core Web Vitals y auditorías Lighthouse automatizadas con Puppeteer, monitoreadas en Google Search Console.',
			},
			ia: {
				title: 'Integración de modelos de lenguaje',
				body: 'APIs de Anthropic Claude y OpenAI aplicadas a funcionalidades de producto: extracción y análisis de datos sobre documentos legales, asistencia de escritura con respuesta en streaming y agentes conversacionales con contexto persistido.',
			},
			testing: {
				title: 'Testing automatizado',
				body: 'Playwright para flujos E2E de checkout y formularios, Vitest y Jest sobre lógica de dominio, Cypress y PHPUnit según el stack. Análisis estático y control de deuda técnica con SonarQube.',
			},
			infra: {
				title: 'CI/CD e infraestructura',
				body: 'GitHub Actions con entornos separados de desarrollo y producción, contenedores Docker para paridad con producción, orquestación con Docker Compose y Kubernetes, tareas programadas en Vercel Crons y migraciones SQL versionadas.',
			},
		},
	},

	stack: {
		eyebrow: 'Stack',
		title: 'Stack técnico',
		intro: 'Tecnologías agrupadas por capa, aplicadas en proyectos desplegados en producción.',
		categories: {
			frontend: 'Frontend',
			backend: 'Backend',
			databases: 'Bases de datos',
			cloud: 'Cloud y DevOps',
			integrations: 'Pagos e integraciones',
			seo: 'SEO y analítica',
			quality: 'Calidad y testing',
			python: 'Python y automatización',
		},
	},

	experience: {
		eyebrow: 'Experiencia',
		title: 'Trayectoria profesional',
		intro:
			'Combino liderazgo técnico, modernización institucional y desarrollo de plataformas digitales con foco en infraestructura y seguridad.',
		present: 'Presente',
		items: {
			besel: {
				role: 'CTO',
				mode: 'Liderazgo técnico',
				bullets: [
					'Lidero la dirección técnica y la evolución de BESEL y su ecosistema de productos, definiendo prioridades de arquitectura, calidad y modernización.',
					'Realicé un relevamiento técnico de BESEL y Delegup: arquitectura, dependencias, despliegues y riesgos de seguridad, con una hoja de ruta incremental para mejorar mantenibilidad y reducir riesgos.',
					'Analicé el rendimiento de besel-website en un entorno local dockerizado e identifiqué oportunidades de mejora en caché, consumo de recursos y operación.',
					'Preparé una evaluación de ciberseguridad de punta a punta para el sitio: revisión de código, APIs, controles de acceso y dependencias, complementada con pruebas locales y prioridades de hardening.',
				],
			},
			catamarca: {
				role: 'Desarrollo de plataforma y modernización institucional',
				mode: 'Catamarca',
				bullets: [
					'Construyo el Observatorio Catamarca, un motor documental para organizar y buscar ordenanzas, decretos y resoluciones municipales.',
					'Diseñé una arquitectura con Next.js, NestJS, Prisma y PostgreSQL, con entornos reproducibles mediante Docker Compose.',
					'Implementé controles de seguridad para un organismo público: autenticación con tokens de acceso y renovación rotativa, permisos por rol, límites de intentos, validación estricta y auditoría de operaciones.',
					'Endurecí el entorno de ejecución con base de datos en red interna, contenedores sin privilegios y secretos fuera de las imágenes; documenté un despliegue inicial privado en VPS.',
				],
			},
			msk: {
				role: 'Desarrollador Líder Full Stack',
				mode: 'Remoto',
				bullets: [
					'Lideré el desarrollo del portal de conocimiento médico multi-país (edtech/ecommerce) con Next.js, React, TypeScript y Tailwind CSS: ~50 páginas, más de 100 API routes y 300+ componentes, con internacionalización (next-intl) para toda LATAM.',
					'Integré las pasarelas Stripe, Mercado Pago, PayPal y Rebill en el checkout y en una pasarela de pagos propia, habilitando cobros online en múltiples países.',
					'Desarrollé y mantuve una arquitectura de microservicios backend en Laravel dockerizados: gateway de pagos, integración con Zoho CRM, generación de certificados PDF con códigos QR e intranet administrativa.',
					'Implementé SEO técnico end-to-end: sitemaps dinámicos, structured data JSON-LD, migración de URLs, Core Web Vitals y auditorías con Lighthouse seguidas en Google Search Console.',
					'Automaticé pruebas con Playwright (E2E de checkout y formularios), Vitest y Jest, y controles de calidad con SonarQube.',
					'Configuré CI/CD con GitHub Actions (entornos dev/prod), Docker y cron jobs en Vercel; datos en Supabase (PostgreSQL) con migraciones versionadas.',
					'Integré autenticación con Auth0 y reCAPTCHA v3, seguridad perimetral con Cloudflare (WAF, CDN) y monitoreo con Sentry, Google Analytics y Hotjar.',
					'Desarrollé un asistente de venta presencial para el equipo comercial (Next.js, shadcn/ui, Zustand) que crea leads, contactos y órdenes en Zoho CRM, con sincronización a Google Sheets cada 5 minutos vía Vercel Crons.',
				],
			},
			scriptai: {
				role: 'Ingeniero de Software Full Stack',
				mode: 'Remoto',
				bullets: [
					'Diseñé y desarrollé una plataforma SaaS con IA de punta a punta: frontend, backend y base de datos.',
					'Integré la API de OpenAI para un chatbot conversacional y un editor de texto con asistencia de IA en tiempo real.',
					'Implementé autenticación segura con Auth0 (SSO, sesiones y roles) e infraestructura cloud en Microsoft Azure.',
				],
			},
			freelance: {
				role: 'Desarrollador Freelance',
				mode: 'Buenos Aires',
				bullets: [
					'Desarrollé una aplicación móvil con React Native (Android/iOS) usando Firebase, GraphQL (Apollo Server) y MongoDB.',
					'Construí sitios web completos para clientes de bienes raíces y servicios con PHP, MySQL, JavaScript y SASS, gestionando la relación directa con los clientes.',
				],
			},
		},
	},

	projects: {
		eyebrow: 'Proyectos',
		title: 'Proyectos seleccionados',
		intro: 'Plataformas propias y productos de cliente, con el stack y la escala de cada uno.',
		visit: 'Visitar',
		items: {
			observatorio: {
				title: 'Observatorio de Leyes Argentinas',
				blurb: 'Plataforma freemium que digitaliza, busca y explica la legislación argentina.',
				description:
					'Leyes, DNU, códigos y jurisprudencia en un solo lugar. Backend NestJS + Prisma con 24 modelos sobre Supabase/PostgreSQL y frontend en Next.js. Análisis de contratos con Anthropic Claude, pagos con Mercado Pago vía webhooks, visualización de grafos con D3, búsqueda full-text y SEO industrial: sitemaps dinámicos, JSON-LD y una auditoría propia con Lighthouse + Puppeteer.',
				metric: '75 páginas · 45 API routes en producción',
			},
			trading: {
				title: 'Plataforma de trading cuantitativo',
				blurb: 'Motor propio de backtesting vela a vela, sin look-ahead.',
				description:
					'Optimización multi-core, análisis walk-forward y simulaciones de Monte Carlo, con métricas Sharpe, Sortino y Calmar. Incluye un bot de paper trading alimentado con datos de Binance y un dashboard web para seguir la operatoria.',
				metric: 'Backtesting sin look-ahead bias',
			},
			domus: {
				title: 'Domus Commerce',
				blurb: 'Motor headless de creación de sitios web con editor visual.',
				description:
					'Microservicios NestJS sobre Supabase, una librería de contratos TypeScript compartida entre servicios, renderer en Next.js y un editor visual drag-and-drop construido con @dnd-kit.',
			},
			leads: {
				title: 'Automatizador de leads B2B',
				blurb: 'Scraping de LinkedIn con enriquecimiento de emails.',
				description:
					'Extracción de perfiles con enriquecimiento vía la API de Apollo.io y exportación a Excel. Distribuido como aplicación de escritorio (.exe), con tests en pytest y versionado.',
			},
			fintech: {
				title: 'Nuum · Chanchito',
				blurb: 'Apps fintech de gestión de finanzas personales.',
				description:
					'Backend NestJS con MongoDB y Prisma, autenticación JWT sobre cookies HTTP-only y dashboards con Recharts. E2E con Cypress, calidad con SonarQube, manifiesto de estándares de código y despliegue con Docker/Kubernetes.',
			},
			medprime: {
				title: 'MedPrime',
				blurb: 'Plataforma médica desplegada en tres entornos.',
				description:
					'MVP con backend Laravel 11 (Octane, Sanctum, OAuth social) y frontend Next.js. Video con la API de Vimeo, almacenamiento en AWS S3 y pagos con Mercado Pago, con despliegue multi-entorno dev/tst/prod sobre Docker.',
			},
			grpc: {
				title: 'Monorepo de microservicios gRPC',
				blurb: 'API gateway y servicios comunicados por protobuf.',
				description:
					'Gateway más servicios NestJS que se comunican por gRPC con contratos protobuf, persistencia con Prisma + MySQL y orquestación local con Docker Compose.',
			},
			scriptai: {
				title: 'ScriptAI',
				blurb: 'Editor de guiones de cine asistido por IA.',
				description:
					'Plataforma SaaS con un editor de texto que sugiere y reescribe en tiempo real usando la API de OpenAI, más un chatbot conversacional. Autenticación con Auth0 e infraestructura en Microsoft Azure.',
			},
		},
	},

	mapTeaser: {
		eyebrow: 'Mapa técnico',
		title: 'Las 15 áreas del desarrollo web, y dónde me paro en cada una',
		intro:
			'Una aplicación web seria no es «frontend y backend». Es la intersección de quince disciplinas que se superponen todo el tiempo. Armé un mapa interactivo con todas ellas y las tecnologías que manejo en cada una.',
		bullets: [
			'Arquitectura, rendimiento, ciberseguridad y SEO técnico',
			'Bases de datos, infraestructura, observabilidad y testing',
			'Confiabilidad, accesibilidad, compatibilidad y calidad de código',
		],
		cta: 'Explorar el mapa técnico',
	},

	faq: {
		eyebrow: 'Preguntas',
		title: 'Preguntas frecuentes',
		intro: 'Lo que suelen preguntarme antes de empezar a trabajar juntos.',
		items: [
			{
				q: '¿Qué tecnologías usa Ariel Eitner?',
				a: 'Trabajo principalmente con Next.js, React y TypeScript en el frontend, y NestJS, Node.js y Laravel en el backend. Bases de datos PostgreSQL, MySQL y MongoDB con Prisma ORM, infraestructura con Docker, Kubernetes, Vercel y Cloudflare, y Python para automatización, scraping y análisis de datos.',
			},
			{
				q: '¿Trabaja de forma remota?',
				a: 'Sí. Trabajo 100% en remoto desde Buenos Aires, Argentina, para equipos de Argentina, LATAM y Estados Unidos, en horario compatible con husos horarios americanos. Estoy abierto tanto a posiciones full-time como a contratos por proyecto.',
			},
			{
				q: '¿Qué tipo de proyectos toma?',
				a: 'Plataformas web con backend propio: ecommerce y checkout multi-país, portales de contenido con SEO exigente, SaaS con integración de modelos de lenguaje, APIs y arquitecturas de microservicios. También migraciones y auditorías de performance, seguridad y SEO técnico sobre sistemas ya en producción.',
			},
			{
				q: '¿Cuánta experiencia tiene?',
				a: 'Más de 6 años de desarrollo profesional. Hoy lidero el desarrollo de una plataforma edtech multi-país con más de 125 páginas y 145 API routes en producción, después de tres años como freelance y un paso por una startup de IA.',
			},
			{
				q: '¿Integra pasarelas de pago?',
				a: 'Sí: Stripe, Mercado Pago, PayPal y Rebill, incluyendo una pasarela propia con procesamiento idempotente de webhooks, reconciliación de estados de orden y trazabilidad completa de transacciones en varios países.',
			},
			{
				q: '¿Cómo empezamos?',
				a: 'Escribime por email o LinkedIn con una descripción del proyecto. Devuelvo una propuesta con alcance, arquitectura sugerida y estimación en pocos días.',
			},
		],
	},

	contact: {
		eyebrow: 'Contacto',
		title: 'Disponible para proyectos remotos',
		intro: 'Trabajo en remoto desde Buenos Aires, Argentina. Abierto a posiciones full-time y a contratos por proyecto.',
		cvEs: 'Descargar CV (ES)',
		cvEn: 'Download CV (EN)',
		channels: {
			email: 'Email',
			linkedin: 'LinkedIn',
			github: 'GitHub',
			phone: 'Teléfono',
		},
	},

	footer: {
		builtWith: 'Next.js · TypeScript · Tailwind CSS',
		sourceCode: 'código',
	},

	mapPage: {
		breadcrumb: 'Mapa técnico',
		kicker: 'Mapa técnico',
		title: 'Mapa de tecnologías y arquitectura',
		explorerTitle: 'Quince áreas alrededor de un sistema en producción',
		lead: 'Las quince áreas que sostienen una aplicación web profesional, con las tecnologías que uso en cada una. Tocá cualquier nodo para ver qué cubre.',
		intro: [
			'Casi todo el mundo divide el desarrollo web en «frontend y backend». En la práctica, un sistema en producción es la intersección de quince disciplinas que se superponen permanentemente: una búsqueda lenta puede ser un problema de base de datos, de caché, de infraestructura o de arquitectura, y sólo se distingue si hay observabilidad.',
			'Este mapa ordena esas áreas alrededor del sistema y cuelga de cada una las tecnologías concretas con las que trabajo. No es una lista de deseos: cada nodo corresponde a algo que uso en proyectos desplegados.',
		],
		legendTitle: 'Planos',
		planeLabel: 'Plano',
		coreLabel: 'Núcleo',
		hint: 'Arrastrá para mover · rueda para hacer zoom · clic en un nodo para ver el detalle',
		hintMobile: 'Deslizá para mover · pellizcá para hacer zoom · tocá un nodo',
		resetView: 'Centrar',
		zoomIn: 'Acercar',
		zoomOut: 'Alejar',
		focusAll: 'Ver todo',
		conceptsTitle: 'Qué cubre',
		techTitle: 'Con qué lo trabajo',
		relatedTitle: 'Se superpone con',
		selectPrompt: 'Elegí un área del mapa para ver qué incluye y con qué tecnologías la trabajo.',
		closePanel: 'Cerrar',
		outlineEyebrow: 'Índice completo',
		outlineTitle: 'Las quince áreas, en detalle',
		outlineIntro:
			'El mismo contenido del mapa en formato de lectura: cada área con todo lo que abarca y las tecnologías asociadas.',
		flowsEyebrow: 'Recorridos',
		flowsTitle: 'Cómo se cruzan las áreas en la práctica',
		flowsIntro:
			'Tres recorridos reales de sistemas que construí. Cada paso toca varias disciplinas a la vez: por eso el mapa no es un árbol, es una red.',
		areasNoun: 'áreas',
		techNoun: 'tecnologías',
		ctaTitle: '¿Necesitás alguna de estas áreas cubierta?',
		ctaBody:
			'Trabajo en remoto desde Buenos Aires en proyectos que necesitan arquitectura, backend e infraestructura, no solo pantallas.',
		ctaButton: 'Hablemos',
	},
};

export default es;

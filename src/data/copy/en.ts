import type { Copy } from './types';

const en: Copy = {
	lang: 'en',

	meta: {
		siteName: 'Ariel Eitner — Full Stack Developer',
		role: 'Full Stack Developer',
		home: {
			title: 'Ariel Eitner — Full Stack Developer: Next.js, React & NestJS',
			description:
				'Ariel Eitner, full stack developer with 6+ years of experience, based in Buenos Aires, Argentina and available for remote work. Next.js, React, TypeScript, NestJS, Laravel, PostgreSQL and Docker. Microservice architecture, payment gateways (Stripe, Mercado Pago), technical SEO, Core Web Vitals and AI integration.',
		},
		techMap: {
			title: 'Technical map: architecture, performance, security and DevOps',
			description:
				'Interactive map of the 15 areas of professional web development and the technologies I work with in each one: software architecture, performance, cybersecurity, technical SEO, databases, infrastructure, observability, testing, reliability, accessibility and code quality.',
		},
		research: {
			title: 'Technical research: architecture, security and web engineering',
			description:
				"Ariel Eitner's technical research on software architecture, applied cybersecurity, web engineering, AI and data. Case studies and analyses grounded in real systems.",
		},
		legalMapResearch: {
			title: 'Designing a navigable legal map for the Law Observatory',
			description:
				'A case study on designing a navigable legal map: relationship modelling, D3 visualisation, search, and architectural decisions for the Argentine Law Observatory.',
		},
		readingCostResearch: {
			title: 'Reducing marginal cost per visit in the Law Observatory',
			description:
				"A case study on lowering the Law Observatory's operating costs through CDN caching, Brotli compression, incremental invalidation, and precomputed references.",
		},
		keywords: [
			'Ariel Eitner',
			'Ariel Eitner developer',
			'full stack developer',
			'full stack developer Argentina',
			'remote full stack developer',
			'Next.js developer',
			'React developer',
			'TypeScript developer',
			'NestJS developer',
			'Node.js developer',
			'Laravel developer',
			'backend developer',
			'frontend developer',
			'hire full stack developer',
			'freelance Next.js developer',
			'LATAM developer',
			'software architecture',
			'microservices',
			'REST APIs',
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
			'technical SEO',
			'Core Web Vitals',
			'JSON-LD structured data',
			'payment gateway integration',
			'Stripe',
			'Mercado Pago',
			'AI integration',
			'OpenAI API',
			'Claude API',
			'end-to-end testing',
			'Playwright',
			'observability',
			'developer portfolio',
		],
		ogAlt: 'Ariel Eitner — Full Stack Developer based in Buenos Aires, Argentina',
	},

	ui: {
		skipToContent: 'Skip to content',
		hire: 'Hire me',
		openMenu: 'Open menu',
		closeMenu: 'Close menu',
		switchLangLabel: 'View in Spanish',
		mailSubject: "Let's talk about a project",
		externalLink: 'opens in a new tab',
		backToHome: 'Back to home',
		currentRole: 'Current',
		aboutMenu: 'About me',
	},

	nav: [
		{ key: 'about', id: 'about', label: 'About' },
		{ key: 'approach', id: 'approach', label: 'Approach' },
		{ key: 'stack', id: 'stack', label: 'Stack' },
		{ key: 'experience', id: 'experience', label: 'Experience' },
		{ key: 'projects', id: 'projects', label: 'Projects' },
		{ key: 'map', id: 'map', label: 'Tech map' },
		{ key: 'research', id: 'research', label: 'Research' },
		{ key: 'contact', id: 'contact', label: 'Contact' },
	],

	hero: {
		availability: 'Available for remote work',
		role: 'Full Stack Developer',
		tagline: 'Next.js · React · TypeScript · NestJS · Laravel · PostgreSQL',
		statement: 'Architecture, backend and infrastructure for platforms in production.',
		lead: 'Full stack developer with 6+ years building scalable web applications from Buenos Aires, Argentina. I currently lead a multi-country edtech platform: dockerized microservices, international payments, applied AI and technical SEO.',
		ctaProjects: 'View projects',
		ctaMail: 'Email me',
		ctaCv: 'Download CV',
		portraitAlt: 'Portrait of Ariel Eitner, full stack developer based in Buenos Aires, Argentina',
	},

	stats: {
		years: 'years of experience',
		pages: 'pages in production',
		components: 'components in the portal I lead',
		routes: 'API routes written and maintained',
	},

	about: {
		eyebrow: 'About',
		title: 'Professional profile',
		paragraphs: [
			"I'm Ariel Eitner, a full stack developer with more than 6 years building scalable web applications in the TypeScript ecosystem —Next.js, React, NestJS, Prisma— and in PHP/Laravel, with Python for automation, scraping and data analysis.",
			'I currently lead development of a multi-country edtech platform: dockerized microservices, international payment gateways, language-model integration, technical SEO, E2E testing and CI/CD on GitHub Actions.',
			'My original training in electronics shaped how I approach software: explicit boundaries between components, traceable state, and a hard look at the cost of maintenance a few years out.',
			'I work remotely with teams across Argentina, LATAM and the United States, both in full-time positions and on project contracts.',
		],
		languagesTitle: 'Languages',
		languages: [
			{ name: 'Spanish', level: 'Native', detail: 'Mother tongue' },
			{
				name: 'English',
				level: 'B2 · Advanced',
				detail: 'Technical reading, writing and conversation',
			},
		],
		educationTitle: 'Education',
		education: [
			{
				title: 'Web Development with HTML, CSS3, JavaScript, PHP and MySQL',
				issuer: 'Udemy',
			},
			{ title: 'React Native for Android and iOS', issuer: 'Udemy' },
			{
				title: 'Ongoing self-directed study',
				issuer: 'Next.js, NestJS, TypeScript and software architecture',
			},
		],
		baseTitle: 'Based in',
		location: 'Buenos Aires, Argentina',
		availability: 'Available for remote work',
	},

	principles: {
		eyebrow: 'Approach',
		title: 'How I work',
		intro: 'Six areas where I concentrate the technical decisions that keep a product running in production.',
		items: {
			arquitectura: {
				title: 'Architecture and typed contracts',
				body: 'Clear separation of concerns across layers and services, with shared TypeScript contracts verified at compile time. Microservices communicating over gRPC on protobuf schemas, with versioned contract libraries shared between backend and frontend.',
			},
			pagos: {
				title: 'Payment gateway integration',
				body: 'Stripe, Mercado Pago, PayPal and Rebill on a multi-country checkout. Idempotent webhook processing, order-state reconciliation, retry policies and full transaction traceability in an in-house gateway.',
			},
			seo: {
				title: 'Technical SEO',
				body: 'Dynamic sitemaps, JSON-LD structured data (schema.org), URL migrations with 301 redirects, Core Web Vitals optimisation and automated Lighthouse audits driven by Puppeteer, tracked in Google Search Console.',
			},
			ia: {
				title: 'Language-model integration',
				body: 'Anthropic Claude and OpenAI APIs applied to product features: data extraction and analysis over legal documents, streaming writing assistance and conversational agents with persisted context.',
			},
			testing: {
				title: 'Automated testing',
				body: 'Playwright for E2E checkout and form flows, Vitest and Jest over domain logic, Cypress and PHPUnit depending on the stack. Static analysis and technical-debt control with SonarQube.',
			},
			infra: {
				title: 'CI/CD and infrastructure',
				body: 'GitHub Actions with separate development and production environments, Docker containers for production parity, orchestration with Docker Compose and Kubernetes, scheduled jobs on Vercel Crons and versioned SQL migrations.',
			},
		},
	},

	stack: {
		eyebrow: 'Stack',
		title: 'Technical stack',
		intro: 'Technologies grouped by layer, applied in projects deployed to production.',
		categories: {
			frontend: 'Frontend',
			backend: 'Backend',
			databases: 'Databases',
			cloud: 'Cloud & DevOps',
			integrations: 'Payments & integrations',
			seo: 'SEO & analytics',
			quality: 'Quality & testing',
			python: 'Python & automation',
		},
	},

	experience: {
		eyebrow: 'Experience',
		title: 'Professional background',
		intro: 'Six years of full stack development, from custom client sites to leading the product of a regional platform.',
		present: 'Present',
		items: {
			msk: {
				role: 'Lead Full Stack Developer',
				mode: 'Remote',
				bullets: [
					'I lead development of a multi-country medical knowledge portal (edtech/ecommerce) with Next.js, React, TypeScript and Tailwind CSS: ~50 pages, over 100 API routes and 300+ components, internationalised with next-intl across LATAM.',
					'Integrated Stripe, Mercado Pago, PayPal and Rebill into the checkout and into an in-house payment gateway, enabling online payments in multiple countries.',
					'I build and maintain a dockerized Laravel backend microservice architecture: payment gateway, Zoho CRM integration, PDF certificate generation with QR codes and an administrative intranet.',
					'End-to-end technical SEO: dynamic sitemaps, JSON-LD structured data, URL migrations, Core Web Vitals and Lighthouse audits tracked in Google Search Console.',
					'Automated testing with Playwright (E2E for checkout and forms), Vitest and Jest; code quality with SonarQube.',
					'CI/CD with GitHub Actions (dev/prod environments), Docker and Vercel cron jobs; data on Supabase (PostgreSQL) with versioned migrations.',
					'Authentication with Auth0 and reCAPTCHA v3; security with Cloudflare (WAF, CDN); monitoring with Sentry, Google Analytics and Hotjar.',
					'Built an in-person sales assistant for the commercial team (Next.js, shadcn/ui, Zustand) that creates leads, contacts and orders in Zoho CRM, syncing to Google Sheets every 5 minutes via Vercel Crons.',
				],
			},
			scriptai: {
				role: 'Full Stack Software Engineer',
				mode: 'Remote',
				bullets: [
					'Designed and built an AI SaaS platform end to end: frontend, backend and database.',
					'Integrated the OpenAI API for a conversational chatbot and a text editor with real-time AI assistance.',
					'Implemented secure authentication with Auth0 (SSO, sessions and roles) and cloud infrastructure on Microsoft Azure.',
				],
			},
			freelance: {
				role: 'Freelance Developer',
				mode: 'Buenos Aires',
				bullets: [
					'Built a mobile application with React Native (Android/iOS) using Firebase, GraphQL (Apollo Server) and MongoDB.',
					'Delivered complete websites for real-estate and service clients with PHP, MySQL, JavaScript and SASS, managing the client relationship directly.',
				],
			},
		},
	},

	projects: {
		eyebrow: 'Projects',
		title: 'Selected projects',
		intro: 'Personal platforms and client products, with the stack and scale of each.',
		visit: 'Visit',
		items: {
			observatorio: {
				title: 'Argentine Law Observatory',
				blurb: 'Freemium platform that digitises, searches and explains Argentine legislation.',
				description:
					'Laws, emergency decrees, codes and case law in one place. NestJS + Prisma backend with 24 models on Supabase/PostgreSQL and a Next.js frontend. Contract analysis with Anthropic Claude, Mercado Pago payments via webhooks, graph visualisation with D3, full-text search and industrial-grade SEO: dynamic sitemaps, JSON-LD and a custom audit built on Lighthouse + Puppeteer.',
				metric: '75 pages · 45 API routes in production',
			},
			trading: {
				title: 'Quantitative trading platform',
				blurb: 'Custom candle-by-candle backtesting engine, free of look-ahead bias.',
				description:
					'Multi-core optimisation, walk-forward analysis and Monte Carlo simulations, with Sharpe, Sortino and Calmar metrics. Includes a paper-trading bot fed with Binance data and a web dashboard to follow the strategy.',
				metric: 'Backtesting without look-ahead bias',
			},
			domus: {
				title: 'Domus Commerce',
				blurb: 'Headless website builder engine with a visual editor.',
				description:
					'NestJS microservices on Supabase, a shared TypeScript contract library across services, a Next.js renderer and a drag-and-drop visual editor built with @dnd-kit.',
			},
			leads: {
				title: 'B2B lead automation tool',
				blurb: 'LinkedIn scraping with email enrichment.',
				description:
					'Profile extraction enriched through the Apollo.io API and exported to Excel. Distributed as a desktop application (.exe), with pytest coverage and versioning.',
			},
			fintech: {
				title: 'Nuum · Chanchito',
				blurb: 'Fintech apps for personal finance management.',
				description:
					'NestJS backend with MongoDB and Prisma, JWT authentication over HTTP-only cookies and dashboards with Recharts. E2E with Cypress, quality with SonarQube, a code-standards manifesto and deployment with Docker/Kubernetes.',
			},
			medprime: {
				title: 'MedPrime',
				blurb: 'Medical platform deployed across three environments.',
				description:
					'MVP with a Laravel 11 backend (Octane, Sanctum, social OAuth) and a Next.js frontend. Video through the Vimeo API, storage on AWS S3 and payments with Mercado Pago, deployed across dev/tst/prod on Docker.',
			},
			grpc: {
				title: 'gRPC microservices monorepo',
				blurb: 'API gateway and services communicating over protobuf.',
				description:
					'A gateway plus NestJS services communicating over gRPC with protobuf contracts, persistence with Prisma + MySQL and local orchestration with Docker Compose.',
			},
			scriptai: {
				title: 'ScriptAI',
				blurb: 'AI-assisted screenplay editor.',
				description:
					'SaaS platform with a text editor that suggests and rewrites in real time using the OpenAI API, plus a conversational chatbot. Auth0 authentication and infrastructure on Microsoft Azure.',
			},
		},
	},

	mapTeaser: {
		eyebrow: 'Tech map',
		title: 'The 15 areas of web development, and where I stand in each',
		intro:
			"A serious web application isn't «frontend and backend». It's the intersection of fifteen disciplines that overlap constantly. I built an interactive map of all of them and the technologies I use in each.",
		bullets: [
			'Architecture, performance, cybersecurity and technical SEO',
			'Databases, infrastructure, observability and testing',
			'Reliability, accessibility, compatibility and code quality',
		],
		cta: 'Explore the tech map',
	},

	faq: {
		eyebrow: 'FAQ',
		title: 'Frequently asked questions',
		intro: 'What people usually ask before we start working together.',
		items: [
			{
				q: 'What technologies does Ariel Eitner use?',
				a: 'I work mainly with Next.js, React and TypeScript on the frontend, and NestJS, Node.js and Laravel on the backend. Databases in PostgreSQL, MySQL and MongoDB with Prisma ORM, infrastructure on Docker, Kubernetes, Vercel and Cloudflare, and Python for automation, scraping and data analysis.',
			},
			{
				q: 'Do you work remotely?',
				a: "Yes. I work fully remote from Buenos Aires, Argentina, with teams in Argentina, LATAM and the United States, on hours that overlap with American time zones. I'm open to both full-time positions and project contracts.",
			},
			{
				q: 'What kind of projects do you take on?',
				a: 'Web platforms with a real backend: multi-country ecommerce and checkout, content portals with demanding SEO, SaaS products with language-model integration, APIs and microservice architectures. Also migrations and audits of performance, security and technical SEO on systems already in production.',
			},
			{
				q: 'How much experience do you have?',
				a: 'More than 6 years of professional development. I currently lead a multi-country edtech platform with over 125 pages and 145 API routes in production, after three years freelancing and a stint at an AI startup.',
			},
			{
				q: 'Do you integrate payment gateways?',
				a: 'Yes: Stripe, Mercado Pago, PayPal and Rebill, including an in-house gateway with idempotent webhook processing, order-state reconciliation and full transaction traceability across several countries.',
			},
			{
				q: 'How do we start?',
				a: 'Email me or reach out on LinkedIn with a description of the project. I come back with a proposal covering scope, suggested architecture and an estimate within a few days.',
			},
		],
	},

	contact: {
		eyebrow: 'Contact',
		title: 'Available for remote projects',
		intro: 'I work remotely from Buenos Aires, Argentina. Open to full-time positions and project contracts.',
		cvEs: 'Descargar CV (ES)',
		cvEn: 'Download CV (EN)',
		channels: {
			email: 'Email',
			linkedin: 'LinkedIn',
			github: 'GitHub',
			phone: 'Phone',
		},
	},

	footer: {
		builtWith: 'Next.js · TypeScript · Tailwind CSS',
		sourceCode: 'source',
	},

	mapPage: {
		breadcrumb: 'Tech map',
		kicker: 'Tech map',
		title: 'Map of technologies and architecture',
		explorerTitle: 'Fifteen areas around a system in production',
		lead: 'The fifteen areas that hold up a professional web application, with the technologies I use in each. Tap any node to see what it covers.',
		intro: [
			'Almost everyone splits web development into «frontend and backend». In practice, a system in production is the intersection of fifteen disciplines that overlap constantly: a slow search can be a database problem, a cache problem, an infrastructure problem or an architecture problem — and you can only tell them apart if you have observability.',
			"This map arranges those areas around the system and hangs the concrete technologies I work with off each one. It isn't a wish list: every node corresponds to something I use in deployed projects.",
		],
		legendTitle: 'Planes',
		planeLabel: 'Plane',
		coreLabel: 'Core',
		hint: 'Drag to pan · scroll to zoom · click a node for details',
		hintMobile: 'Swipe to pan · pinch to zoom · tap a node',
		resetView: 'Recenter',
		zoomIn: 'Zoom in',
		zoomOut: 'Zoom out',
		focusAll: 'Fit to view',
		conceptsTitle: 'What it covers',
		techTitle: 'What I use for it',
		relatedTitle: 'Overlaps with',
		selectPrompt: 'Pick an area on the map to see what it includes and which technologies I use for it.',
		closePanel: 'Close',
		outlineEyebrow: 'Full index',
		outlineTitle: 'The fifteen areas, in detail',
		outlineIntro:
			'The same content as the map, in reading form: each area with everything it covers and the associated technologies.',
		flowsEyebrow: 'Traces',
		flowsTitle: 'How the areas cross in practice',
		flowsIntro:
			"Three real traces from systems I've built. Each step touches several disciplines at once — which is why the map is a network, not a tree.",
		areasNoun: 'areas',
		techNoun: 'technologies',
		ctaTitle: 'Need any of these areas covered?',
		ctaBody:
			'I work remotely from Buenos Aires on projects that need architecture, backend and infrastructure — not just screens.',
		ctaButton: "Let's talk",
	},
};

export default en;

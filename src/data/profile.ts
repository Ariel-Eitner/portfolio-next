/**
 * Datos neutrales al idioma: identidad, enlaces, cifras y listas de
 * tecnologías (que no se traducen). Toda la prosa vive en `src/data/copy`,
 * indexada por los mismos `id` que se definen acá.
 */

export const site = {
	/**
	 * Cambiar acá el día que haya dominio propio: canonical, sitemap, JSON-LD y
	 * las imágenes OG se derivan de este valor. La env var permite apuntar a un
	 * preview sin tocar el código.
	 */
	url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://portfolio-next-xi-nine.vercel.app',
	gaId: 'G-7D5PXZ28B6',
} as const;

export const profile = {
	name: 'Ariel Eitner',
	givenName: 'Ariel',
	familyName: 'Eitner',
	initials: 'AE',
	yearsOfExperience: '6+',
	email: 'ariel.10.e@hotmail.com',
	phone: '+54 9 11 6529-3997',
	phoneHref: '+5491165293997',
	github: 'https://github.com/Ariel-Eitner',
	githubUser: 'Ariel-Eitner',
	linkedin: 'https://www.linkedin.com/in/ariel-eitner-414171225/',
	linkedinUser: 'in/ariel-eitner',
	city: 'Buenos Aires',
	country: 'AR',
	cv: { es: '/cv/CV-Ariel-Eitner-ES.pdf', en: '/cv/CV-Ariel-Eitner-EN.pdf' },
} as const;

/* -------------------------------------------------------------------------- */
/*  Stack técnico — los nombres propios no se traducen; sí las categorías      */
/* -------------------------------------------------------------------------- */

export type SkillGroupId = 'frontend' | 'backend' | 'databases' | 'cloud' | 'integrations' | 'seo' | 'quality' | 'python';

export type SkillGroup = { id: SkillGroupId; items: string[] };

export const skillGroups: SkillGroup[] = [
	{
		id: 'frontend',
		items: [
			'Next.js (App Router)',
			'React 19',
			'TypeScript',
			'JavaScript (ES6+)',
			'Tailwind CSS',
			'shadcn/ui',
			'Redux Toolkit',
			'Zustand',
			'TanStack Query',
			'SWR',
			'Framer Motion',
			'Astro',
			'React Native',
			'React Server Components',
			'Responsive mobile-first',
		],
	},
	{
		id: 'backend',
		items: [
			'NestJS',
			'Node.js',
			'Laravel (7–11)',
			'PHP',
			'Express',
			'APIs REST',
			'GraphQL',
			'gRPC + protobuf',
			'WebSockets',
			'Webhooks',
			'Prisma ORM',
			'Eloquent ORM',
			'JWT / OAuth 2.0',
		],
	},
	{
		id: 'databases',
		items: [
			'PostgreSQL',
			'MySQL',
			'MongoDB',
			'Supabase',
			'Redis',
			'SQLite',
			'Firebase',
			'Prisma migrate',
			'Full-text search',
			'Índices y planes de consulta',
		],
	},
	{
		id: 'cloud',
		items: [
			'Vercel',
			'Render',
			'Microsoft Azure',
			'AWS S3',
			'Docker',
			'Docker Compose',
			'Kubernetes',
			'GitHub Actions',
			'Cloudflare (WAF, CDN)',
			'Nginx',
			'Git',
		],
	},
	{
		id: 'integrations',
		items: [
			'Stripe',
			'Mercado Pago',
			'PayPal',
			'Rebill',
			'Auth0',
			'Zoho CRM',
			'Google Sheets API',
			'OpenAI API',
			'Anthropic Claude API',
			'Apollo.io',
			'Vimeo API',
			'WordPress',
		],
	},
	{
		id: 'seo',
		items: [
			'SEO técnico',
			'Google Search Console',
			'Sitemaps dinámicos',
			'JSON-LD (schema.org)',
			'Core Web Vitals',
			'Lighthouse CI',
			'Redirecciones 301',
			'Google Analytics 4',
			'Hotjar',
			'Sentry',
		],
	},
	{
		id: 'quality',
		items: [
			'Playwright (E2E)',
			'Jest',
			'Vitest',
			'Cypress',
			'Testing Library',
			'PHPUnit',
			'SonarQube',
			'ESLint',
			'Prettier',
			'Husky',
			'Storybook',
			'Code review',
		],
	},
	{
		id: 'python',
		items: [
			'Python',
			'BeautifulSoup',
			'Playwright',
			'Puppeteer',
			'pandas',
			'pytest',
			'Procesamiento de PDFs',
			'Exportación a Excel',
		],
	},
];

/* -------------------------------------------------------------------------- */
/*  Experiencia y proyectos — estructura y etiquetas; la prosa está en copy    */
/* -------------------------------------------------------------------------- */

export type JobId = 'msk' | 'scriptai' | 'freelance';

export type Job = {
	id: JobId;
	company: string;
	period: string;
	current?: boolean;
	tags: string[];
};

export const experience: Job[] = [
	{
		id: 'msk',
		company: 'MSK LATAM',
		period: '2024 — 2026',
		current: true,
		tags: ['Next.js', 'TypeScript', 'Laravel', 'Docker', 'Supabase', 'Stripe', 'Playwright'],
	},
	{
		id: 'scriptai',
		company: 'ScriptAI',
		period: '2023 — 2024',
		tags: ['React', 'Node.js', 'OpenAI API', 'Auth0', 'Azure'],
	},
	{
		id: 'freelance',
		company: 'Freelance',
		period: '2019 — 2022',
		tags: ['React Native', 'GraphQL', 'MongoDB', 'PHP', 'MySQL'],
	},
];

export type ProjectId = 'observatorio' | 'trading' | 'domus' | 'leads' | 'fintech' | 'medprime' | 'grpc' | 'scriptai';

export type Project = {
	id: ProjectId;
	stack: string[];
	href?: string;
	repo?: string;
	featured?: boolean;
};

export const projects: Project[] = [
	{
		id: 'observatorio',
		stack: ['NestJS', 'Prisma', 'Supabase', 'Next.js', 'Claude API', 'Mercado Pago', 'D3'],
		href: 'https://observatorio-de-leyes.com',
		featured: true,
	},
	{
		id: 'trading',
		stack: ['Python', 'pandas', 'Binance API', 'Dashboard web'],
		featured: true,
	},
	{
		id: 'domus',
		stack: ['NestJS', 'Supabase', 'Next.js', '@dnd-kit', 'TypeScript'],
	},
	{
		id: 'leads',
		stack: ['Python', 'Playwright', 'Apollo.io', 'pytest'],
	},
	{
		id: 'fintech',
		stack: ['NestJS', 'MongoDB', 'Prisma', 'Recharts', 'Cypress', 'Kubernetes'],
	},
	{
		id: 'medprime',
		stack: ['Laravel 11', 'Next.js', 'Vimeo API', 'AWS S3', 'Docker'],
	},
	{
		id: 'grpc',
		stack: ['NestJS', 'gRPC', 'protobuf', 'Prisma', 'MySQL'],
	},
	{
		id: 'scriptai',
		stack: ['React', 'Node.js', 'OpenAI API', 'Auth0', 'Azure'],
		href: 'https://scriptai-client.netlify.app/',
	},
];

export type PrincipleId = 'arquitectura' | 'pagos' | 'seo' | 'ia' | 'testing' | 'infra';

export const principleIds: PrincipleId[] = ['arquitectura', 'pagos', 'seo', 'ia', 'testing', 'infra'];

export type StatId = 'years' | 'pages' | 'components' | 'routes';

export const statValues: Record<StatId, string> = {
	years: '6+',
	pages: '125+',
	components: '300+',
	routes: '145+',
};

export const statIds: StatId[] = ['years', 'pages', 'components', 'routes'];

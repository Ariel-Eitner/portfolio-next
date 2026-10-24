import type { Lang } from '@/i18n/config';
import type { JobId, PrincipleId, ProjectId, SkillGroupId, StatId } from '@/data/profile';

export type SectionKey = 'about' | 'approach' | 'stack' | 'experience' | 'projects' | 'map' | 'research' | 'contact';

/** `id` es el ancla real del <section>; cambia con el idioma, `key` no. */
export type NavAnchor = { key: SectionKey; id: string; label: string };

export type Copy = {
	lang: Lang;

	meta: {
		siteName: string;
		/** Sufijo de marca para el template de títulos. */
		role: string;
		home: { title: string; description: string };
		techMap: { title: string; description: string };
		research: { title: string; description: string };
		legalMapResearch: { title: string; description: string };
		readingCostResearch: { title: string; description: string };
		keywords: string[];
		ogAlt: string;
	};

	ui: {
		skipToContent: string;
		hire: string;
		openMenu: string;
		closeMenu: string;
		switchLangLabel: string;
		mailSubject: string;
		externalLink: string;
		backToHome: string;
		currentRole: string;
		aboutMenu: string;
	};

	/** Anclas de la landing. El `id` es también el `id` del <section>. */
	nav: NavAnchor[];

	hero: {
		availability: string;
		role: string;
		headline: string;
		tagline: string;
		statement: string;
		lead: string;
		areas: string[];
		ctaProjects: string;
		ctaMail: string;
		ctaCv: string;
		portraitAlt: string;
	};

	stats: Record<StatId, string>;

	about: {
		eyebrow: string;
		title: string;
		paragraphs: string[];
		languagesTitle: string;
		languages: { name: string; level: string; detail: string }[];
		educationTitle: string;
		education: { title: string; issuer: string }[];
		baseTitle: string;
		location: string;
		availability: string;
	};

	principles: {
		eyebrow: string;
		title: string;
		intro: string;
		items: Record<PrincipleId, { title: string; body: string }>;
	};

	stack: {
		eyebrow: string;
		title: string;
		intro: string;
		categories: Record<SkillGroupId, string>;
	};

	experience: {
		eyebrow: string;
		title: string;
		intro: string;
		present: string;
		items: Record<JobId, { role: string; mode: string; bullets: string[] }>;
	};

	projects: {
		eyebrow: string;
		title: string;
		intro: string;
		visit: string;
		items: Record<ProjectId, { title: string; blurb: string; description: string; metric?: string }>;
	};

	mapTeaser: {
		eyebrow: string;
		title: string;
		intro: string;
		bullets: string[];
		cta: string;
	};

	faq: {
		eyebrow: string;
		title: string;
		intro: string;
		items: { q: string; a: string }[];
	};

	contact: {
		eyebrow: string;
		title: string;
		intro: string;
		cvEs: string;
		cvEn: string;
		channels: { email: string; linkedin: string; github: string; phone: string };
	};

	footer: {
		builtWith: string;
		sourceCode: string;
	};

	/** Página `/mapa-tecnico` · `/en/tech-map`. */
	mapPage: {
		breadcrumb: string;
		kicker: string;
		title: string;
		/** Encabezado de la sección del grafo. No repite el H1 a propósito. */
		explorerTitle: string;
		lead: string;
		intro: string[];
		legendTitle: string;
		planeLabel: string;
		coreLabel: string;
		hint: string;
		hintMobile: string;
		resetView: string;
		zoomIn: string;
		zoomOut: string;
		focusAll: string;
		conceptsTitle: string;
		techTitle: string;
		relatedTitle: string;
		selectPrompt: string;
		closePanel: string;
		outlineEyebrow: string;
		outlineTitle: string;
		outlineIntro: string;
		flowsEyebrow: string;
		flowsTitle: string;
		flowsIntro: string;
		/**
		 * Sustantivos para los contadores. Van como strings y no como funciones
		 * `(n) => string` a propósito: `mapPage` cruza el límite hacia un componente
		 * cliente y React no serializa funciones.
		 */
		areasNoun: string;
		techNoun: string;
		ctaTitle: string;
		ctaBody: string;
		ctaButton: string;
	};
};

/**
 * Configuración de idiomas y rutas.
 *
 * El sitio vive en dos árboles: español en la raíz (`/`, `/mapa-tecnico`) e
 * inglés bajo `/en`. Cada idioma tiene su propio root layout —de ahí los
 * grupos `(es)` y `(en)` en `app/`— porque `<html lang>` tiene que cambiar.
 *
 * Todas las URLs se derivan de `routes`: sitemap, hreflang, canonical y el
 * selector de idioma leen de acá, así que agregar una página es tocar un solo
 * objeto.
 */

export const LANGS = ['es', 'en'] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = 'es';

/** Etiqueta BCP-47 completa: la que va en hreflang y en OpenGraph. */
export const LOCALE: Record<Lang, string> = {
	es: 'es-AR',
	en: 'en-US',
};

/** Cómo se nombra cada idioma en su propio idioma (para el selector). */
export const LANG_LABEL: Record<Lang, string> = {
	es: 'Español',
	en: 'English',
};

export const routes = {
	home: { es: '/', en: '/en' },
	techMap: { es: '/mapa-tecnico', en: '/en/tech-map' },
	research: { es: '/investigacion', en: '/en/research' },
	legalMapResearch: {
		es: '/investigacion/mapa-legal-observatorio-leyes',
		en: '/en/research/legal-map-law-observatory',
	},
	readingCostResearch: {
		es: '/investigacion/reduccion-costos-lectura-observatorio-leyes',
		en: '/en/research/reducing-reading-costs-law-observatory',
	},
} as const;

export type RouteKey = keyof typeof routes;

export const ROUTE_KEYS = Object.keys(routes) as RouteKey[];

export function path(key: RouteKey, lang: Lang): string {
	return routes[key][lang];
}

/**
 * Alternates para `metadata`. Google necesita que cada versión declare a todas
 * las demás —incluida ella misma— y un `x-default` que apunte al idioma por
 * defecto.
 */
export function alternates(key: RouteKey, lang: Lang) {
	return {
		canonical: routes[key][lang],
		languages: {
			[LOCALE.es]: routes[key].es,
			[LOCALE.en]: routes[key].en,
			'x-default': routes[key][DEFAULT_LANG],
		},
	};
}

/** Ruta equivalente en el otro idioma, para el toggle del nav. */
export function otherLang(lang: Lang): Lang {
	return lang === 'es' ? 'en' : 'es';
}

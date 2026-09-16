/**
 * Metadata y datos estructurados.
 *
 * Todo sale de `site.url` + `routes`, así que un cambio de dominio no obliga a
 * revisar canonical, hreflang, OpenGraph ni JSON-LD uno por uno.
 *
 * El JSON-LD se emite como un `@graph` único por página, con `@id` estables:
 * la Person es la misma entidad en las cuatro URLs y en los dos idiomas, y todo
 * lo demás (WebSite, ProfilePage, FAQPage) la referencia en lugar de repetirla.
 */

import type { Metadata } from "next";
import {
  LOCALE,
  alternates,
  path,
  routes,
  type Lang,
  type RouteKey,
} from "@/i18n/config";
import { experience, profile, projects, site, skillGroups } from "@/data/profile";
import type { Copy } from "@/data/copy";
import { areas } from "@/data/techMap/areas";

/**
 * Sin barra final, que es como Next resuelve el canonical. Si el sitemap
 * dijera `https://host/` y el canonical `https://host`, los validadores de
 * hreflang —que comparan cadenas, no URLs normalizadas— verían dos páginas.
 */
export function absolute(pathname: string): string {
  return new URL(pathname, site.url).toString().replace(/\/$/, "");
}

const PERSON_ID = `${site.url}/#person`;
const SITE_ID = `${site.url}/#website`;

/* -------------------------------------------------------------------------- */
/*  Metadata                                                                   */
/* -------------------------------------------------------------------------- */

export function buildMetadata(
  lang: Lang,
  copy: Copy,
  route: RouteKey,
): Metadata {
  const isHome = route === "home";
  const { title, description } = copy.meta[route];
  const url = absolute(path(route, lang));

  return {
    metadataBase: new URL(site.url),
    title: isHome
      ? { absolute: title }
      : { default: title, template: `%s · ${profile.name}` },
    description,
    applicationName: copy.meta.siteName,
    authors: [{ name: profile.name, url: absolute(path("home", lang)) }],
    creator: profile.name,
    publisher: profile.name,
    referrer: "origin-when-cross-origin",
    keywords: copy.meta.keywords,
    category: "technology",
    alternates: alternates(route, lang),
    openGraph: {
      type: isHome ? "profile" : "website",
      locale: LOCALE[lang].replace("-", "_"),
      alternateLocale: Object.values(LOCALE)
        .filter((l) => l !== LOCALE[lang])
        .map((l) => l.replace("-", "_")),
      url,
      siteName: copy.meta.siteName,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    // El SVG va primero: los navegadores que lo soportan lo prefieren y lo
    // dibujan nítido a cualquier densidad. El .ico queda de respaldo.
    icons: {
      icon: [
        { url: "/icon.svg", type: "image/svg+xml" },
        { url: "/favicon.ico", sizes: "16x16 32x32" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
  };
}

/* -------------------------------------------------------------------------- */
/*  JSON-LD                                                                    */
/* -------------------------------------------------------------------------- */

type Node = Record<string, unknown>;

/** Todo lo que declaro saber: stack real + las quince áreas del mapa técnico. */
function knowsAbout(lang: Lang): string[] {
  return [
    ...skillGroups.flatMap((group) => group.items),
    ...areas.map((area) => area.label[lang]),
    ...areas.flatMap((area) => area.tech.map((tech) => tech.name)),
  ].filter((value, index, all) => all.indexOf(value) === index);
}

function personNode(lang: Lang, copy: Copy): Node {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: profile.name,
    givenName: profile.givenName,
    familyName: profile.familyName,
    url: absolute(path("home", lang)),
    image: absolute("/images/7.png"),
    jobTitle: copy.meta.role,
    description: copy.meta.home.description,
    email: `mailto:${profile.email}`,
    telephone: profile.phoneHref,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.city,
      addressCountry: profile.country,
    },
    nationality: { "@type": "Country", name: "Argentina" },
    sameAs: [profile.github, profile.linkedin],
    knowsAbout: knowsAbout(lang),
    knowsLanguage: copy.about.languages.map((language) => ({
      "@type": "Language",
      name: language.name,
    })),
    hasOccupation: {
      "@type": "Occupation",
      name: copy.meta.role,
      occupationLocation: { "@type": "City", name: profile.city },
      skills: skillGroups.flatMap((group) => group.items).join(", "),
    },
    worksFor: {
      "@type": "Organization",
      name: experience.find((job) => job.current)?.company ?? "",
    },
    alumniOf: copy.about.education.map((item) => ({
      "@type": "EducationalOrganization",
      name: item.issuer,
    })),
    seeks: {
      "@type": "Demand",
      name: copy.contact.title,
    },
  };
}

function websiteNode(lang: Lang, copy: Copy): Node {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    url: site.url,
    name: copy.meta.siteName,
    description: copy.meta.home.description,
    inLanguage: LOCALE[lang],
    publisher: { "@id": PERSON_ID },
    author: { "@id": PERSON_ID },
  };
}

/** JSON-LD de la landing: perfil + proyectos + preguntas frecuentes. */
export function homeJsonLd(lang: Lang, copy: Copy) {
  const url = absolute(path("home", lang));

  return {
    "@context": "https://schema.org",
    "@graph": [
      personNode(lang, copy),
      websiteNode(lang, copy),
      {
        "@type": "ProfilePage",
        "@id": `${url}#page`,
        url,
        name: copy.meta.home.title,
        description: copy.meta.home.description,
        inLanguage: LOCALE[lang],
        isPartOf: { "@id": SITE_ID },
        mainEntity: { "@id": PERSON_ID },
        about: { "@id": PERSON_ID },
      },
      {
        "@type": "ItemList",
        "@id": `${url}#projects`,
        name: copy.projects.title,
        numberOfItems: projects.length,
        itemListElement: projects.map((project, index) => {
          const text = copy.projects.items[project.id];
          return {
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "SoftwareApplication",
              name: text.title,
              description: text.description,
              applicationCategory: "WebApplication",
              operatingSystem: "Web",
              author: { "@id": PERSON_ID },
              ...(project.href ? { url: project.href } : {}),
              keywords: project.stack.join(", "),
            },
          };
        }),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage: LOCALE[lang],
        mainEntity: copy.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
}

/** JSON-LD del mapa técnico: aplicación + glosario de las quince áreas. */
export function techMapJsonLd(lang: Lang, copy: Copy) {
  const url = absolute(path("techMap", lang));
  const home = absolute(path("home", lang));

  return {
    "@context": "https://schema.org",
    "@graph": [
      personNode(lang, copy),
      // El WebSite va también acá: `isPartOf` apunta a su `@id`, y una referencia
      // a una entidad que la página no define obliga a Google a resolverla contra
      // otro rastreo en lugar de leerla de una.
      websiteNode(lang, copy),
      {
        "@type": "WebPage",
        "@id": `${url}#page`,
        url,
        name: copy.meta.techMap.title,
        description: copy.meta.techMap.description,
        inLanguage: LOCALE[lang],
        isPartOf: { "@id": SITE_ID },
        author: { "@id": PERSON_ID },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: profile.name,
            item: home,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: copy.mapPage.breadcrumb,
            item: url,
          },
        ],
      },
      {
        "@type": "WebApplication",
        "@id": `${url}#app`,
        name: copy.mapPage.title,
        url,
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web",
        browserRequirements: "Requires JavaScript for pan and zoom",
        description: copy.meta.techMap.description,
        author: { "@id": PERSON_ID },
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@type": "DefinedTermSet",
        "@id": `${url}#areas`,
        name: copy.mapPage.outlineTitle,
        inLanguage: LOCALE[lang],
        hasDefinedTerm: areas.map((area) => ({
          "@type": "DefinedTerm",
          "@id": `${url}#${area.id}`,
          name: area.label[lang],
          description: area.summary[lang],
          termCode: area.id,
          inDefinedTermSet: { "@id": `${url}#areas` },
        })),
      },
    ],
  };
}

/** Datos estructurados para el indice y los articulos de investigacion. */
export function researchJsonLd(lang: Lang, copy: Copy, route: RouteKey) {
  const url = absolute(path(route, lang));
  const home = absolute(path("home", lang));
  const isArticle = route !== "research";

  return {
    "@context": "https://schema.org",
    "@graph": [
      personNode(lang, copy),
      websiteNode(lang, copy),
      {
        "@type": isArticle ? "TechArticle" : "CollectionPage",
        "@id": `${url}#page`,
        url,
        name: copy.meta[route].title,
        description: copy.meta[route].description,
        inLanguage: LOCALE[lang],
        isPartOf: { "@id": SITE_ID },
        author: { "@id": PERSON_ID },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        ...(isArticle
          ? {
              headline: copy.meta[route].title,
              datePublished: "2026-09-16",
              dateModified: "2026-09-16",
              about: ["Legal information systems", "Data visualisation", "Software architecture"],
            }
          : {}),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: profile.name, item: home },
          {
            "@type": "ListItem",
            position: 2,
            name: copy.meta.research.title,
            item: absolute(path("research", lang)),
          },
          ...(isArticle
            ? [
                {
                  "@type": "ListItem",
                  position: 3,
                  name: copy.meta[route].title,
                  item: url,
                },
              ]
            : []),
        ],
      },
    ],
  };
}

/** Rutas absolutas de todas las páginas, para el sitemap. */
export function allRoutes(): { key: RouteKey; lang: Lang; url: string }[] {
  return (Object.keys(routes) as RouteKey[]).flatMap((key) =>
    (["es", "en"] as Lang[]).map((lang) => ({
      key,
      lang,
      url: absolute(routes[key][lang]),
    })),
  );
}

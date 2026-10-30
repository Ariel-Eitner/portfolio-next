import type { MetadataRoute } from "next";
import { LOCALE, ROUTE_KEYS, routes } from "@/i18n/config";
import { absolute } from "@/lib/seo";
import { faro } from "@/data/faro";

/**
 * Un `<url>` por página y por idioma, cada uno declarando a su traducción.
 * Google necesita que la relación hreflang sea recíproca: si `/` apunta a `/en`,
 * `/en` tiene que apuntar de vuelta a `/`, o descarta el par entero.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const translatedPages = ROUTE_KEYS.flatMap((key) => {
    const languages = {
      [LOCALE.es]: absolute(routes[key].es),
      [LOCALE.en]: absolute(routes[key].en),
    };

    return [
      {
        url: absolute(routes[key].es),
        lastModified,
        changeFrequency: "monthly" as const,
        priority: key === "home" ? 1 : 0.8,
        alternates: { languages },
      },
      {
        url: absolute(routes[key].en),
        lastModified,
        changeFrequency: "monthly" as const,
        priority: key === "home" ? 0.9 : 0.7,
        alternates: { languages },
      },
    ];
  });
  return [
    ...translatedPages,
    {
      url: absolute(faro.path),
      lastModified: new Date(faro.dateModified),
      changeFrequency: "monthly",
      priority: 0.9,
      images: [
        "/images/faro/faro-mark.png",
        "/images/faro/observatorio.png",
        "/images/faro/municipal-mapa.png",
        "/images/faro/nacional-mapa.png",
      ].map(absolute),
    },
  ];
}

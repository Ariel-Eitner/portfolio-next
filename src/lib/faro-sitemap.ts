import type { MetadataRoute } from "next";
import { faro } from "@/data/faro";
import { absolute } from "./seo";

/** Shared by the portfolio sitemap and the Search Console /faro property. */
export function faroSitemapEntry(): MetadataRoute.Sitemap[number] {
  return {
    url: absolute(faro.path),
    lastModified: new Date(faro.dateModified),
    changeFrequency: "monthly",
    priority: 0.9,
    images: [
      faro.socialImage,
      "/images/faro/faro-mark.png",
      "/images/faro/observatorio.png",
      "/images/faro/municipal-mapa.png",
      "/images/faro/nacional-mapa.png",
    ].map(absolute),
  };
}

export function faroJourneySitemapEntry(): MetadataRoute.Sitemap[number] {
  return {
    url: absolute("/faro/como-funciona"),
    lastModified: new Date(faro.dateModified),
    changeFrequency: "monthly",
    priority: 0.8,
    images: ["cat-resultados", "cat-ficha", "cat-articulo", "cat-mobile-ficha"]
      .map(name => absolute(`/images/faro/recorrido/${name}.webp`)),
  };
}

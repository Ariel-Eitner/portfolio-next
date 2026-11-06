import type { MetadataRoute } from "next";
import { faroSitemapEntry, faroJourneySitemapEntry } from "@/lib/faro-sitemap";

export default function sitemap(): MetadataRoute.Sitemap {
  return [faroSitemapEntry(), faroJourneySitemapEntry()];
}

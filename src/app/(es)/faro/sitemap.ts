import type { MetadataRoute } from "next";
import { faroSitemapEntry } from "@/lib/faro-sitemap";

export default function sitemap(): MetadataRoute.Sitemap {
  return [faroSitemapEntry()];
}

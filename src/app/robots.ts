import type { MetadataRoute } from "next";
import { site } from "@/data/profile";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // Los rastreadores de LLM son hoy una vía de descubrimiento real; no hay
      // nada acá que convenga esconderles.
      { userAgent: ["GPTBot", "ClaudeBot", "PerplexityBot"], allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}

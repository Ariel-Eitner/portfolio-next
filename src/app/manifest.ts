import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { getCopy } from "@/data/copy";

export default function manifest(): MetadataRoute.Manifest {
  const copy = getCopy("es");

  return {
    name: copy.meta.siteName,
    short_name: profile.name,
    description: copy.meta.home.description,
    start_url: "/",
    display: "standalone",
    background_color: "#08080a",
    theme_color: "#08080a",
    lang: "es-AR",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}

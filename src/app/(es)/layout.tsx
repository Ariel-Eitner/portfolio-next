import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import RootHtml from "@/components/layout/RootHtml";
import { site } from "@/data/profile";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
};

export const viewport: Viewport = {
  themeColor: "#08080a",
  colorScheme: "dark",
};

export default function EsLayout({ children }: { children: ReactNode }) {
  return <RootHtml lang="es">{children}</RootHtml>;
}

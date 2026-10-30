import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import RootHtml from "@/components/layout/RootHtml";
import { site } from "@/data/profile";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION || undefined },
};

export const viewport: Viewport = {
  themeColor: "#08080a",
  colorScheme: "dark",
};

export default function EnLayout({ children }: { children: ReactNode }) {
  return <RootHtml lang="en">{children}</RootHtml>;
}

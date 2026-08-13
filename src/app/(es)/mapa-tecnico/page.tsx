import type { Metadata } from "next";
import TechMapPage from "@/components/pages/TechMapPage";
import { getCopy } from "@/data/copy";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("es", getCopy("es"), "techMap");

export default function Page() {
  return <TechMapPage lang="es" />;
}

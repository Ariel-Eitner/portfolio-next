import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { getCopy } from "@/data/copy";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("en", getCopy("en"), "home");

export default function Page() {
  return <HomePage lang="en" />;
}

import type { Lang } from "@/i18n/config";
import type { Copy, SectionKey } from "./types";
import es from "./es";
import en from "./en";

const dictionaries: Record<Lang, Copy> = { es, en };

export function getCopy(lang: Lang): Copy {
  return dictionaries[lang];
}

/** Ancla de una sección de la landing en el idioma actual. */
export function sectionId(copy: Copy, key: SectionKey): string {
  return copy.nav.find((item) => item.key === key)?.id ?? key;
}

export type { Copy, SectionKey } from "./types";

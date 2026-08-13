import { profile } from "@/data/profile";
import { getCopy } from "@/data/copy";
import { areas, TOTAL_TECH } from "@/data/techMap/areas";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/ogImage";

const copy = getCopy("en");

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = copy.meta.techMap.title;

export default function Image() {
  return renderOgImage({
    kicker: copy.mapPage.kicker,
    title: "Map of technologies and architecture",
    subtitle: `${areas.length} ${copy.mapPage.areasNoun} · ${TOTAL_TECH} ${copy.mapPage.techNoun}`,
    footerLeft: profile.name,
    footerRight: copy.meta.role,
  });
}

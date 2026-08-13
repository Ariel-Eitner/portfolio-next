import { profile } from "@/data/profile";
import { getCopy } from "@/data/copy";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/ogImage";

const copy = getCopy("es");

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = copy.meta.ogAlt;

export default function Image() {
  return renderOgImage({
    kicker: copy.about.location,
    title: profile.name,
    subtitle: copy.hero.role,
    footerLeft: copy.hero.tagline,
    footerRight: `${profile.yearsOfExperience} años`,
  });
}

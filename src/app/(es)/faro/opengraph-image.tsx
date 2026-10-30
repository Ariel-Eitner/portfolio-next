import { faro } from "@/data/faro";
import { faroSocialImage } from "@/lib/faro-social-image";
export const alt = faro.imageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return faroSocialImage(630);
}

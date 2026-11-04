export const PUBLIC_SITE_URL = "https://ariel-eitner.vercel.app";

/** Keep old deployment settings from reintroducing broken canonical/OG URLs. */
export function resolveSiteUrl(configured?: string): string {
  const url = new URL(configured?.trim() || PUBLIC_SITE_URL);
  if (url.hostname === "portfolio-next-xi-nine.vercel.app") return PUBLIC_SITE_URL;
  if (!["https:", "http:"].includes(url.protocol)) {
    throw new Error("NEXT_PUBLIC_SITE_URL must be an HTTP(S) origin");
  }
  return url.origin;
}

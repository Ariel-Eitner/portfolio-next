import QRCode from "qrcode";
import sharp from "sharp";
import { profile } from "@/data/profile";
import { portfolioShareUrl, shareCopy } from "@/data/share";
import type { Lang } from "@/i18n/config";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return ["es", "en"].flatMap(lang => [
    { asset: `${lang}.svg` },
    { asset: `${lang}.png` },
    { asset: `${lang}-tarjeta.png` },
  ]);
}

export async function GET(_request: Request, context: { params: Promise<{ asset: string }> }) {
  const { asset } = await context.params;
  const match = /^(es|en)(-tarjeta)?\.(svg|png)$/.exec(asset);
  if (!match || (match[2] && match[3] !== "png")) return new Response(null, { status: 404 });
  const lang = match[1] as Lang;
  const copy = shareCopy[lang];
  const svg = await QRCode.toString(portfolioShareUrl(lang), {
    type: "svg", errorCorrectionLevel: "M", margin: 4,
    color: { dark: "#08080a", light: "#ffffff" },
  });
  const isSvg = match[3] === "svg";
  let body: string | Uint8Array = svg;
  if (match[2]) {
    const qr = await sharp(Buffer.from(svg)).resize(960, 960, { kernel: "nearest" }).png().toBuffer();
    const label = portfolioShareUrl(lang).replace("https://", "").replace(/\/$/, "");
    const card = `<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="1920">
      <rect width="1440" height="1920" fill="#08080a"/>
      <rect x="100" y="110" width="80" height="8" rx="4" fill="#ffb224"/>
      <g font-family="Arial, sans-serif">
        <text x="100" y="245" fill="#f4f4f5" font-size="86" font-weight="700">${profile.name}</text>
        <text x="100" y="325" fill="#a1a1aa" font-size="34">${copy.role}</text>
        <text x="720" y="1485" text-anchor="middle" fill="#ffb224" font-size="44" font-weight="700">${copy.title}</text>
        <text x="720" y="1570" text-anchor="middle" fill="#f4f4f5" font-size="38">${label}</text>
        <text x="720" y="1750" text-anchor="middle" fill="#a1a1aa" font-size="30">${copy.intro}</text>
      </g>
      <rect x="220" y="420" width="1000" height="1000" rx="32" fill="white"/>
    </svg>`;
    body = new Uint8Array(await sharp(Buffer.from(card)).composite([{ input: qr, left: 240, top: 440 }]).png().toBuffer());
  } else if (!isSvg) {
    body = new Uint8Array(await sharp(Buffer.from(svg)).resize(2048, 2048, { kernel: "nearest" }).png().toBuffer());
  }
  return new Response(body as BodyInit, {
    headers: {
      "Content-Type": isSvg ? "image/svg+xml; charset=utf-8" : "image/png",
      "Content-Disposition": `inline; filename="ariel-eitner-${asset}"`,
      "Cache-Control": "public, max-age=86400",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

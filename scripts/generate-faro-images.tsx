/** Run with npm run images:faro. Generated PNGs are committed, not rendered on requests. */
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import sharp from "sharp";
import LighthouseMark from "../src/components/faro/LighthouseMark";

async function main() {
const directory = resolve("public/images/faro");
await mkdir(directory, { recursive: true });
const mark = renderToStaticMarkup(<LighthouseMark theme="light" width={640} height={690} />);
await writeFile(`${directory}/faro-mark.svg`, mark);
await sharp(Buffer.from(mark)).resize(512, 512, { fit: "contain", background: "#f7f8f5" })
  .flatten({ background: "#f7f8f5" }).png().toFile(`${directory}/faro-mark.png`);

const icon = renderToStaticMarkup(
  <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
    <rect width="512" height="512" fill="#f7f8f5" />
    <LighthouseMark theme="light" signature={false} x={12} y={12} width={488} height={488} viewBox="-20 -90 680 680" />
  </svg>,
);
await writeFile(`${directory}/faro-icon.svg`, icon);
for (const [name, size] of [["faro-icon.png", 192], ["faro-apple.png", 180]] as const) {
  await sharp(Buffer.from(icon)).resize(size, size).png().toFile(`${directory}/${name}`);
}

const social = renderToStaticMarkup(
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#f7f8f5" />
    {/* Identical 640:690 aspect ratio; no stretching or cropping of the mark. */}
    <LighthouseMark theme="light" x={42} y={34} width={520} height={560.625} />
    <path d="M590 84V546" stroke="#dce3e5" />
    <g fontFamily="Arial, sans-serif">
      <text x="632" y="131" fontSize="13" letterSpacing="2.1" fill="#a37428">SOFTWARE PARA MUNICIPIOS</text>
      <text x="628" y="225" fontSize="61" fontWeight="700" letterSpacing="-2" fill="#062d48">Digesto digital</text>
      <text x="628" y="294" fontSize="59" fontWeight="700" letterSpacing="-2" fill="#062d48">para municipios.</text>
      <path d="M632 331h54" stroke="#a37428" strokeWidth="3" />
      <text x="632" y="383" fontSize="23" fill="#506573">Ordenanzas, decretos y artículos.</text>
      <text x="632" y="419" fontSize="23" fill="#506573">Búsqueda normativa y mapa legal.</text>
      <text x="632" y="505" fontSize="13" letterSpacing="1.5" fill="#a37428">NORMATIVA MUNICIPAL · ARGENTINA</text>
      <text x="632" y="546" fontSize="17" fill="#506573">ariel-eitner.vercel.app/faro</text>
    </g>
  </svg>,
);
await sharp(Buffer.from(social)).png().toFile(`${directory}/faro-social.png`);
console.log("FARO: static mark, icons and 1200×630 social image generated from LighthouseMark.");

}

main().catch(error => { console.error(error); process.exitCode = 1; });

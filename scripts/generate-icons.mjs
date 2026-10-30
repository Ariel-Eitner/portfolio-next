/**
 * Genera los iconos del sitio a partir de un único mark "AE" vectorial.
 *
 *   npm run icons
 *
 * Produce `public/icon.svg`, `public/favicon.ico` (16 + 32 px) y
 * `public/apple-touch-icon.png`. Se versiona el script y no sólo los binarios
 * para que cambiar el color de marca sea editar una constante y volver a correrlo.
 *
 * Las letras van como trazos y no como <text>: el renderizado de texto en SVG
 * depende de las fuentes del sistema, así que el mismo archivo daría resultados
 * distintos en cada máquina.
 */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

// Marca propia de FARO. No reemplaza los iconos generales del portafolio.
if (process.argv.includes("--faro")) {
  const directory = join(import.meta.dirname, "..", "public", "images", "faro");
  mkdirSync(directory, { recursive: true });
  const svg = readFileSync(join(directory, "faro-mark.svg"));
  for (const [filename, size] of [["faro-mark.png", 512], ["faro-icon.png", 192], ["faro-apple.png", 180]]) {
    await sharp(svg).resize(size, size, { fit: "contain", background: "#071927" }).flatten({ background: "#071927" }).png({ compressionLevel: 9 }).toFile(join(directory, filename));
  }
  console.log("FARO: marca (512), icono (192) y apple-touch-icon (180) actualizados.");
  process.exit(0);
}

const AMBER = "#ffb224";
const INK = "#08080a";

/**
 * Trazos de "AE" sobre una rejilla de 64 × 64.
 *
 * Las medidas están afinadas para los 16 px, que es donde se ve en la pestaña:
 * el trazo baja a 5 y la travesaño de la A va a media altura para que el hueco
 * del triángulo no se cierre al reducir, y quedan 10 unidades entre la pata de
 * la A y el asta de la E para que no se fundan en un solo bloque.
 */
const LETTERS = `
  <g fill="none" stroke="${INK}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 47 L21 17 L30 47" />
    <path d="M15.4 38 H26.6" />
    <path d="M40 17 V47" />
    <path d="M40 17 H52" />
    <path d="M40 32 H50" />
    <path d="M40 47 H52" />
  </g>
`;

/** Favicon: esquinas redondeadas, sin margen. */
const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="14" fill="${AMBER}" />
${LETTERS}</svg>
`;

/**
 * apple-touch-icon: cuadrado a sangre y con más margen. iOS aplica su propia
 * máscara redondeada, así que un icono ya redondeado se recorta dos veces.
 */
const appleIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -8 80 80" width="80" height="80">
  <rect x="-8" y="-8" width="80" height="80" fill="${AMBER}" />
${LETTERS}</svg>
`;

/**
 * Empaqueta PNGs en un contenedor .ico. Desde Windows Vista el formato admite
 * PNG embebido, así que no hace falta escribir mapas de bits BMP.
 */
function buildIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reservado
  header.writeUInt16LE(1, 2); // tipo: icono
  header.writeUInt16LE(images.length, 4);

  let offset = 6 + images.length * 16;
  const entries = [];

  for (const { size, data } of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // 0 significa 256
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2); // paleta
    entry.writeUInt8(0, 3); // reservado
    entry.writeUInt16LE(1, 4); // planos
    entry.writeUInt16LE(32, 6); // bits por píxel
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    offset += data.length;
  }

  return Buffer.concat([header, ...entries, ...images.map((i) => i.data)]);
}

const publicDir = join(import.meta.dirname, "..", "public");
const source = Buffer.from(icon);

writeFileSync(join(publicDir, "icon.svg"), icon);

const png = (svg, size) =>
  sharp(Buffer.from(svg)).resize(size, size).png({ compressionLevel: 9 }).toBuffer();

const [ico16, ico32, apple] = await Promise.all([
  png(source, 16),
  png(source, 32),
  png(appleIcon, 180),
]);

writeFileSync(
  join(publicDir, "favicon.ico"),
  buildIco([
    { size: 16, data: ico16 },
    { size: 32, data: ico32 },
  ]),
);
writeFileSync(join(publicDir, "apple-touch-icon.png"), apple);
writeFileSync(join(publicDir, "icon-512.png"), await png(source, 512));

console.log("icon.svg · favicon.ico (16, 32) · apple-touch-icon.png · icon-512.png");

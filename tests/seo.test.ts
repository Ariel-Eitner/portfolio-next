import assert from "node:assert/strict";
import { spawn, type ChildProcess } from "node:child_process";
import { readFile } from "node:fs/promises";
import { createServer } from "node:net";
import { after, before, test } from "node:test";
import sharp from "sharp";
import { faro, faroQuestions } from "../src/data/faro";
import { PUBLIC_SITE_URL, resolveSiteUrl } from "../src/lib/site-url";

let server: ChildProcess;
let base: string;
let output = "";

before(async () => {
  const socket = createServer();
  await new Promise<void>((resolve) => socket.listen(0, "127.0.0.1", resolve));
  const address = socket.address();
  assert.ok(address && typeof address !== "string");
  const port = address.port;
  await new Promise<void>((resolve, reject) => socket.close(error => error ? reject(error) : resolve()));
  base = `http://127.0.0.1:${port}`;
  server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "-H", "127.0.0.1", "-p", String(port)], {
    stdio: ["ignore", "pipe", "pipe"], windowsHide: true,
  });
  server.stdout?.on("data", chunk => { output += chunk; });
  server.stderr?.on("data", chunk => { output += chunk; });
  for (let attempt = 0; attempt < 100; attempt++) {
    if (server.exitCode !== null) throw new Error(output);
    try { if ((await fetch(`${base}/robots.txt`)).ok) return; } catch { /* Startup */ }
    await new Promise(resolve => setTimeout(resolve, 200));
  }
  throw new Error(`Production server did not start: ${output}`);
}, { timeout: 30000 });

after(async () => {
  if (server && server.exitCode === null) {
    await new Promise<void>(resolve => { server.once("exit", () => resolve()); server.kill(); });
  }
});

function attributes(tag: string) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(match => [match[1]!, match[2]!.replaceAll("&amp;", "&").replaceAll("&quot;", '"')]));
}

test("public origin migrates the retired alias and normalizes configured origins", () => {
  assert.equal(resolveSiteUrl(), PUBLIC_SITE_URL);
  assert.equal(resolveSiteUrl("  "), PUBLIC_SITE_URL);
  assert.equal(resolveSiteUrl("https://portfolio-next-xi-nine.vercel.app/"), PUBLIC_SITE_URL);
  assert.equal(resolveSiteUrl(`${PUBLIC_SITE_URL}/`), PUBLIC_SITE_URL);
  assert.equal(resolveSiteUrl("https://example.com/"), "https://example.com");
  assert.throws(() => resolveSiteUrl("file:///tmp/site"));
});

test("FARO serves its canonical, discoverable content, connected schema and working social image", async () => {
  const response = await fetch(`${base}/faro`, { headers: { "User-Agent": "facebookexternalhit/1.1" } });
  assert.equal(response.status, 200);
  const html = await response.text();
  const tags = [...html.matchAll(/<meta\b[^>]*>/g)].map(match => attributes(match[0]));
  const meta = Object.fromEntries(tags.map(tag => [tag.property ?? tag.name, tag.content]));
  const links = [...html.matchAll(/<link\b[^>]*>/g)].map(match => attributes(match[0]));
  assert.equal(links.find(tag => tag.rel === "canonical")?.href, `${PUBLIC_SITE_URL}/faro`);
  assert.equal(meta["og:url"], `${PUBLIC_SITE_URL}/faro`);
  assert.equal(meta["og:image"], `${PUBLIC_SITE_URL}${faro.socialImage}`);
  assert.equal(meta["twitter:image"], meta["og:image"]);
  assert.equal(meta["og:image:width"], "1200");
  assert.equal(meta["og:image:height"], "630");
  assert.equal(meta["og:image:alt"], faro.socialImageAlt);
  assert.equal(meta["description"], faro.description);
  assert.match(meta["robots"]!, /index, follow/);
  assert.doesNotMatch(html, /portfolio-next-xi-nine\.vercel\.app/);
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1);
  assert.match(html, /FARO: digesto digital/);
  assert.match(html, /De archivos dispersos a un digesto digital/);
  const rawSchema = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]!));
  const graph = rawSchema.flatMap(schema => schema["@graph"] ?? []);
  const page = graph.find(node => node["@type"] === "WebPage");
  assert.equal(page.url, `${PUBLIC_SITE_URL}/faro`);
  assert.ok(graph.some(node => node["@id"] === page.isPartOf["@id"] && node["@type"] === "WebSite"));
  const primaryImage = graph.find(node => node["@id"] === page.primaryImageOfPage["@id"]);
  assert.equal(primaryImage.url, meta["og:image"]);
  assert.equal(primaryImage.width, 1200);
  assert.equal(primaryImage.height, 630);
  const faq = graph.find(node => node["@type"] === "FAQPage");
  assert.equal(faq.mainEntity.length, faroQuestions.length);
  for (const [question, answer] of faroQuestions) {
    assert.ok(html.includes(question));
    assert.ok(html.includes(answer));
    assert.ok(faq.mainEntity.some((item: { name: string; acceptedAnswer: { text: string } }) => item.name === question && item.acceptedAnswer.text === answer));
  }
  for (const url of new Set([meta["og:image"], meta["twitter:image"]])) {
    const image = await fetch(`${base}${new URL(url!).pathname}`);
    assert.equal(image.status, 200);
    assert.match(image.headers.get("content-type")!, /image\/png/);
    const info = await sharp(Buffer.from(await image.arrayBuffer())).metadata();
    assert.equal(info.width, 1200);
    assert.equal(info.height, 630);
  }
});

test("robots and sitemap consistently advertise the public origin and FARO images", async () => {
  const robots = await (await fetch(`${base}/robots.txt`)).text();
  assert.match(robots, /Allow: \//);
  assert.ok(robots.includes(`Sitemap: ${PUBLIC_SITE_URL}/sitemap.xml`));
  const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
  assert.ok(sitemap.includes(`<loc>${PUBLIC_SITE_URL}/faro</loc>`));
  assert.ok(sitemap.includes(`<image:loc>${PUBLIC_SITE_URL}${faro.socialImage}</image:loc>`));
  assert.doesNotMatch(sitemap + robots, /portfolio-next-xi-nine/);
  const scopedResponse = await fetch(`${base}/faro/sitemap.xml`);
  assert.equal(scopedResponse.status, 200);
  const scoped = await scopedResponse.text();
  assert.equal([...scoped.matchAll(/<loc>/g)].length, 1);
  assert.ok(scoped.includes(`<loc>${PUBLIC_SITE_URL}/faro</loc>`));
  assert.ok(robots.includes(`Sitemap: ${PUBLIC_SITE_URL}/faro/sitemap.xml`));
  const verification = await fetch(`${base}/faro/googlea5f29fa56ca86491.html`);
  assert.equal(verification.status, 200);
  assert.equal((await verification.text()).trim(), "google-site-verification: googlea5f29fa56ca86491.html");
});

test("static identity has original proportions, resolved colors and no animation dependency", async () => {
  const svg = await readFile("public/images/faro/faro-mark.svg", "utf8");
  assert.ok(svg.includes('viewBox="0 0 640 690"'));
  assert.doesNotMatch(svg, /var\(--|<animate|animation:|class=/);
  for (const [file, width] of [["faro-mark.png", 512], ["faro-icon.png", 192], ["faro-apple.png", 180]] as const) {
    const image = await fetch(`${base}/images/faro/${file}`);
    assert.equal(image.status, 200);
    const info = await sharp(Buffer.from(await image.arrayBuffer())).metadata();
    assert.equal(info.width, width);
    assert.equal(info.height, width);
  }
  const research = await (await fetch(`${base}/investigacion/mapa-legal-observatorio-leyes`)).text();
  assert.match(research, /href="\/faro"/);
  assert.ok(research.includes("FARO, digesto digital para municipios"));
});

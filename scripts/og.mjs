// Genera public/og.png a partir de public/og.svg (imagen para redes y SEO).
// Uso: npm run og
import { readFileSync, writeFileSync } from "node:fs";
import { Resvg } from "@resvg/resvg-js";

const from = new URL("../public/og.svg", import.meta.url);
const to = new URL("../public/og.png", import.meta.url);

const svg = readFileSync(from);
const resvg = new Resvg(svg, { fitTo: { mode: "width", value: 1200 }, font: { loadSystemFonts: true } });
const png = resvg.render().asPng();
writeFileSync(to, png);
console.log(`✅ og.png generada (${png.length} bytes)`);

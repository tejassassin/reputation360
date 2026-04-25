/**
 * Duplicate dist/index.html to dist/case-studies/index.html so /case-studies
 * can resolve to a static file (helps CDNs/hosts; same SPA, same /assets/ URLs).
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const dist = join(root, "dist");
const indexHtml = join(dist, "index.html");
const caseDir = join(dist, "case-studies");

const html = await readFile(indexHtml, "utf8");
await mkdir(caseDir, { recursive: true });
await writeFile(join(caseDir, "index.html"), html, "utf8");
console.log("postbuild-spa-routes: wrote dist/case-studies/index.html");

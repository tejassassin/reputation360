/**
 * Set rel=canonical href on every dist HTML file from the file path (so react-snap
 * or other steps cannot leave one global homepage URL on all prerendered files).
 */
import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  canonicalHrefForNormalizedPath,
  normalizeCanonicalPath,
} from "../src/lib/canonicalHrefFromPath.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, "..", "dist");

const SKIP_DIR_NAMES = new Set(["assets"]);

function pathnameForDistHtmlFile(absFile) {
  const rel = path.relative(dist, absFile).split(path.sep).join("/");
  if (rel === "index.html") return "/";
  if (rel.endsWith("/index.html")) {
    const dir = rel.slice(0, -"/index.html".length);
    return dir ? `/${dir}` : "/";
  }
  return "/";
}

function patchCanonicalHref(html, href) {
  let next = html.replace(
    /(<link\b[\s\S]*?\bid\s*=\s*["']r360-link-canonical["'][\s\S]*?\bhref\s*=\s*["'])([^"']*)(["'])/i,
    `$1${href}$3`,
  );
  if (next === html) {
    next = html.replace(
      /(<link\b[\s\S]*?\bhref\s*=\s*["'])([^"']*)(["'][\s\S]*?\bid\s*=\s*["']r360-link-canonical["'])/i,
      `$1${href}$3`,
    );
  }
  return next;
}

async function walkHtmlFiles(dir, out = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const ent of entries) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (SKIP_DIR_NAMES.has(ent.name)) continue;
      await walkHtmlFiles(p, out);
    } else if (ent.isFile() && ent.name.endsWith(".html")) {
      out.push(p);
    }
  }
  return out;
}

async function main() {
  let changed = 0;
  const files = await walkHtmlFiles(dist);
  for (const file of files) {
    const pathname = pathnameForDistHtmlFile(file);
    const href = canonicalHrefForNormalizedPath(normalizeCanonicalPath(pathname));
    const html = await readFile(file, "utf8");
    const next = patchCanonicalHref(html, href);
    if (next !== html) {
      await writeFile(file, next, "utf8");
      changed += 1;
    }
  }
  console.log(
    `patch-dist-canonical-from-fspath: checked ${files.length} html files, updated ${changed}`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

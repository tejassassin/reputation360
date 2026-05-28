#!/usr/bin/env node
/**
 * Final gate: every shipped index.html must keep #root so the SPA can mount.
 * react-snap (when enabled locally) can strip body content; this fails the build if so.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const dist = join(root, "dist");

/** @param {string} dir */
function walkIndexHtml(dir) {
  /** @type {string[]} */
  const out = [];
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    const st = statSync(path);
    if (st.isDirectory()) {
      out.push(...walkIndexHtml(path));
    } else if (name === "index.html") {
      out.push(path);
    }
  }
  return out;
}

let failed = false;

for (const file of walkIndexHtml(dist)) {
  const html = readFileSync(file, "utf8");
  if (!/\bid=["']root["']/.test(html)) {
    console.error(
      `verify-dist-html: ${relative(root, file)} is missing #root (SPA cannot mount).`,
    );
    failed = true;
    continue;
  }
  if (!/<script[^>]+type=["']module["'][^>]+src=["']\/assets\/index-[^"']+\.js["']/.test(html)) {
    console.error(
      `verify-dist-html: ${relative(root, file)} is missing the app module script.`,
    );
    failed = true;
  }
}

if (failed) {
  process.exit(1);
}

console.log(`verify-dist-html: OK (${walkIndexHtml(dist).length} index.html files)`);

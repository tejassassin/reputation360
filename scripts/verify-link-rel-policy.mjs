#!/usr/bin/env node
/**
 * Enforce link rel policy: external links must include nofollow;
 * do not hardcode rel="noopener noreferrer" without nofollow.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

/** rel= or rel: with only noopener noreferrer (missing nofollow). */
const BAD_REL_ATTR =
  /rel\s*=\s*["']noopener noreferrer["']|rel\s*:\s*["']noopener noreferrer["']/g;

/** @param {string} dir @returns {string[]} */
function collectFiles(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    const stat = statSync(path);
    if (stat.isDirectory()) {
      if (name === "node_modules" || name === "dist" || name === "tmp-img-check") continue;
      collectFiles(path, acc);
    } else if (/\.(jsx?|tsx?|mjs|cjs|html)$/.test(name)) {
      acc.push(path);
    }
  }
  return acc;
}

const files = [
  join(root, "index.html"),
  join(root, "scripts/r360-home-boot-snippet.js"),
  ...collectFiles(join(root, "src")),
  ...collectFiles(join(root, "scripts"), []).filter(
    (p) => p.endsWith(".mjs") && !p.includes("verify-link-rel-policy"),
  ),
];

/** @type {Array<{ file: string; line: number; text: string }>} */
const violations = [];

for (const file of files) {
  const content = readFileSync(file, "utf8");
  const lines = content.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!BAD_REL_ATTR.test(line)) continue;
    BAD_REL_ATTR.lastIndex = 0;
    if (line.includes("nofollow")) continue;

    violations.push({
      file: file.replace(root + "/", ""),
      line: i + 1,
      text: line.trim(),
    });
  }
}

if (violations.length > 0) {
  console.error("verify-link-rel-policy: found external rel without nofollow:\n");
  for (const v of violations) {
    console.error(`  ${v.file}:${v.line}  ${v.text}`);
  }
  console.error(
    "\nUse externalAnchorProps, anchorTabProps, calendlyNewTabProps, or EXTERNAL_LINK_REL from src/lib/internalLinkProps.js",
  );
  process.exit(1);
}

console.log(`verify-link-rel-policy: OK (${files.length} files checked)`);

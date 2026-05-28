#!/usr/bin/env node
/**
 * Catch `export { x } from "./mod"` followed by use of `x` in the same file.
 * Re-exports do not create local bindings and cause runtime ReferenceError in the browser.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const srcRoot = join(root, "src");

/** @param {string} dir */
function walkJsFiles(dir) {
  /** @type {string[]} */
  const out = [];
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    const st = statSync(path);
    if (st.isDirectory()) {
      out.push(...walkJsFiles(path));
    } else if (/\.(js|jsx|mjs|cjs)$/.test(name)) {
      out.push(path);
    }
  }
  return out;
}

/**
 * @param {string} source
 * @returns {Set<string>}
 */
function reexportOnlyNames(source) {
  /** @type {Set<string>} */
  const names = new Set();
  const re =
    /export\s*\{([^}]+)\}\s*from\s*["'][^"']+["']\s*;?/g;
  let m;
  while ((m = re.exec(source)) !== null) {
    for (const part of m[1].split(",")) {
      const trimmed = part.trim();
      if (!trimmed) continue;
      const asMatch = trimmed.match(/^\s*(\w+)\s+as\s+(\w+)\s*$/);
      if (asMatch) {
        names.add(asMatch[2]);
      } else {
        const id = trimmed.match(/^\s*(\w+)\s*$/)?.[1];
        if (id) names.add(id);
      }
    }
  }
  return names;
}

/**
 * @param {string} source
 * @returns {Set<string>}
 */
function localImportNames(source) {
  /** @type {Set<string>} */
  const names = new Set();
  const importRe =
    /import\s+(?:\{([^}]+)\}|(\w+))\s+from\s*["'][^"']+["']/g;
  let m;
  while ((m = importRe.exec(source)) !== null) {
    if (m[2]) {
      names.add(m[2]);
      continue;
    }
    for (const part of m[1].split(",")) {
      const trimmed = part.trim();
      const asMatch = trimmed.match(/^\s*(\w+)\s+as\s+(\w+)\s*$/);
      if (asMatch) {
        names.add(asMatch[2]);
      } else {
        const id = trimmed.match(/^\s*(\w+)\s*$/)?.[1];
        if (id) names.add(id);
      }
    }
  }
  return names;
}

/**
 * @param {string} source
 * @param {string} name
 */
function usesIdentifier(source, name) {
  const re = new RegExp(`\\b${name}\\b`);
  const withoutExports = source.replace(
    /export\s*\{[^}]+\}\s*from\s*["'][^"']+["']\s*;?/g,
    "",
  );
  return re.test(withoutExports);
}

let failed = false;

for (const file of walkJsFiles(srcRoot)) {
  const source = readFileSync(file, "utf8");
  const reexports = reexportOnlyNames(source);
  if (!reexports.size) continue;

  const imported = localImportNames(source);
  for (const name of reexports) {
    if (imported.has(name)) continue;
    if (!usesIdentifier(source, name)) continue;

    console.error(
      `check-export-reexport: ${relative(root, file)} uses "${name}" without importing it (re-export-only binding).`,
    );
    console.error(
      `  Fix: import { ${name} } from "..." before using it in this file.`,
    );
    failed = true;
  }
}

if (failed) {
  process.exit(1);
}

console.log("check-export-reexport: OK");

#!/usr/bin/env node
/**
 * Load client modules through Vite so ?raw and aliases resolve.
 * Fails the build if a module throws during evaluation (e.g. ReferenceError).
 */
import { createServer } from "vite";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

/** @type {string[]} */
const modules = [
  "/src/data/blogs/suppressNegativeContentGuide.js",
  "/src/data/blogs/suppressNegativeGuideMeta.js",
  "/src/data/blogs/diyReputationGuide.js",
  "/src/data/blogs/removeNegativeSearchResultsGuide.js",
  "/src/data/blogs/pack20/catalog.js",
  "/src/lib/prerender/getPrerenderHtmlForPath.js",
];

const server = await createServer({
  root,
  logLevel: "error",
  server: { middlewareMode: true },
});

await server.pluginContainer.buildStart({});

let failed = false;

for (const id of modules) {
  try {
    await server.ssrLoadModule(id);
    console.log(`verify-critical-imports: OK ${id}`);
  } catch (err) {
    failed = true;
    console.error(`verify-critical-imports: FAIL ${id}`);
    console.error(err);
  }
}

await server.close();

if (failed) {
  process.exit(1);
}

/**
 * Regenerate homepage JSON-LD in index.html from src/data/organizationSchema.js.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { HOME_PAGE_JSON_LD } from "../src/data/organizationSchema.js";

const root = dirname(fileURLToPath(import.meta.url));
const indexPath = join(root, "..", "index.html");

const START = "<!-- R360_JSONLD_START -->";
const END = "<!-- R360_JSONLD_END -->";

const html = readFileSync(indexPath, "utf8");
const json = JSON.stringify(HOME_PAGE_JSON_LD, null, 2);
const block = `${START}
  <script type="application/ld+json" id="r360-jsonld-organization">
  ${json}
  </script>
  ${END}`;

const re = new RegExp(
  `${START.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[\\s\\S]*?${END.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`,
);

if (!re.test(html)) {
  throw new Error(`index.html missing ${START} / ${END} markers`);
}

writeFileSync(indexPath, html.replace(re, block), "utf8");

const graph = HOME_PAGE_JSON_LD["@graph"];
const serviceCount = graph.filter((node) => node["@type"] === "Service").length;
console.log(
  `sync-home-jsonld: ${graph.length} entities (${serviceCount} Service) → index.html`,
);

/**
 * Creates .env.local from .env.example so you can paste Google CSE keys locally
 * without opening the Vercel dashboard. .env.local is gitignored (*.local).
 */
import { copyFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const local = join(root, ".env.local");
const example = join(root, ".env.example");

if (existsSync(local)) {
  console.log("\n  .env.local already exists.");
  console.log("  For live Google results: set GOOGLE_CSE_API_KEY and GOOGLE_CSE_CX.");
  console.log("  For local UI without keys: ensure FREE_SCAN_RELAXED_CONFIG=1 (see .env.example).");
  console.log("  Create keys: https://programmablesearchengine.google.com/ and enable Custom Search JSON API.\n");
  process.exit(0);
}

copyFileSync(example, local);
console.log("\n  Created .env.local from .env.example (gitignored).");
console.log("  Next: open .env.local in the editor and paste:");
console.log("    GOOGLE_CSE_API_KEY=your_key");
console.log("    GOOGLE_CSE_CX=your_search_engine_id");
console.log("  Create keys: https://programmablesearchengine.google.com/ and enable the Custom Search JSON API.");
console.log("  Then run: npm run dev\n");

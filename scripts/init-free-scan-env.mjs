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
  console.log("  Edit it and set GOOGLE_CSE_API_KEY and GOOGLE_CSE_CX (Programmable Search).\n");
  process.exit(0);
}

copyFileSync(example, local);
console.log("\n  Created .env.local from .env.example (gitignored).");
console.log("  Next: open .env.local in the editor and paste:");
console.log("    GOOGLE_CSE_API_KEY=your_key");
console.log("    GOOGLE_CSE_CX=your_search_engine_id");
console.log("  Create keys: https://programmablesearchengine.google.com/ and enable the Custom Search JSON API.");
console.log("  Then run: npm run dev\n");

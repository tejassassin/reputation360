/**
 * Marks `.next` as produced by `next build` so the next `next dev` clears it.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const marker = join(".next", ".r360-production-build");
mkdirSync(".next", { recursive: true });
writeFileSync(marker, `${new Date().toISOString()}\n`, "utf8");
console.warn(
  "\n[reputation360] Production build updated .next. Restart local dev: stop npm run dev:next, then start it again.\n",
);

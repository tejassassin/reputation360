/**
 * Removes Vite's persistent cache under node_modules/.vite (and .cache if present).
 * Stale cache is a common reason localhost shows an old UI while production is correct.
 */
import { existsSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

for (const name of [".vite", ".cache"]) {
  const dir = join(root, "node_modules", name);
  if (existsSync(dir)) {
    rmSync(dir, { recursive: true, force: true });
  }
}

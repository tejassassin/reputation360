#!/usr/bin/env node
/**
 * Run after `next build` on Vercel production deploys to purge stale CDN cache.
 * Skips locally and on preview builds. Requires VERCEL_TOKEN in project env vars.
 */
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

if (!process.env.VERCEL) {
  console.log("purge-after-build: skipped (not a Vercel build).");
  process.exit(0);
}

if (process.env.VERCEL_ENV !== "production") {
  console.log(`purge-after-build: skipped (VERCEL_ENV=${process.env.VERCEL_ENV ?? "unknown"}).`);
  process.exit(0);
}

if (!process.env.VERCEL_TOKEN) {
  console.warn(
    "purge-after-build: skipped — add VERCEL_TOKEN to Vercel project env vars to auto-purge CDN cache after deploy.",
  );
  process.exit(0);
}

const result = spawnSync(
  process.execPath,
  [path.join(__dirname, "purge-vercel-cache.mjs"), "--yes"],
  {
    stdio: "inherit",
    env: {
      ...process.env,
      VERCEL_TEAM_ID:
        process.env.VERCEL_TEAM_ID || process.env.VERCEL_ORG_ID || "",
    },
  },
);

process.exit(result.status ?? 1);

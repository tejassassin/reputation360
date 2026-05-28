#!/usr/bin/env node
/**
 * Ensures Puppeteer's Chrome build is available for post-build smoke tests (Vercel CI).
 */
import { spawnSync } from "node:child_process";

if (
  process.env.SKIP_PUPPETEER_INSTALL === "1" ||
  process.env.VERCEL === "1" ||
  process.env.VERCEL === "true" ||
  process.env.CI === "true" ||
  process.env.CI === "1"
) {
  console.log("ensure-puppeteer-chrome: skipped (CI/Vercel or SKIP_PUPPETEER_INSTALL=1)");
  process.exit(0);
}

const result = spawnSync("npx", ["puppeteer", "browsers", "install", "chrome"], {
  stdio: "inherit",
  shell: true,
});

if (result.status !== 0) {
  console.warn(
    "ensure-puppeteer-chrome: browser install failed; build will skip Puppeteer smoke tests.",
  );
  process.exit(0);
}

console.log("ensure-puppeteer-chrome: OK");

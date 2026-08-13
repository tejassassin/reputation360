#!/usr/bin/env node
/**
 * Confirm production HTML references the current git commit (deploy-sha meta).
 * Usage:
 *   node scripts/verify-live-deploy.mjs
 *   node scripts/verify-live-deploy.mjs /about /blog
 *   R360_EXPECT="We're selective" node scripts/verify-live-deploy.mjs /about
 */
import { execSync } from "node:child_process";

const BASE = (process.env.R360_LIVE_URL || "https://www.thereputation360.com").replace(/\/$/, "");
const paths = process.argv.slice(2).length > 0 ? process.argv.slice(2) : ["/"];
const expectSubstring = process.env.R360_EXPECT;

let localSha;
try {
  localSha = execSync("git rev-parse --short HEAD", { encoding: "utf8" }).trim();
} catch {
  console.error("verify-live-deploy: run from a git repository.");
  process.exit(1);
}

let failed = false;

for (const path of paths) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const url = `${BASE}${normalized}`;

  let html;
  try {
    const res = await fetch(url, {
      headers: { "cache-control": "no-cache", pragma: "no-cache" },
    });
    if (!res.ok) {
      console.error(`${normalized}: HTTP ${res.status}`);
      failed = true;
      continue;
    }
    html = await res.text();
  } catch (err) {
    console.error(`${normalized}: fetch failed (${err.message})`);
    failed = true;
    continue;
  }

  const shaMatch = html.match(/<meta name="deploy-sha" content="([^"]+)"/i);
  const liveSha = shaMatch?.[1]?.slice(0, 7) ?? "missing";
  const shaOk = liveSha === localSha;
  console.log(`${normalized}: deploy-sha=${liveSha} local=${localSha} ${shaOk ? "OK" : "MISMATCH"}`);
  if (!shaOk) failed = true;

  const isNext = html.includes("__NEXT_DATA__") || html.includes("/_next/static/");
  const isLegacySpa =
    html.includes('id="r360-crawl-nav"') ||
    html.includes('id="r360-prerender"') ||
    html.includes('id="r360-static-footer"');
  if (isNext) {
    console.log(`${normalized}: runtime=next OK`);
  } else if (isLegacySpa) {
    console.log(`${normalized}: runtime=legacy-spa (expected next after cutover)`);
    failed = true;
  }

  if (expectSubstring && normalized === paths[0]) {
    const hasExpected = html.includes(expectSubstring);
    console.log(
      `${normalized}: content check "${expectSubstring}" ${hasExpected ? "OK" : "MISSING"}`,
    );
    if (!hasExpected) failed = true;
  }
}

if (failed) {
  console.error(
    "\nLive verification failed. Wait 1-2 min for Vercel, then hard-refresh (Cmd+Shift+R) or check deploy-sha in View Source.",
  );
  process.exit(1);
}

console.log("\nLive verification passed.");

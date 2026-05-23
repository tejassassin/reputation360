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

  if (expectSubstring && normalized === paths[0]) {
    const indexJs = html.match(/src="(\/assets\/index-[^"]+\.js)"/)?.[1];
    if (!indexJs) {
      console.error(`${normalized}: could not find index bundle in HTML`);
      failed = true;
    } else {
      const bundleRes = await fetch(`${BASE}${indexJs}`, {
        headers: { "cache-control": "no-cache", pragma: "no-cache" },
      });
      const bundle = await bundleRes.text();
      const aboutChunk = bundle.match(/page-aboutpage-[^"]+\.js/)?.[0];
      if (!aboutChunk) {
        console.error(`${normalized}: could not find About page chunk in index bundle`);
        failed = true;
      } else {
        const chunkRes = await fetch(`${BASE}/assets/${aboutChunk}`, {
          headers: { "cache-control": "no-cache", pragma: "no-cache" },
        });
        const chunk = await chunkRes.text();
        const hasExpected = chunk.includes(expectSubstring);
        console.log(
          `${normalized}: content check "${expectSubstring}" ${hasExpected ? "OK" : "MISSING"}`,
        );
        if (!hasExpected) failed = true;
      }
    }
  }
}

if (failed) {
  console.error(
    "\nLive verification failed. Wait 1-2 min for Vercel, then hard-refresh (Cmd+Shift+R) or check deploy-sha in View Source.",
  );
  process.exit(1);
}

console.log("\nLive site matches local HEAD.");

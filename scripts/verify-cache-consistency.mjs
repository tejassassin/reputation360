#!/usr/bin/env node
/**
 * Repeatedly fetch a URL and confirm HTML is consistently good (no JS fallback).
 *
 * Usage:
 *   node scripts/verify-cache-consistency.mjs /resources/guide
 *   R360_LIVE_URL=https://www.thereputation360.com node scripts/verify-cache-consistency.mjs /resources/guide
 *   R360_FETCHES=20 node scripts/verify-cache-consistency.mjs /resources/guide
 */
const BASE = (process.env.R360_LIVE_URL || "https://www.thereputation360.com").replace(/\/$/, "");
const fetchCount = Number(process.env.R360_FETCHES || "12");
const pathArg = process.argv[2] || "/resources/guide";
const path = pathArg.startsWith("/") ? pathArg : `/${pathArg}`;
const url = `${BASE}${path}`;

const JS_REQUIRED = /JavaScript is required to view this site/i;
const EXPECTED_H1 =
  process.env.R360_EXPECT_H1 ||
  "The Complete Guide to Online Reputation Management in 2026";

/** @type {Array<{ index: number; status: number; h1: string; jsRequired: boolean; sha: string; xVercelCache: string }>} */
const results = [];

for (let i = 0; i < fetchCount; i += 1) {
  const res = await fetch(url, {
    headers: {
      "cache-control": "no-cache",
      pragma: "no-cache",
    },
  });
  const html = await res.text();
  const h1 =
    html
      .match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]
      ?.replace(/<[^>]+>/g, "")
      .replace(/\s+/g, " ")
      .trim() ?? "";
  const jsRequired = JS_REQUIRED.test(html);
  const sha = html.match(/<meta name="deploy-sha" content="([^"]+)"/i)?.[1]?.slice(0, 7) ?? "missing";
  results.push({
    index: i,
    status: res.status,
    h1,
    jsRequired,
    sha,
    xVercelCache: res.headers.get("x-vercel-cache") ?? "",
  });
}

const fingerprints = new Set(
  results.map((row) => `${row.status}|${row.jsRequired}|${row.h1}|${row.sha}`),
);
const bad = results.filter(
  (row) =>
    row.status !== 200 ||
    row.jsRequired ||
    !row.h1 ||
    !row.h1.includes(EXPECTED_H1.slice(0, 40)),
);

console.log(`Cache consistency check: ${url}`);
console.log(`Fetches: ${fetchCount}, unique fingerprints: ${fingerprints.size}`);

for (const row of results) {
  const ok =
    row.status === 200 &&
    !row.jsRequired &&
    row.h1.includes(EXPECTED_H1.slice(0, 40));
  console.log(
    `#${row.index + 1} ${ok ? "OK" : "BAD"} status=${row.status} sha=${row.sha} cache=${row.xVercelCache} h1=${row.h1.slice(0, 72)}`,
  );
}

if (bad.length > 0 || fingerprints.size > 1) {
  console.error(
    `\nFAILED: ${bad.length} bad response(s), ${fingerprints.size} unique fingerprint(s).`,
  );
  process.exit(1);
}

console.log("\nPASSED: all fetches returned consistent real content.");

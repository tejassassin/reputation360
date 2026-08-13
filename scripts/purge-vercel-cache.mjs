#!/usr/bin/env node
/**
 * Purge Vercel CDN + data cache for production after a deploy.
 *
 * Requires:
 *   VERCEL_TOKEN          - https://vercel.com/account/tokens
 *   VERCEL_PROJECT_ID     - project id or name (default: reputation360)
 * Optional:
 *   VERCEL_TEAM_ID        - team id when the project is under a team
 *   VERCEL_CACHE_TAG      - tag to purge (default: * = entire project)
 *   VERCEL_CACHE_TARGET   - production | preview (default: production)
 *
 * Usage:
 *   node scripts/purge-vercel-cache.mjs
 *   node scripts/purge-vercel-cache.mjs --yes
 */
const args = new Set(process.argv.slice(2));
const autoYes = args.has("--yes");

const token = process.env.VERCEL_TOKEN;
const project = process.env.VERCEL_PROJECT_ID || process.env.VERCEL_PROJECT_NAME || "reputation360";
const teamId = process.env.VERCEL_TEAM_ID;
const tag = process.env.VERCEL_CACHE_TAG || "*";
const target = process.env.VERCEL_CACHE_TARGET || "production";

if (!token) {
  console.error(
    "purge-vercel-cache: set VERCEL_TOKEN (and VERCEL_PROJECT_ID if not reputation360).",
  );
  console.error("Create a token at https://vercel.com/account/tokens");
  process.exit(1);
}

/**
 * @param {"invalidate" | "delete"} mode
 */
async function purgeByTag(mode) {
  const endpoint =
    mode === "delete"
      ? "https://api.vercel.com/v1/edge-cache/dangerously-delete-by-tags"
      : "https://api.vercel.com/v1/edge-cache/invalidate-by-tags";

  const url = new URL(endpoint);
  url.searchParams.set("projectIdOrName", project);
  if (teamId) url.searchParams.set("teamId", teamId);

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tags: [tag],
      target,
    }),
  });

  const body = await res.text();
  if (!res.ok) {
    throw new Error(`${mode} failed (${res.status}): ${body}`);
  }

  return body || "{}";
}

if (!autoYes && process.stdin.isTTY) {
  console.log(
    `About to purge Vercel cache for project=${project} tag=${tag} target=${target}`,
  );
  console.log("Re-run with --yes to skip this prompt.");
  process.exit(0);
}

try {
  const invalidated = await purgeByTag("invalidate");
  console.log(`Invalidated tag "${tag}" (${target}): ${invalidated}`);

  const deleted = await purgeByTag("delete");
  console.log(`Deleted tag "${tag}" (${target}): ${deleted}`);
} catch (err) {
  console.error(`purge-vercel-cache: ${err.message}`);
  process.exit(1);
}

console.log("Vercel cache purge complete.");

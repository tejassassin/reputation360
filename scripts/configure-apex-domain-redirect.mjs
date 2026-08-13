#!/usr/bin/env node
/**
 * Configure apex domain to redirect to www in one Vercel edge hop.
 *
 * Usage:
 *   VERCEL_TOKEN=... VERCEL_TEAM_ID=team_... node scripts/configure-apex-domain-redirect.mjs
 *
 * Requires the apex domain to already be attached to the Vercel project.
 */
const token = process.env.VERCEL_TOKEN;
const teamId = process.env.VERCEL_TEAM_ID || process.env.VERCEL_ORG_ID;
const projectId =
  process.env.VERCEL_PROJECT_ID || process.env.VERCEL_PROJECT_NAME || "reputation360";
const apexDomain = process.env.R360_APEX_DOMAIN || "thereputation360.com";
const wwwDomain = process.env.R360_WWW_DOMAIN || "www.thereputation360.com";

if (!token) {
  console.error("configure-apex-domain-redirect: set VERCEL_TOKEN.");
  process.exit(1);
}

const teamQuery = teamId ? `?teamId=${encodeURIComponent(teamId)}` : "";

const response = await fetch(
  `https://api.vercel.com/v9/projects/${encodeURIComponent(projectId)}/domains/${encodeURIComponent(apexDomain)}${teamQuery}`,
  {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      redirect: wwwDomain,
      redirectStatusCode: 301,
    }),
  },
);

const body = await response.json().catch(() => ({}));
if (!response.ok) {
  console.error(
    `configure-apex-domain-redirect: failed (${response.status})`,
    body.error?.message || body,
  );
  process.exit(1);
}

console.log(
  `configure-apex-domain-redirect: ${apexDomain} now redirects to ${body.redirect} (${body.redirectStatusCode}).`,
);

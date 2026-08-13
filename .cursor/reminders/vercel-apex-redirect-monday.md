# Reminder: Monday — Vercel apex redirect (single hop)

**Due:** Monday, 16 Aug 2026

## Task

Collapse the HTTP apex redirect from two hops to one:

- **Current:** `http://thereputation360.com` → `https://thereputation360.com` → `https://www.thereputation360.com`
- **Goal:** `http://thereputation360.com` → `https://www.thereputation360.com` (single redirect)

## How

1. Open **Vercel** → project that serves `www.thereputation360.com` → **Settings** → **Domains**
2. Edit **`thereputation360.com`** (apex)
3. Set **Redirect to** → `www.thereputation360.com` (301)

Or, if you have a token with domain access on that project:

```bash
VERCEL_TOKEN=... VERCEL_TEAM_ID=... node scripts/configure-apex-domain-redirect.mjs
```

## Verify

```bash
curl -sI --max-redirs 0 http://thereputation360.com/ | grep -iE '^HTTP|^location:'
```

Expect one `Location: https://www.thereputation360.com/` (not `https://thereputation360.com` first).

## Context

Code-side redirects in `vercel.json` and `middleware.js` cannot skip Vercel’s platform HTTP→HTTPS upgrade. Domain-level redirect in the Vercel dashboard is required.

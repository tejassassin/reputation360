/**
 * Google Programmable Search Engine (JSON API) - server-side only.
 * Env: GOOGLE_CSE_API_KEY, GOOGLE_CSE_CX
 */

const GOOGLE_GL_BY_COUNTRY = {
  US: "us",
  UK: "uk",
  Canada: "ca",
  Australia: "au",
};

const GOOGLE_CR_BY_COUNTRY = {
  US: "countryUS",
  UK: "countryUK",
  Canada: "countryCA",
  Australia: "countryAU",
};

/**
 * @typedef {{ title: string; link: string; displayLink: string; snippet: string }} CseItem
 */

/**
 * @param {string} query
 * @param {string} apiKey
 * @param {string} cx
 * @param {number} [num]
 * @param {number} [start] Google `start` index (1-based). Page 2 = 11, page 3 = 21.
 * @param {"US"|"UK"|"Canada"|"Australia"|"Others"} [country]
 * @returns {Promise<CseItem[]>}
 */
export async function fetchGoogleCse(query, apiKey, cx, num = 10, start = 1, country = "Others") {
  const q = query.trim();
  if (!q) return [];

  const url = new URL("https://www.googleapis.com/customsearch/v1");
  url.searchParams.set("key", apiKey);
  url.searchParams.set("cx", cx);
  url.searchParams.set("q", q);
  url.searchParams.set("num", String(Math.min(10, Math.max(1, num))));
  url.searchParams.set("start", String(Math.max(1, Math.min(91, start))));
  if (GOOGLE_GL_BY_COUNTRY[country]) {
    url.searchParams.set("gl", GOOGLE_GL_BY_COUNTRY[country]);
  }
  if (GOOGLE_CR_BY_COUNTRY[country]) {
    url.searchParams.set("cr", GOOGLE_CR_BY_COUNTRY[country]);
  }

  const res = await fetch(url.toString());
  const data = await res.json();

  if (!res.ok) {
    const msg =
      typeof data?.error?.message === "string" ? data.error.message : `HTTP ${res.status}`;
    throw new Error(`Google CSE error: ${msg}`);
  }

  const items = Array.isArray(data.items) ? data.items : [];

  return items.map((it) => ({
    title: typeof it.title === "string" ? it.title : "",
    link: typeof it.link === "string" ? it.link : "",
    displayLink: typeof it.displayLink === "string" ? it.displayLink : "",
    snippet: typeof it.snippet === "string" ? it.snippet : "",
  }));
}

/**
 * @param {CseItem[]} a
 * @param {CseItem[]} b
 * @returns {CseItem[]}
 */
export function mergeCseDedupe(a, b) {
  const seen = new Set();
  const out = [];
  for (const arr of [a, b]) {
    for (const it of arr) {
      const key = it.link?.trim();
      if (!key || seen.has(key)) continue;
      seen.add(key);
      out.push(it);
    }
  }
  return out;
}

/**
 * Fetches up to `maxResults` items for one query (10 per request, Google CSE paging).
 * @param {string} query
 * @param {string} apiKey
 * @param {string} cx
 * @param {number} [maxResults]
 * @param {"US"|"UK"|"Canada"|"Australia"|"Others"} [country]
 * @returns {Promise<CseItem[]>}
 */
export async function fetchGoogleCseUpToN(query, apiKey, cx, maxResults = 30, country = "Others") {
  const q = query.trim();
  if (!q || maxResults <= 0) return [];

  const cap = Math.min(100, Math.max(1, maxResults));
  const merged = [];
  let start = 1;
  while (merged.length < cap) {
    const remaining = cap - merged.length;
    const num = Math.min(10, remaining);
    const batch = await fetchGoogleCse(q, apiKey, cx, num, start, country);
    if (batch.length === 0) break;
    merged.push(...batch);
    start += batch.length;
    if (batch.length < num) break;
  }
  const seen = new Set();
  const deduped = [];
  for (const it of merged) {
    const key = it.link?.trim();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    deduped.push(it);
  }
  return deduped;
}

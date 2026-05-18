/**
 * Google Programmable Search Engine (JSON API) - server-side only.
 * Env: GOOGLE_CSE_API_KEY, GOOGLE_CSE_CX
 */

/**
 * @typedef {{ title: string; link: string; displayLink: string; snippet: string }} CseItem
 */

/**
 * @param {string} query
 * @param {string} apiKey
 * @param {string} cx
 * @param {number} [num]
 * @param {number} [start] Google `start` index (1-based). Page 2 = 11, page 3 = 21.
 * @returns {Promise<CseItem[]>}
 */
export async function fetchGoogleCse(query, apiKey, cx, num = 10, start = 1) {
  const q = query.trim();
  if (!q) return [];

  const url = new URL("https://www.googleapis.com/customsearch/v1");
  url.searchParams.set("key", apiKey);
  url.searchParams.set("cx", cx);
  url.searchParams.set("q", q);
  url.searchParams.set("num", String(Math.min(10, Math.max(1, num))));
  url.searchParams.set("start", String(Math.max(1, Math.min(91, start))));

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

const MAX_CSE_PAGES = 3;

/**
 * Fetches up to the first {@link MAX_CSE_PAGES} pages (10 results each) for one query.
 * @param {string} query
 * @param {string} apiKey
 * @param {string} cx
 * @returns {Promise<CseItem[]>}
 */
export async function fetchGoogleCseFirstThreePages(query, apiKey, cx) {
  const q = query.trim();
  if (!q) return [];

  const merged = [];
  for (let page = 0; page < MAX_CSE_PAGES; page++) {
    const start = 1 + page * 10;
    const batch = await fetchGoogleCse(q, apiKey, cx, 10, start);
    if (batch.length === 0) break;
    merged.push(...batch);
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

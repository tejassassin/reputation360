import { webSearch } from "../tavily/webSearch.js";
import { webFetch } from "../tavily/webFetch.js";

/**
 * @param {string} fullName
 * @param {string} firstName
 * @param {string} lastName
 * @returns {string[]}
 */
export function buildSearchQueries(fullName, firstName, lastName) {
  const q = fullName.trim();
  const first = firstName.trim();
  const last = lastName.trim();
  return [
    `"${q}"`,
    `who is ${q}`,
    `"${first} ${last}" reputation OR news`,
    `"${q}" linkedin OR interview OR review`,
    `${first} ${last} news`,
    `"${q}" site:wikipedia.org OR site:linkedin.com`,
  ];
}

/**
 * Keep results that likely refer to this person (last name required; first or full name in text).
 *
 * @param {{ title: string; url: string; snippet: string }[]} results
 * @param {string} fullName
 * @param {string} firstName
 * @param {string} lastName
 */
export function filterResultsByName(results, fullName, firstName, lastName) {
  const last = lastName.toLowerCase();
  const first = firstName.toLowerCase();
  const full = fullName.toLowerCase();

  const matched = results.filter((r) => {
    const blob = `${r.title} ${r.snippet} ${r.url}`.toLowerCase();
    if (!blob.includes(last)) return false;
    return blob.includes(first) || blob.includes(full);
  });

  return matched;
}

/**
 * @param {string} text
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} fullName
 */
export function textLikelyAboutSubject(text, firstName, lastName, fullName) {
  const blob = String(text ?? "").toLowerCase();
  const last = lastName.toLowerCase();
  const first = firstName.toLowerCase();
  const full = fullName.toLowerCase();
  if (!blob.includes(last)) return false;
  return blob.includes(first) || blob.includes(full);
}

/**
 * @param {{ url: string; content: string }[]} pages
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} fullName
 * @returns {{ url: string; content: string }[]}
 */
export function filterFetchedPagesBySubject(pages, firstName, lastName, fullName) {
  const kept = pages.filter((p) => textLikelyAboutSubject(p.content, firstName, lastName, fullName));
  return kept.length > 0 ? kept : pages;
}

/**
 * Always search and fetch using the submitted name (never rely on the LLM to pick the query).
 *
 * @param {{ fullName: string; firstName: string; lastName: string }} subject
 */
export async function gatherEvidenceForPerson({ fullName, firstName, lastName }) {
  const queries = buildSearchQueries(fullName, firstName, lastName);
  const seen = new Set();
  /** @type {({ title: string; url: string; snippet: string; searchQuery?: string; score?: number })[]} */
  const merged = [];

  for (const query of queries) {
    const { results } = await webSearch(query, { maxResults: 6, searchDepth: "advanced" });
    for (const row of results) {
      if (!row.url || seen.has(row.url)) continue;
      seen.add(row.url);
      merged.push({ ...row, searchQuery: query });
      if (merged.length >= 16) break;
    }
    if (merged.length >= 16) break;
  }

  const nameFiltered = filterResultsByName(merged, fullName, firstName, lastName);
  const searchResults = nameFiltered.slice(0, 10);
  const urls = searchResults.map((r) => r.url).filter(Boolean);

  const fetchedRaw = urls.length
    ? await webFetch(urls, { query: fullName })
    : { results: [], failed: [] };

  const fetchedResults = filterFetchedPagesBySubject(
    fetchedRaw.results,
    firstName,
    lastName,
    fullName,
  );

  const fetched = {
    ...fetchedRaw,
    results: fetchedResults,
  };

  return {
    searchQueries: queries,
    primarySearchQuery: queries[0],
    searchResults,
    fetched,
  };
}

import { tavilyPost } from "./client.js";

/**
 * Search the web via Tavily (agent tool: web_search).
 *
 * @param {string} query
 * @param {{ maxResults?: number; searchDepth?: "basic" | "advanced"; country?: string }} [opts]
 * @returns {Promise<{ query: string; results: { title: string; url: string; snippet: string; score?: number }[] }>}
 */
export async function webSearch(query, opts = {}) {
  const q = String(query ?? "").trim();
  if (!q) {
    return { query: "", results: [] };
  }

  const maxResults = Math.min(20, Math.max(1, opts.maxResults ?? 10));
  const searchDepth = opts.searchDepth === "basic" ? "basic" : "advanced";

  const data = await tavilyPost("/search", {
    query: q,
    max_results: maxResults,
    search_depth: searchDepth,
    include_answer: false,
    ...(opts.country?.trim() ? { country: opts.country.trim().toLowerCase() } : {}),
  });

  const rows = Array.isArray(data.results) ? data.results : [];

  return {
    query: q,
    results: rows.map((r) => {
      const row = /** @type {Record<string, unknown>} */ (r);
      return {
        title: String(row.title ?? ""),
        url: String(row.url ?? ""),
        snippet: String(row.content ?? row.snippet ?? "").slice(0, 2000),
        score: typeof row.score === "number" ? row.score : undefined,
      };
    }),
  };
}

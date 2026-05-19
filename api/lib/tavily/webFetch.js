import { tavilyPost } from "./client.js";

/**
 * Fetch page content via Tavily Extract (agent tool: web_fetch).
 *
 * @param {string | string[]} urlOrUrls
 * @param {{ query?: string }} [opts] Optional query to rerank extracted chunks.
 * @returns {Promise<{ results: { url: string; content: string }[]; failed: { url: string; error: string }[] }>}
 */
export async function webFetch(urlOrUrls, opts = {}) {
  const urls = (Array.isArray(urlOrUrls) ? urlOrUrls : [urlOrUrls])
    .map((u) => String(u ?? "").trim())
    .filter(Boolean)
    .slice(0, 10);

  if (urls.length === 0) {
    return { results: [], failed: [] };
  }

  /** @type {Record<string, unknown>} */
  const body = {
    urls,
    extract_depth: "basic",
    format: "text",
  };
  if (opts.query?.trim()) {
    body.query = opts.query.trim();
    body.chunks_per_source = 3;
  }

  const data = await tavilyPost("/extract", body);

  const okRows = Array.isArray(data.results) ? data.results : [];
  const failRows = Array.isArray(data.failed_results) ? data.failed_results : [];

  return {
    results: okRows.map((r) => {
      const row = /** @type {Record<string, unknown>} */ (r);
      return {
        url: String(row.url ?? ""),
        content: String(row.raw_content ?? "").slice(0, 12_000),
      };
    }),
    failed: failRows.map((r) => {
      const row = /** @type {Record<string, unknown>} */ (r);
      return {
        url: String(row.url ?? ""),
        error: String(row.error ?? "Extraction failed"),
      };
    }),
  };
}

/**
 * @param {string} path e.g. "/search"
 * @param {Record<string, unknown>} body
 * @returns {Promise<Record<string, unknown>>}
 */
export async function tavilyPost(path, body) {
  const apiKey = process.env.TAVILY_API_KEY?.trim();
  if (!apiKey) {
    const err = new Error("Tavily API key is not configured (TAVILY_API_KEY).");
    err.code = "TAVILY_NOT_CONFIGURED";
    throw err;
  }

  const res = await fetch(`https://api.tavily.com${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...body, api_key: apiKey }),
  });

  const text = await res.text();
  let data;
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { raw: text };
  }

  if (!res.ok) {
    const detail =
      data?.detail?.error ||
      data?.error ||
      (typeof data?.detail === "string" ? data.detail : null) ||
      res.statusText;
    const err = new Error(`Tavily ${path} failed (${res.status}): ${detail}`);
    err.code = "TAVILY_REQUEST_FAILED";
    err.status = res.status;
    throw err;
  }

  return /** @type {Record<string, unknown>} */ (data);
}

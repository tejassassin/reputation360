/**
 * @param {object[]} messages
 * @param {object[]} [tools]
 * @returns {Promise<Record<string, unknown>>}
 */
export async function openRouterChatCompletion(messages, tools) {
  const apiKey = process.env.OPENROUTER_API_KEY?.trim();
  if (!apiKey) {
    const err = new Error("OpenRouter API key is not configured (OPENROUTER_API_KEY).");
    err.code = "OPENROUTER_NOT_CONFIGURED";
    throw err;
  }

  const model =
    process.env.OPENROUTER_MODEL?.trim() || "google/gemini-2.0-flash-001";

  /** @type {Record<string, unknown>} */
  const body = {
    model,
    messages,
    temperature: 0.1,
  };
  if (tools?.length) {
    body.tools = tools;
    body.tool_choice = "auto";
  }

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer":
        process.env.OPENROUTER_HTTP_REFERER?.trim() ||
        "https://www.thereputation360.com",
      "X-Title": "Reputation360 Reputation Agent",
    },
    body: JSON.stringify(body),
  });

  const text = await res.text();
  let data;
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { raw: text };
  }

  if (!res.ok) {
    const msg =
      data?.error?.message ||
      data?.error ||
      (typeof data === "string" ? data : res.statusText);
    const err = new Error(`OpenRouter request failed (${res.status}): ${msg}`);
    err.code = "OPENROUTER_REQUEST_FAILED";
    err.status = res.status;
    throw err;
  }

  return /** @type {Record<string, unknown>} */ (data);
}

/**
 * @param {Record<string, unknown>} completion
 * @returns {Record<string, unknown> | null}
 */
export function getAssistantMessage(completion) {
  const choices = completion.choices;
  if (!Array.isArray(choices) || !choices[0]) return null;
  const msg = /** @type {Record<string, unknown>} */ (choices[0]).message;
  return msg && typeof msg === "object" ? msg : null;
}

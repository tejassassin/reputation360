import { webSearch } from "../tavily/webSearch.js";
import { webFetch } from "../tavily/webFetch.js";

/** OpenAI-compatible tool definitions for OpenRouter. */
export const AGENT_TOOL_DEFINITIONS = [
  {
    type: "function",
    function: {
      name: "web_search",
      description:
        "Search the public internet. Use to find news, profiles, reviews, and other pages about a person. Returns up to 10 results with title, URL, and snippet.",
      parameters: {
        type: "object",
        properties: {
          query: {
            type: "string",
            description: "Search query, e.g. full name plus role or location if known.",
          },
        },
        required: ["query"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "web_fetch",
      description:
        "Fetch and extract readable text from one or more URLs (max 10 per call). Use after web_search to read pages about the person.",
      parameters: {
        type: "object",
        properties: {
          urls: {
            type: "array",
            items: { type: "string" },
            description: "List of http(s) URLs to fetch.",
          },
          query: {
            type: "string",
            description:
              "Optional: person name or topic to focus extracted chunks (improves relevance).",
          },
        },
        required: ["urls"],
      },
    },
  },
];

/**
 * @param {string} name
 * @param {string} argsJson
 * @returns {Promise<string>}
 */
export async function executeAgentTool(name, argsJson) {
  let args = {};
  try {
    args = argsJson ? JSON.parse(argsJson) : {};
  } catch {
    return JSON.stringify({ error: "Invalid tool arguments JSON" });
  }

  try {
    if (name === "web_search") {
      const out = await webSearch(String(args.query ?? ""), { maxResults: 10 });
      return JSON.stringify(out);
    }
    if (name === "web_fetch") {
      const urls = Array.isArray(args.urls) ? args.urls : [args.url].filter(Boolean);
      const out = await webFetch(urls, {
        query: args.query ? String(args.query) : undefined,
      });
      return JSON.stringify(out);
    }
    return JSON.stringify({ error: `Unknown tool: ${name}` });
  } catch (e) {
    return JSON.stringify({
      error: e instanceof Error ? e.message : "Tool execution failed",
    });
  }
}

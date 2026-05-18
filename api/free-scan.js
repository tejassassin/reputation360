import { runFreeScanPipeline } from "./lib/runFreeScanPipeline.js";

/**
 * @param {import('http').IncomingMessage} req
 * @param {import('http').ServerResponse} res
 */
function applyCors(req, res) {
  const origin = req.headers?.origin;
  const env = process.env.FREE_SCAN_ALLOWED_ORIGINS;
  const list = env
    ? env.split(",").map((s) => s.trim()).filter(Boolean)
    : [
        "https://www.thereputation360.com",
        "https://thereputation360.com",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:4173",
        "http://127.0.0.1:4173",
      ];
  if (origin && list.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
  } else {
    res.setHeader("Access-Control-Allow-Origin", "*");
  }
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Max-Age", "86400");
}

/**
 * @param {import('http').IncomingMessage} req
 * @param {import('http').ServerResponse} res
 */
export default async function handler(req, res) {
  applyCors(req, res);

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ ok: false, error: "Method not allowed" }));
    return;
  }

  const rawBody = req.body;
  const body =
    typeof rawBody === "string"
      ? (() => {
          try {
            return JSON.parse(rawBody || "{}");
          } catch {
            return {};
          }
        })()
      : rawBody && typeof rawBody === "object"
        ? rawBody
        : {};

  try {
    const { status, json } = await runFreeScanPipeline(body);
    res.statusCode = status;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(json));
  } catch (e) {
    console.error("[free-scan] handler", e);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        ok: false,
        error: e instanceof Error ? e.message : "Unexpected error",
      }),
    );
  }
}

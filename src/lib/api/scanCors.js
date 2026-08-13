const DEFAULT_ORIGINS = [
  "https://www.thereputation360.com",
  "https://thereputation360.com",
  "http://localhost:5173",
  "http://localhost:5174",
  "http://127.0.0.1:5173",
  "http://localhost:4173",
  "http://127.0.0.1:4173",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
];

/**
 * @param {Request} request
 * @param {string} [envVar] Comma-separated allowed origins override.
 */
export function scanCorsHeaders(request, envVar) {
  const origin = request.headers.get("origin");
  const env = envVar ? process.env[envVar] : process.env.FREE_SCAN_ALLOWED_ORIGINS;
  const list = env
    ? env.split(",").map((s) => s.trim()).filter(Boolean)
    : DEFAULT_ORIGINS;

  const headers = new Headers();
  if (origin && list.includes(origin)) {
    headers.set("Access-Control-Allow-Origin", origin);
    headers.set("Vary", "Origin");
  } else {
    headers.set("Access-Control-Allow-Origin", "*");
  }
  headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type");
  headers.set("Access-Control-Max-Age", "86400");
  return headers;
}

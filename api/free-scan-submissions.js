import { ensureFreeScanSchema, listFreeScanSubmissions } from "./lib/db.js";

function unauthorized(res) {
  res.statusCode = 401;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ ok: false, error: "Unauthorized" }));
}

/**
 * @param {string} value
 */
function csvEscape(value) {
  const s = String(value ?? "");
  if (!/[",\n]/.test(s)) return s;
  return `"${s.replace(/"/g, '""')}"`;
}

/**
 * @param {ReturnType<typeof listFreeScanSubmissions> extends Promise<infer T> ? T : never} rows
 */
function toCsv(rows) {
  const header = [
    "scan_id",
    "user_id",
    "full_name",
    "first_name",
    "last_name",
    "email",
    "country",
    "consent_given",
    "search_query_used",
    "final_score",
    "presence_label",
    "scan_created_at",
    "user_created_at",
  ];
  const lines = [header.join(",")];
  for (const row of rows) {
    lines.push(
      [
        row.scanId,
        row.userId,
        row.fullName,
        row.firstName,
        row.lastName,
        row.email,
        row.country,
        row.consentGiven,
        row.searchQueryUsed,
        row.finalScore,
        row.presenceLabel,
        row.scanCreatedAt,
        row.userCreatedAt,
      ]
        .map(csvEscape)
        .join(","),
    );
  }
  return lines.join("\n");
}

/**
 * @param {import('http').IncomingMessage} req
 * @param {import('http').ServerResponse} res
 */
export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.statusCode = 405;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ ok: false, error: "Method not allowed" }));
    return;
  }

  const token = process.env.FREE_SCAN_ADMIN_TOKEN?.trim();
  const url = new URL(req.url || "/", "http://localhost");
  const headerToken = Array.isArray(req.headers["x-admin-token"])
    ? req.headers["x-admin-token"][0]
    : req.headers["x-admin-token"];
  const authHeader = Array.isArray(req.headers.authorization)
    ? req.headers.authorization[0]
    : req.headers.authorization;
  const provided = String(
    headerToken ||
      authHeader?.replace(/^Bearer\s+/i, "") ||
      url.searchParams.get("token") ||
      "",
  ).trim();

  if (!token || provided !== token) {
    unauthorized(res);
    return;
  }

  if (!process.env.DATABASE_URL) {
    res.statusCode = 503;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ ok: false, error: "DATABASE_URL is not configured" }));
    return;
  }

  try {
    await ensureFreeScanSchema();
    const limit = Number(url.searchParams.get("limit") || "500");
    const rows = await listFreeScanSubmissions({ limit });
    const format = (url.searchParams.get("format") || "json").toLowerCase();

    if (format === "csv") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/csv; charset=utf-8");
      res.setHeader(
        "Content-Disposition",
        `attachment; filename="free-scan-submissions.csv"`,
      );
      res.end(toCsv(rows));
      return;
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ ok: true, count: rows.length, rows }));
  } catch (e) {
    console.error("[free-scan-submissions]", e);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ ok: false, error: e instanceof Error ? e.message : "Unexpected error" }));
  }
}

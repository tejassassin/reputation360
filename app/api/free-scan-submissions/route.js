import { ensureFreeScanSchema, listFreeScanSubmissions } from "../../../api/_lib/db.js";

/**
 * @param {string} value
 */
function csvEscape(value) {
  const s = String(value ?? "");
  if (!/[",\n]/.test(s)) return s;
  return `"${s.replace(/"/g, '""')}"`;
}

/**
 * @param {Awaited<ReturnType<typeof listFreeScanSubmissions>>} rows
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
 * @param {Request} request
 */
function readAdminToken(request) {
  const url = new URL(request.url);
  const headerToken = request.headers.get("x-admin-token");
  const authHeader = request.headers.get("authorization");
  return String(
    headerToken ||
      authHeader?.replace(/^Bearer\s+/i, "") ||
      url.searchParams.get("token") ||
      "",
  ).trim();
}

export const maxDuration = 60;

export async function GET(request) {
  const token = process.env.FREE_SCAN_ADMIN_TOKEN?.trim();
  const provided = readAdminToken(request);

  if (!token || provided !== token) {
    return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  if (!process.env.DATABASE_URL) {
    return Response.json(
      { ok: false, error: "DATABASE_URL is not configured" },
      { status: 503 },
    );
  }

  try {
    await ensureFreeScanSchema();
    const url = new URL(request.url);
    const limit = Number(url.searchParams.get("limit") || "500");
    const rows = await listFreeScanSubmissions({ limit });
    const format = (url.searchParams.get("format") || "json").toLowerCase();

    if (format === "csv") {
      return new Response(toCsv(rows), {
        status: 200,
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": 'attachment; filename="free-scan-submissions.csv"',
        },
      });
    }

    return Response.json({ ok: true, count: rows.length, rows });
  } catch (error) {
    console.error("[free-scan-submissions]", error);
    return Response.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Unexpected error",
      },
      { status: 500 },
    );
  }
}

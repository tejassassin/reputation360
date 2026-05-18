import postgres from "postgres";

let _sql;

/**
 * @returns {import('postgres').Sql}
 */
export function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is not set");
  }
  if (!_sql) {
    _sql = postgres(url, {
      max: 1,
      idle_timeout: 20,
      connect_timeout: 10,
      ssl: url.includes("localhost") ? false : "require",
    });
  }
  return _sql;
}

export async function ensureFreeScanSchema() {
  const sql = getSql();
  await sql`
    CREATE TABLE IF NOT EXISTS free_scan_users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      email TEXT NOT NULL,
      country TEXT NOT NULL,
      consent_given BOOLEAN NOT NULL DEFAULT false,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS free_scans (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id UUID NOT NULL REFERENCES free_scan_users (id) ON DELETE CASCADE,
      search_query_used TEXT NOT NULL,
      positive_results JSONB NOT NULL DEFAULT '[]'::jsonb,
      neutral_results JSONB NOT NULL DEFAULT '[]'::jsonb,
      negative_results JSONB NOT NULL DEFAULT '[]'::jsonb,
      raw_score INTEGER,
      final_score INTEGER NOT NULL,
      presence_label TEXT,
      summary TEXT,
      hurting_summary TEXT,
      improving_summary TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
  await sql`CREATE INDEX IF NOT EXISTS idx_free_scan_users_email ON free_scan_users (email)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_free_scans_user_id ON free_scans (user_id)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_free_scans_created_at ON free_scans (created_at DESC)`;
}

/**
 * Inserts user and scan in one transaction.
 * @param {{ user: { firstName: string; lastName: string; email: string; country: string; consentGiven: boolean }; scan: Record<string, unknown> }} p
 */
export async function insertUserAndScan(p) {
  const sql = getSql();
  return sql.begin(async (tx) => {
    const [u] = await tx`
      INSERT INTO free_scan_users (first_name, last_name, email, country, consent_given)
      VALUES (${p.user.firstName}, ${p.user.lastName}, ${p.user.email}, ${p.user.country}, ${p.user.consentGiven})
      RETURNING id
    `;
    const [s] = await tx`
      INSERT INTO free_scans (
        user_id,
        search_query_used,
        positive_results,
        neutral_results,
        negative_results,
        raw_score,
        final_score,
        presence_label,
        summary,
        hurting_summary,
        improving_summary
      )
      VALUES (
        ${u.id}::uuid,
        ${p.scan.searchQueryUsed},
        ${tx.json(p.scan.positiveResults)}::jsonb,
        ${tx.json(p.scan.neutralResults)}::jsonb,
        ${tx.json(p.scan.negativeResults)}::jsonb,
        ${p.scan.rawScore},
        ${p.scan.finalScore},
        ${p.scan.presenceLabel},
        ${p.scan.summary},
        ${p.scan.hurtingSummary},
        ${p.scan.improvingSummary}
      )
      RETURNING id
    `;
    return { userId: u.id, scanId: s.id };
  });
}

/**
 * @param {object} report
 * @param {object} [subject]
 */
export function formatReputationReportForChat(report, subject) {
  const name = report?.searchedFor || subject?.fullName || "this person";
  const lines = [
    `Reputation scan for ${name}`,
    "",
    `Sentiment: ${report?.overallSentiment ?? "unknown"} (${report?.sentimentScore ?? 0}/100, confidence: ${report?.confidence ?? "n/a"})`,
    "",
    report?.summary ?? "No summary available.",
  ];

  if (report?.positives?.length) {
    lines.push("", "Positives:", ...report.positives.map((p) => `- ${p}`));
  }
  if (report?.risks?.length) {
    lines.push("", "Risks:", ...report.risks.map((r) => `- ${r}`));
  }
  if (report?.sources?.length) {
    lines.push("", "Sources reviewed:");
    for (const s of report.sources.slice(0, 10)) {
      lines.push(`- ${s.title || s.url} (${s.sentiment})`);
    }
    if (report.sources.length > 10) {
      lines.push(`- ...and ${report.sources.length - 10} more`);
    }
  }

  if (report?.primarySearchQuery) {
    lines.push("", `Web search used: ${report.primarySearchQuery}`);
  }

  return lines.join("\n");
}

function reputationAgentEndpoint() {
  const base = import.meta.env.VITE_REPUTATION_AGENT_API_URL?.replace(/\/$/, "") ?? "";
  return base ? `${base}/api/reputation-agent` : "/api/reputation-agent";
}

/**
 * @param {{ firstName: string; lastName: string; email: string }} payload
 */
export async function fetchReputationAgentReport(payload) {
  const res = await fetch(reputationAgentEndpoint(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...payload,
      consentGiven: true,
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.ok) {
    const code = data.code ? ` (${data.code})` : "";
    const hint =
      res.status === 503
        ? " Add TAVILY_API_KEY and OPENROUTER_API_KEY to .env.local, then restart npm run dev."
        : "";
    throw new Error(
      (data.error || `Scan failed (${res.status})`) + code + hint,
    );
  }
  return data;
}

import { openRouterChatCompletion, getAssistantMessage } from "./openRouter.js";
import { gatherEvidenceForPerson } from "./gatherEvidence.js";

/**
 * @param {string} fullName
 * @param {object} report
 */
function anchorSummaryToSubject(fullName, report) {
  const s = String(report.summary ?? "").trim();
  if (!s) {
    return {
      ...report,
      summary: `For ${fullName}, we did not find enough clearly matching web pages in this pass to write a confident narrative. Try a more specific spelling, middle name, or professional context if this is a common name.`,
    };
  }
  const needle = fullName.toLowerCase();
  if (s.toLowerCase().includes(needle)) return report;
  return { ...report, summary: `For ${fullName}: ${s}` };
}

/**
 * @param {string} raw
 * @param {object} meta
 */
function parseAgentJson(raw, meta) {
  let parsed = null;
  const trimmed = raw.trim();
  const jsonMatch = trimmed.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    try {
      parsed = JSON.parse(jsonMatch[0]);
    } catch {
      parsed = null;
    }
  }

  const fallbackSources =
    meta.searchResults?.map((r) => ({
      url: r.url,
      title: r.title,
      sentiment: "neutral",
      note: r.snippet?.slice(0, 200) ?? "",
    })) ?? [];

  if (!parsed || typeof parsed !== "object") {
    return {
      ok: true,
      summary: trimmed || "Analysis could not be structured.",
      overallSentiment: "neutral",
      sentimentScore: 0,
      confidence: "low",
      themes: [],
      risks: [],
      positives: [],
      sources: fallbackSources,
      rawAnalysis: trimmed,
      meta,
    };
  }

  return {
    ok: true,
    summary: String(parsed.summary ?? ""),
    overallSentiment: String(parsed.overallSentiment ?? "neutral"),
    sentimentScore: Number(parsed.sentimentScore) || 0,
    confidence: String(parsed.confidence ?? "medium"),
    themes: Array.isArray(parsed.themes) ? parsed.themes.map(String) : [],
    risks: Array.isArray(parsed.risks) ? parsed.risks.map(String) : [],
    positives: Array.isArray(parsed.positives) ? parsed.positives.map(String) : [],
    sources: Array.isArray(parsed.sources) ? parsed.sources : fallbackSources,
    rawAnalysis: trimmed,
    meta,
  };
}

/**
 * @param {{ fullName: string; firstName: string; lastName: string; email: string }} input
 */
export async function runReputationAgent({ fullName, firstName, lastName, email }) {
  const evidence = await gatherEvidenceForPerson({ fullName, firstName, lastName });

  const meta = {
    subject: { fullName, firstName, lastName },
    searchQueries: evidence.searchQueries,
    primarySearchQuery: evidence.primarySearchQuery,
    searchResults: evidence.searchResults,
    fetchedPages: evidence.fetched.results,
    fetchFailures: evidence.fetched.failed,
  };

  const evidencePayload = {
    person: { fullName, firstName, lastName },
    searchResults: evidence.searchResults,
    fetchedPages: evidence.fetched.results.map((p) => ({
      url: p.url,
      excerpt: p.content.slice(0, 6000),
    })),
  };

  const synthesis = await openRouterChatCompletion(
    [
      {
        role: "system",
        content: `You are Reputation360's reputation analyst. You write ONE report about exactly one person.

SUBJECT (non-negotiable): "${fullName}" (first name: "${firstName}", last name: "${lastName}").

Hard rules:
- Every paragraph and every bullet must clearly refer to ${fullName} or use an unambiguous short form ("they"/"their") only after ${fullName} was named in the same paragraph.
- Open the summary with the exact words: For ${fullName},
- Do not write generic online-reputation advice that could apply to anyone. Tie claims to the supplied URLs/snippets only.
- If evidence is thin, mixed, or might describe a different person with the same name, say so plainly and lower confidence.
- If nothing in the evidence clearly refers to ${fullName}, say that explicitly; do not invent a biography.
- Output valid JSON only (no markdown fences).`,
      },
      {
        role: "user",
        content: `Analyze online reputation for exactly this person: ${fullName}
Email (context only, never quote in report): ${email}

Evidence JSON (search hits + page excerpts). Only use material that is about ${fullName}:
${JSON.stringify(evidencePayload).slice(0, 95_000)}

Return JSON with this shape (sources must mirror real URLs from evidence where possible):
{
  "summary": "Multiple paragraphs, MUST start with: For ${fullName},",
  "overallSentiment": "positive"|"neutral"|"negative"|"mixed",
  "sentimentScore": integer -100 to 100,
  "confidence": "low"|"medium"|"high",
  "themes": ["each theme must mention ${fullName} or be clearly about them"],
  "risks": ["each risk tied to ${fullName} using evidence"],
  "positives": ["each positive tied to ${fullName} using evidence"],
  "sources": [{ "url": "string", "title": "string", "sentiment": "positive"|"neutral"|"negative", "note": "one sentence: how this page relates to ${fullName}" }]
}`,
      },
    ],
    undefined,
  );

  const msg = getAssistantMessage(synthesis);
  const parsed = parseAgentJson(String(msg?.content ?? ""), meta);
  const report = anchorSummaryToSubject(fullName, parsed);

  return {
    ...report,
    searchedFor: fullName,
    primarySearchQuery: evidence.primarySearchQuery,
    linksReviewed: evidence.searchResults.length,
  };
}

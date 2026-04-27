/**
 * Derive a one-line “outcome” and short key points from stored section copy
 * (used on the home case-study cards, not for the full detail page).
 */

/** @param {{ sections?: { heading: string; body: string }[] }} study */
function resultsBody(study) {
  const sec = study.sections?.find((s) => /the results/i.test(s.heading));
  return sec?.body?.trim() ?? "";
}

/** @param {{ sections?: { heading: string; body: string }[] }} study */
function strategyBody(study) {
  const sec = study.sections?.find((s) => /our strategy/i.test(s.heading));
  return sec?.body?.trim() ?? "";
}

function linesFromBody(body) {
  if (typeof body !== "string" || !body.trim()) return [];
  return body
    .split(/\n+/)
    .map((l) => l.trim().replace(/^[•\-–—]\s*/, ""))
    .filter(Boolean);
}

const MAX_OUTCOME = 150;
const MAX_BULLET = 130;
const MAX_POINTS = 3;

function truncate(s, n) {
  if (s.length <= n) return s;
  const c = s.slice(0, n);
  const sp = c.lastIndexOf(" ");
  return (sp > 30 ? c.slice(0, sp) : c) + "…";
}

/**
 * @param {{ sections?: { heading: string; body: string }[]; summary?: string }} study
 * @returns {{ outcome: string; keyPoints: string[] }}
 */
export function getOutcomeAndKeyPoints(study) {
  const rLines = linesFromBody(resultsBody(study));
  const sLines = linesFromBody(strategyBody(study));

  let outcome = rLines[0] ?? "";
  if (!outcome && study.summary) {
    outcome = study.summary;
  }
  outcome = truncate(outcome.replace(/\s+/g, " ").trim(), MAX_OUTCOME);

  let keyPoints = rLines.slice(1, 1 + MAX_POINTS).map((l) => truncate(l, MAX_BULLET));
  let i = 0;
  while (keyPoints.length < MAX_POINTS && i < sLines.length) {
    const line = sLines[i];
    i += 1;
    if (keyPoints.includes(line) || rLines[0] === line) continue;
    keyPoints.push(truncate(line, MAX_BULLET));
  }
  keyPoints = keyPoints.slice(0, MAX_POINTS);

  return { outcome, keyPoints };
}

/**
 * @param {string} duration
 * @returns {{ value: string; unit: string; full: string }}
 */
export function parseEngagementMonths(duration) {
  const s = String(duration || "").trim();
  const m = s.match(/^(\d+)\s*months?$/i);
  if (m) {
    return { value: m[1], unit: "months", full: s };
  }
  const w = s.match(/^(\d+)\s*weeks?$/i);
  if (w) {
    return { value: w[1], unit: "weeks", full: s };
  }
  return { value: "", unit: "", full: s || "-" };
}

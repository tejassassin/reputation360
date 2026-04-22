/**
 * Infers section "kind" from heading for visual theming and layout.
 * @param {string} heading
 */
export function getSectionKind(heading) {
  const h = heading.toLowerCase();
  if (h.includes("challenge")) return "challenge";
  if (h.includes("baseline")) return "baseline";
  if (h.includes("objective")) return "objective";
  if (h.includes("strategy")) return "strategy";
  if (h.includes("milestone") || h.includes("month-by-month") || h.includes("month by month")) {
    return "milestone";
  }
  if (h.includes("result")) return "results";
  if (h.includes("impact")) return "impact";
  return "default";
}

/** Reputation360 brand: navy, slate, steel, #4CAF50 only (no ad-hoc per-section colourways). */
const BRAND = {
  bar: "from-navy/90 via-slate/70 to-[#4CAF50]",
  rail: "border-l-slate-200/80 group-hover/section:border-l-[#2d8a2d]/55",
  glow: "from-[#4CAF50]/[0.08] via-slate-200/[0.04]",
  tag: "group-hover/section:bg-[#4CAF50]/8 group-hover/section:ring-[#4CAF50]/20",
};

/**
 * @param {string} _heading
 */
export function getSectionTheme(_heading) {
  return BRAND;
}

/**
 * @param {string} line
 * @returns {{ time: string; text: string } | null}
 */
function parseMilestoneLine(line) {
  const t = line.trim();
  if (!/^(Month|Months)\b/i.test(t)) return null;
  const idx = t.indexOf(":");
  if (idx === -1) return { time: t, text: "" };
  return {
    time: t.slice(0, idx).trim(),
    text: t.slice(idx + 1).trim(),
  };
}

/**
 * Timeline rows for Month-by-Month / Milestones sections.
 * @param {string} body
 * @param {string} heading
 * @returns {{ time: string; text: string }[] | null}
 */
export function parseMilestoneItems(body, heading) {
  const kind = getSectionKind(heading);
  if (kind !== "milestone") {
    if (!/^(Month|Months)\b/im.test(body)) return null;
  }
  const lines = String(body)
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  const items = lines.map(parseMilestoneLine).filter(Boolean);
  if (items.length < 2) return null;
  return items;
}

/**
 * Icon-list: multiple short lines, no double-newline paragraphs; strategy, results, etc.
 * @param {string} body
 * @param {string} heading
 * @param {boolean} isTimeline
 */
export function getIconListLines(body, heading, isTimeline) {
  if (isTimeline) return null;
  const k = getSectionKind(heading);
  if (k === "milestone" || k === "baseline" || k === "impact") return null;
  if (String(body).includes("\n\n")) return null;

  const lines = String(body)
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  if (lines.length < 2) return null;
  if (lines.some((l) => l.length > 450)) return null;
  if (lines[0] && /^(Month|Months)\b/i.test(lines[0])) return null;

  if (k === "strategy" && lines.length >= 2) {
    return lines;
  }
  if (k === "results" && lines.length >= 2) {
    return lines;
  }
  if (k === "challenge" && lines.length >= 2) {
    const [first, ...rest] = lines;
    if (first.length > 200 && rest.length >= 1 && rest.every((l) => l.length < 200)) {
      return lines;
    }
  }
  if (k === "objective" && lines.length === 1) {
    return null;
  }
  return null;
}

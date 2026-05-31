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

/** Brand palette only: navy, slate, green, offwhite, steel. */
const SECTION_THEMES = {
  challenge: {
    bar: "from-navy via-slate to-green",
    rail: "border-l-slate/60",
    glow: "from-slate/10 via-offwhite/50",
    tag: "bg-slate/10 text-navy ring-slate/20",
    card: "from-offwhite/90 via-white to-white",
    icon: "border-slate/25 bg-gradient-to-br from-slate/15 to-offwhite text-navy ring-slate/15",
    border: "border-slate/20 hover:border-slate/35",
  },
  baseline: {
    bar: "from-slate via-navy to-green",
    rail: "border-l-navy/45",
    glow: "from-navy/8 via-offwhite/40",
    tag: "bg-navy/10 text-navy ring-navy/15",
    card: "from-offwhite via-white to-white",
    icon: "border-navy/20 bg-gradient-to-br from-navy/10 to-offwhite text-navy ring-navy/10",
    border: "border-navy/15 hover:border-navy/30",
  },
  objective: {
    bar: "from-navy via-slate to-green",
    rail: "border-l-slate/55",
    glow: "from-slate/10 via-offwhite/40",
    tag: "bg-slate/10 text-navy ring-slate/20",
    card: "from-slate/5 via-white to-white",
    icon: "border-slate/25 bg-gradient-to-br from-slate/15 to-white text-navy ring-slate/15",
    border: "border-slate/20 hover:border-slate/35",
  },
  strategy: {
    bar: "from-navy via-slate to-green",
    rail: "border-l-slate/50",
    glow: "from-offwhite via-green/5",
    tag: "bg-offwhite text-navy ring-slate/15",
    card: "from-offwhite/80 via-white to-green/5",
    icon: "border-slate/20 bg-gradient-to-br from-offwhite to-white text-navy ring-slate/15",
    border: "border-slate/15 hover:border-slate/30",
  },
  milestone: {
    bar: "from-slate via-navy to-slate",
    rail: "border-l-slate/60",
    glow: "from-slate/10 via-offwhite/50",
    tag: "bg-slate/10 text-navy ring-slate/20",
    card: "from-offwhite via-white to-slate/5",
    icon: "border-slate/25 bg-gradient-to-br from-slate/15 to-offwhite text-navy ring-slate/15",
    border: "border-slate/20 hover:border-slate/35",
  },
  results: {
    bar: "from-navy via-slate to-navy",
    rail: "border-l-navy/55",
    glow: "from-navy/8 via-offwhite/50",
    tag: "bg-navy/10 text-navy ring-navy/15",
    card: "from-offwhite via-white to-navy/5",
    icon: "border-navy/25 bg-gradient-to-br from-navy/12 to-offwhite text-navy ring-navy/15",
    border: "border-navy/15 hover:border-navy/30",
  },
  impact: {
    bar: "from-navy via-slate to-navy",
    rail: "border-l-navy/70",
    glow: "from-navy/10 via-offwhite/55",
    tag: "bg-navy/12 text-navy ring-navy/20",
    card: "from-navy/5 via-offwhite to-white",
    icon: "border-navy/30 bg-gradient-to-br from-navy/15 to-offwhite text-navy ring-navy/20",
    border: "border-navy/20 hover:border-navy/35",
  },
  default: {
    bar: "from-navy via-slate to-green",
    rail: "border-l-slate/40",
    glow: "from-green/5 via-offwhite/40",
    tag: "bg-offwhite text-steel ring-slate/15",
    card: "from-white via-white to-offwhite",
    icon: "border-slate/20 bg-gradient-to-br from-offwhite to-white text-navy ring-slate/15",
    border: "border-slate/15 hover:border-slate/30",
  },
};

/**
 * @param {string} heading
 */
export function getSectionTheme(heading) {
  return SECTION_THEMES[getSectionKind(heading)] ?? SECTION_THEMES.default;
}

/**
 * @param {string} line
 * @returns {{ time: string; text: string } | null}
 */
function parseMilestoneLine(line) {
  const t = line.trim();
  if (!/^(Month|Months|Week|Weeks)\b/i.test(t)) return null;
  let idx = t.indexOf(" - ");
  let skip = 3;
  if (idx === -1) {
    idx = t.indexOf(":");
    skip = 1;
  }
  if (idx === -1) return { time: t, text: "" };
  return {
    time: t.slice(0, idx).trim(),
    text: t.slice(idx + skip).trim(),
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
    if (!/^(Month|Months|Week|Weeks)\b/im.test(body)) return null;
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
  if (lines[0] && /^(Month|Months|Week|Weeks)\b/i.test(lines[0])) return null;

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

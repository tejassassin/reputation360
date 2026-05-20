import { jsPDF } from "jspdf";

/**
 * @typedef {{ rank: number; title: string; link: string; displayLink: string; snippet: string; sentiment: string }} ScanPdfRow
 */

/**
 * @param {{
 *   firstName: string;
 *   lastName: string;
 *   email: string;
 *   searchQueryUsed: string;
 *   reportedScore: number;
 *   presenceLabel: string;
 *   summary: string;
 *   hurting: string;
 *   improving: string;
 *   positive: ScanPdfRow[];
 *   neutral: ScanPdfRow[];
 *   negative: ScanPdfRow[];
 * }} p
 * @returns {Uint8Array}
 */
export function buildReputationScanPdfBytes(p) {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageH = doc.internal.pageSize.getHeight();
  const pageW = doc.internal.pageSize.getWidth();
  const margin = 36;
  const maxW = pageW - 2 * margin;
  let y = margin;
  const BRAND = {
    navy: [31, 59, 100],
    blue: [46, 91, 136],
    sky: [65, 156, 232],
    green: [76, 175, 80],
    red: [190, 24, 93],
    amber: [217, 119, 6],
    slate: [71, 85, 105],
    light: [245, 247, 250],
    border: [226, 232, 240],
    white: [255, 255, 255],
  };

  /**
   * @param {number} minHeight
   */
  function ensureSpace(minHeight) {
    if (y + minHeight <= pageH - margin) return;
    doc.addPage();
    y = margin;
  }

  /**
   * @param {number} x
   * @param {number} y0
   * @param {number} w
   * @param {number} h
   * @param {[number, number, number]} fill
   * @param {[number, number, number]} [stroke]
   */
  function roundedRect(x, y0, w, h, fill, stroke = BRAND.border) {
    doc.setFillColor(...fill);
    doc.setDrawColor(...stroke);
    doc.roundedRect(x, y0, w, h, 14, 14, "FD");
  }

  /**
   * @param {string} text
   * @param {number} x
   * @param {number} y0
   * @param {number} w
   * @param {number} h
   * @param {[number, number, number]} fill
   * @param {[number, number, number]} textColor
   */
  function pill(text, x, y0, w, h, fill, textColor) {
    doc.setFillColor(...fill);
    doc.roundedRect(x, y0, w, h, h / 2, h / 2, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...textColor);
    doc.text(text, x + w / 2, y0 + h / 2 + 3, { align: "center" });
    doc.setTextColor(0);
  }

  /**
   * @param {ScanPdfRow[]} rows
   */
  function sortedRows(rows) {
    return [...rows].sort((a, b) => a.rank - b.rank);
  }

  /**
   * @param {ScanPdfRow} r
   */
  function pageLabel(r) {
    const page = r.rank <= 10 ? 1 : r.rank <= 20 ? 2 : 3;
    return `Page ${page}, rank ${r.rank}`;
  }

  /**
   * @param {string} title
   * @param {string} body
   * @param {[number, number, number]} barColor
   * @param {[number, number, number]} bgColor
   */
  function addInsightCard(title, body, barColor, bgColor) {
    ensureSpace(96);
    const cardY = y;
    roundedRect(margin, cardY, maxW, 82, bgColor);
    doc.setFillColor(...barColor);
    doc.roundedRect(margin, cardY, 5, 82, 5, 5, "F");
    doc.setTextColor(...BRAND.navy);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text(title, margin + 16, cardY + 22);
    doc.setTextColor(...BRAND.slate);
    const lines = doc.splitTextToSize(body, maxW - 30);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(lines.slice(0, 4), margin + 16, cardY + 40);
    doc.setTextColor(0);
    y += 94;
  }

  /**
   * @param {string} title
   * @param {ScanPdfRow[]} rows
   * @param {[number, number, number]} fill
   * @param {[number, number, number]} textColor
   */
  function addResultSection(title, rows, fill, textColor) {
    if (!rows.length) return;
    ensureSpace(46);
    doc.setFillColor(...fill);
    doc.roundedRect(margin, y, maxW, 34, 12, 12, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(...textColor);
    doc.text(`${title} (${rows.length})`, margin + 16, y + 22);
    doc.setTextColor(0);
    y += 48;

    for (const r of sortedRows(rows)) {
      ensureSpace(76);
      const cardH = 64;
      roundedRect(margin, y, maxW, cardH, BRAND.white);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(...BRAND.slate);
      doc.text(pageLabel(r), margin + 14, y + 18);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(...BRAND.navy);
      const titleLines = doc.splitTextToSize(r.title, maxW - 28);
      doc.text(titleLines.slice(0, 1), margin + 14, y + 33);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(...BRAND.blue);
      doc.text(r.displayLink || r.link, margin + 14, y + 47);
      doc.setTextColor(...BRAND.slate);
      const snippetLines = doc.splitTextToSize(r.snippet, maxW - 28);
      doc.text(snippetLines.slice(0, 1), margin + 14, y + 58);
      doc.setTextColor(0);
      y += cardH + 8;
    }
  }

  const who = `${p.firstName} ${p.lastName}`.trim();
  const negativeCount = (p.negative ?? []).length;
  const neutralCount = (p.neutral ?? []).length;
  const positiveCount = (p.positive ?? []).length;
  const totalCount = negativeCount + neutralCount + positiveCount;
  let letter = "D";
  if (p.reportedScore >= 72) letter = "A";
  else if (p.reportedScore >= 60) letter = "B";
  else if (p.reportedScore >= 48) letter = "C";
  const accent =
    letter === "A"
      ? BRAND.green
      : letter === "B"
        ? BRAND.sky
        : letter === "C"
          ? BRAND.amber
          : BRAND.red;

  // Cover page header
  roundedRect(margin, y, maxW, 118, BRAND.light, BRAND.light);
  doc.setFillColor(...BRAND.navy);
  doc.roundedRect(margin, y, maxW, 40, 14, 14, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(19);
  doc.setTextColor(...BRAND.white);
  doc.text("Reputation360 - Free Reputation Scan", margin + 18, y + 26);
  doc.setTextColor(...BRAND.navy);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text(who, margin + 18, y + 68);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...BRAND.slate);
  doc.text(p.email, margin + 18, y + 86);
  doc.text(`Search analyzed: ${p.searchQueryUsed}`, margin + 18, y + 100);

  const scoreBoxW = 146;
  const scoreBoxX = pageW - margin - scoreBoxW;
  roundedRect(scoreBoxX, y + 46, scoreBoxW, 60, BRAND.white);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.setTextColor(...BRAND.navy);
  doc.text(String(p.reportedScore), scoreBoxX + 18, y + 76);
  doc.setFontSize(14);
  doc.setTextColor(...BRAND.slate);
  doc.text("/100", scoreBoxX + 64, y + 76);
  pill(`Grade ${letter}`, scoreBoxX + 16, y + 84, 72, 18, accent, BRAND.white);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(...BRAND.slate);
  const presenceLines = doc.splitTextToSize(p.presenceLabel, scoreBoxW - 24);
  doc.text(presenceLines.slice(0, 2), scoreBoxX + 16, y + 110);
  doc.setTextColor(0);
  y += 132;

  // Metrics
  ensureSpace(78);
  const gap = 10;
  const metricW = (maxW - gap * 3) / 4;
  const metricY = y;
  [
    { label: "Total links", value: totalCount, color: BRAND.navy },
    { label: "Positive", value: positiveCount, color: BRAND.green },
    { label: "Neutral", value: neutralCount, color: BRAND.slate },
    { label: "Negative", value: negativeCount, color: BRAND.red },
  ].forEach((m, i) => {
    const x = margin + i * (metricW + gap);
    roundedRect(x, metricY, metricW, 62, BRAND.white);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.setTextColor(...m.color);
    doc.text(String(m.value), x + metricW / 2, metricY + 28, { align: "center" });
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(...BRAND.slate);
    doc.text(m.label, x + metricW / 2, metricY + 46, { align: "center" });
  });
  doc.setTextColor(0);
  y += 76;

  // Summary card
  ensureSpace(108);
  roundedRect(margin, y, maxW, 94, BRAND.white);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(...BRAND.navy);
  doc.text("Executive Summary", margin + 16, y + 22);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...BRAND.slate);
  const summaryLines = doc.splitTextToSize(p.summary, maxW - 32);
  doc.text(summaryLines.slice(0, 5), margin + 16, y + 38);
  doc.setTextColor(0);
  y += 108;

  const hurtingLines = String(p.hurting)
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
  addInsightCard(
    "What may be hurting you",
    hurtingLines.length === 1 && hurtingLines[0].startsWith("We did not flag")
      ? hurtingLines[0]
      : hurtingLines.slice(0, 4).map((line) => `• ${line}`).join("\n"),
    BRAND.red,
    [255, 245, 247],
  );

  const improvingLines = String(p.improving)
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
  addInsightCard(
    "What can improve",
    improvingLines.slice(0, 5).map((line) => `• ${line}`).join("\n"),
    BRAND.green,
    [241, 253, 244],
  );

  // Move detailed link blocks to later pages for readability.
  doc.addPage();
  y = margin;
  roundedRect(margin, y, maxW, 54, BRAND.light, BRAND.light);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(...BRAND.navy);
  doc.text("Detailed Link Breakdown", margin + 18, y + 24);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...BRAND.slate);
  doc.text("All categorized results from the scan are listed below in page-and-rank order.", margin + 18, y + 42);
  doc.setTextColor(0);
  y += 70;

  // Categorized link sections
  addResultSection("Negative links", p.negative ?? [], [255, 241, 242], BRAND.red);
  addResultSection("Neutral links", p.neutral ?? [], [248, 250, 252], BRAND.slate);
  addResultSection("Positive links", p.positive ?? [], [240, 253, 244], BRAND.green);

  // Footer
  ensureSpace(30);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8);
  doc.setTextColor(...BRAND.slate);
  doc.text("thereputation360.com", margin, pageH - 18);
  doc.text("Generated by Reputation360", pageW - margin, pageH - 18, { align: "right" });
  doc.setTextColor(0);

  const buf = doc.output("arraybuffer");
  return new Uint8Array(buf);
}

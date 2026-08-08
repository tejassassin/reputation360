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
    navy: [23, 37, 84],       // Dark premium navy
    blue: [59, 130, 246],     // Accent blue
    sky: [147, 197, 253],     // Sky blue
    green: [34, 197, 94],     // Positive green
    red: [239, 68, 68],       // Negative red
    amber: [245, 158, 11],     // Warning amber
    slate: [71, 85, 105],     // Cool slate
    light: [248, 250, 252],   // Light bg
    border: [226, 232, 240],  // Card border
    white: [255, 255, 255],
    textDark: [15, 23, 42],   // Slate 900
  };

  /**
   * @param {number} minHeight
   */
  function ensureSpace(minHeight) {
    if (y + minHeight <= pageH - margin - 24) return;
    doc.addPage();
    y = margin + 12;
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
    doc.roundedRect(x, y0, w, h, 10, 10, "FD");
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
    doc.setFontSize(8.5);
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
    const textW = maxW - 36;
    const bulletLines = String(body)
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);

    let textH = 0;
    const computedBullets = [];

    for (const rawLine of bulletLines) {
      const cleanLine = rawLine.replace(/^•\s*/, "");
      const splitLines = doc.splitTextToSize(cleanLine, textW);
      computedBullets.push(splitLines);
      textH += splitLines.length * 13 + 6;
    }

    const cardH = 26 + (textH > 0 ? textH - 6 : 0) + 16;
    ensureSpace(cardH + 12);

    const cardY = y;
    roundedRect(margin, cardY, maxW, cardH, bgColor, bgColor);

    // Left accent bar
    doc.setFillColor(...barColor);
    doc.roundedRect(margin, cardY, 4, cardH, 4, 4, "F");

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(...BRAND.navy);
    doc.text(title, margin + 16, cardY + 18);

    // Bullets
    let bulletY = cardY + 32;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(...BRAND.textDark);

    for (const splitLines of computedBullets) {
      doc.setFillColor(...barColor);
      doc.circle(margin + 18, bulletY - 2.5, 2, "F");
      for (const line of splitLines) {
        doc.text(line, margin + 26, bulletY);
        bulletY += 13;
      }
      bulletY += 6;
    }

    y += cardH + 12;
  }

  /**
   * @param {string} title
   * @param {ScanPdfRow[]} rows
   * @param {[number, number, number]} fill
   * @param {[number, number, number]} textColor
   */
  function addResultSection(title, rows, fill, textColor) {
    if (!rows.length) return;
    ensureSpace(60);
    doc.setFillColor(...fill);
    doc.roundedRect(margin, y, maxW, 30, 6, 6, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(...textColor);
    doc.text(`${title} (${rows.length})`, margin + 12, y + 19);
    doc.setTextColor(0);
    y += 38;

    for (const r of sortedRows(rows)) {
      const titleW = maxW - 32;
      const snippetW = maxW - 32;
      const titleLines = doc.splitTextToSize(r.title, titleW);
      const snippetLines = doc.splitTextToSize(r.snippet, snippetW);
      const titleH = titleLines.length * 13;
      const snippetH = snippetLines.length * 11;
      const cardH = 12 + 10 + titleH + 12 + snippetH + 10;

      ensureSpace(cardH + 10);

      roundedRect(margin, y, maxW, cardH, BRAND.white, BRAND.border);

      // Sentiment accent vertical stripe
      doc.setFillColor(...textColor);
      doc.roundedRect(margin, y, 4, cardH, 4, 4, "F");

      // Page / Rank metadata
      doc.setFont("helvetica", "bold");
      doc.setFontSize(7.5);
      doc.setTextColor(...BRAND.slate);
      doc.text(pageLabel(r).toUpperCase(), margin + 16, y + 16);

      // Title
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(...BRAND.navy);
      let currentY = y + 28;
      for (const line of titleLines) {
        doc.text(line, margin + 16, currentY);
        currentY += 13;
      }

      // Link / URL
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      doc.setTextColor(...BRAND.blue);
      doc.text(r.displayLink || r.link, margin + 16, currentY);
      currentY += 11;

      // Snippet
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(...BRAND.slate);
      for (const line of snippetLines) {
        doc.text(line, margin + 16, currentY);
        currentY += 11;
      }

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
        ? BRAND.blue
        : letter === "C"
          ? BRAND.amber
          : BRAND.red;

  const accentLight =
    letter === "A"
      ? [240, 253, 244]
      : letter === "B"
        ? [239, 246, 255]
        : letter === "C"
          ? [255, 251, 235]
          : [254, 242, 242];

  // Full-bleed top banner
  doc.setFillColor(...BRAND.navy);
  doc.rect(0, 0, pageW, 130, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(...BRAND.white);
  doc.text("REPUTATION360", margin, 48);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(...BRAND.sky);
  doc.text("FREE ONLINE REPUTATION REPORT", margin, 63);

  // Client Profile Card (overlapping top banner)
  const profileCardH = 120;
  roundedRect(margin, 85, maxW, profileCardH, BRAND.white, BRAND.border);

  // Profile Card Left Info
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(...BRAND.navy);
  doc.text(who, margin + 16, 118);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(...BRAND.slate);
  doc.text(p.email, margin + 16, 135);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(...BRAND.slate);
  doc.text(`Search analyzed: ${p.searchQueryUsed}`, margin + 16, 155, { maxWidth: 280 });

  // Profile Card Right Score Gauge
  const circleX = pageW - margin - 50;
  const circleY = 135;
  doc.setFillColor(...accentLight);
  doc.circle(circleX, circleY, 30, "F");
  doc.setDrawColor(...accent);
  doc.setLineWidth(2);
  doc.circle(circleX, circleY, 30, "S");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(...BRAND.navy);
  doc.text(String(p.reportedScore), circleX, circleY + 1, { align: "center" });
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...BRAND.slate);
  doc.text("/100", circleX, circleY + 11, { align: "center" });

  pill(`Grade ${letter}`, circleX - 35, 175, 70, 16, accent, BRAND.white);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(...BRAND.slate);
  doc.text(p.presenceLabel.toUpperCase(), circleX, 201, { align: "center" });

  y = 85 + profileCardH + 16;

  // Dashboard Metrics Grid
  const gap = 10;
  const metricW = (maxW - gap * 3) / 4;
  const metricY = y;
  const metricH = 50;
  [
    { label: "TOTAL LINKS", value: totalCount, color: BRAND.navy },
    { label: "POSITIVE", value: positiveCount, color: BRAND.green },
    { label: "NEUTRAL", value: neutralCount, color: BRAND.slate },
    { label: "NEGATIVE", value: negativeCount, color: BRAND.red },
  ].forEach((m, i) => {
    const x = margin + i * (metricW + gap);
    roundedRect(x, metricY, metricW, metricH, BRAND.light, BRAND.border);
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(...m.color);
    doc.text(String(m.value), x + metricW / 2, metricY + 22, { align: "center" });
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.setTextColor(...BRAND.slate);
    doc.text(m.label, x + metricW / 2, metricY + 38, { align: "center" });
  });

  y += metricH + 16;

  // Executive Summary Card
  const summaryText = p.summary;
  const summaryWidth = maxW - 32;
  const summaryLines = doc.splitTextToSize(summaryText, summaryWidth);
  const textH = summaryLines.length * 13;
  const summaryCardH = 34 + textH + 12;

  ensureSpace(summaryCardH + 12);
  roundedRect(margin, y, maxW, summaryCardH, BRAND.white, BRAND.border);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(...BRAND.navy);
  doc.text("Executive Summary", margin + 16, y + 20);

  doc.setDrawColor(...BRAND.border);
  doc.setLineWidth(0.5);
  doc.line(margin + 16, y + 26, margin + maxW - 16, y + 26);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(...BRAND.textDark);
  let summaryY = y + 39;
  for (const line of summaryLines) {
    doc.text(line, margin + 16, summaryY);
    summaryY += 13;
  }

  y += summaryCardH + 16;

  // Insight Cards
  addInsightCard("What may be hurting you", p.hurting, BRAND.red, [254, 242, 242]);
  addInsightCard("What can improve", p.improving, BRAND.green, [240, 253, 244]);

  // Detailed breakdown title banner on next page
  doc.addPage();
  y = margin + 12;
  
  roundedRect(margin, y, maxW, 46, BRAND.light, BRAND.border);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(...BRAND.navy);
  doc.text("Detailed Link Breakdown", margin + 16, y + 20);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(...BRAND.slate);
  doc.text("All categorized results from the scan are listed below in page-and-rank order.", margin + 16, y + 34);
  
  y += 58;

  // Categorized result lists
  addResultSection("Negative links", p.negative ?? [], [254, 242, 242], BRAND.red);
  addResultSection("Neutral links", p.neutral ?? [], [248, 250, 252], BRAND.slate);
  addResultSection("Positive links", p.positive ?? [], [240, 253, 244], BRAND.green);

  // Two-pass dynamic page numbering and header line
  const totalPages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);

    // Dynamic headers on pages 2+
    if (i > 1) {
      doc.setDrawColor(...BRAND.border);
      doc.setLineWidth(0.5);
      doc.line(margin, margin - 6, pageW - margin, margin - 6);
      
      doc.setFont("helvetica", "bold");
      doc.setFontSize(7.5);
      doc.setTextColor(...BRAND.slate);
      doc.text("FREE ONLINE REPUTATION REPORT", margin, margin - 12);
      
      doc.setFont("helvetica", "normal");
      doc.text(who.toUpperCase(), pageW - margin, margin - 12, { align: "right" });
    }

    // Dynamic footers on all pages
    doc.setDrawColor(...BRAND.border);
    doc.setLineWidth(0.5);
    doc.line(margin, pageH - 24, pageW - margin, pageH - 24);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(...BRAND.slate);
    doc.text("thereputation360.com", margin, pageH - 12);
    doc.text(`Page ${i} of ${totalPages}`, pageW - margin, pageH - 12, { align: "right" });
  }

  const buf = doc.output("arraybuffer");
  return new Uint8Array(buf);
}

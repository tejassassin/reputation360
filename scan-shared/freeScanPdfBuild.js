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
  const margin = 44;
  const maxW = pageW - 2 * margin;
  let y = margin;

  /**
   * @param {string} text
   * @param {string} [style]
   * @param {number} [size]
   * @param {number} [lineHeight]
   */
  function addParagraph(text, style = "normal", size = 10, lineHeight = 13) {
    doc.setFont("helvetica", style);
    doc.setFontSize(size);
    const lines = doc.splitTextToSize(String(text), maxW);
    for (let i = 0; i < lines.length; i++) {
      if (y + lineHeight > pageH - margin) {
        doc.addPage();
        y = margin;
        doc.setFont("helvetica", style);
        doc.setFontSize(size);
      }
      doc.text(lines[i], margin, y);
      y += lineHeight;
    }
  }

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Reputation360 - Free reputation scan", margin, y);
  y += 22;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  const who = `${p.firstName} ${p.lastName}`.trim();
  addParagraph(`${who}\n${p.email}`, "normal", 10, 12);
  y += 6;

  addParagraph(`Reputation score: ${p.reportedScore} / 85`, "bold", 12, 15);
  addParagraph(`Presence: ${p.presenceLabel}`, "normal", 10, 13);
  y += 4;

  addParagraph("Summary", "bold", 11, 14);
  addParagraph(p.summary, "normal", 10, 13);
  y += 4;

  addParagraph("What may be hurting your reputation", "bold", 11, 14);
  addParagraph(p.hurting, "normal", 10, 13);
  y += 4;

  addParagraph("What can improve your online presence", "bold", 11, 14);
  addParagraph(p.improving, "normal", 10, 13);
  y += 8;

  addParagraph("Query analyzed", "bold", 11, 14);
  addParagraph(p.searchQueryUsed, "normal", 9, 12);
  y += 8;

  /** @param {string} title @param {ScanPdfRow[]} rows */
  function addResultBlock(title, rows) {
    if (!rows.length) return;
    addParagraph(title, "bold", 11, 14);
    const sorted = [...rows].sort((a, b) => a.rank - b.rank);
    for (const r of sorted.slice(0, 40)) {
      const block = `#${r.rank} ${r.title}\n${r.displayLink || r.link}\n${r.snippet}\nTag: ${r.sentiment}`;
      addParagraph(block, "normal", 8, 10);
      y += 4;
    }
  }

  addResultBlock("Negative-tagged results", p.negative ?? []);
  addResultBlock("Neutral-tagged results", p.neutral ?? []);
  addResultBlock("Positive-tagged results", p.positive ?? []);

  y += 6;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8);
  doc.setTextColor(100);
  const footLines = doc.splitTextToSize("thereputation360.com", maxW);
  for (const line of footLines) {
    if (y + 12 > pageH - margin) {
      doc.addPage();
      y = margin;
    }
    doc.text(line, margin, y);
    y += 11;
  }
  doc.setTextColor(0);

  const buf = doc.output("arraybuffer");
  return new Uint8Array(buf);
}

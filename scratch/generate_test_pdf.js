import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { buildReputationScanPdfBytes } from "../scan-shared/freeScanPdfBuild.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const positiveLinks = [];
for (let rank = 1; rank <= 30; rank++) {
  if (rank === 10) continue; // rank 10 is negative
  positiveLinks.push({
    rank,
    title: rank === 1 ? "About - Dr. Douglas Wine's Lyme Disease Blog" : `Dr. Douglas Wine's Professional Profile & Research - Link ${rank}`,
    link: rank === 1 ? "https://drdouglaswine.net" : `https://drdouglaswine-profile-${rank}.org`,
    displayLink: rank === 1 ? "drdouglaswine.net" : `drdouglaswine-profile-${rank}.org`,
    snippet: rank === 1 
      ? "He has been a renowned Doctor of Chiropractic who has dedicated over 45 years to helping people achieve better health and wellness."
      : `This page displays professional information, accomplishments, articles, and reviews for Dr. Douglas Wine at rank ${rank} in Google search results.`,
    sentiment: "positive"
  });
}

const mockData = {
  firstName: "Dr. Douglas",
  lastName: "Wine",
  email: "sakshisharda559@gmail.com",
  searchQueryUsed: "Dr. Douglas Wine (United States)",
  reportedScore: 60,
  presenceLabel: "Growth Opportunities Identified",
  summary: "We analyzed the first 3 pages of Google-style results for your name (30 links found, up to 30). We tagged 29 positive, 0 neutral, and 1 negative results based on public perception impact. Penalty-based reputation score: 60 / 80 (B grade). Growth Opportunities Identified",
  hurting: "• Page 1, rank 10: [PDF] board-actions-chiropractic-examiners-wine-douglas-voluntary ... (oplc.nh.gov) - Legal or regulator visibility: the search snippet shows \"I admit that this Voluntary Permanent Surrender of License has occurred in settlement of pending misconduct allegations from the Commonwealth of. Massachusetts,\" - Why it matters:",
  improving: "• Address the oplc.nh.gov result at rank 10: prepare a factual context page or professional bio that explains the current status in neutral language, then support it with authoritative profiles and relevant citations.\n• Reinforce the positive drdouglaswine.net result at rank 1: make sure the page uses",
  positive: positiveLinks,
  neutral: [],
  negative: [
    { rank: 10, title: "[PDF] board-actions-chiropractic-examiners-wine-douglas-voluntary ...", link: "https://oplc.nh.gov/board-actions-chiropractic-examiners-wine-douglas-voluntary", displayLink: "oplc.nh.gov", snippet: "I admit that this Voluntary Permanent Surrender of License has occurred in settlement of pending misconduct allegations from the Commonwealth of. Massachusetts,", sentiment: "negative" }
  ]
};

try {
  const bytes = buildReputationScanPdfBytes(mockData);
  const outputPath = path.join(__dirname, "test_report.pdf");
  fs.writeFileSync(outputPath, bytes);
  console.log("Successfully generated PDF at:", outputPath);
} catch (err) {
  console.error("Error generating PDF:", err);
}

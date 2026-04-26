import case01 from "./case-01.js";
import case02 from "./case-02.js";
import case03 from "./case-03.js";
import case04 from "./case-04.js";
import case05 from "./case-05.js";
import case06 from "./case-06.js";
import case07 from "./case-07.js";
import case08 from "./case-08.js";
import case09 from "./case-09.js";
import case10 from "./case-10.js";
import case11 from "./case-11.js";
import case12 from "./case-12.js";
import case13 from "./case-13.js";
import case14 from "./case-14.js";
import case15 from "./case-15.js";
import case16 from "./case-16.js";
import { slugifyCaseStudyListTitle } from "../../lib/caseStudySlug.js";

/** Fixed audience verticals for filtering; each case study uses exactly one. */
export const INDUSTRY_CATEGORIES = [
  "Financial Advisors",
  "Job Seekers",
  "Doctors & Healthcare Professionals",
  "Lawyers & Attorneys",
  "Executives & C-Suite Leaders",
  "Businesses & Companies",
];

const CASE_STUDIES_RAW = [
  case01,
  case02,
  case03,
  case04,
  case05,
  case06,
  case07,
  case08,
  case09,
  case10,
  case11,
  case12,
  case13,
  case14,
  case15,
  case16,
];

const seen = new Set();
export const CASE_STUDIES = CASE_STUDIES_RAW.map((c) => {
  const slug =
    c.slug && String(c.slug).trim() !== ""
      ? String(c.slug).trim()
      : slugifyCaseStudyListTitle(c.listTitle);
  if (seen.has(slug)) {
    throw new Error(`Duplicate case study slug for n=${c.n}: "${slug}"`);
  }
  seen.add(slug);
  return { ...c, slug };
});

export const CASE_STUDIES_FOOTER =
  "All case studies are anonymised in line with client confidentiality. Names, firms, and all identifying details have been withheld or generalised throughout.";

const MAX_N = 16;

/** @param {number} n */
export function getCaseStudyByN(n) {
  if (typeof n !== "number" || n < 1 || n > MAX_N) return null;
  return CASE_STUDIES.find((s) => s.n === n) ?? null;
}

/** @param {string} slug - path segment, e.g. "executive-and-founder-reputation-management" */
export function getCaseStudyBySlug(slug) {
  if (typeof slug !== "string" || !slug.trim()) return null;
  const s = decodeURIComponent(slug).trim();
  return CASE_STUDIES.find((cs) => cs.slug === s) ?? null;
}

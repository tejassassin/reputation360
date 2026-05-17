import { AUDIENCE_PATH } from "../constants/whoWeServePaths.js";

/**
 * Copy shown above the case study CTA, with a link to the matching Who we serve audience page.
 * Use ASCII hyphen-minus only (no em dash).
 */
const BRIDGE_BY_INDUSTRY = {
  Individuals: {
    href: AUDIENCE_PATH.individuals,
    title: "Individuals",
    body: "Learn how we help you build your personal brand online - showcasing your achievements, eliminating outdated content, and ensuring your best self is what people find first.",
  },
  "Financial Advisors": {
    href: AUDIENCE_PATH.financialAdvisors,
    title: "Financial Advisors",
    body: "Understand how we establish unshakeable client trust - amplifying your expertise, suppressing misleading reviews, and making sure your credibility is what clients see when they search.",
  },
  "Executives & C-Suite Leaders": {
    href: AUDIENCE_PATH.executives,
    title: "Executives & C-Suite Leaders",
    body: "See how we safeguard your leadership image - amplifying what makes you credible, burying damaging claims, and ensuring the narrative around you stays in your control.",
  },
  "Doctors & Healthcare Professionals": {
    href: AUDIENCE_PATH.doctors,
    title: "Doctors & Healthcare Professionals",
    body: "Find out how we build patient confidence - promoting your credentials and genuine testimonials while ensuring false claims and unfair reviews never overshadow your actual expertise.",
  },
  "Lawyers & Attorneys": {
    href: AUDIENCE_PATH.lawyers,
    title: "Lawyers & Attorneys",
    body:
      "Discover how we strengthen your practice's reputation - showcasing your wins, pushing down adverse results, and making sure your track record is what clients discover first.",
  },
  "Job Seekers": {
    href: AUDIENCE_PATH.jobSeekers,
    title: "Job Seekers",
    body: "See how we get recruiters to find your real story - ranking your achievements and portfolio at the top, while keeping unflattering content completely out of sight.",
  },
  "Businesses & Companies": {
    href: AUDIENCE_PATH.businesses,
    title: "Businesses & Companies",
    body: "Learn how we make your brand dominate search results - boosting customer trust through positive reviews, neutralizing negative content, and ensuring your reputation is bulletproof.",
  },
};

const DEFAULT_KEY = "Individuals";

/**
 * @param {string} industry - from case study `industry` field
 * @returns {{ href: string; title: string; body: string }}
 */
export function getCaseStudyWhoWeServeBridge(industry) {
  const key = typeof industry === "string" ? industry.trim() : "";
  if (key && BRIDGE_BY_INDUSTRY[key]) {
    return BRIDGE_BY_INDUSTRY[key];
  }
  return BRIDGE_BY_INDUSTRY[DEFAULT_KEY];
}

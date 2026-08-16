/**
 * Plain service copy for UI and JSON-LD (icons live in reputationServices.jsx).
 */
import {
  NEGATIVE_LINK_SUPPRESSION_PATH,
  ONLINE_REPUTATION_MANAGEMENT_PATH,
  REPUTATION_BUILDING_SERVICES_PATH,
} from "../constants/servicePaths.js";

const RBS_SERVICES_SECTION = `${REPUTATION_BUILDING_SERVICES_PATH}#services`;

/** @typedef {{ id: string; navLabel: string; title: string; description: string; url: string }} ReputationServiceCatalogItem */

/** @type {ReputationServiceCatalogItem[]} */
export const reputationServicesCatalog = [
  {
    id: "orm-suppression",
    navLabel: "ORM & search recovery",
    title: "Online Reputation Management",
    url: ONLINE_REPUTATION_MANAGEMENT_PATH,
    description:
      "We strengthen positive search results and reduce the visibility of harmful, misleading, or outdated content through compliant ORM and outranking strategies",
  },
  {
    id: "negative-link-suppression",
    navLabel: "Negative Link Suppression",
    title: "Negative Link Suppression",
    url: NEGATIVE_LINK_SUPPRESSION_PATH,
    description:
      "We systematically displace damaging, misleading, and outdated links from page one of Google and replace them with an accurate, authoritative search presence",
  },
  {
    id: "employer-branding",
    navLabel: "Employer brand",
    title: "Employer Branding & Talent Reputation",
    url: RBS_SERVICES_SECTION,
    description:
      "We build an authentic employer narrative that reflects your culture, values, and leadership so people trust what they see before they ever speak to you.",
  },
  {
    id: "content-leadership",
    navLabel: "Content & thought leadership",
    title: "Thought Leadership & Editorial Visibility",
    url: RBS_SERVICES_SECTION,
    description:
      "Strategic content that builds authority, educates your audience, and positions you as a credible voice in your industry.",
  },
  {
    id: "linkedin-branding",
    navLabel: "LinkedIn branding",
    title: "LinkedIn Personal Branding",
    url: RBS_SERVICES_SECTION,
    description:
      "Building authority and visibility through strategic storytelling, consistent high-quality content, and thought leadership that resonates with the right audience.",
  },
  {
    id: "performance-marketing",
    navLabel: "Performance marketing",
    title: "Performance Marketing for Reputation Growth",
    url: RBS_SERVICES_SECTION,
    description:
      "Paid visibility that amplifies authoritative reputation assets so the right decision-makers, candidates, and clients see your strongest content.",
  },
  {
    id: "consultation",
    navLabel: "Consultation",
    title: "Reputation Consultation",
    url: "/contact",
    description:
      "Strategic reputation consultation built on experience, not theory - offering clarity, course correction, and measurable impact.",
  },
  {
    id: "branding",
    navLabel: "Branding",
    title: "Brand Strategy & Reputation Positioning",
    url: RBS_SERVICES_SECTION,
    description:
      "We help your audience recognize your brand the way you intend - building connection, trust, and momentum for growth.",
  },
];

export const CORE_SERVICE_ID = "orm-suppression";

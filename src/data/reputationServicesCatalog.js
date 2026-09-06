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
    id: "social-media",
    navLabel: "Social media ORM",
    title: "Social Media Online Reputation Management",
    url: RBS_SERVICES_SECTION,
    description:
      "We shape how you appear across social platforms so the profile, posts, and proof people find there match the reputation you want to own.",
  },
  {
    id: "ai-orm",
    navLabel: "AI ORM",
    title: "AI Online Reputation Management",
    url: ONLINE_REPUTATION_MANAGEMENT_PATH,
    description:
      "We strengthen how you appear in AI Overviews and other AI-powered search experiences, not only classic Google results.",
  },
  {
    id: "reputation-building",
    navLabel: "Reputation building",
    title: "Reputation Building Services",
    url: REPUTATION_BUILDING_SERVICES_PATH,
    description:
      "Personal branding, LinkedIn authority, social presence, and positioning that strengthen how you are perceived beyond search results.",
  },
];

export const CORE_SERVICE_ID = "orm-suppression";

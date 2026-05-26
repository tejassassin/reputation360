/**
 * Core Reputation360 services for /services JSON-LD (Google Service markup).
 */

/** @typedef {{ id: string; name: string; description: string }} PrimaryService */

/** @type {PrimaryService[]} */
export const PRIMARY_SERVICES_CATALOG = [
  {
    id: "online-reputation-management",
    name: "Online Reputation Management",
    description:
      "Comprehensive online reputation management that strengthens positive search results, builds credible digital presence, and reduces the visibility of harmful or outdated content through compliant ORM strategy.",
  },
  {
    id: "negative-link-suppression",
    name: "Negative Link Suppression",
    description:
      "Strategic suppression of negative links and unwanted search results so accurate, positive content outranks damaging material on Google and other search engines.",
  },
  {
    id: "reputation-recovery",
    name: "Reputation Recovery",
    description:
      "Structured reputation recovery for individuals and brands after crises, bad press, or review attacks - restoring trust with monitoring, content, and search visibility work.",
  },
  {
    id: "personal-reputation-management",
    name: "Personal Reputation Management",
    description:
      "Personal reputation management for executives, professionals, and public figures - protecting your name in search, social, and AI-generated answers before high-stakes decisions.",
  },
  {
    id: "business-reputation-management",
    name: "Business Reputation Management",
    description:
      "Business reputation management for companies and brands - improving reviews, search results, and third-party mentions so prospects see a fair, current picture of your business.",
  },
];

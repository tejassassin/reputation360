import {
  NEGATIVE_LINK_SUPPRESSION_PATH,
  ONLINE_REPUTATION_MANAGEMENT_PATH,
  REPUTATION_BUILDING_SERVICES_PATH,
} from "../constants/servicePaths.js";

/** Dedicated service pages linked from /services and site nav. */
export const SERVICE_HUB_LINKS = [
  {
    href: ONLINE_REPUTATION_MANAGEMENT_PATH,
    title: "Online Reputation Management",
    description:
      "Interactive service guide: what we do, timelines, methodology, FAQs, and how we strengthen your search results.",
    badge: "Full service guide",
  },
  {
    href: NEGATIVE_LINK_SUPPRESSION_PATH,
    title: "Negative Link Suppression",
    description:
      "How we push damaging links off page one: removal vs. suppression, feasibility, process, timelines, and FAQs.",
    badge: "Suppression guide",
  },
  {
    href: REPUTATION_BUILDING_SERVICES_PATH,
    title: "Reputation Building Services",
    description:
      "Specialized reputation-building guides for personal branding, LinkedIn authority, employer branding, thought leadership, social reputation, and brand positioning.",
    badge: "Depth guide",
  },
];

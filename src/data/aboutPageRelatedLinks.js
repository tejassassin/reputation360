/**
 * Related links for the About page prerender + UI sections.
 * @typedef {{ href: string; label: string }} RelatedLink
 */

export const ABOUT_WORK_IN_ACTION_SUBHEADING =
  "A sample of results we've delivered for our clients";

/** @type {RelatedLink[]} */
export const ABOUT_WORK_IN_ACTION_LINKS = [
  {
    href: "/case-studies/the-review-that-almost-ended-the-surgeons-career",
    label: "The Review That Almost Ended The Surgeon's Career",
  },
  {
    href: "/case-studies/startup-reputation-recovery-after-funding-controversy",
    label: "Startup Reputation Recovery After Funding Controversy",
  },
  {
    href: "/case-studies/the-graduate-and-the-incident-that-followed-him-online",
    label: "The Graduate and the Incident That Followed Him Online",
  },
];

export const ABOUT_FURTHER_READING_SUBHEADING =
  "Learn how online reputation management actually works";

/** @type {RelatedLink[]} */
export const ABOUT_FURTHER_READING_LINKS = [
  {
    href: "/blog/online-reputation-management-best-practices-reputation360-methodology",
    label: "Online Reputation Management Best Practices",
  },
  {
    href: "/blog/how-long-does-it-take-to-fix-online-reputation",
    label: "How Long Does It Take to Fix an Online Reputation?",
  },
  {
    href: "/blog/hidden-cost-ignoring-online-reputation-reputation360-analysis",
    label: "The Hidden Cost of Ignoring Your Online Reputation",
  },
];

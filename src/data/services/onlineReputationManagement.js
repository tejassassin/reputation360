import { ONLINE_REPUTATION_MANAGEMENT_PATH } from "../../constants/servicePaths.js";

export const ORM_PAGE_PATH = ONLINE_REPUTATION_MANAGEMENT_PATH;

export const ormPageSeoTitle =
  "Online Reputation Management Services | Reputation360";

export const ormPageMetaDescription =
  "Take control of what people find when they search your name. Reputation360 delivers proven online reputation management for executives, founders, and brands across the US, Canada, and Australia. Book a free consultation.";

export const ormPageHero = {
  title: "Your Reputation Lives on Page One. Make Sure It Works For You.",
  lead:
    "Online reputation management is no longer optional — for executives, founders, professionals, and businesses, it is the difference between being trusted and being overlooked. Reputation360 helps individuals and brands take control of what people find when they search online, so the first impression you make is one you chose.",
};

/** Section order matches the ORM services Google Doc (same as original blog guide). */
export const ORM_GUIDE_NAV = [
  {
    id: "what-is-orm",
    label: "What Is Online Reputation Management?",
    navLabel: "What Is ORM?",
  },
  {
    id: "why-matters",
    label: "Why Your Online Reputation Matters More Than Ever",
    navLabel: "Why It Matters",
  },
  {
    id: "ranking-factors",
    label: "Why Negative Articles Rank So Well in Search Results",
    navLabel: "Why Negative Ranks",
  },
  {
    id: "benefits",
    label: "The Benefits of Online Reputation Management",
    navLabel: "Benefits",
  },
  {
    id: "who-needs",
    label: "Who Needs Online Reputation Management?",
    navLabel: "Who Needs ORM",
  },
  {
    id: "whats-included",
    label: "What Our Online Reputation Management Service Includes",
    navLabel: "What's Included",
  },
  {
    id: "process",
    label: "Our Process: How We Deliver Results",
    navLabel: "Our Process",
  },
  {
    id: "before-outreach",
    label: "Is There Anything You Can Do Before Reaching Out?",
    navLabel: "Before You Reach Out",
  },
  { id: "why-r360", label: "Why Reputation360?", navLabel: "Why Reputation360" },
  { id: "faq", label: "Frequently Asked Questions", navLabel: "FAQ" },
  {
    id: "start",
    label: "Take Control of Your Online Reputation Today",
    navLabel: "Get Started",
  },
];

export const ORM_SCROLL_TARGET_CLASS = "scroll-mt-36 md:scroll-mt-40";

export const ORM_SCROLL_SPY_ORDER = ORM_GUIDE_NAV.map((item) => item.id);

/** @deprecated Use ORM_GUIDE_NAV */
export const ormPageToc = ORM_GUIDE_NAV;

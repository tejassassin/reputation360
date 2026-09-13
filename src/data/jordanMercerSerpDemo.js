/** Shared Jordan Mercer SERP demo (homepage + About mockups). */

export const JORDAN_MERCER_DEMO_NAME = "Jordan Mercer";
export const JORDAN_MERCER_DEMO_SLUG = "jordan-mercer";
export const JORDAN_MERCER_QUERY_TAIL = "founder";

export const JORDAN_MERCER_BEFORE_RESULTS = [
  {
    num: "01",
    title: "SEC.gov - Administrative proceeding: executive disclosure matter",
    url: "sec.gov/litigation/admin-proceedings/2024-042",
    snippet:
      "Official docket language that outranks biographies when someone searches the name.",
    trend: "down",
    value: "-3",
  },
  {
    num: "02",
    title: "Federal Register - Civil penalty notice, advisory firm",
    url: "federalregister.gov/documents/enforcement-notice",
    snippet: "Penalty notice indexed against the firm and still surfacing on page one.",
    trend: "down",
    value: "-2",
  },
  {
    num: "03",
    title: "The Guardian - Investigation raises questions over founder's financial ties",
    url: "theguardian.com/business/investigation-financial-ties",
    snippet: "Investigative framing that omits later context and outcomes.",
    trend: "down",
    value: "-1",
  },
];

export const JORDAN_MERCER_AFTER_RESULTS = [
  {
    num: "01",
    title: "Jordan Mercer: Investment Leadership and Insights",
    url: `example.com/${JORDAN_MERCER_DEMO_SLUG}`,
    snippet: "Founder bio and leadership profile on a domain you control.",
    trend: "up",
    value: "+5",
  },
  {
    num: "02",
    title: "Industry Journal: Jordan Mercer on Navigating Market Volatility",
    url: `industryjournal.example/${JORDAN_MERCER_DEMO_SLUG}`,
    snippet: "Byline and thought leadership on navigating market volatility.",
    trend: "new",
    value: "NEW",
  },
  {
    num: "03",
    title: "LinkedIn: Jordan Mercer, Founder",
    url: `profile.example/${JORDAN_MERCER_DEMO_SLUG}`,
    snippet:
      "Updated headline, experience, and recommendations aligned with your narrative.",
    trend: "up",
    value: "+2",
  },
];

/** Extra About-only rows shown after the shared first screen (same campaign story). */
export const JORDAN_MERCER_BEFORE_DEEPER = [
  {
    num: "04",
    title: `Scraped profile - outdated title for ${JORDAN_MERCER_DEMO_NAME}`,
    url: "data-agg.site/profile/jordan-mercer",
    snippet: "Third-party aggregator with the wrong employer and year.",
    trend: "down",
    value: "-5",
  },
  {
    num: "05",
    title: `Sponsored directory - duplicate listing`,
    url: "bizlistings.co/jordan-mercer",
    snippet: "Low-quality citation cluttering branded queries.",
    trend: "down",
    value: "-3",
  },
];

export const JORDAN_MERCER_AFTER_DEEPER = [
  {
    num: "04",
    title: `Keynote - ${JORDAN_MERCER_DEMO_NAME} on responsible growth`,
    url: "conference.io/agenda/jordan-mercer",
    snippet: "Authoritative event page with video and transcript excerpts.",
    trend: "up",
    value: "+2",
  },
  {
    num: "05",
    title: `Nonprofit board - ${JORDAN_MERCER_DEMO_NAME}`,
    url: "brightfuture.org/board",
    snippet: "Mission-aligned visibility that reinforces trust signals.",
    trend: "up",
    value: "+2",
  },
];

export const JORDAN_MERCER_AFTER_BURIED = {
  title: "Old aggregator snippet - superseded",
  url: "data-agg.site/profile/jordan-mercer",
  snippet: "This result now sits far below accurate, authoritative pages.",
};

import { AUDIENCE_PATH } from "../constants/whoWeServePaths.js";
import { blogPostPath } from "../constants/blogPaths.js";

/**
 * @typedef {{ href: string; label: string }} FurtherReadingLink
 * @typedef {{ intro: string; links: FurtherReadingLink[] }} FurtherReadingConfig
 */

/** @type {Record<string, FurtherReadingConfig>} */
export const WHO_WE_SERVE_FURTHER_READING = {
  [AUDIENCE_PATH.lawyers]: {
    intro: "Guides on legal reputation, removals, and high-stakes search results:",
    links: [
      {
        href: blogPostPath("remove-court-records-google-reputation360"),
        label: "How to Remove Court Records From Google",
      },
      {
        href: blogPostPath("can-you-remove-news-articles-from-google-search"),
        label: "Can You Remove News Articles from Google Search?",
      },
      {
        href: blogPostPath("negative-links-cost-jobs-deals-real-cases-reputation360"),
        label: "Negative Links That Cost Jobs and Deals - Real Cases",
      },
    ],
  },
  [AUDIENCE_PATH.doctors]: {
    intro: "Practical articles on healthcare reputation and search recovery:",
    links: [
      {
        href: blogPostPath("how-to-suppress-negative-content-professionals-guide"),
        label: "How to Suppress Negative Content - A Professional's Guide",
      },
      {
        href: blogPostPath("remove-negative-search-results-from-google"),
        label: "Remove Negative Search Results from Google",
      },
      {
        href: blogPostPath("monitoring-online-reputation-tools-tactics-reputation360"),
        label: "Monitoring Your Online Reputation: Tools & Tactics",
      },
    ],
  },
  [AUDIENCE_PATH.executives]: {
    intro: "Strategy and leadership-focused reputation reading:",
    links: [
      {
        href: blogPostPath("crisis-management-reputation-recovery-reputation360-playbook"),
        label: "Crisis Management and Reputation Recovery: The Playbook",
      },
      {
        href: blogPostPath("own-your-first-page-control-google-results-reputation360"),
        label: "Own Your First Page: How to Control Your Google Results",
      },
      {
        href: blogPostPath("why-first-google-result-matters-psychology-reputation360"),
        label: "Why Your First Google Results Matter",
      },
    ],
  },
  [AUDIENCE_PATH.jobSeekers]: {
    intro: "Written for job seekers preparing for recruiter searches:",
    links: [
      {
        href: blogPostPath("fix-reputation-before-job-interview-reputation360-guide"),
        label: "How to Fix Your Reputation Before Your Job Interview",
      },
      {
        href: blogPostPath("what-recruiters-google-about-you-reputation360-insider-report"),
        label: "What Do Recruiters Google About You?",
      },
      {
        href: blogPostPath("linkedin-profile-optimization-search-results-reputation360-checklist"),
        label: "LinkedIn Profile Optimization for Search Results",
      },
    ],
  },
  [AUDIENCE_PATH.financialAdvisors]: {
    intro: "Insights on trust, ROI, and suppressing harmful search results:",
    links: [
      {
        href: blogPostPath("roi-reputation-management-what-clients-see-reputation360"),
        label: "The ROI of Reputation Management: What Our Clients See",
      },
      {
        href: blogPostPath("negative-links-cost-jobs-deals-real-cases-reputation360"),
        label: "Negative Links That Cost Jobs and Deals - Real Cases",
      },
      {
        href: blogPostPath("how-to-suppress-negative-search-results-reputation360-framework"),
        label: "How to Suppress Negative Search Results: The Framework",
      },
    ],
  },
  [AUDIENCE_PATH.businesses]: {
    intro: "Long-form guides on brand reputation, crisis, and social presence:",
    links: [
      {
        href: blogPostPath("hidden-cost-ignoring-online-reputation-reputation360-analysis"),
        label: "The Hidden Cost of Ignoring Your Online Reputation",
      },
      {
        href: blogPostPath("crisis-management-reputation-recovery-reputation360-playbook"),
        label: "Crisis Management and Reputation Recovery: The Playbook",
      },
      {
        href: blogPostPath(
          "social-media-reputation-management-multi-platform-strategy-reputation360",
        ),
        label: "Social Media Reputation Management: Multi-Platform Strategy",
      },
    ],
  },
  [AUDIENCE_PATH.individuals]: {
    intro: "Self-help and professional guides for personal search results:",
    links: [
      {
        href: blogPostPath("how-to-suppress-negative-content-professionals-guide"),
        label: "How to Suppress Negative Content - A Professional's Guide",
      },
      {
        href: blogPostPath("old-social-media-posts-showing-up-google-reputation360-guide"),
        label: "Dealing With Old Social Media Posts That Show Up on Google",
      },
      {
        href: blogPostPath("diy-online-reputation-management-complete-guide"),
        label: "DIY Online Reputation Management: The Complete Guide",
      },
    ],
  },
  [AUDIENCE_PATH.realEstate]: {
    intro: "Insights on reputation suppression, local SEO, and managing real estate search results:",
    links: [
      {
        href: blogPostPath("how-to-suppress-negative-search-results-reputation360-framework"),
        label: "How to Suppress Negative Search Results: The Framework",
      },
      {
        href: blogPostPath("how-to-suppress-negative-content-professionals-guide"),
        label: "How to Suppress Negative Content - A Professional's Guide",
      },
      {
        href: blogPostPath("roi-reputation-management-what-clients-see-reputation360"),
        label: "The ROI of Reputation Management: What Our Clients See",
      },
    ],
  },
};

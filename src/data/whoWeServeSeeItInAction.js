import { AUDIENCE_PATH } from "../constants/whoWeServePaths.js";

/**
 * @typedef {{ href: string; label: string }} SeeItInActionLink
 * @typedef {{ intro: string; links: SeeItInActionLink[] }} SeeItInActionConfig
 */

/** @type {Record<string, SeeItInActionConfig>} */
export const WHO_WE_SERVE_SEE_IT_IN_ACTION = {
  [AUDIENCE_PATH.lawyers]: {
    intro: "Real cases from legal professionals we've helped:",
    links: [
      {
        href: "/case-studies/the-litigation-partner-and-the-losing-verdict",
        label: "The Litigation Partner and the Losing Verdict",
      },
      {
        href: "/case-studies/the-family-lawyer-and-the-client-vendetta",
        label: "The Family Lawyer and the Client Vendetta",
      },
      {
        href: "/case-studies/hr-and-employment-dispute-reputation-management",
        label: "HR & Employment Dispute Reputation Management",
      },
    ],
  },
  [AUDIENCE_PATH.doctors]: {
    intro: "Real cases from healthcare professionals we've helped:",
    links: [
      {
        href: "/case-studies/the-review-that-almost-ended-the-surgeons-career",
        label: "The Review That Almost Ended The Surgeon's Career",
      },
      {
        href: "/case-studies/the-gp-and-the-misattributed-article",
        label: "The GP and the Misattributed Article",
      },
      {
        href: "/case-studies/medical-and-healthcare-reputation-management",
        label: "Medical & Healthcare Reputation Management",
      },
    ],
  },
  [AUDIENCE_PATH.executives]: {
    intro: "Real cases from executives and founders we've helped:",
    links: [
      {
        href: "/case-studies/executive-and-founder-reputation-management",
        label: "Executive & Founder Reputation Management",
      },
      {
        href: "/case-studies/startup-reputation-recovery-after-funding-controversy",
        label: "Startup Reputation Recovery After Funding Controversy",
      },
    ],
  },
  [AUDIENCE_PATH.jobSeekers]: {
    intro: "Real cases from job seekers and professionals we've helped:",
    links: [
      {
        href: "/case-studies/the-graduate-and-the-incident-that-followed-him-online",
        label: "The Graduate and the Incident That Followed Him Online",
      },
      {
        href: "/case-studies/the-senior-product-manager-and-the-glassdoor-problem",
        label: "The Senior Product Manager and the Glassdoor Problem",
      },
      {
        href: "/case-studies/hr-and-employment-dispute-reputation-management",
        label: "HR & Employment Dispute Reputation Management",
      },
    ],
  },
  [AUDIENCE_PATH.financialAdvisors]: {
    intro: "Real cases from financial professionals we've helped:",
    links: [
      {
        href: "/case-studies/the-ifa-and-the-collapsed-investment-fund",
        label: "The IFA and the Collapsed Investment Fund",
      },
      {
        href: "/case-studies/financial-professional-reputation-recovery",
        label: "Financial Professional Reputation Recovery",
      },
      {
        href: "/case-studies/the-accountant-and-the-wrongful-dismissal-headline",
        label: "The Accountant and the Wrongful Dismissal Headline",
      },
    ],
  },
  [AUDIENCE_PATH.businesses]: {
    intro: "Real cases from businesses we've helped:",
    links: [
      {
        href: "/case-studies/e-commerce-and-retail-brand-recovery",
        label: "E-commerce & Retail Brand Recovery",
      },
      {
        href: "/case-studies/e-commerce-brand-recovery-after-counterfeit-allegations",
        label: "E-commerce Brand Recovery After Counterfeit Allegations",
      },
      {
        href: "/case-studies/consumer-electronics-product-crisis-recovery",
        label: "Consumer Electronics - Product Crisis Recovery",
      },
    ],
  },
  [AUDIENCE_PATH.individuals]: {
    intro: "Real cases from individuals we've helped:",
    links: [
      {
        href: "/case-studies/the-graduate-and-the-incident-that-followed-him-online",
        label: "The Graduate and the Incident That Followed Him Online",
      },
      {
        href: "/case-studies/hr-and-employment-dispute-reputation-management",
        label: "HR & Employment Dispute Reputation Management",
      },
      {
        href: "/case-studies/the-accountant-and-the-wrongful-dismissal-headline",
        label: "The Accountant and the Wrongful Dismissal Headline",
      },
    ],
  },
  [AUDIENCE_PATH.realEstate]: {
    intro: "Real cases from real estate professionals and local businesses we've helped:",
    links: [
      {
        href: "/case-studies/financial-professional-reputation-recovery",
        label: "Financial Professional Reputation Recovery",
      },
      {
        href: "/case-studies/the-accountant-and-the-wrongful-dismissal-headline",
        label: "The Accountant and the Wrongful Dismissal Headline",
      },
      {
        href: "/case-studies/hr-and-employment-dispute-reputation-management",
        label: "HR & Employment Dispute Reputation Management",
      },
    ],
  },
};

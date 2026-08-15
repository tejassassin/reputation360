import { AUDIENCE_PATH } from "../constants/whoWeServePaths.js";

const CASE_STUDY_BASE = "/case-studies";

/** @type {import("../components/services/ServicePageRelatedOutcomesSection.jsx").ServicePageRelatedOutcomesSection extends never ? never : { id: string, heading: string, parts: Array<{ text: string, href?: string }> }} */
export const ORM_RELATED_OUTCOMES = {
  id: "related-outcomes",
  heading: "See this in practice",
  parts: [
    {
      text: "We work with individuals, executives and C-suite leaders, and businesses and companies facing search results that no longer reflect who they are today. Outcomes like ",
    },
    {
      text: "executive and founder reputation management",
      href: `${CASE_STUDY_BASE}/executive-and-founder-reputation-management`,
    },
    { text: ", " },
    {
      text: "medical and healthcare reputation management",
      href: `${CASE_STUDY_BASE}/medical-and-healthcare-reputation-management`,
    },
    { text: ", and " },
    {
      text: "the senior product manager and the Glassdoor problem",
      href: `${CASE_STUDY_BASE}/the-senior-product-manager-and-the-glassdoor-problem`,
    },
    {
      text: " show how a full online reputation management engagement moves page one over time. Explore who we serve: ",
    },
    { text: "individuals", href: AUDIENCE_PATH.individuals },
    { text: ", " },
    { text: "executives and C-suite leaders", href: AUDIENCE_PATH.executives },
    { text: ", and " },
    { text: "businesses and companies", href: AUDIENCE_PATH.businesses },
    { text: "." },
  ],
};

export const NLS_RELATED_OUTCOMES = {
  id: "related-outcomes",
  heading: "See this in practice",
  parts: [
    {
      text: "Negative link suppression is how we help ",
    },
    { text: "lawyers and attorneys", href: AUDIENCE_PATH.lawyers },
    { text: ", " },
    { text: "financial advisors", href: AUDIENCE_PATH.financialAdvisors },
    { text: ", and " },
    { text: "doctors and healthcare professionals", href: AUDIENCE_PATH.doctors },
    {
      text: " when harmful URLs will not come down on their own. Representative cases include ",
    },
    {
      text: "the litigation partner and the losing verdict",
      href: `${CASE_STUDY_BASE}/the-litigation-partner-and-the-losing-verdict`,
    },
    { text: ", " },
    {
      text: "the IFA and the collapsed investment fund",
      href: `${CASE_STUDY_BASE}/the-ifa-and-the-collapsed-investment-fund`,
    },
    { text: ", and " },
    {
      text: "startup reputation recovery after funding controversy",
      href: `${CASE_STUDY_BASE}/startup-reputation-recovery-after-funding-controversy`,
    },
    { text: "." },
  ],
};

export const RBS_RELATED_OUTCOMES = {
  id: "related-outcomes",
  heading: "See this in practice",
  parts: [
    {
      text: "Reputation building services help ",
    },
    { text: "job seekers", href: AUDIENCE_PATH.jobSeekers },
    { text: " and " },
    { text: "individuals", href: AUDIENCE_PATH.individuals },
    {
      text: " establish the positive assets that define them in search. Read how that played out in ",
    },
    {
      text: "the graduate and the incident that followed him online",
      href: `${CASE_STUDY_BASE}/the-graduate-and-the-incident-that-followed-him-online`,
    },
    { text: " and " },
    {
      text: "financial professional reputation recovery",
      href: `${CASE_STUDY_BASE}/financial-professional-reputation-recovery`,
    },
    { text: "." },
  ],
};

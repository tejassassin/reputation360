import IndividualsPage from "@/pages/IndividualsPage.jsx";
import FinancialAdvisorsPage from "@/pages/FinancialAdvisorsPage.jsx";
import ExecutivesPage from "@/pages/ExecutivesPage.jsx";
import DoctorsPage from "@/pages/DoctorsPage.jsx";
import LawyersPage from "@/pages/LawyersPage.jsx";
import RealEstatePage from "@/pages/RealEstatePage.jsx";
import JobSeekersPage from "@/pages/JobSeekersPage.jsx";
import BusinessesPage from "@/pages/BusinessesPage.jsx";
import { AUDIENCE_PATH } from "@/constants/whoWeServePaths.js";

/** @type {Record<string, { path: string; Page: import('react').ComponentType<{ renderSeo?: boolean }> }>} */
export const WHO_WE_SERVE_BY_SEGMENT = {
  individual: { path: AUDIENCE_PATH.individuals, Page: IndividualsPage },
  "financial-advisors": { path: AUDIENCE_PATH.financialAdvisors, Page: FinancialAdvisorsPage },
  "executives-and-c-suite-leaders": { path: AUDIENCE_PATH.executives, Page: ExecutivesPage },
  "doctors-and-healthcare-professionals": { path: AUDIENCE_PATH.doctors, Page: DoctorsPage },
  "lawyers-and-attorneys": { path: AUDIENCE_PATH.lawyers, Page: LawyersPage },
  "real-estate-agents-and-brokers": { path: AUDIENCE_PATH.realEstate, Page: RealEstatePage },
  "job-seekers": { path: AUDIENCE_PATH.jobSeekers, Page: JobSeekersPage },
  "businesses-and-companies": { path: AUDIENCE_PATH.businesses, Page: BusinessesPage },
};

import {
  ShieldCheck,
  FileText,
  TrendingUp,
  Linkedin,
  MessageSquare,
} from "lucide-react";
import {
  CORE_SERVICE_ID,
  reputationServicesCatalog,
} from "./reputationServicesCatalog.js";

/**
 * Single source for home “Our Services” and footer service links.
 * Descriptions match the approved client copy (shown under each title).
 */

/** Intro paragraph under the “Our Services” heading on the home page. */
export const OUR_SERVICES_SECTION_INTRO =
  "From suppressing what harms you to building what defines you - services you can combine or deploy on their own.";

const SERVICE_ICONS = {
  "orm-suppression": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13.5 8h-3" />
      <path d="m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3" />
      <path d="M16.899 22A5 5 0 0 0 7.1 22" />
      <path d="m9 2 3 6" />
      <circle cx="12" cy="15" r="3" />
    </svg>
  ),
  "employer-branding": <ShieldCheck className="h-7 w-7" strokeWidth={1.75} />,
  "content-leadership": <FileText className="h-7 w-7" strokeWidth={1.75} />,
  "linkedin-branding": <Linkedin className="h-7 w-7" strokeWidth={1.75} />,
  "performance-marketing": <TrendingUp className="h-7 w-7" strokeWidth={1.75} />,
  consultation: <MessageSquare className="h-7 w-7" strokeWidth={1.75} />,
  branding: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
      <path d="M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 5.004 2.224 3 3 0 0 1-.832 2.083l-3.447 3.62a1 1 0 0 1-1.45-.001z" />
    </svg>
  ),
};

export const reputationServices = reputationServicesCatalog.map((service) => ({
  ...service,
  icon: SERVICE_ICONS[service.id],
}));

export { CORE_SERVICE_ID };

export const serviceTitles = reputationServices.map((s) => s.title);

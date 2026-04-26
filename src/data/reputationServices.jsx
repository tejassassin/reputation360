import {
  ShieldCheck,
  FileText,
  TrendingUp,
  Linkedin,
  MessageSquare,
} from "lucide-react";

/**
 * Single source for home “Our Services” and footer service links.
 * Descriptions match the approved client copy (shown under each title).
 */

/** Intro paragraph under the “Our Services” heading on the home page. */
export const OUR_SERVICES_SECTION_INTRO =
  "From suppressing what harms you to building what defines you - services you can combine or deploy on their own.";

export const reputationServices = [
  {
    id: "orm-suppression",
    navLabel: "ORM & search recovery",
    title: "Online Reputation Management",
    description:
      "We strengthen positive search results and reduce the visibility of harmful, misleading, or outdated content through compliant ORM and outranking strategies",
    icon: (
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
  },
  {
    id: "employer-branding",
    navLabel: "Employer brand",
    title: "Employer Branding & Talent Reputation",
    description:
      "We build an authentic employer narrative that reflects your culture, values, and leadership so people trust what they see before they ever speak to you.",
    icon: <ShieldCheck className="h-7 w-7" strokeWidth={1.75} />,
  },
  {
    id: "content-leadership",
    navLabel: "Content & thought leadership",
    title: "Content & Thought Leadership",
    description:
      "Strategic content that builds authority, educates your audience, and positions you as a credible voice in your industry.",
    icon: <FileText className="h-7 w-7" strokeWidth={1.75} />,
  },
  {
    id: "linkedin-branding",
    navLabel: "LinkedIn branding",
    title: "LinkedIn Personal Branding",
    description:
      "Building authority and visibility through strategic storytelling, consistent high-quality content, and thought leadership that resonates with the right audience.",
    icon: <Linkedin className="h-7 w-7" strokeWidth={1.75} />,
  },
  {
    id: "performance-marketing",
    navLabel: "Performance marketing",
    title: "Performance Marketing",
    description:
      "Paid campaigns designed to increase qualified leads, drive conversions, and accelerate business growth.",
    icon: <TrendingUp className="h-7 w-7" strokeWidth={1.75} />,
  },
  {
    id: "consultation",
    navLabel: "Consultation",
    title: "Consultation",
    description:
      "Strategic marketing consultation built on experience, not theory - offering clarity, course correction, and measurable impact.",
    icon: <MessageSquare className="h-7 w-7" strokeWidth={1.75} />,
  },
  {
    id: "branding",
    navLabel: "Branding",
    title: "Branding",
    description:
      "We help your audience recognize your brand the way you intend - building connection, trust, and momentum for growth.",
    icon: (
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
  },
];

export const CORE_SERVICE_ID = "orm-suppression";

export const serviceTitles = reputationServices.map((s) => s.title);

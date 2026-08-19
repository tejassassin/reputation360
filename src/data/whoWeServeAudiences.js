import {
  Briefcase,
  Building,
  Gavel,
  Home,
  Landmark,
  Stethoscope,
  User,
  UserSearch,
} from "lucide-react";
import { AUDIENCE_PATH } from "../constants/whoWeServePaths.js";

/** Shared audience cards for homepage and Services page. */
export const WHO_WE_SERVE_AUDIENCES = [
  {
    id: "individuals",
    title: "Individuals Reputation Management",
    description:
      "Take control of what people find when they search your name online.",
    linkLabel: "Personal Reputation Management Services",
    href: AUDIENCE_PATH.individuals,
    icon: User,
  },
  {
    id: "financial-advisors",
    title: "Financial Advisor Reputation Management",
    description:
      "Build the trust clients and regulators expect when they look you up online.",
    linkLabel: "Online Reputation Management for Financial Advisors",
    href: AUDIENCE_PATH.financialAdvisors,
    icon: Landmark,
  },
  {
    id: "executives",
    title: "Executives Reputation Management",
    description:
      "Make sure your leadership and impact are what people find first when they search your name.",
    linkLabel: "Executive Reputation Repair Solutions",
    href: AUDIENCE_PATH.executives,
    icon: Briefcase,
  },
  {
    id: "doctors",
    title: "Doctor and Healthcare Professional Reputation Management",
    description:
      "Keep search results working in your favor, so your practice is represented the way it should be.",
    linkLabel: "Healthcare Reputation Management Services",
    href: AUDIENCE_PATH.doctors,
    icon: Stethoscope,
  },
  {
    id: "lawyers",
    title: "Lawyers and Attorneys Reputation Management",
    description:
      "Keep your professional standing positive when legal press and records surface in search.",
    linkLabel: "Lawyer Reputation Management Solutions",
    href: AUDIENCE_PATH.lawyers,
    icon: Gavel,
  },
  {
    id: "real-estate",
    title: "Real Estate Agents Reputation Management",
    description:
      "Build client trust by keeping your search results positive.",
    linkLabel: "Real Estate Reputation Management Solutions",
    href: AUDIENCE_PATH.realEstate,
    icon: Home,
  },
  {
    id: "job-seekers",
    title: "Job Seekers Reputation Management",
    description:
      "Put your best foot forward when employers and recruiters search you on Google.",
    linkLabel: "Personal Branding for Job Seekers",
    href: AUDIENCE_PATH.jobSeekers,
    icon: UserSearch,
  },
  {
    id: "businesses",
    title: "Business Reputation Management",
    description:
      "Make sure your business's search results reflect the reputation you've earned.",
    linkLabel: "Business Reputation Management Services",
    href: AUDIENCE_PATH.businesses,
    icon: Building,
  },
];

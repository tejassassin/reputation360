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
    title: "Personal Reputation Management for Individuals",
    description:
      "Take control of what people find when they search your name online.",
    linkLabel: "Personal Reputation Management Services",
    href: AUDIENCE_PATH.individuals,
    icon: User,
  },
  {
    id: "financial-advisors",
    title: "Financial Advisors",
    description:
      "Strengthen trust and credibility when clients and regulators look you up.",
    linkLabel: "Online Reputation Management for Financial Advisors",
    href: AUDIENCE_PATH.financialAdvisors,
    icon: Landmark,
  },
  {
    id: "executives",
    title: "Reputation Management for Executives",
    description:
      "Protect your leadership reputation and ensure your vision and impact come through clearly.",
    linkLabel: "Executive Reputation Repair Solutions",
    href: AUDIENCE_PATH.executives,
    icon: Briefcase,
  },
  {
    id: "doctors",
    title: "Reputation Management for Doctors & Healthcare Professionals",
    description:
      "Protect your practice where patient reviews, listings, and search results meet.",
    linkLabel: "Healthcare Reputation Management Services",
    href: AUDIENCE_PATH.doctors,
    icon: Stethoscope,
  },
  {
    id: "lawyers",
    title: "Reputation Management for Lawyers & Attorneys",
    description:
      "Keep your professional standing clear when legal press and records surface in search.",
    linkLabel: "Lawyer Reputation Management Solutions",
    href: AUDIENCE_PATH.lawyers,
    icon: Gavel,
  },
  {
    id: "real-estate",
    title: "Real Estate Agents & Brokers",
    description:
      "Secure listings and build client trust by keeping your search results clean.",
    linkLabel: "Real Estate Reputation Management Solutions",
    href: AUDIENCE_PATH.realEstate,
    icon: Home,
  },
  {
    id: "job-seekers",
    title: "Job Seekers",
    description:
      "Put your best foot forward when employers and recruiters search your background.",
    linkLabel: "Personal Branding for Job Seekers",
    href: AUDIENCE_PATH.jobSeekers,
    icon: UserSearch,
  },
  {
    id: "businesses",
    title: "Business Reputation Management Services",
    description:
      "Own your industry online through powerful branding and a strong search presence.",
    linkLabel: "Business Reputation Management Services",
    href: AUDIENCE_PATH.businesses,
    icon: Building,
  },
];

import { EyeOff, Layers, Share2, Sparkles } from "lucide-react";
import {
  CORE_SERVICE_ID,
  reputationServicesCatalog,
} from "./reputationServicesCatalog.js";

/**
 * Single source for home “Our Services” and footer service links.
 */

/** Intro paragraph under the “Our Services” heading on the home page. */
export const OUR_SERVICES_SECTION_INTRO = "";

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
  "negative-link-suppression": <EyeOff className="h-7 w-7" strokeWidth={1.75} />,
  "social-media": <Share2 className="h-7 w-7" strokeWidth={1.75} />,
  "ai-orm": <Sparkles className="h-7 w-7" strokeWidth={1.75} />,
  "reputation-building": <Layers className="h-7 w-7" strokeWidth={1.75} />,
};

export const reputationServices = reputationServicesCatalog.map((service) => ({
  ...service,
  href: service.url,
  icon: SERVICE_ICONS[service.id],
}));

export { CORE_SERVICE_ID };

export const serviceTitles = reputationServices.map((s) => s.title);

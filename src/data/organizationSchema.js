import { METADATA_BASE } from "../constants/siteUrl.js";
import { CONTACT_EMAIL } from "../constants/contact.js";
import {
  ORGANIZATION_ID,
  PROFESSIONAL_SERVICE_ENTITY,
} from "./localBusinessSchema.js";
import { SERVICE_ENTITIES, withServiceOffers } from "./serviceSchema.js";

/** Organization entity (use inside homepage @graph or standalone with @context). */
export const ORGANIZATION_ENTITY = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Reputation360",
  url: METADATA_BASE,
  logo: `${METADATA_BASE}/android-chrome-512x512.png`,
  image: `${METADATA_BASE}/about-hero-search-mockup.png`,
  description:
    "Reputation360 is a trusted online reputation management agency with 7+ years of experience. We help individuals and brands suppress negative search results and build credible, resilient digital reputations.",
  email: CONTACT_EMAIL,
  foundingDate: "2018",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  knowsAbout: [
    "Online Reputation Management",
    "Negative Link Suppression",
    "Brand Monitoring",
    "Crisis Management",
  ],
  sameAs: [
    "https://www.linkedin.com/company/thereputation360",
    "https://x.com/Reputation360_",
    "https://www.instagram.com/thereputation360/",
    "https://www.youtube.com/@Reputation360",
    "https://g.page/r/CRYmeiA2xgQBEBM/review",
    "https://in.pinterest.com/reputation360/",
    "https://medium.com/@Reputation360",
    "https://reputation360online.blogspot.com/",
    "https://reputation360.wordpress.com",
    "https://www.behance.net/thereputation360",
    "https://reputation360.mystrikingly.com",
  ],
};

export const PROFESSIONAL_SERVICE_WITH_OFFERS = withServiceOffers(
  PROFESSIONAL_SERVICE_ENTITY,
);

/** Homepage JSON-LD: Organization, business, and Service offerings. */
export const HOME_PAGE_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    ORGANIZATION_ENTITY,
    PROFESSIONAL_SERVICE_WITH_OFFERS,
    ...SERVICE_ENTITIES,
  ],
};

/** @deprecated Prefer HOME_PAGE_JSON_LD on the homepage. */
export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  ...ORGANIZATION_ENTITY,
};

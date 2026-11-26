import { METADATA_BASE } from "../constants/siteUrl.js";
import { CONTACT_EMAIL, BUSINESS_TELEPHONE } from "../constants/contact.js";
import {
  BRAND_ALTERNATE_NAMES,
  FOUNDING_YEAR,
  OFFICIAL_PROFILE_URLS,
} from "../constants/brandProfiles.js";
import {
  AREA_SERVED_COUNTRIES,
  ORGANIZATION_ID,
  PROFESSIONAL_SERVICE_ENTITY,
} from "./localBusinessSchema.js";
import { SERVICE_ENTITIES, withServiceOffers } from "./serviceSchema.js";
import { R360_LEGAL_ENTITY_NAME } from "../constants/legalEntity.js";

/** Organization entity (use inside homepage @graph or standalone with @context). */
export const ORGANIZATION_ENTITY = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Reputation360",
  alternateName: BRAND_ALTERNATE_NAMES,
  legalName: R360_LEGAL_ENTITY_NAME,
  url: METADATA_BASE,
  logo: `${METADATA_BASE}/android-chrome-512x512.png`,
  image: `${METADATA_BASE}/about-hero-search-mockup.png`,
  description:
    "Reputation360 is a trusted Online Reputation Management agency with 7+ years of experience. We help individuals and brands suppress negative search results and build credible, resilient digital reputations.",
  email: CONTACT_EMAIL,
  telephone: BUSINESS_TELEPHONE,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: CONTACT_EMAIL,
      telephone: BUSINESS_TELEPHONE,
      availableLanguage: ["English"],
    },
  ],
  foundingDate: String(FOUNDING_YEAR),
  areaServed: AREA_SERVED_COUNTRIES,
  knowsAbout: [
    "Online Reputation Management",
    "Negative Link Suppression",
    "Brand Monitoring",
    "Crisis Management",
  ],
  sameAs: OFFICIAL_PROFILE_URLS,
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

import { METADATA_BASE } from "../constants/siteUrl.js";
import { CONTACT_EMAIL, BUSINESS_TELEPHONE } from "../constants/contact.js";
import {
  BRAND_ALTERNATE_NAMES,
  FOUNDING_YEAR,
  GOOGLE_REVIEW_URL,
  OFFICIAL_PROFILE_URLS,
} from "../constants/brandProfiles.js";
import { R360_LEGAL_ENTITY_NAME } from "../constants/legalEntity.js";

export const ORGANIZATION_ID = `${METADATA_BASE}/#organization`;
export const PROFESSIONAL_SERVICE_ID = `${METADATA_BASE}/#professional-service`;

export const AREA_SERVED_COUNTRIES = [
  { "@type": "Country", name: "United States" },
  { "@type": "Country", name: "United Kingdom" },
  { "@type": "Country", name: "Canada" },
  { "@type": "Country", name: "Australia" },
  { "@type": "Country", name: "India" },
];

export const BUSINESS_POSTAL_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "DLP Phase 2",
  addressLocality: "Gurgaon",
  addressRegion: "Haryana",
  postalCode: "122002",
  addressCountry: "IN",
};

const BUSINESS_DESCRIPTION =
  "Reputation360 provides Online Reputation Management for individuals and brands: negative search suppression, positive presence building, monitoring, and crisis recovery.";

const KNOWS_ABOUT = [
  "Online Reputation Management",
  "Negative Link Suppression",
  "Brand Monitoring",
  "Crisis Management",
];

export { BUSINESS_TELEPHONE } from "../constants/contact.js";

/**
 * ProfessionalService (schema.org subtype of LocalBusiness) for Reputation360.
 * Linked to Organization via parentOrganization and shared @id graph on the homepage.
 */
export const PROFESSIONAL_SERVICE_ENTITY = {
  "@type": "ProfessionalService",
  additionalType: "https://schema.org/LocalBusiness",
  "@id": PROFESSIONAL_SERVICE_ID,
  name: "Reputation360",
  alternateName: BRAND_ALTERNATE_NAMES,
  legalName: R360_LEGAL_ENTITY_NAME,
  url: METADATA_BASE,
  logo: `${METADATA_BASE}/android-chrome-512x512.png`,
  image: `${METADATA_BASE}/about-hero-search-mockup.png`,
  description: BUSINESS_DESCRIPTION,
  email: CONTACT_EMAIL,
  telephone: BUSINESS_TELEPHONE,
  foundingDate: String(FOUNDING_YEAR),
  parentOrganization: { "@id": ORGANIZATION_ID },
  address: BUSINESS_POSTAL_ADDRESS,
  areaServed: AREA_SERVED_COUNTRIES,
  knowsAbout: KNOWS_ABOUT,
  hasMap: GOOGLE_REVIEW_URL,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: CONTACT_EMAIL,
      telephone: BUSINESS_TELEPHONE,
      availableLanguage: ["English"],
      areaServed: ["US", "CA", "AU", "GB", "IN"],
    },
  ],
  sameAs: OFFICIAL_PROFILE_URLS,
};

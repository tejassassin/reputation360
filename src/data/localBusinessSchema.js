import { METADATA_BASE } from "../constants/siteUrl.js";
import { CONTACT_EMAIL, WHATSAPP_PHONE } from "../constants/contact.js";

export const ORGANIZATION_ID = `${METADATA_BASE}/#organization`;
export const PROFESSIONAL_SERVICE_ID = `${METADATA_BASE}/#professional-service`;

export const AREA_SERVED_COUNTRIES = [
  { "@type": "Country", name: "United States" },
  { "@type": "Country", name: "Canada" },
  { "@type": "Country", name: "Australia" },
  { "@type": "Country", name: "United Kingdom" },
  { "@type": "Country", name: "India" },
];

const BUSINESS_DESCRIPTION =
  "Reputation360 provides Online Reputation Management for individuals and brands: negative search suppression, positive presence building, monitoring, and crisis recovery.";

const KNOWS_ABOUT = [
  "Online Reputation Management",
  "Negative Link Suppression",
  "Brand Monitoring",
  "Crisis Management",
];

const PROFILE_SAME_AS = [
  "https://www.linkedin.com/company/thereputation360",
  "https://x.com/Reputation360_",
  "https://www.instagram.com/thereputation360/",
  "https://www.youtube.com/@Reputation360",
  "https://g.page/r/CRYmeiA2xgQBEBM/review",
];

/** E.164 for schema.org telephone (WhatsApp business line). */
export const BUSINESS_TELEPHONE = `+${WHATSAPP_PHONE}`;

/**
 * ProfessionalService (schema.org subtype of LocalBusiness) for Reputation360.
 * Linked to Organization via parentOrganization and shared @id graph on the homepage.
 */
export const PROFESSIONAL_SERVICE_ENTITY = {
  "@type": "ProfessionalService",
  additionalType: "https://schema.org/LocalBusiness",
  "@id": PROFESSIONAL_SERVICE_ID,
  name: "Reputation360",
  url: METADATA_BASE,
  logo: `${METADATA_BASE}/android-chrome-512x512.png`,
  image: `${METADATA_BASE}/about-hero-search-mockup.png`,
  description: BUSINESS_DESCRIPTION,
  email: CONTACT_EMAIL,
  telephone: BUSINESS_TELEPHONE,
  foundingDate: "2018",
  parentOrganization: { "@id": ORGANIZATION_ID },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  areaServed: AREA_SERVED_COUNTRIES,
  knowsAbout: KNOWS_ABOUT,
  hasMap: "https://g.page/r/CRYmeiA2xgQBEBM/review",
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
  sameAs: PROFILE_SAME_AS,
};

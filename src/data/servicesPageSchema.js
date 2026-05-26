import { CONTACT_EMAIL } from "../constants/contact.js";
import { ORGANIZATION_ENTITY } from "./organizationSchema.js";
import {
  AREA_SERVED_COUNTRIES,
  BUSINESS_TELEPHONE,
} from "./localBusinessSchema.js";
import { PRIMARY_SERVICES_CATALOG } from "./primaryServicesCatalog.js";
import { SERVICES_PAGE_URL, servicesPageServiceId } from "./serviceSchema.js";

const OFFER_CATALOG_ID = `${SERVICES_PAGE_URL}#offer-catalog`;

/**
 * Full Service object inside OfferCatalog (not a separate top-level graph node).
 * @param {{ id: string; name: string; description: string }} service
 */
function inlineServiceEntity(service) {
  return {
    "@type": "Service",
    "@id": servicesPageServiceId(service.id),
    name: service.name,
    description: service.description,
    areaServed: AREA_SERVED_COUNTRIES,
    url: SERVICES_PAGE_URL,
  };
}

/**
 * /services JSON-LD: one Organization (with LocalBusiness signals), five Service
 * items nested under hasOfferCatalog. No separate ProfessionalService node here,
 * because schema.org treats it as a subtype of Organization and Google Rich Results
 * Test then reports duplicate Organization items.
 */
export const SERVICES_PAGE_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      ...ORGANIZATION_ENTITY,
      "@type": "Organization",
      additionalType: "https://schema.org/LocalBusiness",
      email: CONTACT_EMAIL,
      telephone: BUSINESS_TELEPHONE,
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
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
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        "@id": OFFER_CATALOG_ID,
        name: "Reputation360 Services",
        url: SERVICES_PAGE_URL,
        itemListElement: PRIMARY_SERVICES_CATALOG.map((service) => ({
          "@type": "Offer",
          itemOffered: inlineServiceEntity(service),
        })),
      },
    },
  ],
};

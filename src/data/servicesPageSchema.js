import { ORGANIZATION_ENTITY } from "./organizationSchema.js";
import { PROFESSIONAL_SERVICE_ENTITY } from "./localBusinessSchema.js";
import { PRIMARY_SERVICE_ENTITIES, SERVICES_PAGE_URL } from "./serviceSchema.js";

const OFFER_CATALOG_ID = `${SERVICES_PAGE_URL}#offer-catalog`;

/** Single Organization node with services nested via OfferCatalog (no duplicate inline orgs). */
const SERVICES_PAGE_ORGANIZATION = {
  ...ORGANIZATION_ENTITY,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    "@id": OFFER_CATALOG_ID,
    name: "Reputation360 Services",
    url: SERVICES_PAGE_URL,
    itemListElement: PRIMARY_SERVICE_ENTITIES.map((service) => ({
      "@type": "Offer",
      itemOffered: { "@id": service["@id"] },
    })),
  },
};

/**
 * One JSON-LD graph for /services: 1 Organization, 1 LocalBusiness (ProfessionalService),
 * 5 Service entities referenced from Organization.hasOfferCatalog.
 */
export const SERVICES_PAGE_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    SERVICES_PAGE_ORGANIZATION,
    PROFESSIONAL_SERVICE_ENTITY,
    ...PRIMARY_SERVICE_ENTITIES,
  ],
};

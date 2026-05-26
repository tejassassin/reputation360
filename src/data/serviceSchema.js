import { METADATA_BASE } from "../constants/siteUrl.js";
import { reputationServicesCatalog } from "./reputationServicesCatalog.js";
import { AREA_SERVED_COUNTRIES, PROFESSIONAL_SERVICE_ID } from "./localBusinessSchema.js";

export const SERVICES_PAGE_URL = `${METADATA_BASE}/services`;

/** @param {string} serviceId */
export function serviceSchemaId(serviceId) {
  return `${METADATA_BASE}/#service-${serviceId}`;
}

/** schema.org Service nodes for each offering on /services. */
export const SERVICE_ENTITIES = reputationServicesCatalog.map((service) => ({
  "@type": "Service",
  "@id": serviceSchemaId(service.id),
  name: service.title,
  description: service.description,
  serviceType: service.title,
  provider: { "@id": PROFESSIONAL_SERVICE_ID },
  areaServed: AREA_SERVED_COUNTRIES,
  url: SERVICES_PAGE_URL,
}));

/**
 * Link catalog Service nodes to the business via makesOffer (no OfferCatalog
 * itemListElement, which strict validators reject when using position/ListItem).
 *
 * @param {Record<string, unknown>} professionalServiceEntity
 */
export function withServiceOffers(professionalServiceEntity) {
  return {
    ...professionalServiceEntity,
    makesOffer: SERVICE_ENTITIES.map((service) => ({
      "@type": "Offer",
      itemOffered: { "@id": service["@id"] },
    })),
  };
}

/** @deprecated Use withServiceOffers */
export const withServiceOfferCatalog = withServiceOffers;

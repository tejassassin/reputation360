import { METADATA_BASE } from "../constants/siteUrl.js";
import { CONTACT_EMAIL } from "../constants/contact.js";
import { reputationServicesCatalog } from "./reputationServicesCatalog.js";
import { PRIMARY_SERVICES_CATALOG } from "./primaryServicesCatalog.js";
import {
  AREA_SERVED_COUNTRIES,
  ORGANIZATION_ID,
  PROFESSIONAL_SERVICE_ID,
} from "./localBusinessSchema.js";

export const SERVICES_PAGE_URL = `${METADATA_BASE}/services`;

export const INLINE_ORGANIZATION_PROVIDER = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Reputation360",
  url: METADATA_BASE,
  email: CONTACT_EMAIL,
};

/** @param {string} serviceId */
export function serviceSchemaId(serviceId) {
  return `${METADATA_BASE}/#service-${serviceId}`;
}

/** @param {string} serviceId */
export function servicesPageServiceId(serviceId) {
  return `${SERVICES_PAGE_URL}#service-${serviceId}`;
}

/**
 * @param {{ pageScopedId?: boolean }} [options]
 */
function buildCatalogServiceEntities({ pageScopedId = false } = {}) {
  return reputationServicesCatalog.map((service) => ({
    "@type": "Service",
    "@id": pageScopedId ? servicesPageServiceId(service.id) : serviceSchemaId(service.id),
    name: service.title,
    description: service.description,
    provider: INLINE_ORGANIZATION_PROVIDER,
    areaServed: AREA_SERVED_COUNTRIES,
    url: SERVICES_PAGE_URL,
  }));
}

/** schema.org Service nodes (homepage makesOffer targets). */
export const SERVICE_ENTITIES = buildCatalogServiceEntities();

/** Five primary services for /services (explicit Service types for validators). */
export const PRIMARY_SERVICE_ENTITIES = PRIMARY_SERVICES_CATALOG.map((service) => ({
  "@type": "Service",
  "@id": servicesPageServiceId(service.id),
  name: service.name,
  description: service.description,
  provider: INLINE_ORGANIZATION_PROVIDER,
  areaServed: AREA_SERVED_COUNTRIES,
  url: SERVICES_PAGE_URL,
}));

/**
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

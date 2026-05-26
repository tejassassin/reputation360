import { METADATA_BASE } from "../constants/siteUrl.js";
import { SEO } from "./seoPageMeta.js";
import { reputationServicesCatalog } from "./reputationServicesCatalog.js";
import {
  AREA_SERVED_COUNTRIES,
  PROFESSIONAL_SERVICE_ENTITY,
  PROFESSIONAL_SERVICE_ID,
} from "./localBusinessSchema.js";

export const SERVICES_PAGE_URL = `${METADATA_BASE}/services`;
export const SERVICES_WEBPAGE_ID = `${SERVICES_PAGE_URL}#webpage`;
export const SERVICES_ITEMLIST_ID = `${SERVICES_PAGE_URL}#service-list`;

/** @param {string} serviceId */
export function serviceSchemaId(serviceId) {
  return `${METADATA_BASE}/#service-${serviceId}`;
}

/**
 * @param {{ webpageId?: string }} [options]
 */
function buildServiceEntities({ webpageId } = {}) {
  return reputationServicesCatalog.map((service) => ({
    "@type": "Service",
    "@id": serviceSchemaId(service.id),
    name: service.title,
    description: service.description,
    serviceType: service.title,
    category: "Online Reputation Management",
    provider: { "@id": PROFESSIONAL_SERVICE_ID },
    areaServed: AREA_SERVED_COUNTRIES,
    url: SERVICES_PAGE_URL,
    ...(webpageId ? { mainEntityOfPage: { "@id": webpageId } } : {}),
  }));
}

/** schema.org Service nodes (homepage and business makesOffer). */
export const SERVICE_ENTITIES = buildServiceEntities();

/** Service nodes tied to the /services WebPage. */
export const SERVICES_PAGE_SERVICE_ENTITIES = buildServiceEntities({
  webpageId: SERVICES_WEBPAGE_ID,
});

const servicesSeo = SEO.services;

/** JSON-LD for /services: WebPage, ItemList, provider, and each Service. */
export const SERVICES_PAGE_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": SERVICES_WEBPAGE_ID,
      url: SERVICES_PAGE_URL,
      name: servicesSeo.title,
      description: servicesSeo.description,
      about: { "@id": PROFESSIONAL_SERVICE_ID },
      mainEntity: {
        "@type": "ItemList",
        "@id": SERVICES_ITEMLIST_ID,
        name: "Reputation360 Services",
        numberOfItems: SERVICES_PAGE_SERVICE_ENTITIES.length,
        itemListElement: SERVICES_PAGE_SERVICE_ENTITIES.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: { "@id": service["@id"] },
        })),
      },
    },
    PROFESSIONAL_SERVICE_ENTITY,
    ...SERVICES_PAGE_SERVICE_ENTITIES,
  ],
};

/**
 * Link Service nodes to the business via makesOffer (no OfferCatalog
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

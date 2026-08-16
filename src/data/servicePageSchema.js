import { METADATA_BASE } from "../constants/siteUrl.js";
import {
  NEGATIVE_LINK_SUPPRESSION_PATH,
  ONLINE_REPUTATION_MANAGEMENT_PATH,
  REPUTATION_BUILDING_SERVICES_PATH,
} from "../constants/servicePaths.js";
import { ORGANIZATION_PROVIDER_REF } from "./serviceSchema.js";
import { nlsPageMetaDescription } from "./services/negativeLinkSuppression.js";
import { ormPageMetaDescription } from "./services/onlineReputationManagement.js";
import { rbsPageMetaDescription } from "./services/reputationBuildingServices.js";

export const JSONLD_SERVICE_PAGE_ID = "r360-jsonld-service-page";
export const JSONLD_AUDIENCE_SERVICE_ID = "r360-jsonld-audience-service";

/** Primary markets for flagship service landing pages. */
export const SERVICE_LANDING_AREA_SERVED = [
  { "@type": "Country", name: "United States" },
  { "@type": "Country", name: "Canada" },
  { "@type": "Country", name: "Australia" },
];

/** @type {Record<string, { name: string; description: string }>} */
const SERVICE_LANDING_BY_PATH = {
  [ONLINE_REPUTATION_MANAGEMENT_PATH]: {
    name: "Online Reputation Management",
    description: ormPageMetaDescription,
  },
  [NEGATIVE_LINK_SUPPRESSION_PATH]: {
    name: "Negative Link Suppression",
    description: nlsPageMetaDescription,
  },
  [REPUTATION_BUILDING_SERVICES_PATH]: {
    name: "Reputation Building Services",
    description: rbsPageMetaDescription,
  },
};

/**
 * @param {string} pathname
 * @returns {Record<string, unknown> | null}
 */
export function buildServiceLandingPageSchema(pathname) {
  const spec = SERVICE_LANDING_BY_PATH[pathname];
  if (!spec) {
    return null;
  }

  const url = `${METADATA_BASE}${pathname}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: spec.name,
    description: spec.description,
    url,
    provider: ORGANIZATION_PROVIDER_REF,
    areaServed: SERVICE_LANDING_AREA_SERVED,
  };
}

/**
 * @param {string} pathname
 * @param {{ name: string; description: string }} spec
 * @returns {Record<string, unknown>}
 */
export function buildAudienceServiceSchema(pathname, spec) {
  const url = `${METADATA_BASE}${pathname}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: spec.name,
    description: spec.description,
    url,
    provider: ORGANIZATION_PROVIDER_REF,
    areaServed: SERVICE_LANDING_AREA_SERVED,
  };
}

/**
 * @param {string} pathname
 * @returns {{ id: string; data: Record<string, unknown> }[]}
 */
export function serviceLandingJsonLdBlocks(pathname) {
  const data = buildServiceLandingPageSchema(pathname);
  if (!data) {
    return [];
  }
  return [{ id: JSONLD_SERVICE_PAGE_ID, data }];
}

import { ORGANIZATION_ENTITY } from "./organizationSchema.js";
import { PROFESSIONAL_SERVICE_ENTITY } from "./localBusinessSchema.js";
import { PRIMARY_SERVICE_ENTITIES } from "./serviceSchema.js";

/** Organization + LocalBusiness / ProfessionalService for /services. */
export const SERVICES_PAGE_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [ORGANIZATION_ENTITY, PROFESSIONAL_SERVICE_ENTITY],
};

/** Five Service entities in a dedicated graph (second JSON-LD script on /services). */
export const SERVICES_PAGE_SERVICES_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": PRIMARY_SERVICE_ENTITIES,
};

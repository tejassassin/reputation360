import { AUDIENCE_PATH } from "@/constants/whoWeServePaths.js";

/** Paths served by dedicated App Router pages (not the legacy catch-all client shell). */
export const DEDICATED_SSR_PATHS = new Set([
  "/services",
  ...Object.values(AUDIENCE_PATH),
  "/resources/faqs",
  "/resources/guide",
  "/resources/online-reputation-management-glossary",
]);

/** Google Programmable Search returns up to 10 items per request; three requests = first 3 result pages. */
export const FREE_SCAN_GOOGLE_PAGES = 3;

/** Max live links we classify per scan (first {@link FREE_SCAN_GOOGLE_PAGES} pages, in SERP order). */
export const FREE_SCAN_LINK_LIMIT = FREE_SCAN_GOOGLE_PAGES * 10;

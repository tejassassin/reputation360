/**
 * Audience pages live under /who-we-serve (not /services).
 * Legacy /services/... URLs still resolve in the SPA and redirect in production (vercel.json).
 */
export const WHO_WE_SERVE_HUB_PATH = "/who-we-serve";

/** Canonical audience page paths (full descriptive slugs where it helps clarity). */
export const AUDIENCE_PATH = {
  individuals: "/who-we-serve/individual",
  financialAdvisors: "/who-we-serve/financial-advisors",
  executives: "/who-we-serve/executives-and-c-suite-leaders",
  doctors: "/who-we-serve/doctors-and-healthcare-professionals",
  lawyers: "/who-we-serve/lawyers-and-attorneys",
  jobSeekers: "/who-we-serve/job-seekers",
  businesses: "/who-we-serve/businesses-and-companies",
};

/** Previous URLs; same components as AUDIENCE_PATH (redirect to canonical on Vercel). */
export const LEGACY_SERVICE_AUDIENCE_PATH = {
  individuals: "/services/individuals",
  financialAdvisors: "/services/financial-advisors",
  executives: "/services/executives",
  doctors: "/services/doctors",
  lawyers: "/services/lawyers",
  jobSeekers: "/services/job-seekers",
  businesses: "/services/businesses",
};

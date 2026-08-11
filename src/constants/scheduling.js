/** Calendly inline embed URL (themed to match Reputation360). */
export const CALENDLY_INLINE_DATA_URL =
  "https://calendly.com/reputation360/30min?background_color=f5f7fa&text_color=111827&primary_color=4caf50";

/** On-site booking anchor on the contact page. */
export const CALENDLY_BOOKING_PATH = "/contact#calendly-booking";

/** Legacy external URL - do not link to this directly; use openBooking() or CALENDLY_BOOKING_PATH. */
export const CALENDLY_URL = "https://calendly.com/reputation360/30min";

export function isCalendlyExternalUrl(href) {
  if (!href || typeof href !== "string") return false;
  try {
    const url = new URL(href, typeof window !== "undefined" ? window.location.origin : "https://www.thereputation360.com");
    return url.hostname.includes("calendly.com");
  } catch {
    return href.includes("calendly.com");
  }
}

/**
 * Default surface for Calendly primary CTAs (uses --color-cta-consult in index.css, #6cb359).
 * Merge with your own padding/shadow/rounded classes.
 */
export const calendlyCtaButtonClass = "bg-cta-consult text-white hover:brightness-95";

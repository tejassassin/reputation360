/** Calendly - scheduling / consultation CTAs open here in a new tab. */
export const CALENDLY_URL =
  "https://calendly.com/reputation360/30min";

export const calendlyNewTabProps = {
  href: CALENDLY_URL,
  target: "_blank",
  rel: "noopener noreferrer",
};

/**
 * Default surface for Calendly primary CTAs (uses --color-cta-consult in index.css, #6cb359).
 * Merge with your own padding/shadow/rounded classes.
 */
export const calendlyCtaButtonClass = "bg-cta-consult text-white hover:brightness-95";

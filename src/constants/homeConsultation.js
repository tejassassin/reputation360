/** Homepage consultation form anchor (hero lead form). */
export const FREE_CONSULTATION_ID = "free-consultation";

export const FREE_CONSULTATION_HEADING_ID = "free-consultation-heading";

export const FREE_CONSULTATION_HREF = "/#free-consultation";

export const FREE_CONSULTATION_NAV_LABEL = "Free Consultation";

/** Hero primary scan CTA (distinct from nav label). */
export const HERO_FREE_REPUTATION_SCAN_CTA = "Get Your Free Reputation Scan";

/** Lower homepage lead form (after Why Choose). */
export const HOME_CLOSING_LEAD_ID = "home-closing-lead-form";

export const HOME_CLOSING_LEAD_HEADING_ID = "home-closing-lead-heading";

/** About page hero lead form (distinct from homepage #free-consultation). */
export const ABOUT_HERO_CONSULTATION_ID = "about-hero-consultation";

export const ABOUT_HERO_CONSULTATION_HEADING_ID = "about-hero-consultation-heading";

/** About page lower consultation form. */
export const ABOUT_BOTTOM_CONSULTATION_ID = "about-bottom-consultation";

export const ABOUT_BOTTOM_CONSULTATION_HEADING_ID = "about-bottom-consultation-heading";

export function isHomePath() {
  if (typeof window === "undefined") return false;
  return (window.location.pathname.replace(/\/+$/, "") || "/") === "/";
}

/** @param {{ focusHeading?: boolean }} [options] */
export function scrollToFreeConsultation(options = {}) {
  const { focusHeading = true } = options;
  const target = document.getElementById(FREE_CONSULTATION_ID);
  if (!target) return false;

  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  target.scrollIntoView({
    behavior: reduced ? "auto" : "smooth",
    block: "start",
  });

  if (focusHeading) {
    requestAnimationFrame(() => {
      document.getElementById(FREE_CONSULTATION_HEADING_ID)?.focus({
        preventScroll: true,
      });
    });
  }

  return true;
}

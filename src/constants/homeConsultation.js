/** Primary consultation lead form anchor (hero sections). */
export const CONSULTATION_FORM_ID = "consultation-form";

export const CONTACT_CONSULTATION_FORM_HREF = "/contact#consultation-form";

/** Homepage consultation form anchor (hero lead form). */
export const FREE_CONSULTATION_ID = CONSULTATION_FORM_ID;

export const FREE_CONSULTATION_HEADING_ID = "free-consultation-heading";

export const FREE_CONSULTATION_HREF = "/#consultation-form";

export const FREE_CONSULTATION_NAV_LABEL = "Free Consultation";

/** Hero primary scan CTA (distinct from nav label). */
export const HERO_FREE_REPUTATION_SCAN_CTA = "Get Your Free Reputation Scan";

/** Lower homepage lead form (after Why Choose). */
export const HOME_CLOSING_LEAD_ID = "home-closing-lead-form";

export const HOME_CLOSING_LEAD_HEADING_ID = "home-closing-lead-heading";

/** Lower homepage consultation section heading (left column). */
export const HOME_LOWER_CONSULTATION_SECTION_HEADING_ID =
  "home-lower-consultation-section-heading";

/** About page hero lead form. */
export const ABOUT_HERO_CONSULTATION_ID = "about-hero-consultation";

export const ABOUT_HERO_CONSULTATION_HEADING_ID = "about-hero-consultation-heading";

/** About page lower consultation form. */
export const ABOUT_BOTTOM_CONSULTATION_ID = "about-bottom-consultation";

export const ABOUT_BOTTOM_CONSULTATION_HEADING_ID = "about-bottom-consultation-heading";

/** Contact page hero lead form. */
export const CONTACT_HERO_CONSULTATION_ID = "contact-hero-consultation";

export const CONTACT_HERO_CONSULTATION_HEADING_ID = "contact-hero-consultation-heading";

export function isHomePath() {
  if (typeof window === "undefined") return false;
  return (window.location.pathname.replace(/\/+$/, "") || "/") === "/";
}

/**
 * @param {HTMLElement} container
 */
export function focusFirstConsultationFormField(container) {
  const fields = container.querySelectorAll(
    'input:not([type="hidden"]):not([disabled]), textarea:not([disabled]), select:not([disabled])',
  );
  for (const el of fields) {
    if (!("value" in el)) continue;
    if (!String(el.value).trim()) {
      el.focus({ preventScroll: true });
      return;
    }
  }
  const first = fields[0];
  if (first instanceof HTMLElement) {
    first.focus({ preventScroll: true });
  }
}

/**
 * Scroll to `#consultation-form` and focus the first empty field (or first field).
 * @param {{ onSuccess?: () => void }} [options]
 */
export function scrollToConsultationForm(options = {}) {
  const { onSuccess } = options;
  const target = document.getElementById(CONSULTATION_FORM_ID);
  if (!target) return false;

  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  target.scrollIntoView({
    behavior: reduced ? "auto" : "smooth",
    block: "start",
  });

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      focusFirstConsultationFormField(target);
      onSuccess?.();
    });
  });

  return true;
}

/** @param {{ focusHeading?: boolean; onSuccess?: () => void }} [options] */
export function scrollToFreeConsultation(options = {}) {
  void options.focusHeading;
  return scrollToConsultationForm({ onSuccess: options.onSuccess });
}

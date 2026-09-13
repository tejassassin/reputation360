/**
 * GA4 conversion events (gtag loaded from index.html).
 * @param {string} source - e.g. header, header_mobile, hero
 */
export function trackFreeReputationScanClick(source) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "free_reputation_scan_click", {
      event_category: "conversion",
      source,
    });
  }
}

/** @param {string} source - e.g. header, header_mobile, hero */
export function trackFreeConsultationClick(source) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "free_consultation_click", {
      event_category: "conversion",
      source,
    });
  }
}

/** @param {"hero" | "home_closing"} instance */
export function trackHomeLeadFormSubmit(instance) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    const form_location =
      instance === "home_closing" ? "homepage_lower_consultation_form" : "homepage_hero_consultation_form";
    window.gtag("event", "home_lead_form_submit", {
      event_category: "conversion",
      form_instance: instance,
      form_location,
    });
  }
}

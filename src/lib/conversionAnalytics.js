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

/** @param {string} source - e.g. header, header_mobile */
export function trackFreeConsultationClick(source) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "free_consultation_click", {
      event_category: "conversion",
      source,
    });
  }
}

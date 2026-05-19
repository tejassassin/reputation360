/** Primary inbox (FormSubmit, footer, quick contact). */
export const CONTACT_EMAIL = "hello@thereputation360.com";

/**
 * Same-origin URL for the email + form block on the contact page.
 * Use for UI where `mailto:` is unreliable (e.g. floating dock in embedded or in-app browsers).
 */
export const CONTACT_PAGE_EMAIL_SECTION_HREF = "/contact#email-inquiry";

/**
 * WhatsApp Business number: country code + national number, digits only (no +).
 * Update when the business line changes.
 */
export const WHATSAPP_PHONE = "919910000000";

/** Default message prefilled in the WhatsApp compose box. */
export const WHATSAPP_PREFILL_MESSAGE =
  "Hello, I would like to connect with Reputation360.";

export function contactMailtoHref(email = CONTACT_EMAIL) {
  return `mailto:${email}`;
}

/**
 * Primary-click handler for mailto links when the default anchor action is unreliable
 * (e.g. closing a mobile menu in the same tick, or some in-app browsers).
 * Ctrl/Cmd/shift/middle-click fall through to the browser default.
 */
export function handleMailtoClick(e, email = CONTACT_EMAIL) {
  if (!e || e.defaultPrevented) return;
  // Touch / some environments omit `button`; only skip when it is explicitly non-primary.
  if (typeof e.button === "number" && e.button !== 0) return;
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  e.preventDefault();
  const href = contactMailtoHref(email);
  window.location.href = href;
}

/**
 * @param {string} [message]
 * @returns {string}
 */
export function contactWhatsAppHref(message = WHATSAPP_PREFILL_MESSAGE) {
  const params = new URLSearchParams({
    phone: WHATSAPP_PHONE,
    text: message,
  });
  return `https://api.whatsapp.com/send?${params.toString()}`;
}

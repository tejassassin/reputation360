/** Primary inbox (FormSubmit, footer, quick contact). */
export const CONTACT_EMAIL = "hello@thereputation360.com";

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

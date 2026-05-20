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

export function contactMailtoHref(
  email = CONTACT_EMAIL,
  { subject = "Reputation360 inquiry" } = {},
) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  const qs = params.toString();
  return qs ? `mailto:${email}?${qs}` : `mailto:${email}`;
}

/**
 * Gmail compose in the browser - reliable when OS mailto handlers are missing
 * (common on Windows/Linux and in embedded webviews).
 */
export function contactGmailComposeHref(email = CONTACT_EMAIL) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: email,
  });
  return `https://mail.google.com/mail/?${params.toString()}`;
}

/** Centered popup size for dock “email” (Gmail compose). */
const GMAIL_POPUP_WIDTH = 560;
const GMAIL_POPUP_HEIGHT = 680;

/**
 * Opens Gmail compose in a small browser popup (not a full tab).
 * Returns null if the browser blocked the popup.
 */
export function openGmailComposeWindow(email = CONTACT_EMAIL) {
  if (typeof window === "undefined") return null;
  const url = contactGmailComposeHref(email);
  const left = Math.max(0, Math.round((window.screen.width - GMAIL_POPUP_WIDTH) / 2));
  const top = Math.max(0, Math.round((window.screen.height - GMAIL_POPUP_HEIGHT) / 2));
  const features = [
    `width=${GMAIL_POPUP_WIDTH}`,
    `height=${GMAIL_POPUP_HEIGHT}`,
    `left=${left}`,
    `top=${top}`,
    "scrollbars=yes",
    "resizable=yes",
  ].join(",");
  return window.open(url, "r360_gmail_compose", features);
}

/**
 * Opens the native mail client via mailto: (footer, header, contact page links).
 */
export function openMailClient(email = CONTACT_EMAIL) {
  if (typeof document === "undefined") return;
  const link = document.createElement("a");
  link.href = contactMailtoHref(email);
  document.body.appendChild(link);
  link.click();
  link.remove();
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
  e.stopPropagation();
  openMailClient(email);
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

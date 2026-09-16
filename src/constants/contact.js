/** Primary inbox (FormSubmit, footer, quick contact). */
export const CONTACT_EMAIL = "hello@thereputation360.com";

/** CC inbox for consultation and contact form submissions (FormSubmit _cc). */
export const CONTACT_INQUIRY_CC_EMAIL = "hello@reputation360.in";

export const CONTACT_FORM_SUBMIT_URL = `https://formsubmit.co/${CONTACT_EMAIL}`;
export const CONTACT_FORM_SUBMIT_AJAX_URL = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

export const CONTACT_FORM_AUTORESPONSE =
  "Thank you for your message. We have received your information. We'll get back to you ASAP.";

/**
 * Same-origin URL for the email + form block on the contact page.
 * Use for UI where `mailto:` is unreliable (e.g. floating dock in embedded or in-app browsers).
 */
export const CONTACT_PAGE_EMAIL_SECTION_HREF = "/contact#email-inquiry";

/**
 * Business phone: country code + national number, digits only (no +).
 * Update when the business line changes.
 */
export const BUSINESS_PHONE = "919548997527";

/** Visible mailing address (matches structured data PostalAddress). */
export const BUSINESS_ADDRESS_DISPLAY =
  "DLP Phase 2, Gurgaon, Haryana 122002, India";

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

/** E.164 `tel:` href for the business phone line. */
export function contactTelHref(phone = BUSINESS_PHONE) {
  return `tel:+${phone}`;
}

/** Human-readable display for the business phone number. */
export function formatBusinessPhoneDisplay(phone = BUSINESS_PHONE) {
  if (phone.startsWith("91") && phone.length === 12) {
    return `+91 ${phone.slice(2, 7)} ${phone.slice(7)}`;
  }
  return `+${phone}`;
}

/**
 * Sends a validated consultation inquiry via the site API (server validates before email).
 * @param {{
 *   firstName: string;
 *   lastName: string;
 *   email: string;
 *   countryCode: string;
 *   phone: string;
 *   message?: string;
 *   subject?: string;
 *   sourceLine?: string;
 * }} payload
 */
export async function submitContactInquiry({
  firstName,
  lastName,
  email,
  countryCode,
  phone,
  message = "",
  subject = "Contact inquiry - Reputation360",
  sourceLine = "",
}) {
  const res = await fetch("/api/contact-inquiry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      countryCode,
      phone,
      message,
      subject,
      sourceLine,
    }),
  });

  let data = {};
  try {
    data = await res.json();
  } catch {
    data = {};
  }

  if (res.status === 400 && data.errors && typeof data.errors === "object") {
    const err = new Error(
      typeof data.error === "string"
        ? data.error
        : "Please correct the highlighted fields.",
    );
    err.fieldErrors = data.errors;
    throw err;
  }

  if (!res.ok || data.ok === false) {
    throw new Error(
      typeof data.error === "string"
        ? data.error
        : "Could not send your message. Please try again.",
    );
  }

  return data;
}

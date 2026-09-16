/** @typedef {"firstName" | "lastName" | "email" | "phone" | "message"} ConsultationField */

export const CONSULTATION_NAME_MAX = 50;
export const CONSULTATION_EMAIL_MAX = 254;
export const CONSULTATION_MESSAGE_MAX = 4000;

/** @type {readonly { code: string; minNational: number; maxNational: number }[]} */
export const CONSULTATION_PHONE_COUNTRIES = [
  { code: "+1", minNational: 10, maxNational: 10 },
  { code: "+44", minNational: 10, maxNational: 11 },
  { code: "+1", minNational: 10, maxNational: 10 },
  { code: "+61", minNational: 9, maxNational: 9 },
  { code: "+91", minNational: 10, maxNational: 10 },
  { code: "+", minNational: 7, maxNational: 15 },
];

const URL_IN_TEXT = /(?:https?:\/\/|www\.)/i;
const NAME_ALLOWED = /^[\p{L}\s'\u2019-]+$/u;

/**
 * @param {unknown} value
 * @returns {value is string}
 */
function isPlainString(value) {
  return typeof value === "string";
}

/**
 * @param {string} raw
 */
function collapseSpaces(raw) {
  return raw.trim().replace(/\s+/g, " ");
}

/**
 * @param {"firstName" | "lastName"} field
 * @param {string} raw
 * @returns {{ ok: true; value: string } | { ok: false; message: string }}
 */
export function validateConsultationName(field, raw) {
  const emptyMessage =
    field === "firstName"
      ? "Please enter your first name."
      : "Please enter your last name.";
  const invalidMessage =
    field === "firstName"
      ? "Please enter a valid first name."
      : "Please enter a valid last name.";

  if (!isPlainString(raw)) {
    return { ok: false, message: emptyMessage };
  }

  const trimmed = raw.trim();
  if (!trimmed) {
    return { ok: false, message: emptyMessage };
  }

  const normalized = collapseSpaces(trimmed);
  if (normalized.length < 2) {
    return { ok: false, message: invalidMessage };
  }
  if (normalized.length > CONSULTATION_NAME_MAX) {
    return { ok: false, message: invalidMessage };
  }
  if (/@/.test(normalized) || URL_IN_TEXT.test(normalized)) {
    return { ok: false, message: invalidMessage };
  }
  if (/^\d+$/.test(normalized.replace(/[\s'-]/g, ""))) {
    return { ok: false, message: invalidMessage };
  }
  if (!NAME_ALLOWED.test(normalized)) {
    return { ok: false, message: invalidMessage };
  }
  if (!/\p{L}/u.test(normalized)) {
    return { ok: false, message: invalidMessage };
  }

  return { ok: true, value: normalized };
}

/**
 * @param {string} raw
 * @returns {{ ok: true; value: string } | { ok: false; message: string }}
 */
export function validateConsultationEmail(raw) {
  if (!isPlainString(raw)) {
    return { ok: false, message: "Please enter your email address." };
  }

  const trimmed = raw.trim();
  if (!trimmed) {
    return { ok: false, message: "Please enter your email address." };
  }
  if (trimmed.length > CONSULTATION_EMAIL_MAX) {
    return { ok: false, message: "Please enter a valid email address." };
  }
  if (/\s/.test(trimmed)) {
    return { ok: false, message: "Please enter a valid email address." };
  }
  if ((trimmed.match(/@/g) ?? []).length !== 1) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  const [local, domain] = trimmed.split("@");
  if (!local || !domain || !domain.includes(".")) {
    return { ok: false, message: "Please enter a valid email address." };
  }
  const tld = domain.split(".").pop() ?? "";
  if (tld.length < 2) {
    return { ok: false, message: "Please enter a valid email address." };
  }
  if (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed) === false) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  return { ok: true, value: trimmed };
}

/**
 * @param {string} countryCode
 * @param {string} rawNational
 * @returns {{ ok: true; e164: string; display: string; nationalDigits: string } | { ok: false; message: string }}
 */
export function validateConsultationPhone(countryCode, rawNational) {
  if (!isPlainString(rawNational)) {
    return { ok: false, message: "Please enter your phone number." };
  }

  const trimmed = rawNational.trim();
  if (!trimmed) {
    return { ok: false, message: "Please enter your phone number." };
  }

  if (/@/.test(trimmed) || /[a-zA-Z]/.test(trimmed)) {
    return {
      ok: false,
      message: "Phone numbers cannot contain letters or an email address.",
    };
  }
  if (URL_IN_TEXT.test(trimmed)) {
    return { ok: false, message: "Please enter a valid phone number." };
  }

  const strippedFormatting = trimmed.replace(/[\s().-]/g, "");
  if (!/^\+?\d+$/.test(strippedFormatting)) {
    if (/[a-zA-Z@]/.test(trimmed)) {
      return {
        ok: false,
        message: "Phone numbers cannot contain letters or an email address.",
      };
    }
    return { ok: false, message: "Please enter a valid phone number." };
  }

  const dial = isPlainString(countryCode) ? countryCode.trim() : "+1";
  const countryRule =
    CONSULTATION_PHONE_COUNTRIES.find((c) => c.code === dial) ??
    CONSULTATION_PHONE_COUNTRIES[CONSULTATION_PHONE_COUNTRIES.length - 1];

  let nationalDigits = strippedFormatting.replace(/^\+/, "");

  if (dial === "+") {
    if (strippedFormatting.startsWith("+")) {
      nationalDigits = strippedFormatting.slice(1);
    }
    if (nationalDigits.length < 7 || nationalDigits.length > 15) {
      return { ok: false, message: "Please enter a valid phone number." };
    }
    const e164 = `+${nationalDigits}`;
    return {
      ok: true,
      e164,
      display: e164,
      nationalDigits,
    };
  }

  if (strippedFormatting.startsWith("+")) {
    return { ok: false, message: "Please enter a valid phone number." };
  }

  nationalDigits = strippedFormatting;
  if (
    nationalDigits.length < countryRule.minNational ||
    nationalDigits.length > countryRule.maxNational
  ) {
    return { ok: false, message: "Please enter a valid phone number." };
  }

  const dialDigits = dial.replace(/\D/g, "");
  const e164 = `+${dialDigits}${nationalDigits}`;
  const display = `${dial} ${nationalDigits}`;

  return { ok: true, e164, display, nationalDigits };
}

/**
 * @param {unknown} raw
 * @returns {{ ok: true; value: string } | { ok: false; message: string }}
 */
export function validateConsultationMessage(raw) {
  if (raw === undefined || raw === null || raw === "") {
    return { ok: true, value: "" };
  }
  if (!isPlainString(raw)) {
    return { ok: false, message: "Please shorten your message." };
  }
  const normalized = raw.trim();
  if (normalized.length > CONSULTATION_MESSAGE_MAX) {
    return { ok: false, message: "Please shorten your message." };
  }
  return { ok: true, value: normalized };
}

/**
 * @param {unknown} body
 * @param {{ countryCode?: string }} [options]
 */
export function validateConsultationLead(body, options = {}) {
  /** @type {Partial<Record<ConsultationField, string>>} */
  const errors = {};

  if (body !== null && typeof body !== "object") {
    return {
      ok: false,
      errors: { firstName: "Please enter your first name." },
    };
  }

  const record = /** @type {Record<string, unknown>} */ (body ?? {});

  for (const key of ["firstName", "lastName", "email", "phone", "message"]) {
    const value = record[key];
    if (value !== undefined && value !== null && !isPlainString(value)) {
      errors[key] =
        key === "message"
          ? "Please shorten your message."
          : key === "email"
            ? "Please enter your email address."
            : key === "phone"
              ? "Please enter your phone number."
              : key === "firstName"
                ? "Please enter your first name."
                : "Please enter your last name.";
    }
  }

  const countryCode =
    isPlainString(options.countryCode) && options.countryCode.trim()
      ? options.countryCode.trim()
      : isPlainString(record.countryCode)
        ? record.countryCode.trim()
        : "+1";

  const first = validateConsultationName(
    "firstName",
    isPlainString(record.firstName) ? record.firstName : "",
  );
  if (!first.ok) errors.firstName = first.message;

  const last = validateConsultationName(
    "lastName",
    isPlainString(record.lastName) ? record.lastName : "",
  );
  if (!last.ok) errors.lastName = last.message;

  const email = validateConsultationEmail(
    isPlainString(record.email) ? record.email : "",
  );
  if (!email.ok) errors.email = email.message;

  const phone = validateConsultationPhone(
    countryCode,
    isPlainString(record.phone) ? record.phone : "",
  );
  if (!phone.ok) errors.phone = phone.message;

  const message = validateConsultationMessage(record.message);
  if (!message.ok) errors.message = message.message;

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: {
      firstName: first.value,
      lastName: last.value,
      email: email.value,
      phoneE164: phone.e164,
      phoneDisplay: phone.display,
      message: message.value,
      fullName: `${first.value} ${last.value}`,
    },
  };
}

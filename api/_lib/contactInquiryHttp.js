import {
  CONTACT_EMAIL,
  CONTACT_FORM_AUTORESPONSE,
  CONTACT_INQUIRY_CC_EMAIL,
} from "../../src/constants/contact.js";
import { validateConsultationLead } from "../../src/lib/consultationLeadValidation.js";

const FORMSUBMIT_AJAX_URL = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

/**
 * @param {unknown} body
 * @returns {Promise<{ status: number; json: object }>}
 */
export async function runContactInquiryPipeline(body) {
  if (body !== null && typeof body !== "object") {
    return {
      status: 400,
      json: {
        ok: false,
        error: "Invalid request.",
        errors: { firstName: "Please enter your first name." },
      },
    };
  }

  const record = /** @type {Record<string, unknown>} */ (body ?? {});
  for (const key of Object.keys(record)) {
    const allowed = new Set([
      "firstName",
      "lastName",
      "email",
      "phone",
      "message",
      "countryCode",
      "subject",
      "sourceLine",
    ]);
    if (!allowed.has(key)) {
      return {
        status: 400,
        json: { ok: false, error: "Invalid request." },
      };
    }
  }

  const validation = validateConsultationLead(record);
  if (!validation.ok) {
    return {
      status: 400,
      json: {
        ok: false,
        error: "Please correct the highlighted fields.",
        errors: validation.errors,
      },
    };
  }

  const { firstName, lastName, email, phoneE164, phoneDisplay, message, fullName } =
    validation.data;

  const subject =
    typeof record.subject === "string" && record.subject.trim()
      ? record.subject.trim().slice(0, 200)
      : "Contact inquiry - Reputation360";

  const sourceLine =
    typeof record.sourceLine === "string" ? record.sourceLine.trim().slice(0, 500) : "";

  const bodyLines = [
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phoneDisplay} (${phoneE164})`,
  ];
  if (message) {
    bodyLines.push("", "Message:", message);
  }
  if (sourceLine) {
    bodyLines.push("", sourceLine);
  }

  const res = await fetch(FORMSUBMIT_AJAX_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: fullName,
      email,
      message: bodyLines.join("\n"),
      _subject: subject,
      _template: "table",
      _captcha: "false",
      _cc: CONTACT_INQUIRY_CC_EMAIL,
      _autoresponse: CONTACT_FORM_AUTORESPONSE,
    }),
  });

  let data = {};
  try {
    data = await res.json();
  } catch {
    data = {};
  }

  const ok =
    res.ok &&
    (data.success === true ||
      data.success === "true" ||
      (typeof data.message === "string" &&
        data.message.toLowerCase().includes("success")));

  if (!ok) {
    return {
      status: 502,
      json: {
        ok: false,
        error:
          typeof data.message === "string"
            ? data.message
            : "Could not send your message. Please try again.",
      },
    };
  }

  return { status: 200, json: { ok: true, success: true } };
}

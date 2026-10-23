import { Resend } from "resend";
import {
  CONTACT_EMAIL,
  CONTACT_FORM_AUTORESPONSE,
  CONTACT_INQUIRY_CC_EMAIL,
} from "../../src/constants/contact.js";
import { validateConsultationLead } from "../../src/lib/consultationLeadValidation.js";

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

  // --- Send via Resend ---
  const apiKey = process.env.RESEND_API_KEY;
  const fromRaw = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !fromRaw) {
    console.error("[contact-inquiry] RESEND_API_KEY or RESEND_FROM_EMAIL not set");
    return {
      status: 502,
      json: { ok: false, error: "Could not send your message. Please try again." },
    };
  }

  const resend = new Resend(apiKey);

  const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"/></head>
<body style="margin:0;background:#f4f6fb;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#1a1f36;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #e6e9f2;">
        <tr><td style="background:#1F3B64;padding:28px 24px;color:#fff;">
          <div style="font-size:20px;font-weight:700;">Reputation360</div>
          <div style="font-size:14px;opacity:0.9;margin-top:6px;">New contact inquiry</div>
        </td></tr>
        <tr><td style="padding:28px 24px;">
          <table role="presentation" width="100%" style="border-collapse:collapse;font-size:15px;margin-bottom:20px;">
            <tr><td style="padding:10px 0;border-bottom:1px solid #eef1f7;"><strong>Name</strong></td><td align="right" style="padding:10px 0;border-bottom:1px solid #eef1f7;">${fullName}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #eef1f7;"><strong>Email</strong></td><td align="right" style="padding:10px 0;border-bottom:1px solid #eef1f7;"><a href="mailto:${email}" style="color:#2563eb;">${email}</a></td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #eef1f7;"><strong>Phone</strong></td><td align="right" style="padding:10px 0;border-bottom:1px solid #eef1f7;">${phoneDisplay} (${phoneE164})</td></tr>
            ${message ? `<tr><td style="padding:10px 0;" valign="top"><strong>Message</strong></td><td align="right" style="padding:10px 0;white-space:pre-line;">${message}</td></tr>` : ""}
          </table>
          ${sourceLine ? `<p style="margin:0;font-size:13px;color:#64748b;">${sourceLine}</p>` : ""}
        </td></tr>
        <tr><td style="padding:16px 24px;background:#f8fafc;font-size:12px;color:#94a3b8;text-align:center;">
          Reputation360 &middot; Contact inquiry submitted via thereputation360.com
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;

  const { error } = await resend.emails.send({
    from: fromRaw,
    to: CONTACT_EMAIL,
    cc: CONTACT_INQUIRY_CC_EMAIL,
    replyTo: email,
    subject,
    html,
  });

  if (error) {
    console.error("[contact-inquiry] Resend error:", error);
    return {
      status: 502,
      json: {
        ok: false,
        error: "Could not send your message. Please try again.",
      },
    };
  }

  // Send autoresponse to the submitter
  await resend.emails.send({
    from: fromRaw,
    to: email,
    subject: "We received your message – Reputation360",
    html: `<!DOCTYPE html>
<html><head><meta charset="utf-8"/></head>
<body style="margin:0;background:#f4f6fb;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#1a1f36;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #e6e9f2;">
        <tr><td style="background:#1F3B64;padding:28px 24px;color:#fff;">
          <div style="font-size:20px;font-weight:700;">Reputation360</div>
        </td></tr>
        <tr><td style="padding:28px 24px;">
          <p style="margin:0 0 16px;font-size:16px;">Hi ${firstName},</p>
          <p style="margin:0;line-height:1.6;font-size:15px;">${CONTACT_FORM_AUTORESPONSE}</p>
        </td></tr>
        <tr><td style="padding:16px 24px;background:#f8fafc;font-size:12px;color:#94a3b8;text-align:center;">
          Reputation360 &middot; thereputation360.com
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`,
  }).catch((e) => {
    // Non-critical — don't fail the whole request if autoresponse fails
    console.warn("[contact-inquiry] Autoresponse failed:", e);
  });

  return { status: 200, json: { ok: true, success: true } };
}

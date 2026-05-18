import { Resend } from "resend";

/**
 * @param {string} s
 */
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * @param {object} p
 * @param {string} p.to
 * @param {string} p.firstName
 * @param {string} p.lastName
 * @param {number} p.reportedScore
 * @param {number} p.positiveCount
 * @param {number} p.neutralCount
 * @param {number} p.negativeCount
 * @param {string} p.presenceLabel
 * @param {string} p.summary
 * @param {string} p.hurting
 * @param {string} p.improving
 * @param {Uint8Array} [p.pdfBytes]
 */
export async function sendReputationReportEmail(p) {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!key || !from) {
    throw new Error("RESEND_API_KEY and RESEND_FROM_EMAIL must be set");
  }

  const resend = new Resend(key);
  const name = `${p.firstName} ${p.lastName}`.trim();

  const hurtingHtml = escapeHtml(p.hurting).replace(/\n/g, "<br />");
  const improvingHtml = escapeHtml(p.improving).replace(/\n/g, "<br />");
  const summaryHtml = escapeHtml(p.summary);

  const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;background:#f4f6fb;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#1a1f36;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #e6e9f2;">
        <tr><td style="background:#1F3B64;padding:28px 24px;color:#fff;">
          <div style="font-size:20px;font-weight:700;">Reputation360</div>
          <div style="font-size:14px;opacity:0.9;margin-top:6px;">Your free Google reputation report card</div>
        </td></tr>
        <tr><td style="padding:28px 24px;">
          <p style="margin:0 0 12px;font-size:16px;">Hi ${escapeHtml(p.firstName)},</p>
          <p style="margin:0 0 20px;line-height:1.55;font-size:15px;">Thank you for running a free reputation scan with Reputation360. Below is a concise summary based on the first three pages of Google-style results we analyzed for your name.</p>

          <div style="border-radius:12px;background:#f0fdf4;border:1px solid #bbf7d0;padding:18px;margin-bottom:20px;">
            <div style="font-size:12px;font-weight:600;color:#166534;text-transform:uppercase;letter-spacing:0.04em;">Reputation score</div>
            <div style="font-size:42px;font-weight:800;color:#15803d;line-height:1.1;margin-top:6px;">${p.reportedScore}<span style="font-size:18px;color:#64748b;font-weight:600;"> / 85</span></div>
            <div style="margin-top:8px;font-size:14px;color:#334155;"><strong>Presence:</strong> ${escapeHtml(p.presenceLabel)}</div>
          </div>

          <table role="presentation" width="100%" style="margin-bottom:20px;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:10px 0;border-bottom:1px solid #eef1f7;"><strong>Positive links</strong></td><td align="right" style="padding:10px 0;border-bottom:1px solid #eef1f7;">${p.positiveCount}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #eef1f7;"><strong>Neutral links</strong></td><td align="right" style="padding:10px 0;border-bottom:1px solid #eef1f7;">${p.neutralCount}</td></tr>
            <tr><td style="padding:10px 0;"><strong>Negative links</strong></td><td align="right" style="padding:10px 0;">${p.negativeCount}</td></tr>
          </table>

          <h2 style="font-size:15px;margin:0 0 8px;color:#1F3B64;">Summary</h2>
          <p style="margin:0 0 20px;line-height:1.55;font-size:14px;color:#475569;">${summaryHtml}</p>

          <h2 style="font-size:15px;margin:0 0 8px;color:#b91c1c;">What may be hurting your reputation</h2>
          <p style="margin:0 0 20px;line-height:1.55;font-size:14px;color:#475569;">${hurtingHtml}</p>

          <h2 style="font-size:15px;margin:0 0 8px;color:#15803d;">What can improve your online presence</h2>
          <p style="margin:0 0 24px;line-height:1.55;font-size:14px;color:#475569;">${improvingHtml}</p>

          <p style="margin:0;line-height:1.55;font-size:13px;color:#64748b;">A PDF copy of this report is attached when your message supports attachments. This is an automated, educational scan - not legal, employment, or financial advice. If you would like a human-led audit and remediation plan, reply to this email or book a consultation on thereputation360.com.</p>
        </td></tr>
        <tr><td style="padding:16px 24px;background:#f8fafc;font-size:12px;color:#94a3b8;text-align:center;">
          Reputation360 &middot; You received this because you requested a free reputation scan for ${escapeHtml(name)}.
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;

  const attachments =
    p.pdfBytes && p.pdfBytes.byteLength > 0
      ? [
          {
            filename: "reputation360-free-scan-report.pdf",
            content: Buffer.from(p.pdfBytes),
            contentType: "application/pdf",
          },
        ]
      : undefined;

  const { data, error } = await resend.emails.send({
    from,
    to: p.to,
    subject: `Your Reputation Report Card - ${p.firstName} (score ${p.reportedScore}/85)`,
    html,
    attachments,
  });

  if (error) {
    throw new Error(error.message || "Resend send failed");
  }
  return data;
}

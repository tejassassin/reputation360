"use client";

import { useId, useRef, useState } from "react";
import {
  ArrowRight,
  ClipboardCheck,
  Route,
  Search,
} from "lucide-react";
import { submitContactInquiry } from "../constants/contact.js";
import { internalAnchorProps } from "../lib/internalLinkProps.js";
import { FREE_REPUTATION_SCAN_LABEL } from "../constants/freeRiskScan.js";
import {
  FREE_CONSULTATION_HEADING_ID,
  FREE_CONSULTATION_ID,
  HOME_CLOSING_LEAD_HEADING_ID,
  HOME_CLOSING_LEAD_ID,
} from "../constants/homeConsultation.js";
import { trackHomeLeadFormSubmit } from "../lib/conversionAnalytics.js";

const PHONE_COUNTRIES = [
  { code: "+1", label: "US", flag: "🇺🇸" },
  { code: "+44", label: "UK", flag: "🇬🇧" },
  { code: "+1", label: "CA", flag: "🇨🇦", id: "ca" },
  { code: "+61", label: "AU", flag: "🇦🇺" },
  { code: "+91", label: "IN", flag: "🇮🇳" },
  { code: "+", label: "Other", flag: "🌐", id: "other" },
];

const fieldClass = "r360-form-field w-full min-w-0";

const phoneCountryClass =
  "r360-form-field r360-form-field-select r360-phone-country w-[5.75rem] shrink-0";

const phoneInputClass = "r360-form-field r360-phone-input min-w-0 flex-1";

const labelClass =
  "mb-2 block font-heading text-[11px] font-bold uppercase tracking-[0.07em] text-navy";

/**
 * @param {object} props
 * @param {"hero" | "home_closing"} [props.instance]
 * @param {boolean} [props.showHeader]
 * @param {string} [props.submitLabel]
 * @param {boolean} [props.showBenefitsFooter]
 */
function HomeContactLeadForm({
  instance = "hero",
  showHeader = true,
  submitLabel,
  showBenefitsFooter = true,
}) {
  const baseId = useId().replace(/[^a-zA-Z0-9_-]/g, "x");
  const successRef = useRef(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [countryIdx, setCountryIdx] = useState("0");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const isClosing = instance === "home_closing";
  const wrapperId = isClosing ? HOME_CLOSING_LEAD_ID : FREE_CONSULTATION_ID;
  const statusHeadingId = isClosing ? HOME_CLOSING_LEAD_HEADING_ID : FREE_CONSULTATION_HEADING_ID;
  const formId = `${baseId}-lead-form`;
  const buttonLabel =
    submitLabel ?? "Request My Free Consultation";
  const inquirySubject = isClosing
    ? "Homepage lower consultation form - free consultation request"
    : "Homepage reputation analysis request";
  const sourceLine = isClosing
    ? "Source: Homepage lower consultation form (homepage_lower_consultation_form)"
    : "Source: Homepage contact form";

  const country = PHONE_COUNTRIES[Number(countryIdx)] ?? PHONE_COUNTRIES[0];

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    const fn = firstName.trim();
    const ln = lastName.trim();
    const em = email.trim();
    const ph = phone.trim();
    const note = message.trim();
    if (!fn || !ln || !em || !ph) {
      setError("Please fill in your name, email, and phone number.");
      return;
    }
    setSubmitting(true);
    try {
      const dial = country.code === "+" ? "" : `${country.code} `;
      const bodyLines = [
        `Name: ${fn} ${ln}`,
        `Email: ${em}`,
        `Phone: ${dial}${ph}`,
      ];
      if (note) {
        bodyLines.push("", "Message:", note);
      }
      bodyLines.push("", sourceLine);
      await submitContactInquiry({
        name: `${fn} ${ln}`,
        from: em,
        subject: inquirySubject,
        message: bodyLines.join("\n"),
      });
      trackHomeLeadFormSubmit(instance);
      setSent(true);
      requestAnimationFrame(() => {
        successRef.current?.focus({ preventScroll: true });
      });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Could not send your request. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      id={wrapperId}
      className={`r360-hero-lead-form min-w-0 bg-white ${isClosing ? "r360-home-closing-lead-form overflow-hidden" : "overflow-hidden"}`}
    >
      {showHeader ? (
        <div className="r360-form-header-wrap">
          <div className="flex items-start gap-3.5 sm:gap-4">
            <span className="r360-form-icon shrink-0" aria-hidden="true">
              <span className="r360-form-icon-pulse" aria-hidden="true"></span>
              <span className="r360-form-icon-core">
                <Search strokeWidth={2.3} />
              </span>
            </span>
            <div className="min-w-0 flex-1">
              <p
                id={FREE_CONSULTATION_HEADING_ID}
                tabIndex={-1}
                className="r360-form-header-title font-heading font-bold text-navy outline-none"
              >
                Get a Free Consultation
              </p>
              <p className="r360-form-header-sub mt-1 font-body text-steel">
                Free · Confidential · 15 minutes
              </p>
            </div>
          </div>
          <hr className="r360-form-header-divider" />
        </div>
      ) : null}

      {sent ? (
        <div
          className={`r360-form-body text-center ${isClosing ? "r360-form-body--closing-success" : ""}`}
          role="status"
        >
          <p
            ref={successRef}
            id={statusHeadingId}
            tabIndex={-1}
            className={
              isClosing
                ? "font-body text-base leading-relaxed text-navy outline-none sm:text-[1.05rem]"
                : "font-heading text-lg font-bold text-navy outline-none"
            }
          >
            {isClosing
              ? "Thank you. Your consultation request has been received, and a member of our team will contact you shortly."
              : "Thanks - we received your request."}
          </p>
          {!isClosing ? (
            <p className="mt-2 font-body text-sm leading-relaxed text-steel">
              A specialist will follow up shortly. You can also start a{" "}
              <a
                href="/free-reputation-scan"
                {...internalAnchorProps("/free-reputation-scan")}
                className="font-semibold text-green underline underline-offset-2"
              >
                {FREE_REPUTATION_SCAN_LABEL}
              </a>{" "}
              while you wait.
            </p>
          ) : null}
        </div>
      ) : (
        <form
          id={formId}
          onSubmit={onSubmit}
          className={`r360-form-body flex flex-col ${isClosing ? "r360-form-body--closing" : ""}`}
          noValidate
        >
          <div
            className={`r360-form-field-grid grid ${isClosing ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-2"}`}
          >
            <div className="min-w-0">
              <label className={labelClass} htmlFor={`${baseId}-fn`}>
                First name <span className="text-red-600">*</span>
              </label>
              <input
                id={`${baseId}-fn`}
                name="firstName"
                autoComplete="given-name"
                required
                placeholder="Michael"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={fieldClass}
              />
            </div>
            <div className="min-w-0">
              <label className={labelClass} htmlFor={`${baseId}-ln`}>
                Last name <span className="text-red-600">*</span>
              </label>
              <input
                id={`${baseId}-ln`}
                name="lastName"
                autoComplete="family-name"
                required
                placeholder="Carter"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={fieldClass}
              />
            </div>
          </div>

          <div className="r360-form-field-group">
            <label className={labelClass} htmlFor={`${baseId}-em`}>
              Email address <span className="text-red-600">*</span>
            </label>
            <input
              id={`${baseId}-em`}
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="michael.carter@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={fieldClass}
            />
          </div>

          <div className="r360-form-field-group">
            <label className={labelClass} htmlFor={`${baseId}-ph`}>
              Phone number <span className="text-red-600">*</span>
            </label>
            <div className="r360-phone-group flex min-w-0 gap-2">
              <label className="sr-only" htmlFor={`${baseId}-cc`}>
                Country code
              </label>
              <select
                id={`${baseId}-cc`}
                value={countryIdx}
                onChange={(e) => setCountryIdx(e.target.value)}
                className={phoneCountryClass}
              >
                {PHONE_COUNTRIES.map((c, i) => (
                  <option key={c.id ?? `${c.label}-${c.code}`} value={String(i)}>
                    {c.flag} {c.code}
                  </option>
                ))}
              </select>
              <input
                id={`${baseId}-ph`}
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                placeholder="(212) 555-0147"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={phoneInputClass}
              />
            </div>
          </div>

          {isClosing ? (
            <div className="r360-form-field-group">
              <label className={labelClass} htmlFor={`${baseId}-msg`}>
                Message
              </label>
              <textarea
                id={`${baseId}-msg`}
                name="message"
                rows={4}
                placeholder="Tell us briefly about your situation."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="r360-form-field r360-form-textarea w-full min-w-0 resize-y"
              />
            </div>
          ) : null}

          {error ? (
            <p
              role="alert"
              className="r360-form-field-group rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-800"
            >
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={submitting}
            className={`r360-form-submit ha-pill r360-form-field-group mt-0 flex w-full items-center justify-center gap-2.5 bg-green font-heading font-bold text-white transition disabled:cursor-not-allowed disabled:opacity-70 ${isClosing ? "r360-form-submit--closing" : "shadow-[0_10px_28px_-8px_rgba(76,175,80,0.55)] hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"}`}
          >
            {submitting ? "Sending..." : buttonLabel}
            {!submitting ? (
              <ArrowRight
                className={`shrink-0 text-white ${isClosing ? "h-[1.375rem] w-[1.375rem]" : "h-5 w-5"}`}
                aria-hidden
              />
            ) : null}
          </button>

          {isClosing ? (
            <p className="r360-form-consent r360-form-field-group mb-0 text-center font-body text-xs leading-relaxed text-slate-500 sm:text-[0.8125rem]">
              By submitting this form, you agree to our{" "}
              <a
                href="/terms-of-service"
                {...internalAnchorProps("/terms-of-service")}
                className="font-medium text-navy underline decoration-slate-300 underline-offset-2 transition hover:text-green hover:decoration-green/40"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy-policy"
                {...internalAnchorProps("/privacy-policy")}
                className="font-medium text-navy underline decoration-slate-300 underline-offset-2 transition hover:text-green hover:decoration-green/40"
              >
                Privacy Policy
              </a>
              .
            </p>
          ) : null}

          {showBenefitsFooter ? (
            <div className="r360-form-benefits-footer">
              <ul className="r360-form-benefits">
                <li className="r360-form-benefit">
                  <Search strokeWidth={2} aria-hidden="true" />
                  <span className="r360-form-benefit-label">
                    <span aria-hidden="true">
                      Search Results
                      <br />
                      Review
                    </span>
                    <span className="sr-only">Search Results Review</span>
                  </span>
                </li>
                <li className="r360-form-benefit">
                  <ClipboardCheck strokeWidth={2} aria-hidden="true" />
                  <span className="r360-form-benefit-label">
                    <span aria-hidden="true">
                      Practical
                      <br />
                      Recommendations
                    </span>
                    <span className="sr-only">Practical Recommendations</span>
                  </span>
                </li>
                <li className="r360-form-benefit">
                  <Route strokeWidth={2} aria-hidden="true" />
                  <span className="r360-form-benefit-label">
                    <span aria-hidden="true">
                      Clear Action
                      <br />
                      Plan
                    </span>
                    <span className="sr-only">Clear Action Plan</span>
                  </span>
                </li>
              </ul>
            </div>
          ) : null}
        </form>
      )}
    </div>
  );
}

export default HomeContactLeadForm;

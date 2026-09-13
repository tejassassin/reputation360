"use client";

import { useId, useState } from "react";
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
} from "../constants/homeConsultation.js";

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

function HomeContactLeadForm() {
  const baseId = useId().replace(/[^a-zA-Z0-9_-]/g, "x");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [countryIdx, setCountryIdx] = useState("0");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const country = PHONE_COUNTRIES[Number(countryIdx)] ?? PHONE_COUNTRIES[0];

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    const fn = firstName.trim();
    const ln = lastName.trim();
    const em = email.trim();
    const ph = phone.trim();
    if (!fn || !ln || !em || !ph) {
      setError("Please fill in your name, email, and phone number.");
      return;
    }
    setSubmitting(true);
    try {
      const dial = country.code === "+" ? "" : `${country.code} `;
      await submitContactInquiry({
        name: `${fn} ${ln}`,
        from: em,
        subject: "Homepage reputation analysis request",
        message: [
          `Name: ${fn} ${ln}`,
          `Email: ${em}`,
          `Phone: ${dial}${ph}`,
          "",
          "Source: Homepage contact form",
        ].join("\n"),
      });
      setSent(true);
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
      id={FREE_CONSULTATION_ID}
      className="r360-hero-lead-form min-w-0 overflow-hidden bg-white"
    >
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

      {sent ? (
        <div className="r360-form-body text-center" role="status">
          <p className="font-heading text-lg font-bold text-navy">
            Thanks - we received your request.
          </p>
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
        </div>
      ) : (
        <form onSubmit={onSubmit} className="r360-form-body flex flex-col">
          <div className="r360-form-field-grid grid grid-cols-2">
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
            className="r360-form-submit ha-pill r360-form-field-group mt-0 flex w-full items-center justify-center gap-2 bg-green font-heading font-bold text-white shadow-[0_10px_28px_-8px_rgba(76,175,80,0.55)] transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? "Sending..." : "Request My Free Consultation"}
            {!submitting ? <ArrowRight className="h-5 w-5 shrink-0" aria-hidden /> : null}
          </button>

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
        </form>
      )}
    </div>
  );
}

export default HomeContactLeadForm;

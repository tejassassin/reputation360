import { useId, useState } from "react";
import { X } from "lucide-react";
import {
  CONTACT_EMAIL,
  submitContactInquiry,
} from "@/constants/contact.js";

const fieldClass =
  "w-full rounded-lg border border-slate-200/90 bg-white px-3 py-2 text-sm text-[#1F3B64] outline-none placeholder:text-slate-400 focus:border-[#4CAF50]/60 focus:ring-2 focus:ring-[#4CAF50]/20";

/**
 * Inline compose UI for the floating dock (To / From / Message).
 */
export function DockEmailComposePanel({ panelId, titleId, onClose }) {
  const fromId = useId();
  const messageId = useId();
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    setError("");
    setStatus("sending");
    try {
      await submitContactInquiry({
        from,
        message,
        subject: "Contact inquiry - Reputation360 (quick email)",
      });
      setStatus("sent");
      setMessage("");
    } catch (err) {
      setStatus("idle");
      setError(
        err instanceof Error ? err.message : "Could not send. Please try again.",
      );
    }
  }

  return (
    <section
      id={panelId}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="pointer-events-auto flex w-[min(20rem,calc(100vw-1.5rem))] max-h-[min(28rem,calc(100dvh-10rem))] flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-[#F5F7FA] shadow-[0_20px_50px_-12px_rgba(31,59,100,0.35)]"
    >
      <header className="flex shrink-0 items-center justify-between gap-2 border-b border-slate-200/80 bg-white px-3 py-2.5">
        <div className="min-w-0">
          <h2
            id={titleId}
            className="truncate font-heading text-sm font-bold text-[#1F3B64]"
          >
            Compose email
          </h2>
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="inline-flex h-9 w-9 shrink-0 touch-manipulation items-center justify-center rounded-full text-[#1F3B64] hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4CAF50]"
          aria-label="Close email panel"
        >
          <X className="h-5 w-5" strokeWidth={2} aria-hidden />
        </button>
      </header>

      {status === "sent" ? (
        <div className="space-y-3 px-3 py-4 font-body text-sm text-[#43474e]">
          <p className="rounded-lg border border-[#4CAF50]/30 bg-[#4CAF50]/10 px-3 py-3 leading-relaxed text-[#1F3B64]">
            Your message was sent. We&apos;ll reply to your email soon.
          </p>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setStatus("idle");
              setError("");
            }}
            className="w-full rounded-xl border border-[#1F3B64]/20 bg-white px-4 py-2.5 text-sm font-semibold text-[#1F3B64] transition hover:bg-slate-50"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form
          className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-3 py-3 font-body text-sm"
          onSubmit={handleSubmit}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <label
              htmlFor={`${panelId}-to`}
              className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[#6B7280]"
            >
              To
            </label>
            <input
              id={`${panelId}-to`}
              type="email"
              readOnly
              value={CONTACT_EMAIL}
              className={`${fieldClass} cursor-default bg-slate-50 text-[#1F3B64]/90`}
            />
          </div>
          <div>
            <label
              htmlFor={fromId}
              className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[#6B7280]"
            >
              From
            </label>
            <input
              id={fromId}
              type="email"
              name="email"
              required
              autoComplete="email"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="your@email.com"
              className={fieldClass}
            />
          </div>
          <div className="flex min-h-0 flex-1 flex-col">
            <label
              htmlFor={messageId}
              className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[#6B7280]"
            >
              Message
            </label>
            <textarea
              id={messageId}
              name="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="How can we help?"
              className={`${fieldClass} min-h-[7rem] flex-1 resize-y`}
            />
          </div>
          {error ? (
            <p className="text-xs leading-relaxed text-red-600" role="alert">
              {error}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={status === "sending"}
            className="ha-pill shrink-0 rounded-xl bg-cta-consult px-4 py-3 text-center text-sm font-heading font-semibold text-white shadow-md shadow-cta-consult/25 transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
        </form>
      )}
    </section>
  );
}

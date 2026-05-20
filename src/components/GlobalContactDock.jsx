import { useCallback, useId, useState } from "react";
import { createPortal } from "react-dom";
import { Mail, X } from "lucide-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import {
  CONTACT_EMAIL,
  contactMailtoHref,
  contactWhatsAppHref,
} from "@/constants/contact.js";
import R360Chatbot from "./R360Chatbot.jsx";

const dockBtn =
  "inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border shadow-lg transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.97] motion-reduce:transition-none sm:h-14 sm:w-14";

/**
 * Portaled to document.body so no #root overflow/transform/stacking can block hits.
 * Email opens a small on-page panel (like the chatbot), not a new tab or window.
 */
export default function GlobalContactDock() {
  const [emailOpen, setEmailOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const emailPanelId = useId();
  const emailTitleId = useId();

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, []);

  if (typeof document === "undefined") return null;

  return createPortal(
    <nav
      className="pointer-events-auto fixed bottom-0 right-0 isolate z-[10000] flex max-w-[100vw] flex-col items-end gap-2.5 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pr-[max(0.75rem,env(safe-area-inset-right))] sm:bottom-2 sm:right-2 sm:p-4 md:bottom-4 md:right-4"
      aria-label="Quick contact"
    >
      <a
        href={contactWhatsAppHref()}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          dockBtn,
          "relative z-[10001] touch-manipulation border-emerald-700/30 bg-[#25D366] text-white hover:bg-[#20bd5a] hover:shadow-xl active:opacity-90",
        )}
        aria-label={`Chat on WhatsApp with Reputation360 (opens in a new tab)`}
      >
        <IconBrandWhatsapp
          className="pointer-events-none h-6 w-6 shrink-0 text-white sm:h-7 sm:w-7"
          stroke={1.5}
          aria-hidden
        />
      </a>

      <div className="relative z-[10003] flex flex-col items-end gap-2.5">
        {emailOpen ? (
          <section
            id={emailPanelId}
            role="dialog"
            aria-modal="true"
            aria-labelledby={emailTitleId}
            className="pointer-events-auto w-[min(20rem,calc(100vw-1.5rem))] overflow-hidden rounded-2xl border border-slate-200/90 bg-[#F5F7FA] shadow-[0_20px_50px_-12px_rgba(31,59,100,0.35)]"
          >
            <header className="flex items-center justify-between gap-2 border-b border-slate-200/80 bg-white px-3 py-2.5">
              <div className="min-w-0">
                <h2
                  id={emailTitleId}
                  className="truncate font-heading text-sm font-bold text-[#1F3B64]"
                >
                  Email us
                </h2>
                <p className="truncate text-xs text-[#6B7280]">
                  Opens your mail app to compose
                </p>
              </div>
              <button
                type="button"
                onClick={() => setEmailOpen(false)}
                className="inline-flex h-9 w-9 shrink-0 touch-manipulation items-center justify-center rounded-full text-[#1F3B64] hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4CAF50]"
                aria-label="Close email panel"
              >
                <X className="h-5 w-5" strokeWidth={2} aria-hidden />
              </button>
            </header>
            <div className="space-y-3 px-3 py-3 font-body text-sm text-[#43474e]">
              <p className="leading-relaxed">
                We&apos;ll open a new message in your default mail app (Mail, Outlook,
                etc.) with our address already filled in.
              </p>
              <p className="rounded-lg border border-slate-200/90 bg-white px-3 py-2 text-center font-mono text-sm font-semibold text-[#1F3B64]">
                {CONTACT_EMAIL}
              </p>
              <a
                href={contactMailtoHref()}
                onClick={(e) => e.stopPropagation()}
                className="ha-pill flex w-full items-center justify-center rounded-xl bg-cta-consult px-4 py-3 text-center text-sm font-heading font-semibold text-white shadow-md shadow-cta-consult/25 transition hover:brightness-95"
              >
                Open in Mail app
              </a>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  void copyEmail();
                }}
                className="w-full rounded-xl border border-[#1F3B64]/20 bg-white px-4 py-2.5 text-sm font-semibold text-[#1F3B64] transition hover:border-[#4CAF50]/40 hover:bg-slate-50"
              >
                {copied ? "Copied!" : "Copy email address"}
              </button>
            </div>
          </section>
        ) : null}

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setEmailOpen((open) => !open);
          }}
          className={cn(
            dockBtn,
            "touch-manipulation border-white/70 bg-white text-navy shadow-[0_12px_28px_-8px_rgba(31,59,100,0.22)] hover:border-[#4CAF50]/50 hover:bg-slate-50 hover:shadow-xl active:opacity-90",
            emailOpen && "border-[#4CAF50]/50 ring-2 ring-[#4CAF50]/30",
          )}
          aria-expanded={emailOpen}
          aria-controls={emailOpen ? emailPanelId : undefined}
          aria-label={
            emailOpen
              ? "Close email panel"
              : `Email Reputation360 at ${CONTACT_EMAIL}`
          }
          title={`Email ${CONTACT_EMAIL}`}
        >
          <Mail
            className="pointer-events-none h-5 w-5 shrink-0 text-[#1F3B64] sm:h-6 sm:w-6"
            strokeWidth={2.1}
            aria-hidden
          />
        </button>
      </div>

      <div className="relative z-[10001] flex w-auto flex-col items-end">
        <R360Chatbot />
      </div>
    </nav>,
    document.body,
  );
}

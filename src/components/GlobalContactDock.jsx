import { Mail } from "lucide-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import {
  CONTACT_EMAIL,
  contactMailtoHref,
  contactWhatsAppHref,
} from "@/constants/contact.js";
import R360Chatbot from "./R360Chatbot.jsx";

const dockBtn =
  "inline-flex h-12 w-12 items-center justify-center rounded-full border shadow-lg transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.97] motion-reduce:transition-none sm:h-14 sm:w-14";

/**
 * Fixed WhatsApp + Email shortcuts on every page (sits above content, below modals).
 */
export default function GlobalContactDock() {
  return (
    <nav
      className="fixed bottom-0 right-0 z-[55] flex max-w-[100vw] flex-col items-end gap-2.5 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pr-[max(0.75rem,env(safe-area-inset-right))] sm:bottom-2 sm:right-2 sm:p-4 md:bottom-4 md:right-4"
      aria-label="Quick contact"
    >
      <a
        href={contactWhatsAppHref()}
        target="_blank"
        rel="noopener noreferrer"
        className={`${dockBtn} touch-manipulation border-emerald-700/30 bg-[#25D366] text-white hover:bg-[#20bd5a] hover:shadow-xl active:opacity-90`}
        aria-label={`Chat on WhatsApp with Reputation360 (opens in a new tab)`}
      >
        <IconBrandWhatsapp
          className="h-6 w-6 shrink-0 text-white sm:h-7 sm:w-7"
          stroke={1.5}
          aria-hidden
        />
      </a>
      <a
        href={contactMailtoHref()}
        className={`${dockBtn} touch-manipulation border-white/70 bg-white text-navy shadow-[0_12px_28px_-8px_rgba(31,59,100,0.22)] hover:border-[#4CAF50]/50 hover:bg-slate-50 hover:shadow-xl active:opacity-90`}
        aria-label={`Email Reputation360 at ${CONTACT_EMAIL}`}
      >
        <Mail
          className="h-5 w-5 shrink-0 text-[#1F3B64] sm:h-6 sm:w-6"
          strokeWidth={2.1}
          aria-hidden
        />
      </a>
      <R360Chatbot />
    </nav>
  );
}

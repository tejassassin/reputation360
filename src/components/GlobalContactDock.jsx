import { createPortal } from "react-dom";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { contactWhatsAppHref } from "@/constants/contact.js";
import { FREE_RISK_SCAN_PATH } from "@/constants/freeRiskScan.js";
import R360Chatbot from "./R360Chatbot.jsx";

const dockBtn =
  "inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border shadow-lg transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.97] motion-reduce:transition-none sm:h-14 sm:w-14";

/**
 * Portaled to document.body so no #root overflow/transform/stacking can block hits.
 * Displays WhatsApp contact and the Birdeye chatbot.
 */
export default function GlobalContactDock() {
  if (typeof document === "undefined") return null;

  if (window.location.pathname === FREE_RISK_SCAN_PATH) return null;

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

      <div className="relative z-[10001] flex w-auto flex-col items-end">
        <R360Chatbot />
      </div>
    </nav>,
    document.body,
  );
}

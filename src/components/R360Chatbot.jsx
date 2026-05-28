import { useCallback, useEffect, useId, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import {
  R360_CHATBOT_ENTRIES,
  R360_CHATBOT_QUICK_PROMPTS,
} from "@/data/r360ChatbotKnowledge.js";
import { matchR360ChatbotEntry } from "@/lib/r360ChatbotMatch.js";
import {
  fetchReputationAgentReport,
  formatReputationReportForChat,
} from "@/lib/formatReputationReport.js";
import {
  FREE_REPUTATION_SCAN_LABEL,
  FREE_RISK_SCAN_PATH,
} from "@/constants/freeRiskScan.js";
import { CONTACT_EMAIL } from "@/constants/contact.js";
import { internalAnchorProps } from "@/lib/internalLinkProps.js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SCAN_START_PROMPT = "Scan a person's reputation";
/** "Jane Doe" or "scan Jane Doe" */
const FULL_NAME_RE =
  /^(?:scan\s+)?([A-Za-z][\w'.-]*)\s+([A-Za-z][\w'.-]+(?:\s+[A-Za-z][\w'.-]+)*)$/i;

/** Matches `GlobalContactDock` icon buttons for a consistent dock. */
const dockBtn =
  "inline-flex h-12 w-12 items-center justify-center rounded-full border shadow-lg transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.97] motion-reduce:transition-none sm:h-14 sm:w-14";

/** Minimum match score before we treat a curated entry as confident. */
const MATCH_THRESHOLD = 5;

const FALLBACK_REPLY =
  "For ORM and suppression FAQs I can help here. For a personalized web scan of a specific person, tap \"Scan a person's reputation\" or type their full name (for example Jane Doe), then your email - I'll search live results and summarize sentiment for that name only.";

function buildWelcomeMessage() {
  return `Hey - welcome to Reputation360. Ask about ORM, timelines, and pricing - or tap "${SCAN_START_PROMPT}" for a personalized web scan of someone's name.`;
}

/**
 * @param {{ href: string; label: string }} cta
 */
function CtaLink({ cta }) {
  return (
    <a
      href={cta.href}
      className="mt-2 inline-flex text-sm font-semibold text-[#2E5B88] underline decoration-[#4CAF50]/50 underline-offset-2 hover:decoration-[#4CAF50]"
      {...internalAnchorProps(cta.href)}
    >
      {cta.label}
    </a>
  );
}

/**
 * @param {{ role: "user" | "assistant"; text: string; cta?: { href: string; label: string } }} props
 */
function ChatBubble({ role, text, cta }) {
  const isUser = role === "user";
  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={
          isUser
            ? "max-w-[90%] rounded-2xl rounded-br-md bg-[#2E5B88] px-3.5 py-2.5 text-sm leading-relaxed text-white shadow-sm"
            : "max-w-[90%] rounded-2xl rounded-bl-md border border-slate-200/90 bg-white px-3.5 py-2.5 text-sm leading-relaxed text-[#1F3B64] shadow-sm"
        }
      >
        <p className="whitespace-pre-wrap">{text}</p>
        {cta ? <CtaLink cta={cta} /> : null}
      </div>
    </div>
  );
}

export default function R360Chatbot() {
  const panelTitleId = useId();
  const panelDialogId = useId();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(() => [
    { id: "w", role: "assistant", text: buildWelcomeMessage() },
  ]);
  const [scanStep, setScanStep] = useState(null);
  const [scanDraft, setScanDraft] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const listRef = useRef(null);
  const inputRef = useRef(null);
  /** Synchronous name capture (avoids stale React state on the email step). */
  const scanDraftRef = useRef({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 50);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, open]);

  const pushAssistant = useCallback((text, cta) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `a-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        role: "assistant",
        text,
        cta,
      },
    ]);
  }, []);

  const startScanFlow = useCallback(() => {
    scanDraftRef.current = { firstName: "", lastName: "", email: "" };
    setScanStep("first");
    setScanDraft({ firstName: "", lastName: "", email: "" });
    pushAssistant(
      "I'll search the web for that person's name, read the top results, and summarize reputation sentiment. What is their first name?",
    );
  }, [pushAssistant]);

  const runReputationScan = useCallback(
    async (firstName, lastName, email) => {
      const first = firstName.trim();
      const last = lastName.trim();
      const mail = email.trim();
      if (!first || !last) {
        pushAssistant(
          "I need both first and last name for a web scan. Tap \"Scan a person's reputation\" or type a full name like Jane Doe.",
        );
        return;
      }
      setScanStep("loading");
      pushAssistant(
        `Researching ${first} ${last} on the web now. This usually takes 30-90 seconds...`,
      );
      try {
        const data = await fetchReputationAgentReport({
          firstName: first,
          lastName: last,
          email: mail,
        });
        const text = formatReputationReportForChat(data.report, data.subject);
        pushAssistant(text, {
          href: FREE_RISK_SCAN_PATH,
          label: FREE_REPUTATION_SCAN_LABEL,
        });
      } catch (e) {
        pushAssistant(
          e instanceof Error
            ? e.message
            : "The reputation scan could not complete. Check that TAVILY_API_KEY and OPENROUTER_API_KEY are set in .env.local, then restart npm run dev.",
        );
      } finally {
        setScanStep(null);
        scanDraftRef.current = { firstName: "", lastName: "", email: "" };
        setScanDraft({ firstName: "", lastName: "", email: "" });
      }
    },
    [pushAssistant],
  );

  const handleSend = useCallback(
    async (raw) => {
      const trimmed = raw.trim();
      if (!trimmed || scanStep === "loading") return;

      setMessages((prev) => [
        ...prev,
        {
          id: `u-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
          role: "user",
          text: trimmed,
        },
      ]);
      setInput("");

      if (trimmed === SCAN_START_PROMPT || /^scan\s*$/i.test(trimmed)) {
        startScanFlow();
        return;
      }

      const inlineName = trimmed.match(FULL_NAME_RE);
      if (inlineName && scanStep !== "loading") {
        const firstName = inlineName[1];
        const lastName = inlineName[2];
        scanDraftRef.current = {
          ...scanDraftRef.current,
          firstName,
          lastName,
        };
        setScanDraft((d) => ({ ...d, firstName, lastName }));
        setScanStep("email");
        pushAssistant(
          `I'll run a live web scan for ${firstName} ${lastName}. What email should we associate with this scan?`,
        );
        return;
      }

      if (scanStep === "first") {
        scanDraftRef.current = {
          ...scanDraftRef.current,
          firstName: trimmed,
        };
        setScanDraft((d) => ({ ...d, firstName: trimmed }));
        setScanStep("last");
        pushAssistant(`Got it. What is ${trimmed}'s last name?`);
        return;
      }

      if (scanStep === "last") {
        scanDraftRef.current = {
          ...scanDraftRef.current,
          lastName: trimmed,
        };
        setScanDraft((d) => ({ ...d, lastName: trimmed }));
        setScanStep("email");
        pushAssistant("Thanks. What email should we associate with this scan?");
        return;
      }

      if (scanStep === "email") {
        if (!EMAIL_RE.test(trimmed)) {
          pushAssistant("Please enter a valid email address to continue.");
          return;
        }
        const { firstName, lastName } = scanDraftRef.current;
        await runReputationScan(firstName, lastName, trimmed);
        return;
      }

      const { entry, score } = matchR360ChatbotEntry(trimmed, R360_CHATBOT_ENTRIES);
      if (entry && score >= MATCH_THRESHOLD) {
        pushAssistant(entry.reply, entry.cta);
      } else {
        pushAssistant(FALLBACK_REPLY, {
          href: "/resources/faqs",
          label: "Browse FAQs",
        });
      }
    },
    [pushAssistant, runReputationScan, scanStep, startScanFlow],
  );

  return (
    <div className="pointer-events-none relative z-0 flex max-w-[100vw] flex-col items-end gap-2.5">
      {open ? (
        <section
          id={panelDialogId}
          role="dialog"
          aria-modal="true"
          aria-labelledby={panelTitleId}
          className="pointer-events-auto flex h-[min(32rem,calc(100dvh-12.5rem))] w-[min(22rem,calc(100vw-1rem))] flex-col overflow-hidden overscroll-contain rounded-2xl border border-slate-200/90 bg-[#F5F7FA] shadow-[0_20px_50px_-12px_rgba(31,59,100,0.35)] sm:h-[min(32rem,calc(100dvh-8rem))] sm:w-96"
        >
            <header className="flex items-center justify-between gap-2 border-b border-slate-200/80 bg-white px-3 py-2.5">
              <div className="min-w-0">
                <h2
                  id={panelTitleId}
                  className="truncate font-headline-faq text-sm font-bold tracking-tight text-[#1F3B64]"
                >
                  Reputation360 assistant
                </h2>
                <p className="truncate text-xs text-[#6B7280]">
                  Practical guidance - not legal advice
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-full text-[#1F3B64] hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4CAF50] sm:h-9 sm:w-9"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" strokeWidth={2} aria-hidden />
              </button>
            </header>

            <div
              ref={listRef}
              className="flex min-h-0 flex-1 flex-col gap-2.5 overflow-y-auto px-3 py-3"
              aria-live="polite"
            >
              {messages.map((m) => (
                <ChatBubble
                  key={m.id}
                  role={m.role}
                  text={m.text}
                  cta={m.cta}
                />
              ))}
            </div>

            <div className="border-t border-slate-200/80 bg-white px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
              <div className="mb-2 flex flex-wrap gap-1.5">
                {R360_CHATBOT_QUICK_PROMPTS.map((label) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => handleSend(label)}
                    className="min-h-10 touch-manipulation rounded-full border border-[#2E5B88]/20 bg-[#2E5B88]/8 px-3 py-2 text-left text-[11px] font-medium leading-snug text-[#1F3B64] hover:border-[#4CAF50]/40 hover:bg-[#4CAF50]/12 active:opacity-90 sm:min-h-0 sm:px-2.5 sm:py-1"
                  >
                    {label}
                  </button>
                ))}
              </div>
              <form
                className="flex items-end gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(input);
                }}
              >
                <label htmlFor="r360-chatbot-input" className="sr-only">
                  Message to Reputation360 assistant
                </label>
                <textarea
                  id="r360-chatbot-input"
                  ref={inputRef}
                  rows={2}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend(input);
                    }
                  }}
                  placeholder={
                    scanStep === "first"
                      ? "First name..."
                      : scanStep === "last"
                        ? "Last name..."
                        : scanStep === "email"
                          ? "Email address..."
                          : scanStep === "loading"
                            ? "Scan in progress..."
                            : "Ask about ORM, timelines, or scan a name..."
                  }
                  disabled={scanStep === "loading"}
                  enterKeyHint="send"
                  className="min-h-[2.75rem] min-w-0 flex-1 touch-manipulation resize-none rounded-xl border border-slate-200 bg-[#F5F7FA] px-3 py-2.5 text-base text-[#1F3B64] placeholder:text-slate-400 focus-visible:border-[#4CAF50]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-[#4CAF50]/40 sm:text-sm"
                />
                <button
                  type="submit"
                  className="inline-flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-full bg-[#4CAF50] text-white shadow-sm hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E5B88] disabled:opacity-40 active:opacity-90 sm:h-10 sm:w-10"
                  aria-label="Send message"
                  disabled={!input.trim()}
                >
                  <Send className="h-4 w-4" strokeWidth={2.2} aria-hidden />
                </button>
              </form>
              <p className="mt-2 text-center text-[10px] text-[#6B7280]">
                {CONTACT_EMAIL} - free consultation available
              </p>
            </div>
        </section>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`${dockBtn} pointer-events-auto touch-manipulation border-[#2E5B88]/35 bg-[#2E5B88] text-white shadow-[0_12px_28px_-8px_rgba(31,59,100,0.35)] hover:bg-[#254a73] hover:shadow-xl active:opacity-90`}
        aria-expanded={open}
        aria-controls={open ? panelDialogId : undefined}
        aria-label={open ? "Close Reputation360 assistant" : "Open Reputation360 assistant"}
      >
        {open ? (
          <X className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.2} aria-hidden />
        ) : (
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.1} aria-hidden />
        )}
      </button>
    </div>
  );
}

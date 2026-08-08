import { useCallback, useEffect, useId, useRef, useState } from "react";
import { MessageCircle, Send, X, MessageSquare, Sparkles, Check } from "lucide-react";
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
import mayaAvatar from "../assets/maya_avatar.png";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SCAN_START_PROMPT = "Scan a person's reputation";
const FULL_NAME_RE =
  /^(?:scan\s+)?([A-Za-z][\w'.-]*)\s+([A-Za-z][\w'.-]+(?:\s+[A-Za-z][\w'.-]+)*)$/i;

const MATCH_THRESHOLD = 5;

const FALLBACK_REPLY =
  "For ORM and suppression FAQs I can help here. For a personalized web scan of a specific person, tap \"Scan a person's reputation\" or type their full name (for example Jane Doe), then your email - I'll search live results and summarize sentiment for that name only.";

function buildWelcomeMessage() {
  return `Hey! Welcome to Reputation360. Ask about ORM, timelines, and pricing - or tap "${SCAN_START_PROMPT}" for a personalized web scan of someone's name.`;
}

function CtaLink({ cta }) {
  return (
    <a
      href={cta.href}
      className="mt-2 inline-flex text-sm font-semibold text-[#1F3B64] underline decoration-[#4CAF50]/50 underline-offset-2 hover:decoration-[#4CAF50] transition"
      {...internalAnchorProps(cta.href)}
    >
      {cta.label}
    </a>
  );
}

function ChatBubble({ role, text, cta }) {
  const isUser = role === "user";
  return (
    <div className={`flex gap-2.5 ${isUser ? "justify-end" : "justify-start animate-fade-in"}`}>
      {!isUser && (
        <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full border border-slate-100 shadow-sm">
          <img src={mayaAvatar} alt="Maya" className="h-full w-full object-cover" />
        </div>
      )}
      <div
        className={
          isUser
            ? "max-w-[80%] rounded-2xl rounded-tr-sm bg-[#1F3B64] px-4 py-2.5 text-sm leading-relaxed text-white shadow-sm"
            : "max-w-[80%] rounded-2xl rounded-tl-sm border border-slate-100 bg-white px-4 py-2.5 text-sm leading-relaxed text-[#1F3B64] shadow-sm"
        }
      >
        <p className="whitespace-pre-wrap">{text}</p>
        {cta ? <CtaLink cta={cta} /> : null}
      </div>
    </div>
  );
}

// Elegant custom bird/checkmark logo for the button
function BirdLogo() {
  return (
    <svg viewBox="0 0 100 100" className="h-7 w-7 text-white fill-current transform scale-110">
      <path d="M30,75 C20,70 12,55 15,40 C18,25 32,15 50,15 C68,15 82,25 85,40 C88,55 80,70 70,75 L75,85 C77,89 74,92 70,90 L55,80 C50,81 45,81 40,80 L25,90 C21,92 18,89 20,85 L25,75 Z" className="opacity-10" />
      <path d="M50,20 C32,20 22,35 22,50 C22,65 35,78 50,78 C65,78 78,65 78,50 C78,35 68,20 50,20 Z" />
      <path d="M38,48 L46,56 L62,38" fill="none" stroke="#1F3B64" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
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
  const [showGreeting, setShowGreeting] = useState(false);
  const listRef = useRef(null);
  const inputRef = useRef(null);
  const scanDraftRef = useRef({
    firstName: "",
    lastName: "",
    email: "",
  });

  // Delay showing the greeting card slightly on first mount if not open
  useEffect(() => {
    const isDismissed = sessionStorage.getItem("r360_chatbot_greeting_dismissed");
    if (!isDismissed && !open) {
      const t = setTimeout(() => setShowGreeting(true), 3000);
      return () => clearTimeout(t);
    }
  }, [open]);

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
            : "The reputation scan could not complete. Check API keys in settings.",
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

  const triggerAction = (type) => {
    setShowGreeting(false);
    setOpen(true);
    if (type === "sales") {
      handleSend("Book a consultation");
    } else if (type === "support") {
      handleSend("Reach you");
    }
  };

  const closeGreeting = (e) => {
    e.stopPropagation();
    setShowGreeting(false);
    sessionStorage.setItem("r360_chatbot_greeting_dismissed", "true");
  };

  return (
    <div className="pointer-events-none relative z-50 flex max-w-[100vw] flex-col items-end gap-3 select-none">
      
      {/* Greeting Bubble Popover */}
      {showGreeting && !open && (
        <div className="pointer-events-auto relative mr-2 flex flex-col items-end gap-2 animate-fade-in">
          {/* Main Card */}
          <div 
            onClick={() => { setShowGreeting(false); setOpen(true); }}
            className="flex max-w-[340px] cursor-pointer items-start gap-3 rounded-2xl rounded-br-sm border border-slate-100 bg-white p-4 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.12)] transition duration-200 hover:scale-[1.01] hover:shadow-[0_12px_40px_-5px_rgba(0,0,0,0.16)]"
          >
            {/* Avatar */}
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-slate-100 shadow-sm">
              <img src={mayaAvatar} alt="Maya" className="h-full w-full object-cover" />
              <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border border-white bg-green-500" />
            </div>
            {/* Content */}
            <div className="flex-1 pr-4">
              <p className="text-sm font-medium leading-relaxed text-slate-800">
                Hey! I'm <span className="font-bold text-[#1F3B64]">Maya</span>, your <span className="font-bold text-[#1F3B64]">AI Reputation Specialist</span>. Any questions I can answer for you?
              </p>
              <span className="mt-1 block text-xs text-slate-400">Maya • Just now</span>
            </div>
            {/* Close Greeting Button */}
            <button
              type="button"
              onClick={closeGreeting}
              className="absolute right-2 top-2 rounded-full p-1 text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition"
              aria-label="Dismiss greeting"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Quick Action Pills Under Card */}
          <div className="flex flex-col gap-1.5 items-end">
            <button
              onClick={() => triggerAction("sales")}
              className="flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 hover:border-slate-300"
            >
              🚀 Talk to Sales
            </button>
            <button
              onClick={() => triggerAction("support")}
              className="flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 hover:border-slate-300"
            >
              🔧 Get Support
            </button>
            <button
              onClick={() => { setShowGreeting(false); setOpen(true); }}
              className="flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 hover:border-slate-300"
            >
              💬 Ask a question
            </button>
          </div>
        </div>
      )}

      {/* Main Chat Panel */}
      {open && (
        <section
          id={panelDialogId}
          role="dialog"
          aria-modal="true"
          aria-labelledby={panelTitleId}
          className="pointer-events-auto flex h-[min(38rem,calc(100dvh-7.5rem))] w-[min(24rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-2xl border border-slate-100 bg-[#F8FAFC] shadow-[0_15px_50px_-10px_rgba(31,59,100,0.22)] sm:w-96 animate-fade-in"
        >
          {/* Header */}
          <header className="flex items-center justify-between gap-3 bg-[#1F3B64] px-4 py-3.5 text-white">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-white/20 shadow-sm">
                <img src={mayaAvatar} alt="Maya" className="h-full w-full object-cover" />
                <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border border-white bg-green-500" />
              </div>
              <div className="min-w-0">
                <h2
                  id={panelTitleId}
                  className="font-semibold text-sm leading-tight tracking-tight text-white flex items-center gap-1"
                >
                  Maya <Sparkles className="h-3 w-3 text-amber-300 fill-amber-300" />
                </h2>
                <p className="text-[11px] text-slate-300 truncate mt-0.5">
                  AI Reputation Specialist • Active
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/80 hover:bg-white/10 transition"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" strokeWidth={2} aria-hidden />
            </button>
          </header>

          {/* Chat Messages */}
          <div
            ref={listRef}
            className="flex min-h-0 flex-1 flex-col gap-3.5 overflow-y-auto px-4 py-4"
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

          {/* Footer Input & Quick Prompts */}
          <div className="border-t border-slate-100 bg-white px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
            {/* Quick Prompts */}
            <div className="mb-2.5 flex flex-wrap gap-1.5">
              {R360_CHATBOT_QUICK_PROMPTS.map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => handleSend(label)}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-left text-xs font-semibold text-[#1F3B64] hover:bg-slate-50 transition active:opacity-90"
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Input Form */}
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
                rows={1}
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
                          : "Ask about ORM, pricing, or scan a name..."
                }
                disabled={scanStep === "loading"}
                enterKeyHint="send"
                className="min-h-[2.5rem] max-h-24 min-w-0 flex-1 resize-none rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-[#1F3B64] placeholder:text-slate-400 focus-visible:border-[#1F3B64] focus-visible:outline-none transition"
              />
              <button
                type="submit"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1F3B64] text-white shadow-sm hover:bg-[#1a3255] transition disabled:opacity-40 disabled:hover:bg-[#1F3B64]"
                aria-label="Send message"
                disabled={!input.trim()}
              >
                <Send className="h-4.5 w-4.5" strokeWidth={2.2} aria-hidden />
              </button>
            </form>
            <p className="mt-2 text-center text-[10px] text-slate-400 font-medium">
              Powered by Reputation360 AI
            </p>
          </div>
        </section>
      )}

      {/* Floating Action Button */}
      <button
        type="button"
        onClick={() => {
          setOpen((v) => !v);
          setShowGreeting(false);
        }}
        className="pointer-events-auto relative flex h-14 w-14 items-center justify-center rounded-full bg-[#1F3B64] text-white shadow-[0_10px_30px_rgba(31,59,100,0.35)] transition duration-200 hover:scale-105 hover:bg-[#152a49] active:scale-[0.97]"
        aria-expanded={open}
        aria-controls={open ? panelDialogId : undefined}
        aria-label={open ? "Close Reputation360 assistant" : "Open Reputation360 assistant"}
      >
        {open ? (
          <X className="h-6 w-6 transform transition duration-200 rotate-0" strokeWidth={2.2} aria-hidden />
        ) : (
          <div className="relative flex items-center justify-center h-full w-full">
            <MessageSquare className="h-6 w-6 text-white" />
            {/* Red Badge '1' */}
            {!showGreeting && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#E53E3E] text-[10px] font-bold text-white border-2 border-[#1F3B64] animate-pulse">
                1
              </span>
            )}
          </div>
        )}
      </button>
    </div>
  );
}

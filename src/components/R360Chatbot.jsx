import { useCallback, useEffect, useId, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import {
  R360_CHATBOT_ENTRIES,
  R360_CHATBOT_QUICK_PROMPTS,
} from "@/data/r360ChatbotKnowledge.js";
import { matchR360ChatbotEntry } from "@/lib/r360ChatbotMatch.js";
import { CONTACT_EMAIL } from "@/constants/contact.js";

/** Matches `GlobalContactDock` icon buttons for a consistent dock. */
const dockBtn =
  "inline-flex h-12 w-12 items-center justify-center rounded-full border shadow-lg transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.97] motion-reduce:transition-none sm:h-14 sm:w-14";

/** Minimum match score before we treat a curated entry as confident. */
const MATCH_THRESHOLD = 5;

const FALLBACK_REPLY =
  "Thanks for reaching out. I am trained on Reputation360's playbook - ORM, suppression, and how we work with clients in the US, Canada, and Australia. I am not a lawyer or a financial advisor, I cannot name competitors, and I will not promise overnight miracles.";

function buildWelcomeMessage() {
  return `Hey - welcome to Reputation360. I can walk you through online reputation management, negative link suppression, timelines, and what to expect.`;
}

/**
 * @param {{ href: string; label: string }} cta
 * @param {boolean} isExternal
 */
function CtaLink({ cta, isExternal }) {
  return (
    <a
      href={cta.href}
      className="mt-2 inline-flex text-sm font-semibold text-[#2E5B88] underline decoration-[#4CAF50]/50 underline-offset-2 hover:decoration-[#4CAF50]"
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
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
        {cta ? (
          <CtaLink
            cta={cta}
            isExternal={/^https?:\/\//i.test(cta.href)}
          />
        ) : null}
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
  const listRef = useRef(null);
  const inputRef = useRef(null);

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

  const handleSend = useCallback(
    (raw) => {
      const trimmed = raw.trim();
      if (!trimmed) return;

      setMessages((prev) => [
        ...prev,
        {
          id: `u-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
          role: "user",
          text: trimmed,
        },
      ]);
      setInput("");

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
    [pushAssistant],
  );

  return (
    <div className="relative z-[1] flex flex-col items-end gap-2.5">
      {open ? (
        <section
          id={panelDialogId}
          role="dialog"
          aria-modal="true"
          aria-labelledby={panelTitleId}
          className="flex h-[min(32rem,calc(100dvh-7rem))] w-[min(100vw-1.5rem,22rem)] flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-[#F5F7FA] shadow-[0_20px_50px_-12px_rgba(31,59,100,0.35)] sm:w-[24rem]"
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
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#1F3B64] hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4CAF50]"
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

            <div className="border-t border-slate-200/80 bg-white px-3 py-2">
              <div className="mb-2 flex flex-wrap gap-1.5">
                {R360_CHATBOT_QUICK_PROMPTS.map((label) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => handleSend(label)}
                    className="rounded-full border border-[#2E5B88]/20 bg-[#2E5B88]/8 px-2.5 py-1 text-[11px] font-medium text-[#1F3B64] hover:border-[#4CAF50]/40 hover:bg-[#4CAF50]/12"
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
                  placeholder="Ask about ORM, timelines, privacy..."
                  className="min-h-[2.75rem] flex-1 resize-none rounded-xl border border-slate-200 bg-[#F5F7FA] px-3 py-2 text-sm text-[#1F3B64] placeholder:text-slate-400 focus-visible:border-[#4CAF50]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-[#4CAF50]/40"
                />
                <button
                  type="submit"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4CAF50] text-white shadow-sm hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2E5B88] disabled:opacity-40"
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
        className={`${dockBtn} border-[#2E5B88]/35 bg-[#2E5B88] text-white shadow-[0_12px_28px_-8px_rgba(31,59,100,0.35)] hover:bg-[#254a73] hover:shadow-xl`}
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

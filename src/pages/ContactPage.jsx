import { useEffect, useId, useState } from "react";
import { Calendar, Mail, ExternalLink, Lock } from "lucide-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { calendlyNewTabProps } from "../constants/scheduling";

const calendarTabletImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA-iNftxgB4MVtLYmaJLpcpPMCdIk9bo4K2vUXyEA2ZXH-BZhmfhL-8HD6Jt2GOFScH55bygI0bbHScErBYwqc9LNb_6eQBZuMJGi1trXwBsc3cLY_Av8Z34IJp_bM6r1CbUuzjq7-RNw4S1ffC5pcP2vOKqu5G6XAyqQVOS8MtT6wy6zLz3pSH77EgfqPgBDruvU6u1_vrhBJ-BCgrYislzYdg4iPWvU41nIaZO_AVY90uuI5seopRat1VNUXWv2d1Qw5hnw5knwU";

/** WhatsApp: digits only with country code (no +). Update for your business line. */
const WHATSAPP_PHONE = "919910000000";

/** Inbox for contact form submissions (FormSubmit forwards to this address). */
const CONTACT_INBOX_EMAIL = "hello@reputation360.in";
const CONTACT_FORM_SUBMIT_URL = `https://formsubmit.co/${CONTACT_INBOX_EMAIL}`;

/** Shown in the auto-reply FormSubmit sends to the visitor (native POST only; not with AJAX). */
const CONTACT_FORM_AUTORESPONSE =
  "Thank you for your message. We have received your information. We'll get back to you ASAP.";

const CONTACT_FORM_THANKS_PATH = "/contact?thanks=1";

function contactFormReturnUrl() {
  if (typeof window !== "undefined" && window.location?.origin) {
    return `${window.location.origin}${CONTACT_FORM_THANKS_PATH}`;
  }
  return `https://reputation360.in${CONTACT_FORM_THANKS_PATH}`;
}

const CONTACT_PAGE_TESTIMONIAL = {
  text: `I'll be honest - I was sceptical. But that one 30-minute call changed everything. I felt heard, I felt understood, and I felt assured. Eleven months later, my reputation is restored, my peace of mind is back, and I can finally move forward. I will be forever grateful to Reputation360`,
  role: "Financial Leader",
  name: "Martin Luze",
};

/**
 * Winding road - x spread for ~2.1:1 viewBox so `aspect-ratio` + `w-full`
 * fills wide layouts without empty side gutters.
 */
const AUTHORITY_ROADMAP_PATH_D =
  "M 80 400 Q 339 400 512 350 T 944 450 T 1375 300 T 1980 150";

const GROWTH = "#4CAF50";
const NAVY = "#1F3B64";

/** Milestone geometry - wide layout + `foreignObject` for copy. */
const AUTHORITY_ROADMAP_MILESTONES = [
  {
    n: 1,
    title: "Book a Call",
    text: "You take the first step by scheduling a free 30-minute consultation at a time that works for you.",
    green: true,
    line: { x1: 201, y1: 400, x2: 201, y2: 280 },
    anchor: { cx: 201, cy: 400 },
    ring: { cx: 201, cy: 240 },
    num: { x: 201, y: 252 },
    fo: { x: 18, y: -10, w: 366, h: 188 },
  },
  {
    n: 2,
    title: "Discovery & Assessment",
    text: "We get on a confidential call to understand your situation - the reputation damage, your goals, and everything we need to know.",
    green: false,
    line: { x1: 477, y1: 365, x2: 477, y2: 480 },
    anchor: { cx: 477, cy: 365 },
    ring: { cx: 477, cy: 520 },
    num: { x: 477, y: 532 },
    fo: { x: 284, y: 582, w: 386, h: 200 },
  },
  {
    n: 3,
    title: "Digital Audit",
    text: "We conduct a thorough audit of your digital footprint, identifying exactly what needs to be addressed.",
    green: true,
    line: { x1: 719, y1: 405, x2: 719, y2: 290 },
    anchor: { cx: 719, cy: 405 },
    ring: { cx: 719, cy: 250 },
    num: { x: 719, y: 262 },
    fo: { x: 526, y: 0, w: 386, h: 188 },
  },
  {
    n: 4,
    title: "Tailored Strategy & Proposal",
    text: "We present a clear, personalised plan built around your needs and send a formal proposal for your review.",
    green: false,
    line: { x1: 961, y1: 445, x2: 961, y2: 550 },
    anchor: { cx: 961, cy: 445 },
    ring: { cx: 961, cy: 590 },
    num: { x: 961, y: 602 },
    fo: { x: 768, y: 652, w: 386, h: 220 },
  },
  {
    n: 5,
    title: "Contract & Onboarding",
    text: "Once you're happy, we sign the contract, gather everything we need, and set the foundation for your campaign.",
    green: true,
    line: { x1: 1220, y1: 360, x2: 1220, y2: 240 },
    anchor: { cx: 1220, cy: 360 },
    ring: { cx: 1220, cy: 200 },
    num: { x: 1220, y: 212 },
    fo: { x: 1027, y: -50, w: 386, h: 188 },
  },
  {
    n: 6,
    title: "Ecosystem Build",
    text: "We build or rebuild your digital presence - social media profiles, websites, and your full online ecosystem.",
    green: false,
    line: { x1: 1479, y1: 260, x2: 1479, y2: 380 },
    anchor: { cx: 1479, cy: 260 },
    ring: { cx: 1479, cy: 420 },
    num: { x: 1479, y: 432 },
    fo: { x: 1286, y: 482, w: 386, h: 200 },
  },
  {
    n: 7,
    title: "Active Execution & Reporting",
    text: "Your strategy goes live. We execute across all channels, manage your content, and keep you updated with regular progress reports.",
    green: true,
    line: { x1: 1702, y1: 205, x2: 1702, y2: 95 },
    anchor: { cx: 1702, cy: 205 },
    ring: { cx: 1702, cy: 50 },
    num: { x: 1702, y: 62 },
    fo: { x: 1509, y: -204, w: 386, h: 192 },
  },
  {
    n: 8,
    title: "Reputation Restored",
    text: "A stronger, cleaner, and more authoritative digital presence - and a client who moves forward with confidence.",
    green: false,
    line: { x1: 1928, y1: 160, x2: 1928, y2: 280 },
    anchor: { cx: 1928, cy: 160 },
    ring: { cx: 1928, cy: 320 },
    num: { x: 1928, y: 332 },
    fo: { x: 1718, y: 382, w: 382, h: 200 },
  },
];

function ContactAuthorityRoadmap() {
  return (
    <div className="-mx-4 overflow-x-auto px-4 pb-2 md:mx-0 md:-mt-5 md:overflow-visible md:px-0 md:pb-0 lg:-mt-7">
      <div className="relative mx-auto w-[min(1120px,140vw)] max-w-none shrink-0 md:aspect-[2100/1120] md:w-full md:min-w-0 md:-mb-14 lg:-mb-20">
        <svg
          className="h-auto w-full overflow-visible md:absolute md:inset-0 md:h-full"
          viewBox="0 -210 2100 1120"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label="Eight-step journey roadmap"
        >
          <path
            d={AUTHORITY_ROADMAP_PATH_D}
            fill="none"
            stroke="#293040"
            strokeWidth={56}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={AUTHORITY_ROADMAP_PATH_D}
            fill="none"
            stroke="#f8fafc"
            strokeWidth={2}
            strokeDasharray="12 12"
            strokeOpacity={0.55}
            strokeLinecap="round"
          />
          {AUTHORITY_ROADMAP_MILESTONES.map((m) => {
            const fill = m.green ? GROWTH : NAVY;
            const label = String(m.n).padStart(2, "0");
            return (
              <g key={m.n}>
                <line
                  x1={m.line.x1}
                  y1={m.line.y1}
                  x2={m.line.x2}
                  y2={m.line.y2}
                  stroke={fill}
                  strokeWidth={2}
                />
                <circle cx={m.anchor.cx} cy={m.anchor.cy} r={10} fill={fill} />
                <circle
                  cx={m.ring.cx}
                  cy={m.ring.cy}
                  r={50}
                  fill={fill}
                  className="drop-shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
                />
                <text
                  x={m.num.x}
                  y={m.num.y}
                  fill="#ffffff"
                  stroke="rgba(15, 23, 42, 0.45)"
                  strokeWidth={3}
                  strokeLinejoin="round"
                  textAnchor="middle"
                  className="pointer-events-none font-heading text-[30px] font-extrabold md:text-[34px]"
                  style={{
                    fontVariantNumeric: "tabular-nums",
                    paintOrder: "stroke fill",
                  }}
                >
                  {label}
                </text>
                <foreignObject
                  x={m.fo.x}
                  y={m.fo.y}
                  width={m.fo.w}
                  height={m.fo.h}
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    className={`flex h-full min-h-0 flex-col gap-1 px-1 text-center md:px-2 ${
                      m.green ? "justify-end" : "justify-start"
                    }`}
                  >
                    <h4 className="font-heading text-[17px] font-bold leading-snug text-[#02254d] md:text-[19px]">
                      {m.title}
                    </h4>
                    <p className="font-heading text-[15px] font-normal leading-relaxed tracking-normal text-[#43474e] md:text-[17px]">
                      {m.text}
                    </p>
                  </div>
                </foreignObject>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

function ContactPage() {
  const gridPatternId = useId().replace(/:/g, "");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [briefNote, setBriefNote] = useState("");
  const [showFormThanks, setShowFormThanks] = useState(false);

  useEffect(() => {
    const previous = document.title;
    document.title = "Contact | Reputation360";
    const params = new URLSearchParams(window.location.search);
    if (params.get("thanks") === "1") {
      setShowFormThanks(true);
      window.history.replaceState({}, "", "/contact");
    }
    return () => {
      document.title = previous;
    };
  }, []);

  const whatsappHref = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
    "Hello, I would like to connect with Reputation360.",
  )}`;

  return (
    <main className="flex-1 bg-[#f9f9ff] pt-28 md:pt-32">
      {/* How to Reach Us */}
      <section
        id="contact-form"
        className="scroll-mt-28 px-4 pt-14 pb-8 md:px-8 md:pt-18 md:pb-10"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 md:mb-12">
            <h1 className="font-heading text-[26px] font-bold text-[#02254d] md:text-[32px]">
              How to Reach Us
            </h1>
            <p className="mt-3 text-[15px] text-[#43474e] md:text-[16px]">
              Reach out through whichever channel feels most convenient to you.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
            {/* Book a Call */}
            <div className="group ha-lift flex flex-col items-stretch gap-8 rounded-[1.75rem] bg-white p-6 shadow-sm md:col-span-8 md:flex-row md:items-center md:justify-between md:rounded-[2rem] md:p-10">
              <div className="min-w-0 flex-1">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#02254d]/5 md:mb-6 md:h-14 md:w-14">
                  <Calendar
                    className="h-6 w-6 text-[#02254d] md:h-7 md:w-7"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#02254d] md:text-2xl lg:text-3xl">
                  Book a Call
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#43474e] md:mt-4 md:text-lg">
                  Every reputation challenge is unique. Book a call and
                  we&apos;ll listen - understanding your situation, your concerns,
                  and what you&apos;re hoping to achieve.
                </p>
                <a
                  {...calendlyNewTabProps}
                  className="ha-pill mt-5 inline-flex rounded-xl bg-cta-consult px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-cta-consult/25 transition hover:brightness-95 active:scale-[0.98] md:mt-6 md:text-base"
                >
                  Schedule Meeting
                </a>
              </div>
              <div className="mx-auto h-52 w-full max-w-xs overflow-hidden rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35),0_12px_24px_-8px_rgba(0,0,0,0.2)] md:mx-0 md:h-64 md:w-64 md:max-w-none md:shrink-0">
                <img
                  alt="Calendar on tablet"
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                  src={calendarTabletImage}
                />
              </div>
            </div>

            {/* WhatsApp */}
            <div className="ha-lift flex flex-col justify-between rounded-[1.75rem] border-2 border-[#78dc77]/20 bg-[#78dc77]/10 p-6 md:col-span-4 md:rounded-[2rem] md:p-10">
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#78dc77] md:mb-6 md:h-14 md:w-14">
                  <IconBrandWhatsapp
                    className="h-7 w-7 text-white md:h-8 md:w-8"
                    stroke={1.25}
                    aria-hidden
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#56b958] md:text-2xl">
                  WhatsApp
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#43474e] md:mt-4 md:text-lg">
                  When something needs immediate attention, this is the fastest way
                  to reach us.
                </p>
              </div>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="ha-pill mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#56b958] px-8 py-3.5 text-sm font-bold text-white hover:opacity-90 active:scale-[0.98] md:mt-8 md:text-base"
              >
                Message Now
                <ExternalLink className="h-4 w-4" strokeWidth={2.25} />
              </a>
            </div>

            {/* Email + form */}
            <div
              id="email-inquiry"
              className="flex flex-col gap-10 rounded-[1.75rem] bg-[#02254d] p-6 text-white md:col-span-12 md:flex-row md:items-center md:gap-12 md:rounded-[2rem] md:p-10 lg:p-12"
            >
              <div className="md:w-1/3">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 md:mb-6 md:h-14 md:w-14">
                  <Mail className="h-6 w-6 text-white md:h-7 md:w-7" strokeWidth={2} />
                </div>
                <h3 className="font-heading text-xl font-bold md:text-2xl lg:text-3xl">
                  Email
                </h3>
                <a
                  href={`mailto:${CONTACT_INBOX_EMAIL}`}
                  className="ha-nudge mt-3 block w-fit text-[15px] text-[#8ca6d5] md:mt-4 md:text-lg"
                >
                  {CONTACT_INBOX_EMAIL}
                </a>
                <p className="mt-2 text-xs text-[#8ca6d5] md:text-sm">
                  Expect a detailed response within 8 hours.
                </p>
              </div>
              <form
                action={CONTACT_FORM_SUBMIT_URL}
                method="POST"
                className="grid w-full grid-cols-1 gap-4 md:w-2/3 md:grid-cols-2"
              >
                <div className="hidden" aria-hidden>
                  <input
                    type="hidden"
                    name="_subject"
                    defaultValue="Contact inquiry - Reputation360"
                  />
                  <input type="hidden" name="_template" defaultValue="table" />
                  <input
                    type="hidden"
                    name="_next"
                    defaultValue={contactFormReturnUrl()}
                  />
                  <input
                    type="hidden"
                    name="_autoresponse"
                    defaultValue={CONTACT_FORM_AUTORESPONSE}
                  />
                  <input
                    type="hidden"
                    name="_replyto"
                    value={email}
                    readOnly
                  />
                </div>
                {showFormThanks ? (
                  <p
                    role="status"
                    className="rounded-lg border border-[#78dc77]/40 bg-[#78dc77]/15 px-4 py-3 text-sm leading-relaxed text-[#b8f5b9] md:col-span-2"
                  >
                    Thanks - your message was sent. You should receive a
                    confirmation email from us shortly (check spam if you do not see
                    it).
                  </p>
                ) : null}
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name *"
                  className="rounded-t-lg border-b border-white/20 bg-white/5 px-4 py-3.5 text-[15px] text-white outline-none placeholder:text-white/40 focus:border-[#78dc77] md:py-4"
                />
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address *"
                  className="rounded-t-lg border-b border-white/20 bg-white/5 px-4 py-3.5 text-[15px] text-white outline-none placeholder:text-white/40 focus:border-[#78dc77] md:py-4"
                />
                <textarea
                  name="message"
                  value={briefNote}
                  onChange={(e) => setBriefNote(e.target.value)}
                  placeholder="Brief note (optional)"
                  rows={4}
                  className="h-24 resize-none rounded-t-lg border-b border-white/20 bg-white/5 px-4 py-3.5 text-[15px] text-white outline-none placeholder:text-white/40 focus:border-[#78dc77] md:col-span-2 md:py-4"
                />
                <button
                  type="submit"
                  className="ha-pill rounded-xl bg-[#78dc77] py-3.5 text-sm font-bold text-white hover:opacity-90 md:col-span-2 md:text-base"
                >
                  Send Email Inquiry
                </button>
              </form>
            </div>

            <figure className="mt-10 md:col-span-12 md:mt-14 lg:mt-16">
              <blockquote className="mx-auto m-0 max-w-4xl text-center">
                <p className="m-0 font-heading text-[15px] font-normal italic leading-relaxed tracking-normal text-[#43474e] md:text-[17px]">
                  &ldquo;{CONTACT_PAGE_TESTIMONIAL.text}&rdquo;
                </p>
                <p className="mt-5 font-heading text-[15px] font-normal leading-relaxed tracking-normal not-italic text-[#43474e] md:mt-6 md:text-[17px]">
                  <span className="whitespace-nowrap">
                    &mdash; {CONTACT_PAGE_TESTIMONIAL.role},{" "}
                    <cite className="not-italic">{CONTACT_PAGE_TESTIMONIAL.name}</cite>
                  </span>
                </p>
              </blockquote>
            </figure>
          </div>
        </div>
      </section>

      {/* What Happens Next - SVG roadmap (reference layout) */}
      <section className="bg-[#f9f9ff] px-4 pt-8 pb-10 md:px-8 md:pt-10 md:pb-12">
        <div className="mx-auto max-w-7xl 2xl:max-w-[min(90rem,calc(100vw-3rem))]">
          <div className="mb-1 text-center md:mb-2">
            <h2 className="font-heading text-[28px] font-bold tracking-tight text-[#02254d] md:text-[40px]">
              What Happens{" "}
              <span className="text-[#4CAF50]">Next</span>
            </h2>
            <p className="mx-auto mt-1.5 max-w-2xl text-[15px] leading-relaxed text-[#43474e] md:text-[16px]">
              A transparent roadmap of your journey from first contact to a
              thriving digital reputation.
            </p>
          </div>

          <p className="mb-1 text-center text-[11px] text-[#5c6578] md:hidden">
            Scroll sideways to see the full journey.
          </p>
          <ContactAuthorityRoadmap />
        </div>
      </section>

      {/* Confidentiality */}
      <section className="px-4 pt-10 pb-14 md:px-8 md:pt-12 md:pb-16">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#1f3b64] p-10 text-white shadow-2xl md:rounded-[3rem] md:p-16 lg:p-20">
            <div
              className="pointer-events-none absolute inset-0 opacity-10"
              aria-hidden
            >
              <svg
                className="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id={gridPatternId}
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#${gridPatternId})`} />
              </svg>
            </div>
            <div className="relative z-10 flex flex-col items-center gap-10 md:flex-row md:gap-12">
              <div className="shrink-0">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 md:h-24 md:w-24">
                  <Lock
                    className="h-10 w-10 text-[#78dc77] md:h-12 md:w-12"
                    strokeWidth={2}
                  />
                </div>
              </div>
              <div>
                <h2 className="font-heading text-[26px] font-bold md:text-3xl lg:text-4xl">
                  Everything Is Confidential
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-white md:mt-6 md:text-[17px]">
                  Everything you share with us stays with us - no exceptions. We do
                  not discuss client situations with third parties, reference
                  engagements publicly, or share any information you provide. Our
                  security architecture ensures your data remains protected at all
                  times. Your privacy is a commitment we stand behind unconditionally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;

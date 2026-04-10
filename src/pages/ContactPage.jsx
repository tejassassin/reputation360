import { useEffect, useId, useState } from "react";
import {
  Calendar,
  MessageCircle,
  Mail,
  ArrowRight,
  ExternalLink,
  Lock,
} from "lucide-react";

const heroOfficeImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCZgDbY4alombYjpJ_X7p50nBGt2AvPwsXAhfGbobNwLXwQHkaOjhWI9qRob0JEDIzjLZCMnadngtxzZnWhJcApUhh9DQeelYUPsIMBKBD46tvitFyyhiEzYhhzyTwjd4AaRW8JdT81sqWRA3Eab8rBBW-1pK2A4H80b4V1SnhORA72_6-Y4my-A9eXYJZ1i8FDPw1Y-nPIwdalKRxIik80FagXFnCAOblCne5P6szyRSVzbAlyvSSsGsppsQwXJk9gVzgcGBsR3qo";

const calendarTabletImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA-iNftxgB4MVtLYmaJLpcpPMCdIk9bo4K2vUXyEA2ZXH-BZhmfhL-8HD6Jt2GOFScH55bygI0bbHScErBYwqc9LNb_6eQBZuMJGi1trXwBsc3cLY_Av8Z34IJp_bM6r1CbUuzjq7-RNw4S1ffC5pcP2vOKqu5G6XAyqQVOS8MtT6wy6zLz3pSH77EgfqPgBDruvU6u1_vrhBJ-BCgrYislzYdg4iPWvU41nIaZO_AVY90uuI5seopRat1VNUXWv2d1Qw5hnw5knwU";

/** WhatsApp: digits only with country code (no +). Update for your business line. */
const WHATSAPP_PHONE = "919910000000";

function ContactPage() {
  const gridPatternId = useId().replace(/:/g, "");
  const [name, setName] = useState("");
  const [bestTime, setBestTime] = useState("");
  const [briefNote, setBriefNote] = useState("");

  useEffect(() => {
    const previous = document.title;
    document.title = "Contact | Reputation360";
    return () => {
      document.title = previous;
    };
  }, []);

  const whatsappHref = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
    "Hello, I would like to connect with Reputation360.",
  )}`;

  function handleEmailSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent("Contact inquiry — Reputation360");
    const body = encodeURIComponent(
      `Name: ${name}\nBest time to reach: ${bestTime}\n\n${briefNote}`,
    );
    window.location.href = `mailto:hello@reputation360.in?subject=${subject}&body=${body}`;
  }

  return (
    <main className="flex-1 bg-[#f9f9ff] pt-28 md:pt-32">
      {/* Hero */}
      <section className="relative flex min-h-[min(100vh,720px)] items-center overflow-hidden px-4 py-14 md:px-8 md:py-20">
        <div className="absolute inset-0 z-0">
          <img
            alt=""
            className="h-full w-full object-cover"
            src={heroOfficeImage}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f9f9ff] via-[#f9f9ff]/90 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <h1 className="font-heading text-[36px] font-bold tracking-tight text-[#02254d] md:text-[52px] lg:text-[56px]">
            Let&apos;s Talk.
          </h1>
          <div className="mt-6 max-w-2xl rounded-[1.75rem] border border-white/20 bg-white/40 p-6 shadow-2xl backdrop-blur-md md:mt-8 md:rounded-[2rem] md:p-10 lg:p-12">
            <p className="text-[15px] leading-[1.7] text-[#43474e] md:text-[16px] lg:text-[17px]">
              You have a situation. You want to know what can be done. In 30
              minutes, we will look at your search results together, give you an
              honest assessment, and tell you precisely what Reputation360 can
              achieve and how long it will realistically take. No commitment
              required. No sales pressure.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 md:mt-8">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-xl bg-[#02254d] px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#35618e] active:scale-[0.98] md:text-base"
              >
                Get My Assessment
                <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How to Reach Us */}
      <section
        id="contact-form"
        className="scroll-mt-28 px-4 py-14 md:px-8 md:py-18"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 md:mb-12">
            <h2 className="font-heading text-[26px] font-bold text-[#02254d] md:text-[32px]">
              How to Reach Us
            </h2>
            <p className="mt-3 text-[15px] text-[#43474e] md:text-[16px]">
              Choose the channel that best suits your current situation.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
            {/* Book a Call */}
            <div className="group flex flex-col items-stretch gap-8 rounded-[1.75rem] bg-white p-6 shadow-sm md:col-span-8 md:flex-row md:items-center md:justify-between md:rounded-[2rem] md:p-10">
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
                  Use the form on this page or schedule a consultation. Our
                  average response time for initial enquiries is within 2
                  business hours.
                </p>
                <a
                  href="#email-inquiry"
                  className="mt-5 inline-flex rounded-xl bg-[#02254d] px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#35618e] active:scale-[0.98] md:mt-6 md:text-base"
                >
                  Schedule Meeting
                </a>
              </div>
              <div className="mx-auto h-52 w-full max-w-xs overflow-hidden rounded-2xl md:mx-0 md:h-64 md:w-64 md:max-w-none md:shrink-0">
                <img
                  alt="Calendar on tablet"
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                  src={calendarTabletImage}
                />
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col justify-between rounded-[1.75rem] border-2 border-[#78dc77]/20 bg-[#78dc77]/10 p-6 md:col-span-4 md:rounded-[2rem] md:p-10">
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#78dc77] md:mb-6 md:h-14 md:w-14">
                  <MessageCircle
                    className="h-6 w-6 text-[#56b958] md:h-7 md:w-7"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#56b958] md:text-2xl">
                  WhatsApp
                </h3>
                <p className="mt-3 text-[15px] text-[#43474e] md:mt-4">
                  The fastest route for immediate questions or urgent crisis
                  management situations.
                </p>
              </div>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#56b958] px-8 py-3.5 text-sm font-bold text-white transition-all hover:opacity-90 active:scale-[0.98] md:mt-8 md:text-base"
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
                  href="mailto:hello@reputation360.in"
                  className="mt-3 block text-[15px] text-[#8ca6d5] md:mt-4 md:text-lg"
                >
                  hello@reputation360.in
                </a>
                <p className="mt-2 text-xs text-[#8ca6d5] md:text-sm">
                  Expect a detailed response within 24 hours.
                </p>
              </div>
              <form
                className="grid w-full grid-cols-1 gap-4 md:w-2/3 md:grid-cols-2"
                onSubmit={handleEmailSubmit}
              >
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="rounded-t-lg border-b border-white/20 bg-white/5 px-4 py-3.5 text-[15px] text-white outline-none placeholder:text-white/40 focus:border-[#78dc77] md:py-4"
                />
                <input
                  type="text"
                  value={bestTime}
                  onChange={(e) => setBestTime(e.target.value)}
                  placeholder="Best Time to Reach"
                  className="rounded-t-lg border-b border-white/20 bg-white/5 px-4 py-3.5 text-[15px] text-white outline-none placeholder:text-white/40 focus:border-[#78dc77] md:py-4"
                />
                <textarea
                  value={briefNote}
                  onChange={(e) => setBriefNote(e.target.value)}
                  placeholder="Brief Note"
                  rows={4}
                  className="h-24 resize-none rounded-t-lg border-b border-white/20 bg-white/5 px-4 py-3.5 text-[15px] text-white outline-none placeholder:text-white/40 focus:border-[#78dc77] md:col-span-2 md:py-4"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-[#78dc77] py-3.5 text-sm font-bold text-[#002204] transition-all hover:opacity-90 md:col-span-2 md:text-base"
                >
                  Send Email Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="bg-[#f9f9ff] px-4 py-14 md:px-8 md:py-18">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="font-heading text-[26px] font-bold text-[#02254d] md:text-[32px]">
              What Happens Next
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[15px] text-[#43474e] md:text-[16px]">
              A transparent roadmap of our engagement from first contact to
              strategic execution.
            </p>
          </div>
          <div className="relative">
            <div className="absolute top-8 left-0 hidden h-0.5 w-full -translate-y-1/2 bg-[#c4c6d0]/30 md:block md:top-10" />
            <div className="relative z-10 grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-6 lg:gap-8">
              {[
                {
                  n: 1,
                  title: "Audit",
                  text: "We review your enquiry and run an initial assessment of your digital footprint.",
                  circle: "bg-[#dce2f7] text-[#02254d] shadow-md",
                },
                {
                  n: 2,
                  title: "Schedule",
                  text: "We schedule a 30-minute call at your convenience to discuss findings.",
                  circle: "bg-[#dce2f7] text-[#02254d] shadow-md",
                },
                {
                  n: 3,
                  title: "Call",
                  text: "On the call, we walk through exactly what we see and provide recommendations.",
                  circle: "bg-[#02254d] text-white shadow-xl",
                },
                {
                  n: 4,
                  title: "Active",
                  text: "If you proceed, your personalized strategy is active within 5 business days.",
                  circle: "bg-[#dce2f7] text-[#02254d] shadow-md",
                },
                {
                  n: 5,
                  title: "Clarity",
                  text: "If you do not proceed, you walk away with a clearer picture at no cost.",
                  circle: "bg-[#78dc77] text-[#56b958] shadow-md",
                },
              ].map((step) => (
                <div
                  key={step.n}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#f9f9ff] font-heading text-lg font-black md:mb-6 md:h-16 md:w-16 md:text-xl ${step.circle}`}
                  >
                    {step.n}
                  </div>
                  <h4 className="font-heading text-base font-bold text-[#02254d] md:text-lg">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#43474e] md:text-sm">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Confidentiality */}
      <section className="px-4 py-14 md:px-8 md:py-18">
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
                <p className="mt-4 text-[15px] leading-relaxed text-[#8ca6d5] md:mt-6 md:text-[17px]">
                  Everything you share with us is treated with complete
                  confidentiality. We do not discuss client situations with third
                  parties, reference engagements publicly, or share any
                  information you provide. Our security architecture ensures your
                  data remains protected at all times.
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

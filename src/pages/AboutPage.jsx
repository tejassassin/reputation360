import { useEffect } from "react";
import {
  BadgeCheck,
  GraduationCap,
  Stethoscope,
  BarChart3,
  Store,
  User,
  Landmark,
  Gavel,
  Building2,
  Briefcase,
  XCircle,
  Star,
} from "lucide-react";
import { calendlyNewTabProps } from "../constants/scheduling";

const IMG_HERO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDZxwP0ZvKL-Sn6lv_i9bPP-sHJByxa_l07VO40dZRT9XakSZkHI-BBYnxDhoQaK_umCL6d_CSQTdBl2UdKnYIEKuATss1bvouEPWbgqq1UTLSQqWHFfjMZZRNp_0ZipLR6avyPNE_rSrWmoBvV3FT0XDvnRuEsqQkdi80_TRShfB7fkPNA-vRfZroSYu6b9ZNYXYkWHQNbYvvkZN2dn96CWdD23L6urVXJ_-cLew24alxXZvwN9TGXAan3r0DJc8ACbs2BpCpgucc";

const IMG_PEN =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCZM8CtPbkg8TpHt5Sv0vWALyy01_XP2gra6J7X-1NnMrV1lJ7IpIHtxGvZ-M0sESv48Smj1FXyDThRwM6Kbko3oZJypnltlAPhPJjzlGFO6wxBrRxo8kgW1Wv2Oc8l75CvH-s2lKqn4S_feI6TOaW26VOg8gu6t7GAdUGbRAk7FtM2DcJeQtIMcS9PlJb86phwdZgRTKtakDEiAklNRKT-mi7wSVyUCEKvKjb5Lebw3vJOpwXVDTrefwLmfBFz8ADVJkYKPV2B2OM";

const IMG_MAP =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDAuoKNykbon_ONixwj4-paZvw6Uqm6Ye_H2j_EV6_SHshlgFYZLlUZO88MsCDh-_V5ZlqSn7LuN6vxcMeco4Qu_CDcVLsbvdz8yfrmrunnvnu3gMD51AnuNyq3XP7TVkVUuZZnfzI7hLcDDHEeE52hVHtDxOV1GWyNkae-OjZ1rZKugmZ70SaCmoCMsw-cNU_WN16084-Rf62DoLjnWrlnkXxW310RMehlYCTLlonqks_CWIqf_vt2SnofCi7Br7dzp6D7wxZsHMg";

const headlineFont = "font-[Manrope,Inter,sans-serif]";

const outcomeCards = [
  {
    icon: GraduationCap,
    title: "Student",
    text: "The student who finally lands the job they worked years for.",
  },
  {
    icon: Stethoscope,
    title: "Doctor",
    text: "The doctor whose clinic fills again.",
  },
  {
    icon: BarChart3,
    title: "Executive",
    text: "The executive who walks into a boardroom with confidence restored.",
  },
  {
    icon: Store,
    title: "Business Owner",
    text: "Ensuring search results reflect operational excellence and customer satisfaction rather than outlier complaints.",
  },
];

const whoWeServe = [
  {
    icon: User,
    title: "Individuals",
    text: "Anyone whose online presence does not reflect who they truly are",
  },
  {
    icon: Landmark,
    title: "Financial Leaders",
    text: "Executives and advisors protecting decades of professional credibility",
  },
  {
    icon: Stethoscope,
    title: "Doctors",
    text: "Physicians and healthcare professionals managing their digital standing",
  },
  {
    icon: Gavel,
    title: "Lawyers and Attorneys",
    text: "Legal professionals maintaining the trust their practice depends on",
  },
  {
    icon: BarChart3,
    title: "Executives",
    text: "Leaders ensuring their influence and legacy are represented accurately online",
  },
  {
    icon: Building2,
    title: "Businesses and Companies",
    text: "E-commerce, manufacturing, and consumer brands protecting their market reputation",
  },
  {
    icon: Briefcase,
    title: "Professionals",
    text: "Career-driven individuals taking control of how they appear online",
    wide: true,
  },
];

const howWeWorkSteps = [
  {
    n: "01",
    title: "Audit",
    text: "We start by understanding exactly where you stand. We analyse your current online presence, identify what is working against you, and map out the full picture before recommending anything.",
    highlight: false,
  },
  {
    n: "02",
    title: "Strategy",
    text: "No templates. No copy-paste solutions. We build a fully customised plan around your specific situation, your goals, and your timeline — with clear milestones from day one.",
    highlight: false,
  },
  {
    n: "03",
    title: "Execute & Protect",
    text: "We get to work. Our global team implements your strategy, monitors results continuously, and adapts in real time. We do not stop until the right narrative is in place — and we stay vigilant to protect it long after.",
    highlight: true,
  },
];

const whatWeDont = [
  {
    title: "No Black-Hat Tactics",
    text: "Everything we build is designed to last. No shortcuts, no tricks, no methods that create short-term results and long-term damage.",
  },
  {
    title: "No False Promises",
    text: "Before we take on any engagement, we tell you exactly what is achievable, how long it will take, and what success looks like.",
  },
  {
    title: "No Templates",
    text: "Every client situation is different. Your plan is built entirely around your specific circumstances — never borrowed from someone else's case.",
  },
  {
    title: "No Compromise on Privacy",
    text: "Your identity and the nature of our engagement remain strictly confidential.",
  },
  {
    title: "No Outsourced Work",
    text: "Every client is assigned a dedicated account manager who stays with you throughout your entire journey.",
  },
];

const promises = [
  "Every client is treated as our most important client — regardless of the size of the engagement.",
  "Your situation stays completely confidential. We never reference a client case without explicit permission. Ever.",
  "We will tell you the truth, even when it is uncomfortable. If something is more complex than expected, you will hear it from us first.",
  "We are with you for the long term. If results take longer than expected, we stay committed until we get there.",
  "You will always know where things stand. Regular updates, clear milestones, no guessing, no silence.",
  "We treat your reputation as if it were our own.",
];

const testimonials = [
  {
    quote:
      '"I had almost given up on rebuilding my career after a false accusation. Reputation360 gave me my life back."',
    name: "Financial Professional",
    role: "Investment Banking Lead",
  },
  {
    quote:
      '"Within six months, the negative articles were gone from page one. My practice grew significantly."',
    name: "Physician",
    role: "Chief of Medicine",
  },
  {
    quote:
      '"They treated my situation with complete discretion. The results were beyond what I expected."',
    name: "Senior Executive",
    role: "Fortune 500 COO",
  },
];

function AboutPage() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Our Story | Reputation360";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <main className="flex-1 bg-[#F8FAFC] pt-28 text-slate-800 md:pt-32">
      {/* Hero */}
      <header className="relative bg-white pb-20 pt-12 md:pb-28 md:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
          <div className="relative z-10">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-slate-600">
              <BadgeCheck className="h-4 w-4 text-[#4CAF50]" strokeWidth={2} />
              About Reputation360
            </div>
            <h1
              className={`${headlineFont} mb-6 text-3xl font-extrabold leading-[1.15] text-[#1F3B64] md:text-4xl lg:text-[2.65rem]`}
            >
              Your Reputation Defines Your Future.{" "}
              <span className="text-[#2E5B88]">
                We Make Sure It Reflects Your Truth.
              </span>
            </h1>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-600 md:text-[17px]">
              Protecting reputations globally since 2019.
            </p>
            <a
              {...calendlyNewTabProps}
              className={`${headlineFont} inline-flex rounded-xl bg-[#1F3B64] px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-[#1F3B64]/10 transition-all hover:bg-[#2E5B88] md:px-8 md:py-4`}
            >
              Book a Free Consultation
            </a>
          </div>
          <div className="relative">
            <div className="group relative z-10 overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
              <img
                alt="Modern office overlooking a city at dusk"
                className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[500px]"
                src={IMG_HERO}
              />
              <div
                className="absolute inset-0 bg-[#1F3B64]/20 mix-blend-multiply transition-opacity group-hover:opacity-40"
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#1F3B64]/40 to-transparent"
                aria-hidden
              />
            </div>
            <div
              className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#4CAF50]/10 blur-3xl"
              aria-hidden
            />
          </div>
        </div>
      </header>

      {/* How It All Began */}
      <section className="border-y border-slate-200 bg-slate-50 pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <div className="relative group">
              <div className="absolute -inset-4 -rotate-2 rounded-3xl border-2 border-[#4CAF50]/20 transition-transform duration-500 group-hover:rotate-0" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  alt="Fountain pen and documents"
                  className="h-[480px] w-full object-cover md:h-[600px]"
                  src={IMG_PEN}
                />
                <div
                  className="absolute inset-0 bg-[#1F3B64]/10 mix-blend-multiply"
                  aria-hidden
                />
              </div>
            </div>
            <div className="space-y-10">
              <div>
                <h2
                  className={`${headlineFont} mb-5 text-3xl font-extrabold text-[#1F3B64] md:text-4xl`}
                >
                  How It All Began
                </h2>
                <div className="h-2 w-24 rounded-full bg-[#4CAF50]" />
              </div>
              <div className="relative max-w-full overflow-x-auto pb-1 [-webkit-overflow-scrolling:touch]">
                <span
                  className="absolute -left-1 -top-2 font-serif text-5xl leading-none text-[#4CAF50]/20 md:-left-6 md:text-6xl"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <p
                  className={`${headlineFont} relative z-10 whitespace-nowrap text-xl font-bold italic leading-snug text-[#1F3B64] md:text-2xl lg:text-[1.65rem]`}
                >
                  I was acquitted in a court of law, but sentenced for life in the court of public opinion.
                </p>
              </div>
              <div className="space-y-5 text-[15px] leading-relaxed text-slate-600 md:text-base">
                <p>
                  Our story starts with a phone call we will never forget. A
                  seasoned financial leader with thirty years of an unblemished
                  career came to us in distress. A wrongful case had been filed
                  against him. He fought it. The court acquitted him. He was
                  proven innocent. But the internet never moved on.
                </p>
                <p>
                  News publications that had covered the original case never
                  updated their stories. Every time a potential client, a
                  business partner, or an investor searched his name, those
                  articles appeared first. His thirty years of achievement, his
                  relationships, his credibility — all overshadowed by links
                  that told an incomplete and deeply unfair story.
                </p>
                <p>
                  That moment changed everything for us. We realised that in
                  today&apos;s world, your Google search results can be more
                  powerful than your actual record. A court can acquit you. The
                  internet may not. That is why Reputation360 exists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Reality We Are Up Against — narrative timeline */}
      <section className="border-y border-slate-200/80 bg-[#f8fafc] pt-8 pb-6 md:pt-10 md:pb-8">
        <div className="mx-auto max-w-3xl px-6">
          <h2
            className={`${headlineFont} max-w-xl text-2xl font-extrabold tracking-tight text-[#1F3B64] md:text-[1.65rem]`}
          >
            The Reality We Are Up Against
          </h2>
          <div className="mt-3 h-0.5 w-12 rounded-full bg-[#4CAF50] md:mt-4" />

          <div className="relative mt-8 md:mt-10">
            <div
              className="pointer-events-none absolute left-4 top-9 bottom-9 w-px bg-gradient-to-b from-[#4CAF50] via-slate-200 to-slate-300 md:left-5 md:top-11 md:bottom-11"
              aria-hidden
            />
            <ol
              className="m-0 list-none p-0"
              aria-label="How online search shapes reputation"
            >
              <li className="relative flex gap-4 pb-8 md:gap-5 md:pb-10">
              <div className="relative z-[1] flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4CAF50] text-xs font-bold text-white shadow ring-4 ring-[#f8fafc] md:h-10 md:w-10 md:text-sm">
                1
              </div>
              <div className="min-w-0 pt-0.5">
                <p className="text-[15px] leading-relaxed text-slate-700 md:text-base">
                  <span
                    className={`${headlineFont} mr-1 text-xl font-extrabold tabular-nums text-[#4CAF50] md:text-2xl`}
                  >
                    80%
                  </span>
                  of people search online before making a decision — whether that
                  is hiring someone, partnering with a business, choosing a
                  doctor, or closing an investment deal.
                </p>
              </div>
              </li>

              <li className="relative flex gap-4 pb-8 md:gap-5 md:pb-10">
              <div className="relative z-[1] flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#2E5B88] bg-white text-xs font-bold text-[#2E5B88] shadow-sm ring-4 ring-[#f8fafc] md:h-10 md:w-10 md:text-sm">
                2
              </div>
              <div className="min-w-0 pt-0.5">
                <p className="text-[15px] leading-relaxed text-slate-700 md:text-base">
                  And studies show that nearly{" "}
                  <span
                    className={`${headlineFont} text-xl font-extrabold text-[#2E5B88] md:text-2xl`}
                  >
                    70%
                  </span>{" "}
                  of people form an opinion about someone based on the first page
                  of Google results alone.
                </p>
              </div>
              </li>

              <li className="relative flex gap-4 pb-8 md:gap-5 md:pb-8">
              <div className="relative z-[1] flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1F3B64] text-xs font-bold text-white shadow ring-4 ring-[#f8fafc] md:h-10 md:w-10 md:text-sm">
                3
              </div>
              <div className="min-w-0 rounded-r-xl border border-slate-200/90 border-l-4 border-l-[#4CAF50] bg-white py-3.5 pl-4 pr-4 shadow-sm md:py-4 md:pl-5">
                <p
                  className={`${headlineFont} text-[15px] font-medium leading-relaxed text-[#1F3B64] md:text-[15.5px]`}
                >
                  One negative link quietly undoes years of hard work. It shapes
                  opinions before a conversation even begins. It costs
                  opportunities that are never offered and deals that are never
                  closed.
                </p>
              </div>
              </li>

              <li className="relative flex gap-4 md:gap-5">
              <div className="relative z-[1] flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-600 ring-4 ring-[#f8fafc] md:h-10 md:w-10 md:text-sm">
                4
              </div>
              <div className="min-w-0 pt-0.5">
                <p className="text-sm leading-relaxed text-slate-600 md:text-[15px]">
                  Most people never even know what they are losing. We exist to
                  change that.
                </p>
              </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* We are driven by outcomes */}
      <section className="bg-slate-50 pt-12 pb-20 md:pt-14 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center md:mb-14">
            <h2
              className={`${headlineFont} mb-4 text-3xl font-extrabold text-[#1F3B64] md:text-[2rem]`}
            >
              We are driven by outcomes. Real ones.
            </h2>
            <p className="mx-auto max-w-4xl text-balance text-base leading-relaxed text-slate-600 md:text-lg">
              The happy faces of clients who finally have their reputation back.
              The peace of mind that comes with knowing your name tells your
              true story. The jobs secured, the clients won, the deals closed,
              and the careers rebuilt — because the right people finally saw the
              right story.
            </p>
          </div>
          <div className="mb-14 grid gap-6 md:mb-16 md:grid-cols-2 lg:grid-cols-4">
            {outcomeCards.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1F3B64]/5 text-[#1F3B64]">
                  <Icon className="h-7 w-7" strokeWidth={2} />
                </div>
                <h3 className={`${headlineFont} mb-3 text-lg font-extrabold text-[#1F3B64]`}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>
          <p
            className={`${headlineFont} mx-auto max-w-3xl text-center text-lg font-extrabold italic leading-snug text-[#1F3B64] md:text-xl`}
          >
            &ldquo;These are not metrics. These are lives changed. And every
            single one of them is why we show up every day.&rdquo;
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2
            className={`${headlineFont} mb-8 text-3xl font-extrabold text-[#1F3B64] md:text-[2rem]`}
          >
            Who We Are
          </h2>
          <div className="space-y-5 text-[15px] leading-relaxed text-slate-600 md:text-base">
            <p>
              Reputation360 is a team of 50 specialists working across the globe
              to deliver round-the-clock protection for our clients. Since 2019,
              we have served clients across law, medicine, finance, e-commerce,
              manufacturing, and professional services — from individuals and
              students to senior executives and global brands. We work across
              reputation management, content strategy, LinkedIn branding,
              employer branding, and search suppression — all under one roof,
              for one purpose.
            </p>
            <p
              className={`${headlineFont} text-lg font-extrabold uppercase tracking-wider text-[#4CAF50] md:text-xl`}
            >
              1,100+ engagements. 7 years of expertise. One mission.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2
            className={`${headlineFont} mb-10 text-center text-3xl font-extrabold text-[#1F3B64] md:text-[2rem]`}
          >
            Who We Serve
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {whoWeServe.map(({ icon: Icon, title, text, wide }) => (
              <div
                key={title}
                className={`group flex flex-col items-start rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${wide ? "lg:col-span-3 lg:items-center" : ""}`}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1F3B64]/5 text-[#1F3B64] transition-colors group-hover:bg-[#4CAF50]/10 group-hover:text-[#4CAF50]">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3
                  className={`${headlineFont} mb-2 text-lg font-extrabold text-[#1F3B64] ${wide ? "lg:text-center" : ""}`}
                >
                  {title}
                </h3>
                <p
                  className={`text-sm leading-relaxed text-slate-600 ${wide ? "lg:text-center" : ""}`}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center md:mb-16">
            <h2 className={`${headlineFont} mb-3 text-3xl font-extrabold text-[#1F3B64] md:text-[2rem]`}>
              How We Work
            </h2>
          </div>
          <div className="relative grid gap-16 md:grid-cols-3">
            <div
              className="absolute left-0 top-12 z-0 hidden h-px w-full bg-slate-200 md:block"
              aria-hidden
            />
            {howWeWorkSteps.map(({ n, title, text, highlight }) => (
              <div key={n} className="relative z-10 space-y-6 text-center">
                <div
                  className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full shadow-lg md:h-[5.25rem] md:w-[5.25rem] ${highlight ? "bg-[#1F3B64] text-[#4CAF50] ring-4 ring-[#1F3B64]/10 md:ring-8" : "border-2 border-slate-100 bg-white text-[#1F3B64]"}`}
                >
                  <span className={`${headlineFont} text-xl font-extrabold md:text-2xl`}>
                    {n}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className={`${headlineFont} text-lg font-extrabold text-[#1F3B64] md:text-xl`}>
                    {title}
                  </h3>
                  <p className="px-4 leading-relaxed text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Don't Do */}
      <section className="bg-slate-900 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center md:mb-16">
            <h2 className={`${headlineFont} mb-4 text-3xl font-extrabold text-[#4CAF50] md:text-[2rem]`}>
              What We Don&apos;t Do
            </h2>
            <p className="mx-auto max-w-4xl text-base leading-relaxed text-slate-300 md:text-lg">
              We are selective — and we are proud of it. Integrity is at the core
              of everything we do. We only take on clients whose reputations are
              worth restoring. We do not represent individuals involved in
              exploitation, organised crime, or conduct that causes deliberate
              harm to others.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {whatWeDont.map(({ title, text }) => (
              <div
                key={title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-10 transition-all hover:bg-white/10"
              >
                <div className="mb-6 flex items-center gap-4">
                  <XCircle className="h-8 w-8 shrink-0 text-red-400" strokeWidth={2} />
                  <h3 className={`${headlineFont} text-lg font-extrabold`}>{title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-400">{text}</p>
              </div>
            ))}
            <div className="flex flex-col justify-center rounded-2xl border border-[#4CAF50]/20 bg-[#4CAF50]/10 p-10">
              <h3 className={`${headlineFont} mb-2 text-lg font-extrabold text-[#4CAF50]`}>
                Our Promise
              </h3>
              <p className="text-sm italic leading-relaxed text-slate-300">
                Clean, ethical, and permanent results that respect the platforms
                and the law.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise to You */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center md:mb-16">
            <h2 className={`${headlineFont} mb-3 text-3xl font-extrabold text-[#1F3B64] md:text-[2rem]`}>
              Our Promise to You
            </h2>
            <div className="mx-auto h-1.5 w-20 rounded-full bg-[#4CAF50]" />
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {promises.map((line, i) => (
              <div key={i} className="group flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-lg font-bold text-[#4CAF50] transition-all group-hover:border-[#4CAF50] group-hover:bg-[#4CAF50] group-hover:text-white">
                  {i + 1}
                </div>
                <p className="pt-2 font-medium leading-relaxed text-slate-600">
                  {line}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We Are Global */}
      <section className="overflow-hidden border-t border-slate-200 bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center md:mb-16">
            <h2
              className={`${headlineFont} mb-3 text-3xl font-extrabold text-[#1F3B64] md:text-[2rem]`}
            >
              We Are Global
            </h2>
            <p className="text-base font-medium text-slate-600 md:text-lg">
              Wherever you are, we are already there.
            </p>
          </div>
          <div className="relative mb-16">
            <div className="relative aspect-[21/9] overflow-hidden rounded-[2rem] border border-slate-200 bg-[#1F3B64]/5 md:aspect-[3/1]">
              <img
                alt="World map representing global presence"
                className="h-full w-full object-cover opacity-60 grayscale transition-all duration-700 hover:grayscale-0 mix-blend-multiply"
                src={IMG_MAP}
              />
              {[
                { label: "NEW YORK HUB", top: "35%", left: "22%", delay: "0s" },
                { label: "LONDON HUB", top: "28%", left: "46%", delay: "0.5s" },
                { label: "DUBAI HUB", top: "45%", left: "58%", delay: "1s" },
                { label: "SINGAPORE HUB", top: "68%", left: "81%", delay: "1.5s" },
              ].map((hub) => (
                <div
                  key={hub.label}
                  className="group absolute cursor-default"
                  style={{ top: hub.top, left: hub.left }}
                >
                  <div
                    className="absolute h-4 w-4 animate-ping rounded-full bg-[#4CAF50]"
                    style={{ animationDelay: hub.delay }}
                  />
                  <div className="relative h-4 w-4 rounded-full border-2 border-white bg-[#4CAF50] shadow-lg shadow-[#4CAF50]/50" />
                  <div className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-[#1F3B64] px-3 py-1 text-[10px] font-extrabold text-white opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
                    {hub.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {[
              ["50", "Specialists"],
              ["Global", "Time Zones"],
              ["24/7", "Coverage"],
              ["30+", "Countries"],
            ].map(([k, v]) => (
              <div key={v} className="space-y-2">
                <p className={`${headlineFont} text-2xl font-extrabold text-[#1F3B64] md:text-3xl`}>
                  {k}
                </p>
                <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
                  {v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Our Clients Say */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2
            className={`${headlineFont} mb-10 text-center text-2xl font-extrabold text-[#1F3B64] md:text-3xl`}
          >
            What Our Clients Say
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-12"
              >
                <div>
                  <div className="mb-10 flex gap-1 text-[#4CAF50]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-[#4CAF50] text-[#4CAF50]"
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
                  <p className="mb-8 text-base font-medium leading-relaxed text-[#1F3B64]/90 md:text-[17px]">
                    {t.quote}
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-8">
                  <p className="font-extrabold text-[#1F3B64]">{t.name}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-400">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#1F3B64] p-10 text-center shadow-2xl md:rounded-[3rem] md:p-16 lg:p-20">
            <div className="relative z-10">
              <h2
                className={`${headlineFont} mb-6 text-3xl font-extrabold leading-snug text-white md:text-4xl lg:text-[2.35rem]`}
              >
                Ready to Take Back Control?
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-base text-slate-300 md:text-lg">
                Your story deserves to be told on your terms. Let&apos;s build a
                digital presence that reflects who you truly are.
              </p>
              <a
                {...calendlyNewTabProps}
                className={`${headlineFont} inline-block rounded-xl bg-[#4CAF50] px-10 py-4 text-base font-extrabold text-white shadow-xl shadow-black/20 transition hover:scale-[1.02] active:scale-[0.98] md:px-12 md:text-lg`}
              >
                Book a Free Consultation
              </a>
            </div>
            <div
              className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#2E5B88]/30 blur-[120px]"
              aria-hidden
            />
            <div
              className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#4CAF50]/20 blur-[120px]"
              aria-hidden
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;

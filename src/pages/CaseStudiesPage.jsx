import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    tag: "Product Crisis",
    title: "Rebuilding Trust After a Product Crisis",
    meta: {
      Industry: "Consumer Tech",
      Duration: "8 Months",
      Profile: "SaaS Enterprise",
      Challenge: "Global Recall",
    },
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtXKFAY42IBbvAzbljXQqubiqxJanQZYgYkIHrthKu-yS7cGGER4cZ9tlN1FkGMS5MCIVtu7RfQ81mNLrQ_80rL8NjkCdifolS93NuPYc0jgjeH8VIyEXhjVjuIGqNMxH0ePnWVO55z-9r1vxKIvx_fdRNKPKacx0da-8YoHy_GsjMJMbJbsMxBwrBWEbXCeW3fldA9KJ6vl-X649oV7R_jdm8whkEeEgOshDbSxpj1S13S9hVs1Yv7Y8AYOf1c1kE0XdjOdRnRoE",
    imageAlt: "Server hardware with blue lighting in a corporate environment",
    metric: {
      position: "bottom-right",
      variant: "green",
      main: "94%",
      sub: "Negative Results Suppressed",
    },
    columns: [
      {
        title: "The Challenge",
        text: "A widespread software security vulnerability led to a global product recall, resulting in thousands of negative press articles and a 40% drop in brand sentiment across search engines.",
      },
      {
        title: "The Result",
        text: "Restored Page 1 neutrality within 6 months. Developed an authoritative transparency portal that now serves as the primary source of truth for industry security standards.",
      },
    ],
    linkText: "Read Comprehensive Analysis",
    imageFirst: false,
  },
  {
    tag: "Executive/Founder",
    title: "Executive & Founder Reputation Management",
    meta: {
      Industry: "Private Equity",
      Duration: "12 Months",
      Profile: "UHNW Individual",
      Challenge: "Legal Legacy",
    },
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuANTdQzlT2R0BH3fbV0RG0HAtDHvIDBgVaKdMderHa-_zgiqqulDo5qUE6sgc613ZHxawB3pE-ju1Rt4K259i5EbED6uRIkY0ixn5JVQypQ0vypLvuhoqxGEuCg5zGHJ__56lyfB8iQuGW_KXEkCLtRM9ITV_dPpulmMFNKxpRBYa7F5XTSEXiKyxpyMHl0kQABKaClGEZijdJauIl1SM7MlMPQHQLPiLhZrhNqqsfTraZtY3y4ztzUClVQBrrf13ejNGz6nUPmkqQ",
    imageAlt: "Executive office with city view at dusk",
    metric: {
      position: "top-left",
      variant: "navy",
      main: "#1",
      sub: "Ranking for Primary Bio",
    },
    columns: [
      {
        title: "The Strategy",
        text: "Aggressive content creation focusing on the founder's philanthropic efforts and industry thought leadership to push down legacy dispute articles from previous legal battles.",
      },
      {
        title: "Impact",
        text: "Achieved complete control over the first two pages of search results. Investor confidence scores increased by 65% during the subsequent funding round.",
      },
    ],
    linkText: "View Executive Roadmap",
    imageFirst: true,
  },
  {
    tag: "Financial Services",
    title: "Financial Professional Reputation Recovery",
    meta: {
      Industry: "Asset Management",
      Duration: "5 Months",
      Profile: "Fund Manager",
      Challenge: "Misinformation",
    },
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA556HkcU4EcVY1uQkZ-V16WL9Re2jAF0Do6fkg65qIf8DUoe66d32wN9NCN1clrxg5yeFTpjkWCzX3lnXoC2X6ZmwGKOhjCq6fSmzjlcky9sQ-jiXgK2-OqT8tVGiWu3qnAbQX8Xclcq5HlXNlj6zHP7vf4XVxErq88tfWrYImIbvfBDpKyGKFMz7qY8Yla6IvAex8bkihEC6F0rNpDnh5INfTHPvnnYM7qVjw-6mdSMT_q5E1JsZmDkUKefnyMuQ8h-Bp2vhmlIs",
    imageAlt: "Desk with tablet showing financial data",
    metric: {
      position: "bottom-left",
      variant: "white",
      main: "88%",
      sub: "Regulatory Trust Restoration",
    },
    columns: [
      {
        title: "Objective",
        text: "Counteract a smear campaign launched by a former competitor that triggered unnecessary scrutiny from regulatory compliance bots and potential clients.",
      },
      {
        title: "Strategy",
        text: "Deployment of 'Authority Sites'—highly-indexed personal domain networks that featured verifiable credentials, verified white papers, and historical performance audits.",
      },
    ],
    linkText: "Examine Digital Shield",
    imageFirst: false,
  },
  {
    tag: "Medical & Healthcare",
    title: "Clinical Reputation Management",
    meta: {
      Industry: "Healthcare",
      Duration: "10 Months",
      Profile: "Surgery Center",
      Challenge: "Review Bombing",
    },
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDhVJBFixt5r1JghMYDeRovl7j6CWSC24bE7YalUefnjDVMgz_xljxTMwTrBUoILuLD3S_ZPLscQbNKqSFVvPX1IOZw3VgMB7gHKRVQnQ8RLBMNlxiTI3WJIep7dXAhSli5mcZLRY8q9Nq2vg4YBjrC2y-QUgZYD_CaXwiog7RaGQRWTN76XOdbgWRi1FT6OjG0gDQqqI1zAgIwv51sG1Eore3khHCCmbLysTTn9iQsp6PRonU6T6QGLQTNA4eECOHdLQXMCasxBqw",
    imageAlt: "Bright modern medical hallway",
    metric: {
      position: "bottom-right",
      variant: "green",
      main: "4.8★",
      sub: "Avg Rating Reclaimed",
    },
    columns: [
      {
        title: "The Challenge",
        text: "A coordinated attack on review platforms by a disgruntled patient group threatened the clinical reputation of a leading orthopedic surgery center.",
      },
      {
        title: "Solution",
        text: "Implemented an automated HIPAA-compliant feedback loop that encouraged genuine patient voices to share their positive experiences across Google and Healthgrades.",
      },
    ],
    linkText: "View Healthcare Success",
    imageFirst: true,
  },
  {
    tag: "Academic/Student",
    title: "Student Reputation Recovery",
    meta: {
      Industry: "Higher Education",
      Duration: "3 Months",
      Profile: "Graduate Candidate",
      Challenge: "Social Disclosure",
    },
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuApDrfqAozsOwRXFj-BVPSF4HIEuVnHKafQicFeDBGS_gYgVtsKNUlaqtGD8EpDIpDVRBCti1DrWe_QUJaYbZ09OkLBwVqjxFZJw08f8ehCXcwq70JpUeCy13vtSJxhJRw3j91D3u0r_BuWBKCtut5b7K8iLBFXXTXYAEivSwlni2QR22PqXvQB7azlvBhGtJDKQ9xVgDtYd6mh7LyTpZdZZjxyav1Ue6xh6-OzSdEtnzarKSVVTjnlOO9_rLpbV1eebwixSZ8s8sw",
    imageAlt: "Sunlit university library",
    metric: {
      position: "top-right",
      variant: "navySolid",
      main: "100%",
      sub: "Content Remediated",
    },
    columns: [
      {
        title: "The Challenge",
        text: "Improper social media activity from early adolescence surfaced during a background check for a high-profile PhD residency program.",
      },
      {
        title: "Results",
        text: "Successfully negotiated the removal of legacy content under 'Right to be Forgotten' frameworks and established a professional scholarly portfolio.",
      },
    ],
    linkText: "Read Recovery Case",
    imageFirst: false,
  },
];

function MetricBadge({ metric }) {
  const pos =
    metric.position === "bottom-right"
      ? "bottom-6 right-6"
      : metric.position === "bottom-left"
        ? "bottom-6 left-6"
        : metric.position === "top-left"
          ? "top-6 left-6"
          : "top-6 right-6";

  if (metric.variant === "green") {
    return (
      <div
        className={`absolute ${pos} rounded-2xl bg-[#78dc77]/95 p-4 shadow-xl backdrop-blur-md md:p-6`}
      >
        <span className="block font-heading text-4xl font-black text-[#002204] md:text-5xl">
          {metric.main}
        </span>
        <span className="text-xs font-bold uppercase tracking-tight text-[#002204] md:text-sm">
          {metric.sub}
        </span>
      </div>
    );
  }
  if (metric.variant === "navy") {
    return (
      <div
        className={`absolute ${pos} rounded-2xl border border-white/10 bg-[#02254d]/95 p-4 shadow-xl backdrop-blur-md md:p-6`}
      >
        <span className="block font-heading text-4xl font-black text-[#78dc77] md:text-5xl">
          {metric.main}
        </span>
        <span className="text-xs font-bold uppercase tracking-tight text-white md:text-sm">
          {metric.sub}
        </span>
      </div>
    );
  }
  if (metric.variant === "white") {
    return (
      <div
        className={`absolute ${pos} rounded-2xl bg-white/90 p-4 shadow-xl backdrop-blur-lg md:p-6`}
      >
        <span className="block font-heading text-4xl font-black text-[#35618e] md:text-5xl">
          {metric.main}
        </span>
        <span className="text-xs font-bold uppercase tracking-tight text-[#43474e] md:text-sm">
          {metric.sub}
        </span>
      </div>
    );
  }
  /* navySolid */
  return (
    <div
      className={`absolute ${pos} rounded-2xl bg-[#1f3b64] p-4 text-white shadow-xl md:p-6`}
    >
      <span className="block font-heading text-4xl font-black text-[#94f990] md:text-5xl">
        {metric.main}
      </span>
      <span className="text-xs font-bold uppercase tracking-tight md:text-sm">
        {metric.sub}
      </span>
    </div>
  );
}

function CaseStudySection({ study }) {
  const metaEntries = Object.entries(study.meta);

  const textCol = (
    <div className="space-y-5 md:space-y-6">
      <div className="inline-flex items-center rounded-full bg-[#e1e8fd] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#02254d] md:text-xs">
        {study.tag}
      </div>
      <h2 className="font-heading text-2xl font-bold leading-tight text-[#02254d] md:text-3xl lg:text-4xl">
        {study.title}
      </h2>
      <div className="grid grid-cols-2 gap-3 pt-2 text-sm md:gap-4">
        {metaEntries.map(([k, v]) => (
          <div key={k} className="rounded-xl bg-[#f1f3ff] p-3 md:p-4">
            <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-[#74777f]">
              {k}
            </span>
            <span className="font-bold text-[#02254d]">{v}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const imageCol = (
    <div>
      <div className="group/img relative overflow-hidden rounded-2xl shadow-2xl">
        <img
          alt={study.imageAlt}
          className="aspect-video w-full object-cover transition-transform duration-700 group-hover/img:scale-105"
          src={study.image}
        />
        <MetricBadge metric={study.metric} />
      </div>
      <div className="mt-6 rounded-2xl border border-[#c4c6d0]/10 bg-white p-6 shadow-sm md:mt-8 md:p-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {study.columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-2 font-heading font-bold text-[#02254d] md:mb-3">
                {col.title}
              </h4>
              <p className="text-sm leading-relaxed text-[#43474e]">
                {col.text}
              </p>
            </div>
          ))}
        </div>
        <a
          href="/contact"
          className="group/btn mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#35618e] transition-all hover:gap-3 md:mt-8"
        >
          {study.linkText}
          <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
        </a>
      </div>
    </div>
  );

  return (
    <section className="group">
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        {study.imageFirst ? (
          <>
            <div className="order-2 lg:order-1 lg:col-span-7">{imageCol}</div>
            <div className="order-1 lg:order-2 lg:col-span-5">{textCol}</div>
          </>
        ) : (
          <>
            <div className="lg:col-span-5">{textCol}</div>
            <div className="lg:col-span-7">{imageCol}</div>
          </>
        )}
      </div>
    </section>
  );
}

export default function CaseStudiesPage() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Case Studies | Reputation360";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <main className="flex-1 bg-[#f9f9ff] pt-28 md:pt-32">
      <header className="mx-auto mb-14 max-w-6xl px-4 text-center md:mb-20 md:px-8">
        <h1 className="font-heading text-[30px] font-extrabold leading-tight tracking-tight text-[#02254d] md:text-[44px] lg:text-[52px]">
          <span className="block">Restoring Reputation</span>
          <span className="mt-1 block text-[#35618e] md:mt-1.5">
            Across Industries
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-[#43474e] md:mt-6 md:text-[16px] lg:text-lg">
          Detailed analysis of how we restore trust, neutralize misinformation,
          and rebuild digital legacies for the world&apos;s most critical
          stakeholders.
        </p>
      </header>

      <div className="mx-auto max-w-6xl space-y-20 px-4 md:space-y-28 md:px-8 lg:space-y-32">
        {cases.map((study) => (
          <CaseStudySection key={study.title} study={study} />
        ))}
      </div>

      <section className="mx-auto mt-20 max-w-4xl px-4 pb-16 md:mt-28 md:px-8 md:pb-24">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-[#02254d] p-10 text-center shadow-2xl md:rounded-[2rem] md:p-16 lg:p-20">
          <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#35618e]/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#78dc77]/10 blur-3xl" />
          <h2 className="relative z-10 font-heading text-[26px] font-extrabold text-white md:text-4xl lg:text-5xl">
            Start Your Own{" "}
            <span className="text-[#78dc77]">Success Story.</span>
          </h2>
          <p className="relative z-10 mx-auto mt-4 max-w-2xl text-[15px] text-[#8ca6d5] md:mt-6 md:text-[17px] lg:text-lg">
            Your reputation is your most valuable asset. Don&apos;t leave it to
            chance. Partner with Reputation360 and take control of your digital
            narrative today.
          </p>
          <div className="relative z-10 mt-8 flex flex-col items-center justify-center gap-3 md:mt-10 md:flex-row md:gap-4">
            <a
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-xl bg-[#78dc77] px-10 py-3.5 text-sm font-bold text-[#002204] shadow-lg shadow-[#00450e]/30 transition-all hover:bg-white active:scale-[0.98] md:w-auto md:text-base lg:px-12 lg:py-4 lg:text-lg"
            >
              Get My Free Audit
            </a>
            <a
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/10 px-10 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 md:w-auto md:text-base lg:px-12 lg:py-4 lg:text-lg"
            >
              Talk to an Expert
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

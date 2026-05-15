/**
 * Curated answers for the on-site assistant. Copy is aligned with
 * `/resources/faqs`, service pages, and how Reputation360 describes its work.
 * Update this file as offerings or messaging change.
 */

import { CALENDLY_URL } from "../constants/scheduling.js";

/** @typedef {{ id: string, triggers: string[], keywords: string[], reply: string, cta?: { href: string; label: string } }} R360ChatbotEntry */

/** @type {R360ChatbotEntry[]} */
export const R360_CHATBOT_ENTRIES = [
  {
    id: "what-is-orm",
    triggers: [
      "what is online reputation",
      "what is orm",
      "what do you do",
      "how can you help",
    ],
    keywords: [
      "reputation",
      "management",
      "google",
      "search",
      "serp",
      "brand",
      "narrative",
    ],
    reply:
      "Online reputation management (ORM) is the work of shaping what people see when they search your name or your company on Google and other engines. Reputation360 focuses on monitoring what appears, building accurate positive content that ranks, and, where removal is not possible, suppressing harmful or misleading results so they stop shaping first impressions. ORM is not about hiding the truth - it is about making sure the picture people find is fair and current.",
    cta: { href: "/resources/faqs", label: "Read full FAQs" },
  },
  {
    id: "suppression-vs-removal",
    triggers: [
      "suppression vs removal",
      "difference between suppression",
      "can you remove",
      "delete from google",
    ],
    keywords: [
      "remove",
      "removal",
      "suppress",
      "suppression",
      "takedown",
      "deleted",
    ],
    reply:
      "Removal means content is taken down so it no longer exists online. Suppression means the item may still exist, but new authoritative content outranks it so it drops to page three or beyond - where almost no one looks. Reputation360 pursues removal where it is realistic (policy violations, some privacy cases, defamation through proper channels). When removal is not possible, suppression often delivers the same practical outcome for everyday searches.",
    cta: { href: "/resources/faqs#section-2", label: "Removal and suppression FAQs" },
  },
  {
    id: "negative-news",
    triggers: ["negative news", "news article", "press story"],
    keywords: ["article", "journalist", "media", "newspaper", "coverage"],
    reply:
      "Legitimate news is rarely deleted just because it is unflattering. Reputation360 is direct about that. What usually works is a sustained suppression strategy: real profiles, sites, and publications that earn authority for your name until the story no longer sits on page one for the queries that matter to you.",
    cta: { href: "/case-studies", label: "See case studies" },
  },
  {
    id: "timeline",
    triggers: ["how long", "timeline", "how soon", "when will i see"],
    keywords: ["months", "weeks", "results", "time", "fast", "quick"],
    reply:
      "Search moves on a realistic calendar. Many campaigns show measurable movement in months 2-4, with stronger displacement of primary negative results often in months 5-8, and substantial transformation for most cases within about 8-12 months. Weeks 1-4 usually cover audit, strategy, and first content going live. Your consultation should include an honest estimate for your specific sources and goals.",
    cta: { href: "/resources/faqs#section-3", label: "Timelines and results" },
  },
  {
    id: "who-we-serve",
    triggers: ["who do you work with", "do you work with", "types of clients"],
    keywords: [
      "executive",
      "doctor",
      "lawyer",
      "attorney",
      "advisor",
      "financial",
      "job",
      "seeker",
      "business",
      "company",
      "individual",
      "ceo",
    ],
    reply:
      "Reputation360 works with both individuals and businesses. Individuals often include financial advisors, doctors, lawyers, executives, and job seekers. Businesses range from growth-stage companies to established brands. If search results do not reflect the story you want told, a consultation is the fastest way to see whether and how we can help.",
    cta: { href: "/services", label: "Explore services" },
  },
  {
    id: "pricing",
    triggers: ["how much", "pricing", "cost", "fee", "quote", "retainer"],
    keywords: ["price", "budget", "expensive", "cheap", "payment"],
    reply:
      "Engagements are scoped to the situation - the sources involved, markets, and how much displacement or building is required. Reputation360 does not publish one-size-fits-all pricing on the site. The free consultation is the right place for a straightforward conversation about what is realistic and what investment would look like for your case.",
    cta: { href: "/contact", label: "Contact us" },
  },
  {
    id: "consultation",
    triggers: ["free consultation", "book a call", "schedule", "calendly"],
    keywords: ["consult", "meeting", "call", "appointment", "intro"],
    reply:
      "The free consultation is about 30 minutes: you share your search terms and context, and you get an honest read on what is achievable and over what kind of timeline. There is no obligation. If we are not the right fit, you still leave with a clearer picture of the landscape.",
    cta: { href: CALENDLY_URL, label: "Book on Calendly" },
  },
  {
    id: "guarantee",
    triggers: ["guarantee", "promise results", "100 percent"],
    keywords: ["sure", "certain", "warranty"],
    reply:
      "Reputation360 does not guarantee specific rankings or dates. Guarantees in this industry often mean risky shortcuts or overpromising. What the team commits to is a custom strategy, steady execution, transparent reporting, and adapting the plan if something is not moving as expected.",
    cta: { href: "/resources/faqs#section-3", label: "More on how we work" },
  },
  {
    id: "ethics-google",
    triggers: ["white hat", "google guidelines", "ethical", "black hat"],
    keywords: ["spam", "guidelines", "compliance", "ethical", "manipulate"],
    reply:
      "Work is described as white-hat: real sites, real articles, real profiles - not fake signals or schemes that violate search guidelines. That is how results are intended to stay durable after the heavy lifting is done.",
    cta: { href: "/resources/faqs#section-4", label: "Compliance and ethics" },
  },
  {
    id: "confidentiality",
    triggers: ["confidential", "nda", "privacy", "discretion", "secret"],
    keywords: ["private", "anonymous", "nobody knows"],
    reply:
      "Confidentiality is core to how Reputation360 operates. The public-facing work looks like a strong professional presence, not like reputation management. Mutual NDAs are part of the process before sensitive details are shared, and client situations are not discussed publicly.",
    cta: { href: "/privacy-policy", label: "Privacy policy" },
  },
  {
    id: "pr-vs-orm",
    triggers: ["public relations", "same as pr", "pr firm"],
    keywords: ["pr", "press", "media relations"],
    reply:
      "PR and ORM overlap on storytelling, but ORM is specifically about what ranks when someone searches your name. Reputation360 is search-first; PR-style tactics may support that, but the primary goal is what appears on the results page.",
  },
  {
    id: "contact",
    triggers: ["email", "reach you", "get in touch", "whatsapp", "phone"],
    keywords: ["contact", "write", "message", "hello"],
    reply:
      "You can email hello@reputation360.in, use the WhatsApp button on this site, or go to the contact page to send a message. For a structured conversation, booking the free Calendly slot is often fastest.",
    cta: { href: "/contact", label: "Contact page" },
  },
  {
    id: "location",
    triggers: ["where are you", "based in", "us only", "international"],
    keywords: ["india", "usa", "us", "global", "remote", "country"],
    reply:
      "Reputation360 works with clients in the United States and globally. Strategy adapts to the markets and languages that matter for your search footprint.",
  },
  {
    id: "dedicated-manager",
    triggers: ["account manager", "dedicated contact", "who will i work with"],
    keywords: ["manager", "point of contact", "team"],
    reply:
      "Clients get a dedicated account manager from the first conversation through delivery, so you are not re-explaining your case to a new person every week.",
  },
  {
    id: "after-results",
    triggers: ["come back", "rebound", "maintain results", "long term"],
    keywords: ["sustain", "maintenance", "relapse"],
    reply:
      "Positive assets are built to be durable - real authority, not tricks that evaporate. Many clients complete a campaign confident results will hold; others continue for further building. The FAQ section on timelines and durability goes deeper.",
    cta: { href: "/resources/faqs#section-3", label: "Durability and results" },
  },
];

/** Short prompts shown as chips in the chat panel. */
export const R360_CHATBOT_QUICK_PROMPTS = [
  "What is ORM?",
  "How long does it take?",
  "Pricing and consultation",
  "Is this confidential?",
];

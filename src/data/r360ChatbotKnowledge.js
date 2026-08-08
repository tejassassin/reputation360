/**
 * Curated answers for the on-site assistant, aligned with the Reputation360
 * chatbot training guide and published FAQs. Update when messaging changes.
 */

import { CALENDLY_URL } from "../constants/scheduling.js";

/** @typedef {{ id: string, triggers: string[], keywords: string[], reply: string, cta?: { href: string; label: string } }} R360ChatbotEntry */

/** @type {R360ChatbotEntry[]} */
export const R360_CHATBOT_ENTRIES = [
  {
    id: "company-overview",
    triggers: [
      "who is reputation360",
      "about reputation360",
      "tell me about your company",
      "what is reputation 360",
    ],
    keywords: ["founded", "years", "experience", "leading", "agency"],
    reply:
      "Reputation360 is a specialized online reputation management (ORM) and negative link suppression agency. We have 7+ years of hands-on experience and a track record of helping 1,100+ individuals and businesses, maintaining a 97% suppression success rate. Our primary markets are the United States, Canada, and Australia, and we also serve the UK/Europe. We use a 100% white-hat, search-engine-approved methodology (no fake reviews, no link farms, and no deceptive tactics). Confidentiality is standard and we protect all client relationships under strict discretion.",
    cta: { href: "/about", label: "About Reputation360" },
  },
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
      "image",
      "perception",
    ],
    reply:
      "Online Reputation Management is the process of controlling what people see when they search a name, business, or brand on Google — suppressing negative results, building and ranking positive content, managing reviews, and protecting your digital presence long term.",
    cta: { href: "/resources/faqs", label: "Read FAQs" },
  },
  {
    id: "negative-link-suppression",
    triggers: [
      "negative link suppression",
      "suppress links",
      "bury bad results",
      "push down links",
    ],
    keywords: ["suppress", "suppression", "buried", "page 10", "visibility"],
    reply:
      "Negative Link Suppression is a targeted, surgical service. We build and rank high-authority, positive digital assets to displace specific damaging URLs (like forum complaints, outdated articles, false reviews, mugshots, or court records) on page one of Google, pushing them down to where they are no longer seen.",
    cta: { href: "/resources/faqs#section-2", label: "How suppression works" },
  },
  {
    id: "delete-or-remove-content",
    triggers: [
      "do you delete",
      "can you delete",
      "remove content",
      "delete reviews",
      "delete from google",
      "take down",
      "erase",
    ],
    keywords: ["delete", "removal", "remove", "takedown", "erase", "legal"],
    reply:
      "We never guarantee removal of a specific piece of content, but we pursue every realistic avenue. Takedowns require source cooperation, which publishers rarely grant. Google de-indexing only applies to specific policy violations (like doxxing or non-consensual images). Legal removal (court orders, defamation, or Right to Be Forgotten) is real but slow and expensive. Therefore, we run removal and suppression in parallel—suppression is the controllable path that delivers most results.",
    cta: { href: "/resources/faqs#section-2", label: "Removal vs. Suppression" },
  },
  {
    id: "negative-reviews",
    triggers: [
      "bad reviews",
      "negative reviews",
      "customers see reviews",
    ],
    keywords: ["review", "reviews", "rating", "stars", "yelp"],
    reply:
      "Bad reviews in search are a problem we see all the time. We do not promise to delete third-party reviews - platforms usually will not allow it. Instead we suppress their visibility in search, help you earn and showcase genuine positive reviews, and strengthen assets that outrank the noise. Timelines vary, but suppression assets typically go live within 2 weeks of starting.",
    cta: { href: "/case-studies", label: "Case studies" },
  },
  {
    id: "timeline-results",
    triggers: ["how long", "timeline", "how soon", "when will i see"],
    keywords: ["months", "weeks", "results", "time", "fast", "quick", "overnight"],
    reply:
      "Some improvement can be seen within 4–8 weeks; meaningful suppression of strong negative results typically takes 6–12 months, depending on the authority of the negative content and how much positive content already exists.",
    cta: { href: "/resources/faqs#section-3", label: "Timelines and results" },
  },
  {
    id: "reputation-building-services",
    triggers: [
      "reputation building",
      "brand building",
      "thought leadership",
      "personal branding",
      "linkedin profile",
      "employer branding",
    ],
    keywords: ["branding", "sub-services", "profiles", "authority"],
    reply:
      "For clients who want to strengthen their public presence, we offer eight Reputation Building sub-services: Personal Branding, LinkedIn Personal Branding, Employer Branding (Glassdoor/Careers pages), Thought Leadership & Editorial placement, Social Media Reputation Building, Performance Marketing, Brand Strategy, and Reputation Consultations. We recommend running a free Reputation Scan first to audit any core reputation issues.",
    cta: { href: "/services", label: "Explore building services" },
  },
  {
    id: "who-needs-orm",
    triggers: ["who needs", "do i need", "am i a fit", "is my situation"],
    keywords: [
      "business owner",
      "professional",
      "false",
      "focus",
      "competitor",
      "outdated",
    ],
    reply:
      "Anyone whose search results affect how they're perceived professionally or personally — founders, executives, doctors, lawyers, financial advisors, job seekers, and businesses where one bad result can cost a client, deal, patient, or opportunity.",
    cta: { href: "/services", label: "Who we serve" },
  },
  {
    id: "true-but-negative",
    triggers: ["what if the negative", "content is true", "true but"],
    keywords: ["true", "accurate", "happened", "past"],
    reply:
      "Yes, this is common. ORM doesn't erase the past — it ensures current achievements and character are what people find first, rather than something outdated that no longer represents who someone is.",
  },
  {
    id: "social-media",
    triggers: ["social media", "facebook", "instagram", "twitter"],
    keywords: ["social", "tweet", "post", "profile"],
    reply:
      "Yes - social profiles and posts often rank for your name. We can address unwanted social results with the same playbook: strong positive assets, suppression where needed, and platform policy routes when content violates rules. We can also talk strategy so you are less exposed in the future.",
  },
  {
    id: "fake-reviews-misinformation",
    triggers: ["fake review", "false information", "misinformation", "lies about", "can negative google results actually be fixed", "fix negative google"],
    keywords: ["fake", "false", "lie", "defamation", "bogus", "fixed", "repair"],
    reply:
      "Often, yes. Some content can be removed if it violates platform policy or qualifies for legal removal. When removal isn't possible, suppression pushes it down by ranking stronger positive assets above it.",
  },
  {
    id: "seo",
    triggers: ["seo", "search engine optimization", "rank higher"],
    keywords: ["ranking", "keywords", "organic"],
    reply:
      "SEO is a major lever in what we do: we create and optimize content so positive pages earn relevance and authority, which naturally pushes harmful links down. If we use jargon, ask - we are happy to explain in plain language.",
  },
  {
    id: "audit-discovery",
    triggers: ["how do you find", "audit", "what shows up"],
    keywords: ["bing", "google", "scan", "monitor", "footprint"],
    reply:
      "We start with a full picture of your search footprint - Google, Bing, major review sites, social platforms, and anything else that ranks for your name or brand. That audit drives a custom plan: what to boost, what to suppress, and in what order.",
    cta: { href: "/contact", label: "Request a consult" },
  },
  {
    id: "suppress-without-delete",
    triggers: ["how do you suppress", "without deleting", "white hat"],
    keywords: ["technique", "method", "algorithm"],
    reply:
      "Think of it as helping the right pages win a fair popularity contest. We publish and optimize legitimate content - articles, bios, press, listings - using white-hat SEO so search engines reward quality and relevance. Negative URLs lose visibility because better pages outrank them, not because of shady tricks.",
    cta: { href: "/resources/faqs#section-2", label: "Ethics and compliance" },
  },
  {
    id: "negative-come-back",
    triggers: ["come back", "rebound", "bounce back", "temporary", "will suppressed content come back"],
    keywords: ["permanent", "again", "resurface", "compound"],
    reply:
      "With ongoing monitoring and reinforcement, no — white-hat suppression builds genuine, lasting authority, so results compound rather than fade, unlike shortcut-based campaigns.",
    cta: { href: "/resources/faqs#section-3", label: "Durability" },
  },
  {
    id: "proof-reports",
    triggers: ["proof", "case studies", "before and after", "reports"],
    keywords: ["evidence", "portfolio", "examples"],
    reply:
      "Absolutely - we share case studies and before-and-after style narratives where appropriate, and clients receive ongoing reporting on what moved and what is next. Browse the case studies index, then book a call for specifics that match your industry.",
    cta: { href: "/case-studies", label: "Case studies" },
  },
  {
    id: "multiple-issues",
    triggers: ["multiple issues", "several problems", "more than one"],
    keywords: ["everything", "several", "multiple"],
    reply:
      "We can prioritize several issues in one roadmap - usually tackling what hurts revenue or trust first, then layering broader brand protection. The consultation is where we stack-rank urgency and budget.",
    cta: { href: CALENDLY_URL, label: "Book a call" },
  },
  {
    id: "positive-content-ranks",
    triggers: ["how do you make positive", "rank positive", "boost good content"],
    keywords: ["articles", "press", "testimonials", "publish"],
    reply:
      "We create or refresh high-trust assets - thought leadership, profiles, media, reviews, structured web pages - then apply SEO, internal linking, and distribution so those pages earn the rankings you want. As they strengthen, negative URLs slide down.",
  },
  {
    id: "worried-business",
    triggers: ["worried", "scared", "hurting my business", "stressed"],
    keywords: ["anxious", "nervous", "afraid"],
    reply:
      "I know this stuff is stressful - you are not alone. The best next step is a no-pressure conversation: we look at what is ranking, explain options in plain English, and map a plan that protects what you have built. No obligation to move forward.",
    cta: { href: CALENDLY_URL, label: "Talk to the team" },
  },
  {
    id: "legal-ethical",
    triggers: ["is this legal", "illegal", "against the law", "is negative link suppression legal and ethical"],
    keywords: ["legal", "lawful", "ethical", "scam"],
    reply:
      "Completely — legitimate SEO and content strategy that fully complies with Google's guidelines. No deceptive, spammy, or manipulative tactics, ever.",
  },
  {
    id: "will-people-find-out",
    triggers: [
      "will people know",
      "find out you helped",
      "anyone know",
      "secret",
      "is the service confidential",
    ],
    keywords: ["discreet", "private", "hide that", "discretion", "confidentiality"],
    reply:
      "Yes — complete discretion always. Client relationships are never disclosed; strict confidentiality is standard, particularly given how many clients are professionals handling sensitive situations.",
    cta: { href: "/resources/faqs#section-7", label: "Confidentiality FAQs" },
  },
  {
    id: "competitor-attacks",
    triggers: ["competitor", "rival", "attack", "sabotage"],
    keywords: ["competing", "smear"],
    reply:
      "We see competitor-driven noise regularly. The response is usually a mix of suppression, factual counter-narrative, and policy or legal paths when content is false or abusive. We will be honest about what is realistic and how long it may take.",
    cta: { href: "/contact", label: "Contact the team" },
  },
  {
    id: "startup-budget",
    triggers: ["startup", "limited budget", "small business", "cant afford"],
    keywords: ["budget", "cheap", "affordable", "bootstrap"],
    reply:
      "We work with organizations of different sizes and tailor scope to what matters most right now. If budget is tight, say so on your call - we can prioritize the highest-impact moves first instead of pretending one package fits everyone.",
    cta: { href: CALENDLY_URL, label: "Schedule a consult" },
  },
  {
    id: "objection-go-away",
    triggers: ["go away on its own", "wait it out", "ignore it"],
    keywords: ["maybe", "eventually", "time heals"],
    reply:
      "Negative URLs often gain authority over time if nothing counters them - waiting usually makes it harder, not easier. Acting early tends to be quieter and more cost-effective than cleaning up a deeper mess later.",
  },
  {
    id: "objection-expensive",
    triggers: ["too expensive", "costs too much", "cheaper"],
    keywords: ["expensive", "pricey", "cost"],
    reply:
      "Reputation damage usually costs more than proactive work - lost deals, stalled hiring, stress. We offer scoped engagements and can talk tiers on a call. If we are not the right spend for you, we will say so.",
    cta: { href: "/contact", label: "Contact us" },
  },
  {
    id: "objection-diy",
    triggers: ["do it myself", "myself", "on my own", "without an agency"],
    keywords: ["diy", "alone", "learn"],
    reply:
      "You can try DIY, but suppression at scale usually needs specialized SEO, publishing relationships, and daily judgment calls. We do this full-time, so you stay focused on running the business while we handle the technical heavy lifting.",
  },
  {
    id: "objection-trust",
    triggers: ["dont trust", "bad experience", "scammed before"],
    keywords: ["trust", "skeptical", "burned"],
    reply:
      "That is fair - the industry has noisy players. We lean on transparency: documented reporting, case studies, and a consult where we tell you what we will not promise. Clients across the US, Canada, and Australia rely on that approach.",
    cta: { href: "/case-studies", label: "See proof" },
  },
  {
    id: "who-we-serve",
    triggers: ["who do you work with", "types of clients", "industries"],
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
      "We serve a wide range of clients including Individuals, Executives & C-suite leaders, Financial advisors, Doctors & healthcare professionals, Lawyers & attorneys, Real estate agents & brokers, Job seekers, and Businesses & companies of all sizes. We tailor our examples and strategy to whichever segment matches your profile.",
    cta: { href: "/who-we-serve/individual", label: "Who we serve" },
  },
  {
    id: "pricing",
    triggers: ["how much", "pricing", "cost", "fee", "quote", "retainer"],
    keywords: ["price", "payment", "package"],
    reply:
      "Pricing depends on severity, number of problem URLs, markets, and how aggressive you want to be. We build custom packages after we understand the facts - that conversation belongs with our team, not a generic chat quote.",
    cta: { href: "/contact", label: "Contact for pricing" },
  },
  {
    id: "guarantee-success-rate",
    triggers: ["guarantee", "promise results", "100 percent", "success rate", "can reputation360 guarantee removal of specific content"],
    keywords: ["sure", "certain", "warranty", "percent", "guarantees"],
    reply:
      "No — outcomes depend on other websites, platforms, or courts, which are outside anyone's control. What's guaranteed is pursuing every realistic removal avenue plus suppression regardless of the outcome.",
    cta: { href: "/resources/faqs#section-3", label: "How we measure success" },
  },
  {
    id: "consultation-handoff",
    triggers: [
      "free consultation",
      "book a call",
      "schedule",
      "calendly",
      "talk to human",
      "speak to someone",
      "talk to a person",
      "sales team",
      "what is a reputation consultation",
    ],
    keywords: ["consult", "meeting", "call", "appointment", "human", "live", "session"],
    reply:
      "A structured expert session reviewing current online presence, identifying what's hurting or limiting reputation, and providing a clear, prioritized roadmap. It's the right starting point for anyone unsure which service they need.",
    cta: { href: CALENDLY_URL, label: "Book on Calendly" },
  },
  {
    id: "lead-capture-details",
    triggers: [
      "my email",
      "my phone",
      "contact me back",
      "leave my details",
      "sign up",
    ],
    keywords: ["email", "phone", "number", "callback"],
    reply:
      "I cannot store personal details inside this chat. Please send your name, best email, and phone through the Contact page or WhatsApp, or book a Calendly slot so the team can follow up securely.",
    cta: { href: "/contact", label: "Go to Contact" },
  },
  {
    id: "preventative-new-business",
    triggers: ["new business", "starting a business", "from the beginning", "proactive"],
    keywords: ["launch", "startup", "prevent"],
    reply:
      "Smart move. We help new brands build a resilient positive footprint early - strong profiles, content, and reviews - so you have armor if something negative ever appears. We can tailor the playbook to your industry on a consultation.",
    cta: { href: CALENDLY_URL, label: "Plan a strategy call" },
  },
  {
    id: "negative-news",
    triggers: ["negative news", "news article", "press story"],
    keywords: ["article", "journalist", "media", "newspaper", "coverage"],
    reply:
      "News can be tough because publishers rarely delete legitimate stories. Our approach is sustained suppression with authoritative positive assets until the headline stops dominating your name queries - timelines vary with the outlet's strength.",
    cta: { href: "/case-studies", label: "Case studies" },
  },
  {
    id: "pr-vs-orm",
    triggers: ["public relations", "same as pr", "pr firm"],
    keywords: ["pr", "press", "media relations"],
    reply:
      "Traditional PR chases coverage; ORM focuses on what actually ranks when someone searches you. We borrow PR-style storytelling when it helps, but search results are the scoreboard.",
  },
  {
    id: "contact-channels",
    triggers: [
      "reach you",
      "get in touch",
      "whatsapp",
      "what is your email",
      "how do i contact",
    ],
    keywords: ["contact", "write", "message", "hello"],
    reply:
      "Email hello@thereputation360.com, tap the WhatsApp icon in this dock, or use the Contact page. Need a live conversation? Calendly is fastest for a consult.",
    cta: { href: "/contact", label: "Contact page" },
  },
  {
    id: "location-markets",
    triggers: ["where are you", "based in", "international", "canada", "australia"],
    keywords: ["usa", "us", "country", "region", "america", "sydney", "toronto"],
    reply:
      "The United States is our primary market, and we actively support clients in Canada and Australia as well. Strategy adjusts for the countries and languages that matter for your search footprint.",
  },
  {
    id: "dedicated-manager",
    triggers: ["account manager", "dedicated contact", "who will i work with"],
    keywords: ["manager", "point of contact", "team"],
    reply:
      "Every client gets a dedicated account manager from day one through delivery - one consistent partner who knows your case inside out.",
  },
  {
    id: "what-to-look-for",
    triggers: ["what should i look for in a reputation management company", "how to choose ORM", "what to look for in ORM"],
    keywords: ["look for", "agency", "company", "specialization", "caution"],
    reply:
      "Specialization in ORM (not a side service), white-hat/algorithm-compliant methods, evidence of results in similar situations, transparent reporting, and realistic timelines. Be cautious of anyone guaranteeing rankings or overnight results.",
    cta: { href: "/resources/faqs", label: "Read guides" },
  },
  {
    id: "suppress-one-or-two",
    triggers: ["is it possible to suppress just one or two negative results", "suppress one link", "suppress two links"],
    keywords: ["isolated", "single", "one", "two", "domain authority"],
    reply:
      "Yes — often more straightforward than a larger volume. The key variables are the domain authority of the harmful link and how competitive the name is as a keyword. Many isolated results can move within a few months.",
  },
  {
    id: "removal-vs-suppression",
    triggers: ["what is the difference between removal and suppression", "removal vs suppression", "difference between removal and suppression"],
    keywords: ["difference", "versus", "vs", "comparison", "deletes"],
    reply:
      "Removal permanently deletes content at the source (legal action, DMCA, publisher negotiation). Suppression pushes content down by outranking it with positive content. Removal is the stronger outcome when possible; suppression is what delivers results when it isn't. Both often run together.",
  },
  {
    id: "how-quickly-begin",
    triggers: ["how quickly can suppression begin", "how fast does suppression start"],
    keywords: ["begin", "start", "weeks", "engagement"],
    reply:
      "Within days of engagement. First assets typically go live within two weeks; meaningful ranking movement begins around 60 days, with sustained page-one improvement around 150–180 days for most cases.",
  },
  {
    id: "personal-branding-vs-orm",
    triggers: ["what is the difference between personal branding and ORM", "personal branding vs ORM"],
    keywords: ["difference", "branding", "orm", "personal", "reputation"],
    reply:
      "ORM controls what appears in search results. Personal branding shapes what that presence communicates — the authority it projects and the impression it creates with the audiences that matter most.",
  },
];

/** Short prompts shown as chips in the chat panel. */
export const R360_CHATBOT_QUICK_PROMPTS = [
  "Scan a person's reputation",
  "What is ORM?",
  "Bad reviews in Google",
  "How long until results?",
  "Book a consultation",
];

/**
 * Curated answers for Maya (the on-site assistant), aligned with the Reputation360
 * chatbot training guide and published FAQs. Update when messaging changes.
 * 
 * VOICE INSTRUCTION: Maya uses a warm, empathetic, plain-English, conversational,
 * down-to-earth voice everywhere across all responses, not just these 15 questions.
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
      "how does this work",
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
      "Think of what people see when they Google you or your business. Online Reputation Management is how we shape that picture: we keep an eye on what's out there, help honest, positive content — like your profiles, articles, and real reviews — rank well, and deal with anything harmful or outdated so it's not the first thing people see. The goal is that people find a fair, current version of your story.",
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
      "No, and we'll never tell you we can — that's not something anyone can honestly promise, since it depends on other websites or courts, not us. What we can promise is that we'll pursue every real option and keep building your positive presence no matter what happens with removal.",
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
      "Bad reviews in search are a problem we see all the time. We do not promise to delete third-party reviews - platforms usually will not allow it. Instead we suppress their visibility in search, help you earn and showcase genuine positive reviews, and strengthen assets that outrank the noise. You'll typically see the first pieces go live within two weeks.",
    cta: { href: "/case-studies", label: "Case studies" },
  },
  {
    id: "timeline-results",
    triggers: ["how long", "timeline", "how soon", "when will i see"],
    keywords: ["months", "weeks", "results", "time", "fast", "quick", "overnight"],
    reply:
      "You'll usually notice small movement within the first month or two. The bigger shift — where the good content is clearly winning — typically takes somewhere between 6 months and a year, depending on how tough the negative content is to outrank.",
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
      "Anyone who could lose something because of what shows up when their name is searched — a founder before a funding round, a doctor whose patients Google them first, someone job-hunting before an interview. Basically, if a bad search result could cost you a client, a deal, or an opportunity, this is for you.",
    cta: { href: "/services", label: "Who we serve" },
  },
  {
    id: "true-but-negative",
    triggers: ["what if the negative", "content is true", "true but"],
    keywords: ["true", "accurate", "happened", "past"],
    reply:
      "Yes, and this comes up a lot. We can't erase the past, but we can make sure what people see first is who you are today — your current work and expertise — instead of something from years ago that doesn't reflect that anymore.",
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
      "In many cases, yes. Sometimes we can get something taken down completely — that happens when it breaks a platform's rules or there's a legal path for it. When taking it down isn't realistic, we build up stronger, positive content instead, so it naturally pushes the bad result further down the page.",
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
      "Not if we keep it maintained. We build things the right way from the start, so results hold up over time instead of quietly slipping back — which is what tends to happen with shortcut methods once nobody's watching them.",
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
      "Completely. Everything we do follows Google's own rules. We never use fake reviews, shady link schemes, or anything sketchy — it's not worth the risk, and it doesn't hold up long-term anyway.",
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
      "Completely. We never tell anyone who our clients are or what we're working on for them. A lot of people come to us with sensitive situations, so keeping things private is just how we operate, every time.",
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
      "Anyone who could lose something because of what shows up when their name is searched — a founder before a funding round, a doctor whose patients Google them first, someone job-hunting before an interview. Basically, if a bad search result could cost you a client, a deal, or an opportunity, this is for you.",
    cta: { href: "/who-we-serve/individual", label: "Who we serve" },
  },
  {
    id: "pricing",
    triggers: ["how much", "pricing", "cost", "fee", "quote", "retainer"],
    keywords: ["price", "payment", "package"],
    reply:
      "It really depends on your situation — how many search terms we're targeting, how strong the negative content is, and the timeline you need. We don't do generic packages because two people's search results are rarely alike. The best next step is a free reputation scan or a quick consultation — either one gets you a real picture of what your case would involve and what it would cost, no obligation.",
    cta: { href: "/contact", label: "Contact for pricing" },
  },
  {
    id: "guarantee-success-rate",
    triggers: ["guarantee", "promise results", "100 percent", "success rate", "can reputation360 guarantee removal of specific content"],
    keywords: ["sure", "certain", "warranty", "percent", "guarantees"],
    reply:
      "No, and we'll never tell you we can — that's not something anyone can honestly promise, since it depends on other websites or courts, not us. What we can promise is that we'll pursue every real option and keep building your positive presence no matter what happens with removal.",
    cta: { href: "/resources/faqs#section-3", label: "How we measure success" },
  },
  {
    id: "consultation-handoff",
    triggers: [
      "book a consultation",
      "free consultation",
      "book a call",
      "schedule",
      "calendly",
      "talk to human",
      "speak to someone",
      "talk to a person",
      "sales team",
      "book consultation",
      "schedule a call",
    ],
    keywords: ["consult", "meeting", "call", "appointment", "human", "live", "session", "book", "consultation"],
    reply:
      "Happy to set that up — here's our booking link to grab a time that works best for you.",
    cta: { href: CALENDLY_URL, label: "Book a consultation" },
  },
  {
    id: "what-is-consultation",
    triggers: ["what is a reputation consultation", "what is a consultation"],
    keywords: ["consultation", "roadmap", "expert", "session"],
    reply:
      "It's a conversation where we look at your situation together and tell you honestly what's going on and what to do about it — no guesswork. It's a great place to start if you're not sure exactly what you need.",
    cta: { href: CALENDLY_URL, label: "Book a consultation" },
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
      "Someone who does this full-time, not as a side offering. Ask whether their methods are safe and won't get flagged by Google, ask for real examples similar to your situation, and be wary of anyone promising overnight results or guaranteed rankings — that usually means shortcuts that backfire later.",
    cta: { href: "/resources/faqs", label: "Read guides" },
  },
  {
    id: "suppress-one-or-two",
    triggers: ["is it possible to suppress just one or two negative results", "suppress one link", "suppress two links"],
    keywords: ["isolated", "single", "one", "two", "domain authority"],
    reply:
      "Yes, and that's often easier than a bigger cleanup. If it's just one or two specific links causing trouble, we can usually make real progress within a few months, depending on how established that content is.",
  },
  {
    id: "removal-vs-suppression",
    triggers: ["what is the difference between removal and suppression", "removal vs suppression", "difference between removal and suppression"],
    keywords: ["difference", "versus", "vs", "comparison", "deletes"],
    reply:
      "Removal means the bad content is gone for good, deleted at the source. Suppression means it's still out there, but buried so far down the search results that almost nobody sees it. We always try removal first when it's realistic, and use suppression to get results either way.",
  },
  {
    id: "how-quickly-begin",
    triggers: ["how quickly can suppression begin", "how fast does suppression start"],
    keywords: ["begin", "start", "weeks", "engagement"],
    reply:
      "We can get started within days. You'll typically see the first pieces go live within two weeks, and real movement in the rankings begins around the two-month mark.",
  },
  {
    id: "personal-branding-vs-orm",
    triggers: ["what is the difference between personal branding and ORM", "personal branding vs ORM"],
    keywords: ["difference", "branding", "orm", "personal", "reputation"],
    reply:
      "ORM is about what shows up when people search your name. Personal branding is about what that says about you once they click through — whether it makes you look sharp and credible, or just... there. The two work best together.",
  },
];

/** Short prompts shown as chips in the chat panel. */
export const R360_CHATBOT_QUICK_PROMPTS = [
  "Scan a person's reputation",
  "How does this work?",
  "Bad reviews on Google",
  "How long until results?",
  "Book a consultation",
];

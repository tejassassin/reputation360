import { li, p, ul } from "./faqBlocks.js";

export const WHAT_CAN_BE_DONE_FAQ_ITEMS = [
  {
    id: "negative-content-removed",
    question: "Can negative content be completely removed from the internet?",
    blocks: [
      p("In some cases, yes. In many cases, no - but it can be made effectively invisible."),
      ul([
        "Content that violates platform policies, constitutes defamation, or breaches privacy law can often be removed.",
        "Content that is simply negative, embarrassing, or inconvenient is rarely removable through standard channels.",
        "Where removal is not possible, suppression pushes the content far enough down in results that the vast majority of searchers never see it.",
      ]),
      p(
        "We pursue removal in every case where it is realistic, and apply suppression in parallel so your results improve regardless of the removal outcome.",
      ),
    ],
  },
  {
    id: "news-article-removed",
    question: "Can a negative news article be removed from Google?",
    blocks: [
      p(
        "This is one of the harder challenges in reputation management, and we will always be honest with you about it.",
      ),
      ul([
        "Most reputable publishers will not take down or edit accurate reporting.",
        "Google's policies generally protect journalistic content from de-indexing requests.",
        "Legal avenues like defamation claims exist but are costly and rarely quick.",
        "In practice, suppression is the primary tool - we build high-authority content that takes the positions above and around the article.",
      ]),
      p(
        "The article may remain, but it stops being the first, or only, thing people find.",
      ),
    ],
  },
  {
    id: "negative-reviews-removed",
    question: "Can negative reviews be removed from Google?",
    blocks: [
      p("Google will remove reviews that clearly violate its content policies. This includes:"),
      ul([
        "Spam and fake reviews",
        "Offensive or hateful language",
        "Reviews that are clearly not about a genuine customer experience",
      ]),
      p("However, negative reviews that reflect a real experience, even if you disagree with them, are generally not removable. For those:"),
      ul([
        "A professional response strategy helps manage the narrative publicly.",
        "A proactive campaign to generate authentic positive reviews from real customers dilutes the impact over time.",
      ]),
      p(
        "We do not create fake reviews. Building genuine social proof is the only approach that holds up long-term.",
      ),
    ],
  },
  {
    id: "social-media-suppressed",
    question: "Can social media posts or profiles be suppressed?",
    blocks: [
      p("Yes. Social media profiles and posts can be both suppressed and, in some cases, removed."),
      ul([
        "Platform reporting can lead to removal where content violates community guidelines.",
        "Old or inactive social profiles can be optimised to rank positively, turning a liability into an asset.",
        "Suppression works by building content that outranks the social content in question.",
      ]),
      p(
        "The right approach depends on what the content is, which platform it lives on, and whether removal is realistic.",
      ),
    ],
  },
  {
    id: "ripoff-glassdoor-reddit",
    question:
      "What can be done about negative content on sites like Ripoff Report, Glassdoor, or Reddit?",
    blocks: [
      p("Each platform works differently, and we approach each one accordingly."),
      ul([
        li(
          "Ripoff Report",
          " has a firm stance against removal, but that does not mean the content has to stay on page one of Google. Suppression is the most effective route here.",
        ),
        li(
          "Glassdoor",
          " may remove content that violates its community guidelines through a formal review process.",
        ),
        li(
          "Reddit",
          " posts can sometimes be actioned by moderators or through legal processes where defamation applies.",
        ),
      ]),
      p(
        "In most cases, a suppression strategy running alongside any direct removal attempts is the most reliable way to neutralise the impact.",
      ),
    ],
  },
  {
    id: "mugshot-removed",
    question: "Can mugshot websites be removed from Google?",
    blocks: [
      p(
        "Many states have passed legislation requiring these sites to remove images upon request, particularly where charges were not pursued or a conviction did not follow.",
      ),
      ul([
        "We assess the legal landscape in your jurisdiction and pursue removal requests where the law supports it.",
        "Suppression is applied in parallel so your search results improve while any removal process runs its course.",
        "Even where full removal is not possible, we can significantly reduce the visibility of these results.",
      ]),
      p(
        "We assess each case individually to identify the most practical route for your specific situation.",
      ),
    ],
  },
  {
    id: "court-records",
    question: "Can court records or legal information be removed from Google?",
    blocks: [
      p(
        "Public court records are, by definition, public. In most jurisdictions, neither Google nor the court system is legally required to remove them simply because they are damaging.",
      ),
      ul([
        "Some expungement or record-sealing processes exist at the state level and, if granted, may support a de-indexing request.",
        "Outside of that, suppression is the most practical strategy.",
        "We build a professional digital presence that dominates search results under your name, so the record is not the first or only thing people find.",
      ]),
    ],
  },
  {
    id: "finra-sec-records",
    question: "Can FINRA or SEC records be removed from Google?",
    blocks: [
      p(
        "FINRA BrokerCheck and SEC EDGAR records are public regulatory databases and they are not removable. These exist by legal requirement.",
      ),
      ul([
        "Neither Google nor Reputation360 can have mandatory regulatory disclosures taken down.",
        "What we can do is build a strong enough presence of professional, credible content around the disclosure so it is not the first or only thing people see.",
        "For financial professionals, this typically means thought leadership articles, LinkedIn authority, professional profiles, and press in reputable industry outlets.",
      ]),
      p(
        "We cannot erase the record, but we can make sure it does not dominate the conversation.",
      ),
    ],
  },
  {
    id: "high-profile-case",
    question: "Can you suppress coverage from a high-profile case?",
    blocks: [
      p("Yes, though it takes more work and more time than a typical case."),
      ul([
        "When coverage comes from major publications, those pages carry significant authority in Google's eyes, which means the content we build to outrank them has to be equally authoritative.",
        "We focus on assets Google genuinely respects: thought leadership pieces, legal publications, industry recognition, high-domain profiles, and press in reputable outlets.",
        "Over time, these assets climb above the case coverage in search results.",
      ]),
      p(
        "We have worked on cases with significant media footprints. The same principles apply, the strategy just needs to be more concentrated and sustained.",
      ),
    ],
  },
  {
    id: "google-compliant",
    question: "Is what you do compliant with Google's guidelines?",
    blocks: [
      p("Yes, completely. Every method we use is fully compliant with Google's webmaster guidelines."),
      ul([
        "We build real content on legitimate platforms - nothing fabricated or artificially inflated.",
        "We do not use link schemes, keyword stuffing, cloaking, or any other practice that violates Google's policies.",
        "Our approach is designed to be durable. Tactics that cut corners may show short-term movement but collapse when Google updates its algorithms.",
      ]),
      p("We build things to last, not to game a system."),
    ],
  },
  {
    id: "ethical-suppression",
    question: "Is it ethical to suppress negative search results?",
    blocks: [
      p("Yes, when done honestly. Here is how we think about it:"),
      ul([
        "Everyone deserves a fair representation online, not just the loudest or most dramatic version of their story.",
        "A single result, however old or one-sided, should not permanently define a person's professional or personal life.",
        "We do not fabricate content, suppress true and current information that the public has a legitimate interest in, or help anyone evade accountability for serious wrongdoing.",
      ]),
      p(
        "Our work is about fairness, not deception. We give every situation careful consideration before taking it on.",
      ),
    ],
  },
  {
    id: "white-hat",
    question: "Does Reputation360 use ethical, white-hat methods?",
    blocks: [
      p("Yes, always. This is not optional for us."),
      ul([
        "We do not create fake reviews, fabricate content, or use methods that could expose our clients to further risk.",
        "We do not engage in black-hat SEO practices that violate Google's guidelines.",
        "Everything we build is real: genuine publications, authoritative profiles, legitimate content on high-quality platforms.",
      ]),
      p(
        "Black-hat tactics can be reversed by algorithm updates and may create new legal exposure. Our approach is built to last.",
      ),
    ],
  },
];

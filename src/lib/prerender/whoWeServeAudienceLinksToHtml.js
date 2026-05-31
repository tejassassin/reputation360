import { BLOG_INDEX_PATH } from "../../constants/blogPaths.js";
import { AUDIENCE_PATH } from "../../constants/whoWeServePaths.js";
import { getCaseStudyBySlug } from "../../data/caseStudies/index.js";
import { getBlogCardMeta } from "../blogCardMeta.js";
import { getRouteSeoMeta } from "../../data/routeSeoByPath.js";
import { WHO_WE_SERVE_FURTHER_READING } from "../../data/whoWeServeFurtherReading.js";
import { WHO_WE_SERVE_SEE_IT_IN_ACTION } from "../../data/whoWeServeSeeItInAction.js";
import { caseStudyListTeaser } from "../../utils/caseStudyTeaser.js";
import { escapeHtml, escapeHtmlAttr } from "./html.js";
import {
  PERSONAL_REPUTATION_FAQ_ITEMS,
  FINANCIAL_ADVISOR_FAQ_ITEMS,
  EXECUTIVE_FAQ_ITEMS,
  DOCTOR_FAQ_ITEMS,
  LAWYER_FAQ_ITEMS,
  JOB_SEEKER_FAQ_ITEMS,
  BUSINESS_FAQ_ITEMS,
  REAL_ESTATE_FAQ_ITEMS,
} from "../../data/whoWeServeAudienceFaqs.js";

/** @type {readonly string[]} */
export const WHO_WE_SERVE_AUDIENCE_PATHS = Object.freeze(Object.values(AUDIENCE_PATH));

/** @param {string} pathname */
export function isWhoWeServeAudiencePath(pathname) {
  return WHO_WE_SERVE_AUDIENCE_PATHS.includes(pathname);
}

/** @param {string} title */
function pageTitleToH1(title) {
  return title.replace(/\s*\|\s*Reputation360\s*$/i, "").trim();
}

/** @param {string} href */
function slugFromCaseStudyHref(href) {
  const match = href.match(/^\/case-studies\/([^/]+)$/);
  return match ? decodeURIComponent(match[1]) : null;
}

/**
 * @param {string} href
 */
function getCaseStudyTeaser(href) {
  const slug = slugFromCaseStudyHref(href);
  if (!slug) return null;
  const study = getCaseStudyBySlug(slug);
  if (!study) return null;
  return (
    study.summary?.trim() ||
    caseStudyListTeaser(study) ||
    "See how we rebuilt search results and protected professional credibility."
  );
}

/**
 * @param {string} audiencePath
 */
function seeItInActionSectionHtml(audiencePath) {
  const config = WHO_WE_SERVE_SEE_IT_IN_ACTION[audiencePath];
  if (!config) return "";

  const cards = config.links
    .map((link) => {
      const teaser = getCaseStudyTeaser(link.href);
      return `<li>
  <article>
    <p><span>Case study</span></p>
    <h3><a href="${escapeHtmlAttr(link.href)}">${escapeHtml(link.label)}</a></h3>
    <p>${escapeHtml(teaser)}</p>
    <p><a href="${escapeHtmlAttr(link.href)}">Read full story</a></p>
  </article>
</li>`;
    })
    .join("\n");

  return `<section class="case-study-links" aria-labelledby="see-it-in-action-heading">
  <h2 id="see-it-in-action-heading">See It In Action</h2>
  <p>${escapeHtml(config.intro)}</p>
  <p><a href="/case-studies">All case studies</a></p>
  <ul>
  ${cards}
  </ul>
</section>`;
}

/**
 * @param {string} audiencePath
 */
function furtherReadingSectionHtml(audiencePath) {
  const config = WHO_WE_SERVE_FURTHER_READING[audiencePath];
  if (!config) return "";

  const cards = config.links
    .map((link) => {
      const meta = getBlogCardMeta(link.href);
      const excerpt = meta?.excerpt
        ? `<p>${escapeHtml(meta.excerpt)}</p>`
        : "";
      const readTime = meta?.readTime
        ? `<p>${escapeHtml(meta.readTime)} read</p>`
        : "";
      return `<li>
  <article>
    <h3><a href="${escapeHtmlAttr(link.href)}">${escapeHtml(link.label)}</a></h3>
    ${excerpt}
    ${readTime}
    <p><a href="${escapeHtmlAttr(link.href)}">Read article</a></p>
  </article>
</li>`;
    })
    .join("\n");

  return `<section class="further-reading" aria-labelledby="further-reading-heading">
  <h2 id="further-reading-heading">Related Readings</h2>
  <p>${escapeHtml(config.intro)}</p>
  <p><a href="${escapeHtmlAttr(BLOG_INDEX_PATH)}">All articles</a></p>
  <ul>
  ${cards}
  </ul>
</section>`;
}

// Custom data mapping for audience specific pre-rendered content
const AUDIENCE_STATIC_CONTENT = {
  [AUDIENCE_PATH.individuals]: {
    heroSub: "You have a life, a career, and relationships. Don't let an outdated, negative, or irrelevant search result speak for you before you can.",
    valueProps: [
      { title: "Control Your Narrative", text: "We help individuals restore a positive, accurate digital footprint." },
      { title: "Discretion & Confidentiality", text: "Your personal case is protected under strict confidentiality protocols." },
      { title: "Permanent Organic Authority", text: "We build custom profiles and websites designed to permanently outrank negative links." }
    ],
    risks: "Old news articles, court listings, false forum entries, social media screenshots, or revenge pages.",
    steps: [
      "Step 1: Complete Personal Search Audit — We catalog every result for your name and search combinations.",
      "Step 2: Strategy & Priority Setting — We identify de-indexing candidates and suppression assets.",
      "Step 3: Direct Removal Pursuit — We contact publishers and submit platform de-indexing requests.",
      "Step 4: Professional Presence Building — We create and optimize high-authority personal profiles.",
      "Step 5: Resolution & Defense — We monitor positions to ensure negative content remains displaced."
    ],
    faqs: PERSONAL_REPUTATION_FAQ_ITEMS
  },
  [AUDIENCE_PATH.financialAdvisors]: {
    heroSub: "Before clients trust you with their wealth, they trust what Google says about you. Make sure the first page reflects your professionalism and integrity.",
    valueProps: [
      { title: "Vetting Protection", text: "Ensure prospective clients researching your credentials find a clean, professional profile." },
      { title: "Compliance-Safe Authority", text: "We construct and publish thought leadership that is fully compliant with regulatory standards." },
      { title: "BrokerCheck Placement", text: "Proactively build strong assets surrounding FINRA records so they do not dominate search results." }
    ],
    risks: "FINRA BrokerCheck disclosures, SEC EDGAR records, client disputes, negative reviews, or business press.",
    steps: [
      "Step 1: Regulatory Search Audit — We run the exact due-diligence searches your clients and prospects run.",
      "Step 2: Suppression Strategy Design — We draft a compliant blueprint to outrank regulatory disclosures.",
      "Step 3: Presence Building — We optimize LinkedIn, industry directories, and publish expert commentary.",
      "Step 4: Displacement — Positive assets climb, systematically pushing negative links beyond page one.",
      "Step 5: Ongoing Maintenance — We monitor and preserve the authority of the positive search presence."
    ],
    faqs: FINANCIAL_ADVISOR_FAQ_ITEMS
  },
  [AUDIENCE_PATH.executives]: {
    heroSub: "Board members, investors, and partners judge your leadership capability by your digital footprint. Rebuild page one to reflect your true professional legacy.",
    valueProps: [
      { title: "Crisis Management", text: "Dampen negative company press or past litigation fallout with rapid suppression." },
      { title: "Thought Leadership Hubs", text: "We place your articles and opinions in top business journals and industry outlets." },
      { title: "Discreet Implementation", text: "Every campaign is implemented in total secrecy to safeguard your status." }
    ],
    risks: "Litigation records, crisis news coverage, former employee criticism, product failures, or corporate disputes.",
    steps: [
      "Step 1: Executive Footprint Audit — We analyze names, partners, company associations, and media mentions.",
      "Step 2: Strategy & Priority — We establish a clear outline of high-priority removals and suppressions.",
      "Step 3: Executive Presence Architecture — High-authority profiles, board-level LinkedIn optimization, and speaking hubs.",
      "Step 4: Displacement — Strategic publications climb to outrank business news and court transcripts.",
      "Step 5: Long-term Maintenance — Ongoing tracking to secure the executive's digital legacy."
    ],
    faqs: EXECUTIVE_FAQ_ITEMS
  },
  [AUDIENCE_PATH.doctors]: {
    heroSub: "Patients check your reviews before booking an appointment. Protect your clinical credibility and ensure Google reflects your dedication and expertise.",
    valueProps: [
      { title: "Patient Referral Protection", text: "Stop referred patients from walking away due to individual negative reviews." },
      { title: "Directory Dominance", text: "Optimize Healthgrades, Vitals, and WebMD profiles to rank prominently." },
      { title: "HIPAA-Compliant Strategy", text: "Displace critical ratings without exposing patient data or clinical history." }
    ],
    risks: "RateMDs complaints, Vitals, Healthgrades ratings, legal filings, malpractice listings, or local competitors.",
    steps: [
      "Step 1: Clinical Reputation Audit — We map every directory, malpractice database, and review portal.",
      "Step 2: Directory Optimization — We claim and fully build out profiles on major patient aggregators.",
      "Step 3: Thought Leadership — Clinical articles, medical advice guides, and Q&As written to rank.",
      "Step 4: Patient Review Dilution — Strategies to generate genuine patient feedback in compliance with HIPAA.",
      "Step 5: Search Resolution — Negative review sites are pushed to page two and beyond."
    ],
    faqs: DOCTOR_FAQ_ITEMS
  },
  [AUDIENCE_PATH.lawyers]: {
    heroSub: "Your courtroom record speaks inside the courtroom. We ensure Google speaks to your integrity, expertise, and authority outside of it.",
    valueProps: [
      { title: "Avvo & Directory Dominance", text: "Fully optimize Avvo, FindLaw, and Martindale-Hubbell profiles to rank prominently." },
      { title: "High-Profile Case Strategy", text: "Durable suppression of high-authority legal news, case filings, or opposing party claims." },
      { title: "Discretion Guaranteed", text: "Complete confidentiality during every litigation or professional conduct dispute campaign." }
    ],
    risks: "Bar complaints, regulatory proceedings, court judgments, adversarial news coverage (Above the Law), or Avvo reviews.",
    steps: [
      "Step 1: Legal Search Audit — We run search terms covering name, firm, location, and past cases.",
      "Step 2: Directory Claiming & Optimization — Claiming and building Avvo, FindLaw, and key legal aggregators.",
      "Step 3: Thought Leadership — Publishing authoritative case analysis and legal columns under your name.",
      "Step 4: Ranking Displacement — Forcing news articles and court records down via premium domain links.",
      "Step 5: Ongoing Defense — Continuous monitoring to handle new filings or client reviews early."
    ],
    faqs: LAWYER_FAQ_ITEMS
  },
  [AUDIENCE_PATH.realEstate]: {
    heroSub: "Buyers and sellers check your name before signing a listing agreement. Make sure your first page reflects your sales record, trust, and local market dominance.",
    valueProps: [
      { title: "Commission Protection", text: "Defend your commission rates by projecting a high-authority, premium brand footprint." },
      { title: "Zillow & Yelp Optimization", text: "Claim, optimize, and rank key directory profiles to overshadow reviews.",
        Icon: "Check"
      },
      { title: "Local Market Authority", text: "Publish market guides and reports that build trust before client contact." }
    ],
    risks: "Yelp complaints, Zillow score drops, inactive profiles, outdated listings, or competitor attacks.",
    steps: [
      "Step 1: Real Estate Search Audit — We audit name, agency, city, and common search phrases.",
      "Step 2: Profile & Directory Optimization — Claiming and building Zillow, Realtor.com, Yelp, and Google Business.",
      "Step 3: Local Authority Content — Local market analysis, buying guides, and neighborhood reports.",
      "Step 4: Displacement — Pushing inactive profiles and portal complaints deep off the first page of Google.",
      "Step 5: Local Defense — Active tracking of real estate search phrases to keep referral loops clean."
    ],
    faqs: REAL_ESTATE_FAQ_ITEMS
  },
  [AUDIENCE_PATH.jobSeekers]: {
    heroSub: "Recruiters search your name before offering an interview. Don't let an old mistake, social media post, or outdated headline block your next career step.",
    valueProps: [
      { title: "Recruiter Vetting Shield", text: "Clean up first-page search records before HR run background checks." },
      { title: "LinkedIn Ranking Optimization", text: "Optimize LinkedIn headline, keywords, and connections to rank first.",
        Icon: "Check"
      },
      { title: "Portfolio Presence", text: "Create personal websites or resume hubs that control what employers read." }
    ],
    risks: "Old social media posts, outdated local news stories, former employer conflicts, or Glassdoor reviews.",
    steps: [
      "Step 1: Candidate Footprint Audit — We search your name with previous city, employer, and industry keywords.",
      "Step 2: Priority Strategy Design — We focus on fast-displacement profiles to meet urgent hiring windows.",
      "Step 3: Professional Presence — Optimizing LinkedIn and constructing personal bio portals.",
      "Step 4: Displacement — Moving personal controversies or old news beyond visible search pages.",
      "Step 5: Hiring Complete — Positive assets remain live to protect future career progressions."
    ],
    faqs: JOB_SEEKER_FAQ_ITEMS
  },
  [AUDIENCE_PATH.businesses]: {
    heroSub: "Prospects search your company name before buying. Build a clean, authoritative search presence that protects your pipeline and boosts customer acquisition.",
    valueProps: [
      { title: "Pipeline Protection", text: "Prevent prospective B2B or B2C customers from abandoning their carts due to negative results." },
      { title: "Review Board Suppression", text: "Displace negative forum threads, Glassdoor complaints, or BBB boards." },
      { title: "Brand Defense", text: "Counter competitor-sponsored campaigns ranking for your branded search keywords." }
    ],
    risks: "Complaintsboard threads, Ripoff Report listings, Glassdoor ratings, viral controversies, or negative news reviews.",
    steps: [
      "Step 1: Branded Search Audit — Mapping keywords for company name, product line, and founders.",
      "Step 2: Brand Strategy Blueprint — Designing a removal and authority building program for corporate terms.",
      "Step 3: Media & Authority Publishing — Press releases, executive profiling, and employer brand optimization.",
      "Step 4: Direct Review Cleanup — Reporting reviews that violate terms of service, and diluting overall ratings.",
      "Step 5: Brand War Room — Real-time tracking and position shields to block incoming competitor threats."
    ],
    faqs: BUSINESS_FAQ_ITEMS
  }
};

/**
 * Static HTML for audience pages: crawlable case study and blog links.
 * @param {string} pathname
 * @returns {string | null}
 * @description Injects the full semantic outline including heros, value propositions, specific risk sources, processes, and FAQs into the pre-rendered HTML.
 */
export function whoWeServeAudiencePageToHtml(pathname) {
  if (!isWhoWeServeAudiencePath(pathname)) return null;

  const seo = getRouteSeoMeta(pathname);
  const title = seo?.title ? pageTitleToH1(seo.title) : "Who We Serve";
  
  const content = AUDIENCE_STATIC_CONTENT[pathname];
  if (!content) return null;

  const valuePropsHtml = content.valueProps.map(
    (vp) => `
      <li>
        <h3>${escapeHtml(vp.title)}</h3>
        <p>${escapeHtml(vp.text)}</p>
      </li>`
  ).join("\n");

  const stepsHtml = content.steps.map(
    (step) => `<li>${escapeHtml(step)}</li>`
  ).join("\n");

  const faqHtml = content.faqs.map(
    (item) => `
      <div class="faq-item">
        <h3>${escapeHtml(item.question)}</h3>
        <p>${escapeHtml(item.answer)}</p>
      </div>`
  ).join("\n");

  const seeIt = seeItInActionSectionHtml(pathname);
  const further = furtherReadingSectionHtml(pathname);

  return `
    <header class="audience-hero">
      <h1>Before a client retains you, they search you. What do they find?</h1>
      <h2>${escapeHtml(title)}</h2>
      <p class="hero-intro">Your reputation is being read before your proposal is.</p>
      <p class="hero-description">${escapeHtml(content.heroSub)}</p>
    </header>

    <main>
      <section class="moment-of-truth">
        <h2>The Moment of Truth: Every Search Decides intake</h2>
        <p>A prospect is deciding between three options. The credentials are identical. The fees are comparable. So they search each name on Google. In under sixty seconds, they form a judgment. Not based on track record, but entirely on what Google decided to show them. One result is clean. Two are not. The client goes to the first. The other two never find out—but it keeps happening.</p>
      </section>

      <section class="value-propositions">
        <h2>Why Partner with Reputation360?</h2>
        <ul>
          ${valuePropsHtml}
        </ul>
      </section>

      <section class="specific-risks">
        <h2>The Problem in Your Field</h2>
        <p>Where damaging content typically appears and causes harm: ${escapeHtml(content.risks)}</p>
        <p>Any one of these, sitting on page one of Google for your name, is silently redirecting clients, patients, or employers away from you every single day.</p>
      </section>

      <section class="what-we-do-process">
        <h2>What Reputation360 Does (Our 5-Step Process)</h2>
        <ol>
          ${stepsHtml}
        </ol>
      </section>

      <section class="timeline-insights">
        <h2>Realistic Timeline & Market Insight</h2>
        <p><strong>98% of users research your name online before contact.</strong> Almost 1 in 3 referred clients walk away solely based on what they find online. A typical campaign runs from 6 to 12 months, with early ranking improvements visible within 90 days.</p>
      </section>

      ${seeIt}

      ${further}

      <section class="faqs">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-list">
          ${faqHtml}
        </div>
      </section>
    </main>
  `;
}

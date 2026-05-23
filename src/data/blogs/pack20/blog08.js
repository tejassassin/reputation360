import { blogPostPath } from "../../../constants/blogPaths.js";
import { PACK20_AUTHOR, PACK20_DATE, pack20Image } from "./shared.js";

export const SLUG = "crisis-management-reputation-recovery-reputation360-playbook";
export const PATH = blogPostPath(SLUG);

const TOC = [
  { id: "first-48-hours", label: "01. The first 48 hours" },
  { id: "containment", label: "02. Containment (days 1-14)" },
  { id: "stabilization", label: "03. Stabilization (weeks 2-8)" },
  { id: "recovery-resilience", label: "04. Recovery and long-term resilience" },
];

const NAV = [
  { id: "intro", label: "Introduction" },
  ...TOC,
  { id: "start", label: "Next step" },
  { id: "faq", label: "FAQ" },
  { id: "related", label: "Related reading" },
];

export const article = {
  slug: SLUG,
  path: PATH,
  listing: {
    id: "pack20-crisis-playbook",
    slug: SLUG,
    filter: "Corporate",
    category: "Crisis Management",
    title: "Crisis Management and Reputation Recovery: The Reputation360 Playbook",
    excerpt:
      "When a crisis hits, the first 48 hours set the trajectory. A phased playbook for containment, stabilization, recovery, and resilience.",
    date: PACK20_DATE,
    author: PACK20_AUTHOR,
    readTime: "15 minutes",
    image: pack20Image("crisis"),
    imageAlt: "Team planning crisis response at a conference table",
  },
  seoTitle:
    "Crisis Management and Reputation Recovery Playbook | Reputation360",
  metaDescription:
    "When a reputation crisis hits, the first 48 hours matter most. Reputation360's playbook shows exactly what to do - and what not to do.",
  hero: {
    badge: "Crisis Playbook",
    title: "Crisis Management and Reputation Recovery",
    lead:
      "A major story, viral post, or public dispute can change your search results within hours. Decisions in the first two days have outsized impact on whether you contain damage or let negative URLs accumulate authority unchecked.",
    meta: [
      { value: "48h", label: "Critical window" },
      { value: "4", label: "Playbook phases" },
      { value: "24-48h", label: "Crisis start time" },
    ],
  },
  toc: TOC,
  nav: NAV,
  scrollSpyOrder: NAV.map((n) => n.id),
  sections: [
    {
      id: "first-48-hours",
      number: "01",
      title: "The first 48 hours",
      blocks: [
        {
          type: "p",
          text: "Inaction lets negative content collect links and engagement while positive assets stay static. Document page-one and page-two results with timestamps, identify the primary source, update owned profiles, and begin specialist-led suppression planning immediately.",
        },
        {
          type: "cards",
          items: [
            {
              title: "Do",
              body: "Run a full search audit, activate existing profiles, issue a factual statement when appropriate, and start positive asset production.",
            },
            {
              title: "Do not",
              body: "Argue publicly in forums, send uninformed legal threats that become news, delete all social accounts, or issue context-free apologies that become new indexed content.",
            },
          ],
        },
      ],
    },
    {
      id: "containment",
      number: "02",
      title: "Containment (days 1-14)",
      blocks: [
        {
          type: "p",
          text: "Limit spread and seed counter-assets. Wire-service press releases, updated third-party profiles, and long-form narrative content begin claiming search real estate even before they reach top positions.",
        },
        {
          type: "p",
          text: "Align communications: what to say publicly, what to tell stakeholders privately, and how to document events for potential legal needs without letting legal delay all search action.",
        },
        {
          type: "lead",
          label: "Case snapshot",
          text: "A US firm engaged on day three after a partner's blog post hit positions 3-4. Within 48 hours of engagement a wire release indexed; by week six the post sat at position 7; by month four it was off page one - displaced, not deleted.",
        },
      ],
    },
    {
      id: "stabilization",
      number: "03",
      title: "Stabilization (weeks 2-8)",
      blocks: [
        {
          type: "p",
          text: "Monitor daily, respond to new indexed negatives with targeted tactics, and keep building where harm ranks strongest. Early positive URLs typically begin moving at four to six weeks with clear weekly reporting.",
        },
        {
          type: "keyBox",
          variant: "tip",
          title: "Do not ease off early",
          text: "Slowing content velocity when rankings first improve lets negative URLs stabilize. Maintain output until page-one composition is durable.",
        },
      ],
    },
    {
      id: "recovery-resilience",
      number: "04",
      title: "Recovery and long-term resilience",
      blocks: [
        {
          type: "p",
          text: "Recovery is the climb from stabilization to durable page-one control. Local or single-article crises often improve in 90-120 days; national or viral events may need 8-12 months with visible milestones throughout.",
        },
        {
          type: "p",
          text: "Post-crisis maintenance - alerts, asset refreshes, quarterly audits, rapid-response protocols - turns emergency infrastructure into ongoing protection. Many clients end with stronger visibility than before the event.",
        },
        {
          type: "steps",
          pickerKey: "crisis-phases-summary",
          steps: [
            {
              n: 1,
              title: "Contain",
              body: "Days 1-14: press, profiles, narrative content, link building begins.",
            },
            {
              n: 2,
              title: "Stabilize",
              body: "Weeks 2-8: daily monitoring, counter each new negative, sustain velocity.",
            },
            {
              n: 3,
              title: "Recover",
              body: "Months 2-6: negative URLs lose relative authority as positive corpus grows.",
            },
            {
              n: 4,
              title: "Resilience",
              body: "Month 8+: monitoring, refreshes, and protocols for the next event.",
            },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      id: "faq-1",
      q: "How quickly can crisis work begin?",
      a: "Crisis engagements can start strategy and production within 24-48 hours; first indexed assets often go live within about a week.",
    },
    {
      id: "faq-2",
      q: "Should we respond publicly to negative content?",
      a: "Case-specific. Sometimes a calm factual response becomes a positive indexed asset; sometimes public engagement amplifies the story. Plan before posting.",
    },
    {
      id: "faq-3",
      q: "What if allegations are partially true?",
      a: "Focus on full context in search results, not false narratives. Engagements address complicated facts; they do not promote ongoing harmful behavior.",
    },
  ],
  cta: {
    title: "Treat the first week as decisive",
    lead:
      "If active crisis content is indexing today, parallel search and communications planning should start now - not after legal or PR cycles finish.",
  },
  relatedSlugs: [
    "how-to-suppress-negative-search-results-reputation360-framework",
    "negative-links-cost-jobs-deals-real-cases-reputation360",
    "removal-vs-suppression-which-actually-works-reputation360",
  ],
};

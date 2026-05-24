import { blogPostPath } from "../../../constants/blogPaths.js";
import { PACK20_AUTHOR, PACK20_DATE, pack20Image } from "./shared.js";

export const SLUG = "crisis-management-reputation-recovery-reputation360-playbook";
export const PATH = blogPostPath(SLUG);

const SUPPRESS_FRAMEWORK_PATH = blogPostPath(
  "how-to-suppress-negative-search-results-reputation360-framework",
);

const NEGATIVE_LINKS_CASES_PATH = blogPostPath(
  "negative-links-cost-jobs-deals-real-cases-reputation360",
);

const REMOVAL_VS_SUPPRESSION_PATH = blogPostPath(
  "removal-vs-suppression-which-actually-works-reputation360",
);

const TOC = [
  { id: "first-48-hours", label: "01. The first 48 hours" },
  { id: "containment", label: "02. Containment (days 1-14)" },
  { id: "stabilization", label: "03. Stabilization (weeks 2-8)" },
  { id: "recovery", label: "04. Recovery (months 2-6)" },
  { id: "resilience", label: "05. Long-term resilience" },
  { id: "case-study", label: "06. Real crisis recovery case study" },
];

const NAV = [
  { id: "intro", label: "Introduction" },
  { id: "first-48-hours", label: "First 48 hours" },
  { id: "containment", label: "Containment" },
  { id: "stabilization", label: "Stabilization" },
  { id: "recovery", label: "Recovery" },
  { id: "resilience", label: "Resilience" },
  { id: "case-study", label: "Case study" },
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
    filter: "Career, Crisis & Case Studies",
    category: "Career, Crisis & Case Studies",
    title: "Crisis Management and Reputation Recovery: The Reputation360 Playbook",
    excerpt:
      "When a crisis hits, the first 48 hours set the trajectory. A phased playbook for containment, stabilization, recovery, and resilience.",
    date: PACK20_DATE,
    author: PACK20_AUTHOR,
    readTime: "18 minutes",
    image: pack20Image("crisisTeam"),
    imageAlt: "Team planning crisis response at a conference table",
  },
  seoTitle:
    "Crisis Management and Reputation Recovery Playbook | Reputation360",
  metaDescription:
    "When a reputation crisis hits, the first 48 hours matter most. Reputation360's playbook shows exactly what to do - and what not to do.",
  hero: {
    badge: "Crisis Playbook",
    title:
      "Crisis Management and Reputation Recovery: The Reputation360 Playbook",
    lead:
      "A major story, viral post, or public dispute can change your search results within hours. Decisions in the first two days have outsized impact on whether you contain damage or let negative URLs accumulate authority unchecked.",
    meta: [
      { value: "97%", label: "Success rate" },
      { value: "48h", label: "Critical window" },
      { value: "4", label: "Playbook phases" },
    ],
  },
  introBlocks: [
    {
      type: "p",
      text: "A reputation crisis does not give you time to think. One morning, a major outlet publishes an article about your company. A social media pile-on begins building. A former employee publishes a highly visible post. A business partner dispute goes public. Within hours, the search results for your name or your brand have changed - and the people who matter to your future are already finding it.",
    },
    {
      type: "p",
      text: "Reputation360 has worked with clients across the US, Canada, Australia, and Europe through every type of reputation crisis: executive misconduct allegations, product failures, financial controversies, employee disputes, coordinated online attacks, and more. With seven years of experience and a 97% success rate, we have built a repeatable playbook for crisis response and long-term recovery. This is it.",
    },
    {
      type: "lead",
      label: "What this playbook covers",
      text: "The first 48 hours, four phases from containment through resilience, and a real case study showing how a firm displaced a damaging industry blog post from page one in four months - without deletion.",
    },
  ],
  toc: TOC,
  tocTitle: "What You'll Learn",
  tocAriaLabel: "What you'll learn",
  nav: NAV,
  scrollSpyOrder: NAV.map((n) => n.id),
  sections: [
    {
      id: "first-48-hours",
      number: "01",
      title: "The first 48 hours: what you do now matters most",
      blocks: [
        {
          type: "p",
          text: "The decisions made in the first 48 hours of a reputation crisis have an outsized effect on outcomes. The most common mistake is inaction - hoping that the story will not gain traction, or waiting for legal counsel before doing anything. Delay in the digital environment is never neutral. It allows negative content to accumulate links, engagement, and authority while your positive assets remain static.",
          parts: [
            {
              text: "The decisions made in the first 48 hours of a reputation crisis have an outsized effect on outcomes",
              href: "https://blog.hubspot.com/service/crisis-communication-plan",
              external: true,
            },
            {
              text: ". The most common mistake is inaction - hoping that the story will not gain traction, or waiting for legal counsel before doing anything. Delay in the digital environment is never neutral. It allows negative content to accumulate links, engagement, and authority while your positive assets remain static.",
            },
          ],
        },
        {
          type: "doDont",
          do: {
            title: "Do in the first 48 hours",
            items: [
              {
                text: "Conduct a full search audit for your name, brand, and related keywords. Screenshot results with timestamps.",
                parts: [
                  {
                    text: "Conduct a full search audit for your name, brand, and related keywords",
                    href: "https://www.thereputation360.com/blog/monitoring-online-reputation-tools-tactics-reputation360",
                  },
                  { text: ". Screenshot results with timestamps." },
                ],
              },
              "Identify the primary source: news article, social post, review, or forum thread.",
              {
                text: "Activate existing positive assets - update LinkedIn, publish on owned channels, issue a factual statement when appropriate.",
                parts: [
                  { text: "Activate existing positive assets - " },
                  {
                    text: "update LinkedIn, publish on owned channels",
                    href: "https://www.thereputation360.com/blog/linkedin-profile-optimization-search-results-reputation360-checklist",
                  },
                  { text: ", issue a factual statement when appropriate." },
                ],
              },
              "Stay visible. Silence leaves the narrative entirely to negative content.",
              "Contact a reputation specialist immediately so suppression and positive content work can begin.",
            ],
          },
          dont: {
            title: "Do not in the first 48 hours",
            items: [
              "Respond aggressively or defensively in public forums - arguments amplify the story and create new indexed content.",
              "Send cease-and-desist letters without legal guidance; they can generate additional press coverage.",
              "Delete social accounts or go dark - that reads as admission and cedes search to negative URLs.",
              "Make sweeping public apologies without coordination; context-free apologies can be used against you.",
            ],
          },
        },
      ],
    },
    {
      id: "containment",
      number: "02",
      title: "Phase 1: Containment (days 1-14)",
      blocks: [
        {
          type: "p",
          text: "The first two weeks are about limiting the spread of the crisis and beginning to build counter-assets. At Reputation360, we begin positive content creation within the first week of engagement. The goal is not to get positive content to page one by day 14 - that is not realistic - but to ensure positive assets have maximum time to accumulate authority and begin the ranking climb.",
        },
        {
          type: "bullets",
          items: [
            "Issue a formal, factual press release through a major wire service to index quickly and claim search real estate.",
            {
              text: "Activate or update all third-party professional profiles tied to the individual or brand.",
              parts: [
                {
                  text: "Activate or update all third-party professional profiles",
                  href: "https://www.thereputation360.com/blog/building-positive-google-presence-profile-claiming-guide-reputation360",
                },
                { text: " tied to the individual or brand." },
              ],
            },
            {
              text: "Publish long-form content that establishes your version of the narrative in authoritative detail.",
              parts: [
                { text: "Publish " },
                {
                  text: "long-form content that establishes your version of the narrative",
                  href: "https://www.thereputation360.com/blog/rank-positive-content-above-negative-results-reputation360-strategy",
                },
                { text: " in authoritative detail." },
              ],
            },
            "Begin link-building for new assets so authority flows to properties you control.",
          ],
        },
        {
          type: "p",
          text: "We also work with clients on communication strategy during this phase: what to say publicly, what to tell stakeholders privately, and how to document the crisis for potential future legal proceedings - without letting legal delay all search action.",
        },
      ],
    },
    {
      id: "stabilization",
      number: "03",
      title: "Phase 2: Stabilization (weeks 2-8)",
      blocks: [
        {
          type: "p",
          text: "As initial noise begins to settle, the focus shifts to stabilizing the search landscape and ensuring new negative content is not accumulating. During this phase, Reputation360 monitors search results daily, responds to any new indexed negative content with targeted suppression tactics, and continues building positive assets where the negative content ranks most strongly to repair and recover negative brand mentions in search results.",
          parts: [
            {
              text: "As initial noise begins to settle, the focus shifts to stabilizing the search landscape and ensuring new negative content is not accumulating. During this phase, Reputation360 monitors search results daily, responds to any new indexed negative content with targeted suppression tactics, and continues building positive assets where the negative content ranks most strongly to ",
            },
            {
              text: "repair and recover negative brand mentions in search results",
              href: "https://www.searchenginejournal.com/ask-an-seo-repair-recover-negative-brand-mentions/538325/",
              external: true,
            },
            { text: "." },
          ],
        },
        {
          type: "p",
          text: "Stabilization is also when the first measurable search movements typically begin. At the four to six week mark, early-stage positive assets begin to index and show movement in search position tracking. We provide weekly reporting so clients can see the trajectory clearly - often the first time they have had visibility into what is driving their search results.",
        },
        {
          type: "keyBox",
          variant: "tip",
          title: "Do not ease off early",
          text: "Slowing content velocity when rankings first improve lets negative URLs stabilize rather than continuing to fall. Maintain output until page-one composition is durable.",
        },
      ],
    },
    {
      id: "recovery",
      number: "04",
      title: "Phase 3: Recovery (months 2-6)",
      blocks: [
        {
          type: "p",
          text: "Recovery is the sustained climb from stabilization to page-one transformation. This phase requires patience, consistency, and ongoing content creation. The negative content that drove the crisis does not disappear - it loses ranking authority relative to the growing body of positive content we are building.",
        },
        {
          type: "stats",
          items: [
            { value: "90-120d", label: "Smaller crises to page-one shift" },
            { value: "8-12 mo", label: "National or viral events" },
            { value: "Weekly", label: "Position reporting cadence" },
          ],
        },
        {
          type: "p",
          text: "Recovery milestones vary by crisis severity and the authority of negative content. Expect 90-120 days for smaller crises, 8-12 months for national or viral events, with meaningful improvement visible at each stage.",
          parts: [
            {
              text: "Recovery milestones vary by crisis severity and the authority of negative content. Expect ",
            },
            {
              text: "90-120 days for smaller crises, 8-12 months for national or viral events",
              href: "https://www.thereputation360.com/blog/how-long-does-it-take-to-fix-online-reputation",
            },
            { text: ", with meaningful improvement visible at each stage." },
          ],
        },
      ],
    },
    {
      id: "resilience",
      number: "05",
      title: "Phase 4: Long-term resilience (month 8 and beyond)",
      blocks: [
        {
          type: "p",
          text: "The goal of crisis management is not just to survive the immediate event - it is to emerge with a stronger, more resilient digital presence than before. Clients who invest in long-term maintenance after a crisis are significantly less vulnerable to future reputation events because they have built a substantial body of authoritative positive content that is difficult to displace.",
          parts: [
            {
              text: "The goal of crisis management is not just to survive the immediate event - it is to ",
            },
            {
              text: "emerge with a stronger, more resilient digital presence than before",
              href: "https://www.thereputation360.com/blog/own-your-first-page-control-google-results-reputation360",
            },
            {
              text: ". Clients who invest in long-term maintenance after a crisis are significantly less vulnerable to future reputation events because they have built a substantial body of authoritative positive content that is difficult to displace.",
            },
          ],
        },
        {
          type: "p",
          text: "Reputation360 offers ongoing reputation monitoring and maintenance programs that provide a continuous early-warning system for new negative content, regular positive asset updates and refreshes, quarterly search audits, and instant-response protocols if a new crisis event occurs.",
          parts: [
            { text: "Reputation360 offers " },
            {
              text: "ongoing reputation monitoring and maintenance programs",
              href: "https://www.thereputation360.com/blog/online-reputation-management-best-practices-reputation360-methodology",
            },
            {
              text: " that provide a continuous early-warning system for new negative content, regular positive asset updates and refreshes, quarterly search audits, and instant-response protocols if a new crisis event occurs.",
            },
          ],
        },
        {
          type: "steps",
          pickerKey: "crisis-phases-summary",
          steps: [
            {
              n: 1,
              title: "Contain",
              body: "Days 1-14: press, profiles, narrative content, and link building begin claiming search real estate.",
            },
            {
              n: 2,
              title: "Stabilize",
              body: "Weeks 2-8: daily monitoring, counter each new negative, sustain content velocity.",
            },
            {
              n: 3,
              title: "Recover",
              body: "Months 2-6: negative URLs lose relative authority as the positive corpus grows.",
            },
            {
              n: 4,
              title: "Build resilience",
              body: "Month 8+: monitoring, refreshes, quarterly audits, and rapid-response protocols.",
            },
          ],
        },
      ],
    },
    {
      id: "case-study",
      number: "06",
      title: "A real crisis recovery: the firm that needed to move fast",
      blocks: [
        {
          type: "p",
          text: "A mid-sized professional services firm in the US experienced a public falling-out with a high-profile former partner. Within 48 hours, the former partner published a detailed, one-sided account on a widely read industry blog - naming principals and framing the firm without rebuttal. By day two it had indexed in Google. By day three it sat in positions 3 and 4 for the firm's name search. Reputation360 was engaged on day three.",
        },
        {
          type: "p",
          text: "Select a phase below to see what we did and how search positions shifted.",
        },
        {
          type: "pills",
          pickerKey: "crisis-firm-case-timeline",
          items: [
            {
              id: "first-72h",
              label: "First 72 hours",
              title: "Rapid assessment and immediate action",
              body: "We mapped every indexed result across Google, Bing, and industry search. The blog post was already drawing inbound links from forums and social shares, accelerating its ranking. We decided not to wait for a content calendar - build and publish now. Within 48 hours of engagement we distributed a press release through a major national wire service, optimized for the firm's name and structured to index within 24 hours. It did. Simultaneously we audited website, LinkedIn company page, principals' profiles, press mentions, and directory listings - flagging pages on the firm's own domain that were being outranked by the blog for immediate remediation.",
            },
            {
              id: "weeks-1-3",
              label: "Weeks 1-3",
              title: "Building the counter-presence",
              body: "By end of week one, three new indexed assets appeared: the press release, an optimized firm LinkedIn page, and a refreshed homepage. Week two added two long-form thought leadership articles on high-authority industry platforms under principals' names - substantive bylines, not generic crisis posts. We began structured link-building to the firm's website and positive press, plus activated principals on Twitter/X and a three-times-weekly LinkedIn schedule. Daily monitoring tracked the blog post, every new asset, and inbound links to the negative article - increasing positive velocity when forum sharing continued to accelerate the blog's authority.",
            },
            {
              id: "weeks-4-8",
              label: "Weeks 4-8",
              title: "Holding the line and pushing further",
              body: "By week four the blog dropped from positions 3-4 to position 6. The press release held at position 4; one thought leadership article indexed at 8; the firm's website moved to position 1. We maintained output velocity - new content, links, social activity, monitoring. Week five brought a third-party business platform profile and industry award nomination listings that index strongly. By week six the blog was at position 7. Page one showed the website, LinkedIn, press release, thought leadership, platform profile, and boosted prior press - with the blog below all of it.",
            },
            {
              id: "months-3-4",
              label: "Months 3-4",
              title: "Full recovery",
              body: "By month three inquiry rates recovered to pre-crisis baseline. New business conversations progressed without awkward references to the blog. Two prospects who had gone quiet re-engaged. By month four the blog was off page one entirely - not removed or de-indexed, but displaced through coordinated authoritative positive content. The firm ended with a stronger digital presence than before the crisis: optimized website, active principal profiles, indexed thought leadership library, and ongoing social signals. Infrastructure built to counter the crisis became the foundation of ongoing reputation.",
            },
          ],
        },
        {
          type: "compare",
          pickerKey: "crisis-firm-before-after",
          items: [
            {
              id: "peak",
              title: "Day 3 (engagement start)",
              tone: "before",
              body: "Industry blog at positions 3-4 for firm name search. Forum links accelerating authority. Inquiry rate dropping. No coordinated counter-assets live.",
            },
            {
              id: "month-four",
              title: "Month 4",
              tone: "after",
              body: "Blog off page one - displaced, not deleted. Firm website, LinkedIn, press, and thought leadership own page one. Inquiry rate at pre-crisis baseline. Stronger presence than before the event.",
            },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      id: "faq-1",
      q: "How quickly can Reputation360 begin crisis work?",
      a: "We prioritize crisis engagements. For clients in active reputation crises, we can begin strategy and content production within 24 to 48 hours of engagement. The first indexed assets typically go live within a week.",
    },
    {
      id: "faq-2",
      q: "Should we respond publicly to the negative content?",
      a: "This is case-specific and requires careful judgment. In some situations, a calm, factual public response is appropriate and can itself become positive indexed content. In others, public response amplifies the story. Reputation360 advises on communication strategy as part of the crisis engagement.",
    },
    {
      id: "faq-3",
      q: "What if the crisis involves allegations that are partially true?",
      a: "We work with clients in complicated situations. Our role is not to manufacture false narratives but to ensure the full context of a situation is represented in search results - not just the most sensationalized version. We do not work with clients whose reputation issues stem from ongoing harmful behavior.",
    },
    {
      id: "faq-4",
      q: "What does recovery actually look like after a major crisis?",
      a: "Recovery is typically an improvement on the pre-crisis state because the crisis motivated investment in a stronger, actively managed digital presence. Clients who work with Reputation360 on long-term recovery often emerge with better search visibility than they had before.",
    },
  ],
  cta: {
    title: "Take the next step",
    lead:
      "If active crisis content is indexing today, parallel search and communications planning should start now through our online reputation management services - not after legal or PR cycles finish.",
    leadParts: [
      {
        text: "If active crisis content is indexing today, parallel search and communications planning should start now through ",
      },
      {
        text: "our online reputation management services",
        href: "https://www.thereputation360.com/services",
      },
      { text: " - not after legal or PR cycles finish." },
    ],
  },
  relatedReading: [
    {
      title: "How to Suppress Negative Search Results: The Reputation360 Framework",
      href: SUPPRESS_FRAMEWORK_PATH,
      category: "Suppression Strategy",
      readTime: "18 min read",
      image: pack20Image("suppress"),
      imageAlt: "Analytics dashboard representing search result monitoring",
    },
    {
      title: "Negative Links That Cost Jobs and Deals: Real Cases Reputation360 Solved",
      href: NEGATIVE_LINKS_CASES_PATH,
      category: "Case Studies",
      readTime: "14 min read",
      image: pack20Image("cases"),
      imageAlt: "Professionals in a meeting discussing career outcomes",
    },
    {
      title: "The Reputation360 Method: Removal vs. Suppression (Which Actually Works?)",
      href: REMOVAL_VS_SUPPRESSION_PATH,
      category: "Removal vs. Suppression",
      readTime: "18 min read",
      image: pack20Image("removal"),
      imageAlt: "Legal scales representing removal and compliance decisions",
    },
  ],
};

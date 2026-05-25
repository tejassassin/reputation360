import { blogPostPath } from "../../../constants/blogPaths.js";
import { BLOG_PATHS } from "../blogInternalPaths.js";
import { PACK20_AUTHOR, PACK20_DATE, pack20Image } from "./shared.js";

export const SLUG = "monitoring-online-reputation-tools-tactics-reputation360";
export const PATH = blogPostPath(SLUG);

const TOC = [
  { id: "free-toolkit", label: "01. Free monitoring toolkit" },
  { id: "paid-tools", label: "02. Paid and professional tools" },
  { id: "r360-monitoring", label: "03. Reputation360 monitoring" },
  { id: "when-escalate", label: "04. When to escalate" },
  { id: "monitoring-routine", label: "05. Monitoring routine" },
];

const NAV = [
  { id: "intro", label: "Introduction" },
  { id: "free-toolkit", label: "Free toolkit" },
  { id: "paid-tools", label: "Paid tools" },
  { id: "r360-monitoring", label: "R360 monitoring" },
  { id: "when-escalate", label: "Escalation" },
  { id: "monitoring-routine", label: "Routine" },
  { id: "start", label: "Next step" },
  { id: "faq", label: "FAQ" },
  { id: "related", label: "Related reading" },
];

export const article = {
  slug: SLUG,
  path: PATH,
  listing: {
    id: "pack20-monitoring-guide",
    slug: SLUG,
    filter: "Social Media, AI & Monitoring",
    category: "Social Media, AI & Monitoring",
    title: "Monitoring Your Online Reputation: Reputation360's Tools & Tactics Guide",
    excerpt:
      "You cannot protect what you cannot see. Reputation360's guide shows how to monitor your online reputation - free tools, paid tools, and when to escalate.",
    date: PACK20_DATE,
    author: PACK20_AUTHOR,
    readTime: "14 minutes",
    image: pack20Image("monitoring"),
    imageAlt: "Dashboard showing online reputation monitoring alerts",
  },
  seoTitle: "Monitor Your Online Reputation | Reputation360",
  metaDescription:
    "You cannot protect what you cannot see. Reputation360's guide shows how to monitor your online reputation - free tools, paid tools, and when to escalate.",
  hero: {
    badge: "Monitoring",
    title:
      "Monitoring Your Online Reputation: Reputation360's Tools & Tactics Guide",
    lead:
      "Reputation damage is almost always more expensive to fix the later you catch it. The sooner you know about a problem, the more options you have - and the less it costs to address.",
    meta: [
      { value: "Daily", label: "Alert digest check" },
      { value: "Monthly", label: "Full search audit" },
      { value: "97%", label: "Suppression success rate" },
    ],
  },
  introBlocks: [
    {
      type: "p",
      text: "Reputation damage is almost always more expensive to fix the later you catch it. A negative article accumulates authority over time. A critical review accumulates more one-star ratings below it. A harmful social post gets shared, screenshotted, and referenced in other content. The sooner you know about a problem, the more options you have - and the less it costs to address.",
    },
    {
      type: "p",
      text: "Reputation360 monitors search results for all active clients across the US, Canada, Australia, and Europe as a core part of our service - seven years, 1,100+ clients, 97% success rate. Monitoring your online reputation is not a one-time check - it is an ongoing discipline. But whether you are working with us or managing independently, here is the complete toolkit and process.",
    },
    {
      type: "lead",
      label: "What this guide covers",
      text: "Free and paid monitoring tools, how Reputation360 tracks active engagements, a triage framework for when to act, and a daily-to-quarterly monitoring routine.",
    },
  ],
  toc: TOC,
  tocTitle: "What You'll Learn",
  tocAriaLabel: "What you'll learn",
  nav: NAV,
  scrollSpyOrder: NAV.map((n) => n.id),
  sections: [
    {
      id: "free-toolkit",
      number: "01",
      title: "The free monitoring toolkit",
      blocks: [
        {
          type: "cards",
          items: [
            {
              title: "Google Alerts",
              body: "Set up alerts at alerts.google.com for your full name (in quotes for exact match), your business name, your name plus company, and any known negative keywords from past issues. Use All results and As-it-happens frequency. Free and catches a significant percentage of new indexed content.",
              parts: [
                { text: "Set up alerts at " },
                {
                  text: "alerts.google.com",
                  href: "https://alerts.google.com",
                  external: true,
                },
                {
                  text: " for your full name (in quotes for exact match), your business name, your name plus company, and any known negative keywords from past issues. Use All results and As-it-happens frequency. Free and catches a significant percentage of new indexed content.",
                },
              ],
            },
            {
              title: "Monthly manual search audit",
              body: "Once a month, open an incognito browser and search your full name, your name plus each current and recent employer, your name plus your city, and your business name. Document results and compare to the previous month. Catches ranking shifts on existing content that alerts miss.",
            },
            {
              title: "Social search monitoring",
              body: "Search your name on Twitter/X, LinkedIn, Facebook, Instagram, and Reddit monthly - and audit old social posts that surface during a name search. Captures mentions not yet indexed by Google. On Twitter/X, use advanced search to find any mention regardless of whether the account follows you.",
              parts: [
                {
                  text: "Search your name on Twitter/X, LinkedIn, Facebook, Instagram, and Reddit monthly - and audit ",
                },
                {
                  text: "old social media posts",
                  href: BLOG_PATHS.oldSocialPosts,
                },
                {
                  text: ". Captures mentions not yet indexed by Google. On Twitter/X, use advanced search to find any mention regardless of whether the account follows you.",
                },
              ],
            },
            {
              title: "Review platform checks",
              body: "Set up accounts on Google Business Profile, Yelp, Trustpilot, Glassdoor, and industry-specific directories. Check for new reviews weekly. Enable email notifications wherever the platform offers them.",
            },
          ],
        },
      ],
    },
    {
      id: "paid-tools",
      number: "02",
      title: "Paid and professional monitoring tools",
      blocks: [
        {
          type: "pills",
          pickerKey: "paid-monitoring-tools",
          items: [
            {
              id: "brand24",
              label: "Brand24",
              title: "Web and social mentions",
              body: "Brand24 monitors mentions of your name or brand across the web and social media in near-real-time. It provides sentiment analysis, reach estimates, and trend data. For individuals and businesses where social monitoring matters, Brand24 provides significantly more coverage than Google Alerts alone.",
            },
            {
              id: "mention",
              label: "Mention",
              title: "Filtered real-time alerts",
              body: "Similar to Brand24, Mention provides real-time monitoring across news sites, social platforms, forums, and blogs. Its alert system allows you to filter by sentiment and source importance, making it easier to identify which mentions require attention. Useful for brands managing high-volume mentions.",
            },
            {
              id: "semrush",
              label: "SEMrush Position Tracking",
              title: "Search position precision",
              body: "For tracking where specific positive and negative URLs rank in search results, SEMrush Position Tracking provides daily ranking data for target keywords. You can see week-by-week movement of both your positive assets and the negative content you are targeting.",
            },
          ],
        },
      ],
    },
    {
      id: "r360-monitoring",
      number: "03",
      title: "Reputation360's internal monitoring",
      blocks: [
        {
          type: "p",
          text: "For clients on active Reputation360 engagements, we provide continuous monitoring through our proprietary dashboard: daily search position tracking for all target keywords, alert-based notifications for new negative content, monthly reports showing the full first-page composition, and a direct response protocol when new threats emerge. Monitoring only pays off when you are building the first page that's worth monitoring.",
          parts: [
            {
              text: "For clients on active Reputation360 engagements, we provide continuous monitoring through our proprietary dashboard: daily search position tracking for all target keywords, alert-based notifications for new negative content, monthly reports showing the full first-page composition, and a direct response protocol when new threats emerge. Monitoring only pays off when you are ",
            },
            {
              text: "building the first page that's worth monitoring",
              href: BLOG_PATHS.ownFirstPage,
            },
            { text: "." },
          ],
        },
        {
          type: "stats",
          items: [
            { value: "Daily", label: "Position tracking" },
            { value: "Instant", label: "Negative content alerts" },
            { value: "Monthly", label: "Full first-page reports" },
          ],
        },
        {
          type: "p",
          text: "See the outcomes our monitoring has helped protect when you want documented examples of what proactive tracking produces for active clients.",
          parts: [
            {
              text: "See the outcomes our monitoring has helped protect",
              href: "/case-studies",
            },
            {
              text: " when you want documented examples of what proactive tracking produces for active clients.",
            },
          ],
        },
      ],
    },
    {
      id: "when-escalate",
      number: "04",
      title: "When to escalate: knowing what requires action",
      blocks: [
        {
          type: "p",
          text: "Not everything that appears in monitoring requires a response. Learning to triage is an important part of effective reputation monitoring. Here is a practical framework:",
        },
        {
          type: "doDont",
          do: {
            title: "Act now",
            items: [
              {
                text: "New negative content on a high-authority site (DA 50+) or in positions 1-5 for your primary name search - start with how to respond when monitoring flags a serious result",
                parts: [
                  {
                    text: "New negative content on a high-authority site (DA 50+) or in positions 1-5 for your primary name search - start with ",
                  },
                  {
                    text: "how to respond when monitoring flags a serious result",
                    href: BLOG_PATHS.suppressFramework,
                  },
                ],
              },
              {
                text: "False factual claims (potential defamation) - escalate to the crisis management playbook when the situation is severe",
              },
              {
                text: "Content involving sensitive personal information - escalate immediately and document before it spreads",
              },
            ],
          },
          dont: {
            title: "Monitor or ignore",
            items: [
              "Lower-authority sites: monitor and assess",
              "Single negative reviews vs. a pattern",
              "Social mentions with limited reach",
              "Page 3+ content with no new engagement",
            ],
          },
        },
        {
          type: "p",
          text: "Once you have triaged a new finding, map how long it takes to address what monitoring uncovers so you can set expectations before you commit resources. When the issue requires displacement rather than removal, follow our suppression strategy guide.",
          parts: [
            { text: "Once you have triaged a new finding, map " },
            {
              text: "how long it takes to address what monitoring uncovers",
              href: BLOG_PATHS.repairTimeline,
            },
            {
              text: " so you can set expectations before you commit resources. When the issue requires displacement rather than removal, follow our ",
            },
            {
              text: "suppression strategy",
              href: BLOG_PATHS.suppressFramework,
            },
            { text: " guide." },
          ],
        },
      ],
    },
    {
      id: "monitoring-routine",
      number: "05",
      title: "Building a monitoring routine",
      blocks: [
        {
          type: "steps",
          pickerKey: "monitoring-routine-cadence",
          steps: [
            {
              n: 1,
              title: "Daily",
              body: "Check Google Alerts email digest. Review notifications from any paid monitoring tools.",
            },
            {
              n: 2,
              title: "Weekly",
              body: "Check review platforms for new reviews. Check social platforms for direct mentions.",
            },
            {
              n: 3,
              title: "Monthly",
              body: "Conduct full manual search audit across all keyword variants. Update monitoring search terms if your name, title, or business details have changed.",
            },
            {
              n: 4,
              title: "Quarterly",
              body: "Review overall search landscape and assess whether suppression work is holding. Reassess monitoring tools to ensure coverage remains comprehensive.",
            },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      id: "faq-1",
      q: "Google Alerts does not seem to catch everything. Is there a better free option?",
      a: "Google Alerts has known gaps - it misses content from sites that restrict crawling, some social platforms, and occasionally delays alerts by days or weeks. Pairing it with monthly manual audits and a free tier of Brand24 or Mention covers most gaps without significant cost.",
    },
    {
      id: "faq-2",
      q: "How do I monitor what a potential employer or partner would find?",
      a: "Use an incognito browser to search your name without your own personalization affecting results. For a more accurate simulation of what someone in a different location sees, use a VPN set to their location - a recruiter in New York, for instance. Reputation360 can run a comprehensive multi-location search audit as part of our assessment service.",
    },
    {
      id: "faq-3",
      q: "What is the first thing I should do if my monitoring catches a new negative result?",
      a: "Document it immediately - URL, screenshot, current position. Then assess: is it factually accurate or false? Is it on a high or low authority site? Is it in a position that will be seen by your key audiences? This assessment determines the response, which ranges from a formal removal request to an immediate escalation of suppression activities.",
    },
  ],
  cta: {
    title: "Take the next step",
    lead:
      "Reputation360 provides continuous monitoring and immediate response capability for all active clients. Learn what professional monitoring looks like for your situation.",
  },
  relatedReading: [
    {
      title: "Crisis Management & Reputation Recovery: The Reputation360 Playbook",
      href: BLOG_PATHS.crisisPlaybook,
      category: "Crisis Management",
      readTime: "18 min read",
      image: pack20Image("crisis"),
      imageAlt: "Crisis response team coordinating reputation recovery",
    },
    {
      title: "Online Reputation Management Best Practices: The Reputation360 Methodology",
      href: BLOG_PATHS.bestPractices,
      category: "ORM Methodology",
      readTime: "18 min read",
      image: pack20Image("default"),
      imageAlt: "Team collaborating on reputation management strategy",
    },
    {
      title: "How to Suppress Negative Search Results: The Reputation360 Framework",
      href: BLOG_PATHS.suppressFramework,
      category: "Suppression Strategy",
      readTime: "18 min read",
      image: pack20Image("suppress"),
      imageAlt: "Analytics dashboard representing search result monitoring",
    },
  ],
};

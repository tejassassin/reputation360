import { blogPostPath } from "../../../constants/blogPaths.js";
import { JOB_INTERVIEW_REPUTATION_FAQS } from "../blogFaqsRewritten.js";
import { BLOG_PATHS } from "../blogInternalPaths.js";
import { PACK20_AUTHOR, PACK20_DATE, pack20Image } from "./shared.js";

export const SLUG = "fix-reputation-before-job-interview-reputation360-guide";
export const PATH = blogPostPath(SLUG);

const CASE_STUDIES_PATH = "/case-studies";

const TOC = [
  { id: "google-yourself", label: "01. Start here: Google yourself right now" },
  { id: "fix-under-30-days", label: "02. What you can fix in under 30 days" },
  { id: "hard-truth", label: "03. What takes longer: the hard truth" },
  { id: "proactive-disclosure", label: "04. Addressing known issues proactively" },
  { id: "thirty-day-plan", label: "05. The 30-day pre-interview reputation plan" },
];

const NAV = [
  { id: "intro", label: "Introduction" },
  { id: "google-yourself", label: "Google yourself" },
  { id: "fix-under-30-days", label: "Under 30 days" },
  { id: "hard-truth", label: "Hard truth" },
  { id: "proactive-disclosure", label: "Proactive disclosure" },
  { id: "thirty-day-plan", label: "30-day plan" },
  { id: "start", label: "Next step" },
  { id: "faq", label: "FAQ" },
];

export const article = {
  slug: SLUG,
  path: PATH,
  listing: {
    id: "pack20-pre-interview-reputation",
    slug: SLUG,
    filter: "Career, Crisis & Case Studies",
    category: "Career, Crisis & Case Studies",
    title: "How to Fix Your Reputation Before Your Job Interview: Reputation360 Guide",
    excerpt:
      "A negative Google result before an interview can end a process. Learn what to fix fast, what takes months, and the 30-day plan when time is short.",
    date: PACK20_DATE,
    author: PACK20_AUTHOR,
    readTime: "15 minutes",
    image: pack20Image("interview"),
    imageAlt: "Professional preparing for a job interview on a laptop",
  },
  seoTitle:
    "Fix Your Reputation Before a Job Interview | Reputation360",
  metaDescription:
    "A negative Google result before a job interview can end a process. Reputation360 shows what to fix, how fast, and what to do if time is short.",
  hero: {
    badge: "Job Search Guide",
    title:
      "How to Fix Your Reputation Before Your Job Interview: Reputation360 Guide",
    lead:
      "You have the resume and the experience. The phone screen went well. Between now and the formal interview, someone on the hiring team will search your name. What they find in the next 30 seconds may determine whether the process continues.",
    meta: [
      { value: "97%", label: "Suppression success rate" },
      { value: "30 days", label: "Pre-interview plan" },
      { value: "1,100+", label: "Clients served" },
    ],
  },
  introBlocks: [
    {
      type: "p",
      text: "You have the resume. You have the experience. The phone screen went well and you have been invited for a formal interview. Between now and that meeting, someone on the hiring team is going to search your name. What they find in the next 30 seconds may determine whether the process continues - and most candidates have no idea what that search returns.",
    },
    {
      type: "p",
      text: "Reputation360 has spent seven years working with more than 1,100 clients in the United States, Canada, Australia, and Europe on exactly this kind of challenge, with a 97% suppression success rate. We work with professionals who are in exactly this position: an active job search, a known or suspected reputation issue in search results, and limited time to address it.",
    },
    {
      type: "lead",
      label: "What this guide covers",
      text: "How to audit your name search today, what you can realistically fix in under 30 days, what requires a longer suppression track, how to handle known issues proactively, and a week-by-week pre-interview plan.",
    },
  ],
  toc: TOC,
  tocTitle: "What You'll Learn",
  tocAriaLabel: "What you'll learn",
  nav: NAV,
  scrollSpyOrder: NAV.map((n) => n.id),
  sections: [
    {
      id: "google-yourself",
      number: "01",
      title: "Start here: Google yourself right now",
      blocks: [
        {
          type: "p",
          text: "Open an incognito or private browsing window - this prevents your own search history from personalizing the results - and search your full name. Then search your name plus your current employer, your name plus your most recent employer, and your name plus your city - the same combinations covered in the exact search sequence recruiters run. Document everything you find.",
          parts: [
            {
              text: "Open an incognito or private browsing window - this prevents your own search history from personalizing the results - and search your full name. Then search your name plus your current employer, your name plus your most recent employer, and your name plus your city - the same combinations covered in ",
            },
            {
              text: "the exact search sequence recruiters run",
              href: BLOG_PATHS.recruitersReport,
            },
            { text: ". Document everything you find." },
          ],
        },
        {
          type: "p",
          text: "What you are looking for: any result in the top ten that a recruiter would find concerning. Negative news articles, court records, consumer complaints, highly critical social posts, or anything that does not reflect who you are professionally today. This is your working list.",
        },
        {
          type: "steps",
          pickerKey: "pre-interview-google-audit",
          steps: [
            {
              n: 1,
              title: "Incognito name search",
              body: "Search your full name in a private window. Screenshot page one and page two with timestamps.",
            },
            {
              n: 2,
              title: "Employer combinations",
              body: "Search your name plus current employer and your name plus most recent employer. Note anything tied to company news or reviews.",
            },
            {
              n: 3,
              title: "Location search",
              body: "Search your name plus your city. Local news or directory results sometimes surface here first.",
            },
            {
              n: 4,
              title: "Build the working list",
              body: "Tag every top-ten URL as helpful, neutral, or concerning. Prioritize anything a hiring manager would pause on.",
            },
          ],
        },
      ],
    },
    {
      id: "fix-under-30-days",
      number: "02",
      title: "What you can fix in under 30 days",
      blocks: [
        {
          type: "p",
          text: "These are the highest-leverage actions when an interview is approaching. Select each track below for timing, what to do, and what ranking movement to expect.",
        },
        {
          type: "pills",
          pickerKey: "fix-under-30-days-tracks",
          items: [
            {
              id: "linkedin",
              label: "LinkedIn",
              title: "LinkedIn profile (1-2 days; ranking in 2-4 weeks)",
              body: "A fully optimized LinkedIn profile is the single most impactful thing you can do for your name in Google. If your profile is incomplete, thin, or outdated, update it comprehensively: full work history, detailed role descriptions, a strong About section that uses your full name, skills and endorsements, and a custom URL matching your name. Start with LinkedIn's own profile optimisation guidance, then layer in our checklist tactics. LinkedIn's high domain authority means a well-optimized profile can rank position 1 or 2 within two to four weeks.",
              parts: [
                {
                  text: "A fully optimized LinkedIn profile is the single most impactful thing you can do for your name in Google. If your profile is incomplete, thin, or outdated, update it comprehensively: full work history, detailed role descriptions, a strong About section that uses your full name, skills and endorsements, and a custom URL matching your name. Start with ",
                },
                {
                  text: "LinkedIn's own profile optimisation guidance",
                  href: "https://www.linkedin.com/help/linkedin/answer/a554737",
                  external: true,
                },
                {
                  text: ", then layer in our checklist tactics. LinkedIn's high domain authority means a well-optimized profile can rank position 1 or 2 within two to four weeks.",
                },
              ],
            },
            {
              id: "social",
              label: "Social cleanup",
              title: "Social media cleanup (1-7 days; indexing in 2-4 weeks)",
              body: "Review all public social media accounts for content that could raise questions: strong political statements, controversial opinions, immature humor, unprofessional behavior. Delete or make private the most concerning content, and follow our guide on cleaning up old social media posts that appear in Google when posts still surface in search. Set personal accounts (Instagram, Facebook) to private so future posts are not indexed. Note that deleted content may remain in Google's cache for a few weeks - this is normal and resolves with time.",
              parts: [
                {
                  text: "Review all public social media accounts for content that could raise questions: strong political statements, controversial opinions, immature humor, unprofessional behavior. Delete or make private the most concerning content, and follow our guide on ",
                },
                {
                  text: "cleaning up old social media posts that appear in Google",
                  href: BLOG_PATHS.oldSocialPosts,
                },
                {
                  text: " when posts still surface in search. Set personal accounts (Instagram, Facebook) to private so future posts are not indexed. Note that deleted content may remain in Google's cache for a few weeks - this is normal and resolves with time.",
                },
              ],
            },
            {
              id: "profiles",
              label: "Profile claims",
              title: "Profile claims (3-7 days; indexing in 1-2 weeks)",
              body: "Claim and fill out profiles on high-authority platforms: Crunchbase, AngelList (for tech and startup professionals), About.me, Medium, and any industry-specific directory relevant to your field. Our profile claiming guide walks through claiming the right profiles for your situation. Each claimed profile is a new URL indexed by Google, and each one is a positive result that may outrank negative content. Complete profiles with your full name, title, and a professional summary in each About section.",
              parts: [
                {
                  text: "Claim and fill out profiles on high-authority platforms: Crunchbase, AngelList (for tech and startup professionals), About.me, Medium, and any industry-specific directory relevant to your field. Our profile claiming guide walks through ",
                },
                {
                  text: "claiming the right profiles",
                  href: BLOG_PATHS.profileClaiming,
                },
                {
                  text: " for your situation. Each claimed profile is a new URL indexed by Google, and each one is a positive result that may outrank negative content. Complete profiles with your full name, title, and a professional summary in each About section.",
                },
              ],
            },
            {
              id: "website",
              label: "Personal website",
              title: "Personal website or portfolio (1-2 weeks; ranking in 4-6 weeks)",
              body: "A professional single-page website - your name as the domain if possible - built with your bio, career highlights, and contact information can rank well for an exact name search within 4 to 6 weeks. Pair the site with a content strategy focused on ranking positive content above negative results so Google has stronger assets to show. This is an especially strong asset because it gives you complete control over the narrative. Services like Squarespace, Wix, and WordPress make this achievable without technical expertise. The key SEO elements are: your full name in the title tag, H1, and About text; a fast-loading page; and mobile-friendly design.",
              parts: [
                {
                  text: "A professional single-page website - your name as the domain if possible - built with your bio, career highlights, and contact information can rank well for an exact name search within 4 to 6 weeks. Pair the site with a content strategy focused on ",
                },
                {
                  text: "ranking positive content above negative results",
                  href: BLOG_PATHS.rankPositive,
                },
                {
                  text: " so Google has stronger assets to show. This is an especially strong asset because it gives you complete control over the narrative. Services like Squarespace, Wix, and WordPress make this achievable without technical expertise. The key SEO elements are: your full name in the title tag, H1, and About text; a fast-loading page; and mobile-friendly design.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "hard-truth",
      number: "03",
      title: "What takes longer: the hard truth",
      blocks: [
        {
          type: "p",
          text: "If you have a negative result from a high-authority source - a major newspaper, a national news network, a significant legal database - 30 days is not enough to push it off page one on its own. These results carry too much authority to be displaced quickly by profile optimization alone. Our guide on realistic timelines for reputation repair breaks down what to expect by severity and asset mix.",
          parts: [
            {
              text: "If you have a negative result from a high-authority source - a major newspaper, a national news network, a significant legal database - 30 days is not enough to push it off page one on its own. These results carry too much authority to be displaced quickly by profile optimization alone. Our guide on ",
            },
            {
              text: "realistic timelines for reputation repair",
              href: BLOG_PATHS.repairTimeline,
            },
            { text: " breaks down what to expect by severity and asset mix." },
          ],
        },
        {
          type: "compare",
          pickerKey: "pre-interview-two-track",
          items: [
            {
              id: "quick-wins",
              title: "Quick-win track",
              tone: "after",
              body: "LinkedIn optimization, profile claims, social cleanup, and a personal site launch. Begin immediately. Meaningful movement often appears within 2-4 weeks even if the interview is sooner.",
            },
            {
              id: "suppression",
              title: "Suppression track",
              tone: "before",
              body: "Professional suppression for high-authority negatives. Runs in parallel from day one. Even if page one has not fully shifted before the interview, a stronger positive surround reduces impact significantly - as real cases where negative links stalled job offers show.",
              parts: [
                {
                  text: "Professional suppression for high-authority negatives. Runs in parallel from day one. Even if page one has not fully shifted before the interview, a stronger positive surround reduces impact significantly - as ",
                },
                {
                  text: "real cases where negative links stalled job offers",
                  href: BLOG_PATHS.negativeLinksCases,
                },
                { text: " show." },
              ],
            },
          ],
        },
        {
          type: "p",
          text: "In these cases, Reputation360 recommends a two-track approach: execute the quick-win actions above immediately to improve your overall search profile, while beginning a professional suppression engagement to work on the harder problem in parallel.",
        },
      ],
    },
    {
      id: "proactive-disclosure",
      number: "04",
      title: "Addressing known issues proactively",
      blocks: [
        {
          type: "p",
          text: "If you know a hiring team will find something concerning, consider whether to address it proactively. This is a judgment call that depends on the severity of the issue, how old it is, and the nature of the role.",
        },
        {
          type: "keyBox",
          variant: "insight",
          title: "When proactive disclosure helps",
          text: "In general: if the issue is minor and old, a brief matter-of-fact mention - \"I'm aware there's an old news piece about X; happy to provide context if helpful\" - demonstrates self-awareness and takes the sting out of the discovery. For more serious issues, Reputation360 advises on communication strategy as part of our career reputation service.",
        },
      ],
    },
    {
      id: "thirty-day-plan",
      number: "05",
      title: "The 30-day pre-interview reputation plan",
      blocks: [
        {
          type: "p",
          text: "Use this week-by-week sequence when you have roughly 30 days before interviews intensify. Adjust pacing if your timeline is shorter - prioritize Week 1 and Week 2 actions first.",
        },
        {
          type: "steps",
          pickerKey: "thirty-day-pre-interview-plan",
          steps: [
            {
              n: 1,
              title: "Week 1",
              body: "Google audit, LinkedIn full optimization, social media cleanup, and follow our guide on dealing with old social media posts when deleted content still appears in search.",
              parts: [
                {
                  text: "Google audit, LinkedIn full optimization, social media cleanup, and follow our guide on ",
                },
                {
                  text: "dealing with old social media posts",
                  href: BLOG_PATHS.oldSocialPosts,
                },
                {
                  text: " when deleted content still appears in search.",
                },
              ],
            },
            {
              n: 2,
              title: "Week 2",
              body: "Claim high-authority profiles, launch personal website or update existing one, optimize Google Business Profile if applicable.",
            },
            {
              n: 3,
              title: "Week 3",
              body: "Post thought leadership content on LinkedIn, publish first Medium article or industry contribution if applicable, begin link requests to your new assets.",
            },
            {
              n: 4,
              title: "Week 4",
              body: "Re-audit search results in incognito, document improvements, set up reputation monitoring for ongoing alerts, and prepare proactive talking points for any remaining issues that cannot be fully addressed in this timeframe.",
              parts: [
                {
                  text: "Re-audit search results in incognito, document improvements, set up ",
                },
                {
                  text: "reputation monitoring",
                  href: BLOG_PATHS.monitoring,
                },
                {
                  text: " for ongoing alerts, and prepare proactive talking points for any remaining issues that cannot be fully addressed in this timeframe.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  faqs: JOB_INTERVIEW_REPUTATION_FAQS,
  cta: {
    title: "Start Managing Your Online Reputation Today",
    lead:
      "In an active job search with limited time? We can begin building your positive search profile within 48 hours and map what is realistic before your next interview. See how we've handled similar cases when serious negatives are on page one.",
    leadParts: [
      {
        text: "In an active job search with limited time? We can begin building your positive search profile within 48 hours and map what is realistic before your next interview. ",
      },
      {
        text: "See how we've handled similar cases",
        href: CASE_STUDIES_PATH,
      },
      { text: " when serious negatives are on page one." },
    ],
  },
  relatedReading: [
    {
      title: "What Do Recruiters Google About You? Reputation360's Insider Report",
      href: BLOG_PATHS.recruitersReport,
      category: "Job Search & Reputation",
      readTime: "12 min read",
      image: pack20Image("recruiters"),
      imageAlt: "Candidate and recruiter in a professional interview setting",
    },
    {
      title: "LinkedIn Profile Optimization for Search Results: The Reputation360 Checklist",
      href: BLOG_PATHS.linkedinChecklist,
      category: "LinkedIn & Search",
      readTime: "15 min read",
      image: pack20Image("linkedin"),
      imageAlt: "Professional working on a laptop with LinkedIn branding context",
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

import { blogPostPath } from "../../../constants/blogPaths.js";
import { PACK20_AUTHOR, PACK20_DATE, pack20Image } from "./shared.js";

export const SLUG = "fix-reputation-before-job-interview-reputation360-guide";
export const PATH = blogPostPath(SLUG);

const RECRUITERS_PATH = blogPostPath(
  "what-recruiters-google-about-you-reputation360-insider-report",
);

const LINKEDIN_PATH = blogPostPath(
  "linkedin-profile-optimization-search-results-reputation360-checklist",
);

const SUPPRESS_FRAMEWORK_PATH = blogPostPath(
  "how-to-suppress-negative-search-results-reputation360-framework",
);

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
  { id: "related", label: "Related reading" },
];

export const article = {
  slug: SLUG,
  path: PATH,
  listing: {
    id: "pack20-pre-interview-reputation",
    slug: SLUG,
    filter: "Career",
    category: "Job Search & Reputation",
    title: "How to Fix Your Reputation Before Your Job Interview: Reputation360 Guide",
    excerpt:
      "A negative Google result before an interview can end a process. Learn what to fix fast, what takes months, and the 30-day plan when time is short.",
    date: PACK20_DATE,
    author: PACK20_AUTHOR,
    readTime: "15 minutes",
    image: pack20Image("recruiters"),
    imageAlt: "Professional preparing for a job interview on a laptop",
  },
  seoTitle:
    "Fix Your Reputation Before a Job Interview | Reputation360",
  metaDescription:
    "A negative Google result before a job interview can end a process. Reputation360 shows what to fix, how fast, and what to do if time is short.",
  hero: {
    badge: "Job Search Guide",
    title: "How to Fix Your Reputation Before Your Job Interview",
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
          text: "Open an incognito or private browsing window - this prevents your own search history from personalizing the results - and search your full name. Then search your name plus your current employer, your name plus your most recent employer, and your name plus your city. Document everything you find.",
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
              body: "A fully optimized LinkedIn profile is the single most impactful thing you can do for your name in Google. If your profile is incomplete, thin, or outdated, update it comprehensively: full work history, detailed role descriptions, a strong About section that uses your full name, skills and endorsements, and a custom URL matching your name. LinkedIn's high domain authority means a well-optimized profile can rank position 1 or 2 within two to four weeks.",
            },
            {
              id: "social",
              label: "Social cleanup",
              title: "Social media cleanup (1-7 days; indexing in 2-4 weeks)",
              body: "Review all public social media accounts for content that could raise questions: strong political statements, controversial opinions, immature humor, unprofessional behavior. Delete or make private the most concerning content. Set personal accounts (Instagram, Facebook) to private so future posts are not indexed. Note that deleted content may remain in Google's cache for a few weeks - this is normal and resolves with time.",
            },
            {
              id: "profiles",
              label: "Profile claims",
              title: "Profile claims (3-7 days; indexing in 1-2 weeks)",
              body: "Claim and fill out profiles on high-authority platforms: Crunchbase, AngelList (for tech and startup professionals), About.me, Medium, and any industry-specific directory relevant to your field. Each claimed profile is a new URL indexed by Google, and each one is a positive result that may outrank negative content. Complete profiles with your full name, title, and a professional summary in each About section.",
            },
            {
              id: "website",
              label: "Personal website",
              title: "Personal website or portfolio (1-2 weeks; ranking in 4-6 weeks)",
              body: "A professional single-page website - your name as the domain if possible - built with your bio, career highlights, and contact information can rank well for an exact name search within 4 to 6 weeks. This is an especially strong asset because it gives you complete control over the narrative. Services like Squarespace, Wix, and WordPress make this achievable without technical expertise. The key SEO elements are: your full name in the title tag, H1, and About text; a fast-loading page; and mobile-friendly design.",
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
          text: "If you have a negative result from a high-authority source - a major newspaper, a national news network, a significant legal database - 30 days is not enough to push it off page one on its own. These results carry too much authority to be displaced quickly by profile optimization alone.",
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
              body: "Professional suppression for high-authority negatives. Runs in parallel from day one. Even if page one has not fully shifted before the interview, a stronger positive surround reduces impact significantly.",
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
              body: "Google audit, LinkedIn full optimization, social media cleanup, submit URL removal requests for deleted content.",
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
              body: "Re-audit search results in incognito, document improvements, prepare proactive talking points for any remaining issues that cannot be fully addressed in this timeframe.",
            },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      id: "faq-1",
      q: "I have an interview in two weeks. Is it too late to do anything meaningful?",
      a: "Two weeks is enough to execute the quick-win actions: LinkedIn optimization, profile claims, and social cleanup. You may see meaningful search movement within the window. For a major negative result, two weeks is not enough to suppress it fully - but it is enough to begin building positive assets that will continue improving after the interview.",
    },
    {
      id: "faq-2",
      q: "Should I tell the interviewer about a known issue before they find it?",
      a: "This depends entirely on the nature of the issue, the role, and your relationship with the recruiter. Reputation360 can advise on communication strategy for your specific situation. In general, proactive disclosure with good context is often better than having an interviewer discover something and wonder why you did not mention it.",
    },
    {
      id: "faq-3",
      q: "Does Reputation360 offer a fast-track service for job seekers?",
      a: "Yes. We offer priority engagement for professionals in active job searches who need the fastest possible improvement in their search results. Contact us directly to discuss timelines and strategy for your specific situation.",
    },
  ],
  cta: {
    title: "Take the next step",
    lead:
      "In an active job search with limited time? We can begin building your positive search profile within 48 hours and map what is realistic before your next interview.",
  },
  relatedReading: [
    {
      title: "What Do Recruiters Google About You? Reputation360's Insider Report",
      href: RECRUITERS_PATH,
      category: "Job Search & Reputation",
      readTime: "12 min read",
      image: pack20Image("recruiters"),
      imageAlt: "Candidate and recruiter in a professional interview setting",
    },
    {
      title: "LinkedIn Profile Optimization for Search Results: The Reputation360 Checklist",
      href: LINKEDIN_PATH,
      category: "LinkedIn & Search",
      readTime: "15 min read",
      image: pack20Image("linkedin"),
      imageAlt: "Professional working on a laptop with LinkedIn branding context",
    },
    {
      title: "How to Suppress Negative Search Results: The Reputation360 Framework",
      href: SUPPRESS_FRAMEWORK_PATH,
      category: "Suppression Strategy",
      readTime: "18 min read",
      image: pack20Image("suppress"),
      imageAlt: "Analytics dashboard representing search result monitoring",
    },
  ],
};

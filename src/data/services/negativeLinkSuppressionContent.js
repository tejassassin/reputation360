import { AUDIENCE_PATH } from "../../constants/whoWeServePaths.js";

export const NLS_WHAT_IS_PARAGRAPHS = [
  "Negative Link Suppression is a precision SEO and content strategy designed to reduce the ranking of harmful, misleading, or outdated search results - and replace them with authoritative, positive content that accurately represents who you are.",
  "It works because Google's search results are not fixed. They are a constantly shifting ecosystem driven by authority signals, content quality, and relevance. When those signals are engineered strategically, positive content rises while harmful links lose ground and slip into the pages where over 90% of searchers will never go.",
  "The damaging content may still exist somewhere on the internet. But when it cannot be found in a normal search, it cannot do damage.",
];

export const NLS_WHY_COSTS_CLOSING =
  "The longer harmful content stays on page one, the more authority it accumulates - and the harder it becomes to displace. Time works against you here.";

export const NLS_WHY_COSTS_ROWS = [
  {
    id: "individuals",
    perspective: "Individuals",
    impact:
      "Recruiters, clients, collaborators, and personal contacts search before they engage. A damaging result quietly closes doors to opportunities you never knew were open",
  },
  {
    id: "executives",
    perspective: "Executives",
    impact:
      "Negative results surface in investor due diligence, media background checks, and board-level assessments - shaping opinions before you say a word",
  },
  {
    id: "businesses",
    perspective: "Businesses",
    impact:
      "94% of consumers research before buying. 88% never leave page one. One negative result redirects potential customers to competitors every single day",
  },
  {
    id: "professionals",
    perspective: "Professionals",
    impact:
      "Doctors, lawyers, and financial advisors operate on trust. One harmful result can undo years of earned credibility in seconds",
  },
];

export const NLS_SEARCH_RESULTS_INTRO = [
  "Not everything that appears in your search results carries the same risk - or the same opportunity. Every result falls into one of three categories, and knowing the difference is the foundation of any effective Negative Link Suppression strategy.",
];

export const NLS_SEARCH_RESULTS_CLOSING =
  "The goal of Negative Link Suppression is to build enough high-quality positive content that it consistently occupies page one, pushing negative results beyond reach and converting neutral content into active credibility signals.";

export const NLS_SEARCH_RESULT_CATEGORIES = [
  {
    id: "negative",
    label: "Negative",
    tone: "risk",
    examples:
      "Critical news article or investigative report; one-star review on Google, Yelp, or Glassdoor; Reddit thread or forum post criticizing you; mugshot or arrest record site; outdated article misrepresenting your current role; social media post from a disgruntled customer or former employee; RipoffReport or similar complaint site listing",
    action: "Primary target for removal and Negative Link Suppression",
  },
  {
    id: "neutral",
    label: "Neutral",
    tone: "neutral",
    examples:
      "Basic directory listing with no reviews; old employer's staff page that still lists you; social media profile that is active but not optimized; generic news mention where you are briefly quoted; Wikipedia page about your company or industry; conference attendee list including your name",
    action: "Optimize these to convert them into positive signals",
  },
  {
    id: "positive",
    label: "Positive",
    tone: "positive",
    examples:
      "Your official website or About page; LinkedIn profile with strong endorsements; feature in a reputable publication such as Forbes, Inc., or a trade journal; glowing client testimonial or case study; podcast interview or speaking engagement recap; professional award or certification announcement; well-reviewed Google Business Profile",
    action: "Amplify and protect these - they are your strongest assets",
  },
];

export const NLS_REMOVAL_VS_SUPPRESSION_INTRO =
  "Content Removal vs. Negative Link Suppression: What Is the Difference?";

export const NLS_REMOVAL_VS_SUPPRESSION_ROWS = [
  {
    aspect: "What it does",
    removal:
      "Permanently deletes harmful content at its source",
    suppression:
      "Pushes harmful content off page one by building content that outranks it",
  },
  {
    aspect: "Best used when",
    removal:
      "Content violates terms of service, copyright, privacy laws, or platform policies",
    suppression:
      "Content is accurate, protected speech, or cannot be removed through conventional means",
  },
  {
    aspect: "How it works",
    removal:
      "DMCA claims, legal pathways, TOS violations, direct publisher negotiations, data broker opt-outs",
    suppression:
      "Strategic SEO, high-authority content creation, social profile optimization, link-building, digital PR",
  },
  {
    aspect: "Typical timeline",
    removal: "Days to months depending on content type, platform, and legal complexity",
    suppression:
      "60-90 days for initial movement; 3-6 months for significant page-one displacement",
  },
  {
    aspect: "Permanence",
    removal: "Permanent once successfully removed",
    suppression: "Permanent with ongoing monitoring and reinforcement",
  },
  {
    aspect: "Used together?",
    removal: "Yes - in most campaigns, both run in parallel.",
    suppression:
      "Removal is pursued wherever possible while Negative Link Suppression delivers results in the meantime",
  },
];

export const NLS_PUBLISHER_NOTE =
  'Important note: Before reaching out to any publisher to "update" or "correct" old coverage, speak with a specialist first. Refreshing old content can unintentionally push it back up in rankings rather than down.';

export const NLS_WHEN_SUPPRESSION_ROWS = [
  {
    scenario: "The content is accurate but outdated or damaging",
    why: "Google does not remove accurate information. But Negative Link Suppression ensures your current achievements are what people find first, not something from years ago",
  },
  {
    scenario: "Removal attempts have failed",
    why: "If outreach, DMCA claims, or legal steps have not worked, Negative Link Suppression is the logical and effective next step",
  },
  {
    scenario: "You are facing ongoing attacks",
    why: "Building a dominant page-one presence creates a buffer that makes it very difficult for new negative content to gain visibility",
  },
  {
    scenario: "The content is old",
    why: "Search engines favor fresh content. A well-executed campaign can displace years-old coverage because newer, high-quality content naturally outcompetes stale pages",
  },
  {
    scenario: "You are anticipating negative coverage",
    why: "Building strong positive content before harmful coverage appears is the most effective way to limit its search impact when it does surface",
  },
];

export const NLS_FEASIBILITY_INTRO =
  "Different types of content require different strategies. Here is an honest, practical guide to what is achievable with each content type.";

export const NLS_FEASIBILITY_CLOSING =
  "Understanding where your specific content falls in this matrix is the starting point for building a realistic strategy. We walk through this in detail during your free search analysis.";

export const NLS_FEASIBILITY_ROWS = [
  {
    contentType: "IP-Infringing Content",
    removal: "High: DMCA, trademark, and platform enforcement usually succeed",
    suppression: "Very High: Any remaining copies are straightforward to outrank",
  },
  {
    contentType: "Defamatory Content",
    removal: "Moderate: Depends on proof, jurisdiction, and publisher willingness",
    suppression: "High to Moderate: Varies based on site authority and how widely distributed",
  },
  {
    contentType: "Privacy-Violating Content",
    removal: "High: Strong platform and legal takedown pathways exist",
    suppression: "Very High: Suppression handles residual visibility after removal",
  },
  {
    contentType: "Misleading or False Claims",
    removal:
      "Moderate: Rarely removed unless a platform policy violation can be proven",
    suppression: "Very High: Displaced effectively with authoritative, corrective content",
  },
  {
    contentType: "Negative Opinions and Commentary",
    removal: "Low: Often protected speech; rarely eligible for removal",
    suppression: "Very High: The primary target of content-based Negative Link Suppression",
  },
  {
    contentType: "Low-Quality Reviews and Aggregations",
    removal: "Moderate: Removable if fraudulent or policy-violating",
    suppression: "Very High: Displaced by strong brand and review assets",
  },
  {
    contentType: "Legal and Regulatory Records",
    removal: "Very Low: Public records are rarely removed",
    suppression:
      "Challenging: Best managed through narrative framing and contextual content strategy",
  },
  {
    contentType: "High-Authority Journalism",
    removal: "Very Low: Editorial independence typically prevents takedowns",
    suppression:
      "Difficult: Requires sustained PR, response content, and AI narrative work",
  },
];

export const NLS_HARMFUL_CONTENT_TYPES = [
  "Negative news articles and media coverage - old stories, misleading reports, or pieces that continue ranking for your name long after events have passed",
  "Defamatory and smear content - anonymous blog posts, forum threads, or targeted attack content without factual basis",
  "Damaging reviews - fabricated complaints or competitor-planted ratings on Google, Yelp, Trustpilot, Glassdoor, and industry-specific platforms",
  "Mugshot and arrest record sites - prominently ranked records, particularly where charges were dropped or resolved",
  "Outdated and misleading information - content that once was accurate but now misrepresents your current standing or identity",
  "Social media and viral content - damaging posts or harmful brand mentions that surface in branded search results",
  "Competitor misinformation - content published or amplified to redirect your branded searches or undermine your market position",
  "Personal data and people-search sites - data broker listings and public record aggregators that expose personal information prominently",
  "Court records and legal filings - public records creating misleading impressions of your professional or personal history",
];

export const NLS_PROCESS_STEPS = [
  {
    step: 1,
    phase: "Comprehensive Search Audit",
    body: "We categorize every search result as negative, neutral, or positive, assess each harmful link's domain authority, and map the most effective displacement strategy",
  },
  {
    step: 2,
    phase: "Removal Opportunity Assessment",
    body: "Before Negative Link Suppression begins, we pursue every viable removal avenue - because permanent removal is always the stronger outcome",
  },
  {
    step: 3,
    phase: "Content Architecture Design",
    body: "We identify the most effective content types, highest-authority publishing platforms, and the exact keyword and topical signals needed to dominate your search terms",
  },
  {
    step: 4,
    phase: "High-Authority Content Creation",
    body: "Our editorial team creates professional, SEO-optimized articles, press features, profiles, and thought leadership pieces built to out-rank established negative results",
  },
  {
    step: 5,
    phase: "Social Profile Development",
    body: "LinkedIn, YouTube, Facebook, and X profiles rank highly for personal and business names. We create and optimize these to occupy valuable page-one positions",
  },
  {
    step: 6,
    phase: "Strategic Publishing and Amplification",
    body: "Content is published across high-domain-authority platforms, amplified through targeted link-building and digital PR, building the authority signals Google needs",
  },
  {
    step: 7,
    phase: "Technical SEO Optimization",
    body: "We optimize all positive digital properties - metadata, internal linking, structured data, and consistent brand signals across platforms",
  },
  {
    step: 8,
    phase: "AI Search Monitoring",
    body: "We monitor what AI tools like ChatGPT, Google Gemini, and Claude surface when someone asks about you, ensuring your positive content shapes those outputs too",
  },
  {
    step: 9,
    phase: "Continuous Monitoring and Reinforcement",
    body: "We track harmful link positions continuously, reinforce positive results, and address new threats before they gain traction on page one",
  },
];

export const NLS_TIMELINE_PHASES = [
  {
    n: 1,
    title: "Audit and Launch",
    timespan: "Weeks 1-4",
    body: "We map everything search engines currently show about you - every result, how strong it is, and how suppressible it is. Your strategy is built, content goes live on trusted sites, and you receive your first report",
  },
  {
    n: 2,
    title: "Early Movement",
    timespan: "Months 2-4",
    body: "Positive content begins climbing in rankings. Harmful links start dropping in position as your new content accumulates authority and engagement. You will see the first measurable displacement",
  },
  {
    n: 3,
    title: "Significant Shift",
    timespan: "Months 5-8",
    body: "The majority of harmful content moves to page two and beyond. Your positive results occupy critical first-page positions. The transformation becomes clearly visible to anyone searching your name",
  },
  {
    n: 4,
    title: "Full Transformation",
    timespan: "Months 8-11",
    body: "Your search results are dominated by authoritative, accurate content. Harmful links are effectively buried. We shift to reinforcement mode - monitoring for new threats and keeping results locked in",
  },
];

export const NLS_TIMELINE_NOTE =
  "Complex cases involving very high-authority negative content may extend beyond this timeline. We provide a situation-specific estimate during your free search analysis.";

export const NLS_WHO_WE_HELP = [
  {
    id: "individuals",
    who: "Individuals",
    why: "Mugshot sites, defamatory posts, data broker exposure - private individuals deserve control over their own name in search results",
    href: AUDIENCE_PATH.individuals,
  },
  {
    id: "executives",
    who: "Executives and Senior Leaders",
    why: "A clean, authoritative search presence supports every career move, deal, and public engagement",
    href: AUDIENCE_PATH.executives,
  },
  {
    id: "founders",
    who: "Business Owners and Founders",
    why: "Negative press, coordinated review attacks, and competitor misinformation require a Negative Link Suppression strategy that matches the threat",
    href: AUDIENCE_PATH.businesses,
  },
  {
    id: "financial",
    who: "Financial Advisors",
    why: "One harmful result can destroy the trust a client relationship is built on - Negative Link Suppression protects what years of work have earned",
    href: AUDIENCE_PATH.financialAdvisors,
  },
  {
    id: "lawyers",
    who: "Lawyers and Attorneys",
    why: "Legal coverage and court records surface regularly. We ensure what appears reflects professional track record, not past proceedings",
    href: AUDIENCE_PATH.lawyers,
  },
  {
    id: "doctors",
    who: "Doctors and Healthcare Professionals",
    why: "Patient-facing results directly influence bookings and practice reputation at the moment of decision",
    href: AUDIENCE_PATH.doctors,
  },
  {
    id: "businesses-attack",
    who: "Businesses & Companies",
    why: "Crisis situations, organized negative review campaigns, and harmful media coverage require both Negative Link Suppression and broader Reputation Management strategy",
    href: AUDIENCE_PATH.businesses,
  },
];

export const NLS_FAQS = [
  {
    q: "What is Negative Link Suppression?",
    a: "Negative Link Suppression is an SEO and content strategy that reduces the ranking of harmful, misleading, or outdated search results by systematically building and amplifying authoritative positive content that outranks them. The damaging link is pushed off page one - into pages that fewer than 10% of searchers ever visit - where it effectively becomes invisible.",
  },
  {
    q: "How does Negative Link Suppression work?",
    a: "Negative Link Suppression works by building the authority signals that determine what Google ranks for your name or brand. This involves creating optimized content on high-authority platforms, developing social media profiles, building targeted backlinks to positive assets, and amplifying through digital PR. As positive content accumulates authority, it rises in rankings while harmful content, receiving no fresh signals, loses position and slips further down.",
  },
  {
    q: "Is it possible to suppress one or two negative search results?",
    a: "Yes. Targeted Negative Link Suppression campaigns focused on one or two specific harmful links are often more straightforward than addressing a larger volume. The key variables are the domain authority of the harmful link and how competitive your name as a keyword is. Many isolated results can be displaced within a few months with a focused, well-executed campaign.",
  },
  {
    q: "How long does it take to suppress negative search results?",
    a: "Most clients see harmful links begin to drop in position within 60 to 90 days. Significant displacement from page one typically occurs within three to six months for most scenarios. High-authority links from major publications may take longer. We provide a realistic, situation-specific estimate before any campaign begins - no overpromising.",
  },
  {
    q: "What is the difference between content removal and Negative Link Suppression?",
    a: "Content removal permanently deletes harmful content at the source through legal avenues, DMCA claims, or direct publisher negotiations. Negative Link Suppression pushes content down in rankings by building positive content that outranks it. Removal is always the stronger outcome where it is possible. When it is not, Negative Link Suppression is what delivers results. In most campaigns, both run simultaneously.",
  },
  {
    q: "What types of negative content can be suppressed in Google?",
    a: "Negative Link Suppression is effective across negative news articles, defamatory blog posts, damaging reviews, mugshot and arrest record sites, outdated professional information, social media content, competitor misinformation, court records, and personal data listings. Feasibility and timeline vary by content type and the authority of the hosting site.",
  },
  {
    q: "Will suppressed content ever come back?",
    a: "With ongoing monitoring and reinforcement, suppressed content stays buried. Our approach builds genuine, lasting authority around your positive results, making it progressively harder for harmful content to resurface. Unlike campaigns built on shortcuts, white-hat Negative Link Suppression results compound rather than fade.",
  },
  {
    q: "Is Negative Link Suppression legal and ethical?",
    a: "Completely. Our methodology is based on legitimate SEO and content strategy that complies fully with Google's guidelines. We never use deceptive, spammy, or manipulative tactics. White-hat methods only - every time.",
  },
];

export const NLS_CTA = {
  title: "One Conversation Changes What People Find First",
  paragraphs: [
    "Harmful results stay until something better takes their place. We build that something.",
  ],
  freeScanLabel: "Request Your Free Search Analysis",
  consultLabel: "Speak to a Specialist Today",
  trustLine: "Confidential. No obligation. No fluff.",
};

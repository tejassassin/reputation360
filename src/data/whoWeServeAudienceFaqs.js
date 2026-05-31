/** FAQ copy from spreadsheet tab "FAQs by page" for who-we-serve audience routes. */

/** @param {string} id @param {string} question @param {string} answer */
function faq(id, question, answer) {
  return {
    id,
    question,
    answer: answer.replace(/\u2013/g, "-").replace(/\u2014/g, "-"),
  };
}

/** Personal reputation (/who-we-serve/individual) */
export const PERSONAL_REPUTATION_FAQ_ITEMS = [
  faq(
    "personal-results-improved",
    "Can my personal search results really be improved?",
    "Yes. Personal search results can be significantly improved through removal requests, suppression tactics, and the creation of positive content that ranks for your name. The degree of improvement depends on what the negative content is, where it appears, and how authoritative the source is.",
  ),
  faq(
    "personal-news-article",
    "What if there is a news article about me on Google?",
    "News articles are among the most challenging reputation problems because they appear on high-authority domains. Removal is sometimes possible through publisher outreach or legal routes. When it is not, suppression - building strong positive assets that outrank the article is the most effective approach.",
  ),
  faq(
    "personal-discretion",
    "Will anyone know I used a reputation management service?",
    "This is one of the first things most clients ask, and the answer is no. Reputation management works by building content and improving search rankings - outcomes that are indistinguishable from organic change. Nobody looking at your search results can tell whether they improved naturally or with professional support. We do not reference clients, disclose engagements, or discuss our work publicly. Your privacy is protected from the first conversation onwards.",
  ),
  faq(
    "personal-timeline",
    "How long before my search results look better?",
    "Early improvements can appear within 4-8 weeks. Significant page-one changes, particularly pushing down strong negative results typically take 6-12 months. The timeline depends on the authority of what is ranking negatively versus the strength of what we can build to compete with it.",
  ),
  faq(
    "personal-social-media",
    "Can you help if the negative content is on social media?",
    "Yes. We can help when negative content appears on social media platforms, including posts, comments, videos, profiles, or shared screenshots. First, we assess whether the content violates the platform's policies and can be reported for removal. If removal is not possible, we work on reducing its visibility, strengthening your positive online presence, and making sure one social post does not define your entire reputation.",
  ),
];

/** Financial advisors (/who-we-serve/financial-advisors) */
export const FINANCIAL_ADVISOR_FAQ_ITEMS = [
  faq(
    "fa-negative-content-types",
    "What types of negative content most affect financial advisors?",
    "The most damaging results typically include regulatory complaint records, negative client reviews, news articles about disputes, and old disciplinary actions. Each requires a different approach - some removal-eligible, some suppression-only, and some addressable through direct response strategy.",
  ),
  faq(
    "fa-finra-sec-records",
    "Can FINRA or SEC records be removed from Google?",
    "FINRA BrokerCheck and SEC EDGAR records are public regulatory databases, and they are not removable. These are government-mandated disclosures, meaning the data exists by legal requirement and neither Google nor Reputation360 can have them taken down. If you have a disclosure on BrokerCheck, a regulatory action on the SEC's database, or a related news story, it will likely continue to exist online.\n\nWhat we can do is work on what sits around it. When someone searches your name, we build a strong enough presence of professional, credible content that the regulatory record is not the first or only thing they see. For financial professionals, this often means articles, thought leadership, LinkedIn authority, and other assets that give searchers a fuller, more accurate picture of who you are. We cannot erase the record, but we can make sure it does not dominate the conversation.",
  ),
  faq(
    "fa-discretion",
    "Will my clients or compliance team know I used this service?",
    "No. All reputation management work is handled with complete discretion. The changes to your search presence appear as natural, organic improvements rather than anything that signals external intervention.",
  ),
  faq(
    "fa-realistic-results",
    "What results are realistic for a financial advisor?",
    "Realistic outcomes include negative reviews or complaint records moving off page one of Google, stronger professional profiles ranking in their place, and improved first impressions for prospective clients searching your name. Results depend on the specific content and timeline.",
  ),
];

/** Executives (/who-we-serve/executives-and-c-suite-leaders) */
export const EXECUTIVE_FAQ_ITEMS = [
  faq(
    "exec-negative-content-types",
    "What kinds of negative content most affect executives?",
    "Executives most commonly face negative press from leadership controversies, company crises, employment disputes, past allegations, or damaging opinion pieces. Because executive names are searched by investors, board members, and partners, a single result can have significant consequences.",
  ),
  faq(
    "exec-media-removal",
    "Can media coverage about me be removed from Google?",
    "Media coverage can sometimes be removed through publisher outreach, editorial corrections, or legal routes where content is factually inaccurate or privacy-invasive. Where removal is not possible, suppression ensures stronger positive content dominates your search presence.",
  ),
  faq(
    "exec-discretion",
    "How discreet is the process for senior leaders?",
    "Discretion is a core part of how we work with everyone. All engagement is strictly confidential. Board members, investors, and colleagues will not be aware of any intervention. The outcome - improved search results - appears entirely organic.",
  ),
  faq(
    "exec-major-publication",
    "What if the negative result is from a major publication?",
    "Major publications have high domain authority, making removal harder and suppression more competitive. We have successfully suppressed high-authority negative results by building a concentrated set of strong positive assets that outrank them. It takes longer but is achievable.",
  ),
  faq(
    "exec-crisis-timeline",
    "How quickly can work begin if I am in an active crisis?",
    "We can begin an initial assessment within 24 hours and have a strategy in place within 48-72 hours. For active crises, we prioritise rapid deployment of suppression and positive content strategies to get ahead of the narrative as quickly as possible.",
  ),
];

/** Doctors & healthcare (/who-we-serve/doctors-and-healthcare-professionals) */
export const DOCTOR_FAQ_ITEMS = [
  faq(
    "doctor-reviews-removed",
    "Can negative patient reviews be removed?",
    "Patient reviews can sometimes be removed if they violate a platform's content policies - for example, false information, non-patient posts, or personal attacks. Where removal is not possible, suppression tactics reduce their visibility in search results and review platform rankings.",
  ),
  faq(
    "doctor-review-platforms",
    "What about reviews on Healthgrades, Vitals, or RateMDs?",
    "These platforms have their own removal policies, which we navigate on your behalf. Where removal is not granted, we focus on improving overall ratings through legitimate review generation and suppressing the platform's ranking lower in your search results.",
  ),
  faq(
    "doctor-hipaa",
    "Is the process HIPAA-compliant?",
    "Yes. Our work involves improving public-facing search results and does not involve accessing or processing protected patient health information. Our strategies are designed with healthcare professionals' regulatory obligations in mind from the outset.",
  ),
  faq(
    "doctor-timeline",
    "How long before patients see improved search results?",
    "Early improvements can appear within 4-8 weeks. Pushing down strong negative results such as review site pages or news articles typically takes 6-12 months. We set realistic, situation-specific expectations at the start of every engagement.",
  ),
];

/** Lawyers & attorneys (/who-we-serve/lawyers-and-attorneys) */
export const LAWYER_FAQ_ITEMS = [
  faq(
    "lawyer-court-results",
    "Can court case results be removed from Google?",
    "Court records are part of the public record and are generally not removable from Google. However, specific news articles about a case may be removable under certain conditions. Where removal is not possible, suppression is used to push case-related results further down in search.",
  ),
  faq(
    "lawyer-high-profile-case",
    "Can you suppress coverage from a high-profile case?",
    "Yes, though it takes more work and more time than a typical case. When the coverage comes from major publications, those pages carry significant authority in Google's eyes, which means the content we build to outrank them has to be equally authoritative. We focus on assets that Google genuinely respects - thought leadership pieces, legal publications, industry recognition, high-domain profiles, and press in reputable outlets. Over time, these assets climb above the case coverage in search results, so it is no longer the first thing someone finds. We have worked on cases with significant media footprints and the same principles apply, the strategy just needs to be more concentrated and sustained.",
  ),
  faq(
    "lawyer-ethical",
    "Is reputation management appropriate for legal professionals?",
    "Yes. Managing your public search presence is ethical and legal for attorneys. The goal is to ensure accurate, positive information is more visible than outdated or damaging content - no different from managing how you present yourself professionally.",
  ),
  faq(
    "lawyer-complaint-sites",
    "Can you suppress legal complaint or rating websites?",
    "We have experience suppressing results from legal complaint boards, Avvo, and similar platforms. Removal requests are explored first. Where not successful, suppression tactics build competing positive content to reduce their search visibility.",
  ),
];

/** Job seekers (/who-we-serve/job-seekers) */
export const JOB_SEEKER_FAQ_ITEMS = [
  faq(
    "job-seeker-social",
    "Can employers see my old social media posts in search results?",
    "Potentially yes. Public content from Twitter/X, Facebook, and older LinkedIn posts can appear in Google results for your name. Deleting or making content private reduces visibility, but for older indexed content, suppression may also be needed to push it off page one.",
  ),
  faq(
    "job-seeker-old-news",
    "What if there is a news article about me from years ago?",
    "Old news articles are one of the most common reputation problems for job seekers. Some can be removed through publisher outreach or privacy requests. Where removal is not possible, suppression is the most effective approach. We rank stronger positive profiles and content above the article so it stops being the first thing people find.",
  ),
  faq(
    "job-seeker-interview-soon",
    "How fast can you help if I have an interview soon?",
    "If you have an interview in the near term, we can begin immediately. Some quick wins - improving LinkedIn ranking, claiming key profiles, pushing down lower-authority negative results can show results within 2-4 weeks. Stronger negative content takes longer to suppress.",
  ),
  faq(
    "job-seeker-linkedin",
    "Can you help if I just need my LinkedIn to rank higher?",
    "Yes, and this is actually one of the more straightforward things we do. LinkedIn ranks exceptionally well on Google, often appearing in the top three results for a person's name. If yours is not showing up where it should, it usually comes down to how the profile is set up, how complete it is, and whether it has enough authority signals pointing to it. We audit your profile, optimise it for search, and where needed, build supporting content that pushes it up. If you want LinkedIn to be the first thing someone sees when they search your name, that is a very achievable goal.",
  ),
];

/** Businesses (/who-we-serve/businesses-and-companies) */
export const BUSINESS_FAQ_ITEMS = [
  faq(
    "business-negative-types",
    "What types of negative results most affect businesses?",
    "The most damaging results for businesses typically include negative review aggregations, critical news coverage, complaint site pages, social media backlash, and competitor-generated content. Each type requires a tailored response - some removal-eligible, some requiring suppression.",
  ),
  faq(
    "business-google-reviews",
    "Can Google reviews be removed?",
    "Google reviews can be removed if they violate Google's review policies - fake reviews, spam, or content unrelated to genuine customer experience. Legitimate negative reviews cannot be removed, but can be diluted through legitimate positive review generation and professional responses.",
  ),
  faq(
    "business-crisis",
    "Can you help with an active reputation crisis?",
    "Yes. Crisis management requires immediate action. We prioritise rapid deployment of suppression tactics, positive content placement, and where appropriate, statement strategy. The goal is to get ahead of the narrative before it solidifies in search results and public perception.",
  ),
  faq(
    "business-cost",
    "What does business reputation management cost?",
    "Business reputation management is priced based on the scale of the problem, the number of search results to address, the industry involved, and the scope of work. We provide a custom proposal after a free assessment - with clear deliverables, timelines, and expected outcomes.",
  ),
];

/** Real Estate (/who-we-serve/real-estate-agents-and-brokers) */
export const REAL_ESTATE_FAQ_ITEMS = [
  faq(
    "re-what-is-orm",
    "What is Online Reputation Management for real estate agents?",
    "Online Reputation Management (ORM) for real estate agents is the process of controlling what appears when someone searches your name or your agency. It covers everything from how you appear in search engine results to what content ranks on page one - ensuring that the digital impression you make reflects your actual professionalism, track record, and credibility. For real estate professionals, where trust drives every transaction, it is one of the most direct levers on business performance.",
  ),
  faq(
    "re-damaged-presence",
    "How does a damaged online presence affect a real estate agent's business?",
    "The impact is both immediate and compounding. In the short term, a damaging search result reduces inbound enquiries - clients who find something concerning simply move on to another agent. Over time, the effects compound: fewer referrals close, brokerage recruiting conversations become harder, and the agent's ability to hold their commission rate erodes. Because most clients never tell you why they did not call, the damage often goes unnoticed until it becomes significant.",
  ),
  faq(
    "re-brokers-vs-agents",
    "Is Online Reputation Management relevant for brokers and agencies, or just individual agents?",
    "Both - and the stakes are different at each level. Individual agents carry the most direct exposure because their name is their brand. But brokers and agency owners face a compounded risk: a reputational issue at the brand level affects every agent, every recruitment conversation, and every new client who searches before signing. We work with individual agents, team leads, brokers, and multi-office agencies across all levels of the market.",
  ),
  faq(
    "re-timeline",
    "How long does it take to see results from a reputation management programme?",
    "For most real estate clients, meaningful movement on targeted search terms is visible within 90 days. Substantial results - including negative content pushed off page one - are typically achieved within six months. Timelines depend on the authority of the content involved and the volume of results requiring displacement. We provide a clear, honest assessment of expected timelines during the initial audit.",
  ),
  faq(
    "re-permanent-removal",
    "Can damaging content be permanently removed from the internet?",
    "In most cases, content on third-party platforms - news sites, industry publications, complaint directories - cannot be removed. What can be done is suppression: building a body of authoritative content that outranks the harmful result and reduces its visibility to the point where it no longer affects your business. Permanent removal is only possible in specific circumstances, and we will always give you a clear and honest assessment of what is and is not achievable in your situation.",
  ),
  faq(
    "re-competitive-markets",
    "Does online reputation management work for agents in competitive markets like New York, Los Angeles, or Toronto?",
    "Yes - and in highly competitive markets, it matters more. In dense agent markets, search results are often the primary differentiator between agents with similar experience and track records. A clean, authoritative search presence does not just protect you from damage - it actively positions you ahead of competitors whose online presence is weaker or unmanaged. We have experience working with real estate professionals across major US and Canadian markets.",
  ),
  faq(
    "re-how-to-start",
    "How do I get started with Reputation360?",
    "Start with a free reputation scan. We will review your current search presence across all relevant platforms, identify every result of concern, and give you an honest picture of where you stand. From there, we walk you through what a programme would look like for your specific situation - timeline, scope, and expected outcomes. There is no obligation, and no pressure to proceed.",
  ),
];

/** @param {{ q: string, a: string }[]} items */
function toFaqs(items, idPrefix = "faq") {
  return items.map((item, i) => ({
    id: `${idPrefix}-${i + 1}`,
    q: item.q,
    a: item.a,
  }));
}

/** How to Suppress Negative Content Online - A Professional's Guide */
export const SUPPRESS_NEGATIVE_GUIDE_FAQS = toFaqs([
  {
    q: "What is the first step professionals should take when suppressing negative content about themselves online?",
    a: "The first step is a full audit - searching your name in incognito mode across Google, Bing, and image search, then mapping every result by type (review, article, forum post), domain authority, and keyword trigger. You need to know exactly what you're dealing with before you can build a suppression strategy around it.",
  },
  {
    q: "Which owned properties are most effective for pushing down negative results?",
    a: "LinkedIn, a personal website, and Google Business Profile carry the most weight because of their high domain authority and Google's preference for them in professional name searches. Optimising these with your full name, credentials, and consistent NAP (name, address, phone) data gives them the best chance of outranking harmful content.",
  },
  {
    q: "How does content creation help suppress negative search results?",
    a: "Google needs enough strong, relevant content to fill its first page with positive results - suppression is essentially a displacement strategy. Publishing bylined articles on high-authority sites, contributing to industry publications, and creating long-form content on your own domain all compete for the same page-one positions the negative content currently holds.",
  },
  {
    q: "Do citations and backlinks actually move the needle in suppression campaigns?",
    a: "Yes. A profile or article that sits on page two won't suppress anything. Building backlinks from credible sources signals to Google that your positive content is authoritative and relevant, which directly improves its ranking position. Citations also reinforce consistent identity signals across the web, which strengthens overall name-search visibility.",
  },
]);

/** DIY Online Reputation Management - A Practical Guide */
export const DIY_REPUTATION_GUIDE_FAQS = toFaqs(
  [
    {
      q: "Can someone manage their own online reputation without hiring an agency?",
      a: "Yes, particularly in the early stages or when the damage is limited. The DIY approach works best when the negative content is low-authority, when you have time to publish content consistently, and when no legal content (news articles, court records) is involved. For persistent or high-authority negative results, professional help typically accelerates the timeline significantly.",
    },
    {
      q: "What platforms should be prioritised in a self-managed reputation campaign?",
      a: "Start with LinkedIn (DA 98), then a personal website or WordPress blog, then Google Business Profile if you're a business owner or freelancer. These three carry the most weight in name searches and are fully within your control to optimise. Secondary platforms like Crunchbase, About.me, and Muck Rack add volume and variety.",
    },
    {
      q: "How should someone handle negative reviews as part of a DIY strategy?",
      a: "Respond professionally and promptly to every negative review - never delete or ignore them. For false or policy-violating reviews, flag them through the platform's reporting tools. Simultaneously, encourage satisfied clients to leave genuine positive reviews. A pattern of positive, recent reviews signals to both Google and readers that the negative review is an outlier.",
    },
    {
      q: "What is a realistic week-by-week timeline for DIY reputation management?",
      a: "Weeks 1-2: complete the audit and claim all major profiles. Weeks 3-4: optimise LinkedIn and launch a personal website. Month 2: begin publishing content (bylines, blog posts) and building citations. Month 3 onward: monitor results, respond to reviews, and maintain a consistent publishing cadence. Most people start seeing movement in search results between months 3 and 6.",
    },
  ],
  "diy-faq",
);

/** How to Remove Negative Search Results from Google */
export const REMOVE_NEGATIVE_SEARCH_RESULTS_FAQS = toFaqs([
  {
    q: "What is the difference between removing a search result and suppressing it?",
    a: "Removal means the content is deleted from the source or deindexed from Google - it no longer exists in search results. Suppression means the content still exists but is pushed to page two or beyond where almost no one sees it. Removal is more complete but far harder to achieve; suppression is more reliable and scalable.",
  },
  {
    q: "When will Google actually remove a search result through its own tools?",
    a: "Google will remove content through its URL removal tool in specific circumstances: if the source page has been deleted and shows a 404, if it contains sensitive personal information (bank details, medical records, explicit images shared without consent), or if it was court-ordered for removal under Right to Be Forgotten in eligible countries. Opinion, criticism, and accurate news articles are generally not removed.",
  },
  {
    q: "What legal routes exist for removing negative content from search results?",
    a: "Legal options include sending a cease-and-desist to the publisher, issuing a DMCA takedown for plagiarised or stolen content, pursuing a defamation claim if the content is provably false and harmful, or seeking a court order. These routes are expensive and slow, with no guaranteed outcome - they are best reserved for clear defamation or privacy violations.",
  },
  {
    q: "Does contacting the publisher directly actually work?",
    a: "Sometimes - particularly for outdated content, honest mistakes, or minor publications that have no strong reason to keep the content live. Success rate improves if you can point to a factual error, offer a correction, or show that the content is causing disproportionate harm relative to its news value. Major news outlets and high-traffic review sites rarely comply with takedown requests.",
  },
]);

/** How Long Does It Take to Fix Your Online Reputation? */
export const REPUTATION_REPAIR_TIMELINE_FAQS = toFaqs([
  {
    q: "What is the minimum time someone should expect before seeing results from a reputation management campaign?",
    a: "Most campaigns show the first measurable movement in search results within 60-90 days. This is the time Google needs to crawl, index, and begin ranking newly created or optimised content. Visible page-one improvements for competitive name searches typically take 4-6 months with consistent effort.",
  },
  {
    q: "Does the severity of the negative content affect how long repair takes?",
    a: "Significantly. A single low-authority forum post can be displaced in weeks; a high-authority news article from a major publication may take 12-18 months of sustained content building and link acquisition. Court records and .gov URLs are among the hardest to suppress due to their inherent domain authority.",
  },
  {
    q: "Why do some reputation campaigns stall after initial progress?",
    a: "Progress often stalls when content creation slows down or stops. Suppression is not a one-time fix - Google continues to re-evaluate rankings as new content is published across the web. Campaigns that maintain a consistent output of high-quality content and continue building backlinks sustain momentum; those that stop after initial gains often see the negative content creep back up.",
  },
]);

/** Can You Remove News Articles from Google Search? */
export const REMOVE_NEWS_ARTICLES_FAQS = toFaqs([
  {
    q: "Is it possible to have a news article permanently removed from Google?",
    a: "Permanent removal is rare. News publishers have little incentive to delete accurate reporting, and Google does not remove content simply because someone finds it embarrassing or damaging. Removal is realistic in cases of demonstrable factual error, defamation, or under Right to Be Forgotten rules for eligible EU and UK residents.",
  },
  {
    q: "What is the Right to Be Forgotten and does it apply in the US?",
    a: "The Right to Be Forgotten is a legal provision under GDPR (EU) and the UK Data Protection Act that allows individuals to request removal of outdated or irrelevant personal information from search results. It does not apply in the United States, Australia, or Canada - jurisdictions where Reputation360 primarily serves clients. US residents must rely on publisher outreach, legal action, or suppression instead.",
  },
  {
    q: "If removal isn't possible, what is the most effective alternative?",
    a: "Suppression - building and ranking enough positive, high-authority content to push the news article to page two or beyond. Most people never scroll past page one, so a suppressed article effectively loses its ability to cause damage even if it technically still exists in Google's index.",
  },
  {
    q: "How long does it take to suppress a news article ranking on page one?",
    a: "Typically 6-18 months depending on the article's domain authority, how many other results are competing for the same name search, and how aggressively the suppression campaign is executed. Articles on major news sites (DA 80+) take longer than those on smaller publications (DA 20-40).",
  },
]);

/** blog20 - How AI Search Is Changing Online Reputation Management */
export const AI_SEARCH_REPUTATION_FAQS = toFaqs([
  {
    q: "How does AI search (ChatGPT, Perplexity, Google AI Overviews) differ from traditional Google search for reputation purposes?",
    a: "Traditional Google search displays links that users then click through; AI search synthesises those sources into a direct answer. This means your reputation is now shaped not just by which results rank, but by what AI models say about you - and AI draws from training data that may be months or years out of date, has no real-time correction mechanism, and is opaque about its sources.",
  },
  {
    q: "Can a good Google reputation automatically translate into a good AI reputation?",
    a: "Not automatically. AI models are trained on historical data and may continue surfacing outdated or negative information even after Google's search results have improved. Reputation management for AI requires a separate layer of strategy: publishing structured, factual content on highly crawled platforms, seeding third-party endorsements, and monitoring what AI tools actually say about you - not just what ranks on Google.",
  },
  {
    q: "What content formats are most effective for influencing AI-generated reputation summaries?",
    a: "Structured factual content on high-authority, heavily crawled platforms - Wikipedia, LinkedIn, Crunchbase, major news outlets, industry associations. AI models weight consistency and source authority heavily. Multiple credible sources saying the same positive thing about you are more likely to be reflected in AI-generated answers than a single piece of owned content.",
  },
  {
    q: "How often should someone audit their AI search reputation?",
    a: "Quarterly at minimum. AI models update their training data on irregular cycles, and new versions of tools like ChatGPT and Perplexity may be trained on different datasets. A quarterly check - searching your name or brand across ChatGPT, Perplexity, Google AI Overviews, and Gemini - catches new issues before they become entrenched.",
  },
]);

/** blog19 - Social Media Reputation Management */
export const SOCIAL_MEDIA_REPUTATION_FAQS = toFaqs([
  {
    q: "Which social media platform matters most for online reputation?",
    a: "LinkedIn carries the most reputational weight for professionals - it ranks extremely highly in Google name searches (DA 98), is trusted by recruiters and business decision-makers, and is actively looked for. For consumer brands, Google Business Profile and Facebook reviews tend to dominate. The right priority depends on your audience and the type of searches being done about you.",
  },
  {
    q: "How should someone respond to a reputational attack or negative pile-on on social media?",
    a: "Respond once, calmly, and on the record - acknowledge any legitimate concern, correct factual errors, and direct the conversation offline where appropriate. Do not delete comments (it signals cover-up), do not engage repeatedly with bad-faith actors, and do not respond in anger. The first 48 hours are critical; a composed, factual response limits amplification.",
  },
  {
    q: "Should old, potentially damaging social media posts be deleted?",
    a: "Deletion is appropriate for content that is genuinely harmful, offensive, or factually wrong - but do it quietly and early, not reactively after attention has been drawn to it. Publicly deleting content under pressure signals guilt and can amplify the story. For posts that are simply outdated or cringe-worthy, the risk of drawing attention often outweighs the benefit of removal.",
  },
  {
    q: "How far back should a social media audit go when preparing for a high-stakes opportunity?",
    a: "At least five years, and ideally to account creation. Algorithms and screenshot archives mean old content resurfaces unpredictably. For executives, candidates for public roles, or anyone facing a background check, a thorough historical audit covering all platforms - including accounts that may have been deactivated - is the only reliable approach.",
  },
]);

/** blog18 - How to Monitor Your Online Reputation */
export const MONITORING_REPUTATION_FAQS = toFaqs([
  {
    q: "What is the minimum viable monitoring setup for an individual professional?",
    a: 'Google Alerts set for your full name (in quotes), your name plus your company, and your name plus your job title. This is free, takes five minutes to configure, and catches most new mentions. Add a secondary alert for common misspellings of your name. This won\'t catch everything - it misses social media and gated platforms - but it\'s a functional baseline.',
  },
  {
    q: "What do paid monitoring tools offer that Google Alerts don't?",
    a: "Paid tools like Brand24 and Mention monitor social media, forums, and platforms Google Alerts can't reach. They also provide sentiment analysis, reach estimates, and trend tracking - so you can see not just that you were mentioned, but whether the overall sentiment around your name is improving or declining. SEMrush adds search ranking data, letting you track whether positive content is actually moving up in results.",
  },
  {
    q: "How should monitoring results be escalated - what counts as urgent vs. routine?",
    a: "Urgent: a new negative result appearing on page one, a viral social media mention with significant engagement, any content containing false factual claims, or media enquiries. Routine: neutral brand mentions, new positive reviews, minor forum references. The escalation threshold should be defined in advance - waiting until you see the problem to decide how to respond wastes the critical early response window.",
  },
  {
    q: "How frequently should a full reputation audit be conducted beyond day-to-day monitoring?",
    a: "A full manual audit - incognito search across multiple browsers, image search, news search, and social media sweep - should be done monthly. A deeper quarterly review should include tracking search ranking positions for your target keywords and reviewing what AI tools say about you. Annual reviews should assess the overall health of your digital footprint and update the strategy accordingly.",
  },
]);

/** blog17 - Building a Positive Google Presence Through Profile Claiming */
export const PROFILE_CLAIMING_FAQS = toFaqs([
  {
    q: "Why does claiming profiles on third-party platforms help reputation?",
    a: "High-authority platforms like LinkedIn (DA 98), Crunchbase, and About.me rank strongly in Google searches because they have enormous domain authority accumulated over years. Claiming and optimising a profile on these sites gives Google a credible, positive result to rank for your name without requiring you to build that authority yourself. It's the fastest way to populate the first page with content you control.",
  },
  {
    q: "Which platforms should be claimed first for maximum impact?",
    a: "LinkedIn first - it consistently ranks in the top 3 for professional name searches and has the highest domain authority. Then Google Business Profile, Wikipedia (if qualifying), Crunchbase, and press platforms like Muck Rack or HARO contributor profiles. Claim the platforms that rank best in name searches for your industry and audience first, then fill in secondary platforms for volume.",
  },
  {
    q: "How long does a newly claimed profile take to rank in Google?",
    a: "A well-optimised LinkedIn profile can rank within days on an established account, or 2-4 weeks on a newly created one. Crunchbase and similar aggregator profiles typically index within 1-2 weeks. Press mentions and bylines on high-authority publications can rank in hours. The ranking timeline depends on how frequently Google crawls the platform and how much competition exists for the name search.",
  },
]);

/** blog16 - The ROI of Online Reputation Management */
export const ROI_REPUTATION_FAQS = toFaqs([
  {
    q: "How does a strong online reputation translate into measurable financial value for individuals?",
    a: "Professionals with a strong, well-managed digital presence command a documented salary premium of 10-20% versus peers with weak or negative search results. Recruiters routinely screen candidates online, and candidates who control their narrative with credible content - articles, LinkedIn, board memberships - are more likely to advance through selection processes and negotiate stronger offers.",
  },
  {
    q: "What return does reputation management deliver for businesses?",
    a: "Research consistently shows conversion rates lift 15-35% when a business's average review score moves from below 4 stars to above 4.5 stars. A single star improvement on Google can increase revenue by 5-9% for local businesses. These are not marginal gains - for a business with $500K in annual revenue, a 20% conversion lift is a $100K+ return.",
  },
  {
    q: "How should crisis prevention be factored into the ROI calculation?",
    a: "Crisis management should be treated as cost avoidance. A single viral reputation incident costs an average mid-sized business $500K-$2M in lost deals, emergency PR fees, legal costs, and staff time. Proactive reputation management - maintaining a strong positive baseline - significantly reduces both the likelihood of a crisis and its severity if one occurs. The insurance framing is more honest than projecting a specific return.",
  },
]);

/** blog15 - ORM Best Practices */
export const ORM_BEST_PRACTICES_FAQS = toFaqs([
  {
    q: "What is the foundation of an effective ORM strategy?",
    a: "Intelligence comes first - a thorough audit of your current search landscape, identifying every result, its authority, and its keyword trigger. Without an accurate map of the problem, any strategy is guesswork. The audit defines which assets need to be built, which platforms to prioritise, and what the realistic suppression timeline looks like.",
  },
  {
    q: "Why is transparency listed as a reputation management principle?",
    a: "Because attempts to manufacture or deceive - fake reviews, astroturfed content, undisclosed paid placements - consistently backfire and create worse reputational damage than the original problem. Effective ORM builds genuine credibility: real bylines, honest profiles, authentic reviews. Transparency also protects against future exposure of the ORM campaign itself.",
  },
  {
    q: 'How important is the "monitor and maintain" phase compared to the initial build?',
    a: "Equally important. Search rankings are dynamic - new content is published constantly, and a result that was on page two last month can return to page one if your positive content stops being updated or loses link authority. Ongoing monitoring, regular content publication, and periodic audits are what sustain suppression results over the long term. Most campaigns that fail do so in the maintenance phase, not the build phase.",
  },
]);

/** blog14 - Hidden Cost of Ignoring Reputation */
export const HIDDEN_COST_REPUTATION_FAQS = toFaqs([
  {
    q: "What is the documented financial impact of a poor online reputation on career earnings?",
    a: "Professionals with unmanaged or negative search results earn measurably less - studies indicate a 10-20% salary gap versus peers with strong digital presences. Over a 20-year career, that compounds into hundreds of thousands of dollars in foregone earnings, lost promotions, and opportunities that simply never materialised because a decision-maker Googled the candidate and moved on.",
  },
  {
    q: "At what point does neglected reputation damage become irreversible?",
    a: "The danger point is when negative content achieves sustained high-authority backlinks and citation patterns. Once a negative article has been referenced and linked to by other publications, it becomes structurally embedded in the web - much harder to displace because suppression campaigns have to overcome not just the original page but its entire link graph. Early action, when content is fresh and linkless, is exponentially cheaper than later intervention.",
  },
  {
    q: "How does a poor reputation affect business conversion specifically?",
    a: "Businesses with an average rating below 3.5 stars see 74% fewer conversions than competitors above that threshold. 87% of consumers will not engage with a business that has a below-average rating. This is not a soft brand impact - it's a direct, quantifiable revenue reduction that compounds every month the reputation remains unaddressed.",
  },
]);

/** blog13 - Why Your First Google Results Matter */
export const FIRST_GOOGLE_RESULTS_FAQS = toFaqs([
  {
    q: "Why do search results that appear first disproportionately influence how someone is perceived?",
    a: "The anchoring effect - the first piece of information encountered shapes how all subsequent information is interpreted. If someone's first result is a negative article, everything positive they find later is filtered through that initial negative frame. This is a documented cognitive bias, not a subjective preference, and it applies equally to employers, investors, journalists, and potential clients.",
  },
  {
    q: "What percentage of clicks actually go to the first Google result versus lower positions?",
    a: "Position one captures approximately 31% of all clicks for a given search. By position five, that drops to around 7%. Position ten - still on page one - receives less than 2%. Results on page two and beyond are functionally invisible to most searchers. This means a single negative result at position one has an outsized impact compared to multiple positive results at positions six through ten.",
  },
  {
    q: 'How does the "halo effect" work in the context of search results?',
    a: "If someone's first few Google results are strong - a polished LinkedIn profile, a published byline, a credible press mention - viewers extend a positive assumption to everything else they know about that person, including information they haven't actually verified. The reverse is also true: one negative early result (the horns effect) taints the interpretation of otherwise neutral information found later in the search.",
  },
]);

/** blog12 - Own Your First Page */
export const OWN_FIRST_PAGE_FAQS = toFaqs([
  {
    q: 'What does it mean to "own" the first page of Google results for your name?',
    a: "Owning your first page means the ten positions on page one for your name search are occupied by content you either created or can meaningfully influence - LinkedIn, a personal website, press mentions, Crunchbase, social profiles, bylines. When you control these positions, no third party can publish a single negative result and immediately damage your reputation, because they'd need to outrank nine established, high-authority assets.",
  },
  {
    q: "What are the most powerful asset categories for first-page ownership?",
    a: "LinkedIn and a personal website are the highest-value owned assets. Wikipedia and Crunchbase carry significant domain authority and rank strongly if they can be legitimately created. Press mentions and bylines in credible publications add authority signals that are difficult to replicate with owned content alone. Social profiles (Twitter/X, Instagram, YouTube) add volume and variety that reinforce the overall positive footprint.",
  },
  {
    q: "In what order should first-page assets be built?",
    a: "Foundation first - LinkedIn and personal website, fully optimised with consistent name, bio, and keywords. Then authority assets - Crunchbase, any press or bylines, Wikipedia if applicable. Then reinforcement - secondary social profiles, additional directory listings, guest contributor profiles. Building foundation before authority ensures you have stable assets for links to point to before investing in link acquisition.",
  },
]);

/** blog11 - Fix Reputation Before Job Interview */
export const JOB_INTERVIEW_REPUTATION_FAQS = toFaqs([
  {
    q: "What should someone specifically search for when auditing their reputation before a job application?",
    a: "Search your full name in quotes, your name plus current employer, your name plus city, and your name plus your professional title. Do this in an incognito browser to see results without personalisation. Also run an image search - profile photos and tagged images surface separately. Social accounts that you consider private often still appear in search results, particularly Twitter/X and LinkedIn.",
  },
  {
    q: "What is the single most impactful thing someone can do in 30 days to improve their search presence before an interview?",
    a: "Fully optimise their LinkedIn profile - professional photo, keyword-rich headline, complete experience and education sections, and at least three skills endorsements. LinkedIn ranks in the top three for virtually every professional name search, and a polished profile creates a strong first impression that counteracts minor negative results elsewhere.",
  },
  {
    q: "How should someone handle genuinely damaging results that can't be removed before an interview?",
    a: "Prepare a brief, factual statement that addresses the issue if asked - interviewers who have seen something significant will often probe indirectly. More importantly, ensure there is enough positive, recent content to contextualise the negative result. A strong LinkedIn, published articles, and positive press mean a recruiter encounters your achievements before finding the problematic result, which changes the weight they assign to it.",
  },
]);

/** blog10 - What Do Recruiters Google */
export const RECRUITERS_GOOGLE_FAQS = toFaqs([
  {
    q: "What specific searches do recruiters typically run when vetting candidates?",
    a: 'Most recruiters run four searches: the candidate\'s full name, name plus current company, name plus a past employer (particularly if there\'s a gap or short tenure), and a social media scan. Some also search name plus "reviews" or name plus "complaints" - particularly for senior roles. Understanding this sequence helps candidates prioritise which results to address first.',
  },
  {
    q: "What search results immediately raise red flags for recruiters?",
    a: "News articles about legal issues, regulatory actions, or fraud; consumer complaint sites with named complaints; social media posts showing discriminatory, aggressive, or embarrassing behaviour; significant discrepancies between the CV and public information; and an absence of any professional presence (which raises questions rather than providing reassurance).",
  },
  {
    q: "What digital presence actually impresses recruiters?",
    a: "A complete, professional LinkedIn profile is the baseline expectation. Above that: bylined articles in relevant publications, speaking engagement profiles or conference appearances, board memberships or advisory roles, industry association profiles, and positive press mentions. Evidence of thought leadership - published opinions, cited expertise - signals a candidate who is serious about their field.",
  },
]);

/** blog09 - LinkedIn Profile Optimisation */
export const LINKEDIN_OPTIMIZATION_FAQS = toFaqs([
  {
    q: "Which LinkedIn fields matter most for ranking in Google name searches?",
    a: 'The headline and the current position title are the highest-weighted fields for both LinkedIn\'s internal search and Google indexing. Your full name as it appears on your profile must match how people search for you. The "About" section, skills, and endorsements contribute to internal LinkedIn ranking. Profile completeness (LinkedIn\'s "All-Star" status) also affects how prominently the profile appears.',
  },
  {
    q: "How can LinkedIn be used proactively to push down negative search results?",
    a: "A fully optimised LinkedIn profile - professional photo, complete experience, regular activity (posts, articles, comments) - tends to rank in positions one through three for almost every professional name search. Because it typically outranks the negative content, it becomes the first impression a searcher receives. Keeping it active with regular posts also gives Google fresh signals that keep it ranked highly.",
  },
  {
    q: "Does the LinkedIn profile URL affect search rankings?",
    a: "Yes. Customising your LinkedIn URL to your name (linkedin.com/in/yourname) rather than the default alphanumeric string improves the relevance signal for your name search and creates a cleaner, shareable link. It's a small change with a disproportionate impact on how clearly Google identifies the profile as being specifically about you.",
  },
]);

/** blog08 - Crisis Management */
export const CRISIS_MANAGEMENT_FAQS = toFaqs([
  {
    q: "What are the most critical actions to take in the first 48 hours of a reputational crisis?",
    a: "Document everything - screenshot all references, note URLs, engagement metrics, and timestamps. Assess the source and its authority. Issue one factual, composed public response if the situation warrants it. Brief key internal stakeholders. Do not attempt to suppress or delete evidence, and do not make public statements that contradict verifiable facts. The first 48 hours set the trajectory - reactive or controlled.",
  },
  {
    q: "How does the crisis management timeline break down across phases?",
    a: "Phase one (days 1-14) is containment: limit spread, issue initial response, secure positive assets. Phase two (weeks 2-8) is stabilisation: begin content creation, engage media proactively if appropriate, monitor sentiment. Phase three (months 2-6) is recovery: build consistent positive presence, push negative content down search results. Phase four (month 8+) is resilience: establish monitoring systems and content programmes that prevent future crises.",
  },
  {
    q: "Why do some crisis responses make the situation worse?",
    a: "Overcorrection, dishonesty, or aggressive legal threats often amplify the original story. The Streisand Effect - where attempts to suppress information draw more attention to it - is well-documented. Responses that attack the source, issue blanket denials of verifiable facts, or attempt to intimidate journalists or reviewers escalate rather than resolve. A measured, factual, empathetic response consistently outperforms aggressive suppression attempts.",
  },
  {
    q: "Can a reputation fully recover after a serious crisis?",
    a: "Yes, but the timeline is longer than most people expect - typically 12-24 months for a serious incident with significant media coverage. Full recovery doesn't mean the content disappears; it means it no longer ranks on page one and no longer shapes the first impression a searcher receives. Many individuals and businesses emerge from crises with stronger, more resilient reputations than they had before, because the process forces them to build a more credible and consistent presence.",
  },
]);

/** blog07 - Court Records */
export const COURT_RECORDS_FAQS = toFaqs([
  {
    q: "Why do court records rank so highly in Google search results?",
    a: "Court records and legal databases have extremely high domain authority - .gov domains, state judiciary sites, PACER, and aggregators like CourtListener carry the kind of authority that's nearly impossible to outrank with new content alone. Google treats government sources as highly credible, which is why court records persistently appear at the top of name searches even years after a case is resolved.",
  },
  {
    q: "Does expungement remove court records from Google?",
    a: "Expungement seals or destroys the official court record, but it does not automatically remove content from Google's index or from third-party sites that copied the original records. Data broker sites, news articles covering the original arrest or case, and court record aggregators often retain the information even after official expungement. A separate campaign targeting each of these sources is typically required.",
  },
  {
    q: "What is the most effective strategy for managing court records that can't be removed?",
    a: "Suppression is the primary tool. The goal is to build enough high-authority positive content - LinkedIn, personal site, press coverage, bylines, Crunchbase - to displace the court record from page one. Simultaneously, contact data broker sites individually to request removal under applicable privacy laws. Some record aggregator sites (not the government sites themselves) will remove listings upon request or for a fee.",
  },
]);

/** blog06 - Negative Links Case Studies */
export const NEGATIVE_LINKS_CASES_FAQS = toFaqs([
  {
    q: "What types of negative content most commonly derail professional opportunities?",
    a: "Based on real cases, the four most damaging types are: news coverage of regulatory or legal inquiries (even unresolved ones), fake or competitor-generated negative reviews at scale, name collisions with another person who has a problematic history, and old arrest or incident stories that no longer reflect a person's circumstances. Each requires a different approach - suppression, review strategy, disambiguation, or timeline-based suppression respectively.",
  },
  {
    q: "How long does it take for a negative link to start affecting business outcomes?",
    a: "Often immediately. Decision-makers who Google someone before a meeting, investment, or hire typically do so in the days or hours beforehand. A single negative result ranking in position one can eliminate a candidate or deal before any further contact is made - the person never knows why the opportunity didn't progress. This is why proactive management, before the opportunity arises, is so important.",
  },
  {
    q: "What do the successful resolution cases in these studies have in common?",
    a: "Every resolved case combined two things: a suppression strategy that built enough positive content to displace the negative result, and patience. None of the cases resolved in weeks - most took 4-12 months. The cases that failed or stalled were typically ones where content creation was inconsistent, where the client tried legal suppression as a shortcut, or where the negative content was too high-authority (major news site, .gov URL) to displace with the volume of content being produced.",
  },
]);

/** blog05 - Old Social Media Posts */
export const OLD_SOCIAL_POSTS_FAQS = toFaqs([
  {
    q: "Why do social media posts from years ago still appear in Google search results?",
    a: "Google indexes public social media content and maintains that index unless the content is deleted or the platform blocks indexing. Additionally, screenshots and cached versions of posts circulate independently of the original - even if you delete the post, the screenshot may still exist on other platforms or in Google's cache. Archive sites like the Wayback Machine also preserve public pages regardless of later deletion.",
  },
  {
    q: "How can someone remove an old social media post from Google's search results?",
    a: "First, delete the original post from the platform. Then submit a URL removal request through Google Search Console - this removes the cached version from Google's index, though Google may re-crawl the URL and confirm it's gone. For content on third-party sites (screenshots, reposts), you'll need to contact the site owner or use the platform's flagging tools. The Google URL removal tool is a temporary measure; permanent removal requires the source content to be gone.",
  },
  {
    q: "If an old post can't be removed, what's the best approach?",
    a: "A combination of social media cleanup (making remaining accounts private or fully optimised and professional) and suppression through positive content creation. Publishing high-quality content on platforms that rank above the problematic social media account - LinkedIn articles, a personal website, bylines - pushes the old post further down the results page where it's seen by far fewer people.",
  },
]);

/** blog03 - Removal vs Suppression */
export const REMOVAL_VS_SUPPRESSION_FAQS = toFaqs([
  {
    q: "What are the three realistic routes to actual content removal?",
    a: "First, publisher outreach - asking the site owner to delete or update content, which works for factual errors and minor publications with no strong interest in keeping it live. Second, platform reporting - flagging content that violates the hosting platform's terms of service, which works for defamatory, harassing, or privacy-violating content. Third, legal action - a cease-and-desist, DMCA notice, or court order, which is expensive, slow, and uncertain in outcome.",
  },
  {
    q: "Why does removal so often fail even when the content seems clearly harmful?",
    a: "Publishers have broad legal protections for opinions and reporting, even when the content is damaging. Most negative content about public figures and business activities is protected speech. Unless content is demonstrably false, violates platform policies, or falls under a specific legal exception, publishers have no obligation to remove it - and many don't, even when asked politely.",
  },
  {
    q: "What are the practical advantages of suppression over removal?",
    a: "Suppression works regardless of the content's legal status or the publisher's cooperation. It doesn't require anyone else to act. It improves the overall quality of your search presence, not just removes one negative result. And it's scalable - the same positive content infrastructure that suppresses one harmful link also raises your overall reputation baseline and makes future problems easier to address.",
  },
]);

/** blog02 - Rank Positive Content */
export const RANK_POSITIVE_CONTENT_FAQS = toFaqs([
  {
    q: "What signals does Google use to rank one piece of content above another for a name search?",
    a: "The three primary signals are relevance (does the content clearly relate to the name being searched), authority (how credible and well-linked is the domain and specific page), and engagement (are users clicking on this result and staying on the page). For name searches, Google also weights consistency - the same name, employer, and credentials appearing across multiple credible sources reinforces the relevance signal.",
  },
  {
    q: "Which content types are most effective for outranking negative results?",
    a: "In order of ranking potential: high-authority third-party profiles (LinkedIn, Wikipedia, Crunchbase), press coverage and bylines in credible publications, owned media (personal website, blog), and social profiles with consistent activity. Press and bylines from authoritative outlets often rank faster than owned content because they borrow the domain authority of the publication.",
  },
  {
    q: "How long does it typically take to rank positive content above a negative result?",
    a: "Against low-authority content (personal blogs, minor forums, small review sites), positive content can rank above within 4-8 weeks. Against mid-authority content (industry publications, moderately trafficked news sites), expect 3-6 months. Against high-authority content (.gov, major newspapers, DA 70+ sites), it may take 12-18 months of sustained, high-volume content and link building to achieve consistent displacement.",
  },
]);

/** blog01 - Suppress Framework */
export const SUPPRESS_FRAMEWORK_FAQS = toFaqs([
  {
    q: "What are the five phases of the Reputation360 suppression framework?",
    a: "The framework progresses through: (1) Audit - mapping every search result by type, authority, and keyword; (2) Foundation - claiming and optimising all high-authority owned profiles; (3) Content - building a programme of original, high-quality content on owned and earned platforms; (4) Authority - acquiring backlinks and citations that raise the ranking of positive assets; (5) Maintenance - ongoing monitoring, content publication, and adaptation as the search landscape evolves.",
  },
  {
    q: "Why is the audit phase so important before beginning suppression?",
    a: "Without a clear map of what's ranking, why it's ranking, and what keywords trigger each result, you risk building content that doesn't compete with the problem. The audit identifies the domain authority of each negative result, the specific search queries that surface it, and whether removal or suppression is the more realistic approach. This determines where resources should be focused and sets a baseline against which progress can be measured.",
  },
  {
    q: "How does the suppression framework handle negative content on very high authority sites?",
    a: "High-authority negative content (major newspapers, .gov domains, high-DA industry publications) requires a volume-and-authority approach rather than a single strong competing piece. The strategy involves building multiple high-authority assets that collectively outweigh the negative result - LinkedIn, personal site, press coverage from several credible outlets, Wikipedia, Crunchbase - so that even if no single asset outranks it, the aggregate page-one landscape pushes it to position ten or off the page entirely.",
  },
]);

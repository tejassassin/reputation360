/**
 * Illustrative SERP-style rows when Google CSE is unavailable or returns nothing.
 * Same shape as Google CSE items for classification.
 */

/**
 * @param {string} s
 */
function slugify(s) {
  const t = s
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return t || "name";
}

/** Matches scan cap when CSE is unavailable (legacy tests only; product scan requires live CSE). */
const ILLUSTRATIVE_SERP_SLOTS = 30;

/**
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} country
 * @param {string} locationHint
 * @returns {import('./classifySerp.js').SerpItem[]}
 */
export function buildFallbackSerpItems(firstName, lastName, country, locationHint) {
  const full = `${firstName.trim()} ${lastName.trim()}`.trim() || "Your name";
  const slug = slugify(full);
  const first = firstName.trim() || "You";
  const last = lastName.trim() || "Profile";
  const loc = locationHint ? ` (${locationHint})` : "";

  /** @type {import('./classifySerp.js').SerpItem[]} */
  const rows = [
    {
      title: `${full} | LinkedIn`,
      link: `https://www.linkedin.com/pub/dir?first=${encodeURIComponent(first)}&last=${encodeURIComponent(last)}`,
      displayLink: "www.linkedin.com",
      snippet: `View ${full}'s professional profile on LinkedIn.${loc}`,
    },
    {
      title: `${first} ${last} on X`,
      link: `https://x.com/search?q=${encodeURIComponent(full)}&src=typed_query&f=user`,
      displayLink: "x.com",
      snippet: `Posts and activity related to "${full}" on X.`,
    },
    {
      title: `${full} - news and mentions`,
      link: `https://www.google.com/search?q=${encodeURIComponent(`${full} news`)}&tbm=nws`,
      displayLink: "news.google.com",
      snippet: `News articles that may reference ${full}. Open links to verify context.`,
    },
    {
      title: `${full} | Crunchbase`,
      link: `https://www.crunchbase.com/textsearch?q=${encodeURIComponent(full)}`,
      displayLink: "www.crunchbase.com",
      snippet: `Discover affiliations and professional connections associated with this name.`,
    },
    {
      title: `Workplace reviews mentioning "${first}"`,
      link: `https://www.google.com/search?q=${encodeURIComponent(`${full} reviews site:glassdoor.com OR site:indeed.com`)}`,
      displayLink: "www.glassdoor.com",
      snippet: `Review-type pages can rank for individuals. Tone and accuracy vary widely.`,
    },
    {
      title: `${full} - Wikipedia search`,
      link: `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(full)}`,
      displayLink: "en.wikipedia.org",
      snippet: `Reference pages sometimes rank for notable names. Confirm whether the page is about you.`,
    },
    {
      title: `Speaker and conference bios: ${full}`,
      link: `https://www.google.com/search?q=${encodeURIComponent(`${full} speaker OR conference`)}`,
      displayLink: "www.google.com",
      snippet: `Programs and PDFs often rank for professionals and shape first impressions.${country ? ` Region context: ${country}.` : ""}`,
    },
    {
      title: `${slug.slice(0, 24)} - personal site or portfolio`,
      link: `https://www.google.com/search?q=${encodeURIComponent(`${full} portfolio OR personal site`)}`,
      displayLink: "www.google.com",
      snippet: `Personal domains and portfolios are common positive signals when they are accurate and maintained.`,
    },
  ];

  const queryVariants = [
    `${full} biography`,
    `${full} podcast OR interview`,
    `${full} site:medium.com`,
    `${full} site:substack.com`,
    `${full} publications OR author`,
    `${full} board OR advisor`,
    `${full} keynote OR speaker`,
    `${full} site:behance.net OR site:dribbble.com`,
    `${full} alumni OR university`,
    `${full} press release`,
    `${full} industry report`,
    `${full} site:github.com`,
    `${full} ORM OR reputation`,
    `${full} site:zoominfo.com OR directory`,
    `${full} professional headshot OR photo`,
    `${full} conference OR summit`,
    `${full} whitepaper OR PDF`,
    `${full} site:reddit.com`,
    `${full} site:youtube.com`,
    `${full} patent OR trademark`,
    `${full} nonprofit OR board`,
    `${full} site:scribd.com OR slides`,
  ];

  for (let slot = rows.length + 1; slot <= ILLUSTRATIVE_SERP_SLOTS; slot++) {
    const q = queryVariants[(slot - 9) % queryVariants.length];
    rows.push({
      title: `${full} - related web results (${slot})`,
      link: `https://www.google.com/search?q=${encodeURIComponent(q)}&r360illustrative=${slot}`,
      displayLink: "www.google.com",
      snippet: `Illustrative row ${slot} of ${ILLUSTRATIVE_SERP_SLOTS} (demo only; not a live Google ranking). Open Google to compare.${loc}`,
    });
  }

  return rows;
}

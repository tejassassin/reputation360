import { METADATA_BASE } from "../constants/siteUrl.js";

/**
 * @param {import("./blogFeedItems.js").BlogFeedItem[]} items
 */
export function buildRssXml(items) {
  const channelItems = items
    .map(
      (item) => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.guid}</guid>
      <description><![CDATA[${item.description}]]></description>
      <pubDate>${item.pubDate}</pubDate>
    </item>`,
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Reputation360 Blog</title>
    <link>${METADATA_BASE}/blog</link>
    <description>Expert articles on online reputation management, negative link suppression, and reputation strategy from Reputation360.</description>
    <language>en-us</language>
    <atom:link href="${METADATA_BASE}/rss.xml" rel="self" type="application/rss+xml" />${channelItems}
  </channel>
</rss>
`;
}

/**
 * Build third-party share URLs for blog articles.
 * @param {string} pageUrl absolute canonical URL
 * @param {string} title article title (used in tweet/email subject)
 */
export function buildBlogShareUrls(pageUrl, title) {
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(title);
  const emailBody = encodeURIComponent(`I thought you might find this useful:\n\n${pageUrl}`);

  return {
    linkedIn: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    x: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${emailBody}`,
  };
}

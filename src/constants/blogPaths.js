/** Blog listing (canonical path). */
export const BLOG_INDEX_PATH = "/blog";

/** Canonical path for a post slug (no trailing slash). */
export function blogPostPath(slug) {
  return `/blog/${slug}`;
}

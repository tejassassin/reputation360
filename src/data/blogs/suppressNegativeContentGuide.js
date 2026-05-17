import suppressNegativeContentGuideSource from "./suppress-negative-content-guide.md?raw";

export const SUPPRESS_NEGATIVE_GUIDE_SLUG =
  "how-to-suppress-negative-content-professionals-guide";

export const SUPPRESS_NEGATIVE_GUIDE_PATH = `/resources/blogs/${SUPPRESS_NEGATIVE_GUIDE_SLUG}`;

export const suppressNegativeGuideListing = {
  id: "suppress-negative-guide",
  slug: SUPPRESS_NEGATIVE_GUIDE_SLUG,
  filter: "Corporate",
  category: "Reputation Strategy",
  title:
    "How to Suppress Negative Content: The Professional's Guide to Online Reputation Control",
  excerpt:
    "A potential patient finds your practice through Google. Before scheduling an appointment, they scroll through your search results. There it is - a negative article from 2019.",
  date: "May 17, 2026",
  author: "Reputation360",
  readTime: "8 minutes",
  image:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "Professional reviewing strategy and search results on a laptop",
};

export const suppressNegativeGuideMetaLine =
  "Published: May 17, 2026 | Read Time: 8 minutes | Last Updated: May 17, 2026";

/** Remove duplicate title + meta block (first horizontal rule only) so the hero stays canonical. */
export function stripSuppressNegativeGuidePreamble(src) {
  return src.replace(
    /^\s*#\s+[^\r\n]+\s*(?:\r?\n)\s*(?:\r?\n)\*\*Published\*\*:[^\r\n]*\s*(?:\r?\n)\s*(?:\r?\n)---\s*(?:\r?\n)+/,
    "",
  );
}

export function slugifyHeadingText(text) {
  return text
    .toLowerCase()
    .replace(/\*\*/g, "")
    .replace(/[^a-z0-9\s-]/gi, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function extractSuppressNegativeGuideTocFromBody(body) {
  const re = /^## (.+)$/gm;
  const out = [];
  let m;
  while ((m = re.exec(body)) !== null) {
    const raw = m[1].trim();
    const label = raw.replace(/\*\*/g, "").trim();
    out.push({ id: slugifyHeadingText(label), label });
  }
  return out;
}

export const suppressNegativeGuideBodyMarkdown = stripSuppressNegativeGuidePreamble(
  suppressNegativeContentGuideSource,
);

export const suppressNegativeGuideToc = extractSuppressNegativeGuideTocFromBody(
  suppressNegativeGuideBodyMarkdown,
);

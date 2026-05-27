import suppressNegativeContentGuideSource from "./suppress-negative-content-guide.md?raw";
export {
  SUPPRESS_NEGATIVE_GUIDE_PATH,
  SUPPRESS_NEGATIVE_GUIDE_SLUG,
  suppressNegativeGuideHero,
  suppressNegativeGuideListing,
  suppressNegativeGuideMetaDescription,
  suppressNegativeGuideMetaLine,
  suppressNegativeGuideSeoTitle,
} from "./suppressNegativeGuideMeta.js";

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

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
export {
  stripSuppressNegativeGuidePreamble,
  slugifyHeadingText,
  extractSuppressNegativeGuideTocFromBody,
} from "./suppressNegativeGuideStrip.js";

export const suppressNegativeGuideBodyMarkdown = stripSuppressNegativeGuidePreamble(
  suppressNegativeContentGuideSource,
);

export const suppressNegativeGuideToc = extractSuppressNegativeGuideTocFromBody(
  suppressNegativeGuideBodyMarkdown,
);

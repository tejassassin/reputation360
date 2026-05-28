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
import {
  stripSuppressNegativeGuidePreamble,
  slugifyHeadingText,
  extractSuppressNegativeGuideTocFromBody,
} from "./suppressNegativeGuideStrip.js";

export {
  stripSuppressNegativeGuidePreamble,
  slugifyHeadingText,
  extractSuppressNegativeGuideTocFromBody,
};

export const suppressNegativeGuideBodyMarkdown = stripSuppressNegativeGuidePreamble(
  suppressNegativeContentGuideSource,
);

export const suppressNegativeGuideToc = extractSuppressNegativeGuideTocFromBody(
  suppressNegativeGuideBodyMarkdown,
);

import { article as article01 } from "./blog01.js";
import { article as article02 } from "./blog02.js";
import { article as article03 } from "./blog03.js";
import { article as article05 } from "./blog05.js";
import { article as article06 } from "./blog06.js";
import { article as article07 } from "./blog07.js";
import { article as article08 } from "./blog08.js";
import { article as article09 } from "./blog09.js";
import { article as article10 } from "./blog10.js";
import { article as article11 } from "./blog11.js";
import { article as article12 } from "./blog12.js";
import { article as article13 } from "./blog13.js";
import { article as article14 } from "./blog14.js";
import { article as article15 } from "./blog15.js";
import { article as article16 } from "./blog16.js";
import { article as article17 } from "./blog17.js";
import { article as article18 } from "./blog18.js";
import { article as article19 } from "./blog19.js";
import { article as article20 } from "./blog20.js";

/** @type {import('./types.js').Pack20Article[]} */
/** Published pack articles; add more here when content is ready. */
export const PACK20_ARTICLES = [
  article20,
  article19,
  article18,
  article17,
  article16,
  article15,
  article14,
  article13,
  article12,
  article11,
  article10,
  article09,
  article08,
  article07,
  article06,
  article05,
  article03,
  article02,
  article01,
];

/** @type {Map<string, import('./types.js').Pack20Article>} */
export const PACK20_BY_SLUG = new Map(PACK20_ARTICLES.map((a) => [a.slug, a]));

/**
 * @returns {import('./types.js').Pack20Listing[]}
 */
export function getPack20Listings() {
  return PACK20_ARTICLES.map((a) => a.listing);
}

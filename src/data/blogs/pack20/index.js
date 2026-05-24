export { SLUG as SLUG01 } from "./blog01.js";
export { SLUG as SLUG02 } from "./blog02.js";
export { SLUG as SLUG03 } from "./blog03.js";
export { SLUG as SLUG05 } from "./blog05.js";
export { SLUG as SLUG06 } from "./blog06.js";
export { SLUG as SLUG07 } from "./blog07.js";
export { SLUG as SLUG08 } from "./blog08.js";
export { SLUG as SLUG09 } from "./blog09.js";
export { SLUG as SLUG10 } from "./blog10.js";
export { SLUG as SLUG11 } from "./blog11.js";
export { SLUG as SLUG12 } from "./blog12.js";
export { SLUG as SLUG13 } from "./blog13.js";
export { SLUG as SLUG14 } from "./blog14.js";
export { SLUG as SLUG15 } from "./blog15.js";
export { SLUG as SLUG16 } from "./blog16.js";
export { SLUG as SLUG17 } from "./blog17.js";
export { SLUG as SLUG18 } from "./blog18.js";
export { SLUG as SLUG19 } from "./blog19.js";
export { SLUG as SLUG20 } from "./blog20.js";

export { PACK20_AUTHOR, PACK20_DATE, pack20Image } from "./shared.js";
export { PACK20_SLUGS } from "./slugs.js";
export { PACK20_ARTICLES, PACK20_BY_SLUG } from "./catalog.js";
export {
  loadPack20Article,
  loadPack20RelatedArticles,
  pack20RelatedFromArticle,
} from "./loadPack20.js";

import { PACK20_ARTICLES, PACK20_BY_SLUG } from "./catalog.js";
import { pack20RelatedFromArticle } from "./loadPack20.js";

/**
 * @param {string} slug
 * @returns {import('./types.js').Pack20Article | undefined}
 */
export function getPack20Article(slug) {
  return PACK20_BY_SLUG.get(slug);
}

/**
 * @param {import('./types.js').Pack20Article} article
 */
export function getPack20RelatedArticles(article) {
  if (article.relatedReading?.length) {
    return article.relatedReading;
  }
  return (article.relatedSlugs ?? [])
    .map((s) => PACK20_BY_SLUG.get(s))
    .filter(Boolean)
    .map(pack20RelatedFromArticle);
}

export { getPack20Listings } from "./catalog.js";

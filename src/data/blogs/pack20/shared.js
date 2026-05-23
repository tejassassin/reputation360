/** Shared metadata and imagery for pack-20 blog articles. */

export const PACK20_AUTHOR = "Reputation360";
export const PACK20_DATE = "May 23, 2026";

const PACK20_IMAGES = {
  suppress:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  rank: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  removal:
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
  social:
    "https://images.unsplash.com/photo-1611162616305-c69b3fa7dbd0?auto=format&fit=crop&w=1200&q=80",
  cases:
    "https://images.unsplash.com/photo-1521737711862-e3f973e94b0e?auto=format&fit=crop&w=1200&q=80",
  court:
    "https://images.unsplash.com/photo-1589820296150-ecf34ae38b2c?auto=format&fit=crop&w=1200&q=80",
  crisis:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  linkedin:
    "https://images.unsplash.com/photo-1611944553156-aa8f7a1e5c9e?auto=format&fit=crop&w=1200&q=80",
  recruiters:
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
  default:
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
};

/** @param {keyof typeof PACK20_IMAGES | string} key */
export function pack20Image(key) {
  return PACK20_IMAGES[key] ?? PACK20_IMAGES.default;
}

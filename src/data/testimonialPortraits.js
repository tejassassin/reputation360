/**
 * Fixed, unique portrait URLs (not real client photos). Each row in `homeTestimonials` maps to
 * one of RandomUser’s pre-generated “fake user” avatars: https://randomuser.me/photos
 * (API terms: https://randomuser.me/copyright) — for production use your own or licensed
 * headshots, and do not present stock as a named person’s real photo. See the block comment
 * in `homeTestimonials.js`.
 *
 * Diverse + unique indices so no two testimonials share the same file.
 * Women (45, 47–49) for named female entries; men (10–18, 32, 14, 17) for male entries.
 */
const AV = {
  noahBennett: "https://randomuser.me/api/portraits/men/17.jpg",
  sophiaReed: "https://randomuser.me/api/portraits/women/45.jpg",
  mathewHemming: "https://randomuser.me/api/portraits/men/14.jpg",
  mehta: "https://randomuser.me/api/portraits/women/47.jpg",
  elizabeth: "https://randomuser.me/api/portraits/women/48.jpg",
  rachel: "https://randomuser.me/api/portraits/women/49.jpg",
  marcus: "https://randomuser.me/api/portraits/men/32.jpg",
  jReevesLaw: "https://randomuser.me/api/portraits/men/10.jpg",
  jReevesCon: "https://randomuser.me/api/portraits/men/11.jpg",
  michael: "https://randomuser.me/api/portraits/men/12.jpg",
  christopherParker: "https://randomuser.me/api/portraits/men/13.jpg",
  david: "https://randomuser.me/api/portraits/men/15.jpg",
  jake: "https://randomuser.me/api/portraits/men/16.jpg",
  thomas: "https://randomuser.me/api/portraits/men/18.jpg",
};

const BY_ENTRY_ID = {
  "noah-bennett": AV.noahBennett,
  "dr-sophia-reed": AV.sophiaReed,
  "marcus-elliot": AV.marcus,
  "mathew-hemming": AV.mathewHemming,
  "jonathan-reeves-legal": AV.jReevesLaw,
  "jon-t-walker": AV.jReevesCon,
  "michael-park": AV.michael,
  "christopher-parker": AV.christopherParker,
  "elizabeth-hartley": AV.elizabeth,
  "rachel-sato": AV.rachel,
  "david-nwosu": AV.david,
  "jake-rodriguez": AV.jake,
  "thomas-chen": AV.thomas,
  "priya-mehta": AV.mehta,
};

export const testimonialPortraitUrl = (entryId) => BY_ENTRY_ID[entryId] ?? null;

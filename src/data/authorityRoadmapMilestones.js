/**
 * Winding road - x spread for ~2.1:1 viewBox so `aspect-ratio` + `w-full`
 * fills wide layouts without empty side gutters.
 */
export const AUTHORITY_ROADMAP_PATH_D =
  "M 80 400 Q 339 400 512 350 T 944 450 T 1375 300 T 1980 150";

/** Shared milestone geometry (five stages along full road length). */
const AUTHORITY_ROADMAP_GEOMETRY = [
  {
    n: 1,
    green: false,
    line: { x1: 308, y1: 309, x2: 308, y2: 451 },
    anchor: { cx: 308, cy: 309 },
    ring: { cx: 308, cy: 491 },
    num: { x: 308, y: 503 },
    fo: { x: 115, y: 553, w: 386, h: 200 },
  },
  {
    n: 2,
    green: true,
    line: { x1: 650, y1: 388, x2: 650, y2: 290 },
    anchor: { cx: 650, cy: 388 },
    ring: { cx: 650, cy: 250 },
    num: { x: 650, y: 262 },
    fo: { x: 457, y: 0, w: 386, h: 188 },
  },
  {
    n: 3,
    green: false,
    line: { x1: 1030, y1: 408, x2: 1030, y2: 550 },
    anchor: { cx: 1030, cy: 408 },
    ring: { cx: 1030, cy: 590 },
    num: { x: 1030, y: 602 },
    fo: { x: 837, y: 652, w: 386, h: 200 },
  },
  {
    n: 4,
    green: true,
    line: { x1: 1410, y1: 272, x2: 1410, y2: 168 },
    anchor: { cx: 1410, cy: 272 },
    ring: { cx: 1410, cy: 118 },
    num: { x: 1410, y: 130 },
    fo: { x: 1217, y: -142, w: 386, h: 188 },
  },
  {
    n: 5,
    green: false,
    line: { x1: 1752, y1: 21, x2: 1752, y2: 163 },
    anchor: { cx: 1752, cy: 21 },
    ring: { cx: 1752, cy: 203 },
    num: { x: 1752, y: 215 },
    fo: { x: 1559, y: 265, w: 386, h: 200 },
  },
];

/** About page - How We Work roadmap copy. */
export const ABOUT_AUTHORITY_ROADMAP_MILESTONES = [
  {
    title: "Confidential Consultation",
    text: "We begin by understanding your situation, concerns and the outcome you hope to achieve.",
  },
  {
    title: "Reputation Audit",
    text: "We assess your current search results, digital presence and the issues affecting your online reputation.",
  },
  {
    title: "Personalized Strategy",
    text: "We create a practical plan based on your circumstances, priorities, realistic timelines and available options.",
  },
  {
    title: "Implementation and Monitoring",
    text: "Our specialists execute the agreed strategy, monitor progress and refine the approach as search results evolve.",
  },
  {
    title: "Ongoing Protection",
    text: "We continue monitoring your online presence and recommend appropriate next steps when new risks or opportunities appear.",
  },
].map((copy, index) => ({
  ...AUTHORITY_ROADMAP_GEOMETRY[index],
  ...copy,
}));

import { blogPostPath } from "../../constants/blogPaths.js";

export const REPUTATION_REPAIR_TIMELINE_SLUG = "how-long-does-it-take-to-fix-online-reputation";

export const REPUTATION_REPAIR_TIMELINE_PATH = blogPostPath(REPUTATION_REPAIR_TIMELINE_SLUG);

export const reputationRepairTimelineListing = {
  id: "reputation-repair-timeline",
  slug: REPUTATION_REPAIR_TIMELINE_SLUG,
  filter: "Personal",
  category: "Reputation Repair",
  title: "How Long Does It Take to Fix an Online Reputation?",
  excerpt:
    "Wondering how long reputation repair takes? Realistic timelines from 30 days to 12+ months - based on severity, content type, and strategy.",
  date: "May 22, 2026",
  author: "Reputation360",
  readTime: "12 minutes",
  image:
    "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "Calendar and planning for reputation repair timeline",
};

export const reputationRepairTimelineSeoTitle =
  "How Long Does Online Reputation Repair Take? | Reputation360";

export const reputationRepairTimelineMetaDescription =
  "Most clients see visible page-one improvements in 60-90 days. Full transformation takes 3-12 months. See the 6 key factors that drive your timeline.";

export const reputationRepairTimelineHero = {
  badge: "Reputation Repair",
  title: "How Long Does It Take to Fix an Online Reputation?",
  lead:
    "The timeline for online reputation repair is predictable once you understand what drives it. Most clients see meaningful improvements in 60-90 days; full page-one transformation often takes 3-12 months.",
  meta: [
    { value: "60-90", label: "Days to first visible gains" },
    { value: "98%", label: "Clients clear page one" },
    { value: "3-12", label: "Months for full transformation" },
  ],
};

export const reputationRepairTimelineToc = [
  { id: "what-fixing-means", label: "01. What Fixing Actually Means" },
  { id: "factors", label: "02. Six Factors That Drive Timeline" },
  { id: "timeline-by-scenario", label: "03. Timeline by Scenario" },
  { id: "phases", label: "04. Phases of Reputation Repair" },
  { id: "diy-vs-professional", label: "05. DIY vs. Professional Speed" },
  { id: "red-flags", label: "06. Red Flags to Avoid" },
];

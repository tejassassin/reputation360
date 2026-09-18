import { AuthorityRoadmapSection } from "../roadmap/AuthorityRoadmapSection.jsx";
import { ABOUT_AUTHORITY_ROADMAP_MILESTONES } from "../../data/authorityRoadmapMilestones.js";

export function AboutHowWeWorkSection() {
  return (
    <AuthorityRoadmapSection
      sectionId="how-we-work"
      headingId="how-we-work-heading"
      eyebrow="HOW WE WORK"
      heading="What Working With Reputation360 Looks Like"
      subheading="From the first confidential conversation to ongoing monitoring, every engagement follows a clear process shaped around your situation and goals."
      milestones={ABOUT_AUTHORITY_ROADMAP_MILESTONES}
      layoutVariant="about"
    />
  );
}

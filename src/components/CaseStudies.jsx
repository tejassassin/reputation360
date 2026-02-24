import React from "react";
import CardDeck from "@/components/ui/card-deck";

const caseStudies = [
  {
    id: 1,
    data: {
      caseStudy: true,
      title: "Brand Trust Recovery",
      industry: "Consumer Electronics",
      profile: "Electronics Brand",
      challengeType: "Product defect controversy & customer backlash",
      duration: "14 months",
      outcome: "92% negative results removed from Page 1-3",
      challenge:
        "A consumer electronics brand with a 15-year operating history faced reputational damage after a manufacturing defect in a flagship product led to customer complaints, refunds, and recalls. The issue escalated when national media and financial publications reported on it.",
      challengeDrivers:
        "Negative visibility dominated Page 1–4 of Google, driven by:",
      challengeDriversList: [
        "Technology review platforms",
        "Consumer complaint forums",
        "Reddit discussion threads",
        "Coverage by a leading financial newspaper (The Economic Times)",
      ],
      challengeClosing:
        "This began impacting sales conversations, distributor confidence, and long-term brand trust.",
      objective:
        "Contain crisis-driven narratives, rebalance search results, and restore commercial credibility without denying the issue or suppressing legitimate reporting.",
      strategy: [
        "Conducted a crisis-specific SERP analysis to identify which articles were driving the highest trust erosion",
        "Created brand-led explanatory content addressing the issue, corrective measures, and quality improvements",
        "Positioned follow-up content that contextualized the original negative news with resolution and accountability",
        "Strengthened visibility of verified product pages, FAQs, and neutral third-party reviews",
        "Reduced forum dominance by replacing speculative discussions with authoritative brand and media assets",
      ],
      results: [
        "82% of negative URLs pushed beyond Page 3",
        "Page 1 dominated by controlled brand assets and neutral coverage",
        "Brand search click-through rate improved by 38%",
        "Distributor confidence and inbound sales inquiries stabilized",
      ],
      impact:
        "The business regained control of its online narrative while maintaining transparency. Search results reflected a resolved product issue, not a failing brand—allowing the company to move forward without long-term reputational drag.",
    },
  },

  {
    id: 2,
    data: {
      caseStudy: true,
      title: "Founder Reputation Management",
      industry: "Manufacturing & Industrial Services",
      profile: "SaaS Founder",
      challengeType: "Leadership controversy & media speculation",
      duration: "12 months",
      outcome: "Critical opinion content removed from Page 1-2",
      challenge:
        "A founder in the industrial manufacturing sector faced reputational strain following a public leadership controversy that triggered speculative commentary and opinion-driven media coverage.",
      challengeDrivers: "Negative narratives ranked across:",
      challengeDriversList: [
        "Industry publications",
        "Commentary and opinion blogs",
        "Syndicated business content platforms",
      ],
      challengeClosing:
        "Page 1 and Page 2 were dominated by critical opinion pieces, affecting stakeholder and investor confidence.",
      objective:
        "Reposition the founder as a credible, forward-looking industry leader and remove speculative narratives from high-impact search results.",
      strategy: [
        "Executed a LinkedIn-first reputation strategy, positioning the founder as a thought leader",
        "Developed consistent leadership content around governance, operations, and long-term industry vision",
        "Published long-form posts, commentary, and interviews designed to rank for name-based searches",
        "Strengthened Google-visible profiles to reinforce leadership credibility",
        "Gradually displaced opinion-driven content with expertise-led narratives",
      ],
      results: [
        "Negative opinion pieces removed from Page 1 and Page 2",
        "Founder-authored content began ranking in the top 3 search results",
        "Page 1 shifted toward leadership insight and professional authority",
        "Noticeable improvement in investor and stakeholder sentiment",
      ],
      impact:
        "The founder’s digital presence reflected experience, stability, and leadership depth, allowing conversations to move away from controversy and back to business fundamentals.",
    },
  },

  {
    id: 3,
    data: {
      caseStudy: true,
      title: "Restoring Professional Standing",
      industry: "Finance",
      profile: "Senior Financial Professional",
      challengeType: "Insider trading allegations & regulatory press",
      duration: "15 months",
      outcome: "SEC-linked content pushed beyond Page 2",
      challenge:
        "A senior financial professional faced reputational risk after being named in insider trading allegations, triggering regulatory disclosures and media attention.",
      challengeDrivers: "Negative visibility was driven by:",
      challengeDriversList: [
        "SEC.gov records",
        "Legal reporting platforms",
        "Financial news and compliance-focused publications",
      ],
      challengeClosing:
        "This resulted in Page 1–3 of Google being dominated by regulatory and enforcement-related content, raising concerns among investors and stakeholders.",
      objective:
        "Reduce the prominence of regulatory coverage while restoring professional credibility in a compliant, low-risk manner.",
      strategy: [
        "Conducted a regulatory-sensitive SERP audit focused on SEC and legal domains",
        "Built authoritative professional profiles highlighting governance roles and career history",
        "Published neutral, finance-focused commentary and third-party professional content",
        "Balanced credibility-building assets with appropriate personal context (community involvement, leadership roles)",
        "Avoided reactive or defensive narratives that could escalate risk",
      ],
      results: [
        "SEC-related content pushed to Page 3 and beyond",
        "Overall negative search visibility reduced by 70%",
        "Page 1 dominated by professional, neutral financial content",
        "Search results stabilized with low volatility",
      ],
      impact:
        "The client regained trust with investors and stakeholders, ensuring their digital presence reflected long-term expertise rather than regulatory headlines.",
    },
  },

  {
    id: 4,
    data: {
      caseStudy: true,
      title: "Medical Reputation Management",
      industry: "Healthcare",
      profile: "Practicing Doctor",
      challengeType: "Alleged clinical error & negative media coverage",
      duration: "11 months",
      outcome: "Verified medical profiles prioritized in search results",
      challenge:
        "A practicing doctor faced reputational damage after an alleged procedural error during a clinical case. Although the matter was under internal review, it received attention across healthcare media platforms.",
      challengeDrivers: "Negative coverage ranked from:",
      challengeDriversList: [
        "Healthcare news websites",
        "Medical review portals",
        "Regional hospital and health reporting platforms",
      ],
      challengeClosing:
        "Page 1 and Page 2 were dominated by adverse narratives, affecting patient confidence.",
      objective:
        "Restore professional credibility while maintaining ethical, legal, and medical sensitivity.",
      strategy: [
        "Strengthened presence across multiple patient-facing and professional social media platforms",
        "Developed educational content aligned with the doctor’s specialization and clinical approach",
        "Optimized authoritative medical directories and professional healthcare platforms",
        "Ensured consistency between Google-visible profiles, social channels, and educational content",
        "Shifted visibility away from media narratives toward verified professional sources",
      ],
      results: [
        "Negative press removed from Page 1 and Page 2",
        "Medical directories and professional platforms ranked prominently",
        "Improved clarity and quality of patient inquiries",
        "Search results stabilized around professional credibility",
      ],
      impact:
        "Patients searching online were able to gain clear, accurate, and balanced information about the doctor’s expertise and medical approach. The digital presence reinforced trust, transparency, and professionalism, allowing the doctor to continue practicing without reputational disruption.",
    },
  },

  {
    id: 5,
    data: {
      caseStudy: true,
      title: "Student Reputation Recovery",
      industry: "Education",
      profile: "University Student",
      challengeType: "Suspension & negative academic coverage",
      duration: "9 months",
      outcome: "Text & image results realigned to academic content",
      challenge:
        "A final-year university student faced reputational damage after a temporary suspension, which was reported by local education portals and discussed widely across academic forums.",
      challengeDrivers: "Negative visibility came from:",
      challengeDriversList: [
        "Academic news sites",
        "Student forums and Reddit threads",
        "Reposted opinion-based articles",
      ],
      challengeClosing:
        "Additionally, inappropriate images unrelated to academics appeared in Google Image results.",
      objective:
        "Rebuild a credible academic digital presence and eliminate harmful text and visual associations.",
      strategy: [
        "Created education-focused personal profiles and neutral academic content",
        "Implemented targeted image suppression, replacing inappropriate visuals with professional assets",
        "Published experience-based content around academic pressure, growth, and responsibility",
        "Ensured authoritative education platforms ranked for name-based searches",
      ],
      results: [
        "Negative articles removed from Page 1 and Page 2",
        "Academic forums pushed to Page 3 and beyond",
        "Inappropriate images replaced across Google Images",
        "Page 1 dominated by neutral, academic, and professional content",
      ],
      impact:
        "The student regained full control of their digital identity at a critical life stage. Search results reflected growth, accountability, and academic focus, significantly reducing risk during admissions, background checks, and early-career opportunities.",
    },
  },
];

function CaseStudies() {
  return (
    <section className="py-10 sm:py-16 px-4 flex justify-center overflow-x-hidden">
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy text-center mb-2 sm:mb-3">
          Real World Case Studies
        </h2>
        <h3 className="font-heading text-lg sm:text-xl font-bold text-steel text-center mb-8 sm:mb-10">
          Controlling the Narrative Online
        </h3>
        <CardDeck caseStudies={caseStudies} />
      </div>
    </section>
  );
}

export default CaseStudies;

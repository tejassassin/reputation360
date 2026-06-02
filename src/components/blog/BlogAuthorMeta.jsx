import React from "react";

/**
 * Reusable component to render author and reviewed-by metadata for blog posts.
 * Maps the post's slug to specific authors as requested.
 */
export function BlogAuthorMeta({ slug, date }) {
  const ryanBlogs = [
    "how-to-suppress-negative-search-results-reputation360-framework",
    "rank-positive-content-above-negative-results-reputation360-strategy",
    "removal-vs-suppression-which-actually-works-reputation360",
    "old-social-media-posts-showing-up-google-reputation360-guide",
    "negative-links-cost-jobs-deals-real-cases-reputation360",
    "remove-court-records-google-reputation360"
  ];
  const avaBlogs = [
    "crisis-management-reputation-recovery-reputation360-playbook",
    "linkedin-profile-optimization-search-results-reputation360-checklist",
    "what-recruiters-google-about-you-reputation360-insider-report",
    "fix-reputation-before-job-interview-reputation360-guide",
    "own-your-first-page-control-google-results-reputation360"
  ];
  const harperBlogs = [
    "why-first-google-result-matters-psychology-reputation360",
    "hidden-cost-ignoring-online-reputation-reputation360-analysis",
    "online-reputation-management-best-practices-reputation360-methodology",
    "roi-reputation-management-what-clients-see-reputation360",
    "building-positive-google-presence-profile-claiming-guide-reputation360",
    "monitoring-online-reputation-tools-tactics-reputation360",
    "social-media-reputation-management-multi-platform-strategy-reputation360",
    "ai-search-changes-reputation-chatgpt-beyond-reputation360-guide"
  ];

  let author = "Sophia Parker";
  if (ryanBlogs.includes(slug)) author = "Ryan Hall";
  else if (avaBlogs.includes(slug)) author = "Ava Mitchell";
  else if (harperBlogs.includes(slug)) author = "Harper Sullivan";

  return (
    <div className="mt-8 py-5 border-y border-slate-200/80 max-w-2xl mx-auto flex flex-col sm:flex-row justify-around items-center gap-4 text-center font-body select-none">
      <div className="flex flex-col gap-1 px-4">
        <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Written By</span>
        <span className="text-sm font-semibold text-[#1F3B64]">{author}</span>
      </div>
      <div className="hidden sm:block h-8 w-[1px] bg-slate-200/80" />
      <div className="flex flex-col gap-1 px-4">
        <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Reviewed By</span>
        <span className="text-sm font-semibold text-[#1F3B64]">Editorial Team</span>
      </div>
      <div className="hidden sm:block h-8 w-[1px] bg-slate-200/80" />
      <div className="flex flex-col gap-1 px-4">
        <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Last Updated</span>
        <span className="text-sm font-semibold text-[#1F3B64]">{date}</span>
      </div>
    </div>
  );
}

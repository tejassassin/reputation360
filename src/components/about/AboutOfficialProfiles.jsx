import { ArrowUpRight, Megaphone, Newspaper, Star } from "lucide-react";
import { OFFICIAL_PROFILE_GROUPS } from "../../constants/brandProfiles.js";
import { externalAnchorProps } from "../../lib/internalLinkProps.js";

const GROUP_ICONS = {
  "Social media": Megaphone,
  "Agency directories and reviews": Star,
  Publishing: Newspaper,
};

/** Visible list of Reputation360's official profiles (mirrors schema.org sameAs). */
export function AboutOfficialProfiles() {
  return (
    <section id="official-profiles" className="mx-auto max-w-6xl px-6 pb-8 pt-6 md:pt-10">
      <div className="mb-8 text-center">
        <p className="mb-2 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#4CAF50]">
          Find us online
        </p>
        <h2 className="mb-2 font-heading text-2xl font-extrabold text-[#1F3B64] md:text-3xl">
          Official Reputation360 Profiles
        </h2>
        <p className="mx-auto max-w-2xl font-body text-sm text-slate-600 md:text-base">
          These are the only accounts run by Reputation360. If a profile is not listed here, it is
          not ours.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {OFFICIAL_PROFILE_GROUPS.map((group) => {
          const Icon = GROUP_ICONS[group.title] ?? Megaphone;
          return (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm md:p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <span
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#4CAF50]/12 text-[#2d8a3e] ring-1 ring-[#4CAF50]/20"
                  aria-hidden
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                </span>
                <h3 className="m-0 font-heading text-base font-bold text-[#1F3B64]">
                  {group.title}
                </h3>
              </div>
              <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                {group.profiles.map((p) => (
                  <li key={p.url}>
                    <a
                      href={p.url}
                      {...externalAnchorProps(p.url)}
                      className="group inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 font-body text-[13px] font-medium text-slate-700 transition-colors hover:border-[#4CAF50]/50 hover:bg-[#f0fdf4] hover:text-[#1F3B64] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4CAF50]"
                    >
                      {p.name}
                      <ArrowUpRight
                        className="h-3.5 w-3.5 text-slate-400 transition-colors group-hover:text-[#4CAF50]"
                        aria-hidden
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

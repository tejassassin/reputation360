import { OFFICIAL_PROFILE_GROUPS } from "../../constants/brandProfiles.js";
import { externalAnchorProps } from "../../lib/internalLinkProps.js";

/** Visible list of Reputation360's official profiles (mirrors schema.org sameAs). */
export function AboutOfficialProfiles() {
  return (
    <section id="official-profiles" className="mx-auto max-w-4xl px-6 pb-6 pt-4">
      <h2 className="mb-4 text-center font-heading text-xl font-bold text-[#1F3B64]">
        Official Reputation360 profiles
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {OFFICIAL_PROFILE_GROUPS.map((group) => (
          <div key={group.title}>
            <p className="mb-2 font-heading text-sm font-semibold text-slate-700">{group.title}</p>
            <ul className="space-y-1.5 font-body text-sm">
              {group.profiles.map((p) => (
                <li key={p.url}>
                  <a href={p.url} {...externalAnchorProps(p.url)} className="text-[#2563eb] hover:underline">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

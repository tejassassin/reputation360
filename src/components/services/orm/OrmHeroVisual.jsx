import { MessageSquare, Newspaper, Search, ShieldCheck, Star } from "lucide-react";

const CHANNELS = [
  {
    Icon: Search,
    label: "Search",
    desc: "Page-one results.",
  },
  {
    Icon: Star,
    label: "Reviews",
    desc: "Ratings & replies.",
  },
  {
    Icon: Newspaper,
    label: "News",
    desc: "Press & mentions.",
  },
  {
    Icon: MessageSquare,
    label: "Social",
    desc: "Profiles & forums.",
  },
];

/** ORM-only illustration for the What Is section - stacks cleanly in narrow columns. */
export function OrmHeroVisual() {
  return (
    <div
      className="relative w-full overflow-hidden rounded-xl border border-slate-200/90 bg-gradient-to-br from-[#0f2344] via-[#152d52] to-[#0a1628] shadow-[0_20px_50px_-28px_rgba(15,35,60,0.45)] ring-1 ring-[#2E5B88]/20"
      role="img"
      aria-label="Online reputation spans search, reviews, news, and social - managed together."
    >
      <div
        className="pointer-events-none absolute -right-16 top-0 h-36 w-56 rounded-full bg-[#4CAF50]/18 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-56 rounded-full bg-[#2E5B88]/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:32px_32px]"
        aria-hidden
      />

      <div className="relative flex flex-col gap-5 p-5 md:gap-6 md:p-6">
        <div className="flex items-start gap-3.5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 ring-1 ring-emerald-400/35 md:h-14 md:w-14">
            <ShieldCheck
              className="h-7 w-7 text-emerald-300 md:h-8 md:w-8"
              strokeWidth={1.75}
              aria-hidden
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-heading text-base font-bold leading-snug text-white md:text-lg">
              Your reputation, everywhere people look.
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-300/90">
              ORM aligns what people find across every channel that shapes trust.
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-2.5 md:gap-3">
          {CHANNELS.map(({ Icon, label, desc }) => (
            <li
              key={label}
              className="flex min-w-0 flex-col rounded-xl border border-white/12 bg-white/[0.06] p-3 md:p-3.5"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.08] ring-1 ring-white/10">
                <Icon className="h-4 w-4 text-[#7df5b9]" strokeWidth={2} aria-hidden />
              </span>
              <p className="mt-2.5 font-heading text-sm font-semibold leading-tight text-white">
                {label}
              </p>
              <p className="mt-0.5 text-xs leading-snug text-slate-400">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

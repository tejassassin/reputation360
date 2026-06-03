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
      className="relative w-full overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-[#0f2344] via-[#152d52] to-[#0a1628] shadow-[0_24px_60px_-28px_rgba(15,35,60,0.5)] ring-1 ring-[#2E5B88]/20 lg:min-h-[22rem] transition-all duration-500 ease-out hover:shadow-[0_32px_80px_-20px_rgba(15,35,60,0.7)] hover:border-emerald-500/30 hover:scale-[1.01] group"
      role="img"
      aria-label="Online reputation spans search, reviews, news, and social - managed together."
    >
      <div
        className="pointer-events-none absolute -right-16 top-0 h-36 w-56 rounded-full bg-[#4CAF50]/18 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-56 rounded-full bg-[#2E5B88]/25 blur-3xl transition-opacity duration-500 group-hover:opacity-85"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:32px_32px]"
        aria-hidden
      />

      <div className="relative flex h-full flex-col justify-center gap-6 p-6 md:gap-7 md:p-8 lg:gap-8 lg:p-9">
        <div className="flex items-start gap-4 md:gap-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 ring-1 ring-emerald-400/35 md:h-16 md:w-16 lg:h-[4.25rem] lg:w-[4.25rem] transition-all duration-500 group-hover:bg-emerald-500/25 group-hover:ring-emerald-400/50">
            <ShieldCheck
              className="h-8 w-8 text-emerald-300 md:h-9 md:w-9 lg:h-10 lg:w-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[5deg]"
              strokeWidth={1.75}
              aria-hidden
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-heading text-lg font-bold leading-snug text-white md:text-xl lg:text-2xl transition-colors duration-300 group-hover:text-emerald-100">
              Your reputation, everywhere people look.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300/90 md:text-base lg:text-[17px] transition-colors duration-300 group-hover:text-slate-200">
              ORM aligns what people find across every channel that shapes trust.
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-3 md:gap-4">
          {CHANNELS.map(({ Icon, label, desc }) => (
            <li
              key={label}
              className="flex min-w-0 flex-col rounded-xl border border-white/12 bg-white/[0.06] p-4 md:p-5 lg:p-5 transition-all duration-300 hover:scale-[1.03] hover:border-[#7df5b9]/30 hover:bg-white/[0.1] hover:shadow-[0_8px_20px_-8px_rgba(125,245,185,0.15)] group/item"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.08] ring-1 ring-white/10 md:h-11 md:w-11 transition-all duration-300 group-hover/item:bg-[#7df5b9]/20 group-hover/item:ring-[#7df5b9]/35">
                <Icon className="h-5 w-5 text-[#7df5b9] md:h-[1.35rem] md:w-[1.35rem] transition-transform duration-300 group-hover/item:scale-110" strokeWidth={2} aria-hidden />
              </span>
              <p className="mt-3 font-heading text-sm font-semibold leading-tight text-white md:text-base transition-colors duration-300 group-hover/item:text-[#7df5b9]">
                {label}
              </p>
              <p className="mt-1 text-xs leading-snug text-slate-400 md:text-sm transition-colors duration-300 group-hover/item:text-slate-300">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

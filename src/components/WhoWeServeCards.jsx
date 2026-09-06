import BrandSectionBackdrop from "./BrandSectionBackdrop";
import { WHO_WE_SERVE_AUDIENCES } from "../data/whoWeServeAudiences.js";
import { WhoWeServeAudienceCard } from "./WhoWeServeAudienceCard.jsx";

export default function WhoWeServeCards() {
  return (
    <section
      className="relative flex flex-col overflow-hidden border-y border-white/[0.06] py-10 text-white md:py-12 lg:h-[calc(100svh-4rem)] lg:min-h-[calc(100svh-4rem)] lg:max-h-[calc(100svh-4rem)] lg:scroll-mt-16 lg:py-8"
      aria-labelledby="who-we-serve-heading"
    >
      <BrandSectionBackdrop />

      <div className="relative mx-auto flex h-full w-full max-w-7xl min-h-0 flex-1 flex-col px-4 sm:px-6 md:px-8">
        <div className="mb-8 shrink-0 text-center md:mb-10">
          <h2
            id="who-we-serve-heading"
            className="font-heading text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Who We Help: Reputation Management for Professionals & Businesses
          </h2>
          <div
            className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-green to-slate"
            aria-hidden
          />
        </div>

        <ul className="m-0 grid min-h-0 flex-1 list-none grid-cols-1 items-stretch gap-4 p-0 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:grid-rows-2 lg:gap-5">
          {WHO_WE_SERVE_AUDIENCES.map((cat) => (
            <WhoWeServeAudienceCard key={cat.href} {...cat} />
          ))}
        </ul>
      </div>
    </section>
  );
}

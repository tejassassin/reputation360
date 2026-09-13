import BrandSectionBackdrop from "./BrandSectionBackdrop";
import { WHO_WE_SERVE_AUDIENCES } from "../data/whoWeServeAudiences.js";
import { WhoWeServeAudienceCard } from "./WhoWeServeAudienceCard.jsx";

export default function WhoWeServeCards() {
  return (
    <section
      className="relative overflow-hidden border-t border-white/[0.06] py-10 text-white md:py-12 lg:py-14"
      aria-labelledby="who-we-serve-heading"
    >
      <BrandSectionBackdrop />

      <div className="r360-site-container r360-who-we-serve-shell relative">
        <div className="mb-6 text-center md:mb-8">
          <h2
            id="who-we-serve-heading"
            className="r360-who-we-serve-heading mx-auto max-w-4xl font-heading text-xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
          >
            Online Reputation Management for Professionals and Businesses
          </h2>
          <div className="mx-auto mt-2.5 h-1 w-16 rounded-full bg-green" aria-hidden />
        </div>

        <ul className="m-0 grid list-none grid-cols-1 items-stretch gap-3 p-0 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-4">
          {WHO_WE_SERVE_AUDIENCES.map((cat) => (
            <WhoWeServeAudienceCard key={cat.href} {...cat} />
          ))}
        </ul>
      </div>
    </section>
  );
}

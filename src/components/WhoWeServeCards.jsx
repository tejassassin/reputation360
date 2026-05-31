import BrandSectionBackdrop from "./BrandSectionBackdrop";
import { WHO_WE_SERVE_AUDIENCES } from "../data/whoWeServeAudiences.js";
import { internalAnchorProps } from "../lib/internalLinkProps.js";
import { WhoWeServeAudienceCard } from "./WhoWeServeAudienceCard.jsx";

export default function WhoWeServeCards() {
  return (
    <section
      className="relative overflow-hidden border-y border-white/[0.06] py-14 text-white md:py-20 lg:py-24"
      aria-labelledby="who-we-serve-heading"
    >
      <BrandSectionBackdrop />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="mb-12 text-center md:mb-14">
          <h2
            id="who-we-serve-heading"
            className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl"
          >
            Professionals & Industries We Serve
          </h2>
          <div
            className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-green to-slate"
            aria-hidden
          />
        </div>

        <nav aria-label="Who we work with page links" className="sr-only">
          <ul className="m-0 list-none p-0">
            {WHO_WE_SERVE_AUDIENCES.map((cat) => (
              <li key={cat.href} className="list-none">
                <a href={cat.href} {...internalAnchorProps(cat.href)}>
                  {cat.linkLabel}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="m-0 grid list-none grid-cols-1 items-stretch gap-5 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {WHO_WE_SERVE_AUDIENCES.map((cat) => (
            <WhoWeServeAudienceCard key={cat.href} {...cat} />
          ))}
        </ul>
      </div>
    </section>
  );
}

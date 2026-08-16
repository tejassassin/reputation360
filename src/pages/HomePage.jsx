"use client";

import { lazy } from "react";
import { SeoHead } from "../components/SeoHead.jsx";
import { HOME_PAGE_JSON_LD } from "../data/organizationSchema.js";
import { useLocalizedSeo } from "../hooks/useLocalizedSeo.js";
import Hero from "../components/Hero";
import WhatWeBelieve from "../components/WhatWeBelieve";
import LazySection from "../components/LazySection.jsx";

const WhatWeDo = lazy(() => import("../components/WhatWeDo"));
const OurServices = lazy(() => import("../components/OurServices"));
const HomeTestimonials = lazy(() => import("../components/HomeTestimonials.jsx"));
const WhoWeServeCards = lazy(() => import("../components/WhoWeServeCards"));
const HowReputation360Works = lazy(() => import("../components/HowReputation360Works"));
const WhyClientsChoose = lazy(() => import("../components/WhyClientsChoose"));
const CaseStudies = lazy(() => import("../components/CaseStudies"));
const HomeFromOurBlogSection = lazy(() => import("../components/home/HomeFromOurBlogSection.jsx").then(m => ({ default: m.HomeFromOurBlogSection })));
const HomeFaq = lazy(() => import("../components/HomeFaq"));
const Contact = lazy(() => import("../components/Contact"));

/**
 * @param {{ renderSeo?: boolean }} props
 */
function HomePage({ renderSeo = true }) {
  const homeSeo = useLocalizedSeo("home");

  return (
    <>
      {renderSeo ? (
        <SeoHead
          title={homeSeo.title}
          description={homeSeo.description}
          canonicalPath={homeSeo.path}
          jsonLd={HOME_PAGE_JSON_LD}
        />
      ) : null}
      <Hero />
      <main className="flex w-full flex-col gap-12 pt-8 md:gap-16 md:pt-12 lg:gap-20 lg:pt-16">
        <section>
          <WhatWeBelieve />
        </section>
        <LazySection minHeight="20rem">
          <section>
            <WhatWeDo />
          </section>
        </LazySection>
        <LazySection minHeight="24rem">
          <OurServices />
        </LazySection>
        <LazySection minHeight="20rem">
          <section className="bg-offwhite">
            <HomeTestimonials />
          </section>
        </LazySection>
        <LazySection minHeight="20rem">
          <WhoWeServeCards />
        </LazySection>
        <LazySection minHeight="24rem">
          <section className="bg-white">
            <HowReputation360Works />
          </section>
        </LazySection>
        <LazySection minHeight="20rem">
          <WhyClientsChoose />
        </LazySection>
        <LazySection minHeight="20rem">
          <CaseStudies />
        </LazySection>
        <LazySection minHeight="20rem">
          <HomeFromOurBlogSection id="from-our-blog" />
        </LazySection>
        <LazySection minHeight="20rem">
          <section>
            <HomeFaq />
          </section>
        </LazySection>
        <LazySection minHeight="12rem">
          <Contact />
        </LazySection>
      </main>
    </>
  );
}

export default HomePage;

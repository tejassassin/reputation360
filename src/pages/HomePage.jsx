import { lazy, Suspense } from "react";
import { SeoHead } from "../components/SeoHead.jsx";
import { faqAdditionalJsonLdFromItems, mapQuestionAnswerFaqs } from "../data/faqPageSchema.js";
import { HOME_FAQ_ITEMS } from "../data/homeFaqItems.js";
import { HOME_PAGE_JSON_LD } from "../data/organizationSchema.js";
import { useLocalizedSeo } from "../hooks/useLocalizedSeo.js";
import { LazyWhenVisible } from "../components/LazyWhenVisible.jsx";
import Hero from "../components/Hero";
import WhoWeServeCards from "../components/WhoWeServeCards";
import OurServices from "../components/OurServices";
import CaseStudies from "../components/CaseStudies";

const WhatWeBelieve = lazy(() => import("../components/WhatWeBelieve"));
const WhatWeDo = lazy(() => import("../components/WhatWeDo"));
const HowReputation360Works = lazy(() => import("../components/HowReputation360Works"));
const WhyClientsChoose = lazy(() => import("../components/WhyClientsChoose"));
const Contact = lazy(() => import("../components/Contact"));
const HomeFaq = lazy(() => import("../components/HomeFaq"));
const HomeTestimonials = lazy(() => import("../components/HomeTestimonials.jsx"));

function SectionShell({ minHeight, eager = false, className = "", children }) {
  return (
    <LazyWhenVisible
      minHeight={minHeight}
      eager={eager}
      className={className}
      rootMargin={eager ? "0px 0px" : "320px 0px"}
      fallback={<div style={{ minHeight }} aria-hidden />}
    >
      <Suspense fallback={<div style={{ minHeight }} aria-hidden />}>{children}</Suspense>
    </LazyWhenVisible>
  );
}

function HomePage() {
  const homeSeo = useLocalizedSeo("home");

  return (
    <>
      <SeoHead
        title={homeSeo.title}
        description={homeSeo.description}
        canonicalPath={homeSeo.path}
        jsonLd={HOME_PAGE_JSON_LD}
        additionalJsonLd={faqAdditionalJsonLdFromItems(mapQuestionAnswerFaqs(HOME_FAQ_ITEMS))}
      />
      <Hero />
      <main className="flex w-full flex-col gap-12 pt-8 md:gap-16 md:pt-12 lg:gap-20 lg:pt-16">
        <SectionShell minHeight="22rem">
          <section>
            <WhatWeBelieve />
          </section>
        </SectionShell>
        <SectionShell minHeight="20rem">
          <section>
            <WhatWeDo />
          </section>
        </SectionShell>
        <SectionShell minHeight="18rem" eager>
          <OurServices />
        </SectionShell>
        <SectionShell minHeight="24rem">
          <section className="bg-offwhite">
            <HomeTestimonials />
          </section>
        </SectionShell>
        <WhoWeServeCards />
        <SectionShell minHeight="20rem">
          <section className="bg-white">
            <HowReputation360Works />
          </section>
        </SectionShell>
        <SectionShell minHeight="18rem">
          <WhyClientsChoose />
        </SectionShell>
        <CaseStudies />
        <SectionShell minHeight="22rem" className="-mt-4 md:-mt-6 lg:-mt-8">
          <section>
            <HomeFaq />
          </section>
        </SectionShell>
        <SectionShell minHeight="14rem">
          <Contact />
        </SectionShell>
      </main>
    </>
  );
}

export default HomePage;

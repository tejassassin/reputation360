"use client";

import { useEffect } from "react";
import { lazy } from "react";
import { SeoHead } from "../components/SeoHead.jsx";
import { HOME_PAGE_JSON_LD } from "../data/organizationSchema.js";
import { useLocalizedSeo } from "../hooks/useLocalizedSeo.js";
import Hero from "../components/Hero";
import { ConsultationBottomCta } from "../components/ConsultationBottomCta.jsx";
import {
  CONSULTATION_FORM_ID,
  scrollToFreeConsultation,
} from "../constants/homeConsultation.js";
import { trackConsultationFormScrollSuccess } from "../lib/conversionAnalytics.js";
import WhatWeBelieve from "../components/WhatWeBelieve";
import HomeFreeReputationScoreSection from "../components/home/HomeFreeReputationScoreSection.jsx";
import WhoWeServeCards from "../components/WhoWeServeCards";
import WhyClientsChoose from "../components/WhyClientsChoose";
import LazySection from "../components/LazySection.jsx";

const WhatWeDo = lazy(() => import("../components/WhatWeDo"));
const OurServices = lazy(() => import("../components/OurServices"));
const HomeTestimonials = lazy(() => import("../components/HomeTestimonials.jsx"));
const HomeFaq = lazy(() => import("../components/HomeFaq"));

/**
 * @param {{ renderSeo?: boolean }} props
 */
function HomePage({ renderSeo = true }) {
  const homeSeo = useLocalizedSeo("home");

  useEffect(() => {
    function onHash() {
      if (window.location.hash !== `#${CONSULTATION_FORM_ID}`) return;
      requestAnimationFrame(() => {
        scrollToFreeConsultation({ onSuccess: trackConsultationFormScrollSuccess });
      });
    }
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

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
      <main className="r360-home-page-main flex w-full flex-col pt-0">
        <div className="r360-home-believe-about-services-continuity">
          <div className="r360-home-believe-about-stack">
            <section>
              <WhatWeBelieve />
            </section>
            <HomeFreeReputationScoreSection />
            <LazySection minHeight="1px">
              <WhatWeDo />
            </LazySection>
          </div>
          <LazySection minHeight="24rem">
            <OurServices />
          </LazySection>
        </div>
        <LazySection minHeight="20rem">
          <section className="bg-offwhite">
            <HomeTestimonials />
          </section>
        </LazySection>
        <div>
          <WhoWeServeCards />
          <WhyClientsChoose />
        </div>
        <div className="bg-white">
          <LazySection minHeight="12rem">
            <HomeFaq />
          </LazySection>
          <ConsultationBottomCta />
        </div>
      </main>
    </>
  );
}

export default HomePage;

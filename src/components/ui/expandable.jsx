"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import {
  ShieldCheck,
  Palette,
  FileText,
  TrendingUp,
  Linkedin,
  MessageSquare,
} from "lucide-react";

export function ServicesExpandable() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div
                layoutId={`icon-${active.title}-${id}`}
                className="w-full h-48 bg-gradient-to-br from-navy to-slate flex items-center justify-center"
              >
                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  {active.icon}
                </div>
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-heading font-bold text-xl text-navy dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="font-body text-steel dark:text-neutral-400 mt-1"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    className="px-4 py-3 text-sm rounded-full font-heading font-semibold bg-green hover:bg-green/90 text-white transition-colors"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="font-body text-steel text-sm md:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-3xl mx-auto w-full space-y-2">
        {servicesCards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center bg-white hover:bg-green/5 border border-steel/10 hover:border-green/30 rounded-xl cursor-pointer transition-colors"
          >
            <div className="flex gap-4 flex-col md:flex-row items-center">
              <motion.div
                layoutId={`icon-${card.title}-${id}`}
                className="w-14 h-14 bg-gradient-to-br from-navy to-slate rounded-xl flex items-center justify-center shrink-0"
              >
                {card.icon}
              </motion.div>
              <div className="text-center md:text-left">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-heading font-semibold text-navy dark:text-neutral-200"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="font-body text-steel dark:text-neutral-400 text-sm max-w-md"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-heading font-semibold bg-navy/5 hover:bg-green hover:text-white text-navy mt-4 md:mt-0 transition-colors"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const servicesCards = [
  {
    title: "Online Reputation Management & Negative Link Suppression",
    description:
      "We strengthen positive search results and reduce the visibility of harmful, misleading, or outdated content.",
    icon: <ShieldCheck className="w-8 h-8 text-green" />,
    ctaText: "Learn More",
    ctaLink: "#contact",
    content: () => {
      return (
        <p>
          Our Online Reputation Management service is designed to take control
          of your digital narrative. We employ advanced SEO strategies, content
          creation, and link building techniques to push positive content to the
          top of search results. <br /> <br />
          Whether you're dealing with negative reviews, outdated articles, or
          misleading information, our team works tirelessly to suppress harmful
          content and amplify your positive presence across all major search
          engines. With a 97% success rate, we've helped over 1,700 clients
          reclaim their online reputation.
        </p>
      );
    },
  },
  {
    title: "Branding",
    description:
      "We help your audience recognize your brand the way you intend — building connection, trust, and momentum for growth.",
    icon: <Palette className="w-8 h-8 text-green" />,
    ctaText: "Learn More",
    ctaLink: "#contact",
    content: () => {
      return (
        <p>
          Your brand is more than just a logo—it's the complete experience your
          audience has with your business. Our branding services help you craft
          a cohesive, memorable identity that resonates with your target market.{" "}
          <br /> <br />
          From visual identity development to brand voice and messaging, we
          ensure every touchpoint reinforces your brand values and creates
          lasting impressions. We help you stand out in crowded markets and
          build the kind of brand equity that drives long-term business success.
        </p>
      );
    },
  },
  {
    title: "Content & Thought Leadership",
    description:
      "Strategic content that builds authority, educates your audience, and positions you as a credible voice in your industry.",
    icon: <FileText className="w-8 h-8 text-green" />,
    ctaText: "Learn More",
    ctaLink: "#contact",
    content: () => {
      return (
        <p>
          Content is the foundation of modern marketing. Our content strategy
          services help you create valuable, engaging content that attracts and
          retains your ideal audience while establishing you as an industry
          authority. <br /> <br />
          From blog posts and whitepapers to video content and podcasts, we
          develop comprehensive content strategies that drive organic traffic,
          generate leads, and build trust with your audience. Our thought
          leadership programs position executives and brands as go-to experts in
          their fields.
        </p>
      );
    },
  },
  {
    title: "Performance Marketing",
    description:
      "Paid campaigns designed to increase qualified leads, drive conversions, and accelerate business growth.",
    icon: <TrendingUp className="w-8 h-8 text-green" />,
    ctaText: "Learn More",
    ctaLink: "#contact",
    content: () => {
      return (
        <p>
          Performance marketing is about measurable results. We design and
          execute data-driven paid campaigns across Google, Meta, LinkedIn, and
          other platforms to drive qualified traffic and maximize your ROI.{" "}
          <br /> <br />
          Our team continuously optimizes campaigns based on real-time data, A/B
          testing, and advanced analytics to ensure every dollar spent delivers
          maximum impact. From lead generation to e-commerce sales, we tailor
          our approach to your specific business goals and growth targets.
        </p>
      );
    },
  },
  {
    title: "LinkedIn Personal Branding",
    description:
      "Building authority and visibility through strategic storytelling, consistent high-quality content, and thought leadership.",
    icon: <Linkedin className="w-8 h-8 text-green" />,
    ctaText: "Learn More",
    ctaLink: "#contact",
    content: () => {
      return (
        <p>
          LinkedIn is the premier platform for professional networking and B2B
          influence. Our LinkedIn Personal Branding service helps executives,
          entrepreneurs, and professionals build a powerful presence that opens
          doors and creates opportunities. <br /> <br />
          We craft compelling profiles, develop content strategies, and manage
          your LinkedIn presence to grow your network, establish credibility,
          and generate meaningful business connections. From profile
          optimization to ghostwritten content, we handle every aspect of your
          LinkedIn success.
        </p>
      );
    },
  },
  {
    title: "Consultation",
    description:
      "Strategic marketing consultation built on experience, not theory — offering clarity, course correction, and measurable impact.",
    icon: <MessageSquare className="w-8 h-8 text-green" />,
    ctaText: "Learn More",
    ctaLink: "#contact",
    content: () => {
      return (
        <p>
          Sometimes you need expert guidance without a full-service engagement.
          Our strategic consultation services provide actionable insights,
          honest assessments, and practical recommendations based on 13+ years
          of industry experience. <br /> <br />
          Whether you need a comprehensive marketing audit, help developing a
          go-to-market strategy, or guidance on specific challenges, our
          consultants deliver clarity and direction. We focus on practical,
          implementable strategies that drive real business results—not
          theoretical frameworks that look good on paper.
        </p>
      );
    },
  },
];

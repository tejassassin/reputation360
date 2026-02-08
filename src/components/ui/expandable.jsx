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
                className="w-full h-48 bg-linear-to-br from-navy to-slate flex items-center justify-center"
              >
                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center [&_svg]:!text-white [&_svg]:!stroke-white">
                  {active.icon}
                </div>
              </motion.div>

              <div>
                <div className="flex flex-row flex-nowrap justify-between items-center gap-4 p-4">
                  <motion.h3
                    layoutId={`title-${active.title}-${id}`}
                    className="font-heading font-bold text-xl text-navy dark:text-neutral-200 shrink min-w-0 "
                  >
                    {active.title}
                  </motion.h3>
                  <motion.button
                    type="button"
                    layoutId={`button-${active.title}-${id}`}
                    onClick={() => setActive(null)}
                    className="px-4 py-3 text-sm rounded-full font-heading font-semibold bg-green hover:bg-green/80 text-white transition-colors shrink-0 cursor-pointer"
                  >
                    Close
                  </motion.button>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="font-body text-steel text-sm md:text-base h-20 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
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

      <ul className="max-w-5xl mx-auto w-[55%] grid grid-cols-1 gap-2 mb-3">
        {content.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-3 flex flex-col md:flex-row justify-between items-center bg-white hover:bg-green/5 border-1 border-steel/40 hover:border-green/30 rounded-xl cursor-pointer transition-colors"
          >
            <div className="flex gap-4 flex-col md:flex-row items-center w-[400px]">
              <motion.div
                layoutId={`icon-${card.title}-${id}`}
                className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center shrink-0 [&_svg]:!text-white [&_svg]:!stroke-white"
              >
                {card.icon}
              </motion.div>
              <div className="text-center md:text-left  ">
                <motion.h3
                  layoutId={`title-${card.title}-${id} `}
                  className="font-heading font-semibold text-navy dark:text-neutral-200 whitespace-nowrap"
                >
                  {card.title}
                </motion.h3>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-heading font-semibold text-white  cursor-pointer hover:bg-green/90 hover:text-white  mt-4 md:mt-0 transition-colors"
            >
              {/* {card.ctaText} */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="navy"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-down-right-icon lucide-arrow-down-right"
              >
                <path d="m7 7 10 10" />
                <path d="M17 7v10H7" />
              </svg>
            </motion.button>
          </motion.div>
        ))}
      </ul>
      <ul className="max-w-5xl mx-auto w-full grid grid-cols-2 gap-2">
        {servicesCards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-3 flex flex-col md:flex-row justify-between items-center bg-white hover:bg-green/5 border-1 border-steel/40 hover:border-green/30 rounded-xl cursor-pointer transition-colors"
          >
            <div className="flex gap-4 flex-col md:flex-row items-center w-[400px]">
              <motion.div
                layoutId={`icon-${card.title}-${id}`}
                className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center shrink-0 [&_svg]:!text-white [&_svg]:!stroke-white"
              >
                {card.icon}
              </motion.div>
              <div className="text-center md:text-left  ">
                <motion.h3
                  layoutId={`title-${card.title}-${id} `}
                  className="font-heading font-semibold text-navy dark:text-neutral-200 whitespace-nowrap"
                >
                  {card.title}
                </motion.h3>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-heading font-semibold text-white  cursor-pointer hover:bg-green/90 hover:text-white  mt-4 md:mt-0 transition-colors"
            >
              {/* {card.ctaText} */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="navy"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-down-right-icon lucide-arrow-down-right"
              >
                <path d="m7 7 10 10" />
                <path d="M17 7v10H7" />
              </svg>
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

const content = [
  {
    title: "Online Reputation Management & Negative Link Suppression",
    description: "",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-id-card-lanyard-icon lucide-id-card-lanyard"
      >
        <path d="M13.5 8h-3" />
        <path d="m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3" />
        <path d="M16.899 22A5 5 0 0 0 7.1 22" />
        <path d="m9 2 3 6" />
        <circle cx="12" cy="15" r="3" />
      </svg>
    ),
    ctaText: "Learn More",
    ctaLink: "#contact",
    content: () => {
      return (
        <p>
          We strengthen positive search results and reduce the visibility of
          harmful, misleading, or outdated content
        </p>
      );
    },
  },
];

const servicesCards = [
  {
    title: "Employer Branding & Talent Reputation ",
    description: "",
    icon: <ShieldCheck className="w-8 h-8 text-green" />,
    ctaText: "Learn More",
    ctaLink: "#contact",
    content: () => {
      return (
        <p>
          We build an authentic employer narrative that reflects your culture,
          values, and leadership so people trust what they see before they ever
          speak to you.
        </p>
      );
    },
  },
  {
    title: "Branding",
    description: "",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-message-circle-heart-icon lucide-message-circle-heart"
      >
        <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
        <path d="M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 5.004 2.224 3 3 0 0 1-.832 2.083l-3.447 3.62a1 1 0 0 1-1.45-.001z" />
      </svg>
    ),
    ctaText: "Learn More",
    ctaLink: "#contact",
    content: () => {
      return (
        <p>
          We help your audience recognize your brand the way you intend —
          building connection, trust, and momentum for growth.
        </p>
      );
    },
  },
  {
    title: "Content & Thought Leadership",
    description: "",
    icon: <FileText className="w-8 h-8 text-green" />,
    ctaText: "Learn More",
    ctaLink: "#contact",
    content: () => {
      return (
        <p>
          Strategic content that builds authority, educates your audience, and
          positions you as a credible voice in your industry.
        </p>
      );
    },
  },
  {
    title: "Performance Marketing",
    description: "",
    icon: <TrendingUp className="w-8 h-8 text-green" />,
    ctaText: "Learn More",
    ctaLink: "#contact",
    content: () => {
      return (
        <p>
          Paid campaigns designed to increase qualified leads, drive
          conversions, and accelerate business growth.
        </p>
      );
    },
  },
  {
    title: "LinkedIn Personal Branding",
    description: "",
    icon: <Linkedin className="w-8 h-8 text-green" />,
    ctaText: "Learn More",
    ctaLink: "#contact",
    content: () => {
      return (
        <p>
          Building authority and visibility through strategic storytelling,
          consistent high-quality content, and thought leadership that resonates
          with the right audience.
        </p>
      );
    },
  },
  {
    title: "Consultation",
    description: "",
    icon: <MessageSquare className="w-8 h-8 text-green" />,
    ctaText: "Learn More",
    ctaLink: "#contact",
    content: () => {
      return (
        <p>
          Strategic marketing consultation built on experience, not theory -
          offering clarity, course correction, and measurable impact.
        </p>
      );
    },
  },
];

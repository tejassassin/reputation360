"use client";

import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn(
        "h-[40rem] w-full overflow-y-auto overflow-x-hidden",
        className
      )}
      ref={gridRef}
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-10 py-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              key={"grid-1" + idx}
              style={{ y: translateFirst }}
              className="ha-lift relative h-80 w-full shrink-0 overflow-hidden rounded-lg shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35),0_12px_24px_-8px_rgba(0,0,0,0.2)]"
            >
              <img
                src={el}
                className="absolute inset-0 h-full w-full object-cover object-center"
                alt={`parallax image ${idx + 1}`}
              />
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col gap-10">
          {secondPart.map((el, idx) => (
            <motion.div
              key={"grid-2" + idx}
              style={{ y: translateSecond }}
              className="ha-lift relative h-80 w-full shrink-0 overflow-hidden rounded-lg shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35),0_12px_24px_-8px_rgba(0,0,0,0.2)]"
            >
              <img
                src={el}
                className="absolute inset-0 h-full w-full object-cover object-center"
                alt={`parallax image ${third + idx + 1}`}
              />
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              key={"grid-3" + idx}
              style={{ y: translateThird }}
              className="ha-lift relative h-80 w-full shrink-0 overflow-hidden rounded-lg shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35),0_12px_24px_-8px_rgba(0,0,0,0.2)]"
            >
              <img
                src={el}
                className="absolute inset-0 h-full w-full object-cover object-center"
                alt={`parallax image ${2 * third + idx + 1}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

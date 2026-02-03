import React from "react";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import individuals from "../assets/Individuals.png";
import CEOs from "../assets/CEOs.png";
import doctors from "../assets/Doctors.png";
import brands from "../assets/Brands.png";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

function WhoWeWorkWith() {
  const testimonials = [
    {
      name: "Individuals",
      src: individuals,
    },
    {
      name: "Founders, CEOs & Senior Executives",
      src: CEOs,
    },
    {
      name: "Doctors, lawyers & professionals",
      src: doctors,
    },
    {
      name: "Brands and companies of all sizes",
      src: brands,
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mt-8  m-auto text-center">
        Who we work with
      </h2>
      {/* <AnimatedTestimonials testimonials={testimonials} />
       */}

      <div className="flex flex-nowrap justify-center gap-6  scroll-smooth w-full ">
        {testimonials.map((testimonial, index) => (
          <CardContainer
            key={index}
            className="cursor-pointer shrink-0 w-64 sm:w-82 snap-center "
          >
            <CardBody className=" relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl  border flex flex-col items-center justify-center">
              <CardItem
                as="p"
                translateZ="60"
                className="text-white text-sm  dark:text-neutral-300 line-clamp-2 flex-1 min-h-0"
              >
                {testimonial.quote}
              </CardItem>
              <CardItem
                translateZ="100"
                className="w-full  bg-white rounded-lg p-2 shrink-0"
              >
                <img
                  src={testimonial.src}
                  height={140}
                  width={140}
                  className="w-full h-auto rounded-lg object-contain max-h-20"
                  alt={testimonial.name}
                />
              </CardItem>
              <CardItem
                translateZ="50"
                className="text-lg font-bold text-navy line-clamp-2 text-center"
              >
                {testimonial.name}
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default WhoWeWorkWith;

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
      <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-navy mt-4 mb-0 text-center">
        Who we work with
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {testimonials.map((testimonial, index) => (
          <CardContainer
            key={index}
            className="cursor-pointer w-full"
            containerClassName="py-3 sm:py-4"
          >
            <CardBody className="bg-white py-4 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl border flex flex-col items-center justify-center">
              <CardItem
                translateZ="100"
                className="w-[70%] rounded-lg shrink-0 py-4 sm:py-6 overflow-hidden"
              >
                <div
                  className="max-h-16 h-16 sm:max-h-20 sm:h-20 rounded-lg bg-navy [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] mx-auto transition-all duration-300 group-hover/card:w-1/3"
                  style={{
                    maskImage: `url(${testimonial.src})`,
                    WebkitMaskImage: `url(${testimonial.src})`,
                  }}
                  role="img"
                  aria-label={testimonial.name}
                />
              </CardItem>
              <CardItem
                translateZ="50"
                className="text-sm sm:text-base lg:text-lg font-bold text-navy text-center px-2 pb-2"
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

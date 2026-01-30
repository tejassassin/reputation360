import React from "react";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import individuals from "../assets/individuals.png";
import CEOs from "../assets/CEOs.png";
import doctors from "../assets/doctors.png";
import brands from "../assets/brands.png";

function WhoWeWorkWith() {
  const testimonials = [
    {
      name: "Individuals",
      quote:
        "Personal branding and reputation management for everyday professionals. We help you stand out and build trust in your personal story.",
      src: individuals,
    },
    {
      name: "Founders, CEOs & Senior Executives",
      quote:
        "Executive presence and thought leadership at scale. Shape how the world sees you and your vision.",
      src: CEOs,
    },
    {
      name: "Doctors, lawyers & professionals",
      quote:
        "Trusted expertise and credibility in your field. Protect and strengthen your professional reputation.",
      src: doctors,
    },
    {
      name: "Brands and companies of all sizes",
      quote:
        "From startups to enterprises—reputation that drives growth. We turn your story into lasting trust.",
      src: brands,
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4 m-auto text-center">
        Who we work with
      </h2>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}

export default WhoWeWorkWith;

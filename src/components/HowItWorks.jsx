import React from "react";
import { ClipboardCheck, Lightbulb, Rocket, Activity } from "lucide-react";
import { FocusCards } from "./ui/focus-cards";
import stepsImage from "../assets/steps.jpeg";

function HowItWorks() {
  const cards = [
    {
      title: "Audit ",
      description: "We assess your current search results and risks",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <ClipboardCheck className="text-white" />,
    },
    {
      title: "Strategy ",
      description: "A custom plan based on your goals and urgency",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <Lightbulb className="text-white" />,
    },
    {
      title: "Execution ",
      description: "SEO-driven content, authority building & asset control",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <Rocket className="text-white" />,
    },
    {
      title: "Monitoring ",
      description: "Ongoing tracking and adjustments out outcomes",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <Activity className="text-white" />,
    },
  ];
  return (
    <div className="py-4">
      <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-navy my-8 mx-auto px-4 text-center">
        How Reputation360 works
      </h2>
      <div className="max-w-4xl mx-auto px-4">
        <img
          src={stepsImage}
          alt="How Reputation360 works - steps"
          className="w-full rounded-lg object-cover"
        />
      </div>
      {/* <FocusCards cards={cards} /> */}


    </div>
  );
}

export default HowItWorks;

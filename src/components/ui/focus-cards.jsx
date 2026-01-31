import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const CARD_BACKGROUNDS = [
  "bg-navy",
  "bg-navy",
  "bg-navy",
  "bg-navy",
];

export const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "cursor-pointer rounded-lg relative overflow-hidden h-10 md:h-40 w-full transition-all duration-300 ease-out flex flex-col justify-center",
      CARD_BACKGROUNDS[index % CARD_BACKGROUNDS.length],
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
      hovered === index && "scale-[1.02]"
    )}
  >
    <div
      className={cn(
        "relative z-10 flex flex-col items-center gap-2 p-4 transition-transform duration-300 ease-out",
        hovered === index && "-translate-y-2"
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="text-white text-3xl font-semibold border-2 border-white rounded-full w-10 h-10 flex items-center justify-center">
          {index + 1}
        </div>
        <p className="text-xl md:text-2xl font-medium text-white leading-snug text-center">
          {card.title}
        </p>
      </div>
      <p
        className={cn(
          "text-xs text-white/80 leading-snug transition-all duration-300 text-center",
          hovered === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
        )}
      >
        {card.description}
      </p>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto px-4 md:px-8 w-full items-start mt-6">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}

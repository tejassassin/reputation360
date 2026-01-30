import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const CARD_BACKGROUNDS = [
  "bg-gradient-to-br from-slate-700 to-slate-900",
  "bg-gradient-to-br from-slate-800 to-slate-950",
  "bg-gradient-to-br from-slate-700 to-slate-900",
  "bg-gradient-to-br from-slate-800 to-slate-950",
];

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: { title: string; src: string; icon?: React.ReactNode };
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative overflow-hidden h-20 md:h-60 w-full transition-all duration-300 ease-out flex flex-col justify-end",
        CARD_BACKGROUNDS[index % CARD_BACKGROUNDS.length],
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
        hovered === index && "scale-[1.02]"
      )}
    >
      <div className="absolute inset-0 bg-black/30 hover:bg-black/40 transition-colors duration-300" />
      <div className="relative z-10 flex flex-col gap-3 py-6 px-5 md:py-8 md:px-6">
        {/* {card.icon && (
          <div className="text-white/90 [&>svg]:w-8 [&>svg]:h-8 md:[&>svg]:w-10 md:[&>svg]:h-10">
            {card.icon}
          </div>
        )} */}
        <div className="text-white/90 [&>svg]:w-8 [&>svg]:h-8 md:[&>svg]:w-10 md:[&>svg]:h-10">
          Step {index + 1}
        </div>
        <p className="text-lg md:text-xl font-medium text-white leading-snug drop-shadow-sm">
          {card.title}
        </p>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
  icon?: React.ReactNode;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-2xl mx-auto md:px-8 w-full">
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

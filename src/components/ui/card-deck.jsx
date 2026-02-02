import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

// Card offsets for stacked effect - each card has different rotation and position
const cardTransforms = [
  { rotate: -8, translateX: -20, translateY: 10 },
  { rotate: 8, translateX: 20, translateY: -10 },
  { rotate: -5, translateX: -12, translateY: 18 },
  { rotate: 5, translateX: 12, translateY: -18 },
];

// Background colors for cards
const cardColors = [
  "linear-gradient(135deg, #1e3a5f 0%, #0f2744 100%)",
  "linear-gradient(135deg, #2d5a87 0%, #1e3a5f 100%)",
  "linear-gradient(135deg, #3d7ab5 0%, #2d5a87 100%)",
  "linear-gradient(135deg, #4a8bc2 0%, #3d7ab5 100%)",
  "linear-gradient(135deg, #57a8d0 0%, #4a8bc2 100%)",
];

// Case Study Modal Component
function CaseStudyModal({ isOpen, onClose, caseStudy }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !caseStudy) return null;

  const data = caseStudy.data;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop - removed backdrop-blur for better scroll performance */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Modal Content - added transform for GPU acceleration */}
      <div
        className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl themed-scrollbar transform-gpu"
        onClick={(e) => e.stopPropagation()}
        style={{ willChange: 'transform' }}
      >
        {/* Header - using z-10 instead of sticky for smoother scrolling */}
        <div className="sticky top-0 bg-navy text-white p-6 rounded-t-2xl z-10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6 cursor-pointer" />
          </button>
          <p className="text-gold text-sm font-medium mb-1">Case Study</p>
          <h2 className="text-2xl font-bold font-heading">{data.title}</h2>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Profile */}
          <div>
            <p className="text-steel text-sm">
              <span className="text-navy font-bold w-[100px] inline-block">
                Industry
              </span>{" "}
              : {data.industry}
            </p>
            <p className="text-steel text-sm">
              <span className="text-navy font-bold w-[100px] inline-block">
                Profile:
              </span>{" "}
              : {data.profile}
            </p>
            <p className="text-steel text-sm">
              <span className="text-navy font-bold w-[100px] inline-block">
                Challenge Type
              </span>{" "}
              : {data.challengeType}
            </p>
            <p className="text-steel text-sm">
              <span className="text-navy font-bold w-[100px] inline-block">
                Duration
              </span>{" "}
              : {data.duration}
            </p>
          </div>

          {/* The Challenge */}
          <div>
            <h3 className="text-navy font-bold text-lg mb-2 font-heading">
              The Challenge
            </h3>
            <p className="text-steel leading-relaxed">{data.challenge}</p>
            <p className="text-steel mt-3">{data.challengeDrivers}</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-steel">
              {data.challengeDriversList?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-steel mt-3 italic">{data.challengeClosing}</p>
          </div>

          {/* Objective */}
          <div>
            <h3 className="text-navy font-bold text-lg mb-2 font-heading">
              Our Objective
            </h3>
            <p className="text-steel leading-relaxed">{data.objective}</p>
          </div>

          {/* Strategy */}
          <div>
            <h3 className="text-navy font-bold text-lg mb-2 font-heading">
              Our Strategy
            </h3>
            <ul className="space-y-2">
              {data.strategy?.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-steel">
                  <span className="w-6 h-6 bg-gold/20 text-gold rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div>
            <h3 className="text-navy font-bold text-lg mb-2 font-heading">
              The Results ({data.duration})
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.results?.map((item, i) => (
                <li
                  key={i}
                  className="bg-green-50 border border-green-200 rounded-lg p-3 text-green-800 text-sm flex items-center gap-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          <div className="bg-navy/5 rounded-xl p-5">
            <h3 className="text-navy font-bold text-lg mb-2 font-heading">
              Impact
            </h3>
            <p className="text-steel leading-relaxed">{data.impact}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CardDeck({ caseStudies }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);

  return (
    <>
      <div
        className="card-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          className="card-list"
          style={{
            position: "relative",
            width: "320px",
            height: "400px",
            perspective: "1200px",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setHoveredIndex(null);
          }}
        >
          {caseStudies &&
            caseStudies.map((caseStudy, index) => {
              const transform = cardTransforms[index % cardTransforms.length];
              const isCardHovered = hoveredIndex === index;
              const totalCards = caseStudies.length;
              const cardColor = cardColors[index % cardColors.length];

              // Calculate spread position when deck is hovered
              const spreadX = isHovered
                ? (index - (totalCards - 1) / 2) * 260
                : 0;

              // Z-index: hovered card on top, otherwise stack order
              const zIndex = isCardHovered ? 100 : totalCards - index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setSelectedCase(caseStudy)}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "280px",
                    height: "360px",
                    borderRadius: "16px",
                    background:
                      "linear-gradient(135deg, #1e3a5f 0%, #1f3b64 100%)",
                    boxShadow: isCardHovered
                      ? "0 25px 50px -12px rgba(0, 0, 0, 0.4)"
                      : "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
                    cursor: "pointer",
                    zIndex: zIndex,
                    transform: isHovered
                      ? `translate(-50%, -50%) translateX(${spreadX}px) translateY(${
                          isCardHovered ? -20 : 0
                        }px) rotate(0deg) scale(${isCardHovered ? 1.05 : 1})`
                      : `translate(-50%, -50%) translateX(${transform.translateX}px) translateY(${transform.translateY}px) rotate(${transform.rotate}deg)`,
                    transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "24px",
                    overflow: "hidden",
                  }}
                >
                  {/* Card Content */}
                  <div>
                    <span className="text-white text-xs font-medium uppercase tracking-wider">
                      Case Study
                    </span>
                    <h3 className="text-white text-xl font-bold mt-2 font-heading leading-tight">
                      {caseStudy.data.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <div className="text-white/90 text-sm">
                      <span className="block text-white/50 text-xs uppercase tracking-wider mb-1">
                        Industry
                      </span>
                      {caseStudy.data.industry}
                    </div>
                    <div className="text-white/90 text-sm">
                      <span className="block text-white/50 text-xs uppercase tracking-wider mb-1">
                        Duration
                      </span>
                      {caseStudy.data.duration}
                    </div>
                    <div
                      className="text-green text-sm font-medium flex items-center gap-1"
                      style={{
                        opacity: isCardHovered ? 1 : 0,
                        transform: isCardHovered
                          ? "translateY(0)"
                          : "translateY(10px)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      Click to read more →
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Modal */}
      <CaseStudyModal
        isOpen={!!selectedCase}
        onClose={() => setSelectedCase(null)}
        caseStudy={selectedCase}
      />
    </>
  );
}

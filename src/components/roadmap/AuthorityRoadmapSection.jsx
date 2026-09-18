import {
  AUTHORITY_ROADMAP_PATH_D,
} from "../../data/authorityRoadmapMilestones.js";

const GROWTH = "#4CAF50";
const NAVY = "#1F3B64";

/**
 * @param {typeof import("../../data/authorityRoadmapMilestones.js").ABOUT_AUTHORITY_ROADMAP_MILESTONES} milestones
 */
function AuthorityRoadmapSvg({ milestones, ariaLabel }) {
  return (
    <div className="r360-authority-roadmap-wrap hidden lg:block">
      <div className="relative mx-auto w-full min-w-0 lg:aspect-[2100/1120]">
        <svg
          className="h-auto w-full overflow-visible lg:absolute lg:inset-0 lg:h-full"
          viewBox="0 -210 2100 1120"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label={ariaLabel}
        >
          <path
            d={AUTHORITY_ROADMAP_PATH_D}
            fill="none"
            stroke="#293040"
            strokeWidth={56}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={AUTHORITY_ROADMAP_PATH_D}
            fill="none"
            stroke="#f8fafc"
            strokeWidth={2}
            strokeDasharray="12 12"
            strokeOpacity={0.55}
            strokeLinecap="round"
          />
          {milestones.map((m) => {
            const fill = m.green ? GROWTH : NAVY;
            const label = String(m.n).padStart(2, "0");
            return (
              <g key={m.n} className="group cursor-default">
                <line
                  x1={m.line.x1}
                  y1={m.line.y1}
                  x2={m.line.x2}
                  y2={m.line.y2}
                  stroke={fill}
                  strokeWidth={2}
                  className="transition-all duration-300 group-hover:stroke-[3]"
                />
                <circle
                  cx={m.anchor.cx}
                  cy={m.anchor.cy}
                  r={10}
                  fill={fill}
                  className="transition-transform duration-300 group-hover:scale-125"
                  style={{ transformOrigin: `${m.anchor.cx}px ${m.anchor.cy}px` }}
                />
                <g
                  className="transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-110"
                  style={{ transformOrigin: `${m.ring.cx}px ${m.ring.cy}px` }}
                >
                  <circle
                    cx={m.ring.cx}
                    cy={m.ring.cy}
                    r={50}
                    fill={fill}
                    className="drop-shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-all duration-300 group-hover:drop-shadow-[0_16px_32px_rgba(0,0,0,0.3)]"
                  />
                  <text
                    x={m.num.x}
                    y={m.num.y}
                    fill="#ffffff"
                    stroke="rgba(15, 23, 42, 0.45)"
                    strokeWidth={3}
                    strokeLinejoin="round"
                    textAnchor="middle"
                    className="pointer-events-none font-heading text-[30px] font-extrabold lg:text-[34px]"
                    style={{
                      fontVariantNumeric: "tabular-nums",
                      paintOrder: "stroke fill",
                    }}
                  >
                    {label}
                  </text>
                </g>
                <foreignObject
                  x={m.fo.x}
                  y={m.fo.y}
                  width={m.fo.w}
                  height={m.fo.h}
                  className="transition-transform duration-300 ease-out group-hover:-translate-y-1"
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    className={`flex h-full min-h-0 flex-col gap-1 px-1 text-center lg:px-2 ${
                      m.green ? "justify-end" : "justify-start"
                    }`}
                  >
                    <h3 className="font-heading text-[17px] font-bold leading-snug text-[#02254d] transition-colors duration-300 group-hover:text-[#4CAF50] lg:text-[19px]">
                      {m.title}
                    </h3>
                    <p className="font-heading text-[15px] font-normal leading-relaxed tracking-normal text-[#43474e] transition-colors duration-300 group-hover:text-[#02254d] lg:text-[17px]">
                      {m.text}
                    </p>
                  </div>
                </foreignObject>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

/**
 * @param {typeof import("../../data/authorityRoadmapMilestones.js").ABOUT_AUTHORITY_ROADMAP_MILESTONES} milestones
 */
function AuthorityRoadmapMobileTimeline({ milestones }) {
  return (
    <ol className="r360-authority-roadmap-mobile m-0 list-none p-0 lg:hidden">
      {milestones.map((m, index) => {
        const fillClass = m.green ? "bg-[#4CAF50]" : "bg-[#1F3B64]";
        const isLast = index === milestones.length - 1;
        return (
          <li key={m.n} className="r360-authority-roadmap-mobile-item relative pl-14">
            {!isLast ? (
              <span
                className="r360-authority-roadmap-mobile-stem absolute left-[1.375rem] top-12 bottom-0 w-0.5 bg-[#1F3B64]/15"
                aria-hidden
              />
            ) : null}
            <span
              className={`absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full font-heading text-[15px] font-extrabold text-white shadow-md ${fillClass}`}
            >
              {String(m.n).padStart(2, "0")}
            </span>
            <div className="pb-8">
              <h3 className="mb-1.5 font-heading text-[17px] font-bold leading-snug text-[#02254d]">
                {m.title}
              </h3>
              <p className="mb-0 font-heading text-[15px] font-normal leading-relaxed text-[#43474e]">
                {m.text}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

/**
 * @param {object} props
 * @param {string} props.sectionId
 * @param {string} props.headingId
 * @param {string} props.eyebrow
 * @param {string} props.heading
 * @param {string} props.subheading
 * @param {typeof import("../../data/authorityRoadmapMilestones.js").ABOUT_AUTHORITY_ROADMAP_MILESTONES} props.milestones
 * @param {"about" | "contact"} [props.layoutVariant]
 */
export function AuthorityRoadmapSection({
  sectionId,
  headingId,
  eyebrow,
  heading,
  subheading,
  milestones,
  layoutVariant = "about",
}) {
  const sectionClass =
    layoutVariant === "about"
      ? "r360-authority-roadmap-section r360-authority-roadmap-section--about"
      : "r360-authority-roadmap-section r360-authority-roadmap-section--contact";

  return (
    <section
      id={sectionId}
      className={`${sectionClass} scroll-mt-28 bg-[#f9f9ff] px-4 md:scroll-mt-32 md:px-8`}
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-7xl 2xl:max-w-[min(90rem,calc(100vw-3rem))]">
        <header className="r360-authority-roadmap-intro pb-5 text-center md:pb-6">
          <p className="mb-2 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-[#4CAF50] md:mb-2.5">
            {eyebrow}
          </p>
          <h2
            id={headingId}
            className="font-heading text-[26px] font-bold tracking-tight text-[#02254d] md:text-[34px] lg:text-[36px]"
          >
            {heading}
          </h2>
          <p className="mx-auto mt-2 max-w-3xl text-[15px] leading-relaxed text-[#43474e] md:mt-2.5 md:text-[16px]">
            {subheading}
          </p>
        </header>

        <AuthorityRoadmapMobileTimeline milestones={milestones} />
        <AuthorityRoadmapSvg
          milestones={milestones}
          ariaLabel="Five-step reputation management process roadmap"
        />
      </div>
    </section>
  );
}

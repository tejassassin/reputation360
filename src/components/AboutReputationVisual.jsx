import { useId } from "react";

const strategyChipW = 50;
const strategyChipH = 36;
const strategyLabelSize = 7;

function StrategyChip({ x, y, label, title, icon, greenStroke = false }) {
  const stroke = greenStroke ? "#4CAF50" : "#2E5B88";
  const textFill = greenStroke ? "#15803D" : "#1F3B64";
  return (
    <g transform={`translate(${x}, ${y})`} role="group" aria-label={title}>
      <title>{title}</title>
      <rect
        width={strategyChipW}
        height={strategyChipH}
        rx="6"
        fill="#FFFFFF"
        stroke={stroke}
        strokeOpacity={greenStroke ? 0.7 : 1}
        strokeWidth="1.25"
      />
      <g transform="translate(8, 5)">{icon}</g>
      <text
        x={strategyChipW / 2}
        y={strategyChipH - 5}
        fill={textFill}
        fontSize={strategyLabelSize}
        fontWeight="800"
        textAnchor="middle"
      >
        {label}
      </text>
    </g>
  );
}

/**
 * Home third fold: reputation challenge, Reputation360 strategy, stronger Google / AI presence.
 */
export default function AboutReputationVisual() {
  const uid = useId().replace(/:/g, "");
  const flowGrad = `abtr-flow-${uid}`;
  const glowGrad = `abtr-glow-${uid}`;
  const strategyGlow = `abtr-strategy-${uid}`;
  const captionId = `${uid}-caption`;

  const labelSize = 15.4;
  const strategyTitleSize = 12.5;
  const cardTitleSize = 15.4;
  const footerSize = 12.65;

  const panel1X = 4;
  const panel1W = 148;
  const panel2X = 172;
  const panel2W = 191;
  const panel3X = 383;
  const panel3W = 269;
  const panelEnd1 = panel1X + panel1W;
  const panelEnd2 = panel2X + panel2W;
  const strategyCx = panel2X + panel2W / 2;

  const monitoringIcon = (
    <>
      <circle cx="7" cy="7" r="5.5" stroke="#2E5B88" strokeWidth="1.25" fill="none" />
      <path d="M10.5 10.5l3.5 3.5" stroke="#2E5B88" strokeWidth="1.25" strokeLinecap="round" />
    </>
  );
  const contentIcon = (
    <path d="M2 3h12M2 7h9M2 11h11" stroke="#2E5B88" strokeWidth="1.25" strokeLinecap="round" />
  );
  const seoIcon = (
    <>
      <circle cx="6" cy="6" r="4.5" stroke="#2E5B88" strokeWidth="1.25" fill="none" />
      <path d="M9.5 9.5l3 3" stroke="#2E5B88" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M12 12v4M10 14h4" stroke="#4CAF50" strokeWidth="1.1" strokeLinecap="round" />
    </>
  );
  const growthIcon = (
    <path
      d="M3 14l5-7 4 4 6-8"
      stroke="#4CAF50"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  );

  const gridLeft = strategyCx - strategyChipW - 4;
  const gridRight = strategyCx + 4;
  const gridRow1Y = 146;
  const gridRow2Y = 188;

  return (
    <figure className="r360-about-reputation-visual m-0 flex w-full flex-col" aria-labelledby={captionId}>
      <div className="r360-about-reputation-visual-inner relative w-full px-2 py-3 sm:px-3 sm:py-3.5">
        <svg
          className="r360-about-reputation-visual-svg r360-about-reputation-visual-svg--wide mx-auto hidden h-auto w-full max-w-none sm:block"
          viewBox="0 0 656 252"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <linearGradient id={flowGrad} x1="0" y1="0" x2="1" y2="0">
              <stop stopColor="#1F3B64" />
              <stop offset="0.5" stopColor="#2E5B88" />
              <stop offset="1" stopColor="#4CAF50" />
            </linearGradient>
            <radialGradient id={strategyGlow} cx="50%" cy="46%" r="55%">
              <stop stopColor="#2E5B88" stopOpacity="0.45" />
              <stop offset="1" stopColor="#2E5B88" stopOpacity="0" />
            </radialGradient>
            <radialGradient id={glowGrad} cx="70%" cy="48%" r="62%">
              <stop stopColor="#4CAF50" stopOpacity="0.5" />
              <stop offset="0.35" stopColor="#2E5B88" stopOpacity="0.28" />
              <stop offset="1" stopColor="#1F3B64" stopOpacity="0" />
            </radialGradient>
          </defs>

          <rect
            x={panel1X}
            y="8"
            width={panel1W}
            height="232"
            rx="12"
            fill="#FFF1F2"
            stroke="#FECACA"
            strokeWidth="1.25"
          />
          <text x="14" y="32" fill="#BE123C" fontSize={labelSize} fontWeight="800">
            Reputation Challenges
          </text>
          <rect x="14" y="44" width="118" height="28" rx="6" fill="#FFFFFF" stroke="#F87171" strokeWidth="1.5" />
          <rect x="22" y="54" width="68" height="8" rx="2" fill="#DC2626" fillOpacity="0.82" />
          <rect x="14" y="80" width="128" height="12" rx="3" fill="#FCA5A5" fillOpacity="0.9" />
          <rect x="14" y="98" width="106" height="12" rx="3" fill="#FECACA" />
          <rect x="14" y="116" width="118" height="12" rx="3" fill="#EF4444" fillOpacity="0.58" />
          <rect x="14" y="134" width="88" height="12" rx="3" fill="#FECACA" fillOpacity="0.85" />
          <rect x="14" y="152" width="108" height="12" rx="3" fill="#FCA5A5" fillOpacity="0.78" />
          <circle cx="124" cy="56" r="6" fill="#DC2626" fillOpacity="0.92" />
          <circle cx="110" cy="104" r="5" fill="#EF4444" fillOpacity="0.85" />

          <rect
            x={panel2X}
            y="8"
            width={panel2W}
            height="232"
            rx="12"
            fill="#E8F0FA"
            stroke="#2E5B88"
            strokeOpacity="0.32"
            strokeWidth="1.25"
          />
          <ellipse cx={strategyCx} cy="122" rx="88" ry="92" fill={`url(#${strategyGlow})`} />
          <text x={strategyCx} y="32" fill="#1F3B64" fontSize={strategyTitleSize} fontWeight="800" textAnchor="middle">
            Reputation360 Strategy
          </text>

          <circle cx={strategyCx} cy="98" r="32" fill="#FFFFFF" stroke="#1F3B64" strokeOpacity="0.45" strokeWidth="2.25" />
          <circle cx={strategyCx} cy="94" r="10" stroke="#2E5B88" strokeWidth="2.25" fill="#EEF4FB" />
          <path d={`M${strategyCx + 8} 102l7 7`} stroke="#2E5B88" strokeWidth="2.25" strokeLinecap="round" />
          <circle cx={strategyCx - 7} cy="102" r="5" fill="#4CAF50" fillOpacity="0.2" stroke="#4CAF50" strokeWidth="1.5" />
          <path
            d={`M${strategyCx - 10} 102l2 2 4-4`}
            stroke="#4CAF50"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <StrategyChip x={gridLeft} y={gridRow1Y} label="Monitoring" title="Search monitoring" icon={monitoringIcon} />
          <StrategyChip x={gridRight} y={gridRow1Y} label="Content" title="Content strategy" icon={contentIcon} />
          <StrategyChip x={gridLeft} y={gridRow2Y} label="SEO" title="SEO" icon={seoIcon} />
          <StrategyChip
            x={gridRight}
            y={gridRow2Y}
            label="Growth"
            title="Visibility growth"
            icon={growthIcon}
            greenStroke
          />

          <ellipse cx={panel3X + panel3W / 2} cy="122" rx="118" ry="98" fill={`url(#${glowGrad})`} />
          <rect
            x={panel3X}
            y="8"
            width={panel3W}
            height="232"
            rx="12"
            fill="#D1FAE5"
            stroke="#4CAF50"
            strokeOpacity="0.48"
            strokeWidth="1.5"
          />
          <text x={panel3X + 14} y="32" fill="#15803D" fontSize={labelSize} fontWeight="800">
            Stronger Visibility
          </text>

          <rect
            x={panel3X + 14}
            y="42"
            width={panel3W - 28}
            height="72"
            rx="10"
            fill="#FFFFFF"
            stroke="#2E5B88"
            strokeOpacity="0.55"
            strokeWidth="2"
          />
          <text x={panel3X + 28} y="62" fill="#1F3B64" fontSize={cardTitleSize} fontWeight="800">
            AI Overview
          </text>
          <rect x={panel3X + 28} y="70" width="152" height="9" rx="2" fill="#2E5B88" fillOpacity="0.9" />
          <rect x={panel3X + 28} y="84" width="132" height="8" rx="2" fill="#1F3B64" fillOpacity="0.52" />
          <rect x={panel3X + 28} y="96" width="118" height="8" rx="2" fill="#6B7280" fillOpacity="0.42" />
          <circle cx={panel3X + panel3W - 18} cy="54" r="13" fill="#4CAF50" fillOpacity="0.4" />
          <path
            d={`M${panel3X + panel3W - 25} 54l6 6 11-12`}
            stroke="#4CAF50"
            strokeWidth="2.85"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <rect
            x={panel3X + 14}
            y="120"
            width={panel3W - 28}
            height="106"
            rx="10"
            fill="#FFFFFF"
            stroke="#1F3B64"
            strokeOpacity="0.28"
            strokeWidth="1.5"
          />
          <text x={panel3X + 28} y="138" fill="#1F3B64" fontSize={cardTitleSize} fontWeight="800">
            Google Search
          </text>
          <rect x={panel3X + 28} y="146" width="138" height="9" rx="2" fill="#1F3B64" fillOpacity="0.95" />
          <rect x={panel3X + 28} y="158" width="118" height="7" rx="2" fill="#2E5B88" fillOpacity="0.55" />
          <rect x={panel3X + 28} y="168" width="128" height="7" rx="2" fill="#6B7280" fillOpacity="0.42" />
          <rect x={panel3X + 28} y="182" width="122" height="8" rx="2" fill="#1F3B64" fillOpacity="0.72" />
          <rect x={panel3X + 28} y="194" width="108" height="7" rx="2" fill="#2E5B88" fillOpacity="0.48" />
          <rect x={panel3X + 28} y="204" width="116" height="7" rx="2" fill="#6B7280" fillOpacity="0.38" />
          <rect x={panel3X + 28} y="214" width="98" height="7" rx="2" fill="#6B7280" fillOpacity="0.32" />
          <circle cx={panel3X + panel3W - 18} cy="132" r="12" fill="#4CAF50" fillOpacity="0.35" />
          <path
            d={`M${panel3X + panel3W - 24} 132l5 5 10-11`}
            stroke="#4CAF50"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <text x={panel3X + 28} y="234" fill="#14532D" fontSize={footerSize} fontWeight="800">
            Balanced, current results
          </text>

          <path
            d={`M${panelEnd1} 124h16l-8-8M${panelEnd1 + 16} 124l-8 8`}
            stroke={`url(#${flowGrad})`}
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={`M${panelEnd2} 124h16l8-8M${panelEnd2 + 16} 124l8 8`}
            stroke={`url(#${flowGrad})`}
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <svg
          className="r360-about-reputation-visual-svg r360-about-reputation-visual-svg--stacked mx-auto block h-auto w-full max-w-none sm:hidden"
          viewBox="0 0 320 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <linearGradient id={`${flowGrad}-v`} x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#1F3B64" />
              <stop offset="0.5" stopColor="#2E5B88" />
              <stop offset="1" stopColor="#4CAF50" />
            </linearGradient>
          </defs>
          <rect x="8" y="8" width="304" height="118" rx="12" fill="#FFF1F2" stroke="#FECACA" strokeWidth="1.25" />
          <text x="20" y="30" fill="#BE123C" fontSize={labelSize} fontWeight="800">
            Reputation Challenges
          </text>
          <rect x="20" y="40" width="200" height="10" rx="2" fill="#FCA5A5" />
          <rect x="20" y="56" width="176" height="10" rx="2" fill="#EF4444" fillOpacity="0.55" />
          <rect x="20" y="72" width="188" height="10" rx="2" fill="#FECACA" />
          <rect x="20" y="88" width="160" height="10" rx="2" fill="#FCA5A5" fillOpacity="0.78" />

          <path
            d="M160 130v14l-8-8M160 144l8-8"
            stroke={`url(#${flowGrad}-v)`}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <rect x="8" y="158" width="304" height="168" rx="12" fill="#E8F0FA" stroke="#2E5B88" strokeOpacity="0.32" strokeWidth="1.25" />
          <text x="160" y="180" fill="#1F3B64" fontSize={strategyTitleSize} fontWeight="800" textAnchor="middle">
            Reputation360 Strategy
          </text>
          <circle cx="160" cy="208" r="26" fill="#FFFFFF" stroke="#1F3B64" strokeOpacity="0.45" strokeWidth="2" />
          <circle cx="160" cy="204" r="9" stroke="#2E5B88" strokeWidth="2" fill="#EEF4FB" />
          <path d="M168 212l6 6" stroke="#2E5B88" strokeWidth="2" strokeLinecap="round" />

          <StrategyChip x="72" y="238" label="Monitoring" title="Search monitoring" icon={monitoringIcon} />
          <StrategyChip x="204" y="238" label="Content" title="Content strategy" icon={contentIcon} />
          <StrategyChip x="72" y="280" label="SEO" title="SEO" icon={seoIcon} />
          <StrategyChip x="204" y="280" label="Growth" title="Visibility growth" icon={growthIcon} greenStroke />

          <path
            d="M160 330v14l-8-8M160 344l8-8"
            stroke={`url(#${flowGrad}-v)`}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <rect x="8" y="358" width="304" height="190" rx="12" fill="#D1FAE5" stroke="#4CAF50" strokeOpacity="0.48" strokeWidth="1.5" />
          <text x="20" y="380" fill="#15803D" fontSize={labelSize} fontWeight="800">
            Stronger Visibility
          </text>
          <rect x="20" y="390" width="280" height="52" rx="10" fill="#FFFFFF" stroke="#2E5B88" strokeOpacity="0.55" strokeWidth="2" />
          <text x="32" y="408" fill="#1F3B64" fontSize={cardTitleSize} fontWeight="800">
            AI Overview
          </text>
          <rect x="32" y="416" width="168" height="8" rx="2" fill="#2E5B88" fillOpacity="0.88" />
          <rect x="32" y="428" width="142" height="7" rx="2" fill="#1F3B64" fillOpacity="0.45" />
          <circle cx="284" cy="402" r="10" fill="#4CAF50" fillOpacity="0.4" />
          <path d="M278 402l5 5 10-11" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

          <rect x="20" y="448" width="280" height="78" rx="10" fill="#FFFFFF" stroke="#1F3B64" strokeOpacity="0.28" strokeWidth="1.5" />
          <text x="32" y="466" fill="#1F3B64" fontSize={cardTitleSize} fontWeight="800">
            Google Search
          </text>
          <rect x="32" y="474" width="156" height="8" rx="2" fill="#1F3B64" fillOpacity="0.92" />
          <rect x="32" y="486" width="132" height="7" rx="2" fill="#2E5B88" fillOpacity="0.5" />
          <rect x="32" y="496" width="118" height="7" rx="2" fill="#6B7280" fillOpacity="0.4" />
          <rect x="32" y="506" width="140" height="7" rx="2" fill="#1F3B64" fillOpacity="0.65" />
          <rect x="32" y="516" width="120" height="7" rx="2" fill="#6B7280" fillOpacity="0.35" />
          <circle cx="284" cy="462" r="10" fill="#4CAF50" fillOpacity="0.35" />
          <path d="M279 462l4 4 9-10" stroke="#4CAF50" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />

          <text x="32" y="538" fill="#14532D" fontSize={footerSize} fontWeight="800">
            Balanced, current results
          </text>
        </svg>
      </div>
      <figcaption
        id={captionId}
        className="r360-about-reputation-visual-caption border-t border-slate-200/60 bg-slate-50/90 px-3 py-1.5 text-center font-body leading-snug sm:px-4 sm:text-left"
      >
        Building stronger visibility across Google and AI-powered search.
      </figcaption>
    </figure>
  );
}

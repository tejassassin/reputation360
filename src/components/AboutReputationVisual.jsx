import { useId } from "react";

/**
 * Home “About Reputation360” visual only: a simple diagram (not photography,
 * not SERP UI used elsewhere) showing fragmented mentions consolidating into
 * one accurate, trustworthy presence.
 */
export default function AboutReputationVisual() {
  const gradId = `abtr-arrow-${useId().replace(/:/g, "")}`;

  return (
    <figure className="m-0 flex w-full flex-col overflow-hidden bg-gradient-to-br from-[#eef3fb] via-[#f8faf9] to-[#e5edf7]">
      <div className="relative min-h-[220px] w-full px-4 pt-5 pb-2 sm:min-h-[260px] sm:px-6 sm:pt-6">
        <svg
          className="mx-auto h-full max-h-[240px] w-full max-w-[520px]"
          viewBox="0 0 520 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
              <stop stopColor="#4CAF50" />
              <stop offset="1" stopColor="#2E5B88" />
            </linearGradient>
          </defs>

          <text x="8" y="22" fill="#64748b" fontSize="11" fontWeight="600" letterSpacing="0.08em">
            SCATTERED MENTIONS
          </text>
          <rect x="8" y="38" width="112" height="8" rx="4" fill="#cbd5e1" opacity="0.85" />
          <rect x="24" y="54" width="88" height="8" rx="4" fill="#94a3b8" opacity="0.65" />
          <rect x="8" y="70" width="96" height="8" rx="4" fill="#cbd5e1" opacity="0.75" />
          <rect x="32" y="86" width="72" height="8" rx="4" fill="#94a3b8" opacity="0.55" />
          <rect x="8" y="102" width="104" height="8" rx="4" fill="#cbd5e1" opacity="0.7" />
          <rect x="16" y="118" width="64" height="8" rx="4" fill="#94a3b8" opacity="0.5" />
          <circle cx="128" cy="42" r="4" fill="#f59e0b" fillOpacity="0.7" />
          <circle cx="118" cy="90" r="4" fill="#f59e0b" fillOpacity="0.5" />

          <path
            d="M175 92h42l-10-10M217 92l-10 10"
            stroke={`url(#${gradId})`}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text x="196" y="128" fill="#475569" fontSize="10" fontWeight="600" textAnchor="middle">
            strategy + craft
          </text>
          <path
            d="M175 150h42l-10-10M217 150l-10 10"
            stroke={`url(#${gradId})`}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.65"
          />

          <text x="512" y="22" fill="#1F3B64" fontSize="11" fontWeight="600" letterSpacing="0.08em" textAnchor="end">
            COHERENT PRESENCE
          </text>
          <rect
            x="268"
            y="34"
            width="244"
            height="192"
            rx="14"
            fill="white"
            fillOpacity="0.92"
            stroke="#1F3B64"
            strokeOpacity="0.12"
            strokeWidth="1.5"
          />
          <circle cx="390" cy="88" r="32" fill="#dce7f3" />
          <circle cx="390" cy="88" r="32" stroke="#2E5B88" strokeOpacity="0.2" strokeWidth="1" />
          <rect x="318" y="132" width="144" height="10" rx="3" fill="#1F3B64" fillOpacity="0.88" />
          <rect x="330" y="150" width="96" height="7" rx="2" fill="#64748b" fillOpacity="0.55" />
          <rect x="318" y="168" width="120" height="7" rx="2" fill="#94a3b8" fillOpacity="0.4" />
          <rect x="318" y="184" width="88" height="7" rx="2" fill="#94a3b8" fillOpacity="0.35" />

          <g transform="translate(448 58)">
            <circle r="18" fill="#4CAF50" fillOpacity="0.15" />
            <path
              d="M-6 2l5 5 10-12"
              stroke="#2a8c3e"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </g>

          <rect x="318" y="206" width="144" height="9" rx="2" fill="#4CAF50" fillOpacity="0.2" />
        </svg>
      </div>
      <figcaption className="font-body px-5 pb-5 text-center text-sm leading-snug text-steel">
        We turn noisy, fragmented search results into{" "}
        <span className="font-medium text-navy">one credible story</span> that matches who you are today.
      </figcaption>
    </figure>
  );
}

import { ProfileValueLines } from "./ProfileValueLines.jsx";

/**
 * @param {object} props
 * @param {import('lucide-react').LucideIcon} props.icon
 * @param {string} props.k
 * @param {string} props.v
 * @param {'default' | 'wide'} [props.variant]
 * @param {'industry' | 'profile' | 'challenge' | 'default'} [props.tone]
 * @param {string} [props.className]
 */
export function CaseStudyMetaPill({
  icon,
  k,
  v,
  variant = "default",
  tone = "default",
  className = "",
}) {
  const Icon = icon;
  const isWide = variant === "wide";
  const toneStyles = {
    industry: {
      shell: "border-slate/20 bg-slate/5 hover:border-slate/35",
      icon: "bg-gradient-to-br from-slate to-navy",
    },
    profile: {
      shell: "border-green/25 bg-green/5 hover:border-green/40",
      icon: "bg-gradient-to-br from-green to-cta-consult",
    },
    challenge: {
      shell: "border-navy/20 bg-navy/5 hover:border-navy/35",
      icon: "bg-gradient-to-br from-navy to-slate",
    },
    default: {
      shell: "border-slate/15 bg-white/90 hover:border-slate/30",
      icon: "bg-navy/90",
    },
  };
  const styles = toneStyles[tone] ?? toneStyles.default;
  return (
    <div
      className={[
        "flex min-h-0 rounded-2xl border-2 transition hover:shadow-sm",
        styles.shell,
        isWide
          ? "items-start gap-3 p-3.5 sm:gap-4 sm:p-4"
          : "h-full min-h-0 items-start gap-2.5 p-3.5",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className={`grid shrink-0 place-items-center rounded-xl text-white shadow-inner ${styles.icon} ${isWide ? "mt-0.5 h-9 w-9 sm:h-10 sm:w-10" : "h-8 w-8"}`}
      >
        <Icon
          className={isWide ? "h-4 w-4 sm:h-[1.15rem] sm:w-[1.15rem]" : "h-4 w-4"}
          strokeWidth={1.8}
        />
      </div>
      <div className="min-w-0 flex-1 text-left">
        <p className="text-[0.7rem] font-extrabold uppercase tracking-wider text-steel sm:text-xs">
          {k}
        </p>
        <p
          className={[
            "mt-1 text-slate-800",
            isWide
              ? "break-words text-sm font-medium leading-relaxed [text-wrap:pretty] sm:text-[0.95rem] sm:leading-[1.55]"
              : k === "Profile"
                ? "min-w-0 break-words text-sm font-semibold leading-normal"
                : "break-words text-sm font-semibold leading-snug [text-wrap:balance]",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {k === "Profile" ? (
            <ProfileValueLines
              value={v}
              line2ClassName="mt-0.5 sm:mt-1"
              title={v}
            />
          ) : (
            v
          )}
        </p>
      </div>
    </div>
  );
}

/** Shared shell classes for case study hero cards (detail + listing). */
export const CASE_STUDY_CARD_SHELL =
  "relative overflow-hidden rounded-3xl border-2 border-slate/20 bg-gradient-to-br from-green/5 via-white to-offwhite text-navy shadow-[0_10px_40px_-20px_rgba(31,59,100,0.18),inset_0_1px_0_#fff]";

export const CASE_STUDY_CARD_BAR =
  "h-2 w-full bg-gradient-to-r from-navy via-green to-slate";

export const CASE_STUDY_ENGAGEMENT_PANEL =
  "w-full border-b border-green/15 bg-gradient-to-br from-green/8 to-offwhite p-6 sm:p-7 md:max-w-md md:w-[40%] md:shrink-0 md:border-b-0 md:border-r md:py-8";

export const CASE_STUDY_HERO_BODY = "flex min-h-0 flex-1 flex-col p-6 sm:p-7 md:py-8";

const caseStudyImageMap = {
  // 1: Exec & Founder SaaS - Modern glass corporate building facade
  1: "https://plus.unsplash.com/premium_photo-1666788166012-2596989d747d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&auto=format&fit=crop&w=600&q=80",
  // 2: Financial Advisor - Real stock market price chart screen
  2: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&auto=format&fit=crop&w=600&q=80",
  // 3: Doctor/Physician - Clean medical clinic lobby
  3: "https://plus.unsplash.com/premium_photo-1682130157004-057c137d96d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&auto=format&fit=crop&w=600&q=80",
  // 4: HR Dispute - Empty corporate boardroom meeting table
  4: "https://plus.unsplash.com/premium_photo-1676495972676-57a46cb521d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&auto=format&fit=crop&w=600&q=80",
  // 5: E-commerce Fashion - Professional boutique clothing rack
  5: "https://plus.unsplash.com/premium_photo-1664202526559-e21e9c0fb46a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&auto=format&fit=crop&w=600&q=80",
  // 6: Consumer Electronics - Sleek computer laptop on office desk
  6: "https://images.unsplash.com/photo-1595303526913-c7037797ebe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&auto=format&fit=crop&w=600&q=80",
  // 7: Startup Reputation - Modern startup office workspace empty
  7: "https://plus.unsplash.com/premium_photo-1661931749081-23d69ddb62d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&auto=format&fit=crop&w=600&q=80",
  // 8: E-commerce Counterfeit - Cardboard shipping package box beside door
  8: "https://images.unsplash.com/photo-1614018453562-77f6180ce036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&auto=format&fit=crop&w=600&q=80",
  // 9: Surgeon - Sterile hospital operating room lights
  9: "https://plus.unsplash.com/premium_photo-1664476911056-ca371bb2a8c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&auto=format&fit=crop&w=600&q=80",
  // 10: GP Partner - Medical reference textbooks and stethoscope on desk
  10: "https://plus.unsplash.com/premium_photo-1661699540413-2390093cfb29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&auto=format&fit=crop&w=600&q=80",
  // 11: Litigation Partner - Legal balance scale and law books on table
  11: "https://plus.unsplash.com/premium_photo-1695449439526-9cebdbfa1a2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&auto=format&fit=crop&w=600&q=80",
  // 12: Family Solicitor - Lawyer wooden table with legal magnifying glass
  12: "https://plus.unsplash.com/premium_photo-1698084059730-d3784b0c467a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&auto=format&fit=crop&w=600&q=80",
  // 13: IFA Collapsed Fund - Historic bank columns architecture
  13: "https://images.unsplash.com/photo-1676517243531-69e3b27276e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&auto=format&fit=crop&w=600&q=80",
  // 14: Accountant - Financial spreadsheet and calculator on office desk
  14: "https://images.unsplash.com/photo-1707157284454-553ef0a4ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&auto=format&fit=crop&w=600&q=80",
  // 15: Graduate - Academic graduation caps flying in the air
  15: "https://plus.unsplash.com/premium_photo-1682075199505-e96c80e84e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&auto=format&fit=crop&w=600&q=80",
  // 16: Product Manager - Whiteboard wall with colorful sticky notes
  16: "https://images.unsplash.com/photo-1735639013995-086e648eaa38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&auto=format&fit=crop&w=600&q=80",
};

export function getCaseStudyImage(n) {
  return caseStudyImageMap[n] || caseStudyImageMap[1];
}

import { ProfileValueLines } from "./ProfileValueLines.jsx";
import officeCaseStudyImgImport from "../assets/office_case_study.png";
import surgeonCaseStudyImgImport from "../assets/surgeon_case_study.png";
import { staticImageSrc } from "../lib/staticImageSrc.js";

const officeCaseStudyImg = staticImageSrc(officeCaseStudyImgImport);
const surgeonCaseStudyImg = staticImageSrc(surgeonCaseStudyImgImport);

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

/** High-resolution Unsplash URL builder for case study hero imagery. */
function unsplashPhoto(photoId, width = 1600, height = 1200) {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&h=${height}&q=90`;
}

/** High-resolution Unsplash+ URL builder for premium stock photography. */
function unsplashPlusPhoto(photoId, width = 1600, height = 1200) {
  return `https://plus.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&h=${height}&q=90`;
}

const caseStudyImageMap = {
  // 1: B2B SaaS founder - modern tech company office
  1: officeCaseStudyImg,
  // 2: Portfolio manager - institutional market chart on trading monitor
  2: unsplashPhoto("photo-1590283603385-17ffb3a7f29f"),
  // 3: Consultant physician - stethoscope and clinical instruments on white coat
  3: unsplashPhoto("photo-1700832082200-af7deeb63d9b"),
  // 4: HR director dispute - collaborative workplace meeting
  4: unsplashPhoto("photo-1552664730-d307ca884978"),
  // 5: DTC fashion brand - boutique clothing retail interior
  5: unsplashPhoto("photo-1445205170230-053b83016050"),
  // 6: Consumer electronics brand - premium wearable product lineup
  6: unsplashPhoto("photo-1523275335684-37898b6baf30"),
  // 7: VC-backed startup - team collaboration in startup workspace
  7: unsplashPhoto("photo-1522071820081-009f0129c71c"),
  // 8: D2C accessories counterfeit allegations - in-store customer checkout
  8: unsplashPhoto("photo-1556742049-0cfed4f6a45d"),
  // 9: Consultant surgeon - operating theatre during surgery
  9: surgeonCaseStudyImg,
  // 10: Doctor and practice partner - stethoscope and laptop on clinic desk (hands only)
  10: unsplashPhoto("photo-1576091160550-2173dba999ef"),
  // 11: Litigation partner - lawyer reviewing contract and case law
  11: unsplashPlusPhoto("premium_photo-1661559051049-f9e147c7a90b"),
  // 12: Family law solicitor - justice statue, gavel, and law book
  12: unsplashPhoto("photo-1774898988393-5c752e4d55e9"),
  // 13: IFA collapsed fund - financial adviser meeting with client
  13: unsplashPhoto("photo-1517245386807-bb43f82c33c4"),
  // 14: CFO wrongful dismissal - financial reports and calculator on desk
  14: unsplashPhoto("photo-1707157284454-553ef0a4ed0d"),
  // 15: Recent graduate job seeker - building professional presence on laptop and phone
  15: unsplashPhoto("photo-1563986768609-322da13575f3"),
  // 16: Senior product manager - product planning on whiteboard
  16: unsplashPhoto("photo-1532619675605-1ede6c2ed2b0"),
};

export function getCaseStudyImage(n) {
  return caseStudyImageMap[n] || caseStudyImageMap[1];
}

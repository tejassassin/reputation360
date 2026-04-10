import { ArrowRight } from "lucide-react";
import { calendlyNewTabProps } from "../constants/scheduling";

const CTA_BG_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBeKCd6wG7nMnapa0BpqEi-y4rWxlfA8Igz6oReg1Bfe3zHcnIkkX0IpU5Tx_RcFiZIykA6Nk4h-AXVrdESIx26ZKq3gnPfpP290hbbHM0mlfkFYuM0l58MCkD7vHIlRulV27eEzUCpvxc2njKLi2EiJ71gh_fsjzGMB7sNSt__gyu6UVSr5CPqBRtJVhEVgA9kKwpbhh3Oh40Sm27h6FlSSn9l7YFmyyU-1AX41rjmQKKHYFcCOfuX6kagakBcXoyeZ1oSVBJXY2k";

function HomeSpecialistCta() {
  return (
    <section className="bg-[#f9f9ff] px-4 pb-14 sm:px-6 md:px-8 md:pb-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#1f3b64] p-10 shadow-2xl sm:p-12 md:p-14">
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <img
            src={CTA_BG_IMAGE}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="font-heading mb-8 max-w-2xl text-2xl leading-tight font-bold text-white md:text-3xl">
            <span className="block">
              If your name or brand shows unwanted results
            </span>
            <span className="block">on Google, we can help.</span>
          </h2>
          <a
            {...calendlyNewTabProps}
            className="ha-pill inline-flex items-center gap-3 rounded-xl bg-[#78dc77] px-10 py-4 text-sm font-bold text-[#002c06] shadow-lg shadow-[#78dc77]/20 transition-all hover:scale-[1.02] active:scale-95 md:text-base"
          >
            Speak to a Specialist
            <ArrowRight className="h-5 w-5 shrink-0" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeSpecialistCta;

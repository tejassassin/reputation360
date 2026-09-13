import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonialPortraitAlt } from "../constants/imageAlt.js";
import { homeTestimonials } from "../data/homeTestimonials.js";
import { testimonialPortraitUrl } from "../data/testimonialPortraits.js";

function getInitials(fullName) {
  const n = fullName
    .replace(/^(dr\.?|prof\.?|mr\.?|mrs\.?|ms\.?)\s+/i, "")
    .trim();
  const parts = n.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    const a = parts[0][0];
    const b = parts[parts.length - 1][0];
    return (a + b).toUpperCase();
  }
  return (parts[0]?.slice(0, 2) ?? "?").toUpperCase();
}

function ReviewStars() {
  return (
    <div className="flex w-full justify-start" role="img" aria-label="5 out of 5 stars">
      <div className="inline-flex items-center gap-0.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star
            key={i}
            className="h-4 w-4 text-[#4CAF50] sm:h-[1.05rem] sm:w-[1.05rem]"
            fill="currentColor"
            strokeWidth={0}
            aria-hidden
          />
        ))}
      </div>
    </div>
  );
}

function TestimonialAvatar({ id, name, portraitUrl }) {
  const [useFallback, setUseFallback] = useState(false);
  const explicit =
    typeof portraitUrl === "string" && portraitUrl.trim() !== "" ? portraitUrl : null;
  const mapped = testimonialPortraitUrl(id);
  const src = explicit || mapped || `https://i.pravatar.cc/200?u=${encodeURIComponent(id)}`;

  if (useFallback) {
    return (
      <div
        className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-200 bg-slate-100 text-xs font-semibold text-slate-600 sm:h-11 sm:w-11 sm:text-sm"
        aria-hidden
      >
        {getInitials(name)}
      </div>
    );
  }
  return (
    <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-slate-200/90 bg-slate-100 sm:h-11 sm:w-11">
      <img
        src={src}
        alt={testimonialPortraitAlt(name)}
        className="h-full w-full object-cover object-top"
        loading="lazy"
        decoding="async"
        onError={() => setUseFallback(true)}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

function chunkTestimonialPages(items, cardsPerPage) {
  const pages = [];
  for (let i = 0; i < items.length; i += cardsPerPage) {
    pages.push(items.slice(i, i + cardsPerPage));
  }
  return pages;
}

function useHomeTestimonialCardsPerPage() {
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const mqDesktop = window.matchMedia("(min-width: 1024px)");
    const mqTablet = window.matchMedia("(min-width: 640px)");

    const sync = () => {
      if (mqDesktop.matches) setCardsPerPage(3);
      else if (mqTablet.matches) setCardsPerPage(2);
      else setCardsPerPage(1);
    };

    sync();
    mqDesktop.addEventListener("change", sync);
    mqTablet.addEventListener("change", sync);
    return () => {
      mqDesktop.removeEventListener("change", sync);
      mqTablet.removeEventListener("change", sync);
    };
  }, []);

  return cardsPerPage;
}

/**
 * @param {{ testimonial: { id: string; quote: string; name: string; role: string; portrait?: string } }} props
 */
function TestimonialCard({ testimonial: t }) {
  return (
    <article className="flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden rounded-lg border border-slate-200/90 bg-white text-left shadow-sm">
      <div className="flex h-full flex-col p-4 sm:p-5 md:p-5">
        <ReviewStars />
        <h3 className="sr-only">Client review: {t.name}</h3>
        <blockquote className="mt-3 flex min-h-0 flex-1 gap-2 border-none p-0">
          <Quote
            className="mt-0.5 h-4 w-4 shrink-0 text-[#4CAF50]/55"
            strokeWidth={2}
            aria-hidden
          />
          <p className="min-w-0 flex-1 font-body text-[0.98rem] leading-[1.65] text-slate-800 [text-wrap:pretty] sm:text-base sm:leading-[1.62]">
            {t.quote}
          </p>
        </blockquote>
        <div className="mt-auto flex flex-col pt-4">
          <div className="h-px w-full bg-slate-200/90" aria-hidden />
          <footer className="flex w-full min-w-0 items-start gap-3 pt-4 sm:items-center sm:gap-3.5">
            <TestimonialAvatar id={t.id} name={t.name} portraitUrl={t.portrait} />
            <div className="min-w-0 flex-1 text-left">
              <p className="font-heading text-sm font-bold leading-tight text-navy sm:text-[0.98rem]">
                {t.name}
              </p>
              <p className="mt-0.5 text-pretty text-sm leading-snug text-slate-600">{t.role}</p>
            </div>
          </footer>
        </div>
      </div>
    </article>
  );
}

function HomeTestimonials() {
  const testimonials = useMemo(() => {
    const seen = new Set();
    return homeTestimonials.filter((t) => {
      if (seen.has(t.id)) return false;
      seen.add(t.id);
      return true;
    });
  }, []);

  const cardsPerPage = useHomeTestimonialCardsPerPage();
  const pages = useMemo(
    () => chunkTestimonialPages(testimonials, cardsPerPage),
    [testimonials, cardsPerPage],
  );
  const pageCount = pages.length;

  const [currentPage, setCurrentPage] = useState(0);
  const [reduce, setReduce] = useState(false);
  const touchStartRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduce(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [cardsPerPage]);

  useEffect(() => {
    if (currentPage >= pageCount) {
      setCurrentPage(Math.max(0, pageCount - 1));
    }
  }, [currentPage, pageCount]);

  const goToPage = useCallback(
    (pageIndex) => {
      if (pageCount <= 0) return;
      const next = ((pageIndex % pageCount) + pageCount) % pageCount;
      setCurrentPage(next);
    },
    [pageCount],
  );

  const goNext = useCallback(() => {
    goToPage(currentPage + 1);
  }, [currentPage, goToPage]);

  const goPrev = useCallback(() => {
    goToPage(currentPage - 1);
  }, [currentPage, goToPage]);

  const onCarouselKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
    }
  };

  const onTouchStart = (event) => {
    const touch = event.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const onTouchEnd = (event) => {
    const touch = event.changedTouches[0];
    const dx = touch.clientX - touchStartRef.current.x;
    const dy = touch.clientY - touchStartRef.current.y;
    if (Math.abs(dx) <= Math.abs(dy) || Math.abs(dx) < 48) return;
    if (dx < 0) goNext();
    else goPrev();
  };

  const navClass =
    "r360-home-testimonials-nav inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-300/90 bg-white text-slate-700 shadow-sm transition hover:border-[#4CAF50]/45 hover:text-[#1F3B64] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CAF50]/50 active:scale-[0.98] sm:h-12 sm:w-12";

  const pageItems = pages[currentPage] ?? [];
  const isDesktopPair =
    cardsPerPage === 3 && pageItems.length === 2 && currentPage === pageCount - 1;

  const pageGridClass = isDesktopPair
    ? "r360-home-testimonials-page r360-home-testimonials-page--pair"
    : cardsPerPage === 3
      ? "r360-home-testimonials-page grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
      : cardsPerPage === 2
        ? "r360-home-testimonials-page grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4"
        : "r360-home-testimonials-page grid grid-cols-1 gap-3";

  return (
    <section
      id="testimonials"
      className="relative border-y border-slate-200/80 bg-offwhite py-8 sm:py-9 md:py-10"
      aria-labelledby="testimonials-heading"
    >
      <div className="r360-site-container r360-home-testimonials-shell relative z-[1] text-center">
        <h2
          id="testimonials-heading"
          className="r360-home-testimonials-heading mx-auto max-w-4xl font-heading text-balance text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-[2.65rem] lg:leading-tight"
        >
          Online Reputation Management Results and Reviews
        </h2>
        <div
          className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#1F3B64]"
          aria-hidden
        />
        <p className="mx-auto mt-3 max-w-2xl font-body text-base leading-snug text-slate-600 sm:text-[1.05rem]">
          Honest feedback from people who trusted us with their reputation.
        </p>
      </div>

      <div className="r360-site-container r360-home-testimonials-shell relative z-[1] mt-4 sm:mt-5">
        <div className="r360-home-testimonials-carousel relative">
          <button
            type="button"
            onClick={goPrev}
            className={`${navClass} absolute left-0 top-1/2 z-10 -translate-y-1/2`}
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.25} aria-hidden />
          </button>

          <div className="min-w-0 overflow-x-hidden px-9 sm:px-10 md:px-11">
            <div
              role="region"
              aria-roledescription="carousel"
              aria-label="Client testimonials"
              tabIndex={0}
              onKeyDown={onCarouselKeyDown}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div
                key={`${cardsPerPage}-${currentPage}`}
                className={`${pageGridClass}${reduce ? "" : " r360-home-testimonials-page--transition"}`}
              >
                {pageItems.map((t) => (
                  <TestimonialCard key={t.id} testimonial={t} />
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={goNext}
            className={`${navClass} absolute right-0 top-1/2 z-10 -translate-y-1/2`}
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2.25} aria-hidden />
          </button>
        </div>

        <div
          className="mt-4 flex flex-wrap items-center justify-center gap-2 pb-0.5"
          role="tablist"
          aria-label="Testimonial carousel pages"
        >
          {Array.from({ length: pageCount }, (_, pageIndex) => {
            const isActive = pageIndex === currentPage;
            return (
              <button
                key={pageIndex}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Show testimonials page ${pageIndex + 1} of ${pageCount}`}
                onClick={() => goToPage(pageIndex)}
                className={`h-2 w-2 rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CAF50]/55 focus-visible:ring-offset-2 ${
                  isActive ? "bg-[#4CAF50]" : "bg-slate-300/90 hover:bg-slate-400/90"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HomeTestimonials;

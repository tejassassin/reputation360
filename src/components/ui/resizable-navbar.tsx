import { cn } from "@/lib/utils";
import { staticImageSrc } from "@/lib/staticImageSrc.js";
import { WHO_WE_SERVE_HUB_PATH } from "@/constants/whoWeServePaths.js";
import { anchorTabProps, internalAnchorProps } from "@/lib/internalLinkProps";
import { IconChevronDown, IconMenu2, IconX } from "@tabler/icons-react";
import type { ComponentPropsWithoutRef, ElementType, ReactNode, Ref } from "react";
import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";

/** Match Tailwind `min-[1440px]:` — full desktop nav only at this width and above. */
export const R360_DESKTOP_NAV_MIN_WIDTH_PX = 1440;

export const R360_MOBILE_NAV_MENU_ID = "r360-mobile-nav-menu";

export const R360_MOBILE_NAV_INERT_SELECTOR =
  "main, footer, .r360-breadcrumb-bar, .r360-mobile-nav-header";

type NavItemConfig = {
  name: string;
  link?: string;
  /** When true (with children), the parent label is not a link; only submenu items navigate. */
  parentNonNavigable?: boolean;
  children?: { name: string; link: string; newTab?: boolean; highlighted?: boolean }[];
};

/** @param {NavItemConfig} item */
function resolveNavParentHref(item: NavItemConfig) {
  if (item.link && item.link !== "#" && item.link !== WHO_WE_SERVE_HUB_PATH) {
    return item.link;
  }
  return item.children?.[0]?.link ?? "#";
}

/* Sticky pill: scroll>100 adds opaque shell + shadow. Below 1440px, use mobile navigation. */

interface NavbarProps {
  children: ReactNode;
  className?: string;
}

interface WithVisible {
  visible?: boolean;
  className?: string;
  onItemClick?: () => void;
  isOpen?: boolean;
  onClose?: () => void;
  items?: unknown;
  href?: string;
}

interface NavBodyProps {
  children: ReactNode;
  className?: string;
  visible?: boolean;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={cn("relative z-40 w-full min-w-0", className)}>
      {Children.map(children, (child) =>
        isValidElement(child) ? cloneElement(child, { visible } as WithVisible) : child,
      )}
    </div>
  );
};

function scrolledNavShellClass(visible: boolean) {
  return cn(
    "transition-[box-shadow,background-color] duration-300 ease-out",
    visible && "bg-navy shadow-[0_16px_68px_rgba(47,48,55,0.12)]",
  );
}

export const NavBody = ({ children, className, visible = false }: NavBodyProps) => {
  return (
    <div
      className={cn(
        "relative z-[60] mx-auto hidden w-full min-w-0 max-w-full items-center gap-x-3 gap-y-0 self-start bg-transparent px-0 py-1 sm:px-1",
        "min-[1440px]:grid min-[1440px]:grid-cols-[auto_minmax(0,1fr)_minmax(0,auto)] min-[1440px]:grid-rows-1 min-[1440px]:items-center min-[1440px]:gap-x-4 min-[1440px]:py-2 xl:gap-x-5 2xl:gap-x-6",
        scrolledNavShellClass(visible),
        className,
      )}
    >
      {children}
    </div>
  );
};

export const NavItems = ({
  items,
  className,
  onItemClick,
}: {
  items: NavItemConfig[];
  className?: string;
  onItemClick?: () => void;
}) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const isMenuOpen = (index: number) => hovered === index || openMenu === index;

  return (
    <div
      role="navigation"
      aria-label="Main"
      onMouseLeave={() => {
        setHovered(null);
        setOpenMenu(null);
      }}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setHovered(null);
          setOpenMenu(null);
        }
      }}
      className={cn(
        "relative z-10 mx-0 hidden min-h-0 min-w-0 w-full flex-row flex-nowrap items-center justify-start gap-x-1.5 text-[13px] font-medium text-white transition-colors duration-200 hover:text-green font-heading min-[1440px]:flex min-[1440px]:gap-x-2 xl:gap-x-2.5 xl:text-[14px] 2xl:gap-x-3.5 2xl:text-[15px]",
        className,
      )}
    >
      {items.map((item, h) => {
        const menuOpen = isMenuOpen(h);
        const parentHref = resolveNavParentHref(item);
        const hasChildren = Boolean(item.children?.length);
        return (
        <div
          onMouseEnter={() => setHovered(h)}
          onMouseLeave={() => setHovered(null)}
          className="group relative shrink-0"
          key={`link-${h}`}
        >
          {hasChildren ? (
            <a
              href={parentHref}
              {...internalAnchorProps(parentHref)}
              className="group relative block w-full shrink-0 whitespace-nowrap rounded-full px-2 py-1.5 text-left text-white transition-colors duration-200 hover:text-green min-[1440px]:px-2.5 xl:px-3 2xl:px-3.5 2xl:py-2"
              aria-haspopup="menu"
              aria-expanded={menuOpen}
              onMouseDown={(e) => {
                e.preventDefault();
              }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOpenMenu((prev) => (prev === h ? null : h));
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setOpenMenu((prev) => (prev === h ? null : h));
                }
                if (e.key === "Escape") {
                  setOpenMenu(null);
                  setHovered(null);
                }
              }}
            >
              <span
                className={cn(
                  "pointer-events-none absolute inset-0 rounded-full bg-white/0 transition-colors duration-200 group-hover:bg-white/10 group-focus-visible:bg-white/10",
                  menuOpen && "bg-white/10",
                )}
                aria-hidden
              />
              <span className="relative z-[1] inline-flex items-center gap-1 whitespace-nowrap">
                {item.name}
                <IconChevronDown
                  className={cn(
                    "h-3.5 w-3.5 shrink-0 opacity-70 transition-transform duration-200",
                    menuOpen && "rotate-180",
                  )}
                  aria-hidden
                />
              </span>
            </a>
          ) : (
            <a
              onClick={(e) => {
                if (!item.link || item.link === "#") e.preventDefault();
                onItemClick?.();
              }}
              className="group relative block shrink-0 whitespace-nowrap rounded-full px-2 py-1.5 text-white transition-colors duration-200 hover:text-green min-[1440px]:px-2.5 xl:px-3 2xl:px-3.5 2xl:py-2"
              href={item.link ?? "#"}
              {...internalAnchorProps(item.link ?? "#")}
            >
              <span
                className="pointer-events-none absolute inset-0 rounded-full bg-white/0 transition-colors duration-200 group-hover:bg-white/10 group-focus-visible:bg-white/10"
                aria-hidden
              />
              <span className="relative z-[1] whitespace-nowrap">{item.name}</span>
            </a>
          )}
          {hasChildren && (
            <div
              className={cn(
                "absolute left-0 top-full z-[200] min-w-52 pt-2 transition-opacity duration-150",
                menuOpen
                  ? "visible opacity-100"
                  : "pointer-events-none invisible opacity-0 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100",
              )}
              role="menu"
              aria-label={`${item.name} submenu`}
            >
              <div className="rounded-lg border border-white/15 bg-navy p-2 shadow-xl backdrop-blur-md">
                {item.children!.map((child) => (
                  <a
                    key={`${item.name}-${child.name}`}
                    href={child.link}
                    role="menuitem"
                    {...internalAnchorProps(child.link)}
                    onClick={onItemClick}
                    className={cn(
                      "ha-nudge block rounded-md px-3 py-2 text-sm text-white transition-colors hover:bg-white/15 hover:text-green",
                      child.highlighted && "text-green",
                    )}
                  >
                    {child.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        );
      })}
    </div>
  );
};

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

export const MobileNav = ({ children, className, visible = false }: MobileNavProps) => {
  return (
    <div
      className={cn(
        "relative z-50 mx-auto flex w-full min-w-0 max-w-full flex-col items-stretch justify-between bg-transparent py-1 min-[1440px]:hidden",
        visible ? "rounded-md px-3" : "rounded-full px-0",
        scrolledNavShellClass(visible),
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "r360-mobile-nav-header flex w-full min-w-0 flex-row items-center justify-between gap-2",
        className,
      )}
    >
      {children}
    </div>
  );
};

function getDialogFocusables(panel: HTMLElement): HTMLElement[] {
  const focusableSelector =
    'a[href], button:not([disabled]):not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])';
  return Array.from(panel.querySelectorAll<HTMLElement>(focusableSelector)).filter(
    (el) => el.getAttribute("aria-hidden") !== "true",
  );
}

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
  menuId = R360_MOBILE_NAV_MENU_ID,
}: {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  menuId?: string;
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const inertedElements = Array.from(
      document.querySelectorAll(R360_MOBILE_NAV_INERT_SELECTOR),
    );
    inertedElements.forEach((el) => {
      el.setAttribute("inert", "");
    });

    const panel = document.getElementById(menuId);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panel) return;

      const cycle = getDialogFocusables(panel);
      if (cycle.length === 0) return;

      const active = document.activeElement as HTMLElement | null;
      const activeIndex = active ? cycle.indexOf(active) : -1;

      if (activeIndex === -1) {
        event.preventDefault();
        (event.shiftKey ? cycle[cycle.length - 1] : cycle[0]).focus();
        return;
      }

      if (event.shiftKey) {
        if (activeIndex <= 0) {
          event.preventDefault();
          cycle[cycle.length - 1].focus();
        }
      } else if (activeIndex >= cycle.length - 1) {
        event.preventDefault();
        cycle[0].focus();
      }
    };

    const onFocusIn = (event: FocusEvent) => {
      if (!panel) return;
      const target = event.target as Node | null;
      if (target && panel.contains(target)) return;
      const cycle = getDialogFocusables(panel);
      queueMicrotask(() => {
        cycle[0]?.focus({ preventScroll: true });
      });
    };

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("focusin", onFocusIn);

    const focusFrame = requestAnimationFrame(() => {
      closeButtonRef.current?.focus({ preventScroll: true });
    });

    return () => {
      cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      inertedElements.forEach((el) => {
        el.removeAttribute("inert");
      });
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("focusin", onFocusIn);
    };
  }, [isOpen, onClose, menuId]);

  if (!isOpen) return null;

  return (
    <>
      <button
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        className="r360-mobile-nav-backdrop fixed inset-x-0 bottom-0 top-[var(--r360-header-height)] z-[45] bg-navy/55"
        onClick={onClose}
      />
      <div
        id={menuId}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          "r360-mobile-nav-panel fixed inset-x-0 top-[var(--r360-header-height)] z-[55] flex w-full min-w-0 flex-col items-stretch gap-3 overflow-x-hidden overflow-y-auto overscroll-contain border-t border-white/10 bg-navy px-4 pb-4 pt-2 text-white shadow-lg",
          className,
        )}
      >
        <div className="sticky top-0 z-10 -mx-4 flex shrink-0 justify-end border-b border-white/10 bg-navy px-4 py-2">
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4CAF50] focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            <IconX className="h-6 w-6" strokeWidth={2} aria-hidden />
          </button>
        </div>
        {children}
      </div>
    </>
  );
};

export const MobileNavToggle = forwardRef(function MobileNavToggle(
  {
    isOpen,
    onClick,
    controlsId = R360_MOBILE_NAV_MENU_ID,
  }: {
    isOpen: boolean;
    onClick: () => void;
    controlsId?: string;
  },
  ref: Ref<HTMLButtonElement>,
) {
  return (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      tabIndex={isOpen ? -1 : 0}
      aria-expanded={isOpen}
      aria-controls={controlsId}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      className="r360-mobile-nav-toggle inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4CAF50] focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
    >
      {isOpen ? (
        <IconX className="h-6 w-6" strokeWidth={2} aria-hidden />
      ) : (
        <IconMenu2 className="h-6 w-6" strokeWidth={2} aria-hidden />
      )}
    </button>
  );
});

export const NavbarLogo = ({
  logoSrc,
  brandName = "Reputation360",
  logoAlt,
  className,
  logoFetchPriority = "high",
}: {
  logoSrc?: string;
  brandName?: string;
  /** Accessible name for the logo image (defaults to brandName). */
  logoAlt?: string;
  className?: string;
  /** Keep "high" on desktop; use "low" on mobile home to protect LCP. */
  logoFetchPriority?: "high" | "low" | "auto";
} = {}) => {
  const imgAlt = logoAlt ?? brandName;
  const resolvedLogoSrc = logoSrc ? staticImageSrc(logoSrc) : "";
  return (
    <a
      href="/"
      {...internalAnchorProps("/")}
      className={cn(
        "relative z-20 flex min-w-0 shrink items-center gap-2 py-1 pr-1 text-lg font-bold text-white font-heading transition-transform duration-200 hover:scale-[1.02] sm:gap-2.5 sm:pr-2 sm:text-xl min-[1440px]:gap-3 min-[1440px]:pr-3 2xl:pr-2",
        className,
      )}
    >
      {resolvedLogoSrc ? (
        <div className="flex h-[3rem] w-[3rem] shrink-0 items-center justify-center rounded-full bg-white pl-0.5 sm:h-[3.25rem] sm:w-[3.25rem]">
          <img
            src={resolvedLogoSrc}
            alt={imgAlt}
            width={36}
            height={36}
            decoding="async"
            fetchPriority={logoFetchPriority}
            className="ml-1 object-contain"
          />
        </div>
      ) : (
        <img
          src="https://assets.aceternity.com/logo-dark.png"
          alt="logo"
          width={30}
          height={30}
        />
      )}
      <span className="truncate">{brandName}</span>
    </a>
  );
};

const buttonBase =
  "relative z-20 cursor-pointer px-5 py-2 rounded-lg text-sm font-heading font-medium transition-all duration-200 inline-block text-center hover:scale-105 active:scale-95";

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: ElementType;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient" | "consultation" | "reputationScan";
} & (
  | ComponentPropsWithoutRef<"a">
  | ComponentPropsWithoutRef<"button">
)) => {
  const variantStyles = {
    primary: "bg-cta-consult text-white hover:brightness-95",
    secondary: "bg-transparent text-white hover:text-green",
    dark: "bg-black text-white",
    gradient: "bg-gradient-to-b from-blue-500 to-blue-700 text-white",
    consultation: "text-white",
    reputationScan: "text-white",
  };

  const newTabProps = href ? anchorTabProps(href) : {};

  return (
    <Tag
      href={href || undefined}
      className={cn(
        buttonBase,
        variantStyles[variant],
        "shrink min-w-0 max-w-full",
        className,
      )}
      {...newTabProps}
      {...props}
    >
      {children}
    </Tag>
  );
};

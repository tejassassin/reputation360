import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { Children, cloneElement, isValidElement, useState } from "react";

/* Sticky pill: scroll>100 adds opaque shell + shadow. Below 2xl, desktop uses 2 rows (links then CTAs) so links never share a row with buttons. */

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
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  return (
    <div className={cn("sticky inset-x-0 top-0 z-40 w-full lg:top-20", className)}>
      {Children.map(children, (child) =>
        isValidElement(child) ? cloneElement(child, { visible } as WithVisible) : child,
      )}
    </div>
  );
};

function scrolledNavShellClass(visible: boolean) {
  return cn(
    "transition-[box-shadow,background-color] duration-300 ease-out",
    /* Opaque bar after scroll so hero/content never bleeds through gaps (was read as overlap). */
    visible &&
      "bg-navy shadow-[0_16px_68px_rgba(47,48,55,0.12),0_0_0_1px_rgba(255,255,255,0.08)]",
  );
}

export const NavBody = ({ children, className, visible = false }: NavBodyProps) => {
  return (
    <div
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl min-w-0 items-center gap-x-4 gap-y-2 self-start rounded-full bg-transparent px-3 py-2 sm:px-4",
        /* lg-xl: logo (row-span 2) | [nav row][cta row]. 2xl+: one row, three columns. */
        "lg:grid lg:grid-cols-[auto_minmax(0,1fr)] lg:grid-rows-[auto_auto] lg:items-stretch lg:gap-x-8 lg:gap-y-2 lg:py-2.5 xl:gap-x-10",
        "2xl:grid-cols-[auto_minmax(0,1fr)_auto] 2xl:grid-rows-1 2xl:items-center 2xl:gap-x-8 2xl:gap-y-0 2xl:py-2",
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
  items: {
    name: string;
    link: string;
    /** When true (with children), the parent label is not a link; only submenu items navigate. */
    parentNonNavigable?: boolean;
    children?: { name: string; link: string; newTab?: boolean }[];
  }[];
  className?: string;
  onItemClick?: () => void;
}) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      role="navigation"
      aria-label="Main"
      onMouseLeave={() => setHovered(null)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setHovered(null);
        }
      }}
      className={cn(
        "relative z-10 mx-0 hidden min-h-0 min-w-0 w-full max-w-full flex-row flex-wrap items-center justify-start gap-x-2 gap-y-1.5 text-[13px] font-medium text-white transition-colors duration-200 hover:text-green font-heading sm:gap-x-2.5 sm:text-sm lg:flex lg:gap-x-2 lg:gap-y-1.5 xl:gap-x-3",
        className,
      )}
    >
      {items.map((item, h) => {
        const parentIsDropdownOnly = Boolean(
          item.parentNonNavigable && item.children && item.children.length > 0,
        );
        return (
        <div
          onMouseEnter={() => setHovered(h)}
          className="relative"
          key={`link-${h}`}
        >
          {parentIsDropdownOnly ? (
            <button
              type="button"
              className="group relative block w-full cursor-default rounded-full px-2.5 py-1.5 text-left text-white transition-colors duration-200 hover:text-green xl:px-3.5 xl:py-2"
              aria-haspopup="menu"
              aria-expanded={hovered === h}
              onClick={(e) => e.preventDefault()}
            >
              <span
                className={cn(
                  "pointer-events-none absolute inset-0 rounded-full bg-white/0 transition-colors duration-200 group-hover:bg-white/10 group-focus-visible:bg-white/10",
                  hovered === h && "bg-white/10",
                )}
                aria-hidden
              />
              <span className="relative z-[1]">{item.name}</span>
            </button>
          ) : (
            <a
              onClick={(e) => {
                if (item.link === "#") e.preventDefault();
                onItemClick?.();
              }}
              className="group relative block rounded-full px-2.5 py-1.5 text-white transition-colors duration-200 hover:text-green xl:px-3.5 xl:py-2"
              href={item.link}
            >
              <span
                className="pointer-events-none absolute inset-0 rounded-full bg-white/0 transition-colors duration-200 group-hover:bg-white/10 group-focus-visible:bg-white/10"
                aria-hidden
              />
              <span className="relative z-[1]">{item.name}</span>
            </a>
          )}
          {item.children && item.children.length > 0 && hovered === h && (
            <div
              className="absolute left-0 top-full z-50 mt-2 min-w-44 rounded-lg border border-white/15 bg-navy/95 p-2 shadow-xl backdrop-blur-md"
              onMouseDown={(e) => e.stopPropagation()}
            >
              {item.children.map((child) => (
                <a
                  key={`${item.name}-${child.name}`}
                  href={child.link}
                  {...(child.newTab
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  onClick={onItemClick}
                  className="ha-nudge block rounded-md px-3 py-2 text-sm text-white transition-colors hover:bg-white/15 hover:text-green hover:shadow-[inset_0_0_0_1px_rgba(120,220,119,0.35)]"
                >
                  {child.name}
                </a>
              ))}
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
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent py-2 lg:hidden",
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
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose: _onClose,
}: {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}) => {
  void _onClose;
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-navy px-4 py-8 text-white shadow-lg",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX
      className="h-6 w-6 cursor-pointer text-white"
      onClick={onClick}
      aria-label="Close menu"
    />
  ) : (
    <IconMenu2
      className="h-6 w-6 cursor-pointer text-white"
      onClick={onClick}
      aria-label="Open menu"
    />
  );
};

export const NavbarLogo = ({
  logoSrc,
  brandName = "Reputation360",
  className,
}: {
  logoSrc?: string;
  brandName?: string;
  className?: string;
} = {}) => {
  return (
    <a
      href="/"
      className={cn(
        "relative z-20 flex shrink-0 items-center gap-2.5 py-1 pr-2 text-xl font-bold text-white font-heading transition-transform duration-200 hover:scale-[1.02] sm:gap-3 sm:pr-3",
        "lg:row-span-2 lg:self-center lg:pr-4",
        "2xl:row-span-1 2xl:self-auto 2xl:pr-2",
        className,
      )}
    >
      {logoSrc ? (
        <div className="flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center rounded-full bg-white pl-0.5">
          <img
            src={logoSrc}
            alt={brandName}
            width={36}
            height={36}
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
      <span>{brandName}</span>
    </a>
  );
};

const buttonBase =
  "relative z-20 cursor-pointer px-5 py-2 rounded-lg text-sm font-heading font-medium transition-all duration-200 inline-block text-center hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-cta-consult/25";

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
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | ComponentPropsWithoutRef<"a">
  | ComponentPropsWithoutRef<"button">
)) => {
  const variantStyles = {
    primary: "bg-cta-consult text-white hover:brightness-95",
    secondary: "bg-transparent text-white hover:text-green",
    dark: "bg-black text-white",
    gradient: "bg-gradient-to-b from-blue-500 to-blue-700 text-white",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(
        buttonBase,
        variantStyles[variant],
        "shrink-0",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

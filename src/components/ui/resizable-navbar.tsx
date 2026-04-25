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

/* Port of reputation360.in header (deploy bundle): fixed bg-navy bar, sticky top-20 shell,
   scroll>100 + motion (width/blur) on the pill row, NavItems absolute inset-0 centered. */

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
    <motion.div
      className={cn("sticky inset-x-0 top-20 z-40 w-full", className)}
    >
      {Children.map(children, (child) =>
        isValidElement(child) ? cloneElement(child, { visible } as WithVisible) : child,
      )}
    </motion.div>
  );
};

const navBarAnim = (visible: boolean) => ({
  backdropFilter: visible ? "blur(10px)" : "none",
  boxShadow: visible
    ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
    : "none",
  width: visible ? "40%" : "100%",
  y: visible ? 20 : 0,
});

const navBarTransition = { type: "spring" as const, stiffness: 200, damping: 50 };

export const NavBody = ({ children, className, visible = false }: NavBodyProps) => {
  return (
    <motion.div
      initial={false}
      animate={navBarAnim(visible)}
      transition={navBarTransition}
      style={{ minWidth: "1000px" }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex",
        visible && "bg-navy/95 backdrop-blur-md",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

const mobileBarAnim = (visible: boolean) => ({
  backdropFilter: visible ? "blur(10px)" : "none",
  boxShadow: visible
    ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
    : "none",
  width: visible ? "90%" : "100%",
  paddingRight: visible ? "12px" : "0px",
  paddingLeft: visible ? "12px" : "0px",
  borderRadius: visible ? "4px" : "2rem",
  y: visible ? 20 : 0,
});

export const NavItems = ({
  items,
  className,
  onItemClick,
}: {
  items: {
    name: string;
    link: string;
    children?: { name: string; link: string }[];
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
        "absolute inset-0 hidden min-h-0 flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-white transition duration-200 hover:text-green font-heading lg:flex lg:space-x-2",
        className,
      )}
    >
      {items.map((item, h) => (
        <div
          onMouseEnter={() => setHovered(h)}
          className={cn("relative", h === 0 && "ml-8 lg:ml-14")}
          key={`link-${h}`}
        >
          <a
            onClick={(e) => {
              if (item.link === "#") e.preventDefault();
              onItemClick?.();
            }}
            className="relative block rounded-full px-4 py-2 text-white transition-transform duration-200 hover:scale-110 hover:text-green"
            href={item.link}
          >
            {hovered === h && (
              <motion.div
                layoutId="hovered"
                className="absolute inset-0 h-full w-full rounded-full bg-white/10"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-20">{item.name}</span>
          </a>
          {item.children && item.children.length > 0 && hovered === h && (
            <div
              className="absolute left-0 top-full z-50 mt-2 min-w-44 rounded-lg border border-white/15 bg-navy/95 p-2 shadow-xl backdrop-blur-md"
              onMouseDown={(e) => e.stopPropagation()}
            >
              {item.children.map((child) => (
                <a
                  key={`${item.name}-${child.name}`}
                  href={child.link}
                  onClick={onItemClick}
                  className="ha-nudge block rounded-md px-3 py-2 text-sm text-white transition-colors hover:bg-white/15 hover:text-green hover:shadow-[inset_0_0_0_1px_rgba(120,220,119,0.35)]"
                >
                  {child.name}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
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
    <motion.div
      initial={false}
      animate={mobileBarAnim(visible)}
      transition={navBarTransition}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible && "bg-navy/95 backdrop-blur-md",
        className,
      )}
    >
      {children}
    </motion.div>
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
}: {
  logoSrc?: string;
  brandName?: string;
} = {}) => {
  return (
    <a
      href="/"
      className="relative z-20 mr-6 flex shrink-0 items-center gap-2 py-1 pr-2 text-xl font-bold text-white font-heading transition-transform duration-200 hover:scale-[1.02] lg:mr-10"
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

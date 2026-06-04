"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

export type AOSAnimation =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade"
  | "zoom-in";

type AOSProps = {
  children: ReactNode;
  animation?: AOSAnimation;
  delay?: number;
  duration?: number;
  offset?: number;
  className?: string;
  once?: boolean;
};

const hiddenTransform: Record<AOSAnimation, string> = {
  "fade-up": "translate3d(0, 36px, 0)",
  "fade-down": "translate3d(0, -36px, 0)",
  "fade-left": "translate3d(36px, 0, 0)",
  "fade-right": "translate3d(-36px, 0, 0)",
  fade: "none",
  "zoom-in": "scale(0.96)",
};

export function AOS({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 900,
  offset = 72,
  className = "",
  once = true,
}: AOSProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.08, rootMargin: `0px 0px -${offset}px 0px` }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [offset, once]);

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : hiddenTransform[animation],
    transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
    willChange: visible ? "auto" : "opacity, transform",
  };

  return (
    <div
      ref={ref}
      className={className}
      data-aos={animation}
      data-aos-delay={delay}
      style={style}
    >
      {children}
    </div>
  );
}

type AOSGroupProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  animation?: AOSAnimation;
  baseDelay?: number;
};

export function AOSGroup({
  children,
  className = "",
  stagger = 100,
  animation = "fade-up",
  baseDelay = 0,
}: AOSGroupProps) {
  return (
    <div className={className} data-aos-group>
      {Array.isArray(children)
        ? children.map((child, i) =>
            child != null ? (
              <AOS
                key={i}
                animation={animation}
                delay={baseDelay + i * stagger}
              >
                {child}
              </AOS>
            ) : null
          )
        : children}
    </div>
  );
}

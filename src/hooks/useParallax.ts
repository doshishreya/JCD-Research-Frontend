"use client";

import { useEffect, useRef } from "react";

type UseParallaxOptions = {
  speed?: number;
  direction?: "vertical" | "horizontal";
  maxOffset?: number;
};

export function useParallax<T extends HTMLElement = HTMLDivElement>({
  speed = 0.35,
  direction = "vertical",
  maxOffset = 120,
}: UseParallaxOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let raf = 0;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const distance = elementCenter - viewportCenter;
      const offset = Math.max(
        -maxOffset,
        Math.min(maxOffset, distance * speed * -0.15)
      );

      if (direction === "vertical") {
        el.style.transform = `translate3d(0, ${offset}px, 0)`;
      } else {
        el.style.transform = `translate3d(${offset}px, 0, 0)`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed, direction, maxOffset]);

  return ref;
}

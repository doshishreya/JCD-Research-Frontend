"use client";

import { useEffect, useState, type RefObject } from "react";

export type CTAMorphValues = {
  /** 0 = compact (initial), 1 = full width */
  progress: number;
  insetPx: number;
  radiusPx: number;
  maxWidthPx: number;
  sectionPadX: number;
};

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

const COMPACT_MAX = 1280;

const DEFAULT: CTAMorphValues = {
  progress: 0,
  insetPx: 0,
  radiusPx: 40,
  maxWidthPx: COMPACT_MAX,
  sectionPadX: 24,
};

export function computeCTAMorph(
  sectionTop: number,
  viewportWidth: number,
  viewportHeight: number
): CTAMorphValues {
  const enterAt = viewportHeight * 0.82;
  const expandAt = viewportHeight * 0.18;
  const raw = 1 - (sectionTop - expandAt) / (enterAt - expandAt);
  const progress = easeInOutCubic(Math.min(1, Math.max(0, raw)));

  const insetMax =
    viewportWidth >= 1280 ? 0 : viewportWidth >= 768 ? 0 : 0;

  const sectionPadMax =
    viewportWidth >= 1280 ? 96 : viewportWidth >= 768 ? 64 : 24;

  /* Compact = current card; expanded = full width with only a slight radius reduction */
  const radiusCompact =
    viewportWidth >= 1280 ? 44 : viewportWidth >= 768 ? 40 : 28;
  const radiusExpanded =
    viewportWidth >= 1280 ? 36 : viewportWidth >= 768 ? 32 : 24;

  const sectionPadExpanded =
    viewportWidth >= 1280 ? 20 : viewportWidth >= 768 ? 16 : 12;

  const compactWidth = Math.min(COMPACT_MAX, viewportWidth - sectionPadMax * 2);
  const expandedWidth = viewportWidth - sectionPadExpanded * 2;

  return {
    progress,
    insetPx: lerp(0, insetMax, progress),
    radiusPx: lerp(radiusCompact, radiusExpanded, progress),
    maxWidthPx: lerp(compactWidth, expandedWidth, progress),
    sectionPadX: lerp(sectionPadMax, sectionPadExpanded, progress),
  };
}

export function useCTAMorph(sectionRef: RefObject<HTMLElement | null>) {
  const [morph, setMorph] = useState<CTAMorphValues>(DEFAULT);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setMorph(
        computeCTAMorph(rect.top, window.innerWidth, window.innerHeight)
      );
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
  }, [sectionRef]);

  return morph;
}

"use client";

import { useEffect, useState } from "react";

/** Scroll distance (px) over which hero morphs from full-bleed to centered capsule */
const MORPH_DISTANCE = 480;

export type HeroMorphValues = {
  progress: number;
  insetPx: number;
  radiusPx: number;
  radiusTopPx: number;
  radiusBottomPx: number;
  maxWidthPx: number;
  sectionPadTop: number;
  sectionPadBottom: number;
};

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

const DEFAULT_MORPH: HeroMorphValues = {
  progress: 0,
  insetPx: 0,
  radiusPx: 12,
  radiusTopPx: 0,
  radiusBottomPx: 12,
  maxWidthPx: 0,
  sectionPadTop: 0,
  sectionPadBottom: 0,
};

export function computeHeroMorph(
  scrollY: number,
  viewportWidth: number
): HeroMorphValues {
  const raw = Math.min(1, Math.max(0, scrollY / MORPH_DISTANCE));
  const progress = easeOutCubic(raw);

  const insetMax =
    viewportWidth >= 1280 ? 56 : viewportWidth >= 768 ? 40 : 20;

  const radiusMax = viewportWidth >= 1280 ? 52 : viewportWidth >= 768 ? 44 : 32;
  const radiusMin = viewportWidth >= 768 ? 20 : 0;

  const maxWidthTarget = Math.min(1280, viewportWidth - insetMax * 2);

  const radiusPx = lerp(radiusMin, radiusMax, progress);

  return {
    progress,
    insetPx: lerp(0, insetMax, progress),
    radiusPx,
    radiusTopPx: lerp(0, radiusPx, progress),
    radiusBottomPx: lerp(radiusMin, radiusPx, progress),
    /* 0 = full width (no max-width cap); morph only when scrolled */
    maxWidthPx: progress > 0 ? lerp(viewportWidth, maxWidthTarget, progress) : 0,
    sectionPadTop: lerp(0, 16, progress),
    sectionPadBottom: lerp(0, 24, progress),
  };
}

export function useHeroMorph(enabled: boolean) {
  const [morph, setMorph] = useState<HeroMorphValues>(DEFAULT_MORPH);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    let raf = 0;

    const update = () => {
      const scrollY = enabled ? window.scrollY : 0;
      setMorph(computeHeroMorph(scrollY, window.innerWidth));
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
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    window.scrollTo(0, 0);
    setMorph(computeHeroMorph(0, window.innerWidth));
  }, [enabled]);

  return morph;
}

"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import Link from "next/link";
import { hero } from "@/lib/content";
import { HeroParallax3D } from "@/components/hero/HeroParallax3D";
import { usePageReveal } from "@/context/PageRevealContext";
import { useHeroMorph } from "@/hooks/useHeroMorph";

const HERO_VIDEO =
  "https://videos.pexels.com/video-files/3209663/3209663-hd_1920_1080_25fps.mp4";

const REVEAL_STAGGER = [0, 120, 240, 380, 520, 680];

export function Hero() {
  const { heroRevealed } = usePageReveal();
  const morph = useHeroMorph(heroRevealed);
  const sectionRef = useRef<HTMLElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const videoParallaxRef = useRef<HTMLDivElement>(null);
  const contentParallaxRef = useRef<HTMLDivElement>(null);
  const overlayParallaxRef = useRef<HTMLDivElement>(null);

  const isFullBleed = morph.progress < 0.01;

  const morphShellStyle: CSSProperties = {
    width: isFullBleed
      ? "100%"
      : `calc(100% - ${morph.insetPx * 2}px)`,
    maxWidth: isFullBleed ? "none" : morph.maxWidthPx,
    marginInline: "auto",
    borderRadius: `${morph.radiusTopPx}px ${morph.radiusTopPx}px ${morph.radiusBottomPx}px ${morph.radiusBottomPx}px`,
    boxShadow:
      morph.progress > 0.05
        ? `0 ${8 + morph.progress * 24}px ${40 + morph.progress * 48}px rgba(27, 40, 56, ${0.12 + morph.progress * 0.18})`
        : "none",
  };

  useEffect(() => {
    if (!heroRevealed) return;

    const videoEl = videoParallaxRef.current;
    const contentEl = contentParallaxRef.current;
    const overlayEl = overlayParallaxRef.current;
    if (!videoEl) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const onScroll = () => {
      const y = window.scrollY;
      const sectionTop = sectionRef.current?.offsetTop ?? 0;
      const relativeY = Math.max(0, y - sectionTop);

      videoEl.style.transform = `translate3d(0, ${relativeY * 0.42}px, 0) scale(1.1)`;
      if (overlayEl) {
        overlayEl.style.transform = `translate3d(0, ${relativeY * 0.15}px, 0)`;
      }
      if (contentEl) {
        contentEl.style.transform = `translate3d(0, ${relativeY * -0.08}px, 0)`;
        contentEl.style.opacity = `${Math.max(0.35, 1 - relativeY / 650)}`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [heroRevealed]);

  return (
    <section
      ref={sectionRef}
      className={`hero-section relative bg-pearl ${heroRevealed ? "hero-section--revealed" : "hero-section--waiting"}`}
      style={{
        paddingTop: `${morph.sectionPadTop}px`,
        paddingBottom: `${morph.sectionPadBottom}px`,
      }}
    >
      <div
        ref={shellRef}
        className={`hero-morph-shell relative flex min-h-[100svh] items-end overflow-hidden bg-ink ${
          isFullBleed ? "hero-morph-shell--full-bleed" : ""
        } ${heroRevealed ? "hero-morph-shell--revealed" : ""}`}
        style={morphShellStyle}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            ref={videoParallaxRef}
            className={`hero-video-layer parallax-slow absolute inset-0 scale-[1.1] ${heroRevealed ? "hero-video-layer--in" : ""}`}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1920"
              className="h-full w-full object-cover"
            >
              <source src={HERO_VIDEO} type="video/mp4" />
            </video>
          </div>

          <div
            ref={overlayParallaxRef}
            className={`hero-overlay-layer absolute inset-0 ${heroRevealed ? "hero-overlay-layer--in" : ""}`}
          >
            <div className="absolute inset-0 bg-ink/65" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/45 to-ink/85" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_50%_at_75%_15%,rgba(155,184,202,0.2)_0%,transparent_60%)]" />
          </div>
        </div>

        <HeroParallax3D />

        <div
          ref={contentParallaxRef}
          className="section-padding section-max relative z-10 w-full pb-20 pt-36 md:pb-28 md:pt-44"
        >
          <p
            className="hero-reveal-item label-premium !text-brand-light"
            style={{ "--hero-delay": `${REVEAL_STAGGER[0]}ms` } as CSSProperties}
          >
            {hero.eyebrow}
          </p>

          <h1
            className="hero-reveal-item heading-display mt-7 max-w-[14ch] text-balance text-[2.5rem] text-canvas md:max-w-4xl md:text-[3.25rem] lg:text-[3.85rem]"
            style={{ "--hero-delay": `${REVEAL_STAGGER[1]}ms` } as CSSProperties}
          >
            {hero.headline}
          </h1>

          <p
            className="hero-reveal-item body-premium mt-8 max-w-xl !text-canvas/80 md:text-[17px]"
            style={{ "--hero-delay": `${REVEAL_STAGGER[2]}ms` } as CSSProperties}
          >
            {hero.subhead}
          </p>

          <div
            className="hero-reveal-item mt-11 flex flex-wrap items-center gap-4 md:mt-14"
            style={{ "--hero-delay": `${REVEAL_STAGGER[3]}ms` } as CSSProperties}
          >
            <Link
              href="#testing"
              className="btn-accent inline-flex items-center px-9 py-4 font-display text-[11px] font-semibold uppercase tracking-[0.14em]"
            >
              {hero.ctaPrimary}
            </Link>
            <Link
              href="#order-flow"
              className="btn-outline-light inline-flex items-center px-9 py-4 font-display text-[11px] font-semibold uppercase tracking-[0.14em]"
            >
              {hero.ctaSecondary}
            </Link>
          </div>

          <div
            className="hero-reveal-item mt-24 hidden items-end justify-between rounded-2xl border border-canvas/10 bg-canvas/5 px-8 py-8 backdrop-blur-md md:flex"
            style={{ "--hero-delay": `${REVEAL_STAGGER[4]}ms` } as CSSProperties}
          >
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-canvas/50">
              Scroll to explore
            </p>
            <div className="flex gap-12">
              {hero.highlights.map((item, i) => (
                <div
                  key={item.title}
                  className="hero-reveal-item"
                  style={
                    {
                      "--hero-delay": `${REVEAL_STAGGER[5] + i * 100}ms`,
                    } as CSSProperties
                  }
                >
                  <p className="font-display text-[1.5rem] font-light text-canvas">
                    {item.title}
                  </p>
                  <p className="mt-1 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-brand-light">
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

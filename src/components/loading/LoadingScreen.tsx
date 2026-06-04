"use client";

import { useEffect, useRef, useState } from "react";
import { lottieAssets } from "@/lib/lottie-assets";
import { JcdLogo } from "@/components/ui/JcdLogo";
import { LottieAnimation } from "@/components/ui/LottieAnimation";
import { LoaderScene3D } from "@/components/loading/LoaderScene3D";

type LoadingScreenProps = {
  progress: number;
  exiting: boolean;
};

export function LoadingScreen({ progress, exiting }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 12, y: -18 });
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let raf = 0;
    let autoPhase = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;

      setParallax({ x: dx * 28, y: dy * 22 });
      if (!prefersReduced) {
        setTilt({ x: 10 + dy * 14, y: -16 + dx * 18 });
      }
    };

    const autoFloat = () => {
      if (!prefersReduced) {
        autoPhase += 0.012;
        setParallax((p) => ({
          x: p.x * 0.92 + Math.sin(autoPhase) * 6,
          y: p.y * 0.92 + Math.cos(autoPhase * 0.85) * 5,
        }));
        setTilt((t) => ({
          x: t.x + Math.sin(autoPhase * 0.7) * 0.08,
          y: t.y + Math.cos(autoPhase * 0.6) * 0.1,
        }));
      }
      raf = requestAnimationFrame(autoFloat);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    raf = requestAnimationFrame(autoFloat);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`loader-screen ${exiting ? "loader-screen--exit" : ""}`}
      aria-live="polite"
      aria-busy={!exiting}
      aria-label="Loading JCD Research"
    >
      {/* Parallax depth layers */}
      <div
        className="loader-parallax-layer loader-parallax-layer-1"
        style={{
          transform: `translate3d(${parallax.x * 0.35}px, ${parallax.y * 0.35}px, 0)`,
        }}
        aria-hidden
      />
      <div
        className="loader-parallax-layer loader-parallax-layer-2"
        style={{
          transform: `translate3d(${parallax.x * 0.65}px, ${parallax.y * 0.55}px, 0)`,
        }}
        aria-hidden
      />
      <div
        className="loader-parallax-layer loader-parallax-layer-3"
        style={{
          transform: `translate3d(${parallax.x * 1.1}px, ${parallax.y * 0.9}px, 0)`,
        }}
        aria-hidden
      />

      <div className="loader-content">
        <div
          className="loader-scene-wrap"
          style={{
            transform: `translate3d(${parallax.x * 0.2}px, ${parallax.y * 0.15}px, 0)`,
          }}
        >
          <LoaderScene3D rotateX={tilt.x} rotateY={tilt.y} />

          <div className="loader-lottie-overlay pointer-events-none">
            <LottieAnimation
              src={lottieAssets.molecule}
              className="h-24 w-24 opacity-70 md:h-28 md:w-28"
              ariaLabel="Loading animation"
            />
          </div>
        </div>

        <div className="loader-brand flex justify-center">
          <JcdLogo variant="onDark" className="h-11 md:h-12" />
        </div>
        <p className="loader-tagline font-sans">
          Precision science · Measurable outcomes
        </p>

        <div className="loader-progress-track" role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100}>
          <div
            className="loader-progress-fill"
            style={{ transform: `scaleX(${Math.min(1, progress / 100)})` }}
          />
        </div>
        <p className="loader-status font-sans">
          {progress < 100 ? "Preparing laboratory experience" : "Welcome"}
        </p>
      </div>
    </div>
  );
}

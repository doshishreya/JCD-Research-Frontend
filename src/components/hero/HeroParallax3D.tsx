"use client";

import { useEffect, useRef, useState } from "react";
import { lottieAssets } from "@/lib/lottie-assets";
import { LoaderScene3D } from "@/components/loading/LoaderScene3D";
import { LottieAnimation } from "@/components/ui/LottieAnimation";
import { usePageReveal } from "@/context/PageRevealContext";

export function HeroParallax3D() {
  const { heroRevealed } = usePageReveal();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 14, y: -12 });
  const [float, setFloat] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!heroRevealed) return;

    const el = wrapRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let raf = 0;
    let phase = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;

      setFloat({ x: dx * 32, y: dy * 26 });
      if (!prefersReduced) {
        setTilt({ x: 12 + dy * 16, y: -10 + dx * 20 });
      }
    };

    const autoDrift = () => {
      if (!prefersReduced) {
        phase += 0.01;
        setFloat((f) => ({
          x: f.x * 0.94 + Math.sin(phase) * 8,
          y: f.y * 0.94 + Math.cos(phase * 0.9) * 6,
        }));
      }
      raf = requestAnimationFrame(autoDrift);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    raf = requestAnimationFrame(autoDrift);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [heroRevealed]);

  return (
    <div
      ref={wrapRef}
      className={`hero-3d-wrap pointer-events-none absolute inset-0 z-[6] ${heroRevealed ? "hero-3d-wrap--active" : ""}`}
      aria-hidden
    >
      <div
        className="hero-3d-parallax hero-3d-parallax-1"
        style={{
          transform: `translate3d(${float.x * 0.4}px, ${float.y * 0.35}px, 0)`,
        }}
      />
      <div
        className="hero-3d-parallax hero-3d-parallax-2"
        style={{
          transform: `translate3d(${float.x * 0.75}px, ${float.y * 0.6}px, 0)`,
        }}
      />

      {/* <div
        className="hero-3d-scene-outer"
        style={{
          transform: `translate3d(${float.x * 0.25}px, ${float.y * 0.2}px, 0)`,
        }}
      >
        <div className="hero-3d-scene">
          <div className="hero-3d-glass">
            <LoaderScene3D
              rotateX={tilt.x}
              rotateY={tilt.y}
              size="hero"
            />
          </div>
        </div>
      </div> */}

      {/* <div
        className="hero-3d-float-right hidden lg:block"
        style={{
          transform: `translate3d(${float.x * 0.5}px, ${float.y * 0.45}px, 0)`,
        }}
      >
        <div className="lottie-float rounded-full bg-canvas/10 p-5 ring-1 ring-canvas/15 backdrop-blur-md">
          <LottieAnimation
            src={lottieAssets.dnaHelix}
            className="h-20 w-20 opacity-90 [filter:brightness(1.15)_hue-rotate(190deg)]"
            ariaLabel="DNA helix animation"
          />
        </div>
      </div> */}
    </div>
  );
}

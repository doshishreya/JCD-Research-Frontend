"use client";

import { ParallaxLayer } from "@/components/ui/ParallaxLayer";

type FloatingOrbsProps = {
  variant?: "light" | "dark";
};

export function FloatingOrbs({ variant = "light" }: FloatingOrbsProps) {
  const isLight = variant === "light";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <ParallaxLayer speed={0.55} maxOffset={80} className="absolute -right-16 top-[12%]">
        <div
          className={`h-72 w-72 rounded-full blur-3xl ${
            isLight
              ? "bg-brand-glow/50"
              : "bg-brand-light/20"
          }`}
        />
      </ParallaxLayer>
      <ParallaxLayer speed={0.3} maxOffset={60} className="absolute -left-20 bottom-[18%]">
        <div
          className={`h-56 w-56 rounded-full blur-3xl ${
            isLight
              ? "bg-pearl-deep/80"
              : "bg-brand/25"
          }`}
        />
      </ParallaxLayer>
      <ParallaxLayer speed={0.45} maxOffset={50} className="absolute right-[20%] bottom-[8%]">
        <div
          className={`h-40 w-40 rounded-full blur-2xl ${
            isLight ? "bg-brand-soft/40" : "bg-white/5"
          }`}
        />
      </ParallaxLayer>
    </div>
  );
}

"use client";

import { type ReactNode } from "react";
import { useParallax } from "@/hooks/useParallax";

type ParallaxLayerProps = {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "vertical" | "horizontal";
  maxOffset?: number;
};

export function ParallaxLayer({
  children,
  className = "",
  speed = 0.35,
  direction = "vertical",
  maxOffset = 100,
}: ParallaxLayerProps) {
  const ref = useParallax<HTMLDivElement>({ speed, direction, maxOffset });

  return (
    <div ref={ref} className={`parallax-slow ${className}`}>
      {children}
    </div>
  );
}

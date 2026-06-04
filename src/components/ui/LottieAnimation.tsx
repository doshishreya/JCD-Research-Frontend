"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

type LottieAnimationProps = {
  src: string;
  className?: string;
  loop?: boolean;
  ariaLabel?: string;
};

function isValidLottiePayload(data: unknown): data is object {
  if (!data || typeof data !== "object") return false;
  const record = data as Record<string, unknown>;
  const name = String(record.nm ?? "");
  if (/404|failed|error/i.test(name)) return false;
  return Array.isArray(record.layers) || record.v !== undefined;
}

export function LottieAnimation({
  src,
  className = "",
  loop = true,
  ariaLabel = "Decorative animation",
}: LottieAnimationProps) {
  const [data, setData] = useState<object | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setFailed(false);
    setData(null);

    fetch(src)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => {
        if (cancelled) return;
        if (!isValidLottiePayload(json)) {
          setFailed(true);
          return;
        }
        setData(json);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
    };
  }, [src]);

  if (failed || !data) {
    return (
      <div
        className={`flex items-center justify-center ${className}`}
        aria-hidden={failed}
      >
        <div
          className={`rounded-full bg-brand-glow/40 ${failed ? "h-full w-full min-h-[3rem] min-w-[3rem] opacity-40" : "h-full w-full animate-pulse opacity-60"}`}
        />
      </div>
    );
  }

  return (
    <div className={className} role="img" aria-label={ariaLabel}>
      <Lottie animationData={data} loop={loop} className="h-full w-full" />
    </div>
  );
}

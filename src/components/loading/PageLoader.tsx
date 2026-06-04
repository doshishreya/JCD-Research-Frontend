"use client";

import {
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { LoadingScreen } from "@/components/loading/LoadingScreen";
import { PageRevealContext } from "@/context/PageRevealContext";

const MIN_DISPLAY_MS = 2400;
const EXIT_ANIMATION_MS = 900;
const HERO_REVEAL_DELAY_MS = 150;

type PageLoaderProps = {
  children: ReactNode;
};

export function PageLoader({ children }: PageLoaderProps) {
  const [phase, setPhase] = useState<"loading" | "exiting" | "done">("loading");
  const [progress, setProgress] = useState(0);
  const [heroRevealed, setHeroRevealed] = useState(false);

  const finishLoading = useCallback(() => {
    setProgress(100);
    setPhase("exiting");
    window.setTimeout(() => {
      window.scrollTo(0, 0);
      setPhase("done");
      window.setTimeout(() => {
        window.scrollTo(0, 0);
        setHeroRevealed(true);
      }, HERO_REVEAL_DELAY_MS);
    }, EXIT_ANIMATION_MS);
  }, []);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    document.body.classList.add("is-loading");
    const start = performance.now();
    let loadComplete = document.readyState === "complete";
    let progressRaf = 0;
    let finished = false;

    const onLoad = () => {
      loadComplete = true;
    };

    if (!loadComplete) {
      window.addEventListener("load", onLoad);
    }

    const tickProgress = (now: number) => {
      const elapsed = now - start;
      const timeProgress = Math.min(92, (elapsed / MIN_DISPLAY_MS) * 92);
      const loadBoost = loadComplete ? 8 : 0;
      setProgress(Math.min(99, timeProgress + loadBoost));

      if (!finished && elapsed >= MIN_DISPLAY_MS && loadComplete) {
        finished = true;
        finishLoading();
        return;
      }

      progressRaf = requestAnimationFrame(tickProgress);
    };

    progressRaf = requestAnimationFrame(tickProgress);

    const safetyTimeout = window.setTimeout(() => {
      if (!finished) {
        finished = true;
        finishLoading();
      }
    }, MIN_DISPLAY_MS + 4000);

    return () => {
      cancelAnimationFrame(progressRaf);
      window.removeEventListener("load", onLoad);
      window.clearTimeout(safetyTimeout);
    };
  }, [finishLoading]);

  useEffect(() => {
    if (phase === "done") {
      document.body.classList.remove("is-loading");
    }
  }, [phase]);

  const isReady = phase === "done";

  return (
    <PageRevealContext.Provider value={{ isReady, heroRevealed }}>
      {phase !== "done" && (
        <LoadingScreen
          progress={progress}
          exiting={phase === "exiting"}
        />
      )}
      <div
        className={`page-content ${isReady ? "page-content--visible" : ""}`}
      >
        {children}
      </div>
    </PageRevealContext.Provider>
  );
}

"use client";

import { createContext, useContext } from "react";

type PageRevealContextValue = {
  /** Loader fully dismissed — page visible */
  isReady: boolean;
  /** Hero entrance + 3D parallax active */
  heroRevealed: boolean;
};

export const PageRevealContext = createContext<PageRevealContextValue>({
  isReady: false,
  heroRevealed: false,
});

export function usePageReveal() {
  return useContext(PageRevealContext);
}

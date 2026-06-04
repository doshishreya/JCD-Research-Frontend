/**
 * Self-hosted Lottie files (public/lottie).
 * Remote LottieFiles package URLs often resolve to "404-error" placeholder animations.
 */
export const lottieAssets = {
  dnaHelix: "/lottie/dna-helix.json",
  microscope: "/lottie/microscope.json",
  labFlask: "/lottie/lab-flask.json",
  molecule: "/lottie/molecule.json",
} as const;

export type LottieAssetKey = keyof typeof lottieAssets;

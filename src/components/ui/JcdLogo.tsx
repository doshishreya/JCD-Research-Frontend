import Image from "next/image";
import { brandAssets } from "@/lib/content";

type JcdLogoProps = {
  /** White logo on dark backgrounds; black logo on light backgrounds. */
  variant: "onDark" | "onLight";
  className?: string;
  priority?: boolean;
};

const LOGO_WIDTH = 168;
const LOGO_HEIGHT = 44;

export function JcdLogo({
  variant,
  className = "",
  priority = false,
}: JcdLogoProps) {
  const src =
    variant === "onDark" ? brandAssets.logoWhite : brandAssets.logoBlack;

  return (
    <Image
      src={src}
      alt="JCD Research"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority={priority}
      className={`h-9 w-auto object-contain object-left md:h-10 ${className}`}
    />
  );
}

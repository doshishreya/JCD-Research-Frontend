import { AOS } from "@/components/ui/AOS";

type SectionLabelProps = {
  children: string;
  className?: string;
  delay?: number;
  light?: boolean;
};

export function SectionLabel({
  children,
  className = "",
  delay = 0,
  light = false,
}: SectionLabelProps) {
  return (
    <AOS animation="fade-right" delay={delay} duration={700}>
      <div className={`flex items-center gap-4 ${className}`}>
        <span
          className={`accent-bar shrink-0 ${light ? "opacity-90" : ""}`}
          aria-hidden
        />
        <p
          className={`label-premium ${light ? "!text-brand-light" : ""}`}
        >
          {children}
        </p>
      </div>
    </AOS>
  );
}

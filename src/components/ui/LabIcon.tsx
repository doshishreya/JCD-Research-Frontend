type LabIconName =
  | "chromatography"
  | "molecular"
  | "protocol"
  | "validation"
  | "reporting"
  | "throughput"
  | "scientists"
  | "flask"
  | "microscope";

type LabIconProps = {
  name: LabIconName;
  className?: string;
};

export function LabIcon({ name, className = "h-6 w-6" }: LabIconProps) {
  const stroke = "currentColor";
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "chromatography":
      return (
        <svg {...common}>
          <path d="M6 3v18M18 3v18M6 8h12M6 14h12" />
          <circle cx="9" cy="11" r="1.5" fill={stroke} stroke="none" />
          <circle cx="15" cy="11" r="1.5" fill={stroke} stroke="none" />
        </svg>
      );
    case "molecular":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="2" />
          <circle cx="6" cy="8" r="1.5" />
          <circle cx="18" cy="8" r="1.5" />
          <circle cx="6" cy="16" r="1.5" />
          <circle cx="18" cy="16" r="1.5" />
          <path d="M12 10V8M7.5 9l3-2M16.5 9l-3-2M7.5 15l3 2M16.5 15l-3 2M12 14v2" />
        </svg>
      );
    case "protocol":
      return (
        <svg {...common}>
          <path d="M8 4h8l2 2v14H6V4h2z" />
          <path d="M9 10h6M9 14h6M9 18h4" />
        </svg>
      );
    case "validation":
      return (
        <svg {...common}>
          <path d="M9 12l2 2 4-5" />
          <path d="M12 3c4 0 7 3 7 7s-3 7-7 7-7-3-7-7 3-7 7-7z" />
        </svg>
      );
    case "reporting":
      return (
        <svg {...common}>
          <path d="M7 4h10v16H7z" />
          <path d="M9 8h6M9 12h6M9 16h4" />
          <path d="M4 8v8M20 8v8" />
        </svg>
      );
    case "throughput":
      return (
        <svg {...common}>
          <path d="M4 12h16M4 6h10M4 18h14" />
          <path d="M18 6v12" />
        </svg>
      );
    case "scientists":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3" />
          <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <path d="M17 10l2 2-4 4" />
        </svg>
      );
    case "flask":
      return (
        <svg {...common}>
          <path d="M10 3h4v5l5 9H5l5-9V3z" />
          <path d="M9 14h6" />
        </svg>
      );
    case "microscope":
      return (
        <svg {...common}>
          <path d="M6 18h12M12 14V6M9 6h6" />
          <circle cx="12" cy="16" r="2" />
          <path d="M8 10h8" />
        </svg>
      );
    default:
      return <svg {...common}><circle cx="12" cy="12" r="4" /></svg>;
  }
}

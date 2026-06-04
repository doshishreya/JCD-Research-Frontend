type LabGridProps = {
  variant?: "light" | "dark";
};

export function LabGrid({ variant = "light" }: LabGridProps) {
  return (
    <div
      className={`lab-grid pointer-events-none absolute inset-0 ${variant === "dark" ? "lab-grid--dark" : ""}`}
      aria-hidden
    />
  );
}

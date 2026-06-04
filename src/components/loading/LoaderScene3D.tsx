"use client";

type LoaderScene3DProps = {
  rotateX?: number;
  rotateY?: number;
  size?: "loader" | "hero";
};

export function LoaderScene3D({
  rotateX = 0,
  rotateY = 0,
  size = "loader",
}: LoaderScene3DProps) {
  const sizeClass =
    size === "hero"
      ? "h-40 w-40 md:h-52 md:w-52 lg:h-56 lg:w-56"
      : "h-52 w-52 md:h-64 md:w-64";

  return (
    <div
      className={`loader-perspective relative flex items-center justify-center ${sizeClass}`}
      style={{
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
    >
      <div className="loader-orbit-system">
        <div className="loader-ring loader-ring-1" aria-hidden>
          <span className="loader-node" />
          <span className="loader-node loader-node-offset" />
        </div>
        <div className="loader-ring loader-ring-2" aria-hidden>
          <span className="loader-node" />
          <span className="loader-node loader-node-offset-2" />
        </div>
        <div className="loader-ring loader-ring-3" aria-hidden>
          <span className="loader-node" />
        </div>
        <div className="loader-core" aria-hidden>
          <span className="loader-core-inner" />
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-rule-60 px-6 text-center">
      <p className="label-premium">404</p>
      <h1 className="heading-section mt-5 text-3xl text-ink">
        Page not found
      </h1>
      <Link
        href="/"
        className="btn-accent mt-10 inline-flex px-8 py-3.5 font-display text-[11px] font-semibold uppercase tracking-[0.14em]"
      >
        Return home
      </Link>
    </div>
  );
}

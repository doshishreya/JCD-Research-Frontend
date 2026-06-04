import Link from "next/link";
import { accountSection } from "@/lib/content";
import { AOS } from "@/components/ui/AOS";
import { LabGrid } from "@/components/ui/LabGrid";
import { LabIcon } from "@/components/ui/LabIcon";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function AccountPreview() {
  return (
    <section
      id="account"
      className="lab-section section-padding section-spacing relative overflow-hidden bg-rule-60"
    >
      <LabGrid />

      <div className="section-max relative">
        <div className="mx-auto max-w-xl text-center">
          <SectionLabel delay={0}>{accountSection.label}</SectionLabel>

          <AOS animation="fade-up" delay={100}>
            <h2 className="heading-section mt-7 text-3xl text-ink md:text-4xl">
              {accountSection.title}
            </h2>
          </AOS>

          <AOS animation="fade-up" delay={180}>
            <p className="body-premium mt-7">{accountSection.description}</p>
          </AOS>

          <AOS animation="zoom-in" delay={280}>
            <div className="lab-specimen-card mx-auto mt-12 max-w-md p-10 text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-glow text-brand-deep ring-1 ring-brand-soft">
                <LabIcon name="scientists" className="h-6 w-6" />
              </div>
              <p className="mt-6 font-sans text-[12px] font-medium uppercase tracking-[0.14em] text-brand-deep">
                Researchers only
              </p>
              <p className="body-premium mt-3 text-[14px]">
                {accountSection.note}
              </p>
              <button
                type="button"
                disabled
                className="btn-accent mt-8 inline-flex w-full cursor-not-allowed justify-center px-8 py-4 font-display text-[11px] font-semibold uppercase tracking-[0.14em] opacity-80"
              >
                {accountSection.cta}
              </button>
              <Link
                href="#testing"
                className="btn-ghost mt-4 inline-flex w-full justify-center px-8 py-3 font-display text-[11px] font-semibold uppercase tracking-[0.12em]"
              >
                Browse tests first
              </Link>
            </div>
          </AOS>
        </div>
      </div>
    </section>
  );
}

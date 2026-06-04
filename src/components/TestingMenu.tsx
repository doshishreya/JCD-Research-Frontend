import Link from "next/link";
import { peptideTests, testingSection } from "@/lib/content";
import { AOS } from "@/components/ui/AOS";
import { LabGrid } from "@/components/ui/LabGrid";
import { LabIcon } from "@/components/ui/LabIcon";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function TestingMenu() {
  return (
    <section
      id="testing"
      className="lab-section section-padding section-spacing relative overflow-hidden border-t border-line-soft bg-rule-60-alt"
    >
      <LabGrid />

      <div className="section-max relative">
        <SectionLabel delay={0}>{testingSection.label}</SectionLabel>

        <AOS animation="fade-up" delay={80}>
          <h2 className="heading-section mt-7 text-balance text-3xl text-ink md:text-4xl lg:text-[2.65rem]">
            {testingSection.title}
          </h2>
        </AOS>

        <AOS animation="fade-up" delay={160}>
          <p className="body-premium mt-7 max-w-2xl text-[15px] md:text-base">
            {testingSection.description}
          </p>
          <p className="mt-4 font-sans text-[12px] font-medium uppercase tracking-[0.14em] text-brand-deep">
            {testingSection.pricingNote}
          </p>
        </AOS>

        <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-7">
          {peptideTests.map((test, index) => (
            <AOS
              key={test.id}
              animation="fade-up"
              delay={280 + index * 100}
            >
              <article className="lab-service-card group flex h-full flex-col p-9 md:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-glow text-brand-deep ring-1 ring-brand-soft">
                  <LabIcon name={test.icon} className="h-6 w-6" />
                </div>
                <span className="mt-6 font-mono text-[11px] font-medium tracking-[0.18em] text-ink-faint">
                  {test.sampleNote}
                </span>
                <h3 className="heading-section mt-3 text-2xl text-ink transition-colors duration-300 group-hover:text-brand-deep">
                  {test.title}
                </h3>
                <p className="mt-2 font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-brand-deep">
                  {test.method}
                </p>
                <p className="body-premium mt-5 flex-1 text-[14px]">
                  {test.description}
                </p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {test.tags.map((tag) => (
                    <li key={tag} className="lab-method-pill">
                      {tag}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#account"
                  className="btn-accent mt-9 inline-flex w-fit items-center gap-2 px-6 py-3 font-display text-[11px] font-semibold uppercase tracking-[0.12em]"
                >
                  Select test
                  <span aria-hidden>→</span>
                </Link>
              </article>
            </AOS>
          ))}
        </div>
      </div>
    </section>
  );
}

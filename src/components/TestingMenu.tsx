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

        <div className="testing-cards-grid mt-14 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-7">
          {peptideTests.map((test, index) => (
            <AOS
              key={test.id}
              animation="fade-up"
              delay={280 + index * 100}
              className="h-full min-w-0"
            >
              <article className="testing-service-card lab-service-card group flex h-full min-w-0 flex-col p-7 md:p-8 xl:p-10">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-glow text-brand-deep ring-1 ring-brand-soft">
                  <LabIcon name={test.icon} className="h-6 w-6" />
                </div>
                <span className="testing-service-card__meta mt-6 font-mono text-[11px] font-medium leading-snug tracking-[0.18em] text-ink-faint">
                  {test.sampleNote}
                </span>
                <h3 className="heading-section mt-3 text-[1.35rem] text-ink transition-colors duration-300 group-hover:text-brand-deep xl:text-2xl">
                  {test.title}
                </h3>
                <p className="mt-2 font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-brand-deep">
                  {test.method}
                </p>
                <p className="body-premium mt-5 flex-1 text-[14px] leading-relaxed">
                  {test.description}
                </p>
                <div className="testing-service-card__footer mt-auto pt-7">
                  <ul className="testing-service-card__tags flex flex-wrap gap-2">
                    {test.tags.map((tag) => (
                      <li key={tag} className="lab-method-pill">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#account"
                    className="testing-service-card__cta btn-accent mt-6 inline-flex w-full items-center justify-center gap-2 px-6 py-3 font-display text-[11px] font-semibold uppercase tracking-[0.12em] xl:w-fit xl:justify-start"
                  >
                    Select test
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            </AOS>
          ))}
        </div>
      </div>
    </section>
  );
}

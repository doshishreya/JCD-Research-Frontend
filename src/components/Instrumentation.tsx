import { instruments, instrumentsSection } from "@/lib/content";
import { AOS } from "@/components/ui/AOS";
import { LabGrid } from "@/components/ui/LabGrid";
import { LabIcon } from "@/components/ui/LabIcon";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Instrumentation() {
  return (
    <section
      id="instruments"
      className="lab-section section-padding section-spacing relative overflow-hidden bg-rule-60"
    >
      <LabGrid />

      <div className="section-max relative">
        <SectionLabel delay={0}>{instrumentsSection.label}</SectionLabel>

        <AOS animation="fade-up" delay={100}>
          <h2 className="heading-section mt-7 text-balance text-3xl text-ink md:text-4xl">
            {instrumentsSection.title}
          </h2>
        </AOS>

        <AOS animation="fade-up" delay={180}>
          <p className="body-premium mt-7 max-w-2xl">
            {instrumentsSection.description}
          </p>
        </AOS>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {instruments.map((item, index) => (
            <AOS key={item.id} animation="fade-up" delay={260 + index * 90}>
              <article className="lab-capability-row flex gap-6 p-8 md:p-10">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-glow text-brand-deep ring-1 ring-brand-soft">
                  <LabIcon name={item.icon} className="h-7 w-7" />
                </div>
                <div>
                  <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-brand-deep">
                    {item.model}
                  </p>
                  <h3 className="heading-section mt-2 text-2xl text-ink">
                    {item.title}
                  </h3>
                  <p className="body-premium mt-4 text-[14px]">
                    {item.role}
                  </p>
                </div>
              </article>
            </AOS>
          ))}
        </div>
      </div>
    </section>
  );
}

import { orderFields, orderFlow, orderFlowSection } from "@/lib/content";
import { AOS } from "@/components/ui/AOS";
import { LabGrid } from "@/components/ui/LabGrid";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function OrderFlow() {
  return (
    <section
      id="order-flow"
      aria-label="Order flow"
      className="lab-section section-padding section-spacing relative border-y border-line-soft bg-canvas"
    >
      <LabGrid />
      <div className="section-max relative">
        <SectionLabel delay={0}>{orderFlowSection.label}</SectionLabel>

        <AOS animation="fade-up" delay={80}>
          <h2 className="heading-section mt-7 max-w-3xl text-balance text-3xl text-ink md:text-4xl lg:text-[2.65rem]">
            {orderFlowSection.title}
          </h2>
        </AOS>

        <AOS animation="fade-up" delay={160}>
          <p className="body-premium mt-6 max-w-2xl text-[15px] md:text-base">
            {orderFlowSection.description}
          </p>
        </AOS>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {orderFlow.map((item, i) => (
            <AOS key={item.step} animation="fade-up" delay={240 + i * 60}>
              <li className="lab-specimen-card relative h-full list-none p-6 md:p-7">
                <span className="font-mono text-[11px] font-medium tracking-[0.2em] text-brand-deep">
                  {item.step}
                </span>
                <h3 className="font-display mt-4 text-lg font-medium text-ink">
                  {item.title}
                </h3>
                <p className="body-premium mt-3 text-[13px] leading-relaxed">
                  {item.detail}
                </p>
              </li>
            </AOS>
          ))}
        </ol>

        <AOS animation="fade-up" delay={520}>
          <div className="lab-specimen-card mt-12 border-l-4 border-l-brand p-8 md:p-10">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-ink-faint">
              Order information
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {orderFields.map((field) => (
                <li
                  key={field}
                  className="flex items-center gap-2 font-sans text-[14px] text-ink-muted"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {field}
                </li>
              ))}
            </ul>
            <p className="body-premium mt-6 text-[13px] text-ink-faint">
              Fields autofill from your account when previously saved. Shipping
              label and printable barcode/QR are generated for each order.
            </p>
          </div>
        </AOS>
      </div>
    </section>
  );
}

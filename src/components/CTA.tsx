"use client";

import { useRef, type CSSProperties } from "react";
import Link from "next/link";
import { cta, site } from "@/lib/content";
import { AOS } from "@/components/ui/AOS";
import { LabGrid } from "@/components/ui/LabGrid";
import { useCTAMorph } from "@/hooks/useCTAMorph";

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const morph = useCTAMorph(sectionRef);

  const isCompact = morph.progress < 0.08;

  const sectionStyle: CSSProperties = {
    paddingLeft: morph.sectionPadX,
    paddingRight: morph.sectionPadX,
  };

  const shellStyle: CSSProperties = {
    width: "100%",
    maxWidth: morph.maxWidthPx,
    marginInline: "auto",
    borderRadius: `${morph.radiusPx}px`,
    boxShadow:
      morph.progress > 0.15
        ? `0 ${12 + morph.progress * 16}px ${48 + morph.progress * 32}px rgba(27, 40, 56, ${0.08 + morph.progress * 0.12})`
        : "0 24px 64px rgba(27, 40, 56, 0.14)",
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-spacing transition-[padding] duration-100"
      style={sectionStyle}
    >
      <div
        className={`cta-morph-shell relative mx-auto overflow-hidden bg-rule-30 will-change-[max-width,border-radius] ${
          isCompact ? "cta-morph-shell--compact" : "cta-morph-shell--expanded"
        }`}
        style={shellStyle}
      >
        <LabGrid variant="dark" />

        {/* <ParallaxLayer
          speed={0.45}
          maxOffset={45}
          className="pointer-events-none absolute -right-6 top-1/2 z-[2] hidden -translate-y-1/2 md:block"
        >
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-canvas/10 text-brand-light ring-1 ring-canvas/15 backdrop-blur-md">
            <LabIcon name="flask" className="h-12 w-12" />
          </div>
        </ParallaxLayer> */}

        <div className="relative px-8 py-12 md:px-16 md:py-14 lg:px-24 lg:py-16">
          <AOS animation="fade-right" delay={0}>
            <div className="accent-bar mb-8" />
          </AOS>

          <AOS animation="fade-up" delay={80}>
            <p className="label-premium !text-brand-light">{cta.label}</p>
          </AOS>

          <AOS animation="fade-up" delay={160}>
            <h2 className="heading-display mt-6 max-w-2xl text-balance text-3xl text-canvas md:text-4xl lg:text-[2.75rem]">
              {cta.title}
            </h2>
          </AOS>

          <AOS animation="fade-up" delay={240}>
            <p className="body-premium mt-7 max-w-xl !text-canvas/75 md:text-[17px]">
              {cta.description}
            </p>
          </AOS>

          <AOS animation="fade-up" delay={300}>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:max-w-xl">
              {cta.contacts.map((c) => (
                <div
                  key={c.label}
                  className="rounded-2xl border border-canvas/12 bg-canvas/5 px-5 py-4 backdrop-blur-sm"
                >
                  <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-canvas/45">
                    {c.label}
                  </p>
                  {c.label === "General" ? (
                    <a
                      href={`mailto:${site.email}`}
                      className="mt-2 inline-block font-sans text-[14px] font-medium text-canvas/90 transition-colors hover:text-brand-light"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="mt-2 font-sans text-[14px] font-medium text-canvas/90">
                      {c.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </AOS>

          <AOS animation="fade-up" delay={380}>
            <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
              <Link
                href="#testing"
                className="btn-accent inline-flex items-center justify-center px-10 py-4 font-display text-[11px] font-semibold uppercase tracking-[0.14em]"
              >
                {cta.button}
              </Link>
              <p className="rounded-full border border-canvas/15 bg-canvas/8 px-5 py-2 font-sans text-[12px] font-medium text-canvas/55">
                {cta.note}
              </p>
            </div>
          </AOS>
        </div>
      </div>
    </section>
  );
}

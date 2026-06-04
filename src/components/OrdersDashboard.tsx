"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ordersDashboardFeatures,
  ordersDashboardSection,
} from "@/lib/content";
import { AOS } from "@/components/ui/AOS";
import { LabGrid } from "@/components/ui/LabGrid";
import { LabIcon } from "@/components/ui/LabIcon";
import { SectionLabel } from "@/components/ui/SectionLabel";

const MOCK_ORDERS = [
  {
    id: "ORD-2841",
    compounds: 2,
    tests: 3,
    complete: 2,
    passed: 2,
    failed: 0,
    status: "In testing",
    analyses: [
      { name: "Purity & Quantity", method: "HPLC", result: "98.2%", coa: true },
      { name: "Sterility", method: "USP 71", result: "Pass", coa: true },
      { name: "Endotoxins", method: "LAL", result: "Pending", coa: false },
    ],
  },
  {
    id: "ORD-2790",
    compounds: 1,
    tests: 2,
    complete: 2,
    passed: 2,
    failed: 0,
    status: "Complete",
    analyses: [
      { name: "Purity & Quantity", method: "HPLC", result: "99.1%", coa: true },
      { name: "Endotoxins", method: "LAL", result: "<0.05 EU/mg", coa: true },
    ],
  },
] as const;

export function OrdersDashboard() {
  const [expanded, setExpanded] = useState<string | null>(MOCK_ORDERS[0].id);

  return (
    <section
      id="orders"
      className="lab-section section-padding section-spacing relative overflow-hidden border-t border-line-soft bg-rule-60-alt"
    >
      <LabGrid />

      <div className="section-max relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <SectionLabel delay={0}>{ordersDashboardSection.label}</SectionLabel>

            <AOS animation="fade-up" delay={100}>
              <h2 className="heading-section mt-7 text-balance text-3xl text-ink md:text-4xl">
                {ordersDashboardSection.title}
              </h2>
            </AOS>

            <AOS animation="fade-up" delay={180}>
              <p className="body-premium mt-7">
                {ordersDashboardSection.description}
              </p>
            </AOS>

            <ul className="mt-10 space-y-5">
              {ordersDashboardFeatures.map((item, index) => (
                <AOS key={item.title} animation="fade-left" delay={240 + index * 70}>
                  <li className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-glow text-brand-deep ring-1 ring-brand-soft">
                      <LabIcon name={item.icon} className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-medium text-ink">
                        {item.title}
                      </h3>
                      <p className="body-premium mt-1 text-[13px]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                </AOS>
              ))}
            </ul>
          </div>

          <AOS animation="fade-up" delay={200} className="lg:col-span-8">
            <div className="lab-specimen-card overflow-hidden p-0">
              <div className="flex items-center justify-between border-b border-line-soft bg-pearl/80 px-6 py-4 md:px-8">
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-ink-faint">
                  Dashboard preview
                </p>
                <Link
                  href="#account"
                  className="font-sans text-[12px] font-medium text-brand-deep hover:underline"
                >
                  Sign in to view live data →
                </Link>
              </div>

              <ul className="divide-y divide-line-soft">
                {MOCK_ORDERS.map((order) => {
                  const isOpen = expanded === order.id;
                  return (
                    <li key={order.id}>
                      <button
                        type="button"
                        className="flex w-full flex-col gap-3 px-6 py-5 text-left transition-colors hover:bg-brand-glow/30 md:flex-row md:items-center md:justify-between md:px-8"
                        onClick={() =>
                          setExpanded(isOpen ? null : order.id)
                        }
                        aria-expanded={isOpen}
                      >
                        <div>
                          <p className="font-mono text-[12px] font-medium text-brand-deep">
                            {order.id}
                          </p>
                          <p className="mt-1 font-sans text-[13px] text-ink-muted">
                            {order.compounds} compound
                            {order.compounds > 1 ? "s" : ""} · {order.tests}{" "}
                            tests · {order.complete}/{order.tests} complete
                          </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="rounded-full bg-brand-glow px-3 py-1 font-sans text-[11px] font-medium uppercase tracking-[0.1em] text-brand-deep">
                            {order.status}
                          </span>
                          <span className="font-sans text-[12px] text-ink-faint">
                            {order.passed} passed · {order.failed} failed
                          </span>
                          <span
                            className="font-sans text-[12px] text-brand-deep"
                            aria-hidden
                          >
                            {isOpen ? "▲" : "▼"}
                          </span>
                        </div>
                      </button>

                      {isOpen && (
                        <ul className="border-t border-line-soft bg-canvas/50 px-6 py-4 md:px-8">
                          {order.analyses.map((a) => (
                            <li
                              key={a.name}
                              className="flex flex-col gap-2 border-b border-line-soft/60 py-4 last:border-0 sm:flex-row sm:items-center sm:justify-between"
                            >
                              <div>
                                <p className="font-display text-[15px] font-medium text-ink">
                                  {a.name}
                                </p>
                                <p className="font-sans text-[12px] text-ink-faint">
                                  {a.method} · Result: {a.result}
                                </p>
                              </div>
                              {a.coa ? (
                                <span className="inline-flex w-fit rounded-full border border-brand-soft bg-brand-glow/50 px-3 py-1 font-sans text-[11px] font-medium uppercase tracking-[0.1em] text-brand-deep">
                                  COA PDF
                                </span>
                              ) : (
                                <span className="font-sans text-[12px] text-ink-faint">
                                  Awaiting
                                </span>
                              )}
                            </li>
                          ))}
                          <li className="pt-4">
                            <button
                              type="button"
                              className="btn-ghost inline-flex px-4 py-2 font-display text-[11px] font-semibold uppercase tracking-[0.12em]"
                            >
                              Reorder / add tests
                            </button>
                          </li>
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </AOS>
        </div>
      </div>
    </section>
  );
}

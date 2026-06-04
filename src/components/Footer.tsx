import Link from "next/link";
import { footer, navLinks, site } from "@/lib/content";

const adminMailto = `mailto:${site.email}`;
import { AOS } from "@/components/ui/AOS";
import { JcdLogo } from "@/components/ui/JcdLogo";

export function Footer() {
  return (
    <footer className="lab-footer mx-4 mb-6 overflow-hidden rounded-[2rem] border border-ink/10 bg-rule-30 md:mx-6 md:mb-8 md:rounded-[2.5rem]">
      <div className="section-padding section-spacing section-max">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between">
          <AOS animation="fade-up" delay={0}>
            <div className="max-w-sm">
              <JcdLogo variant="onDark" className="md:h-11" />
              <p className="mt-4 font-sans text-[14px] leading-relaxed text-canvas/55">
                {site.tagline}
              </p>
              <p className="mt-3 font-sans text-[12px] text-canvas/40">
                {footer.address}
              </p>
              <a
                href={adminMailto}
                className="mt-2 inline-block font-sans text-[12px] text-brand-light/90 transition-colors hover:text-canvas"
              >
                {site.email}
              </a>
              <p className="mt-2 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-brand-light/80">
                {footer.accreditation}
              </p>
            </div>
          </AOS>

          <AOS animation="fade-up" delay={100}>
            <nav
              aria-label="Footer"
              className="flex flex-col items-start"
            >
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-canvas/40">
                Navigate
              </p>
              <ul className="mt-4 flex list-none flex-col gap-3 p-0 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
                {navLinks.map((link) => (
                  <li key={link.href} className="leading-none">
                    <Link
                      href={link.href}
                      className="inline-block font-sans text-[13px] font-medium leading-none text-canvas/60 transition-colors duration-300 hover:text-brand-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </AOS>
        </div>

        <AOS animation="fade" delay={200}>
          <div className="mt-14 flex flex-col gap-4 border-t border-canvas/10 pt-10 md:flex-row md:items-center md:justify-between">
            <p className="font-sans text-[12px] text-canvas/40">
              {footer.copyright}
            </p>
            <ul className="flex gap-6">
              {footer.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="rounded-full px-2 py-1 font-sans text-[12px] text-canvas/40 transition-colors hover:text-brand-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </AOS>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { JcdLogo } from "@/components/ui/JcdLogo";
import { navLinks, site } from "@/lib/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Outside header: backdrop-blur on header would clip fixed children to bar height */}
      <div
        className={`mobile-nav-overlay fixed inset-0 z-[45] bg-canvas transition-opacity duration-500 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className="mobile-nav-list flex min-h-dvh flex-col items-center justify-center gap-8 px-6 pb-10 pt-[5.5rem]">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              className="opacity-0"
              style={{
                animation: menuOpen
                  ? `hero-fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${i * 80 + 100}ms forwards`
                  : "none",
              }}
            >
              <Link
                href={link.href}
                className="font-display text-3xl font-light tracking-tight text-ink"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li
            className="opacity-0"
            style={{
              animation: menuOpen
                ? `hero-fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${navLinks.length * 80 + 100}ms forwards`
                : "none",
            }}
          >
            <Link
              href="#account"
              className="btn-accent mt-4 inline-flex px-9 py-4 font-display text-[11px] font-semibold uppercase tracking-[0.14em]"
              onClick={() => setMenuOpen(false)}
            >
              Account
            </Link>
          </li>
        </ul>
      </div>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          menuOpen
            ? "border-b border-line-soft/80 bg-canvas shadow-[0_8px_40px_rgba(27,40,56,0.07)]"
            : scrolled
              ? "border-b border-line-soft/80 bg-canvas/90 shadow-[0_8px_40px_rgba(27,40,56,0.07)] backdrop-blur-xl"
              : "border-b border-transparent bg-transparent"
        }`}
      >
      <nav className="navbar-inner section-padding section-max flex min-h-[5.25rem] items-center justify-between py-3.5 md:min-h-[5.75rem] md:py-4">
        <Link
          href="/"
          className="navbar-brand group flex shrink-0 flex-col justify-center gap-1.5 py-1 transition-opacity hover:opacity-85"
        >
          <JcdLogo
            variant={scrolled || menuOpen ? "onLight" : "onDark"}
            priority
            className="mt-0.5 block h-8 w-auto md:mt-1 md:h-9"
          />
          <span
            className={`font-sans text-[10px] font-medium uppercase tracking-[0.2em] transition-colors duration-500 ${
              scrolled || menuOpen ? "text-ink-faint" : "text-canvas/65"
            }`}
          >
            {site.location}
          </span>
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`rounded-full px-1 font-sans text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                  scrolled
                    ? "text-ink-muted hover:text-brand-deep"
                    : "text-canvas/88 hover:text-canvas"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#account"
              className={`inline-flex items-center px-6 py-2.5 font-display text-[11px] font-semibold uppercase tracking-[0.12em] ${
                scrolled ? "btn-accent" : "btn-outline-light"
              }`}
            >
              Account
            </Link>
          </li>
        </ul>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className={`menu-toggle relative z-10 flex h-11 w-11 items-center justify-center rounded-full transition-colors md:hidden ${
            scrolled || menuOpen
              ? "bg-pearl text-ink"
              : "bg-canvas/15 text-canvas backdrop-blur-sm"
          }`}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span
            aria-hidden
            className={`menu-toggle__bar absolute left-1/2 block h-[2px] w-5 -translate-x-1/2 rounded-full bg-current transition-all duration-300 ease-out ${
              menuOpen
                ? "translate-y-0 rotate-45"
                : "-translate-y-[7px] rotate-0"
            }`}
          />
          <span
            aria-hidden
            className={`menu-toggle__bar absolute left-1/2 block h-[2px] w-5 -translate-x-1/2 rounded-full bg-current transition-all duration-300 ease-out ${
              menuOpen
                ? "translate-y-0 scale-x-0 opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          />
          <span
            aria-hidden
            className={`menu-toggle__bar absolute left-1/2 block h-[2px] w-5 -translate-x-1/2 rounded-full bg-current transition-all duration-300 ease-out ${
              menuOpen
                ? "translate-y-0 -rotate-45"
                : "translate-y-[7px] rotate-0"
            }`}
          />
        </button>
      </nav>
    </header>
    </>
  );
}

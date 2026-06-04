"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "border-b border-line-soft/80 bg-canvas/90 shadow-[0_8px_40px_rgba(27,40,56,0.07)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="section-padding section-max flex h-[76px] items-center justify-between md:h-[84px]">
        <Link
          href="/"
          className="group flex flex-col gap-0.5 transition-opacity hover:opacity-85"
        >
          <span
            className={`font-display text-[1.15rem] font-semibold tracking-tight transition-colors duration-500 md:text-[1.3rem] ${
              scrolled || menuOpen ? "text-ink" : "text-canvas"
            }`}
          >
            {site.name}
          </span>
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
          className={`relative z-10 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full transition-colors md:hidden ${
            scrolled || menuOpen
              ? "bg-pearl text-ink"
              : "bg-canvas/15 text-canvas backdrop-blur-sm"
          }`}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span
            className={`block h-px w-5 bg-current transition-transform duration-300 ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-current transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-current transition-transform duration-300 ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 rounded-none bg-canvas transition-opacity duration-500 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className="flex h-full flex-col items-center justify-center gap-8">
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
          <li>
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
    </header>
  );
}

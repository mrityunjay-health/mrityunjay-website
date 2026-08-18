"use client";

import Link from "next/link";
import { useEffect, useState, type ReactElement } from "react";

export function Nav(): ReactElement {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-clinical-white/90 backdrop-blur-md shadow-double-bezel border-b border-data-node/30"
            : "bg-clinical-white/70 backdrop-blur-sm border-b border-data-node/10"
        }`}
      >
        <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-gutter flex justify-between items-center h-20">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="group flex items-center gap-2.5 font-headline-md text-2xl md:text-headline-md text-primary tracking-tighter"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-primary group-hover:scale-125 transition-transform" />
            <span>Mritunjay</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 lg:gap-10 items-center">
            <Link
              className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors relative py-1"
              href="/#intelligence"
            >
              The Intelligence
            </Link>
            <Link
              className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors relative py-1"
              href="/#how-it-works"
            >
              How It Works
            </Link>
            <Link
              className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors relative py-1"
              href="/#outcomes"
            >
              Outcomes
            </Link>
            <Link
              className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors relative py-1"
              href="/#science"
            >
              Clinical Ledger
            </Link>

            {/* Button-in-Button CTA Architecture */}
            <Link
              href="/waitlist"
              className="group inline-flex items-center gap-3 bg-primary text-clinical-white pl-6 pr-3.5 py-2.5 font-label-caps text-xs tracking-widest hover:bg-primary/95 transition-all rounded-full shadow-sm active:scale-[0.98]"
            >
              <span>2026 FLAGSHIP ACCESS</span>
              <span className="w-6 h-6 rounded-full bg-clinical-white/15 group-hover:bg-clinical-white/25 flex items-center justify-center transition-colors">
                <span className="material-symbols-outlined text-[14px] text-clinical-white group-hover:translate-x-0.5 transition-transform">
                  arrow_forward
                </span>
              </span>
            </Link>
          </nav>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="md:hidden text-primary p-2 focus:outline-none focus:ring-1 focus:ring-primary rounded-lg"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-40 md:hidden bg-primary/20 backdrop-blur-sm pt-20 animate-fade-in-up"
          onClick={closeMobileMenu}
        >
          <div
            className="bg-clinical-white border-b border-data-node/30 px-6 py-8 shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col space-y-4">
              <Link
                href="/#intelligence"
                onClick={closeMobileMenu}
                className="font-label-caps text-sm text-primary py-2.5 border-b border-data-node/10 flex justify-between items-center"
              >
                <span>The Intelligence</span>
                <span className="material-symbols-outlined text-sm text-on-surface-variant">arrow_forward</span>
              </Link>
              <Link
                href="/#how-it-works"
                onClick={closeMobileMenu}
                className="font-label-caps text-sm text-primary py-2.5 border-b border-data-node/10 flex justify-between items-center"
              >
                <span>How It Works</span>
                <span className="material-symbols-outlined text-sm text-on-surface-variant">arrow_forward</span>
              </Link>
              <Link
                href="/#outcomes"
                onClick={closeMobileMenu}
                className="font-label-caps text-sm text-primary py-2.5 border-b border-data-node/10 flex justify-between items-center"
              >
                <span>Outcomes</span>
                <span className="material-symbols-outlined text-sm text-on-surface-variant">arrow_forward</span>
              </Link>
              <Link
                href="/#science"
                onClick={closeMobileMenu}
                className="font-label-caps text-sm text-primary py-2.5 border-b border-data-node/10 flex justify-between items-center"
              >
                <span>Clinical Ledger</span>
                <span className="material-symbols-outlined text-sm text-on-surface-variant">arrow_forward</span>
              </Link>

              <Link
                href="/waitlist"
                onClick={closeMobileMenu}
                className="group flex items-center justify-between bg-primary text-clinical-white px-6 py-4 font-label-caps text-xs tracking-widest rounded-full shadow-sm mt-4 active:scale-[0.98]"
              >
                <span>JOIN 2026 FLAGSHIP WAITING LIST</span>
                <span className="w-6 h-6 rounded-full bg-clinical-white/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

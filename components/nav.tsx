"use client";

import Link from "next/link";
import { useState, type ReactElement } from "react";

export function Nav(): ReactElement {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-clinical-white/90 backdrop-blur-md z-50 border-b border-data-node/10">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-gutter flex justify-between items-center h-20">
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="font-headline-md text-2xl md:text-headline-md text-primary tracking-tighter"
        >
          Mritunjay
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 items-center">
          <Link
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors"
            href="/#intelligence"
          >
            The Intelligence
          </Link>
          <Link
            className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors"
            href="/#outcomes"
          >
            Outcomes
          </Link>
          <Link
            href="/waitlist"
            className="bg-primary text-clinical-white px-7 py-3.5 font-label-caps text-label-caps tracking-widest hover:bg-opacity-90 transition-all rounded"
          >
            2026 FLAGSHIP ACCESS
          </Link>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={toggleMobileMenu}
          className="md:hidden text-primary p-2 focus:outline-none focus:ring-1 focus:ring-primary rounded"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <span className="material-symbols-outlined text-2xl">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-clinical-white border-b border-data-node/20 px-6 py-6 space-y-6 animate-fade-in-up">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/#intelligence"
              onClick={closeMobileMenu}
              className="font-label-caps text-sm text-primary py-2 border-b border-data-node/10"
            >
              The Intelligence
            </Link>
            <Link
              href="/#outcomes"
              onClick={closeMobileMenu}
              className="font-label-caps text-sm text-primary py-2 border-b border-data-node/10"
            >
              Outcomes
            </Link>
            <Link
              href="/waitlist"
              onClick={closeMobileMenu}
              className="bg-primary text-clinical-white text-center px-6 py-4 font-label-caps text-xs tracking-widest rounded mt-4"
            >
              2026 FLAGSHIP ACCESS
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

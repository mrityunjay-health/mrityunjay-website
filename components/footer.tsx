import type { ReactElement } from "react";

export function Footer(): ReactElement {
  return (
    <footer className="bg-surface-container-low py-10 sm:py-20 border-t border-data-node/20">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-gutter flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        <div className="font-headline-md text-2xl md:text-headline-md text-primary">
          Mritunjay
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 md:gap-12 items-center text-center">
          {["CLINICAL METHODOLOGY", "DATA SOVEREIGNTY", "2026 ROADMAP"].map((label) => (
            <a
              key={label}
              href="#"
              className="font-label-caps text-[10px] sm:text-[11px] text-on-surface-variant hover:text-primary transition-all"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="font-label-caps text-[9px] sm:text-[10px] text-secondary text-center md:text-right">
          © 2026 MRITUNJAY. ADVANCED HEALTHCARE INTELLIGENCE. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}

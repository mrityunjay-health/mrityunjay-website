import Link from "next/link";
import type { ReactElement } from "react";

export function Footer(): ReactElement {
  return (
    <footer className="bg-surface-container-low py-12 sm:py-16 border-t border-data-node/30">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-gutter space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-headline-md text-2xl md:text-headline-md text-primary tracking-tighter"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-primary" />
            <span>Mritunjay</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-10 items-center font-mono text-xs text-on-surface-variant">
            <Link href="/#intelligence" className="hover:text-primary transition-colors">
              INTELLIGENCE MATRIX
            </Link>
            <Link href="/#outcomes" className="hover:text-primary transition-colors">
              CLINICAL SYNTHESIS
            </Link>
            <Link href="/#science" className="hover:text-primary transition-colors">
              MEDICAL LEDGER
            </Link>
            <Link href="/waitlist" className="hover:text-primary transition-colors font-semibold text-primary">
              2026 ACCESS
            </Link>
          </div>

          {/* Live Status Indicator */}
          <div className="flex items-center gap-2 font-mono text-[11px] text-green-700 bg-green-500/10 px-3.5 py-1.5 rounded-full border border-green-500/20">
            <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
            <span>CLINICAL ENCLAVE ONLINE</span>
          </div>
        </div>

        {/* Trust Badges & Copyright */}
        <div className="pt-8 border-t border-data-node/20 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[10px] text-secondary text-center sm:text-left">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 sm:gap-4">
            <span>HIPAA COMPLIANT</span>
            <span>•</span>
            <span>ZERO-TRUST DATA SOVEREIGNTY</span>
            <span>•</span>
            <span>256-BIT ENCRYPTION</span>
          </div>
          <div>
            © 2026 MRITUNJAY HEALTHCARE INTELLIGENCE. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}

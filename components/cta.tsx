import Link from "next/link";
import type { ReactElement } from "react";
import { Reveal } from "./intersection-reveal";

export function Cta(): ReactElement {
  return (
    <section
      id="waitlist"
      className="py-[25px] sm:py-10 bg-primary text-clinical-white px-4 sm:px-6 md:px-gutter text-center relative overflow-hidden"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(165,216,255,0.08)_0,transparent_70%)] pointer-events-none" />

      <Reveal className="max-w-3xl mx-auto space-y-6 sm:space-y-8 relative z-10">
        <span className="font-mono text-xs text-memory-glow tracking-[0.25em] block uppercase font-semibold">
          2026 CLINICAL ACCESS INITIATIVE
        </span>
        <h2 className="font-headline-lg text-3xl sm:text-5xl lg:text-headline-lg tracking-tight">
          Ensure your medical story begins with understanding.
        </h2>
        <p className="font-body-lg text-base sm:text-body-lg opacity-85 max-w-xl mx-auto leading-relaxed">
          We are currently onboarding initial clinical partners, specialists, and patients for the 2026 flagship release.
        </p>

        {/* Button-in-Button CTA Architecture */}
        <div className="pt-2 sm:pt-4 flex justify-center">
          <Link
            href="/waitlist"
            className="group inline-flex items-center gap-4 bg-clinical-white text-primary pl-8 pr-4 py-4 sm:py-5 font-label-caps text-xs sm:text-label-caps tracking-widest hover:bg-surface-bright transition-all rounded-full shadow-2xl active:scale-[0.98]"
          >
            <span>JOIN 2026 FLAGSHIP WAITING LIST</span>
            <span className="w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
              <span className="material-symbols-outlined text-base text-primary group-hover:translate-x-0.5 transition-transform">
                arrow_forward
              </span>
            </span>
          </Link>
        </div>

        {/* Upfront Zero-Trust Privacy Reassurances (Principle 2 & Principle 15) */}
        <div className="pt-4 flex flex-wrap justify-center items-center gap-4 sm:gap-6 font-mono text-[11px] text-clinical-white/60">
          <span>• No records requested during registration</span>
          <span>• Zero third-party data sharing</span>
          <span>• End-to-end encrypted</span>
        </div>
      </Reveal>
    </section>
  );
}

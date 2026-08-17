import Link from "next/link";
import type { ReactElement } from "react";
import { Reveal } from "./intersection-reveal";

export function Cta(): ReactElement {
  return (
    <section
      id="waitlist"
      className="py-16 sm:py-24 lg:py-section-gap-lg bg-primary text-clinical-white px-4 sm:px-6 md:px-gutter text-center relative overflow-hidden"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(165,216,255,0.08)_0,transparent_70%)] pointer-events-none" />

      <Reveal className="max-w-3xl mx-auto space-y-6 sm:space-y-8 relative z-10">
        <span className="font-mono text-xs text-memory-glow tracking-[0.25em] block uppercase font-semibold">
          STRICTLY LIMITED RELEASE // EST. 2026
        </span>
        <h2 className="font-headline-lg text-3xl sm:text-5xl lg:text-headline-lg tracking-tight">
          Ensure your medical story begins with understanding.
        </h2>
        <p className="font-body-lg text-base sm:text-body-lg opacity-80 max-w-xl mx-auto leading-relaxed">
          We are currently onboarding initial clinical partners, specialists, and patients for the 2026 flagship release.
        </p>

        {/* Button-in-Button CTA Architecture */}
        <div className="pt-4 sm:pt-6 flex justify-center">
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
      </Reveal>
    </section>
  );
}

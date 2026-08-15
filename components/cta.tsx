import Link from "next/link";
import type { ReactElement } from "react";
import { Reveal } from "./intersection-reveal";

export function Cta(): ReactElement {
  return (
    <section
      id="waitlist"
      className="py-16 sm:py-24 lg:py-section-gap-lg bg-primary text-clinical-white px-4 sm:px-6 md:px-gutter text-center relative overflow-hidden"
    >
      <Reveal className="max-w-3xl mx-auto space-y-6 sm:space-y-10 relative z-10">
        <span className="font-label-caps text-[10px] sm:text-label-caps text-memory-glow tracking-[0.2em] sm:tracking-[0.4em] block uppercase">
          STRICTLY LIMITED RELEASE // EST. 2026
        </span>
        <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-headline-lg">Secure your history.</h2>
        <p className="font-body-lg text-base sm:text-body-lg opacity-70">
          We are currently onboarding initial clinical partners and patients for the 2026 flagship
          launch. Ensure your healthcare narrative starts with understanding.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 sm:pt-8 w-full max-w-md sm:max-w-none mx-auto">
          <Link
            href="/waitlist"
            className="bg-clinical-white text-primary px-6 sm:px-12 py-4 sm:py-5 font-label-caps text-xs sm:text-label-caps tracking-widest hover:bg-surface-bright hover:scale-[1.02] transition-all w-full sm:w-auto rounded text-center"
          >
            JOIN 2026 WAITING LIST
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

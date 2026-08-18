import type { ReactElement } from "react";
import { Reveal } from "./intersection-reveal";

const EPISODIC_PATH: ReadonlyArray<string> = [
  "Book an appointment",
  "Repeat your story",
  "Receive a prescription",
  "Go home, forgotten",
];

const CONTINUOUS_PATH: ReadonlyArray<string> = [
  "Continuous health memory",
  "AI understands your context",
  "Clinical reasoning surfaces",
  "Doctor reviews and decides",
  "Recovery is guided, not abandoned",
  "Long-term health intelligence grows",
];

export function Differentiator(): ReactElement {
  return (
    <section
      id="differentiator"
      className="py-16 sm:py-24 lg:py-section-gap-lg px-4 sm:px-6 md:px-gutter bg-surface-container-low"
    >
      <div className="max-w-container-max mx-auto">
        <Reveal className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="font-mono text-xs sm:text-label-caps text-primary tracking-[0.25em] block mb-3 sm:mb-4 uppercase font-semibold">
            WHAT MAKES US DIFFERENT
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-headline-lg text-primary leading-tight">
            From episodic visits to a lifelong memory.
          </h2>
          <p className="font-body-lg text-base sm:text-body-lg text-secondary max-w-2xl mx-auto mt-4 sm:mt-6 leading-relaxed">
            Most healthcare treats a visit as the end of the story. Mritunjay treats every
            visit as the next chapter in one continuous narrative.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch max-w-5xl mx-auto">
          <Reveal className="h-full">
            <div className="h-full bg-clinical-white border border-data-node/30 rounded-2xl shadow-double-bezel p-6 sm:p-8 flex flex-col">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-data-node/20">
                <span className="font-mono text-xs font-semibold tracking-widest text-secondary uppercase">
                  MOST HEALTHCARE
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-data-node" aria-hidden="true" />
              </div>
              <ol className="space-y-3 flex-1">
                {EPISODIC_PATH.map((step, i) => (
                  <li
                    key={step}
                    className="flex items-center gap-3 font-body-md text-sm text-on-surface-variant"
                  >
                    <span className="w-7 h-7 rounded-full bg-surface-container-low border border-data-node/40 text-secondary flex items-center justify-center font-mono text-xs shrink-0">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-6 pt-5 border-t border-data-node/20 flex items-center justify-between font-mono text-[10px] tracking-widest text-secondary uppercase">
                <span>The story ends</span>
                <span className="material-symbols-outlined text-base text-data-node">close</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="h-full">
            <div className="h-full bg-primary border border-memory-glow/20 rounded-2xl shadow-double-bezel-dark p-6 sm:p-8 flex flex-col text-clinical-white">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-clinical-white/15">
                <span className="font-mono text-xs font-semibold tracking-widest text-memory-glow uppercase">
                  MRITUNJAY
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-memory-glow animate-pulse-subtle" aria-hidden="true" />
              </div>
              <ol className="space-y-3 flex-1">
                {CONTINUOUS_PATH.map((step, i) => (
                  <li
                    key={step}
                    className="flex items-center gap-3 font-body-md text-sm text-clinical-white/90"
                  >
                    <span className="w-7 h-7 rounded-full bg-clinical-white/10 border border-clinical-white/25 text-memory-glow flex items-center justify-center font-mono text-xs shrink-0">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-6 pt-5 border-t border-clinical-white/15 flex items-center justify-between font-mono text-[10px] tracking-widest text-memory-glow uppercase">
                <span>The story continues</span>
                <span className="material-symbols-outlined text-base">trending_up</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

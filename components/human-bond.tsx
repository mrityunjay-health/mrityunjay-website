import type { ReactElement } from "react";
import { Reveal } from "./intersection-reveal";
import { HumanBondPortrait } from "./human-bond-portrait";

export function HumanBond(): ReactElement {
  return (
    <section className="py-[25px] sm:py-10 px-4 sm:px-6 md:px-gutter relative bg-clinical-white">
      <div className="max-w-container-max mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        {/* Double-Bezel Enclosed Editorial Photography with Graceful Fallback */}
        <Reveal className="w-full lg:w-1/2">
          <div className="p-2.5 sm:p-3.5 bg-surface-container-low border border-data-node/30 rounded-3xl shadow-double-bezel">
            <div className="aspect-[4/3] sm:aspect-[4/5] relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary-container via-surface-container to-primary/20 flex items-center justify-center">
              {/* Editorial frame: the primary composition. The external
                  portrait sits on top of this when it loads; if it ever
                  fails, the frame is the section. */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col items-center justify-center text-primary pointer-events-none">
                <span className="absolute top-4 left-4 font-mono text-[10px] tracking-widest uppercase text-primary/60">
                  Editorial Frame
                </span>
                <span className="absolute top-4 right-4 font-mono text-[10px] tracking-widest uppercase text-primary/60">
                  Consultation
                </span>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-clinical-white border border-data-node/40 flex items-center justify-center shadow-inner">
                    <span className="w-4 h-4 rounded-full bg-primary" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-primary/70 font-semibold">
                    Mritunjay
                  </span>
                  <span className="material-symbols-outlined text-3xl text-primary/30" aria-hidden="true">
                    clinical_notes
                  </span>
                </div>
                <span className="absolute bottom-4 left-4 font-mono text-[10px] tracking-widest uppercase text-primary/60">
                  Physician-Patient
                </span>
                <span className="absolute bottom-4 right-4 font-mono text-[10px] tracking-widest uppercase text-primary/60">
                  Your Lifelong Memory
                </span>
              </div>
              <div
                className="absolute inset-3 border border-data-node/30 rounded-xl pointer-events-none"
                aria-hidden="true"
              />
              <HumanBondPortrait />
              <div className="absolute inset-0 bg-primary/5 z-20" aria-hidden="true" />
            </div>
            <div className="pt-2.5 px-2 flex justify-between items-center font-mono text-[10px] text-secondary">
              <span>PHYSICIAN-PATIENT ENCOUNTER</span>
              <span>CARDIOLOGY CLINIC // 2026</span>
            </div>
          </div>
        </Reveal>

        {/* Narrative Column (Principle 1: Design for Humans, Not Screens & Principle 10: Technology Must Become Invisible) */}
        <Reveal delay={0.2} className="w-full lg:w-1/2 space-y-6 sm:space-y-10">
          <div>
            <span className="font-mono text-xs sm:text-label-caps text-primary tracking-[0.25em] uppercase font-semibold block mb-3">
              THE HUMAN EXPERIENCE
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-headline-lg text-primary leading-[1.1]">
              The doctor-patient bond, fully restored.
            </h2>
          </div>

          {/* Dialogue Excerpt */}
          <div className="bg-surface-container-low p-5 sm:p-6 rounded-2xl border border-data-node/30 space-y-2">
            <p className="font-quote text-base sm:text-lg text-primary italic leading-relaxed">
              &ldquo;Before Mritunjay, my doctor spent eleven minutes staring at the computer screen.
              Now, my doctor spends fifteen minutes looking at me.&rdquo;
            </p>
            <span className="font-mono text-xs text-secondary block pt-1">
              Elena R. • Cardiology Patient Encounter
            </span>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {[
              {
                title: "Invisible Technology",
                body: "Mritunjay is designed to disappear. By organizing the clerical complexity of healthcare behind the scenes, we allow the human connection between doctor and patient to return to the center of every consultation.",
              },
              {
                title: "Continuous Trust",
                body: "When you experience healthcare with a persistent intelligence layer, navigating fragmented records feels like practicing in the dark. Mritunjay is not a feature; it is the permanent memory of modern care.",
              },
            ].map((item) => (
              <div key={item.title} className="border-t border-data-node/20 pt-5 sm:pt-7">
                <h4 className="font-headline-md text-xl sm:text-[22px] text-primary mb-2">
                  {item.title}
                </h4>
                <p className="font-body-md text-base sm:text-body-lg text-on-surface-variant leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

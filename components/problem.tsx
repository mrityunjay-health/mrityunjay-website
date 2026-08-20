import type { ReactElement } from "react";
import { Reveal } from "./intersection-reveal";

interface DiagnosticPillar {
  readonly id: string;
  readonly code: string;
  readonly icon: string;
  readonly label: string;
  readonly heading: string;
  readonly points: ReadonlyArray<string>;
}

const DIAGNOSTIC_PILLARS: ReadonlyArray<DiagnosticPillar> = [
  {
    id: "patients",
    code: "ERR_NARRATIVE_LOST",
    icon: "person",
    label: "PATIENTS",
    heading: "Their story resets with every visit.",
    points: [
      "Repeat their history to a new doctor each time.",
      "Forget medicines, lose reports, and piece memory together.",
      "Receive almost no follow-up after the prescription.",
    ],
  },
  {
    id: "doctors",
    code: "ERR_ZERO_CONTEXT",
    icon: "stethoscope",
    label: "DOCTORS",
    heading: "They must reconstruct what was already known.",
    points: [
      "Start every consultation from a blank page.",
      "Read hundreds of pages by hand to find a single signal.",
      "Face a documentation burden that steals time from care.",
    ],
  },
  {
    id: "hospitals",
    code: "ERR_ISOLATED_EHR",
    icon: "apartment",
    label: "HEALTH SYSTEMS",
    heading: "Systems that do not share a memory.",
    points: [
      "Fragmented records that do not travel with the patient.",
      "Little interoperability between primary care and specialists.",
      "Duplicated work across departments and visits.",
    ],
  },
];

export function Problem(): ReactElement {
  return (
    <section
      id="problem"
      className="py-16 sm:py-24 lg:py-section-gap-lg px-4 sm:px-6 md:px-gutter bg-clinical-white"
    >
      <div className="max-w-container-max mx-auto">
        <Reveal className="max-w-3xl mx-auto text-center mb-12 sm:mb-20">
          <span className="font-mono text-xs sm:text-label-caps text-primary tracking-[0.25em] block mb-3 sm:mb-4 uppercase font-semibold">
            WHY HEALTHCARE RESTARTS
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-headline-lg text-primary leading-tight">
            Healthcare is broken because information is broken.
          </h2>
          <p className="font-body-lg text-base sm:text-body-lg text-secondary max-w-2xl mx-auto mt-4 sm:mt-6 leading-relaxed">
            Every doctor starts from zero. Every hospital stores different records.
            Every patient repeats the same story.
          </p>
        </Reveal>

        {/* Asymmetric Diagnostic Ledger Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: The Fragmented Chain Diagnostic (5 cols) */}
          <Reveal className="lg:col-span-5 h-full">
            <div className="h-full bg-primary text-clinical-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-double-bezel-dark border border-memory-glow/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-clinical-white/15 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-urgent-red animate-pulse-subtle" />
                    <span className="font-mono text-[10px] sm:text-xs text-memory-glow uppercase tracking-[0.2em] font-semibold">
                      SYSTEMIC AUDIT
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-clinical-white/60">
                    DIAGNOSTIC LEDGER
                  </span>
                </div>

                <h3 className="font-headline-md text-2xl sm:text-3xl text-clinical-white mb-4 leading-tight">
                  The Fragmented Care Chain
                </h3>
                <p className="font-body-md text-sm sm:text-base text-clinical-white/80 mb-8 leading-relaxed">
                  When health records exist in silos, clinical context vanishes at every handoff. The patient pays in anxiety, and the clinician pays in wasted time.
                </p>

                {/* Disconnect Sequence Nodes */}
                <div className="space-y-4">
                  {[
                    { code: "ERR_NARRATIVE_LOST", title: "Patient Story Disconnect", desc: "History fails to bridge to the next provider" },
                    { code: "ERR_ZERO_CONTEXT", title: "Clinician Blank Slate", desc: "11 minutes spent reconstructing past records" },
                    { code: "ERR_ISOLATED_EHR", title: "Interoperability Breakdown", desc: "Specialist visits isolated from primary care" },
                  ].map((node, idx) => (
                    <div
                      key={node.code}
                      className="p-3.5 sm:p-4 rounded-xl bg-clinical-white/5 border border-clinical-white/10 flex items-start gap-3"
                    >
                      <span className="font-mono text-[11px] text-memory-glow shrink-0 mt-0.5 font-semibold">
                        0{idx + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h4 className="font-mono text-xs text-clinical-white font-semibold truncate">
                            {node.title}
                          </h4>
                          <span className="font-mono text-[9px] text-urgent-red bg-urgent-red/10 px-1.5 py-0.5 rounded border border-urgent-red/20 shrink-0">
                            [{node.code}]
                          </span>
                        </div>
                        <p className="font-body-md text-xs text-clinical-white/70 leading-snug">
                          {node.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-clinical-white/15 font-mono text-[10px] text-memory-glow flex items-center justify-between">
                <span>ROOT CAUSE: CLERICAL AMNESIA</span>
                <span>STATUS: ACTIVE DEFECT</span>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Stakeholder Impact Cards (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6 justify-between">
            {DIAGNOSTIC_PILLARS.map((pillar, i) => (
              <Reveal key={pillar.label} delay={i * 0.12} className="flex-1">
                <div className="h-full bg-surface-container-low border border-data-node/30 rounded-2xl shadow-double-bezel p-6 sm:p-8 flex flex-col justify-between transition-all hover:border-primary/40">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-primary text-clinical-white flex items-center justify-center shrink-0 shadow-sm">
                          <span className="material-symbols-outlined text-base">{pillar.icon}</span>
                        </div>
                        <div>
                          <span className="font-mono text-xs font-semibold tracking-widest text-primary uppercase block">
                            {pillar.label}
                          </span>
                        </div>
                      </div>
                      <span className="font-mono text-[10px] text-secondary tracking-wider">
                        [{pillar.code}]
                      </span>
                    </div>

                    <h3 className="font-headline-md text-xl text-primary mb-3 leading-snug">
                      {pillar.heading}
                    </h3>

                    <ul className="space-y-2.5">
                      {pillar.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 font-body-md text-sm text-on-surface-variant leading-relaxed"
                        >
                          <span className="material-symbols-outlined text-base text-secondary mt-0.5 shrink-0">
                            remove
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="text-center mt-12 sm:mt-20" delay={0.2}>
          <p className="font-body-lg text-base sm:text-body-lg text-primary max-w-2xl mx-auto leading-relaxed">
            Mritunjay fixes the information problem before trying to fix the medical problem.
          </p>
          <p className="font-quote text-lg sm:text-2xl text-primary mt-4 sm:mt-6">
            No patient should ever have to start from zero again.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

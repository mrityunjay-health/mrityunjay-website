import type { ReactElement } from "react";
import { Reveal } from "./intersection-reveal";
import { Premium3DCard } from "./premium-3d-card";

interface DiagnosticPillar {
  readonly id: string;
  readonly tag: string;
  readonly icon: string;
  readonly label: string;
  readonly heading: string;
  readonly text: string;
}

const DIAGNOSTIC_PILLARS: ReadonlyArray<DiagnosticPillar> = [
  {
    id: "patients",
    tag: "THE RETELLING BURDEN",
    icon: "person",
    label: "PATIENTS",
    heading: "Their story resets.",
    text: "Repeating your history to a new doctor every time. Forgetting medicines, losing reports, and piecing memory together.",
  },
  {
    id: "doctors",
    tag: "THE DOCUMENTATION BURDEN",
    icon: "stethoscope",
    label: "DOCTORS",
    heading: "They reconstruct the past.",
    text: "Starting every consultation from a blank page. Reading hundreds of pages to find a single signal.",
  },
  {
    id: "hospitals",
    tag: "THE DISCONNECTED EHR",
    icon: "apartment",
    label: "HEALTH SYSTEMS",
    heading: "They cannot share memory.",
    text: "Fragmented records that do not travel with the patient. No interoperability between primary care and specialists.",
  },
];

export function Problem(): ReactElement {
  return (
    <section
      id="problem"
      className="py-[25px] sm:py-10 px-4 sm:px-6 md:px-gutter bg-clinical-white"
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
            Every doctor starts from zero. Every hospital stores different records. Every patient repeats the same story.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column */}
          <Reveal className="lg:col-span-5 h-full">
            <Premium3DCard className="h-full" tiltAmount={4} glareOpacity={0.1}>
              <div className="h-full bg-primary text-clinical-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-double-bezel-dark border border-memory-glow/20 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-clinical-white/15 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-urgent-red animate-pulse-subtle" />
                      <span className="font-mono text-[10px] sm:text-xs text-memory-glow uppercase tracking-[0.2em] font-semibold">
                        SYSTEMIC AUDIT
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-clinical-white/60">DIAGNOSTIC LEDGER</span>
                  </div>

                  <h3 className="font-headline-md text-2xl sm:text-3xl text-clinical-white mb-4 leading-tight">
                    The Fragmented Care Chain
                  </h3>
                  <p className="font-body-md text-sm sm:text-base text-clinical-white/80 mb-8 leading-relaxed">
                    When health records exist in silos, context vanishes. The patient pays in anxiety, the clinician in wasted time.
                  </p>

                  <div className="space-y-4">
                    {[
                      { tag: "CONTEXT LOST", title: "Patient Story Disconnect" },
                      { tag: "RECONSTRUCTION", title: "Clinician Blank Slate" },
                      { tag: "FRAGMENTATION", title: "Interoperability Breakdown" },
                    ].map((node, idx) => (
                      <div
                        key={node.tag}
                        className="p-3.5 sm:p-4 rounded-xl bg-clinical-white/5 border border-clinical-white/10 flex items-start gap-3"
                      >
                        <span className="font-mono text-[11px] text-memory-glow shrink-0 mt-0.5 font-semibold">
                          0{idx + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1">
                            <h4 className="font-mono text-xs text-clinical-white font-semibold">
                              {node.title}
                            </h4>
                            <span className="font-mono text-[9px] text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-300/20 shrink-0 uppercase tracking-wider font-medium">
                              {node.tag}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-clinical-white/15 font-mono text-[10px] text-memory-glow flex flex-wrap items-center justify-between gap-2">
                  <span>ROOT CAUSE: CLERICAL AMNESIA</span>
                </div>
              </div>
            </Premium3DCard>
          </Reveal>

          {/* Right Column */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6 justify-between">
            {DIAGNOSTIC_PILLARS.map((pillar, i) => (
              <Reveal key={pillar.label} delay={i * 0.12} className="flex-1">
                <Premium3DCard className="h-full" tiltAmount={2} glareOpacity={0.05}>
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
                        <span className="font-mono text-[10px] text-secondary tracking-wider uppercase font-medium bg-clinical-white/60 px-2 py-0.5 rounded border border-data-node/30">
                          {pillar.tag}
                        </span>
                      </div>
                      <h3 className="font-headline-md text-xl text-primary mb-2 leading-snug">
                        {pillar.heading}
                      </h3>
                      <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                        {pillar.text}
                      </p>
                    </div>
                  </div>
                </Premium3DCard>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="text-center mt-12 sm:mt-20" delay={0.2}>
          <p className="font-quote text-lg sm:text-2xl text-primary">
            No patient should ever have to start from zero again.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

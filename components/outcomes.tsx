import Link from "next/link";
import type { ReactElement } from "react";
import { Reveal } from "./intersection-reveal";
import { Premium3DCard } from "./premium-3d-card";

export function Outcome01(): ReactElement {
  return (
    <section id="outcomes" className="py-[25px] sm:py-10 px-4 sm:px-6 md:px-gutter bg-surface-container-low">
      <div className="max-w-container-max mx-auto">
        <Reveal className="mb-12 sm:mb-20 text-center">
          <span className="font-mono text-xs sm:text-label-caps text-primary tracking-[0.25em] block mb-3 sm:mb-4 uppercase font-semibold">
            RECORD SYNTHESIS
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-headline-lg text-primary">
            Never lose another record.
          </h2>
          <p className="font-body-lg text-base sm:text-body-lg text-secondary max-w-2xl mx-auto mt-4 sm:mt-6 leading-relaxed">
            We ingest the raw, messy data of your life and turn it into the clean context your doctors need.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <Reveal>
              <Premium3DCard tiltAmount={4}>
                <div className="bg-clinical-white p-5 sm:p-7 border border-data-node/30 rounded-2xl shadow-double-bezel">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-data-node/20">
                    <div className="flex items-center gap-2.5 text-primary">
                      <span className="material-symbols-outlined text-lg">description</span>
                      <span className="font-mono text-xs font-semibold tracking-wider">
                        LAB_REPORT_AUG24.PDF
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-green-700 bg-green-500/10 px-2.5 py-0.5 rounded-full font-medium">
                      PARSED
                    </span>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex justify-between items-center py-1 border-b border-data-node/10">
                      <div>
                        <span className="text-primary font-medium block">Hemoglobin (HGB)</span>
                        <span className="text-[10px] text-secondary">Oxygen-carrying capacity</span>
                      </div>
                      <div className="text-right">
                        <span className="font-semibold text-primary block">14.2 g/dL</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-data-node/10">
                      <div>
                        <span className="text-primary font-medium block">eGFR Kidney Filtration</span>
                      </div>
                      <div className="text-right">
                        <span className="font-semibold text-primary block">98 mL/min</span>
                      </div>
                    </div>

                    <div className="p-3 bg-surface-container-low border border-data-node/20 rounded-xl space-y-1.5 mt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-primary font-medium">Sitting BP</span>
                        <span className="font-bold text-amber-700 font-mono text-xs">145/95 mmHg</span>
                      </div>
                      <p className="font-body-md text-[11px] text-secondary leading-snug">
                        Correlated with recent dosage change.
                      </p>
                    </div>
                  </div>
                </div>
              </Premium3DCard>
            </Reveal>

            <Reveal delay={0.2}>
              <Premium3DCard tiltAmount={3}>
                <div className="bg-clinical-white p-5 sm:p-7 border border-data-node/30 rounded-2xl shadow-double-bezel">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-mono text-xs font-semibold text-primary tracking-wider uppercase">
                      UNDERSTANDING BEFORE ACTION
                    </span>
                  </div>
                  <p className="font-body-md text-sm sm:text-base text-on-surface-variant italic leading-relaxed">
                    &ldquo;Connecting the blood pressure spike with your August medication titration.&rdquo;
                  </p>
                </div>
              </Premium3DCard>
            </Reveal>
          </div>

          <div className="hidden lg:flex lg:col-span-1 justify-center items-center">
            <svg className="w-full h-24" preserveAspectRatio="none" viewBox="0 0 100 100">
              <line className="process-line" stroke="#001736" strokeDasharray="4 4" strokeWidth="1.5" x1="0" x2="100" y1="50" y2="50" />
            </svg>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6">
            <Reveal delay={0.4} className="h-full">
              <Premium3DCard className="h-full" tiltAmount={2} glareOpacity={0.1}>
                <div className="bg-primary p-6 sm:p-8 lg:p-10 rounded-2xl shadow-double-bezel-dark text-clinical-white h-full flex flex-col justify-between border border-memory-glow/20">
                  <div>
                    <div className="flex flex-wrap justify-between items-start mb-6 sm:mb-10 gap-3">
                      <div>
                        <p className="font-mono text-[10px] sm:text-xs text-memory-glow uppercase tracking-wider mb-1">
                          PREPARED CLINICAL BRIEF
                        </p>
                        <h3 className="font-headline-md text-2xl sm:text-headline-md">Medical Synthesis</h3>
                      </div>
                      <div className="px-3 py-1 bg-clinical-white/10 border border-clinical-white/20 rounded-full text-[10px] font-mono tracking-wider">
                        HL7 VERIFIED
                      </div>
                    </div>

                    <div className="space-y-5 sm:space-y-6">
                      <div className="bg-clinical-white/5 border border-clinical-white/10 p-4 sm:p-5 rounded-xl">
                        <div className="flex items-center gap-2.5 mb-2">
                          <span className="w-2 h-2 rounded-full bg-memory-glow" />
                          <span className="font-mono text-xs font-semibold text-memory-glow uppercase tracking-wider">
                            CORRELATION
                          </span>
                        </div>
                        <p className="font-body-md text-sm sm:text-base text-clinical-white/90 leading-relaxed">
                          Recent headaches align with systolic spike following dosage adjustment. Physician is prepared to recalibrate.
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                        <div className="bg-clinical-white/5 p-3 rounded-lg border border-clinical-white/10">
                          <span className="text-clinical-white/60 block text-[10px]">BASELINE</span>
                          <span className="font-semibold text-clinical-white">122/80 mmHg</span>
                        </div>
                        <div className="bg-clinical-white/5 p-3 rounded-lg border border-clinical-white/10">
                          <span className="text-clinical-white/60 block text-[10px]">SIGNATURE</span>
                          <span className="font-semibold text-memory-glow">Lisinopril</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-clinical-white/15 flex items-center justify-between font-mono text-[10px] sm:text-xs">
                    <span className="text-clinical-white/70">READY FOR DOCTOR</span>
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-memory-glow animate-pulse" />
                      <div className="w-2 h-2 rounded-full bg-memory-glow animate-pulse [animation-delay:200ms]" />
                    </div>
                  </div>
                </div>
              </Premium3DCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Outcome02(): ReactElement {
  return (
    <section className="py-[25px] sm:py-10 px-4 sm:px-6 md:px-gutter bg-clinical-white overflow-hidden">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-center">
        <Reveal>
          <span className="font-mono text-xs sm:text-label-caps text-secondary tracking-[0.25em] block mb-3 sm:mb-4 uppercase font-semibold">
            PHYSICIAN PREPARATION
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-headline-lg text-primary mb-6 sm:mb-8 leading-tight">
            Your doctor already knows.
          </h2>
          <p className="font-body-lg text-base sm:text-body-lg text-on-surface-variant mb-8 sm:mb-10 leading-relaxed">
            Stop repeating dates and doses. We prepare a clinical brief that gives your doctor exactly what they need before you walk in.
          </p>
          <div className="space-y-4 sm:space-y-5">
            {[
              { icon: "visibility", label: "Eye contact restored in consultations" },
              { icon: "assignment_turned_in", label: "Pre-validated context" },
              { icon: "lock", label: "Patient-controlled memory" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 text-primary font-body-md text-sm sm:text-base">
                <span className="material-symbols-outlined text-primary text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <Premium3DCard tiltAmount={3} glareOpacity={0.05}>
            <div className="bg-clinical-white border border-data-node/40 rounded-2xl shadow-double-bezel overflow-hidden">
              <div className="bg-surface-container-low p-4 sm:p-5 flex justify-between items-center border-b border-data-node/20 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-600" />
                  <span className="font-semibold text-primary tracking-wider text-[11px] sm:text-xs">
                    PREPARATION COMPLETE
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-8 space-y-6 sm:space-y-8">
                <div className="flex items-center gap-4 pb-6 border-b border-data-node/20">
                  <div className="w-14 h-14 rounded-full bg-primary text-clinical-white flex items-center justify-center font-headline-md text-xl shadow-sm">
                    VK
                  </div>
                  <div>
                    <h4 className="font-headline-md text-lg sm:text-xl text-primary">Dr. V. Khandelwal</h4>
                    <p className="font-mono text-xs text-secondary tracking-wider">CARDIOLOGY</p>
                  </div>
                </div>

                <div className="bg-surface-container-low p-5 sm:p-6 rounded-xl border border-data-node/30">
                  <p className="font-quote text-base sm:text-lg md:text-xl leading-relaxed italic text-primary">
                    &ldquo;I was able to diagnose the hypertension spike before the patient even entered the room.&rdquo;
                  </p>
                </div>

                <Link
                  href="/waitlist"
                  className="group flex items-center justify-between w-full bg-primary text-clinical-white px-6 py-4 font-label-caps text-xs sm:text-label-caps tracking-widest hover:bg-primary/95 transition-all rounded-full shadow-sm active:scale-[0.98]"
                >
                  <span>RESERVE YOUR PLACE</span>
                  <span className="w-6 h-6 rounded-full bg-clinical-white/15 group-hover:bg-clinical-white/25 flex items-center justify-center transition-colors">
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </span>
                </Link>
              </div>
            </div>
          </Premium3DCard>
        </Reveal>
      </div>
    </section>
  );
}

export function Outcome03(): ReactElement {
  return (
    <section className="py-[25px] sm:py-10 px-4 sm:px-6 md:px-gutter bg-surface-bright" id="science">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4 sm:gap-6">
          <Reveal className="max-w-xl">
            <span className="font-mono text-xs sm:text-label-caps text-secondary tracking-[0.25em] block mb-2 sm:mb-3 uppercase font-semibold">
              LONGITUDINAL CONTINUITY
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-headline-lg text-primary">
              A continuous narrative.
            </h2>
          </Reveal>
          <Reveal delay={0.2} className="max-w-sm">
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Healthcare is a lifelong story where every chapter builds upon the last.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          <div className="lg:col-span-5 relative pl-6 sm:pl-8 border-l-2 border-primary/20 space-y-6 flex flex-col justify-between">
            <Reveal>
              <Premium3DCard tiltAmount={3}>
                <div className="relative bg-clinical-white p-5 sm:p-6 border border-data-node/30 rounded-2xl shadow-double-bezel">
                  <span className="absolute -left-[31px] sm:-left-[39px] top-6 w-3.5 h-3.5 rounded-full bg-clinical-white border-2 border-primary" />
                  <div className="flex justify-between items-center mb-2 pb-1.5 border-b border-data-node/20 text-xs font-mono">
                    <span className="text-secondary font-medium">JANUARY 2024</span>
                  </div>
                  <h5 className="font-headline-md text-base sm:text-lg text-primary mb-2">Metabolic Profile</h5>
                  <div className="space-y-1.5 font-mono text-xs text-secondary">
                    <div className="flex justify-between">
                      <span>Fasting Glucose</span>
                      <span className="text-primary font-semibold">92 mg/dL</span>
                    </div>
                  </div>
                </div>
              </Premium3DCard>
            </Reveal>

            <Reveal delay={0.2}>
              <Premium3DCard tiltAmount={3}>
                <div className="relative bg-clinical-white p-5 sm:p-6 border border-data-node/30 rounded-2xl shadow-double-bezel">
                  <span className="absolute -left-[31px] sm:-left-[39px] top-6 w-3.5 h-3.5 rounded-full bg-amber-500 border-2 border-clinical-white" />
                  <div className="flex justify-between items-center mb-2 pb-1.5 border-b border-data-node/20 text-xs font-mono">
                    <span className="text-secondary font-medium">AUGUST 2024</span>
                  </div>
                  <h5 className="font-headline-md text-base sm:text-lg text-primary mb-1.5">Dosage Adjustment</h5>
                  <p className="font-body-md text-xs sm:text-sm text-secondary mb-2.5 leading-relaxed">
                    Lisinopril increased to 15mg. Adverse reaction documented.
                  </p>
                </div>
              </Premium3DCard>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.3} className="h-full">
              <Premium3DCard className="h-full" tiltAmount={2} glareOpacity={0.1}>
                <div className="bg-primary p-6 sm:p-8 rounded-2xl shadow-double-bezel-dark text-clinical-white h-full flex flex-col justify-between border border-memory-glow/20">
                  <div>
                    <div className="flex justify-between items-center mb-6 pb-3 border-b border-clinical-white/15">
                      <div className="flex items-center gap-2.5 font-mono text-xs text-memory-glow">
                        <span className="w-2.5 h-2.5 rounded-full bg-memory-glow animate-pulse" />
                        <span className="font-semibold uppercase tracking-wider">TODAY&apos;S PICTURE</span>
                      </div>
                    </div>

                    <h4 className="font-headline-md text-xl sm:text-2xl mb-4">
                      Symptom Correlation Stream
                    </h4>

                    <div className="space-y-4 font-body-md">
                      <div className="bg-clinical-white/5 border border-clinical-white/10 p-4 rounded-xl">
                        <p className="text-sm sm:text-base text-clinical-white/90 leading-relaxed">
                          Recurring headaches mapped directly to August Lisinopril dosage increase.
                        </p>
                      </div>

                      <div className="bg-clinical-white/5 border border-clinical-white/10 p-4 rounded-xl">
                        <p className="text-sm sm:text-base text-clinical-white/90 leading-relaxed">
                          Pre-generating titration adjustment recommendation for incoming specialist.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Premium3DCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import type { ReactElement } from "react";
import { Reveal } from "./intersection-reveal";

export function Outcome01(): ReactElement {
  return (
    <section id="outcomes" className="py-16 sm:py-24 lg:py-section-gap-lg px-4 sm:px-6 md:px-gutter bg-surface-container-low">
      <div className="max-w-container-max mx-auto">
        <Reveal className="mb-12 sm:mb-20 text-center">
          <span className="font-mono text-xs sm:text-label-caps text-primary tracking-[0.25em] block mb-3 sm:mb-4 uppercase font-semibold">
            RECORD INGESTION & SYNTHESIS
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-headline-lg text-primary">
            Never lose another health record.
          </h2>
          <p className="font-body-lg text-base sm:text-body-lg text-secondary max-w-2xl mx-auto mt-4 sm:mt-6 leading-relaxed">
            Fragmentation stops here. We ingest the raw data of your life and turn it into the
            context your doctors desperately need.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Structured Lab Intake */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <Reveal>
              <div className="bg-clinical-white p-5 sm:p-7 border border-data-node/30 rounded-2xl shadow-double-bezel">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-data-node/20">
                  <div className="flex items-center gap-2.5 text-primary">
                    <span className="material-symbols-outlined text-lg">description</span>
                    <span className="font-mono text-xs font-semibold tracking-wider">
                      LAB_REPORT_AUG24.PDF
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-green-700 bg-green-500/10 px-2 py-0.5 rounded">
                    PARSED
                  </span>
                </div>

                {/* Authentic Clinical Lab Panel */}
                <div className="space-y-2.5 font-mono text-xs">
                  <div className="flex justify-between items-center py-1 border-b border-data-node/10">
                    <span className="text-secondary">Hemoglobin (HGB)</span>
                    <span className="font-semibold text-primary">14.2 g/dL <span className="text-[10px] text-secondary font-normal">(13.5-17.5)</span></span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-data-node/10">
                    <span className="text-secondary">eGFR (Kidney Function)</span>
                    <span className="font-semibold text-primary">98 mL/min <span className="text-[10px] text-secondary font-normal">(&gt;60)</span></span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-data-node/10">
                    <span className="text-secondary">Serum Creatinine</span>
                    <span className="font-semibold text-primary">0.92 mg/dL <span className="text-[10px] text-secondary font-normal">(0.7-1.3)</span></span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 bg-error/5 px-2 rounded mt-2">
                    <span className="text-error font-medium">Blood Pressure (Sitting)</span>
                    <span className="font-bold text-error">145/95 mmHg [HIGH]</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-clinical-white p-5 sm:p-7 border border-data-node/30 rounded-2xl shadow-double-bezel">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-mono text-xs font-semibold text-primary tracking-wider uppercase">
                    CONTEXTUAL CORRELATION ENGINE
                  </span>
                </div>
                <p className="font-body-md text-sm sm:text-base text-on-surface-variant italic leading-relaxed">
                  &ldquo;Connecting new BP data point with August medication titration... ensuring
                  the specialist sees the longitudinal correlation before prescribing.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>

          {/* Center Connection Indicator */}
          <div className="hidden lg:flex lg:col-span-1 justify-center items-center">
            <svg
              className="w-full h-24"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <line
                className="process-line"
                stroke="#001736"
                strokeDasharray="4 4"
                strokeWidth="1.5"
                x1="0"
                x2="100"
                y1="50"
                y2="50"
              />
            </svg>
          </div>

          {/* Right Column: Clinician Output Card */}
          <div className="lg:col-span-6">
            <Reveal delay={0.4} className="h-full">
              <div className="bg-primary p-6 sm:p-8 lg:p-10 rounded-2xl shadow-double-bezel-dark text-clinical-white h-full flex flex-col justify-between border border-memory-glow/20">
                <div>
                  <div className="flex flex-wrap justify-between items-start mb-6 sm:mb-10 gap-3">
                    <div>
                      <p className="font-mono text-[10px] sm:text-xs text-memory-glow uppercase tracking-wider mb-1">
                        OUTPUT FOR CLINICIAN
                      </p>
                      <h3 className="font-headline-md text-2xl sm:text-headline-md">Medical Synthesis</h3>
                    </div>
                    <div className="px-3 py-1 bg-clinical-white/10 border border-clinical-white/20 rounded-full text-[10px] font-mono tracking-wider">
                      INTELLIGENCE V4.2
                    </div>
                  </div>

                  <div className="space-y-5 sm:space-y-6">
                    <div className="bg-clinical-white/5 border border-clinical-white/10 p-4 sm:p-5 rounded-xl">
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="w-2 h-2 rounded-full bg-memory-glow" />
                        <span className="font-mono text-xs font-semibold text-memory-glow uppercase tracking-wider">
                          OBSERVATION SUMMARY
                        </span>
                      </div>
                      <p className="font-body-md text-sm sm:text-base text-clinical-white/90 leading-relaxed">
                        Correlation detected: Recent headaches align with 15% systolic spike following
                        August dosage adjustment. Physician prepared to recalibrate dosage immediately.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                      <div className="bg-clinical-white/5 p-3 rounded-lg border border-clinical-white/10">
                        <span className="text-clinical-white/60 block text-[10px]">HISTORICAL BASELINE</span>
                        <span className="font-semibold text-clinical-white">122/80 mmHg</span>
                      </div>
                      <div className="bg-clinical-white/5 p-3 rounded-lg border border-clinical-white/10">
                        <span className="text-clinical-white/60 block text-[10px]">REACTION SEVERITY</span>
                        <span className="font-semibold text-memory-glow">Moderate [Tracked]</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-clinical-white/15 flex items-center justify-between font-mono text-[10px] sm:text-xs">
                  <span className="text-clinical-white/70">
                    AWAITING SPECIALIST APPROVAL
                  </span>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-memory-glow animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-memory-glow animate-pulse [animation-delay:200ms]" />
                    <div className="w-2 h-2 rounded-full bg-memory-glow animate-pulse [animation-delay:400ms]" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Outcome02(): ReactElement {
  return (
    <section className="py-16 sm:py-24 lg:py-section-gap-lg px-4 sm:px-6 md:px-gutter bg-clinical-white overflow-hidden">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-center">
        <Reveal>
          <span className="font-mono text-xs sm:text-label-caps text-secondary tracking-[0.25em] block mb-3 sm:mb-4 uppercase font-semibold">
            PHYSICIAN PREPARATION
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-headline-lg text-primary mb-6 sm:mb-8 leading-tight">
            Your doctor already knows your history.
          </h2>
          <p className="font-body-lg text-base sm:text-body-lg text-on-surface-variant mb-8 sm:mb-10 leading-relaxed">
            Do not spend your 15-minute appointment repeating dates and doses. Mritunjay
            prepares a validated clinical brief that gives your doctor everything they need
            before you even sit down.
          </p>
          <div className="space-y-4 sm:space-y-5">
            {[
              { icon: "verified", label: "Full Clinical Context Prior to Consultation Entry" },
              { icon: "assignment_turned_in", label: "Physician-Validated Medical Intelligence" },
              { icon: "lock", label: "Zero-Trust Patient-Controlled Data Governance" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 text-primary font-body-md text-sm sm:text-base"
              >
                <span className="material-symbols-outlined text-primary text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="relative">
            <div className="absolute -inset-4 bg-surface-container-low rounded-3xl -z-10 blur-2xl opacity-60" />
            <div className="bg-clinical-white border border-data-node/40 rounded-2xl shadow-double-bezel overflow-hidden">
              <div className="bg-surface-container-low p-4 sm:p-5 flex justify-between items-center border-b border-data-node/20 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-600" />
                  <span className="font-semibold text-primary tracking-wider text-[11px] sm:text-xs">
                    CLINICAL PREPARATION COMPLETE
                  </span>
                </div>
                <span className="text-secondary text-[10px]">ID: MJ-2026-081</span>
              </div>

              <div className="p-5 sm:p-8 space-y-6 sm:space-y-8">
                <div className="flex items-center gap-4 pb-6 border-b border-data-node/20">
                  <div className="w-14 h-14 rounded-full bg-primary text-clinical-white flex items-center justify-center font-headline-md text-xl shadow-sm">
                    VK
                  </div>
                  <div>
                    <h4 className="font-headline-md text-lg sm:text-xl text-primary">
                      Dr. Vipul Khandelwal, MD
                    </h4>
                    <p className="font-mono text-xs text-secondary tracking-wider">
                      BOARD CERTIFIED CARDIOLOGY & INTERNAL MEDICINE
                    </p>
                  </div>
                </div>

                <div className="bg-surface-container-low p-5 sm:p-6 rounded-xl border border-data-node/30">
                  <p className="font-mono text-[10px] sm:text-xs text-primary font-semibold mb-2 uppercase tracking-wider">
                    PHYSICIAN PRE-REVIEW QUOTE
                  </p>
                  <p className="font-quote text-base sm:text-lg md:text-xl leading-relaxed italic text-primary">
                    &ldquo;Because Mritunjay surfaced the medication titration history, I was able
                    to diagnose the hypertension spike before the patient even entered the room.&rdquo;
                  </p>
                </div>

                <Link
                  href="/waitlist"
                  className="group flex items-center justify-between w-full bg-primary text-clinical-white px-6 py-4 font-label-caps text-xs sm:text-label-caps tracking-widest hover:bg-primary/95 transition-all rounded-full shadow-sm active:scale-[0.98]"
                >
                  <span>START CONSULTATION WITH CONTEXT</span>
                  <span className="w-6 h-6 rounded-full bg-clinical-white/15 group-hover:bg-clinical-white/25 flex items-center justify-center transition-colors">
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Outcome03(): ReactElement {
  return (
    <section className="py-16 sm:py-24 lg:py-section-gap-lg px-4 sm:px-6 md:px-gutter bg-surface-bright" id="science">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4 sm:gap-6">
          <Reveal className="max-w-xl">
            <span className="font-mono text-xs sm:text-label-caps text-secondary tracking-[0.25em] block mb-2 sm:mb-3 uppercase font-semibold">
              LONGITUDINAL CONTINUITY
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-headline-lg text-primary">
              A continuous medical narrative.
            </h2>
          </Reveal>
          <Reveal delay={0.2} className="max-w-sm">
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Healthcare is not a series of disconnected events. It is a lifelong story where
              every chapter builds upon the last.
            </p>
          </Reveal>
        </div>

        {/* Asymmetric Continuous Medical Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Historical Baseline Ledger (5 cols) */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            <Reveal>
              <div className="bg-clinical-white p-5 sm:p-6 border border-data-node/30 rounded-2xl shadow-double-bezel">
                <div className="flex justify-between items-center mb-3 pb-2 border-b border-data-node/20">
                  <span className="font-mono text-xs text-secondary font-medium">LAB_RECORD // JAN 2024</span>
                  <span className="font-mono text-[10px] text-primary bg-primary/5 px-2 py-0.5 rounded">STABLE</span>
                </div>
                <h5 className="font-headline-md text-base sm:text-lg text-primary mb-3">Metabolic Baseline</h5>
                <div className="space-y-2 font-mono text-xs">
                  <div className="flex justify-between items-center py-1 border-b border-data-node/10">
                    <span className="text-secondary">Fasting Glucose</span>
                    <span className="font-semibold text-primary">92 mg/dL</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-data-node/10">
                    <span className="text-secondary">Serum Creatinine</span>
                    <span className="font-semibold text-primary">0.90 mg/dL</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-clinical-white p-5 sm:p-6 border border-data-node/30 rounded-2xl shadow-double-bezel">
                <div className="flex justify-between items-center mb-3 pb-2 border-b border-data-node/20">
                  <span className="font-mono text-xs text-secondary font-medium">PRESCRIPTION // AUG 2024</span>
                  <span className="font-mono text-[10px] text-error bg-error/10 px-2 py-0.5 rounded">TITRATION</span>
                </div>
                <h5 className="font-headline-md text-base sm:text-lg text-primary mb-2">Dosage Adjustment</h5>
                <p className="font-body-md text-xs sm:text-sm text-secondary mb-3 leading-relaxed">
                  Lisinopril increased from 10mg to 15mg daily. Adverse reaction noted on day 14.
                </p>
                <div className="flex items-center gap-2 font-mono text-xs text-primary font-medium">
                  <span className="material-symbols-outlined text-base text-green-700">verified</span>
                  <span>PRESERVED IN PERMANENT CONTEXT</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Active Intelligence Stream (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal delay={0.3} className="h-full">
              <div className="bg-primary p-6 sm:p-8 rounded-2xl shadow-double-bezel-dark text-clinical-white h-full flex flex-col justify-between border border-memory-glow/20">
                <div>
                  <div className="flex justify-between items-center mb-6 pb-3 border-b border-clinical-white/15">
                    <div className="flex items-center gap-2.5 font-mono text-xs text-memory-glow">
                      <span className="w-2.5 h-2.5 rounded-full bg-memory-glow animate-pulse" />
                      <span className="font-semibold uppercase tracking-wider">ACTIVE INTELLIGENCE // REAL-TIME</span>
                    </div>
                    <span className="font-mono text-[10px] bg-clinical-white/10 px-2.5 py-0.5 rounded">
                      TELEMETRY SYNCED
                    </span>
                  </div>

                  <h4 className="font-headline-md text-xl sm:text-2xl mb-4">
                    Symptom & Medication Correlation Stream
                  </h4>

                  <div className="space-y-4 font-body-md">
                    <div className="bg-clinical-white/5 border border-clinical-white/10 p-4 rounded-xl">
                      <div className="flex items-center justify-between mb-1.5 font-mono text-xs">
                        <span className="text-memory-glow font-medium">PATHWAY CORRELATION</span>
                        <span className="text-clinical-white/50 text-[10px]">CONFIDENCE: 98.4%</span>
                      </div>
                      <p className="text-sm sm:text-base text-clinical-white/90 leading-relaxed">
                        Recurring headaches mapped directly to the August Lisinopril dosage increase.
                        Cross-referenced against multi-provider cardiology timeline.
                      </p>
                    </div>

                    <div className="bg-clinical-white/5 border border-clinical-white/10 p-4 rounded-xl">
                      <div className="flex items-center justify-between mb-1.5 font-mono text-xs">
                        <span className="text-memory-glow font-medium">CLINICAL DIRECTIVE</span>
                        <span className="text-clinical-white/50 text-[10px]">AUTOMATED</span>
                      </div>
                      <p className="text-sm sm:text-base text-clinical-white/90 leading-relaxed">
                        Pre-generating titration adjustment recommendation for the incoming specialist consultation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-clinical-white/15 flex items-center justify-between font-mono text-xs text-clinical-white/70">
                  <span>LONGITUDINAL CONTINUITY MAINTAINED</span>
                  <span className="text-memory-glow font-semibold">ZERO DATA LOST</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

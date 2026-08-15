import type { ReactElement } from "react";
import { Reveal } from "./intersection-reveal";

export function Outcome01(): ReactElement {
  return (
    <section id="outcomes" className="py-16 sm:py-24 lg:py-section-gap-lg px-4 sm:px-6 md:px-gutter bg-surface-container-low">
      <div className="max-w-container-max mx-auto">
        <Reveal className="mb-12 sm:mb-20 text-center">
          <span className="font-label-caps text-xs sm:text-label-caps text-primary tracking-[0.2em] sm:tracking-[0.3em] block mb-3 sm:mb-4 uppercase">
            OUTCOME 01
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-headline-lg text-primary">
            Never lose another health record.
          </h2>
          <p className="font-body-lg text-base sm:text-body-lg text-secondary max-w-2xl mx-auto mt-4 sm:mt-6">
            Fragmentation stops here. We ingest the raw data of your life and turn it into the
            context your doctors desperately need.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="bg-clinical-white p-5 sm:p-8 border border-data-node/20 rounded-xl artifact-shadow">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 text-primary">
                  <span className="material-symbols-outlined text-lg sm:text-xl">upload_file</span>
                  <span className="font-label-caps text-xs sm:text-label-caps">
                    INGESTING: LAB_REPORT_AUG24.PDF
                  </span>
                </div>
                <div className="space-y-4 opacity-60">
                  <div className="h-4 bg-surface-container rounded w-3/4" />
                  <div className="h-4 bg-surface-container rounded w-full" />
                  <div className="border-t border-data-node/10 pt-4 mt-6">
                    <div className="flex justify-between font-label-caps text-[10px]">
                      <span>HGB: 14.2 g/dL</span>
                      <span className="text-error">BP: 145/95 ↑</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="bg-clinical-white p-5 sm:p-8 border border-data-node/20 rounded-xl artifact-shadow">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <span className="material-symbols-outlined text-primary text-lg sm:text-xl">history</span>
                  <span className="font-label-caps text-xs sm:text-label-caps">
                    INDISPENSABLE CONTEXT MATCHED
                  </span>
                </div>
                <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant italic leading-relaxed">
                  &ldquo;Connecting new BP data point with August medication titration... ensuring
                  the specialist sees the correlation.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>

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
                strokeWidth="1"
                x1="0"
                x2="100"
                y1="50"
                y2="50"
              />
            </svg>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.6} className="h-full">
              <div className="bg-primary p-6 sm:p-8 lg:p-10 rounded-xl shadow-2xl text-clinical-white h-full flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap justify-between items-start mb-8 sm:mb-12 gap-4">
                    <div>
                      <p className="font-label-caps text-xs sm:text-label-caps opacity-60 mb-2">
                        OUTPUT FOR CLINICIAN
                      </p>
                      <h3 className="font-headline-md text-2xl sm:text-headline-md">Medical Synthesis</h3>
                    </div>
                    <div className="px-3 sm:px-4 py-1.5 bg-clinical-white/10 border border-clinical-white/20 rounded-full text-[9px] sm:text-[10px] font-label-caps">
                      INTELLIGENCE V4.2
                    </div>
                  </div>
                  <div className="space-y-6 sm:space-y-8">
                    <div className="flex gap-4 sm:gap-6">
                      <div className="w-10 h-10 rounded-full bg-clinical-white/10 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-memory-glow text-lg sm:text-xl">insights</span>
                      </div>
                      <div>
                        <p className="font-label-caps text-xs sm:text-label-caps text-memory-glow">
                          OUTCOME-LED OBSERVATION
                        </p>
                        <p className="font-body-md text-sm sm:text-body-md mt-1">
                          Correlation detected: Recent headaches align with 15% systolic spike. The
                          physician is prepared to recalibrate dosage immediately.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 sm:mt-16 pt-4 sm:pt-8 border-t border-clinical-white/10 flex items-center justify-between">
                  <span className="font-label-caps text-[10px] sm:text-[11px] opacity-40">
                    AWAITING SPECIALIST APPROVAL
                  </span>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-memory-glow animate-pulse" />
                    <div className="w-1.5 h-1.5 rounded-full bg-memory-glow animate-pulse [animation-delay:200ms]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-memory-glow animate-pulse [animation-delay:400ms]" />
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
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
        <Reveal>
          <span className="font-label-caps text-xs sm:text-label-caps text-secondary tracking-widest block mb-4 sm:mb-6 uppercase">
            OUTCOME 02
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-headline-lg text-primary mb-6 sm:mb-8 leading-tight">
            Your doctor already knows your history.
          </h2>
          <p className="font-body-lg text-base sm:text-body-lg text-on-surface-variant mb-8 sm:mb-12">
            Don&apos;t spend your 15-minute appointment repeating dates and doses. Mritunjay
            prepares a validated clinical brief that gives your doctor everything they need
            before you even sit down.
          </p>
          <div className="space-y-4 sm:space-y-6">
            {[
              { icon: "verified", label: "Full Clinical Context Prior to Entry" },
              { icon: "edit_note", label: "Physician-Validated Understanding" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 sm:gap-4 text-primary font-label-caps text-xs sm:text-label-caps"
              >
                <span className="material-symbols-outlined text-lg sm:text-xl">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="relative">
            <div className="absolute -inset-4 bg-surface-container-low rounded-[2rem] -z-10 blur-2xl opacity-50" />
            <div className="bg-clinical-white border border-data-node/30 rounded-2xl artifact-shadow overflow-hidden">
              <div className="bg-surface-container p-4 sm:p-6 flex justify-between items-center border-b border-data-node/20">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary/40" />
                  <span className="font-label-caps text-[9px] sm:text-[10px] tracking-widest">
                    CLINICAL PREPARATION COMPLETE
                  </span>
                </div>
                <span className="font-label-caps text-[9px] sm:text-[10px] opacity-50">ID: MJ-2026-081</span>
              </div>
              <div className="p-5 sm:p-8 lg:p-10 space-y-6 sm:space-y-10">
                <div className="flex items-center gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-data-node/10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary-fixed flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">
                      medical_services
                    </span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-xl sm:text-[24px] text-primary">
                      Dr. Vipul Khandelwal
                    </h4>
                    <p className="font-label-caps text-[10px] sm:text-label-caps text-secondary">
                      BOARD CERTIFIED INTERNAL MEDICINE
                    </p>
                  </div>
                </div>
                <div className="bg-surface-container-low p-4 sm:p-6 md:p-8 rounded-lg border border-primary/5">
                  <p className="font-label-caps text-[10px] sm:text-[11px] text-primary mb-2 sm:mb-4">
                    PHYSICIAN PRE-REVIEW
                  </p>
                  <p className="font-quote text-base sm:text-lg md:text-[22px] leading-relaxed italic text-primary">
                    &ldquo;Because Mritunjay surfaced the medication titration history, I was able
                    to diagnose the hypertension spike before the patient even entered the
                    room.&rdquo;
                  </p>
                </div>
                <button className="w-full bg-primary text-clinical-white py-4 sm:py-5 font-label-caps text-xs sm:text-label-caps tracking-widest hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 rounded">
                  START CONSULTATION WITH CONTEXT
                </button>
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-24 gap-6 sm:gap-8">
          <Reveal className="max-w-xl">
            <span className="font-label-caps text-xs sm:text-label-caps text-secondary tracking-widest block mb-3 sm:mb-4 uppercase">
              OUTCOME 03
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-headline-lg text-primary">
              A continuous medical narrative.
            </h2>
          </Reveal>
          <Reveal delay={0.2} className="max-w-sm">
            <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant">
              Healthcare isn&apos;t a series of events; it&apos;s a lifelong story. We ensure the
              chapters are connected.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Reveal>
            <div className="bg-clinical-white p-5 sm:p-8 border border-data-node/20 rounded-xl artifact-shadow h-full">
              <span className="font-label-caps text-[10px] text-secondary mb-3 sm:mb-4 block">
                LAB_RESULT // JAN 2024
              </span>
              <h5 className="font-headline-md text-lg sm:text-[20px] mb-4 sm:mb-6">Metabolic Baseline</h5>
              <div className="space-y-4">
                {[
                  ["Glucose", "92 MG/DL"],
                  ["Creatinine", "0.9 MG/DL"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex justify-between items-end border-b border-data-node/10 pb-2 text-xs sm:text-sm"
                  >
                    <span className="font-body-md">{label}</span>
                    <span className="font-label-caps">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-clinical-white p-5 sm:p-8 border border-data-node/20 rounded-xl artifact-shadow h-full">
              <span className="font-label-caps text-[10px] text-secondary mb-3 sm:mb-4 block">
                PRESCRIPTION // AUG 2024
              </span>
              <h5 className="font-headline-md text-lg sm:text-[20px] mb-4 sm:mb-6">Active Adjustments</h5>
              <div className="bg-primary/5 p-4 rounded mb-6">
                <p className="font-body-md text-xs sm:text-[14px] text-primary">
                  Outcome: Systolic stabilization required +5mg titration.
                </p>
              </div>
              <div className="flex items-center gap-3 text-secondary">
                <span className="material-symbols-outlined text-base sm:text-[18px]">verified_user</span>
                <span className="font-label-caps text-[10px] sm:text-[11px]">CONTEXT PRESERVED</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="bg-primary p-5 sm:p-8 rounded-xl artifact-shadow h-full">
              <span className="font-label-caps text-[10px] text-clinical-white/50 mb-3 sm:mb-4 block">
                ACTIVE INTELLIGENCE // TODAY
              </span>
              <h5 className="font-headline-md text-lg sm:text-[20px] text-clinical-white mb-4 sm:mb-6">
                Symptom Mapping
              </h5>
              <div className="relative pl-6 border-l border-memory-glow/30 space-y-6">
                {[
                  "Recurring headaches connected to Aug titration.",
                  "Synthesizing update for care team...",
                ].map((text, i) => (
                  <div key={i} className={`relative ${i === 1 ? "opacity-60" : ""}`}>
                    <div
                      className={`absolute -left-[27px] top-1 w-2 h-2 rounded-full ${
                        i === 1 ? "bg-memory-glow/50" : "bg-memory-glow"
                      }`}
                    />
                    <p className="font-body-md text-xs sm:text-[14px] text-clinical-white/90">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

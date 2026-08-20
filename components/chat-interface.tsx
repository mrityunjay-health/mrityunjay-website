"use client";

import { useState, type ReactElement } from "react";

type ViewTab = "synthesis" | "timeline" | "reactions" | "recovery";

export function ChatInterface(): ReactElement {
  const [activeTab, setActiveTab] = useState<ViewTab>("synthesis");

  return (
    <section
      id="chat-interface"
      className="py-12 sm:py-20 lg:py-section-gap-lg px-4 sm:px-6 md:px-gutter layer-bridge bg-clinical-white"
    >
      <div className="w-full max-w-5xl mx-auto relative">
        {/* Double-Bezel Clinical Workstation Shell */}
        <div className="bg-clinical-white border border-data-node/40 rounded-2xl sm:rounded-3xl shadow-double-bezel overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-artifact">
          {/* Institutional Clinical Header Bar */}
          <div className="border-b border-data-node/20 bg-surface-container-low px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-primary" />
              <span className="font-semibold text-primary tracking-wider text-xs">
                MRITUNJAY CLINICAL WORKSTATION
              </span>
              <span className="hidden sm:inline-block text-[10px] px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                FULL CONTEXT READY
              </span>
            </div>

            {/* Interactive View Tabs (Principle 4: Progressive Disclosure) */}
            <div
              role="tablist"
              aria-label="Clinical telemetry views"
              className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5"
            >
              {[
                { id: "synthesis" as const, label: "Live Synthesis" },
                { id: "timeline" as const, label: "12-Month Timeline" },
                { id: "reactions" as const, label: "Adverse Audit" },
                { id: "recovery" as const, label: "Recovery Outlook" },
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 py-1.5 rounded-full text-xs transition-all active:scale-[0.98] whitespace-nowrap ${
                      isActive
                        ? "bg-primary text-clinical-white font-medium shadow-xs"
                        : "text-secondary hover:text-primary hover:bg-data-node/20"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center gap-2 text-secondary text-[11px] tabular-nums">
              <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
              <span className="font-mono text-[10px] text-secondary">
                LIVE ENCLAVE
              </span>
            </div>
          </div>

          {/* Interactive Content Container */}
          <div className="p-4 sm:p-6 md:p-8 relative font-body-md bg-clinical-white min-h-[480px]">
            {/* VIEW 1: Live Dialogue & Pre-Consultation Synthesis */}
            {activeTab === "synthesis" && (
              <div className="space-y-6 max-w-3xl mx-auto">
                {/* Dialogue Stream */}
                <div className="space-y-4">
                  {/* AI Intake Message */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-sm border border-primary/20">
                      <span className="font-mono text-xs text-clinical-white font-bold">M</span>
                    </div>
                    <div className="bg-surface-container-low border border-data-node/30 p-3.5 sm:p-4 rounded-2xl rounded-tl-none text-primary shadow-sm max-w-xl">
                      <p className="font-headline-md text-sm sm:text-base md:text-[18px] leading-relaxed">
                        The specialist will see you now. I have summarized your last 12 months of cardiac data for them.
                      </p>
                    </div>
                  </div>

                  {/* Patient Question */}
                  <div className="flex items-start gap-3 sm:gap-4 justify-end">
                    <div className="bg-primary text-clinical-white p-3.5 sm:p-4 rounded-2xl rounded-tr-none shadow-sm max-w-xl">
                      <p className="text-xs sm:text-sm md:text-[16px] leading-relaxed text-clinical-white">
                        Will they see the reaction I had to the medication in 2024?
                      </p>
                    </div>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-secondary-container text-primary flex items-center justify-center shrink-0 border border-data-node/40 shadow-sm">
                      <span className="material-symbols-outlined text-base text-primary">person</span>
                    </div>
                  </div>

                  {/* AI Assurance Message */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-sm border border-primary/20">
                      <span className="font-mono text-xs text-clinical-white font-bold">M</span>
                    </div>
                    <div className="bg-surface-container-low border border-data-node/30 p-3.5 sm:p-4 rounded-2xl rounded-tl-none text-primary shadow-sm max-w-xl">
                      <p className="font-headline-md text-sm sm:text-base md:text-[17px] leading-relaxed">
                        Yes. Your Lisinopril adverse reaction from August 2024 is highlighted as a primary contraindication on the physician&apos;s summary.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pre-Consultation Brief Card Artifact */}
                <div className="bg-primary text-clinical-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-double-bezel-dark border border-clinical-white/10 relative overflow-hidden">
                  <div className="flex flex-wrap justify-between items-start mb-5 gap-2 border-b border-clinical-white/15 pb-4">
                    <div>
                      <span className="font-mono text-[9px] sm:text-[10px] text-memory-glow uppercase tracking-widest block mb-0.5 font-semibold">
                        CLINICAL SYNTHESIS COMPLETE
                      </span>
                      <h3 className="font-headline-md text-lg sm:text-2xl text-clinical-white">
                        Pre-Consultation Specialist Brief
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] px-3 py-1 bg-clinical-white/10 rounded-full border border-clinical-white/20 text-clinical-white shrink-0 font-medium">
                      READY FOR PHYSICIAN ENTRY
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6">
                    <div className="border-l-2 border-amber-400/80 pl-3.5">
                      <p className="font-mono text-[9px] sm:text-[10px] text-clinical-white/60 uppercase tracking-wider mb-1">
                        CRITICAL SAFETY FLAG
                      </p>
                      <p className="text-sm sm:text-base font-semibold text-memory-glow">
                        Lisinopril Intolerance (2024)
                      </p>
                      <p className="font-body-md text-xs text-clinical-white/70 mt-0.5">
                        Documented dry cough &amp; BP spike
                      </p>
                    </div>

                    <div className="border-l-2 border-green-400/80 pl-3.5">
                      <p className="font-mono text-[9px] sm:text-[10px] text-clinical-white/60 uppercase tracking-wider mb-1">
                        RECORD COVERAGE
                      </p>
                      <p className="text-sm sm:text-base font-semibold text-clinical-white font-mono">
                        100% History Indexed
                      </p>
                      <p className="font-body-md text-xs text-clinical-white/70 mt-0.5">
                        3 hospital portals unified
                      </p>
                    </div>

                    <div className="border-l-2 border-memory-glow/80 pl-3.5">
                      <p className="font-mono text-[9px] sm:text-[10px] text-clinical-white/60 uppercase tracking-wider mb-1">
                        CARDIAC TIMELINE
                      </p>
                      <p className="text-sm sm:text-base font-semibold text-clinical-white font-mono">
                        12 Months Chronology
                      </p>
                      <p className="font-body-md text-xs text-clinical-white/70 mt-0.5">
                        Baseline to current referral
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-clinical-white/15 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-clinical-white/80">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-base text-memory-glow">verified</span>
                      <span>Physician begins with complete verified baseline</span>
                    </div>
                    <span className="text-memory-glow font-semibold">NO REPETITION NEEDED</span>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 2: 12-Month Longitudinal Chronology */}
            {activeTab === "timeline" && (
              <div className="space-y-6 max-w-3xl mx-auto">
                <div className="border-b border-data-node/20 pb-4">
                  <span className="font-mono text-[10px] text-secondary uppercase tracking-wider block mb-1">
                    LONGITUDINAL CONTINUITY MAP // 12-MONTH RECORD
                  </span>
                  <h3 className="font-headline-md text-xl sm:text-2xl text-primary">
                    12-Month Cardiac Chronology
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                  <div className="bg-surface-container-low p-4 sm:p-5 rounded-2xl border border-data-node/30 space-y-2">
                    <div className="flex justify-between items-center pb-2 border-b border-data-node/20 text-[10px] text-secondary">
                      <span>MONTH 00</span>
                      <span className="bg-primary/10 text-primary px-2 py-0.5 rounded font-medium">BASELINE</span>
                    </div>
                    <p className="font-headline-md text-base text-primary">Initial Consultation</p>
                    <p className="font-body-md text-secondary text-xs leading-relaxed">
                      Resting BP: 130/84 mmHg. Prescribed Lisinopril 10mg daily by primary physician.
                    </p>
                  </div>

                  <div className="bg-surface-container-low p-4 sm:p-5 rounded-2xl border border-data-node/30 space-y-2">
                    <div className="flex justify-between items-center pb-2 border-b border-data-node/20 text-[10px] text-amber-700">
                      <span>MONTH 06</span>
                      <span className="bg-amber-500/15 text-amber-800 px-2 py-0.5 rounded font-medium">TITRATION FLAG</span>
                    </div>
                    <p className="font-headline-md text-base text-primary">Dose Adjusted to 15mg</p>
                    <p className="font-body-md text-secondary text-xs leading-relaxed">
                      Day 14: Intolerance and persistent headaches documented. Flagged permanently in memory enclave.
                    </p>
                  </div>

                  <div className="bg-primary text-clinical-white p-4 sm:p-5 rounded-2xl shadow-double-bezel-dark space-y-2">
                    <div className="flex justify-between items-center pb-2 border-b border-clinical-white/20 text-[10px] text-memory-glow">
                      <span>MONTH 12</span>
                      <span className="bg-clinical-white/15 px-2 py-0.5 rounded font-medium">TODAY</span>
                    </div>
                    <p className="font-headline-md text-base text-clinical-white">Cardiology Referral</p>
                    <p className="font-body-md text-clinical-white/80 text-xs leading-relaxed">
                      Full adverse audit and BP titration curves pre-summarized before specialist enters the room.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 text-xs font-body-md text-primary flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-lg shrink-0">verified</span>
                  <span>Every lab, titration, and symptom is preserved in sovereign patient memory.</span>
                </div>
              </div>
            )}

            {/* VIEW 3: Adverse Reaction Audit Trail */}
            {activeTab === "reactions" && (
              <div className="space-y-6 max-w-3xl mx-auto">
                <div className="border-b border-data-node/20 pb-4">
                  <span className="font-mono text-[10px] text-amber-700 uppercase tracking-wider block mb-1 font-semibold">
                    CONTRAINDICATION AUDIT TRAIL
                  </span>
                  <h3 className="font-headline-md text-xl sm:text-2xl text-primary">
                    2024 ACE-Inhibitor Intolerance
                  </h3>
                </div>

                <div className="bg-surface-container-low p-5 sm:p-6 rounded-2xl border border-data-node/30 space-y-3 font-mono text-xs">
                  <div className="flex flex-wrap justify-between items-center pb-2.5 border-b border-data-node/20 gap-1">
                    <span className="text-secondary">Flagged Compound</span>
                    <span className="font-bold text-primary text-sm">Lisinopril (ACE Inhibitor)</span>
                  </div>
                  <div className="flex flex-wrap justify-between items-center pb-2.5 border-b border-data-node/10 gap-1">
                    <span className="text-secondary">Onset Date</span>
                    <span className="font-semibold text-primary">August 24, 2024</span>
                  </div>
                  <div className="flex flex-wrap justify-between items-center pb-2.5 border-b border-data-node/10 gap-1">
                    <span className="text-secondary">Documented Reaction</span>
                    <span className="font-semibold text-amber-800 bg-amber-500/10 px-2 py-0.5 rounded">
                      Recurrent headaches and dry cough
                    </span>
                  </div>
                  <div className="flex flex-wrap justify-between items-center gap-1">
                    <span className="text-secondary">Recommended Alternative Class</span>
                    <span className="font-semibold text-green-700">ARB (Angiotensin II Receptor Blocker)</span>
                  </div>
                </div>

                <p className="font-body-md text-sm text-secondary leading-relaxed">
                  Mritunjay automatically verifies incoming prescriptions against historical reaction
                  signatures across all past hospital visits, preventing repeated medication errors.
                </p>
              </div>
            )}

            {/* VIEW 4: Recovery Outlook */}
            {activeTab === "recovery" && (
              <div className="space-y-6 max-w-3xl mx-auto">
                <div className="border-b border-data-node/20 pb-4">
                  <span className="font-mono text-[10px] text-green-700 uppercase tracking-wider block mb-1 font-semibold">
                    AFTER YOUR VISIT
                  </span>
                  <h3 className="font-headline-md text-xl sm:text-2xl text-primary">
                    Continuous Recovery Pathway
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                  <div className="bg-surface-container-low p-4 sm:p-5 rounded-2xl border border-data-node/30 space-y-2">
                    <span className="text-[10px] text-secondary uppercase block font-semibold">Immediate Care Action</span>
                    <p className="font-headline-md text-base text-primary">Medication Switch to ARB</p>
                    <p className="font-body-md text-secondary text-xs leading-relaxed">
                      Dosage titration scheduled with 14-day symptom check-in and blood pressure monitoring.
                    </p>
                  </div>

                  <div className="bg-surface-container-low p-4 sm:p-5 rounded-2xl border border-data-node/30 space-y-2">
                    <span className="text-[10px] text-secondary uppercase block font-semibold">Long-Term Goal</span>
                    <p className="font-headline-md text-base text-primary">Systolic Target &lt;120 mmHg</p>
                    <p className="font-body-md text-secondary text-xs leading-relaxed">
                      Continuous ambulatory tracking with proactive clinician notification if patterns shift.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/20 text-xs font-body-md text-green-900 flex items-center gap-3">
                  <span className="material-symbols-outlined text-green-700 text-lg shrink-0">healing</span>
                  <span>Mritunjay stays active through your recovery, ensuring treatment adjustments are tracked.</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

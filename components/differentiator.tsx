"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState, type ReactElement } from "react";
import { Reveal } from "./intersection-reveal";

type ModelMode = "episodic" | "continuous";

interface Milestone {
  readonly month: string;
  readonly title: string;
  readonly episodicEvent: string;
  readonly continuousEvent: string;
  readonly contextRetention: string;
}

const MILESTONES: ReadonlyArray<Milestone> = [
  {
    month: "Month 00",
    title: "Initial Cardiac Consultation",
    episodicEvent: "Patient fills 6 paper forms. History written on local EHR.",
    continuousEvent: "Sovereign memory enclave initialized. 12-month record indexed.",
    contextRetention: "100% Context Captured",
  },
  {
    month: "Month 04",
    title: "Medication Adjustment",
    episodicEvent: "Physician has no record of adverse reaction from previous hospital visit.",
    continuousEvent: "Allergy safeguard flagged; previous titration curve surfaced instantly.",
    contextRetention: "Persistent Memory Maintained",
  },
  {
    month: "Month 08",
    title: "Specialist Referral",
    episodicEvent: "New cardiologist starts from zero. Patient forced to repeat entire story.",
    continuousEvent: "Specialist receives one-screen synthesized clinical brief before arrival.",
    contextRetention: "Continuous Handoff Active",
  },
  {
    month: "Month 12",
    title: "Sustained Recovery & Prevention",
    episodicEvent: "No follow-up. Health narrative fragmented across isolated portals.",
    continuousEvent: "Longitudinal health picture synthesized; proactive recovery trends clear.",
    contextRetention: "Lifelong Intelligence Compounded",
  },
];

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export function Differentiator(): ReactElement {
  const reduced = useReducedMotion();
  const [mode, setMode] = useState<ModelMode>("continuous");
  const [selectedMilestone, setSelectedMilestone] = useState<number>(0);

  const activeMilestone = MILESTONES[selectedMilestone];

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

        {/* Model Mode Switcher */}
        <div
          role="tablist"
          aria-label="Compare care paradigms"
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12"
        >
          <button
            type="button"
            role="tab"
            aria-selected={mode === "episodic"}
            onClick={() => setMode("episodic")}
            className={`px-4 sm:px-7 py-2.5 sm:py-3 rounded-full font-label-caps text-[11px] sm:text-label-caps tracking-widest transition-all active:scale-[0.98] ${
              mode === "episodic"
                ? "bg-primary text-clinical-white shadow-double-bezel-dark"
                : "bg-clinical-white text-primary border border-data-node/40 hover:bg-surface-container"
            }`}
          >
            EPISODIC HEALTHCARE (CONVENTIONAL)
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === "continuous"}
            onClick={() => setMode("continuous")}
            className={`px-4 sm:px-7 py-2.5 sm:py-3 rounded-full font-label-caps text-[11px] sm:text-label-caps tracking-widest transition-all active:scale-[0.98] ${
              mode === "continuous"
                ? "bg-primary text-clinical-white shadow-double-bezel-dark"
                : "bg-clinical-white text-primary border border-data-node/40 hover:bg-surface-container"
            }`}
          >
            MRITUNJAY CONTINUOUS LAYER
          </button>
        </div>

        {/* Interactive Narrative Comparator Ledger */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Milestone Selection Timeline (5 cols) */}
          <div className="lg:col-span-5 bg-clinical-white border border-data-node/30 rounded-2xl shadow-double-bezel p-5 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-data-node/20 mb-5">
                <span className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
                  12-MONTH CLINICAL TIMELINE
                </span>
                <span className="font-mono text-[10px] text-secondary">
                  SELECT CHECKPOINT
                </span>
              </div>

              <div className="space-y-2.5">
                {MILESTONES.map((m, idx) => {
                  const isSelected = selectedMilestone === idx;
                  return (
                    <button
                      key={m.month}
                      type="button"
                      onClick={() => setSelectedMilestone(idx)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between active:scale-[0.99] gap-2 ${
                        isSelected
                          ? "bg-primary text-clinical-white border-primary shadow-sm"
                          : "bg-surface-container-low text-primary border-data-node/30 hover:border-primary/40 hover:bg-clinical-white"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span
                          className={`font-mono text-xs font-semibold px-2 py-0.5 rounded shrink-0 ${
                            isSelected
                              ? "bg-memory-glow/20 text-memory-glow"
                              : "bg-data-node/40 text-secondary"
                          }`}
                        >
                          {m.month}
                        </span>
                        <span className="font-headline-md text-xs sm:text-sm md:text-base leading-snug">
                          {m.title}
                        </span>
                      </div>
                      <span
                        className={`material-symbols-outlined text-sm shrink-0 ${
                          isSelected ? "text-memory-glow" : "text-data-node"
                        }`}
                      >
                        arrow_forward
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-data-node/20 font-mono text-[10px] text-secondary flex items-center justify-between">
              <span>ACTIVE ENCLAVE: MRITUNJAY-OS</span>
              <span>PARADIGM COMPARATOR</span>
            </div>
          </div>

          {/* Active Comparison Canvas (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${mode}-${selectedMilestone}`}
                initial={reduced ? undefined : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: EASE_OUT }}
                className={`h-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border flex flex-col justify-between shadow-double-bezel ${
                  mode === "continuous"
                    ? "bg-primary text-clinical-white border-memory-glow/25 shadow-double-bezel-dark"
                    : "bg-clinical-white text-primary border-data-node/40"
                }`}
              >
                <div>
                  <div
                    className={`flex items-center justify-between pb-4 mb-6 border-b ${
                      mode === "continuous"
                        ? "border-clinical-white/15 text-memory-glow"
                        : "border-data-node/20 text-secondary"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          mode === "continuous" ? "bg-memory-glow animate-pulse-subtle" : "bg-data-node"
                        }`}
                      />
                      <span className="font-mono text-xs font-semibold tracking-wider uppercase">
                        {mode === "continuous" ? "CONTINUOUS HEALTH MEMORY" : "CONVENTIONAL SILOED CARE"}
                      </span>
                    </div>
                    <span className="font-mono text-xs">
                      {activeMilestone.month}
                    </span>
                  </div>

                  <span className="font-mono text-[10px] sm:text-xs tracking-widest uppercase block mb-2 opacity-70">
                    EVENT ANALYSIS
                  </span>
                  <h3 className="font-headline-md text-2xl sm:text-3xl mb-4 leading-tight">
                    {activeMilestone.title}
                  </h3>

                  <div
                    className={`p-4 sm:p-6 rounded-2xl border mb-6 ${
                      mode === "continuous"
                        ? "bg-clinical-white/10 border-clinical-white/15"
                        : "bg-surface-container-low border-data-node/30"
                    }`}
                  >
                    <p className="font-body-lg text-base sm:text-lg leading-relaxed">
                      {mode === "continuous"
                        ? activeMilestone.continuousEvent
                        : activeMilestone.episodicEvent}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-xl">
                      {mode === "continuous" ? "verified" : "cancel"}
                    </span>
                    <span className="font-mono text-xs tracking-wider uppercase font-semibold">
                      {mode === "continuous"
                        ? activeMilestone.contextRetention
                        : "Context Discarded at Visit Conclusion"}
                    </span>
                  </div>
                </div>

                <div
                  className={`pt-6 mt-8 border-t flex items-center justify-between font-mono text-[11px] ${
                    mode === "continuous"
                      ? "border-clinical-white/15 text-memory-glow"
                      : "border-data-node/20 text-secondary"
                  }`}
                >
                  <span>
                    {mode === "continuous"
                      ? "THE NARRATIVE CONTINUES"
                      : "THE STORY RESTARTS FROM ZERO"}
                  </span>
                  <span className="material-symbols-outlined text-base">
                    {mode === "continuous" ? "trending_up" : "restart_alt"}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

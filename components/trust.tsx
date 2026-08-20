"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState, type ReactElement } from "react";
import { Reveal } from "./intersection-reveal";

interface TrustTier {
  readonly id: string;
  readonly label: string;
  readonly tag: string;
  readonly actor: string;
  readonly body: string;
  readonly explainability: string;
  readonly emphasis: "low" | "mid" | "high";
}

const TRUST_TIERS: ReadonlyArray<TrustTier> = [
  {
    id: "ai",
    label: "AI-GENERATED INFORMATION",
    tag: "TIER 01 // SYNTHESIS",
    actor: "Mritunjay Intelligence Layer",
    body: "What the system organized for you: your 36-month timeline, lab trends, and adverse reaction signatures, correlated for clinician review.",
    explainability: "Explainability: Shows the exact EHR source document and date timestamp for every correlated point.",
    emphasis: "low",
  },
  {
    id: "doctor_review",
    label: "DOCTOR-REVIEWED ADVICE",
    tag: "TIER 02 // VALIDATION",
    actor: "Attending Specialist / Cardiologist",
    body: "A clinician checks the synthesis, confirms relevant correlations, and removes clerical noise before the consultation begins.",
    explainability: "Explainability: Doctor verifies clinical brief accuracy and modifies pre-consultation assumptions.",
    emphasis: "mid",
  },
  {
    id: "clinical_decision",
    label: "FINAL CLINICAL DECISION",
    tag: "TIER 03 // AUTHORITY",
    actor: "Licensed Physician (Sole Decision Maker)",
    body: "Your doctor owns the diagnosis and treatment plan. AI assists and prepares; the physician holds ultimate clinical authority.",
    explainability: "Explainability: Pure human medical judgment. The doctor explains why in plain language.",
    emphasis: "high",
  },
];

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export function Trust(): ReactElement {
  const reduced = useReducedMotion();
  const [selectedTier, setSelectedTier] = useState<number>(2); // Default to Tier 3 (Final Clinical Decision)

  const activeTier = TRUST_TIERS[selectedTier];

  return (
    <section
      id="trust"
      className="py-16 sm:py-24 lg:py-section-gap-lg px-4 sm:px-6 md:px-gutter bg-surface-bright"
    >
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 items-center">
        <Reveal className="lg:col-span-6">
          <span className="font-mono text-xs sm:text-label-caps text-primary tracking-[0.25em] block mb-3 sm:mb-4 uppercase font-semibold">
            TRUST BEFORE INTELLIGENCE
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-headline-lg text-primary leading-tight mb-6">
            AI prepares. Doctors decide.
          </h2>
          <p className="font-body-lg text-base sm:text-body-lg text-on-surface-variant mb-8 leading-relaxed">
            Mritunjay never replaces clinical judgment. It organizes what is known
            and prepares the doctor, who owns the decision. Every step is explainable:
            you can always ask why, and the system will answer in plain language.
          </p>
          <div className="space-y-4 sm:space-y-5">
            {[
              { icon: "account_balance", label: "The doctor remains accountable for every clinical decision" },
              { icon: "verified", label: "Suggestions are always easy to review, verify, or change" },
              { icon: "lock", label: "Your narrative belongs to you, with access you control" },
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

        {/* Interactive Trust Hierarchy Ledger (6 cols) */}
        <Reveal delay={0.2} className="lg:col-span-6">
          <div className="bg-surface-container-low border border-data-node/30 rounded-2xl sm:rounded-3xl shadow-double-bezel p-5 sm:p-7 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-data-node/20 font-mono text-xs">
              <span className="font-semibold text-primary tracking-wider uppercase">
                THREE-TIER CLINICAL GOVERNANCE
              </span>
              <span className="text-secondary text-[10px]">CLICK TO INSPECT</span>
            </div>

            <div className="space-y-3">
              {TRUST_TIERS.map((tier, idx) => {
                const isSelected = selectedTier === idx;
                return (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSelectedTier(idx)}
                    className={`w-full text-left rounded-xl p-4 sm:p-5 border transition-all active:scale-[0.99] ${
                      isSelected
                        ? "bg-primary text-clinical-white border-memory-glow/30 shadow-double-bezel-dark"
                        : "bg-clinical-white text-primary border-data-node/30 hover:border-primary/40 hover:bg-surface-container"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`font-mono text-[10px] sm:text-xs font-semibold tracking-widest uppercase ${
                          isSelected ? "text-memory-glow" : "text-primary"
                        }`}
                      >
                        {tier.label}
                      </span>
                      <span
                        className={`font-mono text-[9px] px-2 py-0.5 rounded ${
                          isSelected
                            ? "bg-clinical-white/15 text-memory-glow"
                            : "bg-surface-container-low text-secondary"
                        }`}
                      >
                        {tier.tag}
                      </span>
                    </div>

                    <p
                      className={`font-body-md text-xs sm:text-sm leading-relaxed mb-2 ${
                        isSelected ? "text-clinical-white/90" : "text-on-surface-variant"
                      }`}
                    >
                      {tier.body}
                    </p>

                    <div
                      className={`pt-2 border-t font-mono text-[10px] flex items-center justify-between ${
                        isSelected ? "border-clinical-white/15 text-memory-glow/90" : "border-data-node/20 text-secondary"
                      }`}
                    >
                      <span>ACTOR: {tier.actor}</span>
                      <span>{isSelected ? "ACTIVE VIEW" : "INSPECT"}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Explainability Callout */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTier.id}
                initial={reduced ? undefined : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -4 }}
                transition={{ duration: 0.3, ease: EASE_OUT }}
                className="p-3.5 rounded-xl bg-clinical-white border border-data-node/30 text-xs font-mono text-primary flex items-start gap-2.5 shadow-xs"
              >
                <span className="material-symbols-outlined text-base text-primary mt-0.5 shrink-0">
                  verified_user
                </span>
                <p className="leading-snug">
                  {activeTier.explainability}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

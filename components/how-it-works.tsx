"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, type ReactElement } from "react";
import { Reveal } from "./intersection-reveal";
import { Premium3DCard } from "./premium-3d-card";

type JourneyKind = "patient" | "doctor";

interface JourneyStep {
  readonly title: string;
  readonly body: string;
  readonly artifactLabel: string;
  readonly artifactHeadline: string;
  readonly artifactTelemetry: ReadonlyArray<{ readonly label: string; readonly value: string }>;
  readonly artifactNote: string;
}

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const JOURNEYS: Record<JourneyKind, ReadonlyArray<JourneyStep>> = {
  patient: [
    {
      title: "Something feels wrong",
      body: "Fear arrives first. Mritunjay mitigates anxiety instead of asking for paperwork.",
      artifactLabel: "INITIAL ENCOUNTER",
      artifactHeadline: "Calm Triage",
      artifactTelemetry: [
        { label: "STATUS", value: "CALM ASSIST ACTIVE" },
        { label: "HISTORY", value: "SECURE ENCLAVE" },
      ],
      artifactNote: "No forms. No timers. Emotional acknowledgment before clinical data.",
    },
    {
      title: "Context is established",
      body: "We already know your history, allergies, and medications.",
      artifactLabel: "SOVEREIGN IDENTITY",
      artifactHeadline: "Context Recall",
      artifactTelemetry: [
        { label: "RECORDS", value: "12 MONTHS INDEXED" },
        { label: "ALLERGIES", value: "PENICILLIN FLAGGED" },
      ],
      artifactNote: "Verified facts surface instantly. You never repeat past visits.",
    },
    {
      title: "Natural description",
      body: "Speak or type freely. No interrogations.",
      artifactLabel: "NARRATIVE STREAM",
      artifactHeadline: "Voice & Text Synthesis",
      artifactTelemetry: [
        { label: "INPUT", value: "CONVERSATIONAL" },
        { label: "OVERHEAD", value: "ZERO FORMS" },
      ],
      artifactNote: "Clinical AI maps symptoms against your baseline naturally.",
    },
    {
      title: "Doctor matched & prepared",
      body: "The right clinician receives a brief before you sit down.",
      artifactLabel: "PHYSICIAN DISPATCH",
      artifactHeadline: "Specialist Briefing",
      artifactTelemetry: [
        { label: "SPECIALIST", value: "DR. V. KHANDELWAL" },
        { label: "STATUS", value: "DELIVERED" },
      ],
      artifactNote: "Your doctor reviews a verified clinical brief prior to opening the door.",
    },
    {
      title: "Continuous recovery",
      body: "You know if you are improving. The story is never lost.",
      artifactLabel: "LONGITUDINAL RECOVERY",
      artifactHeadline: "Recovery Monitoring",
      artifactTelemetry: [
        { label: "TREND", value: "94% IMPROVING" },
        { label: "NEXT VISIT", value: "AUTO-SCHEDULED" },
      ],
      artifactNote: "The next consultation builds seamlessly on this memory.",
    },
  ],
  doctor: [
    {
      title: "Zero blank charts",
      body: "Every patient arrives with context.",
      artifactLabel: "QUEUE INTAKE",
      artifactHeadline: "Prepared Schedule",
      artifactTelemetry: [
        { label: "QUEUE", value: "8 PATIENTS PREPARED" },
        { label: "CONTEXT", value: "100% COMPLETE" },
      ],
      artifactNote: "Every entry features pre-summarized symptoms and prior diagnoses.",
    },
    {
      title: "One-screen brief",
      body: "Glanceable history, medications, and recent changes.",
      artifactLabel: "PATIENT LEDGER",
      artifactHeadline: "Synthesized Brief",
      artifactTelemetry: [
        { label: "READ TIME", value: "45 SECONDS" },
        { label: "BASELINE", value: "HYPERTENSION" },
      ],
      artifactNote: "Replaces 20-page EHR PDFs with a single clinical picture.",
    },
    {
      title: "AI clinical reasoning",
      body: "Suggestions arrive with citations, ready for review.",
      artifactLabel: "REASONING ENGINE",
      artifactHeadline: "Differential Support",
      artifactTelemetry: [
        { label: "EVIDENCE", value: "AHA 2026 GUIDELINES" },
        { label: "CERTAINTY", value: "EXPLICITLY STATED" },
      ],
      artifactNote: "The system never pretends to be certain when evidence is sparse.",
    },
    {
      title: "Physician in command",
      body: "Accept, adjust, or reject in one click.",
      artifactLabel: "CLINICIAN OVERRIDE",
      artifactHeadline: "Diagnostic Authority",
      artifactTelemetry: [
        { label: "CONTROL", value: "PHYSICIAN COMMAND" },
        { label: "LOG", value: "AUDITABLE" },
      ],
      artifactNote: "Instant rationale logging preserves the human clinical decision.",
    },
  ],
};

function ArtifactCard({
  step,
  stepIndex,
  totalSteps,
}: {
  readonly step: JourneyStep;
  readonly stepIndex: number;
  readonly totalSteps: number;
}): ReactElement {
  return (
    <div className="bg-clinical-white border border-data-node/40 rounded-2xl sm:rounded-3xl shadow-double-bezel overflow-hidden p-5 sm:p-7 flex flex-col justify-between h-auto lg:h-full min-h-[320px]">
      <div>
        <div className="flex items-center justify-between pb-4 border-b border-data-node/20 mb-5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary" />
            <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-widest text-primary uppercase">
              {step.artifactLabel}
            </span>
          </div>
          <span className="font-mono text-[10px] text-secondary">
            STAGE {stepIndex + 1} OF {totalSteps}
          </span>
        </div>

        <div className="mb-5 sm:mb-6">
          <span className="font-mono text-[9px] sm:text-[10px] text-secondary tracking-widest uppercase block mb-1">
            CLINICAL SIMULATION
          </span>
          <h3 className="font-headline-md text-lg sm:text-2xl text-primary leading-snug">
            {step.artifactHeadline}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 sm:mb-6">
          {step.artifactTelemetry.map((item) => (
            <div key={item.label} className="bg-surface-container-low p-3.5 rounded-xl border border-data-node/30">
              <span className="font-mono text-[9px] text-secondary uppercase tracking-wider block mb-1">
                {item.label}
              </span>
              <span className="font-mono text-xs sm:text-sm font-semibold text-primary block leading-snug">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-primary/5 border border-primary/15 text-primary mb-5 sm:mb-6">
          <p className="font-body-md text-xs sm:text-sm leading-relaxed">{step.artifactNote}</p>
        </div>
      </div>

      <div className="pt-4 border-t border-data-node/20 flex items-center justify-between font-mono text-[10px] text-secondary">
        <span>MRITUNJAY OS</span>
        <span className="text-primary font-semibold">VERIFIED</span>
      </div>
    </div>
  );
}

export function HowItWorks(): ReactElement {
  const reduced = useReducedMotion();
  const [journey, setJourney] = useState<JourneyKind>("patient");
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth parallax translation on the right column
  const artifactY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const activeJourney = JOURNEYS[journey];
  const activeStep = activeJourney[Math.min(activeStepIndex, activeJourney.length - 1)];

  const handleJourneyChange = (newJourney: JourneyKind): void => {
    setJourney(newJourney);
    setActiveStepIndex(0);
  };

  return (
    <section id="how-it-works" className="py-[25px] sm:py-10 px-4 sm:px-6 md:px-gutter bg-surface-bright" ref={containerRef}>
      <div className="max-w-container-max mx-auto">
        <Reveal className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-headline-lg text-primary leading-tight uppercase tracking-wide">
            HOW IT WORKS
          </h2>
          <p className="font-body-lg text-base sm:text-body-lg text-secondary max-w-2xl mx-auto mt-4 sm:mt-6 leading-relaxed">
            The patient experiences relief. The doctor experiences focus.
          </p>
        </Reveal>

        <div role="tablist" aria-label="Select journey view" className="flex justify-center gap-3 sm:gap-4 mb-10 sm:mb-14">
          <button
            type="button"
            role="tab"
            aria-selected={journey === "patient"}
            onClick={() => handleJourneyChange("patient")}
            className={`px-5 sm:px-8 py-3 rounded-full font-label-caps text-xs sm:text-label-caps tracking-widest transition-all active:scale-[0.98] ${
              journey === "patient" ? "bg-primary text-clinical-white shadow-double-bezel-dark" : "bg-clinical-white text-primary border border-data-node/40 hover:bg-surface-container"
            }`}
          >
            PATIENT JOURNEY
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={journey === "doctor"}
            onClick={() => handleJourneyChange("doctor")}
            className={`px-5 sm:px-8 py-3 rounded-full font-label-caps text-xs sm:text-label-caps tracking-widest transition-all active:scale-[0.98] ${
              journey === "doctor" ? "bg-primary text-clinical-white shadow-double-bezel-dark" : "bg-clinical-white text-primary border border-data-node/40 hover:bg-surface-container"
            }`}
          >
            DOCTOR JOURNEY
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start max-w-6xl mx-auto">
          <div className="lg:col-span-6">
            <ol role="tabpanel" className="relative space-y-2.5 sm:space-y-3">
              {activeJourney.map((step, i) => {
                const isSelected = activeStepIndex === i;
                const isNextTarget = activeStepIndex + 1 === i;
                
                return (
                  <li key={step.title} className="relative">
                    <button
                      type="button"
                      onClick={() => setActiveStepIndex(i)}
                      className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all flex flex-col gap-3 active:scale-[0.99] relative overflow-hidden ${
                        isSelected
                          ? "bg-primary text-clinical-white border-primary shadow-double-bezel-dark"
                          : "bg-surface-container-low text-primary border-data-node/30 hover:border-primary/40 hover:bg-clinical-white"
                      }`}
                    >
                      <div className="flex gap-3.5 sm:gap-4 items-start w-full pr-8">
                        <div className="flex flex-col items-center shrink-0 mt-0.5">
                          <span
                            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-mono text-xs font-semibold shadow-xs ${
                              isSelected ? "bg-memory-glow text-primary font-bold" : "bg-clinical-white text-secondary border border-data-node/40"
                            }`}
                          >
                            {i + 1}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className={`font-headline-md text-base sm:text-lg mb-1 leading-snug ${isSelected ? "text-clinical-white" : "text-primary"}`}>
                            {step.title}
                          </h4>
                          <p className={`font-body-md text-xs sm:text-sm leading-relaxed ${isSelected ? "text-clinical-white/80" : "text-on-surface-variant"}`}>
                            {step.body}
                          </p>
                        </div>
                      </div>

                      {/* The Waving Pointer */}
                      {isNextTarget && (
                        <motion.div
                          layoutId="wagging-pointer"
                          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-2xl sm:text-3xl text-primary drop-shadow-md z-10"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <i className="fa-solid fa-arrow-pointer fa-wag text-primary" style={{ filter: "drop-shadow(0px 2px 4px rgba(0,23,54,0.2))" }}></i>
                        </motion.div>
                      )}

                      {isSelected && (
                        <div className="lg:hidden mt-2 pt-3 border-t border-clinical-white/20">
                          <ArtifactCard step={step} stepIndex={i} totalSteps={activeJourney.length} />
                        </div>
                      )}
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="hidden lg:block lg:col-span-6 sticky top-28">
            <motion.div style={{ y: reduced ? 0 : artifactY }}>
              <Premium3DCard tiltAmount={5} glareOpacity={0.12}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${journey}-${activeStepIndex}`}
                    initial={reduced ? undefined : { opacity: 0, scale: 0.95, rotateX: 10 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                    exit={reduced ? undefined : { opacity: 0, scale: 0.95, rotateX: -10 }}
                    transition={{ duration: 0.35, ease: EASE_OUT }}
                    className="h-full"
                  >
                    <ArtifactCard step={activeStep} stepIndex={activeStepIndex} totalSteps={activeJourney.length} />
                  </motion.div>
                </AnimatePresence>
              </Premium3DCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

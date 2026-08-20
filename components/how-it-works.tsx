"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState, type ReactElement } from "react";
import { Reveal } from "./intersection-reveal";

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
      body: "Fear and uncertainty arrive first. Mritunjay should never add to them.",
      artifactLabel: "INITIAL ENCOUNTER TRIAGE",
      artifactHeadline: "Calm Intake & Anxiety Mitigation",
      artifactTelemetry: [
        { label: "TRIAGE STATUS", value: "CALM ASSIST ACTIVE" },
        { label: "PRIOR HISTORY", value: "ENCRYPTED ENCLAVE READY" },
      ],
      artifactNote: "No forms. No countdown timers. The system acknowledges emotional vulnerability before clinical data.",
    },
    {
      title: "You open Mritunjay",
      body: "The system already knows your history, allergies, and current medications.",
      artifactLabel: "SOVEREIGN HEALTH IDENTITY",
      artifactHeadline: "Context Recall Before Generation",
      artifactTelemetry: [
        { label: "RECORD SPAN", value: "36 MONTHS INDEXED" },
        { label: "KNOWN ALLERGIES", value: "PENICILLIN (FLAGGED)" },
      ],
      artifactNote: "The interface surfaces verified facts so you never have to repeat past hospital visits or dosages.",
    },
    {
      title: "You describe it naturally",
      body: "No forms, no repeating the dates and doses you already gave before.",
      artifactLabel: "NATURAL NARRATIVE STREAM",
      artifactHeadline: "Voice & Text Synthesis",
      artifactTelemetry: [
        { label: "INPUT MODE", value: "CONVERSATIONAL" },
        { label: "CLERICAL OVERHEAD", value: "0 FORMS REQUIRED" },
      ],
      artifactNote: "Speak or type freely. Clinical AI maps symptoms against your baseline without interrogating you.",
    },
    {
      title: "Memory and reports are retrieved",
      body: "Old records and labs are read on your behalf, then only the missing questions are asked.",
      artifactLabel: "LONGITUDINAL CORRELATION",
      artifactHeadline: "EHR & Diagnostic Cross-Referencing",
      artifactTelemetry: [
        { label: "LAB VALUES", value: "14 PANELS ALIGNED" },
        { label: "CARDIAC TIMELINE", value: "2024 TO 2026 SYNTHESIZED" },
      ],
      artifactNote: "Previous discharge summaries and ECG tracings are correlated into a single cohesive narrative.",
    },
    {
      title: "Your doctor is matched",
      body: "The right clinician receives a prepared brief before you ever sit down.",
      artifactLabel: "PHYSICIAN PRE-DISPATCH",
      artifactHeadline: "Cardiology Specialist Briefing",
      artifactTelemetry: [
        { label: "SPECIALIST", value: "DR. V. KHANDELWAL, MD" },
        { label: "BRIEF STATUS", value: "DELIVERED TO WORKSTATION" },
      ],
      artifactNote: "Your doctor reviews a verified clinical brief prior to opening the video or examination door.",
    },
    {
      title: "Consultation with full context",
      body: "Your doctor reasons and decides, knowing they are not starting from zero.",
      artifactLabel: "ACTIVE CONSULTATION",
      artifactHeadline: "Human Connection at the Center",
      artifactTelemetry: [
        { label: "SCREEN TIME", value: "REDUCED BY 70%" },
        { label: "DOCTOR FOCUS", value: "100% DIRECT CARE" },
      ],
      artifactNote: "The doctor spends fifteen minutes looking at you, rather than eleven minutes searching an EHR.",
    },
    {
      title: "Prescription becomes a care plan",
      body: "Medicine reminders and next steps are clear the moment you leave.",
      artifactLabel: "DISCHARGE SYNTHESIS",
      artifactHeadline: "Actionable Care Protocol",
      artifactTelemetry: [
        { label: "TITRATION", value: "DAY 01 TO 14 SCHEDULED" },
        { label: "DRUG INTERACTIONS", value: "0 CONFLICTS DETECTED" },
      ],
      artifactNote: "Prescriptions are translated into everyday schedules with precise symptom tracking milestones.",
    },
    {
      title: "Recovery is guided",
      body: "You know whether you are improving, and the story is never lost again.",
      artifactLabel: "LONGITUDINAL RECOVERY",
      artifactHeadline: "Continuous Recovery Monitoring",
      artifactTelemetry: [
        { label: "RECOVERY TREND", value: "94% IMPROVEMENT TRAJECTORY" },
        { label: "NEXT FOLLOW-UP", value: "AUTOMATICALLY TIMED" },
      ],
      artifactNote: "You receive check-ins that evaluate whether you are healing. The next consultation builds on this memory.",
    },
  ],
  doctor: [
    {
      title: "Today's queue",
      body: "Every patient arrives with context, never a blank chart.",
      artifactLabel: "CLINICAL QUEUE INTAKE",
      artifactHeadline: "Context-Prepared Schedule",
      artifactTelemetry: [
        { label: "QUEUE STATUS", value: "8 PATIENTS PREPARED" },
        { label: "CONTEXT COVERAGE", value: "100% COMPLETE" },
      ],
      artifactNote: "Zero blank charts. Every entry features pre-summarized symptoms and relevant prior diagnoses.",
    },
    {
      title: "Patient summary",
      body: "A one-screen brief of history, medications, allergies, and recent changes.",
      artifactLabel: "ONE-SCREEN BRIEF",
      artifactHeadline: "Synthesized Patient Ledger",
      artifactTelemetry: [
        { label: "READ TIME", value: "45 SECONDS" },
        { label: "CHRONIC BASELINE", value: "HYPERTENSION STAGE 1" },
      ],
      artifactNote: "Replaces 20-page EHR PDFs with a single, glanceable clinical picture.",
    },
    {
      title: "Medical timeline",
      body: "Labs and events are organized in order, so patterns surface on their own.",
      artifactLabel: "TEMPORAL TELEMETRY",
      artifactHeadline: "Longitudinal Event Ledger",
      artifactTelemetry: [
        { label: "TIMELINE SPAN", value: "3 YEARS CHRONOLOGICAL" },
        { label: "CORRELATIONS", value: "MEDICATION VS BP SPIKE" },
      ],
      artifactNote: "Organizes lab trends and symptoms chronologically so causal clinical patterns emerge naturally.",
    },
    {
      title: "AI clinical reasoning",
      body: "Suggestions arrive with evidence and limits, ready for review.",
      artifactLabel: "REASONING ENGINE",
      artifactHeadline: "Evidence-Backed Differential Support",
      artifactTelemetry: [
        { label: "CITATION BASE", value: "ACC/AHA 2026 GUIDELINES" },
        { label: "CERTAINTY BOUND", value: "EXPLICITLY STATED" },
      ],
      artifactNote: "AI surfaces clinical suggestions with underlying citations. The system never pretends to be certain when evidence is sparse.",
    },
    {
      title: "Review and modify",
      body: "You stay in control. Every suggestion is easy to verify or change.",
      artifactLabel: "CLINICIAN OVERRIDE",
      artifactHeadline: "Direct Diagnostic Authority",
      artifactTelemetry: [
        { label: "CONTROL STATUS", value: "PHYSICIAN IN COMMAND" },
        { label: "DECISION LOG", value: "AUDITABLE & EXPLAINABLE" },
      ],
      artifactNote: "Every suggestion can be accepted, adjusted, or rejected in one click with instant rationale logging.",
    },
    {
      title: "Prescription and follow-up",
      body: "The care plan is shared, so the patient leaves with the same understanding.",
      artifactLabel: "CARE PLAN DISPATCH",
      artifactHeadline: "Synchronized Care Agreement",
      artifactTelemetry: [
        { label: "DISPATCH TARGET", value: "PATIENT MOBILE APP" },
        { label: "PHARMACY ROUTE", value: "E-SCRIPT VERIFIED" },
      ],
      artifactNote: "The patient and physician leave the encounter with identical clarity regarding next clinical steps.",
    },
    {
      title: "Feedback improves the system",
      body: "Corrections teach the AI, so the next consultation begins even better informed.",
      artifactLabel: "RECURSIVE LEARNING",
      artifactHeadline: "Compounding Clinical Memory",
      artifactTelemetry: [
        { label: "MODEL REFINEMENT", value: "LOCAL PRACTICE CALIBRATED" },
        { label: "SYSTEM MEMORY", value: "EXPANDED FOR NEXT VISIT" },
      ],
      artifactNote: "Every clinical nuance and patient-specific titration teaches the local memory layer for tomorrow.",
    },
  ],
};

export function HowItWorks(): ReactElement {
  const reduced = useReducedMotion();
  const [journey, setJourney] = useState<JourneyKind>("patient");
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const activeJourney = JOURNEYS[journey];
  const activeStep = activeJourney[Math.min(activeStepIndex, activeJourney.length - 1)];

  const handleJourneyChange = (newJourney: JourneyKind): void => {
    setJourney(newJourney);
    setActiveStepIndex(0);
  };

  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-24 lg:py-section-gap-lg px-4 sm:px-6 md:px-gutter bg-clinical-white"
    >
      <div className="max-w-container-max mx-auto">
        <Reveal className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <span className="font-mono text-xs sm:text-label-caps text-primary tracking-[0.25em] block mb-3 sm:mb-4 uppercase font-semibold">
            HOW IT WORKS
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-headline-lg text-primary leading-tight">
            One continuous journey, for patient and doctor alike.
          </h2>
          <p className="font-body-lg text-base sm:text-body-lg text-secondary max-w-2xl mx-auto mt-4 sm:mt-6 leading-relaxed">
            The next step is always obvious, because the system always knows where you are.
          </p>
        </Reveal>

        {/* Journey Selector */}
        <div
          role="tablist"
          aria-label="Choose the journey to explore"
          className="flex justify-center gap-3 sm:gap-4 mb-10 sm:mb-14"
        >
          {(["patient", "doctor"] as const).map((kind) => {
            const active = journey === kind;
            return (
              <button
                key={kind}
                type="button"
                role="tab"
                aria-selected={active}
                aria-controls={`journey-${kind}`}
                onClick={() => handleJourneyChange(kind)}
                className={`px-5 sm:px-7 py-3 rounded-full font-label-caps text-xs sm:text-label-caps tracking-widest transition-all active:scale-[0.98] ${
                  active
                    ? "bg-primary text-clinical-white shadow-double-bezel-dark"
                    : "bg-clinical-white text-primary border border-primary/30 hover:bg-surface-container-low"
                }`}
              >
                {kind === "patient" ? "PATIENT JOURNEY" : "DOCTOR JOURNEY"}
              </button>
            );
          })}
        </div>

        {/* Two-Pane Clinical Journey Simulator Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start max-w-6xl mx-auto">
          {/* Left Pane: Interactive Step Stepper (6 cols) */}
          <div className="lg:col-span-6">
            <ol
              id={`journey-${journey}`}
              role="tabpanel"
              className="relative space-y-2 sm:space-y-3"
            >
              {activeJourney.map((step, i) => {
                const isSelected = activeStepIndex === i;
                return (
                  <li key={step.title}>
                    <button
                      type="button"
                      onClick={() => setActiveStepIndex(i)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all flex gap-3.5 sm:gap-4 items-start active:scale-[0.99] ${
                        isSelected
                          ? "bg-primary text-clinical-white border-primary shadow-double-bezel-dark"
                          : "bg-surface-container-low text-primary border-data-node/30 hover:border-primary/40 hover:bg-clinical-white"
                      }`}
                    >
                      <div className="flex flex-col items-center shrink-0 mt-0.5">
                        <span
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-mono text-xs font-semibold shadow-xs ${
                            isSelected
                              ? "bg-memory-glow text-primary font-bold"
                              : "bg-clinical-white text-secondary border border-data-node/40"
                          }`}
                        >
                          {i + 1}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4
                          className={`font-headline-md text-base sm:text-lg mb-1 leading-snug ${
                            isSelected ? "text-clinical-white" : "text-primary"
                          }`}
                        >
                          {step.title}
                        </h4>
                        <p
                          className={`font-body-md text-xs sm:text-sm leading-relaxed ${
                            isSelected ? "text-clinical-white/80" : "text-on-surface-variant"
                          }`}
                        >
                          {step.body}
                        </p>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Right Pane: Live Synchronized Clinical Preview Artifact (6 cols) */}
          <div className="lg:col-span-6 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${journey}-${activeStepIndex}`}
                initial={reduced ? undefined : { opacity: 0, scale: 0.98, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, scale: 0.98, y: -6 }}
                transition={{ duration: 0.35, ease: EASE_OUT }}
                className="bg-clinical-white border border-data-node/40 rounded-2xl sm:rounded-3xl shadow-double-bezel overflow-hidden p-5 sm:p-7"
              >
                {/* Artifact Header */}
                <div className="flex items-center justify-between pb-4 border-b border-data-node/20 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                    <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-widest text-primary uppercase">
                      {activeStep.artifactLabel}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-secondary">
                    STAGE {activeStepIndex + 1} OF {activeJourney.length}
                  </span>
                </div>

                {/* Artifact Headline */}
                <div className="mb-6">
                  <span className="font-mono text-[9px] sm:text-[10px] text-secondary tracking-widest uppercase block mb-1">
                    CLINICAL SIMULATION PREVIEW
                  </span>
                  <h3 className="font-headline-md text-xl sm:text-2xl text-primary leading-snug">
                    {activeStep.artifactHeadline}
                  </h3>
                </div>

                {/* Artifact Live Telemetry Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {activeStep.artifactTelemetry.map((item) => (
                    <div
                      key={item.label}
                      className="bg-surface-container-low p-3.5 rounded-xl border border-data-node/30"
                    >
                      <span className="font-mono text-[9px] text-secondary uppercase tracking-wider block mb-1">
                        {item.label}
                      </span>
                      <span className="font-mono text-xs sm:text-sm font-semibold text-primary block truncate">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Artifact Clinical Note */}
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/15 text-primary mb-6">
                  <p className="font-body-md text-xs sm:text-sm leading-relaxed">
                    {activeStep.artifactNote}
                  </p>
                </div>

                {/* Footer Status */}
                <div className="pt-4 border-t border-data-node/20 flex items-center justify-between font-mono text-[10px] text-secondary">
                  <span>MRITUNJAY INTELLIGENCE WORKSTATION</span>
                  <span className="text-primary font-semibold">VERIFIED PROTOCOL</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

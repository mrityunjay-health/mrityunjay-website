"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState, type ReactElement } from "react";
import { Reveal } from "./intersection-reveal";

type JourneyKind = "patient" | "doctor";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const JOURNEYS: Record<
  JourneyKind,
  ReadonlyArray<{ readonly title: string; readonly body: string }>
> = {
  patient: [
    {
      title: "Something feels wrong",
      body: "Fear and uncertainty arrive first. Mritunjay should never add to them.",
    },
    {
      title: "You open Mritunjay",
      body: "The system already knows your history, allergies, and current medications.",
    },
    {
      title: "You describe it naturally",
      body: "No forms, no repeating the dates and doses you already gave before.",
    },
    {
      title: "Memory and reports are retrieved",
      body: "Old records and labs are read on your behalf, then only the missing questions are asked.",
    },
    {
      title: "Your doctor is matched",
      body: "The right clinician receives a prepared brief before you ever sit down.",
    },
    {
      title: "Consultation with full context",
      body: "Your doctor reasons and decides, knowing they are not starting from zero.",
    },
    {
      title: "Prescription becomes a care plan",
      body: "Medicine reminders and next steps are clear the moment you leave.",
    },
    {
      title: "Recovery is guided",
      body: "You know whether you are improving, and the story is never lost again.",
    },
  ],
  doctor: [
    {
      title: "Today's queue",
      body: "Every patient arrives with context, never a blank chart.",
    },
    {
      title: "Patient summary",
      body: "A one-screen brief of history, medications, allergies, and recent changes.",
    },
    {
      title: "Medical timeline",
      body: "Labs and events are organized in order, so patterns surface on their own.",
    },
    {
      title: "AI clinical reasoning",
      body: "Suggestions arrive with evidence and limits, ready for review.",
    },
    {
      title: "Review and modify",
      body: "You stay in control. Every suggestion is easy to verify or change.",
    },
    {
      title: "Prescription and follow-up",
      body: "The care plan is shared, so the patient leaves with the same understanding.",
    },
    {
      title: "Feedback improves the system",
      body: "Corrections teach the AI, so the next consultation begins even better informed.",
    },
  ],
};

export function HowItWorks(): ReactElement {
  const reduced = useReducedMotion();
  const [journey, setJourney] = useState<JourneyKind>("patient");

  const activeJourney = JOURNEYS[journey];

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
                onClick={() => setJourney(kind)}
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

        {/* Stepped Timeline */}
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.ol
              key={journey}
              id={`journey-${journey}`}
              role="tabpanel"
              initial={reduced ? undefined : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.5, ease: EASE_OUT }}
              className="relative space-y-4 sm:space-y-5"
            >
              {activeJourney.map((step, i) => (
                <li key={step.title} className="flex gap-4 sm:gap-6 items-start">
                  <div className="flex flex-col items-center shrink-0">
                    <span className="w-9 h-9 rounded-full bg-primary text-clinical-white flex items-center justify-center font-mono text-xs font-semibold shadow-sm border border-memory-glow/25">
                      {i + 1}
                    </span>
                    {i < activeJourney.length - 1 && (
                      <span className="w-px flex-1 min-h-6 my-1 bg-data-node/50" aria-hidden="true" />
                    )}
                  </div>
                  <div className="pt-1.5 pb-1">
                    <h4 className="font-headline-md text-base sm:text-lg text-primary mb-1">
                      {step.title}
                    </h4>
                    <p className="font-body-md text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </motion.ol>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

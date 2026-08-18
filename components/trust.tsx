import type { ReactElement } from "react";
import { Reveal } from "./intersection-reveal";

const TRUST_TIERS: ReadonlyArray<{
  readonly label: string;
  readonly body: string;
  readonly emphasis: "low" | "mid" | "high";
}> = [
  {
    label: "AI-GENERATED INFORMATION",
    body: "What the system organized for you: your history, reports, and correlations, assembled for review.",
    emphasis: "low",
  },
  {
    label: "DOCTOR-REVIEWED ADVICE",
    body: "A clinician checks the synthesis, confirms what matters, and corrects what does not.",
    emphasis: "mid",
  },
  {
    label: "FINAL CLINICAL DECISION",
    body: "Your doctor owns the diagnosis and treatment. AI assists, never replaces.",
    emphasis: "high",
  },
];

export function Trust(): ReactElement {
  return (
    <section
      id="trust"
      className="py-16 sm:py-24 lg:py-section-gap-lg px-4 sm:px-6 md:px-gutter bg-surface-bright"
    >
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-center">
        <Reveal>
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

        <Reveal delay={0.2}>
          <div className="bg-surface-container-low border border-data-node/30 rounded-2xl shadow-double-bezel p-5 sm:p-8 space-y-4 sm:space-y-5">
            {TRUST_TIERS.map((tier) => (
              <div
                key={tier.label}
                className={`rounded-xl p-4 sm:p-5 border transition-all ${
                  tier.emphasis === "high"
                    ? "bg-primary text-clinical-white border-memory-glow/20 shadow-double-bezel-dark"
                    : tier.emphasis === "mid"
                      ? "bg-clinical-white text-primary border-primary/25 shadow-sm"
                      : "bg-clinical-white/60 text-primary border-data-node/30"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`font-mono text-[10px] sm:text-xs font-semibold tracking-widest uppercase ${
                      tier.emphasis === "high" ? "text-memory-glow" : "text-primary"
                    }`}
                  >
                    {tier.label}
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      tier.emphasis === "high"
                        ? "bg-memory-glow"
                        : tier.emphasis === "mid"
                          ? "bg-primary"
                          : "bg-data-node"
                    }`}
                    aria-hidden="true"
                  />
                </div>
                <p
                  className={`font-body-md text-xs sm:text-sm leading-relaxed ${
                    tier.emphasis === "high" ? "text-clinical-white/90" : "text-on-surface-variant"
                  }`}
                >
                  {tier.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

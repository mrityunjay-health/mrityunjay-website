import type { ReactElement } from "react";
import { Reveal } from "./intersection-reveal";

const PAIN_POINTS: ReadonlyArray<{
  readonly icon: string;
  readonly label: string;
  readonly heading: string;
  readonly points: ReadonlyArray<string>;
}> = [
  {
    icon: "person",
    label: "PATIENTS",
    heading: "Their story resets with every visit.",
    points: [
      "Repeat their history to a new doctor each time.",
      "Forget medicines, lose reports, and piece memory together.",
      "Receive almost no follow-up after the prescription.",
    ],
  },
  {
    icon: "stethoscope",
    label: "DOCTORS",
    heading: "They must reconstruct what was already known.",
    points: [
      "Start every consultation from a blank page.",
      "Read hundreds of pages by hand to find a single signal.",
      "Face a documentation burden that steals time from care.",
    ],
  },
  {
    icon: "apartment",
    label: "HOSPITALS",
    heading: "Systems that do not share a memory.",
    points: [
      "Fragmented records that do not travel with the patient.",
      "Little interoperability between primary care and specialists.",
      "Duplicated work across departments and visits.",
    ],
  },
];

export function Problem(): ReactElement {
  return (
    <section
      id="problem"
      className="py-16 sm:py-24 lg:py-section-gap-lg px-4 sm:px-6 md:px-gutter bg-clinical-white"
    >
      <div className="max-w-container-max mx-auto">
        <Reveal className="max-w-3xl mx-auto text-center mb-12 sm:mb-20">
          <span className="font-mono text-xs sm:text-label-caps text-primary tracking-[0.25em] block mb-3 sm:mb-4 uppercase font-semibold">
            WHY HEALTHCARE RESTARTS
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-headline-lg text-primary leading-tight">
            Healthcare is broken because information is broken.
          </h2>
          <p className="font-body-lg text-base sm:text-body-lg text-secondary max-w-2xl mx-auto mt-4 sm:mt-6 leading-relaxed">
            Every doctor starts from zero. Every hospital stores different records.
            Every patient repeats the same story.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {PAIN_POINTS.map((pillar, i) => (
            <Reveal key={pillar.label} delay={i * 0.15} className="h-full">
              <div className="h-full bg-surface-container-low border border-data-node/30 rounded-2xl shadow-double-bezel p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-primary text-clinical-white flex items-center justify-center shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-lg">{pillar.icon}</span>
                  </div>
                  <span className="font-mono text-xs font-semibold tracking-widest text-secondary uppercase">
                    {pillar.label}
                  </span>
                </div>
                <h3 className="font-headline-md text-xl sm:text-xl text-primary mb-4 leading-snug">
                  {pillar.heading}
                </h3>
                <ul className="space-y-3">
                  {pillar.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 font-body-md text-sm text-on-surface-variant leading-relaxed"
                    >
                      <span className="material-symbols-outlined text-base text-secondary mt-0.5">
                        remove
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-12 sm:mt-20" delay={0.2}>
          <p className="font-body-lg text-base sm:text-body-lg text-primary max-w-2xl mx-auto leading-relaxed">
            Mritunjay fixes the information problem before trying to fix the medical problem.
          </p>
          <p className="font-quote text-lg sm:text-2xl text-primary mt-4 sm:mt-6">
            No patient should ever have to start from zero again.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

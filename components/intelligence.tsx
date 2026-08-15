import type { ReactElement } from "react";

export function Intelligence(): ReactElement {
  return (
    <section id="intelligence" className="py-16 sm:py-24 lg:py-section-gap-lg px-4 sm:px-6 md:px-gutter layer-bridge">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div>
            <span className="font-label-caps text-xs sm:text-label-caps text-primary tracking-[0.2em] sm:tracking-[0.3em] block mb-4 sm:mb-6 uppercase">
              THE MISSING LAYER
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-headline-lg text-primary leading-tight mb-6 sm:mb-8">
              Healthcare without Mritunjay is fragmented by design.
            </h2>
            <p className="font-body-lg text-base sm:text-body-lg text-on-surface-variant mb-6 sm:mb-10">
              Hospitals treat symptoms. Specialists view slices. Mritunjay connects the narrative.
              We sit between you and the complexity of the medical system, ensuring your story is
              never lost and your doctors are never guessing.
            </p>
            <div className="space-y-6 sm:space-y-10">
              {[
                {
                  icon: "hub",
                  title: "The Understanding Layer",
                  body: "We organize the clerical chaos into clinical insight before you even walk into the waiting room.",
                },
                {
                  icon: "shield_person",
                  title: "Sovereign Data Memory",
                  body: "Your history follows you, not the provider. You own the bridge; they simply use it to treat you better.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 sm:gap-6 items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-clinical-white text-lg sm:text-xl">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-lg sm:text-[20px] text-primary mb-1.5 sm:mb-2">
                      {item.title}
                    </h4>
                    <p className="font-body-md text-sm sm:text-base text-on-surface-variant">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="relative flex flex-col items-center justify-center p-4 sm:p-8 lg:p-12 border border-data-node/20 rounded-2xl sm:rounded-[3rem] bg-clinical-white/50">
              <div className="text-center mb-8 sm:mb-12">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-secondary-container rounded-full mx-auto flex items-center justify-center mb-3 sm:mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">person</span>
                </div>
                <span className="font-label-caps text-[10px] tracking-widest text-secondary">
                  THE INDIVIDUAL
                </span>
              </div>
              <div className="w-full h-16 sm:h-24 flex justify-center relative">
                <div className="w-0.5 h-full bg-gradient-to-b from-secondary-container to-primary animate-pulse" />
                <span className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 font-label-caps text-[8px] sm:text-[9px] opacity-40">
                  HISTORY FLOW
                </span>
              </div>
              <div className="w-full bg-primary p-4 sm:p-6 md:p-8 rounded-2xl text-clinical-white text-center shadow-2xl relative z-10 border border-memory-glow/20">
                <span className="font-label-caps text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.4em] block mb-2 opacity-60">
                  INTELLIGENCE LAYER
                </span>
                <h3 className="font-headline-md text-xl sm:text-2xl mb-2">MRITUNJAY</h3>
                <p className="font-body-md text-xs sm:text-[13px] opacity-70">
                  Synthesizing records into actionable medical narratives.
                </p>
              </div>
              <div className="w-full h-16 sm:h-24 flex justify-center relative">
                <div className="w-0.5 h-full bg-gradient-to-b from-primary to-secondary-container opacity-50" />
                <span className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 font-label-caps text-[8px] sm:text-[9px] opacity-40">
                  PREPARED INSIGHT
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 w-full">
                {[
                  { icon: "local_hospital", label: "HOSPITALS" },
                  { icon: "medical_services", label: "SPECIALISTS" },
                  { icon: "groups", label: "PRIMARY CARE" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-surface-container p-3 sm:p-4 rounded-xl text-center border border-data-node/20"
                  >
                    <span className="material-symbols-outlined text-primary text-lg sm:text-xl mb-1">
                      {item.icon}
                    </span>
                    <span className="block font-label-caps text-[9px] sm:text-[10px]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

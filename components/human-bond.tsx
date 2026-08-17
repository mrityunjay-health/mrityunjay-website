import type { ReactElement } from "react";
import Image from "next/image";
import { Reveal } from "./intersection-reveal";

export function HumanBond(): ReactElement {
  return (
    <section className="py-16 sm:py-24 lg:py-section-gap-lg px-4 sm:px-6 md:px-gutter relative bg-clinical-white">
      <div className="max-w-container-max mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        {/* Double-Bezel Enclosed Editorial Image */}
        <Reveal className="w-full lg:w-1/2">
          <div className="p-2 sm:p-3 bg-surface-container-low border border-data-node/30 rounded-3xl shadow-double-bezel">
            <div className="aspect-[4/3] sm:aspect-[4/5] relative overflow-hidden rounded-2xl">
              <Image
                alt="Clinical Consultation between Doctor and Patient"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3Tdvb_ulIuf4HVg1hp-aM8fDOhFEExMIyke5SyLY0F5KeXyTjZK34O_k6MVRgJ0aEAkkBUxXLA2r3oZZgZRg7Rx1e--d7Ps6XD4qH6jmTbyVKC0BN0UpMsBfizZlF9lYjQvvMeAfvgomj6UH4bJvAJymudobZZeLeCCmF1G0Oy4urjkQp9Y6BzleAIZ7aSyduuIf-ItDkycqU6pP7_FJr9fddS4rWNzLzBD-BgUQbLi9vzAgME_pdfw"
                fill
                className="object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-primary/5" />
            </div>
            <div className="pt-2 px-2 flex justify-between items-center font-mono text-[10px] text-secondary">
              <span>CLINICAL COLLABORATION ARCHIVE</span>
              <span>EST. 2026</span>
            </div>
          </div>
        </Reveal>

        {/* Narrative Column */}
        <Reveal delay={0.2} className="w-full lg:w-1/2 space-y-6 sm:space-y-10">
          <div>
            <span className="font-mono text-xs sm:text-label-caps text-primary tracking-[0.25em] uppercase font-semibold block mb-3">
              HUMAN-CENTERED CLINICAL PRACTICE
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-headline-lg text-primary leading-[1.1]">
              The doctor-patient bond, fully restored.
            </h2>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {[
              {
                title: "Invisible Technology",
                body: "Mritunjay is designed to disappear. By organizing the clerical complexity of healthcare behind the scenes, we allow the human connection between doctor and patient to return to the center of every consultation.",
              },
              {
                title: "Continuous Trust",
                body: "Once you experience healthcare with a persistent intelligence layer, navigating fragmented records feels like practicing in the dark. Mritunjay is not a novelty; it is the foundational memory of modern care.",
              },
            ].map((item) => (
              <div key={item.title} className="border-t border-data-node/20 pt-5 sm:pt-8">
                <h4 className="font-headline-md text-xl sm:text-[24px] text-primary mb-2">
                  {item.title}
                </h4>
                <p className="font-body-md text-base sm:text-body-lg text-on-surface-variant leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import type { ReactElement } from "react";
import Image from "next/image";
import { Reveal } from "./intersection-reveal";

export function HumanBond(): ReactElement {
  return (
    <section className="py-16 sm:py-24 lg:py-section-gap-lg px-4 sm:px-6 md:px-gutter relative bg-clinical-white">
      <div className="max-w-container-max mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        <Reveal className="w-full lg:w-1/2 aspect-[4/3] sm:aspect-[4/5] relative overflow-hidden rounded-2xl">
          <Image
            alt="Clinical Consultation"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3Tdvb_ulIuf4HVg1hp-aM8fDOhFEExMIyke5SyLY0F5KeXyTjZK34O_k6MVRgJ0aEAkkBUxXLA2r3oZZgZRg7Rx1e--d7Ps6XD4qH6jmTbyVKC0BN0UpMsBfizZlF9lYjQvvMeAfvgomj6UH4bJvAJymudobZZeLeCCmF1G0Oy4urjkQp9Y6BzleAIZ7aSyduuIf-ItDkycqU6pP7_FJr9fddS4rWNzLzBD-BgUQbLi9vzAgME_pdfw"
            fill
            className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-primary/5" />
        </Reveal>

        <Reveal delay={0.3} className="w-full lg:w-1/2 space-y-6 sm:space-y-12">
          <span className="font-label-caps text-xs sm:text-label-caps text-primary tracking-[0.2em] sm:tracking-[0.3em] uppercase block">
            THE HUMAN OUTCOME
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-headline-lg text-primary leading-[1.1]">
            The bond, restored.
          </h2>
          <div className="space-y-6 sm:space-y-10">
            {[
              {
                title: "Invisible Technology",
                body: "Mritunjay is designed to disappear. By organizing the clerical mess of healthcare, we allow the human bond between doctor and patient to return to the center of the experience.",
              },
              {
                title: "Absolute Dependency",
                body: "Once you experience healthcare with the Intelligent Layer, going back to fragmented records feels like practicing medicine in the dark. Mritunjay isn't a feature; it's the foundation.",
              },
            ].map((item) => (
              <div key={item.title} className="border-t border-data-node/20 pt-6 sm:pt-10">
                <h4 className="font-headline-md text-xl sm:text-[26px] text-primary mb-2 sm:mb-4">{item.title}</h4>
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

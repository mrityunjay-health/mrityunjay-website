import type { ReactElement } from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { HumanBond } from "@/components/human-bond";
import { Problem } from "@/components/problem";
import { Trust } from "@/components/trust";
import { Reveal } from "@/components/intersection-reveal";

export default function AboutPage(): ReactElement {
  return (
    <>
      <Nav />
      <main className="relative pt-28 sm:pt-36 pb-12 sm:pb-20 bg-clinical-overlay min-h-screen">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-gutter mb-16 sm:mb-24">
          <Reveal>
            <span className="font-mono text-xs sm:text-label-caps text-secondary tracking-[0.25em] block mb-4 uppercase font-semibold">
              OUR PHILOSOPHY
            </span>
            <h1 className="font-headline-lg text-4xl sm:text-5xl lg:text-6xl text-primary leading-tight mb-6">
              Restoring the Clinical Bond
            </h1>
            <p className="font-body-lg text-base sm:text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
              We believe that healthcare should be an uninterrupted conversation between patient and physician. Not a bureaucratic data entry task.
            </p>
          </Reveal>
        </div>

        {/* The components the user requested */}
        <HumanBond />
        <Problem />
        <Trust />
      </main>
      <Footer />
    </>
  );
}

"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, type ReactElement } from "react";
import { LivingCellBackground } from "./living-cell-background";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export function Hero(): ReactElement {
  const targetRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Cellular microscope dive: scales the biological cell canvas into its glowing nucleus
  const cellScale = useTransform(scrollYProgress, [0, 0.15, 0.52], [1, 1.25, 36]);
  const cellOpacity = useTransform(scrollYProgress, [0.45, 0.62], [1, 0]);
  
  // Fade out Slide 1 text
  const contentOpacity = useTransform(scrollYProgress, [0, 0.16], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.16], [0, -45]);

  // Optical mask overlay as the microscope enters the clinical matrix
  const maskOverlayOpacity = useTransform(scrollYProgress, [0.45, 0.58], [0, 1]);

  // Reveal Slide 2 (Persistent Health Memory Matrix)
  const revealOpacity = useTransform(scrollYProgress, [0.55, 0.85], [0, 1]);
  const revealY = useTransform(scrollYProgress, [0.55, 0.85], [50, 0]);
  const revealPointerEvents = useTransform(
    scrollYProgress,
    (v) => (v > 0.55 ? ("auto" as const) : ("none" as const))
  );

  const reduced = useReducedMotion();

  return (
    <section ref={targetRef} className="relative h-[160vh] lg:h-[250vh] bg-background w-full">
      <div className="sticky top-0 min-h-[100dvh] overflow-hidden flex flex-col items-center justify-center pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 md:px-gutter">
        
        {/* Layer 0: Living Animated Biological Cell Background (Strict z-0) */}
        <motion.div 
          style={{ 
            scale: reduced ? 1 : cellScale, 
            opacity: reduced ? 1 : cellOpacity,
            position: "absolute",
            zIndex: 0,
            transformOrigin: "50% 48%",
          }}
          className="pointer-events-auto inset-0 flex items-center justify-center w-full h-full"
        >
          <LivingCellBackground className="w-full h-full absolute inset-0" />
        </motion.div>

        {/* Layer 10: Slide 1 Initial Editorial Content (Foreground z-10) */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="max-w-4xl mx-auto text-center z-10 w-full relative flex flex-col items-center pointer-events-none"
        >
          <motion.span
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: EASE_OUT }}
            className="pointer-events-auto font-mono text-[10px] sm:text-xs text-primary tracking-[0.25em] mb-3 sm:mb-4 block uppercase font-semibold"
          >
            THE INTELLIGENT LAYER OF CARE
          </motion.span>
          <h1 className="font-display-hero text-3xl sm:text-5xl md:text-7xl lg:text-display-hero text-primary tracking-tighter mb-4 sm:mb-6 leading-tight sm:leading-none flex flex-wrap justify-center max-w-5xl">
            <span className="sr-only">Healthcare that finally remembers you.</span>
            {["Healthcare", "that", "finally", "remembers", "you."].map((word, i) => (
              <span
                key={i}
                className="mr-[0.26em] inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] align-bottom last:mr-0"
              >
                <motion.span
                  initial={reduced ? false : { y: "115%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={
                    reduced
                      ? undefined
                      : {
                          y: { duration: 1.1, ease: EASE_OUT, delay: i * 0.07 },
                          opacity: { duration: 0.7, ease: "easeOut", delay: i * 0.07 },
                        }
                  }
                  className="inline-block will-change-transform"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            className="font-body-lg text-base sm:text-body-lg text-secondary max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed"
          >
            Treatment happens at the hospital. Understanding begins with Mritunjay.
            We are the intelligent bridge between your history and your future care.
          </motion.p>
          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
            className="pointer-events-auto flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 w-full max-w-md sm:max-w-none mx-auto"
          >
            <Link
              href="/waitlist"
              className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-primary text-clinical-white px-7 sm:px-9 py-3.5 sm:py-4 font-label-caps text-xs sm:text-label-caps tracking-widest hover:bg-primary/95 transition-all rounded-full text-center shadow-md active:scale-[0.98]"
            >
              <span>JOIN 2026 FLAGSHIP WAITING LIST</span>
              <span className="w-5 h-5 rounded-full bg-clinical-white/15 group-hover:bg-clinical-white/25 flex items-center justify-center transition-colors">
                <span className="material-symbols-outlined text-[13px] text-clinical-white group-hover:translate-x-0.5 transition-transform">
                  arrow_forward
                </span>
              </span>
            </Link>
            <a
              href="#intelligence"
              className="w-full sm:w-auto border border-primary/40 text-primary hover:bg-primary hover:text-clinical-white transition-all px-6 sm:px-8 py-3.5 sm:py-4 font-label-caps text-xs sm:text-label-caps tracking-widest rounded-full flex items-center justify-center gap-2 text-center active:scale-[0.98]"
            >
              <span className="material-symbols-outlined text-[18px] sm:text-[20px]">layers</span>
              <span>EXPLORE THE LAYER</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Layer 20: Optical Mask Overlay (Strict z-20) */}
        <motion.div
          style={{ opacity: maskOverlayOpacity }}
          className="absolute inset-0 bg-clinical-white z-20 will-change-[opacity] pointer-events-none"
        />

        {/* Layer 30: Slide 2 Intelligence Section (Strict z-30) */}
        <motion.div
          id="intelligence"
          style={{ opacity: revealOpacity, y: revealY, pointerEvents: revealPointerEvents }}
          className="absolute inset-0 z-30 flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-gutter pt-20 sm:pt-24 pb-8 sm:pb-12"
        >
          <div className="w-full max-w-container-max mx-auto py-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="flex flex-col">
                <span className="font-mono text-[9px] sm:text-xs text-primary tracking-[0.25em] block mb-2 sm:mb-4 uppercase font-semibold">
                  PERSISTENT HEALTH MEMORY
                </span>
                <h2 className="font-headline-lg text-2xl sm:text-4xl lg:text-headline-lg text-primary leading-tight mb-3 sm:mb-6">
                  Healthcare without Mritunjay is fragmented by design.
                </h2>
                <p className="font-body-lg text-sm sm:text-base lg:text-body-lg text-on-surface-variant mb-5 sm:mb-8 leading-relaxed">
                  Hospitals treat symptoms. Specialists view slices. Mritunjay connects the narrative.
                  We sit between you and the complexity of the medical system, ensuring your story is
                  never lost and your doctors are never guessing.
                </p>
                <div className="space-y-4 sm:space-y-6">
                  {[
                    {
                      icon: "hub",
                      title: "The Understanding Layer",
                      body: "Organizing clerical chaos into clinical insight before you step into the consultation room.",
                    },
                    {
                      icon: "shield_person",
                      title: "Sovereign Data Memory",
                      body: "Your history follows you, not the provider. You own the bridge; doctors use it to treat you with precision.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3 sm:gap-4 items-start">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <span className="material-symbols-outlined text-clinical-white text-sm sm:text-lg">
                          {item.icon}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-headline-md text-base sm:text-lg lg:text-[20px] text-primary mb-1">
                          {item.title}
                        </h4>
                        <p className="font-body-md text-xs sm:text-sm lg:text-base text-on-surface-variant leading-snug">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 sm:mt-0">
                {/* Double-Bezel Nested Architecture Container */}
                <div className="relative flex flex-col items-center justify-center p-4 sm:p-6 lg:p-10 border border-data-node/30 rounded-2xl lg:rounded-3xl bg-clinical-white shadow-double-bezel">
                  <div className="text-center mb-3 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary-container rounded-full mx-auto flex items-center justify-center mb-2 sm:mb-3 shadow-inner">
                      <span className="material-symbols-outlined text-primary text-xl sm:text-2xl">person</span>
                    </div>
                    <span className="font-mono text-[9px] sm:text-xs tracking-wider text-secondary font-medium uppercase">
                      Patient Narrative and History
                    </span>
                  </div>

                  <div className="w-full h-8 sm:h-14 flex justify-center relative items-center">
                    <div className="w-0.5 h-full bg-gradient-to-b from-secondary-container via-primary to-primary opacity-60" />
                    <span className="absolute right-4 font-mono text-[8px] sm:text-[10px] text-secondary tracking-widest uppercase">
                      Continuous Understanding
                    </span>
                  </div>

                  {/* Core Intelligence Node with Peaceful Breathing */}
                  <div className="w-full bg-primary p-4 sm:p-6 rounded-xl text-clinical-white text-center shadow-double-bezel-dark relative z-10 border border-memory-glow/25">
                    <div className="flex items-center justify-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-memory-glow animate-pulse-subtle" />
                      <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-memory-glow">
                        CONTINUOUS HEALTH MEMORY
                      </span>
                    </div>
                    <h3 className="font-headline-md text-lg sm:text-2xl mb-1">MRITUNJAY</h3>
                    <p className="font-body-md text-xs sm:text-sm text-clinical-white/80 max-w-sm mx-auto">
                      Continuous synthesis of EHR records, lab values, and symptom timelines.
                    </p>
                  </div>

                  <div className="w-full h-8 sm:h-14 flex justify-center relative items-center">
                    <div className="w-0.5 h-full bg-gradient-to-b from-primary to-secondary-container opacity-60" />
                    <span className="absolute left-4 font-mono text-[8px] sm:text-[10px] text-secondary tracking-widest uppercase">
                      Physician Synthesis
                    </span>
                  </div>

                  {/* Providers Grid */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full">
                    {[
                      { icon: "local_hospital", label: "HOSPITALS" },
                      { icon: "medical_services", label: "SPECIALISTS" },
                      { icon: "groups", label: "PRIMARY CARE" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="bg-surface-container-low p-2.5 sm:p-3 rounded-lg text-center border border-data-node/30 flex flex-col items-center justify-center shadow-sm"
                      >
                        <span className="material-symbols-outlined text-primary text-base sm:text-lg mb-0.5">
                          {item.icon}
                        </span>
                        <span className="block font-mono text-[8px] sm:text-[9px] text-primary font-medium tracking-wider">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

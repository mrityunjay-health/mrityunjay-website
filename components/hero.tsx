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

  // Cellular microscope dive: stretches the full duration of the scroll
  const cellScale = useTransform(scrollYProgress, [0, 0.2, 1], [1, 1.25, 36]);
  
  // Fade out Slide 1 text quickly
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.2], [0, -45]);

  // Premium Logo Transition (Fades in, draws heartbeat, then fades OUT completely by 0.60)
  const logoOpacity = useTransform(scrollYProgress, [0.10, 0.25, 0.50, 0.60], [0, 1, 1, 0]);
  const logoScale = useTransform(scrollYProgress, [0.10, 0.60], [0.95, 1.1]);
  

  // Reveal Slide 2 ONLY AFTER the logo is completely gone
  const revealOpacity = useTransform(scrollYProgress, [0.60, 0.75], [0, 1]);
  const revealPointerEvents = useTransform(
    scrollYProgress,
    (v) => (v >= 0.75 ? ("auto" as const) : ("none" as const))
  );

  // Optical mask overlay smoothly crossfades the blue cells into the white background of Slide 2
  const maskOverlayOpacity = useTransform(scrollYProgress, [0.75, 0.95], [0, 1]);

  const reduced = useReducedMotion();

  return (
    <>
      <section ref={targetRef} className="relative h-[300vh] bg-background w-full">
      <div className="sticky top-0 min-h-[100dvh] overflow-hidden flex flex-col items-center justify-center pt-12 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 md:px-gutter">
        
        {/* Layer 0: Living Animated Biological Cell Background (Strict z-0) */}
        <motion.div 
          style={{ 
            scale: reduced ? 1 : cellScale, 
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
          <h1 className="font-display-hero text-[40px] leading-[44px] sm:text-5xl md:text-7xl lg:text-display-hero text-primary tracking-tighter mb-4 sm:mb-6 sm:leading-none flex flex-wrap justify-center max-w-5xl px-2">
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

        {/* Layer 15: Premium Logo Transition */}
        <motion.div
          style={{ 
            opacity: reduced ? 0 : logoOpacity, 
            scale: reduced ? 1 : logoScale
          }}
          className="absolute inset-0 flex items-center justify-center z-[15] pointer-events-none will-change-[transform,opacity]"
        >
          <div className="relative flex items-center justify-center w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
            


            {/* The Logo Image (z-10, IN FRONT) */}
            <motion.img 
              src="/logo_transparent.png" 
              alt="Mritunjay Logo" 
              className="absolute inset-0 w-full h-full object-contain opacity-90 z-10" 
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Layer 20: Optical Mask Overlay (Strict z-20) - Smooth transition to white */}
        <motion.div
          style={{ opacity: maskOverlayOpacity }}
          className="absolute inset-0 bg-clinical-white z-20 will-change-[opacity] pointer-events-none"
        />

        {/* Layer 30: Slide 2 Intelligence Section (Strict z-30) */}
        <motion.div
          id="intelligence"
          style={{ opacity: revealOpacity, pointerEvents: revealPointerEvents }}
          className="absolute inset-0 z-30 overflow-y-auto"
        >
          <div className="min-h-full w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-gutter pt-4 sm:pt-24 pb-16 sm:pb-24">
            <div className="w-full max-w-container-max mx-auto py-2">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="flex flex-col">
                <span className="font-mono text-[9px] sm:text-xs text-primary tracking-[0.25em] block mb-2 sm:mb-4 uppercase font-semibold">
                  PERSISTENT HEALTH MEMORY
                </span>
                <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight mb-3 sm:mb-6 tracking-tight">
                  Healthcare shouldn&apos;t reset every visit.
                </h2>
                <p className="font-body-lg text-sm sm:text-base lg:text-lg text-on-surface-variant mb-6 sm:mb-8 leading-relaxed">
                  We sit between you and the complexity of the medical system, ensuring your story is never lost.
                </p>
                <div className="space-y-6 sm:space-y-8">
                  {[
                    {
                      icon: "hub",
                      title: "The Understanding Layer",
                      body: "Organizing clerical chaos into clinical insight.",
                    },
                    {
                      icon: "shield_person",
                      title: "Sovereign Memory",
                      body: "Your history follows you, not the provider.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 sm:gap-5 items-start">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <span className="material-symbols-outlined text-clinical-white text-base sm:text-xl">
                          {item.icon}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-headline-md text-lg sm:text-xl text-primary mb-1">
                          {item.title}
                        </h4>
                        <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-snug">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 sm:mt-0 lg:pl-10">
                {/* Double-Bezel Nested Architecture Container */}
                <div className="relative flex flex-col items-center justify-center p-6 sm:p-8 lg:p-12 border border-data-node/30 rounded-3xl lg:rounded-[2.5rem] bg-clinical-white shadow-double-bezel">
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="w-14 h-14 sm:w-20 sm:h-20 bg-secondary-container rounded-full mx-auto flex items-center justify-center mb-3 shadow-inner">
                      <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">person</span>
                    </div>
                    <span className="font-mono text-[10px] sm:text-xs tracking-wider text-secondary font-medium uppercase">
                      Patient Narrative and History
                    </span>
                  </div>

                  <div className="w-full h-12 sm:h-16 flex justify-center relative items-center">
                    <div className="w-0.5 h-full bg-gradient-to-b from-secondary-container via-primary to-primary opacity-60" />
                    <span className="absolute right-6 sm:right-8 font-mono text-[9px] sm:text-[11px] text-secondary tracking-widest uppercase">
                      Continuous Understanding
                    </span>
                  </div>

                  {/* Core Intelligence Node with Peaceful Breathing */}
                  <div className="w-full bg-primary p-6 sm:p-8 rounded-2xl text-clinical-white text-center shadow-double-bezel-dark relative z-10 border border-memory-glow/25">
                    <div className="flex items-center justify-center gap-2.5 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-memory-glow animate-pulse-subtle shadow-[0_0_8px_rgba(165,216,255,0.5)]" />
                      <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-memory-glow font-medium">
                        CONTINUOUS HEALTH MEMORY
                      </span>
                    </div>
                    <h3 className="font-headline-md text-2xl sm:text-3xl mb-2 tracking-tight">MRITUNJAY</h3>
                    <p className="font-body-md text-sm sm:text-base text-clinical-white/80 max-w-sm mx-auto leading-relaxed">
                      Continuous synthesis of EHR records, lab values, and symptom timelines.
                    </p>
                  </div>

                  <div className="w-full h-12 sm:h-16 flex justify-center relative items-center">
                    <div className="w-0.5 h-full bg-gradient-to-b from-primary to-secondary-container opacity-60" />
                    <span className="absolute left-6 sm:left-8 font-mono text-[9px] sm:text-[11px] text-secondary tracking-widest uppercase">
                      Physician Synthesis
                    </span>
                  </div>

                  {/* Providers Grid */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full">
                    {[
                      { icon: "local_hospital", label: "HOSPITALS" },
                      { icon: "medical_services", label: "SPECIALISTS" },
                      { icon: "groups", label: "PRIMARY CARE" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="bg-surface-container-low p-3 sm:p-4 rounded-xl text-center border border-data-node/30 flex flex-col items-center justify-center shadow-sm"
                      >
                        <span className="material-symbols-outlined text-primary text-xl sm:text-2xl mb-1.5">
                          {item.icon}
                        </span>
                        <span className="block font-mono text-[9px] sm:text-[10px] text-primary font-semibold tracking-wider">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </motion.div>
        </div>
      </section>
    </>
  );
}

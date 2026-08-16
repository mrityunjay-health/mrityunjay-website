"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, type ReactElement } from "react";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export function Hero(): ReactElement {
  const targetRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Framer Motion transforms for scroll zoom (Scaled for 250vh height)
  const svgScale = useTransform(scrollYProgress, [0, 0.15, 0.55], [1, 1, 80]);
  
  // Fade out standard content (Slide 1)
  const contentOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.25], [0, -50]);

  // Fade IN a background-colored overlay as we get close to max zoom
  const maskOverlayOpacity = useTransform(scrollYProgress, [0.5, 0.65], [0, 1]);

  // Fade out the SVG word behind the mask overlay
  const svgOpacity = useTransform(scrollYProgress, [0.6, 0.7], [1, 0]);

  // Reveal the next section content (Slide 2: Intelligence Section)
  // Fully revealed by 0.85 so the user doesn't get "stuck" for long before normal scrolling resumes
  const revealOpacity = useTransform(scrollYProgress, [0.65, 0.85], [0, 1]);
  const revealY = useTransform(scrollYProgress, [0.65, 0.85], [50, 0]);
  // Use a string to control pointer events: none when hidden, auto when visible.
  const revealPointerEvents = useTransform(scrollYProgress, (v) => v > 0.65 ? "auto" : "none");

  const reduced = useReducedMotion();

  return (
    <section ref={targetRef} className="relative h-[250vh] bg-background w-full">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 md:px-gutter">
        
        {/* The Crisp SVG Text that scales infinitely */}
        <motion.div 
          style={{ 
            scale: svgScale, 
            opacity: svgOpacity,
            position: 'absolute',
            zIndex: 10,
            // Transform origin set to roughly the center of the 'U'
            transformOrigin: '53% 50%' 
          }}
          className="pointer-events-none inset-0 flex items-center justify-center w-full"
        >
          <svg viewBox="0 0 2500 300" className="w-full max-w-full overflow-visible">
            <text 
              x="50%" 
              y="50%" 
              dominantBaseline="middle" 
              textAnchor="middle" 
              className="font-display-hero font-extrabold text-[220px] fill-primary/10 tracking-tighter"
            >
              MRITUNJAY<tspan className="fill-secondary/10">.</tspan>
            </text>
          </svg>
        </motion.div>

        {/* Slide 1: Initial Content */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="max-w-4xl mx-auto text-center z-15 w-full relative flex flex-col items-center"
        >
          <motion.span
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: EASE_OUT }}
            className="font-label-caps text-[10px] sm:text-label-caps text-primary tracking-[0.2em] sm:tracking-[0.4em] mb-3 sm:mb-4 block uppercase"
          >
            THE INTELLIGENT LAYER
          </motion.span>
          <h1 className="font-display-hero text-3xl sm:text-5xl md:text-7xl lg:text-display-hero text-primary tracking-tighter mb-4 sm:mb-6 leading-tight sm:leading-none flex flex-wrap justify-center">
            <span className="sr-only">Healthcare that finally remembers you.</span>
            {["Healthcare", "that", "finally", "remembers", "you."].map((word, i) => (
              <span
                key={i}
                className="mr-[0.26em] inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] align-bottom last:mr-0"
              >
                <motion.span
                  initial={reduced ? false : { y: "115%", filter: "blur(8px)", opacity: 0 }}
                  animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
                  transition={
                    reduced
                      ? undefined
                      : {
                          y: { duration: 1.1, ease: EASE_OUT, delay: i * 0.07 },
                          filter: { duration: 0.9, ease: "easeOut", delay: i * 0.07 },
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
            transition={{ duration: 1.2, delay: 1.1, ease: "easeOut" }}
            className="font-body-lg text-base sm:text-body-lg text-secondary max-w-2xl mx-auto mb-6 sm:mb-10"
          >
            Treatment happens at the hospital. Understanding begins with Mritunjay.
            We are the intelligent bridge between your history and your future care.
          </motion.p>
          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 w-full max-w-md sm:max-w-none mx-auto"
          >
            <Link
              href="/waitlist"
              className="w-full sm:w-auto bg-primary text-clinical-white px-6 sm:px-10 py-3.5 sm:py-4 font-label-caps text-xs sm:text-label-caps tracking-widest hover:bg-opacity-90 transition-all rounded-full text-center"
            >
              JOIN 2026 WAITING LIST
            </Link>
            <a
              href="#intelligence"
              className="w-full sm:w-auto border border-primary text-primary px-6 sm:px-10 py-3.5 sm:py-4 font-label-caps text-xs sm:text-label-caps tracking-widest hover:bg-primary hover:text-clinical-white transition-all rounded-full flex items-center justify-center gap-2 text-center"
            >
              <span className="material-symbols-outlined text-[18px] sm:text-[20px]">play_circle</span>
              EXPLORE THE LAYER
            </a>
          </motion.div>
        </motion.div>

        {/* Mask Overlay */}
        <motion.div
          style={{ opacity: maskOverlayOpacity }}
          className="absolute inset-0 bg-clinical-white z-20 will-change-[opacity] pointer-events-none"
        />

        {/* Slide 2: Intelligence Section */}
        <motion.div
          style={{ opacity: revealOpacity, y: revealY, pointerEvents: revealPointerEvents as any }}
          className="absolute inset-0 z-30 flex flex-col items-center w-full overflow-y-auto pt-20 pb-4"
        >
          <div className="w-full max-w-container-max mx-auto px-4 sm:px-6 md:px-gutter py-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <span className="font-label-caps text-xs sm:text-label-caps text-primary tracking-[0.2em] sm:tracking-[0.3em] block mb-3 sm:mb-4 uppercase">
                  THE MISSING LAYER
                </span>
                <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-headline-lg text-primary leading-tight mb-4 sm:mb-6">
                  Healthcare without Mritunjay is fragmented by design.
                </h2>
                <p className="font-body-lg text-base sm:text-body-lg text-on-surface-variant mb-6 sm:mb-8">
                  Hospitals treat symptoms. Specialists view slices. Mritunjay connects the narrative.
                  We sit between you and the complexity of the medical system, ensuring your story is
                  never lost and your doctors are never guessing.
                </p>
                <div className="space-y-4 sm:space-y-6">
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
                    <div key={item.title} className="flex gap-4 items-start">
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
        </motion.div>
      </div>
    </section>
  );
}

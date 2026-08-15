"use client";

import Link from "next/link";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useState, type ReactElement } from "react";

const FULL_MESSAGE =
  "The specialist will see you now. I have summarized your last 3 years of cardiac data for them.";

const USER_MESSAGE = "Will they see the reaction I had to the medication in 2024?";

// 5-act narrative loop. Order matters: each act stages the next layer of the story.
type Act = 1 | 2 | 3 | 4 | 5;
const NEXT_ACT: Record<Act, Act> = { 1: 2, 2: 3, 3: 4, 4: 5, 5: 1 };

const ACT_MS: Record<Act, number> = {
  1: 3600, // inquiry: AI types
  2: 1500, // understanding: user question + connection
  3: 3400, // synthesis: processing, ECG, brief materializes
  4: 2400, // review: doctor overlay, counter ticks, check draws
  5: 2400, // reset: orchestrated exit, version increments, loop
};

const EASE_OUT = [0.16, 1, 0.3, 1] as const;
const EASE_SPRING = { type: "spring" as const, stiffness: 220, damping: 26 };

function useTyped(text: string, active: boolean, speed = 28): string {
  const reduced = useReducedMotion();
  const [typed, setTyped] = useState(reduced ? text : "");
  useEffect(() => {
    if (reduced) {
      setTyped(text);
      return;
    }
    if (!active) return;
    setTyped("");
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [active, text, speed, reduced]);
  return typed;
}

function AnimatedCounter({ active, persist }: { active: boolean; persist: boolean }): ReactElement {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const unsub = count.on("change", (v) => setDisplay(Math.round(v)));
    return () => unsub();
  }, [count]);
  useEffect(() => {
    if (active) {
      const controls = animate(count, 100, { duration: 2.2, ease: EASE_OUT });
      return () => controls.stop();
    }
    if (persist) {
      count.set(100);
      return undefined;
    }
    count.set(0);
    return undefined;
  }, [active, persist, count]);
  return <span>{display}</span>;
}

export function Hero(): ReactElement {
  const reduced = useReducedMotion();
  const [act, setAct] = useState<Act>(1);
  const [version, setVersion] = useState(81);
  const typing = useTyped(FULL_MESSAGE, act === 1, 26);

  // Reduced motion: pin to the "prepared for expert" final state. No loop.
  useEffect(() => {
    if (!reduced) return;
    setAct(4);
  }, [reduced]);

  // Sequence orchestrator — single timer that hands off to the next act.
  useEffect(() => {
    if (reduced) return;
    const id = setTimeout(() => {
      if (act === 5) {
        setVersion((v) => v + 1);
      }
      setAct((prev) => NEXT_ACT[prev]);
    }, ACT_MS[act]);
    return () => clearTimeout(id);
  }, [act, reduced]);

  const showAI = act < 5;
  const showUser = act >= 2 && act < 5;
  const showProcessing = act === 3;
  const showBrief = act >= 3 && act < 5;
  const showDoctor = act === 4;

  return (
    <section className="relative min-h-screen flex flex-col items-center pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 md:px-gutter overflow-hidden">
      <div className="max-w-4xl mx-auto text-center z-10 mb-8 sm:mb-16">
        <motion.span
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE_OUT }}
          className="font-label-caps text-[10px] sm:text-label-caps text-primary tracking-[0.2em] sm:tracking-[0.4em] mb-3 sm:mb-4 block uppercase"
        >
          THE INTELLIGENT LAYER
        </motion.span>
        <motion.h1
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: EASE_OUT }}
          className="font-display-hero text-3xl sm:text-5xl md:text-7xl lg:text-display-hero text-primary tracking-tighter mb-4 sm:mb-6 leading-tight sm:leading-none"
        >
          Healthcare that finally remembers you.
        </motion.h1>
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: EASE_OUT }}
          className="font-body-lg text-base sm:text-body-lg text-secondary max-w-2xl mx-auto mb-6 sm:mb-10"
        >
          Treatment happens at the hospital. Understanding begins with Mritunjay.
          We are the intelligent bridge between your history and your future care.
        </motion.p>
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: EASE_OUT }}
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
      </div>

      {/* Hero product interface mock */}
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.8, ease: EASE_OUT }}
        className="w-full max-w-5xl mx-auto relative"
      >
        <div className="bg-clinical-white/80 backdrop-blur-md border border-data-node/20 rounded-2xl sm:rounded-[2rem] shadow-2xl overflow-hidden min-h-[480px] sm:min-h-0 sm:aspect-[16/9] flex flex-col">
          {/* Window chrome */}
          <div className="h-10 sm:h-12 border-b border-data-node/10 flex items-center px-4 sm:px-6 gap-2 shrink-0">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-data-node/30" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-data-node/30" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-data-node/30" />
            </div>
            <div className="mx-auto font-label-caps text-[9px] sm:text-[10px] opacity-40 tracking-widest tabular-nums">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={version}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 0.4, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.4, ease: EASE_OUT }}
                  className="inline-block"
                >
                  MRITUNJAY INTELLIGENCE LAYER // V.{String(version).padStart(3, "0")}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex-1 p-4 sm:p-6 md:p-10 relative font-body-md overflow-hidden flex flex-col justify-between">
            {/* Conversation column */}
            <div className="space-y-4 sm:space-y-6 max-w-2xl mx-auto w-full">
              {/* AI message — Act 1: types; Act 2-4: holds; Act 5: exits */}
              <AnimatePresence>
                {showAI && (
                  <motion.div
                    key="ai-msg"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8, transition: { duration: 0.5, ease: EASE_OUT } }}
                    transition={{ duration: 0.8, ease: EASE_OUT }}
                    className="flex items-start gap-3 sm:gap-4"
                  >
                    <motion.div
                      animate={
                        reduced
                          ? undefined
                          : {
                              scale: act === 1 ? [1, 1.08, 1] : 1,
                            }
                      }
                      transition={
                        act === 1
                          ? { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
                          : { duration: 0.6, ease: EASE_OUT }
                      }
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-sm"
                    >
                      <span className="material-symbols-outlined text-clinical-white text-xs sm:text-sm">
                        smart_toy
                      </span>
                    </motion.div>
                    <div className="bg-surface-container p-3 sm:p-4 rounded-2xl rounded-tl-none text-primary min-h-[3rem] sm:min-h-[3.5rem]">
                      <p className="font-headline-md text-sm sm:text-base md:text-[20px]">
                        {act >= 2 || reduced ? FULL_MESSAGE : typing}
                        {!reduced && (act === 1 || typing.length < FULL_MESSAGE.length) && (
                          <span className="typing-cursor" aria-hidden="true" />
                        )}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* User response — slides in from right with spring */}
              <AnimatePresence>
                {showUser && (
                  <motion.div
                    key="user-msg"
                    initial={{ opacity: 0, x: 32, scale: 0.96 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 32, transition: { duration: 0.5, ease: EASE_OUT } }}
                    transition={EASE_SPRING}
                    className="flex items-start gap-3 sm:gap-4 justify-end"
                  >
                    <div className="bg-primary text-clinical-white p-3 sm:p-4 rounded-2xl rounded-tr-none shadow-sm">
                      <p className="text-xs sm:text-sm md:text-[18px]">{USER_MESSAGE}</p>
                    </div>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-clinical-white text-xs sm:text-sm">
                        person
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Processing indicators — Act 3 only */}
            <AnimatePresence>
              {showProcessing && (
                <motion.div
                  key="processing"
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  variants={{
                    hidden: { opacity: 0 },
                    show: { opacity: 1, transition: { staggerChildren: 0.35 } },
                    exit: { opacity: 0, transition: { duration: 0.4, ease: EASE_OUT } },
                  }}
                  className="pt-8 space-y-3"
                >
                  {[
                    { label: "SURFACING AUG 2024 ADVERSE REACTION...", live: true },
                    { label: "FLAGGING FOR PHYSICIAN REVIEW...", live: false },
                  ].map((item) => (
                    <motion.div
                      key={item.label}
                      variants={{
                        hidden: { opacity: 0, x: -8 },
                        show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE_OUT } },
                      }}
                      className="flex items-center gap-3 text-secondary"
                    >
                      {item.live ? (
                        <div className="w-4 h-4 border-2 border-primary/20 border-t-primary rounded-full animate-spin shrink-0" />
                      ) : (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.7, type: "spring", stiffness: 300, damping: 18 }}
                          className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center shrink-0"
                        >
                          <span className="material-symbols-outlined text-green-600 text-[12px]">
                            check
                          </span>
                        </motion.div>
                      )}
                      <span
                        className={`font-label-caps text-[11px] ${item.live ? "" : "opacity-70"}`}
                      >
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Brief card — Act 3-4 */}
            <AnimatePresence>
              {showBrief && (
                <motion.div
                  key="brief"
                  initial={{ opacity: 0, y: "110%" }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: "110%",
                    transition: { duration: 0.7, ease: EASE_OUT },
                  }}
                  transition={{ ...EASE_SPRING, delay: act === 3 ? 0.6 : 0 }}
                  className="absolute inset-x-2 sm:inset-x-6 md:inset-x-10 bottom-2 sm:bottom-6 md:bottom-10"
                >
                  <div className="bg-primary text-clinical-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl border border-clinical-white/10 relative overflow-hidden">
                    {/* ECG sweep line that draws across the brief */}
                    <svg
                      viewBox="0 0 800 8"
                      preserveAspectRatio="none"
                      className="absolute top-0 left-0 w-full h-2 opacity-50"
                      aria-hidden="true"
                    >
                      <motion.path
                        d="M0 4 L60 4 L80 1 L100 7 L120 4 L260 4 L280 1 L300 7 L320 4 L800 4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.6, ease: EASE_OUT, delay: 0.4 }}
                      />
                    </svg>

                    <div className="flex justify-between items-start mb-4 sm:mb-6">
                      <h3 className="font-headline-md text-base sm:text-xl md:text-[22px]">Intelligent Brief</h3>
                      <span className="font-label-caps text-[9px] sm:text-[10px] px-2.5 sm:px-3 py-1 bg-clinical-white/10 rounded-full shrink-0 ml-2">
                        READY FOR DOCTOR
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
                      {[
                        { label: "CRITICAL FLAG", value: "Lisinopril Intolerance" },
                        {
                          label: "HISTORY DEPTH",
                          valueNode: (
                            <p className="text-base sm:text-xl tabular-nums">
                              <AnimatedCounter active={act === 3} persist={act >= 3} />% Mapped
                            </p>
                          ),
                        },
                        { label: "STATUS", value: "Prepared" },
                      ].map((item, i) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.8 + i * 0.15, ease: EASE_OUT }}
                          className="border-l border-clinical-white/20 pl-3 sm:pl-4"
                        >
                          <p className="font-label-caps text-[9px] sm:text-[10px] opacity-50">{item.label}</p>
                          {"value" in item ? (
                            <p className="text-base sm:text-xl">{item.value}</p>
                          ) : (
                            item.valueNode
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Doctor overlay — Act 4 only */}
            <AnimatePresence>
              {showDoctor && (
                <motion.div
                  key="doctor"
                  initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                  animate={{ opacity: 1, backdropFilter: "blur(6px)" }}
                  exit={{
                    opacity: 0,
                    backdropFilter: "blur(0px)",
                    transition: { duration: 0.7, ease: EASE_OUT },
                  }}
                  transition={{ duration: 0.9, ease: EASE_OUT }}
                  className="absolute inset-0 flex items-center justify-center bg-clinical-white/40 pointer-events-none will-change-[opacity] p-4"
                >
                  <motion.div
                    initial={{ scale: 0.88, opacity: 0, y: 8 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.94, opacity: 0, transition: { duration: 0.5, ease: EASE_OUT } }}
                    transition={EASE_SPRING}
                    className="bg-clinical-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border border-data-node/20 text-center max-w-[92%] sm:max-w-md mx-auto"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3, ...EASE_SPRING }}
                      className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-primary-fixed mx-auto mb-4 sm:mb-6 flex items-center justify-center"
                    >
                      <span className="material-symbols-outlined text-primary text-2xl sm:text-4xl">
                        verified
                      </span>
                    </motion.div>
                    <motion.h4
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.6, ease: EASE_OUT }}
                      className="font-headline-md text-xl sm:text-2xl text-primary mb-1"
                    >
                      Prepared for the Expert
                    </motion.h4>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                      className="font-label-caps text-[11px] text-secondary mb-6"
                    >
                      THE DOCTOR HAS YOUR FULL CONTEXT
                    </motion.p>

                    {/* Self-drawing check + approval line */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9, duration: 0.4 }}
                      className="flex items-center justify-center gap-3 text-green-600 font-label-caps tracking-widest"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <motion.path
                          d="M4 12.5 L10 18 L20 6"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.7, delay: 1.0, ease: EASE_OUT }}
                        />
                      </svg>
                      <span>NO DATA LEFT BEHIND</span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

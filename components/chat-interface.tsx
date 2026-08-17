"use client";

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

type Act = 1 | 2 | 3 | 4 | 5;
const NEXT_ACT: Record<Act, Act> = { 1: 2, 2: 3, 3: 4, 4: 5, 5: 1 };

const ACT_MS: Record<Act, number> = {
  1: 3600, // inquiry: AI types
  2: 1800, // understanding: user question + connection
  3: 3600, // synthesis: processing, ECG, brief materializes
  4: 2600, // review: doctor overlay, counter ticks, check draws
  5: 2200, // reset: orchestrated exit, version increments, loop
};

type ViewTab = "brief" | "timeline" | "reactions";

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

export function ChatInterface(): ReactElement {
  const reduced = useReducedMotion();
  const [act, setAct] = useState<Act>(1);
  const [version, setVersion] = useState(82);
  const [activeTab, setActiveTab] = useState<ViewTab>("brief");
  const [isPaused, setIsPaused] = useState(false);
  const typing = useTyped(FULL_MESSAGE, act === 1, 26);

  useEffect(() => {
    if (!reduced) return;
    setAct(4);
  }, [reduced]);

  // Sequence orchestrator with pause on user hover/interaction
  useEffect(() => {
    if (reduced || isPaused) return;
    const id = setTimeout(() => {
      if (act === 5) {
        setVersion((v) => v + 1);
      }
      setAct((prev) => NEXT_ACT[prev]);
    }, ACT_MS[act]);
    return () => clearTimeout(id);
  }, [act, reduced, isPaused]);

  const showAI = act < 5;
  const showUser = act >= 2 && act < 5;
  const showProcessing = act === 3;
  const showBrief = act >= 3 && act < 5;
  const showDoctor = act === 4;

  return (
    <section
      id="chat-interface"
      className="py-12 sm:py-20 lg:py-section-gap-lg px-4 sm:px-6 md:px-gutter layer-bridge bg-clinical-white"
    >
      <div className="w-full max-w-5xl mx-auto relative">
        {/* Double-Bezel Clinical Workstation Shell */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="bg-clinical-white border border-data-node/40 rounded-2xl shadow-double-bezel overflow-hidden min-h-[500px] sm:min-h-0 sm:aspect-[16/9] flex flex-col transition-shadow duration-300 hover:shadow-artifact"
        >
          {/* Institutional Clinical Header Bar */}
          <div className="h-12 border-b border-data-node/20 bg-surface-container-low px-4 sm:px-6 flex items-center justify-between shrink-0 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-primary" />
              <span className="font-semibold text-primary tracking-wider text-[11px] sm:text-xs">
                MRITUNJAY CLINICAL WORKSTATION
              </span>
              <span className="hidden sm:inline-block text-[10px] px-2 py-0.5 rounded bg-primary/10 text-primary font-medium">
                HIPAA SYNCHRONIZED
              </span>
            </div>

            {/* Interactive View Selector Tabs */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                type="button"
                onClick={() => setActiveTab("brief")}
                className={`px-2.5 py-1 rounded text-[10px] sm:text-xs transition-colors ${
                  activeTab === "brief"
                    ? "bg-primary text-clinical-white font-medium"
                    : "text-secondary hover:text-primary hover:bg-data-node/20"
                }`}
              >
                Brief View
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("timeline")}
                className={`px-2.5 py-1 rounded text-[10px] sm:text-xs transition-colors ${
                  activeTab === "timeline"
                    ? "bg-primary text-clinical-white font-medium"
                    : "text-secondary hover:text-primary hover:bg-data-node/20"
                }`}
              >
                Timeline
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("reactions")}
                className={`px-2.5 py-1 rounded text-[10px] sm:text-xs transition-colors ${
                  activeTab === "reactions"
                    ? "bg-primary text-clinical-white font-medium"
                    : "text-secondary hover:text-primary hover:bg-data-node/20"
                }`}
              >
                Reactions
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-secondary text-[11px] tabular-nums">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={version}
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -3 }}
                  transition={{ duration: 0.3, ease: EASE_OUT }}
                  className="font-mono text-[10px] text-secondary"
                >
                  CYCLE: V.{String(version).padStart(3, "0")}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Core Content Area */}
          <div className="flex-1 p-4 sm:p-6 md:p-10 relative font-body-md overflow-hidden flex flex-col justify-between bg-clinical-white">
            {/* Conversation Stream */}
            <div className="space-y-4 sm:space-y-6 max-w-2xl mx-auto w-full">
              {/* Clinical AI message */}
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
                              scale: act === 1 ? [1, 1.06, 1] : 1,
                            }
                      }
                      transition={
                        act === 1
                          ? { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
                          : { duration: 0.5, ease: EASE_OUT }
                      }
                      className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-sm border border-primary/20"
                    >
                      <span className="font-mono text-xs text-clinical-white font-bold">M</span>
                    </motion.div>
                    <div className="bg-surface-container-low border border-data-node/30 p-3.5 sm:p-4 rounded-2xl rounded-tl-none text-primary min-h-[3rem] sm:min-h-[3.5rem] shadow-sm">
                      <p className="font-headline-md text-sm sm:text-base md:text-[19px] leading-relaxed">
                        {act >= 2 || reduced ? FULL_MESSAGE : typing}
                        {!reduced && (act === 1 || typing.length < FULL_MESSAGE.length) && (
                          <span className="typing-cursor" aria-hidden="true" />
                        )}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Patient Response */}
              <AnimatePresence>
                {showUser && (
                  <motion.div
                    key="user-msg"
                    initial={{ opacity: 0, x: 28, scale: 0.96 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 28, transition: { duration: 0.5, ease: EASE_OUT } }}
                    transition={EASE_SPRING}
                    className="flex items-start gap-3 sm:gap-4 justify-end"
                  >
                    <div className="bg-primary text-clinical-white p-3.5 sm:p-4 rounded-2xl rounded-tr-none shadow-sm">
                      <p className="text-xs sm:text-sm md:text-[17px] leading-relaxed">{USER_MESSAGE}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-secondary-container text-primary flex items-center justify-center shrink-0 border border-data-node/40">
                      <span className="material-symbols-outlined text-base text-primary">person</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Diagnostic Processing Indicators */}
            <AnimatePresence>
              {showProcessing && (
                <motion.div
                  key="processing"
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  variants={{
                    hidden: { opacity: 0 },
                    show: { opacity: 1, transition: { staggerChildren: 0.3 } },
                    exit: { opacity: 0, transition: { duration: 0.4, ease: EASE_OUT } },
                  }}
                  className="pt-6 space-y-2.5 max-w-2xl mx-auto w-full"
                >
                  {[
                    { label: "SURFACING AUG 2024 ADVERSE REACTION [LISINOPRIL]", live: true },
                    { label: "CROSS-REFERENCING BP RECORD WITH RECENT SYMPTOMS", live: false },
                  ].map((item) => (
                    <motion.div
                      key={item.label}
                      variants={{
                        hidden: { opacity: 0, x: -8 },
                        show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE_OUT } },
                      }}
                      className="flex items-center gap-3 text-secondary font-mono text-xs"
                    >
                      {item.live ? (
                        <div className="w-3.5 h-3.5 border-2 border-primary/20 border-t-primary rounded-full animate-spin shrink-0" />
                      ) : (
                        <div className="w-3.5 h-3.5 rounded-full bg-green-500/20 text-green-700 flex items-center justify-center shrink-0 text-[10px]">
                          ✓
                        </div>
                      )}
                      <span className={`text-[10px] sm:text-[11px] ${item.live ? "text-primary font-medium" : "opacity-75"}`}>
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Synthesized Brief Card */}
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
                  transition={{ ...EASE_SPRING, delay: act === 3 ? 0.5 : 0 }}
                  className="absolute inset-x-2 sm:inset-x-6 md:inset-x-10 bottom-2 sm:bottom-6 md:bottom-10"
                >
                  <div className="bg-primary text-clinical-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-double-bezel-dark border border-clinical-white/10 relative overflow-hidden">
                    {/* Continuous ECG Diagnostic Waveform */}
                    <svg
                      viewBox="0 0 800 12"
                      preserveAspectRatio="none"
                      className="absolute top-0 left-0 w-full h-3 opacity-60 text-memory-glow"
                      aria-hidden="true"
                    >
                      <motion.path
                        d="M0 6 L80 6 L100 2 L120 10 L140 6 L320 6 L340 1 L360 11 L380 6 L800 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.8, ease: EASE_OUT, delay: 0.3 }}
                      />
                    </svg>

                    <div className="flex justify-between items-start mb-4 sm:mb-6 pt-1">
                      <div>
                        <span className="font-mono text-[9px] sm:text-[10px] text-memory-glow uppercase tracking-wider block mb-0.5">
                          CLINICAL SYNTHESIS COMPLETE
                        </span>
                        <h3 className="font-headline-md text-base sm:text-xl md:text-[22px]">
                          Pre-Consultation Brief
                        </h3>
                      </div>
                      <span className="font-mono text-[9px] sm:text-[10px] px-3 py-1 bg-clinical-white/10 rounded-full shrink-0 ml-2 border border-clinical-white/15">
                        STATUS: READY FOR DOCTOR
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
                      {[
                        { label: "CRITICAL FLAG", value: "Lisinopril Intolerance (2024)" },
                        {
                          label: "HISTORY DEPTH",
                          valueNode: (
                            <p className="text-base sm:text-xl font-mono tabular-nums font-semibold">
                              <AnimatedCounter active={act === 3} persist={act >= 3} />% Mapped
                            </p>
                          ),
                        },
                        { label: "CARDIAC TIMELINE", value: "3 Years Synthesized" },
                      ].map((item, i) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.7 + i * 0.12, ease: EASE_OUT }}
                          className="border-l border-clinical-white/20 pl-3 sm:pl-4"
                        >
                          <p className="font-mono text-[9px] sm:text-[10px] opacity-60 uppercase">{item.label}</p>
                          {"value" in item ? (
                            <p className="text-sm sm:text-lg font-medium">{item.value}</p>
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

            {/* Doctor Review Verification Overlay */}
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
                  transition={{ duration: 0.8, ease: EASE_OUT }}
                  className="absolute inset-0 flex items-center justify-center bg-clinical-white/50 pointer-events-none will-change-[opacity] p-4"
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 8 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.94, opacity: 0, transition: { duration: 0.5, ease: EASE_OUT } }}
                    transition={EASE_SPRING}
                    className="bg-clinical-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-data-node/30 text-center max-w-[92%] sm:max-w-md mx-auto"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, ...EASE_SPRING }}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary-fixed mx-auto mb-4 flex items-center justify-center shadow-inner"
                    >
                      <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">
                        verified
                      </span>
                    </motion.div>
                    <motion.h4
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5, ease: EASE_OUT }}
                      className="font-headline-md text-xl sm:text-2xl text-primary mb-1"
                    >
                      Prepared for the Specialist
                    </motion.h4>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="font-mono text-xs text-secondary mb-5 tracking-wider uppercase"
                    >
                      THE DOCTOR HAS YOUR FULL CONTEXT
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.4 }}
                      className="inline-flex items-center justify-center gap-2 text-green-700 bg-green-500/10 px-4 py-1.5 rounded-full font-mono text-xs font-semibold tracking-wider"
                    >
                      <span className="w-2 h-2 rounded-full bg-green-600" />
                      <span>NO DATA LEFT BEHIND</span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

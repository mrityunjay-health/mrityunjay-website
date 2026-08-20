"use client";

import { useRef, type ReactElement, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}): ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      rotateX: 10,
      scale: 0.98,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1], // Custom bouncy/smooth easing
        delay 
      }
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      style={{ perspective: 1200 }}
    >
      {children}
    </motion.div>
  );
}

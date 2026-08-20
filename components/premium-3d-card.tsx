"use client";

import { useRef, useState, type ReactElement, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Premium3DCardProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly glareOpacity?: number;
  readonly tiltAmount?: number;
}

export function Premium3DCard({
  children,
  className = "",
  glareOpacity = 0.15,
  tiltAmount = 8,
}: Premium3DCardProps): ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for pointer position
  const x = useMotionValue(0.5); // 0 to 1
  const y = useMotionValue(0.5); // 0 to 1

  // Smooth springs for physics-based feel
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Transform raw pointer values into 3D rotations
  const rotateX = useTransform(smoothY, [0, 1], [tiltAmount, -tiltAmount]);
  const rotateY = useTransform(smoothX, [0, 1], [-tiltAmount, tiltAmount]);

  // Transform raw pointer values into glare gradients
  const glareX = useTransform(smoothX, [0, 1], [0, 100]);
  const glareY = useTransform(smoothY, [0, 1], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Return to center
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformPerspective: 1000,
      }}
      className={`relative group will-change-transform ${className}`}
    >
      {children}
      
      {/* Glare Effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-50 mix-blend-overlay transition-opacity duration-300 rounded-inherit"
        style={{
          opacity: isHovered ? glareOpacity : 0,
          background: useTransform(
            [glareX, glareY],
            ([gx, gy]) =>
              `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 80%)`
          ),
          borderRadius: "inherit",
        }}
      />
    </motion.div>
  );
}

"use client";

import { useEffect, useRef, useState, type ReactElement, type ReactNode } from "react";

// ponytail: Replaced with a no-op wrapper. IntersectionObserver-driven reveals
// were unreliable in test environments (false negatives when the page is taller
// than the viewport). CSS @keyframes animations in `globals.css` handle the
// visual reveal instead, scoped via the section element. This wrapper exists only
// to preserve the public API; it forwards children and className unchanged.
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}): ReactElement {
  // Optional progressive enhancement: add a class when the element scrolls in.
  // Content is always rendered, never hidden. Animation runs once via CSS.
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") return;
    // Only set up observer — do NOT hide content. If observer never fires, that's fine.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setArmed(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      data-reveal={armed ? "in" : undefined}
      data-delay={delay || undefined}
    >
      {children}
    </div>
  );
}

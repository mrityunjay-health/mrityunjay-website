"use client";

import { useEffect, useRef, type ReactElement } from "react";
import { useReducedMotion } from "framer-motion";

interface CytoplasmicVesicle {
  x: number;
  y: number;
  radius: number;
  angle: number;
  orbitRatio: number;
  speed: number;
  alpha: number;
  pulsePhase: number;
}

interface ChromatinThread {
  startAngle: number;
  endAngle: number;
  controlDist: number;
  pulseOffset: number;
}

export function LivingCellBackground({
  className = "",
}: {
  readonly className?: string;
}): ReactElement {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with high viscous damping
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;
    let mouseX = width / 2;
    let mouseY = height / 2;
    let mouseActive = false;

    const handleResize = (): void => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent): void => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
      mouseActive = true;
    };

    const handleMouseLeave = (): void => {
      mouseActive = false;
      targetMouseX = width / 2;
      targetMouseY = height / 2;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Biological cytoplasmic vesicles (micro-organelles drifting with cyclosis)
    const vesicleCount = 28;
    const vesicles: CytoplasmicVesicle[] = Array.from({ length: vesicleCount }, (_, i) => {
      const orbitRatio = 0.28 + Math.random() * 0.58;
      return {
        x: 0,
        y: 0,
        radius: 1.8 + Math.random() * 2.2,
        angle: (i / vesicleCount) * Math.PI * 2 + Math.random() * 0.4,
        orbitRatio,
        speed: (0.08 + Math.random() * 0.12) * (Math.random() > 0.5 ? 1 : -1),
        alpha: 0.2 + Math.random() * 0.4,
        pulsePhase: Math.random() * Math.PI * 2,
      };
    });

    // Organic chromatin threads connecting nucleus to membrane
    const threadCount = 7;
    const chromatinThreads: ChromatinThread[] = Array.from({ length: threadCount }, (_, i) => ({
      startAngle: (i / threadCount) * Math.PI * 2,
      endAngle: (i / threadCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.5,
      controlDist: 0.45 + Math.random() * 0.25,
      pulseOffset: Math.random() * Math.PI * 2,
    }));

    let time = 0;

    const render = (): void => {
      // Quiet, biological time progression (60–65 BPM homeostasis)
      time += reduced ? 0.001 : 0.008;

      // Heavy viscous fluid damping for mouse interaction (Principle 19: Calm is a competitive advantage)
      mouseX += (targetMouseX - mouseX) * 0.025;
      mouseY += (targetMouseY - mouseY) * 0.025;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height * (width < 640 ? 0.36 : 0.48);
      const baseRadius = Math.min(width, height) * (width < 640 ? 0.32 : 0.3);

      // Mouse distance influence
      const mouseDist = Math.hypot(mouseX - cx, mouseY - cy);
      const mouseInfluence = mouseActive ? Math.min(mouseDist / (baseRadius * 1.6), 1) : 0;
      const mouseAngle = Math.atan2(mouseY - cy, mouseX - cx);

      // 1. Soft Ambient Volumetric Halo
      const ambientGlow = ctx.createRadialGradient(cx, cy, baseRadius * 0.2, cx, cy, baseRadius * 1.6);
      ambientGlow.addColorStop(0, "rgba(165, 216, 255, 0.16)");
      ambientGlow.addColorStop(0.4, "rgba(0, 43, 91, 0.05)");
      ambientGlow.addColorStop(0.75, "rgba(0, 23, 54, 0.015)");
      ambientGlow.addColorStop(1, "rgba(249, 249, 249, 0)");

      ctx.fillStyle = ambientGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, baseRadius * 1.6, 0, Math.PI * 2);
      ctx.fill();

      // 2. Compute Organic Undulating Lipid Bilayer Points
      const totalPoints = 160;
      const membranePoints: Array<{ x: number; y: number; r: number; angle: number }> = [];

      for (let i = 0; i < totalPoints; i++) {
        const angle = (i / totalPoints) * Math.PI * 2;

        // Harmonic organic deformation (low frequencies for calm biological motion)
        const w1 = Math.sin(angle * 3 + time * 0.7) * 0.03;
        const w2 = Math.sin(angle * 4 - time * 0.9) * 0.018;
        const w3 = Math.cos(angle * 6 + time * 1.1) * 0.012;

        // Rhythmic 62 BPM resting human cardiac pulse (Principle 7: Motion must explain homeostasis)
        const cardiacPulse = Math.sin(time * 1.05) * 0.018;

        // Gentle viscous surface distortion towards cursor
        let cursorPull = 0;
        if (mouseActive) {
          const angleDiff = Math.abs(((angle - mouseAngle + Math.PI) % (Math.PI * 2)) - Math.PI);
          if (angleDiff < 0.8) {
            const factor = 1 - angleDiff / 0.8;
            cursorPull = factor * 0.04 * mouseInfluence;
          }
        }

        const r = baseRadius * (1 + w1 + w2 + w3 + cardiacPulse + cursorPull);
        const px = cx + Math.cos(angle) * r;
        const py = cy + Math.sin(angle) * r;

        membranePoints.push({ x: px, y: py, r, angle });
      }

      // 3. Draw Translucent Cytoplasm Fluid
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(membranePoints[0].x, membranePoints[0].y);
      for (let i = 1; i < totalPoints; i++) {
        const xc = (membranePoints[i].x + membranePoints[(i + 1) % totalPoints].x) / 2;
        const yc = (membranePoints[i].y + membranePoints[(i + 1) % totalPoints].y) / 2;
        ctx.quadraticCurveTo(membranePoints[i].x, membranePoints[i].y, xc, yc);
      }
      ctx.closePath();

      const cytoplasmGrad = ctx.createRadialGradient(cx, cy, baseRadius * 0.1, cx, cy, baseRadius);
      cytoplasmGrad.addColorStop(0, "rgba(255, 255, 255, 0.88)");
      cytoplasmGrad.addColorStop(0.35, "rgba(240, 247, 255, 0.65)");
      cytoplasmGrad.addColorStop(0.7, "rgba(214, 227, 255, 0.28)");
      cytoplasmGrad.addColorStop(0.95, "rgba(165, 216, 255, 0.16)");
      cytoplasmGrad.addColorStop(1, "rgba(0, 23, 54, 0.04)");

      ctx.fillStyle = cytoplasmGrad;
      ctx.fill();

      // Clip internal organelles to membrane
      ctx.clip();

      // 4. Draw Organic Chromatin Filaments
      chromatinThreads.forEach((th) => {
        const startR = baseRadius * 0.22;
        const endR = baseRadius * (0.82 + Math.sin(time * 0.6 + th.pulseOffset) * 0.06);

        const x1 = cx + Math.cos(th.startAngle + time * 0.15) * startR;
        const y1 = cy + Math.sin(th.startAngle + time * 0.15) * startR;

        const x2 = cx + Math.cos(th.endAngle + time * 0.1) * endR;
        const y2 = cy + Math.sin(th.endAngle + time * 0.1) * endR;

        const midAngle = (th.startAngle + th.endAngle) / 2 + Math.sin(time * 0.8 + th.pulseOffset) * 0.15;
        const midR = baseRadius * th.controlDist;
        const cxPoint = cx + Math.cos(midAngle) * midR;
        const cyPoint = cy + Math.sin(midAngle) * midR;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(cxPoint, cyPoint, x2, y2);
        ctx.strokeStyle = "rgba(0, 23, 54, 0.06)";
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Subtle biological luminescence traveling along filament
        const pulseT = ((time * 0.25 + th.pulseOffset) % 1 + 1) % 1;
        const pulseX = (1 - pulseT) * (1 - pulseT) * x1 + 2 * (1 - pulseT) * pulseT * cxPoint + pulseT * pulseT * x2;
        const pulseY = (1 - pulseT) * (1 - pulseT) * y1 + 2 * (1 - pulseT) * pulseT * cyPoint + pulseT * pulseT * y2;

        const pulseGlow = ctx.createRadialGradient(pulseX, pulseY, 0, pulseX, pulseY, 5);
        pulseGlow.addColorStop(0, "rgba(165, 216, 255, 0.7)");
        pulseGlow.addColorStop(0.6, "rgba(0, 43, 91, 0.2)");
        pulseGlow.addColorStop(1, "rgba(0, 23, 54, 0)");

        ctx.fillStyle = pulseGlow;
        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 3.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // 5. Cytoplasmic Cyclosis (Vesicle Drift)
      vesicles.forEach((v) => {
        v.angle += v.speed * 0.015;
        const rDist = baseRadius * v.orbitRatio + Math.sin(time * 0.8 + v.pulsePhase) * 8;
        const px = cx + Math.cos(v.angle) * rDist;
        const py = cy + Math.sin(v.angle) * rDist;

        v.x = px;
        v.y = py;

        const pulseAlpha = v.alpha * (0.75 + 0.25 * Math.sin(time + v.pulsePhase));

        ctx.beginPath();
        ctx.arc(px, py, v.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 23, 54, ${pulseAlpha * 0.25})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px, py, v.radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(165, 216, 255, ${pulseAlpha * 0.15})`;
        ctx.fill();
      });

      // 6. Bioluminescent Central Nucleus (Warm Intelligence Core)
      const nucleusRadius = baseRadius * 0.3 * (1 + 0.025 * Math.sin(time * 1.05));

      const nucleusGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, nucleusRadius * 1.5);
      nucleusGrad.addColorStop(0, "rgba(255, 255, 255, 0.95)");
      nucleusGrad.addColorStop(0.25, "rgba(165, 216, 255, 0.65)");
      nucleusGrad.addColorStop(0.6, "rgba(0, 43, 91, 0.18)");
      nucleusGrad.addColorStop(0.85, "rgba(0, 23, 54, 0.05)");
      nucleusGrad.addColorStop(1, "rgba(0, 23, 54, 0)");

      ctx.fillStyle = nucleusGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, nucleusRadius * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // Soft Nucleus Membrane Boundary
      ctx.beginPath();
      ctx.arc(cx, cy, nucleusRadius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(0, 23, 54, 0.18)";
      ctx.lineWidth = 1.2;
      ctx.stroke();

      ctx.restore(); // End membrane clipping

      // 7. Refractive Double Lipid Bilayer Hairlines
      ctx.beginPath();
      ctx.moveTo(membranePoints[0].x, membranePoints[0].y);
      for (let i = 1; i < totalPoints; i++) {
        const xc = (membranePoints[i].x + membranePoints[(i + 1) % totalPoints].x) / 2;
        const yc = (membranePoints[i].y + membranePoints[(i + 1) % totalPoints].y) / 2;
        ctx.quadraticCurveTo(membranePoints[i].x, membranePoints[i].y, xc, yc);
      }
      ctx.closePath();
      ctx.strokeStyle = "rgba(0, 23, 54, 0.15)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Inner Specular Refraction Ring
      ctx.beginPath();
      for (let i = 0; i < totalPoints; i++) {
        const pt = membranePoints[i];
        const innerR = pt.r - 3;
        const px = cx + Math.cos(pt.angle) * innerR;
        const py = cy + Math.sin(pt.angle) * innerR;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.strokeStyle = "rgba(165, 216, 255, 0.4)";
      ctx.lineWidth = 1;
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reduced]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-auto ${className}`}
      aria-hidden="true"
    />
  );
}

"use client";

import { useEffect, useRef, type ReactElement } from "react";
import { useReducedMotion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  radius: number;
  angle: number;
  orbitRadius: number;
  speed: number;
  alpha: number;
  pulseSpeed: number;
  pulsePhase: number;
}

interface SynapticSpur {
  startAngle: number;
  endAngle: number;
  controlDist: number;
  length: number;
  sparkProgress: number;
  sparkSpeed: number;
  active: boolean;
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

    // Mouse coordinates with smooth interpolation
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;
    let mouseX = width / 2;
    let mouseY = height / 2;
    let mouseActive = false;

    // Handle high DPI
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

    // Seed cytoplasmic data organelles (vesicles)
    const particleCount = 32;
    const particles: Particle[] = Array.from({ length: particleCount }, (_, i) => {
      const orbitRatio = 0.25 + Math.random() * 0.65;
      return {
        x: 0,
        y: 0,
        radius: 1.5 + Math.random() * 2.5,
        angle: (i / particleCount) * Math.PI * 2 + Math.random() * 0.5,
        orbitRadius: orbitRatio,
        speed: (0.15 + Math.random() * 0.25) * (Math.random() > 0.5 ? 1 : -1),
        alpha: 0.25 + Math.random() * 0.5,
        pulseSpeed: 1 + Math.random() * 2,
        pulsePhase: Math.random() * Math.PI * 2,
      };
    });

    // Seed chromatin & synaptic filaments connecting nucleus to membrane
    const filamentCount = 8;
    const filaments: SynapticSpur[] = Array.from({ length: filamentCount }, (_, i) => ({
      startAngle: (i / filamentCount) * Math.PI * 2,
      endAngle: (i / filamentCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.4,
      controlDist: 0.5 + Math.random() * 0.3,
      length: 0.85 + Math.random() * 0.15,
      sparkProgress: Math.random(),
      sparkSpeed: 0.008 + Math.random() * 0.012,
      active: true,
    }));

    let time = 0;

    // Render loop
    const render = (): void => {
      time += reduced ? 0.002 : 0.012;

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const baseRadius = Math.min(width, height) * (width < 640 ? 0.38 : 0.32);

      // Mouse distance influence on membrane
      const mouseDistFromCenter = Math.hypot(mouseX - cx, mouseY - cy);
      const mouseInfluenceStrength = mouseActive ? Math.min(mouseDistFromCenter / (baseRadius * 1.5), 1) : 0;
      const mouseAngle = Math.atan2(mouseY - cy, mouseX - cx);

      // 1. Volumetric Ambient Bioluminescent Background Glow
      const ambientGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, baseRadius * 1.8);
      ambientGlow.addColorStop(0, "rgba(165, 216, 255, 0.14)");
      ambientGlow.addColorStop(0.35, "rgba(0, 43, 91, 0.06)");
      ambientGlow.addColorStop(0.7, "rgba(0, 23, 54, 0.02)");
      ambientGlow.addColorStop(1, "rgba(249, 249, 249, 0)");

      ctx.fillStyle = ambientGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, baseRadius * 1.8, 0, Math.PI * 2);
      ctx.fill();

      // 2. Compute Deformed Membrane Vertices
      const totalPoints = 180;
      const membranePoints: Array<{ x: number; y: number; r: number; angle: number }> = [];

      for (let i = 0; i < totalPoints; i++) {
        const angle = (i / totalPoints) * Math.PI * 2;

        // Multi-frequency harmonic wave deformation
        const w1 = Math.sin(angle * 3 + time * 0.8) * 0.035;
        const w2 = Math.sin(angle * 5 - time * 1.2) * 0.022;
        const w3 = Math.cos(angle * 7 + time * 1.5) * 0.015;
        const w4 = Math.sin(angle * 2 + time * 0.5) * 0.025;

        // Cardiac resting rhythm (65 BPM)
        const cardiacPulse = Math.sin(time * 1.08) * 0.02;

        // Cursor attraction deformation
        let cursorDistortion = 0;
        if (mouseActive) {
          const angleDiff = Math.abs(((angle - mouseAngle + Math.PI) % (Math.PI * 2)) - Math.PI);
          if (angleDiff < 0.9) {
            const pullFactor = (1 - angleDiff / 0.9);
            cursorDistortion = pullFactor * 0.06 * mouseInfluenceStrength;
          }
        }

        const r = baseRadius * (1 + w1 + w2 + w3 + w4 + cardiacPulse + cursorDistortion);
        const px = cx + Math.cos(angle) * r;
        const py = cy + Math.sin(angle) * r;

        membranePoints.push({ x: px, y: py, r, angle });
      }

      // Draw Translucent Cytoplasm Interior
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
      cytoplasmGrad.addColorStop(0, "rgba(255, 255, 255, 0.85)");
      cytoplasmGrad.addColorStop(0.3, "rgba(243, 248, 255, 0.6)");
      cytoplasmGrad.addColorStop(0.7, "rgba(214, 227, 255, 0.25)");
      cytoplasmGrad.addColorStop(0.95, "rgba(165, 216, 255, 0.15)");
      cytoplasmGrad.addColorStop(1, "rgba(0, 23, 54, 0.05)");

      ctx.fillStyle = cytoplasmGrad;
      ctx.fill();

      // Clip inner contents to cell membrane
      ctx.clip();

      // 3. Draw Chromatin Filaments & Synaptic Action Potentials
      filaments.forEach((fil) => {
        const startR = baseRadius * 0.25;
        const endR = baseRadius * (0.8 + Math.sin(time * 0.8 + fil.startAngle) * 0.08);

        const x1 = cx + Math.cos(fil.startAngle + time * 0.2) * startR;
        const y1 = cy + Math.sin(fil.startAngle + time * 0.2) * startR;

        const x2 = cx + Math.cos(fil.endAngle + time * 0.15) * endR;
        const y2 = cy + Math.sin(fil.endAngle + time * 0.15) * endR;

        const midAngle = (fil.startAngle + fil.endAngle) / 2 + Math.sin(time + fil.startAngle) * 0.2;
        const midR = baseRadius * fil.controlDist;
        const cxPoint = cx + Math.cos(midAngle) * midR;
        const cyPoint = cy + Math.sin(midAngle) * midR;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(cxPoint, cyPoint, x2, y2);
        ctx.strokeStyle = "rgba(0, 23, 54, 0.07)";
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Synaptic Light Spark
        fil.sparkProgress = (fil.sparkProgress + fil.sparkSpeed) % 1;
        const t = fil.sparkProgress;
        // Quadratic Bezier interpolation
        const sparkX = (1 - t) * (1 - t) * x1 + 2 * (1 - t) * t * cxPoint + t * t * x2;
        const sparkY = (1 - t) * (1 - t) * y1 + 2 * (1 - t) * t * cyPoint + t * t * y2;

        const sparkGlow = ctx.createRadialGradient(sparkX, sparkY, 0, sparkX, sparkY, 6);
        sparkGlow.addColorStop(0, "rgba(165, 216, 255, 0.9)");
        sparkGlow.addColorStop(0.5, "rgba(0, 43, 91, 0.4)");
        sparkGlow.addColorStop(1, "rgba(0, 23, 54, 0)");

        ctx.fillStyle = sparkGlow;
        ctx.beginPath();
        ctx.arc(sparkX, sparkY, 4, 0, Math.PI * 2);
        ctx.fill();
      });

      // 4. Draw Cytoplasm Metabolic Data Organelles (Vesicles)
      particles.forEach((p) => {
        p.angle += p.speed * 0.02;
        const rDist = baseRadius * p.orbitRadius + Math.sin(time * p.pulseSpeed + p.pulsePhase) * 12;
        const px = cx + Math.cos(p.angle) * rDist;
        const py = cy + Math.sin(p.angle) * rDist;

        p.x = px;
        p.y = py;

        const pulseAlpha = p.alpha * (0.7 + 0.3 * Math.sin(time * p.pulseSpeed + p.pulsePhase));

        // Draw particle body
        ctx.beginPath();
        ctx.arc(px, py, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 23, 54, ${pulseAlpha * 0.35})`;
        ctx.fill();

        // Inner halo
        ctx.beginPath();
        ctx.arc(px, py, p.radius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(165, 216, 255, ${pulseAlpha * 0.2})`;
        ctx.fill();
      });

      // 5. Draw Bioluminescent Central Nucleus (Intelligence Core)
      const nucleusRadius = baseRadius * 0.32 * (1 + 0.035 * Math.sin(time * 1.08));

      // Core radial gradient
      const nucleusGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, nucleusRadius * 1.6);
      nucleusGrad.addColorStop(0, "rgba(255, 255, 255, 0.9)");
      nucleusGrad.addColorStop(0.25, "rgba(165, 216, 255, 0.7)");
      nucleusGrad.addColorStop(0.55, "rgba(0, 43, 91, 0.2)");
      nucleusGrad.addColorStop(0.85, "rgba(0, 23, 54, 0.06)");
      nucleusGrad.addColorStop(1, "rgba(0, 23, 54, 0)");

      ctx.fillStyle = nucleusGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, nucleusRadius * 1.6, 0, Math.PI * 2);
      ctx.fill();

      // Nucleus Concentric Chromatin Boundary Ring
      ctx.beginPath();
      ctx.arc(cx, cy, nucleusRadius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(0, 23, 54, 0.25)";
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Telemetry Orbital Ring with subtle rotation
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(time * 0.25);
      ctx.setLineDash([4, 8]);
      ctx.beginPath();
      ctx.arc(0, 0, nucleusRadius * 1.25, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(165, 216, 255, 0.6)";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      ctx.restore(); // End membrane clipping

      // 6. Draw Refractive Outer Lipid Bilayer Hairlines
      // Outer Refraction Ring
      ctx.beginPath();
      ctx.moveTo(membranePoints[0].x, membranePoints[0].y);
      for (let i = 1; i < totalPoints; i++) {
        const xc = (membranePoints[i].x + membranePoints[(i + 1) % totalPoints].x) / 2;
        const yc = (membranePoints[i].y + membranePoints[(i + 1) % totalPoints].y) / 2;
        ctx.quadraticCurveTo(membranePoints[i].x, membranePoints[i].y, xc, yc);
      }
      ctx.closePath();
      ctx.strokeStyle = "rgba(0, 23, 54, 0.18)";
      ctx.lineWidth = 1.8;
      ctx.stroke();

      // Specular Highlight Inner Ring (Refraction Layer)
      ctx.beginPath();
      for (let i = 0; i < totalPoints; i++) {
        const pt = membranePoints[i];
        const innerR = pt.r - 3.5;
        const px = cx + Math.cos(pt.angle) * innerR;
        const py = cy + Math.sin(pt.angle) * innerR;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.strokeStyle = "rgba(165, 216, 255, 0.45)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // 7. Outer Membrane Receptor Probes
      const receptorCount = 12;
      for (let k = 0; k < receptorCount; k++) {
        const ptIndex = Math.floor((k / receptorCount) * totalPoints);
        const pt = membranePoints[ptIndex];
        const receptorAngle = pt.angle;
        const extR = pt.r + 7 + Math.sin(time * 2 + k) * 2;
        const rx = cx + Math.cos(receptorAngle) * extR;
        const ry = cy + Math.sin(receptorAngle) * extR;

        // Stalk
        ctx.beginPath();
        ctx.moveTo(pt.x, pt.y);
        ctx.lineTo(rx, ry);
        ctx.strokeStyle = "rgba(0, 23, 54, 0.15)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Node Head
        ctx.beginPath();
        ctx.arc(rx, ry, 2, 0, Math.PI * 2);
        ctx.fillStyle = k % 3 === 0 ? "rgba(165, 216, 255, 0.9)" : "rgba(0, 23, 54, 0.35)";
        ctx.fill();
      }

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

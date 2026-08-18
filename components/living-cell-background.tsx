"use client";

import { useEffect, useRef, type ReactElement } from "react";
import { useReducedMotion } from "framer-motion";

interface Mitochondrion {
  angle: number;
  orbitRatio: number;
  speed: number;
  length: number;
  width: number;
  rotationOffset: number;
  pulsePhase: number;
  cristaeCount: number;
}

interface RibosomeCluster {
  angle: number;
  orbitRatio: number;
  speed: number;
  nodeCount: number;
  clusterRadius: number;
  alpha: number;
  pulsePhase: number;
}

interface CytoskeletalBranch {
  startAngle: number;
  midAngle: number;
  endAngle: number;
  midRadius: number;
  endRadius: number;
  packetProgresses: number[];
  packetSpeeds: number[];
}

interface BokehParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  depth: number; // -1 = background, 1 = foreground
}

interface PhotonWave {
  radiusRatio: number;
  alpha: number;
  maxRadiusRatio: number;
  speed: number;
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

    // Mouse tracking & smooth velocity interpolation
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;
    let mouseX = width / 2;
    let mouseY = height / 2;
    let mouseVx = 0;
    let mouseVy = 0;
    let mouseActive = false;

    // High DPI scaling
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

    // 1. Membrane Vertices & Wave Equation Arrays (200 points)
    const vertexCount = 200;
    const waveDisplacement = new Float32Array(vertexCount);
    const waveVelocity = new Float32Array(vertexCount);

    // 2. Organelle Ecosystem
    const mitochondriaCount = 8;
    const mitochondria: Mitochondrion[] = Array.from({ length: mitochondriaCount }, (_, i) => ({
      angle: (i / mitochondriaCount) * Math.PI * 2 + Math.random() * 0.4,
      orbitRatio: 0.42 + (i % 3) * 0.16,
      speed: (0.04 + Math.random() * 0.04) * (i % 2 === 0 ? 1 : -1),
      length: 15 + Math.random() * 6,
      width: 6 + Math.random() * 3,
      rotationOffset: (Math.random() - 0.5) * 0.3,
      pulsePhase: Math.random() * Math.PI * 2,
      cristaeCount: 4 + Math.floor(Math.random() * 3),
    }));

    const clusterCount = 14;
    const ribosomeClusters: RibosomeCluster[] = Array.from({ length: clusterCount }, (_, i) => ({
      angle: (i / clusterCount) * Math.PI * 2 + Math.random() * 0.5,
      orbitRatio: 0.28 + Math.random() * 0.52,
      speed: (0.05 + Math.random() * 0.06) * (Math.random() > 0.5 ? 1 : -1),
      nodeCount: 4 + Math.floor(Math.random() * 4),
      clusterRadius: 5 + Math.random() * 5,
      alpha: 0.2 + Math.random() * 0.3,
      pulsePhase: Math.random() * Math.PI * 2,
    }));

    // 3. Cytoskeletal Microtubule Filaments
    const branchCount = width < 768 ? 3 : 8;
    const cytoskeletalBranches: CytoskeletalBranch[] = Array.from({ length: branchCount }, (_, i) => {
      const baseA = (i / branchCount) * Math.PI * 2;
      return {
        startAngle: baseA,
        midAngle: baseA + (Math.random() - 0.5) * 0.35,
        endAngle: baseA + (Math.random() - 0.5) * 0.5,
        midRadius: 0.52 + Math.random() * 0.15,
        endRadius: 0.88 + Math.random() * 0.08,
        packetProgresses: [Math.random(), (Math.random() + 0.5) % 1],
        packetSpeeds: [0.004 + Math.random() * 0.004, 0.005 + Math.random() * 0.005],
      };
    });

    // 4. Optical Bokeh & Colloidal Floaters (Z-depth)
    const bokehCount = width < 768 ? 6 : 20;
    const bokehParticles: BokehParticle[] = Array.from({ length: bokehCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      radius: 4 + Math.random() * 12,
      alpha: 0.01 + Math.random() * 0.02,
      depth: Math.random() > 0.7 ? 1 : -1,
    }));

    // 5. Cardiac Photon Waves
    const photonWaves: PhotonWave[] = [];
    let lastBeatTime = 0;

    let time = 0;

    const render = (): void => {
      time += reduced ? 0.001 : 0.006;

      // Mouse velocity & viscous interpolation
      mouseVx = targetMouseX - mouseX;
      mouseVy = targetMouseY - mouseY;
      mouseX += mouseVx * 0.035;
      mouseY += mouseVy * 0.035;

      const mouseSpeed = Math.hypot(mouseVx, mouseVy);

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height * (width < 640 ? 0.36 : 0.48);
      const baseRadius = Math.min(width, height) * (width < 640 ? 0.32 : 0.3);

      const mouseDist = Math.hypot(mouseX - cx, mouseY - cy);
      const mouseAngle = Math.atan2(mouseY - cy, mouseX - cx);

      // --- Biphasic Cardiac Rhythm (62 BPM Homeostasis) ---
      const cardiacPeriod = 6.0;
      const cardiacT = time % cardiacPeriod;
      let cardiacPulse = 0;

      if (cardiacT < 0.8) {
        // Systolic contraction wave
        cardiacPulse = Math.sin((cardiacT / 0.8) * Math.PI) * 0.024;
        if (cardiacT < 0.2 && time - lastBeatTime > 2.0) {
          lastBeatTime = time;
          photonWaves.push({
            radiusRatio: 0.28,
            alpha: 0.35,
            maxRadiusRatio: 1.05,
            speed: 0.01,
          });
        }
      } else if (cardiacT >= 1.2 && cardiacT < 2.0) {
        // Diastolic secondary recoil
        cardiacPulse = Math.sin(((cardiacT - 1.2) / 0.8) * Math.PI) * 0.012;
      }

      // --- 0. Background Deep Bokeh (Z = -1) ---
      bokehParticles.forEach((b) => {
        if (b.depth === -1) {
          b.x += b.vx;
          b.y += b.vy;
          if (b.x < 0) b.x = width;
          if (b.x > width) b.x = 0;
          if (b.y < 0) b.y = height;
          if (b.y > height) b.y = 0;

          const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius);
          grad.addColorStop(0, `rgba(165, 216, 255, ${b.alpha * 1.2})`);
          grad.addColorStop(1, "rgba(249, 249, 249, 0)");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // --- 1. Ambient Volumetric Halo ---
      const ambientGlow = ctx.createRadialGradient(cx, cy, baseRadius * 0.1, cx, cy, baseRadius * 1.7);
      ambientGlow.addColorStop(0, "rgba(165, 216, 255, 0.18)");
      ambientGlow.addColorStop(0.35, "rgba(0, 43, 91, 0.05)");
      ambientGlow.addColorStop(0.75, "rgba(0, 23, 54, 0.012)");
      ambientGlow.addColorStop(1, "rgba(249, 249, 249, 0)");

      ctx.fillStyle = ambientGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, baseRadius * 1.7, 0, Math.PI * 2);
      ctx.fill();

      // --- 2. Critically Damped Membrane Wave Physics ---
      // Parameters engineered for absolute stability: rapid decay in <300ms, zero runaway oscillation
      const k = 0.08;             // Surface tension restoration
      const dampingFactor = 0.88; // Direct velocity dissipation factor
      const s = 0.06;             // Controlled shear coupling (k + 4s = 0.32 << 1.0)

      // Inject gentle localized mouse impulse strictly within narrow membrane band
      if (mouseActive && mouseSpeed > 0.4) {
        const membraneDistFromMouse = Math.abs(mouseDist - baseRadius);
        if (membraneDistFromMouse < baseRadius * 0.18) {
          const nearestIndex = Math.floor((((mouseAngle + Math.PI * 2) % (Math.PI * 2)) / (Math.PI * 2)) * vertexCount);
          const impulse = Math.min(mouseSpeed * 0.0006, 0.015);
          for (let di = -4; di <= 4; di++) {
            const idx = (nearestIndex + di + vertexCount) % vertexCount;
            const falloff = Math.cos((di / 4) * (Math.PI / 2));
            waveVelocity[idx] += impulse * falloff * (mouseDist < baseRadius ? -1 : 1);
          }
        }
      }

      // Update 1D wave equation with dissipation and strict displacement bounds
      for (let i = 0; i < vertexCount; i++) {
        const prev = waveDisplacement[(i - 1 + vertexCount) % vertexCount];
        const next = waveDisplacement[(i + 1) % vertexCount];
        const curr = waveDisplacement[i];
        const accel = -k * curr + s * (prev - 2 * curr + next);
        
        // Semi-implicit integration with velocity damping
        waveVelocity[i] = (waveVelocity[i] + accel) * dampingFactor;
        waveVelocity[i] = Math.max(-0.02, Math.min(0.02, waveVelocity[i]));
        
        waveDisplacement[i] += waveVelocity[i];
        // Strict displacement clamp (limits ripple to max ±4% of radius, guaranteeing stability)
        waveDisplacement[i] = Math.max(-0.04, Math.min(0.04, waveDisplacement[i]));
      }

      // --- 3. Compute Membrane Perimeter Points ---
      const membranePoints: Array<{ x: number; y: number; r: number; angle: number }> = [];

      for (let i = 0; i < vertexCount; i++) {
        const angle = (i / vertexCount) * Math.PI * 2;

        // Smooth biological Fourier modes
        const h1 = Math.sin(angle * 3 + time * 0.6) * 0.024;
        const h2 = Math.sin(angle * 5 - time * 0.8) * 0.014;
        const h3 = Math.cos(angle * 7 + time * 1.0) * 0.008;

        // Ripple displacement from physics array
        const ripple = waveDisplacement[i];

        const totalR = baseRadius * (1 + h1 + h2 + h3 + cardiacPulse + ripple);
        const px = cx + Math.cos(angle) * totalR;
        const py = cy + Math.sin(angle) * totalR;

        membranePoints.push({ x: px, y: py, r: totalR, angle });
      }

      // --- 4. Cytoplasm Medium & Internal Clipping Mask ---
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(membranePoints[0].x, membranePoints[0].y);
      for (let i = 1; i < vertexCount; i++) {
        const xc = (membranePoints[i].x + membranePoints[(i + 1) % vertexCount].x) / 2;
        const yc = (membranePoints[i].y + membranePoints[(i + 1) % vertexCount].y) / 2;
        ctx.quadraticCurveTo(membranePoints[i].x, membranePoints[i].y, xc, yc);
      }
      ctx.closePath();

      const cytoplasmGrad = ctx.createRadialGradient(cx, cy, baseRadius * 0.08, cx, cy, baseRadius * 1.02);
      cytoplasmGrad.addColorStop(0, "rgba(255, 255, 255, 0.88)");
      cytoplasmGrad.addColorStop(0.3, "rgba(242, 248, 255, 0.65)");
      cytoplasmGrad.addColorStop(0.65, "rgba(214, 227, 255, 0.25)");
      cytoplasmGrad.addColorStop(0.92, "rgba(165, 216, 255, 0.14)");
      cytoplasmGrad.addColorStop(1, "rgba(0, 23, 54, 0.04)");

      ctx.fillStyle = cytoplasmGrad;
      ctx.fill();

      // Clip internal organelles to the lipid membrane
      ctx.clip();

      // --- 5. Endoplasmic Reticulum (ER) Labyrinth Ribbons ---
      ctx.save();
      ctx.strokeStyle = "rgba(0, 23, 54, 0.035)";
      ctx.lineWidth = 2.2;
      for (let ring = 0; ring < 3; ring++) {
        const erRadius = baseRadius * (0.34 + ring * 0.06);
        ctx.beginPath();
        for (let a = 0; a < Math.PI * 2; a += 0.12) {
          const erDrift = Math.sin(a * 8 + time * 0.5 + ring) * 2.5;
          const erX = cx + Math.cos(a) * (erRadius + erDrift);
          const erY = cy + Math.sin(a) * (erRadius + erDrift);
          if (a === 0) ctx.moveTo(erX, erY);
          else ctx.lineTo(erX, erY);
        }
        ctx.closePath();
        ctx.stroke();
      }
      ctx.restore();

      // --- 6. Cytoskeletal Microtubule Filaments & ATP Action Potentials ---
      cytoskeletalBranches.forEach((branch) => {
        const startR = baseRadius * 0.26;
        const endR = baseRadius * branch.endRadius;
        const midR = baseRadius * branch.midRadius;

        const x1 = cx + Math.cos(branch.startAngle + time * 0.08) * startR;
        const y1 = cy + Math.sin(branch.startAngle + time * 0.08) * startR;

        const x2 = cx + Math.cos(branch.endAngle + time * 0.05) * endR;
        const y2 = cy + Math.sin(branch.endAngle + time * 0.05) * endR;

        const cxPoint = cx + Math.cos(branch.midAngle + time * 0.06) * midR;
        const cyPoint = cy + Math.sin(branch.midAngle + time * 0.06) * midR;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(cxPoint, cyPoint, x2, y2);
        ctx.strokeStyle = "rgba(0, 23, 54, 0.05)";
        ctx.lineWidth = 1.1;
        ctx.stroke();

        // Mouse proximity excitation
        const filamentMidDist = Math.hypot(mouseX - cxPoint, mouseY - cyPoint);
        const excitation = mouseActive && filamentMidDist < 100 ? 1.8 : 1.0;

        // Draw ATP Energy Packets
        branch.packetProgresses.forEach((prog, pIdx) => {
          branch.packetProgresses[pIdx] = (prog + branch.packetSpeeds[pIdx] * excitation) % 1;
          const t = branch.packetProgresses[pIdx];

          const packetX = (1 - t) * (1 - t) * x1 + 2 * (1 - t) * t * cxPoint + t * t * x2;
          const packetY = (1 - t) * (1 - t) * y1 + 2 * (1 - t) * t * cyPoint + t * t * y2;

          const packetGlow = ctx.createRadialGradient(packetX, packetY, 0, packetX, packetY, 5 * excitation);
          packetGlow.addColorStop(0, `rgba(165, 216, 255, ${0.75 * excitation})`);
          packetGlow.addColorStop(0.5, "rgba(0, 43, 91, 0.2)");
          packetGlow.addColorStop(1, "rgba(0, 23, 54, 0)");

          ctx.fillStyle = packetGlow;
          ctx.beginPath();
          ctx.arc(packetX, packetY, 2.5 * excitation, 0, Math.PI * 2);
          ctx.fill();
        });
      });

      // --- 7. Mitochondria with Internal Cristae Folds ---
      mitochondria.forEach((mito) => {
        mito.angle += mito.speed * 0.012;
        const rDist = baseRadius * mito.orbitRatio + Math.sin(time * 0.5 + mito.pulsePhase) * 5;
        const mx = cx + Math.cos(mito.angle) * rDist;
        const my = cy + Math.sin(mito.angle) * rDist;

        ctx.save();
        ctx.translate(mx, my);
        ctx.rotate(mito.angle + Math.PI / 2 + mito.rotationOffset);

        // Outer mitochondrial capsule
        ctx.beginPath();
        ctx.ellipse(0, 0, mito.width, mito.length, 0, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 23, 54, 0.04)";
        ctx.fill();
        ctx.strokeStyle = "rgba(0, 23, 54, 0.14)";
        ctx.lineWidth = 0.9;
        ctx.stroke();

        // Inner transverse cristae folds
        ctx.beginPath();
        const step = (mito.length * 1.4) / mito.cristaeCount;
        for (let c = -mito.length * 0.6; c <= mito.length * 0.6; c += step) {
          ctx.moveTo(-mito.width * 0.6, c);
          ctx.lineTo(mito.width * 0.6, c);
        }
        ctx.strokeStyle = "rgba(165, 216, 255, 0.4)";
        ctx.lineWidth = 0.7;
        ctx.stroke();

        ctx.restore();
      });

      // --- 8. Ribosome Cluster Constellations ---
      ribosomeClusters.forEach((cluster) => {
        cluster.angle += cluster.speed * 0.015;
        const rDist = baseRadius * cluster.orbitRatio;
        const clX = cx + Math.cos(cluster.angle) * rDist;
        const clY = cy + Math.sin(cluster.angle) * rDist;

        ctx.save();
        ctx.translate(clX, clY);

        for (let n = 0; n < cluster.nodeCount; n++) {
          const nAngle = (n / cluster.nodeCount) * Math.PI * 2 + time * 0.2;
          const nDist = (cluster.clusterRadius * (0.3 + (n % 3) * 0.3));
          const nx = Math.cos(nAngle) * nDist;
          const ny = Math.sin(nAngle) * nDist;

          ctx.beginPath();
          ctx.arc(nx, ny, 1.1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 23, 54, ${cluster.alpha * 0.35})`;
          ctx.fill();
        }
        ctx.restore();
      });

      // --- 9. Cardiac Bioluminescent Photon Waves ---
      for (let pIdx = photonWaves.length - 1; pIdx >= 0; pIdx--) {
        const wave = photonWaves[pIdx];
        wave.radiusRatio += wave.speed;
        wave.alpha *= 0.96;

        const waveRadius = baseRadius * wave.radiusRatio;
        ctx.beginPath();
        ctx.arc(cx, cy, waveRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(165, 216, 255, ${wave.alpha})`;
        ctx.lineWidth = 2.0;
        ctx.stroke();

        if (wave.radiusRatio >= wave.maxRadiusRatio || wave.alpha < 0.01) {
          photonWaves.splice(pIdx, 1);
        }
      }

      // --- 10. Bioluminescent Nuclear Complex (Intelligence Core) ---
      const nucleusRadius = baseRadius * 0.28 * (1 + cardiacPulse * 1.4);

      const nucleusGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, nucleusRadius * 1.5);
      nucleusGrad.addColorStop(0, "rgba(255, 255, 255, 0.95)");
      nucleusGrad.addColorStop(0.2, "rgba(165, 216, 255, 0.75)");
      nucleusGrad.addColorStop(0.55, "rgba(0, 43, 91, 0.18)");
      nucleusGrad.addColorStop(0.85, "rgba(0, 23, 54, 0.05)");
      nucleusGrad.addColorStop(1, "rgba(0, 23, 54, 0)");

      ctx.fillStyle = nucleusGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, nucleusRadius * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // Nucleus Inner Envelope Ring
      ctx.beginPath();
      ctx.arc(cx, cy, nucleusRadius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(0, 23, 54, 0.18)";
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Nucleolus Central Core
      ctx.beginPath();
      ctx.arc(cx, cy, nucleusRadius * 0.35, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 23, 54, 0.12)";
      ctx.fill();

      ctx.restore(); // End membrane clipping mask

      // --- 11. Refractive Phospholipid Bilayer Strata (Hairlines + Dispersion) ---
      // Outer Hydrophilic Boundary
      ctx.beginPath();
      ctx.moveTo(membranePoints[0].x, membranePoints[0].y);
      for (let i = 1; i < vertexCount; i++) {
        const xc = (membranePoints[i].x + membranePoints[(i + 1) % vertexCount].x) / 2;
        const yc = (membranePoints[i].y + membranePoints[(i + 1) % vertexCount].y) / 2;
        ctx.quadraticCurveTo(membranePoints[i].x, membranePoints[i].y, xc, yc);
      }
      ctx.closePath();
      ctx.strokeStyle = "rgba(0, 23, 54, 0.16)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Inner Hydrophobic Specular Ring (Chromatic Refraction)
      ctx.beginPath();
      for (let i = 0; i < vertexCount; i++) {
        const pt = membranePoints[i];
        const innerR = pt.r - 3.0;
        const px = cx + Math.cos(pt.angle) * innerR;
        const py = cy + Math.sin(pt.angle) * innerR;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.strokeStyle = "rgba(165, 216, 255, 0.38)";
      ctx.lineWidth = 1.0;
      ctx.stroke();

      // --- 12. Foreground Bokeh (Subtle ambient floaters) ---
      bokehParticles.forEach((b) => {
        if (b.depth === 1) {
          b.x += b.vx * 1.2;
          b.y += b.vy * 1.2;
          if (b.x < 0) b.x = width;
          if (b.x > width) b.x = 0;
          if (b.y < 0) b.y = height;
          if (b.y > height) b.y = 0;

          const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius);
          grad.addColorStop(0, `rgba(165, 216, 255, ${b.alpha * 0.8})`);
          grad.addColorStop(1, "rgba(249, 249, 249, 0)");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      if (!reduced) {
        animationFrameId = requestAnimationFrame(render);
      }
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

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Remove useSpring for the massive zoom to prevent physics glitches and bouncing
  // We scale the SVG, but stop before it gets so massive it glitches the browser.
  // We'll mask the final zoom with a solid white overlay.
  const svgScale = useTransform(scrollYProgress, [0, 0.1, 0.7], [1, 1, 80]);
  
  // Fade out standard content
  const contentOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

  // Fade IN a pure white overlay as we get close to the max zoom to perfectly match the white logo
  const whiteOverlayOpacity = useTransform(scrollYProgress, [0.6, 0.75], [0, 1]);

  // Fade out the SVG word behind the white overlay to stop rendering it
  const svgOpacity = useTransform(scrollYProgress, [0.75, 0.8], [1, 0]);

  // Reveal the next section content (now on a white background)
  const revealOpacity = useTransform(scrollYProgress, [0.75, 0.9], [0, 1]);
  const revealY = useTransform(scrollYProgress, [0.75, 0.9], [50, 0]);

  return (
    <section ref={targetRef} style={{ height: '400vh', position: 'relative', background: 'var(--bg-color)' }}>
      
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Standard Content that fades out on scroll */}
        <motion.div 
          style={{ 
            opacity: contentOpacity, 
            y: contentY,
            position: 'absolute',
            top: '20vh',
            textAlign: 'center',
            zIndex: 15,
            width: '100%',
            padding: '0 2rem'
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 1.25rem', borderRadius: '999px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--accent-2)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Welcome to the future of</span>
          </div>
        </motion.div>

        {/* The Crisp SVG Text that scales infinitely */}
        <motion.div 
          style={{ 
            scale: svgScale, 
            opacity: svgOpacity,
            position: 'absolute',
            zIndex: 10,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // Transform origin set to roughly the center of the 'U' so we zoom into the hole of the U
            transformOrigin: '53% 50%' 
          }}
        >
          <svg viewBox="0 0 2500 300" style={{ width: '100%', maxWidth: '100%', overflow: 'visible' }}>
            <text 
              x="50%" 
              y="50%" 
              dominantBaseline="middle" 
              textAnchor="middle" 
              fontFamily="var(--font-logo)" 
              fontWeight="800" 
              fontSize="220" 
              fill="white"
              letterSpacing="-0.02em"
            >
              MRITHUNJAY<tspan fill="var(--accent-1)">.</tspan>
            </text>
          </svg>
        </motion.div>

        {/* Bottom standard content that also fades out */}
        <motion.div 
          style={{ 
            opacity: contentOpacity, 
            y: useTransform(scrollYProgress, [0, 0.1], [0, 50]),
            position: 'absolute',
            bottom: '20vh',
            textAlign: 'center',
            zIndex: 15,
            width: '100%',
            padding: '0 2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '600px', marginBottom: '2rem', lineHeight: 1.6 }}>
            Experience the convergence of elite medical expertise and cutting-edge technology. We deliver personalized, precision medicine tailored for a vibrant life.
          </p>
          <button className="btn-premium">
            Discover Our Care <ArrowRight size={20} />
          </button>
        </motion.div>

        {/* The White Overlay that masks the glitchy massive zoom */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'white',
            opacity: whiteOverlayOpacity,
            zIndex: 15,
            willChange: 'opacity'
          }}
        />

        {/* The content revealed after zooming through (now purely matching the white logo) */}
        <motion.div
          style={{
            opacity: revealOpacity,
            y: revealY,
            position: 'absolute',
            zIndex: 20,
            textAlign: 'center',
            padding: '2rem',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            willChange: 'transform, opacity'
          }}
        >
          <div style={{ maxWidth: '800px', width: '100%' }}>
            <h2 className="display-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', color: 'var(--bg-color)' }}>
              A New Era of Care.
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 2vw, 1.25rem)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              You are now entering the next chapter of medical excellence. Let's explore what Mrithunjay can do for you.
            </p>
            <button className="btn-premium" style={{ width: '100%', maxWidth: '300px' }}>
              Explore Services
            </button>
          </div>
        </motion.div>

        <motion.div 
          style={{ 
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]),
            position: 'absolute', 
            width: '100vw', 
            height: '100vh',
            background: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
            zIndex: 1,
            willChange: 'opacity'
          }} 
        />

      </div>
    </section>
  );
};

export default Hero;

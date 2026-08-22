import Link from "next/link";
import type { ReactElement } from "react";
import { Reveal } from "./intersection-reveal";

export function Footer(): ReactElement {
  return (
    <div className="flex flex-col lg:min-h-[70svh]">
      <section
        id="waitlist"
        className="flex-1 flex flex-col justify-center py-10 lg:py-12 bg-primary text-clinical-white px-4 sm:px-6 md:px-gutter text-center relative overflow-hidden"
      >
        {/* Background Subtle Gradient Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(165,216,255,0.08)_0,transparent_70%)] pointer-events-none" />

        <Reveal className="max-w-3xl mx-auto space-y-3 sm:space-y-4 relative z-10">
          <span className="font-mono text-[10px] sm:text-xs text-memory-glow tracking-[0.25em] block uppercase font-semibold">
            2026 CLINICAL ACCESS INITIATIVE
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl tracking-tight">
            Ensure your medical story begins with understanding.
          </h2>
          <p className="font-body-md sm:text-body-lg opacity-85 max-w-xl mx-auto leading-relaxed">
            We are currently onboarding initial clinical partners, specialists, and patients for the 2026 flagship release.
          </p>

          {/* Button-in-Button CTA Architecture */}
          <div className="pt-2 flex justify-center">
            <Link
              href="/waitlist"
              className="group inline-flex items-center gap-3 bg-clinical-white text-primary pl-6 pr-3 py-3 font-label-caps text-[10px] sm:text-xs tracking-widest hover:bg-surface-bright transition-all rounded-full shadow-lg active:scale-[0.98]"
            >
              <span>JOIN 2026 FLAGSHIP WAITING LIST</span>
              <span className="w-6 h-6 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                <span className="material-symbols-outlined text-sm text-primary group-hover:translate-x-0.5 transition-transform">
                  arrow_forward
                </span>
              </span>
            </Link>
          </div>

          {/* Upfront Zero-Trust Privacy Reassurances */}
          <div className="pt-3 flex flex-wrap justify-center items-center gap-3 sm:gap-4 font-mono text-[10px] text-clinical-white/60">
            <span>• No records requested</span>
            <span>• Zero third-party sharing</span>
            <span>• End-to-end encrypted</span>
          </div>
        </Reveal>
      </section>

      <footer className="bg-surface-container-low py-6 lg:py-6 border-t border-data-node/20 relative overflow-hidden flex-shrink-0 flex flex-col justify-center">
        {/* Decorative top hairline gradient */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        
        <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-gutter w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-6 mb-6 lg:mb-6">
            
            {/* Brand Column */}
            <div className="lg:col-span-6 space-y-4 lg:pr-12">
              <Link href="/" className="inline-block transition-transform duration-300 hover:scale-105 active:scale-95">
                <img 
                  src="/logo_transparent.png" 
                  alt="Mritunjay Logo" 
                  className="h-14 w-auto object-contain" 
                />
              </Link>
              <p className="font-body-md text-secondary leading-relaxed">
                An AI-powered healthcare operating system that continuously understands every patient&apos;s health. No patient should ever have to start from zero again.
              </p>
              <div className="flex items-center gap-3 pt-2">
                 <div className="w-9 h-9 rounded-full border border-data-node/40 flex items-center justify-center bg-clinical-white shadow-sm hover:border-primary/50 transition-colors">
                    <span className="material-symbols-outlined text-primary text-sm">mail</span>
                 </div>
                 <span className="font-mono text-xs text-primary font-medium tracking-wide">gravityanti47@gmail.com</span>
              </div>
            </div>

            {/* Platform Links */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-label-caps text-[10px] tracking-[0.2em] text-primary font-semibold uppercase">Platform</h4>
              <nav className="flex flex-col space-y-3.5 font-body-sm text-secondary">
                <Link href="/#how-it-works" className="hover:text-primary transition-colors flex items-center gap-2 group w-fit">
                  <span className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />
                  How It Works
                </Link>
                <Link href="/#chat-interface" className="hover:text-primary transition-colors flex items-center gap-2 group w-fit">
                  <span className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />
                  Live Synthesis
                </Link>
                <Link href="/waitlist" className="hover:text-primary transition-colors flex items-center gap-2 group w-fit">
                  <span className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />
                  2026 Access
                </Link>
              </nav>
            </div>

            {/* Company Links */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-label-caps text-[10px] tracking-[0.2em] text-primary font-semibold uppercase">Company</h4>
              <nav className="flex flex-col space-y-3.5 font-body-sm text-secondary">
                <Link href="/#contact" className="hover:text-primary transition-colors flex items-center gap-2 group w-fit">
                  <span className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />
                  Contact Us
                </Link>
                <Link href="#" className="hover:text-primary transition-colors flex items-center gap-2 group w-fit">
                  <span className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-primary transition-colors flex items-center gap-2 group w-fit">
                  <span className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />
                  Terms of Service
                </Link>
              </nav>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-4 border-t border-data-node/30 flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 font-mono text-[9px] text-secondary">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="font-semibold text-primary tracking-widest">HIPAA COMPLIANT</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/5 border border-green-500/10 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
                <span className="font-semibold text-green-700 tracking-widest">SYSTEM ONLINE</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 shadow-sm">
                <span className="material-symbols-outlined text-[12px] text-primary">lock</span>
                <span className="font-semibold text-primary tracking-widest">ZERO-TRUST SOVEREIGNTY</span>
              </div>
            </div>
            <div className="font-mono text-[10px] text-secondary/80 tracking-widest text-center uppercase">
              © {new Date().getFullYear()} MRITUNJAY HEALTHCARE INTELLIGENCE.
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}

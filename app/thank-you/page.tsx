"use client";

import Link from "next/link";
import { Reveal } from "@/components/intersection-reveal";

export default function ThankYou() {
  return (
    <section className="min-h-[100svh] flex flex-col justify-center items-center py-[25px] sm:py-10 px-4 sm:px-6 md:px-gutter bg-surface-container-low text-center">
      <Reveal>
        <div className="bg-clinical-white border border-data-node/40 rounded-2xl sm:rounded-3xl shadow-double-bezel p-10 sm:p-16 max-w-2xl w-full mx-auto relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/10 via-primary to-primary/10"></div>
          
          <div className="flex justify-center mb-8">
            <img 
              src="/logo_transparent.png" 
              alt="Mritunjay Logo" 
              className="h-20 sm:h-24 w-auto object-contain theme-logo-filter drop-shadow-sm" 
            />
          </div>

          <span className="font-mono text-xs sm:text-label-caps text-secondary tracking-[0.25em] block mb-4 uppercase font-semibold">
            SUCCESS
          </span>
          
          <h1 className="font-headline-lg text-4xl sm:text-5xl lg:text-6xl text-primary leading-tight mb-6">
            Thank You
          </h1>
          
          <p className="font-body-lg text-base sm:text-lg text-secondary mb-10 max-w-lg mx-auto leading-relaxed">
            Your inquiry has been submitted successfully to <strong>antigravity87@gmail.com</strong>. We will review your message and get back to you shortly.
          </p>
          
          <Link 
            href="/"
            className="inline-flex items-center justify-center gap-3 bg-primary text-clinical-white px-8 py-3.5 font-label-caps text-xs sm:text-label-caps tracking-widest hover:bg-primary/95 transition-all rounded-xl shadow-md active:scale-[0.98]"
          >
            <span className="material-symbols-outlined text-[15px]">arrow_back</span>
            <span>RETURN TO HOME</span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

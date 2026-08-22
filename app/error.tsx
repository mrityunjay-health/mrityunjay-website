"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Reveal } from "@/components/intersection-reveal";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-[100svh] flex flex-col justify-center items-center py-[25px] sm:py-10 px-4 sm:px-6 md:px-gutter bg-surface-container-low text-center">
      <Reveal>
        <div className="bg-clinical-white border border-data-node/40 rounded-2xl sm:rounded-3xl shadow-double-bezel p-10 sm:p-16 max-w-2xl w-full mx-auto">
          <span className="font-mono text-xs sm:text-label-caps text-secondary tracking-[0.25em] block mb-4 uppercase font-semibold text-error">
            Server Error
          </span>
          <h1 className="font-headline-lg text-6xl sm:text-7xl lg:text-8xl text-primary leading-tight mb-6">
            504
          </h1>
          <h2 className="font-headline-md text-2xl sm:text-3xl text-primary mb-4">
            Gateway Timeout
          </h2>
          <p className="font-body-lg text-base sm:text-lg text-secondary mb-10 max-w-lg mx-auto leading-relaxed">
            Sorry, the server took too long to respond or encountered an unexpected error. Please try again or return to the homepage.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => reset()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-surface-container-low text-primary border border-data-node/40 px-8 py-3.5 font-label-caps text-xs sm:text-label-caps tracking-widest hover:bg-surface-container transition-all rounded-xl shadow-sm active:scale-[0.98]"
            >
              <span>TRY AGAIN</span>
              <span className="material-symbols-outlined text-[15px]">refresh</span>
            </button>
            <Link 
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary text-clinical-white px-8 py-3.5 font-label-caps text-xs sm:text-label-caps tracking-widest hover:bg-primary/95 transition-all rounded-xl shadow-md active:scale-[0.98]"
            >
              <span>RETURN TO HOMEPAGE</span>
              <span className="material-symbols-outlined text-[15px]">home</span>
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

import Link from "next/link";
import { Reveal } from "@/components/intersection-reveal";

export default function NotFound() {
  return (
    <section className="min-h-[100svh] flex flex-col justify-center items-center py-[25px] sm:py-10 px-4 sm:px-6 md:px-gutter bg-surface-container-low text-center">
      <Reveal>
        <div className="bg-clinical-white border border-data-node/40 rounded-2xl sm:rounded-3xl shadow-double-bezel p-10 sm:p-16 max-w-2xl w-full mx-auto">
          <span className="font-mono text-xs sm:text-label-caps text-secondary tracking-[0.25em] block mb-4 uppercase font-semibold">
            404 Error
          </span>
          <h1 className="font-headline-lg text-6xl sm:text-7xl lg:text-8xl text-primary leading-tight mb-6">
            404
          </h1>
          <h2 className="font-headline-md text-2xl sm:text-3xl text-primary mb-4">
            Page Not Found
          </h2>
          <p className="font-body-lg text-base sm:text-lg text-secondary mb-10 max-w-lg mx-auto leading-relaxed">
            Oops! The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center justify-center gap-3 bg-primary text-clinical-white px-8 py-3.5 font-label-caps text-xs sm:text-label-caps tracking-widest hover:bg-primary/95 transition-all rounded-xl shadow-md active:scale-[0.98]"
          >
            <span>RETURN TO HOMEPAGE</span>
            <span className="material-symbols-outlined text-[15px]">home</span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

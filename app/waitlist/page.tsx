import type { Metadata } from "next";
import type { ReactElement } from "react";
import { Nav } from "@/components/nav";
import { WaitlistForm } from "@/components/waitlist-form";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "2026 Clinical Access | Mritunjay Healthcare Intelligence",
  description:
    "Reserve priority access for Mritunjay's 2026 Clinical Release. Secure your health narrative across providers with continuous medical memory.",
};

function TrustBadge({
  icon,
  title,
  description,
}: {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}): ReactElement {
  return (
    <div className="bg-clinical-white border border-data-node/30 p-5 sm:p-6 rounded-2xl shadow-double-bezel text-left space-y-2">
      <div className="text-primary font-mono text-[10px] sm:text-xs font-semibold tracking-widest uppercase flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
        <span>{icon}</span>
      </div>
      <h3 className="font-headline-md text-base sm:text-lg text-primary">{title}</h3>
      <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function WaitlistPage(): ReactElement {
  return (
    <>
      <Nav />
      <main className="pt-24 sm:pt-28 pb-16 sm:pb-24 lg:pb-section-gap-lg bg-clinical-overlay min-h-screen">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-gutter text-center space-y-8 sm:space-y-12">
          {/* Header Section (Principle 1 & Principle 2: Reduce Anxiety Before Reducing Clicks) */}
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <span className="font-mono text-[10px] sm:text-xs text-primary font-semibold tracking-[0.25em] block uppercase">
              2026 CLINICAL ACCESS INITIATIVE
            </span>
            <h1 className="font-headline-lg text-3xl sm:text-5xl lg:text-headline-lg text-primary tracking-tight">
              Ensure your healthcare starts with understanding.
            </h1>
            <p className="font-body-lg text-base sm:text-body-lg text-on-surface-variant leading-relaxed">
              We are onboarding clinical partners, cardiologists, and patients for the 2026 flagship release.
              Reserve your position in the sovereign health memory enclave.
            </p>
          </div>

          {/* Main Form Component */}
          <WaitlistForm />

          {/* Clinical Trust & Compliance Highlights */}
          <div className="max-w-4xl mx-auto pt-8 sm:pt-12">
            <span className="font-mono text-[10px] sm:text-xs text-on-surface-variant tracking-widest uppercase block mb-4 sm:mb-6 font-semibold">
              CLINICAL INTEGRITY & ZERO-TRUST ASSURANCES
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <TrustBadge
                icon="HIPAA // BAA READY"
                title="End-to-End Encryption"
                description="Built on zero-trust enterprise infrastructure with military-grade 256-bit encryption for all records."
              />
              <TrustBadge
                icon="DATA SOVEREIGNTY"
                title="Patient Ownership"
                description="Your medical narrative belongs entirely to you. You grant and revoke provider access at your discretion."
              />
              <TrustBadge
                icon="PHYSICIAN GUIDANCE"
                title="Clinician Centrality"
                description="Engineered alongside internal medicine and cardiology specialists to augment direct consultation care."
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

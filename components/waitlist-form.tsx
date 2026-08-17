"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, type ChangeEvent, type FormEvent, type ReactElement } from "react";
import type {
  WaitlistFormData,
  WaitlistFormErrors,
  WaitlistRole,
  WaitlistSuccessData,
} from "@/types/waitlist";

const INITIAL_FORM_DATA: WaitlistFormData = {
  role: "patient",
  fullName: "",
  email: "",
  organization: "",
  primaryInterest: "longitudinal_memory",
  agreedToTerms: false,
};

const INTEREST_OPTIONS: Record<WaitlistRole, ReadonlyArray<{ readonly value: string; readonly label: string }>> = {
  patient: [
    { value: "longitudinal_memory", label: "Longitudinal Cardiac & Medical Memory" },
    { value: "physician_synthesis", label: "Pre-Consultation Clinical Briefs" },
    { value: "medication_history", label: "Historical Reaction & Medication Tracking" },
    { value: "family_records", label: "Multi-Generational Health Context" },
  ],
  physician: [
    { value: "clinical_briefs", label: "Clinical Pre-Review & EHR Record Synthesis" },
    { value: "longitudinal_timeline", label: "Patient Journey Timeline Reconstruction" },
    { value: "partner_program", label: "2026 Flagship Clinical Vanguard Program" },
    { value: "research_collaboration", label: "Clinical Validation & Trials" },
  ],
  enterprise: [
    { value: "health_system_integration", label: "Health System & EHR Data Layer Integration" },
    { value: "specialty_clinic_pilot", label: "Multi-Site Specialty Clinic Deployment" },
    { value: "security_compliance", label: "Enterprise HIPAA & BAA Infrastructure" },
    { value: "custom_intelligence", label: "Custom Domain Intelligence Layer" },
  ],
};

function RoleTabButton({
  active,
  label,
  description,
  onClick,
  id,
}: {
  readonly active: boolean;
  readonly label: string;
  readonly description: string;
  readonly onClick: () => void;
  readonly id: string;
}): ReactElement {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      aria-controls={`${id}-panel`}
      id={id}
      onClick={onClick}
      className={`flex-1 text-left p-4 sm:p-5 border transition-all rounded-xl active:scale-[0.98] ${
        active
          ? "bg-primary text-clinical-white border-primary shadow-double-bezel-dark"
          : "bg-clinical-white text-on-surface border-data-node/30 hover:border-primary/40 hover:bg-surface-container-low"
      }`}
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-mono text-xs font-semibold tracking-wider uppercase">
          {label}
        </span>
        <span
          className={`inline-block w-2.5 h-2.5 rounded-full ${
            active ? "bg-memory-glow" : "bg-data-node/60"
          }`}
          aria-hidden="true"
        />
      </div>
      <p className={`font-body-md text-xs line-clamp-2 ${active ? "opacity-80" : "text-on-surface-variant"}`}>
        {description}
      </p>
    </button>
  );
}

function SuccessConfirmation({
  data,
  onReset,
}: {
  readonly data: WaitlistSuccessData;
  readonly onReset: () => void;
}): ReactElement {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(data.priorityId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="bg-clinical-white border border-data-node/40 p-6 sm:p-10 shadow-double-bezel rounded-2xl max-w-2xl mx-auto text-left space-y-8 animate-fade-in-up">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary text-clinical-white flex items-center justify-center font-headline-md text-xl shadow-sm">
          ✓
        </div>
        <div>
          <span className="font-mono text-[10px] sm:text-xs text-primary font-semibold tracking-widest uppercase block">
            CONFIRMED // 2026 CLINICAL ACCESS QUEUE
          </span>
          <h2 className="font-headline-md text-2xl text-primary">
            Position Reserved
          </h2>
        </div>
      </div>

      <p className="font-body-lg text-sm sm:text-base text-on-surface-variant leading-relaxed">
        Thank you for reserving your clinical access key for{" "}
        <strong className="text-primary font-semibold">{data.email}</strong>. Our clinical onboarding
        team will reach out with your private enclave credentials prior to the 2026 flagship release.
      </p>

      {/* Access Token Double-Bezel Card */}
      <div className="bg-surface-container-low p-5 sm:p-6 rounded-xl border border-data-node/30 space-y-4 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <span className="font-mono text-[10px] text-on-surface-variant tracking-wider block uppercase mb-0.5">
              SOVEREIGN ACCESS TOKEN
            </span>
            <span className="font-mono text-lg sm:text-xl text-primary font-bold tracking-wider">
              {data.priorityId}
            </span>
          </div>
          <button
            type="button"
            onClick={() => void handleCopy()}
            className="group inline-flex items-center gap-2 bg-primary text-clinical-white font-mono text-xs px-4 py-2 rounded-full hover:bg-primary/90 transition-all active:scale-[0.98]"
          >
            <span>{copied ? "COPIED" : "COPY TOKEN"}</span>
            <span className="material-symbols-outlined text-[13px]">
              {copied ? "done" : "content_copy"}
            </span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-data-node/20 text-xs font-mono">
          <div>
            <span className="text-on-surface-variant block text-[10px] uppercase">Queue Position</span>
            <span className="font-bold text-primary text-sm tabular-nums">#{data.queuePosition}</span>
          </div>
          <div>
            <span className="text-on-surface-variant block text-[10px] uppercase">Target Rollout</span>
            <span className="font-bold text-primary text-sm">{data.estimatedOnboarding}</span>
          </div>
        </div>
      </div>

      {/* Attentive Patient Journey Roadmap (Principle 11 & 13) */}
      <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 space-y-2 text-xs font-body-md text-primary">
        <div className="font-mono text-[11px] font-semibold uppercase tracking-wider flex items-center gap-2">
          <span className="material-symbols-outlined text-base">info</span>
          <span>What Happens Next (Principle 11)</span>
        </div>
        <p className="text-secondary leading-relaxed text-[11px]">
          1. Your token secures your position in our 2026 clinical vanguard queue.
          <br />
          2. No medical records are collected until your personal zero-trust enclave is created.
          <br />
          3. You will receive an invitation to configure your continuous medical memory with full sovereignty.
        </p>
      </div>

      <div className="pt-2 text-center sm:text-left">
        <button
          type="button"
          onClick={onReset}
          className="text-xs font-mono tracking-wider text-primary hover:underline uppercase"
        >
          Submit another registration
        </button>
      </div>
    </div>
  );
}

export function WaitlistForm(): ReactElement {
  const reduced = useReducedMotion();
  const [formData, setFormData] = useState<WaitlistFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<WaitlistFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStep, setSubmissionStep] = useState<string>("Establishing zero-trust enclave...");
  const [apiError, setApiError] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<WaitlistSuccessData | null>(null);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your name so we can address your clinical brief";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email to receive your access token";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.role !== "patient" && !formData.organization.trim()) {
      newErrors.organization =
        formData.role === "physician"
          ? "Please enter your practice or hospital name"
          : "Please enter your health system or institution name";
    }

    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms = "Please agree to receive 2026 clinical access communications";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setApiError(null);
    setSubmissionStep("Establishing zero-trust enclave...");

    const stepTimer = setTimeout(() => {
      setSubmissionStep("Generating patient priority token...");
    }, 600);

    void (async () => {
      try {
        const res = await fetch("/api/waitlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!res.ok) {
          const errData = (await res.json()) as { error?: string };
          setApiError(errData.error || "Failed to complete registration. Please try again.");
          setIsSubmitting(false);
          clearTimeout(stepTimer);
          return;
        }

        const data = (await res.json()) as WaitlistSuccessData;
        setSuccessData(data);
      } catch {
        setApiError("Network error. Please check your connection and try again.");
      } finally {
        setIsSubmitting(false);
        clearTimeout(stepTimer);
      }
    })();
  };

  const handleTextChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof WaitlistFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
    if (errors[name as keyof WaitlistFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleRoleSelect = (role: WaitlistRole): void => {
    const firstOption = INTEREST_OPTIONS[role][0]?.value ?? "";
    setFormData((prev) => ({
      ...prev,
      role,
      primaryInterest: firstOption,
      organization: role === "patient" ? "" : prev.organization,
    }));
    setErrors({});
  };

  if (successData) {
    return (
      <SuccessConfirmation
        data={successData}
        onReset={() => {
          setSuccessData(null);
          setFormData(INITIAL_FORM_DATA);
        }}
      />
    );
  }

  return (
    <motion.div
      initial={reduced ? undefined : { opacity: 0, y: 16 }}
      animate={reduced ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="bg-clinical-white border border-data-node/40 p-5 sm:p-8 lg:p-12 shadow-double-bezel rounded-2xl max-w-3xl mx-auto text-left space-y-8"
    >
      {/* Zero-Trust Promise Header (Principle 2: Reduce Anxiety Before Reducing Clicks) */}
      <div className="p-4 bg-surface-container-low border border-data-node/30 rounded-xl flex items-start gap-3 text-xs font-body-md text-primary">
        <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">verified_user</span>
        <div>
          <span className="font-mono text-xs font-semibold tracking-wider uppercase block text-primary">
            ZERO-TRUST DATA SOVEREIGNTY PROMISE
          </span>
          <p className="text-secondary text-[11px] leading-relaxed mt-0.5">
            Your medical privacy is sovereign. We do not ask for clinical records, portal credentials, or
            medical histories during waitlist registration.
          </p>
        </div>
      </div>

      <div className="border-b border-data-node/20 pb-6">
        <span className="font-mono text-[10px] sm:text-xs text-primary font-semibold tracking-wider uppercase block mb-3">
          STEP 1 OF 2 // SELECT ONBOARDING TRACK
        </span>
        <div role="tablist" aria-label="Profile Role Type" className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <RoleTabButton
            id="tab-patient"
            active={formData.role === "patient"}
            label="Patient / Individual"
            description="Secure longitudinal health continuity across all doctors."
            onClick={() => handleRoleSelect("patient")}
          />
          <RoleTabButton
            id="tab-physician"
            active={formData.role === "physician"}
            label="Clinician / Specialist"
            description="Early clinical synthesis and pre-review tools for practice."
            onClick={() => handleRoleSelect("physician")}
          />
          <RoleTabButton
            id="tab-enterprise"
            active={formData.role === "enterprise"}
            label="Health System"
            description="Multi-site enterprise health intelligence integration."
            onClick={() => handleRoleSelect("enterprise")}
          />
        </div>
      </div>

      {apiError && (
        <div className="mb-6 p-4 bg-error/10 border border-error/30 text-error rounded-xl font-body-md text-sm flex items-center justify-between">
          <span>{apiError}</span>
          <button
            type="button"
            onClick={() => setApiError(null)}
            className="text-xs uppercase font-mono tracking-wider underline ml-4"
          >
            DISMISS
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block font-mono text-xs text-primary font-semibold tracking-wider uppercase mb-2">
              Full Name <span className="text-error">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={handleTextChange}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              placeholder="e.g. Dr. Eleanor Vance"
              className={`w-full bg-surface-container-low border text-on-surface font-body-md text-sm sm:text-base px-4 py-3.5 rounded-lg outline-none transition-all focus:ring-1 focus:ring-primary ${
                errors.fullName ? "border-error" : "border-data-node/40 focus:border-primary"
              }`}
            />
            {errors.fullName && (
              <p id="fullName-error" className="text-error font-body-md text-xs mt-1.5" role="alert">
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block font-mono text-xs text-primary font-semibold tracking-wider uppercase mb-2">
              Email Address <span className="text-error">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleTextChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              placeholder={formData.role === "patient" ? "name@domain.com" : "doctor@hospital.org"}
              className={`w-full bg-surface-container-low border text-on-surface font-body-md text-sm sm:text-base px-4 py-3.5 rounded-lg outline-none transition-all focus:ring-1 focus:ring-primary ${
                errors.email ? "border-error" : "border-data-node/40 focus:border-primary"
              }`}
            />
            {errors.email && (
              <p id="email-error" className="text-error font-body-md text-xs mt-1.5" role="alert">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {formData.role !== "patient" && (
          <div>
            <label htmlFor="organization" className="block font-mono text-xs text-primary font-semibold tracking-wider uppercase mb-2">
              {formData.role === "physician" ? "Hospital / Practice Name" : "Health System / Institution"}{" "}
              <span className="text-error">*</span>
            </label>
            <input
              id="organization"
              name="organization"
              type="text"
              required
              value={formData.organization}
              onChange={handleTextChange}
              aria-invalid={Boolean(errors.organization)}
              aria-describedby={errors.organization ? "organization-error" : undefined}
              placeholder={
                formData.role === "physician" ? "e.g. Johns Hopkins Cardiology" : "e.g. Mayo Clinic Network"
              }
              className={`w-full bg-surface-container-low border text-on-surface font-body-md text-sm sm:text-base px-4 py-3.5 rounded-lg outline-none transition-all focus:ring-1 focus:ring-primary ${
                errors.organization ? "border-error" : "border-data-node/40 focus:border-primary"
              }`}
            />
            {errors.organization && (
              <p id="organization-error" className="text-error font-body-md text-xs mt-1.5" role="alert">
                {errors.organization}
              </p>
            )}
          </div>
        )}

        <div>
          <label htmlFor="primaryInterest" className="block font-mono text-xs text-primary font-semibold tracking-wider uppercase mb-2">
            Primary Area of Focus
          </label>
          <select
            id="primaryInterest"
            name="primaryInterest"
            value={formData.primaryInterest}
            onChange={handleTextChange}
            className="w-full bg-surface-container-low border border-data-node/40 text-on-surface font-body-md text-sm sm:text-base px-4 py-3.5 rounded-lg outline-none transition-all focus:ring-1 focus:ring-primary focus:border-primary"
          >
            {INTEREST_OPTIONS[formData.role].map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="agreedToTerms"
              checked={formData.agreedToTerms}
              onChange={handleCheckboxChange}
              aria-invalid={Boolean(errors.agreedToTerms)}
              aria-describedby={errors.agreedToTerms ? "agreedToTerms-error" : undefined}
              className="mt-1 w-4 h-4 text-primary border-data-node rounded focus:ring-primary"
            />
            <span className="font-body-md text-xs text-on-surface-variant leading-relaxed">
              I agree to receive communications regarding Mritunjay&apos;s 2026 Flagship Release.
              Mritunjay maintains strict HIPAA and GDPR data privacy standards. Your contact details
              will never be shared with third parties.
            </span>
          </label>
          {errors.agreedToTerms && (
            <p id="agreedToTerms-error" className="text-error font-body-md text-xs mt-1.5" role="alert">
              {errors.agreedToTerms}
            </p>
          )}
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group flex items-center justify-center gap-3 w-full bg-primary text-clinical-white py-4 px-8 font-label-caps text-xs sm:text-label-caps tracking-widest rounded-full hover:bg-primary/95 transition-all shadow-md active:scale-[0.98] disabled:opacity-50 text-center"
          >
            {isSubmitting ? (
              <>
                <span className="w-4 h-4 border-2 border-clinical-white border-t-transparent rounded-full animate-spin" />
                <span className="font-mono text-xs">{submissionStep}</span>
              </>
            ) : (
              <>
                <span>RESERVE 2026 ACCESS POSITION</span>
                <span className="w-5 h-5 rounded-full bg-clinical-white/15 group-hover:bg-clinical-white/25 flex items-center justify-center transition-colors">
                  <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                </span>
              </>
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
}

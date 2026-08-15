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
    { value: "clinical_briefs", label: "AI Pre-Review & EHR Record Synthesis" },
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
      className={`flex-1 text-left p-5 border transition-all rounded ${
        active
          ? "bg-primary text-clinical-white border-primary ring-1 ring-primary shadow-sm"
          : "bg-clinical-white text-on-surface border-data-node/40 hover:border-primary/40 hover:bg-surface-container-low"
      }`}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="font-label-caps text-label-caps tracking-widest uppercase">
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
      // Fallback if clipboard API unavailable
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="bg-clinical-white border border-data-node/40 p-8 sm:p-12 shadow-sm rounded max-w-2xl mx-auto text-left space-y-8">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-headline-md text-xl">
          ✓
        </div>
        <div>
          <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase block">
            CONFIRMED // 2026 VANGUARD
          </span>
          <h2 className="font-headline-md text-headline-md text-primary">
            Position Reserved
          </h2>
        </div>
      </div>

      <p className="font-body-lg text-body-md text-on-surface-variant">
        Thank you for securing your position on the Mritunjay flagship queue for{" "}
        <strong className="text-primary font-medium">{data.email}</strong>. Our clinical onboarding
        team will reach out prior to the 2026 release.
      </p>

      <div className="bg-surface-container-low p-6 rounded border border-data-node/30 space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="font-label-caps text-[10px] text-on-surface-variant tracking-wider block uppercase">
              PRIORITY ACCESS TOKEN
            </span>
            <span className="font-mono text-lg text-primary font-semibold tracking-wider">
              {data.priorityId}
            </span>
          </div>
          <button
            type="button"
            onClick={() => void handleCopy()}
            className="bg-primary text-clinical-white font-label-caps text-label-caps px-5 py-2.5 rounded hover:bg-primary/90 transition-all text-xs tracking-wider"
          >
            {copied ? "COPIED TO CLIPBOARD" : "COPY TOKEN"}
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-data-node/20 text-xs font-body-md">
          <div>
            <span className="text-on-surface-variant block">Queue Rank</span>
            <span className="font-semibold text-primary text-sm">#{data.queuePosition}</span>
          </div>
          <div>
            <span className="text-on-surface-variant block">Target Onboarding</span>
            <span className="font-semibold text-primary text-sm">{data.estimatedOnboarding}</span>
          </div>
        </div>
      </div>

      <div className="pt-2 text-center sm:text-left">
        <button
          type="button"
          onClick={onReset}
          className="text-xs font-label-caps tracking-widest text-primary hover:underline"
        >
          SUBMIT ANOTHER REGISTRATION
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
  const [successData, setSuccessData] = useState<WaitlistSuccessData | null>(null);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.role !== "patient" && !formData.organization.trim()) {
      newErrors.organization =
        formData.role === "physician"
          ? "Practice or hospital name is required"
          : "Health system or organization name is required";
    }

    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms = "You must agree to receive 2026 flagship updates";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [apiError, setApiError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setApiError(null);

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
          return;
        }

        const data = (await res.json()) as WaitlistSuccessData;
        setSuccessData(data);
      } catch {
        setApiError("Network error. Please check your connection and try again.");
      } finally {
        setIsSubmitting(false);
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
      initial={reduced ? undefined : { opacity: 0, y: 20 }}
      animate={reduced ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-clinical-white border border-data-node/40 p-4 sm:p-8 lg:p-12 shadow-sm rounded-lg max-w-3xl mx-auto text-left"
    >
      <div className="mb-8 border-b border-data-node/20 pb-6">
        <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase block mb-3">
          STEP 1 OF 2 // SELECT PROFILE TYPE
        </span>
        <div role="tablist" aria-label="Profile Role Type" className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <RoleTabButton
            id="tab-patient"
            active={formData.role === "patient"}
            label="Patient / Individual"
            description="Secure longitudinal health continuity across providers."
            onClick={() => handleRoleSelect("patient")}
          />
          <RoleTabButton
            id="tab-physician"
            active={formData.role === "physician"}
            label="Clinician / Specialist"
            description="Early clinical synthesis & pre-review tools for practice."
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
        <div className="mb-6 p-4 bg-error/10 border border-error/30 text-error rounded font-body-md text-sm flex items-center justify-between">
          <span>{apiError}</span>
          <button
            type="button"
            onClick={() => setApiError(null)}
            className="text-xs uppercase font-label-caps tracking-wider underline ml-4"
          >
            DISMISS
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block font-label-caps text-label-caps text-primary tracking-wider uppercase mb-2">
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
              className={`w-full bg-surface-container-low border text-on-surface font-body-md text-body-md px-4 py-3.5 rounded outline-none transition-all focus:ring-1 focus:ring-primary ${
                errors.fullName ? "border-error" : "border-data-node/50 focus:border-primary"
              }`}
            />
            {errors.fullName && (
              <p id="fullName-error" className="text-error font-body-md text-xs mt-1.5" role="alert">
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block font-label-caps text-label-caps text-primary tracking-wider uppercase mb-2">
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
              className={`w-full bg-surface-container-low border text-on-surface font-body-md text-body-md px-4 py-3.5 rounded outline-none transition-all focus:ring-1 focus:ring-primary ${
                errors.email ? "border-error" : "border-data-node/50 focus:border-primary"
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
            <label htmlFor="organization" className="block font-label-caps text-label-caps text-primary tracking-wider uppercase mb-2">
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
              className={`w-full bg-surface-container-low border text-on-surface font-body-md text-body-md px-4 py-3.5 rounded outline-none transition-all focus:ring-1 focus:ring-primary ${
                errors.organization ? "border-error" : "border-data-node/50 focus:border-primary"
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
          <label htmlFor="primaryInterest" className="block font-label-caps text-label-caps text-primary tracking-wider uppercase mb-2">
            Primary Area of Focus
          </label>
          <select
            id="primaryInterest"
            name="primaryInterest"
            value={formData.primaryInterest}
            onChange={handleTextChange}
            className="w-full bg-surface-container-low border border-data-node/50 text-on-surface font-body-md text-body-md px-4 py-3.5 rounded outline-none transition-all focus:ring-1 focus:ring-primary focus:border-primary"
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
            className="w-full bg-primary text-clinical-white py-3.5 sm:py-4 px-4 sm:px-8 font-label-caps text-[11px] sm:text-label-caps tracking-widest rounded hover:bg-primary/90 transition-all flex items-center justify-center gap-3 disabled:opacity-50 text-center"
          >
            {isSubmitting ? (
              <>
                <span className="w-4 h-4 border-2 border-clinical-white border-t-transparent rounded-full animate-spin" />
                RESERVING POSITION...
              </>
            ) : (
              "JOIN 2026 FLAGSHIP WAITING LIST"
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
}

export type WaitlistRole = "patient" | "physician" | "enterprise";

export interface WaitlistFormData {
  readonly role: WaitlistRole;
  readonly fullName: string;
  readonly email: string;
  readonly organization: string;
  readonly primaryInterest: string;
  readonly agreedToTerms: boolean;
}

export interface WaitlistFormErrors {
  readonly fullName?: string;
  readonly email?: string;
  readonly organization?: string;
  readonly primaryInterest?: string;
  readonly agreedToTerms?: string;
}

export interface WaitlistSuccessData {
  readonly priorityId: string;
  readonly queuePosition: number;
  readonly estimatedOnboarding: string;
  readonly role: WaitlistRole;
  readonly email: string;
}

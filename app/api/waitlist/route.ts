import { NextResponse } from "next/server";
import { getSupabaseAdminClient, getSupabaseClient, isSupabaseConfigured } from "@/lib/supabase";
import type { WaitlistFormData, WaitlistSuccessData } from "@/types/waitlist";

interface ApiErrorResponse {
  readonly error: string;
}

function generatePriorityId(): string {
  const randomNum = Math.floor(Math.random() * 90000) + 10000;
  return `MRIT-2026-${randomNum}`;
}

export async function POST(
  request: Request
): Promise<NextResponse<WaitlistSuccessData | ApiErrorResponse>> {
  try {
    const body = (await request.json()) as Partial<WaitlistFormData>;

    const { role, fullName, email, organization, primaryInterest, agreedToTerms } = body;

    if (!role || !["patient", "physician", "enterprise"].includes(role)) {
      return NextResponse.json({ error: "Invalid or missing role" }, { status: 400 });
    }

    if (!fullName || typeof fullName !== "string" || fullName.trim().length === 0) {
      return NextResponse.json({ error: "Full name is required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "Valid email address is required" }, { status: 400 });
    }

    if (!agreedToTerms) {
      return NextResponse.json({ error: "Terms agreement is required" }, { status: 400 });
    }

    if (role !== "patient") {
      if (!organization || typeof organization !== "string" || organization.trim().length === 0) {
        return NextResponse.json(
          {
            error:
              role === "physician"
                ? "Practice or hospital name is required"
                : "Health system or institution name is required",
          },
          { status: 400 }
        );
      }
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanName = fullName.trim();
    const cleanOrg = organization ? organization.trim() : null;
    const cleanInterest = primaryInterest || "general";

    // Prefer the service-role client (RLS restricts SELECT to service_role);
    // fall back to the anon client for local development.
    const supabase = getSupabaseAdminClient() ?? getSupabaseClient();

    if (supabase && isSupabaseConfigured()) {
      // Check if email already exists
      const { data: existing } = await supabase
        .from("waitlist")
        .select("priority_id, created_at")
        .eq("email", cleanEmail)
        .maybeSingle();

      if (existing) {
        // Return existing registration details
        const { count } = await supabase
          .from("waitlist")
          .select("*", { count: "exact", head: true });

        return NextResponse.json(
          {
            priorityId: existing.priority_id as string,
            queuePosition: count ?? 840,
            estimatedOnboarding: "Q1 2026 Flagship Release",
            role: role as WaitlistFormData["role"],
            email: cleanEmail,
            returning: true,
          },
          { status: 200 }
        );
      }

      const priorityId = generatePriorityId();

      const { error: insertError } = await supabase.from("waitlist").insert([
        {
          role,
          full_name: cleanName,
          email: cleanEmail,
          organization: cleanOrg,
          primary_interest: cleanInterest,
          priority_id: priorityId,
          status: "pending",
        },
      ]);

      if (insertError) {
        console.error("Supabase insert error:", insertError.message);
        return NextResponse.json(
          { error: "Failed to persist waitlist registration. Please try again." },
          { status: 500 }
        );
      }

      // Query position
      const { count } = await supabase
        .from("waitlist")
        .select("*", { count: "exact", head: true });

      const queuePosition = count ?? Math.floor(Math.random() * 200) + 800;

      return NextResponse.json(
        {
          priorityId,
          queuePosition,
          estimatedOnboarding: "Q1 2026 Flagship Release",
          role: role as WaitlistFormData["role"],
          email: cleanEmail,
          returning: false,
        },
        { status: 201 }
      );
    }

    // Fallback when Supabase env vars are not set
    const priorityId = generatePriorityId();
    const fallbackRank = Math.floor(Math.random() * 200) + 850;

    return NextResponse.json(
      {
        priorityId,
        queuePosition: fallbackRank,
        estimatedOnboarding: "Q1 2026 Flagship Release",
        role: role as WaitlistFormData["role"],
        email: cleanEmail,
        returning: false,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Waitlist API error:", err);
    return NextResponse.json(
      { error: "Internal server error processing request" },
      { status: 500 }
    );
  }
}

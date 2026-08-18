import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export interface DatabaseWaitlistRow {
  readonly id: string;
  readonly created_at: string;
  readonly role: "patient" | "physician" | "enterprise";
  readonly full_name: string;
  readonly email: string;
  readonly organization: string | null;
  readonly primary_interest: string;
  readonly priority_id: string;
  readonly status: string;
}

export function isSupabaseConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  return Boolean(url && key && url.startsWith("http"));
}

export function getSupabaseClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key || !url.startsWith("http")) {
    return null;
  }

  return createClient(url, key, {
    auth: {
      persistSession: false,
    },
  });
}

export function getSupabaseAdminClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key || !url.startsWith("http")) {
    return null;
  }

  return createClient(url, key, {
    auth: {
      persistSession: false,
    },
  });
}

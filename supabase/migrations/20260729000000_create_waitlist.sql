-- Create waitlist submissions table for Mritunjay 2026 Flagship Release
CREATE TABLE IF NOT EXISTS public.waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  role TEXT NOT NULL CHECK (role IN ('patient', 'physician', 'enterprise')),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  primary_interest TEXT NOT NULL,
  priority_id TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL DEFAULT 'pending'
);

-- Create index on email and priority_id for fast queries
CREATE INDEX IF NOT EXISTS waitlist_email_idx ON public.waitlist (email);
CREATE INDEX IF NOT EXISTS waitlist_priority_id_idx ON public.waitlist (priority_id);
CREATE INDEX IF NOT EXISTS waitlist_created_at_idx ON public.waitlist (created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Policy: Allow insertion from anonymous and authenticated API clients
CREATE POLICY "Allow public waitlist insertion"
  ON public.waitlist
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: Restrict select to authenticated service role or admins
CREATE POLICY "Restrict select to service role"
  ON public.waitlist
  FOR SELECT
  TO service_role
  USING (true);

import { createBrowserClient } from "@supabase/ssr"

export function createClient() {
  const supabaseUrl = "https://jcrohblmlqvoowbssnqa.supabase.co"
  const supabaseAnonKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impjcm9oYmxtbHF2b293YnNzbnFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwOTg3ODcsImV4cCI6MjA2NTY3NDc4N30.r0o9JMFWLQ40yDSHd9zZXz53HFdZ1_jndT8E8uNcR4c"

  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}

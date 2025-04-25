import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://osfmvsupwczeqnlzjtcv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zZm12c3Vwd2N6ZXFubHpqdGN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3NTAwMjEsImV4cCI6MjA1OTMyNjAyMX0.fK5LIzAnGmK6v4tgXtZx9rzbWLBstkov7viaicwPIq8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

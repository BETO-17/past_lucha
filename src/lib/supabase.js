// src/lib/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || import.meta.env.SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl) {
  console.error("ERROR: SUPABASE_URL no esta definida en el .env");
}
if (!supabaseAnonKey) {
  console.error("ERROR: PUBLIC_SUPABASE_ANON_KEY no esta definida en el .env");
}
if (import.meta.env.SSR && !supabaseServiceKey) {
  console.error("ERROR: SUPABASE_SERVICE_ROLE_KEY no esta definida en el .env");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const supabaseServer = import.meta.env.SSR
  ? createClient(
      supabaseUrl,
      supabaseServiceKey,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    )
  : null;

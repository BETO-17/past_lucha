// src/pages/api/auth/login.ts
import type { APIRoute } from 'astro';
import { supabaseServer } from '../../../lib/supabaseServer';

export const POST: APIRoute = async ({ request }) => {
  const { email, password } = await request.json();
  const { data, error } = await supabaseServer.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
  // Devolvemos el access_token para que el cliente lo use
  return new Response(JSON.stringify({ 
    access_token: data.session?.access_token,
    refresh_token: data.session?.refresh_token,
    user: data.user,
  }), { status: 200 });
};
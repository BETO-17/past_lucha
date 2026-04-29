// src/pages/api/auth/signup.ts
import type { APIRoute } from 'astro';
import { supabaseServer } from '../../../lib/supabaseServer';

export const POST: APIRoute = async ({ request }) => {
  const { email, password } = await request.json();
  const { data, error } = await supabaseServer.auth.admin.createUser({
    email,
    password,
    email_confirm: true, // confirmamos directamente sin email
  });
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
  // Ahora iniciamos sesión automáticamente para obtener el token
  const { data: sessionData, error: loginError } = await supabaseServer.auth.signInWithPassword({
    email,
    password,
  });
  if (loginError) {
    return new Response(JSON.stringify({ error: loginError.message }), { status: 400 });
  }
  return new Response(JSON.stringify({
    access_token: sessionData.session?.access_token,
    refresh_token: sessionData.session?.refresh_token,
    user: sessionData.user,
  }), { status: 200 });
};
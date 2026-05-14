import { supabase } from './supabase';

export const checkAdminRole = async (userId) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', userId)
    .single();
  
  if (error) return false;
  return data?.role === 'admin';
};

export const requireAuth = async (session, redirectUrl = '/login') => {
  if (!session) {
    return { redirect: redirectUrl };
  }
  
  const isAdmin = await checkAdminRole(session.user.id);
  if (!isAdmin) {
    return { error: 'No tienes permisos de administrador' };
  }
  
  return { user: session.user };
};
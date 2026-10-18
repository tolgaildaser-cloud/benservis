// src/lib/supabase.js
// Supabase anon client — yalnız frontend Storage upload için.
import { createClient } from "@supabase/supabase-js";

// Şifre sıfırlama bağlantısıyla mı gelindi? createClient URL'deki oturumu alıp hash'i SİLMEDEN ÖNCE,
// eşzamanlı okunur (IT incelemesi PR #333 bulgu 1: PASSWORD_RECOVERY olayı ile oturum kontrolü yarışıyordu).
export const KURTARMA_BAGLANTISI =
  typeof window !== "undefined" && /(^|[#&?])type=recovery(&|$)/.test(window.location.hash + "&" + window.location.search);

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

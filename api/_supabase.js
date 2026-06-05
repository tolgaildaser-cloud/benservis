// api/_supabase.js
// Supabase admin client — yalnız serverless API fonksiyonlarında kullanılır.
// SUPABASE_SERVICE_KEY frontend'e asla gitmez.
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

export default supabase;

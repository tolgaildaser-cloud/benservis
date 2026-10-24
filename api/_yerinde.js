// api/_yerinde.js — yerinde servis API'lerinin ortak kimlik kontrolü (YK #183 PR-2). `_` önekli: uç değildir.
// Rol YALNIZ app_metadata.rol'den (src/yerinde-kimlik.js). Yazmalar service key ile yapılır; RLS'te yazma politikası
// yok (PR-1 ilke ③) → kim neyi yazabilir kararı BURADA ve uçlarda verilir.
// ⛔ Kişisel veri loglanmaz: hata yanıtları ve console çıktıları ad/telefon/adres taşımaz.
import supabase from "./_supabase.js";
import { yerindeRolOku } from "../src/yerinde-kimlik.js";

export async function yerindeKimlik(req, res) {
  const token = String(req.headers?.authorization || "").replace(/^Bearer\s+/i, "").trim();
  if (!token) { res.status(401).json({ error: "Oturum gerekli" }); return null; }
  const { data, error } = await supabase.auth.getUser(token);
  const user = data?.user;
  if (error || !user) { res.status(401).json({ error: "Oturum geçersiz" }); return null; }
  const rol = yerindeRolOku(user);
  if (!rol) { res.status(403).json({ error: "Yerinde servis yetkin yok" }); return null; }
  let teknisyenKod = null;
  if (rol === "yerinde_teknisyen") {
    const { data: t } = await supabase.from("yerinde_teknisyenler").select("kod").eq("user_id", user.id).eq("aktif", true).maybeSingle();
    teknisyenKod = t?.kod || null;
  }
  return { user, rol, teknisyenKod };
}

// Postgres benzersizlik ihlali → aynı teknisyene aynı gün + slot (yerinde_isler_slot_tekil).
export const slotCakisti = (error) => error?.code === "23505";

// api/_yerinde.js — yerinde servis API'lerinin ortak kimlik kontrolü (YK #183 PR-2). `_` önekli: uç değildir.
// Rol YALNIZ app_metadata.rol'den (src/yerinde-kimlik.js). Yazmalar service key ile yapılır; RLS'te yazma politikası
// yok (PR-1 ilke ③) → kim neyi yazabilir kararı BURADA ve uçlarda verilir.
// ⛔ Kişisel veri loglanmaz: hata yanıtları ve console çıktıları ad/telefon/adres taşımaz.
import supabase from "./_supabase.js";
import { yerindeRolOku } from "../src/yerinde-kimlik.js";
import { aralikEngeli } from "../src/yerinde-cekirdek.js";

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

// Postgres benzersizlik ihlali (yerinde_isler_slot_tekil). 25 Eki SQL'iyle index kalktı; eski şemada çalışırsa hâlâ anlamlı.
export const slotCakisti = (error) => error?.code === "23505";

// Aralık kuralı sunucuda da uygulanır (istemci eski listeyle karar vermiş olabilir): aynı teknisyen + gün + aralıkta
// en fazla SLOT_EN_FAZLA iş ve hepsi yeni adrese yakın. Engel yoksa null, varsa { sebep, is: { no, ilce } }.
export async function aralikKontrol({ tek, gun, slot, ilce, haricId = null }) {
  if (!tek || !gun || slot == null) return null;
  let q = supabase.from("yerinde_isler").select("id, no, ilce").eq("teknisyen_kod", tek).eq("randevu_gun", gun).eq("randevu_slot", slot).neq("durum", "iptal");
  if (haricId) q = q.neq("id", haricId);
  const { data, error } = await q;
  if (error) return { sebep: "okunamadi" };
  return aralikEngeli(data || [], ilce);
}

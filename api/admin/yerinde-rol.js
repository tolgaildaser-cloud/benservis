// api/admin/yerinde-rol.js
// PATCH /api/admin/yerinde-rol — YALNIZ ADMIN (YK #183, 23 Eki 2026; panel-kurulum kalıbı)
// Header: Authorization: Bearer $ADMIN_TOKEN (api/_admin.js)
// Body: { user_id, rol: "yerinde_koordinator" | "yerinde_teknisyen" | null, teknisyen_kod? ("T1"…) }
// Bir auth kullanıcısına yerinde servis rolünü app_metadata.rol olarak yazar (yalnız service key yazabilir).
// Teknisyen rolünde `teknisyen_kod` zorunlu: yerinde_teknisyenler.user_id bu kullanıcıya bağlanır
// (RLS teknisyenin yalnız kendi işlerini görmesini bu bağdan çözer). rol: null → rol ve bağ kaldırılır.
// ⛔ Servis hesabına (app_metadata.servis_id) yerinde rolü verilmez: tek hesap tek yetki.
// ⛔ Kişisel veri loglanmaz; yanıt yalnız kimlik ve rol döner.
import supabase from "../_supabase.js";
import { setCorsHeaders } from "../_verimor.js";
import { adminYetkili } from "../_admin.js";
import { YERINDE_ROLLER } from "../../src/yerinde-kimlik.js";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const KOD = /^T[0-9]{1,2}$/;

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "PATCH") return res.status(405).json({ error: "Method not allowed" });
  if (!adminYetkili(req)) return res.status(401).json({ error: "Yetkisiz" });

  const { user_id, rol = null, teknisyen_kod } = req.body || {};
  if (!user_id || !UUID.test(String(user_id))) return res.status(400).json({ error: "Geçerli user_id zorunludur" });
  if (rol !== null && !YERINDE_ROLLER.includes(rol)) return res.status(400).json({ error: "rol geçersiz" });
  if (rol === "yerinde_teknisyen" && !KOD.test(String(teknisyen_kod || ""))) {
    return res.status(400).json({ error: "Teknisyen rolünde teknisyen_kod (ör. T1) zorunludur" });
  }

  const { data: mevcut, error: getErr } = await supabase.auth.admin.getUserById(user_id);
  if (getErr || !mevcut?.user) return res.status(404).json({ error: "Kullanıcı bulunamadı" });
  const app = { ...(mevcut.user.app_metadata || {}) };
  if (rol && app.servis_id) return res.status(409).json({ error: "Servis hesabına yerinde rolü verilmez" });

  // Önce bu kullanıcıya bağlı eski teknisyen satırı varsa çözülür (rol değişimi / kaldırma).
  const { error: cozErr } = await supabase.from("yerinde_teknisyenler").update({ user_id: null }).eq("user_id", user_id);
  if (cozErr) return res.status(500).json({ error: "Teknisyen bağı çözülemedi" });

  if (rol === "yerinde_teknisyen") {
    const { data: tek, error: tErr } = await supabase.from("yerinde_teknisyenler")
      .update({ user_id }).eq("kod", teknisyen_kod).is("user_id", null).select("kod").maybeSingle();
    if (tErr) return res.status(500).json({ error: "Teknisyen bağlanamadı" });
    if (!tek) return res.status(409).json({ error: "Teknisyen kodu yok ya da başka hesaba bağlı" });
  }

  if (rol) app.rol = rol; else delete app.rol;
  const { error } = await supabase.auth.admin.updateUserById(user_id, { app_metadata: app });
  if (error) return res.status(500).json({ error: "Rol yazılamadı" });

  return res.status(200).json({ ok: true, user_id, rol, teknisyen_kod: rol === "yerinde_teknisyen" ? teknisyen_kod : null });
}

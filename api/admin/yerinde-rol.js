// api/admin/yerinde-rol.js
// PATCH /api/admin/yerinde-rol — YALNIZ ADMIN (YK #183, 23 Eki 2026; panel-kurulum kalıbı)
// Header: Authorization: Bearer $ADMIN_TOKEN (api/_admin.js)
// Body: { user_id, rol: "yerinde_koordinator" | "yerinde_teknisyen" | null, teknisyen_kod? ("T1"…) } — `rol` alanı ZORUNLU
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

  const body = req.body || {};
  // IT bulgusu (PR-2): `rol` alanı EKSİKSE 400. Rol kaldırma yalnız açıkça `rol: null` ile (yanlışlıkla boş gövde
  // gönderen bir çağrı hesabın rolünü sessizce silmesin).
  if (!Object.prototype.hasOwnProperty.call(body, "rol")) return res.status(400).json({ error: "rol alanı zorunludur (kaldırmak için rol: null)" });
  const { user_id, rol, teknisyen_kod } = body;
  if (!user_id || !UUID.test(String(user_id))) return res.status(400).json({ error: "Geçerli user_id zorunludur" });
  if (rol !== null && !YERINDE_ROLLER.includes(rol)) return res.status(400).json({ error: "rol geçersiz" });
  if (rol === "yerinde_teknisyen" && !KOD.test(String(teknisyen_kod || ""))) {
    return res.status(400).json({ error: "Teknisyen rolünde teknisyen_kod (ör. T1) zorunludur" });
  }

  const { data: mevcut, error: getErr } = await supabase.auth.admin.getUserById(user_id);
  if (getErr || !mevcut?.user) return res.status(404).json({ error: "Kullanıcı bulunamadı" });
  const app = { ...(mevcut.user.app_metadata || {}) };
  if (rol && app.servis_id) return res.status(409).json({ error: "Servis hesabına yerinde rolü verilmez" });

  // IT bulgusu (PR-2): ATOMİK rol değişimi. Eski hâlde önce eski bağ çözülüyor, sonra yeni kod deneniyordu;
  // yeni kod doluysa (409) ya da rol yazımı düşerse kullanıcı ESKİ bağını da kaybediyordu. Yeni sıra:
  // ① hiçbir şeyi değiştirmeden eski bağı oku → ② yeni kodu bağla (doluysa 409, hiçbir şey değişmemiş olur)
  // → ③ eski bağı çöz → ④ rolü yaz; ③/④ düşerse yapılan adımlar geri alınır, eski bağ yerine konur.
  const { data: eski, error: eskiErr } = await supabase.from("yerinde_teknisyenler")
    .select("kod").eq("user_id", user_id).maybeSingle();
  if (eskiErr) return res.status(500).json({ error: "Teknisyen bağı okunamadı" });
  const eskiKod = eski?.kod || null;
  const yeniKod = rol === "yerinde_teknisyen" ? teknisyen_kod : null;
  let yeniBaglandi = false;

  const geriAl = async () => {
    if (yeniBaglandi) await supabase.from("yerinde_teknisyenler").update({ user_id: null }).eq("kod", yeniKod).eq("user_id", user_id);
    if (eskiKod && eskiKod !== yeniKod) await supabase.from("yerinde_teknisyenler").update({ user_id }).eq("kod", eskiKod).is("user_id", null);
  };

  if (yeniKod && yeniKod !== eskiKod) {
    const { data: tek, error: tErr } = await supabase.from("yerinde_teknisyenler")
      .update({ user_id }).eq("kod", yeniKod).is("user_id", null).select("kod").maybeSingle();
    if (tErr) return res.status(500).json({ error: "Teknisyen bağlanamadı" });
    if (!tek) return res.status(409).json({ error: "Teknisyen kodu yok ya da başka hesaba bağlı" });
    yeniBaglandi = true;
  }
  if (eskiKod && eskiKod !== yeniKod) {
    const { error: cozErr } = await supabase.from("yerinde_teknisyenler").update({ user_id: null }).eq("kod", eskiKod).eq("user_id", user_id);
    if (cozErr) { await geriAl(); return res.status(500).json({ error: "Eski teknisyen bağı çözülemedi; değişiklik geri alındı" }); }
  }

  if (rol) app.rol = rol; else delete app.rol;
  const { error } = await supabase.auth.admin.updateUserById(user_id, { app_metadata: app });
  if (error) { await geriAl(); return res.status(500).json({ error: "Rol yazılamadı; teknisyen bağı geri alındı" }); }

  return res.status(200).json({ ok: true, user_id, rol, teknisyen_kod: rol === "yerinde_teknisyen" ? teknisyen_kod : null });
}

// api/admin/push.js — pano Bildirim sekmesi ucu (YK #203 PR-2, 4 Kas 2026). ADMIN_TOKEN/ADMIN_PASSWORD korumalı.
// GET  → {aktif, buAy, liste[50]}: abone sayısı ve son 50 abonelik (id, cihaz, tarihler, bu ayki sayı). endpoint/anahtar DÖNMEZ.
// POST {baslik, metin, url, hedef:"tek", id}  → tek aboneye TEST gönderimi (ay sayacına yazılmaz).
// POST {baslik, metin, url, hedef:"hepsi"}    → tüm abonelere; ay tavanı 2 dolan atlanır, gidenin sayacı artar.
// Push hizmeti 404/410 derse abonelik bitmiştir: satır silinir. VAPID env yoksa 503. PII yok, log'a içerik yazılmaz.
import { adminYetkili } from "../_admin.js";
import { gonderimGovdesi, buAySayisi, tavanDolu, abonelikBitti, trAy } from "../../src/push-gonderim.js";

const LISTE = "id,cihaz,izin_at,teshis_at,son_gonderim,ay_gonderim";
const TOPLU_TAVAN = 2000;

async function webPushHazir() {
  const { VAPID_PUBLIC_KEY: pub, VAPID_PRIVATE_KEY: priv, VAPID_SUBJECT: konu } = process.env;
  if (!pub || !priv || !konu) return null;
  const { default: wp } = await import("web-push");
  wp.setVapidDetails(konu, pub, priv);
  return wp;
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (!adminYetkili(req)) return res.status(401).json({ ok: false, error: "Yetkisiz" });
  const { default: supabase } = await import("../_supabase.js");

  if (req.method === "GET") {
    const [{ count, error: e1 }, { data, error: e2 }] = await Promise.all([
      supabase.from("push_abone").select("id", { count: "exact", head: true }),
      supabase.from("push_abone").select(LISTE).order("izin_at", { ascending: false }).limit(50),
    ]);
    if (e1 || e2) return res.status(500).json({ ok: false, error: "Okunamadı" });
    const simdi = Date.now();
    const liste = (data || []).map((s) => ({ ...s, ay_gonderim: buAySayisi(s, simdi) }));
    return res.status(200).json({ ok: true, aktif: count || 0, ay: trAy(simdi), liste });
  }

  if (req.method !== "POST") return res.status(405).json({ ok: false });
  let g = req.body;
  if (typeof g === "string") { try { g = JSON.parse(g); } catch { g = null; } }
  const icerik = gonderimGovdesi(g);
  if (!icerik) return res.status(400).json({ ok: false, error: "Başlık (≤60) ve metin (≤160) gerekli" });
  const tek = g.hedef === "tek";
  if (!tek && g.hedef !== "hepsi") return res.status(400).json({ ok: false, error: "hedef: tek | hepsi" });
  if (tek && !Number.isInteger(g.id)) return res.status(400).json({ ok: false, error: "Tek gönderimde id gerekli" });

  const wp = await webPushHazir();
  if (!wp) return res.status(503).json({ ok: false, error: "VAPID ayarı eksik" });

  let q = supabase.from("push_abone").select(`${LISTE},endpoint,p256dh,auth`).is("iptal_at", null);
  q = tek ? q.eq("id", g.id) : q.order("id").limit(TOPLU_TAVAN);
  const { data: satirlar, error } = await q;
  if (error) return res.status(500).json({ ok: false, error: "Okunamadı" });
  if (tek && !satirlar?.length) return res.status(404).json({ ok: false, error: "Abone bulunamadı" });

  const yuk = JSON.stringify(icerik);
  const simdi = Date.now();
  const sonuc = { gonderilen: 0, atlanan: 0, silinen: 0, hata: 0 };
  for (const s of satirlar || []) {
    if (!tek && tavanDolu(s, simdi)) { sonuc.atlanan++; continue; }
    try {
      await wp.sendNotification({ endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } }, yuk, { TTL: 86400 });
      sonuc.gonderilen++;
      if (!tek) {
        await supabase.from("push_abone")
          .update({ son_gonderim: new Date(simdi).toISOString(), ay_gonderim: buAySayisi(s, simdi) + 1 }).eq("id", s.id);
      }
    } catch (e) {
      if (abonelikBitti(e?.statusCode)) {
        await supabase.from("push_abone").delete().eq("id", s.id);
        sonuc.silinen++;
      } else {
        sonuc.hata++;
        console.error("[push] gönderim:", e?.statusCode || "?");
      }
    }
  }
  return res.status(200).json({ ok: true, ...sonuc });
}

// api/garanti/hatirlatici.js
// POST /api/garanti/hatirlatici — teşhis sonuç ekranındaki "Garanti bitmeden hatırlatalım"
// formu (YK #136, 14 Eyl 2026). Kayıt `cihazlar` tablosuna `kaynak='garanti-hatirlatici'` ile düşer.
//
// ⛔ Onay kutusu işaretli değilse KAYIT YOK (400) — istemci de göndermiyor, ama tek kapı
//    istemci olmamalı (föy G). Doğrulama `src/garanti-hatirlatici.js` ile formla ortak.
// ⛔ `seri_no` YAZILMAZ (NULL): DPP pasaport uçları (`/api/dpp/cihaz`, `/api/dpp/og`,
//    `/api/ilan/*`) cihazı seri_no EŞİTLİĞİYLE buluyor → seri no'suz garanti kaydına hiçbir
//    public uçtan ulaşılamaz; e-posta hiçbir cevaba girmez.
// ⛔ Gönderim otomasyonu bu turda YOK (≥10 kayıtta ayrı kalem, #136).
import supabase from "../_supabase.js";
import { withRateLimit } from "../_ratelimit.js";
import { garantiKaydiDogrula } from "../../src/garanti-hatirlatici.js";

async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const sonuc = garantiKaydiDogrula(req.body);
  if (sonuc.hata) return res.status(400).json({ error: sonuc.hata });

  const { error } = await supabase
    .from("cihazlar")
    .insert({ ...sonuc.kayit, riza_ts: new Date().toISOString() });

  if (error) {
    console.error("[garanti-hatirlatici] insert:", error.message);
    return res.status(500).json({ error: "Kayıt şu an yapılamadı, lütfen biraz sonra tekrar deneyin." });
  }
  return res.status(201).json({ ok: true });
}

// Kişisel veri yazan açık uç: teşhisle aynı sıkılıkta sınır (kötüye kullanım / sahte kayıt).
export default withRateLimit(handler, {
  prefix: "garanti-hatirlatici",
  limits: [{ tokens: 3, window: "60 s" }, { tokens: 10, window: "1 d" }],
});

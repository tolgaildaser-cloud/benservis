// api/istatistik/uyeler.js — herkese açık, yalnız SAYI dönen üye istatistiği (31 Eki 2026).
// Tolga: "sabah brifingi üye sayısını da versin artık günlük olarak". Brifing oturumunda DB
// anahtarı yok; bu uç sayıyı sunucuda service key ile sayar. Pano Üyelik sekmesi de buradan okur.
// ⛔ PII YOK: satır değil yalnız count döner (head: true → hiçbir kayıt sunucuya bile inmez).
// garanti_kayit_toplam: cihazlar'da kaynak='garanti-hatirlatici'; demo kayıtlar (kaynak NULL) sayılmaz.
import supabase from "../_supabase.js";
import { withRateLimit } from "../_ratelimit.js";

const GARANTI_KAYNAK = "garanti-hatirlatici";

async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ ok: false });
  const yediGun = new Date(Date.now() - 7 * 864e5).toISOString();
  try {
    const [toplam, yedi, garanti] = await Promise.all([
      supabase.from("uyeler").select("id", { count: "exact", head: true }),
      supabase.from("uyeler").select("id", { count: "exact", head: true }).gte("created_at", yediGun),
      supabase.from("cihazlar").select("id", { count: "exact", head: true }).eq("kaynak", GARANTI_KAYNAK),
    ]);
    const hata = toplam.error || yedi.error || garanti.error;
    if (hata) throw hata;
    res.setHeader("Cache-Control", "public, max-age=3600");
    return res.status(200).json({
      uye_toplam: toplam.count ?? 0,
      son_7_gun: yedi.count ?? 0,
      garanti_kayit_toplam: garanti.count ?? 0,
      guncelleme: new Date().toISOString(),
    });
  } catch (e) {
    console.error("[istatistik/uyeler]", e?.message || e);
    res.setHeader("Cache-Control", "no-store");
    return res.status(500).json({ ok: false, error: "Sayı alınamadı" });
  }
}

export default withRateLimit(handler, { prefix: "istatistik-uyeler", limits: [{ tokens: 30, window: "60 s" }] });

// api/ikinci-el/liste.js — YK #171 İE-2 (11 Eki 2026): `/ikinci-el` DOD tipi vitrinin listesi.
// GET /api/ikinci-el/liste            → aktif, stoklu ikinci el ilanlar (yeni → eski)
// GET /api/ikinci-el/liste?dosya=BS-2E-000003 → tek ilan (dosya no ile)
//
// Yalnız Benservis'in sattığı, bir cihaz kaydına bağlı (cihaz_id dolu) ilanlar. Eski Haziran
// akışının ilanları (`api/ilan/liste`) bu uçtan dönmez.
// ⛔ DPP ön yüze çıkmaz: seri no ve cihaz_id cevaba girmez. Marka/model sunucuda cihaz
//    kaydından okunur, yalnız metin olarak döner (api/_public-alanlar.js).
import supabase from "../_supabase.js";
import { IKINCI_EL_PUBLIC_ALANLAR } from "../_public-alanlar.js";

const LIMIT = 60;
export const DOSYA_NO_RE = /^BS-2E-\d{6}$/;

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const dosya = String(req.query.dosya || "").trim().toUpperCase();
  if (dosya && !DOSYA_NO_RE.test(dosya)) return res.status(400).json({ error: "Dosya no geçersiz" });

  let query = supabase
    .from("ilanlar")
    .select(`${IKINCI_EL_PUBLIC_ALANLAR}, cihaz_id`)
    .eq("durum", "aktif")
    .gt("stok", 0)
    .not("cihaz_id", "is", null)
    .order("created_at", { ascending: false })
    .limit(LIMIT);
  if (dosya) query = query.eq("dosya_no", dosya);

  const { data, error } = await query;
  if (error) return res.status(500).json({ error: "Liste okunamadı" });

  const satirlar = data || [];
  const cihazIdler = [...new Set(satirlar.map((s) => s.cihaz_id).filter(Boolean))];
  const cihazlar = {};
  if (cihazIdler.length) {
    const { data: c } = await supabase.from("cihazlar").select("id, marka, model").in("id", cihazIdler);
    (c || []).forEach((x) => { cihazlar[x.id] = x; });
  }

  const ilanlar = satirlar.map(({ cihaz_id, ...ilan }) => ({
    ...ilan,
    marka: cihazlar[cihaz_id]?.marka || null,
    model: cihazlar[cihaz_id]?.model || null,
  }));

  if (dosya && !ilanlar.length) return res.status(404).json({ error: "İlan bulunamadı" });

  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
  return res.status(200).json({ ilanlar });
}

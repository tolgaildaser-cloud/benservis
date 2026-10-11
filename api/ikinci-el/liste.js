// api/ikinci-el/liste.js — YK #171 İE-2 (11 Eki 2026): `/ikinci-el` DOD tipi vitrinin listesi.
// GET /api/ikinci-el/liste            → aktif, stoklu ikinci el ilanlar (yeni → eski)
// GET /api/ikinci-el/liste?dosya=BS-2E-000003 → tek ilan + detay (İE-3: açıklama, kontrol
//     listesi, açılmış hal fotoğrafları, maskeli seri no, değişen parçalar)
//
// Yalnız Benservis'in sattığı, bir cihaz kaydına bağlı (cihaz_id dolu) ilanlar. Eski Haziran
// akışının ilanları (`api/ilan/liste`) bu uçtan dönmez.
// ⛔ DPP ön yüze çıkmaz: seri no ve cihaz_id cevaba girmez. Marka/model sunucuda cihaz
//    kaydından okunur, yalnız metin olarak döner (api/_public-alanlar.js).
import supabase from "../_supabase.js";
import { IKINCI_EL_PUBLIC_ALANLAR, IKINCI_EL_DETAY_ALANLAR, IKINCI_EL_TAMIR_ALANLAR } from "../_public-alanlar.js";

const LIMIT = 60;
export const DOSYA_NO_RE = /^BS-2E-\d{6}$/;

// Seri no ön yüze yalnız son 4 hanesiyle çıkar (Tolga, 11 Eki: "maskeli olmalı").
export const seriMaskele = (seri) => {
  const s = String(seri || "").replace(/\s/g, "");
  return s.length >= 4 ? `****${s.slice(-4)}` : null;
};

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const dosya = String(req.query.dosya || "").trim().toUpperCase();
  if (dosya && !DOSYA_NO_RE.test(dosya)) return res.status(400).json({ error: "Dosya no geçersiz" });

  let query = supabase
    .from("ilanlar")
    .select(`${IKINCI_EL_PUBLIC_ALANLAR}, ${dosya ? `${IKINCI_EL_DETAY_ALANLAR}, ` : ""}cihaz_id`)
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
    const { data: c } = await supabase.from("cihazlar")
      .select(dosya ? "id, marka, model, seri_no" : "id, marka, model").in("id", cihazIdler);
    (c || []).forEach((x) => { cihazlar[x.id] = x; });
  }

  const ilanlar = satirlar.map(({ cihaz_id, ...ilan }) => ({
    ...ilan,
    marka: cihazlar[cihaz_id]?.marka || null,
    model: cihazlar[cihaz_id]?.model || null,
  }));

  if (dosya && !ilanlar.length) return res.status(404).json({ error: "İlan bulunamadı" });

  if (dosya) {
    const cihazId = satirlar[0].cihaz_id;
    const { data: tamirler } = await supabase.from("tamir_kayitlari")
      .select(IKINCI_EL_TAMIR_ALANLAR).eq("cihaz_id", cihazId).order("tarih", { ascending: false });
    ilanlar[0] = {
      ...ilanlar[0],
      seri_maskeli: seriMaskele(cihazlar[cihazId]?.seri_no),
      degisen_parcalar: (tamirler || []).map((t) => ({
        tarih: t.tarih, islem: t.yapilan_islem,
        parcalar: Array.isArray(t.degistirilen_parcalar) ? t.degistirilen_parcalar : [],
      })),
    };
  }

  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
  return res.status(200).json({ ilanlar });
}

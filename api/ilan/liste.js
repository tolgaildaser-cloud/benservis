// api/ilan/liste.js
// GET /api/ilan/liste?durum=aktif&limit=20&offset=0
// Aktif ilanları DPP özeti ile döndürür. satici_tel listede gizlenir.
import supabase from "../_supabase.js";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const durum  = req.query.durum || "aktif";
  const limit  = Math.min(parseInt(req.query.limit)  || 20, 50);
  const offset = parseInt(req.query.offset) || 0;

  const { data: ilanlar, error, count } = await supabase
    .from("ilanlar")
    .select("id, seri_no, baslik, fiyat, konum, satici_ad, fotograflar, durum, created_at", { count: "exact" })
    .eq("durum", durum)
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) return res.status(500).json({ error: error.message });

  // DPP bilgisi: cihazlar + benservis doğrulama (toplu sorgu)
  const seriNolar = [...new Set((ilanlar || []).map(i => i.seri_no).filter(Boolean))];
  const dppMap = {};

  if (seriNolar.length > 0) {
    const { data: cihazlar } = await supabase
      .from("cihazlar")
      .select("id, seri_no, marka, model, kategori, mevcut_durum")
      .in("seri_no", seriNolar);

    if (cihazlar?.length) {
      const cihazIdToSeri = {};
      cihazlar.forEach(c => {
        dppMap[c.seri_no] = { marka: c.marka, model: c.model, kategori: c.kategori, mevcut_durum: c.mevcut_durum, benservis_dogrulanmis: false };
        cihazIdToSeri[c.id] = c.seri_no;
      });

      // Benservis tamiri var mı?
      const { data: tamirler } = await supabase
        .from("tamir_kayitlari")
        .select("cihaz_id")
        .in("cihaz_id", cihazlar.map(c => c.id))
        .eq("servis_turu", "benservis");

      (tamirler || []).forEach(t => {
        const seri = cihazIdToSeri[t.cihaz_id];
        if (seri && dppMap[seri]) dppMap[seri].benservis_dogrulanmis = true;
      });
    }
  }

  const result = (ilanlar || []).map(ilan => ({
    ...ilan,
    dpp: dppMap[ilan.seri_no] || null,
  }));

  return res.status(200).json({ ilanlar: result, toplam: count || 0 });
}

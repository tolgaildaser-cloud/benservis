// api/ilan/liste.js
// GET /api/ilan/liste?durum=aktif&limit=20&offset=0
// Aktif ilanları DPP özeti ile döndürür. satici_tel listede gizlenir.
import supabase from "../_supabase.js";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const durum    = req.query.durum || "aktif";
  const limit    = Math.min(parseInt(req.query.limit)  || 20, 50);
  const offset   = parseInt(req.query.offset) || 0;
  const kategori = req.query.kategori || null;

  let query = supabase
    .from("ilanlar")
    .select("id, seri_no, kategori, baslik, fiyat, konum, satici_ad, fotograflar, durum, created_at", { count: "exact" })
    .eq("durum", durum)
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (kategori) query = query.eq("kategori", kategori);

  const { data: ilanlar, error, count } = await query;

  if (error) return res.status(500).json({ error: error.message });

  // ── Servis mağaza ürünleri — pazaryeri birleşimi ────────────────
  // Kategori filtresi yokken servis ürünleri de listeye karışır
  // (servis_urunler'de cihaz kategorisi alanı yok).
  let servisUrunleri = [];
  if (!kategori && durum === "aktif" && offset === 0) {
    const { data: urunler } = await supabase
      .from("servis_urunler")
      .select("id, servis_id, baslik, aciklama, fiyat, gorsel_url, dpp_seri_no, created_at")
      .eq("durum", "aktif")
      .order("created_at", { ascending: false })
      .limit(30);

    if (urunler?.length) {
      // Servis ad/konum bilgisi
      const servisIdler = [...new Set(urunler.map(u => u.servis_id))];
      const { data: servisler } = await supabase
        .from("servis_basvurulari")
        .select("id, ad, il, ilce")
        .in("id", servisIdler);
      const servisMap = {};
      (servisler || []).forEach(sv => { servisMap[sv.id] = sv; });

      servisUrunleri = urunler.map(u => {
        const sv = servisMap[u.servis_id];
        return {
          id:          u.id,
          kaynak:      "servis",          // frontend ayrımı için
          servis_id:   u.servis_id,
          servis_ad:   sv?.ad || "Servis",
          seri_no:     u.dpp_seri_no || null,
          kategori:    null,
          baslik:      u.baslik,
          fiyat:       u.fiyat,
          konum:       sv ? `${sv.ilce}, ${sv.il}` : null,
          satici_ad:   sv?.ad || null,
          fotograflar: u.gorsel_url ? [u.gorsel_url] : [],
          durum:       "aktif",
          created_at:  u.created_at,
        };
      });
    }
  }

  // DPP bilgisi: cihazlar + benservis doğrulama (toplu sorgu)
  const seriNolar = [...new Set(
    [...(ilanlar || []), ...servisUrunleri].map(i => i.seri_no).filter(Boolean)
  )];
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

  const result = [...(ilanlar || []), ...servisUrunleri]
    .map(ilan => ({
      ...ilan,
      dpp: dppMap[ilan.seri_no] || null,
    }))
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  return res.status(200).json({ ilanlar: result, toplam: (count || 0) + servisUrunleri.length });
}

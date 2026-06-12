// api/servis/liste.js
// GET /api/servis/liste?il=...&ilce=...&cihaz=...
// Onaylanmış servisleri döner — ServisEkrani müşteri listesi için.
// Auth gerekmez, public endpoint.
import supabase from "../_supabase.js";

function setCors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

export default async function handler(req, res) {
  setCors(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const { il, ilce, cihaz } = req.query;

  let query = supabase
    .from("servis_basvurulari")
    .select("id, ad, il, ilce, adres, telefon, kategoriler, yetkili, tier, yetkili_markalar, lat, lng")
    .eq("durum", "onaylandi")
    .order("created_at", { ascending: false })
    .limit(100);

  if (il)   query = query.ilike("il",   il);
  if (ilce) query = query.ilike("ilce", ilce);

  const { data, error } = await query;
  if (error) return res.status(500).json({ error: error.message });

  // Puan bilgisini servis_performans tablosundan join et
  const servisIdler = (data || []).map(s => s.id);
  let puanMap = {};

  if (servisIdler.length > 0) {
    const { data: perfData } = await supabase
      .from("servis_performans")
      .select("servis_id, puan_carpani")
      .in("servis_id", servisIdler);
    (perfData || []).forEach(p => { puanMap[p.servis_id] = p; });
  }

  // Tamamlanan işlerden puan ortalaması + son 30 gün iş hacmi (kademe için)
  let puanOrtalama = {};
  let aylikIsSayisi = {};
  if (servisIdler.length > 0) {
    const { data: tamamlananlar } = await supabase
      .from("is_talepleri")
      .select("servis_id, puan, created_at")
      .in("servis_id", servisIdler)
      .eq("durum", "tamamlandi");

    const otuzGunOnce = Date.now() - 30 * 24 * 60 * 60 * 1000;

    (tamamlananlar || []).forEach(p => {
      if (p.puan != null) {
        if (!puanOrtalama[p.servis_id]) puanOrtalama[p.servis_id] = { toplam: 0, sayi: 0 };
        puanOrtalama[p.servis_id].toplam += p.puan;
        puanOrtalama[p.servis_id].sayi   += 1;
      }
      if (new Date(p.created_at).getTime() >= otuzGunOnce) {
        aylikIsSayisi[p.servis_id] = (aylikIsSayisi[p.servis_id] || 0) + 1;
      }
    });
  }

  // Kademe aylık tamamlanan iş hacmine göre otomatik atanır:
  // 10–25 → bronz · 26–60 → gold · 61+ → platin · <10 → kademe yok
  function tierHesapla(aylikIs) {
    if (aylikIs >= 61) return "platin";
    if (aylikIs >= 26) return "gold";
    if (aylikIs >= 10) return "bronz";
    return null;
  }

  // Cihaz filtresi + formatlama
  let servisler = (data || [])
    .filter(s => !cihaz || (s.kategoriler || []).includes(cihaz))
    .map(s => {
      const po = puanOrtalama[s.id];
      const puan = po && po.sayi > 0
        ? Math.round((po.toplam / po.sayi) * 10) / 10
        : null;

      return {
        id:           s.id,
        ad:           s.ad,
        il:           s.il,
        ilce:         s.ilce,
        adres:        s.adres || null,
        telefon:      s.telefon || null,
        kategoriler:  s.kategoriler || [],
        yetkili:      s.yetkili || false,
        tier:         tierHesapla(aylikIsSayisi[s.id] || 0),
        yetkili_markalar: s.yetkili_markalar || [],
        puan,
        yorumSayisi:  po?.sayi || 0,
        // lat/lng henüz yok → km hesaplanamaz, frontend null kabul eder
        lat:          s.lat  ?? null,
        lng:          s.lng  ?? null,
        kaynak:       "db",  // JSON servislerden ayırt etmek için
      };
    });

  return res.status(200).json({ servisler, toplam: servisler.length });
}

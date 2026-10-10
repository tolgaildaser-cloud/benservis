// api/pazar/liste.js — YK #166 PR-4 (10 Eki 2026): `/pazar` vitrininin listesi.
// GET /api/pazar/liste?kategori=yedek-parca&cihaz=<slug>&parca=<slug>
//
// Genel pazaryeri: Benservis + servis + dış satıcı ürünleri tek listede (`servis_urunler`).
// Yalnız `durum='aktif'` ve stoğu olan ürünler; demo/pasif/satıldı hiç dönmez.
// Kolonlar `URUN_PUBLIC_ALANLAR` (select("*") yasak, #114); satıcıdan yalnız ad + tür.
// `/ikinci-el` listesi (`api/ilan/liste`) bu uçtan bağımsız, aynen kalır.
import supabase from "../_supabase.js";
import { URUN_PUBLIC_ALANLAR } from "../_public-alanlar.js";
import { saticiHaritasi } from "../_satici.js";
import { kategoriBul, PAZAR_CIHAZLARI, PARCA_TURLERI } from "../../src/pazar-sozluk.js";

const LIMIT = 60;

// Query → güvenli filtre. Sözlükte olmayan değer yok sayılır (serbest metin DB'ye gitmez).
export function pazarFiltresi(q = {}) {
  const k = kategoriBul(q.kategori);
  const cihaz = PAZAR_CIHAZLARI.some((c) => c.slug === q.cihaz) ? q.cihaz : null;
  // Parça filtresi yalnız yedek parça kategorisinde anlamlı.
  const parca = k?.slug === "yedek-parca" && PARCA_TURLERI.some((p) => p.slug === q.parca) ? q.parca : null;
  return { kategori: k?.slug || null, cihaz, parca };
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const f = pazarFiltresi(req.query);

  let query = supabase
    .from("servis_urunler")
    .select(URUN_PUBLIC_ALANLAR)
    .eq("durum", "aktif")
    .gt("stok", 0)
    .order("created_at", { ascending: false })
    .limit(LIMIT);
  if (f.kategori) query = query.eq("kategori", f.kategori);
  if (f.cihaz)    query = query.eq("cihaz_turu", f.cihaz);
  if (f.parca)    query = query.eq("parca_turu", f.parca);

  const { data, error } = await query;
  if (error) return res.status(500).json({ error: "Liste okunamadı" });

  const saticilar = await saticiHaritasi(supabase, (data || []).map((u) => u.satici_id));
  const urunler = (data || []).map((u) => ({ ...u, satici: saticilar[u.satici_id] || null }));

  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
  return res.status(200).json({ urunler, filtre: f });
}

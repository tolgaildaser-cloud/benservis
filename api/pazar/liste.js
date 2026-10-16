// api/pazar/liste.js — YK #166 PR-4 (10 Eki 2026): `/pazar` vitrininin listesi.
// GET /api/pazar/liste?kategori=yedek-parca&cihaz=<slug>&parca=<slug>
// GET /api/pazar/liste?siralama=cok-satan → ana sayfa "Pazaryeri" bloğu (8 ürün, 11 Eki 2026).
//
// Genel pazaryeri: Benservis + servis + dış satıcı ürünleri tek listede (`servis_urunler`).
// Yalnız `durum='aktif'` ve stoğu olan ürünler; demo/pasif/satıldı hiç dönmez.
// Kolonlar `URUN_PUBLIC_ALANLAR` (select("*") yasak, #114); satıcıdan yalnız ad + tür.
// `/ikinci-el` listesi (`api/ilan/liste`) bu uçtan bağımsız, aynen kalır.
import supabase from "../_supabase.js";
import { URUN_PUBLIC_ALANLAR } from "../_public-alanlar.js";
import { saticiHaritasi } from "../_satici.js";
import { kategoriBul, PAZAR_CIHAZLARI, PARCA_TURLERI } from "../../src/pazar-sozluk.js";

// Tavan, katalogun TAMAMINI kapsamalı (16 Eki 2026): `/pazar` cihaz/parça süzgeci ve arama
// istemcide bu listenin üzerinde çalışır. 60'ta kalınca 108 aktif parçanın en eski 48'i vitrinde,
// süzgeçte, aramada ve blog "satın al" bağlantılarında hiç görünmüyordu (ör. klima 6'nın 5'i).
// Katalog bu tavana yaklaşırsa sunucu tarafı sayfalama gerekir; tavan sessizce kesmesin diye
// `src/anasayfa-pazar.test.js` sınırı kilitler.
const LIMIT = 500;
const COK_SATAN_ADET = 8;

// "En çok satan" (Tolga, 11 Eki: "ana sayfaya da 8 adet en çok satan ürünü pazaryeri olarak koy").
// Sıra: ödenmiş siparişlerdeki kalem sayısı ↓ → görseli olan önce → yeni eklenen önce
// (gelen liste zaten created_at ↓; sort kararlı olduğu için eşitlikte o sıra korunur).
// Satış sayısı cevaba GİRMEZ — yalnız sıra döner (traction rakamı public olmaz).
export function cokSatanSirala(urunler = [], siparisler = [], adet = COK_SATAN_ADET) {
  const satis = {};
  for (const s of siparisler) {
    for (const k of Array.isArray(s?.urunler) ? s.urunler : []) {
      if (k?.urun_id) satis[k.urun_id] = (satis[k.urun_id] || 0) + 1;
    }
  }
  return urunler
    .map((u, i) => ({ u, i, n: satis[u.id] || 0, g: u.gorsel_url ? 1 : 0 }))
    .sort((a, b) => b.n - a.n || b.g - a.g || a.i - b.i)
    .slice(0, adet)
    .map((x) => x.u);
}

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

  let liste = data || [];
  if (req.query.siralama === "cok-satan") {
    // Yalnız `urunler` kolonu okunur (alıcı adı/telefonu/adresi hiç seçilmez).
    // PayTR test modu siparişleri sayılmaz (Tolga, 11 Eki: "test siparişini sayımdan çıkar");
    // `odeme_test` boş (eski/ödemesiz kayıt) olan sayılır.
    const { data: sip } = await supabase
      .from("siparisler").select("urunler").eq("odeme_durumu", "odendi")
      .not("odeme_test", "is", true).limit(1000);
    liste = cokSatanSirala(liste, sip || []);
  }

  const saticilar = await saticiHaritasi(supabase, liste.map((u) => u.satici_id));
  const urunler = liste.map((u) => ({ ...u, satici: saticilar[u.satici_id] || null }));

  res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
  return res.status(200).json({ urunler, filtre: f });
}

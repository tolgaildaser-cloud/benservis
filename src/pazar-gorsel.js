// src/pazar-gorsel.js — temsili ürün görseli (YK #173 (e), 13 Eki 2026). Tek kaynak: vitrin kartı,
// ana sayfa bloğu, ürün sayfası, ön-render kabuğu ve Product JSON-LD aynı kuralı okur.
//
// GRF'nin ürettiği temsili görseller (tedarikçi görseli filigranlı ya da yok) `public/pazar-gorsel/<id>.webp`
// altında durur; `servis_urunler.gorsel_url` bu yolu gösterir. Ayrım yol önekinden yapılır (DB'de ek
// kolon yok): bu önekle başlayan görselin yanında her yerde "Temsili görsel" yazar.

export const TEMSILI_GORSEL_ONEK = "/pazar-gorsel/";
export const TEMSILI_ETIKET = "Temsili görsel";
export const TEMSILI_NOT = "Görsel temsilidir; ürünün görünümü farklı olabilir. Uyumlu modeli sipariş öncesi teyit edin.";

export const temsiliGorsel = (url) => typeof url === "string" && url.startsWith(TEMSILI_GORSEL_ONEK);

// JSON-LD ve og:image mutlak adres ister; site içi yol www köküne bağlanır, dış adres aynen kalır.
export const mutlakGorselUrl = (url, site = "https://www.benservis.com") =>
  typeof url === "string" && url.startsWith("/") ? `${site}${url}` : url;

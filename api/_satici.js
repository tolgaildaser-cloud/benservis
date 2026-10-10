// api/_satici.js — pazaryeri satıcı yardımcıları (YK #166 PR-2, 10 Eki 2026).
// `_` önekli: Vercel bunu uç olarak yayınlamaz.
//
// Her mağaza ürünü (`servis_urunler`) bir satıcıya bağlı: servis, Benservis ya da dış satıcı.
// Benservis ürünlerinde `servis_id` boştur; satıcı adı `saticilar`dan okunur.
import { SATICI_PUBLIC_ALANLAR } from "./_public-alanlar.js";

// tip (servis paneli) → kategori + tur (pazaryeri). `tip` kolonu geriye uyum için kalır.
export function tiptenKategori(tip) {
  return tip === "yedek_parca"
    ? { kategori: "yedek-parca", tur: "parca" }
    : { kategori: "ikinci-el", tur: "urun" };
}

// Servisin satıcı kaydı; yoksa açar. Servis paneli ürün eklerken çağrılır.
export async function servisSaticisi(supabase, servis_id) {
  const { data: var_ } = await supabase
    .from("saticilar").select("id").eq("servis_id", servis_id).maybeSingle();
  if (var_) return var_.id;

  const { data: sv } = await supabase
    .from("servis_basvurulari").select("ad").eq("id", servis_id).maybeSingle();
  const { data: yeni, error } = await supabase
    .from("saticilar")
    .insert({ ad: sv?.ad || "Servis", tur: "servis", servis_id })
    .select("id")
    .single();
  if (error) {
    // Eşzamanlı ilk ekleme: benzersiz servis_id çakıştıysa kaydı tekrar oku.
    const { data: tekrar } = await supabase
      .from("saticilar").select("id").eq("servis_id", servis_id).maybeSingle();
    return tekrar?.id || null;
  }
  return yeni.id;
}

// satici_id listesi → { id: {id, ad, tur} } (yalnız public alanlar).
export async function saticiHaritasi(supabase, saticiIdler) {
  const idler = [...new Set((saticiIdler || []).filter(Boolean))];
  if (idler.length === 0) return {};
  const { data } = await supabase
    .from("saticilar").select(SATICI_PUBLIC_ALANLAR).in("id", idler);
  return Object.fromEntries((data || []).map((s) => [s.id, s]));
}

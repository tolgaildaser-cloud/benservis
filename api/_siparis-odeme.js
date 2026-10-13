// api/_siparis-odeme.js — ödeme sonucu ortak işlemleri (YK #174, 13 Eki 2026).
// `_` önekli: Vercel bunu uç olarak yayınlamaz.
//
// PayTR bildirimi (api/odeme/callback.js), admin "havale geldi / iptal" (api/admin/pazar.js) ve
// süresi dolan havaleler (api/cron/expire.js) aynı fonksiyonları kullanır: ödeme gelince siparişteki
// ikinci el ilanları satıldı + stok 0, ödeme gelmezse ayırma (kilit) kalkar.
import { HAVALE_SURE_SAAT } from "../src/havale.js";

// Siparişteki ikinci el ilan kalemleri (api/siparis.js `ilan_id` yazar).
export function satilanIlanlar(siparis) {
  return (Array.isArray(siparis?.urunler) ? siparis.urunler : []).map((k) => k?.ilan_id).filter(Boolean);
}

export async function ilanlariSatildiYap(supabase, siparis) {
  const idler = satilanIlanlar(siparis);
  if (!idler.length) return null;
  const { error } = await supabase.from("ilanlar")
    .update({ durum: "satildi", stok: 0, kilit_token: null, kilit_bitis: null })
    .in("id", idler).eq("durum", "aktif");
  if (error) console.error("İkinci el ilan satıldı yapılamadı:", siparis.siparis_no, error.message);
  return error || null;
}

export async function ilanKilitleriniBirak(supabase, siparis) {
  const idler = satilanIlanlar(siparis);
  if (!idler.length) return null;
  const { error } = await supabase.from("ilanlar").update({ kilit_token: null, kilit_bitis: null })
    .in("id", idler).eq("durum", "aktif");
  return error || null;
}

// Bekleyen havale siparişini sonuçlandır. Koşullu güncelleme: yalnız hâlâ `odeme_bekleniyor` olan
// havale siparişi değişir (çift tıklama / cron ile yarış güvenli). → { durum } ya da { hata, kod }.
export async function havaleSonuclandir(supabase, siparisId, sonuc, simdi = new Date()) {
  if (!["geldi", "iptal"].includes(sonuc)) return { hata: "sonuc 'geldi' ya da 'iptal' olmalı", kod: 400 };
  const guncelle = sonuc === "geldi"
    ? { odeme_durumu: "odendi", odeme_tarihi: simdi.toISOString(), odeme_hata: null }
    : { odeme_durumu: "iptal", odeme_hata: "havale iptal (admin)" };
  const { data, error } = await supabase.from("siparisler").update(guncelle)
    .eq("id", siparisId).eq("odeme_saglayici", "havale").eq("odeme_durumu", "odeme_bekleniyor")
    .select("id, siparis_no, urunler");
  if (error) return { hata: error.message, kod: 500 };
  const siparis = data?.[0];
  if (!siparis) return { hata: "Bekleyen havale siparişi bulunamadı (sonuçlanmış olabilir)", kod: 409 };
  if (sonuc === "geldi") await ilanlariSatildiYap(supabase, siparis);
  else await ilanKilitleriniBirak(supabase, siparis);
  return { durum: guncelle.odeme_durumu, siparis_no: siparis.siparis_no };
}

// HAVALE_SURE_SAAT içinde ödemesi gelmeyen havale siparişlerini iptal et (cron). → iptal edilen sayı.
export async function suresiDolanHavaleleriIptalEt(supabase, simdi = new Date()) {
  const sinir = new Date(simdi.getTime() - HAVALE_SURE_SAAT * 3600 * 1000).toISOString();
  const { data, error } = await supabase.from("siparisler")
    .update({ odeme_durumu: "iptal", odeme_hata: `havale ${HAVALE_SURE_SAAT} saatte gelmedi` })
    .eq("odeme_saglayici", "havale").eq("odeme_durumu", "odeme_bekleniyor").lt("created_at", sinir)
    .select("id, siparis_no, urunler");
  if (error) { console.error("Havale süre iptali:", error.message); return 0; }
  for (const s of data || []) await ilanKilitleriniBirak(supabase, s);
  return (data || []).length;
}

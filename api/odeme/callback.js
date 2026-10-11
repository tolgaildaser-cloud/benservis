// api/odeme/callback.js
// POST /api/odeme/callback ← PayTR bildirim URL'si (PayTR panelinde tanımlı, Tolga 11 Eki).
// YK #167 PR-6 (iyzico yerine PayTR, dev.paytr.com 2. adım):
//   · hash doğrulanır: base64(hmac_sha256(merchant_oid + merchant_salt + status + total_amount, merchant_key))
//   · sipariş merchant_oid'in ilk 32 karakterinden bulunur (tiresiz uuid)
//   · idempotent: sipariş zaten `odendi` ise dokunulmaz; tekrar gelen bildirim de "OK" alır
//   · yanıt yalnız düz metin "OK" (başka içerik yok)
//   · YK #171 İE-3: sipariş ilk kez `odendi` olunca içindeki ikinci el ilanları (stok 1)
//     `satildi` + stok 0 olur; vitrinden ve sepetten düşer.
import supabase from "../_supabase.js";
import { paytrAyarlari, paytrBildirimGecerli, oidSiparisId, bildirimGuncellemesi } from "../_paytr.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.redirect(302, "/pazar");

  const ayar = paytrAyarlari();
  const b = req.body || {};
  if (!ayar || !paytrBildirimGecerli(ayar, b)) {
    console.error("PayTR bildirimi reddedildi: hash doğrulanamadı");
    return res.status(400).send("PAYTR notification failed: bad hash");
  }

  const id = oidSiparisId(b.merchant_oid);
  const { data: siparis } = id
    ? await supabase.from("siparisler").select("id, siparis_no, tutar, odeme_durumu, urunler").eq("id", id).single()
    : { data: null };
  if (!siparis) {
    console.error("PayTR bildirimi: sipariş bulunamadı");
    res.setHeader("Content-Type", "text/plain");
    return res.status(200).send("OK"); // tanınmayan sipariş için tekrar denetme döngüsü açılmaz
  }

  const guncelle = bildirimGuncellemesi(siparis, b);
  if (guncelle) {
    const { data: yazilan, error } = await supabase.from("siparisler").update(guncelle)
      .eq("id", siparis.id).neq("odeme_durumu", "odendi").select("id");
    if (error) {
      console.error("PayTR bildirimi yazılamadı:", siparis.siparis_no, error.message);
      return res.status(500).send("DB error"); // OK dönülmez → PayTR bildirimi yeniden dener
    }
    const ilanIdler = satilanIlanlar(siparis);
    if (guncelle.odeme_durumu === "odendi" && yazilan?.length && ilanIdler.length) {
      const { error: ie } = await supabase.from("ilanlar")
        .update({ durum: "satildi", stok: 0 }).in("id", ilanIdler).eq("durum", "aktif");
      if (ie) console.error("İkinci el ilan satıldı yapılamadı:", siparis.siparis_no, ie.message);
    }
  }

  res.setHeader("Content-Type", "text/plain");
  return res.status(200).send("OK");
}

// Siparişteki ikinci el ilan kalemleri (api/siparis.js `ilan_id` yazar).
export function satilanIlanlar(siparis) {
  return (Array.isArray(siparis?.urunler) ? siparis.urunler : []).map((k) => k?.ilan_id).filter(Boolean);
}

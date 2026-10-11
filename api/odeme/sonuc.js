// api/odeme/sonuc.js
// GET /siparis/:id?durum=ok|hata → /api/odeme/sonuc?siparis=:id (vercel.json rewrite)
// YK #167 PR-6: PayTR ödeme sonrası alıcının döndüğü sayfa. Kesin durum veritabanından okunur
// (PayTR: siparişi yalnız bildirim onaylar; merchant_ok_url tek başına kanıt değildir).
// Kişisel veri gösterilmez: yalnız sipariş no, ürün adları, tutar ve durum.
import supabase from "../_supabase.js";
import { sayfaHTML, kacis, tl, RENK } from "./_sayfa.js";

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export default async function handler(req, res) {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");

  const id = String(req.query.siparis || "").trim();
  const { data: s } = UUID_RE.test(id)
    ? await supabase.from("siparisler").select("id, siparis_no, urunler, tutar, odeme_durumu, odeme_saglayici").eq("id", id).single()
    : { data: null };
  if (!s) {
    return res.status(404).send(sayfaHTML("Sipariş bulunamadı", `<div class="kart" style="text-align:center;padding:40px 20px"><h1>Sipariş bulunamadı</h1><a class="dugme" href="/pazar">Pazaryerine dön</a></div>`));
  }

  const donus = String(req.query.durum || "");
  let ikon, baslik, metin, ekDugme = "";
  if (s.odeme_durumu === "odendi") {
    ikon = "✅"; baslik = "Ödemeniz alındı";
    metin = "Siparişiniz hazırlanıyor. Tahmini kargoya teslim 3 iş günü; kargo bilgisi telefonunuza gönderilir.";
  } else if (s.odeme_durumu === "odeme_basarisiz" || donus === "hata") {
    ikon = "⚠️"; baslik = "Ödeme tamamlanmadı";
    metin = "Kartınızdan çekim yapılmadı. Tekrar deneyebilir ya da farklı bir kart kullanabilirsiniz.";
    if (s.odeme_saglayici === "paytr") ekDugme = `<a class="dugme" href="/odeme/${s.id}" style="margin:0 6px 10px">Tekrar dene</a>`;
  } else {
    ikon = "⏳"; baslik = "Ödemeniz kontrol ediliyor";
    metin = "Bankadan onay bekleniyor. Bu sayfa birkaç saniye içinde kendiliğinden yenilenir.";
  }
  const yenile = s.odeme_durumu === "odeme_bekleniyor" && donus === "ok" ? `<meta http-equiv="refresh" content="5" />` : "";

  const urunler = (s.urunler || []).map(k => `<li>${kacis(k.baslik)}</li>`).join("");
  return res.status(200).send(sayfaHTML(baslik, `
    <div class="kart" style="text-align:center;padding:36px 20px">
      <div style="font-size:46px;margin-bottom:10px">${ikon}</div>
      <h1>${kacis(baslik)}</h1>
      <div style="display:inline-block;background:#F1F5F9;border-radius:8px;padding:8px 18px;margin:6px 0 14px">
        <span style="font-size:11.5px;color:${RENK.SLATE}">Sipariş No</span><br /><strong style="font-size:17px">${kacis(s.siparis_no)}</strong>
      </div>
      <p style="font-size:14px;color:#475569;line-height:1.7;max-width:440px;margin:0 auto 14px">${metin}</p>
      <ul style="list-style:none;padding:0;margin:0 0 8px;font-size:13px;color:${RENK.SLATE}">${urunler}</ul>
      <div style="font-weight:700;color:${RENK.BLUE};margin-bottom:20px">Toplam: ${tl(s.tutar)}</div>
      ${ekDugme}<a class="dugme" href="/pazar" style="background:${RENK.INK};margin:0 6px 10px">Alışverişe devam et</a>
    </div>`, yenile));
}

// src/garanti-hatirlatici.js — GARANTİ HATIRLATICISI (DPP-lite) · YK #136 · 14 Eyl 2026
//
// Formun ve sunucunun AYNI kuralı okuduğu tek yer: istemci göndermeden, sunucu yazmadan
// bu fonksiyondan geçer (föy G: "onay kutusu işaretlenmeden istek gönderilmez — istemci + sunucu").
// Metinler föyden BİREBİR: `benservis-icerik/2026-09-14-YK-KVKK-GARANTI-HATIRLATICI-METNI.md` §E.
//
// ⛔ ÜÇ KURAL (#136):
//   ① Tarih HESAPLANMAZ — kullanıcının girdiği bitiş tarihi hatırlatılır. Burada yalnız
//      biçim/tutarlılık denetlenir (gerçek tarih mi, bitiş bugünden sonra mı); süre üretilmez.
//   ② Form yalnız teşhis SONUÇ ekranında (#177 deney grubu değişmez).
//   ③ `/gizlilik/` eklemeleri yayında olmadan form açılmaz — PR #190 ile 14 Eyl'de yayında.
// ⛔ Fatura, fotoğraf, seri numarası, ad, telefon İSTENMEZ.

export const RIZA_METIN_V = 1;

// Metin değişirse RIZA_METIN_V artar — kayıttaki sürüm, kullanıcının hangi metni onayladığını gösterir.
export const METIN = {
  baslik: "Garanti bitmeden hatırlatalım",
  alt: "Cihazınızı kaydedin; garanti bitişinden 30 gün önce e-posta gönderelim. Ücretsiz, tanıtım yok.",
  satinAlma: "Satın alma tarihi",
  garantiBitis: "Garanti bitiş tarihi",
  garantiYardim: "Türkiye'de tüketici ürünlerinde yasal garanti en az 2 yıldır; üreticinin verdiği ek süre için garanti belgenize bakın. Tarihi siz girersiniz, biz hesaplamayız.",
  eposta: "E-posta",
  onayOnce: "Girdiğim e-posta adresine garanti bitiş hatırlatması gönderilmesini istiyorum. Verilerimin ",
  onayLink: "Gizlilik Politikası",
  onaySonra: "'nda açıklandığı şekilde işlenmesini kabul ediyorum. Bu onayı istediğim zaman info@benservis.com adresine yazarak geri alabilirim.",
  dugme: "Hatırlatmayı kur",
  basari: "Kaydedildi. Garanti bitişinden 30 gün önce e-posta göndereceğiz. Kaydı silmek için info@benservis.com'a yazmanız yeterli.",
};

const EPOSTA = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const GUN = /^(\d{4})-(\d{2})-(\d{2})$/;
const AY = /^(\d{4})-(\d{2})$/;

// "YYYY-MM-DD" gerçek bir takvim günü mü? (2026-02-30 gibi değerleri reddeder)
function gercekGun(s) {
  const m = GUN.exec(s || "");
  if (!m) return null;
  const d = new Date(Date.UTC(+m[1], +m[2] - 1, +m[3]));
  return d.getUTCFullYear() === +m[1] && d.getUTCMonth() === +m[2] - 1 && d.getUTCDate() === +m[3] ? s : null;
}

// Satın alma "ay/yıl yeterli" (föy §E): <input type="month"> "YYYY-MM" verir → ayın 1'i olarak saklanır.
// Tam gün gelirse o da kabul. Bu bir hesap değil, biçim çevirisi.
function satinAlmaGunu(s) {
  const t = String(s || "").trim();
  if (AY.test(t)) return gercekGun(`${t}-01`);
  return gercekGun(t);
}

const kirp = (v, n) => String(v ?? "").trim().slice(0, n);

/**
 * @param body   istemciden gelen ham gövde
 * @param bugun  "YYYY-MM-DD" (test için dışarıdan verilir; varsayılan sunucu günü, UTC)
 * @returns { hata: string } | { kayit: object }
 */
export function garantiKaydiDogrula(body, bugun = new Date().toISOString().slice(0, 10)) {
  const b = body || {};
  if (b.riza !== true) return { hata: "Hatırlatma için onay kutusunu işaretlemeniz gerekiyor." };

  const kategori = kirp(b.kategori, 60);
  if (!kategori) return { hata: "Cihaz türü eksik." };

  const eposta = kirp(b.eposta, 254).toLowerCase();
  if (!EPOSTA.test(eposta)) return { hata: "Geçerli bir e-posta adresi girin." };

  const satin = satinAlmaGunu(b.satin_alma_tarihi);
  if (!satin) return { hata: "Satın alma tarihini ay ve yıl olarak girin." };

  const bitis = gercekGun(String(b.garanti_bitis_tarihi || "").trim());
  if (!bitis) return { hata: "Garanti bitiş tarihini girin." };
  if (satin > bugun) return { hata: "Satın alma tarihi ileri bir tarih olamaz." };
  if (bitis <= bugun) return { hata: "Garanti bitiş tarihi geçmiş görünüyor; hatırlatma yalnız ileri bir tarih için kurulur." };
  if (bitis < satin) return { hata: "Garanti bitiş tarihi, satın alma tarihinden önce olamaz." };

  return {
    kayit: {
      kategori,
      marka: kirp(b.marka, 60) || null,
      model: kirp(b.model, 80) || null,
      satin_alma_tarihi: satin,
      garanti_bitis_tarihi: bitis,
      eposta,
      kaynak: "garanti-hatirlatici",
      riza_metin_v: RIZA_METIN_V,
    },
  };
}

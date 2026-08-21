// scripts/site-istatistik.mjs — servis + tarife + İÇERİK sayıları → src/site-istatistik.json
// Vitrin bandındaki sayıların TEK kaynağı (şişirme yasağı: her sayı veriden sayılır, elle yazılmaz).
// Veri değişince (yeni il toplaması, tarife güncellemesi) yeniden koş:
//   node scripts/site-istatistik.mjs
// Gösterim kuralı (Tolga, 20 Ağu 2026): servis kaydı 10.000'i aşınca vitrin "10.000+" yazar,
// TAM SAYI bu dosyada (site-istatistik.json) durur ve raporlarda oradan okunur.
import fs from "node:fs";

const servisler = JSON.parse(fs.readFileSync(new URL("../src/services-data.json", import.meta.url), "utf8"));
const { SEED } = await import("../src/tarife-seed.js");
const { HATA_KODU_KATMANI } = await import("../src/hata-kodlari.js");
const { kilavuzKayitlari } = await import("../src/kullanim-kilavuzlari.js");
const { CIHAZLAR, MARKALAR } = await import("../src/constants.js");

const iller = new Set(servisler.map((s) => s.sehir));
const ilceler = new Set(servisler.map((s) => `${s.sehir}|${s.ilce}`));
const puanli = servisler.filter((s) => s.puan != null && s.puan !== "").length;
const serbis = servisler.filter((s) => s.serbis).length;
const tarife = Object.values(SEED).reduce((n, satirlar) => n + satirlar.length, 0);

// ── İÇERİK SAYILARI (21 Ağu 2026, Tolga: "aşağı şunları da ekle 50+ rehber, 200+ blog,
// tamir, kılavuz vb") ────────────────────────────────────────────────────────────────
// ⛔ ŞİŞİRME YASAĞI (#77) BURADA DA GEÇERLİ: sayılar dosyalardan SAYILIR, elle yazılmaz.
// Talimatta "50+ rehber · 200+ blog" geçiyordu; gerçek sayım bunun altında çıktı
// (rehber 19 · blog 171) ve vitrine GERÇEK sayı basılır — yuvarlama yukarı çekilmez.
// "10.000+" biçimi yalnız servis kaydında var ve o da GERÇEĞİ AŞMIYOR (10.529 > 10.000).
const blogDizin = new URL("../content/blog/", import.meta.url);
const blogDosyalari = fs.readdirSync(blogDizin).filter((f) => f.endsWith(".md"));
// Kendi Türkçe onarım rehberimiz = frontmatter'ında `guide:` olan yazı. build-blog'un
// `rehberDenetimi()` sayacıyla AYNI ölçüt — iki yerde iki farklı rehber sayısı olmasın.
const rehber = blogDosyalari.filter((f) =>
  /^guide:/m.test(fs.readFileSync(new URL(f, blogDizin), "utf8"))).length;
// Tamir Merkezi kaydı: hata kodu + belirti + ayar girişlerinin tamamı.
const tamir = Object.values(HATA_KODU_KATMANI).reduce((n, k) => n + k.length, 0);
// Kılavuz: marka×cihaz kayıt sayısı (sayfalarda listelenen satır sayısı).
const kilavuz = kilavuzKayitlari().length;
// Kapsam sayıları — İKİSİ DE KENDİ VERİMİZ, üçüncü taraf hakkında iddia DEĞİL.
// ⛔ services-data'daki `yetkili` bayrağı (626 kayıt) BİLEREK kullanılmadı: işletme ADINDAN
// türetiliyor ve 626'nın yalnız 11'inde marka bilgisi var — manşet rakamı yapılacak kadar
// sağlam değil. Kullanılacaksa hüküm YK'nın.
const cihaz = CIHAZLAR.length;
const marka = MARKALAR.length;

const istatistik = {
  aciklama: "ÜRETİLDİ (scripts/site-istatistik.mjs) — elle düzenleme, veri değişince script yeniden koşulur.",
  servis: servisler.length,
  puanli,
  serbis,
  il: iller.size,
  ilce: ilceler.size,
  tarife,
  blog: blogDosyalari.length,
  rehber,
  tamir,
  kilavuz,
  cihaz,
  marka,
};

fs.writeFileSync(new URL("../src/site-istatistik.json", import.meta.url), JSON.stringify(istatistik, null, 2) + "\n");
console.log("✓ src/site-istatistik.json:", JSON.stringify(istatistik));

// scripts/site-istatistik.mjs — servis + tarife + İÇERİK sayıları → src/site-istatistik.json
// Vitrin bandındaki sayıların TEK kaynağı (şişirme yasağı: her sayı veriden sayılır, elle yazılmaz).
// Veri değişince (yeni il toplaması, tarife güncellemesi) yeniden koş:
//   node scripts/site-istatistik.mjs
// Gösterim kuralı (Tolga, 20 Ağu 2026): servis kaydı 10.000'i aşınca vitrin "10.000+" yazar,
// TAM SAYI bu dosyada (site-istatistik.json) durur ve raporlarda oradan okunur.
//
// ── 30 Ağu 2026 · YK Kararı #112 — MODÜLE ÇEVRİLDİ, DAVRANIŞ AYNI ────────────────────
// Bu dosya üçüncü kez bayat yakalandı (blog 210↔216, rehber 126↔127). Kök sebep sayım
// değil, üretimin HİÇBİR ŞEYE BAĞLI OLMAMASIydı: içerik eklenince script kendiliğinden
// koşmuyor, koştuğunu doğrulayan da yok → build yeşil, test yeşil, uyarı yok (#110'un
// "sessiz düşüş" sınıfı). Kapı artık `src/site-istatistik.test.js`: ölçütü YENİDEN KOŞAR
// ve commit'li json ile karşılaştırır.
//
// Bu yüzden sayım artık iki EXPORT'ta yaşıyor ve dosya import EDİLDİĞİNDE HİÇBİR ŞEY
// YAZMAZ — yalnız doğrudan çalıştırılınca yazar. Test ölçütü kopyalamak zorunda kalmasın
// diye: ölçüt iki yerde yaşarsa iki farklı sayım doğar ve kapı yanlış şeyi korur.
// ⛔ `npm run build`'e BAĞLANMADI (#112 bunu açıkça reddetti: build'i içerik yazma işine
//    bağlar ve `test.yml`'nin bilerek dar tuttuğu kapsamı genişletir). Kapı TEST kapısıdır.
import fs from "node:fs";
import { pathToFileURL } from "node:url";

const blogDizin = new URL("../content/blog/", import.meta.url);

// ── İÇERİK SAYIM ÖLÇÜTÜ — TEK KAYNAK ─────────────────────────────────────────────────
// (21 Ağu 2026, Tolga: "aşağı şunları da ekle 50+ rehber, 200+ blog, tamir, kılavuz vb")
// ⛔ ŞİŞİRME YASAĞI (#77) BURADA DA GEÇERLİ: sayılar dosyalardan SAYILIR, elle yazılmaz.
// Talimatta "50+ rehber · 200+ blog" geçiyordu; gerçek sayım bunun altında çıktı
// (o gün rehber 19 · blog 171) ve vitrine GERÇEK sayı basılır — yuvarlama yukarı çekilmez.
//
// Kendi Türkçe onarım rehberimiz = frontmatter'ında `guide:` olan yazı. build-blog'un
// `rehberDenetimi()` sayacıyla AYNI ölçüt — iki yerde iki farklı rehber sayısı olmasın.
//
// 📌 `src/site-istatistik.test.js` bu fonksiyonu ÇAĞIRIR (kopyalamaz). Ölçüt burada
//    değişirse kapı da kendiliğinden onunla değişir; sapma yalnız json bayatlayınca doğar.
export function icerikSayilari() {
  const blogDosyalari = fs.readdirSync(blogDizin).filter((f) => f.endsWith(".md"));
  const rehber = blogDosyalari.filter((f) =>
    /^guide:/m.test(fs.readFileSync(new URL(f, blogDizin), "utf8"))).length;
  return { blog: blogDosyalari.length, rehber };
}

export async function istatistikHesapla() {
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

  const { blog, rehber } = icerikSayilari();
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

  return {
    aciklama: "ÜRETİLDİ (scripts/site-istatistik.mjs) — elle düzenleme, veri değişince script yeniden koşulur.",
    servis: servisler.length,
    puanli,
    serbis,
    il: iller.size,
    ilce: ilceler.size,
    tarife,
    blog,
    rehber,
    tamir,
    kilavuz,
    cihaz,
    marka,
  };
}

export const JSON_YOLU = new URL("../src/site-istatistik.json", import.meta.url);

export function istatistikYaz(istatistik) {
  fs.writeFileSync(JSON_YOLU, JSON.stringify(istatistik, null, 2) + "\n");
}

// Yalnız DOĞRUDAN çalıştırılınca yazar (`node scripts/site-istatistik.mjs`).
// Import edildiğinde yazmaz — testin dosyayı sessizce tazeleyip kendi kapısını
// geçersiz kılmaması için (o hâlde kapı hiçbir zaman kırılmazdı).
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const istatistik = await istatistikHesapla();
  istatistikYaz(istatistik);
  console.log("✓ src/site-istatistik.json:", JSON.stringify(istatistik));
}

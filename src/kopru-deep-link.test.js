// src/kopru-deep-link.test.js — YK Kararı #68 ③ (15 Ağu 2026) regresyon kilidi.
//
// NEDEN VAR: #67'de blog köprüsü iki AYRI dosyada yaşıyor —
//   üreten taraf  : scripts/build-blog.mjs  (KOPRU_CIHAZ · KOPRU_ARIZA → URL'e slug basar)
//   çözen taraf   : src/App.jsx             (CIHAZLAR · BELIRTILER · EK_BELIRTI → slug'ı metne çevirir)
// İki tablo sessizce ayrışabilir ve ayrıştı: yazıların çoğunun konusu çözen taraftaki
// sözlükte KARŞILIĞI OLMADIĞI için üreten taraf `ariza` parametresini hiç basmıyordu →
// kullanıcı blogdan gelince cihaz seçili, BELİRTİ BOŞ açılıyordu (Tolga, 15 Ağu:
// "cihaz seçili geliyor ama belirti yazılı gelmiyor").
//
// Bu testler DAVRANIŞI kilitler, satır adlarını değil:
//   ① Üretilen her `ariza` değeri çözen tarafta KARŞILIK BULMALI (ölü slug basılmasın).
//   ② Basılan `cihaz` slug'ı App'in cihaz sözlüğünde ÇÖZÜLMELİ.
//   ③ Belirti CİHAZINA bağlı kalmalı — bir cihazın belirtisi başka cihaza sızmamalı.
// Tablolar büyüdükçe test kendini günceller; sayı sabitlenmez (kapsam kararı YK'nın).
import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
// Cihaz slug'ı App.jsx'te `cihazSlug` ile üretiliyor (çivilenmiş adlarda ad≠slug).
// Test bunu KOPYALAMAZ, tek kaynaktan ithal eder — kopyalasa çivi eklendiğinde
// sessizce ayrışır ve köprü sözleşmesini yanlış yerden ölçerdi.
import { cihazSlug } from "./constants.js";

// App.jsx'teki `slugla` ile BİREBİR aynı olmak zorunda — köprünün tüm sözleşmesi bu.
const slugla = (s) =>
  String(s).toLocaleLowerCase("tr").replace(/ı/g, "i").replace(/ş/g, "s").replace(/ğ/g, "g")
    .replace(/ü/g, "u").replace(/ö/g, "o").replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

// Kaynak dosyalardan tablo çıkarır. Tablo bulunamazsa test GÜRÜLTÜLÜ patlar (sessizce
// "0 kayıt bulundu → hepsi geçti" durumuna düşmesin diye ayrıca boşluk kontrolü var).
function tabloOku(dosya, ad) {
  const src = readFileSync(new URL(`../${dosya}`, import.meta.url), "utf8");
  const m = src.match(new RegExp(`const ${ad} = (\\{[\\s\\S]*?\\n\\});`));
  if (!m) throw new Error(`${dosya} içinde ${ad} tablosu bulunamadı — köprü sözleşmesi taşınmış olabilir.`);
  const t = eval(`(${m[1]})`);
  if (!Object.keys(t).length) throw new Error(`${dosya}/${ad} boş okundu.`);
  return t;
}

const KOPRU_CIHAZ = tabloOku("scripts/build-blog.mjs", "KOPRU_CIHAZ");
const KOPRU_ARIZA = tabloOku("scripts/build-blog.mjs", "KOPRU_ARIZA");
const BELIRTILER = tabloOku("src/App.jsx", "BELIRTILER");
const EK_BELIRTI = tabloOku("src/App.jsx", "EK_BELIRTI");

// build-blog.mjs'in `slugify`si ile BİREBİR aynı olmak zorunda — köprü aramasının anahtarı bu.
// (App.jsx'in `slugla`sından ayrı: o Türkçe-duyarlı toLocaleLowerCase yolunu kullanıyor,
// bu ise harf eşlemesini ÖNCE yapıyor. İkisi de aynı sonucu verir; kopyalanan taraf, her
// tablonun kendi üreticisiyle ölçülsün diye ayrı tutuldu.)
const TR_HARF = { ı: "i", İ: "i", ş: "s", Ş: "s", ğ: "g", Ğ: "g", ü: "u", Ü: "u", ö: "o", Ö: "o", ç: "c", Ç: "c" };
const slugify = (s) =>
  String(s ?? "").replace(/[ıİşŞğĞüÜöÖçÇ]/g, (c) => TR_HARF[c])
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const KOPRU_CIHAZ_SLUG = Object.fromEntries(
  Object.entries(KOPRU_CIHAZ).map(([ad, slug]) => [slugify(ad), slug])
);
// Kategori dizesinden cihaz slug'ı — build-blog'daki `kopruCihazSlug`ın KATEGORİ ayağı.
const kategoriCihaz = (kategori) => KOPRU_CIHAZ_SLUG[slugify(kategori)] || "";

// ── 3 Eyl 2026: ÖN EK AYAĞI ─────────────────────────────────────────────────────────────
// Köprü artık yalnız `category`ye bakmıyor: slug'ı `kurutma-makinesi-` ile başlayan yazı,
// kategorisi ne derse desin kurutma cihazına gider (frontmatter'da 5'i "Çamaşır makinesi",
// 1'i "Genel" yazıyor — o metadata PAZ'ın alanı). Bu test dosyası üreteni İTHAL EDEMİYOR
// (build-blog.mjs import edilince koşuyor), o yüzden sözleşmeyi AYNADAN ölçer; aynanın
// kaymaması için ön ek dizesi kaynaktan OKUNUR, elle kopyalanmaz.
const KURUTMA_ONEK = (() => {
  const src = readFileSync(new URL("../scripts/build-blog.mjs", import.meta.url), "utf8");
  const m = src.match(/const KURUTMA_ONEK = "([^"]+)";/);
  if (!m) throw new Error("build-blog.mjs içinde KURUTMA_ONEK bulunamadı — köprünün ön ek ayağı taşınmış olabilir.");
  return m[1];
})();
// build-blog'daki `kopruCihazSlug(p)` ile BİREBİR aynı sıra: önce ön ek, sonra kategori.
const yaziCihaz = (y) =>
  (y.slug?.startsWith(KURUTMA_ONEK) ? "kurutma-makinesi" : "") || kategoriCihaz(y.category);
// Cihazı BİLEREK olmayan kategoriler (build-blog'daki `KOPRU_CIHAZSIZ` ile aynı liste).
const KOPRU_CIHAZSIZ = new Set(["genel", "surdurulebilirlik", "kurumsal"].map(slugify));

const CIHAZ_SLUG = Object.fromEntries(
  Object.keys(BELIRTILER).flatMap((c) => [[cihazSlug(c), c], [slugla(c), c]])
);
const belirtiCoz = (cihaz, slug) =>
  [...(BELIRTILER[cihaz] || []), ...(EK_BELIRTI[cihaz] || [])].find((b) => slugla(b) === slug) || "";

// Yazı slug'ı → kategori (build-blog'un `kopruHref` için kullandığı iki alan).
const yazilar = readdirSync(new URL("../content/blog", import.meta.url))
  .filter((f) => f.endsWith(".md"))
  .map((f) => {
    const t = readFileSync(new URL(`../content/blog/${f}`, import.meta.url), "utf8");
    return {
      slug: (t.match(/^slug:\s*"(.*)"/m) || [])[1] || f.replace(/\.md$/, ""),
      category: (t.match(/^category:\s*"(.*)"/m) || [])[1] || "",
    };
  });

describe("blog → teşhis köprüsü (YK #67 · #68 ③)", () => {
  it("basılan her cihaz slug'ı App tarafında çözülür", () => {
    const cozulmeyen = Object.values(KOPRU_CIHAZ).filter((s) => !CIHAZ_SLUG[s]);
    expect(cozulmeyen, "build-blog bu cihaz slug'ını basıyor ama App çözemiyor").toEqual([]);
  });

  it("basılan her ariza değeri kendi cihazında bir belirtiye çözülür (ölü slug yok)", () => {
    // Cihazı olmayan yazıda `ariza` zaten basılmaz; tabloyu yazının kategorisiyle eşleyerek denetle.
    const yaziyla = Object.fromEntries(yazilar.map((y) => [y.slug, y]));
    const olu = [];
    for (const [yaziSlug, ariza] of Object.entries(KOPRU_ARIZA)) {
      const cihazSlug = yaziyla[yaziSlug] ? yaziCihaz(yaziyla[yaziSlug]) : "";
      // Yazısı silinmiş/kategorisi değişmiş kayıt da bir ayrışmadır — ayrıca raporlanır.
      if (!cihazSlug) { olu.push(`${yaziSlug} → cihaz bağlamı yok (yazı silindi ya da kategorisi değişti)`); continue; }
      const cihaz = CIHAZ_SLUG[cihazSlug];
      if (!belirtiCoz(cihaz, ariza)) olu.push(`${yaziSlug} → "${ariza}" (${cihaz}) çözülmüyor`);
    }
    expect(olu, "URL'e basılan ariza değeri App'te karşılıksız → belirti BOŞ açılır (#68 ③)").toEqual([]);
  });

  it("belirti cihazına bağlıdır — başka cihaza sızmaz", () => {
    // "kurutmuyor" bulaşık makinesinin belirtisi; klimada karşılığı yok, uygulanmamalı.
    expect(belirtiCoz("Bulaşık Makinesi", "kurutmuyor")).toBe("Kurutmuyor");
    expect(belirtiCoz("Klima", "kurutmuyor")).toBe("");
  });

  it("bilinmeyen ariza değeri kırmaz, boş döner", () => {
    expect(belirtiCoz("Çamaşır Makinesi", "boyle-bir-belirti-yok")).toBe("");
    expect(belirtiCoz("Çamaşır Makinesi", "")).toBe("");
  });

  // ── 30 Ağu 2026 REGRESYON KİLİDİ ────────────────────────────────────────────────────
  // Bu dosya bugüne kadar yalnız "basılan slug ÖLÜ MÜ" diye sordu; "basılması gereken slug
  // BASILIYOR MU" diye hiç sormadı. Külliyat 70 → 216 yazıya çıkarken dört yeni kategori
  // dizesi doğdu, köprü tablosu büyümedi ve 16 yazı sessizce köprüsüz kaldı — testler
  // yeşil, build yeşil. Aşağıdaki iki test o kör noktayı kapatır.
  it("her yazının kategorisi ya cihaza eşlenmiş ya da BİLEREK cihazsız", () => {
    const kararsiz = [...new Set(
      yazilar.filter((y) => !yaziCihaz(y) && !KOPRU_CIHAZSIZ.has(slugify(y.category)))
        .map((y) => y.category)
    )];
    expect(kararsiz, "bu kategoride ilk-ekran köprüsü HİÇ basılmaz — KOPRU_CIHAZ'a ya da KOPRU_CIHAZSIZ'a karar yaz").toEqual([]);
  });

  it("kategori araması harf farkına düşmez (aynı cihazın iki yazımı aynı slug'a çözülür)", () => {
    // 27 Ağu'da tam bu ayrışma vardı: `blogGrubu()` slugify'dan geçiyordu, köprü ise TAM
    // DİZE arıyordu → "Çamaşır Makinesi" (büyük M) doğru kümede ama köprüsüz kalıyordu.
    expect(kategoriCihaz("Çamaşır makinesi")).toBe("camasir-makinesi");
    expect(kategoriCihaz("Çamaşır Makinesi")).toBe("camasir-makinesi");
    expect(kategoriCihaz("ÇAMAŞIR MAKİNESİ")).toBe("camasir-makinesi");
    // Cihazsız kategori yine boş dönmeli — normalize etmek kapsamı genişletmez.
    expect(kategoriCihaz("Genel")).toBe("");
    expect(kategoriCihaz("Sürdürülebilirlik")).toBe("");
  });

  // ── 3 EYL 2026 REGRESYON KİLİDİ — KURUTMA YANLIŞ CİHAZA GİDİYORDU ──────────────────
  // 21 Ağu'da kurutma ayrı cihaz oldu; slug ön eki kuralı GRUPLAMAYA (`blogGrubu`) girdi
  // ama KÖPRÜYE girmedi. 13 gün boyunca canlıda: 5 kurutma yazısı köprüyü
  // `?cihaz=camasir-makinesi` ile basıyordu → form yanlış cihazla açılıyor, tahmini tutar
  // kurutmanın kendi tarifesi yerine çamaşır makinesininkinden çıkıyordu. Build yeşildi,
  // tek uyarı yoktu — bu testler o sessizliği bitirir.
  it("kurutma yazıları KENDİ cihazına gider (kategorileri 'Çamaşır makinesi' olsa bile)", () => {
    const kurutma = yazilar.filter((y) => y.slug.startsWith(KURUTMA_ONEK));
    expect(kurutma.length, "kurutma yazısı hiç bulunamadı — test kör noktaya düşmüş olabilir").toBeGreaterThan(0);
    const sapan = kurutma.filter((y) => yaziCihaz(y) !== "kurutma-makinesi")
      .map((y) => `${y.slug} → ${yaziCihaz(y) || "(cihaz YOK)"}`);
    expect(sapan, "kurutma yazısı başka cihazın formunu açıyor — yanlış tarife, yanlış tutar").toEqual([]);
  });

  it("kurutmanın kendi belirtileri App tarafında çözülür (çamaşır makinesinde çözülmezdi)", () => {
    // Hatanın somut bedeli buydu: bu üç belirti "Çamaşır Makinesi"nde karşılıksız olduğu
    // için ya hiç basılmıyor ya da basılsa boş açılıyordu.
    expect(belirtiCoz("Kurutma Makinesi", "kurutmuyor-nem-kaliyor")).toBe("Kurutmuyor / nem kalıyor");
    expect(belirtiCoz("Kurutma Makinesi", "isitmiyor-soguk-ufluyor")).toBe("Isıtmıyor / soğuk üflüyor");
    expect(belirtiCoz("Kurutma Makinesi", "su-tanki-dolu-uyarisi")).toBe("Su tankı dolu uyarısı");
    expect(belirtiCoz("Kurutma Makinesi", "filtre-kondenser-tikali")).toBe("Filtre/kondenser tıkalı");
    // Sızma kapısı aynen duruyor: bunlar çamaşır makinesinin belirtisi DEĞİL.
    expect(belirtiCoz("Çamaşır Makinesi", "su-tanki-dolu-uyarisi")).toBe("");
  });

  it("ön ek kuralı bulanık değil: 'kurutma' geçen her yazıyı kapmaz", () => {
    // 21 Ağu'nun kendi şerhi: `bulasik-makinesi-kurutmuyor` BİLEREK dışarıda.
    const bulasik = yazilar.find((y) => y.slug === "bulasik-makinesi-kurutmuyor");
    if (bulasik) expect(yaziCihaz(bulasik)).toBe("bulasik-makinesi");
  });

  it("#68 ③ vakası: Tolga'nın açtığı yazı belirti taşır", () => {
    // Bu yazı cihaz taşıyor ama `ariza` basılmıyordu → belirti boş geliyordu.
    const ariza = KOPRU_ARIZA["camasir-makinesi-tahliye-filtresi-temizleme"];
    expect(ariza).toBeTruthy();
    expect(belirtiCoz("Çamaşır Makinesi", ariza)).toBe("Su boşaltmıyor");
  });
});

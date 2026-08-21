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
    const kategori = Object.fromEntries(yazilar.map((y) => [y.slug, y.category]));
    const olu = [];
    for (const [yaziSlug, ariza] of Object.entries(KOPRU_ARIZA)) {
      const cihazSlug = KOPRU_CIHAZ[kategori[yaziSlug]];
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

  it("#68 ③ vakası: Tolga'nın açtığı yazı belirti taşır", () => {
    // Bu yazı cihaz taşıyor ama `ariza` basılmıyordu → belirti boş geliyordu.
    const ariza = KOPRU_ARIZA["camasir-makinesi-tahliye-filtresi-temizleme"];
    expect(ariza).toBeTruthy();
    expect(belirtiCoz("Çamaşır Makinesi", ariza)).toBe("Su boşaltmıyor");
  });
});

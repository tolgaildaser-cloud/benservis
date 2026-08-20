// scripts/site-istatistik.mjs — src/services-data.json + src/tarife-seed.js → src/site-istatistik.json
// Vitrin bandındaki sayıların TEK kaynağı (şişirme yasağı: her sayı veriden sayılır, elle yazılmaz).
// Veri değişince (yeni il toplaması, tarife güncellemesi) yeniden koş:
//   node scripts/site-istatistik.mjs
// Gösterim kuralı (Tolga, 20 Ağu 2026): servis kaydı 10.000'i aşınca vitrin "10.000+" yazar,
// TAM SAYI bu dosyada (site-istatistik.json) durur ve raporlarda oradan okunur.
import fs from "node:fs";

const servisler = JSON.parse(fs.readFileSync(new URL("../src/services-data.json", import.meta.url), "utf8"));
const { SEED } = await import("../src/tarife-seed.js");

const iller = new Set(servisler.map((s) => s.sehir));
const ilceler = new Set(servisler.map((s) => `${s.sehir}|${s.ilce}`));
const puanli = servisler.filter((s) => s.puan != null && s.puan !== "").length;
const tarife = Object.values(SEED).reduce((n, satirlar) => n + satirlar.length, 0);

const istatistik = {
  aciklama: "ÜRETİLDİ (scripts/site-istatistik.mjs) — elle düzenleme, veri değişince script yeniden koşulur.",
  servis: servisler.length,
  puanli,
  il: iller.size,
  ilce: ilceler.size,
  tarife,
};

fs.writeFileSync(new URL("../src/site-istatistik.json", import.meta.url), JSON.stringify(istatistik, null, 2) + "\n");
console.log("✓ src/site-istatistik.json:", JSON.stringify(istatistik));

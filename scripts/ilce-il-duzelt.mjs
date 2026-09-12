// scripts/ilce-il-duzelt.mjs — services-data.json'daki il/ilçe alanlarını ADRESTEN yeniden türetir.
//
// NEDEN (12 Eyl 2026, Tolga: "ilçe ve il eşleşmesini güzel çalış, aynı ilçe adı farklı illerde
// olabilir"): alanlar iki ayrı hatalı yoldan doluyordu — ilçe adı adres metninde alt dize olarak
// aranıyordu (sokak adı ilçe sanıldı) ve ilçe→il sözlüğü çift anlamlı adlarda son ili yazıyordu.
// Tek doğru kaynak adresin "<İlçe>/<İl>" kuyruğudur; doğrulama `src/ilce-il.js` (resmî 81 il).
//
// ⛔ TAHMİN YOK: kuyruk çözülemiyorsa (mahalle adı, eksik adres) kayda DOKUNULMAZ.
// ♻️ Idempotent: ikinci koşuda 0 değişiklik bekler. API çağrısı YAPMAZ, para harcamaz.
//
// Kullanım:  node scripts/ilce-il-duzelt.mjs [--yaz]
//   (kuru koşu varsayılan; `--yaz` olmadan dosyaya yazmaz)
import { readFileSync, writeFileSync, copyFileSync } from "node:fs";
import { adresIlIlce, ilceyiTasiyanIller, ilceGecerliMi } from "../src/ilce-il.js";

const YOL = new URL("../src/services-data.json", import.meta.url);
const YAZ = process.argv.includes("--yaz");

const kayitlar = JSON.parse(readFileSync(YOL, "utf8"));
const sayac = { toplam: kayitlar.length, cozulen: 0, cozulemeyen: 0, ilDegisti: 0, ilceDegisti: 0, ilceTemizlendi: 0 };
const ilDagilim = new Map();
const ornekler = [];

for (const s of kayitlar) {
  const r = adresIlIlce(s.adres);
  if (!r) {
    sayac.cozulemeyen++;
    // Adres çözülemiyor AMA elimizdeki ilçe o ilin ilçesi bile değilse (eski veride
    // `istanbul/Istanbul` gibi artıklar), uydurma değeri TUTMAYIZ: bilinmiyorsa boş kalır.
    // Boş ilçe, ilçe filtresine hiç girmez; mesafe aramasında kayıt yine kullanılabilir.
    if (s.ilce && !ilceGecerliMi(s.sehir, s.ilce)) { s.ilce = ""; sayac.ilceTemizlendi++; }
    continue;
  }
  sayac.cozulen++;
  const ilFark = r.slug !== s.sehir;
  const ilceFark = r.ilce !== s.ilce;
  if (ilFark) {
    sayac.ilDegisti++;
    ilDagilim.set(r.il, (ilDagilim.get(r.il) || 0) + 1);
    if (ornekler.length < 6) ornekler.push(`${s.sehir}/${s.ilce}  ->  ${r.slug}/${r.ilce}   [${(s.adres || "").slice(0, 52)}]`);
  }
  if (ilceFark) sayac.ilceDegisti++;
  s.sehir = r.slug;
  s.ilce = r.ilce;
}

console.log(`kayıt ${sayac.toplam} · adresten çözülen ${sayac.cozulen} (%${(100 * sayac.cozulen / sayac.toplam).toFixed(1)}) · çözülemeyen ${sayac.cozulemeyen} (dokunulmadı)`);
console.log(`il düzeltilen: ${sayac.ilDegisti} · ilçe düzeltilen: ${sayac.ilceDegisti} · geçersiz ilçe boşaltılan: ${sayac.ilceTemizlendi}`);
if (ilDagilim.size) {
  console.log("il düzeltmelerinin gittiği iller:", [...ilDagilim].sort((a, b) => b[1] - a[1]).map(([il, n]) => `${il}:${n}`).join(" · "));
  console.log("örnekler:"); for (const o of ornekler) console.log("   ", o);
}

// Belirsiz ilçe adları — veride fiilen kaç kayıt taşıyor? (Bilgi; karar adresten geliyor.)
const belirsiz = new Map();
for (const s of kayitlar) {
  if (!s.ilce) continue;
  const iller = ilceyiTasiyanIller(s.ilce);
  if (iller.length > 1) belirsiz.set(s.ilce, (belirsiz.get(s.ilce) || 0) + 1);
}
if (belirsiz.size) {
  console.log("\nbirden çok ilde bulunan ilçe adı taşıyan kayıtlar (artık il ile birlikte tutuluyor):");
  for (const [ad, n] of [...belirsiz].sort((a, b) => b[1] - a[1]).slice(0, 8)) {
    console.log(`   ${ad}: ${n} kayıt · bu ad ${ilceyiTasiyanIller(ad).length} ilde var (${ilceyiTasiyanIller(ad).join(", ")})`);
  }
}

if (YAZ) {
  copyFileSync(YOL, new URL("../src/services-data.json.bak", import.meta.url));
  writeFileSync(YOL, JSON.stringify(kayitlar));
  console.log("\n✅ yazıldı (yedek: services-data.json.bak)");
} else {
  console.log("\nKURU KOŞU — dosyaya yazılmadı. Uygulamak için: node scripts/ilce-il-duzelt.mjs --yaz");
}

// Benservis — TARİFE SAYAÇ DENETİMİ (23 Ağu 2026 Pazar, YK taraması TARAMA-2 → öncelik 3-4)
//
// SORUN. `tarife` tablosundaki `veri_noktasi_sayisi` ve `guven` alanları ELLE yazılıyor;
// `tarife_veri` kanıt tablosundan TÜRETİLMİYOR. Sonuç iki yönlü kopukluk:
//   A) Kanıt var ama sayaç 0 diyor  → toplanmış veri hiç işlenmemiş.
//   B) Sayaç 2-4 diyor ama kanıt tablosunda HİÇ satır yok → sayaç kendini beyan ediyor.
// İkincisi daha ağır: o satırlar "yüksek güven" göstererek denetlenemez hâle geliyor.
//
// BU BETİK. Kanıttan TÜRETİLMİŞ değeri hesaplar ve beyanla karşılaştırır. Hesap, projenin
// KENDİ fonksiyonlarıyla yapılır (`api/_tarife-hesap.js` → onerTarife/guvenSeviyesi) ki
// denetim, sistemin kendi kuralından sapmasın.
//
// ⚠️ K3 FİLTRESİ. `tarife-rapor.mjs` ile aynı: `dusuk-guven=sayfa-ici-makas` etiketli
//    noktanın PARÇA ekseni güvenilmezdir (sayfa tek kalem değil kategori listesi okumuş).
//    O noktalar parça medyanını ve güven hesabını BESLEMEZ. Nokta silinmez, kanıt kalır.
//    Bu filtre uygulanmazsa güven olduğundan iyi çıkar — denetimin anlamı kalmaz.
//
// ⛔ VARSAYILAN KURU KOŞU. Hiçbir şey yazmaz. Yazmak için `--uygula` gerekir.
//    Bu bilinçli: tarife onaylı veridir ve `guven` alanı kullanıcıya gösterilen fiyatın
//    arkasındaki iddiadır. Toplu güncelleme YK kararı ister.
//
// KULLANIM
//   node scripts/tarife-sayac-denetimi.mjs            → rapor (yazmaz)
//   node scripts/tarife-sayac-denetimi.mjs --uygula   → sayaç + güveni türetilmişe çeker
//   node scripts/tarife-sayac-denetimi.mjs --oksuz    → yalnız öksüz kanıt anahtarlarını listeler
//
// NOT: `veri_noktasi_sayisi`nın tanımı SATIR SAYISIDIR (onerTarife: `n = points.length`),
// benzersiz host sayısı değil. Mükerrer host sayacı şişirir; tarife-topla.mjs bunu
// TARIFE_KAYNAK_DOSYA ile önlüyor (3 Ağu 2026, IT notu).

import fs from "node:fs";
import supabase from "../api/_supabase.js";
import { onerTarife } from "../api/_tarife-hesap.js";

const UYGULA = process.argv.includes("--uygula");
const OKSUZ_ONLY = process.argv.includes("--oksuz");

// ——— Öksüz kanıt anahtarları → güncel kalem adları ———
// YK #38/#49 kalem bölmelerinde adlar değişti; eski kanıt eşleşemez oldu. Eşleme ELLE
// yapıldı ve her biri kanıt satırlarının kaynak URL'i okunarak doğrulandı (23 Ağu).
const AD_ESLEME = {
  // aynı kalem, ad sırası değişmiş
  "Fırın / Ocak / Aspiratör|Aspiratör anahtar/kart/lamba": "Aspiratör lamba / anahtar / kart",
  // aynı kalem, ad genişletilmiş
  "Bilgisayar / Yazıcı|Ekran kartı/RAM/disk": "Ekran kartı (GPU) / RAM / disk",
  // YK #38 bölmesi: eski tek kalem ikiye ayrıldı. Üç kanıt satırının da URL'i MENTEŞE
  // (armut laptop-mentese-degisimi · mxstore laptop-mentese-tamiri · ilsabilisim) →
  // ekran paneline değil, menteşe kalemine ait.
  "Bilgisayar / Yazıcı|Ekran/menteşe (laptop)": "Menteşe tamiri (laptop)",
  // yazım varyantı; tek satır ve URL'i YOK (bölme tohumu, gerçek kanıt değil)
  "Çamaşır Makinesi|Rulman/keçe değişimi (vidalı kazan)": "Rulman/keçe değişimi (vidalı)",
};

const parcaGuvensiz = (v) => /dusuk-guven=sayfa-ici-makas/.test(v.notlar || "");

const { data: tarife, error: e1 } = await supabase.from("tarife").select("*").order("id");
const { data: veri, error: e2 } = await supabase.from("tarife_veri").select("*");
if (e1 || e2) { console.error("Supabase hatası:", (e1 || e2).message); process.exit(1); }

// ——— kanıtı kalem anahtarına göre grupla (öksüz eşlemesi uygulanmış hâlde) ———
const K = new Map();
for (const r of veri) {
  const ham = `${r.cihaz}|${r.ariza}`;
  const ariza = AD_ESLEME[ham] || r.ariza;
  const k = `${r.cihaz}|${ariza}`;
  if (!K.has(k)) K.set(k, []);
  K.get(k).push(r);
}

const tarifeKeys = new Set(tarife.map((r) => `${r.cihaz}|${r.ariza}`));
const oksuz = [...K.keys()].filter((k) => !tarifeKeys.has(k));

if (OKSUZ_ONLY || oksuz.length) {
  console.log(`\n══ ÖKSÜZ KANIT ANAHTARI: ${oksuz.length}`);
  for (const k of oksuz) console.log(`   ${k} → ${K.get(k).length} kayıt`);
  if (!oksuz.length) console.log("   (yok — eşleme tam)");
  if (OKSUZ_ONLY) process.exit(0);
}

// ——— denetim ———
const onayli = tarife.filter((r) => r.durum === "onayli");
const fark = [];
let ayni = 0;

for (const r of onayli) {
  const hepsi = K.get(`${r.cihaz}|${r.ariza}`) || [];
  // K3: parça ekseni güvenilmez noktalar güven hesabına girmez
  const saglam = hepsi.filter((v) => !parcaGuvensiz(v));
  const o = saglam.length
    ? onerTarife(saglam)
    : { veri_noktasi_sayisi: 0, guven: "dusuk" };
  const beyanN = r.veri_noktasi_sayisi || 0;
  if (beyanN === o.veri_noktasi_sayisi && r.guven === o.guven) { ayni++; continue; }
  fark.push({
    id: r.id, kalem: `${r.cihaz} · ${r.ariza}`,
    beyanN, turetN: o.veri_noktasi_sayisi,
    beyanG: r.guven, turetG: o.guven,
    elenen: hepsi.length - saglam.length,
  });
}

// ——— rapor ———
const yon = (f) => (f.turetN > f.beyanN ? "↑" : f.turetN < f.beyanN ? "↓" : "=");
const kanitsiz = fark.filter((f) => f.turetN === 0 && f.beyanN > 0);
const kullanilmayan = fark.filter((f) => f.beyanN === 0 && f.turetN > 0);
const guvenDustu = fark.filter((f) => f.beyanG !== f.turetG &&
  ["yuksek", "orta"].indexOf(f.beyanG) < ["yuksek", "orta"].indexOf(f.turetG) === false
  ? false : f.beyanG !== f.turetG);

console.log(`\n══ TARİFE SAYAÇ DENETİMİ — ${onayli.length} onaylı satır`);
console.log(`beyan = türetilmiş : ${ayni}`);
console.log(`FARKLI             : ${fark.length}`);
console.log(`  ↳ kanıtsız beyan (sayaç var, kanıt YOK) : ${kanitsiz.length}`);
console.log(`  ↳ kullanılmayan kanıt (sayaç 0, kanıt var): ${kullanilmayan.length}`);
console.log(`  ↳ güven seviyesi değişiyor              : ${fark.filter((f) => f.beyanG !== f.turetG).length}`);

if (kanitsiz.length) {
  console.log(`\n🔴 KANITSIZ BEYAN — bu satırlar denetlenemez:`);
  for (const f of kanitsiz)
    console.log(`  ${String(f.id).padStart(3)} ${f.kalem.padEnd(50).slice(0, 50)} vns ${f.beyanN}→0  güven ${f.beyanG}→${f.turetG}`);
}

console.log(`\n── tüm farklar ──`);
console.log(`id  | kalem${" ".repeat(46)}| vns beyan→türet | güven beyan→türet | K3 elenen`);
for (const f of fark)
  console.log(
    String(f.id).padStart(3), "|", f.kalem.padEnd(50).slice(0, 50), "|",
    String(f.beyanN).padStart(2), yon(f), String(f.turetN).padStart(2), "        |",
    f.beyanG.padEnd(6), "→", f.turetG.padEnd(6), "|", f.elenen || "");

if (!UYGULA) {
  console.log(`\n⛔ KURU KOŞU — hiçbir şey yazılmadı.`);
  console.log(`   Yazmak için: node scripts/tarife-sayac-denetimi.mjs --uygula`);
  console.log(`   ⚠️ Bu, ${fark.length} satırın güven iddiasını değiştirir → YK kararı ister.`);
  process.exit(0);
}

// ——— YEDEK. Yazmadan önce mevcut değerleri diske al: geri dönüş yolu açık kalsın.
const yedek = {
  tarih: new Date().toISOString(),
  not: "tarife-sayac-denetimi --uygula öncesi otomatik yedek",
  satirlar: fark.map((f) => ({ id: f.id, kalem: f.kalem, veri_noktasi_sayisi: f.beyanN, guven: f.beyanG })),
};
const yedekYol = new URL(`./tarife-sayac-yedek-${yedek.tarih.slice(0, 10)}.json`, import.meta.url);
fs.writeFileSync(yedekYol, JSON.stringify(yedek, null, 1));
console.log(`\n💾 Yedek: ${yedekYol.pathname} (${yedek.satirlar.length} satır)`);

let yazilan = 0;
for (const f of fark) {
  const { error } = await supabase.from("tarife")
    .update({ veri_noktasi_sayisi: f.turetN, guven: f.turetG }).eq("id", f.id);
  if (error) { console.warn(`  ✗ id ${f.id}: ${error.message}`); continue; }
  yazilan++;
}
console.log(`\n✓ ${yazilan} satır türetilmiş değere çekildi.`);
console.log(`  Sonraki adım: node scripts/tarife-snapshot.mjs → src/tarife-seed.js yenilensin.`);

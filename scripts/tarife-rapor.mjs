// scripts/tarife-rapor.mjs — bizim tahmin vs web verisi → % sapma raporu (READ-ONLY, hiçbir tabloya yazmaz).
// Çalıştır: `set -a; source .env.local; set +a; node scripts/tarife-rapor.mjs`
//
// 3 Ağu 2026 (IT) — İKİ HATA DÜZELTİLDİ:
//  ① Aksiyon sütunu YK Kararı #15 ÖNCESİ kuralı taşıyordu ("web düşükse asla düşürme").
//     #15 (23 Tem): floor koruması YALNIZ taban işleri korur; tabanın ÜSTÜNDEKİ işlerde
//     düzeltme ÇİFT YÖNLÜDÜR — çok kaynaklı web verisi bizden anlamlı düşükse insan onaylı
//     düşürme SERBEST (aşırı fiyat da marka riskidir). Şart: tek kaynakla asla.
//     → Taban artık kayıt bazlı hesaplanıyor: FLOOR = gidiş bedeli + o işin kendi işçiliği.
//  ② Web'de `toplam_tl` yokken script `parça+işçilik`i "all-in" sayıyordu → sadece parça
//     fiyatı veren sayfaları her-şey-dahil sanıp sistematik "biz pahalıyız" yanılsaması
//     üretiyordu. → Artık kıyas ELMA-ELMA: gerçek all-in verisi varsa all-in ekseninde,
//     yoksa PARÇA ekseninde (bizim SEED parça-ortası vs web parça medyanı) kıyaslanır.
//     Kıyas ekseni "Eksen" sütununda açıkça yazar.
//
// Ayrıca YK #35 kapısı için: her satırda kıyası besleyen **bağımsız host** sayısı gösterilir
// (aynı alan adının iki sayfası TEK kaynak sayılır). Host < 2 ise aksiyon önerilmez.
import supabase from "../api/_supabase.js";
import { sapmaSatiri, celiskiliMi, parcaGuvensiz, hostAdi as host, GIDIS } from "../api/_tarife-hesap.js";
import { seedAriza } from "../src/tarife-esleme.js";

// Bu rapor "bizim SEED'imiz vs WEB piyasası" kıyasıdır → YALNIZ kaynak='web' noktaları.
// (4 Ağu 2026, IT) Panelin "Veri gir" formu `kaynak='saha'` yazar; bölme sırasında yeni satırı
// panelde görünür kılmak için atılan TOHUM noktaları da öyle. Onlar bizim kendi rakamımızdır —
// kıyasa girerlerse kendimizi kendimizle doğrular, YK #35 host sayımını da şişiririz.
const { data: veriler, error: e1 } = await supabase
  .from("tarife_veri").select("id, cihaz, marka, ariza, parca_tl, iscilik_tl, toplam_tl, kaynak_url, notlar")
  .eq("kaynak", "web");
if (e1) { console.error("Supabase hatası (tarife_veri):", e1.message); process.exit(1); }

// K3 (4 Ağu 2026, IT) — EKSENE ÖZEL. `dusuk-guven=sayfa-ici-makas-*` etiketi, sayfanın verdiği
// parça bandının bir büyüklük mertebesini aştığını söyler: o sayfa tek kalem değil KATEGORİ
// listesi okumuştur → noktanın PARÇA ekseni güvenilmezdir. Aynı satırın gerçek `toplam_tl`
// (all-in) değeri varsa o SAĞLAMDIR, kıyasa girmeye devam eder. Nokta silinmez (kanıt kalır);
// yalnız parça medyanını ve YK #35 host sayımını beslemez, raporun altında ayrıca listelenir.
const dusukGuven = (veriler || []).filter(parcaGuvensiz);

const { data: onaylar, error: e2 } = await supabase
  .from("tarife").select("cihaz, marka, ariza, onayli_parca_min, onayli_parca_max, onayli_iscilik").eq("durum", "onayli");
if (e2) { console.error("Supabase hatası (tarife):", e2.message); process.exit(1); }

// YK #143 (26 Eyl): ham grup adı SEED adına çevrilir (src/tarife-esleme.js — panel de aynı
// tabloyu kullanır). Eşlemesi olmayan ham ad kendi adıyla kalır → onaylı satırla eşleşmez,
// raporun altında "SEED dışı" olarak listelenir (sessizce kaybolmaz).
const grupMap = new Map();
const seedDisi = new Map();
for (const v of veriler || []) {
  const hedef = seedAriza(v.cihaz, v.ariza);
  if (!hedef) seedDisi.set(`${v.cihaz} · ${v.ariza}`, (seedDisi.get(`${v.cihaz} · ${v.ariza}`) || 0) + 1);
  const k = `${v.cihaz}|${v.marka}|${hedef || v.ariza}`;
  if (!grupMap.has(k)) grupMap.set(k, []);
  grupMap.get(k).push(v);
}
const onayMap = new Map((onaylar || []).map((o) => [`${o.cihaz}|${o.marka}|${o.ariza}`, o]));
// Aykırı eleme + elma-elma eksen + host sayımı + aksiyon kuralı TEK YERDE:
// api/_tarife-hesap.js `sapmaSatiri` (panel "öneri var" etiketi de onu kullanır). Kopya kural YOK.
// `celiskili` işaretli noktalar (IT 26 Eyl) orada dışlanır.

const satirlar = [];
const veriYok = [];
for (const [k, pts] of grupMap) {
  const mev = onayMap.get(k);
  if (!mev) continue;
  const s = sapmaSatiri(pts, mev);
  if (!s) { veriYok.push(k.replace(/\|/g, " · ")); continue; }
  satirlar.push({ ad: k.replace(/\|/g, " · "), ...s });
}

satirlar.sort((a, b) => b.sapma - a.sapma); // en çok DÜŞÜK KALDIĞIMIZ (web > biz) en üstte

console.log("# Tarife Sapma Raporu — elma-elma kıyas (YK #15 çift yönlü · YK #35 kaynak kapısı)\n");
console.log(`_Eksen "all-in" = bizim parça-ortası + işçilik + ${GIDIS} gidiş **vs** web'in her-şey-dahil fiyatı._`);
console.log(`_Eksen "parça" = bizim SEED parça-ortası **vs** web parça medyanı (web all-in vermemiş; parça fiyatı all-in sayılmaz)._`);
console.log(`_Host = kıyası besleyen **bağımsız alan adı** sayısı. YK #35 eşiği: ≥2._\n`);

if (!satirlar.length) {
  console.log("_(Henüz karşılaştırılabilir web verisi yok. Önce `node scripts/tarife-topla.mjs <Cihaz>` çalıştır.)_");
  process.exit(0);
}
console.log("| Cihaz · Arıza | Eksen | Bizim | Web | Sapma | Host | Nokta | Aksiyon |");
console.log("|---|:--:|--:|--:|--:|:--:|--:|:--|");
for (const s of satirlar) {
  const aksiyon = {
    "tek-kaynak": "🔒 TEK KAYNAK — aksiyon yok, veri topla", // YK #15: "tek kaynakla asla"
    yukselt: "⚠️ DÜŞÜK KALMIŞIZ → yükselt",
    dusur: "🔻 PAHALI KALMIŞIZ → düşürme serbest",           // YK #15 çift yönlü
    floor: `floor korunur (taban ${s.taban})`,
    uyumlu: "✓ ±%20",
  }[s.aksiyon];
  console.log(`| ${s.ad} | ${s.eksen} | ${s.biz} | ${s.web} | %${s.sapma > 0 ? "+" : ""}${s.sapma} | ${s.hostSayisi} | ${s.nokta} | ${aksiyon} |`);
}

// Veri kalitesi: mantıken imkânsız nokta (parça > her-şey-dahil toplam) → çıkarım hatası.
const celiskili = (veriler || []).filter(
  (v) => v.parca_tl != null && v.toplam_tl != null && Number(v.parca_tl) > Number(v.toplam_tl)
);
if (celiskili.length) {
  console.log(`\n**⚠️ Çelişkili nokta (parça > toplam — LLM çıkarımı yanlış slotlamış, ${celiskili.length} adet):**`);
  for (const v of celiskili) console.log(`- ${v.cihaz} · ${v.ariza} — parça ${v.parca_tl} > toplam ${v.toplam_tl} · ${host(v.kaynak_url)}${celiskiliMi(v) ? " · işaretli → kıyasa katılmadı" : " · ⚠️ İŞARETSİZ — kıyasa giriyor, `notlar`'a `celiskili` yaz"}`);
}

if (seedDisi.size) {
  console.log(`\n**⚠️ SEED dışı ham grup adı — hiçbir onaylı satırla kıyaslanmadı (${seedDisi.size} grup):**`);
  for (const [ad, n] of seedDisi) console.log(`- ${ad} — ${n} nokta`);
  console.log("_Tek anlamlıysa `src/tarife-esleme.js`'ye eşleme ekle; iki SEED satırına denk geliyorsa /tarife panelinde onay sırasında satır seçilir._");
}

if (dusukGuven.length) {
  console.log(`\n**⚠️ Düşük güven — PARÇA ekseni kıyasa katılmadı (sayfa içi makas > 1 mertebe, ${dusukGuven.length} nokta):**`);
  for (const v of dusukGuven) {
    const et = (/dusuk-guven=([^;]+)/.exec(v.notlar) || [])[1] || "?";
    console.log(`- ${v.cihaz} · ${v.ariza} — parça ${v.parca_tl} · ${host(v.kaynak_url)} · ${et}`);
  }
  console.log("_Bu noktalar silinmedi (kanıt), ama sayfa tek kalem değil kategori listesi okuduğu için ne medyanı ne host sayımını besler._");
}

const kapiGecen = satirlar.filter((s) => s.hostSayisi >= 2).length;
console.log(`\n**YK #35 kapısı:** kıyaslanabilir ${satirlar.length} kayıttan **${kapiGecen}**'i ≥2 bağımsız kaynakla besleniyor.`);
if (veriYok.length) console.log(`\n_Grubunda satır olup kıyas üretemeyen (fiyat alanı boş): ${veriYok.join(" · ")}_`);
console.log(`\nKural (YK #15): web YÜKSEK → yükseltmeyi değerlendir. Web DÜŞÜK → **tabanın üstündeyse düşürme serbest**, tabanın altındaysa floor korunur. Her iki yönde de şart: ≥2 bağımsız kaynak + /tarife'de insan onayı.`);

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
import { medyan } from "../api/_tarife-hesap.js";

const GIDIS = 1500; // App.jsx SERVIS_GIDIS_BEDELI ile aynı; final fiyata sabit eklenir.

const { data: veriler, error: e1 } = await supabase
  .from("tarife_veri").select("cihaz, marka, ariza, parca_tl, iscilik_tl, toplam_tl, kaynak_url");
if (e1) { console.error("Supabase hatası (tarife_veri):", e1.message); process.exit(1); }

const { data: onaylar, error: e2 } = await supabase
  .from("tarife").select("cihaz, marka, ariza, onayli_parca_min, onayli_parca_max, onayli_iscilik").eq("durum", "onayli");
if (e2) { console.error("Supabase hatası (tarife):", e2.message); process.exit(1); }

const grupMap = new Map();
for (const v of veriler || []) {
  const k = `${v.cihaz}|${v.marka}|${v.ariza}`;
  if (!grupMap.has(k)) grupMap.set(k, []);
  grupMap.get(k).push(v);
}
const onayMap = new Map((onaylar || []).map((o) => [`${o.cihaz}|${o.marka}|${o.ariza}`, o]));
const orta = (a, b) => (a != null && b != null ? (Number(a) + Number(b)) / 2 : null);

// Bir URL'in alan adı (www. atılır). Bağımsızlık ölçütü = farklı host.
const host = (u) => { try { return new URL(u).hostname.replace(/^www\./, ""); } catch { return u || "?"; } };
// Medyanın 0,4×–2,5× bandı dışındaki uçları at (api/_tarife-hesap.js ile aynı politika).
const aykiriEle = (arr) => { const m = medyan(arr); return m == null ? arr : arr.filter((x) => x >= m * 0.4 && x <= m * 2.5); };

const satirlar = [];
const veriYok = [];
for (const [k, pts] of grupMap) {
  const mev = onayMap.get(k);
  if (!mev) continue;
  const seedParca = orta(mev.onayli_parca_min, mev.onayli_parca_max);
  if (seedParca == null) continue;
  const seedIscilik = Number(mev.onayli_iscilik) || 0;

  // ② ELMA-ELMA: all-in yalnız GERÇEK toplam_tl'den gelir; parça+işçilik toplam sayılmaz.
  const allinPts = pts.filter((p) => p.toplam_tl != null && Number(p.toplam_tl) > 0);
  const parcaPts = pts.filter((p) => p.parca_tl != null && Number(p.parca_tl) > 0);

  let eksen, biz, web, kullanilan;
  if (allinPts.length) {
    eksen = "all-in";
    kullanilan = allinPts;
    biz = Math.round(seedParca + seedIscilik + GIDIS);
    web = Math.round(medyan(aykiriEle(allinPts.map((p) => Number(p.toplam_tl)))));
  } else if (parcaPts.length) {
    eksen = "parça";
    kullanilan = parcaPts;
    biz = Math.round(seedParca);
    web = Math.round(medyan(aykiriEle(parcaPts.map((p) => Number(p.parca_tl)))));
  } else {
    veriYok.push(k.replace(/\|/g, " · "));
    continue;
  }
  if (!biz || web == null) { veriYok.push(k.replace(/\|/g, " · ")); continue; }

  // YK #35 kapısı: kıyası BESLEYEN noktaların bağımsız host sayısı (tüm grubunki değil).
  const hostlar = new Set(kullanilan.map((p) => host(p.kaynak_url)));
  satirlar.push({
    ad: k.replace(/\|/g, " · "),
    eksen, biz, web,
    sapma: Math.round(((web - biz) / biz) * 100),
    hostSayisi: hostlar.size,
    nokta: kullanilan.length,
    // ① Taban kayıt bazlı: gidiş + o işin kendi işçiliği. Bunun altına inilmez (YK #15).
    taban: GIDIS + seedIscilik,
  });
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
  let aksiyon;
  if (s.hostSayisi < 2) {
    // YK #15: "tek kaynakla asla". Sapma ne olursa olsun aksiyon önerilmez.
    aksiyon = "🔒 TEK KAYNAK — aksiyon yok, veri topla";
  } else if (s.sapma > 20) {
    aksiyon = "⚠️ DÜŞÜK KALMIŞIZ → yükselt";
  } else if (s.sapma < -20) {
    // ① ÇİFT YÖNLÜ (YK #15): floor yalnız TABAN işleri korur.
    aksiyon = (s.eksen === "all-in" && s.web < s.taban)
      ? `floor korunur (taban ${s.taban})`
      : "🔻 PAHALI KALMIŞIZ → düşürme serbest";
  } else {
    aksiyon = "✓ ±%20";
  }
  console.log(`| ${s.ad} | ${s.eksen} | ${s.biz} | ${s.web} | %${s.sapma > 0 ? "+" : ""}${s.sapma} | ${s.hostSayisi} | ${s.nokta} | ${aksiyon} |`);
}

// Veri kalitesi: mantıken imkânsız nokta (parça > her-şey-dahil toplam) → çıkarım hatası.
const celiskili = (veriler || []).filter(
  (v) => v.parca_tl != null && v.toplam_tl != null && Number(v.parca_tl) > Number(v.toplam_tl)
);
if (celiskili.length) {
  console.log(`\n**⚠️ Çelişkili nokta (parça > toplam — LLM çıkarımı yanlış slotlamış, ${celiskili.length} adet):**`);
  for (const v of celiskili) console.log(`- ${v.cihaz} · ${v.ariza} — parça ${v.parca_tl} > toplam ${v.toplam_tl} · ${host(v.kaynak_url)}`);
}

const kapiGecen = satirlar.filter((s) => s.hostSayisi >= 2).length;
console.log(`\n**YK #35 kapısı:** kıyaslanabilir ${satirlar.length} kayıttan **${kapiGecen}**'i ≥2 bağımsız kaynakla besleniyor.`);
if (veriYok.length) console.log(`\n_Grubunda satır olup kıyas üretemeyen (fiyat alanı boş): ${veriYok.join(" · ")}_`);
console.log(`\nKural (YK #15): web YÜKSEK → yükseltmeyi değerlendir. Web DÜŞÜK → **tabanın üstündeyse düşürme serbest**, tabanın altındaysa floor korunur. Her iki yönde de şart: ≥2 bağımsız kaynak + /tarife'de insan onayı.`);

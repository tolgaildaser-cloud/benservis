// scripts/tarife-rapor.mjs — bizim TAM tahmin vs web ALL-IN → % sapma raporu (read-only).
// Çalıştır: `set -a; source .env.local; set +a; node scripts/tarife-rapor.mjs`
// "Gerçek hayata uygun muyuz" ölçümü: kullanıcının gördüğü FİNAL fiyat (parça+işçilik+gidiş)
// ile web'deki all-in servis/değişim fiyatını karşılaştırır (elma-elma). Hedef: |sapma| ≤ %20.
import supabase from "../api/_supabase.js";
import { onerTarife } from "../api/_tarife-hesap.js";

const GIDIS = 1500; // App.jsx SERVIS_GIDIS_BEDELI ile aynı; final fiyata sabit eklenir.

const { data: veriler, error: e1 } = await supabase
  .from("tarife_veri").select("cihaz, marka, ariza, parca_tl, iscilik_tl, toplam_tl");
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

const satirlar = [];
for (const [k, pts] of grupMap) {
  const o = onerTarife(pts);
  const mev = onayMap.get(k);
  if (!mev) continue;
  // Bizim TAM tahmin: SEED parça-ortası (orta kademe) + işçilik + gidiş
  const seedParca = orta(mev.onayli_parca_min, mev.onayli_parca_max);
  const bizFull = seedParca != null ? Math.round(seedParca + (Number(mev.onayli_iscilik) || 0) + GIDIS) : null;
  // Web all-in: toplam medyanı (varsa); yoksa web parça-ortası + web işçilik (gidiş dahil değil → yaklaşık)
  const webAllin = o.onayli_beklenen != null
    ? o.onayli_beklenen
    : (o.onayli_parca_max != null ? Math.round(orta(o.onayli_parca_min, o.onayli_parca_max) + (o.onayli_iscilik || 0)) : null);
  if (bizFull == null || webAllin == null || !bizFull) continue;
  satirlar.push({
    ad: k.replace(/\|/g, " · "),
    biz: bizFull, web: webAllin,
    sapma: Math.round(((webAllin - bizFull) / bizFull) * 100),
    guven: o.guven, nokta: pts.length,
  });
}
satirlar.sort((a, b) => Math.abs(b.sapma) - Math.abs(a.sapma));

console.log("# Tarife Sapma Raporu — bizim TAM tahmin (parça+işçilik+gidiş) vs web ALL-IN\n");
if (!satirlar.length) {
  console.log("_(Henüz karşılaştırılabilir web verisi yok. Önce `node scripts/tarife-topla.mjs <Cihaz>` çalıştır.)_");
  process.exit(0);
}
console.log("| Cihaz · Arıza | Bizim (tam) | Web (all-in) | Sapma | Güven | Nokta | Durum |");
console.log("|---|--:|--:|--:|:--:|--:|:--|");
for (const s of satirlar) {
  const bayrak = Math.abs(s.sapma) > 20 ? "⚠️ KALİBRASYON" : "✓ ±%20";
  console.log(`| ${s.ad} | ${s.biz} | ${s.web} | %${s.sapma > 0 ? "+" : ""}${s.sapma} | ${s.guven} | ${s.nokta} | ${bayrak} |`);
}
console.log(`\nHedef: |sapma| ≤ %20 (final fiyat). ⚠️ satırlar için kaynakları/Onaylı değeri gözden geçir. Not: web all-in gidiş dahildir.`);

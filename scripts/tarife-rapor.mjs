// scripts/tarife-rapor.mjs — WEB önerisi vs mevcut ONAYLI tarife → % sapma raporu (read-only).
// Çalıştır: `set -a; source .env.local; set +a; node scripts/tarife-rapor.mjs`
//   veya: `node --env-file=.env.local scripts/tarife-rapor.mjs`
// "Gerçek hayata uygun muyuz" ölçümü: web mutabakatı ile mevcut tarifeyi karşılaştırır.
// Hedef: |sapma| ≤ %20. Dışındakiler ⚠️ KALİBRASYON işaretlenir.
import supabase from "../api/_supabase.js";
import { onerTarife } from "../api/_tarife-hesap.js";

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
  const web = orta(o.onayli_parca_min, o.onayli_parca_max);
  const mv = mev ? orta(mev.onayli_parca_min, mev.onayli_parca_max) : null;
  if (web == null || mv == null || !mv) continue;
  satirlar.push({
    ad: k.replace(/\|/g, " · "),
    mevcut: Math.round(mv), web: Math.round(web),
    sapma: Math.round(((web - mv) / mv) * 100),
    guven: o.guven, nokta: pts.length,
  });
}
satirlar.sort((a, b) => Math.abs(b.sapma) - Math.abs(a.sapma));

console.log("# Tarife Sapma Raporu — web parça-ortası vs mevcut Onaylı\n");
if (!satirlar.length) {
  console.log("_(Henüz web verisi yok. Önce `node scripts/tarife-topla.mjs <Cihaz>` çalıştır.)_");
  process.exit(0);
}
console.log("| Cihaz · Arıza | Mevcut | Web | Sapma | Güven | Nokta | Durum |");
console.log("|---|--:|--:|--:|:--:|--:|:--|");
for (const s of satirlar) {
  const bayrak = Math.abs(s.sapma) > 20 ? "⚠️ KALİBRASYON" : "✓ ±%20";
  console.log(`| ${s.ad} | ${s.mevcut} | ${s.web} | %${s.sapma > 0 ? "+" : ""}${s.sapma} | ${s.guven} | ${s.nokta} | ${bayrak} |`);
}
console.log(`\nHedef: |sapma| ≤ %20. ⚠️ satırlar için kaynakları/Onaylı değeri gözden geçir.`);

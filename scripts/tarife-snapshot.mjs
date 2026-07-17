// scripts/tarife-snapshot.mjs — Supabase ONAYLI tarife → src/tarife-seed.js (App.jsx'in okuduğu modül).
// Çalıştır: (env yükleyerek) `set -a; source .env.local; set +a; node scripts/tarife-snapshot.mjs`
//   veya Node 20.6+: `node --env-file=.env.local scripts/tarife-snapshot.mjs`
// ONAYLI (marka=Genel) satırları SEED şekline çevirir. Round-trip: baseline değerleri == çıktı.
// Kullanım döngüsü: topla → /tarife Onayla → snapshot → src/tarife-seed.js diff'ini gözden geçir → commit.
import fs from "node:fs";
import supabase from "../api/_supabase.js";

const { data, error } = await supabase
  .from("tarife")
  .select("cihaz, ariza, onayli_parca_min, onayli_parca_max, onayli_iscilik")
  .eq("durum", "onayli")
  .eq("marka", "Genel")
  .order("id", { ascending: true });

if (error) { console.error("Supabase hatası:", error.message); process.exit(1); }
if (!data?.length) { console.error("Onaylı tarife bulunamadı — migration çalıştı mı?"); process.exit(1); }

const seed = {};
let atlanan = 0;
for (const r of data) {
  if (r.onayli_parca_min == null || r.onayli_parca_max == null || r.onayli_iscilik == null) { atlanan++; continue; }
  (seed[r.cihaz] ||= []).push([r.ariza, Number(r.onayli_parca_min), Number(r.onayli_parca_max), Number(r.onayli_iscilik)]);
}

const govde = Object.entries(seed).map(([cihaz, satirlar]) =>
  `  ${JSON.stringify(cihaz)}: [${satirlar.map((s) => JSON.stringify(s)).join(",")}],`
).join("\n");

const cikti = `// src/tarife-seed.js — ÜRETİLDİ (scripts/tarife-snapshot.mjs, Supabase Onaylı tarife).
// Elle düzenleme yerine /tarife'de onayla + snapshot'ı yeniden çalıştır.
// Şekil: cihaz → [[arıza, parça_min, parça_max, işçilik], …].
export const SEED = {
${govde}
};
`;

fs.writeFileSync(new URL("../src/tarife-seed.js", import.meta.url), cikti);
console.log(`✓ src/tarife-seed.js üretildi (${Object.keys(seed).length} cihaz, ${data.length - atlanan} satır${atlanan ? `, ${atlanan} eksik satır atlandı` : ""}).`);

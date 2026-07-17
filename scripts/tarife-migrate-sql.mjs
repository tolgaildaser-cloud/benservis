// scripts/tarife-migrate-sql.mjs — src/tarife-seed.js → supabase/tarife-seed.sql (Onaylı baseline).
// Çalıştır: node scripts/tarife-migrate-sql.mjs > supabase/tarife-seed.sql
import { SEED } from "../src/tarife-seed.js";

const esc = (s) => String(s).replace(/'/g, "''");
const satirlar = [];
for (const [cihaz, arizalar] of Object.entries(SEED)) {
  for (const [ariza, pmin, pmax, isc] of arizalar) {
    satirlar.push(
      `  ('${esc(cihaz)}','Genel','${esc(ariza)}',${pmin},${pmax},${isc},'onayli','yuksek','seed',0)`
    );
  }
}
console.log(`-- supabase/tarife-seed.sql — ÜRETİLDİ (scripts/tarife-migrate-sql.mjs). Elle düzenleme.
-- Gömülü SEED'i ilk ONAYLI tarife olarak içe al (baseline). marka='Genel'. Idempotent.
insert into tarife (cihaz, marka, ariza, onayli_parca_min, onayli_parca_max, onayli_iscilik, durum, guven, onaylayan, veri_noktasi_sayisi)
values
${satirlar.join(",\n")}
on conflict (cihaz, marka, ariza) do nothing;`);

// scripts/rota-denetimi.mjs — ROTA DENETİMİ (build guard, 3 Ağu 2026)
//
// NEDEN: `src/main.jsx` bir rotayı mount ediyor olsa bile, `vercel.json`'da o adres için
// SPA rewrite yoksa Vercel isteği `index.html`'e HİÇ ulaştırmaz → canlıda 404. Panel kodda
// vardır, çalışır sanılır, aylarca kimse fark etmez. `/tarife` tam olarak böyle kaçtı
// (17 Tem'de mount edildi, 3 Ağu'da 404 verdiği görüldü).
//
// KURAL: `main.jsx`'te path'e göre mount edilen HER rota, `vercel.json`'da `/index.html`'e
// giden bir rewrite ile karşılanmalıdır. Eksik varsa build DURUR — `fiyatDenetimi()`
// (scripts/build-blog.mjs) ile aynı mantık: gözle kontrol yok, build denetler.
//
// Kırılgan olmasın diye kasten basit: sadece `path === "..."` ve `path.startsWith("...")`
// literal'leri okunur. main.jsx'te rota tespiti başka bir kalıba geçerse (ör. bir router
// kütüphanesi), denetim 0 rota bulur ve bunu da hata sayar — sessizce "geçti" demez.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const MAIN = path.join(ROOT, "src", "main.jsx");
const VERCEL = path.join(ROOT, "vercel.json");

// ── 1) main.jsx'teki rotalar ───────────────────────────────────────────────────
const kaynak = fs.readFileSync(MAIN, "utf8");
const rotalar = [];
for (const m of kaynak.matchAll(/path\s*(?:===\s*|\.startsWith\s*\(\s*)["']([^"']+)["']/g)) {
  if (m[1].startsWith("/") && !rotalar.includes(m[1])) rotalar.push(m[1]);
}
if (rotalar.length === 0) {
  console.error(
    "[rota-denetimi] ⛔ src/main.jsx'te `path === \"/…\"` / `path.startsWith(\"/…\")` kalıbı bulunamadı.\n" +
      "  Rota tespiti değiştiyse bu denetimi de güncelle — sessizce devre dışı kalmasın."
  );
  process.exit(1);
}

// ── 2) vercel.json'daki SPA rewrite'ları ───────────────────────────────────────
const { rewrites = [] } = JSON.parse(fs.readFileSync(VERCEL, "utf8"));
// `/dpp/:seri_no` → literal önek `/dpp/` · `/panel/(.*)` → `/panel/`
const onek = (s) => s.split(/[:(]/)[0];
const spa = rewrites.filter((r) => r.destination === "/index.html");

// Bir rota karşılanır: ya birebir aynı source vardır (`/tarife`), ya da parametreli bir
// source'un literal öneki rotaya eşittir (`/urun/` ← `/urun/:id`).
const kapali = (rota) => spa.some((r) => r.source === rota || onek(r.source) === rota);

const eksik = rotalar.filter((r) => !kapali(r));
if (eksik.length) {
  console.error(
    `[rota-denetimi] ⛔ main.jsx'te mount edilen ama vercel.json'da SPA rewrite'ı OLMAYAN rota(lar):\n  ` +
      eksik.join("\n  ") +
      `\n  → vercel.json "rewrites" listesine { "source": "${eksik[0]}", "destination": "/index.html" } ekle.` +
      `\n  (Eklenmezse canlıda 404 döner — kod doğru olsa bile.)`
  );
  process.exit(1);
}

console.log(`[rota-denetimi] ✓ ${rotalar.length} rota (${rotalar.join(", ")}) vercel.json'da karşılanıyor.`);

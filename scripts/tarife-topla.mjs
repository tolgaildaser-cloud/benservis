// scripts/tarife-topla.mjs — web'den tarife noktası toplar (kaynak='web'), doğrudan Supabase'e yazar.
// Çalıştır: set -a; source .env.local; set +a; node scripts/tarife-topla.mjs Buzdolabı
//   (arg yoksa kaynaklar.json'daki tüm cihazlar) · --dry = yazma, sadece göster.
// Env: SUPABASE_URL + SUPABASE_SERVICE_KEY (yazma), OPENAI_API_KEY (extraction).
// Kaynak seçimi + extraction AMPİRİKTİR: önce 1 cihazda çalıştır, tarife-rapor.mjs ile bak, kaynakları genişlet.
// Cron DEĞİL — web verisi Taslak girer, /tarife'de İNSAN onaylar (karar #7).
import fs from "node:fs";
import supabase from "../api/_supabase.js";
import { onerTarife } from "../api/_tarife-hesap.js";

const KAYNAKLAR = JSON.parse(fs.readFileSync(new URL("./kaynaklar.json", import.meta.url)));
const OPENAI = process.env.OPENAI_API_KEY;
const MODEL = process.env.TARIFE_EXTRACT_MODEL || "gpt-4o-mini";
const DRY = process.argv.includes("--dry");
if (!OPENAI) { console.error("OPENAI_API_KEY gerekli (.env.local)"); process.exit(1); }

// Bir sayfayı çek + LLM ile (cihaz, arıza) fiyatını çıkar (kırılgan selektör YOK).
async function sayfadanCek(url, cihaz, ariza) {
  let metin = "";
  try {
    const r = await fetch(url, {
      headers: { "user-agent": "Mozilla/5.0 (compatible; benservis-tarife/1.0)" },
      signal: AbortSignal.timeout(20000),
    });
    if (!r.ok) { console.warn(`  ✗ fetch ${r.status} ${url}`); return null; }
    metin = (await r.text())
      .replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim().slice(0, 12000);
  } catch (e) { console.warn(`  ✗ fetch ${url}: ${e.message}`); return null; }
  if (metin.length < 200) { console.warn(`  ✗ boş/kısa içerik ${url}`); return null; }

  const prompt = `Aşağıdaki Türkçe sayfa metninden "${cihaz} — ${ariza}" için 2026 TL fiyatları çıkar. SADECE bu arıza/parça.
Şu üç şeyi AYIR (karıştırma):
- parca_min/parca_max: SADECE yedek parçanın fiyatı (işçilik, servis, gidiş, montaj HARİÇ). Marka aralığı varsa min=en ucuz marka, max=en pahalı. Sayfa sadece "değişim/servis dahil" fiyat veriyorsa parça'yı null bırak.
- iscilik: sadece işçilik/montaj ücreti (varsa).
- toplam: HER ŞEY DAHİL servis/değişim fiyatı (parça+işçilik+gidiş). Fiyat-listesi siteleri genelde BUNU verir.
Bu arıza sayfada yoksa/emin değilsen ilgili alanı null yaz, UYDURMA.
Yalnız şu JSON: {"parca_min":sayı|null,"parca_max":sayı|null,"iscilik":sayı|null,"toplam":sayı|null}
METİN: ${metin}`;
  try {
    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "content-type": "application/json", authorization: `Bearer ${OPENAI}` },
      body: JSON.stringify({ model: MODEL, temperature: 0, response_format: { type: "json_object" }, messages: [{ role: "user", content: prompt }] }),
    });
    const d = await r.json();
    if (!r.ok) { console.warn(`  ✗ openai ${url}: ${d?.error?.message || r.status}`); return null; }
    const j = JSON.parse(d.choices[0].message.content);
    return { parca_min: j.parca_min, parca_max: j.parca_max, iscilik: j.iscilik, toplam: j.toplam, url };
  } catch (e) { console.warn(`  ✗ extract ${url}: ${e.message}`); return null; }
}

const hedef = process.argv.find((a, i) => i >= 2 && !a.startsWith("--"));
const cihazlar = hedef ? [hedef] : Object.keys(KAYNAKLAR);
let toplam = 0;
for (const cihaz of cihazlar) {
  for (const [ariza, urller] of Object.entries(KAYNAKLAR[cihaz] || {})) {
    console.log(`\n${cihaz} — ${ariza}`);
    const ornekler = (await Promise.all(urller.map((u) => sayfadanCek(u, cihaz, ariza)))).filter(Boolean);
    const satirlar = ornekler.map((o) => {
      const parca = o.parca_max != null ? (o.parca_min != null ? Math.round((o.parca_min + o.parca_max) / 2) : o.parca_max) : null;
      return { cihaz, marka: "Genel", ariza, kaynak: "web", kaynak_url: o.url, parca_tl: parca, iscilik_tl: o.iscilik, toplam_tl: o.toplam, notlar: `web-topla; min=${o.parca_min} max=${o.parca_max}` };
    }).filter((s) => s.parca_tl != null || s.iscilik_tl != null || s.toplam_tl != null);
    if (!satirlar.length) { console.log("  (fiyat çıkmadı)"); continue; }
    const o = onerTarife(satirlar);
    console.log(`  → ${satirlar.length} nokta, güven=${o.guven}, parça ${o.onayli_parca_min}-${o.onayli_parca_max}, işçilik ${o.onayli_iscilik}${DRY ? " [DRY]" : ""}`);
    if (DRY) continue;
    const { error } = await supabase.from("tarife_veri").insert(satirlar);
    if (error) { console.warn(`  ✗ insert: ${error.message}`); continue; }
    toplam += satirlar.length;
  }
}
console.log(`\nBitti. ${DRY ? "(DRY — yazılmadı)" : toplam + " veri noktası yazıldı."} → node scripts/tarife-rapor.mjs · onay: /tarife`);

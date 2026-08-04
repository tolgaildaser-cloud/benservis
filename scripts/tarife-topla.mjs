// scripts/tarife-topla.mjs — web'den tarife noktası toplar (kaynak='web'), doğrudan Supabase'e yazar.
// Çalıştır: set -a; source .env.local; set +a; node scripts/tarife-topla.mjs Buzdolabı
//   (arg yoksa kaynaklar.json'daki tüm cihazlar) · --dry = yazma, sadece göster.
// Env: SUPABASE_URL + SUPABASE_SERVICE_KEY (yazma), OPENAI_API_KEY (extraction).
// Kaynak seçimi + extraction AMPİRİKTİR: önce 1 cihazda çalıştır, tarife-rapor.mjs ile bak, kaynakları genişlet.
// Cron DEĞİL — web verisi Taslak girer, /tarife'de İNSAN onaylar (karar #7).
import fs from "node:fs";
import supabase from "../api/_supabase.js";
import { onerTarife, mertebeDisi, MERTEBE } from "../api/_tarife-hesap.js";

// Kaynak listesi. Varsayılan: kaynaklar.json (kanonik kayıt defteri — TÜM bilinen URL'ler).
// TARIFE_KAYNAK_DOSYA ile kısmi liste verilebilir: `tarife_veri`'de zaten olan host'ları
// tekrar çekmeden yalnız YENİ kaynakları toplamak için (mükerrer nokta `veri_noktasi_sayisi`yi
// şişirip `guven` seviyesini olduğundan iyi gösterir — 3 Ağu 2026, IT).
const KAYNAK_DOSYA = process.env.TARIFE_KAYNAK_DOSYA
  ? new URL(process.env.TARIFE_KAYNAK_DOSYA, `file://${process.cwd()}/`)
  : new URL("./kaynaklar.json", import.meta.url);
const KAYNAKLAR = JSON.parse(fs.readFileSync(KAYNAK_DOSYA));
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

// ─── AYKIRI DEĞER / ÇÖP KAYIT ELEMESİ (4 Ağu 2026, IT — YK Kararı #38 yan bulgusu) ───
// Tetikleyen vaka: armut.com/fiyatlari/davlumbaz-tamiri_58647 sayfasında 111.111 TL'lik bir
// talep kaydı var (kullanıcı hatası/şaka). Eleme yoksa tek kayıt kalemin medyanını zehirler.
// Üç kapı, hepsi TEK eşiğe (MERTEBE = 10×) dayanır — kalem başına elle ayar YOK:
//   K1 kara liste  → kaynaklar.json `_kurallar.kara_liste_HOST` hostundan gelen nokta YAZILMAZ.
//   K2 akıl çiti   → nokta, o kaydın ONAYLI referansının 10 katından büyük / 1/10'undan
//                    küçükse o ALAN null'lanır (parça kendi ekseninde, toplam all-in ekseninde).
//   K3 makas çiti  → sayfanın verdiği parça bandı bir mertebeyi aşıyorsa (max/min > 10×) sayfa
//                    tek kalem değil KATEGORİ listesidir → nokta yazılır ama `dusuk-guven=`
//                    etiketiyle işaretlenir; rapor onu medyana ve host sayımına KATMAZ.
const apex = (u) => { try { return new URL(u).hostname.replace(/^www\./, ""); } catch { return u || "?"; } };
const KARA_LISTE = Object.keys(KAYNAKLAR?._kurallar?.kara_liste_HOST || {});
const GIDIS = 1500; // App.jsx SERVIS_GIDIS_BEDELI ile aynı

const { data: onaylar } = await supabase
  .from("tarife").select("cihaz, marka, ariza, onayli_parca_min, onayli_parca_max, onayli_iscilik")
  .eq("durum", "onayli");
const refMap = new Map();
for (const o of onaylar || []) {
  if (o.onayli_parca_min == null || o.onayli_parca_max == null) continue;
  const parca = (Number(o.onayli_parca_min) + Number(o.onayli_parca_max)) / 2;
  refMap.set(`${o.cihaz}|${o.marka}|${o.ariza}`, { parca, allin: parca + (Number(o.onayli_iscilik) || 0) + GIDIS });
}
const elenen = [];

const hedef = process.argv.find((a, i) => i >= 2 && !a.startsWith("--"));
// "_" ile başlayan anahtarlar CİHAZ DEĞİL, meta/dokümantasyon bloğudur (ör. _kurallar:
// kara liste, UA reddi olan siteler, tek-host kümeleri). Toplamada atlanır.
const cihazlar = (hedef ? [hedef] : Object.keys(KAYNAKLAR)).filter((c) => !c.startsWith("_"));
let toplam = 0;
for (const cihaz of cihazlar) {
  for (const [ariza, urller] of Object.entries(KAYNAKLAR[cihaz] || {})) {
    console.log(`\n${cihaz} — ${ariza}`);
    // K1: kara listedeki host hiç ÇEKİLMEZ (boşuna OpenAI çağrısı da yapılmaz).
    const izinli = urller.filter((u) => {
      if (!KARA_LISTE.includes(apex(u))) return true;
      elenen.push(`K1 kara-liste · ${cihaz} · ${ariza} · ${apex(u)}`);
      return false;
    });
    const ornekler = (await Promise.all(izinli.map((u) => sayfadanCek(u, cihaz, ariza)))).filter(Boolean);
    const ref = refMap.get(`${cihaz}|Genel|${ariza}`);
    const satirlar = ornekler.map((o) => {
      let parca = o.parca_max != null ? (o.parca_min != null ? Math.round((o.parca_min + o.parca_max) / 2) : o.parca_max) : null;
      let toplam = o.toplam;
      let notlar = `web-topla; min=${o.parca_min} max=${o.parca_max}`;
      // K2 akıl çiti — alan bazında, kendi ekseninde.
      if (ref && mertebeDisi(parca, ref.parca)) { elenen.push(`K2 parça ${parca} (ref ${Math.round(ref.parca)}) · ${cihaz} · ${ariza} · ${apex(o.url)}`); parca = null; }
      if (ref && mertebeDisi(toplam, ref.allin)) { elenen.push(`K2 all-in ${toplam} (ref ${Math.round(ref.allin)}) · ${cihaz} · ${ariza} · ${apex(o.url)}`); toplam = null; }
      // K3 makas çiti — sayfa tek kalem mi, kategori listesi mi?
      if (o.parca_min > 0 && o.parca_max > 0 && o.parca_max / o.parca_min > MERTEBE) {
        notlar += `; dusuk-guven=sayfa-ici-makas-${(o.parca_max / o.parca_min).toFixed(1)}x`;
      }
      return { cihaz, marka: "Genel", ariza, kaynak: "web", kaynak_url: o.url, parca_tl: parca, iscilik_tl: o.iscilik, toplam_tl: toplam, notlar };
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
if (elenen.length) {
  console.log(`\n⚠️ Aykırı/çöp eleme — ${elenen.length} kayıt (eşik: bir mertebe = ${MERTEBE}×):`);
  for (const e of elenen) console.log(`  - ${e}`);
}
console.log(`\nBitti. ${DRY ? "(DRY — yazılmadı)" : toplam + " veri noktası yazıldı."} → node scripts/tarife-rapor.mjs · onay: /tarife`);

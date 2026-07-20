import React, { useState, useEffect, useRef } from "react";
import ServisEkrani from "./ServisEkrani.jsx";
import DPPEkrani from "./DPPEkrani.jsx";
import { CIHAZLAR, MARKALAR, markalarForCihaz } from "./constants.js";
import CihazIkon from "./cihaz-ikonlari.jsx";
import BenservisLogo from "./BenservisLogo.jsx";
import { track } from "@vercel/analytics";
import { SEED } from "./tarife-seed.js";

const FONT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,500&family=Hanken+Grotesk:wght@400;500;600;700&display=swap');`;

// Cihaza özel hızlı belirti butonları (sürtünmeyi azaltır)
const BELIRTILER = {
  "Buzdolabı": ["Soğutmuyor", "Çok ses yapıyor", "Su akıtıyor", "Buzluk çalışmıyor"],
  "Çamaşır Makinesi": ["Su almıyor", "Sıkmıyor / dönmüyor", "Su boşaltmıyor", "Aşırı titreşim/ses"],
  "Bulaşık Makinesi": ["Su tahliye etmiyor", "Temiz yıkamıyor", "Su almıyor", "Hata kodu veriyor"],
  "Fırın / Ocak / Aspiratör": ["Isınmıyor", "Ocak gözü yanmıyor", "Aspiratör çekmiyor / koku", "Fan çalışmıyor", "Kapı/cam sorunu"],
  "Klima": ["Soğutmuyor", "Su damlatıyor", "Koku yapıyor", "Hiç çalışmıyor"],
  "Kombi / Termosifon": ["Sıcak su gelmiyor", "Petekler ısınmıyor", "Su ısıtmıyor", "Basınç düşüyor", "Su akıtıyor", "Arıza kodu veriyor"],
  "Televizyon / Monitör": ["Açılmıyor", "Görüntü yok", "Ekranda çizgiler", "Bağlantı sorunu"],
  "Mikrodalga / Air Fryer": ["Isıtmıyor / pişirmiyor", "Çalışmıyor", "Fan sesi/koku", "Düğme/ekran sorunu"],
  "Süpürge": ["Çekiş zayıf", "Çalışmıyor", "Şarj tutmuyor", "Ses/koku var"],
  "Su Sebili / Arıtma": ["Su gelmiyor", "Su akıtıyor", "Soğutmuyor/ısıtmıyor", "Tat/koku sorunu"],
  "Bilgisayar / Yazıcı": ["Açılmıyor", "Yazdırmıyor", "Donma / yavaşlama", "Kağıt sıkışması", "Aşırı ısınma / ses", "Bağlantı sorunu"],
};

function refMetni(cihaz) {
  const arr = SEED[cihaz] || [];
  if (!arr.length) return "Bu cihaz için referans tarife yok; Türkiye 2026 piyasasına göre makul tahmin yürüt.";
  return arr.map(([ad, pmin, pmax, isc]) => `- ${ad}: parça ${pmin}-${pmax} TL, işçilik ~${isc} TL`).join("\n");
}

// Marka kademesi SİSTEM tarafından belirlenir (AI'a bırakılmaz → fiyat tutarlı). Premium→parça
// üst band, ekonomik→alt band; gerisi (Arçelik/Beko/Samsung/LG… ve "Diğer"/bilinmeyen)→orta.
const KADEME_PREMIUM = ["bosch", "siemens", "miele", "liebherr", "aeg", "bauknecht", "electrolux", "gaggenau", "neff", "smeg", "vestfrost"];
const KADEME_EKONOMIK = ["regal", "hisense", "midea", "daewoo", "candy", "indesit", "sunny", "onvo", "axen", "hometech", "exper", "dijitsu", "altus", "seg", "telefunken", "finlux"];
function markaKademe(marka) {
  const m = (marka || "").toLocaleLowerCase("tr").trim();
  if (KADEME_PREMIUM.includes(m)) return "premium";
  if (KADEME_EKONOMIK.includes(m)) return "ekonomik";
  return "orta";
}

// EN OLASI arızanın SEED satırından beklenen tutarı DETERMİNİSTİK hesaplar: parça bandı kademeye
// göre (premium=üst, ekonomik=alt, orta=orta) + işçilik. seedRef SEED'de yoksa null → çağıran
// AI'ın (fallback) beklenen'ini kullanır. Böylece aynı cihaz+arıza+marka HER ZAMAN aynı fiyat.
function seedBeklenen(cihaz, seedRef, kademe) {
  const arr = SEED[cihaz] || [];
  if (!seedRef) return null;
  const norm = (s) => String(s).toLocaleLowerCase("tr").replace(/[^\p{L}\p{N}]+/gu, " ").trim();
  const hedef = norm(String(seedRef).split(":")[0]); // AI ": parça…" eklerse kes, ad kalsın
  if (!hedef) return null;
  let row = arr.find((r) => norm(r[0]) === hedef);
  if (!row) row = arr.find((r) => { const n = norm(r[0]); return n.includes(hedef) || hedef.includes(n.split(" ")[0]); });
  if (!row) return null;
  const [, pmin, pmax, isc] = row;
  const parca = kademe === "premium" ? pmax : kademe === "ekonomik" ? pmin : Math.round((pmin + pmax) / 2);
  return parca + isc;
}

function extractJSON(text) {
  let t = text.replace(/```json/gi, "").replace(/```/g, "").trim();
  const a = t.indexOf("{"), b = t.lastIndexOf("}");
  if (a !== -1 && b !== -1) t = t.slice(a, b + 1);
  return JSON.parse(t);
}

// Türkiye'de servisin eve gidiş/keşif MİNİMUM bedeli — tüm maliyet tahminlerine
// sabit eklenir (sonuç ne olursa olsun). Kullanıcı onayıyla 1500 TL'ye çıkarıldı
// (5 Tem 2026). Değiştirmeden ÖNCE yine kullanıcıya sor (otomatik geçiş YOK).
const SERVIS_GIDIS_BEDELI = 1500;

// Maliyet aralığını beklenen nokta tahminin ±%10'una sabitler (kullanıcı kuralı),
// servis gidiş bedelini (SERVIS_GIDIS_BEDELI) SABİT ekler (bedel ±%10'a tabi değil),
// sonra gösterilen tutarı YUKARI doğru en yakın 100'e yuvarlar (kullanıcı kuralı:
// 1990 → 2000, 2210 → 2300). AI tek "beklenen" döndürür; eski min/max gelirse orta nokta.
// Örn (gidiş 1500): beklenen 1200 → 2600–2900 (ham 2580–2820, yukarı 100'e).
function normalizeMaliyet(sonuc) {
  const m = sonuc?.tahminiMaliyet;
  if (!m) return sonuc;
  let beklenen = m.beklenen;
  if (beklenen == null && m.min != null && m.max != null) beklenen = (Number(m.min) + Number(m.max)) / 2;
  beklenen = Number(beklenen);
  if (!beklenen || isNaN(beklenen)) return sonuc;
  const f = SERVIS_GIDIS_BEDELI; // sabit gidiş bedeli (±%10 dışı, düz eklenir)
  const yukari100 = (x) => Math.ceil(x / 100) * 100; // gösterilen tutarı yukarı 100'e yuvarla
  return {
    ...sonuc,
    tahminiMaliyet: {
      ...m,
      beklenen: yukari100(beklenen + f),
      min: yukari100(beklenen * 0.9 + f),
      max: yukari100(beklenen * 1.1 + f),
    },
  };
}

// BenservisLogo → src/BenservisLogo.jsx (ana sayfa + ServisEkrani header ortak kullanır)

export default function App() {
  const [adim, setAdim] = useState("form");
  const [cihaz, setCihaz] = useState("");
  const [marka, setMarka] = useState("");
  const [markaDiger, setMarkaDiger] = useState(""); // "Diğer" seçilince elle yazılan marka (veri toplama)
  const efektifMarka = (marka === "Diğer" && markaDiger.trim()) ? markaDiger.trim() : marka;
  const [yas, setYas] = useState("");
  const [belirti, setBelirti] = useState("");
  const BELIRTI_MAX = 300; // belirti karakter limiti (maxLength + sayaç + ses kırpma tek kaynak)
  const [sonuc, setSonuc] = useState(null);
  const [sssAcik, setSssAcik] = useState(null); // ana sayfa SSS akordeon açık indeksi
  const [hataMsg, setHataMsg] = useState("");
  const [kopyalandi, setKopyalandi] = useState(false);
  const [showServisler, setShowServisler] = useState(false);
  const [teshisLogId, setTeshisLogId] = useState(null); // anonim teşhis log id (konum iliştirmek için)
  const [showDPP, setShowDPP] = useState(false);
  const [dppInitialSeriNo, setDppInitialSeriNo] = useState("");

  // --- Sesli girdi (STT) — ses SAKLANMAZ: kaydet → /api/stt (Whisper) → belirtiye ekle ---
  const [sesDurumu, setSesDurumu] = useState("bosta"); // "bosta" | "kaydediyor" | "isliyor"
  const mediaRecRef = useRef(null);
  const sesChunksRef = useRef([]);
  const sesStreamRef = useRef(null);
  const sesTimerRef = useRef(null);

  const sesBaslat = async () => {
    if (sesDurumu !== "bosta") return;
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
      setHataMsg("Bu tarayıcı ses kaydını desteklemiyor — yazarak anlatabilirsin.");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      sesStreamRef.current = stream;
      const mime = MediaRecorder.isTypeSupported("audio/webm;codecs=opus") ? "audio/webm;codecs=opus"
        : MediaRecorder.isTypeSupported("audio/webm") ? "audio/webm"
        : MediaRecorder.isTypeSupported("audio/mp4") ? "audio/mp4" : "";
      const rec = new MediaRecorder(stream, mime ? { mimeType: mime } : undefined);
      sesChunksRef.current = [];
      rec.ondataavailable = (e) => { if (e.data && e.data.size) sesChunksRef.current.push(e.data); };
      rec.onstop = () => sesGonder(rec.mimeType);
      mediaRecRef.current = rec;
      rec.start();
      setSesDurumu("kaydediyor");
      setHataMsg("");
      sesTimerRef.current = setTimeout(() => sesDurdur(), 60000); // 60sn otomatik durdur
    } catch (e) {
      setHataMsg("Mikrofon izni gerekli — yazarak da anlatabilirsin.");
      setSesDurumu("bosta");
    }
  };

  const sesDurdur = () => {
    if (mediaRecRef.current && mediaRecRef.current.state === "recording") {
      clearTimeout(sesTimerRef.current);
      setSesDurumu("isliyor");
      try { mediaRecRef.current.stop(); } catch { setSesDurumu("bosta"); }
    }
  };

  const sesGonder = async (mime) => {
    if (sesStreamRef.current) sesStreamRef.current.getTracks().forEach((t) => t.stop()); // mikrofonu kapat
    const blob = new Blob(sesChunksRef.current, { type: mime || "audio/webm" });
    if (blob.size < 1000) { setSesDurumu("bosta"); return; }
    try {
      const res = await fetch("/api/stt", { method: "POST", headers: { "Content-Type": blob.type }, body: blob });
      const data = await res.json();
      if (!res.ok || !data.text) throw new Error(data.error || "bos");
      setBelirti((prev) => { const y = prev.trim() ? prev.trim() + ". " + data.text : data.text; return y.slice(0, BELIRTI_MAX); });
    } catch (e) {
      setHataMsg("Sesi anlayamadım — tekrar dene ya da yazarak anlat.");
    } finally {
      setSesDurumu("bosta");
    }
  };

  // Belirti textarea: elle (mouse) resize kapalı; yazdıkça veya chip ile içerik
  // değiştikçe otomatik uzar (min ~4 satır).
  const belirtiRef = useRef(null);
  useEffect(() => {
    const el = belirtiRef.current;
    if (!el) return;
    el.style.height = "auto";
    const kenarlik = el.offsetHeight - el.clientHeight; // border-box: kenarlık payı (içerik kırpılmasın)
    el.style.height = Math.max(el.scrollHeight + kenarlik, 116) + "px";
  }, [belirti]);

  // Teşhis sonucu / geçersiz ekranı geldiğinde sayfayı başa al — cihazdan bağımsız
  // tutarlı davranış. (detayEkle ile aşağıda kalınıp tekrar teşhis edilince masaüstünde
  // sonuç en alttan açılıyordu; mobilde fiyata düşüyordu.) Form/loading'e dokunmaz.
  useEffect(() => {
    if (adim === "sonuc" || adim === "gecersiz") window.scrollTo(0, 0);
  }, [adim]);

  // Belirti, ". " ile ayrılmış parçalardan oluşur; chip'ler bu parçaları
  // toggle eder. Seçili durum belirti metninden türetilir (tek kaynak).
  const belirtiAktif = (b) =>
    belirti.split(/\.\s*/).some((p) => p.trim().toLocaleLowerCase("tr") === b.toLocaleLowerCase("tr"));

  const belirtiToggle = (b) => {
    setBelirti((prev) => {
      const parts = prev.split(/\.\s*/).map((s) => s.trim()).filter(Boolean);
      const idx = parts.findIndex((p) => p.toLocaleLowerCase("tr") === b.toLocaleLowerCase("tr"));
      if (idx >= 0) parts.splice(idx, 1);
      else parts.push(b);
      return parts.join(". ");
    });
  };

  const tesisEt = async () => {
    if (!cihaz) { setHataMsg("Cihaz türünü seç."); return; }
    if (!marka) { setHataMsg("Marka seçimi zorunludur — teşhis ve fiyat için gerekli."); return; }
    if (belirti.trim().length < 4) { setHataMsg("Arıza belirtisini birkaç kelimeyle yaz."); return; }
    setHataMsg("");
    setAdim("loading");
    track("diagnose_start", { cihaz, marka }); // funnel: kullanıcı teşhis istedi

    const prompt = `Sen Türkiye'deki ev/elektronik cihazları için deneyimli bir arıza teşhis uzmanısın. Kullanıcı teknik bilmiyor, sadece belirti anlatıyor.

Cihaz: ${cihaz}
Marka: ${efektifMarka}
Cihaz yaşı: ${yas || "belirtilmedi"}
Belirti: "${belirti}"

BELİRTİ DEĞERLENDİRME (ÖNEMLİ — fiyat en olası arızaya bağlı): Birden çok belirti verildiyse YAZILMA SIRALARI ÖNEMSİZDİR — hepsini bir BÜTÜN olarak değerlendir; en olası TEK arızayı belirtilerin tümüne göre seç (sıra sonucu ASLA değiştirmemeli; "soğutmuyor + buzluk çalışmıyor" ile "buzluk çalışmıyor + soğutmuyor" AYNI sonucu vermeli). İki arıza olasılıkça yakınsa istatistiksel olarak daha YAYGIN/olası olanı en olası yap; pahalı ve NADİR arızayı (ör. kompresör/anakart komple değişimi) yalnızca belirtiler onu NET işaret ediyorsa (ör. yaş/koku/ses) en olası seç — şüphede daha yaygın ve ucuz kök nedeni tercih et.

REFERANS TARİFE (maliyeti BUNLARA göre çıpala; görmediğin arıza için bu seviyeye göre makul tahmin yürüt, uydurma):
${refMetni(cihaz)}

MARKA KADEMESİ (parça maliyetini markaya göre ayarla — yukarıdaki parça min–max aralığı ekonomik→premium markayı kapsar; listede olmayan markayı bilgine göre sınıfla):
- Premium (ör. Bosch, Siemens, Miele, Liebherr, AEG, Bauknecht, Electrolux): parçada aralığın ÜST bandı.
- Orta segment (ör. Arçelik, Beko, Samsung, LG, Vestel, Grundig, Profilo, Whirlpool): aralığın ORTASI.
- Ekonomik / küçük marka (ör. Regal, Hisense, Midea, Daewoo, Candy, Indesit): aralığın ALT bandı.
- "Diğer / Listede yok" veya emin değilsen: ORTA band (nötr — düşük tahmin etme).
- İŞÇİLİK markadan BAĞIMSIZDIR; kademeye göre değiştirme.
- KADEMEYİ KULLANICIYA ASLA YANSITMA. not, kararAciklama ve TÜM alanlarda şunlar YASAK: marka kademesi/segment; "premium/orta/ekonomik"; "kademe"; "üst/alt bant" veya "band"; markaya dayalı fiyat gerekçesi (ör. "Bosch parçası pahalı", "X markası üst bantta"); ve parça/işçilik kırılımı (ör. "~5000 TL parça + 1300 TL işçilik"). Bunların HEPSİ içsel mantık.
- "not" alanı KISA, NÖTR ve markadan bağımsız olsun (sistem fiyat notunu sabit gösterir; yine de kısa tut). Örnek: "En olası arızaya göre tahmini tutar (parça + işçilik dahil); kesin fiyat yerinde tespitte netleşir." Markayı, kademeyi, kırılımı YAZMA.

KARAR ÖNERİSİ (kararOnerisi) — şu 4 değerden TAM BİRİ:
- "gerek_yok": belirti tamamen KOZMETİK/görsel (dış yüzey/plastik sararması, çizik, soluk/solmuş renk, leke) VEYA cihaz işlevsel olarak sorunsuz çalışıyor; onarılacak teknik arıza YOK. Bu durumda tahminiMaliyet.beklenen = 0, aciliyet = "düşük", ve YAŞ ETKİSİNİ UYGULAMA (asla "yenisi" deme, tamir bedeli UYDURMA). kararAciklama: kozmetik olduğunu ve cihaz çalışıyorsa müdahale gerekmediğini sade söyle.
- "tamir": gerçek işlevsel arıza var, tamir mantıklı.
- "yenisi": gerçek arıza var AMA aşağıdaki YAŞ ETKİSİ gereği yenisini almak daha mantıklı.
- "belirsiz": belirti teşhis için yetersiz, arıza netleşmiyor.

YAŞ ETKİSİ (yalnız GERÇEK işlevsel arızada; "gerek_yok"ta UYGULANMAZ — "Cihaz yaşı" yukarıda verildi):
- Yeni/orta yaş (≈0-7 yıl): arıza tamir edilebilirse "tamir".
- Eski (≈8+ yıl, özellikle "10+ yıl") VE tahmini tamir bedeli yeni bir muadilin fiyatının kabaca yarısına yaklaşıyor/aşıyorsa → "yenisini al" ("yenisi").
- Beyaz eşya ömrü ~10-15 yıl, küçük ev aleti/elektronik daha kısa.
- Yaş "belirtilmedi" ise yaşı kullanma ve kararAciklama'da yaştan HİÇ bahsetme (boş yere "yaşı bilinmiyor / yaş ... uygulanmıyor" DEME).
- kararAciklama KULLANICIYA DÖNÜK ve SADE olsun. İçsel/meta dil YASAK: "yaş cezası", "ceza", "uygulanmıyor", "dezavantaj", "kural", "kademe", "band" yazma. Yaş gerçekten kararı belirlediyse doğal söyle (ör. "12 yıllık cihaza bu tamir ekonomik değil, yenisi daha mantıklı").

ACİLİYET ÖLÇÜTÜ (belirtiye göre değerlendir, varsayılan "orta"ya KAÇMA):
- "yüksek": güvenlik riski (su+elektrik teması, gaz, yanık/duman/kıvılcım kokusu) VEYA süregelen aktif hasar (su taşması/sızıntı yayılıyor) VEYA cihaz tamamen kullanılamaz ve temel ihtiyaç (buzdolabı hiç soğutmuyor → gıda bozulur).
- "orta": cihaz kısmen çalışıyor, sorun zamanla büyüyebilir, birkaç gün içinde ele alınmalı.
- "düşük": kozmetik/konfor sorunu, risk yok, beklemeye dayanır.
- "belirsiz": belirti teşhis için yetersiz / arıza netleşmiyor. kararOnerisi "belirsiz" ise aciliyet de MUTLAKA "belirsiz" olmalı — uydurma aciliyet verme, ek soru iste.

Teşhis yap. SADECE şu JSON'u döndür, başka hiçbir şey yazma:

{
 "gecerliAriza":true,
 "olasiArizalar":[{"ad":"kısa arıza adı","olasilik":70,"aciklama":"tek cümle sade açıklama"}],
 "seedRef":"EN OLASI arızanın REFERANS TARİFE'deki satır adı (birebir kopya); liste dışıysa \"\"",
 "tahminiMaliyet":{"beklenen":1200,"not":"kısa not"},
 "kararOnerisi":"tamir",
 "kararAciklama":"tek cümle gerekçe",
 "kendinCozebilirMi":{"mumkun":true,"ipuclari":["kısa adım"]},
 "aciliyet":"orta",
 "aciliyetNot":"tek cümle: bu aciliyetin somut gerekçesi",
 "ekSorular":["teşhisi netleştirecek kısa soru"]
}

GEÇERLİLİK: gecerliAriza = kullanıcının yazdığı belirti, seçilen cihaz için GERÇEK bir arıza tarifi mi? Anlamsız metin (ör. "asdfgh"), selamlama/sohbet, cihazla alakasız ya da hiç arıza içermeyen girdi → false. Gerçek bir belirti (yetersiz/belirsiz olsa bile, ör. "bazen duruyor", "ara sıra ses") → true. false ise olasiArizalar [] olabilir; diğer alanları sistem kullanmaz.

MALİYET KURALI (fiyatı SİSTEM hesaplar — sen sadece doğru satırı seç):
- seedRef = EN OLASI arıza, REFERANS TARİFE listesindeki hangi satıra en yakınsa o satırın adını BİREBİR kopyala (ör. "Gaz kaçağı/dolum"). Sistem tutarı bu satırdan (marka + işçilik) hesaplar. Listede karşılığı yoksa "" bırak.
- tahminiMaliyet.beklenen = EN OLASI arıza için tahmini toplam tutar (parça + işçilik, TL, tek sayı) — YALNIZ seedRef boşsa (liste dışı arıza) kullanılır; referans tarifeye çıpala, abartma. (Aralığı sistem otomatik ±%10 hesaplar.)
- kararOnerisi "gerek_yok" ise beklenen = 0 ve seedRef "".

Kurallar: en fazla 3 olası arıza (olasılığa göre sırala), olasilik 0-100, kararOnerisi sadece "tamir"/"yenisi"/"belirsiz"/"gerek_yok", aciliyet sadece "düşük"/"orta"/"yüksek"/"belirsiz" ve mutlaka yukarıdaki ölçüte göre (kararOnerisi "belirsiz" ise aciliyet de "belirsiz"), aciliyetNot tek cümle, en fazla 4 ipucu, en fazla 3 ek soru. Kısa yaz.`;

    const ctrl = new AbortController();
    const zamanAsimi = setTimeout(() => ctrl.abort(), 28000); // 28sn sonra iptal → istek asılı kalmasın
    try {
      const res = await fetch("/api/diagnose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
        signal: ctrl.signal,
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      const parsed = extractJSON(data.text || "");
      // FİYAT DETERMİNİSTİK + SIRA/JITTER-BAĞIMSIZ (guard'lardan ÖNCE): beklenen'i SEED'den hesapla.
      // En olası İKİ arıza olasılıkça YAKINSA (≤15 puan) ve #2 daha UCUZ/yaygınsa onu fiyatla —
      // böylece AI en-olasıyı gaz↔kompresör arasında çevirse bile fiyat SIÇRAMAZ (tutarlı). Net
      // baskın arızada (>15 puan fark) #1 kalır. #1 için seedRef (güvenilir), #2 için arıza adı
      // (fuzzy eşleşir). Eşleşme yoksa AI beklenen'ine düşülür. gerek_yok'ta atla.
      if (parsed && parsed.kararOnerisi !== "gerek_yok" && Array.isArray(parsed.olasiArizalar) && parsed.olasiArizalar.length) {
        const kademe = markaKademe(efektifMarka);
        const f = parsed.olasiArizalar;
        const p1 = seedBeklenen(cihaz, parsed.seedRef || f[0]?.ad, kademe);
        const p2 = f[1] ? seedBeklenen(cihaz, f[1].ad, kademe) : null;
        const w1 = Number(f[0]?.olasilik) || 0, w2 = Number(f[1]?.olasilik) || 0;
        let sec = p1;
        if (p1 != null && p2 != null && w1 - w2 <= 15 && p2 < p1) sec = p2; // yakın + daha ucuz kök neden
        if (sec != null) parsed.tahminiMaliyet = { ...(parsed.tahminiMaliyet || {}), beklenen: sec };
      }
      // Savunma: beklenen 0/yok iken karar "tamir"/"yenisi" geldiyse bu bir çelişkidir
      // (model kozmetik olduğunu anladı ama yanlış badge verdi) → "gerek_yok" say.
      if (parsed) {
        const ham = parsed.tahminiMaliyet?.beklenen;
        const beklenenYok = ham == null || Number(ham) === 0;
        if (beklenenYok && (parsed.kararOnerisi === "tamir" || parsed.kararOnerisi === "yenisi")) {
          parsed.kararOnerisi = "gerek_yok";
        }
        // gerek_yok → maliyet sıfır, aciliyet düşük (model kaçırsa bile garanti).
        if (parsed.kararOnerisi === "gerek_yok") {
          parsed.tahminiMaliyet = { ...(parsed.tahminiMaliyet || {}), beklenen: 0 };
          if (!parsed.aciliyet || parsed.aciliyet === "belirsiz") parsed.aciliyet = "düşük";
        }
      }
      const teshis = normalizeMaliyet(parsed);
      // Karar belirsizse aciliyet de belirsiz (kullanıcı kuralı) — AI kaçırsa bile garanti.
      if (teshis && teshis.kararOnerisi === "belirsiz") teshis.aciliyet = "belirsiz";
      setSonuc(teshis);
      // Girdi geçerli bir arıza tarifi değilse (anlamsız/alakasız) → teşhis/fiyat/Servis Bul GÖSTERME.
      const gecerli = !(teshis && teshis.gecerliAriza === false);
      setAdim(gecerli ? "sonuc" : "gecersiz");
      track("diagnose_result", { gecerli, karar: teshis?.kararOnerisi || null }); // funnel: sonuç ekranı gösterildi
      // Anonim istatistik logu (best-effort; akışı ASLA bloklamaz; PII yok)
      if (gecerli && teshis) {
        fetch("/api/teshis/log", {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            cihaz, marka: efektifMarka,
            ariza: teshis.olasiArizalar?.[0]?.ad || null,
            maliyet_min: teshis.tahminiMaliyet?.min ?? null,
            maliyet_max: teshis.tahminiMaliyet?.max ?? null,
            karar: teshis.kararOnerisi || null,
            aciliyet: teshis.aciliyet || null,
            yas: yas || null,
          }),
        }).then((r) => (r.ok ? r.json() : null)).then((d) => { if (d?.id) setTeshisLogId(d.id); }).catch(() => {});
      }
    } catch (e) {
      setHataMsg("Teşhis sırasında bir sorun oldu. Tekrar dener misin?");
      setAdim("hata");
    } finally {
      clearTimeout(zamanAsimi);
    }
  };

  const ozetMetni = () => {
    if (!sonuc) return "";
    const ar = (sonuc.olasiArizalar || []).map((a) => `• ${a.ad} (%${a.olasilik})`).join("\n");
    const m = sonuc.tahminiMaliyet || {};
    const etiket = { tamir: "Tamir ettir", yenisi: "Yenisini al", belirsiz: "Belirsiz", gerek_yok: "Tamir gerekmez" };
    const maliyetSatiri = sonuc.kararOnerisi === "gerek_yok" || m.min == null
      ? "Tahmini maliyet: Tamir gerekmez"
      : `Tahmini maliyet: ${m.min}-${m.max} TL`;
    return `Arızam Ne? — Teşhis\nCihaz: ${cihaz}${efektifMarka ? " / " + efektifMarka : ""}\nBelirti: ${belirti}\n\nOlası arızalar:\n${ar}\n\n${maliyetSatiri}\nKarar: ${etiket[sonuc.kararOnerisi] || sonuc.kararOnerisi} — ${sonuc.kararAciklama}\nAciliyet: ${sonuc.aciliyet}${sonuc.aciliyetNot ? " — " + sonuc.aciliyetNot : ""}`;
  };

  const kopyala = async () => {
    const t = ozetMetni();
    try { await navigator.clipboard.writeText(t); }
    catch {
      const ta = document.createElement("textarea"); ta.value = t;
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); } catch (e) {}
      document.body.removeChild(ta);
    }
    setKopyalandi(true); setTimeout(() => setKopyalandi(false), 1800);
  };

  const sifirla = () => { setSonuc(null); setBelirti(""); setMarka(""); setMarkaDiger(""); setYas(""); setCihaz(""); setAdim("form"); setShowServisler(false); setTeshisLogId(null); setShowDPP(false); setDppInitialSeriNo(""); window.scrollTo(0, 0); };
  const detayEkle = () => setAdim("form");

  const acilRenk = { "düşük": "#22C55E", "orta": "#EA580C", "yüksek": "#DC2626", "belirsiz": "#64748B" };
  const kararRenk = { tamir: "#22C55E", yenisi: "#DC2626", belirsiz: "#64748B", gerek_yok: "#0D9488" };
  const kararEtiket = { tamir: "TAMİR ETTİR", yenisi: "YENİSİNİ AL", belirsiz: "BELİRSİZ", gerek_yok: "TAMİR GEREKMEZ" };
  const oneriler = BELIRTILER[cihaz] || [];
  // "Teşhis et" yalnız üç zorunlu alan (cihaz + marka + belirti) dolunca aktif görünür.
  const formHazir = !!cihaz && !!marka && belirti.trim().length >= 4;

  return (
    <div style={s.wrap}>
      {showServisler && (
        <ServisEkrani
          cihaz={cihaz}
          marka={efektifMarka}
          belirti={belirti}
          onKapat={() => setShowServisler(false)}
          onAnaSayfa={sifirla}
          teshisLogId={teshisLogId}
        />
      )}
      {showDPP && (
        <DPPEkrani
          initialSeriNo={dppInitialSeriNo}
          teshisContext={adim === "sonuc" ? { cihaz, marka: efektifMarka } : null}
          onKapat={() => { setShowDPP(false); setDppInitialSeriNo(""); }}
        />
      )}
      <style>{FONT}{CSS}</style>
      <div style={s.grain} />

      <header style={s.header}>
        {/* Kurumsal logo + motto — en üstte. Logoya tıkla → ana sayfa (sıfırla). */}
        <button onClick={sifirla} aria-label="Ana sayfaya dön" style={s.logoBtn}>
          <BenservisLogo style={s.brandLogo} />
        </button>
        <p style={s.tagline}>Cihazın bozuldu, belirtisini yaz — teşhisi ve tahmini maliyeti söyleyelim.</p>
        <div style={s.trustRow}>
          <span style={s.trustItem}><span style={{ color: "#2563EB", fontWeight: 800 }}>✓</span> Ücretsiz</span>
          <span style={s.trustItem}><span style={{ color: "#2563EB", fontWeight: 800 }}>✦</span> AI destekli</span>
          <span style={s.trustItem}><span style={{ color: "#F5A623" }}>★</span> Google puanlı servisler</span>
        </div>
        <a href="/blog/" className="rehber-btn" style={s.rehberBtn}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>Bilgi Merkezi →</a>
      </header>

      {(adim === "form" || adim === "hata") && (
        <div style={s.card}>
          <label style={s.label}>Cihaz <span style={{ color: "#DC2626", fontWeight: 700 }}>*</span></label>
          <div style={s.cihazGrid}>
            {CIHAZLAR.map((c) => {
              const aktif = cihaz === c;
              return (
                <button key={c} onClick={() => {
                  setCihaz(c);
                  // Cihaz değişince seçili marka yeni listede yoksa sıfırla
                  if (marka && marka !== "Diğer" && !markalarForCihaz(c).includes(marka)) setMarka("");
                }} style={{ ...s.cihazTile, ...(aktif ? s.cihazTileActive : {}) }}>
                  <CihazIkon cihaz={c} size={26} />
                  <span style={s.cihazTileText}>{c}</span>
                </button>
              );
            })}
          </div>

          {oneriler.length > 0 && (
            <div style={s.oneriBox}>
              <span style={s.oneriLabel}>Sık görülen belirtiler <span style={s.opt}>· dokunarak ekle</span></span>
              <div style={s.oneriWrap}>
                {oneriler.map((b) => {
                  const aktif = belirtiAktif(b);
                  return (
                    <button
                      key={b}
                      type="button"
                      onClick={() => belirtiToggle(b)}
                      style={{ ...s.oneriChip, ...(aktif ? s.oneriChipActive : {}) }}
                    >
                      <span style={s.oneriChipIkon}>{aktif ? "✓" : "+"}</span>
                      {b}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div style={s.row}>
            <div style={{ flex: 1.5, minWidth: 0 }}>
              <label style={s.label}>
                Marka <span style={{ color: "#DC2626", fontWeight: 700 }}>*</span>
              </label>
              <select
                style={{ ...s.input, cursor: cihaz ? "pointer" : "not-allowed" }}
                value={marka}
                onChange={(e) => { setMarka(e.target.value); if (e.target.value !== "Diğer") setMarkaDiger(""); }}
                disabled={!cihaz}
              >
                <option value="">{cihaz ? "Seç…" : "Önce cihaz seç"}</option>
                {markalarForCihaz(cihaz).map((m) => <option key={m} value={m}>{m}</option>)}
                <option value="Diğer">Diğer / Listede yok</option>
              </select>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <label style={{ ...s.label, whiteSpace: "nowrap" }}>Cihaz yaşı <span style={s.opt}>(opsiyonel)</span></label>
              <select style={{ ...s.input, cursor: "pointer" }} value={yas} onChange={(e) => setYas(e.target.value)}>
                <option value="">Seç…</option>
                <option value="0-2 yıl">0-2 yıl</option>
                <option value="3-5 yıl">3-5 yıl</option>
                <option value="6-10 yıl">6-10 yıl</option>
                <option value="10+ yıl">10+ yıl</option>
              </select>
            </div>
          </div>

          {/* "Diğer" seçilince markayı elle yaz — veri toplama + daha iyi teşhis (isteğe bağlı) */}
          {marka === "Diğer" && (
            <input
              type="text"
              value={markaDiger}
              onChange={(e) => setMarkaDiger(e.target.value)}
              placeholder="Marka adını yaz (örn. Vestfrost) — opsiyonel"
              maxLength={40}
              style={{ ...s.input, marginTop: 10 }}
            />
          )}


          <label style={s.label}>Ne oluyor? Belirtiyi anlat <span style={{ color: "#DC2626", fontWeight: 700 }}>*</span> <span style={s.opt}>(varsa ekrandaki hata kodunu da yaz)</span></label>
          {/* Belirti textarea (sol, esnek) + Sesle anlat butonu (sağ, kutu boyunda) YAN YANA */}
          <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <div style={{ flex: 1, minWidth: 0, position: "relative" }}>
              <textarea ref={belirtiRef} style={{ ...s.textarea, width: "100%", padding: "13px 14px 24px" }} value={belirti} onChange={(e) => setBelirti(e.target.value)} rows={4} maxLength={BELIRTI_MAX}
                placeholder="örn. Çamaşır makinesi su almıyor, başlatınca tıkırtı geliyor ama dönmüyor. Hata kodu varsa: E3" />
              <span style={{ position: "absolute", bottom: 8, right: 12, fontSize: 11, fontWeight: 600, fontVariantNumeric: "tabular-nums", background: SURFACE, padding: "0 3px", pointerEvents: "none", color: belirti.length >= BELIRTI_MAX ? "#DC2626" : belirti.length >= BELIRTI_MAX - 25 ? "#EA580C" : FAINT }}>{belirti.length}/{BELIRTI_MAX}</span>
            </div>
            {/* Sesli girdi — konuş, otomatik yazıya dökülüp belirtiye eklenir (ses saklanmaz) */}
            <button
              type="button"
              onClick={sesDurumu === "kaydediyor" ? sesDurdur : sesBaslat}
              disabled={sesDurumu === "isliyor"}
              style={{
                flex: "0 0 62px", width: 62, alignSelf: "stretch", padding: "10px 5px", borderRadius: 12,
                border: `1.5px solid ${sesDurumu === "kaydediyor" ? "#DC2626" : "#2563EB"}`,
                background: sesDurumu === "kaydediyor" ? "rgba(220,38,38,.06)" : "rgba(37,99,235,.06)",
                color: sesDurumu === "kaydediyor" ? "#DC2626" : "#2563EB",
                fontSize: 13, fontWeight: 700, cursor: sesDurumu === "isliyor" ? "default" : "pointer",
                fontFamily: "inherit", display: "flex", flexDirection: "column", alignItems: "center",
                justifyContent: "center", gap: 5, textAlign: "center", lineHeight: 1.2, overflowWrap: "break-word",
              }}
            >
              {sesDurumu === "bosta" && (<><span style={{ fontSize: 20, lineHeight: 1 }}>🎤</span><span>Sesle anlat</span></>)}
              {sesDurumu === "kaydediyor" && (<><span style={{ fontSize: 16, lineHeight: 1 }}>●</span><span>Durdur</span></>)}
              {sesDurumu === "isliyor" && (<span>İşliyor…</span>)}
            </button>
          </div>

          {hataMsg && <div style={s.err}>{hataMsg}</div>}
          {/* ZORUNLU alanlar (cihaz + marka + belirti) dolmadan buton aktif görünmez (tesisEt guard'ı da var) */}
          <button
            style={{ ...s.cta, ...(formHazir ? {} : { opacity: 0.45, cursor: "not-allowed", boxShadow: "none" }) }}
            onClick={tesisEt}
            disabled={!formHazir}
          >Ücretsiz teşhis et →</button>
          {!formHazir && cihaz && (
            <p style={{ fontSize: 12.5, color: "#94A3B8", textAlign: "center", margin: "8px 0 0" }}>
              {!marka ? "Marka seçin." : "Arıza belirtisini yazın."}
            </p>
          )}
          <p style={s.disclaimer}>Sonuç bir ön tahmindir; kesin teşhis için yetkili servis gerekir.</p>
        </div>
      )}

      {/* Ana sayfa alt bölümü — yalnız form ekranında: sık sorulanlar (SSS) */}
      {adim === "form" && (
        <>
          <div style={{ position: "relative", zIndex: 1, marginTop: 24 }}>
            <div style={{ ...s.secHead, marginBottom: 12 }}>Sık sorulanlar</div>
            {SSS.map((q, i) => (
              <div key={i} style={{ background: SURFACE, border: `1px solid ${HAIR}`, borderRadius: 14, marginBottom: 10, overflow: "hidden" }}>
                <button onClick={() => setSssAcik(sssAcik === i ? null : i)} aria-expanded={sssAcik === i} style={{ width: "100%", background: "none", border: "none", padding: "15px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, textAlign: "left", fontSize: 14.5, fontWeight: 600, color: INK }}>
                  <span>{q.s}</span>
                  <span style={{ color: "#2563EB", fontSize: 22, fontWeight: 400, lineHeight: 1, flexShrink: 0 }} aria-hidden="true">{sssAcik === i ? "–" : "+"}</span>
                </button>
                {sssAcik === i && (
                  <p style={{ margin: 0, padding: "0 16px 15px", fontSize: 13.5, lineHeight: 1.6, color: MUTED }}>{q.c}</p>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {adim === "loading" && (
        <div style={s.card}>
          <div style={s.loaderWrap}>
            <svg width="58" height="58" viewBox="0 0 120 120" style={{ display: "block", margin: "0 auto 18px" }} aria-hidden="true">
              <rect width="120" height="120" rx="28" fill="#2563EB" />
              <path d="M60 22C42 22 28 36 28 53c0 22 32 45 32 45s32-23 32-45C92 36 78 22 60 22Z" fill="#fff" />
              <g fill="#2563EB">
                <circle cx="60" cy="51" r="15" />
                <rect x="55.5" y="27" width="9" height="15" rx="3" transform="rotate(0 60 51)" />
                <rect x="55.5" y="27" width="9" height="15" rx="3" transform="rotate(45 60 51)" />
                <rect x="55.5" y="27" width="9" height="15" rx="3" transform="rotate(90 60 51)" />
                <rect x="55.5" y="27" width="9" height="15" rx="3" transform="rotate(135 60 51)" />
                <rect x="55.5" y="27" width="9" height="15" rx="3" transform="rotate(180 60 51)" />
                <rect x="55.5" y="27" width="9" height="15" rx="3" transform="rotate(225 60 51)" />
                <rect x="55.5" y="27" width="9" height="15" rx="3" transform="rotate(270 60 51)" />
                <rect x="55.5" y="27" width="9" height="15" rx="3" transform="rotate(315 60 51)" />
                <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 60 51" to="360 60 51" dur="2.4s" repeatCount="indefinite" />
              </g>
              <circle cx="60" cy="51" r="6" fill="#fff" />
            </svg>
            <p style={s.loaderText}>Arıza analiz ediliyor…</p>
            <p style={s.loaderSub}>{cihaz || "Cihaz"} · belirtiler eşleştiriliyor, maliyet hesaplanıyor</p>
          </div>
        </div>
      )}

      {adim === "gecersiz" && (
        <div style={s.card}>
          <div style={{ textAlign: "center", padding: "8px 4px" }}>
            <div style={{ fontSize: 40, marginBottom: 10 }}>🤔</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 20, color: "#1E293B", margin: "0 0 8px" }}>Belirtiyi tam anlayamadım</h2>
            <p style={{ color: "#64748B", fontSize: 14.5, lineHeight: 1.6, margin: "0 0 20px" }}>Cihazında ne olduğunu birkaç kelimeyle anlat — örn. <strong style={{ color: "#1E293B" }}>"soğutmuyor"</strong>, <strong style={{ color: "#1E293B" }}>"su akıtıyor"</strong>, <strong style={{ color: "#1E293B" }}>"çalışmıyor"</strong>.</p>
            <button style={s.cta} onClick={detayEkle}>← Belirtiyi düzelt</button>
          </div>
        </div>
      )}

      {adim === "sonuc" && sonuc && (
        <div style={s.results}>
          <div style={s.card}>
            <div style={s.secHead}>Olası arızalar</div>
            {sonuc.olasiArizalar?.map((a, i) => (
              <div key={i} style={s.ariza}>
                <div style={s.arizaTop}><span style={s.arizaAd}>{a.ad}</span><span style={s.arizaPct}>%{a.olasilik}</span></div>
                <div style={s.barTrack}><div style={{ ...s.barFill, width: `${a.olasilik}%` }} /></div>
                <p style={s.arizaAcik}>{a.aciklama}</p>
              </div>
            ))}
          </div>

          <div style={s.cardSplit}>
            <div style={{ flex: 1.2 }}>
              <div style={s.secHead}>Tahmini maliyet</div>
              {sonuc.kararOnerisi === "gerek_yok" || sonuc.tahminiMaliyet?.min == null ? (
                <div style={{ ...s.fiyat, fontSize: 23, lineHeight: 1.15 }}>Tamir gerekmez</div>
              ) : (
                <div style={s.fiyat}>{sonuc.tahminiMaliyet?.min?.toLocaleString("tr-TR")}–{sonuc.tahminiMaliyet?.max?.toLocaleString("tr-TR")} <span style={s.tl}>TL</span></div>
              )}
              <p style={s.fiyatNot}>En olası arızaya göre tahmini tutar (parça + işçilik dahil); kesin fiyat yerinde tespitte netleşir.</p>
            </div>
            <div style={s.divider} />
            <div style={{ flex: 1 }}>
              <div style={s.secHead}>Karar</div>
              <span style={{ ...s.kararBadge, background: kararRenk[sonuc.kararOnerisi] || "#64748B" }}>{kararEtiket[sonuc.kararOnerisi] || "BELİRSİZ"}</span>
              <p style={s.fiyatNot}>{sonuc.kararAciklama}</p>
            </div>
          </div>

          <div style={s.cardSplit}>
            <div style={{ flex: 1 }}>
              <div style={s.secHead}>Aciliyet</div>
              <span style={{ ...s.acilBadge, color: acilRenk[sonuc.aciliyet] || acilRenk.belirsiz, borderColor: acilRenk[sonuc.aciliyet] || acilRenk.belirsiz }}>{(sonuc.aciliyet || "belirsiz").toUpperCase()}</span>
              {sonuc.aciliyetNot && <p style={s.fiyatNot}>{sonuc.aciliyetNot}</p>}
            </div>
            <div style={s.divider} />
            <div style={{ flex: 2 }}>
              <div style={s.secHead}>Kendin çözebilir misin?</div>
              {sonuc.kendinCozebilirMi?.mumkun ? (
                <ul style={s.ipucuList}>
                  {sonuc.kendinCozebilirMi.ipuclari?.map((ip, i) => (<li key={i} style={s.ipucu}><span style={s.tick}>✓</span>{ip}</li>))}
                </ul>
              ) : (<p style={s.fiyatNot}>Bu arıza için servis önerilir, kendin müdahale etme.</p>)}
            </div>
          </div>

          {sonuc.ekSorular?.length > 0 && (
            <div style={s.cardSoft}>
              <div style={s.secHeadSoft}>Daha kesin teşhis için</div>
              {sonuc.ekSorular.map((q, i) => <p key={i} style={s.soru}>• {q}</p>)}
              <button style={s.linkBtn} onClick={detayEkle}>Detay ekle ve tekrar sor</button>
            </div>
          )}

          <div style={s.faz2}>
            <div>
              <div style={s.faz2Head}>{sonuc.kararOnerisi === "gerek_yok" ? "Yine de kontrol ettirmek istersen" : "Tamir ettirmek ister misin?"}</div>
              <div style={s.faz2Sub}>Konumuna göre sıralar · Direkt arama</div>
              {sonuc.kararOnerisi === "belirsiz" && <div style={{ fontSize: 12.5, color: "#EA580C", marginTop: 4, fontWeight: 600 }}>Arıza net değil — kesin teşhis için yerinde servis önerilir.</div>}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <button style={{ ...s.faz2Btn, opacity: 1 }} onClick={() => { track("servis_click", { cihaz, marka }); setShowServisler(true); }}>
                📍 Servis Bul
              </button>
            </div>
          </div>

          <div style={s.altBtns}>
            <button style={s.copyBtn} onClick={kopyala}>{kopyalandi ? "✓ Kopyalandı" : "⧉ Özeti kopyala"}</button>
            <button style={s.reset} onClick={sifirla}>↺ Yeni arıza</button>
          </div>
        </div>
      )}

      <footer style={s.footer}>
        <div style={s.footBrand}>Benservis · Bil, gör, çağır.</div>
        <div style={s.footSub}><a href="/blog/" style={s.footLink}>Bilgi Merkezi</a> · <a href="/blog/hakkimizda/" style={s.footLink}>Hakkımızda</a> · <a href="https://www.servis.gov.tr/Genel/Sorgu" target="_blank" rel="noopener noreferrer" style={s.footLink}>SERBİS'te Doğrula</a></div>
        <div style={{ ...s.footSub, marginTop: 3 }}>AI destekli teşhis · tahmini maliyet</div>
        <div style={s.footSocial}>
          <a href="https://www.instagram.com/benservis.app/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="foot-social" style={s.footSocialLink}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5.5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" /></svg></a>
          <a href="https://www.tiktok.com/@benservis.app" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="foot-social" style={s.footSocialLink}><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg></a>
          <a href="https://www.linkedin.com/company/134824266/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="foot-social" style={s.footSocialLink}><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" /></svg></a>
          <a href="https://www.youtube.com/@benservisapp" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="foot-social" style={s.footSocialLink}><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg></a>
          <a href="https://medium.com/@benservis.app" target="_blank" rel="noopener noreferrer" aria-label="Medium" className="foot-social" style={s.footSocialLink}><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" /></svg></a>
        </div>
      </footer>
    </div>
  );
}

const INK = "#1E293B", CREAM = "#F8FAFC", AMBER = "#2563EB", GREEN = "#22C55E";
// Minimal & premium paleti
const BG = "#F8FAFC", SURFACE = "#FFFFFF", MUTED = "#475569", FAINT = "#94A3B8", HAIR = "#E2E8F0";

// Ana sayfa "Sık sorulanlar" — görünen metin ve index.html FAQPage JSON-LD BİRE BİR aynı olmalı
const SSS = [
  { s: "Teşhis için ücret ödüyor muyum?", c: "Hayır, tamamen ücretsiz. Cihazını ve belirtiyi yaz; olası arızayı ve tahmini maliyeti anında öğren." },
  { s: "Teşhis nasıl çalışıyor?", c: "Cihaz, marka ve belirtiyi yazıyorsun; yapay zeka olası arızaları, olasılıklarını ve tahmini onarım maliyetini saniyeler içinde çıkarıyor." },
  { s: "Sonuçtaki fiyat kesin mi?", c: "Tahminidir; parça ve işçilik dahil bir aralık verir. Kesin fiyat, yerinde tespitte netleşir." },
  { s: "Tamir mi ettireyim, yenisini mi alayım?", c: "Tahmini onarım maliyetini cihazın yaşı ve yeni fiyatıyla birlikte değerlendir; Benservis kararı kolaylaştırmak için tamir/yenisi önerisi de sunar." },
];

const CSS = `
* { box-sizing: border-box; }
html, body { margin: 0; overflow-x: hidden; }
@keyframes anspin { to { transform: rotate(360deg); } }
@keyframes anrise { from { opacity:0; transform: translateY(10px);} to {opacity:1; transform:none;} }
input:focus, textarea:focus, select:focus { outline: none; border-color: ${AMBER} !important; box-shadow: 0 0 0 3px rgba(37,99,235,.13); }
button { cursor: pointer; font-family: 'Hanken Grotesk', sans-serif; }
.rehber-btn:hover { background: rgba(37,99,235,.13) !important; transform: translateY(-1px); }
.foot-social:hover { color: #2563EB !important; transform: translateY(-1px); }
`;

const s = {
  wrap: { position: "relative", minHeight: "100%", background: BG, fontFamily: "'Hanken Grotesk', sans-serif", color: INK, padding: "40px 20px 48px", maxWidth: 600, margin: "0 auto" },
  grain: { display: "none" },
  header: { position: "relative", zIndex: 1, marginBottom: 28, textAlign: "center" },
  logoBtn: { display: "block", width: "100%", background: "none", border: "none", padding: 0, cursor: "pointer" },
  brandLogo: { display: "block", width: "min(304px, 86%)", height: "auto", margin: "0 auto 18px" },
  appName: { fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 20, margin: 0, letterSpacing: "-0.02em", color: INK },
  tagline: { fontSize: "clamp(8px, 2.5vw, 11px)", color: MUTED, margin: "10px auto 0", whiteSpace: "nowrap", lineHeight: 1.4 },
  trustBadge: { display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: AMBER },
  trustRow: { display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 8, marginTop: 14 },
  trustItem: { display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 600, color: MUTED, background: SURFACE, border: `1px solid ${HAIR}`, borderRadius: 999, padding: "6px 12px" },
  rehberBtn: { display: "inline-flex", alignItems: "center", gap: 7, marginTop: 16, padding: "10px 20px", borderRadius: 12, background: "rgba(37,99,235,.07)", color: AMBER, fontSize: 14, fontWeight: 700, textDecoration: "none", border: "1.5px solid rgba(37,99,235,.25)", transition: "background .15s ease, transform .15s ease" },
  card: { position: "relative", zIndex: 1, background: SURFACE, border: `1px solid ${HAIR}`, borderRadius: 20, padding: "26px 24px", boxShadow: "0 1px 2px rgba(30,41,59,.04), 0 16px 40px -28px rgba(30,41,59,.30)", animation: "anrise .4s ease both" },
  cardSplit: { position: "relative", zIndex: 1, background: SURFACE, border: `1px solid ${HAIR}`, borderRadius: 18, padding: 20, marginTop: 14, display: "flex", gap: 18, alignItems: "flex-start", boxShadow: "0 1px 2px rgba(30,41,59,.04), 0 12px 28px -22px rgba(30,41,59,.22)", animation: "anrise .4s ease both" },
  cardSoft: { position: "relative", zIndex: 1, background: "#F1F5F9", border: "1px dashed #CBD5E1", borderRadius: 18, padding: 20, marginTop: 14 },
  results: { position: "relative", zIndex: 1 },
  label: { display: "block", fontSize: 13, fontWeight: 700, margin: "18px 0 8px", color: INK, letterSpacing: "-0.01em" },
  opt: { fontWeight: 500, color: FAINT, fontSize: 12 },
  chipWrap: { display: "flex", flexWrap: "wrap", gap: 8 },
  chip: { fontSize: 13, padding: "9px 14px", borderRadius: 10, border: `1px solid ${HAIR}`, background: SURFACE, color: MUTED, fontWeight: 600, transition: "all .15s" },
  chipActive: { background: INK, color: "#fff", border: `1px solid ${INK}` },
  // Cihaz seçimi — ikon + etiket grid (minimal & premium)
  cihazGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(84px, 1fr))", gap: 8 },
  cihazTile: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6, padding: "12px 4px", minHeight: 80, borderRadius: 13, border: `1px solid ${HAIR}`, background: SURFACE, color: MUTED, transition: "all .15s", textAlign: "center" },
  cihazTileActive: { border: `1px solid ${INK}`, background: INK, color: "#fff", boxShadow: "0 8px 20px -12px rgba(30,41,59,.5)" },
  cihazTileText: { fontSize: 11.5, fontWeight: 600, lineHeight: 1.25 },
  oneriBox: { marginTop: 16, padding: "14px 15px", background: "#F1F5F9", borderRadius: 14 },
  oneriLabel: { fontSize: 12.5, fontWeight: 700, color: MUTED },
  oneriWrap: { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 11 },
  oneriChip: { flex: "1 1 auto", justifyContent: "center", display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, padding: "8px 14px", borderRadius: 999, border: `1px solid ${HAIR}`, background: SURFACE, color: INK, fontWeight: 600, transition: "all .15s", boxShadow: "0 1px 1px rgba(30,41,59,.03)" },
  oneriChipActive: { background: AMBER, color: "#fff", border: `1px solid ${AMBER}`, boxShadow: "0 6px 14px -6px rgba(37,99,235,.55)" },
  oneriChipIkon: { fontSize: 13, fontWeight: 800, opacity: 0.85, lineHeight: 1 },
  row: { display: "flex", gap: 12, alignItems: "flex-start" },
  input: { width: "100%", height: 46, padding: "0 14px", borderRadius: 12, border: `1px solid ${HAIR}`, background: SURFACE, fontSize: 16, fontFamily: "'Hanken Grotesk', sans-serif", color: INK, transition: "all .15s", boxSizing: "border-box" },
  textarea: { width: "100%", padding: "13px 14px", borderRadius: 12, border: `1px solid ${HAIR}`, background: SURFACE, fontSize: 16, fontFamily: "'Hanken Grotesk', sans-serif", color: INK, resize: "none", overflow: "hidden", boxSizing: "border-box", minHeight: 116, lineHeight: 1.55 },
  err: { marginTop: 14, color: "#DC2626", fontSize: 13.5, fontWeight: 600 },
  cta: { marginTop: 22, width: "100%", padding: "15px", borderRadius: 13, border: "none", background: AMBER, color: "#fff", fontSize: 15.5, fontWeight: 700, letterSpacing: ".01em", boxShadow: "0 10px 24px -12px rgba(37,99,235,.55)", transition: "transform .15s ease, box-shadow .15s ease" },
  disclaimer: { fontSize: 11.5, color: FAINT, textAlign: "center", marginTop: 14, marginBottom: 0, lineHeight: 1.5 },
  loaderWrap: { textAlign: "center", padding: "26px 0" },
  loader: { width: 38, height: 38, borderRadius: "50%", border: "4px solid #E2E8F0", borderTopColor: AMBER, margin: "0 auto 16px", animation: "anspin 1s linear infinite" },
  loaderText: { fontFamily: "'Fraunces', serif", fontSize: 19, fontWeight: 600, margin: 0 },
  loaderSub: { fontSize: 13, color: "#94A3B8", marginTop: 6 },
  secHead: { fontFamily: "'Fraunces', serif", fontSize: 17, fontWeight: 600, marginBottom: 12 },
  secHeadSoft: { fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 600, marginBottom: 10, color: "#64748B" },
  ariza: { marginBottom: 15 },
  arizaTop: { display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 5 },
  arizaAd: { fontWeight: 700, fontSize: 15 },
  arizaPct: { fontWeight: 700, fontSize: 14, color: AMBER, fontFamily: "'Fraunces', serif" },
  barTrack: { height: 7, background: "#E2E8F0", borderRadius: 99, overflow: "hidden" },
  barFill: { height: "100%", background: `linear-gradient(90deg, ${AMBER}, #60A5FA)`, borderRadius: 99 },
  arizaAcik: { fontSize: 13.5, color: "#475569", margin: "6px 0 0", lineHeight: 1.45 },
  fiyat: { fontFamily: "'Fraunces', serif", fontSize: 35, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.02em", color: INK },
  tl: { fontSize: 16, color: "#94A3B8" },
  fiyatNot: { fontSize: 13, color: "#475569", marginTop: 8, lineHeight: 1.45 },
  divider: { width: 1, alignSelf: "stretch", background: "#E2E8F0" },
  kararBadge: { display: "inline-block", color: "#fff", fontSize: 12.5, fontWeight: 700, letterSpacing: ".04em", padding: "6px 12px", borderRadius: 8 },
  acilBadge: { display: "inline-block", fontSize: 13, fontWeight: 700, letterSpacing: ".05em", padding: "6px 12px", borderRadius: 8, borderWidth: "1.5px", borderStyle: "solid", background: SURFACE },
  ipucuList: { listStyle: "none", padding: 0, margin: 0 },
  ipucu: { fontSize: 13.5, color: "#334155", display: "flex", gap: 8, marginBottom: 7, lineHeight: 1.4 },
  tick: { color: GREEN, fontWeight: 800 },
  soru: { fontSize: 13.5, color: "#64748B", margin: "0 0 6px", lineHeight: 1.4 },
  linkBtn: { marginTop: 8, background: "none", border: "none", color: AMBER, fontWeight: 700, fontSize: 13.5, padding: 0, textDecoration: "underline" },
  faz2: { position: "relative", zIndex: 1, marginTop: 16, background: INK, color: CREAM, borderRadius: 18, padding: "18px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 },
  faz2Head: { fontFamily: "'Fraunces', serif", fontSize: 17, fontWeight: 600 },
  faz2Sub: { fontSize: 13, color: "#94A3B8", marginTop: 3 },
  faz2Btn: { background: AMBER, color: "#fff", border: "none", borderRadius: 11, padding: "11px 15px", fontWeight: 700, fontSize: 14, opacity: .85, whiteSpace: "nowrap" },
  altBtns: { display: "flex", gap: 10, marginTop: 16 },
  copyBtn: { flex: 1, padding: "12px", borderRadius: 12, border: `1.5px solid ${AMBER}`, background: "rgba(37,99,235,.06)", color: AMBER, fontSize: 14.5, fontWeight: 700 },
  reset: { flex: 1, padding: "12px", borderRadius: 12, border: "1.5px solid #CBD5E1", background: "transparent", color: INK, fontSize: 14.5, fontWeight: 600 },
  footer: { position: "relative", zIndex: 1, textAlign: "center", marginTop: 30, paddingTop: 22, borderTop: `1px solid ${HAIR}` },
  footBrand: { fontFamily: "'Fraunces', serif", fontSize: 14, fontWeight: 600, color: MUTED },
  footSub: { fontSize: 12, color: FAINT, marginTop: 6 },
  footLink: { color: "#2563EB", textDecoration: "none", fontWeight: 600 },
  footSocial: { display: "flex", justifyContent: "center", gap: 18, marginTop: 12 },
  footSocialLink: { color: FAINT, display: "inline-flex", transition: "color .15s ease, transform .15s ease" },
  dppBanner: {
    position: "relative", zIndex: 1, marginBottom: 14,
    background: SURFACE, border: `1px solid ${HAIR}`, borderRadius: 14,
    padding: "13px 16px", display: "flex", justifyContent: "space-between",
    alignItems: "center", gap: 12, flexWrap: "wrap",
  },
  dppBannerText: { fontSize: 13, fontWeight: 700, color: INK },
  dppBannerSag: { display: "flex", gap: 8, flex: 1, maxWidth: 280 },
  dppBannerInput: {
    flex: 1, padding: "9px 12px", borderRadius: 10,
    border: `1px solid ${HAIR}`, background: BG, fontSize: 13,
    fontFamily: "'Hanken Grotesk', sans-serif", color: INK, letterSpacing: "0.04em",
  },
  dppBannerBtn: {
    padding: "9px 16px", borderRadius: 10, border: "none",
    background: INK, color: "#fff", fontSize: 13, fontWeight: 700,
    fontFamily: "'Hanken Grotesk', sans-serif", whiteSpace: "nowrap", cursor: "pointer",
  },
  ikinciElBanner: {
    position: "relative", zIndex: 1,
    display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10,
    marginTop: 18, padding: "13px 18px", borderRadius: 14,
    background: "#F8FAFC", border: "1.5px solid #E2E8F0",
    color: INK, textDecoration: "none", fontSize: 14, lineHeight: 1.4,
  },
  ikinciElOk: { fontSize: 18, color: AMBER, flexShrink: 0 },
};

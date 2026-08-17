import React, { useState, useEffect, useRef } from "react";
import ServisEkrani from "./ServisEkrani.jsx";
import DPPEkrani from "./DPPEkrani.jsx";
import { CIHAZLAR, MARKALAR, markalarForCihaz } from "./constants.js";
import CihazIkon from "./cihaz-ikonlari.jsx";
import BenservisLogo from "./BenservisLogo.jsx";
import AnaEkranaEkle from "./AnaEkranaEkle.jsx";
import TelefonaEkleBlok from "./TelefonaEkleBlok.jsx";
import AnaSayfaVitrin from "./AnaSayfaVitrin.jsx";
import { rehberBul, ZORLUK_TR } from "./onarim-rehberleri.js";
import { track } from "@vercel/analytics";
import { SEED } from "./tarife-seed.js";
import { seedEslestir } from "./seed-eslesme.js";

// YK #35 ŞART 2 — HUNİYİ UÇTAN UCA BAĞLA. `/tamir/` sayfalarındaki "servis çağır"
// bağlantıları `?kaynak=tamir-<cihaz>` taşır ve orada `servis_cagir` olayı düşer; burada aynı
// etiket uygulamadaki teşhis/servis olaylarına `gelis` alanı olarak eklenir. Böylece
// "hata kodu sayfasından gelen kullanıcı gerçekten servis çağırdı mı" ölçülebilir hâle gelir
// (kurulun `rehber_click` ölü sayacı itirazının karşılığı).
// ⛔ Serbest metin ALINMAZ: yalnız [a-z0-9-] ve en fazla 32 karakter — analitiğe çöp ya da
// kişisel veri sızmasın; desene uymayan değer sessizce atılır.
const GELIS = (() => {
  try {
    const v = new URLSearchParams(window.location.search).get("kaynak") || "";
    return /^[a-z0-9-]{1,32}$/.test(v) ? v : "";
  } catch { return ""; }
})();


// YK #67 ② — BAĞLAMLI GİRİŞ. Tamir Merkezi yazısındaki kullanıcı cihazını VE belirtisini
// zaten söylemiş durumda; jenerik `/` linki bu kazanılmış bağlamı çöpe atıp onu sıfırdan
// "cihaz seç → belirti yaz" akışına düşürüyordu. Yazı CTA'ları artık
// `/?cihaz=<slug>&ariza=<slug>&k=blog-<slug>` açar ve form ön-dolu gelir.
// Slug sözlüğü UYDURULMAZ: `/tamir/` kategori slug'larıyla (ve kategori ikon dosya
// adlarıyla) aynı üretici — tek kaynak CIHAZLAR, ikinci bir cihaz listesi tutulmaz.
const slugla = (s) =>
  String(s).toLocaleLowerCase("tr").replace(/ı/g, "i").replace(/ş/g, "s").replace(/ğ/g, "g")
    .replace(/ü/g, "u").replace(/ö/g, "o").replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const CIHAZ_SLUG = Object.fromEntries(CIHAZLAR.map((c) => [slugla(c), c]));

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

// YK #68 ③ (Tolga, 15 Ağu: "cihaz seçili geliyor ama belirti yazılı gelmiyor") — DEEP-LINK
// BELİRTİ SÖZLÜĞÜ. #67'de `ariza` yalnız yukarıdaki hızlı-belirti ÇİPLERİNE eşleşebiliyordu;
// blog yazılarının çoğunun konusu hiçbir çipe oturmadığı için bağlam taşıyan 56 yazının
// 24'ünde `ariza` hiç üretilmiyor, belirti BOŞ açılıyordu (Tolga'nın açtığı
// `camasir-makinesi-tahliye-filtresi-temizleme` bunlardan biri).
// ⛔ ÇÖZÜM SÖZLÜĞÜ GENİŞLETMEK, SERBEST METNE AÇMAK DEĞİL: URL yine yalnız bir slug taşır,
// görünen metin uygulamanın KENDİ tablosundan gelir → "URL'den textarea'ya (dolayısıyla AI
// promptuna) rastgele metin taşınmaz" güvencesi #67'deki gibi aynen durur.
// Bu değerler ÇİP DEĞİLDİR (formdaki hızlı-belirti butonları `BELIRTILER`den gelir, değişmedi);
// yalnız blogdan gelen deep-link'i çözmeye yarar. Cihaz kapsamı korunur: bir belirti yalnız
// kendi cihazında geçerlidir, `?cihaz=klima&ariza=kurutmuyor` eşleşmez.
const EK_BELIRTI = {
  "Çamaşır Makinesi": ["Hata kodu veriyor", "Kötü kokuyor"],
  "Bulaşık Makinesi": ["Kurutmuyor", "Kötü kokuyor"],
  "Buzdolabı": ["Buzlanma yapıyor"],
};
const belirtiCoz = (cihaz, slug) =>
  [...(BELIRTILER[cihaz] || []), ...(EK_BELIRTI[cihaz] || [])].find((b) => slugla(b) === slug) || "";

// ⛔ `ariza` SERBEST METİN DEĞİL: yalnız o cihaza ait, yukarıda TANIMLI bir değerle
// eşleşirse uygulanır — `kaynak=`/UTM tarafındaki "serbest metin alınmaz" kuralıyla aynı çizgi.
// Eşleşmeyen `ariza` sessizce düşer, cihaz ön-seçimi yine de uygulanır (kırma).
// NOT: `BELIRTILER`den SONRA durmalı — modül yüklenirken çalışıyor.
const ONSECIM = (() => {
  try {
    const q = new URLSearchParams(window.location.search);
    const cihaz = CIHAZ_SLUG[(q.get("cihaz") || "").trim().toLowerCase()] || "";
    if (!cihaz) return { cihaz: "", belirti: "" };
    const a = (q.get("ariza") || "").trim().toLowerCase();
    return { cihaz, belirti: belirtiCoz(cihaz, a) };
  } catch { return { cihaz: "", belirti: "" }; }
})();

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
// göre (premium=üst, ekonomik=alt, orta=orta) + işçilik. Böylece aynı cihaz+arıza+marka HER
// ZAMAN aynı fiyat. Eşleşme mantığı `src/seed-eslesme.js` içinde (tam eşleşme → en spesifik
// kelime skoru → BERABERLİKTE null). ⛔ Belirsizlikte sessizce ilk satır SEÇİLMEZ; null döner
// ve çağıran AI'ın (referans tarifeye çıpalı) kendi tahminine düşer — YK Kararı #38, 4 Ağu 2026.

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
  const [cihaz, setCihaz] = useState(ONSECIM.cihaz); // YK #67 ② — blogdan gelen bağlam
  const [marka, setMarka] = useState("");
  const [markaDiger, setMarkaDiger] = useState(""); // "Diğer" seçilince elle yazılan marka (veri toplama)
  const efektifMarka = (marka === "Diğer" && markaDiger.trim()) ? markaDiger.trim() : marka;
  const [yas, setYas] = useState("");
  const [belirti, setBelirti] = useState(ONSECIM.belirti); // YK #67 ② — blogdan gelen bağlam
  const BELIRTI_MAX = 300; // belirti karakter limiti (maxLength + sayaç + ses kırpma tek kaynak)
  const [sonuc, setSonuc] = useState(null);
  const [sssAcik, setSssAcik] = useState(null); // ana sayfa SSS akordeon açık indeksi
  const [hataMsg, setHataMsg] = useState("");
  const [kopyalandi, setKopyalandi] = useState(false);
  const [showServisler, setShowServisler] = useState(false);
  const [teshisLogId, setTeshisLogId] = useState(null); // anonim teşhis log id (konum iliştirmek için)
  // Sunucunun IP'den tahmin ettiği il (Vercel coğrafi başlığı; izin istemi YOK, çerez YOK).
  // İki yerde kullanılır: CTA'yı kişiselleştirmek + servis ekranında il seçicisini ön-seçmek.
  const [ipIl, setIpIl] = useState(null);
  const [showDPP, setShowDPP] = useState(false);
  const [dppInitialSeriNo, setDppInitialSeriNo] = useState("");

  // --- Sesli girdi (STT) — ses SAKLANMAZ: kaydet → /api/stt (Whisper) → belirtiye ekle ---
  const [sesDurumu, setSesDurumu] = useState("bosta"); // "bosta" | "kaydediyor" | "isliyor"
  const mediaRecRef = useRef(null);
  const sesChunksRef = useRef([]);
  const sesStreamRef = useRef(null);
  const sesTimerRef = useRef(null);
  // ——— SESSİZLİK ALGILAMA (Tolga, 15 Ağu: "sessizlik algılamayı yap") ———
  // Kullanıcı konuşmayı bırakınca kayıt KENDİLİĞİNDEN biter; "Durdur"a basmak
  // zorunlu değil. Neden bu yol seçildi (canlı/eş zamanlı yazma yerine):
  // Whisper batch çalışır, kelime kelime dönmez. Eş zamanlı yazı için ya tarayıcının
  // Web Speech API'si gerekirdi (ses Chrome'da Google'a gider → gizlilik metnimiz
  // "yalnızca metne çevrilir, saklanmaz" diyor; ayrıca TR'de marka/hata kodu
  // doğruluğu Whisper'ın altında) ya da streaming STT (WebSocket + dakika ücreti).
  // Asıl şikâyet "bitir demek zorunda kalmak"tı; bu, o şikâyeti sunucuya ve
  // gizlilik metnine hiç dokunmadan çözer. ⛔ Ses yine SAKLANMIYOR — buradaki
  // analiz tamamen tarayıcıda, canlı akış üzerinde; hiçbir yere gönderilmiyor.
  const vadRef = useRef(null); // { ctx, raf, kapat() }

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
      sesTimerRef.current = setTimeout(() => sesDurdur(), 60000); // 60sn üst sınır (sessizlik algılasa da bu kalır)
      vadBaslat(stream);
    } catch (e) {
      setHataMsg("Mikrofon izni gerekli — yazarak da anlatabilirsin.");
      setSesDurumu("bosta");
    }
  };

  // Mikrofon akışını TARAYICIDA dinler; konuşma başladıktan sonra ~2 sn sessizlik
  // olursa kaydı bitirir. Sabit eşik kullanmıyoruz: sessiz bir odayla açık pencere
  // kenarının zemin gürültüsü çok farklı — ilk ~400 ms zemin ölçülüp eşik ona göre
  // kuruluyor, yoksa gürültülü ortamda hiç durmaz ya da sessiz odada konuşmayı keser.
  const vadBaslat = (stream) => {
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return; // desteklemeyen tarayıcıda sessizce vazgeç — "Durdur" butonu zaten var
      const ctx = new AC();
      const src = ctx.createMediaStreamSource(stream);
      const an = ctx.createAnalyser();
      an.fftSize = 512;
      // Varsayılan 0.8 yumuşatma sessizliğe tepkiyi çok geciktiriyor: ölçümle
      // doğrulandı — konuşma bitince değer ölçüm başına yalnız ~7 birim düşüyor,
      // eşiğe inmesi ~20 sn buluyordu (özellikle sekme arka plandayken ölçüm
      // seyrekleşince). 0.3 ile 2-3 ölçümde iniyor; VAD'ın kendi 2 sn'lik
      // sessizlik penceresi zaten gürültüye karşı yeterli tamponu sağlıyor.
      an.smoothingTimeConstant = 0.3;
      src.connect(an);
      const veri = new Uint8Array(an.frequencyBinCount);
      // YALNIZ KONUŞMA BANDI (~80-4000 Hz) ortalanır. Tüm spektrumu (0-24 kHz)
      // ortalamak konuşma enerjisini ~7 kat seyreltiyordu: insan sesi ilk ~40 bin'de
      // toplanır, üstü neredeyse boştur; tamamının ortalaması alınınca konuşma ile
      // sessizlik arasındaki fark eşiğin altına düşüyordu.
      const binHz = ctx.sampleRate / an.fftSize;
      const bas = Math.max(1, Math.floor(80 / binHz));
      const bit = Math.min(an.frequencyBinCount - 1, Math.ceil(4000 / binHz));
      const t0 = performance.now();
      let zeminTop = 0, zeminN = 0, esik = 0;
      let konusmaBasladi = false, sessizlikBasi = 0, zamanlayici = 0;
      const SESSIZLIK_MS = 2000;   // konuşma bitti sayılması için gereken sessizlik
      const KALIBRASYON_MS = 400;  // zemin gürültüsü ölçüm penceresi

      const olc = () => {
        an.getByteFrequencyData(veri);
        let top = 0;
        for (let i = bas; i <= bit; i++) top += veri[i];
        const ort = top / (bit - bas + 1);
        const simdi = performance.now();

        if (simdi - t0 < KALIBRASYON_MS) {
          zeminTop += ort; zeminN += 1;                       // zemini öğren
        } else {
          if (!esik) {
            const zemin = zeminN ? zeminTop / zeminN : 0;
            // Zeminin üstünde belirgin bir pay + mutlak taban: fısıltıyı konuşma
            // sanmasın, ama normal konuşmayı da kaçırmasın.
            esik = Math.max(zemin * 1.8, zemin + 6, 10);
          }
          if (ort > esik) {
            konusmaBasladi = true; sessizlikBasi = 0;
          } else if (konusmaBasladi) {
            if (!sessizlikBasi) sessizlikBasi = simdi;
            else if (simdi - sessizlikBasi >= SESSIZLIK_MS) { sesDurdur(); return; }
          }
        }
      };
      // ⚠️ requestAnimationFrame DEĞİL, setInterval: rAF sekme arka plana alınınca
      // tamamen durur (ölçüldü: gizli sayfada 3 sn'de 0 tik, setInterval 11 tik).
      // Kullanıcı kayıt sürerken başka sekmeye geçerse rAF'la sessizlik hiç
      // algılanmaz, kayıt 60 sn üst sınıra kadar sürerdi.
      zamanlayici = setInterval(olc, 60);
      vadRef.current = {
        kapat() {
          clearInterval(zamanlayici);
          try { src.disconnect(); } catch { /* zaten kopmuş */ }
          try { ctx.close(); } catch { /* zaten kapalı */ }
        },
      };
    } catch { /* VAD kurulamazsa kayıt normal çalışır, kullanıcı elle durdurur */ }
  };
  const vadDurdur = () => { try { vadRef.current?.kapat(); } catch { /* yok say */ } vadRef.current = null; };
  // Kayıt sürerken sayfadan çıkılırsa AudioContext ve rAF döngüsü açık kalmasın.
  useEffect(() => () => vadDurdur(), []);

  const sesDurdur = () => {
    vadDurdur();
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
      sesFocusRef.current = true; // STT batch'tir, kelime-kelime değil: transkript textarea'ya düşünce odaklan + imleci sona al ki kullanıcı yanlışı düzeltip AYRI "Teşhis et"e bassın (otomatik teşhis YOK)
    } catch (e) {
      setHataMsg("Sesi anlayamadım — tekrar dene ya da yazarak anlat.");
    } finally {
      setSesDurumu("bosta");
    }
  };

  // Belirti textarea: elle (mouse) resize kapalı; yazdıkça veya chip ile içerik
  // değiştikçe otomatik uzar (min ~4 satır).
  // YK #69 koşu 3 — vitrinden forma iniş. Hero kutusu/kartı kullanıldığında kullanıcı
  // "bir şey oldu" geri bildirimi almalı; yoksa sayfa değişmemiş gibi görünüyor.
  const formRef = useRef(null);
  const formaKaydir = () => {
    requestAnimationFrame(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const belirtiRef = useRef(null);
  const sesFocusRef = useRef(false); // STT sonrası tek seferlik odak isteği (her tuş vuruşunda odak çalınmasın)
  useEffect(() => {
    const el = belirtiRef.current;
    if (!el) return;
    el.style.height = "auto";
    const kenarlik = el.offsetHeight - el.clientHeight; // border-box: kenarlık payı (içerik kırpılmasın)
    el.style.height = Math.max(el.scrollHeight + kenarlik, 116) + "px";
    // Sesli anlat sonrası: kullanıcı yanlış transkripti hemen düzeltebilsin diye
    // textarea'ya odaklan ve imleci metnin SONUNA al (mobilde klavye açılır).
    if (sesFocusRef.current) {
      sesFocusRef.current = false;
      el.focus();
      const son = el.value.length;
      try { el.setSelectionRange(son, son); } catch { /* setSelectionRange bazı tarayıcılarda atabilir */ }
    }
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
    // Offline (ör. ana ekrandan uçak modunda açıldı): teşhis AI çağrısı gerektirir — sessiz
    // hata yerine net mesaj (YK #26 / PWA planı adım 3, IT gizlilik+UX kuralı).
    if (typeof navigator !== "undefined" && navigator.onLine === false) {
      setHataMsg("Teşhis için internet gerekiyor. Bağlanınca tekrar dene — kayıtlı servis listesi çevrimdışı da açılır.");
      return;
    }
    setHataMsg("");
    setAdim("loading");
    track("diagnose_start", { cihaz, marka, gelis: GELIS }); // funnel: kullanıcı teşhis istedi

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
      // (kelime skoru ile eşleşir). Eşleşme yoksa YA DA iki satır beraberse (belirsiz) AI
      // beklenen'ine düşülür — yanlış satırdan fiyat üretilmez. gerek_yok'ta atla.
      if (parsed && parsed.kararOnerisi !== "gerek_yok" && Array.isArray(parsed.olasiArizalar) && parsed.olasiArizalar.length) {
        const kademe = markaKademe(efektifMarka);
        const f = parsed.olasiArizalar;
        const e1 = seedEslestir(cihaz, parsed.seedRef || f[0]?.ad, kademe);
        const e2 = f[1] ? seedEslestir(cihaz, f[1].ad, kademe) : { beklenen: null, durum: "yok", adaylar: [] };
        const p1 = e1.beklenen, p2 = e2.beklenen;
        // Belirsizlik SESSİZ kalmasın: kaç vakada iki satır berabere kalıyor ölçülsün.
        // ⛔ Serbest metin (kullanıcı/AI cümlesi) GÖNDERİLMEZ — yalnız cihaz + aday sayısı.
        if (e1.durum === "belirsiz") { try { track("seed_belirsiz", { cihaz, aday: e1.adaylar.length }); } catch {} }
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
        }).then((r) => (r.ok ? r.json() : null)).then((d) => {
          if (d?.id) setTeshisLogId(d.id);
          if (d?.il) setIpIl(d.il); // konum köprüsü — sunucu tahmini, kullanıcıya hiç sorulmadı
        }).catch(() => {});
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
          baslangicIl={ipIl}
        />
      )}
      {showDPP && (
        <DPPEkrani
          initialSeriNo={dppInitialSeriNo}
          teshisContext={adim === "sonuc" ? { cihaz, marka: efektifMarka } : null}
          onKapat={() => { setShowDPP(false); setDppInitialSeriNo(""); }}
        />
      )}
      <style>{CSS}</style>
      <div style={s.grain} />

      <header style={s.header}>
        {/* Kurumsal logo + motto — en üstte. Logoya tıkla → ana sayfa (sıfırla). */}
        <button onClick={sifirla} aria-label="Ana sayfaya dön" style={s.logoBtn}>
          <BenservisLogo style={s.brandLogo} />
        </button>
        {/* YK #69 koşu 3: form ekranında bu iki satır HERO'ya devredildi — aynı vaadi
            iki kez söylemek "basic" hissinin kaynaklarından biriydi. Sonuç/hata
            ekranlarında (hero görünmezken) eskisi gibi duruyorlar. */}
        {adim !== "form" && <p style={s.tagline}>Cihazın bozuldu, belirtisini yaz — teşhisi ve tahmini maliyeti söyleyelim.</p>}
        <div style={{ ...s.trustRow, display: adim === "form" ? "none" : s.trustRow.display }}>
          <span style={s.trustItem}><span style={{ color: "#2563EB", fontWeight: 800 }}>✓</span> Ücretsiz</span>
          <span style={s.trustItem}><span style={{ color: "#2563EB", fontWeight: 800 }}>✦</span> AI destekli</span>
          <span style={s.trustItem}><span style={{ color: "#F5A623" }}>★</span> Google puanlı servisler</span>
        </div>
        {/* NOT (YK Kararı #32, 2 Ağu 2026): buradaki satır içi "Bilgi Merkezi →" linki
            SSS'nin üstündeki 4'lü buton ızgarasına TAŞINDI — mükerrer link bırakılmadı. */}
      </header>

      {/* YK #69 koşu 3 — ANA SAYFA VİTRİNİ (yalnız form ekranında; sonuç/servis
          ekranlarında görünmez). Hero kutusu YENİ AKIŞ AÇMAZ: yazdığını aşağıdaki
          mevcut formun `belirti` alanına indirir, cihazı tahmin edebilirse seçer ve
          forma kaydırır. Teşhis akışının kendisine tek satır dokunulmadı. */}
      {adim === "form" && (
        <AnaSayfaVitrin
          onCihazSec={(c) => {
            setCihaz(c);
            if (marka && marka !== "Diğer" && !markalarForCihaz(c).includes(marka)) setMarka("");
            formaKaydir();
          }}
          onFormaGit={formaKaydir}
          onDertYaz={(metin, tahminCihaz) => {
            setBelirti(metin.slice(0, BELIRTI_MAX));
            if (tahminCihaz) {
              setCihaz(tahminCihaz);
              if (marka && marka !== "Diğer" && !markalarForCihaz(tahminCihaz).includes(marka)) setMarka("");
            }
            formaKaydir();
          }}
        />
      )}

      {(adim === "form" || adim === "hata") && (
        <div ref={formRef} style={s.card}>
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

          {/* Sesli girdi KVKK ipucu (YK #45, teslim belgesi §4-4). Yalnız mikrofona dokunmadan
              ÖNCE görünür: kayıt başlayınca kullanıcı zaten karar vermiştir, o anda metin
              göstermek gürültü olur. Buradaki söz /gizlilik'teki tabloyla birebir aynı —
              "ses işlenir, saklanmaz" (transcribe-and-discard). */}
          {sesDurumu === "bosta" && (
            <p style={{ fontSize: 12, color: "#94A3B8", margin: "8px 0 0", lineHeight: 1.5 }}>
              🎤 Ses kaydınız yalnızca metne çevrilir, saklanmaz.
            </p>
          )}

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

      {/* Ana sayfa alt bölümü — yalnız form ekranında: gezinme ızgarası + sık sorulanlar (SSS) */}
      {adim === "form" && (
        <>
          {/* Gezinme ızgarası (YK Kararı #32, 2 Ağu 2026 — kalıcı): SSS'nin ÜSTÜNDE, dört buton
              AYNI EBAT. Mobilde 2×2, ≥560px'te tek sıra 4'lü (CSS: .nav-izgara).
              "Yakın Servisler" yeni bir sayfa açmaz — mevcut servis dizini ekranını (ServisEkrani)
              teşhissiz açar; cihaz seçilmediyse API kategori filtresi uygulamaz (tüm dizin). */}
          <nav className="nav-izgara" style={{ position: "relative", zIndex: 1, marginTop: 26 }} aria-label="Site bölümleri">
            {/* İKONLAR (2 Ağu düzeltmesi — Tolga: "Tamir Merkezi ikonu çirkin, ne olduğu belli değil"):
                dördü de 21→26px, çizgi 1.7→1.8. Boyut tek başına değil TUTARLI büyütüldü;
                ikon kutuyu köşeden köşeye doldursun diye viewBox 24 sabit kaldı. */}
            <a href="/blog/" className="nav-kart" style={s.navKart}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={s.navIkon} aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
              <span style={s.navKartText}>Bilgi Merkezi</span>
            </a>
            <a href="/tamir/" className="nav-kart" style={s.navKart}>
              {/* İNGİLİZ ANAHTARI — eskisi 12x12'lik alana sıkışmış, jaw'ı kapalı, uzaktan
                  "tamir" okunmayan bir çizgi yumağıydı. Yenisi kutuyu köşeden köşeye (2,22)→(22,2)
                  kaplar: açık ağızlı anahtar başı + kalın sap. Tek büyük alet, çapraz ikili
                  değil — 26px'te iki alet birbirine giriyor, tek anahtar net okunuyor. */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={s.navIkon} aria-hidden="true"><path d="M14.6 6.4a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.8 3.8Z" /></svg>
              <span style={s.navKartText}>Tamir Merkezi</span>
            </a>
            {/* 3. buton (2 Ağu, Tolga talimatı): "Kullanım Kılavuzları" ile "Yakın Servisler"
                YER DEĞİŞTİRDİ. Yeni sıra: Bilgi Merkezi · Tamir Merkezi · Kullanım Kılavuzları ·
                Yakın Servisler. YALNIZ konum değişti — etiket, hedef ve ikon aynı kaldı.
                ("Hakkımızda" ızgarada değil ama FOOTER'DA DURUYOR — güven sayfası kaybolmasın.)
                Hedef /kilavuzlar/ 2 Ağu'da DOLDU (YK #34 Faz 4): marka bazlı, HTTP 200
                doğrulanmış resmî kılavuz linkleri; eşik aşıldığı için noindex kalktı. */}
            <a href="/kilavuzlar/" className="nav-kart" style={s.navKart}>
              {/* Dört ikonun EN ZAYIFI buydu: ince iki kısa çizgili defter, kutunun sağ-alt
                  çeyreği boş kalıyor ve Bilgi Merkezi'nin kapalı kitabıyla karışıyordu.
                  AÇIK kitap ile değişti — kutuyu yatayda doldurur, kapalı kitaptan ilk bakışta
                  ayrılır (dik dikdörtgen vs. yatay iki sayfa). */}
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={s.navIkon} aria-hidden="true"><path d="M12 7.5v13" /><path d="M3 18.5a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3H3Z" /></svg>
              <span style={s.navKartText}>Kullanım Kılavuzları</span>
            </a>
            {/* 4. buton: Yakın Servisler — tek <button> (diğer üçü <a>), servis dizinini
                teşhissiz açar. Izgaranın SONUNA taşındı; davranışı değişmedi. */}
            <button
              type="button"
              className="nav-kart"
              style={{ ...s.navKart, fontFamily: "inherit" }}
              onClick={() => { track("servis_click", { kaynak: "anasayfa_izgara", gelis: GELIS }); setShowServisler(true); }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={s.navIkon} aria-hidden="true"><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>
              <span style={s.navKartText}>Yakın Servisler</span>
            </button>
          </nav>
          <div style={{ position: "relative", zIndex: 1, marginTop: 26 }}>
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
          {/* PWA duyurusu — site metni (YK #26 adım 5/5): pasif blok, ipucu şeridiyle çakışmaz */}
          <TelefonaEkleBlok />
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
          {/* Garanti uyarısı — 0-2 yaş cihaz büyük olasılıkla garanti kapsamında; ücretli servisten önce yetkiliyle görüşmeyi öner (kozmetik/tamir gerekmez durumunda gösterme) */}
          {yas === "0-2 yıl" && sonuc.kararOnerisi !== "gerek_yok" && (
            <div style={{ display: "flex", alignItems: "flex-start", gap: 7, background: "#EFF4FF", border: "1px solid #DBEAFE", borderRadius: 10, padding: "11px 13px", marginBottom: 14, fontSize: 12.5, color: "#475569", lineHeight: 1.45 }}>
              <span style={{ fontSize: 14, flexShrink: 0 }} aria-hidden="true">🛡</span>
              <span><strong style={{ color: "#2563EB" }}>Cihazın büyük olasılıkla garanti kapsamında.</strong> Ücretli bir servise gitmeden önce, cihazı aldığın yerin yetkili servisiyle görüşmeni öneririz — arıza garanti kapsamındaysa onarım ücretsiz olabilir.</span>
            </div>
          )}
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

          {/* Aciliyet — tam genişlik, TEK SATIR (başlık + rozet + gerekçe yan yana) */}
          <div style={s.acilRow}>
            <div style={s.acilHead}>Aciliyet</div>
            <span style={{ ...s.acilBadge, color: acilRenk[sonuc.aciliyet] || acilRenk.belirsiz, borderColor: acilRenk[sonuc.aciliyet] || acilRenk.belirsiz }}>{(sonuc.aciliyet || "belirsiz").toUpperCase()}</span>
            {sonuc.aciliyetNot && <p style={s.acilNot}>{sonuc.aciliyetNot}</p>}
          </div>

          {sonuc.ekSorular?.length > 0 && (
            <div style={s.cardSoft}>
              <div style={s.secHeadSoft}>Daha kesin teşhis için</div>
              {sonuc.ekSorular.map((q, i) => <p key={i} style={s.soru}>• {q}</p>)}
              <button style={s.linkBtn} onClick={detayEkle}>Detay ekle ve tekrar sor</button>
            </div>
          )}

          {/* Kendin çözmek ister misin? — "Tamir ettirmek ister misin?" ile AYNI format.
              İki güvenlik kapısı korunuyor: yalnız kendinCozebilirMi.mumkun=true iken ve
              yalnız küratörlü haritada rehber karşılığı varsa çıkar; ikisi yoksa blok yok. */}
          {(() => {
            if (!sonuc.kendinCozebilirMi?.mumkun) return null;
            const r = rehberBul(cihaz, sonuc.olasiArizalar?.[0]?.ad);
            if (!r) return null;
            return (
              <div style={s.faz2}>
                <div>
                  <div style={s.faz2Head}>Kendin çözmek ister misin?</div>
                  {/* Alt satır bilerek KISA: iki kart aynı boyda dursun (Tolga, 31 Tem).
                      "İngilizce" ibaresi YALNIZ dış (iFixit) rehberde — kendi rehberimiz Türkçe. */}
                  <div style={s.faz2Sub}>
                    {r.kendi ? "Türkçe" : "İngilizce"} · {ZORLUK_TR[r.zorluk] || r.zorluk} · {r.sure}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <a
                    href={r.url}
                    {...(r.kendi ? {} : { target: "_blank", rel: "noopener noreferrer nofollow" })}
                    style={{ ...s.faz2Btn, opacity: 1, display: "inline-block", textDecoration: "none", textAlign: "center" }}
                    onClick={() => track("rehber_click", { cihaz, rehber: r.baslik, kaynak: r.kendi ? "benservis" : "ifixit", gelis: GELIS })}
                  >
                    🔧 Rehberi Aç
                  </a>
                </div>
              </div>
            );
          })()}

          <div style={s.faz2}>
            <div>
              <div style={s.faz2Head}>{sonuc.kararOnerisi === "gerek_yok" ? "Yine de kontrol ettirmek istersen" : "Tamir ettirmek ister misin?"}</div>
              {/* Konum köprüsü (13 Ağu YK ②): il sunucuda IP'den biliniyorsa CTA'yı
                  somutlaştır — "konumuna göre" soyut vaadi yerine ilin adı. Bilinmiyorsa
                  eski metin aynen kalır. ⛔ "açık/müsait servis" DENMEZ: müsaitlik verisi yok. */}
              <div style={s.faz2Sub}>{ipIl ? `${ipIl} ve çevresindeki servisler · Direkt arama` : "Konumuna göre sıralar · Direkt arama"}</div>
              {sonuc.kararOnerisi === "belirsiz" && <div style={{ fontSize: 12.5, color: "#EA580C", marginTop: 4, fontWeight: 600 }}>Arıza net değil — kesin teşhis için yerinde servis önerilir.</div>}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <button style={{ ...s.faz2Btn, opacity: 1 }} onClick={() => { track("servis_click", { cihaz, marka, gelis: GELIS }); setShowServisler(true); }}>
                📍 Servis Bul
              </button>
            </div>
          </div>

          <div style={s.altBtns}>
            <button style={s.copyBtn} onClick={kopyala}>{kopyalandi ? "✓ Kopyalandı" : "⧉ Özeti kopyala"}</button>
            <button style={s.reset} onClick={sifirla}>↺ Yeni arıza</button>
          </div>
          {/* PWA ipucu (YK #26): yalnız sonuç ekranında + 2. ziyaretten sonra; kendi içinde eleniyor */}
          <AnaEkranaEkle />
        </div>
      )}

      <footer style={s.footer}>
        <div style={s.footBrand}>Benservis · Bil, gör, çağır.</div>
        {/* "Bilgi Merkezi" 2 Ağu'da footer'dan ÇIKARILDI (Tolga): artık ana sayfa ızgarasının
            BİRİNCİ butonu, footer'da ikinci kez durması mükerrerdi. Hakkımızda ve SERBİS'te
            Doğrula KALIR — Hakkımızda ızgarada yok, tek erişim noktası burası.
            2 Ağu (Tolga, ②): araya "Sürdürülebilirlik" girdi. Sıra BİLEREK
            Hakkımızda → Sürdürülebilirlik → SERBİS'te Doğrula: önce biz kimiz, sonra neden
            varız, en sonda SİTE DIŞINA çıkan doğrulama linki (dış link satırın sonunda durur).
            Punto 12 → 14.5 (Tolga, ①): footer'ın tek gezinme satırı, okunur olmalı; marka
            satırı 14 Fraunces olduğu için hiyerarşi bozulmuyor (o serif, bu mavi+600).
            Ayırıcı (·) düzeni: her ayırıcı KENDİ linkiyle aynı nowrap kutusunda ve linkin
            ARDINDAN geliyor → 375px'te satır sarınca ayırıcı bir sonraki satırın başında
            öksüz kalmıyor, sonda da boşta ayırıcı yok. */}
        <div style={s.footNav}>
          <span style={s.footNavUnit}><a href="/blog/hakkimizda/" style={s.footLink}>Hakkımızda</a><span style={s.footSep} aria-hidden="true">·</span></span>
          <span style={s.footNavUnit}><a href="/blog/kategori/surdurulebilirlik/" style={s.footLink}>Sürdürülebilirlik</a><span style={s.footSep} aria-hidden="true">·</span></span>
          <span style={s.footNavUnit}><a href="https://www.servis.gov.tr/Genel/Sorgu" target="_blank" rel="noopener noreferrer" style={s.footLink}>SERBİS'te Doğrula</a></span>
        </div>
        {/* KVKK paketi (YK #45, 14 Ağu) — hukuk linkleri gezinme satırının ALTINDA, kendi
            satırında ve daha küçük puntoda duruyor. Gerekçe: Hakkımızda/Sürdürülebilirlik/
            SERBİS pazarlama gezinmesi, bunlar zorunlu hukuk linkleri; aynı satıra karışırsa
            gezinme satırı 375px'te üçüncü satıra sarıyor ve iki işlev birbirini yiyor.
            Erişilebilir olmaları yeter — arananınca bulunur, aranmayanı yormaz. */}
        <div style={s.footHukuk}>
          <span style={s.footNavUnit}><a href="/gizlilik/" style={s.footHukukLink}>Gizlilik</a><span style={s.footSep} aria-hidden="true">·</span></span>
          <span style={s.footNavUnit}><a href="/kullanim-kosullari/" style={s.footHukukLink}>Kullanım Koşulları</a></span>
        </div>
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

const INK = "#1E293B", CREAM = "#F8FAFC", AMBER = "#2563EB";
// Minimal & premium paleti
const BG = "#F8FAFC", SURFACE = "#FFFFFF", MUTED = "#475569", FAINT = "#94A3B8", HAIR = "#E2E8F0";

// Ana sayfa "Sık sorulanlar" — görünen metin ve index.html FAQPage JSON-LD BİRE BİR aynı olmalı.
// YAPI (hibrit): ilk 2 = evergreen güven soruları (SABİT). Son 3 = HAFTALIK belirti soruları,
// FE koşusunda content/blog/ taramasından en çok işlenen sorunlara göre güncellenir; her
// güncellemede index.html'deki FAQPage JSON-LD de birebir yenilenmeli. Son güncelleme: 14 Ağu 2026.
const SSS = [
  // — evergreen (sabit) —
  { s: "Teşhis için ücret ödüyor muyum?", c: "Hayır, tamamen ücretsiz. Cihazını ve belirtiyi yaz; olası arızayı ve tahmini maliyeti anında öğren." },
  { s: "Sonuçtaki fiyat kesin mi?", c: "Tahminidir; parça ve işçilik dahil bir aralık verir. Kesin fiyat, yerinde tespitte netleşir." },
  // — haftalık belirti soruları (blog verisinden; 14 Ağu taraması, frontmatter `category`
  //   sayımı: çamaşır 13 · bulaşık 11 · kombi 9 · klima 8 · buzdolabı 8 · fırın/ocak 3 —
  //   7 Ağu'ya göre DEĞİŞMEDİ; 13 Ağu'nun iki yeni taslağı henüz repoya girmedi).
  //   ÇIKAN: kombi sıcak su gelmiyor. İKİ GEREKÇE ÜST ÜSTE BİNDİ:
  //     ① 4 Ağu'dan beri sette — 10 gün, rotasyon geçmişindeki en uzun görev süresi.
  //     ② Tolga, 13 Ağu: "kış/kombi ekimden önce yazma artık" — SSS metni yeni üretim
  //        değil ama ana sayfanın en görünür kombi yüzeyi; talimatın yönüyle aynı yere bakar.
  //   GİREN: bulaşık makinesi temiz yıkamıyor — külliyatın İKİNCİ büyük kümesi (11 yazı) ve
  //   rotasyon başladığından beri hiç temsil edilmedi; kaynak yazı `bulasik-makinesi-temiz-yikamiyor`. —
  { s: "Buzdolabı çalışıyor ama soğutmuyor, önce neye bakmalıyım?", c: "Önce sıcaklık ayarına bak: dolap yaklaşık 4, buzluk yaklaşık eksi 18 derece olmalı — ayar yanlışlıkla değişmiş olabilir. Sonra kapı contasını dene; kapağa bir kağıt kıstırıp çek, direnç hissetmiyorsan conta sızdırıyordur. Arkadaki ve alttaki tozu da süpür, dolabı duvardan 5-10 cm uzak tut — tozlu kondenser ısıyı dışarı atamaz. Ayar doğru, conta sağlam ve arka temizken hâlâ soğutmuyorsa ya da buzluk soğuk olduğu hâlde dolap soğumuyorsa belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren." },
  { s: "Bulaşık makinesi temiz yıkamıyor, tabaklar kirli çıkıyor — önce neye bakmalıyım?", c: "Önce alt ve üst püskürtme kollarını çıkar: deliklerini kürdanla aç, takınca elinle çevirip serbestçe döndüklerinden emin ol — su bulaşığa ulaşamıyorsa en sık sebep budur. Sonra tabandaki filtreyi çıkarıp yıka, tuz ve parlatıcı haznelerini doldur; tuz bitince kireç, parlatıcı bitince leke bırakır. Bulaşıkları da üst üste bindirmeden diz, derin kapları ters çevir. Kollar ve filtre temiz, tuz ile parlatıcı tamken hâlâ kirli çıkıyorsa ya da su hiç ısınmıyorsa sıra rezistansa gelir — belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren." },
  { s: "Çamaşır makinesi su atmıyor, çamaşırlar ıslak çıkıyor — önce neye bakmalıyım?", c: "Önce makinenin alt kapağındaki tahliye filtresini çıkarıp temizle; su atmama şikâyetinin en sık sebebi budur. Altına havlu ve geniş bir kap koy, çünkü içeride kalan su filtreyi açar açmaz gelir. Sonra arkadaki tahliye hortumunu kontrol et: bükülmüş, ezilmiş ya da giderin içinde çok derine itilmiş olabilir. Filtre temiz ve hortum açıkken makine hâlâ suyu boşaltmıyor ya da santrifüje hiç geçmiyorsa sıra tahliye pompasına gelir — belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren." },
];

const CSS = `
* { box-sizing: border-box; }
/* Zemin BODY'de sabitlenir: wrap 600px'lik bir kolon, gövdenin arka planı
   tanımsız kaldığı için geniş ekranda kolonun iki yanı tarayıcının varsayılanına
   (koyu temada siyaha) düşüyordu. Hero full-bleed olunca bu daha da göze battı. */
html, body { margin: 0; overflow-x: hidden; background: ${CREAM}; }
/* YK #69 koşu 1/cila ⑤ — TEK ETKİLEŞİM DİLİ (blog şablonuyla aynı sözleşme).
   Form alanlarının odak halkası vardı ama buton/link'lerde yoktu: klavyeyle gezen
   kullanıcı cihaz kartları ve CTA'lar arasında nerede olduğunu göremiyordu.
   Renkler ve hover davranışı DEĞİŞMİYOR — yalnız ortak geçiş süresi + görünür odak.
   :where() özgüllüğü 0 → mevcut inline/CSS kurallarının hiçbirini ezmez. */
:where(a, button) { transition: background-color .15s ease, border-color .15s ease, color .15s ease, box-shadow .15s ease, transform .15s ease; }
:where(a, button, [tabindex]):focus-visible { outline: 2px solid ${AMBER}; outline-offset: 2px; border-radius: 10px; }
@media (prefers-reduced-motion: reduce) { * { transition-duration: .01ms !important; animation-duration: .01ms !important; } }

/* YK #69 koşu 3 ⑥ — MOBİL STICKY CTA. Masaüstünde HİÇ görünmez (hero kutusu zaten
   ekranda); mobilde ise yalnız hero kaydırılıp geçildikten sonra belirir. */
.vitrin-sticky { display: none; }
@media (max-width: 640px) {
  .vitrin-sticky[data-gorunur="1"] {
    display: block; position: fixed; left: 12px; right: 12px; bottom: 12px; z-index: 40;
    padding: 15px 18px; border: none; border-radius: 14px;
    background: ${AMBER}; color: #fff; font-family: inherit; font-size: 15.5px; font-weight: 700;
    box-shadow: 0 10px 30px -8px rgba(37,99,235,.55); cursor: pointer;
  }
}
/* Vitrin ızgaraları dar ekranda ikişerli/tek sıraya iner. */
@media (max-width: 520px) {
  .vitrin-kartlar { grid-template-columns: repeat(2, 1fr) !important; }
  .vitrin-sayilar { grid-template-columns: repeat(2, 1fr) !important; }
}
@keyframes anspin { to { transform: rotate(360deg); } }
@keyframes anrise { from { opacity:0; transform: translateY(10px);} to {opacity:1; transform:none;} }
input:focus, textarea:focus, select:focus { outline: none; border-color: ${AMBER} !important; box-shadow: 0 0 0 3px rgba(37,99,235,.13); }
button { cursor: pointer; font-family: 'Hanken Grotesk', sans-serif; }
/* Ana sayfa gezinme ızgarası (YK #32): mobilde 2×2, geniş ekranda tek sıra 4'lü.
   grid + 1fr → dört kart HER ZAMAN aynı ebatta; metin uzunluğu boyutu değiştirmez. */
.nav-izgara { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
@media (min-width: 560px) { .nav-izgara { grid-template-columns: repeat(4, 1fr); } }
.nav-kart:hover { background: rgba(37,99,235,.10) !important; border-color: rgba(37,99,235,.45) !important; transform: translateY(-1px); }
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
  // Gezinme ızgarası kartı (YK #32) — dördü de birebir aynı kutu: eşit yükseklik (minHeight),
  // ortalanmış ikon + tek satır etiket. <a> ve <button> aynı stili paylaşır.
  // İkon 21→26 büyüdüğü için minHeight 84→92: iki satırlık etiket ("Kullanım Kılavuzları")
  // 375px'te de kırpılmadan sığsın, dört kutu eşit yükseklikte kalsın.
  navKart: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 7, width: "100%", minHeight: 92, padding: "12px 6px", borderRadius: 14, background: "rgba(37,99,235,.06)", color: AMBER, fontSize: 13, fontWeight: 700, textDecoration: "none", textAlign: "center", border: "1.5px solid rgba(37,99,235,.22)", transition: "background .15s ease, border-color .15s ease, transform .15s ease", boxSizing: "border-box" },
  // flexShrink:0 — dar kutuda flex ikonu ezip ikonu bozmasın (26px sabit kalır).
  navIkon: { flexShrink: 0 },
  navKartText: { fontSize: 12.5, fontWeight: 700, lineHeight: 1.25 },
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
  acilBadge: { display: "inline-block", fontSize: 13, fontWeight: 700, letterSpacing: ".05em", padding: "6px 12px", borderRadius: 8, borderWidth: "1.5px", borderStyle: "solid", background: SURFACE, flexShrink: 0 },
  // Aciliyet artık tam genişlikte TEK SATIR: başlık + rozet + gerekçe yan yana akar.
  // Dar ekranda gerekçe alta iner (flexWrap) — rozet ve başlık asla kırılmaz.
  acilRow: { position: "relative", zIndex: 1, background: SURFACE, border: `1px solid ${HAIR}`, borderRadius: 18, padding: "14px 20px", marginTop: 14, display: "flex", alignItems: "center", flexWrap: "wrap", gap: 12, boxShadow: "0 1px 2px rgba(30,41,59,.04), 0 12px 28px -22px rgba(30,41,59,.22)", animation: "anrise .4s ease both" },
  acilHead: { fontFamily: "'Fraunces', serif", fontSize: 17, fontWeight: 600, flexShrink: 0 },
  acilNot: { fontSize: 13, color: "#475569", margin: 0, lineHeight: 1.45, flex: 1, minWidth: 180 },
  soru: { fontSize: 13.5, color: "#64748B", margin: "0 0 6px", lineHeight: 1.4 },
  linkBtn: { marginTop: 8, background: "none", border: "none", color: AMBER, fontWeight: 700, fontSize: 13.5, padding: 0, textDecoration: "underline" },
  faz2: { position: "relative", zIndex: 1, marginTop: 16, background: INK, color: CREAM, borderRadius: 18, padding: "18px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 },
  faz2Head: { fontFamily: "'Fraunces', serif", fontSize: 17, fontWeight: 600 },
  faz2Sub: { fontSize: 13, color: "#94A3B8", marginTop: 3 },
  // İki CTA butonu (Rehberi Aç / Servis Bul) AYNI EBATTA olmalı (Tolga, 31 Tem):
  // sabit minWidth + ortalanmış metin → metin uzunluğu buton boyunu değiştirmez.
  faz2Btn: { background: AMBER, color: "#fff", border: "none", borderRadius: 11, padding: "11px 15px", fontWeight: 700, fontSize: 14, opacity: .85, whiteSpace: "nowrap", minWidth: 138, textAlign: "center", boxSizing: "border-box", lineHeight: 1.3 },
  altBtns: { display: "flex", gap: 10, marginTop: 16 },
  copyBtn: { flex: 1, padding: "12px", borderRadius: 12, border: `1.5px solid ${AMBER}`, background: "rgba(37,99,235,.06)", color: AMBER, fontSize: 14.5, fontWeight: 700 },
  reset: { flex: 1, padding: "12px", borderRadius: 12, border: "1.5px solid #CBD5E1", background: "transparent", color: INK, fontSize: 14.5, fontWeight: 600 },
  footer: { position: "relative", zIndex: 1, textAlign: "center", marginTop: 30, paddingTop: 22, borderTop: `1px solid ${HAIR}` },
  footBrand: { fontFamily: "'Fraunces', serif", fontSize: 14, fontWeight: 600, color: MUTED },
  footSub: { fontSize: 12, color: FAINT, marginTop: 6 },
  // Footer gezinme satırı (Hakkımızda · Sürdürülebilirlik · SERBİS'te Doğrula).
  // ÖNCE: footSub'ı paylaşıyordu → 12px. SONRA: kendi stili, 14px (Tolga ①).
  // Slogan satırı ("AI destekli teşhis…") 12px'te KALDI; büyüyen yalnız tıklanan satır.
  // Neden tam 14: üç linkin doğal genişliği 375px'te 14px'te 325/335px (tek satır),
  // 14.5px'te 339px → sarıyor ve satır sonunda öksüz "·" kalıyordu. 14 hem okunur
  // hem tek satır. Daha dar ekranda (≤360px) sarma flexWrap ile ortalı bozulmadan olur.
  footNav: { display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "baseline", columnGap: 6, rowGap: 2, fontSize: 14, lineHeight: 1.6, marginTop: 8 },
  footNavUnit: { display: "inline-flex", alignItems: "baseline", gap: 6, whiteSpace: "nowrap" },
  footSep: { color: FAINT },
  footLink: { color: "#2563EB", textDecoration: "none", fontWeight: 600 },
  // Hukuk satırı: aynı ızgara, ama 12.5px ve nötr renkte — gezinme satırıyla yarışmasın.
  footHukuk: { display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "baseline", columnGap: 6, rowGap: 2, fontSize: 12.5, lineHeight: 1.6, marginTop: 6 },
  footHukukLink: { color: FAINT, textDecoration: "none", fontWeight: 600 },
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

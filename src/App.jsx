import React, { useState, useEffect, useRef } from "react";
import ServisEkrani from "./ServisEkrani.jsx";
import DPPEkrani from "./DPPEkrani.jsx";
import { CIHAZLAR, MARKALAR, markalarForCihaz, cihazSlug, tabloBul } from "./constants.js";
import CihazIkon from "./cihaz-ikonlari.jsx";
import BenservisLogo from "./BenservisLogo.jsx";
import AnaEkranaEkle from "./AnaEkranaEkle.jsx";
import AnaSayfaVitrin from "./AnaSayfaVitrin.jsx";
import { rehberBul, ZORLUK_TR } from "./onarim-rehberleri.js";
import { track } from "@vercel/analytics";
import { SEED } from "./tarife-seed.js";
import { seedEslestir } from "./seed-eslesme.js";
import { NAVY as INK, BG as CREAM, BLUE as AMBER, BG, SURFACE, MUTED, FAINT, HAIR } from "./theme.js";

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
// Cihaz slug'ı `cihazSlug` ile üretilir (çivilenmiş adlar için ad≠slug olabilir; constants.js).
// Belirti slug'ları düz `slugla` ile kalır — onlarda çivi yok.
// ⚠️ Sözlüğe ADIN KENDİ türevi de eklenir: çivi yüzünden ad-türevi slug (örn.
// `camasir-makinesi-kurutma`) hiçbir yerde basılmaz ama biri elle yazarsa yine çözülsün.
const CIHAZ_SLUG = Object.fromEntries(
  CIHAZLAR.flatMap((c) => [[cihazSlug(c), c], [slugla(c), c]])
);

// Cihaza özel hızlı belirti butonları (sürtünmeyi azaltır)
const BELIRTILER = {
  "Buzdolabı": ["Soğutmuyor", "Çok ses yapıyor", "Su akıtıyor", "Buzluk çalışmıyor"],
  "Çamaşır Makinesi": ["Su almıyor", "Sıkmıyor / dönmüyor", "Su boşaltmıyor", "Aşırı titreşim/ses"],
  "Kurutma Makinesi": ["Kurutmuyor / nem kalıyor", "Isıtmıyor / soğuk üflüyor", "Su tankı dolu uyarısı", "Çok uzun sürüyor"],
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
  "Kurutma Makinesi": ["Hata kodu veriyor", "Kötü kokuyor", "Filtre/kondenser tıkalı"],
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
    if (!cihaz) return { cihaz: "", belirti: "", servis: q.get("servis") === "1" };
    const a = (q.get("ariza") || "").trim().toLowerCase();
    // YK #69/#68 ÇİFT KAPI: `servis=1` ile tamir sayfasından DOĞRUDAN servis
    // listesine gelinir (teşhis adımı atlanır). Tolga'nın güç metriği bu kapı:
    // "servis bul'dan insanların servislere ulaşması".
    return { cihaz, belirti: belirtiCoz(cihaz, a), servis: q.get("servis") === "1" };
  } catch { return { cihaz: "", belirti: "", servis: false }; }
})();

// Hangi ekranla acilacak? Tesihs formu artik ana sayfanin ALTINDA degil, kendi
// adresinde (/teshis). "Yeni sayfa olarak acilmasin" talimati geregi gecis SPA
// icinde yapilir: sunucuya gidilmez, history.pushState ile adres degisir.
//   · /teshis           → dogrudan form
//   · ?cihaz=... (blog) → dogrudan form; blogdan gelen kullanici zaten teshis
//                          niyetiyle geliyor, once vitrini gormesi gereksiz adim
//   · digerleri         → vitrin
const BASLANGIC_EKRAN = (() => {
  try {
    if (window.location.pathname.replace(/\/+$/, "") === "/teshis") return "teshis";
    return ONSECIM.cihaz ? "teshis" : "vitrin";
  } catch { return "vitrin"; }
})();

const TARIFE_YEDEK = { "Kurutma Makinesi": "Çamaşır Makinesi" };

function refMetni(cihaz) {
  // ⚠️ GEÇİCİ TARİFE KÖPRÜSÜ — kurutma makinesinin Supabase'de KENDİ satırı henüz yok
  // (21 Ağu 2026'da ölçüldü: SEED'de rezistans/nem sensörü/kondenser pompası/kayış YOK).
  // Köprü olmasaydı kurutma teşhisi tamamen çıpasız kalırdı ve fiyat saf AI tahminine
  // düşerdi — YK #46 hattında en istenmeyen durum. Şimdilik çamaşır makinesi çıpalarına
  // dayanır; parçalar birebir aynı değil, bu yüzden AÇIK KALEM olarak kayıtlı.
  // 📌 /tarife'de kurutma satırları onaylanınca bu satır SİLİNİR (tabloBul yeter).
  const arr = tabloBul(SEED, cihaz) || tabloBul(SEED, TARIFE_YEDEK[cihaz]) || [];
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
  const [hataMsg, setHataMsg] = useState("");
  const [kopyalandi, setKopyalandi] = useState(false);
  // Çift kapı: `?servis=1` ile gelindiyse servis listesi DOĞRUDAN açılır.
  const [showServisler, setShowServisler] = useState(ONSECIM.servis);
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
  // "vitrin" = ana sayfa (hero + kartlar + slogan + nasil calisir + SSS)
  // "teshis" = form ekrani (/teshis). `adim` bundan bagimsiz: teshis EKRANI
  // icinde form → sonuc/hata asamalarini o tutuyor.
  const [ekran, setEkran] = useState(BASLANGIC_EKRAN);
  const formRef = useRef(null);
  // Vitrin → teshis gecisi. Tam sayfa yuklemesi YOK: adres pushState ile degisir,
  // React ekrani degistirir. Geri tusu popstate ile vitrine dondurur.
  const teshiseGec = () => {
    setEkran("teshis");
    try {
      if (window.location.pathname.replace(/\/+$/, "") !== "/teshis") {
        window.history.pushState({ bsEkran: "teshis" }, "", "/teshis");
      }
    } catch { /* pushState kapaliysa ekran yine degisir, yalniz adres sabit kalir */ }
    window.scrollTo(0, 0);
  };
  const vitrineDon = (adresiDeYaz = true) => {
    setEkran("vitrin");
    if (adresiDeYaz) {
      try { window.history.pushState({ bsEkran: "vitrin" }, "", "/"); } catch {}
    }
    window.scrollTo(0, 0);
  };

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

  // Tarayici geri/ileri tusu. pushState ile gelen adres degisimini React'e
  // yansitir; boylece /teshis'ten geri basinca vitrin acilir (sunucuya gidilmez).
  useEffect(() => {
    const gez = () => {
      const teshisMi = window.location.pathname.replace(/\/+$/, "") === "/teshis";
      setEkran(teshisMi ? "teshis" : "vitrin");
      window.scrollTo(0, 0);
    };
    window.addEventListener("popstate", gez);
    return () => window.removeEventListener("popstate", gez);
  }, []);

  const sifirla = () => { setSonuc(null); setBelirti(""); setMarka(""); setMarkaDiger(""); setYas(""); setCihaz(""); setAdim("form"); setShowServisler(false); setTeshisLogId(null); setShowDPP(false); setDppInitialSeriNo(""); vitrineDon(); };
  const detayEkle = () => setAdim("form");

  const acilRenk = { "düşük": "#22C55E", "orta": "#EA580C", "yüksek": "#DC2626", "belirsiz": "#64748B" };
  const kararRenk = { tamir: "#22C55E", yenisi: "#DC2626", belirsiz: "#64748B", gerek_yok: "#0D9488" };
  const kararEtiket = { tamir: "TAMİR ETTİR", yenisi: "YENİSİNİ AL", belirsiz: "BELİRSİZ", gerek_yok: "TAMİR GEREKMEZ" };
  const oneriler = BELIRTILER[cihaz] || [];
  // "Teşhis et" yalnız üç zorunlu alan (cihaz + marka + belirti) dolunca aktif görünür.
  const formHazir = !!cihaz && !!marka && belirti.trim().length >= 4;

  // Teşhis sonucu artık AYRI SAYFA DEĞİL, sihirbazın 4. paneli (Tolga: "en sağda
  // teşhis olmasına rağmen, teşhis için yeni sayfa açılıyor"). Blok olduğu gibi
  // taşındı — tek satırı değişmedi; yalnız dış sarmalayıcısının kart görünümü
  // sıfırlandı, çünkü panelin kendisi zaten kart.
  const SONUC_ICERIK = sonuc ? (
    <div style={{ ...s.results, padding: 0, background: "transparent", border: "none", boxShadow: "none" }}>
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
  ) : null;

  return (
    <>
      {/* ⚠️ VİTRİN, dar kapsayıcının (`s.wrap`, maxWidth 600) DIŞINDA duruyor.
          Önce içine konup `width:100vw` ile taşırılmıştı; 100vw scrollbar genişliğini
          de saydığı için klasik scrollbar'lı tarayıcılarda sağdan ~15px taşma yapıyordu
          (headless çekimde içerik kesik çıktı — gerçek hata, ölçüm hatası değil).
          Dışarı alınca taşırma hilesine hiç gerek kalmadı. */}
      {/* Servis ekranı açıkken vitrin GİZLENİR: `?servis=1` ile gelen kullanıcı
          doğrudan servis listesini görmeli, altında ana sayfa vitrini kalmamalı. */}
      {ekran === "vitrin" && !showServisler && (
        <AnaSayfaVitrin
          onCihazSec={(c) => {
            setCihaz(c);
            if (marka && marka !== "Diğer" && !markalarForCihaz(c).includes(marka)) setMarka("");
            teshiseGec();
          }}
          onFormaGit={teshiseGec}
          onServisler={() => { track("servis_click", { kaynak: "anasayfa_izgara", gelis: GELIS }); setShowServisler(true); }}
          onLogo={sifirla}
          onDertYaz={(metin, tahminCihaz, tahminMarka) => {
            setBelirti(metin.slice(0, BELIRTI_MAX));
            if (tahminCihaz) {
              setCihaz(tahminCihaz);
              if (marka && marka !== "Diğer" && !markalarForCihaz(tahminCihaz).includes(marka)) setMarka("");
            }
            // Metinde marka geçtiyse ön-seçili gelir (Tolga, 19 Ağu). Tahmin edilemezse
            // mevcut seçim KORUNUR — boş metin yüzünden kullanıcının seçimi silinmez.
            if (tahminMarka) setMarka(tahminMarka);
            teshiseGec();
          }}
        />
      )}
    <div style={
      ekran === "teshis" && (adim === "form" || adim === "hata" || adim === "sonuc") && !showServisler
        ? { ...s.wrap, paddingTop: 0, maxWidth: 1240 }
        : adim === "form" ? { ...s.wrap, paddingTop: 0 } : s.wrap
    }>
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

      {/* Form ekranında logo HERO'nun üzerinde (YK #69 koşu 3, Tolga talebi) — bu
          header yalnız sonuç/hata ekranlarında görünür, orada hero yok. */}
      {/* Header vitrinde gizli (orada hero + kendi ust bari var), teshis ekraninda
          GORUNUR — kullanicinin ana sayfaya donecegi tek yer logo. */}
      <header style={{ ...s.header, display: ekran === "vitrin" ? "none" : undefined }}>
        {/* Kurumsal logo + motto — en üstte. Logoya tıkla → ana sayfa (sıfırla). */}
        <button onClick={sifirla} aria-label="Ana sayfaya dön" style={s.logoBtn}>
          <BenservisLogo style={s.brandLogo} />
        </button>
        {/* YK #69 koşu 3: form ekranında bu iki satır HERO'ya devredildi — aynı vaadi
            iki kez söylemek "basic" hissinin kaynaklarından biriydi. Sonuç/hata
            ekranlarında (hero görünmezken) eskisi gibi duruyorlar. */}
        {!(ekran === "teshis" && adim === "form") && <p style={s.tagline}>Cihazın bozuldu, belirtisini yaz — teşhisi ve tahmini maliyeti söyleyelim.</p>}
        <div style={{ ...s.trustRow, display: (ekran === "teshis" && adim === "form") ? "none" : s.trustRow.display }}>
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

      {/* Teşhis ekranının geri kapısı. Logo da ana sayfaya döner ama formu
          sıfırlar; bu satır aynı şeyi AÇIKÇA söyler — kullanıcı ayrı bir adreste
          olduğunu buradan anlar. Tam sayfa yüklemesi yok: SPA içi geçiş. */}
      {ekran === "teshis" && !showServisler && (
        <button type="button" onClick={() => vitrineDon()} style={s.geriLink}>
          ← Ana sayfa
        </button>
      )}

      {ekran === "teshis" && (adim === "form" || adim === "hata" || adim === "sonuc") && !showServisler && (
        <div ref={formRef} className={"sihirbaz" + (adim === "sonuc" ? " sonuc-modu" : "")}>
          {/* Adım çubuğu — hangi adımdayız, ne kadarı bitti. Durumlar aşağıdaki
              panel durumlarıyla AYNI kaynaktan (cihaz/marka/formHazir) türetilir,
              yani ikisi asla ayrı düşemez. */}
          <div className="adimcubugu" aria-hidden="true">
            {[
              { n: 1, et: "Cihaz",  d: cihaz ? "tamam" : "aktif" },
              { n: 2, et: "Detay",  d: !cihaz ? "kilitli" : marka ? "tamam" : "aktif" },
              { n: 3, et: "Belirti", d: !marka ? "kilitli" : formHazir ? "tamam" : "aktif" },
              { n: 4, et: "Sonuç",  d: adim === "sonuc" ? "tamam" : "kilitli" },
            ].map((a, i, dizi) => (
              <React.Fragment key={a.n}>
                <span className="ad" data-d={a.d}>
                  <span className="no">{a.d === "tamam" ? "✓" : a.n}</span>
                  <span className="et">{a.et}</span>
                </span>
                {i < dizi.length - 1 && <span className="bag" data-dolu={a.d === "tamam" ? "1" : "0"} />}
              </React.Fragment>
            ))}
          </div>

          <div className="paneller">
          {/* ═══ PANEL ① CİHAZ ═══ */}
          <section className="panel" data-durum={cihaz ? "tamam" : "aktif"}>
            <div className="panel-bas"><h3>Cihaz</h3>{adim !== "sonuc" && <span className="panel-rozet">{cihaz ? "✓ Seçildi" : "Adım 1"}</span>}</div>
            {adim === "sonuc" && (
              <div className="ozet">
                <b>{cihaz}</b>
                <button type="button" className="ozet-degistir" onClick={() => setAdim("form")}>değiştir</button>
              </div>
            )}
          {adim !== "sonuc" && (
          <div className="cihaz-izgara" style={s.cihazGrid}>
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
          )}
          </section>

          {/* ═══ PANEL ② MARKA & DETAY ═══ */}
          <section className="panel" data-durum={!cihaz ? "kilitli" : marka ? "tamam" : "aktif"}>
            <div className="panel-bas"><h3>Marka</h3>{adim !== "sonuc" && <span className="panel-rozet">{marka ? "✓ Seçildi" : "Adım 2"}</span>}</div>
            {adim === "sonuc" && (
              <div className="ozet">
                <b>{efektifMarka}</b>{yas && <span className="ozet-alt">{yas}</span>}
                <button type="button" className="ozet-degistir" onClick={() => setAdim("form")}>değiştir</button>
              </div>
            )}
          {adim !== "sonuc" && (<>
          <div className="marka-satir" style={s.row}>
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
          </>)}


          </section>

          {/* ═══ PANEL ③ BELİRTİ + CTA ═══ */}
          <section className="panel" data-durum={!marka ? "kilitli" : formHazir ? "tamam" : "aktif"}>
            <div className="panel-bas"><h3>Belirti</h3>{adim !== "sonuc" && <span className="panel-rozet">{formHazir ? "✓ Hazır" : "Adım 3"}</span>}</div>
            {adim === "sonuc" && (
              <div className="ozet">
                <span className="ozet-belirti">{belirti}</span>
                <button type="button" className="ozet-degistir" onClick={() => setAdim("form")}>değiştir</button>
              </div>
            )}

          {adim !== "sonuc" && (<>
          {/* Sık görülen belirtiler — cihaz seçilince dolan çipler. Panel ②'den
              buraya alındı: belirti yazma anına ait, marka seçimine değil. */}
          {oneriler.length > 0 && (
            <div style={s.oneriBox}>
              <span style={s.oneriLabel}>Sık görülen belirtiler <span style={s.opt}>· dokunarak ekle</span></span>
              <div style={s.oneriWrap}>
                {oneriler.map((b) => {
                  const aktif = belirtiAktif(b);
                  return (
                    <button key={b} type="button" onClick={() => belirtiToggle(b)}
                      style={{ ...s.oneriChip, ...(aktif ? s.oneriChipActive : {}) }}>
                      <span style={s.oneriChipIkon}>{aktif ? "✓" : "+"}</span>
                      {b}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <label style={s.label}>Belirtiyi anlat <span style={{ color: "#DC2626", fontWeight: 700 }}>*</span> <span style={s.opt}>(varsa hata kodunu da yaz)</span></label>
          {/* Belirti textarea (sol, esnek) + Sesle anlat butonu (sağ, kutu boyunda) YAN YANA */}
          <div className="belirti-satir" style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
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
          </>)}

          </section>

          {/* ═══ PANEL ④ SONUÇ — YALNIZ SONUÇ GELİNCE ═══
              Eskiden form aşamasında da basılıyordu: "Teşhis sonucu burada
              belirecek / Adım 4" yazan boş bir kart. Tolga 20 Ağu'da kaldırttı
              ("zaten burada göstermiyoruz") — çünkü boş kart bir söz veriyor ama
              gönderimden sonra ızgara yeniden oranlanıp sayfa başa sarıyor, yani
              kullanıcı sözün tutulduğu anı o kutuda görmüyor.
              ⛔ Blok TAMAMEN silinemez: sonuç hâlâ BURADA render ediliyor
              (`setAdim("sonuc")`, ayrı sayfa yok). Silinseydi teşhis çıktısının
              basılacağı yer kalmazdı. Bu yüzden koşul render'a alındı. */}
          {adim === "sonuc" && (
          <section className="panel panel-sonuc" data-durum="aktif">
            <div className="panel-bas"><h3>Teşhis &amp; maliyet</h3></div>
            {SONUC_ICERIK}
          </section>
          )}
          </div>

          {/* ═══ GÖNDERİM BANDI ═══
              CTA panel ③'ün içindeydi; orada dar kalıyor ve dört panelin arasında
              kayboluyordu (Tolga: "teşhis et butonu en altta bütün sayfa boyunca
              olsun"). Panellerin ALTINDA, kolonun tamamı kadar geniş duruyor:
              hangi adımda olursan ol gözünün önünde, tamamlanınca basılacak yer belli.
              Hata mesajı ve eksik-alan uyarısı da buraya taşındı — ikisi de bu
              düğmenin gerekçesi, onunla aynı yerde okunmalı. */}
          {adim !== "sonuc" && (
          <div className="gonderi-bant">
            {hataMsg && <div style={s.err}>{hataMsg}</div>}
            <button
              className="gonderi-btn"
              style={{ ...s.cta, ...(formHazir ? {} : { opacity: 0.45, cursor: "not-allowed", boxShadow: "none" }) }}
              onClick={tesisEt}
              disabled={!formHazir}
            >Ücretsiz teşhis et →</button>
            {!formHazir && (
              <p style={{ fontSize: 13, color: "#94A3B8", textAlign: "center", margin: "10px 0 0" }}>
                {!cihaz ? "Cihazını seç." : !marka ? "Marka seçin." : "Arıza belirtisini yazın."}
              </p>
            )}
          </div>
          )}

          <p style={s.disclaimer}>Sonuç bir ön tahmindir; kesin teşhis için yetkili servis gerekir.</p>
        </div>
      )}

      {/* Gezinme ızgarası + SSS + PWA bloğu 18 Ağu'da AnaSayfaVitrin'e TAŞINDI:
          Tolga "bu kısmı da tam sayfa genişliğine al" dedi; burası `s.wrap`
          (maxWidth 600) içindeydi, orada tam genişlik verilemezdi. Vitrin zaten
          wrap'in dışında duruyor — blok oraya gidince taşırma hilesi gerekmedi. */}

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
    </>
  );
}

// Minimal & premium paleti



const CSS = `
* { box-sizing: border-box; }
/* Zemin BODY'de sabitlenir: wrap 600px'lik bir kolon, gövdenin arka planı
   tanımsız kaldığı için geniş ekranda kolonun iki yanı tarayıcının varsayılanına
   (koyu temada siyaha) düşüyordu. Hero full-bleed olunca bu daha da göze battı. */
/* Gövde fontu BODY'de tanımlı olmalı: vitrin bölümleri s.wrap'in (maxWidth 600)
   DIŞINDA duruyor ve font yalnız orada tanımlıydı → vitrindeki tüm gövde metinleri
   (kart adları, slogan kartları, SSS, hero alt başlığı) tarayıcı varsayılanı olan
   Times ile çiziliyordu. Ölçümle yakalandı: computed fontFamily = "Times".
   Başlıklar etkilenmemişti, çünkü onların Fraunces'u kendi stillerinde yazılı. */
html, body { margin: 0; overflow-x: hidden; background: ${CREAM};
  font-family: 'Hanken Grotesk', system-ui, -apple-system, sans-serif; }
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
/* ═══ TEŞHİS SİHİRBAZI — 4 YATAY PANEL (19 Ağu, Tolga: "teşhis sayfası çok eski
   kaldı… bilgisayarda yatay, mobilde dikey, soldan sağa adım adım") ═══
   Tasarım kaynağı: pazarlama-departmani/fe-taslaklar/teshis-yatay-mockup.html
   ⛔ İŞLEV DEĞİŞMEDİ: aynı state, aynı alanlar, aynı gönderim. Bu katman yalnız
   sunum — alanlar panellere DAĞITILDI, hiçbiri yeniden yazılmadı. */
.sihirbaz { position: relative; z-index: 1; }

/* Adım çubuğu: 1-2-3-4 daireleri, aralarındaki bağ tamamlanınca soldan sağa dolar. */
.adimcubugu { display: flex; align-items: center; gap: 0; margin: 0 0 18px; }
.adimcubugu .ad { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
.adimcubugu .no {
  width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center;
  justify-content: center; font-size: 13px; font-weight: 700; background: #E2E8F0; color: #94A3B8;
}
.adimcubugu .et { font-size: 13px; font-weight: 600; color: #94A3B8; white-space: nowrap; }
.adimcubugu .ad[data-d="aktif"] .no { background: #2563EB; color: #fff; }
.adimcubugu .ad[data-d="aktif"] .et { color: #2563EB; }
.adimcubugu .ad[data-d="tamam"] .no { background: #16A34A; color: #fff; }
.adimcubugu .ad[data-d="tamam"] .et { color: #1E293B; }
.adimcubugu .bag { flex: 1; height: 2px; background: #E2E8F0; margin: 0 10px; border-radius: 2px; }
.adimcubugu .bag[data-dolu="1"] { background: #2563EB; }

/* Paneller: masaüstünde dört sütun, mobilde alt alta. */
/* Dört panel EŞİT yükseklikte (Tolga: "4 kolonun da çerçeve büyüklükleri aynı
   olsun, alttan ve yandan aynı ölçü"). align-items:start her paneli kendi
   içeriği kadar bırakıyordu — cihaz paneli 690, marka paneli 300 px'di.
   stretch + height:100% ile dördü de en uzuna eşitlenir; iç boşluklar zaten
   aynı (padding 18/16), yani yan ve alt ölçüler de birebir. */
/* Form aşamasında ÜÇ kolon: sonuç paneli artık boş vaat kartı olarak basılmıyor
   (Tolga, 20 Ağu: "en sağdaki adım 4'ü kaldıralım, zaten burada göstermiyoruz").
   Sonuç geldiğinde sonuc-modu dördüncü track'i geri açar — aşağıdaki kural. */
.paneller { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; align-items: stretch; }
.panel {
  position: relative; background: #fff; border: 1px solid #E2E8F0; border-radius: 16px;
  padding: 18px 16px; height: 100%;
  transition: box-shadow .18s ease, border-color .18s ease, opacity .18s ease;
}
.panel::before {
  content: ""; position: absolute; inset: -1px -1px auto; height: 3px;
  border-radius: 16px 16px 0 0; background: transparent;
}
.panel[data-durum="aktif"] { border-color: #2563EB; box-shadow: 0 10px 26px -14px rgba(37,99,235,.5); }
.panel[data-durum="aktif"]::before { background: #2563EB; }
/* Kilitli panel: soluk ve tıklanamaz — sırası gelmeden alanına girilemez. */
.panel[data-durum="kilitli"] { opacity: .5; pointer-events: none; }
.panel[data-durum="tamam"] { border-color: #BBF7D0; }
.panel-bas { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin: 0 0 12px; }
.panel-bas h3 { font-family: 'Fraunces', Georgia, serif; font-weight: 600; font-size: 16px; margin: 0; color: #1E293B; }
/* Panel içindeki cihaz ızgarası: dar sütunda iki kolon (mockup deseni).
   Sayfa genelindeki s.cihazGrid daha geniş kolona göre ayarlı, panelde ezilirdi. */
.panel .cihaz-izgara { grid-template-columns: repeat(2, 1fr) !important; gap: 8px !important; }
/* Belirti alanı panelde dikey: textarea üstte tam genişlik, ses düğmesi altta.
   Yan yana kalsalardı 240 px'lik panelde textarea harf harf sarıyordu (ölçüldü). */
/* align-items STRETCH şart: satırın kendi inline stili alignItems:"flex-start"
   (yan yana dizilimde textarea'yı ses düğmesiyle üstten hizalamak için). Column'a
   çevrilince o değer çapraz eksene geçti ve textarea sarmalını İÇERİK genişliğine
   büzdü — sarmalın flex:1'i ana eksende (artık dikey) çalıştığı için genişliğe
   etki etmiyordu. Ölçüm (390px, 20 Ağu): panel içi 318 · ses düğmesi 316 ·
   textarea 200 → 116 px fark. Düğme width:100% taşıdığı için sağlamdı, kutu değil. */
.panel .belirti-satir { flex-direction: column !important; align-items: stretch !important; }
.panel .belirti-satir > button { flex: 0 0 auto !important; width: 100% !important; align-self: auto !important; flex-direction: row !important; gap: 8px !important; padding: 11px !important; }
.panel-rozet { font-size: 11px; font-weight: 700; padding: 3px 9px; border-radius: 999px; background: #F1F5F9; color: #64748B; white-space: nowrap; }
.panel[data-durum="aktif"] .panel-rozet { background: #EFF4FF; color: #2563EB; }
.panel[data-durum="tamam"] .panel-rozet { background: #F0FDF4; color: #15803D; }
/* Sonuç paneli boşken: ne beklendiğini söyleyen sakin bir yer tutucu. */
/* .panel-bos kaldırıldı — tek kullanıcısı sonuç panelinin boş vaat kartıydı,
   o kart 20 Ağu'da kalktı (bkz. PANEL ④ yorumu). Kuralı bırakmak ölü CSS olurdu. */

/* Marka ve cihaz yaşı panelde ALT ALTA (Tolga: "cihaz yaşını markanın altına al
   yer var orada"). Yan yanayken 290 px'lik panelde iki açılır kutu da daralıyor,
   "Önce cihaz seç" yer tutucusu kırpılıyordu. Alt alta ikisi de tam genişlikte. */
.panel .marka-satir { flex-direction: column; gap: 12px; }
.panel .marka-satir > div { flex: 1 1 auto !important; width: 100%; }

/* ═══ SONUÇ MODU ═══
   Sonuç geldiğinde AYRI SAYFA AÇILMAZ: üç giriş paneli özete iner, dördüncü
   panel kalan alanı alır. Kullanıcı ne girdiğini görmeye devam eder, "değiştir"
   ile state kaybetmeden geri döner. */
.sihirbaz.sonuc-modu .paneller { grid-template-columns: 170px 170px 170px minmax(0, 1fr); }
.sihirbaz.sonuc-modu .panel { padding: 14px; }
.sihirbaz.sonuc-modu .panel-bas { margin-bottom: 8px; }
.sihirbaz.sonuc-modu .panel-bas h3 { font-size: 14px; }
.ozet { display: flex; flex-direction: column; align-items: flex-start; gap: 4px; }
.ozet b { font-size: 14.5px; color: #1E293B; line-height: 1.3; }
.ozet .ozet-alt { font-size: 12.5px; color: #64748B; }
.ozet .ozet-belirti {
  font-size: 12.5px; color: #475569; line-height: 1.5;
  display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;
}
.ozet .ozet-degistir {
  margin-top: 4px; background: none; border: none; padding: 0; cursor: pointer;
  font-family: inherit; font-size: 12.5px; font-weight: 700; color: #2563EB; text-decoration: underline;
}
/* Sonuç paneli: kilitli panel kuralı buraya UYGULANMAZ — sonuç modunda aktif. */
.panel-sonuc { text-align: left; }

/* Sonuç modunda mobil: özetler üstte alt alta, sonuç en altta tam genişlik. */
@media (max-width: 959px) {
  .sihirbaz.sonuc-modu .paneller { grid-template-columns: 1fr; }
  .sihirbaz.sonuc-modu .panel[data-durum="kilitli"] { display: block; }
}

/* Gönderim bandı — panellerin altında, kolonun tamamı kadar geniş. */
.gonderi-bant { margin: 18px 0 0; }
.gonderi-bant .gonderi-btn { width: 100%; min-height: 58px; font-size: 17px; }

/* MOBİL: paneller alt alta; kilitli olanlar hiç görünmez — bugünkü tek kolon
   akışıyla aynı his, kullanıcı sırası gelmemiş alanla karşılaşmaz. */
@media (max-width: 959px) {
  .paneller { grid-template-columns: 1fr; gap: 12px; }
  .panel[data-durum="kilitli"] { display: none; }
  .adimcubugu .et { display: none; }
  .adimcubugu .bag { margin: 0 6px; }
}

/* ÜST BAR — MOBİL (≤640px): üç metin bağlantısı gizlenir, yalnız logo +
   "Yakın Servisler" düğmesi kalır. Ölçüm: 375 px'te dört öğe iki satıra
   dağılıyor, üstelik hizasız (üst kenarları 81/119/120 px) ve bar 73 px'e
   şişiyordu — Tolga: "sığmıyor, kötü görünüyor".
   ⛔ Bağlantılar SİLİNMEDİ, yalnız bu genişlikte gizlendi: aynı üç bölüme
   sayfanın altındaki gezinme şeritleri götürüyor, yani mobil kullanıcı hiçbir
   yere erişimini kaybetmiyor. HTML'de durdukları için tarama katmanı da aynı. */
@media (max-width: 640px) {
  .vitrin-ustmenu a { display: none; }
  /* Logo + düğme TEK SATIR: ölçüldü, 375 px'te logo 172 + düğme 146 + boşluk 16
     = 334 px < 375, yani sarmaya gerek yok. Sarınca düğme alta düşüp sola
     yaslanıyor ve bar 103 px'e çıkıyordu; nowrap ile bar yarı yarıya iniyor. */
  .vitrin-ustbar { flex-wrap: nowrap !important; gap: 10px !important; }
  .vitrin-ustmenu { flex-shrink: 0; }
  /* Üstteki düğme de dokunma tabanına (44 px) çıkar — teşhis düğmesiyle aynı
     ölçüt. 36 px'te kalıyordu; barı 8 px büyütmesi kabul edilebilir bedel. */
  .vitrin-ustmenu button { min-height: 44px; }
}
/* "Derdini yaz" kutusu dar ekranda DİKEY: yan yana dururken textarea sıkışıp
   metin üç satıra bölünüyor, buton alanın yarısını yiyordu (mobilde ölçüldü). */
@media (max-width: 560px) {
  .vitrin-kutu { flex-direction: column; gap: 8px; }
  .vitrin-kutu-yazi { min-height: 74px; }
  .vitrin-kutu-btn { width: 100%; padding: 14px 18px; }
}
/* ——— Cihaz kartı: imleç üzerine gelince hareket (Armut deseni) ———
   Üç katman birlikte çalışır: kart hafifçe yükselir, gölgesi derinleşir,
   içindeki fotoğraf çerçeve sabitken büyür (kart overflow:hidden). Fotoğrafın
   büyümesi kartı büyütmez — kırpma çerçevede kalır, ızgara hizası bozulmaz.
   Ölçü kasıtlı olarak küçük (2px / %6): kart tıklanabilir bir hedef, oyuncak değil.
   Dokunmatikte hover yok; @media (hover:hover) ile yalnız gerçek imlece verilir.

   DİKKAT - important NEDEN VAR: kartın gölgesi ve kenarı SATIR İÇİ stilde
   tanımlı (st.kartFoto). Satır içi stil her zaman stylesheet'i yener,
   özgüllükten bağımsız olarak. İlk denemede :where() ile yazdım; Playwright'la
   ölçünce transform tuttu ama gölge/kenar HİÇ değişmedi. Bu iki özellik için
   tek yol important; transform'da gerek yok (satır içinde tanımlı değil). */
@media (hover: hover) and (pointer: fine) {
  .vitrin-kartlar button { transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease; }
  .vitrin-kartlar button img { transition: transform .3s ease; }
  .vitrin-kartlar button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px -10px rgba(30,41,59,.28) !important;
    border-color: #C7D7F5 !important;
  }
  .vitrin-kartlar button:hover img { transform: scale(1.06); }
}
/* Klavye kullanıcısı da aynı geri bildirimi görür (hover'a erişemez). */
.vitrin-kartlar button:focus-visible { transform: translateY(-2px); border-color: #C7D7F5 !important; }
/* Hareket azaltma tercihi: konum/ölçek değişimi tamamen kalkar, renk ipucu kalır. */
@media (prefers-reduced-motion: reduce) {
  .vitrin-kartlar button,
  .vitrin-kartlar button img { transition: none; }
  .vitrin-kartlar button:hover,
  .vitrin-kartlar button:focus-visible { transform: none; }
  .vitrin-kartlar button:hover img { transform: none; }
}

/* Gezinme şeritleri dar ekranda dikey: görsel üstte, metin altta. Yan yana
   kalsalardı 375 px'te metin sütunu ~135 px'e düşüyordu (okunmaz). */
@media (max-width: 720px) {
  .vitrin-gezinme > * { grid-template-columns: 1fr !important; }
  .vitrin-gezinme > * > div:last-child { order: -1; min-height: 150px !important; }
}
/* Gezinme kartlarına da cihaz kartlarının hover hareketi (aynı kural gövdesi,
   ayrı seçici: ızgaralar farklı sınıflarda). */
@media (hover: hover) and (pointer: fine) {
  .vitrin-gezinme > * { transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease; }
  .vitrin-gezinme > * img, .vitrin-gezinme > * svg { transition: transform .3s ease; }
  .vitrin-gezinme > *:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px -10px rgba(30,41,59,.28) !important;
    border-color: #C7D7F5 !important;
  }
  .vitrin-gezinme > *:hover img, .vitrin-gezinme > *:hover svg { transform: scale(1.06); }
}
.vitrin-gezinme > *:focus-visible { transform: translateY(-2px); border-color: #C7D7F5 !important; }
@media (prefers-reduced-motion: reduce) {
  .vitrin-gezinme > *, .vitrin-gezinme > * img, .vitrin-gezinme > * svg { transition: none; }
  .vitrin-gezinme > *:hover, .vitrin-gezinme > *:focus-visible { transform: none; }
  .vitrin-gezinme > *:hover img, .vitrin-gezinme > *:hover svg { transform: none; }
}
/* Surdurulebilirlik bandi (19 Agu) — gezinme seritleriyle AYNI etkilesim dili,
   yalniz vurgu rengi yesil (YK 23 Tem: yesil = surdurulebilirlik).
   Dar ekranda seritlerle ayni davranir: tek sutun, gorsel uste. */
@media (max-width: 720px) {
  .vitrin-surdur { grid-template-columns: 1fr !important; }
  .vitrin-surdur > div:last-child { order: -1; min-height: 190px !important; }
}
@media (hover: hover) and (pointer: fine) {
  .vitrin-surdur { transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease; }
  .vitrin-surdur img, .vitrin-surdur svg { transition: transform .3s ease; }
  .vitrin-surdur:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px -10px rgba(21,128,61,.30) !important;
    border-color: #86EFAC !important;
  }
  .vitrin-surdur:hover img, .vitrin-surdur:hover svg { transform: scale(1.06); }
}
.vitrin-surdur:focus-visible { transform: translateY(-2px); border-color: #86EFAC !important; }
@media (prefers-reduced-motion: reduce) {
  .vitrin-surdur, .vitrin-surdur img, .vitrin-surdur svg { transition: none; }
  .vitrin-surdur:hover, .vitrin-surdur:focus-visible { transform: none; }
  .vitrin-surdur:hover img, .vitrin-surdur:hover svg { transform: none; }
}
/* Cihaz ızgarası: masaüstünde satır başına 4 kart (Armut deseni). Ara
   genişliklerde 4 sütun kartı görselin okunmayacağı kadar daraltıyor,
   o yüzden kademe kademe iniyor: 4 → 3 → 2. */
@media (max-width: 900px) {
  .vitrin-kartlar { grid-template-columns: repeat(3, 1fr) !important; }
}
/* Slogan bölümü dar ekranda alt alta. */
@media (max-width: 860px) {
  .vitrin-slogan { grid-template-columns: 1fr !important; }
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
  geriLink: {
    position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center",
    background: "none", border: "none", padding: "0 0 12px", cursor: "pointer",
    color: MUTED, fontFamily: "inherit", fontSize: 14.5, fontWeight: 600,
  },
  footer: { position: "relative", zIndex: 1, textAlign: "center", marginTop: 30, paddingTop: 22, borderTop: `1px solid ${HAIR}` },
  footBrand: { fontFamily: "'Fraunces', serif", fontSize: "clamp(14px, 1.4vw, 16px)", fontWeight: 600, color: MUTED },
  footSub: { fontSize: "clamp(12px, 1.2vw, 13.5px)", color: FAINT, marginTop: 6 },
  // Footer gezinme satırı (Hakkımızda · Sürdürülebilirlik · SERBİS'te Doğrula).
  // ÖNCE: footSub'ı paylaşıyordu → 12px. SONRA: kendi stili, 14px (Tolga ①).
  // Slogan satırı ("AI destekli teşhis…") 12px'te KALDI; büyüyen yalnız tıklanan satır.
  // Neden ALT SINIR tam 14: üç linkin doğal genişliği 375px'te 14px'te 325/335px
  // (tek satır), 14.5px'te 339px → sarıyor ve satır sonunda öksüz "·" kalıyordu.
  // Bu ölçüm hâlâ geçerli, o yüzden clamp'in tabanı 14 — mobilde davranış DEĞİŞMEDİ.
  // Tavan 15.5: masaüstünde kolon geniş, sarma riski yok, kart/adım puntosuyla uyum.
  footNav: { display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "baseline", columnGap: 6, rowGap: 2, fontSize: "clamp(14px, 1.4vw, 15.5px)", lineHeight: 1.6, marginTop: 8 },
  footNavUnit: { display: "inline-flex", alignItems: "baseline", gap: 6, whiteSpace: "nowrap" },
  footSep: { color: FAINT },
  footLink: { color: "#2563EB", textDecoration: "none", fontWeight: 600 },
  // Hukuk satırı: aynı ızgara, ama 12.5px ve nötr renkte — gezinme satırıyla yarışmasın.
  footHukuk: { display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "baseline", columnGap: 6, rowGap: 2, fontSize: "clamp(12.5px, 1.2vw, 14px)", lineHeight: 1.6, marginTop: 6 },
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

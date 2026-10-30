// src/ziyaret-sayim.js — PII'siz sayfa-şehir sayacının saf parçaları (istemci beacon'ı + sunucu).
//
// NEDEN VAR (29 Eki 2026, Tolga — YK8 iletti): "FE Vercel şehir başlığıyla PII'siz sayfa-şehir
// sayacı kursun; 12 Kas raporuna şehir kırılımı da girsin." Soru: ziyaretçi hangi şehirden geliyor
// ve o il dizin kapsamımızda mı? Yakın servis arama kaydıyla (servis-arama-kaydi.js) birlikte okunur.
//
// ⛔ PII YOK: istemci yalnız SAYFA TÜRÜNÜ yollar (adres/slug değil). Sunucu şehir bilgisini
//   Vercel'in kendi başlıklarından okur, günlük TOPLAMA bir ekler; IP/UA/çerez/kimlik saklanmaz,
//   ham istek satırı tutulmaz. UA yalnız o anda bot elemek için okunur, yazılmaz.
import { KAPSAM_ILLER } from "./kapsam-iller.js";

export const SAYFA_TURLERI = ["blog", "tamir", "kilavuz", "teshis", "urun", "diger"];

// Adres → sayfa türü. Ana sayfa teşhis girişidir (form orada).
export function sayfaTuru(yol) {
  const p = String(yol || "/");
  if (p === "/" || p.startsWith("/?")) return "teshis";
  if (p.startsWith("/blog")) return "blog";
  if (p.startsWith("/tamir")) return "tamir";
  if (p.startsWith("/kilavuzlar")) return "kilavuz";
  if (p.startsWith("/pazar") || p.startsWith("/urun") || p.startsWith("/ikinci-el")) return "urun";
  return "diger";
}

// Beacon: yalnız sayfa türü gider. sendBeacon yoksa keepalive fetch; ikisi de yoksa sessizce atlanır.
// Hata kullanıcıya hiç yansımaz. SPA (main.jsx) fonksiyonu çağırır; statik sayfalara (build-blog)
// aynı fonksiyonun kaynağı satır içi betik olarak girer — tek tanım, iki yüzey.
export function ziyaretBeacon() {
  try {
    var p = location.pathname;
    var t = p === "/" ? "teshis" : /^\/blog/.test(p) ? "blog" : /^\/tamir/.test(p) ? "tamir"
      : /^\/kilavuzlar/.test(p) ? "kilavuz" : /^\/(pazar|urun|ikinci-el)/.test(p) ? "urun" : "diger";
    var gonder = function (o) {
      var b = JSON.stringify(o);
      if (navigator.sendBeacon) navigator.sendBeacon("/api/sayim/ziyaret", new Blob([b], { type: "application/json" }));
      else if (window.fetch) fetch("/api/sayim/ziyaret", { method: "POST", body: b, keepalive: true, headers: { "Content-Type": "application/json" } }).catch(function () {});
    };
    gonder({ t: t }); // açılış ping'i — ziyaret sayısı
    // 30 Eki 2026 (Tolga: "ne kadar kalıyor, hemen çıkıyor mu, aradığını buluyor mu?"): sayfa
    // gizlenince/kapanınca TEK final ping. Ham süre ve yüzde gitmez, yalnız aralık (PII'siz).
    var gorunur = 0, bas = document.visibilityState === "visible" ? Date.now() : 0, derin = 0, bitti = false;
    var olc = function () {
      var h = document.documentElement, y = Math.max(h.scrollHeight - h.clientHeight, 1);
      var r = Math.min(100, ((window.scrollY || h.scrollTop || 0) / y) * 100);
      if (h.scrollHeight <= h.clientHeight + 4) r = 100; // tek ekranlık sayfa: tamamı görüldü
      if (r > derin) derin = r;
    };
    var son = function () {
      if (bitti) return; bitti = true;
      if (bas) gorunur += Date.now() - bas;
      olc();
      var sn = gorunur / 1000;
      gonder({ t: t, son: 1, s: sn < 10 ? "0-10" : sn < 60 ? "10-60" : "60+",
        k: derin >= 90 ? 100 : derin >= 75 ? 75 : derin >= 50 ? 50 : derin >= 25 ? 25 : 0 });
    };
    addEventListener("scroll", olc, { passive: true });
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "hidden") son();
    });
    addEventListener("pagehide", son);
    olc();
  } catch (e) { /* sayaç kullanıcıyı asla etkilemez */ }
}
export const ZIYARET_BEACON_JS = `(${ziyaretBeacon.toString()})();`;

// Bot / önizleme / denetim araçları — sayılmaz. Gerçek tarayıcı UA'sında geçmeyen kelimeler.
export const BOT_DESENI = /bot|crawl|spider|slurp|headless|lighthouse|pagespeed|preview|facebookexternalhit|whatsapp|curl|wget|python|axios|node-fetch|vercel-(screenshot|favicon)/i;

// TR ISO 3166-2 bölge kodu = plaka (01–81) → il slug'ı (kapsam etiketi için).
export const PLAKA_IL = {
  "01": "adana", "02": "adiyaman", "03": "afyonkarahisar", "04": "agri", "05": "amasya", "06": "ankara",
  "07": "antalya", "08": "artvin", "09": "aydin", "10": "balikesir", "11": "bilecik", "12": "bingol",
  "13": "bitlis", "14": "bolu", "15": "burdur", "16": "bursa", "17": "canakkale", "18": "cankiri",
  "19": "corum", "20": "denizli", "21": "diyarbakir", "22": "edirne", "23": "elazig", "24": "erzincan",
  "25": "erzurum", "26": "eskisehir", "27": "gaziantep", "28": "giresun", "29": "gumushane", "30": "hakkari",
  "31": "hatay", "32": "isparta", "33": "mersin", "34": "istanbul", "35": "izmir", "36": "kars",
  "37": "kastamonu", "38": "kayseri", "39": "kirklareli", "40": "kirsehir", "41": "kocaeli", "42": "konya",
  "43": "kutahya", "44": "malatya", "45": "manisa", "46": "kahramanmaras", "47": "mardin", "48": "mugla",
  "49": "mus", "50": "nevsehir", "51": "nigde", "52": "ordu", "53": "rize", "54": "sakarya",
  "55": "samsun", "56": "siirt", "57": "sinop", "58": "sivas", "59": "tekirdag", "60": "tokat",
  "61": "trabzon", "62": "tunceli", "63": "sanliurfa", "64": "usak", "65": "van", "66": "yozgat",
  "67": "zonguldak", "68": "aksaray", "69": "bayburt", "70": "karaman", "71": "kirikkale", "72": "batman",
  "73": "sirnak", "74": "bartin", "75": "ardahan", "76": "igdir", "77": "yalova", "78": "karabuk",
  "79": "kilis", "80": "osmaniye", "81": "duzce",
};

const basl = (h, ad) => {
  const v = h?.[ad];
  return (Array.isArray(v) ? v[0] : v) || "";
};
const coz = (v) => { try { return decodeURIComponent(v); } catch { return v; } };

/**
 * İstek → sayaç anahtarı ya da null (sayılmaz). Saf: ağ/DB yok.
 * @returns {{gun:string, ulke:string, bolge:string, sehir:string, tur:string} | null}
 */
export function ziyaretAnahtari(headers, govde, simdi = new Date()) {
  const ua = basl(headers, "user-agent");
  if (!ua || BOT_DESENI.test(ua)) return null;
  const tur = SAYFA_TURLERI.includes(govde?.t) ? govde.t : "diger";
  const ulke = basl(headers, "x-vercel-ip-country").slice(0, 2).toUpperCase();
  const bolge = basl(headers, "x-vercel-ip-country-region").slice(0, 8);
  const sehir = coz(basl(headers, "x-vercel-ip-city")).slice(0, 60);
  // Gün Türkiye saatiyle (UTC+3) — rapor Türkiye günüyle okunur.
  const gun = new Date(simdi.getTime() + 3 * 3600e3).toISOString().slice(0, 10);
  return { gun, ulke, bolge, sehir, tur };
}

export const SURE_ARALIKLARI = ["0-10", "10-60", "60+"];
export const KAYDIRMA_ARALIKLARI = [0, 25, 50, 75, 100];

// Final ping'in okuma anahtarı (süre + kaydırma aralığı) ya da null. Açılış ping'i null döner;
// tanınmayan aralık değeri atılır (serbest değer DB'ye girmez).
export function okumaAnahtari(govde) {
  if (!govde || govde.son !== 1) return null;
  const sure = SURE_ARALIKLARI.includes(govde.s) ? govde.s : null;
  const kaydirma = KAYDIRMA_ARALIKLARI.includes(govde.k) ? govde.k : null;
  return sure && kaydirma !== null ? { sure, kaydirma } : null;
}

// Admin tablosu için: satır → il slug'ı + kapsam etiketi (yalnız TR).
export function sehirEtiketi({ ulke, bolge }) {
  if (ulke !== "TR") return { il: null, kapsam: "yurt-disi" };
  const il = PLAKA_IL[String(bolge).padStart(2, "0")] || null;
  return { il, kapsam: il && Object.hasOwn(KAPSAM_ILLER, il) ? "kapsamda" : "disi" };
}

// Admin tablosu: günlük satırlar → (ülke, bölge, şehir) toplamı + tür kırılımı + kapsam etiketi.
export function sehirTopla(satirlar) {
  const g = new Map();
  for (const s of satirlar || []) {
    const k = `${s.ulke}|${s.bolge}|${s.sehir}`;
    const x = g.get(k) || { ulke: s.ulke || "", bolge: s.bolge || "", sehir: s.sehir || "", ...sehirEtiketi(s), toplam: 0, tur: {} };
    x.toplam += s.sayi || 0;
    x.tur[s.tur] = (x.tur[s.tur] || 0) + (s.sayi || 0);
    g.set(k, x);
  }
  return [...g.values()].sort((a, b) => b.toplam - a.toplam);
}

// Final ping satırları → şehir başına okuma özeti; sehirTopla çıktısına iliştirilir.
// kisa = 10 sn altında çıkan, sonuna = sayfayı sonuna kadar kaydıran (≥%90 → 100). Yüzde, final
// ping sayısına göredir (açılış ping'ine göre değil: reklam engelleyici/eski tarayıcı farkı karışmasın).
export function okumaIlistir(sehirler, okumaSatirlari) {
  const g = new Map();
  for (const r of okumaSatirlari || []) {
    const k = `${r.ulke}|${r.bolge}|${r.sehir}`;
    const x = g.get(k) || { final: 0, kisa: 0, sonuna: 0 };
    x.final += r.sayi || 0;
    if (r.sure === "0-10") x.kisa += r.sayi || 0;
    if (r.kaydirma === 100) x.sonuna += r.sayi || 0;
    g.set(k, x);
  }
  const yuzde = (a, b) => (b ? Math.round((a / b) * 100) : null);
  return (sehirler || []).map((s) => {
    const o = g.get(`${s.ulke}|${s.bolge}|${s.sehir}`) || { final: 0, kisa: 0, sonuna: 0 };
    return { ...s, okuma: { final: o.final, kisaYuzde: yuzde(o.kisa, o.final), sonunaYuzde: yuzde(o.sonuna, o.final) } };
  });
}

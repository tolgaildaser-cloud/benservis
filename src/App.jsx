import React, { useState, useEffect, useRef } from "react";
import ServisEkrani from "./ServisEkrani.jsx";
import DPPEkrani from "./DPPEkrani.jsx";
import SERVISLER from "./services-data.json";
import { CIHAZLAR, MARKALAR, markalarForCihaz } from "./constants.js";
import CihazIkon from "./cihaz-ikonlari.jsx";

const FONT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,500&family=Hanken+Grotesk:wght@400;500;600;700&display=swap');`;

// Cihaza özel hızlı belirti butonları (sürtünmeyi azaltır)
const BELIRTILER = {
  "Buzdolabı": ["Soğutmuyor", "Çok ses yapıyor", "Su akıtıyor", "Buzluk çalışmıyor"],
  "Çamaşır Makinesi": ["Su almıyor", "Sıkmıyor / dönmüyor", "Su boşaltmıyor", "Aşırı titreşim/ses"],
  "Bulaşık Makinesi": ["Su tahliye etmiyor", "Temiz yıkamıyor", "Su almıyor", "Hata kodu veriyor"],
  "Fırın / Ocak / Aspiratör": ["Isınmıyor", "Ocak gözü yanmıyor", "Aspiratör çekmiyor / koku", "Fan çalışmıyor", "Kapı/cam sorunu"],
  "Klima": ["Soğutmuyor", "Su damlatıyor", "Koku yapıyor", "Hiç çalışmıyor"],
  "Kombi / Termosifon": ["Sıcak su gelmiyor", "Petekler ısınmıyor", "Su ısıtmıyor", "Basınç düşüyor", "Su akıtıyor", "Arıza kodu veriyor"],
  "Televizyon": ["Açılmıyor", "Görüntü yok ses var", "Ekranda çizgiler", "Uygulama/bağlantı sorunu"],
  "Mikrodalga / Air Fryer": ["Isıtmıyor / pişirmiyor", "Çalışmıyor", "Fan sesi/koku", "Düğme/ekran sorunu"],
  "Süpürge": ["Çekiş zayıf", "Çalışmıyor", "Şarj tutmuyor", "Ses/koku var"],
  "Su Sebili / Arıtma": ["Su gelmiyor", "Su akıtıyor", "Soğutmuyor/ısıtmıyor", "Tat/koku sorunu"],
  "Bilgisayar / Yazıcı": ["Açılmıyor", "Yazdırmıyor", "Donma / yavaşlama", "Kağıt sıkışması", "Aşırı ısınma / ses", "Bağlantı sorunu"],
};

// Gömülü referans tarife (matristen türetilmiş, TR 2026 tahmini) — AI maliyeti buna göre çıpalar
const SEED = {
  "Buzdolabı": [["Termostat/sensör",250,600,500],["Gaz kaçağı/dolum",800,1500,900],["Kompresör değişimi",2500,5000,1200]],
  "Çamaşır Makinesi": [["Su giriş valfi",350,700,600],["Tahliye pompası",400,900,600],["Rulman/keçe",600,1500,1200],["Elektronik kart",1000,2500,800]],
  "Bulaşık Makinesi": [["Tahliye pompası",400,900,700],["Su giriş valfi",350,700,600],["Rezistans/ısıtıcı",600,1400,800]],
  "Fırın / Ocak / Aspiratör": [["Rezistans",350,800,600],["Termostat",300,700,500],["Fan motoru",500,1200,700],["Aspiratör motoru",500,1300,600],["Aspiratör anahtar/kart/lamba",200,700,400]],
  "Klima": [["Gaz dolumu",600,1200,700],["Kapasitör",300,700,500],["Kompresör",2500,5500,1500]],
  "Kombi / Termosifon": [["3 yollu vana",700,1400,800],["Sirkülasyon pompası",1200,2500,900],["Eşanjör",1500,4000,1200],["Rezistans (termosifon)",400,900,500],["Termostat",300,600,400]],
  "Televizyon": [["Backlight LED bar",700,1800,900],["Besleme kartı",600,1500,800],["Panel",3000,8000,1500]],
  "Mikrodalga / Air Fryer": [["Magnetron (mikrodalga)",700,1500,600],["Rezistans (air fryer)",300,700,400],["Fan/termostat/kart",300,900,400]],
  "Süpürge": [["Motor",600,1500,500],["Batarya (şarjlı)",500,1500,400],["Fırça/sensör/anakart",400,2500,500]],
  "Su Sebili / Arıtma": [["Filtre seti",400,1200,300],["Pompa/membran",700,1800,600]],
  "Bilgisayar / Yazıcı": [["Güç kaynağı / şarj soketi",300,2000,400],["Ekran kartı/RAM/disk",1000,6000,400],["Anakart",1500,5000,600],["Ekran/menteşe (laptop)",1200,4000,600],["Yazıcı kafa/kartuş",400,1500,400],["Kağıt besleme/merdane",300,900,500]],
};

function refMetni(cihaz) {
  const arr = SEED[cihaz] || [];
  if (!arr.length) return "Bu cihaz için referans tarife yok; Türkiye 2026 piyasasına göre makul tahmin yürüt.";
  return arr.map(([ad, pmin, pmax, isc]) => `- ${ad}: parça ${pmin}-${pmax} TL, işçilik ~${isc} TL`).join("\n");
}

function extractJSON(text) {
  let t = text.replace(/```json/gi, "").replace(/```/g, "").trim();
  const a = t.indexOf("{"), b = t.lastIndexOf("}");
  if (a !== -1 && b !== -1) t = t.slice(a, b + 1);
  return JSON.parse(t);
}

// Türkiye'de servisin eve gidiş/keşif MİNİMUM bedeli — tüm maliyet tahminlerine
// sabit eklenir (sonuç ne olursa olsun). 2026 sonuna kadar 1000 TL.
// PLAN: 1 Ocak 2027'de (2027-01-01) 1500 TL'ye çıkarılacak — ANCAK önce kullanıcı
// ONAYI; bu sabiti değiştirmeden ÖNCE sor (otomatik tarih geçişi bilinçli olarak YOK).
const SERVIS_GIDIS_BEDELI = 1000;

// Maliyet aralığını beklenen nokta tahminin ±%10'una sabitler (kullanıcı kuralı),
// sonra servis gidiş bedelini (SERVIS_GIDIS_BEDELI) SABİT ekler — bedel ±%10'a tabi değil.
// AI tek "beklenen" döndürür; eski min/max gelirse orta nokta kullanılır.
// 10'a yuvarlanır + gidiş bedeli. Örn (gidiş 1000): beklenen 1200 → 2080–2320 (orta 2200).
function normalizeMaliyet(sonuc) {
  const m = sonuc?.tahminiMaliyet;
  if (!m) return sonuc;
  let beklenen = m.beklenen;
  if (beklenen == null && m.min != null && m.max != null) beklenen = (Number(m.min) + Number(m.max)) / 2;
  beklenen = Number(beklenen);
  if (!beklenen || isNaN(beklenen)) return sonuc;
  const r10 = (x) => Math.round(x / 10) * 10;
  const f = SERVIS_GIDIS_BEDELI; // sabit gidiş bedeli (±%10 dışı, düz eklenir)
  return {
    ...sonuc,
    tahminiMaliyet: {
      ...m,
      beklenen: r10(beklenen) + f,
      min: r10(beklenen * 0.9) + f,
      max: r10(beklenen * 1.1) + f,
    },
  };
}

// Kurumsal logo (yatay lockup + "Bil, gör, çağır." mottosu) — kaynak:
// ~/Desktop/benservis-marka/logo-yatay.svg (sistem-font wordmark, viewBox 540×158)
function BenservisLogo({ style }) {
  return (
    <svg viewBox="0 0 547 162" style={style} xmlns="http://www.w3.org/2000/svg"
      role="img" aria-label="Benservis — Bil, gör, çağır.">
      <g transform="translate(12,14) scale(1.083333)">
        <rect width="120" height="120" rx="28" fill="#2563EB" />
        <path d="M60 22 C42 22 28 36 28 53 C28 75 60 98 60 98 C60 98 92 75 92 53 C92 36 78 22 60 22 Z" fill="#ffffff" />
        <g fill="#2563EB">
          <circle cx="60" cy="51" r="15" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <rect key={deg} x="55.5" y="27" width="9" height="15" rx="3" transform={`rotate(${deg} 60 51)`} />
          ))}
        </g>
        <circle cx="60" cy="51" r="6" fill="#ffffff" />
      </g>
      <text x="162" y="89" fontFamily="-apple-system, 'Helvetica Neue', Arial, sans-serif" fontSize="83" fontWeight="600" letterSpacing="-1.8">
        <tspan fill="#1E293B">ben</tspan><tspan fill="#2563EB">servis</tspan>
      </text>
      <text x="347" y="122" fontFamily="-apple-system, 'Helvetica Neue', Arial, sans-serif" fontSize="31.5" fill="#475569" textAnchor="middle">Bil, gör, çağır.</text>
    </svg>
  );
}

export default function App() {
  const [adim, setAdim] = useState("form");
  const [cihaz, setCihaz] = useState("");
  const [marka, setMarka] = useState("");
  const [garantiAltinda, setGarantiAltinda] = useState(false);
  const [yas, setYas] = useState("");
  const [belirti, setBelirti] = useState("");
  const [sonuc, setSonuc] = useState(null);
  const [hataMsg, setHataMsg] = useState("");
  const [kopyalandi, setKopyalandi] = useState(false);
  const [showServisler, setShowServisler] = useState(false);
  const [showDPP, setShowDPP] = useState(false);
  const [dppInitialSeriNo, setDppInitialSeriNo] = useState("");

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
    if (!marka) { setHataMsg("Marka seçimi zorunludur — garanti yönlendirmesi için gerekli."); return; }
    if (belirti.trim().length < 4) { setHataMsg("Arıza belirtisini birkaç kelimeyle yaz."); return; }
    setHataMsg("");
    setAdim("loading");

    const prompt = `Sen Türkiye'deki ev/elektronik cihazları için deneyimli bir arıza teşhis uzmanısın. Kullanıcı teknik bilmiyor, sadece belirti anlatıyor.

Cihaz: ${cihaz}
Marka: ${marka}
Cihaz yaşı: ${yas || "belirtilmedi"}
Belirti: "${belirti}"

REFERANS TARİFE (maliyeti BUNLARA göre çıpala; görmediğin arıza için bu seviyeye göre makul tahmin yürüt, uydurma):
${refMetni(cihaz)}

ACİLİYET ÖLÇÜTÜ (belirtiye göre değerlendir, varsayılan "orta"ya KAÇMA):
- "yüksek": güvenlik riski (su+elektrik teması, gaz, yanık/duman/kıvılcım kokusu) VEYA süregelen aktif hasar (su taşması/sızıntı yayılıyor) VEYA cihaz tamamen kullanılamaz ve temel ihtiyaç (buzdolabı hiç soğutmuyor → gıda bozulur).
- "orta": cihaz kısmen çalışıyor, sorun zamanla büyüyebilir, birkaç gün içinde ele alınmalı.
- "düşük": kozmetik/konfor sorunu, risk yok, beklemeye dayanır.

Teşhis yap. SADECE şu JSON'u döndür, başka hiçbir şey yazma:

{
 "olasiArizalar":[{"ad":"kısa arıza adı","olasilik":70,"aciklama":"tek cümle sade açıklama"}],
 "tahminiMaliyet":{"beklenen":1200,"not":"kısa not"},
 "kararOnerisi":"tamir",
 "kararAciklama":"tek cümle gerekçe",
 "kendinCozebilirMi":{"mumkun":true,"ipuclari":["kısa adım"]},
 "aciliyet":"orta",
 "aciliyetNot":"tek cümle: bu aciliyetin somut gerekçesi",
 "ekSorular":["teşhisi netleştirecek kısa soru"]
}

MALİYET KURALI: tahminiMaliyet.beklenen = EN OLASI arıza için TEK, gerçekçi beklenen toplam tutar (parça + işçilik, TL). Referans tarifeye çıpala, abartma/küçümseme. Aralık verme — sadece tek bir sayı. (Aralığı sistem otomatik ±%10 hesaplar.)

Kurallar: en fazla 3 olası arıza (olasılığa göre sırala), olasilik 0-100, kararOnerisi sadece "tamir"/"yenisi"/"belirsiz", aciliyet sadece "düşük"/"orta"/"yüksek" ve mutlaka yukarıdaki ölçüte göre, aciliyetNot tek cümle, en fazla 4 ipucu, en fazla 3 ek soru. Kısa yaz.`;

    try {
      const res = await fetch("/api/diagnose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setSonuc(normalizeMaliyet(extractJSON(data.text || "")));
      setAdim("sonuc");
    } catch (e) {
      setHataMsg("Teşhis sırasında bir sorun oldu. Tekrar dener misin?");
      setAdim("hata");
    }
  };

  const ozetMetni = () => {
    if (!sonuc) return "";
    const ar = (sonuc.olasiArizalar || []).map((a) => `• ${a.ad} (%${a.olasilik})`).join("\n");
    const m = sonuc.tahminiMaliyet || {};
    return `Arızam Ne? — Teşhis\nCihaz: ${cihaz}${marka ? " / " + marka : ""}\nBelirti: ${belirti}\n\nOlası arızalar:\n${ar}\n\nTahmini maliyet: ${m.min}-${m.max} TL\nKarar: ${sonuc.kararOnerisi} — ${sonuc.kararAciklama}\nAciliyet: ${sonuc.aciliyet}${sonuc.aciliyetNot ? " — " + sonuc.aciliyetNot : ""}`;
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

  const sifirla = () => { setSonuc(null); setBelirti(""); setMarka(""); setGarantiAltinda(false); setYas(""); setCihaz(""); setAdim("form"); setShowServisler(false); setShowDPP(false); setDppInitialSeriNo(""); };
  const detayEkle = () => setAdim("form");

  const acilRenk = { "düşük": "#22C55E", "orta": "#EA580C", "yüksek": "#DC2626" };
  const kararRenk = { tamir: "#22C55E", yenisi: "#DC2626", belirsiz: "#64748B" };
  const kararEtiket = { tamir: "TAMİR ETTİR", yenisi: "YENİSİNİ AL", belirsiz: "BELİRSİZ" };
  const oneriler = BELIRTILER[cihaz] || [];

  return (
    <div style={s.wrap}>
      {showServisler && (
        <ServisEkrani
          cihaz={cihaz}
          marka={marka}
          garantiAltinda={garantiAltinda}
          belirti={belirti}
          servisler={SERVISLER}
          onKapat={() => setShowServisler(false)}
        />
      )}
      {showDPP && (
        <DPPEkrani
          initialSeriNo={dppInitialSeriNo}
          teshisContext={adim === "sonuc" ? { cihaz, marka } : null}
          onKapat={() => { setShowDPP(false); setDppInitialSeriNo(""); }}
        />
      )}
      <style>{FONT}{CSS}</style>
      <div style={s.grain} />

      <header style={s.header}>
        {/* Kurumsal logo + motto — en üstte */}
        <BenservisLogo style={s.brandLogo} />
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
          <label style={s.label}>Hangi cihaz? <span style={{ color: "#DC2626", fontWeight: 700 }}>*</span></label>
          <div style={s.cihazGrid}>
            {CIHAZLAR.map((c) => {
              const aktif = cihaz === c;
              return (
                <button key={c} onClick={() => {
                  setCihaz(c);
                  // Cihaz değişince seçili marka yeni listede yoksa sıfırla
                  if (marka && !markalarForCihaz(c).includes(marka)) setMarka("");
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
                onChange={(e) => setMarka(e.target.value)}
                disabled={!cihaz}
              >
                <option value="">{cihaz ? "Seç…" : "Önce cihaz seç"}</option>
                {markalarForCihaz(cihaz).map((m) => <option key={m} value={m}>{m}</option>)}
                <option value="Diğer">Diğer / Listede yok</option>
              </select>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <label style={{ ...s.label, whiteSpace: "nowrap" }}>Cihaz yaşı <span style={s.opt}>(ops.)</span></label>
              <select style={{ ...s.input, cursor: "pointer" }} value={yas} onChange={(e) => setYas(e.target.value)}>
                <option value="">Seç…</option>
                <option value="0-2 yıl">0-2 yıl</option>
                <option value="3-5 yıl">3-5 yıl</option>
                <option value="6-10 yıl">6-10 yıl</option>
                <option value="10+ yıl">10+ yıl</option>
              </select>
            </div>
          </div>

          {/* Garanti checkbox — yetkili servis yönlendirmesini tetikler */}
          <label style={s.garantiRow}>
            <input
              type="checkbox"
              checked={garantiAltinda}
              onChange={(e) => setGarantiAltinda(e.target.checked)}
              style={{ width: 16, height: 16, cursor: "pointer", accentColor: "#22C55E" }}
            />
            <span>
              Cihazım garantili{" "}
              <span style={s.opt}>(yalnızca yetkili servisler gösterilir)</span>
            </span>
          </label>

          <label style={s.label}>Ne oluyor? Belirtiyi anlat <span style={{ color: "#DC2626", fontWeight: 700 }}>*</span> <span style={s.opt}>(varsa ekrandaki hata kodunu da yaz)</span></label>
          <textarea ref={belirtiRef} style={s.textarea} value={belirti} onChange={(e) => setBelirti(e.target.value)} rows={4}
            placeholder="örn. Çamaşır makinesi su almıyor, başlatınca tıkırtı geliyor ama dönmüyor. Hata kodu varsa: E3" />

          {hataMsg && <div style={s.err}>{hataMsg}</div>}
          {/* Cihaz seçimi ZORUNLU — seçilmeden teşhis yapılamaz (buton kilitli + tesisEt guard'ı) */}
          <button
            style={{ ...s.cta, ...(cihaz ? {} : { opacity: 0.45, cursor: "not-allowed", boxShadow: "none" }) }}
            onClick={tesisEt}
            disabled={!cihaz}
          >Teşhis et →</button>
          {!cihaz && (
            <p style={{ fontSize: 12.5, color: "#94A3B8", textAlign: "center", margin: "8px 0 0" }}>
              Devam etmek için önce bir cihaz seçin.
            </p>
          )}
          <p style={s.disclaimer}>Sonuç bir ön tahmindir; kesin teşhis için yetkili servis gerekir.</p>
        </div>
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
              <div style={s.fiyat}>{sonuc.tahminiMaliyet?.min?.toLocaleString("tr-TR")}–{sonuc.tahminiMaliyet?.max?.toLocaleString("tr-TR")} <span style={s.tl}>TL</span></div>
              <p style={s.fiyatNot}>{sonuc.tahminiMaliyet?.not}</p>
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
              <span style={{ ...s.acilBadge, color: acilRenk[sonuc.aciliyet], borderColor: acilRenk[sonuc.aciliyet] }}>{(sonuc.aciliyet || "orta").toUpperCase()}</span>
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
              <div style={s.faz2Head}>Tamir ettirmek ister misin?</div>
              <div style={s.faz2Sub}>Konumuna göre sıralar · Direkt arama</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <button style={{ ...s.faz2Btn, opacity: 1 }} onClick={() => setShowServisler(true)}>
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
        <div style={s.footSub}><a href="/blog/" style={s.footLink}>Bilgi Merkezi</a> · AI destekli teşhis · tahmini maliyet</div>
      </footer>
    </div>
  );
}

const INK = "#1E293B", CREAM = "#F8FAFC", AMBER = "#2563EB", GREEN = "#22C55E";
// Minimal & premium paleti
const BG = "#F8FAFC", SURFACE = "#FFFFFF", MUTED = "#475569", FAINT = "#94A3B8", HAIR = "#E2E8F0";

const CSS = `
* { box-sizing: border-box; }
html, body { margin: 0; overflow-x: hidden; }
@keyframes anspin { to { transform: rotate(360deg); } }
@keyframes anrise { from { opacity:0; transform: translateY(10px);} to {opacity:1; transform:none;} }
input:focus, textarea:focus, select:focus { outline: none; border-color: ${AMBER} !important; box-shadow: 0 0 0 3px rgba(37,99,235,.13); }
button { cursor: pointer; font-family: 'Hanken Grotesk', sans-serif; }
.rehber-btn:hover { background: rgba(37,99,235,.13) !important; transform: translateY(-1px); }
`;

const s = {
  wrap: { position: "relative", minHeight: "100%", background: BG, fontFamily: "'Hanken Grotesk', sans-serif", color: INK, padding: "40px 20px 48px", maxWidth: 600, margin: "0 auto" },
  grain: { display: "none" },
  header: { position: "relative", zIndex: 1, marginBottom: 28, textAlign: "center" },
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
  garantiRow: { display: "flex", alignItems: "center", gap: 10, margin: "18px 0 0", cursor: "pointer", fontSize: 13.5, color: GREEN, fontWeight: 600, userSelect: "none" },
  input: { width: "100%", height: 46, padding: "0 14px", borderRadius: 12, border: `1px solid ${HAIR}`, background: SURFACE, fontSize: 14.5, fontFamily: "'Hanken Grotesk', sans-serif", color: INK, transition: "all .15s", boxSizing: "border-box" },
  textarea: { width: "100%", padding: "13px 14px", borderRadius: 12, border: `1px solid ${HAIR}`, background: SURFACE, fontSize: 14.5, fontFamily: "'Hanken Grotesk', sans-serif", color: INK, resize: "none", overflow: "hidden", boxSizing: "border-box", minHeight: 116, lineHeight: 1.55 },
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

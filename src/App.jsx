import React, { useState } from "react";
import ServisEkrani from "./ServisEkrani.jsx";
import DPPEkrani from "./DPPEkrani.jsx";
import SERVISLER from "./services-data.json";
import { CIHAZLAR, MARKALAR, markalarForCihaz } from "./constants.js";

const FONT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,500&family=Hanken+Grotesk:wght@400;500;600;700&display=swap');`;

// Cihaza özel hızlı belirti butonları (sürtünmeyi azaltır)
const BELIRTILER = {
  "Buzdolabı": ["Soğutmuyor", "Çok ses yapıyor", "Su akıtıyor", "Buzluk çalışmıyor"],
  "Çamaşır Makinesi": ["Su almıyor", "Sıkmıyor / dönmüyor", "Su boşaltmıyor", "Aşırı titreşim/ses"],
  "Bulaşık Makinesi": ["Su tahliye etmiyor", "Temiz yıkamıyor", "Su almıyor", "Hata kodu veriyor"],
  "Fırın / Ocak": ["Isınmıyor", "Ocak gözü yanmıyor", "Fan çalışmıyor", "Kapı/cam sorunu"],
  "Klima": ["Soğutmuyor", "Su damlatıyor", "Koku yapıyor", "Hiç çalışmıyor"],
  "Kombi": ["Sıcak su gelmiyor", "Petekler ısınmıyor", "Basınç düşüyor", "Arıza kodu veriyor"],
  "Televizyon": ["Açılmıyor", "Görüntü yok ses var", "Ekranda çizgiler", "Uygulama/bağlantı sorunu"],
  "Termosifon / Şofben": ["Su ısıtmıyor", "Su akıtıyor", "Yetersiz ısınıyor", "Hiç çalışmıyor"],
  "Mikrodalga": ["Isıtmıyor", "Çalışmıyor", "Kıvılcım/ses", "Tabla dönmüyor"],
  "Elektrik Süpürgesi": ["Çekiş zayıf", "Çalışmıyor", "Ses/koku var", "Şarj tutmuyor"],
  "Su Sebili / Arıtma": ["Su gelmiyor", "Su akıtıyor", "Soğutmuyor/ısıtmıyor", "Tat/koku sorunu"],
  "Cep Telefonu": ["Açılmıyor", "Ekran kırık / dokunmatik", "Şarj olmuyor", "Batarya çabuk bitiyor"],
  "Robot Süpürge": ["Şarj tutmuyor", "Çalışmıyor", "Çekiş zayıf", "Haritalama/navigasyon"],
  "Air Fryer": ["Isınmıyor", "Çalışmıyor", "Fan sesi/koku", "Düğme/ekran sorunu"],
  "Masaüstü Bilgisayar": ["Açılmıyor", "Görüntü gelmiyor", "Donma / mavi ekran", "Aşırı ısınma/ses"],
  "Notebook": ["Açılmıyor", "Şarj olmuyor", "Ekran sorunu", "Aşırı ısınma / yavaşlama"],
  "Yazıcı": ["Yazdırmıyor", "Kağıt sıkışması", "Baskı kalitesi bozuk", "Bağlantı sorunu"],
  "Diğer": [],
};

// Gömülü referans tarife (matristen türetilmiş, TR 2026 tahmini) — AI maliyeti buna göre çıpalar
const SEED = {
  "Buzdolabı": [["Termostat/sensör",250,600,500],["Gaz kaçağı/dolum",800,1500,900],["Kompresör değişimi",2500,5000,1200]],
  "Çamaşır Makinesi": [["Su giriş valfi",350,700,600],["Tahliye pompası",400,900,600],["Rulman/keçe",600,1500,1200],["Elektronik kart",1000,2500,800]],
  "Bulaşık Makinesi": [["Tahliye pompası",400,900,700],["Su giriş valfi",350,700,600],["Rezistans/ısıtıcı",600,1400,800]],
  "Fırın / Ocak": [["Rezistans",350,800,600],["Termostat",300,700,500],["Fan motoru",500,1200,700]],
  "Klima": [["Gaz dolumu",600,1200,700],["Kapasitör",300,700,500],["Kompresör",2500,5500,1500]],
  "Kombi": [["3 yollu vana",700,1400,800],["Sirkülasyon pompası",1200,2500,900],["Eşanjör",1500,4000,1200]],
  "Televizyon": [["Backlight LED bar",700,1800,900],["Besleme kartı",600,1500,800],["Panel",3000,8000,1500]],
  "Termosifon / Şofben": [["Rezistans",400,900,500],["Termostat",300,600,400],["Anot/temizlik",300,700,500]],
  "Mikrodalga": [["Magnetron",700,1500,600],["Sigorta/diyot",200,500,400]],
  "Elektrik Süpürgesi": [["Motor",600,1500,500],["Batarya (şarjlı)",500,1200,400]],
  "Su Sebili / Arıtma": [["Filtre seti",400,1200,300],["Pompa/membran",700,1800,600]],
  "Cep Telefonu": [["Ekran değişimi",1200,6000,400],["Batarya",600,1800,400],["Şarj soketi",400,1000,500]],
  "Robot Süpürge": [["Batarya",500,1500,300],["Fırça/motor",600,1500,400],["Sensör/anakart",800,2500,600]],
  "Air Fryer": [["Rezistans",300,700,400],["Fan motoru",300,800,400],["Termostat/kart",300,900,400]],
  "Masaüstü Bilgisayar": [["Güç kaynağı (PSU)",700,2000,400],["Ekran kartı/RAM/disk",1000,6000,400],["Anakart",1500,5000,600]],
  "Notebook": [["Şarj soketi",300,700,500],["Batarya",700,2000,400],["Ekran/menteşe",1200,4000,600],["SSD/RAM yükseltme",600,2500,400]],
  "Yazıcı": [["Kafa/kartuş sistemi",400,1500,400],["Kağıt besleme/merdane",300,900,500],["Anakart/elektronik",500,1500,600]],
  "Diğer": [],
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

export default function App() {
  const [adim, setAdim] = useState("form");
  const [cihaz, setCihaz] = useState("");
  const [marka, setMarka] = useState("");
  const [garantiAltinda, setGarantiAltinda] = useState(false);
  const [hataKodu, setHataKodu] = useState("");
  const [yas, setYas] = useState("");
  const [belirti, setBelirti] = useState("");
  const [sonuc, setSonuc] = useState(null);
  const [hataMsg, setHataMsg] = useState("");
  const [kopyalandi, setKopyalandi] = useState(false);
  const [showServisler, setShowServisler] = useState(false);
  const [showDPP, setShowDPP] = useState(false);
  const [dppInitialSeriNo, setDppInitialSeriNo] = useState("");

  const ekleBelirti = (b) => {
    setBelirti((prev) => {
      const t = prev.trim();
      if (t.toLowerCase().includes(b.toLowerCase())) return prev;
      return t ? `${t}. ${b}` : b;
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
Ekrandaki hata kodu: ${hataKodu || "yok"}
Cihaz yaşı: ${yas || "belirtilmedi"}
Belirti: "${belirti}"

REFERANS TARİFE (maliyeti BUNLARA göre çıpala; görmediğin arıza için bu seviyeye göre makul tahmin yürüt, uydurma):
${refMetni(cihaz)}

ACİLİYET ÖLÇÜTÜ (belirtiye göre değerlendir, varsayılan "orta"ya KAÇMA):
- "yüksek": güvenlik riski (su+elektrik teması, gaz, yanık/duman/kıvılcım kokusu) VEYA süregelen aktif hasar (su taşması/sızıntı yayılıyor) VEYA cihaz tamamen kullanılamaz ve temel ihtiyaç (buzdolabı hiç soğutmuyor → gıda bozulur).
- "orta": cihaz kısmen çalışıyor, sorun zamanla büyüyebilir, birkaç gün içinde ele alınmalı.
- "düşük": kozmetik/konfor sorunu, risk yok, beklemeye dayanır.

Teşhis yap. Maliyet = parça + işçilik, TL, gerçekçi aralık. SADECE şu JSON'u döndür, başka hiçbir şey yazma:

{
 "olasiArizalar":[{"ad":"kısa arıza adı","olasilik":70,"aciklama":"tek cümle sade açıklama"}],
 "tahminiMaliyet":{"min":800,"max":1500,"not":"kısa not"},
 "kararOnerisi":"tamir",
 "kararAciklama":"tek cümle gerekçe",
 "kendinCozebilirMi":{"mumkun":true,"ipuclari":["kısa adım"]},
 "aciliyet":"orta",
 "aciliyetNot":"tek cümle: bu aciliyetin somut gerekçesi",
 "ekSorular":["teşhisi netleştirecek kısa soru"]
}

Kurallar: en fazla 3 olası arıza (olasılığa göre sırala), olasilik 0-100, kararOnerisi sadece "tamir"/"yenisi"/"belirsiz", aciliyet sadece "düşük"/"orta"/"yüksek" ve mutlaka yukarıdaki ölçüte göre, aciliyetNot tek cümle, en fazla 4 ipucu, en fazla 3 ek soru. Kısa yaz.`;

    try {
      const res = await fetch("/api/diagnose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setSonuc(extractJSON(data.text || ""));
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

  const sifirla = () => { setSonuc(null); setBelirti(""); setHataKodu(""); setMarka(""); setGarantiAltinda(false); setYas(""); setCihaz(""); setAdim("form"); setShowServisler(false); setShowDPP(false); setDppInitialSeriNo(""); };
  const detayEkle = () => setAdim("form");

  const acilRenk = { "düşük": "#3A7D44", "orta": "#C8632B", "yüksek": "#B23A2E" };
  const kararRenk = { tamir: "#3A7D44", yenisi: "#B23A2E", belirsiz: "#8A6D3B" };
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
        <div style={s.logoRow}><span style={s.logoMark}>◑</span><h1 style={s.logo}>Arızam Ne?</h1></div>
        <p style={s.tagline}>Cihazın bozuldu, belirtisini yaz — teşhisi ve tahmini maliyeti söyleyelim.</p>
        <div style={s.trustBadge}>Tamirde sürpriz fiyat yok</div>
      </header>

      {/* DPP Banner — ana ekranda her zaman görünür */}
      {adim === "form" && (
        <div style={s.dppBanner}>
          <span style={s.dppBannerText}>📋 Cihaz Pasaportu</span>
          <div style={s.dppBannerSag}>
            <input
              style={s.dppBannerInput}
              value={dppInitialSeriNo}
              onChange={(e) => setDppInitialSeriNo(e.target.value.toUpperCase())}
              onKeyDown={(e) => e.key === "Enter" && setShowDPP(true)}
              placeholder="Seri no ile ara"
            />
            <button
              style={s.dppBannerBtn}
              onClick={() => setShowDPP(true)}
            >
              Ara
            </button>
          </div>
        </div>
      )}

      {(adim === "form" || adim === "hata") && (
        <div style={s.card}>
          <label style={s.label}>Hangi cihaz?</label>
          <div style={s.chipWrap}>
            {CIHAZLAR.map((c) => (
              <button key={c} onClick={() => {
                setCihaz(c);
                // Cihaz değişince seçili marka yeni listede yoksa sıfırla
                if (marka && !markalarForCihaz(c).includes(marka)) setMarka("");
              }} style={{ ...s.chip, ...(cihaz === c ? s.chipActive : {}) }}>{c}</button>
            ))}
          </div>

          {oneriler.length > 0 && (
            <div style={s.oneriBox}>
              <span style={s.oneriLabel}>Sık görülenler:</span>
              <div style={s.oneriWrap}>
                {oneriler.map((b) => (
                  <button key={b} onClick={() => ekleBelirti(b)} style={s.oneriChip}>+ {b}</button>
                ))}
              </div>
            </div>
          )}

          <div style={s.row}>
            <div style={{ flex: 1 }}>
              <label style={s.label}>
                Marka <span style={{ color: "#B23A2E", fontWeight: 700 }}>*</span>
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
            <div style={{ width: 110 }}>
              <label style={s.label}>Hata kodu <span style={s.opt}>(varsa)</span></label>
              <input style={s.input} value={hataKodu} onChange={(e) => setHataKodu(e.target.value)} placeholder="E3" />
            </div>
          </div>

          {/* Garanti checkbox — yetkili servis yönlendirmesini tetikler */}
          <label style={s.garantiRow}>
            <input
              type="checkbox"
              checked={garantiAltinda}
              onChange={(e) => setGarantiAltinda(e.target.checked)}
              style={{ width: 16, height: 16, cursor: "pointer", accentColor: "#3A7D44" }}
            />
            <span>
              Cihazım garantili{" "}
              <span style={s.opt}>(yalnızca yetkili servisler gösterilir)</span>
            </span>
          </label>

          <label style={s.label}>Cihaz kaç yaşında? <span style={s.opt}>(opsiyonel)</span></label>
          <input style={s.input} value={yas} onChange={(e) => setYas(e.target.value)} placeholder="örn. 6 yıl" />

          <label style={s.label}>Ne oluyor? Belirtiyi anlat</label>
          <textarea style={s.textarea} value={belirti} onChange={(e) => setBelirti(e.target.value)} rows={4}
            placeholder="örn. Çamaşır makinesi su almıyor, başlatınca tıkırtı geliyor ama dönmüyor." />

          {hataMsg && <div style={s.err}>{hataMsg}</div>}
          <button style={s.cta} onClick={tesisEt}>Teşhis et →</button>
          <p style={s.disclaimer}>Sonuç bir ön tahmindir; kesin teşhis için yetkili servis gerekir.</p>
        </div>
      )}

      {adim === "loading" && (
        <div style={s.card}>
          <div style={s.loaderWrap}>
            <div style={s.loader} />
            <p style={s.loaderText}>Belirtiler inceleniyor…</p>
            <p style={s.loaderSub}>{cihaz} • olası arızalar eşleştiriliyor</p>
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
              <span style={{ ...s.kararBadge, background: kararRenk[sonuc.kararOnerisi] || "#8A6D3B" }}>{kararEtiket[sonuc.kararOnerisi] || "BELİRSİZ"}</span>
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
              <button
                style={{ ...s.faz2Btn, background: "rgba(255,255,255,.15)", fontSize: 12.5 }}
                onClick={() => { setDppInitialSeriNo(""); setShowDPP(true); }}
              >
                📋 Cihazı Kaydet
              </button>
            </div>
          </div>

          <div style={s.altBtns}>
            <button style={s.copyBtn} onClick={kopyala}>{kopyalandi ? "✓ Kopyalandı" : "⧉ Özeti kopyala"}</button>
            <button style={s.reset} onClick={sifirla}>↺ Yeni arıza</button>
          </div>
        </div>
      )}

      <a href="/ikinci-el" style={s.ikinciElBanner}>
        🛒 <strong>İkinci El Pazaryeri</strong> — DPP pasaportlu güvenli alışveriş
        <span style={s.ikinciElOk}>→</span>
      </a>

      <footer style={s.footer}>Faz 1 — AI teşhis & tahmini maliyet · prototip</footer>
    </div>
  );
}

const INK = "#22302A", CREAM = "#F5EFE2", AMBER = "#C8632B", GREEN = "#3A7D44";
// Minimal & premium paleti
const BG = "#FBFAF8", SURFACE = "#FFFFFF", MUTED = "#6E7771", FAINT = "#9AA29C", HAIR = "#ECEAE3";

const CSS = `
* { box-sizing: border-box; }
@keyframes anspin { to { transform: rotate(360deg); } }
@keyframes anrise { from { opacity:0; transform: translateY(10px);} to {opacity:1; transform:none;} }
input:focus, textarea:focus, select:focus { outline: none; border-color: ${AMBER} !important; box-shadow: 0 0 0 3px rgba(200,99,43,.13); }
button { cursor: pointer; font-family: 'Hanken Grotesk', sans-serif; }
`;

const s = {
  wrap: { position: "relative", minHeight: "100%", background: BG, fontFamily: "'Hanken Grotesk', sans-serif", color: INK, padding: "40px 20px 48px", maxWidth: 600, margin: "0 auto" },
  grain: { display: "none" },
  header: { position: "relative", zIndex: 1, marginBottom: 32, textAlign: "center" },
  logoRow: { display: "flex", alignItems: "center", justifyContent: "center", gap: 9 },
  logoMark: { color: AMBER, fontSize: 26 },
  logo: { fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 34, margin: 0, letterSpacing: "-0.025em" },
  tagline: { fontSize: 16, color: MUTED, maxWidth: 400, margin: "12px auto 16px", lineHeight: 1.5 },
  trustBadge: { display: "inline-block", fontSize: 12, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: AMBER },
  card: { position: "relative", zIndex: 1, background: SURFACE, border: `1px solid ${HAIR}`, borderRadius: 20, padding: "26px 24px", boxShadow: "0 1px 2px rgba(34,48,42,.04), 0 16px 40px -28px rgba(34,48,42,.30)", animation: "anrise .4s ease both" },
  cardSplit: { position: "relative", zIndex: 1, background: "#FFFDF8", border: "1px solid #E5DCC9", borderRadius: 18, padding: 20, marginTop: 14, display: "flex", gap: 18, alignItems: "flex-start", animation: "anrise .4s ease both" },
  cardSoft: { position: "relative", zIndex: 1, background: "#F0EAD8", border: "1px dashed #C9BD9E", borderRadius: 18, padding: 20, marginTop: 14 },
  results: { position: "relative", zIndex: 1 },
  label: { display: "block", fontSize: 13, fontWeight: 700, margin: "18px 0 8px", color: INK, letterSpacing: "-0.01em" },
  opt: { fontWeight: 500, color: FAINT, fontSize: 12 },
  chipWrap: { display: "flex", flexWrap: "wrap", gap: 8 },
  chip: { fontSize: 13, padding: "9px 14px", borderRadius: 10, border: `1px solid ${HAIR}`, background: SURFACE, color: MUTED, fontWeight: 600, transition: "all .15s" },
  chipActive: { background: INK, color: "#fff", border: `1px solid ${INK}` },
  oneriBox: { marginTop: 16, padding: "13px 14px", background: "#F6F4EF", borderRadius: 12 },
  oneriLabel: { fontSize: 12.5, fontWeight: 700, color: MUTED },
  oneriWrap: { display: "flex", flexWrap: "wrap", gap: 7, marginTop: 9 },
  oneriChip: { fontSize: 12.5, padding: "6px 12px", borderRadius: 8, border: `1px solid ${HAIR}`, background: SURFACE, color: AMBER, fontWeight: 600 },
  row: { display: "flex", gap: 12 },
  garantiRow: { display: "flex", alignItems: "center", gap: 10, margin: "18px 0 0", cursor: "pointer", fontSize: 13.5, color: GREEN, fontWeight: 600, userSelect: "none" },
  input: { width: "100%", padding: "12px 14px", borderRadius: 12, border: `1px solid ${HAIR}`, background: SURFACE, fontSize: 14.5, fontFamily: "'Hanken Grotesk', sans-serif", color: INK, transition: "all .15s" },
  textarea: { width: "100%", padding: "13px 14px", borderRadius: 12, border: `1px solid ${HAIR}`, background: SURFACE, fontSize: 14.5, fontFamily: "'Hanken Grotesk', sans-serif", color: INK, resize: "vertical", lineHeight: 1.55 },
  err: { marginTop: 14, color: "#B23A2E", fontSize: 13.5, fontWeight: 600 },
  cta: { marginTop: 22, width: "100%", padding: "15px", borderRadius: 13, border: "none", background: AMBER, color: "#fff", fontSize: 15.5, fontWeight: 700, letterSpacing: ".01em", boxShadow: "0 10px 24px -12px rgba(200,99,43,.55)", transition: "transform .15s ease, box-shadow .15s ease" },
  disclaimer: { fontSize: 11.5, color: FAINT, textAlign: "center", marginTop: 14, marginBottom: 0, lineHeight: 1.5 },
  loaderWrap: { textAlign: "center", padding: "26px 0" },
  loader: { width: 38, height: 38, borderRadius: "50%", border: "4px solid #E5DCC9", borderTopColor: AMBER, margin: "0 auto 16px", animation: "anspin 1s linear infinite" },
  loaderText: { fontFamily: "'Fraunces', serif", fontSize: 19, fontWeight: 600, margin: 0 },
  loaderSub: { fontSize: 13, color: "#9A9384", marginTop: 6 },
  secHead: { fontFamily: "'Fraunces', serif", fontSize: 17, fontWeight: 600, marginBottom: 12 },
  secHeadSoft: { fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 600, marginBottom: 10, color: "#6E6450" },
  ariza: { marginBottom: 15 },
  arizaTop: { display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 5 },
  arizaAd: { fontWeight: 700, fontSize: 15 },
  arizaPct: { fontWeight: 700, fontSize: 14, color: AMBER, fontFamily: "'Fraunces', serif" },
  barTrack: { height: 7, background: "#EDE5D3", borderRadius: 99, overflow: "hidden" },
  barFill: { height: "100%", background: `linear-gradient(90deg, ${AMBER}, #E0894F)`, borderRadius: 99 },
  arizaAcik: { fontSize: 13.5, color: "#5C6660", margin: "6px 0 0", lineHeight: 1.45 },
  fiyat: { fontFamily: "'Fraunces', serif", fontSize: 30, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.02em" },
  tl: { fontSize: 16, color: "#9A9384" },
  fiyatNot: { fontSize: 13, color: "#5C6660", marginTop: 8, lineHeight: 1.45 },
  divider: { width: 1, alignSelf: "stretch", background: "#EAE1CE" },
  kararBadge: { display: "inline-block", color: "#fff", fontSize: 12.5, fontWeight: 700, letterSpacing: ".04em", padding: "6px 12px", borderRadius: 8 },
  acilBadge: { display: "inline-block", fontSize: 13, fontWeight: 700, letterSpacing: ".05em", padding: "6px 12px", borderRadius: 8, borderWidth: "1.5px", borderStyle: "solid", background: SURFACE },
  ipucuList: { listStyle: "none", padding: 0, margin: 0 },
  ipucu: { fontSize: 13.5, color: "#3F4843", display: "flex", gap: 8, marginBottom: 7, lineHeight: 1.4 },
  tick: { color: GREEN, fontWeight: 800 },
  soru: { fontSize: 13.5, color: "#6E6450", margin: "0 0 6px", lineHeight: 1.4 },
  linkBtn: { marginTop: 8, background: "none", border: "none", color: AMBER, fontWeight: 700, fontSize: 13.5, padding: 0, textDecoration: "underline" },
  faz2: { position: "relative", zIndex: 1, marginTop: 16, background: INK, color: CREAM, borderRadius: 18, padding: "18px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 },
  faz2Head: { fontFamily: "'Fraunces', serif", fontSize: 17, fontWeight: 600 },
  faz2Sub: { fontSize: 13, color: "#B8BEB6", marginTop: 3 },
  faz2Btn: { background: AMBER, color: "#fff", border: "none", borderRadius: 11, padding: "11px 15px", fontWeight: 700, fontSize: 14, opacity: .85, whiteSpace: "nowrap" },
  altBtns: { display: "flex", gap: 10, marginTop: 16 },
  copyBtn: { flex: 1, padding: "12px", borderRadius: 12, border: `1.5px solid ${AMBER}`, background: "rgba(200,99,43,.06)", color: AMBER, fontSize: 14.5, fontWeight: 700 },
  reset: { flex: 1, padding: "12px", borderRadius: 12, border: "1.5px solid #DDD3BE", background: "transparent", color: INK, fontSize: 14.5, fontWeight: 600 },
  footer: { position: "relative", zIndex: 1, textAlign: "center", fontSize: 11.5, color: "#A59E8E", marginTop: 26 },
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
    background: "#FFFDF8", border: "1.5px solid #E5DCC9",
    color: INK, textDecoration: "none", fontSize: 14, lineHeight: 1.4,
  },
  ikinciElOk: { fontSize: 18, color: AMBER, flexShrink: 0 },
};

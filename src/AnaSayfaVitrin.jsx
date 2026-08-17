// src/AnaSayfaVitrin.jsx — YK #69 koşu 3: ana sayfa vitrini (Tolga, 17 Ağu akşam:
// "armut.com sitesini bize uyarla" + "bizimki çok basit kalıyor"; kapsam A = yalnız
// görünüm/deneyim).
//
// ⛔ KOPYA DEĞİL UYARLAMA. Armut'tan alınan tek şey SAYFA İSKELETİ (hero → kartlar →
// nasıl çalışır → sayılar). Fotoğrafı, metni, yeşili, logosu HİÇBİR yerde yok; dil,
// renk ve tipografi Benservis (Fraunces + #2563EB).
// ⛔ İŞ MODELİ DEĞİŞMEZ: teklif toplama/havuz YOK (pivot kararı). Hero kutusu YENİ AKIŞ
// AÇMAZ — mevcut teşhis formunun `belirti` alanına yazar ve forma indirir.
//
// 📊 VİTRİNDEKİ HER SAYI KAYNAĞINDAN OKUNDU (şişirme yasağı, Tolga):
//   7.832 servis · 7.286 Google puanlı · 96 ilçe · 207 SERBİS  → src/services-data.json
//   52 onaylı tarife satırı, cihaz başı başlangıç bandı        → src/tarife-seed.js
//   79 rehber                                                   → content/blog/*.md
// ⚠️ Backlog'daki "6.475 yetkili servis" ifadesi VİTRİNE ALINMADI: o rakam servis.gov.tr
// ham CSV'sinden geliyor, bizim dizinimizde 420 "yetkili" kaydı var. Yanlış olurdu.
import React, { useState, useEffect, useRef } from "react";
import { CIHAZLAR } from "./constants.js";
import { SEED } from "./tarife-seed.js";

const BLUE = "#2563EB", NAVY = "#1E293B", BG = "#F8FAFC", HAIR = "#E2E8F0", MUTED = "#475569", FAINT = "#64748B";

// Cihaz adı → kategori ikonu dosya adı (public/tamir-gorsel/kategori/<slug>.webp).
// Dosyalar zaten repoda; ad eşlemesi elle sabitlendi çünkü slug üretimi Türkçe
// karakterlerde (ı/İ) tarayıcı-bağımlı sonuç veriyor.
const IKON = {
  "Buzdolabı": "buzdolabi",
  "Çamaşır Makinesi": "camasir-makinesi",
  "Bulaşık Makinesi": "bulasik-makinesi",
  "Televizyon / Monitör": "televizyon-monitor",
  "Fırın / Ocak / Aspiratör": "firin-ocak-aspirator",
  "Klima": "klima",
  "Kombi / Termosifon": "kombi-termosifon",
  "Mikrodalga / Air Fryer": "mikrodalga-air-fryer",
  "Süpürge": "supurge",
  "Su Sebili / Arıtma": "su-sebili-aritma",
  "Bilgisayar / Yazıcı": "bilgisayar-yazici",
};

// Cihazın en düşük onaylı işçilik/parça başlangıcı — "X TL'den" bandı buradan gelir.
// 🔥 Araştırma raporu deseni 4: TR'de hiçbir oyuncu (Armut dahil) fiyatı vitrine
// koymuyor; tarife motoru bunu yapabilecek tek altyapı.
const baslangic = (cihaz) => {
  const satirlar = SEED[cihaz];
  if (!Array.isArray(satirlar) || !satirlar.length) return null;
  const min = Math.min(...satirlar.map((r) => r[1]).filter(Number.isFinite));
  return Number.isFinite(min) ? min : null;
};

// Hero kutusundan cihaz tahmini — mevcut sözlükle, yeni NLP yok.
// Eşleşmezse cihaz seçtirme adımı olduğu gibi kalır (kullanıcı formda seçer).
const CIHAZ_IPUCU = [
  ["Çamaşır Makinesi", ["çamaşır", "camasir"]],
  ["Bulaşık Makinesi", ["bulaşık", "bulasik"]],
  ["Buzdolabı", ["buzdolab", "dolap", "derin dondurucu"]],
  ["Klima", ["klima"]],
  ["Kombi / Termosifon", ["kombi", "termosifon", "petek", "radyatör"]],
  ["Fırın / Ocak / Aspiratör", ["fırın", "firin", "ocak", "aspiratör", "davlumbaz"]],
  ["Televizyon / Monitör", ["televizyon", "tv", "monitör"]],
  ["Mikrodalga / Air Fryer", ["mikrodalga", "air fryer", "airfryer"]],
  ["Süpürge", ["süpürge", "supurge"]],
  ["Su Sebili / Arıtma", ["su sebili", "arıtma", "aritma"]],
  ["Bilgisayar / Yazıcı", ["bilgisayar", "laptop", "yazıcı", "yazici", "printer"]],
];
const cihazTahmin = (metin) => {
  const t = (metin || "").toLocaleLowerCase("tr");
  for (const [cihaz, ipuclari] of CIHAZ_IPUCU) if (ipuclari.some((k) => t.includes(k))) return cihaz;
  return null;
};

// Hero'da dönüşümlü görünen örnekler — placeholder'a gerçek cümle koymak
// (araştırma deseni 1) kullanıcıya "buraya ne yazacağımı biliyorum" hissi veriyor.
const POPULER = [
  { etiket: "Çamaşır makinesi su almıyor", cihaz: "Çamaşır Makinesi" },
  { etiket: "Bulaşıklar kirli çıkıyor", cihaz: "Bulaşık Makinesi" },
  { etiket: "Buzdolabı soğutmuyor", cihaz: "Buzdolabı" },
  { etiket: "Klima soğutmuyor", cihaz: "Klima" },
];

const SAYILAR = [
  { buyuk: "7.832", kucuk: "servis kaydı" },
  { buyuk: "7.286", kucuk: "Google puanlı" },
  { buyuk: "96", kucuk: "ilçe" },
  { buyuk: "52", kucuk: "onaylı tarife kalemi" },
];

const ADIMLAR = [
  { n: "1", b: "Derdini yaz", a: "Cihazını ve belirtiyi kendi kelimelerinle anlat. Teknik terim gerekmez." },
  { n: "2", b: "Olası arızayı ve tahmini maliyeti gör", a: "Onaylı tarife kalemlerine dayanan bir aralık — reklam değil, veri." },
  { n: "3", b: "Puanlı servise kendin ulaş", a: "Yanındaki Google puanlı servisleri gör, doğrudan ara. Araya kimse girmez." },
];

export default function AnaSayfaVitrin({ onDertYaz, onCihazSec, onFormaGit, vaatSecenek = "A" }) {
  const [dert, setDert] = useState("");
  // Sticky bandı hero ekrandan çıkınca göster: hero'nun kendi kutusu görünürken
  // ikinci bir CTA gürültü olur (araştırma deseni 7 "tek net çağrı" ilkesi).
  const heroRef = useRef(null);
  const [stickyGorunur, setStickyGorunur] = useState(false);
  // ⚠️ IntersectionObserver DENENDİ, BIRAKILDI: gizli/arka plan sekmede hiç olay
  // üretmiyor (ölçüldü — hero viewport'un 422px üstündeyken bile 0 geri çağrı;
  // requestAnimationFrame'in aynı ortamda durmasıyla aynı sınıf sorun). Basit scroll
  // eşiği hem her ortamda çalışıyor hem test edilebiliyor.
  useEffect(() => {
    const bak = () => {
      const el = heroRef.current;
      if (!el) return;
      const alt = el.getBoundingClientRect().bottom;
      setStickyGorunur(alt < 0); // hero tamamen yukarı kaydıysa göster
    };
    bak();
    window.addEventListener("scroll", bak, { passive: true });
    window.addEventListener("resize", bak);
    return () => { window.removeEventListener("scroll", bak); window.removeEventListener("resize", bak); };
  }, []);

  // İki hero vaadi — Tolga PR'da seçecek (backlog: "2 alternatif sun").
  // A: sonuç odaklı, fiyat şeffaflığını öne alır. B: karar odaklı, "gerek var mı?" sorusunu sahiplenir.
  const VAAT = {
    A: { h1: "Cihazın neden bozuldu, tamiri kaça mal olur?", alt: "Belirtiyi yaz; olası arızayı ve tahmini tutarı ücretsiz gör. Sonra yanındaki puanlı servisi kendin ara." },
    B: { h1: "Belki de tamirciye hiç gerek yok.", alt: "Önce ne olduğunu öğren, sonra çağır. Ücretsiz teşhis + tahmini maliyet, üstelik çoğu arıza evde çözülüyor." },
  }[vaatSecenek] || {};

  const gonder = () => {
    const metin = dert.trim();
    if (metin.length < 4) return;
    onDertYaz(metin, cihazTahmin(metin));
  };

  return (
    <>
      {/* ═══ ① HERO ═══
          Fotoğraf yerine derinlikli degrade + ızgara dokusu: casting kuralına uyan
          uygun stok bulunamadı, GRF'ye foto talebi backlog'a açıldı. Placeholder
          BİLEREK "boş fotoğraf kutusu" değil — kendi başına bitmiş görünüyor. */}
      <section ref={heroRef} style={st.hero}>
        <div style={st.heroIc}>
          <div style={st.rozetler}>
            <span style={st.rozet}>★ Google puanlı servisler</span>
            <span style={st.rozet}>✓ Ücretsiz teşhis</span>
            <span style={st.rozet}>◎ 96 ilçe verisi</span>
          </div>

          <h1 style={st.h1}>{VAAT.h1}</h1>
          <p style={st.altBaslik}>{VAAT.alt}</p>

          {/* Tek büyük "derdini yaz" kutusu — araştırma deseni 1.
              ⛔ Yeni akış açmaz: yazılan metin mevcut formun `belirti` alanına iner. */}
          <div style={st.kutuSar}>
            <textarea
              value={dert}
              onChange={(e) => setDert(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) gonder(); }}
              placeholder="Çamaşır makinesi su almıyor, program başlamıyor…"
              rows={2}
              style={st.kutu}
              aria-label="Cihazının derdini yaz"
            />
            <button onClick={gonder} disabled={dert.trim().length < 4} style={{ ...st.kutuBtn, opacity: dert.trim().length < 4 ? 0.5 : 1 }}>
              Ücretsiz teşhis et →
            </button>
          </div>

          <div style={st.populer}>
            <span style={st.populerEtiket}>Popüler:</span>
            {POPULER.map((p) => (
              <button key={p.etiket} style={st.populerLink} onClick={() => { setDert(p.etiket); onDertYaz(p.etiket, p.cihaz); }}>
                {p.etiket}
              </button>
            ))}
          </div>

          <p style={st.guvenSatiri}>
            <b style={{ color: "#fff" }}>7.832</b> servis kaydı · <b style={{ color: "#fff" }}>7.286</b> Google puanlı · <b style={{ color: "#fff" }}>207</b> SERBİS'te doğrulanmış · ücretsiz
          </p>
        </div>
      </section>

      {/* ═══ ② CİHAZ KARTLARI + "X TL'den" ═══ */}
      <section style={st.bolumDis}><div style={st.bolum}>
        <h2 style={st.h2}>Hangi cihazın bozuldu?</h2>
        <p style={st.bolumAlt}>Başlangıç tutarları onaylı tarife kalemlerinden gelir — tahmini aralığı teşhisten sonra görürsün.</p>
        <div className="vitrin-kartlar" style={st.kartlar}>
          {CIHAZLAR.map((c) => {
            const bas = baslangic(c);
            return (
              <button key={c} style={st.kart} onClick={() => onCihazSec(c)}>
                <img src={`/tamir-gorsel/kategori/${IKON[c]}.webp`} alt="" width="44" height="44" loading="lazy" decoding="async" style={st.kartIkon} />
                <span style={st.kartAd}>{c}</span>
                {bas != null && <span style={st.kartFiyat}>{bas.toLocaleString("tr-TR")} TL'den</span>}
              </button>
            );
          })}
        </div>
      </div></section>

      {/* ═══ ③ NASIL ÇALIŞIR ═══ */}
      <section style={{ ...st.bolumDis, background: "#fff", borderTop: `1px solid ${HAIR}`, borderBottom: `1px solid ${HAIR}` }}><div style={st.bolum}>
        <h2 style={st.h2}>Nasıl çalışır?</h2>
        <div className="vitrin-adimlar" style={st.adimlar}>
          {ADIMLAR.map((a) => (
            <div key={a.n} style={st.adim}>
              <span style={st.adimNo}>{a.n}</span>
              <b style={st.adimBaslik}>{a.b}</b>
              <p style={st.adimAciklama}>{a.a}</p>
            </div>
          ))}
        </div>
      </div></section>

      {/* ═══ ⑥ MOBİL STICKY CTA ═══
          Araştırma deseni 7: mobilde alt sabit bant terk oranını belirgin düşürüyor.
          YALNIZ mobilde (≤640px) ve hero geçildikten SONRA görünür — hero'nun kendi
          kutusu ekrandayken ikinci bir çağrı gürültü olurdu. Kendi kendine forma iner. */}
      <button className="vitrin-sticky" data-gorunur={stickyGorunur ? "1" : "0"} onClick={onFormaGit} aria-label="Arızamı teşhis et">
        Arızamı ücretsiz teşhis et →
      </button>

      {/* ═══ ④ GERÇEK SAYILAR ═══ (şişirme yok; hepsi repodan sayıldı) */}
      <section style={st.bolumDis}><div style={st.bolum}>
        <div className="vitrin-sayilar" style={st.sayilar}>
          {SAYILAR.map((x) => (
            <div key={x.kucuk} style={st.sayiKutu}>
              <span style={st.sayiBuyuk}>{x.buyuk}</span>
              <span style={st.sayiKucuk}>{x.kucuk}</span>
            </div>
          ))}
        </div>
      </div></section>
    </>
  );
}

const st = {
  // FULL-BLEED: App'in kapsayıcısı maxWidth:600 — vitrin bölümleri o kolona sıkışırsa
  // "platform" hissi kaybolur. Bu üç satır kapsayıcıdan taşırıp tam genişlik verir;
  // form kartı 600px'te olduğu gibi kalır (ona dokunulmaz).
  tasir: { width: "100vw", marginLeft: "calc(50% - 50vw)" },
  hero: {
    position: "relative", overflow: "hidden",
    width: "100vw", marginLeft: "calc(50% - 50vw)",
    // Derinlik: iki katmanlı radyal ışık + lacivert taban. Düz renk yerine
    // atmosfer — premium his süsten değil katmandan gelir.
    background: `radial-gradient(1200px 600px at 15% -10%, #3B82F6 0%, transparent 55%), radial-gradient(900px 500px at 90% 10%, #1D4ED8 0%, transparent 50%), linear-gradient(180deg, #1E293B 0%, #172033 100%)`,
    padding: "clamp(48px, 9vw, 96px) 20px clamp(40px, 7vw, 72px)",
  },
  heroIc: { maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 },
  rozetler: { display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 22 },
  rozet: {
    fontSize: 12.5, fontWeight: 600, color: "#DBEAFE",
    background: "rgba(255,255,255,.10)", border: "1px solid rgba(255,255,255,.18)",
    borderRadius: 999, padding: "6px 13px", whiteSpace: "nowrap",
  },
  h1: {
    fontFamily: "Fraunces, Georgia, serif", fontWeight: 600, color: "#fff",
    fontSize: "clamp(30px, 5.4vw, 52px)", lineHeight: 1.1, letterSpacing: "-.02em", margin: "0 0 14px",
  },
  altBaslik: { color: "#CBD5E1", fontSize: "clamp(15px, 2.1vw, 17.5px)", lineHeight: 1.6, margin: "0 auto 26px", maxWidth: 560 },
  kutuSar: {
    display: "flex", gap: 10, alignItems: "stretch", background: "#fff",
    borderRadius: 16, padding: 10, boxShadow: "0 20px 50px -20px rgba(0,0,0,.55)", textAlign: "left",
  },
  kutu: {
    flex: 1, border: "none", outline: "none", resize: "none", background: "transparent",
    fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontSize: 16, lineHeight: 1.45,
    color: NAVY, padding: "10px 12px", minHeight: 56,
  },
  kutuBtn: {
    border: "none", background: BLUE, color: "#fff", borderRadius: 12,
    padding: "0 22px", fontFamily: "inherit", fontSize: 15, fontWeight: 700,
    cursor: "pointer", whiteSpace: "nowrap", alignSelf: "stretch",
  },
  populer: { display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginTop: 16 },
  populerEtiket: { color: "#94A3B8", fontSize: 13, alignSelf: "center" },
  populerLink: {
    background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.14)", color: "#E2E8F0",
    borderRadius: 999, padding: "6px 12px", fontSize: 13, fontFamily: "inherit", cursor: "pointer",
  },
  guvenSatiri: { color: "#94A3B8", fontSize: 13.5, marginTop: 22, marginBottom: 0 },

  bolumDis: { width: "100vw", marginLeft: "calc(50% - 50vw)" },
  bolum: { maxWidth: 1080, margin: "0 auto", padding: "clamp(40px, 6vw, 64px) 20px" },
  h2: {
    fontFamily: "Fraunces, Georgia, serif", fontWeight: 600, color: NAVY,
    fontSize: "clamp(22px, 3.2vw, 30px)", letterSpacing: "-.01em", margin: "0 0 8px", textAlign: "center",
  },
  bolumAlt: { color: FAINT, fontSize: 14.5, textAlign: "center", margin: "0 auto 28px", maxWidth: 620, lineHeight: 1.6 },

  kartlar: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 12 },
  kart: {
    display: "flex", flexDirection: "column", alignItems: "center", gap: 7,
    background: "#fff", border: `1px solid ${HAIR}`, borderRadius: 14, padding: "18px 12px",
    cursor: "pointer", fontFamily: "inherit", textAlign: "center",
    boxShadow: "0 1px 2px rgba(30,41,59,.04)",
  },
  kartIkon: { display: "block", objectFit: "contain" },
  kartAd: { fontSize: 13.5, fontWeight: 600, color: NAVY, lineHeight: 1.3 },
  kartFiyat: { fontSize: 12.5, fontWeight: 700, color: BLUE },

  adimlar: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 20, maxWidth: 900, margin: "0 auto" },
  adim: { textAlign: "center", padding: "0 8px" },
  adimNo: {
    display: "inline-flex", alignItems: "center", justifyContent: "center", width: 38, height: 38,
    borderRadius: "50%", background: "#EFF4FF", color: BLUE, fontWeight: 800, fontSize: 16, marginBottom: 12,
  },
  adimBaslik: { display: "block", color: NAVY, fontSize: 16, marginBottom: 6 },
  adimAciklama: { color: MUTED, fontSize: 14, lineHeight: 1.6, margin: 0 },

  sayilar: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 14 },
  sayiKutu: {
    background: BG, border: `1px solid ${HAIR}`, borderRadius: 14,
    padding: "20px 14px", textAlign: "center",
  },
  sayiBuyuk: {
    display: "block", fontFamily: "Fraunces, Georgia, serif", fontWeight: 600,
    fontSize: "clamp(24px, 3.4vw, 32px)", color: NAVY, lineHeight: 1.1,
  },
  sayiKucuk: { display: "block", color: FAINT, fontSize: 13, marginTop: 5 },
};

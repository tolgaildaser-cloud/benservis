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
import { SSS } from "./sss.js";
import TelefonaEkleBlok from "./TelefonaEkleBlok.jsx";
import { CIHAZLAR } from "./constants.js";
import BenservisLogo from "./BenservisLogo.jsx";
import { BLUE, NAVY, BG, HAIR, MUTED, SLATE as FAINT } from "./theme.js";

// ⚠️ DÜZELTME (YK #69 cila ①): bu dosya `FAINT` adını #64748B ile tanımlıyordu, oysa
// külliyatta FAINT = #94A3B8; #64748B'nin adı SLATE. Aynı ad iki farklı tonu gösteriyordu.
// Değer DEĞİŞMİYOR — kullanılan ton yine #64748B, yalnız doğru adıyla (SLATE) çağrılıyor.

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

// ——— CİHAZ KARTI FOTOĞRAFI (Tolga, 17 Ağu: "cihazların fotoğrafları da olsun
// artık armuttaki gibi") ———
// Kart, fotoğrafı OLAN cihazda Armut deseni gibi üstte geniş görsel gösterir;
// olmayanda mevcut çizgi ikonuna düşer → GRF dalga dalga teslim ettikçe kartlar
// kendiliğinden geçer, ara durumda hiçbir kart bozulmaz (kapak sisteminin aynısı).
// ⚠️ Liste BİLEREK elle tutuluyor: SPA build zamanı dosya varlığını göremez;
// `onError` ile denemek her açılışta 11 adet 404 isteği üretirdi.
// GRF bir cihazın fotoğrafını teslim edince FE bu sete adını ekler.
const FOTOGRAFLI = new Set([
  // GRF teslimi 17 Ağu — 8/11 kart. Kalan 3 (Mikrodalga · Kombi · Su Sebili)
  // BİLEREK çizgi ikonunda: GRF'nin devir belgesinde gerekçesi yazılı.
  "Buzdolabı", "Çamaşır Makinesi", "Bulaşık Makinesi", "Televizyon / Monitör",
  "Fırın / Ocak / Aspiratör", "Klima", "Süpürge", "Bilgisayar / Yazıcı",
]);

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

// "Bil, gör, çağır" — logonun altındaki slogan burada açılıyor. Sürecin üç adımını
// da bu bölüm taşıyor: 18 Ağu'da ayrı bir "Nasıl çalışır?" bölümü vardı, Tolga
// "bil gör çağır ile tekrar oldu" deyip kaldırttı. Eksen farkı (süreç vs. vaat)
// okuyucuya geçmemiş — tek bölüm kaldı.
const SLOGAN = [
  {
    k: "Bil",
    b: "Neyin bozulduğunu bil",
    a: "Servise gitmeden önce olası arızayı öğren. Teknik terim yok; belirtiyi kendi cümlenle yaz, karşılığını sade Türkçe al.",
  },
  {
    k: "Gör",
    b: "Tutarı önceden gör",
    a: "Fiyatı iş bittikten sonra değil, başlamadan gör. Verdiğimiz aralık onaylı tarife kalemlerine dayanır — reklam değil, veri.",
  },
  {
    k: "Çağır",
    b: "Servisi kendin çağır",
    a: "Yanındaki Google puanlı servisleri gör ve doğrudan ara. Yönlendirme yok, araya giren yok, komisyon yok.",
  },
];

// Gezinme kartlari. Cihaz kartlariyla AYNI iskelet: 16:10 gorsel alani + ad,
// hover'da ayni hareket. `foto` dolunca kart fotografa gecer; bos oldugu surece
// ayni alanda buyutulmus cizgi ikon durur (cihaz kartlarindaki desenin aynisi,
// dalga dalga teslim edilebilir). Fotograflar GRF'den bekleniyor.
const GEZINME = [
  {
    ad: "Bilgi Merkezi", href: "/blog/", foto: "", ikon: "kitap",
    baslik: "Önce öğren, sonra çağır",
    metin: "Cihazın neden bozulduğunu sade Türkçeyle anlatan yazılar. Teknik terim yok; çoğu arızada servise gerek olup olmadığını kendin anlarsın.",
    btn: "Yazılara göz at",
  },
  {
    ad: "Tamir Merkezi", href: "/tamir/", foto: "", ikon: "anahtar",
    baslik: "Belirtiden çözüme",
    metin: "\"Su almıyor\", \"soğutmuyor\", \"ses yapıyor\" — belirtiyle başlayıp adım adım ne kontrol edeceğini gösteren rehberler.",
    btn: "Rehberlere bak",
  },
  {
    ad: "Kullanım Kılavuzları", href: "/kilavuzlar/", foto: "", ikon: "acik-kitap",
    baslik: "Kılavuzun elinin altında",
    metin: "Hata kodunu okumak ya da bir ayarı bulmak için markanın resmî kullanım kılavuzuna doğrudan ulaş.",
    btn: "Kılavuz ara",
  },
  {
    ad: "Yakın Servisler", href: null, foto: "", ikon: "konum",
    baslik: "Yanındaki servisi gör",
    metin: "Google puanlı servisleri yakınlığa göre sırala, telefonunu al, doğrudan kendin ara. Araya kimse girmez.",
    btn: "Servisleri gör",
  },
];

// Izgara ikonlari — 26 px'lik nav ikonlari 16:10 alanda kayboluyordu, buyuk
// cizildiler. Fotograf gelince bu tamamen devre disi kalir.
const IZGARA_IKON = {
  kitap: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></>,
  anahtar: <path d="M14.6 6.4a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.8 3.8Z" />,
  "acik-kitap": <path d="M12 7.5v13M3 18.5a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3H3Z" />,
  konum: <><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></>,
};

export default function AnaSayfaVitrin({ onDertYaz, onCihazSec, onFormaGit, onLogo, onServisler }) {
  const [dert, setDert] = useState("");
  const [sssAcik, setSssAcik] = useState(null); // SSS akordeon açık indeksi
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

  // HERO VAADİ — Tolga seçti (17 Ağu, PR #14: "a"). İki alternatif sunulmuştu;
  // B ("Belki de tamirciye hiç gerek yok.") ve `?vaat=` önizleme parametresi karar
  // verildiği için kaldırıldı — seçilmeyen metni kodda tutmak ölü dal bırakırdı.
  const VAAT = {
    h1: "Cihazın neden bozuldu, tamiri kaça mal olur?",
    alt: "Belirtiyi yaz; olası arızayı ve tahmini tutarı ücretsiz gör. Sonra yanındaki puanlı servisi kendin ara.",
  };

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
        {/* GRF hero fotoğrafı (17 Ağu teslimi) — degradenin ÜZERİNE biner.
            ⚠️ Degrade SİLİNMEDİ: dosya inmezse/yavaş inerse ekran boş kalmaz, altta
            aynı kompozisyon durur. Üstündeki koyu perde başlık ve kutunun okunmasını
            garanti eder (GRF'nin "kare arkadan aydınlatmalı" uyarısı için). */}
        <img
          src="/anasayfa/hero.webp"
          srcSet="/anasayfa/hero-780.webp 780w, /anasayfa/hero-1200.webp 1200w, /anasayfa/hero-1600.webp 1600w, /anasayfa/hero.webp 2400w"
          sizes="100vw"
          alt="Salonda kanepenin önünde oturup birlikte çay içen anne, baba ve çocuk"
          width="2400" height="1200" fetchPriority="high" decoding="async"
          style={st.heroFoto}
        />
        <div style={st.heroPerde} aria-hidden="true" />
        {/* ═══ ÜST BAR — hero'nun ÜZERİNE biner (Tolga, 17 Ağu: "benservis logosu hero
            üzerine binsin armuttaki gibi ve menuler de binsin"). Şeffaf zemin, beyaz
            logo; koyu hero üstünde kendi kutusu yok — Armut deseni. */}
        <div style={st.ustBar}>
          <button onClick={onLogo} aria-label="Ana sayfa" style={st.ustLogoBtn}>
            <BenservisLogo style={st.ustLogo} benColor="#FFFFFF" servisColor="#93C5FD" mottoColor="#CBD5E1" />
          </button>
          <nav style={st.ustMenu} aria-label="Ana menü">
            <a href="/blog/" style={st.ustLink}>Bilgi Merkezi</a>
            <a href="/tamir/" style={st.ustLink}>Tamir Merkezi</a>
            <a href="/kilavuzlar/" style={st.ustLink}>Kullanım Kılavuzları</a>
          </nav>
        </div>

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
          <div className="vitrin-kutu" style={st.kutuSar}>
            <textarea
              value={dert}
              onChange={(e) => setDert(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) gonder(); }}
              placeholder="Çamaşır makinesi su almıyor, program başlamıyor…"
              rows={2}
              className="vitrin-kutu-yazi"
              style={st.kutu}
              aria-label="Cihazının derdini yaz"
            />
            <button onClick={gonder} disabled={dert.trim().length < 4} className="vitrin-kutu-btn" style={{ ...st.kutuBtn, opacity: dert.trim().length < 4 ? 0.5 : 1 }}>
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

      {/* ═══ ② CİHAZ KARTLARI ═══ */}
      <section style={st.bolumDis}><div style={st.bolum}>
        <h2 style={st.h2}>Hangi cihazın bozuldu?</h2>
        <p style={st.bolumAlt}>Cihazını seç, belirtiyi kendi kelimelerinle anlat — olası arızayı ve tahmini tutarı teşhisten sonra görürsün.</p>
        <div className="vitrin-kartlar" style={st.kartlar}>
          {CIHAZLAR.map((c) => {
            const fotoVar = FOTOGRAFLI.has(c);
              return (
                <button key={c} style={st.kartFoto} onClick={() => onCihazSec(c)}>
                  {/* Görsel alanı HER kartta aynı oranda (16:10): fotoğrafı olan kart
                      fotoğrafı kenardan kenara basar, olmayan aynı alanda ortalanmış
                      çizgi ikonunu gösterir. 8 fotoğraflı + 3 ikonlu kart karışıkken
                      ızgara satırları böyle kaymıyor (ölçüldü: 164/181/128 px'di). */}
                  {fotoVar ? (
                    <img src={`/anasayfa/cihaz/${IKON[c]}.webp`} alt="" width="600" height="380" loading="lazy" decoding="async" style={st.kartGorsel} />
                  ) : (
                    <span style={st.kartIkonAlan}>
                      <img src={`/tamir-gorsel/kategori/${IKON[c]}.webp`} alt="" width="72" height="72" loading="lazy" decoding="async" style={st.kartIkon} />
                    </span>
                  )}
                  <span style={st.kartAdFoto}>{c}</span>
                </button>
              );
          })}
        </div>
      </div></section>

      {/* ═══ ②b BİL · GÖR · ÇAĞIR ═══ */}
      <section style={st.bolumDis}><div style={{ ...st.bolum, paddingTop: "clamp(28px, 4vw, 44px)" }}>
        <h2 style={{ ...st.h2, marginBottom: "clamp(22px, 2.6vw, 30px)" }}>Bil, gör, çağır.</h2>
        <div className="vitrin-slogan" style={st.sloganlar}>
          {SLOGAN.map((x) => (
            <div key={x.k} style={st.sloganKart}>
              <span style={st.sloganKelime}>{x.k}</span>
              <b style={st.sloganBaslik}>{x.b}</b>
              <p style={st.sloganMetin}>{x.a}</p>
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

      {/* ═══ ⑤ GEZİNME + SIK SORULANLAR ═══
          18 Ağu'da App.jsx'ten BURAYA taşındı. Orada `s.wrap` (maxWidth 600)
          içindeydi; Tolga "tam sayfa genişliğine al" dedi ve vitrin zaten wrap'in
          dışında olduğu için blok buraya gelince taşırma hilesine gerek kalmadı.
          İçerik 1080 px'lik kolonda kalır — SSS satırı ekran boyunca uzarsa
          okunmuyor; genişleyen zemin, sınırlı olan satır uzunluğu. */}
      <section style={{ ...st.bolumDis, background: "#fff", borderTop: `1px solid ${HAIR}` }}><div style={{ ...st.bolum, paddingTop: "clamp(28px, 4vw, 44px)" }}>
        {/* Yatay şerit düzeni (Tolga 18 Ağu, Armut örneği): solda metin bloğu +
            çağrı düğmesi, sağda görsel. Kart TAMAMEN tıklanabilir; düğme görsel
            bir işaret (kendi tıklama alanı yok) — iç içe tıklanabilir öğe
            olmasın, ekran okuyucu tek hedef görsün. */}
        <div className="vitrin-gezinme" style={st.gezinmeler}>
          {GEZINME.map((x, i) => {
            // Zikzak (Tolga: "bir sağ bir sol olsun"): tek sıradakilerde görsel
            // sola geçer. DOM sırası DEĞİŞMEZ — her şeritte önce metin, sonra
            // görsel okunur; yer değişimi yalnız sütun sırası + order ile yapılır,
            // böylece ekran okuyucu ve klavye sırası tutarlı kalır.
            const ters = i % 2 === 1;
            const ic = (
              <>
                <div style={st.seritMetin}>
                  <h3 style={st.seritBaslik}>{x.baslik}</h3>
                  <p style={st.seritYazi}>{x.metin}</p>
                  <span style={st.seritBtn}>{x.btn} <span aria-hidden="true">→</span></span>
                </div>
                <div style={ters ? { ...st.seritGorselAlan, order: -1 } : st.seritGorselAlan}>
                  {x.foto ? (
                    <img src={x.foto} alt="" width="900" height="700" loading="lazy" decoding="async" style={st.seritFoto} />
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={st.seritIkon} aria-hidden="true">
                      {IZGARA_IKON[x.ikon]}
                    </svg>
                  )}
                </div>
              </>
            );
            const kutu = {
              ...st.serit,
              gridTemplateColumns: ters ? "minmax(240px, 38%) 1fr" : "1fr minmax(240px, 38%)",
            };
            return x.href
              ? <a key={x.ad} href={x.href} aria-label={x.ad} style={kutu}>{ic}</a>
              : <button key={x.ad} type="button" onClick={onServisler} aria-label={x.ad} style={{ ...kutu, font: "inherit", textAlign: "left" }}>{ic}</button>;
          })}
        </div>

        <h2 style={{ ...st.h2, marginTop: "clamp(36px, 5vw, 56px)", marginBottom: "clamp(18px, 2.2vw, 26px)" }}>Sık sorulanlar</h2>
        <div style={st.sssListe}>
          {SSS.map((q, i) => (
            <div key={i} style={st.sssKart}>
              <button onClick={() => setSssAcik(sssAcik === i ? null : i)} aria-expanded={sssAcik === i} style={st.sssBtn}>
                <span>{q.s}</span>
                <span style={st.sssArti} aria-hidden="true">{sssAcik === i ? "–" : "+"}</span>
              </button>
              {sssAcik === i && <p style={st.sssCevap}>{q.c}</p>}
            </div>
          ))}
        </div>

        <TelefonaEkleBlok />
      </div></section>
    </>
  );
}

const st = {
  // FULL-BLEED: App'in kapsayıcısı maxWidth:600 — vitrin bölümleri o kolona sıkışırsa
  // "platform" hissi kaybolur. Bu üç satır kapsayıcıdan taşırıp tam genişlik verir;
  // form kartı 600px'te olduğu gibi kalır (ona dokunulmaz).
  hero: {
    position: "relative", overflow: "hidden",
    // Derinlik: iki katmanlı radyal ışık + lacivert taban. Düz renk yerine
    // atmosfer — premium his süsten değil katmandan gelir.
    background: `radial-gradient(1200px 600px at 15% -10%, #3B82F6 0%, transparent 55%), radial-gradient(900px 500px at 90% 10%, #1D4ED8 0%, transparent 50%), linear-gradient(180deg, #1E293B 0%, #172033 100%)`,
    padding: "clamp(14px, 2vw, 20px) 20px clamp(40px, 7vw, 72px)", // üst bar hero içinde
  },
  heroFoto: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 },
  // Koyu perde: fotoğraf parlak olduğunda beyaz başlık/kutu okunur kalsın.
  // Üstte daha yoğun (başlık orada), altta hafif — fotoğrafı tamamen boğmaz.
  heroPerde: {
    position: "absolute", inset: 0, zIndex: 0,
    background: "linear-gradient(180deg, rgba(15,23,42,.78) 0%, rgba(15,23,42,.62) 45%, rgba(15,23,42,.72) 100%)",
  },
  heroIc: { maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1, paddingTop: "clamp(28px, 6vw, 62px)" },
  ustBar: {
    position: "relative", zIndex: 2, maxWidth: 1160, margin: "0 auto",
    display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap",
  },
  ustLogoBtn: { background: "none", border: "none", padding: 0, cursor: "pointer", lineHeight: 0 },
  ustLogo: { display: "block", width: "min(190px, 46vw)", height: "auto" },
  ustMenu: { display: "flex", gap: 4, flexWrap: "wrap" },
  ustLink: {
    color: "#DBEAFE", fontSize: 13.5, fontWeight: 600, textDecoration: "none",
    padding: "8px 12px", borderRadius: 999, whiteSpace: "nowrap",
  },
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

  bolumDis: {},  // vitrin zaten tam genişlikte (wrap dışında) — taşırma hilesi gerekmiyor
  bolum: { maxWidth: 1080, margin: "0 auto", padding: "clamp(40px, 6vw, 64px) 20px" },
  h2: {
    fontFamily: "Fraunces, Georgia, serif", fontWeight: 600, color: NAVY,
    fontSize: "clamp(22px, 3.4vw, 34px)", letterSpacing: "-.01em", margin: "0 0 8px", textAlign: "center",
  },
  bolumAlt: { color: FAINT, fontSize: "clamp(14.5px, 1.5vw, 17px)", textAlign: "center", margin: "0 auto 28px", maxWidth: 620, lineHeight: 1.6 },

  kartlar: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, alignItems: "stretch", gridAutoRows: "1fr" },
  kart: {
    display: "flex", flexDirection: "column", alignItems: "center", gap: 7,
    background: "#fff", border: `1px solid ${HAIR}`, borderRadius: 14, padding: "18px 12px",
    cursor: "pointer", fontFamily: "inherit", textAlign: "center",
    boxShadow: "0 1px 2px rgba(30,41,59,.04)",
  },
  // Kart 163 → 248 px'e çıkınca 44 px'lik ikon kayboluyordu; görsel alanının
  // yarısına yakın bir boy dengeyi kuruyor (fotoğraflı kartlarla aynı ağırlık).
  kartIkon: { display: "block", width: "clamp(44px, 30%, 72px)", height: "auto", objectFit: "contain" },
  // Fotoğrafsız kartın görsel alanı — fotoğraflıyla BİREBİR aynı oran, ikon ortada.
  kartIkonAlan: {
    display: "flex", alignItems: "center", justifyContent: "center",
    width: "100%", aspectRatio: "16 / 10", background: BG,
  },
  // Fotoğraflı kart: görsel üstte kenardan kenara, metin altta (Armut deseni).
  kartFoto: {
    display: "flex", flexDirection: "column", alignItems: "stretch", gap: 0, height: "100%",
    background: "#fff", border: `1px solid ${HAIR}`, borderRadius: 14, padding: 0,
    overflow: "hidden", cursor: "pointer", fontFamily: "inherit", textAlign: "left",
    boxShadow: "0 1px 2px rgba(30,41,59,.04)",
  },
  kartGorsel: { display: "block", width: "100%", height: "auto", aspectRatio: "16 / 10", objectFit: "cover" },
  // Fiyat satırı kalkınca kartın tek metni ad kaldı → punto büyütüldü.
  // Sabit yükseklik (minHeight) BIRAKILDI: ölçüm gösterdi ki 375 px'de kart
  // 162 px'e düşüyor ve "Fırın / Ocak / Aspiratör" 13,5 px'te BİLE üç satıra
  // çıkıyor — yani sınırı punto değil kart genişliği koyuyor. Eşitliği artık
  // ızgara veriyor (`gridAutoRows: 1fr`); bu alan kalan boşluğu doldurup metni
  // dikeyde ortalar, punto da genişliğe göre serbestçe büyür.
  kartAdFoto: {
    flex: 1, display: "flex", alignItems: "center",
    fontSize: "clamp(15px, 4.4vw, 20px)", fontWeight: 700, color: NAVY,
    lineHeight: 1.25, padding: "12px 12px 14px",
  },
  kartAd: { fontSize: 13.5, fontWeight: 600, color: NAVY, lineHeight: 1.3 },

  // Slogan kartları: sola hizalı, hafif zeminli, üstte büyük tek kelime.
  // Adım bloklarından (ortalı, numaralı, zeminsiz) bilinçli olarak farklı
  // görünürler — iki bölüm alt alta dururken birbirinin tekrarı sanılmasın.
  sloganlar: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(16px, 2vw, 24px)", maxWidth: 1080, margin: "0 auto" },
  sloganKart: {
    // Bölüm zemini zaten BG; kart da BG olunca ayrışmıyordu → beyaz.
    background: "#fff", border: `1px solid ${HAIR}`, borderRadius: 16,
    padding: "clamp(20px, 2.4vw, 28px)", textAlign: "left",
  },
  sloganKelime: {
    display: "block", fontFamily: "Fraunces, Georgia, serif", fontWeight: 600,
    fontSize: "clamp(26px, 3vw, 34px)", color: BLUE, lineHeight: 1.1, marginBottom: 12,
  },
  sloganBaslik: { display: "block", color: NAVY, fontSize: "clamp(17px, 1.8vw, 20px)", lineHeight: 1.3, marginBottom: 8 },
  sloganMetin: { color: MUTED, fontSize: "clamp(15px, 1.5vw, 17px)", lineHeight: 1.6, margin: 0 },

  // Gezinme ızgarası: cihaz kartlarıyla aynı kart stilini (kartFoto) paylaşır,
  // yalnız 4 sütuna sabitlenir — dört kalem var, satır bölünmesin.
  gezinmeler: { display: "grid", gap: "clamp(14px, 1.8vw, 20px)" },
  serit: {
    display: "grid", gridTemplateColumns: "1fr minmax(240px, 38%)",
    alignItems: "stretch", background: BG, border: `1px solid ${HAIR}`,
    borderRadius: 20, overflow: "hidden", textDecoration: "none", cursor: "pointer",
    padding: 0, width: "100%",
  },
  seritMetin: { padding: "clamp(24px, 3.4vw, 44px)", alignSelf: "center" },
  seritBaslik: {
    fontFamily: "Fraunces, Georgia, serif", fontWeight: 600, color: NAVY,
    fontSize: "clamp(21px, 2.6vw, 30px)", lineHeight: 1.2, letterSpacing: "-.01em", margin: "0 0 10px",
  },
  seritYazi: { color: MUTED, fontSize: "clamp(15px, 1.5vw, 17px)", lineHeight: 1.6, margin: "0 0 20px", maxWidth: 460 },
  // Düğme GÖRÜNÜMÜNDE bir işaret — gerçek tıklama alanı kartın tamamı.
  seritBtn: {
    display: "inline-flex", alignItems: "center", gap: 8,
    background: BLUE, color: "#fff", borderRadius: 12,
    padding: "12px 20px", fontSize: "clamp(14.5px, 1.4vw, 16px)", fontWeight: 700,
  },
  // Görsel yarısı: fotoğraf gelene kadar marka zeminli ikon durur.
  seritGorselAlan: {
    position: "relative", background: "#EFF4FF",
    display: "flex", alignItems: "center", justifyContent: "center",
    minHeight: "clamp(180px, 22vw, 260px)", overflow: "hidden",
  },
  seritFoto: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" },
  seritIkon: { width: "clamp(54px, 7vw, 84px)", height: "auto" },

  sssListe: { maxWidth: 860, margin: "0 auto" },
  sssKart: { background: "#fff", border: `1px solid ${HAIR}`, borderRadius: 14, marginBottom: 10, overflow: "hidden" },
  sssBtn: {
    width: "100%", background: "none", border: "none", padding: "16px 18px",
    display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12,
    textAlign: "left", fontFamily: "inherit", fontSize: "clamp(15px, 1.6vw, 18px)", fontWeight: 600, color: NAVY,
  },
  sssArti: { color: BLUE, fontSize: 24, fontWeight: 400, lineHeight: 1, flexShrink: 0 },
  sssCevap: { margin: 0, padding: "0 18px 16px", fontSize: "clamp(14.5px, 1.5vw, 16.5px)", lineHeight: 1.65, color: MUTED },

  sayilar: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 14 },
  sayiKutu: {
    background: BG, border: `1px solid ${HAIR}`, borderRadius: 14,
    padding: "20px 14px", textAlign: "center",
  },
  sayiBuyuk: {
    display: "block", fontFamily: "Fraunces, Georgia, serif", fontWeight: 600,
    fontSize: "clamp(24px, 3.6vw, 36px)", color: NAVY, lineHeight: 1.1,
  },
  sayiKucuk: { display: "block", color: FAINT, fontSize: "clamp(13px, 1.3vw, 15px)", marginTop: 5 },
};

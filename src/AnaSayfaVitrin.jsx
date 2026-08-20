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
//   band sayıları → src/site-istatistik.json (ÜRETİLİR: scripts/site-istatistik.mjs,
//   kaynak services-data.json + tarife-seed.js; veri değişince script yeniden koşulur)
//   79 rehber → content/blog/*.md
// ⚠️ Backlog'daki "6.475 yetkili servis" ifadesi VİTRİNE ALINMADI: o rakam servis.gov.tr
// ham CSV'sinden geliyor, bizim dizinimizde 420 "yetkili" kaydı var. Yanlış olurdu.
import React, { useState, useEffect, useRef } from "react";
import { SSS } from "./sss.js";
import TelefonaEkleBlok from "./TelefonaEkleBlok.jsx";
import { CIHAZLAR } from "./constants.js";
import { heroTahmin } from "./hero-tahmin.js";
import BenservisLogo from "./BenservisLogo.jsx";
import { BLUE, NAVY, BG, HAIR, MUTED, SLATE as FAINT, GREEN, GREEN_TINT, GREEN_DEEP } from "./theme.js";
import IST from "./site-istatistik.json";

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
  // GRF teslimi 18 Ağu gece (v3) — ARTIK 11/11. Set Kling ile üretilen
  // "Benservis ustası" karelerinden oluşuyor (süpürgede stok kare: Kling
  // üretimi robot süpürge çıkardığı için elendi).
  // Eksik kalan 3 kart (Kombi · Mikrodalga · Su Sebili) bu teslimle kapandı;
  // artık hiçbir kart çizgi ikonuna düşmüyor.
  "Buzdolabı", "Çamaşır Makinesi", "Bulaşık Makinesi", "Televizyon / Monitör",
  "Fırın / Ocak / Aspiratör", "Klima", "Süpürge", "Bilgisayar / Yazıcı",
  "Kombi / Termosifon", "Mikrodalga / Air Fryer", "Su Sebili / Arıtma",
]);

// Hero kutusundan cihaz + MARKA tahmini `hero-tahmin.js`'te — sözlük aynı, eşleme
// yazım hatasına toleranslı (Tolga, 19 Ağu: "arçelik çamamşır makinam su almıyor
// dedim çalışmadı" + "marka yazılırsa o da seçili gelmeli"). Yeni NLP/AI yok.
// Eşleşmezse cihaz/marka seçtirme adımı olduğu gibi kalır (kullanıcı formda seçer).

// Hero'da dönüşümlü görünen örnekler — placeholder'a gerçek cümle koymak
// (araştırma deseni 1) kullanıcıya "buraya ne yazacağımı biliyorum" hissi veriyor.
const POPULER = [
  { etiket: "Çamaşır makinesi su almıyor", cihaz: "Çamaşır Makinesi" },
  { etiket: "Bulaşıklar kirli çıkıyor", cihaz: "Bulaşık Makinesi" },
  { etiket: "Buzdolabı soğutmuyor", cihaz: "Buzdolabı" },
  { etiket: "Klima soğutmuyor", cihaz: "Klima" },
];

// 20 Ağu 2026 (Tolga): "buraya il de ekleyelim … 10.000+ olarak gösterelim, arkada biz
// tam sayıyı takip edelim" → band artık src/site-istatistik.json'dan beslenir (üreten:
// scripts/site-istatistik.mjs — her sayı services-data.json + tarife-seed.js'ten SAYILIR,
// elle yazılmaz; şişirme yasağı korunur). TAM servis sayısı o dosyada durur; vitrin
// 10.000'i aşınca "10.000+" yazar, aşmadıkça gerçek sayıyı gösterir.
const trSayi = (n) => n.toLocaleString("tr-TR");
const SAYILAR = [
  { buyuk: IST.servis >= 10000 ? "10.000+" : trSayi(IST.servis), kucuk: "servis kaydı" },
  { buyuk: trSayi(IST.puanli), kucuk: "Google puanlı" },
  { buyuk: trSayi(IST.il), kucuk: "il" },
  { buyuk: trSayi(IST.ilce), kucuk: "ilçe" },
  { buyuk: trSayi(IST.tarife), kucuk: "onaylı tarife kalemi" },
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
// ayni alanda buyutulmus cizgi ikon durur (cihaz kartlarindaki desenin aynisi).
// GRF fotograflari 19 Agu 07:34'te teslim etti; ikon dallari YEDEK olarak duruyor.
// Sürdürülebilirlik bölümü (Tolga, 19 Ağu). Yazı sayısı BİLEREK yazılmadı: vitrin
// külliyatı okumuyor, elle yazılan sayı külliyat büyüyünce sessizce bayatlar.
// `foto` doldurulduğu anda placeholder yerine gerçek görsel basılır — başka iş yok.
const SURDURULEBILIR = {
  href: "/blog/kategori/surdurulebilirlik/",
  // GRF teslimi 20 Ağu (1200×800): orman + elde telefon, ekranda benservis mobil görünümü.
  // Bilgi Merkezi kavram kartlarıyla AYNI dili konuşuyor (20 Ağu'da amblemler o dile geçti).
  // 19 Ağu'nun yeşil döngü amblemi arşivde: anasayfa-gorselleri/anasayfa/surdurulebilirlik.webp
  foto: "/anasayfa/surdurulebilirlik-telefon.webp",
  baslik: "Tamir etmek, yenisini almaktan iyidir",
  // Metin ŞERİT UZUNLUĞUNA çekildi (19 Ağu): şeritler ~100 karakter, bu 168'di ve
  // bloğu iki satır uzatıyordu. "Döngüsel ekonomi" rozetten buraya taşındı.
  metin: "Çalışabilecek bir cihazı onarmak hem bütçeyi hem doğayı korur. Döngüsel ekonomi yazılarımız burada.",
  btn: "Sürdürülebilirlik yazıları",
};

const GEZINME = [
  {
    ad: "Bilgi Merkezi", href: "/blog/", foto: "/gezinme/bilgi-merkezi.webp", ikon: "kitap",
    baslik: "Önce öğren, sonra çağır",
    metin: "Cihazın neden bozulduğunu sade Türkçeyle anlatan yazılar. Teknik terim yok; çoğu arızada servise gerek olup olmadığını kendin anlarsın.",
    btn: "Yazılara göz at",
  },
  {
    ad: "Tamir Merkezi", href: "/tamir/", foto: "/gezinme/tamir-merkezi.webp", ikon: "anahtar",
    baslik: "Belirtiden çözüme",
    metin: "\"Su almıyor\", \"soğutmuyor\", \"ses yapıyor\" — belirtiyle başlayıp adım adım ne kontrol edeceğini gösteren rehberler.",
    btn: "Rehberlere bak",
  },
  {
    ad: "Kullanım Kılavuzları", href: "/kilavuzlar/", foto: "/gezinme/kullanim-kilavuzlari.webp", ikon: "acik-kitap",
    baslik: "Kılavuzun elinin altında",
    metin: "Hata kodunu okumak ya da bir ayarı bulmak için markanın resmî kullanım kılavuzuna doğrudan ulaş.",
    btn: "Kılavuz ara",
  },
  {
    ad: "Yakın Servisler", href: null, foto: "/gezinme/yakin-servisler.webp", ikon: "konum",
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
    const { cihaz, marka } = heroTahmin(metin);
    onDertYaz(metin, cihaz, marka);
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
        <div className="vitrin-ustbar" style={st.ustBar}>
          <button onClick={onLogo} aria-label="Ana sayfa" style={st.ustLogoBtn}>
            <BenservisLogo style={st.ustLogo} benColor="#FFFFFF" servisColor="#93C5FD" mottoColor="#CBD5E1" />
          </button>
          <nav className="vitrin-ustmenu" style={st.ustMenu} aria-label="Ana menü">
            <a href="/blog/" style={st.ustLink}>Bilgi Merkezi</a>
            <a href="/tamir/" style={st.ustLink}>Tamir Merkezi</a>
            <a href="/kilavuzlar/" style={st.ustLink}>Kullanım Kılavuzları</a>
            {/* Sağ uçta ayrışan tek eylem: servis dizinini teşhissiz açar.
                Diğer üçü metin bağlantısı; bu dolgulu, çünkü sitenin ikinci
                ana kapısı (birincisi hero kutusundaki teşhis). */}
            <button type="button" onClick={onServisler} style={st.ustCta}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" />
              </svg>
              Yakın Servisler
            </button>
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

          {/* Güven satırı da site-istatistik.json'dan (20 Ağu, Tolga: "burayı da güncelle");
              band ile aynı 10.000+ kuralı, SERBİS sayısı da artık sayılıyor (elle 207 değil). */}
          <p style={st.guvenSatiri}>
            <b style={{ color: "#fff" }}>{IST.servis >= 10000 ? "10.000+" : trSayi(IST.servis)}</b> servis kaydı · <b style={{ color: "#fff" }}>{trSayi(IST.puanli)}</b> Google puanlı · <b style={{ color: "#fff" }}>{trSayi(IST.serbis)}</b> SERBİS'te doğrulanmış · ücretsiz
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

        {/* ═══ SÜRDÜRÜLEBİLİRLİK ═══ (Tolga, 19 Ağu, birebir: "en alttaki sürdürülebilirlik
            bağlantısını sık sorulan soruların üstüne büyük görsel ile alalım")
            Bağlantı footer gezinme satırında küçük bir link olarak duruyordu; burada
            KENDİ bölümü oluyor ve SSS'nin ÜSTÜNE geliyor.
            🎨 YK 23 Tem renk kuralı: YEŞİL = sürdürülebilirlik (mavi kurumsal kalır) —
            bu, ana sayfada mavi olmayan tek bölüm; ayrışması bilinçli.
            🖼️ Görsel: eldeki setler tarandı (`public/anasayfa/` · `merkez-gorsel/` ·
            `gezinme/`) — sürdürülebilirlik karşılığı YOK, GRF talebi backlog'a açıldı.
            Dosya gelene kadar degrade + döngü motifi duruyor; hero desenindeki gibi
            placeholder BİLEREK "boş kutu" değil. Dosya inince tek satır: SURDURULEBILIR.foto.
            📐 Şeritlerden BÜYÜK: görsel sütunu %38 değil %46 ve yüksekliği ~1,6×. */}
        <div style={st.surdurDis}>
          <a className="vitrin-surdur" href={SURDURULEBILIR.href} aria-label={SURDURULEBILIR.baslik} style={st.surdur}>
            <div style={st.surdurMetin}>
              {/* Rozet KALDIRILDI (19 Ağu, Tolga: "aynı yükseklikte olmalı") — şeritlerde
                  karşılığı yok, tek başına ~40 px ekliyordu. "Döngüsel ekonomi" ifadesi
                  gövde metnine taşındı, kavram kaybolmadı. */}
              <h2 style={st.surdurBaslik}>{SURDURULEBILIR.baslik}</h2>
              <p style={st.surdurYazi}>{SURDURULEBILIR.metin}</p>
              <span style={st.surdurBtn}>{SURDURULEBILIR.btn} <span aria-hidden="true">→</span></span>
            </div>
            <div style={st.surdurGorselAlan}>
              {SURDURULEBILIR.foto ? (
                <img src={SURDURULEBILIR.foto} alt="" width="1200" height="800" loading="lazy" decoding="async" style={st.surdurFoto} />
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke={GREEN_DEEP} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" style={st.surdurIkon} aria-hidden="true">
                  <path d="M12 3a9 9 0 0 1 8.5 6.1" /><path d="M20.5 4.6v4.7h-4.7" />
                  <path d="M12 21a9 9 0 0 1-8.5-6.1" /><path d="M3.5 19.4v-4.7h4.7" />
                  <path d="M9.2 12.4l1.9 1.9 3.7-4.2" />
                </svg>
              )}
            </div>
          </a>
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
  ustMenu: { display: "flex", gap: 4, flexWrap: "wrap", alignItems: "center" },
  // Üst bardaki tek dolgulu öğe. Hero fotoğrafın üzerinde durduğu için beyaz
  // zemin + lacivert metin seçildi: mavi düğme koyu perdeyle yeterince
  // ayrışmıyordu (hero degradesinin kendisi mavi).
  ustCta: {
    display: "inline-flex", alignItems: "center", gap: 7,
    background: "#fff", color: NAVY, border: "none", borderRadius: 999,
    padding: "9px 16px", marginLeft: 6, cursor: "pointer",
    fontFamily: "inherit", fontSize: 13.5, fontWeight: 700, whiteSpace: "nowrap",
    boxShadow: "0 2px 10px -4px rgba(15,23,42,.45)",
  },
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
  // ⚠️ Dikey padding ve minHeight SATIR İÇİNDE olmalı: mobil media query'sinde
  // (.vitrin-kutu-btn) dolgu tanımlıydı ama satır içi "0 22px" onu eziyordu —
  // düğme 20 px yüksekliğinde kalıyordu, dokunma hedefi olarak çok ince
  // (Tolga: "basmak zor"; erişilebilirlik tabanı 44 px).
  // Masaüstünde alignSelf:stretch yüksekliği zaten textarea'ya eşitler, o yüzden
  // minHeight orada devreye girmez — yalnız dikey düzende iş görür.
  kutuBtn: {
    border: "none", background: BLUE, color: "#fff", borderRadius: 12,
    padding: "14px 22px", minHeight: 50, fontFamily: "inherit", fontSize: 15.5, fontWeight: 700,
    cursor: "pointer", whiteSpace: "nowrap", alignSelf: "stretch",
    display: "inline-flex", alignItems: "center", justifyContent: "center",
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

  // ——— SÜRDÜRÜLEBİLİRLİK BÖLÜMÜ ———
  // ⚠️ 19 Ağu akşamı DÜZELTİLDİ (Tolga: "üstteki ile alttaki aynı yükseklikte ve
  // genişlikte olmalı"). İlk sürüm bilerek şeritlerden büyüktü (görsel sütunu %46,
  // minHeight 240-400) — ölçüldü: şerit 262 px / görsel 394 px, sürdürülebilirlik
  // 402 px / 477 px. Artık ŞERİTLE BİREBİR AYNI değerler kullanılıyor; tek fark renk
  // (YK 23 Tem: yeşil = sürdürülebilirlik). Bir değer değişecekse ikisi birlikte değişir.
  surdurDis: { marginTop: "clamp(36px, 5vw, 56px)" },
  surdur: {
    // gridTemplateColumns · borderRadius · overflow: `serit` ile birebir.
    display: "grid", gridTemplateColumns: "1fr minmax(240px, 38%)",
    alignItems: "stretch", background: GREEN_TINT, border: `1px solid ${GREEN}33`,
    borderRadius: 20, overflow: "hidden", textDecoration: "none", cursor: "pointer",
    padding: 0, width: "100%",
  },
  // Dolgu ŞERİTTEN (44) bir tık dar: 32. Sebep ölçüldü — bu blokta metin şeritten
  // 26 px daha uzun (buton etiketi + gövde), 44 dolguyla blok 281 px çıkıyordu.
  // 32'de blok TAM 262 px = şeridin yüksekliği. Hedef ölçü eşitliği, dolgu eşitliği değil.
  surdurMetin: { padding: "clamp(20px, 2.6vw, 32px)", alignSelf: "center" },
  surdurBaslik: {
    fontFamily: "Fraunces, Georgia, serif", fontWeight: 600, color: NAVY,
    fontSize: "clamp(21px, 2.6vw, 30px)", lineHeight: 1.2, letterSpacing: "-.01em", margin: "0 0 10px",
  },
  surdurYazi: { color: MUTED, fontSize: "clamp(15px, 1.5vw, 17px)", lineHeight: 1.6, margin: "0 0 20px", maxWidth: 460 },
  surdurBtn: {
    display: "inline-flex", alignItems: "center", gap: 8,
    background: GREEN_DEEP, color: "#fff", borderRadius: 12,
    padding: "12px 20px", fontSize: "clamp(14.5px, 1.4vw, 16px)", fontWeight: 700,
  },
  // Görsel yarısı: şeritle aynı minHeight VE aynı dolgu dili.
  // ⚠️ 20 Ağu'da değişti: kare artık amblem (marka kilidi) değil FOTOĞRAF (orman + telefon).
  // Amblem için `contain` + beyaz zemin + dolgu gerekiyordu — wordmark kırpılmasın diye.
  // Fotoğrafta bu tam tersini yapıyordu: komşu gezinme şeritleri tam-taşma `cover` iken
  // bu blok beyaz paspartulu duruyordu. Artık şeritlerle aynı: `cover`, dolgusuz.
  // Kırpma payı ihmal edilebilir — kare 1200×800 (1,500), alan ~1,515.
  surdurGorselAlan: {
    position: "relative", display: "flex", alignItems: "center", justifyContent: "center",
    minHeight: "clamp(180px, 22vw, 260px)", overflow: "hidden", background: GREEN_TINT,
  },
  surdurFoto: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" },
  surdurIkon: { width: "clamp(54px, 7vw, 84px)", height: "auto", opacity: 0.85 },

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

// src/IkinciElVitrin.jsx — `/ikinci-el` DOD tipi ikinci el vitrini (YK #171 İE-2, 11 Eki 2026).
// Tolga (11 Eki 10:2x): "ikinci el satış anasayfası bunun gibi olmalı https://dod.com.tr".
// Tarif: benservis-icerik/pazar/IKINCI-EL-HEDEF-GORUNUM.md bölüm 1, 3, 7.
//
// Sıra (DOD ana sayfası): arama (dosya no · marka · model) → hero cümlesi → 1 büyük öne çıkan
// kart + 4'lü satırlar → tematik koleksiyonlar → güven bloğu (3 sütun).
// `/ikinci-el/BS-2E-000123` → `IkinciElOnizleme` (detay İE-3'te gelir; şimdilik özet kart).
//
// ⛔ DPP ön yüzde HİÇ geçmez (Tolga 11:4x): ad, bağlantı, QR, seri no yok; bölüm adı
//    "Benservis kontrolü". API seri no / cihaz_id döndürmez (api/ikinci-el/liste.js).
// ⛔ Sayfa `noindex`, sitemap dışı. Satıcı yalnız Benservis; "ilan ver" düğmesi yok.
// ⛔ Boş alan (üretim yılı, kullanım süresi, fotoğraf) kartta yazılmaz (YK 11:5x).
// ⛔ Fotoğraf yoksa cihaz ikonu; genel cihaz fotoğrafı ürünün kendisiymiş gibi konmaz.
// ⛔ Satır içi stile `display` yazılmaz (PR #175 dersi).
import React, { useEffect, useMemo, useState } from "react";
import { track } from "@vercel/analytics";
import { sepetAdet } from "./sepet.js";
import BenservisLogo from "./BenservisLogo.jsx";
import CihazIkon from "./cihaz-ikonlari.jsx";
import PazarSekmeler from "./PazarSekmeler.jsx";
import { PAZAR_CIHAZLARI } from "./pazar-sozluk.js";
import { NAVY as INK, BLUE, GREEN_DEEP, HAIR, SLATE, TINT, RED } from "./theme.js";

const tl = (n) => `${Math.round(Number(n)).toLocaleString("tr-TR")} TL`;
const kucult = (t) => String(t || "").toLocaleLowerCase("tr");
const cihazAdi = (slug) => PAZAR_CIHAZLARI.find((c) => c.slug === slug)?.ad || "Diğer";
const HAFTA_MS = 7 * 24 * 60 * 60 * 1000;
const UCUZ_SINIR = 20000;

export function garantiEtiketi(i) {
  if (i?.garanti_sinifi === "marka") {
    const b = i.garanti_bitis ? new Date(i.garanti_bitis).toLocaleDateString("tr-TR", { month: "long", year: "numeric" }) : "";
    return { sinif: "marka", metin: b ? `Marka garantili · bitiş ${b}` : "Marka garantili" };
  }
  if (i?.garanti_sinifi === "benservis") {
    return { sinif: "benservis", metin: i.garanti_ay ? `Benservis garantili · ${i.garanti_ay} ay` : "Benservis garantili" };
  }
  return { sinif: "yok", metin: "Garantisiz" };
}

export function kullanimMetni(ay) {
  const n = Number(ay);
  if (!Number.isFinite(n) || n <= 0) return null;
  return n < 12 ? `${n} ay kullanıldı` : `${Math.floor(n / 12)} yıl kullanıldı`;
}

// Kartın alt satırı: yalnız dolu alanlar (üretim yılı · kullanım süresi · konum).
export function altSatir(i) {
  return [i.uretim_yili ? `${i.uretim_yili} üretim` : null, kullanimMetni(i.kullanim_suresi_ay), i.konum || null]
    .filter(Boolean).join(" · ");
}

// Tematik koleksiyonlar (hedef görünüm bölüm 7); boş olan basılmaz.
export const KOLEKSIYONLAR = [
  { slug: "benservis-garantili", ad: "Benservis garantili", f: (i) => i.garanti_sinifi === "benservis" },
  { slug: "marka-garantili",     ad: "Marka garantisi süren", f: (i) => i.garanti_sinifi === "marka" },
  { slug: "20-bin-alti",         ad: "20.000 TL altı",       f: (i) => Number(i.fiyat) < UCUZ_SINIR },
  { slug: "bu-hafta",            ad: "Bu hafta eklenen",     f: (i, simdi) => simdi - new Date(i.created_at).getTime() < HAFTA_MS },
];

export function aramaSuz(ilanlar, metin) {
  const q = kucult(metin).trim();
  if (!q) return ilanlar;
  return ilanlar.filter((i) =>
    [i.dosya_no, i.marka, i.model, i.baslik].some((alan) => kucult(alan).includes(q)));
}

function useNoindex(baslik) {
  useEffect(() => {
    document.title = baslik;
    const m = document.createElement("meta");
    m.name = "robots"; m.content = "noindex, nofollow";
    document.head.appendChild(m);
    return () => m.remove();
  }, [baslik]);
}

function Kabuk({ children, arama }) {
  const [adet, setAdet] = useState(sepetAdet());
  useEffect(() => {
    const s = (e) => setAdet(e.detail);
    window.addEventListener("bs-sepet-degisti", s);
    return () => window.removeEventListener("bs-sepet-degisti", s);
  }, []);
  return (
    <div className="ie">
      <style>{CSS}</style>
      <header className="ie-ust">
        <div className="ie-kap ie-bas">
          <a href="/" className="ie-logo" aria-label="Benservis ana sayfası">
            <BenservisLogo style={{ height: 40, width: "auto" }} benColor="#FFFFFF" servisColor="#93C5FD" mottoColor="#CBD5E1" />
          </a>
          <a href="/pazar" className="ie-etiket">Pazaryeri</a>
          {arama || <span className="ie-bosluk" />}
          <a href="/sepet" className="ie-sepet" aria-label={`Sepetim, ${adet} ürün`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6" /><circle cx="10" cy="20.5" r="1.3" /><circle cx="17" cy="20.5" r="1.3" /></svg>
            <span className="ie-yazi">Sepetim</span>
            {adet > 0 && <span className="ie-rozet">{adet}</span>}
          </a>
        </div>
        <PazarSekmeler etkin="ikinci-el" />
      </header>
      <main className="ie-kap">{children}</main>
      <footer className="ie-alt">
        <div className="ie-kap ie-alt-ic">
          <span><b>benservis</b> Pazaryeri · İkinci El · Satıcı: Benservis</span>
          <span className="ie-yasal">
            <a href="/on-bilgilendirme-formu/">Ön Bilgilendirme Formu</a> · <a href="/mesafeli-satis-sozlesmesi/">Mesafeli Satış Sözleşmesi</a> ·{" "}
            <a href="/iade-ve-cayma/">İade, Cayma ve Teslimat</a> · <a href="/pazaryeri-aydinlatma-metni/">Aydınlatma Metni</a> · <a href="/gizlilik/">Gizlilik</a>
          </span>
        </div>
      </footer>
    </div>
  );
}

function useIlanlar(dosya) {
  const [ilanlar, setIlanlar] = useState(null);
  const [hata, setHata] = useState("");
  useEffect(() => {
    let iptal = false;
    const q = dosya ? `?dosya=${encodeURIComponent(dosya)}` : "";
    fetch(`/api/ikinci-el/liste${q}`)
      .then((r) => r.json().then((d) => ({ ok: r.ok, kod: r.status, d })))
      .then(({ ok, kod, d }) => {
        if (iptal) return;
        if (ok) setIlanlar(d.ilanlar || []);
        else if (kod === 404) setIlanlar([]);
        else setHata(d.error || "Liste okunamadı.");
      })
      .catch(() => { if (!iptal) setHata("Bağlantı hatası."); });
    return () => { iptal = true; };
  }, [dosya]);
  return { ilanlar, hata };
}

export default function IkinciElVitrin() {
  useNoindex("İkinci El · Pazaryeri · Benservis");
  const { ilanlar, hata } = useIlanlar(null);
  const [metin, setMetin] = useState("");
  const [arananMetin, setArananMetin] = useState("");
  const [koleksiyon, setKoleksiyon] = useState("");

  useEffect(() => { try { track("ikinci_el_goruntule", {}); } catch { /* ölçüm akışı bozmaz */ } }, []);

  const simdi = Date.now();
  const doluKoleksiyonlar = useMemo(
    () => KOLEKSIYONLAR.filter((k) => (ilanlar || []).some((i) => k.f(i, simdi))),
    [ilanlar], // eslint-disable-line react-hooks/exhaustive-deps
  );
  const kol = KOLEKSIYONLAR.find((k) => k.slug === koleksiyon);
  const suzulmus = useMemo(() => {
    let l = aramaSuz(ilanlar || [], arananMetin);
    if (kol) l = l.filter((i) => kol.f(i, simdi));
    return l;
  }, [ilanlar, arananMetin, kol]); // eslint-disable-line react-hooks/exhaustive-deps
  const suzgecVar = !!arananMetin || !!kol;

  const ara = (e) => {
    e.preventDefault();
    try { track("ikinci_el_ara", {}); } catch { /* metin ölçülmez */ }
    setArananMetin(metin.trim().slice(0, 80));
  };
  const temizle = () => { setMetin(""); setArananMetin(""); setKoleksiyon(""); };

  const arama = (
    <form className="ie-ara" onSubmit={ara} role="search">
      <input
        type="search" value={metin} maxLength={80} onChange={(e) => setMetin(e.target.value)}
        placeholder="Marka, model ya da dosya no (ör. BS-2E-000003)" aria-label="İkinci el ürünlerde ara"
      />
      <button type="submit">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
        <span className="ie-yazi">Ara</span>
      </button>
    </form>
  );

  const [one, ...kalan] = suzulmus;

  return (
    <Kabuk arama={arama}>
      <section className="ie-hero">
        <h1>Kontrolden geçmiş ikinci el beyaz eşya ve elektronik</h1>
        <p>Her ürünü Benservis satar ve kontrol eder. Değişen parçası kayıtlı, garanti durumu ilanda yazılı.</p>
      </section>

      {hata && <div className="ie-hata">{hata}</div>}
      {!hata && ilanlar === null && <div className="ie-yukleniyor">Ürünler yükleniyor…</div>}

      {ilanlar && doluKoleksiyonlar.length > 0 && (
        <div className="ie-kol" aria-label="Koleksiyonlar">
          {doluKoleksiyonlar.map((k) => (
            <button key={k.slug} type="button" className={koleksiyon === k.slug ? "on" : ""}
              onClick={() => { setKoleksiyon(koleksiyon === k.slug ? "" : k.slug); try { track("ikinci_el_koleksiyon", { koleksiyon: k.slug }); } catch { /* ölçüm akışı bozmaz */ } }}>
              {k.ad}
            </button>
          ))}
        </div>
      )}

      {ilanlar && suzgecVar && (
        <div className="ie-suzgec">
          <span>{suzulmus.length} ürün</span>
          <button type="button" onClick={temizle}>Süzgeci temizle</button>
        </div>
      )}

      {ilanlar && ilanlar.length === 0 && (
        <div className="ie-bos">İlk ürünler Benservis kontrolünden geçiyor. Çok yakında burada.</div>
      )}
      {ilanlar && ilanlar.length > 0 && suzulmus.length === 0 && (
        <div className="ie-bos">Aramana uyan ürün yok. <button type="button" onClick={temizle}>Tüm ürünleri göster</button></div>
      )}

      {one && (
        <section className="ie-vitrin">
          <IlanKarti ilan={one} buyuk />
          {kalan.length > 0 && <div className="ie-izgara">{kalan.map((i) => <IlanKarti key={i.id} ilan={i} />)}</div>}
        </section>
      )}

      <section className="ie-guven" aria-label="Neden Benservis ikinci el">
        <div>
          <GuvenIkon tur="kontrol" />
          <b>Benservis kontrolü</b>
          <span>Her ürün satıştan önce madde madde kontrol edilir; sonuç ilanda yazılı.</span>
        </div>
        <div>
          <GuvenIkon tur="garanti" />
          <b>3 garanti sınıfı</b>
          <span>Marka garantisi süren, Benservis garantili ya da garantisiz. Her ilanda açıkça belirtilir.</span>
        </div>
        <div>
          <GuvenIkon tur="parca" />
          <b>Değişen parça kaydı</b>
          <span>Cihazda değişen her parça tarihiyle kayıtlı; ürün sayfasında listelenir.</span>
        </div>
      </section>
    </Kabuk>
  );
}

function IlanKarti({ ilan, buyuk }) {
  const g = garantiEtiketi(ilan);
  const alt = altSatir(ilan);
  const foto = ilan.fotograflar?.[0];
  const ac = () => { try { track("ikinci_el_kart_click", { ilan: ilan.id }); } catch { /* ölçüm akışı bozmaz */ } };
  return (
    <a href={`/ikinci-el/${ilan.dosya_no}`} className={`ie-kart${buyuk ? " buyuk" : ""}`} onClick={ac}>
      <div className="ie-foto">
        {foto
          ? <img src={foto} alt={ilan.baslik} loading={buyuk ? "eager" : "lazy"} />
          : <div className="ie-foto-bos"><CihazIkon cihaz={cihazAdi(ilan.cihaz_turu)} size={buyuk ? 76 : 48} /><span>Fotoğraf yakında</span></div>}
        <span className={`ie-garanti g-${g.sinif}`}>{g.metin}</span>
      </div>
      <div className="ie-bilgi">
        <div className="ie-ad">{ilan.marka ? <>{ilan.marka} <b>{ilan.model}</b></> : <b>{ilan.baslik}</b>}</div>
        {ilan.marka && <div className="ie-baslik">{ilan.baslik}</div>}
        {alt && <div className="ie-altsatir">{alt}</div>}
        <div className="ie-fiyat">{tl(ilan.fiyat)} <small>KDV dahil</small></div>
        <div className="ie-dosya">Dosya no {ilan.dosya_no}</div>
      </div>
    </a>
  );
}

function GuvenIkon({ tur }) {
  const yol = {
    kontrol: <><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></>,
    garanti: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    parca: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-2.7-1.1l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0-1.1-2.7H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.1-2.7l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 2.7-1.1V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 2.7 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0 1.1 2.7H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1.3z" /></>,
  }[tur];
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{yol}</svg>;
}

// `/ikinci-el/BS-2E-000123` — ürün sayfası İE-3'te (galeri, Benservis kontrolü, teslim seçimi,
// PayTR). O gelene kadar özet kart + "yakında"; sepete ekleme yok.
export function IkinciElOnizleme({ dosya }) {
  useNoindex(`${dosya} · İkinci El · Benservis`);
  const { ilanlar, hata } = useIlanlar(dosya);
  const ilan = ilanlar?.[0];
  return (
    <Kabuk>
      <nav className="ie-kirinti"><a href="/pazar">Pazaryeri</a> › <a href="/ikinci-el">İkinci El</a> › {dosya}</nav>
      {hata && <div className="ie-hata">{hata}</div>}
      {!hata && ilanlar === null && <div className="ie-yukleniyor">Yükleniyor…</div>}
      {ilanlar && !ilan && <div className="ie-bos">Bu dosya numarasıyla satışta ürün yok. <a href="/ikinci-el">Tüm ürünler →</a></div>}
      {ilan && (
        <section className="ie-onizleme">
          <IlanKarti ilan={ilan} buyuk />
          <div className="ie-yakinda">
            <b>Ürün sayfası hazırlanıyor</b>
            <span>Benservis kontrol sonuçları, değişen parçalar ve satın alma bu sayfaya çok yakında ekleniyor.</span>
            <a href="/ikinci-el">← Tüm ikinci el ürünler</a>
          </div>
        </section>
      )}
    </Kabuk>
  );
}

const CSS = `
.ie{min-height:100vh;background:#F5F7FA;color:${INK};font-family:'Hanken Grotesk',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:14px}
.ie a{color:inherit;text-decoration:none}
.ie button{font-family:inherit;cursor:pointer}
.ie-kap{max-width:1240px;margin:0 auto;padding:0 16px}
.ie-ust{background:${INK};position:sticky;top:0;z-index:50}
.ie-bas{display:flex;align-items:center;gap:16px;padding-top:12px;padding-bottom:12px}
.ie-logo{display:flex;flex:none}
.ie-etiket{font-weight:800;font-size:13px;color:#fff!important;border:1.5px solid rgba(255,255,255,.55);border-radius:999px;padding:5px 11px;white-space:nowrap}
.ie-bosluk{flex:1}
.ie-ara{flex:1;display:flex;border:2px solid #fff;border-radius:10px;overflow:hidden;background:#fff;min-width:0}
.ie-ara input{flex:1;min-width:0;border:0;outline:0;padding:11px 14px;font-size:14.5px;font-family:inherit;color:${INK}}
.ie-ara button{border:0;background:${BLUE};color:#fff;padding:0 20px;font-weight:700;font-size:14px;display:flex;align-items:center;gap:6px}
.ie-sepet{position:relative;display:flex;align-items:center;gap:8px;background:#fff;color:${INK}!important;border-radius:10px;padding:10px 14px;font-weight:700;white-space:nowrap}
.ie-rozet{position:absolute;top:-7px;right:-7px;background:#EA580C;color:#fff;font-size:11px;font-weight:800;border-radius:999px;min-width:20px;height:20px;display:grid;place-items:center;border:2px solid ${INK};padding:0 4px}
.ie-hero{margin:22px 0 14px}
.ie-hero h1{font-family:'Fraunces',serif;font-size:30px;line-height:1.15;margin:0;max-width:720px}
.ie-hero p{margin:8px 0 0;color:${SLATE};font-size:15px;max-width:640px;line-height:1.5}
.ie-hata{color:${RED};font-weight:600;margin:16px 0}
.ie-yukleniyor{color:${SLATE};margin:18px 0}
.ie-kol{display:flex;gap:8px;flex-wrap:wrap;margin:6px 0 14px}
.ie-kol button{border:1.5px solid ${HAIR};background:#fff;color:${INK};border-radius:999px;padding:8px 14px;font-weight:700;font-size:13px}
.ie-kol button.on,.ie-kol button:hover{border-color:${BLUE};color:${BLUE}}
.ie-suzgec{display:flex;align-items:center;gap:12px;margin:0 0 12px;color:${SLATE};font-weight:600}
.ie-suzgec button,.ie-bos button{border:0;background:none;color:${BLUE};font-weight:700;font-size:13.5px;padding:0}
.ie-bos{background:#fff;border:1px dashed ${HAIR};border-radius:14px;padding:28px 20px;text-align:center;color:${SLATE};font-size:15px;margin:10px 0 18px}
.ie-bos a{color:${BLUE}!important;font-weight:700}
.ie-vitrin{display:grid;gap:14px;margin-bottom:22px}
.ie-izgara{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
.ie-kart{background:#fff;border:1px solid ${HAIR};border-radius:14px;overflow:hidden;display:flex;flex-direction:column;transition:box-shadow .15s,border-color .15s;min-width:0}
.ie-kart:hover{border-color:#BFDBFE;box-shadow:0 6px 20px rgba(15,23,42,.08)}
.ie-kart.buyuk{flex-direction:row}
.ie-foto{position:relative;aspect-ratio:4/3;background:${TINT};flex:none}
.ie-kart.buyuk .ie-foto{width:55%;aspect-ratio:16/10}
.ie-foto img{width:100%;height:100%;object-fit:cover;display:block}
.ie-foto-bos{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:#94A3B8;font-size:12px;font-weight:600}
.ie-garanti{position:absolute;left:10px;top:10px;font-size:11.5px;font-weight:800;border-radius:999px;padding:4px 10px;background:#fff;border:1px solid ${HAIR}}
.ie-garanti.g-marka{background:#EFF6FF;color:#1D4ED8;border-color:#BFDBFE}
.ie-garanti.g-benservis{background:#F0FDF4;color:${GREEN_DEEP};border-color:#BBF7D0}
.ie-garanti.g-yok{background:#fff;color:${SLATE}}
.ie-bilgi{padding:12px 14px 14px;display:flex;flex-direction:column;gap:4px;min-width:0}
.ie-kart.buyuk .ie-bilgi{padding:22px 24px;justify-content:center;gap:8px}
.ie-ad{font-size:15px;line-height:1.3}
.ie-kart.buyuk .ie-ad{font-family:'Fraunces',serif;font-size:26px}
.ie-baslik{color:${SLATE};font-size:13px;line-height:1.35}
.ie-altsatir{color:${SLATE};font-size:12.5px}
.ie-fiyat{font-size:19px;font-weight:800;margin-top:4px}
.ie-kart.buyuk .ie-fiyat{font-size:28px}
.ie-fiyat small{font-size:11.5px;font-weight:600;color:${SLATE}}
.ie-dosya{color:#94A3B8;font-size:11.5px;font-weight:600}
.ie-guven{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin:8px 0 24px}
.ie-guven div{background:#fff;border:1px solid ${HAIR};border-radius:14px;padding:18px;display:flex;flex-direction:column;gap:6px}
.ie-guven b{font-size:15px}
.ie-guven span{color:${SLATE};line-height:1.45;font-size:13.5px}
.ie-kirinti{margin:16px 0 12px;color:${SLATE};font-size:13px}
.ie-kirinti a{color:${BLUE}!important;font-weight:600}
.ie-onizleme{display:grid;gap:14px;margin-bottom:24px}
.ie-yakinda{background:#fff;border:1px solid ${HAIR};border-radius:14px;padding:18px;display:flex;flex-direction:column;gap:6px}
.ie-yakinda span{color:${SLATE};line-height:1.45}
.ie-yakinda a{color:${BLUE}!important;font-weight:700;margin-top:4px}
.ie-alt{background:${INK};color:#CBD5E1;margin-top:20px;padding:24px 0;font-size:12.5px}
.ie-alt-ic{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
.ie-alt b{color:#fff}
.ie-yasal{flex-basis:100%;font-size:12px}
.ie-alt a{color:#CBD5E1!important;text-decoration:underline!important}
@media (max-width:1000px){
  .ie-izgara{grid-template-columns:repeat(3,minmax(0,1fr))}
}
@media (max-width:760px){
  .ie-kart.buyuk{flex-direction:column}
  .ie-kart.buyuk .ie-foto{width:100%;aspect-ratio:4/3}
  .ie-kart.buyuk .ie-bilgi{padding:14px 16px 16px}
  .ie-kart.buyuk .ie-ad{font-size:21px}
  .ie-kart.buyuk .ie-fiyat{font-size:23px}
  .ie-guven{grid-template-columns:1fr}
}
@media (max-width:640px){
  .ie-bas{flex-wrap:wrap;gap:10px;padding-top:10px;padding-bottom:10px}
  .ie-logo svg{height:34px!important}
  .ie-sepet{margin-left:auto;padding:9px 12px}
  .ie-yazi{display:none}
  .ie-bosluk{flex:0}
  .ie-ara{order:3;flex-basis:100%}
  .ie-ara input{padding:10px 12px;font-size:16px}
  .ie-ara button{padding:0 14px}
  .ie-hero h1{font-size:23px}
  .ie-izgara{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
  .ie-bilgi{padding:10px 11px 12px}
  .ie-fiyat{font-size:16.5px}
}
`;

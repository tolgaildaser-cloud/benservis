// src/AnaSayfaPazar.jsx — ana sayfa "Pazaryeri" bloğu: en çok satan 8 ürün, SSS'nin hemen üstü.
// Tolga, 11 Eki 2026 08:1x (birebir): "ödemeyi bağlayınca ana sayfaya da 8 adet en çok satan ürünü
// pazaryeri olarak koy. yeri de sık sorulan soruların hemen üzeri olmalı" → tetik (PayTR canlı +
// SP-0002 ödendi) 09:1x doldu; YK 09:2x "FE'yi koştur, ana sayfa bloğunu yapsın".
//
// • Sıra API'de: GET /api/pazar/liste?siralama=cok-satan (ödenmiş kalem sayısı → görselli → yeni).
// • 2 satır × 4 (masaüstü) · 2 sütun × 4 satır (≤640 px). Kart → /urun/:id; sonda "Tüm ürünler".
// • 8'den az ürün dönerse blok HİÇ basılmaz (yarım vitrin yok); hata da sessizce gizler.
// • Liste sayfa yüklendikten SONRA çekilir: ana sayfanın ilk boyamasını (LCP) beklemez.
// ⛔ SSS'ye dokunulmaz (#142) — bu bileşen yalnız onun ÜSTÜNE oturur.
// ⛔ Fiyat KDV dahil + "kargo hariç" yan yana (Tolga, 10 Eki). Analitiğe yalnız ürün id gider.
// ⛔ Satır içi stile `display` yazılmaz: duyarlı ızgara CSS'in işi (PR #175 dersi).
// ⛔ CSS bir JS şablon dizesi: içindeki yorumlara ters tırnak YAZILMAZ.
import React, { useEffect, useState } from "react";
import { track } from "@vercel/analytics";
import CihazIkon from "./cihaz-ikonlari.jsx";
import { PAZAR_CIHAZLARI } from "./pazar-sozluk.js";
import { BLUE, NAVY, HAIR, MUTED } from "./theme.js";
import { temsiliGorsel, TEMSILI_ETIKET } from "./pazar-gorsel.js";

const ADET = 8;
const tl = (n) => `${Math.round(Number(n)).toLocaleString("tr-TR")} TL`;
const cihazAdi = (slug) => PAZAR_CIHAZLARI.find((c) => c.slug === slug)?.ad || "Diğer";

export default function AnaSayfaPazar() {
  const [urunler, setUrunler] = useState(null);

  useEffect(() => {
    let iptal = false;
    const cek = () =>
      fetch("/api/pazar/liste?siralama=cok-satan")
        .then((r) => (r.ok ? r.json() : null))
        .then((d) => { if (!iptal) setUrunler(d?.urunler || []); })
        .catch(() => { if (!iptal) setUrunler([]); });
    if (document.readyState === "complete") cek();
    else window.addEventListener("load", cek, { once: true });
    return () => { iptal = true; window.removeEventListener("load", cek); };
  }, []);

  if (!urunler || urunler.length < ADET) return null;

  return (
    <section className="as-pazar" aria-labelledby="as-pazar-baslik">
      <style>{CSS}</style>
      <div className="as-pazar-bas">
        <h2 id="as-pazar-baslik">Pazaryeri</h2>
        <a rel="nofollow" href="/pazar?k=anasayfa-blok">Tüm ürünler <span aria-hidden="true">→</span></a>
      </div>
      <div className="as-pazar-izgara">
        {urunler.slice(0, ADET).map((u) => (
          <a
            key={u.id}
            href={`/urun/${u.id}`}
            className="as-pazar-kart"
            onClick={() => { try { track("pazar_vitrin_click", { urun: u.id }); } catch { /* ölçüm akışı bozmaz */ } }}
          >
            <span className="as-pazar-gorsel">
              {u.gorsel_url
                ? <img src={u.gorsel_url} alt={u.baslik} loading="lazy" decoding="async" referrerPolicy="no-referrer" />
                : <CihazIkon cihaz={cihazAdi(u.cihaz_turu)} size={56} />}
              {temsiliGorsel(u.gorsel_url) && <span className="as-pazar-temsili">{TEMSILI_ETIKET}</span>}
            </span>
            <span className="as-pazar-ad">{u.baslik}</span>
            <span className="as-pazar-fiyat"><b>{tl(u.fiyat)}</b> <small>KDV dahil · kargo hariç</small></span>
          </a>
        ))}
      </div>
      <a className="as-pazar-tum" rel="nofollow" href="/pazar?k=anasayfa-blok">Tüm ürünler <span aria-hidden="true">→</span></a>
    </section>
  );
}

const CSS = `
.as-pazar{max-width:1080px;margin:clamp(36px,5vw,56px) auto 0}
.as-pazar-bas{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:clamp(14px,2vw,20px)}
.as-pazar-bas h2{font-family:Fraunces,Georgia,serif;font-weight:600;color:${NAVY};font-size:clamp(22px,3.4vw,34px);letter-spacing:-.01em;margin:0}
.as-pazar-bas a,.as-pazar-tum{color:${BLUE};font-weight:700;font-size:14px;text-decoration:none;white-space:nowrap}
.as-pazar-izgara{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
.as-pazar-kart{display:flex;flex-direction:column;background:#fff;border:1px solid ${HAIR};border-radius:14px;overflow:hidden;text-decoration:none;color:${NAVY};transition:box-shadow .15s,border-color .15s}
.as-pazar-kart:hover{box-shadow:0 10px 30px -14px rgba(15,23,42,.35);border-color:#CBD5E1}
.as-pazar-gorsel{position:relative;display:grid;place-items:center;aspect-ratio:1/1;background:#fff;border-bottom:1px solid #F1F5F9;color:${BLUE}}
.as-pazar-temsili{position:absolute;bottom:6px;right:6px;font-size:10px;font-weight:700;padding:2px 6px;border-radius:5px;background:rgba(241,245,249,.92);color:#475569}
.as-pazar-gorsel img{width:100%;height:100%;object-fit:contain;padding:10px;box-sizing:border-box}
.as-pazar-ad{display:-webkit-box;padding:10px 12px 4px;font-size:14px;font-weight:600;line-height:1.35;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical;min-height:2.7em}
.as-pazar-fiyat{padding:0 12px 12px;margin-top:auto;font-size:16px}
.as-pazar-fiyat small{display:block;font-size:11.5px;color:${MUTED};font-weight:500;margin-top:2px}
.as-pazar-tum{display:none;margin-top:14px;text-align:center}
@media (max-width:640px){
  .as-pazar-izgara{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
  .as-pazar-bas a{display:none}
  .as-pazar-tum{display:block}
  .as-pazar-ad{font-size:13px;padding:8px 10px 3px}
  .as-pazar-fiyat{padding:0 10px 10px;font-size:15px}
}
`;

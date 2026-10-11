// src/KayitSecim.jsx — `/kayit` "Kayıt ol" seçim sayfası (YK #172 ÜY-1, 11 Eki 2026).
// Tolga (11 Eki ~11:5x): "ana sayfada sağ üstteki servis kaydını "kayıt ol" olarak değiştirelim.
// girdikten sonra servis/satıcı yada birey olduğunu seçsin" · Birey → "üyelik girişine".
// Tarif: benservis-icerik/uyelik/UYELIK-GARANTI-HEDEF-GORUNUM.md bölüm 5.
//
// İki kart:
//   • Servis / Satıcıyım → /servis-kayit (gelen `kaynak` aynen taşınır) + "Zaten kayıtlıyım → giriş" (/panel)
//   • Bireyim → /giris (ÜY-2). ÜY-2 canlı olana kadar kart "üyelik yakında" der ve teşhise yönlendirir;
//     `UYELIK_ACIK` true olunca giriş bağlantısı açılır.
// Olay `kayit_secim` (servis | birey) — kişisel veri yok.
// ⛔ Satır içi stile `display` yazılmaz (PR #175 dersi).
import React, { useEffect } from "react";
import { track } from "@vercel/analytics";
import BenservisLogo from "./BenservisLogo.jsx";
import { NAVY as INK, BLUE, HAIR, SLATE, TINT, GREEN_DEEP } from "./theme.js";

export const UYELIK_ACIK = false; // ÜY-2 (/giris + /hesabim) merge olunca true

// Kaynak etiketi servis kaydına aynen taşınır; yalnız slug karakterleri ve sunucunun
// sınırı (api/servis/basvuru.js: en fazla 32) — serbest metin URL'ye taşınmaz.
export function kaynakOku(search) {
  const k = new URLSearchParams(search).get("kaynak") || "";
  return /^[a-z0-9-]{1,32}$/.test(k) ? k : "kayit";
}

export default function KayitSecim() {
  const kaynak = kaynakOku(window.location.search);

  useEffect(() => {
    document.title = "Kayıt ol · Benservis";
    const m = document.createElement("meta");
    m.name = "robots"; m.content = "noindex, follow";
    document.head.appendChild(m);
    return () => m.remove();
  }, []);

  const sec = (tur) => { try { track("kayit_secim", { tur }); } catch { /* ölçüm akışı bozmaz */ } };

  return (
    <div className="ks">
      <style>{CSS}</style>
      <header className="ks-ust">
        <div className="ks-kap">
          <a href="/" aria-label="Benservis ana sayfası" className="ks-logo">
            <BenservisLogo style={{ height: 40, width: "auto" }} benColor="#FFFFFF" servisColor="#93C5FD" mottoColor="#CBD5E1" />
          </a>
        </div>
      </header>
      <main className="ks-kap ks-ana">
        <h1>Kayıt ol</h1>
        <p className="ks-alt">Benservis'e kim olarak katılıyorsun?</p>
        <div className="ks-kartlar">
          <section className="ks-kart">
            <Ikon tur="servis" />
            <h2>Servis / Satıcıyım</h2>
            <p>Teknik servisini ya da mağazanı ekle; yakındaki müşteriler seni bulsun, pazaryerinde ürün sat.</p>
            <a className="ks-dugme" href={`/servis-kayit?kaynak=${kaynak}`} onClick={() => sec("servis")}>Servis kaydına başla →</a>
            <a className="ks-ikincil" href="/panel">Zaten kayıtlıyım → giriş</a>
          </section>
          <section className="ks-kart">
            <Ikon tur="birey" />
            <h2>Bireyim</h2>
            <p>Cihazlarını ekle, faturasını sakla, garanti bitmeden 30 gün önce e-postayla hatırlatalım.</p>
            {UYELIK_ACIK ? (
              <a className="ks-dugme" href="/giris" onClick={() => sec("birey")}>Üye ol / giriş yap →</a>
            ) : (
              <>
                <span className="ks-yakinda">Üyelik çok yakında açılıyor</span>
                <a className="ks-ikincil" href="/ariza" onClick={() => sec("birey")}>Şimdilik: cihazının arızasını ücretsiz teşhis et →</a>
              </>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

function Ikon({ tur }) {
  const yol = tur === "servis"
    ? <><path d="M14.5 6.5a3.5 3.5 0 0 0-4.9 4.4l-4.8 4.8a1.5 1.5 0 0 0 2.1 2.1l4.8-4.8a3.5 3.5 0 0 0 4.4-4.9l-2 2-1.7-1.7Z" /></>
    : <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" /></>;
  return <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={BLUE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{yol}</svg>;
}

const CSS = `
.ks{min-height:100vh;background:#F5F7FA;color:${INK};font-family:'Hanken Grotesk',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}
.ks a{text-decoration:none}
.ks-kap{max-width:920px;margin:0 auto;padding:0 16px}
.ks-ust{background:${INK}}
.ks-ust .ks-kap{padding-top:12px;padding-bottom:12px}
.ks-logo{display:inline-flex}
.ks-ana{padding-top:32px;padding-bottom:48px}
.ks h1{font-family:'Fraunces',serif;font-size:32px;margin:0}
.ks-alt{color:${SLATE};font-size:16px;margin:6px 0 22px}
.ks-kartlar{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.ks-kart{background:#fff;border:1px solid ${HAIR};border-radius:16px;padding:24px;display:flex;flex-direction:column;gap:10px}
.ks-kart h2{font-family:'Fraunces',serif;font-size:22px;margin:4px 0 0}
.ks-kart p{color:${SLATE};line-height:1.5;margin:0 0 6px;flex:1}
.ks-dugme{background:${BLUE};color:#fff!important;border-radius:10px;padding:13px 16px;font-weight:800;text-align:center}
.ks-ikincil{color:${BLUE}!important;font-weight:700;font-size:14px;text-align:center}
.ks-yakinda{background:${TINT};color:${GREEN_DEEP};border-radius:10px;padding:12px 16px;font-weight:800;text-align:center}
@media (max-width:640px){
  .ks-kartlar{grid-template-columns:1fr}
  .ks h1{font-size:26px}
  .ks-ana{padding-top:22px}
}
`;

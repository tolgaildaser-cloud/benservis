// src/UrunDetay.jsx
// Servis ürünü detay sayfası — /urun/:id
// Büyük görsel, fiyat, "Sepete Ekle" + "Hemen Satın Al", DPP özeti,
// satıcı firma kartı (tıklayınca firmanın mağazası: /servis/:id).
import React, { useState, useEffect } from "react";
import { track } from "@vercel/analytics";
import { sepeteEkle, sepetAdet } from "./sepet.js";
import { NAVY as INK, TINT as CREAM, BLUE as AMBER, GREEN, BLUE as LINK } from "./theme.js";
import { BenservisLogoKoyu, KOYU_ZEMIN } from "./BenservisLogo.jsx";
import { temsiliGorsel, TEMSILI_ETIKET, TEMSILI_NOT } from "./pazar-gorsel.js";
import { urunLdNesnesi } from "./urun-ld.js"; // YK #179 ①: kabukla aynı Product şeması


export default function UrunDetay() {
  const urunId = window.location.pathname.split("/")[2] || "";
  const [data, setData] = useState(null);
  const [yukleniyor, setYukleniyor] = useState(true);
  const [hata, setHata] = useState("");
  const [adet, setAdet] = useState(sepetAdet());
  const [eklendi, setEklendi] = useState(false);

  useEffect(() => {
    const f = e => setAdet(e.detail);
    window.addEventListener("bs-sepet-degisti", f);
    return () => window.removeEventListener("bs-sepet-degisti", f);
  }, []);

  useEffect(() => {
    if (!urunId) { setHata("Geçersiz ürün adresi."); setYukleniyor(false); return; }
    fetch(`/api/urun/${encodeURIComponent(urunId)}`)
      .then(r => r.json().then(d => ({ ok: r.ok, d })))
      .then(({ ok, d }) => { ok ? setData(d) : setHata(d.error || "Ürün bulunamadı."); })
      .catch(() => setHata("Bağlantı hatası."))
      .finally(() => setYukleniyor(false));
  }, [urunId]);

  // YK #166 PR-4: Benservis ürünü pazarın parçası — kargo hariç fiyat + `sepete_ekle` ölçümü.
  // Servis (ikinci el) ürünlerinin akışı aynen kalır.
  const pazarMi = data?.satici?.tur === "benservis";
  const sepetKalemi = () => ({ ...data.urun, servis_ad: data.servis?.ad || data.satici?.ad, kargo_haric: pazarMi });

  // YK #173 (a): sayfa başlığı + Product JSON-LD. Build'de basılan kabuk (dist/urun/<id>/index.html,
  // scripts/pazar-sayfalari.mjs) zaten `data-bs-ld` şemasını taşır; o varsa ikinci kez eklenmez (çift
  // Product şeması olmasın). Build'den sonra eklenen ürünlerde (kabuk yok) şema burada üretilir.
  useEffect(() => {
    if (!data?.urun) return undefined;
    const u = data.urun;
    document.title = pazarMi ? `${u.baslik} · Benservis Pazaryeri` : `${u.baslik} · Benservis`;
    if (!pazarMi || u.kategori !== "yedek-parca" || document.head.querySelector("script[data-bs-ld]")) return undefined;
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.setAttribute("data-bs-ld", "istemci");
    s.textContent = JSON.stringify(urunLdNesnesi(u, {
      saticiAd: data.satici?.ad || "Benservis",
      ...(u.aciklama ? { description: String(u.aciklama).slice(0, 160) } : {}),
    }));
    document.head.appendChild(s);
    return () => s.remove();
  }, [data, pazarMi]);
  const olc = () => {
    if (!pazarMi) return;
    try { track("sepete_ekle", { kategori: data.urun.kategori || "", satici: "benservis" }); } catch { /* ölçüm akışı bozmaz */ }
  };

  const ekle = () => {
    const ok = sepeteEkle(sepetKalemi());
    if (ok) olc();
    setEklendi(true);
    setTimeout(() => setEklendi(false), 1800);
  };

  const satinAl = () => {
    if (sepeteEkle(sepetKalemi())) olc();
    window.location.href = "/sepet?odeme=1";
  };

  if (yukleniyor) return <Merkez>Yükleniyor…</Merkez>;
  if (hata)       return <Merkez><span style={{ color: "#DC2626" }}>{hata}</span></Merkez>;

  const { urun, servis, dpp } = data;
  const sepette = !eklendi && sepetAdet() > 0 && JSON.parse(localStorage.getItem("bs_sepet") || "[]").some(u => u.id === urun.id);

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFC", fontFamily: "'Hanken Grotesk', sans-serif", color: INK }}>
      

      {/* Header — pazaryeri başlığıyla aynı lacivert zemin + kurumsal logo (Tolga, 12 Eki: eski yarım daire logo
          kalktı; "zemin beyaz olmamalı, beyaz olursa bil gör çağır gözükmez"). */}
      <header style={{ background: KOYU_ZEMIN, borderBottom: `3px solid ${AMBER}`, position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", alignItems: "center", gap: 14, padding: "10px 16px" }}>
          <a href="/" aria-label="Benservis ana sayfası" style={{ display: "flex" }}><BenservisLogoKoyu height={40} /></a>
          <a href={pazarMi ? "/pazar" : "/ikinci-el"} style={{ color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: 13, border: "1px solid rgba(255,255,255,.35)", borderRadius: 99, padding: "5px 12px", whiteSpace: "nowrap" }}>
            {pazarMi ? "Pazaryeri" : "İkinci El"}
          </a>
          <a href="/sepet" aria-label={`Sepetim, ${adet} ürün`} style={{ marginLeft: "auto", position: "relative", display: "flex", alignItems: "center", gap: 6, color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: 13.5 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6" /><circle cx="10" cy="20.5" r="1.3" /><circle cx="17" cy="20.5" r="1.3" /></svg>
            Sepetim
            {adet > 0 && (
              <span style={{ position: "absolute", top: -8, right: -12, background: AMBER, color: "#fff", borderRadius: 99, fontSize: 10.5, fontWeight: 700, padding: "1px 6px" }}>{adet}</span>
            )}
          </a>
        </div>
      </header>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "16px 16px 50px" }}>
        {/* breadcrumb */}
        <div style={{ fontSize: 12.5, color: "#64748B", marginBottom: 12 }}>
          {pazarMi
            ? <a href="/pazar" style={{ color: LINK, textDecoration: "none" }}>Pazar</a>
            : <a href="/ikinci-el" style={{ color: LINK, textDecoration: "none" }}>İkinci El</a>} › <strong>{urun.baslik}</strong>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 18, alignItems: "start" }}>
          {/* SOL: görsel */}
          <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 8, overflow: "hidden" }}>
            <div style={{ position: "relative" }}>
              {urun.gorsel_url
                ? <img src={urun.gorsel_url} alt={urun.baslik} style={{ width: "100%", display: "block", aspectRatio: "4/3", objectFit: temsiliGorsel(urun.gorsel_url) ? "contain" : "cover", background: "#fff" }} />
                : <div style={{ aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 72, background: "#F1F5F9" }}>📦</div>}
              {temsiliGorsel(urun.gorsel_url) && (
                <span style={{ position: "absolute", top: 10, left: 10, fontSize: 11.5, fontWeight: 700, padding: "3px 8px", borderRadius: 6, background: "rgba(241,245,249,.95)", color: "#475569" }}>{TEMSILI_ETIKET}</span>
              )}
            </div>
            {temsiliGorsel(urun.gorsel_url) && (
              <div style={{ fontSize: 12, color: "#64748B", padding: "8px 12px", borderTop: "1px solid #F1F5F9" }}>{TEMSILI_NOT}</div>
            )}
          </div>

          {/* SAĞ: bilgi + aksiyonlar */}
          <div>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 23, fontWeight: 700, margin: "0 0 8px", lineHeight: 1.3 }}>{urun.baslik}</h1>

            {/* rozetler */}
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
              {dpp?.benservis_dogrulanmis && (
                <span style={{ fontSize: 11.5, fontWeight: 700, background: "#DCFCE7", color: GREEN, borderRadius: 5, padding: "3px 9px" }}>✓ Benservis Doğrulandı</span>
              )}
              {dpp && (
                <a href={`/dpp/${encodeURIComponent(urun.dpp_seri_no)}`} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 11.5, fontWeight: 700, background: "#F1F5F9", color: "#64748B", borderRadius: 5, padding: "3px 9px", textDecoration: "none" }}>
                  📋 {dpp.tamir_sayisi} tamir kaydı — DPP geçmişini gör
                </a>
              )}
            </div>

            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 30, fontWeight: 700, color: AMBER, marginBottom: 16 }}>
              {urun.fiyat.toLocaleString("tr-TR")} TL
              {pazarMi && <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, fontWeight: 600, color: "#64748B", marginLeft: 8 }}>kargo hariç</span>}
            </div>

            {/* Satın Al + Sepete Ekle */}
            <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
              <button onClick={satinAl}
                style={{ flex: 1.4, padding: "14px 0", borderRadius: 8, border: "none", background: AMBER, color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer", fontFamily: "inherit" }}>
                Hemen Satın Al
              </button>
              <button onClick={ekle} disabled={sepette}
                style={{ flex: 1, padding: "14px 0", borderRadius: 8, border: `2px solid ${INK}`, background: "#fff", color: INK, fontWeight: 700, fontSize: 14, cursor: sepette ? "default" : "pointer", fontFamily: "inherit", opacity: sepette ? 0.55 : 1 }}>
                {eklendi ? "✓ Eklendi" : sepette ? "Sepette" : "🛒 Sepete Ekle"}
              </button>
            </div>
            <div style={{ fontSize: 11.5, color: "#64748B", marginBottom: 18 }}>
              🔒 Ödeme Benservis güvencesiyle platform üzerinden yapılır — satıcıya elden ödeme yapmayın.
            </div>

            {urun.aciklama && (
              <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 8, padding: "14px 16px", fontSize: 13.5, lineHeight: 1.65, color: "#334155", marginBottom: 14 }}>
                {urun.aciklama}
              </div>
            )}

            {/* Satıcı firma kartı → mağaza */}
            {servis && (
              <a href={`/servis/${servis.id}`}
                style={{ display: "flex", alignItems: "center", gap: 12, background: "#fff", border: "1px solid #E2E8F0", borderRadius: 8, padding: "13px 16px", textDecoration: "none", color: INK }}>
                <span style={{ fontSize: 26 }}>🏪</span>
                <span style={{ flex: 1 }}>
                  <span style={{ display: "block", fontWeight: 700, fontSize: 14, color: LINK }}>{servis.ad}</span>
                  <span style={{ display: "block", fontSize: 12, color: "#64748B", marginTop: 2 }}>
                    📍 {servis.ilce}, {servis.il} · Tüm ürünlerini gör →
                  </span>
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Merkez({ children }) {
  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFC", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Hanken Grotesk', sans-serif", color: "#64748B" }}>
      {children}
    </div>
  );
}

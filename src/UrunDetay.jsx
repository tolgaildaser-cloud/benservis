// src/UrunDetay.jsx
// Servis ürünü detay sayfası — /urun/:id
// Büyük görsel, fiyat, "Sepete Ekle" + "Hemen Satın Al", DPP özeti,
// satıcı firma kartı (tıklayınca firmanın mağazası: /servis/:id).
import React, { useState, useEffect } from "react";
import { sepeteEkle, sepetAdet } from "./sepet.js";

const FONT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700&family=Hanken+Grotesk:wght@400;500;600;700&display=swap');`;
const INK = "#22302A", CREAM = "#F5EFE2", AMBER = "#C8632B", GREEN = "#3A7D44", LINK = "#1A4FB4";

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

  const ekle = () => {
    const ok = sepeteEkle({ ...data.urun, servis_ad: data.servis?.ad });
    setEklendi(true);
    setTimeout(() => setEklendi(false), 1800);
  };

  const satinAl = () => {
    sepeteEkle({ ...data.urun, servis_ad: data.servis?.ad });
    window.location.href = "/sepet?odeme=1";
  };

  if (yukleniyor) return <Merkez><style>{FONT}</style>Yükleniyor…</Merkez>;
  if (hata)       return <Merkez><style>{FONT}</style><span style={{ color: "#B23A2E" }}>{hata}</span></Merkez>;

  const { urun, servis, dpp } = data;
  const sepette = !eklendi && sepetAdet() > 0 && JSON.parse(localStorage.getItem("bs_sepet") || "[]").some(u => u.id === urun.id);

  return (
    <div style={{ minHeight: "100vh", background: "#F5F3EE", fontFamily: "'Hanken Grotesk', sans-serif", color: INK }}>
      <style>{FONT}</style>

      {/* Header */}
      <header style={{ background: "#fff", borderBottom: `3px solid ${AMBER}`, position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px" }}>
          <a href="/ikinci-el" style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 20, color: INK, textDecoration: "none" }}>
            <span style={{ color: AMBER }}>◑</span> Benservis <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 11, fontWeight: 700, color: "#9A9384", textTransform: "uppercase" }}>ikinci el</span>
          </a>
          <a href="/sepet" style={{ position: "relative", textDecoration: "none", fontSize: 22 }}>
            🛒
            {adet > 0 && (
              <span style={{ position: "absolute", top: -6, right: -10, background: AMBER, color: "#fff", borderRadius: 99, fontSize: 10.5, fontWeight: 700, padding: "1px 6px" }}>{adet}</span>
            )}
          </a>
        </div>
      </header>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "16px 16px 50px" }}>
        {/* breadcrumb */}
        <div style={{ fontSize: 12.5, color: "#6E6450", marginBottom: 12 }}>
          <a href="/ikinci-el" style={{ color: LINK, textDecoration: "none" }}>İkinci El</a> › <strong>{urun.baslik}</strong>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 18, alignItems: "start" }}>
          {/* SOL: görsel */}
          <div style={{ background: "#fff", border: "1px solid #E0DCD2", borderRadius: 8, overflow: "hidden" }}>
            {urun.gorsel_url
              ? <img src={urun.gorsel_url} alt={urun.baslik} style={{ width: "100%", display: "block", aspectRatio: "4/3", objectFit: "cover" }} />
              : <div style={{ aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 72, background: "#EDE6D6" }}>📦</div>}
          </div>

          {/* SAĞ: bilgi + aksiyonlar */}
          <div>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 23, fontWeight: 700, margin: "0 0 8px", lineHeight: 1.3 }}>{urun.baslik}</h1>

            {/* rozetler */}
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
              {dpp?.benservis_dogrulanmis && (
                <span style={{ fontSize: 11.5, fontWeight: 700, background: "#E6F4EC", color: GREEN, borderRadius: 5, padding: "3px 9px" }}>✓ Benservis Doğrulandı</span>
              )}
              {dpp && (
                <a href={`/dpp/${encodeURIComponent(urun.dpp_seri_no)}`} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 11.5, fontWeight: 700, background: "#F0EAD8", color: "#6E6450", borderRadius: 5, padding: "3px 9px", textDecoration: "none" }}>
                  📋 {dpp.tamir_sayisi} tamir kaydı — DPP geçmişini gör
                </a>
              )}
            </div>

            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 30, fontWeight: 700, color: AMBER, marginBottom: 16 }}>
              {urun.fiyat.toLocaleString("tr-TR")} TL
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
            <div style={{ fontSize: 11.5, color: "#8A7B6A", marginBottom: 18 }}>
              🔒 Ödeme Benservis güvencesiyle platform üzerinden yapılır — satıcıya elden ödeme yapmayın.
            </div>

            {urun.aciklama && (
              <div style={{ background: "#fff", border: "1px solid #E0DCD2", borderRadius: 8, padding: "14px 16px", fontSize: 13.5, lineHeight: 1.65, color: "#444", marginBottom: 14 }}>
                {urun.aciklama}
              </div>
            )}

            {/* Satıcı firma kartı → mağaza */}
            {servis && (
              <a href={`/servis/${servis.id}`}
                style={{ display: "flex", alignItems: "center", gap: 12, background: "#fff", border: "1px solid #E0DCD2", borderRadius: 8, padding: "13px 16px", textDecoration: "none", color: INK }}>
                <span style={{ fontSize: 26 }}>🏪</span>
                <span style={{ flex: 1 }}>
                  <span style={{ display: "block", fontWeight: 700, fontSize: 14, color: LINK }}>{servis.ad}</span>
                  <span style={{ display: "block", fontSize: 12, color: "#8A7B6A", marginTop: 2 }}>
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
    <div style={{ minHeight: "100vh", background: "#F5F3EE", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Hanken Grotesk', sans-serif", color: "#888" }}>
      {children}
    </div>
  );
}

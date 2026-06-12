// src/ServisMagaza.jsx
// Public servis mağaza sayfası — /servis/:servis_id
// Servis bilgisi + aktif ikinci el ürün listesi
import React, { useState, useEffect } from "react";

const FONT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700&family=Hanken+Grotesk:wght@400;500;600;700&display=swap');`;
const INK = "#22302A", CREAM = "#F5EFE2", AMBER = "#C8632B", GREEN = "#3A7D44";

const CIHAZ_EMOJI = {
  "Buzdolabı": "🧊", "Çamaşır Makinesi": "🫧", "Bulaşık Makinesi": "🍽️",
  "Klima": "❄️", "Televizyon": "📺", "Bilgisayar": "💻",
  "Telefon": "📱", "Fırın": "🔥", "Mikrodalgа": "📡", "default": "🔌",
};

function UrunKarti({ urun }) {
  const [dpp, setDpp] = useState(null);

  useEffect(() => {
    if (!urun.dpp_seri_no) return;
    fetch(`/api/dpp/cihaz?seri_no=${encodeURIComponent(urun.dpp_seri_no)}`)
      .then(r => r.ok ? r.json() : null)
      .then(d => { if (d?.tamirler) setDpp(d); })
      .catch(() => {});
  }, [urun.dpp_seri_no]);

  const emoji = CIHAZ_EMOJI[urun.baslik?.split(" ")[0]] || CIHAZ_EMOJI.default;
  const benservisDogrulanmis = dpp?.tamirler?.some(t => t.servis_turu === "benservis");

  return (
    <div style={{
      background: "white", borderRadius: 14, overflow: "hidden",
      border: "1px solid #E5DCC9", marginBottom: 14,
      boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
    }}>
      {/* Görsel alanı */}
      <div style={{
        height: 160, background: "#F0EAD8",
        backgroundImage: urun.gorsel_url ? `url(${urun.gorsel_url})` : "none",
        backgroundSize: "cover", backgroundPosition: "center",
        display: urun.gorsel_url ? "block" : "flex",
        alignItems: "center", justifyContent: "center",
        fontSize: 52,
      }}>
        {!urun.gorsel_url && emoji}
      </div>

      <div style={{ padding: "12px 14px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
          <div style={{ fontWeight: 700, fontSize: 15, color: INK, lineHeight: 1.3, flex: 1 }}>
            {urun.baslik}
          </div>
          <div style={{ fontWeight: 700, fontSize: 16, color: AMBER, marginLeft: 10, whiteSpace: "nowrap" }}>
            {urun.fiyat.toLocaleString("tr-TR")} ₺
          </div>
        </div>

        {urun.aciklama && (
          <div style={{ fontSize: 13, color: "#666", lineHeight: 1.5, marginBottom: 8 }}>
            {urun.aciklama}
          </div>
        )}

        {/* DPP rozeti */}
        {dpp && (
          <div style={{ marginBottom: 8 }}>
            {benservisDogrulanmis && (
              <span style={{
                fontSize: 11, fontWeight: 700, color: GREEN,
                background: "#E8F0E8", borderRadius: 6,
                padding: "3px 8px", display: "inline-block", marginRight: 6,
              }}>
                ✓ Benservis Doğrulandı
              </span>
            )}
            <span style={{
              fontSize: 11, color: "#666",
              background: "#F0EAD8", borderRadius: 6,
              padding: "3px 8px", display: "inline-block",
            }}>
              📋 {dpp.tamirler.length} tamir kaydı
            </span>
          </div>
        )}

        <div style={{ display: "flex", gap: 8 }}>
          {urun.dpp_seri_no && (
            <a
              href={`/dpp/${encodeURIComponent(urun.dpp_seri_no)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1, padding: "9px 0", borderRadius: 9,
                border: `1.5px solid ${INK}`, background: "white",
                color: INK, fontWeight: 700, fontSize: 13,
                textDecoration: "none", textAlign: "center",
              }}>
              📋 DPP
            </a>
          )}
          <a
            href={`/urun/${urun.id}`}
            style={{
              flex: 2, padding: "9px 0", borderRadius: 9,
              border: "none", background: AMBER, color: "white",
              fontWeight: 700, fontSize: 13,
              textDecoration: "none", textAlign: "center",
            }}>
            🛒 Satın Al →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ServisMagaza() {
  const servisId = window.location.pathname.split("/")[2] || "";
  const [servis, setServis] = useState(null);
  const [urunler, setUrunler] = useState([]);
  const [yukleniyor, setYukleniyor] = useState(true);
  const [hata, setHata] = useState("");

  useEffect(() => {
    if (!servisId) { setHata("Geçersiz servis adresi."); setYukleniyor(false); return; }

    // Servis bilgisi + ürünler paralel
    Promise.all([
      fetch(`/api/servis/liste`).then(r => r.ok ? r.json() : null),
      fetch(`/api/servis/urunler?servis_id=${encodeURIComponent(servisId)}`).then(r => r.ok ? r.json() : null),
    ]).then(([listeData, urunData]) => {
      if (listeData?.servisler) {
        const bulunan = listeData.servisler.find(s => s.id === servisId);
        if (bulunan) setServis(bulunan);
      }
      setUrunler(urunData?.urunler || []);
    }).catch(() => setHata("Sayfa yüklenemedi."))
      .finally(() => setYukleniyor(false));
  }, [servisId]);

  if (yukleniyor) return (
    <div style={{ minHeight: "100vh", background: CREAM, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Hanken Grotesk', sans-serif" }}>
      <style>{FONT}</style>
      <span style={{ color: "#888" }}>Yükleniyor...</span>
    </div>
  );

  if (hata) return (
    <div style={{ minHeight: "100vh", background: CREAM, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Hanken Grotesk', sans-serif" }}>
      <style>{FONT}</style>
      <span style={{ color: "#B23A2E" }}>{hata}</span>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: CREAM, fontFamily: "'Hanken Grotesk', sans-serif" }}>
      <style>{FONT}</style>

      {/* Header */}
      <div style={{ background: INK, color: CREAM, padding: "16px 18px" }}>
        <a href="/" style={{ color: CREAM, fontSize: 13, textDecoration: "none", opacity: 0.7 }}>← Benservis</a>
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 700, marginTop: 8 }}>
          {servis?.ad || "Servis Mağazası"}
        </div>
        {servis && (
          <div style={{ fontSize: 13, opacity: 0.75, marginTop: 4 }}>
            📍 {servis.ilce}, {servis.il}
            {servis.puan && <> · ⭐ {servis.puan}</>}
          </div>
        )}
      </div>

      <div style={{ maxWidth: 600, margin: "0 auto", padding: "16px 16px 40px" }}>

        {/* Servis tier / rozet */}
        {servis && (
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
            {servis.yetkili && (
              <span style={{ fontSize: 12, fontWeight: 700, color: GREEN, background: "#E8F0E8", borderRadius: 6, padding: "4px 10px" }}>
                ✓ YETKİLİ SERVİS
              </span>
            )}
            {servis.tier && (
              <span style={{
                fontSize: 12, fontWeight: 700, borderRadius: 6, padding: "4px 10px",
                color: servis.tier === "platin" ? "#6B4F01" : servis.tier === "gold" ? "#92400E" : "#5C534A",
                background: servis.tier === "platin" ? "#FEF3C7" : servis.tier === "gold" ? "#FDE68A" : "#F0EAD8",
              }}>
                {servis.tier === "platin" ? "💎 PLATİN" : servis.tier === "gold" ? "🥇 GOLD" : "🥉 BRONZ"}
              </span>
            )}
            {servis.kategoriler?.slice(0, 3).map(k => (
              <span key={k} style={{ fontSize: 12, color: "#666", background: "#F0EAD8", borderRadius: 6, padding: "4px 10px" }}>{k}</span>
            ))}
          </div>
        )}

        {/* Ürün listesi */}
        {urunler.length > 0 ? (
          <>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 600, color: INK, marginBottom: 14 }}>
              İkinci El Ürünler
              <span style={{ fontSize: 13, fontWeight: 400, color: "#888", marginLeft: 8 }}>{urunler.length} ürün</span>
            </div>
            {urunler.map(u => <UrunKarti key={u.id} urun={u} />)}
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "48px 0", color: "#9A9384" }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🏪</div>
            <div style={{ fontSize: 15, fontWeight: 600 }}>Henüz ürün yok</div>
            <div style={{ fontSize: 13, marginTop: 6 }}>Bu servis henüz ikinci el ürün eklememiş.</div>
          </div>
        )}

        {/* Servis iletişim */}
        {servis?.telefon && (
          <div style={{ marginTop: 24, padding: "16px", borderRadius: 12, border: "1px solid #E5DCC9", background: "white" }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: INK, marginBottom: 8 }}>Servis ile İletişim</div>
            <div style={{ fontSize: 13, color: "#555" }}>
              {servis.adres && <div>📍 {servis.adres}</div>}
            </div>
            <a
              href="/ariza"
              style={{ display: "block", marginTop: 12, padding: "10px 0", borderRadius: 9, border: "none", background: AMBER, color: "white", fontWeight: 700, fontSize: 14, textDecoration: "none", textAlign: "center" }}>
              Servis Çağır →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

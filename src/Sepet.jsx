// src/Sepet.jsx
// Sepet + ödeme akışı — /sepet
// Adım 1: sepet kalemleri · Adım 2: alıcı bilgileri · Adım 3: ödeme/onay
// Ödeme Benservis üzerinden geçer; iyzico entegre olana dek sipariş
// "odeme_bekleniyor" kaydedilir ve onay ekranı gösterilir.
import React, { useState, useEffect } from "react";
import { sepetOku, sepettenCikar, sepetiBosalt } from "./sepet.js";

const FONT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700&family=Hanken+Grotesk:wght@400;500;600;700&display=swap');`;
const INK = "#22302A", AMBER = "#C8632B", GREEN = "#3A7D44", LINK = "#1A4FB4", BORDER = "#E0DCD2";

export default function Sepet() {
  const [kalemler, setKalemler] = useState(sepetOku());
  const [adim, setAdim] = useState(
    new URLSearchParams(window.location.search).get("odeme") === "1" && sepetOku().length > 0 ? 2 : 1
  );
  const [form, setForm] = useState({ ad: "", tel: "", adres: "" });
  const [gonderiyor, setGonderiyor] = useState(false);
  const [hata, setHata] = useState("");
  const [sonuc, setSonuc] = useState(null); // { siparis, odeme }

  useEffect(() => {
    const f = () => setKalemler(sepetOku());
    window.addEventListener("bs-sepet-degisti", f);
    return () => window.removeEventListener("bs-sepet-degisti", f);
  }, []);

  const toplam = kalemler.reduce((s, k) => s + k.fiyat, 0);

  const siparisVer = async (e) => {
    e.preventDefault();
    setHata("");
    if (!form.ad.trim())  { setHata("Ad soyad zorunludur."); return; }
    if (!form.tel.trim() || form.tel.replace(/\D/g, "").length < 10) { setHata("Geçerli bir telefon girin."); return; }
    setGonderiyor(true);
    try {
      const res = await fetch("/api/siparis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          urun_idler: kalemler.map(k => k.id),
          alici_ad: form.ad.trim(),
          alici_tel: form.tel.trim(),
          alici_adres: form.adres.trim() || null,
        }),
      });
      const d = await res.json();
      if (!res.ok) throw new Error(d.error || "Sipariş oluşturulamadı");
      setSonuc(d);
      sepetiBosalt();
      setAdim(3);
    } catch (err) { setHata(err.message); }
    setGonderiyor(false);
  };

  const inp = { width: "100%", padding: "11px 13px", borderRadius: 8, border: `1.5px solid ${BORDER}`, fontSize: 14, fontFamily: "inherit", boxSizing: "border-box", marginBottom: 13, background: "#fff" };

  return (
    <div style={{ minHeight: "100vh", background: "#F5F3EE", fontFamily: "'Hanken Grotesk', sans-serif", color: INK }}>
      <style>{FONT}</style>

      {/* Header */}
      <header style={{ background: "#fff", borderBottom: `3px solid ${AMBER}`, position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px" }}>
          <a href="/ikinci-el" style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 20, color: INK, textDecoration: "none" }}>
            <span style={{ color: AMBER }}>◑</span> Benservis
          </a>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#6E6450" }}>🛒 Sepet & Ödeme</span>
        </div>
      </header>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "18px 16px 50px" }}>

        {/* Adım göstergesi */}
        <div style={{ display: "flex", gap: 6, marginBottom: 20, fontSize: 12, fontWeight: 700 }}>
          {["Sepet", "Bilgiler", "Ödeme"].map((t, i) => (
            <div key={t} style={{
              flex: 1, textAlign: "center", padding: "8px 0", borderRadius: 7,
              background: adim === i + 1 ? INK : adim > i + 1 ? "#DDE8DF" : "#ECE8DE",
              color: adim === i + 1 ? "#F5EFE2" : adim > i + 1 ? GREEN : "#9A9384",
            }}>
              {adim > i + 1 ? "✓ " : `${i + 1}. `}{t}
            </div>
          ))}
        </div>

        {/* ── ADIM 1: SEPET ── */}
        {adim === 1 && (
          kalemler.length === 0 ? (
            <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 8, textAlign: "center", padding: "54px 16px" }}>
              <div style={{ fontSize: 44, marginBottom: 12 }}>🛒</div>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>Sepetiniz boş</div>
              <div style={{ fontSize: 13, color: "#8A7B6A", marginBottom: 18 }}>İkinci el ürünlere göz atın, beğendiğinizi sepete ekleyin.</div>
              <a href="/ikinci-el" style={{ display: "inline-block", padding: "11px 22px", borderRadius: 8, background: AMBER, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
                Ürünlere Göz At →
              </a>
            </div>
          ) : (
            <>
              <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 8, overflow: "hidden", marginBottom: 14 }}>
                {kalemler.map(k => (
                  <div key={k.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderBottom: "1px solid #ECE8DE" }}>
                    {k.gorsel_url
                      ? <img src={k.gorsel_url} alt={k.baslik} style={{ width: 64, height: 50, objectFit: "cover", borderRadius: 5, flexShrink: 0 }} />
                      : <div style={{ width: 64, height: 50, borderRadius: 5, background: "#EDE6D6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>📦</div>}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 600, fontSize: 13.5, color: LINK }}>{k.baslik}</div>
                      {k.servis_ad && <div style={{ fontSize: 11.5, color: "#8A7B6A" }}>🏪 {k.servis_ad}</div>}
                    </div>
                    <div style={{ fontWeight: 700, fontSize: 14, whiteSpace: "nowrap" }}>{k.fiyat.toLocaleString("tr-TR")} TL</div>
                    <button onClick={() => sepettenCikar(k.id)}
                      style={{ border: "none", background: "none", color: "#B23A2E", fontSize: 15, cursor: "pointer", padding: 4 }}>✕</button>
                  </div>
                ))}
                <div style={{ display: "flex", justifyContent: "space-between", padding: "13px 16px", fontWeight: 700, fontSize: 15 }}>
                  <span>Toplam</span>
                  <span style={{ color: AMBER }}>{toplam.toLocaleString("tr-TR")} TL</span>
                </div>
              </div>
              <button onClick={() => setAdim(2)}
                style={{ width: "100%", padding: 14, borderRadius: 8, border: "none", background: AMBER, color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer", fontFamily: "inherit" }}>
                Ödemeye Geç →
              </button>
              <a href="/ikinci-el" style={{ display: "block", textAlign: "center", marginTop: 12, fontSize: 13, color: LINK }}>← Alışverişe devam et</a>
            </>
          )
        )}

        {/* ── ADIM 2: ALICI BİLGİLERİ ── */}
        {adim === 2 && (
          <form onSubmit={siparisVer}>
            <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "18px 18px 6px", marginBottom: 14 }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 700, marginBottom: 14 }}>Teslimat Bilgileri</div>
              <label style={{ fontSize: 12.5, fontWeight: 700, display: "block", marginBottom: 5 }}>Ad Soyad *</label>
              <input style={inp} value={form.ad} onChange={e => setForm(f => ({ ...f, ad: e.target.value }))} placeholder="Adınız Soyadınız" />
              <label style={{ fontSize: 12.5, fontWeight: 700, display: "block", marginBottom: 5 }}>Telefon *</label>
              <input style={inp} type="tel" value={form.tel} onChange={e => setForm(f => ({ ...f, tel: e.target.value }))} placeholder="0555 123 45 67" />
              <label style={{ fontSize: 12.5, fontWeight: 700, display: "block", marginBottom: 5 }}>Adres <span style={{ fontWeight: 400, color: "#9A9384" }}>(teslimat / randevu için)</span></label>
              <input style={inp} value={form.adres} onChange={e => setForm(f => ({ ...f, adres: e.target.value }))} placeholder="İlçe, mahalle, sokak…" />
            </div>

            <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "13px 16px", marginBottom: 14, display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: 14.5 }}>
              <span>{kalemler.length} ürün</span>
              <span style={{ color: AMBER }}>{toplam.toLocaleString("tr-TR")} TL</span>
            </div>

            {hata && <div style={{ color: "#B23A2E", fontSize: 13, fontWeight: 600, marginBottom: 12 }}>{hata}</div>}

            <button type="submit" disabled={gonderiyor}
              style={{ width: "100%", padding: 14, borderRadius: 8, border: "none", background: GREEN, color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer", fontFamily: "inherit", opacity: gonderiyor ? 0.7 : 1 }}>
              {gonderiyor ? "Sipariş oluşturuluyor…" : "🔒 Güvenli Ödemeye Geç"}
            </button>
            <div style={{ fontSize: 11.5, color: "#8A7B6A", textAlign: "center", marginTop: 9 }}>
              Ödemeniz Benservis güvencesiyle platform üzerinden alınır, ürünü teslim aldığınızda satıcıya aktarılır.
            </div>
            <button type="button" onClick={() => setAdim(1)}
              style={{ display: "block", margin: "12px auto 0", border: "none", background: "none", fontSize: 13, color: LINK, cursor: "pointer", fontFamily: "inherit" }}>
              ← Sepete dön
            </button>
          </form>
        )}

        {/* ── ADIM 3: ÖDEME / ONAY ── */}
        {adim === 3 && sonuc && (
          <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 8, textAlign: "center", padding: "44px 20px" }}>
            <div style={{ fontSize: 48, marginBottom: 14 }}>✅</div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 21, fontWeight: 700, marginBottom: 8 }}>
              Siparişiniz Alındı
            </div>
            <div style={{ display: "inline-block", background: "#F0EAD8", borderRadius: 8, padding: "8px 18px", marginBottom: 16 }}>
              <span style={{ fontSize: 11.5, color: "#8A7B6A" }}>Sipariş No</span><br />
              <strong style={{ fontSize: 17 }}>{sonuc.siparis.siparis_no}</strong>
            </div>
            <div style={{ fontSize: 14, color: "#555", lineHeight: 1.7, maxWidth: 420, margin: "0 auto 22px" }}>
              {sonuc.odeme === "yakinda" ? (
                <>Kart ile güvenli ödeme <strong>çok yakında</strong> aktif oluyor.
                Siparişiniz kaydedildi — Benservis ekibi ödeme ve teslimat için
                <strong> kısa süre içinde sizi arayacak</strong>.</>
              ) : (
                <>Ödeme sayfasına yönlendiriliyorsunuz…</>
              )}
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: AMBER, marginBottom: 22 }}>
              Toplam: {sonuc.siparis.tutar.toLocaleString("tr-TR")} TL
            </div>
            <a href="/ikinci-el" style={{ display: "inline-block", padding: "12px 26px", borderRadius: 8, background: INK, color: "#F5EFE2", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
              Alışverişe Devam Et
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

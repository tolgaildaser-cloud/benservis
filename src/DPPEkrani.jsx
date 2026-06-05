// src/DPPEkrani.jsx
import React, { useState } from "react";

// Tasarım token'ları (App.jsx ile tutarlı)
const INK = "#22302A", CREAM = "#F5EFE2", AMBER = "#C8632B", GREEN = "#3A7D44";

// ─── Arama Ekranı ────────────────────────────────────────────────────────────
function AramaEkrani({ onBulundu, onYeni, initialSeriNo }) {
  const [seriNo, setSeriNo] = useState(initialSeriNo || "");
  const [yukleniyor, setYukleniyor] = useState(false);
  const [hata, setHata] = useState("");

  const ara = async () => {
    const sn = seriNo.trim().toUpperCase();
    if (!sn) { setHata("Seri numarası girin."); return; }
    setHata("");
    setYukleniyor(true);
    try {
      const res = await fetch(`/api/dpp/cihaz?seri_no=${encodeURIComponent(sn)}`);
      if (res.status === 404) {
        onYeni(sn);
        return;
      }
      if (!res.ok) throw new Error("Sunucu hatası");
      const data = await res.json();
      onBulundu(data);
    } catch (e) {
      setHata("Bir sorun oluştu, tekrar dene.");
    } finally {
      setYukleniyor(false);
    }
  };

  return (
    <div style={s.ekran}>
      <h2 style={s.baslik}>📋 Cihaz Pasaportu</h2>
      <p style={s.aciklama}>Seri numarasını gir — mevcut pasaportu getir veya yeni oluştur.</p>
      <input
        style={s.input}
        aria-label="Seri numarası"
        value={seriNo}
        onChange={(e) => setSeriNo(e.target.value.toUpperCase())}
        onKeyDown={(e) => e.key === "Enter" && ara()}
        placeholder="örn. SN1234567890"
        autoFocus
      />
      {hata && <p style={s.hata}>{hata}</p>}
      <button style={s.cta} onClick={ara} disabled={yukleniyor}>
        {yukleniyor ? "Aranıyor…" : "Pasaportu Getir →"}
      </button>
    </div>
  );
}

// ─── Placeholder ekranlar (sonraki tasklarda doldurulacak) ────────────────────
function YeniCihazForm({ seriNo, teshisContext, onOlusturuldu }) {
  return <div style={s.ekran}><p style={s.aciklama}>Yeni Cihaz Formu — Task 6'da gelecek</p></div>;
}

function PasaportGorunum({ pasaport, onTamirEkle, onYenile }) {
  return <div style={s.ekran}><p style={s.aciklama}>Pasaport Görünümü — Task 7'de gelecek</p></div>;
}

function TamirEkleForm({ cihazId, onEklendi, onIptal }) {
  return <div style={s.ekran}><p style={s.aciklama}>Tamir Ekle Formu — Task 8'de gelecek</p></div>;
}

// ─── Ana Bileşen ──────────────────────────────────────────────────────────────
export default function DPPEkrani({ initialSeriNo, teshisContext, onKapat }) {
  // ekran: "arama" | "yeni_cihaz" | "pasaport" | "tamir_ekle"
  const [ekran, setEkran] = useState("arama");
  const [bekleyenSeriNo, setBekleyenSeriNo] = useState("");
  const [pasaport, setPasaport] = useState(null); // { cihaz, tamirler, toplam_maliyet }

  const handleBulundu = (data) => { setPasaport(data); setEkran("pasaport"); };
  const handleYeni = (sn) => { setBekleyenSeriNo(sn); setEkran("yeni_cihaz"); };
  const handleOlusturuldu = (data) => { setPasaport(data); setEkran("pasaport"); };
  const handleTamirEklendi = async () => {
    if (!pasaport?.cihaz) { setEkran("pasaport"); return; }
    try {
      const res = await fetch(`/api/dpp/cihaz?seri_no=${encodeURIComponent(pasaport.cihaz.seri_no)}`);
      if (res.ok) setPasaport(await res.json());
    } catch {
      // Yenileme başarısız — eski pasaport göster, veri kaybolmaz
    } finally {
      setEkran("pasaport");
    }
  };

  return (
    <div style={s.overlay} onKeyDown={(e) => e.key === "Escape" && onKapat()} tabIndex={-1}>
      <div style={s.panel}>
        {/* Sticky header */}
        <div style={s.header}>
          <span style={s.headerTitle}>DPP Pasaport</span>
          <button style={s.kapat} onClick={onKapat}>✕</button>
        </div>
        <div style={s.icerik}>
          {ekran === "arama" && (
            <AramaEkrani
              onBulundu={handleBulundu}
              onYeni={handleYeni}
              initialSeriNo={initialSeriNo}
            />
          )}
          {ekran === "yeni_cihaz" && (
            <YeniCihazForm
              seriNo={bekleyenSeriNo}
              teshisContext={teshisContext}
              onOlusturuldu={handleOlusturuldu}
            />
          )}
          {ekran === "pasaport" && pasaport && (
            <PasaportGorunum
              pasaport={pasaport}
              onTamirEkle={() => setEkran("tamir_ekle")}
              onYenile={() => {}} // TODO Task 7: wire up to passport refresh
            />
          )}
          {ekran === "tamir_ekle" && pasaport && (
            <TamirEkleForm
              cihazId={pasaport.cihaz.id}
              onEklendi={handleTamirEklendi}
              onIptal={() => setEkran("pasaport")}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Stiller ──────────────────────────────────────────────────────────────────
const s = {
  overlay: {
    position: "fixed", inset: 0, background: "rgba(34,48,42,.55)",
    zIndex: 100, display: "flex", alignItems: "flex-end",
    justifyContent: "center",
  },
  panel: {
    width: "100%", maxWidth: 640, maxHeight: "92vh",
    background: CREAM, borderRadius: "20px 20px 0 0",
    display: "flex", flexDirection: "column", overflow: "hidden",
  },
  header: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "16px 20px", borderBottom: "1px solid #E5DCC9",
    background: "#FFFDF8", flexShrink: 0,
  },
  headerTitle: { fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 600, color: INK },
  kapat: {
    background: "none", border: "none", fontSize: 18, color: "#9A9384",
    padding: "4px 8px", borderRadius: 6, cursor: "pointer",
  },
  icerik: { overflowY: "auto", flex: 1, padding: "20px" },
  ekran: {},
  baslik: { fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 700, margin: "0 0 8px", color: INK },
  aciklama: { fontSize: 14, color: "#5C6660", margin: "0 0 18px", lineHeight: 1.5 },
  input: {
    width: "100%", padding: "12px 14px", borderRadius: 11,
    border: "1.5px solid #DDD3BE", background: "#FFFDF8",
    fontSize: 15, fontFamily: "'Hanken Grotesk', sans-serif", color: INK,
    letterSpacing: "0.05em", boxSizing: "border-box",
  },
  hata: { color: "#B23A2E", fontSize: 13, margin: "8px 0 0" },
  cta: {
    marginTop: 14, width: "100%", padding: "13px", borderRadius: 12,
    border: "none", background: AMBER, color: "#fff",
    fontSize: 15, fontWeight: 700, fontFamily: "'Hanken Grotesk', sans-serif",
    cursor: "pointer",
  },
};

// src/DPPEkrani.jsx
import React, { useState } from "react";
import { CIHAZLAR } from "./constants.js";

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

// ─── Yeni Cihaz Formu ────────────────────────────────────────────────────────
function YeniCihazForm({ seriNo, teshisContext, onOlusturuldu }) {
  const [form, setForm] = useState({
    kategori: teshisContext?.cihaz || "",
    marka: teshisContext?.marka || "",
    model: "",
    renk: "",
    uretim_yili: "",
    satin_alma_tarihi: "",
    garanti_bitis_tarihi: "",
  });
  const [yukleniyor, setYukleniyor] = useState(false);
  const [hata, setHata] = useState("");

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const olustur = async () => {
    setHata("");
    setYukleniyor(true);
    try {
      const body = {
        seri_no: seriNo,
        kategori: form.kategori || null,
        marka: form.marka || null,
        model: form.model || null,
        renk: form.renk || null,
        uretim_yili: form.uretim_yili ? parseInt(form.uretim_yili, 10) : null,
        satin_alma_tarihi: form.satin_alma_tarihi || null,
        garanti_bitis_tarihi: form.garanti_bitis_tarihi || null,
      };
      const res = await fetch("/api/dpp/cihaz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Sunucu hatası");
      const data = await res.json();
      onOlusturuldu(data);
    } catch {
      setHata("Pasaport oluşturulamadı, tekrar dene.");
    } finally {
      setYukleniyor(false);
    }
  };

  return (
    <div style={s.ekran}>
      <h2 style={s.baslik}>Yeni Cihaz</h2>
      <p style={{ ...s.aciklama, marginBottom: 4 }}>
        Seri no: <strong style={{ color: INK, letterSpacing: "0.05em" }}>{seriNo}</strong>
      </p>
      <p style={{ ...s.aciklama, fontSize: 13, color: "#9A9384" }}>
        Kayıtlı pasaport bulunamadı. Cihaz bilgilerini gir.
      </p>

      <label style={s.label}>Cihaz türü</label>
      <div style={s.chipWrap}>
        {CIHAZLAR.map((c) => (
          <button
            key={c}
            onClick={() => set("kategori", c)}
            style={{ ...s.chip, ...(form.kategori === c ? s.chipActive : {}) }}
          >
            {c}
          </button>
        ))}
      </div>

      <div style={s.row}>
        <div style={{ flex: 1 }}>
          <label style={s.label}>Marka</label>
          <input style={s.input} value={form.marka} onChange={(e) => set("marka", e.target.value)} placeholder="Daikin" />
        </div>
        <div style={{ flex: 1 }}>
          <label style={s.label}>Model</label>
          <input style={s.input} value={form.model} onChange={(e) => set("model", e.target.value)} placeholder="FTXB35C" />
        </div>
      </div>

      <div style={s.row}>
        <div style={{ flex: 1 }}>
          <label style={s.label}>Renk <span style={s.opt}>(opsiyonel)</span></label>
          <input style={s.input} value={form.renk} onChange={(e) => set("renk", e.target.value)} placeholder="Beyaz" />
        </div>
        <div style={{ width: 110 }}>
          <label style={s.label}>Üretim yılı</label>
          <input style={s.input} type="number" min="1980" max="2030" value={form.uretim_yili} onChange={(e) => set("uretim_yili", e.target.value)} placeholder="2021" />
        </div>
      </div>

      <div style={s.row}>
        <div style={{ flex: 1 }}>
          <label style={s.label}>Satın alma tarihi <span style={s.opt}>(opsiyonel)</span></label>
          <input style={s.input} type="date" value={form.satin_alma_tarihi} onChange={(e) => set("satin_alma_tarihi", e.target.value)} />
        </div>
        <div style={{ flex: 1 }}>
          <label style={s.label}>Garanti bitişi <span style={s.opt}>(opsiyonel)</span></label>
          <input style={s.input} type="date" value={form.garanti_bitis_tarihi} onChange={(e) => set("garanti_bitis_tarihi", e.target.value)} />
        </div>
      </div>

      {hata && <p style={s.hata}>{hata}</p>}
      <button style={{ ...s.cta, marginTop: 18 }} onClick={olustur} disabled={yukleniyor}>
        {yukleniyor ? "Oluşturuluyor…" : "Pasaport Oluştur →"}
      </button>
    </div>
  );
}

// ─── Placeholder ekranlar (sonraki tasklarda doldurulacak) ────────────────────

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
  label: { display: "block", fontSize: 13.5, fontWeight: 700, margin: "14px 0 7px", color: INK },
  opt: { fontWeight: 500, color: "#9A9384", fontSize: 12 },
  chipWrap: { display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 4 },
  chip: { fontSize: 12.5, padding: "7px 12px", borderRadius: 999, border: "1.5px solid #DDD3BE", background: "#FFFDF8", color: "#5C6660", fontWeight: 600, cursor: "pointer", fontFamily: "'Hanken Grotesk', sans-serif" },
  chipActive: { background: INK, color: CREAM, borderColor: INK },
  row: { display: "flex", gap: 12 },
};

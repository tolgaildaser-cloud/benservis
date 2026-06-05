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
    if (!form.kategori) { setHata("Cihaz türü seçin."); return; }
    if (!form.marka.trim()) { setHata("Marka gerekli."); return; }
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
            type="button"
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
  const { cihaz, tamirler, toplam_maliyet } = pasaport;

  const garantiDurumu = () => {
    if (!cihaz.garanti_bitis_tarihi) return null;
    const bitis = new Date(cihaz.garanti_bitis_tarihi);
    const bugun = new Date();
    const fark = Math.ceil((bitis - bugun) / (1000 * 60 * 60 * 24));
    if (fark > 0) return { label: `Garanti: ${fark} gün kaldı`, renk: GREEN };
    return { label: "Garanti süresi dolmuş", renk: "#B23A2E" };
  };

  const garanti = garantiDurumu();

  return (
    <div style={s.ekran}>
      {/* Cihaz başlığı kartı */}
      <div style={s.pasaportKart}>
        <div style={s.pasaportBaslik}>
          {cihaz.marka && cihaz.model
            ? `${cihaz.marka} ${cihaz.model}`
            : cihaz.marka || cihaz.kategori || "Cihaz"}
        </div>
        <div style={s.pasaportAlt}>
          {cihaz.kategori && <span style={s.rozet}>{cihaz.kategori}</span>}
          {cihaz.uretim_yili && <span style={s.metaBilgi}>{cihaz.uretim_yili}</span>}
          {garanti && (
            <span style={{ ...s.metaBilgi, color: garanti.renk, fontWeight: 700 }}>
              {garanti.label}
            </span>
          )}
        </div>
        <div style={s.seriNo}>SN: {cihaz.seri_no}</div>
        {toplam_maliyet > 0 && (
          <div style={s.toplamMaliyet}>
            Toplam tamir maliyeti:{" "}
            <strong>{toplam_maliyet.toLocaleString("tr-TR")} TL</strong>
          </div>
        )}
        {/* Cihaz fotoğrafları */}
        {cihaz.fotograflar?.length > 0 && (
          <div style={s.fotoGaleri}>
            {cihaz.fotograflar.map((url, i) => (
              <img key={url} src={url} alt={`Cihaz ${i + 1}`} style={s.fotoKucuk} />
            ))}
          </div>
        )}
      </div>

      {/* Tamir zaman çizelgesi */}
      <div style={s.secBaslik}>
        Tamir Geçmişi
        <span style={s.tamirSayisi}>{tamirler.length} kayıt</span>
      </div>

      {tamirler.length === 0 ? (
        <p style={s.bosMetin}>Henüz tamir kaydı yok.</p>
      ) : (
        tamirler.map((t) => (
          <div key={t.id} style={s.tamirKart}>
            <div style={s.tamirUst}>
              <span style={s.tamirTarih}>
                {new Date(t.tarih + "T12:00:00").toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}
              </span>
              {t.servis_turu === "benservis" && (
                <span style={s.dogrulanmisRozet}>✓ Doğrulanmış</span>
              )}
              {t.servis_turu === "harici" && <span style={s.hariciRozet}>Harici Servis</span>}
              {t.servis_turu === "sahip" && <span style={s.sahipRozet}>Kendim Yaptım</span>}
              {t.servis_turu === "yetkili" && <span style={s.hariciRozet}>Yetkili Servis</span>}
            </div>
            <div style={s.tamirIslem}>{t.yapilan_islem}</div>
            {t.servis_adi && <div style={s.tamirServis}>{t.servis_adi}</div>}
            {t.degistirilen_parcalar?.length > 0 && (
              <div style={s.parcalar}>
                {t.degistirilen_parcalar.map((p, i) => (
                  <span key={i} style={s.parcaChip}>{p}</span>
                ))}
              </div>
            )}
            {t.maliyet != null && (
              <div style={s.tamirMaliyet}>{t.maliyet.toLocaleString("tr-TR")} TL</div>
            )}
            {t.fotograflar?.length > 0 && (
              <div style={s.fotoGaleri}>
                {t.fotograflar.map((url, i) => (
                  <img key={url} src={url} alt={`Tamir ${i + 1}`} style={s.fotoKucuk} />
                ))}
              </div>
            )}
          </div>
        ))
      )}

      <button style={{ ...s.cta, marginTop: 16 }} onClick={onTamirEkle}>
        + Tamir Kaydı Ekle
      </button>
    </div>
  );
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
              onYenile={handleTamirEklendi}
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
  pasaportKart: {
    background: "#FFFDF8", border: "1px solid #E5DCC9", borderRadius: 14,
    padding: "16px 18px", marginBottom: 18,
  },
  pasaportBaslik: { fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 700, color: INK },
  pasaportAlt: { display: "flex", gap: 8, flexWrap: "wrap", marginTop: 6, alignItems: "center" },
  rozet: { fontSize: 12, fontWeight: 700, background: INK, color: CREAM, padding: "3px 9px", borderRadius: 999 },
  metaBilgi: { fontSize: 12.5, color: "#5C6660" },
  seriNo: { fontSize: 12, color: "#9A9384", marginTop: 8, letterSpacing: "0.05em" },
  toplamMaliyet: { fontSize: 13, color: "#5C6660", marginTop: 6 },
  fotoGaleri: { display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 },
  fotoKucuk: { width: 64, height: 64, objectFit: "cover", borderRadius: 8, border: "1px solid #E5DCC9" },
  secBaslik: {
    fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 600,
    color: INK, marginBottom: 12, display: "flex", justifyContent: "space-between", alignItems: "center",
  },
  tamirSayisi: { fontSize: 12, color: "#9A9384", fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 400 },
  bosMetin: { fontSize: 14, color: "#9A9384", textAlign: "center", padding: "24px 0" },
  tamirKart: {
    background: "#FFFDF8", border: "1px solid #E5DCC9", borderRadius: 12,
    padding: "12px 14px", marginBottom: 10,
  },
  tamirUst: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 },
  tamirTarih: { fontSize: 12.5, color: "#9A9384" },
  dogrulanmisRozet: { fontSize: 11, fontWeight: 700, color: GREEN, background: "rgba(58,125,68,.1)", padding: "2px 8px", borderRadius: 999 },
  hariciRozet: { fontSize: 11, color: "#5C6660", background: "#F0EAD8", padding: "2px 8px", borderRadius: 999 },
  sahipRozet: { fontSize: 11, color: AMBER, background: "rgba(200,99,43,.1)", padding: "2px 8px", borderRadius: 999 },
  tamirIslem: { fontSize: 14.5, fontWeight: 700, color: INK },
  tamirServis: { fontSize: 12.5, color: "#5C6660", marginTop: 2 },
  parcalar: { display: "flex", gap: 6, flexWrap: "wrap", marginTop: 6 },
  parcaChip: { fontSize: 11.5, background: "#F0EAD8", color: "#6E6450", padding: "3px 8px", borderRadius: 6 },
  tamirMaliyet: { fontSize: 13, fontWeight: 700, color: AMBER, marginTop: 6 },
};

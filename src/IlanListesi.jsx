// src/IlanListesi.jsx
// İkinci el ilan listesi — /ikinci-el
import React, { useState, useEffect } from "react";
import BenservisRozet from "./BenservisRozet.jsx";
import { CIHAZLAR } from "./constants.js";

const FONT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700&family=Hanken+Grotesk:wght@400;600;700&display=swap');`;
const INK = "#22302A", CREAM = "#F5EFE2", AMBER = "#C8632B", GREEN = "#3A7D44";

const DURUM_CFG = {
  "çalışıyor": { bg: "#E8F0E8", color: GREEN,    label: "✓ Çalışıyor" },
  "arızalı":   { bg: "#FEF3E2", color: AMBER,    label: "⚠ Arızalı" },
  "hurda":     { bg: "#FDECEA", color: "#B23A2E", label: "✕ Hurda" },
};

function IlanKarti({ ilan, onClick }) {
  const dpp = ilan.dpp;
  const cihazAd = dpp
    ? [dpp.marka, dpp.model || dpp.kategori].filter(Boolean).join(" ")
    : null;
  const durum = dpp?.mevcut_durum;
  const dc = durum ? (DURUM_CFG[durum] || DURUM_CFG["çalışıyor"]) : null;

  return (
    <div style={s.kart} onClick={onClick}>
      {ilan.fotograflar?.[0]
        ? <img src={ilan.fotograflar[0]} alt={ilan.baslik} style={s.kartFoto} />
        : <div style={s.kartFotoPlaceholder}>📦</div>
      }
      <div style={s.kartIcerik}>
        <div style={s.kartBaslik}>{ilan.baslik}</div>
        {cihazAd && <div style={s.kartCihaz}>{cihazAd}</div>}
        <div style={s.kartChipler}>
          {ilan.konum && <span style={s.konumChip}>📍 {ilan.konum}</span>}
          {dc && <span style={{ ...s.durumChip, background: dc.bg, color: dc.color }}>{dc.label}</span>}
          {dpp?.benservis_dogrulanmis && (
            <span style={s.dogrulanmisChip}>✓ Doğrulanmış</span>
          )}
        </div>
        <div style={s.kartFiyat}>{ilan.fiyat.toLocaleString("tr-TR")} TL</div>
      </div>
      {dpp?.benservis_dogrulanmis && (
        <div style={s.rozetKose}>
          <BenservisRozet size="sm" />
        </div>
      )}
    </div>
  );
}

export default function IlanListesi() {
  const [ilanlar, setIlanlar] = useState([]);
  const [toplam, setToplam]   = useState(0);
  const [yukleniyor, setYukleniyor] = useState(true);
  const [sadeceDogru, setSadeceDogru] = useState(false);
  const [kategori, setKategori] = useState("");

  useEffect(() => {
    setYukleniyor(true);
    const params = new URLSearchParams({ durum: "aktif", limit: "50" });
    if (kategori) params.set("kategori", kategori);
    fetch(`/api/ilan/liste?${params}`)
      .then(r => r.json())
      .then(d => { setIlanlar(d.ilanlar || []); setToplam(d.toplam || 0); })
      .catch(() => {})
      .finally(() => setYukleniyor(false));
  }, [kategori]);

  const filtreli = sadeceDogru
    ? ilanlar.filter(i => i.dpp?.benservis_dogrulanmis)
    : ilanlar;

  const goster = (id) => { window.location.href = `/ikinci-el/${id}`; };

  return (
    <div style={s.wrap}>
      <style>{FONT}</style>
      <div style={s.grain} />

      <header style={s.header}>
        <div style={s.logoRow}>
          <span style={s.logoMark}>◑</span>
          <h1 style={s.logo}>Benservis</h1>
        </div>
        <div style={s.altBaslik}>İkinci El Pazaryeri</div>
        <p style={s.aciklama}>DPP pasaportuyla şeffaf cihaz alışverişi</p>
      </header>

      <div style={s.toolbar}>
        <div style={s.toolbarSol}>
          <select
            value={kategori}
            onChange={e => setKategori(e.target.value)}
            style={s.kategoriSelect}>
            <option value="">Tüm Cihazlar</option>
            {CIHAZLAR.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <button
            style={{ ...s.filtrBtn, ...(sadeceDogru ? s.filtrAktif : {}) }}
            onClick={() => setSadeceDogru(!sadeceDogru)}>
            ✓ Doğrulanmış {sadeceDogru && `(${filtreli.length})`}
          </button>
        </div>
        <a href="/ikinci-el/yeni" style={s.ilanVerBtn}>+ İlan Ver</a>
      </div>

      {yukleniyor && (
        <div style={s.merkez}>
          <div style={s.spinner} />
          <p style={s.yuklMetin}>İlanlar yükleniyor…</p>
        </div>
      )}

      {!yukleniyor && filtreli.length === 0 && (
        <div style={s.bos}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>📦</div>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
            {sadeceDogru ? "Doğrulanmış ilan yok" : kategori ? `${kategori} ilanı yok` : "Henüz ilan yok"}
          </div>
          <p style={{ fontSize: 13, color: "#5C6660" }}>
            {sadeceDogru || kategori ? "Filtreleri kaldır veya daha sonra tekrar kontrol et." : "İlk ilanlayan sen ol!"}
          </p>
          <a href="/ikinci-el/yeni" style={s.ilkIlanBtn}>+ İlan Ver →</a>
        </div>
      )}

      {!yukleniyor && filtreli.length > 0 && (
        <>
          <div style={s.sonucSayisi}>{filtreli.length} ilan{toplam > filtreli.length ? ` (${toplam} toplam)` : ""}</div>
          <div style={s.grid}>
            {filtreli.map(ilan => (
              <IlanKarti key={ilan.id} ilan={ilan} onClick={() => goster(ilan.id)} />
            ))}
          </div>
        </>
      )}

      <a href="/" style={s.anaBtnAlt}>◑ Benservis — Arıza Teşhisi →</a>

      <footer style={s.footer}>Benservis İkinci El · benservis.com</footer>
    </div>
  );
}

const s = {
  wrap: { position: "relative", minHeight: "100vh", background: CREAM, fontFamily: "'Hanken Grotesk', sans-serif", color: INK, padding: "28px 18px 48px", maxWidth: 680, margin: "0 auto" },
  grain: { position: "fixed", inset: 0, pointerEvents: "none", opacity: 0.4, backgroundImage: "radial-gradient(rgba(34,48,42,.05) 1px, transparent 1px)", backgroundSize: "4px 4px", zIndex: 0 },
  header: { position: "relative", zIndex: 1, textAlign: "center", marginBottom: 20 },
  logoRow: { display: "flex", alignItems: "center", justifyContent: "center", gap: 10 },
  logoMark: { color: AMBER, fontSize: 28, transform: "rotate(-20deg)", display: "inline-block" },
  logo: { fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 30, margin: 0, letterSpacing: "-.02em" },
  altBaslik: { fontSize: 12, fontWeight: 700, letterSpacing: ".06em", color: "#8A7B6A", textTransform: "uppercase", marginTop: 4 },
  aciklama: { fontSize: 13, color: "#5C6660", marginTop: 6 },
  toolbar: { position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, marginBottom: 16, flexWrap: "wrap" },
  toolbarSol: { display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" },
  kategoriSelect: { fontSize: 12, fontWeight: 600, padding: "7px 10px", borderRadius: 8, border: "1.5px solid #DDD3BE", background: "#FFFDF8", color: INK, cursor: "pointer", fontFamily: "'Hanken Grotesk', sans-serif", appearance: "none", paddingRight: 24, backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%238A7B6A'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 8px center" },
  filtrBtn: { fontSize: 12, fontWeight: 700, padding: "7px 12px", borderRadius: 8, border: "1.5px solid #DDD3BE", background: "#FFFDF8", color: "#6E6450", cursor: "pointer", fontFamily: "'Hanken Grotesk', sans-serif" },
  filtrAktif: { border: `1.5px solid ${AMBER}`, background: "rgba(200,99,43,.08)", color: AMBER },
  ilanVerBtn: { fontSize: 13, fontWeight: 700, padding: "8px 16px", borderRadius: 10, background: AMBER, color: "#fff", textDecoration: "none" },
  merkez: { position: "relative", zIndex: 1, textAlign: "center", paddingTop: 60 },
  spinner: { width: 36, height: 36, borderRadius: "50%", border: "4px solid #E5DCC9", borderTopColor: AMBER, margin: "0 auto 16px", animation: "spin 1s linear infinite" },
  yuklMetin: { fontFamily: "'Fraunces', serif", fontSize: 16, color: "#5C6660" },
  bos: { position: "relative", zIndex: 1, textAlign: "center", padding: "48px 0" },
  ilkIlanBtn: { display: "inline-block", marginTop: 16, padding: "11px 22px", borderRadius: 10, background: AMBER, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none" },
  sonucSayisi: { position: "relative", zIndex: 1, fontSize: 12, color: "#9A9384", marginBottom: 12 },
  grid: { position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 10 },
  kart: { background: "#FFFDF8", border: "1px solid #E5DCC9", borderRadius: 14, overflow: "hidden", display: "flex", gap: 0, cursor: "pointer", transition: "box-shadow .15s", position: "relative" },
  kartFoto: { width: 110, height: 110, objectFit: "cover", flexShrink: 0 },
  kartFotoPlaceholder: { width: 110, height: 110, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, background: "#F0EAD8", flexShrink: 0 },
  kartIcerik: { padding: "12px 14px", flex: 1, minWidth: 0 },
  kartBaslik: { fontFamily: "'Fraunces', serif", fontSize: 15, fontWeight: 700, marginBottom: 3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  kartCihaz: { fontSize: 12, color: "#8A7B6A", marginBottom: 6 },
  kartChipler: { display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 8 },
  konumChip: { fontSize: 11, background: "#EDE5D3", color: "#6E6450", borderRadius: 999, padding: "2px 8px", fontWeight: 700 },
  durumChip: { fontSize: 11, borderRadius: 999, padding: "2px 8px", fontWeight: 700 },
  dogrulanmisChip: { fontSize: 11, background: AMBER, color: "#fff", borderRadius: 999, padding: "2px 8px", fontWeight: 700 },
  kartFiyat: { fontSize: 18, fontWeight: 700, color: AMBER, fontFamily: "'Fraunces', serif" },
  rozetKose: { position: "absolute", top: 6, right: 6 },
  anaBtnAlt: { position: "relative", zIndex: 1, display: "block", textAlign: "center", padding: 13, borderRadius: 13, background: INK, color: CREAM, fontWeight: 700, fontSize: 14, textDecoration: "none", marginTop: 20 },
  footer: { position: "relative", zIndex: 1, textAlign: "center", fontSize: 11.5, color: "#A59E8E", marginTop: 20 },
};

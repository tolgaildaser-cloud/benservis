// src/IlanListesi.jsx
// İkinci el ilan listesi — /ikinci-el
import React, { useState, useEffect } from "react";
import BenservisRozet from "./BenservisRozet.jsx";
import { CIHAZLAR } from "./constants.js";

const FONT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700&family=Hanken+Grotesk:wght@400;600;700&display=swap');`;
const INK = "#22302A", CREAM = "#F5EFE2", AMBER = "#C8632B", GREEN = "#3A7D44";

const CIHAZ_EMOJI = {
  "Buzdolabı": "🧊", "Çamaşır Makinesi": "🫧", "Bulaşık Makinesi": "🍽️",
  "Fırın / Ocak": "🔥", "Klima": "❄️", "Kombi": "♨️", "Televizyon": "📺",
  "Termosifon / Şofben": "🚿", "Mikrodalga": "📡", "Elektrik Süpürgesi": "🌀",
  "Su Sebili / Arıtma": "💧", "Cep Telefonu": "📱", "Robot Süpürge": "🤖",
  "Air Fryer": "✨", "Masaüstü Bilgisayar": "🖥️", "Notebook": "💻",
  "Yazıcı": "🖨️", "Diğer": "📦",
};

const KISA_AD = {
  "Çamaşır Makinesi": "Çamaşır",
  "Bulaşık Makinesi": "Bulaşık",
  "Fırın / Ocak": "Fırın",
  "Termosifon / Şofben": "Şofben",
  "Elektrik Süpürgesi": "Süpürge",
  "Su Sebili / Arıtma": "Arıtma",
  "Robot Süpürge": "Robot",
  "Masaüstü Bilgisayar": "Masaüstü",
  "Cep Telefonu": "Telefon",
};

const DURUM_CFG = {
  "çalışıyor": { bg: "#E6F4EC", color: "#2A7040", label: "Çalışıyor" },
  "arızalı":   { bg: "#FEF3E2", color: "#A85B0E", label: "Arızalı"   },
  "hurda":     { bg: "#FDECEA", color: "#B23A2E", label: "Hurda"     },
};

const SIRALAMA = [
  { value: "yeni",       label: "En Yeni"       },
  { value: "fiyat_asc",  label: "Önce Ucuz"     },
  { value: "fiyat_desc", label: "Önce Pahalı"   },
];

function zaman(t) {
  const d = Math.floor((Date.now() - new Date(t)) / 1000);
  if (d < 3600)  return `${Math.floor(d / 60)} dk`;
  if (d < 86400) return `${Math.floor(d / 3600)} sa`;
  const g = Math.floor(d / 86400);
  if (g < 30) return `${g} gün`;
  return new Date(t).toLocaleDateString("tr-TR", { day: "numeric", month: "short" });
}

function IlanKarti({ ilan, onClick }) {
  const dpp     = ilan.dpp;
  const cihazAd = dpp
    ? [dpp.marka, dpp.model || dpp.kategori].filter(Boolean).join(" ")
    : (ilan.kategori || null);
  const dc = dpp?.mevcut_durum ? (DURUM_CFG[dpp.mevcut_durum] || null) : null;

  return (
    <div className="ilan-kart" style={s.kart} onClick={onClick} role="button" tabIndex={0}>
      {/* FOTO */}
      <div style={s.fotoKap}>
        {ilan.fotograflar?.[0]
          ? <img src={ilan.fotograflar[0]} alt={ilan.baslik} style={s.foto} loading="lazy" />
          : <div style={s.fotoPlaceholder}>
              <span style={{ fontSize: 34, lineHeight: 1 }}>{CIHAZ_EMOJI[ilan.kategori] || "📦"}</span>
            </div>
        }
        {dpp?.benservis_dogrulanmis && (
          <div style={s.rozetOverlay}><BenservisRozet size="sm" /></div>
        )}
      </div>

      {/* DETAY */}
      <div style={s.kartBody}>
        <div style={s.kartBaslik}>{ilan.baslik}</div>
        {cihazAd && <div style={s.kartCihaz}>{cihazAd}</div>}

        <div style={s.chipler}>
          {dc && (
            <span style={{ ...s.chip, background: dc.bg, color: dc.color }}>{dc.label}</span>
          )}
          {dpp?.benservis_dogrulanmis && (
            <span style={{ ...s.chip, background: "rgba(200,99,43,.10)", color: AMBER, fontWeight: 700 }}>
              ✓ Doğrulanmış
            </span>
          )}
        </div>

        <div style={s.kartAlt}>
          <div style={{ minWidth: 0 }}>
            {ilan.konum && (
              <div style={s.konumSatir}>📍 {ilan.konum}</div>
            )}
            <div style={s.zamanSatir}>{zaman(ilan.created_at)}</div>
          </div>
          <div style={s.fiyat}>{ilan.fiyat.toLocaleString("tr-TR")} TL</div>
        </div>
      </div>
    </div>
  );
}

export default function IlanListesi() {
  const [ilanlar, setIlanlar]           = useState([]);
  const [yukleniyor, setYukleniyor]     = useState(true);
  const [kategori, setKategori]         = useState("");
  const [sadeceDogru, setSadeceDogru]   = useState(false);
  const [siralama, setSiralama]         = useState("yeni");
  const [aramaMetni, setAramaMetni]     = useState("");

  useEffect(() => {
    setYukleniyor(true);
    const p = new URLSearchParams({ durum: "aktif", limit: "50" });
    if (kategori) p.set("kategori", kategori);
    fetch(`/api/ilan/liste?${p}`)
      .then(r => r.json())
      .then(d => setIlanlar(d.ilanlar || []))
      .catch(() => {})
      .finally(() => setYukleniyor(false));
  }, [kategori]);

  // Client-side filter + sort
  let filtreli = [...ilanlar];
  if (aramaMetni.trim()) {
    const q = aramaMetni.trim().toLowerCase();
    filtreli = filtreli.filter(i =>
      i.baslik.toLowerCase().includes(q) ||
      (i.dpp?.marka  || "").toLowerCase().includes(q) ||
      (i.dpp?.model  || "").toLowerCase().includes(q) ||
      (i.kategori    || "").toLowerCase().includes(q)
    );
  }
  if (sadeceDogru)          filtreli = filtreli.filter(i => i.dpp?.benservis_dogrulanmis);
  if (siralama === "fiyat_asc")  filtreli.sort((a, b) => a.fiyat - b.fiyat);
  if (siralama === "fiyat_desc") filtreli.sort((a, b) => b.fiyat - a.fiyat);

  const goster = id => { window.location.href = `/ikinci-el/${id}`; };

  return (
    <div style={s.wrap}>
      <style>{FONT}</style>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .ilan-kart { transition: box-shadow .15s, transform .15s; }
        .ilan-kart:hover { box-shadow: 0 6px 24px rgba(34,48,42,.11); transform: translateY(-2px); }
        .ilan-kart:active { transform: translateY(0); }
        .kat-strip::-webkit-scrollbar { display: none; }
        .arama-wrap:focus-within { border-color: ${AMBER} !important; box-shadow: 0 0 0 3px rgba(200,99,43,.12); }
        .arama-input { border: none; outline: none; background: transparent; font-family: 'Hanken Grotesk', sans-serif; font-size: 14px; color: ${INK}; padding: 13px 0; flex: 1; min-width: 0; }
        .sira-select { appearance: none; -webkit-appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%238A7B6A'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 8px center; padding-right: 26px !important; }
      `}</style>

      {/* ── STICKY HEADER ── */}
      <header style={s.header}>
        <div style={s.headerRow}>
          <a href="/" style={s.logoA}>
            <span style={s.logoMark}>◑</span>
            <span style={s.logoText}>Benservis</span>
          </a>
          <a href="/ikinci-el/yeni" style={s.ilanVerBtn}>+ İlan Ver</a>
        </div>
        <div style={s.altBaslik}>İkinci El · DPP Pasaportlu Güvenli Alışveriş</div>
      </header>

      <div style={s.icerik}>
        {/* ── SEARCH ── */}
        <div className="arama-wrap" style={s.aramaWrap}>
          <span style={s.aramaIcon}>🔍</span>
          <input
            className="arama-input"
            type="text"
            placeholder="Cihaz, marka veya model ara…"
            value={aramaMetni}
            onChange={e => setAramaMetni(e.target.value)}
          />
          {aramaMetni && (
            <button onClick={() => setAramaMetni("")} style={s.aramaSil}>✕</button>
          )}
        </div>

        {/* ── CATEGORY CHIP STRIP ── */}
        <div className="kat-strip" style={s.katStrip}>
          <button
            style={{ ...s.katChip, ...(kategori === "" ? s.katAktif : {}) }}
            onClick={() => setKategori("")}>
            🛒 Tümü
          </button>
          {CIHAZLAR.map(c => (
            <button
              key={c}
              style={{ ...s.katChip, ...(kategori === c ? s.katAktif : {}) }}
              onClick={() => setKategori(kategori === c ? "" : c)}>
              {CIHAZ_EMOJI[c] || "📦"} {KISA_AD[c] || c}
            </button>
          ))}
        </div>

        {/* ── FILTER BAR ── */}
        <div style={s.filtrBar}>
          <div style={s.filtrSol}>
            <select
              className="sira-select"
              value={siralama}
              onChange={e => setSiralama(e.target.value)}
              style={s.siraSelect}>
              {SIRALAMA.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
            <button
              style={{ ...s.dogruBtn, ...(sadeceDogru ? s.dogruAktif : {}) }}
              onClick={() => setSadeceDogru(!sadeceDogru)}>
              ✓ Doğrulanmış
            </button>
          </div>
          {!yukleniyor && (
            <span style={s.sonucMetin}>{filtreli.length} ilan</span>
          )}
        </div>

        {/* ── LOADING ── */}
        {yukleniyor && (
          <div style={s.merkez}>
            <div style={s.spinner} />
            <p style={s.yuklMetin}>İlanlar yükleniyor…</p>
          </div>
        )}

        {/* ── EMPTY STATE ── */}
        {!yukleniyor && filtreli.length === 0 && (
          <div style={s.bos}>
            <div style={{ fontSize: 52, marginBottom: 12, lineHeight: 1 }}>
              {aramaMetni ? "🔍" : kategori ? (CIHAZ_EMOJI[kategori] || "📦") : "🏪"}
            </div>
            <div style={s.bosBaslik}>
              {aramaMetni
                ? `"${aramaMetni}" için ilan bulunamadı`
                : sadeceDogru
                ? "Doğrulanmış ilan yok"
                : kategori
                ? `${kategori} ilanı yok`
                : "Henüz ilan yok"}
            </div>
            <p style={s.bosAlt}>
              {aramaMetni || sadeceDogru || kategori
                ? "Filtreleri kaldırarak tüm ilanlara bakabilirsin."
                : "İlk ilanlayan sen ol!"}
            </p>
            {!aramaMetni && !sadeceDogru && !kategori && (
              <a href="/ikinci-el/yeni" style={s.ilkIlanBtn}>+ İlan Ver →</a>
            )}
          </div>
        )}

        {/* ── LISTINGS ── */}
        {!yukleniyor && filtreli.length > 0 && (
          <div style={s.liste}>
            {filtreli.map(ilan => (
              <IlanKarti key={ilan.id} ilan={ilan} onClick={() => goster(ilan.id)} />
            ))}
          </div>
        )}

        {/* ── BOTTOM CTA ── */}
        <a href="/ariza" style={s.anaLink}>◑ Benservis — Ücretsiz Arıza Teşhisi</a>
      </div>

      <footer style={s.footer}>© 2025 Benservis · İkinci El Pazaryeri</footer>
    </div>
  );
}

/* ─────────────── STYLES ─────────────── */
const s = {
  // PAGE
  wrap: {
    minHeight: "100vh",
    background: "#F4F0EA",
    fontFamily: "'Hanken Grotesk', sans-serif",
    color: INK,
  },

  // HEADER
  header: {
    background: "#FFFFFF",
    borderBottom: "1px solid rgba(0,0,0,.07)",
    padding: "0 16px",
    position: "sticky",
    top: 0,
    zIndex: 100,
    boxShadow: "0 1px 8px rgba(0,0,0,.05)",
  },
  headerRow: {
    maxWidth: 680,
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "11px 0",
  },
  logoA: {
    display: "flex",
    alignItems: "center",
    gap: 7,
    textDecoration: "none",
    color: INK,
  },
  logoMark: {
    color: AMBER,
    fontSize: 22,
    transform: "rotate(-20deg)",
    display: "inline-block",
    lineHeight: 1,
  },
  logoText: {
    fontFamily: "'Fraunces', serif",
    fontWeight: 700,
    fontSize: 22,
    letterSpacing: "-.02em",
  },
  ilanVerBtn: {
    fontSize: 13,
    fontWeight: 700,
    padding: "8px 16px",
    borderRadius: 10,
    background: AMBER,
    color: "#fff",
    textDecoration: "none",
  },
  altBaslik: {
    maxWidth: 680,
    margin: "0 auto",
    fontSize: 10.5,
    fontWeight: 700,
    letterSpacing: ".05em",
    color: "#9A9384",
    textTransform: "uppercase",
    paddingBottom: 9,
  },

  // CONTENT AREA
  icerik: {
    maxWidth: 680,
    margin: "0 auto",
    padding: "16px 14px 40px",
  },

  // SEARCH
  aramaWrap: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "#FFFFFF",
    border: "1.5px solid #E5DCC9",
    borderRadius: 12,
    padding: "0 12px",
    marginBottom: 12,
    transition: "border-color .15s, box-shadow .15s",
  },
  aramaIcon: { fontSize: 16, opacity: 0.45, flexShrink: 0 },
  aramaSil: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: 12,
    color: "#9A9384",
    padding: "4px 6px",
    borderRadius: 6,
    flexShrink: 0,
    fontFamily: "'Hanken Grotesk', sans-serif",
  },

  // CATEGORY CHIPS
  katStrip: {
    display: "flex",
    gap: 6,
    overflowX: "auto",
    scrollbarWidth: "none",
    marginBottom: 12,
    paddingBottom: 2,
  },
  katChip: {
    flexShrink: 0,
    fontSize: 12,
    fontWeight: 600,
    padding: "6px 12px",
    borderRadius: 999,
    border: "1.5px solid #E5DCC9",
    background: "#FFFFFF",
    color: "#5C6660",
    cursor: "pointer",
    fontFamily: "'Hanken Grotesk', sans-serif",
    whiteSpace: "nowrap",
    lineHeight: 1.4,
  },
  katAktif: {
    background: AMBER,
    borderColor: AMBER,
    color: "#FFFFFF",
  },

  // FILTER BAR
  filtrBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
    gap: 8,
  },
  filtrSol: {
    display: "flex",
    gap: 7,
    alignItems: "center",
    flexWrap: "wrap",
  },
  siraSelect: {
    fontSize: 12,
    fontWeight: 600,
    padding: "6px 10px",
    borderRadius: 8,
    border: "1.5px solid #E5DCC9",
    background: "#FFFFFF",
    color: INK,
    cursor: "pointer",
    fontFamily: "'Hanken Grotesk', sans-serif",
  },
  dogruBtn: {
    fontSize: 12,
    fontWeight: 700,
    padding: "6px 12px",
    borderRadius: 8,
    border: "1.5px solid #E5DCC9",
    background: "#FFFFFF",
    color: "#6E6450",
    cursor: "pointer",
    fontFamily: "'Hanken Grotesk', sans-serif",
  },
  dogruAktif: {
    border: `1.5px solid ${AMBER}`,
    background: "rgba(200,99,43,.08)",
    color: AMBER,
  },
  sonucMetin: { fontSize: 12, color: "#9A9384", fontWeight: 600 },

  // STATES
  merkez:  { textAlign: "center", paddingTop: 60 },
  spinner: {
    width: 34, height: 34,
    borderRadius: "50%",
    border: "3px solid #E5DCC9",
    borderTopColor: AMBER,
    margin: "0 auto 16px",
    animation: "spin 1s linear infinite",
  },
  yuklMetin: { fontFamily: "'Fraunces', serif", fontSize: 16, color: "#5C6660" },
  bos:       { textAlign: "center", padding: "56px 0" },
  bosBaslik: { fontFamily: "'Fraunces', serif", fontSize: 19, fontWeight: 700, marginBottom: 8, color: INK },
  bosAlt:    { fontSize: 13, color: "#5C6660", lineHeight: 1.6, margin: "0 0 8px" },
  ilkIlanBtn: {
    display: "inline-block", marginTop: 14,
    padding: "11px 22px", borderRadius: 10,
    background: AMBER, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none",
  },

  // CARDS
  liste: { display: "flex", flexDirection: "column", gap: 10 },
  kart: {
    background: "#FFFFFF",
    border: "1px solid rgba(34,48,42,.06)",
    borderRadius: 14,
    overflow: "hidden",
    display: "flex",
    cursor: "pointer",
  },
  fotoKap: { position: "relative", flexShrink: 0, width: 120, height: 120 },
  foto: { width: 120, height: 120, objectFit: "cover", display: "block" },
  fotoPlaceholder: {
    width: 120, height: 120,
    display: "flex", alignItems: "center", justifyContent: "center",
    background: "#EDE6D6",
  },
  rozetOverlay: { position: "absolute", bottom: 5, left: 5 },
  kartBody: {
    flex: 1, padding: "11px 13px",
    display: "flex", flexDirection: "column", minWidth: 0,
  },
  kartBaslik: {
    fontFamily: "'Fraunces', serif",
    fontSize: 15, fontWeight: 700, lineHeight: 1.3, marginBottom: 3,
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  },
  kartCihaz: { fontSize: 12, color: "#8A7B6A", marginBottom: 5 },
  chipler: { display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 6 },
  chip: { fontSize: 10, borderRadius: 999, padding: "2px 8px", fontWeight: 700 },
  kartAlt: {
    marginTop: "auto",
    display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 8,
  },
  konumSatir: {
    fontSize: 11, color: "#8A7B6A", marginBottom: 2,
    overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
  },
  zamanSatir: { fontSize: 11, color: "#B0A898" },
  fiyat: {
    fontFamily: "'Fraunces', serif",
    fontSize: 17, fontWeight: 700, color: AMBER, whiteSpace: "nowrap",
  },

  // BOTTOM
  anaLink: {
    display: "block", textAlign: "center", marginTop: 24,
    padding: 13, borderRadius: 13,
    background: INK, color: CREAM,
    fontWeight: 700, fontSize: 14, textDecoration: "none",
  },
  footer: {
    textAlign: "center", fontSize: 11.5, color: "#A59E8E",
    padding: "14px 18px 24px",
  },
};

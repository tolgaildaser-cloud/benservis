// src/IlanDetay.jsx
// İlan detay sayfası — /ikinci-el/:id (SPA içi)
// Aynı HTML server-rendered og.js'den de üretiliyor (WhatsApp/bot için)
import React, { useState, useEffect } from "react";
import BenservisRozet from "./BenservisRozet.jsx";

const FONT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700&family=Hanken+Grotesk:wght@400;600;700&display=swap');`;
const INK = "#22302A", CREAM = "#F5EFE2", AMBER = "#C8632B", GREEN = "#3A7D44";

const DURUM_CFG = {
  "çalışıyor": { bg: "#E8F0E8", color: GREEN,    label: "✓ Çalışıyor" },
  "arızalı":   { bg: "#FEF3E2", color: AMBER,    label: "⚠ Arızalı" },
  "hurda":     { bg: "#FDECEA", color: "#B23A2E", label: "✕ Hurda" },
};

function TamirSatiri({ t }) {
  const tarih = new Date(t.tarih + "T12:00:00").toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
  return (
    <div style={st.tamirSatir}>
      <div style={st.tamirUst}>
        <span style={st.tamirTarih}>{tarih}</span>
        {t.servis_turu === "benservis" && (
          <span style={st.benservisEtiket}>✓ Benservis</span>
        )}
        {t.maliyet != null && (
          <span style={st.tamirMaliyet}>{Number(t.maliyet).toLocaleString("tr-TR")} TL</span>
        )}
      </div>
      <div style={st.tamirIslem}>{t.yapilan_islem || ""}</div>
      {t.degistirilen_parcalar?.length > 0 && (
        <div style={st.tamirParcalar}>
          {t.degistirilen_parcalar.map((p, i) => (
            <span key={i} style={st.parcaChip}>{p}</span>
          ))}
        </div>
      )}
    </div>
  );
}

const CSS_ILANDETAY = `
* { box-sizing:border-box; }
@keyframes spin { to { transform:rotate(360deg); } }
input:focus, textarea:focus { outline:none; border-color:#C8632B!important; box-shadow:0 0 0 3px rgba(200,99,43,.13); }
button { cursor:pointer; font-family:'Hanken Grotesk',sans-serif; }
`;

export default function IlanDetay({ id }) {
  const [ilan, setIlan]           = useState(null);
  const [dpp, setDpp]             = useState(null);
  const [yukleniyor, setYuk]      = useState(true);
  const [bulunamadi, setBul]      = useState(false);
  const [tamirAcik, setTamirAcik] = useState(false);
  // Talep formu
  const [talepForm, setTF]        = useState(false);
  const [aliciAd, setAA]          = useState("");
  const [aliciTel, setAT]         = useState("");
  const [ilkMesaj, setIM]         = useState("");
  const [talepGon, setTG]         = useState(false);
  const [talepHata, setTH]        = useState("");
  const [talepOldu, setTO]        = useState(false);
  const [aliciToken, setAliciToken] = useState("");

  useEffect(() => {
    setYuk(true);
    fetch(`/api/ilan/${encodeURIComponent(id)}`)
      .then(r => { if (!r.ok) throw new Error("404"); return r.json(); })
      .then(d => { setIlan(d.ilan); setDpp(d.dpp); })
      .catch(() => setBul(true))
      .finally(() => setYuk(false));
  }, [id]);

  if (yukleniyor) {
    return (
      <div style={sWrap}>
        <style>{FONT}</style>
        <div style={st.merkez}>
          <div style={st.spinner} />
          <p style={st.yukMetin}>İlan yükleniyor…</p>
        </div>
      </div>
    );
  }

  if (bulunamadi || !ilan) {
    return (
      <div style={sWrap}>
        <style>{FONT}</style>
        <div style={st.merkez}>
          <div style={{ fontSize: 44, marginBottom: 12 }}>🔍</div>
          <div style={st.baslik404}>İlan Bulunamadı</div>
          <p style={st.alt404}>Bu ilan artık mevcut değil ya da kaldırılmış.</p>
          <a href="/ikinci-el" style={st.geriBtn}>← İlanlara Git</a>
        </div>
      </div>
    );
  }

  const pageUrl       = `https://benservis.com/ikinci-el/${encodeURIComponent(id)}`;
  const durumCfg      = dpp?.cihaz.mevcut_durum ? (DURUM_CFG[dpp.cihaz.mevcut_durum] || DURUM_CFG["çalışıyor"]) : null;
  const benservisDogt = dpp?.tamirler?.some(t => t.servis_turu === "benservis") ?? false;
  const cihazAd       = dpp ? [dpp.cihaz.marka, dpp.cihaz.model || dpp.cihaz.kategori].filter(Boolean).join(" ") : null;
  const aktif         = ilan.durum === "aktif";
  const waMesaj       = encodeURIComponent(`Benservis ilanınızı gördüm: ${ilan.baslik} (${pageUrl})`);
  const waTel         = (ilan.satici_tel || "").replace(/[^0-9]/g, "").replace(/^0/, "90");

  const talepGonder = async () => {
    setTH("");
    if (!aliciAd.trim())  { setTH("Adınızı girin."); return; }
    if (!aliciTel.trim()) { setTH("Telefon numarası girin."); return; }
    setTG(true);
    try {
      const res  = await fetch("/api/talep/yeni", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ilan_id: id, alici_ad: aliciAd, alici_tel: aliciTel, ilk_mesaj: ilkMesaj }),
      });
      const data = await res.json();
      if (!res.ok) { setTH(data.error || "Hata oluştu."); return; }
      setAliciToken(data.alici_token);
      setTO(true);
    } catch { setTH("Bağlantı hatası."); }
    finally { setTG(false); }
  };

  return (
    <div style={sWrap}>
      <style>{FONT}{CSS_ILANDETAY}</style>
      <div style={st.grain} />

      {/* Header */}
      <header style={st.header}>
        <div style={st.logoRow}>
          <span style={st.logoMark}>◑</span>
          <h1 style={st.logo}>Benservis</h1>
        </div>
        <div style={st.altBaslik}>İkinci El Pazaryeri</div>
      </header>

      {/* Satıldı / Kaldırıldı uyarısı */}
      {!aktif && (
        <div style={st.pasifUyari}>
          {ilan.durum === "satildi" ? "✕ Bu ilan satıldı" : "✕ Bu ilan kaldırıldı"}
        </div>
      )}

      {/* Ana ilan kartı */}
      <div style={st.kart}>
        {/* Fotoğraf */}
        {ilan.fotograflar?.[0]
          ? <img src={ilan.fotograflar[0]} alt={ilan.baslik} style={st.foto} />
          : <div style={st.fotoPlaceholder}>📦</div>
        }

        <div style={st.kartIcerik}>
          <div style={st.ilanBaslik}>{ilan.baslik}</div>
          {cihazAd && <div style={st.cihazAd}>{cihazAd}</div>}
          <div style={st.fiyat}>{ilan.fiyat.toLocaleString("tr-TR")} <span style={st.tl}>TL</span></div>

          <div style={st.chipler}>
            {ilan.konum && <span style={st.konumChip}>📍 {ilan.konum}</span>}
            {benservisDogt && <span style={st.dogtChip}>✓ Benservis Doğrulanmış</span>}
            {durumCfg && <span style={{ ...st.durumChip, background: durumCfg.bg, color: durumCfg.color }}>{durumCfg.label}</span>}
          </div>

          {ilan.aciklama && <p style={st.aciklama}>{ilan.aciklama}</p>}

          <div style={st.seriNo}>SN: {ilan.seri_no}</div>

          {benservisDogt && (
            <div style={st.rozetSatir}>
              <BenservisRozet size="md" />
              <span style={st.rozetMetin}>Tamir geçmişi Benservis kayıtlarıyla doğrulanmış</span>
            </div>
          )}
        </div>
      </div>

      {/* DPP Pasaport bölümü */}
      {dpp && (
        <div style={st.dppKart}>
          <div style={st.dppBaslik}>
            <span>📋 Dijital Ürün Pasaportu</span>
            <span style={st.tamirSayac}>{dpp.tamirler.length} tamir</span>
          </div>

          {cihazAd && (
            <div style={st.dppCihazAd}>{cihazAd}</div>
          )}

          {dpp.cihaz.garanti_bitis_tarihi && (
            <div style={st.garantiRow}>
              🛡️ Garanti: {new Date(dpp.cihaz.garanti_bitis_tarihi + "T00:00:00").toLocaleDateString("tr-TR")}
            </div>
          )}

          {dpp.toplam_maliyet > 0 && (
            <div style={st.toplamMaliyet}>
              Toplam tamir maliyeti: <strong>{dpp.toplam_maliyet.toLocaleString("tr-TR")} TL</strong>
            </div>
          )}

          {dpp.tamirler.length > 0 ? (
            <>
              {(tamirAcik ? dpp.tamirler : dpp.tamirler.slice(0, 3)).map(t => (
                <TamirSatiri key={t.id} t={t} />
              ))}
              {dpp.tamirler.length > 3 && (
                <button style={st.dahaFazlaBtn} onClick={() => setTamirAcik(!tamirAcik)}>
                  {tamirAcik ? "Daha azını göster ↑" : `+${dpp.tamirler.length - 3} tamir daha ↓`}
                </button>
              )}
            </>
          ) : (
            <p style={st.tamirYok}>Henüz tamir kaydı yok.</p>
          )}

          <a href={`/dpp/${encodeURIComponent(ilan.seri_no)}`} style={st.dppLink}>
            📋 Tam Pasaportu Gör →
          </a>
        </div>
      )}

      {/* Satın Al / Talep Formu */}
      <div style={st.saticiKart}>
        <div style={st.saticiBaslik}>Satın Al</div>
        <div style={{ fontSize: 13.5, color: "#5C6660", marginBottom: 14, lineHeight: 1.5 }}>
          Satıcı: <strong>{ilan.satici_ad}</strong>
        </div>

        {!aktif && <p style={st.pasifIletisim}>Bu ilan artık aktif değil.</p>}

        {aktif && !talepForm && !talepOldu && (
          <>
            <p style={{ fontSize: 13, color: "#5C6660", marginBottom: 14, lineHeight: 1.5 }}>
              🔒 Ödeme Benservis güvencesiyle korunur. Satıcı bilgilerin gizlidir.
            </p>
            <button style={st.talepCta} onClick={() => setTF(true)}>
              Satın Almak İstiyorum →
            </button>
          </>
        )}

        {aktif && talepForm && !talepOldu && (
          <div style={{ animation: "rise .3s ease both" }}>
            <label style={st.formLabel}>Adınız <span style={{ color: AMBER }}>*</span></label>
            <input style={st.formInput} value={aliciAd} onChange={e => setAA(e.target.value)} placeholder="Ad Soyad" />

            <label style={st.formLabel}>Telefon <span style={{ color: AMBER }}>*</span></label>
            <input style={st.formInput} type="tel" value={aliciTel} onChange={e => setAT(e.target.value)} placeholder="0532 000 00 00" />

            <label style={st.formLabel}>Mesaj (opsiyonel)</label>
            <textarea style={{ ...st.formInput, resize: "vertical" }} rows={2} value={ilkMesaj} onChange={e => setIM(e.target.value)} placeholder="Sormak istediğiniz varsa…" maxLength={400} />

            {talepHata && <div style={{ fontSize: 13, color: "#B23A2E", fontWeight: 600, marginBottom: 8 }}>{talepHata}</div>}

            <button style={st.talepCta} onClick={talepGonder} disabled={talepGon}>
              {talepGon ? "Gönderiliyor…" : "Talebi Gönder →"}
            </button>
            <button style={st.vazgecBtn} onClick={() => { setTF(false); setTH(""); }}>Vazgeç</button>
          </div>
        )}

        {talepOldu && (
          <div style={st.talepOlduKart}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>✅</div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 17, fontWeight: 700, marginBottom: 6 }}>Talebiniz alındı!</div>
            <p style={{ fontSize: 13, color: "#5C6660", marginBottom: 14, lineHeight: 1.5 }}>
              Satıcıya SMS ile bildirim gönderildi. Mesajlaşmak ve ödemeyi tamamlamak için panelinize gidin.
            </p>
            <a href={`/ikinci-el/alici/${aliciToken}`} style={st.talepCta}>
              Alıcı Paneliime Git →
            </a>
          </div>
        )}
      </div>

      {/* Navigasyon */}
      <a href="/ikinci-el" style={st.tumuBtn}>◑ Benservis — Tüm İlanlar →</a>

      <footer style={st.footer}>Benservis İkinci El · benservis.com</footer>
    </div>
  );
}

const sWrap = {
  position: "relative",
  minHeight: "100vh",
  background: CREAM,
  fontFamily: "'Hanken Grotesk', sans-serif",
  color: INK,
  padding: "28px 18px 48px",
  maxWidth: 600,
  margin: "0 auto",
};

const st = {
  grain: { position: "fixed", inset: 0, pointerEvents: "none", opacity: 0.4, backgroundImage: "radial-gradient(rgba(34,48,42,.05) 1px, transparent 1px)", backgroundSize: "4px 4px", zIndex: 0 },
  merkez: { textAlign: "center", paddingTop: 60, position: "relative", zIndex: 1 },
  spinner: { width: 36, height: 36, borderRadius: "50%", border: "4px solid #E5DCC9", borderTopColor: AMBER, margin: "0 auto 16px", animation: "spin 1s linear infinite" },
  yukMetin: { fontFamily: "'Fraunces', serif", fontSize: 16, color: "#5C6660" },
  baslik404: { fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 700, marginBottom: 8 },
  alt404: { fontSize: 14, color: "#5C6660", marginBottom: 20 },
  geriBtn: { display: "inline-block", padding: "11px 22px", borderRadius: 10, background: AMBER, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none" },

  header: { position: "relative", zIndex: 1, textAlign: "center", marginBottom: 18 },
  logoRow: { display: "flex", alignItems: "center", justifyContent: "center", gap: 10 },
  logoMark: { color: AMBER, fontSize: 28, transform: "rotate(-20deg)", display: "inline-block" },
  logo: { fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 30, margin: 0, letterSpacing: "-.02em" },
  altBaslik: { fontSize: 12, fontWeight: 700, letterSpacing: ".06em", color: "#8A7B6A", textTransform: "uppercase", marginTop: 4 },

  pasifUyari: { position: "relative", zIndex: 1, background: "#FDECEA", border: "1px solid #F5C6C0", borderRadius: 10, padding: "10px 14px", marginBottom: 12, fontSize: 13, fontWeight: 700, color: "#B23A2E", textAlign: "center" },

  kart: { position: "relative", zIndex: 1, background: "#FFFDF8", border: "1px solid #E5DCC9", borderRadius: 16, overflow: "hidden", marginBottom: 12 },
  foto: { width: "100%", maxHeight: 260, objectFit: "cover" },
  fotoPlaceholder: { height: 140, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48, background: "#F0EAD8" },
  kartIcerik: { padding: "16px 18px 20px" },
  ilanBaslik: { fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 700, lineHeight: 1.25, marginBottom: 4 },
  cihazAd: { fontSize: 13, color: "#8A7B6A", marginBottom: 10 },
  fiyat: { fontSize: 32, fontWeight: 700, color: AMBER, fontFamily: "'Fraunces', serif", marginBottom: 12 },
  tl: { fontSize: 18 },
  chipler: { display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 12 },
  konumChip: { fontSize: 12, background: "#EDE5D3", color: "#6E6450", borderRadius: 999, padding: "3px 10px", fontWeight: 700 },
  dogtChip: { fontSize: 12, background: AMBER, color: "#fff", borderRadius: 999, padding: "3px 10px", fontWeight: 700 },
  durumChip: { fontSize: 12, borderRadius: 999, padding: "3px 10px", fontWeight: 700 },
  aciklama: { fontSize: 14, color: "#5C6660", lineHeight: 1.55, marginBottom: 10 },
  seriNo: { fontSize: 11, fontWeight: 700, color: "#8A7B6A", fontFamily: "monospace", marginBottom: 10 },
  rozetSatir: { display: "flex", alignItems: "center", gap: 10, marginTop: 4 },
  rozetMetin: { fontSize: 12, color: "#6E6450" },

  dppKart: { position: "relative", zIndex: 1, background: "#FFFDF8", border: "1px solid #E5DCC9", borderRadius: 14, padding: 16, marginBottom: 12 },
  dppBaslik: { display: "flex", alignItems: "center", gap: 8, fontFamily: "'Fraunces', serif", fontSize: 17, fontWeight: 700, marginBottom: 10 },
  tamirSayac: { fontSize: 11, fontWeight: 700, background: "#EDE5D3", color: "#6E6450", borderRadius: 999, padding: "2px 8px" },
  dppCihazAd: { fontSize: 13, color: "#5C6660", marginBottom: 6 },
  garantiRow: { fontSize: 13, color: "#5C6660", marginBottom: 8 },
  toplamMaliyet: { fontSize: 13, background: "#F0EAD8", borderRadius: 7, padding: "6px 10px", display: "inline-block", marginBottom: 10 },
  tamirSatir: { background: "#F7F1E3", borderRadius: 9, padding: "10px 12px", marginBottom: 7 },
  tamirUst: { display: "flex", alignItems: "center", gap: 6, marginBottom: 4, flexWrap: "wrap" },
  tamirTarih: { fontSize: 12, fontWeight: 700, color: "#5C6660" },
  benservisEtiket: { fontSize: 10.5, fontWeight: 700, background: AMBER, color: "#fff", borderRadius: 999, padding: "1px 7px" },
  tamirMaliyet: { fontSize: 12, fontWeight: 700, color: AMBER, marginLeft: "auto" },
  tamirIslem: { fontSize: 13.5, fontWeight: 600 },
  tamirParcalar: { display: "flex", gap: 5, flexWrap: "wrap", marginTop: 5 },
  parcaChip: { fontSize: 11, background: "#EDE5D3", color: "#6E6450", borderRadius: 999, padding: "2px 8px" },
  dahaFazlaBtn: { display: "block", width: "100%", marginTop: 8, padding: "8px", borderRadius: 8, border: "1px solid #DDD3BE", background: "transparent", fontSize: 12.5, fontWeight: 700, color: "#8A7B6A" },
  tamirYok: { fontSize: 13, color: "#9A9384", margin: "8px 0" },
  dppLink: { display: "block", textAlign: "center", marginTop: 12, padding: "9px", borderRadius: 9, border: "1.5px solid #DDD3BE", background: "#FFFDF8", color: INK, fontSize: 13, fontWeight: 700, textDecoration: "none" },

  saticiKart: { position: "relative", zIndex: 1, background: "#FFFDF8", border: "1px solid #E5DCC9", borderRadius: 14, padding: 16, marginBottom: 12 },
  saticiBaslik: { fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 700, marginBottom: 8 },
  pasifIletisim: { fontSize: 13, color: "#9A9384", margin: 0 },
  formLabel: { display: "block", fontSize: 13, fontWeight: 700, margin: "12px 0 5px" },
  formInput: { width: "100%", padding: "10px 12px", borderRadius: 10, border: "1.5px solid #DDD3BE", background: "#FFFDF8", fontSize: 14, fontFamily: "'Hanken Grotesk', sans-serif", color: INK },
  talepCta: { display: "block", textAlign: "center", marginTop: 14, padding: "13px", borderRadius: 12, border: "none", background: AMBER, color: "#fff", fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 8px 20px -8px rgba(200,99,43,.5)", width: "100%" },
  vazgecBtn: { display: "block", width: "100%", marginTop: 10, padding: "10px", borderRadius: 10, border: "1.5px solid #DDD3BE", background: "transparent", fontSize: 13, color: "#8A7B6A", fontWeight: 600 },
  talepOlduKart: { textAlign: "center", padding: "8px 0" },

  tumuBtn: { position: "relative", zIndex: 1, display: "block", textAlign: "center", padding: 13, borderRadius: 13, background: INK, color: CREAM, fontWeight: 700, fontSize: 14, textDecoration: "none", marginTop: 8 },
  footer: { position: "relative", zIndex: 1, textAlign: "center", fontSize: 11.5, color: "#A59E8E", marginTop: 20 },
};

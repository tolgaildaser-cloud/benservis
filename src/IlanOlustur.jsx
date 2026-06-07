// src/IlanOlustur.jsx
// İlan oluşturma — /ikinci-el/yeni
// Adım 1: seri_no → DPP önizleme
// Adım 2: ilan detayları → POST /api/ilan/yeni
import React, { useState } from "react";
import BenservisRozet from "./BenservisRozet.jsx";

const FONT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700&family=Hanken+Grotesk:wght@400;600;700&display=swap');`;
const INK = "#22302A", CREAM = "#F5EFE2", AMBER = "#C8632B", GREEN = "#3A7D44";

const CSS = `
* { box-sizing: border-box; }
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes rise { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:none; } }
input:focus, textarea:focus, select:focus { outline:none; border-color:${AMBER} !important; box-shadow:0 0 0 3px rgba(200,99,43,.13); }
button { cursor:pointer; font-family:'Hanken Grotesk',sans-serif; }
`;

export default function IlanOlustur() {
  // Adım 1 state
  const [seriNo, setSeriNo]       = useState("");
  const [dpp, setDpp]             = useState(null);
  const [dppHata, setDppHata]     = useState("");
  const [dppYuk, setDppYuk]       = useState(false);
  const [adim, setAdim]           = useState(1);

  // Adım 2 state
  const [baslik, setBaslik]       = useState("");
  const [fiyat, setFiyat]         = useState("");
  const [aciklama, setAciklama]   = useState("");
  const [konum, setKonum]         = useState("");
  const [saticiAd, setSaticiAd]   = useState("");
  const [saticiTel, setSaticiTel] = useState("");

  // Gönderim state
  const [gonderiyor, setGonderiyor] = useState(false);
  const [hataMsg, setHataMsg]       = useState("");

  // ── DPP sorgula ─────────────────────────────────────────────────────────────
  const dppSorgula = async () => {
    const no = seriNo.trim().toUpperCase();
    if (!no) { setDppHata("Seri numarası girin."); return; }
    setDppHata("");
    setDppYuk(true);
    setDpp(null);

    try {
      const res = await fetch(`/api/dpp/cihaz?seri_no=${encodeURIComponent(no)}`);
      if (res.ok) {
        const data = await res.json();
        const { cihaz, tamirler, toplam_maliyet } = data;
        setDpp({
          marka:                cihaz.marka,
          model:                cihaz.model,
          kategori:             cihaz.kategori,
          mevcut_durum:         cihaz.mevcut_durum,
          tamir_sayisi:         (tamirler || []).length,
          toplam_maliyet:       toplam_maliyet || 0,
          benservis_dogrulanmis: (tamirler || []).some(t => t.servis_turu === "benservis"),
        });
      } else if (res.status === 404) {
        // DPP kaydı yok — ilerlemeye izin ver
        setDpp(null);
      } else {
        setDppHata("Sorgulama hatası. Tekrar dener misin?");
        return;
      }
      setAdim(2);
    } catch {
      setDppHata("Bağlantı hatası. Tekrar dener misin?");
    } finally {
      setDppYuk(false);
    }
  };

  // ── İlan gönder ─────────────────────────────────────────────────────────────
  const ilanGonder = async () => {
    setHataMsg("");
    if (!baslik.trim())      { setHataMsg("Başlık girin."); return; }
    if (!fiyat || parseInt(fiyat, 10) <= 0) { setHataMsg("Geçerli bir fiyat girin."); return; }
    if (!saticiAd.trim())    { setHataMsg("Adınızı girin."); return; }
    if (!saticiTel.trim())   { setHataMsg("Telefon numarası girin."); return; }

    setGonderiyor(true);
    try {
      const res  = await fetch("/api/ilan/yeni", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({
          seri_no:    seriNo.trim().toUpperCase(),
          baslik:     baslik.trim(),
          aciklama:   aciklama.trim() || undefined,
          fiyat:      parseInt(fiyat, 10),
          konum:      konum.trim() || undefined,
          satici_ad:  saticiAd.trim(),
          satici_tel: saticiTel.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok) { setHataMsg(data.error || "İlan oluşturulamadı."); return; }
      window.location.href = `/ikinci-el/${data.ilan.id}`;
    } catch {
      setHataMsg("Bağlantı hatası. Tekrar dener misin?");
    } finally {
      setGonderiyor(false);
    }
  };

  // ── Render ───────────────────────────────────────────────────────────────────
  return (
    <div style={s.wrap}>
      <style>{FONT}{CSS}</style>
      <div style={s.grain} />

      <header style={s.header}>
        <div style={s.logoRow}>
          <span style={s.logoMark}>◑</span>
          <h1 style={s.logo}>Benservis</h1>
        </div>
        <div style={s.altBaslik}>İkinci El Pazaryeri</div>
      </header>

      {/* Adım gösterge */}
      <div style={s.adimlar}>
        <div style={{ ...s.adimDot, background: AMBER, color: "#fff" }}>1</div>
        <div style={{ ...s.adimCizgi, background: adim >= 2 ? AMBER : "#DDD3BE" }} />
        <div style={{ ...s.adimDot, background: adim >= 2 ? AMBER : "#EDE5D3", color: adim >= 2 ? "#fff" : "#9A9384" }}>2</div>
        <div style={s.adimEtiket}>
          <span style={adim === 1 ? s.adimEtiketAktif : s.adimEtiketPasif}>Cihaz</span>
          <span style={{ flex: 1 }} />
          <span style={adim === 2 ? s.adimEtiketAktif : s.adimEtiketPasif}>İlan Detayı</span>
        </div>
      </div>

      {/* ── Adım 1 ── */}
      {adim === 1 && (
        <div style={s.kart}>
          <div style={s.kartBaslik}>Cihazın seri numarasını gir</div>
          <p style={s.kartAcik}>Seri numarası ile DPP tamir geçmişini otomatik çekeriz — ilanın daha güvenilir görünür.</p>

          <label style={s.label}>Seri Numarası</label>
          <input
            style={s.input}
            value={seriNo}
            onChange={e => setSeriNo(e.target.value.toUpperCase())}
            onKeyDown={e => e.key === "Enter" && dppSorgula()}
            placeholder="örn. SN2024AB12345"
            autoFocus
          />
          {dppHata && <div style={s.hata}>{dppHata}</div>}

          <button style={s.cta} onClick={dppSorgula} disabled={dppYuk}>
            {dppYuk
              ? <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                  <span style={s.spinnerKucuk} /> Sorgulanıyor…
                </span>
              : "DPP Sorgula →"}
          </button>

          <button style={s.atlaBtnText} onClick={() => {
            if (!seriNo.trim()) { setDppHata("Seri numarası girin."); return; }
            setDpp(null); setDppHata(""); setAdim(2);
          }}>
            DPP olmadan devam et
          </button>
        </div>
      )}

      {/* ── Adım 2 ── */}
      {adim === 2 && (
        <div style={{ animation: "rise .35s ease both" }}>
          {/* DPP önizleme kartı */}
          {dpp ? (
            <div style={s.dppOnizleme}>
              <div style={s.dppOnizlemeBaslik}>
                <span style={s.dppIkon}>📋</span>
                <span>DPP Pasaportu Bağlandı</span>
                {dpp.benservis_dogrulanmis && <BenservisRozet size="sm" />}
              </div>
              <div style={s.dppSatirlar}>
                {(dpp.marka || dpp.model) && (
                  <div style={s.dppSatir}>
                    <span style={s.dppEtiket}>Cihaz</span>
                    <span style={s.dppDeger}>{[dpp.marka, dpp.model || dpp.kategori].filter(Boolean).join(" ")}</span>
                  </div>
                )}
                <div style={s.dppSatir}>
                  <span style={s.dppEtiket}>Tamir kaydı</span>
                  <span style={s.dppDeger}>{dpp.tamir_sayisi} tamir</span>
                </div>
                {dpp.toplam_maliyet > 0 && (
                  <div style={s.dppSatir}>
                    <span style={s.dppEtiket}>Toplam maliyet</span>
                    <span style={s.dppDeger}>{dpp.toplam_maliyet.toLocaleString("tr-TR")} TL</span>
                  </div>
                )}
                {dpp.mevcut_durum && (
                  <div style={s.dppSatir}>
                    <span style={s.dppEtiket}>Durum</span>
                    <span style={s.dppDeger}>{dpp.mevcut_durum}</span>
                  </div>
                )}
              </div>
              {dpp.benservis_dogrulanmis && (
                <div style={s.dogrulanmisBant}>✓ Benservis kayıtlı servis tarafından tamir edildi</div>
              )}
            </div>
          ) : (
            <div style={s.dppYok}>
              <span>ℹ️</span>
              <span>Bu seri no için DPP kaydı bulunamadı — ilan yine de oluşturulabilir.</span>
            </div>
          )}

          {/* İlan formu */}
          <div style={s.kart}>
            <div style={s.kartBaslik}>İlan Detayları</div>

            <label style={s.label}>Başlık <span style={s.zorunlu}>*</span></label>
            <input
              style={s.input}
              value={baslik}
              onChange={e => setBaslik(e.target.value)}
              placeholder="örn. Arçelik Çamaşır Makinesi 9 kg"
              maxLength={120}
              autoFocus
            />

            <label style={s.label}>Fiyat (TL) <span style={s.zorunlu}>*</span></label>
            <input
              style={s.input}
              type="number"
              min="1"
              value={fiyat}
              onChange={e => setFiyat(e.target.value)}
              placeholder="örn. 3500"
            />

            <label style={s.label}>Açıklama <span style={s.opsiyonel}>(opsiyonel)</span></label>
            <textarea
              style={s.textarea}
              value={aciklama}
              onChange={e => setAciklama(e.target.value)}
              rows={3}
              placeholder="Cihaz hakkında ek bilgi, koşul, nedeni vs."
              maxLength={600}
            />

            <label style={s.label}>Konum <span style={s.opsiyonel}>(opsiyonel)</span></label>
            <input
              style={s.input}
              value={konum}
              onChange={e => setKonum(e.target.value)}
              placeholder="örn. İstanbul Kadıköy"
            />

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <div style={{ flex: 1, minWidth: 140 }}>
                <label style={s.label}>Adınız <span style={s.zorunlu}>*</span></label>
                <input
                  style={s.input}
                  value={saticiAd}
                  onChange={e => setSaticiAd(e.target.value)}
                  placeholder="Ad Soyad"
                />
              </div>
              <div style={{ flex: 1, minWidth: 140 }}>
                <label style={s.label}>Telefon <span style={s.zorunlu}>*</span></label>
                <input
                  style={s.input}
                  type="tel"
                  value={saticiTel}
                  onChange={e => setSaticiTel(e.target.value)}
                  placeholder="0532 000 00 00"
                />
              </div>
            </div>

            <div style={s.telUyari}>📵 Telefon numaranız yalnızca alıcılara gösterilir, listede gizlidir.</div>

            {hataMsg && <div style={s.hata}>{hataMsg}</div>}

            <button style={s.cta} onClick={ilanGonder} disabled={gonderiyor}>
              {gonderiyor
                ? <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                    <span style={s.spinnerKucuk} /> İlan oluşturuluyor…
                  </span>
                : "İlanı Yayınla →"}
            </button>

            <button style={s.geriBtn} onClick={() => { setAdim(1); setHataMsg(""); }}>
              ← Seri numarasını değiştir
            </button>
          </div>
        </div>
      )}

      <a href="/ikinci-el" style={s.geriLink}>← Tüm İlanlara Dön</a>
      <footer style={s.footer}>Benservis İkinci El · benservis.com</footer>
    </div>
  );
}

const s = {
  wrap: { position: "relative", minHeight: "100vh", background: CREAM, fontFamily: "'Hanken Grotesk', sans-serif", color: INK, padding: "28px 18px 48px", maxWidth: 600, margin: "0 auto" },
  grain: { position: "fixed", inset: 0, pointerEvents: "none", opacity: 0.4, backgroundImage: "radial-gradient(rgba(34,48,42,.05) 1px, transparent 1px)", backgroundSize: "4px 4px", zIndex: 0 },
  header: { position: "relative", zIndex: 1, textAlign: "center", marginBottom: 20 },
  logoRow: { display: "flex", alignItems: "center", justifyContent: "center", gap: 10 },
  logoMark: { color: AMBER, fontSize: 28, transform: "rotate(-20deg)", display: "inline-block" },
  logo: { fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 30, margin: 0, letterSpacing: "-.02em" },
  altBaslik: { fontSize: 12, fontWeight: 700, letterSpacing: ".06em", color: "#8A7B6A", textTransform: "uppercase", marginTop: 4 },

  adimlar: { position: "relative", zIndex: 1, display: "flex", alignItems: "center", marginBottom: 20, gap: 0 },
  adimDot: { width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0, zIndex: 1 },
  adimCizgi: { flex: 1, height: 2, transition: "background .3s" },
  adimEtiket: { position: "absolute", top: 34, left: 0, right: 0, display: "flex", fontSize: 11, fontWeight: 700, color: "#9A9384" },
  adimEtiketAktif: { color: AMBER },
  adimEtiketPasif: { color: "#C9C0B2" },

  kart: { position: "relative", zIndex: 1, background: "#FFFDF8", border: "1px solid #E5DCC9", borderRadius: 18, padding: 22, boxShadow: "0 10px 30px -18px rgba(34,48,42,.2)", marginTop: 8 },
  kartBaslik: { fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 700, marginBottom: 8 },
  kartAcik: { fontSize: 13.5, color: "#5C6660", marginBottom: 0, lineHeight: 1.5 },

  label: { display: "block", fontSize: 13, fontWeight: 700, margin: "16px 0 6px", color: INK },
  zorunlu: { color: AMBER, fontSize: 14 },
  opsiyonel: { fontWeight: 500, color: "#9A9384", fontSize: 12 },
  input: { width: "100%", padding: "11px 13px", borderRadius: 11, border: "1.5px solid #DDD3BE", background: "#FFFDF8", fontSize: 14.5, fontFamily: "'Hanken Grotesk', sans-serif", color: INK, transition: "all .15s" },
  textarea: { width: "100%", padding: "11px 13px", borderRadius: 11, border: "1.5px solid #DDD3BE", background: "#FFFDF8", fontSize: 14.5, fontFamily: "'Hanken Grotesk', sans-serif", color: INK, resize: "vertical", lineHeight: 1.5 },

  hata: { marginTop: 10, fontSize: 13.5, fontWeight: 600, color: "#B23A2E" },
  telUyari: { marginTop: 10, fontSize: 12, color: "#8A7B6A", padding: "8px 12px", background: "#F0EAD8", borderRadius: 8 },

  cta: { marginTop: 18, width: "100%", padding: 14, borderRadius: 12, border: "none", background: AMBER, color: "#fff", fontSize: 15.5, fontWeight: 700, boxShadow: "0 8px 20px -8px rgba(200,99,43,.6)" },
  atlaBtnText: { display: "block", width: "100%", marginTop: 12, padding: "10px", borderRadius: 10, border: "1.5px solid #DDD3BE", background: "transparent", fontSize: 13, color: "#8A7B6A", fontWeight: 600 },
  geriBtn: { display: "block", width: "100%", marginTop: 12, padding: "10px", borderRadius: 10, border: "1.5px solid #DDD3BE", background: "transparent", fontSize: 13, color: "#8A7B6A", fontWeight: 600 },

  spinnerKucuk: { width: 16, height: 16, borderRadius: "50%", border: "2.5px solid rgba(255,255,255,.4)", borderTopColor: "#fff", display: "inline-block", animation: "spin 1s linear infinite", flexShrink: 0 },

  dppOnizleme: { position: "relative", zIndex: 1, background: "#FFFDF8", border: `1.5px solid ${AMBER}`, borderRadius: 14, padding: 16, marginTop: 8, marginBottom: 12 },
  dppOnizlemeBaslik: { display: "flex", alignItems: "center", gap: 8, fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 700, marginBottom: 12, flexWrap: "wrap" },
  dppIkon: { fontSize: 18 },
  dppSatirlar: { display: "flex", flexDirection: "column", gap: 6 },
  dppSatir: { display: "flex", justifyContent: "space-between", fontSize: 13 },
  dppEtiket: { color: "#8A7B6A", fontWeight: 600 },
  dppDeger: { fontWeight: 700, textAlign: "right" },
  dogrulanmisBant: { marginTop: 12, fontSize: 12, fontWeight: 700, color: AMBER, background: "rgba(200,99,43,.08)", borderRadius: 8, padding: "7px 12px" },

  dppYok: { position: "relative", zIndex: 1, display: "flex", gap: 8, alignItems: "flex-start", fontSize: 13, color: "#6E6450", background: "#F7F1E3", border: "1px solid #EBE1CA", borderRadius: 12, padding: "12px 14px", marginTop: 8, marginBottom: 12, lineHeight: 1.5 },

  geriLink: { display: "block", position: "relative", zIndex: 1, textAlign: "center", marginTop: 20, fontSize: 13, color: "#8A7B6A", fontWeight: 600, textDecoration: "none" },
  footer: { position: "relative", zIndex: 1, textAlign: "center", fontSize: 11.5, color: "#A59E8E", marginTop: 20 },
};

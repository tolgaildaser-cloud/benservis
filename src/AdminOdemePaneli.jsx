// src/AdminOdemePaneli.jsx
// Benservis operatör paneli — bekleyen IBAN transferlerini yönet
// /ikinci-el/admin?token=:ADMIN_TOKEN
import React, { useState, useEffect } from "react";

const FONT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700&family=Hanken+Grotesk:wght@400;600;700&display=swap');`;
const INK = "#22302A", CREAM = "#F5EFE2", AMBER = "#C8632B", GREEN = "#3A7D44";

const CSS = `
* { box-sizing:border-box; }
@keyframes spin { to { transform:rotate(360deg); } }
button { cursor:pointer; font-family:'Hanken Grotesk',sans-serif; }
`;

export default function AdminOdemePaneli() {
  const params     = new URLSearchParams(window.location.search);
  const adminToken = params.get("token") || "";

  const [sekme, setSekme]     = useState("bekliyor");  // bekliyor | yapildi
  const [veri, setVeri]       = useState(null);
  const [yukleniyor, setYuk]  = useState(true);
  const [hataMesaj, setHata]  = useState("");
  const [yapilanId, setYapId] = useState(null);
  const [not, setNot]         = useState("");
  const [konfirm, setKonf]    = useState(null);  // onay bekleyen talep
  const [islem, setIslem]     = useState(false);

  const yukle = async (durum = sekme) => {
    setYuk(true);
    setHata("");
    try {
      const res = await fetch(`/api/admin/odemeler?durum=${durum}`, {
        headers: { Authorization: `Bearer ${adminToken}` },
      });
      if (res.status === 401) { setHata("Yetki hatası — token yanlış."); setVeri(null); return; }
      if (!res.ok) throw new Error();
      const data = await res.json();
      setVeri(data);
    } catch { setHata("Bağlantı hatası."); }
    finally { setYuk(false); }
  };

  useEffect(() => { yukle(sekme); }, [sekme]);

  const odemeYap = async (talep_id) => {
    setIslem(true);
    try {
      const res = await fetch("/api/admin/odemeler", {
        method:  "PATCH",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${adminToken}` },
        body:    JSON.stringify({ talep_id, not: not.trim() || undefined }),
      });
      const data = await res.json();
      if (!res.ok) { setHata(data.error || "Hata."); return; }
      setYapId(talep_id);
      setKonf(null);
      setNot("");
      await yukle(sekme);
    } catch { setHata("Bağlantı hatası."); }
    finally { setIslem(false); }
  };

  const odeme = veri?.odemeler || [];

  return (
    <div style={sWrap}>
      <style>{FONT}{CSS}</style>
      <div style={st.grain} />

      <header style={st.header}>
        <div style={st.logoRow}><span style={st.logoMark}>◑</span><h1 style={st.logo}>Benservis</h1></div>
        <div style={st.altBaslik}>Operatör — Ödeme Yönetimi</div>
      </header>

      {!adminToken && (
        <div style={st.uyari}>⚠️ URL'ye ?token=... ekleyin.</div>
      )}

      {hataMesaj && <div style={st.hata}>{hataMesaj}</div>}

      {/* Özet */}
      {veri && (
        <div style={st.ozet}>
          <div style={st.ozetKart}>
            <div style={st.ozetSayi}>{odeme.filter(o => o.satici_odeme_durumu === "bekliyor").length}</div>
            <div style={st.ozetLabel}>Bekleyen Transfer</div>
          </div>
          <div style={st.ozetKart}>
            <div style={{ ...st.ozetSayi, color: AMBER }}>
              {veri.bekleyen_toplam?.toLocaleString("tr-TR")} TL
            </div>
            <div style={st.ozetLabel}>Bekleyen Toplam</div>
          </div>
        </div>
      )}

      {/* Sekmeler */}
      <div style={st.sekmeler}>
        {["bekliyor", "yapildi", "hepsi"].map(s => (
          <button
            key={s}
            style={{ ...st.sekme, ...(sekme === s ? st.sekmeAktif : {}) }}
            onClick={() => setSekme(s)}
          >
            {s === "bekliyor" ? "Bekleyenler" : s === "yapildi" ? "Yapılanlar" : "Tümü"}
          </button>
        ))}
        <button style={st.yenileBtn} onClick={() => yukle(sekme)}>↻ Yenile</button>
      </div>

      {yukleniyor && (
        <div style={st.merkez}><div style={st.spinner} /></div>
      )}

      {!yukleniyor && odeme.length === 0 && (
        <div style={st.bos}>
          {sekme === "bekliyor" ? "Bekleyen ödeme yok 🎉" : "Kayıt yok."}
        </div>
      )}

      {!yukleniyor && odeme.map(o => {
        const tarih = o.teslim_onay_tarihi
          ? new Date(o.teslim_onay_tarihi).toLocaleString("tr-TR", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })
          : "—";
        const odemeT = o.satici_odeme_tarihi
          ? new Date(o.satici_odeme_tarihi).toLocaleString("tr-TR", { day: "numeric", month: "short", year: "numeric" })
          : null;

        return (
          <div key={o.id} style={{ ...st.satir, ...(o.satici_odeme_durumu === "yapildi" ? st.satirYapildi : {}) }}>
            <div style={st.satirUst}>
              <div>
                <div style={st.satirBaslik}>{o.ilanlar?.baslik}</div>
                <div style={st.satirAlt}>Alıcı: {o.alici_ad} · Satıcı: {o.ilanlar?.satici_ad}</div>
                <div style={st.satirAlt}>Teslim onayı: {tarih}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={st.satirTutar}>{o.tutar?.toLocaleString("tr-TR")} TL</div>
                {o.iyzico_payment_id && (
                  <div style={st.iyzicoid}>iyzico: {o.iyzico_payment_id}</div>
                )}
              </div>
            </div>

            {/* IBAN */}
            <div style={st.ibanKutu}>
              <span style={st.ibanEtiket}>IBAN</span>
              <span style={st.ibanDeger}>
                {o.ilanlar?.satici_iban || <span style={{ color: "#B23A2E", fontWeight: 700 }}>⚠ IBAN yok — satıcıyla iletişime geç</span>}
              </span>
              {o.ilanlar?.satici_iban && (
                <button
                  style={st.kopyalaBtn}
                  onClick={() => navigator.clipboard.writeText(o.ilanlar.satici_iban).catch(() => {})}
                >
                  Kopyala
                </button>
              )}
            </div>

            {/* Durum / aksiyon */}
            {o.satici_odeme_durumu === "bekliyor" && konfirm !== o.id && (
              <button style={st.odemeYapBtn} onClick={() => setKonf(o.id)}>
                ✓ Ödeme Yapıldı İşaretle
              </button>
            )}

            {o.satici_odeme_durumu === "bekliyor" && konfirm === o.id && (
              <div style={st.konfirmDiv}>
                <input
                  style={st.notInput}
                  value={not}
                  onChange={e => setNot(e.target.value)}
                  placeholder="SMS'e eklenecek not (opsiyonel)"
                />
                <div style={st.konfirmBtnlar}>
                  <button style={st.vazgecBtn} onClick={() => setKonf(null)}>Vazgeç</button>
                  <button style={st.onaylaBtn} onClick={() => odemeYap(o.id)} disabled={islem}>
                    {islem ? "İşleniyor…" : `${o.tutar?.toLocaleString("tr-TR")} TL Gönderildi Onayla`}
                  </button>
                </div>
              </div>
            )}

            {o.satici_odeme_durumu === "yapildi" && (
              <div style={st.yapildiSatir}>
                ✓ Ödeme yapıldı{odemeT ? ` — ${odemeT}` : ""}
                {yapilanId === o.id && <span style={{ color: GREEN, fontWeight: 700, marginLeft: 8 }}>· SMS gönderildi</span>}
              </div>
            )}
          </div>
        );
      })}

      <footer style={st.footer}>Benservis Admin · benservis.com</footer>
    </div>
  );
}

const sWrap = {
  position: "relative", minHeight: "100vh", background: CREAM,
  fontFamily: "'Hanken Grotesk', sans-serif", color: INK,
  padding: "28px 18px 48px", maxWidth: 700, margin: "0 auto",
};

const st = {
  grain: { position: "fixed", inset: 0, pointerEvents: "none", opacity: 0.4, backgroundImage: "radial-gradient(rgba(34,48,42,.05) 1px, transparent 1px)", backgroundSize: "4px 4px", zIndex: 0 },
  merkez: { textAlign: "center", padding: "40px 0", position: "relative", zIndex: 1 },
  spinner: { width: 36, height: 36, borderRadius: "50%", border: "4px solid #E5DCC9", borderTopColor: AMBER, margin: "0 auto", animation: "spin 1s linear infinite" },

  header: { position: "relative", zIndex: 1, textAlign: "center", marginBottom: 20 },
  logoRow: { display: "flex", alignItems: "center", justifyContent: "center", gap: 10 },
  logoMark: { color: AMBER, fontSize: 28, transform: "rotate(-20deg)", display: "inline-block" },
  logo: { fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 30, margin: 0, letterSpacing: "-.02em" },
  altBaslik: { fontSize: 12, fontWeight: 700, letterSpacing: ".06em", color: "#8A7B6A", textTransform: "uppercase", marginTop: 4 },

  uyari: { position: "relative", zIndex: 1, background: "#FEF3E2", border: "1.5px solid #F0C88A", borderRadius: 10, padding: "12px 14px", marginBottom: 16, fontSize: 13.5, fontWeight: 600, color: AMBER },
  hata: { position: "relative", zIndex: 1, background: "#FDECEA", borderRadius: 10, padding: "10px 14px", marginBottom: 14, fontSize: 13.5, fontWeight: 600, color: "#B23A2E" },

  ozet: { position: "relative", zIndex: 1, display: "flex", gap: 10, marginBottom: 16 },
  ozetKart: { flex: 1, background: "#FFFDF8", border: "1px solid #E5DCC9", borderRadius: 12, padding: "14px 16px", textAlign: "center" },
  ozetSayi: { fontFamily: "'Fraunces', serif", fontSize: 26, fontWeight: 700, color: INK },
  ozetLabel: { fontSize: 12, color: "#8A7B6A", marginTop: 4, fontWeight: 600 },

  sekmeler: { position: "relative", zIndex: 1, display: "flex", gap: 8, marginBottom: 14, alignItems: "center" },
  sekme: { padding: "8px 14px", borderRadius: 9, border: "1.5px solid #DDD3BE", background: "#FFFDF8", fontSize: 13, fontWeight: 600, color: "#6E6450" },
  sekmeAktif: { border: `1.5px solid ${AMBER}`, background: "rgba(200,99,43,.08)", color: AMBER },
  yenileBtn: { marginLeft: "auto", padding: "6px 12px", borderRadius: 8, border: "1px solid #E5DCC9", background: "transparent", fontSize: 13, color: "#8A7B6A" },

  bos: { position: "relative", zIndex: 1, textAlign: "center", padding: "40px 0", fontSize: 15, color: "#9A9384" },

  satir: { position: "relative", zIndex: 1, background: "#FFFDF8", border: "1px solid #E5DCC9", borderRadius: 14, padding: "16px 18px", marginBottom: 10 },
  satirYapildi: { opacity: 0.7 },
  satirUst: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 12 },
  satirBaslik: { fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 700, marginBottom: 4 },
  satirAlt: { fontSize: 12.5, color: "#5C6660", marginBottom: 2 },
  satirTutar: { fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 700, color: AMBER },
  iyzicoid: { fontSize: 11, color: "#9A9384", marginTop: 3, fontFamily: "monospace" },

  ibanKutu: { background: "#F0EAD8", borderRadius: 9, padding: "10px 13px", display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 12 },
  ibanEtiket: { fontSize: 11, fontWeight: 700, color: "#8A7B6A", textTransform: "uppercase" },
  ibanDeger: { flex: 1, fontSize: 13.5, fontWeight: 700, fontFamily: "monospace", letterSpacing: ".03em" },
  kopyalaBtn: { padding: "4px 10px", borderRadius: 7, border: "1px solid #C9BD9E", background: "#FFFDF8", fontSize: 12, fontWeight: 600, color: "#6E6450" },

  odemeYapBtn: { width: "100%", padding: "12px", borderRadius: 11, border: "none", background: GREEN, color: "#fff", fontWeight: 700, fontSize: 14 },

  konfirmDiv: { marginTop: 2 },
  notInput: { width: "100%", padding: "9px 12px", borderRadius: 9, border: "1.5px solid #DDD3BE", fontSize: 13.5, fontFamily: "'Hanken Grotesk', sans-serif", marginBottom: 10, background: "#FFFDF8" },
  konfirmBtnlar: { display: "flex", gap: 8 },
  vazgecBtn: { flex: 1, padding: "11px", borderRadius: 10, border: "1.5px solid #DDD3BE", background: "transparent", fontSize: 13.5, fontWeight: 600, color: "#8A7B6A" },
  onaylaBtn: { flex: 2, padding: "11px", borderRadius: 10, border: "none", background: GREEN, color: "#fff", fontWeight: 700, fontSize: 13.5 },

  yapildiSatir: { fontSize: 13, color: GREEN, fontWeight: 600 },

  footer: { position: "relative", zIndex: 1, textAlign: "center", fontSize: 11.5, color: "#A59E8E", marginTop: 24 },
};

// src/SaticiPaneli.jsx  (ikinci el satıcı paneli)
// Satıcının gelen talepleri yönettiği panel — /ikinci-el/satis/:satici_token
// NOT: Bu bileşen /panel'deki ServisPanel'den farklıdır.
import React, { useState, useEffect, useRef } from "react";

const FONT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700&family=Hanken+Grotesk:wght@400;600;700&display=swap');`;
const INK = "#1E293B", CREAM = "#F1F5F9", AMBER = "#2563EB", GREEN = "#22C55E";

const CSS = `
* { box-sizing:border-box; }
@keyframes spin { to { transform:rotate(360deg); } }
input:focus, textarea:focus { outline:none; border-color:${AMBER}!important; box-shadow:0 0 0 3px rgba(37,99,235,.13); }
button { cursor:pointer; font-family:'Hanken Grotesk',sans-serif; }
`;

const DURUM_LABEL = {
  ilgileniliyor:    { label: "İlgileniyor",       renk: "#64748B", bg: "#F1F5F9" },
  odeme_bekleniyor: { label: "Ödeme bekleniyor",  renk: AMBER,     bg: "rgba(37,99,235,.08)" },
  odendi:           { label: "✓ Ödendi",          renk: GREEN,     bg: "#F1F5F9" },
  teslim_onaylandi: { label: "✓✓ Tamamlandı",     renk: GREEN,     bg: "#F1F5F9" },
  iptal:            { label: "✕ İptal",           renk: "#DC2626", bg: "#FEE2E2" },
};

export default function SaticiPaneli({ saticiToken }) {
  const [veri, setVeri]       = useState(null);
  const [secili, setSecili]   = useState(null);  // seçili talep_id
  const [talepVeri, setTV]    = useState(null);  // seçili talepin detayları
  const [mesaj, setMesaj]     = useState("");
  const [gonderiyor, setGon]  = useState(false);
  const [yukleniyor, setYuk]  = useState(true);
  const [tDetYuk, setTDY]     = useState(false);
  const sonMesajRef           = useRef(null);

  const yukle = async () => {
    try {
      const res  = await fetch(`/api/talep/satici/${saticiToken}`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      setVeri(data);
    } catch { setVeri(null); }
    finally  { setYuk(false); }
  };

  const talepYukle = async (talep_id) => {
    setTDY(true);
    try {
      const res  = await fetch(`/api/talep/satici/${saticiToken}?talep_id=${talep_id}`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      setTV(data);
    } catch { setTV(null); }
    finally  { setTDY(false); }
  };

  useEffect(() => { yukle(); }, [saticiToken]);

  useEffect(() => {
    if (secili) talepYukle(secili);
  }, [secili]);

  useEffect(() => {
    if (!secili) return;
    const t = setInterval(() => { if (!gonderiyor) talepYukle(secili); }, 10000);
    return () => clearInterval(t);
  }, [secili, gonderiyor]);

  useEffect(() => {
    sonMesajRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [talepVeri?.mesajlar?.length]);

  const mesajGonder = async () => {
    if (!mesaj.trim() || gonderiyor || !secili) return;
    setGon(true);
    try {
      await fetch(`/api/talep/satici/${saticiToken}`, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ action: "mesaj", talep_id: secili, icerik: mesaj.trim() }),
      });
      setMesaj("");
      await talepYukle(secili);
    } finally { setGon(false); }
  };

  if (yukleniyor) {
    return (
      <div style={sWrap}><style>{FONT}</style>
        <div style={st.merkez}><div style={st.spinner} /><p style={st.yukMetin}>Yükleniyor…</p></div>
      </div>
    );
  }

  if (!veri) {
    return (
      <div style={sWrap}><style>{FONT}</style>
        <div style={st.merkez}>
          <div style={{ fontSize: 44, marginBottom: 12 }}>🔍</div>
          <div style={st.baslik404}>Panel bulunamadı</div>
          <a href="/ikinci-el" style={st.geriBtn}>← İlanlara Git</a>
        </div>
      </div>
    );
  }

  const { ilan, talepler } = veri;

  return (
    <div style={sWrap}>
      <style>{FONT}{CSS}</style>
      <div style={st.grain} />

      <header style={st.header}>
        <div style={st.logoRow}><span style={st.logoMark}>◑</span><h1 style={st.logo}>Benservis</h1></div>
        <div style={st.altBaslik}>Satıcı Paneli</div>
      </header>

      {/* İlan özeti */}
      <div style={st.ilanKart}>
        <div style={st.ilanBaslik}>{ilan.baslik}</div>
        <div style={st.ilanFiyat}>{ilan.fiyat.toLocaleString("tr-TR")} TL</div>
        {ilan.satici_iban && (
          <div style={st.ibanSatir}>
            🏦 IBAN: <strong>{ilan.satici_iban}</strong>
            <span style={st.ibanNot}>(Benservis bu IBAN'a transfer yapacak)</span>
          </div>
        )}
        {!ilan.satici_iban && (
          <div style={st.ibanUyari}>⚠️ IBAN bilgisi eksik — Benservis'e iletişime geçin.</div>
        )}
      </div>

      {/* İki sütun: liste + detay */}
      <div style={st.split}>
        {/* Talep listesi */}
        <div style={st.talepListe}>
          <div style={st.listeBolumBaslik}>
            Talepler ({talepler.length})
            <button style={st.yenileBtn} onClick={yukle}>↻</button>
          </div>
          {talepler.length === 0 && (
            <p style={st.bosMetin}>Henüz talep yok.</p>
          )}
          {talepler.map(t => {
            const dc = DURUM_LABEL[t.odeme_durumu] || DURUM_LABEL.ilgileniliyor;
            return (
              <button
                key={t.id}
                style={{ ...st.talepBtn, ...(secili === t.id ? st.talepBtnSecili : {}) }}
                onClick={() => setSecili(t.id)}
              >
                <div style={st.talepBtnAd}>
                  {t.alici_ad}
                  {t.okunmamis > 0 && <span style={st.okunmamisBadge}>{t.okunmamis}</span>}
                </div>
                <div style={{ ...st.talepBtnDurum, color: dc.renk }}>{dc.label}</div>
                <div style={st.talepBtnTarih}>
                  {new Date(t.created_at).toLocaleDateString("tr-TR", { day: "numeric", month: "short" })}
                </div>
              </button>
            );
          })}
        </div>

        {/* Talep detayı */}
        <div style={st.talepDetay}>
          {!secili && (
            <div style={st.secimBekle}>← Talep seç</div>
          )}

          {secili && tDetYuk && (
            <div style={st.detayYuk}><div style={st.spinnerKucuk} /></div>
          )}

          {secili && !tDetYuk && talepVeri && (() => {
            const { talep, mesajlar } = talepVeri;
            const dc = DURUM_LABEL[talep.odeme_durumu] || DURUM_LABEL.ilgileniliyor;
            const kapal = ["teslim_onaylandi", "iptal"].includes(talep.odeme_durumu);
            return (
              <>
                <div style={st.detayHeader}>
                  <div style={st.detayAd}>{talep.alici_ad}</div>
                  <span style={{ ...st.durumBadge, background: dc.bg, color: dc.renk }}>{dc.label}</span>
                </div>

                {/* Ödeme onaylandıysa kargo/teslim uyarısı */}
                {talep.odeme_durumu === "odendi" && (
                  <div style={st.gonderUyari}>
                    ✅ Ödeme alındı. Ürünü alıcıya gönderin/teslim edin. Alıcı onayladıktan sonra ödeme IBAN'ınıza aktarılacak.
                  </div>
                )}

                <div style={st.mesajList}>
                  {mesajlar.length === 0 && (
                    <p style={st.mesajYok}>Henüz mesaj yok.</p>
                  )}
                  {mesajlar.map((m, i) => (
                    <div
                      key={m.id}
                      ref={i === mesajlar.length - 1 ? sonMesajRef : null}
                      style={{ ...st.bubble, ...(m.gonderen === "satici" ? st.bubbleSatici : st.bubbleAlici) }}
                    >
                      <div style={st.bubbleIcerik}>{m.icerik}</div>
                      <div style={st.bubbleTarih}>
                        {m.gonderen === "satici" ? "Siz" : "Alıcı"} ·{" "}
                        {new Date(m.created_at).toLocaleString("tr-TR", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}
                      </div>
                    </div>
                  ))}
                </div>

                {!kapal && (
                  <div style={st.mesajGiris}>
                    <textarea
                      style={st.mesajInput}
                      value={mesaj}
                      onChange={e => setMesaj(e.target.value)}
                      onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); mesajGonder(); } }}
                      placeholder="Alıcıya mesaj yaz…"
                      rows={2}
                      maxLength={800}
                    />
                    <button style={st.mesajBtn} onClick={mesajGonder} disabled={!mesaj.trim() || gonderiyor}>
                      {gonderiyor ? "…" : "→"}
                    </button>
                  </div>
                )}
                {kapal && <p style={st.kapaliMetin}>Bu talep kapatıldı.</p>}
              </>
            );
          })()}
        </div>
      </div>

      <a href="/ikinci-el" style={st.altLink}>← Tüm İlanlara Dön</a>
      <footer style={st.footer}>Benservis İkinci El · benservis.com</footer>
    </div>
  );
}

const sWrap = {
  position: "relative", minHeight: "100vh", background: CREAM,
  fontFamily: "'Hanken Grotesk', sans-serif", color: INK,
  padding: "28px 18px 48px", maxWidth: 860, margin: "0 auto",
};

const st = {
  grain: { position: "fixed", inset: 0, pointerEvents: "none", opacity: 0.4, backgroundImage: "radial-gradient(rgba(30,41,59,.05) 1px, transparent 1px)", backgroundSize: "4px 4px", zIndex: 0 },
  merkez: { textAlign: "center", paddingTop: 60, position: "relative", zIndex: 1 },
  spinner: { width: 36, height: 36, borderRadius: "50%", border: "4px solid #E2E8F0", borderTopColor: AMBER, margin: "0 auto 16px", animation: "spin 1s linear infinite" },
  spinnerKucuk: { width: 24, height: 24, borderRadius: "50%", border: "3px solid #E2E8F0", borderTopColor: AMBER, animation: "spin 1s linear infinite", margin: "24px auto" },
  yukMetin: { fontFamily: "'Fraunces', serif", fontSize: 16, color: "#475569" },
  baslik404: { fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 700, marginBottom: 16 },
  geriBtn: { display: "inline-block", padding: "11px 22px", borderRadius: 10, background: AMBER, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none" },

  header: { position: "relative", zIndex: 1, textAlign: "center", marginBottom: 18 },
  logoRow: { display: "flex", alignItems: "center", justifyContent: "center", gap: 10 },
  logoMark: { color: AMBER, fontSize: 28, transform: "rotate(-20deg)", display: "inline-block" },
  logo: { fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 30, margin: 0, letterSpacing: "-.02em" },
  altBaslik: { fontSize: 12, fontWeight: 700, letterSpacing: ".06em", color: "#64748B", textTransform: "uppercase", marginTop: 4 },

  ilanKart: { position: "relative", zIndex: 1, background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 14, padding: "14px 18px", marginBottom: 16 },
  ilanBaslik: { fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 700, marginBottom: 4 },
  ilanFiyat: { fontSize: 22, fontWeight: 700, color: AMBER, fontFamily: "'Fraunces', serif", marginBottom: 6 },
  ibanSatir: { fontSize: 13, color: "#475569" },
  ibanNot: { marginLeft: 8, color: "#94A3B8", fontSize: 12 },
  ibanUyari: { fontSize: 13, color: AMBER, fontWeight: 600 },

  split: { position: "relative", zIndex: 1, display: "flex", gap: 14, alignItems: "flex-start" },

  talepListe: { width: 200, flexShrink: 0 },
  listeBolumBaslik: { fontSize: 12, fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: ".04em", marginBottom: 10, display: "flex", alignItems: "center", justifyContent: "space-between" },
  yenileBtn: { background: "none", border: "none", fontSize: 15, color: "#64748B", padding: "2px 6px" },
  bosMetin: { fontSize: 13, color: "#94A3B8" },
  talepBtn: { display: "block", width: "100%", marginBottom: 6, padding: "10px 12px", borderRadius: 10, border: "1px solid #E2E8F0", background: "#F8FAFC", textAlign: "left", cursor: "pointer" },
  talepBtnSecili: { border: `1.5px solid ${AMBER}`, background: "rgba(37,99,235,.06)" },
  talepBtnAd: { fontWeight: 700, fontSize: 13, marginBottom: 3, display: "flex", alignItems: "center", gap: 6 },
  okunmamisBadge: { background: AMBER, color: "#fff", borderRadius: "50%", width: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700 },
  talepBtnDurum: { fontSize: 11, fontWeight: 700 },
  talepBtnTarih: { fontSize: 11, color: "#94A3B8", marginTop: 2 },

  talepDetay: { flex: 1, background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 14, overflow: "hidden", minHeight: 300 },
  secimBekle: { display: "flex", alignItems: "center", justifyContent: "center", height: 200, fontSize: 13.5, color: "#94A3B8" },
  detayYuk: { display: "flex", alignItems: "center", justifyContent: "center", height: 200 },
  detayHeader: { padding: "13px 16px", borderBottom: "1px solid #F1F5F9", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 },
  detayAd: { fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 700 },
  durumBadge: { fontSize: 11.5, fontWeight: 700, borderRadius: 999, padding: "3px 10px" },
  gonderUyari: { margin: "10px 14px 0", padding: "10px 13px", background: "#F1F5F9", borderRadius: 9, fontSize: 13, fontWeight: 600, color: GREEN, lineHeight: 1.4 },

  mesajList: { padding: "12px 14px", minHeight: 120, maxHeight: 300, overflowY: "auto", display: "flex", flexDirection: "column", gap: 9 },
  mesajYok: { fontSize: 13, color: "#94A3B8", textAlign: "center", paddingTop: 16 },
  bubble: { maxWidth: "78%", borderRadius: 14, padding: "9px 13px" },
  bubbleSatici: { alignSelf: "flex-end", background: AMBER, color: "#fff", borderBottomRightRadius: 4 },
  bubbleAlici: { alignSelf: "flex-start", background: "#F1F5F9", color: INK, borderBottomLeftRadius: 4 },
  bubbleIcerik: { fontSize: 13.5, lineHeight: 1.45 },
  bubbleTarih: { fontSize: 10.5, opacity: 0.7, marginTop: 3 },
  mesajGiris: { padding: "10px 12px", borderTop: "1px solid #F1F5F9", display: "flex", gap: 8, alignItems: "flex-end" },
  mesajInput: { flex: 1, padding: "9px 12px", borderRadius: 10, border: "1.5px solid #E2E8F0", fontSize: 13.5, fontFamily: "'Hanken Grotesk', sans-serif", resize: "none", background: "#F8FAFC", color: INK },
  mesajBtn: { padding: "9px 14px", borderRadius: 10, border: "none", background: AMBER, color: "#fff", fontWeight: 700, fontSize: 16 },
  kapaliMetin: { padding: "10px 14px", fontSize: 13, color: "#94A3B8", borderTop: "1px solid #F1F5F9", textAlign: "center" },

  altLink: { position: "relative", zIndex: 1, display: "block", textAlign: "center", marginTop: 20, fontSize: 13, color: "#64748B", fontWeight: 600, textDecoration: "none" },
  footer: { position: "relative", zIndex: 1, textAlign: "center", fontSize: 11.5, color: "#94A3B8", marginTop: 10 },
};

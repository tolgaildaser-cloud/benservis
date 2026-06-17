// src/AliciPaneli.jsx
// Alıcı mesaj + ödeme + teslim onayı paneli — /ikinci-el/alici/:token
import React, { useState, useEffect, useRef } from "react";

const FONT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700&family=Hanken+Grotesk:wght@400;600;700&display=swap');`;
const INK = "#1E293B", CREAM = "#F1F5F9", AMBER = "#2563EB", GREEN = "#22C55E";

const CSS = `
* { box-sizing:border-box; }
@keyframes spin { to { transform:rotate(360deg); } }
@keyframes rise { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:none; } }
input:focus, textarea:focus { outline:none; border-color:${AMBER}!important; box-shadow:0 0 0 3px rgba(37,99,235,.13); }
button { cursor:pointer; font-family:'Hanken Grotesk',sans-serif; }
`;

const DURUM_LABEL = {
  ilgileniliyor:    { label: "Satıcı yanıtı bekleniyor",    renk: "#64748B", bg: "#F1F5F9" },
  odeme_bekleniyor: { label: "Ödeme bekleniyor",            renk: AMBER,     bg: "rgba(37,99,235,.08)" },
  odendi:           { label: "✓ Ödeme alındı",              renk: GREEN,     bg: "#F1F5F9" },
  teslim_onaylandi: { label: "✓✓ Teslim onaylandı",         renk: GREEN,     bg: "#F1F5F9" },
  iptal:            { label: "✕ İptal edildi",              renk: "#DC2626", bg: "#FEE2E2" },
};

export default function AliciPaneli({ token }) {
  const [veri, setVeri]           = useState(null);
  const [yukleniyor, setYuk]      = useState(true);
  const [mesaj, setMesaj]         = useState("");
  const [gonderiyor, setGon]      = useState(false);
  const [teslimOnayModal, setTOM] = useState(false);
  const [teslimOnaylaniyor, setTO]= useState(false);
  const sonMesajRef               = useRef(null);

  // URL parametresi — ödeme sonucu
  const params      = new URLSearchParams(window.location.search);
  const odemeResult = params.get("odeme");

  const yukle = async () => {
    try {
      const res = await fetch(`/api/talep/alici/${token}`);
      if (!res.ok) throw new Error("404");
      const data = await res.json();
      setVeri(data);
    } catch {
      setVeri(null);
    } finally {
      setYuk(false);
    }
  };

  useEffect(() => { yukle(); }, [token]);

  // Her 15 saniyede auto-refresh
  useEffect(() => {
    const t = setInterval(() => { if (!gonderiyor && !teslimOnaylaniyor) yukle(); }, 15000);
    return () => clearInterval(t);
  }, [gonderiyor, teslimOnaylaniyor]);

  // Son mesaja scroll
  useEffect(() => {
    sonMesajRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [veri?.mesajlar?.length]);

  const mesajGonder = async () => {
    if (!mesaj.trim() || gonderiyor) return;
    setGon(true);
    try {
      await fetch(`/api/talep/alici/${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "mesaj", icerik: mesaj.trim() }),
      });
      setMesaj("");
      await yukle();
    } finally { setGon(false); }
  };

  const teslimOnayla = async () => {
    setTO(true);
    try {
      await fetch(`/api/talep/alici/${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "teslim_onayla" }),
      });
      setTOM(false);
      await yukle();
    } finally { setTO(false); }
  };

  // ── Loading ──────────────────────────────────────────────────────────────
  if (yukleniyor) {
    return (
      <div style={sWrap}>
        <style>{FONT}</style>
        <div style={st.merkez}><div style={st.spinner} /><p style={st.yukMetin}>Yükleniyor…</p></div>
      </div>
    );
  }

  if (!veri) {
    return (
      <div style={sWrap}>
        <style>{FONT}</style>
        <div style={st.merkez}>
          <div style={{ fontSize: 44, marginBottom: 12 }}>🔍</div>
          <div style={st.baslik404}>Talep bulunamadı</div>
          <a href="/ikinci-el" style={st.geriBtn}>← İlanlara Git</a>
        </div>
      </div>
    );
  }

  const { talep, ilan, mesajlar } = veri;
  const dc = DURUM_LABEL[talep.odeme_durumu] || DURUM_LABEL.ilgileniliyor;
  const kapal = ["teslim_onaylandi", "iptal"].includes(talep.odeme_durumu);

  return (
    <div style={sWrap}>
      <style>{FONT}{CSS}</style>
      <div style={st.grain} />

      <header style={st.header}>
        <div style={st.logoRow}><span style={st.logoMark}>◑</span><h1 style={st.logo}>Benservis</h1></div>
        <div style={st.altBaslik}>Alıcı Paneli</div>
      </header>

      {/* Ödeme sonucu banner */}
      {odemeResult === "basarili" && (
        <div style={{ ...st.banner, background: "#F1F5F9", borderColor: GREEN, color: GREEN }}>
          ✓ Ödemeniz alındı! Satıcı ürünü gönderecek.
        </div>
      )}
      {odemeResult === "basarisiz" && (
        <div style={{ ...st.banner, background: "#FEE2E2", borderColor: "#FECACA", color: "#DC2626" }}>
          ✕ Ödeme başarısız oldu. Tekrar deneyebilirsiniz.
        </div>
      )}

      {/* İlan özeti */}
      <div style={st.ilanKart}>
        {ilan.fotograflar?.[0] && (
          <img src={ilan.fotograflar[0]} alt={ilan.baslik} style={st.ilanFoto} />
        )}
        <div style={st.ilanIcerik}>
          <div style={st.ilanBaslik}>{ilan.baslik}</div>
          <div style={st.ilanFiyat}>{talep.tutar.toLocaleString("tr-TR")} TL</div>
          {ilan.konum && <div style={st.ilanKonum}>📍 {ilan.konum}</div>}
          <div style={{ ...st.durumBadge, background: dc.bg, color: dc.renk }}>
            {dc.label}
          </div>
        </div>
      </div>

      {/* Ödeme CTA */}
      {talep.odeme_durumu === "ilgileniliyor" && (
        <div style={st.odemeKart}>
          <div style={st.odemeBaslik}>🔒 Güvenli Ödeme</div>
          <p style={st.odemeAcik}>
            Ödeme Benservis güvencesiyle tutulur. Ürünü teslim aldığında onaylayana kadar satıcıya aktarılmaz.
          </p>
          <a
            href={`/api/odeme/form?alici_token=${token}`}
            style={st.odemeCta}
          >
            Ödemeyi Başlat — {talep.tutar.toLocaleString("tr-TR")} TL →
          </a>
        </div>
      )}

      {/* Teslim Onayı CTA */}
      {talep.odeme_durumu === "odendi" && !teslimOnayModal && (
        <div style={{ ...st.odemeKart, borderColor: GREEN }}>
          <div style={{ ...st.odemeBaslik, color: GREEN }}>✓ Ödeme alındı</div>
          <p style={st.odemeAcik}>Ürünü teslim aldıktan sonra onaylamanız gerekiyor. Onayladığınızda ödeme satıcıya aktarılır.</p>
          <button style={st.teslimCta} onClick={() => setTOM(true)}>
            Ürünü Teslim Aldım, Onaylıyorum →
          </button>
        </div>
      )}

      {/* Teslim onay modal */}
      {teslimOnayModal && (
        <div style={st.modalArka}>
          <div style={st.modal}>
            <div style={st.modalBaslik}>Teslim Onayı</div>
            <p style={st.modalMetin}>
              Ürünü teslim aldığınızı onaylıyorsunuz. Bu işlem geri alınamaz ve ödeme satıcıya aktarılacak.
            </p>
            <div style={st.modalBtnlar}>
              <button style={st.modalVazgec} onClick={() => setTOM(false)}>Vazgeç</button>
              <button style={st.modalOnayla} onClick={teslimOnayla} disabled={teslimOnaylaniyor}>
                {teslimOnaylaniyor ? "Onaylanıyor…" : "Evet, Teslim Aldım"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Teslim tamamlandı */}
      {talep.odeme_durumu === "teslim_onaylandi" && (
        <div style={{ ...st.odemeKart, borderColor: GREEN }}>
          <div style={{ fontSize: 28, marginBottom: 8 }}>🎉</div>
          <div style={{ ...st.odemeBaslik, color: GREEN }}>İşlem Tamamlandı</div>
          <p style={st.odemeAcik}>Teslim onayladınız. Ödeme satıcıya aktarılmaktadır.</p>
        </div>
      )}

      {/* Mesajlaşma */}
      <div style={st.mesajKart}>
        <div style={st.mesajBaslik}>💬 Satıcıyla Konuş</div>
        <div style={st.mesajList}>
          {mesajlar.length === 0 && (
            <p style={st.mesajYok}>Henüz mesaj yok. Satıcıya soru sorabilirsiniz.</p>
          )}
          {mesajlar.map((m, i) => (
            <div
              key={m.id}
              ref={i === mesajlar.length - 1 ? sonMesajRef : null}
              style={{ ...st.mesajBubble, ...(m.gonderen === "alici" ? st.bubbleAlici : st.bubbleSatici) }}
            >
              <div style={st.bubbleIcerik}>{m.icerik}</div>
              <div style={st.bubbleTarih}>
                {m.gonderen === "alici" ? "Siz" : "Satıcı"} ·{" "}
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
              placeholder="Mesajınızı yazın…"
              rows={2}
              maxLength={800}
            />
            <button style={st.mesajBtn} onClick={mesajGonder} disabled={!mesaj.trim() || gonderiyor}>
              {gonderiyor ? "…" : "→"}
            </button>
          </div>
        )}
        {kapal && <p style={st.kapaliMetin}>Bu talep kapatıldı, mesaj gönderilemez.</p>}
      </div>

      <a href="/ikinci-el" style={st.altLink}>← Tüm İlanlara Dön</a>
      <footer style={st.footer}>Benservis İkinci El · benservis.com</footer>
    </div>
  );
}

const sWrap = {
  position: "relative", minHeight: "100vh", background: CREAM,
  fontFamily: "'Hanken Grotesk', sans-serif", color: INK,
  padding: "28px 18px 48px", maxWidth: 600, margin: "0 auto",
};

const st = {
  grain: { position: "fixed", inset: 0, pointerEvents: "none", opacity: 0.4, backgroundImage: "radial-gradient(rgba(30,41,59,.05) 1px, transparent 1px)", backgroundSize: "4px 4px", zIndex: 0 },
  merkez: { textAlign: "center", paddingTop: 60, position: "relative", zIndex: 1 },
  spinner: { width: 36, height: 36, borderRadius: "50%", border: "4px solid #E2E8F0", borderTopColor: AMBER, margin: "0 auto 16px", animation: "spin 1s linear infinite" },
  yukMetin: { fontFamily: "'Fraunces', serif", fontSize: 16, color: "#475569" },
  baslik404: { fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 700, marginBottom: 16 },
  geriBtn: { display: "inline-block", padding: "11px 22px", borderRadius: 10, background: AMBER, color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none" },

  header: { position: "relative", zIndex: 1, textAlign: "center", marginBottom: 18 },
  logoRow: { display: "flex", alignItems: "center", justifyContent: "center", gap: 10 },
  logoMark: { color: AMBER, fontSize: 28, transform: "rotate(-20deg)", display: "inline-block" },
  logo: { fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 30, margin: 0, letterSpacing: "-.02em" },
  altBaslik: { fontSize: 12, fontWeight: 700, letterSpacing: ".06em", color: "#64748B", textTransform: "uppercase", marginTop: 4 },

  banner: { position: "relative", zIndex: 1, borderRadius: 10, border: "1.5px solid", padding: "11px 14px", marginBottom: 14, fontSize: 13.5, fontWeight: 700, textAlign: "center" },

  ilanKart: { position: "relative", zIndex: 1, background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 14, overflow: "hidden", display: "flex", marginBottom: 12 },
  ilanFoto: { width: 90, height: 90, objectFit: "cover", flexShrink: 0 },
  ilanIcerik: { padding: "12px 14px", flex: 1 },
  ilanBaslik: { fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 700, marginBottom: 4, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  ilanFiyat: { fontSize: 20, fontWeight: 700, color: AMBER, fontFamily: "'Fraunces', serif", marginBottom: 4 },
  ilanKonum: { fontSize: 12, color: "#64748B", marginBottom: 6 },
  durumBadge: { display: "inline-block", fontSize: 12, fontWeight: 700, borderRadius: 999, padding: "3px 10px" },

  odemeKart: { position: "relative", zIndex: 1, background: "#F8FAFC", border: "1.5px solid #E2E8F0", borderRadius: 14, padding: 18, marginBottom: 12 },
  odemeBaslik: { fontFamily: "'Fraunces', serif", fontSize: 17, fontWeight: 700, marginBottom: 8, color: INK },
  odemeAcik: { fontSize: 13.5, color: "#475569", lineHeight: 1.5, marginBottom: 14 },
  odemeCta: { display: "block", textAlign: "center", padding: 14, borderRadius: 12, background: AMBER, color: "#fff", fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 8px 20px -8px rgba(37,99,235,.6)" },
  teslimCta: { width: "100%", padding: 14, borderRadius: 12, border: "none", background: GREEN, color: "#fff", fontWeight: 700, fontSize: 15, boxShadow: "0 8px 20px -8px rgba(34,197,94,.6)" },

  modalArka: { position: "fixed", inset: 0, background: "rgba(30,41,59,.6)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 },
  modal: { background: CREAM, borderRadius: 18, padding: 24, maxWidth: 380, width: "100%", boxShadow: "0 20px 60px rgba(30,41,59,.4)" },
  modalBaslik: { fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 700, marginBottom: 12 },
  modalMetin: { fontSize: 14, color: "#475569", lineHeight: 1.5, marginBottom: 20 },
  modalBtnlar: { display: "flex", gap: 10 },
  modalVazgec: { flex: 1, padding: 12, borderRadius: 10, border: "1.5px solid #E2E8F0", background: "transparent", fontSize: 14, fontWeight: 600, color: "#64748B" },
  modalOnayla: { flex: 1, padding: 12, borderRadius: 10, border: "none", background: GREEN, color: "#fff", fontSize: 14, fontWeight: 700 },

  mesajKart: { position: "relative", zIndex: 1, background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 14, overflow: "hidden", marginBottom: 16 },
  mesajBaslik: { padding: "13px 16px", borderBottom: "1px solid #F1F5F9", fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 700 },
  mesajList: { padding: "12px 14px", minHeight: 120, maxHeight: 340, overflowY: "auto", display: "flex", flexDirection: "column", gap: 10 },
  mesajYok: { fontSize: 13, color: "#94A3B8", textAlign: "center", paddingTop: 20 },
  mesajBubble: { maxWidth: "80%", borderRadius: 14, padding: "9px 13px" },
  bubbleAlici: { alignSelf: "flex-end", background: AMBER, color: "#fff", borderBottomRightRadius: 4 },
  bubbleSatici: { alignSelf: "flex-start", background: "#F1F5F9", color: INK, borderBottomLeftRadius: 4 },
  bubbleIcerik: { fontSize: 14, lineHeight: 1.45 },
  bubbleTarih: { fontSize: 10.5, opacity: 0.7, marginTop: 3 },
  mesajGiris: { padding: "10px 12px", borderTop: "1px solid #F1F5F9", display: "flex", gap: 8, alignItems: "flex-end" },
  mesajInput: { flex: 1, padding: "9px 12px", borderRadius: 10, border: "1.5px solid #E2E8F0", fontSize: 14, fontFamily: "'Hanken Grotesk', sans-serif", resize: "none", background: "#F8FAFC", color: INK },
  mesajBtn: { padding: "9px 16px", borderRadius: 10, border: "none", background: AMBER, color: "#fff", fontWeight: 700, fontSize: 16 },
  kapaliMetin: { padding: "10px 14px", fontSize: 13, color: "#94A3B8", borderTop: "1px solid #F1F5F9", textAlign: "center" },

  altLink: { position: "relative", zIndex: 1, display: "block", textAlign: "center", fontSize: 13, color: "#64748B", fontWeight: 600, textDecoration: "none", marginBottom: 8 },
  footer: { position: "relative", zIndex: 1, textAlign: "center", fontSize: 11.5, color: "#94A3B8", marginTop: 8 },
};

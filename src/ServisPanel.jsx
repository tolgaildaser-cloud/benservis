// src/ServisPanel.jsx
// Servis sağlayıcı paneli — /panel path'inde gösterilir.
// Supabase Auth ile giriş, iş listesi, kabul/ret/tamamla.
import React, { useState, useEffect } from "react";
import { supabase } from "./lib/supabase.js";

const INK = "#22302A", CREAM = "#F5EFE2", AMBER = "#C8632B", GREEN = "#3A7D44";
const FONT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700&family=Hanken+Grotesk:wght@400;500;600;700&display=swap');`;

const DURUM_LABEL = {
  bekliyor: { label: "Bekliyor", color: AMBER },
  onaylandi: { label: "Onaylandı", color: GREEN },
  reddedildi: { label: "Reddedildi", color: "#B23A2E" },
  suresi_doldu: { label: "Süresi Doldu", color: "#888" },
  tamamlandi: { label: "Tamamlandı", color: GREEN },
};

function GirisFormu({ onGiris }) {
  const [email, setEmail] = useState("");
  const [sifre, setSifre] = useState("");
  const [hata, setHata] = useState("");
  const [yukleniyor, setYukleniyor] = useState(false);

  const girisYap = async (e) => {
    e.preventDefault();
    setHata("");
    setYukleniyor(true);
    const { data, error } = await supabase.auth.signInWithPassword({ email, password: sifre });
    setYukleniyor(false);
    if (error) { setHata(error.message); return; }
    if (!data.user.user_metadata?.servis_id) {
      setHata("Hesabınız yapılandırılmamış. Lütfen Benservis ile iletişime geçin.");
      await supabase.auth.signOut();
      return;
    }
    onGiris(data.session);
  };

  return (
    <div style={{ minHeight: "100vh", background: INK, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Hanken Grotesk', sans-serif" }}>
      <style>{FONT}</style>
      <div style={{ background: "#2d3e35", borderRadius: 18, padding: 32, width: "100%", maxWidth: 360 }}>
        <div style={{ fontFamily: "'Fraunces', serif", color: CREAM, fontSize: 22, fontWeight: 700, marginBottom: 24, textAlign: "center" }}>
          🔧 Benservis Panel
        </div>
        <form onSubmit={girisYap}>
          <label style={{ color: "#aaa", fontSize: 12, display: "block", marginBottom: 4 }}>E-posta</label>
          <input
            type="email" value={email} onChange={e => setEmail(e.target.value)} required
            style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "none", background: "#22302A", color: CREAM, fontSize: 14, marginBottom: 14, boxSizing: "border-box" }}
          />
          <label style={{ color: "#aaa", fontSize: 12, display: "block", marginBottom: 4 }}>Şifre</label>
          <input
            type="password" value={sifre} onChange={e => setSifre(e.target.value)} required
            style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "none", background: "#22302A", color: CREAM, fontSize: 14, marginBottom: 20, boxSizing: "border-box" }}
          />
          {hata && <div style={{ color: "#F87171", fontSize: 13, marginBottom: 14 }}>{hata}</div>}
          <button
            type="submit" disabled={yukleniyor}
            style={{ width: "100%", padding: 12, borderRadius: 10, border: "none", background: AMBER, color: "white", fontWeight: 700, fontSize: 15, cursor: "pointer" }}
          >
            {yukleniyor ? "Giriş yapılıyor..." : "Giriş Yap"}
          </button>
        </form>
      </div>
    </div>
  );
}

function KabulModal({ is, onKapat, onKabul }) {
  const [pencere, setPencere] = useState("");
  const [yukleniyor, setYukleniyor] = useState(false);

  const kabul = async () => {
    if (!pencere.trim()) return;
    setYukleniyor(true);
    await onKabul(is.id, pencere);
    setYukleniyor(false);
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200 }}>
      <div style={{ background: CREAM, borderRadius: 16, padding: 24, width: "90%", maxWidth: 360, fontFamily: "'Hanken Grotesk', sans-serif" }}>
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: 17, fontWeight: 700, color: INK, marginBottom: 16 }}>
          Talebi Kabul Et
        </div>
        <div style={{ fontSize: 13, color: "#666", marginBottom: 16 }}>
          <strong>{is.musteri_ad}</strong> — {is.adres}<br />
          {is.cihaz && <>{is.cihaz} · {is.belirti}</>}
        </div>
        <label style={{ fontSize: 12, fontWeight: 700, color: INK, display: "block", marginBottom: 6 }}>
          Geliş Saati Penceresi
        </label>
        <input
          value={pencere} onChange={e => setPencere(e.target.value)}
          placeholder="örn. Yarın 10:00–12:00"
          style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1.5px solid #DDD3BE", fontSize: 14, fontFamily: "'Hanken Grotesk', sans-serif", boxSizing: "border-box", marginBottom: 16 }}
        />
        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={onKapat} style={{ flex: 1, padding: 11, borderRadius: 10, border: "1.5px solid #DDD3BE", background: "white", fontSize: 14, cursor: "pointer" }}>
            İptal
          </button>
          <button onClick={kabul} disabled={!pencere.trim() || yukleniyor}
            style={{ flex: 2, padding: 11, borderRadius: 10, border: "none", background: GREEN, color: "white", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
            {yukleniyor ? "Onaylanıyor..." : "✓ Onayla + SMS Gönder"}
          </button>
        </div>
      </div>
    </div>
  );
}

function IsKarti({ is, jwtToken, onGuncelle }) {
  const [kabulModal, setKabulModal] = useState(false);
  const [yukleniyor, setYukleniyor] = useState(false);
  const { label, color } = DURUM_LABEL[is.durum] || { label: is.durum, color: "#888" };

  const islemYap = async (action, gelis_penceresi) => {
    setYukleniyor(true);
    try {
      const res = await fetch(`/api/is/${is.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${jwtToken}` },
        body: JSON.stringify({ action, gelis_penceresi }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      onGuncelle(is.id, data.durum);
    } catch (e) { console.error("İşlem hatası:", e.message); }
    setYukleniyor(false);
  };

  return (
    <>
      {kabulModal && (
        <KabulModal
          is={is}
          onKapat={() => setKabulModal(false)}
          onKabul={async (id, pencere) => { await islemYap("kabul", pencere); setKabulModal(false); }}
        />
      )}
      <div style={{ background: "white", border: "1px solid #E5DCC9", borderRadius: 12, padding: 16, marginBottom: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontWeight: 700, fontSize: 14, color: INK }}>#{is.is_no}</span>
          <span style={{ fontSize: 11, fontWeight: 700, color, background: `${color}18`, padding: "2px 8px", borderRadius: 4 }}>● {label}</span>
        </div>
        <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>
          👤 {is.musteri_ad}<br />
          📍 {is.adres}<br />
          {is.cihaz && <>{is.cihaz}{is.belirti ? ` · ${is.belirti}` : ""}<br /></>}
          {is.tarih_tercihi && <>📅 {is.tarih_tercihi}<br /></>}
          {is.gelis_penceresi && <><strong>🕐 Geliş: {is.gelis_penceresi}</strong><br /></>}
          {is.twilio_numara && <><small style={{ color: GREEN }}>📞 {is.twilio_numara}</small><br /></>}
        </div>
        {is.durum === "bekliyor" && (
          <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
            <button onClick={() => setKabulModal(true)} disabled={yukleniyor}
              style={{ flex: 1, padding: 9, borderRadius: 8, border: "none", background: GREEN, color: "white", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              ✓ Kabul Et
            </button>
            <button onClick={() => islemYap("ret")} disabled={yukleniyor}
              style={{ flex: 1, padding: 9, borderRadius: 8, border: "1.5px solid #B23A2E", background: "white", color: "#B23A2E", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              ✕ Reddet
            </button>
          </div>
        )}
        {is.durum === "onaylandi" && (
          <button onClick={() => islemYap("tamamla")} disabled={yukleniyor}
            style={{ width: "100%", marginTop: 12, padding: 9, borderRadius: 8, border: "none", background: INK, color: CREAM, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
            ✓ İşi Tamamla
          </button>
        )}
      </div>
    </>
  );
}

export default function ServisPanel() {
  const [session, setSession] = useState(null);
  const [isler, setIsler] = useState([]);
  const [yukleniyor, setYukleniyor] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) setSession(data.session);
    });
  }, []);

  useEffect(() => {
    if (!session) return;
    setYukleniyor(true);
    fetch("/api/is/liste", { headers: { "Authorization": `Bearer ${session.access_token}` } })
      .then(r => r.json())
      .then(d => { setIsler(d.isler || []); })
      .catch(err => { console.error("İş listesi yüklenemedi:", err); })
      .finally(() => setYukleniyor(false));
  }, [session]);

  const cikisYap = async () => { await supabase.auth.signOut(); setSession(null); setIsler([]); };

  const onGuncelle = (id, yeniDurum) => {
    setIsler(prev => prev.map(is => is.id === id ? { ...is, durum: yeniDurum } : is));
  };

  if (!session) return <GirisFormu onGiris={setSession} />;

  const bekleyenler = isler.filter(i => i.durum === "bekliyor");
  const digerler = isler.filter(i => i.durum !== "bekliyor");

  return (
    <div style={{ minHeight: "100vh", background: "#F5EFE2", fontFamily: "'Hanken Grotesk', sans-serif" }}>
      <style>{FONT}</style>
      <div style={{ background: INK, color: CREAM, padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 10 }}>
        <span style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 700 }}>🔧 Benservis Panel</span>
        <button onClick={cikisYap} style={{ background: "none", border: "1px solid #ffffff44", color: CREAM, borderRadius: 8, padding: "6px 12px", fontSize: 12, cursor: "pointer" }}>
          Çıkış
        </button>
      </div>
      <div style={{ padding: 16, maxWidth: 600, margin: "0 auto" }}>
        {yukleniyor && <p style={{ textAlign: "center", color: "#888" }}>Yükleniyor...</p>}

        {bekleyenler.length > 0 && (
          <>
            <div style={{ fontSize: 13, fontWeight: 700, color: INK, marginBottom: 8 }}>
              Yeni Talepler <span style={{ background: AMBER, color: "white", borderRadius: 99, padding: "1px 7px", fontSize: 11 }}>{bekleyenler.length}</span>
            </div>
            {bekleyenler.map(is => (
              <IsKarti key={is.id} is={is} jwtToken={session.access_token} onGuncelle={onGuncelle} />
            ))}
          </>
        )}

        {digerler.length > 0 && (
          <>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#888", margin: "16px 0 8px" }}>Geçmiş</div>
            {digerler.map(is => (
              <IsKarti key={is.id} is={is} jwtToken={session.access_token} onGuncelle={onGuncelle} />
            ))}
          </>
        )}

        {!yukleniyor && isler.length === 0 && (
          <p style={{ textAlign: "center", color: "#888", marginTop: 40 }}>Henüz talep yok.</p>
        )}
      </div>
    </div>
  );
}

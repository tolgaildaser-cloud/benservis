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

function ZenginleştirModal({ is, dppTamirId, jwtToken, onKapat, onZenginlesti }) {
  const [yapilanIslem, setYapilanIslem] = useState(is.belirti || "");
  const [parcaGiris, setParcaGiris] = useState("");
  const [parcalar, setParcalar] = useState([]);
  const [maliyet, setMaliyet] = useState("");
  const [fotograflar, setFotograflar] = useState([]);
  const [fotoYukleniyor, setFotoYukleniyor] = useState(false);
  const [notlar, setNotlar] = useState("");
  const [yukleniyor, setYukleniyor] = useState(false);
  const [hata, setHata] = useState("");
  const inputRef = React.useRef(null);

  const parcaEkle = () => {
    const p = parcaGiris.trim();
    if (!p || parcalar.includes(p)) return;
    setParcalar(prev => [...prev, p]);
    setParcaGiris("");
  };

  const dosyaSec = async (e) => {
    const dosyalar = Array.from(e.target.files || []);
    if (!dosyalar.length) return;
    if (fotograflar.length + dosyalar.length > 5) {
      setHata("En fazla 5 fotoğraf eklenebilir.");
      return;
    }
    setFotoYukleniyor(true);
    setHata("");
    try {
      const urls = await Promise.all(dosyalar.map(async (f) => {
        const ext = f.name.split(".").pop().toLowerCase();
        const path = `tamirler/${dppTamirId}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
        const { error } = await supabase.storage.from("dpp-fotograflar").upload(path, f, { contentType: f.type });
        if (error) throw new Error(error.message);
        return supabase.storage.from("dpp-fotograflar").getPublicUrl(path).data.publicUrl;
      }));
      setFotograflar(prev => [...prev, ...urls]);
    } catch (err) {
      setHata("Fotoğraf yüklenemedi: " + err.message);
    } finally {
      setFotoYukleniyor(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const kaydet = async () => {
    if (!yapilanIslem.trim()) { setHata("Yapılan işlem boş olamaz."); return; }
    setYukleniyor(true);
    setHata("");
    try {
      const res = await fetch(`/api/dpp/tamir/${dppTamirId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${jwtToken}` },
        body: JSON.stringify({
          yapilan_islem: yapilanIslem.trim(),
          degistirilen_parcalar: parcalar,
          maliyet: maliyet !== "" ? parseInt(maliyet, 10) : null,
          fotograflar,
          notlar: notlar.trim() || null,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Sunucu hatası");
      onZenginlesti();
    } catch (e) {
      setHata(e.message);
    } finally {
      setYukleniyor(false);
    }
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200 }}>
      <div style={{ background: CREAM, borderRadius: 16, padding: 24, width: "92%", maxWidth: 400, maxHeight: "85vh", overflowY: "auto", fontFamily: "'Hanken Grotesk', sans-serif" }}>
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: 17, fontWeight: 700, color: INK, marginBottom: 4 }}>
          DPP Kaydını Zenginleştir
        </div>
        <div style={{ fontSize: 12, color: "#888", marginBottom: 16 }}>#{is.is_no}</div>

        <label style={{ fontSize: 12, fontWeight: 700, color: INK, display: "block", marginBottom: 6 }}>Yapılan işlem</label>
        <textarea
          value={yapilanIslem}
          onChange={e => setYapilanIslem(e.target.value)}
          rows={2}
          style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1.5px solid #DDD3BE", fontSize: 13, fontFamily: "'Hanken Grotesk', sans-serif", boxSizing: "border-box", resize: "vertical", marginBottom: 14 }}
        />

        <label style={{ fontSize: 12, fontWeight: 700, color: INK, display: "block", marginBottom: 6 }}>Değiştirilen parçalar</label>
        <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
          <input
            value={parcaGiris}
            onChange={e => setParcaGiris(e.target.value)}
            onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); parcaEkle(); } }}
            placeholder="Parça adı, Enter ile ekle"
            style={{ flex: 1, padding: "9px 12px", borderRadius: 8, border: "1.5px solid #DDD3BE", fontSize: 13, fontFamily: "'Hanken Grotesk', sans-serif" }}
          />
          <button onClick={parcaEkle} type="button"
            style={{ padding: "0 14px", borderRadius: 8, border: `1.5px solid ${AMBER}`, background: "transparent", color: AMBER, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
            + Ekle
          </button>
        </div>
        {parcalar.length > 0 && (
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
            {parcalar.map(p => (
              <button key={p} type="button" onClick={() => setParcalar(prev => prev.filter(x => x !== p))}
                style={{ fontSize: 12, background: "#DDD3BE", border: "none", borderRadius: 6, padding: "4px 10px", cursor: "pointer" }}>
                {p} ✕
              </button>
            ))}
          </div>
        )}

        <label style={{ fontSize: 12, fontWeight: 700, color: INK, display: "block", marginBottom: 6 }}>Maliyet (TL)</label>
        <input
          type="number" min="0" value={maliyet}
          onChange={e => { const v = e.target.value; if (v === "" || /^\d+$/.test(v)) setMaliyet(v); }}
          placeholder="3200"
          style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1.5px solid #DDD3BE", fontSize: 13, fontFamily: "'Hanken Grotesk', sans-serif", boxSizing: "border-box", marginBottom: 14 }}
        />

        <label style={{ fontSize: 12, fontWeight: 700, color: INK, display: "block", marginBottom: 6 }}>
          Fotoğraf <span style={{ fontWeight: 400, color: "#888" }}>(öncesi/sonrası, max 5)</span>
        </label>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
          {fotograflar.map((url, i) => (
            <div key={url} style={{ position: "relative" }}>
              <img src={url} alt={`foto ${i+1}`} style={{ width: 56, height: 56, objectFit: "cover", borderRadius: 6, border: "1px solid #DDD3BE" }} />
              <button type="button" onClick={() => setFotograflar(prev => prev.filter(u => u !== url))}
                style={{ position: "absolute", top: -6, right: -6, background: "#B23A2E", color: "#fff", border: "none", borderRadius: "50%", width: 16, height: 16, fontSize: 9, cursor: "pointer" }}>✕</button>
            </div>
          ))}
          {fotograflar.length < 5 && (
            <button type="button" onClick={() => inputRef.current?.click()} disabled={fotoYukleniyor}
              style={{ width: 56, height: 56, border: "1.5px dashed #DDD3BE", borderRadius: 6, background: "#FFFDF8", color: "#9A9384", fontSize: 20, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {fotoYukleniyor ? "⏳" : "+"}
            </button>
          )}
        </div>
        <input ref={inputRef} type="file" accept="image/jpeg,image/png,image/webp" multiple style={{ display: "none" }} onChange={dosyaSec} />

        <label style={{ fontSize: 12, fontWeight: 700, color: INK, display: "block", marginBottom: 6 }}>Notlar</label>
        <textarea
          value={notlar}
          onChange={e => setNotlar(e.target.value)}
          rows={2}
          style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1.5px solid #DDD3BE", fontSize: 13, fontFamily: "'Hanken Grotesk', sans-serif", boxSizing: "border-box", resize: "vertical", marginBottom: 14 }}
        />

        {hata && <div style={{ color: "#B23A2E", fontSize: 12, marginBottom: 12 }}>{hata}</div>}

        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={onKapat} type="button"
            style={{ flex: 1, padding: 11, borderRadius: 10, border: "1.5px solid #DDD3BE", background: "white", fontSize: 13, cursor: "pointer" }}>
            İptal
          </button>
          <button onClick={kaydet} disabled={yukleniyor} type="button"
            style={{ flex: 2, padding: 11, borderRadius: 10, border: "none", background: AMBER, color: "white", fontWeight: 700, fontSize: 13, cursor: "pointer", opacity: yukleniyor ? 0.7 : 1 }}>
            {yukleniyor ? "Kaydediliyor..." : "📋 DPP'ye Kaydet"}
          </button>
        </div>
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
  const [dppTamirId, setDppTamirId] = useState(is.dpp_tamir_id || null);
  const [zenginleştirAcik, setZenginleştirAcik] = useState(false);
  const [dppZenginlesti, setDppZenginlesti] = useState(false);
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
      if (data.dpp_tamir_id) setDppTamirId(data.dpp_tamir_id);
    } catch (e) { console.error("İşlem hatası:", e.message); }
    setYukleniyor(false);
  };

  return (
    <>
      {zenginleştirAcik && dppTamirId && (
        <ZenginleştirModal
          is={is}
          dppTamirId={dppTamirId}
          jwtToken={jwtToken}
          onKapat={() => setZenginleştirAcik(false)}
          onZenginlesti={() => { setZenginleştirAcik(false); setDppZenginlesti(true); }}
        />
      )}
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
        {is.durum === "tamamlandi" && (
          <div style={{ marginTop: 12, padding: "10px 12px", borderRadius: 8, background: "#F0EAD8", fontSize: 12 }}>
            {dppZenginlesti ? (
              <span style={{ color: GREEN, fontWeight: 700 }}>✓ DPP Kaydı Zenginleştirildi</span>
            ) : dppTamirId ? (
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: GREEN, fontWeight: 600 }}>✓ DPP Kaydı Oluşturuldu</span>
                <button
                  onClick={() => setZenginleştirAcik(true)}
                  style={{ padding: "5px 10px", borderRadius: 6, border: "none", background: AMBER, color: "white", fontWeight: 700, fontSize: 11, cursor: "pointer" }}>
                  📋 Zenginleştir
                </button>
              </div>
            ) : (
              <span style={{ color: "#9A9384" }}>— Seri no girilmedi, DPP kaydı yok</span>
            )}
          </div>
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

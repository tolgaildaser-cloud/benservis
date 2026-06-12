// src/ServisPanel.jsx
// Servis sağlayıcı paneli — /panel path'inde gösterilir.
// Supabase Auth ile giriş, iş listesi, kabul/ret/tamamla.
import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import { supabase } from "./lib/supabase.js";
import SERVISLER from "./services-data.json";

const INK = "#22302A", CREAM = "#F5EFE2", AMBER = "#C8632B", GREEN = "#3A7D44";
const FONT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700&family=Hanken+Grotesk:wght@400;500;600;700&display=swap');`;

const DURUM_LABEL = {
  bekliyor: { label: "Bekliyor", color: AMBER },
  onaylandi: { label: "Onaylandı", color: GREEN },
  reddedildi: { label: "Reddedildi", color: "#B23A2E" },
  suresi_doldu: { label: "Süresi Doldu", color: "#888" },
  tamamlandi: { label: "Tamamlandı", color: GREEN },
};

function ServisKurulum({ session, onTamamlandi }) {
  const [aramaMetni, setAramaMetni] = useState("");
  const [secilenId, setSecilenId] = useState("");
  const [secilenAd, setSecilenAd] = useState("");
  const [yukleniyor, setYukleniyor] = useState(false);
  const [hata, setHata] = useState("");

  const filtreliServisler = SERVISLER.filter(s =>
    s.ad?.toLowerCase().includes(aramaMetni.toLowerCase())
  ).slice(0, 30);

  const [secilenIlce, setSecilenIlce] = useState("");
  const sec = (s) => { setSecilenId(s.id); setSecilenAd(s.ad); setSecilenIlce(s.ilce || ""); setAramaMetni(s.ad); };

  const kaydet = async () => {
    if (!secilenId) { setHata("Lütfen listeden bir servis seç."); return; }
    setYukleniyor(true); setHata("");
    try {
      const res = await fetch("/api/admin/panel-kurulum", {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${session.access_token}` },
        body: JSON.stringify({ servis_id: secilenId, servis_ad: secilenAd, ilce: secilenIlce || undefined }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      onTamamlandi(secilenId, secilenAd);
    } catch (e) { setHata(e.message); }
    setYukleniyor(false);
  };

  return (
    <div style={{ minHeight: "100vh", background: CREAM, fontFamily: "'Hanken Grotesk', sans-serif", padding: "32px 18px" }}>
      <style>{FONT}</style>
      <div style={{ maxWidth: 480, margin: "0 auto" }}>
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: 24, fontWeight: 700, marginBottom: 6 }}>Panel Kurulumu</div>
        <p style={{ fontSize: 14, color: "#5C6660", marginBottom: 24, lineHeight: 1.5 }}>
          Bu hesap henüz bir servisle eşleştirilmemiş. Aşağıdan kendi servisini bul ve seç.
        </p>
        <label style={{ fontSize: 13, fontWeight: 700, display: "block", marginBottom: 6 }}>Servis ara</label>
        <input
          value={aramaMetni}
          onChange={e => { setAramaMetni(e.target.value); setSecilenId(""); setSecilenAd(""); }}
          placeholder="Servis adı yaz..."
          style={{ width: "100%", padding: "11px 13px", borderRadius: 10, border: `1.5px solid ${secilenId ? GREEN : "#DDD3BE"}`, background: "#FFFDF8", fontSize: 14, fontFamily: "inherit", outline: "none", marginBottom: 8 }}
        />
        {aramaMetni && !secilenId && (
          <div style={{ border: "1px solid #E5DCC9", borderRadius: 10, background: "#FFFDF8", maxHeight: 260, overflowY: "auto", marginBottom: 12 }}>
            {filtreliServisler.length === 0 && (
              <div style={{ padding: "12px 14px", fontSize: 13, color: "#9A9384" }}>Servis bulunamadı</div>
            )}
            {filtreliServisler.map(s => (
              <div
                key={s.id}
                onClick={() => sec(s)}
                style={{ padding: "11px 14px", fontSize: 13, borderBottom: "1px solid #F0EAD8", cursor: "pointer" }}
                onMouseEnter={e => e.currentTarget.style.background = "#F5EFE2"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                <div style={{ fontWeight: 600 }}>{s.ad}</div>
                <div style={{ fontSize: 11, color: "#9A9384", marginTop: 2 }}>{s.id}</div>
              </div>
            ))}
          </div>
        )}
        {secilenId && (
          <div style={{ padding: "10px 13px", borderRadius: 9, background: "#E8F0E8", border: `1px solid ${GREEN}`, marginBottom: 12, fontSize: 13 }}>
            ✓ <strong>{secilenAd}</strong><br />
            <span style={{ fontSize: 11, color: "#5C6660" }}>{secilenId}</span>
          </div>
        )}
        {hata && <div style={{ color: "#B23A2E", fontSize: 13, marginBottom: 10 }}>{hata}</div>}
        <button
          onClick={kaydet}
          disabled={yukleniyor || !secilenId}
          style={{ width: "100%", padding: 13, borderRadius: 11, border: "none", background: secilenId ? AMBER : "#CCC", color: "#fff", fontWeight: 700, fontSize: 15, cursor: secilenId ? "pointer" : "not-allowed" }}>
          {yukleniyor ? "Kaydediliyor..." : "Bu Servisi Kullan →"}
        </button>
      </div>
    </div>
  );
}

function GirisFormu({ onGiris }) {
  const [email, setEmail] = useState("");
  const [sifre, setSifre] = useState("");
  const [hata, setHata] = useState("");
  const [bilgi, setBilgi] = useState("");
  const [yukleniyor, setYukleniyor] = useState(false);

  const girisYap = async (e) => {
    e.preventDefault();
    setHata("");
    setBilgi("");
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

  const sifremiUnuttum = async () => {
    setHata("");
    setBilgi("");
    if (!email.trim()) { setHata("Önce e-posta adresinizi yazın, sonra 'Şifremi unuttum'a tıklayın."); return; }
    setYukleniyor(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: window.location.origin + "/panel",
    });
    setYukleniyor(false);
    if (error) { setHata(error.message); return; }
    setBilgi("Şifre sıfırlama bağlantısı e-postanıza gönderildi. Gelen kutunuzu (ve spam klasörünü) kontrol edin.");
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
          {bilgi && <div style={{ color: "#6EE7B7", fontSize: 13, marginBottom: 14 }}>{bilgi}</div>}
          <button
            type="submit" disabled={yukleniyor}
            style={{ width: "100%", padding: 12, borderRadius: 10, border: "none", background: AMBER, color: "white", fontWeight: 700, fontSize: 15, cursor: "pointer" }}
          >
            {yukleniyor ? "Lütfen bekleyin..." : "Giriş Yap"}
          </button>
          <button
            type="button"
            onClick={sifremiUnuttum}
            disabled={yukleniyor}
            style={{ width: "100%", marginTop: 10, padding: 8, borderRadius: 8, border: "none", background: "none", color: "#B8BEB6", fontSize: 12.5, cursor: "pointer", textDecoration: "underline" }}
          >
            Şifremi unuttum
          </button>
        </form>
      </div>
    </div>
  );
}

function YeniSifreFormu({ onTamam }) {
  const [s1, setS1] = useState("");
  const [s2, setS2] = useState("");
  const [hata, setHata] = useState("");
  const [yukleniyor, setYukleniyor] = useState(false);

  const kaydet = async (e) => {
    e.preventDefault();
    setHata("");
    if (s1.length < 8) { setHata("Şifre en az 8 karakter olmalı."); return; }
    if (s1 !== s2) { setHata("Şifreler eşleşmiyor."); return; }
    setYukleniyor(true);
    const { error } = await supabase.auth.updateUser({ password: s1 });
    setYukleniyor(false);
    if (error) { setHata(error.message); return; }
    onTamam();
  };

  return (
    <div style={{ minHeight: "100vh", background: INK, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Hanken Grotesk', sans-serif" }}>
      <style>{FONT}</style>
      <div style={{ background: "#2d3e35", borderRadius: 18, padding: 32, width: "100%", maxWidth: 360 }}>
        <div style={{ fontFamily: "'Fraunces', serif", color: CREAM, fontSize: 20, fontWeight: 700, marginBottom: 8, textAlign: "center" }}>
          🔑 Yeni Şifre Belirle
        </div>
        <p style={{ color: "#B8BEB6", fontSize: 13, textAlign: "center", marginBottom: 20 }}>
          Hesabınız için yeni bir şifre oluşturun.
        </p>
        <form onSubmit={kaydet}>
          <label style={{ color: "#aaa", fontSize: 12, display: "block", marginBottom: 4 }}>Yeni şifre (en az 8 karakter)</label>
          <input
            type="password" value={s1} onChange={e => setS1(e.target.value)} required
            style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "none", background: "#22302A", color: CREAM, fontSize: 14, marginBottom: 14, boxSizing: "border-box" }}
          />
          <label style={{ color: "#aaa", fontSize: 12, display: "block", marginBottom: 4 }}>Yeni şifre (tekrar)</label>
          <input
            type="password" value={s2} onChange={e => setS2(e.target.value)} required
            style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "none", background: "#22302A", color: CREAM, fontSize: 14, marginBottom: 20, boxSizing: "border-box" }}
          />
          {hata && <div style={{ color: "#F87171", fontSize: 13, marginBottom: 14 }}>{hata}</div>}
          <button
            type="submit" disabled={yukleniyor}
            style={{ width: "100%", padding: 12, borderRadius: 10, border: "none", background: AMBER, color: "white", fontWeight: 700, fontSize: 15, cursor: "pointer" }}
          >
            {yukleniyor ? "Kaydediliyor..." : "Şifreyi Kaydet"}
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
      const IZIN_VERILEN_MIME = ["image/jpeg", "image/png", "image/webp"];
      const results = await Promise.allSettled(dosyalar.map(async (f) => {
        if (!IZIN_VERILEN_MIME.includes(f.type)) throw new Error(`İzin verilmeyen dosya tipi: ${f.type}`);
        const ext = f.name.split(".").pop().toLowerCase();
        const path = `tamirler/${dppTamirId}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
        const { error } = await supabase.storage.from("DPP Foto").upload(path, f, { contentType: f.type });
        if (error) throw new Error(error.message);
        return supabase.storage.from("DPP Foto").getPublicUrl(path).data.publicUrl;
      }));
      const basarili = results.filter(r => r.status === "fulfilled").map(r => r.value);
      const basarisizSayisi = results.filter(r => r.status === "rejected").length;
      if (basarili.length > 0) setFotograflar(prev => [...prev, ...basarili]);
      if (basarisizSayisi > 0) setHata(`${basarisizSayisi} fotoğraf yüklenemedi.`);
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

function HavuzKarti({ is, onAl, yukleniyor }) {
  const kalan = is.son_kabul_tarihi
    ? Math.max(0, Math.round((new Date(is.son_kabul_tarihi) - Date.now()) / 60000))
    : null;

  return (
    <div style={{ background: "white", border: `1.5px solid ${AMBER}`, borderRadius: 12, padding: 14, marginBottom: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
        <span style={{ fontWeight: 700, fontSize: 13, color: INK }}>#{is.is_no}</span>
        {kalan !== null && (
          <span style={{ fontSize: 11, color: kalan < 5 ? "#B23A2E" : AMBER, fontWeight: 700 }}>
            ⏱ {kalan} dk kaldı
          </span>
        )}
      </div>
      <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6, marginBottom: 10 }}>
        👤 {is.musteri_ad}<br />
        📍 {is.adres}<br />
        {is.cihaz && <>{is.cihaz}{is.belirti ? ` · ${is.belirti}` : ""}<br /></>}
        {is.tarih_tercihi && <>📅 {is.tarih_tercihi}<br /></>}
      </div>
      <button
        onClick={() => onAl(is.id)}
        disabled={yukleniyor}
        style={{ width: "100%", padding: 9, borderRadius: 8, border: "none", background: AMBER, color: "white", fontWeight: 700, fontSize: 13, cursor: yukleniyor ? "not-allowed" : "pointer", opacity: yukleniyor ? 0.7 : 1 }}>
        ⚡ Talebi Al
      </button>
    </div>
  );
}

function IsKarti({ is, jwtToken, onGuncelle }) {
  const [kabulModal, setKabulModal] = useState(false);
  const [yukleniyor, setYukleniyor] = useState(false);
  const [dppTamirId, setDppTamirId] = useState(is.dpp_tamir_id || null);
  const [zenginleştirAcik, setZenginleştirAcik] = useState(false);
  const [dppZenginlesti, setDppZenginlesti] = useState(false);
  const [cihazDurum, setCihazDurum] = useState(is.mevcut_durum || "çalışıyor");
  const [durumYukleniyor, setDurumYukleniyor] = useState(false);
  const [durumKaydedildi, setDurumKaydedildi] = useState(false);
  const { label, color } = DURUM_LABEL[is.durum] || { label: is.durum, color: "#888" };

  const qrIndir = async () => {
    const url = `https://benservis.com/dpp/${encodeURIComponent(is.seri_no)}`;
    const canvas = document.createElement("canvas");
    await QRCode.toCanvas(canvas, url, { width: 300, margin: 2, color: { dark: "#22302A", light: "#F5EFE2" } });
    const link = document.createElement("a");
    link.download = `dpp-qr-${is.seri_no}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const durumGuncelle = async (yeniDurum) => {
    setCihazDurum(yeniDurum);
    setDurumYukleniyor(true);
    try {
      const res = await fetch(`/api/dpp/cihaz?seri_no=${encodeURIComponent(is.seri_no)}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${jwtToken}` },
        body: JSON.stringify({ mevcut_durum: yeniDurum }),
      });
      if (res.ok) {
        setDurumKaydedildi(true);
        setTimeout(() => setDurumKaydedildi(false), 2000);
      }
    } catch (e) { console.error("Durum güncellenemedi:", e); }
    setDurumYukleniyor(false);
  };

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
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                <span style={{ color: GREEN, fontWeight: 600 }}>✓ DPP Kaydı Oluşturuldu</span>
                <div style={{ display: "flex", gap: 6 }}>
                  {is.seri_no && (
                    <button
                      onClick={qrIndir}
                      style={{ padding: "5px 10px", borderRadius: 6, border: `1.5px solid #22302A`, background: "white", color: "#22302A", fontWeight: 700, fontSize: 11, cursor: "pointer" }}>
                      📷 QR
                    </button>
                  )}
                  <button
                    onClick={() => setZenginleştirAcik(true)}
                    style={{ padding: "5px 10px", borderRadius: 6, border: "none", background: AMBER, color: "white", fontWeight: 700, fontSize: 11, cursor: "pointer" }}>
                    📋 Zenginleştir
                  </button>
                </div>
              </div>
            ) : (
              <span style={{ color: "#9A9384" }}>— Seri no girilmedi, DPP kaydı yok</span>
            )}
            {is.seri_no && (
              <div style={{ marginTop: 10, borderTop: "1px solid #E5DCC9", paddingTop: 8, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                <span style={{ fontSize: 11, color: "#888" }}>Cihaz durumu:</span>
                <select
                  value={cihazDurum}
                  onChange={e => durumGuncelle(e.target.value)}
                  disabled={durumYukleniyor}
                  style={{ fontSize: 11, padding: "4px 8px", borderRadius: 6, border: "1px solid #DDD3BE", background: "#FFFDF8", cursor: durumYukleniyor ? "wait" : "pointer", fontFamily: "'Hanken Grotesk', sans-serif" }}>
                  <option value="çalışıyor">✓ Çalışıyor</option>
                  <option value="arızalı">⚠ Arızalı</option>
                  <option value="hurda">✕ Hurda</option>
                </select>
                {durumKaydedildi && <span style={{ fontSize: 11, color: GREEN, fontWeight: 700 }}>✓ Güncellendi</span>}
              </div>
            )}
            {/* Müşteri puanı */}
            {is.puan !== null && is.puan !== undefined && (
              <div style={{ marginTop: 8, borderTop: "1px solid #E5DCC9", paddingTop: 8 }}>
                <div style={{ fontSize: 11, color: "#888", marginBottom: 2 }}>Müşteri Değerlendirmesi</div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 16 }}>{"⭐".repeat(is.puan)}</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: GREEN }}>{is.puan}/5</span>
                </div>
                {is.yorum && <div style={{ fontSize: 12, color: "#555", marginTop: 4, fontStyle: "italic" }}>"{is.yorum}"</div>}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

function UrunlerTab({ session }) {
  const servisId = session.user?.user_metadata?.servis_id;
  const jwtToken = session.access_token;
  const [urunler, setUrunler] = useState([]);
  const [yukleniyor, setYukleniyor] = useState(true);
  const [formAcik, setFormAcik] = useState(false);
  const [form, setForm] = useState({ baslik: "", aciklama: "", fiyat: "", dpp_seri_no: "" });
  const [kaydetYuk, setKaydetYuk] = useState(false);
  const [hata, setHata] = useState("");

  const getir = () => {
    setYukleniyor(true);
    fetch(`/api/servis/urunler?servis_id=${encodeURIComponent(servisId)}&durum=aktif`)
      .then(r => r.ok ? r.json() : { urunler: [] })
      .then(d => setUrunler(d.urunler || []))
      .catch(() => {})
      .finally(() => setYukleniyor(false));
  };

  useEffect(() => { if (servisId) getir(); }, [servisId]);

  const ekle = async (e) => {
    e.preventDefault();
    setHata("");
    if (!form.baslik.trim()) { setHata("Başlık zorunludur."); return; }
    if (!form.fiyat || isNaN(Number(form.fiyat))) { setHata("Geçerli fiyat girin."); return; }
    setKaydetYuk(true);
    try {
      const res = await fetch("/api/servis/urunler", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${jwtToken}` },
        body: JSON.stringify({
          tip: "ikinci_el",
          baslik: form.baslik.trim(),
          aciklama: form.aciklama.trim() || null,
          fiyat: Number(form.fiyat),
          dpp_seri_no: form.dpp_seri_no.trim().toUpperCase() || null,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setUrunler(prev => [data, ...prev]);
      setForm({ baslik: "", aciklama: "", fiyat: "", dpp_seri_no: "" });
      setFormAcik(false);
    } catch (err) { setHata(err.message); }
    setKaydetYuk(false);
  };

  const durumDegistir = async (id, durum) => {
    const res = await fetch(`/api/servis/urunler/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${jwtToken}` },
      body: JSON.stringify({ durum }),
    });
    if (res.ok) setUrunler(prev => prev.filter(u => u.id !== id));
  };

  const sil = async (id) => {
    if (!window.confirm("Bu ürünü silmek istiyor musunuz?")) return;
    const res = await fetch(`/api/servis/urunler/${id}`, {
      method: "DELETE",
      headers: { "Authorization": `Bearer ${jwtToken}` },
    });
    if (res.ok) setUrunler(prev => prev.filter(u => u.id !== id));
  };

  const inp = { width: "100%", padding: "10px 12px", borderRadius: 8, border: "1.5px solid #DDD3BE", fontSize: 14, fontFamily: "'Hanken Grotesk', sans-serif", boxSizing: "border-box", marginBottom: 12 };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: INK }}>
          İkinci El Ürünlerim
          {urunler.length > 0 && <span style={{ background: AMBER, color: "white", borderRadius: 99, padding: "1px 7px", fontSize: 11, marginLeft: 6 }}>{urunler.length}</span>}
        </span>
        <button
          onClick={() => setFormAcik(f => !f)}
          style={{ padding: "7px 14px", borderRadius: 8, border: "none", background: formAcik ? "#DDD3BE" : AMBER, color: formAcik ? INK : "white", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
          {formAcik ? "İptal" : "+ Yeni Ürün"}
        </button>
      </div>

      {/* Ürün ekleme formu */}
      {formAcik && (
        <form onSubmit={ekle} style={{ background: "white", borderRadius: 12, padding: 16, marginBottom: 16, border: "1.5px solid #DDD3BE" }}>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: 15, fontWeight: 600, color: INK, marginBottom: 12 }}>Yeni İkinci El Ürün</div>

          <label style={{ fontSize: 12, fontWeight: 700, color: INK, display: "block", marginBottom: 4 }}>Başlık *</label>
          <input value={form.baslik} onChange={e => setForm(f => ({ ...f, baslik: e.target.value }))}
            placeholder="Samsung 55' 4K QLED TV" style={inp} />

          <label style={{ fontSize: 12, fontWeight: 700, color: INK, display: "block", marginBottom: 4 }}>Açıklama</label>
          <textarea value={form.aciklama} onChange={e => setForm(f => ({ ...f, aciklama: e.target.value }))}
            placeholder="Cihaz hakkında kısa bilgi..." rows={2}
            style={{ ...inp, resize: "vertical", fontFamily: "'Hanken Grotesk', sans-serif" }} />

          <label style={{ fontSize: 12, fontWeight: 700, color: INK, display: "block", marginBottom: 4 }}>Fiyat (₺) *</label>
          <input type="number" min="0" value={form.fiyat} onChange={e => setForm(f => ({ ...f, fiyat: e.target.value }))}
            placeholder="3500" style={inp} />

          <label style={{ fontSize: 12, fontWeight: 700, color: INK, display: "block", marginBottom: 4 }}>
            Seri No <span style={{ fontWeight: 400, color: "#888" }}>(opsiyonel — DPP bağlantısı için)</span>
          </label>
          <input value={form.dpp_seri_no} onChange={e => setForm(f => ({ ...f, dpp_seri_no: e.target.value }))}
            placeholder="SN1234567890" style={{ ...inp, marginBottom: 4 }} />
          <div style={{ fontSize: 11, color: "#aaa", marginBottom: 14 }}>Seri no girilirse alıcı DPP tamir geçmişini görebilir.</div>

          {hata && <div style={{ color: "#B23A2E", fontSize: 13, marginBottom: 10 }}>{hata}</div>}
          <button type="submit" disabled={kaydetYuk}
            style={{ width: "100%", padding: 11, borderRadius: 10, border: "none", background: AMBER, color: "white", fontWeight: 700, fontSize: 14, cursor: "pointer", opacity: kaydetYuk ? 0.7 : 1 }}>
            {kaydetYuk ? "Ekleniyor..." : "Ürünü Yayınla →"}
          </button>
        </form>
      )}

      {/* Mağaza linki */}
      {servisId && (
        <a
          href={`/servis/${servisId}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "block", padding: "9px 14px", borderRadius: 9, border: `1px solid ${INK}`, color: INK, fontSize: 13, fontWeight: 700, textDecoration: "none", textAlign: "center", marginBottom: 14 }}>
          🏪 Mağaza Sayfamı Gör →
        </a>
      )}

      {/* Ürün listesi */}
      {yukleniyor ? (
        <p style={{ textAlign: "center", color: "#888", fontSize: 13 }}>Yükleniyor...</p>
      ) : urunler.length === 0 ? (
        <div style={{ textAlign: "center", padding: "32px 0", color: "#9A9384" }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>🏷️</div>
          <div style={{ fontSize: 14 }}>Henüz ürün eklenmedi.</div>
        </div>
      ) : (
        urunler.map(u => (
          <div key={u.id} style={{ background: "white", borderRadius: 12, padding: 14, marginBottom: 10, border: "1px solid #E5DCC9" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: INK }}>{u.baslik}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: AMBER, marginTop: 2 }}>{u.fiyat.toLocaleString("tr-TR")} ₺</div>
                {u.aciklama && <div style={{ fontSize: 12, color: "#666", marginTop: 4 }}>{u.aciklama}</div>}
                {u.dpp_seri_no && (
                  <div style={{ fontSize: 11, color: GREEN, marginTop: 4 }}>📋 DPP: {u.dpp_seri_no}</div>
                )}
              </div>
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
              <button
                onClick={() => durumDegistir(u.id, "satildi")}
                style={{ flex: 1, padding: 8, borderRadius: 8, border: `1.5px solid ${GREEN}`, background: "white", color: GREEN, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                ✓ Satıldı
              </button>
              <button
                onClick={() => durumDegistir(u.id, "pasif")}
                style={{ flex: 1, padding: 8, borderRadius: 8, border: "1.5px solid #888", background: "white", color: "#888", fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                Pasife Al
              </button>
              <button
                onClick={() => sil(u.id)}
                style={{ padding: "8px 12px", borderRadius: 8, border: "1.5px solid #B23A2E", background: "white", color: "#B23A2E", fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                ✕
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default function ServisPanel() {
  const [session, setSession] = useState(null);
  const [isler, setIsler] = useState([]);
  const [yukleniyor, setYukleniyor] = useState(false);
  const [sonYenileme, setSonYenileme] = useState(null);
  const [listeHata, setListeHata] = useState("");
  const [havuzIsler, setHavuzIsler] = useState([]);
  const [havuzYukleniyor, setHavuzYukleniyor] = useState(false);
  const [aktifTab, setAktifTab] = useState("isler");

  const [recoveryMode, setRecoveryMode] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) setSession(data.session);
    });
    // "Şifremi unuttum" e-postasındaki link buraya döner —
    // supabase-js URL'deki recovery token'ı işleyip bu eventi atar.
    const { data: sub } = supabase.auth.onAuthStateChange((event, sess) => {
      if (event === "PASSWORD_RECOVERY") {
        setSession(sess);
        setRecoveryMode(true);
      }
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const isleriGetir = React.useCallback((token) => {
    setYukleniyor(true);
    setListeHata("");
    return fetch("/api/is/liste", { headers: { "Authorization": `Bearer ${token}` } })
      .then(r => r.json().then(d => ({ ok: r.ok, status: r.status, data: d })))
      .then(({ ok, status, data: d }) => {
        if (!ok) {
          setListeHata(`API ${status}: ${d.error || "Bilinmeyen hata"}`);
          setIsler([]);
        } else {
          setIsler(d.isler || []);
          setSonYenileme(new Date());
        }
      })
      .catch(err => {
        console.error("İş listesi yüklenemedi:", err);
        setListeHata("Bağlantı hatası: " + err.message);
      })
      .finally(() => setYukleniyor(false));
  }, []);

  const havuzGetir = React.useCallback((token) => {
    setHavuzYukleniyor(true);
    fetch("/api/is/havuz", { headers: { "Authorization": `Bearer ${token}` } })
      .then(r => r.json())
      .then(d => setHavuzIsler(d.isler || []))
      .catch(() => {})
      .finally(() => setHavuzYukleniyor(false));
  }, []);

  useEffect(() => {
    if (!session) return;
    isleriGetir(session.access_token);
    havuzGetir(session.access_token);
    // 30 saniyede bir otomatik yenile
    const interval = setInterval(() => {
      isleriGetir(session.access_token);
      havuzGetir(session.access_token);
    }, 30000);
    return () => clearInterval(interval);
  }, [session, isleriGetir, havuzGetir]);

  const cikisYap = async () => { await supabase.auth.signOut(); setSession(null); setIsler([]); };

  const onGuncelle = (id, yeniDurum) => {
    setIsler(prev => prev.map(is => is.id === id ? { ...is, durum: yeniDurum } : is));
  };

  const havuzTalepAl = async (isId) => {
    setHavuzYukleniyor(true);
    try {
      const res = await fetch(`/api/is/${isId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${session.access_token}` },
        body: JSON.stringify({ action: "havuz_kabul" }),
      });
      if (res.ok) {
        // Havuzdan kaldır, iş listesini yenile
        setHavuzIsler(prev => prev.filter(i => i.id !== isId));
        await isleriGetir(session.access_token);
      } else {
        const d = await res.json();
        alert(d.error || "Talep alınamadı");
      }
    } catch (e) {
      alert("Bağlantı hatası: " + e.message);
    }
    setHavuzYukleniyor(false);
  };

  if (recoveryMode) return <YeniSifreFormu onTamam={() => setRecoveryMode(false)} />;

  if (!session) return <GirisFormu onGiris={setSession} />;

  // servis_id yoksa kurulum ekranı göster
  const mevcutServisId = session.user?.user_metadata?.servis_id;
  if (!mevcutServisId) {
    return (
      <ServisKurulum
        session={session}
        onTamamlandi={(servis_id, servis_ad) => {
          // Local session'ı güncelle — tekrar login gerekmeden devam etsin
          setSession(prev => ({
            ...prev,
            user: {
              ...prev.user,
              user_metadata: { ...prev.user.user_metadata, servis_id, servis_ad },
            },
          }));
        }}
      />
    );
  }

  const bekleyenler = isler.filter(i => i.durum === "bekliyor");
  const digerler = isler.filter(i => i.durum !== "bekliyor");

  const saatStr = sonYenileme
    ? sonYenileme.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
    : "";

  return (
    <div style={{ minHeight: "100vh", background: "#F5EFE2", fontFamily: "'Hanken Grotesk', sans-serif" }}>
      <style>{FONT}</style>
      <div style={{ background: INK, color: CREAM, padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 10 }}>
        <span style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 700 }}>🔧 Benservis Panel</span>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button
            onClick={() => { isleriGetir(session.access_token); havuzGetir(session.access_token); }}
            disabled={yukleniyor}
            style={{ background: "none", border: "1px solid #ffffff44", color: CREAM, borderRadius: 8, padding: "6px 12px", fontSize: 12, cursor: "pointer", opacity: yukleniyor ? 0.5 : 1 }}>
            {yukleniyor ? "⟳" : "↻ Yenile"}
          </button>
          <button onClick={cikisYap} style={{ background: "none", border: "1px solid #ffffff44", color: CREAM, borderRadius: 8, padding: "6px 12px", fontSize: 12, cursor: "pointer" }}>
            Çıkış
          </button>
        </div>
      </div>
      <div style={{ padding: 16, maxWidth: 600, margin: "0 auto" }}>
        {/* Servis kimlik bilgisi */}
        <div style={{ fontSize: 11, color: "#A59E8E", background: "#EDE5D3", borderRadius: 8, padding: "6px 10px", marginBottom: 10, wordBreak: "break-all" }}>
          🔑 Servis ID: <strong>{session.user?.user_metadata?.servis_id || "— metadata'da yok"}</strong>
          {session.user?.email && <span style={{ marginLeft: 8 }}>· {session.user.email}</span>}
        </div>

        {/* Tab bar */}
        <div style={{ display: "flex", gap: 4, marginBottom: 16, background: "#EDE5D3", borderRadius: 10, padding: 4 }}>
          {[["isler", "🔧 İşlerim"], ["urunler", "🏪 Ürünlerim"]].map(([key, label]) => (
            <button key={key} onClick={() => setAktifTab(key)}
              style={{
                flex: 1, padding: "8px 0", borderRadius: 8, border: "none",
                background: aktifTab === key ? "white" : "transparent",
                color: aktifTab === key ? INK : "#888",
                fontWeight: aktifTab === key ? 700 : 500,
                fontSize: 13, cursor: "pointer",
                boxShadow: aktifTab === key ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
                fontFamily: "'Hanken Grotesk', sans-serif",
              }}>
              {label}
            </button>
          ))}
        </div>
        {saatStr && (
          <p style={{ textAlign: "right", fontSize: 11, color: "#A59E8E", margin: "0 0 10px" }}>
            Son güncelleme: {saatStr} · otomatik 30 sn
          </p>
        )}
        {/* Tab içerikleri */}
        {aktifTab === "isler" && (
          <>
            {yukleniyor && isler.length === 0 && <p style={{ textAlign: "center", color: "#888" }}>Yükleniyor...</p>}
            {listeHata && (
              <div style={{ background: "#FEE2E2", border: "1px solid #FCA5A5", borderRadius: 10, padding: "12px 14px", marginBottom: 16, fontSize: 13, color: "#991B1B", fontFamily: "monospace" }}>
                ⚠️ {listeHata}
              </div>
            )}
            {havuzIsler.length > 0 && (
              <>
                <div style={{ fontSize: 13, fontWeight: 700, color: AMBER, marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}>
                  ⚡ Bölgenizdeki Talepler
                  <span style={{ background: AMBER, color: "white", borderRadius: 99, padding: "1px 7px", fontSize: 11 }}>{havuzIsler.length}</span>
                </div>
                {havuzIsler.map(is => (
                  <HavuzKarti key={is.id} is={is} onAl={havuzTalepAl} yukleniyor={havuzYukleniyor} />
                ))}
                <div style={{ borderBottom: "1px solid #E5DCC9", margin: "14px 0" }} />
              </>
            )}
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
          </>
        )}

        {aktifTab === "urunler" && <UrunlerTab session={session} />}
      </div>
    </div>
  );
}

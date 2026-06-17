// src/ServisKayit.jsx
// Servis panel kayıt başvuru formu — benservis.com/servis-kayit
// Auth yok; başarıyla gönderilince admin onayı beklenir.
import React, { useState } from "react";
import { CIHAZLAR, MARKALAR } from "./constants.js";

const INK   = "#1E293B";
const CREAM = "#F1F5F9";
const AMBER = "#2563EB";
const GREEN = "#22C55E";
const GRAY  = "#94A3B8";
const RED   = "#DC2626";

const FONT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700&family=Hanken+Grotesk:wght@400;500;600;700&display=swap');`;

// ─── Ortak input stili ───────────────────────────────────────────
const sInput = {
  width: "100%",
  padding: "11px 13px",
  border: "1.5px solid #E2E8F0",
  borderRadius: 10,
  fontSize: 14,
  fontFamily: "'Hanken Grotesk', sans-serif",
  background: "#F8FAFC",
  color: INK,
  outline: "none",
  boxSizing: "border-box",
};

const sLabel = {
  fontSize: 13,
  fontWeight: 700,
  color: INK,
  marginBottom: 5,
  display: "block",
};

const sGrup = { marginBottom: 16 };

function Chip({ label, aktif, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: "6px 13px",
        borderRadius: 999,
        fontSize: 12.5,
        fontWeight: 600,
        fontFamily: "'Hanken Grotesk', sans-serif",
        cursor: "pointer",
        transition: "all .12s",
        border: aktif ? `1.5px solid ${GREEN}` : "1.5px solid #E2E8F0",
        background: aktif ? GREEN : "#F8FAFC",
        color: aktif ? "white" : GRAY,
      }}
    >
      {label}
    </button>
  );
}

export default function ServisKayit() {
  const [form, setForm] = useState({
    ad: "", sahip_ad: "", email: "", telefon: "",
    il: "", ilce: "", adres: "",
    lat: null, lng: null,
    kategoriler: [],
    yetkili: false,
    yetkili_markalar: [],
    notlar: "",
  });
  const [gonderiyor, setGonderiyor]   = useState(false);
  const [hata, setHata]               = useState("");
  const [basarili, setBasarili]       = useState(false);
  const [konumAlinıyor, setKonumAl]  = useState(false);
  const [konumAlindi, setKonumAlindi] = useState(false);

  const guncelle = (alan, deger) => setForm(f => ({ ...f, [alan]: deger }));

  const konumuAl = () => {
    if (!navigator.geolocation) { setHata("Tarayıcınız konum desteklemiyor."); return; }
    setHata(""); // önceki başarısız denemenin mesajı kalmasın
    setKonumAl(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude, lng = pos.coords.longitude;
        setForm(f => ({ ...f, lat, lng }));
        setKonumAlindi(true);
        setHata("");
        // Ters geokodlama (OSM Nominatim) — il/ilçe/adres otomatik doldurulur.
        // Hata olursa sessiz geçilir; koordinatlar zaten alındı.
        try {
          const r = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&accept-language=tr&zoom=18`
          );
          if (r.ok) {
            const a = (await r.json()).address || {};
            const il   = a.province || a.state || a.city || "";
            const ilce = a.town || a.city_district || a.county || a.district || a.suburb || "";
            const adresParca = [
              a.neighbourhood || a.suburb,
              a.road,
              a.house_number ? `No:${a.house_number}` : null,
            ].filter(Boolean);
            setForm(f => ({
              ...f,
              il:    il   || f.il,
              ilce:  ilce || f.ilce,
              adres: adresParca.length ? adresParca.join(", ") : f.adres,
            }));
          }
        } catch { /* geokod başarısızlığı konumu iptal etmez */ }
        setKonumAl(false);
      },
      () => { setHata("Konum alınamadı. Tarayıcı iznini kontrol edin."); setKonumAl(false); },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  const kategoriToggle = (k) => {
    setForm(f => ({
      ...f,
      kategoriler: f.kategoriler.includes(k)
        ? f.kategoriler.filter(x => x !== k)
        : [...f.kategoriler, k],
    }));
  };

  const markaToggle = (m) => {
    setForm(f => ({
      ...f,
      yetkili_markalar: f.yetkili_markalar.includes(m)
        ? f.yetkili_markalar.filter(x => x !== m)
        : [...f.yetkili_markalar, m],
    }));
  };

  const gonder = async (e) => {
    e.preventDefault();
    setHata("");

    // Client-side validation
    if (!form.ad.trim())       return setHata("Servis adı zorunludur.");
    if (!form.sahip_ad.trim()) return setHata("Yetkili kişi adı zorunludur.");
    if (!form.email.trim())    return setHata("E-posta zorunludur.");
    if (!form.telefon.trim())  return setHata("Telefon zorunludur.");
    if (!form.il.trim())       return setHata("İl zorunludur.");
    if (!form.ilce.trim())     return setHata("İlçe zorunludur.");

    setGonderiyor(true);
    try {
      const res = await fetch("/api/servis/basvuru", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          yetkili_markalar: form.yetkili ? form.yetkili_markalar : [],
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Bir hata oluştu.");
      setBasarili(true);
    } catch (e) {
      setHata(e.message);
    } finally {
      setGonderiyor(false);
    }
  };

  // ── Başarı ekranı ─────────────────────────────────────────────
  if (basarili) {
    return (
      <div style={{ minHeight: "100vh", background: CREAM, fontFamily: "'Hanken Grotesk', sans-serif" }}>
        <style>{FONT}</style>
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "80px 20px", textAlign: "center" }}>
          <div style={{ fontSize: 52, marginBottom: 20 }}>🎉</div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 26, fontWeight: 700, color: INK, marginBottom: 12 }}>
            Başvurunuz Alındı!
          </h2>
          <p style={{ fontSize: 15, color: GRAY, lineHeight: 1.6, marginBottom: 28 }}>
            Ekibimiz en kısa sürede başvurunuzu inceleyecek.<br />
            Onay verildiğinde <strong style={{ color: INK }}>{form.email}</strong> adresine ve
            <strong style={{ color: INK }}> {form.telefon}</strong> numarasına giriş bilgileriniz SMS ile gönderilecektir.
          </p>
          <a
            href="/panel"
            style={{
              display: "inline-block",
              padding: "13px 28px",
              borderRadius: 12,
              background: AMBER,
              color: "white",
              fontWeight: 700,
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            Servis Paneline Git
          </a>
        </div>
      </div>
    );
  }

  // ── Form ──────────────────────────────────────────────────────
  return (
    <div style={{ minHeight: "100vh", background: CREAM, fontFamily: "'Hanken Grotesk', sans-serif" }}>
      <style>{FONT}</style>

      {/* Header */}
      <div style={{ background: INK, color: CREAM, padding: "14px 20px", display: "flex", alignItems: "center", gap: 10 }}>
        <a href="/" style={{ color: CREAM, textDecoration: "none", fontSize: 20 }}>◑</a>
        <span style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 700 }}>Benservis</span>
        <span style={{ marginLeft: "auto", fontSize: 12, color: "#94A3B8" }}>Servis Kaydı</span>
      </div>

      <div style={{ maxWidth: 540, margin: "0 auto", padding: "28px 20px 60px" }}>

        {/* Başlık */}
        <div style={{ marginBottom: 28 }}>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 28, fontWeight: 700, color: INK, margin: "0 0 8px" }}>
            Servis Kaydı
          </h1>
          <p style={{ fontSize: 14, color: GRAY, margin: 0, lineHeight: 1.6 }}>
            Benservis paneline katılın. Başvurunuz incelendikten sonra giriş bilgileriniz SMS ile iletilir.
          </p>
        </div>

        <form onSubmit={gonder} noValidate>

          {/* ─── Bölüm 1: İşletme bilgileri ─────────────────────────── */}
          <div style={{ background: "#F8FAFC", borderRadius: 16, border: "1px solid #E2E8F0", padding: "20px 18px", marginBottom: 16 }}>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 15, fontWeight: 700, color: INK, marginBottom: 16 }}>
              İşletme Bilgileri
            </div>

            <div style={sGrup}>
              <label style={sLabel}>Servis / İşletme Adı *</label>
              <input
                style={sInput}
                value={form.ad}
                onChange={e => guncelle("ad", e.target.value)}
                placeholder="Örn: Arçelik Yetkili Servis Bahçelievler"
                autoComplete="organization"
              />
            </div>

            <div style={sGrup}>
              <label style={sLabel}>Yetkili Kişi Adı *</label>
              <input
                style={sInput}
                value={form.sahip_ad}
                onChange={e => guncelle("sahip_ad", e.target.value)}
                placeholder="Ad Soyad"
                autoComplete="name"
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <label style={sLabel}>Telefon *</label>
                <input
                  style={sInput}
                  value={form.telefon}
                  onChange={e => guncelle("telefon", e.target.value)}
                  placeholder="05XX XXX XXXX"
                  type="tel"
                  autoComplete="tel"
                />
              </div>
              <div>
                <label style={sLabel}>E-posta *</label>
                <input
                  style={sInput}
                  value={form.email}
                  onChange={e => guncelle("email", e.target.value)}
                  placeholder="panel@servis.com"
                  type="email"
                  autoComplete="email"
                />
              </div>
            </div>
            <div style={{ fontSize: 11.5, color: GRAY, marginTop: 6 }}>
              E-posta adresiniz panel girişinde kullanılacaktır.
            </div>
          </div>

          {/* ─── Bölüm 2: Konum ─────────────────────────────────────── */}
          <div style={{ background: "#F8FAFC", borderRadius: 16, border: "1px solid #E2E8F0", padding: "20px 18px", marginBottom: 16 }}>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 15, fontWeight: 700, color: INK, marginBottom: 16 }}>
              Konum
            </div>

            {/* Konum butonu — başlığın hemen altında: tıklayınca il/ilçe/adres otomatik dolar */}
            <div style={{ marginBottom: 16 }}>
              <button
                type="button"
                onClick={konumuAl}
                disabled={konumAlinıyor || konumAlindi}
                style={{
                  width: "100%", padding: "11px 14px", borderRadius: 10,
                  border: konumAlindi ? `1.5px solid ${GREEN}` : "1.5px solid #E2E8F0",
                  background: konumAlindi ? GREEN + "14" : "#F8FAFC",
                  color: konumAlindi ? GREEN : INK,
                  fontWeight: 600, fontSize: 13.5,
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  cursor: konumAlinıyor || konumAlindi ? "default" : "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  transition: "all .15s",
                }}
              >
                {konumAlindi
                  ? <><span>✅</span> Konum alındı ({form.lat?.toFixed(4)}, {form.lng?.toFixed(4)})</>
                  : konumAlinıyor
                  ? <><span>⏳</span> Konum alınıyor…</>
                  : <><span>📍</span> Dükkanımın Konumunu Al</>
                }
              </button>
              <div style={{ fontSize: 11.5, color: GRAY, marginTop: 5 }}>
                {konumAlindi
                  ? "İl, ilçe ve adres aşağıya otomatik dolduruldu — kontrol edip düzeltebilirsiniz."
                  : "Şu an dükkanınızdaysanız tıklayın — il, ilçe ve adres otomatik doldurulur."}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
              <div>
                <label style={sLabel}>İl *</label>
                <input
                  style={sInput}
                  value={form.il}
                  onChange={e => guncelle("il", e.target.value)}
                  placeholder="İstanbul"
                />
              </div>
              <div>
                <label style={sLabel}>İlçe *</label>
                <input
                  style={sInput}
                  value={form.ilce}
                  onChange={e => guncelle("ilce", e.target.value)}
                  placeholder="Kadıköy"
                />
              </div>
            </div>

            <div style={sGrup}>
              <label style={sLabel}>Açık Adres <span style={{ color: GRAY, fontWeight: 400 }}>(opsiyonel)</span></label>
              <input
                style={sInput}
                value={form.adres}
                onChange={e => guncelle("adres", e.target.value)}
                placeholder="Mahalle, cadde, bina no"
                autoComplete="street-address"
              />
            </div>
          </div>

          {/* ─── Bölüm 3: Hizmetler ─────────────────────────────────── */}
          <div style={{ background: "#F8FAFC", borderRadius: 16, border: "1px solid #E2E8F0", padding: "20px 18px", marginBottom: 16 }}>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 15, fontWeight: 700, color: INK, marginBottom: 6 }}>
              Hizmet Verilen Cihazlar
            </div>
            <div style={{ fontSize: 12.5, color: GRAY, marginBottom: 14 }}>
              Hangi cihaz türlerinde servis veriyorsunuz?
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {CIHAZLAR.map(k => (
                <Chip
                  key={k}
                  label={k}
                  aktif={form.kategoriler.includes(k)}
                  onClick={() => kategoriToggle(k)}
                />
              ))}
            </div>
          </div>

          {/* ─── Bölüm 4: Yetkili Servis ────────────────────────────── */}
          <div style={{ background: "#F8FAFC", borderRadius: 16, border: "1px solid #E2E8F0", padding: "20px 18px", marginBottom: 16 }}>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 15, fontWeight: 700, color: INK, marginBottom: 16 }}>
              Servis Türü
            </div>

            {/* Kademe bilgi notu — tier seçilmez, Benservis iş hacmine göre atar */}
            <div style={{ background: "#F1F5F9", borderRadius: 10, padding: "12px 14px", marginBottom: 16, fontSize: 12.5, color: "#475569", lineHeight: 1.6 }}>
              ℹ️ <strong style={{ color: INK }}>Servis kademeniz</strong> (Bronz / Gold / Platin), Benservis
              üzerinden aldığınız aylık iş hacmine göre otomatik belirlenir:
              <div style={{ marginTop: 6 }}>
                🥉 Bronz: 10–25 iş/ay · 🥇 Gold: 26–60 iş/ay · 💎 Platin: 61+ iş/ay
              </div>
            </div>

            {/* Yetkili servis checkbox */}
            <label style={{ display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer", marginTop: 4 }}>
              <input
                type="checkbox"
                checked={form.yetkili}
                onChange={e => guncelle("yetkili", e.target.checked)}
                style={{ marginTop: 3, accentColor: GREEN, width: 16, height: 16, cursor: "pointer" }}
              />
              <div>
                <div style={{ fontWeight: 700, fontSize: 13.5, color: GREEN }}>
                  Yetkili Servisim
                </div>
                <div style={{ fontSize: 12, color: GRAY, marginTop: 2 }}>
                  Üretici tarafından yetkilendirilmiş servisim. Garantili cihazlar bana yönlendirilir.
                </div>
              </div>
            </label>

            {/* Yetkili marka seçimi */}
            {form.yetkili && (
              <div style={{ marginTop: 14 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: INK, marginBottom: 10 }}>
                  Hangi markalar için yetkilendirildiniz?
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7, maxHeight: 180, overflowY: "auto" }}>
                  {MARKALAR.map(m => (
                    <Chip
                      key={m}
                      label={m}
                      aktif={form.yetkili_markalar.includes(m)}
                      onClick={() => markaToggle(m)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ─── Bölüm 5: Notlar ────────────────────────────────────── */}
          <div style={{ background: "#F8FAFC", borderRadius: 16, border: "1px solid #E2E8F0", padding: "20px 18px", marginBottom: 20 }}>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 15, fontWeight: 700, color: INK, marginBottom: 12 }}>
              Notlar <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 400, fontSize: 13, color: GRAY }}>(opsiyonel)</span>
            </div>
            <textarea
              value={form.notlar}
              onChange={e => guncelle("notlar", e.target.value)}
              placeholder="Eklemek istediğiniz bilgiler, çalışma saatleri, uzmanlık alanlarınız…"
              rows={3}
              style={{ ...sInput, resize: "vertical" }}
            />
          </div>

          {/* Hata */}
          {hata && (
            <div style={{
              padding: "12px 14px", borderRadius: 10,
              background: RED + "12", border: `1px solid ${RED}33`,
              color: RED, fontSize: 13.5, fontWeight: 600, marginBottom: 16,
            }}>
              {hata}
            </div>
          )}

          {/* Gönder butonu */}
          <button
            type="submit"
            disabled={gonderiyor}
            style={{
              width: "100%",
              padding: "15px",
              borderRadius: 13,
              border: "none",
              background: gonderiyor ? "#CBD5E1" : AMBER,
              color: "white",
              fontWeight: 700,
              fontSize: 15,
              fontFamily: "'Hanken Grotesk', sans-serif",
              cursor: gonderiyor ? "not-allowed" : "pointer",
              transition: "background .15s",
            }}
          >
            {gonderiyor ? "Gönderiliyor…" : "Başvuruyu Gönder →"}
          </button>

          <p style={{ fontSize: 12, color: GRAY, textAlign: "center", marginTop: 12 }}>
            Başvurunuz incelendikten sonra telefon numaranıza SMS ile bilgilendirme yapılacaktır.
          </p>
        </form>
      </div>
    </div>
  );
}

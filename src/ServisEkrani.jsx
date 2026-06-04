import React, { useState, useEffect } from "react";

/**
 * İki koordinat arasındaki mesafeyi km olarak hesaplar (Haversine formülü).
 */
function haversine(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const toRad = (x) => (x * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/**
 * ServisEkrani — Faz 1 teşhis sonrası servis eşleştirme ekranı.
 *
 * Props:
 *   cihaz      {string}   Faz 1'den gelen cihaz kategorisi (örn. "Klima")
 *   servisler  {Array}    services-data.json içeriği
 *   onKapat    {Function} Geri dön butonu callback'i
 */
function ServisKarti({ servis }) {
  return (
    <div style={{
      background: "white", borderRadius: 10,
      padding: "12px 14px", marginBottom: 10,
      display: "flex", justifyContent: "space-between", alignItems: "center",
      boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
    }}>
      <div style={{ flex: 1, minWidth: 0, marginRight: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
          <span style={{ fontWeight: 600, fontSize: 14, color: "#22302A" }}>
            {servis.ad}
          </span>
          {servis.yetkili && (
            <span style={{
              background: "#3A7D44", color: "white",
              fontSize: 9, padding: "2px 5px", borderRadius: 3, fontWeight: 700,
            }}>YETKİLİ</span>
          )}
        </div>
        <div style={{ fontSize: 12, color: "#888", marginTop: 3 }}>
          {servis.puan && `⭐ ${servis.puan.toFixed(1)}`}
          {servis.yorumSayisi > 0 && ` · ${servis.yorumSayisi} yorum`}
          {` · ${servis.ilce}`}
          {servis.km != null && ` · `}
          {servis.km != null && (
            <strong style={{ color: "#22302A" }}>{servis.km.toFixed(1)} km</strong>
          )}
        </div>
        {servis.googleMapsUrl && (
          <a
            href={servis.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 11, color: "#C8632B", textDecoration: "none", marginTop: 2, display: "inline-block" }}
          >
            🗺 Haritada Gör
          </a>
        )}
      </div>

      {servis.telefon ? (
        <a
          href={`tel:${servis.telefon}`}
          style={{
            background: "#C8632B", color: "white",
            borderRadius: 10, padding: "10px 14px",
            fontSize: 15, textDecoration: "none", fontWeight: 700,
            whiteSpace: "nowrap", flexShrink: 0,
          }}
        >📞 Ara</a>
      ) : (
        <span style={{ fontSize: 11, color: "#bbb", flexShrink: 0 }}>Telefon yok</span>
      )}
    </div>
  );
}

function FallbackIlce({ ilceler, secili, onSec }) {
  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <p style={{ color: "#22302A", marginBottom: 16, fontSize: 14 }}>
        Konum iznine gerek kalmadan ilçenizi seçin:
      </p>
      <select
        value={secili}
        onChange={(e) => onSec(e.target.value)}
        style={{
          padding: "10px 14px", fontSize: 14, borderRadius: 8,
          border: "2px solid #22302A", background: "#F5EFE2",
          color: "#22302A", cursor: "pointer",
        }}
      >
        <option value="">İlçe seçin...</option>
        {ilceler.map((ilce) => (
          <option key={ilce} value={ilce}>{ilce}</option>
        ))}
      </select>
    </div>
  );
}

export default function ServisEkrani({ cihaz, servisler, onKapat }) {
  // "loading" | "success" | "denied" | "error"
  const [locationState, setLocationState] = useState("loading");
  const [siraliServisler, setSiraliServisler] = useState([]);
  const [fallbackIlce, setFallbackIlce] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationState("denied");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude: lat, longitude: lng } = pos.coords;
        const eslesmis = servisler
          .filter((s) => s.kategoriler.includes(cihaz))
          .map((s) => ({ ...s, km: haversine(lat, lng, s.lat, s.lng) }))
          .sort((a, b) =>
            a.yetkili !== b.yetkili
              ? b.yetkili ? 1 : -1
              : a.km - b.km
          )
          .slice(0, 10);
        setSiraliServisler(eslesmis);
        setLocationState("success");
      },
      () => setLocationState("denied")
    );
  }, [cihaz, servisler]);

  const ilceler = [...new Set(
    servisler.filter((s) => s.kategoriler.includes(cihaz)).map((s) => s.ilce)
  )].sort();

  return (
    <div style={{
      position: "fixed", inset: 0, background: "#F5EFE2",
      overflowY: "auto", zIndex: 100, fontFamily: "'Hanken Grotesk', sans-serif",
    }}>
      {/* Üst bar */}
      <div style={{
        background: "#22302A", color: "#F5EFE2",
        padding: "14px 16px", display: "flex", alignItems: "center", gap: 12,
        position: "sticky", top: 0, zIndex: 10,
      }}>
        <button
          onClick={onKapat}
          style={{ background: "none", border: "none", color: "#F5EFE2", fontSize: 20, cursor: "pointer" }}
        >←</button>
        <span style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 600 }}>
          {cihaz} Servisleri
        </span>
      </div>

      <div style={{ padding: "16px" }}>
        {/* Yükleniyor */}
        {locationState === "loading" && (
          <p style={{ textAlign: "center", color: "#22302A", marginTop: 40 }}>
            Konumunuz alınıyor...
          </p>
        )}

        {/* Başarılı — liste */}
        {locationState === "success" && siraliServisler.length === 0 && (
          <p style={{ textAlign: "center", color: "#888", marginTop: 40 }}>
            Bu cihaz için yakında kayıtlı servis bulunamadı.
          </p>
        )}

        {locationState === "success" && siraliServisler.map((servis) => (
          <ServisKarti key={servis.id} servis={servis} />
        ))}

        {/* Konum izni reddedildi — ilçe fallback */}
        {locationState === "denied" && (
          <FallbackIlce
            ilceler={ilceler}
            secili={fallbackIlce}
            onSec={(ilce) => {
              setFallbackIlce(ilce);
              const eslesmis = servisler
                .filter((s) => s.kategoriler.includes(cihaz) && s.ilce === ilce)
                .sort((a, b) => (b.yetkili ? 1 : 0) - (a.yetkili ? 1 : 0))
                .slice(0, 10);
              setSiraliServisler(eslesmis);
              setLocationState("success");
            }}
          />
        )}
      </div>
    </div>
  );
}

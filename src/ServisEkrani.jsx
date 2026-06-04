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

  // render Task 5'te tamamlanacak
  return <div>yükleniyor...</div>;
}

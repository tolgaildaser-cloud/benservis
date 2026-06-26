// api/servis/yakin.js — Direktoriden EN YAKIN (veya ilçe) servisleri döndürür.
// services-data.json (16MB) client bundle'ına GİRMESİN diye import yalnız BURADA (sunucu).
// Sunucu kaba filtre yapar (kategori + telefon + en yakın 150); ince filtre/sıralama client'ta.
import SERVISLER from "../../src/services-data.json";
import { eslesenKategoriler } from "../../src/constants.js";

function haversine(lat1, lng1, lat2, lng2) {
  const R = 6371, toRad = (x) => (x * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1), dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export default function handler(req, res) {
  const { cihaz, lat, lng, ilce, q } = req.query || {};

  // İsimle arama (servis paneli kurulumu — servis kendini bulur). Kategori/telefon filtresi YOK.
  if (q) {
    const ql = String(q).toLowerCase();
    const bul = SERVISLER.filter((s) => s.ad && s.ad.toLowerCase().includes(ql)).slice(0, 30);
    res.setHeader("Cache-Control", "public, max-age=300");
    return res.status(200).json({ servisler: bul });
  }

  const kat = eslesenKategoriler(cihaz || "");

  // Telefonu olan + kategori eşleşen (telefonsuz = "Ara" çalışmaz → elenir)
  let list = SERVISLER.filter(
    (s) => s.telefon && Array.isArray(s.kategoriler) && s.kategoriler.some((k) => kat.includes(k))
  );

  if (lat && lng) {
    const la = parseFloat(lat), ln = parseFloat(lng);
    if (!isNaN(la) && !isNaN(ln)) {
      list = list
        .map((s) => ({ s, km: s.lat && s.lng ? haversine(la, ln, s.lat, s.lng) : Infinity }))
        .sort((a, b) => a.km - b.km)
        .slice(0, 150)
        .map((x) => x.s);
    }
  } else if (ilce) {
    list = list.filter((s) => s.ilce === ilce).slice(0, 80);
  } else {
    list = []; // konum yok → boş
  }

  res.setHeader("Cache-Control", "public, max-age=300");
  return res.status(200).json({ servisler: list });
}

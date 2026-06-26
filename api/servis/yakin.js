// api/servis/yakin.js — Direktoriden EN YAKIN (veya ilçe / isim) servisleri döndürür.
// 8MB direktori client bundle'ına GİRMEZ → yalnız bu fonksiyon okur.
// NOT: import yerine fs ile okuyoruz — büyük JSON import'u Vercel'de externalize edilip
// runtime'da undefined kalabiliyordu (FUNCTION_INVOCATION_FAILED). Dosya vercel.json
// includeFiles ile fonksiyona dahil edilir. Handler try/catch → hata olsa bile boş liste (500 değil).
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { eslesenKategoriler } from "../../src/constants.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
let SERVISLER = [];
for (const p of [
  join(process.cwd(), "src/services-data.json"),
  join(__dirname, "../../src/services-data.json"),
]) {
  try { SERVISLER = JSON.parse(readFileSync(p, "utf-8")); break; } catch { /* sonraki yolu dene */ }
}

function haversine(lat1, lng1, lat2, lng2) {
  const R = 6371, toRad = (x) => (x * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1), dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export default function handler(req, res) {
  try {
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
      list = [];
    }

    res.setHeader("Cache-Control", "public, max-age=300");
    return res.status(200).json({ servisler: list });
  } catch (e) {
    console.error("[yakin] hata:", e?.message || e);
    return res.status(200).json({ servisler: [] });
  }
}

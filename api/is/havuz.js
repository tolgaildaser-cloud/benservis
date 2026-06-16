// api/is/havuz.js
// GET /api/is/havuz
// Header: Authorization: Bearer <supabase-jwt>
// Servisin KONUMUNUN yarıçapındaki havuzdaki (servis_id NULL) işleri döndürür.
// Mesafe bazlı (BiTaksi mantığı) — ilçe sınırı değil. Koordinatı olmayan
// talepler için ilçe eşleşmesine düşülür (geri uyumluluk). musteri_tel asla dönmez.
import supabase from "../_supabase.js";
import { setCorsHeaders } from "../_verimor.js";

const RADIUS_KM = 20; // servisin hizmet yarıçapı

function haversine(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) *
    Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export default async function handler(req, res) {
  setCorsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const token = (req.headers.authorization || "").replace("Bearer ", "").trim();
  if (!token) return res.status(401).json({ error: "Token gerekli" });

  const { data: { user }, error: authErr } = await supabase.auth.getUser(token);
  if (authErr || !user) return res.status(401).json({ error: "Geçersiz token" });

  const servis_id   = user.user_metadata?.servis_id;
  const servis_ilce = user.user_metadata?.servis_ilce || null;
  if (!servis_id) return res.status(200).json({ isler: [], ilce: servis_ilce });

  // Servisin koordinatı (mesafe eşleştirmesi için)
  let svcLat = null, svcLng = null;
  const { data: svc } = await supabase
    .from("servis_basvurulari")
    .select("lat, lng")
    .eq("id", servis_id)
    .single();
  if (svc) { svcLat = svc.lat; svcLng = svc.lng; }

  // Havuzdaki tüm açık talepler
  const { data: hepsi, error } = await supabase
    .from("is_talepleri")
    .select("id, is_no, ilce, lat, lng, musteri_ad, adres, tarih_tercihi, cihaz, belirti, durum, son_kabul_tarihi, created_at")
    .eq("durum", "havuzda")
    .is("servis_id", null)
    .order("created_at", { ascending: false })
    .limit(100);

  if (error) return res.status(500).json({ error: error.message });

  const isler = (hepsi || [])
    .map((t) => {
      const km = (svcLat != null && svcLng != null && t.lat != null && t.lng != null)
        ? haversine(svcLat, svcLng, t.lat, t.lng)
        : null;
      return { t, km };
    })
    .filter(({ t, km }) => {
      // Mesafe biliniyorsa yarıçap içinde olanlar (asıl yöntem)
      if (km != null) return km <= RADIUS_KM;
      // Koordinat yoksa ilçe eşleşmesine düş (geri uyumluluk)
      return servis_ilce && t.ilce === servis_ilce;
    })
    .sort((a, b) => {
      if (a.km != null && b.km != null) return a.km - b.km;
      if (a.km != null) return -1;
      if (b.km != null) return 1;
      return 0;
    })
    .slice(0, 20)
    .map(({ t, km }) => {
      // Müşteri koordinatını frontend'e sızdırma; yalnız km göster
      const { lat, lng, ...guvenli } = t;
      return { ...guvenli, km: km != null ? Math.round(km * 10) / 10 : null };
    });

  return res.status(200).json({ isler, ilce: servis_ilce, yaricap_km: RADIUS_KM });
}

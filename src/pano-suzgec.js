// src/pano-suzgec.js — yönetim panosu ortak süzgeci: durum ↔ adres satırı (YK #195).
// Süzgeç URL'de taşınır, böylece süzülmüş görünümün bağlantısı paylaşılabilir. Sır (token) URL'ye
// YAZILMAZ; adreste ?token= varsa ilk açılışta okunur, sonraki yazımda düşer.
export const SUZGEC_ALANLARI = ["il", "ilce", "cihaz", "marka", "tur", "gelis"];
export const ARALIKLAR = [["bugun", "Bugün", 0], ["7", "7 gün", 6], ["30", "30 gün", 29], ["ozel", "Özel", null]];

// Türkiye günü: panonun gün sınırı raporla aynı olsun.
export const bugunTR = (simdi = new Date()) => new Date(simdi.getTime() + 3 * 3600e3).toISOString().slice(0, 10);
const gunOnce = (g, n) => new Date(new Date(`${g}T00:00:00Z`).getTime() - n * 864e5).toISOString().slice(0, 10);

export function aralikHesapla(aralik, simdi = new Date()) {
  const g = bugunTR(simdi), a = ARALIKLAR.find((x) => x[0] === aralik);
  return { from: gunOnce(g, a && a[2] != null ? a[2] : 29), to: g };
}

export function suzgecOku(search, simdi = new Date()) {
  const q = new URLSearchParams(search || "");
  const tarih = (s) => (/^\d{4}-\d{2}-\d{2}$/.test(s || "") ? s : "");
  const from = tarih(q.get("from")), to = tarih(q.get("to"));
  const ozel = q.get("aralik") === "ozel" && from && to;
  const aralik = ozel ? "ozel" : ARALIKLAR.some((x) => x[0] === q.get("aralik")) && q.get("aralik") !== "ozel" ? q.get("aralik") : "30";
  const d = { aralik, ...(ozel ? { from, to } : aralikHesapla(aralik, simdi)) };
  for (const k of SUZGEC_ALANLARI) d[k] = q.get(k) || "";
  return d;
}

export function suzgecYaz(d, sekme) {
  const q = new URLSearchParams();
  if (sekme) q.set("sekme", sekme);
  q.set("aralik", d.aralik);
  if (d.aralik === "ozel") { q.set("from", d.from); q.set("to", d.to); }
  for (const k of SUZGEC_ALANLARI) if (d[k]) q.set(k, d[k]);
  return `?${q}`;
}

export function apiSorgu(d, ek = {}) {
  const q = new URLSearchParams({ from: d.from, to: d.to });
  for (const k of SUZGEC_ALANLARI) if (d[k]) q.set(k, d[k]);
  for (const [k, v] of Object.entries(ek)) q.set(k, v);
  return q.toString();
}

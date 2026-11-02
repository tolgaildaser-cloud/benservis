// src/servis-dizin-ozet.js — pano "Servis talebi ve kapsam" sekmesi: dizin ve başvuru özetleri (YK #195, 2. PR).
// Saf hesap, yalnız sayı döner: ad, telefon, adres, e-posta çıktıya GİRMEZ (PII kuralı).
const say = (a, k) => { a[k] = (a[k] || 0) + 1; };

export function dizinOzet(servisler, kapsam) {
  const iller = {}, ilceler = {}, cihazlar = {};
  for (const s of servisler) {
    const il = s.sehir || "";
    const g = (iller[il] ||= { il, ad: kapsam[il] || il || "—", kapsamda: Object.hasOwn(kapsam, il), toplam: 0, serbis: 0, yetkili: 0, ilce: new Set() });
    g.toplam++; if (s.serbis) g.serbis++; if (s.yetkili) g.yetkili++;
    if (s.ilce) g.ilce.add(s.ilce);
    const k = `${il}|${s.ilce || ""}`;
    const c = (ilceler[k] ||= { il, ad: kapsam[il] || il || "—", ilce: s.ilce || "—", toplam: 0, serbis: 0 });
    c.toplam++; if (s.serbis) c.serbis++;
    for (const d of s.kategoriler || []) say(cihazlar, d);
  }
  const sira = (a, b) => b.toplam - a.toplam || a.ad.localeCompare(b.ad, "tr");
  return {
    toplam: servisler.length,
    iller: Object.values(iller).map(({ ilce, ...g }) => ({ ...g, ilceSayisi: ilce.size })).sort(sira),
    ilceler: Object.values(ilceler).sort(sira),
    cihazlar: Object.entries(cihazlar).map(([cihaz, toplam]) => ({ cihaz, toplam })).sort((a, b) => b.toplam - a.toplam),
  };
}

export function basvuruOzet(satirlar) {
  const iller = {};
  for (const { il, durum } of satirlar) {
    const g = (iller[il || "—"] ||= { il: il || "—", bekliyor: 0, onaylandi: 0, reddedildi: 0, toplam: 0 });
    g.toplam++; if (durum in g && durum !== "il" && durum !== "toplam") g[durum]++;
  }
  return Object.values(iller).sort((a, b) => b.toplam - a.toplam || a.il.localeCompare(b.il, "tr"));
}

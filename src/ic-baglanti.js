// src/ic-baglanti.js — React tarafında iç bağlantı rel kuralı (21 Eki 2026, Tolga; #179 istisnası).
// Statik HTML'deki kuralın aynısı (scripts/ic-baglanti-nofollow.mjs): query string taşıyan iç bağlantı
// rel="nofollow" alır, parametresiz iç bağlantı almaz; mevcut rel (ör. "noopener") korunur.
export function icRel(href, mevcut = "") {
  const h = typeof href === "string" ? href : "";
  const ic = h.startsWith("/") && !h.startsWith("//");
  const rel = String(mevcut || "").trim();
  if (!ic || !h.replace(/#.*$/, "").includes("?") || /\bnofollow\b/.test(rel)) return rel || undefined;
  return rel ? `${rel} nofollow` : "nofollow";
}

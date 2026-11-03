// src/push-izin.js — Web Push izni ve abonelik yardımcıları (YK #203 PR-1, 3 Kas 2026).
// Public VAPID anahtarı `VITE_VAPID_PUBLIC_KEY`'den gelir; yoksa özellik görünmez (env eklenince açılır).
// Sunucuya giden: push adresi + şifreleme anahtarları + cihaz türü. Kişisel veri yok.
const ANAHTAR = import.meta.env?.VITE_VAPID_PUBLIC_KEY || "";
export const KAPATMA_ANAHTARI = "bs_bildirim_kapatildi";
const OTUZ_GUN_MS = 30 * 24 * 60 * 60 * 1000;

export const anahtarVar = () => !!ANAHTAR;

// Tarayıcı destekliyor mu? iOS'ta push yalnız ana ekrana eklenmiş uygulamada çalışır (16.4+).
export function destek(w = globalThis.window) {
  if (!w || !("serviceWorker" in (w.navigator || {})) || !("PushManager" in w) || !("Notification" in w)) return false;
  const ios = /iPhone|iPad|iPod/.test(w.navigator.userAgent || "");
  const standalone = w.matchMedia?.("(display-mode: standalone)")?.matches || w.navigator.standalone === true;
  return !ios || standalone;
}

export function sorulabilir(w = globalThis.window, simdi = Date.now()) {
  if (!anahtarVar() || !destek(w) || w.Notification.permission !== "default") return false;
  try {
    const k = Number(w.localStorage.getItem(KAPATMA_ANAHTARI) || 0);
    return !(k && simdi - k < OTUZ_GUN_MS);
  } catch { return false; }
}

export function base64UrlByte(s) {
  const pad = "=".repeat((4 - (s.length % 4)) % 4);
  const b = atob((s + pad).replace(/-/g, "+").replace(/_/g, "/"));
  return Uint8Array.from(b, (c) => c.charCodeAt(0));
}

// PushSubscription → sunucu gövdesi. Yalnız endpoint ve iki anahtar; expirationTime vb. gitmez.
export function aboneGovdesi(sub, cihaz) {
  const j = typeof sub?.toJSON === "function" ? sub.toJSON() : sub;
  return { endpoint: j?.endpoint, p256dh: j?.keys?.p256dh, auth: j?.keys?.auth, cihaz: cihaz || null };
}

export async function aboneOl(cihaz) {
  const izin = await Notification.requestPermission();
  if (izin !== "granted") return { tur: izin };
  const kayit = await navigator.serviceWorker.ready;
  const sub = (await kayit.pushManager.getSubscription()) ||
    (await kayit.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: base64UrlByte(ANAHTAR) }));
  const r = await fetch("/api/push/abone", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(aboneGovdesi(sub, cihaz)) });
  return { tur: r.ok ? "abone" : "hata" };
}

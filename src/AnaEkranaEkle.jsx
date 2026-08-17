// AnaEkranaEkle — "telefonuna ekle" ipucu (YK Kararı #26, PWA adım 2/5).
//
// KURAL (YK planı): AGRESİF BANNER YOK.
//   - Yalnız 2. (ve sonraki) ziyarette çıkar — sayaç main.jsx'te (`bs_ziyaret`).
//   - Yalnız teşhis SONUÇ ekranında çıkar (kullanıcı değeri görmüşken).
//   - Kapatılırsa 30 gün geri gelmez (`bs_ekle_kapatildi`).
//   - Uygulama zaten ana ekrandan açıldıysa (standalone) hiç çıkmaz.
//
// Android/Chrome: `beforeinstallprompt` yakalanır → tek dokunuşla kurulum.
// iOS Safari: böyle bir olay YOK → elle tarif gösterilir (Paylaş → Ana Ekrana Ekle).

import React, { useEffect, useState } from "react";
import { track } from "@vercel/analytics";
import { BLUE as MAVI, NAVY as INK, MUTED, HAIR } from "./theme.js";

const OTUZ_GUN_MS = 30 * 24 * 60 * 60 * 1000;

const standaloneMi = () => {
  try {
    return window.matchMedia?.("(display-mode: standalone)").matches || window.navigator.standalone === true;
  } catch { return false; }
};
const iosMu = () => /iPhone|iPad|iPod/.test(navigator.userAgent) && !/CriOS|FxiOS/.test(navigator.userAgent);

function gosterilebilir() {
  if (standaloneMi()) return false;
  try {
    if (Number(localStorage.getItem("bs_ziyaret") || 0) < 2) return false; // 1. ziyarette rahatsız etme
    const kapatilma = Number(localStorage.getItem("bs_ekle_kapatildi") || 0);
    if (kapatilma && Date.now() - kapatilma < OTUZ_GUN_MS) return false;
    return true;
  } catch { return false; } // localStorage yoksa hiç gösterme
}

export default function AnaEkranaEkle() {
  const [gorunur, setGorunur] = useState(false);
  const [prompt, setPrompt] = useState(null); // Android: yakalanan beforeinstallprompt
  const [iosTarif, setIosTarif] = useState(false);

  useEffect(() => {
    if (!gosterilebilir()) return;

    // Android / masaüstü Chrome: `beforeinstallprompt` bu bileşen mount olmadan ÖNCE
    // tetiklenebiliyor → main.jsx en erken noktada yakalayıp window'a koyuyor. Önce onu
    // oku, sonra "sonra gelirse" diye olayı da dinle (iki yol da aynı state'i besler).
    const yakala = () => {
      if (window.__bsKurulumPrompt) { setPrompt(window.__bsKurulumPrompt); setGorunur(true); }
    };
    yakala();
    window.addEventListener("bs-kurulum-hazir", yakala);
    const onPrompt = (e) => { e.preventDefault(); setPrompt(e); setGorunur(true); };
    window.addEventListener("beforeinstallprompt", onPrompt);

    // iOS'ta olay hiç gelmez → şeridi doğrudan aç (elle tarifle).
    if (iosMu()) setGorunur(true);

    const onInstalled = () => { setGorunur(false); track("pwa_install", { platform: "android" }); };
    window.addEventListener("appinstalled", onInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  if (!gorunur) return null;

  const kapat = () => {
    try { localStorage.setItem("bs_ekle_kapatildi", String(Date.now())); } catch { /* yok say */ }
    setGorunur(false);
    track("pwa_ipucu_kapat", { platform: iosMu() ? "ios" : "diger" });
  };

  const kur = async () => {
    if (prompt) {
      track("pwa_ipucu_tikla", { platform: "android" });
      prompt.prompt();
      const secim = await prompt.userChoice.catch(() => null);
      if (secim?.outcome === "accepted") setGorunur(false);
      else kapat(); // reddettiyse 30 gün sorma
      return;
    }
    track("pwa_ipucu_tikla", { platform: "ios" });
    setIosTarif((v) => !v);
  };

  return (
    <div
      style={{
        marginTop: 16, background: "rgba(37,99,235,.06)", border: `1px solid ${HAIR}`,
        borderRadius: 14, padding: "12px 14px", display: "flex", alignItems: "flex-start",
        gap: 10, fontSize: 13.5, lineHeight: 1.45, color: INK,
      }}
    >
      <span aria-hidden="true" style={{ fontSize: 17, lineHeight: 1.2 }}>📱</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <strong style={{ display: "block", fontWeight: 700 }}>Benservis'i telefonuna ekle</strong>
        <span style={{ color: MUTED }}>
          Ana ekranından tek dokunuşla aç; kaydettiğin servisler internet olmasa da görünür.
        </span>
        {iosTarif && (
          <div style={{ marginTop: 8, color: MUTED }}>
            Safari'de alttaki <strong>Paylaş</strong> düğmesine dokun → <strong>Ana Ekrana Ekle</strong> → <strong>Ekle</strong>.
          </div>
        )}
        <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button
            onClick={kur}
            style={{
              background: MAVI, color: "#fff", border: "none", borderRadius: 10,
              padding: "8px 14px", fontSize: 13, fontWeight: 700,
            }}
          >
            {prompt ? "Ekle" : iosTarif ? "Gizle" : "Nasıl eklerim?"}
          </button>
          <button
            onClick={kapat}
            style={{
              background: "none", color: MUTED, border: `1px solid ${HAIR}`, borderRadius: 10,
              padding: "8px 14px", fontSize: 13, fontWeight: 600,
            }}
          >
            Şimdi değil
          </button>
        </div>
      </div>
    </div>
  );
}

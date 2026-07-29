import React from "react";
import { createRoot } from "react-dom/client";
import { inject, track } from "@vercel/analytics";
import App from "./App.jsx";
import ServisPanel from "./ServisPanel.jsx";
import DPPPublicPage from "./DPPPublicPage.jsx";
import IkinciElApp from "./IkinciElApp.jsx";
import MusteriTakip from "./MusteriTakip.jsx";
import ServisKayit from "./ServisKayit.jsx";
import ServisAdmin from "./ServisAdmin.jsx";
import RaporPaneli from "./RaporPaneli.jsx";
import ServisMagaza from "./ServisMagaza.jsx";
import UrunDetay from "./UrunDetay.jsx";
import Sepet from "./Sepet.jsx";
import TarifeAdmin from "./TarifeAdmin.jsx";

const path = window.location.pathname;
const isAriza       = path.startsWith("/ariza");
const isUrun        = path.startsWith("/urun/");
const isSepet       = path === "/sepet";
const isPanel       = path.startsWith("/panel");
const isDPP         = path.startsWith("/dpp/");
const isIkinci      = path.startsWith("/ikinci-el");
const isTakip       = path.startsWith("/takip/");
const isServisKayit = path === "/servis-kayit";
const isServisAdmin = path === "/servis-admin";
const isAdmin       = path === "/admin";
const isTarife      = path === "/tarife";
const isServisMagaza = path.startsWith("/servis/");
const takipIsNo     = isTakip ? decodeURIComponent(path.split("/")[2] || "") : null;

inject(); // Vercel Web Analytics (ziyaret/görüntüleme ölçümü)

// --- PWA (YK Kararı #26, adım 2/5) — service worker kaydı + ana ekrandan açılış ölçümü ---
// SW yalnız PRODUCTION'da kaydedilir; dev'de HMR'ı ve /api proxy'sini bozmasın.
if (import.meta.env.PROD && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {}); // sessiz: SW yoksa site normal çalışır
  });
}

// `beforeinstallprompt` React mount'tan ÖNCE tetiklenebiliyor → burada, mümkün olan en erken
// noktada yakalanıp saklanır; ipucu bileşeni (AnaEkranaEkle) buradan okur. Tarayıcının kendi
// banner'ı bastırılır — ipucu ne zaman çıkacağına YK #26 kuralı karar verir (2. ziyaret + sonuç ekranı).
window.__bsKurulumPrompt = null;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  window.__bsKurulumPrompt = e;
  window.dispatchEvent(new Event("bs-kurulum-hazir"));
});

// Ana ekrandan (standalone) mı açıldı? YK #26'nın 30 günlük tekrar-ziyaret ölçümünün girdisi.
try {
  const standalone =
    window.matchMedia?.("(display-mode: standalone)").matches || window.navigator.standalone === true;
  if (standalone) track("pwa_launch", { platform: /iPhone|iPad|iPod/.test(navigator.userAgent) ? "ios" : "diger" });
} catch { /* ölçüm asla akışı bozmaz */ }

// Ziyaret sayacı — "ana ekrana ekle" ipucu 2. ziyaretten önce GÖSTERİLMEZ (agresif banner yok).
try {
  const n = Number(localStorage.getItem("bs_ziyaret") || 0) + 1;
  localStorage.setItem("bs_ziyaret", String(Math.min(n, 99)));
} catch { /* localStorage kapalıysa ipucu hiç çıkmaz, sorun değil */ }

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {isAriza        ? <App />                           :
     isUrun         ? <UrunDetay />                     :
     isSepet        ? <Sepet />                         :
     isPanel        ? <ServisPanel />                   :
     isDPP          ? <DPPPublicPage />                 :
     isIkinci       ? <IkinciElApp />                   :
     isTakip        ? <MusteriTakip isNo={takipIsNo} /> :
     isServisKayit  ? <ServisKayit />                   :
     isServisAdmin  ? <ServisAdmin />                   :
     isTarife       ? <TarifeAdmin />                   :
     isAdmin        ? <RaporPaneli />                   :
     isServisMagaza ? <ServisMagaza />                  :
     <App />}
  </React.StrictMode>
);

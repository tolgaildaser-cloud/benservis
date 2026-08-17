import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { inject, track } from "@vercel/analytics";
import App from "./App.jsx";

// ——— YK #69 koşu 1/cila ④ — KOD BÖLME ———
// Önceki hâlde 12 ekranın hepsi tek bundle'a giriyordu: ana sayfaya gelen kullanıcı
// admin panelini, tarife yöneticisini, sepeti, DPP'yi ve ikinci el uygulamasını da
// indiriyordu — hiçbirini açmayacakken. `App` STATİK kalır (ilk boyanan ekran, lazy
// olsaydı gereksiz bir bekleme katardı); geri kalan 11 rota kendi parçasına ayrılır
// ve YALNIZ o adrese girildiğinde inar.
const ServisPanel   = lazy(() => import("./ServisPanel.jsx"));
const DPPPublicPage = lazy(() => import("./DPPPublicPage.jsx"));
const IkinciElApp   = lazy(() => import("./IkinciElApp.jsx"));
const MusteriTakip  = lazy(() => import("./MusteriTakip.jsx"));
const ServisKayit   = lazy(() => import("./ServisKayit.jsx"));
const ServisAdmin   = lazy(() => import("./ServisAdmin.jsx"));
const RaporPaneli   = lazy(() => import("./RaporPaneli.jsx"));
const ServisMagaza  = lazy(() => import("./ServisMagaza.jsx"));
const UrunDetay     = lazy(() => import("./UrunDetay.jsx"));
const Sepet         = lazy(() => import("./Sepet.jsx"));
const TarifeAdmin   = lazy(() => import("./TarifeAdmin.jsx"));

// Parça inerken görünen ara ekran. Marka zemininde sade bir satır — spinner yok:
// parçalar küçük, çoğu bağlantıda göz kırpması bile olmadan geçer; dönen bir ikon
// "bir şey yavaş" hissi verirdi.
const Yukleniyor = () => (
  <div style={{
    minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center",
    background: "#F8FAFC", color: "#64748B",
    fontFamily: "'Hanken Grotesk', system-ui, sans-serif", fontSize: 14,
  }}>Yükleniyor…</div>
);

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
    {/* Suspense yalnız lazy rotalar için: `App` statik olduğundan ana sayfa
        fallback'i HİÇ görmez, doğrudan boyanır. */}
    <Suspense fallback={<Yukleniyor />}>
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
    </Suspense>
  </React.StrictMode>
);

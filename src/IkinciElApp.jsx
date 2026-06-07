// src/IkinciElApp.jsx
// İkinci El Pazaryeri — path-based router
// /ikinci-el        → IlanListesi
// /ikinci-el/yeni   → IlanOlustur
// /ikinci-el/:id    → IlanDetay (SPA içi navigasyon için; doğrudan URL = og.js)
import React from "react";
import IlanListesi from "./IlanListesi.jsx";
import IlanOlustur from "./IlanOlustur.jsx";
import IlanDetay from "./IlanDetay.jsx";

export default function IkinciElApp() {
  const path = window.location.pathname;

  if (path === "/ikinci-el/yeni") return <IlanOlustur />;

  const match = path.match(/^\/ikinci-el\/([^/]+)$/);
  if (match) return <IlanDetay id={decodeURIComponent(match[1])} />;

  return <IlanListesi />;
}

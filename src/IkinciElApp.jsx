// src/IkinciElApp.jsx
// İkinci El Pazaryeri — path-based router
// /ikinci-el               → IlanListesi
// /ikinci-el/yeni          → IlanOlustur
// /ikinci-el/alici/:token  → AliciPaneli
// /ikinci-el/satis/:token  → SaticiPaneli
// /ikinci-el/:id           → IlanDetay (SPA; doğrudan URL → og.js)
import React from "react";
import IlanListesi from "./IlanListesi.jsx";
import IlanOlustur from "./IlanOlustur.jsx";
import IlanDetay from "./IlanDetay.jsx";
import AliciPaneli from "./AliciPaneli.jsx";
import SaticiPaneli from "./SaticiPaneli.jsx";

export default function IkinciElApp() {
  const path = window.location.pathname;

  if (path === "/ikinci-el/yeni") return <IlanOlustur />;

  const alici = path.match(/^\/ikinci-el\/alici\/([^/]+)$/);
  if (alici) return <AliciPaneli token={decodeURIComponent(alici[1])} />;

  const satici = path.match(/^\/ikinci-el\/satis\/([^/]+)$/);
  if (satici) return <SaticiPaneli saticiToken={decodeURIComponent(satici[1])} />;

  const match = path.match(/^\/ikinci-el\/([^/]+)$/);
  if (match) return <IlanDetay id={decodeURIComponent(match[1])} />;

  return <IlanListesi />;
}

// src/IkinciElApp.jsx
// İkinci El Pazaryeri — path-based router
// /ikinci-el               → IkinciElVitrin (DOD tipi, YK #171 İE-2; eski IlanListesi yerine)
// /ikinci-el/BS-2E-000123  → IkinciElDetay (dosya no; YK #171 İE-3)
// /ikinci-el/yeni          → IlanOlustur
// /ikinci-el/alici/:token  → AliciPaneli
// /ikinci-el/satis/:token  → SaticiPaneli
// /ikinci-el/:id           → IlanDetay (SPA; doğrudan URL → og.js)
import React from "react";
import IkinciElVitrin from "./IkinciElVitrin.jsx";
import IkinciElDetay from "./IkinciElDetay.jsx";
import IlanOlustur from "./IlanOlustur.jsx";
import IlanDetay from "./IlanDetay.jsx";
import AliciPaneli from "./AliciPaneli.jsx";
import SaticiPaneli from "./SaticiPaneli.jsx";
import AdminOdemePaneli from "./AdminOdemePaneli.jsx";

export default function IkinciElApp() {
  const path = window.location.pathname;

  if (path === "/ikinci-el/yeni")  return <IlanOlustur />;
  if (path === "/ikinci-el/admin") return <AdminOdemePaneli />;

  const alici = path.match(/^\/ikinci-el\/alici\/([^/]+)$/);
  if (alici) return <AliciPaneli token={decodeURIComponent(alici[1])} />;

  const satici = path.match(/^\/ikinci-el\/satis\/([^/]+)$/);
  if (satici) return <SaticiPaneli saticiToken={decodeURIComponent(satici[1])} />;

  const dosya = path.match(/^\/ikinci-el\/(BS-2E-\d{6})\/?$/i);
  if (dosya) return <IkinciElDetay dosya={dosya[1].toUpperCase()} />;

  const match = path.match(/^\/ikinci-el\/([^/]+)$/);
  if (match) return <IlanDetay id={decodeURIComponent(match[1])} />;

  return <IkinciElVitrin />;
}

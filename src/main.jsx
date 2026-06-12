import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import LandingPage from "./LandingPage.jsx";
import ServisPanel from "./ServisPanel.jsx";
import DPPPublicPage from "./DPPPublicPage.jsx";
import IkinciElApp from "./IkinciElApp.jsx";
import MusteriTakip from "./MusteriTakip.jsx";
import ServisKayit from "./ServisKayit.jsx";
import ServisAdmin from "./ServisAdmin.jsx";
import ServisMagaza from "./ServisMagaza.jsx";
import UrunDetay from "./UrunDetay.jsx";
import Sepet from "./Sepet.jsx";

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
const isServisMagaza = path.startsWith("/servis/");
const takipIsNo     = isTakip ? decodeURIComponent(path.split("/")[2] || "") : null;

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
     isServisMagaza ? <ServisMagaza />                  :
     <LandingPage />}
  </React.StrictMode>
);

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ServisPanel from "./ServisPanel.jsx";
import DPPPublicPage from "./DPPPublicPage.jsx";
import IkinciElApp from "./IkinciElApp.jsx";

const path = window.location.pathname;
const isPanel   = path.startsWith("/panel");
const isDPP     = path.startsWith("/dpp/");
const isIkinci  = path.startsWith("/ikinci-el");

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {isPanel  ? <ServisPanel />  :
     isDPP    ? <DPPPublicPage /> :
     isIkinci ? <IkinciElApp />  :
     <App />}
  </React.StrictMode>
);

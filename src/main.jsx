import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ServisPanel from "./ServisPanel.jsx";
import DPPPublicPage from "./DPPPublicPage.jsx";

const path = window.location.pathname;
const isPanel = path.startsWith("/panel");
const isDPP = path.startsWith("/dpp/");

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {isPanel ? <ServisPanel /> : isDPP ? <DPPPublicPage /> : <App />}
  </React.StrictMode>
);

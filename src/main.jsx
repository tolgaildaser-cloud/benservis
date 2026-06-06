import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ServisPanel from "./ServisPanel.jsx";

const isPanel = window.location.pathname.startsWith("/panel");

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {isPanel ? <ServisPanel /> : <App />}
  </React.StrictMode>
);

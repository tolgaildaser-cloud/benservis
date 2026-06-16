// src/cihaz-ikonlari.jsx
// Cihaz türleri için basit, tutarlı çizgi (line) ikonları — minimal & premium.
// Tümü 24×24 viewBox, stroke currentColor; renk/kalınlık dışarıdan gelir.
import React from "react";

const P = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };

const IKONLAR = {
  "Buzdolabı": (
    <g {...P}><rect x="6" y="3" width="12" height="18" rx="2" /><line x1="6" y1="10" x2="18" y2="10" /><line x1="9" y1="6" x2="9" y2="8" /><line x1="9" y1="13" x2="9" y2="16" /></g>
  ),
  "Çamaşır Makinesi": (
    <g {...P}><rect x="4" y="3" width="16" height="18" rx="2" /><circle cx="12" cy="13" r="4.2" /><circle cx="8" cy="6.5" r="0.6" fill="currentColor" /><line x1="15" y1="6.5" x2="17" y2="6.5" /></g>
  ),
  "Bulaşık Makinesi": (
    <g {...P}><rect x="4" y="3" width="16" height="18" rx="2" /><line x1="4" y1="7" x2="20" y2="7" /><line x1="16.5" y1="5" x2="17.5" y2="5" /><line x1="8" y1="11" x2="8" y2="17" /><line x1="12" y1="11" x2="12" y2="17" /><line x1="16" y1="11" x2="16" y2="17" /></g>
  ),
  "Fırın / Ocak": (
    <g {...P}><rect x="4" y="4" width="16" height="16" rx="2" /><line x1="4" y1="9" x2="20" y2="9" /><circle cx="8" cy="6.5" r="0.6" fill="currentColor" /><circle cx="12" cy="6.5" r="0.6" fill="currentColor" /><rect x="7" y="12" width="10" height="5" rx="1" /></g>
  ),
  "Klima": (
    <g {...P}><rect x="3" y="5" width="18" height="6" rx="2" /><line x1="6" y1="8.2" x2="14" y2="8.2" /><path d="M7 15c0 1.5 1.5 1.5 1.5 3" /><path d="M12 15c0 1.5 1.5 1.5 1.5 3" /><path d="M17 15c0 1.5 1.5 1.5 1.5 3" /></g>
  ),
  "Kombi": (
    <g {...P}><rect x="5" y="3" width="14" height="13" rx="2" /><rect x="8" y="6" width="8" height="3.5" rx="0.8" /><line x1="9" y1="16" x2="9" y2="20" /><line x1="15" y1="16" x2="15" y2="20" /></g>
  ),
  "Televizyon": (
    <g {...P}><rect x="3" y="4" width="18" height="12" rx="2" /><line x1="9" y1="20" x2="15" y2="20" /><line x1="12" y1="16" x2="12" y2="20" /></g>
  ),
  "Termosifon / Şofben": (
    <g {...P}><rect x="7" y="3" width="10" height="14" rx="3" /><circle cx="12" cy="9" r="2" /><line x1="9" y1="17" x2="9" y2="20" /><line x1="15" y1="17" x2="15" y2="20" /></g>
  ),
  "Mikrodalga": (
    <g {...P}><rect x="3" y="5" width="18" height="13" rx="2" /><rect x="6" y="8" width="9" height="7" rx="1" /><line x1="18" y1="9" x2="18" y2="11" /><line x1="18" y1="13" x2="18" y2="14" /></g>
  ),
  "Elektrik Süpürgesi": (
    <g {...P}><circle cx="8" cy="15" r="4" /><circle cx="8" cy="15" r="1" fill="currentColor" /><path d="M11 13l6-8" /><path d="M15 4h3v3" /></g>
  ),
  "Su Sebili / Arıtma": (
    <g {...P}><path d="M9 6c0-1.5 1.5-3 3-3s3 1.5 3 3" /><rect x="7" y="6" width="10" height="15" rx="2" /><line x1="7" y1="11" x2="17" y2="11" /><line x1="11" y1="15" x2="13" y2="15" /></g>
  ),
  "Cep Telefonu": (
    <g {...P}><rect x="7" y="3" width="10" height="18" rx="2.5" /><line x1="10.5" y1="6" x2="13.5" y2="6" /><circle cx="12" cy="18" r="0.6" fill="currentColor" /></g>
  ),
  "Robot Süpürge": (
    <g {...P}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="2.5" /><path d="M5 9.5h3" /></g>
  ),
  "Air Fryer": (
    <g {...P}><path d="M7 9h10l-1 10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2Z" /><rect x="6" y="6" width="12" height="3" rx="1" /><line x1="12" y1="13" x2="12" y2="17" /></g>
  ),
  "Masaüstü Bilgisayar": (
    <g {...P}><rect x="3" y="4" width="13" height="10" rx="1.5" /><line x1="7" y1="18" x2="12" y2="18" /><line x1="9.5" y1="14" x2="9.5" y2="18" /><rect x="18" y="5" width="3" height="13" rx="1" /></g>
  ),
  "Notebook": (
    <g {...P}><path d="M5 5h14v10H5z" /><path d="M3 19h18l-1.5-4H4.5Z" /></g>
  ),
  "Yazıcı": (
    <g {...P}><rect x="6" y="3" width="12" height="5" rx="1" /><rect x="3" y="8" width="18" height="8" rx="2" /><rect x="7" y="14" width="10" height="6" rx="1" /><circle cx="17" cy="11" r="0.6" fill="currentColor" /></g>
  ),
  "Diğer": (
    <g {...P}><path d="M14.5 6.5a3.5 3.5 0 0 0-4.9 4.4l-4.8 4.8a1.5 1.5 0 0 0 2.1 2.1l4.8-4.8a3.5 3.5 0 0 0 4.4-4.9l-2 2-1.7-1.7Z" /></g>
  ),
};

export default function CihazIkon({ cihaz, size = 26 }) {
  const ikon = IKONLAR[cihaz] || IKONLAR["Diğer"];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">{ikon}</svg>
  );
}

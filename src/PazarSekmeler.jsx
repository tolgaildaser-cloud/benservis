// src/PazarSekmeler.jsx — Pazaryeri iki sekmesi: Yedek Parça | İkinci El (YK #171, 11 Eki 2026).
// Tolga (11 Eki 11:4x): "pazaryeri tek buton olarak kalsın, tıklayınca sayfada ayrışsın.
// tek pazaryeri". Üst menüde tek "Pazaryeri" düğmesi → /pazar; ayrım burada, açılır menü yok.
// `/pazar` ve `/ikinci-el` aynı şeridi basar; etkin sekme `etkin` ile seçilir.
import React from "react";
import { track } from "@vercel/analytics";
import { BLUE } from "./theme.js";

export const PAZAR_SEKMELERI = [
  { slug: "yedek-parca", ad: "Yedek Parça", href: "/pazar" },
  { slug: "ikinci-el",   ad: "İkinci El",   href: "/ikinci-el" },
];

export default function PazarSekmeler({ etkin }) {
  return (
    <nav className="pzs" aria-label="Pazaryeri bölümleri">
      <style>{CSS}</style>
      <div className="pzs-ic">
        {PAZAR_SEKMELERI.map((s) => (
          <a
            key={s.slug} href={s.href} className={s.slug === etkin ? "on" : ""}
            aria-current={s.slug === etkin ? "page" : undefined}
            onClick={() => { try { track("pazar_sekme_click", { sekme: s.slug }); } catch { /* ölçüm akışı bozmaz */ } }}
          >{s.ad}</a>
        ))}
      </div>
    </nav>
  );
}

const CSS = `
.pzs{background:rgba(255,255,255,.06);border-top:1px solid rgba(255,255,255,.12)}
.pzs-ic{max-width:1240px;margin:0 auto;padding:0 16px;display:flex;gap:4px}
.pzs a{color:#CBD5E1!important;text-decoration:none;font-weight:700;font-size:14px;padding:10px 16px;border-bottom:3px solid transparent;white-space:nowrap}
.pzs a:hover{color:#fff!important}
.pzs a.on{color:#fff!important;border-bottom-color:${BLUE}}
@media (max-width:640px){.pzs-ic{gap:0}.pzs a{flex:1;text-align:center;padding:10px 8px}}
`;

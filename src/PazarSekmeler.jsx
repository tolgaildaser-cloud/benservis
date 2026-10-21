// src/PazarSekmeler.jsx — Pazaryeri tek satır menüsü (YK #171, 11 Eki 2026; tek satır 12 Eki).
// Tolga (11 Eki 11:4x): "pazaryeri tek buton olarak kalsın, tıklayınca sayfada ayrışsın.
// tek pazaryeri". Üst menüde tek "Pazaryeri" düğmesi → /pazar; ayrım burada, açılır menü yok.
// Tolga (12 Eki): "burayı tek satıra indir, tüm kategoriler, ikinci el ürün, yedek parça
// (yedek parça kırılımı tekrar verme, altta görsellerle verdik zaten)". Eski koyu sekme şeridi +
// cihaz kırılımlı beyaz menü yerine tek beyaz satır; `/pazar` ve `/ikinci-el` aynı satırı basar.
import React from "react";
import { track } from "@vercel/analytics";
import { BLUE } from "./theme.js";
import { icRel } from "./ic-baglanti.js"; // parametreli sekme nofollow (21 Eki)

export const PAZAR_SEKMELERI = [
  { slug: "tum",         ad: "Tüm kategoriler", href: "/pazar" },
  { slug: "ikinci-el",   ad: "İkinci El Ürün",  href: "/ikinci-el" },
  { slug: "yedek-parca", ad: "Yedek Parça",     href: "/pazar?kategori=yedek-parca" },
];

// `git`: /pazar içindeyken sayfa yenilemeden geçiş için (PazarVitrin verir); yoksa düz bağlantı.
export default function PazarSekmeler({ etkin, git }) {
  return (
    <nav className="pzs" aria-label="Pazaryeri bölümleri">
      <style>{CSS}</style>
      <div className="pzs-ic">
        {PAZAR_SEKMELERI.map((s) => (
          <a
            key={s.slug} href={s.href} rel={icRel(s.href)} className={s.slug === etkin ? "on" : ""}
            aria-current={s.slug === etkin ? "page" : undefined}
            onClick={(e) => {
              try { track("pazar_sekme_click", { sekme: s.slug }); } catch { /* ölçüm akışı bozmaz */ }
              if (git && s.slug !== "ikinci-el") {
                e.preventDefault();
                git(s.slug === "tum"
                  ? { ana: true, kategori: "yedek-parca", cihaz: "", parca: "", ara: "" }
                  : { kategori: "yedek-parca", cihaz: "", parca: "", ara: "" });
              }
            }}
          >{s.ad}</a>
        ))}
      </div>
    </nav>
  );
}

const CSS = `
.pzs{background:#fff;border-top:3px solid ${BLUE};border-bottom:1px solid #E2E8F0}
.pzs-ic{max-width:1240px;margin:0 auto;padding:0 16px;display:flex;gap:2px;overflow-x:auto;scrollbar-width:none}
.pzs-ic::-webkit-scrollbar{display:none}
.pzs a{color:#1E293B!important;text-decoration:none;font-weight:600;font-size:13.5px;padding:11px 12px;border-bottom:3px solid transparent;white-space:nowrap}
.pzs a:hover,.pzs a.on{color:${BLUE}!important;border-bottom-color:${BLUE}}
@media (max-width:640px){.pzs-ic{gap:0}.pzs a{flex:1;text-align:center;padding:11px 6px}}
`;

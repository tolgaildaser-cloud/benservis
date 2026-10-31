// src/RaporPaneli.jsx — Yönetim panosu — /admin (YK #195, 29 Eki 2026; hedef görünüm Tolga onaylı).
// Şifre ile giriş (localStorage hatırlar) → 8 sekme + ortak süzgeç çubuğu (URL'de taşınır).
// Sır = localStorage ya da ?token=. Sunucu Bearer (ADMIN_TOKEN/ADMIN_PASSWORD) kontrol eder.
// Canlı veri: her sekme kendi api/admin/* ucundan okur, en çok 60 sn önbellek. PII yok.
// Veri kaynağı henüz bağlanmamış sekme "henüz veri yok, kaynak: …" der; örnek veri YASAK.
import React, { useState, useEffect, useMemo, useCallback, lazy, Suspense } from "react";
import { NAVY as INK, BG as PAPER, BLUE, SLATE, HAIR as LINE } from "./theme.js";
import { ARALIKLAR, SUZGEC_ALANLARI, aralikHesapla, suzgecOku, suzgecYaz } from "./pano-suzgec.js";

// Her sekme kendi parçasında: panoya giren admin kullanmadığı sekmeyi indirmez.
const AdminPazarPaneli = lazy(() => import("./AdminPazarPaneli.jsx"));
const AdminSiparisPaneli = lazy(() => import("./AdminSiparisPaneli.jsx"));
const AdminServisAramaPaneli = lazy(() => import("./AdminServisAramaPaneli.jsx"));
const AdminTeshisPaneli = lazy(() => import("./AdminTeshisPaneli.jsx"));
const AdminUyelikPaneli = lazy(() => import("./AdminUyelikPaneli.jsx"));

const SEKMELER = [
  ["genel", "Genel bakış"], ["teshis", "Teşhis"], ["servis", "Servis talebi ve kapsam"], ["icerik", "İçerik ve Google"],
  ["pazar", "Pazar"], ["yerinde", "Yerinde"], ["uyelik", "Üyelik"], ["sosyal", "Sosyal"],
];
// Eski adresler kırılmasın.
const ESKI_SEKME = { rapor: "teshis", siparisler: "pazar", servisArama: "servis" };
const VERISIZ = {
  genel: "Vercel Analytics (ziyaretçi, olaylar), Google Search Console, teshis_log, servis_arama_log, siparişler, servis başvuruları, üyeler. Bu sekme panonun 3. PR'ında bağlanır.",
  icerik: "Google Search Console CSV yüklemesi, Vercel Analytics, site sayaçları. Bu sekme panonun 4. PR'ında bağlanır.",
  yerinde: "is_talepleri, yerinde_isler, yerinde_is_log, yerinde_teknisyenler. Bu sekme panonun 5. PR'ında bağlanır.",
  sosyal: "YouTube, Instagram, TikTok, LinkedIn; API bağlantıları henüz yok. Bu sekme panonun 6. PR'ında bağlanır.",
};
const SUZGEC_AD = { il: "İl", ilce: "İlçe", cihaz: "Cihaz", marka: "Marka", tur: "Kaynak sayfa", gelis: "Geliş" };
const TUR_SECENEK = [["blog", "Blog"], ["dogrudan", "Doğrudan"], ["dis", "Dış kaynak"]];

const LS_KEY = "benservis_admin";
const Yukleniyor = <div style={{ color: SLATE, fontSize: 14 }}>Yükleniyor…</div>;

export default function RaporPaneli() {
  const urlToken = new URLSearchParams(window.location.search).get("token") || "";
  const [sir, setSir] = useState(() => localStorage.getItem(LS_KEY) || urlToken || "");
  const [girisInput, setGirisInput] = useState("");
  const [hata, setHata] = useState("");
  const [durum, setDurum] = useState("bosta");
  const [sekme, setSekme] = useState(() => {
    const s = new URLSearchParams(window.location.search).get("sekme");
    const k = ESKI_SEKME[s] || s;
    return SEKMELER.some((x) => x[0] === k) ? k : "teshis";
  });
  const [altPazar, setAltPazar] = useState(() => (new URLSearchParams(window.location.search).get("sekme") === "siparisler" ? "siparisler" : "urunler"));
  const [suzgec, setSuzgec] = useState(() => suzgecOku(window.location.search));
  const [secenek, setSecenek] = useState({});
  const [okundu, setOkundu] = useState("");
  const [yenile, setYenile] = useState(0);

  // Süzgeç adreste durur; sır adrese yazılmaz.
  useEffect(() => { window.history.replaceState(null, "", `/admin${suzgecYaz(suzgec, sekme)}`); }, [suzgec, sekme]);

  const cikis = useCallback(() => { localStorage.removeItem(LS_KEY); setSir(""); setGirisInput(""); setHata(""); setDurum("bosta"); }, []);
  const yetkisiz = useCallback(() => { cikis(); setHata("Şifre hatalı, tekrar dene"); }, [cikis]);
  const secenekAl = useCallback((s, z) => { setSecenek(s || {}); setOkundu(z || ""); }, []);

  const giris = async () => {
    const t = girisInput.trim(); if (!t) return;
    setDurum("yukleniyor"); setHata("");
    try {
      const r = await fetch("/api/admin/rapor?from=2000-01-01&to=2000-01-01", { headers: { Authorization: `Bearer ${t}` } });
      if (r.status === 401) { setHata("Şifre hatalı, tekrar dene"); setDurum("bosta"); return; }
      localStorage.setItem(LS_KEY, t); setSir(t); setDurum("bosta");
    } catch (e) { setHata(e.message); setDurum("bosta"); }
  };

  const degis = (k, v) => setSuzgec((d) => ({ ...d, [k]: v, ...(k === "il" ? { ilce: "" } : {}) }));
  const aralikSec = (a) => setSuzgec((d) => (a === "ozel" ? { ...d, aralik: a } : { ...d, aralik: a, ...aralikHesapla(a) })); 
  const suzgecAktif = useMemo(() => SUZGEC_ALANLARI.some((k) => suzgec[k]), [suzgec]);

  const inputS = { padding: "8px 10px", border: `1px solid ${LINE}`, borderRadius: 8, fontSize: 16, fontFamily: "inherit", background: "#fff", color: INK, maxWidth: "100%" };
  const btnS = { padding: "9px 18px", background: BLUE, color: "#fff", border: "none", borderRadius: 9, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" };

  // ── GİRİŞ EKRANI (sır yok) ──
  if (!sir) {
    return (
      <div style={{ minHeight: "100vh", background: PAPER, fontFamily: "'Hanken Grotesk',sans-serif", padding: "20px 16px" }}>
        <div style={{ maxWidth: 340, margin: "70px auto 0", background: "#fff", border: `1px solid ${LINE}`, borderRadius: 14, padding: 24 }}>
          <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: 22, color: INK, margin: "0 0 4px" }}>Yönetim Panosu</h1>
          <p style={{ color: SLATE, fontSize: 13, margin: "0 0 16px" }}>Giriş için şifre.</p>
          <input type="password" value={girisInput} autoFocus
            onChange={(e) => setGirisInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && giris()}
            placeholder="Şifre"
            style={{ ...inputS, width: "100%", boxSizing: "border-box", marginBottom: 12 }} />
          <button onClick={giris} disabled={durum === "yukleniyor"} style={{ ...btnS, width: "100%" }}>
            {durum === "yukleniyor" ? "Kontrol ediliyor…" : "Giriş"}
          </button>
          {hata && <div style={{ color: "#DC2626", fontSize: 13, marginTop: 10, textAlign: "center" }}>{hata}</div>}
        </div>
      </div>
    );
  }

  const secim = (k) => {
    const liste = k === "tur" ? TUR_SECENEK : (secenek[k] || []).map((x) => [x, x]);
    const secili = suzgec[k];
    return (
      <label key={k} style={{ fontSize: 12, color: SLATE, fontWeight: 600, display: "flex", flexDirection: "column", gap: 3, minWidth: 0 }}>{SUZGEC_AD[k]}
        <select value={secili} onChange={(e) => degis(k, e.target.value)} style={{ ...inputS, fontSize: 14, minWidth: 110 }}>
          <option value="">Tümü</option>
          {secili && !liste.some((x) => x[0] === secili) && <option value={secili}>{secili}</option>}
          {liste.map(([v, ad]) => <option key={v} value={v}>{ad}</option>)}
        </select>
      </label>
    );
  };

  // ── PANO (sır var) ──
  return (
    <div style={{ minHeight: "100vh", background: PAPER, fontFamily: "'Hanken Grotesk',sans-serif", padding: "20px 16px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
          <div>
            <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: 24, color: INK, margin: "0 0 4px" }}>Yönetim Panosu</h1>
            <p style={{ color: SLATE, fontSize: 13, margin: 0 }}>Canlı veri · her tablo Excel'e aktarılır{okundu ? ` · son güncelleme ${new Date(okundu).toLocaleTimeString("tr-TR")}` : ""}</p>
          </div>
          <button onClick={cikis} style={{ background: "none", border: `1px solid ${LINE}`, borderRadius: 8, padding: "6px 12px", fontSize: 12.5, fontWeight: 600, color: SLATE, cursor: "pointer", fontFamily: "inherit", flexShrink: 0 }}>Çıkış</button>
        </div>

        <div role="tablist" style={{ display: "flex", gap: 2, margin: "10px 0 4px", borderBottom: `1px solid ${LINE}`, overflowX: "auto" }}>
          {SEKMELER.map(([k, ad]) => (
            <button key={k} role="tab" aria-selected={sekme === k} onClick={() => setSekme(k)}
              style={{ background: "none", border: "none", borderBottom: `2px solid ${sekme === k ? BLUE : "transparent"}`, padding: "8px 10px", marginBottom: -1, fontSize: 14, fontWeight: 700, color: sekme === k ? INK : SLATE, cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap" }}>{ad}</button>
          ))}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "flex-end", margin: "12px 0 16px" }}>
          <div style={{ display: "flex", gap: 4 }}>
            {ARALIKLAR.map(([k, ad]) => (
              <button key={k} onClick={() => aralikSec(k)} style={{ padding: "8px 10px", borderRadius: 8, border: `1px solid ${suzgec.aralik === k ? BLUE : LINE}`, background: suzgec.aralik === k ? BLUE : "#fff", color: suzgec.aralik === k ? "#fff" : INK, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>{ad}</button>
            ))}
          </div>
          {suzgec.aralik === "ozel" && <>
            <input type="date" aria-label="Başlangıç" value={suzgec.from} onChange={(e) => degis("from", e.target.value)} style={{ ...inputS, fontSize: 14 }} />
            <input type="date" aria-label="Bitiş" value={suzgec.to} onChange={(e) => degis("to", e.target.value)} style={{ ...inputS, fontSize: 14 }} />
          </>}
          {sekme === "teshis" && SUZGEC_ALANLARI.map(secim)}
          {sekme === "teshis" && suzgecAktif && <button onClick={() => setSuzgec((d) => ({ ...d, il: "", ilce: "", cihaz: "", marka: "", tur: "", gelis: "" }))} style={{ background: "none", border: "none", color: BLUE, fontWeight: 700, fontSize: 13, cursor: "pointer", fontFamily: "inherit", padding: 8 }}>Süzgeci temizle</button>}
          <button onClick={() => setYenile((n) => n + 1)} style={{ background: "#fff", border: `1px solid ${LINE}`, color: INK, borderRadius: 8, fontWeight: 700, fontSize: 13, cursor: "pointer", fontFamily: "inherit", padding: "8px 12px" }}>Yenile</button>
        </div>

        <Suspense fallback={Yukleniyor}>
          {sekme === "teshis" && <AdminTeshisPaneli sir={sir} suzgec={suzgec} yenile={yenile} onYetkisiz={yetkisiz} onSecenek={secenekAl} />}
          {sekme === "uyelik" && <AdminUyelikPaneli yenile={yenile} />}
          {sekme === "servis" && <AdminServisAramaPaneli sir={sir} from={suzgec.from} to={suzgec.to} yenile={yenile} onYetkisiz={yetkisiz} />}
          {sekme === "pazar" && (
            <>
              <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
                {[["urunler", "Ürünler"], ["siparisler", "Siparişler"]].map(([k, ad]) => (
                  <button key={k} onClick={() => setAltPazar(k)} style={{ padding: "6px 12px", borderRadius: 8, border: `1px solid ${altPazar === k ? BLUE : LINE}`, background: altPazar === k ? "#EFF6FF" : "#fff", color: altPazar === k ? BLUE : SLATE, fontWeight: 700, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>{ad}</button>
                ))}
              </div>
              {altPazar === "urunler" ? <AdminPazarPaneli sir={sir} onYetkisiz={yetkisiz} /> : <AdminSiparisPaneli sir={sir} onYetkisiz={yetkisiz} />}
            </>
          )}
          {VERISIZ[sekme] && (
            <div style={{ color: SLATE, fontSize: 14, padding: 24, background: "#fff", border: `1px solid ${LINE}`, borderRadius: 12 }}>
              <b style={{ color: INK }}>Henüz veri yok.</b> Kaynak: {VERISIZ[sekme]}
            </div>
          )}
        </Suspense>
      </div>
    </div>
  );
}

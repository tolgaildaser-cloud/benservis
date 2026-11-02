// src/AdminServisDizinPaneli.jsx — pano Servis sekmesi, ikinci yarı (YK #195, 2. PR): servis dizini ve başvurular.
// Hesap sunucuda (api/admin/servis-dizin.js), yalnız sayı gelir. Dizin tarih süzgecine bağlı değil: build zamanı veridir.
import React, { useState, useEffect } from "react";
import { NAVY as INK, SLATE, HAIR as LINE } from "./theme.js";

async function excel(sayfalar, ad) { const { xlsxIndir } = await import("./xlsx-yaz.js"); xlsxIndir(sayfalar, ad); }
async function csv(tablo, ad) { const { csvIndir } = await import("./xlsx-yaz.js"); csvIndir(tablo, ad); }

const thS = { padding: "8px 10px", color: SLATE, fontWeight: 700, whiteSpace: "nowrap", borderBottom: `1px solid ${LINE}`, textAlign: "left" };
const tdS = { padding: "7px 10px", color: INK, whiteSpace: "nowrap", borderBottom: "1px solid #F1F5F9" };
const dugme = { padding: "5px 10px", border: `1px solid ${LINE}`, borderRadius: 7, background: "#fff", color: INK, fontSize: 12.5, cursor: "pointer", fontFamily: "inherit" };
const SINIR = 30;

function Tablo({ t }) {
  const [tumu, setTumu] = useState(false);
  const satirlar = tumu ? t.satirlar : t.satirlar.slice(0, SINIR);
  return (
    <section style={{ border: `1px solid ${LINE}`, borderRadius: 12, background: "#fff", marginBottom: 14, overflow: "hidden" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, padding: "10px 12px", flexWrap: "wrap" }}>
        <b style={{ color: INK, fontSize: 14 }}>{t.ad} <span style={{ color: SLATE, fontWeight: 500 }}>({t.satirlar.length})</span></b>
        <span style={{ display: "flex", gap: 6 }}>
          <button style={dugme} onClick={() => excel([t], t.ad)}>Excel</button>
          <button style={dugme} onClick={() => csv(t, t.ad)}>CSV</button>
        </span>
      </div>
      {t.satirlar.length === 0 ? <div style={{ color: SLATE, fontSize: 14, padding: 16 }}>Henüz veri yok.</div> : (
        <div style={{ overflowX: "auto" }}>
          <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 13 }}>
            <thead><tr style={{ background: "#F1F5F9" }}>{t.basliklar.map((h) => <th key={h} style={thS}>{h}</th>)}</tr></thead>
            <tbody>{satirlar.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j} style={tdS}>{c}</td>)}</tr>)}</tbody>
          </table>
        </div>
      )}
      {!tumu && t.satirlar.length > SINIR && <button style={{ ...dugme, margin: 10 }} onClick={() => setTumu(true)}>Tümünü göster</button>}
    </section>
  );
}

export default function AdminServisDizinPaneli({ sir, yenile, onYetkisiz }) {
  const [v, setV] = useState(null);
  const [hata, setHata] = useState("");
  useEffect(() => {
    let iptal = false;
    (async () => {
      setHata("");
      try {
        const r = await fetch("/api/admin/servis-dizin", { headers: { Authorization: `Bearer ${sir}` } });
        if (r.status === 401) { onYetkisiz?.(); return; }
        const d = await r.json();
        if (!r.ok || !d.ok) throw new Error(d.error || "Dizin özeti alınamadı");
        if (!iptal) setV(d);
      } catch (e) { if (!iptal) setHata(e.message); }
    })();
    return () => { iptal = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [yenile]);

  if (hata) return <div style={{ color: "#DC2626", fontSize: 13.5, marginTop: 20 }}>{hata}</div>;
  if (!v) return null;
  const { dizin, basvurular } = v;
  return (
    <div>
      <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 19, color: INK, margin: "26px 0 6px" }}>Servis dizini</h2>
      <div style={{ fontSize: 14, color: INK, marginBottom: 12 }}><b>{dizin.toplam}</b> servis <span style={{ color: SLATE }}>· son yayındaki dizin, tarih süzgecinden bağımsız</span></div>
      <Tablo t={{ ad: "İl başına servis", basliklar: ["İl", "Kapsam", "Servis", "Serbis", "Yetkili", "İlçe"], satirlar: dizin.iller.map((g) => [g.ad, g.kapsamda ? "Kapsamda" : "Dışı", g.toplam, g.serbis, g.yetkili, g.ilceSayisi]) }} />
      <Tablo t={{ ad: "İlçe başına servis", basliklar: ["İl", "İlçe", "Servis", "Serbis"], satirlar: dizin.ilceler.map((g) => [g.ad, g.ilce, g.toplam, g.serbis]) }} />
      <Tablo t={{ ad: "Cihaz dağılımı", basliklar: ["Cihaz", "Servis"], satirlar: dizin.cihazlar.map((g) => [g.cihaz, g.toplam]) }} />
      <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 19, color: INK, margin: "26px 0 6px" }}>Servis başvuruları</h2>
      <Tablo t={{ ad: "Başvuru durumu", basliklar: ["İl", "Bekleyen", "Onaylı", "Reddedilen", "Toplam"], satirlar: basvurular.map((g) => [g.il, g.bekliyor, g.onaylandi, g.reddedildi, g.toplam]) }} />
      <div style={{ color: SLATE, fontSize: 13 }}>Arama ve WhatsApp tıkları Vercel olaylarından gelir; panonun 3. PR'ında bağlanır.</div>
    </div>
  );
}

// src/TarifeAdmin.jsx — Tarife veri giriş + onay paneli. /tarife?token=ADMIN_TOKEN
import React, { useState, useEffect } from "react";
import { CIHAZLAR } from "./constants.js";

const INK = "#1E293B", PAPER = "#F8FAFC", BLUE = "#2563EB", GREEN = "#22C55E",
      SLATE = "#64748B", HAIR = "#E2E8F0", WHITE = "#fff";
const FONT = `@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&display=swap');`;

function authToken() {
  return new URLSearchParams(window.location.search).get("token") || "";
}
async function api(path, opts = {}) {
  const res = await fetch(`/api/tarife/${path}`, {
    ...opts,
    headers: { "content-type": "application/json", authorization: `Bearer ${authToken()}`, ...(opts.headers || {}) },
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
  return data;
}

const inp = { width: "100%", padding: "10px 12px", borderRadius: 10, border: `1px solid ${HAIR}`, fontSize: 15, boxSizing: "border-box", fontFamily: "inherit" };
const btn = { background: BLUE, color: WHITE, border: "none", borderRadius: 10, padding: "11px 18px", fontWeight: 700, fontSize: 15, cursor: "pointer" };

// ── Veri giriş formu ──
function VeriGir() {
  const bos = { cihaz: "", marka: "", ariza: "", parca_tl: "", iscilik_tl: "", bolge: "", kaynak_servis: "", notlar: "" };
  const [f, setF] = useState(bos);
  const [mesaj, setMesaj] = useState("");
  const [importMesaj, setImportMesaj] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const gonder = async () => {
    setMesaj("");
    try {
      await api("veri", { method: "POST", body: JSON.stringify(f) });
      setMesaj("✓ Eklendi");
      setF({ ...bos, cihaz: f.cihaz, marka: f.marka });
    } catch (e) { setMesaj("✗ " + e.message); }
  };

  const importCSV = async (file) => {
    setImportMesaj("");
    const text = await file.text();
    const satirlar = text.split(/\r?\n/).filter((s) => s.trim());
    const basliklar = satirlar[0].split(",").map((s) => s.trim());
    const kayitlar = satirlar.slice(1).map((satir) => {
      const hucreler = satir.split(",");
      const o = {};
      basliklar.forEach((b, i) => { o[b] = (hucreler[i] || "").trim(); });
      return o;
    });
    try {
      const r = await api("veri", { method: "POST", body: JSON.stringify(kayitlar) });
      setImportMesaj(`✓ ${r.eklenen} kayıt eklendi`);
    } catch (e) { setImportMesaj("✗ " + e.message); }
  };

  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 460 }}>
      <select style={inp} value={f.cihaz} onChange={set("cihaz")}>
        <option value="">Cihaz seç…</option>
        {CIHAZLAR.map((c) => <option key={c} value={c}>{c}</option>)}
      </select>
      <input style={inp} placeholder="Marka (boş = Genel)" value={f.marka} onChange={set("marka")} />
      <input style={inp} placeholder="Arıza / parça (örn. Kompresör değişimi)" value={f.ariza} onChange={set("ariza")} />
      <div style={{ display: "flex", gap: 10 }}>
        <input style={inp} type="number" placeholder="Parça TL" value={f.parca_tl} onChange={set("parca_tl")} />
        <input style={inp} type="number" placeholder="İşçilik TL" value={f.iscilik_tl} onChange={set("iscilik_tl")} />
      </div>
      <input style={inp} placeholder="Bölge (örn. İstanbul)" value={f.bolge} onChange={set("bolge")} />
      <input style={inp} placeholder="Hangi servis" value={f.kaynak_servis} onChange={set("kaynak_servis")} />
      <input style={inp} placeholder="Not (ops.)" value={f.notlar} onChange={set("notlar")} />
      <button style={btn} onClick={gonder}>Ekle</button>
      {mesaj && <div style={{ color: mesaj[0] === "✓" ? GREEN : "#DC2626", fontWeight: 600 }}>{mesaj}</div>}

      <div style={{ borderTop: `1px solid ${HAIR}`, marginTop: 8, paddingTop: 14 }}>
        <div style={{ fontSize: 13, color: SLATE, marginBottom: 8 }}>
          CSV import (başlık: cihaz,marka,ariza,parca_tl,iscilik_tl,toplam_tl,bolge,kaynak_servis,notlar)
        </div>
        <input type="file" accept=".csv" onChange={(e) => e.target.files[0] && importCSV(e.target.files[0])} />
        {importMesaj && <div style={{ marginTop: 8, color: importMesaj[0] === "✓" ? GREEN : "#DC2626", fontWeight: 600 }}>{importMesaj}</div>}
      </div>
    </div>
  );
}

// ── Onay ekranı ──
function Onayla() {
  const [gruplar, setGruplar] = useState(null);
  const [hata, setHata] = useState("");
  const [acik, setAcik] = useState(null);
  const [duzen, setDuzen] = useState({});

  const yukle = async () => {
    setHata("");
    try { const r = await api("gruplar"); setGruplar(r.gruplar); }
    catch (e) { setHata(e.message); }
  };
  useEffect(() => { yukle(); }, []);

  const grupKey = (g) => `${g.cihaz}|${g.marka}|${g.ariza}`;
  const ac = (g) => {
    const k = grupKey(g);
    setAcik(acik === k ? null : k);
    const o = g.oneri || g.mevcut || {};
    setDuzen({ ...duzen, [k]: {
      onayli_parca_min: o.onayli_parca_min ?? "", onayli_parca_max: o.onayli_parca_max ?? "",
      onayli_iscilik: o.onayli_iscilik ?? "", onayli_beklenen: o.onayli_beklenen ?? "",
    }});
  };
  const onayla = async (g) => {
    const k = grupKey(g);
    try {
      await api("onayla", { method: "POST", body: JSON.stringify({
        cihaz: g.cihaz, marka: g.marka, ariza: g.ariza, veri_noktasi_sayisi: g.nokta, guven: g.oneri?.guven, ...duzen[k],
      })});
      await yukle();
      setAcik(null);
    } catch (e) { setHata(e.message); }
  };

  if (hata) return <div style={{ color: "#DC2626" }}>{hata}</div>;
  if (!gruplar) return <div style={{ color: SLATE }}>Yükleniyor…</div>;

  return (
    <div style={{ display: "grid", gap: 8, maxWidth: 620 }}>
      {gruplar.map((g) => {
        const k = grupKey(g);
        const d = duzen[k] || {};
        const set = (key) => (e) => setDuzen({ ...duzen, [k]: { ...d, [key]: e.target.value } });
        return (
          <div key={k} style={{ background: WHITE, border: `1px solid ${HAIR}`, borderRadius: 10, padding: "12px 14px" }}>
            <div onClick={() => ac(g)} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", gap: 8 }}>
              <div>
                <strong style={{ color: INK }}>{g.cihaz}</strong> · {g.ariza}
                {g.marka !== "Genel" && <span style={{ color: SLATE }}> ({g.marka})</span>}
                <div style={{ fontSize: 12, color: SLATE }}>{g.nokta} veri noktası</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                {g.oneri?.guven && (
                  <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 6,
                    background: g.oneri.guven === "yuksek" ? "#DCFCE7" : g.oneri.guven === "orta" ? "#FEF9C3" : "#FEE2E2",
                    color: g.oneri.guven === "yuksek" ? "#166534" : g.oneri.guven === "orta" ? "#854D0E" : "#991B1B" }}>
                    güven: {g.oneri.guven}
                  </span>
                )}
                <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 6,
                  background: g.durum === "onayli" ? "#DCFCE7" : "#F1F5F9", color: g.durum === "onayli" ? "#166534" : SLATE }}>
                  {g.durum === "onayli" ? "ONAYLI" : g.durum === "taslak" ? "TASLAK" : "YENİ"}
                </span>
              </div>
            </div>
            {acik === k && (
              <div style={{ marginTop: 12, display: "grid", gap: 8 }}>
                {g.oneri && <div style={{ fontSize: 12, color: SLATE }}>Öneri: parça {g.oneri.onayli_parca_min}–{g.oneri.onayli_parca_max}, işçilik {g.oneri.onayli_iscilik}, beklenen {g.oneri.onayli_beklenen}</div>}
                <div style={{ display: "flex", gap: 8 }}>
                  <input style={inp} type="number" placeholder="Parça min" value={d.onayli_parca_min} onChange={set("onayli_parca_min")} />
                  <input style={inp} type="number" placeholder="Parça max" value={d.onayli_parca_max} onChange={set("onayli_parca_max")} />
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <input style={inp} type="number" placeholder="İşçilik" value={d.onayli_iscilik} onChange={set("onayli_iscilik")} />
                  <input style={inp} type="number" placeholder="Beklenen toplam" value={d.onayli_beklenen} onChange={set("onayli_beklenen")} />
                </div>
                <button style={btn} onClick={() => onayla(g)}>Onayla</button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function TarifeAdmin() {
  const [tab, setTab] = useState("gir");
  if (!authToken()) return <div style={{ padding: 40, fontFamily: "sans-serif" }}>Yetkisiz — URL'ye ?token=… ekleyin.</div>;
  const tabBtn = (id, label) => (
    <button onClick={() => setTab(id)} style={{
      ...btn, background: tab === id ? INK : WHITE, color: tab === id ? WHITE : INK,
      border: `1px solid ${tab === id ? INK : HAIR}`,
    }}>{label}</button>
  );
  return (
    <div style={{ minHeight: "100vh", background: PAPER, color: INK, fontFamily: "'Hanken Grotesk', sans-serif", padding: "28px 20px" }}>
      <style>{FONT}</style>
      <h1 style={{ fontSize: 22, marginBottom: 4 }}>Tarife Veri Motoru</h1>
      <p style={{ color: SLATE, fontSize: 14, marginTop: 0 }}>Saha verisi gir · harmanlanan tarifeyi onayla</p>
      <div style={{ display: "flex", gap: 10, margin: "16px 0 22px" }}>{tabBtn("gir", "Veri Gir")}{tabBtn("onay", "Onayla")}</div>
      {tab === "gir" ? <VeriGir /> : <Onayla />}
    </div>
  );
}

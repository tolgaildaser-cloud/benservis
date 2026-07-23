// src/RaporPaneli.jsx — Teşhis raporu paneli — /admin
// Şifre ile giriş (localStorage hatırlar) → tarih aralığı → "Raporu çek" → HAM VERİ MATRİSİ (Excel benzeri) + CSV.
// Sır = localStorage ya da ?token=. Sunucu Bearer (ADMIN_TOKEN/ADMIN_PASSWORD) kontrol eder.
import React, { useState, useEffect } from "react";

const INK = "#1E293B", PAPER = "#F8FAFC", BLUE = "#2563EB", SLATE = "#64748B", LINE = "#E2E8F0";
const FONT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Hanken+Grotesk:wght@400;600;700&display=swap');`;
const LS_KEY = "benservis_admin";
const bugun = () => new Date().toISOString().slice(0, 10);
const gunOnce = (n) => new Date(Date.now() - n * 864e5).toISOString().slice(0, 10);
const trTarih = (iso) => { if (!iso) return ""; const d = new Date(iso); return `${d.toLocaleDateString("tr-TR")} ${d.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })}`; };

export default function RaporPaneli() {
  const urlToken = new URLSearchParams(window.location.search).get("token") || "";
  const [sir, setSir] = useState(() => localStorage.getItem(LS_KEY) || urlToken || "");
  const [girisInput, setGirisInput] = useState("");
  const [from, setFrom] = useState(gunOnce(30));
  const [to, setTo] = useState(bugun());
  const [rapor, setRapor] = useState(null);
  const [durum, setDurum] = useState("bosta"); // bosta | yukleniyor | hata
  const [hata, setHata] = useState("");

  const cek = async (token = sir, f = from, t = to) => {
    if (!token) return false;
    setDurum("yukleniyor"); setHata("");
    try {
      const r = await fetch(`/api/admin/rapor?from=${f}&to=${t}`, { headers: { Authorization: `Bearer ${token}` } });
      if (r.status === 401) {
        localStorage.removeItem(LS_KEY); setSir(""); setRapor(null); setDurum("bosta");
        setHata("Şifre hatalı, tekrar dene"); return false;
      }
      const d = await r.json();
      if (!r.ok || !d.ok) throw new Error(d.error || "Rapor alınamadı");
      setRapor(d); setDurum("bosta"); return true;
    } catch (e) { setHata(e.message); setDurum("hata"); return false; }
  };

  useEffect(() => { if (sir) cek(sir); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const giris = async () => {
    const t = girisInput.trim(); if (!t) return;
    setSir(t); const ok = await cek(t); if (ok) localStorage.setItem(LS_KEY, t);
  };
  const cikis = () => { localStorage.removeItem(LS_KEY); setSir(""); setRapor(null); setGirisInput(""); setHata(""); setDurum("bosta"); };

  const csvIndir = () => {
    if (!rapor?.satirlar?.length) return;
    const esc = (v) => { const s = v == null ? "" : String(v); return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s; };
    const head = ["Tarih", "Cihaz", "Marka", "Yaş", "Arıza", "İl", "İlçe", "MaliyetMin", "MaliyetMax", "Karar", "Aciliyet"];
    const lines = [head.join(",")];
    for (const s of rapor.satirlar) lines.push([trTarih(s.created_at), s.cihaz, s.marka, s.yas, s.ariza, s.il, s.ilce, s.maliyet_min, s.maliyet_max, s.karar, s.aciliyet].map(esc).join(","));
    const blob = new Blob(["﻿" + lines.join("\r\n")], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `teshis-raporu_${rapor.aralik.from}_${rapor.aralik.to}.csv`;
    a.click(); URL.revokeObjectURL(a.href);
  };

  const inputS = { padding: "8px 10px", border: `1px solid ${LINE}`, borderRadius: 8, fontSize: 16, fontFamily: "inherit", marginTop: 3 };
  const btnS = { padding: "9px 18px", background: BLUE, color: "#fff", border: "none", borderRadius: 9, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" };
  const thS = { padding: "8px 10px", color: SLATE, fontWeight: 700, whiteSpace: "nowrap", borderBottom: `1px solid ${LINE}`, textAlign: "left" };
  const tdS = { padding: "7px 10px", color: INK, whiteSpace: "nowrap", borderBottom: "1px solid #F1F5F9" };

  // ── GİRİŞ EKRANI (sır yok) ──
  if (!sir) {
    return (
      <div style={{ minHeight: "100vh", background: PAPER, fontFamily: "'Hanken Grotesk',sans-serif", padding: "20px 16px" }}>
        <style>{FONT}</style>
        <div style={{ maxWidth: 340, margin: "70px auto 0", background: "#fff", border: `1px solid ${LINE}`, borderRadius: 14, padding: 24 }}>
          <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: 22, color: INK, margin: "0 0 4px" }}>Teşhis Raporu</h1>
          <p style={{ color: SLATE, fontSize: 13, margin: "0 0 16px" }}>Giriş için şifre.</p>
          <input type="password" value={girisInput} autoFocus
            onChange={(e) => setGirisInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && giris()}
            placeholder="Şifre"
            style={{ ...inputS, width: "100%", boxSizing: "border-box", marginTop: 0, marginBottom: 12 }} />
          <button onClick={giris} disabled={durum === "yukleniyor"} style={{ ...btnS, width: "100%" }}>
            {durum === "yukleniyor" ? "Kontrol ediliyor…" : "Giriş"}
          </button>
          {hata && <div style={{ color: "#DC2626", fontSize: 13, marginTop: 10, textAlign: "center" }}>{hata}</div>}
        </div>
      </div>
    );
  }

  // ── RAPOR EKRANI (sır var) ──
  const basliklar = ["Tarih", "Cihaz", "Marka", "Yaş", "Arıza", "İl", "İlçe", "Maliyet", "Karar", "Aciliyet"];
  return (
    <div style={{ minHeight: "100vh", background: PAPER, fontFamily: "'Hanken Grotesk',sans-serif", padding: "20px 16px" }}>
      <style>{FONT}</style>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: 24, color: INK, margin: "0 0 4px" }}>Teşhis Raporu</h1>
            <p style={{ color: SLATE, fontSize: 13, marginTop: 0 }}>Ham veri matrisi · tarih aralığı seç, çek, Excel'e aktar.</p>
          </div>
          <button onClick={cikis} style={{ background: "none", border: `1px solid ${LINE}`, borderRadius: 8, padding: "6px 12px", fontSize: 12.5, fontWeight: 600, color: SLATE, cursor: "pointer", fontFamily: "inherit", flexShrink: 0 }}>Çıkış</button>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "flex-end", margin: "14px 0 16px" }}>
          <label style={{ fontSize: 12, color: SLATE, fontWeight: 600, display: "flex", flexDirection: "column" }}>Başlangıç
            <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} style={inputS} /></label>
          <label style={{ fontSize: 12, color: SLATE, fontWeight: 600, display: "flex", flexDirection: "column" }}>Bitiş
            <input type="date" value={to} onChange={(e) => setTo(e.target.value)} style={inputS} /></label>
          <button onClick={() => cek()} disabled={durum === "yukleniyor"} style={btnS}>
            {durum === "yukleniyor" ? "Çekiliyor…" : "Raporu çek"}
          </button>
        </div>

        {durum === "hata" && <div style={{ color: "#DC2626", fontSize: 13.5, marginBottom: 12 }}>{hata}</div>}

        {rapor && (
          <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10, marginBottom: 12 }}>
              <div style={{ fontSize: 14, color: INK }}><b>{rapor.toplam}</b> teşhis · <span style={{ color: SLATE }}>{rapor.aralik.from} → {rapor.aralik.to}</span></div>
              {rapor.toplam > 0 && (
                <button onClick={csvIndir} style={{ ...btnS, background: "#fff", color: BLUE, border: `1.5px solid ${BLUE}` }}>📥 Excel'e aktar (CSV)</button>
              )}
            </div>
            {rapor.kismi && <div style={{ fontSize: 12.5, color: "#9A3412", marginBottom: 10 }}>İlk 5000 satır gösteriliyor — daha fazlası için tarih aralığını daralt.</div>}
            {rapor.toplam === 0 ? (
              <div style={{ color: SLATE, fontSize: 14, textAlign: "center", padding: 24, background: "#fff", border: `1px solid ${LINE}`, borderRadius: 12 }}>Bu aralıkta kayıt yok.</div>
            ) : (
              <div style={{ overflowX: "auto", border: `1px solid ${LINE}`, borderRadius: 12, background: "#fff" }}>
                <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 13 }}>
                  <thead>
                    <tr style={{ background: "#F1F5F9" }}>{basliklar.map((h) => <th key={h} style={thS}>{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {rapor.satirlar.map((s, i) => (
                      <tr key={i}>
                        <td style={tdS}>{trTarih(s.created_at)}</td>
                        <td style={tdS}>{s.cihaz || "—"}</td>
                        <td style={tdS}>{s.marka || "—"}</td>
                        <td style={tdS}>{s.yas || "—"}</td>
                        <td style={tdS}>{s.ariza || "—"}</td>
                        <td style={tdS}>{s.il || "—"}</td>
                        <td style={tdS}>{s.ilce || "—"}</td>
                        <td style={tdS}>{s.maliyet_min != null ? `${s.maliyet_min}–${s.maliyet_max}` : "—"}</td>
                        <td style={tdS}>{s.karar || "—"}</td>
                        <td style={tdS}>{s.aciliyet || "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

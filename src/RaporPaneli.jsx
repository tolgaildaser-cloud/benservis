// src/RaporPaneli.jsx — Teşhis raporu paneli — /admin
// Şifre ile giriş (localStorage hatırlar) → tarih aralığı → "Raporu çek" → tablolar.
// Sır = localStorage ya da ?token= (geriye uyumlu). Sunucu Bearer (ADMIN_TOKEN/ADMIN_PASSWORD) kontrol eder.
import React, { useState, useEffect } from "react";

const INK = "#1E293B", PAPER = "#F8FAFC", BLUE = "#2563EB", SLATE = "#64748B", LINE = "#E2E8F0";
const FONT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Hanken+Grotesk:wght@400;600;700&display=swap');`;
const LS_KEY = "benservis_admin";
const bugun = () => new Date().toISOString().slice(0, 10);
const gunOnce = (n) => new Date(Date.now() - n * 864e5).toISOString().slice(0, 10);

function Tablo({ baslik, satirlar, toplam }) {
  const max = Math.max(1, ...satirlar.map((s) => s.adet));
  return (
    <div style={{ background: "#fff", border: `1px solid ${LINE}`, borderRadius: 12, padding: 16, marginBottom: 14 }}>
      <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: 16, color: INK, margin: "0 0 10px" }}>{baslik}</h3>
      {satirlar.length === 0 ? <div style={{ color: SLATE, fontSize: 13 }}>—</div> :
        satirlar.map((s) => (
          <div key={s.ad} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13.5, color: INK, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{s.ad}</div>
              <div style={{ height: 5, background: "#EFF6FF", borderRadius: 3, marginTop: 3 }}>
                <div style={{ height: "100%", width: `${(s.adet / max) * 100}%`, background: BLUE, borderRadius: 3 }} />
              </div>
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: BLUE, minWidth: 44, textAlign: "right" }}>
              {s.adet}{toplam ? <span style={{ color: SLATE, fontWeight: 400, fontSize: 11 }}> ·%{Math.round((s.adet / toplam) * 100)}</span> : null}
            </div>
          </div>
        ))}
    </div>
  );
}

export default function RaporPaneli() {
  const urlToken = new URLSearchParams(window.location.search).get("token") || "";
  const [sir, setSir] = useState(() => localStorage.getItem(LS_KEY) || urlToken || "");
  const [girisInput, setGirisInput] = useState("");
  const [from, setFrom] = useState(gunOnce(30));
  const [to, setTo] = useState(bugun());
  const [rapor, setRapor] = useState(null);
  const [durum, setDurum] = useState("bosta"); // bosta | yukleniyor | hata
  const [hata, setHata] = useState("");

  // Verilen sırla rapor çek; 401 → çıkış (sırrı temizle). Başarı → true.
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

  // Açılışta sır varsa otomatik çek (hatırlanan giriş)
  useEffect(() => { if (sir) cek(sir); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const giris = async () => {
    const t = girisInput.trim();
    if (!t) return;
    setSir(t);
    const ok = await cek(t);
    if (ok) localStorage.setItem(LS_KEY, t);
  };
  const cikis = () => { localStorage.removeItem(LS_KEY); setSir(""); setRapor(null); setGirisInput(""); setHata(""); setDurum("bosta"); };

  const inputS = { padding: "8px 10px", border: `1px solid ${LINE}`, borderRadius: 8, fontSize: 14, fontFamily: "inherit", marginTop: 3 };
  const btnS = { padding: "9px 18px", background: BLUE, color: "#fff", border: "none", borderRadius: 9, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" };
  const dagitSatir = (obj) => Object.entries(obj || {}).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}: ${v}`).join("  ·  ") || "—";

  // ── GİRİŞ EKRANI (sır yok) ──
  if (!sir) {
    return (
      <div style={{ minHeight: "100vh", background: PAPER, fontFamily: "'Hanken Grotesk',sans-serif", padding: "20px 16px" }}>
        <style>{FONT}</style>
        <div style={{ maxWidth: 340, margin: "70px auto 0", background: "#fff", border: `1px solid ${LINE}`, borderRadius: 14, padding: 24 }}>
          <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: 22, color: INK, margin: "0 0 4px" }}>Teşhis Raporu</h1>
          <p style={{ color: SLATE, fontSize: 13, margin: "0 0 16px" }}>Giriş için şifre.</p>
          <input
            type="password" value={girisInput} autoFocus
            onChange={(e) => setGirisInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && giris()}
            placeholder="Şifre"
            style={{ ...inputS, width: "100%", boxSizing: "border-box", marginTop: 0, marginBottom: 12 }}
          />
          <button onClick={giris} disabled={durum === "yukleniyor"} style={{ ...btnS, width: "100%" }}>
            {durum === "yukleniyor" ? "Kontrol ediliyor…" : "Giriş"}
          </button>
          {hata && <div style={{ color: "#DC2626", fontSize: 13, marginTop: 10, textAlign: "center" }}>{hata}</div>}
        </div>
      </div>
    );
  }

  // ── RAPOR EKRANI (sır var) ──
  return (
    <div style={{ minHeight: "100vh", background: PAPER, fontFamily: "'Hanken Grotesk',sans-serif", padding: "20px 16px" }}>
      <style>{FONT}</style>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: 24, color: INK, margin: "0 0 4px" }}>Teşhis Raporu</h1>
            <p style={{ color: SLATE, fontSize: 13, marginTop: 0 }}>Anonim teşhis istatistikleri · tarih aralığı seç, çek.</p>
          </div>
          <button onClick={cikis} style={{ background: "none", border: `1px solid ${LINE}`, borderRadius: 8, padding: "6px 12px", fontSize: 12.5, fontWeight: 600, color: SLATE, cursor: "pointer", fontFamily: "inherit", flexShrink: 0 }}>Çıkış</button>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "flex-end", margin: "14px 0 18px" }}>
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
            <div style={{ background: INK, color: "#fff", borderRadius: 12, padding: "14px 16px", marginBottom: 14 }}>
              <div style={{ fontSize: 13, opacity: .8 }}>{rapor.aralik.from} → {rapor.aralik.to}</div>
              <div style={{ fontFamily: "'Fraunces',serif", fontSize: 28, fontWeight: 700 }}>{rapor.toplam} <span style={{ fontSize: 14, fontWeight: 400, opacity: .8 }}>teşhis</span></div>
            </div>
            {rapor.toplam === 0 ? (
              <div style={{ color: SLATE, fontSize: 14, textAlign: "center", padding: 24 }}>Bu aralıkta kayıt yok.</div>
            ) : (
              <>
                <Tablo baslik="En çok marka" satirlar={rapor.marka} toplam={rapor.toplam} />
                <Tablo baslik="En çok arıza" satirlar={rapor.ariza} toplam={rapor.toplam} />
                <Tablo baslik="Cihaz dağılımı" satirlar={rapor.cihaz} toplam={rapor.toplam} />
                <Tablo baslik="En çok il" satirlar={rapor.il} toplam={rapor.toplam} />
                <Tablo baslik="En çok ilçe" satirlar={rapor.ilce} toplam={rapor.toplam} />
                <div style={{ background: "#fff", border: `1px solid ${LINE}`, borderRadius: 12, padding: 16, marginBottom: 14 }}>
                  <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: 16, color: INK, margin: "0 0 8px" }}>Karar / Aciliyet / Maliyet</h3>
                  <div style={{ fontSize: 13.5, color: INK, marginBottom: 6 }}><b>Karar:</b> {dagitSatir(rapor.karar)}</div>
                  <div style={{ fontSize: 13.5, color: INK, marginBottom: 6 }}><b>Aciliyet:</b> {dagitSatir(rapor.aciliyet)}</div>
                  <div style={{ fontSize: 13.5, color: INK }}><b>Maliyet:</b> {rapor.maliyet ? `ort. ${rapor.maliyet.ortMin}–${rapor.maliyet.ortMax} TL · genel ${rapor.maliyet.min}–${rapor.maliyet.max} TL` : "—"}</div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

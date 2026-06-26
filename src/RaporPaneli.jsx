// src/RaporPaneli.jsx — Teşhis raporu paneli — /admin?token=ADMIN_TOKEN
// Tarih aralığı seç → "Raporu çek" → en çok marka/arıza/il-ilçe/maliyet/karar tabloları.
import React, { useState } from "react";

const INK = "#1E293B", PAPER = "#F8FAFC", BLUE = "#2563EB", SLATE = "#64748B", LINE = "#E2E8F0";
const FONT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Hanken+Grotesk:wght@400;600;700&display=swap');`;
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
  const adminToken = new URLSearchParams(window.location.search).get("token") || "";
  const [from, setFrom] = useState(gunOnce(30));
  const [to, setTo] = useState(bugun());
  const [rapor, setRapor] = useState(null);
  const [durum, setDurum] = useState("bosta"); // bosta | yukleniyor | hata
  const [hata, setHata] = useState("");

  const cek = async () => {
    setDurum("yukleniyor"); setHata("");
    try {
      const r = await fetch(`/api/admin/rapor?from=${from}&to=${to}`, { headers: { Authorization: `Bearer ${adminToken}` } });
      const d = await r.json();
      if (!r.ok || !d.ok) throw new Error(d.error || (r.status === 401 ? "Yetkisiz — admin token hatalı" : "Rapor alınamadı"));
      setRapor(d); setDurum("bosta");
    } catch (e) { setHata(e.message); setDurum("hata"); }
  };

  const inputS = { padding: "8px 10px", border: `1px solid ${LINE}`, borderRadius: 8, fontSize: 14, fontFamily: "inherit", marginTop: 3 };
  const dagitSatir = (obj) => Object.entries(obj || {}).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}: ${v}`).join("  ·  ") || "—";

  return (
    <div style={{ minHeight: "100vh", background: PAPER, fontFamily: "'Hanken Grotesk',sans-serif", padding: "20px 16px" }}>
      <style>{FONT}</style>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: 24, color: INK, margin: "0 0 4px" }}>Teşhis Raporu</h1>
        <p style={{ color: SLATE, fontSize: 13, marginTop: 0 }}>Anonim teşhis istatistikleri · tarih aralığı seç, çek.</p>

        {!adminToken && (
          <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", color: "#991B1B", borderRadius: 10, padding: 12, fontSize: 13.5 }}>
            Erişim için URL'ye token ekleyin: <code>/admin?token=ADMIN_TOKEN</code>
          </div>
        )}

        {adminToken && (
          <>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "flex-end", margin: "14px 0 18px" }}>
              <label style={{ fontSize: 12, color: SLATE, fontWeight: 600, display: "flex", flexDirection: "column" }}>Başlangıç
                <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} style={inputS} /></label>
              <label style={{ fontSize: 12, color: SLATE, fontWeight: 600, display: "flex", flexDirection: "column" }}>Bitiş
                <input type="date" value={to} onChange={(e) => setTo(e.target.value)} style={inputS} /></label>
              <button onClick={cek} disabled={durum === "yukleniyor"} style={{ padding: "9px 18px", background: BLUE, color: "#fff", border: "none", borderRadius: 9, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
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
          </>
        )}
      </div>
    </div>
  );
}

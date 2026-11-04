// src/AdminBildirimPaneli.jsx — pano "Bildirim" sekmesi (YK #203 PR-2, 4 Kas 2026).
// Abone sayısı + son 50 abonelik (kimliksiz: yalnız sıra no, cihaz, tarihler) ve gönderim formu.
// "Test gönder" seçili tek aboneye gider, ay sayacına yazılmaz. "Herkese gönder" onay ister; ayda 2 tavanı uçta.
import React, { useState, useEffect, useCallback } from "react";
import { NAVY as INK, BLUE, SLATE, HAIR as LINE } from "./theme.js";
import { BASLIK_EN_UZUN, METIN_EN_UZUN, AY_TAVANI } from "./push-gonderim.js";

const kart = { background: "#fff", border: `1px solid ${LINE}`, borderRadius: 12, padding: 14 };
const girdi = { width: "100%", boxSizing: "border-box", padding: "9px 11px", border: `1px solid ${LINE}`, borderRadius: 9, fontSize: 14, fontFamily: "inherit", color: INK };
const dugme = { padding: "9px 16px", borderRadius: 9, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", border: "none" };
const tarih = (t) => (t ? new Date(t).toLocaleString("tr-TR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }) : "—");

export default function AdminBildirimPaneli({ sir, yenile, onYetkisiz }) {
  const [v, setV] = useState(null);
  const [hata, setHata] = useState("");
  const [baslik, setBaslik] = useState("Benservis");
  const [metin, setMetin] = useState("");
  const [url, setUrl] = useState("/");
  const [secili, setSecili] = useState(null);
  const [mesaj, setMesaj] = useState("");
  const [mesgul, setMesgul] = useState(false);

  const yukle = useCallback(async () => {
    try {
      const r = await fetch("/api/admin/push", { headers: { Authorization: `Bearer ${sir}` } });
      if (r.status === 401) { onYetkisiz?.(); return; }
      const d = await r.json();
      if (!r.ok) throw new Error(d.error || "Okunamadı");
      setV(d); setHata("");
    } catch (e) { setHata(e.message); }
  }, [sir, onYetkisiz]);
  useEffect(() => { yukle(); }, [yukle, yenile]);

  const gonder = async (hedef) => {
    if (hedef === "hepsi" && !window.confirm(`Bildirim ${v?.aktif ?? 0} aboneye gidecek (ayda en çok ${AY_TAVANI}). Gönderilsin mi?`)) return;
    setMesgul(true); setMesaj("");
    try {
      const r = await fetch("/api/admin/push", {
        method: "POST", headers: { Authorization: `Bearer ${sir}`, "Content-Type": "application/json" },
        body: JSON.stringify({ baslik, metin, url, hedef, ...(hedef === "tek" ? { id: secili } : {}) }),
      });
      if (r.status === 401) { onYetkisiz?.(); return; }
      const d = await r.json();
      if (!r.ok) throw new Error(d.error || "Gönderilemedi");
      setMesaj(`Gönderilen ${d.gonderilen} · tavandan atlanan ${d.atlanan} · süresi dolup silinen ${d.silinen} · hata ${d.hata}`);
      yukle();
    } catch (e) { setMesaj(`Hata: ${e.message}`); }
    setMesgul(false);
  };

  if (hata) return <div style={{ color: "#DC2626", fontSize: 13.5 }}>{hata}</div>;
  if (!v) return <div style={{ color: SLATE, fontSize: 14 }}>Yükleniyor…</div>;
  const hazir = baslik.trim() && metin.trim() && !mesgul;
  return (
    <div style={{ display: "grid", gap: 14 }}>
      <div style={{ ...kart, display: "flex", gap: 24, flexWrap: "wrap" }}>
        <div><div style={{ fontSize: 12.5, color: SLATE, fontWeight: 600 }}>Bildirim izni veren</div>
          <div style={{ fontSize: 26, color: INK, fontWeight: 800, fontFamily: "'Fraunces',serif" }}>{v.aktif}</div></div>
        <div style={{ fontSize: 13, color: SLATE, alignSelf: "center", maxWidth: 420 }}>Ay: {v.ay}. Bir aboneye ayda en çok {AY_TAVANI} bildirim gider; test gönderimi sayılmaz. İzni kaldıranın kaydı silinir.</div>
      </div>

      <div style={{ ...kart, display: "grid", gap: 10 }}>
        <b style={{ color: INK }}>Yeni bildirim</b>
        <label style={{ fontSize: 13, color: SLATE }}>Başlık ({baslik.length}/{BASLIK_EN_UZUN})
          <input style={girdi} value={baslik} maxLength={BASLIK_EN_UZUN} onChange={(e) => setBaslik(e.target.value)} /></label>
        <label style={{ fontSize: 13, color: SLATE }}>Metin ({metin.length}/{METIN_EN_UZUN})
          <textarea style={{ ...girdi, minHeight: 70 }} value={metin} maxLength={METIN_EN_UZUN} onChange={(e) => setMetin(e.target.value)} /></label>
        <label style={{ fontSize: 13, color: SLATE }}>Açılacak sayfa (site içi yol, ör. /blog/klima-nasil-calisir/)
          <input style={girdi} value={url} onChange={(e) => setUrl(e.target.value)} /></label>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button style={{ ...dugme, background: secili && hazir ? BLUE : "#CBD5E1", color: "#fff" }} disabled={!secili || !hazir} onClick={() => gonder("tek")}>
            {secili ? `#${secili} numaralı aboneye test gönder` : "Test için listeden abone seç"}</button>
          <button style={{ ...dugme, background: "#fff", color: hazir ? INK : "#94A3B8", border: `1.5px solid ${LINE}` }} disabled={!hazir || !v.aktif} onClick={() => gonder("hepsi")}>Herkese gönder</button>
        </div>
        {mesaj && <div style={{ fontSize: 13.5, color: mesaj.startsWith("Hata") ? "#DC2626" : "#16A34A" }}>{mesaj}</div>}
      </div>

      <div style={kart}>
        <b style={{ color: INK }}>Son abonelikler</b>
        {!v.liste.length ? <p style={{ color: SLATE, fontSize: 13.5 }}>Henüz abone yok.</p> : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13.5, marginTop: 8 }}>
              <thead><tr style={{ color: SLATE, textAlign: "left" }}>{["", "No", "Cihaz", "İzin", "Son teşhis", "Son gönderim", "Bu ay"].map((h) => <th key={h} style={{ padding: "6px 8px", borderBottom: `1px solid ${LINE}` }}>{h}</th>)}</tr></thead>
              <tbody>{v.liste.map((s) => (
                <tr key={s.id} onClick={() => setSecili(s.id)} style={{ cursor: "pointer", background: secili === s.id ? "rgba(37,99,235,.08)" : "transparent" }}>
                  <td style={{ padding: "6px 8px" }}><input type="radio" readOnly checked={secili === s.id} aria-label={`#${s.id} seç`} /></td>
                  <td style={{ padding: "6px 8px" }}>#{s.id}</td>
                  <td style={{ padding: "6px 8px" }}>{s.cihaz || "—"}</td>
                  <td style={{ padding: "6px 8px" }}>{tarih(s.izin_at)}</td>
                  <td style={{ padding: "6px 8px" }}>{tarih(s.teshis_at)}</td>
                  <td style={{ padding: "6px 8px" }}>{tarih(s.son_gonderim)}</td>
                  <td style={{ padding: "6px 8px" }}>{s.ay_gonderim}/{AY_TAVANI}</td>
                </tr>))}</tbody>
            </table>
          </div>)}
      </div>
    </div>
  );
}

// src/AdminServisAramaPaneli.jsx — /admin "Servis Arama" sekmesi (29 Eki 2026, Tolga).
// Yakın servis aramaları il/ilçe bazında, kapsamda mı değil mi. PII yok: yalnız toplanmış sayılar
// (api/admin/servis-arama.js). Soru: kullanıcı nerede servis arıyor ve orada dizinimiz var mı?
// İkinci tablo: sayfa-şehir sayacı (api/admin/sehir-sayac.js) — ziyaretçi hangi şehirden, il kapsamda mı.
import React, { useState, useEffect } from "react";
import { NAVY as INK, BLUE, SLATE, HAIR as LINE } from "./theme.js";
import { KAPSAM_ILLER } from "./kapsam-iller.js";

const bugun = () => new Date().toISOString().slice(0, 10);
const gunOnce = (n) => new Date(Date.now() - n * 864e5).toISOString().slice(0, 10);

export default function AdminServisAramaPaneli({ sir, onYetkisiz }) {
  const [from, setFrom] = useState(gunOnce(14));
  const [to, setTo] = useState(bugun());
  const [veri, setVeri] = useState(null);
  const [sehir, setSehir] = useState(null);
  const [durum, setDurum] = useState("bosta");
  const [hata, setHata] = useState("");
  const [yalnizDisi, setYalnizDisi] = useState(false);

  const cek = async () => {
    setDurum("yukleniyor"); setHata("");
    try {
      const h = { headers: { Authorization: `Bearer ${sir}` } };
      const [r, r2] = await Promise.all([
        fetch(`/api/admin/servis-arama?from=${from}&to=${to}`, h),
        fetch(`/api/admin/sehir-sayac?from=${from}&to=${to}`, h),
      ]);
      if (r.status === 401 || r2.status === 401) { onYetkisiz?.(); return; }
      const [d, d2] = await Promise.all([r.json(), r2.json()]);
      if (!r.ok || !d.ok) throw new Error(d.error || "Rapor alınamadı");
      setVeri(d); setSehir(d2?.ok ? d2 : null); setDurum("bosta");
    } catch (e) { setHata(e.message); setDurum("hata"); }
  };
  useEffect(() => { cek(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const inputS = { padding: "8px 10px", border: `1px solid ${LINE}`, borderRadius: 8, fontSize: 16, fontFamily: "inherit", marginTop: 3 };
  const btnS = { padding: "9px 18px", background: BLUE, color: "#fff", border: "none", borderRadius: 9, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" };
  const thS = { padding: "8px 10px", color: SLATE, fontWeight: 700, whiteSpace: "nowrap", borderBottom: `1px solid ${LINE}`, textAlign: "left" };
  const tdS = { padding: "7px 10px", color: INK, whiteSpace: "nowrap", borderBottom: "1px solid #F1F5F9" };
  const gruplar = (veri?.gruplar || []).filter((g) => !yalnizDisi || !g.kapsamda);
  const sehirler = (sehir?.sehirler || []).filter((g) => !yalnizDisi || g.kapsam !== "kapsamda");
  const KAPSAM_YAZI = { kapsamda: ["Kapsamda", "#16A34A"], disi: ["Dışı", "#DC2626"], "yurt-disi": ["Yurt dışı", SLATE] };
  const TURLER = [["teshis", "Teşhis"], ["blog", "Blog"], ["tamir", "Tamir"], ["kilavuz", "Kılavuz"], ["urun", "Ürün"], ["diger", "Diğer"]];

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "flex-end", margin: "0 0 16px" }}>
        <label style={{ fontSize: 12, color: SLATE, fontWeight: 600, display: "flex", flexDirection: "column" }}>Başlangıç
          <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} style={inputS} /></label>
        <label style={{ fontSize: 12, color: SLATE, fontWeight: 600, display: "flex", flexDirection: "column" }}>Bitiş
          <input type="date" value={to} onChange={(e) => setTo(e.target.value)} style={inputS} /></label>
        <button onClick={cek} disabled={durum === "yukleniyor"} style={btnS}>{durum === "yukleniyor" ? "Çekiliyor…" : "Raporu çek"}</button>
        <label style={{ fontSize: 13, color: INK, display: "flex", gap: 6, alignItems: "center" }}>
          <input type="checkbox" checked={yalnizDisi} onChange={(e) => setYalnizDisi(e.target.checked)} /> Yalnız kapsam dışı
        </label>
      </div>
      {durum === "hata" && <div style={{ color: "#DC2626", fontSize: 13.5, marginBottom: 12 }}>{hata}</div>}
      {veri && (
        <>
          <div style={{ fontSize: 14, color: INK, marginBottom: 12 }}>
            <b>{veri.toplam}</b> arama · kapsam dışı <b>{veri.kapsamDisi}</b> · <span style={{ color: SLATE }}>{veri.aralik.from} → {veri.aralik.to}</span>
          </div>
          {gruplar.length === 0 ? (
            <div style={{ color: SLATE, fontSize: 14, textAlign: "center", padding: 24, background: "#fff", border: `1px solid ${LINE}`, borderRadius: 12 }}>Bu aralıkta kayıt yok.</div>
          ) : (
            <div style={{ overflowX: "auto", border: `1px solid ${LINE}`, borderRadius: 12, background: "#fff" }}>
              <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 13 }}>
                <thead><tr style={{ background: "#F1F5F9" }}>{["İl", "İlçe", "Kapsamda", "Arama", "Sonuçsuz"].map((h) => <th key={h} style={thS}>{h}</th>)}</tr></thead>
                <tbody>
                  {gruplar.map((g, i) => (
                    <tr key={i}>
                      <td style={tdS}>{g.il ? (KAPSAM_ILLER[g.il] || g.il) : "— (çözülemedi)"}</td>
                      <td style={tdS}>{g.ilce || "—"}</td>
                      <td style={{ ...tdS, color: g.kapsamda ? "#16A34A" : "#DC2626", fontWeight: 700 }}>{g.kapsamda ? "Evet" : "Hayır"}</td>
                      <td style={tdS}>{g.arama}</td>
                      <td style={tdS}>{g.sonucsuz}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
      {sehir && (
        <>
          <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: 19, color: INK, margin: "26px 0 6px" }}>Ziyaretçi şehri</h2>
          <div style={{ fontSize: 14, color: INK, marginBottom: 12 }}>
            <b>{sehir.toplam}</b> sayfa açılışı · kapsamda <b>{sehir.kapsamda}</b> · dışı <b>{sehir.disi}</b> · yurt dışı <b>{sehir.yurtDisi}</b>
            <span style={{ color: SLATE }}> · Vercel şehir başlığı, toplu sayım · yüzdeler sayfa kapanırken gelen ölçüme göre</span>
          </div>
          {sehirler.length === 0 ? (
            <div style={{ color: SLATE, fontSize: 14, textAlign: "center", padding: 24, background: "#fff", border: `1px solid ${LINE}`, borderRadius: 12 }}>Bu aralıkta kayıt yok.</div>
          ) : (
            <div style={{ overflowX: "auto", border: `1px solid ${LINE}`, borderRadius: 12, background: "#fff" }}>
              <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 13 }}>
                <thead><tr style={{ background: "#F1F5F9" }}>{["Şehir", "İl", "Kapsam", "Toplam", ...TURLER.map((t) => t[1]), "10 sn altında çıkan", "Sonuna kadar okuyan"].map((h) => <th key={h} style={thS}>{h}</th>)}</tr></thead>
                <tbody>
                  {sehirler.map((g, i) => (
                    <tr key={i}>
                      <td style={tdS}>{g.sehir || "—"}{g.ulke && g.ulke !== "TR" ? ` (${g.ulke})` : ""}</td>
                      <td style={tdS}>{g.il ? (KAPSAM_ILLER[g.il] || g.il) : "—"}</td>
                      <td style={{ ...tdS, color: KAPSAM_YAZI[g.kapsam][1], fontWeight: 700 }}>{KAPSAM_YAZI[g.kapsam][0]}</td>
                      <td style={tdS}>{g.toplam}</td>
                      {TURLER.map(([k]) => <td key={k} style={tdS}>{g.tur[k] || 0}</td>)}
                      <td style={tdS} title={g.okuma?.final ? `${g.okuma.final} kapanış ölçümü` : "ölçüm yok"}>{g.okuma?.kisaYuzde != null ? `%${g.okuma.kisaYuzde}` : "—"}</td>
                      <td style={tdS} title={g.okuma?.final ? `${g.okuma.final} kapanış ölçümü` : "ölçüm yok"}>{g.okuma?.sonunaYuzde != null ? `%${g.okuma.sonunaYuzde}` : "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
}

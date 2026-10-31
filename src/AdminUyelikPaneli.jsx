// src/AdminUyelikPaneli.jsx — pano Üyelik sekmesi, şimdilik yalnız sayı kutuları (31 Eki 2026).
// Tam sekme (günlük kayıt, garanti bitiş ayı, olaylar) panonun 5. PR'ında.
// Kaynak herkese açık sayı ucu /api/istatistik/uyeler; PII yok, en çok 1 saat önbellek.
import React, { useState, useEffect } from "react";
import { NAVY as INK, SLATE, HAIR as LINE } from "./theme.js";

const kart = { background: "#fff", border: `1px solid ${LINE}`, borderRadius: 12, padding: 14 };
const Kutu = ({ ad, deger }) => (
  <div style={kart}>
    <div style={{ fontSize: 12.5, color: SLATE, fontWeight: 600 }}>{ad}</div>
    <div style={{ fontSize: 26, color: INK, fontWeight: 800, fontFamily: "'Fraunces',serif" }}>{deger}</div>
  </div>
);

export default function AdminUyelikPaneli({ yenile }) {
  const [v, setV] = useState(null);
  const [hata, setHata] = useState("");
  useEffect(() => {
    let iptal = false;
    fetch("/api/istatistik/uyeler").then(async (r) => {
      const d = await r.json();
      if (!r.ok) throw new Error(d.error || "Sayı alınamadı");
      if (!iptal) { setV(d); setHata(""); }
    }).catch((e) => { if (!iptal) setHata(e.message); });
    return () => { iptal = true; };
  }, [yenile]);
  if (hata) return <div style={{ color: "#DC2626", fontSize: 13.5 }}>{hata}</div>;
  if (!v) return <div style={{ color: SLATE, fontSize: 14 }}>Yükleniyor…</div>;
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", gap: 10 }}>
        <Kutu ad="Toplam üye" deger={v.uye_toplam} />
        <Kutu ad="Son 7 günde yeni üye" deger={v.son_7_gun} />
        <Kutu ad="Garanti hatırlatıcı kaydı" deger={v.garanti_kayit_toplam} />
      </div>
      <p style={{ color: SLATE, fontSize: 13, marginTop: 12 }}>Sayılar en çok 1 saat gecikmeli olabilir. Test hesapları ayrılmaz. Günlük kayıt ve garanti ayrıntısı sonraki adımda eklenecek.</p>
    </div>
  );
}

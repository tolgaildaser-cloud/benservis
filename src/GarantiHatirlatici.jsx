// src/GarantiHatirlatici.jsx — teşhis SONUÇ ekranındaki garanti hatırlatma formu (YK #136).
// Yalnız sonuç ekranında render edilir (App.jsx SONUC_ICERIK); teşhis akışına dokunmaz (#177).
// Metinler ve doğrulama `garanti-hatirlatici.js`'ten — form ile sunucu aynı kuralı okur.
import { useState } from "react";
import { track } from "@vercel/analytics";
import { METIN, garantiKaydiDogrula } from "./garanti-hatirlatici.js";
import { NAVY, BLUE, BG, SURFACE, MUTED, HAIR, SLATE, RED } from "./theme.js";

const GREEN_OK = "#16A34A";

export default function GarantiHatirlatici({ cihaz, marka }) {
  // Marka teşhisten dolu gelir, düzenlenebilir. Model teşhiste sorulmuyor → boş, isteğe bağlı.
  const [f, setF] = useState({ marka: marka || "", model: "", satin_alma_tarihi: "", garanti_bitis_tarihi: "", eposta: "" });
  const [riza, setRiza] = useState(false);
  const [durum, setDurum] = useState("bos"); // bos | gonderiliyor | tamam
  const [hata, setHata] = useState("");
  const set = (k) => (e) => setF((x) => ({ ...x, [k]: e.target.value }));

  const gonder = async (e) => {
    e.preventDefault();
    setHata("");
    const govde = { ...f, kategori: cihaz, riza };
    const kontrol = garantiKaydiDogrula(govde);
    if (kontrol.hata) { setHata(kontrol.hata); return; } // onay kutusu boşken istek HİÇ gitmez
    setDurum("gonderiliyor");
    try {
      const r = await fetch("/api/garanti/hatirlatici", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(govde),
      });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) { setHata(j.error || "Kayıt şu an yapılamadı, lütfen biraz sonra tekrar deneyin."); setDurum("bos"); return; }
      setDurum("tamam");
      try { track("garanti_kayit", { cihaz }); } catch {} // kişisel veri yok: yalnız cihaz türü
    } catch {
      setHata("Bağlantı kurulamadı, lütfen tekrar deneyin.");
      setDurum("bos");
    }
  };

  if (durum === "tamam") {
    return (
      <div style={s.kutu} role="status">
        <div style={s.baslik}>{METIN.baslik}</div>
        <p style={{ ...s.alt, color: GREEN_OK, fontWeight: 600, marginBottom: 0 }}>✓ {METIN.basari}</p>
      </div>
    );
  }

  return (
    <form style={s.kutu} onSubmit={gonder} noValidate aria-labelledby="garanti-baslik">
      <div id="garanti-baslik" style={s.baslik}>{METIN.baslik}</div>
      <p style={s.alt}>{METIN.alt}</p>

      <div style={s.izgara}>
        <label style={s.etiket}>Marka
          <input style={s.girdi} value={f.marka} onChange={set("marka")} maxLength={60} autoComplete="off" />
        </label>
        <label style={s.etiket}>Model <span style={s.istege}>(isteğe bağlı)</span>
          <input style={s.girdi} value={f.model} onChange={set("model")} maxLength={80} autoComplete="off" />
        </label>
        <label style={s.etiket}>{METIN.satinAlma}
          <input style={s.girdi} type="month" value={f.satin_alma_tarihi} onChange={set("satin_alma_tarihi")} required />
        </label>
        <label style={s.etiket}>{METIN.garantiBitis}
          <input style={s.girdi} type="date" value={f.garanti_bitis_tarihi} onChange={set("garanti_bitis_tarihi")} required aria-describedby="garanti-yardim" />
        </label>
      </div>
      <p id="garanti-yardim" style={s.yardim}>{METIN.garantiYardim}</p>

      <label style={s.etiket}>{METIN.eposta}
        <input style={s.girdi} type="email" inputMode="email" autoComplete="email" value={f.eposta} onChange={set("eposta")} maxLength={254} required />
      </label>

      <label style={s.onay}>
        <input type="checkbox" checked={riza} onChange={(e) => setRiza(e.target.checked)} style={s.kutucuk} />
        <span>{METIN.onayOnce}<a href="/gizlilik/" target="_blank" rel="noopener" style={{ color: BLUE }}>{METIN.onayLink}</a>{METIN.onaySonra}</span>
      </label>

      {hata && <p style={s.hata} role="alert">{hata}</p>}

      <button type="submit" disabled={!riza || durum === "gonderiliyor"} style={{ ...s.dugme, opacity: !riza || durum === "gonderiliyor" ? 0.5 : 1, cursor: riza ? "pointer" : "not-allowed" }}>
        {durum === "gonderiliyor" ? "Kaydediliyor…" : METIN.dugme}
      </button>
    </form>
  );
}

const s = {
  kutu: { marginTop: 16, background: SURFACE, border: `1px solid ${HAIR}`, borderRadius: 18, padding: "18px 20px", color: NAVY, fontFamily: "'Hanken Grotesk', sans-serif" },
  baslik: { fontFamily: "'Fraunces', serif", fontSize: 17, fontWeight: 600 },
  alt: { fontSize: 13.5, color: MUTED, margin: "4px 0 12px", lineHeight: 1.5 },
  izgara: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: "0 12px" },
  etiket: { display: "block", fontSize: 13, fontWeight: 700, margin: "10px 0 0", color: NAVY },
  istege: { fontWeight: 400, color: SLATE },
  girdi: { display: "block", width: "100%", height: 44, marginTop: 6, padding: "0 12px", borderRadius: 12, border: `1px solid ${HAIR}`, background: BG, fontSize: 16, fontFamily: "inherit", color: NAVY, boxSizing: "border-box" },
  yardim: { fontSize: 12.5, color: SLATE, margin: "6px 0 0", lineHeight: 1.45 },
  onay: { display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13, color: MUTED, lineHeight: 1.5, margin: "14px 0 0", cursor: "pointer" },
  kutucuk: { width: 18, height: 18, marginTop: 2, flexShrink: 0, accentColor: BLUE },
  hata: { fontSize: 13, color: RED, margin: "10px 0 0", fontWeight: 600 },
  dugme: { marginTop: 14, width: "100%", height: 46, border: "none", borderRadius: 12, background: BLUE, color: "#fff", fontSize: 15, fontWeight: 700, fontFamily: "inherit" },
};

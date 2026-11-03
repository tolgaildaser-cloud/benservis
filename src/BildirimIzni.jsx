// BildirimIzni — teşhis sonucu ekranında bildirim izni (YK #203 PR-1, 3 Kas 2026).
// Yalnız sonuç ekranında, tarayıcı destekliyorsa ve izin daha önce sorulmadıysa çıkar; kapatılırsa 30 gün gelmez.
// iOS'ta yalnız ana ekrandan açılan uygulamada görünür (Safari push'u başka yerde vermez).
import React, { useState } from "react";
import { track } from "@vercel/analytics";
import { BLUE as MAVI, NAVY as INK, MUTED, HAIR } from "./theme.js";
import { sorulabilir, aboneOl, KAPATMA_ANAHTARI } from "./push-izin.js";

export default function BildirimIzni({ cihaz }) {
  const [durum, setDurum] = useState(() => (sorulabilir() ? "soru" : "yok"));
  if (durum === "yok") return null;

  const ac = async () => {
    setDurum("bekle");
    try {
      const { tur } = await aboneOl(cihaz);
      track("push_izin", { sonuc: tur });
      setDurum(tur === "abone" ? "tamam" : "yok");
    } catch { setDurum("yok"); }
  };
  const kapat = () => {
    try { localStorage.setItem(KAPATMA_ANAHTARI, String(Date.now())); } catch { /* yoksa da kapanır */ }
    track("push_izin", { sonuc: "kapat" });
    setDurum("yok");
  };

  return (
    <div style={{ margin: "14px 0 6px", padding: "14px 16px", border: `1px solid ${HAIR}`, borderRadius: 14, background: "rgba(37,99,235,.05)" }}>
      {durum === "tamam" ? (
        <p style={{ margin: 0, fontSize: 14, color: INK }}>Tamam. 3 gün sonra cihazının düzelip düzelmediğini soracağız.</p>
      ) : (
        <>
          <p style={{ margin: "0 0 6px", fontSize: 15, fontWeight: 600, color: INK }}>3 gün sonra soralım mı: cihazın düzeldi mi?</p>
          <p style={{ margin: "0 0 10px", fontSize: 13, color: MUTED }}>
            Ayda en fazla 2 bildirim. İstediğin an kapatabilirsin. <a href="/gizlilik/#bildirim" style={{ color: MUTED }}>Aydınlatma metni</a>
          </p>
          <span style={{ display: "flex", gap: 8 }}>
            <button onClick={ac} disabled={durum === "bekle"} style={{ padding: "9px 16px", border: 0, borderRadius: 9, background: MAVI, color: "#fff", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>Bildirim aç</button>
            <button onClick={kapat} style={{ padding: "9px 14px", border: `1px solid ${HAIR}`, borderRadius: 9, background: "#fff", color: INK, fontSize: 14, cursor: "pointer" }}>Şimdi değil</button>
          </span>
        </>
      )}
    </div>
  );
}

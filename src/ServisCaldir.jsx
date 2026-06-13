// src/ServisCaldir.jsx
// Müşteri talep formu — full-screen bottom sheet overlay.
// Props:
//   servis   {object}   ServisKarti'nın servis objesi (servis_id, servis_ad için)
//   cihaz    {string}   Teşhisten gelen cihaz kategorisi (örn. "Klima")
//   belirti  {string}   Teşhisten gelen belirti metni
//   onKapat  {Function} Formu kapat
import React, { useState } from "react";

const INK = "#22302A", CREAM = "#F5EFE2", AMBER = "#C8632B", GREEN = "#3A7D44";
const FONT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600&family=Hanken+Grotesk:wght@400;500;600;700&display=swap');`;

// servis = null → havuz modu ("En Yakın Servis" otomatik eşleştir)
// ilce → havuz modunda müşterinin ilçesi (GPS/seçim); backend eşleştirmesi için
export default function ServisCaldir({ servis, cihaz, belirti, ilce, onKapat }) {
  const isOtomatik = !servis;
  const [ad, setAd] = useState("");
  const [tel, setTel] = useState("");
  const [adres, setAdres] = useState("");
  const [tarih, setTarih] = useState("");
  const [seriNo, setSeriNo] = useState("");
  const [hata, setHata] = useState("");
  const [yukleniyor, setYukleniyor] = useState(false);
  const [tamamlandi, setTamamlandi] = useState(null); // { is_no }

  const gonder = async (e) => {
    e.preventDefault();
    setHata("");

    if (!ad.trim() || !tel.trim() || !adres.trim()) {
      setHata("Ad soyad, telefon ve adres zorunludur.");
      return;
    }
    if (tel.replace(/\D/g, "").length < 10) {
      setHata("Geçerli bir telefon numarası girin.");
      return;
    }

    setYukleniyor(true);
    try {
      const body = {
        musteri_ad: ad.trim(),
        musteri_tel: tel.trim(),
        adres: adres.trim(),
        tarih_tercihi: tarih.trim() || null,
        seri_no: seriNo.trim() || null,
        cihaz: cihaz || null,
        belirti: belirti || null,
      };
      // Belirli servis seçildiyse ekle, otomatik modda boş bırak (havuza düşer)
      if (!isOtomatik) {
        body.servis_id = servis.id;
        body.servis_ad = servis.ad;
      } else if (ilce) {
        // Havuz modu: GPS/seçimden gelen ilçe — adres parse'ından güvenilir
        body.ilce = ilce;
      }

      const res = await fetch("/api/is/yeni", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Bir hata oluştu");
      setTamamlandi({ is_no: data.is.is_no });
      setAd("");
      setTel("");
      setAdres("");
      setTarih("");
      setSeriNo("");
    } catch (err) {
      setHata(err.message);
    }
    setYukleniyor(false);
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 200, display: "flex", alignItems: "flex-end", fontFamily: "'Hanken Grotesk', sans-serif" }}>
      <style>{FONT}</style>
      <div style={{ background: CREAM, borderRadius: "20px 20px 0 0", padding: "20px 16px 36px", width: "100%", maxHeight: "90vh", overflowY: "auto" }}>

        {/* Başlık */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <button onClick={onKapat} style={{ background: "none", border: "none", color: INK, fontSize: 20, cursor: "pointer", lineHeight: 1 }}>←</button>
          <span style={{ fontFamily: "'Fraunces', serif", fontSize: 17, fontWeight: 600, color: INK }}>
            {isOtomatik ? "⚡ En Yakın Servise Gönder" : servis.ad}
          </span>
        </div>

        {/* Başarı ekranı */}
        {tamamlandi ? (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>✅</div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 700, color: INK, marginBottom: 8 }}>
              Talebiniz İletildi
            </div>
            <div style={{ fontSize: 14, color: "#666", lineHeight: 1.6, marginBottom: 24 }}>
              {isOtomatik
                ? <>Talebiniz bölgenizdeki servislere iletildi.<br />Bir servis kabul ettiğinde SMS alacaksınız.</>
                : <>{servis.ad} talebinizi inceliyor.<br />30 dakika içinde SMS ile bildirim alacaksınız.</>
              }
            </div>
            <div style={{ background: "white", borderRadius: 10, padding: "12px 16px", display: "inline-block", marginBottom: 24 }}>
              <div style={{ fontSize: 12, color: "#888" }}>İş No</div>
              <div style={{ fontWeight: 700, fontSize: 18, color: INK }}>#{tamamlandi.is_no}</div>
            </div>
            <br />
            <button onClick={onKapat} style={{ padding: "12px 32px", borderRadius: 12, border: "none", background: INK, color: CREAM, fontWeight: 700, fontSize: 15, cursor: "pointer" }}>
              Kapat
            </button>
          </div>
        ) : (
          /* Form */
          <form onSubmit={gonder}>
            {cihaz && (
              <div style={{ background: "#F0EAD8", borderRadius: 8, padding: "8px 12px", marginBottom: 16, fontSize: 12, color: "#666" }}>
                📋 <strong>{cihaz}</strong>{belirti ? ` — ${belirti.slice(0, 60)}${belirti.length > 60 ? "…" : ""}` : ""}
                <div style={{ fontSize: 10, color: "#aaa", marginTop: 2 }}>Teşhisten otomatik aktarıldı</div>
              </div>
            )}

            <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: INK, marginBottom: 6 }}>Ad Soyad</label>
            <input value={ad} onChange={e => setAd(e.target.value)} placeholder="Adınız Soyadınız" required
              style={{ width: "100%", padding: "11px 13px", borderRadius: 10, border: "1.5px solid #DDD3BE", fontSize: 14, fontFamily: "'Hanken Grotesk', sans-serif", marginBottom: 14, boxSizing: "border-box" }} />

            <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: INK, marginBottom: 6 }}>Telefon</label>
            <input value={tel} onChange={e => setTel(e.target.value)} placeholder="0555 123 45 67" type="tel" required
              style={{ width: "100%", padding: "11px 13px", borderRadius: 10, border: "1.5px solid #DDD3BE", fontSize: 14, fontFamily: "'Hanken Grotesk', sans-serif", marginBottom: 2, boxSizing: "border-box" }} />
            <div style={{ fontSize: 11, color: "#aaa", marginBottom: 14 }}>Servis numaranızı görmez. Yalnızca SMS bildirimi için.</div>

            <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: INK, marginBottom: 6 }}>Adres / Semt</label>
            <input value={adres} onChange={e => setAdres(e.target.value)} placeholder="Kadıköy, Moda Cad. 12/3" required
              style={{ width: "100%", padding: "11px 13px", borderRadius: 10, border: "1.5px solid #DDD3BE", fontSize: 14, fontFamily: "'Hanken Grotesk', sans-serif", marginBottom: 14, boxSizing: "border-box" }} />

            <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: INK, marginBottom: 6 }}>
              Tarih Tercihi <span style={{ fontWeight: 400, color: "#888", fontSize: 12 }}>(opsiyonel)</span>
            </label>
            <input value={tarih} onChange={e => setTarih(e.target.value)} placeholder="örn. Yarın öğleden sonra"
              style={{ width: "100%", padding: "11px 13px", borderRadius: 10, border: "1.5px solid #DDD3BE", fontSize: 14, fontFamily: "'Hanken Grotesk', sans-serif", marginBottom: 20, boxSizing: "border-box" }} />

            <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#22302A", marginBottom: 6 }}>
              Seri No <span style={{ fontWeight: 400, color: "#888", fontSize: 12 }}>(opsiyonel)</span>
            </label>
            <input
              value={seriNo}
              onChange={e => setSeriNo(e.target.value)}
              placeholder="SN1234567890"
              style={{ width: "100%", padding: "11px 13px", borderRadius: 10, border: "1.5px solid #DDD3BE", fontSize: 14, fontFamily: "'Hanken Grotesk', sans-serif", marginBottom: 2, boxSizing: "border-box" }}
            />
            <div style={{ fontSize: 11, color: "#aaa", marginBottom: 20 }}>
              Cihazın arkasında veya faturasında yazar. Tamir geçmişi için kullanılır.
            </div>

            {hata && <div style={{ color: "#B23A2E", fontSize: 13, fontWeight: 600, marginBottom: 14 }}>{hata}</div>}

            <button type="submit" disabled={yukleniyor}
              style={{ width: "100%", padding: 14, borderRadius: 12, border: "none", background: AMBER, color: "white", fontSize: 16, fontWeight: 700, cursor: yukleniyor ? "not-allowed" : "pointer", opacity: yukleniyor ? 0.7 : 1 }}>
              {yukleniyor ? "Gönderiliyor..." : "Talebi Gönder →"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

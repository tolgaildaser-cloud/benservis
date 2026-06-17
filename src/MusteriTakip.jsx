// src/MusteriTakip.jsx
// Müşteri iş takip sayfası — /takip/:is_no
// SMS'teki link buraya gelir. Auth yok, sadece is_no ile çalışır.
import React, { useState, useEffect } from "react";

const INK = "#1E293B", CREAM = "#F1F5F9", AMBER = "#2563EB", GREEN = "#22C55E";
const RED = "#DC2626", GRAY = "#94A3B8";
const FONT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700&family=Hanken+Grotesk:wght@400;500;600;700&display=swap');`;

const DURUM_ADI = {
  bekliyor:     { label: "İnceleniyor", renk: AMBER, ikon: "⏳" },
  onaylandi:    { label: "Onaylandı",   renk: GREEN, ikon: "✅" },
  reddedildi:   { label: "Reddedildi",  renk: RED,   ikon: "❌" },
  suresi_doldu: { label: "Süre Doldu",  renk: GRAY,  ikon: "⌛" },
  tamamlandi:   { label: "Tamamlandı",  renk: GREEN, ikon: "🎉" },
};

function Zaman({ iso }) {
  if (!iso) return null;
  const d = new Date(iso);
  return <>{d.toLocaleDateString("tr-TR")} {d.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })}</>;
}

function AdimNoktasi({ aktif, tamamlandi, renk, label, alt }) {
  const bg = tamamlandi ? renk : aktif ? renk + "33" : "#E2E8F0";
  const fg = tamamlandi ? "white" : aktif ? renk : GRAY;
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 20 }}>
      <div style={{
        width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
        background: bg, display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 14, fontWeight: 700, color: fg, border: aktif && !tamamlandi ? `2px solid ${renk}` : "none",
      }}>
        {tamamlandi ? "✓" : "○"}
      </div>
      <div style={{ paddingTop: 5 }}>
        <div style={{ fontWeight: 700, fontSize: 14, color: tamamlandi || aktif ? INK : GRAY }}>{label}</div>
        {alt && <div style={{ fontSize: 12.5, color: GRAY, marginTop: 2 }}>{alt}</div>}
      </div>
    </div>
  );
}

function YildizFormu({ isNo, mevcutPuan, onBitti }) {
  const [secili, setSecili]   = useState(mevcutPuan || 0);
  const [hover, setHover]     = useState(0);
  const [yorum, setYorum]     = useState("");
  const [gonderiyor, setGonderiyor] = useState(false);
  const [hata, setHata]       = useState("");

  const gonder = async () => {
    if (!secili) { setHata("Lütfen bir puan seç."); return; }
    setGonderiyor(true); setHata("");
    try {
      const res = await fetch("/api/is/puan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_no: isNo, puan: secili, yorum: yorum.trim() || null }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      onBitti(secili);
    } catch (e) { setHata(e.message); }
    setGonderiyor(false);
  };

  const aktif = hover || secili;

  return (
    <div style={{ background: "#F8FAFC", borderRadius: 16, border: "1px solid #E2E8F0", padding: "18px 18px", marginTop: 16 }}>
      <div style={{ fontFamily: "'Fraunces', serif", fontSize: 15, fontWeight: 700, color: INK, marginBottom: 12 }}>
        Bu servisi nasıl buldunuz?
      </div>
      {/* Yıldızlar */}
      <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            onClick={() => setSecili(n)}
            onMouseEnter={() => setHover(n)}
            onMouseLeave={() => setHover(0)}
            style={{
              fontSize: 32, background: "none", border: "none", cursor: "pointer",
              lineHeight: 1, padding: 2,
              filter: n <= aktif ? "none" : "grayscale(1) opacity(0.35)",
              transform: n <= aktif ? "scale(1.1)" : "scale(1)",
              transition: "all .12s",
            }}
          >⭐</button>
        ))}
      </div>
      {secili > 0 && (
        <div style={{ fontSize: 12, color: GRAY, marginBottom: 12, fontWeight: 600 }}>
          {["", "Çok Kötü", "Kötü", "Orta", "İyi", "Harika!"][secili]}
        </div>
      )}
      <textarea
        value={yorum}
        onChange={(e) => setYorum(e.target.value)}
        placeholder="Yorumunuz (opsiyonel)"
        rows={2}
        style={{ width: "100%", padding: "10px 12px", borderRadius: 10, border: "1.5px solid #E2E8F0", fontSize: 13.5, fontFamily: "'Hanken Grotesk', sans-serif", resize: "vertical", boxSizing: "border-box", marginBottom: 12 }}
      />
      {hata && <div style={{ color: RED, fontSize: 13, marginBottom: 8 }}>{hata}</div>}
      <button
        onClick={gonder}
        disabled={!secili || gonderiyor}
        style={{ width: "100%", padding: 12, borderRadius: 11, border: "none", background: secili ? AMBER : "#CBD5E1", color: "white", fontWeight: 700, fontSize: 14, cursor: secili ? "pointer" : "not-allowed" }}
      >
        {gonderiyor ? "Kaydediliyor…" : "Değerlendirmeyi Gönder"}
      </button>
    </div>
  );
}

export default function MusteriTakip({ isNo }) {
  const [is, setIs] = useState(null);
  const [hata, setHata] = useState("");
  const [yukleniyor, setYukleniyor] = useState(true);
  const [puanVerildi, setPuanVerildi] = useState(false);
  const [verilen, setVerilen] = useState(null);

  const getir = async () => {
    if (!isNo) { setHata("Geçersiz link"); setYukleniyor(false); return; }
    try {
      const res = await fetch(`/api/is/takip?is_no=${encodeURIComponent(isNo)}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "İş bulunamadı");
      setIs(data.is);
    } catch (e) {
      setHata(e.message);
    } finally {
      setYukleniyor(false);
    }
  };

  useEffect(() => { getir(); }, [isNo]);

  // 60 sn'de bir otomatik yenile (bekliyor durumunda)
  useEffect(() => {
    if (!is || is.durum !== "bekliyor") return;
    const t = setInterval(getir, 60000);
    return () => clearInterval(t);
  }, [is?.durum]);

  const durum = DURUM_ADI[is?.durum] || { label: is?.durum || "—", renk: GRAY, ikon: "?" };

  return (
    <div style={{ minHeight: "100vh", background: CREAM, fontFamily: "'Hanken Grotesk', sans-serif" }}>
      <style>{FONT}</style>

      {/* Üst bar */}
      <div style={{ background: INK, color: CREAM, padding: "14px 16px", display: "flex", alignItems: "center", gap: 10 }}>
        <a href="/" style={{ color: CREAM, textDecoration: "none", fontSize: 20 }}>◑</a>
        <span style={{ fontFamily: "'Fraunces', serif", fontSize: 17, fontWeight: 700 }}>Benservis</span>
        <span style={{ marginLeft: "auto", fontSize: 12, color: "#94A3B8" }}>İş Takip</span>
      </div>

      <div style={{ maxWidth: 480, margin: "0 auto", padding: "24px 16px 48px" }}>

        {yukleniyor && (
          <div style={{ textAlign: "center", paddingTop: 60, color: GRAY }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>⟳</div>
            <div>Yükleniyor...</div>
          </div>
        )}

        {!yukleniyor && hata && (
          <div style={{ textAlign: "center", paddingTop: 60 }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 700, color: INK, marginBottom: 8 }}>
              İş Bulunamadı
            </div>
            <div style={{ fontSize: 14, color: GRAY, marginBottom: 24 }}>
              "{isNo}" numaralı iş kaydına ulaşılamadı.
            </div>
            <a href="/" style={{ padding: "12px 24px", borderRadius: 12, background: AMBER, color: "white", fontWeight: 700, textDecoration: "none", fontSize: 14 }}>
              Ana Sayfaya Dön
            </a>
          </div>
        )}

        {!yukleniyor && is && (
          <>
            {/* İş numarası + durum başlığı */}
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <div style={{ fontSize: 12, color: GRAY, marginBottom: 4, fontWeight: 600, letterSpacing: ".05em" }}>
                İŞ TAKİP
              </div>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 32, fontWeight: 700, color: INK, marginBottom: 10 }}>
                #{isNo}
              </div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: durum.renk + "18", borderRadius: 999,
                padding: "8px 16px", border: `1.5px solid ${durum.renk}33`,
              }}>
                <span style={{ fontSize: 18 }}>{durum.ikon}</span>
                <span style={{ fontWeight: 700, fontSize: 15, color: durum.renk }}>{durum.label}</span>
              </div>
            </div>

            {/* Servis + cihaz bilgisi */}
            <div style={{ background: "#F8FAFC", borderRadius: 16, border: "1px solid #E2E8F0", padding: "16px 18px", marginBottom: 20 }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 700, color: INK, marginBottom: 8 }}>
                {is.servis_ad}
              </div>
              {is.cihaz && (
                <div style={{ fontSize: 13, color: GRAY }}>{is.cihaz}</div>
              )}
              {is.gelis_penceresi && is.durum === "onaylandi" && (
                <div style={{ marginTop: 10, padding: "10px 12px", borderRadius: 10, background: GREEN + "14", border: `1px solid ${GREEN}33`, display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 16 }}>🕐</span>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: GREEN, marginBottom: 1 }}>GELIŞ PENCERESİ</div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: INK }}>{is.gelis_penceresi}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Timeline */}
            <div style={{ background: "#F8FAFC", borderRadius: 16, border: "1px solid #E2E8F0", padding: "18px 18px 4px" }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 14, fontWeight: 700, color: INK, marginBottom: 18 }}>
                Durum Akışı
              </div>

              <AdimNoktasi
                tamamlandi
                aktif={false}
                renk={GREEN}
                label="Talep Oluşturuldu"
                alt={is.created_at && <Zaman iso={is.created_at} />}
              />
              <AdimNoktasi
                tamamlandi={["onaylandi","reddedildi","suresi_doldu","tamamlandi"].includes(is.durum)}
                aktif={is.durum === "bekliyor"}
                renk={is.durum === "reddedildi" ? RED : AMBER}
                label={is.durum === "bekliyor" ? "Servis İnceliyor…" : "Servis Yanıt Verdi"}
                alt={is.durum === "bekliyor" ? `Son kabul: ${is.son_kabul_tarihi ? new Date(is.son_kabul_tarihi).toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" }) : "—"}` : null}
              />

              {is.durum === "reddedildi" && (
                <AdimNoktasi
                  tamamlandi
                  aktif={false}
                  renk={RED}
                  label="Talep Reddedildi"
                  alt="Farklı bir servis seçebilirsiniz"
                />
              )}

              {is.durum !== "reddedildi" && (
                <>
                  <AdimNoktasi
                    tamamlandi={["tamamlandi"].includes(is.durum)}
                    aktif={is.durum === "onaylandi"}
                    renk={GREEN}
                    label="Servis Geliyor"
                    alt={is.gelis_penceresi && is.durum !== "bekliyor" ? is.gelis_penceresi : null}
                  />
                  <AdimNoktasi
                    tamamlandi={is.durum === "tamamlandi"}
                    aktif={false}
                    renk={GREEN}
                    label="Tamir Tamamlandı"
                    alt={is.durum === "tamamlandi" ? "DPP kaydı oluşturuldu" : null}
                  />
                </>
              )}
            </div>

            {/* Aksiyon butonu — reddedildiyse yeni servis bul */}
            {is.durum === "reddedildi" && (
              <a href="/ariza" style={{
                display: "block", textAlign: "center", marginTop: 20,
                padding: "14px", borderRadius: 12, border: "none",
                background: AMBER, color: "white", fontWeight: 700, fontSize: 15,
                textDecoration: "none",
              }}>
                🔍 Yeni Servis Bul
              </a>
            )}

            {/* Otomatik yenileme notu */}
            {is.durum === "bekliyor" && (
              <p style={{ textAlign: "center", fontSize: 12, color: GRAY, marginTop: 16 }}>
                Durum değişince SMS gelecek. Bu sayfa 60 sn'de bir güncelleniyor.
              </p>
            )}

            {/* Puan/yorum — tamamlandi, henüz değerlendirilmemiş */}
            {is.durum === "tamamlandi" && !puanVerildi && is.puan === null && (
              <YildizFormu
                isNo={isNo}
                mevcutPuan={null}
                onBitti={(p) => { setPuanVerildi(true); setVerilen(p); }}
              />
            )}

            {/* Değerlendirme yapılmışsa teşekkür */}
            {is.durum === "tamamlandi" && (puanVerildi || is.puan !== null) && (
              <div style={{ background: GREEN + "12", borderRadius: 16, border: `1px solid ${GREEN}33`, padding: "14px 16px", marginTop: 16, textAlign: "center" }}>
                <div style={{ fontSize: 22, marginBottom: 6 }}>
                  {"⭐".repeat(verilen || is.puan || 0)}
                </div>
                <div style={{ fontWeight: 700, color: GREEN, fontSize: 14 }}>
                  {puanVerildi ? "Teşekkürler! Değerlendirmeniz kaydedildi." : "Bu işi değerlendirdiniz."}
                </div>
              </div>
            )}

            {is.durum === "tamamlandi" && is.cihaz && (
              <a
                href={`/ikinci-el`}
                style={{ display: "block", textAlign: "center", marginTop: 14, padding: "13px", borderRadius: 12, border: `1.5px solid ${INK}`, background: "transparent", color: INK, fontWeight: 700, fontSize: 14, textDecoration: "none" }}
              >
                🛒 Cihazı Satmak İster misin? → İkinci El Pazaryeri
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
}

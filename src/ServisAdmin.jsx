// src/ServisAdmin.jsx
// Servis başvuru yönetim paneli — /servis-admin?token=ADMIN_TOKEN
// Başvuruları listeler; onayla/reddet işlemleri yapar.
// Onayda geçici şifre modal'da gösterilir (tek sefer!).
import React, { useState, useEffect } from "react";

const INK   = "#22302A";
const CREAM = "#F5EFE2";
const AMBER = "#C8632B";
const GREEN = "#3A7D44";
const RED   = "#B23A2E";
const GRAY  = "#9A9384";

const FONT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700&family=Hanken+Grotesk:wght@400;500;600;700&display=swap');`;

const TIER_RENK = {
  platin: { bg: "#F0EAF8", fg: "#6B3FA0" },
  gold:   { bg: "#FEF3C7", fg: "#92400E" },
  bronz:  { bg: "#FDF0E8", fg: "#9A3412" },
};

function Rozet({ label, bg, fg }) {
  return (
    <span style={{
      display: "inline-block",
      padding: "2px 8px",
      borderRadius: 999,
      fontSize: 11,
      fontWeight: 700,
      background: bg,
      color: fg,
      letterSpacing: ".03em",
    }}>
      {label}
    </span>
  );
}

function Zaman({ iso }) {
  if (!iso) return "—";
  const d = new Date(iso);
  return `${d.toLocaleDateString("tr-TR")} ${d.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })}`;
}

// ── Tek başvuru satırı ────────────────────────────────────────────
function BasvuruKart({ bav, adminToken, onGuncelle }) {
  const [acik, setAcik]       = useState(false);
  const [islem, setIslem]     = useState(false);
  const [hata, setHata]       = useState("");
  const [sifreModal, setSifre] = useState(null); // { email, sifre }

  const islem_yap = async (action) => {
    setIslem(true); setHata("");
    try {
      const res = await fetch("/api/admin/servis-basvurulari", {
        method:  "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adminToken}`,
        },
        body: JSON.stringify({ id: bav.id, action }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Hata.");

      if (action === "onayla" && data.sifre) {
        setSifre({ email: data.email, sifre: data.sifre });
      }
      onGuncelle();
    } catch (e) {
      setHata(e.message);
    } finally {
      setIslem(false);
    }
  };

  const tierInfo = bav.tier && TIER_RENK[bav.tier];

  return (
    <>
      {/* Şifre Modal */}
      {sifreModal && (
        <div style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,.5)",
          display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000,
        }}>
          <div style={{
            background: CREAM, borderRadius: 18, padding: "28px 28px 24px",
            maxWidth: 420, width: "90%", fontFamily: "'Hanken Grotesk', sans-serif",
          }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>🔑</div>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 700, color: GREEN, marginBottom: 12 }}>
              Hesap Açıldı!
            </div>
            <p style={{ fontSize: 13.5, color: GRAY, marginBottom: 16 }}>
              SMS gönderildi. Bu bilgileri kaydedin — şifre bir daha gösterilmez.
            </p>
            <div style={{ background: "#22302A", borderRadius: 10, padding: "14px 16px", marginBottom: 20, fontFamily: "monospace" }}>
              <div style={{ color: CREAM, fontSize: 13, marginBottom: 6 }}>
                <span style={{ color: "#B8BEB6" }}>E-posta:</span> {sifreModal.email}
              </div>
              <div style={{ color: AMBER, fontSize: 15, fontWeight: 700, letterSpacing: ".05em" }}>
                <span style={{ color: "#B8BEB6", fontWeight: 400 }}>Şifre:   </span> {sifreModal.sifre}
              </div>
            </div>
            <button
              onClick={() => { setSifre(null); }}
              style={{
                width: "100%", padding: "13px", borderRadius: 11,
                border: "none", background: GREEN, color: "white",
                fontWeight: 700, fontSize: 14, cursor: "pointer",
                fontFamily: "'Hanken Grotesk', sans-serif",
              }}
            >
              Kaydettim, Kapat
            </button>
          </div>
        </div>
      )}

      <div style={{
        background: "#FFFDF8",
        borderRadius: 14,
        border: "1px solid #E5DCC9",
        marginBottom: 10,
        overflow: "hidden",
      }}>
        {/* Özet satırı */}
        <div
          onClick={() => setAcik(a => !a)}
          style={{
            padding: "14px 16px",
            display: "flex",
            alignItems: "center",
            gap: 10,
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 700, fontSize: 14.5, color: INK, marginBottom: 4 }}>
              {bav.ad}
            </div>
            <div style={{ fontSize: 12, color: GRAY }}>
              {bav.il} / {bav.ilce}
              {" · "}
              {bav.sahip_ad}
              {" · "}
              <Zaman iso={bav.created_at} />
            </div>
          </div>

          {/* Rozet grubu */}
          <div style={{ display: "flex", gap: 5, flexShrink: 0 }}>
            {bav.yetkili && <Rozet label="YETKİLİ" bg="#EDF7F0" fg={GREEN} />}
            {tierInfo && <Rozet label={bav.tier.toUpperCase()} bg={tierInfo.bg} fg={tierInfo.fg} />}
          </div>

          <span style={{ color: GRAY, fontSize: 16 }}>{acik ? "▲" : "▼"}</span>
        </div>

        {/* Detay paneli */}
        {acik && (
          <div style={{ padding: "0 16px 16px", borderTop: "1px solid #F0EAD8" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 16px", marginTop: 12, fontSize: 13 }}>
              <div><span style={{ color: GRAY }}>E-posta:</span> <strong>{bav.email}</strong></div>
              <div><span style={{ color: GRAY }}>Tel:</span> <strong>{bav.telefon}</strong></div>
              <div><span style={{ color: GRAY }}>İl/İlçe:</span> <strong>{bav.il} / {bav.ilce}</strong></div>
              {bav.adres && <div style={{ gridColumn: "1/-1" }}><span style={{ color: GRAY }}>Adres:</span> {bav.adres}</div>}
              {bav.kategoriler?.length > 0 && (
                <div style={{ gridColumn: "1/-1" }}>
                  <span style={{ color: GRAY }}>Kategoriler:</span>{" "}
                  {bav.kategoriler.join(", ")}
                </div>
              )}
              {bav.yetkili_markalar?.length > 0 && (
                <div style={{ gridColumn: "1/-1" }}>
                  <span style={{ color: GRAY }}>Yetkili Markalar:</span>{" "}
                  {bav.yetkili_markalar.join(", ")}
                </div>
              )}
              {bav.notlar && (
                <div style={{ gridColumn: "1/-1" }}>
                  <span style={{ color: GRAY }}>Not:</span> {bav.notlar}
                </div>
              )}
            </div>

            {/* Hata mesajı */}
            {hata && (
              <div style={{ marginTop: 12, padding: "10px 12px", borderRadius: 8, background: RED + "12", color: RED, fontSize: 13 }}>
                {hata}
              </div>
            )}

            {/* Eylem butonları */}
            {bav.durum === "bekliyor" && (
              <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
                <button
                  onClick={() => islem_yap("onayla")}
                  disabled={islem}
                  style={{
                    flex: 1, padding: "11px", borderRadius: 10, border: "none",
                    background: islem ? "#CCC" : GREEN, color: "white",
                    fontWeight: 700, fontSize: 13.5, cursor: islem ? "not-allowed" : "pointer",
                    fontFamily: "'Hanken Grotesk', sans-serif",
                  }}
                >
                  {islem ? "İşleniyor…" : "✓ Onayla & Hesap Aç"}
                </button>
                <button
                  onClick={() => islem_yap("reddet")}
                  disabled={islem}
                  style={{
                    flex: 1, padding: "11px", borderRadius: 10,
                    border: `1.5px solid ${RED}`, background: "transparent",
                    color: RED, fontWeight: 700, fontSize: 13.5,
                    cursor: islem ? "not-allowed" : "pointer",
                    fontFamily: "'Hanken Grotesk', sans-serif",
                  }}
                >
                  ✕ Reddet
                </button>
              </div>
            )}

            {bav.durum === "onaylandi" && (
              <div style={{ marginTop: 12, padding: "10px 12px", borderRadius: 8, background: GREEN + "14", color: GREEN, fontSize: 13, fontWeight: 700 }}>
                ✓ Onaylandı — Hesap açık
                {bav.supabase_user_id && (
                  <span style={{ fontWeight: 400, color: GRAY, marginLeft: 6 }}>
                    user_id: {bav.supabase_user_id.slice(0, 8)}…
                  </span>
                )}
              </div>
            )}

            {bav.durum === "reddedildi" && (
              <div style={{ marginTop: 12, padding: "10px 12px", borderRadius: 8, background: RED + "10", color: RED, fontSize: 13, fontWeight: 700 }}>
                ✕ Reddedildi
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

// ── Ana bileşen ───────────────────────────────────────────────────
export default function ServisAdmin() {
  const params     = new URLSearchParams(window.location.search);
  const adminToken = params.get("token") || "";

  const [sekme, setSekme]         = useState("bekliyor");
  const [basvurular, setBasvurular] = useState([]);
  const [yukleniyor, setYuk]      = useState(true);
  const [hata, setHata]           = useState("");

  const yukle = async (durum = sekme) => {
    setYuk(true); setHata("");
    try {
      const res = await fetch(`/api/admin/servis-basvurulari?durum=${durum}`, {
        headers: { Authorization: `Bearer ${adminToken}` },
      });
      if (res.status === 401) { setHata("Token hatalı."); setBasvurular([]); return; }
      if (!res.ok) throw new Error();
      const data = await res.json();
      setBasvurular(data.basvurular || []);
    } catch {
      setHata("Bağlantı hatası.");
    } finally {
      setYuk(false);
    }
  };

  useEffect(() => { yukle(sekme); }, [sekme]);

  const SEKMELER = [
    { val: "bekliyor",   label: "Bekleyenler" },
    { val: "onaylandi",  label: "Onaylananlar" },
    { val: "reddedildi", label: "Reddedilenler" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: CREAM, fontFamily: "'Hanken Grotesk', sans-serif" }}>
      <style>{FONT}</style>

      {/* Header */}
      <div style={{ background: INK, color: CREAM, padding: "14px 20px", display: "flex", alignItems: "center", gap: 10 }}>
        <a href="/" style={{ color: CREAM, textDecoration: "none", fontSize: 20 }}>◑</a>
        <span style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 700 }}>Benservis</span>
        <span style={{ marginLeft: "auto", fontSize: 12, color: "#B8BEB6" }}>Admin — Servis Başvuruları</span>
      </div>

      <div style={{ maxWidth: 680, margin: "0 auto", padding: "24px 16px 48px" }}>

        {!adminToken && (
          <div style={{ padding: "14px 16px", borderRadius: 10, background: RED + "12", color: RED, marginBottom: 16, fontWeight: 700 }}>
            ⚠️ URL'ye ?token=... ekleyin.
          </div>
        )}

        {hata && (
          <div style={{ padding: "12px 14px", borderRadius: 10, background: RED + "12", color: RED, marginBottom: 16, fontWeight: 700 }}>
            {hata}
          </div>
        )}

        {/* Başlık + özet */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 700, color: INK, margin: 0 }}>
            Servis Başvuruları
          </h1>
          <button
            onClick={() => yukle(sekme)}
            style={{
              padding: "8px 14px", borderRadius: 8, border: `1px solid #DDD3BE`,
              background: "transparent", color: GRAY, fontSize: 13, fontWeight: 700,
              cursor: "pointer", fontFamily: "'Hanken Grotesk', sans-serif",
            }}
          >
            ↻ Yenile
          </button>
        </div>

        {/* Sekmeler */}
        <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
          {SEKMELER.map(s => (
            <button
              key={s.val}
              onClick={() => setSekme(s.val)}
              style={{
                padding: "9px 16px", borderRadius: 10,
                border: sekme === s.val ? `1.5px solid ${AMBER}` : "1.5px solid #DDD3BE",
                background: sekme === s.val ? AMBER : "#FFFDF8",
                color: sekme === s.val ? "white" : GRAY,
                fontWeight: 700, fontSize: 13, cursor: "pointer",
                fontFamily: "'Hanken Grotesk', sans-serif",
                transition: "all .12s",
              }}
            >
              {s.label}
              {sekme === s.val && !yukleniyor && (
                <span style={{ marginLeft: 6, fontSize: 12, fontWeight: 400 }}>
                  ({basvurular.length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* İçerik */}
        {yukleniyor && (
          <div style={{ textAlign: "center", padding: "40px 0", color: GRAY }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>⟳</div>
            Yükleniyor…
          </div>
        )}

        {!yukleniyor && basvurular.length === 0 && (
          <div style={{ textAlign: "center", padding: "40px 0", color: GRAY }}>
            <div style={{ fontSize: 36, marginBottom: 10 }}>
              {sekme === "bekliyor" ? "📭" : sekme === "onaylandi" ? "✅" : "—"}
            </div>
            <div style={{ fontSize: 14 }}>
              {sekme === "bekliyor" ? "Bekleyen başvuru yok." : "Kayıt bulunamadı."}
            </div>
          </div>
        )}

        {!yukleniyor && basvurular.map(bav => (
          <BasvuruKart
            key={bav.id}
            bav={bav}
            adminToken={adminToken}
            onGuncelle={() => yukle(sekme)}
          />
        ))}
      </div>
    </div>
  );
}

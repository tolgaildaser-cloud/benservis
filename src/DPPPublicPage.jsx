import React, { useState, useEffect, useRef } from "react";
import QRCode from "qrcode";
import BenservisRozet from "./BenservisRozet.jsx";

const FONT = `@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,500&family=Hanken+Grotesk:wght@400;500;600;700&display=swap');`;
const INK = "#1E293B", CREAM = "#F1F5F9", AMBER = "#2563EB", GREEN = "#22C55E";

function garantiDurumu(cihaz) {
  const bugun = new Date();
  bugun.setHours(0, 0, 0, 0);
  const sonuclar = [];
  if (cihaz.garanti_baslangic_tarihi) {
    sonuclar.push({ tip: "baslangic", tarih: cihaz.garanti_baslangic_tarihi });
  }
  if (cihaz.garanti_bitis_tarihi) {
    const bitis = new Date(cihaz.garanti_bitis_tarihi + "T00:00:00");
    const fark = Math.ceil((bitis - bugun) / (1000 * 60 * 60 * 24));
    sonuclar.push({ tip: "bitis", tarih: cihaz.garanti_bitis_tarihi, kalan: fark, aktif: fark > 0 });
  }
  if (cihaz.uzatilmis_garanti && cihaz.uzatilmis_garanti_bitis) {
    const bitis = new Date(cihaz.uzatilmis_garanti_bitis + "T00:00:00");
    const fark = Math.ceil((bitis - bugun) / (1000 * 60 * 60 * 24));
    sonuclar.push({ tip: "uzatilmis", tarih: cihaz.uzatilmis_garanti_bitis, kalan: fark, aktif: fark > 0 });
  }
  return sonuclar;
}

function QRModal({ url, onKapat }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    QRCode.toCanvas(canvasRef.current, url, {
      width: 220,
      margin: 2,
      color: { dark: INK, light: CREAM },
    });
  }, [url]);

  const indir = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `dpp-qr-${url.split("/dpp/")[1] || "benservis"}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div style={s.overlay} onClick={onKapat}>
      <div style={s.qrModal} onClick={(e) => e.stopPropagation()}>
        <div style={s.qrBaslik}>Cihaz Pasaport QR Kodu</div>
        <p style={s.qrAcik}>Bu QR kodu tarayarak pasaporta ulaşılabilir.</p>
        <canvas ref={canvasRef} style={{ borderRadius: 10 }} />
        <button style={s.qrIndirBtn} onClick={indir}>⬇ PNG İndir</button>
        <button style={s.kapat} onClick={onKapat}>Kapat</button>
      </div>
    </div>
  );
}

export default function DPPPublicPage() {
  const seriNo = decodeURIComponent(
    (window.location.pathname.match(/^\/dpp\/(.+)/) || [])[1] || ""
  );
  const paylasSayfaUrl = window.location.href;

  const [durum, setDurum] = useState("yukleniyor");
  const [pasaport, setPasaport] = useState(null);
  const [kopyalandi, setKopyalandi] = useState(false);
  const [qrAcik, setQrAcik] = useState(false);

  useEffect(() => {
    if (!seriNo) { setDurum("bulunamadi"); return; }
    fetch(`/api/dpp/cihaz?seri_no=${encodeURIComponent(seriNo)}`)
      .then((r) => {
        if (r.status === 404) return null;
        if (!r.ok) return Promise.reject();
        return r.json();
      })
      .then((data) => {
        if (!data) { setDurum("bulunamadi"); return; }
        setPasaport(data);
        setDurum("basarili");
      })
      .catch(() => setDurum("hata"));
  }, [seriNo]);

  const kopyala = async () => {
    try { await navigator.clipboard.writeText(paylasSayfaUrl); }
    catch {
      const ta = document.createElement("textarea");
      ta.value = paylasSayfaUrl;
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); } catch (_) {}
      document.body.removeChild(ta);
    }
    setKopyalandi(true);
    setTimeout(() => setKopyalandi(false), 2000);
  };

  const whatsapp = () => {
    const metin = pasaport
      ? `${pasaport.cihaz.marka || ""} ${pasaport.cihaz.kategori || ""} cihazımın Benservis DPP pasaportu: ${paylasSayfaUrl}`
      : paylasSayfaUrl;
    window.open(`https://wa.me/?text=${encodeURIComponent(metin)}`);
  };

  return (
    <div style={s.wrap}>
      <style>{FONT}{CSS}</style>
      <div style={s.grain} />

      <header style={s.header}>
        <div style={s.logoRow}>
          <span style={s.logoMark}>◑</span>
          <h1 style={s.logo}>Benservis</h1>
        </div>
        <div style={s.baslikAlt}>Dijital Ürün Pasaportu</div>
      </header>

      {durum === "yukleniyor" && (
        <div style={s.merkez}>
          <div style={s.spinner} />
          <p style={s.yuklMetin}>Pasaport yükleniyor…</p>
        </div>
      )}

      {durum === "bulunamadi" && (
        <div style={s.card}>
          <div style={s.uyari}>🔍</div>
          <div style={s.uyariBaslik}>Pasaport Bulunamadı</div>
          <p style={s.uyariAcik}>
            <strong>{seriNo || "Bu seri no"}</strong> için kayıtlı bir DPP pasaportu yok.
          </p>
          <a href="/ariza" style={s.anaBtn}>Arızam Ne?'ye Git</a>
        </div>
      )}

      {durum === "hata" && (
        <div style={s.card}>
          <div style={s.uyari}>⚠️</div>
          <div style={s.uyariBaslik}>Bir Sorun Oluştu</div>
          <p style={s.uyariAcik}>Pasaport yüklenirken hata oluştu. Sayfayı yenile.</p>
          <button style={s.anaBtn} onClick={() => window.location.reload()}>Yenile</button>
        </div>
      )}

      {durum === "basarili" && pasaport && (
        <>
          {/* Cihaz başlığı */}
          <div style={s.card}>
            <div style={s.cihazBaslik}>
              {pasaport.cihaz.marka && pasaport.cihaz.model
                ? `${pasaport.cihaz.marka} ${pasaport.cihaz.model}`
                : pasaport.cihaz.marka || pasaport.cihaz.kategori || "Cihaz"}
            </div>
            <div style={s.cihazAlt}>
              {pasaport.cihaz.kategori && <span style={s.rozet}>{pasaport.cihaz.kategori}</span>}
              {pasaport.cihaz.uretim_yili && <span style={s.metaBilgi}>{pasaport.cihaz.uretim_yili}</span>}
              {(() => {
                const d = pasaport.cihaz.mevcut_durum || "çalışıyor";
                const cfg = {
                  "çalışıyor": { bg: "#F1F5F9", color: GREEN, label: "✓ Çalışıyor" },
                  "arızalı":   { bg: "#EFF6FF", color: AMBER,  label: "⚠ Arızalı" },
                  "hurda":     { bg: "#FEE2E2", color: "#DC2626", label: "✕ Hurda" },
                };
                const c = cfg[d] || cfg["çalışıyor"];
                return (
                  <span style={{ fontSize: 12, fontWeight: 700, background: c.bg, color: c.color, borderRadius: 999, padding: "4px 10px" }}>
                    {c.label}
                  </span>
                );
              })()}
              {pasaport.tamirler.some((t) => t.servis_turu === "benservis") && (
                <div style={{ marginLeft: "auto" }}>
                  <BenservisRozet
                    size="lg"
                    tarih={pasaport.tamirler.find((t) => t.servis_turu === "benservis")?.tarih}
                  />
                </div>
              )}
            </div>

            {/* Garanti bilgileri */}
            {garantiDurumu(pasaport.cihaz).length > 0 && (
              <div style={s.garantiBox}>
                {garantiDurumu(pasaport.cihaz).map((g) => (
                  <div key={g.tip} style={{ fontSize: 13, marginBottom: 4 }}>
                    {g.tip === "baslangic" && (
                      <span style={{ color: "#475569" }}>
                        📅 Alındı: {new Date(g.tarih).toLocaleDateString("tr-TR")}
                      </span>
                    )}
                    {g.tip === "bitis" && (
                      <span style={{ color: g.aktif ? GREEN : "#DC2626", fontWeight: 600 }}>
                        🛡️ Garanti: {new Date(g.tarih).toLocaleDateString("tr-TR")}
                        {g.aktif ? ` (${g.kalan} gün kaldı)` : " (süresi doldu)"}
                      </span>
                    )}
                    {g.tip === "uzatilmis" && (
                      <span style={{ color: g.aktif ? GREEN : "#DC2626", fontWeight: 600 }}>
                        ➕ Uzatılmış: {new Date(g.tarih).toLocaleDateString("tr-TR")}
                        {g.aktif ? ` (${g.kalan} gün kaldı)` : " (süresi doldu)"}
                      </span>
                    )}
                  </div>
                ))}
                {pasaport.cihaz.fatura_url && (
                  <a
                    href={pasaport.cihaz.fatura_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 12, color: AMBER, fontWeight: 600, display: "block", marginTop: 6 }}
                  >
                    📄 Fatura Görüntüle
                  </a>
                )}
              </div>
            )}

            <div style={s.seriNo}>SN: {pasaport.cihaz.seri_no}</div>

            {pasaport.toplam_maliyet > 0 && (
              <div style={s.toplamMaliyet}>
                Toplam tamir maliyeti:{" "}
                <strong>{pasaport.toplam_maliyet.toLocaleString("tr-TR")} TL</strong>
              </div>
            )}

            {pasaport.cihaz.fotograflar?.length > 0 && (
              <div style={s.fotoGaleri}>
                {pasaport.cihaz.fotograflar.map((url, i) => (
                  <img key={url} src={url} alt={`Cihaz ${i + 1}`} style={s.fotoKucuk} />
                ))}
              </div>
            )}
          </div>

          {/* Tamir geçmişi */}
          <div style={s.secBaslik}>
            Tamir Geçmişi
            <span style={s.tamirSayisi}>{pasaport.tamirler.length} kayıt</span>
          </div>

          {pasaport.tamirler.length === 0 ? (
            <p style={s.bosMetin}>Henüz tamir kaydı yok.</p>
          ) : (
            pasaport.tamirler.map((t) => (
              <div key={t.id} style={s.tamirKart}>
                <div style={s.tamirUst}>
                  <span style={s.tamirTarih}>
                    {new Date(t.tarih + "T12:00:00").toLocaleDateString("tr-TR", {
                      day: "numeric", month: "long", year: "numeric",
                    })}
                  </span>
                  {t.servis_turu === "benservis" && <BenservisRozet size="sm" tarih={t.tarih} />}
                  {t.servis_turu === "harici" && <span style={s.hariciRozet}>Harici Servis</span>}
                  {t.servis_turu === "sahip" && <span style={s.sahipRozet}>Kendim Yaptım</span>}
                  {t.servis_turu === "yetkili" && <span style={s.hariciRozet}>Yetkili Servis</span>}
                </div>
                <div style={s.tamirIslem}>{t.yapilan_islem}</div>
                {t.servis_adi && <div style={s.tamirServis}>{t.servis_adi}</div>}
                {t.degistirilen_parcalar?.length > 0 && (
                  <div style={s.parcalar}>
                    {t.degistirilen_parcalar.map((p, i) => (
                      <span key={i} style={s.parcaChip}>{p}</span>
                    ))}
                  </div>
                )}
                {t.maliyet != null && (
                  <div style={s.tamirMaliyet}>{t.maliyet.toLocaleString("tr-TR")} TL</div>
                )}
                {t.fotograflar?.length > 0 && (
                  <div style={s.fotoGaleri}>
                    {t.fotograflar.map((url, i) => (
                      <img key={url} src={url} alt={`Tamir ${i + 1}`} style={s.fotoKucuk} />
                    ))}
                  </div>
                )}
              </div>
            ))
          )}

          {/* Paylaşım araçları */}
          <div style={s.paylasimBox}>
            <div style={s.paylasimBaslik}>Bu Pasaportu Paylaş</div>
            <div style={s.paylasimBtnler}>
              <button style={s.paylasimBtn} onClick={kopyala}>
                {kopyalandi ? "✓ Kopyalandı" : "🔗 Bağlantıyı Kopyala"}
              </button>
              <button style={s.paylasimBtn} onClick={whatsapp}>
                💬 WhatsApp
              </button>
              <button style={{ ...s.paylasimBtn, background: INK, color: CREAM, borderColor: INK }} onClick={() => setQrAcik(true)}>
                📷 QR Kod
              </button>
            </div>
          </div>

          <a href="/ariza" style={s.anaBtnAlt}>
            ◑ Benservis — Arıza Teşhisi →
          </a>
        </>
      )}

      {qrAcik && (
        <QRModal url={paylasSayfaUrl} onKapat={() => setQrAcik(false)} />
      )}

      <footer style={s.footer}>
        Benservis Dijital Ürün Pasaportu · benservis.com
      </footer>
    </div>
  );
}

const CSS = `
* { box-sizing: border-box; }
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes rise { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
button { cursor: pointer; font-family: 'Hanken Grotesk', sans-serif; }
a { text-decoration: none; }
`;

const s = {
  wrap: {
    position: "relative", minHeight: "100vh", background: CREAM,
    fontFamily: "'Hanken Grotesk', sans-serif", color: INK,
    padding: "28px 18px 48px", maxWidth: 640, margin: "0 auto",
  },
  grain: {
    position: "fixed", inset: 0, pointerEvents: "none", opacity: 0.4,
    backgroundImage: "radial-gradient(rgba(30,41,59,.05) 1px, transparent 1px)",
    backgroundSize: "4px 4px", zIndex: 0,
  },
  header: { position: "relative", zIndex: 1, marginBottom: 22, textAlign: "center" },
  logoRow: { display: "flex", alignItems: "center", justifyContent: "center", gap: 10 },
  logoMark: { color: AMBER, fontSize: 30, transform: "rotate(-20deg)" },
  logo: {
    fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 32,
    margin: 0, letterSpacing: "-0.02em",
  },
  baslikAlt: {
    fontSize: 13, fontWeight: 700, letterSpacing: ".06em", color: "#64748B",
    textTransform: "uppercase", marginTop: 4,
  },
  card: {
    position: "relative", zIndex: 1, background: "#F8FAFC",
    border: "1px solid #E2E8F0", borderRadius: 18, padding: 22,
    boxShadow: "0 10px 30px -18px rgba(30,41,59,.25)", animation: "rise .4s ease both",
    marginBottom: 14,
  },
  merkez: { position: "relative", zIndex: 1, textAlign: "center", paddingTop: 60 },
  spinner: {
    width: 38, height: 38, borderRadius: "50%",
    border: "4px solid #E2E8F0", borderTopColor: AMBER,
    margin: "0 auto 16px", animation: "spin 1s linear infinite",
  },
  yuklMetin: { fontFamily: "'Fraunces', serif", fontSize: 18, color: "#475569" },
  uyari: { fontSize: 48, textAlign: "center", marginBottom: 12 },
  uyariBaslik: {
    fontFamily: "'Fraunces', serif", fontSize: 22, fontWeight: 700,
    textAlign: "center", marginBottom: 8,
  },
  uyariAcik: { fontSize: 14.5, color: "#475569", textAlign: "center", lineHeight: 1.5, marginBottom: 16 },
  anaBtn: {
    display: "block", textAlign: "center", padding: "13px 20px",
    borderRadius: 12, background: AMBER, color: "#fff", fontWeight: 700,
    fontSize: 15, boxShadow: "0 8px 20px -8px rgba(37,99,235,.5)",
  },
  cihazBaslik: {
    fontFamily: "'Fraunces', serif", fontSize: 26, fontWeight: 700,
    letterSpacing: "-0.01em", marginBottom: 10,
  },
  cihazAlt: { display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 12 },
  rozet: {
    fontSize: 12, fontWeight: 700, letterSpacing: ".03em",
    background: "#F1F5F9", color: "#64748B", borderRadius: 999, padding: "4px 10px",
  },
  metaBilgi: { fontSize: 13, color: "#94A3B8" },
  garantiBox: {
    marginTop: 4, marginBottom: 10, background: "#F8FAFC",
    border: "1px solid #F1F5F9", borderRadius: 10, padding: "10px 12px",
  },
  seriNo: {
    marginTop: 10, fontSize: 12.5, fontWeight: 700, letterSpacing: ".08em",
    color: "#64748B", fontFamily: "monospace",
  },
  toplamMaliyet: {
    marginTop: 8, fontSize: 14, color: "#475569",
    background: "#F1F5F9", borderRadius: 8, padding: "8px 12px", display: "inline-block",
  },
  fotoGaleri: { display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 },
  fotoKucuk: { width: 80, height: 80, objectFit: "cover", borderRadius: 8, border: "1px solid #E2E8F0" },
  secBaslik: {
    position: "relative", zIndex: 1, fontFamily: "'Fraunces', serif",
    fontSize: 19, fontWeight: 600, margin: "8px 0 12px",
    display: "flex", alignItems: "center", gap: 10,
  },
  tamirSayisi: {
    fontSize: 12.5, fontWeight: 700, background: "#F1F5F9",
    color: "#64748B", borderRadius: 999, padding: "3px 10px",
  },
  bosMetin: {
    position: "relative", zIndex: 1, fontSize: 14, color: "#94A3B8",
    textAlign: "center", padding: "20px 0",
  },
  tamirKart: {
    position: "relative", zIndex: 1, background: "#F8FAFC",
    border: "1px solid #E2E8F0", borderRadius: 14, padding: "16px 18px",
    marginBottom: 10, animation: "rise .3s ease both",
  },
  tamirUst: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    gap: 8, marginBottom: 8, flexWrap: "wrap",
  },
  tamirTarih: { fontSize: 13, fontWeight: 700, color: "#475569" },
  hariciRozet: {
    fontSize: 11.5, fontWeight: 700, background: "#F1F5F9",
    color: "#64748B", borderRadius: 999, padding: "3px 9px",
  },
  sahipRozet: {
    fontSize: 11.5, fontWeight: 700, background: "#F1F5F9",
    color: GREEN, borderRadius: 999, padding: "3px 9px",
  },
  tamirIslem: { fontSize: 15, fontWeight: 600, lineHeight: 1.4, marginBottom: 6 },
  tamirServis: { fontSize: 13, color: "#64748B", marginBottom: 6 },
  parcalar: { display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 6 },
  parcaChip: {
    fontSize: 12, fontWeight: 600, background: "#F1F5F9",
    color: "#64748B", borderRadius: 999, padding: "3px 9px",
  },
  tamirMaliyet: {
    fontSize: 14, fontWeight: 700, color: AMBER,
    fontFamily: "'Fraunces', serif", marginTop: 4,
  },
  paylasimBox: {
    position: "relative", zIndex: 1, background: "#F8FAFC",
    border: "1px solid #E2E8F0", borderRadius: 18, padding: "20px",
    marginTop: 8, marginBottom: 14,
  },
  paylasimBaslik: {
    fontFamily: "'Fraunces', serif", fontSize: 17, fontWeight: 600, marginBottom: 14,
  },
  paylasimBtnler: { display: "flex", gap: 8, flexWrap: "wrap" },
  paylasimBtn: {
    flex: 1, minWidth: 120, padding: "11px 14px", borderRadius: 11,
    border: `1.5px solid ${AMBER}`, background: "rgba(37,99,235,.06)",
    color: AMBER, fontSize: 13.5, fontWeight: 700,
  },
  anaBtnAlt: {
    position: "relative", zIndex: 1, display: "block", textAlign: "center",
    padding: "14px", borderRadius: 14, background: INK, color: CREAM,
    fontWeight: 700, fontSize: 15, marginBottom: 14,
    boxShadow: "0 8px 24px -12px rgba(30,41,59,.4)",
  },
  footer: {
    position: "relative", zIndex: 1, textAlign: "center",
    fontSize: 11.5, color: "#94A3B8", marginTop: 12,
  },
  overlay: {
    position: "fixed", inset: 0, background: "rgba(30,41,59,.55)",
    display: "flex", alignItems: "center", justifyContent: "center",
    zIndex: 100, padding: 20,
  },
  qrModal: {
    background: CREAM, borderRadius: 20, padding: "28px 24px",
    textAlign: "center", maxWidth: 300, width: "100%",
    boxShadow: "0 20px 60px -12px rgba(30,41,59,.4)",
  },
  qrBaslik: {
    fontFamily: "'Fraunces', serif", fontSize: 19, fontWeight: 700, marginBottom: 8,
  },
  qrAcik: { fontSize: 13, color: "#475569", marginBottom: 16 },
  qrIndirBtn: {
    display: "block", width: "100%", marginTop: 16, padding: "11px",
    borderRadius: 11, border: "none", background: AMBER, color: "#fff",
    fontWeight: 700, fontSize: 14,
  },
  kapat: {
    display: "block", width: "100%", marginTop: 8, padding: "11px",
    borderRadius: 11, border: `1.5px solid #E2E8F0`, background: "transparent",
    color: INK, fontWeight: 600, fontSize: 14,
  },
};

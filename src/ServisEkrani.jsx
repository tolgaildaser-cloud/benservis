import React, { useState, useEffect } from "react";
import { TR_IL_ILCE } from "./tr-iller.js";
import { eslesenKategoriler } from "./constants.js";

/**
 * İki koordinat arasındaki mesafeyi km olarak hesaplar (Haversine formülü).
 */
function haversine(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const toRad = (x) => (x * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

const TR_GUNLER = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

// Türkiye saatine göre "şu an" (tarayıcı saat dilimi ne olursa olsun).
function trSimdi() {
  return new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/Istanbul" }));
}
function trBugun() {
  return TR_GUNLER[trSimdi().getDay()];
}

/**
 * Google regularOpeningHours.periods'tan ŞU AN açık mı? (TR saati).
 * Veri yoksa null. periods: [{open:{day,hour,minute}, close:{day,hour,minute}}]
 * gün: 0=Pazar … 6=Cumartesi (Google ile aynı).
 */
function acikMi(periods) {
  if (!Array.isArray(periods) || !periods.length) return null;
  const tr = trSimdi();
  const gun = tr.getDay();
  const dk = tr.getHours() * 60 + tr.getMinutes();
  for (const p of periods) {
    const o = p && p.open;
    if (!o) continue;
    const oDk = (o.hour || 0) * 60 + (o.minute || 0);
    if (!p.close) return true; // close yok = 7/24 açık (Google: tek period, day0/00:00, close yok)
    const c = p.close, cDk = (c.hour || 0) * 60 + (c.minute || 0);
    if (o.day === c.day) { if (gun === o.day && dk >= oDk && dk < cDk) return true; }
    else { if (gun === o.day && dk >= oDk) return true; if (gun === c.day && dk < cDk) return true; }
  }
  return false;
}

/**
 * ServisEkrani — Faz 1 teşhis sonrası servis eşleştirme ekranı.
 *
 * PİVOT (17 Haz): sade dizin + direkt arama. Havuz/SMS/ServisCaldir yok;
 * her kartın birincil aksiyonu telefonla direkt arama. Puan/yorum belirgin.
 *
 * Props:
 *   cihaz      {string}   Faz 1'den gelen cihaz kategorisi (örn. "Klima")
 *   servisler  {Array}    services-data.json içeriği
 *   onKapat    {Function} Geri dön butonu callback'i
 */
// Tier renk + etiket tanımları — yetkili her zaman yeşil, tier'lar ayrı
const TIER_STYLE = {
  platin: { background: "#F0EAF8", color: "#6B3FA0", label: "PLATİN" },
  gold:   { background: "#FEF3C7", color: "#92400E", label: "GOLD"   },
  bronz:  { background: "#FDF0E8", color: "#9A3412", label: "BRONZ"  },
};

function TierRozetleri({ servis }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4, flexWrap: "wrap" }}>
      {servis.yetkili && (
        <span style={{ background: "#22C55E", color: "white", fontSize: 9, padding: "2px 6px", borderRadius: 3, fontWeight: 700 }}>
          YETKİLİ
        </span>
      )}
      {servis.tier && TIER_STYLE[servis.tier] && (
        <span style={{ background: TIER_STYLE[servis.tier].background, color: TIER_STYLE[servis.tier].color, fontSize: 9, padding: "2px 6px", borderRadius: 3, fontWeight: 700 }}>
          {TIER_STYLE[servis.tier].label}
        </span>
      )}
    </div>
  );
}

function ServisKarti({ servis, onSec }) {
  return (
    <div
      onClick={() => onSec(servis)}
      style={{
        background: "white", borderRadius: 14,
        padding: "14px 16px", marginBottom: 10,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        border: "1px solid #E2E8F0",
        boxShadow: "0 1px 2px rgba(30,41,59,.04), 0 10px 24px -20px rgba(30,41,59,.25)",
        cursor: "pointer",
      }}
    >
      <div style={{ flex: 1, minWidth: 0, marginRight: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap", marginBottom: 3 }}>
          <span style={{ fontWeight: 600, fontSize: 14, color: "#1E293B" }}>
            {servis.ad}
          </span>
          <TierRozetleri servis={servis} />
        </div>

        {/* Puan — belirgin: amber yıldız + kalın not + yorum sayısı */}
        {servis.puan != null ? (
          <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 4, marginBottom: 2 }}>
            <span style={{ fontSize: 15, color: "#F5A623", lineHeight: 1 }}>★</span>
            <span style={{ fontWeight: 700, fontSize: 15, color: "#1E293B", lineHeight: 1 }}>
              {servis.puan.toFixed(1)}
            </span>
            {servis.yorumSayisi > 0 && (
              <span style={{ fontSize: 12, color: "#64748B" }}>
                ({servis.yorumSayisi} yorum)
              </span>
            )}
          </div>
        ) : (
          <div style={{ fontSize: 12, color: "#94A3B8", marginTop: 4, marginBottom: 2 }}>
            Henüz puanlanmamış
          </div>
        )}

        <div style={{ fontSize: 12, color: "#64748B" }}>
          {servis.ilce}
          {servis.km != null && (
            <> · <strong style={{ color: "#1E293B" }}>{servis.km.toFixed(1)} km</strong></>
          )}
        </div>

        {servis.googleMapsUrl && (
          <a
            href={servis.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{ fontSize: 11, color: "#2563EB", textDecoration: "none", marginTop: 2, display: "inline-block" }}
          >
            🗺 Haritada Gör
          </a>
        )}
      </div>

      {/* PİVOT: birincil aksiyon = direkt arama (havuz yok) */}
      {servis.telefon && (
        <a
          href={`tel:${servis.telefon}`}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "#2563EB", color: "white",
            borderRadius: 10, padding: "11px 18px",
            fontSize: 14, fontWeight: 700, textDecoration: "none",
            whiteSpace: "nowrap", flexShrink: 0, cursor: "pointer",
            display: "inline-flex", alignItems: "center", gap: 6,
          }}
        >📞 Ara</a>
      )}
    </div>
  );
}

function ServisProfil({ servis, onGeri }) {
  const acik = acikMi(servis.calismaSaatleri?.periods);
  const buGun = trBugun();
  return (
    <div style={{
      position: "fixed", inset: 0, background: "#F8FAFC",
      overflowY: "auto", zIndex: 100, fontFamily: "'Hanken Grotesk', sans-serif",
    }}>
      {/* Üst bar */}
      <div style={{
        background: "#1E293B", color: "#F8FAFC",
        padding: "14px 16px", display: "flex", alignItems: "center", gap: 12,
        position: "sticky", top: 0, zIndex: 10,
      }}>
        <button
          onClick={onGeri}
          style={{ background: "none", border: "none", color: "#F8FAFC", fontSize: 20, cursor: "pointer" }}
        >←</button>
        <span style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 600, flex: 1 }}>
          {servis.ad}
        </span>
        <TierRozetleri servis={servis} />
      </div>

      {/* Hero — basit markalı görsel (gerçek dükkân fotoğrafı yok; ileride Places API ile eklenebilir) */}
      <div style={{ position: "relative", overflow: "hidden", background: "#2563EB", height: 150, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", right: -50, top: -60, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,.08)" }} />
        <div style={{ position: "absolute", left: -45, bottom: -65, width: 175, height: 175, borderRadius: "50%", background: "rgba(255,255,255,.06)" }} />
        <svg width="62" height="62" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ position: "relative", zIndex: 1 }} aria-hidden="true"><path d="M14.5 6.5a3.5 3.5 0 0 0-4.9 4.4l-4.8 4.8a1.5 1.5 0 0 0 2.1 2.1l4.8-4.8a3.5 3.5 0 0 0 4.4-4.9l-2 2-1.7-1.7Z" /></svg>
      </div>

      <div style={{ padding: "18px 16px 28px" }}>
        {/* Puan + yorum (tıklanınca Google) + konum */}
        {servis.puan != null ? (
          <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 5, flexWrap: "wrap" }}>
            <span style={{ fontWeight: 800, fontSize: 22, color: "#1E293B", lineHeight: 1 }}>{servis.puan.toFixed(1)}</span>
            <span style={{ fontSize: 16, letterSpacing: 1 }}><span style={{ color: "#F5A623" }}>{"★".repeat(Math.round(servis.puan))}</span><span style={{ color: "#E2E8F0" }}>{"★".repeat(5 - Math.round(servis.puan))}</span></span>
            {servis.yorumSayisi > 0 && (servis.googleMapsUrl ? (
              <a href={servis.googleMapsUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#2563EB", fontSize: 14, fontWeight: 600 }}>{servis.yorumSayisi} yorum</a>
            ) : (
              <span style={{ color: "#64748B", fontSize: 14 }}>{servis.yorumSayisi} yorum</span>
            ))}
          </div>
        ) : (
          <div style={{ color: "#94A3B8", fontSize: 14, marginBottom: 5 }}>Henüz puanlanmamış</div>
        )}
        <div style={{ fontSize: 13.5, color: "#64748B", marginBottom: 18 }}>
          {servis.ilce && (servis.sehir ? `${servis.ilce}, ${servis.sehir}` : servis.ilce)}
          {servis.km != null && (
            <> · <strong style={{ color: "#1E293B" }}>{servis.km.toFixed(1)} km</strong></>
          )}
          {acik !== null && (
            <> · <span style={{ color: acik ? "#22C55E" : "#DC2626", fontWeight: 700 }}>{acik ? "● Açık" : "● Kapalı"}</span></>
          )}
        </div>

        {/* Aksiyonlar */}
        <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
          {servis.telefon && (
            <a
              href={`tel:${servis.telefon}`}
              style={{
                background: "#2563EB", color: "white",
                borderRadius: 10, padding: "12px 20px",
                fontSize: 15, textDecoration: "none", fontWeight: 700,
                display: "inline-flex", alignItems: "center", gap: 6,
              }}
            >📞 Ara</a>
          )}
          {servis.googleMapsUrl && (
            <a
              href={servis.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "white", color: "#1E293B",
                borderRadius: 10, padding: "12px 20px",
                fontSize: 14, textDecoration: "none", fontWeight: 600,
                border: "1.5px solid #1E293B",
                display: "inline-flex", alignItems: "center", gap: 6,
              }}
            >🗺 Haritada Gör</a>
          )}
        </div>

        {/* Adres */}
        {servis.adres && (
          <div style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 22, fontSize: 14, color: "#475569", lineHeight: 1.5 }}>
            <span style={{ flexShrink: 0 }}>📍</span><span>{servis.adres}</span>
          </div>
        )}

        {/* Çalışma saatleri */}
        {servis.calismaSaatleri?.gunler?.length > 0 && (
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 16, color: "#1E293B", margin: "0 0 10px 0", fontWeight: 600 }}>Çalışma Saatleri</h3>
            <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 12, padding: "10px 16px" }}>
              {servis.calismaSaatleri.gunler.map((g, i) => {
                const bg = g.startsWith(buGun);
                return <div key={i} style={{ fontSize: 13.5, padding: "3px 0", color: bg ? "#1E293B" : "#64748B", fontWeight: bg ? 700 : 400 }}>{g}</div>;
              })}
            </div>
          </div>
        )}

        {/* Hizmet kategorileri */}
        <div style={{ marginBottom: 28 }}>
          <h3 style={{
            fontFamily: "'Fraunces', serif", fontSize: 16, color: "#1E293B",
            margin: "0 0 12px 0", fontWeight: 600,
          }}>Hizmet Kategorileri</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {(servis.kategoriler ?? []).map((k) => (
              <span key={k} style={{
                background: "rgba(22,163,74,0.12)", color: "#22C55E",
                padding: "5px 12px", borderRadius: 20, fontSize: 13, fontWeight: 500,
              }}>{k}</span>
            ))}
          </div>
        </div>

        {/* Yorumlar — gerçek yorumlar Google'da; oraya yönlendir (yorum metnini saklamıyoruz) */}
        {servis.yorumSayisi > 0 && servis.googleMapsUrl && (
          <div>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 16, color: "#1E293B", margin: "0 0 12px 0", fontWeight: 600 }}>Yorumlar</h3>
            <a href={servis.googleMapsUrl} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, background: "white", border: "1px solid #E2E8F0", borderRadius: 12, padding: "16px", textDecoration: "none", color: "#1E293B" }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15 }}><span style={{ color: "#F5A623" }}>★</span> {servis.puan?.toFixed(1)} · {servis.yorumSayisi} Google değerlendirmesi</div>
                <div style={{ fontSize: 13, color: "#64748B", marginTop: 3 }}>Tüm yorumları Google'da oku →</div>
              </div>
              <span style={{ color: "#2563EB", fontWeight: 700, fontSize: 20, flexShrink: 0 }}>›</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

// İki kademeli konum seçimi: önce il, sonra o ile ait ilçeler.
// ilIlceMap: tüm Türkiye (TR_IL_ILCE) — { "İstanbul": ["Kadıköy", ...], ... }
function FallbackIlce({ ilIlceMap, secili, onSec }) {
  const [il, setIl] = useState("");
  const iller = Object.keys(ilIlceMap).sort((a, b) => a.localeCompare(b, "tr"));
  const ilceler = il
    ? [...(ilIlceMap[il] || [])].sort((a, b) => a.localeCompare(b, "tr"))
    : [];

  const selStyle = {
    padding: "11px 14px", fontSize: 14, borderRadius: 8,
    border: "2px solid #1E293B", background: "#F8FAFC",
    color: "#1E293B", cursor: "pointer", fontFamily: "inherit",
    minWidth: 180,
  };

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <p style={{ color: "#1E293B", marginBottom: 16, fontSize: 14 }}>
        Konum iznine gerek kalmadan bölgenizi seçin:
      </p>
      <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
        {/* İl */}
        <select
          value={il}
          onChange={(e) => { setIl(e.target.value); onSec(""); }}
          style={selStyle}
        >
          <option value="">İl seçin...</option>
          {iller.map((x) => <option key={x} value={x}>{x}</option>)}
        </select>

        {/* İlçe — yalnız il seçilince aktif */}
        <select
          value={secili}
          onChange={(e) => onSec(e.target.value)}
          disabled={!il}
          style={{ ...selStyle, opacity: il ? 1 : 0.5, cursor: il ? "pointer" : "not-allowed" }}
        >
          <option value="">{il ? "İlçe seçin..." : "Önce il seçin"}</option>
          {ilceler.map((x) => <option key={x} value={x}>{x}</option>)}
        </select>
      </div>
    </div>
  );
}

export default function ServisEkrani({ cihaz, marka, garantiAltinda, belirti, servisler: servislerProp, onKapat }) {
  // "loading" | "success" | "denied" | "error"
  const [locationState, setLocationState] = useState("loading");
  const [siraliServisler, setSiraliServisler] = useState([]);
  const [fallbackIlce, setFallbackIlce] = useState("");
  const [seciliServis, setSeciliServis] = useState(null);
  const [ekran, setEkran] = useState("liste"); // "liste" | "profil"
  const [siralama, setSiralama] = useState("mesafe"); // "mesafe" (default) | "puan"
  const [yetkiliGevset, setYetkiliGevset] = useState(false); // garanti boş çıkınca "tüm yakın servisleri göster"
  const [tumYakin, setTumYakin] = useState([]); // garanti filtresi UYGULANMAMIŞ yakın liste (gevşetme için)
  const [tumServisler, setTumServisler] = useState(servislerProp || []);
  // Müşterinin ilçesi — ileride talep/veri toplama için bölge bilgisi (koordinat yoksa).
  const [konumIlce, setKonumIlce] = useState(null);
  // Müşterinin GPS koordinatı — mesafe sıralaması için.
  const [musteriKonum, setMusteriKonum] = useState(null);

  // JSON + DB servislerini birleştir
  useEffect(() => {
    // cihaz parametresi gönderilmez — birleşik kategoriler (Süpürge/Bilgisayar)
    // eski kategori adlı servislerle de eşleşsin diye filtre client'ta yapılır.
    fetch(`/api/servis/liste`)
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (!data?.servisler) return;
        // DB servislerini JSON listesiyle birleştir (ID'ye göre dedüp)
        const jsonIds = new Set((servislerProp || []).map(s => s.id));
        const sadeceDbn = data.servisler.filter(s => !jsonIds.has(s.id));
        setTumServisler([...(servislerProp || []), ...sadeceDbn]);
      })
      .catch(() => {}); // fetch hata → sadece JSON ile devam
  }, [cihaz]);

  // Konum → sıralama
  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationState("denied");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude: lat, longitude: lng } = pos.coords;
        setMusteriKonum({ lat, lng }); // mesafe sıralaması için
        const kat = eslesenKategoriler(cihaz);
        // Kategori eşleşen servisleri km ile işaretle + MESAFE birincil sırala.
        // Filtre ÖNCESİ tam liste — kullanıcının ilini bundan çıkarırız.
        const kmSiraliTum = tumServisler
          .filter((s) => s.kategoriler?.some((k) => kat.includes(k)))
          .map((s) => ({
            ...s,
            // lat/lng null olan DB servisleri km hesaplanamaz → sona koy
            km: s.lat && s.lng ? haversine(lat, lng, s.lat, s.lng) : null,
          }))
          // MESAFE birincil — en yakın üstte. Yetkili sabitlenmez, yalnızca
          // rozet olarak gösterilir. Eşit km'de puan.
          .sort((a, b) => {
            if (a.km != null && b.km != null) {
              if (a.km !== b.km) return a.km - b.km;
              return (b.puan || 0) - (a.puan || 0);
            }
            if (a.km == null && b.km == null) return (b.puan || 0) - (a.puan || 0);
            return a.km == null ? 1 : -1;
          });

        // Garanti (yalnız-yetkili) modunda: BAŞKA İLDEN servis gösterme.
        // Servisin ili: JSON'da "sehir", DB'de "il". Kullanıcının ili = en yakın
        // (herhangi) servisin ili. Türkçe İ/I/ı varyantlarına dayanıklı karşılaştırma.
        const ilAdi = (s) => s.sehir || s.il;
        const normIl = (x) => (x || "").replace(/[İI]/g, "i").replace(/ı/g, "i").toLowerCase().trim();
        const enYakinIlli = kmSiraliTum.find((s) => s.km != null && ilAdi(s));
        const kullaniciIl = garantiAltinda && enYakinIlli ? ilAdi(enYakinIlli) : null;

        const eslesmis = kmSiraliTum
          .filter((s) => !garantiAltinda || s.yetkili)
          .filter((s) => !garantiAltinda || !kullaniciIl || normIl(ilAdi(s)) === normIl(kullaniciIl))
          .slice(0, 15);
        setSiraliServisler(eslesmis);
        setTumYakin(kmSiraliTum.slice(0, 15)); // garanti filtresi olmadan yakın servisler (gevşetme için)
        setLocationState("success");

        // Bölge bilgisi (konumIlce) — ileride talep/veri toplama için saklanır.
        // En yakın DB servisinin ilçesini al; yoksa ters geokod.
        const kmSirali = (filtre) =>
          kmSiraliTum.filter((s) => s.km != null && s.ilce && filtre(s))
                  .sort((a, b) => a.km - b.km)[0];
        const enYakinDb  = kmSirali((s) => s.kaynak === "db");
        const enYakinAny = kmSirali(() => true);
        const bolgeIlce  = (enYakinDb || enYakinAny)?.ilce;
        if (bolgeIlce) {
          setKonumIlce(bolgeIlce);
        } else {
          fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&accept-language=tr&zoom=12`)
            .then((r) => (r.ok ? r.json() : null))
            .then((d) => {
              const a = d?.address || {};
              const ilce = a.city_district || a.town || a.county || a.district || a.suburb || null;
              if (ilce) setKonumIlce(ilce);
            })
            .catch(() => {});
        }
      },
      () => setLocationState("denied"),
      { timeout: 10000 }
    );
  }, [cihaz, tumServisler]);

  // İl → ilçe haritası: tüm Türkiye
  const ilIlceMap = TR_IL_ILCE;

  // Profil ekranı
  if (ekran === "profil" && seciliServis) {
    return (
      <ServisProfil
        servis={seciliServis}
        onGeri={() => { setEkran("liste"); setSeciliServis(null); }}
      />
    );
  }

  // Sıralama tercihine göre liste: "mesafe" = km birincil + puan ikincil;
  // "puan" = puan birincil + mesafe ikincil (kullanıcı kuralı).
  // Garanti boş çıkıp kullanıcı "tüm servisleri göster" dediyse filtresiz yakın listeyi kullan.
  const _liste = (garantiAltinda && yetkiliGevset) ? tumYakin : siraliServisler;
  const gosterilenServisler = [..._liste].sort((a, b) => {
    if (siralama === "puan") {
      const pf = (b.puan || 0) - (a.puan || 0);
      if (pf !== 0) return pf;
      if (a.km != null && b.km != null) return a.km - b.km;
      return a.km == null ? 1 : -1;
    }
    if (a.km != null && b.km != null) {
      if (a.km !== b.km) return a.km - b.km;
      return (b.puan || 0) - (a.puan || 0);
    }
    if (a.km == null && b.km == null) return (b.puan || 0) - (a.puan || 0);
    return a.km == null ? 1 : -1;
  });

  return (
    <div style={{
      position: "fixed", inset: 0, background: "#F8FAFC",
      overflowY: "auto", zIndex: 100, fontFamily: "'Hanken Grotesk', sans-serif",
    }}>
      {/* Üst bar */}
      <div style={{
        background: "#1E293B", color: "#F8FAFC",
        padding: "14px 16px", display: "flex", alignItems: "center", gap: 12,
        position: "sticky", top: 0, zIndex: 10,
      }}>
        <button
          onClick={onKapat}
          style={{ background: "none", border: "none", color: "#F8FAFC", fontSize: 20, cursor: "pointer" }}
        >←</button>
        <div style={{ flex: 1 }}>
          <span style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 600 }}>
            {marka ? `${marka} — ` : ""}{cihaz} Servisleri
          </span>
          {garantiAltinda && (
            <div style={{ fontSize: 11, color: "#86EFAC", marginTop: 2, fontWeight: 600 }}>
              🛡 Garantili cihaz · {yetkiliGevset ? "Tüm yakın servisler" : "Yalnızca YETKİLİ servisler"}
            </div>
          )}
        </div>
      </div>

      {/* Garanti uyarı bandı */}
      {garantiAltinda && (
        <div style={{
          background: yetkiliGevset ? "#FFF7ED" : "#ECFDF5",
          borderBottom: `1px solid ${yetkiliGevset ? "#FED7AA" : "#A7F3D0"}`,
          padding: "10px 16px", display: "flex", alignItems: "center", gap: 8,
          fontSize: 13, color: yetkiliGevset ? "#9A3412" : "#166534", fontWeight: 600,
        }}>
          <span style={{ fontSize: 16 }}>🛡</span>
          {yetkiliGevset ? (
            <span>Yakındaki <strong>tüm servisler</strong> gösteriliyor. Garantili cihazda yetkili servis önerilir — yetkili dışı servis garantiyi etkileyebilir.</span>
          ) : (
            <span>
              Cihazınız garanti kapsamında — yalnızca <strong>Yetkili Servisler</strong> listeleniyor.
              {marka && marka !== "Diğer" && ` ${marka} yetkili servisine yönlendiriliyorsunuz.`}
            </span>
          )}
        </div>
      )}

      <div style={{ padding: "16px" }}>
        {/* Sıralama — sağ üst: Mesafe (default) / Puan */}
        {locationState === "success" && gosterilenServisler.length > 0 && (
          <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <span style={{ fontSize: 12, color: "#64748B", fontWeight: 600 }}>Sırala:</span>
            <div style={{ display: "inline-flex", background: "#F1F5F9", borderRadius: 9, padding: 3, gap: 2 }}>
              {[["mesafe", "📍 Mesafe"], ["puan", "★ Puan"]].map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setSiralama(key)}
                  style={{
                    border: "none", cursor: "pointer", borderRadius: 7, padding: "6px 12px",
                    fontSize: 12.5, fontWeight: 700, fontFamily: "inherit",
                    background: siralama === key ? "#fff" : "transparent",
                    color: siralama === key ? "#2563EB" : "#64748B",
                    boxShadow: siralama === key ? "0 1px 2px rgba(30,41,59,.12)" : "none",
                  }}
                >{label}</button>
              ))}
            </div>
          </div>
        )}
        {/* Yükleniyor */}
        {locationState === "loading" && (
          <p style={{ textAlign: "center", color: "#1E293B", marginTop: 40 }}>
            Konumunuz alınıyor...
          </p>
        )}

        {/* Başarılı ama (filtre sonrası) gösterilecek servis yok */}
        {locationState === "success" && gosterilenServisler.length === 0 && (
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <div style={{ fontSize: 36, marginBottom: 10 }}>📍</div>
            {garantiAltinda && tumYakin.length > 0 ? (
              <>
                <p style={{ color: "#1E293B", fontSize: 14, fontWeight: 600, marginBottom: 6 }}>
                  Bu bölgede kayıtlı yetkili servis bulunamadı
                </p>
                <p style={{ color: "#64748B", fontSize: 12.5, lineHeight: 1.5, marginBottom: 16 }}>
                  Yakında {tumYakin.length} servis var ama "yetkili" olarak işaretli değil.
                </p>
                <button
                  onClick={() => setYetkiliGevset(true)}
                  style={{ background: "#2563EB", color: "#fff", border: "none", borderRadius: 10, padding: "11px 20px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}
                >Tüm yakın servisleri göster</button>
                <div style={{ marginTop: 10 }}>
                  <a
                    href="https://www.servis.gov.tr/Genel/Sorgu"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "inline-block", background: "transparent", color: "#2563EB", border: "1.5px solid #2563EB", borderRadius: 10, padding: "10px 20px", fontSize: 13.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", textDecoration: "none" }}
                  >🔍 SERBİS'te Ara</a>
                </div>
                <p style={{ color: "#94A3B8", fontSize: 11.5, lineHeight: 1.5, marginTop: 12 }}>
                  Garantili cihazda yetkili dışı servis garantiyi etkileyebilir.<br />
                  SERBİS (Ticaret Bakanlığı) resmî yetkili servis kaydını sorgular.
                </p>
              </>
            ) : (
              <>
                <p style={{ color: "#1E293B", fontSize: 14, fontWeight: 600, marginBottom: 6 }}>
                  Bu bölgede henüz listeli servis yok
                </p>
                <p style={{ color: "#64748B", fontSize: 12.5, lineHeight: 1.5 }}>
                  Yakındaki servisleri görmek için konum izni verin<br />veya farklı bir bölge seçin.
                </p>
              </>
            )}
          </div>
        )}

        {locationState === "success" && gosterilenServisler.map((servis) => (
          <ServisKarti
            key={servis.id}
            servis={servis}
            onSec={(s) => { setSeciliServis(s); setEkran("profil"); }}
          />
        ))}

        {/* Konum izni reddedildi — ilçe fallback */}
        {locationState === "denied" && (
          <FallbackIlce
            ilIlceMap={ilIlceMap}
            secili={fallbackIlce}
            onSec={(ilce) => {
              if (!ilce) return;
              setFallbackIlce(ilce);
              setKonumIlce(ilce); // bölge bilgisi — seçilen ilçe kesin doğru
              const kat = eslesenKategoriler(cihaz);
              const ilceListe = tumServisler
                .filter((s) => s.kategoriler?.some((k) => kat.includes(k)) && s.ilce === ilce)
                // Konum yok → puana göre sırala (yetkili sabitlenmez, rozet kalır)
                .sort((a, b) => (b.puan || 0) - (a.puan || 0));
              const eslesmis = ilceListe
                .filter((s) => !garantiAltinda || s.yetkili)   // garanti → sadece yetkili
                .slice(0, 10);
              setSiraliServisler(eslesmis);
              setTumYakin(ilceListe.slice(0, 10)); // garanti filtresi olmadan (gevşetme için)
              setLocationState("success");
            }}
          />
        )}
      </div>
    </div>
  );
}

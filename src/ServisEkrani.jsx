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

      <div style={{ padding: "20px 16px" }}>
        {/* Puan & konum */}
        <div style={{ fontSize: 13, color: "#475569", marginBottom: 20 }}>
          {[
            servis.puan != null && `⭐ ${servis.puan.toFixed(1)}`,
            servis.yorumSayisi > 0 && `${servis.yorumSayisi} yorum`,
            servis.ilce && (servis.sehir ? `${servis.ilce}, ${servis.sehir}` : servis.ilce),
          ].filter(Boolean).join(" · ")}
          {servis.km != null && (
            <> · <strong style={{ color: "#1E293B" }}>{servis.km.toFixed(1)} km</strong></>
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

        {/* Ürünler & parçalar */}
        <div>
          <h3 style={{
            fontFamily: "'Fraunces', serif", fontSize: 16, color: "#1E293B",
            margin: "0 0 12px 0", fontWeight: 600,
          }}>Ürünler & Parçalar</h3>
          <div style={{
            background: "white", borderRadius: 10, padding: "20px 16px",
            textAlign: "center", color: "#94A3B8", fontSize: 13,
            border: "1.5px dashed #E2E8F0",
          }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>🔧</div>
            <div>Yakında — bu servis henüz ürün eklemedi</div>
          </div>
        </div>
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
        const eslesmis = tumServisler
          .filter((s) => s.kategoriler?.some((k) => kat.includes(k)))
          .filter((s) => !garantiAltinda || s.yetkili)
          .map((s) => ({
            ...s,
            // lat/lng null olan DB servisleri km hesaplanamaz → sona koy
            km: s.lat && s.lng ? haversine(lat, lng, s.lat, s.lng) : null,
          }))
          // MESAFE birincil — en yakın üstte. Yetkili sabitlenmez, yalnızca
          // rozet olarak gösterilir. (Garanti seçiliyse zaten yukarıda yalnız
          // yetkili'ye filtrelendi.) Eşit km'de puan.
          .sort((a, b) => {
            if (a.km != null && b.km != null) {
              if (a.km !== b.km) return a.km - b.km;
              return (b.puan || 0) - (a.puan || 0);
            }
            if (a.km == null && b.km == null) return (b.puan || 0) - (a.puan || 0);
            return a.km == null ? 1 : -1;
          })
          .slice(0, 15);
        setSiraliServisler(eslesmis);
        setLocationState("success");

        // Bölge bilgisi (konumIlce) — ileride talep/veri toplama için saklanır.
        // En yakın DB servisinin ilçesini al; yoksa ters geokod.
        const kmSirali = (filtre) =>
          eslesmis.filter((s) => s.km != null && s.ilce && filtre(s))
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
              🛡 Garantili cihaz · Yalnızca YETKİLİ servisler
            </div>
          )}
        </div>
      </div>

      {/* Garanti uyarı bandı */}
      {garantiAltinda && (
        <div style={{
          background: "#ECFDF5", borderBottom: "1px solid #A7F3D0",
          padding: "10px 16px", display: "flex", alignItems: "center", gap: 8,
          fontSize: 13, color: "#166534", fontWeight: 600,
        }}>
          <span style={{ fontSize: 16 }}>🛡</span>
          <span>
            Cihazınız garanti kapsamında — yalnızca <strong>Yetkili Servisler</strong> listeleniyor.
            {marka && marka !== "Diğer" && ` ${marka} yetkili servisine yönlendiriliyorsunuz.`}
          </span>
        </div>
      )}

      <div style={{ padding: "16px" }}>
        {/* Yükleniyor */}
        {locationState === "loading" && (
          <p style={{ textAlign: "center", color: "#1E293B", marginTop: 40 }}>
            Konumunuz alınıyor...
          </p>
        )}

        {/* Başarılı ama bu bölgede listeli servis yok */}
        {locationState === "success" && siraliServisler.length === 0 && (
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <div style={{ fontSize: 36, marginBottom: 10 }}>📍</div>
            <p style={{ color: "#1E293B", fontSize: 14, fontWeight: 600, marginBottom: 6 }}>
              Bu bölgede henüz listeli servis yok
            </p>
            <p style={{ color: "#64748B", fontSize: 12.5, lineHeight: 1.5 }}>
              Yakındaki servisleri görmek için konum izni verin<br />veya farklı bir bölge seçin.
            </p>
          </div>
        )}

        {locationState === "success" && siraliServisler.map((servis) => (
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
              const eslesmis = tumServisler
                .filter((s) => s.kategoriler?.some((k) => kat.includes(k)) && s.ilce === ilce)
                .filter((s) => !garantiAltinda || s.yetkili)   // garanti → sadece yetkili
                // Konum yok → puana göre sırala (yetkili sabitlenmez, rozet kalır)
                .sort((a, b) => (b.puan || 0) - (a.puan || 0))
                .slice(0, 10);
              setSiraliServisler(eslesmis);
              setLocationState("success");
            }}
          />
        )}
      </div>
    </div>
  );
}

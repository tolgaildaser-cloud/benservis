import React, { useState, useEffect } from "react";
import ServisCaldir from "./ServisCaldir.jsx";
import { TR_IL_ILCE } from "./tr-iller.js";

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
        <span style={{ background: "#3A7D44", color: "white", fontSize: 9, padding: "2px 6px", borderRadius: 3, fontWeight: 700 }}>
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

function ServisKarti({ servis, onSec, onCaldir }) {
  return (
    <div
      onClick={() => onSec(servis)}
      style={{
        background: "white", borderRadius: 10,
        padding: "12px 14px", marginBottom: 10,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        cursor: "pointer",
      }}
    >
      <div style={{ flex: 1, minWidth: 0, marginRight: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap", marginBottom: 3 }}>
          <span style={{ fontWeight: 600, fontSize: 14, color: "#22302A" }}>
            {servis.ad}
          </span>
          <TierRozetleri servis={servis} />
        </div>
        <div style={{ fontSize: 12, color: "#888", marginTop: 3 }}>
          {[
            servis.puan != null && `⭐ ${servis.puan.toFixed(1)}`,
            servis.yorumSayisi > 0 && `${servis.yorumSayisi} yorum`,
            servis.ilce,
          ].filter(Boolean).join(" · ")}
          {servis.km != null && (
            <> · <strong style={{ color: "#22302A" }}>{servis.km.toFixed(1)} km</strong></>
          )}
        </div>
        {servis.googleMapsUrl && (
          <a
            href={servis.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{ fontSize: 11, color: "#C8632B", textDecoration: "none", marginTop: 2, display: "inline-block" }}
          >
            🗺 Haritada Gör
          </a>
        )}
      </div>

        <button
          onClick={(e) => { e.stopPropagation(); onCaldir(servis); }}
          style={{
            background: "#22302A", color: "#F5EFE2",
            borderRadius: 10, padding: "10px 14px",
            fontSize: 13, border: "none", fontWeight: 700,
            whiteSpace: "nowrap", flexShrink: 0, cursor: "pointer",
          }}
        >🔧 Servis Çağır</button>
    </div>
  );
}

function ServisProfil({ servis, onGeri }) {
  return (
    <div style={{
      position: "fixed", inset: 0, background: "#F5EFE2",
      overflowY: "auto", zIndex: 100, fontFamily: "'Hanken Grotesk', sans-serif",
    }}>
      {/* Üst bar */}
      <div style={{
        background: "#22302A", color: "#F5EFE2",
        padding: "14px 16px", display: "flex", alignItems: "center", gap: 12,
        position: "sticky", top: 0, zIndex: 10,
      }}>
        <button
          onClick={onGeri}
          style={{ background: "none", border: "none", color: "#F5EFE2", fontSize: 20, cursor: "pointer" }}
        >←</button>
        <span style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 600, flex: 1 }}>
          {servis.ad}
        </span>
        <TierRozetleri servis={servis} />
      </div>

      <div style={{ padding: "20px 16px" }}>
        {/* Puan & konum */}
        <div style={{ fontSize: 13, color: "#666", marginBottom: 20 }}>
          {[
            servis.puan != null && `⭐ ${servis.puan.toFixed(1)}`,
            servis.yorumSayisi > 0 && `${servis.yorumSayisi} yorum`,
            servis.ilce && (servis.sehir ? `${servis.ilce}, ${servis.sehir}` : servis.ilce),
          ].filter(Boolean).join(" · ")}
          {servis.km != null && (
            <> · <strong style={{ color: "#22302A" }}>{servis.km.toFixed(1)} km</strong></>
          )}
        </div>

        {/* Aksiyonlar */}
        <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
          {servis.telefon && (
            <a
              href={`tel:${servis.telefon}`}
              style={{
                background: "#C8632B", color: "white",
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
                background: "white", color: "#22302A",
                borderRadius: 10, padding: "12px 20px",
                fontSize: 14, textDecoration: "none", fontWeight: 600,
                border: "1.5px solid #22302A",
                display: "inline-flex", alignItems: "center", gap: 6,
              }}
            >🗺 Haritada Gör</a>
          )}
        </div>

        {/* Hizmet kategorileri */}
        <div style={{ marginBottom: 28 }}>
          <h3 style={{
            fontFamily: "'Fraunces', serif", fontSize: 16, color: "#22302A",
            margin: "0 0 12px 0", fontWeight: 600,
          }}>Hizmet Kategorileri</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {(servis.kategoriler ?? []).map((k) => (
              <span key={k} style={{
                background: "rgba(58,125,68,0.12)", color: "#3A7D44",
                padding: "5px 12px", borderRadius: 20, fontSize: 13, fontWeight: 500,
              }}>{k}</span>
            ))}
          </div>
        </div>

        {/* Ürünler & parçalar */}
        <div>
          <h3 style={{
            fontFamily: "'Fraunces', serif", fontSize: 16, color: "#22302A",
            margin: "0 0 12px 0", fontWeight: 600,
          }}>Ürünler & Parçalar</h3>
          <div style={{
            background: "white", borderRadius: 10, padding: "20px 16px",
            textAlign: "center", color: "#aaa", fontSize: 13,
            border: "1.5px dashed #ddd",
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
    border: "2px solid #22302A", background: "#F5EFE2",
    color: "#22302A", cursor: "pointer", fontFamily: "inherit",
    minWidth: 180,
  };

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <p style={{ color: "#22302A", marginBottom: 16, fontSize: 14 }}>
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
  const [caldirServis, setCaldirServis] = useState(null);
  const [otomatikCaldir, setOtomatikCaldir] = useState(false);
  const [tumServisler, setTumServisler] = useState(servislerProp || []);
  // Müşterinin ilçesi — havuz eşleştirmesi için. GPS ters geokodundan
  // veya fallback ilçe seçiminden gelir. Adres metni parse'ından güvenilir.
  const [konumIlce, setKonumIlce] = useState(null);

  // JSON + DB servislerini birleştir
  useEffect(() => {
    fetch(`/api/servis/liste${cihaz ? `?cihaz=${encodeURIComponent(cihaz)}` : ""}`)
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
        const eslesmis = tumServisler
          .filter((s) => s.kategoriler?.includes(cihaz))
          .filter((s) => !garantiAltinda || s.yetkili)
          .map((s) => ({
            ...s,
            // lat/lng null olan DB servisleri km hesaplanamaz → sona koy
            km: s.lat && s.lng ? haversine(lat, lng, s.lat, s.lng) : null,
          }))
          .sort((a, b) => {
            if (a.yetkili !== b.yetkili) return b.yetkili ? 1 : -1;
            if (a.km == null && b.km == null) return 0;
            if (a.km == null) return 1;
            if (b.km == null) return -1;
            return a.km - b.km;
          })
          .slice(0, 15);
        setSiraliServisler(eslesmis);
        setLocationState("success");

        // Havuz ilçesi: EN YAKIN servisin ilçesi (km hesaplanabilen ilk servis).
        // GPS ters geokodundan daha güvenilir — Nominatim sınır bölgelerinde
        // yanlış ilçe dönebiliyor (örn. Seyrantepe'yi Sarıyer sanıyor), oysa
        // ⚡ "bölgemdeki ilk müsait servis" zaten en yakın servisin bölgesi demek.
        const enYakin = eslesmis.find((s) => s.km != null && s.ilce);
        if (enYakin) {
          setKonumIlce(enYakin.ilce);
        } else {
          // Yakında km'li servis yok → demand capture için ters geokod
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

  // İl → ilçe haritası: tüm Türkiye (free lansman — her bölgeden talep alınır,
  // servis olmasa bile talep o ilçenin havuzuna düşer).
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
      position: "fixed", inset: 0, background: "#F5EFE2",
      overflowY: "auto", zIndex: 100, fontFamily: "'Hanken Grotesk', sans-serif",
    }}>
        {(caldirServis || otomatikCaldir) && (
          <ServisCaldir
            servis={otomatikCaldir ? null : caldirServis}
            cihaz={cihaz}
            belirti={belirti}
            ilce={konumIlce}
            onKapat={() => { setCaldirServis(null); setOtomatikCaldir(false); }}
          />
        )}
      {/* Üst bar */}
      <div style={{
        background: "#22302A", color: "#F5EFE2",
        padding: "14px 16px", display: "flex", alignItems: "center", gap: 12,
        position: "sticky", top: 0, zIndex: 10,
      }}>
        <button
          onClick={onKapat}
          style={{ background: "none", border: "none", color: "#F5EFE2", fontSize: 20, cursor: "pointer" }}
        >←</button>
        <div style={{ flex: 1 }}>
          <span style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 600 }}>
            {marka ? `${marka} — ` : ""}{cihaz} Servisleri
          </span>
          {garantiAltinda && (
            <div style={{ fontSize: 11, color: "#A8D5B5", marginTop: 2, fontWeight: 600 }}>
              🛡 Garantili cihaz · Yalnızca YETKİLİ servisler
            </div>
          )}
        </div>
      </div>

      {/* Garanti uyarı bandı */}
      {garantiAltinda && (
        <div style={{
          background: "#EDF7F0", borderBottom: "1px solid #B8DFC6",
          padding: "10px 16px", display: "flex", alignItems: "center", gap: 8,
          fontSize: 13, color: "#1E5631", fontWeight: 600,
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
          <p style={{ textAlign: "center", color: "#22302A", marginTop: 40 }}>
            Konumunuz alınıyor...
          </p>
        )}

        {/* Başarılı ama bu bölgede listeli servis yok — yine de havuza gönder */}
        {locationState === "success" && siraliServisler.length === 0 && (
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <div style={{ fontSize: 36, marginBottom: 10 }}>📍</div>
            <p style={{ color: "#22302A", fontSize: 14, fontWeight: 600, marginBottom: 6 }}>
              Bu bölgede henüz listeli servis yok
            </p>
            <p style={{ color: "#888", fontSize: 12.5, marginBottom: 18, lineHeight: 1.5 }}>
              Talebinizi bölge havuzuna gönderin — bölgenizdeki<br />servisler ulaştığında size bildirim göndeririz.
            </p>
            <button
              onClick={() => setOtomatikCaldir(true)}
              style={{
                padding: "13px 24px", borderRadius: 12,
                background: "#C8632B", color: "white", border: "none",
                fontWeight: 700, fontSize: 14.5, cursor: "pointer",
              }}>
              ⚡ Talebimi Bölge Havuzuna Gönder
            </button>
          </div>
        )}

        {locationState === "success" && siraliServisler.length > 0 && (
          <div style={{ marginBottom: 16 }}>
            <button
              onClick={() => setOtomatikCaldir(true)}
              style={{
                width: "100%", padding: "14px 16px", borderRadius: 12,
                background: "#C8632B", color: "white", border: "none",
                fontWeight: 700, fontSize: 15, cursor: "pointer",
              }}>
              ⚡ Bölgemdeki İlk Müsait Servise Gönder
            </button>
            <div style={{ fontSize: 11, color: "#888", textAlign: "center", marginTop: 4 }}>
              Ya da aşağıdan belirli bir servis seç
            </div>
          </div>
        )}

        {locationState === "success" && siraliServisler.map((servis) => (
          <ServisKarti
            key={servis.id}
            servis={servis}
            onSec={(s) => { setSeciliServis(s); setEkran("profil"); }}
            onCaldir={setCaldirServis}
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
              setKonumIlce(ilce); // havuz eşleşmesi — seçilen ilçe kesin doğru
              const eslesmis = tumServisler
                .filter((s) => s.kategoriler?.includes(cihaz) && s.ilce === ilce)
                .filter((s) => !garantiAltinda || s.yetkili)   // garanti → sadece yetkili
                .sort((a, b) =>
                  a.yetkili !== b.yetkili
                    ? b.yetkili ? 1 : -1
                    : 0
                )
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

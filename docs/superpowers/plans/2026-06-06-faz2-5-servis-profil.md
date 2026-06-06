# Faz 2.5 — Servis Profil Sayfası Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** ServisEkrani'daki kartlara tıklanınca servisin profil sayfası açılsın; mevcut servis verisi detaylı gösterilsin, ürün kataloğu altyapısı hazır ama "yakında" mesajıyla boş dursun.

**Architecture:** `ServisEkrani` içine `ekran` state ("liste" | "profil") ve `seciliServis` state eklenir. Karta tıklayınca `ServisProfil` bileşeni render edilir, geri okuna basınca listeye dönülür. React Router gerekmez. DPP'deki `DPPEkrani` state machine pattern'iyle birebir aynı yaklaşım. Supabase'e `servis_katalog` tablosu eklenir (şimdilik boş).

**Tech Stack:** React 18, Vite, Supabase (SQL), mevcut token'lar (INK `#22302A`, CREAM `#F5EFE2`, AMBER `#C8632B`, GREEN `#3A7D44`), Fraunces + Hanken Grotesk fontları

---

## Dosya Yapısı

| Dosya | Değişiklik |
|-------|------------|
| `src/ServisEkrani.jsx` | `ServisKarti` tıklanabilir olur; yeni `ServisProfil` bileşeni eklenir; `ServisEkrani` state machine güncellenir |
| `supabase/schema.sql` | `servis_katalog` tablosu eklenir |

---

## Task 1: Supabase — servis_katalog tablosu

**Files:**
- Modify: `supabase/schema.sql`

- [ ] **Step 1: schema.sql'e tabloyu ekle**

`supabase/schema.sql` dosyasının sonuna ekle:

```sql
-- Faz 2.5 — Servis Katalog (ürün/parça/hizmet listesi, şimdilik boş)
CREATE TABLE IF NOT EXISTS servis_katalog (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  servis_id   text NOT NULL,          -- services-data.json'daki Google Places ID
  tip         text NOT NULL CHECK (tip IN ('hizmet', 'yedek_parca', 'yenilenmiş_ürün')),
  ad          text NOT NULL,
  aciklama    text,
  fiyat       integer,                -- kuruş cinsinden (TL × 100)
  aktif       boolean DEFAULT true,
  created_at  timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS servis_katalog_servis_id_idx ON servis_katalog(servis_id);
```

- [ ] **Step 2: Supabase Dashboard'da çalıştır**

[Supabase Dashboard](https://supabase.com/dashboard) → proje `qzwueckmignbsirffoap` → SQL Editor → yukarıdaki iki ifadeyi yapıştır → Run.

Beklenen: "Success. No rows returned"

- [ ] **Step 3: Commit**

```bash
cd /Users/tolgaildaser/Downloads/arizam-ne-app
git add supabase/schema.sql
git commit -m "feat: servis_katalog tablosu eklendi (Faz 2.5)"
```

---

## Task 2: ServisKarti — tıklanabilir kart

**Files:**
- Modify: `src/ServisEkrani.jsx` (ServisKarti bileşeni, satır 1-60 arası)

`ServisKarti` bileşenine `onSec` prop'u eklenir. Tüm kart tıklanabilir olur. "📞 Ara" butonu `e.stopPropagation()` ile korunur — telefon açılır, profil açılmaz.

- [ ] **Step 1: ServisKarti'ı güncelle**

`src/ServisEkrani.jsx` içindeki `ServisKarti` fonksiyonunu tamamen şununla değiştir:

```jsx
function ServisKarti({ servis, onSec }) {
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
        <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
          <span style={{ fontWeight: 600, fontSize: 14, color: "#22302A" }}>
            {servis.ad}
          </span>
          {servis.yetkili && (
            <span style={{
              background: "#3A7D44", color: "white",
              fontSize: 9, padding: "2px 5px", borderRadius: 3, fontWeight: 700,
            }}>YETKİLİ</span>
          )}
        </div>
        <div style={{ fontSize: 12, color: "#888", marginTop: 3 }}>
          {servis.puan != null && `⭐ ${servis.puan.toFixed(1)}`}
          {servis.yorumSayisi > 0 && ` · ${servis.yorumSayisi} yorum`}
          {` · ${servis.ilce}`}
          {servis.km != null && ` · `}
          {servis.km != null && (
            <strong style={{ color: "#22302A" }}>{servis.km.toFixed(1)} km</strong>
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

      {servis.telefon ? (
        <a
          href={`tel:${servis.telefon}`}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "#C8632B", color: "white",
            borderRadius: 10, padding: "10px 14px",
            fontSize: 15, textDecoration: "none", fontWeight: 700,
            whiteSpace: "nowrap", flexShrink: 0,
          }}
        >📞 Ara</a>
      ) : (
        <span style={{ fontSize: 11, color: "#bbb", flexShrink: 0 }}>Telefon yok</span>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Visual doğrulama**

```bash
cd /Users/tolgaildaser/Downloads/arizam-ne-app && npm run build 2>&1 | tail -5
```

Beklenen: "built in X.XXs" — hata yok.

- [ ] **Step 3: Commit**

```bash
git add src/ServisEkrani.jsx
git commit -m "feat: ServisKarti tıklanabilir — onSec prop + stopPropagation"
```

---

## Task 3: ServisProfil bileşeni

**Files:**
- Modify: `src/ServisEkrani.jsx` — `FallbackIlce` bileşeninden önce yeni `ServisProfil` bileşeni ekle

- [ ] **Step 1: ServisProfil bileşenini ekle**

`src/ServisEkrani.jsx` içinde `function FallbackIlce` satırından ÖNCE şu bileşeni ekle:

```jsx
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
        {servis.yetkili && (
          <span style={{
            background: "#3A7D44", color: "white",
            fontSize: 9, padding: "3px 7px", borderRadius: 3, fontWeight: 700,
          }}>YETKİLİ</span>
        )}
      </div>

      <div style={{ padding: "20px 16px" }}>
        {/* Puan & konum */}
        <div style={{ fontSize: 13, color: "#666", marginBottom: 20 }}>
          {servis.puan != null && `⭐ ${servis.puan.toFixed(1)}`}
          {servis.yorumSayisi > 0 && ` · ${servis.yorumSayisi} yorum`}
          {` · ${servis.ilce}`}
          {servis.sehir && `, ${servis.sehir}`}
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
            {servis.kategoriler.map((k) => (
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
```

- [ ] **Step 2: Build kontrolü**

```bash
cd /Users/tolgaildaser/Downloads/arizam-ne-app && npm run build 2>&1 | tail -5
```

Beklenen: "built in X.XXs" — hata yok.

- [ ] **Step 3: Commit**

```bash
git add src/ServisEkrani.jsx
git commit -m "feat: ServisProfil bileşeni — detay sayfası + kategoriler + yakında ürünler"
```

---

## Task 4: ServisEkrani state machine güncellemesi

**Files:**
- Modify: `src/ServisEkrani.jsx` — `ServisEkrani` export default fonksiyonu

`ServisEkrani`'ye `ekran` ve `seciliServis` state'leri eklenir. Profil ekranında `ServisProfil` render edilir, liste ekranında mevcut `ServisKarti`'lara `onSec` prop'u geçilir.

- [ ] **Step 1: ServisEkrani'yi güncelle**

`src/ServisEkrani.jsx` içindeki `export default function ServisEkrani` fonksiyonunu tamamen şununla değiştir:

```jsx
export default function ServisEkrani({ cihaz, servisler, onKapat }) {
  const [ekran, setEkran] = useState("liste"); // "liste" | "profil"
  const [seciliServis, setSeciliServis] = useState(null);
  const [locationState, setLocationState] = useState("loading");
  const [siraliServisler, setSiraliServisler] = useState([]);
  const [fallbackIlce, setFallbackIlce] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationState("denied");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude: lat, longitude: lng } = pos.coords;
        const eslesmis = servisler
          .filter((s) => s.kategoriler.includes(cihaz))
          .map((s) => ({ ...s, km: haversine(lat, lng, s.lat, s.lng) }))
          .sort((a, b) =>
            a.yetkili !== b.yetkili
              ? b.yetkili ? 1 : -1
              : a.km - b.km
          )
          .slice(0, 10);
        setSiraliServisler(eslesmis);
        setLocationState("success");
      },
      () => setLocationState("denied"),
      { timeout: 10000 }
    );
  }, [cihaz, servisler]);

  const ilceler = useMemo(
    () => [...new Set(
      servisler.filter((s) => s.kategoriler.includes(cihaz)).map((s) => s.ilce)
    )].sort(),
    [servisler, cihaz]
  );

  // Profil ekranı
  if (ekran === "profil" && seciliServis) {
    return (
      <ServisProfil
        servis={seciliServis}
        onGeri={() => { setEkran("liste"); setSeciliServis(null); }}
      />
    );
  }

  // Liste ekranı
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
          onClick={onKapat}
          style={{ background: "none", border: "none", color: "#F5EFE2", fontSize: 20, cursor: "pointer" }}
        >←</button>
        <span style={{ fontFamily: "'Fraunces', serif", fontSize: 18, fontWeight: 600 }}>
          {cihaz} Servisleri
        </span>
      </div>

      <div style={{ padding: "16px" }}>
        {locationState === "loading" && (
          <p style={{ textAlign: "center", color: "#22302A", marginTop: 40 }}>
            Konumunuz alınıyor...
          </p>
        )}

        {locationState === "success" && siraliServisler.length === 0 && (
          <p style={{ textAlign: "center", color: "#888", marginTop: 40 }}>
            Bu cihaz için yakında kayıtlı servis bulunamadı.
          </p>
        )}

        {locationState === "success" && siraliServisler.map((servis) => (
          <ServisKarti
            key={servis.id}
            servis={servis}
            onSec={(s) => { setSeciliServis(s); setEkran("profil"); }}
          />
        ))}

        {locationState === "denied" && (
          <FallbackIlce
            ilceler={ilceler}
            secili={fallbackIlce}
            onSec={(ilce) => {
              if (!ilce) return;
              setFallbackIlce(ilce);
              const eslesmis = servisler
                .filter((s) => s.kategoriler.includes(cihaz) && s.ilce === ilce)
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
```

- [ ] **Step 2: Build kontrolü**

```bash
cd /Users/tolgaildaser/Downloads/arizam-ne-app && npm run build 2>&1 | tail -5
```

Beklenen: "built in X.XXs" — hata yok.

- [ ] **Step 3: Commit**

```bash
git add src/ServisEkrani.jsx
git commit -m "feat: ServisEkrani state machine — liste/profil geçişi"
```

---

## Task 5: Deploy ve doğrulama

**Files:** Yok (deploy)

- [ ] **Step 1: Production build**

```bash
cd /Users/tolgaildaser/Downloads/arizam-ne-app && npm run build 2>&1
```

Beklenen: Hata yok, `dist/` güncellendi.

- [ ] **Step 2: Push**

```bash
git push origin main
```

Beklenen: Vercel otomatik deploy başlatır (~15 saniye).

- [ ] **Step 3: Production'da doğrula**

```bash
curl -s "https://www.benservis.com/" -I | grep "HTTP"
```

Beklenen: `HTTP/2 200`

- [ ] **Step 4: Manuel test akışı**

`https://www.benservis.com` → Klima seç → Teşhis et → "📍 Servis Bul" → Bir servise tıkla.

Beklenen:
- Servis adı, puan, ilçe, km gösteriliyor
- "📞 Ara" ve "🗺 Haritada Gör" butonları var
- Kategori chip'leri sıralı görünüyor
- Ürünler bölümünde "Yakında" mesajı var
- "← Geri" ile listeye dönülüyor
- "📞 Ara" tıklandığında profil açılmıyor, telefon açılıyor

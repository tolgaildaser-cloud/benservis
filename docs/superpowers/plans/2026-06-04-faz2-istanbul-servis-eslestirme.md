# Faz 2 — İstanbul Servis Eşleştirme Uygulama Planı

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** İstanbul'daki Google Places kayıtlı teknik servisleri topla, Faz 1 teşhis sonrasına GPS tabanlı "Servis Bul" özelliği ekle.

**Architecture:** Python scripti Google Places Text Search API'yi sorgulayıp `src/services-data.json` üretir. Frontend bu statik JSON'u import eder; kullanıcı "Servis Bul" butonuna bastığında tarayıcı GPS'i alır, Haversine ile mesafe hesaplanır, cihaz kategorisine göre filtrelenmiş servis listesi gösterilir. Sıfır yeni backend altyapısı.

**Tech Stack:** Python 3 + `requests`, Google Places Text Search API (v1), React 18, Vite, Browser Geolocation API

---

## Dosya Yapısı

| Dosya | İşlem | Sorumluluk |
|-------|-------|------------|
| `scripts/collect-services.py` | Oluştur | Places API sorgu + deduplikasyon + JSON üretimi |
| `src/services-data.json` | Oluştur (script çıktısı) | Statik servis veritabanı |
| `src/ServisEkrani.jsx` | Oluştur | GPS alma, matching, liste render |
| `src/App.jsx` | Güncelle | CTA butonu + ServisEkrani entegrasyonu |

---

## Task 1: collect-services.py — Skeleton + Tek Sorgu Testi

**Files:**
- Create: `scripts/collect-services.py`

Google Places Text Search (New) API: `POST https://places.googleapis.com/v1/places:searchText`
API anahtarı `GOOGLE_PLACES_API_KEY` ortam değişkeninden okunur.

- [ ] **Adım 1: Script dosyasını oluştur**

```python
#!/usr/bin/env python3
"""
İstanbul teknik servis veri toplama scripti.
Kullanım: GOOGLE_PLACES_API_KEY=xxx python scripts/collect-services.py
"""
import os
import json
import time
import requests

API_KEY = os.environ.get("GOOGLE_PLACES_API_KEY")
if not API_KEY:
    raise SystemExit("GOOGLE_PLACES_API_KEY ortam değişkeni eksik")

PLACES_URL = "https://places.googleapis.com/v1/places:searchText"
FIELD_MASK = (
    "places.id,"
    "places.displayName,"
    "places.formattedAddress,"
    "places.nationalPhoneNumber,"
    "places.internationalPhoneNumber,"
    "places.rating,"
    "places.userRatingCount,"
    "places.location,"
    "places.googleMapsUri"
)

def search_places(query: str) -> list[dict]:
    """Tek bir sorgu için Places API'yi çağır, ham result listesi döndür."""
    headers = {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": API_KEY,
        "X-Goog-FieldMask": FIELD_MASK,
    }
    body = {
        "textQuery": query,
        "languageCode": "tr",
        "maxResultCount": 20,
    }
    resp = requests.post(PLACES_URL, json=body, headers=headers, timeout=10)
    resp.raise_for_status()
    return resp.json().get("places", [])


if __name__ == "__main__":
    # Tek sorgu testi
    results = search_places("klima teknik servisi istanbul")
    print(f"Sonuç sayısı: {len(results)}")
    if results:
        print("İlk kayıt:", json.dumps(results[0], ensure_ascii=False, indent=2))
```

- [ ] **Adım 2: Testi çalıştır**

```bash
cd ~/Downloads/arizam-ne-app
GOOGLE_PLACES_API_KEY=<anahtarını_buraya_yaz> python scripts/collect-services.py
```

Beklenen çıktı: `Sonuç sayısı: 20` (ya da daha az) + ilk servis JSON'u.
Hata durumu: `401` → API anahtarı hatalı; `400` → field mask yanlış.

- [ ] **Adım 3: Commit**

```bash
git add scripts/collect-services.py
git commit -m "feat: Google Places API skeleton + tek sorgu testi"
```

---

## Task 2: İlçe Çıkarma + Servis Parse + Kategori Eşlemesi

**Files:**
- Modify: `scripts/collect-services.py`

- [ ] **Adım 1: `parse_place()` fonksiyonunu ekle**

`search_places()` fonksiyonunun hemen altına ekle:

```python
ISTANBUL_ILCELERI = [
    "Adalar", "Arnavutköy", "Ataşehir", "Avcılar", "Bağcılar", "Bahçelievler",
    "Bakırköy", "Başakşehir", "Bayrampaşa", "Beşiktaş", "Beykoz", "Beylikdüzü",
    "Beyoğlu", "Büyükçekmece", "Çatalca", "Çekmeköy", "Esenler", "Esenyurt",
    "Eyüpsultan", "Fatih", "Gaziosmanpaşa", "Güngören", "Kadıköy", "Kağıthane",
    "Kartal", "Küçükçekmece", "Maltepe", "Pendik", "Sancaktepe", "Sarıyer",
    "Silivri", "Sultanbeyli", "Sultangazi", "Şile", "Şişli", "Tuzla",
    "Ümraniye", "Üsküdar", "Zeytinburnu",
]

def extract_ilce(address: str) -> str:
    """Adres metninden İstanbul ilçesini çıkar."""
    address_lower = address.lower()
    for ilce in ISTANBUL_ILCELERI:
        if ilce.lower() in address_lower:
            return ilce
    return "İstanbul"

def normalize_phone(place: dict) -> str | None:
    """tel: linki için uluslararası formatlı numara döndür."""
    raw = place.get("internationalPhoneNumber") or place.get("nationalPhoneNumber")
    if not raw:
        return None
    return raw.replace(" ", "").replace("-", "")

def parse_place(place: dict, kategoriler: list[str]) -> dict:
    """Places API ham objesini uygulama formatına dönüştür."""
    name = place.get("displayName", {}).get("text", "")
    return {
        "id": place.get("id", ""),
        "ad": name,
        "kategoriler": kategoriler,
        "telefon": normalize_phone(place),
        "adres": place.get("formattedAddress", ""),
        "ilce": extract_ilce(place.get("formattedAddress", "")),
        "lat": place.get("location", {}).get("latitude"),
        "lng": place.get("location", {}).get("longitude"),
        "puan": place.get("rating"),
        "yorumSayisi": place.get("userRatingCount", 0),
        "googleMapsUrl": place.get("googleMapsUri", ""),
        "yetkili": "yetkili" in name.lower() or "authorized" in name.lower(),
    }
```

- [ ] **Adım 2: `SEARCHES` listesini tanımla**

`ISTANBUL_ILCELERI` listesinin üstüne ekle:

```python
SEARCHES = [
    {
        "queries": [
            "beyaz eşya teknik servisi istanbul",
            "beyaz eşya tamiri istanbul",
        ],
        "kategoriler": ["Buzdolabı", "Çamaşır Makinesi", "Bulaşık Makinesi", "Fırın / Ocak"],
    },
    {
        "queries": ["klima teknik servisi istanbul", "klima tamiri istanbul"],
        "kategoriler": ["Klima"],
    },
    {
        "queries": ["kombi servisi istanbul", "kombi tamiri istanbul"],
        "kategoriler": ["Kombi"],
    },
    {
        "queries": ["televizyon tamiri istanbul", "tv teknik servisi istanbul"],
        "kategoriler": ["Televizyon"],
    },
    {
        "queries": ["termosifon şofben tamiri istanbul"],
        "kategoriler": ["Termosifon / Şofben"],
    },
    {
        "queries": ["telefon tamiri istanbul", "gsm teknik servisi istanbul"],
        "kategoriler": ["Cep Telefonu"],
    },
    {
        "queries": ["notebook tamiri istanbul", "laptop servisi istanbul"],
        "kategoriler": ["Notebook"],
    },
    {
        "queries": ["bilgisayar tamiri istanbul", "pc teknik servisi istanbul"],
        "kategoriler": ["Masaüstü Bilgisayar"],
    },
    {
        "queries": ["yazıcı tamiri istanbul", "printer servisi istanbul"],
        "kategoriler": ["Yazıcı"],
    },
    {
        "queries": [
            "elektronik tamir istanbul",
            "küçük ev aletleri tamiri istanbul",
        ],
        "kategoriler": [
            "Mikrodalga", "Elektrik Süpürgesi", "Su Sebili / Arıtma",
            "Robot Süpürge", "Air Fryer", "Diğer",
        ],
    },
]
```

- [ ] **Adım 3: `collect_all()` fonksiyonunu ekle**

`parse_place()` fonksiyonunun altına ekle:

```python
def collect_all() -> list[dict]:
    """Tüm sorguları çalıştır, Place ID'ye göre deduplike et, liste döndür."""
    seen: dict[str, dict] = {}  # place_id → servis kaydı

    for search in SEARCHES:
        for query in search["queries"]:
            print(f"  Sorgulaniyor: {query}")
            try:
                places = search_places(query)
            except requests.HTTPError as e:
                print(f"  HATA: {e}")
                continue

            for place in places:
                place_id = place.get("id", "")
                if not place_id:
                    continue

                if place_id in seen:
                    # Aynı servis farklı kategoriden geldi: kategorileri birleştir
                    existing_cats = seen[place_id]["kategoriler"]
                    new_cats = search["kategoriler"]
                    seen[place_id]["kategoriler"] = list(
                        dict.fromkeys(existing_cats + new_cats)
                    )
                else:
                    seen[place_id] = parse_place(place, list(search["kategoriler"]))

            time.sleep(0.3)  # API rate limit: 10 istek/saniye serbest kota

    return list(seen.values())
```

- [ ] **Adım 4: `__main__` bloğunu güncelle — sadece test çıktısı**

```python
if __name__ == "__main__":
    # Deduplikasyon testi: sadece ilk iki SEARCHES grubunu çalıştır
    import copy
    _original = SEARCHES[:]
    SEARCHES[:] = SEARCHES[:2]
    results = collect_all()
    SEARCHES[:] = _original

    print(f"\nToplam benzersiz servis (ilk 2 grup): {len(results)}")
    cats = set()
    for s in results:
        cats.update(s["kategoriler"])
    print("Görülen kategoriler:", sorted(cats))
```

- [ ] **Adım 5: Çalıştır ve doğrula**

```bash
GOOGLE_PLACES_API_KEY=<anahtar> python scripts/collect-services.py
```

Beklenen: `Toplam benzersiz servis (ilk 2 grup): 20-40` + kategoriler listesi.

- [ ] **Adım 6: Commit**

```bash
git add scripts/collect-services.py
git commit -m "feat: Places API parse + kategori eşlemesi + deduplikasyon"
```

---

## Task 3: Tam Çalıştırma → services-data.json Üretimi

**Files:**
- Modify: `scripts/collect-services.py`
- Create: `src/services-data.json`

- [ ] **Adım 1: `__main__` bloğunu tam çalıştırma moduna güncelle**

```python
if __name__ == "__main__":
    output_path = os.path.join(
        os.path.dirname(__file__), "..", "src", "services-data.json"
    )

    print("Veri toplanıyor...")
    results = collect_all()
    print(f"\nToplam benzersiz servis: {len(results)}")

    # Koordinatsız veya telefonsuz kayıtları filtrele
    valid = [s for s in results if s["lat"] and s["lng"]]
    print(f"Koordinatlı servis: {len(valid)}")

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(valid, f, ensure_ascii=False, indent=2)

    print(f"Kaydedildi: {output_path}")
```

- [ ] **Adım 2: Tam scripti çalıştır**

```bash
GOOGLE_PLACES_API_KEY=<anahtar> python scripts/collect-services.py
```

Beklenen: `Toplam benzersiz servis: 200+`, `src/services-data.json` oluştu.

- [ ] **Adım 3: JSON'u doğrula**

```bash
# Toplam kayıt sayısı
python3 -c "import json; d=json.load(open('src/services-data.json')); print(len(d), 'servis')"

# Kategori dağılımı
python3 -c "
import json
from collections import Counter
d = json.load(open('src/services-data.json'))
cats = Counter(k for s in d for k in s['kategoriler'])
for cat, n in cats.most_common():
    print(f'{n:3d}  {cat}')
"
```

Beklenen: Her kategoride en az 5 servis.

- [ ] **Adım 4: Commit**

```bash
git add scripts/collect-services.py src/services-data.json
git commit -m "feat: services-data.json İstanbul servis verisi oluşturuldu"
```

---

## Task 4: ServisEkrani — Haversine + Geolocation State

**Files:**
- Create: `src/ServisEkrani.jsx`

- [ ] **Adım 1: Bileşeni oluştur — Haversine + state yapısı**

```jsx
import React, { useState, useEffect } from "react";

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
export default function ServisEkrani({ cihaz, servisler, onKapat }) {
  // "loading" | "success" | "denied" | "error"
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
      () => setLocationState("denied")
    );
  }, [cihaz, servisler]);

  // ... render Task 5'te
  return <div>yükleniyor...</div>;
}
```

- [ ] **Adım 2: Tarayıcıda konum iznini test et**

`App.jsx`'e geçici olarak şunu ekle (Task 7'de düzgün yapılacak, şimdi sadece test):

```jsx
// App.jsx en üstüne, diğer import'ların yanına
import ServisEkrani from "./ServisEkrani.jsx";
import SERVISLER from "./services-data.json";
// App return içine geçici olarak ekle:
// <ServisEkrani cihaz="Klima" servisler={SERVISLER} onKapat={() => {}} />
```

`npm run dev` → tarayıcıda "yükleniyor..." görünmeli + konum izni popup'ı çıkmalı.

- [ ] **Adım 3: Geçici import'ları kaldır, commit**

```bash
git add src/ServisEkrani.jsx
git commit -m "feat: ServisEkrani skeleton — Haversine + geolocation state"
```

---

## Task 5: ServisEkrani — Liste Render + Telefon Butonu

**Files:**
- Modify: `src/ServisEkrani.jsx`

Tasarım token'ları: cream `#F5EFE2`, ink `#22302A`, amber `#C8632B`, green `#3A7D44`. Fontlar Fraunces + Hanken Grotesk (zaten App.jsx'te import ediliyor).

- [ ] **Adım 1: `return` bloğunu tam render ile değiştir**

```jsx
// ServisEkrani.jsx içinde export default fonksiyonunun return kısmını değiştir:

  const ilceler = [...new Set(
    servisler.filter((s) => s.kategoriler.includes(cihaz)).map((s) => s.ilce)
  )].sort();

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
        {/* Yükleniyor */}
        {locationState === "loading" && (
          <p style={{ textAlign: "center", color: "#22302A", marginTop: 40 }}>
            Konumunuz alınıyor...
          </p>
        )}

        {/* Başarılı — liste */}
        {locationState === "success" && siraliServisler.length === 0 && (
          <p style={{ textAlign: "center", color: "#888", marginTop: 40 }}>
            Bu cihaz için yakında kayıtlı servis bulunamadı.
          </p>
        )}

        {locationState === "success" && siraliServisler.map((servis) => (
          <ServisKarti key={servis.id} servis={servis} />
        ))}

        {/* Konum izni reddedildi — ilçe fallback */}
        {locationState === "denied" && (
          <FallbackIlce
            ilceler={ilceler}
            secili={fallbackIlce}
            onSec={(ilce) => {
              setFallbackIlce(ilce);
              const eslesmis = servisler
                .filter((s) => s.kategoriler.includes(cihaz) && s.ilce === ilce)
                .sort((a, b) => (b.yetkili ? 1 : 0) - (a.yetkili ? 1 : 0))
                .slice(0, 10);
              setSiraliServisler(eslesmis);
              setLocationState("success");
            }}
          />
        )}
      </div>
    </div>
  );
```

- [ ] **Adım 2: `ServisKarti` bileşenini ekle**

`export default` satırının ÖNÜNE ekle:

```jsx
function ServisKarti({ servis }) {
  return (
    <div style={{
      background: "white", borderRadius: 10,
      padding: "12px 14px", marginBottom: 10,
      display: "flex", justifyContent: "space-between", alignItems: "center",
      boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
    }}>
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
          {servis.puan && `⭐ ${servis.puan.toFixed(1)}`}
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
            style={{ fontSize: 11, color: "#C8632B", textDecoration: "none", marginTop: 2, display: "inline-block" }}
          >
            🗺 Haritada Gör
          </a>
        )}
      </div>

      {servis.telefon ? (
        <a
          href={`tel:${servis.telefon}`}
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

- [ ] **Adım 3: `FallbackIlce` bileşenini ekle**

`ServisKarti` fonksiyonunun hemen altına ekle:

```jsx
function FallbackIlce({ ilceler, secili, onSec }) {
  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <p style={{ color: "#22302A", marginBottom: 16, fontSize: 14 }}>
        Konum iznine gerek kalmadan ilçenizi seçin:
      </p>
      <select
        value={secili}
        onChange={(e) => onSec(e.target.value)}
        style={{
          padding: "10px 14px", fontSize: 14, borderRadius: 8,
          border: "2px solid #22302A", background: "#F5EFE2",
          color: "#22302A", cursor: "pointer",
        }}
      >
        <option value="">İlçe seçin...</option>
        {ilceler.map((ilce) => (
          <option key={ilce} value={ilce}>{ilce}</option>
        ))}
      </select>
    </div>
  );
}
```

- [ ] **Adım 4: `npm run dev` ile manuel test**

`App.jsx`'e geçici `<ServisEkrani cihaz="Klima" servisler={SERVISLER} onKapat={()=>{}} />` ekle.
Kontrol et: servis listesi görünüyor mu, kartlarda "📞 Ara" ve "🗺 Haritada Gör" çalışıyor mu, mesafe km gösteriliyor mu.

- [ ] **Adım 5: Geçici kodu kaldır, commit**

```bash
git add src/ServisEkrani.jsx
git commit -m "feat: ServisEkrani — servis listesi, telefon butonu, harita linki"
```

---

## Task 6: App.jsx Entegrasyonu

**Files:**
- Modify: `src/App.jsx`

`App.jsx`'te teşhis sonucu `sonuc` state'i olarak tutuluyor ve `sonuc && (...)` ile gösteriliyor.

- [ ] **Adım 1: Import'ları ekle**

`App.jsx` dosyasının başında mevcut `import React...` satırının hemen altına:

```jsx
import ServisEkrani from "./ServisEkrani.jsx";
import SERVISLER from "./services-data.json";
```

- [ ] **Adım 2: `showServisler` state'i ekle**

Mevcut `useState` çağrılarının bulunduğu blokta, diğer state tanımlarının yanına:

```jsx
const [showServisler, setShowServisler] = useState(false);
```

- [ ] **Adım 3: Mevcut disabled "Servis çağır" bloğunu aktif CTA ile değiştir**

`App.jsx`'te şu mevcut bloku bul (satır ~287-293):

```jsx
<div style={s.faz2}>
  <div>
    <div style={s.faz2Head}>Tamir ettirmek ister misin?</div>
    <div style={s.faz2Sub}>Adresine en yakın, puanlı servisi çağırırız.</div>
  </div>
  <button style={s.faz2Btn} disabled>Servis çağır <span style={s.soon}>yakında</span></button>
</div>
```

Tüm bu bloku şununla değiştir:

```jsx
<div style={s.faz2}>
  <div>
    <div style={s.faz2Head}>Tamir ettirmek ister misin?</div>
    <div style={s.faz2Sub}>Konumuna göre sıralar · Direkt arama</div>
  </div>
  <button style={{ ...s.faz2Btn, opacity: 1 }} onClick={() => setShowServisler(true)}>
    📍 Servis Bul
  </button>
</div>
```

- [ ] **Adım 4: ServisEkrani'yi bağla**

`App.jsx`'in `return` bloğunun en üstüne (başka elementlerden önce) ekle:

```jsx
{showServisler && (
  <ServisEkrani
    cihaz={cihaz}
    servisler={SERVISLER}
    onKapat={() => setShowServisler(false)}
  />
)}
```

`cihaz` App.jsx'teki mevcut state değişkenidir (`const [cihaz, setCihaz] = useState("")` — satır ~71).

- [ ] **Adım 5: `npm run dev` ile uçtan uca test**

1. Bir cihaz seç (örn. Klima) ve belirti gir → teşhis al
2. "📍 Yakınımda Servis Bul" butonu görünüyor mu?
3. Tıkla → konum izni popup'ı → izin ver → servis listesi çıkıyor mu?
4. Servis kartında "📞 Ara" → doğrudan arama ekranı açılıyor mu?
5. "🗺 Haritada Gör" → Google Maps açılıyor mu?
6. Konum iznini reddet → ilçe dropdown gösteriliyor mu?
7. İlçe seç → listeye geçiş yapılıyor mu?

- [ ] **Adım 6: Commit**

```bash
git add src/App.jsx
git commit -m "feat: Faz 1'e Servis Bul CTA ve ServisEkrani entegrasyonu"
```

---

## Task 7: Deploy + Doğrulama

**Files:**
- No new files

- [ ] **Adım 1: Production build test**

```bash
npm run build
```

Beklenen: hata yok. `dist/` klasörü oluştu. `services-data.json` bundle'a dahil olmalı.

- [ ] **Adım 2: Vercel'e push**

```bash
git push origin main
```

Vercel otomatik deploy başlar. Vercel dashboard'da build log'unu takip et.

- [ ] **Adım 3: Canlıda test**

`benservis.com` veya `project-83ils.vercel.app` adresinde:
1. Faz 1 teşhis akışını tamamla
2. "Servis Bul" butonunun göründüğünü doğrula
3. Konum iznini ver → liste çıkıyor mu?
4. Mobil cihazda test et (asıl kullanım mobil)

- [ ] **Adım 4: Final commit (varsa düzeltme)**

```bash
git add -A
git commit -m "fix: canlı test düzeltmeleri"
git push origin main
```

---

## Başarı Kriterleri Kontrol Listesi

- [ ] `collect-services.py` çalıştırılıp 200+ benzersiz İstanbul servisi üretiliyor
- [ ] Her Faz 1 cihaz kategorisi için en az 5 servis eşleşiyor
- [ ] Teşhis sonrası "Servis Bul" → konum izni → liste akışı hatasız çalışıyor
- [ ] "📞 Ara" butonu doğrudan telefon açıyor
- [ ] "🗺 Haritada Gör" Google Maps deeplink açıyor
- [ ] Konum izni reddinde ilçe dropdown fallback devreye giriyor
- [ ] İlçe seçimi sonrası servis listesi dolduruluyor
- [ ] Eşleşen servis yoksa anlamlı mesaj gösterildi
- [ ] Mevcut Faz 1 teşhis akışı etkilenmiyor
- [ ] `npm run build` hata vermeden tamamlanıyor

# Benservis Faz 2 — İstanbul Servis Eşleştirme Tasarımı

**Tarih:** 2026-06-04  
**Durum:** Onaylandı  
**Kapsam:** Faz 1 teşhis çıktısına GPS tabanlı İstanbul servis eşleştirme eklenmesi

---

## Bağlam

Faz 1 (AI teşhis + tahmini maliyet) canlıda. Faz 2'de servisleri sıfırdan kayıt ettirmek yerine İstanbul'da Google'a kayıtlı mevcut teknik servis firmalarını toplayıp, teşhis sonrasına ücretsiz "en yakın servis" özelliği olarak ekleyeceğiz. Servisler için sürtünmesiz başlangıç: önce ücretsiz lead, ilerleyen fazda komisyon modeline geçiş.

---

## Kararlar

| Karar | Seçim | Gerekçe |
|-------|-------|---------|
| Veri kaynağı | Google Places API | Yapılandırılmış veri, konum, puan, telefon; ücretsiz kota yeterli |
| Mimari | Statik JSON bundle | Sıfır runtime maliyet, pilot için doğrulama önce |
| Mesafe hesaplama | Client-side Haversine | Backend gerekmez, 300-500 servis için yeterli performans |
| Konum alma | Tarayıcı Geolocation API | GPS izni → fallback olarak ilçe dropdown |
| UI yerleşimi | Teşhis sonrası CTA → tam ekran yeni adım | Net funnel, konum izni akışı düzgün kurulur |
| Servis aksiyonu | `tel:` deeplink "📞 Ara" butonu | Tek dokunuşla arama, backend gerektirmez |
| Pilot bölge | İstanbul | Tüm Türkiye için veri toplamadan önce doğrulama |

---

## Mimari

```
VERİ TOPLAMA (tek seferlik)
  scripts/collect-services.py
    → Google Places Text Search API
    → 18 kategori × İstanbul arama sorguları
    → Place ID ile deduplikasyon
    → src/services-data.json (~300–500 kayıt)

FRONTEND (mevcut App.jsx'e eklenir)
  services-data.json bundle'a dahil edilir
  Teşhis sonrası → "📍 Servis Bul" CTA butonu
    → navigator.geolocation.getCurrentPosition()
    → Kategori filtresi (s.kategoriler.includes(cihaz))
    → Haversine mesafe hesaplama
    → Mesafeye göre sıralama (yetkili önce, mesafe eşitse)
    → ServisEkrani bileşeni: liste + 📞 Ara butonları

GÜNCELLEME (periyodik)
  Script yeniden çalıştır → JSON güncelle → git push → Vercel otomatik deploy
```

**Dokunulmayan:** `api/diagnose.js`, Vercel config, mevcut Faz 1 akışı.

---

## Dosya Değişiklikleri

| Dosya | İşlem | Açıklama |
|-------|-------|----------|
| `scripts/collect-services.py` | Yeni | Places API veri toplama scripti |
| `src/services-data.json` | Yeni | Statik servis veritabanı |
| `src/App.jsx` | Güncelle | CTA butonu + ServisEkrani bileşeni |

---

## Veri Yapısı

Her kayıt `services-data.json` içinde:

```json
{
  "id": "ChIJxxxxxxxxxxxxxxx",
  "ad": "ABC Klima Teknik Servis",
  "kategoriler": ["Klima", "Kombi"],
  "telefon": "+902123456789",
  "adres": "Moda Cad. No:5, Kadıköy",
  "ilce": "Kadıköy",
  "lat": 40.9832,
  "lng": 29.0285,
  "puan": 4.8,
  "yorumSayisi": 127,
  "googleMapsUrl": "https://maps.google.com/?cid=...",
  "yetkili": false
}
```

**`kategoriler` alanı** Faz 1'deki `CIHAZLAR` dizisiyle birebir eşleşir. Beyaz eşya servisleri 4 kategoriyle (`Buzdolabı`, `Çamaşır Makinesi`, `Bulaşık Makinesi`, `Fırın / Ocak`) işaretlenir.

**`yetkili` alanı** Places API'den gelen işletme adında "yetkili servis" veya "authorized service" geçiyorsa `true` set edilir; aksi hâlde `false`.

---

## Kategori → Arama Sorguları

| Faz 1 Kategorileri | Places API Sorguları |
|--------------------|---------------------|
| Buzdolabı, Çamaşır, Bulaşık, Fırın | `"beyaz eşya teknik servisi istanbul"`, `"beyaz eşya tamiri istanbul"` |
| Klima | `"klima teknik servisi istanbul"`, `"klima tamiri istanbul"` |
| Kombi | `"kombi servisi istanbul"`, `"kombi tamiri istanbul"` |
| Televizyon | `"televizyon tamiri istanbul"`, `"tv teknik servisi istanbul"` |
| Cep Telefonu | `"telefon tamiri istanbul"`, `"gsm teknik servisi istanbul"` |
| Notebook | `"notebook tamiri istanbul"`, `"laptop servisi istanbul"` |
| Masaüstü Bilgisayar | `"bilgisayar tamiri istanbul"`, `"pc teknik servisi istanbul"` |
| Yazıcı | `"yazıcı tamiri istanbul"`, `"printer servisi istanbul"` |
| Diğer (Mikro, Süpürge, vb.) | `"elektronik tamir istanbul"`, `"küçük ev aletleri tamiri istanbul"` |

**Kapsam tahmini:** ~15 sorgu × 20 sonuç → deduplikasyon sonrası 300–500 benzersiz servis. Ücretsiz Places API kotası içinde.

---

## Frontend Mantığı

### App.jsx Değişiklikleri

```jsx
// Import
import SERVISLER from './services-data.json';

// State
const [showServisler, setShowServisler] = useState(false);

// Teşhis sonucu altına CTA
<button onClick={() => setShowServisler(true)}>
  📍 Yakınımda Servis Bul
</button>

// ServisEkrani
{showServisler && (
  <ServisEkrani
    cihaz={selectedCihaz}
    servisler={SERVISLER}
    onKapat={() => setShowServisler(false)}
  />
)}
```

### ServisEkrani Matching Mantığı

```js
// 1. Haversine (km)
function mesafe(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 +
    Math.cos(lat1 * Math.PI/180) * Math.cos(lat2 * Math.PI/180) * Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

// 2. Kategori filtresi
const eslesmis = servisler.filter(s => s.kategoriler.includes(cihaz));

// 3. Konum al → mesafe hesapla → sırala
navigator.geolocation.getCurrentPosition(pos => {
  const { latitude: lat, longitude: lng } = pos.coords;
  const sirali = eslesmis
    .map(s => ({ ...s, km: mesafe(lat, lng, s.lat, s.lng) }))
    .sort((a, b) => a.yetkili !== b.yetkili ? (b.yetkili ? 1 : -1) : a.km - b.km)
    .slice(0, 10);
  setSiraliServisler(sirali);
});
```

**Fallback — konum izni:** Reddedilirse ilçe dropdown gösterilir, `ilce` alanına göre filtreleme yapılır.

**Fallback — eşleşen servis yok:** Bir kategori için hiç servis bulunamazsa ("Robot Süpürge" gibi niş kategoriler) `ServisEkrani` "Bu cihaz için yakında kayıtlı servis bulunamadı" mesajı gösterir; boş liste yerine anlamlı geri bildirim verilir.

### Servis Kartı

Her kart: **ad** (yetkili badge) · **puan + yorum sayısı** · **ilçe** · **mesafe (km)** · **"🗺 Haritada Gör"** Google Maps deeplink · **"📞 Ara"** `tel:` butonu.

Sıralama: yetkili servisler önce, ardından mesafeye göre artan.

---

## Kapsam Dışı (Bu Fazda Yok)

- Servis kayıt akışı / portal
- Ödeme / komisyon
- Puan/yorum yazma
- Çoklu şehir
- Gerçek zamanlı Places API sorgusu (statik JSON yeterli)

---

## Başarı Kriterleri

- [ ] `collect-services.py` çalıştırılıp 200+ benzersiz İstanbul servisi üretiliyor
- [ ] Her Faz 1 cihaz kategorisi için en az 5 servis eşleşiyor
- [ ] Teşhis sonrası "Servis Bul" → konum izni → liste akışı hatasız çalışıyor
- [ ] "📞 Ara" butonu doğrudan telefon açıyor
- [ ] Konum izni reddinde ilçe fallback devreye giriyor
- [ ] Mevcut Faz 1 teşhis akışı etkilenmiyor

# Benservis Faz 3 — Dijital Ürün Pasaportu (DPP) Tasarımı

**Tarih:** 2026-06-05
**Durum:** Onaylandı
**Kapsam:** Seri numara tabanlı cihaz pasaportu — kayıt, tamir geçmişi, fotoğraf

---

## Bağlam

Faz 1 (AI teşhis) ve Faz 2 (GPS servis eşleştirme) canlıda. Faz 3'te her cihaza seri
numarası üzerinden kalıcı bir dijital pasaport oluşturulur. Otomobillerin servis defteri
gibi — cihazın tüm tamir geçmişi, değiştirilen parçalar ve fotoğraflar tek yerde tutulur.

AB DPP Yönetmeliği (2025–2030 kademeli yürürlük) bu altyapıya regülatif rüzgar sağlıyor.
Faz 4 (ikinci el pazaryeri) ve Faz 5 (perakende entegrasyonu + garanti takibi) bu temelin
üzerine inşa edilecek.

**Bu fazda auth yok** — seri no giren herkes pasaport oluşturur ve tamir ekler. Kullanıcı
girişi (müşteri + servis rolleri) ayrı bir fazda gelecek; mimari buna hazır tasarlanır.

---

## Kararlar

| Karar | Seçim | Gerekçe |
|-------|-------|---------|
| Veritabanı | Supabase (PostgreSQL) | Auth-ready, RLS, Storage yerleşik; Vercel entegrasyonu kolay |
| Fotoğraf depolama | Supabase Storage | Aynı proje, S3-uyumlu, public bucket |
| API katmanı | Vercel serverless (yeni 3 fonksiyon) | Mevcut `diagnose.js` patterni |
| API anahtarı | `SUPABASE_URL` + `SUPABASE_SERVICE_KEY` — Vercel env var | Frontend'e asla gitmez |
| Frontend | `DPPEkrani` bileşeni (ServisEkrani patterni) | Mevcut kodla tutarlı |
| Fotoğraf upload | Supabase Storage JS SDK — tarayıcıdan direkt | API geçişi gereksiz |
| Auth | Yok (bu fazda) | Sürtünmesiz pilot; ileride Supabase Auth ile açılır |

---

## Mimari

```
SUPABASE
  PostgreSQL
    ├── cihazlar          (seri_no birincil kimlik)
    └── tamir_kayitlari   (cihaz_id FK)
  Storage
    └── dpp-fotograflar/  (public bucket)
          cihazlar/{cihaz_id}/   ← cihaz fotoğrafları
          tamirler/{tamir_id}/   ← tamir öncesi/sonrası

VERCEL SERVERLESS (yeni)
  api/dpp/cihaz.js       POST → oluştur/getir, GET /:seri_no → pasaport
  api/dpp/tamir.js       POST → tamir kaydı ekle

FRONTEND
  src/DPPEkrani.jsx      Arama → Yeni cihaz → Pasaport → Tamir ekle
  src/App.jsx            2 giriş noktası eklenir (bağımsız bölüm + teşhis sonrası)
```

**Dokunulmayan:** `api/diagnose.js`, `ServisEkrani.jsx`, Faz 2 akışı, Vercel config.

---

## Veri Modeli

### `cihazlar`

```sql
CREATE TABLE cihazlar (
  id                    uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  seri_no               text UNIQUE NOT NULL,
  kategori              text,          -- Faz 1 CIHAZLAR listesiyle eşleşir
  marka                 text,
  model                 text,
  renk                  text,
  uretim_yili           int,
  satin_alma_tarihi     date,
  garanti_bitis_tarihi  date,          -- Faz 5 temeli
  fotograflar           text[],        -- Supabase Storage URL dizisi
  notlar                text,
  created_at            timestamptz DEFAULT now()
);
```

### `tamir_kayitlari`

```sql
CREATE TABLE tamir_kayitlari (
  id                    uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  cihaz_id              uuid REFERENCES cihazlar(id) ON DELETE CASCADE,
  tarih                 date NOT NULL,
  yapilan_islem         text NOT NULL,
  degistirilen_parcalar text[],        -- ["Kompresör", "Gaz dolumu"]
  maliyet               int,           -- TL
  servis_adi            text,
  servis_turu           text NOT NULL DEFAULT 'harici',
                                       -- 'benservis' | 'harici' | 'sahip'
  benservis_is_id       text,          -- Faz 2 tam entegrasyon için (şimdi null)
  fotograflar           text[],        -- Tamir öncesi/sonrası fotoğraflar
  notlar                text,
  created_at            timestamptz DEFAULT now()
);

CREATE INDEX ON tamir_kayitlari(cihaz_id);
```

### Supabase Storage

- Bucket adı: `dpp-fotograflar`
- Erişim: public read, anonim write (auth gelince RLS ile kısıtlanır)
- Path: `cihazlar/{cihaz_id}/{uuid}.{ext}` ve `tamirler/{tamir_id}/{uuid}.{ext}`
- İzin verilen tipler: `image/jpeg`, `image/png`, `image/webp`
- Max boyut: 5 MB / fotoğraf

---

## API Endpointleri

### `POST /api/dpp/cihaz`

Seri numarasına göre mevcut kaydı döndürür; yoksa yeni oluşturur.

**Request:**
```json
{
  "seri_no": "SN12345678",
  "kategori": "Klima",
  "marka": "Daikin",
  "model": "FTXB35C",
  "renk": "Beyaz",
  "uretim_yili": 2021,
  "satin_alma_tarihi": "2021-06-15",
  "garanti_bitis_tarihi": "2024-06-15"
}
```

**Response:** `{ cihaz, tamirler[] }` — pasaport verisi (yeni oluşturulduysa `tamirler: []`)

### `GET /api/dpp/cihaz/:seri_no`

Pasaportu ve tamir geçmişini döndürür. Bulunamazsa `404`.

**Response:**
```json
{
  "cihaz": { "id": "...", "seri_no": "SN12345678", "marka": "Daikin", ... },
  "tamirler": [
    {
      "id": "...",
      "tarih": "2023-04-10",
      "yapilan_islem": "Gaz dolumu",
      "degistirilen_parcalar": [],
      "maliyet": 850,
      "servis_adi": "Klima Pro Servis",
      "servis_turu": "harici",
      "fotograflar": ["https://..."]
    }
  ],
  "toplam_maliyet": 850
}
```

### `POST /api/dpp/tamir`

Mevcut cihaza tamir kaydı ekler.

**Request:**
```json
{
  "cihaz_id": "uuid",
  "tarih": "2024-03-22",
  "yapilan_islem": "Kompresör değişimi",
  "degistirilen_parcalar": ["Kompresör"],
  "maliyet": 3200,
  "servis_adi": "Yetkili Klima Servisi",
  "servis_turu": "benservis",
  "fotograflar": ["https://supabase.../before.jpg", "https://supabase.../after.jpg"],
  "notlar": ""
}
```

**Response:** Eklenen `tamir_kayidi` objesi.

---

## Frontend — DPPEkrani Bileşeni

### Kullanıcı Akışı

```
[Arama]
  Seri no giriş alanı → "Pasaportu Getir"
  → Bulunamazsa: Yeni cihaz formu göster
  → Bulunursa: Pasaport görünümü

[Yeni Cihaz Formu]
  Kategori (chip seçici — CIHAZLAR listesi)
  Marka / Model / Renk / Üretim yılı
  Satın alma tarihi / Garanti bitiş tarihi (opsiyonel)
  Fotoğraf yükle (opsiyonel, max 3)
  → "Pasaport Oluştur"

[Pasaport Görünümü]
  Cihaz başlığı: Marka Model — Seri: SN...
  Kategori rozeti / Üretim yılı / Garanti durumu
  Fotoğraf galerisi (varsa)
  Toplam tamir maliyeti özeti
  Tamir zaman çizelgesi (en yeniden en eskiye)
    Her kart: tarih · işlem · parçalar · maliyet · servis · tür rozeti
    "benservis" türü → "✓ Doğrulanmış Kayıt" rozeti (Faz 2 entegrasyonu için hazır)
    Fotoğraflar varsa küçük önizleme
  "+ Tamir Ekle" butonu

[Tamir Ekle Formu]
  Tarih / Yapılan işlem / Değiştirilen parçalar
  Maliyet (TL) / Servis adı
  Servis türü: Benservis | Harici Servis | Kendim Yaptım
  Fotoğraf yükle (opsiyonel, max 5 — öncesi/sonrası)
  → "Kaydet"
```

### App.jsx Değişiklikleri

```jsx
// 1. Teşhis sonrası — "Servis Bul" yanına eklenir
<button onClick={() => { setShowDPP(true); setDPPSeriNo(""); }}>
  📋 Cihazı Kaydet
</button>

// 2. Ana ekran — teşhis formunun altında daima görünür bölüm
<div style={s.dppBanner}>
  <span>📋 Cihaz Pasaportu</span>
  <input placeholder="Seri no gir..." value={dppSeriNo} onChange={...} />
  <button onClick={() => setShowDPP(true)}>Ara</button>
</div>

// 3. Overlay
{showDPP && (
  <DPPEkrani
    initialSeriNo={dppSeriNo}
    teşhisContext={adim === "sonuc" ? { cihaz, marka } : null}
    onKapat={() => setShowDPP(false)}
  />
)}
```

`teşhisContext` prop'u: Teşhis sonrasından açılırsa kategori ve marka otomatik dolu gelir.

---

## Dosya Değişiklikleri

| Dosya | İşlem | Açıklama |
|-------|-------|----------|
| `api/dpp/cihaz.js` | Yeni | POST (upsert) + GET /:seri_no |
| `api/dpp/tamir.js` | Yeni | POST tamir kaydı |
| `src/DPPEkrani.jsx` | Yeni | Tam DPP UI bileşeni |
| `src/App.jsx` | Güncelle | 2 giriş noktası + `showDPP` state |
| `supabase/schema.sql` | Yeni | Tablo tanımları (referans) |

---

## Kapsam Dışı (Bu Fazda Yok)

- Kullanıcı girişi / oturum yönetimi
- "Cihazlarım" listesi (auth gerektiriyor)
- Faz 2 otomatik tamir logu (Faz 2 full tamamlandığında)
- Garanti bildirimleri (Faz 5)
- "Satışa Çıkar" (Faz 4)
- Pasaport paylaşım linki (ileride: `benservis.com/pasaport/:seri_no`)

---

## Başarı Kriterleri

- [ ] Supabase projesi oluşturuldu, tablolar ve storage bucket aktif
- [ ] Seri no ile yeni cihaz oluşturulabiliyor
- [ ] Mevcut seri no ile pasaport getiriliyor
- [ ] Tamir kaydı eklenebiliyor
- [ ] Fotoğraf yüklenip pasaportta görünüyor
- [ ] Teşhis sonrasında "Cihazı Kaydet" → kategori/marka önceden dolu geliyor
- [ ] Mevcut Faz 1 ve Faz 2 akışları etkilenmiyor

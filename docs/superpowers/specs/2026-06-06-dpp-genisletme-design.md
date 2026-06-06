# Benservis DPP Genişletme — Tasarım Spec

**Tarih:** 2026-06-06
**Durum:** Onaylandı
**Kapsam:** Faz 2.5b → DPP otomatik bağlantı · garanti & fatura · Benservis rozet · zenginleştir modal

---

## Bağlam

Faz 3 DPP canlıda: seri no ile cihaz pasaportu oluşturma, tamir geçmişi, fotoğraf.
Faz 2.5b canlıda: servis çağır → iş talebi → panel kabul/ret/tamamla.

**Eksik bağlantı:** İş `tamamlandi` olunca DPP'ye otomatik yazılmıyor.
**Eksik veri:** Garanti başlangıç/uzatılmış + fatura `cihazlar` tablosunda yok.
**Eksik güven katmanı:** "Benservis Doğrulanmış" rozeti — ileride ikinci el pazarında değer taşıyacak marka varlığı.

---

## Kararlar

| Karar | Seçim | Gerekçe |
|-------|-------|---------|
| Seri no toplama | `is_talepleri`'ne opsiyonel alan | Müşteri formu sırasında; zorlamak dönüşümü düşürür |
| Auto-DPP yazma | `tamamlandi` PATCH'inde sunucu tarafı | Frontend'e güvenilmez; iş kaydı + DPP atomik |
| Cihaz yoksa | Minimal upsert (seri_no + kategori) | Pasaport varlığı önemli; servis sonra zenginleştirir |
| Zenginleştir | Panel modalı, tamamlama sonrası | Servis işi kapatırken parça/fotoğraf girer |
| Maliyet | Zenginleştir modalında girilir | Ödeme adımına hazırlık |
| Benservis rozeti | Bağımsız SVG bileşeni (`BenservisRozet`) | Faz 4'te ikinci el ilanlarında da kullanılacak; marka varlığı |
| Fatura depolama | Supabase Storage `dpp-faturalar/` bucket | Mevcut pattern; PDF + JPG |

---

## Veri Modeli Değişiklikleri

### `is_talepleri` — yeni kolon
```sql
ALTER TABLE is_talepleri ADD COLUMN seri_no text;
```

### `cihazlar` — garanti + fatura
```sql
ALTER TABLE cihazlar
  ADD COLUMN garanti_baslangic_tarihi  date,
  ADD COLUMN uzatilmis_garanti         boolean DEFAULT false,
  ADD COLUMN uzatilmis_garanti_bitis   date,
  ADD COLUMN fatura_url                text;
```

### `tamir_kayitlari` — servis izlenebilirliği
```sql
ALTER TABLE tamir_kayitlari ADD COLUMN servis_id text;
```

Mevcut kayıtlar etkilenmez (nullable / default değerler).

---

## Tamamla Akışı

`PATCH /api/is/[id]` — `{ aksiyon: "tamamla" }`:

```
1. is_talepleri.durum = 'tamamlandi'

2. seri_no var mı?
   └── EVET:
       a. cihazlar'da seri_no'ya bak
          • Yoksa: INSERT minimal kayıt
            (seri_no, kategori = is.cihaz)
          • Varsa: mevcut cihaz_id al

       b. tamir_kayitlari INSERT:
            cihaz_id              = cihaz.id
            tarih                 = CURRENT_DATE
            yapilan_islem         = is.belirti     -- zenginleştir ile değişebilir
            servis_adi            = is.servis_ad
            servis_id             = is.servis_id
            servis_turu           = 'benservis'
            benservis_is_id       = is.id
            degistirilen_parcalar = []             -- zenginleştir ile doldurulur
            maliyet               = null           -- ödeme adımında gelir

       c. Response: { durum: 'tamamlandi', dpp_tamir_id: uuid }

   └── HAYIR:
       Response: { durum: 'tamamlandi', dpp_tamir_id: null }
```

SMS (eğer provider aktifse): müşteriye "İşiniz tamamlandı" bildirimi.

---

## API Değişiklikleri

### `api/is/[id].js` — PATCH tamamla genişlemesi
Mevcut koda DPP yazma bloğu eklenir. SMS non-blocking patterni korunur.

### `api/dpp/tamir/[id].js` — yeni dosya (zenginleştir)
Mevcut `api/dpp/tamir.js` (POST, yeni kayıt) dokunulmaz.
`/api/dpp/tamir/:tamir_id` için ayrı Vercel fonksiyonu:

```
PATCH /api/dpp/tamir/:tamir_id
Body: {
  yapilan_islem?:         string,
  degistirilen_parcalar?: string[],
  maliyet?:               number,
  fotograflar?:           string[],   -- Storage URL'leri
  notlar?:                string
}
```

Yetki: `tamir_kayitlari.servis_id` = JWT'deki `servis_id` kontrolü.

---

## Frontend Değişiklikleri

### `src/ServisCaldir.jsx`
Forma opsiyonel seri no alanı:
```jsx
<input
  placeholder="Seri No (opsiyonel)"
  value={seriNo}
  onChange={e => setSeriNo(e.target.value)}
/>
<small>Cihazın arkasında veya faturasında yazar</small>
```
POST body'ye `seri_no` eklenir.

### `src/ServisPanel.jsx`

**İş kartı — tamamlama sonrası:**
```
durum = 'tamamlandi' ve dpp_tamir_id var:
  ✓ DPP Kaydı Oluşturuldu
  [📋 Zenginleştir]

durum = 'tamamlandi' ve dpp_tamir_id yok:
  — Seri no girilmedi
```

**ZenginleştirModal bileşeni (yeni):**
```
┌─────────────────────────────────────┐
│  DPP Kaydını Zenginleştir           │
│  İş #BS-0001                        │
├─────────────────────────────────────┤
│  Yapılan işlem                      │
│  [belirti'den önceden dolu    ]     │
│                                     │
│  Değiştirilen parçalar              │
│  [Kompresör] [+Ekle]               │  ← tag input
│                                     │
│  Maliyet (TL)                       │
│  [                            ]     │
│                                     │
│  Fotoğraf (max 5)                   │
│  [📎 Dosya Seç]                     │
│                                     │
│  Notlar                             │
│  [                            ]     │
│                                     │
│       [İptal]  [DPP'ye Kaydet]      │
└─────────────────────────────────────┘
```

Kaydet → `PATCH /api/dpp/tamir/:dpp_tamir_id`

### `src/DPPEkrani.jsx`

**Yeni cihaz formu — yeni alanlar:**
- Garanti başlangıç tarihi (date, opsiyonel)
- Uzatılmış garanti (checkbox → tarih alanı açılır)
- Uzatılmış garanti bitiş tarihi (conditional)
- Fatura yükle (PDF/JPG/PNG, max 10 MB → `dpp-faturalar/{cihaz_id}/` bucket)

**Pasaport görünümü — eklemeler:**
- Garanti kartı:
  ```
  📅 Alındı: 15 Haz 2021
  🛡️ Garanti: 15 Haz 2024 (✅ 12 gün kaldı / ❌ 45 gün önce doldu)
  ➕ Uzatılmış: 15 Haz 2026 (varsa)
  📄 Fatura Görüntüle (varsa)
  ```
- Tamir kartlarında `benservis_is_id` doluysa: `<BenservisRozet size="sm" />`
- Cihaz başlığı yanında en az bir Benservis tamir varsa: `<BenservisRozet size="lg" />`

### `src/BenservisRozet.jsx` — yeni bileşen

SVG tabanlı mühür/kalkan, marka varlığı olarak tasarlanmış:
- Renkler: amber `#C8632B` (kenarlık/arka plan) + green `#3A7D44` (metin/ikon)
- Krem `#F5EFE2` iç yüzey
- İçerik: küçük ✓ ikonu + "Benservis" + "Doğrulanmış Tamir" + tarih (sm'de gizlenir)
- Props: `size="sm|md|lg"`, `tarih?: string`
- Kullanım yerleri: DPP pasaport (lg), tamir kartı (sm), ileride Faz 4 ilan kartı (md)

---

## Supabase Storage — Yeni Bucket

```
dpp-faturalar/
  {cihaz_id}/{uuid}.{pdf|jpg|png}
```

- Erişim: public read
- Max: 10 MB / dosya
- İzin verilen tipler: `application/pdf`, `image/jpeg`, `image/png`

---

## Dosya Değişiklikleri

| Dosya | İşlem | Ne değişiyor |
|-------|-------|-------------|
| `api/is/[id].js` | Güncelle | tamamla → DPP auto-write bloğu |
| `api/dpp/tamir.js` | Dokunulmaz | Mevcut POST korunur |
| `api/dpp/tamir/[id].js` | Yeni | PATCH zenginleştir endpoint |
| `src/ServisCaldir.jsx` | Güncelle | seri_no opsiyonel alanı |
| `src/ServisPanel.jsx` | Güncelle | DPP durumu + ZenginleştirModal |
| `src/DPPEkrani.jsx` | Güncelle | Garanti/fatura form + pasaport görünümü |
| `src/BenservisRozet.jsx` | Yeni | SVG rozet bileşeni |
| `supabase/schema.sql` | Güncelle | 3 ALTER TABLE eklenir |

---

## Kapsam Dışı (Bu Fazda)

- Ödeme sistemi (sonraki faz)
- Müşteri oturum girişi / "Cihazlarım" listesi
- Garanti hatırlatma bildirimleri (Faz 5)
- Rozet doğrulama API'si (üçüncü taraf için — Faz 4+)
- "Satışa Çıkar" butonu (Faz 4)

---

## Başarı Kriterleri

- [ ] "Servis Çağır" formuna seri no girilebiliyor
- [ ] Tamamlanan iş → DPP'ye otomatik tamir kaydı oluşuyor
- [ ] Seri no yoksa DPP yazılmıyor, iş yine tamamlanıyor
- [ ] Servis "Zenginleştir" ile parça/fotoğraf/maliyet ekleyebiliyor
- [ ] Yeni cihaz formuna garanti + fatura girilebiliyor
- [ ] Pasaport görünümünde garanti kartı ve fatura linki görünüyor
- [ ] Benservis onaylı tamirde rozet görünüyor
- [ ] Mevcut DPP ve Faz 2.5b akışları bozulmuyor

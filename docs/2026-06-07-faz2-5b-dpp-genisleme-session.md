# Faz 2.5b — DPP Genişletme Session Notu
**Tarih:** 2026-06-07  
**Konu:** Servis Paneli → DPP bağlantısı, garanti/fatura/rozet, storage bucket fix, full test

---

## Bu Oturumda Ne Yapıldı

### Genel Hedef
Faz 2 (servis iş akışı) ile Faz 3 (Dijital Ürün Pasaportu) arasındaki köprüyü kurmak.  
Bir servis işi "tamamlandı" olarak işaretlendiğinde, DPP pasaportu **otomatik olarak** oluşsun.

---

## Uygulanan 8 Task (Subagent-Driven Development)

### Task 1 — DB Schema Migration
`supabase/schema.sql` dosyasına eklenenler:

```sql
ALTER TABLE is_talepleri
  ADD COLUMN IF NOT EXISTS seri_no      text,
  ADD COLUMN IF NOT EXISTS dpp_tamir_id uuid REFERENCES tamir_kayitlari(id) ON DELETE SET NULL;

ALTER TABLE cihazlar
  ADD COLUMN IF NOT EXISTS garanti_baslangic_tarihi  date,
  ADD COLUMN IF NOT EXISTS uzatilmis_garanti         boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS uzatilmis_garanti_bitis   date,
  ADD COLUMN IF NOT EXISTS fatura_url                text;

ALTER TABLE tamir_kayitlari
  ADD COLUMN IF NOT EXISTS servis_id text;
```

---

### Task 2 — `api/is/liste.js` + `api/is/[id].js` — Auto DPP Yazma

`tamamla` action tetiklenince:
1. `cihazlar` tablosuna `upsert` (seri_no unique conflict → race condition güvenli)
2. `tamir_kayitlari` insert
3. `is_talepleri.dpp_tamir_id` backfill

Kritik kararlar:
- DPP yazma `try/catch` içinde — hata iş tamamlanmasını engellemez
- `cihazErr` log'lanıyor, `linkErr` de ayrıca log'lanıyor (tamir_id ve is_id ile)
- Atomic upsert: `onConflict: "seri_no"` ile TOCTOU race condition önlendi

```js
if (is.seri_no) {
  try {
    const { data: cihazRow } = await supabase
      .from("cihazlar")
      .upsert(
        { seri_no: is.seri_no, kategori: is.cihaz || null },
        { onConflict: "seri_no", ignoreDuplicates: false }
      )
      .select("id").single();

    if (cihazRow) {
      const { data: tamir } = await supabase
        .from("tamir_kayitlari")
        .insert({
          cihaz_id: cihazRow.id,
          tarih: new Date().toISOString().split("T")[0],
          yapilan_islem: is.belirti || "Benservis tamir kaydı",
          servis_adi: is.servis_ad,
          servis_id: is.servis_id,
          servis_turu: "benservis",
          benservis_is_id: is.id,
          degistirilen_parcalar: [],
          maliyet: null,
        })
        .select("id").single();

      if (tamir) {
        dpp_tamir_id = tamir.id;
        await supabase.from("is_talepleri")
          .update({ dpp_tamir_id: tamir.id }).eq("id", id);
      }
    }
  } catch (dppErr) {
    console.error("DPP yazma hatası:", dppErr.message);
  }
}
return res.status(200).json({ durum: "tamamlandi", dpp_tamir_id });
```

---

### Task 3 — `api/dpp/tamir/[id].js` — PATCH Zenginleştir Endpoint

**Yeni endpoint:** `PATCH /api/dpp/tamir/:id`

- JWT doğrulama → `user_metadata.servis_id`
- Ownership check: `tamir_kayitlari.servis_id === jwt.servis_id`
- Kabul edilen alanlar: `yapilan_islem`, `degistirilen_parcalar[]`, `maliyet`, `fotograflar[]`, `notlar`
- Validation:
  - `degistirilen_parcalar` ve `fotograflar` → string dizisi zorunlu
  - `maliyet` → NaN veya negatif reddedilir (400)
  - Boş body → 400

---

### Task 4 — `src/BenservisRozet.jsx` — SVG Marka Rozeti

Pure SVG, harici bağımlılık yok.  
**Props:** `size: "sm" | "md" | "lg"`, `tarih: string | null`

Renk paleti:
```js
const AMBER = "#C8632B";
const GREEN = "#3A7D44";
const CREAM = "#F5EFE2";
const INK   = "#22302A";
```

Boyutlar:
```js
const BOYUTLAR = {
  sm: { w: 72,  h: 72,  r: 30, ... },
  md: { w: 96,  h: 96,  r: 40, ... },
  lg: { w: 128, h: 128, r: 53, ... },
};
```

Katmanlar: amber dış daire → dashed iç çizgi → cream iç alan → ✓ yeşil checkmark → "BENSERVİS" yazısı → "DOĞRULANMIŞ" (md/lg) → tarih (md/lg)

Guard: `new Date(tarih)` geçersiz ise `!isNaN(tarihDate)` kontrolü ile "Invalid Date" metni engellendi.

---

### Task 5 — `src/ServisCaldir.jsx` — Seri No Alanı

Müşteri servis çağırırken opsiyonel seri no girebiliyor:

```jsx
const [seriNo, setSeriNo] = useState("");
// POST body'e eklendi:
seri_no: seriNo.trim() || null,
// Form alanı:
// label: "Seri No (opsiyonel)"
```

---

### Task 6 — `src/ServisPanel.jsx` — ZenginleştirModal

Servis panelinde her tamamlanan iş için DPP durumu göstergesi:
- `dpp_tamir_id` varsa → "✓ DPP Kaydı Oluşturuldu" + "📋 Zenginleştir" butonu
- `seri_no` yoksa → "seri no girilmedi" notu

**ZenginleştirModal** alanları:
- Yapılan işlem (text)
- Değiştirilen parçalar (dinamik liste)
- Maliyet (number)
- Fotoğraflar (upload, MIME whitelist: jpg/png/webp, max 5MB)
- Notlar (textarea)

Kritik fix: `Promise.all` → `Promise.allSettled` — bir fotoğraf upload başarısız olsa diğerleri kaybolmuyor.

---

### Task 7 — `src/DPPEkrani.jsx` + `api/dpp/cihaz.js` — Garanti/Fatura/Rozet

**DPPEkrani yeni alanları (YeniCihazForm):**
- `garanti_baslangic_tarihi` (date)
- `uzatilmis_garanti` (boolean checkbox)
- `uzatilmis_garanti_bitis` (date — checkbox işaretliyken açılır)
- `fatura_url` (fatura upload widget)

**uploadFatura helper:**
- Bucket: `"DPP Faturalar"`
- Max: 10 MB
- Format: jpg/jpeg/png/pdf (hem extension hem MIME kontrol)
- Dosya adı: `crypto.randomUUID()` (collision-proof)

**Güvenlik fixleri (`api/dpp/cihaz.js`):**
- `fatura_url` → regex: `/^https:\/\/.+/` (XSS önlemi)
- MIME type check hem frontend hem kaynak kodda

**PasaportGorunum:**
- `garantiDurumu()` → `bugun.setHours(0,0,0,0)` + `T00:00:00` suffix (timezone off-by-one önlendi)
- `hasBenservis = tamirler.some(t => t.servis_turu === "benservis")`
- BenservisRozet `lg` → pasaport başlığında
- BenservisRozet `sm` → her benservis tamir kartında

---

### Task 8 — Deploy + Storage Bucket Fix

**Git push:** `e991bff` → main → Vercel auto-deploy ✅

**Supabase Storage buckets oluşturuldu:**
- "DPP Foto" (5 MB limit, jpg/png/webp)
- "DPP Faturalar" (10 MB limit, jpg/jpeg/png/pdf)

**Critical fix (son commit `ddc003b`):**  
Bucket adı mismatch düzeltildi:

| Önceki (hatalı) | Sonraki (doğru) |
|-----------------|-----------------|
| `"dpp-fotograflar"` | `"DPP Foto"` |
| `"dpp-faturalar"` | `"DPP Faturalar"` |

Etkilenen dosyalar: `src/DPPEkrani.jsx` (4 ref), `src/ServisPanel.jsx` (2 ref)

---

## Quality Review — Düzeltilen Sorunlar

| # | Sorun | Fix |
|---|-------|-----|
| CR-01 | TOCTOU race: cihaz check-then-insert | `.upsert({ onConflict: "seri_no" })` |
| CR-02 | `dpp_tamir_id` link hatası sessiz yutuluyordu | `linkErr` log'a tamir_id + is_id ile yazıldı |
| CR-03 | `maliyet` NaN/negatif kabul ediliyordu | `Number()` + `isNaN` + `< 0` check eklendi |
| CR-04 | `fotograflar`/`degistirilen_parcalar` unvalidated | String dizisi kontrolü eklendi |
| CR-05 | `new Date("invalid")` → "Invalid Date" yazısı | `!isNaN(tarihDate)` guard |
| CR-06 | `Promise.all` → bir fail → orphan uploads | `Promise.allSettled` |
| CR-07 | `fatura_url` XSS açığı | `/^https:\/\/.+/` regex + sunucu validasyonu |
| CR-08 | Garanti hesabı timezone off-by-one | `setHours(0,0,0,0)` + `T00:00:00` suffix |
| CR-09 | Filename collision riski | `crypto.randomUUID()` |
| CR-10 | Bucket adı mismatch | `"dpp-faturalar"` → `"DPP Faturalar"` vb. |

---

## Full Test Sonuçları

### Local UI (Vite dev server)
| Test | Sonuç |
|------|-------|
| Ana ekran yükleme | ✅ |
| Cihaz seçimi → hızlı belirti butonları | ✅ |
| DPP Ara → overlay açılır | ✅ |
| API hatası → "Bir sorun oluştu" mesajı | ✅ |
| 404 flow → Yeni Cihaz formu | ✅ |
| Garanti alanları render | ✅ |
| Uzatılmış garanti checkbox → dinamik alan | ✅ |
| Fatura Yükle butonu | ✅ |
| Pasaport Oluştur butonu | ✅ |

### Production API (curl)
| Endpoint | Beklenen | Sonuç |
|----------|----------|-------|
| `GET /api/dpp/cihaz?seri_no=TEST-YOKTUR-001` | 404 | ✅ 404 |
| `PATCH /api/dpp/tamir/:id` (auth yok) | 401 | ✅ 401 |
| `GET /api/is/liste` (geçersiz token) | 401 | ✅ 401 |
| `GET /api/dpp/tamir/:id` (wrong method) | 405 | ✅ 405 |

---

## Commit Geçmişi

```
ddc003b  fix: storage bucket isimleri Supabase'dekiyle eşleştir
e991bff  fix: fatura_url validation, MIME check, uuid filename, timezone garanti
2203d05  feat: DPPEkrani — garanti/fatura/BenservisRozet
42f39b8  fix: dosyaSec — allSettled + MIME whitelist
ee63322  feat: ServisPanel — ZenginleştirModal + DPP durumu
2e7ac74  feat: ServisCaldir — seri_no opsiyonel alanı
e2f2b7a  fix: guard against invalid tarih string in BenservisRozet
d0eff20  feat: BenservisRozet SVG bileşeni (sm/md/lg)
efed9a6  fix: input validation for maliyet, fotograflar, degistirilen_parcalar
2ddb571  feat: PATCH /api/dpp/tamir/:id — zenginleştir endpoint
895783d  fix: TOCTOU race + linkErr log
d08c9c3  feat: api/is — auto DPP write on tamamlandi + seri_no/dpp_tamir_id
c91178b  feat: schema — garanti/fatura/servis_id kolonları
630ef19  feat: schema — is_talepleri.seri_no + dpp_tamir_id
```

---

## Proje Faz Durumu

| Faz | Açıklama | Durum |
|-----|----------|-------|
| Faz 1 | AI Teşhis + Tahmini Maliyet | ✅ Canlı |
| Faz 2 | Servis Eşleştirme (iş havuzu, SMS, servis paneli) | ✅ Canlı |
| Faz 2.5b | DPP Otomatik Yazma + garanti/fatura/rozet | ✅ Canlı |
| Faz 3 | Dijital Ürün Pasaportu — kullanıcı arayüzü, QR, paylaşım | 📋 Planlanıyor |
| Faz 4 | DPP Destekli İkinci El Pazaryeri | 🛒 Vizyon |
| Faz 5 | Perakende Entegrasyonu + Garanti Takibi | 🔮 Vizyon |

---

## Güvenlik Kuralları (Değişmez)

- `ANTHROPIC_API_KEY`, `SUPABASE_SERVICE_KEY`, `TWILIO_*` → yalnız Vercel ortam değişkeni
- Hiçbir key koda, git'e veya tarayıcıya girmez
- `musteri_tel` servis panelinde hiçbir noktada gösterilmez
- Storage: fatura ve fotoğraf yükleme yalnız authenticated kullanıcıdan

---

*Repo: `tolgaildaser-cloud/benservis` · Deploy: `project-83ils.vercel.app` · Local: `~/Downloads/arizam-ne-app`*

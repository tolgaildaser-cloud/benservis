# Tarife Veri Motoru — Tasarım (v1)

**Tarih:** 2026-06-17
**Durum:** Onaylandı — ama HİÇ UYGULANMADI. **16 Tem 2026 CANLANDIRILDI + genişletildi** → bkz. [`2026-07-16-tarife-web-besleyici-guvenilirlik-design.md`](2026-07-16-tarife-web-besleyici-guvenilirlik-design.md) (web scraping ilk besleyici oldu; wiring baked-snapshot'a döndü; §9 migration güncel SEED'den yeniden üretilir). Bu doküman **v1 temeli** olarak geçerlidir; okurken 2026-07-16 delta'larıyla birlikte oku.
**Branch:** `feat/tarife-veri-motoru` (eski) → yeni çalışma `feat/tarife-veri-motoru-web` (güncel main'den)

## 1. Amaç & Bağlam

Benservis'in asıl rekabet avantajı (**moat**) AI değil, **gerçek/yerel/güncel arıza-maliyet tarife veritabanı** (CLAUDE.md karar #6). Şu an maliyet tahmini, `src/App.jsx` içinde **gömülü `SEED`** referans tarifesine çıpalı: AI tek "beklenen" tutar döndürür, `normalizeMaliyet()` ±%10 bant + 1000 TL servis gidiş bedeli ekler. DB'de tarife tablosu yok; veri ya gömülü SEED'de ya da lokal Excel'de.

Bu özellik, **sahadan toplanan gerçek tarife verisini** girip onaylayacağımız ve AI'ın referansı olarak **gömülü SEED'in yerine** koyacağımız veri motorunu kurar. 20-30 servis ziyaret edilip tamir/arıza/maliyet bilgisi toplanacak.

**Başarı ölçütü:** Saha verisi girilip onaylandığında, o cihaz için AI maliyet tahmini gömülü SEED yerine **onaylı gerçek tarifeyi** referans alır; veri olmayan cihazlarda eski davranış (SEED) korunur (regresyon yok).

## 2. Kapsam

**v1 (bu spec):**
- Supabase'de 2 tablo: ham veri noktaları + onaylı kanonik tarife.
- App içi admin arayüzü: saha web formu + CSV/Excel import.
- Hibrit harmanlama: sistem ham noktalardan tarife **önerir**, insan **onaylar**.
- Onaylı tarifeyi AI tahminine bağlama (sunucu-tarafı, SEED fallback'li).
- Gömülü SEED'i ilk onaylı tarife olarak içe alma (baseline).

**v2 (kapsam DIŞI, şimdi yapılmayacak):**
- Web scraper → `tarife_veri (kaynak=web)` otomatik besleme (`arizam_scraper.py` selektörleri).
- Tamamlanan gerçek işlerden otomatik `tarife_veri (kaynak=gercek_is)`.
- Kaynak ağırlığı ince ayarı, gelişmiş aykırı-değer modeli.
- Tüm mevcut tablolarda RLS (ayrı güvenlik işi) ve KVKK (sonraki faz).

## 3. Veri Modeli (Supabase Postgres)

İki katman: ham **veri noktaları** → onaylı **kanonik tarife**.

```sql
-- Ham veri noktaları: her saha ziyareti / import satırı = 1 kayıt
create table tarife_veri (
  id            bigint generated always as identity primary key,
  cihaz         text not null,                       -- CIHAZLAR ile aynı küme
  marka         text not null default 'Genel',       -- 'Genel' = marka-bağımsız
  ariza         text not null,                        -- "Kompresör değişimi" vb.
  belirtiler    text,
  hata_kodu     text,
  parca_tl      numeric,
  iscilik_tl    numeric,
  toplam_tl     numeric,                              -- parça/işçilik ayrılmadıysa
  bolge         text,                                 -- il/bölge (örn "İstanbul")
  kaynak        text not null default 'saha'
                  check (kaynak in ('saha','web','gercek_is','seed')),
  kaynak_servis text,                                 -- hangi servis (saha)
  tarih         date not null default current_date,
  notlar        text,
  created_at    timestamptz not null default now()
);
create index tarife_veri_key_idx on tarife_veri (cihaz, marka, ariza);
alter table tarife_veri enable row level security;     -- anon policy YOK → yalnız service-role

-- Onaylı kanonik tarife: (cihaz+marka+ariza) başına tek satır. AI YALNIZ bunu okur.
create table tarife (
  id                  bigint generated always as identity primary key,
  cihaz               text not null,
  marka               text not null default 'Genel',
  ariza               text not null,
  onayli_parca_min    numeric,
  onayli_parca_max    numeric,
  onayli_iscilik      numeric,
  onayli_beklenen     numeric,                         -- opsiyonel toplam çıpa
  durum               text not null default 'taslak'
                        check (durum in ('taslak','onayli')),
  veri_noktasi_sayisi int not null default 0,          -- güven sinyali
  onaylayan           text,
  guncelleme          timestamptz not null default now(),
  created_at          timestamptz not null default now(),
  unique (cihaz, marka, ariza)
);
alter table tarife enable row level security;          -- anon policy YOK → yalnız service-role
```

**Not:** `marka` her iki tabloda `not null default 'Genel'` — null yerine sentinel kullanmak `unique(cihaz,marka,ariza)` kısıtını temiz tutar. `notlar` (SQL `not` rezerve kelime değil) bilinçli isim. RLS açık + anon policy yok: bu moat verisi yalnız sunucudan (service-role) erişilir; ayrıca [[project-benservis-security]] bulgusuyla uyumlu.

## 4. Harmanlama / Öneri Mantığı

`GET /api/tarife/gruplar` her (cihaz, marka, ariza) grubu için ham noktalardan tarife **önerir**:

- Her nokta için `toplam = toplam_tl ?? (parca_tl + iscilik_tl)`.
- **Önerilen değerler** (kaynak ağırlığı: gercek_is=3, saha=2, web=1; v1'de pratikte çoğu saha):
  - `onayli_parca_min` = parça_tl P25 (nokta <3 ise min)
  - `onayli_parca_max` = parça_tl P75 (nokta <3 ise max)
  - `onayli_iscilik`   = işçilik_tl medyanı
  - `onayli_beklenen`  = toplam medyanı
- **Aykırı koruması:** percentile'ler doğası gereği dayanıklı; ek olarak medyanın 0.4×–2.5× dışındaki noktalar öneriye katılmadan elenir.
- `seed` kaynaklı kayıtlar yalnız hiç gerçek nokta yoksa baseline olarak kullanılır; gerçek nokta gelince onlar baz alınır.

İnsan öneriyi görür, gerekirse düzeltir, **Onayla** der → `tarife` upsert (`durum='onayli'`). Bu adım hibrit "öneri + onay" sözleşmesidir. Aggregation saf fonksiyon olarak izole edilir (`api/_tarife.js → onerTarife(points)`), bağımsız test edilir.

## 5. Admin Arayüzü

Yeni rota `/tarife` (yeni bileşen `src/TarifeAdmin.jsx`), mevcut admin auth ardında (bkz. §8), mobil-dostu (saha için büyük dokunma alanları), marka paleti + mevcut admin stili.

**Sekme 1 — Veri Gir:**
- Hızlı form: cihaz (CIHAZLAR select), marka (input, boş=Genel), arıza (input + mevcut arıza etiketlerinden autocomplete), parça_tl, işçilik_tl (veya toplam_tl), bölge, kaynak_servis, notlar → `POST /api/tarife/veri`.
- Import: CSV dosya seç → satırları ayrıştır → önizleme tablosu → onayla → `POST /api/tarife/veri` (toplu dizi). (XLSX opsiyonel; v1 CSV ile sade tutulur.)

**Sekme 2 — Onayla:**
- (cihaz, marka, arıza) grupları listesi: nokta sayısı, mevcut önerilen aralık, durum rozeti (taslak/onaylı).
- Gruba tıkla → ham noktalar tablosu + düzenlenebilir öneri alanları (parça min/max, işçilik, beklenen) → **Onayla** → `POST /api/tarife/onayla`.

## 6. API (Vercel serverless, service-role, `Bearer ADMIN_TOKEN`)

| Uç | Metot | İşlev |
|---|---|---|
| `/api/tarife/veri` | POST | Tekil obje **veya** dizi (toplu import) ekler. Doğrulama: `cihaz`, `ariza` zorunlu; parça/işçilik/toplam'dan en az biri. |
| `/api/tarife/gruplar` | GET | Grupları öneri + durum + nokta sayısıyla döner (§4). |
| `/api/tarife/onayla` | POST | `{cihaz,marka,ariza,onayli_*}` → `tarife` upsert, `durum='onayli'`. |

Tümü `Authorization: Bearer $ADMIN_TOKEN` ile korunur (mevcut admin uçlarındaki desen). **Tarife referansı HTTP ucu DEĞİL** — `api/_tarife.js` helper'ı (`getReferans(cihaz, marka)`) diagnose tarafından sunucu içinde çağrılır; böylece tarife verisi ağa hiç çıkmaz (moat koruması).

## 7. AI'a Bağlama (`/api/diagnose` refactor)

**Şu an:** `App.jsx` tüm prompt'u kurar (`refMetni(cihaz)` gömülü SEED'den) → `POST /api/diagnose {prompt}` → Claude.

**Yeni:**
1. `App.jsx` yapılandırılmış alan gönderir: `{cihaz, marka, hataKodu, yas, belirti, garantiAltinda}` (artık prompt kurmaz).
2. `api/diagnose.js` sunucuda prompt'u kurar: `_tarife.js.getReferans(cihaz, marka)` ile **onaylı tarife** çeker; varsa referansı ondan kurar, **yoksa sunucu-tarafı SEED kopyasına düşer** (`api/_seed.js`). Sonra Claude'a gider.
3. Dönen JSON şeması **aynı kalır** (`olasiArizalar`, `tahminiMaliyet{beklenen}` vb.).
4. `normalizeMaliyet()` + ±%10 + 1000 TL gidiş bedeli **App.jsx'te aynen kalır** (dönen `tahminiMaliyet` üzerinde çalışır, taşınmaz).

**Taşınan kod:** prompt şablonu + `SEED` + `refMetni` sunucuya (`api/_seed.js`, `api/diagnose.js`). `App.jsx` sadeleşir.
**Kritik kısıt:** onaylı tarife yokken davranış mevcutla **birebir aynı** olmalı (SEED fallback) → canlı tahminler bozulmaz.

## 8. Auth & Güvenlik

- Admin yazma/listeleme uçları `Bearer ADMIN_TOKEN` (mevcut desen). `TarifeAdmin.jsx` token'ı bir kez girip `localStorage`'da tutar, header'da yollar (mevcut admin sayfası deseniyle aynı — uygulama sırasında `ServisAdmin.jsx`/`ServisPanel.jsx` auth yöntemi referans alınacak).
- `tarife` ve `tarife_veri` tablolarında **RLS açık, anon policy yok** → yalnız service-role (sunucu) erişir.
- Tarife verisi istemciye sızmaz (referans sunucuda kurulur).

## 9. Başlangıç Verisi (migration)

Tek seferlik: mevcut gömülü `SEED` girdileri `tarife`'ye `durum='onayli'`, `marka='Genel'` olarak yazılır (her cihaz için `[ariza, parca_min, parca_max, iscilik]`). Böylece sistem boş başlamaz; AI gün-1'den baseline tarifeyi kullanır, saha verisi geldikçe yeniden onayla ile üzerine yazılır. SQL seed script veya tek seferlik admin import olarak uygulanır.

## 10. Test Yaklaşımı

- **Birim:** `onerTarife(points)` — örnek noktalar → beklenen aralık; aykırı eleme; <3 nokta fallback (min–max).
- **API:** doğrulama (eksik alan → 400), auth (token yok → 401), ekle→grupla→onayla turu.
- **Entegrasyon:** diagnose — onaylı tarife VARKEN DB'yi kullanır; YOKKEN SEED fallback; ikisi de geçerli `tahminiMaliyet` döner.
- **Manuel:** nokta gir → öneriyi gör → onayla → o cihaz için diagnose onaylı tarifeyi yansıtır.

## 11. Uygulama Dilimleri (plan için)

1. Şema (2 tablo + RLS) + SEED→onaylı `tarife` migration.
2. `api/_tarife.js` (aggregation + getReferans) + uçlar: `POST veri`, `GET gruplar`, `POST onayla`.
3. `TarifeAdmin.jsx`: Veri Gir formu + Onayla ekranı + auth gate + `/tarife` rota.
4. CSV import.
5. Diagnose refactor (sunucu-tarafı prompt + DB referans + SEED fallback) + App.jsx yapılandırılmış payload.

Her dilim bağımsız test edilip commit'lenir; 1-4 canlıyı etkilemez, 5 davranış-korumalı (SEED fallback) olduğu için güvenli.

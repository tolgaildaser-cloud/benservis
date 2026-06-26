# Teşhis Loglama (Faz 0) — Tasarım (Spec)

- **Tarih:** 2026-06-26
- **Durum:** Tasarım onaylandı (Faz 0 kapsamı) → spec inceleme bekliyor
- **Kapsam (Faz 0):** Her teşhisi **anonim** logla → `teshis_log` matrisi birikmeye başlasın.
- **Kapsam DIŞI (sonraki fazlar):** Rapor görüntüleme (Faz 1: `/admin` + rapor sayfası), onay/moderasyon modülleri, DPP/ürün/görsel yönetimi. Bunlar ayrı spec→plan döngüsü alır.

---

## 1. Bağlam

Bugün `api/diagnose.js` **saf proxy** — teşhisler hiçbir yere kaydedilmiyor. Kullanıcı 31 Temmuz'da "hangi marka / en çok hangi arıza / hangi il-ilçe / ne maliyet" raporu çekmek istiyor ama **veri birikmiyor.** Geçmiş geri doldurulamaz → loglamayı **bir an önce** açmak gerek (26 Haz → 31 Tem ≈ 5 hafta veri penceresi).

Bu, daha büyük bir **birleşik `/admin` konsolu** vizyonunun ilk parçası (kullanıcı kapsamı Faz 0 ile sınırladı — "en hızlı"). Tam konsol decompose edildi: Raporlar (bu), servis/ödeme panelleri (zaten var: `/servis-admin`, `/ikinci-el/admin`), müşteri/talep yönetimi, ve dormant modüller (DPP/ürün/görsel). Faz 0 yalnız **veri toplamayı** açar.

## 2. Hedefler / Hedef-olmayanlar

**Hedefler:** (1) her geçerli teşhisi anonim kaydet; (2) servis arayanlarda il/ilçe iliştir; (3) yeni KVKK yükü yaratma (anonim); (4) `api/diagnose.js`'e ve teşhis akışına sürtünme EKLEME; (5) küçük + hızlı çıkar.
**Hedef-olmayanlar:** rapor UI/endpoint, admin konsolu, ham belirti saklama, kişisel veri, gerçek-zaman dashboard.

## 3. Karar özeti (brainstorming)

- **Anonim** kayıt — PII YOK (ad/tel/IP/tam adres yok; il/ilçe kaba). → KVKK yükü yok (sesli-girdideki mantık, [[project_benservis_aibot]]).
- **Konum kaynağı:** servis arayanların verdiği GPS/elle il+ilçe (kesin; alt küme = en ciddi talep). Teşhis formuna konum EKLENMEZ (pivot sadeliği korunur).
- **Loglama client-side** → `api/diagnose.js` saf proxy KALIR (çekirdek gelir yoluna dokunma). Skippable kaybı aggregate trend için önemsiz.
- Yalnız **geçerli** teşhis loglanır (`adim === "sonuc"`); geçersiz/anlamsız girdi loglanmaz.

## 4. Mimari

### 4a. Tablo — `teshis_log` (Supabase, RLS KİLİTLİ)
```
id           uuid  PK default gen_random_uuid()
created_at   timestamptz default now()
cihaz        text
marka        text          -- "Diğer" dahil; boş olabilir
ariza        text          -- en olası arıza adı (olasiArizalar[0].ad)
maliyet_min  int           -- tahminiMaliyet.min (yuvarlanmış)
maliyet_max  int           -- tahminiMaliyet.max
karar        text          -- kararOnerisi: tamir|yenisi|gerek_yok|belirsiz
aciliyet     text          -- yüksek|orta|düşük|belirsiz
yas          text  null    -- "0-2 yıl" vb. (opsiyonel)
garanti      bool          -- garanti altında mı
il           text  null    -- sonradan dolar (servis arama)
ilce         text  null    -- sonradan dolar
```
- **PII YOK.** RLS açık + anon policy YOK (anon okuyamaz/yazamaz). Sunucu **service-role** (`api/_supabase.js`) ile yazar → RLS bypass, tablo tam kilitli.
- Migration: Supabase SQL Editor'da `create table` + `alter table ... enable row level security;` (policy eklenmez = anon erişimi kapalı).

### 4b. Endpoint — `api/teshis/log.js` (tek dosya, iki mod)
- **Insert modu** (body'de `id` YOK): `{cihaz, marka, ariza, maliyet_min, maliyet_max, karar, aciliyet, yas, garanti}` → satır ekle → `{ id }` döndür.
- **Konum modu** (body'de `id` VAR): `{id, il, ilce}` → `update teshis_log set il, ilce where id = :id and il is null` (bir kez doldurulur, üzerine yazılmaz).
- **Koruma:** mevcut `withRateLimit` (Upstash) ile sarılı — **40/saat per-IP** (teşhis 10/saat × ~2 çağrı + marj; fail-open). Origin kontrolü (`originOk`, diagnose'daki gibi). Alan whitelist + tip/uzunluk doğrulama (il/ilçe ≤ 64 char, maliyet sayı, metinler ≤ 120 char). Hata → sessiz `{ok:false}` (asla teşhis akışını bozma).
- Sunucu Supabase client'ı zaten var (`api/_supabase.js`, service-role).

### 4c. Client bağlama
- **`App.jsx`** — teşhis başarıyla parse edilip `adim="sonuc"` olunca (sonuç state'i kurulduktan sonra): `fetch("/api/teshis/log", {POST, body: anonim alanlar})` → dönen `id` → `setTeshisLogId(id)`. Best-effort (`.catch(()=>{})`, akışı bloklamaz). Alanlar: `cihaz, marka, ariza=sonuc.olasiArizalar?.[0]?.ad, maliyet_min/max=sonuc.tahminiMaliyet, karar=sonuc.kararOnerisi, aciliyet=sonuc.aciliyet, yas, garanti=garantiAltinda`.
- **`ServisEkrani.jsx`** — kullanıcının il/ilçesi belli olunca (GPS reverse-geocode ya da elle seçim) ve `teshisLogId` varsa: `fetch("/api/teshis/log", {POST, body:{id: teshisLogId, il, ilce}})`. Best-effort. (`teshisLogId` App.jsx'ten prop olarak iner.)
- Mevcut `/api/diagnose` çağrısı ve `api/diagnose.js` **değişmez.**

### 4d. Veri akışı
`teşhis → /api/diagnose (DEĞİŞMEZ) → sonuç parse → /api/teshis/log (insert, anonim) → id` ··· `kullanıcı Servis Bul → konum (il/ilçe) → /api/teshis/log (id ile update)`

## 5. Hata yönetimi
- Log/konum çağrısı her durumda **best-effort**: hata olsa bile teşhis/servis akışı etkilenmez (sessiz yut, `console` bile şart değil).
- Rate-limit 429 → log atlanır (aggregate kaybı önemsiz).
- `id` yoksa konum çağrısı yapılmaz.

## 6. KVKK
Tamamen anonim (ad/tel/IP/tam adres yok; il/ilçe il-ilçe seviyesinde kaba). Aggregate pazar verisi = kişisel veri değil → ek KVKK yükü yok. Ham belirti SAKLANMAZ (nadiren PII içerebilir; rapor için yapısal `ariza` yeterli). [[project_benservis_security]] KVKK kalemini etkilemez.

## 7. Kabul kriterleri
- [ ] `teshis_log` tablosu Supabase'de, RLS açık, anon erişimi kapalı (anon select 0 / service-role yazar).
- [ ] Geçerli bir teşhis sonrası `teshis_log`'a 1 anonim satır düşer (cihaz/marka/ariza/maliyet/karar/aciliyet dolu, PII yok).
- [ ] Aynı teşhiste "Servis Bul" + konum verilince o satırın `il`/`ilce`'si dolar (ikinci kez değişmez).
- [ ] Geçersiz teşhis (`adim="gecersiz"`) loglanmaz.
- [ ] `/api/teshis/log` rate-limit aşımında 429; normal kullanım ok.
- [ ] `api/diagnose.js` ve teşhis akışı değişmemiş (regresyon yok); log/konum hatası akışı bozmaz.
- [ ] Hiçbir PII saklanmıyor (kod incelemesi + tablo şeması).

## 8. Test yaklaşımı
- **Tablo/RLS:** anon key ile select → 0/engel; service-role ile insert/select → çalışır (script, `.env.local`).
- **Endpoint:** curl ile insert (→ id döner) + konum update (→ il/ilçe dolar) + oversized/eksik alan (→ reddet) + RLS doğrulaması.
- **Client:** preview'da gerçek teşhis → `teshis_log`'da satır (Supabase'den doğrula); Servis Bul + konum → il/ilçe dolar; geçersiz girdi → satır yok.
- **Regresyon:** teşhis + servis akışı log kapalıyken/hatalıyken de çalışır.

## 9. Sonraki faz (not)
Faz 1 = `/admin` çatı + auth + **rapor sayfası** (`/api/admin/rapor?from&to` → en çok marka/arıza/il-ilçe/maliyet/karar; ADMIN_TOKEN). 31 Temmuz'dan ÖNCE yapılmalı (yoksa o tarihte Supabase SQL ile çekilir). Veri Faz 0 ile zaten birikiyor olacak.

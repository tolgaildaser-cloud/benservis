# Güvenlik Sertleştirme — Tasarım (Spec)

- **Tarih:** 2026-06-24
- **Durum:** Onaylandı (tasarım) → spec inceleme bekliyor
- **Kapsam:** RLS + "DPP Faturalar" bucket gizliliği + public uçlara rate-limit
- **Kapsam dışı (ayrı session):** KVKK (consent + gizlilik politikası + saklama süresi), `/api/diagnose` prompt'unun tamamen sunucuya taşınması, "DPP Foto" bucket kilidi, GET uçlarına sıkı limit

---

## 1. Bağlam

Benservis artık PII topluyor (müşteri ad/tel/adres/GPS, alıcı IBAN, faturalar, servis hesapları). 17 Haz denetiminde 3 kritik açık bulundu, hiçbiri kapatılmadı. Bu spec o üçünü kapatır. Satış/exit için temiz paketleme (diligence) önkoşulu.

**Mimari (kodda doğrulandı, 24 Haz):**
- Tüm tablo erişimi `/api/*` serverless fonksiyonları üzerinden, **service-role** anahtarıyla (`api/_supabase.js`). 32 api dosyası `_supabase`'i import ediyor; tabloya anon ile giden tek uç yok.
- Frontend anon key (`src/lib/supabase.js`) yalnız `supabase.auth.*` (panel login) ve `supabase.storage.*` (dosya upload) için. **Frontend hiçbir tabloya `.from()` ile gitmiyor.**
- service_role rolü RLS'i bypass eder → RLS açıp anon'a policy vermemek app'i kırmaz.
- Canlı şema `schema.sql`'den geniş: `api/siparis.js` `siparisler` tablosunu kullanıyor ama `schema.sql`'de yok. → RLS tüm tabloları otomatik kapsamalı.

---

## 2. Hedefler / Hedef-olmayanlar

**Hedefler**
1. Anon key ile doğrudan tablo PII'sine erişimi imkânsız kıl (RLS default-deny).
2. Fatura dosyalarına (finansal PII) public erişimi kapat.
3. Public uçlarda otomatik kötüye kullanımı (maliyet bombası, SMS/DB spam, bedava Claude proxy) sınırla.

**Hedef-olmayanlar (bu session)**
- KVKK uyumu, gizlilik politikası metni.
- `/api/diagnose` prompt'unu istemciden sunucuya taşımak (fiyat motoruna dokunur, ayrı sefer).
- Tüm GET uçlarına rate-limit.

---

## 3. Görev A — RLS (default-deny, tüm canlı tablolar)

### Yaklaşım
`public` şemasındaki tüm base tablolara RLS aç, **policy yazma** (anon/authenticated için deny-all). service_role bypass ettiği için `/api/*` etkilenmez.

### Uygulama (Supabase MCP → execute_sql, idempotent)
```sql
DO $$
DECLARE r record;
BEGIN
  FOR r IN
    SELECT tablename FROM pg_tables WHERE schemaname = 'public'
  LOOP
    EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY;', r.tablename);
  END LOOP;
END $$;
```
- DO-loop elle tablo listesi gerektirmez; `siparisler` dâhil hepsini kapsar.
- `FORCE ROW LEVEL SECURITY` kullanılmaz (gereksiz; service_role BYPASSRLS niteliği zaten bypass eder; ENABLE + policy-yokluğu deny-all sağlar).
- Hiçbir `CREATE POLICY` çalıştırılmaz = anon/authenticated için default-deny.

### Doğrulama
1. **DB:** `SELECT relname, relrowsecurity FROM pg_class WHERE relnamespace='public'::regnamespace AND relkind='r';` → tümü `relrowsecurity = true`.
2. **Canlı anon probe (uygulamadan ÖNCE ve SONRA):** anon key ile `GET {SUPABASE_URL}/rest/v1/is_talepleri?select=*` → ÖNCE PII satırları döner, SONRA boş `[]` / permission denied.
3. **App smoke (regresyon yok):** (a) `/api/diagnose` teşhis çalışıyor; (b) `/api/servis/liste` servis listesi geliyor; (c) panel login (`supabase.auth.signInWithPassword`) çalışıyor; (d) takip `/api/is/takip` çalışıyor.

### Rollback
Sorun çıkarsa tablo bazında `ALTER TABLE public.<t> DISABLE ROW LEVEL SECURITY;`. (Beklenmiyor — service-role bypass garanti.)

### Risk
Düşük. Tek kırılma senaryosu frontend'in anon ile tabloya gitmesiydi → kodda yok olduğu doğrulandı.

---

## 4. Görev B — "DPP Faturalar" bucket → private + signed URL

### Sorun
`src/DPPEkrani.jsx` faturayı `supabase.storage.from("DPP Faturalar").getPublicUrl(...)` ile sunuyor; bucket public → URL'i bilen herkes faturayı (finansal PII) indirir. ("DPP Foto" public **kalır** — DPP/ilan public sayfalarında bilerek gösteriliyor.)

### Uygulama
1. **Bucket private (MCP → execute_sql):**
   ```sql
   UPDATE storage.buckets SET public = false WHERE name = 'DPP Faturalar';
   ```
2. **Storage erişim policy'si:** `storage.objects` üzerinde "DPP Faturalar" için anon SELECT verme; upload (insert) gerekiyorsa kontrollü policy. (DPP dormant; mevcut canlı upload yolu yok — yine de revive'a hazır policy.)
3. **Kod:** `getPublicUrl` → `createSignedUrl(path, 3600)` (süreli, 1 saat). Etkilenen: `src/DPPEkrani.jsx:44` (fatura okuma). `async` imza gerektirir → çağıran fonksiyon güncellenir. DPP dormant olduğu için aktif akışı etkilemez; revive olunca doğru çalışsın diye düzeltilir.

### Doğrulama
1. `SELECT name, public FROM storage.buckets WHERE name='DPP Faturalar';` → `public=false`.
2. Bilinen bir fatura public URL'i (varsa) tarayıcıdan → **403/400**.
3. (Dormant) signed-URL kod yolu derleniyor (`vite build` temiz).

### Rollback
`UPDATE storage.buckets SET public = true ...` (istenmez).

---

## 5. Görev C — Public uçlara rate-limit + origin kontrol (Upstash Redis)

### Hedef uçlar ve limitler
| Uç | Sınıf | Limit (IP/pencere) | Neden |
|----|-------|--------------------|-------|
| `api/diagnose` | **sıkı** | 10 / dk **ve** 60 / saat | Anthropic maliyet bombası + bedava-proxy |
| `api/is/yeni`, `api/talep/yeni` | orta | 5 / dk, 20 / saat | SMS/DB spam |
| `api/servis/basvuru`, `api/ilan/yeni`, `api/is/puan`, `api/siparis`, `api/dpp/cihaz`, `api/dpp/tamir`, `api/servis/urunler` | orta | 5 / dk, 20 / saat | Form/DB spam |
| **Hariç:** `api/odeme/callback`, `api/twilio/callback` (webhook), `api/cron/*`, `api/admin/*` (token'lı), `api/talep/*/[token]` (token'lı) | — | — | Dış sistem/zaten korunuyor |

### Mekanizma — Upstash Redis
- Paket: `@upstash/ratelimit` + `@upstash/redis`.
- Env (Vercel + lokal `.env.local`): `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`. **Kullanıcı** ücretsiz Upstash DB'sini açıp env'leri ekler (hesap açma Claude'a kapalı); kodu ben bağlarım.
- Sliding window, anahtar = `ratelimit:<route>:<ip>`. IP = `x-forwarded-for` ilk değeri (Vercel).
- **Fail-open:** Upstash env yoksa veya Redis erişilemezse istek **geçer** + sunucu loguna uyarı (availability > katılık; gerçek kullanıcıyı Redis arızasında bloklamayız).

### Paylaşılan helper
`api/_ratelimit.js`:
```js
// withRateLimit(handler, { limit, windowSec, prefix })
// - Env yoksa fail-open (handler'ı çağır).
// - Limit aşılırsa 429 { error: "Çok fazla istek, biraz sonra tekrar deneyin." } + Retry-After.
```
Her hedef uç `export default withRateLimit(handler, {...})` ile sarılır.

### `/api/diagnose` ek korumaları (proxy kötüye kullanımı)
1. **Origin kontrol:** `req.headers.origin`/`referer` `benservis.com`, `www.benservis.com`, `*.vercel.app` (preview) veya `localhost` değilse **403**. (Spoof edilebilir → ucuz ilk katman, asıl koruma rate-limit.)
2. **Prompt uzunluk tavanı:** gerçek teşhis prompt'u ölçülür (App.jsx, SEED dâhil); cap ≈ gerçeğin 2 katı; aşan istek **400**.
3. **Beklenen marker:** gerçek prompt'ta her zaman bulunan kararlı bir alt-dize (ör. JSON şema alanı `olasiArizalar`) yoksa **400**. (Generic proxy kullanımını ucuza engeller; gerçek çağrıyı bozmaz.)
- **Not:** Proxy açığının tam kapanışı prompt'u sunucuya taşımak = kapsam dışı. Bu 3 katman + rate-limit yeterli ara çözüm.

### Doğrulama
1. `/api/diagnose`'a hızlı 12+ istek/dk → eşik sonrası **429** + `Retry-After`.
2. Tek normal teşhis → **200** (regresyon yok).
3. `Origin: https://kotumsite.com` ile istek → **403**.
4. Çok uzun / marker'sız prompt → **400**.
5. Env kaldırılınca (lokal) fail-open: istek geçer + log uyarısı.

### Rollback
Helper sarmalını kaldır (tek satır/uç) veya env'i sil → fail-open ile etkisiz.

---

## 6. Uygulama yöntemi & araçlar

- **Supabase (Görev A, B):** Supabase MCP — bir kez OAuth (`authenticate` → `complete_authentication`), sonra `execute_sql` ile uygula + doğrula. Tablo/policy/bucket durumunu MCP ile teyit ederim.
- **Kod (Görev B kod + Görev C):** repo'da düzenle → `git push` (yeni branch, PR değil sürece kadar) → Vercel auto-deploy. Build: `npm run build` temiz olmalı.
- **Env (Görev C):** Upstash env'leri kullanıcı Vercel + `.env.local`'e ekler.

---

## 7. Yürütme sırası (önerilen)

1. **A — RLS** (en kritik, en düşük efor, en düşük risk) → canlı doğrula.
2. **B — Faturalar bucket** private + signed URL kod.
3. **C — Rate-limit:** Upstash kurulumu (kullanıcı env) → `_ratelimit.js` helper → uçları sar → diagnose ek korumaları → deploy → doğrula.

Her görev kendi içinde atomik commit; biri bitmeden diğerine geçilmez (RLS doğrulaması C'den önce gelir).

---

## 8. Kabul kriterleri (özet)

- [ ] Tüm `public` tablolarında `relrowsecurity = true`; anon REST probe boş/deny dönüyor.
- [ ] App regresyonsuz: diagnose, servis liste, panel login, takip çalışıyor.
- [ ] `storage.buckets`'ta "DPP Faturalar" `public = false`; eski fatura URL'i 403.
- [ ] `/api/diagnose` eşik aşımında 429; normal kullanım 200; yabancı origin 403.
- [ ] Diğer hedef public POST'lar limitli; webhook/callback/cron/admin/token uçları etkilenmemiş.
- [ ] `npm run build` temiz; Vercel production READY.

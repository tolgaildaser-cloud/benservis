-- 15 Eki 2026 · GÜVENLİK — servis yetkisi user_metadata → app_metadata (FE; IT incelemesi).
-- Sorun: API yetkiyi `user_metadata.servis_id`'den okuyordu; kullanıcı user_metadata'yı kendisi yazabilir.
-- Kod (aynı PR) artık YALNIZ `app_metadata.servis_id`'yi okur. Bu dosya mevcut servis hesaplarının
-- kimliğini app_metadata'ya kopyalar.
--
-- ⚠️ SIRA: ÖNCE bu SQL (Supabase SQL Editor), SONRA PR merge. SQL'den sonra eski kod çalışmaya devam eder
--    (user_metadata'ya dokunulmuyor); merge'den önce SQL çalışmazsa servis panelleri "hesap bağlı değil" der.
-- Canlı sayım (15 Eki 09:1x, FE salt okuma): 12 auth kullanıcısı · 11'inde user_metadata.servis_id ·
--   8'i onaylı başvuruyla eşleşiyor (servis_basvurulari.id = servis_id ve aynı e-posta) · 3'ü eşleşmiyor ·
--   son 30 günde yeni hesap 0.
-- Tekrar çalıştırılabilir. user_metadata'ya dokunulmaz (geri dönüş için).

-- ① Onaylı başvuruyla birebir eşleşen hesaplar (servis_id = başvuru id ve e-posta aynı) → app_metadata.
update auth.users u
   set raw_app_meta_data = coalesce(u.raw_app_meta_data, '{}'::jsonb) || jsonb_strip_nulls(jsonb_build_object(
         'servis_id',   u.raw_user_meta_data->>'servis_id',
         'servis_ad',   u.raw_user_meta_data->>'servis_ad',
         'servis_ilce', coalesce(u.raw_user_meta_data->>'servis_ilce', u.raw_user_meta_data->>'ilce')))
 where u.raw_user_meta_data ? 'servis_id'
   and exists (select 1 from public.servis_basvurulari b
                where b.id::text = u.raw_user_meta_data->>'servis_id'
                  and lower(b.email) = lower(u.email));
-- Beklenen: 8 satır.

-- ② Eşleşmeyen hesaplar — OTOMATİK KOPYALANMAZ (biri kendine servis_id yazmış olabilir). Tolga listeye bakar:
select u.id, u.email, u.raw_user_meta_data->>'servis_id' as servis_id, u.raw_user_meta_data->>'servis_ad' as servis_ad,
       u.created_at, u.last_sign_in_at
  from auth.users u
 where u.raw_user_meta_data ? 'servis_id'
   and not (u.raw_app_meta_data ? 'servis_id')
 order by u.created_at;
-- Beklenen: 3 satır (eski panel-kurulum ekranıyla eşleştirilmiş hesaplar).

-- ③ ② listesindeki hesap(lar)ı tanıyorsan ve servisi doğruysa, id'lerini yazıp çalıştır:
-- update auth.users u
--    set raw_app_meta_data = coalesce(u.raw_app_meta_data, '{}'::jsonb) || jsonb_strip_nulls(jsonb_build_object(
--          'servis_id',   u.raw_user_meta_data->>'servis_id',
--          'servis_ad',   u.raw_user_meta_data->>'servis_ad',
--          'servis_ilce', coalesce(u.raw_user_meta_data->>'servis_ilce', u.raw_user_meta_data->>'ilce')))
--  where u.id in ('<id-1>', '<id-2>');

-- Doğrulama:
-- select count(*) from auth.users where raw_app_meta_data ? 'servis_id';   -- ① sonrası 8 (③ ile 8 + onaylanan)

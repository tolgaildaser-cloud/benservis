-- YK #183 PR-3 · 24 Eki 2026 · Teknisyen mobil görünümü + seri no fotoğrafı: DB tarafı izin temizliği.
-- YK8 (24 Eki): "authenticated'daki varsayılan REFERENCES/TRIGGER/TRUNCATE temizliğini PR-3'ün SQL'ine ekle".
-- Neden: Supabase public şemadaki her yeni tabloya anon/authenticated için ALL verir. PR-1 yalnız insert/update/delete'i
-- kaldırmıştı; REFERENCES/TRIGGER/TRUNCATE kaldı (PR-2 doğrulamasında user_id sütununda REFERENCES göründü).
-- Okuma açığı DEĞİL, ama yerinde tablolarında authenticated'a SELECT dışında hiçbir yetki kalmasın.
--
-- ⚠️ ÇALIŞTIRAN: Tolga, Supabase SQL Editor'da TEK SEFERDE. FE canlı DB'ye yazmaz. YK doğrular.
--    Tekrar çalıştırılabilir. Fotoğraf bucket'ı (`yerinde-seri`, private) PR-1'de açıldı; istemci politikası
--    EKLENMEZ: yükleme ve görme yalnız api/yerinde/foto.js'in verdiği imzalı adreslerle.

revoke references, trigger, truncate
  on public.yerinde_teknisyenler, public.yerinde_isler, public.yerinde_musteri, public.yerinde_is_log
  from authenticated, anon;

-- ─── Doğrulama (beklenen yorumda) ───────────────────────────────────────────────────────────────
-- select table_name, privilege_type from information_schema.table_privileges
--  where table_name like 'yerinde_%' and grantee in ('authenticated', 'anon') order by 1, 2;
--  -- beklenen: yalnız authenticated · SELECT (yerinde_isler, yerinde_musteri, yerinde_is_log); anon hiç yok.
--  -- yerinde_teknisyenler tablo düzeyinde görünmez (PR-2: sütun düzeyinde grant).
-- select public from storage.buckets where id = 'yerinde-seri';                                       -- false
-- select count(*) from pg_policies where schemaname = 'storage' and policyname ilike '%yerinde%';     -- 0

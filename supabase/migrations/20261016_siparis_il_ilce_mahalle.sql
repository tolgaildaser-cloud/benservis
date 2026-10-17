-- 16 Eki 2026 · Sipariş adresi ayrı kolonlar (Tolga: "adres, il, ilçe ve mah seçimi mutlaka olsun"; 09:1x karar ⑤ "ayrı").
-- Pazar siparişinde il (listeden), ilçe (listeden), mahalle (zorunlu yazı) ayrı kolonlara yazılır;
-- `alici_adres` artık yalnız açık adres (cadde/sokak, bina, daire). Eski siparişlerde üçü boş kalır.
--
-- ⚠️ SIRA: ÖNCE BU SQL, SONRA MERGE. Kod bu kolonlara yazar; SQL çalışmadan merge edilirse pazar siparişi
-- insert'i "column does not exist" ile 500 döner.
-- Çalıştırma: Supabase SQL Editor, tek sefer. Tekrar çalıştırılabilir (if not exists).
begin;

alter table public.siparisler add column if not exists alici_il      text;
alter table public.siparisler add column if not exists alici_ilce    text;
alter table public.siparisler add column if not exists alici_mahalle text;

commit;

-- Doğrulama (3 satır beklenir):
-- select column_name from information_schema.columns
--  where table_schema = 'public' and table_name = 'siparisler'
--    and column_name in ('alici_il', 'alici_ilce', 'alici_mahalle');

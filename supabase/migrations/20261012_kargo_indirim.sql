-- 12 Eki 2026 · Kargo 189 TL + 3.000 TL üzeri kargo indirimi
-- Tolga (11 Eki 12:0x): "kargo bedelini 189 TL'ye çıkar, 3000 TL üzeri ürünlerde kargo bedeli alma"
-- · (12:1x) "kargo bedeli gösterilsin, indirim olarak silinsin".
--
-- kargo_tl         : yazılan kargo bedeli (189) — eşik aşılsa da kayıtta durur
-- kargo_indirim_tl : 3.000 TL üzeri pazar siparişinde düşülen kargo (189), yoksa 0
-- Ödenen tutar (`tutar`) = ürünler + kargo_tl − kargo_indirim_tl. İkisi ölçüm için ayrı tutulur.
--
-- ⚠️ PR merge edilmeden ÖNCE çalıştırılır: yeni /api/siparis bu kolona yazar.
alter table public.siparisler
  add column if not exists kargo_indirim_tl integer not null default 0;

-- Doğrulama: 1 dönmeli.
-- select count(*) from information_schema.columns
--  where table_schema='public' and table_name='siparisler' and column_name='kargo_indirim_tl';

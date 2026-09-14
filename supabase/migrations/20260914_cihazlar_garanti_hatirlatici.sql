-- YK #136 · 14 Eyl 2026 · Garanti hatırlatıcısı (DPP-lite) — `cihazlar` şema değişikliği
-- Tolga onayı (14 Eyl, FE koşusu): "cihazlar'a kolon ekle".
--
-- Canlı şema (14 Eyl okundu): 17 kolon, 14 demo kayıt, RLS açık / politika yok (yalnız service
-- key yazar-okur), seri_no NOT NULL + UNIQUE; kaynak / eposta / riza_* kolonları YOK.
--
-- ① seri_no NOT NULL kalkar: garanti formu seri no İSTEMEZ (föy: "fatura, fotoğraf, seri
--    numarası istenmez"). UNIQUE kalır — Postgres NULL'ları tekillikte saymaz. DPP public uçları
--    cihazı seri_no EŞİTLİĞİYLE aradığı için seri no'suz kayda hiçbir public uçtan erişilmez.
-- ② kaynak: demo 14 kayıt NULL kalır (föy: "demo kayıtlar sayımda dışarıda"); 30 gün sonraki
--    sayım `where kaynak = 'garanti-hatirlatici'`.
-- ③ eposta + riza_ts + riza_metin_v: KVKK açık rıza kanıtı (föy G).
alter table public.cihazlar alter column seri_no drop not null;
alter table public.cihazlar add column if not exists kaynak text;
alter table public.cihazlar add column if not exists eposta text;
alter table public.cihazlar add column if not exists riza_ts timestamptz;
alter table public.cihazlar add column if not exists riza_metin_v smallint;

-- Garanti kaydı rıza olmadan var olamaz (sunucu kapısının veritabanı yedeği).
alter table public.cihazlar add constraint cihazlar_garanti_riza_check
  check (kaynak is distinct from 'garanti-hatirlatici'
         or (eposta is not null and riza_ts is not null and riza_metin_v is not null and garanti_bitis_tarihi is not null));

create index if not exists cihazlar_kaynak_bitis_idx on public.cihazlar (kaynak, garanti_bitis_tarihi);

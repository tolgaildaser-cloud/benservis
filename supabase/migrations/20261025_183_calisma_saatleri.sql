-- YK #183 · 25 Eki 2026 · Yerinde servis çalışma düzeni (Tolga, 25 Eki):
--   · Çalışma saatleri 09:00–18:00, Cumartesi dahil (Pazartesi–Cumartesi).
--   · Randevu aralıkları 09–11 · 11–13 · 13–15 · 16–18 (15–16 öğle ve yol payı) → slot ∈ (9,11,13,16).
--   · Bir aralığa yakın adreslerden birden fazla iş girebilir → "aynı teknisyen + gün + aralıkta tek iş"
--     benzersiz index'i kalkar. Kapasite (en fazla 3) ve yakınlık kuralını API uygular (src/yerinde-cekirdek.js
--     SLOT_EN_FAZLA, YAKIN_DK; api/_yerinde.js aralikKontrol).
--
-- ⚠️ ÇALIŞTIRAN: Tolga, Supabase SQL Editor'da TEK SEFERDE. FE canlı DB'ye yazmaz. Tekrar çalıştırılabilir.
--    Yeni CHECK'ler NOT VALID eklenir: eski aralıklarla (8,10,12,14) kayıtlı satır varsa silinmez, bozulmaz;
--    yeni yazmalar yeni kurala uyar. En alttaki sorgu eski aralıkta kalan satır sayısını gösterir.

alter table public.yerinde_isler drop constraint if exists yerinde_isler_istenen_slot_check;
alter table public.yerinde_isler drop constraint if exists yerinde_isler_randevu_slot_check;
alter table public.yerinde_isler drop constraint if exists yerinde_isler_randevu_gun_check;

alter table public.yerinde_isler add constraint yerinde_isler_istenen_slot_check
  check (istenen_slot is null or istenen_slot in (9,11,13,16)) not valid;
alter table public.yerinde_isler add constraint yerinde_isler_randevu_slot_check
  check (randevu_slot is null or randevu_slot in (9,11,13,16)) not valid;
alter table public.yerinde_isler add constraint yerinde_isler_randevu_gun_check
  check (randevu_gun is null or extract(isodow from randevu_gun) between 1 and 6) not valid;

-- Aralık başına tek iş kuralı kalkar; aynı sorguyu (teknisyen + gün + aralık) hızlı tutan düz index gelir.
drop index if exists public.yerinde_isler_slot_tekil;
create index if not exists yerinde_isler_tek_gun_slot_idx
  on public.yerinde_isler (teknisyen_kod, randevu_gun, randevu_slot)
  where durum <> 'iptal';

-- Kontrol: eski aralıkta kalan satır (0 beklenir; 0 değilse koordinatör o işlerin aralığını panelden günceller).
select
  count(*) filter (where randevu_slot is not null and randevu_slot not in (9,11,13,16)) as eski_randevu_araligi,
  count(*) filter (where istenen_slot is not null and istenen_slot not in (9,11,13,16)) as eski_tercih_araligi
from public.yerinde_isler
where durum <> 'iptal';

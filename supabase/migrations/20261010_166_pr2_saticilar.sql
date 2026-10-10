-- YK #166 · 10 Eki 2026 · Genel pazaryeri — PR-2: satıcı modeli
-- Tolga (10 Eki 08:4x): "yedek parçayı benservis satacak öncelikle bunu kur, genel pazaryeri
-- mantığında kur, benservis te bu pazaryerinde ürün veya yedek parça satsın"
--
-- Canlı şema (10 Eki 09:1x okundu): `servis_urunler` 10 kolon, servis_id NOT NULL →
-- servis_basvurulari(id), tip CHECK (ikinci_el|yedek_parca), 7 kayıt (hepsi ikinci_el, durum=demo).
-- `saticilar` YOK.
--
-- ① saticilar: pazaryerindeki her satıcı tek satır. tur = servis | benservis | dis.
--    Benservis kaydı seed edilir; tek olabilir (kısmi benzersiz indeks).
--    iletişim/IBAN yalnız admin'de okunur — public uçlar yalnız `ad, tur` döndürür
--    (api/_public-alanlar.js SATICI_PUBLIC_ALANLAR). RLS açık, politika yok (service key).
-- ② Mevcut ürünlerin servisleri için `servis` satıcı kaydı açılır, ürün satici_id'ye bağlanır.
-- ③ servis_urunler: satici_id, tur (urun|parca), kategori (yedek-parca|urun|ikinci-el),
--    parca_turu, cihaz_turu, uyumlu_modeller, parca_durum (yeni|cikma), stok.
--    servis_id artık boş olabilir (Benservis ürünü servise bağlı değil); ikisinden biri şart.
--    `tip` kolonu KALIR (servis paneli yazıyor); kategori ondan doldurulur.

-- ① ─────────────────────────────────────────────────────────────────
create table if not exists public.saticilar (
  id              uuid primary key default gen_random_uuid(),
  ad              text not null,
  tur             text not null check (tur in ('servis', 'benservis', 'dis')),
  servis_id       uuid unique references public.servis_basvurulari(id) on delete set null,
  iletisim_tel    text,
  iletisim_eposta text,
  iban            text,
  aktif           boolean not null default true,
  created_at      timestamptz default now(),
  constraint saticilar_servis_check check (tur <> 'servis' or servis_id is not null)
);
alter table public.saticilar enable row level security;
create unique index if not exists saticilar_tek_benservis_idx
  on public.saticilar (tur) where tur = 'benservis';

insert into public.saticilar (ad, tur)
select 'Benservis', 'benservis'
where not exists (select 1 from public.saticilar where tur = 'benservis');

-- ② ─────────────────────────────────────────────────────────────────
insert into public.saticilar (ad, tur, servis_id)
select sb.ad, 'servis', sb.id
from public.servis_basvurulari sb
where sb.id in (select distinct servis_id from public.servis_urunler where servis_id is not null)
on conflict (servis_id) do nothing;

-- ③ ─────────────────────────────────────────────────────────────────
alter table public.servis_urunler add column if not exists satici_id uuid
  references public.saticilar(id) on delete restrict;
alter table public.servis_urunler add column if not exists tur      text not null default 'urun';
alter table public.servis_urunler add column if not exists kategori text not null default 'ikinci-el';
alter table public.servis_urunler add column if not exists parca_turu      text;
alter table public.servis_urunler add column if not exists cihaz_turu      text;
alter table public.servis_urunler add column if not exists uyumlu_modeller text;
alter table public.servis_urunler add column if not exists parca_durum     text;
alter table public.servis_urunler add column if not exists stok integer not null default 1;

update public.servis_urunler
   set kategori = case tip when 'yedek_parca' then 'yedek-parca' else 'ikinci-el' end,
       tur      = case tip when 'yedek_parca' then 'parca'       else 'urun'      end;

update public.servis_urunler su
   set satici_id = s.id
  from public.saticilar s
 where s.servis_id = su.servis_id and su.satici_id is null;

alter table public.servis_urunler add constraint servis_urunler_tur_check
  check (tur in ('urun', 'parca'));
alter table public.servis_urunler add constraint servis_urunler_kategori_check
  check (kategori in ('yedek-parca', 'urun', 'ikinci-el'));
alter table public.servis_urunler add constraint servis_urunler_tur_kategori_check
  check ((tur = 'parca') = (kategori = 'yedek-parca'));
alter table public.servis_urunler add constraint servis_urunler_parca_durum_check
  check (parca_durum is null or parca_durum in ('yeni', 'cikma'));
alter table public.servis_urunler add constraint servis_urunler_stok_check
  check (stok >= 0);

alter table public.servis_urunler alter column servis_id drop not null;
alter table public.servis_urunler add constraint servis_urunler_sahip_check
  check (servis_id is not null or satici_id is not null);

create index if not exists servis_urunler_vitrin_idx
  on public.servis_urunler (durum, kategori, cihaz_turu, parca_turu);
create index if not exists servis_urunler_satici_idx on public.servis_urunler (satici_id);

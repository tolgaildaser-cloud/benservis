-- YK #183 PR-1 · 23 Eki 2026 · Yerinde servis paneli şeması (Kiwi pilotu; Kiwi anlaşması beklenmeden).
-- Tolga (YK8, birebir): "Kiwi'yi beklemeden benservis.com'da yerinde servis panelini kurmaya başla".
-- Hedef görünüm: ~/Desktop/Yerinde Servis/2-servis-paneli.html (prototip localStorage → bu tablolar).
-- Plan: benservis-icerik/yerinde/UYGULAMA-PLANI.md
--
-- ⚠️ ÇALIŞTIRAN: Tolga, Supabase SQL Editor'da TEK SEFERDE. FE canlı DB'ye yazmaz. YK doğrular.
--    Dosya tekrar çalıştırılabilir (if not exists / or replace / drop policy if exists / on conflict).
--
-- İLKELER
-- ① Rol YALNIZ app_metadata.rol: 'yerinde_koordinator' | 'yerinde_teknisyen' (yalnız service key yazar, #176).
--    user_metadata hiçbir yerde yetki değil. Hesabı admin bağlar: api/admin/yerinde-rol.js (ADMIN_TOKEN).
-- ② Kişisel veri (ad, telefon, e-posta, adres, tarif) YALNIZ yerinde_musteri tablosunda. İş tablosunda ve
--    logda kişisel veri yok; log yalnız sabit olay etiketi taşır.
-- ③ RLS: SELECT — koordinatör hepsini, teknisyen yalnız kendine atanmış işleri (+ o işlerin müşteri/log
--    satırlarını) görür. INSERT/UPDATE/DELETE politikası YOK: yazmalar yalnız Vercel API'den (service key);
--    rol ve durum geçişi API'de denetlenir (PR-2/3). anon, bireysel üye ve servis hesabı hiçbir satır görmez.
-- ④ Fiyat (tutar) boş/opsiyonel: Kiwi'yle anlaşılınca dolar.

-- ─── yardımcı: oturumdaki yerinde rolü (yalnız app_metadata) ────────────────────────────────────
create or replace function public.yerinde_rol()
returns text language sql stable set search_path = '' as $$
  select coalesce((select auth.jwt()) -> 'app_metadata' ->> 'rol', '')
$$;

-- ─── 1) Teknisyenler ────────────────────────────────────────────────────────────────────────────
create table if not exists public.yerinde_teknisyenler (
  kod        text primary key check (kod ~ '^T[0-9]{1,2}$'),
  ad         text not null,
  yaka       text not null check (yaka in ('Anadolu', 'Avrupa')),
  user_id    uuid unique references auth.users(id) on delete set null,
  aktif      boolean not null default true,
  created_at timestamptz not null default now()
);
insert into public.yerinde_teknisyenler (kod, ad, yaka) values
  ('T1', 'T1 · Anadolu', 'Anadolu'),
  ('T2', 'T2 · Avrupa', 'Avrupa')
on conflict (kod) do nothing;

-- ─── 2) İşler (kişisel veri yok) ────────────────────────────────────────────────────────────────
create sequence if not exists public.yerinde_is_no_seq start 1001;

create table if not exists public.yerinde_isler (
  id                uuid primary key default gen_random_uuid(),
  no                text not null unique default ('KWS-' || nextval('public.yerinde_is_no_seq')),
  kanal             text not null default 'Kiwi e-posta' check (char_length(kanal) <= 40),
  kiwi_ref          text check (kiwi_ref is null or char_length(kiwi_ref) <= 40),
  talep_at          timestamptz not null default now(),
  durum             text not null default 'yeni'
                    check (durum in ('yeni','randevu','yolda','serviste','parca','atolye','tamam','iptal')),
  urun              text not null check (char_length(urun) <= 80),
  model             text check (model is null or char_length(model) <= 80),
  seri_no           text check (seri_no is null or char_length(seri_no) <= 60),
  garanti           text not null default '?' check (garanti in ('E','H','?')),
  belirti           text not null check (char_length(belirti) <= 200),
  il                text not null default 'İstanbul' check (char_length(il) <= 40),
  ilce              text not null check (char_length(ilce) <= 40),
  istenen_gun       date,
  istenen_slot      smallint check (istenen_slot is null or istenen_slot in (8,10,12,14,16)),
  randevu_gun       date check (randevu_gun is null or extract(isodow from randevu_gun) between 1 and 5),
  randevu_slot      smallint check (randevu_slot is null or randevu_slot in (8,10,12,14,16)),
  teknisyen_kod     text references public.yerinde_teknisyenler(kod),
  temsilci          text check (temsilci is null or char_length(temsilci) <= 60),
  temsilci_notu     text check (temsilci_notu is null or char_length(temsilci_notu) <= 1000),
  aramalar          smallint not null default 0 check (aramalar between 0 and 50),
  ilk_ziyarette     boolean,
  csat              smallint check (csat is null or csat between 1 and 5),
  degisen_parcalar  text check (degisen_parcalar is null or char_length(degisen_parcalar) <= 300),
  tutar             numeric(10,2) check (tutar is null or tutar >= 0),   -- Kiwi'yle anlaşılınca
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now(),
  -- Randevulu ve sahadaki iş: gün + slot + teknisyen zorunlu
  constraint yerinde_randevu_tam check (
    durum not in ('randevu','yolda','serviste')
    or (randevu_gun is not null and randevu_slot is not null and teknisyen_kod is not null)
  )
);
create index if not exists yerinde_isler_durum_idx on public.yerinde_isler (durum);
create index if not exists yerinde_isler_randevu_idx on public.yerinde_isler (randevu_gun, randevu_slot);
create index if not exists yerinde_isler_tek_idx on public.yerinde_isler (teknisyen_kod);
-- Aynı teknisyene aynı gün + slot iki kez verilmez (iptal hariç)
create unique index if not exists yerinde_isler_slot_tekil
  on public.yerinde_isler (teknisyen_kod, randevu_gun, randevu_slot)
  where durum <> 'iptal' and randevu_gun is not null and randevu_slot is not null and teknisyen_kod is not null;

create or replace function public.yerinde_guncellendi()
returns trigger language plpgsql set search_path = '' as $$
begin new.updated_at := now(); return new; end $$;
drop trigger if exists yerinde_isler_guncellendi on public.yerinde_isler;
create trigger yerinde_isler_guncellendi before update on public.yerinde_isler
  for each row execute function public.yerinde_guncellendi();

-- ─── 3) Müşteri (kişisel veri; 1:1) ─────────────────────────────────────────────────────────────
create table if not exists public.yerinde_musteri (
  is_id        uuid primary key references public.yerinde_isler(id) on delete cascade,
  ad           text not null check (char_length(ad) between 2 and 80),
  telefon      text not null check (telefon ~ '^05[0-9]{9}$'),        -- yalnız cep, rakam, 11 hane
  eposta       text check (eposta is null or (char_length(eposta) <= 120 and eposta like '%@%')),
  adres        text not null check (char_length(adres) <= 300),
  adres_tarifi text check (adres_tarifi is null or char_length(adres_tarifi) <= 300),
  created_at   timestamptz not null default now()
);

-- ─── 4) Log (kişisel veri yok; sabit olay etiketi) ──────────────────────────────────────────────
create table if not exists public.yerinde_is_log (
  id     bigint generated always as identity primary key,
  is_id  uuid not null references public.yerinde_isler(id) on delete cascade,
  at     timestamptz not null default now(),
  olay   text not null check (olay ~ '^[a-z_]{2,40}(:[a-z0-9_-]{1,40})?$'),  -- ör. durum:randevu, arama_ulasilamadi
  yazan  uuid references auth.users(id) on delete set null
);
create index if not exists yerinde_is_log_is_idx on public.yerinde_is_log (is_id, at);

-- ─── 5) RLS ─────────────────────────────────────────────────────────────────────────────────────
alter table public.yerinde_teknisyenler enable row level security;
alter table public.yerinde_isler        enable row level security;
alter table public.yerinde_musteri      enable row level security;
alter table public.yerinde_is_log       enable row level security;

revoke all on public.yerinde_teknisyenler, public.yerinde_isler, public.yerinde_musteri, public.yerinde_is_log from anon;
revoke insert, update, delete on public.yerinde_teknisyenler, public.yerinde_isler, public.yerinde_musteri, public.yerinde_is_log from authenticated;
grant select on public.yerinde_teknisyenler, public.yerinde_isler, public.yerinde_musteri, public.yerinde_is_log to authenticated;

-- Teknisyen kendi satırını bulur (user_id = auth.uid()) → kod
create or replace function public.yerinde_benim_kodum()
returns text language sql stable security definer set search_path = '' as $$
  select kod from public.yerinde_teknisyenler where user_id = (select auth.uid()) and aktif limit 1
$$;
revoke all on function public.yerinde_benim_kodum() from public, anon;
grant execute on function public.yerinde_benim_kodum() to authenticated;

drop policy if exists yerinde_tek_okur on public.yerinde_teknisyenler;
create policy yerinde_tek_okur on public.yerinde_teknisyenler for select to authenticated
  using (public.yerinde_rol() in ('yerinde_koordinator', 'yerinde_teknisyen'));

drop policy if exists yerinde_isler_okur on public.yerinde_isler;
create policy yerinde_isler_okur on public.yerinde_isler for select to authenticated
  using (
    public.yerinde_rol() = 'yerinde_koordinator'
    or (public.yerinde_rol() = 'yerinde_teknisyen' and teknisyen_kod is not null and teknisyen_kod = public.yerinde_benim_kodum())
  );

drop policy if exists yerinde_musteri_okur on public.yerinde_musteri;
create policy yerinde_musteri_okur on public.yerinde_musteri for select to authenticated
  using (exists (select 1 from public.yerinde_isler i where i.id = is_id));   -- iş görünüyorsa (RLS'i ile) müşteri de

drop policy if exists yerinde_log_okur on public.yerinde_is_log;
create policy yerinde_log_okur on public.yerinde_is_log for select to authenticated
  using (exists (select 1 from public.yerinde_isler i where i.id = is_id));
-- INSERT / UPDATE / DELETE politikası YOK (ilke ③).

-- ─── 6) Private bucket: seri no fotoğrafları (PR-3; istemci politikası yok, API imzalı URL verir) ─
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('yerinde-seri', 'yerinde-seri', false, 10485760, array['image/jpeg', 'image/png', 'image/webp', 'image/heic'])
on conflict (id) do update
  set public = false, file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;

-- ─── 7) Doğrulama (beklenen yorumda) ────────────────────────────────────────────────────────────
-- select relname, relrowsecurity from pg_class where relname like 'yerinde_%' and relkind = 'r' order by 1;   -- 4 satır, hepsi true
-- select tablename, policyname, cmd from pg_policies where tablename like 'yerinde_%' order by 1,2;           -- 4 politika, hepsi SELECT
-- select kod, ad, yaka, user_id from public.yerinde_teknisyenler order by kod;                                -- T1 Anadolu · T2 Avrupa, user_id boş
-- select public from storage.buckets where id = 'yerinde-seri';                                              -- false

-- ─── 8) Geri alma (gerekirse, bu sırayla) ───────────────────────────────────────────────────────
-- drop table if exists public.yerinde_is_log, public.yerinde_musteri, public.yerinde_isler, public.yerinde_teknisyenler;
-- drop sequence if exists public.yerinde_is_no_seq;
-- drop function if exists public.yerinde_benim_kodum(), public.yerinde_rol(), public.yerinde_guncellendi();
-- delete from storage.buckets where id = 'yerinde-seri';   -- bucket boşsa

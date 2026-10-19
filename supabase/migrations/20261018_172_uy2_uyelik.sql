-- YK #172 ÜY-2 · 18 Eki 2026 · Bireysel üyelik: `uyeler` profili + `cihazlar.sahip_id` + RLS + private bucket.
-- Tolga: 15 Eki "başlat", 18 Eki "evet" (YK8). Tarif: KARAR-DEFTERI #172 + uyelik/UYELIK-GARANTI-HEDEF-GORUNUM.md §5.
--
-- ⚠️ ÇALIŞTIRMA SIRASI: IT incelemesi → Tolga Supabase SQL Editor'da bu dosyayı TEK SEFERDE çalıştırır
--    → PR merge → Tolga Authentication → "Allow new users to sign up" AÇAR (#176'dan beri kapalı).
--    Dosya tekrar çalıştırılabilir (if not exists / or replace / drop policy if exists).
--
-- İLKELER
-- ① Servis yetkisi YALNIZ app_metadata (#176). Bireysel politikalar "servis hesabı değil" koşulunu da
--    app_metadata'dan okur: auth.jwt()->'app_metadata'->>'servis_id'. user_metadata HİÇBİR yerde yetki değil.
-- ② Bugünkü uçlar bozulmaz: API'ler service key kullanır (RLS'i atlar); anon'a hiçbir yeni politika yok;
--    `cihazlar`'da bugüne kadar politika yoktu (RLS açık, yalnız service key) → yalnız SAHİBİN OKUMASI eklenir.
-- ③ Üye `cihazlar`'a doğrudan YAZAMAZ: ekleme/düzenleme ÜY-3'te sunucu ucundan (seri no doğrulaması,
--    seri_no UNIQUE çakışması ve DPP bağı sunucuda denetlenir). Bu dosya yalnız okuma politikası açar.
-- ④ Rıza zamanı ve SÜRÜMÜ istemciden alınmaz: riza_at / hatirlatma_riza_at veritabanı saatiyle (now()),
--    riza_metin_v yürürlükteki sabit sürümle (aşağıda 1) yazılır (IT incelemesi PR #333 bulgu 2).
--    ⚠️ Aydınlatma metni v2 olunca: uyeler_zaman_damgasi içindeki sabit + CHECK + src/uyelik.js UYELIK_RIZA_V birlikte artar.

-- ─── 1) uyeler: bireysel üye profili ────────────────────────────────────────────────────────────
create table if not exists public.uyeler (
  id                  uuid primary key references auth.users(id) on delete cascade,
  ad                  text check (ad is null or char_length(ad) <= 80),
  riza_at             timestamptz not null default now(),   -- üyelik aydınlatma + açık rıza onay anı
  riza_metin_v        smallint    not null default 1 check (riza_metin_v between 1 and 1), -- yürürlükteki sürüm
  hatirlatma_acik     boolean     not null default false,   -- garanti hatırlatma e-postası (ayrı, isteğe bağlı onay)
  hatirlatma_riza_at  timestamptz,                          -- hatırlatmanın en son AÇILDIĞI an
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);

alter table public.uyeler enable row level security;

-- Rıza ve hatırlatma zamanları sunucu saatiyle; riza_* alanları ilk kayıttan sonra değişmez.
create or replace function public.uyeler_zaman_damgasi()
returns trigger language plpgsql set search_path = '' as $$
begin
  if tg_op = 'INSERT' then
    new.riza_at := now();
    new.riza_metin_v := 1; -- yürürlükteki aydınlatma metni sürümü (istemci ne gönderirse göndersin)
    new.created_at := now();
    new.hatirlatma_riza_at := case when new.hatirlatma_acik then now() else null end;
  else
    new.id := old.id;
    new.riza_at := old.riza_at;
    new.riza_metin_v := old.riza_metin_v;
    new.created_at := old.created_at;
    new.hatirlatma_riza_at := case
      when new.hatirlatma_acik and not old.hatirlatma_acik then now()
      else old.hatirlatma_riza_at end;
  end if;
  new.updated_at := now();
  return new;
end $$;

drop trigger if exists uyeler_zaman_damgasi on public.uyeler;
create trigger uyeler_zaman_damgasi before insert or update on public.uyeler
  for each row execute function public.uyeler_zaman_damgasi();

-- Sütun düzeyinde yetki: üye yalnız şu alanları yazabilir (gerisi tetikleyicide/sunucuda).
revoke all on public.uyeler from anon, authenticated;
grant select on public.uyeler to authenticated;
grant insert (id, ad, hatirlatma_acik) on public.uyeler to authenticated;
grant update (ad, hatirlatma_acik) on public.uyeler to authenticated;

drop policy if exists uyeler_sahibi_okur on public.uyeler;
create policy uyeler_sahibi_okur on public.uyeler
  for select to authenticated
  using (id = (select auth.uid()));

-- Yedek yol: kayıt tetikleyicisi (aşağıda) profil açamadıysa üye /hesabim'de rızayı verip kendisi açar.
drop policy if exists uyeler_sahibi_acar on public.uyeler;
create policy uyeler_sahibi_acar on public.uyeler
  for insert to authenticated
  with check (
    id = (select auth.uid())
    and coalesce((select auth.jwt()) -> 'app_metadata' ->> 'servis_id', '') = ''
  );

drop policy if exists uyeler_sahibi_gunceller on public.uyeler;
create policy uyeler_sahibi_gunceller on public.uyeler
  for update to authenticated
  using (id = (select auth.uid()))
  with check (id = (select auth.uid()));
-- DELETE politikası yok: hesap silinince satır auth.users ON DELETE CASCADE ile gider.

-- ─── 2) Kayıt anında profil (auth.users tetikleyicisi) ─────────────────────────────────────────
-- /kayit "Üye ol" formu signUp'a `uyelik_riza_v` (onay kutusu işaretlendi) ve `hatirlatma` (true/false)
-- gönderir. Bunlar yetki DEĞİL, yalnız rıza beyanı; kaydedilen sürümü istemci değil uyeler_zaman_damgasi belirler; servis hesapları (app_metadata.servis_id dolu)
-- ve bu alanı taşımayan admin hesapları atlanır. Tetikleyici hata verirse kaydı DURDURMAZ (exception
-- yakalanır) → profil /hesabim'deki yedek yolla açılır.
create or replace function public.uye_profili_olustur()
returns trigger language plpgsql security definer set search_path = '' as $$
declare v text := new.raw_user_meta_data ->> 'uyelik_riza_v';
begin
  if coalesce(new.raw_app_meta_data ->> 'servis_id', '') <> '' then return new; end if;
  if v is null or v !~ '^[0-9]{1,3}$' or v::int < 1 then return new; end if;
  insert into public.uyeler (id, hatirlatma_acik)
  values (new.id, coalesce(new.raw_user_meta_data ->> 'hatirlatma', '') = 'true')
  on conflict (id) do nothing;
  return new;
exception when others then
  return new;
end $$;

revoke all on function public.uye_profili_olustur() from public, anon, authenticated;

drop trigger if exists uye_profili_olustur on auth.users;
create trigger uye_profili_olustur after insert on auth.users
  for each row execute function public.uye_profili_olustur();

-- ─── 3) cihazlar.sahip_id + sahibin okuması ────────────────────────────────────────────────────
alter table public.cihazlar
  add column if not exists sahip_id uuid references auth.users(id) on delete set null;
create index if not exists cihazlar_sahip_idx on public.cihazlar (sahip_id) where sahip_id is not null;

-- Mevcut 16 DPP + garanti-hatırlatıcı kaydı sahip_id NULL kalır → hiçbir üyeye görünmez.
drop policy if exists cihazlar_sahibi_okur on public.cihazlar;
create policy cihazlar_sahibi_okur on public.cihazlar
  for select to authenticated
  using (sahip_id is not null and sahip_id = (select auth.uid()));
-- INSERT / UPDATE / DELETE politikası YOK (ilke ③). anon için politika YOK (DPP public uçları service key ile).

-- ─── 4) Private bucket: cihaz-dosyalari (fatura + ürün fotoğrafı, ÜY-3 kullanır) ───────────────
-- Yol kuralı: <uye_id>/<dosya>. Üye yalnız kendi klasörünü görür/yazar/siler; public URL yok.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('cihaz-dosyalari', 'cihaz-dosyalari', false, 10485760,
        array['application/pdf', 'image/jpeg', 'image/png', 'image/webp', 'image/heic'])
on conflict (id) do update
  set public = false,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists cihaz_dosyalari_sahibi_okur on storage.objects;
create policy cihaz_dosyalari_sahibi_okur on storage.objects
  for select to authenticated
  using (bucket_id = 'cihaz-dosyalari' and (storage.foldername(name))[1] = (select auth.uid())::text);

drop policy if exists cihaz_dosyalari_sahibi_yukler on storage.objects;
create policy cihaz_dosyalari_sahibi_yukler on storage.objects
  for insert to authenticated
  with check (
    bucket_id = 'cihaz-dosyalari'
    and (storage.foldername(name))[1] = (select auth.uid())::text
    and coalesce((select auth.jwt()) -> 'app_metadata' ->> 'servis_id', '') = ''
  );

drop policy if exists cihaz_dosyalari_sahibi_siler on storage.objects;
create policy cihaz_dosyalari_sahibi_siler on storage.objects
  for delete to authenticated
  using (bucket_id = 'cihaz-dosyalari' and (storage.foldername(name))[1] = (select auth.uid())::text);
-- UPDATE politikası yok: dosya değişecekse sil + yeniden yükle (üzerine yazma yok).

-- ─── 5) Doğrulama (çalıştırdıktan sonra; beklenen değerler yorumda) ────────────────────────────
-- select relrowsecurity from pg_class where oid = 'public.uyeler'::regclass;            -- true
-- select policyname, cmd from pg_policies where tablename in ('uyeler','cihazlar') order by 1;
--   → cihazlar_sahibi_okur SELECT · uyeler_sahibi_acar INSERT · uyeler_sahibi_gunceller UPDATE · uyeler_sahibi_okur SELECT
-- select public, file_size_limit from storage.buckets where id = 'cihaz-dosyalari';    -- false · 10485760
-- select count(*) from public.cihazlar where sahip_id is not null;                      -- 0
-- select tgname from pg_trigger where tgrelid = 'auth.users'::regclass and tgname = 'uye_profili_olustur'; -- 1 satır

-- ─── 6) Geri alma (gerekirse, bu sırayla; IT incelemesi PR #333) ───────────────────────────────
-- Önce Auth → "Allow new users to sign up" KAPATILIR, sonra:
-- drop trigger if exists uye_profili_olustur on auth.users;          -- önce kayıt akışına giren tetikleyici
-- drop function if exists public.uye_profili_olustur();
-- drop policy if exists cihaz_dosyalari_sahibi_okur on storage.objects;
-- drop policy if exists cihaz_dosyalari_sahibi_yukler on storage.objects;
-- drop policy if exists cihaz_dosyalari_sahibi_siler on storage.objects;
-- drop policy if exists cihazlar_sahibi_okur on public.cihazlar;
-- sahip_id ve uyeler veri taşıyorsa silmeden önce yedek alınır:
-- alter table public.cihazlar drop column if exists sahip_id;
-- drop table if exists public.uyeler;                                -- uyeler_zaman_damgasi tetikleyicisi tabloyla gider
-- drop function if exists public.uyeler_zaman_damgasi();

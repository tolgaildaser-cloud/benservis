-- YK #165 · 9 Eki 2026 · Yedek parça pazaryeri Faz 1 — PR-1: demo temizliği + şema
-- Tolga (9 Eki 12:5x): "satın almak ister misiniz butonu ile bizim pazaryerine gitsin.
-- pazaryerini de hazırla arkada"
--
-- Canlı şema (9 Eki okundu): `ilanlar` 15 kolon, seri_no NOT NULL, durum CHECK
-- (aktif|satildi|silindi), 2 aktif kayıt · `servis_urunler` durum CHECK (aktif|pasif|satildi),
-- 12 aktif kayıt · `parca_talepleri` YOK. `/api/ilan/liste` ikisini birleştirip 14 kayıt
-- döndürüyor; 14'ünün tamamı Haziran demo kaydı (7–15 Haz).
--
-- ① Demo: kayıtlar SİLİNMEZ, `durum='demo'` olur. `liste` yalnız `aktif` döndürdüğü için
--    canlı liste boşalır. İki tablonun CHECK'ine 'demo' eklenir.
-- ② ilanlar.tur: 'cihaz' (varsayılan, mevcut /ikinci-el akışı) | 'parca'.
--    seri_no yalnız cihaz ilanında zorunlu (DPP); parça ilanında boş olabilir.
-- ③ Parça alanları: parca_turu, cihaz_turu (slug), uyumlu_modeller (serbest metin),
--    parca_durum ('yeni'|'cikma'). Yalnız tur='parca' satırında anlamlı.
-- ④ parca_talepleri: "Henüz ilan yok, talep bırak" formu (PR-2). RLS açık, politika yok —
--    yalnız service key yazar/okur (cihazlar ile aynı desen). KVKK aydınlatma sürümü saklanır.

-- ① demo ─────────────────────────────────────────────────────────────
alter table public.ilanlar drop constraint if exists ilanlar_durum_check;
alter table public.ilanlar add constraint ilanlar_durum_check
  check (durum in ('aktif', 'satildi', 'silindi', 'demo'));

alter table public.servis_urunler drop constraint if exists servis_urunler_durum_check;
alter table public.servis_urunler add constraint servis_urunler_durum_check
  check (durum in ('aktif', 'pasif', 'satildi', 'demo'));

update public.ilanlar        set durum = 'demo' where durum = 'aktif' and created_at < '2026-07-01';
update public.servis_urunler set durum = 'demo' where durum = 'aktif' and created_at < '2026-07-01';

-- ② + ③ parça ilanı ──────────────────────────────────────────────────
alter table public.ilanlar add column if not exists tur text not null default 'cihaz';
alter table public.ilanlar add constraint ilanlar_tur_check check (tur in ('cihaz', 'parca'));

alter table public.ilanlar add column if not exists parca_turu       text;
alter table public.ilanlar add column if not exists cihaz_turu       text;
alter table public.ilanlar add column if not exists uyumlu_modeller  text;
alter table public.ilanlar add column if not exists parca_durum      text;
alter table public.ilanlar add constraint ilanlar_parca_durum_check
  check (parca_durum is null or parca_durum in ('yeni', 'cikma'));

alter table public.ilanlar alter column seri_no drop not null;
alter table public.ilanlar add constraint ilanlar_seri_no_cihaz_check
  check (tur = 'parca' or seri_no is not null);
alter table public.ilanlar add constraint ilanlar_parca_alanlari_check
  check (tur = 'cihaz' or (parca_turu is not null and cihaz_turu is not null));

create index if not exists ilanlar_tur_parca_idx on public.ilanlar (tur, cihaz_turu, parca_turu);

-- ④ parça talebi ─────────────────────────────────────────────────────
create table if not exists public.parca_talepleri (
  id            uuid primary key default gen_random_uuid(),
  parca_turu    text not null,
  cihaz_turu    text not null,
  marka_model   text,
  il            text not null,
  telefon       text not null,
  kvkk_metin_v  smallint not null,
  kvkk_ts       timestamptz not null default now(),
  kaynak        text,               -- ör. 'blog-<slug>'; kişisel veri değil
  durum         text not null default 'yeni' check (durum in ('yeni', 'iletildi', 'kapandi')),
  created_at    timestamptz default now()
);
alter table public.parca_talepleri enable row level security;
create index if not exists parca_talepleri_created_idx on public.parca_talepleri (created_at desc);

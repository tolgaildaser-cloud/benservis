-- supabase/tarife.sql — Tarife Veri Motoru tabloları. Supabase SQL editöründe çalıştır.

create table if not exists tarife_veri (
  id            bigint generated always as identity primary key,
  cihaz         text not null,
  marka         text not null default 'Genel',
  ariza         text not null,
  belirtiler    text,
  hata_kodu     text,
  parca_tl      numeric,
  iscilik_tl    numeric,
  toplam_tl     numeric,
  bolge         text,
  kaynak        text not null default 'saha'
                  check (kaynak in ('saha','web','gercek_is','seed')),
  kaynak_servis text,
  kaynak_url    text,
  tarih         date not null default current_date,
  notlar        text,
  created_at    timestamptz not null default now()
);
create index if not exists tarife_veri_key_idx on tarife_veri (cihaz, marka, ariza);
alter table tarife_veri enable row level security;

create table if not exists tarife (
  id                  bigint generated always as identity primary key,
  cihaz               text not null,
  marka               text not null default 'Genel',
  ariza               text not null,
  onayli_parca_min    numeric,
  onayli_parca_max    numeric,
  onayli_iscilik      numeric,
  onayli_beklenen     numeric,
  durum               text not null default 'taslak'
                        check (durum in ('taslak','onayli')),
  guven               text check (guven in ('yuksek','orta','dusuk')),
  veri_noktasi_sayisi int not null default 0,
  onaylayan           text,
  guncelleme          timestamptz not null default now(),
  created_at          timestamptz not null default now(),
  unique (cihaz, marka, ariza)
);
alter table tarife enable row level security;

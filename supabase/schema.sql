-- Benservis DPP Şeması — Faz 3
-- Bu dosya referans amaçlıdır. Canlı şema Supabase Dashboard'da yönetilir.

CREATE TABLE cihazlar (
  id                    uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  seri_no               text UNIQUE NOT NULL,
  kategori              text,
  marka                 text,
  model                 text,
  renk                  text,
  uretim_yili           int,
  satin_alma_tarihi     date,
  garanti_bitis_tarihi  date,
  fotograflar           text[] DEFAULT '{}',
  notlar                text,
  created_at            timestamptz DEFAULT now()
);

CREATE TABLE tamir_kayitlari (
  id                    uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  cihaz_id              uuid REFERENCES cihazlar(id) ON DELETE CASCADE,
  tarih                 date NOT NULL,
  yapilan_islem         text NOT NULL,
  degistirilen_parcalar text[] DEFAULT '{}',
  maliyet               int,
  servis_adi            text,
  servis_turu           text NOT NULL DEFAULT 'harici',
  benservis_is_id       text,
  fotograflar           text[] DEFAULT '{}',
  notlar                text,
  created_at            timestamptz DEFAULT now()
);

CREATE INDEX ON tamir_kayitlari(cihaz_id);

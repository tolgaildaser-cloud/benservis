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

-- Faz 2.5 — Servis Katalog (ürün/parça/hizmet listesi, şimdilik boş)
CREATE TABLE IF NOT EXISTS servis_katalog (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  servis_id   text NOT NULL,          -- services-data.json'daki Google Places ID
  tip         text NOT NULL CHECK (tip IN ('hizmet', 'yedek_parca', 'yenilenmiş_ürün')),
  ad          text NOT NULL,
  aciklama    text,
  fiyat       integer,                -- kuruş cinsinden (TL × 100)
  aktif       boolean DEFAULT true,
  created_at  timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS servis_katalog_servis_id_idx ON servis_katalog(servis_id);

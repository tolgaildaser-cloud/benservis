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

-- Faz 2.5b — Servis Çağır İş Yönetimi
CREATE SEQUENCE IF NOT EXISTS is_no_seq START 1;

CREATE TABLE IF NOT EXISTS is_talepleri (
  id                uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  is_no             text UNIQUE NOT NULL
                    DEFAULT 'BS-' || LPAD(nextval('is_no_seq')::text, 4, '0'),
  servis_id         text NOT NULL,
  servis_ad         text NOT NULL,
  musteri_ad        text NOT NULL,
  musteri_tel       text NOT NULL,
  adres             text NOT NULL,
  tarih_tercihi     text,
  cihaz             text,
  belirti           text,
  durum             text NOT NULL DEFAULT 'bekliyor'
                    CHECK (durum IN ('bekliyor','onaylandi','reddedildi','suresi_doldu','tamamlandi')),
  son_kabul_tarihi  timestamptz NOT NULL,
  gelis_penceresi   text,
  twilio_numara     text,
  puan              int CHECK (puan BETWEEN 1 AND 5),
  odeme_durumu      text NOT NULL DEFAULT 'bekliyor'
                    CHECK (odeme_durumu IN ('bekliyor','tamamlandi','iptal')),
  created_at        timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS is_talepleri_servis_id_idx ON is_talepleri(servis_id);
CREATE INDEX IF NOT EXISTS is_talepleri_durum_idx ON is_talepleri(durum);
CREATE INDEX IF NOT EXISTS is_talepleri_son_kabul_idx
  ON is_talepleri(son_kabul_tarihi) WHERE durum = 'bekliyor';

CREATE TABLE IF NOT EXISTS servis_performans (
  servis_id         text PRIMARY KEY,
  yanitlamamis      int NOT NULL DEFAULT 0,
  puan_carpani      numeric(3,2) NOT NULL DEFAULT 1.00,
  guncelleme_tarihi timestamptz DEFAULT now()
);

-- Faz 3 — DPP Genişletme eklentileri
ALTER TABLE is_talepleri
  ADD COLUMN IF NOT EXISTS seri_no      text,
  ADD COLUMN IF NOT EXISTS dpp_tamir_id uuid REFERENCES tamir_kayitlari(id) ON DELETE SET NULL;

-- Puan/Yorum sistemi — yalnız tamamlandi statüsündeki işe yazılabilir
ALTER TABLE is_talepleri
  ADD COLUMN IF NOT EXISTS yorum text;
-- Not: puan int CHECK (puan BETWEEN 1 AND 5) zaten tanımlı (tablo oluşturulurken eklenmiş)

-- Garanti tarihlerinin tanımları:
-- garanti_baslangic_tarihi: ürün ilk alındığında garanti başlangıç tarihi
-- garanti_bitis_tarihi (mevcut): standart garanti bitiş tarihi
-- uzatilmis_garanti_bitis: uzatılmış garanti bitiş tarihi (uzatilmis_garanti=true ise aktif)
ALTER TABLE cihazlar
  ADD COLUMN IF NOT EXISTS garanti_baslangic_tarihi  date,
  ADD COLUMN IF NOT EXISTS uzatilmis_garanti         boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS uzatilmis_garanti_bitis   date,
  ADD COLUMN IF NOT EXISTS fatura_url                text;

ALTER TABLE tamir_kayitlari
  ADD COLUMN IF NOT EXISTS servis_id text;

-- servis_id: Google Places ID (services-data.json), servis_katalog FK değil

-- Faz 3 Task 4 — cihaz durumu
ALTER TABLE cihazlar
  ADD COLUMN IF NOT EXISTS mevcut_durum text DEFAULT 'çalışıyor'
    CHECK (mevcut_durum IN ('çalışıyor', 'arızalı', 'hurda'));

-- Faz 4 — İkinci El Pazaryeri
CREATE TABLE IF NOT EXISTS ilanlar (
  id                   uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  seri_no              text NOT NULL,
  kategori             text,
  baslik               text NOT NULL,
  aciklama             text,
  fiyat                integer NOT NULL,
  konum                text,
  satici_ad            text NOT NULL,
  satici_tel           text NOT NULL,
  fotograflar          text[] DEFAULT '{}',
  durum                text NOT NULL DEFAULT 'aktif'
                       CHECK (durum IN ('aktif', 'satildi', 'silindi')),
  goruntuleme_sayisi   integer DEFAULT 0,
  created_at           timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS ilanlar_seri_no_idx    ON ilanlar(seri_no);
CREATE INDEX IF NOT EXISTS ilanlar_durum_idx      ON ilanlar(durum);
CREATE INDEX IF NOT EXISTS ilanlar_created_at_idx ON ilanlar(created_at DESC);

-- Faz 4B — Güvenli Ödeme + Mesajlaşma
ALTER TABLE ilanlar
  ADD COLUMN IF NOT EXISTS satici_token text UNIQUE,
  ADD COLUMN IF NOT EXISTS satici_iban  text;

-- Faz 4C — Cihaz Türü Filtresi
ALTER TABLE ilanlar
  ADD COLUMN IF NOT EXISTS kategori text;

CREATE INDEX IF NOT EXISTS ilanlar_kategori_idx ON ilanlar(kategori);

CREATE TABLE IF NOT EXISTS talepler (
  id                  uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ilan_id             uuid NOT NULL REFERENCES ilanlar(id),
  alici_ad            text NOT NULL,
  alici_tel           text NOT NULL,
  alici_email         text,
  alici_token         text UNIQUE NOT NULL,
  ilk_mesaj           text,
  odeme_durumu        text NOT NULL DEFAULT 'ilgileniliyor'
                      CHECK (odeme_durumu IN (
                        'ilgileniliyor',    -- alıcı ilgi gösterdi
                        'odeme_bekleniyor', -- iyzico formu açıldı
                        'odendi',           -- ödeme onaylandı
                        'teslim_onaylandi', -- alıcı ürünü aldı
                        'iptal'
                      )),
  tutar               integer NOT NULL,
  iyzico_payment_id   text,
  iyzico_token        text,
  created_at          timestamptz DEFAULT now(),
  teslim_onay_tarihi  timestamptz
);

CREATE INDEX IF NOT EXISTS talepler_ilan_id_idx    ON talepler(ilan_id);
CREATE UNIQUE INDEX IF NOT EXISTS talepler_alici_token_idx ON talepler(alici_token);
CREATE INDEX IF NOT EXISTS talepler_iyzico_token_idx ON talepler(iyzico_token);

CREATE TABLE IF NOT EXISTS mesajlar (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  talep_id    uuid NOT NULL REFERENCES talepler(id),
  gonderen    text NOT NULL CHECK (gonderen IN ('alici', 'satici')),
  icerik      text NOT NULL CHECK (char_length(trim(icerik)) > 0),
  okundu      boolean DEFAULT false,
  created_at  timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS mesajlar_talep_id_idx ON mesajlar(talep_id);

-- Faz 4B ek: satıcıya ödeme takibi
ALTER TABLE talepler
  ADD COLUMN IF NOT EXISTS satici_odeme_durumu text DEFAULT NULL
    CHECK (satici_odeme_durumu IN ('bekliyor', 'yapildi')),
  ADD COLUMN IF NOT EXISTS satici_odeme_tarihi timestamptz;

-- Faz 2 Servis Tier Sistemi
-- Servisler şu an services-data.json'da tutulmaktadır.
-- DB'ye geçişte bu tablo kullanılacak.
--
-- Tier hiyerarşisi:
--   yetkili  → üretici onaylı yetkili servis (garanti tamirlerini karşılar)
--   tier     → kalite kademesi: platin > gold > bronz
--   Bir servis hem yetkili=true hem tier='platin' olabilir.
--   Garanti kapsamındaki cihazlar → yalnızca yetkili=true servisler gösterilir.
CREATE TABLE IF NOT EXISTS servisler (
  id                    uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  places_id             text UNIQUE,         -- services-data.json Google Places ID
  ad                    text NOT NULL,
  yetkili               boolean NOT NULL DEFAULT false,
  tier                  text NOT NULL DEFAULT 'bronz'
                        CHECK (tier IN ('platin', 'gold', 'bronz')),
  yetkili_markalar      text[] DEFAULT '{}', -- hangi markalar için yetkili (örn. ['Arçelik','Beko'])
  kategoriler           text[] DEFAULT '{}',
  il                    text,
  ilce                  text,
  adres                 text,
  telefon               text,
  puan                  numeric(3,2),
  yorum_sayisi          int DEFAULT 0,
  komisyon_kabul        boolean DEFAULT false,
  komisyon_oran         numeric(4,2),
  aktif                 boolean DEFAULT true,
  created_at            timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS servisler_yetkili_idx      ON servisler(yetkili) WHERE yetkili = true;
CREATE INDEX IF NOT EXISTS servisler_tier_idx         ON servisler(tier);
CREATE INDEX IF NOT EXISTS servisler_ilce_idx         ON servisler(ilce);
CREATE INDEX IF NOT EXISTS servisler_kategoriler_idx  ON servisler USING GIN(kategoriler);
CREATE INDEX IF NOT EXISTS servisler_markalar_idx     ON servisler USING GIN(yetkili_markalar);

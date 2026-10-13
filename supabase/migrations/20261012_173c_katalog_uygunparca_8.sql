-- 12 Eki 2026 · YK #173 (c) — /pazar KATALOG EKİ: uygunparca.com 8 kalem (no 101, 103, 105, 107, 108, 109, 110, 113).
-- Tolga (12 Eki 13:2x): "ok" — uygunparca.com kalemleri kataloğa; aparatci.com 9 kalem telefon teyidine
-- kadar BEKLER (bu dosyada yok); no 112 prosestat (iade-dışı sınıf, YK #168 ⑤) bu dosyada YOK.
-- Kaynak: benservis-icerik/pazar/2026-10-12-IKINCI-TEDARIKCI.json (IT taraması 12 Eki 12:18), `bulunan`
-- listesinde tedarikci = uygunparca.com. Kalıp: 20261012_pazar_katalog_ek_54.sql (PR #302).
--
-- Fiyat: JSON `satis_fiyat_kdv_dahil` (tedarikçi fiyatı × 1,20, sonu 9'a yukarı), KDV DAHİL (8/8 sonu 9).
--   ❓ uygunparca.com fiyatında KDV ibaresi yok → IT KDV dahil kabul etti; fark çıkarsa fiyat motoru düzeltir.
-- Görsel (FE filigran denetimi 12 Eki 14:0x; 8 görsel indirildi, tek tek açıldı):
--   101 FİLİGRANLI ("uygunparça" yazısı + "Quality Control" rozeti) → gorsel_url NULL (vitrin cihaz ikonu, #170).
--   103, 105, 107, 108, 109, 110, 113 temiz → tedarikçi görseli (103'teki Arçelik yazısı ve 110'daki
--   etiket ürünün kendisinde, filigran değil).
-- Cihaz/parça: src/pazar-sozluk.js slug'ları (test: src/katalog-173-sql.test.js sözlükle doğrular).
-- FE yeniden denetim 13 Eki 07:5x: 7 görsel yeniden indirildi (7/7 HTTP 200), tek tek açıldı → 7/7 temiz.
--   101 doğalgaz flex hortumu: aranan "ocak doğalgaz hortumu" (katalog_ad) → firin-ocak-aspirator; ürün adı
--   "kombi flex" diyor, aynı hortum (1/2-1/2) ocakta da kullanılır.
-- 109 mikrodalga cam tepsi: çap ürün sayfasında yok → açıklamaya teyit cümlesi eklendi.
-- `kaynak` sütunu tabloda YOK (302'deki gibi yalnız bu dosyada belge amaçlı tutulur, insert'e girmez).
--
-- Çalıştırma: Supabase SQL Editor, 20261012_173d_baslik_esleme.sql'den SONRA (sıra önemli değil ama
-- doğrulama sayıları o sıraya göre yazıldı). Kod değişikliği yok.
-- Tekrar çalıştırılabilir: aynı başlıklı Benservis ürünü varsa atlanır.
with bs as (select id from public.saticilar where tur = 'benservis' limit 1),
v(baslik, aciklama, fiyat, gorsel_url, parca_turu, cihaz_turu, kaynak) as (values
  ('Universal Doğalgaz Kombi Flex Hortumu - 100CM 1/2-1/2 - 5970512', 'Tedarikçiden doğrudan gönderilir; tahmini 3 iş gününde kargoda. Uyumlu model bilgisini sipariş öncesi teyit edin.', 319, null, 'hortum-boru-baca', 'firin-ocak-aspirator', 'https://www.uygunparca.com/dogalgaz-kombi-flex-hortumu-100cm-12-12-5970512'),
  ('Arçelik Ankastre Fırın Kapak Camı - 210480587', 'Tedarikçiden doğrudan gönderilir; tahmini 3 iş gününde kargoda. Uyumlu model bilgisini sipariş öncesi teyit edin.', 2709, 'https://www.uygunparca.com/image/data/products_nwm/arcelik-firin-kapak-tutamagi-KG0035360-1.jpg', 'kapak-kapi-cam', 'firin-ocak-aspirator', 'https://www.uygunparca.com/ankastre-firin-kapak-cami-210480587'),
  ('Ankastre Davlumbaz Tel Filtre - 276x219 mm', 'Tedarikçiden doğrudan gönderilir; tahmini 3 iş gününde kargoda. Uyumlu model bilgisini sipariş öncesi teyit edin.', 319, 'https://www.uygunparca.com/image/data/products_nwm/tel-filtre-276x219mm-2.jpg', 'filtre', 'firin-ocak-aspirator', 'https://www.uygunparca.com/ankastre-davlumbaz-tel-filtre-276x219-mm'),
  ('Arçelik Termosifon Spiral Hortum 250 mm - 9170100107', 'Tedarikçiden doğrudan gönderilir; tahmini 3 iş gününde kargoda. Uyumlu model bilgisini sipariş öncesi teyit edin.', 459, 'https://www.uygunparca.com/image/data/products_nwm/termosifon-spiral-hortum-9170100107-1.jpg', 'hortum-boru-baca', 'kombi-termosifon', 'https://www.uygunparca.com/termosifon-spiral-hortum-250-mm-9170100107'),
  ('Inline 12'''' Sediment Su Arıtma Filtresi', 'Tedarikçiden doğrudan gönderilir; tahmini 3 iş gününde kargoda. Uyumlu model bilgisini sipariş öncesi teyit edin.', 319, 'https://www.uygunparca.com/image/data/products_nwm/su-aritma-filtresi-KG0020845-1.jpg', 'filtre', 'su-sebili-aritma', 'https://www.uygunparca.com/inline-12-sediment-su-aritma-filtresi'),
  ('Mikrodalga Fırın Cam Tepsi - 17477', 'Tedarikçiden doğrudan gönderilir; tahmini 3 iş gününde kargoda. Uyumlu model bilgisini sipariş öncesi teyit edin. Çap ürün sayfasında belirtilmemiş; sipariş öncesi teyit edilir.', 369, 'https://www.uygunparca.com/image/cache/data/products/KG0012798-2-445x445.jpg', 'tabla-tepsi-izgara', 'mikrodalga-air-fryer', 'https://www.uygunparca.com/mikrodalga-firin-cam-tepsi-17477'),
  ('Vestel Klima Hava Filtresi - 42148439', 'Tedarikçiden doğrudan gönderilir; tahmini 3 iş gününde kargoda. Uyumlu model bilgisini sipariş öncesi teyit edin.', 259, 'https://www.uygunparca.com/image/cache/data/products/vestel-klima-hava-filtresi-42148439-1-445x445.jpg', 'filtre', 'klima', 'https://www.uygunparca.com/klima-hava-filtresi-42148439'),
  ('Vestel Buzdolabı Sebzelik Üst Cam Raf - 47004949', 'Tedarikçiden doğrudan gönderilir; tahmini 3 iş gününde kargoda. Uyumlu model bilgisini sipariş öncesi teyit edin.', 319, 'https://www.uygunparca.com/image/data/products/vestel-retro-buzdolabi-sebselik-ust-cam-rafi-47004949.jpg', 'raf-sepet-cekmece', 'buzdolabi', 'https://www.uygunparca.com/buzdolabi-sebzelik-ust-cam-raf-47004949')
)
insert into public.servis_urunler
  (satici_id, tip, tur, kategori, baslik, aciklama, fiyat, gorsel_url, durum, stok, parca_turu, cihaz_turu, parca_durum)
select bs.id, 'yedek_parca', 'parca', 'yedek-parca', v.baslik, v.aciklama, v.fiyat, v.gorsel_url,
       'aktif', 10, v.parca_turu, v.cihaz_turu, 'yeni'
from v cross join bs
where not exists (
  select 1 from public.servis_urunler su where su.satici_id = bs.id and su.baslik = v.baslik
);

-- Doğrulama: aktif Benservis yedek parça 91 → 99.
-- select count(*) from public.servis_urunler u join public.saticilar s on s.id = u.satici_id
--  where s.tur = 'benservis' and u.kategori = 'yedek-parca' and u.durum = 'aktif';   -- → 99
-- select count(*) from public.servis_urunler where baslik like '% — %';              -- hâlâ 89 (bu 8'in başlığı tedarikçi adı; aranan-ad eşlemesi PAZ'dan)

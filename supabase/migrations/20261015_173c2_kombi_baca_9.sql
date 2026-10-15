-- 15 Eki 2026 · YK #173 (c-2) — /pazar KATALOG EKİ: KOMBİ BACA 9 KALEM (no 114–121 + 124) · aktif 99 → 108.
-- Tolga (15 Eki 07:5x): "kombi baca tedarikçisi için onay". no 122 ECA ve 123 Bosch bu dosyada YOK.
-- Kaynak: benservis-icerik/pazar/2026-10-14-KOMBI-BACA-TEDARIKCI.json (IT taraması 14 Eki 09:09), `bulunan`.
--   114–121 kombitesisatmarket.com (MAY-TES Isı) · 124 e-mekanik.com (Safir İklimlendirme A.Ş.).
-- Kalıp: 20261012_173c_katalog_uygunparca_8.sql (PR #307) + 20261012_pazar_katalog_ek_54.sql (PR #302).
--   Fark: stok satır başına (v.stok). Tedarikçi stoğu <10 ise o sayı: 118 → 1, 115 → 9, 121 → 9; diğerleri 10.
--
-- Fiyat: JSON `satis_fiyat_kdv_dahil` (tedarikçi KDV dahil × 1,20, sonu 9'a yukarı), 9/9 sonu 9.
--   ❓ 124 e-mekanik.com sayfasında KDV ibaresi yok → IT KDV dahil kabul etti; fark çıkarsa fiyat motoru düzeltir.
-- Açıklama (YK, 9/9): dropship cümlesi + 3 cümle (kombi tipi teyidi · montaj yetkili servis/tesisatçı ·
--   iade yalnız ambalajı açılmamış üründe). 121 Baymak ve 124 Daikin marka seti → model teyit cümlesi de var.
-- Görsel (FE filigran denetimi 15 Eki 08:1x; 9 görsel indirildi, 9/9 HTTP 200, tek tek açıldı):
--   9/9 temiz → tedarikçi görseli. 121'deki küçük yazı borunun kendi etiketi (filigran değil);
--   124 çizgi çizim (foto değil), YK kabul etti.
-- Cihaz/parça: src/pazar-sozluk.js slug'ları (test: src/katalog-173c2-sql.test.js).
-- `kaynak` sütunu tabloda YOK (yalnız belge amaçlı, insert'e girmez).
-- Hukuk: iade/cayma sayfasına baca istisnası aynı PR'da (scripts/pazar-hukuk.mjs, taslak, avukat).
--
-- Çalıştırma: Supabase SQL Editor. Kod değişikliği yok (iade metni hariç).
-- Tekrar çalıştırılabilir: aynı başlıklı Benservis ürünü varsa atlanır.
with bs as (select id from public.saticilar where tur = 'benservis' limit 1),
v(baslik, aciklama, fiyat, gorsel_url, stok, parca_turu, cihaz_turu, kaynak) as (values
  ('50 cm Hermetik Kombi / Şofben Baca Uzatma Borusu (Markasız) (hbacab50)', 'Tedarikçiden doğrudan gönderilir; tahmini 3 iş gününde kargoda. Hermetik ve yoğuşmalı kombi bacaları birbirine uymaz; sipariş öncesi kombi tipinizi teyit edin. Montaj yalnız yetkili servis ya da tesisatçı tarafından yapılmalıdır. İade yalnız ambalajı açılmamış üründe geçerlidir.', 609, 'https://static.ticimax.cloud/36657/uploads/urunresimleri/buyuk/50-cm-hermetik-kombi-sofben-baca-uzatm-2-4164.jpg', 10, 'hortum-boru-baca', 'kombi-termosifon', 'https://www.kombitesisatmarket.com/hermetik-baca-uzatma-borusu-50-cm'),
  ('100 cm Hermetik Kombi / Şofben Baca Uzatma Borusu (Markasız) (hbacab100)', 'Tedarikçiden doğrudan gönderilir; tahmini 3 iş gününde kargoda. Hermetik ve yoğuşmalı kombi bacaları birbirine uymaz; sipariş öncesi kombi tipinizi teyit edin. Montaj yalnız yetkili servis ya da tesisatçı tarafından yapılmalıdır. İade yalnız ambalajı açılmamış üründe geçerlidir.', 1449, 'https://static.ticimax.cloud/36657/uploads/urunresimleri/buyuk/100-cm-hermetik-kombi-sofben-baca-uzat-1-ac3e.jpg', 9, 'hortum-boru-baca', 'kombi-termosifon', 'https://www.kombitesisatmarket.com/hermetik-baca-uzatma-borusu-100-cm'),
  ('50 cm Yoğuşmalı Kombi Baca Uzatma Borusu (Markasız) (ybacab50)', 'Tedarikçiden doğrudan gönderilir; tahmini 3 iş gününde kargoda. Hermetik ve yoğuşmalı kombi bacaları birbirine uymaz; sipariş öncesi kombi tipinizi teyit edin. Montaj yalnız yetkili servis ya da tesisatçı tarafından yapılmalıdır. İade yalnız ambalajı açılmamış üründe geçerlidir.', 609, 'https://static.ticimax.cloud/36657/uploads/urunresimleri/buyuk/50-cm-yogusmali-kombi-baca-uzatma-boru-99ac9d.jpg', 10, 'hortum-boru-baca', 'kombi-termosifon', 'https://www.kombitesisatmarket.com/yogusmali-baca-uzatma-borusu-50-cm'),
  ('100 cm Yoğuşmalı Kombi Baca Uzatma Borusu (Markasız) (ybacab100)', 'Tedarikçiden doğrudan gönderilir; tahmini 3 iş gününde kargoda. Hermetik ve yoğuşmalı kombi bacaları birbirine uymaz; sipariş öncesi kombi tipinizi teyit edin. Montaj yalnız yetkili servis ya da tesisatçı tarafından yapılmalıdır. İade yalnız ambalajı açılmamış üründe geçerlidir.', 1029, 'https://static.ticimax.cloud/36657/uploads/urunresimleri/buyuk/100-cm-yogusmali-kombi-baca-uzatma-bor-6-b3c6.jpg', 10, 'hortum-boru-baca', 'kombi-termosifon', 'https://www.kombitesisatmarket.com/yogusmali-baca-uzatma-borusu-100-cm'),
  ('Hermetik Baca Dirseği - 90 Derece (İçi Alüminyum) (hbacad90)', 'Tedarikçiden doğrudan gönderilir; tahmini 3 iş gününde kargoda. Hermetik ve yoğuşmalı kombi bacaları birbirine uymaz; sipariş öncesi kombi tipinizi teyit edin. Montaj yalnız yetkili servis ya da tesisatçı tarafından yapılmalıdır. İade yalnız ambalajı açılmamış üründe geçerlidir.', 789, 'https://static.ticimax.cloud/36657/uploads/urunresimleri/buyuk/hermetik-baca-dirsegi-90-derece-ici-al-6-c8cd.jpg', 1, 'hortum-boru-baca', 'kombi-termosifon', 'https://www.kombitesisatmarket.com/urun/hermetik-baca-dirsegi-ici-aluminyum'),
  ('Yoğuşmalı Baca Dirseği 90 Derece - (İçi Plastik) (ybacad90)', 'Tedarikçiden doğrudan gönderilir; tahmini 3 iş gününde kargoda. Hermetik ve yoğuşmalı kombi bacaları birbirine uymaz; sipariş öncesi kombi tipinizi teyit edin. Montaj yalnız yetkili servis ya da tesisatçı tarafından yapılmalıdır. İade yalnız ambalajı açılmamış üründe geçerlidir.', 909, 'https://static.ticimax.cloud/36657/uploads/urunresimleri/buyuk/yogusmali-baca-dirsegi-90-derece-ici-p-3-b979.jpg', 10, 'hortum-boru-baca', 'kombi-termosifon', 'https://www.kombitesisatmarket.com/urun/yogusmali-baca-dirsegi-90-derece-ici-plastik'),
  ('Yoğuşmalı Baca Dirseği 45 Derece - (İçi Plastik) (ybacad45)', 'Tedarikçiden doğrudan gönderilir; tahmini 3 iş gününde kargoda. Hermetik ve yoğuşmalı kombi bacaları birbirine uymaz; sipariş öncesi kombi tipinizi teyit edin. Montaj yalnız yetkili servis ya da tesisatçı tarafından yapılmalıdır. İade yalnız ambalajı açılmamış üründe geçerlidir.', 849, 'https://static.ticimax.cloud/36657/uploads/urunresimleri/buyuk/yogusmali-baca-dirsegi-45-derece-ici-p-19ee04.jpg', 10, 'hortum-boru-baca', 'kombi-termosifon', 'https://www.kombitesisatmarket.com/urun/yogusmali-baca-dirsegi-45-derece-ici-plastik'),
  ('Baymak Flanşlı Premix Yatay Baca Seti (byset-100023243)', 'Tedarikçiden doğrudan gönderilir; tahmini 3 iş gününde kargoda. Uyumlu model bilgisini sipariş öncesi teyit edin. Hermetik ve yoğuşmalı kombi bacaları birbirine uymaz; sipariş öncesi kombi tipinizi teyit edin. Montaj yalnız yetkili servis ya da tesisatçı tarafından yapılmalıdır. İade yalnız ambalajı açılmamış üründe geçerlidir.', 2409, 'https://static.ticimax.cloud/36657/uploads/urunresimleri/buyuk/baymak-flansli-premix-yatay-baca-seti-86b3a2.jpg', 9, 'hortum-boru-baca', 'kombi-termosifon', 'https://www.kombitesisatmarket.com/baymak-flansli-premix-yatay-baca-seti'),
  ('Daikin Yoğuşmalı Kombi Yatay Baca Seti (flanşlı) (DAI YKBA01)', 'Tedarikçiden doğrudan gönderilir; tahmini 3 iş gününde kargoda. Uyumlu model bilgisini sipariş öncesi teyit edin. Hermetik ve yoğuşmalı kombi bacaları birbirine uymaz; sipariş öncesi kombi tipinizi teyit edin. Montaj yalnız yetkili servis ya da tesisatçı tarafından yapılmalıdır. İade yalnız ambalajı açılmamış üründe geçerlidir.', 1529, 'https://cdn.qukasoft.com/f/813148/b01DVUoyVTArYkI4Tmk4Z0dNOXJKYjhQSVl5OA/p/daikin-premix-yogusmali-kombi-yatay-baca-seti-flansli-1-32221847-sw1920sh1164.webp', 10, 'hortum-boru-baca', 'kombi-termosifon', 'https://www.e-mekanik.com/urun/daikin-yogusmali-kombi-yatay-baca-seti-flansli')
)
insert into public.servis_urunler
  (satici_id, tip, tur, kategori, baslik, aciklama, fiyat, gorsel_url, durum, stok, parca_turu, cihaz_turu, parca_durum)
select bs.id, 'yedek_parca', 'parca', 'yedek-parca', v.baslik, v.aciklama, v.fiyat, v.gorsel_url,
       'aktif', v.stok, v.parca_turu, v.cihaz_turu, 'yeni'
from v cross join bs
where not exists (
  select 1 from public.servis_urunler su where su.satici_id = bs.id and su.baslik = v.baslik
);

-- Doğrulama: aktif Benservis yedek parça 99 → 108; baca süzgeci 1 → 10.
-- select count(*) from public.servis_urunler u join public.saticilar s on s.id = u.satici_id
--  where s.tur = 'benservis' and u.kategori = 'yedek-parca' and u.durum = 'aktif';   -- → 108
-- select count(*) from public.servis_urunler
--  where durum = 'aktif' and cihaz_turu = 'kombi-termosifon' and parca_turu = 'hortum-boru-baca';  -- → 10 (önce 1: termosifon spiral hortum)
-- select baslik, stok from public.servis_urunler where baslik like '%Baca%' or baslik like '%baca%' order by baslik;  -- 9 satır, stok 118:1 · 115:9 · 121:9

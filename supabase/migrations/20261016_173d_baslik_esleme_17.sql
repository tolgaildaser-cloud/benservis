-- 16 Eki 2026 · YK #173 (d-ek2) — 17 yeni yedek parçaya ARANAN GENEL AD (PAZ BASLIK-ESLEME.csv, 16 Eki 07:0x).
-- Kapsam: CSV'nin son 17 satırı — 8 uygunparca.com (13 Eki, #307 ile eklendi) + 9 kombi baca (15 Eki, #321).
-- Kaynak: benservis-icerik/pazar/BASLIK-ESLEME.csv (108 veri satırı, md5 7728da48…). İlk 91 satır #307 ile uygulandı.
-- Biçim #307 ile aynı: "Aranan genel ad — Marka uyumlu (kod, ayırt edici)"; eski başlık aciklama'nın BAŞINA " · " ile.
-- FE doğrulaması 16 Eki 08:1x: 17 urun_id canlı /api/urun/<id>'de bulundu, 17/17 bugünkü başlık birebir, 17/17 durum='aktif'.
--
-- Çalıştırma: Supabase SQL Editor, TEK SEFER. Kod değişikliği yok.
-- Tekrar çalıştırılabilir: her update `baslik = <eski>` şartıyla; ikinci koşuda hiçbir satır değişmez.
begin;

update public.servis_urunler set baslik = 'Su arıtma filtresi — Üniversal (inline 12'''' sediment)', aciklama = 'Inline 12'''' Sediment Su Arıtma Filtresi' || ' · ' || coalesce(aciklama, '')
  where id = '9b5c2d6d-a2a6-440f-9d51-faf75cc1080f' and baslik = 'Inline 12'''' Sediment Su Arıtma Filtresi' and baslik <> 'Su arıtma filtresi — Üniversal (inline 12'''' sediment)';
update public.servis_urunler set baslik = 'Termosifon spiral hortum — Arçelik uyumlu (9170100107, 250 mm)', aciklama = 'Arçelik Termosifon Spiral Hortum 250 mm - 9170100107' || ' · ' || coalesce(aciklama, '')
  where id = 'a2f950b7-0bf8-4130-a4b3-3a20d44aa60f' and baslik = 'Arçelik Termosifon Spiral Hortum 250 mm - 9170100107' and baslik <> 'Termosifon spiral hortum — Arçelik uyumlu (9170100107, 250 mm)';
update public.servis_urunler set baslik = 'Mikrodalga cam tepsi — Üniversal (17477)', aciklama = 'Mikrodalga Fırın Cam Tepsi - 17477' || ' · ' || coalesce(aciklama, '')
  where id = 'b941fd31-bc8b-453a-925a-8654bb7450f8' and baslik = 'Mikrodalga Fırın Cam Tepsi - 17477' and baslik <> 'Mikrodalga cam tepsi — Üniversal (17477)';
update public.servis_urunler set baslik = 'Fırın kapak camı — Arçelik ankastre uyumlu (210480587)', aciklama = 'Arçelik Ankastre Fırın Kapak Camı - 210480587' || ' · ' || coalesce(aciklama, '')
  where id = '8f15690b-0b99-49af-aec8-e86cc809d4a6' and baslik = 'Arçelik Ankastre Fırın Kapak Camı - 210480587' and baslik <> 'Fırın kapak camı — Arçelik ankastre uyumlu (210480587)';
update public.servis_urunler set baslik = 'Doğalgaz kombi flex hortum — Üniversal (5970512, 100 cm 1/2-1/2)', aciklama = 'Universal Doğalgaz Kombi Flex Hortumu - 100CM 1/2-1/2 - 5970512' || ' · ' || coalesce(aciklama, '')
  where id = '9c418ac0-6250-4b67-94fe-ef8c5b7a83e5' and baslik = 'Universal Doğalgaz Kombi Flex Hortumu - 100CM 1/2-1/2 - 5970512' and baslik <> 'Doğalgaz kombi flex hortum — Üniversal (5970512, 100 cm 1/2-1/2)';
update public.servis_urunler set baslik = 'Aspiratör tel filtre — Üniversal ankastre davlumbaz (276×219 mm)', aciklama = 'Ankastre Davlumbaz Tel Filtre - 276x219 mm' || ' · ' || coalesce(aciklama, '')
  where id = 'c7c16658-4ae1-46de-92a8-7db81441909e' and baslik = 'Ankastre Davlumbaz Tel Filtre - 276x219 mm' and baslik <> 'Aspiratör tel filtre — Üniversal ankastre davlumbaz (276×219 mm)';
update public.servis_urunler set baslik = 'Vestel klima filtresi — Vestel uyumlu (42148439)', aciklama = 'Vestel Klima Hava Filtresi - 42148439' || ' · ' || coalesce(aciklama, '')
  where id = '76baf727-87bb-4baa-b4dc-308a8ef7ee35' and baslik = 'Vestel Klima Hava Filtresi - 42148439' and baslik <> 'Vestel klima filtresi — Vestel uyumlu (42148439)';
update public.servis_urunler set baslik = 'Buzdolabı sebzelik camı — Vestel uyumlu (47004949, üst cam raf)', aciklama = 'Vestel Buzdolabı Sebzelik Üst Cam Raf - 47004949' || ' · ' || coalesce(aciklama, '')
  where id = '80742aa0-bb83-4f75-9bb7-0f17fd1aaff3' and baslik = 'Vestel Buzdolabı Sebzelik Üst Cam Raf - 47004949' and baslik <> 'Buzdolabı sebzelik camı — Vestel uyumlu (47004949, üst cam raf)';
update public.servis_urunler set baslik = 'Kombi baca uzatma borusu — Üniversal hermetik kombi/şofben (hbacab50, 50 cm)', aciklama = '50 cm Hermetik Kombi / Şofben Baca Uzatma Borusu (Markasız) (hbacab50)' || ' · ' || coalesce(aciklama, '')
  where id = 'e4abd954-19ff-4c8d-9d59-5b54de3488b3' and baslik = '50 cm Hermetik Kombi / Şofben Baca Uzatma Borusu (Markasız) (hbacab50)' and baslik <> 'Kombi baca uzatma borusu — Üniversal hermetik kombi/şofben (hbacab50, 50 cm)';
update public.servis_urunler set baslik = 'Kombi baca uzatma borusu — Üniversal yoğuşmalı kombi (ybacab50, 50 cm)', aciklama = '50 cm Yoğuşmalı Kombi Baca Uzatma Borusu (Markasız) (ybacab50)' || ' · ' || coalesce(aciklama, '')
  where id = 'f6dc2313-c5b3-4323-884c-1376a2425b7c' and baslik = '50 cm Yoğuşmalı Kombi Baca Uzatma Borusu (Markasız) (ybacab50)' and baslik <> 'Kombi baca uzatma borusu — Üniversal yoğuşmalı kombi (ybacab50, 50 cm)';
update public.servis_urunler set baslik = 'Kombi baca uzatma borusu — Üniversal hermetik kombi/şofben (hbacab100, 100 cm)', aciklama = '100 cm Hermetik Kombi / Şofben Baca Uzatma Borusu (Markasız) (hbacab100)' || ' · ' || coalesce(aciklama, '')
  where id = 'b9fc8a42-ad22-461e-9dfd-95604f46d73e' and baslik = '100 cm Hermetik Kombi / Şofben Baca Uzatma Borusu (Markasız) (hbacab100)' and baslik <> 'Kombi baca uzatma borusu — Üniversal hermetik kombi/şofben (hbacab100, 100 cm)';
update public.servis_urunler set baslik = 'Kombi baca uzatma borusu — Üniversal yoğuşmalı kombi (ybacab100, 100 cm)', aciklama = '100 cm Yoğuşmalı Kombi Baca Uzatma Borusu (Markasız) (ybacab100)' || ' · ' || coalesce(aciklama, '')
  where id = 'a927c739-d96c-4fed-9118-ab741b5a8fc4' and baslik = '100 cm Yoğuşmalı Kombi Baca Uzatma Borusu (Markasız) (ybacab100)' and baslik <> 'Kombi baca uzatma borusu — Üniversal yoğuşmalı kombi (ybacab100, 100 cm)';
update public.servis_urunler set baslik = 'Baymak yatay baca seti — Baymak premix uyumlu (byset-100023243, flanşlı)', aciklama = 'Baymak Flanşlı Premix Yatay Baca Seti (byset-100023243)' || ' · ' || coalesce(aciklama, '')
  where id = 'edcad0e1-7c46-4af4-a6bb-e4a7d14082d5' and baslik = 'Baymak Flanşlı Premix Yatay Baca Seti (byset-100023243)' and baslik <> 'Baymak yatay baca seti — Baymak premix uyumlu (byset-100023243, flanşlı)';
update public.servis_urunler set baslik = 'Daikin kombi baca seti — Daikin yoğuşmalı uyumlu (DAI YKBA01, yatay, flanşlı)', aciklama = 'Daikin Yoğuşmalı Kombi Yatay Baca Seti (flanşlı) (DAI YKBA01)' || ' · ' || coalesce(aciklama, '')
  where id = '4af1a2e5-f6f5-4f5f-9e9e-70737fa4b62a' and baslik = 'Daikin Yoğuşmalı Kombi Yatay Baca Seti (flanşlı) (DAI YKBA01)' and baslik <> 'Daikin kombi baca seti — Daikin yoğuşmalı uyumlu (DAI YKBA01, yatay, flanşlı)';
update public.servis_urunler set baslik = 'Kombi baca dirseği 90 derece — Üniversal hermetik (hbacad90, içi alüminyum)', aciklama = 'Hermetik Baca Dirseği - 90 Derece (İçi Alüminyum) (hbacad90)' || ' · ' || coalesce(aciklama, '')
  where id = '5137aa06-1ffa-493a-9e22-d7302d4ed384' and baslik = 'Hermetik Baca Dirseği - 90 Derece (İçi Alüminyum) (hbacad90)' and baslik <> 'Kombi baca dirseği 90 derece — Üniversal hermetik (hbacad90, içi alüminyum)';
update public.servis_urunler set baslik = 'Kombi baca dirseği 45 derece — Üniversal yoğuşmalı (ybacad45, içi plastik)', aciklama = 'Yoğuşmalı Baca Dirseği 45 Derece - (İçi Plastik) (ybacad45)' || ' · ' || coalesce(aciklama, '')
  where id = '1bd61d6d-e0ca-4234-9bf6-d9ecdd48c32f' and baslik = 'Yoğuşmalı Baca Dirseği 45 Derece - (İçi Plastik) (ybacad45)' and baslik <> 'Kombi baca dirseği 45 derece — Üniversal yoğuşmalı (ybacad45, içi plastik)';
update public.servis_urunler set baslik = 'Kombi baca dirseği 90 derece — Üniversal yoğuşmalı (ybacad90, içi plastik)', aciklama = 'Yoğuşmalı Baca Dirseği 90 Derece - (İçi Plastik) (ybacad90)' || ' · ' || coalesce(aciklama, '')
  where id = 'f5514e52-9f9f-466c-8d4a-52dd9bfc9a24' and baslik = 'Yoğuşmalı Baca Dirseği 90 Derece - (İçi Plastik) (ybacad90)' and baslik <> 'Kombi baca dirseği 90 derece — Üniversal yoğuşmalı (ybacad90, içi plastik)';
commit;

-- Doğrulama (#307'den sonra 89 → bu dosyadan sonra 106 bekleniyor; aranan_ad boş 2 satır hariç):
-- select count(*) from public.servis_urunler
--  where kategori = 'yedek-parca' and durum = 'aktif' and baslik like '% — %';   -- → 106
-- Tekrar koşu kontrolü: aynı dosya ikinci kez çalışınca "UPDATE 0" × 17.

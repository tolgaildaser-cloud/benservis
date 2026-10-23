-- 23 Eki 2026 · Pazar fiyat düzeltmesi + Bosch genleşme tankı satıştan kalkar (kayıt silinmez).
-- Tolga (23 Eki, YK8 oturumu, birebir): "Bosch genleşme tankını satıştan kaldır, iki fiyatı 909 ve 609 yap; SQL'i hazırlat".
-- Kaynak: yonetim-kurulu/kontrolor/2026-10-23-ek-pazar-fiyat-denetimi.md. YK 23 Eki'de tedarikçi sayfalarını yeniden okudu:
-- şişe rafı tedarikçide 750 TL (KDV dahil), rulman 500 TL, tank sayfası 404.
-- Yeni fiyatlar: 750 × 1,20 = 900 → sonu 9'a yukarı 909 · 500 × 1,20 = 600 → 609 (KDV dahil, #167 +%20 kuralı).
--
-- ⚠️ ÇALIŞTIRAN: Tolga, Supabase SQL Editor'da TEK SEFERDE. FE canlı DB'ye yazmaz.
-- Kayıtlar FE'nin 23 Eki 09:49'da canlı /api/pazar/liste'den okuduğu id + başlık + ESKİ değerle eşleştirilir.
-- Her UPDATE tam 1 satıra dokunmazsa RAISE EXCEPTION → transaction'ın tamamı geri alınır, hiçbir satır değişmez.
-- Dosya tekrar çalıştırılırsa eski değer artık tutmadığı için ilk UPDATE 0 satır bulur ve hata verir. Bu kasıtlı; çift uygulama olmaz.

begin;

do $$
declare n int;
begin
  -- 1) Buzdolabı şişe rafı — Arçelik uyumlu (eski başlık "Arçelik Buzdolabı Kapı Şişe Rafı"): 729 → 909
  update public.servis_urunler
     set fiyat = 909
   where id = '2b9653c3-32b2-4eb8-a7c7-cd59866988e4'
     and baslik = 'Buzdolabı şişe rafı — Arçelik uyumlu'
     and satici_id = '5a992351-d4df-489f-b1ab-71e7bdaefb1e'
     and fiyat = 729;
  get diagnostics n = row_count;
  if n <> 1 then raise exception 'şişe rafı: % satır (1 bekleniyordu) — geri alındı', n; end if;

  -- 2) Çamaşır makinesi rulman — Vestel uyumlu (takım) (eski başlık "Vestel Çamaşır Makinesi Rulman Takımı"): 519 → 609
  update public.servis_urunler
     set fiyat = 609
   where id = '37fe473f-1768-4690-80cf-fb70b798121b'
     and baslik = 'Çamaşır makinesi rulman — Vestel uyumlu (takım)'
     and satici_id = '5a992351-d4df-489f-b1ab-71e7bdaefb1e'
     and fiyat = 519;
  get diagnostics n = row_count;
  if n <> 1 then raise exception 'rulman: % satır (1 bekleniyordu) — geri alındı', n; end if;

  -- 3) Kombi genleşme tankı — Bosch uyumlu (eski başlık "Bosch Kombi Termodinamik Genleşme Tankı 1/2"): aktif → pasif (silinmez)
  update public.servis_urunler
     set durum = 'pasif'
   where id = '0148ea9e-1613-4b84-b060-d4caa6bf602b'
     and baslik = 'Kombi genleşme tankı — Bosch uyumlu'
     and satici_id = '5a992351-d4df-489f-b1ab-71e7bdaefb1e'
     and durum = 'aktif';
  get diagnostics n = row_count;
  if n <> 1 then raise exception 'genleşme tankı: % satır (1 bekleniyordu) — geri alındı', n; end if;
end $$;

commit;

-- Doğrulama (beklenen: şişe rafı 909 aktif · rulman 609 aktif · genleşme tankı 1929 pasif)
select id, baslik, fiyat, durum
  from public.servis_urunler
 where id in ('2b9653c3-32b2-4eb8-a7c7-cd59866988e4',
              '37fe473f-1768-4690-80cf-fb70b798121b',
              '0148ea9e-1613-4b84-b060-d4caa6bf602b')
 order by baslik;

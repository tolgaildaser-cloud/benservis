-- YK #171 İE-2 · 11 Eki 2026 · İkinci el demo ilanlarını aç (yeni /ikinci-el vitrini ile)
-- Tolga (11 Eki 11:5x, YK notu): "yer tutucu fiyatlarla aç" — 18.999 / 24.999 TL; üretim yılı ve
-- kullanım süresi boş kalır (vitrin boş alanı yazmaz).
--
-- PR merge olup Vercel'de canlıya çıktıktan SONRA çalıştırılır: önce çalışırsa iki demo eski
-- /ikinci-el ekranında (DOD tipi olmayan) görünür.
--
-- ① TV'nin cihaz türü vitrin sözlüğüyle aynı slug olur ('televizyon' → 'televizyon-monitor').
update public.ilanlar set cihaz_turu = 'televizyon-monitor'
 where demo = true and cihaz_id is not null and cihaz_turu = 'televizyon';

-- ② İki demo ilan aktif.
update public.ilanlar set durum = 'aktif'
 where demo = true and cihaz_id is not null and durum = 'pasif';

-- Doğrulama: 2 satır, ikisi de aktif, seri_no boş.
-- select dosya_no, durum, cihaz_turu, seri_no from public.ilanlar where demo = true order by dosya_no;

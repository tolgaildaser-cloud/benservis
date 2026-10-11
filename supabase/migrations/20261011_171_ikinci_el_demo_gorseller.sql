-- YK #171 · 11 Eki 2026 · İkinci el demo ilanlarına 2'şer görsel
-- Tolga (11 Eki ~13:1x): "demo ürünlerin 2şer pexelsden bul görseli olsun" → "GRF yapsın".
-- Görseller GRF teslimi (Pexels, logolar temizlendi); sitede public/ikinci-el-demo/ altında.
-- Temsili görsel: ürünün kendi fotoğrafı değil (kaynak public/ikinci-el-demo/KAYNAK.txt).
--
-- PR merge olup canlıya çıktıktan SONRA çalıştırılır (önce çalışırsa görseller 404 olur).
update public.ilanlar
   set fotograflar = array['/ikinci-el-demo/BS-2E-000003-1.webp', '/ikinci-el-demo/BS-2E-000003-2.webp']
 where dosya_no = 'BS-2E-000003' and demo = true;

update public.ilanlar
   set fotograflar = array['/ikinci-el-demo/BS-2E-000004-1.webp', '/ikinci-el-demo/BS-2E-000004-2.webp']
 where dosya_no = 'BS-2E-000004' and demo = true;

-- Doğrulama: 2 satır, ikisinde de 2 görsel.
-- select dosya_no, array_length(fotograflar, 1) from public.ilanlar where demo = true order by dosya_no;

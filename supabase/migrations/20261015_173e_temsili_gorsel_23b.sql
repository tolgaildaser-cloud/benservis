-- 15 Eki 2026 · YK #173 (e) — temsili ürün görseli, 2. parti (23/46; toplam 46/46). GRF teslimi 14–15 Eki:
-- ~/Desktop/benservis-icerik/pazar/gorseller/<urun_id>.webp (GORSELSIZ-46.csv durum ✅). Kalıp: 20261013_173e_temsili_gorsel_23.sql (PR #310).
-- FE eşleme 15 Eki 08:3x: 23 id'nin 23'ü canlı /api/urun/<id>'de aktif ve gorsel_url null; başlıklar CSV ile birebir.
-- FE görsel denetimi: 23/23 1000×1000 webp, ≤51 KB, yazı/logo/filigran yok.
--
-- Çalıştırma: Supabase SQL Editor, MERGE SONRASI (görsel dosyası canlıda olmadan yol yazılırsa kırık
-- görsel çıkar). Yalnız hâlâ görselsiz (gorsel_url is null) ürün güncellenir; tekrar çalıştırılabilir.
begin;
update public.servis_urunler set gorsel_url = '/pazar-gorsel/0d73b1ee-a1ad-423f-94cb-16794aafce64.webp' where id = '0d73b1ee-a1ad-423f-94cb-16794aafce64' and gorsel_url is null; -- Kombi pompası — Üniversal (Grundfos 15-60)
update public.servis_urunler set gorsel_url = '/pazar-gorsel/12068b30-ea4f-4b4b-a543-9917f6c9fc17.webp' where id = '12068b30-ea4f-4b4b-a543-9917f6c9fc17' and gorsel_url is null; -- Fırın rezistansı — Arçelik uyumlu (turbo/fan)
update public.servis_urunler set gorsel_url = '/pazar-gorsel/34d4ad82-3660-4763-9280-98eb2dcd1f6c.webp' where id = '34d4ad82-3660-4763-9280-98eb2dcd1f6c' and gorsel_url is null; -- Davlumbaz motoru — Arçelik uyumlu (9189204764)
update public.servis_urunler set gorsel_url = '/pazar-gorsel/3bb89cbd-70ce-4c7b-8863-f8952c228df2.webp' where id = '3bb89cbd-70ce-4c7b-8863-f8952c228df2' and gorsel_url is null; -- Klima su tahliye hortumu — Üniversal
update public.servis_urunler set gorsel_url = '/pazar-gorsel/49c86737-12aa-448b-a87a-1f39710a228c.webp' where id = '49c86737-12aa-448b-a87a-1f39710a228c' and gorsel_url is null; -- Termosifon rezistansı — Demirdöküm uyumlu
update public.servis_urunler set gorsel_url = '/pazar-gorsel/5434aca4-b67b-44be-a61e-1aa695a007e8.webp' where id = '5434aca4-b67b-44be-a61e-1aa695a007e8' and gorsel_url is null; -- Kombi contası — Baymak uyumlu (plaka eşanjör)
update public.servis_urunler set gorsel_url = '/pazar-gorsel/600a259b-855f-42b7-9e96-399a4f5a2c0c.webp' where id = '600a259b-855f-42b7-9e96-399a4f5a2c0c' and gorsel_url is null; -- Ocak ızgarası — Arçelik uyumlu (ocak gözü)
update public.servis_urunler set gorsel_url = '/pazar-gorsel/65f88547-3111-4b28-8b52-3740c1d65c25.webp' where id = '65f88547-3111-4b28-8b52-3740c1d65c25' and gorsel_url is null; -- Kombi vanası — Vaillant uyumlu (su doldurma)
update public.servis_urunler set gorsel_url = '/pazar-gorsel/6e1e095f-3d35-4604-ba3d-9a8c32edd783.webp' where id = '6e1e095f-3d35-4604-ba3d-9a8c32edd783' and gorsel_url is null; -- Su sebili termostat — Arçelik uyumlu
update public.servis_urunler set gorsel_url = '/pazar-gorsel/71662e96-884e-49ed-86dd-de07e9263192.webp' where id = '71662e96-884e-49ed-86dd-de07e9263192' and gorsel_url is null; -- Süpürge hortumu — Philips uyumlu
update public.servis_urunler set gorsel_url = '/pazar-gorsel/77ac580a-3273-42d7-ad8e-f9ec3a41d5fd.webp' where id = '77ac580a-3273-42d7-ad8e-f9ec3a41d5fd' and gorsel_url is null; -- Kurutma makinesi tahliye hortumu — Arçelik uyumlu (pompa-su tankı hortumu)
update public.servis_urunler set gorsel_url = '/pazar-gorsel/7ceb9194-7680-4bbe-a108-544b2bd8e471.webp' where id = '7ceb9194-7680-4bbe-a108-544b2bd8e471' and gorsel_url is null; -- Klima drenaj pompası — Üniversal
update public.servis_urunler set gorsel_url = '/pazar-gorsel/7fa76d69-c8ba-4f96-b653-7836377e4965.webp' where id = '7fa76d69-c8ba-4f96-b653-7836377e4965' and gorsel_url is null; -- Fırın tepsisi — Arçelik uyumlu
update public.servis_urunler set gorsel_url = '/pazar-gorsel/99623d69-84e6-457c-a785-eb806ac23d88.webp' where id = '99623d69-84e6-457c-a785-eb806ac23d88' and gorsel_url is null; -- Ocak düğmesi — Arçelik uyumlu
update public.servis_urunler set gorsel_url = '/pazar-gorsel/9c418ac0-6250-4b67-94fe-ef8c5b7a83e5.webp' where id = '9c418ac0-6250-4b67-94fe-ef8c5b7a83e5' and gorsel_url is null; -- Universal Doğalgaz Kombi Flex Hortumu - 100CM 1/2-1/2 - 5970512
update public.servis_urunler set gorsel_url = '/pazar-gorsel/ae282abb-2665-49f3-80b0-1c10cbb6d75a.webp' where id = 'ae282abb-2665-49f3-80b0-1c10cbb6d75a' and gorsel_url is null; -- Klima bakır boru — Üniversal (1/4-3/8, 5 m)
update public.servis_urunler set gorsel_url = '/pazar-gorsel/b508f99c-0b49-4ad4-9de2-e598aaf357a6.webp' where id = 'b508f99c-0b49-4ad4-9de2-e598aaf357a6' and gorsel_url is null; -- Süpürge filtresi — Philips uyumlu (HEPA)
update public.servis_urunler set gorsel_url = '/pazar-gorsel/b7648f71-1262-4dfe-8985-85a4b3759b93.webp' where id = 'b7648f71-1262-4dfe-8985-85a4b3759b93' and gorsel_url is null; -- Kombi NTC sensörü — Beko uyumlu
update public.servis_urunler set gorsel_url = '/pazar-gorsel/c07cfcda-d413-4396-8f37-c96191c79a46.webp' where id = 'c07cfcda-d413-4396-8f37-c96191c79a46' and gorsel_url is null; -- Kombi vanası — Auer uyumlu (su doldurma)
update public.servis_urunler set gorsel_url = '/pazar-gorsel/c952a43a-ece6-469c-857e-5e4cf232f0fc.webp' where id = 'c952a43a-ece6-469c-857e-5e4cf232f0fc' and gorsel_url is null; -- Kombi NTC sensörü — Demirdöküm uyumlu
update public.servis_urunler set gorsel_url = '/pazar-gorsel/d265bd35-ac5e-4e09-b54c-766b2f2fbfab.webp' where id = 'd265bd35-ac5e-4e09-b54c-766b2f2fbfab' and gorsel_url is null; -- Ocak ızgarası — Arçelik uyumlu
update public.servis_urunler set gorsel_url = '/pazar-gorsel/ec97d70b-6db4-4ea6-a4c8-fbdc693082ea.webp' where id = 'ec97d70b-6db4-4ea6-a4c8-fbdc693082ea' and gorsel_url is null; -- Süpürge hortumu — Arçelik uyumlu
update public.servis_urunler set gorsel_url = '/pazar-gorsel/fc86fb73-6511-47c3-9a3c-5d4704d915c0.webp' where id = 'fc86fb73-6511-47c3-9a3c-5d4704d915c0' and gorsel_url is null; -- Klima bakır boru — Üniversal (3/8-5/8)
commit;

-- Doğrulama: 46 dönmeli (1. parti 23 + bu dosya 23).
-- select count(*) from public.servis_urunler where gorsel_url like '/pazar-gorsel/%';
-- Görselsiz aktif yedek parça kalmamalı (101 doğalgaz flex hortumu dahil):
-- select count(*) from public.servis_urunler where kategori = 'yedek-parca' and durum = 'aktif' and gorsel_url is null;  -- → 0

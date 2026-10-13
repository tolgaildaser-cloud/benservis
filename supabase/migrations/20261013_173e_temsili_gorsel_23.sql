-- 13 Eki 2026 · YK #173 (e) — temsili ürün görseli, 1. parti (23/46). GRF teslimi:
-- ~/Desktop/benservis-icerik/pazar/gorseller/<urun_id>.webp (GORSELSIZ-46.csv durum ✅). Dosyalar
-- public/pazar-gorsel/<urun_id>.webp olarak PR'da; sayfada "Temsili görsel" rozeti yol önekinden çıkar
-- (src/pazar-gorsel.js). Kalan 23 görsel ikinci partide aynı kalıpla gelir.
--
-- Çalıştırma: Supabase SQL Editor, MERGE SONRASI (görsel dosyası canlıda olmadan yol yazılırsa kırık
-- görsel çıkar). Yalnız hâlâ görselsiz (gorsel_url is null) ürün güncellenir; tekrar çalıştırılabilir.
begin;
update public.servis_urunler set gorsel_url = '/pazar-gorsel/e8dad51d-d9ff-41c1-954b-8f01f3c3608a.webp' where id = 'e8dad51d-d9ff-41c1-954b-8f01f3c3608a' and gorsel_url is null; -- Bulaşık makinesi üst pervane — Arçelik uyumlu
update public.servis_urunler set gorsel_url = '/pazar-gorsel/90c8e81c-ecb4-4ce6-9c9f-ba01ca876e11.webp' where id = '90c8e81c-ecb4-4ce6-9c9f-ba01ca876e11' and gorsel_url is null; -- Bulaşık makinesi gider hortumu — Arçelik uyumlu (44 cm)
update public.servis_urunler set gorsel_url = '/pazar-gorsel/4d4a229b-062d-43d5-ac05-884f49260840.webp' where id = '4d4a229b-062d-43d5-ac05-884f49260840' and gorsel_url is null; -- Bulaşık makinesi şebeke hortumu — Arçelik uyumlu (aquastop)
update public.servis_urunler set gorsel_url = '/pazar-gorsel/e5d54d0b-ecda-4a3d-a8dc-553da8c855a9.webp' where id = 'e5d54d0b-ecda-4a3d-a8dc-553da8c855a9' and gorsel_url is null; -- Bulaşık makinesi contası — Arçelik uyumlu
update public.servis_urunler set gorsel_url = '/pazar-gorsel/cd5cdad2-bab9-4ca9-8a5f-e3f8534ca28c.webp' where id = 'cd5cdad2-bab9-4ca9-8a5f-e3f8534ca28c' and gorsel_url is null; -- Bulaşık makinesi çatal kaşık sepeti — Arçelik uyumlu (1751500300)
update public.servis_urunler set gorsel_url = '/pazar-gorsel/00d64f3c-95b1-4af2-a490-c1daf4f48c27.webp' where id = '00d64f3c-95b1-4af2-a490-c1daf4f48c27' and gorsel_url is null; -- Bulaşık makinesi üst sepet — Arçelik uyumlu
update public.servis_urunler set gorsel_url = '/pazar-gorsel/c5a651f1-cee3-47a3-932d-eead9590c3ba.webp' where id = 'c5a651f1-cee3-47a3-932d-eead9590c3ba' and gorsel_url is null; -- Buzdolabı cam raf — Arçelik uyumlu (ön profil)
update public.servis_urunler set gorsel_url = '/pazar-gorsel/9d3771bc-e82c-4c5a-b0a5-bee8f01c3afd.webp' where id = '9d3771bc-e82c-4c5a-b0a5-bee8f01c3afd' and gorsel_url is null; -- Buzdolabı raf örtüsü — Arçelik uyumlu (4305825500, sebzelik)
update public.servis_urunler set gorsel_url = '/pazar-gorsel/7d382b2b-9881-4073-bc83-fa3a352ff6ee.webp' where id = '7d382b2b-9881-4073-bc83-fa3a352ff6ee' and gorsel_url is null; -- Buzdolabı termostat — Beko uyumlu (4328840485, bi-metal)
update public.servis_urunler set gorsel_url = '/pazar-gorsel/6f5eeb64-90b2-49e6-a6a6-d048f5cf91f9.webp' where id = '6f5eeb64-90b2-49e6-a6a6-d048f5cf91f9' and gorsel_url is null; -- Buzdolabı termostat — Vestel uyumlu (eski tip)
update public.servis_urunler set gorsel_url = '/pazar-gorsel/e67a6f4d-eb20-4cff-91f7-0c61934a0d24.webp' where id = 'e67a6f4d-eb20-4cff-91f7-0c61934a0d24' and gorsel_url is null; -- Çamaşır makinesi pompa filtresi — Vestel uyumlu (pompa kapağı)
update public.servis_urunler set gorsel_url = '/pazar-gorsel/c2ff0d50-1236-4cd1-96ae-9d0643eb8f5d.webp' where id = 'c2ff0d50-1236-4cd1-96ae-9d0643eb8f5d' and gorsel_url is null; -- Çamaşır makinesi hortumu — Arçelik uyumlu (kazan su giriş hortumu, 9146 YK)
update public.servis_urunler set gorsel_url = '/pazar-gorsel/7a280455-a681-428f-8f7f-2a04ff9fb94c.webp' where id = '7a280455-a681-428f-8f7f-2a04ff9fb94c' and gorsel_url is null; -- Çamaşır makinesi su hortumu — Üniversal (4 m)
update public.servis_urunler set gorsel_url = '/pazar-gorsel/4be378ab-7ca6-4089-bd2c-19ecdf868d2f.webp' where id = '4be378ab-7ca6-4089-bd2c-19ecdf868d2f' and gorsel_url is null; -- Çamaşır makinesi ayağı — Arçelik uyumlu
update public.servis_urunler set gorsel_url = '/pazar-gorsel/37fe473f-1768-4690-80cf-fb70b798121b.webp' where id = '37fe473f-1768-4690-80cf-fb70b798121b' and gorsel_url is null; -- Çamaşır makinesi rulman — Vestel uyumlu (takım)
update public.servis_urunler set gorsel_url = '/pazar-gorsel/b741e734-03d2-4230-8da8-f07e607a4ceb.webp' where id = 'b741e734-03d2-4230-8da8-f07e607a4ceb' and gorsel_url is null; -- Davlumbaz ampulü — Üniversal
update public.servis_urunler set gorsel_url = '/pazar-gorsel/aeba0788-3e5a-44ce-9207-e21dcffc9dfd.webp' where id = 'aeba0788-3e5a-44ce-9207-e21dcffc9dfd' and gorsel_url is null; -- Fırın lambası — Arçelik uyumlu
update public.servis_urunler set gorsel_url = '/pazar-gorsel/1337d9e8-5f03-41ca-9c04-8ce098d408a6.webp' where id = '1337d9e8-5f03-41ca-9c04-8ce098d408a6' and gorsel_url is null; -- Ocak bujisi — Arçelik uyumlu (268100034)
update public.servis_urunler set gorsel_url = '/pazar-gorsel/864f2254-4376-42af-bdd8-ceb1b5c213b0.webp' where id = '864f2254-4376-42af-bdd8-ceb1b5c213b0' and gorsel_url is null; -- Fırın fanı — Arçelik uyumlu (havalandırma motoru)
update public.servis_urunler set gorsel_url = '/pazar-gorsel/0f66617c-2ff5-4635-a4be-12ab2db56147.webp' where id = '0f66617c-2ff5-4635-a4be-12ab2db56147' and gorsel_url is null; -- Aspiratör karbon filtre — Arçelik uyumlu
update public.servis_urunler set gorsel_url = '/pazar-gorsel/fde1b15d-f3fb-4909-9fde-abe58fd88580.webp' where id = 'fde1b15d-f3fb-4909-9fde-abe58fd88580' and gorsel_url is null; -- Aspiratör karbon filtre — Üniversal (16 cm)
update public.servis_urunler set gorsel_url = '/pazar-gorsel/f1b1f8b2-c006-4c26-8aa0-8161e63afef6.webp' where id = 'f1b1f8b2-c006-4c26-8aa0-8161e63afef6' and gorsel_url is null; -- Fırın düğmesi — Arçelik uyumlu
update public.servis_urunler set gorsel_url = '/pazar-gorsel/1f9df053-2b15-482a-8088-38b679ae65eb.webp' where id = '1f9df053-2b15-482a-8088-38b679ae65eb' and gorsel_url is null; -- Fırın contası — Arçelik uyumlu
commit;

-- Doğrulama: 23 dönmeli.
-- select count(*) from public.servis_urunler where gorsel_url like '/pazar-gorsel/%';

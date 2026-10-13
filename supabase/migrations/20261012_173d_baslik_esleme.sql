-- 12 Eki 2026 · YK #173 (d) — 89 yedek parça başlığına ARANAN GENEL AD (PAZ BASLIK-ESLEME.csv, 13:28).
-- Tolga (12 Eki 11:2x): "ürün başlıklarına aranan ad". Biçim: "Aranan genel ad — Marka uyumlu (kod, ayırt edici)".
-- Kaynak: benservis-icerik/pazar/BASLIK-ESLEME.csv (91 satır) + BASLIK-ESLEME.md. aranan_ad boş 2 satır
-- (Beko bulaşık alt sepet tekerleği · Arçelik buzdolabı çekmece kapağı) DOKUNULMAZ → 89 update.
-- "⚠️ kısmi" işaretli 8 satır da uygulanır; ayırt edici bilgi parantezde başlıkta kalır.
-- Altus döküm ızgara: CSV'deki gibi "Ocak ızgarası döküm — Altus uyumlu (büyük)" (eski "cam koruyucu" eşlemesi düzeltildi).
-- Eski başlık aciklama'nın BAŞINA taşınır (" · " ile); "Uyumlu model bilgisini sipariş öncesi teyit edin" cümlesi korunur.
-- FE doğrulaması 12 Eki 14:0x: 91 urun_id canlı /api/pazar/liste'de bulundu, 91/91 başlık birebir, 91/91 durum='aktif'.
--
-- Çalıştırma: Supabase SQL Editor, TEK SEFER. Kod değişikliği yok.
-- Tekrar çalıştırılabilir: her update `baslik = <eski>` şartıyla; ikinci koşuda hiçbir satır değişmez.
begin;

update public.servis_urunler set baslik = 'Ocak ızgarası döküm — Altus uyumlu (büyük)', aciklama = 'Altus Ocak Döküm Izgara - Büyük' || ' · ' || coalesce(aciklama, '')
  where id = '7b2063ab-429d-4b2d-bbc4-e16da2a51e83' and baslik = 'Altus Ocak Döküm Izgara - Büyük' and baslik <> 'Ocak ızgarası döküm — Altus uyumlu (büyük)';
update public.servis_urunler set baslik = 'Aspiratör karbon filtre — Üniversal (16 cm)', aciklama = 'Aspiratör Karbon Filtre - 16cm' || ' · ' || coalesce(aciklama, '')
  where id = 'fde1b15d-f3fb-4909-9fde-abe58fd88580' and baslik = 'Aspiratör Karbon Filtre - 16cm' and baslik <> 'Aspiratör karbon filtre — Üniversal (16 cm)';
update public.servis_urunler set baslik = 'Fırın ızgara teli — Arçelik uyumlu', aciklama = 'Arçelik Ankastre Fırın Izgara Teli - 36cm x 46cm' || ' · ' || coalesce(aciklama, '')
  where id = '89cf25d9-f2fa-4932-8227-926e67cdb02c' and baslik = 'Arçelik Ankastre Fırın Izgara Teli - 36cm x 46cm' and baslik <> 'Fırın ızgara teli — Arçelik uyumlu';
update public.servis_urunler set baslik = 'Fırın tepsisi — Arçelik uyumlu', aciklama = 'Arçelik Fırın Emaye Tepsi - Orjinal' || ' · ' || coalesce(aciklama, '')
  where id = '7fa76d69-c8ba-4f96-b653-7836377e4965' and baslik = 'Arçelik Fırın Emaye Tepsi - Orjinal' and baslik <> 'Fırın tepsisi — Arçelik uyumlu';
update public.servis_urunler set baslik = 'Ocak ızgarası — Arçelik uyumlu (ocak gözü)', aciklama = 'Arçelik Set Üstü Ocak Gözü Izgara' || ' · ' || coalesce(aciklama, '')
  where id = '600a259b-855f-42b7-9e96-399a4f5a2c0c' and baslik = 'Arçelik Set Üstü Ocak Gözü Izgara' and baslik <> 'Ocak ızgarası — Arçelik uyumlu (ocak gözü)';
update public.servis_urunler set baslik = 'Fırın ampülü — Üniversal', aciklama = 'Fırın Ampülü - 300°' || ' · ' || coalesce(aciklama, '')
  where id = 'a58803ff-40a4-460e-b59e-f3cda7ca3b8a' and baslik = 'Fırın Ampülü - 300°' and baslik <> 'Fırın ampülü — Üniversal';
update public.servis_urunler set baslik = 'Fırın düğmesi — Arçelik uyumlu', aciklama = 'Arçelik Ankastre Fırın Düğmesi' || ' · ' || coalesce(aciklama, '')
  where id = 'f1b1f8b2-c006-4c26-8aa0-8161e63afef6' and baslik = 'Arçelik Ankastre Fırın Düğmesi' and baslik <> 'Fırın düğmesi — Arçelik uyumlu';
update public.servis_urunler set baslik = 'Fırın contası — Arçelik uyumlu', aciklama = 'Arçelik Fırın Kapak Contası' || ' · ' || coalesce(aciklama, '')
  where id = '1f9df053-2b15-482a-8088-38b679ae65eb' and baslik = 'Arçelik Fırın Kapak Contası' and baslik <> 'Fırın contası — Arçelik uyumlu';
update public.servis_urunler set baslik = 'Fırın rezistansı — Vestel uyumlu (32001562)', aciklama = 'Vestel Fırın Rezistansı - 32001562' || ' · ' || coalesce(aciklama, '')
  where id = 'bc2b4e6f-ce90-4c1c-89ed-2a041eb3bcef' and baslik = 'Vestel Fırın Rezistansı - 32001562' and baslik <> 'Fırın rezistansı — Vestel uyumlu (32001562)';
update public.servis_urunler set baslik = 'Ocak bujisi — Arçelik uyumlu (268100034)', aciklama = 'Arçelik Ocak Buji Ateşleme Grubu' || ' · ' || coalesce(aciklama, '')
  where id = '1337d9e8-5f03-41ca-9c04-8ce098d408a6' and baslik = 'Arçelik Ocak Buji Ateşleme Grubu' and baslik <> 'Ocak bujisi — Arçelik uyumlu (268100034)';
update public.servis_urunler set baslik = 'Kombi NTC sensörü — Demirdöküm uyumlu', aciklama = 'Demirdöküm Kombi NTC Isı Sensörü (Oring Contalı)' || ' · ' || coalesce(aciklama, '')
  where id = 'c952a43a-ece6-469c-857e-5e4cf232f0fc' and baslik = 'Demirdöküm Kombi NTC Isı Sensörü (Oring Contalı)' and baslik <> 'Kombi NTC sensörü — Demirdöküm uyumlu';
update public.servis_urunler set baslik = 'Kombi emniyet ventili — Vaillant uyumlu', aciklama = 'Vaillant Kombi Emniyet Ventili' || ' · ' || coalesce(aciklama, '')
  where id = '05a7208a-c56c-40c9-aebb-950f102665d0' and baslik = 'Vaillant Kombi Emniyet Ventili' and baslik <> 'Kombi emniyet ventili — Vaillant uyumlu';
update public.servis_urunler set baslik = 'Kombi vanası — Auer uyumlu (su doldurma)', aciklama = 'Auer Micra Kombi Su Doldurma Musluğu' || ' · ' || coalesce(aciklama, '')
  where id = 'c07cfcda-d413-4396-8f37-c96191c79a46' and baslik = 'Auer Micra Kombi Su Doldurma Musluğu' and baslik <> 'Kombi vanası — Auer uyumlu (su doldurma)';
update public.servis_urunler set baslik = 'Kombi contası — Baymak uyumlu (plaka eşanjör)', aciklama = 'Baymak Kombi Plaka Eşanjör Contası' || ' · ' || coalesce(aciklama, '')
  where id = '5434aca4-b67b-44be-a61e-1aa695a007e8' and baslik = 'Baymak Kombi Plaka Eşanjör Contası' and baslik <> 'Kombi contası — Baymak uyumlu (plaka eşanjör)';
update public.servis_urunler set baslik = 'Kombi genleşme tankı — Bosch uyumlu', aciklama = 'Bosch Kombi Termodinamik Genleşme Tankı 1/2' || ' · ' || coalesce(aciklama, '')
  where id = '0148ea9e-1613-4b84-b060-d4caa6bf602b' and baslik = 'Bosch Kombi Termodinamik Genleşme Tankı 1/2' and baslik <> 'Kombi genleşme tankı — Bosch uyumlu';
update public.servis_urunler set baslik = 'Termosifon rezistansı — Demirdöküm uyumlu', aciklama = 'Demirdöküm Termosifon Rezistansı' || ' · ' || coalesce(aciklama, '')
  where id = '49c86737-12aa-448b-a87a-1f39710a228c' and baslik = 'Demirdöküm Termosifon Rezistansı' and baslik <> 'Termosifon rezistansı — Demirdöküm uyumlu';
update public.servis_urunler set baslik = 'Termosifon emniyet ventili — Üniversal (mandallı)', aciklama = 'Termosifon Emniyet Ventili - Mandallı' || ' · ' || coalesce(aciklama, '')
  where id = '3e772de3-b38e-4a42-8842-c8fb8119f40c' and baslik = 'Termosifon Emniyet Ventili - Mandallı' and baslik <> 'Termosifon emniyet ventili — Üniversal (mandallı)';
update public.servis_urunler set baslik = 'Termosifon anot çubuğu — Üniversal', aciklama = 'Termosifon Anot Çubuğu - İnce (Kireç Tutucu)' || ' · ' || coalesce(aciklama, '')
  where id = 'e57b3e03-2412-483a-9e38-08a698bbddc2' and baslik = 'Termosifon Anot Çubuğu - İnce (Kireç Tutucu)' and baslik <> 'Termosifon anot çubuğu — Üniversal';
update public.servis_urunler set baslik = 'Buzdolabı contası — Beko uyumlu (4324852400)', aciklama = 'Beko Buzdolabı Alt Kapı Contası' || ' · ' || coalesce(aciklama, '')
  where id = '3d1ada6d-0f4d-4429-86e0-dc547ced1b83' and baslik = 'Beko Buzdolabı Alt Kapı Contası' and baslik <> 'Buzdolabı contası — Beko uyumlu (4324852400)';
update public.servis_urunler set baslik = 'Buzdolabı raf örtüsü — Arçelik uyumlu (4305825500, sebzelik)', aciklama = 'Arçelik Buzdolabı Sebzelik Örtüsü' || ' · ' || coalesce(aciklama, '')
  where id = '9d3771bc-e82c-4c5a-b0a5-bee8f01c3afd' and baslik = 'Arçelik Buzdolabı Sebzelik Örtüsü' and baslik <> 'Buzdolabı raf örtüsü — Arçelik uyumlu (4305825500, sebzelik)';
update public.servis_urunler set baslik = 'Buzdolabı şişe rafı — Arçelik uyumlu', aciklama = 'Arçelik Buzdolabı Kapı Şişe Rafı' || ' · ' || coalesce(aciklama, '')
  where id = '2b9653c3-32b2-4eb8-a7c7-cd59866988e4' and baslik = 'Arçelik Buzdolabı Kapı Şişe Rafı' and baslik <> 'Buzdolabı şişe rafı — Arçelik uyumlu';
update public.servis_urunler set baslik = 'Buzdolabı termostat — Vestel uyumlu (eski tip)', aciklama = 'Vestel Buzdolabı Termostatı (Eski Tip)' || ' · ' || coalesce(aciklama, '')
  where id = '6f5eeb64-90b2-49e6-a6a6-d048f5cf91f9' and baslik = 'Vestel Buzdolabı Termostatı (Eski Tip)' and baslik <> 'Buzdolabı termostat — Vestel uyumlu (eski tip)';
update public.servis_urunler set baslik = 'Buzdolabı fan motoru — Bosch uyumlu', aciklama = 'Bosch Buzdolabı Fan Motoru - Orjinal' || ' · ' || coalesce(aciklama, '')
  where id = 'c926cdb4-6f0b-4e21-902c-e09e6e452681' and baslik = 'Bosch Buzdolabı Fan Motoru - Orjinal' and baslik <> 'Buzdolabı fan motoru — Bosch uyumlu';
update public.servis_urunler set baslik = 'Çamaşır makinesi hortumu — Vestel uyumlu (42004356/42127585, kazan hortumu)', aciklama = 'Vestel Çamaşır Makinesi Kazan Hortumu - 42004356, 42127585' || ' · ' || coalesce(aciklama, '')
  where id = '7f0ee8ff-2aab-40a6-9145-40a34d405df4' and baslik = 'Vestel Çamaşır Makinesi Kazan Hortumu - 42004356, 42127585' and baslik <> 'Çamaşır makinesi hortumu — Vestel uyumlu (42004356/42127585, kazan hortumu)';
update public.servis_urunler set baslik = 'Çamaşır makinesi hortumu — Arçelik uyumlu (kazan su giriş hortumu, 9146 YK)', aciklama = 'Arçelik 9146 YK Çamaşır Makinesi Kazan Su Giriş Hortumu' || ' · ' || coalesce(aciklama, '')
  where id = 'c2ff0d50-1236-4cd1-96ae-9d0643eb8f5d' and baslik = 'Arçelik 9146 YK Çamaşır Makinesi Kazan Su Giriş Hortumu' and baslik <> 'Çamaşır makinesi hortumu — Arçelik uyumlu (kazan su giriş hortumu, 9146 YK)';
update public.servis_urunler set baslik = 'Çamaşır makinesi pompa filtresi — Bosch uyumlu (pompa kapağı)', aciklama = 'Bosch Çamaşır Makinesi Pompa Kapağı' || ' · ' || coalesce(aciklama, '')
  where id = 'b23eef9c-a68d-45f6-898f-a2901479c1cd' and baslik = 'Bosch Çamaşır Makinesi Pompa Kapağı' and baslik <> 'Çamaşır makinesi pompa filtresi — Bosch uyumlu (pompa kapağı)';
update public.servis_urunler set baslik = 'Çamaşır makinesi deterjan gözü — Arçelik uyumlu (deterjan çekmecesi)', aciklama = 'Arçelik Çamaşır Makinesi Deterjan Çekmecesi' || ' · ' || coalesce(aciklama, '')
  where id = '06c5a297-d283-4e5a-ac31-1a413de100f1' and baslik = 'Arçelik Çamaşır Makinesi Deterjan Çekmecesi' and baslik <> 'Çamaşır makinesi deterjan gözü — Arçelik uyumlu (deterjan çekmecesi)';
update public.servis_urunler set baslik = 'Çamaşır makinesi pompa motoru — Arçelik uyumlu', aciklama = 'Arçelik Çamaşır Makinesi Su Jetli Pompa Motoru' || ' · ' || coalesce(aciklama, '')
  where id = 'ddea6a1b-beb5-4e26-b7d6-8711b0c03eaf' and baslik = 'Arçelik Çamaşır Makinesi Su Jetli Pompa Motoru' and baslik <> 'Çamaşır makinesi pompa motoru — Arçelik uyumlu';
update public.servis_urunler set baslik = 'Çamaşır makinesi lastiği — Profilo uyumlu (körük)', aciklama = 'Profilo Çamaşır Makinesi Körüğü - Işıksız' || ' · ' || coalesce(aciklama, '')
  where id = '4eb22e56-9f45-4abb-9163-639439833a5f' and baslik = 'Profilo Çamaşır Makinesi Körüğü - Işıksız' and baslik <> 'Çamaşır makinesi lastiği — Profilo uyumlu (körük)';
update public.servis_urunler set baslik = 'Bulaşık makinesi gider hortumu — Arçelik uyumlu (44 cm)', aciklama = 'Arçelik Bulaşık Makinesi Tahliye Hortumu - 44 cm' || ' · ' || coalesce(aciklama, '')
  where id = '90c8e81c-ecb4-4ce6-9c9f-ba01ca876e11' and baslik = 'Arçelik Bulaşık Makinesi Tahliye Hortumu - 44 cm' and baslik <> 'Bulaşık makinesi gider hortumu — Arçelik uyumlu (44 cm)';
-- ATLANDI (aranan_ad boş): 40925716-881d-4330-a518-c9beaaa1a597 · Beko Bulaşık Makinesi Alt Sepet Tekerleği
update public.servis_urunler set baslik = 'Bulaşık makinesi çatal kaşık sepeti — Arçelik uyumlu (1751500300)', aciklama = 'Arçelik Bulaşık Makinesi Çatal Kaşık Sepeti Kaşıklık' || ' · ' || coalesce(aciklama, '')
  where id = 'cd5cdad2-bab9-4ca9-8a5f-e3f8534ca28c' and baslik = 'Arçelik Bulaşık Makinesi Çatal Kaşık Sepeti Kaşıklık' and baslik <> 'Bulaşık makinesi çatal kaşık sepeti — Arçelik uyumlu (1751500300)';
update public.servis_urunler set baslik = 'Bulaşık makinesi contası — Arçelik uyumlu', aciklama = 'Arçelik Bulaşık Makinesi Alt Sızdırmazlık Contası - Orjinal' || ' · ' || coalesce(aciklama, '')
  where id = 'e5d54d0b-ecda-4a3d-a8dc-553da8c855a9' and baslik = 'Arçelik Bulaşık Makinesi Alt Sızdırmazlık Contası - Orjinal' and baslik <> 'Bulaşık makinesi contası — Arçelik uyumlu';
update public.servis_urunler set baslik = 'Su sebili musluğu — Üniversal (soğuk su)', aciklama = 'Sebil Musluk Soğuk Su (Orjinal)' || ' · ' || coalesce(aciklama, '')
  where id = 'f87e4b50-4d4d-4e79-9732-a857593b7a3a' and baslik = 'Sebil Musluk Soğuk Su (Orjinal)' and baslik <> 'Su sebili musluğu — Üniversal (soğuk su)';
update public.servis_urunler set baslik = 'Klima bakır boru — Üniversal (3/8-5/8)', aciklama = 'Klima İzolasyonlu Bakır Boru - 3/8-5/8' || ' · ' || coalesce(aciklama, '')
  where id = 'fc86fb73-6511-47c3-9a3c-5d4704d915c0' and baslik = 'Klima İzolasyonlu Bakır Boru - 3/8-5/8' and baslik <> 'Klima bakır boru — Üniversal (3/8-5/8)';
update public.servis_urunler set baslik = 'Klima drenaj hortumu — Üniversal', aciklama = 'Klima Drenaj Hortumu' || ' · ' || coalesce(aciklama, '')
  where id = '8979e078-edba-4364-b24e-d8c295644529' and baslik = 'Klima Drenaj Hortumu' and baslik <> 'Klima drenaj hortumu — Üniversal';
update public.servis_urunler set baslik = 'Süpürge toz torbası — Fakir uyumlu (Prestige)', aciklama = 'Fakir Prestige Toz Torbası' || ' · ' || coalesce(aciklama, '')
  where id = '2c8a448a-da62-43a4-a153-287052fadf44' and baslik = 'Fakir Prestige Toz Torbası' and baslik <> 'Süpürge toz torbası — Fakir uyumlu (Prestige)';
update public.servis_urunler set baslik = 'Davlumbaz karbon filtre — Arçelik uyumlu (9188065503/9197066119/9197066116)', aciklama = 'Arçelik Davlumbaz Karbon Filtre Takım - 9188065503,9197066119,9197066116' || ' · ' || coalesce(aciklama, '')
  where id = '037edc18-9d53-48e3-b5a5-58cd1b562643' and baslik = 'Arçelik Davlumbaz Karbon Filtre Takım - 9188065503,9197066119,9197066116' and baslik <> 'Davlumbaz karbon filtre — Arçelik uyumlu (9188065503/9197066119/9197066116)';
update public.servis_urunler set baslik = 'Aspiratör karbon filtre — Arçelik uyumlu', aciklama = 'Arçelik Aspiratör Karbon Filtre Takımı' || ' · ' || coalesce(aciklama, '')
  where id = '0f66617c-2ff5-4635-a4be-12ab2db56147' and baslik = 'Arçelik Aspiratör Karbon Filtre Takımı' and baslik <> 'Aspiratör karbon filtre — Arçelik uyumlu';
update public.servis_urunler set baslik = 'Davlumbaz karbon filtre — Altus uyumlu (2''li)', aciklama = 'Altus Davlumbaz Karbon Filtre - 2 Adet' || ' · ' || coalesce(aciklama, '')
  where id = '8dc6bb67-1159-4cd9-8299-00c6be85b4bb' and baslik = 'Altus Davlumbaz Karbon Filtre - 2 Adet' and baslik <> 'Davlumbaz karbon filtre — Altus uyumlu (2''li)';
update public.servis_urunler set baslik = 'Davlumbaz ampulü — Üniversal', aciklama = 'Aspiratör Davlumbaz Ampülü - Holojen' || ' · ' || coalesce(aciklama, '')
  where id = 'b741e734-03d2-4230-8da8-f07e607a4ceb' and baslik = 'Aspiratör Davlumbaz Ampülü - Holojen' and baslik <> 'Davlumbaz ampulü — Üniversal';
update public.servis_urunler set baslik = 'Fırın lambası — Arçelik uyumlu', aciklama = 'Arçelik Fırın Lambası - Duy Lamba Grubu' || ' · ' || coalesce(aciklama, '')
  where id = 'aeba0788-3e5a-44ce-9207-e21dcffc9dfd' and baslik = 'Arçelik Fırın Lambası - Duy Lamba Grubu' and baslik <> 'Fırın lambası — Arçelik uyumlu';
update public.servis_urunler set baslik = 'Fırın zaman saati — Arçelik uyumlu', aciklama = 'Arçelik Fırın Zaman Saati Timer Saat - 90 Dk' || ' · ' || coalesce(aciklama, '')
  where id = 'ccf4a6ea-d0f8-4e6a-beab-a255276953c5' and baslik = 'Arçelik Fırın Zaman Saati Timer Saat - 90 Dk' and baslik <> 'Fırın zaman saati — Arçelik uyumlu';
update public.servis_urunler set baslik = 'Davlumbaz tuş takımı — Vestel uyumlu', aciklama = 'Vestel Aspiratör Davlumbaz Tuş Takımı' || ' · ' || coalesce(aciklama, '')
  where id = '1e35f223-1418-4252-a156-8cbb42ce11cb' and baslik = 'Vestel Aspiratör Davlumbaz Tuş Takımı' and baslik <> 'Davlumbaz tuş takımı — Vestel uyumlu';
update public.servis_urunler set baslik = 'Ocak düğmesi — Arçelik uyumlu', aciklama = 'Arçelik Ocak Düğmesi Seti' || ' · ' || coalesce(aciklama, '')
  where id = '99623d69-84e6-457c-a785-eb806ac23d88' and baslik = 'Arçelik Ocak Düğmesi Seti' and baslik <> 'Ocak düğmesi — Arçelik uyumlu';
update public.servis_urunler set baslik = 'Ocak ızgarası — Arçelik uyumlu', aciklama = 'Arçelik Set Üstü Ocak Izgarası' || ' · ' || coalesce(aciklama, '')
  where id = 'd265bd35-ac5e-4e09-b54c-766b2f2fbfab' and baslik = 'Arçelik Set Üstü Ocak Izgarası' and baslik <> 'Ocak ızgarası — Arçelik uyumlu';
update public.servis_urunler set baslik = 'Ocak ızgarası döküm — Beko uyumlu (büyük)', aciklama = 'Beko Ocak Döküm Izgara - Büyük' || ' · ' || coalesce(aciklama, '')
  where id = '93fa2414-a80c-4972-87fb-b280d0eb54cd' and baslik = 'Beko Ocak Döküm Izgara - Büyük' and baslik <> 'Ocak ızgarası döküm — Beko uyumlu (büyük)';
update public.servis_urunler set baslik = 'Fırın üst rezistansı — Arçelik uyumlu (262100033/262100018)', aciklama = 'Arçelik Fırın Üst Rezistansı' || ' · ' || coalesce(aciklama, '')
  where id = 'dd7732ca-8ac7-48bb-b81e-c8dbc51fb2e2' and baslik = 'Arçelik Fırın Üst Rezistansı' and baslik <> 'Fırın üst rezistansı — Arçelik uyumlu (262100033/262100018)';
update public.servis_urunler set baslik = 'Fırın rezistansı — Arçelik uyumlu (turbo/fan)', aciklama = 'Arçelik Turbo Fırın Fan Rezistansı' || ' · ' || coalesce(aciklama, '')
  where id = '12068b30-ea4f-4b4b-a543-9917f6c9fc17' and baslik = 'Arçelik Turbo Fırın Fan Rezistansı' and baslik <> 'Fırın rezistansı — Arçelik uyumlu (turbo/fan)';
update public.servis_urunler set baslik = 'Davlumbaz motoru — Arçelik uyumlu (9189204764)', aciklama = 'Arçelik Davlumbaz Motoru' || ' · ' || coalesce(aciklama, '')
  where id = '34d4ad82-3660-4763-9280-98eb2dcd1f6c' and baslik = 'Arçelik Davlumbaz Motoru' and baslik <> 'Davlumbaz motoru — Arçelik uyumlu (9189204764)';
update public.servis_urunler set baslik = 'Fırın fanı — Arçelik uyumlu (havalandırma motoru)', aciklama = 'Arçelik Ankastre Fırın Havanlandırma Motoru' || ' · ' || coalesce(aciklama, '')
  where id = '864f2254-4376-42af-bdd8-ceb1b5c213b0' and baslik = 'Arçelik Ankastre Fırın Havanlandırma Motoru' and baslik <> 'Fırın fanı — Arçelik uyumlu (havalandırma motoru)';
update public.servis_urunler set baslik = 'Kombi oda termostatı — Üniversal (kuyruklu)', aciklama = 'Vitrin Oda Termostatı - Kuyruklu' || ' · ' || coalesce(aciklama, '')
  where id = 'ab2da0d7-e366-4eca-b684-7c69a6312879' and baslik = 'Vitrin Oda Termostatı - Kuyruklu' and baslik <> 'Kombi oda termostatı — Üniversal (kuyruklu)';
update public.servis_urunler set baslik = 'Kombi oda termostatı — Üniversal (kuyruksuz)', aciklama = 'Vitrin Oda Termostatı - Kuyruksuz' || ' · ' || coalesce(aciklama, '')
  where id = '4836bd22-92dd-4dfa-81d0-75045bb53676' and baslik = 'Vitrin Oda Termostatı - Kuyruksuz' and baslik <> 'Kombi oda termostatı — Üniversal (kuyruksuz)';
update public.servis_urunler set baslik = 'Kombi limit termostat — Üniversal', aciklama = 'Kombi Limit Termostat 85 C' || ' · ' || coalesce(aciklama, '')
  where id = 'f900d662-4284-4e45-afdf-0f2f39b18461' and baslik = 'Kombi Limit Termostat 85 C' and baslik <> 'Kombi limit termostat — Üniversal';
update public.servis_urunler set baslik = 'Kombi NTC sensörü — Beko uyumlu', aciklama = 'Beko Kombi NTC Sensör' || ' · ' || coalesce(aciklama, '')
  where id = 'b7648f71-1262-4dfe-8985-85a4b3759b93' and baslik = 'Beko Kombi NTC Sensör' and baslik <> 'Kombi NTC sensörü — Beko uyumlu';
update public.servis_urunler set baslik = 'Kombi pompası — Üniversal (Grundfos 15-60)', aciklama = 'Grundfos Kombi Pompa Motoru 15-60' || ' · ' || coalesce(aciklama, '')
  where id = '0d73b1ee-a1ad-423f-94cb-16794aafce64' and baslik = 'Grundfos Kombi Pompa Motoru 15-60' and baslik <> 'Kombi pompası — Üniversal (Grundfos 15-60)';
update public.servis_urunler set baslik = 'Kombi genleşme tankı — Baymak uyumlu', aciklama = 'Baymak Kombi Genleşme Tankı 6Lt' || ' · ' || coalesce(aciklama, '')
  where id = '6d3bbb05-c12e-4bd1-bce0-73b5e4912724' and baslik = 'Baymak Kombi Genleşme Tankı 6Lt' and baslik <> 'Kombi genleşme tankı — Baymak uyumlu';
update public.servis_urunler set baslik = 'Termosifon çekvalf — Üniversal', aciklama = 'Şofben Emniyet Ventili' || ' · ' || coalesce(aciklama, '')
  where id = 'd50b37d9-3f38-400b-b514-26c3d616b211' and baslik = 'Şofben Emniyet Ventili' and baslik <> 'Termosifon çekvalf — Üniversal';
update public.servis_urunler set baslik = 'Termosifon emniyet ventili — Üniversal', aciklama = 'Termosifon Emniyet Ventili' || ' · ' || coalesce(aciklama, '')
  where id = '59720857-dade-41cf-a8bc-28c51e5bf692' and baslik = 'Termosifon Emniyet Ventili' and baslik <> 'Termosifon emniyet ventili — Üniversal';
update public.servis_urunler set baslik = 'Termosifon rezistans contası — Arçelik uyumlu', aciklama = 'Arçelik Termosifon Rezistans Contası' || ' · ' || coalesce(aciklama, '')
  where id = '2267347d-5e81-4f9a-bc50-057ce86597b2' and baslik = 'Arçelik Termosifon Rezistans Contası' and baslik <> 'Termosifon rezistans contası — Arçelik uyumlu';
update public.servis_urunler set baslik = 'Termosifon askı aparatı — Üniversal', aciklama = 'Termosifon Askı Aparatı' || ' · ' || coalesce(aciklama, '')
  where id = '179e5e1c-d347-42b4-b34c-6ca3bd0dfb12' and baslik = 'Termosifon Askı Aparatı' and baslik <> 'Termosifon askı aparatı — Üniversal';
update public.servis_urunler set baslik = 'Kombi vanası — Vaillant uyumlu (su doldurma)', aciklama = 'Vaillant Vuw Turbotech Kombi Su Doldurma Musluğu' || ' · ' || coalesce(aciklama, '')
  where id = '65f88547-3111-4b28-8b52-3740c1d65c25' and baslik = 'Vaillant Vuw Turbotech Kombi Su Doldurma Musluğu' and baslik <> 'Kombi vanası — Vaillant uyumlu (su doldurma)';
update public.servis_urunler set baslik = 'Derin dondurucu contası — Arçelik uyumlu', aciklama = 'Arçelik Derin Dondurucu Kapak Contası' || ' · ' || coalesce(aciklama, '')
  where id = '8337db9a-bb83-46b9-b878-62a468f5d39c' and baslik = 'Arçelik Derin Dondurucu Kapak Contası' and baslik <> 'Derin dondurucu contası — Arçelik uyumlu';
update public.servis_urunler set baslik = 'Buzdolabı contası — Arçelik uyumlu (49377326)', aciklama = 'Arçelik Buzdolabı Alt Kapı Contası' || ' · ' || coalesce(aciklama, '')
  where id = 'b3c13d33-dbcf-48f6-b58b-7b3eaab615e5' and baslik = 'Arçelik Buzdolabı Alt Kapı Contası' and baslik <> 'Buzdolabı contası — Arçelik uyumlu (49377326)';
update public.servis_urunler set baslik = 'Buzdolabı cam raf — Arçelik uyumlu (ön profil)', aciklama = 'Arçelik Buzdolabı Cam Raf Profili - Ön' || ' · ' || coalesce(aciklama, '')
  where id = 'c5a651f1-cee3-47a3-932d-eead9590c3ba' and baslik = 'Arçelik Buzdolabı Cam Raf Profili - Ön' and baslik <> 'Buzdolabı cam raf — Arçelik uyumlu (ön profil)';
update public.servis_urunler set baslik = 'Derin dondurucu çekmece kapağı — Altus uyumlu (1. sıra)', aciklama = 'Altus Derin Dondurucu Çekmece Kapağı - 1. Sıra' || ' · ' || coalesce(aciklama, '')
  where id = '6d99dc46-5cdc-487a-bd7d-4dd5b592878d' and baslik = 'Altus Derin Dondurucu Çekmece Kapağı - 1. Sıra' and baslik <> 'Derin dondurucu çekmece kapağı — Altus uyumlu (1. sıra)';
-- ATLANDI (aranan_ad boş): 08f0ca8e-247e-4ad3-8390-f4a545b71022 · Arçelik Buzdolabı Çekmece Kapağı
update public.servis_urunler set baslik = 'Buzdolabı termostat — Beko uyumlu (4328840485, bi-metal)', aciklama = 'Beko Buzdolabı Bi-metal Termostat 4328840485' || ' · ' || coalesce(aciklama, '')
  where id = '7d382b2b-9881-4073-bc83-fa3a352ff6ee' and baslik = 'Beko Buzdolabı Bi-metal Termostat 4328840485' and baslik <> 'Buzdolabı termostat — Beko uyumlu (4328840485, bi-metal)';
update public.servis_urunler set baslik = 'Kurutma makinesi birleştirme aparatı — Üniversal (kemerli)', aciklama = 'Çamaşır Yıkama Makinesi Ve Çamaşır Kurutma Makinesi Kemerli Birleştirme Aparatı' || ' · ' || coalesce(aciklama, '')
  where id = 'd0248cbc-957f-4095-b14e-aeac05e111bd' and baslik = 'Çamaşır Yıkama Makinesi Ve Çamaşır Kurutma Makinesi Kemerli Birleştirme Aparatı' and baslik <> 'Kurutma makinesi birleştirme aparatı — Üniversal (kemerli)';
update public.servis_urunler set baslik = 'Çamaşır makinesi kurutma makinesi aparatı — Üniversal (beyaz)', aciklama = 'Çamaşır ve Kurutma Makinesi Aparatı - Beyaz' || ' · ' || coalesce(aciklama, '')
  where id = 'c60b30a3-b44c-4305-9dd6-fb53c49e129f' and baslik = 'Çamaşır ve Kurutma Makinesi Aparatı - Beyaz' and baslik <> 'Çamaşır makinesi kurutma makinesi aparatı — Üniversal (beyaz)';
update public.servis_urunler set baslik = 'Kurutma makinesi tahliye hortumu — Arçelik uyumlu (pompa-su tankı hortumu)', aciklama = 'Arçelik Kurutma Makinesi Pompa Su Tankı Hortumu' || ' · ' || coalesce(aciklama, '')
  where id = '77ac580a-3273-42d7-ad8e-f9ec3a41d5fd' and baslik = 'Arçelik Kurutma Makinesi Pompa Su Tankı Hortumu' and baslik <> 'Kurutma makinesi tahliye hortumu — Arçelik uyumlu (pompa-su tankı hortumu)';
update public.servis_urunler set baslik = 'Çamaşır makinesi su hortumu — Üniversal (4 m)', aciklama = 'Su Giriş Hortumu 4 Mt.' || ' · ' || coalesce(aciklama, '')
  where id = '7a280455-a681-428f-8f7f-2a04ff9fb94c' and baslik = 'Su Giriş Hortumu 4 Mt.' and baslik <> 'Çamaşır makinesi su hortumu — Üniversal (4 m)';
update public.servis_urunler set baslik = 'Çamaşır makinesi gider hortumu — Üniversal (250 cm, dirsekli)', aciklama = 'Dirsekli Tahliye Hortumu - 250 cm' || ' · ' || coalesce(aciklama, '')
  where id = '420b4521-0ffa-4b4d-b8f0-f6fa1e184717' and baslik = 'Dirsekli Tahliye Hortumu - 250 cm' and baslik <> 'Çamaşır makinesi gider hortumu — Üniversal (250 cm, dirsekli)';
update public.servis_urunler set baslik = 'Çamaşır makinesi gider hortumu — Üniversal (1,5 m)', aciklama = 'Tahliye Hortumu 1,5 Mt.' || ' · ' || coalesce(aciklama, '')
  where id = '16263cb4-8174-4179-98aa-0192b69a57c9' and baslik = 'Tahliye Hortumu 1,5 Mt.' and baslik <> 'Çamaşır makinesi gider hortumu — Üniversal (1,5 m)';
update public.servis_urunler set baslik = 'Çamaşır makinesi pompa filtresi — Vestel uyumlu (pompa kapağı)', aciklama = 'Vestel Çamaşır Makinesi Pompa Kapağı - Orjinal' || ' · ' || coalesce(aciklama, '')
  where id = 'e67a6f4d-eb20-4cff-91f7-0c61934a0d24' and baslik = 'Vestel Çamaşır Makinesi Pompa Kapağı - Orjinal' and baslik <> 'Çamaşır makinesi pompa filtresi — Vestel uyumlu (pompa kapağı)';
update public.servis_urunler set baslik = 'Çamaşır makinesi rulman — Vestel uyumlu (takım)', aciklama = 'Vestel Çamaşır Makinesi Rulman Takımı' || ' · ' || coalesce(aciklama, '')
  where id = '37fe473f-1768-4690-80cf-fb70b798121b' and baslik = 'Vestel Çamaşır Makinesi Rulman Takımı' and baslik <> 'Çamaşır makinesi rulman — Vestel uyumlu (takım)';
update public.servis_urunler set baslik = 'Çamaşır makinesi ayağı — Arçelik uyumlu', aciklama = 'Arçelik Çamaşır Makinesi Ayarlı Ayak' || ' · ' || coalesce(aciklama, '')
  where id = '4be378ab-7ca6-4089-bd2c-19ecdf868d2f' and baslik = 'Arçelik Çamaşır Makinesi Ayarlı Ayak' and baslik <> 'Çamaşır makinesi ayağı — Arçelik uyumlu';
update public.servis_urunler set baslik = 'Bulaşık makinesi şebeke hortumu — Arçelik uyumlu (aquastop)', aciklama = 'Arçelik Bulaşık Makinesi Aquastop Hortumu' || ' · ' || coalesce(aciklama, '')
  where id = '4d4a229b-062d-43d5-ac05-884f49260840' and baslik = 'Arçelik Bulaşık Makinesi Aquastop Hortumu' and baslik <> 'Bulaşık makinesi şebeke hortumu — Arçelik uyumlu (aquastop)';
update public.servis_urunler set baslik = 'Bulaşık makinesi üst pervane — Arçelik uyumlu', aciklama = 'Arçelik Bulaşık Makinesi Üst Pervane - Orjinal' || ' · ' || coalesce(aciklama, '')
  where id = 'e8dad51d-d9ff-41c1-954b-8f01f3c3608a' and baslik = 'Arçelik Bulaşık Makinesi Üst Pervane - Orjinal' and baslik <> 'Bulaşık makinesi üst pervane — Arçelik uyumlu';
update public.servis_urunler set baslik = 'Bulaşık makinesi üst sepet — Arçelik uyumlu', aciklama = 'Arçelik Bulaşık Makinesi Üst Sepet' || ' · ' || coalesce(aciklama, '')
  where id = '00d64f3c-95b1-4af2-a490-c1daf4f48c27' and baslik = 'Arçelik Bulaşık Makinesi Üst Sepet' and baslik <> 'Bulaşık makinesi üst sepet — Arçelik uyumlu';
update public.servis_urunler set baslik = 'Mikrodalga motoru — Arçelik uyumlu', aciklama = 'Arçelik Mikrodalga Motoru' || ' · ' || coalesce(aciklama, '')
  where id = '753a2a1d-ebcd-4b11-8b2a-ceb908cef179' and baslik = 'Arçelik Mikrodalga Motoru' and baslik <> 'Mikrodalga motoru — Arçelik uyumlu';
update public.servis_urunler set baslik = 'Su sebili pompa motoru — Arçelik uyumlu', aciklama = 'Arçelik Su Sebili Pompa Motoru' || ' · ' || coalesce(aciklama, '')
  where id = 'e966a056-7011-4b81-ac0b-1d7f376b6596' and baslik = 'Arçelik Su Sebili Pompa Motoru' and baslik <> 'Su sebili pompa motoru — Arçelik uyumlu';
update public.servis_urunler set baslik = 'Su sebili musluğu — Üniversal (sıcak su)', aciklama = 'Sebil Musluk Sıcak Su (Orjinal)' || ' · ' || coalesce(aciklama, '')
  where id = 'c14c22a4-e74f-45dc-8860-eb116e31f460' and baslik = 'Sebil Musluk Sıcak Su (Orjinal)' and baslik <> 'Su sebili musluğu — Üniversal (sıcak su)';
update public.servis_urunler set baslik = 'Su sebili termostat — Arçelik uyumlu', aciklama = 'Arçelik Sebil Soğutucu Termostatı - Orjinal' || ' · ' || coalesce(aciklama, '')
  where id = '6e1e095f-3d35-4604-ba3d-9a8c32edd783' and baslik = 'Arçelik Sebil Soğutucu Termostatı - Orjinal' and baslik <> 'Su sebili termostat — Arçelik uyumlu';
update public.servis_urunler set baslik = 'Klima bakır boru — Üniversal (1/4-3/8, 5 m)', aciklama = 'Klima Boru Seti 1/4-3/8 5 Metre' || ' · ' || coalesce(aciklama, '')
  where id = 'ae282abb-2665-49f3-80b0-1c10cbb6d75a' and baslik = 'Klima Boru Seti 1/4-3/8 5 Metre' and baslik <> 'Klima bakır boru — Üniversal (1/4-3/8, 5 m)';
update public.servis_urunler set baslik = 'Klima drenaj pompası — Üniversal', aciklama = 'Klima Drenaj Pompası Aplik Tip' || ' · ' || coalesce(aciklama, '')
  where id = '7ceb9194-7680-4bbe-a108-544b2bd8e471' and baslik = 'Klima Drenaj Pompası Aplik Tip' and baslik <> 'Klima drenaj pompası — Üniversal';
update public.servis_urunler set baslik = 'Klima su tahliye hortumu — Üniversal', aciklama = 'Klima Su Tahliye Pompa Hortumu' || ' · ' || coalesce(aciklama, '')
  where id = '3bb89cbd-70ce-4c7b-8863-f8952c228df2' and baslik = 'Klima Su Tahliye Pompa Hortumu' and baslik <> 'Klima su tahliye hortumu — Üniversal';
update public.servis_urunler set baslik = 'Süpürge hortumu — Arçelik uyumlu', aciklama = 'Arçelik Kanguru Süpürge Hortumu' || ' · ' || coalesce(aciklama, '')
  where id = 'ec97d70b-6db4-4ea6-a4c8-fbdc693082ea' and baslik = 'Arçelik Kanguru Süpürge Hortumu' and baslik <> 'Süpürge hortumu — Arçelik uyumlu';
update public.servis_urunler set baslik = 'Süpürge hortumu — Philips uyumlu', aciklama = 'Philips Süpürge Makinesi Hortumu' || ' · ' || coalesce(aciklama, '')
  where id = '71662e96-884e-49ed-86dd-de07e9263192' and baslik = 'Philips Süpürge Makinesi Hortumu' and baslik <> 'Süpürge hortumu — Philips uyumlu';
update public.servis_urunler set baslik = 'Süpürge borusu — Üniversal (32 mm)', aciklama = 'Süpürge Makinesi Teleskopik Boru - 32mm' || ' · ' || coalesce(aciklama, '')
  where id = '0281d93a-98d8-4e8b-9e42-605ccfc9359a' and baslik = 'Süpürge Makinesi Teleskopik Boru - 32mm' and baslik <> 'Süpürge borusu — Üniversal (32 mm)';
update public.servis_urunler set baslik = 'Süpürge filtresi — Philips uyumlu (HEPA)', aciklama = 'Philips Elektrik Süpürge Hepa Filtre' || ' · ' || coalesce(aciklama, '')
  where id = 'b508f99c-0b49-4ad4-9de2-e598aaf357a6' and baslik = 'Philips Elektrik Süpürge Hepa Filtre' and baslik <> 'Süpürge filtresi — Philips uyumlu (HEPA)';
commit;

-- Doğrulama (89 bekleniyor; yeni başlık " — " içerir, eski başlıklar yalnız " - " kullanıyordu):
-- select count(*) from public.servis_urunler
--  where kategori = 'yedek-parca' and durum = 'aktif' and baslik like '% — %';   -- → 89
-- select count(*) from public.servis_urunler
--  where kategori = 'yedek-parca' and durum = 'aktif' and aciklama like '% · Tedarikçiden doğrudan%';   -- → 89
-- Tekrar koşu kontrolü: aynı dosya ikinci kez çalışınca "UPDATE 0" × 89.

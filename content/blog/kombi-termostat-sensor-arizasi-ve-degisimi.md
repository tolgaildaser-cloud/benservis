---
title: "Kombi NTC sensörü arızası: belirtiler, hata kodları ve değişim"
description: "Kombi NTC sensörü arızası hangi kodla görünür? Sıcaklık sensörü, aşırı ısınma emniyeti ve oda termostatı farkı: Baymak, DemirDöküm, ECA ne diyor?"
slug: "kombi-termostat-sensor-arizasi-ve-degisimi"
date: "2026-10-13"
category: "Kombi"
parca:
  cihaz: "kombi-termosifon"
  tur: "termostat-sensor"
# --- Provenans (yayında görünmez) ---
# 2026-10-13 PAZ (#164 C-1, #165 C şablonu). Kanıt: seo/2026-10-09-KAPSAM-ANALIZI.md §11.5 s.691 üretim sırası #1 "Kombi / Termosifon | termostat/sensör | 16 öneri | 16 tohum | kombi hava akış sensörü fiyatı; kombi ısı sensörü" (+ §11.2 s.574). Otomatik tamamlama (13 Eki, hl=tr): "kombi ntc sensörü", "… arızası nasıl anlaşılır", "… ne işe yarar", "… değişimi"; "kombi sensör arızası nasıl anlaşılır"; "kombi limit termostat ne işe yarar"; "kombi termostatı nasıl ayarlanır". Ham çıktı: kaynak-kombi-sensor-13eki/OTOMATIK-TAMAMLAMA-2026-10-13.txt
# #88 kaynaklar (yerel blog-taslaklar/kaynak-kombi-sensor-13eki/, MD5-2026-10-13.txt, erişim 13 Eki, HTTP 200; sayfa = PDF sayfası):
#   Baymak Duotec 24-28-33-42-45 Kullanma Kılavuzu 300032122 https://www.baymak.com.tr/media/2904/300032122-kullanma-kilavuzu-baymak-duotec-24-28-33-42-45_r2.pdf md5 723546ecd63c99eaecb5c3143c687c2a — s.2, s.6, s.7, s.14, s.17 hata kodları, s.19 bağlantı şeması, s.22
#   DemirDöküm Nitromix Kullanma Kılavuzu 0020309468_01 https://www.demirdokum.com.tr/downloads/nitromix-kk-0020309468-01-2557203.pdf md5 3340a11b923b7332f8eb8685297970b6 — s.13, s.14 S.30, s.15
#   DemirDöküm Nitromix Montaj ve Bakım Kılavuzu 0020309469_02 (yetkili servise yönelik) https://www.demirdokum.com.tr/downloads/products-1/nitromix-mk-0020309469-02-2557204.pdf md5 bdff16276288ebddd6c6cbf82d47c864 — s.3, s.31-33 arıza kodları, s.36
#   ECA Confeo Premix Kullanma Kılavuzu https://eca.com.tr/uploads/documents//aaa/edb/dfd/add/59663772-1e7b-4a8e-95d4-9874b5138500.pdf md5 4ef56163ac14c46f9cb1dcb9ea189681 — s.4, s.7, s.10, s.19, s.21-22, s.27-29 hata kodları, s.30
#   Baymak Connect akıllı oda termostatı https://www.baymak.com.tr/media/4488/baymak-connect-akilli-oda-termostati-kullanma-kilavuzu.pdf md5 a28fa6625a220eb7ca44c1ae75287256 — s.6
#   Baymak Logi kablosuz oda termostatı https://www.baymak.com.tr/media/3761/baymak-logi-montaj-ve-kullanma-kilavuzu.pdf md5 19d8048c59250051a305fd0bb8f37e76 — s.1
#   DemirDöküm RF 6001 kablosuz oda termostatı https://www.demirdokum.com.tr/products-2/demir-doekuem-ueruenler/kombiler-1/kontrol-cihazlar-1/rf-1/rf-6001-kablosuz-kullanma-klavuzu-353235.pdf md5 0c31e30c5f1044e250e024789fa94272 — s.1-2
# BİLEREK YAZILMAYANLAR: NTC'nin çalışma ilkesi/direnç değerleri (kullanma kılavuzları tanımlamıyor) · sensör ölçümü, söküm, takma, "temizleme" adımları (#31; DemirDöküm montaj kılavuzundaki "değiştirin/kontrol edin" tedbirleri yetkili servise yönelik) · limit termostat ayarı · oda termostatı kablo bağlantısı ve kombiye tanıtma (ECA: yetkili servis) · fiyat/TL (#46) · Vaillant, Bosch/Buderus (bu turda sensör kodu sayfası okunmadı) · "hava akış sensörü" (belgede bu adla geçen parça yok) · NTC arızasının "en sık" sebep olduğu gibi sıklık iddiaları.
# Alıntı denetim tablosu: kombi-termostat-sensor-arizasi-ve-degisimi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu", "Oda termostatının kullanma kılavuzu", "Termostata uygun yeni pil (kablosuz modellerde)"]
steps:
  - "Kombi ekranındaki hata kodunu, kombinin markasını ve modelini not et; kodun anlamına kendi kılavuzunun hata kodları tablosundan bak."
  - "Kombi soğukken basınç göstergesine bak; değeri kılavuzunun verdiği aralıkla karşılaştır ve not et."
  - "Kılavuz izin veriyorsa reset tuşuna bir kez bas; kod geri geliyorsa tekrar tekrar basma, yetkili servisi ara."
  - "Kablosuz oda termostatında düşük pil simgesi varsa ya da ekran boşsa pilleri kılavuzdaki tip ve yönle değiştir."
  - "Oda termostatının sıcaklık ayarına ve açık olup olmadığına bak; ayarı kılavuzundaki gibi istediğin oda sıcaklığına getir."
  - "Servisi ararken not ettiğin kodu, basınç değerini ve belirtinin ne zaman başladığını hazır tut."
faq:
  - q: "Kombi NTC sensörü arızası nasıl anlaşılır?"
    a: "Evde ölçerek anlaşılmaz; kombi bunu genellikle ekranda bir hata koduyla bildirir. Baymak Duotec'te E16, E17, E18, E33, E35 ve kullanım suyu için F52; ECA Confeo'da E15, E16, E17, E18, E33, E35 ve F52; DemirDöküm Nitromix'te F.00, F.01, F.10, F.11 sıcaklık sensörü kodlarıdır. Kodun kesin anlamı kendi modelinin kılavuzunda yazar."
  - q: "Kombide NTC sensörü ne işe yarar?"
    a: "Kombinin su sıcaklığını ölçen sıcaklık sensörüdür. Kılavuzlar ayrı sensörlerden söz ediyor: kaloriferin gidiş (çıkış) ve dönüş suyu sensörleri ile kullanım (musluk) suyu sensörü. ECA'nın devre şemasında bunlar 'gidiş borusu NTC' ve 'dönüş borusu NTC' diye geçiyor."
  - q: "Limit termostat ile NTC sensörü aynı şey mi?"
    a: "Hayır. Sıcaklık sensörü sıcaklığı ölçer; aşırı ısınma emniyeti ise su çok ısınınca kombiyi durdurur. ECA, kalorifer suyu için 95 °C aşırı ısınma emniyeti yazıyor; besleme ya da dönüş suyu 90 °C'yi aşınca E03 kodu çıkıyor. Baymak'ta aşırı ısınma kodu E03, DemirDöküm'de 'sıcaklık sınırlayıcı emniyet kapatması' F.20."
  - q: "Kombi NTC sensörünü kendim değiştirebilir miyim?"
    a: "Hayır. Kombi gaz ve elektrikle çalışır. Baymak, cihazın parçalarının yalnız servis tarafından sökülmesini istiyor; DemirDöküm sökme ve tamiri yalnız yetkili servise bırakıyor. Sensörün kontrolü ve değişimi yetkili servis işi."
  - q: "Oda termostatı arızası kombiyi durdurur mu?"
    a: "Durdurabilir. DemirDöküm'ün RF 6001 kılavuzuna göre alıcı termostattan 5 dakika bilgi alamazsa kombiyi kapatır ve ısıtma durur. ECA'da F49 oda termostatı haberleşme hatasıdır. DemirDöküm Nitromix'te S.30, oda termostatının ısıtma konumunu bloke ettiğini gösterir; kılavuz bunu arıza değil durum kodları arasında sayıyor."
  - q: "Kombi sensörü ve oda termostatı nereden alınır?"
    a: "Üreticiler orijinal yedek parça kullanılmasını istiyor. Baymak yedek parçaları üretim tarihinden itibaren 15 yıl temin etmeyi garanti ediyor; DemirDöküm ve ECA yedek parça temin yerleri için kendi sitelerini gösteriyor. ECA kılavuzu uyumlu oda termostatlarını listeliyor ve yalnız yetkili servisin uygun gördüğü termostatı istiyor."
images:
  coverAlt: "Duvara asılı bir kombinin ekranında yanıp sönen hata kodu ve yanında duvardaki oda termostatı, sade çizim"
  steps:
    - "Kombi ekranındaki kod, yanında not defteri, kalem ve açık kullanma kılavuzu"
    - "Kombinin altındaki yuvarlak basınç göstergesine yakın plan, ibre orta bölgede"
    - "Kombi panelinde vurgulanmış reset tuşu, yanında tek basış işareti"
    - "Arka kapağı açık kablosuz oda termostatı, yuvasında iki kalem pil"
    - "Oda termostatının ekranında sıcaklık ayarı yukarı ok ile yükseltilirken, arkada hafif ısınan petek"
    - "Telefon, not defteri ve kombinin model etiketi yan yana, servis çağırmaya hazır bilgi listesi"
---

Kombin ekranda bir kod gösterip durdu, petekler ısınmıyor ya da musluktan sıcak su gelmiyor. Kodun karşılığında "sensör", "NTC" ya da "aşırı ısınma" yazıyorsa sorun büyük olasılıkla kombinin sıcaklığı ölçen ve sınırlayan parçalarından birinde. Bu parçaların değişimi **yetkili servis işi**; senin yapabileceğin, kodu doğru okumak ve oda termostatı tarafını kontrol etmek.

Bu yazıdaki bilgiler üreticilerin kendi belgelerinden: **Baymak** (Duotec kombi, Connect ve Logi oda termostatları), **DemirDöküm** (Nitromix kombi, RF 6001 oda termostatı) ve **ECA** (Confeo Premix kombi). Kendi kombinin kesin kod listesi kendi kılavuzunda yazar. Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kombide üç ayrı parça karışıyor: suyun sıcaklığını ölçen **sıcaklık (NTC) sensörleri**, su fazla ısınınca kombiyi durduran **aşırı ısınma emniyeti** ve odadan kombiye "ısıt" diyen **oda termostatı**. İlk ikisi kombinin içinde; kontrolü ve değişimi **yalnız yetkili servis** yapar. Oda termostatında **pil ve sıcaklık ayarını** kendin kontrol edebilirsin. Kod reset sonrası geri geliyorsa servisi ara.

## Hangi belirtiler bu parçaları işaret eder?

Kılavuzlara göre sensör ve termostat sorunları çoğunlukla **ekranda hata koduyla** görünür:

| Kombi | Sıcaklık sensörü kodları | Aşırı ısınma | Oda termostatı |
|---|---|---|---|
| Baymak Duotec | E15, E16, E17, E18 (NTC sensör testi), E33, E35 · kullanım suyu F52 | E03 | — |
| ECA Confeo Premix | E15, E16, E17, E18, E33, E35 · kullanım suyu F52 · F81 | E03 (besleme ya da dönüş 90 °C'yi aşarsa) | F49 haberleşme hatası |
| DemirDöküm Nitromix | F.00, F.01 (kesinti) · F.10, F.11 (kısa devre) · F.64 | F.20 sıcaklık sınırlayıcı emniyet kapatması | S.30 (arıza değil, durum kodu) |

Ekranda kod yoksa DemirDöküm Nitromix'in tablosu bir ipucu veriyor: **sıcak su sorunsuzken ısıtmanın çalışmamasını** harici reglerin (termostatın) yanlış ayarına bağlıyor. Kalorifer genel olarak ısınmıyorsa: [petekler ısınmıyor](/blog/petekler-isinmiyor/).

## Bu parçalar ne iş yapar?

**Sıcaklık (NTC) sensörleri.** Kombinin su sıcaklığını ölçer. Kılavuzlar ayrı sensörler sayıyor: kalorifer **gidiş (çıkış)** suyu, **dönüş** suyu ve **kullanım (musluk) suyu** sensörü. ECA'nın devre şemasında bunlar "gidiş borusu NTC" ve "dönüş borusu NTC" olarak, Baymak'ın bağlantı şemasında çıkış, dönüş ve kullanım suyu sensörü olarak geçiyor.

**Aşırı ısınma emniyeti (limit termostat, sıcaklık sınırlayıcı).** Su fazla ısınınca kombiyi güvenlik için durdurur. ECA'nın emniyet listesinde kalorifer suyu için **95 °C**, kullanım suyu için **71 °C** aşırı ısınma emniyeti var. Baymak'ın bağlantı şemasında bir **ısıl sigorta** girişi, hata listesinde **F53 ana eşanjör ısı sigortası** kodu bulunuyor. DemirDöküm'ün servis kılavuzunda **F.86** limit termostat ayarıyla ilgili.

**Oda termostatı.** Kombinin dışında, odadadır; sıcaklığı ölçüp kombiye ne zaman ısıtacağını söyler. Baymak ve ECA oda termostatını isteğe bağlı aksesuar olarak sunuyor.

## Değişim servis işi mi? Evet

Kombi **gaz ve elektrikle** çalışır; içindeki sensör ya da emniyet parçasına dokunmak kullanıcı işi değil:

- **Baymak:** cihazın parçaları **yalnız servis tarafından sökülmeli**; mühürlü parçalara müdahale edilmemeli. Bakım, montaj ve tamir yetkili kişilerce yapılmalı.
- **DemirDöküm:** montaj, sökme, kontrol, bakım ve **tamir yalnız yetkili servis** işi. Sensör kodlarında "sensörü değiştirin" tedbiri servis kılavuzunda, yani yetkili servise yazılmış.
- **ECA:** sensör kodlarında önce **reset**, hata sürüyorsa **yetkili servise bildirim**; F52 ve F81'de doğrudan yetkili servis.

## Senin yapabileceklerin: adım adım

**1. Kodu not et.** DemirDöküm, F.xx uyarısı çıkarsa kılavuzdaki arıza tablosuna göre hareket etmeni, gideremiyorsan yetkili servise başvurmanı istiyor. Marka ve model bilgisini de yaz. Marka bazlı tablo için: [Baymak kombi arıza kodları](/blog/baymak-kombi-ariza-kodlari/).

**2. Bir kez reset.** Baymak hata kodunda RESET (K1) tuşuna basmanı, sorun sürerse mutlaka yetkili servisi aramanı söylüyor. ECA'da sensör kodlarının çözümü de önce reset. Arka arkaya basma: ECA'da 1 saatte 5'ten fazla reset **F13** hatası veriyor.

**3. Aşırı ısınmada vanalar.** ECA'nın E03 çözümü: kombi tesisatının su vanalarının açık olduğundan, kış modundaysa **en az bir radyatörün açık** olduğundan emin ol, sonra reset; sürerse servis. Ayrıntı: [ECA kombi E03 hatası](/blog/eca-kombi-e03-hatasi/).

**4. Basınca bak.** Baymak kombi soğukken **0,7–1,5 bar** aralığını, ECA ise düşük basınç hatasında **1,5–2 bar**'a kadar doldurmayı yazıyor. Değeri not et: [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/).

**5. Oda termostatının pili.** Baymak Connect'te ekranda **düşük pil** simgesi görünürse pilleri iki AA alkalin pille değiştir; ekran boşsa pilleri yenile. Baymak Logi iki AAA alkalin pil kullanıyor, pil ömrü yaklaşık **1 yıl**; iki pili aynı anda değiştirmeni istiyor. DemirDöküm RF 6001'de düşük batarya göstergesi var ve alıcı termostattan **5 dakika** bilgi alamazsa **kombiyi kapatıp ısıtmayı durduruyor**.

**6. Termostat ayarı.** DemirDöküm RF 6001'de kombinin ısıtmasını istediğin oda sıcaklığını termostattaki düğmeyle ayarlıyorsun. Baymak enerji tasarrufu için termostatı yaklaşık **20 °C**'ye indirmeyi öneriyor. DemirDöküm Nitromix'te ekranda **S.30** görürsen oda termostatı ısıtmayı bloke ediyor; bu bir arıza kodu değil, durum kodu.

## Ne zaman servis?

| Durum | Ne yapılır |
|---|---|
| Sensör kodu reset sonrası geri geliyor | Yetkili servis |
| E03 / aşırı ısınma, vanalar açık, yine tekrarlıyor | Yetkili servis |
| Oda termostatı pili yeni, ayar doğru, kombi yine ısıtmıyor | Yetkili servis |
| Kablosuz termostatta iletişim hatası sürüyor | Baymak: röle kutusunun enerjisini kontrol et, çözülmezse Baymak servis |
| Oda termostatı takmak ya da değiştirmek | ECA: montaj ve kombiye tanıtma yetkili servis |

## Parça nereden alınır?

Üreticiler **orijinal yedek parça** istiyor. Baymak, kombinin yedek parçalarını üretim tarihinden itibaren **15 yıl** temin etmeyi garanti ediyor ve yalnız Baymak yedek parçası kullanılmasını yazıyor. DemirDöküm ve ECA, servis ve yedek parça temin yerlerinin bilgisini kendi web adreslerinde veriyor. Oda termostatı için ECA kılavuzu uyumlu modelleri listeliyor ve yalnız ECA yetkili servislerinin uygun gördüğü termostatın kullanılmasını istiyor; Baymak ayrıntı için bayi ya da yetkili servise danışmanı söylüyor.

Cihazını ve ekrandaki kodu benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Önce öğren, sonra çağır.

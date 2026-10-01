---
title: "Viessmann kombi sıcak su vermiyor"
description: "Viessmann kombi sıcak su vermiyorsa kılavuzun 'Sıcak su yok' tablosuna bak: şebeke anahtarı, sigorta, sıcak su sıcaklığı, işletme programı ve kod."
slug: "viessmann-kombi-sicak-su-vermiyor"
date: "2026-10-01"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-01 07:0x · Kaynak denetimi: viessmann-kombi-sicak-su-vermiyor.KAYNAK.md (bu dosyanın yanında)
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile static.viessmann-climatesolutions.com'dan yeniden indirildi (hepsi HTTP 200,
# application/pdf); md5'lerin hepsi 27 Eyl yerel kopyasıyla birebir. pdftotext -layout, sayfa = PDF sayfası. Web araması KULLANILMADI.
# ÇEKİRDEK SATIR: "Ne yapmalı? — Sıcak su yok" tablosu (Nedeni / Giderilmesi), altı kılavuzun hepsinde var.
# P) Vitopend 100-W · 5791986 TR 4/2019 · https://static.viessmann-climatesolutions.com/resources/technical_documents/TR/tr/VBA/5791986VBA00002_1.pdf
#    HTTP 200 · 810.669 B · 44 sf · md5 5806d06b45d167c0b6e7ebe1ce6c0721 · tablo s.33-34 · ayar s.26
#    "Sıcak su hazırlanması serbest bırakılmalıdır." + işletme programı, sıcak su sıcaklığı, zaman programı · F02-F08 → MODE+OK reset
#    · 0C, A0, CC, F10 ... F98 → servis, "Burada belirtilen bir kilit, sistem işletmecisi tarafından açılamaz." (s.34)
#    · s.26 "Ayar aralığı: 30 - 57 °C" · "30 °C'den küçük ... „OFF“ görünür ve sıcak su hazırlanması devre dışı olur."
# Z) Vitodens 050-W · 5837977 TR 1/2019 · https://static.viessmann-climatesolutions.com/resources/technical_documents/TR/tr/VBA/5837977VBA00001_1.pdf
#    HTTP 200 · 1.133.215 B · 28 sf · md5 96822ea6c393f0cdf728bcf3554afd5a · tablo s.22 · s.16 sıcak su hazırlanmasının kapatılması
#    ("„OFF“ görünene kadar") · s.19 sıcak su sıcaklığının ayarlanması
# H) Vitodens 100-W/111-W/111-F · 6135864 TR 03/2026 · https://static.viessmann-climatesolutions.com/resources/technical_documents/TR/tr/VBA/6135864VBA00011_1.pdf
#    HTTP 200 · 2.171.321 B · 44 sf · md5 5513c22c39f416336369c7d3cbe6d0fe · tablo s.34 · s.23 "Sıcak su hazırlanmasının açılması",
#    "Fabrika ayarı: 50°C", "Hijyenik nedenlerden dolayı sıcak su sıcaklığını 50 °C altında ayarlamamalısınız." · s.3 gaz kokusu
#    · "„Filtre sepeti“ kirlenmiş (yalnızca gaz yakıtlı yoğuşmalı kombiler)." → "Filtre sepetini yetkili servise kontrol ettirin/değiştirtin."
# C) Vitodens Connect / Trend · 6171780 TR 10/2023 · https://static.viessmann-climatesolutions.com/resources/technical_documents/TR/tr/VBA/6171780VBA00004_1.pdf
#    HTTP 200 · 1.851.908 B · 36 sf · md5 17765afa670bf200fd39032c21714795 · tablo s.28 (filtre sepeti satırı VAR; CL → s.23)
# T) Vitodens Connect / Trend · 6173992 TR 05/2026 · https://static.viessmann-climatesolutions.com/resources/technical_documents/TR/tr/VBA/6173992VBA00005_1.pdf
#    HTTP 200 · 1.787.756 B · 36 sf · md5 5c0d0900f6f66d9eb9dc09855ae7cb04 · tablo s.28 (filtre sepeti satırı YOK; CL → s.24)
# D) Vitodens 200-W/222-W/222-F/242-F · 6172120 TR 06/2026 · https://static.viessmann-climatesolutions.com/resources/technical_documents/TR/tr/VBA/6172120VBA00009_1.pdf
#    HTTP 200 · 3.981.854 B · 68 sf · md5 3d0e404231424e9a8ce2e4347c1d992b · tablo s.49 · s.15 "„Sıcak su“ „KAPALI“ ■ Sıcak su hazırlanmaz"
#    · ayar → işletme programı, sıcak su sıcaklığı, saat, zaman programı, "Tüm ısıtma devreleri için „Tatil“ fonksiyonu açıktır"
#    · "Arıza" → sorgula/not al/onayla s.41 · "Şap kurutma" → önlem gerekmez · "Filtre süzgeci" kirli → servis
# ⛔ Bilerek YAZILMAYANLAR: "Yakıt gelmiyor" satırının tedbiri (gaz kapatma vanası — görev talimatı; yalnız "gaz dağıtım şirketine
#    danış" anıldı) · gaz kokusunda vana/elektrik kesme (kılavuz bölümüne yönlendirildi) · filtre sepetini kullanıcının temizlemesi
#    (kılavuz servise bırakıyor) · ECO fonksiyonu (tabloda değil) · "Kullanma suyu çok sıcak" satırı (bu belirti değil) · su doldurma
#    (tabloda yok) · tuş sırası ve sembol şekilleri · maliyet/süre (#46) · kapak açma (#31).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Kombinin şebeke anahtarının ve varsa kazan dairesi dışındaki ana şalterin açık olduğunu kontrol et."
  - "Elektrik dağıtım kutusundaki ev sigortasının açık olduğunu kontrol et."
  - "Kontrol panelinde sıcak su sıcaklığına bak; OFF ya da çok düşük ayarlıysa istediğin değere getirip onayla."
  - "İşletme programında sıcak su hazırlamanın açık olduğunu ve sıcak su zaman programını kontrol et."
  - "Ekranda arıza sembolü ve bir kod görünüyorsa kodu not et ve yetkili teknik servise bildir."
  - "Brülör arızası görünüyorsa (Vitodens'te CL, Vitopend 100-W'de F02–F08) arızayı kılavuzundaki tuşlarla bir kez sıfırla; tekrar gelirse servise haber ver."
  - "Bunlar yerindeyse ve sıcak su hâlâ gelmiyorsa yetkili teknik servise haber ver."
faq:
  - q: "Viessmann kombi sıcak su vermiyor, ilk neye bakmalıyım?"
    a: "Viessmann'ın Vitopend 100-W, Vitodens 050-W, 100-W, Connect, Trend ve 200-W kullanma kılavuzlarında 'Sıcak su yok' adında ayrı bir tablo var. İlk iki satır cihazın kapalı olması ve kontrol panelindeki ayarın doğru olmaması. Yani önce şebeke anahtarı, varsa ana şalter ve ev sigortası; sonra sıcak su sıcaklığı ve işletme programı. Ekranda arıza sembolü ve kod varsa kılavuz kodun yetkili teknik servise bildirilmesini istiyor."
  - q: "Sıcak su sıcaklığını çok düşük ayarlarsam ne olur?"
    a: "Vitopend 100-W kılavuzuna göre sıcak su sıcaklığının ayar aralığı 30–57 °C; 30 °C'nin altında bir değer ayarlanırsa ekranda OFF görünür ve sıcak su hazırlanması devre dışı kalır. Vitodens 100-W kılavuzu fabrika ayarını 50 °C olarak veriyor ve hijyen nedeniyle sıcak su sıcaklığının 50 °C'nin altına ayarlanmamasını istiyor."
  - q: "Kılavuzdaki filtre sepeti nedir, kendim temizleyebilir miyim?"
    a: "Vitodens 100-W, Connect/Trend (10/2023 baskısı) ve 200-W kılavuzlarının 'Sıcak su yok' tablosunda kirlenmiş filtre sepeti satırı var ve yalnız gaz yakıtlı yoğuşmalı kombiler için geçerli. Kılavuzun tedbiri filtre sepetini yetkili servise kontrol ettirmek ya da değiştirtmek; kullanıcının kendisinin temizlemesi için bir tarif vermiyor."
  - q: "Vitopend 100-W'de kod silinmiyor, ne yapmalıyım?"
    a: "Vitopend 100-W kılavuzunda F02, F03, F04, F05, F07 ve F08 için MODE ve OK tuşlarına aynı anda basılarak reset tarif ediliyor. 0C, A0, CC, F10, F18, F30, F38, F51, F59, F70, F78, F80, F88, F90 ve F98 için ise tedbir yetkili teknik servise haber vermek; kılavuz bu kilidin kullanıcı tarafından açılamayacağını yazıyor."
images:
  coverAlt: "Banyo lavabosunda açık bir musluk ve arka planda duvara monte beyaz bir kombi; musluktan buhar çıkmayan soğuk su akıyor"
---

Musluğu açıyorsun, su akıyor ama ısınmıyor. Viessmann'ın kullanma kılavuzlarında tam bu durum için ayrı bir tablo var: **"Sıcak su yok."** Vitopend 100-W, Vitodens 050-W, Vitodens 100-W/111-W/111-F, Vitodens Connect, Vitodens Trend ve Vitodens 200-W/222-W/222-F/242-F kılavuzlarının "Ne yapmalı?" bölümünde yer alan tablo, her nedenin karşısına bir "giderilmesi" yazıyor. Tablonun ilk iki satırı bir parça değil: cihazın kapalı olması ve kontrol panelindeki ayar. Bu yazıda tabloyu senin bakabileceğin satırlardan başlayarak anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Şebeke anahtarı ve ana şalter açık mı, ev sigortası yerinde mi. Sıcak su sıcaklığı OFF ya da çok düşük mü. İşletme programında sıcak su açık mı. Ekranda kod varsa not et; brülör arızasıysa bir kez sıfırla. Gerisi, filtre sepeti dahil, yetkili teknik servisin işi.

⛔ Gaz kokusu alıyorsan bu yazıyı bırak ve kılavuzunun "Gaz kokusu alındığında" bölümüne uy: sigara içme, ışık açma, elektrikli cihaz çalıştırma; kapı ve pencereleri aç, tehlike alanındaki kişileri dışarı çıkar ve bina dışından gaz ve elektrik dağıtım şirketlerine ve yetkili servise haber ver.

## Adım adım: evde denenecekler

**1. Kombi açık mı?** Tablonun ilk satırı: **ısıtma sistemi kapalı.** Altı kılavuzun ilk tedbiri kombinin şebeke anahtarını açmak. Ardından ana şalter gelir; Vitopend 100-W ve Vitodens 050-W "eğer varsa" diyor, Vitodens 100-W, Connect ve Trend kılavuzları ana şalterin kazan dairesi dışında olduğunu yazıyor. Vitodens 200-W kılavuzu sistemin güç kaynağının ayrı bir sigortadan ya da ana şalterden açılmasını istiyor.

**2. Ev sigortası.** Aynı satırın son tedbiri elektrik dağıtım kutusundaki **ev sigortası.** Vitopend 100-W ve Vitodens 050-W bu sigortanın kontrol edilmesini, Vitodens 100-W, Connect ve Trend kılavuzları açılmasını yazıyor.

**3. Sıcak su sıcaklığı.** Tablonun ikinci satırı: **kontrol panelinin ayarı doğru değil.** Tedbir sıcak su sıcaklığını kontrol edip düzeltmek. Bazı modellerde sıcaklık düşürüldükçe sıcak su tamamen kapanıyor: Vitopend 100-W'de ayar aralığı 30–57 °C ve 30 °C'nin altına inilirse ekranda **OFF** görünür, sıcak su hazırlanması devre dışı olur. Vitodens 050-W'de de sıcak su hazırlanması sıcaklık değeri **OFF** görünene kadar düşürülerek kapatılıyor. Ekranda OFF görüyorsan sıcaklığı kılavuzundaki tuşlarla istediğin değere getir ve onayla. Vitodens 100-W kılavuzu fabrika ayarını 50 °C veriyor ve hijyen nedeniyle 50 °C'nin altına inilmemesini istiyor.

**4. İşletme programı ve zaman programı.** Vitopend 100-W ve Vitodens 200-W kılavuzlarının bu satırdaki şartı: **sıcak su hazırlanması serbest bırakılmış olmalı.** Kontrol edilecekler işletme programı, sıcak su sıcaklığı ve sıcak su hazırlanması için zaman programı; Vitodens 200-W saati de listeye ekliyor. Vitodens 200-W'nin işletme programı tablosuna göre "Sıcak su" **KAPALI** ise sıcak su hazırlanmaz; dış hava kompanzasyonlu ya da sabit işletmede tüm ısıtma devreleri için **"Tatil" fonksiyonu** açıksa da sıcak su gelmez. Vitodens 100-W kılavuzunda sıcak su hazırlanmasını açmak için ayrı bir bölüm var.

**5. Ekranda kod var mı?** Tablonun bir satırı ekranda arıza sembolünün görünmesi. Vitodens 100-W, Connect ve Trend kılavuzlarının tedbiri: **gösterilen arıza kodunu yetkili teknik servise bildir.** Vitodens 050-W örnek olarak F2'yi veriyor; Vitodens 200-W'de ekranda "Arıza" yazısı görünüyorsa kılavuz arıza türünü sorgulamanı, mesajı not alıp onaylamanı, gerekirse yetkili servisi bilgilendirmeni istiyor. Kodların anlamı için [Viessmann kombi arıza kodları](/blog/viessmann-kombi-ariza-kodlari/) sayfasına bak.

**6. Brülör arızasını bir kez sıfırla.** Vitodens 100-W, Connect ve Trend kılavuzlarına göre ekranda arıza simgesi ve **CL** yanıp sönüyor, brülör devreye girmiyorsa tedbir brülör arızasını sıfırlamak. Vitopend 100-W'de F02, F03, F04, F05, F07 ya da F08 için **MODE ve OK** tuşlarına aynı anda basılır. Kural hepsinde aynı: arıza tekrar gelirse yetkili teknik servise haber ver; Vitodens kılavuzlarının uyarısıyla brülör arızasını **kısa aralıklarla birkaç kez resetleme.** Tuş sırası [Viessmann kombi CL hatası](/blog/viessmann-kombi-cl-hatasi/) ve [Viessmann Vitopend hata kodları](/blog/viessmann-vitopend-kombi-hata-kodlari/) yazılarında.

**7. Hepsi yerindeyse servis.** Tablonun kalan satırları senin işin değil. Vitodens 100-W, Connect/Trend kılavuzunun 10/2023 baskısı ve Vitodens 200-W kılavuzunda bir satır daha var: **filtre sepeti kirlenmiş** (yalnız gaz yakıtlı yoğuşmalı kombilerde). Tedbiri filtre sepetini **yetkili servise kontrol ettirmek ya da değiştirtmek.** Vitopend 100-W'de 0C, A0, CC, F10 gibi kodlar için de yol aynı.

## Kılavuzun tablosu — altı kılavuz yan yana

| Neden (kılavuzdan) | Giderilmesi (kılavuzdan) | Hangi kılavuzda |
|---|---|---|
| Isıtma sistemi kapalı | Şebeke anahtarı, varsa ana şalter, ev sigortası | Hepsi |
| Kontrol panelinin ayarı doğru değil | Sıcak su sıcaklığını kontrol et ve düzelt | Hepsi |
| Sıcak su hazırlanması serbest değil | İşletme programı, sıcak su sıcaklığı, zaman programı | Vitopend 100-W · Vitodens 200-W |
| Tüm ısıtma devreleri için "Tatil" açık | Fonksiyonu kontrol et | Vitodens 200-W |
| Ekranda arıza sembolü ve kod | Kodu yetkili teknik servise bildir | Hepsi (200-W'de "Arıza" yazısı) |
| Brülör arızası (CL ya da F02–F08) | Bir kez sıfırla; tekrar gelirse servis | Vitopend 100-W · Vitodens 100-W · Connect · Trend |
| Filtre sepeti kirlenmiş (yalnız gaz yakıtlı yoğuşmalı kombiler) | Yetkili servise kontrol ettir ya da değiştirt | Vitodens 100-W · Connect/Trend 10/2023 · 200-W |
| "Şap kurutma" açık | Önlem gerekmez; süre dolunca ayarlı program açılır | Vitodens 200-W |

📌 Tablolarda bir de yakıtın gelmemesiyle ilgili satır var. Bu yazı gaz tarafına girmiyor; doğalgazın geldiğinden emin değilsen kılavuzun dediği gibi gaz dağıtım şirketine danış.

## Ne zaman servis

- Ekranda arıza sembolü ve kod varsa; kılavuz kodun yetkili teknik servise bildirilmesini istiyor.
- Brülör arızasını sıfırladıktan sonra tekrar geliyorsa. Vitodens kılavuzlarının uyarısıyla: giderilmeyen arızalar hayati tehlike oluşturabilir.
- Vitopend 100-W'de 0C, A0, CC, F10, F18, F30, F38, F51, F59, F70, F78, F80, F88, F90 ya da F98 görüyorsan; kılavuz bu kilidin kullanıcı tarafından açılamayacağını yazıyor.
- Filtre sepetinin kontrolü ya da değişimi için.
- Kombi açık, ayarlar doğru ve sıcak su yine de gelmiyorsa.

⛔ Kılavuzların emniyet bölümü: cihazın içini açma, kaplamaları sökme, boru bağlantılarını açma. Cihaz üzerinde yalnız kullanma kılavuzundaki ayarlar yapılır.

Petekler de ısınmıyorsa [Viessmann kombi ısıtmıyor](/blog/viessmann-kombi-kalorifer-isitmiyor/) yazısına bak. Marka bağımsız olarak kombinin neden sıcak su vermediğini [kombi sıcak su vermiyor](/blog/kombi-sicak-su-vermiyor/) yazısı anlatıyor.

Belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren. Bil, gör, çağır.

---
title: "Davlumbaz kendi kendine çalışıyor: kılavuzlara göre"
description: "Davlumbaz kimse dokunmadan mı çalışıyor? Siemens ve Silverline kılavuzları otomatik mod, ardıl çalışma ve hava temizleme olarak anlatıyor. Kontrol sırası."
slug: "davlumbaz-kendi-kendine-calisiyor"
date: "2026-10-30"
category: "Davlumbaz"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (YK #197 boşluk yazıları, P24, satır #117). origin/main'de genel "davlumbaz-kendi-kendine-calisiyor" yok; yakın yazılar: davlumbaz-cekmiyor,
#   davlumbaz-gurultulu-calisiyor, davlumbaz-yag-filtresi-nasil-temizlenir, vestel-davlumbaz-calismiyor, siemens-davlumbaz-filtre-uyarisi.
# Arama kanıtı: BOSLUK.md #117 (OT "davlumbaz neden" #1; "davlumbaz kendi kendine" tam liste).
# Belgeler:
#  (S) Siemens LC97FMR60 / LC98KMR60 davlumbaz kullanım kılavuzu, 24 s.  https://media3.bsh-group.com/Documents/9001618322_H.pdf  md5 d16e30b13911d03940d037ddb3037ab5
#  (L) Silverline 4260 davlumbaz kullanma kılavuzu, 14 s.  md5 11100dc344bda89b726100af9a682166 (3 Eki 2026 PAZ indirmesi; kaynak URL'si kayıtlı değil, 2-3 aramada yeniden bulunamadı)
# Sayfalar (PDF): S s.6 ekran sembolleri, 7.1-7.5 · S s.7 7.7-7.12 ardıl, otomatik mod, sensör · S s.8 Home Connect · S s.11-12 arızalar, onarım uyarısı · L s.6 Timer fonksiyonu.
# NOT: Kılavuzlar "kendi kendine çalışıyor" arıza satırı vermiyor; davranış işlev olarak anlatılıyor. Yazı bunu açıkça söylüyor.
# BİLEREK YAZILMAYANLAR: kart/tuş arızası teşhisi (belgede yok) · Silverline hava temizleme modunu kapatma yöntemi (belge vermiyor) · fiyat (#46).
# Alıntı denetim tablosu: davlumbaz-kendi-kendine-calisiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Davlumbazın kullanım kılavuzu", "Akıllı telefon (Home Connect varsa)"]
steps:
  - "Ekrandaki sembollere bak; otomatik mod, fanın ardıl çalışması ya da yoğun kademe sembolü yanıyor mu kontrol et."
  - "Otomatik mod açıksa kılavuzdaki otomatik işletimi kapatma adımıyla kapat."
  - "Sensör çok sık tepki veriyorsa sensör hassasiyetini kılavuzdaki sırayla düşür."
  - "Kapattıktan sonra fan bir süre dönüyorsa fanın ardıl çalışmasını kapat."
  - "Uzaktan kumandalı modelde LED'lerin düzenli aralıkla sırayla yanıp sönüp sönmediğine bak; yanıyorsa hava temizleme modu açıktır."
  - "Home Connect'e bağlı bir modelse cihazın uygulamadan da çalıştırılabildiğini hatırla ve uygulamadaki ayarlara bak."
  - "Belirtiler bunlara uymuyorsa müşteri hizmetlerini ara; onarımı eğitimli uzman personele bırak."
faq:
  - q: "Davlumbazım kimse basmadan neden çalışıyor?"
    a: "Siemens LC97FMR60 kılavuzuna göre otomatik modda cihazın içindeki sensör pişirme ve kızartma kokusunun yoğunluğunu algılar ve fan kademesini kendisi açar. Silverline 4260 kılavuzunda ise hava temizleme modu motoru belirli aralıklarla kendiliğinden çalıştırır. İkisi de kılavuzlarda arıza değil işlev olarak anlatılıyor."
  - q: "Otomatik mod ne kadar çalışır?"
    a: "Siemens LC97FMR60 kılavuzu otomatik modun en fazla 4 saat çalıştığını yazıyor. Sensör oda hava kalitesinde değişiklik algılamadığında havalandırma zaten kendiliğinden kapanıyor."
  - q: "Davlumbazı kapattım ama fan dönmeye devam ediyor, bozuk mu?"
    a: "Fanın ardıl çalışması açıksa olabilir. Siemens kılavuzuna göre bu işlevde cihaz bir süre daha çalışmaya devam eder ve yaklaşık 10 dakika sonra kendiliğinden kapanır. İşlevi kapatmak için kılavuzun ardıl çalışmayı kapatma bölümü izlenir."
  - q: "Silverline hava temizleme modu nasıl çalışıyor?"
    a: "Silverline 4260 kılavuzuna göre motor çalışırken uzaktan kumandadaki artı tuşuna 2 saniye basıldığında hava temizleme açılır: motor seçili devirde 5 dakika çalışır, 1 saat durur ve bu böyle sürer. Mod açıkken yaklaşık 20 saniyede bir LED'ler sırayla yanıp söner."
images:
  coverAlt: "Mutfakta ocağın üstünde asılı duran bir davlumbaz ve altında hafifçe dönen havalandırma okları"
  steps:
    - "Davlumbazın ekranında yanan küçük semboller, yanında büyüteç çizimi"
    - "Beyaz eldivenli sade siluet el davlumbazın kumanda alanındaki otomatik mod tuşuna dokunuyor"
    - "Sensör çizimi ve yanında hassasiyeti gösteren kademeli bir kaydırıcı"
    - "Kapalı davlumbazın içinde yavaşça dönen fan ve yanında kum saati simgesi"
    - "Uzaktan kumanda ve davlumbaz üzerinde sırayla yanıp sönen küçük ışık dizisi"
    - "Akıllı telefon ekranında davlumbaz simgesi ve yanında kablosuz bağlantı işareti"
    - "Beyaz eldivenli sade siluet el telefon ahizesini tutuyor, yanında davlumbaz çizimi"
---

Mutfağa giriyorsun, davlumbaz zaten çalışıyor. Kimse bir tuşa basmamış. Bu çoğu zaman bir arıza değil: bazı davlumbazlar kokuyu kendileri algılayıp devreye giriyor, bazıları kapatıldıktan sonra bir süre dönüyor, bazıları da saat başı kendini çalıştırıyor. Bu yazıda üreticilerin kendi Türkçe kılavuzlarına dayandık: **Siemens** LC97FMR60 ve **Silverline** 4260. Kendi davlumbazının kılavuzu farklı bir şey söylüyorsa **kendi kılavuzun esastır.**

> ⚠️ **Dürüst sınır:** Bu kılavuzların arıza tablolarında "kendi kendine çalışıyor" diye bir satır yok. Aşağıdakiler kılavuzların işlev olarak anlattığı davranışlar. Hiçbiri sende yoksa kılavuz başka bir sebep saymıyor; o durumda servise git.

## Kılavuzlar ne diyor

| Davranış | Siemens LC97FMR60 | Silverline 4260 |
|---|---|---|
| **Sensörlü otomatik mod** | Sensör kokuyu algılar, fan kademesini kendisi açar; en fazla 4 saat (s.7) | Yok |
| **Ardıl çalışma** | Açıksa, kapatınca yaklaşık 10 dakika daha döner (s.7) | Yok |
| **Zamanlayıcı** | Yok | Hava temizleme: 5 dakika çalışır, 1 saat durur (s.6) |
| **Uygulamadan kumanda** | Home Connect (s.8) | Yok |

## Adım adım: kendiliğinden çalışan davlumbaz

**1. Ekrandaki sembollere bak.** Siemens kılavuzunun ekran bölümü sembolleri sayıyor: **otomatik mod**, **fanın ardıl çalışması**, **yoğun kademe** ve **Home Connect**. Davlumbaz kendiliğinden çalışırken hangisinin yandığına bak ve aşağıdaki adımda onu ele al.

**2. Otomatik modu kapat.** Siemens'e göre otomatik modda fan kademesi bir sensör yardımıyla ayarlanıyor. Kapatma, kılavuzun "Otomatik işletimin kapatılması" bölümündeki tuşla yapılıyor; tuş simgesi modele göre değiştiği için kendi kılavuzundaki bölümü aç. Sensör oda havasında değişiklik algılamazsa havalandırma kendiliğinden kapanıyor ve mod **en fazla 4 saat** çalışıyor.

**3. Sensör hassasiyetini düşür.** Aynı kılavuz sensörlü kontrolün **çok zayıf ya da çok güçlü** tepki vermesi halinde hassasiyeti değiştirmene izin veriyor. Fabrika ayarı **5**, en düşük ayar **0**, en yüksek **9**. Ayar cihaz kapalıyken yapılıyor; sırası kılavuzun "Sensör hassasiyetinin ayarlanması" bölümünde.

**4. Fanın ardıl çalışmasını kapat.** Ardıl çalışma açıkken cihaz kapatıldıktan sonra **bir süre daha çalışıyor**, fan kademesi 1'de başlıyor ve yaklaşık **10 dakika** sonra kapanıyor. İşlevi kapatmak için kılavuzun ardıl çalışmayı kapatma bölümüne bak.

**5. Hava temizleme modunu tanı.** Silverline 4260'ta davlumbazın üzerinde kontrol butonu yok, yalnızca uzaktan kumanda var. Motor çalışırken kumandadaki artı tuşuna 2 saniye basılırsa hava temizleme açılıyor: motor **5 dakika çalışıyor, 1 saat duruyor**, sonra yine 5 dakika çalışıyor. Mod açıkken yaklaşık **20 saniyede bir** LED'ler sırayla yanıp sönüyor. Süre 5 ile 20 dakika arasında ayarlanabiliyor. Kılavuz bu modu kapatmanın ayrı bir tarifini vermiyor; kumandayı ve kılavuzu birlikte kullan.

**6. Home Connect'e bak.** Siemens modeli ağa bağlanıp **Home Connect uygulamasından** kumanda edilebiliyor. Kılavuz cihazın manuel kullanımının her zaman öncelikli olduğunu da yazıyor. Cihaz uygulamadan da kumanda edilebildiği için uygulamadaki ayarlara ve cihaza bağlı telefonlara da bak. Kayıtlı bağlantıları sıfırlama yolu kılavuzun 8.2 bölümünde.

**7. Hiçbiri uymuyorsa servise bırak.** Siemens kılavuzu cihazın arızasında müşteri hizmetlerini aramanı ve onarımı yalnızca **eğitimli uzman personele** bırakmanı istiyor. Davlumbazı kendin açma, kartına ya da kablosuna dokunma.

## Silverline'da LED sayısı süreyi söyler

Hava temizleme açıkken seçili süreyi LED'lerin yanıp sönme sayısından okuyabilirsin. Silverline 4260 kılavuzuna göre 5 dakika geçerliyse 20 saniyede bir **1 kez**, 10 dakika için **2 kez**, 15 dakika için **3 kez**, 20 dakika için **4 kez** LED'ler sırayla yanıp sönüyor. Motorun durduğu 1 saatlik aralıkta da aynı bildirim sürüyor. Mod açıkken motor devri değiştirilemiyor; artı ya da eksi tuşuyla yalnızca süre 5 ile 20 dakika arasında ayarlanıyor. Yani davlumbaz saat başı kısa süre çalışıyorsa ve LED'ler yanıp sönüyorsa bu mod devrededir.

## Kendiliğinden geçen kademeler

Davlumbazın kendini çalıştırması kadar, kademeyi kendiliğinden değiştirmesi de kafa karıştırır. Siemens kılavuzuna göre yoğun kademe açıldığında cihaz yaklaşık **6 dakika** sonra otomatik olarak fan kademesi 3'e geçer. Boost işlevi ise bütün fan ayarlarının etkinleştirilebildiği kısa süreli bir maksimum performanstır; yaklaşık **20 saniye** sonra havalandırma önceden ayarlanmış kademeye geri döner. İkisi de beklenen davranıştır. Yoğun kademeyi kapatmak için herhangi bir fan kademesi ayarlanır; kılavuz bunu "Yoğun kademenin kapatılması" bölümünde anlatıyor.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Otomatik mod, ardıl çalışma, hassasiyet ayarı | Senin, kılavuzdaki bölümler |
| Hava temizleme modunun tanınması | Senin, kumanda ve kılavuz |
| Hiçbir işlev belirtiyi açıklamıyor | Müşteri hizmetleri, eğitimli uzman personel |
| Elektrik kablosu zarar görmüş | Eğitimli uzman personel değiştirir |

⛔ Davlumbazı açma, kartı ya da kabloyu kurcalama.

Davlumbaz çalışıyor ama çekişi zayıfsa [davlumbaz çekmiyor](/blog/davlumbaz-cekmiyor/) yazısına, sesi rahatsız ediyorsa [davlumbaz gürültülü çalışıyor](/blog/davlumbaz-gurultulu-calisiyor/) yazısına, filtre simgesi yanıyorsa [Siemens davlumbaz filtre uyarısı](/blog/siemens-davlumbaz-filtre-uyarisi/) yazısına bak.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

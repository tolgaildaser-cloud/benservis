---
title: "Arçelik klima hata kodları: CH serisi ve internetteki listelerin sorunu"
description: "Arçelik'in yayımladığı tek klima kod tablosu CH serisidir. Otuz dört kodun karşılığı, E ve P listelerinin neden Arçelik'e ait olmadığı ve servis sınırı."
slug: "arcelik-klima-hata-kodlari"
date: "2026-08-21"
category: "Klima"
# 🔴 22 Ağu 2026 — YAZI BAŞTAN YAZILDI (kod tablosu denetimi, TARAMA-1).
# Eski hâli 21 kod satırı veriyordu, 19'u dayanaksızdı. İki blok komple çıkarıldı:
#   E serisi (E1-E4, E5, E6, E10, E13, E14) ve P serisi (P4, P5, P7, P9, P10, P11, P12)
#   → 6 Arçelik klima kılavuzunda ve Arçelik'in kendi kod sayfasında HİÇ geçmiyor.
#   Jenerik Gree/Midea tipi OEM listesi; "Arçelik'in üç kod dili var" çerçevesi de
#   bu uydurma bloklar üzerine kuruluydu, o yüzden çerçeve de gitti.
# CH tarafında üç hata düzeltildi:
#   CH04 → "drenaj tahliye pompası" DEĞİL, Arçelik'te "Şamandıra Anahtarı Hatası"
#   CH08 → Arçelik listesinde CH08 diye kod YOK; fan/pervane kilidi CH10
#   CH09 → "dış ünite fanı" DEĞİL, Arçelik'te "İç Ünite EEPROM Hatası"
# Kaynak: arcelik.com.tr/blog/klima-hata-kodlari — 34 kodluk tam CH tablosu, bu koşuda
# yeniden çekildi. Tablonun tamamı yayımlandı (eskiden 8 satırı vardı).
#
# 📌 YÖNTEM DERSİ (#93): O commit bu bloğu "canlı arcelik-klima yazısıyla birebir uyumlu"
#    gerekçesiyle bırakmıştı. İç tutarlılık doğrulama DEĞİLDİR — iki yazı da aynı uydurma
#    kaynaktan besleniyordu. Ölçüt üreticinin kendi belgesi.
# 📌 "HS = buz çözme" iddiası Arçelik belgesinde doğrulanamadı; kesin ifade yumuşatıldı.
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Telefon kamerası", "Uzaktan kumanda", "Kâğıt ve kalem"]
steps:
  - "Kodu iç ünite göstergesinden fotoğrafla; harfle rakam panelde kolayca karışır."
  - "Kod CH ile başlıyor mu bak: Arçelik'in yayımladığı tablo CH serisidir, E ya da P ile başlayan listeler Arçelik'e ait değildir."
  - "Klimayı kumandadan kapat, şalterinden enerjisini kes, birkaç dakika bekle ve yeniden aç."
  - "Kod resetten sonra geri geliyor mu diye on beş dakika izle; geçici dalgalanma kodları bu sürede kalkar."
  - "İç ünite filtresinin tıkalı olup olmadığını kapağı kaldırıp gözle kontrol et."
  - "Dış ünitenin önünde hava akışını kapatan eşya, branda ya da bitki var mı diye bak."
  - "Kodun hangi çalışma modunda ve kaç dakika sonra geldiğini not et."
  - "Kod resetten sonra da tekrarlıyorsa kodu, model numarasını ve notunu servise ilet."
faq:
  - q: "Arçelik klimanın resmî hata kodu tablosu hangisi?"
    a: "Arçelik'in kendi yayımladığı tek klima kod tablosu CH serisidir ve otuz dört kod içerir: CH01'den başlayıp CH93'e kadar atlamalı olarak gider. İnternette çok dolaşan E ve P serisi listeler Arçelik klima kılavuzlarında ve Arçelik'in kendi kod sayfasında geçmez; bunlar markadan bağımsız genel OEM tablolarıdır. Ekranındaki kod E ya da P ile başlıyorsa cihazının Arçelik olduğundan ve kodu doğru okuduğundan emin ol."
  - q: "CH kodu aldım, evde çözebileceğim bir şey var mı?"
    a: "Arçelik, yayımladığı otuz dört CH kodunun her birinde yetkili servisle iletişime geçilmesi gerektiğini yazıyor; yani kullanıcının kendi çözeceği bir CH kodu tanımlamıyor. Evde yapabileceğin şey kodun sebebini ortadan kaldırmayı denemek: enerjiyi kesip yeniden vermek, iç ünite filtresine bakmak ve dış ünitenin önünü açmak. Bunlar kodu değil, koda yol açabilecek durumu hedefler ve hiçbiri paneli sökmeyi gerektirmez."
  - q: "İnternette gördüğüm Arçelik klima listeleri neden birbirini tutmuyor?"
    a: "Çünkü dolaşımdaki listelerin büyük kısmı Arçelik'e ait değil. E ve P serisi tablolar farklı üreticilerin OEM şemalarından geliyor ve birbirinden kopyalanırken anlamlar da kayıyor; aynı numaraya bir listede kompresör koruması, bir başkasında sensör hatası deniyor. Arçelik'in kendi sayfasındaki CH tablosu ise tek ve tutarlıdır. Ekransız modellerde kod yerine ışık deseni kullanıldığı için o modellerde tek kaynak kılavuzdur."
  - q: "Kod aldıktan sonra klimayı çalıştırmaya devam edebilir miyim?"
    a: "Koduna bağlı. Sensör kaynaklı kodlarda cihaz genelde çalışır ama sıcaklığı doğru okuyamadığı için verimsiz çalışır ve elektrik harcar. Basınç, aşırı akım, kompresör pozisyonu ya da gaz kaçağı bildiren kodlarda ısrarla çalıştırmak arızayı büyütür; bu kodlarda cihazı kapatıp servisle konuşmak doğru olur. Gaz kaçağını işaret eden kodlarda beklemek değil, cihazı kapatmak gerekir."
images:
  coverAlt: "Oturma odasında duvara monte edilmiş beyaz split klima iç ünitesi"
---

Ağustos sıcağında klima sana bir kod gösteriyor ve internette bulduğun üç liste üç farklı şey söylüyor. Bunun sebebi klimanın karmaşıklığı değil: **dolaşımdaki listelerin çoğu Arçelik'e ait değil.**

Arçelik'in kendi yayımladığı tek klima kod tablosu **CH serisidir**. Çok yayılan **E** ve **P** serisi listeler ne Arçelik klima kullanım kılavuzlarında ne de Arçelik'in kendi kod sayfasında geçer; bunlar markadan bağımsız genel OEM tablolarıdır ve birbirinden kopyalanırken anlamları da kaymıştır.

Bu yazıda Arçelik'in yayımladığı **otuz dört CH kodunun tamamını** veriyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚠️ **Ekranındaki kod E ya da P ile başlıyorsa** önce kodu doğru okuduğundan emin ol. Bu iki seri Arçelik'in yayımladığı listede yok; internette bulacağın karşılıkları da doğrulanamıyor. Ekransız modellerde bildirim kod yerine ışıkların yanıp sönme düzeniyle yapılır ve o eşleştirme tamamen modele özeldir — tek kaynak kılavuzdur.

## Adım adım: Arçelik klimada kod okuma

**1. Kodu fotoğrafla.** İç ünitenin göstergesinde harfle rakam kolayca karışır. Yakından çek, sonra rahat rahat oku.

**2. CH ile başlıyor mu bak.** Arçelik'in yayımladığı tablo CH serisidir. Kod CH ile başlıyorsa aşağıdaki tabloda karşılığı vardır; E ya da P ile başlıyorsa elindeki liste Arçelik'e ait değildir.

**3. Resetle.** Klimayı kumandadan kapat, **şalterinden enerjisini kes**, birkaç dakika bekle ve yeniden aç. Elektrik dalgalanması sonrası gelen geçici kodlar burada silinir.

**4. On beş dakika izle.** Reset sonrası kod hemen geri gelmiyorsa cihaza biraz süre tanı. Geçici bir dalgalanmadan kaynaklanan bildirimler bu sürede kalkar; kalıcı olan geri gelir.

**5. Filtreye bak.** İç ünitenin ön kapağını kaldır ve filtrenin tozla tıkanıp tıkanmadığını gözle kontrol et. Tıkalı filtre hava akışını boğar ve cihazı zorlayan durumların gizli sebebidir.

**6. Dış ünitenin önünü aç.** Dış ünitenin önünde hava akışını kapatan eşya, branda, bitki ya da biriken yaprak var mı bak; varsa kaldır. ⚠️ Dış ünitenin kapağını açma, yalnızca çevresini boşalt.

**7. Bağlamı not et.** Kod hangi modda geldi — soğutma mı, kurutma mı? Cihaz açıldıktan kaç dakika sonra düştü? Bu iki bilgi servis için kodun kendisi kadar değerlidir.

**8. Tekrarlıyorsa aktar.** Reset ve on beş dakikadan sonra kod hâlâ geliyorsa kodu, model numarasını ve notunu servisle paylaş.

## Önce bilinmesi gereken: CH kodlarının hepsi servis konusudur

Arçelik, yayımladığı otuz dört kodun **her birinde** yetkili servisle iletişime geçilmesi gerektiğini yazıyor. Yani kullanıcının kendi kapatacağı bir CH kodu tanımlanmamış.

Bu, evde yapacak bir şeyin olmadığı anlamına gelmiyor — ama ne yaptığını doğru bilmek gerekiyor. Yukarıdaki adımlar kodu silmeyi değil, **koda yol açabilecek durumu ortadan kaldırmayı** hedefler: tıkalı filtre, önü kapanmış dış ünite, elektrik dalgalanması. Bunlar düzeldiğinde bazı kodlar geri gelmez. Gelenler ise gerçek bir teşhis istiyordur.

## Arçelik klima CH kod tablosu

### İç ünite: sensör, kumanda ve kart

| Kod | Arçelik'in karşılığı |
|---|---|
| **CH01** | İç ünite oda sıcaklık sensör hatası |
| **CH02** | İç ünite giriş boru sensörü hatası |
| **CH03** | Kablolu uzaktan kumanda hatası |
| **CH04** | Şamandıra anahtarı hatası (opsiyonel) |
| **CH06** | İç ünite çıkış boru sensör hatası |
| **CH09** | İç ünite EEPROM hatası |
| **CH10** | İç ünite BLDC motor pervane kilidi |
| **CH12** | İç ünite orta boru sensörü hatası |

### İletişim ve eşleşme

| Kod | Arçelik'in karşılığı |
|---|---|
| **CH05** | İç ünite ve dış ünite arasında iletişim hatası |
| **CH51** | Kapasite aşımı (iç/dış ünite arasında yanlış eşleşme) |
| **CH53** | İletişim hatası (iç ve dış ünite) |
| **CH93** | İletişim hatası (giriş ve çıkış) |

### Kompresör, akım ve besleme

| Kod | Arçelik'in karşılığı |
|---|---|
| **CH21** | Düşük DC akım (IPM) hatası |
| **CH22** | CT 2 (maksimum CT) hatası |
| **CH23** | DC link düşük voltaj hatası |
| **CH26** | DC kompresör pozisyon hatası |
| **CH27** | PSC arıza hatası |
| **CH29** | Kompresör faz hatası, aşırı akım hatası |
| **CH40** | CT sensörü hatası |
| **CH67** | BLDC motor kilitlenme hatası |

### Basınç, sıcaklık ve soğutucu devresi

| Kod | Arçelik'in karşılığı |
|---|---|
| **CH32** | Kompresör basma hattı boru sensörü aşırı ısınma hatası |
| **CH34** | Yüksek basınç sensörü yüksek hatası |
| **CH35** | Düşük basınç sensörü düşük hatası |
| **CH36 – CH38** | Soğutucu akışkan gaz kaçak hatası |
| **CH37** | Kompresyon oran limitini aşma hatası |
| **CH42** | Düşük basınç sensörü hatası |
| **CH43** | Yüksek basınç sensörü hatası |
| **CH61** | Kondenser boru sıcaklığı yüksek hatası |
| **CH62** | Anakart soğutma sensörünün sıcaklığı yüksek hatası |
| **CH72** | 4 yollu vana konum hatasının tespiti |

### Dış ünite sensörleri

| Kod | Arçelik'in karşılığı |
|---|---|
| **CH41** | Basma hattı boru sensörü hatası |
| **CH44** | Dış hava sensörü hatası |
| **CH45** | Kondenser orta boru sensörü hatası |
| **CH46** | Emme hattı boru sensörü hatası |

> 📌 **Tablodaki boşluklar tabloda yok demektir.** Arçelik'in listesi atlamalıdır: CH07, CH08, CH11 gibi numaralar yayımlanan tabloda bulunmaz. İnternette bu numaralara verilen karşılıkların dayanağı yoktur.

## Öne çıkan iki kod

### CH36 – CH38: soğutucu gaz kaçağı
Bu üç kod gaz kaçağını bildirir ve cihazı çalıştırmaya devam etmek doğru değildir: gazı azalmış bir sistemde kompresör yağsız ve aşırı ısınarak çalışır. Kod geldiğinde klimayı kapat ve servisle konuş. Gaz dolumu ve kaçak tespiti kapalı basınçlı devreye müdahaledir; ekipman ve yetki ister.

### CH04: şamandıra anahtarı
Şamandıra anahtarı, iç ünitedeki yoğuşma suyunun tahliye seviyesini izler. Bu kod çoğu zaman iç üniteden **damlama** şikâyetiyle birlikte gelir. Tahliye hattının tıkanması sık görülen bir durumdur ama hattın kendisine müdahale montaj işidir.

## Bir de ekranda görebileceğin "HS"

Ekranında **HS** yazısı görüyorsan: bu bir arıza kodu değildir, cihazın buz çözme gibi bir iç işlemi yürüttüğünü gösteren yaygın bir gösterimdir ve işlem bitince kaybolur. Bu sırada üflemenin geçici olarak durması ya da zayıflaması normaldir. Ancak dürüst olmak gerekirse: **HS, Arçelik'in yayımladığı kod tablosunda yer almıyor**, o yüzden kendi modelin için kesin karşılığını kılavuzundan teyit et. Ekranda kalıcı hâle gelir ve cihaz normal çalışmaya hiç dönmezse gerçekten bakılması gereken bir durum var demektir.

## Servis sınırı

⛔ **Dış üniteyi ve gaz devresini kurcalama.** Klimanın soğutucu hattı basınçlı ve kapalı bir devredir; açmak da doldurmak da yetki ve ekipman ister. Dış ünite ayrıca 220V beslenir ve fanı güçlüdür. Kullanıcıya ait alan **kumanda, şalter ve filtre kapağı** seviyesidir; panelin ötesi servise aittir.

Filtre temizliğinin adım adım anlatımını benservis.com blogundaki klima filtresi nasıl temizlenir yazısında, diğer markaların kod tablolarını ise klima arıza kodları yazısında bulabilirsin. Cihazının koduna ve belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.

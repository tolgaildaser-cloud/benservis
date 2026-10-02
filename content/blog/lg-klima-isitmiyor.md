---
title: "LG klima ısıtmıyor: sıcak hava gelmiyorsa"
description: "LG klima sıcak hava üflemiyorsa LG kılavuzunun sırası: Isıtma modu, ılık havayı bekleme, buz çözme, düşük dış sıcaklık, kapı-pencere ve filtre."
slug: "lg-klima-isitmiyor"
date: "2026-10-02"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, LG grubu, belirti rehberi). İki belge de bu koşuda curl -sL -A "Mozilla/5.0" ile LG'nin kendi alan adı gscs-b2c.lge.com'dan yeniden indirildi, HTTP 200; md5'ler 30 Eyl kopyalarıyla birebir aynı.
# #88: web araması YALNIZ belge yerini bulmak için; forum/servis sitesi/üçüncü taraf kullanılmadı. Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-lg-2eki/ (MD5.txt)
#   ve ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-lg-mitsubishi-klima-sprint/ (D'nin metin katmanı 29 kod noktası kaymalı; dec.py ile çözülmüş lg-oWezd6acEM51ZIvWrjKjw.dec.txt okundu). Sayfa = PDF sayfası.
#  D) LG "KULLANICI EL KİTABI KLİMA · TİP: DUVAR TİPİ" (Türkçe; lg.com/tr S12ETK ürün sayfasının kılavuz listesinden)  https://gscs-b2c.lge.com/downloadFile?fileId=oWezd6acEM51ZIvWrjKjw  42 s.  md5 370ac02f4f4bcfa0bf866058acdccd8e
#  K) LG "KULLANICI EL KİTABI KLİMA" gizli tavan tipi kanallı (MFL67522523, Türkçe)  https://gscs-b2c.lge.com/open/downloadFile?fileId=RMV9u3J8EsbYsPNl3uhxw  28 s.  md5 88e9d7e61b646813e3b6f4cf868612b7
# "Klima ılık hava üflemiyor" satırı (D s.38; K s.20 "Cihaz sıcak hava vermiyor." aynı içerik):
#   "Isıtma Modu başlatıldığında, panel neredeyse kapalıdır ve dış mekan ünitesi çalışıyor olsa bile hava çıkmaz. x Bu normal bir belirtidir. Lütfen ünite iç mekan ünitesinin üfleyecek kadar ılık hava üretmesini bekleyin."
#   · "Dış mekan ünitesi Buz Giderme Modundadır. x Isıtma modunda, dış mekan sıcaklığı düştüğünde, bobinler üzerinde buz/don meydana gelir. Bu işlev bobin üzerindeki donmayı kaldırır ve yaklaşık 15 dakika içinde bitirir."
#   · "Dış mekan sıcaklığı çok düşük. x Isıtma etkisi yeterli olmayabilir."
# Diğer: D s.15 mod listesi: "Yalnızca Soğutma Modeli" listesinde Isıtma yok; "Soğutma ve Isıtma Modeli" listesinde Isıtma Modu var · D s.17 Isıtma Modu: "1 Cihazı açın. 2 Isıtma Modunu seçmek için MODE düğmesine arka arkaya basın. 3 İstenile sıcaklığa ayarlamak için ▲ veya ▼ düğmesine basın."
#   · D s.17 NOT: "Buz çözme işlemi gerçekleştirilirken iç mekan ünitesinde [gösterge] görüntülenir." / aynı gösterge "Ön ısıtma gerçekleştirilirken" ve "Oda sıcaklığı ayarlanan sıcaklığa ulaştığında" (sembol metin katmanında okunmuyor)
#   · D s.17 Jet: "kış mevsiminde hızlıca ısıtmanızı sağlar"; "Bazı modellerde Jet Isıtma Modu kullanılmaz."; "Jet Isıtma Modu, güçlü hava 30 dakika boyunca üflenir." "30 dakika sonra ayar sıcaklığı 30 C'de kalır."
#   · D s.36 "Fan Modu ... iç mekan havasını ısıtmadan veya soğutmadan klima hava üfler." · D s.36 "Fan hızı ayarlanmıyor / Sıcaklık ayarlanmıyor": Jet/Otomatik/Fan modunda ayarlanamaz · K s.18 hava akışı ayarlanan sıcaklığa erişince ısıtmada soğuk hava akışını önlemek için azalır
#   · D s.9 ipuçları: "Klimayı çalıştırırken kapıları ve pencereleri sıkıca kapatın." · "Kısa süre içinde iç mekan havasını hızlı şekilde ısıtmak veya soğutmak için fanı hızlandırın." · "Hava filtresini 2 haftada bir temizleyin. Hava filtresinde toplanan toz ve kirler hava akışını engelleyebilir veya cihaz performansını düsürebilir."
#   · D s.31-32 filtre (güç kapat + fişi çek; tutma kollarından kaldırıp çıkar; süpürge ya da nötr deterjanlı ılık su; en fazla 40 °C; gölgede kurut; kancaları ön kapağa tak) · D s.31 bakım tablosu: ısı değişim bobini, fan, drenaj "uzman birinden yardım alın"
#   · D s.34 "Hata meydana geldiğinde, iç mekan ünitesindeki lamba 2 saniye aralıkla yanıp söner. ... servis merkezi ile iletişime geçin." · D s.37 dış üniteden ısıtmada yoğuşma suyu damlar → "Tesisatçı ile iletişime geçin." · D s.25 Donma koruması "Isıtma Modu ile kullanılır"
# BİLEREK YAZILMAYANLAR: gaz eksikliği/dört yollu vana/kompresör teşhisi (belgede yok) · dış ünitedeki buzu elle ya da sıcak suyla çözme (belgede yok; buz çözmeyi cihaz kendi yapıyor) · ayar sıcaklığını oda sıcaklığının üstüne getirme talimatı (ısıtma satırında yok)
#   · Jet Isıtma rakamlarını tüm modellere genelleme · LG'nin hangi dış sıcaklıkta ısıtmanın düştüğüne dair rakam (belgede yok) · fiyat.
# Alıntı denetim tablosu: lg-klima-isitmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (filtre kuruma hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Elektrikli süpürge", "Nötr deterjan ve ılık su"]
steps:
  - "Klimayı aç ve MODE düğmesine arka arkaya basarak Isıtma Modunu seç; Fan modunda klima ısıtmaz."
  - "İstediğin sıcaklığı yukarı ve aşağı ok düğmeleriyle ayarla."
  - "Isıtma yeni başladıysa iç ünitenin ılık hava üretmesini bekle; bu sırada hava çıkmaması normal."
  - "İç ünitede buz çözme göstergesi yanıyorsa dış ünitenin buz çözmeyi bitirmesi için yaklaşık 15 dakika bekle."
  - "Klima çalışırken kapıları ve pencereleri kapat."
  - "Klimayı kapat, fişini çek, hava filtresini çıkar; süpürgeyle ya da en fazla 40 °C nötr deterjanlı suyla temizle, gölgede kurutup tak."
  - "Odayı hızlı ısıtmak için fanı hızlandır ya da modelinde varsa Jet Isıtma'yı kullan."
faq:
  - q: "LG klimam Isıtma modunda ama hiç hava gelmiyor. Bozuk mu?"
    a: "İlk dakikalarda değil. LG'nin duvar tipi klima kılavuzuna göre Isıtma Modu başlatıldığında panel neredeyse kapalıdır ve dış ünite çalışıyor olsa bile hava çıkmaz. LG bunu normal bir belirti sayıyor ve iç ünitenin üfleyecek kadar ılık hava üretmesinin beklenmesini istiyor."
  - q: "Kışın klima bir süre ısıtmayı kesiyor, neden?"
    a: "LG'ye göre ısıtma modunda dış sıcaklık düştüğünde dış ünitenin bobinlerinde buz ve don oluşur. Buz Giderme Modu bu donmayı kaldırır ve yaklaşık 15 dakika içinde biter; bu sırada iç ünitede buz çözme göstergesi görünür. Dış sıcaklık çok düşükse LG'ye göre ısıtma etkisi yeterli olmayabilir."
  - q: "Kumandamda Isıtma modu yok. Neden?"
    a: "LG'nin kılavuzu mod listesini iki ayrı model tipi için veriyor. Yalnızca Soğutma Modeli'nin listesinde Isıtma Modu bulunmuyor; Isıtma Modu, Soğutma ve Isıtma Modeli'nin listesinde yer alıyor. Kumandada Isıtma modu çıkmıyorsa modelinin tipini kılavuzundan ya da yetkili LG servisinden öğren."
  - q: "Isıtma sırasında dış üniteden su damlıyor, sorun mu?"
    a: "LG'nin sorun giderme tablosuna göre ısıtma işlemlerinde ısı dönüştürücüden yoğunlaşmış su damlar. LG bu durumda taban tepsisinin altına bir tahliye hortumu kurulmasını ve bunun için tesisatçıyla iletişime geçilmesini öneriyor."
images:
  coverAlt: "Kış günü bir odada duvara monte iç ünitenin önünde, elinde kumanda tutan ve üzerinde kalın hırka olan bir kişi"
---

Hava soğudu, klimayı ısıtmaya aldın ama odaya sıcak hava gelmiyor. LG'nin duvar tipi klima kullanıcı el kitabındaki sorun giderme tablosunda bunun karşılığı **"Klima ılık hava üflemiyor."** satırı. Dikkat çekici olan şu: LG'nin bu satırda saydığı üç nedenin ikisi arıza değil. Isıtma başlarken **havanın bir süre hiç gelmemesi** ve dış ünitenin **buz çözme** yapması, LG'ye göre beklenen durumlar. Bu yazıda önce bunları ayırıyor, sonra kumanda, oda ve filtre tarafında yapabileceklerini LG'nin kendi sırasıyla anlatıyoruz. Kaynak iki LG kullanıcı el kitabı; tuş adları ve özellikler modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Isıtma Modu seçili mi (Fan modunda klima ısıtmaz) → sıcaklığı ayarla → ısıtma yeni başladıysa ılık havanın gelmesini bekle → iç ünitede buz çözme göstergesi varsa yaklaşık 15 dakika bekle → kapı ve pencereleri kapat → hava filtresini temizle → hızlı ısınma için fanı hızlandır ya da varsa Jet Isıtma. Dış hava çok soğuksa LG'ye göre ısıtma yetersiz kalabilir.

## Adım adım: evde denenecekler

**1. Isıtma Modunu seç.** LG'nin kılavuzundaki sıra: **cihazı aç** ve **Isıtma Modunu seçmek için MODE düğmesine arka arkaya bas;** seçilen mod ekranda bir işaretle gösterilir. Kumandada **Fan** modu seçiliyse LG'nin tarifine göre klima iç mekan havasını **ısıtmadan veya soğutmadan** yalnız hava üfler. Kumandada Isıtma modu hiç çıkmıyorsa aşağıdaki SSS'ye bak: LG'nin mod listesinde Isıtma, yalnız **Soğutma ve Isıtma Modeli** için yer alıyor.

**2. Sıcaklığı ayarla.** Isıtma Modu talimatının üçüncü adımı: **istediğin sıcaklığa ayarlamak için yukarı ya da aşağı ok** düğmesine bas. LG'nin tablosuna göre **Fan** ya da **Jet** modundayken sıcaklık ayarlanamıyor; sıcaklık değişmiyorsa önce modu kontrol et.

**3. Ilık havayı bekle.** LG'nin tablosundaki ilk satır: **Isıtma Modu başlatıldığında panel neredeyse kapalıdır ve dış mekan ünitesi çalışıyor olsa bile hava çıkmaz.** LG'nin yorumu net: **bu normal bir belirtidir;** iç ünitenin **üfleyecek kadar ılık hava üretmesini bekle.** Kılavuza göre iç ünitede **ön ısıtma** sırasında da bir gösterge yanıyor. Ayarlanan sıcaklığa ulaşıldığında da hava akışı azalabilir; LG'ye göre bu, ısıtma sırasında soğuk hava akışını önlemek için yapılıyor.

**4. Buz çözme göstergesine bak.** Tablodaki ikinci satır: **dış mekan ünitesi Buz Giderme Modunda.** LG'nin açıklaması: ısıtma modunda **dış sıcaklık düştüğünde** dış ünitenin bobinlerinde **buz ve don** oluşur; bu işlev donmayı kaldırır ve **yaklaşık 15 dakika içinde** biter. Kılavuza göre buz çözme sırasında **iç ünitede bir gösterge** görünür. Bu sürede ılık hava gelmemesi bundan; işlemin bitmesini bekle.

**5. Kapı ve pencereleri kapat.** LG'nin kullanım ipuçlarındaki madde: **klimayı çalıştırırken kapıları ve pencereleri sıkıca kapat.**

**6. Hava filtresini temizle.** LG'nin ipuçlarına göre **hava filtresinde toplanan toz ve kirler hava akışını engelleyebilir veya cihaz performansını düşürebilir;** LG filtrenin **2 haftada bir** temizlenmesini istiyor. Filtre talimatı: **gücü kapat ve güç kablosunu prizden çek,** filtreyi tutma kollarından tutup yavaşça kaldırarak çıkar, **elektrikli süpürgeyle ya da nötr deterjanlı ılık suyla** temizle. Kılavuza göre filtre temizlenirken su **en fazla 40 °C** olmalı; filtreyi **gölgede kurut** ve kancalarını ön kapağa takarak yerine yerleştir.

**7. Hızlı ısınma için fanı ya da Jet'i kullan.** LG'nin ipuçlarına göre iç mekan havasını **kısa sürede hızlı ısıtmak için fanı hızlandır.** Modelinde **Jet Isıtma** varsa LG'ye göre bu işlev kış mevsiminde odayı hızlıca ısıtır: güçlü hava **30 dakika** üflenir, sonra ayar sıcaklığı **30 °C**'de kalır. LG'nin notu: **bazı modellerde Jet Isıtma Modu kullanılmaz.**

## Arıza olmayan durumlar

**Dış hava çok soğuk.** LG'nin tablosundaki üçüncü satır: **dış mekan sıcaklığı çok düşükse ısıtma etkisi yeterli olmayabilir.** Kılavuz bunun için bir eşik sıcaklığı vermiyor.

**Dış üniteden su damlıyor.** LG'ye göre ısıtma sırasında ısı dönüştürücüden **yoğunlaşmış su damlar.** LG bunun için taban tepsisinin altına bir tahliye hortumu kurulmasını ve bunun için **tesisatçıyla** iletişime geçilmesini öneriyor.

Markadan bağımsız anlatım için [klima sıcak hava üflemiyor](/blog/klima-sicak-hava-uflemiyor/) yazısına, filtre için [klima filtresi temizleme](/blog/klima-filtresi-temizleme/) rehberine bakabilirsin. Klima hiç açılmıyorsa [LG klima çalışmıyor](/blog/lg-klima-calismiyor/) sayfasına geç.

## Ne zaman servis

- İç ünitedeki lamba **2 saniye aralıkla yanıp sönüyorsa** LG'nin otomatik tanılama açıklamasına göre bir hata meydana gelmiştir; **satıcınla ya da servis merkeziyle** iletişime geç.
- Üniteden **yanık kokusu ya da normal olmayan sesler** geliyorsa LG'nin talimatı: klimayı kapat, **güç kablosunu prizden çek** ve servis merkeziyle iletişime geç.
- Isıtma Modu seçili, buz çözme bitmiş, kapılar kapalı ve filtre temiz olduğu hâlde ılık hava gelmiyorsa LG'nin genel yönlendirmesi geçerli: **sorun devam ederse yerel servis merkezinle iletişime geç.**
- LG'nin bakım tablosuna göre **ısı değişim bobini, fan ve drenaj** temizliği için **uzman birinden yardım** alınmalı.

⛔ **Kendin-çöz sınırı burada biter.** Mod, sıcaklık, bekleme, oda ve filtre kullanıcıya; iç ve dış ünitenin iç parçaları ve soğutucu devre uzmana aittir.

## Servisi aramadan önce kısa özet

1. Kumandada hangi mod seçili, Isıtma modu listede var mı?
2. Isıtmayı açtıktan sonra ne kadar bekledin?
3. İç ünitede buz çözme ya da başka bir gösterge yanıyor mu?
4. Dışarısı ne kadar soğuk?
5. Filtreyi en son ne zaman temizledin, iç ünitedeki lamba yanıp sönüyor mu?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

---
title: "LG bulaşık makinesi temiz yıkamıyor"
description: "LG bulaşık makinesi bulaşıkta kir bırakıyorsa LG'nin listesi: program, deterjan miktarı, ön temizlik, yerleştirme, püskürtücü kollar ve filtreler."
slug: "lg-bulasik-makinesi-temiz-yikamiyor"
date: "2026-10-02"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, LG grubu, belirti rehberi). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile LG'nin kendi alan adı gscs-b2c.lge.com'dan indirildi, HTTP 200.
# Belge kimliği lg.com/tr DFC325HD.ABDPLTK ürün destek sayfasının kılavuz listesinden (www.lg.com/ncms/api/v1/support/proxy/retrieveManualSoftwareList?locale=TR) alındı. #88: forum/servis sitesi/üçüncü taraf kullanılmadı.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-lg-2eki/ (MD5.txt) · okuma pdftotext -layout, sayfa = PDF sayfası (= basılı sayfa no).
#  (L) LG DFC325HD bulaşık makinesi kullanıcı el kitabı (MFL70282453, 25/04/2025, Türkçe)  https://gscs-b2c.lge.com/downloadFile?fileId=yDLoRUEJzXe5wldA1WMfA  68 s.  md5 fbec0dd89693f32e887bbe220033f9f4
# Performans tablosu (L s.65-66) "Bulaşıklarda gıda kiri kalmış.":
#   "Doğru olmayan program seçilmiş • Kir seviyesine ve yıkanan bulaşık türüne uygun şekilde doğru programı seçin." · "Su sıcaklığı çok düşük. • Su besleme bağlantısını ya da su ısıtıcı ayarını kontrol edin."
#   · "Bulaşık makinesi deterjanı kullanılmamış. • Tavsiye edilen deterjanı kullanın." · "Düşük giriş suyu basıncı • Su basıncı 0,05 ile 1,0 MPa arasında olmalıdır."
#   · "Püskürtücü kolların üzerindeki su jeti delikleri tıkanmış. • Püskürtücü kolları temizleyin." · "Bulaşıklar doğru yüklenmemiş. • Bulaşıkların püskürtücü kol dönüşünü engellenmediğinde ya da deterjan haznesiyle çakışmadığından emin olun."
#   · "Filtreler tıkanmış. • Filtreleri temizleyin." · "Bulaşıklarda çok fazla temizlenmemiş gıda kiri mevcut. • Yıkama işlemine başlamadan önce büyük gıda atık parçaları bulaşıklardan temizlenmelidir."
# Diğer: L s.29-30 programlar (Otomatik: kir miktarı ve su berraklığını algılar · Yoğun: aşırı kirli ve sertleşmiş kirler, en güçlü püskürtme · Turbo/Hızlı: hafif kirli) · L s.31 Çift Duşlama (çok kirliler alt rafa, az kirliler üst rafa) · L s.31 Yüksek Sıcaklık
#   · L s.48 deterjan miktarı tablosu (Otomatik/Yoğun/Narin/Turbo/Hızlı 20 g, Eko 22 g) · "Sadece bulaşık makinesinde kullanılabilen deterjan kullanın." · "Çok fazla deterjan bulaşıklarda ve tamburda bir film bırakılmasına neden olarak kötü yıkama sonuçlarına sebebiyet verebilir."
#   · L s.49 / s.30 Hızlı programda tablet önerilmez · L s.22 kullanım: püskürtücü kolların rahat döndüğünden emin ol, "Dönmüyorsa püskürtücü kolu çıkarın ve temizleyin." · bulaşığı üst üste koyma · yıkamadan önce/sonra filtreyi temizle
#   · L s.40 "Hatalı yükleme, daha düşük kurutma ya da temizlik performansı ile sonuçlanabilir." · L s.45 raf ayarından sonra kolların serbest dönmesini kontrol et
#   · L s.57 Püskürtücü Kolları Temizleme ("Püskürtücü kol delikleri herhangi bir gıda atığı nedeniyle tıkanırsa yetersiz su püskürtme nedeniyle bulaşıklar iyice temizlenmeyebilir.") · üst kol: rafı öne çek, delikleri kontrol et, somunu 1/8 tur çevirip çıkar, durula/salla, geri tak, 1/8 tur sabitle · s.58 akan suyla temizle, dönüşü kontrol et · iğne/keskin alet ile delik açma
#   · L s.56 filtre temizliği · L s.55 iki haftada bir temizlik
# BİLEREK YAZILMAYANLAR: iğne/keskin aletle püskürtücü kol deliği açma (alet kuralı; gövdede servis/kılavuz yönlendirmesiyle anıldı) · su basıncı ölçümü ya da su ısıtıcı ayarı (tesisat; gövdede belgeye atıfla anıldı)
#   · pompa/ısıtıcı teşhisi (belgede bu satırda yok) · değişken açılı kol ucunu elle çevirme (belge yasaklıyor) · başka modellere genelleme · fiyat.
# Alıntı denetim tablosu: lg-bulasik-makinesi-temiz-yikamiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~25 dakika"
  totalTime: "PT25M"
  cost: "Ücretsiz"
  tools: ["Bulaşık makinesi deterjanı", "Yumuşak bir fırça"]
steps:
  - "Kir seviyesine uygun programı seç; çok kirli ve kurumuş kirli bulaşıklar için Yoğun programı kullan."
  - "Yalnız bulaşık makinesi deterjanı kullan ve miktarı kılavuzdaki tabloya göre ayarla."
  - "Yıkamadan önce büyük yemek artıklarını bulaşıklardan al."
  - "Bulaşıkları üst üste koymadan, püskürtücü kolların dönüşünü ve deterjan haznesini engellemeyecek şekilde yerleştir."
  - "Üst ve alt püskürtücü kolu elle çevirip rahat döndüklerini kontrol et."
  - "Kolların su jeti deliklerine bak; gıda artığı varsa kolu akan su altında durula."
  - "Alt rafı çıkar, filtreleri çıkarıp akan suyla yumuşak fırçayla temizle ve klik sesiyle yerine tak."
faq:
  - q: "LG bulaşık makinesi bulaşıklarda yemek artığı bırakıyor, neden?"
    a: "LG'nin DFC325HD kullanıcı el kitabındaki performans tablosu 'Bulaşıklarda gıda kiri kalmış' satırında sekiz neden sayıyor: yanlış program, düşük su sıcaklığı, bulaşık makinesi deterjanı kullanılmaması, düşük giriş suyu basıncı, tıkalı püskürtücü kol delikleri, yanlış yerleştirme, tıkalı filtreler ve önceden temizlenmemiş büyük yemek artıkları."
  - q: "Bulaşıkları makineye koymadan önce durulamam gerekir mi?"
    a: "LG durulamayı değil, büyük artıkların alınmasını istiyor: tabloya göre yıkamaya başlamadan önce büyük gıda atık parçaları bulaşıklardan temizlenmelidir. Bulaşıklar hemen yıkanmayacaksa kılavuzdaki Durulama programı kurumuş kirleri yumuşatmak için bulaşıkları hızlıca durular; bu programda deterjan kullanılmaz."
  - q: "Çok deterjan koyarsam daha iyi yıkamaz mı?"
    a: "LG'ye göre hayır. Kılavuza göre çok fazla deterjan bulaşıklarda ve tamburda film bırakarak kötü yıkama sonucuna yol açabilir ve fazla köpük oluşturabilir. DFC325HD'nin deterjan tablosunda Eko programı için 22 g, Otomatik, Yoğun, Turbo ve Hızlı için 20 g yazıyor."
  - q: "Hızlı programda tablet kullanabilir miyim?"
    a: "LG önermiyor. Kılavuza göre Hızlı programda tablet deterjan kullanılırsa görece düşük durulama sıcaklıkları nedeniyle bulaşıklarda deterjan kalıntısı kalabilir. Hızlı program LG'nin tarifiyle hafif kirli bulaşıklar için."
images:
  coverAlt: "Açık bulaşık makinesinin alt sepetinde kenarında kurumuş yemek artığı kalmış bir tabak, altında görünen püskürtücü kol"
---

Program bitti ama tabağın kenarında hâlâ yemek artığı var. LG'nin DFC325HD bulaşık makinesi kullanıcı el kitabındaki performans tablosunda bunun karşılığı **"Bulaşıklarda gıda kiri kalmış."** satırı. LG bu satırda tam sekiz neden sayıyor ve çoğu kullanıcının elinde: **program seçimi, deterjan, yemek artıkları, yerleştirme, püskürtücü kollar ve filtreler.** Su sıcaklığı ve su basıncı gibi iki neden ise evin tesisatıyla ilgili. Bu yazıda LG'nin listesini makineye yükleme sırasına göre diziyoruz. Kaynak tek bir modelin kılavuzu; program ve seçenek adları modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kir seviyesine uygun program (çok kirliye Yoğun) → yalnız bulaşık makinesi deterjanı, tablodaki miktar → büyük yemek artıklarını önceden al → kolları ve deterjan haznesini kapatmadan yerleştir → kollar rahat dönüyor mu → kol delikleri temiz mi → filtreleri temizle. Su sıcaklığı ve basıncı tesisat tarafı.

## Adım adım: evde denenecekler

**1. Programı kire göre seç.** LG'nin tablosundaki ilk neden: **doğru olmayan program seçilmiş** → **kir seviyesine ve yıkanan bulaşık türüne uygun** programı seç. DFC325HD'nin program tarifleri: **Yoğun** aşırı kirli ve **sertleşmiş kirlere** sahip bulaşıklar için, en güçlü püskürtme yoğunluğuyla çalışır; **Otomatik** kir miktarını ve su berraklığını algılayarak yıkamayı ayarlar; **Turbo** ve **Hızlı** ise hafif kirli bulaşıklar içindir. Modelinde **Çift Duşlama** seçeneği varsa LG çok kirli tabak ve kapları **alt rafa**, fincan ve tatlı tabağı gibi az kirlileri **üst rafa** koymayı öneriyor.

**2. Doğru deterjanı doğru miktarda koy.** Tablodaki neden: **bulaşık makinesi deterjanı kullanılmamış** → tavsiye edilen deterjanı kullan. LG'ye göre yalnız **bulaşık makinesinde kullanılabilen** deterjan kullanılmalı; uygun olmayan deterjan makinenin köpükle dolmasına yol açabiliyor. Miktar da önemli: kılavuzdaki tabloda **Eko için 22 g**, Otomatik, Yoğun, Narin, Turbo ve Hızlı için **20 g** yazıyor. LG'nin notu: **çok fazla deterjan** bulaşıklarda ve tamburda film bırakıp **kötü yıkama sonucuna** neden olabiliyor. Hızlı programda tablet önerilmiyor.

**3. Büyük artıkları önceden al.** Tablonun son satırı: bulaşıklarda **çok fazla temizlenmemiş gıda kiri** varsa, **yıkamaya başlamadan önce büyük gıda atık parçaları** bulaşıklardan temizlenmeli. Bulaşıklar hemen yıkanmayacaksa kılavuzdaki **Durulama** programı kurumuş kirleri yumuşatmak için hızlı bir durulama yapıyor.

**4. Kolları ve hazneyi kapatma.** Tablodaki neden: **bulaşıklar doğru yüklenmemiş.** LG'nin istediği iki şey: bulaşıklar **püskürtücü kolların dönüşünü engellememeli** ve **deterjan haznesiyle çakışmamalı.** Kullanım bölümüne göre bir bulaşık **diğerinin üzerine** konmamalı; LG'ye göre hatalı yükleme **daha düşük temizlik performansıyla** sonuçlanabiliyor.

**5. Kollar dönüyor mu, elle dene.** LG'nin kullanım sırasında bir kontrol adımı var: **üst ve alt püskürtücü kolların rahat bir şekilde döndüğünden** emin ol. Üst rafın yüksekliğini değiştirdiysen kılavuza göre raf ayarından sonra kolların **serbest dönüp dönmediğini** yeniden kontrol et.

**6. Kol deliklerine bak.** Tablodaki neden: **püskürtücü kolların üzerindeki su jeti delikleri tıkanmış.** Bakım bölümündeki açıklama: delikler gıda atığıyla tıkanırsa **yetersiz su püskürtme** yüzünden bulaşıklar iyice temizlenmeyebilir. Alt kolun deliklerine bak; üst kol için **üst rafı öne çek** ve delikleri kontrol et. Gıda artığı varsa kolu **akan su altında** durula. LG'nin tarifine göre üst kol, altındaki somun saat yönünün tersine **1/8 tur** çevrilip aşağı çekilerek çıkarılıyor; geri takınca somun saat yönünde 1/8 tur çevrilip sabitleniyor ve kolun rahat döndüğü kontrol ediliyor.

**7. Filtreleri temizle.** Tablodaki neden: **filtreler tıkanmış** → filtreleri temizle. **Alt rafı çıkar,** alt püskürtücü kolu önde geniş V açılacak konuma getir, **iç filtreyi saat yönünün tersine** çevirip iç filtreyle paslanmaz çelik filtreyi çıkar, **akan su altında yumuşak bir fırçayla** temizle. Filtreleri birbirine geçirip yerine oturt, iç filtreyi saat yönünde çevir; LG'ye göre filtre **klik sesiyle** yerine oturana kadar sıkıca kapatılır. LG filtre, kollar ve iç kısım için **iki haftada bir** temizlik öneriyor.

## Tesisat tarafı: su sıcaklığı ve basıncı

LG'nin listesindeki iki neden makinenin dışında. **Su sıcaklığı çok düşükse** LG su besleme bağlantısının ya da su ısıtıcı ayarının kontrol edilmesini istiyor. **Giriş suyu basıncı düşükse** kılavuza göre su basıncı **0,05 ile 1,0 MPa** arasında olmalı. Bunlar evin tesisatıyla ilgili; ölçüm ve ayar için tesisatçıya ya da yetkili servise başvur.

Kol deliklerinde katılaşmış bir artık suyla çıkmıyorsa LG'nin bakım bölümü bunun için iğne ya da sivri bir alet anıyor; alet gerektiren bu kısmı kılavuzundaki "Püskürtücü Kolları Temizleme" bölümüne bakarak yap ya da servise bırak. Kolların değişken açılı uçlarını LG'ye göre **çekme ya da elle döndürme.**

Markadan bağımsız anlatım için [bulaşık makinesi temiz yıkamıyor](/blog/bulasik-makinesi-temiz-yikamiyor/) yazısına, filtre için [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) rehberine bakabilirsin. Bulaşıklar temiz ama ıslak çıkıyorsa kardeş rehberimiz [LG bulaşık makinesi kurutmuyor](/blog/lg-bulasik-makinesi-kurutmuyor/) sayfasına geç.

## Ne zaman servis

Program kire uygun, deterjan doğru ve yeterli, yerleştirme kolları engellemiyor, kollar dönüyor ve delikleri açık, filtreler temiz olduğu hâlde bulaşıklar kirli çıkıyorsa ya da ekranda bir hata kodu beliriyorsa yetkili LG servisine başvur. LG'nin hata tablosunda **HE** (ısıtıcı devre arızası), **LE** (motor sorunu) gibi kodlar için yönlendirme aynı: **aynı sorun yeniden meydana gelirse servisi çağırın.**

⛔ **Kendin-çöz sınırı burada biter.** Program, deterjan, yerleştirme, kollar ve filtreler kullanıcıya; makinenin içindeki parçalar uzmana aittir.

## Servisi aramadan önce kısa özet

1. Hangi programı seçiyorsun, bulaşıklar ne kadar kirli?
2. Hangi deterjanı, ne kadar koyuyorsun; Hızlı programda tablet mi kullanıyorsun?
3. Kirli kalan bulaşıklar hep aynı rafta ya da aynı köşede mi?
4. Püskürtücü kollar elle rahat dönüyor mu, deliklerde artık var mı?
5. Filtreleri en son ne zaman temizledin, ekranda bir kod var mı?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

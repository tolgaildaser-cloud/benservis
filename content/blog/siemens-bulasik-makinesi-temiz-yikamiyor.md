---
title: "Siemens bulaşık makinesi temiz yıkamıyor"
description: "Siemens bulaşık makinesi temiz yıkamıyorsa Siemens'in beş kontrolü: tablet, sprey kolları, filtre, yerleştirme ve program; kılavuzdaki çözümlerle."
slug: "siemens-bulasik-makinesi-temiz-yikamiyor"
date: "2026-09-29"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144). Belgelerin hepsi bu koşuda curl -sL -A "Mozilla/5.0" ile Siemens'in kendi alan adlarından indirildi, HTTP 200.
# #88: web araması KULLANILMADI; belgeler siemens-home.bsh-group.com/tr menülerinden ve ürün sayfalarındaki kılavuz bağlantılarından bulundu.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-siemens-bulasik-sprint/ · PDF okuma pdftotext -layout, sayfa = PDF sayfası = basılı sayfa no.
#  (W5) Siemens TR "Siemens'im bulaşıkları düzgün yıkamıyor"  https://www.siemens-home.bsh-group.com/tr/musteri-hizmetleri/destek-merkezi/sorun-giderme/bulasik-makinesi/temizlemiyor  gövde metni md5 7239d04557f5f6ff0dce10f9e45e5cb8 (HTML dinamik; iki indirmede gövde birebir aynı)
#  (K1) SN23HW62MT kullanım kılavuzu  https://media3.bsh-group.com/Documents/9001706611_H.pdf  52 s.  md5 168ec8d8b1f400c2cb09856890782627  (sayfa atıfları bu belgeye göre)
#  (K2) SN45EB01NT  https://media3.bsh-group.com/Documents/9002038247_A.pdf  52 s.  md5 02b0114f050e3292c565f1404f08be4c
#  (K3) SN25EI83CT  https://media3.bsh-group.com/Documents/9002038027_A.pdf  56 s.  md5 d4a5a736e405a027d5f2230f9a841418
#  (K4) SN63HX62MT  https://media3.bsh-group.com/Documents/9002017437_B.pdf  52 s.  md5 2379b88f4e313307fdeb303ce8eda0b5
# Arıza satırı (K1 s.43-44; K2 s.44-45, K3 s.48-49, K4 s.43-44): "Bulaşıklarda yemek artıkları var." → çok yakın/fazla dolu · püskürtme kolunun dönmesi bloke · püskürtme kolu memeleri tıkanmış ·
#   süzgeçler kirlenmiş · süzgeçler yanlış takılmış/oturmamış · yeterince güçlü program seçilmemiş · bulaşık önceden çok fazla temizlenmiş (sensör zayıf program seçer) · yüksek ince kaplar köşede · üst sepet sağ-sol aynı yükseklikte değil.
#   "Deterjan bölmesinde veya tablet tutma kabı içinde deterjan artıkları var." → püskürtme kolları bloke · bölme ıslakken doldurulmuş (K1 s.44-45).
# Diğer: K1 s.27 tabletler kısaltılmış programlarda tamamen çözülmeyebilir, toz deterjan kısaltılmış programlar için önerilir · K1 s.30 yerleştirme · K1 s.38-39 süzgeç ve püskürtme kolu temizliği · K3 s.49 sensör hassasiyeti (yalnız bu modelde).
# BİLEREK YAZILMAYANLAR: W5'teki doğrama tahtası/biberon gibi yerleştirme ayrıntılarının hepsi (özetlendi) · ısıtma/pompa/kart teşhisi (belgede yok) · sensör hassasiyeti ayar kodları (yalnız K3'te, model bağımlı) · süre ve #46 kapsamındaki rakamlar.
# Alıntı denetim tablosu: siemens-bulasik-makinesi-temiz-yikamiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~25 dakika"
  totalTime: "PT25M"
  cost: "Ücretsiz"
  tools: ["Cımbız ya da ince bir çubuk", "Küçük bir fırça", "Makinenin kullanım kılavuzu"]
steps:
  - "Makineyi kapat ve fişini prizden çek."
  - "Tablet toplama tepsisine bak; tabletin tamamen çözülüp çözülmediğini kontrol et."
  - "Alt sprey kolunu yukarı çekerek, üst sprey kolunu gevşetip aşağı çekerek çıkar."
  - "Sprey kollarının memelerini akan su altında kontrol et, tıkalı delikleri ince bir çubukla aç ve kolları yerine tak."
  - "Tabandaki filtre ünitesini çıkar, akan su altında fırçayla temizle ve ok işaretleri karşı karşıya gelecek şekilde geri tak."
  - "Bulaşıkları aralarında boşluk kalacak, sprey kollarının dönmesini ve deterjan bölmesinin kapağını engellemeyecek şekilde yerleştir."
  - "Üst sepetin sağ ve sol tarafının aynı yükseklikte olduğunu kontrol et."
  - "Kirlilik derecesine uygun daha güçlü bir program seç; bulaşıkları önceden yıkama, yalnız kaba artıkları al."
faq:
  - q: "Siemens bulaşık makinesi neden bulaşıkları temiz yıkamaz?"
    a: "Siemens'in destek sayfası beş olası sebep sayıyor: tablet çözülmüyor, sprey kolları tıkanmış, filtre tıkanmış, bulaşıklar yanlış yerleştirilmiş ya da program ayarları ve deterjan uygun değil. Kullanım kılavuzundaki 'Bulaşıklarda yemek artıkları var' satırı da aynı noktalara bakıyor ve iki madde daha ekliyor: üst sepetin sağ ve sol tarafının farklı yükseklikte olması ve bulaşıkların önceden fazla temizlenmesi."
  - q: "Bulaşıkları önceden yıkamak neden sonucu kötüleştirir?"
    a: "Siemens kılavuzuna göre bulaşık önceden çok fazla temizlenmişse sensör sistemi daha zayıf bir program akışı seçer ve inatçı kirler kısmen temizlenemez. Kılavuzun önerisi yalnız kaba yemek artıklarını almak, bulaşıkları önceden yıkamamak."
  - q: "Tablet programın sonunda çözülmeden kalıyor, ne yapmalıyım?"
    a: "Siemens'e göre tabletin çözülmemesi, bulaşıkların kirli kalmasının ana nedenlerinden biri. Tıkalı sprey kolları suyun iyi dağılmasını engeller ve tabletin çözülmesini önler; bu yüzden önce kolları temizle. Deterjan bölmesinin kapağının önünü bulaşıkla kapatma ve tablet tutma kabına bulaşık koyma. Kılavuza göre tabletler kısaltılmış programlarda tamamen çözülmeyebilir; Siemens bazı durumlarda tablet yerine toz ya da sıvı bulaşık makinesi deterjanı kullanmanın sorunu çözebileceğini söylüyor."
  - q: "Deterjan bölmesinde deterjan artığı kalıyor, neden?"
    a: "Siemens kılavuzu iki sebep veriyor: püskürtme kolları bulaşıklar tarafından bloke ediliyor ve deterjan tam durulanmıyor ya da deterjan doldurulurken bölme ıslaktı. Çözüm, kolların serbestçe dönebildiğinden emin olmak ve deterjanı yalnız kuru bölmeye doldurmak."
images:
  coverAlt: "Bulaşık makinesinden çıkarılmış sprey kolu, memelerinde kireç ve yemek artığı; yanında ince bir çubuk"
---

Program bitti, kapağı açtın ve tabaklarda hâlâ yemek artığı var; belki tablet de haznede yarım duruyor. Siemens'in destek sayfası bu durumu tek cümleyle çerçeveliyor: **bulaşık makinen çalışıyor ama bulaşıklar temizlenmiyorsa birkaç kontrol adımı sorunu çözmeye yetebilir.** Siemens bu kontrolleri beş başlıkta topluyor: **tablet, sprey kolları, filtre, yerleştirme ve program ile deterjan.** Kullanım kılavuzundaki "Bulaşıklarda yemek artıkları var" satırı da aynı yerlere bakıyor. Bu yazıda ikisini birleştirip adım adım anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Tablet çözülmüş mü bak → sprey kollarını çıkarıp memeleri aç → filtreyi temizle → bulaşıkları boşluklu, kolları ve deterjan kapağını engellemeden yerleştir → üst sepetin iki yanı aynı yükseklikte mi bak → daha güçlü program seç, önceden yıkama. Hepsine rağmen sonuç kötüyse yetkili servis.

## Siemens'in listesi: kılavuzdaki sebepler

Siemens Türkiye sitesinde satışta olan modellerin kılavuzlarında (SN23HW62MT, SN45EB01NT, SN25EI83CT, SN63HX62MT) **"Bulaşıklarda yemek artıkları var"** satırının altında şu sebepler sayılıyor:

- Bulaşıklar **birbirine çok yakın** yerleştirilmiş ya da sepet **fazla doldurulmuş.**
- **Püskürtme kolunun dönmesi** bloke ediliyor.
- **Püskürtme kolu memeleri** tıkanmış.
- **Süzgeçler** kirlenmiş, ya da yanlış takılmış veya yerine oturmamış.
- **Yeterince güçlü bir program** seçilmemiş.
- Bulaşık **önceden çok fazla temizlenmiş**; sensör sistemi daha zayıf bir program akışı seçer.
- **Yüksek, ince kaplar** köşede çok eğik yerleştirilmiş.
- **Üst sepet**, sağ ve sol tarafta aynı yüksekliğe ayarlanmamış.

Hepsi kullanıcının evde kontrol edebileceği şeyler.

## Adım adım: evde denenecekler

**1. Fişi çek.** Sprey kollarına ve filtreye dokunmadan önce makineyi kapat ve fişini prizden çek.

**2. Tablete bak.** Siemens'in ilk kontrolü bu: bulaşıkların kirli kalmasının ana nedenlerinden biri **tabletin düzgün çözülmemesi.** Tabletin düştüğü **tablet toplama tepsisini** bul ve tabletin tamamen çözülüp çözülmediğine bak. Tablet yarım kaldıysa Siemens bunu sprey kollarına bağlıyor: sprey kollarındaki tıkanma suyun iyi dağılmasını engeller ve bu da **tabletin çözülmesini engeller.**

**3. Sprey kollarını çıkar.** Siemens'in tarifi: **alt sprey kolunu yukarı doğru** çekerek çıkar; **üst sprey kolunu gevşet** ve **aşağı çekerek** çıkar.

**4. Memeleri aç ve kolları tak.** Kolların üzerindeki çıkış memelerini **akan su altında** tıkanma olup olmadığına göre kontrol et. Deliklerdeki tıkanıklığı Siemens'in önerdiği gibi **cımbız ya da ince bir çubukla** temizle. Sonra kolları geri tak: kılavuza göre alt kol **duyulur şekilde** yerine oturur, üst kol **sıkıca vidalanır.** Siemens'in hedefi net: kollar **serbest hareket edebilmeli**, memelerde tıkanma olmamalı.

**5. Filtreyi temizle.** Tabandaki filtre ünitesinin kilidini aç: kaba süzgeci **saat yönünün tersine** çevir ve süzgeç sistemini dışarı al. Filtreleri ayır, **akan su altında** temizle; içteki küçük kalıntılar için **küçük bir fırça** kullan, filtreye zarar verebilecek **sert ürün kullanma.** Geri takarken kaba süzgeci **saat yönünde** çevir ve **ok işaretlerinin karşı karşıya** gelmesine dikkat et. Kılavuz, süzgeçlerin yanlış takılmasını ya da yerine oturmamasını da ayrı bir sebep olarak sayıyor. Filtre temizliğinin ayrıntılı anlatımı [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) yazısında.

**6. Bulaşıkları yeniden yerleştir.** Siemens'in kuralı: bulaşıkları **yeterince boşluk bırakarak** yerleştir, püskürtülen su bulaşıkların yüzeyine ulaşmalı; bulaşıkların birbirine **temas etmesini** önle. Bulaşıklar **püskürtme kolunun dönmesini engellememeli.** Tablet tutma kabına küçük parça koyma ve **deterjan bölmesinin kapağının önünü** bulaşıkla kapatma; Siemens'e göre oraya konan parçalar tabletin çözülmesini önleyebilir ve deterjan kapağını tıkayabilir. Çok kirli tencereleri **alt sepete** koy; Siemens'e göre orada püskürtülen su daha güçlüdür. Yüksek, ince kapları köşede **çok eğik** yerleştirme.

**7. Üst sepetin yüksekliğine bak.** Kılavuzdaki sebeplerden biri: **üst bulaşık sepeti sağ ve sol tarafta aynı yüksekliğe ayarlanmamış.** İki tarafı aynı yüksekliğe getir.

**8. Programı ve alışkanlığı düzelt.** Siemens'e göre inatçı, yanmış lekeler için **daha yüksek sıcaklıklı** bir program seç; kılavuzun cümlesi de aynı: **daha güçlü bir yıkama programı seçiniz.** Bulaşıkları **önceden yıkama**: kılavuza göre önceden fazla temizlenmiş bulaşıkta sensör sistemi daha zayıf bir program akışı seçer ve inatçı kirler kısmen temizlenemez. Yalnız **kaba yemek artıklarını** al.

## Deterjan tarafı

Siemens'in kılavuzu ve destek sayfası deterjan için birkaç şey söylüyor:

- **Tabletler kısaltılmış programlarda** tamamen çözülmeyebilir ve deterjan artıkları kalabilir. Kılavuz kısaltılmış programlar için **toz deterjanı** öneriyor; Siemens'in destek sayfasına göre de bazen tablet yerine bulaşık makinesi deterjanı kullanmak sorunu çözebilir.
- Deterjan bölmesinde artık kalıyorsa kılavuzun iki sebebi var: püskürtme kolları bulaşıklar tarafından **bloke ediliyor** ya da deterjan doldurulurken **bölme ıslaktı.** Deterjanı yalnız **kuru bölmeye** doldur.
- **Elde yıkamaya uygun bulaşık deterjanı** bulaşık makinesinde kullanılmaz; kılavuza göre fazla köpük ve cihaz hasarına yol açabilir.

Cam bardaklarda ve çatal bıçaklarda giderilebilen izler kalıyorsa Siemens kılavuzu iki sebep sayıyor: parlatıcı miktarı çok yüksek ayarlanmış (daha düşük kademeye al) ya da parlatıcı doldurulmamış (parlatıcı doldur). Ayrıntısı [bulaşık makinesi tuzu ve parlatıcı ayarı](/blog/bulasik-makinesi-tuzu-ve-parlatici-ayari/) yazısında.

## Ne zaman servis

Tablet çözülüyor, kollar serbest dönüyor ve memeler açık, filtre temiz ve doğru takılı, yerleştirme düzgün, güçlü program seçili ve bulaşıklar hâlâ kirli çıkıyorsa Siemens'in kullanıcıya verdiği adımlar bitmiş demektir. Siemens'in önerisi bu noktada makineyi **bir Siemens uzmanına kontrol ettirmek**; online servis kaydı oluşturabilir ya da yetkili servislere ulaşabilirsin.

Kılavuzun genel uyarısı: usulüne uygun olmayan onarımlar tehlikelidir, cihazda onarımı yalnız eğitimini almış uzman personel yapar.

⛔ **Kendin-çöz sınırı:** sprey kolları, filtre, sepetler, deterjan ve program seçimi kullanıcıya; ısıtma, pompa ve makinenin içi servise aittir.

Ekranda bir kod varsa önce [Siemens bulaşık makinesi hata kodları](/blog/siemens-bulasik-makinesi-hata-kodlari/) yazısına bak. Konunun markadan bağımsız anlatımı [bulaşık makinesi temiz yıkamıyor](/blog/bulasik-makinesi-temiz-yikamiyor/) yazısında. Bulaşıklar temiz ama **ıslak** çıkıyorsa [Siemens bulaşık makinesi kurutmuyor](/blog/siemens-bulasik-makinesi-kurutmuyor/) yazısına geç.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

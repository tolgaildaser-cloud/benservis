---
title: "Profilo bulaşık makinesi temiz yıkamıyor"
description: "Profilo bulaşık makinesi temiz yıkamıyorsa Profilo'nun sırası: yerleştirme, püskürtme kolları, süzgeçler, program seçimi ve tabletin yeri."
slug: "profilo-bulasik-makinesi-temiz-yikamiyor"
date: "2026-09-30"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, belirti rehberi). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bsh-group.com'dan indirildi, HTTP 200.
# Belge adresleri Profilo'nun kendi ürün sayfalarından (www.profilo.com/tr/tr/product/beyaz-esya/bulasik-makineleri/...) alındı; titleKey "user-manuals". #88: forum/servis sitesi/üçüncü taraf kullanılmadı.
# Bosch/Siemens'in yayındaki belirti sayfaları açılmadı, metin Profilo belgesinden yeniden yazıldı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-profilo-sprint/ · okuma pdftotext -layout, sayfa = PDF sayfası (\f ile sayıldı; basılı sayfa no ile aynı).
#  (C) Profilo BM6380MA kullanım kılavuzu  https://media3.bsh-group.com/Documents/9001951966_E.pdf  52 s.  md5 2e7b3ee8867b8a5fe2e9a021a73228f8
#  (D) Profilo BMS623V5 kullanım kılavuzu  https://media3.bsh-group.com/Documents/9002038110_A.pdf  52 s.  md5 024c3cd56f8521f96d6f5af2b6d9aa38
# Arıza tablosu "Bulaşıklarda yemek artıkları var." (C s.41-42 · D s.42-43, iki belgede aynı satırlar): çok yakın/fazla dolu → "1. Bulaşıkları yeterince boşluk bırakarak yerleştiriniz. ... 2. Temas yerleri olmasını önleyiniz."
#   · püskürtme kolunun dönmesi bloke → "Bulaşıkları, püskürtme kolunun dönmesini engellemeyecek şekilde yerleştiriniz." · meme tıkalı → "Püskürtme kollarını temizleyiniz."
#   · "Süzgeçler kirlenmiş." → temizle · "Süzgeçler yanlış takılmış ve/veya yerine oturmamış." → doğru yerleştir, oturt · "Yeterince güçlü bir yıkama programı seçilmemiş." → "Daha güçlü bir yıkama programı seçiniz."
#   · "Yüksek ince kaplar köşe kısımlarda yeterince yıkanmaz." → çok eğik ve köşede koyma · "Üst bulaşık sepeti, sağ ve sol tarafta aynı yüksekliğe ayarlanmamış." → aynı yüksekliğe ayarla
#   · YALNIZ D s.43: "Bulaşık önceden çok fazla temizlenmiş. Sensör sistemi, daha zayıf bir program akışı seçer." → "Sadece kaba yemek artıklarını temizleyiniz ve bulaşıkları önceden yıkamayınız."
# Diğer satırlar (C s.42-43): "Cihazda deterjan artıkları" → tablet tutma kabını engelleme; "Tableti deterjan bölmesine enine yerleştiriniz, dik bir şekilde değil."; tablet kısa programda → "Daha güçlü bir program seçiniz veya toz deterjan kullanınız."
#   · "Bulaşıkların üzerinde çay veya ruj artıkları mevcut." → daha yüksek sıcaklıklı program; uygun deterjanı üretici bilgilerine göre dozajla
# Bakım: C s.35-36 süzgeç sistemi (kaba süzgeç saat yönünün tersine; mikro süzgeç aşağı çekilir; kilit tırnakları; musluk suyu altında; ok işaretleri karşı karşıya) · C s.36 püskürtme kolları (üst kol sökülüp aşağı çekilir, alt kol yukarı çekilir; memeler akan su altında; alt kol duyulur şekilde oturur; üst kol sıkıca vidalanır)
#   · C s.14 "Bulaşıklar en iyi şekilde yıkanmıyorsa, püskürtme kollarını temizleyiniz." · C s.16 Güçlü programı (yoğun, yapışmış kirler) · C s.19-20 üst sepet yüksekliği (yan kollar; her iki taraf aynı seviye)
#   · C s.30 "Kaynaklardan tasarruf etmek için bulaşıkları önceden akan suya tutarak yıkamayınız." + çok kirli tencereler alt sepete · C s.29 tablet tutma kabına bir şey koymayınız · C s.37 uzman personel · C s.50 E-Nr./FD
# BİLEREK YAZILMAYANLAR: pompa/ısıtıcı/su sertliği sensörü teşhisi (belgede bu satır için yok) · kireç çözme (E:12 satırına ait) · süzgeç/pompa kapağını aletle açma (bu sayfada gerekmiyor).
# Alıntı denetim tablosu: profilo-bulasik-makinesi-temiz-yikamiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor"]
steps:
  - "Bulaşıklardan yalnız kaba yemek artıklarını al; bulaşıkları önceden akan suda yıkama."
  - "Bulaşıkları aralarında boşluk kalacak ve birbirine değmeyecek şekilde yerleştir, sepeti fazla doldurma."
  - "Püskürtme kollarının dönmesini engelleyen parça bırakma; yüksek ince kapları çok eğik ve köşede koyma."
  - "Üst sepetin sağ ve sol tarafının aynı yükseklikte olduğunu kontrol et."
  - "Süzgeç sistemini çıkarıp parçalarını musluk suyu altında temizle, ok işaretleri karşı karşıya gelecek şekilde geri tak."
  - "Püskürtme kollarını çıkarıp memelerini akan su altında kontrol et, varsa tıkayan parçaları gider ve geri tak."
  - "Kirli bulaşık için daha güçlü bir program seç."
  - "Tableti deterjan bölmesine enine yerleştir ve tablet tutma kabının önünü bulaşıkla kapatma."
faq:
  - q: "Profilo bulaşık makinesinde bulaşıklarda yemek artığı kalıyor, neden?"
    a: "Profilo'nun kullanım kılavuzundaki arıza tablosu 'Bulaşıklarda yemek artıkları var' satırında şunları sayıyor: bulaşıklar birbirine çok yakın ya da sepet fazla dolu, püskürtme kolunun dönmesi engelleniyor, püskürtme kolu memeleri tıkalı, süzgeçler kirli ya da yanlış takılmış, yeterince güçlü bir program seçilmemiş, yüksek ince kaplar köşede ve üst sepetin iki yanı farklı yükseklikte. Hepsi yerleştirme, bakım ya da program seçimiyle düzeltilir."
  - q: "Bulaşıkları makineye koymadan önce durulamalı mıyım?"
    a: "Hayır. Profilo'nun BMS623V5 kılavuzundaki tabloya göre bulaşık önceden çok fazla temizlenirse sensör sistemi daha zayıf bir program akışı seçer ve inatçı kirler kısmen temizlenemez. Profilo'nun önerisi yalnız kaba yemek artıklarını temizlemek, bulaşıkları önceden yıkamamak. BM6380MA kılavuzu da kaynaklardan tasarruf için bulaşıkların önceden akan suya tutularak yıkanmamasını söylüyor."
  - q: "Tabletin bir kısmı erimeden kalıyor, bu da temizliği etkiler mi?"
    a: "Profilo'nun tablosu deterjan artıkları için üç neden veriyor: deterjan bölmesinin kapağının bulaşıklar ya da dik konmuş tablet tarafından engellenmesi, tabletin hızlı ya da kısa programda kullanılması ve deterjanın uzun süre bekleyip topaklanması. Çözümler sırasıyla tablet tutma kabının önünü açık bırakmak, tableti bölmeye enine koymak, daha güçlü bir program ya da toz deterjan seçmek ve deterjanı değiştirmek."
  - q: "Bardaklarda çay ya da ruj izi kalıyor, ne yapmalı?"
    a: "Profilo'nun tablosuna göre bunun iki nedeni var: yıkama sıcaklığının çok düşük olması ve deterjan dozajının yetersiz ya da deterjanın uygun olmaması. Çözüm, daha yüksek sıcaklıklı bir program seçmek ve uygun bir deterjanı üreticinin bilgilerine göre dozajlamak."
images:
  coverAlt: "Bulaşık makinesinin açık kapağında çıkarılmış süzgeç parçaları ve püskürtme kolu, arkada kısmen dolu alt sepet"
---

Program bitti ama tabaklarda yemek artığı var. Profilo'nun bulaşık makinesi kullanım kılavuzlarındaki arıza tablosunda bu durum için ayrı bir satır var: **"Bulaşıklarda yemek artıkları var."** Profilo'nun bu satırda saydığı nedenlerin hepsi kullanıcı tarafında: **yerleştirme, püskürtme kolları, süzgeçler ve program seçimi.** Bu yazıda Profilo'nun listesini sırayla açıyoruz. Kaynak, Profilo'nun BM6380MA ve BMS623V5 modelleri için yayımladığı kullanım kılavuzları; ikisinde bu satır aynı, farklı olan yeri ayrıca belirttik.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Bulaşığı önceden yıkama → aralıklı yerleştir, kolları engelleme → üst sepeti iki yanda aynı yüksekliğe getir → süzgeçleri temizle ve doğru tak → püskürtme kollarının memelerini kontrol et → daha güçlü program seç → tableti enine koy.

## Adım adım: evde denenecekler

**1. Bulaşığı önceden yıkama.** Profilo'nun BMS623V5 kılavuzundaki tabloya göre bulaşık **önceden çok fazla temizlenirse** sensör sistemi **daha zayıf bir program akışı** seçer ve inatçı kirler kısmen temizlenemez. Profilo'nun önerisi **yalnız kaba yemek artıklarını** almak, bulaşıkları önceden akan suya tutmamak.

**2. Aralıklı yerleştir.** Tablodaki ilk neden: **bulaşıklar birbirine çok yakın yerleştirilmiş veya sepet fazla doldurulmuş.** Profilo'nun çözümü bulaşıkları **yeterince boşluk bırakarak** yerleştirmek ve **temas yerleri** olmasını önlemek; püskürtülen su bulaşıkların yüzeyine ulaşmalı. Çok kirli tencereleri **alt sepete** koy; Profilo'ya göre orada daha güçlü püskürtülen su huzmesiyle daha iyi sonuç alınır.

**3. Kolları serbest bırak, uzun kapları köşeye yatırma.** Tablodaki iki neden daha: **püskürtme kolunun dönmesi engelleniyor** ve **yüksek ince kaplar köşe kısımlarda yeterince yıkanmıyor.** Bulaşıkları kolların dönmesini engellemeyecek şekilde yerleştir; yüksek ve ince kapları **çok eğik ve köşede** olacak şekilde koyma.

**4. Üst sepeti düzle.** Tablodaki neden: **üst bulaşık sepeti sağ ve sol tarafta aynı yüksekliğe ayarlanmamış.** Profilo'nun tarifine göre sepeti dışarı çek, bir anda düşmemesi için üst kenarından yandan tut, dış taraftaki **sol ve sağ kolları içe bastır,** sepeti eşit şekilde indir ya da kaldır ve **her iki tarafın aynı seviyede** olduğundan emin ol. Kolları bıraktığında sepet yerine oturur.

**5. Süzgeçleri temizle ve doğru tak.** Tablodaki iki neden: **süzgeçler kirlenmiş** ya da **yanlış takılmış veya yerine oturmamış.** Profilo'nun tarifi: kaba süzgeci **saat yönünün tersine** çevirip süzgeç sistemini çıkar; bu sırada pompa kabına yabancı cisim düşmemesine dikkat et. Mikro süzgeci aşağı çekerek ayır, kilit tırnaklarını bastırıp kaba süzgeci çıkar. Parçaları **musluk suyunun altında** temizle; kaba ve ince süzgeç arasındaki kirli kenarı özenle temizle. Parçaları birleştir, sistemi yerine koyup kaba süzgeci **saat yönünde** çevir; **ok işaretleri karşı karşıya** gelmeli. Profilo süzgeçlerdeki artıkların **her yıkamadan sonra** kontrol edilmesini öneriyor.

**6. Püskürtme kollarını kontrol et.** Tablodaki neden: **püskürtme kolu memeleri tıkanmış.** Profilo'ya göre yıkama suyundaki kireç ve pislikler memeleri ve yatakları tıkayabilir. Üst püskürtme kolunu sökerek aşağı doğru, alt püskürtme kolunu yukarı doğru çekip çıkar. Memeleri **akan su altında** kontrol et, tıkayan parça varsa gider. Alt kolu takınca **duyulur şekilde** yerine oturur; üst kolu yerleştirip **sıkıca vidala.**

**7. Daha güçlü bir program seç.** Tablodaki neden: **yeterince güçlü bir yıkama programı seçilmemiş.** Profilo'nun çözümü daha güçlü bir program seçmek. BM6380MA'nın program tablosunda **Güçlü** programı tencere, tava ve yoğun şekilde yanıp yapışmış, kuruyup yapışmış kirler için veriliyor.

**8. Tableti enine koy.** Profilo'nun "Cihazda deterjan artıkları" satırına göre deterjan bölmesinin kapağı **bulaşıklar ya da dik konmuş tablet** yüzünden bloke olup açılmayabilir. Tableti deterjan bölmesine **enine** yerleştir, **dik değil.** Üst sepette bulaşıkları **tablet tutma kabını engellemeyecek** şekilde koy ve kabın içine bulaşık ya da koku verici koyma. Profilo'ya göre tabletler hızlı ya da kısa programda tamamen çözülmeyebilir; bu durumda daha güçlü bir program ya da toz deterjan seç.

## Lekeler ve izler için

Bardakta **çay veya ruj izi** kalıyorsa Profilo'nun tablosu **yıkama sıcaklığının çok düşük** olduğunu ya da **deterjan dozajının yetersiz veya deterjanın uygun olmadığını** söylüyor: daha yüksek sıcaklıklı bir program seç, uygun bir deterjanı üreticinin bilgilerine göre dozajla. Cam ve çatal bıçakta silinebilen izler için Profilo parlatıcı ayarını işaret ediyor; ayrıntı için [bulaşık makinesi tuzu ve parlatıcı ayarı](/blog/bulasik-makinesi-tuzu-ve-parlatici-ayari/) yazısına bakabilirsin.

Markadan bağımsız anlatım için [bulaşık makinesi temiz yıkamıyor](/blog/bulasik-makinesi-temiz-yikamiyor/) ve [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/) yazılarına bakabilirsin. Makinenin dibinde su kalıyorsa kardeş rehberimiz [Profilo bulaşık makinesi su boşaltmıyor](/blog/profilo-bulasik-makinesi-su-bosaltmiyor/) yazısına geç.

## Ne zaman servis

Yerleştirme doğru, süzgeçler ve püskürtme kolları temiz, güçlü bir program seçili ve bulaşıklar yine kirli çıkıyorsa ya da ekranda bir hata kodu görünüyorsa müşteri hizmetlerine başvur. Profilo'nun uyarısı açık: **cihazda onarımları sadece bunun eğitimini almış uzman personel yapabilir.** Ararken cihaz kapağının iç tarafındaki tip etiketinde yazan **ürün numarasını (E-Nr.)** ve **imalat numarasını (FD)** hazır tut.

⛔ **Kendin-çöz sınırı burada biter.** Yerleştirme, süzgeç, püskürtme kolu ve program kullanıcıya; makinenin içindeki parçalar uzmana aittir.

## Servisi aramadan önce kısa özet

1. Artık hangi sepette kalıyor: üstte mi, altta mı, her yerde mi?
2. Süzgeçleri en son ne zaman temizledin?
3. Püskürtme kolları elle serbestçe dönüyor mu?
4. Hangi programı seçiyorsun, tablet mi toz deterjan mı kullanıyorsun?
5. Ekranda bir hata kodu var mı?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

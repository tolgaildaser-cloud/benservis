---
title: "Vestel bulaşık makinesi beyaz leke bırakıyor"
description: "Vestel bulaşık makinesi bulaşıklarda beyaz leke bırakıyorsa Vestel'in sırası: özel tuz, tuz kapağı, su sertliği, parlatıcı ayarı ve deterjan."
slug: "vestel-bulasik-makinesi-beyaz-leke-birakiyor"
date: "2026-09-30"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, belirti rehberi). Üç belge bu koşuda curl -sL -A "Mozilla/5.0" ile Vestel'in kendi alan adından yeniden indirildi,
#   hepsi HTTP 200; md5'ler 27 Eyl yerel kopyalarıyla (blog-taslaklar/kaynak-vestel-sprint/) 3/3 birebir. Okuma pdftotext -layout, sayfa = PDF sayfası (\f).
# Web araması KULLANILMADI: adresler yayındaki vestel-bulasik-makinesi-temiz-yikamiyor provenansından alındı.
#  B) BM 10502 X GI WIFI  https://statik.vestel.com.tr/webfiles/20263192_k.pdf  57 s.  md5 bdbd31789107cc96048ad674595fd6ff  (sayfa atıfları bu belgeye göre)
#  A) BM 8402 GI Pro WIFI https://statik.vestel.com.tr/webfiles/20264050_k.pdf  62 s.  md5 dd6a67c9fefe3c49867c92fa7e66e410
#  C) BM-401 (eski nesil) https://static.vestel.com.tr/kullanimkilavuzlari/20218379-KK.pdf  47 s.  md5 ebe98e45d57fc21fc293e5c88ab47b8e
# "Sorun Giderme" — "Bulaşıklar üzerinde beyazımsı lekeler var." satırı üç belgede birebir (B s.47, A s.48, C s.38). Sebep | çözüm:
#   "Çok az deterjan kullanılmış. | Derterjan miktarını olması gereken seviyeye getiriniz." · "Parlatıcı ayarı çok küçük. | Parlatıcı ayarını yükseltiniz."
#   "Su sertlik derecesi yüksek olduğu halde, özel tuz kullanılmıyor. | Bulaşık makineniz için üretilmiş özel tuzu makinenize koyunuz."
#   "Tuz bölmesinin kapağı iyice kapatılmamış. | Tuz bölmesinin kapağını iyice kapatınız.Düzgün kapandığından emin olunuz."
#   Tablo girişi (B s.45): "...Cihazınız hala normal çalışmasına devam etmiyorsa İletişim Merkezi ile irtibata geçiniz."
# Diğer (B; A'da aynı sayfalarda): s.22 su yumuşatma sisteminin önemi ("...bulaşıklarınızda beyaz kireç artıkları kalır"), tuz doldurma (alt sepeti çıkar, kapağı saat yönünün tersine
#   çevirerek çıkar, ilk kullanımda 1 kg tuz + taşıncaya kadar su, kapağı çevirerek sıkıca kapat) · s.23 tuz eksik uyarı lambası, "Tuz kabını sadece ilk kullanımda su ile doldurunuz",
#   "Makinenize sofra tuzu koymayınız", tuzu çalıştırmadan önce koy, hemen yıkama yapılmayacaksa boşken kısa program (korozyon) · s.24 test şeridi, sertlik tablosu L1-L6,
#   fabrika ayarı 3, 90 dF üstü/kuyu suyu → filtre ve su tasfiye cihazı · s.25 sertlik ayarı tuş sırası (Erteleme 3 sn, "SL", Yarım Yük), taşınınca yeniden ayar,
#   çok fazla deterjan → "beyazımsı çizgiler veya mavimsi katmanlar", çok az deterjan + sert su → "beyazımsı çizgiler" · s.26 25/15 cm3, kombine deterjan tavsiyesi
#   (tuz+parlatıcı ekle, sertlik ve parlatıcı ayarı en düşük 1), kireçli+ıslak kalıyorsa deterjan üreticisine başvur · s.27 parlatıcı doldurma (MAX, sıçrayanı temizle),
#   ayar tuş sırası (Erteleme 5 sn, "rA", Yarım Yük), varsayılan 4, "lekeliyse seviyeyi yükseltin... mavi lekeler varsa seviyeyi düşürün",
#   "Parlatıcı dozaj ayarı çok düşükse, bulaşıklarda beyaz lekeler kalır".
# ÇELİŞKİ NOTU: B s.22 "Kolayca çözülen küçük taneli veya toz tipindeki tuzları kullanmayın" ↔ B s.23 "Küçük taneli veya toz halindeki yumuşatma tuzu kullanmanızı öneririz".
#   Belge kendi içinde çelişiyor → tuz tanesi hakkında hiçbir şey yazılmadı; yalnız "bulaşık makinesi için üretilmiş özel tuz" ve "sofra tuzu koyma" kullanıldı.
# BİLEREK YAZILMAYANLAR: tuz tanesi tavsiyesi (çelişki) · sertlik/parlatıcı tuş sırasının tüm modellere genellenmesi (yalnız BM 10502/BM 8402'ye atıfla) ·
#   yumuşatıcı ünitesi/rezistans teşhisi (belgede yok) · sirke/limon gibi ev yöntemleri (belgede yok) · süre/fiyat/parça (#46).
# Alıntı denetim tablosu: vestel-bulasik-makinesi-beyaz-leke-birakiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Bulaşık makinesi tuzu", "Bulaşık makinesi parlatıcısı", "Varsa su sertliği test şeridi"]
steps:
  - "Alt sepeti çıkar, tuz haznesinin kapağını saat yönünün tersine çevirip aç ve bulaşık makinesi için üretilmiş özel tuz koy."
  - "Tuz haznesinin kapağını çevirerek iyice kapat ve düzgün kapandığından emin ol."
  - "Test şeridin varsa şebeke suyunun sertliğini ölç ve makinenin su sertlik ayarını buna göre yap."
  - "Parlatıcı bölmesini MAX seviyesine kadar doldur ve sıçrayan parlatıcıyı temizle."
  - "Parlatıcı ayarını bir kademe yükselt; bulaşıklarda mavi leke görürsen düşür."
  - "Deterjanı bulaşığın kirliliğine ve makinenin doluluğuna göre kılavuzdaki miktarda koy."
  - "Lekeler sürerse Vestel İletişim Merkezi ile irtibata geç."
faq:
  - q: "Vestel bulaşık makinesi bulaşıklarda neden beyaz leke bırakıyor?"
    a: "Vestel'in kullanım kılavuzlarındaki sorun giderme tablosu 'Bulaşıklar üzerinde beyazımsı lekeler var' satırında dört sebep sayıyor: çok az deterjan kullanılmış, parlatıcı ayarı çok küçük, su sertlik derecesi yüksek olduğu hâlde özel tuz kullanılmıyor ya da tuz bölmesinin kapağı iyice kapatılmamış."
  - q: "Bulaşık makinesine sofra tuzu koyabilir miyim?"
    a: "Hayır. Vestel makinene sofra tuzu konmamasını istiyor; aksi hâlde yumuşatıcı bölmesinin işlevi zamanla azalabilir. Kılavuza göre makine suyu yumuşatmak için yalnızca özel bulaşık makinesi tuzu ile kullanılabilir. Tuz kabı yalnız ilk kullanımda suyla doldurulur; kontrol panelindeki tuz eksik uyarı lambası yandığında yeniden tuz eklenir."
  - q: "Parlatıcı ayarını ne kadar yapmalıyım?"
    a: "BM 10502 ve BM 8402 kılavuzlarına göre varsayılan parlatıcı seviyesi 4'tür. Bulaşıklar gerektiği gibi kurumuyorsa veya lekeliyse seviye yükseltilir; bulaşıklarda mavi lekeler varsa seviye düşürülür. Vestel'e göre parlatıcı dozaj ayarı çok düşükse bulaşıklarda beyaz lekeler kalır, çok yüksekse cam eşya ve tabaklarda mavimsi katmanlar görülebilir."
  - q: "Hepsi bir arada tablet kullanıyorum, yine de tuz ve parlatıcı koymalı mıyım?"
    a: "Vestel'in tavsiyesi şu: kombine deterjan kullanırken daha iyi sonuç almak istiyorsan makineye tuz ve parlatıcı ekle, su sertlik ayarını ve parlatıcı ayarını en düşük (1) konuma getir. İkisi ya da üçü bir arada deterjanlarla bulaşıkların kireçli ve ıslak kalıyorsa deterjan üreticisine başvur."
  - q: "Fazla deterjan da leke yapar mı?"
    a: "Vestel'e göre deterjan bölmesine gerekenden fazla deterjan doldurulursa cam eşyalar ve bulaşıklar üzerinde beyazımsı çizgiler veya mavimsi katmanlar görülebilir; sürekli çok fazla deterjan kullanılması makinede hasara neden olabilir. Çok az deterjan ise yetersiz temizliğe yol açabilir ve su sertse beyazımsı çizgiler görülebilir."
images:
  coverAlt: "Bulaşık makinesinin açık üst sepetinde üzerinde beyazımsı lekeler kalmış su bardakları ve yanda duran bir paket bulaşık makinesi tuzu"
---

Program bitti, bardakları çıkardın ve üzerlerinde beyazımsı lekeler var. Vestel'in bulaşık makinesi kullanım kılavuzlarındaki sorun giderme tablosunda bu durumun ayrı bir satırı var: **"Bulaşıklar üzerinde beyazımsı lekeler var."** Tablonun saydığı dört sebebin hepsi kullanıcının kontrol edebileceği şeyler: **özel tuz, tuz bölmesinin kapağı, parlatıcı ayarı ve deterjan miktarı.** Bu yazıda Vestel'in listesini, aynı kılavuzların su yumuşatma, parlatıcı ve deterjan bölümleriyle birlikte adım adım açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Tuz haznesine bulaşık makinesi tuzu koy → kapağı iyice kapat → su sertlik ayarını suyuna göre yap → parlatıcıyı MAX'a kadar doldur → parlatıcı ayarını bir kademe yükselt → deterjanı kılavuzdaki miktarda koy. Lekeler sürerse Vestel İletişim Merkezi.

## Adım adım: evde denenecekler

**1. Özel tuzu koy.** Tablodaki sebep: **su sertlik derecesi yüksek olduğu hâlde özel tuz kullanılmıyor**; çözüm **bulaşık makinesi için üretilmiş özel tuzu makineye koymak.** Vestel'in sırası: **alt sepeti çıkar**, tuz bölmesinin kapağını **saat yönünün tersine çevirerek** çıkar. Bölme ilk kullanımda **1 kg tuz ve taşıncaya kadar su** ile doldurulur; sonraki dolumlarda yalnız tuz eklenir. Kontrol panelindeki **tuz eksik uyarı lambası** yandığında tuz kabına yeniden tuz eklenmesi gerekir. Vestel'in iki uyarısı: makineye **sofra tuzu koyma**; tuzu makineyi **çalıştırmadan önce** koy.

**2. Kapağı iyice kapat.** Tablodaki sebep: **tuz bölmesinin kapağı iyice kapatılmamış**; çözüm kapağı **iyice kapatmak ve düzgün kapandığından emin olmak.** Kapağı yerine takıp çevirerek sıkıca kapat. Hemen yıkama yapmayacaksan Vestel, dolum sırasında taşan tuzun makineye zarar vermemesi için **makine boşken kısa bir yıkama programı** çalıştırılmasını istiyor.

**3. Su sertlik ayarını yap.** Vestel'e göre makinenin yıkama etkinliği yıkama suyunun yumuşaklığına bağlı ve makinede şebeke suyunun sertliğini düşüren bir sistem var; sistem doğru ayarlandığında yıkama etkinliği artıyor. Test şeridin varsa kılavuzdaki sırayla suyun sertliğini bul ve makinenin su sertlik ayarını çıkan sonuca göre yap. Fabrika çıkış ayarı **3**. BM 10502 ve BM 8402 kılavuzlarında ayar şöyle: makineyi açma/kapama düğmesiyle aç, hemen ardından **Erteleme düğmesine en az 3 saniye** basılı tut, **"SL"** görününce bırak, **Yarım Yük** düğmesiyle seviyeyi seç, makineyi kapatarak kaydet. Tuş sırası modele göre değişebilir; kendi kılavuzundaki "Su Yumuşatma Ayarı" bölümüne bak.

**4. Parlatıcıyı doldur.** Parlatıcı bölmesinin kapağını aç, bölmeye **MAX seviyesine kadar** parlatıcı doldur ve kapağı kapat. Vestel parlatıcının bölmeden taşacak şekilde doldurulmamasını ve **sıçradığı alanların temizlenmesini** istiyor. Kılavuza göre parlatıcı bulaşıkların **çizgi ve leke kalmadan** kurutulmasına yardımcı olur.

**5. Parlatıcı ayarını yükselt.** Tablodaki sebep: **parlatıcı ayarı çok küçük**; çözüm **parlatıcı ayarını yükseltmek.** Vestel'e göre parlatıcı dozaj ayarı çok düşükse **bulaşıklarda beyaz lekeler kalır**, bulaşıklar kurumaz ve iyi yıkanmaz. BM 10502 ve BM 8402 kılavuzlarında varsayılan seviye **4**; ayar için makine kapalıyken açma/kapama düğmesiyle aç, hemen ardından **Erteleme düğmesine en az 5 saniye** basılı tut, **"rA"** görününce bırak, **Yarım Yük** düğmesiyle seviyeyi ayarla ve makineyi kapatarak kaydet. Kılavuzun kuralı: bulaşıklar **lekeliyse seviyeyi yükselt**, bulaşıklarda **mavi lekeler varsa seviyeyi düşür.**

**6. Deterjanı ölç.** Tablodaki sebep: **çok az deterjan kullanılmış**; çözüm deterjan miktarını **olması gereken seviyeye** getirmek. Vestel'in kılavuzuna göre bulaşıklar çok kirli ve makine tam doluysa deterjan haznesinin büyük kısmına **25 cm3**, az kirli ve makine tam dolu değilse **15 cm3** seviyesine kadar deterjan konur. Fazlası da iyi değil: gerekenden fazla deterjan cam eşyalar ve bulaşıklar üzerinde **beyazımsı çizgiler veya mavimsi katmanlar** bırakabilir.

**7. Sürüyorsa İletişim Merkezi.** Tuz, kapak, sertlik ayarı, parlatıcı ve deterjan kılavuza uygun olduğu hâlde lekeler geçmiyorsa Vestel'in sorun giderme tablosunun girişindeki cümle geçerli: cihazın hâlâ normal çalışmasına devam etmiyorsa **İletişim Merkezi ile irtibata geç.**

## Beyaz leke ile tuz arasındaki bağ

Vestel kılavuzu bunu su yumuşatma bölümünde anlatıyor: iyi bir yıkama için makinenin **yumuşak, yani az kireçli suya** ihtiyacı var; aksi hâlde makinenin iç donanımında ve bulaşıklarda **beyaz kireç artıkları** kalıyor ve bu yıkama, kurutma ve parlatma performansını olumsuz etkiliyor. Su, yumuşatma sisteminden geçerken sertliğe yol açan iyonlardan arınıyor; bu iyonlar sistemde birikiyor ve sistemin tazelenmesi için **bulaşık makinesi tuzu** kullanılıyor.

Vestel iki durum için ayrı not düşüyor: kullandığın suyun sertliği **90 dF üzerindeyse veya kuyu suyu** kullanıyorsan **filtre ve su tasfiye cihazları** kullanman tavsiye ediliyor. Başka bir yere **taşındıysan** su sertlik ayarını yeni yerin suyuna göre yeniden yapman yıkama etkinliği için önemli.

## Tablet deterjan kullanıyorsan

Vestel'e göre kombine (2'si 1, 3'ü 1 arada) deterjanlar **yalnızca belirli kullanım şartlarında** yeterli sonuç verir. Kılavuzun tavsiyesi: kombine deterjanla daha iyi sonuç almak istiyorsan makineye **tuz ve parlatıcı ekle**, **su sertlik ayarını ve parlatıcı ayarını en düşük (1)** konuma getir. Bu deterjanlarla bulaşıkların **kireçli ve ıslak** kalıyorsa **deterjan üreticisine başvur.** Kombine deterjanı bırakırsan Vestel'in sırası: tuz ve parlatıcı bölmelerini doldur, su sertlik ayarını en yüksek (6) konuma getirip **boş bir yıkama** yap, sonra sertlik ayarını şebeke suyuna göre ve parlatıcı ayarını uygun seviyeye getir.

Tuz ve parlatıcının markadan bağımsız anlatımı için [bulaşık makinesi tuzu ve parlatıcı ayarı](/blog/bulasik-makinesi-tuzu-ve-parlatici-ayari/), tuz lambası için [bulaşık makinesi tuz lambası sönmüyor](/blog/bulasik-makinesi-tuz-lambasi-sonmuyor/) yazısına bakabilirsin. Bulaşıklar ıslak da çıkıyorsa: [Vestel bulaşık makinesi kurutmuyor](/blog/vestel-bulasik-makinesi-kurutmuyor/). Lekeden çok yemek artığı kalıyorsa: [Vestel bulaşık makinesi temiz yıkamıyor](/blog/vestel-bulasik-makinesi-temiz-yikamiyor/).

## Ne zaman servis

Özel tuz dolu, kapak düzgün kapalı, su sertlik ayarı suyuna uygun, parlatıcı dolu ve ayarı yükseltilmiş, deterjan kılavuzdaki miktarda ve bulaşıklarda hâlâ beyazımsı lekeler kalıyorsa Vestel'in kılavuzu kullanıcıya başka adım vermiyor: **İletişim Merkezi ile irtibata geç**; yetkili servis listesine ve iletişim bilgilerine Vestel'in web sitesinden ulaşabilirsin.

⛔ **Kendin-çöz sınırı burada biter.** Tuz, parlatıcı, ayarlar ve deterjan kullanıcıya; su yumuşatma sistemi ve makinenin içi servise aittir.

Ekranda bir hata kodu yanıyorsa önce kodun anlamına bak: [Vestel bulaşık makinesi hata kodları](/blog/vestel-bulasik-makinesi-hata-kodlari/).

## Servisi aramadan önce iki dakikalık özet

1. Tuz eksik uyarı lambası yanıyor mu, tuz en son ne zaman kondu?
2. Su sertlik ayarı hangi seviyede, suyun sertliği ölçüldü mü?
3. Parlatıcı dolu mu, ayarı hangi seviyede?
4. Tablet mi, toz deterjan mı kullanıyorsun, ne kadar?
5. Lekeler beyazımsı mı, mavimsi mi?

Bu beşine cevabın varsa servise "beyaz leke bırakıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

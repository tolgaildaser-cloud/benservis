---
title: "Beko buzdolabı ses yapıyor"
description: "Beko buzdolabı ses ya da gürültü yapıyorsa Beko kılavuzundaki ayrım: normal sayılan sesler, zemin ve ayak dengesi, üstteki eşyalar."
slug: "beko-buzdolabi-ses-yapiyor"
date: "2026-10-01"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-01 PAZ alt ajanı (sprint #144, Beko belirti koşusu). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile download.beko.com'dan İLK KEZ indirildi, hepsi HTTP 200.
# #88: web araması YALNIZ belgelerin adresini bulmak için kullanıldı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-beko-buzdolabi-sprint/ · okuma pdftotext -layout, sayfa = PDF sayfası (\f ile sayıldı).
#  (A) BK 9611 NE / 9610 NFY / 9614 NFIY / 9625 NEX / 9621 NFEY / 984611 EI ...  http://download.beko.com/Download.UsageManualsBeko/984611-ei-no-frost-buzdolabi-buzdolabi-kullanim-kilavuzu-tr_TR_Manual_7289120284_en_US20180112-100911-151.pdf  43 s.  md5 2b4510ba146966baa86e0ac3a3388a76  (sayfa atıfları bu belgeye göre)
#  (B) 9554 NF / 9570 NF / 954270 MB / 970470 MB / 970470 MI  http://download.beko.com/Download.UsageManualsBeko/970470-mb-no-frost-buzdolabi-buzdolabi-kullanim-kilavuzu-tr_TR_201805251100833_User-20Manual-20-20File-20-28Long-29en_US.pdf  25 s.  md5 7e6d6c015ce85f83200d4b23c535f251  (aynı satırlar s.20-21)
#  (C) B1 9426 NM / B1 9460 NM / B1 9490 NM / B1 9540 NM  http://download.beko.com/Download.UsageManualsBeko/b1-9460-nm-no-frost-buzdolabi-buzdolabi-kullanim-kilavuzu-tr_TR_20141125172252_Kullanma-20K-C4-B1lavuzu-Dosyatur-A.pdf  28 s.  md5 12658b6c939f31d1cbb06bd4f0002816  (aynı satırlar s.24)
#  (indirildi, bu yazıda kullanılmadı: 670560 EB  .../670560eb-no-frost-buzdolabi-buzdolabi-kullanim-kilavuzu-tr_TR_201804031034229_User-20Manual-20-20Filetr_TR.pdf  77 s.  md5 9ccdf41004af792c031ebacdc41bb20a)
# Sorun giderme (A s.37-39):
#   "Buzdolabı çalışırken çalışma sesi artıyor. • Ortam sıcaklığının değişmesine bağlı olarak ürünün çalışma performansı değişebilir. Bu normaldir ve bir arıza değildir." (A s.37)
#   "Sarsılma ya da gürültü. • Zemin düz veya dayanıklı değildir. >>> Ürün yavaşça hareket ettirildiğinde sallanıyorsa ayaklarını ayarlayarak ürünü dengeleyin. Ayrıca zeminin ürünü taşıyabilecek kadar dayanıklı oolmasına dikkat edin.
#    • Ürünün üzerine konulmuş eşyalar gürültü yapıyor olabilir. >>> Ürünün üzerinde bulunan eşyaları kaldırın." (A s.38, B s.20, C s.24)
#   "Üründen sıvı akması, püskürmesi vb. sesler geliyor. • Ürünün çalışma prensipleri gereği sıvı ve gaz akışları gerçekleşmektedir. >>>Bu normaldir ve bir arıza değildir." (A s.38)
#   "Üründen rüzgar sesi geliyor. • Ürünün soğutma işlemini gerçekleştirebilmesi için fan kullanılmaktadır. Bu normaldir ve bir arıza değildir." (A s.38-39)
#   "Kapı açıldığında fan çalışmaya devam ediyor. • Dondurucu kapısı açıldığında fan çalışmaya devam edebilir." (A s.39)
#   A s.37 giriş: "...Bahsedilen bazı özellikler ürününüzde olmayabilir." · A s.39 UYARI: "...sorunu gideremezseniz ürünü satın aldığınız bayi ya da Yetkili Servise başvurun. Çalışmayan ürünü kendiniz onarmayı denemeyin."
# Diğer: A s.10 "Kompresör çalışmaya başladığında bir ses duyacaksınız. Soğutma sistemi içerisindeki sıkışmış sıvı ve gazlar, kompresör çalışmıyor olsa da ses çıkarması normaldir."
#   · A s.30 "Not: Otomatik buz makineli ürünlerde, buz dökme esnasında ses oluşabilir. Oluşan bu ses normal olup, hata belirtisi değildir."
#   · A s.9 3.5 "Buzdolabınız dengesiz duruyor ise; Buzdolabınızın ön ayaklarını şekildeki gibi döndürerek dengeli durmasını sağlayabilirsiniz. Siyah ok yönüne döndürüldüğünde ayağın bulunduğu köşe alçalır,
#     diğer yöne döndürüldüğünde ise yükselir. Bu işlem yapılırken birinden dolabı hafifçe kaldırması için yardım almanız kolaylık sağlayacaktır." · B s.9 / C s.9 "öndeki ayar ayaklarını sağa veya sola döndürerek ayarlayın."
#   · A s.5 "Ürünün üstüne içi sıvı dolu kaplar koymayın." · A s.8 "UYARI: Kurulum ve elektrik bağlantıları Yetkili Servis tarafından yapılmalıdır."
# FİŞ KURALI İSTİSNASI: ilk adım "fişi çek" değil; sesi dinlemek buzdolabının çalışmasını gerektiriyor, söküm/temizlik adımı yok (vestel-buzdolabi-ses-yapiyor / arcelik-buzdolabi-sogutmuyor emsali).
# YAKIN KOPYA: yayında Arçelik/Grundig/Altus "buzdolabı ses yapıyor" sayfası YOK (origin/main f6bc46b ls-tree).
# BİLEREK YAZILMAYANLAR: kompresör/fan/motor arızası teşhisi (belgede yok) · plastik takozların takılması (A s.8: "üründeki vidaları söküp" → alet, kurulum işi; bu satırda da yok)
#   · duvar mesafesi ve arkaya değen eşya (Beko'nun ses satırında yok; başka markanın satırından taşınmadı) · raf/tabak titreşimi (Beko belgesinde yok) · desibel/ses düzeyi rakamı.
# Alıntı denetim tablosu: beko-buzdolabi-ses-yapiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Buzdolabının kullanma kılavuzu", "Yardım edecek bir kişi"]
steps:
  - "Duyduğun sesi Beko'nun normal saydığı seslerle karşılaştır."
  - "Buzdolabını yavaşça hareket ettirip sallanıp sallanmadığını kontrol et."
  - "Sallanıyorsa ön ayakları döndürerek dengele; bu sırada birinden dolabı hafifçe kaldırmasını iste."
  - "Zeminin düz ve buzdolabını taşıyacak kadar sağlam olduğunu kontrol et."
  - "Buzdolabının üstündeki eşyaları kaldır."
  - "Ses sürüyorsa ürünü satın aldığın bayiye ya da Yetkili Servise başvur."
faq:
  - q: "Beko buzdolabımdan gelen ses normal mi?"
    a: "Beko'nun no-frost buzdolabı kullanma kılavuzlarına göre şu sesler normaldir: kompresör çalışmaya başladığında duyulan ses, soğutma sistemindeki sıkışmış sıvı ve gazların kompresör çalışmıyorken bile çıkardığı ses, sıvı akması ve püskürmesi gibi sesler, fandan gelen rüzgar sesi ve otomatik buz makineli ürünlerde buz dökme sesi."
  - q: "Buzdolabı bazen daha yüksek sesle çalışıyor. Neden?"
    a: "Beko'nun sorun giderme tablosunda 'Buzdolabı çalışırken çalışma sesi artıyor' satırı var. Beko'ya göre ortam sıcaklığının değişmesine bağlı olarak ürünün çalışma performansı değişebilir; bu normaldir ve bir arıza değildir."
  - q: "Ayakları nasıl ayarlarım?"
    a: "Beko'nun kurulum bölümüne göre buzdolabı dengesiz duruyorsa ön ayaklar döndürülerek dengelenir. BK 9611 NE ailesinin kılavuzuna göre ayak siyah ok yönüne döndürüldüğünde o köşe alçalır, diğer yöne döndürüldüğünde yükselir. Beko bu işlem sırasında birinden dolabı hafifçe kaldırması için yardım almanın kolaylık sağlayacağını yazıyor."
  - q: "Dondurucunun kapısını açınca fan sesi kesilmiyor. Arıza mı?"
    a: "Beko'nun tablosuna göre dondurucu kapısı açıldığında fan çalışmaya devam edebilir. Tablo bunu ayrı bir satırda, kullanıcıdan bir işlem istemeden anlatıyor."
images:
  coverAlt: "Mutfakta duran gri no-frost buzdolabının alt kısmı; zemindeki ön ayarlı ayaklar ve buzdolabının üstü boş"
---

Buzdolabından uğultu, şırıltı, rüzgar sesi ya da sarsıntılı bir gürültü geliyor ve bunun normal mi yoksa arıza mı olduğunu merak ediyorsun. Beko'nun no-frost buzdolabı kullanma kılavuzlarındaki sorun giderme tablosu bu soruyu iki gruba ayırıyor. Bir grup sesi **normal** sayıyor: çalışma sesinin ortam sıcaklığıyla artması, **sıvı akması ve püskürmesi gibi sesler** ve **rüzgar sesi.** Kullanıcıdan işlem isteyen tek satır ise **"Sarsılma ya da gürültü."** Beko bu satırda iki sebep sayıyor: **düz ya da dayanıklı olmayan zemin** ve **buzdolabının üzerine konmuş eşyalar.** Bu yazıda ikisini birlikte adım adım açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Sesi Beko'nun normal sesler listesiyle karşılaştır → buzdolabını yavaşça hareket ettir, sallanıyor mu bak → sallanıyorsa ön ayakları döndürerek dengele → zeminin düz ve sağlam olduğuna bak → üstündeki eşyaları kaldır. Ses sürüyorsa bayi ya da yetkili servis.

## Adım adım: evde denenecekler

**1. Sesi tanı.** Beko'nun normal saydığı sesler aşağıda ayrı bir bölümde. Duyduğun ses bunlardan biriyse Beko'ya göre **bu normaldir ve bir arıza değildir.** Beko'nun tablosunun girişindeki not da önemli: **bahsedilen bazı özellikler ürününde olmayabilir;** örneğin buz dökme sesi yalnız otomatik buz makineli ürünlerde duyulur.

**2. Sallanıyor mu bak.** Sesin bir sarsıntıyla birlikte geldiğini düşünüyorsan Beko'nun **"Sarsılma ya da gürültü"** satırına geç. İlk sebep: **zemin düz veya dayanıklı değildir.** Beko'nun testi basit: buzdolabını **yavaşça hareket ettir** ve **sallanıp sallanmadığına** bak.

**3. Ayakları dengele.** Buzdolabı sallanıyorsa Beko'nun çözümü **ayaklarını ayarlayarak ürünü dengelemek.** Beko'nun kurulum bölümüne göre bunun için **ön ayakları döndürürsün.** BK 9611 NE ailesinin kılavuzunda yön de yazıyor: ayak **siyah ok yönüne döndürüldüğünde o köşe alçalır, diğer yöne döndürüldüğünde yükselir.** Beko bu sırada **birinden dolabı hafifçe kaldırması için yardım almanın** işi kolaylaştıracağını yazıyor.

**4. Zemine bak.** Aynı satırdaki ikinci öneri: **zeminin ürünü taşıyabilecek kadar dayanıklı** olmasına dikkat et. Ayaklar dengelendiği hâlde buzdolabı oynuyorsa zeminin düz ve sağlam olup olmadığını kontrol et.

**5. Üstünü boşalt.** Satırdaki ikinci sebep: **ürünün üzerine konulmuş eşyalar gürültü yapıyor olabilir.** Beko'nun çözümü tek cümle: **ürünün üzerinde bulunan eşyaları kaldır.** Beko'nun güvenlik bölümü de buzdolabının üstüne **içi sıvı dolu kap konmamasını** istiyor.

**6. Sürüyorsa başvur.** Bu kontrollere rağmen ses sürüyorsa Beko'nun tablosunun kapanış uyarısı geçerli: talimatları uygulamana rağmen sorunu gideremezsen **ürünü satın aldığın bayi ya da Yetkili Servise başvur;** çalışmayan ürünü kendin onarmayı deneme.

## Beko'ya göre normal sesler

Beko'nun no-frost buzdolabı kılavuzlarında normal sayılan sesler şunlar:

- **Kompresör sesi:** kompresör çalışmaya başladığında bir ses duyarsın.
- **Soğutma sistemindeki sıvı ve gaz sesi:** Beko'ya göre soğutma sistemi içindeki sıkışmış sıvı ve gazların, **kompresör çalışmıyorken bile** ses çıkarması normaldir.
- **Sıvı akması, püskürmesi gibi sesler:** ürünün çalışma prensipleri gereği **sıvı ve gaz akışları** gerçekleşir; Beko'ya göre bu normaldir ve arıza değildir.
- **Rüzgar sesi:** ürünün soğutma yapabilmesi için **fan** kullanılır; Beko'ya göre bu da normaldir.
- **Kapı açıkken süren fan sesi:** Beko'ya göre **dondurucu kapısı açıldığında fan çalışmaya devam edebilir.**
- **Buz dökme sesi:** otomatik buz makineli ürünlerde buz dökme sırasında ses oluşabilir; Beko'ya göre bu normaldir ve hata belirtisi değildir.

Tablodaki bir satır daha sesle ilgili: **buzdolabı çalışırken çalışma sesi artıyor.** Beko'nun açıklaması: **ortam sıcaklığının değişmesine bağlı olarak** ürünün çalışma performansı değişebilir; bu normaldir ve bir arıza değildir.

Markadan bağımsız anlatım için [buzdolabı ses yapıyor](/blog/buzdolabi-ses-yapiyor/) yazısına bakabilirsin. Buzdolabının ekranında bir kod görüyorsan [Beko buzdolabı hata kodları](/blog/beko-buzdolabi-hata-kodlari/) yazısı Beko'nun kod listesini anlatıyor.

## Ne zaman servis

Ses Beko'nun normal sesler listesinde yoksa, buzdolabı dengelendiği, zemin sağlam olduğu ve üstü boşaltıldığı hâlde gürültü sürüyorsa Beko'nun tablosu kullanıcıya başka bir sebep göstermiyor. Bu noktada **ürünü satın aldığın bayi ya da Yetkili Servis.** Beko'nun kurulum bölümündeki kural da geçerli: **kurulum ve elektrik bağlantıları Yetkili Servis tarafından yapılmalıdır.**

⛔ **Kendin-çöz sınırı burada biter.** Ayak dengesi, zemin ve üstteki eşyalar kullanıcıya; kompresör, fan ve soğutma sistemi uzmana aittir.

## Servisi aramadan önce kısa özet

1. Ses ne tür: uğultu, şırıltı, rüzgar sesi, sarsıntı, tıkırtı?
2. Ses sürekli mi, kompresör çalışmaya başladığında mı, kapı açıkken mi?
3. Buzdolabı yavaşça hareket ettirildiğinde sallanıyor mu?
4. Buzdolabının üstünde eşya var mı?
5. Buzdolabının modeli ne, otomatik buz makinesi var mı?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

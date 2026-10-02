---
title: "Arçelik klima ısıtmıyor: evde kontrol"
description: "Arçelik klima ısıtmıyorsa kılavuzun notları: ısıtma modu, oda sıcaklığının üstünde ayar, ilk dakikalar, ılık hava, kanat açısı, hava yolu ve filtre."
slug: "arcelik-klima-isitmiyor"
date: "2026-10-02"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, 2 Eki klima belirti partisi). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200; md5'ler 1 Eki yerel kopyalarıyla birebir. Arçelik'in kendi alan adı (download.arcelik.com.tr).
# Web araması KULLANILMADI: adresler yayındaki arcelik-klima-sogutmuyor provenansından. Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-klima-2eki/ · pdftotext -layout -f N -l N; sayfa = PDF sayfası.
#  A1) Arçelik "Eco Ionizer Inverter serisi ev tipi klima kullanma kılavuzu" 182410 A / 232410 A (Doküman 5400721583 Rev.:c), 28 s., md5 cef5414dfc998a5217f8be6310bd2be3
#      https://download.arcelik.com.tr/download.usagemanuals/182410-a-eco-ionizer-inverter-serisi-ev-tipi-klima-kullanim-kilavuzu-tr_TR_20151106181318_User20Manual20-20Filetur-A.pdf
#      s.25 "7 Problemler için çözüm önerileri" · "Klima etkili olarak soğutmuyor veya ısıtmıyor." → "• Filtre kirli olabilir. >>> Filtrenin kirli olup olmadığını kontrol edin." / "• Uygun sıcaklık seçilmemiş olabilir. >>> Sıcaklık ayarının doğru yapılıp yapılmadığını kontrol edin." / "• Ünite dışarıdan hava alamıyor olabilir. >>>> Ünitenin hava giriş ve çıkış pencerelerinin önünde bir engel olup olmadığını kontrol edin."
#      s.25 "Isıtma işlemi sürerken hava akımı doğrudan doğruya başlamıyor. C Eğer hava akımı, sıcaklık derecesi yükselmeden başlarsa, istenmeyen bir soğutma etkisi görülecektir. Bunu önlemek için hava akımı, sıcaklık yeterli dereceye ulaştıktan sonra başlayacaktır. Bu, klimanın yanlış çalışmasından kaynaklanmaz ve bir arıza değildir."
#      s.25 "Sıkışmış havanın boşalırken çıkardığı gibi bir ses geliyorsa bu bir arıza değildir. Klimanın ısıtma işlemi sırasında buz çözülme işleminin başlangıcında ve bitiminde ünitenin içinde gerçekleşen soğutucu gazın ters yönlere hareket etmesinden doğan sestir." / "Klima tekrar çalıştırıldığında 3 dakika kadar çalışmıyor. C Bu, klimanın korunması için geliştirilmiş bir önlemdir." / "A Bu bölümdeki talimatları uygulamanıza rağmen sorunu gideremezseniz ürünü satın aldığınız bayi ya da Yetkili Servise başvurun. Çalışmayan ürünü kendiniz onarmayı asla denemeyin."
#      s.24 "Klimanın temizliğindeki en önemli bölüm, hava filtresinin temizlenmesidir. Aksi takdirde, soğutma-ısıtma kapasitesi düşer" / "1. Ürüne gelen elektriği kesin. 2. Hava filtresini çıkartmak için ön paneli sağ ve sol alt köşe noktalarından ve ortadan kendinize doğru çekerek açın. 3. Hava filtresinin alt kısımlarından çekerek çıkartın. 4. Hava filtrelerini vakum ya da ılık suyla temizleyin. Hava filtresi çok kirli ise deterjan ile ılık suda yıkayın. 5. Temizleme bitince gölgede kurutun ve hava filtrelerini tekrar yerine takın."
#      s.23 bakım tablosu "Eşanjörü temizleyin. Yılda bir kez" / "Isı eşanjör bobinlerini ve panel deliklerini temizlemek için buhar kullanın.(Yetkili servise danışın.)" / "Ürünü temizlerken ya da bakımını yaparken sağlam bir tabure ya da merdiven kullanın." / "Hava filtresini çıkarırken metal parçalara dokunmayın. Yaralanabilirsiniz." / "Klimayı suyla yıkamayın."
#      s.18 "C Yatay kanatların yönünü ayarlamak için her zaman uzaktan kumandayı kullanın. Yatay kanatların elle ayarlanması ürüne hasar verebilir."
#      s.15 mod seçimi: "Tuşa her bastığınızda mod değişecek ve sırasıyla Soğutma, Otomatik çalışma, Nem giderme, Isıtma ve Fan modlarına geçecektir."
#      s.13 "klima kullanımı sırasında mekanın kapı ve pencerelerinin kapalı olması gerekmektedir."
#      s.10 "Yıkanabilir toz filtreyi düzenli olarak temizlenmez ise, soğutma-ısıtma kapasitesi düşecek"
#  A2) Arçelik klima kullanma kılavuzu (FACELIFT, 40 s.; model numarası metin katmanında yok), md5 5c0752d55f11d6a00efc0770d77f4897
#      https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_201803231541778_User%20Manual%20-%20Filetr_TR.pdf
#      s.18 "Odanın ısıtılması (d Isıtma modu) Odayı konforlu ve temiz rüzgarla ısıtır." / "Isıtma moduna geçene kadar ... tuşuna basın. Ekranda d sembolü belirecektir." / "- Sıcaklık aralığı 16°C (60°F) ile 30°C (86°F) arasındadır." / "C Uzaktan kumandanın göstergesindeki sıcaklık değerini oda sıcaklığının üstünde bir değere ayarlayın." / "C Klima, ısıtma modundayken daha verimli bir ısıtma için yatay kanat açısını en alt konuma ayarlayın." / "C Klima, ısıtma modundayken ortam sıcaklığı istenen sıcaklığa ulaştıktan sonra iç ünite fanı bir süre daha çalışmaya devam eder. Bu durumda klimanın üflediği hava ılık hissedilebilir. İç ortam sıcaklığını düşük hissettiğiniz hallerde, kumandada ki sıcaklık değerini daha yüksek bir değere ayarlamanızı öneririz."
#      s.18 "Hızlı ısıtma fonksiyonu Odanın hızlı ısınmasını sağlar." / "Hızlı ısıtma nedir? Klima 30dk. boyunca oldukça yüksek fan hızında sıcaklık ayarını 30°C (86°F)'ye getirerek ısıtma modunda çalışarak oda sıcaklığının hızla yükselmesini sağlar." / "C Hızlı ısıtma fonksiyonu soğutma modunda kullanılmaz." / "C Bu fonksiyon bazı ürünlerde olmayabilir veya çalışmayabilir."
#      s.19 "Isıtma modu: Ayarlanan sıcaklık değeri oda sıcaklık değerinden düşük ise cihaz ısıtma modunda çalışmaz. Ayarlanan sıcaklık değerini arttırın."
#      s.23 uyku: "C Uyku modundayken oda sıcaklığı ayar değeri, Isıtma modunda 60 dakika sonra belirlediğinizden 1°C daha düşer, 2 saat sonra ise 2°C daha düşer." (metindeki "Uyku NPEundayken" font kodlaması; "modundayken" olarak okundu)
#      s.4 gösterge ekranı: "4- Defrost ışığı"
#      s.37 çözüm önerileri: "Klima etkili olarak soğutmuyor veya ısıtmıyor." başlığı ve "Isıtma işlemi sürerken hava akımı doğrudan doğruya başlamıyor." satırı A1 ile aynı (madde metinlerinin bir kısmı font kodlaması nedeniyle okunamıyor; çapraz doğrulama).
# YAKIN KOPYA: yayındaki arcelik-klima-sogutmuyor aynı dört maddeli satırı kullanıyor. Bu taslak ısıtmaya özgü notları (oda sıcaklığının üstünde ayar, "ısıtma modunda çalışmaz" kuralı, ılık hava, kanat en alt, hava akımının geç başlaması, hızlı ısıtma, uyku modunun ısıtmadaki etkisi, buz çözülme sesi) öne çıkarıyor; enerji tasarruflu soğutma ve güneş maddeleri bu sayfada yok. Beko klima için ayrıca yazılmadı (aynı grup).
# BİLEREK YAZILMAYANLAR: "ilk çalıştırmada oda çok sıcak" maddesi (soğutmaya özgü) · Defrost ışığının anlamı (kılavuz yalnız adını veriyor, açıklamıyor; yorum yapılmadı) · tuş harfleri (font glifleri okunmuyor) · eşanjör temizliği (servis) · dış üniteye çıkma · fiyat ve "garanti dışı bakım" cümlesi.
# Alıntı denetim tablosu: arcelik-klima-isitmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (filtre kuruma hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Elektrikli süpürge", "Sağlam bir tabure"]
steps:
  - "Kumandanın mod tuşuyla ısıtma moduna geç; ekranda ısıtma sembolünün çıktığını gör."
  - "Ayar sıcaklığını oda sıcaklığının üstünde bir değere getir."
  - "Isıtmayı yeni açtıysan hava akımı başlayana kadar bekle."
  - "Hava ılık geliyor ve oda sana soğuk geliyorsa ayar sıcaklığını biraz daha yükselt."
  - "Yatay kanadı kumandayla en alt konuma al; kanatları elle itme."
  - "Kapı ve pencereleri kapat, iç ünitenin hava giriş ve çıkışının önünü aç."
  - "Ürüne gelen elektriği kes, ön paneli aç, hava filtresini çıkar, vakumla ya da ılık suyla temizle, gölgede kurutup tak."
  - "Sorun sürerse ürünü aldığın bayiye ya da Arçelik yetkili servisine başvur."
faq:
  - q: "Arçelik klimayı ısıtmaya aldım ama hiç ısıtmıyor. İlk neye bakmalıyım?"
    a: "Ayar sıcaklığına. Arçelik kılavuzuna göre ayarlanan sıcaklık oda sıcaklığından düşükse cihaz ısıtma modunda çalışmaz; kılavuz ayar değerini artırmanı ve göstergedeki sıcaklığı oda sıcaklığının üstünde bir değere getirmeni istiyor. Isıtma modunda ayar aralığı 16-30°C."
  - q: "Odayı çabuk ısıtmanın bir yolu var mı?"
    a: "Bazı Arçelik modellerinde hızlı ısıtma fonksiyonu var: klima 30 dakika boyunca yüksek fan hızında, sıcaklık ayarını 30°C'ye getirerek ısıtır. Kılavuz bu fonksiyonun soğutma modunda kullanılmadığını ve bazı ürünlerde olmayabileceğini yazıyor."
  - q: "Isıtırken klimadan sıkışmış hava boşalıyormuş gibi bir ses geliyor. Arıza mı?"
    a: "Hayır. Arçelik kılavuzuna göre bu ses, ısıtma sırasında buz çözülme işleminin başında ve sonunda soğutucu gazın ünite içinde ters yöne hareket etmesinden doğar ve bir arıza değildir."
  - q: "Gece uyku modunda oda serinliyor. Neden?"
    a: "Arçelik'in 2018 tarihli klima kılavuzuna göre uyku modunda ısıtma ayarı 60 dakika sonra 1°C, 2 saat sonra 2°C düşer. Uyku modu odanın siz uyurken çok ısınmasını önlemek için böyle çalışır."
images:
  coverAlt: "Kış akşamı loş bir yatak odasında duvardaki beyaz split klimanın aşağı yönelmiş kanadı, yatağın üzerinde kalın bir yorgan"
---

Soğuk bir akşam klimayı ısıtmaya aldın, ama odaya ya hiç sıcak hava gelmiyor ya da gelen hava ılık kalıyor. Arçelik'in Türkçe kullanma kılavuzlarında bu belirtinin anahtarı ısıtma modunun kendi notlarında: **"Ayarlanan sıcaklık değeri oda sıcaklık değerinden düşük ise cihaz ısıtma modunda çalışmaz."** Kılavuz ayrıca ısıtmada havanın neden geç geldiğini, neden ılık hissedilebileceğini ve kanadın nereye bakması gerektiğini ayrı ayrı açıklıyor. Bu yazıda Arçelik'in ısıtma notlarını, sorun giderme bölümüyle birlikte sırayla anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Mod ısıtma mı? Ayar sıcaklığı oda sıcaklığının üstünde mi? Değilse klima ısıtma yapmaz. Yeni açtıysan hava ısınmadan üflemez, bekle. Hava ılıksa ayarı yükselt, kanadı en alta indir. Sonra kapı-pencere, ünitenin önü ve hava filtresi. Sürerse → bayi ya da Arçelik yetkili servisi.

## Arçelik'in ısıtma notları

Arçelik kılavuzlarında ısıtmayla ilgili şu notlar, "klima ısıtmıyor" sanılan durumların çoğunu açıklıyor:

| Durum | Arçelik'in açıklaması |
|---|---|
| Ayar, oda sıcaklığının altında | Cihaz ısıtma modunda çalışmaz; ayarı artır |
| Isıtma açıldı, hava hemen gelmiyor | Soğuk hava üflememek için hava akımı sıcaklık yeterli dereceye ulaşınca başlar; arıza değil |
| Oda istenen sıcaklığa ulaştı, hava ılık | İç ünite fanı bir süre daha çalışır, hava ılık hissedilebilir; oda soğuk geliyorsa ayarı yükselt |
| Isıtma verimi düşük gibi | Yatay kanat açısını en alt konuma ayarla |
| Isıtırken sıkışmış hava sesi | Buz çözülme başında ve sonunda soğutucu gazın yön değiştirmesi; arıza değil |
| Kapatıp hemen açınca çalışmıyor | Koruma önlemi; 3 dakika sonra çalışır |

Sorun giderme bölümü bunlara üç kontrol daha ekliyor: filtre kirli olabilir, uygun sıcaklık seçilmemiş olabilir, ünite dışarıdan hava alamıyor olabilir.

## Adım adım: evde denenecekler

**1. Isıtma modu.** Kumandanın mod tuşuyla ısıtma moduna geç; ekranda ısıtma sembolünün çıktığını gör. Mod tuşuna her basışta sıra soğutma, otomatik, nem giderme, ısıtma ve fan diye ilerler.

**2. Ayar sıcaklığı.** Ayar sıcaklığını oda sıcaklığının üstünde bir değere getir. Isıtma modunda ayar aralığı 16-30°C. Arçelik'in kuralı net: ayar oda sıcaklığından düşükse klima ısıtma modunda çalışmaz.

**3. İlk dakikalar.** Isıtmayı yeni açtıysan hava akımı başlayana kadar bekle. Kılavuza göre hava ısınmadan üflenirse istenmeyen bir soğutma etkisi olur; bu yüzden hava akımı sıcaklık yeterli dereceye ulaşınca başlar. Klimayı kapatıp hemen açtıysan 3 dakikalık koruma süresini de hesaba kat.

**4. Ilık hava.** Hava ılık geliyor ve oda sana soğuk geliyorsa ayar sıcaklığını biraz daha yükselt. Arçelik'e göre oda istenen sıcaklığa ulaştıktan sonra iç ünite fanı bir süre daha çalışır ve hava ılık hissedilebilir; kılavuz bu durumda kumandadaki değeri yükseltmeni öneriyor. Modelinde hızlı ısıtma fonksiyonu varsa 30 dakika boyunca daha hızlı ısınma sağlar.

**5. Kanat açısı.** Yatay kanadı kumandayla en alt konuma al; kanatları elle itme. Kılavuz ısıtmada daha verimli ısıtma için kanadın en alt konuma ayarlanmasını öneriyor ve kanatların elle ayarlanmasının ürüne hasar verebileceğini yazıyor.

**6. Kapı, pencere ve hava yolu.** Kapı ve pencereleri kapat, iç ünitenin hava giriş ve çıkışının önünü aç. Arçelik klima kullanılırken kapı ve pencerelerin kapalı olması gerektiğini yazıyor; sorun giderme bölümü de ünitenin dışarıdan hava alamamasını ayrı bir neden sayıyor. Dış üniteye yalnız güvenle görebildiğin kadar bak.

**7. Hava filtresi.** Ürüne gelen elektriği kes, ön paneli aç, hava filtresini çıkar, vakumla ya da ılık suyla temizle, gölgede kurutup tak. Ön paneli sağ ve sol alt köşelerinden ve ortadan kendine doğru çekerek açarsın; filtre alt kısmından çekilerek çıkar, çok kirliyse deterjanlı ılık suda yıkanır. Filtreyi çıkarırken metal parçalara dokunma, uzanmak için sağlam bir tabure kullan. Kılavuza göre filtre temizlenmezse soğutma-ısıtma kapasitesi düşer. Genel anlatım [klima filtresi temizleme](/blog/klima-filtresi-temizleme/) yazısında.

**8. Sürerse servis.** Sorun sürerse ürünü aldığın bayiye ya da Arçelik yetkili servisine başvur.

## Ne zaman servis?

Arçelik'in sorun giderme bölümü şu cümleyle bitiyor: talimatları uygulamana rağmen sorunu gideremezsen ürünü satın aldığın bayi ya da yetkili servise başvur, **çalışmayan ürünü kendin onarmayı asla deneme.**

| Durum | Kimin işi |
|---|---|
| Mod, ayar sıcaklığı, bekleme, kanat, kapı-pencere, hava yolu, hava filtresi | Senin, bu rehberdeki adımlar |
| Bu kontrollerden sonra hâlâ ısıtmıyor | Bayi ya da Arçelik yetkili servisi |
| Isı eşanjörünün temizliği | Arçelik'in bakım tablosuna göre yetkili servise danış |

⛔ Klimayı suyla yıkama, iç ünitenin içine ya da dış üniteye müdahale etme. Arçelik kılavuzu klimanın suyla yıkanmamasını ve çalışmayan ürünün kullanıcı tarafından onarılmamasını istiyor.

Ekranda bir hata kodu görüyorsan [Arçelik klima hata kodları](/blog/arcelik-klima-hata-kodlari/) yazısına bak. Yazın serinletmiyorsa [Arçelik klima soğutmuyor](/blog/arcelik-klima-sogutmuyor/), markadan bağımsız anlatım için [klima sıcak hava üflemiyor](/blog/klima-sicak-hava-uflemiyor/) yazısına bakabilirsin.

---

**Kaynak künyesi.** Isıtma modu notları, hızlı ısıtma, uyku modu, sorun giderme önerileri ve filtre temizliği Arçelik'in download.arcelik.com.tr'deki Türkçe kullanma kılavuzlarından (Eco Ionizer Inverter 182410 A / 232410 A ve Arçelik'in 2018 tarihli klima kılavuzu) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

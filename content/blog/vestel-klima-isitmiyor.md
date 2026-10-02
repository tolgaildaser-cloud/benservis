---
title: "Vestel klima ısıtmıyor: evde kontrol"
description: "Vestel klima ısıtmıyorsa kılavuzun sırası: ısıtma modu ve sıcaklık, ilk dakikalar, DF buz çözme, EKO, kapı-pencere, hava yolu ve toz filtresi."
slug: "vestel-klima-isitmiyor"
date: "2026-10-02"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, 2 Eki klima belirti partisi). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200; md5'ler 1 Eki yerel kopyalarıyla birebir. Vestel'in kendi alan adı (statik/static.vestel.com.tr).
# Web araması KULLANILMADI: adresler yayındaki vestel-klima-calismiyor provenansından. Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-klima-2eki/ · pdftotext -layout -f N -l N.
#  V1) Vestel "Klima Kullanım Kılavuzu · Nova Inverter 12 A++ GI WIFI R32", 48 s., md5 8814dd2a3ddbfd95d191e6e3b3af5d7e (PDF sayfası = basılı sayfa)
#      https://statik.vestel.com.tr/webfiles/20234421_k.pdf
#      s.34 "Sorun Giderme" giriş: "Klimanızda normal olmayan bir durum tespit ettiğinizde aşağıdaki açıklamalar doğrultusunda sorunu çözmeye çalışabilirsiniz. Klimanız hala normal çalışmasına devam etmiyorsa İletişim Merkezi veya en yakın Yetkili Servis ile irtibata geçiniz."
#      s.34 "Klima hava üflüyor ama soğutma ve ısıtma performansı kötü." → "Sıcaklık ayarlamasında hata var. | Uygun bir sıcaklık ayarlayın." / "Hava filtresi toz ile tıkanmış. | Toz filtrelerini temizleyin." / "Klimanın hava girişi veya çıkışı tıkanmış. | Tıkanmaya neden olan malzemeleri temizleyin." / "Kapılar veya pencereler açık. | Pencere ve kapıları kapatın."
#      s.35 "Isıtma işlemi sürerken hava akımı hemen başlamıyor. | Isıtma için yeterli dereceye ulaşılamadı. | Eğer hava akımı sıcaklık derecesi yükselmeden başlarsa istenmeyen bir soğutma etkisi görülecektir. Bunu önlemek için hava akımı sıcaklık yeterli dereceye ulaştıktan sonra başlayacaktır. Bu klimanın yanlış çalışmasından kaynaklanmaz ve bir arıza değildir."
#      s.36 Koruma mesajları: "[DF] Dış ünitede oluşan buzlanma çözülüyor. Buz çözme işlemi tamamlandıktan sonra klimanız yeniden ısıtma modunda çalışmaya devam edecektir, bu mod devredeyken ürün kapatılmamalıdır." / "Hata mesajları sırayla önce Er simgesi sonra da hatanın kendine özel kodu ... Bu durumda klimaya herhangi bir şey yapmayın ve Yetkili Servis ile iletişime geçin."
#      s.32 "Pratik ve Faydalı Bilgiler": "Klimanın dış ünitesi dışarıdaki ısıyı emerek içeri taşır. Eğer dışarıdaki hava sıcaklığı düşerse klimanız daha az ısıtma yapmaya başlayacaktır. Bu durumda klimanızın verdiği sıcaklık yetmiyorsa ek ısıtıcı kullanın." / "Klimanız odanızı ısıtmak için sıcak havayı dolaştırır. Bu nedenle klimanızın tüm odayı ısıtma zaman alacaktır. Mümkünse klimanızın çalışmasını odayı kullanmadan bir süre önceye programlayın." / "Klima ısıtma modunda çalışırken dış ortam sıcaklığının düşük ve nem oranının yüksek olması, ısıtma verimliliğinin düşmesine yol açarak dış ünite üzerinde buz oluşumuna neden olabilir. Bu durumda klimanız ısıtma işletimini durduracak ve otomatik olarak buz çözme işlemi (Defrost) devreye girecektir. Bu bir arıza değildir. Buz çözme işlemi dış ortam ve dış ünite eşanjör sıcaklıklarına bağlı olarak 5 ile 9 dakika arasında tamamlanacak ve ardından klimanız otomatik olarak yeniden ısıtma modunda çalışmaya başlayacaktır. Buz çözme işlemi klima kapatılsa da çalışmaya devam eder ve işlem bittikten sonra klima tamamen kapanır. Buz çözme işlemi devam ederken klimanızın göstergesinde DF simgesi ile gösterilir." / "Hem iç hem de dış ortam sıcaklığı yüksekken ısıtma modunu seçmişseniz dış ünite bazen durabilir. Bu durum tamamen normaldir. Hiçbir şey yapmadan klimanız yeniden çalışana kadar bekleyin." / "Filtreleri düzenli olarak temizleyiniz. Zamanla kirlenen filtreler ısıtma, soğutma, hava akışı ve nem giderme işlevlerinin verimini düşürecek" / "Klimanızın yatay ve düşey kanatlarının yönünü ayarlayarak oda sıcaklığının ve hava akımının eşit ve etkin bir şekilde dağılmasını sağlayın." (s.31) / "UYARI: Temizleme işlemlerine başlamadan önce mutlaka klimanızı kapatın ve gelen elektriği sigortadan kesin."
#      s.33 "Toz filtreleri yaklaşık olarak haftada bir kez temizlenmeli" / "UYARI: Klimanızdaki filtrelerin temizliğini yetkili servis çağırmadan kendiniz yapabilirsiniz." / "Toz filtrelerini temizlemek için klima ön kapağını sol ve sağ yanlarından tutarak açın." / "Toz filtrelerini alt kenarlarından tutarak kaldırın ve aşağı doğru çekin." / "Elektrikli süpürge ile filtrelerin tozunu alın. Filtreler çok kirli ise ılık su ve yumuşak deterjan ile yıkayın. Filtreleri yerine takmadan önce mutlaka gölgede kurutun. Kurutmayı kesinlikle güneş ve ateş ile yapmayın. Filtreleri 40°C 'den sıcak suda yıkamayın." / "filtrenin üst kısmını yuvasına yerleştirin ve alt kısmından yerine oturana kadar bastırın." / "DİKKAT: Toz filtresi dışındaki filtreleri kesinlikle yıkamayınız." / "DİKKAT: Klimanızı kesinlikle filtresiz çalıştırmayın."
#      s.23 "Çalışma Sıcaklık Aralıkları ... Dış ortam ... Isıtma -10 / +24 ºC" · "İç ortam ... Isıtma +16 / +30 ºC" · "Dış ortam sıcaklığı düşük ise klimanız ısıtma modunda tam kapasite çalışmayabilir." · ısıtma düğmesi: "düğmesine basarak klimanızı ısıtma moduna geçirip ve düğmeleri ile istediğiniz sıcaklığı seçebilirsiniz."
#      s.24 "Turbo işlevi 30 dakika süre ile mümkün olan en hızlı soğutma ya da ısıtmayı elde etmenizi sağlar." · s.26 "Isıtma modunu seçtikten sonra ve düğmelerinden ortam sıcaklığını konfor ihtiyacınıza göre 16–30°C sıcaklıkları arasında ayarlayabilirsiniz." / EKO: "ısıtma modunda ise 16-24 °C arasında gerçekleşecektir ... ısıtma modu için 24 °C' den büyük sıcaklık ayarları yapılamayacaktır." / "İşlevi iptal etmek için EKO MOD düğmesine yeniden basın." · s.27 "UYARI: EKO işlevi devredeyken klimanın kapasitesi düşebilir."
#      s.28 Uyku: "Uyku modunu seçtiğinizde eğer ısıtma modunda iseniz klimanız ilk 1 saatin sonunda oda sıcaklığı ayar değerini 2°C, ikinci 1 saatin sonunda da 2°C daha düşürecektir. Klimanız 6 saat daha bu derecede çalıştıktan sonra uyku modu sona erecektir." / "Uyku modu tamamlandığında klima tamamen kapanacaktır."
#      s.9 "Klimanızda herhangi bir arıza meydana gelirse, klimayı kendiniz tamir etmeye çalışmayın, klimayı sökmeyin."
#  V2) Vestel "Klima Kullanım Kılavuzu · Plazma Inverter 9/12/18/24 A++", 48 s., md5 b08e2688400ea04682d820016c8e8305 (PDF s.N = basılı s.N-1)
#      https://static.vestel.com.tr/kullanimkilavuzlari/52162881.pdf
#      PDF s.36 "Isıtma işlemi sürerken hava akımı hemen başlamıyor." satırı birebir · PDF s.36 "DF Dış ünitede oluşan buzlanma çözülüyor..." · PDF s.33 buz çözme "5 ile 9 dakika" ve "ek ısıtıcı" notları birebir · PDF s.26 ısıtma dış ortam aralığı "-15 / +24".
# YAKIN KOPYA: yayındaki vestel-klima-sogutmuyor s.34 "soğutma ve ısıtma performansı kötü" satırını kullanıyor. Bu taslak ısıtmaya özgü satırları (ilk dakikalar, DF/Defrost, dış ünitenin durması, düşük dış sıcaklık, EKO'nun ısıtma sınırı, uyku modunun ısıtmadaki etkisi) öne çıkarıyor; ortak dört madde tek adıma ve tek adıma indirildi.
# BİLEREK YAZILMAYANLAR: ek ısıtıcının tipi/gücü (kılavuz tür belirtmiyor; ürün bilgi fişindeki kW değerleri yazılmadı) · dış ünitedeki buza müdahale · toz filtresi dışındaki filtrelerin değişimi (parça, #31) · Er kodları (hub'a bırakıldı) · bakım ücreti cümlesi ve fiyat.
# Alıntı denetim tablosu: vestel-klima-isitmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~25 dakika (filtre kuruma hariç)"
  totalTime: "PT25M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Elektrikli süpürge", "Ilık su ve yumuşak deterjan"]
steps:
  - "Kumandadan ısıtma modunu seç ve sıcaklığı 16-30°C arasında uygun bir değere ayarla."
  - "Isıtmayı açtıktan sonra hava hemen gelmezse bekle; klima havayı yeterli sıcaklığa ulaşınca üflemeye başlar."
  - "İç ünite göstergesinde DF görüyorsan buz çözmenin bitmesini bekle ve klimayı kapatma."
  - "EKO işlevi açıksa EKO/MOD düğmesine yeniden basarak kapat."
  - "Odanın kapı ve pencerelerini kapat, iç ünitenin hava giriş ve çıkışının önündeki eşyaları kaldır."
  - "Klimayı kapat ve elektriği sigortadan kes."
  - "Ön kapağı yanlarından tutarak aç, toz filtrelerini çıkar, süpürgeyle temizle ya da ılık suyla yıka, gölgede kurutup yerine oturt."
  - "Sorun sürerse ya da ekranda Er ile başlayan kod varsa Vestel İletişim Merkezi'ne veya yetkili servise başvur."
faq:
  - q: "Vestel klimanın ekranında DF yazıyor ve sıcak hava kesildi. Ne oldu?"
    a: "Vestel kılavuzuna göre DF, dış ünitede oluşan buzlanmanın çözüldüğünü gösterir. Dış ortam soğuk ve nemliyken klima ısıtmayı durdurur ve buz çözme işlemi 5 ile 9 dakika arasında tamamlanır; ardından ısıtma kendiliğinden yeniden başlar. Kılavuz bu mod devredeyken ürünün kapatılmamasını istiyor."
  - q: "Dışarısı çok soğukken klima yeterince ısıtmıyor. Normal mi?"
    a: "Evet. Vestel'e göre klimanın dış ünitesi dışarıdaki ısıyı emerek içeri taşır; dış hava sıcaklığı düşerse klima daha az ısıtma yapar. Nova Inverter kılavuzunda ısıtma için dış ortam çalışma aralığı -10 ile +24°C, Plazma Inverter kılavuzunda -15 ile +24°C. Klimanın verdiği sıcaklık yetmiyorsa kılavuz ek ısıtıcı kullanmanı öneriyor."
  - q: "Gece uyku modunda oda serinliyor. Neden?"
    a: "Nova Inverter kılavuzuna göre uyku modu ısıtmada ilk saatin sonunda ayar sıcaklığını 2°C, ikinci saatin sonunda 2°C daha düşürür; 6 saat daha bu derecede çalıştıktan sonra uyku modu sona erer ve klima tamamen kapanır. Bu, işlevin bilinçli davranışıdır."
  - q: "Klima ısıtıyor ama dış ünite arada duruyor. Arıza mı?"
    a: "Vestel kılavuzu hem iç hem dış ortam sıcaklığı yüksekken ısıtma modu seçildiyse dış ünitenin bazen durabileceğini ve bunun tamamen normal olduğunu yazıyor. Hiçbir şey yapmadan klima yeniden çalışana kadar bekle."
images:
  coverAlt: "Soğuk bir akşamda kanepede battaniyeyle oturan biri duvardaki beyaz split klimaya kumanda tutuyor, pencerede buğu var"
---

Hava soğudu, klimayı ısıtmaya aldın ama oda ısınmıyor. Vestel'in Türkçe kullanım kılavuzu bu belirti için iki ayrı yere bakmanı söylüyor: sorun giderme tablosundaki **"Klima hava üflüyor ama soğutma ve ısıtma performansı kötü."** satırı ve kılavuzun ısıtmaya ayrılmış "Pratik ve Faydalı Bilgiler" notları. İkincisi önemli, çünkü kışın ısıtmanın kesilmesi her zaman arıza değil: kılavuzun deyişiyle dış ünitede buz oluşunca klima ısıtmayı durdurur ve buz çözmeye geçer, **"Bu bir arıza değildir."** Bu yazıda Vestel'in sırasını, ekranda DF gördüğünde ne yapacağınla birlikte anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Mod ısıtma mı, sıcaklık uygun mu? Açılışta hava hemen gelmez; klima önce havayı ısıtır. Ekranda DF varsa buz çözme 5-9 dakika sürer, bu sırada klimayı kapatma. EKO açıksa ısıtma ayarı 24°C ile sınırlı, kapat. Sonra kapı-pencere, hava yolu ve toz filtresi. Ekranda Er kodu varsa ya da sorun sürerse → Vestel yetkili servisi.

## Isıtmada beklemen gereken üç durum

Vestel kılavuzları aşağıdaki durumları arıza saymıyor; hepsinde çözüm beklemek:

| Gördüğün | Vestel'in açıklaması | Ne kadar |
|---|---|---|
| Isıtmayı açınca hava hemen gelmiyor | Hava sıcaklığı yükselmeden üflerse soğutma etkisi yapacağından klima yeterli dereceye ulaşmayı bekler | Hava ısınana kadar |
| Ekranda DF, ısıtma durdu | Dış ünitede oluşan buz çözülüyor; bittikten sonra ısıtma kendiliğinden sürer | 5 ile 9 dakika |
| Ilık havada dış ünite arada duruyor | İç ve dış ortam sıcaklığı yüksekken ısıtma seçildiyse normal | Klima yeniden çalışana kadar |

Dış hava sıcaklığı da ısıtmayı doğrudan etkiliyor: Vestel'e göre dış ortam soğuk olduğunda klima ısıtma modunda tam kapasite çalışmayabilir.

## Adım adım: evde denenecekler

**1. Isıtma modu ve sıcaklık.** Kumandadan ısıtma modunu seç ve sıcaklığı 16-30°C arasında uygun bir değere ayarla. Vestel tablosunun ilk satırı **"Sıcaklık ayarlamasında hata var."**, çözümü **"Uygun bir sıcaklık ayarlayın."** Daha hızlı ısınma istiyorsan kılavuzdaki Turbo işlevi 30 dakika boyunca mümkün olan en hızlı ısıtmayı verir.

**2. İlk dakikalar.** Isıtmayı açtıktan sonra hava hemen gelmezse bekle. Kılavuza göre hava akımı, sıcaklık yeterli dereceye ulaştıktan sonra başlar; böylece odaya soğuk hava üflenmez.

**3. DF ve buz çözme.** İç ünite göstergesinde DF görüyorsan buz çözmenin bitmesini bekle ve klimayı kapatma. Vestel'e göre işlem dış ortam ve dış ünite eşanjör sıcaklığına bağlı olarak 5 ile 9 dakika sürer ve klima kapatılsa da devam eder.

**4. EKO işlevi.** EKO işlevi açıksa EKO/MOD düğmesine yeniden basarak kapat. Nova Inverter kılavuzuna göre EKO'da ısıtma ayarı 16-24°C ile sınırlanır, 24°C'nin üzerine çıkılamaz ve bu işlev devredeyken klimanın kapasitesi düşebilir.

**5. Kapı, pencere ve hava yolu.** Odanın kapı ve pencerelerini kapat, iç ünitenin hava giriş ve çıkışının önündeki eşyaları kaldır. Vestel tablosu "Kapılar veya pencereler açık" ve "Klimanın hava girişi veya çıkışı tıkanmış" satırlarını ayrı ayrı sayıyor. Kılavuz ayrıca kanatların yönünü kumandadan ayarlayarak sıcak havanın odaya eşit dağılmasını öneriyor.

**6. Güvenlik.** Klimayı kapat ve elektriği sigortadan kes. Vestel temizlikten önce bunu şart koşuyor.

**7. Toz filtresi.** Ön kapağı yanlarından tutarak aç, toz filtrelerini alt kenarından kaldırıp çek, süpürgeyle temizle ya da çok kirliyse ılık su ve yumuşak deterjanla yıka, gölgede kurutup üst kısmını yuvasına yerleştirerek yerine oturt. 40°C'den sıcak su kullanma, güneşte ya da ateşte kurutma; toz filtresi dışındaki filtreleri yıkama ve klimayı filtresiz çalıştırma. Vestel toz filtrelerinin yaklaşık haftada bir temizlenmesini istiyor ve bu temizliği yetkili servis çağırmadan kendin yapabileceğini yazıyor.

**8. Sürerse servis.** Sorun sürerse ya da ekranda Er ile başlayan kod varsa Vestel İletişim Merkezi'ne veya yetkili servise başvur. Kılavuz Er mesajlarında klimaya bir şey yapmamanı istiyor; kodların ayrıntısı [Vestel klima hata kodları](/blog/vestel-klima-hata-kodlari/) yazısında.

## Ne zaman servis?

Vestel'in sorun giderme bölümü sınırı girişte koyuyor: açıklamalara göre denedikten sonra klima hâlâ normal çalışmıyorsa İletişim Merkezi ya da en yakın yetkili servis.

| Durum | Kimin işi |
|---|---|
| Mod, sıcaklık, bekleme, DF, EKO, kapı-pencere, hava yolu, toz filtresi | Senin, bu rehberdeki adımlar |
| Bu adımlardan sonra klima hâlâ ısıtmıyor | Vestel İletişim Merkezi ya da yetkili servis |
| Ekranda Er ile başlayan hata mesajı | Klimaya bir şey yapma, yetkili servis |
| Toz filtresi dışındaki filtrelerin yenilenmesi | Yetkili servis |

⛔ Dış ünitedeki buzu kırmaya, dış üniteye çıkmaya ya da klimanın içine müdahale etmeye çalışma. Vestel kılavuzu buz çözmeyi klimanın kendi yaptığı bir işlem olarak anlatıyor ve klimayı kendin tamir etmemeni, sökmemeni istiyor.

Klima hiç açılmıyorsa [Vestel klima çalışmıyor](/blog/vestel-klima-calismiyor/) yazısına bak. Yazın serinletmiyorsa [Vestel klima soğutmuyor](/blog/vestel-klima-sogutmuyor/), markadan bağımsız anlatım için [klima sıcak hava üflemiyor](/blog/klima-sicak-hava-uflemiyor/) yazısı var.

---

**Kaynak künyesi.** Sorun giderme tablosu, ısıtma ve buz çözme notları, DF ve Er mesajları, EKO ve uyku modu, çalışma sıcaklık aralıkları ve filtre temizliği Vestel'in vestel.com.tr'deki Türkçe kullanım kılavuzlarından (Nova Inverter 12 A++ GI WIFI ve Plazma Inverter 9/12/18/24 A++) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

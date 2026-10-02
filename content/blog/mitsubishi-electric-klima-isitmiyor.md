---
title: "Mitsubishi Electric klima ısıtmıyor: evde kontrol"
description: "Mitsubishi Electric klima ısıtmıyorsa kılavuzun sırası: ISITMA modu, hazırlanma ve buz çözme beklemesi, fan, kanat, gece modu, kapı-pencere, filtre."
slug: "mitsubishi-electric-klima-isitmiyor"
date: "2026-10-02"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, 2 Eki klima belirti partisi). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200; md5 1 Eki yerel kopyasıyla birebir. Mitsubishi Electric Türkiye'nin kendi alan adı (klima.mitsubishielectric.com.tr).
# Web araması KULLANILMADI: adres yayındaki mitsubishi-electric-klima-sogutmuyor provenansından. Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-klima-2eki/me-msz-ap.pdf · pdftotext -layout -f N -l N; sayfa = PDF sayfası (basılı TR-numarası iki eksik: s.16 = TR-14).
#  M) Mitsubishi Electric "Duvar tipi split klimalar iç ünite MSZ-AP25VG/35VG/42VG/50VG · Çalıştırma talimatları" (English/Türkçe)
#     https://klima.mitsubishielectric.com.tr/Guide/20220324182219_msz-ap_25-50vg_kullanma_k_lavuzu.pdf  28 s.  md5 43435dae68b08714f849fb3768360849
# M s.16 "BİR ARIZA OLDUĞUNU DÜŞÜNDÜĞÜNÜZDE": "Bu öğeler kontrol edilse bile, ünitedeki sorun giderilmezse, klimayı kullanmayı bırakın ve satıcınıza danışın."
#   "Oda etkin bir şekilde soğutulup ısıtılamıyor. • Sıcaklık ayarı doğru mu? • Fan ayarı uygun mu? Fan hızını Yüksek ya da Süper Yüksek olarak değiştirin. • Filtreler temiz mi? • Fan ya da iç ünitenin ısı değiştiricisi temiz mi? • İç ya da dış ünitenin hava giriş ya da çıkışını tıkayan herhangi bir engel var mı? • Açık bir pencere ya da kapı var mı? • Ayar sıcaklığına erişim biraz zaman alabilir ya da oda boyutu, ortam sıcaklığı, vb. nedenlerle buna hiç erişilemeyebilir. • NIGHT MODE (GECE MODU) çalıştırma etkin mi?"
#   "Oda yeterince ısıtılamıyor. • Dışarıdaki sıcaklığın düşük olması durumunda, ısıtma işlemi yeterli olmayabilir."
#   "Isıtma uygulamasında dışarıya hemen hava üflenmiyor. • Ünite sıcak hava üflemek için hazırlanırken lütfen bekleyin."
#   "Isıtma uygulamasında çalışma yaklaşık 10 dakika boyunca durur. • Dış ünite buz çözme işlemi gerçekleştirmektedir. Bu uygulama maks. 10 dakikada gerçekleştirilir, lütfen bekleyin. (Dış sıcaklık çok düşük ve nem çok yüksekken, buz oluşur.)"
#   "Isıtma çalıştırması seçildiğinde, çalıştırma hemen başlamıyor. • Dış ünitenin buzunun çalışması esnasında çalıştırma başlatıldığında, sıcak havayı üflemesi birkaç dakika alır (maks. 10 dakika)."
#   "Isıtma çalışmasında, hava akım sıcaklığının çok düşükken ya da buz çözme sırasında yatay kanatçık pozisyonu otomatik olarak yatay konuma ayarlanır."
#   Dış ünite: "Dış üniteden su sızıyor. ... • Isıtma çalışmasında, ısı değiştirici üzerinde yoğunlaşan su aşağıya damlar. • Isıtma çalışmasında, buz çözme uygulaması dış ünitedeki donmuş suyun erimesine ve aşağıya damlamasına neden olur." / "Dış üniteden beyaz duman çıkıyor. • Isıtma çalışmasında, buz çözme uygulaması ile ortaya çıkan buhar beyaz dumana benzer."
# M s.17: "Aşağıdaki durumlarda, klimayı kullanmayı bırakın ve bayiinize başvurun. • İç üniteden su sızıntısı veya damlaması olduğunda. • Çalışma gösterge lambası yanıp söndüğünde. • Devre kesici sık sık kapandığında. ... • Anormal bir ses duyulduğunda. • Soğutucu akışkan kaçağı olduğunda."
# M s.8 (TR-6): mod sırası "(AUTO) (SOĞUTMA) (KURUTMA) (ISITMA) (FAN)" · "ISITMA modu İstediğin sıcaklıkta sıcak havanın keyfini çıkarın." · "Her bir basış sıcaklığı 1°C arttırır ya da azaltır." · Çoklu sistem: "Bir ünitede SOĞUTMA/KURUTMA/FAN ve bir diğer ünitede ISITMA seçildiğinde ya da tam tersi durumlarda, son seçilen ünite bekleme moduna geçer."
# M s.9 (TR-7): kanat "(AUTO) ... ISITMA: konum (4)." / "(Manuel) ... ISITMA için aşağı konumunu seçin." / "Hava akışının yönünü değiştirirken her zaman uzaktan kumandayı kullanın. Yatay kanatları elinizle oynatmak arızalanmalarına yol açar." · Fan: "Odayı daha hızlı şekilde soğutmak/ısıtmak için yüksek fan hızını kullanın. Oda soğuduktan/ısındıktan sonra fan hızının düşürülmesi önerilir." · "Çoklu sistem çalıştırması Isıtma işlemi için bir dış ünite tarafından birkaç iç ünite eş zamanlı olarak çalıştırılırsa, hava akışı sıcaklığı düşük olabilir. Bu durumda, fan hızını AUTO (Otm.) olarak ayarlamanız önerilir."
# M s.11 (TR-9) GECE MODU: "Not: • Soğutma/ısıtma kapasitesi düşebilir." · "NIGHT MODE (GECE MODU) çalıştırmayı iptal etmek için düğmesine tekrar basın."
# M s.14 (TR-12) TEMİZLEME: "Temizlemeden önce güç kaynağını kapatın veya şalteri indirin." / "Metal parçalara ellerinizle dokunmamaya dikkat edin." / "Ovma fırçası, sert sünger veya benzer bir alet kullanmayın." / "50°C'den daha sıcak su kullanmayın." / "Parçaları kuruması için doğrudan güneş ışığına, sıcağa veya ateşe maruz bırakmayın." / "Hava filtresi ... 2 haftada bir temizleyin • Tozu elektrikli süpürgeyle temizleyin veya suyla yıkayın. • Suyla yıkadıktan sonra gölgede iyice kurutun." / "1. Bir "tık" sesi duyulana kadar ön paneli kaldırın."
# M s.20 (TR-18): "İç ve dış ortam sıcaklıklarının standartlarda esas alınan değerlerin dışına çıkması durumunda klimanızın ısıtma ve soğutma kapasitelerinin etkilenmesi doğaldır."
# M s.5: "Anormal koşulda Klimanın çalışmasını hemen durdurun ve satıcınıza danışın."
# M s.4: "Üreticinin tavsiye ettikleri haricinde buz çözme işlemini veya cihazın temizleme sürecini hızlandıracak yöntemler kullanmayın." / "Klima soğutmadığı ya da ısıtmadığı zaman, soğutucu madde sızıntısı olasılığı vardır." / "Kullanıcı iç ünitenin iç kısmını yıkamaya hiçbir zaman çalışmamalıdır." / "Dış ünitenin üstüne basmayın veya herhangi bir nesne yerleştirmeyin."
# YAKIN KOPYA: yayındaki mitsubishi-electric-klima-sogutmuyor aynı s.16 "soğutulup ısıtılamıyor" satırını kullanıyor. Bu taslak ısıtmaya özgü satırları (hazırlanma, buz çözme, dış ünite buharı/suyu, kanat konumu, çoklu sistem bekleme ve fan AUTO, düşük dış sıcaklık) öne çıkarıyor; ortak maddeler kısa tutuldu, SSS tamamen ısıtma satırlarından.
# BİLEREK YAZILMAYANLAR: fan ya da ısı değiştiricisi temizliği (s.4 iç kısım kullanıcıya yasak; servis tablosunda anıldı) · acil ısıtma düğmesi (iç ünitedeki E.O. SW; kumanda arızası konusu, bu yazının değil) · i-save ön ayarı (belge örnek veriyor, ısıtmama nedeni olarak saymıyor) · V Blocking filtre yıllık değişimi (parça, #31) · dış ünite temizliği/dış üniteye çıkma · fiyat.
# Alıntı denetim tablosu: mitsubishi-electric-klima-isitmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~25 dakika (filtre kuruma hariç)"
  totalTime: "PT25M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Elektrikli süpürge"]
steps:
  - "Kumandada modu ISITMA'ya al ve sıcaklık ayarının doğru olduğunu kontrol et."
  - "Isıtmayı seçtikten sonra sıcak hava gelmezse birkaç dakika bekle; kılavuza göre bu en çok 10 dakika sürebilir."
  - "Isıtma sırasında çalışma yaklaşık 10 dakika durduysa dış ünitenin buz çözmesinin bitmesini bekle."
  - "Fan hızını Yüksek ya da Süper Yüksek'e getir, gece modu açıksa kapat; aynı dış üniteye bağlı birden fazla iç ünite birlikte ısıtıyorsa fanı AUTO'ya al."
  - "Hava yönünü kumandadan AUTO'ya ya da aşağı konuma al; kanatları elle oynatma."
  - "Odanın pencere ve kapılarını kapat, iç ünitenin önündeki engeli kaldır."
  - "Gücü kes, ön paneli kaldır, hava filtresini süpürgeyle ya da suyla temizle, gölgede kurutup tak."
  - "Sorun sürerse ya da çalışma gösterge lambası yanıp sönüyorsa klimayı kullanmayı bırak ve Mitsubishi Electric yetkili satıcısına başvur."
faq:
  - q: "Kışın dış üniteden beyaz duman çıkıyor. Yangın mı?"
    a: "Mitsubishi Electric kılavuzuna göre ısıtma çalışmasında buz çözme uygulamasıyla ortaya çıkan buhar beyaz dumana benzer. Bu, buz çözmenin olağan bir sonucu. Bunun dışında anormal bir durum görürsen kılavuz klimanın çalışmasını hemen durdurup satıcına danışmanı istiyor."
  - q: "Isıtmada dış üniteden su damlıyor. Normal mi?"
    a: "Kılavuz iki nedeni normal sayıyor: ısıtma çalışmasında ısı değiştirici üzerinde yoğunlaşan su aşağı damlar; buz çözme de dış ünitedeki donmuş suyun eriyip damlamasına neden olur. İç üniteden su damlıyorsa durum farklıdır; kılavuz o durumda klimayı kullanmayı bırakıp bayiye başvurmanı istiyor."
  - q: "Dışarısı çok soğukken klima odayı yeterince ısıtmıyor. Neden?"
    a: "Mitsubishi Electric'in tablosuna göre dışarıdaki sıcaklık düşükse ısıtma işlemi yeterli olmayabilir. Kılavuzun Türkiye notu da iç ve dış sıcaklıklar standartlarda esas alınan değerlerin dışına çıktığında ısıtma kapasitesinin etkilenmesinin doğal olduğunu yazıyor."
  - q: "Evde aynı dış üniteye bağlı iki klima var; biri ısıtmıyor, bekliyor. Neden?"
    a: "Kılavuza göre çoklu sistemde ısıtma ile soğutma, kurutma ya da fan aynı anda yapılamaz. Bir ünitede ISITMA, diğerinde SOĞUTMA, KURUTMA ya da FAN seçilirse son seçilen ünite bekleme moduna geçer. İki ünitede de aynı modu seç."
images:
  coverAlt: "Kış sabahı oturma odasında duvardaki beyaz split klimaya yöneltilmiş uzaktan kumanda, pencerenin dışında buğulu soğuk bir hava"
---

Kış geldi, klimayı ısıtmaya aldın ama odaya sıcak hava gelmiyor. Mitsubishi Electric'in Türkçe çalıştırma talimatları bu belirtiyi tek bir satırda değil, birkaç ayrı satırda ele alıyor; bunların bir kısmı arıza değil, ısıtmanın kendi işleyişi. Örneğin kılavuz, ısıtmada hava hemen gelmiyorsa **"Ünite sıcak hava üflemek için hazırlanırken lütfen bekleyin."** diyor; çalışma 10 dakika kadar durduysa bunun dış ünitenin buz çözmesi olduğunu yazıyor. Bu yazıda önce bekleme gerektiren durumları, sonra kumandadan ve odadan düzeltilebilecek maddeleri sırayla anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Mod ISITMA mı, sıcaklık doğru mu? Açılışta ve buz çözme sırasında sıcak hava gelmesi en çok 10 dakika sürebilir; dış üniteden beyaz buhar ve su gelmesi bu sırada normal. Sonra fan hızı, gece modu, kanat yönü, kapı-pencere ve filtre. Hâlâ ısıtmıyorsa ya da gösterge lambası yanıp sönüyorsa → klimayı kullanmayı bırak, Mitsubishi Electric yetkili satıcısı.

## Kışın normal sayılan durumlar

Kılavuzun "Bir arıza olduğunu düşündüğünüzde" tablosunda ısıtmaya özgü şu satırlar arıza değil, beklenen davranış olarak açıklanıyor:

| Gördüğün | Kılavuzun açıklaması | Yapılacak |
|---|---|---|
| Isıtmayı açınca hava hemen gelmiyor | Ünite sıcak hava üflemek için hazırlanıyor | Bekle |
| Isıtma seçildi, çalışma hemen başlamıyor | Dış ünitenin buzu çözülürken başlatılırsa sıcak hava birkaç dakika sonra gelir (en çok 10 dakika) | Bekle |
| Isıtma yaklaşık 10 dakika duruyor | Dış ünite buz çözüyor; dış sıcaklık çok düşük, nem çok yüksekken buz oluşur | Bekle |
| Kanat kendiliğinden yatay konuma geliyor | Hava akım sıcaklığı çok düşükken ya da buz çözme sırasında otomatik ayar | Bekle |
| Dış üniteden beyaz duman | Buz çözmede çıkan buhar | Normal |
| Dış üniteden su damlıyor | Isı değiştiricide yoğunlaşan su ya da eriyen buz | Normal |
| Çoklu sistemde bir iç ünite bekliyor | Bir ünitede ISITMA, diğerinde başka mod seçilmiş; son seçilen bekler | Modları eşitle |

## Adım adım: evde denenecekler

**1. Mod ve sıcaklık.** Kumandada modu ISITMA'ya al ve sıcaklık ayarının doğru olduğunu kontrol et. Mod düğmesine her basışta sıra AUTO, SOĞUTMA, KURUTMA, ISITMA, FAN diye ilerler; sıcaklık her basışta 1°C değişir. Kılavuzun ilk kontrol sorusu **"Sıcaklık ayarı doğru mu?"**

**2. Hazırlanma süresi.** Isıtmayı seçtikten sonra sıcak hava gelmezse birkaç dakika bekle. Kılavuza göre ünite sıcak hava üflemeye hazırlanırken hava hemen gelmez; dış ünitede buz çözme sürerken başlatıldıysa bu en çok 10 dakika sürer.

**3. Buz çözme.** Isıtma sırasında çalışma yaklaşık 10 dakika durduysa dış ünitenin buz çözmesinin bitmesini bekle. Mitsubishi Electric bu işlemin en çok 10 dakika sürdüğünü ve dış sıcaklık çok düşük, nem çok yüksekken buz oluştuğunu yazıyor. Bu sırada klimayı kapatıp açmana gerek yok.

**4. Fan ve gece modu.** Fan hızını Yüksek ya da Süper Yüksek'e getir, gece modu açıksa kapat. Kılavuza göre odayı daha hızlı ısıtmak için yüksek fan hızı kullanılır, oda ısınınca düşürülmesi önerilir; NIGHT MODE'da ısıtma kapasitesi düşebilir, aynı düğmeye tekrar basınca kapanır. Evinde aynı dış üniteye bağlı birden fazla iç ünite birlikte ısıtıyorsa durum farklı: kılavuz bu durumda hava akışı sıcaklığının düşük olabileceğini yazıyor ve fanı AUTO'ya almanı öneriyor.

**5. Hava yönü.** Hava yönünü kumandadan AUTO'ya ya da aşağı konuma al. Kılavuza göre AUTO'da kanat ısıtmada 4. konuma gelir; elle seçimde ısıtma için aşağı konum öneriliyor. Kanatları elinle oynatma; Mitsubishi Electric bunun kanatların arızalanmasına yol açtığını yazıyor.

**6. Pencere, kapı ve hava yolu.** Odanın pencere ve kapılarını kapat, iç ünitenin önündeki engeli kaldır. Kılavuz iç ya da dış ünitenin hava giriş-çıkışını tıkayan engeli ayrı bir soru olarak soruyor. Dış üniteye yalnız bulunduğun yerden bak; kılavuz dış ünitenin üstüne basılmamasını istiyor.

**7. Filtre.** Gücü kes, ön paneli kaldır, hava filtresini süpürgeyle ya da suyla temizle, gölgede kurutup tak. Ön paneli "tık" sesi gelene kadar kaldır; 50°C'nin üzerinde su, ovma fırçası ya da sert sünger kullanma, parçaları güneşte ya da ısıtıcı yanında kurutma, metal parçalara elinle dokunma. Kılavuz hava filtresinin 2 haftada bir temizlenmesini istiyor. Genel anlatım [klima filtresi temizleme](/blog/klima-filtresi-temizleme/) yazısında.

**8. Sürerse satıcı.** Sorun sürerse ya da çalışma gösterge lambası yanıp sönüyorsa klimayı kullanmayı bırak ve Mitsubishi Electric yetkili satıcısına başvur.

## Ne zaman servis?

Kılavuzun kuralı açık: kontrol maddelerine rağmen sorun giderilmezse **klimayı kullanmayı bırak ve satıcına danış.** Güvenlik bölümü ayrıca klima soğutmadığı ya da ısıtmadığı zaman soğutucu madde sızıntısı olasılığı bulunduğunu hatırlatıyor.

| Durum | Kimin işi |
|---|---|
| Mod, sıcaklık, bekleme, fan, gece modu, kanat, kapı-pencere, filtre | Senin, bu rehberdeki adımlar |
| Fan ya da iç ünitenin ısı değiştiricisinin temizliği | Mitsubishi Electric yetkili satıcısı ya da servisi |
| Çalışma gösterge lambası yanıp sönüyor, devre kesici sık sık kapanıyor | Klimayı kullanmayı bırak, yetkili satıcı |
| İç üniteden su sızıyor ya da anormal ses var | Klimayı kullanmayı bırak, yetkili satıcı |
| Soğutucu akışkan kaçağından şüpheleniyorsun | Çalıştırmayı durdur, odayı havalandır, derhal yetkili satıcı |

⛔ Buz çözmeyi hızlandırmaya, iç ünitenin içini yıkamaya ya da dış ünitenin üstüne çıkmaya çalışma. Kılavuz üreticinin tavsiye ettikleri dışında buz çözmeyi hızlandıracak yöntem kullanılmamasını ve kullanıcının iç ünitenin iç kısmını hiçbir zaman yıkamaya çalışmamasını istiyor.

Klima hiç açılmıyorsa [Mitsubishi Electric klima çalışmıyor](/blog/mitsubishi-electric-klima-calismiyor/) yazısına bak. Yazın serinletmeme sorunu için [Mitsubishi Electric klima soğutmuyor](/blog/mitsubishi-electric-klima-sogutmuyor/), markadan bağımsız anlatım için [klima sıcak hava üflemiyor](/blog/klima-sicak-hava-uflemiyor/) yazısı var.

---

**Kaynak künyesi.** Arıza tablosundaki ısıtma satırları, mod ve fan ayarları, kanat konumu, gece modu, çoklu sistem notları, filtre temizliği ve güvenlik uyarıları Mitsubishi Electric'in MSZ-AP25VG/35VG/42VG/50VG duvar tipi split klima Türkçe çalıştırma talimatlarından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

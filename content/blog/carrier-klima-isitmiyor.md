---
title: "Carrier klima ısıtmıyor: kış ayarları"
description: "Carrier klima kışın ısıtmıyorsa kılavuzun notları: 8°C F.P işlevi, kumandanın soğutma-ısıtma ayarı, sessiz mod, defrost, kapı-pencere ve yardımcı ısıtıcı."
slug: "carrier-klima-isitmiyor"
date: "2026-10-03"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki, klima). Belgeler bu koşuda (07:51) curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200, application/pdf. Alan adı alarko-carrier.com.tr.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-klima-3eki/ · sayfa = PDF sayfası.
#  CK) "CARRIER SPLIT KLİMA KULLANIM KILAVUZU QHA009DS, QHA012DS, QHA018DS, QHA024DS", 17 s., md5 4972ac8cac45c5428a453789de2a5a51
#      https://www.alarko-carrier.com.tr/Data/Files/Dokumanlar/kullanim-kilavuzu/klima-carrier-xpowerfresh-kk.pdf
#      s.15 "Zayıf Isıtma Performansı" → "Dış mekan ısısı fazla düşüktür. | Yardımcı ısıtma cihazı kullanın." / "Soğuk hava kapılardan ve pencerelerden girmektedir. | Kullanım sırasında tüm kapıların ve pencerelerin kapalı olduklarından emin olun." / "Sızıntı veya uzun süre kullanım nedeniyle düşük soğutucu akışkan etkisi | Sızıntıları kontrol edin. Gerekirse yeniden bağlantı yapın ve soğutucu akışkanı tam doldurun."
#      s.12 Ortak Hususlar ("Aşağıdaki problemler bir işlev bozukluğu değildir ve çoğu durumda tamir gerektirmezler.") → "Cihaz üzerinde donma olmaması için ayarını değiştirebilir. Sıcaklık yükseldiğinde cihaz önceki seçilen modda yeniden çalışmaya başlayacaktır." / "Cihaz Soğutma/Isıtma modundan Fan moduna geçiyorsa | Ayar ısısına erişildiğinde cihaz kompresörü kapatır. Sıcaklık değişiklik gösterdiğinde cihaz tekrar çalışmaya devam edecektir." / "Hem iç hem dış üniteler beyaz sis çıkartıyorsa | Defrost sonrasında cihaz yeniden ısıtma modunda çalışmaya başlayınca, defrost sürecinden dolayı oluşan nem nedeniyle beyaz sis meydana gelebilir."
#      s.13 "Alçak tıslama sesi sistem çalışmaya başlayınca durur veya defrost oluşuyorsa; Bu ses normaldir ve soğutucu gazın durmasından veya yön değiştirmesinden meydana gelir." / "Cihazın plastik parçalarının genişleyip daralmasından dolayı ünitenin ısıtma modunda çalıştırılmasından sonra cızırtılı bir ses oluşabilir."
#      s.5 gösterge penceresi: "“Defrost” defrost özelliği aktifken" / "soğuk hava üfleme önleme özelliği başlatılmışsa" / "defrost olurken" / "8 C ısıtma özelliği başlatılmışsa (bazı cihazlarda)"
#      s.8 Normal Çalışma Sıcaklığı, Isıtma Modu: iç ortam "0°C - 30°C", dış ortam "-15°C - 30°C" · "Klima aşağıda belirtilen ısı aralıkları dışında kullanılırsa, belli güvenlik koruma özellikleri aktifleşecektir ve cihazı etkisiz hale getirecektir." · "Kapıları ve pencereleri kapalı tutun." / "Düzenli olarak hava filtrelerini kontrol edip temizleyin."
#      s.9 "Soğutma veya ısıtma modunu kullanırken panjuru çok dik açıda ayarlamak sınırlanan hava akışı nedeniyle ünitenin performansını azaltabilir."
#      s.7 Uyku: "Isıtma modunda ise cihaz 1 saat sonra ısıyı 1°C (2°F) azaltacaktır ve sonraki saatte ilave olarak 1°C (2°F) daha düşürecektir."
#      s.10 filtre temizliği (bkz. carrier-klima-sogutmuyor provenansı)
#  CR) "UZAKTAN KUMANDA KULLANIM KILAVUZU", 12 s., md5 b9bd8c2723f9e92eb0f12719248e0a83
#      https://www.alarko-carrier.com.tr/Data/Files/Dokumanlar/kullanim-kilavuzu/klima-carrier-xpowerfresh-kumanda-kk.pdf
#      s.10 F.P.: "ISITMA Modunda ve 17°C ayar sıcaklığında bir saniye içinde bu tuşa iki kez basın. Cihaz yüksek fan devrinde çalışacak (kompresör devrede olacak) ve sıcaklık ayarı otomatik olarak 8°C değerine ayarlanacaktır." / "Not: Bu fonksiyon sadece ısı pompalı klima içindir." / "Buzlanmaya karşı koruma fonksiyonunu aktif etmek için ... Soğuk kış günlerinde oda sıcaklığının 0°C (donma noktası) üzerinde kalmasına yardımcı olacaktır. Bu fonksiyon çalışıyorken Açma/Kapatma, Mod, Fan ve Sıcaklık tuşlarına basıldığında fonksiyon iptal edilecektir."
#      s.10 Sessiz: "Kompresörün düşük devirde çalışması nedeniyle, soğutma veya ısıtma kapasitesi yeterli gelmeyebilir." / "Sessiz fonksiyonunu aktif etmek/devre dışı bırakmak için Fan tuşuna 2 saniyeden uzun süreyle basılı tutun."
#      s.11 "Uzaktan kumanda modunu aşağıdaki sıralama ile değiştirmek için, piller takıldıktan sonraki 3 dakika içinde, Mod ve Fan tuşlarına 3 saniyeden uzun süreyle basılı tutun." (Soğutma ve Isıtma → Sadece Soğutma → Sadece Isıtma → Soğutma ve Isıtma) / "Soğutma ve Isıtmalı model uzaktan kumandasında: Otomatik, Soğutma, Nem Alma, Isıtma ve Fan modu seçilebilir. Sadece Soğutmalı model uzaktan kumandasında: Sadece Soğutma, Nem Alma ve Fan modu seçilebilir."
#      s.5 "Sıcaklık Yükseltme Sıcaklık değerini 1°C aralıklarla artırır. En yüksek sıcaklık 30°C'dir" / "Sıcaklık Düşürme Sıcaklık değerini 1°C aralıklarla düşürür. En düşük sıcaklık 17°C'dir" · s.6 "SOĞUTMA/ISITMA modunu seçin · Sıcaklığı ayarlayın · Fan devrini ayarlayın · Klimayı çalıştırın" · s.8 EKO Uyku "İlk 2 saatte, ayar sıcaklığı saat başına 1°C ... düşecektir (ısıtma)."
# YAKIN KOPYA: Carrier'ın yayında klima sayfası yok. CK'nin "Zayıf Isıtma" ve "Ortak Hususlar" satırları yayındaki airfel-klima-isitmiyor'un kaynağıyla aynı OEM metnine yakın → bu sayfa F.P (8°C), kumanda modu ve sessiz fonksiyonunu öne alıyor, sıra ve SSS farklı; ölçüm .KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: soğutucu akışkan (servis) · dış ünitedeki buz (kılavuzda kullanıcıya yönelik adım yok) · ısıtma modunun bulunmadığı "sadece soğutmalı" modellerde ısıtma (model özelliği) · fiyat.
# Alıntı denetim tablosu: carrier-klima-isitmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (filtre kuruma hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda"]
steps:
  - "Kumandada ısıtma modunu seç ve ayar sıcaklığını oda sıcaklığının üstüne, en fazla 30°C'ye kadar yükselt."
  - "Ayar kendiliğinden 8°C'ye inmişse F.P işlevi açıktır; Açma/Kapatma, Mod, Fan ya da sıcaklık tuşlarından birine basarak kapat."
  - "Kliman ısı pompalıysa ama kumandada ısıtma modu çıkmıyorsa pilleri yeniden tak ve 3 dakika içinde Mod ile Fan tuşlarını 3 saniyeden uzun basılı tutarak kumandayı 'Soğutma ve Isıtma' ayarına getir."
  - "Sessiz fonksiyonu açıksa Fan tuşunu 2 saniyeden uzun basılı tutarak kapat."
  - "İç ünite ekranında Defrost ya da soğuk hava üfleme önleme göstergesi yanıyorsa bitmesini bekle."
  - "Klima çalışırken odanın tüm kapı ve pencerelerini kapat."
  - "Dış hava çok soğuksa klimanın yanında yardımcı bir ısıtma cihazı kullan."
  - "Hava filtresini kontrol edip kirliyse temizle; sorun sürerse yetkili servise başvur."
faq:
  - q: "Carrier klima neden az ısıtır?"
    a: "Alarko Carrier kılavuzunun 'Zayıf Isıtma Performansı' satırı üç neden sayıyor: dış hava sıcaklığının çok düşük olması, kapı ve pencerelerden soğuk hava girmesi ve sızıntı ya da uzun kullanım nedeniyle azalmış soğutucu akışkan. İlk ikisi için çözüm yardımcı bir ısıtıcı ve kapalı kapı-pencere; soğutucu akışkan yetkili servisin işi."
  - q: "Klimanın ayarı kendiliğinden 8°C oldu. Neden?"
    a: "Kumandada ayar normalde 17°C'nin altına inmez; 8°C ayarı F.P işlevine ait. Carrier kumanda kılavuzuna göre ısıtma modunda ve 17°C ayarındayken F.P tuşuna bir saniye içinde iki kez basılırsa cihaz yüksek fan devrinde çalışır ve ayar 8°C'ye iner. Bu işlev, soğuk kış günlerinde odanın donma noktasının üzerinde kalmasına yardım etmek için. Açma/Kapatma, Mod, Fan ya da sıcaklık tuşuna basınca kapanır."
  - q: "Isıtırken klima fana geçti ve sıcak hava kesildi. Arıza mı?"
    a: "Kılavuz bunu işlev bozukluğu saymıyor. Cihaz donmayı önlemek için ayarını değiştirebilir ve sıcaklık yükselince önceki modda yeniden çalışır; ayar sıcaklığına ulaşıldığında da kompresörü kapatır. Defrost sonrasında ısıtmaya dönerken iç ve dış üniteden beyaz sis çıkabilir, alçak bir tıslama sesi duyulabilir."
  - q: "Dışarısı çok soğukken Carrier klima ısıtır mı?"
    a: "Kılavuz ısıtma için dış ortam sıcaklığı aralığını -15 ile 30°C, iç ortam aralığını 0 ile 30°C olarak veriyor. Bu aralıkların dışında güvenlik koruma özellikleri devreye girip cihazı etkisiz hale getirir. Dış hava çok soğukken kılavuzun önerisi yardımcı bir ısıtma cihazı kullanmak."
  - q: "Gece uyku modunda oda serinliyor. Normal mi?"
    a: "Evet. Carrier'ın uyku modunda ısıtma ayarı 1 saat sonra 1°C, sonraki saatte 1°C daha düşer. Kumandadaki EKO Uyku da ısıtmada ilk 2 saat ayarı saat başı 1°C düşürür."
images:
  coverAlt: "Kış akşamı lamba ışığında bir oturma odası, kapalı pencerenin önünde kalın perde, duvarda çalışan beyaz split klima ve koltukta katlanmış bir battaniye"
---

Kış geldi, klimayı ısıtmaya aldın ama oda bir türlü ısınmıyor; ya da klimanın ekranında beklemediğin bir sıcaklık görüyorsun. Alarko Carrier'ın Carrier split klima kılavuzu zayıf ısıtmayı **"Zayıf Isıtma Performansı"** satırında üç nedenle açıklıyor ve çözüm sütununda iki ev işi veriyor: **"Yardımcı ısıtma cihazı kullanın."** ve **"Kullanım sırasında tüm kapıların ve pencerelerin kapalı olduklarından emin olun."** Carrier kumandasının ayrı kılavuzu ise bu listeye kolay gözden kaçan iki ayar ekliyor: ayarı kendiliğinden 8°C'ye indiren F.P işlevi ve kompresörü düşük devirde çalıştıran sessiz fonksiyon. Önce bu ayarları, sonra odayı kontrol ediyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Isıtma modu ve odadan yüksek ayar. Ayar 8°C ise F.P açık; bir tuşa basıp kapat. Isıtma modu hiç çıkmıyorsa kumandanın model ayarına bak. Sessizi kapat. Defrost göstergesi yanıyorsa bekle. Kapı-pencereyi kapat; dışarısı çok soğuksa yardımcı ısıtıcı. Filtreyi temizle. Sürerse → yetkili servis.

## Carrier ısıtma hakkında ne diyor?

| Ne görüyorsun | Kılavuzun açıklaması | Ne yapmalı |
|---|---|---|
| Ayar kendiliğinden 8°C | F.P işlevi açık | Açma/Kapatma, Mod, Fan ya da sıcaklık tuşuna bas |
| Kumandada ısıtma modu seçilemiyor | Kumanda "Sadece Soğutma" ayarında | Isı pompalı modelse kumandayı "Soğutma ve Isıtma"ya al |
| Kumandada sessiz göstergesi açık | Sessizde ısıtma kapasitesi yetmeyebilir | Sessizi kapat |
| Ekranda Defrost göstergesi, ısıtma kesildi | Buz çözme sürüyor | Bekle |
| İç ve dış üniteden beyaz sis | Defrost sonrası nem | Arıza değil |
| Oda ısınmıyor | Dış hava çok soğuk ya da kapı-pencereden soğuk hava | Yardımcı ısıtıcı, kapı-pencereyi kapat |
| Bu kontrollerden sonra da zayıf | Soğutucu akışkan azalmış olabilir | Yetkili servis |

## Adım adım: evde denenecekler

**1. Isıtma modu ve ayar.** Kumandada ısıtma modunu seç ve ayar sıcaklığını oda sıcaklığının üstüne, en fazla 30°C'ye kadar yükselt. Sıcaklık yükseltme tuşu her basışta 1°C artırır.

**2. F.P (8°C) işlevi.** Ayar kendiliğinden 8°C'ye inmişse F.P işlevi açıktır; Açma/Kapatma, Mod, Fan ya da sıcaklık tuşlarından birine basarak kapat. Bu işlev ısıtmada 17°C ayardayken F.P tuşuna hızlıca iki kez basınca devreye girer ve odayı donma noktasının üzerinde tutmak için tasarlanmıştır. Bazı iç ünitelerin ekranında da 8°C ısıtma göstergesi yanar.

**3. Kumandanın model ayarı.** Kliman ısı pompalıysa ama kumandada ısıtma modu çıkmıyorsa pilleri yeniden tak ve 3 dakika içinde Mod ile Fan tuşlarını 3 saniyeden uzun basılı tutarak kumandayı "Soğutma ve Isıtma" ayarına getir. Her basılı tutuşta kumanda sırayla "Sadece Soğutma", "Sadece Isıtma" ve "Soğutma ve Isıtma" arasında geçer. Kılavuza göre "Sadece Soğutma" ayarındaki kumandada ısıtma modu seçilemez.

**4. Sessiz fonksiyonu.** Sessiz fonksiyonu açıksa Fan tuşunu 2 saniyeden uzun basılı tutarak kapat. Kumanda kılavuzu sessizde kompresörün düşük devirde çalıştığını ve ısıtma kapasitesinin yeterli gelmeyebileceğini yazıyor.

**5. Defrost ve soğuk hava önleme.** İç ünite ekranında Defrost ya da soğuk hava üfleme önleme göstergesi yanıyorsa bitmesini bekle. Kılavuz, cihazın donmayı önlemek için ayarını değiştirebildiğini ve sıcaklık yükselince önceki modda yeniden çalıştığını yazıyor. Bu sırada alçak bir tıslama sesi, ısıtma başladıktan sonra plastik parçalardan gelen cızırtı ve defrost sonrası beyaz sis normal.

**6. Kapı ve pencere.** Klima çalışırken odanın tüm kapı ve pencerelerini kapat. Carrier soğuk havanın kapı ve pencerelerden girmesini zayıf ısıtmanın ayrı bir nedeni olarak sayıyor.

**7. Çok soğuk dış hava.** Dış hava çok soğuksa klimanın yanında yardımcı bir ısıtma cihazı kullan. Kılavuzun bu satır için tek önerisi bu; ısıtma için dış ortam aralığı -15 ile 30°C.

**8. Filtre ve servis.** Hava filtresini kontrol edip kirliyse temizle; sorun sürerse yetkili servise başvur. Kılavuz performans için filtrelerin düzenli kontrol edilip temizlenmesini istiyor; filtrenin nasıl çıkarılıp yıkandığı [Carrier klima soğutmuyor](/blog/carrier-klima-sogutmuyor/) yazısında sırasıyla anlatılıyor. Panjuru da çok dik açıda bırakma, hava akışı sınırlanır.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Mod ve ayar, F.P, kumanda ayarı, sessiz, bekleme, kapı-pencere, yardımcı ısıtıcı, filtre | Senin, bu rehberdeki adımlar |
| Soğutucu akışkan azalmış ya da sızıntı | Yetkili servis |
| Klima hiç açılmıyor ya da ekranda hata kodu | [Carrier klima çalışmıyor](/blog/carrier-klima-calismiyor/) yazısındaki sıra |
| Dış ünitenin bakımı ve temizliği | Yetkili bayi ya da servis |

⛔ Yanık kokusu, anormal yüksek ses ya da ısınan güç kablosunda Carrier kılavuzu cihazı hemen kapatmanı ve yetkili servise başvurmanı istiyor.

Markadan bağımsız anlatım [klima sıcak hava üflemiyor](/blog/klima-sicak-hava-uflemiyor/) yazısında; filtre için genel rehber [klima filtresi temizleme](/blog/klima-filtresi-temizleme/).

---

**Kaynak künyesi.** Zayıf ısıtma tablosu, "işlev bozukluğu değil" listesi, gösterge penceresi, çalışma sıcaklıkları ve uyku modu Alarko Carrier'ın alarko-carrier.com.tr'deki "Carrier Split Klima Kullanım Kılavuzu"ndan (QHA009DS-QHA024DS), F.P, sessiz ve kumanda modu ayarı aynı serinin "Uzaktan Kumanda Kullanım Kılavuzu"ndan alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

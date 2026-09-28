---
title: "Samsung klima soğutmuyor: evde kontrol"
description: "Samsung klima yeterince soğutmuyorsa Samsung'un sırası: mod ve sıcaklık ayarı, filtre, ünitelerin önündeki engeller, kapı-pencere ve servis sınırı."
slug: "samsung-klima-sogutmuyor"
date: "2026-09-28"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200; PDF'ler pdftotext (-layout ve sayfa sayfa) ile okundu.
# Web araması yalnız belgelerin YERİNİ bulmak için kullanıldı; hiçbir cümle arama sonucundan, forumdan ya da servis sitesinden alınmadı.
#  S2) Samsung TR destek, "Samsung Klimam yeterince soğutmuyorsa ne yapmalıyım?" (Son güncelleme 2026-08-21)
#      https://www.samsung.com/tr/support/home-appliances/how-to-solve-no-cooling-problem-of-samsung-ac/  md5 4fc82fc5c6ef2e17de5b76060163192e (HTML, dinamik)
#      Nedenler: "Soğut modunda ortam sıcaklığından daha düşük bir sıcaklığa ayarlanmamış olması." / "İç veya dış ünitelerin önünde hava akışını kısıtlayan engeller bulunması." / "Hava akışını azaltan kirli veya tıkalı bir hava filtresi." / "Klima kapasitesinin kullanılacak odanın boyutuna uygun olmaması." / "Ünitenin bir köşeye yerleştirilmesi gibi cihaz verimliliğini düşüren standart dışı konumlandırmalar."
#      Çözümler: filtre "akan suyun altında yıkayın ve yerine takmadan önce iyi havalandırılan bir ortamda tamamen kurumaya bırakın"; "Sıcaklığı 23°C veya daha düşük bir dereceye ayarlayın ve çalışma modunun "Soğut" olarak seçildiğinden emin olun."; "hem iç hem de dış ünitelerin önündeki tüm engelleri kaldırın"; "tüm kapı ve pencerelerin kapalı olduğundan emin olun"; ek: "Dış ünitenin üzerinin herhangi bir nesneyle örtülmediğinden veya hava çıkışının kapatılmadığından emin olun."; "Birden fazla dış ünitenin ... hava çıkışlarının birbirine doğru olmaması gerekmektedir."; "Tüm bu adımlara rağmen sorun devam ederse Samsung Müşteri Hizmetleri ile iletişime geçin."
#      Önemli!: "aşırı yüksek dış ortam sıcaklıkları, elektrik kaynağı sorunları veya soğutucu gaz sızıntıları gibi harici faktörlerden de olumsuz etkilenebilir. Ve bu durumlarda servis müdahalesi gerekmektedir."; Not: "Klima, sadece kuruldukları alan/oda özelinde soğutma işlevi sağlamak üzere tasarlanmıştır."
#  S1) Samsung TR "Samsung Klima hata kodları ve çözümleri nelerdir?"  https://www.samsung.com/tr/support/home-appliances/what-are-samsung-air-conditioner-error-codes-and-solutions/  md5 da8a426aab29d0b534308ccf3ee87a15
#      "Tıkalı hava filtreleri cihazın hatalı çalışmasına neden olabilir." / "Klima düzgün çalışmıyorsa, elektrik bağlantılarını ve sigortayı kontrol edin." / E554 "Gaz kaçak hatası"
#  M1) Samsung TR kılavuz AR9500T WindFree, 50 s., md5 5c6daf15aa6a54b37e7af4186f36708a
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=AR12TSFYCWK%2FSK&CttFileID=7963378&CDCttType=UM&VPath=UM%2F202102%2F20210203204244405%2FRAC029-02_IB_AR9500T_GEO_WIND_TR_TR-WEB_.pdf
#      s.34: "Soğut modunda, soğutma yalnızca ayarlanan sıcaklık geçerli sıcaklıktan düşük olduğunda gerçekleşir." / "Ünitenin Fan veya Hızlı modunda olup olmadığını kontrol edin. Bu modlardaysa ayarlanan sıcaklığı değiştiremezsiniz." / boru uzunluğu maddesi / "Zamanlamalı kapatma işlevi üniteyi kapatmış olabilir."
#      s.10: "Temizlik veya bakım yapmadan önce, güç kaynağını kesin ve fan durana kadar bekleyin."  s.33 filtre adımları (kaydırarak çıkar, yumuşak fırça/süpürge, 30 dk su+yumuşak deterjan, doğrudan güneş almayan yerde kurut, tak, hatırlatıcıyı sıfırla)
#      s.29 bakım tablosu: "İç ve dış ünitenin içini temizleyin — Yılda bir — Kalifiye teknisyen"; "Üniteleri, elektrik bağlantılarını, soğutucu akışkan borularını ve koruyucuları kontrol edin — Yılda bir — Kalifiye teknisyen"
#  M2) Samsung TR kılavuz AR09/12JSFSCWK, 47 s., md5 140a45cb498831b61bf9d6035592c6bd
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=AR12MSFSCWKXSK&CttFileID=7023832&CDCttType=UM&VPath=UM%2F201804%2F20180419115020221%2F180205_SK_GOOD_INV_A3050_IB_TR_DB68-06583A-02.pdf
#      s.27: "Soğutma veya ısıtma işlemi durduktan sonra klimanın hemen açılıp açılmadığını kontrol edin. Bu durumda, dış ünitenin kompresörünü korumak için yalnızca fan çalışır."
# BİLEREK YAZILMAYANLAR: gaz dolumu/kaçak arama (servis işi, #31); "kaç BTU gerekir" hesabı (Samsung'un hesap aracına atıf dışında rakam verilmedi); dış ünitenin su ile yıkanması (kılavuzda var ama güç kesme + dış ünite erişimi gerektirir, bu rehberin kapsamına alınmadı).
# Alıntı denetim tablosu: samsung-klima-sogutmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (filtre kuruma hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Yumuşak fırça ya da elektrikli süpürge", "Yumuşak deterjan"]
steps:
  - "Kumandada modun Soğut olduğunu ve ayarlı sıcaklığın oda sıcaklığından düşük olduğunu kontrol et; Samsung 23°C ya da altını öneriyor."
  - "Odanın bütün kapı ve pencerelerini kapat."
  - "İç ünitenin önündeki perde, mobilya gibi hava akışını kesen engelleri kaldır."
  - "Dış ünitenin üzerinin örtülmediğini ve hava çıkışının kapanmadığını kontrol et."
  - "Klimayı kapat, güç bağlantısını kes ve fan durana kadar bekle."
  - "Hava filtresini kaydırarak çıkar, tozunu yumuşak fırça ya da süpürgeyle al, su ve yumuşak deterjanla yıka."
  - "Filtreyi doğrudan güneş almayan, iyi havalanan bir yerde tamamen kurut ve yerine tak."
  - "Sorun sürerse ya da ekranda E ile başlayan bir kod varsa kodu ve model numarasını not edip Samsung yetkili servisine ilet."
faq:
  - q: "Samsung klima neden yeterince soğutmaz?"
    a: "Samsung Türkiye'nin destek sayfası en yaygın nedenleri şöyle sıralıyor: Soğut modunda ortam sıcaklığından düşük bir sıcaklığa ayarlanmamış olması, iç ya da dış ünitenin önünde hava akışını kısıtlayan engeller, kirli veya tıkalı hava filtresi, kapasitenin oda boyutuna uygun olmaması ve ünitenin köşe gibi verimliliği düşüren bir yere konumlandırılması."
  - q: "Sıcaklığı düşürmeye çalışıyorum ama değişmiyor, neden?"
    a: "Samsung kılavuzuna göre ünite Fan ya da Hızlı modundaysa ayarlanan sıcaklık değiştirilemez; ünite sıcaklığı bu modlarda kendisi kontrol eder. Modu Soğut'a al ve sıcaklığı kumandadaki Sıcaklık düğmesiyle ayarla."
  - q: "Klimayı kapatıp hemen açtım, yalnız fan çalışıyor. Arıza mı?"
    a: "Samsung kılavuzuna göre soğutma ya da ısıtma durduktan sonra klima hemen yeniden açılırsa dış ünitenin kompresörünü korumak için yalnızca fan çalışır. Bu bir koruma davranışıdır."
  - q: "Bir klima bütün evi soğutur mu?"
    a: "Samsung'un notu açık: klima yalnız kurulduğu alanı veya odayı soğutmak üzere tasarlanmıştır; montajın yapıldığı oda dışındaki alanları da soğutması beklenmemelidir. Kapasitesi yetersiz bir ünite geniş alanları soğutmakta zorlanır."
  - q: "Filtreyi temizledim, hâlâ soğutmuyor. Gaz mı bitti?"
    a: "Bunu evde anlamanın yolu yok. Samsung, soğutma performansının aşırı yüksek dış sıcaklık, elektrik kaynağı sorunları ya da soğutucu gaz sızıntısı gibi etkenlerden de etkilenebileceğini ve bu durumlarda servis müdahalesi gerektiğini belirtiyor. Evdeki kontrollerden sonra sorun sürüyorsa Samsung yetkili servisine başvur."
images:
  coverAlt: "Sıcak bir yaz gününde oturma odasında duvardaki beyaz split klima; kumanda ekranında düşük bir sıcaklık ayarı görünüyor"
---

Klima çalışıyor, üflüyor ama oda serinlemiyor. Samsung Türkiye'nin destek sayfasına göre bunun temel nedeni çoğu zaman **"hatalı ayarlar, hava akışını engelleyen unsurlar veya bakım eksikliği"** olabilir. Samsung'un listesi evde kontrol edilebilecek maddelerle başlıyor: yanlış mod ya da sıcaklık ayarı, iç veya dış ünitenin önündeki engeller, kirli filtre, açık kapı-pencere. Bu yazıda Samsung'un kendi sırasını, Türkçe kullanım kılavuzunun sorun giderme tablosuyla birlikte adım adım anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce ayar: mod Soğut mu, ayarlı sıcaklık oda sıcaklığından düşük mü (Samsung 23°C ya da altını öneriyor)? Sonra hava yolu: kapı-pencere kapalı mı, iç ve dış ünitenin önü açık mı? Sonra filtre: güç bağlantısını kes, filtreyi temizle, tamamen kurut. Hâlâ soğutmuyorsa ya da E ile başlayan kod varsa → Samsung yetkili servisi.

## Samsung'a göre nedenler

Samsung'un destek sayfasında sayılan en yaygın nedenler:

| Neden | Evde kontrol edilebilir mi? |
|---|---|
| Soğut modunda ortam sıcaklığından düşük bir sıcaklık ayarlanmamış | Evet, kumandadan |
| İç ya da dış ünitenin önünde hava akışını kısıtlayan engel | Evet, gözle |
| Kirli ya da tıkalı hava filtresi | Evet, filtre temizliği |
| Kapasitenin oda boyutuna uygun olmaması | Hayır, montaj ve cihaz seçimi konusu |
| Ünitenin köşe gibi verimliliği düşüren bir yere konması | Hayır, montaj konusu |

Kullanım kılavuzu bir noktayı netleştiriyor: Soğut modunda soğutma **yalnızca ayarlanan sıcaklık geçerli sıcaklıktan düşük olduğunda** gerçekleşir. Oda 24°C iken 26°C ayarlıysa klima soğutmaz; bu bir arıza değil, ayardır.

## Adım adım: evde denenecekler

**1. Mod ve sıcaklık.** Kumandada modun Soğut olduğunu ve ayarlı sıcaklığın oda sıcaklığından düşük olduğunu kontrol et; Samsung 23°C ya da altını öneriyor. Kılavuza göre ünite Fan ya da Hızlı modundaysa sıcaklık ayarı değiştirilemez.

**2. Kapı ve pencere.** Odanın bütün kapı ve pencerelerini kapat. Samsung, dışarıdan sıcak hava girişinin önlenmesini istiyor.

**3. İç ünitenin önü.** İç ünitenin önündeki perde, mobilya gibi hava akışını kesen engelleri kaldır.

**4. Dış ünite.** Dış ünitenin üzerinin örtülmediğini ve hava çıkışının kapanmadığını kontrol et. Samsung ayrıca aynı yerde birden fazla dış ünite varsa hava çıkışlarının birbirine dönük olmamasını istiyor. Dış üniteye yalnız balkondan, güvenle erişebildiğin kadar bak; ulaşılamayan bir cephedeyse bu kontrolü servise bırak.

**5. Güvenlik.** Klimayı kapat, güç bağlantısını kes ve fan durana kadar bekle. Samsung kılavuzu temizlik ya da bakımdan önce bunu şart koşuyor.

**6. Filtreyi temizle.** Hava filtresini kaydırarak çıkar, tozunu yumuşak fırça ya da süpürgeyle al, su ve yumuşak deterjanla yıka. Kılavuz filtrenin 30 dakika su ve yumuşak deterjanla ıslatılmasını, sert kıllı fırça kullanılmamasını söylüyor. Samsung'a göre tıkalı filtre cihazın hatalı çalışmasına neden olabilir.

**7. Kurut ve tak.** Filtreyi doğrudan güneş almayan, iyi havalanan bir yerde tamamen kurut ve yerine tak. Ekranda filtre hatırlatıcısı varsa kumandadan sıfırla; ayrıntısı [Samsung klima CF hatası](/blog/samsung-klima-cf-hatasi/) yazısında.

**8. Sürerse servis.** Sorun sürerse ya da ekranda E ile başlayan bir kod varsa kodu ve model numarasını not edip Samsung yetkili servisine ilet.

## Ne zaman servis?

Samsung'un destek sayfası sınırı kendisi çiziyor: soğutma performansı **aşırı yüksek dış sıcaklıklar, elektrik kaynağı sorunları ya da soğutucu gaz sızıntıları** gibi etkenlerden de etkilenebilir ve bu durumlarda servis müdahalesi gerekir. Samsung ayrıca uzun yıllar periyodik bakımı yapılmamış ürünlere profesyonel bakım yaptırılmasını tavsiye ediyor.

| Durum | Kimin işi |
|---|---|
| Mod, sıcaklık, kapı-pencere, engeller, filtre | Senin, bu rehberdeki adımlar |
| Ekranda E ile başlayan kod (ör. E554 gaz kaçak hatası) | Samsung yetkili servisi |
| İç ve dış ünitenin içinin temizliği, soğutucu akışkan borularının kontrolü | Kılavuza göre kalifiye teknisyen, yılda bir |
| Kapasite ya da konum uyumsuzluğu | Montaj değerlendirmesi, yetkili servis |

⛔ Gaz hattına, dış ünitenin kapağına ve elektrik bağlantılarına dokunma. Samsung kılavuzu ünitelerin, elektrik bağlantılarının ve soğutucu akışkan borularının kontrolünü kalifiye teknisyen işi olarak sayıyor.

E ile başlayan kodların Samsung Türkiye tablosu [Samsung klima hata kodları](/blog/samsung-klima-hata-kodlari/) yazısında. Markadan bağımsız diğer sebepler için [klima soğutmuyor](/blog/klima-sogutmuyor-nedenleri/) yazısına bakabilirsin.

---

**Kaynak künyesi.** Nedenler, çözümler ve servis sınırı Samsung Türkiye'nin "Samsung Klimam yeterince soğutmuyorsa ne yapmalıyım?" destek sayfasından; mod, sıcaklık, filtre ve bakım tablosu ayrıntıları Samsung'un Türkçe kullanım kılavuzlarından (AR9500T WindFree ve AR09/12JSFSCWK serisi) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

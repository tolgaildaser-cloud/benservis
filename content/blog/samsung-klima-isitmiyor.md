---
title: "Samsung klima ısıtmıyor: evde kontrol"
description: "Samsung klima sıcak hava vermiyorsa Samsung'un sırası: Isıt modu ve sıcaklık, ilk 3-5 dakika, buz çözme, kapı-pencere, dış ünite ve filtre."
slug: "samsung-klima-isitmiyor"
date: "2026-09-30"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-09-30, curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200; PDF md5'leri 28 Eyl kopyalarıyla birebir aynı. PDF'ler pdftotext -layout -f N -l N ile sayfa sayfa okundu (PDF sayfası = basılı sayfa).
# Web araması yalnız belgelerin YERİNİ bulmak için kullanıldı; hiçbir cümle arama sonucundan, forumdan ya da servis sitesinden alınmadı.
#  M1) Samsung TR kılavuz AR9500T WindFree, 50 s., md5 5c6daf15aa6a54b37e7af4186f36708a
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=AR12TSFYCWK%2FSK&CttFileID=7963378&CDCttType=UM&VPath=UM%2F202102%2F20210203204244405%2FRAC029-02_IB_AR9500T_GEO_WIND_TR_TR-WEB_.pdf
#      s.34 "Hava akışı sıcaklığı uygun değil." → "Soğut modunda, soğutma yalnızca ayarlanan sıcaklık geçerli sıcaklıktan düşük olduğunda gerçekleşir. Isıt modunda, ısıtma yalnızca ayarlanan sıcaklık geçerli sıcaklıktan yüksek olduğunda gerçekleşir." / "Hava filtresi tıkalıysa soğutma ve ısıtma performansı azalabilir." / "Dış ünitenin örtülü olup olmadığını veya engellerin yakınına takılmış olup olmadığını kontrol edin. Örtüleri ve engelleri kaldırın." / "Buz çözme sırasında fan durur ve sıcak hava gelmez." / "Tüm kapı ve pencereleri kapatın." / boru uzunluğu maddesi
#      s.34 "Sıcaklık değiştirilemiyor." → "Ünitenin Fan veya Hızlı modunda olup olmadığını kontrol edin. Bu modlardaysa ayarlanan sıcaklığı değiştiremezsiniz."
#      s.21 Isıt modu NOT: "Klima ısınırken, soğuk hava üflemesini önlemek için fan başlangıçta 3-5 dakika çalışmayabilir." / "Klimanın ısıtması yetersizse klimayla birlikte ek ısıtıcı cihaz kullanın." / Otomatik buz çözme: "Buz Çözme işlevini 5-12 dakika boyunca çalıştırır." / "Buz Çözme işlevi açıkken iç ünite ekranında (Buz Çözme) göstergesi görünür"
#      s.16 Isıt çalışma aralığı: iç ortam "27°C veya daha az", dış ortam "−15 ℃ ila 24 ℃" / "Dış hava sıcaklığı -15℃'ye düşerse ısıtma kapasitesi %60-70'e kadar düşebilir."
#      s.12 "İç•dış sıcaklık düştüğünde klimanın ısıtma performansı düşebilir. Bu nedenle ek ısıtma cihazı kullanın."
#      s.10 "Temizlik veya bakım yapmadan önce, güç kaynağını kesin ve fan durana kadar bekleyin."  s.33 filtre adımları (kaydırarak çıkar, yumuşak fırça/süpürge, 30 dk su+yumuşak deterjan, doğrudan güneş almayan yerde kurut, tak, hatırlatıcıyı sıfırla)
#  M2) Samsung TR kılavuz AR09/12JSFSCWK (AR3050), 47 s., md5 140a45cb498831b61bf9d6035592c6bd
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=AR12MSFSCWKXSK&CttFileID=7023832&CDCttType=UM&VPath=UM%2F201804%2F20180419115020221%2F180205_SK_GOOD_INV_A3050_IB_TR_DB68-06583A-02.pdf
#      s.27 "Soğuk veya sıcak hava klimadan çıkmıyor." → "Ayarlanan sıcaklığın mevcut sıcaklıktan Soğut modunda daha yüksek/ Isıt modunda daha düşük olup olmadığını kontrol edin." / "Kışın buz oluştuğunda veya dış sıcaklık çok düşük olduğunda, klima buz çözme işlevini otomatik çalıştırır. Bu işlev çalışırken, iç fan durur ve ılık hava çıkmaz." / "Soğutma veya ısıtma işlemi durduktan sonra klimanın hemen açılıp açılmadığını kontrol edin. Bu durumda, dış ünitenin kompresörünü korumak için yalnızca fan çalışır."
#      s.17 "Buz çözme işlevi çalışırken, soğuk havanın gelmesini önlemek için iç üniteden hiç hava gelmez. Buz çözme işlevi bittiğinde, sıcak hava bir süre sonra gelir." / "Buz çözme işlevi çalışırken, uzaktan kumandayla diğer işlevleri seçemezsiniz."
#      s.13 "Dış sıcaklık -15°C'ye düşerse, ısıtma kapasitesi belirtilen kapasitenin %60'ı ila %70'i kadar düşebilir."
#      s.10 "Ürüne bağlı olan borulara dokunmayın." / "Klimanın içini kendiniz temizlemeyin." / ısı eşanjörü: "Bu işlem uzman bir teknisyen tarafından yapılmalıdır."
#      M2 s.13 Isıtma dış sıcaklık: 09N modellerde "-10 °C ila 24 °C", 09J/M-12-18-24 modellerde "-15 °C ila 24 °C"
# BİLEREK YAZILMAYANLAR: dış ünitenin su ile yıkanması, ısı eşanjörü temizliği (M1 s.10: uzman teknisyen işi); dış ünitedeki buzu elle kırma/eritme (belgede yok); gaz, boru uzunluğu ve kapasite teşhisi (montaj/servis); belgede olmayan "ısıtmada kaç derece ayarla" önerisi.
# Alıntı denetim tablosu: samsung-klima-isitmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (filtre kuruma hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Yumuşak fırça ya da elektrikli süpürge", "Yumuşak deterjan"]
steps:
  - "Kumandada modun Isıt olduğunu ve ayarlı sıcaklığın oda sıcaklığından yüksek olduğunu kontrol et."
  - "Klimayı Isıt modunda açtıktan sonra 3-5 dakika bekle; fan başlangıçta çalışmayabilir."
  - "İç ünite ekranında buz çözme göstergesi varsa işlemin bitmesini bekle; bu sırada iç üniteden sıcak hava gelmez."
  - "Odanın bütün kapı ve pencerelerini kapat."
  - "Dış ünitenin üzerinin örtülmediğini ve önünde engel olmadığını, güvenle görebildiğin yerden kontrol et."
  - "Klimayı kapat, güç bağlantısını kes ve fan durana kadar bekle."
  - "Hava filtresini kaydırarak çıkar, tozunu yumuşak fırça ya da süpürgeyle al, su ve yumuşak deterjanla yıka, gölgede kurutup yerine tak."
  - "Sorun sürerse ya da ekranda E ile başlayan bir kod varsa kodu ve model numarasını not edip Samsung yetkili servisine ilet."
faq:
  - q: "Samsung klimayı Isıt'ta açtım, ilk dakikalarda hava gelmiyor. Neden?"
    a: "Samsung kılavuzuna göre klima ısınırken soğuk hava üflemesini önlemek için fan başlangıçta 3-5 dakika çalışmayabilir. Bu bir arıza değil; birkaç dakika bekle."
  - q: "Isıtırken klima birden durdu, ekranda buz çözme işareti var. Arıza mı?"
    a: "Hayır. Samsung kılavuzuna göre dış sıcaklık düşük ve nem yüksekken dış ısı eşanjöründe buz oluşabilir; klima bu buzu gidermek için Buz Çözme işlevini 5-12 dakika çalıştırır. Bu sırada iç üniteden sıcak hava gelmez, dış ünitede buhar görülebilir. İşlev bittikten bir süre sonra sıcak hava yeniden gelir."
  - q: "Dışarısı çok soğukken klima yeterince ısıtmıyor. Normal mi?"
    a: "Samsung kılavuzları iç ve dış sıcaklık düştüğünde ısıtma performansının düşebileceğini, dış sıcaklık -15°C'ye düşerse ısıtma kapasitesinin yüzde 60-70'e kadar inebileceğini yazıyor. Kılavuz bu durumda klimayla birlikte ek bir ısıtma cihazı kullanmanı öneriyor."
  - q: "Klimayı kapatıp hemen açtım, yalnız fan çalışıyor. Neden?"
    a: "Samsung kılavuzuna göre ısıtma ya da soğutma durduktan sonra klima hemen yeniden açılırsa dış ünitenin kompresörünü korumak için yalnızca fan çalışır. Bu bir koruma davranışıdır."
images:
  coverAlt: "Kış akşamı oturma odasında duvardaki beyaz split klima; pencerenin ardında karlı bir balkon görünüyor"
---

Klima çalışıyor ama odaya sıcak hava gelmiyor. Samsung'un Türkçe kullanım kılavuzunun sorun giderme tablosu bu belirtiyi **"Soğuk veya sıcak hava klimadan çıkmıyor."** satırında ele alıyor ve ilk maddeyi ayara ayırıyor: Isıt modunda ısıtma **"yalnızca ayarlanan sıcaklık geçerli sıcaklıktan yüksek olduğunda gerçekleşir."** Bu yazıda Samsung'un kılavuzlarındaki sırayı, kışın normal sayılan buz çözme davranışıyla birlikte adım adım anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce ayar: mod Isıt mı, ayarlı sıcaklık oda sıcaklığından yüksek mi? Sonra bekleme: açılışta fan 3-5 dakika çalışmayabilir; ekranda buz çözme göstergesi varsa 5-12 dakika sıcak hava gelmez. Sonra kapı-pencere, dış ünitenin önü ve filtre. Hâlâ ısıtmıyorsa ya da E ile başlayan kod varsa → Samsung yetkili servisi.

## Samsung'a göre nedenler

Samsung kılavuzlarının sorun giderme tablosunda ve Isıt modu notlarında sayılan maddeler:

| Neden | Evde kontrol edilebilir mi? |
|---|---|
| Isıt modunda ayarlı sıcaklık oda sıcaklığından yüksek değil | Evet, kumandadan |
| Açılışta fan henüz çalışmıyor (ilk 3-5 dakika) | Evet, beklemek yeterli |
| Buz çözme işlevi çalışıyor | Evet, ekrandaki göstergeye bakıp beklemek |
| Klima kapatılıp hemen açılmış, kompresör koruması için yalnız fan çalışıyor | Evet, normal davranış |
| Kapı ya da pencere açık | Evet |
| Dış ünite örtülü ya da önünde engel var | Evet, gözle |
| Hava filtresi tıkalı | Evet, filtre temizliği |
| Boru uzunluğu kılavuzdaki sınırı aşıyor | Hayır, montaj konusu |

Kılavuz bir noktayı daha netleştiriyor: ünite Fan ya da Hızlı modundaysa ayarlanan sıcaklık kumandadan değiştirilemez; ünite sıcaklığı kendisi kontrol eder. Sıcaklığı değiştiremiyorsan önce modu kontrol et.

## Adım adım: evde denenecekler

**1. Mod ve sıcaklık.** Kumandada modun Isıt olduğunu ve ayarlı sıcaklığın oda sıcaklığından yüksek olduğunu kontrol et. Samsung kılavuzuna göre Isıt modunda ısıtma yalnız bu durumda gerçekleşir.

**2. İlk dakikalar.** Klimayı Isıt modunda açtıktan sonra 3-5 dakika bekle; fan başlangıçta çalışmayabilir. Samsung bunu soğuk hava üflemesini önlemek için yapıldığını yazıyor.

**3. Buz çözme.** İç ünite ekranında buz çözme göstergesi varsa işlemin bitmesini bekle; bu sırada iç üniteden sıcak hava gelmez. Kılavuza göre işlev 5-12 dakika sürer, bu sırada kumandayla başka işlev seçilemez. Ayrıntısı [Samsung klima DF hatası](/blog/samsung-klima-df-hatasi/) yazısında.

**4. Kapı ve pencere.** Odanın bütün kapı ve pencerelerini kapat. Samsung kılavuzuna göre açık kapı ve pencere düşük ısıtma performansına neden olabilir.

**5. Dış ünite.** Dış ünitenin üzerinin örtülmediğini ve önünde engel olmadığını, güvenle görebildiğin yerden kontrol et. Kılavuz örtüleri ve engelleri kaldırmanı istiyor. Dış ünite ulaşılamayan bir cephedeyse bu kontrolü servise bırak; dış üniteye tırmanma.

**6. Güvenlik.** Klimayı kapat, güç bağlantısını kes ve fan durana kadar bekle. Samsung kılavuzu temizlik ya da bakımdan önce bunu şart koşuyor.

**7. Filtreyi temizle.** Hava filtresini kaydırarak çıkar, tozunu yumuşak fırça ya da süpürgeyle al, su ve yumuşak deterjanla yıka, gölgede kurutup yerine tak. Kılavuz filtrenin 30 dakika su ve yumuşak deterjanla ıslatılmasını, sert kıllı fırça kullanılmamasını ve doğrudan güneşte kurutulmamasını istiyor. Samsung'a göre tıkalı filtre ısıtma performansını düşürebilir.

**8. Sürerse servis.** Sorun sürerse ya da ekranda E ile başlayan bir kod varsa kodu ve model numarasını not edip Samsung yetkili servisine ilet.

## Soğuk havada ısıtma

Samsung kılavuzları ısıtmanın dış sıcaklığa bağlı olduğunu açıkça yazıyor. İki kılavuzdaki modellerin çoğunda Isıt modu için dış ortam çalışma aralığı -15°C ile 24°C arası (AR3050 kılavuzundaki 09N kodlu modellerde -10°C ile 24°C), iç ortam için 27°C ya da altı. Dış sıcaklık -15°C'ye düşerse ısıtma kapasitesi belirtilen kapasitenin yüzde 60-70'ine kadar inebilir. Samsung, iç ve dış sıcaklık düştüğünde ısıtma performansı düşebileceği için klimayla birlikte ek bir ısıtma cihazı kullanmanı öneriyor. Kendi modelinin aralığı için kılavuzuna bak.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Mod, sıcaklık, bekleme, buz çözme, kapı-pencere, dış ünitenin önü, filtre | Senin, bu rehberdeki adımlar |
| Ekranda E ile başlayan kod | Samsung yetkili servisi |
| Boru uzunluğu ya da montaj konumu şüphesi | Montaj değerlendirmesi, yetkili servis |
| Dış ünitenin ısı eşanjörü temizliği | Kılavuza göre uzman teknisyen |

⛔ Dış ünitenin kapağına, borularına ve ısı eşanjörüne dokunma. Samsung kılavuzu dış ünitenin ısı eşanjörü temizliğini uzman teknisyen işi olarak sayıyor ve klimanın içinin kendin temizlenmemesini istiyor.

E ile başlayan kodların Samsung Türkiye tablosu [Samsung klima hata kodları](/blog/samsung-klima-hata-kodlari/) yazısında. Klima hiç açılmıyorsa [Samsung klima çalışmıyor](/blog/samsung-klima-calismiyor/) yazısına bakabilirsin.

---

**Kaynak künyesi.** Sorun giderme adımları, Isıt modu notları, buz çözme, çalışma aralığı ve filtre temizliği Samsung'un Türkçe kullanım kılavuzlarından (AR9500T WindFree ve AR09/12JSFSCWK serisi) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

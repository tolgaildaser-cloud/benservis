---
title: "LG buzdolabı Er CH ve Er CL hatası"
description: "LG buzdolabı Er CH / Er CL hatası: LG'ye göre soğutma gücü düştü. Ne zaman kapı ve enerji sıfırlamasıyla geçer, ne zaman doğrudan servis gerekir?"
slug: "lg-buzdolabi-er-ch-cl-hatasi"
date: "2026-09-28"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200. Kaynak LG Türkiye'nin kendi yardım kütüphanesi (lg.com/tr).
# Metin, sayfaların gömülü "support-help-article-schema" JSON-LD'sindeki articleBody alanından çıkarıldı (ext.py). Tek sayfalık HTML makaleler; PDF değil.
# HTML her istekte değişen dinamik parçalar taşıyor → HTML md5'i indirme başına farklı; tekrar üretilebilir kanıt çıkarılan metnin md5'i.
# Web araması YALNIZ sayfaların YERİNİ bulmak için kullanıldı (allowed_domains lg.com); hiçbir cümle arama sonucundan, forumdan ya da servis sitesinden alınmadı.
#  L1) "[LG buzdolabı hata kodları] Ekranda [ER(E), CH veya CL] yazan bir metin belirir." (datePublished 2025-09-26)  (ana kaynak)
#      https://www.lg.com/tr/destek/product-support/troubleshoot/help-library/cs-CT52000193-20153392534839/
#      1 sayfa (HTML) · html md5 4bda47ba0ba3c965563415a8e61a998c · metin md5 8edf8eacf3fd9494e07cdb3b6711f0b2
#  L2) "[LG buzdolabı soğutma] Soğutma zayıf." (datePublished 2025-09-24)  (yalnız kapı kontrol maddeleri için)
#      https://www.lg.com/tr/destek/product-support/troubleshoot/help-library/cs-CT52000193-20153392157364/
#      1 sayfa (HTML) · html md5 386405fce93b6fb0034350780ac1aca0 · metin md5 ce5a5ecc376089129ee98c593362f368
# Birebir alıntılar:
#   L1: "[ER(E) CH/CL] hata kodu, ürün kurulumu sırasında güç uygulandıktan 24 saat sonra soğutma gücünde azalma tespit edildiğinde ekranda bir buzdolabı sıcaklık arızası belirtisini bildiren bir inceleme kodudur."
#   L1: "Yeni bir buzdolabı kurulumundan veya yer değiştirmesinden sonra [ER(E) CH/CL] hata kodu göründü mü? ... Döngüde bir sorun olabilir (soğutucu sızıntısı, kompresör arızası, valf arızası vb.), bu nedenle bir LG servis teknisyeni tarafından kontrol edilmesi önerilir."
#   L1: "Ürünü kullanırken [ER(E) CH/CL] hata kodu göründü mü? Bu hata kodu, buzdolabı çalışırken ve kapı uzun süre açık bırakıldığında veya elektrik beslemesi kararsız hale geldiğinde veya diğer elektriksel faktörler geçici olarak görünür.
#        Ürünün gücünü kapatın veya devre kesiciyi açın ve ardından yaklaşık 5 dakika sonra devre kesiciyi sıfırlayın.※ Gücü sıfırladıktan sonra bile aynı belirtiler tekrarlanırsa, bir LG servis teknisyenine kontrol ettirin."
#   L2: "Buzdolabının kapısı tamamen kapanmazsa, dışarıdan gelen sıcak hava içeri girebilir ve soğutma fonksiyonunu etkisiz hale getirebilir."
#   L2: "Buzdolabını temizledikten sonra, çekmeceler veya raflar yanlış monte edildiğinden kapı kapanmazsa, çekmeceleri ve rafları dışarı çekin ve yerlerine doğru şekilde yerleştirin."
#   L2: "Buzdolabı kapısı rafında çok fazla yiyecek olması nedeniyle kapı gevşekse, yiyeceklerin bir kısmını çıkarın."
#   L2: "Kapı contasının kirletici maddelerle yapışması nedeniyle kapı düzgün kapanmıyorsa, temizleyin ve düzenli olarak yapın. Kapı contası aşınmışsa ... LG Electronics servis merkeziyle iletişime geçin."
# NOT: L1, CH ile CL'yi tek kod çifti olarak veriyor; ikisini ayırt eden bir açıklama (ör. yüksek/alçak basınç) L1'de YOK → yazıda ayrım yapılmadı.
# BİLEREK YAZILMAYANLAR: hub'daki "CH = yüksek basınç, CL = alçak basınç tarafında kaçak" ayrımı (bu koşuda LG TR belgesinde bulunamadı) ·
#   "kesin gaz kaçağı" hükmü (L1 "olabilir" diyor ve örnek sayıyor) · gaz dolumu/kompresör müdahalesi (#31) · süre/fiyat/parça (#46).
# Alıntı denetim tablosu: lg-buzdolabi-er-ch-cl-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Kodun ne zaman çıktığını belirle: yeni kurulum ya da taşınma sonrası mı, kullanım sırasında mı."
  - "Kod yeni kurulumdan ya da yer değiştirmeden sonra çıktıysa kendin deneme yapmadan LG servisinden kontrol iste."
  - "Kullanım sırasında çıktıysa kapının uzun süre açık kalıp kalmadığını kontrol et ve kapıyı tam kapat."
  - "Temizlikten sonra yanlış takılan raf ya da çekmece kapıyı engelliyorsa onları çıkarıp yerine doğru yerleştir."
  - "Kapı rafı çok doluysa ve kapı gevşekse yiyeceklerin bir kısmını çıkar; yapışan kapı contasını temizle."
  - "Buzdolabının gücünü kapat ya da sigortasını kapat, yaklaşık 5 dakika sonra sigortayı yeniden aç."
  - "Sıfırlamadan sonra da aynı belirti tekrarlarsa LG servis teknisyenine kontrol ettir."
faq:
  - q: "LG buzdolabında Er CH ya da Er CL hatası ne demek?"
    a: "LG Türkiye'nin yardım sayfasına göre Er CH / Er CL, soğutma gücünde azalma tespit edildiğinde ekranda bir buzdolabı sıcaklık arızası belirtisini bildiren bir inceleme kodudur. LG, kurulumda güç verildikten 24 saat sonra soğutma gücünde azalma tespit edildiğinde de bu kodun göründüğünü yazıyor."
  - q: "Yeni aldığım ya da taşıdığım buzdolabında Er CH çıktı, ne yapmalıyım?"
    a: "LG bu durumu ayrı ele alıyor: yeni bir kurulumdan ya da yer değiştirmeden sonra görünen Er CH / Er CL için soğutma döngüsünde bir sorun olabileceğini (soğutucu sızıntısı, kompresör arızası, valf arızası gibi) yazıyor ve bir LG servis teknisyeninin kontrolünü öneriyor. Bu durumda LG'nin sayfası kullanıcıya bir deneme adımı vermiyor."
  - q: "Buzdolabını kullanırken Er CL çıktı, hemen servis mi çağırmalıyım?"
    a: "LG'ye göre kullanım sırasında bu kod, kapı uzun süre açık bırakıldığında, elektrik beslemesi kararsızlaştığında ya da başka elektriksel etkenlerle geçici olarak görünebilir. LG'nin önerisi önce gücü ya da sigortayı kapatıp yaklaşık 5 dakika sonra yeniden açmak. Sıfırlamadan sonra da aynı belirti tekrarlarsa LG servis teknisyeninin kontrolünü istiyor."
  - q: "Er CH ile Er CL arasındaki fark ne?"
    a: "LG Türkiye'nin yardım sayfası iki kodu tek bir çift olarak ve aynı açıklamayla veriyor; ikisini birbirinden ayıran bir tanım yazmıyor. Kullanıcı açısından yapılacaklar da ikisi için aynı."
  - q: "Kapı neden bu kadar önemli?"
    a: "LG'nin soğutma zayıflığı sayfasına göre buzdolabının kapısı tamamen kapanmazsa dışarıdan gelen sıcak hava içeri girebilir ve soğutma işlevini etkisiz hâle getirebilir. Aynı sayfa kapının tam kapanmasını engelleyen üç durumu sayıyor: yanlış takılmış raf ya da çekmece, fazla dolu kapı rafı ve yapışmış kapı contası."
images:
  coverAlt: "Aralık kalmış bir buzdolabı kapısının yakın çekimi; kapı rafındaki şişeler ve kapı contasının kenarı görünüyor"
---

Buzdolabının ekranında **Er CH** ya da **Er CL** yazıyor. LG Türkiye'nin yardım sayfasında bu çiftin tanımı şu: soğutma gücünde azalma tespit edildiğinde **"ekranda bir buzdolabı sıcaklık arızası belirtisini bildiren bir inceleme kodu."** LG bu kod için iki ayrı durum tarif ediyor ve hangisinin geçerli olduğu, yapman gerekenleri tamamen değiştiriyor: kod **yeni kurulumdan ya da taşınmadan sonra** mı çıktı, yoksa buzdolabını **kullanırken** mi? Bu yazıda iki yolu LG'nin kendi sırasıyla ayırıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Er CH / Er CL = LG'ye göre soğutma gücü düşmüş. Yeni kurulum ya da taşınma sonrasıysa → deneme yapma, LG servisi. Kullanırken çıktıysa → kapıyı ve kapıyı engelleyenleri kontrol et → gücü ya da sigortayı kapat → yaklaşık 5 dakika sonra aç. Aynı belirti yine gelirse → LG servisi.

## Adım adım: evde denenecekler

**1. Kodun ne zaman çıktığını belirle.** LG'nin sayfası soruyu tam böyle soruyor: kod yeni bir kurulumdan ya da yer değiştirmeden sonra mı göründü, yoksa ürünü kullanırken mi? Aşağıdaki adımların hangisinin sana ait olduğunu bu cevap belirler.

**2. Yeni kurulum ya da taşınma sonrasıysa servise bırak.** LG'ye göre bu durumda soğutma döngüsünde bir sorun olabilir; sayfa örnek olarak **soğutucu sızıntısı, kompresör arızası ve valf arızasını** sayıyor ve bir **LG servis teknisyeninin kontrolünü** öneriyor. Bu senaryoda LG kullanıcıya bir deneme adımı vermiyor; sonraki adımlar kullanım sırasında çıkan kod içindir.

**3. Kullanım sırasında çıktıysa önce kapıya bak.** LG'ye göre kullanım sırasında bu kod, **kapı uzun süre açık bırakıldığında** geçici olarak görünebilir. Kapının aralık kalıp kalmadığını kontrol et ve tam kapat.

**4. Kapıyı engelleyen raf ya da çekmece var mı?** LG'nin soğutma zayıflığı sayfasına göre temizlikten sonra raflar ya da çekmeceler yanlış takıldıysa kapı kapanmayabilir. Bu durumda onları dışarı çekip yerlerine **doğru şekilde** yerleştir.

**5. Kapı rafını ve contayı kontrol et.** Kapı rafında çok fazla yiyecek olduğu için kapı gevşek kalıyorsa LG, yiyeceklerin bir kısmını çıkarmanı öneriyor. Kapı contası kirden yapıştığı için kapı düzgün kapanmıyorsa contayı temizle ve bunu düzenli yap.

**6. Enerjiyi sıfırla.** LG'nin talimatı: ürünün gücünü kapat ya da sigortayı kapat, ardından **yaklaşık 5 dakika sonra** sigortayı yeniden aç. LG, elektrik beslemesi kararsızlaştığında ya da başka elektriksel etkenlerle de bu kodun geçici olarak görünebileceğini yazıyor.

**7. Tekrar ederse dur.** LG'nin kuralı: gücü sıfırladıktan sonra bile **aynı belirtiler tekrarlanırsa** bir LG servis teknisyenine kontrol ettir.

## Er CH / Er CL tam olarak neyi söylüyor?

LG'nin tanımı soğutma gücüyle ilgili: kod, soğutma gücünde azalma tespit edildiğinde görünen bir **inceleme kodu**dur. LG ayrıca kurulumda güç verildikten **24 saat sonra** soğutma gücünde azalma tespit edildiğinde de bu kodun ekranda belireceğini yazıyor.

Kodun ağırlığını belirleyen şey zamanlamadır:

- **Yeni kurulum ya da yer değiştirme sonrası:** LG'ye göre döngüde bir sorun olabilir (soğutucu sızıntısı, kompresör arızası, valf arızası gibi). Öneri doğrudan LG servis teknisyeni.
- **Kullanım sırasında:** LG'ye göre kod; uzun süre açık kalan kapı, kararsız elektrik beslemesi ya da başka elektriksel etkenlerle **geçici** olarak görünebilir. Öneri önce enerji sıfırlaması.

LG'nin sayfası CH ile CL'yi tek bir çift olarak, aynı açıklamayla veriyor. İkisini birbirinden ayıran bir tanım bu sayfada yok; kullanıcı açısından yapılacaklar ikisi için aynı.

Kapı contasının nasıl temizleneceğini [buzdolabı kapı contası bakımı](/blog/buzdolabi-kapi-contasi-bakimi/) yazısında, LG buzdolabının diğer kodlarını [LG buzdolabı hata kodları](/blog/lg-buzdolabi-hata-kodlari/) yazısında bulabilirsin.

## Sınır nerede biter

LG'nin sayfası kullanıcıya yalnız kullanım sırasında çıkan kod için adım veriyor: kapıyı kontrol et, enerjiyi sıfırla. Kod yeni kurulumdan sonra çıktıysa ya da sıfırlamaya rağmen tekrarlıyorsa karar LG servis teknisyeninindir. LG'nin soğutma zayıflığı sayfası da kapı contası **aşınmışsa** ve kapıyla gövde arasında boşluk bırakıyorsa LG servis merkeziyle iletişime geçmeni istiyor.

⛔ **Kendin-çöz sınırı burada biter.** LG'nin saydığı olası sebepler (soğutucu sızıntısı, kompresör arızası, valf arızası) için sayfa kullanıcıya adım vermiyor, LG servis teknisyeninin kontrolünü öneriyor. Kural basit: **kapı, raf, conta ve sigorta sana; soğutma döngüsü LG servisine aittir.**

## Servisi aramadan önce kısa not

1. Kod ne zaman çıktı: yeni kurulum, taşınma ya da kullanım sırasında mı?
2. Ekranda tam olarak hangisi yazıyor: Er CH mi, Er CL mi?
3. Kapı kontrolü ve 5 dakikalık enerji sıfırlaması yapıldı mı, kod ne zaman geri geldi?
4. Buzdolabının model numarası ne?

Bu dört satır servise somut bir tablo anlatır ve doğru teşhisi hızlandırır.

Ekrandaki kodu ve buzdolabının modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

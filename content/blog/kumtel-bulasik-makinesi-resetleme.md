---
title: "Kumtel bulaşık makinesi resetleme nasıl yapılır"
description: "Kumtel HDW-01 bulaşık makinesinde reset: Başlat/Duraklat ile durdur, Program tuşuna üç saniyeden fazla bas, yeni programı seç, deterjanı kontrol et."
slug: "kumtel-bulasik-makinesi-resetleme"
date: "2026-10-24"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 6, küme X2-kumtel-luxell-ferre). origin/main 7481159'da "kumtel" slug'ı ya da başlığı yok.
# Arama kanıtı (#164, bu koşu, hl=tr gl=tr): "kumtel bulaşık makinesi r" → 1. "kumtel bulaşık makinesi resetleme nasıl yapılır", 2. "…resetleme", 3. "kumtel hdw 01 bulaşık makinesi resetleme nasıl yapılır".
#   GSC: bu sorgu için satır yok (www-3/4/5/6).
# Belge (#88), bu koşuda curl -sL -A "Mozilla/5.0":
#  (K1) resmî ürün sayfası https://www.kumtel.com/kumtel-hdw-01-4-programli-bulasik-makinesi (200) → https://static.ticimax.cloud/61061//uploads/dosyalar/usermanuel/teknik%20dosya/hdw-01kk.pdf (200, application/pdf)
#       71 s., kapak "kumtel.com HDW-01 Bulaşık Makinesi Kullanıcı Kılavuzu", md5 1b876ccf71589226a7fb4b91e607000a — PDF s.4, 13, 14, 17
# Sayfa = PDF sayfası (basılı numara bir eksik).
# BİLEREK YAZILMAYANLAR: ayrı "reset tuşu" (kılavuzda yok) · kart/yazılım sıfırlama · iletişim hatasında kendin müdahale · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanıcı kılavuzu"]
steps:
  - "Çalışan programı Başlat/Duraklat tuşuna basarak duraklat."
  - "Program tuşuna üç saniyeden fazla basılı tut; makine program seçme moduna geçer."
  - "Program tuşuyla istediğin programı seç; seçilen programın göstergesi yanar."
  - "Deterjan çıkmış ya da su boşaltılmışsa deterjan çekmecesini yeniden doldur."
  - "Başlat/Duraklat tuşuna bas; makine yeni programla çalışmaya devam eder."
  - "Panel hiç tepki vermiyorsa kapıyı kapat ve Güç düğmesiyle makineyi yeniden aç."
  - "Program ışıkları hızla yanıp sönüyorsa reseti tekrarlama; ışığın anlamını hata tablosundan oku."
faq:
  - q: "Kumtel bulaşık makinesinde reset tuşu var mı?"
    a: "HDW-01 kılavuzunda ayrı bir reset tuşu yok. Sıfırlama Başlat/Duraklat ve Program tuşlarıyla yapılıyor: önce duraklatıyorsun, sonra Program tuşuna üç saniyeden fazla basıp program seçme moduna geçiyorsun."
  - q: "Reset atınca deterjanı yeniden koymam gerekir mi?"
    a: "Kılavuza göre program uzun süre çalıştıysa deterjan çıkmış ya da deterjanlı su boşaltılmış olabilir. Bu durumda makineyi sıfırlayıp deterjan çekmecesini yeniden doldurman gerekiyor."
  - q: "Program tuşuna uzun basınca ekranda H harfi çıktı, ne oldu?"
    a: "Makineyi açtıktan sonraki 60 saniye içinde Program tuşuna 5 saniyeden uzun basarsan su yumuşatıcı ayar moduna giriyorsun. H1 ile H6 arasındaki seviyeler burada seçiliyor. Ayarı değiştirmeden çıkmak için Güç düğmesine bas."
  - q: "Makine kendi kendine kapandı, arızalı mı?"
    a: "Kılavuza göre enerji tasarrufu için makine bekleme modunda, kullanıcı müdahalesi olmadan 15 dakika sonra otomatik kapanıyor. Güç düğmesine basarak yeniden açabilirsin."
  - q: "Reset hata ışığını siler mi?"
    a: "Kılavuz hata ışıklarını sıfırlamayla değil nedeniyle anlatıyor: su girişi, ısıtma, taşma ya da kartlar arası iletişim. Nedeni ortadan kalkmadıkça ışık geri gelebilir; çözülmeyen kodda kılavuz profesyonel yardım istemeni söylüyor."
images:
  coverAlt: "Solo bulaşık makinesinin kapak üstündeki tuşlu kontrol paneli"
  steps:
    - "Çizim: solda bulaşık makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda bulaşık makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda bulaşık makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda bulaşık makinesi, sağda deterjan bölmesi"
    - "Çizim: solda bulaşık makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda bulaşık makinesi, sağda kapak"
    - "Çizim: solda bulaşık makinesi, sağda kullanım kılavuzu ve tablosu"
---

Kumtel bulaşık makinen programın ortasında takıldı, yanlış programı seçtin ya da panelde ışıklar hızla yanıp sönüyor ve "Kumtel bulaşık makinesi resetleme nasıl yapılır" diye arıyorsun. Kumtel'in HDW-01 kılavuzunda ayrı bir reset tuşu yok. Kılavuz bu işi **"Döngü Ortasında Programın Değiştirilmesi"** başlığı altında anlatıyor ve açıkça "bulaşık makinesini sıfırlamak için" diyor: iki tuş yetiyor, **Başlat/Duraklat** ve **Program**. Bu yazıda Kumtel'in kendi sitesindeki HDW-01 ürün sayfasından bağlanan Türkçe kullanıcı kılavuzunu kullandık. Senin modelin farklıysa panel düzenini kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Başlat/Duraklat ile duraklat. Program tuşunu üç saniyeden uzun basılı tut, program seçme modu açılır. Yeni programı seç, gerekirse deterjanı yeniden koy, Başlat/Duraklat ile başlat. Işıklar hızla yanıp sönüyorsa bu bir hata kodu; reset onu çözmez.

## Paneldeki tuşlar

| Tuş | Kılavuzdaki işi | Resette rolü |
|---|---|---|
| **Güç** | Makineyi açar | Panel kapandıysa yeniden açar; ayar modundan çıkarır |
| **Program** | Yıkama programını seçer | Üç saniyeden uzun basınca program seçme modu |
| **Başlat/Duraklat** | Programı başlatır ya da duraklatır | Önce duraklat, sonra yeniden başlat |
| **Gecikme** | Gecikme süresini ayarlar (3h/6h/9h) | Resetle ilgisi yok |
| **Yarım yük** | Az bulaşıkta su ve enerji tasarrufu | Yoğun, ECO ve 90 dakika programlarında |

## Adım adım: Kumtel bulaşık makinesini resetlemek

**1. Önce programı duraklat.** Kılavuzun sıfırlama talimatının ilk maddesi bu: yıkamayı duraklatmak için **Başlat/Duraklat** tuşuna bas. Program çalışırken doğrudan başka bir programa geçemezsin. Kapağı hemen açma; kılavuz döngünün ortasında kapağı açmanın sıcak buhar yüzünden tehlikeli olduğunu yazıyor.

**2. Program tuşuna üç saniyeden fazla bas.** Makine duraklatılmışken **Program** tuşunu **üç saniyeden uzun** basılı tut. Kılavuza göre makine bu sırada **program seçme moduna** geçiyor. Kısa basış yalnız programlar arasında geziniyor; sıfırlama için tuşu basılı tutman gerekiyor.

**3. Yeni programı seç.** Program seçme modunda Program tuşuyla istediğin döngüye gel. Seçilen programın göstergesi yanıyor. HDW-01'de dört program var: **Yoğun** (çok kirli tabak ve tencereler), **ECO** (normal kirli bulaşık için en verimli standart program), **90 dakika** (hızlı yıkama gereken normal kirli bulaşık) ve **Hızlı** (kurutma gerekmeyen az kirli bulaşık). Kılavuzun tablosuna göre Yoğun yaklaşık 205, ECO 230, 90 dakika 90, Hızlı 30 dakika sürüyor.

**4. Deterjanı kontrol et.** Kılavuz önemli bir uyarı yapıyor: program ancak **kısa bir süre** çalıştıysa değiştirilebilir. Daha uzun çalıştıysa deterjan çıkmış ya da deterjanlı yıkama suyu boşaltılmış olabilir. Bu durumda makineyi sıfırlayıp **deterjan çekmecesini yeniden doldurman** gerekiyor. Çekmeceyi açınca deterjan bitmişse yeniden koy, sonra kapağı kapat.

**5. Başlat/Duraklat ile devam et.** Yeni programı seçtikten sonra **Başlat/Duraklat** tuşuna bas. Kılavuzun son maddesi: makine çalışacaktır. Programın başında tahliye sesi duyarsan şaşırma; kılavuzun sorun giderme tablosu da program seçilince makinenin başlangıçta suyu tahliye ettiğini yazıyor.

**6. Panel tepki vermiyorsa makineyi yeniden aç.** Kumtel'e göre enerji tasarrufu için makine bekleme modunda, kullanıcı müdahalesi olmadan **15 dakika sonra kendiliğinden kapanıyor**. Tuşlara basıyorsun ve hiçbir ışık yanmıyorsa önce bunu düşün. Kapağı kapat ve **Güç** düğmesine bas. Sorun giderme tablosu ayrıca makine hiç çalışmıyorsa fişe, sigortaya, su basıncına ve kapağın düzgün kapanıp kapanmadığına bakmanı istiyor.

Bir tuzağa dikkat: makineyi açtıktan sonraki **60 saniye içinde** Program tuşuna **5 saniyeden uzun** basarsan reset yerine **su yumuşatıcı ayar moduna** giriyorsun ve seviye H1 ile H6 arasında değişiyor. Fabrika ayarı **H3**. Bu moddan **Güç** düğmesine basarak çıkıyorsun.

**7. Işıklar hızla yanıp sönüyorsa hata tablosuna bak.** Reset her durumu düzeltmez. Kılavuzun hata kodları tablosu program ışıklarının yanıp sönmesiyle dört durum anlatıyor:

| Yanıp sönen ışık | Anlamı | Olası neden |
|---|---|---|
| **Hızlı** | Su girişi uzun sürüyor | Musluk açılmıyor, su girişi kısıtlı ya da su basıncı çok düşük |
| **Hızlı + 90 dakika** | Gerekli sıcaklığa ulaşamıyor | Isıtma elemanı arızası |
| **ECO** | Taşma | Makinenin bazı parçaları sızdırıyor |
| **Yoğun + ECO + Hızlı** | Ana kart ile ekran kartı arasında iletişim yok | Kablo ya da bağlantı sorunu |

Bu ışıklardan biri yanıyorsa programı sıfırlamak nedeni ortadan kaldırmıyor. Su girişi ışığında musluğu ve hortumu kontrol edebilirsin. Taşmada kılavuz servisi çağırmadan önce ana su kaynağını kapatmanı istiyor.

## Ne zaman servis

- ECO ışığı yanıp sönüyorsa (taşma)
- Hızlı ve 90 dakika ışıkları birlikte yanıp sönüyorsa (ısıtma)
- Yoğun, ECO ve Hızlı ışıkları birlikte yanıp sönüyorsa (iletişim)
- Program tuşuna üç saniyeden uzun bastığın hâlde program seçme modu açılmıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Duraklatma, program seçimi, deterjan ve musluk sende; ısıtma elemanı, kartlar arası kablolar ve sızıntı Kumtel yetkili servisinin işi. Kılavuz da çözülemeyen bir hata kodunda profesyonel yardım istemeni söylüyor.

## Servisi aramadan önce kısa özet

1. Makinenin modeli ne?
2. Hangi ışıklar yanıp sönüyor?
3. Program tuşuna üç saniyeden uzun bastığında ne oldu?
4. Musluk tam açık mı, tabanda su var mı?

Işıkların ayrıntısı [Kumtel bulaşık makinesi ECO ışığı yanıp sönüyor](/blog/kumtel-bulasik-makinesi-eco-isigi-yanip-soniyor/) sayfasında. Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, önce öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

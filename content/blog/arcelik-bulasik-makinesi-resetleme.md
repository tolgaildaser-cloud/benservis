---
title: "Arçelik bulaşık makinesi resetleme nasıl yapılır"
description: "Arçelik bulaşık makinesinde reset, kılavuzdaki adıyla programın iptali: Başla / Bekle / İptal'e 3 saniye. Tuş kilidi, içerideki su ve servis sınırı."
slug: "arcelik-bulasik-makinesi-resetleme"
date: "2026-10-23"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 2, küme C). Konu seçimi: origin/main'de arcelik-bulasik-makinesi-resetleme yok, repoda "reset" geçen slug yok.
# Arama kanıtı (bu koşu, Google otomatik tamamlama hl=tr gl=tr): "arçelik bulaşık makinesi r" → 1. "arçelik bulaşık makinesi resetleme",
#   3. "…resetleme yapmıyor"; "arçelik bulaşık makinesi resetleme" → "…yapmıyor", "…nasıl yapılır", "…ne kadar sürer". GSC (https___www-5/6): satır yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile download.arcelik.com.tr'den yeniden indirildi, HTTP 200, md5 yerel kopyayla aynı.
#  (A) 6366 / 6366 I  https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_201703271206470_User%20Manual%20-%20Filetr_TR.pdf  46 s.  md5 e941e0ee68ba8698139fd77c492459a7
#  (B) 9242 MI        https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_20180312110164_User%20Manual%20-%20Filetr_TR.pdf  42 s.  md5 8d1f4fef3a6a67cb281b8b6be4643d2a
#  (C) 6222           https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_201712071226195_User%20Manual%20-%20Filetr_TR.pdf  39 s.  md5 f6deb1cc43f2bcaf7a4b2be908704d04
# İptal A s.32, B s.28-29, C s.25 · tuş kilidi A s.32 · kapı açma/buhar B s.28, C s.25 · erteleme iptali B s.28 · otomatik kapanma B s.29
#   · içeride su kalırsa A s.34, B s.30 · "Makine çalışmıyor" B s.33 (sayfa = PDF sayfası).
# BİLEREK YAZILMAYANLAR: gizli tuş kombinasyonu/servis menüsü · fişi çekerek reset · hata kodu silme hilesi · kart/parça teşhisi · fiyat/süre (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: arcelik-bulasik-makinesi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu"]
steps:
  - "Tuş kilidi açıksa önce Çocuk (Tuş) Kilidi tuşuna basılı tutarak kilidi kapat."
  - "Başla / Bekle / İptal tuşuna yaklaşık 3 saniye bas; gösterge yanıp sönmeye başlayınca bırak."
  - "Makinenin birkaç dakika boyunca iptal işlemlerini ve su tahliyesini bitirmesini bekle."
  - "Kapağı açman gerekirse makineyi önce Başla / Bekle / İptal ile durdur, kapağı açarken çıkabilecek buhara dikkat et."
  - "İçeride su kaldıysa iptal adımını tekrarla; su yine çıkmıyorsa kılavuzdaki gibi filtreleri çıkarıp temizle."
  - "Yeni programı seç, gerekiyorsa deterjanı yeniden koy ve Başla / Bekle / İptal ile başlat."
  - "Makine hiç çalışmıyorsa fişi, sigortayı, su musluğunu ve kapının kapalı olduğunu kontrol et; sürerse yetkili servis."
faq:
  - q: "Arçelik bulaşık makinesinde reset tuşu var mı?"
    a: "Arçelik'in 6366, 9242 MI ve 6222 kılavuzlarında Reset adında ayrı bir tuş yok. Karşılığı Programın iptal edilmesi bölümü: Başla / Bekle / İptal tuşuna yaklaşık 3 saniye basılır, makine birkaç dakika içinde iptal için gerekli işlemleri yapar."
  - q: "Arçelik bulaşık makinesi resetleme ne kadar sürer?"
    a: "Kılavuzlara göre birkaç dakika. 6366 ve 9242 MI'da makine birkaç dakika boyunca programın iptal edilmesi için gerekli işlemleri yerine getirir. 6222 kılavuzu daha net: makine içerisindeki su 45 saniye içinde tahliye edilir, Bitti lambası yanınca program iptal edilmiş olur."
  - q: "Arçelik bulaşık makinesi resetleme yapmıyor, ne yapmalıyım?"
    a: "Önce tuş kilidine bak. 6366 kılavuzuna göre çocuk (tuş) kilidi, makine çalışırken program akışını ve erteleme zamanını değiştirmeyi engeller. Kilidi kapattıktan sonra iptali tekrarla. Tuşa kısa basmak da yetmez; gösterge yanıp sönmeye başlayana kadar basılı tut."
  - q: "İptalden sonra bulaşıklarda deterjan kaldı, normal mi?"
    a: "Evet. Arçelik kılavuzlarına göre iptal ettiğin programın kaldığı adıma bağlı olarak makinede ve yıkanan parçalar üzerinde deterjan ya da parlatıcı kalabilir. Yeni bir program çalıştırmak bunu giderir."
  - q: "Tuş kilidi elektrik kesilince açılır mı?"
    a: "Kılavuz bunu söylemiyor. 6366 kılavuzuna göre program bittiğinde Açma / Kapatma tuşuyla makineyi kapatırsan çocuk kilidi otomatik olarak devreden çıkar. Ayrıca çocuk kilidi makinenin kapısını kilitlemez."
images:
  coverAlt: "Mutfakta tezgâh altına yerleştirilmiş, kapağı kapalı bir bulaşık makinesi"
  steps:
    - "Çizim: solda bulaşık makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda bulaşık makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda bulaşık makinesi, sağda bekleme süresi için saat"
    - "Çizim: solda bulaşık makinesi, sağda kapak"
    - "Çizim: solda bulaşık makinesi, sağda ilgili filtre"
    - "Çizim: solda bulaşık makinesi, sağda deterjan bölmesi"
    - "Çizim: solda bulaşık makinesi, sağda telefon ve kullanım kılavuzu"
---

Program yarıda kaldı, yanlış programı seçtin ya da makine tepki vermiyor; Arçelik bulaşık makinesini "resetlemek" istiyorsun. Arçelik'in bulaşık makinesi kılavuzlarında **Reset adında bir tuş yok.** Karşılığı **"Programın iptal edilmesi"** bölümü ve üç kılavuzda da yol aynı: **Başla / Bekle / İptal tuşuna yaklaşık 3 saniye basmak.** Bu yazıda Arçelik'in 6366, 9242 MI ve 6222 kullanma kılavuzlarından sıfırlamanın sırasını, ne kadar sürdüğünü ve onu engelleyen tuş kilidini çıkardık. Tuş adları ve ışıklar modele göre değişir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Tuş kilidi açıksa önce kapat. Başla / Bekle / İptal'e yaklaşık 3 saniye bas, gösterge yanıp sönmeye başlayınca bırak. Makine birkaç dakika içinde suyu tahliye edip programı iptal eder. Sonra yeni programı başlat. Makine hiç çalışmıyorsa fiş, sigorta, musluk ve kapı. Olmuyorsa yetkili servis.

## Üç modelde iptal

| | 6366 | 9242 MI | 6222 |
|---|---|---|---|
| **Ne yapılır** | Başla / Bekle / İptal'e ekrandaki 3, 2, 1 geri sayımı bitene kadar bas | Başla / Bekle / İptal'e 3 saniye bas | Başla / Bekle / İptal'e 3 saniye bas |
| **İşaret** | Başla / Bekle göstergesi yanıp söner | Program göstergesi yanıp söner | Yıkama ve Kurutma lambaları yanıp söner |
| **Süre** | Birkaç dakika | Birkaç dakika | Su 45 saniyede tahliye, sonra Bitti lambası |

## Adım adım: Arçelik bulaşık makinesini sıfırlama

**1. Tuş kilidini kapat.** 6366 kılavuzuna göre çocuk (tuş) kilidi, makine çalışırken **senden başka birinin program akışını ve erteleme zamanını değiştirmesini** engeller. Kilit açıksa iptal denemesi de sonuç vermez. Kilidi iptal etmek için **Çocuk (Tuş) Kilidi tuşuna basılı tut**; ekran bilgi satırında **"3", "2", "1"** yazar ve tuş kilidi iptal edilir. Kılavuzun iki notu: çocuk kilidi **makinenin kapısını kilitlemez**, ve program bittiğinde Açma / Kapatma tuşuyla makineyi kapatırsan kilit **otomatik olarak devreden çıkar.**

**2. Başla / Bekle / İptal'e 3 saniye.** Üç kılavuzun ortak yolu bu. 6366'da tuşa **ekrandaki 3, 2, 1 geri sayımı bitene kadar** basılır; ardından Başla / Bekle göstergesi yanıp sönmeye başlar. 9242 MI'da tuşa **3 saniye** basılır ve **program göstergesi yanıp sönmeye başlayınca** tuş bırakılır. 6222'de de 3 saniye basılır; **Yıkama ve Kurutma lambaları yanıp sönmeye başlayınca** bırakılır. Kısa basmak programı yalnızca duraklatır; sıfırlama için basılı tutmak gerekiyor.

**3. İptalin bitmesini bekle.** 6366 ve 9242 MI kılavuzlarına göre makine **birkaç dakika boyunca programın iptal edilmesi için gerekli işlemleri** yerine getirir. 6222 daha ayrıntılı: makine içerisindeki su **45 saniye içinde tahliye edilir**; Yıkama ve Kurutma lambaları sönüp **Bitti lambası yandığında** program iptal edilmiş olur. Bu sırada tuşlara art arda basma.

**4. Kapağı açman gerekiyorsa.** Kılavuzlar makine çalışırken kapağı açmamanı istiyor. Açman gerekirse **önce Başla / Bekle / İptal tuşuna basarak makineyi durdur,** sonra kapağı aç. Uyarı açık: kapağı açtığında **buhar çıkabilir, dikkatli ol.** Kapağı kapatıp aynı tuşa tekrar basarsan program kaldığı yerden devam eder; yani kısa basış sıfırlama değil, duraklatma.

**5. İçeride su kaldıysa.** Arçelik'in bakım bölümüne göre makinenin içinde su kalmışsa **"Programın iptal edilmesi" bölümündeki işlemleri uygulayarak** suyun tahliye edilmesini sağla. Su yine tahliye edilemiyorsa filtreleri kılavuzdaki gibi çıkararak makinenin dibinde birikip su yolunu tıkamış kir parçası olup olmadığına bak, gerekiyorsa temizle. Ayrıntı [Arçelik bulaşık makinesi su boşaltmıyor](/blog/arcelik-bulasik-makinesi-su-bosaltmiyor/) yazısında.

**6. Yeni programı başlat.** İptalden sonra yeni bir program seçip çalıştırabilirsin. Kılavuzların notu: iptal ettiğin programın kaldığı adıma bağlı olarak **makinede ve yıkanan parçalar üzerinde deterjan ya da parlatıcı kalabilir.** Ertelemeli başlatma kurduysan 9242 MI'da erteleme de aynı tuşa 3 saniye basılarak iptal edilir; erteleme **program başladıktan sonra ayarlanamaz.**

**7. Hiç çalışmıyorsa temel kontroller.** 9242 MI'ın sorun giderme tablosunda "Makine çalışmıyor" satırının sebepleri: **elektrik fişi takılmamış, sigorta atmış, su gelmiyor, makinenin kapısı açık, Açma / Kapatma tuşuna basılmamış.** Bunlar tamam, iptal de yapıldı, makine yine başlamıyorsa ya da bir uyarı tekrar ediyorsa **Arçelik yetkili servisine** haber ver.

## Ekran kendiliğinden kapandı

Bu bir sıfırlama değil. 9242 MI kılavuzuna göre enerji tasarrufu için makine, **program bitiminde ya da program başlatılmadığında belirli bir süre sonra otomatik olarak kapanır.** Açma / Kapatma tuşuyla yeniden açıp programını seçebilirsin.

## Ne zaman servis

- İptal yapıldığı hâlde tuşlar ve gösterge tepki vermiyorsa
- İptal ve filtre temizliğinden sonra içeride su kalıyorsa
- Ekranda bir hata kodu tekrar ediyorsa: liste [Arçelik bulaşık makinesi hata kodları](/blog/arcelik-bulasik-makinesi-hata-kodlari/) sayfasında

⛔ **Kendin-çöz sınırı burada biter.** Tuşlar, tuş kilidi, filtreler ve deterjan haznesi sende; gövdenin içi, pompa ve elektronik kart yetkili servisin.

## Servisi aramadan önce kısa özet

1. Makinenin modeli ne?
2. Ekranda bir kod ya da yanıp sönen ışık var mı?
3. İptali denediğinde gösterge yanıp söndü mü?
4. İçeride su kaldı mı?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Panel ışıklarının anlamı [Arçelik bulaşık makinesi sembolleri ve anlamları](/blog/arcelik-bulasik-makinesi-sembolleri-ve-anlamlari/) sayfasında. Bil, gör, çağır.

---
title: "Vestel bulaşık makinesi resetleme nasıl yapılır"
description: "Vestel bulaşık makinesinde reset, kılavuzdaki adıyla programın iptali: Başlat tuşuna 3 saniye, yaklaşık 30 saniye tahliye. CL kilidi, F kodları ve servis."
slug: "vestel-bulasik-makinesi-resetleme"
date: "2026-10-23"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 2, küme C). Konu seçimi: origin/main'de vestel-bulasik-makinesi-resetleme yok, repoda "reset" geçen slug yok.
#   vestel-bulasik-makinesi-calismiyor / f2 / f5 / ff ayrı sorgular.
# Arama kanıtı (bu koşu, Google otomatik tamamlama hl=tr gl=tr): "vestel bulaşık makinesi" → 2. öneri "vestel bulaşık makinesi resetleme";
#   "vestel bulaşık makinesi resetleme" → "…bm 401", "…bm 4212", "…bm 301".
# GSC: https___www-5/6 "vestel bulaşık makinesi resetleme" 2 ve 3 gösterim (poz 41 ve 30), "vestel bulaşık makinesi nasıl resetlenir" 3 gösterim (poz 28): kendi sayfası yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile Vestel'in alan adından yeniden indirildi, HTTP 200, md5 yerel kopyayla aynı.
#  (A) BM 10502 X GI WIFI  https://statik.vestel.com.tr/webfiles/20263192_k.pdf  56 s.  md5 bdbd31789107cc96048ad674595fd6ff
#  (B) BM-401              https://static.vestel.com.tr/kullanimkilavuzlari/20218379-KK.pdf  46 s.  md5 ebe98e45d57fc21fc293e5c88ab47b8e
# Çocuk kilidi A s.38, B s.30 · program değiştirme / iptal / kapatma A s.39-40, B s.29 · hata kodları A s.49, B s.40 (sayfa = PDF sayfası).
# BİLEREK YAZILMAYANLAR: model numarasına özel tuş kombinasyonu (BM 4212/BM 301 kılavuzu incelenmedi) · fişi çekerek reset · F kodu silme hilesi
#   · pompa/kart teşhisi · fiyat/süre (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: vestel-bulasik-makinesi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu"]
steps:
  - "Ekranda CL varsa çocuk kilidi açıktır; kılavuzdaki kilit tuşlarına 3 saniye basarak kilidi kapat."
  - "Başlat / Beklet ya da Başla / Bekle tuşunu 3 saniye basılı tut; program iptal adımı başlar."
  - "Makinenin içindeki suyu yaklaşık 30 saniye boyunca tahliye etmesini bekle, Bitiş ya da Bitti ışığı yanınca iptal tamamdır."
  - "Yeni programı seç ve Başlat / Beklet tuşuyla başlat."
  - "Ekranda F2 varsa makineyi kapatıp aç, programı iptal et; hata sürerse servis."
  - "Program bitince makineyi Açma / Kapama ile kapat, fişi çek ve su musluğunu kapat."
  - "İptal ve kontrollerden sonra da program başlamıyor ya da bir F kodu tekrar ediyorsa Vestel yetkili servisine haber ver."
faq:
  - q: "Vestel bulaşık makinesinde reset tuşu var mı?"
    a: "BM 10502 X GI WIFI ve BM-401 kılavuzlarında Reset adında bir tuş yok. Karşılığı programın iptali: Başlat / Beklet (BM-401'de Başla / Bekle) tuşu 3 saniye basılı tutulur, makine içindeki suyu yaklaşık 30 saniye boyunca tahliye eder."
  - q: "Vestel bulaşık makinesi BM 401 resetleme nasıl yapılır?"
    a: "BM-401 kılavuzuna göre Başla / Bekle tuşunu 3 saniye boyunca basılı tut. 3 saniye sonra program iptal adımı başlar ve makine 30 saniye boyunca içindeki suyu tahliye eder. Bitti lambası yandığında program iptal edilmiş olur."
  - q: "Elektrik gidip gelince program sıfırlanır mı?"
    a: "Hayır. BM 10502 X GI WIFI kılavuzuna göre yıkama sırasında makinenin kapağı açılırsa ya da gücü kesilirse, kapak kapatıldığında ya da güç geri geldiğinde program kaldığı yerden devam eder. Programı bitirmek için iptal adımını kullan."
  - q: "Vestel bulaşık makinesi resetleme yapmıyor, neden?"
    a: "Çocuk kilidi açık olabilir. BM 10502 X GI WIFI'da kilit devredeyken ekranda CL görünür ve tüm tuşlar devre dışıdır. BM-401'de kilit Kalan zaman göstergesi üzerindeki + ve - tuşlarına aynı anda 3 saniye basılarak açılıp kapanır. Kilit kapandıktan sonra iptali tekrarla."
  - q: "F2 hatasında resetleme işe yarar mı?"
    a: "Vestel'in tablosu F2 için bunu öneriyor: BM-401'de makineyi kapatıp açmak ve program iptal komutunu devreye sokmak, BM 10502 X GI WIFI'da programı iptal etmek. Sebep su tahliye hortumu ya da filtrelerin tıkanması olabilir; hata sürerse servis."
images:
  coverAlt: "Modern bir mutfakta ankastre, kapağı kapalı bir bulaşık makinesi"
  steps:
    - "Çizim: solda bulaşık makinesi, sağda panel ekranındaki uyarı"
    - "Çizim: solda bulaşık makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda bulaşık makinesi, sağda bekleme süresi için saat"
    - "Çizim: solda bulaşık makinesi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda bulaşık makinesi, sağda telefon ve kullanım kılavuzu"
    - "Çizim: solda bulaşık makinesi, sağda prizden çekilen fiş"
    - "Çizim: solda bulaşık makinesi, sağda telefon ve kullanım kılavuzu"
---

Program yarıda kaldı, ekranda bir F kodu var ya da yanlış programı başlattın; Vestel bulaşık makinesini "resetlemek" istiyorsun. Vestel'in kılavuzlarında **Reset adında bir tuş yok.** Karşılığı **programın iptali** ve yolu iki kılavuzda da aynı: **Başlat / Beklet tuşunu 3 saniye basılı tutmak.** Bu yazıda Vestel'in BM 10502 X GI WIFI ve BM-401 kullanma kılavuzlarından sıfırlamanın sırasını, ne kadar sürdüğünü, onu engelleyen çocuk kilidini ve F kodlarıyla ilişkisini çıkardık. Tuş adları modele göre değişir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** CL yanıyorsa önce çocuk kilidini kapat. Başlat / Beklet'e 3 saniye bas; makine suyu yaklaşık 30 saniye tahliye eder, Bitiş ışığı yanınca iptal tamam. Sonra yeni programı seç ve başlat. Elektrik kesintisi programı sıfırlamaz. F kodu tekrar ediyorsa Vestel yetkili servisi.

## İki modelde iptal

| | BM 10502 X GI WIFI | BM-401 |
|---|---|---|
| **Tuş** | Başlat / Beklet, 3 saniye | Başla / Bekle, 3 saniye basılı |
| **Ne olur** | Bitiş ışığı yanıp söner, su ~30 saniye tahliye | 3 saniye sonra iptal adımı, 30 saniye tahliye |
| **Bitti işareti** | Bitiş ışığı | Bitti lambası |
| **Çocuk kilidi** | Çocuk Kilidi tuşu, 3 saniye; ekranda CL | + ve - tuşları birlikte, 3 saniye; CL |

## Adım adım: Vestel bulaşık makinesini sıfırlama

**1. Çocuk kilidini kapat.** BM 10502 X GI WIFI kılavuzuna göre kilit, **Çocuk Kilidi tuşuna 3 saniye** basılı tutulunca devreye girer, ekranda **"CL"** görünür ve **kilit etkinken tüm tuşlar devre dışıdır.** Yani kilit açıkken iptal tuşu da çalışmaz. BM-401'de kilit **Kalan zaman göstergesi üzerindeki + ve - tuşlarına aynı anda 3 saniye** basılarak açılır; kapatmak için yine aynı iki tuşa 3 saniye basılır ve **"CL" iki kere yanıp söner.**

**2. Başlat / Beklet'e 3 saniye.** BM 10502 X GI WIFI'da program çalışırken iptal etmek için **Başlat / Beklet tuşuna 3 saniye** basılır. BM-401'de tarif aynı: **Başla / Bekle tuşunu 3 saniye boyunca basılı tut.** Kısa basmak programı yalnızca durdurur; iki kılavuzda da kısa basış "program değiştirme" adımının başı.

**3. Tahliyeyi bekle.** BM 10502 X GI WIFI'da iptal sırasında **Bitiş ışığı yanıp söner** ve makine içindeki suyu **yaklaşık 30 saniye boyunca** tahliye eder. BM-401'de **3 saniye sonra program iptal adımı başlar,** makine **30 saniye boyunca** içindeki suyu tahliye eder ve **Bitti lambası yandığında** program iptal edilmiş olur. Bu sırada kapağı açma; kılavuzlar Bitti lambası yanmadan kapıyı açmamanı istiyor.

**4. Yeni programı seç.** Program durduktan sonra program seçim tuşlarıyla istediğin programı seç ve **Başlat / Beklet** tuşuna basarak başlat. Program iptal edilmeden yalnızca değiştirilmek isteniyorsa iki kılavuzun yolu: Başlat / Beklet'e bir kez bas, program durunca yeni programı seç, tekrar bas. BM 10502 X GI WIFI'ın notuna göre bu durumda **yeni seçilen program eski programın yerine devam eder.**

**5. Ekranda F2 varsa.** Vestel'in hata tablosunda sıfırlamanın doğrudan çözüm olarak geçtiği kod **F2,** yani makinenin atık suyu boşaltamaması. Sebep olarak **su tahliye hortumu ve filtrelerin tıkanmış olabileceği** yazıyor. BM-401'in çözümü **makineyi kapatıp açmak ve program iptal komutunu devreye sokmak,** BM 10502 X GI WIFI'ınki **programı iptal etmek;** hata sürerse servis. Ayrıntı [Vestel bulaşık makinesi F2 hatası](/blog/vestel-bulasik-makinesi-f2-hatasi/) yazısında. Diğer kodlarda sıfırlama çözüm değil: **F1** taşma alarmı için makineyi ve musluğu kapatıp servise başvurmak, **F3** sürekli su alma için musluğu kapatıp servis, **F8** ısıtıcı hatası için doğrudan servis gerekiyor.

**6. Program bitince düzgün kapat.** BM 10502 X GI WIFI kılavuzuna göre program sonlandığında ve bitiş ışığı yandığında makineyi **Açma / Kapama tuşuyla kapat, fişi prizden çek, su musluğunu kapat.** BM-401'de makine, Bitti lambası yandıktan sonra **Açma / Kapama ve program seçme butonuyla** kapatılır.

**7. Olmuyorsa servis.** Kilit kapalı, iptal yapıldı, program yine başlamıyor ya da aynı F kodu geri geliyorsa ev ayar turu bitmiştir; **Vestel yetkili servisine** haber ver.

## Elektrik kesintisi sıfırlamaz

Fişi çekip takmak ya da sigortayı indirip kaldırmak bir sıfırlama yolu değil. BM 10502 X GI WIFI kılavuzunun notu açık: yıkama sırasında **makinenin kapağı açılırsa ya da gücü kesilirse,** kapak kapatıldığında ya da güç geri geldiğinde **program kaldığı yerden devam eder.** Programı gerçekten bitirmek için 3 saniyelik iptal adımını kullan.

## Ne zaman servis

- Kilit kapalıyken de tuşlar tepki vermiyorsa
- İptalden sonra su tahliye edilmiyor ya da F2 geri geliyorsa
- F1, F3 ya da F8 görünüyorsa

⛔ **Kendin-çöz sınırı burada biter.** Tuşlar, çocuk kilidi, filtreler ve su musluğu sende; gövdenin içi, pompa, ısıtıcı ve elektronik kart yetkili servisin.

## Servisi aramadan önce kısa özet

1. Makinenin modeli ne (BM ile başlayan kod)?
2. Ekranda CL ya da bir F kodu var mı?
3. 3 saniyelik iptalden sonra Bitiş ışığı yandı mı?
4. İçeride su kaldı mı?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bütün kodlar [Vestel bulaşık makinesi hata kodları](/blog/vestel-bulasik-makinesi-hata-kodlari/), çalışmama belirtileri [Vestel bulaşık makinesi çalışmıyor](/blog/vestel-bulasik-makinesi-calismiyor/) yazısında. Bil, gör, çağır.

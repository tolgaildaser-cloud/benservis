---
title: "Alarko kombi E04 hatası: tesisat suyu az"
description: "Alarko kombide E04 düşük tesisat suyu basıncı demek. Info menüsünden basıncı okuma, 1.2 bar'a doldurma ve servise ne zaman gerek olduğu."
slug: "alarko-kombi-e04-hatasi"
date: "2026-10-03"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, kombi + fırın koşusu). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile Alarko Carrier'ın kendi alan adından indirildi, HTTP 200.
# Belgenin yeri web aramasıyla bulundu; hiçbir cümle arama sonucundan, forumdan ya da servis sitesinden alınmadı. Okuma pdftotext -layout, sayfa = PDF sayfası (basılı sayfa no = PDF sayfası + 1).
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-protherm-alarko-sprint/kombi-alarko-srs-kk.pdf
#  (A) Alarko "SERADENS SUPER SRS 20/24/28/36 PREMİKS YOĞUŞMALI KOMBİ MONTAJ ve KULLANIM KILAVUZU" Kod No A.1.4.8, Rev. 31/10/2024, 59 s., md5 1d7022ad1322561828a456f621227d10
#      https://www.alarko-carrier.com.tr/Data/Files/Dokumanlar/kullanim-kilavuzu/kombi-alarko-srs-kk.pdf
#      s.18-19 2.9: "E04 Düşük Tesisat Suyu Basıncı Hatası, ekranda sürekli olarak yanarsa; • Kullanıcı bilgilendirme menüsünü kullanarak kalorifer devresindeki su basıncını kontrol edin (Bölüm 2.6'da nasıl kontrol edileceği anlatılmıştır). • Basınç değeri 1.2 bar'a ulaşıncaya kadar sistemi su ile doldurun (Bölüm 2.7). • Kombi otomatik olarak yeniden çalışacaktır. Problem devam ederse yetkili servisi arayın."
#      s.18 "Aşağıdaki işlemler yapıldıktan sonra problem tekrar meydana gelirse, yetkili servisi arayın."
#      s.14 2.6: "Bu menüye kombi KAPALI konumdayken bile girebilirsiniz." · "(2) numaralı (Şekil 1) düğmeye 2 saniye süresince basın." · "ı00: Kalorifer suyu basıncı" · "... kullanıcı bilgilendirme düğmesine 2 saniye süreyle basmanız veya 30 saniye beklemeniz yeterlidir."
#      s.14 2.7 DİKKAT: "Sistem 1.2 bar basınçtaki su ile doldurulmalıdır." · "Doldurma işlemi kombi soğuk ve kapalıyken gerçekleştirilmelidir." · "kombinin sol alt tarafında bulunan doldurma musluğu (D) aracılığıyla doldurma işlemi yapılabilir" · "Doldurma işlemine ekrandaki basınç değeri "b1.2" olarak görünene kadar devam edilmelidir." · menü 30 sn'de kapanırsa düğmeye tekrar 2 sn basılır.
#      s.15: "Eğer su basıncı belirli bir değerin altına düşerse ekranda E04 arızası görünür." · "Basınç 1.2 bar değerine ulaşıncaya kadar sistemi doldurmaya devam edin, bu değere ulaşıldığında doldurma musluğunu kapatın." · "Kalorifer sistemin aşırı doldurulması E47 hatasına yol açar"
#      s.15 DİKKAT: "Sistemin 2.3- 2.4 bar soğuk su ile yüklenmesi, kalorifer sistemi ısındığında E47 hatasına yol açabilir. ... su soğukken (oda sıcaklığında veya daha düşükken) sistem basıncınızın 1.2 bar olduğundan her zaman emin olun."
#      s.17 "Eğer ekranda (7) E04 arızası görünüyorsa bu, kombide su olmadığına işaret eder. Böyle bir durumda sistemi "Bölüm 2.7"de tarif edildiği şekilde su ile doldurun." · s.13 panel: düğme (1) çalışma konumu / OFF, "Kombi hata durumunda sıfırlama (reset) düğmesi olarak işlev görür."
#      s.19 "E46 Basınç Sensörü Arızası, ekranda sürekli olarak yanarsa; (1) düğmesine 2 saniye süresince basarak sistemi yeniden kurun, hata devam ederse yetkili servisi arayın."
# BİLEREK YAZILMAYANLAR: su kaçağı/genleşme tankı/emniyet ventili teşhisi (belgede E04 için yok) · diğer Alarko modellerine (Serena, Trendy vb.) genelleme — yalnız Seradens Super kılavuzu
#   · E04'ü reset düğmesiyle silme (belge E04 için reset vermiyor, "Kombi otomatik olarak yeniden çalışacaktır" diyor) · kapak açma · gaz/elektrik müdahalesi · fiyat.
# Alıntı denetim tablosu: alarko-kombi-e04-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Kombiyi kapalı (OFF) konuma al ve soğumasını bekle."
  - "Bilgilendirme (info) düğmesine 2 saniye basarak ekranda ı00 ve basınç değerini görüntüle."
  - "Kombinin sol alt tarafındaki doldurma musluğunu aç."
  - "Ekranda b1.2 görünene kadar doldurmaya devam et; menü kapanırsa info düğmesine yeniden 2 saniye bas."
  - "Basınç 1.2 bar'a gelince doldurma musluğunu kapat."
  - "Kombiyi istediğin çalışma konumuna al; E04 kalktığında kombi kendiliğinden yeniden çalışır."
  - "E04 tekrar ederse ya da basınç kısa sürede yine düşüyorsa Alarko yetkili servisini ara."
faq:
  - q: "Alarko kombide E04 ne demek?"
    a: "Alarko'nun Seradens Super kılavuzunda E04 'Düşük Tesisat Suyu Basıncı Hatası' olarak geçiyor. Kılavuz, su basıncı belirli bir değerin altına düşünce ekranda E04 göründüğünü ve bunun kombide su olmadığına işaret ettiğini yazıyor."
  - q: "Basınç kaç bar olmalı?"
    a: "Seradens Super kılavuzuna göre sistem 1.2 bar basınçtaki su ile doldurulmalı; doldurma ekrandaki değer b1.2 olarak görünene kadar sürdürülüyor. Kılavuz bu değerin su soğukken, yani oda sıcaklığında ya da daha düşükken ölçülmesini istiyor."
  - q: "Fazla su basarsam ne olur?"
    a: "Alarko'ya göre kalorifer sisteminin aşırı doldurulması E47 hatasına yol açar. Kılavuzun örneği: sistem 2.3-2.4 bar soğuk suyla yüklenirse kalorifer ısındığında E47 çıkabilir. Bu yüzden doldurmayı 1.2 bar'da bırakmak gerekiyor."
  - q: "E04'ü reset düğmesiyle silebilir miyim?"
    a: "Kılavuz E04 için reset vermiyor. Talimat basıncı kontrol edip 1.2 bar'a doldurmak; bunun ardından kombi otomatik olarak yeniden çalışıyor. Problem devam ederse yetkili servisin aranması isteniyor. Ekranda E46 (basınç sensörü arızası) varsa kılavuz o kod için düğmeye 2 saniye basarak yeniden kurmayı gösteriyor."
images:
  coverAlt: "Duvardaki beyaz bir kombinin ekranında düşük basınç uyarısı, altında doldurma musluğuna uzanan bir el"
---

Kombi birden durdu ve ekranda **E04** yanıyor. Alarko'nun Seradens Super kombi kılavuzu bu kodu açıkça tanımlıyor: **"E04 Düşük Tesisat Suyu Basıncı Hatası"**. Kılavuzun başka bir yerindeki cümle daha da sade: E04, **kombide su olmadığına işaret eder.** Çözüm de kullanıcıya bırakılmış: basıncı ekrandan okuyup 1.2 bar'a kadar su doldurmak. Bu yazı Seradens Super SRS 20/24/28/36 kılavuzuna dayanıyor; başka bir Alarko modelin varsa düğme numaraları farklı olabilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kombiyi kapat ve soğumasını bekle → info düğmesine 2 saniye bas, ı00 satırında basıncı oku → kombinin sol altındaki doldurma musluğunu aç → ekranda b1.2 görününce kapat. E04 kalkınca kombi kendiliğinden çalışır. Tekrar ederse yetkili servis.

## Basıncı ekrandan okuma

Seradens Super'de ayrı bir manometreye bakmak gerekmiyor; basınç **kullanıcı bilgilendirme (info) menüsünde.** Menüye girmek için panelde 2 numaralı düğmeye **2 saniye** basılıyor. İlk satır **ı00: kalorifer suyu basıncı.** Kılavuza göre bu menüye **kombi kapalıyken bile** girilebiliyor; menü 30 saniye sonra kendiliğinden kapanıyor ya da düğmeye yeniden 2 saniye basınca çıkılıyor.

## Adım adım: evde denenecekler

**1. Kombiyi kapat, soğusun.** Alarko'nun doldurma bölümündeki uyarı açık: **doldurma işlemi kombi soğuk ve kapalıyken gerçekleştirilmelidir.** Çalışma konumu düğmesiyle (panelde 1 numara) kombiyi OFF konumuna al.

**2. Basıncı oku.** Info düğmesine 2 saniye bas; ekranda **ı00** ile basınç değeri dönüşümlü görünür. E04 için kılavuzun ilk maddesi de bu: kullanıcı bilgilendirme menüsünden **kalorifer devresindeki su basıncını kontrol et.**

**3. Doldurma musluğunu aç.** Seradens Super'de doldurma **kombinin sol alt tarafındaki doldurma musluğu** (kılavuzun alttan görünüm şeklinde D harfi) ile yapılıyor.

**4. Ekranı izle.** Kılavuzun talimatı: doldurmaya **ekrandaki basınç değeri b1.2 olarak görünene kadar** devam et. Menü 30 saniyede kapanırsa yeterince su dolduğundan emin olmak için info düğmesine **tekrar 2 saniye** bas ve değeri izle.

**5. 1.2 bar'da kapat.** Basınç 1.2 bar'a ulaşınca **doldurma musluğunu kapat.** Fazlası sorun çıkarır: Alarko'ya göre **kalorifer sisteminin aşırı doldurulması E47 hatasına yol açar.**

**6. Kombiyi çalışma konumuna al.** Kılavuz E04 için üçüncü maddede şunu söylüyor: **kombi otomatik olarak yeniden çalışacaktır.** Çalışma konumu düğmesiyle istediğin konumu (yaz, kış ya da sadece ısıtma) yeniden seç ve ekranda yanıp sönen bir kod kalmadığına bak.

**7. Tekrar ederse servis.** E04 satırının son cümlesi: **problem devam ederse yetkili servisi arayın.** Kod bölümünün başındaki genel kural da aynı: bu işlemler yapıldıktan sonra problem tekrar meydana gelirse yetkili servis.

## Neden "soğukken 1.2 bar"?

Alarko kılavuzu bu ayrıntıyı ayrıca uyarıyor: kalorifer sisteminin basıncı **ısınan sudan ötürü yükselir.** Sistem soğukken 2.3-2.4 bar'a doldurulursa, kalorifer ısındığında **E47** (yüksek tesisat suyu basıncı) hatası çıkabilir. Bu yüzden ölçüm ve doldurma su soğukken, oda sıcaklığında ya da daha düşükken yapılıyor ve hedef her zaman 1.2 bar. Fazla doldurduysan ne yapılacağını kardeş yazımız [Alarko kombi E47 hatası](/blog/alarko-kombi-e47-hatasi/) anlatıyor.

Ekranda E04 değil **E46** görüyorsan durum farklı: kılavuzda E46 **basınç sensörü arızası.** Bu kod için 1 numaralı düğmeye 2 saniye basarak sistemi yeniden kurmak gösteriliyor; hata devam ederse yetkili servis.

## Ne zaman servis

- Doldurduğun hâlde E04 kısa sürede geri geliyorsa.
- Doldurma musluğunu bulamıyorsan ya da elle açılmıyorsa.
- E46 düğmeyle yeniden kurulduktan sonra da sürüyorsa.

Basıncın neden tekrar tekrar düştüğünü markadan bağımsız olarak [kombi basınç düşüyor](/blog/kombi-basinc-dusuyor/) yazısında, doğru basınç aralığını [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) yazısında anlattık. Diğer kodlar için [kombi arıza kodları](/blog/kombi-ariza-kodlari/) listesine bak.

⛔ Kombinin kapağının arkası, gaz ve elektrik bağlantıları bu rehberin konusu değil; orası yetkili servisin işi.

Belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren. Bil, gör, çağır.

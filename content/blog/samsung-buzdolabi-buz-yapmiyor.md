---
title: "Samsung buzdolabı buz yapmıyor: ne yapmalı?"
description: "Samsung buzdolabı buz yapmıyorsa Samsung'un sırası: buz işlevi, kilit, ilk 24 saat, dondurucu ayarı, buz sepeti ve su bağlantısı."
slug: "samsung-buzdolabi-buz-yapmiyor"
date: "2026-09-29"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144). Tüm belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200.
# Yerel kopya: blog-taslaklar/kaynak-samsung-buzdolabi-sprint/2026-09-29/ (MD5-2026-09-29.txt). PDF'ler pdftotext -layout; sayfa = basılı sayfa.
# #88: bilgiler YALNIZ Samsung Türkiye'nin kendi belgelerinden. Web araması kullanılmadı; destek sayfasının yeri Samsung TR destek sayfalarındaki iç linkten.
# (S14) Samsung TR destek "Samsung buzdolabımdaki dondurucunun buz yapıcısı neden çalışmıyor?" (Son Güncelleme 2026-08-21; örnek model RS90F64)
#      https://www.samsung.com/tr/support/home-appliances/why-is-the-ice-maker-on-my-fridge-freezer-not-working/  md5 7594acb63924b85d0065a91439ce67dd (HTML, dinamik)
#      "Buzdolabının ekranı üzerinden buz yapıcı işlevinin etkinleştirildiğinden emin olun. Kapalıysa buz yapıcı çalışmayacaktır."
#      "Çocuk Kilidinin devre dışı bırakıldığından emin olun ... Su/Kilit (Water/Lock) düğmesini (genellikle 3 saniye) basılı tutarak devre dışı bırakabilirsiniz."
#      Hava: "Her rafta maksimum %80 doluluk oranı olmasına dikkat edin." / "Dondurucu sıcaklığının -18°C veya daha soğuk bir değere ayarlanması önerilir."
#      Kapı: "Buzdolabının kapısı düzgün kapatılmazsa buz yapıcı doğru şekilde çalışmayacaktır." / denge.
#      Su (yalnızca sebil modelleri): ok işareti buzdolabını göstermeli; "Su hortumunda ... tıkanıklık, bükülme veya hasar"; "Su vanasının açık olduğunu"; test: buz sepetini çıkar, buz yapıcının altındaki düğmeye bas, "Normal şartlarda buz tepsisi birkaç dakika içinde suyla dolar."
#      Tank: "Boş bir tank buz yapıcının buz üretmesini engelleyecektir." Filtre: "her altı ayda bir"; "filtre göstergesi kırmızıya döner ve sesli bir alarm çalar."
#      Buz: "Buz kabını çıkarın ve biriken buzu temizleyin." ; sıfırlama: "kullanım kılavuzunuza başvurun" / "24 saate kadar zaman tanıyın." ; "düzenli olarak buz almak iyi bir fikirdir."
# (E) Samsung TR kılavuz RS5000FC, 80 s.  md5 f7d1783deeb1a93b33b9daf7ca8effa8
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=RS70F65QET&CttFileID=11343950&CDCttType=UM&VPath=UM%2F202603%2F20260327111957234%2FWeb_DA68-04852P-01_SBS_FSR_RS5000FC_UX_TR.pdf
#      s.65 "Buz yapıcı buz yapmıyor": "Buz yapıcı yeni kuruldu." → "24 saat beklemelisiniz." / "Dondurucu sıcaklığı çok yüksek." → "-18 °C (0 °F) veya -20 °C (-4 °F) altında ayarlayın." / "Verici paneli Kilidi etkin." → "Dağıtıcı paneli kilidini devre dışı bırakın." / "Buz yapıcı kapalı." → "Buz yapıcıyı açın." / "(yaklaşık 3 hafta)" → "buz kabını boşaltın ve buz yapıcıyı kapatın." / "Buz kovasının doğru yerleştirildiğinden emin olun."
#      s.65 "Buz gelmiyor": "Su hattı düzgün bağlanmamıştır veya su beslemesi açık değildir." ; "Yalnızca Samsung tarafından sağlanan veya onaylanan filtreleri kullanın."
# (F) Samsung TR kılavuz RF9000D (RF65D**/RF71D**), 88 s.  md5 b09495aa6935267bd5147dbda8b1d1ad
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=RF65DG90BESL&CttFileID=11400320&CDCttType=UM&VPath=UM%2F202604%2F20260430105046283%2FOID74791-05_T-TYPE_RF9000D_TR_260424.pdf
#      s.71: aynı tablo + "Buz kepçesi veya tutucu buz sepetinde kalır." → "Lütfen buz kepçesini ön tutucuda bırakın."
#      s.53-54: "Buz sepetini düzenli olarak boşaltın." / "Buz sepeti doğrudan buz yapıcının altında değilse buz yapıcı buz yapmayabilir." / elektrik kesintisinde eriyen buz → sepeti boşaltın.
# (C) Samsung TR kılavuz RT6300C, 72 s. md5 e366feed0f8f0864a2c0acc5f72434f1 (URL KAYNAK dosyasında) — s.53: "Soğuk hava çıkışının tıkanmadığından emin olun." / "Buzdolabının arkasındaki su hattının eğilmediğinden veya bükülmediğinden emin olun."
# BİLEREK YAZILMAYANLAR: buz yapıcı sıfırlama tuş kombinasyonu (S14 "kılavuzunuza başvurun" diyor, belge vermiyor); su filtresi değişim tarifi (parça değişimi, #31 — yalnız gösterge bilgisi verildi); su hattı söküm/onarım; C s.53'teki kablo konektörü kontrolü (kablo muhafazası erişimi, servise bırakıldı); buz yapıcının çözülmesi (S14 "gerekebilir" diyor, yöntem vermiyor).
# Alıntı denetim tablosu: samsung-buzdolabi-buz-yapmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika (ilk buz için bekleme hariç)"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Buzdolabının kullanım kılavuzu"]
steps:
  - "Buzdolabının ekranından buz yapıcı işlevinin açık olduğunu kontrol et; kapalıysa aç."
  - "Çocuk kilidi ya da dağıtıcı panel kilidi açıksa devre dışı bırak."
  - "Buzdolabı yeni kurulduysa ilk buz için 24 saat bekle."
  - "Dondurucu sıcaklığını -18 °C ya da daha soğuk bir değere ayarla."
  - "Dondurucuyu aşırı doldurma, soğuk hava çıkışının önünü aç ve kapının tam kapandığını kontrol et."
  - "Buz sepetinin buz yapıcının tam altına doğru yerleştiğini, buz kepçesinin ön tutucuda durduğunu kontrol et."
  - "Buz yapıcı uzun süre kullanılmadıysa buz sepetini çıkar, birikmiş ve yapışmış buzu boşalt."
  - "Su bağlantılı modelde su vanasının açık olduğunu ve buzdolabının arkasındaki hortumun bükülmediğini kontrol et."
faq:
  - q: "Samsung buzdolabı neden buz yapmaz?"
    a: "Samsung Türkiye'nin destek sayfası ve kılavuzları şu nedenleri sayıyor: buz yapıcı işlevinin kapalı olması, çocuk kilidi ya da dağıtıcı panel kilidinin açık olması, buzdolabının yeni kurulmuş olması, dondurucu sıcaklığının çok yüksek olması, hava kanalının tıkanması, kapının tam kapanmaması, buz sepetinin yanlış yerleşmesi, uzun süre kullanılmayan buzluğun sıkışması, su bağlantısı ya da su filtresi sorunları."
  - q: "Yeni aldığım Samsung buzdolabı ne zaman buz yapar?"
    a: "Samsung'un RS5000FC ve RF9000D kılavuzlarına göre buz yapıcı yeni kurulduysa buzdolabının buz yapması için 24 saat beklemek gerekir."
  - q: "Buz yapıcı çalışıyor gibi ses çıkarıyor ama buz yok. Neden?"
    a: "Samsung kılavuzuna göre buz yapıcı işlevi açık ama buzdolabına su beslemesi bağlı değilse buz yapıcı ses çıkarır. Su bağlantısı yoksa Samsung buz yapıcının kapatılmasını istiyor."
  - q: "Su filtresi buz yapımını etkiler mi?"
    a: "Samsung'a göre tıkalı ya da kullanım ömrünü tamamlamış bir su filtresi buz yapıcıya giden su akışını engelleyebilir. Samsung filtrenin her altı ayda bir değiştirilmesini öneriyor; değişim zamanı geldiğinde filtre göstergesi kırmızıya döner. Samsung yalnız kendi sağladığı ya da onayladığı filtrelerin kullanılmasını istiyor."
  - q: "Buz yapıcıyı nasıl sıfırlarım?"
    a: "Samsung'un destek sayfası, görünür bir tıkanıklık yoksa buz yapıcının sıfırlanmasını öneriyor ama tarifi vermiyor; kendi modelinin kullanım kılavuzuna bakılmasını istiyor. Sıfırlamadan sonra sistemin yeniden buz üretmesi 24 saate kadar sürebilir."
images:
  coverAlt: "Açık bir dondurucunun üst bölmesinde buz yapıcının altında duran boş, şeffaf buz sepeti ve önündeki buz kepçesi"
---

Buzdolabının buz yapıcısı buz üretmiyor, buz sepeti boş kalıyor. Samsung Türkiye'nin destek sayfası bunun birkaç nedeni olabileceğini yazıyor ve iki örnek veriyor: **"tıkalı bir su hattı veya etkinleştirilmiş Çocuk Kilidi gibi birkaç faktör buna neden olabilir."** Bu yazıda Samsung'un destek sayfasındaki sırayı, Türkçe kullanım kılavuzlarının "Su/buz" sorun giderme tablosuyla birlikte açıyoruz. Bu rehber **otomatik buz yapıcısı olan** Samsung modelleri içindir; ekran ve düğmeler modele göre değişir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce ekran: buz yapıcı açık mı, kilit kapalı mı? Sonra zaman ve soğukluk: yeni kurulduysa 24 saat bekle, dondurucu -18 °C ya da daha soğuk olsun. Sonra yer: dondurucu aşırı dolu mu, buz sepeti buz yapıcının tam altında mı, içinde yapışmış buz var mı? Su bağlantılı modelde vana açık, hortum bükülmemiş mi? Hepsi tamamsa → Samsung yetkili servisi.

## Samsung'a göre nedenler

RS5000FC ve RF9000D kılavuzlarının "Buz yapıcı buz yapmıyor" satırı:

| Olası neden | Samsung'un çözümü |
|---|---|
| Buz yapıcı yeni kurulmuş | Buz yapması için 24 saat bekle |
| Dondurucu sıcaklığı çok yüksek | Sıcak ortamda dondurucuyu -18 °C ya da -20 °C altına ayarla |
| Dağıtıcı panel kilidi etkin | Kilidi devre dışı bırak |
| Buz yapıcı kapalı | Buz yapıcıyı aç |
| Buzluk uzun süre (yaklaşık 3 hafta) kullanılmamış, buz sıkışmış | Uzun süre kullanmayacaksan buz kabını boşalt, buz yapıcıyı kapat |
| Buz sepeti düzgün yerleşmemiş | Sepetin doğru yerleştiğinden emin ol |
| Buz kepçesi ya da tutucu buz sepetinde kalmış (RF9000D) | Buz kepçesini ön tutucuda bırak |

## Adım adım: evde denenecekler

**1. Buz işlevini kontrol et.** Samsung'un ilk talimatı: buzdolabının ekranından **buz yapıcı işlevinin açık olduğundan** emin ol. Kapalıysa buz yapıcı çalışmaz. Bazı modellerde ekrandan buz türü (küp ya da kırık buz) de seçilir.

**2. Kilidi kapat.** Samsung'a göre **Çocuk Kilidi** açıkken buz pınarı ve diğer kontroller devre dışı kalır. Destek sayfasındaki örnek modelde kilit, **Su/Kilit düğmesini genellikle 3 saniye basılı tutarak** kapatılıyor. RS5000FC kılavuzu da dağıtıcı panel kilidi açıksa kapatılmasını istiyor. Tuşun adı ve süresi modele göre değişebilir; kendi kılavuzuna bak.

**3. İlk 24 saati bekle.** Samsung'un kılavuzlarına göre buz yapıcı yeni kurulduysa buzdolabının buz yapması için **24 saat beklemek** gerekir.

**4. Dondurucuyu soğut.** Samsung, dondurucu sıcaklığının **-18 °C ya da daha soğuk** bir değere ayarlanmasını öneriyor. Kılavuzlara göre ortam sıcaksa dondurucu -18 °C ya da -20 °C'nin altına ayarlanmalı.

**5. Havayı ve kapıyı kontrol et.** Samsung'a göre dondurucunun aşırı doldurulması ya da hava kanalının tıkanması iç sıcaklığı artırır ve buz verilmesini engelleyebilir. Yiyecekleri hava kanalını kapatmayacak şekilde yeniden düzenle; Samsung **her rafta en fazla %80 doluluk** öneriyor. RT6300C kılavuzu da soğuk hava çıkışının tıkanmamasını istiyor. Samsung'a göre kapı düzgün kapanmazsa buz yapıcı doğru çalışmaz.

**6. Buz sepetine bak.** RF9000D kılavuzuna göre **buz sepeti doğrudan buz yapıcının altında değilse buz yapıcı buz yapmayabilir.** Sepeti buz yapıcının altına, kılavuzdaki işarete göre doğru yönde yerleştir. Aynı kılavuz buz kepçesinin sepetin içinde değil, **ön tutucuda** bırakılmasını istiyor.

**7. Sıkışan buzu boşalt.** Samsung'a göre buz yapıcı bir süre kullanılmadıysa buz küpleri birleşip donarak mekanizmayı tıkayabilir; kılavuzlar bu süreyi **yaklaşık 3 hafta** olarak veriyor. **Buz kabını çıkar ve biriken buzu temizle.** Elektrik kesintisinde sepetteki buz eriyip suya dönüştüyse RF9000D kılavuzu sepetin boşaltılmasını istiyor; aksi hâlde su yeniden donunca sepet kırılabilir.

**8. Su bağlantısına bak.** Bu adım yalnız **su bağlantılı (sebilli)** modeller içindir. Samsung, su vanasının açık olduğunun ve su hortumunda **tıkanıklık, bükülme ya da hasar** olup olmadığının kontrol edilmesini istiyor. RT6300C kılavuzu da buzdolabının arkasındaki su hattının eğilmemiş ya da bükülmemiş olmasını istiyor. Bu kontrol gözle yapılır; hortumu sökme.

## Su tankı, su filtresi ve sıfırlama

- **Su tankı:** Samsung'a göre içme suyu ve buz yapıcı için su tankı kullanan modellerde **boş bir tank buz üretimini engeller.** Tankın dolu olduğundan emin ol.
- **Su filtresi:** Tıkalı ya da ömrünü tamamlamış bir su filtresi buz yapıcıya giden suyu engelleyebilir. Samsung filtrenin **her altı ayda bir** değiştirilmesini öneriyor; değişim zamanı geldiğinde **filtre göstergesi kırmızıya döner** ve sesli alarm çalar. Samsung yalnız kendi sağladığı ya da onayladığı filtrelerin kullanılmasını istiyor; onaylanmamış filtreler sızıntı yapabilir.
- **Su basıncı testi:** Samsung'un destek sayfasındaki örnek modelde buz sepeti çıkarılıp buz yapıcının altındaki düğmeye basıldığında buz tepsisi normal şartlarda **birkaç dakika içinde suyla dolar.** Modelinde bu düğme yoksa bu testi atla.
- **Sıfırlama:** Görünür bir tıkanıklık yoksa Samsung buz yapıcının sıfırlanmasını öneriyor ama tarifi vermiyor: **kendi kullanım kılavuzuna başvur.** Sıfırlamadan sonra sistemin yeniden buz üretmesi **24 saate kadar** sürebilir.

Samsung ayrıca ihtiyacın olmasa bile **düzenli olarak buz almayı** öneriyor; bu, buz birikmesini ve tıkanmayı önler.

## Ne zaman servis

| Durum | Kimin işi |
|---|---|
| Buz işlevi, kilit, bekleme, dondurucu ayarı, sepet, sıkışan buz | Senin, bu rehberdeki adımlar |
| Vana kapalı, hortum bükülmüş (gözle görülen) | Senin; bükülmeyi düzelt ya da vanayı aç |
| Su hattında hasar ya da sızıntı | Samsung servis merkezi ya da su hattını kuran kişi |
| Buz yapıcının içinde donma, kablo bağlantısı | Samsung yetkili servisi |
| Bütün adımlardan ve 24 saat beklemeden sonra hâlâ buz yok | Samsung yetkili servisi |

⛔ **Kendin-çöz sınırı burada biter.** Buz yapıcıyı sökme, kablo muhafazasını açma ve su hattını onarma servise aittir.

Dondurucu genel olarak yeterince soğumuyorsa [Samsung buzdolabı E09 hatası](/blog/samsung-buzdolabi-e09-hatasi/) ve [Samsung buzdolabı soğutmuyor](/blog/samsung-buzdolabi-sogutmuyor/) yazılarına bak. Buz yapıcıdan ses geliyorsa kardeş yazı: [Samsung buzdolabı ses yapıyor](/blog/samsung-buzdolabi-ses-yapiyor/). Markadan bağımsız kontrol listesi için [buzdolabı buz yapmıyor](/blog/buzdolabi-buz-yapmiyor/) yazısı var.

## Servisi aramadan önce iki dakikalık özet

1. Buzdolabı ne zaman kuruldu, ilk 24 saat geçti mi?
2. Ekranda buz yapıcı açık mı, kilit simgesi var mı?
3. Dondurucu kaç derecede?
4. Su bağlantılı mı, tanklı mı? Filtre göstergesi kırmızı mı?
5. Buz sepeti yerinde mi, içinde yapışmış buz var mı?

Bu beşine cevabın varsa servise somut bir tablo anlatabilirsin.

Buzdolabının modelini ve belirtisini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

---

**Kaynak künyesi.** Adımlar Samsung Türkiye'nin "Samsung buzdolabımdaki dondurucunun buz yapıcısı neden çalışmıyor?" destek sayfasından; "Su/buz" sorun giderme tablosu ve buz sepeti notları Samsung'un Türkçe kullanım kılavuzlarından (RS5000FC, RF9000D ve RT6300C serisi) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

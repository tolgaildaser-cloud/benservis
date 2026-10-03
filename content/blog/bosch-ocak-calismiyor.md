---
title: "Bosch elektrikli ocak çalışmıyor"
description: "Bosch cam seramik ya da indüksiyon ocak açılmıyor, göstergeler yanıp sönüyor ya da göz kendini kapatıyorsa Bosch kılavuzunun arıza tablosundaki kontroller."
slug: "bosch-ocak-calismiyor"
date: "2026-10-03"
category: "Fırın / Ocak"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu, ocak). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200, yönlendirme 0, application/pdf.
#   Adresler bosch-home.com.tr ürün sayfalarındaki technicalDocuments "user-manuals" bağlantısından. Web araması yok. Sayfa = PDF sayfası.
#  B1) Bosch PKE6..... / PKM6..BA.. cam seramik ocak, çok dilli (TR bölümü s.27-39)  https://media3.bsh-group.com/Documents/9001920407_I.pdf  52 s.
#      md5 d0b89c4a3392cb32ab7b1086a79920fb  (ürün: bosch-home.com.tr …/ankastre-ocaklar/PKE611BA2E)
#  B2) Bosch PUG...AA.. indüksiyonlu ocak, TR  https://media3.bsh-group.com/Documents/9001997309_F.pdf  12 s.  md5 d6bc506602cabe3ea3ed34546a9cbb6b  (ürün: …/PUG61KAA5E)
# Ana satırlar (B1 s.34-35 "10.1 Gösterge alanındaki uyarılar"):
#   "Yok" → "Elektrik beslemesi kesildi." / "1. Cihazın ev sigortasını kontrol ediniz." / "2. Diğer elektronik cihazlara da bakarak elektrik kesintisi olup olmadığını kontrol ediniz."
#   "Tüm göstergelerin yanıp sönmesi" → "Kumanda bölümü ıslak veya üzerinde nesneler mevcut." / "Kumanda bölümünü kurulayınız veya cismi kaldırınız."
#   "Kumanda bölümü alanında sıcak bir tencere mevcut." / "1. Tencereyi kaldırınız. 2. Bir süre bekleyiniz. 3. Herhangi bir dokunmatik alana dokununuz."
#   "Ocak çok uzun süre çalıştı ve otomatik olarak kapandı." / "Ocağı hemen tekrar açabilirsiniz."
#   "Ekranda "E" ile mesaj görüntülenir, örn. E0111." / "1. Cihazı kapatıp tekrar açınız." / "2. Mesaj yeniden görüntülenirse müşteri hizmetlerini arayınız."
#   B1 s.32 "6.2 Çocuk emniyetinin kapatılması" "[simge] tuşunu yakl. 4 saniye süreyle basılı tutunuz. Kilit kaldırılır." · "7.1 Otomatik kapatmanın ardından pişirmeye devam etme"
#   "1. Herhangi bir dokunmatik alana dokununuz." "2. Yeniden ayarlayınız." · B2 s.7 "Çocuk kilidi etkinleştirildi."
# BİLEREK YAZILMAYANLAR: hata sembollerinin glif adları (PDF'te metin değil, simge) · demo modu çözümü (sigorta kutusundan 30 sn ayırma; pano işi, numaralı adıma alınmadı)
#   · "cihazı devre planına uygun bağlayınız" (elektrik bağlantısı, servis işi) · E kodlarının tek tek anlamı (belgede yok) · fiyat.
# Alıntı denetim tablosu: bosch-ocak-calismiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kuru bez", "Ocağın kullanım kılavuzu"]
steps:
  - "Hiçbir gösterge yanmıyorsa ocağın bağlı olduğu ev sigortasını kontrol et."
  - "Diğer elektrikli cihazlara bakarak evde elektrik kesintisi olup olmadığını kontrol et."
  - "Tüm göstergeler yanıp sönüyorsa kumanda bölümünü kurula ya da üzerindeki cismi kaldır."
  - "Kumanda bölümünün yakınında sıcak tencere varsa tencereyi kaldır, bir süre bekle ve herhangi bir dokunmatik alana dokun."
  - "Ocak kilitliyse çocuk kilidi tuşunu yaklaşık 4 saniye basılı tutarak kilidi kaldır."
  - "Göz uzun süre aynı ayarda kalıp kendini kapattıysa herhangi bir dokunmatik alana dokun ve gözü yeniden ayarla."
  - "Ekranda E ile başlayan bir mesaj varsa ocağı kapatıp tekrar aç; mesaj geri gelirse kodu eksiksiz not edip müşteri hizmetlerini ara."
faq:
  - q: "Bosch ocağımın bütün göstergeleri yanıp sönüyor, bozuldu mu?"
    a: "Bosch'un cam seramik ocak kılavuzunda bu satırın ilk nedeni kumanda bölümünün ıslak olması ya da üzerinde nesne bulunması; çözüm kumanda bölümünü kurulamak veya cismi kaldırmak. İkinci neden birkaç gözde uzun süre yüksek güçle pişirme yapılması: elektroniği korumak için göz kapatılır. Kılavuz bir süre beklemeni ve herhangi bir dokunmatik alana dokunmanı istiyor; mesaj kaybolduğunda pişirmeye devam edebilirsin."
  - q: "Ekranda E0111 gibi bir kod çıktı, ne yapmalıyım?"
    a: "Kılavuza göre 'E' ile başlayan mesaj, elektronik sistemin bir hata tespit ettiği anlamına geliyor. Önce cihazı kapatıp tekrar aç; arıza bir defalıksa mesaj kaybolur. Mesaj yeniden görünürse müşteri hizmetlerini ara ve hata mesajını eksiksiz bildir. Kodların tek tek anlamı kılavuzda verilmiyor."
  - q: "Ocak gözü yanarken kızarıp sönüyor, normal mi?"
    a: "Evet. Bosch'un kılavuzuna göre ocağın sıcaklığı ısıtmanın açılıp kapanmasıyla ayarlanır ve bu, en yüksek güçte bile olabilir. Ocak yanarken görülen koyu alanlar da teknik nedenlere bağlıdır ve ocağın fonksiyonunu etkilemez."
  - q: "Ocak gözü ısıtıyor ama göstergeler çalışmıyor."
    a: "Bu durum kılavuzda ayrı bir uyarıyla geçiyor: sigortayı sigorta kutusundan kapat ve müşteri hizmetlerini ara. Bu durumda ocağı kullanmaya devam etme."
images:
  coverAlt: "Kapalı göstergeli siyah bir cam seramik ocağın dokunmatik kumanda şeridine uzanan parmak"
---

Ocağın dokunmatik tuşlarına basıyorsun ama hiçbir şey yanmıyor, ya da göstergeler yanıp sönüyor ve göz ısınmıyor. Bosch'un cam seramik ocak kılavuzu (PKE6 / PKM6 serisi) bu tabloları "Gösterge alanındaki uyarılar" başlığında tek tek sayıyor ve girişte şunu yazıyor: **"Cihazınızdaki küçük arızaları kendiniz giderebilirsiniz."** Aynı tablo Bosch'un PUG serisi indüksiyonlu ocak kılavuzunda da büyük ölçüde aynı satırlarla yer alıyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Hiç gösterge yoksa → ev sigortası ve elektrik kesintisi. Hepsi yanıp sönüyorsa → kumanda bölümü ıslak ya da üstünde bir şey var. Kumandanın yanında sıcak tencere varsa → kaldır, bekle, dokun. Kilitliyse → çocuk kilidi tuşu ~4 saniye. "E" ile başlayan mesaj → kapat-aç, tekrar ederse müşteri hizmetleri.

## Adım adım: evde denenecekler

**1. Ev sigortasına bak.** Tablonun ilk satırı: hiçbir gösterge yanmıyorsa neden **"Elektrik beslemesi kesildi."** Bosch'un ilk çözümü **"Cihazın ev sigortasını kontrol ediniz."**

**2. Elektrik kesintisini ayır.** Aynı satırın ikinci adımı: **diğer elektronik cihazlara da bakarak elektrik kesintisi olup olmadığını kontrol et.** İndüksiyonlu PUG kılavuzu da başka elektrikli cihazlar yardımıyla kontrol yapılmasını istiyor.

**3. Kumanda bölümünü kurula.** Tüm göstergeler yanıp sönüyorsa sebep **"Kumanda bölümü ıslak veya üzerinde nesneler mevcut."** Çözüm: **kumanda bölümünü kurula ya da cismi kaldır.** Kılavuz ayrıca kumanda panelini daima kuru tutmanı, çünkü nemin fonksiyonları olumsuz etkilediğini yazıyor.

**4. Sıcak tencereyi kumandadan uzaklaştır.** Tablonun bir başka satırı: **"Kumanda bölümü alanında sıcak bir tencere mevcut."** Elektroniği korumak için göz kapatıldıysa sıra şu: **tencereyi kaldır, bir süre bekle, herhangi bir dokunmatik alana dokun.** Mesaj kaybolduğunda elektronik yeterince soğumuş demektir ve pişirmeye devam edebilirsin.

**5. Çocuk kilidini kaldır.** Ocak hiçbir tuşa tepki vermiyorsa kilitli olabilir. Bosch'un cam seramik kılavuzuna göre çocuk kilidi tuşunu **yaklaşık 4 saniye basılı tut; kilit kaldırılır.** Kılavuz, temel ayarlardan açılabilen bir **otomatik çocuk kilidi** de olduğunu yazıyor: bu açıksa ocak her kapatıldığında kendiliğinden kilitlenir.

**6. Otomatik kapanmadan sonra yeniden başlat.** Bir gözün ayarını uzun süre değiştirmezsen **otomatik kapatma** devreye girer; süre seçilen kademeye göre 1 ile 10 saat arasında. Kılavuzun çözümü: **herhangi bir dokunmatik alana dokun, sonra yeniden ayarla.** Tabloda da aynı not var: **"Ocağı hemen tekrar açabilirsiniz."**

**7. "E" ile başlayan mesajı not et.** Ekranda örneğin **E0111** gibi bir mesaj görünüyorsa elektronik sistem bir hata tespit etmiş demektir. Önce **cihazı kapatıp tekrar aç**; arıza bir defalıksa mesaj kaybolur. Mesaj yeniden gelirse **müşteri hizmetlerini ara ve hata mesajını eksiksiz bildir.**

## Arıza sayılmayan durumlar

- **Tüm gözler kapalıyken ocak kendiliğinden sönüyor:** kılavuza göre tüm gözler belirli bir süre (**10-60 saniye**) kapalı kalınca ocak otomatik olarak kapanır.
- **Göz yanarken kızarıp sönüyor:** sıcaklık, ısıtmanın açılıp kapanmasıyla ayarlanır; hassas parçalar aşırı ısınmaya karşı böyle korunur.
- **Kapattıktan sonra yanan gösterge:** kalan ısı göstergesidir, gözler yeterince soğuyana kadar yanar. Yandığı sürece ocağa dokunma.
- **İndüksiyonda uğultu, cızırtı, çıtırtı:** PUG kılavuzu bu sesleri "normal gürültüler" başlığında sayıyor.

Ekranda bir demo modu göstergesi varsa ve gözler ısınmıyorsa kılavuzun "Arızaları giderme" tablosundaki demo modu satırına bak; sigorta kutusuyla ilgili adımları yapmak istemiyorsan yetkili servise bırak. Markadan bağımsız kontrol listesi için [cam seramik ocak ısınmıyor](/blog/cam-seramik-ocak-isinmiyor/) yazısına bakabilirsin.

## Ne zaman servis

- **Ocak gözü ısıtıyor ama gösterge çalışmıyorsa:** Bosch'un uyarısı açık: **sigortayı sigorta kutusundan kapat ve müşteri hizmetlerini ara.**
- Kılavuzun yangın uyarısındaki durum: ocak kendiliğinden devre dışı kalıp kullanıma kapanıyor ve sonra **istenmeyen şekilde yeniden devreye girme** ihtimali varsa, yine sigortayı sigorta kutusundan kapat ve müşteri hizmetlerini ara.
- "E" ile başlayan mesaj kapatıp açtıktan sonra geri geliyorsa.
- Sigorta açık, elektrik var, kilit kapalı ama göstergeler hâlâ yanmıyorsa.

Kılavuza göre cihazda onarımları **yalnız eğitimini almış uzman personel** yapabilir; arıza halinde müşteri hizmetlerini ara ve cihazın etiketindeki ürün numarasını (E-Nr.) ve imalat numarasını (FD) hazır bulundur.

⛔ **Kendin-çöz sınırı burada biter.** Sigorta kontrolü, kurulama, kilit ve kapat-aç kullanıcıya; elektrik bağlantısı, elektronik kart ve ısıtıcılar servise aittir.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

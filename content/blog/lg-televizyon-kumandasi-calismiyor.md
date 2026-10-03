---
title: "LG televizyon kumandası çalışmıyor"
description: "LG TV kumandayla kontrol edilemiyorsa kılavuzun sırası: TV'deki kumanda sensörü, engel, pil yönü, pil değişimi, Sihirli Kumanda kaydı, modem uzaklığı."
slug: "lg-televizyon-kumandasi-calismiyor"
date: "2026-10-03"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu, ek-2, televizyon). Belgeler bu koşuda (10:4x) curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200, application/pdf, LG'nin kendi alan adı gscs-b2c.lge.com (adres yalnız belgenin yerini bulmak için web aramasıyla bulundu).
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-tv-3eki/ · pdftotext -layout; sayfa = PDF sayfası. Pil yönü cümlesindeki (+)/(-) simgeleri metin katmanında yok ("pilin ucu yuvanın ucuna").
#  L1) LG "Kullanım Kılavuzu · Güvenlik ve Referans · LED TV" (© 2021), 38 s., md5 5a0b521473462c45bf52fe3c8bbb9f93 — https://gscs-b2c.lge.com/open/downloadFile?fileId=8o909higSqcYwQbLO7D2A
#      s.16 Sorun Giderme "TV uzaktan kumandayla kontrol edilemiyor. · Ürün üzerindeki uzaktan kumanda sensörünü kontrol edin ve tekrar deneyin. · Ürün ve uzaktan kumanda arasında engel olup olmadığını kontrol edin. · Pillerin hala çalışır durumda olduğunu ve düzgün takılıp takılmadığını kontrol edin (pilin [+] ucu yuvanın [+] ucuna, [-] ucu yuvanın [-] ucuna gelmelidir)."
#      s.14 "Pilleri değiştirmek için pil kapağını açın, pilleri (1,5 V AAA) ve uçları pil yuvasındaki etiketle eşleşecek şekilde değiştirin ve pil kapağını kapatın. Uzaktan kumandayı, TV üzerindeki uzaktan kumanda sensörüne doğru tuttuğunuzdan emin olun. (Modele bağlı olarak değişkenlik gösterebilir)"
#      s.16 "Yeni pillerle eski pilleri bir arada kullanmayın. Bu durum pillerin aşırı ısınmasına ve sızıntı yapmasına neden olabilir." / "Pilin doğru kutuplara göre takılmaması pilin patlamasına veya sızıntı yapmasına sebep olabilir"
#      s.5 "Sihirli Uzaktan Kumanda'nızın kullanılabilirliğini doğrulamak için TV'nizin Kablosuz Modül Spesifikasyonu'ndaki Bluetooth fonksiyonunu destekleyip desteklemediğini kontrol edin."
#  L2) LG "Kullanım Kılavuzu · Güvenlik ve Referans" (© 2023), 18 s., md5 5b4ef6c4f11de0dcf31f27e2888ed28a — https://gscs-b2c.lge.com/open/downloadFile?fileId=FkFKGQjWILtd49k3guVIXQ
#      s.12 aynı "TV uzaktan kumandayla kontrol edilemiyor" üç maddesi · "TV/HDMI girişinde, model adını ve seri numarasını ekranda görüntüleyebilmek adına uzaktan kumanda üzerindeki [ ] düğmesine üç kez basın." (düğme simgesi metinde yok; yazıda düğme adı verilmedi)
#  L3) LG "Güvenlik ve Referans" (© 2019, Sihirli Uzaktan Kumanda AN-MR19BA), 47 s., md5 afc06c525a0f59cfd9aed3ed87be05e5 — https://gscs-b2c.lge.com/open/downloadFile?fileId=dYtgtzMJ77HsZS66ZaFkA
#      s.15 "[Sihirli Uzaktan Kumandanın pili zayıf. Lütfen pili değiştirin.] mesajı gösterildiğinde pili değiştirin. Pilleri değiştirmek için pil kapağını açın, pilleri (1,5 V AA) ve uçları pil yuvasındaki etiketle eşleşecek şekilde değiştirin"
#      s.17 "Sihirli Uzaktan Kumanda nasıl kaydedilir · Sihirli Uzaktan Kumandayı kullanmak için öncelikle kumandayı TV'nizle eşleştirin. 1 Sihirli Uzaktan Kumandaya pilleri yerleştirin ve TV'yi açın. 2 Sihirli Uzaktan Kumandayı TV'nize doğrultun ve uzaktan kumandanızda HAREKET TUŞU (Tamam) 'na basın. * TV'niz Sihirli Uzaktan Kumandayı kaydedemezse TV'yi kapatıp açtıktan sonra tekrar deneyin."
#      s.18 "Erişim Noktasının (AP) TV'den en az 0,2 m uzaklıkta bulunması önerilir. AP, 0,2 m'den daha yakına kurulursa frekans paraziti sebebiyle Sihirli uzaktan kumanda gerektiği gibi çalışmayabilir." · s.18 aynı üç maddelik sorun giderme satırı.
# YAKIN KOPYA: LG'nin yayında televizyon sayfası yok; yayında markasız TV kumandası sayfası da yok. Bugünkü kardeş grundig-televizyon-kumandasi-calismiyor ile gövde karşılaştırması .KAYNAK.md'de (farklı belge ve farklı adımlar: sensör, AA/AAA ayrımı, HAREKET TUŞU kaydı, 0,2 m).
# BİLEREK YAZILMAYANLAR: Sihirli Kumanda kaydını silme tuş kombinasyonu (simgeler metin katmanında yok, görüntüden kesin okunmadı) · model/seri no gösteren düğmenin adı (simge yok) · kumandanın arızası/yedek kumanda (belgede yok) · fiyat.
# Alıntı denetim tablosu: lg-televizyon-kumandasi-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["1,5 V AAA ya da AA pil (kumanda tipine göre)"]
steps:
  - "Kumandayı televizyonun üzerindeki uzaktan kumanda sensörüne doğru tutarak yeniden dene."
  - "Televizyonla kumanda arasında sinyali kesen bir eşya olup olmadığına bak ve kaldır."
  - "Pil kapağını aç, pillerin artı ve eksi uçlarının yuvadaki etiketle eşleştiğini kontrol et."
  - "Pilleri yenileriyle değiştir; standart kumandaya 1,5 V AAA, Sihirli Kumanda'ya 1,5 V AA tak ve eskiyle yeniyi karıştırma."
  - "Sihirli Kumanda'yı kaydetmek için televizyonu aç, kumandayı televizyona doğrult ve HAREKET TUŞU'na (Tamam) bas."
  - "Kayıt olmazsa televizyonu kapatıp aç ve kaydı yeniden dene."
  - "Modem ya da kablosuz erişim noktası televizyona 0,2 metreden yakınsa daha uzağa al."
faq:
  - q: "LG televizyon kumandayla kontrol edilemiyor. Neden?"
    a: "LG'nin televizyon kılavuzlarındaki sorun giderme satırı üç kontrol veriyor: televizyonun üzerindeki uzaktan kumanda sensörünü kontrol edip yeniden denemek, televizyonla kumanda arasında engel olup olmadığına bakmak ve pillerin çalışır durumda ve artı-eksi uçlarına göre doğru takılı olduğundan emin olmak."
  - q: "LG kumandaya hangi pil takılır?"
    a: "Kumandaya göre değişiyor. LG'nin 2021 tarihli LED TV kılavuzunda standart kumanda için 1,5 V AAA, 2019 tarihli kılavuzdaki Sihirli Uzaktan Kumanda için 1,5 V AA pil yazıyor. Pillerin uçları yuvadaki etikete göre takılır; LG yeni ve eski pilleri birlikte kullanmamanı istiyor."
  - q: "LG Sihirli Kumanda'nın imleci çıkmıyor, televizyonu tanımıyor. Ne yapmalıyım?"
    a: "LG kılavuzuna göre Sihirli Uzaktan Kumanda'yı kullanmadan önce televizyonla eşleştirmek gerekir: pilleri takıp televizyonu açar, kumandayı televizyona doğrultup HAREKET TUŞU'na (Tamam) basarsın. Televizyon kumandayı kaydedemezse kapatıp açtıktan sonra yeniden dene. Ekranda pilin zayıf olduğunu söyleyen bir mesaj çıkarsa önce pili değiştir."
  - q: "Sihirli Kumanda her LG televizyonla çalışır mı?"
    a: "LG kılavuzu bunun için televizyonun kablosuz modül özelliklerinde Bluetooth desteği olup olmadığını kontrol etmeni istiyor. Sihirli Kumanda'nın kullanılabilirliği bu desteğe bağlı."
images:
  coverAlt: "Oturma odasında açık bir televizyonun önünde, koltukta oturan birinin elinde televizyona doğru tutulmuş beyaz bir kumanda, sehpada pil kutusu"
---

Kumandaya basıyorsun, televizyon tepki vermiyor. LG'nin Türkçe televizyon kılavuzları bunu sorun giderme bölümünde **"TV uzaktan kumandayla kontrol edilemiyor."** satırıyla veriyor ve üç kontrol istiyor: **"Ürün üzerindeki uzaktan kumanda sensörünü kontrol edin ve tekrar deneyin."**, **"Ürün ve uzaktan kumanda arasında engel olup olmadığını kontrol edin."** ve pillerin çalışır durumda ve doğru kutupla takılı olması. Sihirli Uzaktan Kumanda kullanıyorsan iki konu daha var: kumandanın televizyona kaydedilmesi ve yakındaki modemin yarattığı parazit. Bu yazıda LG'nin 2019, 2021 ve 2023 tarihli üç kılavuzundaki bu satırları sıraya koyuyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kumandayı televizyondaki sensöre doğrult, aradaki engeli kaldır. Pillerin artı-eksi yönüne bak, gerekirse yenile (standart kumanda AAA, Sihirli Kumanda AA). Sihirli Kumanda'yı televizyona doğrultup HAREKET TUŞU'na (Tamam) basarak yeniden kaydet; olmazsa televizyonu kapatıp aç. Modem 0,2 metreden yakınsa uzaklaştır. Sürerse → LG yetkili servisi.

## LG'nin listesi

| LG'nin kontrolü | Ne yaparsın | Hangi kumanda |
|---|---|---|
| Uzaktan kumanda sensörü | Kumandayı televizyondaki sensöre doğru tutup yeniden dene | İkisi de |
| Engel | Aradaki eşyayı kaldır | İkisi de |
| Pillerin durumu ve yönü | Artı-eksi uçlarını yuvadaki etikete göre kontrol et, gerekirse değiştir | İkisi de |
| Pil zayıf mesajı | Pili değiştir | Sihirli Kumanda |
| Kumanda kaydı | HAREKET TUŞU (Tamam) ile kaydet, olmazsa televizyonu kapatıp açıp yeniden dene | Sihirli Kumanda |
| Erişim noktası (modem) 0,2 m'den yakın | Uzaklaştır | Sihirli Kumanda |

## Adım adım: evde denenecekler

**1. Sensör.** Kumandayı televizyonun üzerindeki uzaktan kumanda sensörüne doğru tutarak yeniden dene. LG pil değiştirme tarifinin sonuna da aynı notu ekliyor: kumandayı televizyon üzerindeki sensöre doğru tuttuğundan emin ol. Sensörün yeri modele göre değişiyor.

**2. Engel.** Televizyonla kumanda arasında sinyali kesen bir eşya olup olmadığına bak ve kaldır. LG'nin listesindeki ikinci kontrol bu.

**3. Pil yönü.** Pil kapağını aç, pillerin artı ve eksi uçlarının yuvadaki etiketle eşleştiğini kontrol et. LG pilin artı ucunun yuvanın artı ucuna, eksi ucunun yuvanın eksi ucuna gelmesi gerektiğini yazıyor ve ters takılan pilin sızıntı yapabileceği konusunda uyarıyor.

**4. Pil değişimi.** Pilleri yenileriyle değiştir; standart kumandaya 1,5 V AAA, Sihirli Kumanda'ya 1,5 V AA tak ve eskiyle yeniyi karıştırma. Sihirli Kumanda'nın pili azaldığında televizyon ekranında pilin zayıf olduğunu ve değiştirilmesi gerektiğini söyleyen bir mesaj çıkıyor. LG'ye göre yeni ve eski pilleri birlikte kullanmak pillerin aşırı ısınmasına ve sızıntı yapmasına yol açabilir.

**5. Sihirli Kumanda kaydı.** Sihirli Kumanda'yı kaydetmek için televizyonu aç, kumandayı televizyona doğrult ve HAREKET TUŞU'na (Tamam) bas. LG kılavuzu Sihirli Kumanda'nın kullanılmadan önce televizyonla eşleştirilmesi gerektiğini yazıyor.

**6. Kapatıp açıp yeniden deneme.** Kayıt olmazsa televizyonu kapatıp aç ve kaydı yeniden dene. LG bu adımı kayıt tarifinin hemen altında veriyor.

**7. Modem uzaklığı.** Modem ya da kablosuz erişim noktası televizyona 0,2 metreden yakınsa daha uzağa al. 2019 tarihli kılavuza göre erişim noktası 0,2 metreden yakına kurulursa frekans paraziti nedeniyle Sihirli Kumanda gerektiği gibi çalışmayabilir.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Sensör, engel, pil yönü, pil değişimi, Sihirli Kumanda kaydı, modem uzaklığı | Senin, bu rehberdeki adımlar |
| Yeni pil ve yeniden kayda rağmen kumanda çalışmıyor | LG yetkili servisi |

⛔ Kumandanın ya da televizyonun kapağını açıp içini kurcalama; pil bölmesi dışındaki her iş yetkili servisin işidir.

Televizyon hiç açılmıyorsa markadan bağımsız [TV açılmıyor](/blog/tv-acilmiyor/) yazısına bak. Grundig televizyon kullanıyorsan aynı belirti için [Grundig televizyon kumandası çalışmıyor](/blog/grundig-televizyon-kumandasi-calismiyor/) yazısı Grundig'in kendi adımlarını anlatıyor.

---

**Kaynak künyesi.** Sorun giderme satırı, pil değiştirme tarifi ve pil uyarıları, Sihirli Uzaktan Kumanda'nın kaydı ve erişim noktası uzaklığı LG'nin gscs-b2c.lge.com'daki Türkçe "Güvenlik ve Referans" televizyon kılavuzlarından (2019, 2021, 2023) alınmıştır. Kumanda tipi ve tuşlar modele göre değişir; kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

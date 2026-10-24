---
title: "Sunny TV kanal frekans ayarlama: manuel arama"
description: "Sunny televizyonda frekans ayarı nasıl yapılır? Sunny'nin destek sayfasına göre manuel kanal arama, sembol oranı, polarizasyon ve kablolu yayın bilgileri."
slug: "sunny-tv-kanal-frekans-ayarlama"
date: "2026-10-24"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 6, küme X1). origin/main 7481159'da "sunny" geçen slug/başlık/blog gövdesi YOK.
# GSC: "sunny" satırı yok. OT (bu koşu): "sunny tv " → 2. "sunny tv kanal frekans ayarlama"; "sunny tv f" → 1. "sunny tv frekans ayarlama"; "sunny tv kanal" → 2. aynı; "sunny tv k" → 2. aynı.
# Belge zinciri (#88): üretici sitesi sunny.com.tr/sikca-sorulan-sorular/ (200) → /sikca-sorulan-sorular/televizyonlar/ (200, "Kurulum ve Kanal İşlemleri", dateModified 2026-07-17), html md5 40fa96f74eae1ff655f0de47d1a27400.
#  Ek PDF: sunny.com.tr/televizyon-kullanim-kilavuzlari/ (200) → wp-content/uploads/Uydulu-32-39-inc-Kullanim-Kilavuzu.pdf (200), 28 s., md5 f35e6683446e4ff2063221ce5ba6aa12 (OCR, s.10-11).
# BİLEREK YAZILMAYANLAR: Türksat / kablo frekans, sembol oranı değerleri (Sunny belgesinde yok; Sunny güncel değeri yayıncıdan almayı öneriyor) · TKGS (belgede yok) · fiyat (#46).
guide:
  difficulty: "Orta"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Televizyonun kumandası", "Kanalın güncel yayın bilgileri"]
steps:
  - "Televizyonun arka etiketindeki tam model kodunu öğren; menü adları modele göre değişiyor."
  - "Aramak istediğin kanalın güncel frekans, sembol oranı ve polarizasyon bilgisini yayıncıdan ya da operatörden al."
  - "Anten ya da uydu kablosunun gevşek, hasarlı ya da ekli olmadığını kontrol et."
  - "Kanal kurulum menüsünde yayın türünü uydu, karasal ya da kablo olarak seç."
  - "Manuel Arama menüsüne gir, değerleri ilgili alanlara yazıp aramayı başlat."
  - "Kablolu yayında operatörün verdiği frekans, ağ kimliği ve sembol oranını gir."
  - "Arama bitince kanalın listeye eklendiğini kontrol et, gerekirse sırasını düzenle."
faq:
  - q: "Sunny televizyonda frekans girerek kanal nasıl aranır?"
    a: "Sunny'nin destek sayfasına göre kanal kurulum menüsünde Manuel Arama ya da Manuel Tarama seçeneğine giriyorsun. Aramak istediğin yayının frekans, sembol oranı, polarizasyon ya da kanal bilgilerini ilgili alanlara yazıp aramayı başlatıyorsun."
  - q: "Frekans değerlerini nereden bulurum?"
    a: "Sunny güncel yayın bilgilerini ilgili yayın kuruluşundan ya da uydu operatöründen kontrol etmeni öneriyor; frekans ve yayın parametreleri zamanla değişebiliyor. Kablolu yayında değerleri hizmet aldığın kuruluş veriyor."
  - q: "Yanlış frekans girersem ne olur?"
    a: "Sunny'nin sayfasına göre yanlış değer girilirse kanal bulunamayabiliyor. Değerleri tekrar kontrol edip yeniden aramak yeterli; manuel arama mevcut listeni silmek için değil, tek bir yayını eklemek için kullanılıyor."
  - q: "Otomatik arama mı manuel arama mı yapmalıyım?"
    a: "Bütün listeyi yeniden kurmak istiyorsan otomatik arama. Sunny'ye göre otomatik arama bazı modellerde mevcut listeyi silip yeniden oluşturuyor ve sıralama, favoriler ve kilitler kaybolabiliyor; yalnız yeni bir frekans eklemek istiyorsan manuel arama daha uygun."
  - q: "Aynı frekanstaki başka kanallar da yok, sorun televizyonda mı?"
    a: "Olmayabilir. Sunny'nin sayfası aynı frekanstaki diğer kanallar da bulunmuyorsa anten ya da bina yayın sisteminin kontrol edilmesi gerekebileceğini yazıyor. Hava koşulları, çanak yönü, LNB ya da bina dağıtım sistemi de sinyal seviyesini etkiliyor."
images:
  coverAlt: "Televizyon ekranında açık duran manuel kanal arama penceresi"
  steps:
    - "Televizyonun arka kasasında duran ürün etiketi"
    - "Masada açık duran bir dizüstü bilgisayar ekranında yayın listesi"
    - "Duvardaki anten prizine takılı koaksiyel kablo"
    - "Televizyon ekranında yayın türü seçim listesi"
    - "Televizyon ekranında frekans ve sembol oranı giriş alanları"
    - "Duvar kenarında duran kablo TV bağlantı kutusu"
    - "Televizyon ekranında açık duran kanal listesi"
---

Sunny televizyonunda bir kanal kayboldu ya da yayıncı frekansını değiştirdi; bütün listeyi silmeden yalnız o kanalı eklemek istiyorsun. Bunun yolu manuel kanal arama: kanalın frekansını ve yayın değerlerini elle girip yalnız o yayını aratıyorsun. Bu yazıda Sunny'nin kendi sitesindeki televizyon destek sayfasının "Kurulum ve Kanal İşlemleri" bölümünü temel aldık. Sunny'nin sayfası menü adlarının ve adımların televizyonun modeline ve işletim sistemine göre değiştiğini belirtiyor; frekans değerlerini ise vermiyor, güncel değerin yayıncıdan alınmasını öneriyor.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kanal kurulum menüsünde Manuel Arama. Uyduda frekans, sembol oranı ve polarizasyon, kabloda frekans, ağ kimliği ve sembol oranı girilir. Değerleri yayıncıdan ya da operatörden al; yanlış değerle kanal bulunmaz.

## Hangi yayında hangi bilgi

| Yayın türü | Menüde seçilecek | Manuel aramada istenen |
|---|---|---|
| **Uydu** | Uydu | Frekans, sembol oranı, polarizasyon |
| **Kablo** | Kablo ya da DVB-C | Frekans, ağ kimliği, sembol oranı (operatör verdiyse) |
| **Karasal** | Anten, Karasal, DVB-T ya da DVB-T2 | Kanal ya da frekans bilgisi |

## Adım adım: Sunny TV'de kanal frekans ayarlama

**1. Modelini bil.** Sunny'nin sayfası kanal kurulumunda kullanılan işletim sisteminin, dahili alıcı türünün ve menü yapısının modele göre değiştiğini, en doğru yönlendirme için televizyonun arkasındaki ürün etiketindeki tam model kodunun kontrol edilmesini öneriyor. Sunny'nin sitesindeki televizyon kılavuzları da ekran boyu ve işletim sistemine göre ayrı yayımlanıyor.

**2. Güncel değeri bul.** Manuel arama, doğru değer girildiğinde çalışıyor. Sunny frekans bilgilerinin ve yayın parametrelerinin zaman içinde değişebileceğini, güncel bilgilerin yayın kuruluşundan ya da uydu operatöründen kontrol edilmesini yazıyor. Eski bir listeden alınmış değer kanalı bulamayabilir. Karasal yayında ise Sunny'ye göre alınabilecek kanal sayısı bulunduğun bölgedeki yayın altyapısına, anten türüne ve sinyal seviyesine bağlı; her bölgede aynı kanalları bulamaman normal olabilir.

**3. Bağlantıyı kontrol et.** Doğru değer de sinyal yoksa işe yaramaz. Sunny'ye göre anten ya da uydu kablosunun gevşek, hasarlı ya da ek yapılmış olup olmadığına bakılmalı; kabloyu çıkarıp yeniden takarak bağlantının sağlam olduğundan emin olmalısın. Merkezi uydu sistemi kullanıyorsan aynı binadaki diğer evlerde yayın olup olmadığını sorabilirsin.

**4. Yayın türünü seç.** Kanal kurulum menüsünde uydu için **Uydu**, kablolu yayın için **Kablo** ya da **DVB-C**, çatı anteni için **Anten**, **Karasal**, **DVB-T** ya da **DVB-T2** seç. Yanlış yayın türünde girilen frekans hiçbir şey bulmaz.

**5. Manuel aramayı yap.** Kanal kurulum menüsünde **Manuel Arama**, **Manuel Tarama** ya da benzer isimli seçeneğe gir. Aramak istediğin yayına ait frekans, sembol oranı, polarizasyon ya da kanal bilgilerini ilgili alanlara yaz ve aramayı başlat. Uydu yayınında birden fazla uydu ya da merkezi sistem varsa doğru DiSEqC portunun seçili olması da gerekiyor; bunu bilmiyorsan bina teknik görevlisinden öğren. Uydu kurulumunun tamamı [Sunny TV uydu kurulumu](/blog/sunny-tv-uydu-kurulumu/) yazısında.

**6. Kablolu yayın.** Kablolu yayın hattını televizyonun anten girişine bağla, yayın türü olarak Kablo ya da DVB-C seç. Sunny'ye göre hizmet sağlayıcın frekans, ağ kimliği ya da sembol oranı verdiyse bu değerleri ilgili alanlara girmen gerekebiliyor. Kurulum bilgisi için kablolu yayın hizmeti aldığın kuruluşla görüşmek en kısa yol.

**7. Sonucu kontrol et.** Arama bitince kanal listesini aç ve yeni kanalın eklendiğine bak. Sunny'nin sayfası belirli bir kanalın yayın frekansı değiştiyse güncel değerle manuel arama yapılmasını, aynı frekanstaki diğer kanallar da yoksa anten ya da bina sisteminin kontrol edilmesini öneriyor. Kanalın yerini değiştirmek için **Kanal Listesi** ya da **Kanal Düzenleme** menüsünde **Taşı** seçeneğini kullan. Kanalın adı tuhaf görünüyorsa Sunny dijital yayınlarda adın yayıncı tarafından otomatik gönderildiğini, bu yüzden bazı modellerde yeniden adlandırma yapılamayabileceğini yazıyor.

## Neden manuel arama

Sunny'nin sayfasına göre otomatik kanal araması bazı modellerde mevcut listeyi silip yeni bir liste kuruyor; önceki sıralaman, favorilerin ve kanal kilitlerin kaybolabiliyor. Bu yüzden yalnız bir yeni frekans eklemek istiyorsan manuel arama daha uygun. Bütün kanallar gittiyse otomatik arama yap; adımlar [Sunny TV kanallar silindi](/blog/sunny-tv-kanallar-silindi/) yazısında. Kanallar sık sık kayboluyorsa otomatik kanal güncellemesi ayarına da bak: açıkken yayıncının frekans değişiklikleri otomatik uygulanabiliyor, kapalıyken eklenmeyebiliyor.

## Ne zaman servis

- Doğru değerle yapılan manuel arama da kanalı bulmuyor, başka bir televizyonda aynı kabloyla kanal çıkıyorsa
- Sinyal seviyesi her kanalda çok düşük görünüyorsa
- Arama menüsü açılmıyor ya da arama yarıda kesiliyorsa

⛔ **Kendin-çöz sınırı burada biter.** Değer girmek, yayın türü ve arama sende. Sunny'nin sayfası da çanak ve anten ayarları güvenli yapılamıyorsa uzman desteği önerir; LNB ve bina dağıtım sistemi uzmanın, televizyonun alıcı devresi Sunny yetkili servisinin işi.

## Servisi aramadan önce kısa özet

1. Televizyonun tam model kodu ne?
2. Yayın uydu mu, kablo mu, karasal mı?
3. Hangi değerleri girdin, nereden aldın?
4. Aynı frekanstaki başka kanallar geliyor mu?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

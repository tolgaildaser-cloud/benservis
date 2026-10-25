---
title: "Sunny TV kanallar silindi: geri getirme adımları"
description: "Sunny televizyonda kanallar silindi mi? Sunny'nin destek sayfasına göre otomatik ve manuel arama, kanal güncellemesi ayarı ve fabrika ayarının etkisi."
slug: "sunny-tv-kanallar-silindi"
date: "2026-10-24"
category: "Televizyon"
# --- Provenans (yayında görünmez) ---
# 2026-10-24 PAZ alt ajanı (YK #182 Dalga 6, küme X1). origin/main 7481159'da "sunny" geçen slug/başlık/blog gövdesi YOK.
# GSC: "sunny" satırı yok (www-3…www-6). OT (bu koşu): "sunny tv " → 1. "sunny tv kanallar silindi nasıl geri getirebilirim"; "sunny tv k" → 1. aynı; "sunny tv kanal" → 1. aynı; "sunny tv f" → 3. "…fabrika ayarlarına döndüm kanallar gitti".
# Belge zinciri (#88): üretici sitesi sunny.com.tr/sikca-sorulan-sorular/ (200) → /sikca-sorulan-sorular/televizyonlar/ (200, "Kurulum ve Kanal İşlemleri", dateModified 2026-07-17), html md5 40fa96f74eae1ff655f0de47d1a27400.
#  Ek PDF: sunny.com.tr/televizyon-kullanim-kilavuzlari/ (200) → wp-content/uploads/Uydulu-32-39-inc-Kullanim-Kilavuzu.pdf (200 application/pdf), 28 s., md5 f35e6683446e4ff2063221ce5ba6aa12; görüntü tabanlı, tesseract tur OCR + sayfa görüntüsü (s.11, 14, 17).
# SSS genel; menü adları modele göre değişiyor uyarısı yazıda var. BİLEREK YAZILMAYANLAR: frekans değerleri · TKGS (belgede yok) · servis menüsü · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Televizyonun kumandası", "Anten, kablo ya da uydu bağlantısı"]
steps:
  - "Kumandadaki Source tuşuyla doğru yayın kaynağının seçili olduğunu kontrol et."
  - "Anten ya da uydu kablosunun televizyona ve duvar prizine sıkıca takılı olduğuna bak."
  - "Kanal ayarlarında yayın türünü uydu, karasal ya da kablo olarak doğru seç."
  - "Bütün listeyi geri getirmek için otomatik kanal aramasını başlat ve bitene kadar televizyonu kapatma."
  - "Tek bir kanal eksikse güncel frekans bilgileriyle manuel arama yap."
  - "Kanallar kendiliğinden kayboluyorsa otomatik kanal güncellemesi ayarına bak."
  - "Liste gelince istemediğin kanalları silmek yerine atla ve sıralamayı yeniden yap."
faq:
  - q: "Sunny televizyonda silinen kanallar nasıl geri gelir?"
    a: "Sunny'nin destek sayfasına göre silinen kanalları geri getirmek için otomatik ya da manuel kanal araması yapıyorsun. Bütün listeyi yeniden kurmak için otomatik arama, yalnız belirli bir kanal için güncel frekans bilgisiyle manuel arama öneriliyor."
  - q: "Fabrika ayarlarına döndüm, kanallar gitti. Normal mi?"
    a: "Evet. Sunny'nin sayfası fabrika ayarlarına dönüldüğünde kanal listesinin, kişisel görüntü ve ses ayarlarının ve ağ bilgilerinin silinebileceğini, sonrasında ilk kurulumun ve kanal aramasının yeniden yapılması gerektiğini yazıyor."
  - q: "Kanallar neden kendiliğinden siliniyor ya da sırası değişiyor?"
    a: "Sunny'ye göre otomatik kanal güncellemesi, operatör kanal listesi ya da kanal numaralandırma açıksa yayın sağlayıcı listeyi güncelleyebiliyor. Otomatik güncellemeyi kapatabilirsin; ama kapalıyken yeni kanallar ve frekans değişiklikleri kendiliğinden eklenmeyebilir."
  - q: "Kanal araması yeni kurduğum sıralamayı siler mi?"
    a: "Bazı modellerde silebilir. Sunny'nin sayfasına göre otomatik arama mevcut listeyi silip yenisini oluşturabiliyor; sıralama, favoriler ve kanal kilitleri kaybolabiliyor. Yalnız yeni bir frekans ekleyeceksen manuel arama daha uygun."
  - q: "Arama bitiyor ama hiç kanal bulunmuyor, ne yapmalıyım?"
    a: "Sunny önce yayın türünün doğru seçildiğini kontrol etmeni istiyor: uydu için Uydu, anten için Karasal, kablolu yayın için Kablo. Uydu sisteminde yanlış uydu ya da DiSEqC portu seçimi kanal bulunmasını engelleyebiliyor. Sorun sürerse anten sistemi uzman tarafından kontrol edilmeli."
images:
  coverAlt: "Oturma odasında ekranında boş kanal listesi görünen televizyon"
  steps:
    - "Çizim: solda televizyon, sağda uzaktan kumanda"
    - "Çizim: solda televizyon, sağda prizden çekilen fiş"
    - "Çizim: solda televizyon, sağda uydu çanağı ve LNB"
    - "Çizim: solda televizyon, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda televizyon, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda televizyon, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda televizyon, sağda temizleme bezi"
---

Sunny televizyonunu açtın ve kanalların hepsi ya da bir kısmı gitmiş. Bu çoğu zaman bir ayar ya da yayın değişikliğinden kaynaklanıyor: fabrika ayarına dönüş, yayıncının liste güncellemesi, yanlış kaynak ya da yanlış yayın türü. Bu yazıda Sunny'nin kendi sitesindeki televizyon destek sayfasının "Kurulum ve Kanal İşlemleri" bölümünü ve Sunny kullanım kılavuzunu temel aldık. Sunny'nin sayfası menü adlarının ve adımların modele ve işletim sistemine göre değiştiğini özellikle belirtiyor; aşağıdaki adımlarda menü adlarını Sunny'nin saydığı seçeneklerle birlikte verdik.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce Source tuşuyla kaynağı ve kablo bağlantısını kontrol et. Sonra doğru yayın türüyle otomatik kanal aramasını yap. Tek kanal eksikse manuel ara. Kanallar sık kayboluyorsa otomatik kanal güncellemesine bak.

## Kanallar neden gider

| Durum | Sunny'nin açıklaması | Yapılacak |
|---|---|---|
| Fabrika ayarına dönüldü | Kanal listesi silinebilir | İlk kurulum ve kanal araması |
| Otomatik güncelleme açık | Yayın sağlayıcı listeyi güncelleyebilir | Güncelleme ayarını kontrol et |
| Yanlış kaynak seçili | Yayın gelmeyen girişte görüntü oluşmaz | Source ile TV kaynağı |
| Yanlış yayın türü | Arama hiç kanal bulamaz | Uydu, Karasal ya da Kablo seçimi |
| Kanalın frekansı değişti | O kanal bulunmaz | Güncel frekansla manuel arama |

## Adım adım: Sunny TV'de silinen kanalları geri getirme

**1. Kaynağı kontrol et.** Kumandadaki **Kaynak**, **Source** ya da **Input** tuşuna bas ve listeden TV ya da uydu kaynağının seçili olduğundan emin ol. Sunny'nin kılavuzunda da Source tuşu giriş kaynakları menüsünü açıyor. HDMI'da kalmış bir televizyonda kanal listesi boş görünür.

**2. Kabloya bak.** Sunny'nin sayfası uydu ya da anten kablosunun hem televizyona hem duvar prizine sıkıca bağlı olmasını istiyor. Kablo gevşek, hasarlı ya da ek yapılmışsa çıkarıp yeniden tak. Harici uydu alıcısı kullanıyorsan kanallar televizyonda değil o cihazdadır; alıcının açık ve doğru HDMI girişinin seçili olduğuna bak.

**3. Yayın türünü doğru seç.** Kanal kurulum menüsünde uydu yayını için **Uydu**, çatı anteni için **Karasal** (Anten, DVB-T ya da DVB-T2), kablolu yayın için **Kablo** (DVB-C) seç. Sunny'ye göre arama bitip hiç kanal bulunmuyorsa ilk bakılacak yer burası; uydu sistemlerinde yanlış uydu ya da DiSEqC portu da kanal bulunmasını engelliyor.

**4. Otomatik aramayı başlat.** **Ayarlar**, **Kanallar**, **Yayın** ya da **Kurulum** menüsünde **Otomatik Kanal Arama** (ya da Otomatik Tarama) seçeneğini aç ve taramayı başlat. Sunny arama bitene kadar televizyonu kapatmamanı ve anten bağlantısını çıkarmamanı istiyor. Aramadan önce ekrandaki uyarıyı oku: bazı modellerde otomatik arama mevcut listeyi silip yeni liste kuruyor, eski sıralaman, favorilerin ve kanal kilitlerin kaybolabiliyor.

**5. Eksik kanalı manuel ara.** Liste geldi ama tek bir kanal yoksa o kanalın yayın frekansı değişmiş olabilir. Kanal kurulum menüsünde **Manuel Arama** (ya da Manuel Tarama) seçeneğine gir, kanalın frekans, sembol oranı ve polarizasyon bilgilerini yazıp aramayı başlat. Sunny yanlış değer girilirse kanalın bulunamayacağını, güncel bilgilerin yayın kuruluşundan ya da uydu operatöründen alınmasını öneriyor. Ayrıntı [Sunny TV kanal frekans ayarlama](/blog/sunny-tv-kanal-frekans-ayarlama/) yazısında.

**6. Kendiliğinden kaybolma.** Kanallar sık sık siliniyor ya da sırası değişiyorsa kanal ayarlarında **Kanal Güncelleme** ya da **Otomatik Kanal Güncelleme** seçeneğine bak. Sunny'ye göre bu özellik yayıncının kanal ve frekans değişikliklerini otomatik uyguluyor, ama kişisel sıralamanı da değiştirebiliyor. Kapatırsan yeni kanallar ve frekans değişiklikleri kendiliğinden eklenmeyebiliyor; ikisi arasında seçim yapman gerekiyor.

**7. Silmek yerine atla.** Liste geldikten sonra istemediğin kanalları **Kanal Düzenleme** menüsünden silebilirsin. Ama Sunny'nin sayfası bazı dijital yayın sistemlerinde silinen kanalların otomatik olarak yeniden eklendiğini, bu yüzden **Atla** seçeneğinin daha uygun olabileceğini yazıyor. Atlanan kanal, kanal değiştirme tuşlarıyla geçerken görünmüyor ama listeden ya da numarasıyla açılabiliyor.

## Fabrika ayarından sonra kanallar

Kanallar fabrika ayarına dönüş sonrası gittiyse bu beklenen bir sonuç. Sunny'nin sayfasına göre fabrika ayarı kanal listesini, görüntü ve ses ayarlarını ve ağ bilgilerini silebiliyor; sonrasında ilk kurulumu ve kanal aramasını yeniden yapman gerekiyor. Sunny'nin uydu alıcılı 32–39 inç kılavuzunda bu işlem **Sistem** menüsündeki **Fabrika Ayarları** satırından, Sıfırla seçilip onaylanarak yapılıyor. Ayrıntı [Sunny TV resetleme](/blog/sunny-tv-resetleme/) yazısında.

## Ne zaman servis

- Kaynak, kablo ve yayın türü doğruyken otomatik arama hiçbir kanal bulmuyorsa
- Aynı binadaki diğer evlerde yayın var ama sende yoksa
- Televizyon ekranda "Sinyal Yok" yazıyor ve bütün kanallarda aynı uyarı çıkıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Kaynak, arama, güncelleme ve kanal listesi sende. Sunny'nin sayfası da anten ve çanak ayarı güvenli yapılamıyorsa uzman desteği alınmasını öneriyor; televizyonun iç arızası Sunny yetkili servisinin işi.

## Servisi aramadan önce kısa özet

1. Televizyonun tam model kodu ne (arka etikette)?
2. Yayın uydu mu, karasal mı, kablo mu?
3. Kanallar ne zaman gitti: fabrika ayarı, güncelleme, elektrik kesintisi?
4. Otomatik arama kaç kanal buldu?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Uydu kurulumunu baştan yapacaksan [Sunny TV uydu kurulumu](/blog/sunny-tv-uydu-kurulumu/) yazısına bak. Bil, gör, çağır.

---
title: "Protherm kombi F22 hatası: su basıncı az"
description: "Protherm kombide F.22 tesisat basıncının düşük olduğunu gösterir. Basıncı ekrandan okuma, doldurma vanası, hedef bar ve servis sınırı."
slug: "protherm-kombi-f22-hatasi"
date: "2026-10-03"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, kombi + fırın koşusu). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile Protherm'in kendi alan adından indirildi, hepsi HTTP 200.
# Belgelerin yeri web aramasıyla bulundu; hiçbir cümle arama sonucundan, forumdan ya da servis sitesinden alınmadı. Okuma pdftotext -layout, sayfa = PDF sayfası.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-protherm-alarko-sprint/
#  (P) Protherm "Kullanma kılavuzu Puma Condens 18/24 MKV-AS/1" 0020289282_02, 16 s., md5 ef689d0d0cd29a076485d66f769ceee4
#      https://www.protherm.com.tr/_temp/protherm-puma-condens-kullanma-kilavuzu-18-24.pdf
#      s.12 Ek A: "F.22 Tesisat basıncı çok düşük" → "Isıtma sistemindeki su yetersiz" → "1. Isıtma sisteminin dolum basıncını kontrol edin. 2. Isıtma sistemini doldurun."
#      s.8 5.3.1: "Ana ekranda [tuş] tuşuna üç kere basın." / "Dolum basıncı < 0,5 bar (0,05 MPa) ise, ısıtma sistemini doldurun."
#      s.9: "Isıtma sistemi birçok kata kadar uzanıyorsa, ısıtma sistemi dolum basıncı için daha yüksek değerler gerekli olabilir. Bunun için bir yetkili servise başvurun."
#      s.9 5.3.2: "1. Isıtma sisteminin tüm radyatör termostat vanalarını açın." "2. Doldurma vanasını (1) yavaşça açın, gerekli sistem basıncına ulaşılana kadar su doldurun ve doldurma vanasını kapatın. – Gerekli sistem basıncı: 1,0 ila 1,4 bar"
#      s.9 "Hava alma için bir hava tahliye anahtarı kullanılabilir." · "4. Havasını aldıktan sonra tekrar tesisat basıncını kontrol edin." · "5. Gerekirse doldurma ve hava alma adımlarını tekrarlayın."
#      s.9 Bilgi: "Aşağıdaki adımlar sistem/tesisat için uygun değilse bir yetkili bayiye başvurun." · s.10 F.22'de ana ekran "F. → 22 → X,X bar → XX °C" arasında geçiş yapar.
#  (L) Protherm "Kullanma kılavuzu Lynx Condens 24 kW, 28 kW" 0020277896_02, 20 s., md5 a062e2f5414dde91e8e73afb33559a11
#      https://www.protherm.com.tr/_temp/7ba8cc34-c05a-44d9-90c1-607f1a2c579d.pdf
#      s.11 4.4: "Ayda bir kez, kullanıcı arayüzünde gösterilen ısıtma sistemi basıncının 0,05 MPa ile 0,27 MPa (0,5 bar ve 2,7 bar) arasında olduğundan emin olun." · "Dolum basıncı çok düşük ise, ısıtma sistemine su takviyesi yapın."
#      s.11 4.5: "Kullanıcı sadece ısıtma sistemine su doldurmaktan sorumludur." · "2. Yetkili bayinin size gösterdiği gibi doldurma vanasını yavaşça açın." · s.12 "5. Doldurma sonrasında doldurma vanasını kapatın."
#      s.15 Ek B: "Sistem basıncı yeterli değil. Isıtma sisteminde yetersiz su (Arıza mesajı: F.22)." → "Isıtma sistemini doldurun ... Basınç düşmesi sık yaşanıyorsa, yetkili bayiye başvurun."
#      s.15 "Tesisat basıncı fazla yüksek." → "Isıtma sistemindeki basıncı azaltmak için radyatörün havasını alın veya yetkili bayinize başvurun."
#  (G) Protherm "Kullanma kılavuzu Gepard Condens 20/24 KTV-FC/3 (H-TR)" 0020281180_03, 16 s., md5 e007ac08696eee927eb59ddd827dfb63
#      https://www.protherm.com.tr/_temp/c2f54fd4-f5ad-4a4c-a6a3-195cd32bb5f9.pdf
#      s.9 4.7: "Tesisat basıncı müsaade edilen aralığın dışındaysa ekranda F10 görüntülenir." · "Sistem basıncı: < 0,08 MPa (< 0,80 bar) ▶ Isıtma sistemini doldurun."
#      s.10 4.8: doldurma vanası "Sola çevirin" / kapatma "Sağa çevirin" · "Sistem basıncı: 0,1 … 0,2 MPa (1,0 … 2,0 bar)" · s.13 F10 = "Isıtma sisteminde yetersiz su"
# BİLEREK YAZILMAYANLAR: radyatör hava alma numaralı adıma alınmadı (P s.9 "hava tahliye anahtarı" → alet kuralı; P s.12 havayı servise veriyor) · su kaçağı/genleşme tankı teşhisi (belgede yok)
#   · doldurma vanasının yerine dair genelleme (Puma'da kombinin altında (1) numaralı vana, Gepard'da soğuk su borusunda; Lynx "yetkili bayinin size gösterdiği gibi") · gaz vanası/gaz müdahalesi · fiyat.
# Alıntı denetim tablosu: protherm-kombi-f22-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ekrandaki basınç değerini oku; Puma Condens'te ana ekranda basınç tuşuna üç kez bas."
  - "Isıtma sistemindeki bütün radyatör termostat vanalarını aç."
  - "Doldurma vanasını yavaşça açarak sisteme su ver."
  - "Basınç 1,0-1,4 bar aralığına gelince doldurma vanasını kapat."
  - "Ekranda basıncı yeniden kontrol et, gerekiyorsa doldurmayı tekrarla."
  - "Sonraki haftalarda basıncı ayda bir kez kontrol et."
  - "Basınç kısa sürede yeniden düşüyorsa ya da doldurma vanasını bulamıyorsan yetkili bayiye başvur."
faq:
  - q: "Protherm kombide F22 ne demek?"
    a: "Protherm'in Puma Condens kılavuzundaki kod tablosunda F.22 'Tesisat basıncı çok düşük' olarak geçiyor; olası neden ısıtma sistemindeki suyun yetersiz olması. Tablo iki tedbir veriyor: ısıtma sisteminin dolum basıncını kontrol etmek ve ısıtma sistemini doldurmak."
  - q: "Kaç bar'a kadar su basmalıyım?"
    a: "Puma Condens kılavuzu gerekli sistem basıncını 1,0 ila 1,4 bar olarak veriyor. Gepard Condens kılavuzu 1,0 ile 2,0 bar arasını yazıyor. Protherm ayrıca ısıtma sistemi birçok kata uzanıyorsa daha yüksek değer gerekebileceğini, bunun için yetkili servise başvurulmasını söylüyor."
  - q: "Su basmayı kendim yapabilir miyim?"
    a: "Protherm'in kılavuzları doldurmayı kullanıcıya veriyor. Lynx Condens kılavuzuna göre yetkili bayi ilk dolumdan ve su kalitesinden sorumlu, kullanıcı ise yalnız ısıtma sistemine su doldurmaktan sorumlu; doldurma vanası yetkili bayinin gösterdiği gibi yavaşça açılıyor."
  - q: "Ekranda F22 değil F10 görüyorum, aynı şey mi?"
    a: "Gepard Condens kılavuzunda tesisat basıncı izin verilen aralığın dışına çıktığında ekranda F10 görünüyor ve arıza tablosu F10'u 'ısıtma sisteminde yetersiz su' satırında sayıyor. Tedbir aynı: ısıtma sistemini doldurmak. Hangi kodun çıktığı modele bağlı."
images:
  coverAlt: "Duvara monteli beyaz bir yoğuşmalı kombinin dijital ekranında düşük basınç uyarısı ve altında boru bağlantıları"
---

Kombinin ekranında **F.22** belirdi ve ısıtma durdu. Protherm'in Puma Condens kullanma kılavuzundaki kod tablosu bu kodu tek satırla açıklıyor: **"F.22 Tesisat basıncı çok düşük"**, olası neden **"Isıtma sistemindeki su yetersiz"**. İyi haber şu: Protherm doldurmayı kullanıcıya veriyor. Bu yazıda Puma Condens, Lynx Condens ve Gepard Condens kılavuzlarındaki sırayı birlikte izliyoruz; tuş ve vana yerleri modele göre değişir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** F.22 = ısıtma suyunda basınç düşük. Basıncı ekrandan oku → radyatör vanalarını aç → doldurma vanasını yavaşça aç → 1,0-1,4 bar'da (Puma) kapat → basıncı tekrar kontrol et. Basınç kısa sürede yine düşüyorsa Protherm'in tavsiyesi yetkili bayi.

## F.22 ekranda nasıl görünür?

Puma Condens kılavuzuna göre F.22 ortaya çıktığında ana ekran durmadan dönüşür: **"F. → 22 → X,X bar → XX °C"**. Yani kod, o anki su basıncı ve kalorifer gidiş sıcaklığı sırayla görünür. Lynx Condens kılavuzuna göre aynı anda birden çok arıza varsa kodlar 2'şer saniye arayla dönüşümlü gösterilir. Gepard Condens'te aynı durumun kodu farklı: kılavuz, tesisat basıncı izin verilen aralığın dışına çıkınca ekranda **F10** görüneceğini yazıyor.

## Adım adım: evde denenecekler

**1. Önce basıncı oku.** Puma Condens'te ana ekranda basınç tuşuna **üç kere bas**; ekranda güncel dolum basıncı görünür ve basınç sembolü yanıp söner. Kılavuz eşiği de veriyor: dolum basıncı **0,5 bar'ın altındaysa** ısıtma sistemini doldur. Lynx Condens'te basınç zaten ana ekranda gösteriliyor; Gepard Condens'te **0,8 bar'ın altı** doldurma işareti.

**2. Radyatör vanalarını aç.** Protherm'in doldurma talimatının ilk maddesi: **ısıtma sisteminin tüm radyatör termostat vanalarını aç.**

**3. Doldurma vanasını yavaş aç.** Puma Condens'te doldurma vanasını (kılavuzdaki şekilde 1 numara) **yavaşça** aç. Gepard Condens'te vana soğuk su borusunda ve **sola çevrilerek** açılıyor. Lynx Condens kılavuzu vananın **yetkili bayinin size gösterdiği gibi** açılmasını istiyor; yerini bilmiyorsan zorlama, son adıma geç.

**4. Hedefe gelince kapat.** Puma Condens için gerekli sistem basıncı **1,0 ila 1,4 bar.** Gepard Condens kılavuzu **1,0 ile 2,0 bar** aralığını veriyor. Değere ulaşınca doldurma vanasını kapat (Gepard'da sağa çevirerek).

**5. Basıncı yeniden kontrol et.** Puma Condens kılavuzunun son iki maddesi bu: tesisat basıncını **tekrar kontrol et**, gerekirse doldurma adımlarını **tekrarla.**

**6. Ayda bir göz at.** Lynx Condens kılavuzu basıncın **ayda bir kez** kontrol edilmesini ve **0,5 ile 2,7 bar** arasında olduğundan emin olunmasını istiyor. Basınç bu aralıktaysa yapılacak bir şey yok.

**7. Tekrar ediyorsa yetkili bayi.** Lynx Condens'in arıza tablosu açık: basınç düşmesi tekrar tekrar yaşanıyorsa **yetkili bayiye başvurun.** Doldurma vanasına ulaşamıyorsan ya da kılavuzun dediği gibi adımlar senin tesisatına uymuyorsa da aynı yere.

## Petek havası ve fazla basınç

Puma Condens kılavuzu doldurma sonrasında radyatörlerin havasının, radyatörün üst sol ya da sağ tarafındaki bağlantı noktasından alınmasını anlatıyor ve bunun için bir **hava tahliye anahtarı** kullanılabileceğini yazıyor. Aynı kılavuzun arıza tablosu ise ısıtma sistemindeki hava için **yetkili servise başvurulmasını** söylüyor. Alet gerektiren bu kısmı bu rehberin adımlarına almadık; emin değilsen servise bırak.

Basıncı fazla yükselttiysen Lynx Condens tablosundaki satır geçerli: **tesisat basıncı fazla yüksek** ise basıncı azaltmak için radyatörün havası alınır ya da yetkili bayiye başvurulur. Kılavuzun doldurma vanasını **yavaşça** açma talimatı bu yüzden önemli; hedef değere gelince vanayı kapat.

Çok katlı bir tesisatta Protherm'in notu önemli: ısıtma sistemi birçok kata uzanıyorsa **daha yüksek dolum basıncı** gerekebilir; doğru değeri yetkili servise sor. Basıncın genel olarak kaç bar olması gerektiğini [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) yazısında, markadan bağımsız nedenleri [kombi basınç düşüyor](/blog/kombi-basinc-dusuyor/) yazısında anlattık.

## Ne zaman servis

- Doldurduğun hâlde basınç kısa sürede yine düşüyor ve F.22 geri geliyorsa.
- Doldurma vanasının yerini bilmiyorsan ya da vana elle açılmıyorsa.
- Ekranda F.22 dışında bir kod da varsa; Protherm'in genel kuralı, arızayı belirtilen önlemlerle gideremiyorsan yetkili servise başvurmak.

⛔ Kombinin kapağının arkası, gaz hattı ve elektrik bağlantıları bu rehberin konusu değil. Kombi hiç çalışmıyorsa kardeş yazımız [Protherm kombi çalışmıyor](/blog/protherm-kombi-calismiyor/) sayfasındaki sıraya geç; diğer kodlar için [kombi arıza kodları](/blog/kombi-ariza-kodlari/) listesine bak.

Belirtiyi yaz, olası arızayı ve tahmini maliyeti ücretsiz öğren. Bil, gör, çağır.

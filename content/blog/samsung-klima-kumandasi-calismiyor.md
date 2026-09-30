---
title: "Samsung klima kumandası çalışmıyor: evde kontrol"
description: "Samsung klima kumandaya tepki vermiyorsa Samsung'un sırası: pil, sinyal yolu, parlak ışık, zamanlayıcıda AYARLA düğmesi, yanıp sönen gösterge."
slug: "samsung-klima-kumandasi-calismiyor"
date: "2026-09-30"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-09-30, curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200; PDF md5'leri 28 Eyl kopyalarıyla birebir aynı. PDF'ler pdftotext -layout -f N -l N ile sayfa sayfa okundu (PDF sayfası = basılı sayfa).
# Web araması yalnız belgelerin YERİNİ bulmak için kullanıldı; hiçbir cümle arama sonucundan, forumdan ya da servis sitesinden alınmadı.
#  M1) Samsung TR kılavuz AR9500T WindFree, 50 s., md5 5c6daf15aa6a54b37e7af4186f36708a
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=AR12TSFYCWK%2FSK&CttFileID=7963378&CDCttType=UM&VPath=UM%2F202102%2F20210203204244405%2FRAC029-02_IB_AR9500T_GEO_WIND_TR_TR-WEB_.pdf
#      s.35 "Uzaktan kumanda çalışmıyor." → "Uzaktan kumandanın pillerini değiştirin." / "Uzaktan kumandanın üniteye engellenmeden sinyal gönderebildiğinden emin olun." / "Üniteden parlak ışıkları uzak tutun. Floresan ampullerden veya neon tabelalardan gelen ışık, uzaktan kumandadan gelen sinyali kesebilir."
#      s.35 "Zamanlamalı açma/kapatma işlevi çalışmıyor." → "Zamanlayıcıyı ayarlarken uzaktan kumanda üzerinde bulunan (AYARLA) düğmesine bastığınızdan emin olun."
#      s.35 "Uzaktan kumanda üzerindeki gösterge sürekli olarak yanıp söner." → "Üniteyi kapatmak için (Güç) düğmesine basın veya fiş bağlantısını kesin." / "Uzaktan kumanda üzerindeki gösterge ışığı yanıp sönmeye devam ederse servis sağlayıcınızla iletişime geçin."
#      s.15 "05 Düşük pil göstergesi" / "İki adet 1,5 V AAA pil"
#      s.16 °C↔°F NOT: "Bu işlev, uzaktan kumanda pilleri değiştirildiğinde iptal edilir. Bu durumda, bu işlevi tekrar çalıştırın."
#      s.9 "Uzaktan kumandaya çarpmayın, sallamayın, düşürmeyin veya sökmeye çalışmayın." / "Uzaktan kumandanın pillerini değiştirirken, pil sıvısının cildinize temas etmemesine dikkat edin."
#  M2) Samsung TR kılavuz AR09/12JSFSCWK (AR3050), 47 s., md5 140a45cb498831b61bf9d6035592c6bd
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=AR12MSFSCWKXSK&CttFileID=7023832&CDCttType=UM&VPath=UM%2F201804%2F20180419115020221%2F180205_SK_GOOD_INV_A3050_IB_TR_DB68-06583A-02.pdf
#      s.27 "Uzaktan kumanda çalışmıyor." → "Uzaktan kumanda içindeki pilleri yenileriyle değiştirin." / "Uzaktan kumanda sensörünü engelleyecek bir şey olmadığından emin olun." / "Floresan veya neon gibi kaynaklardan gelen güçlü ışık elektrik dalgalarını engelleyebilir."
#      s.28 "Açma/Kapama zamanı işlevi çalışmıyor." → "Zamanı ayarladıktan sonra uzaktan kumandadaki AYAR düğmesine basılıp basılmadığını kontrol edin." / "Gösterge sürekli yanıp söner." → "Klimayı kapatmak için Güç düğmesine basın veya fişi çıkarın. Gösterge hala yanıp sönüyorsa, servis merkezine başvurun."
#      s.12 "05 Düşük pil göstergesi" / "Iki 1.5V AAA tipi piller"
#  F) Samsung TR "Samsung Klima Hakkında SSS"  https://www.samsung.com/tr/home-appliances/faq-air-conditioner/  md5 36a4765704f8dc63766879d1c8ea93c7 (2026-09-30, HTML dinamik)
#      "S. Uzaktan kumanda çalışmazsa ne yapmalıyım?" → "Uzaktan kumandanın pillerini şarj edin veya değiştirin ve hiçbir şeyin sinyali engellemediğinden emin olun." / "Alıcı yakınında parlak floresan/neon ışıktan kaçının." / "Model destekliyorsa yeniden eşleştirmeyi deneyin." / "Not: Sorun devam ederse yardım için Samsung Destek sayfasını ziyaret edin."
# BİLEREK YAZILMAYANLAR: kumandayı açıp temas uçlarını temizleme ya da onarma (M1 s.9 "sökmeye çalışmayın"); yeniden eşleştirmenin nasıl yapılacağı (belgede modele özel tarif yok, yalnız "model destekliyorsa" notu verildi); telefon kamerasıyla kızılötesi testi (Samsung belgesinde yok, genel yazıya link verildi).
# Alıntı denetim tablosu: samsung-klima-kumandasi-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Yeni pil"]
steps:
  - "Kumanda ekranında düşük pil göstergesine bak ve pilleri yenileriyle değiştir."
  - "Kumandayı iç üniteye doğrult; arada sinyali kesen bir eşya olmadığından emin ol."
  - "Ünitenin yakınındaki floresan lamba ya da neon gibi parlak ışık kaynaklarını kapat ya da uzak tut."
  - "Sorun zamanlayıcıdaysa zamanı ayarladıktan sonra kumandadaki AYARLA düğmesine bastığından emin ol."
  - "Kumanda üzerindeki gösterge sürekli yanıp sönüyorsa klimayı Güç düğmesiyle kapat ya da fişini çıkar."
  - "Gösterge yanıp sönmeye devam ediyorsa ya da yeni pillere rağmen kumanda çalışmıyorsa model numarasıyla Samsung yetkili servisine başvur."
faq:
  - q: "Samsung klima kumandası hangi pili kullanır?"
    a: "Samsung'un Türkçe kılavuzlarındaki AR9500T WindFree ve AR09/12JSFSCWK serisi kumandaları iki adet 1,5 V AAA pil kullanıyor. Kendi kumandanın pil tipini kılavuzundan ya da pil yuvasından kontrol et."
  - q: "Pilleri değiştirdim, kumanda yine çalışmıyor. Neden olabilir?"
    a: "Samsung kılavuzları iki nedeni daha sayıyor: kumandayla ünite arasında sinyali engelleyen bir şey olması ve ünitenin yakınındaki floresan ampul ya da neon tabela gibi parlak ışıkların sinyali kesmesi. Bunlar da sorunu çözmüyorsa Samsung yetkili servisine başvur."
  - q: "Pil değiştirdikten sonra ekrandaki derece birimi değişti, neden?"
    a: "AR9500T WindFree kılavuzuna göre kumandadaki Santigrat-Fahrenheit geçiş işlevi pil değiştirildiğinde iptal edilir. Bu durumda işlevi yeniden seçmen gerekir."
  - q: "Kumandayı açıp içini temizleyebilir miyim?"
    a: "Samsung kılavuzu kumandaya çarpılmamasını, sallanmamasını, düşürülmemesini ve sökülmeye çalışılmamasını istiyor. Pil değiştirirken pil sıvısının cildine temas etmemesine de dikkat et. Kumanda sağlam pillerle çalışmıyorsa Samsung yetkili servisine başvur."
images:
  coverAlt: "Bir elin tuttuğu beyaz klima kumandası ve yanında sehpanın üzerinde duran iki yeni AAA pil"
---

Kumandaya basıyorsun ama klima tepki vermiyor. Samsung'un Türkçe kullanım kılavuzunun sorun giderme tablosunda bu belirtinin karşılığı **"Uzaktan kumanda çalışmıyor."** ve ilk çözüm en basiti: **"Uzaktan kumandanın pillerini değiştirin."** Samsung ayrıca sinyal yolunu ve odadaki parlak ışık kaynaklarını kontrol etmeni istiyor. Bu yazıda Samsung'un kendi sırasını adım adım anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce pil: kumanda ekranında düşük pil göstergesi var mı, pilleri yenile. Sonra sinyal: kumandayı iç üniteye doğrult, arada engel olmasın, floresan ya da neon ışıkları uzak tut. Zamanlayıcı çalışmıyorsa AYARLA düğmesine basmayı unutma. Kumandadaki gösterge sürekli yanıp sönüyorsa klimayı kapat; sürerse → Samsung yetkili servisi.

## Samsung'a göre nedenler

| Neden | Evde kontrol edilebilir mi? |
|---|---|
| Kumanda pilleri zayıf ya da bitmiş | Evet, pil değişimi |
| Kumandayla ünite arasında sinyali engelleyen bir şey var | Evet, kumandayı doğrultup engeli kaldırma |
| Floresan ampul ya da neon tabela gibi parlak ışık sinyali kesiyor | Evet, ışığı kapatma ya da uzak tutma |
| Zamanlayıcı ayarlanırken AYARLA düğmesine basılmamış | Evet, zamanlayıcıyı yeniden kurma |
| Kumanda üzerindeki gösterge sürekli yanıp sönüyor | Klimayı kapatmayı dene; sürerse servis |

Samsung Türkiye'nin klima SSS sayfası bu listeye bir not ekliyor: model destekliyorsa kumandayı yeniden eşleştirmeyi deneyebilirsin. Eşleştirmenin modeline göre nasıl yapıldığı için kendi kılavuzuna bak.

## Adım adım: evde denenecekler

**1. Pil.** Kumanda ekranında düşük pil göstergesine bak ve pilleri yenileriyle değiştir. Kılavuzdaki modellerin kumandası iki adet 1,5 V AAA pil kullanıyor. Pil değiştirirken pil sıvısının cildine temas etmemesine dikkat et.

**2. Sinyal yolu.** Kumandayı iç üniteye doğrult; arada sinyali kesen bir eşya olmadığından emin ol. Samsung kılavuzu kumandanın üniteye engellenmeden sinyal gönderebilmesini istiyor.

**3. Parlak ışık.** Ünitenin yakınındaki floresan lamba ya da neon gibi parlak ışık kaynaklarını kapat ya da uzak tut. Kılavuza göre bu ışıklar kumandadan gelen sinyali kesebilir.

**4. Zamanlayıcı.** Sorun zamanlayıcıdaysa zamanı ayarladıktan sonra kumandadaki AYARLA düğmesine bastığından emin ol. Samsung kılavuzu zamanlamalı açma-kapatma işlevi çalışmadığında önce buna bakmanı istiyor.

**5. Yanıp sönen gösterge.** Kumanda üzerindeki gösterge sürekli yanıp sönüyorsa klimayı Güç düğmesiyle kapat ya da fişini çıkar.

**6. Sürerse servis.** Gösterge yanıp sönmeye devam ediyorsa ya da yeni pillere rağmen kumanda çalışmıyorsa model numarasıyla Samsung yetkili servisine başvur.

## Ne zaman servis?

Samsung kılavuzu sınırı yanıp sönen göstergede çiziyor: klimayı kapattıktan sonra kumanda üzerindeki gösterge ışığı yanıp sönmeye devam ederse servis sağlayıcınla iletişime geçmeni istiyor. Samsung'un SSS sayfası da sorun devam ederse Samsung Destek'e başvurmanı söylüyor.

| Durum | Kimin işi |
|---|---|
| Pil, sinyal yolu, parlak ışık, AYARLA düğmesi | Senin, bu rehberdeki adımlar |
| Gösterge kapattıktan sonra da yanıp sönüyor | Samsung yetkili servisi |
| Yeni pillere ve açık sinyal yoluna rağmen kumanda çalışmıyor | Samsung yetkili servisi |

⛔ Kumandayı açmaya ya da onarmaya çalışma. Samsung kılavuzu kumandaya çarpılmamasını, düşürülmemesini ve sökülmeye çalışılmamasını istiyor.

Klima kumandayla birlikte hiç açılmıyorsa [Samsung klima çalışmıyor](/blog/samsung-klima-calismiyor/) yazısına bak. Markadan bağımsız anlatım ve kumandanın sinyal gönderip göndermediğini anlamanın genel yolu için [klima kumandası çalışmıyor](/blog/klima-kumandasi-calismiyor/) yazısı işine yarar.

---

**Kaynak künyesi.** Sorun giderme adımları, pil tipi ve düşük pil göstergesi Samsung'un Türkçe kullanım kılavuzlarından (AR9500T WindFree ve AR09/12JSFSCWK serisi); yeniden eşleştirme notu Samsung Türkiye'nin klima SSS sayfasından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

---
title: "Samsung klima çalışmıyor: evde kontrol"
description: "Samsung klima açılmıyorsa Samsung'un sırası: elektrik ve fiş, devre kesici, zamanlayıcı, kumanda pili, güç sıfırlama ve servis sınırı."
slug: "samsung-klima-calismiyor"
date: "2026-09-30"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-09-30, curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200; PDF md5'leri 28 Eyl kopyalarıyla birebir aynı. PDF'ler pdftotext -layout -f N -l N ile sayfa sayfa okundu (PDF sayfası = basılı sayfa).
# Web araması yalnız belgelerin YERİNİ bulmak için kullanıldı; hiçbir cümle arama sonucundan, forumdan ya da servis sitesinden alınmadı.
#  M1) Samsung TR kılavuz AR9500T WindFree, 50 s., md5 5c6daf15aa6a54b37e7af4186f36708a
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=AR12TSFYCWK%2FSK&CttFileID=7963378&CDCttType=UM&VPath=UM%2F202102%2F20210203204244405%2FRAC029-02_IB_AR9500T_GEO_WIND_TR_TR-WEB_.pdf
#      s.34 "Klima çalışmıyor." → "Makineye güç geldiğinden emin olun." / "Devre kesiciyi kontrol edin. Devre kesici devreye girdiyse devreden çıkarın ve üniteyi yeniden başlatın. Sorun devam ederse servis sağlayıcınızla iletişime geçin." / "Zamanlamalı kapatma işlevi üniteyi kapatmış olabilir. Üniteyi tekrar açın."
#      s.35 "Uzaktan kumanda çalışmıyor." → "Uzaktan kumandanın pillerini değiştirin." / "Uzaktan kumandanın üniteye engellenmeden sinyal gönderebildiğinden emin olun."
#      s.35 "Uzaktan kumanda ekranında bir hata mesajı gösteriliyor." → "İç ünite göstergesi yanıp sönüyorsa hata kodunu not edin. Servis sağlayıcınızla iletişime geçin ve onlara hata kodunu verin."
#      s.7 "Devre kesici zarar görürse, en yakın servis merkezine başvurun." / "Cihazdan garip sesler, yanık kokusu veya duman gelirse, hemen güç kaynağının bağlantısını kesin ve size en yakın servis merkezine başvurun."
#      s.15 "İki adet 1,5 V AAA pil"
#  M2) Samsung TR kılavuz AR09/12JSFSCWK (AR3050), 47 s., md5 140a45cb498831b61bf9d6035592c6bd
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=AR12MSFSCWKXSK&CttFileID=7023832&CDCttType=UM&VPath=UM%2F201804%2F20180419115020221%2F180205_SK_GOOD_INV_A3050_IB_TR_DB68-06583A-02.pdf
#      s.27 "Klima hiç çalışmıyor." → "Güç durumunu kontrol edin, sonra klimayı yeniden çalıştırın." / "Devre kesiciyi açın, güç kablosunu takın, sonra klimayı yeniden çalıştırın." / "İzolatörün açık olduğundan emin olun." / "Kapama zamanı işlevinin çalışıp çalışmadığını kontrol edin. Klimayı Güç düğmesine basarak yeniden çalıştırın."
#      s.28 "Gösterge sürekli yanıp söner." → "Klimayı kapatmak için Güç düğmesine basın veya fişi çıkarın. Gösterge hala yanıp sönüyorsa, servis merkezine başvurun." / "Hata görüntüleniyor." → "İç ünite göstergesi yanıp sönüyorsa, en yakın servis merkezine başvurun. Hata kodunu servis merkezine gönderdiğinizden emin olun."
#  S1) Samsung TR "Samsung Klima hata kodları ve çözümleri nelerdir?"  https://www.samsung.com/tr/support/home-appliances/what-are-samsung-air-conditioner-error-codes-and-solutions/  md5 397b6bb067702dbec67f1208aed9de60 (2026-09-30, HTML dinamik)
#      "Klima düzgün çalışmıyorsa, elektrik bağlantılarını ve sigortayı kontrol edin." / "Hata kodları sık sık tekrarlanıyorsa, Samsung yetkili servisinden yardım alın."
#  F) Samsung TR "Samsung Klima Hakkında SSS"  https://www.samsung.com/tr/home-appliances/faq-air-conditioner/  md5 36a4765704f8dc63766879d1c8ea93c7 (2026-09-30, HTML dinamik)
#      "S. Klima çalışmazsa ne yapmalıyım?" → "İç mekan ünitesine ve kesiciye/RCD'ye giden gücü kontrol edin." / "Zamanlı Kapatma veya Uyku fonksiyonunun etkin olmadığından emin olun." / "Geçici sıfırlama için üniteyi kapatın/açın." / "Not: Sorun devam ederse (veya bir hata kodu görüntüleniyorsa) kodu not edin"
#      "S. İç mekan ünitesinin göstergesi sürekli yanıp sönüyorsa ne yapmalıyım?" → "Yanıp sönen ışık genellikle bir koruma veya hata durumu anlamına gelir. Güç sıfırlaması yapmayı deneyin (Güç düğmesiyle KAPATIN veya fişi çıkarıp 1 dakika bekledikten sonra AÇIN)."
# BİLEREK YAZILMAYANLAR: sigorta değiştirme, priz/kablo/kart kontrolü (elektrik müdahalesi, #31); zarar görmüş kesiciye müdahale (kılavuz servis diyor); belgede olmayan kart/kapasitör teşhisi.
# Alıntı denetim tablosu: samsung-klima-calismiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Yeni pil"]
steps:
  - "Evde elektrik olduğunu ve klimanın fişi varsa takılı olduğunu kontrol et."
  - "Sigorta kutusunda klimanın bağlı olduğu devre kesicinin düşüp düşmediğine bak; düşmüşse bir kez aç ve klimayı yeniden başlat."
  - "Klima için ayrı bir izolatör (ayırıcı şalter) varsa açık konumda olduğunu kontrol et."
  - "Zamanlamalı kapatma ya da Uyku işlevi klimayı kapatmış olabilir; Güç düğmesiyle yeniden aç."
  - "Kumandanın pillerini yenileriyle değiştir ve kumandayı arada engel olmadan iç üniteye doğrult."
  - "Hâlâ tepki yoksa güç sıfırlaması yap: klimayı Güç düğmesiyle kapat ya da fişini çıkar, 1 dakika bekle, yeniden aç."
  - "Kesici yeniden düşüyorsa, iç ünite göstergesi yanıp sönüyorsa ya da ekranda hata kodu varsa kodu ve model numarasını not edip Samsung yetkili servisine ilet."
faq:
  - q: "Samsung klima hiç açılmıyor, ilk neye bakmalıyım?"
    a: "Samsung'un Türkçe kılavuzları ilk sıraya gücü koyuyor: makineye güç geldiğinden emin olmanı, devre kesiciyi kontrol etmeni ve kesici devreye girdiyse açıp üniteyi yeniden başlatmanı istiyor. Samsung Türkiye'nin destek sayfası da klima düzgün çalışmıyorsa elektrik bağlantılarını ve sigortayı kontrol etmeni söylüyor."
  - q: "Klima kendi kendine kapandı, arıza mı?"
    a: "Olmayabilir. Samsung kılavuzuna göre zamanlamalı kapatma işlevi üniteyi kapatmış olabilir; üniteyi Güç düğmesiyle tekrar açman yeterli. Samsung'un SSS sayfası Uyku fonksiyonunun da etkin olmadığından emin olmanı istiyor."
  - q: "İç ünitenin ışığı yanıp sönüyor, ne yapayım?"
    a: "Samsung'un SSS sayfasına göre yanıp sönen ışık genellikle bir koruma ya da hata durumu anlamına gelir. Önce güç sıfırlaması dene: Güç düğmesiyle kapat ya da fişi çıkarıp 1 dakika bekledikten sonra aç. Gösterge hâlâ yanıp sönüyorsa ya da bir hata kodu görünüyorsa kodu not edip servis merkezine başvur."
  - q: "Kesiciyi açtım ama yine düştü. Tekrar açayım mı?"
    a: "Samsung kılavuzu kesiciyi açıp üniteyi yeniden başlattıktan sonra sorun devam ederse servis sağlayıcınla iletişime geçmeni istiyor; devre kesici zarar gördüyse de en yakın servis merkezine başvurmanı söylüyor. Kesici yeniden düşüyorsa Samsung yetkili servisine başvur."
images:
  coverAlt: "Oturma odasında duvardaki beyaz split klimanın kapalı iç ünitesi ve ona doğru tutulan bir uzaktan kumanda"
---

Kumandaya basıyorsun ama klima açılmıyor. Samsung'un Türkçe kullanım kılavuzunun sorun giderme tablosunda bu belirtinin karşılığı açık: **"Klima çalışmıyor."** Çözüm sütunu da evde kontrol edilebilecek maddelerle başlıyor: güç, devre kesici ve zamanlamalı kapatma. Bu yazıda Samsung'un kendi sırasını, Samsung Türkiye'nin destek ve SSS sayfalarıyla birlikte adım adım anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce güç: evde elektrik var mı, fiş takılı mı, devre kesici düşmüş mü? Sonra zamanlayıcı: klimayı zamanlamalı kapatma kapatmış olabilir, Güç düğmesiyle yeniden aç. Sonra kumanda pili ve güç sıfırlaması. Kesici yeniden düşüyorsa ya da iç ünitede hata kodu görünüyorsa → Samsung yetkili servisi.

## Samsung'a göre nedenler

Samsung kılavuzlarının "Klima çalışmıyor" satırı ve Samsung Türkiye'nin SSS sayfası şu maddeleri sayıyor:

| Neden | Evde kontrol edilebilir mi? |
|---|---|
| Makineye güç gelmiyor | Evet, elektrik ve fiş kontrolü |
| Devre kesici devreye girmiş (düşmüş) | Evet, kesici kolunu bir kez açma |
| İzolatör kapalı | Evet, şalterin konumuna bakma |
| Zamanlamalı kapatma ya da Uyku işlevi klimayı kapatmış | Evet, Güç düğmesiyle yeniden açma |
| Kumanda sinyal göndermiyor | Evet, pil ve sinyal yolu; ayrıntısı [Samsung klima kumandası çalışmıyor](/blog/samsung-klima-kumandasi-calismiyor/) yazısında |
| Koruma ya da hata durumu (iç ünite göstergesi yanıp sönüyor) | Güç sıfırlaması denenebilir; sürerse servis |

## Adım adım: evde denenecekler

**1. Elektrik ve fiş.** Evde elektrik olduğunu ve klimanın fişi varsa takılı olduğunu kontrol et. Samsung kılavuzu ilk olarak makineye güç geldiğinden emin olmanı istiyor.

**2. Devre kesici.** Sigorta kutusunda klimanın bağlı olduğu devre kesicinin düşüp düşmediğine bak; düşmüşse bir kez aç ve klimayı yeniden başlat. Samsung Türkiye'nin destek sayfası da klima düzgün çalışmıyorsa elektrik bağlantılarını ve sigortayı kontrol etmeni söylüyor.

**3. İzolatör.** Klima için ayrı bir izolatör (ayırıcı şalter) varsa açık konumda olduğunu kontrol et. Bu madde Samsung'un AR09/12JSFSCWK serisi kılavuzunda yer alıyor.

**4. Zamanlayıcı.** Zamanlamalı kapatma ya da Uyku işlevi klimayı kapatmış olabilir; Güç düğmesiyle yeniden aç. Samsung'un SSS sayfası Zamanlı Kapatma ya da Uyku fonksiyonunun etkin olmadığından emin olmanı istiyor.

**5. Kumanda.** Kumandanın pillerini yenileriyle değiştir ve kumandayı arada engel olmadan iç üniteye doğrult. Kılavuzdaki modellerin kumandası iki adet 1,5 V AAA pil kullanıyor.

**6. Güç sıfırlaması.** Hâlâ tepki yoksa güç sıfırlaması yap: klimayı Güç düğmesiyle kapat ya da fişini çıkar, 1 dakika bekle, yeniden aç. Samsung'un SSS sayfası bunu geçici sıfırlama olarak veriyor.

**7. Sürerse servis.** Kesici yeniden düşüyorsa, iç ünite göstergesi yanıp sönüyorsa ya da ekranda hata kodu varsa kodu ve model numarasını not edip Samsung yetkili servisine ilet.

## Ne zaman servis?

Samsung kılavuzu sınırı kesicide çiziyor: kesiciyi açıp üniteyi yeniden başlattıktan sonra sorun devam ederse servis sağlayıcınla iletişime geçmeni istiyor. İç ünite göstergesi yanıp sönüyorsa hata kodunu not edip servise vermeni, hata kodları sık sık tekrarlanıyorsa Samsung yetkili servisinden yardım almanı söylüyor.

| Durum | Kimin işi |
|---|---|
| Elektrik, fiş, düşmüş kesiciyi bir kez açma, izolatör, zamanlayıcı, kumanda pili | Senin, bu rehberdeki adımlar |
| Kesici yeniden düşüyor ya da zarar görmüş | Samsung yetkili servisi |
| İç ünite göstergesi yanıp sönüyor ya da ekranda hata kodu var | Kodu not et, Samsung yetkili servisi |
| Cihazdan garip ses, yanık kokusu ya da duman | Hemen güç bağlantısını kes, Samsung yetkili servisi |

⛔ Sigortayı değiştirmeye, prize, kabloya ya da iç ünitenin içine müdahale etmeye çalışma. Samsung kılavuzu devre kesici zarar görürse en yakın servis merkezine başvurmanı istiyor.

E ile başlayan kodların Samsung Türkiye tablosu [Samsung klima hata kodları](/blog/samsung-klima-hata-kodlari/) yazısında. Markadan bağımsız anlatım için [klima çalışmıyor](/blog/klima-calismiyor/) yazısına bakabilirsin.

---

**Kaynak künyesi.** Sorun giderme adımları Samsung'un Türkçe kullanım kılavuzlarından (AR9500T WindFree ve AR09/12JSFSCWK serisi); sigorta notu Samsung Türkiye'nin "Samsung Klima hata kodları ve çözümleri nelerdir?" destek sayfasından; Uyku işlevi ve güç sıfırlaması Samsung Türkiye'nin klima SSS sayfasından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

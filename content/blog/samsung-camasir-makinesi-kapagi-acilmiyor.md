---
title: "Samsung çamaşır makinesi kapağı açılmıyor"
description: "Samsung çamaşır makinesinin kapağı açılmıyorsa Samsung kılavuzunun sırası: durdur, 3 dakika bekle, kapak kilidi ışığı, kazandaki su, acil boşaltma ve servis."
slug: "samsung-camasir-makinesi-kapagi-acilmiyor"
date: "2026-09-29"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144, Samsung çamaşır BELİRTİ). K2 ve K1 bu koşuda curl -sL -A "Mozilla/5.0" ile yeniden indirildi, HTTP 200, md5 28 Eyl kopyasıyla birebir.
# #88: web araması YALNIZ belgenin yerini bulmak için; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan ya da ABD/İngiltere Samsung sayfasından alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-samsung-camasir-sprint/ · pdftotext -layout, sayfa = PDF sayfası = basılı sayfa.
#  K2) Kılavuz WW4000T (WW90T4020CE), DC68-04203B-03 TR, 72 s., md5 2a8fa3df96d4d49f5da7294316f4a2ae  (sayfa atıfları esas olarak bu belgeye göre)
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=WW90T4020CE&CttFileID=8758571&CDCttType=UM&VPath=UM%2F202209%2F20220901164943477%2FWW4000T-MD_UM_DC68-04203B-03_TR.pdf
#  K1) Kılavuz WW5000C (WW90CGC04DAE), DC68-04481M-00 TR, 68 s., md5 a6bdee67278bfcc9d0f6b252d4b5fb3a ("Kapak açılmıyor" satırı s.55, birebir aynı)
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=WW90CGC04DAE&CttFileID=9399472&CDCttType=UM&VPath=UM%2F202312%2F20231201172141976%2FDC68-04481M-00_IB_WW5000C-MD_TR_230919.pdf
#  K3) Kılavuz WW5000T TR, 68 s., md5 402b21c11194758ab81d7af5f78ffd4d (yerel kopya; aynı satır s.52)
#  T3) Samsung TR SSS "Samsung Çamaşır makinemde UE, UB veya E4 bilgi kodu neden görünür?" (Son güncelleme 2026-08-20; yerel 28 Eyl kopyası, md5 yeniden alındı)
#      https://www.samsung.com/tr/support/home-appliances/why-does-the-ue-ub-or-e4-information-code-appear-on-my-samsung-washing-machine/  md5 21a26adbf9068280efd40d31e820c3e6
# Birebir alıntılar (K2):
#   s.55 "Kapak açılmıyor.": "Çamaşır makinesini durdurmak için Başlat/Duraklat düğmesine basın veya dokunun." · "Kapı kilitleme mekanizmasının açılması birkaç dakika sürebilir."
#     · "Çamaşır makinesi durduktan ya da kapatıldıktan sonraki 3 dakika içinde kapak açılmaz." · "Kazandaki tüm suyun boşaldığından emin olun."
#     · "Kazanda su kalırsa kapak açılamayabilir. Kazanı boşaltın ve kapağı manüel olarak açın." · "Kapak kilidi ışığının söndüğünden emin olun. Çamaşır makinesi boşaldıktan sonra kapak kilidi ışığı söner."
#   s.38 Durulama Suyunda Bekletme: "Son durulama işlemi geciktirilir, böylece çamaşırlar suda kalır. Çamaşırı çıkarmak için, boşaltma veya sıkma işlemi çalıştırın."
#   s.48 Acil durum boşaltma işlemi: "Bir elektrik kesintisi durumunda, çamaşırı çıkarmadan önce kazandaki suyu boşaltın." 1. güç kapat, fişi çek 2. filtre kapağını aç (TİP 1 üst alana bas / TİP 2 mandala bas)
#     3. büyük kap, tüp kapağı (B) 4. tüp kapağını aç, su kaba aksın 5. tüp kapağını kapat, tüpü tak, filtre kapağını tak · NOT "Kazandaki su beklenenden fazla olabileceğinden büyük bir kap kullanın."
#   s.8 "Çamaşır makinesinin kapağını çalışırken zorla açmayın (yüksek sıcaklıkta yıkama/kurutma/dönme)." · "Kapağın zorla açılması cihazın hasar görmesine veya yaralanmaya neden olabilir."
#   s.57 AddWash: "AddWash Kapağı yalnızca gösterge göründüğünde açılabilir." açılmadığı durumlar: kaynatma/kurutma ve iç sıcaklık yüksek · Çocuk Kilidi · kazan yıkama/kazan kurutma programı
#   s.55 "Boşaltma ve/veya sıkma yapmıyor.": "Bir boşaltma kısıtlamasıyla karşılaşırsanız, servisi arayın."
#   T3 Not: "Makinenizin içerisinde su varsa kapağı açamayabilirsiniz. Bu durumda su tahliyesi yapmanız gerekecektir."
# BİLEREK YAZILMAYANLAR: kapak kilidi (kilit anahtarı) arızası teşhisi ve değişimi (belgede yok; parça işi, #31) · kapağı bir aletle/iple açma yöntemleri (belgede yok, #31)
#   · "manüel açma" için özel bir kol/mekanizma tarifi (Samsung metni yalnız "kapağı manüel olarak açın" diyor; mekanizma uydurulmadı) · Samsung TR "kapağım neden açılmıyor" SSS sayfası bu koşuda genel destek sayfasına düştü (içerik yok) → kullanılmadı.
# Alıntı denetim tablosu: samsung-camasir-makinesi-kapagi-acilmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Büyük, boş bir kap", "Kuru bez"]
steps:
  - "Makine çalışıyorsa Başlat/Duraklat düğmesine basarak durdur."
  - "Makine durduktan ya da kapatıldıktan sonra en az 3 dakika bekle."
  - "Kapak kilidi ışığının söndüğünü kontrol et."
  - "Kapak camından kazanda su kalıp kalmadığına bak; Durulama Suyunda Bekletme seçiliyse bir boşaltma ya da sıkma işlemi çalıştır."
  - "Su boşalamıyorsa ya da elektrik kesikse makineyi kapat ve fişini çek."
  - "Kılavuzdaki acil durum boşaltma işlemiyle kazandaki suyu büyük bir kaba boşalt, tüpü ve filtre kapağını yerine tak."
  - "Kazan boşaldıktan sonra kapağı elle, zorlamadan aç."
  - "Su hiç boşalmıyorsa ya da kazan boşken kapak yine açılmıyorsa Samsung yetkili servisine başvur."
faq:
  - q: "Program bitti ama Samsung çamaşır makinesinin kapağı açılmıyor, neden?"
    a: "Samsung'un Türkçe kılavuzuna göre kapak, makine durduktan ya da kapatıldıktan sonraki 3 dakika içinde açılmaz ve kapı kilitleme mekanizmasının açılması birkaç dakika sürebilir. Kapak kilidi ışığı, makine boşaldıktan sonra söner; ışık yanıyorsa beklemeye devam et."
  - q: "Kazanda su var, kapak açılmıyor. Ne yapmalıyım?"
    a: "Samsung'a göre kazanda su kalırsa kapak açılamayabilir; kazanı boşaltıp kapağı elle açmak gerekir. Durulama Suyunda Bekletme seçiliyse çamaşırı çıkarmak için bir boşaltma ya da sıkma işlemi çalıştır. Elektrik kesikse ya da su boşalmıyorsa kılavuzdaki acil durum boşaltma işlemini uygula; su beklenenden fazla olabileceği için büyük bir kap kullan."
  - q: "Kapağı zorlayarak açabilir miyim?"
    a: "Hayır. Samsung kılavuzu çamaşır makinesinin kapağının çalışırken zorla açılmamasını söylüyor; kapağın zorla açılması cihazın hasar görmesine ya da yaralanmaya neden olabilir, taşan su da yanığa ve zeminin kayganlaşmasına yol açabilir."
  - q: "AddWash kapağı açılmıyor, arıza mı?"
    a: "Olmayabilir. Samsung kılavuzuna göre AddWash kapağı yalnızca gösterge göründüğünde açılabilir ve kaynatma ya da kurutma sırasında iç sıcaklık yükseldiğinde, Çocuk Kilidi ayarlıyken ya da ek çamaşır içermeyen kazan yıkama veya kazan kurutma programı çalışırken açılmaz."
images:
  coverAlt: "Önden yüklemeli beyaz Samsung çamaşır makinesinin kapalı kapağı; cam kapaktan ıslak çamaşırlar görünüyor, panelde kilit simgesi yanıyor"
---

Program bitti ya da yarıda durdurdun, ama kapak açılmıyor. Samsung'un Türkçe kullanım kılavuzunda bunun ayrı bir satırı var: **"Kapak açılmıyor."** Samsung'un verdiği sebeplerin çoğu bir arıza değil, güvenlik davranışı: kapak, makine durduktan sonraki **3 dakika** içinde açılmaz ve **kazanda su kalırsa** açılamayabilir. Bu yazıda Samsung'un sırasını, kılavuzun acil durum boşaltma bölümüyle birlikte adım adım veriyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Makineyi Başlat/Duraklat ile durdur, en az 3 dakika bekle. Kapak kilidi ışığı sönmediyse kazanda su vardır: boşaltma ya da sıkma çalıştır; olmuyorsa fişi çekip kılavuzdaki acil boşaltmayı yap, sonra kapağı elle aç. Kazan boşken de açılmıyorsa → Samsung yetkili servisi. Kapağı asla zorlama.

## Samsung'a göre nedenler

| Samsung'un satırı | Ne demek? |
|---|---|
| Makine durduktan ya da kapatıldıktan sonraki 3 dakika içinde kapak açılmaz | Bekleme süresi, arıza değil |
| Kapı kilitleme mekanizmasının açılması birkaç dakika sürebilir | Bekleme süresi, arıza değil |
| Kazanda su kalırsa kapak açılamayabilir | Önce kazan boşaltılır |
| Kapak kilidi ışığı, makine boşaldıktan sonra söner | Işık yanıyorsa kapak kilitlidir |

Samsung Türkiye'nin destek sayfası da aynı şeyi söylüyor: makinenin içinde su varsa kapağı açamayabilirsin, bu durumda su tahliyesi yapman gerekir.

## Adım adım: evde denenecekler

**1. Durdur.** Makine çalışıyorsa Başlat/Duraklat düğmesine basarak durdur.

**2. Bekle.** Makine durduktan ya da kapatıldıktan sonra en az 3 dakika bekle. Samsung'a göre kapı kilitleme mekanizmasının açılması birkaç dakika sürebilir.

**3. Kapak kilidi ışığı.** Kapak kilidi ışığının söndüğünü kontrol et. Samsung'a göre bu ışık makine boşaldıktan sonra söner.

**4. Kazandaki su.** Kapak camından kazanda su kalıp kalmadığına bak. Durulama Suyunda Bekletme seçiliyse makine son durulamadan sonra çamaşırı suda bekletir; Samsung'a göre çamaşırı çıkarmak için bir boşaltma ya da sıkma işlemi çalıştırılır.

**5. Güvenlik.** Su boşalamıyorsa ya da elektrik kesikse makineyi kapat ve fişini çek.

**6. Acil durum boşaltma.** Filtre kapağını aç; kılavuza göre modele bağlı olarak kapağın üst alanına yavaşça ya da mandalına aşağı doğru basılır. Büyük, boş bir kabı yerleştir, acil durum boşaltma tüpünün kapağını açıp suyun kaba akmasını sağla. Bitince tüp kapağını kapat, tüpü ve filtre kapağını yerine tak. Samsung, kazandaki su beklenenden fazla olabileceği için büyük bir kap kullanılmasını istiyor. Aynı işlemin ayrıntısı [Samsung çamaşır makinesi 5C hatası](/blog/samsung-camasir-makinesi-5c-hatasi/) yazısında.

**7. Kapağı aç.** Kazan boşaldıktan sonra kapağı elle, zorlamadan aç. Kılavuzun ifadesi: "Kazanı boşaltın ve kapağı manüel olarak açın."

**8. Sürerse servis.** Su hiç boşalmıyorsa ya da kazan boşken kapak yine açılmıyorsa Samsung yetkili servisine başvur. Samsung, bir boşaltma kısıtlamasıyla karşılaşıldığında servisin aranmasını istiyor.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| 3 dakika bekleme, kapak kilidi ışığı, boşaltma ya da sıkma çalıştırma, acil boşaltma | Senin, bu rehberdeki adımlar |
| Acil boşaltmada su gelmiyor ya da ekranda 5C kodu kalıyor | Önce 5C yazısındaki adımlar, sürerse servis |
| Kazan boş, ışık sönük, kapak yine açılmıyor | Samsung yetkili servisi |

⛔ Kapağı zorlama. Samsung kılavuzuna göre kapağın zorla açılması cihazın hasar görmesine ya da yaralanmaya neden olabilir; çalışırken zorla açılan kapaktan taşan su yanığa ve zeminin kayganlaşmasına yol açabilir.

Makine kapak açık olarak çalıştırılmaya çalışılırsa ekranda dC kodu görünür: [Samsung çamaşır makinesi dC hatası](/blog/samsung-camasir-makinesi-dc-hatasi/). Makine hiç başlamıyorsa [Samsung çamaşır makinesi çalışmıyor](/blog/samsung-camasir-makinesi-calismiyor/) yazısına bak. Markadan bağımsız diğer sebepler için [çamaşır makinesi kapağı açılmıyor](/blog/camasir-makinesi-kapagi-acilmiyor/) yazısı var.

---

**Kaynak künyesi.** Kapak, bekleme süresi, kapak kilidi ışığı ve acil durum boşaltma bilgileri Samsung'un Türkçe kullanım kılavuzlarından (WW4000T, WW5000C ve WW5000T serisi); su tahliyesi notu Samsung Türkiye'nin UE/Ub destek sayfasından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

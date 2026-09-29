---
title: "Samsung çamaşır makinesi titreşim ve gürültü"
description: "Samsung çamaşır makinesi çok ses yapıyor ya da titriyorsa Samsung'un sırası: zemin, dengeleme ayakları, nakliye cıvatası, yük dengesi, yabancı cisim ve servis."
slug: "samsung-camasir-makinesi-ses-titresim"
date: "2026-09-29"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144, Samsung çamaşır BELİRTİ). T5 ve K2/K1 bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200.
# #88: web araması YALNIZ belgenin yerini bulmak için; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan ya da ABD/İngiltere Samsung sayfasından alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-samsung-camasir-sprint/ · pdftotext -layout, sayfa = PDF sayfası = basılı sayfa.
#  T5) Samsung TR "Samsung Çamaşır Makinesi Hakkında SSS"  https://www.samsung.com/tr/home-appliances/faq-washer/  md5 10fd1e9967464f17db023658773d7b10 (HTML, dinamik; tarih yok)
#      "S. Samsung çamaşır makinem çok gürültülü çalışıyor. Nedeni ne olabilir?" → "Gürültünün nedeni yabancı cisimler, dengesiz yük dağılımı veya yanlış kurulum olabilir. Kazanda yabancı cisim olup olmadığını kontrol edin, yükü ayarlayın ve çamaşır makinesinin zemine düzgün şekilde oturduğundan emin olun."
#  K2) Kılavuz WW4000T (WW90T4020CE), DC68-04203B-03 TR, 72 s., md5 2a8fa3df96d4d49f5da7294316f4a2ae  (sayfa atıfları esas olarak bu belgeye göre)
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=WW90T4020CE&CttFileID=8758571&CDCttType=UM&VPath=UM%2F202209%2F20220901164943477%2FWW4000T-MD_UM_DC68-04203B-03_TR.pdf
#  K1) Kılavuz WW5000C (WW90CGC04DAE), DC68-04481M-00 TR, 68 s., md5 a6bdee67278bfcc9d0f6b252d4b5fb3a ("Aşırı titreşim veya gürültü var." satırı s.54, birebir aynı)
#      https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=WW90CGC04DAE&CttFileID=9399472&CDCttType=UM&VPath=UM%2F202312%2F20231201172141976%2FDC68-04481M-00_IB_WW5000C-MD_TR_230919.pdf
#  K3) Kılavuz WW5000T TR, 68 s., md5 402b21c11194758ab81d7af5f78ffd4d (yerel kopya; aynı satır s.51)
# Birebir alıntılar (K2):
#   s.54 "Aşırı titreşim veya gürültü var.": "Çamaşır makinesinin kaygan olmayan, düz, sert bir zemine yerleştirildiğinden emin olun. Zemin düz değilse, çamaşır makinesinin yüksekliğini ayarlamak için dengeleme ayaklarını kullanın."
#     · "Nakliye cıvatalarının çıkarıldığından emin olun." · "Çamaşır makinesinin başka herhangi bir nesneye temas etmediğinden emin olun." · "Çamaşırların dengeli biçimde yerleştirildiğinden emin olun."
#     · "Normal işlem sırasında motor gürültüye neden olabilir." · "İş giysileri veya metal içeren kıyafetler yıkanırken gürültüye neden olabilir. Bu normaldir."
#     · "Bozuk para gibi metal nesneler gürültüye neden olabilir. Yıkamadan sonra, bu nesneleri kazandan veya filtre kutusundan çıkarın."
#   s.54 "Başlamıyor.": "Çamaşır makineniz dolmaya başlamadan önce, kapağın kilitli olduğunu kontrol etmek ve hızlı bir boşaltma işlemi gerçekleştirmek için bir dizi tık sesi çıkarır."
#   s.21 DİKKAT: "Çamaşır makinesinin hareket etmesinden veya titreşim nedeniyle gürültü oluşturmasından kaçınmak için tüm dengeleme ayaklarının zemin yüzeyinde durduğundan emin olun. Sonra, çamaşır makinesinin sallanıp sallanmadığını kontrol edin."
#     ADIM 3: "Dengeleme ayaklarını manüel olarak ayarlayarak, çamaşır makinesini dengeleyin." · "Dengeleme işlemi tamamladığında, anahtarı kullanarak somunları sıkıştırın."
#   s.18 ADIM 1 zemin: "sert ve düzgün bir zemin" · ADIM 2 "Ürün ambalajını açın ve bütün nakliye cıvatalarını çıkarın." "Nakliye cıvatalarının sayısı modele bağlı olarak değişebilir." · s.19 "Çamaşır makinesinin arka tarafındaki nakliye cıvatalarını bulun"
#   s.30 ADIM 2 "Giysilerin bütün ceplerini boşaltın" · "Giysilerin üzerindeki metal para, iğne veya toka gibi metal objeler, kazan ve diğer çamaşırlara zarar verebilir."
#     ADIM 3 "Çamaşır filesini diğer çamaşırlar olmadan yalnız yıkamayın. Anormal titreşime neden olarak çamaşır makinesini hareket ettirebilir ve yaralanmaya sebep olabilir." · "Dengesiz çamaşır, sıkma performansını düşürebilir."
#   s.51 kalıntı filtresi temizliği (filtre kutusundaki nesneler için): fiş, acil boşaltma, filtre kapağı, düğmeyi sola çevir, yumuşak fırça, yerleştir ve sağa çevir.
# BİLEREK YAZILMAYANLAR: rulman/amortisör/motor teşhisi ve "rulman sesi nasıl anlaşılır" (belgede yok, #31) · nakliye cıvatalarının anahtarla sökülmesi (kurulum işi; yalnız "yeni kurulduysa kontrol et, yoksa kurulumu yapan servise ilet" dendi)
#   · ayak somunlarının anahtarla sıkılması (kurulum; yalnız ayakların elle ayarı ve sallanma kontrolü yazıldı) · Samsung TR "makinem ses yapıyor" SSS sayfası bu koşuda genel destek sayfasına düştü (içerik yok) → kullanılmadı.
# Alıntı denetim tablosu: samsung-camasir-makinesi-ses-titresim.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Büyük, boş bir kap", "Yumuşak bir fırça"]
steps:
  - "Makinenin kaygan olmayan, düz ve sert bir zeminde durduğunu kontrol et."
  - "Tüm dengeleme ayaklarının zemine bastığını ve makinenin sallanmadığını kontrol et."
  - "Zemin düz değilse ya da makine sallanıyorsa dengeleme ayaklarını elle ayarlayarak makineyi dengele."
  - "Makine yeni kurulduysa arka taraftaki nakliye cıvatalarının çıkarılmış olduğunu kontrol et."
  - "Makinenin duvara, dolaba ya da başka bir nesneye temas etmediğinden emin ol."
  - "Çamaşırları kazana dengeli yerleştir; çamaşır filesini diğer çamaşırlar olmadan tek başına yıkama."
  - "Yıkamadan sonra bozuk para gibi metal nesneleri kazandan ve fişi çektikten sonra filtre kutusundan çıkar."
  - "Bu kontrollere rağmen titreşim ya da ses sürüyorsa model numarasını not edip Samsung yetkili servisine başvur."
faq:
  - q: "Samsung çamaşır makinem çok gürültülü çalışıyor, nedeni ne olabilir?"
    a: "Samsung Türkiye'nin sıkça sorulan sorular sayfasına göre gürültünün nedeni yabancı cisimler, dengesiz yük dağılımı ya da yanlış kurulum olabilir. Samsung kazanda yabancı cisim olup olmadığının kontrol edilmesini, yükün ayarlanmasını ve makinenin zemine düzgün şekilde oturduğundan emin olunmasını öneriyor."
  - q: "Hangi sesler normal?"
    a: "Samsung kılavuzuna göre normal çalışma sırasında motor ses çıkarabilir; iş giysileri ya da metal içeren kıyafetler yıkanırken gelen ses de normaldir. Makine dolmaya başlamadan önce kapağın kilitli olduğunu kontrol etmek ve hızlı bir boşaltma yapmak için bir dizi tık sesi çıkarır."
  - q: "Makine yeni geldi, ilk yıkamada çok titriyor. Neden olabilir?"
    a: "Samsung'un sorun giderme tablosu titreşim için nakliye cıvatalarının çıkarılmış olduğundan emin olunmasını istiyor. Kılavuza göre nakliye cıvataları kurulumda çıkarılır, sayıları modele göre değişir ve makinenin arka tarafındadır. Cıvatalar yerindeyse kurulumu yapan yetkili servise ilet."
  - q: "Çamaşır filesini tek başına yıkayabilir miyim?"
    a: "Hayır. Samsung kılavuzuna göre çamaşır filesi diğer çamaşırlar olmadan yalnız yıkanmamalıdır; anormal titreşime neden olarak makineyi hareket ettirebilir ve yaralanmaya sebep olabilir."
images:
  coverAlt: "Banyoda fayans zemin üzerinde duran beyaz Samsung çamaşır makinesinin alt kısmı ve ayarlanabilir dengeleme ayakları yakından"
---

Makine sıkarken yerinde zıplıyor, dolaba vuruyor ya da alışılmadık bir ses çıkarıyor. Samsung'un Türkçe kullanım kılavuzunda bunun ayrı bir satırı var: **"Aşırı titreşim veya gürültü var."** Samsung'un listesindeki maddelerin çoğu kurulumla ve yüklemeyle ilgili: **zemin, dengeleme ayakları, nakliye cıvataları, makinenin bir yere temas etmesi, dengesiz çamaşır ve metal nesneler.** Aynı tablo bazı seslerin normal olduğunu da söylüyor. Bu yazıda Samsung'un sırasını adım adım veriyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Zemin düz ve sert mi, bütün ayaklar yere basıyor mu, makine sallanıyor mu? Yeni kurulduysa nakliye cıvataları çıkarılmış mı? Makine duvara ya da dolaba değiyor mu? Çamaşır dengeli mi, kazanda ya da filtrede bozuk para var mı? Motor sesi ve iş giysilerinin sesi normal. Hepsine rağmen sürüyorsa → Samsung yetkili servisi.

## Samsung'a göre nedenler

| Samsung'un satırı | Ne yapılır? |
|---|---|
| Makine kaygan, düz olmayan ya da sert olmayan bir zeminde | Zemin kontrolü, dengeleme ayakları |
| Nakliye cıvataları çıkarılmamış | Yeni kurulumda kontrol |
| Makine başka bir nesneye temas ediyor | Aradaki boşluğu aç |
| Çamaşırlar dengesiz yerleştirilmiş | Yükü yeniden dağıt |
| Bozuk para gibi metal nesneler | Kazandan ve filtre kutusundan çıkar |
| Normal işlem sırasında motor sesi | Normal |
| İş giysileri ya da metal içeren kıyafetler | Normal |

Samsung Türkiye'nin sıkça sorulan sorular sayfası da aynı üç başlığı veriyor: **yabancı cisimler, dengesiz yük dağılımı ya da yanlış kurulum.**

## Adım adım: evde denenecekler

**1. Zemin.** Makinenin kaygan olmayan, düz ve sert bir zeminde durduğunu kontrol et. Samsung kılavuzu kurulum için de sert ve düzgün bir zemin istiyor.

**2. Ayaklar.** Tüm dengeleme ayaklarının zemine bastığını ve makinenin sallanmadığını kontrol et. Kılavuza göre bu kontrol, makinenin hareket etmesini ve titreşim nedeniyle ses çıkarmasını önlemek için yapılır.

**3. Dengele.** Zemin düz değilse ya da makine sallanıyorsa dengeleme ayaklarını elle ayarlayarak makineyi dengele. Samsung'a göre zemin düz değilse makinenin yüksekliği dengeleme ayaklarıyla ayarlanır. Ayak somunlarının sıkılması kurulumun parçasıdır; emin değilsen bu işi yetkili servise bırak.

**4. Nakliye cıvataları.** Makine yeni kurulduysa arka taraftaki nakliye cıvatalarının çıkarılmış olduğunu kontrol et. Samsung'a göre cıvataların sayısı modele bağlı olarak değişir. Cıvatalar hâlâ takılıysa kurulumu yapan yetkili servise ilet.

**5. Temas.** Makinenin duvara, dolaba ya da başka bir nesneye temas etmediğinden emin ol.

**6. Yük.** Çamaşırları kazana dengeli yerleştir; çamaşır filesini diğer çamaşırlar olmadan tek başına yıkama. Samsung'a göre yalnız yıkanan çamaşır filesi anormal titreşime neden olarak makineyi hareket ettirebilir. Ekranda Ub görünüyorsa yük dengesizdir; ayrıntısı [Samsung çamaşır makinesi UE hatası](/blog/samsung-camasir-makinesi-ue-hatasi/) yazısında.

**7. Metal nesneler.** Yıkamadan sonra bozuk para gibi metal nesneleri kazandan ve fişi çektikten sonra filtre kutusundan çıkar. Filtre kutusuna ulaşmak için kılavuzdaki kalıntı filtresi temizliğini uygula; adımları [Samsung çamaşır makinesi 5C hatası](/blog/samsung-camasir-makinesi-5c-hatasi/) yazısında. Bir dahaki yıkamada giysilerin ceplerini boşalt: Samsung'a göre metal para, iğne ya da toka gibi nesneler kazana ve diğer çamaşırlara zarar verebilir.

**8. Sürerse servis.** Bu kontrollere rağmen titreşim ya da ses sürüyorsa model numarasını not edip Samsung yetkili servisine başvur.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Zemin, ayaklar, temas, yük dengesi, kazandaki ve filtredeki nesneler | Senin, bu rehberdeki adımlar |
| Nakliye cıvataları hâlâ takılı | Kurulumu yapan yetkili servis |
| Zemin, ayaklar ve yük düzgün, ses ya da titreşim sürüyor | Samsung yetkili servisi |

⛔ Makinenin arka panelini ya da üst kapağını açma, kazanın içindeki parçalara müdahale etme. Samsung kılavuzu bakım ve onarımların yetkili servisler tarafından yapıldığını belirtiyor.

Makine sıkma yapmıyorsa [Samsung çamaşır makinesi santrifüj yapmıyor](/blog/samsung-camasir-makinesi-santrifuj-yapmiyor/) yazısına bak. Markadan bağımsız diğer sebepler için [çamaşır makinesi gürültü yapıyor](/blog/camasir-makinesi-ses-titresim/) yazısı var.

---

**Kaynak künyesi.** Nedenler ve kontroller Samsung'un Türkçe kullanım kılavuzlarının (WW4000T, WW5000C ve WW5000T serisi) sorun giderme ve kurulum bölümlerinden; gürültü nedenleri Samsung Türkiye'nin çamaşır makinesi sıkça sorulan sorular sayfasından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

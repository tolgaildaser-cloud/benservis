---
title: "Bosch çamaşır makinesi köpük taşıyor"
description: "Bosch çamaşır makinesinde yoğun köpük ya da çekmeceden taşan köpük varsa Bosch kılavuzundaki hızlı önlem: yumuşatıcılı su. Sonraki yıkamada dozaj ayarı."
slug: "bosch-camasir-makinesi-kopuk-tasiyor"
date: "2026-09-29"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144, Bosch çamaşır belirti koşusu). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bosch-home.com'dan yeniden indirildi, HTTP 200;
#   md5'ler 28 Eyl'de indirilen yerel kopyalarla birebir aynı. Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-bosch-camasir-sprint/
# #88: web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı. Okuma pdftotext -layout, sayfa = PDF sayfası (\f ile sayıldı).
#  (B) WGA142X1TR  https://media3.bosch-home.com/Documents/9001583102_B.pdf  52 s.  md5 42506a8ca9a5e07e2a54a74b856293f4  (sayfa atıfları esas olarak bu belgeye göre)
#  (A) WGA244A0TR (i-DOS)  https://media3.bosch-home.com/Documents/9001709506_A.pdf  60 s.  md5 23d5ed1b30b9787b05f53f1137de1679
#  (C) WAK20200TR  https://media3.bosch-home.com/Documents/9001044777_B.pdf  44 s.  md5 1820d3ebcf1c9020152b02a125d40d9d
# "Yoğun köpük oluşumu." satırı (B s.43, A s.46): "Deterjan dozajı çok fazla. ▶ Hızlı önlem: Bir yemek kaşığı yumuşatıcıyı 0,5 litre suyla karıştırınız ve karışımı soldaki göze dökünüz
#   (Outdoor, Sport ve kaz tüyü çamaşırlar için geçerli değildir). ▶ Aynı miktarda çamaşır yükü olan bir sonraki yıkama işleminde deterjan miktarını azaltınız."
#   A'da "manuel dozajlama gözüne" + "Akıllı dozajlama aktifse, temel dozaj miktarını azaltınız." · C s.30: "Gösterge alanında N sembolü yanıp sönüyor. Deterjan çekmecesinden köpük çıkıyor olabilir."
#   → "Çok fazla çamaşır deterjanı mı kullanıldı? Bir çorba kaşığı yumuşatıcı ve 1/2 litre su karıştırılmalıdır ve çekmece II bölmesine dökülmelidir (...) Deterjan dozajını bir sonraki yıkama işleminde azaltınız."
# Diğer: B s.42 / C s.30 köpük kontrol sistemi (hata yok; C: ek durulama) · C s.23 program sonunda köpük sembolü = otomatik durulama, sonraki yıkamada daha az deterjan · B s.38-39 ve A s.40-41 E:30/-80 sebeplerinde "Deterjan dozajı çok fazla"
#   · B s.44 deterjan/yumuşatıcı contadan damlıyor → bölmedeki işareti aşma · B s.30 kombine ve çok yoğunlaştırılmış ürün kullanılmamalı; dozaj bilgisi ambalajda · B s.27 Yorgan/Perde/Tambur Temizleme köpük notları
#   · A s.31 i-DOS'ta manuel bölmeye ilave deterjan eklenmez · A s.34 temel dozaj miktarı (i-DOS 3 sn).
# BİLEREK YAZILMAYANLAR: köpük sensörü/basınç şalteri teşhisi (belgede yok) · "gram/kapak" cinsinden deterjan miktarı (Bosch ambalaja yönlendiriyor) · marka/ürün önerisi.
# Alıntı denetim tablosu: bosch-camasir-makinesi-kopuk-tasiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Yemek kaşığı", "Yarım litre su alan bir kap", "Yumuşatıcı"]
steps:
  - "Bir yemek kaşığı yumuşatıcıyı 0,5 litre suyla karıştır."
  - "Karışımı kılavuzunun gösterdiği göze dök (yeni modellerde soldaki göz, eski WAK serisinde bölme II); outdoor, spor ve kaz tüyü çamaşırlarda bunu yapma."
  - "Programın bitmesini bekle; köpük kontrol sistemi gerekirse ek işlem yapar ve süre uzayabilir."
  - "Aynı miktarda çamaşırla yapacağın bir sonraki yıkamada deterjan miktarını azalt."
  - "i-DOS'lu modelde akıllı dozajlama açıksa temel dozaj miktarını azalt."
  - "Sıvı deterjan ve yumuşatıcı koyarken bölmedeki işareti aşma."
faq:
  - q: "Bosch çamaşır makinem neden bu kadar köpük yapıyor?"
    a: "Bosch'un kullanma kılavuzlarındaki arıza tablosu 'Yoğun köpük oluşumu' satırında tek sebep sayıyor: deterjan dozajı çok fazla. Bosch'un hızlı önlemi bir yemek kaşığı yumuşatıcıyı yarım litre suyla karıştırıp deterjan çekmecesine dökmek; kalıcı çözüm ise aynı miktarda çamaşırla yapılan bir sonraki yıkamada deterjanı azaltmak."
  - q: "Yumuşatıcılı suyu hangi göze dökmeliyim?"
    a: "Bosch'un WGA142X1TR kılavuzu 'soldaki göz', eski WAK20200TR kılavuzu 'çekmece II bölmesi', i-DOS'lu WGA244A0TR kılavuzu 'manuel dozajlama gözü' diyor. Bosch bu önlemin outdoor, spor ve kaz tüyü çamaşırlar için geçerli olmadığını da belirtiyor."
  - q: "Ekranda köpük sembolü çıktı, makine arızalı mı?"
    a: "Bosch'a göre hayır. Eski WAK kılavuzuna göre program sonunda köpük sembolü görünüyorsa makine yıkama sırasında çok fazla köpük tespit etmiş ve köpüğü gidermek için otomatik olarak durulama işlemini devreye sokmuştur. Bosch'un önerisi aynı miktarda çamaşırla bir sonraki yıkamada daha az deterjan kullanmak."
  - q: "Köpük yüzünden su boşaltma hatası alabilir miyim?"
    a: "Bosch'un yeni kılavuzlarında E:30 / -80 tahliye kodunun sebepleri arasında 'Deterjan dozajı çok fazla' da sayılıyor ve aynı hızlı önlem veriliyor. Kodun diğer sebepleri hortum ve pompa tarafında; ayrıntısı Bosch E:30-80 yazımızda."
images:
  coverAlt: "Ön yüklemeli çamaşır makinesinin cam kapağının ardında tamburu dolduran beyaz köpük, yanında yarısı dolu bir ölçü kabı"
---

Cam kapağın ardı bembeyaz köpükle dolu ya da deterjan çekmecesinden köpük taşıyor. Bosch'un çamaşır makinesi kullanma kılavuzlarındaki arıza tablosunda bu durumun ayrı bir satırı var: **"Yoğun köpük oluşumu."** Bosch'un bu satırdaki tek sebebi **"Deterjan dozajı çok fazla."** Çözümü de iki parçalı: o anki yıkama için bir **hızlı önlem**, sonraki yıkamalar için **daha az deterjan.** Bu yazıda Bosch'un tarifini sırasıyla açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Bosch'a göre yoğun köpüğün sebebi fazla deterjan. Hızlı önlem: bir yemek kaşığı yumuşatıcı + yarım litre su, kılavuzun gösterdiği çekmece gözüne (outdoor, spor, kaz tüyü hariç). Sonraki yıkamada deterjanı azalt; i-DOS'lu modelde temel dozajı düşür. Köpük sembolü ve uzayan program süresi arıza değil.

## Adım adım: evde denenecekler

**1. Yumuşatıcılı suyu hazırla.** Bosch'un hızlı önlemi: **bir yemek kaşığı yumuşatıcıyı 0,5 litre suyla karıştır.** Eski WAK kılavuzunda ölçü aynı: bir çorba kaşığı yumuşatıcı ve yarım litre su.

**2. Karışımı doğru göze dök.** Bosch'un yeni WGA142X1TR kılavuzu karışımın **soldaki göze**, eski WAK20200TR kılavuzu **çekmece II bölmesine**, i-DOS'lu WGA244A0TR kılavuzu **manuel dozajlama gözüne** dökülmesini istiyor. Bosch'un çekmece tarifinde **Bölme II** ana yıkama deterjanının gözü. Bosch'un kaydı: bu önlem **outdoor, spor ve kaz tüyü çamaşırlar için geçerli değildir.** Deterjan çekmecesini çalışma sırasında açarken dikkatli ol; Bosch'un eski kılavuzu deterjanın dökülebileceği ve göze ya da cilde temas ederse iyice durulanması gerektiği konusunda uyarıyor.

**3. Programın bitmesini bekle.** Bosch'un makineleri köpüğü kendisi de izliyor. Tabloya göre **köpük kontrol sistemi, çok fazla köpük olması durumunda** ek bir işlem yapıyor; eski WAK kılavuzunda bu, **ek bir durulama** olarak geçiyor. Bu yüzden program süresi uzayabilir; Bosch'un karşılığı **"Hata yok - Müdahale gerekmiyor."** Eski WAK serisinde program sonunda ekranda köpük sembolü görünüyorsa makine çok fazla köpük tespit etmiş ve **otomatik olarak durulama** devreye sokmuştur.

**4. Sonraki yıkamada deterjanı azalt.** Bosch'un kalıcı çözümü: **aynı miktarda çamaşır yükü olan bir sonraki yıkama işleminde deterjan miktarını azalt.** Bosch'a göre kullanım ve dozaj bilgisi **deterjan ambalajının üzerinde**; miktarı oradan ayarla.

**5. i-DOS'lu modelde temel dozajı düşür.** Akıllı dozajlamalı (i-DOS) Bosch'larda deterjanı makine kendisi koyuyor. Bosch'un çözümü: **akıllı dozajlama aktifse temel dozaj miktarını azalt.** WGA244A0TR kılavuzuna göre temel dozaj ayarına **i-DOS tuşuna yaklaşık 3 saniye basarak** giriliyor. Bosch'un ek uyarısı: aşırı dozajlamayı ya da köpüğü önlemek için akıllı dozajlama kullanırken **manuel dozajlama bölmesine ilave deterjan ekleme.**

**6. Bölmedeki işareti aşma.** Bosch'un tablosunda köpüğe yakın bir satır daha var: **deterjan veya yumuşatıcı contadan damlıyor** ve kapak ya da conta kıvrımında toplanıyorsa sebep **çekmecede çok fazla deterjan ya da yumuşatıcı.** Bosch'un çözümü: sıvı deterjan ve yumuşatıcı koyarken **bölmedeki işarete dikkat et ve bunu aşacak şekilde dozajlama.**

## Programa göre Bosch'un köpük notları

Bosch'un program tablosunda bazı programlar için ayrıca köpük uyarısı var:

- **Yorgan:** Aşırı köpüğü önlemek için çamaşırı yıkamadan önce **bastırıp havasını çıkar**; dozajı tasarruflu ayarla, yumuşatıcı kullanma.
- **Perde:** Hafif ve havadar perdelerde yoğun köpüğü önlemek için **perde deterjanı** kullan.
- **Tambur Temizleme:** Köpüğü önlemek için **deterjan miktarını yarıya indir.**

Bosch ayrıca **kombine ve çok yoğunlaştırılmış ürünlerin** kullanılmamasını, farklı sıvı deterjanların ve deterjanla yumuşatıcının **birbirine karıştırılmamasını** istiyor.

## Köpük bir hata koduyla birlikte geldiyse

Bosch'un yeni kılavuzlarında **E:30 / -80** tahliye kodunun sebepleri arasında da **"Deterjan dozajı çok fazla"** sayılıyor ve aynı hızlı önlem veriliyor. Kod sürüyorsa sebep hortum ya da pompa tarafında olabilir; [Bosch çamaşır makinesi E:30-80 hatası](/blog/bosch-camasir-makinesi-e30-80-hatasi/) yazısında adım adım var. Ekrandaki köpük sembolü ve diğer göstergeler [Bosch çamaşır makinesi sembolleri ve anlamları](/blog/bosch-camasir-makinesi-sembolleri-ve-anlamlari/) yazısında. Hangi deterjanın hangi göze konduğu [deterjan çekmecesinde hangi göz](/blog/camasir-makinesi-deterjan-cekmecesi-hangi-goz/) yazısında.

## Sınır nerede biter

Deterjanı azalttın, hızlı önlemi uyguladın ve köpük hâlâ her yıkamada taşıyorsa ya da köpükle birlikte tabloda karşılığı olmayan bir hata kodu çıkıyorsa Bosch'un tablosu kullanıcıya başka adım vermiyor: **diğer tüm hata kodlarında müşteri hizmetlerini ara.** Bosch'un uyarısı: **usulüne uygun olmayan onarımlar tehlikelidir**; cihazda onarımı **yalnız bunun eğitimini almış uzman personel** yapabilir.

⛔ **Kendin-çöz sınırı burada biter.** Deterjan miktarı, dozaj ayarı ve hızlı önlem kullanıcıya; makinenin içi servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Hangi deterjanı, ne kadar kullandın?
2. Tamburda ne kadar çamaşır vardı?
3. Makinede i-DOS var mı, açık mıydı?
4. Köpük yalnız bir programda mı, her yıkamada mı?
5. Ekranda bir kod ya da köpük sembolü görünüyor mu?

Bu beşine cevabın varsa servise "köpük taşıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

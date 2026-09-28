---
title: "Siemens çamaşır makinesi hata kodu sıfırlama"
description: "Siemens çamaşır makinesinde tabloda satırı olmayan kod ya da donan ekran: modeline göre tuş kombinasyonu, 30 saniyelik güç kesme ve servis sınırı."
slug: "siemens-camasir-makinesi-hata-kodu-sifirlama"
date: "2026-09-28"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile indirildi, sekizi de HTTP 200; pdftotext (düz ve -layout) ile okundu, tuş adları sayfa görüntüsüyle (pdftoppm) teyit edildi.
# Web araması kullanılmadı: belgeler siemens-home.bsh-group.com/tr ürün sayfalarındaki kılavuz bağlantısından bulundu. Hepsi media3.bsh-group.com.
#  A) WG54K2Y0TR  https://media3.bsh-group.com/Documents/9002046535_A.pdf  52 s.  md5 8053c84dd7b5f803d86e4c3d49bacec5  (sayfa atıfları bu belgeye göre)
#  B) WG64K2Y0TR  https://media3.bsh-group.com/Documents/9002056894_B.pdf  52 s.  md5 f4cbecc8c654c2e7e933fca34e4c34b3
#  C) WG42K2Z0TR  https://media3.bsh-group.com/Documents/9001980893_B.pdf  48 s.  md5 c0e42ad468f8df3dbe9f2fc0741d42d8
#  D) WG44K2Z0TR  https://media3.bsh-group.com/Documents/9001980838_B.pdf  48 s.  md5 3b20397a2bd4b264a9d4ed3119260026
#  E) WG52K2Z0TR  https://media3.bsh-group.com/Documents/9002023719_C.pdf  52 s.  md5 6f1aa61eddb8e0eaf80a15ec35688479
#  F) WG64K2Z0TR  https://media3.bsh-group.com/Documents/9002013652_D.pdf  52 s.  md5 991c66e45c79ce9de0099d43e6f4e95a
#  G) WG52A203TR  https://media3.bsh-group.com/Documents/9002046516_A.pdf  44 s.  md5 003935ece93b182aa6038f0e4c226126
#  K) WN54C2A0TR  https://media3.bsh-group.com/Documents/9001771585_E.pdf  56 s.  md5 0659013f7dc77a65864215555fabb2f5
# "Diğer tüm hata kodları. | Fonksiyonel arıza" satırı (A s.41, B s.41, C s.38, D s.38, E s.39, F s.40, G s.35-36, K s.43):
#   A,B: "1. Cihazı yeniden başlatmak için yakl. 3 saniye boyunca Ön Yıkama ve Kırışıklık önleme üzerine aynı anda basınız."
#   C,D: "... İlave durulama ve Kırışıklık önleme ..." · E,F: "... İlave durulama ve Kırışık önleme ..." · G: "1. Cihazı yeniden başlatınız."
#   K: "1. Cihazı yeniden başlatmak için yakl. 5 saniye süreyle [⏻] seçeneğine basınız." (tuş: K s.21 "Kumanda paneli yanıt vermiyorsa cihazı yeniden başlatmak için üzerine yaklaşık 5 saniye basılı tutunuz.")
#   Hepsi: "2. Arıza tekrar oluşursa, cihazı en az 30 saniye boyunca güç kaynağından ayırınız. Elektrik kablosunun elektrik fişini çekiniz veya sigorta kutusundaki sigorayı kapatınız.
#           3. Arıza devam ederse, müşteri hizmetlerini arayınız. Aradığınızda hata mesajını eksiksiz olarak belirtiniz. Mümkünse arızayı fotoğraf ve videolarla belgeleyiniz."
# "Ekran ve düğmeler yanıt vermiyor | Yazılım arızası var" satırı aynı 1-2 adımla: A s.42 (G'de bu satır yok).
# "Hata yoktur" satırları: A s.42-43. Müşteri hizmetleri (E-Nr., FD, Z-Nr., tip plakası yeri): A s.47.
# Bilerek YAZILMAYANLAR: "fişi 1 dakika çek" (Siemens "en az 30 saniye" diyor); program düğmesini kapatma reseti (bu kılavuzlarda yok);
#   listelenmeyen modeller için tuş kombinasyonu tahmini (yazı "kendi kılavuzuna bak" diyor).
# Alıntı denetim tablosu: siemens-camasir-makinesi-hata-kodu-sifirlama.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Telefon kamerası"]
steps:
  - "Ekrandaki hata kodunu eksiksiz not et; mümkünse fotoğrafını çek."
  - "Kodun kılavuzdaki arıza tablosunda kendi satırı olup olmadığına bak; varsa o satırın talimatını uygula."
  - "Kendi satırı yoksa, modelinde belirtilen tuşlara basarak cihazı yeniden başlat."
  - "Arıza tekrar oluşursa cihazı en az 30 saniye güç kaynağından ayır: fişi çek ya da sigortayı kapat."
  - "Arıza devam ederse müşteri hizmetlerini ara ve hata mesajını eksiksiz söyle."
  - "Aramadan önce cihazın E-Nr., FD ve Z-Nr. numaralarını hazırla."
faq:
  - q: "Siemens çamaşır makinesinde hata kodu nasıl sıfırlanır?"
    a: "Siemens'in yeni nesil kılavuzlarında tabloda kendi satırı olmayan kodlar için talimat üç adımlı: cihazı yeniden başlat; arıza tekrar oluşursa cihazı en az 30 saniye güç kaynağından ayır (fişi çek ya da sigortayı kapat); arıza devam ederse müşteri hizmetlerini ara. Yeniden başlatmanın yolu modele göre değişiyor; örneğin WG54K2Y0TR'de Ön Yıkama ve Kırışıklık önleme tuşlarına aynı anda yaklaşık 3 saniye basılıyor."
  - q: "Her kodda bu sıfırlamayı mı yapmalıyım?"
    a: "Hayır. Siemens tablosunda kendi satırı olan kodların kendi talimatı var: örneğin E:36-25'te pis su pompası temizlenir, E:30-20'de önce musluk kapatılır, H:32'de çamaşırlar tamburda yeniden dağıtılır. Yeniden başlatma talimatı tablonun 'Diğer tüm hata kodları' satırına ait."
  - q: "Fişi ne kadar süre çekili tutmalıyım?"
    a: "Siemens kılavuzları en az 30 saniye diyor. Fişe ulaşamıyorsan kılavuzun verdiği diğer yol sigorta kutusundaki sigortayı kapatmak."
  - q: "Ekran ve tuşlar hiç tepki vermiyor, ne yapmalıyım?"
    a: "Siemens bu durumu yazılım arızası olarak tarif ediyor ve aynı yolu veriyor: modelindeki tuş kombinasyonuyla cihazı yeniden başlat, arıza tekrar oluşursa cihazı en az 30 saniye güç kaynağından ayır. WN54C2A0TR'de yeniden başlatma, açma tuşuna yaklaşık 5 saniye basılı tutarak yapılıyor."
  - q: "Servisi ararken ne hazırlamalıyım?"
    a: "Siemens hata mesajının eksiksiz söylenmesini, mümkünse arızanın fotoğraf ve videoyla belgelenmesini istiyor. Ayrıca cihazın ürün numarasını (E-Nr.), imalat numarasını (FD) ve sayma numarasını (Z-Nr.) hazır bulundurman gerekiyor."
images:
  coverAlt: "Dokunmatik ekranlı bir çamaşır makinesi kumanda panelinde aynı anda iki tuşa basan iki parmak"
---

Ekranda bir hata kodu var ve kılavuzun tablosunda o koda ait ayrı bir satır bulamıyorsun; ya da ekran ve tuşlar hiç tepki vermiyor. Siemens'in yeni nesil çamaşır makinesi kılavuzlarında bu durumun karşılığı tablonun son satırlarından biri: **"Diğer tüm hata kodları. Fonksiyonel arıza."** Siemens'in talimatı üç basamaklı: **cihazı yeniden başlat**, arıza tekrar oluşursa **en az 30 saniye güç kaynağından ayır**, sürerse **müşteri hizmetlerini ara.** Yeniden başlatmanın yolu ise modele göre değişiyor; aşağıda sekiz Siemens Türkiye kılavuzundan derledik.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce kodun kendi satırı var mı bak; varsa onu uygula. Yoksa: modelindeki tuşlarla yeniden başlat → tekrar ederse fişi ya da sigortayı en az 30 saniye kapat → sürerse müşteri hizmetleri; kodu eksiksiz söyle, E-Nr. ve FD hazır olsun.

## Adım adım: evde denenecekler

**1. Kodu eksiksiz not et.** Kodu tireden sonrasıyla birlikte yaz (ör. E:30-20, E:36-25). Siemens, müşteri hizmetlerini aradığında **hata mesajını eksiksiz belirtmeni** ve mümkünse **arızayı fotoğraf ve videoyla belgelemeni** istiyor.

**2. Kodun kendi satırına bak.** Kılavuzundaki "Arızaları giderme" tablosunda kodun ayrı bir satırı varsa önce o satırın talimatını uygula. Sıfırlama talimatı, kendi satırı **olmayan** kodlar içindir.

**3. Cihazı yeniden başlat.** Kendi satırı yoksa Siemens'in ilk adımı cihazı yeniden başlatmak. Hangi tuşlara basacağın aşağıdaki tabloda.

**4. 30 saniye güç kes.** Arıza tekrar oluşursa cihazı **en az 30 saniye** boyunca güç kaynağından ayır. Siemens iki yol veriyor: **elektrik fişini çek** ya da **sigorta kutusundaki sigortayı kapat.**

**5. Sürerse servisi ara.** Arıza devam ederse müşteri hizmetlerini ara ve **hata mesajını eksiksiz** söyle; çektiğin fotoğraf ya da video burada işe yarar.

**6. Numaraları hazırla.** Siemens, müşteri hizmetlerine başvururken cihazın ürün numarasını (**E-Nr.**), imalat numarasını (**FD**) ve sayma numarasını (**Z-Nr.**) hazır bulundurmanı istiyor. Kılavuza göre bu numaralar cihazın tip plakasında yazar; plakanın yeri modele göre değişir: kapağın iç tarafı ya da tambur açıklığının altı.

## Modeline göre yeniden başlatma tuşları

Aşağıdaki tuşlar Siemens'in kendi kılavuzlarında "Diğer tüm hata kodları" satırında yazılı olanlar:

| Model | Siemens'in yeniden başlatma talimatı |
|---|---|
| **WG54K2Y0TR · WG64K2Y0TR** | **Ön Yıkama** ve **Kırışıklık önleme** tuşlarına aynı anda yaklaşık **3 saniye** bas |
| **WG42K2Z0TR · WG44K2Z0TR** | **İlave durulama** ve **Kırışıklık önleme** tuşlarına aynı anda yaklaşık **3 saniye** bas |
| **WG52K2Z0TR · WG64K2Z0TR** | **İlave durulama** ve **Kırışık önleme** tuşlarına aynı anda yaklaşık **3 saniye** bas |
| **WN54C2A0TR** (kurutmalı) | Açma tuşuna (⏻) yaklaşık **5 saniye** basılı tut |
| **WG52A203TR** | Kılavuz yalnızca "cihazı yeniden başlatınız" diyor; tuş kombinasyonu vermiyor |

Modelin listede yoksa tuşları tahmin etme: kendi kılavuzunun "Arızaları giderme" bölümündeki "Diğer tüm hata kodları" satırına bak. Siemens kılavuzları siemens-home.bsh-group.com/tr adresindeki ürün sayfalarında yayımlanıyor.

## Kendi talimatı olan kodlar

Taradığımız Siemens kılavuzlarında kendi satırı olan kodlar şunlar; bunlarda sıfırlamadan önce satırın kendi talimatı uygulanır:

| Kod | Siemens'in karşılığı | Rehber |
|---|---|---|
| **E:36-10 / E:30-80** | Deterjanlı su cihazdan pompalanıp boşaltılmıyor | [Siemens hata kodları](/blog/siemens-camasir-makinesi-hata-kodlari/) |
| **E:36-25 / E:36-26** | Deterjanlı su pompası tıkanmış | [Siemens E:36-25 hatası](/blog/siemens-camasir-makinesi-e36-25-hatasi/) |
| **E:30-10** | Su girişi: musluk, hortum, süzgeç, su basıncı, su seviyesi ölçümü | [Siemens hata kodları](/blog/siemens-camasir-makinesi-hata-kodlari/) |
| **E:30-20** | Kritik fonksiyon arızası, fazla deterjan, ilave su | [Siemens E:30-20 hatası](/blog/siemens-camasir-makinesi-e30-20-hatasi/) |
| **H:32** | Çamaşırlar eşit dağılmadığı için sıkma iptal edildi | Çamaşırları tamburda yeniden dağıt |
| **E:10-00 / -10 / -20** (WN54C2A0TR) | Akıllı dozajlama sistemi pompası bloke | [Siemens E:10 hatası](/blog/siemens-camasir-makinesi-e10-hatasi/) |
| **E:35-10** (WN54C2A0TR) | Cihaz sızdırıyor | Musluğu kapat, müşteri hizmetlerini ara |

## Ekran donduysa: yazılım arızası

Siemens'in tablosunda ayrı bir satır daha var: **ekran ve düğmeler yanıt vermiyor.** Kılavuzlar bunu **yazılım arızası** olarak tarif ediyor ve aynı yolu veriyor: modelindeki tuşlarla cihazı yeniden başlat, arıza tekrar oluşursa cihazı en az 30 saniye güç kaynağından ayır. WN54C2A0TR kılavuzu bu tuşu ayrıca tarif ediyor: kumanda paneli yanıt vermiyorsa cihazı yeniden başlatmak için açma tuşunu **yaklaşık 5 saniye** basılı tut.

## Kod yok ama bir şey tuhaf: Siemens'e göre arıza olmayanlar

Aynı tabloda Siemens'in açıkça **"Hata yoktur"** dediği durumlar da var; bunlarda sıfırlamaya gerek yok:

- **Program başladıktan sonra tambur sarsılıyor:** dahili motor testi başlatıldı.
- **Tambur dönüyor, su girişi yok:** dolum algılama 2 dakikaya kadar aktif.
- **Tamburun içinde su görünmüyor:** su, görünür alanın altında.
- **Birden fazla kez sıkma:** cihaz çamaşırları birkaç kez dağıtarak dengesizliği eşitliyor.

## Sınır nerede biter

Yeniden başlatma ve 30 saniyelik güç kesme kullanıcının güvenle yapabileceği son adım. Siemens kılavuzunun arıza bölümündeki uyarı açık: usulüne aykırı onarımlar tehlike yaratır, cihaz ya da özellikleri teknik olarak değiştirilmemeli ve onarımı yalnızca bunun eğitimini almış uzman personel yapmalı.

⛔ **Kendin-çöz sınırı burada biter.** Tuşlar, fiş ve sigorta kullanıcıya; kodun arkasındaki fonksiyonel arızanın teşhisi servise aittir.

Ekrandaki kodu ve makinenin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

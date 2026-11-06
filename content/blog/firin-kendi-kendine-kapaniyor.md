---
title: "Fırın kendi kendine kapanıyor: Samsung ve Siemens kılavuzu"
description: "Fırın kendi kendine kapanıyorsa Samsung ve Siemens kılavuzuna göre süre ayarını, güvenlik kapatmasını, soğutma fanını ve prizi sırayla kontrol et."
slug: "firin-kendi-kendine-kapaniyor"
date: "2026-11-10"
category: "Fırın / Ocak"
updated: "2026-11-10"
kisaCevap: "Fırın kendi kendine kapanıyorsa önce kurulu süreye ve güvenlik kapatmasına bak. Samsung NV7B442 kılavuzu 105-240 °C arasında 8 saat kesintisiz çalışan fırını S-01 koduyla kapatıyor; bu arıza değil. Siemens HB976GM kılavuzu da ayarlanan süre dolunca fırının ısıtmayı durdurduğunu yazıyor."
# --- Provenans (yayında görünmez) ---
# 2026-11-06 Cum PAZ alt ajanı, parti 6 (YK #215; BOSLUK.md sürüm 4 #356 "fırın kendi kendine kapanıyor / çalışıyor"). Slug origin/main content/blog/'da ve blog-taslaklar'da yok (6 Kas fetch, 1.311 dosya). Yakın: firin-calismiyor-ne-yapmali, firin-sigorta-atiriyor, firin-fani-calismiyor (ayrı niyet).
# Konu kanıtı: Google otomatik tamamlama 6 Kas 2026 (ham: _kaynak/OT-2026-11-06.txt): "fırın kendi kendine" #3 "…kapanıyor", #4 "…çalışıyor", #8 "…kapanır mı", #9 "…kapandı"; "fırın kendi kendine kapanıyor" #1 + 9 marka sürümü. GSC kanıt sayılmadı.
# Belgeler (#88), düz curl -sL (özel başlık yok), HTTP 200: (A) Samsung NV7B442**** / NV7B452**** ankastre fırın kullanım ve kurulum kılavuzu (64 s. PDF) https://org.downloadcenter.samsung.com/downloadfile/ContentsFile.aspx?CDSite=UNI_TR&OriginYN=N&ModelType=N&ModelName=NV7B4420ZAK&CttFileID=10050757&CDCttType=UM&VPath=UM%2F202501%2F20250124222105993%2FO_DG68_01413G_03_IB_FULL_NV7B4420ZAK_TR_250113.pdf md5 776e6d02867f930dbda6362c94ea2db8 — PDF s.15, 50, 51, 53 · (B) Siemens HB976GM.1 ankastre fırın kullanım kılavuzu (44 s. PDF) https://media3.bsh-group.com/Documents/9002029846_B.pdf md5 21906424cc4a8f5ca70eae9b869c27f2 — PDF s.7, 8, 11, 13, 30.
# BİLEREK YAZILMAYANLAR: termostat, kart, ısıtıcı ya da fan motoru arızası teşhisi (servis) · priz/tesisat onarımı (elektrikçi) · Home Connect uygulama ayarları · fiyat (#46).
# Alıntı denetimi: firin-kendi-kendine-kapaniyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Fırının kullanım kılavuzu", "Saat"]
steps:
  - "Ekranda bir kod ya da uyarı var mı, bak."
  - "Kurulu bir süre ya da bitiş saati olup olmadığını kontrol et."
  - "Fırının ne kadar süredir kesintisiz çalıştığını hesapla."
  - "Pişirme bitince soğutma fanının sesini dinle."
  - "Fırının çevresindeki havalandırma boşluklarını kontrol et."
  - "Prizi ve sigorta kutusunu kontrol et."
  - "Elektroniği kısa süre elektriksiz bırak, sorun sürerse servise başvur."
faq:
  - q: "Fırın neden kendi kendine kapanır?"
    a: "Samsung NV7B442 kılavuzu çalışırken kapanmanın nedenleri olarak süre dolduktan sonra pişirmeye devam edilmesini, soğutma fanının çalışmamasını, yetersiz havalandırmayı ve aynı prizde birden çok fişi sayıyor. Siemens HB976GM kılavuzu ise ayarlanan süre dolunca fırının ısıtmayı durdurduğunu yazıyor."
  - q: "Fırın ekranında S-01 ne demek?"
    a: "Samsung NV7B442 kılavuzunda S-01 güvenlik kapatmasıdır: fırın 100 °C altında 16 saat, 105-240 °C arasında 8 saat, 245 °C ile maksimum arasında 4 saat kesintisiz çalışmıştır. Kılavuz bunun arıza olmadığını, fırını kapatıp normal şekilde yeniden denemeni söylüyor."
  - q: "Fırın kapandıktan sonra neden hâlâ ses geliyor?"
    a: "Bu soğutma fanıdır. Siemens HB976GM kılavuzu fanın çalışma tamamlandıktan sonra cihazı soğutmak ve nemi gidermek için belirli bir süre daha çalıştığını yazıyor. Samsung da fanın iç havalandırma için bir süre otomatik çalıştığını ve endişeye gerek olmadığını belirtiyor."
  - q: "Fırın kendi kendine çalışmaya başlarsa ne olmuştur?"
    a: "Siemens HB976GM kılavuzunda bitiş saati ayarlandığında fırın, çalışma istenen zamanda bitsin diye otomatik olarak başlatılır. Fırın sen dokunmadan ısınmaya başladıysa önce kurulu bir bitiş saati olup olmadığına bak."
images:
  coverAlt: "Ankastre sade fırın ve ekranına bakan beyaz eldivenli sade siluet el çizimi"
  steps:
    - "Fırın ekranına bakan beyaz eldivenli sade siluet el"
    - "Fırının süre tuşuna basan beyaz eldivenli sade siluet el"
    - "Duvar saatine ve fırına bakan beyaz eldivenli sade siluet el"
    - "Fırının üst kenarına kulak veren beyaz eldivenli sade siluet el"
    - "Fırın ile dolap arasındaki boşluğu gösteren beyaz eldivenli sade siluet el"
    - "Duvardaki sigorta kutusunu açan beyaz eldivenli sade siluet el"
    - "Kılavuzu ve telefonu tutan beyaz eldivenli sade siluet el"
---

Fırın kendi kendine kapanıyorsa ilk bakılacak yer arıza değil ayardır: kurulu bir pişirme süresi ya da fırının güvenlik kapatması. Samsung NV7B442 ankastre fırın kılavuzu, fırın 105-240 °C arasında 8 saat kesintisiz çalıştığında onu S-01 koduyla kendiliğinden kapatıyor ve bunun sistem arızası olmadığını yazıyor.

Siemens HB976GM fırın kılavuzu ise ayarlanan süre dolduğunda fırının ısıtmayı durdurduğunu, bir sinyal sesi verdiğini ve ekranda uyarı gösterdiğini söylüyor; fırını uzun süre kullanmazsan da cihaz otomatik olarak kapanıyor. Kendi fırınının kılavuzu farklı süre ya da kod veriyorsa **kendi kılavuzun esastır.**

> ⚠️ **Sınır.** Bu yazı yalnız ayar, havalandırma ve priz kontrollerini anlatıyor. Termostat, kart, ısıtıcı, fan motoru ve elektrik tesisatı yetkili servis ya da elektrikçi işidir; iki kılavuz da onarımı eğitimli personele bırakıyor.

## Fırın hangi durumlarda kendiliğinden kapanır?

| Durum | Samsung NV7B442 | Siemens HB976GM |
|---|---|---|
| Kurulu süre doldu | Süre dolduktan sonra pişirmeye devam etmek kapanma nedeni | Süre dolunca ısıtma durur, sinyal sesi |
| Çok uzun çalışma | S-01 güvenlik kapatması | Uzun süre kullanılmazsa otomatik kapanır |
| Isınma, fan | Soğutma fanı çalışmıyorsa kapanabilir | Fan sıcaklığa göre çalışır |
| Elektrik | Prize bağlı değilse durur; tek fiş kullan | Sigorta atmışsa çalışmaz |

## Adım adım: fırın kendi kendine kapanıyorsa ne yapılır?

**1. Ekranda bir kod ya da uyarı var mı, bak.** Samsung'da S-01 güvenlik kapatmasıdır. Kılavuz fırını kapatmanı, yiyeceği çıkarmanı ve normal şekilde yeniden denemeni istiyor. Siemens fırın, süre dolduğunda ekranda çalışmanın durdurulacağına yönelik bir uyarı gösteriyor.

**2. Kurulu bir süre ya da bitiş saati olup olmadığını kontrol et.** Siemens'te süre ayarlamışsan bu süre dolduktan sonra fırın ısınmayı durdurur. Bitiş saati kurduysan cihaz, çalışma istenen zamanda bitsin diye otomatik olarak başlar; fırının kendi kendine çalışmaya başlaması da buradan gelir. Gerekirse yeni ayar yapıp çalışmayı yeniden başlatabilirsin.

**3. Fırının ne kadar süredir kesintisiz çalıştığını hesapla.** Samsung'un güvenlik kapatması sıcaklığa göre değişiyor: 100 °C'nin altında 16 saat, 105-240 °C arasında 8 saat, 245 °C ile maksimum arasında 4 saat. Uzun pişirmede, örneğin gece boyu düşük ısıda yapılan bir yemekte, fırın bu sürelerin sonunda kendini kapatıyorsa sistem doğru çalışıyor demektir. Yemeği çıkarıp fırını kapattıktan sonra yeniden başlatabilirsin.

**4. Pişirme bitince soğutma fanının sesini dinle.** Samsung sorun tablosunda çalışırken kapanmanın nedenlerinden biri soğutma fanının çalışmamasıdır ve çözüm olarak fanın sesini dinlemeni istiyor. Uzun süreli pişirmeden sonra fırını soğumaya bırak. Siemens fanın cihaz sıcaklığına göre devreye girip çıktığını, sıcak havanın kapağın üzerinden dışarı aktığını yazıyor. Fan sesi hiç gelmiyorsa bu bilgiyi servise ilet.

**5. Fırının çevresindeki havalandırma boşluklarını kontrol et.** Samsung havalandırmanın iyi olmadığı bir yere kurulmuş fırının çalışırken kapanabileceğini, dış yüzeyinin de çok ısınabileceğini yazıyor. Çözüm, kurulum kılavuzunda belirtilen boşlukları bırakmak. Dolap içine sonradan konan eşya ya da kapatılan havalandırma aralığı varsa kaldır. Fırın yeni takıldıysa montajı yapan kişiden bu boşlukları kurulum kılavuzuna göre kontrol etmesini iste.

**6. Prizi ve sigorta kutusunu kontrol et.** Samsung aynı prizde birden fazla fiş kullanılıyorsa tek fiş kullanmanı, fırın çalışırken duruyorsa prize bağlı olup olmadığına bakıp gücü yeniden bağlamanı istiyor. Siemens fırın çalışmıyorsa sigorta kutusundaki ilgili sigortaya bakmanı söylüyor. Sigorta sık atıyorsa bir elektrikçiye danış.

**7. Elektroniği kısa süre elektriksiz bırak, sorun sürerse servise başvur.** Siemens elektronik hatasında sigortayı kapatarak cihazı en az 30 saniye elektrik şebekesinden ayırmanı, elektrik kesintisinden sonra da kapağı bir kez açıp kapatmanı istiyor; cihaz kendini kontrol edip kullanıma hazır hale geliyor. Bu adımlardan sonra kapanma sürüyorsa iki üretici de müşteri hizmetlerine başvurmanı söylüyor.

## Fırın kapandıktan sonra neden fan ve lamba çalışıyor?

Bu kapanmanın bir parçasıdır. Siemens soğutma fanının çalışma tamamlandıktan sonra cihazı soğutmak ve pişirme bölümündeki nemi gidermek için belirli bir süre daha çalıştığını yazıyor. Samsung da fanın fırının iç havalandırması için bir süre otomatik çalıştığını, bunun için endişeye gerek olmadığını belirtiyor. Samsung'da fırın lambası güç tasarrufu için belirli bir süre kullanılmadığında kendiliğinden kapanıyor.

## Bu konuda hangi yazılara bakılır?

Fırın hiç açılmıyorsa [fırın çalışmıyor, ne yapmalı](/blog/firin-calismiyor-ne-yapmali/), açılınca sigorta atıyorsa [fırın sigorta attırıyor](/blog/firin-sigorta-atiriyor/), fan sesi hiç gelmiyorsa [fırın fanı çalışmıyor](/blog/firin-fani-calismiyor/) yazısına bak.

---

**Kaynak künyesi.** Güvenlik kapatması, sorun tablosu ve lamba bilgisi Samsung NV7B442 / NV7B452 ankastre fırın kullanım ve kurulum kılavuzundan; süre, bitiş saati, otomatik kapanma, soğutma fanı ve arıza giderme bilgisi Siemens HB976GM ankastre fırın kullanım kılavuzundan alınmıştır. Kendi fırınının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

Bu kontrollerden sonra da fırın kendiliğinden kapanıyorsa belirtiyi ve modeli benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

---
title: "Siemens çamaşır makinesi E:10 hatası"
description: "Siemens kurutmalı çamaşır makinesinde E:10-00, -10, -20: akıllı dozaj (i-Dos) pompası bloke. Deterjan çekmecesi temizliği ve servis sınırı adım adım."
slug: "siemens-camasir-makinesi-e10-hatasi"
date: "2026-09-28"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200; pdftotext (düz ve -layout) ile okundu, tablo satırı sayfa görüntüsüyle (pdftoppm) teyit edildi.
# Web araması kullanılmadı: belge siemens-home.bsh-group.com/tr ürün sayfasındaki kılavuz bağlantısından bulundu.
#  K) WN54C2A0TR (kurutmalı çamaşır makinesi)  https://media3.bsh-group.com/Documents/9001771585_E.pdf  56 s.  md5 0659013f7dc77a65864215555fabb2f5
#     ürün sayfası: https://www.siemens-home.bsh-group.com/tr/tr/product/yikama-ve-utuleme-grubu/kurutmali-camasir-makineleri/wash-dryers/WN54C2A0TR
# E:10 satırı ("20 Arızaları giderme", K s.42):
#   "E:10 -00 -10 -20 | Akıllı dozajlama sistemi pompası bloke. 1. Deterjan çekmecesini temizleyiniz. Sayfa36
#    2. Arıza devam ederse, müşteri hizmetlerini arayınız. Sayfa49
#    Not: Arıza giderilene kadar akıllı dozajlama sistemini devre dışı bırakabilir ve manuel dozajlama yapabilirsiniz. Sayfa21"
# Çekmece temizliği: K s.36-38 "19.2 Deterjan çekmecesinin temizlenmesi" (11 adım + DİKKAT: pompa ünitesinde elektrikli bileşenler).
# i-Dos tuşları: K s.23; manuel dozajlama: K s.32 "16.2"; deterjan notları: K s.28; çekmece sembolü satırı: K s.43; müşteri hizmetleri: K s.49.
# KAPSAM: E:10, taranan 8 Siemens TR kılavuzundan YALNIZ K'de var (7 solo çamaşır makinesi kılavuzunda yok). Yazı bunu açıkça söylüyor.
# Bilerek YAZILMAYANLAR: pompa motoru/kart teşhisi; "fişi çek-bekle" reseti (E:10 satırında Siemens vermiyor); pompa ünitesini suyla yıkama (Siemens yasaklıyor).
# Alıntı denetim tablosu: siemens-camasir-makinesi-e10-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Yumuşak, nemli bir bez", "Kuru bir bez"]
steps:
  - "Cihazı bekleme (Standby) moduna getir."
  - "Deterjan bölmesini dışarı çek, tertibatı aşağı bastır ve bölmeyi çıkar."
  - "Pompa ünitesini çıkar, ardından kapağının kilidini açarak deterjan çekmecesini çıkar."
  - "Deterjan çekmecesini boşalt ve pompa ünitesini yalnızca nemli bir bezle sil."
  - "Çekmeceyi ve kapağını yumuşak, nemli bir bezle ya da püskürtme hortumuyla temizle."
  - "Parçaları kurula, yerlerine yerleştir ve bölmenin cihaz içindeki gövdesini temizle."
  - "Deterjan bölmesini tamamen içeri it."
  - "E:10 yeniden görünürse müşteri hizmetlerini ara; o zamana kadar i-Dos'u kapatıp manuel dozajlama yap."
faq:
  - q: "Siemens çamaşır makinesinde E:10 ne demek?"
    a: "Siemens'in WN54C2A0TR kurutmalı çamaşır makinesi kılavuzunda E:10-00, E:10-10 ve E:10-20'nin karşılığı: akıllı dozajlama sistemi pompası bloke. Kılavuzun ilk talimatı deterjan çekmecesini temizlemek; arıza devam ederse müşteri hizmetlerini aramak."
  - q: "Kod gidene kadar makineyi kullanabilir miyim?"
    a: "Kılavuzdaki nota göre arıza giderilene kadar akıllı dozajlama sistemini devre dışı bırakıp manuel dozajlama yapabilirsin. i-Dos tuşuna kısa süre basmak ilgili hazne için akıllı dozajlamayı açıp kapatır; deterjanı da manuel dozajlama haznesine koyarsın."
  - q: "Pompa ünitesini suyun altında yıkayabilir miyim?"
    a: "Hayır. Siemens, pompa ünitesinde elektrikli bileşenler bulunduğunu, ünitenin bulaşık makinesinde yıkanmaması ve suya daldırılmaması gerektiğini yazıyor. Arkadaki elektrikli bağlantı nem, deterjan ve yumuşatıcı artıklarına karşı korunmalı. Kılavuz pompa ünitesi için yalnızca nemli bir bezle temizlik öneriyor."
  - q: "Ekranda E:10 yok ama çekmece sembolü yanıyor, bu ne?"
    a: "Aynı kılavuzun tablosunda deterjan çekmecesi sembolü iki durumu anlatıyor: çekmece yerine tamamen takılmamış ya da pompa ünitesi doğru yerleştirilmemiş. Çözüm deterjan bölmesini içeri itmek ve pompa ünitesinin doğru yerleştirilip yerleştirilmediğini kontrol etmek."
  - q: "E:10'u önlemek için neye dikkat etmeliyim?"
    a: "Siemens dozajlama haznesine yalnız uygun sıvı deterjan ve yumuşatıcı doldurulmasını, eklemenin aynı üründen yapılmasını ve ürün değiştirilecekse önce deterjan bölmesinin temizlenmesini istiyor. Kılavuza göre kendiliğinden akan sıvı deterjanlar kullanılmalı, farklı sıvı deterjanlar karıştırılmamalı ve dozaj haznesine sirke doldurulmamalı."
images:
  coverAlt: "Kurutmalı bir çamaşır makinesinin tamamen dışarı çekilmiş deterjan çekmecesi; yanında nemli bir bez ve sıvı deterjan şişesi"
---

Yıkama başladı ya da başlamak üzereydi, ekranda **E:10-00**, **E:10-10** veya **E:10-20** belirdi. Siemens'in akıllı dozaj sistemli (i-Dos) WN54C2A0TR kurutmalı çamaşır makinesi kılavuzunda bu kodun karşılığı tek cümle: **"Akıllı dozajlama sistemi pompası bloke."** Kılavuzun ilk talimatı servis çağırmak değil, **deterjan çekmecesini temizlemek**. Bu yazıda o temizliği Siemens'in kendi sırasıyla adım adım anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E:10 = Siemens'e göre akıllı dozaj sisteminin pompası bloke. Sıra şu: cihazı bekleme moduna al → çekmeceyi ve pompa ünitesini çıkar → çekmeceyi boşalt, pompa ünitesini yalnızca nemli bezle sil → her şeyi kurula, yerine tak, çekmeceyi tamamen içeri it. Kod sürerse → müşteri hizmetleri; bu arada i-Dos kapalı, manuel dozajlama.

> ℹ️ **Hangi modeller?** Taradığımız sekiz Siemens Türkiye kılavuzunda E:10 yalnızca i-Dos'lu **WN54C2A0TR** kurutmalı çamaşır makinesinin tablosunda geçiyor. Senin modelinde E:10 farklı görünüyorsa önce kendi kılavuzunun "Arızaları giderme" tablosuna bak.

## Adım adım: evde denenecekler

**1. Cihazı bekleme moduna al.** Siemens'in çekmece temizliği talimatı bununla başlıyor: cihazı **bekleme (Standby)** moduna getir.

**2. Deterjan bölmesini çıkar.** Deterjan bölmesini dışarı çek. Kılavuza göre bölmeyi yerinden almak için **tertibatı aşağıya doğru bastırıp** bölmeyi çıkarıyorsun.

**3. Pompa ünitesini ve çekmeceyi ayır.** Önce **pompa ünitesini** çıkar. Ardından **kapağının kilidini açarak** deterjan çekmecesini çıkar.

**4. Çekmeceyi boşalt, pompa ünitesini sil.** Deterjan çekmecesini boşalt. Pompa ünitesini **yalnızca nemli bir bezle** temizle. Siemens'in uyarısı net: pompa ünitesinde elektrikli bileşenler var; ünite **bulaşık makinesinde yıkanmamalı, suya daldırılmamalı** ve arkadaki elektrikli bağlantı neme, deterjana ve yumuşatıcı artıklarına karşı korunmalı.

**5. Çekmeceyi ve kapağını temizle.** Deterjan çekmecesini ve kapağını **yumuşak, nemli bir bezle ya da bir püskürtme hortumuyla** temizle.

**6. Kurula, yerleştir, gövdeyi temizle.** Çekmeceyi, kapağı ve pompa ünitesini kurula ve yerlerine yerleştir. Ardından deterjan bölmesinin **cihaz içindeki gövdesini** de temizle.

**7. Bölmeyi tamamen içeri it.** Deterjan bölmesini sonuna kadar içeri it. Aynı kılavuzun tablosuna göre ekrandaki çekmece sembolü, çekmecenin yerine tamamen takılmadığını ya da pompa ünitesinin doğru yerleştirilmediğini gösterir; bu sembol yanıyorsa pompa ünitesinin yerini tekrar kontrol et.

**8. Kod sürerse servis, o zamana kadar manuel dozaj.** Siemens'in E:10 talimatındaki ikinci adım: **arıza devam ederse müşteri hizmetlerini ara.** Kılavuzdaki nota göre arıza giderilene kadar akıllı dozajlama sistemini devre dışı bırakıp **manuel dozajlama** yapabilirsin.

## E:10 tam olarak neyi söylüyor?

WN54C2A0TR'nin akıllı dozaj sistemi, fabrikada etkinleştirilmiş olarak gelir ve akıllı dozajlamanın mümkün olduğu programlarda sıvı deterjanı ve yumuşatıcıyı otomatik dozajlar. E:10, Siemens'in tablosunda bu sistemin pompasının **bloke** olduğunu söyler. Tablonun önerdiği kullanıcı işi, içinde pompa ünitesi de bulunan deterjan çekmecesinin temizliğidir.

Kılavuz aynı temizliği iki durumda daha istiyor: dozaj ayarlama kabındaki sıvı deterjanı ya da yumuşatıcıyı **başka bir ürünle değiştirmek** istediğinde ve deterjan bölmesi **kirlendiğinde**.

## i-Dos'u kapatıp manuel dozajlamaya geçmek

Kılavuzun tuş tablosuna göre **i-Dos** tuşlarına **kısa süre** basmak, ilgili hazne için akıllı dozaj sistemini etkinleştirir ya da devre dışı bırakır. Aynı tuşa yaklaşık 3 saniye basmak ise temel dozajlama miktarı ayarına girer; kapatmak için basılı tutman gerekmez.

Manuel dozajlamada Siemens'in sırası şu:

- Deterjan bölmesini dışarı çek.
- Deterjanı ya da bakım maddesini **manuel dozajlama haznesine** doldur.
- Deterjan bölmesini içeri it.

Kılavuzun bir uyarısı da burada önemli: akıllı dozajlama kullanılırken aşırı dozajlama ya da köpüklenmeyi önlemek için manuel dozajlama haznesine **ekstra** deterjan ya da yumuşatıcı eklenmemeli. Yani ikisini aynı anda kullanma; ya i-Dos ya manuel.

## Tekrarını önlemek için

Siemens kılavuzunun dozajlama bölümünden çıkan alışkanlıklar:

- Dozajlama haznesine yalnızca **uygun sıvı deterjan ve yumuşatıcı** doldur.
- Hazneye ekleme yapacaksan **aynı üründen** ekle; ürünü değiştireceksen önce deterjan bölmesini temizle.
- Sıvı deterjanlarda **kendiliğinden akan** ürünleri kullan, farklı sıvı deterjanları birbirine karıştırma.
- Akıllı dozajlama sisteminin dozaj ayarlama haznesine **sirke doldurma**.
- Doldururken azami dolum seviyesi işaretini aşma, doldurduktan hemen sonra kapağı kapat; kılavuza göre bu, deterjanın kurumasını önler.

Deterjan çekmecesiyle ilgili markadan bağımsız sorunlar için [çamaşır makinesi deterjanı almıyor](/blog/camasir-makinesi-deterjan-almiyor/) yazısına, diğer Siemens kodları için [Siemens çamaşır makinesi hata kodları](/blog/siemens-camasir-makinesi-hata-kodlari/) yazısına bakabilirsin. Kodu yerine getirmek için genel bir yeniden başlatma arıyorsan [Siemens çamaşır makinesi hata kodu sıfırlama](/blog/siemens-camasir-makinesi-hata-kodu-sifirlama/) rehberinde Siemens'in "diğer tüm hata kodları" talimatı var; ama E:10'un kendi satırı çekmece temizliğini istiyor.

## Sınır nerede biter

Çekmece temiz, pompa ünitesi yerinde, bölme sonuna kadar itilmiş ve E:10 yine geliyorsa Siemens'in talimatı müşteri hizmetlerini aramak. Kılavuzun arıza bölümündeki genel uyarı da aynı yönde: usulüne aykırı onarımlar tehlike yaratır ve cihazda onarımı yalnızca bunun eğitimini almış uzman personel yapabilir.

⛔ **Kendin-çöz sınırı burada biter.** Çekmecenin çıkarılması, silinmesi ve yerine takılması kullanıcıya; dozajlama pompasının içi ve elektrikli bağlantısı servise aittir.

Aradığında işini kolaylaştıracak bilgi: Siemens, müşteri hizmetlerine başvururken cihazın **ürün numarasını (E-Nr.)**, **imalat numarasını (FD)** ve **sayma numarasını (Z-Nr.)** hazır bulundurmanı istiyor.

Ekrandaki kodu ve makinenin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

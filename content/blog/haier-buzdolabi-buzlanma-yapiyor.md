---
title: "Haier buzdolabı buzlanma yapıyor"
description: "Haier buzdolabının dondurucusunda kalın buz ve karlanma varsa Haier kılavuzundaki sebepler: ambalaj, kapı, sık açma, conta ve kapıyı engelleyen raflar."
slug: "haier-buzdolabi-buzlanma-yapiyor"
date: "2026-10-03"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu ek iş, Haier). Tolga kararı (3 Eki ~09:4x): haier-europe.com ürün sayfasından bağlanan d15v10x8t3bz3x.cloudfront.net/Libretti PDF'i markanın kendi belgesi sayılır.
#   Ürün sayfası (bu koşuda, HTTP 200): https://www.haier-europe.com/tr_TR/cok-kapili/34005004/hcr5919enmp/  md5 4f81b4464db0cdfbb06c2800c37c9a1a
#   Kılavuz (HTTP 200, application/pdf): https://d15v10x8t3bz3x.cloudfront.net/Libretti/2026/2/17709677/MAN-000176823_007  616 s. çok dilli (model listesinde HCR5919ENMP)  md5 ef65ee3c32c88974b4c6a9b6c9231c3d
#   TR bölümü PDF s.351-~388; sayfa = PDF sayfası. pdftotext -layout. Web araması yok.
# Ana satır (s.377): "Dondurucu bölmesinde kuvvetli buz ve buzlanma." · "Ürünler yeterince paketlenmemiş. → Ürünleri her zaman iyi paketleyin." · "Cihazın bir kapısı/çekmecesi sıkıca kapatılmamış. → Kapıyı/çekmeceyi kapatın."
#   · "Kapı/çekmece çok sık veya çok uzun süre açıldı. → Kapıyı/çekmeceyi çok sık açmayın." · "Kapı/çekmece contası kirli, aşınmış, çatlamış veya uyumsuz. → Kapı/çekmece contasını temizleyin veya yenileriyle değiştirin."
#   · "İçerideki bir şey kapının/çekmecenin düzgün kapanmasını engelliyor. → Kapının/çekmecenin kapanmasına izin vermek için rafları, kapı raflarını veya dahili kapları yeniden konumlandırın."
# Diğer: s.370 "Yiyecekleri dondurucuya koymadan önce paketlemek daha iyidir. Torbaların birbirine yapışmasını önlemek için ambalajın dışı kuru olmalıdır. Ambalaj malzemeleri kokusuz, hava geçirmez, zehirsiz ve zararsız olmalıdır." · "Sıcak yiyecekler, dondurucu bölmesine yerleştirilmeden önce oda sıcaklığına soğutulmalıdır."
#   · "Dondurucu bölmesine aşırı miktarda taze yiyecek yüklemeyin." · s.373 "Gıda ambalajının içinde hava olmasını önleyin." · "Kapının her zaman doğru şekilde kapanması için kapı contalarını temiz tutun."
#   · s.374 "Temizlemeden önce cihazı güç kaynağından ayırın." · conta/iç temizlik "yumuşak bir havlu veya ılık suya batırılmış süngerle silin (ılık suya nötr deterjan ekleyebilirsiniz)" · "Durulayın ve yumuşak bir bezle kurulayın." · "en az 7 dakika bekleyin."
#   · "Buzdolabı ve dondurucu bölmesinin buzunun çözülmesi otomatik olarak gerçekleştirilir; manuel işleme gerek yoktur." · "özellikle ıslak ellerle dondurucu depolama bölmesinin iç yüzeyine dokunmayın." · s.363 kapı açma alarmı 1 dk · s.380 kapıların ince ayarı (ayırıcı "elle veya pense gibi aletler kullanarak")
# BİLEREK YAZILMAYANLAR: buzu bıçak/sıcak su/fön ile sökme (belgede yok) · conta değişimini kullanıcıya verme (müşteri hizmetleri) · ayak/kapı ince ayarı adım olarak (kurulum; ayırıcı takmada "pense gibi aletler" geçiyor) · fan/ısıtıcı teşhisi · fiyat.
# Alıntı denetim tablosu: haier-buzdolabi-buzlanma-yapiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Sünger", "Yumuşak bez"]
steps:
  - "Dondurucudaki yiyecekleri dışı kuru, hava geçirmez ambalajlara koy; ambalajın içinde hava kalmasın."
  - "Kapanmayı engelleyen rafları, kapı raflarını ya da kapları yeniden yerleştir."
  - "Tüm kapı ve çekmecelerin sıkıca kapandığını kontrol et."
  - "Dondurucu kapısını ve çekmecelerini sık ve uzun süre açık tutmamaya dikkat et."
  - "Cihazın fişini çek, kapı contasını ılık suya batırılmış sünger ya da yumuşak havluyla sil ve kurula."
  - "Fişi tekrar takmadan önce en az 7 dakika bekle."
faq:
  - q: "Haier buzdolabımın dondurucusu neden buz tutuyor?"
    a: "Haier'in HCR5919 ailesini de kapsayan kılavuzunda 'Dondurucu bölmesinde kuvvetli buz ve buzlanma' satırı beş sebep sayıyor: ürünlerin yeterince paketlenmemesi, sıkıca kapanmayan kapı ya da çekmece, kapının çok sık ya da uzun açılması, kirli, aşınmış ya da çatlamış conta ve içerideki bir şeyin kapının düzgün kapanmasını engellemesi."
  - q: "Buzu elle çözmem gerekir mi?"
    a: "Kılavuza göre buzdolabı ve dondurucu bölmesinin buz çözmesi otomatik gerçekleşiyor ve manuel işleme gerek yok. Kuvvetli buzlanma varsa Haier'in tablosundaki sebepleri kontrol et. Kılavuz, özellikle ıslak ellerle dondurucunun iç yüzeyine dokunmamanı da istiyor; eller yüzeye donabilir."
  - q: "Contam çatlamış, ne yapmalıyım?"
    a: "Haier contanın kirli, aşınmış, çatlamış veya uyumsuz olmasını buzlanma sebepleri arasında sayıyor; kirliyse temizlenmesini, bozuksa değiştirilmesini istiyor. Arıza giderme tablosunun bir başka satırına göre conta değişimini müşteri hizmetleri yapıyor."
  - q: "Dondurucuya yiyeceği nasıl koymalıyım?"
    a: "Haier yiyecekleri dondurucuya koymadan önce paketlemeni, torbaların birbirine yapışmaması için ambalajın dışının kuru olmasını ve ambalajın hava geçirmez olmasını öneriyor. Sıcak yiyecekleri önce oda sıcaklığına soğutmanı ve dondurucuya aşırı miktarda taze yiyecek yüklememeni de istiyor."
images:
  coverAlt: "Çekmeceli bir dondurucu bölmesinin iç duvarında ve çekmece kenarında biriken beyaz buz tabakası"
---

Dondurucu çekmecesi zor kapanıyor, iç duvarlar ve paketler kalın bir karla kaplanmış. Haier'in HCR5919 ailesini de kapsayan çok kapılı buzdolabı kılavuzunda bu durumun satırı **"Dondurucu bölmesinde kuvvetli buz ve buzlanma."** Haier bu satırda beş sebep gösteriyor ve hepsi içeriye nemli havanın girmesiyle ilgili: **ürünler yeterince paketlenmemiş**, **cihazın bir kapısı/çekmecesi sıkıca kapatılmamış**, **kapı/çekmece çok sık veya çok uzun süre açıldı**, **kapı/çekmece contası kirli, aşınmış, çatlamış veya uyumsuz** ve **içerideki bir şey kapının/çekmecenin düzgün kapanmasını engelliyor.**

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Paketleri hava geçirmez ve dışı kuru yap, kapıyı engelleyen raf ya da kabı düzelt, kapıları sıkı kapat ve sık açma. Fişi çekip contayı ılık suyla sil; fişi takmadan 7 dakika bekle. Buz çözme otomatik, elle uğraşma.

## Adım adım: evde denenecekler

**1. Yiyecekleri iyi paketle.** Haier'in ilk sebebi: **ürünler yeterince paketlenmemiş** → **ürünleri her zaman iyi paketleyin.** Dondurucu saklama bölümü yiyecekleri **dondurucuya koymadan önce paketlemenin daha iyi** olduğunu, torbaların yapışmaması için **ambalajın dışının kuru** olmasını ve ambalaj malzemesinin **hava geçirmez** olmasını istiyor. Enerji ipuçlarında da aynı uyarı var: **gıda ambalajının içinde hava olmasını önleyin.**

**2. Kapıyı engelleyen şeyi düzelt.** Tablonun son satırı en kolay gözden kaçanı: **içerideki bir şey kapının/çekmecenin düzgün kapanmasını engelliyor.** Haier'in çözümü: **kapının/çekmecenin kapanmasına izin vermek için rafları, kapı raflarını veya dahili kapları yeniden konumlandırın.** Taşan bir paket ya da öne kaymış bir kap, kapının arasında ince bir aralık bırakır.

**3. Kapıları sıkıca kapat.** İkinci sebep: **cihazın bir kapısı/çekmecesi sıkıca kapatılmamış** → **kapıyı/çekmeceyi kapatın.** Kapı **1 dakikadan** uzun açık kalırsa kılavuza göre kapı açma alarmı çalıyor; alarmı susturmak için kapıyı kapatman yeterli.

**4. Kapıyı sık açma.** Haier'e göre **kapı/çekmece çok sık veya çok uzun süre açıldı** ise buzlanma artar; çözüm **kapıyı/çekmeceyi çok sık açmayın.** Neyi nereden alacağını bilerek açmak, kapının açık kaldığı süreyi kısaltır.

**5. Contayı temizle.** Dördüncü sebep: **kapı/çekmece contası kirli, aşınmış, çatlamış veya uyumsuz** → **kapı/çekmece contasını temizleyin.** Haier'in temizlik bölümündeki sıra: önce **cihazı güç kaynağından ayır**; sonra kapı contası dahil yüzeyleri **yumuşak bir havlu veya ılık suya batırılmış süngerle** sil (ılık suya **nötr deterjan** ekleyebilirsin), **durula ve yumuşak bir bezle kurula.** Kılavuz **sert fırça, tel fırça, deterjan tozu** ve solventlerle temizlik yapmamanı istiyor.

**6. Fişi takmadan önce bekle.** Haier'in temizlik bölümünün son uyarısı: **sık çalıştırma kompresöre zarar verebileceğinden** cihazı yeniden başlatmadan önce **en az 7 dakika** bekle.

## Buzu elle çözmek gerekir mi

Haier'in kılavuzu açık: **buzdolabı ve dondurucu bölmesinin buzunun çözülmesi otomatik olarak gerçekleştirilir; manuel işleme gerek yoktur.** Kalın buz, yukarıdaki sebeplerden birinin işaretidir. Dondurucunun iç yüzeyine **özellikle ıslak ellerle dokunma**; Haier'e göre eller yüzeye donabilir. Kılavuz ayrıca **sıcak yiyeceklerin** dondurucuya oda sıcaklığına soğuduktan sonra konmasını ve dondurucuya **aşırı miktarda taze yiyecek** yüklenmemesini istiyor.

Buzdolabı bölmesi de soğutmuyorsa [Haier buzdolabı soğutmuyor](/blog/haier-buzdolabi-sogutmuyor/), motor hiç durmuyorsa [Haier buzdolabı sürekli çalışıyor](/blog/haier-buzdolabi-surekli-calisiyor/) yazısına bak. Markadan bağımsız anlatım için [buzdolabı buzlanma yapıyor](/blog/buzdolabi-buzlanma-yapiyor/) ve [buzdolabı kapı contası bakımı](/blog/buzdolabi-kapi-contasi-bakimi/) yazıları var.

## Ne zaman servis

Conta **aşınmış, çatlamış veya uyumsuzsa** temizlik yetmez; Haier'in tablosu bu durumda contanın değiştirilmesini, arıza giderme tablosunun bir başka satırı da bunun **müşteri hizmetleri tarafından** yapılmasını söylüyor. Kapılar birbirine göre eğikse kılavuzun kurulum bölümü ayak ve ayırıcıyla ince ayar anlatıyor; ayırıcı takma için **pense gibi aletler** de geçtiğinden bunu burada adım olarak vermiyoruz.

⛔ **Kendin-çöz sınırı burada biter.** Paketler düzgün, kapılar sıkı kapanıyor, conta temiz ve sağlam olduğu hâlde dondurucu yine kalın buz tutuyorsa yetkili servise başvur.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

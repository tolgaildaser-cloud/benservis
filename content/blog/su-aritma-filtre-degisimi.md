---
title: "Su arıtma filtre değişimi nasıl yapılır: kılavuzlara göre"
description: "Su arıtma filtresi ne zaman, hangi sırayla değişir? BSH ve A.O. Smith kılavuzlarına göre süreler, yıkama adımları ve değişimden sonra yapılacaklar."
slug: "su-aritma-filtre-degisimi"
date: "2026-10-30"
category: "Su sebili / arıtma"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, paket P06 (YK #197 boşluk, BOSLUK.md #95). Slug origin/main'de yok. Yakın yazılar: su-aritma-su-gelmiyor (genel belirti; parça değişimi anlatmaz), brita-filtre-degisimi (sürahi, markalı).
# Kaynak (#88): 2 üretici belgesi: BSH tezgâh altı su arıtma cihazı SU01A2VW0N kullanım kılavuzu (8001330418) ve A.O. Smith Opal NW serisi kullanım kılavuzu. URL, md5, sayfa ve alıntılar KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: ücret (#46) · pompa, selenoid valf, check valf, basınç anahtarı, tank işlemleri (servis) · klorlu dezenfeksiyon (A.O. Smith kılavuzunda var, kimyasal kullanımı yazıya alınmadı) · membran kabını açma ayrıntısı (kullanıcıya yalnız "kılavuzdaki sırayı izle, emin değilsen servis" denir).
guide:
  difficulty: "Orta"
  time: "~45 dakika"
  totalTime: "PT45M"
  cost: "Yedek filtre ayrıca alınır"
  tools: ["Orijinal yedek filtre seti", "Kuru bez", "Bir kova"]
steps:
  - "Hangi filtrenin zamanının geldiğini kılavuzdaki süre tablosundan belirle."
  - "Yalnız cihaz üreticisinin orijinal filtrelerini al."
  - "Cihazın fişini çek, giriş suyu vanasını kapat."
  - "Eski kartuşu çıkar, yenisini akış yönüne dikkat ederek tak."
  - "Yeni filtreleri kılavuzdaki süre kadar yıka; yıkama suyunu içme."
  - "Tank dolana kadar bekle ve ilk tankı içmeden boşalt."
  - "Değişim tarihini not et, bağlantılarda sızıntı olup olmadığına bak."
faq:
  - q: "Su arıtma filtresi kaç ayda bir değişir?"
    a: "Modele göre değişiyor. BSH tezgâh altı cihazında sediment ve iki blok karbon filtre 6 ayda, mineral karbon 12 ayda, membran 24 ayda değişiyor. A.O. Smith Opal NW kılavuzunda sediment, GAC ve blok karbon yaklaşık 6 ay, son karbon yaklaşık 12 ay, membran yaklaşık 3 yıl. Suyun kalitesi ve kullanım miktarı bu süreleri değiştirebilir."
  - q: "Filtre değişiminden sonra ilk su içilir mi?"
    a: "BSH kılavuzuna göre hayır. Filtreler yıkanırken musluktan gelen su içilmez, ilk dolan tanktaki su da içilmeden boşaltılır. A.O. Smith membran sonrası suyun bir süre boşa akıtılmasını, ilk günlerde suda hava kabarcığı görülebileceğini yazıyor."
  - q: "Cihazı uzun süre kullanmazsam filtreler ne olur?"
    a: "BSH'ye göre cihaz 1 aydan uzun süre kullanılmadıysa mineral filtrenin, 2 aydan uzun süre kullanılmadıysa tüm filtrelerin değişmesi gerekir. Uzun süre kullanılmayacaksa giriş vanasının kapatılması öneriliyor."
images:
  coverAlt: "Evye altındaki dolapta tezgâh altı su arıtma cihazı, yanında sıralanmış yeni beyaz filtre kartuşları"
  steps:
    - "Kılavuzdaki süre tablosunu parmağıyla takip eden beyaz eldivenli sade siluet el"
    - "Kapalı kutu içinde duran yeni filtre kartuşunu tutan beyaz eldivenli sade siluet el"
    - "Evye altındaki giriş vanasının kolunu kapalı konuma çeviren beyaz eldivenli sade siluet el, yanında prizden çekilmiş fiş"
    - "Eski kartuşu yuvasından çıkaran, yenisinin üzerindeki yön okunu gösteren beyaz eldivenli sade siluet el"
    - "Filtre çıkış hortumunu kovaya doğru tutan beyaz eldivenli sade siluet el ve akan yıkama suyu"
    - "Arıtma musluğundan boş bardağa damlayan su, yanında içilmeyecek anlamında üstü çizili bardak simgesi"
    - "Yeni filtrenin gövdesine tarih yazan beyaz eldivenli sade siluet el"
---

Su arıtmanın akışı yavaşlıyor, suyun tadı değişiyor ya da en son ne zaman filtre taktığını hatırlamıyorsun. "Su arıtma filtre değişimi nasıl yapılır" diye arayanlar için iki üreticinin kendi kılavuzunu okuduk: BSH'nin tezgâh altı su arıtma cihazı ve A.O. Smith Opal NW serisi. Adımlar bu belgelerden alındı, ikisinin ayrıştığı yerleri ayrıca yazdık. Cihazının kılavuzu farklı bir şey söylüyorsa onunki geçerli.

> ⚠️ **Önce şu sınırı bil:** filtre kartuşu değişimi kılavuzlarda kullanıcıya anlatılan bakım. Pompa, selenoid valf, check valf, basınç anahtarı ve tank ise arıza listesinde "değiştirin ya da servis çağırın" diye geçen parçalar; bunlara dokunma, servise bırak. Her işlemde fiş prizdeyken çalışma.

## Adım adım: filtre değişimi

**1. Zamanı gelen filtreyi belirle.** BSH kılavuzunda sediment ve iki blok karbon filtre 6 ayda, mineral karbon 12 ayda, membran 24 ayda değişiyor. A.O. Smith'te sediment, GAC ve blok karbon yaklaşık 6 ay, son karbon yaklaşık 12 ay, membran yaklaşık 3 yıl. BSH, giriş suyu iletkenliği 700 ile 1000 ppm arasındaysa süreleri yarıya indirmeni, membranı 6 ayda bir değiştirmeni istiyor.

**2. Orijinal filtre al.** BSH, filtrelerin yalnız cihaz üreticisinin sağladığı orijinal filtrelerle değiştirilmesini istiyor. A.O. Smith onaysız parça ve filtrelerin yol açtığı performans kaybının garanti dışında kalacağını yazıyor.

**3. Fişi çek, vanayı kapat.** İki kılavuz da membran değişiminin ilk adımı olarak fişin çekilmesini ve su besleme vanasının kapatılmasını söylüyor. A.O. Smith ayrıca bakım öncesi tüm elektriğin kesilmesini uyarı olarak koymuş.

**4. Kartuşu akış yönüne göre tak.** BSH mineral karbon değişiminde hortumların filtre üzerindeki su akış yönüne bakılarak takılmasını istiyor. A.O. Smith son karbon filtre için üzerindeki FLOW işaretinin çıkış yönünü gösterdiğini, ters takılmaması ve bağlantıların fazla sıkılmaması gerektiğini yazıyor. Membran değişimi hazne kapağı ve hortum bağlantısı içeriyor; kılavuzundaki sırayı izle, emin değilsen servise bırak.

**5. Yeni filtreyi yıka.** BSH: sediment ve blok karbon filtreler 5 dakika, membran 15 dakika, mineral karbon 5 dakika yıkanır; yıkama boyunca musluktan gelen su içilmez. A.O. Smith'te ilk üç filtre 10 dakika yıkanıyor. Membran için A.O. Smith'in Türkçe bölümü 30 dakika, aynı kılavuzun İngilizce bölümü 2 saat yazıyor; kendi kılavuzundaki süreye uy.

**6. Tankın dolmasını bekle.** BSH'ye göre ilk yıkamadan sonra tank tam dolana kadar beklenir ve ilk dolan tanktaki su içilmeden boşaltılır. A.O. Smith, kurulumdan sonra ilk günlerde suda hava kabarcığı görülebileceğini söylüyor.

**7. Sızıntıya bak, tarihi not et.** A.O. Smith, işlem sonrası musluğu açıp tüm sistemde sızıntı olup olmadığına bakmanı istiyor. Değişim tarihini bir yere yaz; bir sonraki süreyi buradan sayarsın. Kartuşun üzerine ya da cihazın yanına yazman yeterli.

## Her filtre ne iş yapıyor?

İki kılavuzda da sıra aynı. İlk filtre olan 5 mikronluk sediment, sudaki tortuyu ve parçacıkları tutar ve kendinden sonra gelen filtreleri, özellikle membranı korur. Karbon filtreler klor gibi suyun tadını ve kokusunu bozan maddeleri ayırır. Membran bakteri, virüs ve ağır metalleri tutar, tuttuğunu atık su kısmından gidere yollar. Mineral ya da son karbon filtre en sonda durur. BSH'ye göre ilk aşamalar membran üzerindeki kirlilik yükünü hafifletir.

## Filtre zamanı geldiğini nasıl anlarsın?

BSH'nin arıza tablosu üç işareti filtreye bağlıyor. Arıtılmış suyun tadı bozuksa, sebep olarak cihazın filtre değişim zamanının gelmiş olması yazıyor; çözüm filtreleri talimata göre değiştirmek. Musluktan su azalarak geliyorsa ve filtre bakım tarihi geçmişse, filtreleri, özellikle membranı değiştirmen isteniyor. Filtreler tıkandığında ise atık kısıcıyı da değiştirmeyi öneriyor; bu parça servis işi olduğundan servise haber ver.

## İki kılavuz arasındaki farklar

Yıkama süreleri ve membran ömrü markaya göre ayrışıyor: BSH membranı 24 ayda, A.O. Smith yaklaşık 3 yılda değiştiriyor. A.O. Smith ayrıca cihazın yılda en az bir kez dezenfekte edilmesini yazıyor; bunun kimyasal kullanan bir işlem olduğunu not ediyoruz ve ayrıntısını yazmıyoruz. Cihazını uzun süre kullanmayacaksan BSH giriş vanasını kapatmanı istiyor; 1 aydan uzun kullanılmazsa mineral filtreyi, 2 aydan uzun kullanılmazsa hepsini değiştirmeni söylüyor.

## Değişimden sonra su gelmiyorsa

Tank dolarken musluktan su ince ve kesik akabilir. A.O. Smith ilk çalıştırmada suyun önce sızıntı gibi akabileceğini, 10 dakika içinde normale dönmezse giriş basıncının düşük olabileceğini yazıyor. Normale dönmüyorsa giriş vanasının tam açık olduğuna bak. BSH ayrıca giriş basıncının en az 1 bar olmasını istiyor; altındaysa harici bir basınç yükseltme pompası gerekir ve bu bir kurulum işidir. Yine akmıyorsa [su arıtmadan su gelmiyor](/blog/su-aritma-su-gelmiyor/) yazısındaki kontrolleri sırayla yap.

## Servis çağırmadan önce üç not

1. Cihazın marka ve modelini yaz.
2. En son hangi filtreyi ne zaman değiştirdiğini not et.
3. Suyun nasıl davrandığını anlat: yavaş mı, tadı mı değişti, tank mı dolmuyor.

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

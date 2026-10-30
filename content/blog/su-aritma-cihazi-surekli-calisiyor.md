---
title: "Su arıtma cihazı sürekli çalışıyor: sebepleri ve çözümü"
description: "Su arıtma cihazı durmadan çalışıyorsa sebep tıkalı filtre, düşük basınç ya da valf olabilir. BSH ve A.O. Smith kılavuzlarına göre kontrol sırası."
slug: "su-aritma-cihazi-surekli-calisiyor"
date: "2026-10-30"
category: "Su sebili / arıtma"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, paket P06 (YK #197 boşluk, BOSLUK.md #96). Slug origin/main'de yok. Yakın yazılar: su-aritma-su-gelmiyor (genel belirti; sürekli çalışma yalnız bir SSS'de geçiyor).
# Kaynak (#88): 2 üretici belgesi: BSH tezgâh altı su arıtma cihazı SU01A2VW0N kılavuzu ve A.O. Smith Opal NW serisi kılavuzu. URL, md5, sayfa ve alıntılar KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: ücret (#46) · "pompaya zarar verir" gibi kılavuzda olmayan sonuç · normal çalışma süresi (kılavuzlarda yok) · pompa, valf, basınç anahtarı, tank havası işlemleri (servis).
guide:
  difficulty: "Orta"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor", "Kuru bez"]
steps:
  - "Musluğu kapat ve tankın dolmasına süre ver; çalışma durmuyorsa devam et."
  - "Filtre değişim tarihlerine bak; süresi geçmiş filtre varsa listeye yaz."
  - "Evye altındaki giriş vanasının tam açık olduğunu ve evin su basıncını kontrol et."
  - "Tank doluyken atık su hortumundan su akıp akmadığını gözle."
  - "Evye altında bağlantılarda ve hortumlarda ıslaklık ara."
  - "Çözemediysen fişi çek, giriş vanasını kapat ve servise belirtiyi anlat."
faq:
  - q: "Su arıtma cihazı neden durmadan çalışır?"
    a: "A.O. Smith kılavuzu su dolduktan sonra art arda çalışmanın nedenleri olarak tek yönlü vanada basınç kaybını, bozuk yüksek basınç anahtarını ve düşük basınçla çalışmayı sayıyor. BSH kılavuzu tank dolduğu halde atık suyun gelmesini selenoid ya da check valf arızasına bağlıyor."
  - q: "Su arıtma cihazı çalışırken sürekli ses yapıyor, normal mi?"
    a: "Kılavuzlar normal çalışma süresi vermiyor. Tank dolduktan sonra da ses ve atık su akışı sürüyorsa bu, her iki kılavuzun arıza tablosunda yer alan bir durum. Valf ve basınç anahtarı kontrolü servis işi."
  - q: "Servisi beklerken cihazı kapatmalı mıyım?"
    a: "BSH, cihazı uzun süre kullanmayacaksan giriş vanasının kapatılmasını ve elektrik bağlantısının prizden çekilmesini istiyor. A.O. Smith de uzun süre kullanılmayacaksa besleme vanasının kapatılmasını yazıyor."
images:
  coverAlt: "Evye altı dolabında tezgâh altı su arıtma cihazı, yanında dönen pompa simgesi ve damlayan atık su hortumu"
  steps:
    - "Arıtma musluğunu kapalı konuma getiren beyaz eldivenli sade siluet el, yanında dolmakta olan tank çizimi"
    - "Yeni ve eski filtre kartuşlarını yan yana tutan, birinin üzerindeki tarih etiketini gösteren beyaz eldivenli sade siluet el"
    - "Evye altındaki giriş vanasının kolunu boruyla aynı yöne getiren beyaz eldivenli sade siluet el"
    - "Atık su hortumunun ucunu gidere doğru tutan beyaz eldivenli sade siluet el ve hortumdan damlayan su"
    - "Hortum bağlantısının altına kuru bez tutan beyaz eldivenli sade siluet el, bezde ıslak iz"
    - "Cihazın fişini prizden çeken beyaz eldivenli sade siluet el, yanında telefon simgesi"
---

Arıtma cihazının pompa sesi bir türlü kesilmiyor, atık su hortumundan su akmaya devam ediyor. "Su arıtma cihazı neden sürekli çalışıyor" diye arayanlar için iki üreticinin kılavuzuna baktık: BSH'nin tezgâh altı su arıtma cihazı ve A.O. Smith Opal NW serisi. Kontrol sırası bu belgelerin arıza tablolarından alındı. Kılavuzlar "normal çalışma süresi" vermiyor, o yüzden süre tahmini yazmıyoruz.

> ⚠️ **Önce şu sınırı bil:** selenoid valf, check valf, basınç anahtarı, pompa ve tank hava basıncı kılavuzlarda "değiştirin", "ölçün" ya da "servis çağırın" denen parçalar. Bu yazı bunların kontrolünü anlatmaz; sen yalnız dışarıdan bakılabilecekleri kontrol et ve su basınçlı hatta söküm yapma.

## Adım adım: sürekli çalışma kontrolü

**1. Tankın dolmasına süre ver.** Musluğu kapat ve bekle. Kılavuzlar tank dolduktan sonra çalışmanın durmasını bekliyor: A.O. Smith "cihaz su ile doldurulduğunda art arda çalışmaya başlıyor" durumunu, BSH "tank doldu halde atıktan su gelmesi" durumunu arıza olarak listeliyor. Tank dolmuyorsa 2. adıma geç.

**2. Filtre tarihlerine bak.** A.O. Smith, saf su akışı az ya da kesilmişse ön filtrenin, RO membranının ve son karbon filtrenin tıkalı olabileceğini yazıyor. BSH de benzer biçimde, atık su akıp üretimin olmadığı durumda tıkalı filtre ve membranı sayıyor. Süresi geçmiş filtreyi not et; değişimin nasıl yapıldığı ayrı bir su arıtma filtre değişimi yazısında anlatılıyor.

**3. Vanayı ve basıncı kontrol et.** A.O. Smith "sistemde düşük basınçla çalışıyor" ifadesini art arda çalışmanın sebeplerinden biri sayıyor. BSH giriş basıncının en az 1 bar olmasını, altındaysa cihaz girişine harici basınç yükseltme pompası kurulmasını istiyor. Evye altındaki giriş vanasının tam açık olduğuna bak, mutfaktaki normal musluğu da açıp akışı karşılaştır.

**4. Atık su hortumunu gözle.** Tank doluyken atık hortumundan su akıyor mu? A.O. Smith "cihaz açık ama atık su akışı durmuyor" sorununda giriş selenoid vanasını ve tek yönlü vanayı, BSH tank doluyken atıktan su gelmesinde selenoid ve check valfi sebep gösteriyor. İkisi de değiştirme gerektiren parçalar; gördüğünü servise anlat.

**5. Sızıntı ara.** A.O. Smith art arda çalışma için tek yönlü vana kontrolünden sonra boru hattında sızıntı olup olmadığına bakılmasını söylüyor. Evye altındaki bağlantıların ve hortumların altına kuru bez tut. BSH'nin sızıntı satırında ekipmanın düzgün bağlanmaması, eğri kesilmiş hortum ucu ve yerine oturmamış conta sayılıyor.

**6. Çözemediysen kapat.** Fişi çek, giriş vanasını kapat. BSH uzun süre kullanılmayacaksa giriş vanasının kapatılmasını istiyor. Servise ararken cihazın ne zaman ve hangi musluk kullanımından sonra çalışmaya başladığını, tank doluyken de sürüp sürmediğini söyle; bu bilgi arızanın filtre mi, basınç mı, valf mi olduğunu ayırmaya yarar.

## Kılavuz tablolarında ne yazıyor?

A.O. Smith "cihaz su ile doldurulduğunda art arda çalışmaya başlıyor" için üç olası sebep veriyor: tek yönlü vanada basınç kaybı, bozuk yüksek basınç anahtarı ve düşük basınçla çalışma. Çözüm sütununda önce vana, sonra boru hattı sızıntısı yazıyor. "Depolama tankı dolu ama saf su çıkışı yok" satırında ise tankın hava basıncının 0,05 ile 0,07 MPa arasında olması ve son karbon filtrenin kontrolü yazıyor; tank basıncı ölçümü servis işi.

BSH'nin tablosunda tank dolu olduğu halde atık su gelmesi selenoid ve check valfe bağlanıyor. "Cihazda atık su akışı var ama üretim yok ya da çok az" satırında ise tıkalı filtre, tıkalı membran, check valf ve patlamış tank sayılıyor. İki kılavuzda da ortak olan: filtre, membran ve tek yönlü (check) valf.

## Basınç neden önemli?

İki kılavuz da giriş basıncını ayrıca vurguluyor. BSH, ters osmoz sisteminin sağlıklı çalışması için en az 3 bar gerektiğini, düşük basınçlı yerlerde bu basıncın cihazdaki pompayla sağlandığını ve şebeke basıncının en az 1 bar olması gerektiğini yazıyor. A.O. Smith pompasız modellerde 3 ile 6 bar, pompalı modellerde 1 ile 6 bar aralığını veriyor; en uygun çalışma basıncı 3 bar. Cihazın düşük basınçla çalışması A.O. Smith'in arıza tablosunda art arda çalışmanın sebepleri arasında yer alıyor.

## Sen hangi parçaya dokunmazsın?

Selenoid valf, tek yönlü (check) valf, yüksek ve alçak basınç anahtarı, pompa ve depolama tankı kılavuzlarda "değiştirin", "ölçün" ya da "servis çağırın" diye geçen parçalar. BSH ayrıca filtreler tıkandığında atık kısıcının da değiştirilmesini öneriyor. Bunların hepsi basınçlı su hattında ve elektrikli aksam yakınında çalışmak demek; kaçak ya da yanlış bağlantı mutfak dolabının içinde fark edilmeden büyür. Senin işin belirtiyi doğru anlatmak: tank doluyken çalışıyor mu, atık hortumundan su akıyor mu, filtre tarihleri ne durumda?

## Servis çağırmadan önce üç not

1. Cihazın marka ve modelini yaz.
2. Tank doluyken de çalıştığını, atık hortumundan su aktığını söyle.
3. Filtreleri en son ne zaman değiştirdiğini ve evin su basıncının nasıl olduğunu not et.

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

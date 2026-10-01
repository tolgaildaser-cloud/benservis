---
title: "Electrolux buzdolabı soğutmuyor"
description: "Electrolux buzdolabı yeterince soğutmuyorsa Electrolux'un listesi: açma ve fiş, +4 °C ayarı, kapı lastiği, sıcak yiyecek, aşırı yükleme ve hava dolaşımı."
slug: "electrolux-buzdolabi-sogutmuyor"
date: "2026-10-01"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-01 PAZ alt ajanı (sprint #144, belirti rehberi). Belge bu koşuda curl -sL --http2 + tam tarayıcı başlıklarıyla www.electrolux.com.tr'den indirildi, HTTP 200, application/pdf.
# (Düz -A "Mozilla/5.0" ile electrolux.com.tr 000/zaman aşımı veriyor.) Belge adresi web aramasıyla bulundu (api.electrolux-medialibrary.com listesi), aynı yol www.electrolux.com.tr/services/eml/ altından indirildi. #88: forum/servis sitesi/üçüncü taraf kullanılmadı.
# Not: belge LRS4DF18S "Soğutucu" (dondurucu bölmesi olmayan model) kılavuzu; sayfa yalnız soğutucu bölmeyi anlatır, dondurucu için cümle kurulmadı.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-electrolux-sprint/ (MD5.txt) · sayfa = PDF sayfası (= basılı sayfa no).
#  (B) Electrolux LRS4DF18S soğutucu kullanma kılavuzu  https://www.electrolux.com.tr/services/eml/asset/11ec906c-2b6e-4688-bd4b-b8812b6673fd/E4RM3Q/3cab0ab9-beb3-464f-8642-21303ec7754e/ORIGINAL/3cab0ab9-beb3-464f-8642-21303ec7754e.pdf  24 s.  md5 77bcd157b882153b6fae02c9d4b0401f
# Tablo (B s.17, 8.1) "Cihazın içindeki sıcaklık çok az/çok fazla.": sıcaklık doğru ayarlanmamış → "Daha yüksek/düşük bir sıcaklığa ayarlayın." · kapı doğru kapatılmamış → "Kapının kapatılması" kısmı
#   · "Gıda ürünlerinin sıcaklığı çok yüksektir." → oda sıcaklığına düşmesi için bekletin · "Cihaza aynı anda birçok gıda ürünü depolanmıştır." → "Buzdolabına aynı anda çok fazla gıda ürünü koymayın."
#   · "Kapı sık sık açılmıştır." → "Kapıyı sadece gerekli olduğunda açın." · FastCool açık → "FastCool fonksiyonu" bölümü · "Cihazda soğuk hava dolaşımı yapılamıyor." → "İpuçları ve öneriler" bölümü
# Tablo (B s.15) "Cihaz çalışmıyor.": kapatılmış → çalıştırın · fiş → doğru şekilde takın · prizde voltaj yok → başka cihazla kontrol, kalifiye elektrik teknisyeni
#   · "Kompresör sürekli çalışıyor." satırı (B s.15-16) · "Sıcaklık ayarlanamıyor." (FastCool) s.17 · "DEMO" s.17 · sıcaklık göstergesinde sayı yerine simge → sensör → servis s.18
# Diğer: B s.9-10 4.2/4.4 (ON/OFF; önerilen +4 °C; aralık 2-8 °C; "Ayarlanan sıcaklığa 24 saat içinde ulaşılır.") · B s.10 4.5 FastCool (~6 saat sonra kendiliğinden durur)
#   · B s.8 3.4 havalandırma + 10-38 °C ortam + güneş/radyatör/ocak yakını · B s.11 sebze çekmecesi üstündeki cam raf · B s.13 5.5 sıcaklık göstergesi (OK; 12 saat bekle; değilse daha soğuk)
#   · B s.13 6.1 kapıyı sık açma, havalandırma ızgaralarını kapatma · B s.14 6.2 sıcak yiyecek koyma · B s.14 7.2 kapı contalarını kontrol edip silerek temizle · B s.18 8.3 kapının kapatılması (lastikleri temizle; kapı ayarı montaj; hasarlı lastik → servis)
#   · B s.2 servis: Model, PNC, Seri No · B s.18 "Verilen tavsiye neticesinde istenilen sonuç sağlanamazsa, en yakın Yetkili Servis Merkezi'ni arayın."
# BİLEREK YAZILMAYANLAR: gaz/kompresör/sensör teşhisi (belgede yok; sensör yalnız gösterge simgesi satırıyla) · kapı ayarı (montaj talimatı, alet) · dondurucu bölme (bu modelde yok) · DYNAMICAIR'ın soğutmama çözümü olarak önerilmesi (tabloda yok) · başka modellere genelleme.
# Alıntı denetim tablosu: electrolux-buzdolabi-sogutmuyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~15 dakika (bekleme süresi hariç)"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Buzdolabının kullanma kılavuzu", "Yumuşak bir bez"]
steps:
  - "Ekran kapalıysa fişin takılı olduğunu kontrol et ve ON/OFF tuşuna bas."
  - "Sıcaklık ayarına bak; Electrolux'un önerisi soğutucu için +4 °C."
  - "Kapıyı tamamen kapat ve kapı lastiklerini sil."
  - "Sıcak yiyecekleri oda sıcaklığına inmeden içeri koyma."
  - "Buzdolabına aynı anda çok fazla yiyecek koyma."
  - "Kapıyı yalnız gerektiğinde aç."
  - "Havalandırma ızgaralarını kapatma, sebze çekmecesinin üstündeki cam rafı çıkarma."
  - "Ayarı değiştirdikten sonra bekle, sıcaklık göstergesinde OK'yi kontrol et."
faq:
  - q: "Sıcaklığı değiştirdim ama hemen soğumadı, normal mi?"
    a: "Evet. Electrolux'un LRS4DF18S kılavuzuna göre ayarlanan sıcaklığa 24 saat içinde ulaşılır. Tablodaki bir satır da şunu söylüyor: FastCool'a bastıktan ya da sıcaklığı değiştirdikten sonra kompresörün hemen çalışmaya başlamaması normaldir, bir hata oluşmamıştır. Elektrik kesintisinden sonra ayarlanan sıcaklık kayıtlı kaldığı için hatırlanır."
  - q: "Sıcaklığı ayarlayamıyorum, tuşlar tepki vermiyor. Neden?"
    a: "Electrolux'un tablosunda bunun bir nedeni FastCool fonksiyonunun açık olması: FastCool'u elle kapat ya da sıcaklığı ayarlamak için fonksiyonun kendiliğinden devre dışı kalmasını bekle. Kılavuza göre FastCool yaklaşık 6 saat sonra otomatik olarak durur. Tuşları kilitleyen bir ChildLock fonksiyonu da var; açıksa göstergesi ekranda görünür."
  - q: "Kompresör hiç durmadan çalışıyor, soğutma yine yetersiz. Ne kontrol etmeliyim?"
    a: "Electrolux'un 'Kompresör sürekli çalışıyor' satırında altı neden var: sıcaklık yanlış ayarlanmış, cihaza aynı anda birçok gıda konmuş (birkaç saat bekleyip sıcaklığı tekrar kontrol et), oda sıcaklığı aşırı yüksek, içeri konan yiyecekler çok sıcak, kapı doğru kapatılmamış ya da FastCool açık. Kılavuza göre bu model 10 °C ile 38 °C arasındaki ortam sıcaklıklarında kullanılmak üzere tasarlanmış ve doğru çalışması yalnız bu aralıkta garanti edilebiliyor."
  - q: "Ekranda dEMo yazıyor, ne demek?"
    a: "Electrolux'un tablosuna göre cihaz demo modundadır. Demo modundan çıkmak için OK tuşunu yaklaşık 10 saniye, uzun bir ses duyana kadar basılı tut; gösterge ekranı kısa bir süre içinde kapanır."
images:
  coverAlt: "Kapağı açık bir buzdolabının içinde rafa yerleştirilmiş kapaklı saklama kapları, kapı iç kenarındaki lastik contayı yumuşak bir bezle silen el"
---

Buzdolabı çalışıyor, ışığı yanıyor ama içerisi yeterince soğuk değil. Electrolux'un LRS4DF18S soğutucu kılavuzundaki sorun giderme tablosunda bu belirtinin karşılığı **"Cihazın içindeki sıcaklık çok az/çok fazla."** satırı. Electrolux bu satırda yedi neden sayıyor ve hepsinin çözümü kullanıcının elinde: sıcaklık ayarı, kapı, sıcak ya da çok miktarda yiyecek, kapıyı sık açmak, FastCool ve hava dolaşımı. Bu rehberde Electrolux'un listesini bir de "cihaz hiç çalışmıyor" satırıyla birlikte sırayla açıyoruz. Kaynak, dondurucu bölmesi olmayan tek bir soğutucu modelinin kılavuzu; tuş ve fonksiyon adları modele göre değişebilir.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Ekran kapalıysa fiş ve ON/OFF → sıcaklık ayarı (+4 °C önerilen) → kapı ve kapı lastikleri → sıcak yiyecek koyma → bir seferde çok yiyecek koyma → kapıyı az aç → havalandırma ızgaraları ve cam raf → 24 saat bekle, göstergede OK'ye bak. Gösterge sayı yerine simge gösteriyorsa Electrolux'un yönlendirmesi Yetkili Servis.

## Adım adım: evde denenecekler

**1. Cihaz açık mı, fiş takılı mı?** Electrolux'un "Cihaz çalışmıyor" satırında üç neden var: **cihaz kapatılmıştır** (çözüm: cihazı çalıştır), **elektrik fişi prize bağlı değildir** (fişi prize doğru şekilde tak) ve **prizde voltaj yoktur.** Kılavuza göre gösterge ekranı kapalıysa cihazın **ON/OFF** tuşuna bas. Prizde elektrik olup olmadığını o prize başka bir elektrikli cihaz takarak kontrol et; Electrolux bu durumda kalifiye bir elektrik teknisyenine başvurmanı söylüyor.

**2. Sıcaklık ayarına bak.** Tablodaki ilk neden: **sıcaklık doğru şekilde ayarlanmamıştır;** çözüm, daha yüksek ya da daha düşük bir sıcaklığa ayarlamak. Electrolux'un önerdiği ayar soğutucu için **+4 °C;** ayar aralığı **2 °C ile 8 °C** arasında. Sıcaklığı panelin sıcaklık artırma ve azaltma tuşlarıyla değiştirebilirsin. Kılavuzun ipuçları bölümüne göre taze yiyecekleri korumak için uygun ayar **+4 °C'ye eşit ya da daha düşük** bir sıcaklık.

**3. Kapıyı tam kapat, lastikleri sil.** Tablodaki neden: **kapı doğru şekilde kapatılmamıştır.** Electrolux'un "Kapının kapatılması" bölümündeki ilk adım **kapı lastiklerini temizlemek;** bakım bölümü de contaların temiz kalması için düzenli olarak kontrol edilip silinerek temizlenmesini istiyor. Kılavuz iç temizlik için ılık su ve biraz beyaz sabun öneriyor. Aynı bölüme göre kapı yerine oturmuyorsa kapı ayarı montaj talimatlarına göre yapılır, lastikler hasarlıysa yenisiyle değiştirilir; bu iki iş için Yetkili Servis'e başvur.

**4. Sıcak yiyecek koyma.** Tablodaki neden: **gıda ürünlerinin sıcaklığı çok yüksektir.** Electrolux'un çözümü, gıdaları saklamadan önce **oda sıcaklığına düşmesi için bekletmek.**

**5. Bir seferde çok yiyecek koyma.** Tablodaki neden: **cihaza aynı anda birçok gıda ürünü depolanmıştır.** Çözüm tek cümle: **buzdolabına aynı anda çok fazla gıda ürünü koyma.** Büyük bir market alışverişinden sonra Electrolux, yiyecekleri daha hızlı soğutmak ve içerideki diğer yiyeceklerin ısınmasını önlemek için **FastCool** fonksiyonunu açmayı öneriyor; bu fonksiyon yaklaşık 6 saat sonra kendiliğinden durur.

**6. Kapıyı yalnız gerektiğinde aç.** Tablodaki neden: **kapı sık sık açılmıştır.** Electrolux'un çözümü: **kapıyı sadece gerekli olduğunda aç.** İpuçları bölümü de kapıyı sık sık açmamanı ya da gerektiğinden uzun süre açık bırakmamanı istiyor.

**7. Hava dolaşımını açık tut.** Tablodaki son neden: **cihazda soğuk hava dolaşımı yapılamıyor.** Electrolux seni "İpuçları ve öneriler" bölümüne yönlendiriyor; oradaki madde: **havalandırmanın yeterli olduğundan emin ol, havalandırma ızgaralarını ya da deliklerini kapatma.** Kılavuz ayrıca doğru hava devir daimi için **sebze çekmecesinin üzerindeki cam rafı çıkarmamanı** söylüyor.

**8. Bekle ve göstergeye bak.** Electrolux'a göre ayarlanan sıcaklığa **24 saat içinde** ulaşılır. Buzdolabının yan duvarındaki **sıcaklık göstergesi** en soğuk alanı gösteriyor: göstergede **OK** görünüyorsa taze yiyecekleri o alana koy; görünmüyorsa **en az 12 saat bekleyip** yeniden kontrol et. Hâlâ OK görünmüyorsa Electrolux'un önerisi ayarı **daha soğuk** bir noktaya getirmek.

## Kurulum yerini de kontrol et

Electrolux'un montaj bölümüne göre bu cihaz **10 °C ile 38 °C** arasındaki ortam sıcaklıklarında kullanılmak üzere tasarlanmış ve doğru çalışması yalnız bu aralıkta garanti edilebiliyor. Kılavuz cihazın **doğrudan güneş ışığı alan** bir yere ya da **radyatör, ocak ve fırınların** yakınına kurulmamasını ve cihazın arkasındaki hava akışının yeterli olmasını istiyor. Kurulum yeri konusunda şüphen varsa Electrolux satıcıya, müşteri hizmetlerine ya da en yakın Yetkili Servis Merkezi'ne başvurmanı öneriyor.

Markadan bağımsız anlatım için [buzdolabı soğutmuyor: nedenleri](/blog/buzdolabi-sogutmuyor-nedenleri/) yazısına, conta kontrolü için [buzdolabı kapı contası bakımı](/blog/buzdolabi-kapi-contasi-bakimi/) sayfasına, doğru ayar için [buzdolabı kaç derece olmalı](/blog/buzdolabi-kac-derece-olmali/) yazısına bakabilirsin.

## Ne zaman servis

Electrolux'un tablosu şu durumlarda doğrudan Yetkili Servis Merkezi'ni gösteriyor:

- **Sıcaklık göstergesinde sayılar yerine bir simge görünüyorsa:** Electrolux'a göre sıcaklık sensöründe sorun vardır. Kılavuza göre soğutma sistemi yiyecekleri soğuk tutmayı sürdürür ama sıcaklığı ayarlamak mümkün olmaz.
- **Kapı lastikleri hasarlıysa** değişim için.
- **Prizde voltaj yoksa** kalifiye bir elektrik teknisyenine başvur.

Bunların dışında, yukarıdaki adımları uyguladığın hâlde sonuç alamazsan Electrolux'un kılavuzu açık: **en yakın Yetkili Servis Merkezi'ni ara.** Ararken bilgi etiketindeki **Model, PNC ve Seri Numarası** bilgilerini hazır tut.

⛔ **Kendin-çöz sınırı burada biter.** Ayar, kapı, conta temizliği, yerleştirme ve hava dolaşımı kullanıcıya; soğutma sistemi, sensör ve conta değişimi uzmana aittir.

## Servisi aramadan önce kısa özet

1. Ekran yanıyor mu, sıcaklık ayarı kaç derece?
2. Sıcaklık göstergesinde sayı mı, simge mi görünüyor?
3. Yakın zamanda çok miktarda ya da sıcak yiyecek kondu mu?
4. Kapı tam kapanıyor mu, kapı lastikleri sağlam mı?
5. Cihazın bulunduğu yer güneş alıyor mu, ısı kaynağına yakın mı?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

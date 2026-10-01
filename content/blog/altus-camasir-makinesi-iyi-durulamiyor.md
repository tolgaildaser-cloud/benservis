---
title: "Altus çamaşır makinesi iyi durulamıyor"
description: "Altus çamaşır makinesi iyi durulamıyorsa Altus kılavuzundaki dört sebep: deterjan, yanlış göz, pompa filtresi ve tahliye hortumu. Sırayla kontrol."
slug: "altus-camasir-makinesi-iyi-durulamiyor"
date: "2026-10-01"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-01 PAZ alt ajanı (sprint #144, Altus/Regal belirti koşusu). Tek belge:
#  (A) AL CM 81050 kullanma kılavuzu (kapak: "2820532737/ TR/ / 9.01.2025")
#      https://www.altus.com.tr/content/dam/altus-rainbow-tr-aem/altus-rainbow-tr-aemProductCatalog/product-documents/457100031500-AL-CM-81050/tr-TR-457100031500-MDM2-USER-MANUAL-FILE-tr-TR.pdf
#      44 s.  md5 a62b93e9d38a9cdd63b1bcc8c749b41e  · yerel: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-altus-regal-sprint/altus-cm-81050.pdf
# ⚠️ İNDİRME YÖNTEMİ: curl -sL -A "Mozilla/5.0" Akamai'den HTTP 403 aldı. Belge aynı resmî alan adından Chrome içinde fetch ile indirildi
#    (HTTP 200, application/pdf); md5 yerel dosyadan. Kaynak üreticinin kendi alan adı; yöntem curl değil.
# #88: web araması kullanılmadı. Okuma pdftotext -layout, sayfa = PDF sayfası (basılı "TR / n" ile aynı).
# Sorun giderme "İyi durulamıyor." (A s.35-36): "Kullanılan deterjanın miktarı, markası veya saklama koşulları uygun değildir. >>> Çamaşır makinesine ve çamaşırlarınıza
#   uygun bir deterjan kullanın. Deterjanları nemsiz bir ortamda, kapalı olarak saklayın ve aşırı sıcağa maruz bırakmayın." · "Deterjan yanlış göze konmuş olabilir.
#   >>> Ön Yıkama seçilmediği halde ön yıkama gözüne deterjan konursa, ürün bu deterjanı durulama ya da yumuşatıcı adımında alabilir. Deterjanı doğru göze koyun."
#   · "Pompa filtresi tıkalı olabilir. >>> Filtreyi kontrol edin." · "Tahliye hortumu kıvrılmış olabilir. >>> Tahliye hortumunu kontrol edin."
# Diğer: deterjan dozu A s.17 ("Aşırı köpük ve iyi durulamama sorunlarını engellemek ... dozaj değerlerini aşmayın") · ön yıkama gözü A s.16 · tahliye hortumu
#   A s.14 (40-100 cm; önce yere yakın yerleştirilip sonra yükseltilmesi tahliyeyi zorlaştırır, çamaşırlar aşırı ıslak çıkabilir) · pompa filtresi 7.5 A s.32-33
#   (fişi çek; su 90 °C'ye kadar; soğuyunca; kapak; kap+bez; saat yönünün tersine gevşet; çıkar; kalıntı/lif; tak; kapak) · fişi çek A s.9 ·
#   "Durulama sayısı ve / veya durulama suyu miktarı artmış olabilir" A s.34 · son uyarı A s.37.
# FİŞ KURALI: deterjan/göz/hortum kontrolleri makine kapalıyken de yapılabilir; pompa filtresinden önce "fişi çek, suyun soğumasını bekle" adımı var.
# YAKIN KOPYA: Altus metni Arçelik/Beko/Grundig ile aynı aileden. Yayında ve bugünkü taslak klasöründe hiçbir markada "iyi durulamıyor" sayfası YOK
#   (ls-tree 1 Eki f6bc46b + rehber-taslaklari/ 07:1x). Pompa filtresi yordamı yayındaki arcelik-camasir-makinesi-su-bosaltmiyor ile aynı metinden;
#   bu yüzden filtre iki adımda kısa tutuldu, sayfanın ağırlığı deterjan ve göz satırlarında.
# BİLEREK YAZILMAYANLAR: İlave Durulama önerisi (yardımcı fonksiyon modele göre var; "iyi durulamıyor" satırında çözüm olarak geçmiyor) · su sertliği/
#   yumuşatıcı dozu önerisi (satırda yok) · pompa/valf teşhisi · filtre kapağını aletle açma (bu kılavuzda alet yok; yine de "elle açamıyorsan servis") · fiyat (#46).
# Alıntı denetim tablosu: altus-camasir-makinesi-iyi-durulamiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~30 dakika"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Geniş bir kap", "Bez"]
steps:
  - "Çamaşır makinesine ve çamaşırına uygun bir deterjan kullan."
  - "Deterjanı paketteki tavsiye edilen dozajı aşmadan koy."
  - "Ön yıkama seçmediysen ön yıkama gözüne deterjan koyma."
  - "Deterjanı nemsiz bir ortamda, kapalı olarak ve aşırı sıcaktan uzak sakla."
  - "Tahliye hortumunun kıvrılmadığını ve 40-100 cm yükseklikte olduğunu kontrol et."
  - "Pompa filtresine geçmeden önce fişi çek ve makinedeki suyun soğumasını bekle."
  - "Filtre kapağını aç, önüne geniş bir kap koy ve pompa filtresini saat yönünün tersine çevirerek suyu al, sonra filtreyi çıkar."
  - "Filtredeki kalıntıları ve lifleri temizle, filtreyi yerine tak ve kapağı kapat."
faq:
  - q: "Altus çamaşır makinem neden iyi durulamıyor?"
    a: "Altus AL CM 81050 kılavuzunun sorun giderme tablosu 'İyi durulamıyor' satırında dört sebep sayıyor: kullanılan deterjanın miktarı, markası ya da saklama koşullarının uygun olmaması; deterjanın yanlış göze konması; pompa filtresinin tıkalı olması ve tahliye hortumunun kıvrılmış olması."
  - q: "Yanlış göze deterjan koymak durulamayı neden bozar?"
    a: "Altus'un açıklaması: ön yıkama seçilmediği hâlde ön yıkama gözüne deterjan konursa makine bu deterjanı durulama ya da yumuşatıcı adımında alabilir. Kılavuza göre ön yıkamasız programda 1 numaralı göze deterjan konmaz; ana yıkama gözü 2 numaralı göz."
  - q: "Çok deterjan koymak durulamayı etkiler mi?"
    a: "Altus'un deterjan bölümüne göre evet: aşırı köpük ve iyi durulamama sorunlarını engellemek için deterjan paketinin üzerindeki tavsiye edilen dozaj değerlerini aşmaman gerekiyor. Az miktarda ya da az kirli çamaşır için kılavuz daha az deterjan öneriyor."
  - q: "Makine kendiliğinden fazladan durulama yapıyor, normal mi?"
    a: "Altus kılavuzuna göre normal. Yıkama süresinin uzamasıyla ilgili satırda makinenin daha iyi durulama yapması gerektiğinde durulama suyu miktarını artırdığı ve gerekirse bir durulama adımı daha eklediği yazıyor."
images:
  coverAlt: "Ön yüklemeli bir çamaşır makinesinin açık deterjan çekmecesinde numaralı gözler ve yanında ağzı kapalı bir deterjan kutusu"
---

Çamaşır makineden çıktı ama üzerinde deterjan izi ya da kayganlık kalmış. Altus'un çamaşır makinesi kılavuzu bu durumu sorun giderme tablosunda **"İyi durulamıyor."** satırıyla veriyor ve dört sebep sayıyor: **kullanılan deterjanın miktarı, markası veya saklama koşulları uygun değildir**, **deterjan yanlış göze konmuş olabilir**, **pompa filtresi tıkalı olabilir** ve **tahliye hortumu kıvrılmış olabilir.** İlk ikisi deterjanla, son ikisi suyun makineden çıkışıyla ilgili. Bu yazıda önce deterjanı, sonra suyun yolunu kontrol ediyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Uygun deterjanı paketteki dozu aşmadan kullan, ön yıkamasız programda ön yıkama gözünü boş bırak, deterjanı kuru ve kapalı sakla. Sonra tahliye hortumunun kıvrık olmadığına ve 40-100 cm yükseklikte durduğuna bak, en son fişi çekip pompa filtresini temizle.

## Adım adım: evde denenecekler

**1. Deterjanın uygun olduğundan emin ol.** Altus'un ilk sebebi deterjanın **miktarı, markası veya saklama koşulları.** Çözümün ilk yarısı: **çamaşır makinesine ve çamaşırlarına uygun bir deterjan** kullan. Kılavuzun deterjan bölümüne göre renkli ve beyaz çamaşır için **ayrı deterjan**, hassas çamaşır ve yünlüler için **özel deterjan** kullanılıyor.

**2. Dozu aşma.** Altus'un deterjan bölümündeki cümle doğrudan bu belirtiyi anıyor: **aşırı köpük ve iyi durulamama sorunlarını engellemek** için deterjan paketinin üzerindeki **tavsiye edilen dozaj değerlerini aşma.** Kılavuza göre deterjan miktarı **çamaşır miktarına, kirlilik derecesine ve suyun sertliğine** bağlı; **az miktarda ya da az kirli** çamaşırda daha az deterjan kullanılır.

**3. Ön yıkama gözünü boş bırak.** İkinci sebep: **deterjan yanlış göze konmuş olabilir.** Altus'un açıklaması bu sayfanın en önemli satırı: **ön yıkama seçilmediği hâlde ön yıkama gözüne deterjan konursa, ürün bu deterjanı durulama ya da yumuşatıcı adımında alabilir.** Kılavuza göre ön yıkamasız program kullanıyorsan **1 numaralı göze** deterjan koyma; ana yıkama gözü **2 numaralı göz.**

**4. Deterjanı kuru sakla.** İlk sebebin ikinci yarısı saklama. Altus'un çözümü: deterjanları **nemsiz bir ortamda, kapalı olarak** sakla ve **aşırı sıcağa maruz bırakma.**

**5. Tahliye hortumunu kontrol et.** Dördüncü sebep: **tahliye hortumu kıvrılmış olabilir.** Çözüm: **tahliye hortumunu kontrol edin.** Altus'un kurulum bölümüne göre su tahliye hortumu **en az 40, en çok 100 cm** yüksekliğe takılır. Kılavuz, hortumun önce zemin seviyesinde ya da yere yakın (40 cm altında) yerleştirilip sonra yükseltilmesinin **su tahliyesini zorlaştırdığını** ve çamaşırların makineden **aşırı ıslak** çıkabileceğini de yazıyor.

**6. Fişi çek, suyun soğumasını bekle.** Üçüncü sebep: **pompa filtresi tıkalı olabilir.** Çözüm: **filtreyi kontrol edin.** Filtreye dokunmadan önce Altus'un sırası: **ürünün fişini çekerek elektriği kes.** Kılavuzun uyarısına göre makinenin içindeki suyun sıcaklığı **90 ºC'ye kadar** çıkabilir; filtre temizliğini **içerideki su soğuduktan sonra** yap.

**7. Filtreyi gevşet, suyu al, çıkar.** Altus'a göre **filtre kapağını aç**, filtreden akacak su için önüne **geniş bir kap** yerleştir ve yanında **bir bez** bulundur. Pompa filtresini **su akmaya başlayıncaya kadar saat yönünün tersine** çevirerek gevşet; su bitince filtreyi **çevirerek tamamen çıkar.** Kapağı elle açamıyorsan zorlama, aşağıdaki "Sınır nerede biter" bölümüne bak.

**8. Temizle, tak, kapat.** Altus'un son adımları: **filtre içindeki kalıntıları** ve varsa **pervane bölgesindeki lifleri** temizle, **filtreyi yerine tak.** Filtre kapağı **iki parçalıysa tırnağın bulunduğu yerden bastırarak**, **tek parçaysa** önce alt taraftaki tırnakları yerine oturtup sonra üst tarafını bastırarak kapat. Kılavuz filtrenin **her tıkandığında ya da 3 ayda bir** temizlenmesini istiyor.

## Durulama ile karışan iki durum

Altus'un tablosunda durulamaya yakın görünen iki satır daha var. **Çamaşırlar yıkandıktan sonra sertleştiyse** kılavuz, su sertliğine uygun miktarda deterjan kullanılmamasını, deterjanın yanlış göze konmasını ve deterjanla yumuşatıcının karışmasını sayıyor; karışma için çözüm **yumuşatıcıyı deterjanla karıştırmamak** ve **çekmeceyi sıcak suyla yıkayıp temizlemek.** **Yıkama uzun sürüyorsa** bu bir arıza olmayabilir: Altus'a göre makine daha iyi durulama yapması gerektiğinde **durulama suyu miktarını artırır** ve gerekirse **bir durulama adımı daha ekler.**

Markadan bağımsız anlatım için [çamaşır makinesi çamaşırlarda leke bırakıyor](/blog/camasir-makinesi-camasirlarda-leke-birakiyor/) ve [çamaşır makinesi tahliye filtresi temizleme](/blog/camasir-makinesi-tahliye-filtresi-temizleme/) yazılarına bakabilirsin.

## Sınır nerede biter

Deterjan, göz, hortum ve pompa filtresi kullanıcıya aittir. Altus'un sorun giderme bölümünün sonundaki uyarı açık: bu bölümdeki talimatları uygulamana rağmen sorunu gideremezsen **ürünü satın aldığın bayiye ya da Yetkili Servise** başvur; **çalışmayan ürünü kendin onarmayı asla deneme.** Filtre kapağını elle açamıyorsan da yetkili servise bırak.

⛔ **Kendin-çöz sınırı burada biter.** Doğru deterjan doğru gözde, hortum düz ve filtre temiz olduğu hâlde çamaşırlar hâlâ iyi durulanmıyorsa yetkili servise başvur.

## Servisi aramadan önce iki dakikalık özet

1. Hangi deterjanı, ne kadar kullanıyorsun?
2. Deterjanı hangi göze koyuyorsun, ön yıkama seçili mi?
3. Tahliye hortumu nereye bağlı, yaklaşık kaç santim yükseklikte?
4. Pompa filtresinden ne çıktı?
5. Çamaşırda kalan şey köpük mü, beyaz iz mi, kayganlık mı?

Bu beşine cevabın varsa servise "iyi durulamıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

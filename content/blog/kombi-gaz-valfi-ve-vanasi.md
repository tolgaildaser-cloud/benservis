---
title: "Kombi gaz valfi ve gaz vanası: arıza belirtileri, hata kodları ve değişim"
description: "Kombi gaz vanası nerede, nasıl açılır? Gaz valfi arızası hangi kodla görünür, kim değiştirir? Baymak, DemirDöküm ve ECA kılavuzları ne diyor?"
slug: "kombi-gaz-valfi-ve-vanasi"
date: "2026-10-15"
category: "Kombi"
parca:
  cihaz: "kombi-termosifon"
  tur: "valf-vana-musluk"
# --- Provenans (yayında görünmez) ---
# 2026-10-15 PAZ (#164 C-3, #165 C şablonu). Kanıt: seo/2026-10-09-KAPSAM-ANALIZI.md §11.5 s.693 üretim sırası #3 "Kombi / Termosifon | valf/vana/musluk | 9 | 10 | kombi gaz valfi; kombi vanası" (+ §11.2 s.593). Otomatik tamamlama (15 Eki 07:01, hl=tr): "kombi gaz valfi" (+ "… arızası nasıl anlaşılır", "… tamiri", "… ayarı nasıl yapılır", "… tamir edilir mi", "… bobini"); "kombi gaz vanası" (+ "… nasıl açık olur", "… hangi yöne açılır", "… nerede", "… nasıl kapatılır"); "kombi vanası" (+ "… ne tarafa açılır", "… açık kapalı"); "kombi gaz valfi arızası" marka türevleri (eca, baymak, demirdöküm…). Ham çıktı: kaynak-kombi-valf-15eki/OTOMATIK-TAMAMLAMA-2026-10-15.txt
# #88 kaynaklar (yerel blog-taslaklar/kaynak-kombi-valf-15eki/, MD5-2026-10-15.txt; dosyalar 14 Eki indirmesinin birebir kopyası; sayfa = PDF sayfası):
#   Baymak Duotec 24-28-33-42-45 Montaj & Kullanma Kılavuzu 300032122 Rev.2 https://www.baymak.com.tr/media/2904/300032122-kullanma-kilavuzu-baymak-duotec-24-28-33-42-45_r2.pdf md5 723546ecd63c99eaecb5c3143c687c2a — s.4, s.5, s.13, s.14, s.16, s.17, s.19, s.21
#   DemirDöküm Nitromix Kullanma Kılavuzu 0020309468_01 https://www.demirdokum.com.tr/downloads/nitromix-kk-0020309468-01-2557203.pdf md5 3340a11b923b7332f8eb8685297970b6 — s.4, s.9, s.10, s.14, s.15
#   DemirDöküm Nitromix Montaj ve Bakım Kılavuzu 0020309469_02 (yetkili servise yönelik) https://www.demirdokum.com.tr/downloads/products-1/nitromix-mk-0020309469-02-2557204.pdf md5 bdff16276288ebddd6c6cbf82d47c864 — s.3, s.7, s.11, s.20, s.23, s.24, s.31, s.32
#   ECA Confeo Premix Kullanma Kılavuzu https://eca.com.tr/uploads/documents//aaa/edb/dfd/add/59663772-1e7b-4a8e-95d4-9874b5138500.pdf md5 4ef56163ac14c46f9cb1dcb9ea189681 — s.5, s.8, s.10, s.26, s.27, s.28, s.42
# BİLEREK YAZILMAYANLAR: gaz valfi ayarı / gaz basıncı ölçümü / ofset ayarı (sorgu "ayarı nasıl yapılır", "ayar cihazı" — DemirDöküm bunu servis kılavuzunda tarif ediyor, ECA servis dışı ayarı garanti dışı sayıyor; #31) · valf temizliği, tamiri, bobin değişimi (sorgu var, kılavuzlar kullanıcıya tarif etmiyor) · gaz kesme vanasının "hangi yöne açıldığı" (kılavuzlarda yön yok; DemirDöküm vananın konumu ve kullanımını montajı yapan servisten öğrenmeyi istiyor) · "kombi vanasından su akıtıyor" (su vanası; ayrı konu) · LPG dönüşümü · Bosch, Vaillant, Ariston (bu turda belgeleri sayfa sayfa açılmadı; marka adı yazıda yok) · fiyat/TL, satın al ve pazaryeri bağlantısı (#46) · `urun:` alanı (bilerek boş; katalogda kombi gaz valfi yok, valf/vana ürünleri su doldurma musluğu).
# Alıntı denetim tablosu: kombi-gaz-valfi-ve-vanasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu", "Not defteri ya da telefon"]
steps:
  - "Kombi ekranındaki hata kodunu, kombinin markasını ve modelini not et; kodun anlamına kendi kılavuzunun hata kodları tablosundan bak."
  - "Ortamda gaz kokusu olmadığından emin ol; koku varsa hiçbir düğmeye dokunmadan kapı ve pencereleri aç, gazı kapat ve 187'yi ara."
  - "Kombiye giden gaz kesme vanasının açık olup olmadığına bak; yerini bilmiyorsan montajı yapan servise sor."
  - "Evdeki diğer gazlı cihazın, örneğin ocağın, yanıp yanmadığına bak; tesisatta gaz var mı, böyle anlarsın."
  - "Kılavuzun izin verdiği kadar reset tuşuna bas; DemirDöküm'de en çok üç deneme."
  - "Kod geri geliyorsa kombiyi kapalı tut ve yetkili servisi ara; kodu, modeli ve gördüğün belirtiyi hazır tut."
faq:
  - q: "Kombi gaz valfi ile gaz vanası aynı şey mi?"
    a: "Hayır. Gaz vanası (gaz kesme vanası) kombiye gelen gaz hattının üstündeki, açıp kapattığın vanadır. Gaz valfi ise kombinin içindeki, brülöre giden gazı açıp kesen parçadır; ECA parça listesinde 'Gaz Valfi', DemirDöküm 'gaz armatürü' diye geçer. Vanayı sen açıp kapatırsın, valfe yalnız yetkili servis dokunur."
  - q: "Kombi gaz vanası açık mı olmalı?"
    a: "Kombi çalışacaksa evet. Baymak çalıştırma adımlarında gaz vanasını açmayı yazıyor. Donma korumasının çalışması için de Baymak, ECA ve DemirDöküm gaz vanasının açık kalmasını istiyor. DemirDöküm'e göre tatilde, don beklenmiyorsa gaz kesme vanası kapatılabilir; don bekleniyorsa açık bırakılmalı."
  - q: "Kombi gaz valfi arızası nasıl anlaşılır?"
    a: "Ekrandaki koddan. ECA Confeo Premix'te E44 'gaz valfinde arıza', Baymak Duotec'te E09 'gaz valfi geri besleme hatası'dır. DemirDöküm Nitromix'in servis tablosunda F.61 ve F.62 gaz emniyet ventili arızasıdır, F.28 'ateşleme başarısız' kodunun olası nedenleri arasında da gaz armatürü sayılıyor. Kesin teşhisi servis koyar."
  - q: "Kombi gaz valfi tamir edilir mi, değiştirilir mi?"
    a: "Bu kararı yetkili servis verir. DemirDöküm gaz armatürünün sökülüp değiştirilmesini yalnız servise yönelik montaj ve bakım kılavuzunda anlatıyor; tamir, sökme ve bakım işlerinin yalnız yetkili servislerce yapılmasını istiyor. ECA, yetkili servis dışında gaz valfi üzerinde yapılan ayar, bakım ve onarımdan doğan hasarları garanti dışı sayıyor."
  - q: "Kombi gaz valfi ayarını kendim yapabilir miyim?"
    a: "Hayır. Gaz giriş basıncı kontrolü ve gaz armatürü ayarı DemirDöküm'ün servis kılavuzunda, yetkili servisin işi olarak geçiyor. ECA, servis dışında gaz valfi üzerinde yapılan ayar değişikliklerinden doğan arızaları garanti kapsamına almıyor."
  - q: "Gaz kokusu alırsam ne yapmalıyım?"
    a: "ECA'nın kılavuzuna göre cihazın ve gazla çalışan diğer cihazların vanalarını kapat, kibrit ya da çakmak yakma, elektrik düğmelerine ve fişlere dokunma, kapı ve pencereleri aç, gaz kokusu olan ortamda telefon kullanma; 187'yi ara ve yetkili servise bildir. DemirDöküm binadaki diğer kişileri uyarmayı ve binayı hemen terk etmeyi de yazıyor."
images:
  coverAlt: "Duvara asılı kombinin altında, sarı kollu gaz kesme vanası olan gaz borusu, sade çizim"
  steps:
    - "Kombi ekranındaki kod, yanında açık kullanma kılavuzu, not defteri ve kalem"
    - "Gaz kokusu simgesi, açılmış pencere ve kapı, üzerinde çarpı işareti olan ışık düğmesi"
    - "Kombinin altındaki gaz borusunda sarı kollu gaz kesme vanasına yakın plan, kol boru yönünde"
    - "Ocak üstünde vurgulanmış bir göz ve yanında onay işareti"
    - "Kombi kontrol panelinde reset tuşuna yakın plan, tuş üstünde ok işareti, el yok"
    - "Kapalı kombi, telefon, model etiketi ve not defteri: servisi aramaya hazır bilgiler"
---

Kombin ateşlemiyor, ekranda bir kod var ve aklına ilk "gaz geliyor mu?" sorusu geliyor. Burada iki ayrı parça var: kombiye gelen hattın üstündeki **gaz kesme vanası** ve kombinin içindeki **gaz valfi**. Vanayı açıp kapatmak senin işin; valfin kontrolü, ayarı ve değişimi **yetkili servis işi**.

Bu yazıdaki bilgiler üreticilerin kendi belgelerinden: **Baymak** (Duotec yoğuşmalı kombi), **DemirDöküm** (Nitromix kullanma ile montaj ve bakım kılavuzları) ve **ECA** (Confeo Premix yoğuşmalı kombi). Kendi kombinin kesin kod listesi kendi kılavuzunda yazar. Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** **Gaz vanası** kombiye gelen gazı açar ya da keser; kombi çalışacaksa açık olmalı. **Gaz valfi** kombinin içinde, brülöre giden gazı açıp kesen parça. Valf arızası ekranda kodla görünür: ECA'da **E44**, Baymak'ta **E09**, DemirDöküm'de **F.61 / F.62**. Valfi sökmek, ayarlamak, değiştirmek **yalnız yetkili servisin işi**. Gaz kokusu alırsan hiçbir düğmeye dokunma, gazı kapat, havalandır, **187**'yi ara.

## Vana mı, valf mi?

| | Gaz kesme vanası | Gaz valfi (gaz armatürü) |
|---|---|---|
| Nerede? | Kombiye gelen gaz hattında, kombinin dışında | Kombinin içinde |
| Ne iş yapar? | Kombiye giden gazı açar ya da keser | Kombinin içinde brülöre giden gazı açar, keser |
| Kim kullanır? | Sen | Yalnız yetkili servis |

ECA Confeo Premix'in parça listesinde "Gaz Valfi" ayrı bir parça olarak geçiyor; DemirDöküm aynı parçaya "gaz armatürü" diyor, Baymak'ın bağlantı şemasında "DC gaz valfi" yazıyor. DemirDöküm'ün servis kılavuzu ayrıca montaj sırasında gaz hattına bir gaz kesme vanası takılmasını istiyor.

## Hangi belirtiler gaz valfini ya da vanayı işaret eder?

Kılavuzlarda gaz tarafındaki sorunlar ekranda **hata koduyla** görünüyor. En sık iki tablo: kombi hiç ateşlemiyor ya da doğrudan valf kodu veriyor.

| Kombi | Ateşleme kodu | Gaz valfi kodu | Kılavuz ne diyor? |
|---|---|---|---|
| ECA Confeo Premix | E01 ateşleme arızası (kombiye doğalgaz bağlantısı yok) | E44 gaz valfinde arıza | E01'de önce gaz vanası ve tesisatta gaz; ikisinde de reset, sürerse yetkili servis |
| DemirDöküm Nitromix | F.28 ateşleme başarısız | F.61 ve F.62 gaz emniyet ventili arızası (servis tablosu) | F.28'de gaz kesme vanasını kontrol, en çok üç reset, sonra yetkili bayi |
| Baymak Duotec | E01 başarısız ateşleme | E09 gaz valfi geri besleme hatası | RESET (K1), sorun sürerse yetkili servis |

DemirDöküm'ün servis tablosu F.28'in olası nedenlerini sayarken **kapalı gaz kesme vanasını** da, **arızalı gaz armatürünü** de yazıyor. Yani aynı kod basit bir kapalı vanadan da, parça arızasından da gelebilir; önce senin kontrol edebileceğin kısmı ele. Marka bazlı ayrıntı: [ECA E01 hatası](/blog/eca-kombi-e01-hatasi/) · [DemirDöküm F28 hatası](/blog/demirdokum-kombi-f28-hatasi/) · [Baymak E01 hatası](/blog/baymak-kombi-e01-hatasi/).

## Gaz vanası açık mı olmalı?

**Kombi çalışacaksa evet.** Baymak çalıştırma adımlarında önce enerjiyi, sonra gaz vanasını açmayı yazıyor; kapatırken de ana gücü kesip gaz vanasını kapatmayı. Donma korumasının çalışması için Baymak, ECA ve DemirDöküm gaz vanasının açık kalmasını istiyor.

**Tatilde.** DemirDöküm'e göre uzun süre evde olmayacaksan ve don beklenmiyorsa gaz kesme vanasını kapatabilirsin; don bekleniyorsa açık bırak.

**Vana nerede?** DemirDöküm, kapatma vanalarının konumunu ve kullanımını ürünün montajını yapan yetkili servisten öğrenmeni istiyor. Montaj sırasında sor, yerini not al.

## Değişim ve ayar: yalnız yetkili servis

Gaz valfi doğrudan gaz güvenliğiyle ilgili. Kılavuzlar açık:

- **DemirDöküm:** montaj, sökme, kurulum, devreye alma, kontrol ve bakım, tamir **yalnız yetkili servislerin** işi. Gaz armatürünün sökülüp değiştirilmesi yalnız servise yönelik montaj ve bakım kılavuzunda anlatılıyor; F.61 ve F.62'nin tedbiri o tabloda "gaz armatürünü değiştirin".
- **ECA:** yetkili servis dışında **kombi ve gaz valfi** üzerinde yapılan ayar değişiklikleri, bakım ve onarımdan doğan hasar ve arızalar garanti kapsamı dışında.
- **Baymak:** kombi üzerinde çalışırken ana güç kaynağı kesilmeli ve ana gaz musluğu kapatılmalı; montaj ve bakım yetkili kişinin işi. LPG'nin uygun şartlarda kullanılmaması sonucu oluşan hasarlar, örneğin gaz valfine likit yürümesi, garanti dışı.

## Senin yapabileceklerin: adım adım

**1. Kodu not et.** Ekrandaki kodu, kombinin markasını ve modelini yaz.

**2. Önce koku.** Gaz kokusu varsa aşağıdaki son adıma geç; reset ya da başka bir deneme yapma.

**3. Gaz vanasına bak.** ECA, E01'de gaz vanasının açık olduğundan emin olmanı istiyor. DemirDöküm de "ürün çalışmıyor" durumunda dışarıdaki ve üründeki **iki gaz kesme vanasını** açmayı yazıyor.

**4. Tesisatta gaz var mı?** ECA, E01'de tesisatta gaz olup olmadığını kontrol etmeni istiyor. Evdeki ocak yanıyorsa hatta gaz geliyor demektir.

**5. Reset.** ECA E01 ve E44'te reset düğmesine basmanı, hata sürerse yetkili servise bildirmeni istiyor. DemirDöküm F.28'de reset tuşuna 1 saniye bas; en çok üç deneme, gitmiyorsa yetkili bayi. Baymak'ta RESET (K1), sorun sürerse servis.

**6. Gaz kokusunda.** ECA: cihazın ve gazla çalışan diğer cihazların vanalarını kapat, ocak gibi cihazların alevini söndür, kibrit ya da çakmak yakma, elektrik düğmelerine ve fişlere dokunma, kapı ve pencereleri aç, daire ve bina girişindeki gaz vanalarını kapat, gaz kokusu olan ortamda telefon kullanma, **187**'yi ara ve yetkili servise bildir. DemirDöküm'ün servis kılavuzu binadaki diğer kişileri uyarmayı ve binayı hemen terk etmeyi de yazıyor.

## Ne zaman servis?

| Durum | Ne yapılır |
|---|---|
| Gaz valfi kodu (E44, E09, F.61, F.62) reset sonrası geri geliyor | Yetkili servis |
| Gaz vanası açık, ocak yanıyor ama kombi ateşlemiyor | Yetkili servis |
| Gaz valfi ayarı, gaz basıncı kontrolü | Yetkili servis |
| Gaz kokusu | Gazı kapat, havalandır, 187, yetkili servis |

## Gaz valfi nereden alınır?

Üreticiler **orijinal parça** istiyor. DemirDöküm'e göre orijinal parçalar üretici tarafından sertifikalandırılmış; sertifikasız parçayla ürün uyumluluğunu ve standartlara uygunluğunu kaybeder. ECA, orijinal ECA yedek parçaları dışında parça kullanılmasından doğan hasarları garanti dışı sayıyor. Parçayı yetkili servis seçer ve takar.

Cihazını ve ekrandaki kodu benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Önce öğren, sonra çağır.

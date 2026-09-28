---
title: "LG buzdolabı Er dH hatası"
description: "LG buzdolabı Er dH, F dH, r dH hatası: LG'ye göre buz çözme arızası. Tıkalı drenaj deliği için fişi çekip buzu eritme ve servis sınırı adım adım."
slug: "lg-buzdolabi-er-dh-hatasi"
date: "2026-09-28"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200. Kaynak LG Türkiye'nin kendi yardım kütüphanesi (lg.com/tr).
# Metin, sayfaların gömülü "support-help-article-schema" JSON-LD'sindeki articleBody alanından çıkarıldı (ext.py). Tek sayfalık HTML makaleler; PDF değil.
# HTML her istekte değişen dinamik parçalar taşıyor → HTML md5'i indirme başına farklı; tekrar üretilebilir kanıt çıkarılan metnin md5'i.
# Web araması YALNIZ sayfaların YERİNİ bulmak için kullanıldı (allowed_domains lg.com); hiçbir cümle arama sonucundan, forumdan ya da servis sitesinden alınmadı.
#  L1) "[LG buzdolabı hata kodları] Ekranda [Er(E), DH veya H] yazan bir metin belirir." (datePublished 2025-09-26)
#      https://www.lg.com/tr/destek/product-support/troubleshoot/help-library/cs-CT52000193-20153392527392/
#      1 sayfa (HTML) · html md5 a27d0f3747455faf9ff2f8e730e6b6ab · metin md5 367181a5a8f20a900610b1bd4687e13c  (ana kaynak)
#  L2) "[LG buzdolabı] hata kodları Ekranda [F(r) dH] yazan bir metin belirir." (datePublished 2025-09-26)
#      https://www.lg.com/tr/destek/product-support/troubleshoot/help-library/cs-CT52000193-20153392542604/
#      1 sayfa (HTML) · html md5 c101f40f4a45015b8a215ea0c7672373 · metin md5 cb320a96b12989ae5501e4f8289a6e3e
# Birebir alıntılar:
#   L1: "LED lamba ekranında görünen bir [Er(E), DH veya H], ürün incelemesi gerektiren bir buz çözme (buzlanma, buz giderme) arızası hata kodudur."
#   L1: "Buz birikmesi, drenaj deliğinin tıkanması, sıcaklık sigortasının ayrılması, ısıtıcı bağlantısının kesilmesi veya ana PCB arızasından kaynaklanan bir buz çözme arızasıdır.
#        Bu hata, buz çözme (buz giderme) başladıktan sonra belirli bir süre geçmesine rağmen dondurucunun normal sıcaklığı algılanmazsa görüntülenir."
#   L1: "Dondurucudaki drenaj deliği buzla tıkanmışsa ve buzdan gelen su (don) tahliye tepsisine akmıyorsa, dondurucu/buzdolabı bölmesinin normal sıcaklığı algılanmayacaktır, bu nedenle bu hata görüntülenebilir.
#        ➔ Böyle bir durumda ürünün güç kablosunu prizden çekin, dondurucu/buzdolabı bölmesi kapağını sonuna kadar açın ve yazın bir gün, kışın üç gün buzun (don) erimesini bekleyin."
#   L1: "1. Yedek bir buzdolabınız varsa, yiyeceklerinizi içine taşıyın.2. Ürünün elektrik fişini çekin.3. Dondurucu/soğutma bölmesi kapısı ardına kadar açıkken, buz yazın bir günde, kışın üç günde erir.
#        4. Buz tamamen eridiğinde, su normalde drenaj tepsisinden akacaktır."
#   L1: "※ Aynı belirti ve aynı inceleme kodu tekrarlanırsa, doğru bir teşhis için bir LG servis teknisyeni tarafından kontrol edilmesi gerekir."
#   L1: "Sorun devam ederse, daha fazla sorun giderme desteği için lütfen LG Electronics Çağrı Merkezi 444 6 543 ile iletişime geçin"
#   L2: "F dH veya r dH (buz çözme ile ilgili) hatası ... bir dondurucu buz çözme veya buzdolabı buz çözme arızasıdır." + L1 ile aynı 4 adım.
# BİLEREK YAZILMAYANLAR: hub'daki "80 dakikada 5 °C artış" ölçütü (bu koşuda LG TR belgesinde bulunamadı) · "kışın birkaç gün" (LG TR: üç gün) ·
#   drenaj deliğini tel/şişle açma, sıcak su dökme (belgede yok) · sıcaklık sigortası/ısıtıcı/PCB müdahalesi (#31) · süre/fiyat/parça (#46).
# Alıntı denetim tablosu: lg-buzdolabi-er-dh-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Yedek buzdolabı ya da soğutucu çanta (varsa)"]
steps:
  - "Ekrandaki kodu tam olarak not et: Er dH, F dH, r dH ya da H."
  - "Yedek bir buzdolabın varsa yiyeceklerini oraya taşı."
  - "Buzdolabının fişini prizden çek."
  - "Dondurucu ve soğutucu bölmenin kapılarını ardına kadar aç."
  - "Buzun erimesi için yazın bir gün, kışın üç gün bekle."
  - "Buz tamamen eriyince buzdolabını yeniden çalıştır ve kodu izle."
  - "Aynı kod tekrarlarsa LG servisine kontrol ettir ya da LG Çağrı Merkezi 444 6 543'ü ara."
faq:
  - q: "LG buzdolabında Er dH hatası ne demek?"
    a: "LG Türkiye'nin yardım sayfasına göre ekranda Er dH (bazı modellerde E dH ya da H) görünmesi, ürün incelemesi gerektiren bir buz çözme arızası hata kodudur. Kod, buz çözme başladıktan sonra belirli bir süre geçmesine rağmen dondurucunun normal sıcaklığı algılanmadığında görüntülenir."
  - q: "F dH ile r dH arasındaki fark ne?"
    a: "LG'nin ayrı yardım sayfası F dH ve r dH kodlarını birlikte açıklıyor: ikisi de buz çözme ile ilgilidir ve bir dondurucu buz çözme ya da buzdolabı buz çözme arızasını gösterir. LG'nin bu kodlar için verdiği kullanıcı adımları Er dH ile aynıdır: fişi çek, kapıları ardına kadar aç, buzun erimesini bekle."
  - q: "Bu kod neden çıkar?"
    a: "LG beş olası sebep sayıyor: buz birikmesi, drenaj deliğinin tıkanması, sıcaklık sigortasının ayrılması, ısıtıcı bağlantısının kesilmesi ya da ana kart arızası. Bunlardan kullanıcının evde ele alabileceği tek durum, drenaj deliğinin buzla tıkanmasıdır; LG bunun için fişi çekip buzu kendiliğinden eritmeyi öneriyor."
  - q: "Buzun erimesi ne kadar sürer?"
    a: "LG'nin verdiği süre: dondurucu ya da soğutma bölmesi kapısı ardına kadar açıkken buz yazın bir günde, kışın üç günde erir. Buz tamamen eridiğinde su normalde drenaj tepsisine akar."
  - q: "Buz eridi ama kod yine geldi, ne yapmalıyım?"
    a: "LG'nin talimatına göre aynı belirti ve aynı kod tekrarlanırsa doğru teşhis için buzdolabının bir LG servis teknisyeni tarafından kontrol edilmesi gerekir. Sorun devam ederse LG Electronics Çağrı Merkezi 444 6 543'ten destek alabilirsin."
images:
  coverAlt: "Fişi çekilmiş, dondurucu ve soğutucu kapıları ardına kadar açık bir buzdolabı; dondurucunun arka duvarındaki buz tabakası erimeye başlamış"
---

Buzdolabının ekranında **Er dH** yazıyor; bazı modellerde bu **E dH**, **H**, **F dH** ya da **r dH** olarak görünür. LG Türkiye'nin yardım sayfasındaki tanım şu: **"ürün incelemesi gerektiren bir buz çözme (buzlanma, buz giderme) arızası hata kodu."** LG bu kodun beş olası sebebini sayıyor ve bunlardan birine, **buzla tıkanmış drenaj deliğine**, kullanıcının evde uygulayabileceği bir yol veriyor. Bu yazıda o yolu LG'nin kendi sırasıyla anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Er dH = LG'ye göre buz çözme arızası. Sebep buzla tıkanmış drenaj deliği olabilir. Sıra şu: yiyecekleri taşı → fişi çek → kapıları ardına kadar aç → yazın bir gün, kışın üç gün bekle → yeniden çalıştır. Aynı kod yine gelirse → LG servisi ya da 444 6 543.

## Adım adım: evde denenecekler

**1. Kodu tam olarak not et.** LG'nin sayfalarına göre **Er dH**, **E dH** ve **H** bir buz çözme arızasını; **F dH** ve **r dH** de dondurucu ya da buzdolabı bölmesindeki bir buz çözme arızasını gösterir. Servisle konuşurken kodu ekranda gördüğün gibi söylemek işini kolaylaştırır.

**2. Yiyeceklerini güvene al.** LG'nin buz çözme sırasındaki ilk madde bu: **yedek bir buzdolabın varsa** yiyeceklerini içine taşı. Yiyeceklerin durumu seni endişelendiriyorsa LG, beklemek yerine servis talebinde bulunup ürünü bir teknisyene kontrol ettirmeyi öneriyor.

**3. Fişi çek.** Ürünün elektrik fişini prizden çek.

**4. Kapıları ardına kadar aç.** Dondurucu ve soğutucu bölmenin kapılarını **sonuna kadar** aç ve öyle bırak.

**5. Buza zaman tanı.** LG'ye göre kapılar ardına kadar açıkken buz **yazın bir günde, kışın üç günde** erir. Buz tamamen eridiğinde su normalde **drenaj tepsisine** akar.

**6. Yeniden çalıştır ve izle.** Buz tamamen eridikten sonra buzdolabını yeniden çalıştır ve ekranı izle.

**7. Kod geri gelirse dur.** LG'nin kuralı: **aynı belirti ve aynı kod tekrarlanırsa** doğru teşhis için bir LG servis teknisyeninin kontrolü gerekir. Sorun devam ederse LG Electronics Çağrı Merkezi **444 6 543** ile görüşebilirsin.

## Er dH tam olarak neyi söylüyor?

LG'nin tanımına göre **Er dH**, bu buz çözme başladıktan sonra **belirli bir süre geçmesine rağmen dondurucunun normal sıcaklığı algılanmazsa** görüntülenir.

LG'nin saydığı olası sebepler:

- buz birikmesi,
- drenaj deliğinin tıkanması,
- sıcaklık sigortasının ayrılması,
- ısıtıcı bağlantısının kesilmesi,
- ana kart arızası.

Bu listede kullanıcıya bırakılan tek durum drenaj deliğidir. LG'nin açıklaması şöyle: dondurucudaki drenaj deliği buzla tıkanmışsa ve buzdan gelen su tahliye tepsisine akmıyorsa, bölmenin normal sıcaklığı algılanmaz ve bu hata görüntülenebilir. Yukarıdaki adımlar tam olarak bu durum içindir. Diğer sebepler için LG kullanıcıya adım vermiyor; kodun tanımındaki gibi ürün incelemesi istiyor.

## Ekranda F dH ya da r dH yazıyorsa

LG'nin ayrı bir yardım sayfası **F dH** ve **r dH** kodlarını birlikte açıklıyor: bunlar bir **dondurucu buz çözme** ya da **buzdolabı buz çözme** arızasıdır. Sebep listesi ve kullanıcı adımları Er dH ile aynıdır: tıkanmış drenaj deliği için fişi çek, dondurucu/buzdolabı bölmesi kapağını sonuna kadar aç, yazın bir gün, kışın üç gün buzun erimesini bekle.

Buzlanmanın genel sebepleri ve kapı alışkanlıkları için [buzdolabı buzlanma yapıyor](/blog/buzdolabi-buzlanma-yapiyor/) yazısına, LG buzdolabının diğer kodları için [LG buzdolabı hata kodları](/blog/lg-buzdolabi-hata-kodlari/) yazısına bakabilirsin. Fan kodu için ayrı rehberimiz: [LG buzdolabı Er FF hatası](/blog/lg-buzdolabi-er-ff-hatasi/).

## Sınır nerede biter

LG'nin sayfası kullanıcıya fişi çekip kapıları açık bırakarak buzu eritmeyi bırakıyor. Drenaj deliğini sivri bir aletle açmak ya da buzu sıcak suyla eritmek LG'nin önerdiği adımlar arasında yoktur.

⛔ **Kendin-çöz sınırı burada biter.** Sıcaklık sigortası, ısıtıcı bağlantısı ve ana kart LG'nin kendi listesinde **ürün incelemesi** gerektiren sebeplerdir. Kural basit: **fiş, kapı ve bekleme sana; buz çözme parçaları LG servisine aittir.**

## Servisi aramadan önce kısa not

1. Ekrandaki kod tam olarak ne: Er dH, F dH, r dH ya da H?
2. Fişi çekili, kapılar açık bekleme yapıldı mı, kaç gün sürdü?
3. Buz eridikten sonra kod ne kadar sürede geri geldi?
4. Buzdolabının model numarası ne?

Bu dört satır servise somut bir tablo anlatır ve doğru teşhisi hızlandırır.

Ekrandaki kodu ve buzdolabının modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

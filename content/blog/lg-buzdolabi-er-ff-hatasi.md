---
title: "LG buzdolabı Er FF hatası"
description: "LG buzdolabı Er FF hatası: LG'ye göre dondurucu fan motoru normal çalışmıyor. Enerji sıfırlama, fan çevresindeki buzu çözdürme ve servis sınırı."
slug: "lg-buzdolabi-er-ff-hatasi"
date: "2026-09-28"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile indirildi, HTTP 200. Kaynak LG Türkiye'nin kendi yardım kütüphanesi (lg.com/tr).
# Metin, sayfanın gömülü "support-help-article-schema" JSON-LD'sindeki articleBody alanından çıkarıldı (ext.py). Tek sayfalık HTML makale; PDF değil.
# Sayfa HTML'i her istekte değişen dinamik parçalar taşıyor → HTML md5'i indirme başına farklı çıkıyor. Tekrar üretilebilir kanıt: çıkarılan metnin md5'i
#   (bu koşuda iki ayrı indirmede aynı çıktı: 3cf4f728bf59c10104678708824afbdc).
# Web araması YALNIZ sayfanın YERİNİ bulmak için kullanıldı (allowed_domains lg.com); hiçbir cümle arama sonucundan, forumdan ya da servis sitesinden alınmadı.
#  L1) "[LG buzdolabı hata kodları] Ekranda [ER(E), FF veya rF] yazan bir metin belirir." (datePublished 2025-09-26)
#      https://www.lg.com/tr/destek/product-support/troubleshoot/help-library/cs-CT52000193-20153392536506/
#      1 sayfa (HTML) · html md5 ea2246077e177b4518d4ce48b4c389e6 · metin md5 3cf4f728bf59c10104678708824afbdc
# Birebir alıntılar (L1):
#   "LED lamba ekran penceresinde [ER(E) FF/rF] görünüyorsa, dondurucu/buzdolabı bölmesi fan motorundaki bir anormallik için bir hata kodudur ve ürün incelemesi gereklidir."
#   "ER(E) FF hatası ➔ Bu hata, dondurucu fan motoru normal çalışmadığında ortaya çıkar. Gücü sıfırlamak için ürünün güç kablosunu çıkarın veya özel devre kesiciyi açın ve yaklaşık 5 dakika sonra yeniden kullanın."
#   "➔ Veya fan motorunun etrafındaki buzlanma (don) nedeniyle fan motoru kilitlendiğinde de oluşabilir. Böyle bir durumda ürünün güç kablosunu prizden çekin, dondurucu/buzdolabı bölmesi kapağını ardına kadar açın ve fan motorunun etrafındaki buzu (don) eritmek için yazın bir gün, kışın üç gün bekleyin."
#   "İçeride saklanan yiyeceklerle ilgili endişeleriniz varsa, servis talebinde bulunarak ürünü bir servis teknisyenine kontrol ettirmeniz önerilir."
#   "※ Aynı belirti ve aynı inceleme kodu tekrarlanırsa, doğru bir teşhis için bir LG servis teknisyeni tarafından kontrol edilmesi gerekir."
#   "ER(E) rF hatası ➔ Bu hata, buzdolabı bölmesi fan motoru normal çalışmadığında ortaya çıkar." + aynı 5 dakikalık sıfırlama + aynı ※ cümlesi.
# BİLEREK YAZILMAYANLAR: kapağın altına havlu serme, buzu sıcak su/saç kurutma makinesiyle hızlandırma (belgede yok) ·
#   Er rF için buz çözdürme (LG'nin rF metni yalnız enerji sıfırlama veriyor) · "fan bozuk / defrost bozuk" kesin teşhisi (LG "olabilir" diyor) ·
#   fan kapağını sökme (#31) · süre/fiyat/parça (#46).
# Alıntı denetim tablosu: lg-buzdolabi-er-ff-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Buzdolabının fişini çek ya da buzdolabının bağlı olduğu sigortayı kapat."
  - "Yaklaşık 5 dakika bekle, sonra enerjiyi geri ver ve buzdolabını yeniden kullan."
  - "Er FF yeniden görünürse buzdolabının fişini tekrar çek."
  - "Dondurucu ve soğutucu bölmenin kapaklarını ardına kadar aç."
  - "Fan motorunun çevresindeki buzun erimesi için yazın bir gün, kışın üç gün bekle."
  - "Buz eriyince buzdolabını yeniden çalıştır; aynı kod tekrarlarsa LG servisine kontrol ettir."
faq:
  - q: "LG buzdolabında Er FF hatası ne demek?"
    a: "LG Türkiye'nin yardım sayfasına göre Er FF, dondurucu fan motoru normal çalışmadığında görünen bir hata kodudur. LG aynı sayfada bu kodun, fan motorunun çevresinde biriken buz fanı kilitlediğinde de çıkabileceğini yazıyor."
  - q: "Er FF ile Er rF arasındaki fark ne?"
    a: "İkisi de fan motoruyla ilgilidir ama farklı bölmeleri gösterir. LG'ye göre Er FF dondurucu fan motoru, Er rF ise buzdolabı bölmesi fan motoru normal çalışmadığında görünür. LG, Er rF için yalnız enerji sıfırlamayı veriyor: fişi çekip ya da sigortayı kapatıp yaklaşık 5 dakika sonra yeniden kullanmak. Kod tekrarlarsa LG servis teknisyeninin kontrolünü öneriyor."
  - q: "Buzun çözülmesi için kapıları neden bu kadar uzun açık bırakmam gerekiyor?"
    a: "LG, fan motoru buzla kilitlendiğinde buzdolabının fişini çekip dondurucu ve buzdolabı bölmesi kapaklarını ardına kadar açmayı ve fan motorunun etrafındaki buzun erimesi için yazın bir gün, kışın üç gün beklemeyi öneriyor. Buz kendiliğinden erimeden fan serbest kalmaz."
  - q: "Bu sürede yiyeceklerim ne olacak?"
    a: "LG'nin yardım sayfası bu noktada açık bir seçenek veriyor: içeride saklanan yiyeceklerle ilgili endişen varsa beklemek yerine servis talebinde bulunup ürünü bir servis teknisyenine kontrol ettirmen öneriliyor."
  - q: "Buz çözüldü ama Er FF yine çıktı, ne yapmalıyım?"
    a: "LG'nin talimatı net: aynı belirti ve aynı kod tekrarlanırsa doğru teşhis için buzdolabının bir LG servis teknisyeni tarafından kontrol edilmesi gerekir. Sayfa bu noktadan sonra kullanıcıya başka adım vermiyor."
images:
  coverAlt: "Mutfakta kapakları ardına kadar açık bırakılmış, fişi çekili no-frost bir buzdolabı; dondurucu bölmenin arka duvarında ince bir buz tabakası görünüyor"
---

Buzdolabının ekranında sıcaklık yerine **Er FF** yazıyor. LG Türkiye'nin yardım sayfasında bu kodun karşılığı kısa: **"Bu hata, dondurucu fan motoru normal çalışmadığında ortaya çıkar."** Aynı sayfa ikinci bir ihtimali de yazıyor: kod, **fan motorunun etrafındaki buzlanma nedeniyle fan kilitlendiğinde** de görünebilir. İyi haber şu ki LG, bu ikinci ihtimal için kullanıcıya evde yapabileceği bir yol veriyor. Bu yazıda o yolu, LG'nin kendi sırasıyla adım adım anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Er FF = LG'ye göre dondurucu fan motoru normal çalışmıyor; sebep fanın çevresindeki buz da olabilir. Sıra şu: fişi çek → yaklaşık 5 dakika bekle → yeniden çalıştır. Kod geri gelirse fişi çek → kapakları ardına kadar aç → yazın bir gün, kışın üç gün bekle. Aynı kod yine gelirse → LG servisi.

## Adım adım: evde denenecekler

**1. Enerjiyi kes.** Buzdolabının fişini çek ya da buzdolabının bağlı olduğu sigortayı kapat. LG'nin Er FF için verdiği ilk adım bir enerji sıfırlamasıdır.

**2. Yaklaşık 5 dakika bekle.** LG'nin ifadesiyle ürünü **yaklaşık 5 dakika sonra** yeniden kullan. Enerjiyi geri ver ve ekranı izle.

**3. Kod geri geldiyse fişi yeniden çek.** Er FF tekrar görünüyorsa LG'nin ikinci ihtimali devreye girer: fan motoru çevresindeki buz yüzünden kilitlenmiş olabilir. Bu durumda LG, ürünün güç kablosunu prizden çekmeni istiyor.

**4. Kapakları ardına kadar aç.** Dondurucu ve buzdolabı bölmesinin kapaklarını **ardına kadar** aç.

**5. Buza zaman tanı.** LG'nin verdiği süre: fan motorunun etrafındaki buzun erimesi için **yazın bir gün, kışın üç gün** bekle. Bu süre boyunca yiyeceklerin durumu seni endişelendiriyorsa LG'nin önerisi, beklemek yerine servis talebinde bulunup ürünü bir teknisyene kontrol ettirmek.

**6. Yeniden çalıştır ve izle.** Buz eridikten sonra buzdolabını yeniden çalıştır. LG'nin kuralı açık: **aynı belirti ve aynı kod tekrarlanırsa** doğru teşhis için bir LG servis teknisyeninin kontrolü gerekir.

## Er FF tam olarak neyi söylüyor?

LG'nin yardım sayfasındaki genel tanım, ekranda **Er FF ya da Er rF** görünüyorsa bunun dondurucu ya da buzdolabı bölmesi fan motorundaki bir anormallik için bir hata kodu olduğu ve **ürün incelemesi gerektirdiğidir**. Aynı sayfa Er FF için iki ayrı durum sayıyor:

- **Fan motoru normal çalışmıyor.** LG'nin ilk önerisi enerji sıfırlaması: fişi çek ya da sigortayı kapat, yaklaşık 5 dakika sonra yeniden kullan.
- **Fan motoru buzla kilitlenmiş.** Fanın çevresinde biriken buz fanı durdurmuşsa LG, fişin çekilip kapakların ardına kadar açılmasını ve buzun kendiliğinden erimesinin beklenmesini öneriyor.

Yukarıdaki adım sırası bu iki durumu LG'nin verdiği sırayla izler: önce enerji sıfırlaması, kod geri gelirse buz çözdürme, aynı kod yine gelirse LG servisi.

## Ekranda Er FF değil, Er rF yazıyorsa

LG aynı sayfada **Er rF** kodunu da açıklıyor: bu kod, **buzdolabı bölmesi fan motoru** normal çalışmadığında görünür. LG'nin Er rF için verdiği adım yalnız enerji sıfırlamasıdır: ürünün güç kablosunu çıkar ya da sigortayı kapat ve **yaklaşık 5 dakika sonra** yeniden kullan. Aynı kod tekrarlanırsa LG burada da servis teknisyeninin kontrolünü istiyor. LG'nin Er rF metninde buz çözdürme adımı geçmiyor; bu yüzden biz de o adımı rF için önermiyoruz.

LG buzdolabının diğer kodlarını ve kod dilinin genel mantığını [LG buzdolabı hata kodları](/blog/lg-buzdolabi-hata-kodlari/) yazısında bulabilirsin. Buzluğu soğuk ama alt bölmesi ılık kalan no-frost modellerin genel tablosu için [no-frost buzdolabında alt bölme soğutmuyor](/blog/no-frost-buzdolabi-alt-bolme-sogutmuyor/) yazısına bakabilirsin.

## Sınır nerede biter

LG'nin Er FF sayfası kullanıcıya iki şey bırakıyor: enerji sıfırlaması ve kapaklar açık, fişi çekili bekleme. Bunların ötesinde LG'nin cümlesi hep aynı: aynı belirti ve aynı kod tekrarlanırsa ürünün bir **LG servis teknisyeni** tarafından kontrol edilmesi gerekir.

⛔ **Kendin-çöz sınırı burada biter.** Buzu kazımak, sıcak su dökmek ya da bölmenin iç panelini sökmek LG'nin önerdiği adımlar arasında yoktur. Kural basit: **fiş, kapak ve bekleme sana; gerisi LG servisine aittir.**

## Servisi aramadan önce kısa not

1. Ekrandaki kod tam olarak ne: Er FF mi, Er rF mi?
2. Enerji sıfırlamasından sonra kod ne kadar sürede geri geldi?
3. Kapaklar açık, fişi çekili bekleme yapıldı mı, kaç gün sürdü?
4. Buzdolabının model numarası ne?

Bu dört satır servise "buzdolabı kod veriyor" yerine somut bir tablo anlatır.

Ekrandaki kodu ve buzdolabının modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

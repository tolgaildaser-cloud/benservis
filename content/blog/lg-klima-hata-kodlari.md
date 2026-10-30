---
title: "LG klima hata kodları: CH05 ve CH10 ne demek?"
description: "LG klimada CH05 iletişim, CH10 fan motoru hatasıdır. LG'nin destek sayfalarına göre ne yapılır, kodu LED'lerden nasıl okursun, ne zaman servis gerekir?"
slug: "lg-klima-hata-kodlari"
date: "2026-10-30"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (YK #197 boşluk yazıları, 2. dalga, P04 #88). origin/main'de "lg-klima-hata-kodlari" yok. Yakın (LG markalı belirti yazıları): lg-klima-calismiyor, lg-klima-sogutmuyor, lg-klima-isitmiyor, lg-klima-su-damlatiyor, lg-klima-koku-yapiyor.
# Arama kanıtı: BOSLUK.md #88 (WS; LG markalı 5 belirti yazısı var, hata kodu sayfası yok). Kodlar CH05, CH10.
# Belgeler (üretici LG'nin kendi destek yardım kütüphanesi; Türkçe sayfa bulunamadı, lg.com/us sayfaları curl'e 403 verdi, aynı içerik LG ae ve ar sitelerinden alındı). curl -sL -A "Mozilla/5.0":
#  (L1) LG ae "[LG Air-Conditioner Error Codes] Checking code CH05", Split Air Conditioners, 09/03/2025  https://www.lg.com/ae/support/product-help/CT32003026-20153181445731
#  (L2) LG ar "Cómo solucionar los códigos de error CH10, CH67, E6 y EF en tu aire acondicionado LG", 19/08/2026  https://www.lg.com/ar/soporte/ayuda-producto/CT32005513-20155396792982
# Sayfalar: web sayfaları (sayfa no yok); başlık adları KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: CH10 için "üfleme sensörü" ve "deşarj sıcaklığı 130" iddiaları (üçüncü taraf, belgede yok) · CH67/E6/EF ayrıntısı (aynı L2 sayfasında listeli, yalnız anıldı) · söküm ve parça değişimi.
# NOT: L2 sayfası CH10, CH67, E6, EF kodlarını "iç ya da dış ünite fan motoru" altında birlikte veriyor; hangisinin hangi fana ait olduğunu belge ayırmıyor, yazıda da ayrılmadı.
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Koruyucu eldiven", "Klimanın kullanma kılavuzu", "Kâğıt ve kalem"]
steps:
  - "Klimadaki kodu oku: iç ünitedeki ilk ışık kodun ilk hanesini, ikinci ışık ikinci hanesini gösterir."
  - "Kod CH05 ise iç ve dış ünite arasında iletişim hatası olduğunu bil."
  - "CH05 yeni kurulumdan hemen sonra geliyorsa kesici ya da fişten gücü resetle; kod sürerse servis çağır."
  - "CH05 çalışırken geliyorsa gücü kes, yaklaşık beş dakika bekle ve yeniden ver."
  - "Kod CH10 ise iç ya da dış ünite fan motoruyla ilgili olduğunu bil."
  - "Fanın önünde kar, yaprak gibi görünür bir engel varsa eldivenle dikkatle al."
  - "Gücü kesip yaklaşık beş dakika bekledikten sonra yeniden ver; kod sürerse klimayı kullanmayı bırak ve servisi ara."
faq:
  - q: "LG klimada CH05 hatası ne demek?"
    a: "LG'nin destek sayfasına göre CH05, inverterli klimada iç ünite ile dış ünite arasındaki anormal iletişimi algılayan bir koddur. Sebebi geçici olabilir: sayfa dengesiz elektrik ya da başka bir elektriksel nedenden söz ediyor ve gücü kesip yaklaşık beş dakika sonra vermeyi öneriyor. Aynı belirti sürerse servis kontrolü gerekir."
  - q: "LG klimada CH10 hatası ne demek?"
    a: "LG'nin yardım kütüphanesi CH10, CH67, E6 ve EF kodlarını birlikte veriyor ve bunların iç ya da dış ünite fan motorunda bir sorun anlamına geldiğini yazıyor. Neden fanı tıkayan kar ya da yaprak gibi kalıntılar olabileceği gibi fan motoru, kablolama ya da kontrol kartı arızası da olabilir."
  - q: "Kod sıfırlamadan sonra gittiyse klimayı kullanabilir miyim?"
    a: "LG, bu durumun genellikle geçici bir güç ya da iletişim sorununa işaret ettiğini, klima normal çalışıyorsa kullanmaya devam edilebileceğini yazıyor. Kod yeniden çıkarsa klimayı kullanmayı bırakıp LG servisine başvurmak gerekir; tekrarlayan hata iç devrelerde ya da kablolamada sorun olduğunu gösterebilir."
  - q: "Klimanın fan bölümünü açıp bakabilir miyim?"
    a: "Hayır. LG, klimayı sökmemeni ve iç parça değiştirmemeni açıkça uyarıyor; yangın, elektrik çarpması, ağır yaralanma ve ölüm riski belirtiyor. Yalnız dışarıdan erişebildiğin görünür kalıntıları eldivenle almak serbest."
images:
  coverAlt: "Duvara asılı beyaz split klima iç ünitesinin ön panelinde yanıp sönen iki küçük ışık"
  steps:
    - "Klima iç ünitesinin ön panelindeki iki ışığı sayarak okuyan beyaz eldivenli sade siluet el"
    - "İç ünite ile dış ünite arasında iletişim hattı çizimi, ortasında kesik işareti"
    - "Elektrik panosunda kesiciyi kapatıp açan beyaz eldivenli sade siluet el"
    - "Kum saati simgesi ve yanında gücü kesilmiş klima çizimi"
    - "Dış ünite fanının sade kesit çizimi, yanında dönen fan okları"
    - "Dış ünite fanının önündeki yaprakları dikkatle alan beyaz eldivenli sade siluet el"
    - "Fişi prizden çeken beyaz eldivenli sade siluet el, arkada servis telefonu simgesi"
---

LG klimanın iç ünitesinde ışıklar yanıp sönüyor ya da ekranda CH05, CH10 gibi bir kod var. Bu yazıda yalnız **LG'nin kendi destek sayfalarına** dayandık: CH05 için "Checking code CH05" sayfası, CH10 için "CH10, CH67, E6 ve EF" sorun giderme sayfası. Türkçe bir LG kodu sayfasına ulaşamadık; LG'nin bu sayfaları farklı ülke sitelerinde yayımlanıyor ve tüm modeller için hazırlandığını, görsellerin ve içeriğin senin üründen farklı olabileceğini belirtiyor. **Kendi klimanın kılavuzu esastır.**

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** CH05 iç ve dış ünite arasında iletişim hatası, CH10 fan motoru kodu. İkisinde de LG gücü kesip yaklaşık beş dakika sonra yeniden vermeyi, kod sürerse servise başvurmayı söylüyor.

## İki kod, iki sorun

| Kod | LG'nin açıklaması | Evde ilk adım |
|---|---|---|
| CH05 | İç ve dış ünite arasında anormal iletişim | Gücü resetle |
| CH10 | İç ya da dış ünite fan motoru sorunu | Görünür engeli al, gücü resetle |

## Adım adım: kodu okuyup sıfırlamak

**1. Kodu ışıklardan oku.** LG'nin CH05 sayfasına göre kod, iç ünitedeki ışıklarla da okunur: **ilk ışık kodun ilk hanesini, ikinci ışık ikinci hanesini** gösterir. Örnek olarak ilk ışığın düzenli aralıkla beş kez yanıp sönmesi CH5 hatasını anlatıyor. Sayarak oku ve not et.

**2. CH05: iletişim hatası.** LG, CH05'i inverterli klimada iç ve dış ünite arasındaki **anormal iletişimi** algılayan bir kod olarak tanımlıyor.

**3. Yeni kurulumdan hemen sonra geliyorsa.** Kod yeni alınan ya da başka yerden getirilip takılan klimada hemen çıkıyorsa LG gücü resetlemeni, belirti sürerse **servis teknisyenine kontrol ettirmeni** söylüyor. Bu durumda sorun kurulumla ilgili olabilir; kendin kablo ya da boru bağlantısına dokunma.

**4. Çalışırken geliyorsa gücü resetle.** Klima kurulduktan sonra çalışırken CH05 çıkıyorsa LG bunun dengesiz elektrik ya da başka bir elektriksel nedenden doğan **geçici bir hata** olabileceğini yazıyor. Fişi çek ya da kesiciyi kapat, **yaklaşık beş dakika bekle**, sonra yeniden aç. Belirti yine gelirse servise başvur. Klimanın hiç çalışmadığı durumlar için [LG klima çalışmıyor](/blog/lg-klima-calismiyor/) yazısına da bakabilirsin.

**5. CH10: fan motoru kodu.** LG'nin yardım kütüphanesi CH10, CH67, E6 ve EF kodlarının hepsini birlikte ele alıyor ve bunların **iç ya da dış ünitenin fan motoruyla** ilgili bir soruna işaret ettiğini yazıyor. Sayfa bu kodlar için hangisinin hangi fana ait olduğunu ayırmıyor. Kod görünürse klima durabilir, çünkü LG fan motoru, kablolama ya da kontrol kartı sorununda ünitenin çalışmayabileceğini söylüyor.

**6. Fanın önünü kontrol et.** LG, nedenin çoğu zaman kar ya da yaprak gibi fanı tıkayan **görünür kalıntılar** olduğunu yazıyor. Açıkta duran fanın çevresinde böyle bir şey görüyorsan koruyucu eldiven tak ve erişebildiğin kadarıyla dikkatle uzaklaştır. Kışın dış ünitenin üstünde kar birikmiş olabilir. Dış ünite buzlanıyorsa [klima dış ünite buzlanma](/blog/klima-dis-unite-buzlanma/) yazısına bak.

**7. Gücü resetle, olmadıysa bırak.** Klimayı fişten çek (fişe ulaşamıyorsan kesiciyi kapat), **yaklaşık beş dakika bekle**, yeniden aç ve kodun gidip gitmediğine bak. LG kod sürerse klimayı **kullanmayı bırakmanı** ve LG servisine başvurmanı söylüyor. Tekrar eden hata iç devrelerde ya da kablolamada sorun olduğunu gösterebilir.

## Sergi ürünü olabilir mi?

LG'nin CH05 sayfasında ilginç bir madde var: sergi ya da gösterim amacıyla kullanılan ürünlerde iç ve dış ünite birbirine bağlı olmadığı için klima iletişim hatası gösterebilir. Mağazada ya da ikinci elde bir klima aldıysan ve CH05 çalışmaya başlar başlamaz çıkıyorsa, ürünün nasıl kullanıldığını satıcıya sor. Sayfa bu tür ürünler için ayrıca bir gösterim modundan söz ediyor; mağaza bu modu ekran ve ışık gösterimi için kullanıyor.

Kodlar sorunun yerini göstermek içindir; çözümü değil. Bu yüzden önce LG'nin saydığı basit adımları dene, sonra servisi ara, ama ikisini de kodu not ederek yap.

## Kod yok ama klima yine de sorunluysa

Bazen ekranda kod görünmez ama klima soğutmaz, ısıtmaz ya da su damlatır. Bu belirtilere göre ayrı yazılarımız var: [LG klima soğutmuyor](/blog/lg-klima-sogutmuyor/), [LG klima ısıtmıyor](/blog/lg-klima-isitmiyor/) ve [LG klima su damlatıyor](/blog/lg-klima-su-damlatiyor/).

## Fan bölümünü açma

LG'nin sayfası açık: klimayı sökme, iç parça değiştirme. Bunu yapmak **yangın, elektrik çarpması, ağır yaralanma ve ölüm** riski taşıyor. Fan motoru, kablolama ve kontrol kartı servis işidir.

## Ne zaman servis

- CH05 ya da CH10 gücü resetledikten sonra yeniden geliyorsa
- CH05 yeni kurulumdan hemen sonra çıkıyorsa
- Kesici sürekli atıyorsa ya da fan hiç dönmüyorsa

⛔ Kodu okumak, görünür engeli almak ve gücü resetlemek senin; fan motoru, kablolama, kart ve gaz işleri yetkili servisin.

Cihazının belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.

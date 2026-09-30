---
title: "LG buzdolabı buz yapmıyor: evde kontrol"
description: "Buz yapıcılı LG buzdolabı buz yapmıyor mu? LG Türkiye'nin sırası: buz yapıcı açık mı, ilk buz süresi, su vanası, topaklanan buz, hazne ve kapılar."
slug: "lg-buzdolabi-buz-yapmiyor"
date: "2026-09-30"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, 29 Eyl'de kota nedeniyle bekletilen konu). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile yeniden indirildi, hepsi HTTP 200.
# Kaynak LG Türkiye'nin kendi yardım kütüphanesi (lg.com/tr). ABD LG kaynağı KULLANILMADI. Web araması yalnız sayfa yerini bulmak için (29 Eyl).
# Metin, sayfaların gömülü "support-help-article-schema" JSON-LD articleBody alanından çıkarıldı (kaynak-lg-buzdolabi-sprint/ext.py). HTML md5'i dinamik; tekrar üretilebilir kanıt metin md5'i.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-lg-buzdolabi-sprint/2026-09-30/
#  B1) "[LG Buzdolabı] Su/buz ile ilgili sorunları giderme" (2025-10-26)
#      https://www.lg.com/tr/destek/product-support/troubleshoot/help-library/cs-CT52000193-20153873375954/
#      html md5 34df83902c477388808eb635b8b46af1 (30 Eyl) · metin md5 e9e5fbebdb7034dfe32fe5421e2e70c3 (29 Eyl ile birebir)  (ana kaynak)
#  B2) "[LG Buzdolabı] Buz yapıcı nasıl temizlenir" (2024-11-26)
#      https://www.lg.com/tr/destek/product-support/troubleshoot/help-library/cs-CT52000193-20154160018367/
#      html md5 0ad53cf846a0f4f221e4fefb32968b5d (30 Eyl) · metin md5 72e988b5ea70f1aef53aa112b8aa40e8 (29 Eyl ile birebir)
# Birebir alıntılar:
#   B1: "Buz yapıcı kapatılırsa buz yapılmayacaktır. ➔ Bunu deneyin Buz yapıcıyı çalışması için AÇIN.'Kilitle' özelliği etkinleştirilirse, kilidi açmak için 'Kilitle' düğmesini 3 saniye basılı tutun."
#   B1: "İlk buz küplerinin yapılması 12 saat ile iki gün arasında sürer. … Buz haznesinin dolması iki ila üç gün sürer. ※ İlk üç ila dört gün sonra buz yapılmazsa, bir ürün incelemesi gereklidir. Lütfen müşteri hizmetleri ile iletişime geçin."
#   B1: "➔ Su kaynağını bağlayan lavabonun altındaki vananın açık olduğundan emin olun. Vana, bağlı boru ile aynı hizaya gelecek şekilde döndürülmelidir."
#   B1: "Buz haznesinin içindeki buz birbirine yapışırsa, hazneyi çıkarın ve buzu ayırmak için sallayın.Ayrılmayan buz kümeleri atılmalıdır. Buz haznesini temizleyin ve tamamen kuruduktan sonra kullanın."
#   B1: "Yaz aylarında buzdolabının sıcaklık ayarlarını düşürün ve kapıların iyi kapalı tutulduğundan emin olun."
#   B1 (Craft Ice): "LED göstergesi kapalıysa, özelliği açmak için Craft Ice düğmesine üç saniye uzun basın." / "Buz haznesinin sapı öne bakmalıdır. Buz haznesi yanlış yerleştirilirse buz üretilmeyebilir."
#   B1 (Yeni kurulum): "Güç kablosunu prize taktıktan sonra 1 ila 2 saat içinde soğuk hava üretilir." / "…ilk kurulum durumunda buzdolabının buz yapmaya başlaması iki gün kadar sürebilir."
#   B2: "Buz yapıcının içini temizlemek için yumuşak bir bez ve ılık su kullanın." / "※ Lütfen sert bir fırça veya keskin bir kazıyıcı kullanarak temizlemeyin, çünkü bu tür aletler plastik bileşenlere zarar verebilir."
#   B2: Fransız kapılı: "Buz haznesinin altındaki kolu kaldırarak buz haznesini ayırın." · Yan yana: "Buz haznesini çıkarmak için iki elinizle sıkıca tutun, yukarı doğru kaldırın ve ardından dışarı doğru çekin."
# BİLEREK YAZILMAYANLAR: buz yapıcı tepsisinin/kapı kutusunun sökülmesi (B2 "sökülmesi" bölümü; söküm sayıldı) · su filtresi değişimi (parça) · düşük su basıncı / takviye pompası (tesisat işi) ·
#   dahili su deposu doldurma (buz yapmama satırında değil) · su/buz kokusu (ayrı konu) · genel "buzdolabi-buz-yapmiyor" içeriği (markasız; link verildi) · fiyat.
# NOT: Bu sayfa yalnız buz yapıcılı LG modeller içindir; LG metni "tüm modeller için" hazırlanmıştır.
# Alıntı denetim tablosu: lg-buzdolabi-buz-yapmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (ilk buz bekleme süresi hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Yumuşak bez", "Ilık su", "Kuru havlu"]
steps:
  - "Buz yapıcının açık olduğunu kontrol et; kapalıysa kontrol panelinin kilidini açıp Buz Açma/Kapama düğmesiyle aç."
  - "Buzdolabı yeni kurulduysa ilk buz için 12 saat ile iki gün arası bekle."
  - "Buzdolabı su şebekesine bağlıysa lavabonun altındaki su vanasının açık ve boruyla aynı hizada olduğunu kontrol et."
  - "Buz haznesindeki buzlar topaklandıysa hazneyi çıkar, sallayarak ayır ve ayrılmayan kümeleri at."
  - "Hazneyi yumuşak bir bez ve ılık suyla temizle, kuru bir havluyla tamamen kurula ve yerine tak."
  - "Kapıların iyi kapandığından emin ol; yaz aylarında buzdolabının sıcaklık ayarını düşür."
faq:
  - q: "Yeni LG buzdolabım neden hâlâ buz yapmıyor?"
    a: "LG'ye göre buzdolabı fişe takıldıktan sonra 1-2 saat içinde soğuk hava üretir, önce içeriği soğutur. İlk buz küplerinin yapılması 12 saat ile iki gün arası sürer, haznenin dolması iki-üç gün sürer. LG'nin sınırı: ilk üç-dört gün sonunda hâlâ buz yapılmıyorsa ürünün incelenmesi gerekir, müşteri hizmetleriyle iletişime geç."
  - q: "Buz yapıcı düğmesine basıyorum ama tepki yok, neden?"
    a: "'Kilitle' özelliği etkin olabilir. LG'ye göre kilidi açmak için 'Kilitle' düğmesini 3 saniye basılı tut; kontrol panelinin kilidi açıldıktan sonra Buz Açma/Kapama düğmesine basılabilir."
  - q: "Hazne içindeki buzlar neden birbirine yapışıyor?"
    a: "LG'ye göre hazne içindeki buz uzun süre kullanılmazsa buz süblimleşir ve küpler arasındaki su birbirine yapışır. Buz kutusunun dondurucu dışında bırakılması ya da kapının açık kalması da topaklanmaya yol açabilir. Çözüm: hazneyi çıkar, buzu sallayarak ayır, ayrılmayan kümeleri at, hazneyi temizleyip tamamen kurut."
  - q: "Buz yapıcıyı uzun süre kullanmayacağım, ne yapmalıyım?"
    a: "LG'nin önerisi: haznedeki buzu boşalt, kontrol panelinin kilidini aç ve Buz Açma/Kapama düğmesine üç saniye basılı tutarak buz yapıcıyı kapat. Yeniden buz kullanacaksan buz yapıcıyı kullanmadan bir-iki gün önce aç."
images:
  coverAlt: "Dondurucu kapısı açık bir buzdolabında boş buz haznesini iki elle tutan biri, rafta birkaç buz küpü duruyor"
---

Buz yapıcılı LG buzdolabın buz yapmıyor. LG Türkiye'nin "**Su/buz ile ilgili sorunları giderme**" sayfası bu belirti için kısa bir kontrol listesi veriyor ve ilk sorusu şu: "**Buz yapıcı kapalı mı?**" LG'ye göre buz yapıcı kapatılırsa buz yapılmaz. Listenin geri kalanı da çoğunlukla evde kontrol edilebilecek şeyler: yeni kurulumda bekleme süresi, su vanası, haznede topaklanan buz ve kapılar. Bu yazı yalnız **buz yapıcılı** LG modeller için; LG'nin sırasını adım adım veriyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Buz yapıcı açık mı (kilit varsa 3 saniye) → yeni kurulumsa 12 saat ile iki gün bekle → su vanası açık mı → topaklanan buzu salla, ayrılmayanı at → hazneyi temizle, kurut, tak → kapılar iyi kapalı mı, yazın sıcaklığı düşür. Üç-dört gün sonra hâlâ buz yoksa müşteri hizmetleri.

## Adım adım: evde denenecekler

**1. Buz yapıcı açık mı?** LG'ye göre buz yapıcı kapalıysa buz yapılmaz. Buz yapıcıyı **AÇ.** Kontrol panelinde **'Kilitle'** özelliği etkinse önce kilidi açmak için 'Kilitle' düğmesini **3 saniye basılı tut**; kilit açıldıktan sonra **Buz Açma/Kapama** düğmesiyle buz yapıcıyı açabilirsin.

**2. Yeni kurulumsa bekle.** LG'ye göre buzdolabı fişe takıldıktan sonra **1-2 saat** içinde soğuk hava üretir ve önce içindekileri soğutur; sıcaklık yeterince düştüğünde buz yapmaya başlar. İlk buz küplerinin yapılması **12 saat ile iki gün** arası sürer; süre dondurucudaki yiyeceklerin sıcaklığına bağlıdır. Haznenin dolması **iki-üç gün** sürer.

**3. Su vanasını kontrol et.** Buzdolabın su şebekesine bağlıysa LG'nin önerisi: su kaynağını bağlayan **lavabonun altındaki vananın açık** olduğundan emin ol. Vana, **bağlı boruyla aynı hizaya** gelecek şekilde çevrilmelidir. LG'ye göre su besleme vanası açıldıktan sonra sebile ve buz yapıcıya su gelir.

**4. Topaklanan buzu ayır.** LG'ye göre haznedeki buz uzun süre kullanılmazsa küpler birbirine yapışır ve buzun düzgün dağıtılmasını engeller. Buz birbirine yapıştıysa **hazneyi çıkar ve buzu ayırmak için salla**; LG'ye göre **ayrılmayan buz kümeleri atılmalıdır.**

**5. Hazneyi temizle ve doğru tak.** LG'nin önerisi: buz haznesini temizle ve **tamamen kuruduktan sonra** kullan. Temizlik için **yumuşak bir bez ve ılık su** kullan, sonra **kuru bir havluyla** kurula. LG'nin uyarısı: **sert fırça ya da keskin kazıyıcı kullanma,** plastik parçalara zarar verebilir. Hazneyi çıkarma şekli modele göre değişir: Fransız kapılı modellerde buz yapıcı sol kapının içindedir: iç kapağı açmak için buz yapıcının **kolunu aşağı çek**, hazneyi **altındaki kolu kaldırarak** ayır; geri takarken **eğimli** yerleştir. Yan yana (side by side) modellerde buz yapıcı dondurucu kapısının içindedir: buz yapıcının kapağını **iki elinle yukarı çekerek** çıkar, hazneyi **iki elle sıkıca tutup yukarı kaldır** ve dışarı çek.

**6. Kapıları ve sıcaklığı kontrol et.** LG'ye göre özellikle yaz ya da yağışlı mevsimde dondurucu kapısını uzun süre açık tutmak ya da kapıları düzgün kapatmamak içeri sıcak ve nemli hava girmesine yol açar; bu da buzun erimesine ya da topaklanmasına neden olabilir. **Kapıların iyi kapalı** olduğundan emin ol ve yaz aylarında buzdolabının **sıcaklık ayarını düşür.** Kapı kapalıyken uyarı sesi geliyorsa kardeş yazı: [LG buzdolabı kapı alarmı](/blog/lg-buzdolabi-kapi-alarmi/).

## Craft Ice (buz topu) olan modellerde

Buzdolabında Craft Ice buz makinesi varsa LG iki ek kontrol veriyor:

- Kontrol panelindeki **Craft Ice** düğmesinin ışığına bak. LED göstergesi kapalıysa özelliği açmak için Craft Ice düğmesine **üç saniye basılı tut.**
- **Buz haznesinin sapı öne bakmalıdır.** LG'ye göre hazne yanlış yerleştirilirse buz üretilmeyebilir.

LG'ye göre hazne dolduğunda Craft Ice buz yapmayı durdurur, haznedeki buz azalınca yeniden başlar.

## Buz yapıcıyı uzun süre kullanmayacaksan

LG'nin önerisi: haznedeki buzu boşalt, kontrol panelinin kilidini aç ve **Buz Açma/Kapama** düğmesine **üç saniye** basılı tutarak buz yapıcıyı kapat. Yeniden buz kullanacaksan buz yapıcıyı kullanmadan **bir-iki gün önce** aç.

## Ne zaman servis?

⛔ **LG'nin sınırı:** ilk **üç-dört gün** sonunda hâlâ buz yapılmıyorsa ürünün incelenmesi gerekir; **LG müşteri hizmetleriyle** iletişime geç. Buz yapıcının tepsisini ya da iç parçalarını sökmek, su filtresini değiştirmek ya da düşük su basıncı için tesisata müdahale etmek bu rehberin kapsamında değil; bunları yetkili servise bırak.

Buz yapmama sorunu buzdolabının genel olarak soğutmamasıyla birlikte geldiyse LG'nin soğutma kontrol sırası [LG buzdolabı soğutmuyor](/blog/lg-buzdolabi-sogutmuyor/) yazısında. Dondurucuda aşırı karlanma varsa [LG buzdolabı buzlanma yapıyor](/blog/lg-buzdolabi-buzlanma-yapiyor/) yazısına bak. Markadan bağımsız anlatım için [buzdolabı buz yapmıyor](/blog/buzdolabi-buz-yapmiyor/) yazısı var. LG'nin kodları için [LG buzdolabı hata kodları](/blog/lg-buzdolabi-hata-kodlari/) yazısına bakabilirsin.

## Servisi aramadan önce iki dakikalık özet

1. Buzdolabı ne zaman kuruldu ya da fişe takıldı?
2. Buz yapıcının ışığı ya da ekrandaki göstergesi açık mı?
3. Buzdolabı su şebekesine mi bağlı, dahili su deposundan mı besleniyor?
4. Haznede topaklanmış buz var mıydı?
5. Buzdolabı genel olarak soğutuyor mu?

Bu beşine cevabın varsa servise "buz yapmıyor" yerine somut bir tablo anlatabilirsin.

---

**Kaynak künyesi.** Nedenler ve adımlar LG Türkiye'nin "Su/buz ile ilgili sorunları giderme" ve "Buz yapıcı nasıl temizlenir" yardım sayfalarından alınmıştır. LG'nin kendi notuna göre bu içerik tüm modeller için hazırlanmıştır, resimler ya da içerik ürününden farklı olabilir; kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

Belirtiyi ve buzdolabının modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

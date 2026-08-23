---
title: "Bosch bulaşık makinesi hata kodları: Bosch'un yayımladığı liste"
description: "E12, E14, E15, E16, E18, E22, E23, E24, E25 ve E09 ne demek? Bosch'un kendi çözüm cümleleri, E15'te neden makine yatırılmaz ve servis sınırı."
slug: "bosch-bulasik-makinesi-hata-kodlari"
date: "2026-06-19"
updated: "2026-08-22"
category: "Bulaşık makinesi"
# 🔴 22 Ağu 2026 — YAZI BAŞTAN YAZILDI (kod tablosu denetimi, TARAMA-1).
#
# 🚨 EN ÖNEMLİ DÜZELTME — "MAKİNEYİ ~30° YANA YATIR" TAVSİYESİ KALDIRILDI.
# Yazı E15'te makineyi yatırıp taban suyunu boşaltmayı öneriyordu; SSS'de, öne çıkan
# kutuda, tabloda, 5 adımlık listede ve kapanışta olmak üzere ALTI yerde geçiyordu.
# Bosch'un kendi E15 sayfası bunun tam tersini söylüyor:
#   "Sağlığınız ve güvenliğiniz için sorunu evde tek başınıza çözmeyi denememenizi
#    öneririz. Şebeke suyunu kesin ve cihazı kapatın."
# Aynı cümle E09 sayfasında da var. Yani üreticinin güvenlik talimatına zıt bir
# tavsiye veriyorduk. Tavsiye çıkarıldı, yerine Bosch'un kendi talimatı kondu.
#
# Kod düzeltmeleri (kaynak: bosch-home.com.tr yardım-destek altındaki 13 kod sayfası,
# bu koşuda tek tek indirildi):
#   E16 ve E17 → Bosch bunları TEK SAYFADA, TEK anlamla veriyor: "su alma sisteminde
#     hata veya temiz su girişinde hata". Yazı ikiye bölüp ikisine de farklı (ve
#     birbiriyle çelişen) anlam vermişti: "beklenmedik su alma" ve "şamandıra".
#   E18 → "su seviyesi düşük" değil; Bosch: "su şebeke bağlantısındaki filtreler veya
#     AquaStop hortumu tıkanmış".
#   E01/E02 → Bosch TR listesinde yok (yalnız US), üstelik anlam da yanlıştı.
#   E21 → TR listesinde yok; Bosch'un ifadesi "ısı pompası tıkalı", "sirkülasyon
#     pompası" değil.
#   E27 → TR listesinde yok.
# 📌 Eksik yayındı, eklendi: E12 (ısıtma sisteminde kireç birikimi) ve E23 (atık su
#    pompasında hata) — ikisi de Bosch TR'de kendi sayfasıyla duruyor.
# 📌 Neff/Gaggenau iddiası yumuşatıldı: neff-home.com'da hata kodu sayfası bulunamadı.
#    Siemens ve Profilo teyitli, onlar kaldı.
faq:
  - q: "Bosch bulaşık makinesi E15 ne demek ve nasıl çözülür?"
    a: "E15, su koruma sisteminin etkinleştirildiğini gösterir: makinenin tabanına su inmiştir. Bosch'un kendi talimatı net ve evde denenecek bir adım içermiyor: şebeke suyunu kesin, cihazı kapatın ve teknisyenden randevu alın. İnternette çok yayılan 'makineyi yana yatırıp suyu boşalt' tavsiyesi Bosch'un talimatına aykırıdır; Bosch sağlık ve güvenlik gerekçesiyle evde çözmeyi denememenizi söylüyor."
  - q: "Bosch E22 ve E24 farkı ne?"
    a: "E22 filtrelerin tıkandığını gösterir; Bosch filtreleri temizlemeyi ve doğru şekilde yerleştirmeyi söylüyor — filtrelerin çoğu yerine kilitlenen türdendir. E24 ise pompa tıkanıklığını işaret eder; pompadaki tıkanıklığı açmak gerekir. İkisi de çoğu zaman evde çözülür. E24 bu adımdan sonra da sürüyorsa Bosch musluğu ve cihazı kapatıp randevu almanızı öneriyor."
  - q: "Bosch bulaşık E09 ne anlama gelir?"
    a: "Bosch, E09 veya F09 için ayrı bir sayfa yayımlıyor ve şunu söylüyor: sağlığınız ve güvenliğiniz için sorunu evde tek başınıza çözmeyi denememenizi öneririz, şebeke suyunu kesin ve cihazı kapatın. Yani bu kod ısıtma tarafına bakan ve doğrudan teknisyen isteyen bir koddur; evde denenecek bir adım tarif edilmemiştir."
  - q: "Siemens, Profilo, Neff'te de aynı kodlar mı?"
    a: "Siemens ve Profilo'da evet: ikisi de BSH grubundadır ve kendi destek sayfalarındaki tablolar Bosch'unkiyle örtüşür. Neff ve Gaggenau için aynı şeyi söyleyemiyoruz; ikisi de BSH markası olmasına rağmen kendi sitelerinde bir hata kodu sayfası yayımlamıyor. Platform ortaklığı belgeli, kod tablosu ortaklığı değil."
  - q: "E15 ile birlikte musluk (çeşme) işareti yanıyor, ne demek?"
    a: "E15 hatasında ekranda musluk sembolü de yanabilir; ikisi de suyla ilgili bir güvenlik durumunu anlatır. Yapılacak şey değişmiyor: musluğu kapat, cihazı kapat ve servisle konuş. Bosch bu durumda kullanıcının müdahale etmesini önermiyor, çünkü tabandaki su hem elektrikli bir bölgenin içindedir hem de kaynağı bulunmadan tekrar birikir."
images:
  coverAlt: "Bulaşık makinesi kumanda şeridinin yakın plan çizimi, ekranda hata göstergesi yanıyor"
---

Bosch bulaşık makinen **E** ile başlayan bir hata kodu gösteriyor. Bu rehberde **Bosch'un kendi destek sayfalarında yayımladığı kodları**, Bosch'un verdiği çözüm cümlesiyle birlikte topladık.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> 🚨 **Önce bir düzeltme.** İnternette çok yayılan bir tavsiye var: *"E15'te makineyi ~30° yana yatır, taban suyunu boşalt."* **Bosch'un kendi sayfası bunun tersini söylüyor:** *"Sağlığınız ve güvenliğiniz için sorunu evde tek başınıza çözmeyi denememenizi öneririz. Şebeke suyunu kesin ve cihazı kapatın."*

## ⚡ En sık karşılaşılan 3 kod
> **E24** — Pompa tıkanıklığı → 🛠️ kendin
>
> **E22** — Filtreler tıkanmış → 🛠️ kendin
>
> **E15** — Su koruma sistemi devrede → 🔧 musluğu ve cihazı kapat, servis

## Bosch'un yayımladığı kod listesi
🛠️ = Bosch kullanıcıya bir iş tarif ediyor · 🔧 = Bosch doğrudan servise yönlendiriyor

| Kod | Bosch'un tanımı | Bosch ne diyor |
|-----|-----------------|----------------|
| **E12** | Isıtma sisteminde kireç birikimi | 🛠️ Cihazın kireçlerini temizleyin (kireç çözücü ürün) |
| **E14** | Su alma sisteminde veya temiz su girişinde hata | 🛠️ Temiz su girişini kontrol edin: köşe vana açık, hortum bükülmemiş |
| **E15** | Su koruma sistemi etkinleştirildi | 🔧 **Şebeke suyunu kesin, cihazı kapatın** — evde çözmeyi denemeyin |
| **E16 / E17** | Su alma sisteminde hata veya temiz su girişinde hata | 🛠️ Temiz su girişini kontrol edin; sık tekrarlıyorsa teknisyen |
| **E18** | Su şebeke bağlantısındaki filtreler veya AquaStop hortumu tıkanmış | 🛠️ Su giriş hortumu filtrelerini temizleyin |
| **E22** | Filtreler tıkanmış | 🛠️ Filtreleri temizleyin, doğru yerleştiğinden emin olun |
| **E23** | Atık su pompasında hata | 🔧 Yalnızca deneyimli teknisyen giderebilir |
| **E24** | Pompa tıkanıklığı | 🛠️ Pompadaki tıkanıklığı açın; çözülmezse musluğu ve cihazı kapatın |
| **E25** | Pompa yabancı madde nedeniyle tıkalı ya da pompa kapağı düzgün takılmamış | 🛠️ Fişi çekin, pompa kapağını çıkarın, yabancı maddeleri temizleyin |
| **E09** | — | 🔧 **Şebeke suyunu kesin, cihazı kapatın** — evde çözmeyi denemeyin |
| **Diğer kodlar** | Elektronik arızalar | 🔧 Yalnızca deneyimli teknisyen giderebilir |

"Bosch ne diyor" sütunu bizim yorumumuz değil — Bosch'un kendi sayfalarındaki çözüm cümlesinin özeti.

> 📌 **E16 ile E17 aynı sayfada.** Bosch bu iki kodu ayırmıyor; ikisine de tek anlam veriyor. İnternetteki listelerin bu ikisine ayrı ve birbirine zıt anlamlar vermesinin bir dayanağı yok.

## Öne çıkan kodlar

### E15 — Su koruma sistemi devrede
Tabandaki tavaya su inmiş ve koruma sistemi cihazı durdurmuştur. Ekranda genelde **E15 ile birlikte musluk sembolü** yanıp söner; ikisi aynı durumu anlatır.

Bosch'un talimatı iki cümledir ve evde denenecek bir adım içermez:

1. **Şebeke suyunu kes.**
2. **Cihazı kapat.**
3. Teknisyenden randevu al.

⛔ **Makineyi yatırma.** Bu tavsiye internette çok dolaşıyor ama Bosch açıkça sağlık ve güvenlik gerekçesiyle evde müdahaleyi önermiyor. Sebebi de mantıklı: tabandaki su elektrikli bir bölgenin içindedir ve suyu boşaltmak sızıntının **kaynağını** ortadan kaldırmaz — su tekrar birikir, bu sefer sen orada olmadan.

Bu kodu sebep sebep ele aldığımız ayrıntılı rehber: [Bosch bulaşık makinesi E15 hatası](/blog/bosch-bulasik-makinesi-e15-hatasi/)

### E22 ve E24 — filtre ve pompa
Listedeki en çok "kendin çözülen" iki kod bunlar.

**E22**'de Bosch filtreleri temizlemeyi ve **doğru şekilde yerleştirmeyi** söylüyor — filtrelerin çoğu yerine kilitlenen türdendir ve gevşek takılan filtre hem yıkama kalitesini düşürür hem pompaya cisim kaçırır.

**E24**'te pompa tıkanıklığını açmak gerekir. Bosch bu adımdan sonra da sorun sürerse musluğu ve cihazı kapatıp randevu almayı öneriyor.

Ayrıntılı rehberler: [E22 hatası](/blog/bosch-bulasik-makinesi-e22-hatasi/) · [E24 hatası](/blog/bosch-bulasik-makinesi-e24-hatasi/)

### E25 — pompa kapağı ve yabancı cisim
Bosch'un adım listesi net: program seçiciyi **OFF** konumuna getir, makineyi fişten çek, pompa kapağını çıkar, tüm yabancı maddeleri temizle.

⚠️ **Bosch'un kendi uyarısı:** pompa **cam parçacıkları** nedeniyle tıkanmış olabilir ve bu parçalar yaralanmana neden olabilir. Elini körlemesine sokma, önce bak.

### E18 — giriş filtreleri ve AquaStop
Bosch'un tanımı "su seviyesi düşük" değil: **su şebeke bağlantısındaki filtreler veya AquaStop hortumu tıkanmış.** Çözüm su giriş hortumu filtrelerini temizlemek.

⚠️ **Bosch'un kendi uyarısı:** AquaStop güvenlik cihazında bir **elektrik vanası** bulunur. Bu vanayı suya sokma.

### E12 — kireç
Isıtma sisteminde kireç birikmiş. Bosch, ısıtma sistemine zarar vermemek için cihazın kireçlerinin temizlenmesini öneriyor; bulaşık makineleri için standart kireç çözücü ürünler kullanılabilir. Bu, arıza değil **bakım** kalemidir ve ihmal edilirse gerçek bir arızaya döner.

## Hata kodu nasıl sıfırlanır?
Çoğu modelde: **başlat (Start) tuşunu birkaç saniye basılı tut** ya da makineyi **fişten 1 dakika** çek. Arıza sürüyorsa kod tekrar çıkar — kodu silmek sebebi ortadan kaldırmaz.

## Kodun listede yok mu?
Bosch yüzlerce model üretir ve yayımladığı liste yukarıdakiyle sınırlı. Bosch bu listenin dışı için tek cümlelik bir hüküm veriyor: **"Diğer hata kodlarının tamamı elektronik arızalarıyla ilgilidir"** ve deneyimli bir teknisyen ister.

Biz de listenin dışındaki numaralara **uydurma bir anlam vermeyiz** — yanlış teşhis sana pahalıya patlar. Ekrandaki kodu ve cihaz modelini [Benservis'e yaz](/); olası arızayı, kendin çözüp çözemeyeceğini ve tahmini maliyeti saniyede söyleyelim.

> 🔧 **Servis çağırmadan önce:** Cihazının markasını ve belirtiyi yaz — Benservis olası arızayı ve **tahmini maliyet aralığını** ücretsiz söylesin, sonra sana en yakın Google puanlı servisleri göstersin. [Ücretsiz teşhis et →](/)

## Tahmini tamir maliyeti
Hangi işin ne kadar tuttuğunu belirleyen faktörler: [Bulaşık makinesi tamirinde fiyatı ne belirler?](/blog/bulasik-makinesi-tamiri-kac-para/)

İlgili: [Bulaşık makinesi hata kodları (marka marka)](/blog/bulasik-makinesi-hata-kodlari/) · [Su atmıyor](/blog/bulasik-makinesi-su-atmiyor/) · [Temiz yıkamıyor](/blog/bulasik-makinesi-temiz-yikamiyor/) · [Su almıyor](/blog/bulasik-makinesi-su-almiyor/)

## Sık sorulan sorular

**E15 ne demek, nasıl çözülür?**
Su koruma sistemi devrede. Bosch'un talimatı: şebeke suyunu kes, cihazı kapat, servisle konuş. Makineyi yatırma.

**E22 ve E24 farkı?**
E22 filtreler tıkalı; E24 pompa tıkanıklığı. İkisi de çoğu zaman evde çözülür.

**E09 ne anlama gelir?**
Bosch evde çözmeyi denememeyi söylüyor: şebeke suyunu kes, cihazı kapat, randevu al.

**Siemens'te aynı mı?**
Siemens ve Profilo'da evet. Neff ve Gaggenau kendi kod sayfalarını yayımlamadığı için onlar için aynı şeyi söyleyemiyoruz.

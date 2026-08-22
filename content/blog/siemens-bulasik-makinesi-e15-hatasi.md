---
title: "Siemens bulaşık makinesi E15 hatası: musluk işareti ve çözümü"
description: "Siemens bulaşık makinesinde E15 ve musluk işareti: taban tavasına su kaçtı, AquaStop devrede. Suyu güvenle boşaltma adımları ve servis sınırı."
slug: "siemens-bulasik-makinesi-e15-hatasi"
date: "2026-08-20"
category: "Bulaşık makinesi"
# 🚨 22 Ağu 2026 — GÜVENLİK DÜZELTMESİ (kod tablosu denetimi, TARAMA-1).
# Yazının guide/steps dizisi makineyi 30-45° EĞMEYİ anlatıyordu — HowTo şeması olarak
# arama sonuçlarına bu talimat çıkıyordu. BSH'nin kendi E15 sayfası tersini söylüyor:
#   "Sağlığınız ve güvenliğiniz için sorunu evde tek başınıza çözmeyi denememenizi
#    öneririz. Şebeke suyunu kesin ve cihazı kapatın."
# steps, tools, gövde ve SSS BSH'nin talimatına göre yeniden yazıldı. Adım sayısı 6.
# 📌 Neff kod eşitliği iddiası çıkarıldı: neff-home.com'da kod sayfası yok.
guide:
  difficulty: "Kolay-Orta"
  time: "~25 dakika (+ kuruma süresi)"
  totalTime: "PT25M"
  cost: "Ücretsiz"
  tools: ["Havlu / paspas", "Kâğıt ve kalem (gözlem notu için)"]
steps:
  - "Şebeke suyunu kes. Makinenin musluğunu kapat; Bosch'un E15 talimatındaki ilk hamle budur."
  - "Cihazı kapat ve fişini çek. Tabanda su varken elektrikle aynı anda uğraşma."
  - "Makinenin önüne ve altına havlu ser, dışarı sızmış görünür suyu al. Cihazın içine ve altına elini sokma."
  - "Çevreyi gözle: makinenin altında, yanlarında ve arka bağlantılarda ıslaklık izi ya da damlama var mı bak."
  - "Son yıkamayı hatırla: aşırı köpük, elde yıkama deterjanı ya da fazla doz kullandın mı not et; tek seferlik taşmaların klasik sebebidir."
  - "Kodu, modeli ve gözlemini not edip servisten randevu al. Bosch bu kodda evde çözüm denenmesini önermiyor."
faq:
  - q: "Siemens bulaşık makinesi E15 hatası ne anlama gelir?"
    a: "E15, makinenin taban tavasında su biriktiğini ve taşma güvenliğinin (AquaStop / şamandıra) devreye girdiğini gösterir. Ekranda genelde yanıp sönen bir musluk işaretiyle birlikte görünür. Makine bozulduğu için değil, mutfağını su basmasın diye durmuştur; asıl soru suyun tabana neden indiğidir."
  - q: "E15 varken makine neden sürekli ses çıkarıyor?"
    a: "Şamandıra devreye girdiğinde birçok modelde tahliye pompası, tabandaki suyu atmaya çalışmak için aralıklı ya da sürekli çalışır. Bu vızıltı arızanın kendisi değil, güvenlik sisteminin çalıştığının işaretidir. Taban suyu boşaltılıp kuruduğunda ses de kesilir."
  - q: "E15 hatası bekleyince kendiliğinden geçer mi?"
    a: "Tabandaki su azsa buharlaşınca kod kalkabilir; fişten çekip bekleyince düzeldiğini görenler bu yüzden vardır. Ama bu, suyun tabana neden kaçtığı sorusunu yanıtlamaz. Eğip boşaltmak ve kurutmak hem daha hızlıdır hem de tekrar edip etmediğini net gösterir; kısa sürede geri geliyorsa sızıntı var demektir."
  - q: "Bosch ve Profilo'daki E15 ile aynı mı?"
    a: "Siemens, Bosch ve Profilo'da evet: üçü de BSH grubundadır ve E15 hepsinde su koruma sisteminin devreye girdiğini anlatır. Neff ve Gaggenau için aynı şeyi söyleyemiyoruz; ikisi de kendi sitelerinde bir hata kodu sayfası yayımlamıyor. Platform ortaklığı belgeli, kod tablosu ortaklığı değil."
images:
  coverAlt: "Bulaşık makinesinin taban bölümü ve su tahliye alanı"
---

Akşam bulaşığını yükledin, program başladı ve birkaç dakika sonra makine sustu: ekranda **E15**, yanında yanıp sönen bir **musluk işareti**. Belki bir de alttan gelen inatçı bir vızıltı. Siemens bulaşık makinelerinde E15, kullanıcıyı en çok telaşlandıran ama çoğu zaman en masum biten kodlardan biridir: makine arızalandığı için değil, **evini korumak için** durmuştur. Bu rehberde E15'in ne olduğunu, üreticinin ne yapılmasını söylediğini ve neden makineyi eğmemen gerektiğini anlatıyoruz.

> 🚨 **Önce önemli bir düzeltme.** İnternette çok yayılan bir tavsiye var: *"makineyi 30-45° eğ, taban suyunu boşalt."* **Üreticinin kendi E15 sayfası bunun tersini söylüyor:**
>
> *"Sağlığınız ve güvenliğiniz için sorunu evde tek başınıza çözmeyi denememenizi öneririz. Şebeke suyunu kesin ve cihazı kapatın."*
>
> Bu yazının önceki sürümü de o tavsiyeyi veriyordu, üstelik adım adım. Kaldırdık ve yerine üreticinin kendi talimatını koyduk. Suyu boşaltmak sızıntının **kaynağını** ortadan kaldırmaz; su tekrar birikir, bu sefer sen orada olmadan.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E15 = taban tavasına su inmiş, su koruma sistemi makineyi durdurmuş. Üreticinin talimatı: **şebeke suyunu kes → cihazı kapat → randevu al.** Aradaki adımlar senin çözümün için değil, servise anlatacağın tablo için: sızmış suyu kurula, çevreyi gözle, son yıkamayı hatırla.

## E15 tam olarak ne söylüyor?

Siemens bulaşık makinelerinin en altında, dışarıdan görünmeyen bir **taban tavası** ve içinde bir **şamandıra** bulunur. Makinenin herhangi bir yerinden sızan su önce bu tavada birikir; su seviyesi yükselince şamandıra kalkar ve güvenlik devresi makineyi durdurur, su girişini keser. Birçok modelde tahliye pompası da tabandaki suyu atmak için çalışmaya başlar — E15 sırasında duyulan sürekli vızıltının sebebi budur.

Yani E15 bir "bozuldum" mesajı değil, **"içimde olmaması gereken yerde su var"** mesajıdır. Asıl teşhis edilmesi gereken, suyun oraya nereden geldiğidir.

## Su tabana neden kaçar?

- **Tek seferlik taşma ya da aşırı köpük** — yanlış deterjan, fazla doz, elde yıkama deterjanı. En masum ve en sık senaryo.
- **Kapı contası yıpranması** — kapak kenarından sızan su aşağı iner.
- **Hortum ve bağlantı gevşekliği** — giriş ya da tahliye hortumunun bağlantısı zamanla gevşeyebilir.
- **Sprey kolu ve filtre tıkanıklığı** — su içeride doğru dolaşamayınca kenarlardan kaçabilir.
- **İç aksamda aktif sızıntı** — pompa gövdesi, valf ya da conta kaynaklı; bu, kodun tekrar tekrar gelmesiyle kendini belli eder.

## Adım adım: taban suyunu güvenle boşalt

Aşağıdaki adımların hiçbiri makineyi hareket ettirmeyi ya da eğmeyi gerektirmez.

**1. Şebeke suyunu kes.** Makinenin musluğunu kapat. Üreticinin E15 talimatındaki ilk hamle budur ve sebebi basit: kaynağı bilinmeyen bir sızıntıya su gitmeye devam etmemeli.

**2. Cihazı kapat ve fişini çek.** Tabanda su varken elektrikle aynı anda uğraşma.

**3. Görünür suyu al.** Makinenin önüne ve altına havlu ser, dışarı sızmış suyu kurula. ⚠️ Cihazın içine ve altına elini sokma — tabandaki su elektrikli bir bölgenin içindedir.

**4. Çevreyi gözle.** Makinenin altında, yanlarında ve arka bağlantılarda ıslaklık izi ya da damlama var mı bak. Bu gözlem servise teşhisi kısaltır.

**5. Son yıkamayı hatırla.** Aşırı köpük, elde yıkama deterjanı ya da fazla doz kullandıysan not et; tek seferlik taşmaların klasik sebebidir.

**6. Randevu al.** Kodu, model numarasını ve gözlemini not edip servisle konuş. Üretici bu kodda evde çözüm denenmesini önermiyor — ama elin boş değil, anlatacak somut bir tablon var.


## E15 tekrar geliyorsa: artık sızıntı arıyoruz

Suyu boşalttın, kuruttun, makine bir iki yıkama sonra yine E15 verdi. Bu tablo, içeride **aktif bir sızıntının** işaretidir: conta, hortum, pompa ya da valf. Suyu tekrar tekrar boşaltarak idare etmek çözüm değildir; hem mutfak zeminine hem makinenin elektronik aksamına zarar verme riski büyür.

**Kendin kontrol et:** Servisi aramadan önce iki gözlem yap, teşhisi hızlandırır: kapı contasında görünür yıpranma ya da kopma var mı; son dönemde deterjan tipini ya da dozunu değiştirdin mi? Bu iki cevabı belirtinle birlikte not et.

## Tekrarını önlemek için üç alışkanlık

E15'in en sık sebebi taşma ve köpük olduğu için üç basit alışkanlık riski ciddi biçimde azaltır. Bir: yalnızca bulaşık makinesi deterjanı kullan ve dozu kutunun tarifinde tut — elde yıkama deterjanı bir kez bile girse makineyi köpüğe boğar. İki: alt sepetin altındaki filtre grubunu düzenli aralıklarla çıkarıp akan suyun altında yıka; tıkalı filtre suyun içeride yanlış yerlere yönelmesine zemin hazırlar. Üç: kapı contasını arada nemli bezle sil ve kıvrımlarında yırtık olup olmadığına göz at — conta, suyun kapak kenarından kaçmasını önleyen tek bariyerdir.

## Hangi noktadan sonra servis işi?

Tek seferlik E15'i boşaltma-kurutma yöntemiyle kendin kapatabilirsin; bu tamamen kullanıcı seviyesinde bir iştir. Kod tekrar ediyorsa, tabana inen suyun kaynağını bulmak — conta, hortum, valf, pompa — servisin işidir ve çoğu zaman makineyi emekli etmeyi gerektirmeyen, yerinde çözülen işlerdendir. Maliyet sorusu aklındaysa tahmini bandı ücretsiz teşhiste görebilirsin.

Bu yazının kardeşi olan Bosch bulaşık makinesi E15 hatası rehberi sitemizde ayrıca yer alıyor; makinen Bosch etiketliyse oradaki anlatım birebir senin için. Belirtini benservis.com'a yaz, olası kaynağı ve tahmini maliyeti ücretsiz gör, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

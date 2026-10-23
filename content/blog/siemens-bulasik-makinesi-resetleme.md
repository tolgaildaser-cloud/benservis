---
title: "Siemens bulaşık makinesi resetleme nasıl yapılır"
description: "Siemens bulaşık makinesinde reset: kapıyı aç, Açma/Kapama tuşuna yaklaşık 4 saniye bas. LED'ler, kalan su, fabrika ayarı rE ve servis sınırı."
slug: "siemens-bulasik-makinesi-resetleme"
date: "2026-10-23"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 3, küme F, fork B). Konu seçimi: origin/main'de siemens-bulasik-makinesi-resetleme yok; başlıklarda "Siemens bulaşık … reset" yok.
#   Yakın sayfalar: siemens-bulasik-makinesi-hata-kodlari (E22/E24/E25), -e92-40-hatasi, -sembolleri-ve-anlamlari; başlıkları resetleme sorgusunu hedeflemiyor.
#   siemens-camasir-makinesi-hata-kodu-sifirlama çamaşır makinesi, ayrı cihaz.
# Arama kanıtı (bu koşu, Google otomatik tamamlama hl=tr gl=tr): "siemens bulaşık makinesi r" → 1. "…resetleme", 3. "…resetleme nasıl yapılır";
#   "siemens bulaşık makinesi" → 3. "…resetleme". GSC (https___www-5 3 ay, https___www-6 7 gün): satır yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bsh-group.com'dan indirildi, HTTP 200, md5 yerel kopyayla aynı.
#  (N) Siemens SN45EB01NT kullanım kılavuzu  https://media3.bsh-group.com/Documents/9002038247_A.pdf  52 s.  md5 02b0114f050e3292c565f1404f08be4c
#  (H) Siemens SN23HW62MT kullanım kılavuzu  https://media3.bsh-group.com/Documents/9001706611_H.pdf  52 s.  md5 168ec8d8b1f400c2cb09856890782627
# Açma/Kapama ve Reset tuşu N s.14, H s.15 · iptal N s.32, H s.32-33 · duraklatma ve basınç notu N s.32 · otomatik kapanma N s.32 · fabrika ayarı rE N s.35, H s.34
#   · temel ayarları değiştirme N s.35-36 · ilk çalıştırma N s.20 · E:92-40 ve LED satırı N s.44, H s.42 · taşımadan önce boşaltma N s.47 (sayfa = PDF sayfası).
# BİLEREK YAZILMAYANLAR: gizli tuş kombinasyonu/servis menüsü · temel ayar tuşlarının adı (PDF'te yalnız simge, metin yok) · hata kodu silme hilesi
#   · kart/parça teşhisi · fiyat/süre (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: siemens-bulasik-makinesi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanım kılavuzu"]
steps:
  - "Makine ısınmışsa kapıyı önce birkaç dakika aralık bırak, sonra tamamen aç."
  - "Kapının üst kenarındaki panelde Açma/Kapama tuşuna yaklaşık 4 saniye bas; bu tuş aynı zamanda Reset tuşu."
  - "Cihaz kapısını kapat."
  - "Yaklaşık 1 dakika boyunca bütün LED'lerin yanmasını bekle."
  - "LED'ler sönünce göstergede 0h:01m görünür ve kalan su boşaltılır; bu bitene kadar dokunma."
  - "Yeni programı seç ve başlat; içeride su kalıyorsa süzgeçleri kontrol et."
  - "Ayarlar karıştıysa temel ayarlardan fabrika ayarını (rE) seçip YES ile onayla, ardından ilk çalıştırma ayarlarını yeniden yap."
faq:
  - q: "Siemens bulaşık makinesinin reset tuşu hangisi?"
    a: "SN23HW62MT ve SN45EB01NT kılavuzlarının kumanda paneli tablosunda Açma/Kapama tuşu ve Reset tuşu aynı satırda, tek tuş olarak geçiyor. Programın iptali için kapı açıkken bu tuşa yaklaşık 4 saniye basılıyor."
  - q: "Siemens bulaşık makinesi resetleme ne kadar sürer?"
    a: "Kılavuza göre yaklaşık 1 dakika. Bu süre boyunca tüm LED'ler yanar; LED'ler kapandığında göstergede 0h:01m görüntülenir, kalan su boşaltılır ve program iptali tamamlanır."
  - q: "Kapı kapalıyken tuşlara basıyorum, tepki yok. Neden?"
    a: "Bu iki model tam ankastre tipte; kumanda paneli kapının üst kenarında. Siemens kılavuzundaki iptal sırası da kapıyı açmakla başlıyor: kapıyı aç, tuşa yaklaşık 4 saniye bas, kapıyı kapat."
  - q: "Siemens bulaşık makinesini fabrika ayarlarına nasıl döndürürüm?"
    a: "Kılavuzun temel ayarlar tablosunda Fabrika ayarı satırının ekran metni rE. Bu ayar başlatılıp YES ile onaylanınca değiştirilen ayarlar fabrika ayarlarına döner. Kılavuz, bundan sonra ilk çalıştırma ayarlarının yeniden yapılması gerektiğini yazıyor."
  - q: "Ekranda E:92-40 yanıyor, reset işe yarar mı?"
    a: "Siemens kılavuzuna göre E:92-40, elektronik sistemin bir hata tespit ettiği anlamına geliyor. İlk adım ana şalter tuşuna yaklaşık 4 saniye basmak; cihaz sıfırlanıp yeniden başlar. Sorun sürerse fiş ya da sigorta en az 2 dakika kapatılır, yine geçmezse müşteri hizmetleri aranır."
images:
  coverAlt: "Mutfak dolaplarıyla aynı hizada, kapağı mobilya paneliyle kaplı tam ankastre bir bulaşık makinesi"
  steps:
    - "Hafifçe aralanmış bulaşık makinesi kapağının kenarından yükselen ince bir buhar"
    - "Açık bulaşık makinesi kapağının üst kenarında sıralanmış dokunmatik tuşlar"
    - "Mobilya paneliyle kaplı bulaşık makinesi kapağının kapanırken görünümü"
    - "Bulaşık makinesi kapağının üst kenarında aynı anda yanan küçük gösterge ışıkları"
    - "Kapalı bir tam ankastre bulaşık makinesinin önündeki zemine yansıyan küçük bir ışık"
    - "Bulaşık makinesinin tabanında yerinden çıkarılmış silindir biçimli süzgeç"
    - "Bulaşık makinesinin yanında tezgâhta açık duran bir kullanım kılavuzu"
---

Program yarıda kaldı, yanlış programı seçtin ya da panel garip davranıyor; Siemens bulaşık makinesini sıfırlamak istiyorsun. Siemens kılavuzlarında bunun karşılığı **"Programın iptal edilmesi"** bölümü ve sonucu da açıkça yazılı: **program iptal edilir ve cihaz sıfırlanır.** Bu yazıda Siemens'in SN23HW62MT ve SN45EB01NT kullanım kılavuzlarından iptalin sırasını, LED'lerin ne anlattığını, fabrika ayarına dönüşü ve elektronik hata durumundaki sıfırlamayı topladık. İki model de tam ankastre; kumanda paneli kapının üst kenarında. Senin modelinde tuşlar farklı olabilir, kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kapıyı aç, Açma/Kapama (Reset) tuşuna yaklaşık 4 saniye bas, kapıyı kapat. Yaklaşık 1 dakika tüm LED'ler yanar; sonra göstergede 0h:01m görünür ve kalan su boşaltılır. Ayarlar için fabrika ayarı rE. E:92-40'ta ana şalter tuşuna 4 saniye, sürerse servis.

## Üç ayrı "sıfırlama"

| Ne istiyorsun | Kılavuzdaki adı | Nasıl |
|---|---|---|
| Programı durdurup baştan başlamak | Programın iptal edilmesi | Kapı açık, Açma/Kapama tuşu yaklaşık 4 saniye |
| Değiştirdiğin ayarları geri almak | Fabrika ayarı (rE) | Temel ayarlardan başlat, YES ile onayla |
| Elektronik hatadan kurtulmak | E:92-40 satırı | Ana şalter tuşu yaklaşık 4 saniye |

## Adım adım: Siemens bulaşık makinesini sıfırlama

**1. Kapıyı güvenle aç.** Siemens'in uyarısı: cihaz ısıtılmış hâldeyken kapağı açarsan **önce birkaç dakika aralık bırak,** sonra aç. Böylece cihazda aşırı basınç oluşmasını ve **kapının sıçrayarak açılmasını** önlersin. Panel kapının üst kenarında olduğu için iptal sırası kapıyı açmakla başlıyor.

**2. Açma/Kapama tuşuna 4 saniye bas.** İki kılavuzun kumanda paneli tablosunda **Açma/Kapama tuşu ve Reset tuşu** aynı satırda, tek tuş olarak geçiyor. Programı iptal etmek için bu tuşa **yaklaşık 4 saniye** bas. Kısa basış başka işe yarıyor: kılavuza göre yıkama sırasında tuşa basarsan program **duraklatılır** ve cihazı yeniden açtığında **otomatik olarak devam eder.** Bu bir sıfırlama değil.

**3. Kapıyı kapat.** Tuşu bıraktıktan sonra cihaz kapısını kapat. Siemens'in cümlesi burada: **"Program iptal edilir ve cihaz sıfırlanır."** Kılavuz ayrıca devam eden programı **sadece iptal ederek değiştirebileceğini** yazıyor; yani program değiştirmenin yolu da bu.

**4. LED'leri izle.** İptalden sonra **yaklaşık 1 dakika süresince tüm LED'ler yanar.** Bu bir arıza değil, iptalin işaretidir. Kılavuzun arıza tablosunda başka bir "tüm LED'ler yanıyor ya da yanıp sönüyor" satırı daha var: o durumda muhtemelen yazılım güncellemesi yükleniyordur ve bu **yaklaşık 30 dakika** sürebilir.

**5. Kalan suyun boşalmasını bekle.** LED'ler kapandığında göstergede **"0h:01m"** görüntülenir ve **kalan su boşaltılır.** Program iptali yaklaşık 1 dakika sonra tamamlanır. Enerji tasarrufu için cihaz program bittikten 1 dakika sonra kendiliğinden kapanır; kapıyı hemen açarsan **4 saniye sonra** kapanır.

**6. Yeni programı başlat.** Kapıyı aç, Açma/Kapama tuşuyla cihazı çalıştır, programı seç ve başlat. İçeride su kalmaya devam ediyorsa süzgeçlere bak: [bulaşık makinesi filtresi nasıl temizlenir](/blog/bulasik-makinesi-filtresi-nasil-temizlenir/). Tahliye sorunu için [Siemens bulaşık makinesi su boşaltmıyor](/blog/siemens-bulasik-makinesi-su-bosaltmiyor/) yazısı var.

**7. Gerekirse fabrika ayarı.** Su sertliği, parlatıcı ya da kurutma ayarlarıyla oynadın ve geri dönmek istiyorsun: temel ayarlar tablosunun son satırı **Fabrika ayarı,** ekran metni **rE.** Temel ayarlara kapı açıkken ve cihaz çalışırken bir tuşa **3 saniye** basarak girilir; ekranda önce **Hxx** görünür. rE'ye gelince ayarı başlatıp **YES** ile onayla, kaydetmek için tuşa yine **3 saniye** bas ve kapıyı kapat. Kılavuzun notu: bundan sonra **ilk çalıştırma ayarları,** yani tuz, parlatıcı ve su sertliği yeniden yapılmalı.

## E:92-40 ve elektronik sıfırlama

Siemens'in arıza tablosunda **E:92-40 değişimli olarak yanıyorsa** sebep: **elektronik sistem bir hata tespit etti.** Kılavuzun sırası üç adım: ana şalter tuşuna **yaklaşık 4 saniye** bas, cihaz sıfırlanır ve yeniden başlar. Sorun yeniden ortaya çıkarsa cihazı kapat, fişini çek ya da sigortayı kapat, **en az 2 dakika** bekle, yeniden aç. Yine çıkarsa müşteri hizmetlerini ara. Ayrıntı [Siemens bulaşık makinesi E92-40 hatası](/blog/siemens-bulasik-makinesi-e92-40-hatasi/) yazısında.

## Taşımadan önce suyu boşaltmak için iptal

Siemens iptali bir de taşıma hazırlığında kullanıyor: bulaşıkları çıkar, gevşek parçaları sabitle, musluğu aç, cihazı çalıştır, en yüksek sıcaklıktaki programı seçip başlat ve **yaklaşık 4 dakika sonra programı iptal et.** Ardından cihazı kapat, musluğu kapat. Kılavuz makineyi **sadece dik durumda** taşımanı istiyor; aksi hâlde su artıkları kumanda sistemine girip hasar verebilir.

## Ne zaman servis

- İptal ettiğin hâlde LED'ler sönmüyor ya da cihaz tepki vermiyorsa
- E:92-40 fiş ve sigorta denemesinden sonra da geri geliyorsa
- Süzgeç kontrolünden sonra içeride su kalıyorsa
- Başka bir hata kodu tekrar ediyorsa: liste [Siemens bulaşık makinesi hata kodları](/blog/siemens-bulasik-makinesi-hata-kodlari/) sayfasında

⛔ **Kendin-çöz sınırı burada biter.** Tuşlar, temel ayarlar, fiş, sigorta ve süzgeçler sende; gövdenin içi, pompa ve elektronik kart yetkili servisin.

## Servisi aramadan önce kısa özet

1. Cihazın E-Nr. ve FD numarası ne? Tip etiketinde yazıyor.
2. Ekranda bir kod var mı, LED'ler nasıl yanıyor?
3. İptalden sonra 0h:01m göründü mü?
4. Fiş ya da sigortayla 2 dakikalık bekleme denendi mi?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Panel simgeleri [Siemens bulaşık makinesi sembolleri ve anlamları](/blog/siemens-bulasik-makinesi-sembolleri-ve-anlamlari/) sayfasında. Bil, gör, çağır.

---
title: "Kiwi su pompası kurulumu: şarj, takma ve çalışmıyorsa"
description: "Kiwi şarjlı su pompası nasıl kurulur? Kiwi kılavuzuna göre ilk şarj, damacanaya takma, hortum yerleşimi, kullanım, temizlik ve çalışmıyorsa yapılacaklar."
slug: "kiwi-su-pompasi-kurulumu"
date: "2026-10-23"
category: "Su sebili / arıtma"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 3, küme K2). Konu: origin/main (1c05771) "su pompası" (damacana) ya da "kiwi" geçen yazı yok; mevcut pompa yazıları kombi ve bulaşık makinesi pompası.
# Arama kanıtı (#164, bu koşuda suggestqueries client=firefox hl=tr gl=tr): "kiwi su pompası k" → 1. "kiwi su pompası kurulumu" · 2. "…kullanımı" · 3. "…kaç saatte şarj olur";
#   "kiwi su pompası" → 4. "…kurulumu", 6. "…çalışmıyor", 10. "…nasıl takılır".
# GSC: https___www-3..6 Sorgular.csv içinde "kiwi" satırı yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile static.kiwi.com.tr'den indirildi, hepsi HTTP 200. #88: yalnız Kiwi'nin kendi kılavuzları.
#  (A) KWP-8520 Şarjlı Su Pompası kılavuzu 16 s.  md5 3660ac5fa0e7c384f755a782b026ea91  TR s.6-7, 11
#  (B) KWP-8513 Şarjlı Su Pompası kılavuzu 16 s.  md5 f5334451f0a01d568c25d2d0c15f6f5c  TR s.6-7 (A ile aynı kullanım metni; Ni-mh pil)
#  (C) KWP-8521 Şarjlı Su Pompası kılavuzu 16 s.  md5 ae9506c925b60d636e4338984e484d29  TR s.6-7 (su miktarı ayarı, otomatik durma)
# BİLEREK YAZILMAYANLAR: montaj şemasının adımları (kılavuzda yalnız resim; metin "talimatlara göre monte edin") · pil değiştirme ya da söküm (#31) · pil ömrü, dakika başına akış (belgede yok) · fiyat, yedek parça (#46).
# Alıntı denetim tablosu: kiwi-su-pompasi-kurulumu.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika (ilk şarj hariç)"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Pompayla gelen USB şarj kablosu", "USB güç kaynağı", "Dolu damacana", "Ilık sabunlu su", "Yumuşak nemli bez"]
steps:
  - "Kutudan çıkan bütün parçaları dikkatle ambalajından çıkar ve hasar olup olmadığına bak."
  - "Pompayı USB şarj kablosuyla bir güç kaynağına bağla; ilk şarjı dört saat yap, ışık sönünce şarj bitmiştir."
  - "Silikon hortumu ve paslanmaz çelik çıkış borusunu kılavuzdaki şemaya göre pompaya tak."
  - "Damacananın üst kapağını çıkarmadan pompayı ağzına bastırarak yerleştir; gerekirse yalnız küçük geçme halkasını sivri bir aletle aç."
  - "Silikon hortumun şişenin kenarlarına denk gelmediğinden ve su girişini kapatmadığından emin ol."
  - "Bardağı çıkış borusunun altına tut, aç kapa düğmesine basıp suyu pompala, durdurmak için tekrar bas."
  - "Pompa çalışmıyorsa şarj et, şişede su olduğuna ve hortumun serbest durduğuna bak."
  - "Temizlikten önce şarj kablosunu çıkar, gövdeyi nemli bezle sil, çıkış borusunu ılık sabunlu suyla yıka."
faq:
  - q: "Kiwi su pompası kaç saatte şarj olur?"
    a: "Kiwi kılavuzuna göre ilk dolum dört saat olmalı; sonrasında iki üç saatlik şarj kullanmak için yeterli. Şarj sırasında gösterge kırmızı yanar, cihaz tamamen şarj olunca gösterge ışığı söner."
  - q: "Kiwi su pompası damacanaya nasıl takılır?"
    a: "Kiwi damacananın üst kapağının çıkarılmamasını istiyor; pompa bastırıldığında yerine girer. Gerekirse su sebili için olan küçük geçme halkasını sivri bir aletle açarsın. Silikon hortum şişenin kenarlarına denk gelmemeli ve su girişini engellememeli."
  - q: "Kiwi su pompası çalışmıyor, ne yapmalıyım?"
    a: "Önce pompayı şarj et; ilk şarj dört saat. Şişede su olduğundan emin ol; Kiwi şişe boşken pompanın hasarı ve güç tüketimini önlemek için kullanılmamasını istiyor. Hortumun şişe kenarına yaslanıp su girişini kapatmadığına bak. Yine çalışmıyorsa kılavuz kendin onarmamanı, yetkili servis merkezine başvurmanı istiyor."
  - q: "Kiwi KWP-8521'de su miktarı nasıl ayarlanır?"
    a: "KWP-8521'in gövdesinde bir su miktarı ayarı var. Kılavuza göre su miktarını seçtikten sonra pompa o miktarı verip kendiliğinden durur. KWP-8513 ve KWP-8520'de ise pompalamayı durdurmak için düğmeye yeniden basılır."
  - q: "Kiwi su pompası suya batırılır mı?"
    a: "Hayır. Kiwi ana gövdenin suya batırılmamasını istiyor. Gövdeyi yumuşak nemli bir bezle silip kurumaya bırakırsın; paslanmaz çelik çıkış borusunu ılık sabunlu suyla temizleyip kurutursun."
images:
  coverAlt: "Mutfak tezgâhındaki dolu bir damacananın ağzına takılmış beyaz bir şarjlı su pompası ve altında bir bardak"
  steps:
    - "Çizim: solda damacana su pompası, sağda ambalaj kutusu"
    - "Çizim: solda damacana su pompası, sağda USB bellek ve güncelleme"
    - "Çizim: solda damacana su pompası, sağda duvar giderine giden hortum"
    - "Çizim: solda damacana su pompası, sağda kapak"
    - "Çizim: solda damacana su pompası, sağda duvar giderine giden hortum"
    - "Çizim: solda damacana su pompası, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda damacana su pompası, sağda şarj edilen batarya"
    - "Çizim: solda damacana su pompası, sağda şarj edilen batarya"
---

Kiwi'nin şarjlı su pompası damacanayı kaldırıp devirmeden bardağa su almak için var: damacananın ağzına oturtuyorsun, düğmeye basınca su çıkış borusundan akıyor. Arama önerilerinde "kurulumu", "nasıl takılır" ve "kaç saatte şarj olur" birlikte geçiyor. Kiwi'nin kılavuzu kurulumu büyük ölçüde resimle anlatıyor, ama metinde üç kural açık: **ilk şarj dört saat, damacananın kapağı çıkarılmaz, hortum şişe kenarına yaslanmaz.** Bu yazı Kiwi'nin **KWP-8520, KWP-8513 ve KWP-8521** Türkçe kılavuzlarına dayanıyor.

> ⚡ **Kısa özet:** Parçaları çıkar, hasara bak. İlk şarjı dört saat yap; ışık sönünce dolmuştur. Hortumu ve çıkış borusunu şemaya göre tak. Damacananın kapağını açmadan pompayı ağzına bastır. Hortum şişe kenarına değmesin. Düğmeye bas, su akar; tekrar bas, durur. Şişe boşken çalıştırma. Gövdeyi suya batırma.

## Senin modelin hangisi?

| Model | Kılavuzdan öne çıkan |
|---|---|
| KWP-8520 | Li-ion pil, paslanmaz çelik çıkış borusu, düğmeyle başlat ve durdur |
| KWP-8513 | Ni-mh pil, su çıkış borusu, düğmeyle başlat ve durdur |
| KWP-8521 | Li-ion pil, su miktarı ayarı; seçilen miktarı verip kendiliğinden durur |

Model kodu kılavuzun kapağında ve garanti belgesinde yazar; kendi modelini bu tablodan bul. Aşağıdaki adımlar üç modelde de aynı sırayla işliyor. Üç modelin parçaları aynı mantıkta: aç kapa düğmesi, şarj gösterge lambası, USB girişi, silikon su hortumu ve su çıkış borusu.

## Adım adım: kutudan ilk bardağa

**1. Parçaları kontrol et.** Kutudaki bütün parçaları dikkatle ambalajından çıkar ve ürünün hasar görüp görmediğini incele. Kiwi hasarlı bir üniteyi açmamanı, hasarlı bir USB kablosunu ya da fişi kullanmamanı istiyor.

**2. İlk şarjı yap.** USB kablosunu pompaya, diğer ucunu bir güç kaynağına bağla. Şarj sırasında gösterge kırmızı yanar; cihaz tamamen şarj olunca gösterge ışığı söner. Kiwi'ye göre ilk dolum dört saat olmalı, sonrasında iki üç saatlik şarj kullanmak için yeterli. Şebeke voltajının şarj adaptörünün tip plakasındaki değere uyduğundan emin ol.

**3. Hortumu ve boruyu tak.** Silikon su hortumunu su borusu girişine, su çıkış borusunu kendi yerine tak. Kiwi'nin kılavuzu montajı şema ile gösteriyor ve cihazın talimatlara göre monte edilmesini istiyor; kendi kılavuzundaki resme göre ilerle.

**4. Damacanaya oturt.** Damacananın üst kapağını çıkarma. Kiwi'ye göre pompa bastırıldığında yerine girer. Gerekirse yalnız su sebili için olan küçük geçme halkasını sivri bir aletle aç.

**5. Hortumun yerine bak.** Silikon hortum şişenin içinde kenarlara denk gelmemeli; su girişini engellemeyecek şekilde serbest durmalı. Kiwi bunu montajın en önemli uyarısı olarak yazıyor.

**6. Suyu pompala.** Bardağı çıkış borusunun altına tut ve aç kapa düğmesine bas; pompa şişeden su çekmeye başlar. Durdurmak için düğmeye tekrar bas. KWP-8521'de su miktarını seçebilirsin, pompa o miktarı verip kendiliğinden durur. Ünite çalışırken hareket eden parçalara dokunma.

**7. Çalışmıyorsa kontrol et.** Pompa su çekmiyorsa önce şarj et. Sonra şişede su olduğuna bak; Kiwi şişe boşken pompanın hasar ve güç tüketimi yüzünden kullanılmamasını istiyor. Hortumun şişe kenarına yaslanıp su girişini kapatmadığını kontrol et. Bunlara rağmen çalışmıyorsa cihazı kendin onarmaya çalışma; Kiwi yetkili servis merkezine başvurmanı istiyor.

**8. Temizle.** Temizlik ya da bakımdan önce şarj kablosunu daima çıkar. Ana gövdeyi suya batırma; dışını yumuşak, nemli bir bezle silip kurumaya bırak. Paslanmaz çelik su çıkış borusunu ılık sabunlu suyla yıkayıp kurumaya bırak. Kılavuz mikrofiber bezin de ılık sabunlu suyla yıkanıp kurumaya bırakılmasını yazıyor.

## Kullanırken dikkat

Kiwi pompanın radyatör ve fırın gibi ısı kaynaklarından uzak, doğrudan güneş ışığı ve nemden korunarak kullanılmasını istiyor. Pompaya ıslak ya da nemli ellerle dokunma, şarj kablosundan çekerek çıkarma; fişi kavrayıp çek. Pili 40 derecenin üzerindeki sıcaklıklara maruz bırakma. Kullanmadığın zamanlarda şarj kablosunu çıkar. Pompa ev içi kullanım için; ticari kullanıma uygun değil.

Kılavuzun güvenlik bölümü birkaç kural daha sayıyor. Pompayı açıkken gözetimsiz bırakma ve yalnız üreticinin önerdiği aksesuarları kullan. Şarj kablosunu ve cihazı düzenli olarak hasara karşı kontrol et; hasarlı bir üniteyi açma. Pompa düzgün çalışmıyorsa güç kaynağını kapat ve yetkili bir servise başvur. Piller hasar görmüşse bir tehlikeyi önlemek için üretici ya da yetkili servis değiştirmeli; kılavuz farklı pil kullanılmasını da önermiyor.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Şarj, hortum yerleşimi, boş şişe | Senin, bu yazıdaki adımlar |
| Çıkış borusu ve gövde temizliği | Senin |
| Şarj olan, şişesi dolu pompa hiç çalışmıyor | Kiwi yetkili servis merkezi |
| Hasarlı USB kablosu ya da fiş | Kullanma; yetkili servis onarır ya da değiştirir |

⛔ Pompayı açmaya, pili kendin değiştirmeye çalışma. Elektrikli bir damacana sebilin varsa [Kiwi su sebili nasıl temizlenir](/blog/kiwi-su-sebili-nasil-temizlenir/) yazısına, sebilden su gelmiyorsa [Uğur su sebili su vermiyor](/blog/ugur-su-sebili-su-vermiyor/) yazısına bakabilirsin.

---

**Kaynak künyesi.** Şarj, montaj uyarıları, kullanım, su miktarı ayarı, temizlik ve güvenlik bilgileri Kiwi'nin Türkçe kullanım kılavuzlarından (KWP-8520, KWP-8513, KWP-8521) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

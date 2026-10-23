---
title: "Kiwi buharlı ütü buhar vermiyor: kılavuza göre 8 kontrol"
description: "Kiwi buharlı ütü buhar vermiyorsa Kiwi kılavuzuna göre su, en yüksek sıcaklık, gösterge ışığı, buhar düğmesi, şok buhar ve buhar deliği kontrolü."
slug: "kiwi-buharli-utu-buhar-vermiyor"
date: "2026-10-23"
category: "Küçük Ev Aletleri"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 3, küme K2). Konu: origin/main (1c05771) slug ve başlıkta "kiwi" yok; tek ütü yazısı philips-utu-buhar-vermiyor (başka marka, başka kılavuz).
# Arama kanıtı (#164, bu koşuda suggestqueries client=firefox hl=tr gl=tr): "kiwi buharlı ütü buhar" → 1. "kiwi buharlı ütü buhar vermiyor"; "kiwi buharlı ütü" → 5. aynı ifade.
# GSC: https___www-3..6 Sorgular.csv içinde "kiwi" satırı yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile static.kiwi.com.tr'den indirildi, hepsi HTTP 200. #88: yalnız Kiwi'nin kendi kılavuzları. Okuma pdftotext, sayfa = PDF sayfası.
#  (A) KSI-6322 Buharlı Ütü kılavuzu 12 s.  md5 a605173e5bfb86ae34069a0555c4e0ec  TR s.6-7, 9
#  (B) KSI-6347 Buharlı Ütü kılavuzu 12 s.  md5 ed83155f3b7f266f2105835a0e20c6c5  TR s.6-7 (A ile aynı metin)
#  (C) KSI-6357 Akıllı Buharlı Ütü kılavuzu 12 s.  md5 fb28282333df664b2aaca5fd8fc3e77a  TR s.6-7 (otomatik kapanma)
#  (D) KSI-6323 Akıllı Buharlı Ütü föyü 2 s.  md5 ed6ded79918e52bcdbfcb5c13a155f3c  TR sütunu s.2 (otomatik kapanma)
#  (E) KSI-6317 Seyahat Tipi Buharlı Ütü kılavuzu 12 s.  md5 a7e6828665fd27c455136e66e5723d6c  TR s.6-7 (PUSH, buhar deliği temizliği)
# BİLEREK YAZILMAYANLAR: kendini temizleme düğmesinin kullanımı (parça listesinde var, kılavuzlarda tarifi yok) · sirke/kireç çözücüyü hazneye koyma · pompa/rezistans/termostat teşhisi · gövde açma · su tipi önerisi (buharlı ütü kılavuzlarında yok) · fiyat (#46).
# Alıntı denetim tablosu: kiwi-buharli-utu-buhar-vermiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Ölçü kabı", "Temiz su", "Pamuklu çubuk", "Yumuşak nemli bez", "Ütünün kullanım kılavuzu"]
steps:
  - "Ütünün fişini çek, ütüyü dik tut ve su haznesini ölçü kabıyla MAX seviyesine kadar doldur."
  - "Sıcaklık kadranını en yüksek konuma, üç noktaya ya da max işaretine getir."
  - "Fişi tak ve gösterge ışığının sönmesini bekle; ışık sönünce ütü seçilen sıcaklığa ulaşmıştır."
  - "Buhar ayar düğmesini açık konuma getir; kapalı konumda haznede su olsa da buhar çıkmaz."
  - "Şok buhar düğmesine art arda üçten fazla basma, her basıştan sonra birkaç saniye bekle."
  - "Akıllı modelde gösterge ışığı yanıp sönüyorsa ütü kendini kapatmıştır; ütüyü hareket ettir ve yeniden ısınmasını bekle."
  - "Fişi çekip ütü soğuyunca taban plakasındaki buhar deliklerini suyla nemlendirilmiş pamuklu çubukla temizle."
  - "Bu adımlardan sonra da buhar gelmiyorsa ütüyü kapat, fişini çek ve Kiwi yetkili servisine başvur."
faq:
  - q: "Kiwi buharlı ütü neden buhar vermez?"
    a: "Kiwi kılavuzlarına göre buharlı ütüleme yalnızca sıcaklık kontrolünde en yüksek sıcaklık seçildiğinde mümkündür. Haznede yeterli su yoksa, buhar düğmesi kapalıysa ya da gösterge ışığı henüz sönmediyse buhar gelmez. Damlama önleme sistemi de sıcaklık çok düşükken buharı kendiliğinden durdurur."
  - q: "Kiwi ütüde damlama önleme sistemi ne yapar?"
    a: "Kiwi KSI-6322, KSI-6347, KSI-6357 ve KSI-6323 kılavuzlarına göre sıcaklık çok düşük olduğunda tabandan su damlamasını önlemek için cihaz buhar vermeyi otomatik olarak durdurur. Yani düşük sıcaklıkta buharın kesilmesi bir arıza değil, bu sistemin çalışmasıdır."
  - q: "Kiwi akıllı ütü kendi kendine kapanıyor, bozuk mu?"
    a: "Değil. KSI-6357 ve KSI-6323 kılavuzlarına göre ütü yatay konumda 30 saniye ya da dikey konumda 8 dakika hareket ettirilmezse otomatik kapanır ve gösterge ışığı yanıp söner. Ütüyü tekrar hareket ettirdiğinde ısınmaya başlar."
  - q: "Kiwi ütünün kirecini nasıl temizlerim?"
    a: "Kiwi'nin buharlı ütülerinde haznenin içindeki özel filtre suyu yumuşatır ve tabanda kireç oluşumunu engeller; filtre kalıcıdır, değiştirilmez. KSI-6317 kılavuzu buhar deliklerindeki tortu için suyla nemlendirilmiş pamuk uç ya da hafif bir kireç çözme solüsyonu öneriyor; keskin nesne ve metal fırça kullanılmaz."
  - q: "Şok buhar düğmesine basıyorum ama buhar zayıf çıkıyor."
    a: "Kiwi kılavuzu en iyi buhar kalitesi için her seferinde art arda üçten fazla şok buhar kullanılmamasını ve tekrar basmadan önce buharın nüfuz etmesi için birkaç saniye beklenmesini istiyor. Şok buhar için de sıcaklık seçicinin max konumunda olması ve pilot ışığın sönmesi gerekiyor."
images:
  coverAlt: "Ütü masasının üzerinde dik duran, şeffaf su hazneli bir buharlı ütü ve katlanmış pamuklu bir gömlek"
  steps:
    - "Ölçü kabından şeffaf su haznesine su doldurulan dik duran bir buharlı ütü"
    - "Buharlı ütünün sapındaki sıcaklık kontrol kadranının yakın planı"
    - "Prize takılı buharlı ütünün sapındaki gösterge ışığı"
    - "Buharlı ütünün üst kısmındaki buhar ayar düğmesi"
    - "Askıdaki bir gömleğe doğru yükselen buhar bulutu"
    - "Ütü masasında yatay duran, gösterge ışığı yanıp sönen bir ütü"
    - "Seramik ütü tabanındaki buhar deliklerinin yakın planı ve yanında pamuklu çubuk"
    - "Fişi çekilmiş, kablosu toplanmış bir buharlı ütü ve yanında kullanım kılavuzu"
---

Kiwi buharlı ütün ısınıyor, gömlek de düzleşiyor, ama tabandan buhar gelmiyor. Kiwi'nin Türkçe kullanım kılavuzları bu durumu ayrı bir arıza başlığıyla ele almıyor. Buna karşın buharın hangi koşulda çıktığını ve hangi koşulda bilerek kesildiğini açıkça yazıyor. Bu yazı o koşulları **KSI-6322, KSI-6347, KSI-6357, KSI-6323 ve KSI-6317** kılavuzlarından sırayla topluyor. Kılavuzların en önemli cümlesi şu: buharlı ütüleme **yalnızca en yüksek sıcaklık seçildiğinde** mümkün.

> ⚡ **Kısa özet:** Fişi çekip hazneyi MAX'a kadar doldur. Kadranı en yüksek sıcaklığa al ve gösterge ışığının sönmesini bekle. Buhar düğmesini aç. Şok buhara art arda üçten fazla basma. Akıllı modelde ışık yanıp sönüyorsa ütü kendini kapatmıştır; hareket ettir. Buhar delikleri tortuluysa ütü soğukken nemli pamukla temizle.

## Kiwi kılavuzunda buharın kesildiği durumlar

| Durum | Kılavuza göre ne oluyor | Ne yaparsın |
|---|---|---|
| Buhar ayar düğmesi kapalı | Haznede su olsa dahi buhar çıkışı engellenir | Düğmeyi açık konuma getir |
| Sıcaklık en yüksek değil | Buharlı ütüleme mümkün değil; tabandan su kaçabilir | Kadranı en yüksek konuma al |
| Sıcaklık çok düşük | Damlama önleme sistemi buharı otomatik durdurur | Isınmayı bekle |
| Ütü hareketsiz kaldı (KSI-6357, KSI-6323) | Ütü otomatik kapanır, gösterge ışığı yanıp söner | Ütüyü hareket ettir |
| Haznede yeterli su yok | Buharlı ütülemenin ilk şartı karşılanmıyor | Fişi çekip su doldur |

Kiwi'nin üç noktalı kadranında "•" naylon ve asetat, "••" yün, ipek ve karışımlar, "•••" pamuk ya da keten için. Kılavuz yalnız üçüncü konumun yanına "(buhar)" yazıyor.

## Adım adım: evde denenecekler

**1. Hazneyi doldur.** Ütünün fişini çek, ütüyü dik tut ve su haznesini ölçü kabıyla MAX seviyesine kadar doldur. Kiwi, su haznesi doldurulmadan önce fişin prizden çekilmesini ve kullanım sırasında haznenin açılmamasını istiyor.

**2. Kadranı en yükseğe al.** Sıcaklık kadranını en yüksek konuma, yani üç noktaya ya da max işaretine getir. Kılavuza göre daha düşük bir konumda buharlı ütüleme mümkün değildir ve tabandan su kaçabilir. Karışık kumaşta kılavuz polyestere uygun ve buharsız sıcaklığı öneriyor; böyle bir kumaşta buhar beklenmez.

**3. Işığın sönmesini bekle.** Fişi tak ve termostat gösterge ışığının sönmesini bekle. Kiwi'ye göre ışık yanarak ısınmanın başladığını gösterir, söndüğünde ütü istenen sıcaklığa ulaşmıştır.

**4. Buhar düğmesini aç.** Buhar ayar düğmesini açık konuma getir. Kılavuzdaki kuru ütüleme tarifi tam tersini anlatıyor: düğme kapalı konumdayken su tankında su olsa dahi buhar çıkışı engellenir. Ütü yeni ise ilk kullanımdan önce bu düğmenin kapatıldığını da hatırla; kılavuz bunu ilk dolumda su akıtmasın diye istiyor.

**5. Şok buharı doğru kullan.** Şok buhar düğmesine art arda üçten fazla basma, her basıştan sonra birkaç saniye bekle. Kiwi bunu en iyi buhar kalitesi için şart koşuyor. Şok buhar için de kadran max konumunda olmalı ve pilot ışığı sönmüş olmalı. Askıdaki elbise ya da perdeyi dikey ütülemek için ütüyü kumaşın karşısında tutup aynı düğmeye basarsın; üzerindeki giysiyi asla ütüleme.

**6. Otomatik kapanmaya bak.** KSI-6357 ya da KSI-6323 gibi akıllı bir modelin varsa ve gösterge ışığı yanıp sönüyorsa ütü kendini kapatmıştır. Kılavuza göre yatay konumda 30 saniye ya da dikey konumda 8 dakika hareket ettirilmeyen ütü ısıtmayı keser. Ütüyü hareket ettir; ışık yanar ve ütü yeniden ısınır.

**7. Buhar deliklerini temizle.** Fişi çek ve ütünün tamamen soğumasını bekle. KSI-6317 kılavuzu buhar deliklerinde biriken tortular için suyla nemlendirilmiş pamuk uç ya da hafif bir kireç çözme solüsyonu öneriyor. Taban plakasına zarar vermemek için keskin bir nesne ya da metal fırça kullanma. Gövdeyi yumuşak nemli bir bezle sil; aşındırıcı deterjan ve kimyasal kullanma.

**8. Servise başvur.** Bu adımlardan sonra da buhar gelmiyorsa ütüyü kapat, fişini çek ve Kiwi yetkili servisine başvur. Kılavuzun güvenlik bölümü cihaz düzgün çalışmıyorsa güç kaynağının kapatılmasını ve yetkili bir servise başvurulmasını istiyor.

## Kireç önleme filtresi ne işe yarar?

KSI-6322, KSI-6347, KSI-6357 ve KSI-6323 kılavuzlarına göre şeffaf su haznesinin içindeki özel filtre suyu yumuşatır ve tabanda kireç oluşumunu engeller. Filtre kalıcıdır, değiştirilmesi gerekmez. Bu ütülerde parça listesinde bir **kendini temizleme düğmesi** de görünüyor, ama Türkçe kılavuz metni bu düğmenin nasıl kullanılacağını anlatmıyor. Düğmeyi denemeden önce kendi kılavuzunun resimli sayfasına bak. Saklamadan önce haznede kalan suyu boşalt; Kiwi bunu da istiyor.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Boş hazne, düşük sıcaklık, kapalı buhar düğmesi, otomatik kapanma | Senin, bu yazıdaki adımlar |
| Tortulu buhar delikleri | Senin; ütü soğukken nemli pamukla |
| Ütü düştü, gözle görülür hasar var ya da sızdırıyor | Kullanma; Kiwi yetkili servisi |
| Güç kablosu hasarlı | Üretici ya da yetkili servis değiştirir |

⛔ Ütünün gövdesini açmaya çalışma, hazneye su dışında bir şey koyma. Ütü bu sefer buhar yerine tabandan su akıtıyorsa [Kiwi ütü su akıtıyor](/blog/kiwi-utu-su-akitiyor/) yazısına, askıda kullanılan buharlayıcı için [Kiwi kırışık giderici nasıl kullanılır](/blog/kiwi-kirisik-giderici-nasil-kullanilir/) yazısına bakabilirsin. Başka bir markada aynı belirti için [Philips ütü buhar vermiyor](/blog/philips-utu-buhar-vermiyor/) yazısı var.

---

**Kaynak künyesi.** Buharın çıktığı ve kesildiği koşullar, şok buhar kuralı, otomatik kapanma, kireç önleme filtresi ve temizlik bilgileri Kiwi'nin Türkçe kullanım kılavuzlarından (KSI-6322, KSI-6347, KSI-6357, KSI-6323, KSI-6317) alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

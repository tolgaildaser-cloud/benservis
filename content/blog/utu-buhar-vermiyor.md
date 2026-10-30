---
title: "Ütü buhar vermiyor: Tefal ve Philips'in kontrol sırası"
description: "Buharlı ütü buhar vermiyor ya da çok az veriyor mu? Tefal ve Philips belgelerine göre su, ısınma, sıcaklık ayarı, buhar düğmesi, kireç ve servis sınırı."
slug: "utu-buhar-vermiyor"
date: "2026-10-30"
category: "Küçük Ev Aletleri"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (YK #197 boşluk yazıları, grup D, yedek konu 2 — birden fazla markalı reset yazısı düştü).
# BOSLUK.md #232: "ütü buhar vermiyor (jenerik + Tefal, kazanlı)" BL · OT "ütü neden" #2; "ütü buhar vermiyor" #1–#10.
# Envanter: origin/main'de genel "ütü buhar vermiyor" yok. Yakın markalı: philips-utu-buhar-vermiyor, kiwi-buharli-utu-buhar-vermiyor, tefal-utu-kirec-temizleme, tefal-utu-anti-calc-isigi-yanip-sonuyor.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile üreticinin kendi alan adından indirildi, hepsi HTTP 200. Ham dosyalar _kaynak/utu-buhar-vermiyor/.
#  (T1) Tefal SSS — Ütüler  https://www.tefal.com.tr/sss-utuler
#  (T2) Tefal buharlı ütü güvenlik kitapçığı 1820015846-Safety.pdf, 53 s., md5 0bf85187883ff43b8a9e736bd5db7362 — TR sorun tablosu PDF s.22
#  (P1) Philips "Philips Buharlı Ütüm buhar üretmiyor"  philips.com.tr/c-t/XC000019029
#  (P2) Philips "Philips Buharlı Ütümün kirecini nasıl temizlerim?"  philips.com.tr/c-f/XC000021307
# BİLEREK YAZILMAYANLAR: ücret (#46) · pompa/termostat/buhar odası teşhisi, ütüyü açma · Philips buhar kazanlı sayfası (XC000019024 metni bu koşuda HTML'den ayıklanamadı, kullanılmadı) · Quick Calc Release model listeleri.
# Alıntı denetim tablosu: utu-buhar-vermiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Musluk suyu", "Lavabo", "Bez"]
steps:
  - "Su haznesinde su olup olmadığına bak; boşsa doldur."
  - "Sıcaklık göstergesi ışığı sönene kadar bekle; ütü ancak o zaman buhara hazır olur."
  - "Sıcaklık kadranını buhar bölgesine al; Philips'te iki nokta, üç nokta ya da LINEN, Tefal'de üç nokta ya da MAX."
  - "Buhar kaydırıcısının ya da buhar düğmesinin kapalı konumda olmadığını kontrol et."
  - "Hazneyi yeni doldurduysan ya da kireç önleyici kartuşu yeni taktıysan Tefal'in tarifiyle buhar düğmesini kumaştan uzakta bir süre basılı tut ve kartuşun yerine oturduğundan emin ol."
  - "Buhar azaldıysa kireç birikmiş olabilir; Tefal'de kireç önleyici çubuğu temizle ve otomatik temizlik uygula."
  - "Philips'te kendi kendini temizleme işlevini lavabo üzerinde, fiş çekiliyken uygula."
  - "Bu adımlara rağmen buhar gelmiyorsa üreticinin servisine başvur."
faq:
  - q: "Ütü ısınıyor ama buhar vermiyor, neden?"
    a: "Philips'e göre ütü buhar vermeye henüz hazır olmayabilir; turuncu sıcaklık göstergesi ışığı sönene kadar beklemek gerekir. Kadran bir nokta, SYNTH ya da kireç temizleme konumundaysa Philips ütü buhar üretmez. Tefal de seçilen sıcaklıkta buhar oluşturulamıyorsa termostatın buhar alanına alınmasını istiyor."
  - q: "Ütü çok az buhar veriyor, kireç mi?"
    a: "Tefal'in Türkçe sorun tablosunda ütünün buhar püskürtmemesi ya da çok az püskürtmesinin nedeni kireç oluşumu. Çözüm kireç önleyici çubuğu temizlemek ve otomatik temizlik uygulamak. Philips de kirecin bir ya da iki ayda bir temizlenmesinin buhar çıkışını en yüksek seviyede tuttuğunu yazıyor."
  - q: "Yeni doldurdum, buhar hemen gelmiyor. Normal mi?"
    a: "Tefal'in SSS sayfasına göre hazneyi yeni doldurduysan, kireç önleyici kartuşu yeni değiştirdiysen ya da cihazı yeni kullanmaya başladıysan buhar düğmesini birkaç dakika basılı tutup suyun pompaya gitmesini beklemen gerekir. Bu sırada ütüyü kıyafetten uzak tut."
  - q: "Philips ütüde kendi kendini temizleme nasıl yapılır?"
    a: "Philips'e göre hazneyi doldurup açarsın, ayarlanabiliyorsa MAX TEMP ve NO STEAM seçersin. Işık sönünce fişi çeker, ütüyü lavabonun üzerinde tabanı yatay tutarsın. CALC CLEAN'i etkinleştirir, ütüyü boşalana kadar hafifçe sallarsın. Sonra ütüyü ısıtıp tabanı bir bez üzerinde kaydırırsın."
images:
  coverAlt: "Ütü masası üzerinde tabanından hiç buhar çıkmayan buharlı bir ütünün sade çizimi"
  steps:
    - "Ütünün şeffaf su haznesine sürahiden su dolduran beyaz eldivenli sade siluet el"
    - "Ütü masasında duran ütü ve üzerindeki gösterge ışığının sönmekte olduğu sade çizim"
    - "Ütünün sıcaklık kadranını buhar bölgesine çeviren beyaz eldivenli sade siluet el; kadranda yalnız nokta işaretleri"
    - "Ütünün tutma yerinin üstündeki buhar kaydırıcısını açık konuma iten beyaz eldivenli sade siluet el"
    - "Ütüyü kumaştan uzakta havada tutup buhar düğmesine basılı tutan beyaz eldivenli sade siluet el ve yanında kum saati simgesi"
    - "Ütünün yanında çıkarılmış ince kireç önleyici çubuk ve üzerindeki beyaz tortu çizimi"
    - "Fişi çekilmiş ütüyü lavabonun üzerinde tabanı yatay tutan beyaz eldivenli sade siluet el; taban deliklerinden su ve tortu akıyor"
    - "Fişi çekilmiş ütü ve yanında servis anahtar simgesi"
---

Ütü ısınıyor, ışığı yanıyor ama tabandan buhar çıkmıyor; ya da buhar eskisine göre çok zayıf. "Ütü buhar vermiyor" diye arayanlar için bu yazıda iki üreticinin kendi Türkçe belgelerini yan yana koyduk: **Tefal**'in ütüler için sık sorulan sorular sayfası ve buharlı ütü sorun tablosu, ve **Philips Türkiye**'nin iki destek makalesi. Adımların hepsi bu belgelerden. İki üreticinin farklı yazdığı yerleri ayrıca belirttik.

> ⚠️ **Güvenlik sınırı:** Su doldurmadan ve temizlemeden önce ütünün fişini çek. Ütüyü açmak, pompa ya da termostat tarafına müdahale etmek bu listenin parçası değil; o kısım servis işi.

## Adım adım: ütü buhar vermiyorsa kontrol sırası

**1. Haznede su var mı, bak.** En basit neden en başta. Philips'e göre su haznesinde su yoksa ütü **buhar üretemez**; hazneye su doldurduğunda ütü tekrar çalışır. Tefal'in SSS'sinde de "su tankı boş" satırının çözümü tek kelime: tankı doldur.

**2. Isınmasını bekle.** Philips'e göre ütü buhar vermeye **hazır olmayabilir**. Turuncu renkli **sıcaklık göstergesi** ışığı sönene kadar bekle; ardından ütü buhar üretmeye hazır hale gelir. Philips'in notu: OptimalTemp özellikli ütülerde ütü buhara hazır olduğunda **ütü hazır ışığı sabit** yanar.

**3. Sıcaklık kadranını buhar bölgesine al.** Philips'e göre kadranlı ütülerde kadran **iki nokta, üç nokta ya da LINEN** konumunda olmalı. Kadran **bir nokta, SYNTH** ya da **Kireç Temizleme** konumundayken ütü buhar üretmez. Tefal'in SSS'si de seçtiğin sıcaklıkta buhar oluşturulamıyorsa termostatı buhar alanına, yani **••• ya da MAX** konumuna ayarlamanı istiyor.

**4. Buhar ayarını aç.** Philips'te buharın kapalı olmasının bir nedeni de buhar ayarının **"buhar kapalı"** konumunda kalması. Ütüyü yukarı kaldır ve tutma yerinin üst kısmındaki **buhar kaydırıcısını** kullanarak buhar ayarını seç.

**5. Yeni doldurduysan suyun yola girmesini bekle.** Bu adım Tefal'in SSS sayfasından ve pompalı modeller içindir. Hazneyi yeni doldurduysan, **kireç önleyici (anti-calc) kartuşu** yeni değiştirdiysen ya da cihazı yeni kullanmaya başladıysan buhar düğmesini **2 ya da 3 dakika** basılı tut; pompaya su gitmesi için ütüyü kıyafetten uzak tut. Kartuş **takılı değilse ya da yanlış takıldıysa** da buhar gelmez; kartuşun takılı olduğundan ve bölmeye tam oturduğundan emin ol.

**6. Kireci düşün.** Tefal'in Türkçe sorun tablosunda ütünün **buhar püskürtmemesi ya da çok az püskürtmesinin** nedeni **kireç oluşumu**. Çözüm: **kireç önleyici çubuğu temizle** ve **otomatik temizlik** uygula. Tefal'in SSS'si de buhar çıkışı azalıyorsa cihazda kireç birikmesi olduğunu yazıyor. Çubuğun nasıl çıkarıldığını [Tefal ütü kireç temizleme](/blog/tefal-utu-kirec-temizleme/) yazısında adım adım anlattık.

**7. Philips'te kendi kendini temizle.** Philips'e göre ütünün kirecini **bir ya da iki ayda bir** temizlemek buhar çıkışını en yüksek seviyede tutar. Philips'in tüm buharlı ütüleri için verdiği sıra şöyle: su haznesini doldur ve aç; ayarlanabiliyorsa **MAX TEMP** ve **NO STEAM** seç. Işık sönünce **fişi çek** ve ütüyü **lavabonun üzerinde, tabanı yatay** tut. Düğme ya da seçiciyle **CALC CLEAN**'i etkinleştir. Ütüyü boşalana kadar hafifçe ileri geri salla; buhar deliklerinden su, buhar ve kireç çıkar. Sonra ütüyü ısıt ve tabanı temizlemek için bir **bez üzerinde kaydır**.

**8. Hâlâ buhar yoksa servise başvur.** Philips, bu çözümler sorunu gidermediyse kendisiyle iletişime geçmeni istiyor. Tefal'in SSS'si de kartuş ve sıfırlama adımlarından sonra sorun sürerse **Yetkili Servis Merkezi**'ni gösteriyor.

## İki üretici nerede ayrışıyor?

İkisi de aynı üç temel nedeni sayıyor: boş hazne, yeterince ısınmamış taban ve buhar bölgesinin dışında kalan sıcaklık ayarı. Ayrıştıkları yer ayar ölçüsü: Philips iki nokta ve üzerini yeterli sayıyor, Tefal üç nokta ya da MAX diyor. Kireçte de yöntem farklı: Tefal çubuğu temizleyip otomatik temizlik istiyor, Philips CALC CLEAN ile kendi kendini temizleme tarif ediyor. Pompanın suyla dolması için buhar düğmesini basılı tutma adımı yalnız Tefal'in sayfasında var. Kendi ütünün kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Su, ısınma, sıcaklık ayarı, buhar kaydırıcısı, kartuş, kireç | Senin, bu yazıdaki adımlar |
| Temizliğe rağmen buhar gelmiyor | Üreticinin servisi |
| Cihazdan su ya da buhar sızıyor | Kullanma; yetkili servis |

Philips'e özel ayrıntılar için [Philips ütü buhar vermiyor](/blog/philips-utu-buhar-vermiyor/), Kiwi için [Kiwi buharlı ütü buhar vermiyor](/blog/kiwi-buharli-utu-buhar-vermiyor/) yazısına bakabilirsin. Kireç önleyici ışığı yanıp sönüyorsa [Tefal ütü anti-calc ışığı yanıp sönüyor](/blog/tefal-utu-anti-calc-isigi-yanip-sonuyor/) yazısına bak.

Ütün bu adımlara rağmen buhar vermiyorsa yakınındaki servisi Benservis'te bul. Bil, gör, çağır.

---

**Kaynak künyesi.** Tefal satırları Tefal Türkiye'nin "Ütüler" sık sorulan sorular sayfasından ve Tefal buharlı ütü güvenlik kitapçığının Türkçe "Ütünüzde sorun mu var?" tablosundan; Philips satırları Philips Türkiye'nin "Philips Buharlı Ütüm buhar üretmiyor" ve "Philips Buharlı Ütümün kirecini nasıl temizlerim?" destek sayfalarından alınmıştır.

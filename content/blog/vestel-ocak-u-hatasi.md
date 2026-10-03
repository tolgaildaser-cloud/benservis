---
title: "Vestel ocak U hatası: indüksiyon tencereyi görmüyor"
description: "Vestel indüksiyonlu ocakta göstergede U yanıyorsa ocak bölgede uygun tencere bulamıyor demektir. Mıknatıs ve su testi, taban, çap ve yerleşim kontrolleri."
slug: "vestel-ocak-u-hatasi"
date: "2026-10-03"
category: "Fırın / Ocak"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu, ocak). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile statik.vestel.com.tr'den indirildi, HTTP 200, yönlendirme 0.
#   Adres vestel.com.tr ürün sayfasındaki kullanım kılavuzu bağlantısından. Web araması yok. Sayfa = PDF sayfası (s.15 = basılı "TR - 14").
#  V1) Vestel AO-6470 S 60 cm indüksiyonlu ankastre ocak  https://statik.vestel.com.tr/webfiles/20210044_k.pdf  27 s.  md5 6e4db4a2cc90868aa9df9dc2c933f18f  (ürün: /vestel-ao-6470-s-ankastre-ocak-p-169)
# Ana satırlar: V1 s.22 "Pişirme bölgelerinden birinin göstergesinde 'U' sembolü yanıyor." / "Pişirme bölgesinin üzerinde tencere yoktur veya tencere uygun değildir." / "Uygun bir tencere kullanınız."
#   V1 s.15 "Pişirme kapları": "Çelik, emaye çelik, dökme demir ve paslanmaz çelikten mamul kalın, düz, pürüzsüz tabanlı, iyi kaliteli pişirme kapları kullanın." · "İçbükey ya da dışbükey
#   tabana sahip pişirme kapları kullanmayın. Ferromanyetik olmayan tabana sahip alüminyumdan ya da paslanmaz çelikten, camdan, bakırdan, seramikten, porselenden mamul pişirme kapları
#   indüksiyonlu ısıtma için uygun değildir." · "...pişirme kabının tabanına bir mıknatıs değdirin. Mıknatıs yapışıyorsa, genelde pişirme kabı uygun demektir. Ya da en yüksek ayardaki bir
#   pişirme bölümünün üzerinde duran bir pişirme kabının içine biraz su koymayı deneyin. Su birkaç saniyede ısınmalıdır." · "...tava pişirme bölümünün ortasına koyulmalıdır." ·
#   "...hiç tava koyulmazsa güç seviyesi seçildiğinde pişirme bölümünün ekranında [U] sembolü yanıp söner. 2 dakika sonra pişirme bölümü otomatik olarak kapanır." · "Pişirme bölümüne
#   uygun bir tava yerleştirilirse [U] sembolü söner..." · "Minumum pişirme kabı çapı, 160 mm'lik pişirme bölümleri için D120 mm, 210 mm'lik pişirme bölümleri için D140 mm ve 290 mm'lik
#   pişirme bölümleri için D160 mm olmalıdır." (s.15'teki sembol sayfa görüntüsünden U biçimli tencere simgesi olarak okundu; s.22 tablosunda metin olarak 'U'.)
# BİLEREK YAZILMAYANLAR: diğer markaların U/tencere kodları · AO-6470 dışındaki Vestel modellerine genelleme · E kodları · fiyat.
# Alıntı denetim tablosu: vestel-ocak-u-hatasi.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Mutfak mıknatısı", "Biraz su"]
steps:
  - "U yanan bölgenin üzerinde tencere olduğundan ve tencerenin bölgenin ortasında durduğundan emin ol."
  - "Tencerenin tabanına bir mıknatıs değdir; mıknatıs yapışıyorsa kap genelde uygundur."
  - "Mıknatısın yoksa tencereye biraz su koyup en yüksek ayarda dene; su birkaç saniyede ısınmalı."
  - "Alüminyum, cam, bakır, seramik ya da porselen kap yerine çelik, emaye çelik ya da dökme demir tabanlı kap kullan."
  - "İçbükey ya da dışbükey tabanlı kap yerine düz, pürüzsüz tabanlı kap seç."
  - "Kabın taban çapının bölgeye uygun olduğunu kontrol et; küçük kabı küçük bölgede kullan."
  - "Bölge 2 dakika sonra kendini kapattıysa uygun kabı yerleştirip bölgeyi yeniden seç."
faq:
  - q: "Vestel ocakta U ne demek?"
    a: "Vestel'in AO-6470 indüksiyonlu ocak kılavuzuna göre pişirme bölgesinin göstergesinde U yanıyorsa bölgenin üzerinde tencere yoktur ya da tencere uygun değildir. Çözüm: uygun bir tencere kullanmak. Uygun kap yerleştirildiğinde sembol söner ve pişirme seçilen güçte devam eder."
  - q: "U yanıp söndü, sonra ocak gözü kapandı."
    a: "Kılavuza göre bölgeye uygun olmayan bir tava konursa ya da hiç tava konmazsa, güç seviyesi seçildiğinde sembol yanıp söner ve 2 dakika sonra pişirme bölümü otomatik olarak kapanır. Uygun kabı koyup bölgeyi yeniden seçmen yeterli."
  - q: "Paslanmaz çelik tencerem neden çalışmıyor?"
    a: "Vestel'in kılavuzu tabanı ferromanyetik olmayan paslanmaz çelik kapların da indüksiyon için uygun olmadığını yazıyor. Belirleyici olan tabanın manyetik olması: mıknatıs tabana yapışıyorsa kap genelde uygundur."
  - q: "Küçük cezve ya da sütlük neden algılanmıyor?"
    a: "Kılavuz bölge boyuna göre en küçük kap çapını veriyor: 160 mm'lik bölge için 120 mm, 210 mm'lik bölge için 140 mm, 290 mm'lik bölge için 160 mm. Bunun altındaki tabanlar bölgeye uygun sayılmaz."
images:
  coverAlt: "İndüksiyonlu cam ocağın bir gözünde ortaya yerleştirilmiş düz tabanlı çelik tencere, yanında küçük bir mıknatıs"
---

Vestel indüksiyonlu ocakta bir gözü açtın, güç seviyesini seçtin ama göz ısıtmak yerine göstergesinde **U** yanıp sönüyor. Bu bir arıza kodu değil, ocağın tencereyle ilgili uyarısı. Vestel'in AO-6470 kılavuzundaki tablo anlamını tek satırda veriyor: **"Pişirme bölgesinin üzerinde tencere yoktur veya tencere uygun değildir."** Çözüm de aynı satırda: **"Uygun bir tencere kullanınız."**

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** U = ocak o bölgede uygun kap bulamıyor. Kap ortada mı → mıknatıs tabana yapışıyor mu (yoksa su testi) → malzeme çelik/dökme demir mi → taban düz mü → çap bölgeye yetiyor mu. Uygun kap konunca U söner.

## Adım adım: evde denenecekler

**1. Kabı bölgenin ortasına koy.** Kılavuza göre en iyi performans için tava **pişirme bölümünün ortasına** konmalı. U yanan bölgenin üzerinde gerçekten kap olduğundan ve kenara kaymadığından emin ol.

**2. Mıknatıs testi yap.** Vestel'in tarifi: **pişirme kabının tabanına bir mıknatıs değdir. Mıknatıs yapışıyorsa genelde kap uygun demektir.**

**3. Mıknatıs yoksa su testi yap.** Kılavuzun ikinci yolu: en yüksek ayardaki bir bölgenin üzerinde duran kabın içine **biraz su koy**; **su birkaç saniyede ısınmalı.**

**4. Malzemeye bak.** Önerilen kaplar **çelik, emaye çelik, dökme demir ve paslanmaz çelikten** yapılmış kalın tabanlı kaplar. Uygun olmayanlar: **ferromanyetik olmayan tabanlı alüminyum ya da paslanmaz çelik, cam, bakır, seramik ve porselen** kaplar. Yani paslanmaz çeliğin tabanı da manyetik değilse U yanar.

**5. Tabanı kontrol et.** Kılavuz **içbükey ya da dışbükey tabanlı** kapları kullanmamanı, **düz ve pürüzsüz tabanlı** kap seçmeni istiyor.

**6. Çapı bölgeye uydur.** Enerjinin iyi aktarılması için taban çapı bölgeye uygun olmalı. Vestel'in verdiği en küçük kap çapları:

| Pişirme bölgesi | En küçük kap tabanı |
|---|---|
| 160 mm | 120 mm |
| 210 mm | 140 mm |
| 290 mm | 160 mm |

AO-6470'in teknik tablosuna göre bu ocakta iki adet 16 cm ve iki adet 21 cm bölge var; küçük kabı 16 cm'lik bölgede dene.

**7. Kapanan bölgeyi yeniden seç.** Bölgeye uygun olmayan kap konursa ya da hiç kap konmazsa sembol yanıp söner ve **2 dakika sonra pişirme bölümü otomatik olarak kapanır.** Uygun kabı yerleştirince sembol söner ve pişirme seçilen güçte devam eder; bölge kapandıysa yeniden seçip gücü ayarla.

## U yanmıyor ama ses geliyorsa

AO-6470 tablosuna göre pişirme sırasında tavalardan gelen ses ya da ocaktan gelen tıkırdama **normaldir**; nedeni ocaktan kaba aktarılan enerjidir ve ne ocak ne kap için risk vardır. Kılavuz ayrıca indüksiyonlu ocakta kullanımdan sonra ocağı **kontrol düğmesiyle kapatmanı**, tencere algılayıcısına güvenip açık bırakmamanı istiyor.

Göz hiç açılmıyorsa ya da göstergede F, L veya t varsa kardeş yazıya bak: [Vestel elektrikli ocak çalışmıyor](/blog/vestel-ocak-calismiyor/). Markadan bağımsız liste: [cam seramik ocak ısınmıyor](/blog/cam-seramik-ocak-isinmiyor/).

## Ne zaman servis

- Mıknatısı tutan, düz tabanlı, bölgeye uygun çapta bir kapla da **U sönmüyorsa.**
- U yalnız bir bölgede, her uygun kapta sürekli yanıyorsa.
- Göstergede **E** ya da **C** ile başlayan bir kod çıkıyorsa.

Vestel'in yönlendirmesi: sorun sürüyorsa **Vestel İletişim Merkezi** ya da en yakın **Vestel Yetkili Servisi** ile iletişime geç.

⛔ **Kendin-çöz sınırı burada biter.** Kap seçimi, yerleşim ve bölge seçimi kullanıcıya; bobin, sensör ve kumanda kartı servise aittir.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

---
title: "Uğur bulaşık makinesi kurutmuyor"
description: "Uğur bulaşık makinesi bulaşıkları ıslak bırakıyorsa Uğur'un tablosu: parlatıcı haznesi ve göstergesi, parlatıcı ayarı, kapağı aralama ve eski ürün."
slug: "ugur-bulasik-makinesi-kurutmuyor"
date: "2026-10-03"
category: "Bulaşık makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki, Uğur). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile ugur.com.tr'den indirildi, HTTP 200, yönlendirme 0.
#   Adresler ugur.com.tr ürün sayfalarındaki "Kullanım Kılavuzu" indirme bağlantısından (göreli /Data/EditorFiles/docs/). Web araması yok. Sayfa = PDF sayfası.
#  B1) UBL 21014 G301 / B301  https://ugur.com.tr/Data/EditorFiles/docs/101103_KK.pdf  40 s.  md5 4251945165193e42f7e88a187e40b54d  (sayfa atıfları buna göre)
#  B2) UBL 10814 B501         https://ugur.com.tr/Data/EditorFiles/docs/101102_KK.pdf  40 s.  md5 1766f337c6f828de737b017448af406c
# Ana satırlar (B1 s.34 · B2 s.34):
#   "Bulaşıklar ıslak." → "Programda kurutma aşaması yoktu." / "Programda düşük sıcaklıklı kurutma aşaması vardı." → "Kurutma sürecine yardımcı olmak
#     için kapağı hafifçe aralayarak açık bırakınız (yaklaşık 100 mm)."
#   "Bulaşıklar ıslak ve mat." → "Parlatıcı haznesi boş." / "Parlatıcıyı hazneye doldurunuz ve parlatıcı göstergesini sıfırlayınız." · "Parlatıcı veya çok
#     fonksiyonlu tablet kalitesi." / "Temizlik ürünü çok eski; ürünü değiştiriniz."
#   "Bardaklarda ve bulaşıklarda kuru su damlası lekeleri" (B2: "kurumuş su damlası lekeleri var.") → "Parlatıcı dozajı çok düşük." / "Parlatıcının salınan
#     miktarını artırınız. PARLATICI İÇİN FARKLI AYARLAR bölümüne bakın."
#   Karşıt satır (B1 s.33): "Bardak ve tabaklarda beyaz çizgiler, lekeler veya mavimsi tabakalar var." → "Salınan parlatıcı miktarı çok fazla." / "Parlatıcı salınan
#     miktarını azaltınız." · "Deterjan miktarı çok fazla." · "Kısa programda kullanılan çok fonksiyonlu deterjan tabletleri tamamen çözünmeyebilir." / "...daha uzun bir program seçiniz."
# Parlatıcı (B1 s.16): "Parlatıcı, son durulama fazında bulaşıkların lekesiz ve iz bırakmadan kuruması için eklenir." · "Ayrı bir parlatıcı gerektirir: Fabrika
#   varsayılan ayarı: Ayar yapılmasına gerek yoktur." · çok fonksiyonlu tablet: "Durulama yardımcısı ayarı ... olarak ayarlanmalıdır." · "Değer ne kadar yüksekse, dozaj da o kadar fazla olur."
#   B1 s.17 "Kapağı kaldırarak açın ve parlatıcıyı hazneye dökün. MAX çizgisini geçecek şekilde doldurmayın. Kapağa veya deterjan haznesine dökülmemesine
#   dikkat edin." · "Kapağı kapatın ve tık sesi gelerek kapandığından emin olun." · "Yalnızca bulaşık makineleri için tedarik edilen parlatıcıları kullanın."
#   B1 s.22 "Parlatıcı göstergesi yanıyor: 1. Bir sonraki yıkama döngüsü başlamadan önce parlatıcı haznesini tamamen doldurunuz. 2. Parlatıcı eklendikten sonra,
#   gösterge ışığı söner." · B2 s.32 "Parlatıcıyı tamamen doldurunuz, ardından Parlatıcıyı sıfırlamak için Seçenek + [zamanlayıcı simgesi] tuşlarına basın
#   ve 3 saniye basılı tutunuz." (ikinci tuş belgede simge; sayfa görüntüsünden okundu)
#   B1 s.23 "Hasarı önlemek için program bittiği an bardak, çatal-bıçakları makineden çıkarmayınız."
# BİLEREK YAZILMAYANLAR: parlatıcı ayarının tuş tuş sırası (kılavuzda tuşlar simge; metinde adları yok → "Ayarlar Nasıl Yapılır" bölümüne yönlendirildi) ·
#   kademe numaraları (simge) · otomatik kapı açma (B1 s.18'de bir ayar satırında geçiyor, hangi modelde olduğu net değil) · ısıtıcı/fan teşhisi (belgede yok) · fiyat.
# Alıntı denetim tablosu: ugur-bulasik-makinesi-kurutmuyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Bulaşık makinesi parlatıcısı"]
steps:
  - "Parlatıcı göstergesi yanıyorsa haznenin kapağını kaldır ve parlatıcıyı MAX çizgisini geçmeyecek şekilde doldur."
  - "Hazne kapağını tık sesi gelene kadar kapat; parlatıcıyı kapağa ya da deterjan haznesine dökme."
  - "UBL 10814 B501'de parlatıcı göstergesini kılavuzdaki iki tuşa 3 saniye basılı tutarak sıfırla; UBL 21014'te gösterge parlatıcı eklenince kendiliğinden söner."
  - "Çok fonksiyonlu tablet kullanıyorsan parlatıcı ayarını kılavuzdaki Parlatıcı için Farklı Ayarlar bölümüne göre yap."
  - "Bulaşıklarda kuru su damlası lekesi varsa parlatıcı ayarını artır."
  - "Kurutma aşaması olmayan ya da düşük sıcaklıkta kurutan programdan sonra kapağı yaklaşık 100 mm aralık bırak."
  - "Parlatıcın ya da tabletin çok eskiyse yenisiyle değiştir."
faq:
  - q: "Uğur bulaşık makinesi neden bulaşıkları ıslak bırakıyor?"
    a: "Uğur'un UBL kılavuzlarına göre bulaşıklar ıslak çıkıyorsa nedenler programda kurutma aşamasının olmaması ya da düşük sıcaklıklı kurutma olması, parlatıcı haznesinin boş olması ve parlatıcı ya da çok fonksiyonlu tabletin kalitesi. Kılavuzun çözümleri parlatıcıyı doldurup göstergeyi sıfırlamak, eski ürünü değiştirmek ve kurutmaya yardım için kapağı yaklaşık 100 mm aralık bırakmak."
  - q: "Tablet kullanıyorum, yine de parlatıcı koymalı mıyım?"
    a: "Uğur kılavuzu iki durumu ayırıyor. Toz ya da tablet gibi ayrı parlatıcı gerektiren deterjanda fabrika ayarı yeterli, parlatıcı hazneden eklenir. Çok fonksiyonlu tablet kullanıyorsan parlatıcı ayarının kılavuzdaki değere getirilmesi gerekiyor; bu durumda parlatıcı, tabletteki parlatıcıya ek olarak hazneden de eklenir."
  - q: "Bardaklarda beyaz iz kalıyor, parlatıcıyı artırayım mı?"
    a: "Hayır, kılavuz bu durumda tersini söylüyor. Bardak ve tabaklarda beyaz çizgi, leke ya da mavimsi tabaka varsa nedenlerden biri salınan parlatıcının çok fazla olması; çözüm parlatıcı miktarını azaltmak. Deterjanın fazla olması ve kısa programda çok fonksiyonlu tabletin tam çözünmemesi de aynı satırda; tablet kullanıyorsan daha uzun bir program seç. Parlatıcıyı artırmak yalnız kuru su damlası lekeleri için öneriliyor."
  - q: "Program biter bitmez bulaşıkları çıkarmalı mıyım?"
    a: "Uğur'un yükleme tavsiyelerinde hasarı önlemek için program bittiği an bardak ve çatal bıçakların makineden çıkarılmaması yazıyor."
images:
  coverAlt: "Program sonunda kapağı hafifçe aralık bırakılmış bulaşık makinesinin üst sepetinde ters duran, üzerinde su damlaları olan bardaklar"
---

Program bitti ama bardakların dibinde su, tabaklarda damlalar var. Uğur'un UBL serisi bulaşık makinesi kılavuzlarında bu belirti iki satırda geçiyor: **"Bulaşıklar ıslak."** ve **"Bulaşıklar ıslak ve mat."** İki satırın çözümlerinin ortak noktası parlatıcı ve program; ikisi de kullanıcının elinde.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Parlatıcı göstergesi yanıyor mu bak → hazneyi MAX çizgisine kadar doldur, kapağı tık sesiyle kapat → göstergeyi sıfırla → tablet kullanıyorsan parlatıcı ayarını yap → damla lekesi varsa ayarı artır → kurutmasız programdan sonra kapağı ~100 mm arala → eski ürünü değiştir.

## Adım adım: evde denenecekler

**1. Parlatıcı haznesini doldur.** "Bulaşıklar ıslak ve mat" satırının ilk nedeni **"Parlatıcı haznesi boş."** Uğur'a göre parlatıcı, son durulama fazında bulaşıkların **lekesiz ve iz bırakmadan kuruması** için eklenir; hazne boşaldığında panelde parlatıcı göstergesi yanar. Haznenin kapağını kaldırarak aç ve parlatıcıyı dök; **MAX çizgisini geçecek şekilde doldurma.** Kılavuz yalnızca bulaşık makineleri için üretilmiş parlatıcı kullanmanı istiyor.

**2. Kapağı tık sesiyle kapat.** Hazne kapağını kapat ve **tık sesi gelerek** kapandığından emin ol. Uğur, doldururken parlatıcının **kapağa ya da deterjan haznesine dökülmemesine** dikkat etmeni yazıyor.

**3. Göstergeyi sıfırla.** Tablonun çözümü **"Parlatıcıyı hazneye doldurunuz ve parlatıcı göstergesini sıfırlayınız."** İki modelde yöntem farklı:
- **UBL 10814 B501:** kılavuzdaki tabloya göre parlatıcıyı tamamen doldurduktan sonra **Seçenek tuşuyla zamanlayıcı simgeli tuşa birlikte 3 saniye** basılı tutarak sıfırlarsın.
- **UBL 21014 G301 / B301:** kılavuza göre bir sonraki yıkamadan önce hazneyi tamamen doldurman yeterli; **parlatıcı eklendikten sonra gösterge ışığı söner.**

**4. Tablet kullanıyorsan ayarı yap.** Uğur iki durumu ayırıyor. Toz ya da ayrı parlatıcı gerektiren tablet kullanıyorsan **fabrika ayarı yeterli**, parlatıcı yalnız hazneden eklenir. **Çok fonksiyonlu tablet** kullanıyorsan parlatıcı ayarının kılavuzdaki değere getirilmesi gerekiyor. Ayar, kılavuzun "Ayarlar Nasıl Yapılır" bölümündeki kullanıcı ayar modundan yapılıyor; tuşlar kılavuzda simgeyle gösterildiği için sırayı kendi kılavuzundan takip et.

**5. Damla lekesi varsa parlatıcıyı artır.** Bardaklarda ve bulaşıklarda **kuru su damlası lekeleri** varsa tablonun nedeni **"Parlatıcı dozajı çok düşük."**, çözümü parlatıcının salınan miktarını **artırmak.** Kılavuza göre ayardaki değer ne kadar yüksekse dozaj o kadar fazla olur.

**6. Kapağı aralık bırak.** "Bulaşıklar ıslak" satırının nedeni programın kendisi: **"Programda kurutma aşaması yoktu."** ya da **"Programda düşük sıcaklıklı kurutma aşaması vardı."** Uğur'un çözümü: kurutma sürecine yardımcı olmak için kapağı **hafifçe aralayarak, yaklaşık 100 mm** açık bırak.

**7. Eski ürünü değiştir.** İki satırda da bir neden daha var: **"Parlatıcı veya çok fonksiyonlu tablet kalitesi."** Çözüm: **"Temizlik ürünü çok eski; ürünü değiştiriniz."**

## Beyaz iz ile su damlası aynı şey değil

Uğur'un tablosu iki görüntüyü ayrı satırlara koyuyor ve çözümleri ters yönde:

- **Kuru su damlası lekesi:** parlatıcı az → **artır.**
- **Beyaz çizgi, leke ya da mavimsi tabaka:** salınan parlatıcı çok fazla → **azalt.** Aynı satırda deterjanın fazla olması ve kısa programda çok fonksiyonlu tabletin **tam çözünmemesi** de var; tablet kullanıyorsan daha uzun bir program seç.

Ayarı değiştirmeden önce bardağa bak: damla izi mi, beyaz tabaka mı? Bir de Uğur'un yükleme notu: hasarı önlemek için **program bittiği an bardak ve çatal bıçakları makineden çıkarma.**

Bulaşıklar ıslak olmanın yanında kirli de çıkıyorsa önce yıkamayı düzelt: [Uğur bulaşık makinesi temiz yıkamıyor](/blog/ugur-bulasik-makinesi-temiz-yikamiyor/). Markadan bağımsız anlatım için [bulaşık makinesi kurutmuyor](/blog/bulasik-makinesi-kurutmuyor/), tuz ve parlatıcı ayarının genel mantığı için [bulaşık makinesi tuzu ve parlatıcı ayarı](/blog/bulasik-makinesi-tuzu-ve-parlatici-ayari/) yazısına bakabilirsin.

## Ne zaman servis

- Parlatıcı dolu, gösterge sönük, ayar doğru, kurutmalı program seçili ve kapağı araladığın hâlde bulaşıklar her yıkamada ıslak çıkıyorsa.
- Parlatıcı göstergesi hazne dolu olduğu hâlde sönmüyorsa.
- Ekranda sesli alarmla birlikte bir hata kodu görünüyorsa.

Bu noktada Uğur'un yönlendirmesi Uğur Müşteri Hizmetleri (**444 84 87**) ya da Uğur Yetkili Servisi. Kılavuzun genel uyarısı: elektrikli ekipmanlar yalnızca **nitelikli elektrik uzmanları** tarafından servis işlemine alınmalıdır.

⛔ **Kendin-çöz sınırı burada biter.** Parlatıcı, ayar, program ve kapak kullanıcıya; ısıtma ve kurutma aksamı servise aittir.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

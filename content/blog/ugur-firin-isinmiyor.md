---
title: "Uğur fırın ısıtmıyor"
description: "Uğur ankastre fırın ısıtmıyor ya da hiç çalışmıyorsa Uğur'un tablosu: fiş ve sigorta, fonksiyon ile sıcaklık düğmesi, kapak, saat ayarı ve zamanlayıcı."
slug: "ugur-firin-isinmiyor"
date: "2026-10-03"
category: "Fırın / Ocak"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki, Uğur). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile ugur.com.tr'den indirildi, HTTP 200, yönlendirme 0.
#   Adresler ugur.com.tr ürün sayfalarındaki "Kullanım Kılavuzu" indirme bağlantısından (göreli /Data/EditorFiles/docs/). Web araması yok. Sayfa = PDF sayfası.
#  F1) UAF Serisi (UAF 608 / 608M / 609M / 6011D / 6011DB, tüm renk kodları)  https://ugur.com.tr/Data/EditorFiles/docs/101177_KK.pdf  44 s.  md5 05a07ab38914cbc3bcfd36c1ecfdecdf
#      ürün sayfası: https://ugur.com.tr/uaf-608m-bcen  (sayfa atıfları buna göre)
#  F2) UAF Serisi (608 / 609M / 6011D / 6011DB)  https://ugur.com.tr/Data/EditorFiles/docs/100876_KK.pdf  44 s.  md5 6ff1ee0839d2c952d470441b11b451f7  (ürün: /uaf-6011db-bcpst)
#  F3) UAF Serisi (608 / 609M / 6011D)  https://ugur.com.tr/Data/EditorFiles/docs/100841_KK.pdf  36 s.  md5 e121d54be1acee9ed08043758e39befa  (ürün: /uaf-6011d-bcpet;
#      /uaf-608-bcpet → 100813_KK.pdf ve /uaf-609m-bcpet → 100825_KK.pdf aynı md5, birebir aynı dosya). Sorun giderme tablosu üç belgede aynı.
# Ana satırlar (F1 s.37 "9 – SORUN GIDERME"; "Bu sorunları kendiniz ürüne müdahale etmeden kolayca çözebilirsiniz."):
#   "Cihaz çalışmıyor." → "Cihaz fişi prize takılı olmayabilir." / "Fişin prize takılı olduğuna emin olunuz." · "Sigorta atmış yada bozuk olabilir." / "Sigorta kutusundaki
#     sigortaları kontrol ediniz. Atmış ise devreye alınız."
#   "Fırın ısıtmıyor." → "Kapak açık kalmış olabilir." / "Kapağı kontrol ediniz tam kapandığından emin olunuz." · "Fonksiyon veya sıcaklık ayarlanmamış olabilir." /
#     "Fırını belirli sıcaklık ve/veya fonksiyona getiriniz."
#   "Kapak tam kapanmıyor." → "Fırın içinde ve kapakta yemek artıkları sıkışmış olabilir." / "Fırını temizleyiniz."
#   "Fırın düzgünce pişirmiyor." → "Fırın kapağı pişirme esnasında çok fazla açılıyor olabilir." / "İç sıcaklığın düşmemesi için kapağı çok fazla açmayınız."
#   "Talimatlara rağmen sorun giderilmezse 444 84 87 numaralı çağrı merkezine veya Uğur yetkili servisine başvurunuz."
# Kontrol paneli (F1 s.13): "Fonksiyon seçme düğmesi ile birlikte sıcaklık düğmesini de bir değere getirmelisiniz. Aksi takdirde ürün ısıtmaya başlamaz." · MEKANİK ZAMANLAYICI
#   "Pişecek yemek için süre belirlenmenizi sağlar. Fonksiyon ve sıcaklık düğmesi de ayarlanmalıdır." · SİNYAL LAMBASI "Fırının ısındığını gösteren lambadır. Fırın ayarlanan
#   sıcaklığa ulaştığında söner." · s.15 "İsterseniz, M moduna getirerek süre seçmeden sıcaklık ve pişirme türünü seçerek pişirmeyi başlatabilirsiniz." / "Model adında M ifadesi
#   yok ise bu işlev geçersiz sayılır." · s.17 "Fırın kullanmaya başlamadan önce saat ayarını yapınız." · "Saat verileri onaylanmadıkça, ekran ayar ekranı olarak kalacaktır." ·
#   "Elektrik kesintisi durumunda günün saati iptal olur ve yeniden ayarlama yapılmalıdır." · s.19 DURDURMA MODU: "...fırın durdurma moduna geçer. Bu durumda pişirme yapılmaz.
#   Moddan çıkmak için [simge] tuşuna kısa süreli basıldığında [simge] sembolü gelir ve devre dışı bırakılır." · s.20 "Elektrik kesilmesi halinde, fırınınız devre dışı kalacaktır ve
#   saatiniz sıfırlanacaktır. Elektrik geldiğinde günün saati yeniden ayarlanmalıdır." · s.7 "Cihaz, arızalı ise yetkili servis tarafından onarılmalıdır."
# BİLEREK YAZILMAYANLAR: rezistans/termostat/fan teşhisi (belgede kullanıcıya yok) · sigorta DEĞİŞTİRME (belge "atmış ise devreye alınız" diyor; kutudaki anahtarı kaldırmak
#   dışında müdahale yazılmadı) · durdurma modunun tuş adı (belgede simge) · hangi modelin hangi panelde olduğu (belge panel çeşitlerini modele bağlamıyor) · fiyat.
# Alıntı denetim tablosu: ugur-firin-isinmiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Fırının kullanım kılavuzu"]
steps:
  - "Fırının fişinin prize takılı olduğundan emin ol."
  - "Sigorta kutusundaki sigortaları kontrol et; fırının sigortası atmışsa devreye al."
  - "Fonksiyon düğmesini bir pişirme türüne, sıcaklık düğmesini bir değere getir."
  - "Kapağın tam kapandığından emin ol; kapanmayı engelleyen yemek artıklarını fırın soğukken temizle."
  - "Dijital zamanlayıcılı panelde günün saatini ayarlayıp onayla; elektrik kesildiyse saati yeniden ayarla."
  - "Dijital panel durdurma modundaysa kılavuzdaki tuşa kısa basarak moddan çık."
  - "Mekanik zamanlayıcılı panelde pişirme süresini ayarla ya da modelinde varsa M konumuna getir."
faq:
  - q: "Uğur fırınım neden ısıtmıyor?"
    a: "Uğur'un UAF serisi kılavuzundaki 'Fırın ısıtmıyor' satırı iki neden sayıyor: kapağın açık kalmış olması ve fonksiyon ya da sıcaklığın ayarlanmamış olması. Kılavuzun kontrol paneli bölümü de fonksiyon düğmesiyle birlikte sıcaklık düğmesinin bir değere getirilmesi gerektiğini, aksi hâlde ürünün ısıtmaya başlamayacağını yazıyor. Fırın hiç çalışmıyorsa tablo önce fişi ve sigortaları kontrol etmeni istiyor."
  - q: "Elektrik kesildi, fırın artık çalışmıyor."
    a: "Uğur'un dijital panelli fırınlarında elektrik kesildiğinde fırın devre dışı kalır ve saat sıfırlanır; kılavuz elektrik geldiğinde günün saatinin yeniden ayarlanmasını istiyor. Saat onaylanmadıkça ekran ayar ekranında kalır."
  - q: "Fırının üzerindeki küçük lamba sönüyor, bozuk mu?"
    a: "Hayır. Kılavuza göre sinyal lambası fırının ısındığını gösterir ve fırın ayarlanan sıcaklığa ulaştığında söner."
  - q: "Yemekler eşit pişmiyor, fırın zayıf mı ısıtıyor?"
    a: "Uğur'un tablosunda 'Fırın düzgünce pişirmiyor' satırının nedeni kapağın pişirme sırasında çok fazla açılması; çözüm iç sıcaklığın düşmemesi için kapağı çok fazla açmamak. Kılavuzun ipuçlarında da fırın kapağının her açılışta ısı kaybına neden olduğu yazıyor."
images:
  coverAlt: "Ankastre bir fırının kontrol panelinde fonksiyon ve sıcaklık düğmelerini çeviren bir el, fırının içi karanlık"
---

Fırını açtın, düğmeleri çevirdin ama içerisi ısınmıyor, ya da fırın hiç tepki vermiyor. Uğur'un UAF serisi ankastre fırın kılavuzundaki sorun giderme tablosu bu iki durumu ayrı satırlarda yazıyor: **"Cihaz çalışmıyor."** ve **"Fırın ısıtmıyor."** Kılavuzun kendi ifadesiyle bunlar, **ürüne müdahale etmeden** kolayca çözebileceğin durumlar.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fiş takılı mı → sigorta atmış mı → fonksiyon VE sıcaklık düğmesi ayarlı mı → kapak tam kapanıyor mu → dijital panelde saat ayarlı mı, durdurma modunda mı → mekanik zamanlayıcıda süre ya da M ayarlı mı. Hepsi doğruysa → 444 84 87 ya da yetkili servis.

## Adım adım: evde denenecekler

**1. Fişi kontrol et.** "Cihaz çalışmıyor" satırının ilk nedeni **"Cihaz fişi prize takılı olmayabilir."**, çözüm **"Fişin prize takılı olduğuna emin olunuz."**

**2. Sigortaya bak.** İkinci neden **"Sigorta atmış yada bozuk olabilir."** Uğur'un çözümü: **sigorta kutusundaki sigortaları kontrol et, atmışsa devreye al.**

**3. İki düğmeyi birden ayarla.** "Fırın ısıtmıyor" satırının nedenlerinden biri **"Fonksiyon veya sıcaklık ayarlanmamış olabilir."**, çözüm **"Fırını belirli sıcaklık ve/veya fonksiyona getiriniz."** Kontrol paneli bölümü bunu netleştiriyor: fonksiyon düğmesiyle birlikte **sıcaklık düğmesini de bir değere getirmelisin; aksi takdirde ürün ısıtmaya başlamaz.** Yalnız fonksiyonu seçip sıcaklığı sıfırda bırakmak fırını ısıtmaz.

**4. Kapağın kapandığından emin ol.** Tablodaki diğer neden **"Kapak açık kalmış olabilir."** Kapak tam oturmuyorsa tablonun bir başka satırı devreye giriyor: **"Fırın içinde ve kapakta yemek artıkları sıkışmış olabilir."**, çözüm **"Fırını temizleyiniz."** Kılavuzun bakım bölümüne göre bakımdan önce **cihazın soğuk olduğundan** emin ol.

**5. Dijital panelde saati ayarla.** Uğur'un dijital zamanlayıcılı fırınlarında kılavuzun ilk kuralı: **fırını kullanmaya başlamadan önce saat ayarını yap.** Saat verileri onaylanmadıkça ekran **ayar ekranı olarak kalır.** Kılavuz ayrıca elektrik kesilirse **fırının devre dışı kalacağını** ve saatin sıfırlanacağını, elektrik geldiğinde **günün saatinin yeniden ayarlanması** gerektiğini yazıyor.

**6. Durdurma modundan çık.** Dijital panelde ekran günün saatini gösterirken ilgili tuşa uzun basılırsa fırın **durdurma moduna** geçer ve kılavuza göre **bu durumda pişirme yapılmaz.** Moddan çıkmak için aynı bölümde gösterilen tuşa **kısa süreli** basman yeterli; tuş kılavuzda simgeyle gösterildiği için "Durdurma Modu" bölümüne bak.

**7. Mekanik zamanlayıcıyı ayarla.** Mekanik zamanlayıcılı panelde kılavuz, pişirme süresinin yanında **fonksiyon ve sıcaklık düğmesinin de ayarlanması** gerektiğini yazıyor. Modelinin adında **M** varsa zamanlayıcıyı **M konumuna** getirerek süre seçmeden pişirmeyi başlatabilirsin; adında M olmayan modellerde bu işlev geçerli değil.

## Arıza sayılmayan durumlar

Uğur'un tablosunda "Bu arıza değildir." diye işaretlenen satırlar var:

- **İlk kullanımda buhar:** fırın ilk kez kullanılıyorsa çalışma sırasında **buhar çıkabilir.**
- **Pişirmeden sonra çalışan fan:** soğutma fanı fırının içini havalandırmak için **bir süre daha çalışır.**
- **Isınırken ve soğurken metal sesi:** sıcaklıkla parçaların **genleşmesinden** gelen sesler normaldir.
- **Sinyal lambasının sönmesi:** lamba fırının ısındığını gösterir, **ayarlanan sıcaklığa ulaşınca söner.**

Yemekler pişiyor ama eşit pişmiyorsa tablonun cevabı kapakta: **iç sıcaklığın düşmemesi için kapağı çok fazla açma.** Markadan bağımsız kontrol listesi için [fırın ısınmıyor](/blog/firin-isinmiyor/), pişirme dengesi için [fırın eşit pişirmiyor](/blog/firin-esit-pisirmiyor/) yazısına bakabilirsin.

## Ne zaman servis

- Fiş takılı, sigorta açık, iki düğme ayarlı, kapak kapalı ve saat ayarlı ama fırın **hâlâ ısınmıyorsa.**
- Kapak temizlikten sonra da **tam kapanmıyorsa.**

Uğur'un yönlendirmesi: talimatlara rağmen sorun giderilmezse **444 84 87** numaralı çağrı merkezine ya da **Uğur yetkili servisine** başvur. Kılavuzun güvenlik bölümüne göre arızalı cihaz **yetkili servis tarafından onarılmalıdır.**

⛔ **Kendin-çöz sınırı burada biter.** Fiş, sigorta anahtarı, düğmeler, kapak ve saat ayarı kullanıcıya; ısıtıcılar, termostat ve elektrik aksamı servise aittir.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

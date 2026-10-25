---
title: "Mitsubishi Electric klima ışığı yanıp sönüyor: anlamı ne?"
description: "Mitsubishi Electric klimada çalışma lambası yanıp sönüyorsa ya bekleme modu ya da arıza uyarısıdır. Kılavuza göre hangisi, ne yapılır?"
slug: "mitsubishi-electric-klima-isik-yanip-soniyor"
date: "2026-10-23"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 2, küme E). origin/main'de mitsubishi-electric-klima-isik-yanip-soniyor yok; Mitsubishi
#   Electric'te calismiyor, isitmiyor, sogutmuyor, koku-yapiyor, su-damlatiyor var; lamba sorgusunu karşılayan yok.
# Arama kanıtı (bu koşu, hl=tr gl=tr): "mitsubishi klima ışık yanıp" → "mitsubishi klima ışık yanıp sönüyor", "mitsubishi klima
#   yeşil ışık yanıp sönüyor", "mitsubishi klima sarı ışık yanıp sönüyor"; "mitsubishi klima yeşil ışık" → "... yanıp sönüyor",
#   "mitsubishi electric klima yeşil ışık yanıp sönüyor".
# Belge: Mitsubishi Electric MSZ-AP25/35/42/50VG kullanma kılavuzu, klima.mitsubishielectric.com.tr, bu koşuda HTTP 200,
#   md5 43435dae68b08714f849fb3768360849 (yerel kopyayla aynı).
# BİLEREK YAZILMAYANLAR: lamba renklerine göre anlam (PDF'te tablo simgeli, renk metinde yok) · sarı ışık anlamı (belgede yok)
#   · kart/sensör teşhisi · acil çalıştırma düğmesiyle deneme · fiyat (#46). Alıntı denetimi: .KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Klimanın kullanma kılavuzu", "Uzaktan kumanda"]
steps:
  - "Lambanın yanıp mı söndüğüne yoksa yalnız kısık mı yandığına bak; kısıksa kumandada gece modunun açık olup olmadığını kontrol et."
  - "Evde aynı dış üniteye bağlı başka iç ünite varsa onların hangi modda çalıştığına bak."
  - "Bir odada ısıtma, diğerinde soğutma, kurutma ya da fan açıksa bütün odaları aynı moda al ve lambayı yeniden izle."
  - "Tek iç ünite varsa ya da modlar aynı olduğu hâlde lamba yanıp sönüyorsa klimayı kumandadan durdur ve kullanmaya devam etme."
  - "İç üniteden su damlaması, sık atan sigorta ya da anormal ses gibi ek bir belirti olup olmadığını not et."
  - "Modeli ve gördüklerini yazıp Mitsubishi Electric bayisine ya da yetkili servisine haber ver."
faq:
  - q: "Mitsubishi Electric klimada lamba neden yanıp söner?"
    a: "MSZ-AP kılavuzunda iki durum var. Çoklu sistemde (birden fazla iç ünite, tek dış ünite) bir ünitede ısıtma, diğerinde soğutma, kurutma ya da fan seçilirse son seçilen ünite bekleme moduna geçer ve çalışma gösterge lambası yanıp söner. Bunun dışında kılavuz, çalışma gösterge lambası yanıp söndüğünde klimayı kullanmayı bırakıp bayiye başvurmayı istiyor."
  - q: "Lamba yanıp sönmüyor ama çok sönük; arıza mı?"
    a: "Değil. NIGHT MODE (gece modu) açıkken çalışma gösterge lambası kısılır, bip sesi kapanır ve dış ünitenin sesi düşer. Gece modunu kapatmak için kumandadaki aynı düğmeye tekrar basmak yeterli. Kılavuz ayrıca lambanın parlak odalarda zor görüldüğünü belirtiyor."
  - q: "Lamba normalde neyi gösterir?"
    a: "Kılavuza göre çalışma gösterge lambası ünitenin çalışma durumunu gösterir: ünitenin ayar sıcaklığına ulaşmak için çalıştığını ya da oda sıcaklığının ayar sıcaklığına yaklaştığını ayrı görünümlerle belirtir. Yanıp sönme ise çoklu sistemde bekleme modunu gösterir."
  - q: "Elektrik gidip gelince klima kendi kendine açıldı, bu normal mi?"
    a: "Evet. MSZ-AP modellerinde otomatik yeniden çalıştırma fonksiyonu var: ünite kumandayla kapatılmadan elektrik kesilip geri gelirse, klima kesintiden önceki modda kendiliğinden çalışmaya başlar."
  - q: "Klimayı kapatıp açınca hemen çalışmıyor?"
    a: "Kılavuza göre ünite tekrar başlatıldığında yaklaşık 3 dakika çalıştırılamaz; bu, mikroişlemcinin üniteyi koruma talimatıdır. Beklemek gerekir."
images:
  coverAlt: "Beyaz bir duvar klimasının alt kenarında küçük, sönük bir gösterge lambası ve sakin bir yatak odası"
  steps:
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda uzaktan kumanda"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda hava giriş ve çıkış ızgarası"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda uzaktan kumanda"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda uzaktan kumanda"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda sigorta kutusundaki şalterler"
    - "Çizim: solda duvar tipi klima iç ünitesi, sağda telefon ve kullanım kılavuzu"
---

Mitsubishi Electric klimanın ön yüzündeki küçük lamba yanıp sönmeye başladı. Kimi zaman klima hiç çalışmıyor, kimi zaman bir odada çalışıp diğerinde susuyor. MSZ-AP serisinin kullanma kılavuzu bu lamba için iki ayrı anlam veriyor: biri çok odalı sistemlerde arıza olmayan **bekleme modu**, diğeri doğrudan **"klimayı kullanmayı bırak, bayiye başvur"** uyarısı. Hangisi olduğunu evde ayırmak birkaç dakika sürer. Kaynak bu modelin kılavuzu; senin modelinde lamba yeri ve düğme adları farklı olabilir, kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Lamba sönükse gece modu açıktır, arıza değil. Lamba yanıp sönüyor ve evde aynı dış üniteye bağlı birden fazla klima varsa muhtemelen odalar farklı modda; hepsini aynı moda al. Tek klima varsa ya da modlar aynı olduğu hâlde lamba yanıp sönüyorsa kılavuzun talimatı net: klimayı kullanmayı bırak, bayiye başvur.

## Lamba ne söylüyor

| Gördüğün | Kılavuza göre anlamı | Ne yapılır |
|---|---|---|
| **Lamba yanıyor** | Ünite ayar sıcaklığına ulaşmak için çalışıyor ya da oda ayara yaklaşıyor | Normal |
| **Lamba kısık** | NIGHT MODE (gece modu) açık | Normal; istersen kapat |
| **Lamba yanıp sönüyor, çok odalı sistem** | Bekleme modu (mod çakışması) | 🛠️ Odaları aynı moda al |
| **Lamba yanıp sönüyor, diğer durumlar** | Kılavuz kullanımı durdurmayı istiyor | 📞 Bayi ya da yetkili servis |

## Adım adım: evde denenecekler

**1. Yanıp sönüyor mu, kısık mı?** Önce lambaya bir dakika bak. Lamba yanıp sönmüyor ama normalden sönükse sebep büyük olasılıkla **NIGHT MODE**. Kılavuza göre gece modu açıkken çalışma gösterge lambası kısılır, çalıştırma ve durdurma dışında bip sesi kapalı kalır, dış ünitenin ses seviyesi düşer. Gece modunu kapatmak için kumandadaki aynı düğmeye tekrar basman yeterli. Kılavuz ayrıca bu modda soğutma ve ısıtma kapasitesinin düşebileceğini, lambanın parlak odalarda zor görüldüğünü yazıyor.

**2. Evde kaç iç ünite var?** Bazı evlerde birden fazla iç ünite tek bir dış üniteye bağlıdır; buna **çoklu sistem** denir. Kılavuza göre bu sistemlerde soğutma, kurutma, fan ve ısıtma işlemleri **aynı anda yapılamaz**. Diğer odalardaki klimaların açık olup olmadığına ve hangi modda çalıştığına bak.

**3. Modları eşitle.** Bir ünitede soğutma, kurutma ya da fan, diğerinde ısıtma seçilmişse ya da tam tersiyse **son seçilen ünite bekleme moduna geçer**. Lamba tablosunda bekleme modu, yalnız çoklu sistem çalışması sırasında görülen **yanıp sönme** ile gösteriliyor. Bütün odaları aynı moda al ve lambayı izle. Kılavuzun bir notu daha var: iç ünite MXZ tipi bir dış üniteye bağlıysa **AUTO modu tavsiye edilmiyor**; birkaç iç ünite aynı anda çalışınca ünite soğutma ile ısıtma arasında geçiş yapamayabilir ve bekleme moduna girebilir.

**4. Tek ünite ya da modlar aynıysa durdur.** Evde tek klima var ya da bütün odalar aynı modda olduğu hâlde lamba yanıp sönmeye devam ediyorsa bu artık bekleme değil. Kılavuzun "Bir arıza olduğunu düşündüğünüzde" bölümü, **çalışma gösterge lambası yanıp söndüğünde** klimayı kullanmayı bırakıp bayiye başvurmayı istiyor. Klimayı kumandadan durdur. Kapatıp hemen açarsan çalışmaması da normal: kılavuza göre ünite yeniden başlatıldığında yaklaşık 3 dakika çalıştırılamaz.

**5. Ek belirtileri not et.** Aynı listede bayiye başvurmayı gerektiren başka durumlar da var: iç üniteden su sızması ya da damlaması, devre kesicinin sık sık kapanması, anormal bir ses ve soğutucu akışkan kaçağı. Lambayla birlikte bunlardan biri varsa mutlaka not et. Su damlıyorsa altına havlu koy; konu [Mitsubishi Electric klima su damlatıyor](/blog/mitsubishi-electric-klima-su-damlatiyor/) yazısında.

**6. Bayiye ya da servise haber ver.** Modeli (iç ünitenin etiketinde yazar), lambanın davranışını ve ek belirtileri yazıp Mitsubishi Electric bayisine ya da yetkili servisine bildir. Kılavuz, kontrol edilen maddelere rağmen sorun sürüyorsa klimayı kullanmayı bırakıp satıcıya danışmayı söylüyor. İç ünitenin kapağını açmak, kart ya da sensörle uğraşmak, dış üniteye ve gaz hattına müdahale etmek **yetkili servis** işidir.

## Lamba yanıyor ama klima çalışmıyorsa

Kılavuzun sorun giderme tablosu "Ünite çalıştırılamıyor" satırında üç şey soruyor: şalter açık mı, güç kaynağı fişi takılı mı, **ON zamanlayıcı** ayarlı mı? Zamanlayıcı kurulduysa klima ayarlanan saate kadar beklemede kalır. Elektrik gidip geldikten sonra klimanın kendi kendine açılması da kılavuza göre normal: **otomatik yeniden çalıştırma** fonksiyonu, ünite kumandayla kapatılmadan elektrik kesilirse klimayı kesintiden önceki modda yeniden başlatır. Geniş liste [Mitsubishi Electric klima çalışmıyor](/blog/mitsubishi-electric-klima-calismiyor/) sayfasında.

## Ne zaman servis

- Tek iç ünite olduğu hâlde lamba yanıp sönüyorsa
- Modlar eşitlendiği hâlde lamba yanıp sönmeye devam ediyorsa
- Lambayla birlikte su damlıyor, sigorta atıyor ya da anormal ses geliyorsa
- Soğutucu akışkan kaçağından şüpheleniyorsan

⛔ **Kendin-çöz sınırı burada biter.** Kumanda, mod ayarı ve gece modu sende; iç ünitenin içi, dış ünite, gaz ve elektrik bağlantısı yetkili servisin.

## Servisi aramadan önce kısa özet

1. Klimanın modeli ne?
2. Lamba yanıp mı sönüyor, kısık mı yanıyor?
3. Evde aynı dış üniteye bağlı başka iç ünite var mı, hangi modda?
4. Su, sigorta ya da ses gibi ek bir belirti var mı?
5. Sorun ne zaman başladı?

Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Isıtma tarafı [Mitsubishi Electric klima ısıtmıyor](/blog/mitsubishi-electric-klima-isitmiyor/) yazısında. Bil, gör, çağır.

---
title: "Tefal ütü anti-calc ışığı yanıp sönüyor: ne yapılır?"
description: "Tefal ütüde anti-calc (kireç önleyici) göstergesi yanıp sönüyorsa kartuş değişir ve sıfırlama düğmesine 3 saniye basılır. Az buhar ve sızıntı da var."
slug: "tefal-utu-anti-calc-isigi-yanip-sonuyor"
date: "2026-10-26"
category: "Küçük Ev Aletleri"
# --- Provenans (yayında görünmez) ---
# 2026-10-25 PAZ alt ajanı (YK #182, tamir-yazisiz-39). Tamir merkezinde yazısız 1 kayıt bu yazıya bağlanır: Tefal #38 (anti-calc göstergesi yanıp sönüyor).
# OT (bu koşu 25 Eki, hl=tr gl=tr): "tefal ütü anti calc" → 1. "tefal ütü anti calc" · 2. "tefal ütü anti calc ışığı yanıp sönüyor" · 3. "tefal ütü anti calc nedir"; "tefal ütü ışık" → 1. "tefal ütü ışık yanıp sönüyor". GSC: satır yok.
# Çakışma: origin/main'deki tefal-utu-kirec-temizleme kireç önleyici ÇUBUK, kendi kendini temizleme ve kireç toplayıcıyı anlatıyor; kartuşlu modelin yanıp sönen göstergesi, kartuş değişimi ve sıfırlama düğmesi gövdede yok (grep "gösterge", "kartuş", "sıfırla": 0). Ayrı sorgu.
# Belge (#88), kaydın kendi kaynağı: https://www.tefal.com.tr/sss-utuler — Tefal Türkiye'nin (Groupe SEB İstanbul) kendi sitesi, "Anasayfa / Ütüler" sık sorulan sorular sayfası. Bu koşuda curl -sL ile iki kez indirildi, ikisi de 200 text/html; md5 her indirmede değişiyor (dinamik HTML): 37bdfe321d02a2faadfd321f60647e7a ve 9cd11b193c5853ec6d3f20de2cad055c. Föydeki md5 80abd8769136389fbc6aeade20ae11c4 (30 Eyl ilk indirme) yeniden üretilemez; kayıttaki cümle sayfa metninde birebir bulundu. Metin kopyası: tamir-yazisiz-39/_kaynak/tefal-sss.html.txt.
# Sayfa model adı vermiyor; sızıntı satırında "maxi buharlı ütünüzü" ifadesi geçiyor. Yazıda "kartuşlu Tefal ütüler" dendi.
# #149: küçük ev aleti, teşhis çağrısı yok. #46: fiyat yok (sayfadaki kargo/ödeme şeridi alınmadı). #31: pompa, kazan, gövde açma yazılmadı.
# BİLEREK YAZILMAYANLAR: kartuşun model kodu ve satın alma yeri · kartuş ömrü için ay ya da litre (belgede yok) · sıfırlama düğmesinin yeri (modele göre, belgede yok).
# Alıntı denetimi: tefal-utu-anti-calc-isigi-yanip-sonuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Yedek anti-calc kartuşu gerekir"
  tools: ["Yeni anti-calc kartuşu", "Katkısız su", "Ütü masası"]
steps:
  - "Anti-calc göstergesi yanıp sönüyorsa kireç önleyici kartuşun artık çalışmadığını bil."
  - "Eski kartuşu çıkar, yenisini tak ve bölmeye tam oturduğundan emin ol."
  - "Sıfırlama düğmesini en az 3 saniye, gösterge yanıp sönmeyi kesene kadar basılı tut."
  - "Ütüyü kıyafetlerden uzak tutarak buhar düğmesini 2 ya da 3 dakika basılı tut."
  - "Termostatı buhar alanına, üç noktaya ya da MAX'a al ve su tankının dolu olduğuna bak."
  - "Tanka yalnız katkısız su koy."
  - "Gösterge kartuş değiştikten ve sıfırlamadan sonra da yanıp sönüyorsa yetkili servise başvur."
faq:
  - q: "Tefal ütüde anti-calc ışığı neden yanıp söner?"
    a: "Tefal'in ütüler için sık sorulan sorular sayfasına göre anti-calc (kireç önleyici) göstergesi yanıp sönüyorsa kireç önleyici kartuş artık çalışmıyor. Kartuşu değiştirip sıfırlama düğmesini en az 3 saniye basılı tutman, sonra pompaya su gitmesi için buhar düğmesine 2–3 dakika basman gerekiyor."
  - q: "Kartuşu değiştirdim, ışık hâlâ yanıp sönüyor. Neden?"
    a: "Tefal'e göre bu durumda sıfırlama düğmesine basılmamış. Düğmeye gösterge yanıp sönmeyi kesene kadar bas, ardından ütüyü kıyafetlerden uzak tutarak buhar düğmesini 2 ya da 3 dakika basılı tut. Sorun sürerse Tefal yetkili servis merkezine başvurmanı istiyor."
  - q: "Anti-calc kartuşu ne zaman değiştirilir?"
    a: "Tefal'in cevabı kısa: anti-calc (kireç önleyici) gösterge ışığı yanıp söndüğünde kartuşu değiştirebilirsin. Sayfada ay ya da kullanım miktarı olarak bir süre verilmiyor."
  - q: "Kartuşu yeni taktım, ütü az buhar veriyor. Normal mi?"
    a: "Tefal'e göre hazneyi yeni doldurduysan ve kartuşu yeni değiştirdiysen buhar düğmesini 2–3 dakika basılı tutup pompaya su gitmesini sağlaman gerekiyor. Kartuş takılmamış ya da yanlış takılmışsa da az buhar olur; kartuşun bölmeye tam oturduğunu kontrol et."
images:
  coverAlt: "Ütü masasında su tanklı bir buharlı ütü ve yanında çıkarılmış küçük bir kireç önleyici kartuş"
  steps:
    - "Çizim: solda buharlı ütü, sağda kontrol panelindeki ikaz lambaları"
    - "Çizim: solda buharlı ütü, sağda kireç önleyici kartuş"
    - "Çizim: solda buharlı ütü, sağda kontrol panelindeki ikaz lambaları"
    - "Çizim: solda buharlı ütü, sağda bekleme süresi için saat"
    - "Çizim: solda buharlı ütü, sağda ayar kadranı"
    - "Çizim: solda buharlı ütü, sağda su ya da toz haznesi"
    - "Çizim: solda buharlı ütü, sağda telefon ve kullanım kılavuzu"
---

Tefal ütünün üzerindeki **anti-calc** (kireç önleyici) göstergesi yanıp sönmeye başladı. Bu bir arıza işareti değil, bir bakım hatırlatması: Tefal'in kendi sitesindeki ütü sık sorulan sorular sayfasına göre gösterge yanıp söndüğünde **kireç önleyici kartuş artık çalışmıyor** ve değiştirilmesi gerekiyor. Kartuşu değiştirdikten sonra yapılacak iki şey daha var; ikisi atlanınca ışık sönmüyor ya da ütü buhar vermiyor. Bu yazı o sayfadaki anti-calc ve buhar satırlarını sırayla anlatıyor. Sayfa model adı vermiyor; anlatılanlar kartuşlu Tefal ütüler için. Kendi ütünün kılavuzunda farklı bir tarif varsa ona uy.

> ⚡ **Kısa özet:** Anti-calc ışığı yanıp sönüyorsa kartuşu yenisiyle değiştir ve bölmeye tam oturt. Sıfırlama düğmesini en az 3 saniye, ışık sönene kadar basılı tut. Ütüyü kıyafetten uzak tutup buhar düğmesine 2–3 dakika bas; pompaya su gider. Işık yine sönmüyorsa yetkili servis.

## Anti-calc göstergesi ve kartuş: Tefal ne diyor?

| Durum | Tefal'in açıklaması | Ne yapılır |
|---|---|---|
| Anti-calc göstergesi yanıp sönüyor | Kireç önleyici kartuş artık çalışmıyor | Kartuşu değiştir, sıfırlama düğmesini en az 3 saniye bas, buhar düğmesini 2–3 dakika bas |
| Kartuş değişti, gösterge hâlâ yanıp sönüyor | Sıfırlama düğmesine basılmamış | Işık sönene kadar sıfırlama düğmesine bas, buhar düğmesini 2–3 dakika bas; sürerse servis |
| Kartuş yeni değişti ya da tank yeni doldu, buhar az | Pompaya su gitmemiş | Buhar düğmesini 2–3 dakika basılı tut |
| Buhar az ya da yok | Kartuş takılmamış ya da yanlış takılmış | Kartuşun takılı ve bölmeye tam oturmuş olduğuna bak |
| Buhar az ya da yok | Seçilen sıcaklıkta buhar oluşmuyor | Termostatı buhar alanına al (üç nokta ya da MAX) |
| Buhar yok | Su tankı boş | Tankı doldur |

Kartuş ne zaman değişir sorusuna Tefal'in cevabı da göstergeye bağlı: **gösterge ışığı yanıp söndüğünde.** Sayfada ay ya da litre olarak bir süre yok.

## Adım adım: kartuşu değiştirip ışığı söndürmek

**1. Işığın anlamını bil.** Anti-calc göstergesi yanıp sönüyorsa kireç önleyici kartuşun artık çalışmadığını bil. Kartuş değişmeden ışık sönmüyor.

**2. Kartuşu değiştir.** Eski kartuşu çıkar, yenisini tak ve bölmeye tam oturduğundan emin ol. Tefal, takılmamış ya da yanlış takılmış kartuşu ütünün az buhar vermesinin nedenlerinden biri sayıyor. Kartuşun yeri ve çıkarma biçimi modele göre değişir; kendi kılavuzuna bak.

**3. Sıfırla.** Sıfırlama düğmesini en az 3 saniye, gösterge yanıp sönmeyi kesene kadar basılı tut. Tefal'e göre kartuş değiştiği hâlde ışığın yanıp sönmeye devam etmesinin nedeni bu düğmeye basılmamış olması.

**4. Pompayı doldur.** Ütüyü kıyafetlerden uzak tutarak buhar düğmesini 2 ya da 3 dakika basılı tut. Tefal bunu hem kartuş değişiminden sonra hem de tank yeni doldurulduğunda ya da cihaz ilk kez kullanıldığında istiyor; amaç pompaya su gitmesi.

**5. Sıcaklığı ve suyu kontrol et.** Termostatı buhar alanına, üç noktaya ya da MAX'a al ve su tankının dolu olduğuna bak. Tefal'e göre seçilen sıcaklık düşükse buhar oluşmuyor. Bir ya da iki noktada taban buhar üretecek kadar ısınmadığı için tabandan su gelebiliyor; ütüyü üçe ayarla ve buhar düğmesini kullanmadan önce termostat ışığının sönmesini bekle.

**6. Katkısız su kullan.** Tanka yalnız katkısız su koy. Tefal, kumaşta leke bırakan buharın ve su fışkırtmanın nedenlerinden biri olarak kokulu katkı eklenmiş suyu sayıyor.

**7. Sürerse servis.** Gösterge kartuş değiştikten ve sıfırlamadan sonra da yanıp sönüyorsa yetkili servise başvur. Tefal bu satırda evde başka bir adım yazmıyor.

## Tabandan su ya da leke geliyorsa

Aynı sayfada iki satır daha var. Buhar işlevini ilk kez ya da uzun aradan sonra kullanıyorsan, ütü masasının üzerinde ütü buhar üretene kadar buhar düğmesine bas. Kireç gidermeden sonra buhar leke bırakıyorsa ütü yeterince durulanmamıştır: hazneyi 200 ml suyla doldur ve tank tamamen boşalana kadar çalıştır. Beyaz sirke yerine kimyasal kireç çözücü kullandıysan da Tefal durulama yapmanı söylüyor. Buhar zamanla azalıyorsa Tefal kireç birikmesini gösteriyor ve kılavuzdaki "Kireç Giderme" kısmına yönlendiriyor. Ütü durmadan buhar veriyorsa buhar düğmesi sürekli buhar konumunda kalmıştır; Tefal düğmenin kilidini açmanı söylüyor. Çamaşırda su izi kalıyorsa sayfaya göre ütü masası büyük hazneli bir ütüye uygun değildir; Tefal delikli çelik ağ masa öneriyor. Kireç çubuğu olan Tefal ütüler için [Tefal ütü kireç temizleme](/blog/tefal-utu-kirec-temizleme/) yazısına bak.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Kartuş değişimi, sıfırlama, pompayı doldurma, sıcaklık, su | Senin, bu yazıdaki adımlar |
| Kartuş ve sıfırlamadan sonra da gösterge yanıp sönüyor | Tefal yetkili servis merkezi |
| Cihazdan su ya da buhar sızıntısı | Kullanmayı bırak; Tefal'e göre cihaz arızalı, yetkili servis |

⛔ Ütüyü ya da buhar ünitesini açma, pompaya ve kazana müdahale etme.

---

**Kaynak künyesi.** Anti-calc göstergesi, kartuş değişimi, sıfırlama, buhar ve sızıntı satırları Tefal Türkiye'nin ütüler için yayımladığı sık sorulan sorular sayfasından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

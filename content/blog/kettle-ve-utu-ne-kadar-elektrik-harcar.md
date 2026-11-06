---
title: "Kettle ve ütü ne kadar elektrik harcar? Hesap yöntemi"
description: "Kettle ve ütü saatte kaç kWh harcar? Arzum AR3065 kettle (2200 W) ve Arzum Tessia AR694 ütü (2400 W) güç değeriyle açık formül ve dakika hesabı."
slug: "kettle-ve-utu-ne-kadar-elektrik-harcar"
date: "2026-11-10"
updated: "2026-11-10"
category: "Sürdürülebilirlik"
# --- Provenans (yayında görünmez) ---
# 2026-11-06 Cum PAZ alt ajanı (YK #215 parti 9; BOSLUK.md sürüm 4 #444 "kettle / airfryer / ütü ne kadar elektrik harcar", sürdürülebilirlik). Yazı başına ≤2 belge kuralı nedeniyle #444 iki yazıya bölündü: bu yazı kettle + ütü; airfryer ayrı yazı (airfryer-ne-kadar-elektrik-harcar, bu parti). Slug origin/main content/blog/'da ve blog-taslaklar/*/ altında yok (6 Kas fetch, 1.311 dosya). Yakın: cihazlar-bekleme-modunda-elektrik-harcar-mi, buzdolabi-/camasir-makinesi-/firin-ne-kadar-elektrik-harcar; kettle ya da ütü için yok.
# Konu kanıtı: Google otomatik tamamlama 6 Kas 2026 (ham: _kaynak/OT-2026-11-06-p9.txt): "kettle ne kadar elektrik" #1 "…yakar", #3 "kettle saatte ne kadar elektrik harcar", #4 "…ayda…", #5 "elektrikli kettle…", #9 "kettle elektrik tüketimi"; "ütü ne kadar elektrik" #1 "…harcar", #2 "ütü saatte…", #5 "3000 watt ütü…", #6 "2400 watt ütü…", #7 "ütü elektrik tüketimi". GSC kanıt sayılmadı.
# Belgeler (#88), düz curl -sL (özel başlık yok), HTTP 200: (A) Arzum Fionda AR3065 su ısıtıcısı kullanma kılavuzu (36 s. PDF) https://destek.arzum.com.tr/manuals/arzum-fionda-su-isiticisi-ar3065.pdf md5 871e6a469aad9e509b0c9a961fd9d32c — PDF s.1, 6, 8, 9, 11 · (B) Arzum Tessia AR694 seramik tabanlı ütü kullanma kılavuzu (24 s. PDF) https://destek.arzum.com.tr/manuals/arzum-tessia-seramik-tabanli-utu-ar694.pdf md5 7892ae7fb94a84cb0f2940dcb931774a — PDF s.1, 4, 6, 7, 11.
# Rakam kuralı: tablodaki her kWh yalnız belgedeki güç değerinden (A: 1850-2200 W; B: 2000-2400 W) ve açık formülden (kWh = W ÷ 1000 × saat) hesaplandı; kaynama ya da ütüleme süresi uydurulmadı, hesap dakika ve saat birimiyle verildi. Sonuçlar üst sınırdır (cihaz anma gücünü kesintisiz çeker varsayımı).
# BİLEREK YAZILMAYANLAR: TL, birim bedel ve aylık fatura tutarı (#46) · belgede olmayan "kettle 3 dakikada kaynar", "ütü saatte yarı güç çeker" gibi süre/oran varsayımları · 3000 W ütü (belge yok).
# Alıntı denetimi: kettle-ve-utu-ne-kadar-elektrik-harcar.KAYNAK.md
kisaCevap: "Arzum AR3065 kettle 1850-2200 W, Arzum Tessia AR694 ütü 2000-2400 W güçte. Formül kWh = W ÷ 1000 × saat; buna göre 2200 W kettle her çalıştığı dakikada en çok 0,037 kWh, 2400 W ütü en çok 0,04 kWh, bir saatte ise sırasıyla en çok 2,2 ve 2,4 kWh harcar."
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Cihazın tip etiketi ya da kullanma kılavuzu", "Saat"]
steps:
  - "Cihazın gücünü (W) tip etiketinden ya da kılavuzun teknik özellikler bölümünden bul."
  - "Gücü 1000'e bölerek kilovata (kW) çevir."
  - "Çalışma süresini dakika olarak ölç ve 60'a bölerek saate çevir."
  - "Kilovatı saatle çarp; sonuç kilovatsaattir (kWh)."
  - "Kettle'a yalnız MIN ile MAX çizgisi arasında su koy."
  - "Kettle'ın kirecini periyodik olarak gider."
  - "Ütüye ara verirken ve iş bitince fişini prizden çek."
faq:
  - q: "Kettle saatte ne kadar elektrik harcar?"
    a: "Arzum AR3065 kettle'ın gücü 1850-2200 W. Formül kWh = W ÷ 1000 × saat olduğundan kettle kesintisiz bir saat çalışsaydı en çok 2,2 kWh harcardı. Kettle su kaynayınca kendiliğinden kapandığı için tüketimi çalıştığı dakikalarla hesaplanır: dakikada en çok 0,037 kWh."
  - q: "2400 watt ütü ne kadar elektrik harcar?"
    a: "Arzum Tessia AR694 ütünün gücü 2000-2400 W. 2400 W ile hesap: 2,4 kW × 1 saat = en çok 2,4 kWh; 10 dakikada 2,4 × 10 ÷ 60 = en çok 0,4 kWh. Bu değerler ütünün anma gücünü kesintisiz çektiği varsayımıyla üst sınırdır."
  - q: "Kireç kettle'ın elektrik tüketimini etkiler mi?"
    a: "Arzum AR3065 kılavuzu kireçlenmeyi periyodik olarak gidermenin hijyen ve enerji tasarrufu açısından önemli olduğunu yazıyor. Kireç ısıtıcı tabanında birikip kahverengi bir kat oluşturuyor ve ısıtıcının verimini düşürüyor."
  - q: "Kettle prizde takılı kalırsa elektrik harcar mı?"
    a: "Arzum AR3065 kılavuzu açma/kapama düğmesi kapalı “0” konumunda olmak şartıyla kettle'ın mutfakta devamlı prize takılı kalmasının kolaylık sağlayacağını yazıyor; bekleme tüketimi için bir değer vermiyor."
images:
  coverAlt: "Sade kettle ve yanında priz çizimi"
  steps:
    - "Ütünün altındaki etikete bakan beyaz eldivenli sade siluet el"
    - "Not kağıdına bölme işlemi yazan beyaz eldivenli sade siluet el"
    - "Duvar saatine bakan beyaz eldivenli sade siluet el"
    - "Hesap makinesine dokunan beyaz eldivenli sade siluet el"
    - "Kettle'ın su seviye göstergesine bakarak su dolduran beyaz eldivenli sade siluet el"
    - "Kettle'ın içini yumuşak fırçayla temizleyen beyaz eldivenli sade siluet el"
    - "Ütünün fişini prizden çeken beyaz eldivenli sade siluet el"
---

Arzum Fionda AR3065 kettle'ın gücü 1850-2200 W, Arzum Tessia AR694 ütünün gücü 2000-2400 W. Elektrik tüketimi kWh = güç (W) ÷ 1000 × süre (saat) formülüyle hesaplanır. Buna göre 2200 W kettle çalıştığı her dakikada en çok 0,037 kWh, 2400 W ütü en çok 0,04 kWh harcar.

Bu yazıdaki her rakam yalnız iki Arzum kılavuzundaki güç değerinden ve yukarıdaki formülden geliyor; kaynama ya da ütüleme süresi varsayılmadı. Sonuçlar üst sınırdır, çünkü cihazın anma gücünü kesintisiz çektiği kabul ediliyor. Kendi cihazının etiketi farklı bir güç yazıyorsa **kendi etiketin esastır.**

> ⚠️ **Sınır.** Bu yazı tüketim hesabını ve kılavuzdaki kullanım önerilerini anlatıyor. Cihazın içini açmak, kablo ya da fiş onarımı kullanıcı işi değil; Arzum kablo veya fiş arızalıysa cihazı kullanmamanı ve kendin tamir etmemeni istiyor.

## Kettle ve ütü kaç kWh harcar?

Hesap: kWh = W ÷ 1000 × saat. Dakika için saat yerine dakika ÷ 60 yazılır. Rakamlar üç ondalığa yuvarlandı.

| Cihaz ve güç | 1 dakikada en çok | 10 dakikada en çok | 1 saatte en çok |
|---|---|---|---|
| Arzum AR3065 kettle, 1850 W | 1,85 ÷ 60 = 0,031 kWh | 0,308 kWh | 1,85 kWh |
| Arzum AR3065 kettle, 2200 W | 2,2 ÷ 60 = 0,037 kWh | 0,367 kWh | 2,2 kWh |
| Arzum AR694 ütü, 2000 W | 2,0 ÷ 60 = 0,033 kWh | 0,333 kWh | 2,0 kWh |
| Arzum AR694 ütü, 2400 W | 2,4 ÷ 60 = 0,04 kWh | 0,4 kWh | 2,4 kWh |

Kettle'da bir saatlik satır yalnız karşılaştırma için: Arzum'a göre su kaynayınca kettle kendiliğinden kapanır, bu yüzden tüketim çalıştığı dakikalarla hesaplanır.

## Adım adım: kettle ve ütünün tüketimi nasıl hesaplanır?

**1. Cihazın gücünü (W) tip etiketinden ya da kılavuzun teknik özellikler bölümünden bul.** Arzum AR3065'in teknik özelliklerinde 220-240 V ve 1850-2200 W, AR694'ün teknik özelliklerinde 2000-2400 W yazıyor. Aralık verilmişse üst sınır için büyük değeri kullan.

**2. Gücü 1000'e bölerek kilovata (kW) çevir.** 2200 W = 2,2 kW; 2400 W = 2,4 kW.

**3. Çalışma süresini dakika olarak ölç ve 60'a bölerek saate çevir.** Kettle'da düğmeye bastığın andan düğmenin kendiliğinden attığı ana kadar geçen süreyi ölç. Arzum AR3065'te ikaz lambası yanar, su kaynayınca açma/kapama düğmesi otomatik olarak atar.

**4. Kilovatı saatle çarp; sonuç kilovatsaattir (kWh).** Ölçtüğün süreyi dakika olarak "d" diye yazarsan 2200 W kettle için tüketim 2,2 × d ÷ 60 kWh, 2400 W ütü için 2,4 × d ÷ 60 kWh olur; ikisi de üst sınırdır. Arzum ütüde termostat ikaz lambasının istenen sıcaklığa ulaşınca söndüğünü, taban sıcaklığını korumak için hazır ışığının yanıp sönebileceğini yazıyor.

**5. Kettle'a yalnız MIN ile MAX çizgisi arasında su koy.** Arzum AR3065'te aralık 0,5 lt ile 1,7 lt. Kılavuz minimum seviyenin altındaki suyun cihazın erken kapanmasına, maksimumun üzerindeki suyun taşmaya neden olabileceğini yazıyor.

**6. Kettle'ın kirecini periyodik olarak gider.** Arzum kireçlenmeyi periyodik olarak gidermenin hijyen ve enerji tasarrufu açısından önemli olduğunu yazıyor. Kireç ısıtıcı tabanında birikip kahverengi bir kat oluşturarak ısıtıcının verimini düşürüyor. Yöntem için [Arzum su ısıtıcı kireç temizleme](/blog/arzum-su-isitici-kirec-temizleme/) yazısına bak.

**7. Ütüye ara verirken ve iş bitince fişini prizden çek.** Arzum AR694'te aşırı ısınmaya karşı emniyet termiği olduğunu, yine de ütülemeyi bitirdiğinde ya da ara verdiğinde fişi mutlaka çekmeni istiyor. Fişi takmadan önce ve çıkarmadan önce termostat düğmesini minimum konuma getir.

## Ütüde kumaş sırası tüketimi etkiler mi?

Arzum AR694 kılavuzu tüketimle ilgili bir oran vermiyor, ama sıcaklık geçişi için bir kural yazıyor. Yüksek ısı isteyen kumaşlarla başladıysan ve düşük ısı isteyen kumaşa geçeceksen ısı ayar düğmesini en düşük konuma getirip ütünün soğuması için 5 dakika beklemeni istiyor. Kumaşın etiketinde ütü talimatı varsa ona uymanı, yoksa kılavuzdaki sıcaklık tablosunu kullanmanı söylüyor. Ütüyü kullanmayı bitirince dik konumda soğumaya bırak; sıcakken kabloyu tabanın etrafına sarma. Kullanım için [ütü nasıl kullanılır](/blog/utu-nasil-kullanilir/) yazısına bak.

## Bu konuda hangi yazılara bakılır?

Prizde bekleyen cihazlar için [cihazlar bekleme modunda elektrik harcar mı](/blog/cihazlar-bekleme-modunda-elektrik-harcar-mi/), faturadaki artışı anlamak için [elektrik faturası neden yüksek](/blog/elektrik-faturasi-neden-yuksek/) yazısını kullan.

---

**Kaynak künyesi.** Güç değerleri, kettle'ın otomatik kapanması, su seviyesi ve kireç bilgisi Arzum Fionda AR3065 su ısıtıcısı kullanma kılavuzundan; ütünün güç değeri, termostat lambası, emniyet termiği ve sıcaklık geçişi bilgisi Arzum Tessia AR694 ütü kullanma kılavuzundan alınmıştır. kWh değerleri bu güç değerlerinden yukarıdaki formülle hesaplanmıştır. Kendi cihazının etiketi farklı bir güç yazıyorsa **kendi etiketin esastır.**

Cihazın beklenenden uzun çalışıyor ya da kendiliğinden kapanmıyorsa belirtiyi ve modeli benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

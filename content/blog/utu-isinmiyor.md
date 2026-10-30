---
title: "Ütü ısınmıyor: kılavuzlara göre kontrol sırası"
description: "Ütü prize takılı ama ısınmıyor mu? Arçelik, Arnica ve Tefal kılavuzlarına göre fiş, sıcaklık ayarı, gösterge lambası, otomatik kapanma ve servis sınırı."
slug: "utu-isinmiyor"
date: "2026-10-30"
category: "Küçük Ev Aletleri"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (YK #197 boşluk yazıları, grup C, YEDEK konu: üst ajan 30 Eki "bir konu düşerse ütü ısınmıyor"). Grup C'nin 2. konusu (klima kışın ısıtır mı) envanterde
#   klima-isitma-modu-kac-derece-olmali ile çakıştığı için düştü → bu yedek yazıldı. origin/main'de genel "utu-isinmiyor" yok; ütü yazıları markalı: philips-utu-buhar-vermiyor,
#   kiwi-buharli-utu-buhar-vermiyor, kiwi-utu-su-akitiyor, rowenta-utu-su-akitiyor, tefal-utu-kirec-temizleme, tefal-utu-anti-calc-isigi-yanip-sonuyor, arzum-utu-isigi-yanip-sonuyor.
# Arama kanıtı (bu koşu, Google otomatik tamamlama hl=tr gl=tr): "ütü ısın" → 1. ütü ısınmıyor · 2. ütü ısınmıyor ne yapmalıyım · 5. ütü ısınmıyorsa sebebi nedir; "ütü neden" → 3. ütü neden ısınmaz.
# Belgeler (bu koşuda curl -sL -A "Mozilla/5.0", HTTP 200 application/pdf):
#  (A) Arçelik K 4260 buharlı ütü kullanma kılavuzu, 20 s.  https://download.arcelik.com.tr/Download.UsageManuals/33313_3_K_4260.pdf  md5 40b4e829d8452f996315564b025cacad
#  (A2) Arçelik K 4352 buharlı ütü kullanma kılavuzu, 28 s. (aynı sorun satırı, teyit)  https://download.arcelik.com.tr/Download.UsageManuals/38375_3_K_4352.pdf  md5 d3fd0caf6db527c14cf8ac2f37ae1817
#  (N) Arnica Violet 3000 buharlı ütü kullanım kılavuzu, 20 s.  https://www.arnica.com.tr/Data/EditorFiles/Kullanim-Klavizu/Violet%203000.pdf  md5 d23d6ebfe96f4b905e1c4aa4769ec4b1
#  (T) Tefal buharlı ütü güvenlik kitapçığı 1820015846, 53 s. (TR s.21-22)  https://dam.groupeseb.com/m/dffd35c8b6f6060c/original/1820015846-Safety.pdf  md5 0bf85187883ff43b8a9e736bd5db7362
# Sayfalar (PDF): A s.4 mahfazayı açma, kablo servis · A s.5 değer plakası, artık akım, uzatma yok · A s.6 düşerse/sızarsa kullanma · A s.8 otomatik kapanma: Var · A s.12 ayar, dik bekle
#   · A s.13 termostat ışığı söner · A s.16 sorun tablosu "taban ısınmıyor" · N s.4 lamba sönmüyorsa arıza · N s.5 su doldururken MİN · N s.6 lamba söner = ısı, yanıp sönme normal · N s.8 otomatik kapanma
#   · T s.21 kablo kontrolü, anormallikte kullanma, topraklı priz, uzatmada topraklı ve doğru standart.
# Philips: documents.philips.com PDF bağlantıları bu koşuda 404 döndü → kullanılmadı.
# BİLEREK YAZILMAYANLAR: rezistans, termostat, kablo değişimi (servis) · ütüyü açma · Tefal'e ait "ısınmıyor" satırı (kitapçıkta yok) · fiyat (#46).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Ütünün kullanma kılavuzu", "Ütü masası"]
steps:
  - "Ütünün fişini ve şebeke kablosunu kontrol et; fiş prize tam takılı mı, priz topraklı mı, kablo hasarsız mı bak."
  - "Sıcaklık ayar düğmesinin Min konumunda kalıp kalmadığına bak; kalmışsa kumaşa uygun konuma çevir."
  - "Ütüyü dik konuma koy ve ütülemeye hazır hâle gelene kadar beklet."
  - "Gösterge lambasını izle; lamba söndüğünde ütü seçtiğin sıcaklığa ulaşmıştır."
  - "Ütü bir süre hareketsiz kaldıysa otomatik kapanma devreye girmiş olabilir; ütüyü hareket ettir."
  - "Gösterge lambası hiç sönmüyor, sürekli yanıyorsa ütüyü kullanma ve yetkili servise götür."
  - "Ütü düştüyse, su sızdırıyorsa ya da kablosu hasarlıysa kullanma, içini açma; yetkili servise götür."
faq:
  - q: "Ütü prize takılı ama ısınmıyor, ilk neye bakmalıyım?"
    a: "Arçelik K 4260 kılavuzunun sorun tablosu bu durum için iki neden sayıyor: bağlantı sorunu olabilir, ütünün fişini ve şebeke kablosunu kontrol et; sıcaklık ayar düğmesi Min konumunda olabilir, düğmeyi buhar işareti bulunan bölüme kadar çevir."
  - q: "Ütünün ışığı söndü, bozuldu mu?"
    a: "Büyük ihtimalle hayır. Arnica Violet 3000 kılavuzuna göre güç gösterge lambası söndüğünde ütü seçtiğin ısıya ulaşmıştır; ütülerken rezistans devreye girdikçe lamba yanıp söner ve bu bir aksaklık değildir. Arçelik'te de termostat ışığı söndüğünde taban istenen sıcaklığa gelmiştir."
  - q: "Ütü kendi kendine kapanıyor, neden?"
    a: "Otomatik kapanma özelliği olabilir. Arnica Violet 3000 kılavuzuna göre ütü yatay olarak 30 saniye, dikey olarak 8 dakika hareketsiz kalırsa kendiliğinden kapanır; tekrar çalışması için hareket ettirmek gerekir. Arçelik K 4260'ın teknik verilerinde de otomatik kapanma var; süre modele göre değişir."
  - q: "Ütüyü uzatma kablosuyla kullanabilir miyim?"
    a: "Markaya göre değişiyor. Arçelik K 4260 kılavuzu cihazı uzatma kablosuyla kullanmamanı istiyor. Tefal güvenlik kitapçığı ise uzatmalı priz kullanılıyorsa doğru standartta (16A), topraklı bir priz olmasını ve kablosunun tam açılmasını şart koşuyor. Kendi ütünün kılavuzuna uy."
images:
  coverAlt: "Ütü masasının üzerinde dik duran beyaz bir buharlı ütü ve yanında katlanmış bir gömlek"
  steps:
    - "Ütü fişini prize takan beyaz eldivenli sade siluet el, kablo düz uzanıyor"
    - "Ütünün sıcaklık ayar düğmesini çeviren beyaz eldivenli sade siluet el"
    - "Ütü masasında dik konumda bekleyen ütü ve yanında kum saati simgesi"
    - "Ütünün üzerindeki küçük gösterge lambasının sönük ve yanık iki hâli yan yana çizimi"
    - "Ütü masasında yatay duran ütü ve üstünde küçük bir uyku simgesi çizimi"
    - "Sürekli yanan gösterge lambası olan ütü ve yanında uyarı üçgeni çizimi, okunur yazı yok"
    - "Yerde duran ütü ve hasarlı kablo üzerinde çarpı işareti çizimi"
---

Ütüyü prize taktın, bekledin ama taban soğuk. "Ütü ısınmıyor" aramasının en sık hâli bu. Çoğu zaman sebep bir arıza değil: fiş, düğme ya da ütünün kendini kapatması olabiliyor. Bu yazıda ısınmayan ütü için kullanıcının yapabileceği kontrolleri ve servisin başladığı yeri üreticilerin kendi Türkçe belgelerinden topladık: **Arçelik** K 4260 (aynı sorun satırı K 4352 kılavuzunda da var), **Arnica** Violet 3000 ve **Tefal** buharlı ütü güvenlik kitapçığı. Kendi ütünün kılavuzu farklı bir şey söylüyorsa **kendi kılavuzun esastır.**

> ⚠️ **Önce güvenlik:** Arçelik kılavuzu cihazı nemli ya da ıslak ellerle kullanmamanı, fişe ıslak elle dokunmamanı istiyor. Ütünün dış mahfazasını hiçbir surette açma.

## Kılavuzlar ne diyor

| Konu | Arçelik K 4260 | Arnica Violet 3000 | Tefal kitapçığı |
|---|---|---|---|
| **Taban ısınmıyor** | Fiş ve kablo; düğme Min'de olabilir (s.16) | — | — |
| **Lamba sönünce** | Taban istenen sıcaklıkta (s.13) | Seçilen ısıya ulaşıldı (s.6) | — |
| **Otomatik kapanma** | Var (s.8) | Yatay 30 sn, dikey 8 dk (s.8) | — |
| **Uzatma kablosu** | Kullanma (s.5) | — | 16A, topraklı ise (s.21) |
| **Lamba hiç sönmüyor** | — | Arıza olabilir, servis (s.4) | — |

## Adım adım: ısınmayan ütü için kontrol sırası

**1. Fiş ve kablo.** Arçelik K 4260'ın sorun tablosunda "Ütü prize takılı olduğu halde taban ısınmıyor" satırının ilk nedeni **bağlantı sorunu**: ütünün fişini ve şebeke kablosunu kontrol et. Arçelik ayrıca şebeke güç kaynağının cihazın **değer plakasındaki** bilgilere uygun olmasını istiyor. Tefal bağlantının **topraklı prizden** yapılmasını ve kullanmadan önce kabloda aşınma ya da hasar olup olmadığına bakılmasını istiyor. **Uzatma kablosunda markalar ayrılıyor:** Arçelik uzatma kablosuyla kullanmamanı söylüyor; Tefal uzatma kullanılıyorsa doğru standartta (16A), topraklı bir priz olmasını ve kablonun tam açılmasını şart koşuyor.

**2. Sıcaklık düğmesi Min'de mi?** Aynı satırın ikinci nedeni: sıcaklık ayar düğmesi **Min** konumunda olabilir. Çözüm, düğmeyi **buhar işareti** bulunan bölüme kadar çevirmek. Bu özellikle su doldurduktan sonra olur: Arnica kılavuzu suyu doldurmadan önce ısı ayar düğmesini **MİN** pozisyonuna getirmeni istiyor. Su koyduktan sonra düğmeyi kumaşa uygun konuma geri almayı unutma.

**3. Dik koy ve bekle.** Arçelik'e göre fişi taktıktan sonra sıcaklığı kumaş türüne göre ayarla, ütüyü **dik konumda** ütülemeye hazır hâle gelene kadar beklet. "Isınmıyor" demeden önce bu bekleme süresini ver.

**4. Gösterge lambasını oku.** Arnica'ya göre **güç gösterge lambası söndüğünde** seçtiğin ısıya ulaşmışsın demektir. Ütülerken rezistans devreye girdikçe lamba **yanıp söner**; kılavuz bunun bir aksaklık olmadığını söylüyor. Arçelik'te de **termostat ışığı söndüğünde** taban buhar elde edecek sıcaklığa gelmiş oluyor. Yani lambanın sönmesi çoğu zaman iyi haber.

**5. Otomatik kapanma.** Ütü bir süre hareketsiz kaldıysa kendini kapatmış olabilir. Arnica Violet 3000'e göre ütü **yatay olarak 30 saniye** ya da **dikey olarak 8 dakika** hareketsiz kalırsa otomatik kapanıyor; tekrar çalışması için **hareket ettirmen** gerekiyor. Arçelik K 4260'ın teknik verilerinde de **otomatik kapanma** var; süreyi kılavuz yazmıyor. Ütün "soğudu" gibi geliyorsa önce onu hafifçe hareket ettir.

**6. Lamba hiç sönmüyorsa.** Arnica kılavuzu açık: gösterge lambası **sönmüyor**, sürekli yanmaya devam ediyorsa ütüde bir arıza meydana gelmiş olabilir. Bu durumda ütüyü **kullanma** ve en yakın yetkili servise götür.

**7. Düştüyse ya da sızdırıyorsa.** Arçelik'e göre cihaz **yere düşerse, su sızıntısı yaparsa** ya da başka arızalar olursa yetkili bir servis uzmanı kontrol etmeli; onarılana kadar kullanma. Tefal de düşürülmüş, görünür hasarı olan, sızdıran ya da çalışmasında anormallik olan ütünün kullanılmamasını, **içinin açılmamasını** ve incelenmek üzere yetkili servise iletilmesini istiyor. Kablo hasarlıysa Arçelik ve Arnica onu da servise bırakıyor.

## Ek koruma: artık akım cihazı

Arçelik K 4260 kılavuzu ilave koruma için ütünün **en fazla 30 mA** anma değerine sahip bir ev aletleri artık akım cihazına bağlanmasını öneriyor ve öneri için elektrik teknisyenine danışmanı söylüyor. Evindeki tesisatı bilmiyorsan bunu bir elektrik ustasına sor.

## Isınıyor ama buhar yok

Taban ısınıyor ama buhar gelmiyorsa sorun başka: su haznesi, buhar ayarı ya da kireç. Marka bazlı adımlar için [Philips ütü buhar vermiyor](/blog/philips-utu-buhar-vermiyor/) yazısına, lambanın yanıp sönmesi için [Arzum ütü ışığı yanıp sönüyor](/blog/arzum-utu-isigi-yanip-sonuyor/) yazısına bakabilirsin.

## Ne zaman servis?

| Durum | Kimin işi |
|---|---|
| Fiş, priz, sıcaklık düğmesi, bekleme, otomatik kapanma | Senin, bu yazıdaki adımlar |
| Gösterge lambası hiç sönmüyor | Yetkili servis (Arnica) |
| Ütü düştü, su sızdırıyor, kablosu hasarlı | Kullanma; yetkili servis |

⛔ Ütüyü açma, rezistansa ya da termostata müdahale etme, kabloyu kendin değiştirme.

---

**Kaynak künyesi.** Sorun satırı, ayar, bekleme, lamba, otomatik kapanma ve güvenlik bilgileri Arçelik K 4260 / K 4352 ve Arnica Violet 3000 Türkçe kullanma kılavuzlarından, kablo ve uzatma kuralları Tefal'in Türkçe güvenlik kitapçığından alınmıştır. Kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

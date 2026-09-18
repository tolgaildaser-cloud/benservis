---
title: "Kombi yazın kapatılır mı? Yaz modu nedir, nasıl kullanılır"
description: "Kombi yazın şalterden mi kapatılmalı, yaz moduna mı alınmalı? Yaz modu ne yapar, uzun kapalı kombide pompa sıkışması riski ve kışa dönüş kontrolleri."
slug: "kombi-yazin-kapatilir-mi"
date: "2026-07-14"
updated: "2026-09-17"
category: "Kombi"
# --- 17 Eyl 2026 · BASINÇ KÜMESİ ÜRETİCİ BELGESİYLE DOĞRULANDI (YK #88) — yayında görünmez ---
# Belgeler 2026-09-17 curl -sL ile indirildi (hepsi HTTP 200), pdftotext ile okundu.
# 1) Vaillant ecoTEC plus VU/VUW/VUI ..6/5-5 F A Kullanma Kılavuzu 0020228719_00
#    https://www.vaillant.com.tr/pdf/ecotecplus5-5-813748.pdf
#    HTTP 200 · 16 sf · md5 c999bf8603f8fc703b823341ebcae02d · soğukta 1,0-2,0 bar s.9
# 2) DemirDöküm Nitromix Kullanma Kılavuzu 0020309468_01
#    https://www.demirdokum.com.tr/downloads/nitromix-kk-0020309468-01-2557203.pdf
#    HTTP 200 · 16 sf · md5 3340a11b923b7332f8eb8685297970b6 · soğukta 1,0-1,5 bar s.12
# 3) Baymak Duotec Compact 24 Montaj & Kullanma Kılavuzu 300032317
#    https://www.baymak.com.tr/media/2889/300032317-kullanma-kilavuzu-baymak-duotec-compact-24_r1_28122018.pdf
#    HTTP 200 · 27 sf · md5 df4c42a6604e3ec39b2d152606464cb0 · kombi soğukken 0,7-1,5 bar s.14
# Kapsam: yalnız üç basınç parantezi. Sayfanın diğer iddiaları (pompa sıkışması, anti-blokaj, sezon fiyatı vb.) bu turda denetlenmedi.
# Belgede olmadığı için ÇIKARILDI: "1-1,5 bar" (tek aralık)
faq:
  - q: "Kombi yazın tamamen kapatılmalı mı?"
    a: "Sıcak suyu kombiden alıyorsan hayır — tamamen kapatırsan musluktan sıcak su da akmaz. Doğru yöntem yaz modu: ısıtma (petek) devresi kapanır, sıcak su devresi çalışmaya devam eder. Sıcak suyu ayrı bir cihazdan (termosifon, güneş enerjisi) alıyorsan kombiyi kapatabilirsin; ama uzun süre tamamen kapalı kalan kombilerde pompa sıkışması görülebilir."
  - q: "Kombi yaz modu ne işe yarar?"
    a: "Yaz modunda kombi petekleri ısıtmaz, yalnızca musluktan sıcak su talep edildiğinde devreye girer. Böylece gereksiz gaz tüketimi biter ama konfor sürer. Çoğu kombide güneş/radyatör sembollü düğme veya menüden seçilir."
  - q: "Kombi uzun süre kapalı kalırsa ne olur?"
    a: "Aylarca hiç çalışmayan kombide sirkülasyon pompası sıkışabilir, contalar kuruyabilir ve kışın ilk çalıştırmada arıza çıkabilir. Tamamen kapatmayı tercih ediyorsan ayda bir kez birkaç dakika çalıştırmak bu riski büyük ölçüde azaltır."
  - q: "Tatile giderken kombi ne yapılmalı?"
    a: "Kısa tatilde yaz modu yeterli. Uzun tatilde kombiyi kapatıp gaz vanasını kapatabilirsin; dönüşte basıncı kontrol et (kombinin kılavuzundaki aralık) ve sıcak su alarak çalıştığını doğrula. Basınç sık düşüyorsa serviste kontrol ettir."
images:
  coverAlt: "Kombi ve yanında güneş çizimi"
---

Havalar ısındı, petekler aylardır soğuk — akla hep aynı soru geliyor: **kombiyi tamamen kapatmak mı, yoksa öylece bırakmak mı daha doğru?** Cevap ikisi de değil: doğru seçenek çoğu ev için **yaz modu**. Bu rehberde yaz modunun ne yaptığını, tamamen kapatmanın hangi riskleri taşıdığını ve kışa dönüşte nelere bakman gerektiğini anlatıyoruz.

> ⚡ **Kısa özet:** Sıcak suyu kombiden alıyorsan **yaz moduna al** — ısıtma durur, sıcak su sürer, gaz israfı biter. Tamamen kapatacaksan (sıcak su başka kaynaktan geliyorsa) **ayda bir birkaç dakika çalıştır**; aylarca hiç çalışmayan kombide pompa sıkışması klasik kış sürprizidir.

## Yaz modu nedir, ne yapar?

Kombinin iki görevi var: petekleri ısıtmak (kalorifer devresi) ve musluğa sıcak su vermek (kullanım suyu devresi). **Yaz modu ısıtma devresini kapatır, sıcak su devresini açık bırakır.** Kombi bütün gün boşta bekler, yalnızca sıcak su musluğu açıldığında yanar.

Çoğu modelde güneş ☀️ / radyatör 🔥 sembollü bir düğme ya da kış-yaz seçici vardır; dijital modellerde menüden seçilir. Modeline göre detay için kombinin kılavuzuna bak — marka fark etmez, Vaillant'tan Baymak'a mantık aynıdır.

## Tamamen kapatmak neden riskli olabilir?

"Nasılsa kullanmıyorum" diye şalteri indirip aylarca öyle bırakmanın iki bilinen bedeli var:

1. **Pompa sıkışması.** Sirkülasyon pompası aylarca hiç dönmezse içindeki mil kireç ve tortuyla kilitlenebilir. Sonuç: kışın ilk soğuğunda kombi çalışmaz, servis kapıda. Bu, sonbaharda servislerin en yoğun arıza sezonunun klasik sebebidir.
2. **Conta ve keçelerin kuruması.** Uzun hareketsizlik su kaçaklarına davetiye çıkarabilir; [basınç düşmesi](/blog/kombi-basinc-dusuyor/) şikâyetlerinin bir kısmı buradan gelir.

Modern kombilerin çoğunda bunu önleyen **pompa koruma (anti-blokaj)** fonksiyonu vardır — ama çalışması için kombinin **fişte/elektrikte kalması** gerekir. Yani "kapatmak" istiyorsan bile elektriğini kesme; ısıtmayı kapat, cihaz kendini korusun.

**Pratik kural:** Sıcak suyu kombiden almıyorsan ve tamamen kapatmak istiyorsan, **ayda bir kez birkaç dakika** çalıştır (bir musluktan sıcak su akıt) — pompa döner, contalar ıslanır, risk büyük ölçüde ortadan kalkar.

## Tatile giderken ne yapmalı?

- **Kısa tatil (1-2 hafta):** Yaz modu yeter; hiçbir şey yapmana gerek yok.
- **Uzun tatil:** Kombiyi kapatıp **gaz vanasını** kapatabilirsin. Dönüşte sırayla: gaz vanasını aç → [basıncı kontrol et (kombinin kılavuzundaki aralık)](/blog/kombi-basinc-dusuyor/) → sıcak su akıtarak çalıştığını doğrula. Genel tatil hazırlığı için: [tatile çıkarken buzdolabı ve cihazlar](/blog/tatile-cikarken-buzdolabi-ve-cihazlar/).

## Yaz, aslında kombi bakımının en akıllı zamanı

Herkes kombiyi Ekim'de hatırlar — servisler dolar, randevu 2 hafta sonraya atılır, fiyatlar sezona göre yükselir. Oysa **yaz aylarında bakım** hem daha hızlı hem genelde daha uygun. Petek temizliği, basınç kontrolü ve genel bakım için doğru mevsim tam olarak şimdi. Ne kadara mal olacağını merak ediyorsan: [kombi tamiri kaç para?](/blog/kombi-tamiri-kac-para/)

Kışa dönüşte kombi yanmıyor, su ısıtmıyor ya da hata kodu gösteriyorsa rehberlerimiz hazır: [kombi yanmıyor](/blog/kombi-yanmiyor/) · [sıcak su vermiyor](/blog/kombi-sicak-su-vermiyor/) · [kombi arıza kodları](/blog/kombi-ariza-kodlari/).

Ve her durumda kestirme yol: [Benservis'e](/) belirtiyi yaz ("kombi yazdan sonra çalışmıyor, ekranda F.28 var" gibi); yapay zeka olası arızayı ve **tahmini maliyeti ücretsiz** söylesin. Önce öğren, sonra çağır.

## Sık sorulan sorular

**Yazın tamamen kapatılır mı?**
Sıcak su kombidense hayır — yaz moduna al. Başka kaynaktan geliyorsa kapatabilirsin ama ayda bir çalıştır.

**Yaz modu ne yapar?**
Isıtmayı kapatır, sıcak suyu açık bırakır; gaz israfı biter.

**Uzun süre kapalı kalırsa?**
Pompa sıkışabilir, contalar kuruyabilir — kışın ilk çalıştırmada arıza riski.

**Tatilde?**
Kısa tatilde yaz modu; uzun tatilde kapat + gaz vanası, dönüşte basınç kontrolü (kılavuzdaki aralık).

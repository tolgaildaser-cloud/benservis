---
title: "Baymak kombi E03 hatası: aşırı ısınma, reset ve servis"
description: "Baymak kombide E03 aşırı ısınma hatası demek. Duotec ve Eco kılavuzlarına göre basınç kontrolü, RESET adımı, gaz kokusunda yapılacaklar ve servis sınırı."
slug: "baymak-kombi-e03-hatasi"
date: "2026-10-30"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, P02 (YK #197 boşluk 2. dalga, BOSLUK.md #79: "Baymak kombi E10 hatası / E03 hatası"). Satırdan en güçlü konu seçildi: E03. E10 yazılmadı (Duotec Compact 24 ve Eco CT 20 hata tablolarında E10 yok). Slug origin/main'de yok. Yakın yazılar: baymak-kombi-ariza-kodlari (liste), baymak-kombi-e01-hatasi, baymak-kombi-f13-hatasi, baymak-kombi-f37-hatasi.
# Kaynak (#88): Baymak Duotec Compact 24 Montaj ve Kullanma Kılavuzu 300032317 (md5 df4c42a6604e3ec39b2d152606464cb0, E03 s.17) ve Baymak Eco CT 20 Premix kılavuzu 300035751 (md5 e43149e6b888491b718ae20b1251eb37, E03 s.18). URL ve alıntılar KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: E03'ün nedeni (iki kılavuz yalnız "Aşırı ısınma hatası" diyor) · soğumaya bırakma süresi (belgede yok) · "reset en fazla N kez" (belgede sayı yok) · E10 (belgede yok) · gaz, elektrik, su tesisatı ve kombinin içi (servis) · ücret (#46).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Ortamda gaz kokusu olmadığından emin ol; koku varsa gaz kaynağını kapat, kapı ve pencereleri aç, elektrik düğmelerine dokunma."
  - "Ekrandaki kodu not et: E03, kılavuzda aşırı ısınma hatasıdır."
  - "Kombi soğukken manometreden basıncı oku; kılavuzdaki aralık 0,7 ile 1,5 bar arasıdır."
  - "RESET tuşuna bas."
  - "Kombinin yeniden devreye girip girmediğini ekrandan izle."
  - "Kod geri geliyorsa ya da devam ediyorsa yetkili servisi ara."
faq:
  - q: "Baymak kombide E03 ne demek?"
    a: "Baymak Duotec Compact 24 ve Eco CT 20 kullanma kılavuzlarındaki hata kodu tablosunda E03'ün karşılığı 'Aşırı ısınma hatası'. Kılavuzun talimatı: kombiyi resetlemek için RESET tuşuna bas, sorun devam ederse mutlaka yetkili servisi ara."
  - q: "Baymak kombide E10 hatası var mı?"
    a: "Duotec Compact 24 ve Eco CT 20 kılavuzlarının hata tablolarında E10 yok. Bu iki kılavuzdaki E kodları E01, E02, E03, E05, E09, E12, E15, E16, E17, E18, E21, E33 ve E35. Ekranında E10 görüyorsan kodu tam olarak, kombinin modeliyle birlikte yetkili servise bildir."
  - q: "E03 çıktı, reset işe yaramadı, tekrar tekrar basayım mı?"
    a: "Baymak kılavuzları reset için deneme sayısı vermiyor. Verdikleri sınır şu: sorun devam ederse mutlaka yetkili servis aranır. E03 için kılavuzda bir neden de sayılmıyor, bu yüzden nedeni kendin aramaya çalışma."
  - q: "E03 çıktığında gaz kokusu da varsa?"
    a: "Önce reset değil, güvenlik. Duotec kılavuzuna göre gaz kaynağını kapat, kapı ve pencereleri aç, çıplak alev kullanma, sigara içme, elektrik düğmelerini ve elektrikli cihazları kullanma, binadaki diğer insanları uyar; sızıntı gaz sayacı üzerindeyse gaz dağıtım şirketini bilgilendir."
images:
  coverAlt: "Duvara asılı jenerik beyaz kombinin ekranında soyut bir uyarı göstergesi, yanında yuvarlak basınç göstergesi ve reset tuşuna uzanan beyaz eldivenli sade siluet el"
  steps:
    - "Duvar tipi kombi ve yanında açık pencere çizimi"
    - "Kombi panelindeki ekranı gösteren beyaz eldivenli sade siluet el ve yanıp sönen uyarı göstergesi"
    - "Yuvarlak basınç göstergesini işaret eden beyaz eldivenli sade siluet el, ibre yeşil bölgede"
    - "Kombi panelindeki reset tuşuna basan beyaz eldivenli sade siluet el"
    - "Kombi ekranında beliren alev simgesini işaret eden beyaz eldivenli sade siluet el"
    - "Telefonu ve kullanma kılavuzunu yan yana tutan beyaz eldivenli sade siluet el"
---

Baymak kombinin ekranında **E03** görüyorsan kılavuzdaki karşılığı kısa: **"Aşırı ısınma hatası."** Kılavuzun talimatı da kısa: **RESET tuşuna bas; sorun devam ederse mutlaka yetkili servisi ara.** Bu yazıda reset'ten önce güvenle bakabileceğin şeyleri ve nerede durman gerektiğini Baymak'ın kendi kılavuzlarına göre anlatıyoruz: Duotec Compact 24 ve Eco CT 20.

> 🔥 **Gaz kokusu varsa hiçbir adıma geçme.** Duotec kılavuzuna göre: gaz kaynağını kapat, kapı ve pencereleri aç, çıplak alev kullanma, sigara içme, elektrik düğmelerine ve elektrikli cihazlara dokunma, binadaki diğer insanları uyar. Sızıntı gaz sayacı üzerindeyse gaz dağıtım şirketini bilgilendir.

## Kılavuz E03 için ne söylüyor?

Her iki kılavuzda da hata bölümü aynı cümleyle başlıyor: bir hata oluştuğunda ekranda hata kodu görünür, kombiyi resetlemek için RESET tuşuna basılır, sorun devam ederse yetkili servis aranır. Tablodaki satır tek: E03, aşırı ısınma hatası. Yanındaki kodlar şöyle:

| Kod | Kılavuzdaki tanım |
|---|---|
| E01 | Başarısız ateşleme |
| E02 | Hatalı alev oluşumu |
| **E03** | **Aşırı ısınma hatası** |
| E05 | Fan geri besleme hatası |
| E09 | Gaz valfi geri besleme hatası |

Kılavuzlar E03'ün nedenini saymıyor. Bu yüzden aşağıdaki adımlar nedeni bulmak için değil, güvenle bakabileceğin yerlere bakmak için.

## Adım adım: evde denenecekler

**1. Önce gaz kokusuna bak.** Koku varsa yukarıdaki kutudaki sırayı uygula. Koku yoksa devam et.

**2. Kodu not et.** Ekranda E03 görünüyorsa aşırı ısınma hatasıdır. Servisi araman gerekirse ilk soracakları şey bu koddur; modeli de yaz.

**3. Basıncı kontrol et.** Duotec kılavuzu, kombi soğukken manometreden okunan basıncın 0,7 ile 1,5 bar arasında olduğunu düzenli kontrol etmeni istiyor. Aynı kılavuza göre su basıncı 0,5 barın altına düşerse kombi çalışmaz. Kılavuz bu kontrolü E03'ün çözümü olarak yazmıyor; genel kullanım kontrolü olarak veriyor. Basınç düşükse [Baymak kombi F37 hatası](/blog/baymak-kombi-f37-hatasi/) yazısına bak.

**4. RESET tuşuna bas.** Kılavuzun yazdığı adım bu. Eco CT 20 kılavuzu panel şemasında (s.13) reset tuşuna başka, hata bölümünde başka numara veriyor; bu yüzden tuş numarası vermedik, panelindeki RESET yazısına bak.

**5. Kombiyi izle.** Duotec kılavuzuna göre kombi devreye girdiğinde ekranda alev sembolü görünür. Kod kalktı mı, alev geldi mi, bak.

**6. Kod dönüyorsa dur.** Baymak kılavuzlarının sınırı net: sorun devam ederse yetkili servisi ara. Reset için kılavuzda bir deneme sayısı yok; sınırı sen uydurma, kod geri geldiyse servise bildir.

## Basınç aralığın dışındaysa kılavuz ne diyor?

Duotec ve Eco kılavuzları aynı şeyi söylüyor. Yüksek basınçta boşaltma musluğu açılarak basınç istenen aralığa getirilir. Düşük basınçta doldurma musluğu açılarak basınç yükseltilir ve hava yapmaması için doldurma musluğu çok yavaş açılır. Basınç düşmesi sık tekrarlanıyorsa yetkili servise başvurulur. Eco kılavuzu ayrıca kombi sürekli basınçlandırma gerektiriyorsa su kaçağı olabileceğini ve yetkili servisin bilgilendirilmesi gerektiğini yazıyor. Basıncın neden düştüğü için [kombi basıncı sürekli düşüyor](/blog/kombi-basinc-dusuyor/) yazısına bak.

## E03 ile karıştırılan kodlar

Aynı hata tablosunda basınçla ilgili ayrı kodlar var: **F37** düşük su basıncı, **F40** yüksek su basıncı. Aşırı ısınma kodu bunlardan ayrı bir satırdır; ekranda E03 yazıyorsa kılavuz bunu basınç hatası olarak değil, aşırı ısınma hatası olarak adlandırıyor. Ateşleme sorunu yaşıyorsan tablodaki karşılığı **E01**'dir; onun adımları için [Baymak kombi E01 hatası](/blog/baymak-kombi-e01-hatasi/) yazısına bak. Kodların hangisinin kombinde çıktığı, servise vereceğin bilginin en değerli parçasıdır.

## Tesisat kaynaklı olabilir mi?

Duotec ve Eco kılavuzlarının montaj bölümünde ilginç bir cümle var: ısıtma devresi tesisatında pislik, tıkanıklık, tesisat kalıntısı, çapak ya da cüruf bulunması kombinin randımansız çalışmasına, aşırı ısınmasına ve sesli çalışmasına neden olabilir. Kılavuz bu durumda tesisat nedeniyle oluşan arıza ve problemlerin garanti kapsamı dışında olduğunu da yazıyor. Bu cümle E03'ü açıkça tanımlamıyor; ama aşırı ısınmanın tesisat tarafından da tetiklenebileceğini gösteriyor. Tesisatı temizletmek ya da kontrol ettirmek servis işidir.

⛔ **Kendin-çöz sınırı burada biter.** Kılavuzlar kombinin bakımının ve temizliğinin yalnız yetkili kişilerce yapılmasını istiyor. Basınç okumak ve reset sana, kombinin içi, gaz hattı ve tesisat servise aittir.

## Servisi aramadan önce not al

1. Ekrandaki kod tam olarak ne yazıyor?
2. Kombinin modeli ne?
3. Kombi soğukken manometre kaç bar gösteriyor?
4. Reset'ten sonra kombi yandı mı, kod ne kadar sürede geri geldi?
5. Aynı kod daha önce de çıktı mı, kaç kez çıktı?

Bu beş cevapla servise "kombi bozuldu" demek yerine somut bir tablo anlatabilirsin; bu da servisin işini ve senin beklemeni kısaltır.

Baymak'ın diğer kodları için [Baymak kombi arıza kodları](/blog/baymak-kombi-ariza-kodlari/) listesine bak. Kombi hiç yanmıyorsa [kombi yanmıyor](/blog/kombi-yanmiyor/) yazısı var.

Ekrandaki hata kodunu ve kombinin modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

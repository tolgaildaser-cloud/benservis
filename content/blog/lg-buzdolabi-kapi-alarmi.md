---
title: "LG buzdolabı kapı alarmı: kapı kapalıyken öter"
description: "LG buzdolabı kapı kapalıyken uyarı sesi mi veriyor? LG Türkiye'nin sırası: fazla yiyecek, raflar, poşet ve örtü, conta temizliği, contayı oluğa bastırma."
slug: "lg-buzdolabi-kapi-alarmi"
date: "2026-09-30"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, 29 Eyl'de kota nedeniyle bekletilen konu). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile yeniden indirildi, HTTP 200.
# Kaynak LG Türkiye'nin kendi yardım kütüphanesi (lg.com/tr). ABD LG kaynağı KULLANILMADI. Web araması yalnız sayfa yerini bulmak için (29 Eyl).
# Metin, sayfanın gömülü "support-help-article-schema" JSON-LD articleBody alanından çıkarıldı (kaynak-lg-buzdolabi-sprint/ext.py). HTML md5'i dinamik; tekrar üretilebilir kanıt metin md5'i.
# Yerel kopya: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-lg-buzdolabi-sprint/2026-09-30/hl-20153397123079.{html,txt}
#  A1) "[LG buzdolabı gürültüsü] Kapı kapalıyken bile uyarı sesi geliyor." (2025-09-27)
#      https://www.lg.com/tr/destek/product-support/troubleshoot/help-library/cs-CT52000193-20153397123079/
#      html md5 c84ac38efe9c963387c9e257ae4aab1c (30 Eyl) · metin md5 ad5293fe076953520885ff255826dccb (29 Eyl ile birebir)
# Birebir alıntılar:
#   "Bu nedenle, kapı belirli bir süre açık kalırsa, kapı açık alarmı çalar.Ancak, kapı tamamen kapalıyken bile kapı açık alarmı çalmaya devam ederse, lütfen bir servis teknisyenine kontrol ettirin."
#   "➔ Yiyeceklerin bir kısmını dışarı çıkarın ve kapıyı kapatın." / "…kapı bölmesi yiyecekle aşırı doldurulursa, yiyeceğin ağırlığı kapının gevşemesine neden olabilir."
#   "➔ Yanlış monte edilmiş çekmeceleri veya rafları çıkarın ve tekrar yerine koyun."
#   "Buzdolabının üstünde bir kapak varsa veya buzdolabı kapağındaki saklama alanında plastik poşetleriniz varsa, buzdolabı kapısına sıkışabilecekleri için bunları çıkarın."
#   "➔ Kapı contasını deterjanla temizleyin." / "Kapı contasını sıcak buharda pişirilmiş bir havluyla silin, ardından bir diş fırçası veya deterjanlı süngerle temizleyin."
#   "➔ Kapı contasını ellerinizle oluğuna geri bastırın. Kapı contasının bir kısmı çıkıntı yapıyor veya sarkıyorsa, buzdolabı kapısındaki oluğa oturacak şekilde bastırın."
#   "Buzdolabının nasıl kurulduğuna bağlı olarak, kapı contasının buzdolabı kapısına yapışması değişebilir." (tesviye vidaları cümlesi)
# ÇEVİRİ NOTU: "sıcak buharda pişirilmiş bir havlu" LG TR metnindeki makine çevirisi; yazıda "sıcak, nemli havlu" dendi. "Buzdolabı kapakları" (poşet cümlesi) bağlamda buzdolabının üstüne örtülen örtü/kapak; yazıda "üstündeki örtü" dendi.
# BİLEREK YAZILMAYANLAR: tesviye vidası ayarı adım olarak yazılmadı (alet gerekebilir, ALET KURALI) — gövdede numarasız anıldı · alarm süresi/saniye (belgede yok) · alarmı kapatma tuşu (belgede yok) · conta değişimi · fiyat.
# Alıntı denetim tablosu: lg-buzdolabi-kapi-alarmi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Deterjanlı sünger", "Sıcak, nemli havlu", "Yumuşak diş fırçası"]
steps:
  - "Buzdolabındaki yiyeceklerin bir kısmını çıkar, kapı bölmesini hafiflet ve kapıyı kapat."
  - "Yanlış yerleşmiş çekmece ya da rafları çıkar ve yerine düzgün tak."
  - "Buzdolabının üstündeki örtüyü ve kapı bölmesindeki plastik poşetleri kaldır."
  - "Kapı contasını sıcak, nemli bir havluyla sil, sonra diş fırçası ya da deterjanlı süngerle temizle."
  - "Çıkıntı yapan ya da sarkan contayı elinle kapıdaki oluğuna geri bastır."
faq:
  - q: "LG buzdolabı neden kapı alarmı veriyor?"
    a: "LG'ye göre kapı açıkken soğuk hava dışarı çıkar, içerisi ısınır ve buzdolabı sıcaklığı düşürmek için çalışmaya devam eder. Bu durum parçaların arızalanmasına ve elektrik tüketiminin artmasına yol açabileceği için kapı belirli bir süre açık kalınca kapı açık alarmı çalar."
  - q: "Kapı kapalı görünüyor ama alarm çalıyor, neden?"
    a: "LG Türkiye beş durum sayıyor: buzdolabı ya da kapı bölmesi çok dolu, raf veya çekmece yanlış takılmış, üstteki örtü ya da kapıdaki poşet kapıya takılıyor, kapı contası kirden dolayı iyi yapışmıyor ya da conta yerinden çıkmış. Bunlar kapının tam kapanmasını engeller."
  - q: "Kapı contasını nasıl temizlemeliyim?"
    a: "LG'nin önerisi: contayı sıcak, nemli bir havluyla sil, ardından bir diş fırçası ya da deterjanlı süngerle temizle. LG'ye göre contada yiyecek gibi yabancı maddeler sertleşirse contanın yapışması zayıflar ve kapı düzgün kapanmayabilir."
  - q: "Her şeyi denedim, alarm hâlâ çalıyor. Ne yapmalıyım?"
    a: "LG'nin yazdığı sınır açık: kapı tamamen kapalıyken bile kapı açık alarmı çalmaya devam ederse buzdolabını bir servis teknisyenine kontrol ettir."
images:
  coverAlt: "Kapısı aralık bir buzdolabının kapı contasını bir el nemli havluyla siliyor, kapı rafında birkaç şişe duruyor"
---

Kapı kapalı, ama buzdolabı uyarı sesi vermeye devam ediyor. LG Türkiye'nin yardım sayfası bu durumu "**Kapı kapalıyken bile uyarı sesi geliyor**" başlığıyla anlatıyor. LG'ye göre alarm, kapı belirli bir süre açık kalınca çalar; kapı kapalı göründüğü hâlde çalıyorsa kapı çoğu zaman tam kapanmıyordur. Sebeplerin çoğu evde kontrol edilebilecek türden: fazla yiyecek, yanlış takılmış raf, kapıya takılan poşet ya da kirli, yerinden çıkmış conta. Bu yazıda LG'nin kendi sırasını adım adım veriyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Yiyeceklerin bir kısmını çıkar, kapı bölmesini hafiflet → raf ve çekmeceleri yerine düzgün tak → üstteki örtüyü ve kapıdaki poşetleri kaldır → contayı temizle → sarkan contayı oluğuna bastır. Kapı tamamen kapalıyken alarm sürüyorsa servis teknisyenine kontrol ettir.

## Alarm neden çalar?

LG'nin açıklaması şu: kapı açıkken soğuk hava dışarı çıkar ve içerideki sıcaklık yükselir. Buzdolabı bu sırada sıcaklığı yeniden ayarlanan değere düşürmek için çalışmaya devam eder. LG'ye göre buzdolabının kapı açıkken çalışmaya devam etmesi **parçaların arızalanmasına ve elektrik tüketiminin artmasına** neden olabilir. Bu yüzden kapı belirli bir süre açık kalırsa **kapı açık alarmı** çalar.

Yani alarm çoğu zaman bir arıza değil, kapının tam kapanmadığının işaretidir.

## Adım adım: evde denenecekler

**1. Yiyeceklerin bir kısmını çıkar.** LG'ye göre buzdolabı yiyecekle doluysa kapı düzgün kapanmaz. Ayrıca kapı bölmesi aşırı doldurulursa **yiyeceğin ağırlığı kapının gevşemesine** yol açabilir. Yiyeceklerin bir kısmını çıkar, kapı bölmesini hafiflet ve kapıyı kapat.

**2. Raf ve çekmeceleri yerine düzgün tak.** Temizlikten sonra bir çekmece ya da raf yerine tam oturmazsa kapı düzgün kapanmayabilir. LG'nin önerisi: **yanlış monte edilmiş çekmeceleri ya da rafları çıkar ve tekrar yerine koy.**

**3. Örtüyü ve poşetleri kaldır.** Buzdolabının üstünde bir örtü varsa ya da kapıdaki saklama bölmesinde plastik poşetler duruyorsa, LG'ye göre bunlar kapıya takılıp kapının düzgün kapanmasını engelleyebilir. Bunları kaldır.

**4. Kapı contasını temizle.** LG'ye göre contada yiyecek gibi yabancı maddeler sertleşirse, bu maddelerin yapışkanlığı contanın kapıya yapışmasını zayıflatır ve kapı düzgün kapanmayabilir. Contayı önce **sıcak, nemli bir havluyla** sil, ardından **bir diş fırçası ya da deterjanlı süngerle** temizle. Genel conta bakımı için [buzdolabı kapı contası bakımı](/blog/buzdolabi-kapi-contasi-bakimi/) yazısına bakabilirsin.

**5. Contayı oluğuna geri bastır.** Contanın bir kısmı çıkıntı yapıyor ya da sarkıyorsa LG'nin önerisi: contayı **ellerinle** kapıdaki oluğa oturacak şekilde geri bastır.

## Kurulumla ilgili not

LG'ye göre kapı contasının kapıya ne kadar iyi yapıştığı, buzdolabının **nasıl kurulduğuna** göre de değişebilir. LG, kapının boşluk bırakmasını önlemek için buzdolabının düz durmasını ve tesviye (ayar) vidaları gibi parçalarla önünün biraz kaldırılmasını öneriyor. Bu ayar kurulumla ilgilidir; nasıl yapılacağını kendi kılavuzunun kurulum bölümünden kontrol et, emin değilsen ayarı yetkili servise bırak. Kapı ile ilgili markadan bağımsız anlatım [buzdolabı kapısı tam kapanmıyor](/blog/buzdolabi-kapisi-tam-kapanmiyor/) yazısında.

## Ne zaman servis?

⛔ **LG'nin sınırı net:** kapı **tamamen kapalıyken bile** kapı açık alarmı çalmaya devam ederse buzdolabını **bir servis teknisyenine kontrol ettir.** Yukarıdaki beş adımı yaptıysan ve kapı gözle tam kapalı olduğu hâlde alarm sürüyorsa kendin-çöz sınırı burada biter.

Buzdolabından alarm dışında başka sesler de geliyorsa LG'nin ses rehberi [LG buzdolabı ses yapıyor](/blog/lg-buzdolabi-ses-yapiyor/) yazısında. Kapı uzun süre aralık kaldıysa buzdolabı yeterince soğutmayabilir; LG'nin soğutma kontrol sırası [LG buzdolabı soğutmuyor](/blog/lg-buzdolabi-sogutmuyor/) yazısında. Buz yapıcılı modelde buz da gelmiyorsa kardeş yazı: [LG buzdolabı buz yapmıyor](/blog/lg-buzdolabi-buz-yapmiyor/). LG'nin kodları için [LG buzdolabı hata kodları](/blog/lg-buzdolabi-hata-kodlari/) yazısına bakabilirsin.

## Servisi aramadan önce iki dakikalık özet

1. Alarm kapı gözle tam kapalıyken de çalıyor mu?
2. Kapı bölmesi ağır ya da çok dolu mu?
3. Yakın zamanda raf veya çekmece çıkarıp temizledin mi?
4. Contada sarkan ya da oluktan çıkmış bir yer var mı?
5. Hangi kapı (soğutucu mu, dondurucu mu) alarm veriyor?

Bu beşine cevabın varsa servise "alarm çalıyor" yerine somut bir tablo anlatabilirsin.

---

**Kaynak künyesi.** Nedenler ve adımlar LG Türkiye'nin "Kapı kapalıyken bile uyarı sesi geliyor" yardım sayfasından alınmıştır. LG'nin kendi notuna göre bu içerik tüm modeller için hazırlanmıştır, resimler ya da içerik ürününden farklı olabilir; kendi cihazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

Belirtiyi ve buzdolabının modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

---
title: "Arçelik buzdolabı hata kodları: üreticinin yayımladığı 20 kod"
description: "Arçelik buzdolabında E0'dan E24'e yirmi kodun üreticideki karşılığı, \"kodlar toplanır\" iddiasının durumu ve hangi noktada servis gerektiği."
slug: "arcelik-buzdolabi-hata-kodlari"
date: "2026-08-21"
category: "Buzdolabı"
# 🔴 22 Ağu 2026 — ANA TABLO ÇÖKTÜ, YAZI BAŞTAN YAZILDI (kod tablosu denetimi, TARAMA-1).
#
# Yazının merkezindeki "kodlar TOPLANARAK üretilir" şeması (E3 = E1 + E2, E7 = üçünün
# toplamı, F0'dan itibaren ısıtıcı eklenir) hiçbir üretici belgesinde geçmiyor.
# Üreticinin tablosu bunu da yalanlıyor: E2 = fresh food EVAPORATÖR sensörü,
# E3 = fresh food HAVA sensörü — ikisi ayrı, tek başına arızalar. E6 ve E7 listede YOK.
# F ile başlayan kod da yok. S1/S2/S5 ve D1/D2/D3/D6 da yok → hepsi çıkarıldı.
#
# 📌 TERS BULGU — EKSİK YAYIN: yazı "E2 ve E3 için kaynaklar birbirini tutmuyor,
#    yazmıyoruz" diyordu. Bu gerekçe HATALIYDI; ikisi de üreticinin resmî listesinde
#    ve servis el kitabında net. Doğrulanamayanı yazmamak doğru ilke, ama
#    doğrulanabiliri "doğrulanamıyor" diye atlamak da bir hata. İkincisi olmuş.
#
# Kaynak (bu koşuda tarayıcı başlık setiyle 200 çekildi):
#   arcelik.com.tr/blog/buzdolabi-hata-kodlari
#   beko.com.tr/blog/buzdolabi-hata-kodlari-rehberi   → ikisi BİREBİR aynı 20 kod
# Yayımlanan liste: E0-E5, E8-E20, E24. (E6, E7, E21-E23 tabloda yok — liste atlamalı.)
# ⛔ guide DEĞİŞMEDİ; steps'te yalnız 4. adım güncellendi (eski hâli iki-şema tezine
#    dayanıyordu), gövdedeki **4. paragrafı da birlikte değiştirildi.
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Telefon kamerası", "Kuru fırça", "Kâğıt ve kalem"]
steps:
  - "Ekrandaki kodu fotoğrafla; E harfi ile 8 rakamı panelde kolayca karışır."
  - "Model numarasını cihazın iç yan duvarındaki etiketten oku ve kodun yanına yaz."
  - "Fişi çek, 5-10 dakika bekle, tekrar tak ve kodun geri gelip gelmediğine bak."
  - "Kod geri geldiyse tam olarak hangi numara olduğunu bir kez daha kontrol et; E ile 8 ve 0 ile 8 panelde kolayca karışır."
  - "Her iki kapının tam kapandığını ve contaların temiz olduğunu kontrol et."
  - "Cihazı duvardan birkaç santim öne çek, arka ızgaranın tozunu dışarıdan fırçayla al."
  - "Dondurucunun arka duvarında kalın karlanma var mı diye bak, varsa fotoğrafla."
  - "Kod, model numarası ve gördüğün belirtiyi tek bir nota topla ve servise onu ilet."
faq:
  - q: "Arçelik buzdolabında aynı kod neden her listede farklı yazıyor?"
    a: "Çünkü dolaşımdaki listelerin çoğu üreticinin kendi tablosuna dayanmıyor. Arçelik ve Beko yirmi kodluk tek bir liste yayımlıyor ve her kod tek bir şeyi bildiriyor: örneğin E2 fresh food bölmesinin evaporatör sensörü, E3 aynı bölmenin hava sensörü demek. İnternette çok yayılan kodların toplanarak üretildiği açıklamasının ise hiçbir üretici belgesinde karşılığı yok. Kesin karşılık için üreticinin listesine ya da kendi cihazının kullanım kılavuzuna bak."
  - q: "Hata kodu görünce buzdolabını fişten çekmek zararlı mı?"
    a: "Hayır, kısa süreli bir reset zararsızdır ve teşhisin ilk adımıdır. Fişi çekip 5-10 dakika bekledikten sonra tekrar takmak, elektrik dalgalanması sonrası kartta kalan geçici kodları siler. Bu süre boyunca kapıyı açmazsan içerideki soğuk yük de korunur. Tekrar takınca kod geri geliyorsa artık geçici bir takılmayla değil gerçek bir bildirimle karşı karşıyasın."
  - q: "Ekranda E harfi yerine S ya da D ile başlayan bir şey var, bu da hata kodu mu?"
    a: "Olabilir ama biz o kodlara anlam yazmıyoruz. Üreticinin yayımladığı listede ve taranan servis el kitaplarında S ya da D ile başlayan bir kod bulunmuyor; internette bu harflerle dolaşan karşılıkların dayanağını doğrulayamadık. Ekranında böyle bir bildirim varsa tek güvenilir kaynak kendi modelinin kullanım kılavuzudur; kılavuz elinde yoksa model numarasıyla üreticinin destek sayfasından indirilebilir."
  - q: "Kodu not ettim, servisi aramadan önce başka ne yapabilirim?"
    a: "Kodun yanına model numarasını, kodun ilk ne zaman göründüğünü ve cihazın o sırada nasıl davrandığını yaz. Dondurucu soğutup soğutucu ılıklaşıyor mu, arka duvarda kalın karlanma var mı, kompresör sesi geliyor mu gibi gözlemler kodun kendisi kadar değerlidir. Bu notla arayan bir kullanıcı, servisin doğru parçayla gelme ihtimalini belirgin biçimde artırır."
images:
  coverAlt: "Ahşap dolaplı mutfakta duran, alt bölmesi derin dondurucu olan iki kapılı buzdolabı"
---

Sabah kapağı açtın, panelde derece yerine E ile başlayan bir şey yanıp sönüyor. Telefonla arattın ve işler daha da karıştı: aynı kod için üç ayrı sitede üç ayrı cevap var. Bu kafa karışıklığı senin hatan değil — Arçelik buzdolaplarında gerçekten birden fazla kod şeması kullanılıyor ve listelerin çoğu hangisini anlattığını söylemiyor. Bu yazıda **üreticinin kendi sayfasında yayımladığı yirmi kodu** veriyoruz — ve internette çok yayılan "kodlar toplanarak üretilir" açıklamasının neden doğru olmadığını da söylüyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚠️ **Önce bunu bil:** Aşağıdaki karşılıklar yaygın model ailelerine aittir. Arçelik'te kod şeması seriye göre değişir; kesin tablo cihazının kullanım kılavuzundadır. Kılavuz elinde yoksa model numarasıyla üreticinin destek sayfasından indirebilirsin.

## Adım adım: Arçelik buzdolabında kod okuma

**1. Kodu fotoğrafla.** Panelde E harfi ile 8 rakamı, 0 ile O kolayca karışır. Ekranı yakından çek; sonra rahat rahat bakarsın.

**2. Model numarasını bul.** Etiket çoğu modelde soğutucu bölmenin iç yan duvarındadır. Kodun yanına model numarasını yazmadan yapılan her yorum tahmindir.

**3. Resetle.** Fişi çek, **5-10 dakika bekle**, tekrar tak. Elektrik kesintisi ya da dalgalanma sonrası kartın geçici kod göstermesi yaygındır.

**4. Numarayı bir kez daha kontrol et.** Kod geri geldiyse ekrana yeniden bak: panelde **E ile 8**, **0 ile 8** kolayca karışır. Yanlış okunan tek bir hane seni bambaşka bir arızanın peşine düşürür.

**5. Kapıları kontrol et.** Her iki kapının tam kapandığını, contaların temiz ve esnek olduğunu kontrol et. Yarım kapanan bir kapı hem sıcaklık uyarısı hem karlanma üretir.

**6. Arkayı havalandır.** Cihazı duvardan **birkaç santim öne çek**, arka ızgaranın tozunu **dışarıdan** kuru bir fırçayla al. ⚠️ Kapağı açıp içeri girmeye gerek yok.

**7. Karlanmaya bak.** Dondurucunun arka duvarında kalın bir buz tabakası varsa fotoğrafla. Bu, defrost hattıyla ilgili kodların en görünür belirtisidir.

**8. Notu tamamla.** Kod, model numarası ve gözlemlerini tek bir nota topla; servisle konuşurken elindeki en güçlü kâğıt bu olacak.

## Üreticinin yayımladığı kod listesi

Arçelik ve Beko bu tabloyu kendi sitelerinde **birebir aynı** yayımlıyor. Yirmi kod var ve her kod **tek bir şeyi** bildirir.

### Bölme sensörleri

| Kod | Üreticinin karşılığı |
|---|---|
| **E0** | Freezer bölmesi hava sensörü hatası |
| **E1** | Freezer bölmesi evaporatör sensörü hatası |
| **E2** | Fresh food bölmesi evaporatör sensörü hatası |
| **E3** | Fresh food bölmesi hava sensörü hatası |
| **E5** | Ortam sensörü / nem sensörü hatası |
| **E10** | Joker bölmesi hava sensörü hatası |
| **E11** | Joker bölmesi evaporatör sensörü hatası |
| **E19** | Flap hava sensörü hatası |
| **E20** | Biofresh hava sensörü hatası |

### Defrost (buz çözme)

| Kod | Üreticinin karşılığı |
|---|---|
| **E4** | Freezer defrost sistem hatası |
| **E12** | Joker defrost sistem hatası |

### Fanlar

| Kod | Üreticinin karşılığı |
|---|---|
| **E13** | Freezer bölmesi fan hatası |
| **E14** | Joker bölmesi fan hatası |
| **E15** | Kondanser fan hatası |
| **E16** | Fresh food bölmesi fan hatası |
| **E17** | Flap fan hatası |
| **E18** | Biofresh fan hatası |
| **E24** | U-1 kartta fresh food bölmesi fan hatası |

### Buzmatik

| Kod | Üreticinin karşılığı |
|---|---|
| **E8** | Buzmatik hava sensörü hatası |
| **E9** | Buzmatik motor hatası |

> 📌 **Liste atlamalı.** `E6`, `E7`, `E21`, `E22` ve `E23` üreticinin yayımladığı tabloda **yok**. İnternette bu numaralara verilen karşılıkların dayanağı da yok.

## "Kodlar toplanarak üretilir" iddiasının durumu

İnternette çok yayılan bir açıklama var: kartın üç sensörü izlediği ve birden fazlası hata verdiğinde ekrana **toplamlarının** düştüğü — yani `E3 = E1 + E2`, `E7 = üçünün toplamı` gibi. Bu yazının önceki sürümü de bu şemayı anlatıyordu.

**Böyle bir mekanizma hiçbir üretici belgesinde geçmiyor.** Ve tablonun kendisi de bunu doğrulamıyor: üreticiye göre `E2` **fresh food evaporatör sensörü**, `E3` ise **fresh food hava sensörü** demek — ikisi de ayrı, tek başına arızalar. `E6` ve `E7` ise listede hiç yok.

Yüksek bir numara gördüğünde de aynı şey geçerli: `E17` "flap fan hatası" demektir, "on yedi şey birden bozuldu" değil.

## Daha önce yazmadığımız iki kod: E2 ve E3

Bu yazının önceki sürümü **E2 ve E3 için "kaynaklar birbirini tutmuyor, yazmıyoruz"** diyordu. Bu gerekçe hatalıydı: iki kod da üreticinin kendi resmî listesinde ve servis el kitabında net olarak tanımlı.

- **E2** — fresh food bölmesi **evaporatör** sensörü hatası
- **E3** — fresh food bölmesi **hava** sensörü hatası

İkisi de soğutucu bölme tarafına bakar. Aradaki fark, sensörün nerede durduğudur: biri soğutma serpantinini, diğeri bölme içindeki havayı ölçer.

Doğrulanamayan bir kodu yazmamak doğru bir ilkedir — ama doğrulanabilir bir kodu "doğrulanamıyor" diye atlamak da bir hatadır. Burada ikincisi olmuş.

## S ve D ile başlayan bildirimler

Bu yazının önceki sürümü **S1, S2, S5** ve **D1, D2, D3, D6** kodlarını da veriyordu. Bu numaralar üreticinin yayımladığı listede ve taranan servis el kitaplarında **geçmiyor**; anlamları doğrulanamadığı için çıkarıldı.

Ekranında E dışında bir harfle başlayan bir bildirim varsa tek güvenilir kaynak kendi modelinin kullanım kılavuzudur.

**Kendin kontrol et:** `E4` ya da `E12` gördüysen dondurucunun arka duvarına bak. Kalın, düzgün bir buz tabakası birikmişse defrost hattı karlanmayı çözemiyor demektir; belirti kodu doğruluyor. Bölmenin giderek zayıf soğuması da aynı tabloya işaret eder. Fan kodlarında (`E13`–`E18`) ise sesi dinle: fan sesi tamamen kesildiyse ya da sürtünmeli bir ses geliyorsa pervaneye buz değiyor olabilir.

⛔ **Panel ve iç kapakların arkasına girme.** Sensörler, fan ve defrost ısıtıcısı iç panellerin arkasındadır; orada hem 220V hat hem de delinirse cihazı bitiren soğutucu borular var. Kapak ve panel seviyesi kullanıcıya, tablanın altı servise aittir.

## Kod yokken de dinlenecek belirtiler

Kod sistemi yalnızca kartın izleyebildiği devreleri görür. Gaz kaybı gibi arızalar çoğu modelde hiç kod üretmez. Kompresör sesi tamamen kesildiyse, arka bölüm hiç ısınmıyorsa ya da soğutma haftalar içinde kademeli olarak zayıflıyorsa ekran temiz olsa bile belirtinin peşine düşmek gerekir.

## Hangi noktadan sonra servis işi

Reset sonrası geri gelen her kod, kompresörü işaret eden bildirimler ve kalın karlanmanın eşlik ettiği defrost kodları servis konusudur. Sensör, fan ve ısıtıcı değişimi panel sökümü gerektirir; bu hem elektrik hem soğutucu devre riski taşır. Sende kalan iş, kodu ve model numarasını doğru aktarmak — bu ikisi, işin ilk seferde bitmesini kolaylaştıran en ucuz hazırlıktır.

Markalar arası genel kod mantığını benservis.com blogundaki buzdolabı hata kodları yazısında, Samsung kullanıyorsan bambaşka işleyen o tabloyu Samsung buzdolabı hata kodları yazısında bulabilirsin. Cihazının koduna ve belirtisine göre tahmini maliyeti görmek ve yakınındaki puanlı servisleri listelemek için benservis.com'daki ücretsiz teşhisi kullanabilirsin. Bil, gör, çağır.

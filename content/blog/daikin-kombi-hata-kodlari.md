---
title: "Daikin kombi hata kodları ve resetleme: kılavuza göre"
description: "Daikin kombi hata kodlarını Premix VZ ve NDJ kullanım kılavuzlarına göre oku: 11-64, 1J-64, HJ-09 gibi kodlar, reset adımı ve servise başvuru sınırı."
slug: "daikin-kombi-hata-kodlari"
date: "2026-10-30"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı, P02 (YK #197 boşluk 2. dalga, BOSLUK.md #82: "Daikin kombi arıza kodları / resetleme / kullanımı"). Satırdan en güçlü tek konu seçildi: hata kodları + resetleme (kanıt OT#3,#5,#6,#8 "daikin kombi", OT#8 "kombi hata kodları"). Slug origin/main'de yok; main'de Daikin kombi yazısı yok (yalnız Daikin klima).
# Kaynak (#88): Daikin Türkiye'nin kendi sitesinden (daikin.com.tr, ürün sayfaları) bu koşuda iki kullanım kılavuzu indirildi: Premix VZ (D2CPX024AATR / 030 / 038, 12 s., md5 05b5c0717ecff552c85040ecc7e5a6ba) ve Premix NDJ (D2CND024A1ABTR / 028 / 035, 16 s., md5 d9be634c5bc190a69e04d9b45e217145). URL, sayfa ve alıntılar KAYNAK.md'de.
# BİLEREK YAZILMAYANLAR: servis menüsü, parametre ayarı, geçmiş hata kaydı (yetkili servis işi) · kılavuzda "Yetkili servise başvurun" yazan kodların nedenleri · HJ-08 için sayısal hedef (iki kılavuz farklı yazıyor) · "kaç kez reset" sayısı (belgede yok; yalnız "belirli bir deneme" geçiyor) · ücret (#46).
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Ekrandaki hata kodunu olduğu gibi not et."
  - "Hatanın geçici mi kalıcı mı olduğuna bak; kalıcı hatada ekranda reset gerektiğini gösteren sembol çıkar."
  - "Kodu kılavuzdaki tabloda bul ve kullanıcıya bırakılan kontrolü yap: gaz vanası, radyatör vanaları ya da sistem basıncı."
  - "Hatanın sebebi giderildiyse RESET tuşuna bas."
  - "Reset'e arka arkaya basma; kombi kilitlenirse elektrik bağlantısını kesip yeniden aç."
  - "Kod tekrarlıyorsa kodu ve modeli yazıp yetkili servise başvur."
faq:
  - q: "Daikin kombi nasıl resetlenir?"
    a: "Premix VZ kılavuzunda K1 tuşu reset tuşudur. Premix NDJ kılavuzunda Mod ve Reset aynı tuştadır ve hata durumunda cihazı resetler. Her iki kılavuza göre kalıcı hatada kombinin tekrar çalışması için reset gerekir ve reset ancak hatanın sebebi ortadan kalkmışsa işe yarar."
  - q: "Daikin kombi 11-64 hatası ne demek?"
    a: "Premix VZ ve NDJ kılavuzlarında 11-64, alev oluşmaması. Kılavuzun adımı: gaz vanasının açık olduğundan emin ol ve üçüncü başarısız ateşleme denemesinden sonra kombiyi resetle."
  - q: "Daikin kombi HJ-09 düşük sistem basıncı hatası nasıl giderilir?"
    a: "Premix VZ kılavuzu doldurma vanası aracılığıyla sistemin basıncı 0,8 bar veya üzerine çıkana kadar su doldurmanı söylüyor. NDJ kılavuzu 0,8 bar seviyesine çıkana kadar doldurmayı yazıyor."
  - q: "Reset atmaya devam edersem ne olur?"
    a: "Premix VZ kılavuzuna göre hata sebebi ortadan kalkmadan sürekli reset atılırsa belirli bir denemeden sonra cihaz kendini kilitler ve U4-67 hatasına geçer. Bu hata yalnız elektrik beslemesi kesildiğinde giderilebilir."
images:
  coverAlt: "Duvara asılı jenerik beyaz kombinin sade dijital ekranında bir hata kodu, yanında reset tuşuna uzanan beyaz eldivenli sade siluet el"
  steps:
    - "Kombi ekranındaki kodu not defterine yazan beyaz eldivenli sade siluet el"
    - "Kombi ekranının köşesinde reset gerektiğini gösteren soyut bir simgeyi işaret eden beyaz eldivenli sade siluet el"
    - "Kombinin altındaki gaz vanasını, radyatör vanasını ve basınç göstergesini sırayla gösteren beyaz eldivenli sade siluet el"
    - "Kombi panelindeki reset tuşuna basan beyaz eldivenli sade siluet el"
    - "Kombinin elektrik fişini prizden çeken beyaz eldivenli sade siluet el"
    - "Telefonu ve kullanım kılavuzunu yan yana tutan beyaz eldivenli sade siluet el"
---

Daikin kombinin ekranında "11-64" ya da "HJ-09" gibi tireli bir kod görüyorsan bunlar Daikin'in kendi kullanım kılavuzlarındaki hata kodları. Bu yazıdaki satırlar Daikin Türkiye'nin sitesindeki iki kılavuza dayanıyor: Premix VZ ve Premix NDJ. Kılavuzlar her kod için "kazanı resetleyin" ya da "yetkili servise başvurun" gibi kısa adımlar veriyor. Biz de yalnız kullanıcıya bırakılanları anlatıyoruz.

> 🔥 **Gaz kokusu varsa önce bu.** VZ kılavuzuna göre: elektrikli cihazların düğmelerine ve fişlerine dokunma, yakında telefon kullanma, kibrit ve çakmak kullanma, sigara içme, binanın gaz vanasını kapat, bütün kapı ve pencereleri aç, çevredeki insanları uyar, binayı terk et, gaz şirketini ve yetkili servisi ara. Gaz çevrimi ve kazan üzerindeki değişiklikler yalnız yetkili servisin işidir.

## Hata kodu nasıl görünür?

Kılavuza göre kazanda hata olduğunda ekranda hata kodu görünür. İki tür hata var. **Geçici hatada** sebep ortadan kalkınca kumanda paneli hata durumundan çıkar ve ana ekran gelir. **Kalıcı hatada** kombinin yeniden çalışması için reset gerekir; ekranda kodla birlikte reset gerektiğini gösteren bir sembol de görünür.

## Kılavuzdaki başlıca kodlar

| Kod | Kılavuzdaki hata | Kılavuzun adımı |
|---|---|---|
| 11-64 | Alev oluşmaması | Gaz vanasının açık olduğundan emin ol; üçüncü başarısız ateşlemeden sonra resetle |
| 1J-64 | VZ'de merkezi ısıtma suyu yüksek sıcaklık hatası, NDJ'de limit termostat hatası | Radyatör vanalarının açık olduğundan emin ol, sistem basıncını kontrol et, düşükse tamamla, resetle |
| HJ-09 | Düşük sistem basıncı | Doldurma vanasıyla basıncı 0,8 bar seviyesine çıkar |
| HJ-08 | Yüksek sistem basıncı | Basıncı düşürmek için suyu radyatörlerden boşaltabilirsin |
| J6-01 | Yüksek gidiş suyu sıcaklığı | Radyatör vanalarını ve basıncı kontrol et |
| 10-65, 13-64, E1-64 | Gaz valfi akımı, fan hızı, yanlış alev sinyali | Resetle, tekrarlarsa servis |
| U4-67 | Reset denetimi | Elektrik bağlantısını kesip yeniden aç |
| HJ-10, U2-01 | Su basınç sensörü, düşük besleme voltajı | Yetkili servise başvur |

Tablo kısaltılmıştır; kılavuzda sensör, kart ve yazılım kodlarının hepsi var ve çoğunun adımı "yetkili servise başvurun". Kendi modelinin kılavuzundaki satıra bak: iki kılavuzda aynı kodun açıklaması farklı olabiliyor.

## Adım adım: kod çıkınca

**1. Kodu not et.** Tire, harf ve rakamıyla olduğu gibi yaz. Servis araman gerekirse ilk soracakları şey bu.

**2. Geçici mi kalıcı mı bak.** Ekranda reset sembolü varsa hata kalıcıdır, kombi reset olmadan çalışmaz. Sembol yoksa kılavuza göre sebep ortadan kalkınca kombi kendiliğinden hata durumundan çıkar.

**3. Kullanıcıya bırakılan kontrolü yap.** Kodun satırında gaz vanası, radyatör vanaları ya da sistem basıncı geçiyorsa yalnız onlara bak. Basıncın neden düştüğü için [kombi basıncı sürekli düşüyor](/blog/kombi-basinc-dusuyor/), doğru aralık için [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) yazısına bak.

**4. RESET tuşuna bas.** VZ'de panelde K1 reset tuşudur. NDJ'de Mod ve Reset aynı tuştadır. Kılavuz, reset işleminin gerçekleşmesi için hata sebebinin ortadan kalkmış olması gerektiğini yazıyor; sebep sürüyorsa reset geçersiz olur ve ana ekran gelmez.

**5. Arka arkaya reset atma.** VZ kılavuzuna göre hata sebebi ortadan kalkmadan sürekli reset atılırsa belirli bir denemeden sonra cihaz kendini kilitler ve U4-67 hatasına geçer. Bu hata yalnız elektrik beslemesi kesildiğinde giderilir. Kılavuz deneme sayısını vermiyor; sayıyı kendin belirleme.

**6. Tekrarlıyorsa servise bildir.** Birçok satırın son cümlesi aynı: hata tekrarlarsa yetkili servise başvurun. Kombinin modelini ve kodu yaz.

## NDJ'de üç hata türü

Premix NDJ kılavuzu hataları üç türe ayırıyor. **Uyarı** hatasında kombi çalışmaya devam eder, ekran hata kodunu gösterir. **Kapatma** hatasında kombi durur ve sebep ortadan kalkınca tekrar çalışır. **Kilitleme** hatasında kombi kilitlenir, yeniden çalışması için reset gerekir ve ekranda reset gerektiğini gösteren sembol yanıp söner. NDJ'de hata olduğunda akıllı göz lambası kırmızı yanıp söner. Kılavuz hata sırasında reset tuşu hariç başka bir tuşa basarsan ana ekranın geleceğini, kumanda paneliyle bir dakika etkileşim olmazsa ekranın yine hata koduna döneceğini de yazıyor.

## Sıkça karıştırılan: AP simgesi arıza değil

VZ kılavuzuna göre ekranda AP simgesi görünüyorsa hava tahliye fonksiyonu çalışıyordur. Bu fonksiyon, elektrik bağlantısı kesilip kazan yeniden çalıştırıldığında ve 1J-64 hatasından sonra reset atıldığında devreye girer; fan ve pompa çalışır. Yani AP bir hata kodu değil, kombinin kendini hazırlamasıdır.

## Servisi aramadan önce not al

1. Ekrandaki kod ve kombinin modeli.
2. Reset sembolü var mıydı?
3. Reset'ten sonra kod ne kadar sürede geri geldi?
4. Soğukken basınç göstergesi kaç bar?

Daha geniş kod listesi için [kombi arıza kodları](/blog/kombi-ariza-kodlari/) yazısı var. Kombi hiç yanmıyorsa [kombi yanmıyor](/blog/kombi-yanmiyor/) yazısına geç.

Ekrandaki hata kodunu ve kombinin modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

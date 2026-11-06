---
title: "Derin dondurucu kendi kendine kapanıyor ya da ötüyor"
description: "Derin dondurucu kendi kendine kapanıyor ya da ötüyorsa Bosch GSN ve Uğur UED 6204 kılavuzlarına göre alarm nedenleri, normal duruşlar ve kontroller."
slug: "derin-dondurucu-kendi-kendine-kapaniyor"
date: "2026-11-10"
category: "Buzdolabı"
updated: "2026-11-10"
kisaCevap: "Derin dondurucunun motoru ayarlanan sıcaklığa ulaşınca kendiliğinden durur; Uğur UED 6204 kılavuzu tıklama sesini kompresörün devreye girip çıkması diye açıklıyor. Ötme ise çoğu zaman alarmdır: Uğur'da kapı 90 saniye açık kalınca, Bosch GSN'de dondurucu bölmesi çok ısınınca uyarı sesi duyulur."
# --- Provenans (yayında görünmez) ---
# 2026-11-06 Cum PAZ alt ajanı (YK #215 parti 2; BOSLUK.md sürüm 4 #314 "derin dondurucu kendi kendine kapanıyor / ötüyor (Bosch, Profilo)"). Slug origin/main content/blog/'da ve blog-taslaklar'da yok (6 Kas fetch, 1.311 dosya, a3d7ec3b). Yakın: derin-dondurucu-ses-yapiyor (çalışma sesleri; alarm ve kapanma yok), derin-dondurucu-dondurmuyor.
# Konu kanıtı: Google otomatik tamamlama 6 Kas 2026 (ham: _kaynak/OT-2026-11-06-ham-alinti.txt; teyit 07:17 _kaynak/OT-2026-11-06-teyit-p2.txt): "derin dondurucu kendi kendine" #1 "…kapanıyor", #2 "bosch … ötüyor", #3 "profilo … kapanıyor", #4 "bosch … kapanıyor". GSC kanıt sayılmadı.
# Belgeler (#88), düz curl -sL (özel başlık yok), HTTP 200: (A) Bosch GSN.. NoFrost dondurucu kullanma kılavuzu 8001095834_B (30 s. PDF) https://media3.bosch-home.com/Documents/8001095834_B.pdf md5 e6ea1c74e8d3d7592828b172a015aa14 — PDF s.10, 11, 16, 18, 19, 20 · (B) Uğur UED 6204 DTK NF dikey derin dondurucu kullanım kılavuzu 100935_KK (30 s. PDF) https://ugur.com.tr/Data/EditorFiles/docs/100935_KK.pdf md5 dc2a65938bae76104152ca928404b108 — PDF s.10, 11, 17, 18, 19.
# BİLEREK YAZILMAYANLAR: Profilo modeli (Profilo derin dondurucu kılavuzu bu koşuda yok; Profilo için genelleme yapılmadı) · kendi kendini test programının sonuç yorumu (servis) · kablo, kart, kompresör onarımı · NoFrost evaporatör buzunun elle çözülmesi ayrıntısı (A s.19; derin-dondurucu-buz-cozme konusu) · fiyat (#46).
# Alıntı denetimi: derin-dondurucu-kendi-kendine-kapaniyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Dondurucunun kullanma kılavuzu", "Başka bir elektrikli alet (priz denemesi için)"]
steps:
  - "Durmanın motor duruşu mu, tam kapanma mı olduğunu ayırt et."
  - "Göstergeler sönmüşse fişe, prize ve sigortaya bak."
  - "Ötüyorsa önce kapının tam kapalı olduğunu kontrol et."
  - "Uyarı sesini tuşla sustur."
  - "Hava giriş ve çıkış deliklerinin önünü aç."
  - "Bir seferde çok fazla taze yiyecek koyduysan bekle."
  - "Alarm ya da kapanma tekrar ediyorsa servise haber ver."
faq:
  - q: "Derin dondurucunun motoru neden kendi kendine durur?"
    a: "Bu normal çalışmanın parçasıdır. Uğur UED 6204 kılavuzu tıklama sesini kompresörün devreye girip çıkması olarak açıklıyor. Bosch GSN kılavuzu da çıtlama sesinin motor, şalter ya da manyetik valflerin açılıp kapanmasından geldiğini yazıyor."
  - q: "Bosch derin dondurucu neden öter?"
    a: "Bosch GSN kılavuzunda iki alarm var: kapı uzun süre açık kalınca kapı alarmı, dondurucu bölmesi çok ısınınca ısı derecesi alarmı. Isı alarmında ısı derecesi göstergesi yanıp söner; uyarı sesi ısı ayar tuşuna basılarak kapatılır."
  - q: "Derin dondurucu alarmı yeni çalıştırınca da çalar mı?"
    a: "Evet. Bosch GSN kılavuzu cihaz ilk defa çalıştırıldığında, fazla miktarda taze gıda konulduğunda ve kapı çok uzun süre açık kaldığında, dondurulmuş besinler için tehlike olmadan da alarmın devreye girebileceğini yazıyor."
  - q: "Elektrik kesildikten sonra derin dondurucuyu hemen çalıştırmalı mıyım?"
    a: "Uğur UED 6204 kılavuzu ani elektrik kesintilerinde fişi prizden çekmeni, elektrik geldikten 20 dakika sonra yeniden takmanı istiyor. Gerekçe olarak elektrik ilk geldiğinde oluşan yüksek voltajın dondurucuya zarar verebilmesini gösteriyor."
images:
  coverAlt: "Sade dikey derin dondurucu ve yanında küçük ses dalgası çizimi"
  steps:
    - "Derin dondurucunun önünde durup dinleyen beyaz eldivenli sade siluet el"
    - "Duvardaki prize fişi takan beyaz eldivenli sade siluet el"
    - "Derin dondurucunun kapısını bastırarak kapatan beyaz eldivenli sade siluet el"
    - "Derin dondurucunun kumanda panelindeki tuşa basan beyaz eldivenli sade siluet el"
    - "Derin dondurucunun önündeki eşyaları kenara çeken beyaz eldivenli sade siluet el"
    - "Derin dondurucu çekmecesine poşetli yiyecek koyan beyaz eldivenli sade siluet el"
    - "Telefonla servisi arayan beyaz eldivenli sade siluet el, yanında derin dondurucu"
---

Derin dondurucu kendi kendine kapanıyor gibi görünüyorsa önce motorun mu durduğuna, yoksa göstergelerin mi söndüğüne bak. Motorun ayarlanan sıcaklıkta durup yeniden çalışması normaldir: Uğur UED 6204 DTK NF kılavuzu tıklama sesini kompresörün devreye girip çıkması olarak açıklıyor. Ötme ise çoğu zaman bir alarmdır; Uğur'da kapı 90 saniye açık kalınca, Bosch GSN kılavuzunda dondurucu bölmesi çok ısınınca uyarı sesi duyulur.

Bosch GSN kılavuzu ısı derecesi alarmının cihaz ilk defa çalıştırıldığında, fazla miktarda taze gıda konulduğunda ya da kapı çok uzun süre açık kaldığında, dondurulmuş besinler için tehlike olmadan da devreye girebileceğini yazıyor. Kendi dondurucunun kılavuzu farklı tuş ya da süre veriyorsa **kendi kılavuzun esastır.**

> ⚠️ **Sınır.** Bu yazı yalnız kullanıcının yapabildiği kontrolleri anlatıyor. Elektrik kablosu hasarlıysa Uğur sigortayı kapatıp fişi çekmeni ve kablo değişimi için yetkili servisle görüşmeni istiyor. Kablo, elektronik kart ve kompresör servis işidir.

## Derin dondurucu neden kapanır ya da öter?

| Durum | Bosch GSN | Uğur UED 6204 DTK NF |
|---|---|---|
| Motor durup kalkıyor | Çıtlama: motor, şalter ya da valf açılıp kapanıyor | Tıklama: kompresör devreye girip çıkıyor |
| Göstergeler sönük | Elektrik kesintisi, sigorta ya da fiş | Elektrik gelmiyor, cihaz kapalı, sigorta atmış |
| Kapı açık uyarısı | Kapı uzun süre açık kalınca ikaz sesi | Kapak 90 saniye açık kalınca alarm sesi |
| Sıcaklık uyarısı | Bölme çok sıcak; gösterge yanıp söner | İç sıcaklık yüksek; 4 ışık yanar |

## Adım adım: derin dondurucu kendi kendine kapanıyor ya da ötüyorsa ne yapılır?

**1. Durmanın motor duruşu mu, tam kapanma mı olduğunu ayırt et.** Göstergeler yanıyor ve yalnız motor sesi kesildiyse bu, Uğur kılavuzunun kompresörün devreye girip çıkması dediği normal döngüdür. Bosch otomatik süper dondurma fonksiyonunun gerekip gerekmediğine cihazın kendisinin karar verdiğini, bu fonksiyonu otomatik olarak açıp kapattığını da yazıyor. Süper dondurma devredeyken daha fazla çalışma sesi duyulabilir.

**2. Göstergeler sönmüşse fişe, prize ve sigortaya bak.** Bosch herhangi bir gösterge yanmıyorsa nedeni elektrik kesintisi, kapalı sigorta ya da prize iyi takılmamış fiş olarak veriyor. Uğur cihazın ayrı bir açma-kapama anahtarı olmadığını, fişe takıldığında çalışmaya başladığını yazıyor. Bosch'ta ise Açma/Kapama tuşuna basılırsa ısı derecesi göstergesi söner ve kompresör kapanır; tuşa yanlışlıkla basıldıysa cihazı aynı tuşla yeniden devreye sok.

**3. Ötüyorsa önce kapının tam kapalı olduğunu kontrol et.** Uğur'da kapak 90 saniye açık kalırsa ışıklar yanar ve alarm sesi duyulur; çözüm kapıyı kapatmak. Bosch'ta da kapı alarmı, kapı kapatılınca kendiliğinden susar. Kapanmayı engelleyen çekmece ya da paket varsa düzelt.

**4. Uyarı sesini tuşla sustur.** Bosch GSN'de ikaz sesi ısı derecesi ayar tuşuna basılarak kapatılır; arıza giderildikten sonra göstergenin yanıp sönmesi durur. Uğur'da yüksek sıcaklık alarmında 4 ışık yanar; alarmı kapatmak için SET butonuna basmanı ve Uğur Müşteri Hizmetleri Merkezi'ni aramanı istiyor.

**5. Hava giriş ve çıkış deliklerinin önünü aç.** Bosch dondurucu bölmesi çok sıcak uyarısının nedenleri arasında hava giriş ve çıkış deliklerinin önünün kapanmasını sayıyor. Uğur da cihaz soğutmuyorsa etrafındaki nesneleri kaldırmanı ve ısı kaynaklarını cihazdan uzaklaştırmanı istiyor.

**6. Bir seferde çok fazla taze yiyecek koyduysan bekle.** Bosch bir seferde çok fazla besin konulmasını da alarm nedeni olarak gösteriyor ve azami dondurma kapasitesinin aşılmamasını istiyor. Uğur gıdaları parça parça yüklemeni öneriyor.

**7. Alarm ya da kapanma tekrar ediyorsa servise haber ver.** Bosch'ta kendi kendini test programında süper göstergesi 10 saniye yanıp sönerse bir hata vardır ve yetkili servise haber vermen gerekir. Uğur bu kontroller sorunu çözmüyorsa 444 84 87 numaralı çağrı merkezine ya da yetkili servise başvurmanı istiyor.

## Elektrik kesildikten sonra dondurucu neden hemen çalışmaz?

Uğur UED 6204 kılavuzu ani elektrik kesintilerinde fişi prizden çıkarmanı, elektrik geldikten 20 dakika sonra yeniden takmanı istiyor; elektrik ilk geldiğinde oluşan yüksek voltaj dondurucuya zarar verebilir. Kılavuz cihaz ilk fişe takıldığında kontrol panelindeki bütün göstergelerin 3 saniye yanıp söneceğini de yazıyor; bu bir arıza işareti değil. Bosch GSN sıcaklık ayardan çok farklıysa bazı durumlarda cihazı 5 dakika kapatmanın yeterli olduğunu, ardından birkaç saat sonra sıcaklığın ayara yaklaşıp yaklaşmadığını kontrol etmeni öneriyor.

## Bu konuda hangi yazılara bakılır?

Motor sesleri için [derin dondurucu ses yapıyor](/blog/derin-dondurucu-ses-yapiyor/), alarm sustuğu hâlde yiyecekler donmuyorsa [derin dondurucu dondurmuyor](/blog/derin-dondurucu-dondurmuyor/), doğru ayar için [derin dondurucu kaç derece olmalı](/blog/derin-dondurucu-kac-derece-olmali/) yazısına bak.

---

**Kaynak künyesi.** Kapı ve ısı derecesi alarmı, alarmın kapatılması, çalışma sesleri, gösterge yanmama nedenleri ve kendi kendini test bilgisi Bosch GSN.. dondurucu kullanma kılavuzundan (8001095834_B); 90 saniyelik kapı alarmı, yüksek sıcaklık alarmı, kompresör tıklaması ve elektrik kesintisi sonrası 20 dakika bekleme bilgisi Uğur UED 6204 DTK NF dikey derin dondurucu kullanım kılavuzundan alınmıştır. Kendi dondurucunun kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

Bu kontrollerden sonra da dondurucu kendi kendine kapanıyor ya da ötüyorsa belirtiyi ve modeli benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

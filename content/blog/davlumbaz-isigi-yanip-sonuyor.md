---
title: "Davlumbaz ışığı yanıp sönüyor: 1 ve 2 ne demek?"
description: "Davlumbazda 1 ya da 2 yanıp sönüyorsa iki Arçelik kılavuzu bunu filtre uyarısı olarak anlatıyor: yağ filtresi 40, karbon filtre 160 saat. Sıfırlama sırası."
slug: "davlumbaz-isigi-yanip-sonuyor"
date: "2026-11-10"
category: "Davlumbaz"
updated: "2026-11-10"
kisaCevap: "Arçelik davlumbazda 1 yanıp sönüyorsa yağ filtresinin yıkanma, 2 yanıp sönüyorsa karbon filtrenin değişim zamanı gelmiştir. Arçelik P 78 SYS kılavuzunda yağ filtresi uyarısı 40, karbon filtre uyarısı 160 saatlik çalışmadan sonra yanar. İkisi birlikte sırayla yanıp sönebilir; filtre işinden sonra gösterge sıfırlanır."
# --- Provenans (yayında görünmez) ---
# 2026-11-06 Cum PAZ alt ajanı (YK #213 Salı paketi; BOSLUK.md sürüm 4 #364 "davlumbaz ışığı yanıp sönüyor / Arçelik-Beko davlumbaz 2 yanıp sönüyor"). Slug origin/main content/blog/'da ve blog-taslaklar'da yok (6 Kas fetch, 1.311 dosya). Yakın: siemens-davlumbaz-filtre-uyarisi (yalnız Siemens), davlumbaz-kendi-kendine-calisiyor (otomatik mod niyeti), davlumbaz-yag-filtresi-nasil-temizlenir, davlumbaz-karbon-filtre-degisimi. Aynı Salı paketindeki davlumbaz-bakimi-nasil-yapilir (PR #456, henüz main'de değil) ile farklı sorgu: bu yazı gösterge ışığı, o yazı genel bakım. #456 merge olunca iç bağlantı eklenebilir (doğrulayıcı main'de olmayan bağlantıyı kopuk sayıyor).
# Konu kanıtı: Google otomatik tamamlama 6 Kas 2026 (ham: _kaynak/OT-2026-11-06.txt): "davlumbaz yanıp sönüyor" #1 "davlumbaz ışığı yanıp sönüyor", #2 "arçelik davlumbaz ışığı yanıp sönüyor", #3 "arçelik davlumbaz 2 yanıp sönüyor", #4 "beko davlumbaz 2 yanıp sönüyor"; "davlumbaz ışığı" #3. GSC kanıt sayılmadı.
# Belgeler (#88), düz curl -sL (özel başlık yok), HTTP 200: (A) Arçelik P 24 YEI / P 26 YEI / P 42 YEI / P 36 YEI / P 39 YEI davlumbaz kullanma kılavuzu (24 s. PDF) https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_20171213085520_User%20Manual%20-%20Filetr_TR.pdf md5 3b494e134c5395f51ff9480703f788b2 — PDF s.17, 18, 19 · (B) Arçelik P 78 SYS / P 78 SAYS / P 79 SAYB / P 20 YAES / P 21 YAEB davlumbaz kullanma kılavuzu (24 s. PDF) https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_201712071356982_User%20Manual%20-%20Filetr_TR.pdf md5 714b762183908fe110b0ee5f0d349f6d — PDF s.15, 16, 18.
# BİLEREK YAZILMAYANLAR: Beko ve diğer markaların ışık dili (belgelenmedi; genelleme yapılmadı) · lamba değişimi ve elektrik bağlantısı (servis) · kart, tuş takımı arızası (servis) · fiyat (#46).
# Alıntı denetimi: davlumbaz-isigi-yanip-sonuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~30 dakika"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Bulaşık deterjanı", "Yumuşak bez"]
steps:
  - "Hangi rakamın ya da ledin yanıp söndüğünü not et."
  - "Zamanlayıcı ya da yoğun hız açık mı, kontrol et."
  - "1 yanıp sönüyorsa davlumbazın elektriğini kes."
  - "Yağ filtresini çıkar, yıka ve yerine tak."
  - "2 yanıp sönüyorsa karbon filtreyi yenisiyle değiştir."
  - "Filtre işinden sonra göstergeyi sıfırla."
  - "Uyarı geçmiyorsa ya da tuşlar yanıt vermiyorsa servise başvur."
faq:
  - q: "Arçelik davlumbazda 2 yanıp sönüyor, ne demek?"
    a: "İki Arçelik kılavuzunda da 2 aktif karbon filtrenin doyduğunu gösterir. P 78 SYS serisinde 2 nolu led 160 saatlik çalışmadan sonra yanıp sönmeye başlar; karbon filtrenin yenisiyle değiştirilme zamanı gelmiş demektir."
  - q: "Davlumbazda 1 ve 2 sırayla yanıp sönüyor, neden?"
    a: "Yağ filtresi ve karbon filtre aynı anda uyarı veriyordur. P 78 SYS kılavuzu bu durumda sıfırlamayı iki kez yapmanı istiyor: birinci seferde karbon filtre, ikinci seferde yağ filtresi uyarısı sıfırlanır."
  - q: "Filtre uyarısı nasıl sıfırlanır?"
    a: "P 78 SYS serisinde T4 düğmesini 5 saniye basılı tutarsın; bip sesi gelir ve ledin yanıp sönmesi durur. P 24 YEI serisinde ilgili düğmeyi gösterge yanıp sönmeyi bırakana kadar basılı tutarsın."
  - q: "Karbon filtre yıkanır mı?"
    a: "Hayır. P 24 YEI kılavuzu karbon filtrenin yıkanamayacağını ve kendini yenileyemeyeceğini, her durumda en az dört ayda bir değiştirilmesinin şart olduğunu yazıyor."
images:
  coverAlt: "Sade davlumbaz ve ön panelinde yanan küçük gösterge ışığı çizimi"
  steps:
    - "Davlumbaz panelindeki göstergeye bakan beyaz eldivenli sade siluet el"
    - "Davlumbaz panelindeki saat tuşuna uzanan beyaz eldivenli sade siluet el"
    - "Davlumbazın fişini prizden çeken beyaz eldivenli sade siluet el"
    - "Metal yağ filtresini davlumbazdan indiren beyaz eldivenli sade siluet el"
    - "Yuvarlak karbon filtreyi yerine takan beyaz eldivenli sade siluet el"
    - "Davlumbaz panelindeki tuşa basılı tutan beyaz eldivenli sade siluet el"
    - "Telefonu ve kılavuzu tutan beyaz eldivenli sade siluet el"
---

Davlumbazın panelinde 1 ya da 2 yanıp sönüyorsa bu iki Arçelik serisinde arıza değil, filtre uyarısıdır: 1 yağ filtresinin, 2 aktif karbon filtrenin doyduğunu gösterir. Arçelik P 78 SYS / P 20 YAES kılavuzu yağ filtresi uyarısının 40, karbon filtre uyarısının 160 saatlik çalışmadan sonra yandığını yazıyor.

Arçelik P 24 YEI serisi kılavuzu da aynı rakam dilini kullanıyor; iki filtre birlikte doyduğunda 1 ve 2 değişimli yanıp söner. Işık dili markaya ve modele göre değişir; bu yazı yalnız bu iki Arçelik serisini anlatıyor, kendi davlumbazının kılavuzu farklıysa **kendi kılavuzun esastır.**

> ⚠️ **Sınır.** Filtre yıkama, karbon filtre değişimi ve göstergeyi sıfırlamak kullanıcı işidir. Lamba değişimi, elektrik bağlantısı ve kontrol kartı servis işidir.

## Davlumbazda yanıp sönen ışık ne anlama gelir?

| Gösterge | Arçelik P 24 YEI serisi | Arçelik P 78 SYS / P 20 YAES serisi |
|---|---|---|
| 1 yanıp sönüyor | Metal yağ filtresi doydu | 40 saat sonra: yağ filtresini yıka |
| 2 yanıp sönüyor | Aktif karbon filtre doydu | 160 saat sonra: karbon filtreyi değiştir |
| 1 ve 2 sırayla | İki filtre birden | İki filtre birden; sıfırlama iki kez |
| Fan ayarının yanında yanıp sönen gösterge | Zamanlı çalışma açık | Zaman ayarı açık (led 1-4) |
| Yanıp sönen led 4 | — | Yoğun hız, 5 dakika |

## Adım adım: davlumbaz ışığı yanıp sönüyorsa ne yapılır?

**1. Hangi rakamın ya da ledin yanıp söndüğünü not et.** Yukarıdaki tablo hangi işi yapacağını gösterir. P 78 SYS serisinde her hız seviyesine karşılık yanan bir led vardır; sabit yanan led seçili hızı gösterir.

**2. Zamanlayıcı ya da yoğun hız açık mı, kontrol et.** P 78 SYS'de yoğun hız ledi yanıp sönerek çalışır ve 5 dakika sonra davlumbaz kendiliğinden 2. hıza geçer. Zaman ayarı açıksa ilgili led yanıp söner: 1. hızda 20, 2. hızda 15, 3. hızda 10, 4. hızda 5 dakika sonra cihaz kendiliğinden kapanır. P 24 YEI'de de zamanlı çalışmada fan ayarının yanındaki gösterge yanıp söner. Bu durumda arıza yok.

**3. 1 yanıp sönüyorsa davlumbazın elektriğini kes.** P 24 YEI kılavuzu bakımdan önce ürünün elektrik bağlantısını kesmeni, fişle bağlıysa fişi prizden çekmeni istiyor.

**4. Yağ filtresini çıkar, yıka ve yerine tak.** İki kılavuz da filtreyi yay kolunu çekerek çıkarmanı söylüyor. Yağ filtresi aşındırıcı ya da asitli olmayan deterjanla elde, ya da düşük sıcaklık ve kısa programdaki bulaşık makinesinde ayda bir kez temizlenir; doluluk göstergesi varsa gösterge yanınca. Bulaşık makinesinde renk biraz solabilir, filtreleme kapasitesi etkilenmez.

**5. 2 yanıp sönüyorsa karbon filtreyi yenisiyle değiştir.** P 24 YEI kılavuzu karbon filtrenin yıkanamayacağını, kendini yenileyemeyeceğini ve her durumda en az dört ayda bir değiştirilmesinin şart olduğunu yazıyor. Eski filtreyi davlumbaza sabitleyen düğmeleri 90° döndürerek çıkarırsın; yenisini önce metal dilin arkasına, sonra iki düğmeyle öne kancalarsın.

**6. Filtre işinden sonra göstergeyi sıfırla.** P 78 SYS'de T4 düğmesini 5 saniye basılı tut; bip sesi gelir ve ledin yanıp sönmesi kesilir. 1 ve 2 birlikte yanıyorsa işlemi iki kez yap: birinci seferde karbon, ikinci seferde yağ filtresi uyarısı sıfırlanır. P 24 YEI'de ilgili göstergenin yanıp sönmesi durana kadar düğmeye basılı tutarsın.

**7. Uyarı geçmiyorsa ya da tuşlar yanıt vermiyorsa servise başvur.** Filtre işi ve sıfırlamadan sonra gösterge yine hemen yanıyorsa ya da düğmeler tepki vermiyorsa kart ve tuş takımına müdahale etme; Arçelik yetkili servisine başvur.

## Bacalı davlumbazda 2 neden yanar?

P 78 SYS kılavuzu standart çalışma modunda karbon filtre uyarısının aktif olmadığını, yalnız filtreli kullanımda açılması gerektiğini yazıyor. Uyarıyı açmak ya da kapatmak için cihaz kapalıyken T4'ü 5 saniye basılı tutarsın. P 24 YEI'de karbon filtreli kullanım göstergesi, ürün kapalıyken iki düğmeye aynı anda basarak açılır. Davlumbazın bacalıysa ve karbon filtre takılı değilse bu ayarı kontrol et.

## Filtre uyarısını geciktirmek sorun olur mu?

P 24 YEI kılavuzu bu durumda filtreyi değiştirmeyi geciktirmemeni, temel temizliğin yapılmaması ve filtrelerin değiştirilmemesinin yangın riskine yol açabileceğini yazıyor. Aynı Salı yayımlanan davlumbaz bakımı yazısı genel temizliği ayrıntılı anlatıyor.

## Bu konuda hangi yazılara bakılır?

Yağ filtresinin ayrıntısı için [davlumbaz yağ filtresi nasıl temizlenir](/blog/davlumbaz-yag-filtresi-nasil-temizlenir/), karbon filtre için [davlumbaz karbon filtre değişimi](/blog/davlumbaz-karbon-filtre-degisimi/), Siemens modeller için [Siemens davlumbaz filtre uyarısı](/blog/siemens-davlumbaz-filtre-uyarisi/), kimse dokunmadan çalışıyorsa [davlumbaz kendi kendine çalışıyor](/blog/davlumbaz-kendi-kendine-calisiyor/) yazısına bak.

---

**Kaynak künyesi.** Doygunluk ekranı, zamanlı çalışma, filtre temizliği ve karbon filtre değişimi Arçelik P 24 YEI serisi davlumbaz kullanma kılavuzundan; 40 ve 160 saatlik filtre uyarıları, T4 sıfırlama, yoğun hız ve zaman ayarı ledleri Arçelik P 78 SYS / P 20 YAES serisi kullanma kılavuzundan alınmıştır. Kendi davlumbazının kılavuzu farklı bir tarif veriyorsa **kendi kılavuzun esastır.**

Bu adımlardan sonra da gösterge yanıp sönmeyi bırakmıyorsa belirtiyi ve modeli benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

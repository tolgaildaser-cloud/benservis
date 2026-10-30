---
title: "Regal buzdolabı yaz kış ayarı: termostat kaça getirilir?"
description: "Regal kılavuzuna göre termostat düğmesi 1-5 arasında: normal kullanım 3-4, kışın 1-2. Süper anahtar, hızlı dondurma ve soğutmuyorsa kontrol sırası."
slug: "regal-buzdolabi-yaz-kis-ayari"
date: "2026-10-30"
category: "Buzdolabı"
# --- Provenans (yayında görünmez) ---
# 2026-10-30 PAZ alt ajanı (YK #197 acil boşluk, 2. dalga, paket P09). BOSLUK.md #57: "Regal buzdolabı yaz kış ayarı / derece ayarı / soğutmuyor / resetleme" AC "regal buzdolabı" #4, #6-9. Satırdaki en güçlü tek konu: yaz kış / derece ayarı.
# Envanter: origin/main'de Regal buzdolabı yazısı yok (yalnız regal-bulasik-makinesi-resetleme, regal-camasir-makinesi-resetleme, regal-camasir-makinesi-su-almiyor). Yakın genel yazılar: buzdolabi-yaz-ayari, buzdolabi-kac-derece-olmali, buzdolabi-sogutmuyor-nedenleri.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile Regal'in kendi alan adından (statik.regal-tr.com) indirildi, ikisi de application/pdf. Okuma pdftotext -layout, sayfa = PDF sayfası (basılı sayfa numarasıyla aynı).
#  (R1) Regal ST 25010 Buzdolabı Kullanım Kılavuzu  https://statik.regal-tr.com/webfiles/20264253_k.pdf  40 s.  md5 4990d5e348de4e1c562e682b6620f3a0
#  (R2) Regal STK 35020 Buzdolabı Kullanım Kılavuzu  https://statik.regal-tr.com/webfiles/20267960_k.pdf  40 s.  md5 9d62ecd8bb801a737017b49443d6530c
# Cihazı kendin onarma uyarısı R1 s.8 · model numarası yeri R1 s.34 · Termostat 1-5, normal/kış konumları R1 s.18, R2 s.17 · süper anahtar/kış anahtarı R1 s.18 · SF konumu R2 s.17 · iklim sınıfı R1 s.19 (16-38 °C tasarım aralığı R1 s.4) · soğutucu +4 °C ve 0-8 °C R1 s.20 · sorun giderme R1 s.28-29 · bekleme R1 s.19, s.31.
# BİLEREK YAZILMAYANLAR: ücret (#46) · "resetleme" (kılavuzda reset adımı yok; yalnız fiş çek-tak bekleme süresi var) · termostat parçasının sınanması/değişimi (belgede kullanıcı adımı yok) · ekranlı Regal modellerinin panel tuşları (indirilen iki kılavuz düğmeli).
# Alıntı denetim tablosu: regal-buzdolabi-yaz-kis-ayari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika (bekleme hariç)"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Buzdolabının kullanma kılavuzu"]
steps:
  - "Soğutucu bölmedeki termostat düğmesini bul; düğmeyi 1'den 5'e doğru çevirdikçe soğutma artar."
  - "Normal kullanım için düğmeyi 3-4 konumuna getir, soğutucu bölmeyi kılavuzun önerdiği yaklaşık +4 °C'de tut."
  - "Kışın enerji tasarrufu için düğmeyi 1-2 konumuna indir ama 1'den önceki konuma getirme."
  - "Cihazda süper anahtar varsa ortam 16 °C'nin altına inince onu kış anahtarı olarak kullan."
  - "Yazın ayrı bir konum arama; sıcak ortamda 3-4 yeterli gelmezse düğmeyi bir kademe yükselt, etiketteki iklim sınıfına bak."
  - "Çok yiyecek dondururken 5 konumunu ya da SF konumunu kullan, süre dolunca düğmeyi normale geri al."
  - "Soğutmuyorsa fiş, sigorta, kapı ve arka duvar mesafesini kontrol et; fişi çıkarıp taktıysan bekle, sonra gerekirse servise başvur."
faq:
  - q: "Regal buzdolabında kış için düğme kaçta olmalı?"
    a: "Regal ST 25010 ve STK 35020 kılavuzları aynı şeyi söylüyor: kış aylarında enerji tasarrufu için buzdolabını daha düşük konumda çalıştırabilirsin. Tavsiye edilen konumlar tablosunda 1-2 konumu daha az soğutma yapmak için, 3-4 konumu normal kullanım için yazıyor."
  - q: "Regal buzdolabında yaz ayarı diye ayrı bir konum var mı?"
    a: "İncelediğimiz iki kılavuzda yaz konumu geçmiyor. Kılavuzlar ayarın kapının ne sıklıkla açıldığına, içindeki yiyecek miktarına ve cihazın bulunduğu ortam sıcaklığına göre yapılmasını söylüyor. Sorun giderme tablosu da yeterli soğutma yoksa düğmenin konumunu yükseltmeni öneriyor."
  - q: "Termostat düğmesini 1'in altına getirirsem ne olur?"
    a: "Kılavuz bunu açıkça uyarı olarak yazıyor: düğmeyi 1'den önceki konuma getirme, bu konumda dolap soğutma yapmaz. Dolap çalışmıyor gibi görünüyorsa düğmenin bu konumda kalıp kalmadığına bak."
  - q: "Regal buzdolabının resetleme adımı var mı?"
    a: "İncelediğimiz kılavuzlarda ayrı bir resetleme adımı yok. Kılavuzdaki tek ilgili bilgi, ani elektrik kesintisinden ya da fişi çıkarıp taktıktan sonra 5-10 dakika beklemen gerektiği."
images:
  coverAlt: "Düğmeli termostatı olan, iç aydınlatma kutusu açık sade bir buzdolabı çizimi; yanında güneş ve kar tanesi simgeleri"
  steps:
    - "Buzdolabının iç aydınlatma kutusunun yanındaki termostat düğmesine dokunan beyaz eldivenli sade siluet el"
    - "Termostat düğmesini orta konuma çeviren beyaz eldivenli sade siluet el; yanında soğutucu bölmeyi simgeleyen sade raf çizimi"
    - "Termostat düğmesini düşük konuma çeviren beyaz eldivenli sade siluet el; yanında kar tanesi simgesi"
    - "Buzdolabı içindeki küçük süper anahtarı açık konuma getiren beyaz eldivenli sade siluet el"
    - "Termostat düğmesini bir kademe yukarı çeviren beyaz eldivenli sade siluet el; yanında güneş simgesi"
    - "Dondurucuya yeni yiyecek paketi yerleştiren beyaz eldivenli sade siluet el; yanında kum saati simgesi"
    - "Buzdolabının fişini prize sıkıca takan beyaz eldivenli sade siluet el"
---

"Regal buzdolabı kışın kaça alınır, yazın kaça?" sorusunun cevabı üreticinin kendi kılavuzunda var. Bu yazıda iki Regal kılavuzunu okuduk: **ST 25010** ve **STK 35020** (No Frost). İkisinde de ayar bir **termostat düğmesiyle** yapılıyor. Aşağıdaki adımların hepsi bu iki belgeden; kılavuzda olmayan bir şeyi de açıkça "yok" diye yazdık.

Genel olarak buzdolabı derecesi için [buzdolabı kaç derece olmalı](/blog/buzdolabi-kac-derece-olmali/) yazısına, mevsim önerileri için [buzdolabı yaz ayarı](/blog/buzdolabi-yaz-ayari/) yazısına bakabilirsin.

> ⚠️ **Güvenlik sınırı:** Bu listede yalnız düğme konumu, kapı, yerleşim ve fiş kontrolü var. Kasanın içine, elektrik aksamına ya da soğutucu sisteme müdahale etmek servis işidir. ST 25010 kılavuzu da arıza olursa cihazı kendin tamir etmeye kalkışmamanı, içinde kullanıcının onarabileceği parça olmadığını yazıyor.

## Adım adım: Regal buzdolabında termostat ayarı

**1. Düğmeyi bul ve ölçeği öğren.** Kılavuzdaki genel görünüm şemasında "termostat düğmesi ve aydınlatma" soğutucu bölmenin içinde, aynı kutuda yer alıyor. Ayar **1 ile 5** arasında istenen değere getirilebilir. Düğmeyi 1'den 5'e doğru çevirdikçe **soğutma derecesi artar**.

**2. Normal kullanımda 3-4.** Kılavuzun tavsiye tablosunda **3-4 normal kullanım konumu**; en iyi performansı bu konumda alırsın. Soğutucu bölme için kılavuz ayrıca **+4 °C** ayarının normal koşullar için yeterli olduğunu, bölmenin çalışma aralığının **0 ile 8 °C** arasında olması gerektiğini yazıyor.

**3. Kışın 1-2.** Tabloda **1-2 konumu daha az soğutma** için; kılavuz bunun **kış aylarında enerji tasarrufu** sağladığını söylüyor. Uyarı net: düğmeyi **1'den önceki konuma getirme**, çünkü o konumda dolap soğutma yapmaz.

**4. Süper anahtar varsa kış anahtarıdır.** Bazı modellerde termostatın yanında bir süper anahtar var. ST 25010 kılavuzuna göre ortam sıcaklığı **16 °C'nin altındaysa** bu anahtar **kış anahtarı** olarak kullanılır; düşük ortam sıcaklıklarında dondurucu -18 °C'nin altındayken bile buzdolabı bölmesini 0 °C'nin üzerinde tutar.

**5. Yaz için ayrı konum yok.** İki kılavuzda da "yaz konumu" geçmiyor. Kılavuz ayarın **kapının ne sıklıkla açıldığına, içeride ne kadar yiyecek olduğuna ve ortam sıcaklığına** göre yapılmasını istiyor. Sorun giderme tablosunda "yeterli soğutma yapmıyor" için çözüm olarak düğme konumunu **yükseltmek** yazıyor. Etiketteki iklim sınıfına da bak: kılavuza göre **T** için 16-43 °C, **ST** için 16-38 °C, **N** için 16-32 °C, **SN** için 10-32 °C ortam aralığı tanımlı.

**6. Hızlı dondurmada 5 ya da SF.** Yeni yiyeceği hızlı dondurmak için **5 konumu** kullanılır; dondurucu yeterince soğuyunca düğme eski konumuna döndürülür. STK 35020'de düğmede varsa **SF konumu** da aynı iş içindir. ST 25010 kılavuzu yiyeceği koymadan 24 saat önce süper anahtarı açmanı, koyduktan sonra 24 saat bekleyip **kapatmanı** söylüyor. STK 35020'de süper dondurma modu **en fazla 48 saat** sonra kendiliğinden iptal olur. Az miktarda yiyecek için max konumu gerekmiyor.

**7. Soğutmuyorsa sırayla kontrol et.** Kılavuzun "buzdolabınız çalışmıyor" satırı şu sırayı veriyor: fiş prize tam takılı mı, sigorta atmış mı, **termostat 1'in öncesindeki konumda mı**. "Yeterli soğutma yapmıyor" satırında ise kapıların sık açılması, kapıların tam kapanmaması, arka duvara dayanan kap ya da yiyecek, aşırı dolu dolap ve **arka duvarla yeterli mesafe** sayılıyor. Fişi çekip taktıysan kılavuza göre **5-10 dakika** bekle; kompresör bu sürede çalışmaya başlar.

## İlk takışta ve uzun tatilde

ST 25010 kılavuzuna göre buzdolabı prize ilk takıldıktan sonra tamamen soğuyabilmesi için ortam sıcaklığına bağlı olarak **24 saate kadar kesintisiz** çalışmalıdır. Bu sürede kapıları sık açıp kapama ve aşırı doldurma. Dolabı uzun süre, örneğin yaz tatilinde kullanmayacaksan kılavuz fişi prizden çıkarmanı, termostat düğmesini kılavuzda işaretli kapatma konumuna getirmeni ve buz çözüldükten sonra temizleyip nem ve koku oluşmasın diye **kapıyı açık bırakmanı** söylüyor.

## Kılavuzda olmayanlar

Regal kılavuzlarında ayrı bir **resetleme adımı** yok; fiş çek-tak yalnız bekleme süresiyle anılıyor. Kılavuzlar her konumun kaç dereceye denk geldiğini yazmıyor; derece olarak yalnız soğutucu bölme için +4 °C ve 0-8 °C aralığı veriliyor. ST 25010 kılavuzu ayrıca cihazın 16-38 °C ortam sıcaklığında çalışmak üzere tasarlandığını, 10 °C'den soğuk ortamda çalıştırmanın verimlilik açısından önerilmediğini belirtiyor. Ekranlı ya da farklı seriden bir Regal'in varsa onun panelini bu iki kılavuz anlatmaz. Kendi modelinin kılavuzu esastır. Model numarası kılavuzun kapağında ve cihazın plaket etiketinde yazar.

## Ne zaman servis

- Düğme 1-5 aralığında, kapılar kapalı, yerleşim düzgün olduğu hâlde dolap günlerce yeterince soğutmuyorsa
- Fiş taktıktan 10 dakika sonra kompresör hiç çalışmaya başlamıyorsa
- Sorun kış ya da yaz ayarı değişince de aynı kalıyorsa

⛔ Termostatın kendisi kasanın içindedir; sınama ve değişimi yetkili servisin işidir.

## Servisi aramadan önce kısa özet

1. Regal modelin ne, düğme şu an hangi konumda?
2. Ortam sıcaklığı etiketteki iklim sınıfına uygun mu?
3. Kapılar tam kapanıyor mu, arka duvarla boşluk var mı?
4. Fişi çıkarıp taktıysan kaç dakika beklendi?

Belirtiyi ve modelini benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

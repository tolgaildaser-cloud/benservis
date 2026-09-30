---
title: "Vestel çamaşır makinesi köpük yapıyor"
description: "Vestel çamaşır makinesinde deterjan çekmecesinden köpük taşıyorsa Vestel'in sırası: programı beklet, yumuşatıcılı suyu dök, deterjanı ayarla."
slug: "vestel-camasir-makinesi-kopuk-yapiyor"
date: "2026-09-30"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, belirti rehberi). Beş belge bu koşuda curl -sL -A "Mozilla/5.0" ile statik.vestel.com.tr'den yeniden indirildi,
#   hepsi HTTP 200; md5'ler 27 Eyl yerel kopyalarıyla (blog-taslaklar/kaynak-vestel-sprint/) 5/5 birebir. Okuma pdftotext -layout, sayfa = PDF sayfası (\f).
# Web araması KULLANILMADI.
#  A) CMI 86201       https://statik.vestel.com.tr/webfiles/20264687_k.pdf  41 s.  md5 7a5f38c8ae4890b1b1e7e691f2de1950  (sayfa atıfları bu belgeye göre)
#  B) CMI 106221      https://statik.vestel.com.tr/webfiles/20264677_k.pdf  41 s.  md5 00dc59105bf528b9c00b0f116d220f77
#  C) CMI 87302 WIFI  https://statik.vestel.com.tr/webfiles/20265394_k.pdf  44 s.  md5 609c99fc8bc6b4bc3d75f8c31017b37f
#  D) KCMI 98142 WIFI https://statik.vestel.com.tr/webfiles/20263189_k.pdf  50 s.  md5 9e654374ff661c2fb154e0c548526d7c
#  E) CMI 128222 WIFI https://statik.vestel.com.tr/webfiles/20264675_k.pdf  44 s.  md5 c7607ad9886b39d7be76043a5285bfba
# "KÜÇÜK ARIZALARIN GİDERİLMESİ" — "Deterjan çekmecesinde aşırı köpük oluşuyor." satırı beş belgede aynı (A s.30, B s.30, C s.33, D s.40, E s.33):
#   "Çok fazla deterjan kullanılmış. | Başlat/ Beklet tuşuna dokunun. Köpüğü durdurmak için bir çorba kaşığı yumuşatıcıyı yarım litre suyla karıştırılıp
#    deterjan çekmecesine dökün. 5-10 dakika kadar sonra tekrar Başlat/ Beklet tuşuna dokunun. Bir sonraki yıkama işleminde deterjan dozunu gerektirdiği şekilde ayarlayın."
#   "Yanlış deterjan kullanılmış. | Makinenizde sadece otomatik çamaşır makineleri için kullanılabilecek deterjan kullanın."
# Diğer: A s.26 (6.1 Önemli Bilgiler; D s.35) "Kullandığınız deterjanın, yumuşatıcının ve diğer katkı maddelerinin otomatik çamaşır makinelerine uygun olduğundan emin olun.
#   Çok fazla deterjan kullanılırsa aşırı köpük meydana gelir ve otomatik köpük absorpsiyon sistemi devreye girer."
#   · A s.19 (5.3 Makineye Deterjan Konulması): miktar kirlilik/su sertliği/çamaşır miktarına bağlı; "deterjan miktarları deterjan ambalajı üzerinde yazılıdır";
#   az kirli çamaşırda ön yıkama yapma, az deterjanı 2 numaralı göze koy · A s.24 (***) Süper Hızlı 15 dk.: "deterjan miktarı diğer programlara göre daha düşük tutulması gerekmektedir"
#   (A, B, C, E'de var; D'de bu not yok) · A s.21 Başlat/Beklet çalışan programı beklemeye alır · A s.30 tablo girişi (tamirat yetkili serviste).
# ALET KURALI NOTU: "bir çorba kaşığı" belgede ÖLÇÜ olarak geçiyor (yumuşatıcı miktarı); kaşık alet olarak kullanılmıyor. Editör aksi karar verirse adım 2 "az miktar yumuşatıcı" diye değil, belgedeki ölçüyle kalmalı ya da adım çıkarılmalı.
# BİLEREK YAZILMAYANLAR: köpük absorpsiyon sisteminin nasıl çalıştığı (belgede yalnız adı var) · "yumuşak suda daha az deterjan" çıkarımı (belge yalnız "sertlik arttıkça miktar artar" diyor)
#   · sıvı/toz deterjan karşılaştırması · marka önerisi · süre/fiyat/parça (#46).
# Alıntı denetim tablosu: vestel-camasir-makinesi-kopuk-yapiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Çamaşır yumuşatıcısı", "Yarım litre su alan bir kap"]
steps:
  - "Başlat/Beklet tuşuna dokunarak programı beklemeye al."
  - "Bir çorba kaşığı yumuşatıcıyı yarım litre suyla karıştır ve deterjan çekmecesine dök."
  - "5-10 dakika bekle, sonra Başlat/Beklet tuşuna yeniden dokun."
  - "Bir sonraki yıkamada deterjan miktarını ambalajdaki öneriye, çamaşırın miktarına ve kirliliğine göre ayarla."
  - "Az kirli çamaşırda ön yıkama yapma; az miktarda deterjanı çekmecenin 2 numaralı gözüne koy."
  - "Yalnız otomatik çamaşır makineleri için üretilmiş deterjan kullan."
faq:
  - q: "Vestel çamaşır makinesi neden çok köpük yapıyor?"
    a: "Vestel'in kullanım kılavuzlarındaki küçük arızalar tablosu 'Deterjan çekmecesinde aşırı köpük oluşuyor' satırında iki sebep sayıyor: çok fazla deterjan kullanılmış olması ya da yanlış deterjan kullanılmış olması. Kılavuzun önemli bilgiler bölümüne göre çok fazla deterjan kullanılırsa aşırı köpük meydana gelir ve makinenin otomatik köpük absorpsiyon sistemi devreye girer."
  - q: "Yıkama sırasında köpük taştı, ne yapmalıyım?"
    a: "Vestel'in talimatı sırayla şu: Başlat/Beklet tuşuna dokunarak programı beklemeye al, köpüğü durdurmak için bir çorba kaşığı yumuşatıcıyı yarım litre suyla karıştırıp deterjan çekmecesine dök, 5-10 dakika kadar sonra Başlat/Beklet tuşuna tekrar dokun. Bir sonraki yıkamada deterjan dozunu gerektiği şekilde ayarla."
  - q: "Ne kadar deterjan koymalıyım?"
    a: "Vestel'e göre deterjan miktarı çamaşırın kirlilik derecesine, suyun sertliğine ve çamaşır miktarına bağlıdır; kullanılacak miktarlar deterjan ambalajı üzerinde yazılıdır. Az kirli çamaşırlar için ön yıkama yapılmaz ve az miktarda deterjan çekmecenin 2 numaralı gözüne konur."
  - q: "Kısa programda da aynı miktarda deterjan koyabilir miyim?"
    a: "CMI 86201 gibi modellerin kılavuzunda Süper Hızlı 15 dk. programı için ayrı bir not var: yıkama süresi kısa olduğundan deterjan miktarının diğer programlara göre daha düşük tutulması gerekiyor. Modelinin program tablosundaki notlara bak."
images:
  coverAlt: "Yarı açık deterjan çekmecesinden dışarı taşan beyaz köpük ve önündeki çamaşır makinesi kapağının camında kabarmış köpük"
---

Yıkama başladı ve bir süre sonra deterjan çekmecesinden köpük taşmaya başladı. Vestel'in çamaşır makinesi kullanım kılavuzlarındaki küçük arızalar tablosunda bu durumun ayrı bir satırı var: **"Deterjan çekmecesinde aşırı köpük oluşuyor."** Tablo bunun için iki sebep sayıyor: **çok fazla deterjan** ya da **yanlış deterjan.** İkisinde de çözüm kullanıcının elinde; üstelik Vestel, köpük taştığı anda ne yapılacağını da adım adım yazıyor. Bu yazıda o talimatı, aynı kılavuzların deterjan bölümüyle birlikte açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Başlat/Beklet'e dokun, programı beklet → bir çorba kaşığı yumuşatıcıyı yarım litre suyla karıştırıp deterjan çekmecesine dök → 5-10 dakika bekle, Başlat/Beklet'e yeniden dokun. Sonraki yıkamada deterjanı azalt ve yalnız otomatik çamaşır makinesi deterjanı kullan.

## Adım adım: evde denenecekler

**1. Programı beklemeye al.** Vestel'in köpük talimatı buradan başlıyor: **Başlat/Beklet tuşuna dokun.** Kılavuza göre bu tuş çalışan bir programı beklemeye alır; bekleme modunda göstergedeki Başlat/Beklet ledi yanıp söner.

**2. Yumuşatıcılı suyu dök.** Vestel'in önerisi: köpüğü durdurmak için **bir çorba kaşığı yumuşatıcıyı yarım litre suyla** karıştır ve **deterjan çekmecesine** dök.

**3. Bekle ve devam ettir.** Kılavuza göre **5-10 dakika kadar sonra** Başlat/Beklet tuşuna tekrar dokun.

**4. Sonraki yıkamada deterjanı ayarla.** Tablonun son cümlesi: **bir sonraki yıkama işleminde deterjan dozunu gerektirdiği şekilde ayarlayın.** Vestel'in deterjan bölümüne göre miktar üç şeye bağlı: çamaşırın **kirlilik derecesi**, suyun **sertliği** ve çamaşırın **miktarı.** Kullanılacak miktarlar **deterjan ambalajının üzerinde** yazılıdır.

**5. Az kirli çamaşırda ön yıkamayı atla.** Vestel az kirli çamaşırlar için **ön yıkama yapılmamasını** ve **az miktarda deterjanın** çekmecenin **2 numaralı gözüne** konmasını istiyor. Çok kirli çamaşırda ön yıkamalı program seçildiğinde ise deterjanın ¼'ü 1 numaralı göze, ¾'ü 2 numaralı göze konur.

**6. Doğru deterjanı kullan.** Tablodaki ikinci sebep: **yanlış deterjan kullanılmış.** Vestel'in çözümü: makinende **sadece otomatik çamaşır makineleri için** kullanılabilecek deterjan kullan. Kılavuzun önemli bilgiler bölümü aynı kuralı **yumuşatıcı ve diğer katkı maddeleri** için de koyuyor.

## Köpük neden oluşuyor?

Vestel'in kılavuzu bunu tek cümleyle açıklıyor: **çok fazla deterjan kullanılırsa aşırı köpük meydana gelir** ve makinenin **otomatik köpük absorpsiyon sistemi** devreye girer. Tablodaki iki sebep de deterjanla ilgili: miktarı ve türü.

## Kısa programlarda deterjan

CMI 86201, CMI 106221, CMI 87302 ve CMI 128222 kılavuzlarının program tablosunda **Süper Hızlı 15 dk.** programı için ayrı bir not var: yıkama süresi kısa olduğundan **deterjan miktarının diğer programlara göre daha düşük tutulması** gerekiyor. Modelinde kısa bir program varsa kılavuzundaki program tablosunun notlarına bak.

Deterjanı hangi göze koyacağını ayrıntılı anlatan [çamaşır makinesi deterjan çekmecesi hangi göz](/blog/camasir-makinesi-deterjan-cekmecesi-hangi-goz/) yazısına bakabilirsin. Makine hiç başlamıyorsa: [Vestel çamaşır makinesi çalışmıyor](/blog/vestel-camasir-makinesi-calismiyor/). Ekranda bir kod görüyorsan: [Vestel çamaşır makinesi hata kodları](/blog/vestel-camasir-makinesi-hata-kodlari/).

## Ne zaman servis

Deterjan miktarı ambalajdaki öneriye göre ayarlı, otomatik çamaşır makinesi deterjanı kullanıyorsun ve köpük yine çekmeceden taşıyorsa Vestel'in tablosu kullanıcıya başka adım vermiyor. Tablonun girişindeki kural geçerli: makinede yapılması gereken **tüm tamiratlar yetkili servisler tarafından** yapılmalı; arızayı tablodaki bilgilerle gideremediğinde **fişi prizden çek, musluğu kapat** ve yetkili servise başvur.

⛔ **Kendin-çöz sınırı burada biter.** Deterjan miktarı, deterjan türü ve program seçimi kullanıcıya; makinenin içi uzmana aittir.

## Servisi aramadan önce iki dakikalık özet

1. Hangi deterjanı kullanıyorsun, ambalajında "otomatik makine" yazıyor mu?
2. Ne kadar deterjan koydun, ambalajdaki öneriye göre mi?
3. Hangi programda köpük taştı, kısa bir program mıydı?
4. Çamaşır ne kadar kirliydi, ön yıkama seçili miydi?

Bu dördüne cevabın varsa servise "köpük yapıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

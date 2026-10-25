---
title: "Arçelik çamaşır makinesi program süreleri: pamuklu, sentetik"
description: "Arçelik kılavuzlarından program süreleri: 5063 FYE'de pamuklu 40 98, pamuklu 60 118, sentetik 40 106 dakika. Ekrandaki süre neden değişir, nasıl kısalır?"
slug: "arcelik-camasir-makinesi-program-sureleri"
date: "2026-10-25"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-25 PAZ alt ajanı (YK #182 Dalga 8, küme Z3). Konu seçimi küme ajanının; origin/main'de slug yok. Genel camasir-makinesi-program-sureleri
#   marka belirtmeden bant veriyor; bu yazı yalnız Arçelik'in kendi tablolarını model adıyla veriyor ve genel yazıya bağlantı veriyor.
# GSC: "arçelik pamuklu 40 derece kaç saat sürer" 7 gün 4 · "arçelik pamuklu 60 derece kaç saat sürer" 7 gün 2 · "arçelik sentetik 40 kaç dakika" 7 gün 4
#   · "arçelik çamaşır makinesi program süreleri" 3 ay 2 (1 tık). TOPLAM 3 ay 2 · 7 gün 10.
# OT (bu koşu): "arçelik çamaşır makinesi program süreleri" → 1. aynı 2. "arçelik 3650 …" 3. "arçelik 5083 …".
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile download.arcelik.com.tr'den indirildi, HTTP 200, md5 yerel kopyalarla (m1/m3) birebir.
#  (A) 5063 FYE https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_Manual_7171720100_tr_TR20161027-150509-278.pdf  36 s.  md5 c2d007a7792c6a021e92aeb1c1fa7961
#  (B) 7103 D   https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_Manual_7144850100_tr_TR20171222-130958-092.pdf  44 s.  md5 de6298c4596bd93f57e5427ef9743c54
# Program ve tüketim tablosu A s.21 · sentetik belirleyici değerler A s.20 · B s.22 · standart program süreleri A s.7 · B s.11 · süre notu B s.23 · Hızlı Yıkama B s.27 · süre geri saymıyor B s.36.
# BİLEREK YAZILMAYANLAR: 3650 / 5083 / 6083 modellerinin süreleri (belgesi bu koşuda açılmadı) · tablolarda olmayan programlara tahmini süre · fiyat (#46).
# Alıntı denetim tablosu: arcelik-camasir-makinesi-program-sureleri.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu"]
steps:
  - "Makinenin model adını bul ve kendi kılavuzundaki Program ve tüketim tablosunu aç."
  - "Programı seçince ekranda görünen süreyi oku; yıkama başladıktan bir süre sonra güncellenir."
  - "Pamuklu Eko'da yarım kapasite ya da daha az yüklersen aşama süreleri kendiliğinden kısalabilir."
  - "Az kirli çamaşırda Hızlı Yıkama'yı seç, yükü azami yükün yarısında tut."
  - "Ön yıkamayı yalnız çok kirli çamaşırda aç."
  - "Süre geri saymıyorsa su alma, ısıtma ya da dengesiz yük adımını bekle; çamaşırı düzelt."
faq:
  - q: "Arçelik pamuklu 40 derece kaç saat sürer?"
    a: "Arçelik 5063 FYE kılavuzunun program tablosunda Pamuklu 40 için 98 dakika, yani 1 saat 38 dakika yazıyor. Pamuklu Eko 40 ise bu modelde yarım yükte 129 dakika, 7103 D'de kısmi yükte 190 dakika. Kendi modelinin süresi kendi kılavuzunda ve ekranda yazar."
  - q: "Arçelik pamuklu 60 kaç saat sürer?"
    a: "5063 FYE tablosunda Pamuklu 60 için 118 dakika (1 saat 58 dakika) yazıyor. Enerji etiketindeki Pamuklu Eko 60 bu modelde tam yükte 159 dakika. 7103 D kılavuzunda tam yükte 60 °C standart pamuklu programının süresi 215 dakika, yani 3 saat 35 dakika."
  - q: "Arçelik sentetik 40 kaç dakika?"
    a: "5063 FYE'nin program tablosunda Sentetik 40 için 106 dakika yazıyor. Aynı kılavuzun sentetik belirleyici değerler tablosunda 90/110 dakika, 7103 D kılavuzunda ise 115/140 dakika geçiyor. Kılavuzlar iki değerin hangi duruma ait olduğunu açıklamıyor."
  - q: "Ekrandaki süre neden yıkama sırasında değişiyor?"
    a: "7103 D kılavuzuna göre makineye yüklediğin çamaşır miktarına bağlı olarak ekranda görünen süreyle gerçekleşen süre arasında 1-1,5 saat kadar fark olabilir. Süre güncellemesi yıkama başladıktan bir süre sonra otomatik olarak yapılır."
  - q: "Program süresini kısaltmanın yolu var mı?"
    a: "7103 D kılavuzuna göre Hızlı Yıkama fonksiyonu seçildiğinde ilgili programların süreleri yüzde 50'ye kadar kısalır; bu durumda azami yükün en çok yarısı kadar çamaşır konmalı. Günlük / Hızlı 14 programı Hızlı Yıkama ile 14 dakikaya kadar iner, en fazla 2 kg çamaşırla."
images:
  coverAlt: "Önden yüklemeli çamaşır makinesinin ekranında kalan süre göstergesi"
  steps:
    - "Çamaşır makinesinin üstünde açık duran bir kullanma kılavuzu"
    - "Çamaşır makinesi panelinde dijital süre ekranı yakın plan"
    - "Yarısına kadar doldurulmuş çamaşır makinesi tamburu"
    - "Çamaşır makinesi panelinde yardımcı fonksiyon tuşları"
    - "Deterjan çekmecesinin açık bölmeleri"
    - "Tamburda düzgünce dağıtılmış birkaç havlu"
---

"Pamukluya attım, kaç saat sürer?" sorusunun Arçelik'teki cevabı **modele göre değişiyor** ve kılavuzlarda yazıyor. Bu yazıda Arçelik'in iki kullanma kılavuzundaki program tablolarını **model adıyla** verdik: tüm programlarda süre sütunu olan **5063 FYE** ve enerji etiketi süreleriyle sentetik değerlerini veren **7103 D**. Kendi makinen başka bir modelse rakamlar farklı olabilir; tabloyu kendi kılavuzunda bul.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** 5063 FYE'de Pamuklu 40 **98 dk**, Pamuklu 60 **118 dk**, Sentetik 40 **106 dk**. Enerji tasarruflu Pamuklu Eko programları daha uzun: 7103 D'de tam yükte Eko 60 **215 dk**. Ekrandaki süre yüke göre yıkama sırasında güncellenir.

## 5063 FYE program tablosu

Kılavuzun **Program ve tüketim tablosu**ndan, azami yük 5 kg olan modelde:

| Program | Sıcaklık | Azami yük | Süre |
|---|---|---|---|
| Pamuklu | 90 °C | 5 kg | 147 dk (2 sa 27 dk) |
| Pamuklu | 60 °C | 5 kg | 118 dk (1 sa 58 dk) |
| Pamuklu | 40 °C | 5 kg | 98 dk (1 sa 38 dk) |
| Pamuklu Eko | 60 °C | 5 kg | 159 dk (2 sa 39 dk) |
| Pamuklu Eko | 60 / 40 °C | 2,5 kg | 129 dk (2 sa 9 dk) |
| Sentetik | 60 °C | 2,5 kg | 116 dk (1 sa 56 dk) |
| Sentetik | 40 °C | 2,5 kg | 106 dk (1 sa 46 dk) |
| Hızlı&Günlük | 90 / 60 / 30 °C | 5 kg | 88 / 58 / 28 dk |
| Hızlı 14 | 30 °C | 2 kg | 14 dk |
| Gömlek | 60 °C | 2,5 kg | 104 dk |
| Karma | 40 °C | 3 kg | 115 dk |
| Yünlü | 40 °C | 1,5 kg | 60 dk |
| Elde Yıkama | 20 °C | 1 kg | 43 dk |

Aynı kılavuzun **sentetik programları için belirleyici değerler** tablosunda Sentetik 60 için 100/120, Sentetik 40 için **90/110 dakika** yazıyor; iki tablo birebir aynı değeri vermiyor. 5063 FYE'nin notu: seçtiğin programın süresini ekranda görürsün, ekranda görünen süreyle gerçekleşen süre arasında **küçük farkların olması normaldir.** Tüketim değerleri için de kılavuz, su basıncı, su sıcaklığı, çamaşır cinsi ve miktarı ile yardımcı fonksiyonlara göre **tablodan farklılık gösterebilir** uyarısını yazıyor.

## 7103 D'de yazan süreler

7103 D'nin program tablosunda süre sütunu yok; süreler iki yerde geçiyor. **Teknik özellikler** bölümü: tam yükte 60 °C standart pamuklu programının süresi **215 dakika** (3 sa 35 dk), kısmi yükte 60 °C ve 40 °C için **190 dakika** (3 sa 10 dk). Standart program burada **Pamuklu Eko 60 °C ve 40 °C.** **Sentetik belirleyici değerler** tablosu: Sentetik 60 ve Sentetik 40 için **115/140 dakika,** 3 kg yükte. Kılavuz iki değerin hangi duruma ait olduğunu açıklamıyor.

7103 D'nin uyarısı daha net: yüklediğin çamaşır miktarına bağlı olarak ekranda görünen süreyle gerçek süre arasında **1-1,5 saat kadar fark olabilir;** süre güncellemesi yıkama başladıktan bir süre sonra otomatik olarak yapılır. Pamuklu Eko için kılavuz, programın **diğer tüm programlara göre daha uzun sürede** yıkadığını ama enerji ve su tasarrufu sağladığını yazıyor.

## Adım adım: kendi makinende süreyi okuma ve kısaltma

**1. Model adını bul, kendi tablonu aç.** Yukarıdaki iki model arasında bile Pamuklu Eko 60 süresi 159 ile 215 dakika arasında değişiyor. Model adı kılavuzun kapağında ve teknik özellikler tablosunda yazar. Kendi kılavuzundaki **Program ve tüketim tablosu**na bak; süre sütunu yoksa teknik özelliklerdeki standart program sürelerine ve ekrana güven.

**2. Ekrandaki süreyi oku, yıkama başlayınca tekrar bak.** Program seçerken süre ekranda görünür. 7103 D'ye göre gerçek süre yüke bağlı olarak 1-1,5 saate kadar farklı olabilir ve yıkama başladıktan bir süre sonra güncellenir. İlk gördüğün süre bu yüzden kesin değildir.

**3. Az yükte Pamuklu Eko kendiliğinden kısalır.** 7103 D kılavuzuna göre Pamuklu Eko'da daha az çamaşır yıkarken, örneğin **½ kapasite veya daha az,** program aşamalarındaki süreler otomatik olarak kısalabilir; enerji ve su tüketimi de azalır.

**4. Hızlı Yıkama'yı kullan.** 7103 D'de bu fonksiyon seçildiğinde ilgili programların süreleri **%50'ye kadar kısalır.** Kılavuzun şartı: makineye program tablosundaki azami yükün **en çok yarısı** kadar çamaşır yükle. Günlük / Hızlı 14 programı Hızlı Yıkama ile **14 dakikaya** kadar iner; bu durumda en fazla 2 kg çamaşır yıkanmalı. Hangi durumda kısa programın yeteceği [çamaşır makinesi hızlı program ne zaman](/blog/camasir-makinesi-hizli-program-ne-zaman/) yazısında.

**5. Ön yıkamayı yalnız çok kirlide aç.** 7103 D'ye göre ön yıkama yalnızca **çok kirli çamaşırlar** için gereklidir; kullanmadığında enerji, su, deterjan ve **zaman** tasarrufu sağlarsın.

**6. Süre geri saymıyorsa beklediği adımı bil.** 7103 D'nin sorun tablosuna göre ekranlı modellerde süre üç adımda durabilir: **su alırken** (makine yeterli suyu alana kadar), **ısıtırken** (seçili sıcaklığa ulaşana kadar) ve **sıkmada** (dengesiz yük algılandığında). Dengesiz yükte çamaşırları tamburda düzelt. Kılavuz yıkamanın uzama sebepleri arasında düşük su basıncını, düşük voltajı, soğuk mevsimde soğuk giriş suyunu ve **fazla deterjanın** yarattığı köpüğü de sayıyor; önerilen miktarda deterjan kullan.

## Ne zaman servis

- Süre her yıkamada ısıtma adımında uzun süre duruyorsa
- Hortum ve filtre temizken su alma adımı bitmiyorsa
- Ekranda bir kod çıkıyorsa: liste [Arçelik çamaşır makinesi hata kodları](/blog/arcelik-camasir-makinesi-hata-kodlari/) sayfasında

⛔ **Kendin-çöz sınırı burada biter.** Program, yük, deterjan ve yardımcı fonksiyon seçimi sende; ısıtıcı, motor ve elektronik kart yetkili servisin.

## Servisi aramadan önce kısa özet

1. Modelin adı ve seçtiğin program ne?
2. Süre hangi adımda duruyor: su alma, ısıtma, sıkma?
3. Yük, azami yükün ne kadarı?

Markadan bağımsız süre bantları için [çamaşır makinesi program süreleri](/blog/camasir-makinesi-program-sureleri/), karışık programlar için [karışık 30 derece kaç dakika sürer](/blog/karisik-30-derece-kac-dakika-surer/) yazısına bak. Belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

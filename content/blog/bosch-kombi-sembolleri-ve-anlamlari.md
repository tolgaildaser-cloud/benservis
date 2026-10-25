---
title: "Bosch kombi sembolleri ve anlamları: ekran rehberi"
description: "Bosch kombi ekranındaki radyatör, musluk, alev, üçgen, anahtar, baca temizleyici ve eco sembolleri ne demek? Condens kılavuzlarından tek tek."
slug: "bosch-kombi-sembolleri-ve-anlamlari"
date: "2026-10-25"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-25 PAZ alt ajanı (YK #182 Dalga 8, küme Z4, alt ajan C). origin/main'de bosch-kombi-sembol* yok; başlık grep'i ("Bosch kombi sembol") boş.
#   Yakın sayfalar: bosch-kombi-ariza-kodlari (kod anlamları; bu yazı kod tablosu vermez, oraya bağlanır), bosch-kombi-resetleme,
#   bosch-kombi-kalorifer-isitmiyor, bosch-kombi-sicak-su-gelmiyor. Emsal: baymak/demirdokum/vaillant-kombi-sembolleri-ve-anlamlari canlıda.
# Arama kanıtı (25 Eki 2026, Google TR otomatik tamamlama): "bosch kombi sembol" → 1. "bosch kombi sembolleri", 2. "…arıza sembolleri",
#   3. "…ekran sembolleri"; "bosch kombi a" → 1. "bosch kombi arıza sembolleri". GSC (www-5 3 ay / www-6 7 gün): Bosch sembol satırı yok.
# Belgeler bu koşuda curl ile indirildi (HTTP 200 application/pdf), md5'ler Dalga 2 koşusundakiyle aynı:
#  (K1) Condens 2500 W 6721835246 (2021/03)  https://bosch-tr-tr-b.boschhc-documents.com/download/pdf/file/6721835246  md5 81853ab2ff146ad75d9398dc0c9832b0
#  (K2) Condens 1200W 6721835940 (2023/04)   …/download/pdf/file/6721835940  md5 a22315e51db093d2642aeb55bcbc8c02
#  (K3) Condens 2200i W 6721839341 (2023/04) …/download/pdf/file/6721839341  md5 e06a7d8792003fe41f2a63b08204887b
# Sembol şekilleri pdftoppm ile K1 s.9 ve K2 s.5 sayfa görüntülerinden doğrulandı (metin katmanında simgeler font karakteri).
# BİLEREK YAZILMAYANLAR: tek tek arıza kodlarının anlamı (bosch-kombi-ariza-kodlari'nda) · servis modu/bacacı modunun nasıl açıldığı
#   (kılavuzda kullanıcıya anlatılmıyor) · 2300i W / 7000iW sembolleri (bu koşuda okunmadı) · fiyat (#46).
# Alıntı denetim tablosu: bosch-kombi-sembolleri-ve-anlamlari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa hiçbir elektrikli şalteri kullanma, gaz beslemesini kes, pencere ve kapıları aç, binayı terk et ve dışarıdan gaz dağıtım şirketini ara."
  - "Kombinin modelini kumanda paneli kapağındaki tip etiketinden öğren ve kendi kılavuzunu aç."
  - "Ekran tamamen boş ya da yalnız birkaç sembol varsa kombi bekleme modundadır; açma tuşuyla çalıştır."
  - "Radyatör ve musluk sembollerine bak: hangisi yanıp sönüyorsa kombi o işi yapıyordur, alev sembolü brülörün yandığını gösterir."
  - "Üzeri çizili radyatör sembolü sürekli duruyorsa yaz işletimi açıktır; peteklerin ısınması için ısıtmayı yeniden aç."
  - "Ekranda H sembolü ve bir kod varsa kodu not al, kılavuzdaki sıfırlama adımını bir kez uygula."
  - "Anahtar ya da baca temizleyici sembolü görüyorsan herhangi bir tuşa basmadan servisin işini bitirmesini bekle; kod geri dönüyorsa servisi ara."
faq:
  - q: "Bosch kombide üzeri çizili radyatör ne demek?"
    a: "Yaz işletimi demek. Condens 1200W ve 2200i W kılavuzlarına göre yaz işletiminde ısıtma işletmesi kilitlidir ve ekranda bu sembol sürekli durur. Sirkülasyon pompası ve dolayısıyla ısıtma kapalıdır, sıcak kullanım suyu ise devam eder. Petekler soğuksa ve bu sembol varsa önce yaz işletimini kapat."
  - q: "Radyatör sembolü yanıp sönüyor, arıza mı?"
    a: "Hayır. Kılavuza göre ısıtma işletmesinde radyatör sembolü yanıp söner; brülör etkin olduğunda yanına alev sembolü de gelir. Yani kombi o anda petekler için çalışıyor. Aynı kural sıcak su için de geçerli: musluk sembolü yanıp sönüyorsa kombi kullanım suyu hazırlıyor."
  - q: "Ekranda H ve ünlem işareti var, ne yapmalıyım?"
    a: "H bir arıza olduğunu gösterir, nedeni yanındaki kodla belirtilir. Condens 2500 W'de H ve ! birlikte görünüyorsa reset tuşunu bu semboller kaybolana kadar basılı tutarsın; yalnız H varsa cihazı açma tuşuyla kapatıp yeniden açarsın. Condens 1200W ve 2200i W'de iki ok tuşunu birlikte basılı tutmak ya da cihazı kapatıp açmak gerekir. Kod geri dönüyorsa servisi ara."
  - q: "Eco yazısı ne işe yarar?"
    a: "Eco çalışma modunun açık olduğunu gösterir. Bosch kılavuzlarına göre eco modunda cihaz yalnız sıcak su talebi olduğunda devreye girer; konfor modunda ise suyu sürekli ayarlanan sıcaklıkta hazır tutar. Eco açıkken musluktan sıcak suyun gelmesi biraz daha uzun sürebilir."
  - q: "Sıcaklık iki çizgi arasında görünüyor, bu ne?"
    a: "Condens 1200W ve 2200i W kılavuzlarına göre bu, manuel işletimin etkin olduğu anlamına gelir. Manuel işletim, zaman ve sıcaklık ayarlarıyla ilgili teknik bir sorun olduğunda kombiyi ayarlardan bağımsız çalıştırmak içindir ve sınırlı süre kullanılmalı. Kapatmak için kılavuzdaki tuşu beş saniye basılı tutarsın."
images:
  coverAlt: "Duvara asılı beyaz bir kombinin önünde, küçük simgelerle dolu dijital bir ekranın yakın planı"
  steps:
    - "Çizim: solda duvar tipi kombi, sağda açık bir pencere"
    - "Çizim: solda duvar tipi kombi, sağda uzaktan kumanda"
    - "Çizim: solda duvar tipi kombi, sağda bekleme süresi için saat"
    - "Çizim: solda duvar tipi kombi, sağda panel radyatör ve vanası"
    - "Çizim: solda duvar tipi kombi, sağda panel radyatör ve vanası"
    - "Çizim: solda duvar tipi kombi, sağda panel ekranındaki uyarı"
    - "Çizim: solda duvar tipi kombi, sağda telefon ve kullanım kılavuzu"
---

Bosch kombinin ekranında rakamların etrafında küçük simgeler var: bir radyatör, bir musluk, bir alev, bir üçgen, bazen bir anahtar ya da şapkalı bir figür. Bunların çoğu arıza değil, kombinin o anda ne yaptığını gösteren işaretler. Bu yazıda Bosch'un Condens 2500 W, Condens 1200W ve Condens 2200i W kullanma kılavuzlarındaki ekran şemalarını tek tek açtık. Simgelerin yeri ve tuşların düzeni modele göre değişir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Radyatör = ısıtma, musluk = sıcak su, alev = brülör yanıyor. Yanıp sönen sembol "şu an bu iş yapılıyor" demek. Üzeri çizili radyatör yaz işletimi. Üçgen ve **H** arıza; kodu not al, bir kez sıfırla. Anahtar ve baca temizleyici servis içindir.

## Semboller ve anlamları

| Ekranda gördüğün | Kılavuza göre anlamı | Ne yaparsın |
|---|---|---|
| **Radyatör** | Isıtma işletmesi; yanıp sönerse kombi petekler için çalışıyor | Bir şey yapma |
| **Musluk** | Kullanım suyu hazırlaması; yanıp sönerse sıcak su hazırlanıyor | Bir şey yapma |
| **Alev** | Brülör işletmesi, yani brülör yanıyor | Bir şey yapma |
| **Üzeri çizili radyatör** | Yaz işletimi; ısıtma kilitli | Kışın ısıtmayı aç |
| **Üçgen** | Arıza göstergesi | Kodu oku |
| **H** (bazen **!** ile) | Arıza var; neden koddan okunur | 🛠️ Bir kez sıfırla |
| **eco** | Eco çalışma modu etkin | İstersen konfora geç |
| **Anahtar** | Servis modu | Servise bırak |
| **Baca temizleyici figürü** | Bacacı çalışma modu (Condens 1200W, 2200i W) | Servise bırak |
| **İki çizgi arasında sıcaklık** | Manuel işletim etkin (Condens 1200W, 2200i W) | Sınırlı süre kullan |

Condens 2500 W'nin ekranında bunlara ek olarak sıcaklık göstergesi ve ısıtma modu ile kullanım suyu simgeleri çerçeve içinde duruyor; bacacı modu simgesi bu modelin şemasında yok.

## Adım adım: ekranı okumak

**1. Gaz kokusu var mı?** Bosch'un güvenlik bölümü açık: gaz kokusu alırsan sigara içme, çakmak ve kibrit kullanma, hiçbir elektrikli şaltere dokunma, fiş çekme, telefonu ya da kapı zilini kullanma. Gaz beslemesini ana kapama tertibatından ya da gaz sayacındaki vanadan kes, pencere ve kapıları aç, apartman sakinlerini uyar ve binayı terk et. İtfaiyeyi, polisi ve gaz dağıtım şirketini binanın dışından ara. Bu durumda ekranla uğraşma.

**2. Modelini bul.** Bosch, arıza durumunda bildirmen gereken bilgilerin **kumanda paneli kapağındaki tip etiketinde** yazılı olduğunu söylüyor. Cihaz adını oradan oku; sembollerin yeri ve sıfırlama tuşları modele göre değişiyor.

**3. Ekran boşsa bekleme modu.** Condens 2500 W kılavuzuna göre cihaz açma tuşuyla devre dışı bırakıldığında ekranda yalnız birkaç sembol kalır. Çalıştırmak için aynı tuşa bas; ekranda ısıtma suyunun gidiş sıcaklığı görünür. Kılavuz bekleme modunda da pompanın ve üç yollu vananın sıkışmasını önleyen blokaj korumasının çalışmaya devam ettiğini yazıyor.

**4. Yanıp sönen sembolü oku.** Condens 1200W ve 2200i W kılavuzlarına göre ısıtma işletmesinde **radyatör** sembolü, boyler işletmesinde **musluk** sembolü yanıp söner; brülör etkin olduğunda ayrıca **alev** sembolü görünür. Yani yanıp sönen simge kombinin o an hangi işi yaptığını söyler. Condens 2500 W'de de brülör ısıtma ya da sıcak su için çalışırken ilgili simge ve alev birlikte görünür.

**5. Üzeri çizili radyatör: yaz işletimi.** Kılavuzun notu: yaz işletiminde ısıtma işletmesi kilitlidir ve ekranda bu sembol sürekli durur. Bu modda sirkülasyon pompası ve dolayısıyla ısıtma kapalıdır, sıcak su devam eder. Kışın petekler soğuksa önce buna bak. Condens 1200W'de radyatör tuşuna basıp ok tuşuyla istediğin gidiş sıcaklığını seçince ekranda yeniden radyatör sembolü sürekli görünür. Ayrıntı [Bosch kombi kalorifer ısıtmıyor](/blog/bosch-kombi-kalorifer-isitmiyor/) yazısında.

**6. H ve üçgen: arıza.** Bosch'a göre **H** bir arızanın meydana geldiğini gösterir, nedeni bir kodla belirtilir. Condens 2500 W'de H ve ! birlikte görünüyorsa reset tuşunu bu semboller kaybolana kadar basılı tut; yalnız H varsa cihazı açma tuşuyla kapatıp yeniden aç. Condens 1200W ve 2200i W'de cihazı kapatıp açabilir ya da iki ok tuşunu H ve ! kaybolana kadar birlikte basılı tutabilirsin. Kodun anlamı [Bosch kombi arıza kodları](/blog/bosch-kombi-ariza-kodlari/) sayfasında, sıfırlamanın sınırı [Bosch kombi resetleme](/blog/bosch-kombi-resetleme/) yazısında.

**7. Anahtar ve baca temizleyici: servis.** Şemalarda **anahtar** simgesi servis modu, şapkalı **baca temizleyici** figürü bacacı çalışma modu olarak geçiyor. Kılavuzlar bu modların nasıl açıldığını kullanıcıya anlatmıyor; bunlar servisin ölçüm ve bakım için kullandığı modlar (çıkarım). Görüyorsan tuşlara basma. Sıfırlamadan sonra kod geri geliyorsa Bosch'un talimatı servisi aramak ve **gösterilen arıza kodunu, cihaz bilgileriyle birlikte** bildirmek.

## Eco ve manuel işletim

Eco simgesi, eco çalışma modunun etkin olduğunu gösterir. Kılavuzlara göre eco modunda cihaz yalnız sıcak su talebi olduğunda devreye girer; konfor modunda su sürekli ayarlanan sıcaklıkta hazır tutulur. Condens 1200W ve 2200i W'de eco'yu açmak ya da kapatmak için musluk tuşunu ekranda eco görünene ya da kaybolana kadar basılı tutuyorsun. Sıcak su geç geliyorsa [Bosch kombi sıcak su gelmiyor](/blog/bosch-kombi-sicak-su-gelmiyor/) yazısına bak.

Aynı iki modelde gidiş sıcaklığı **iki çizgi arasında** görünüyorsa manuel işletim açık demektir. Bosch bu modu zaman ve sıcaklık ayarlarında teknik sorun olduğunda, sorun giderilene kadar sınırlı süre kullanmanı istiyor. Açmak ve kapatmak için kılavuzdaki tuşu beş saniye basılı tutuyorsun.

Bir not daha: Condens 1200W ve 2200i W ilk çalıştırıldığında ekranda bir sembolle gidiş sıcaklığı dönüşümlü görünüyorsa kombi yoğuşma sifonunu doldurmak için yaklaşık on beş dakika en düşük güçte kalıyor. Bu da arıza değil.

## Ne zaman servis

- H ve aynı kod sıfırlamadan sonra geri geliyorsa
- Anahtar ya da baca temizleyici simgesi uzun süre kaybolmuyorsa
- Ekranda gaz, yanma ya da baca ile ilgili bir kod duruyorsa

⛔ **Kendin-çöz sınırı burada biter.** Ekranı okumak, açma tuşu, yaz işletimi, eco ve kılavuzdaki sıfırlama sende; kapağın içi, gaz hattı, baca, elektronik kart ve servis menüleri yetkili servisin.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne (tip etiketinden)?
2. Ekranda hangi semboller var, hangisi yanıp sönüyor?
3. H ve bir kod var mı, kod ne?
4. Sıfırlamayı bir kez denedin mi?

Ekrandaki sembolü ve kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Basıncın kaç olması gerektiği [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) sayfasında. Bil, gör, çağır.

---
title: "Buderus kombi resetleme nasıl yapılır?"
description: "Buderus kombi resetleme: reset tuşu ya da iki ok tuşu, kaç saniye basılır, en fazla kaç kez denenir ve ne zaman servis aranır; Buderus'un kendi belgeleri."
slug: "buderus-kombi-resetleme"
date: "2026-10-23"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 2, küme D, fork B). origin/main'de buderus-kombi-resetleme yok. Yakın: buderus-kombi-ariza-kodlari
#   (reset adımlarını kod rehberinin bir bölümü olarak anıyor), buderus-kombi-sicak-su-vermiyor ("tek reset" adımı), buderus-kombi-calismiyor.
#   Başlıkları "resetleme" sorgusunu hedeflemiyor; bu yazı o sorguya ayrılmış sayfa.
# Arama kanıtı (bu koşuda Google otomatik tamamlama, hl=tr gl=tr): "buderus kombi" → 2. "buderus kombi resetleme";
#   "buderus kombi reset" → 1. "buderus kombi resetleme", 2. "…reset tuşu", 3. "…resetleme nasıl yapılır", 4. "…resetleme yapmıyor". GSC (3 ay/7 gün): yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile Buderus'un alan adlarından yeniden indirildi (hepsi HTTP 200). PDF md5'leri 27 Eyl yerel kopyasıyla
#   (kaynak-buderus-sprint/MD5SUMS-2026-09-27.txt) aynı. pdftotext -layout, sayfa = PDF sayfası.
#  (R) Buderus TR "Buderus Kombi Resetleme İşlemi Nasıl Yapılır?"  https://www.buderus.com/tr/tr/bilgiler/kombi-rehberi/buderus-kombi-resetleme-islemi-nasil-yapilir/
#      HTTP 200 · md5 a93ba3c6493dfa1ea8480de03382c60c (dinamik sayfa; md5 indirme anına ait)
#  (B1) Logamax plus GB072-24|24K Kullanma Kılavuzu 6721835150  https://buderus-tr-tr-b.boschhc-documents.com/download/file/file/6721835150.pdf  md5 e90532810ee5ec5e8414b1c01e659a75
#  (B2) Logamax plus GB022i-20 KD H 6721835260  …/6721835260.pdf  md5 285eeb793f4a256196ab942d187cff31
#  (B3) Logamax Plus GB122i.2-24 KD H 6721843895  …/6721843895.pdf  md5 14a8d326f557827c9670b4d367e65098
#  (B4) Logamax plus GB172i.2 6721852623 (2023/12)  …/6721852623.pdf  md5 e2c3f95692c0e3c1e3a2ea3b59997420
#  (M) Logamax plus GB072 Montaj Kılavuzu 6721835147 (2022/11)  …/6721835147.pdf  md5 10fff43981a512e39cb0b0037019605a
# R: reset tuşu 3 sn, uzun ve ardı ardına basma yok, tuş yoksa aşağı+yukarı 3 sn, en fazla 2 defa, sonra servis, kodu not al · B1 s.12 yanıp sönen kod →
#   kapat-aç ya da "Reset yazısı gösterilene kadar reset tuşunu basılı tutun", cihaz bilgileri tip etiketi/ön kapak · B1 s.5 basınç 1–2 bar, doldurma vanası
#   · B2 s.11, B3 s.8 kapat-aç ya da H ve ! kaybolana kadar ok tuşları · B4 s.7 2980 blokaj, LoPr, 0,3 bar · B4 s.3 gaz kokusu · M s.25 bloke edici / kilitleyici.
# BİLEREK YAZILMAYANLAR: fişi çekme/sigorta indirme gibi belgede olmayan sıfırlama yolları · tuş simgelerinin adı · kombi içi parça teşhisi · fiyat (#46).
# Alıntı denetim tablosu: buderus-kombi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa resetlemeye çalışma; elektrikli şaltere dokunma, pencere ve kapıları aç, binayı terk et ve dışarıdan gaz dağıtım şirketini ara."
  - "Ekrandaki arıza kodunu not al ve kodun sürekli mi yandığına, yanıp mı söndüğüne bak."
  - "Basınç göstergesine bak; işletme basıncı normalde 1 ile 2 bar arasında olmalı."
  - "Modeline göre reset tuşuna ya da iki ok tuşuna birlikte bas veya cihazı kapatıp yeniden aç."
  - "Tuşu yaklaşık üç saniye tut; daha uzun basılı tutma ve art arda basma."
  - "Resetlemeyi en fazla iki kez dene."
  - "Arıza uyarısı sürüyorsa Buderus yetkili servisini ara; arıza kodunu ve cihaz bilgilerini bildir."
faq:
  - q: "Buderus kombide reset tuşu nerede?"
    a: "Modele göre değişir. Buderus'a göre pek çok modelin ön panelinde reset tuşu var; Logamax plus GB072'nin kumanda panelinde reset tuşu ayrı bir tuş olarak yer alıyor. Reset tuşu olmayan modellerde, örneğin GB022i ve GB122i.2'de, aşağı ve yukarı ok tuşlarına aynı anda basılıyor."
  - q: "Reset tuşuna kaç saniye basılır?"
    a: "Buderus'un resetleme rehberine göre reset tuşunu 3 saniye basılı tutmak yeterli; 3 saniyeden uzun basmamak ve art arda basmamak gerekiyor. GB072 kılavuzu tuşun ekranda Reset yazısı görünene kadar tutulmasını söylüyor."
  - q: "Kaç kez resetleyebilirim?"
    a: "Buderus resetlemenin en fazla 2 defa tekrar edilmesini öneriyor. İki denemeden sonra arıza uyarısı hâlâ görünüyorsa teknik servis desteği almak gerekiyor. GB172i.2 kılavuzu ayrıca tekrarlanan sıfırlama girişimlerinin cihazı 2980 koduyla bloke edebileceğini yazıyor."
  - q: "Ekrandaki kod yanıp sönmüyor, sürekli yanıyor; resetlemeli miyim?"
    a: "GB072 montaj kılavuzu iki tür arızayı ayırıyor. Sürekli gösterilen bloke edici arızalar cihazı belirli bir süre kapatır; arıza ortadan kalkınca cihaz kendiliğinden yeniden çalışır. Yanıp sönerek gösterilen kilitleyici arızalarda ise cihaz resetlenmeden çalışmaz."
  - q: "Resetleme garantiyi etkiler mi?"
    a: "Buderus'un rehberine göre önerilenden fazla resetleme cihazın iç aksamındaki bazı parçalara ya da reset tuşuna zarar verebilir ve cihaz garanti kapsamından çıkabilir. Arıza kodunun ekrandan gitmesi için yapılan gelişigüzel müdahaleler de aynı sonuca yol açabilir."
images:
  coverAlt: "Mutfak duvarına asılı beyaz bir kombinin kumanda paneli ve küçük ekranı"
  steps:
    - "Çizim: solda duvar tipi kombi, sağda açık bir pencere"
    - "Çizim: solda duvar tipi kombi, sağda panel ekranındaki uyarı"
    - "Çizim: solda duvar tipi kombi, sağda basınç göstergesi (manometre)"
    - "Çizim: solda duvar tipi kombi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi kombi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi kombi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi kombi, sağda telefon ve kullanım kılavuzu"
---

Buderus kombinin ekranında bir kod belirdi ve kombi durdu. Buderus'a göre bu bir güvenlik özelliği: arıza durumunda kombi kendi sistemini kapatır, ekranda da arızanın kaynağına işaret eden bir kod gösterir. Bazı arızalarda kombi resetlenmeden yeniden çalışmaz. Bu yazıda Buderus'un resetleme rehberindeki kuralları ve Logamax plus GB072, GB022i, GB122i.2 ve GB172i.2 kılavuzlarındaki adımları bir araya getirdik.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kodu not al, basınca bak. Reset tuşu varsa 3 saniye bas; yoksa aşağı ve yukarı ok tuşlarına birlikte bas ya da kombiyi kapatıp aç. Uzun ve art arda basma. En fazla iki deneme; arıza uyarısı sürüyorsa Buderus yetkili servisi.

## Model model resetleme

| Model | Belgedeki yol |
|---|---|
| **Reset tuşu olan modeller (örn. GB072)** | Cihazı kapatıp aç ya da ekranda Reset yazısı görünene kadar reset tuşunu basılı tut |
| **GB022i, GB122i.2** | Cihazı kapatıp aç ya da H ve ! kaybolana kadar iki ok tuşunu birlikte basılı tut |
| **GB172i.2** | Cihazı kapatıp aç ya da arızayı cihazdan sıfırla |

Başarılı olunca cihaz yeniden çalışmaya başlar ve ekranda gidiş suyu sıcaklığı görünür.

## Adım adım

**1. Gaz kokusu varsa reset yok.** Buderus kılavuzlarına göre gaz kokusu alırsan sigara içme, çakmak ve kibrit kullanma, hiçbir elektrikli şaltere dokunma ve fiş çekme. Pencere ve kapıları aç, tüm apartman sakinlerini uyar ve binayı terk et. İtfaiyeyi, polisi ve gaz dağıtım şirketini binanın dışından ara.

**2. Kodu not al ve nasıl yandığına bak.** Buderus, kod numarasının not edilmesini özellikle istiyor: resetlemeden sonra uyarı sürerse servise bu kodu ileteceksin. GB072 montaj kılavuzu iki tür arızayı ayırıyor. **Sürekli** gösterilen bloke edici arızalar cihazı bir süre kapatır; arıza ortadan kalkınca cihaz kendiliğinden yeniden çalışır. **Yanıp sönerek** gösterilen kilitleyici arızalarda ise cihaz resetlenmeden çalışmaz. Kodun anlamı [Buderus kombi arıza kodları](/blog/buderus-kombi-ariza-kodlari/) sayfasında.

**3. Basınca bak.** Buderus'a göre işletme basıncı normal durumda **1 ile 2 bar** arası. GB172i.2'de basınç ayarlanan alt sınırın altına düşünce ekranda **LoPr** mesajı çıkar, 0,3 barın altında ısıtma tesisatı bloke edilir; kılavuzun çözümü reset değil, tesisatı doldurmak. GB072 kılavuzu doldurma vanasını açıp manometrede 1–2 bar okununca kapatmayı anlatıyor, ama doldurmanın tesisata göre değiştiğini de yazıyor ve yetkili servisten nasıl yapıldığını göstermesini istemeni öneriyor.

**4. Modelinin yolunu uygula.** Buderus'un rehberine göre pek çok modelde ön panelde bir **reset tuşu** var. Tuş yoksa **aşağı ve yukarı tuşlarına aynı anda** basılıyor. Bütün kılavuzlarda üçüncü bir yol daha var: cihazı kapatıp yeniden açmak.

**5. Süreye dikkat.** Rehbere göre reset tuşunu **3 saniye** basılı tutmak yeterli. Tuşa 3 saniyeden uzun basma, art arda da basma. Aynı kural ok tuşları için de geçerli; Buderus, bu tuşlara arka arkaya çok kez ya da uzun süre basmanın cihaza zarar verebileceğini yazıyor. GB072 kılavuzu ölçüyü ekrandan veriyor: Reset yazısı görünene kadar.

**6. En fazla iki deneme.** Buderus resetlemenin **en fazla 2 defa** tekrar edilmesini öneriyor. İki denemeden sonra uyarı hâlâ ekrandaysa teknik servis gerekiyor; daha fazla deneme iç aksamdaki parçalara ya da reset tuşuna zarar verebilir, cihaz garanti kapsamından çıkabilir. GB172i.2 kılavuzu da tekrarlanan girişimlerin cihazı **2980** koduyla bloke edebileceğini, bu blokajın ancak uzman bir firma ya da müşteri hizmetleri arızanın nedenini yerinde giderdikten sonra kaldırılabileceğini yazıyor.

**7. Servise doğru bilgiyle git.** Kılavuzun talimatı: arıza giderilemiyorsa yetkili servisi ara, **arıza kodunu ve cihaz bilgilerini** belirt. Cihaz bilgileri tip etiketinde ya da ön kapaktaki cihaz tipi çıkartmasında yazılı. Buderus'a göre arıza her zaman kombiden kaynaklanmayabilir; şebeke suyu ya da doğal gaz akışındaki bir sorun da kombiyi kapatabilir. Bunu yerinde ayırmak servisin işi.

## Reset neyi çözmez

Reset, nedeni ortadan kalkmış bir arızanın kilidini açar. Basınç düşükse, gaz gelmiyorsa ya da kombinin içinde bir parça arızalıysa kod geri gelir. Buderus bu yüzden kodun ekrandan gitmesi için yapılan gelişigüzel müdahalelerin cihazı daha fazla arızalandırabileceğini vurguluyor.

## Ne zaman servis

- İki resetten sonra arıza uyarısı sürüyorsa
- Ekranda 2980 görüyorsan
- Basınç sık sık düşüyorsa
- Aynı kod kısa aralıklarla tekrar ediyorsa

⛔ **Kendin-çöz sınırı burada biter.** Ekran, tuşlar ve basınç göstergesi sende; kombinin kapağının içi, gaz hattı ve elektrik bağlantısı yetkili servisin.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ve seri numarası
2. Ekrandaki kod; sürekli mi yanıyor, yanıp mı sönüyor?
3. Kaç kez resetledin, kod geri geldi mi?
4. Basınç kaç bar?

Belirtiyi ve ekrandaki kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Sıcak su yoksa [Buderus kombi sıcak su vermiyor](/blog/buderus-kombi-sicak-su-vermiyor/), kombi hiç devreye girmiyorsa [Buderus kombi çalışmıyor](/blog/buderus-kombi-calismiyor/) yazısına bak. Bil, gör, çağır.

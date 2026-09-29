---
title: "Bosch çamaşır makinesi kapağı açılmıyor"
description: "Bosch çamaşır makinesinin kapağı açılmıyorsa Bosch kılavuzundaki üç sebep: sıcaklık, su seviyesi, elektrik kesintisi. Sırayla ne yapılır, ne zaman servis?"
slug: "bosch-camasir-makinesi-kapak-acilmiyor"
date: "2026-09-29"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-29 PAZ alt ajanı (sprint #144, Bosch çamaşır belirti koşusu). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bosch-home.com'dan yeniden indirildi, HTTP 200;
#   md5'ler 28 Eyl'de indirilen yerel kopyalarla birebir aynı. Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-bosch-camasir-sprint/
# #88: web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı. Okuma pdftotext -layout, sayfa = PDF sayfası (\f ile sayıldı).
#  (B) WGA142X1TR  https://media3.bosch-home.com/Documents/9001583102_B.pdf  52 s.  md5 42506a8ca9a5e07e2a54a74b856293f4  (sayfa atıfları esas olarak bu belgeye göre)
#  (A) WGA244A0TR  https://media3.bosch-home.com/Documents/9001709506_A.pdf  60 s.  md5 23d5ed1b30b9787b05f53f1137de1679
#  (C) WAK20200TR  https://media3.bosch-home.com/Documents/9001044777_B.pdf  44 s.  md5 1820d3ebcf1c9020152b02a125d40d9d
# "Kapak açılmıyor." satırı — Arızaları giderme tablosu (B s.40-41, A s.44):
#   "Sıcaklık çok yüksek. ▶ Sıcaklık düşene kadar bekleyiniz. ▶ → 'Programın iptal edilmesi' · Su seviyesi çok yüksek. ▶ Tahliye için uygun bir program seçiniz.
#    · Elektrik kesintisi. ▶ Kapağı acil kilit açma mekanizmasıyla açınız."
#   C s.30 (eski WAK): "Çamaşır doldurma kapağı açılamazsa. ■ Güvenlik fonksiyonu aktif. Program iptal? ■ - - - 0 (...) programı mı seçildi? ■ Sadece acil durumda açma fonksiyonu üzerinden mi açmak mümkün?"
# Diğer: B s.22 kapak simgesi (yanar: kilitli / yanıp söner: açık / kapalı: kilit açıldı) · B s.32 "13.10 Programın iptal edilmesi" (Sıcaklık yüksek → Durulama; su seviyesi yüksek → Sıkma ya da tahliye programı)
#   · C s.23 "Her zaman programın bitmesini bekleyiniz, aksi takdirde cihaz hala kilitli kalabilir." · C s.28 acil kilit açma (elektrik geldiğinde program devam eder; haşlanma ve dönen tambur uyarısı)
#   · B s.34-35 pis su pompasının boşaltılması · B s.46 "17.1 Acil kilit açma mekanizması" (gereklilik: pis su pompası boş; camdan su görünüyorsa açılmamalı; bir aletle aşağı çek, bırak) · B s.37 boşaltma sonrası 1 litre su + tahliye programı
#   · B s.38 onarım yalnız eğitimli uzman personel · C s.31 kendin gideremezsen: düğme Kapalı, fiş çek, musluk kapat, yetkili servis.
# BİLEREK YAZILMAYANLAR: kapı kilidi/kilit mekanizması arızası teşhisi (belgede yok) · çocuk kilidinin kapağı kilitlediği iddiası (B s.33 yalnız "kumanda elemanları kilitlenir" diyor) ·
#   kilidin kaç dakikada açıldığına dair süre (belgede yok) · eski WAK'taki "- - - 0" ayarının ayrıntılı anlamı (metin bozuk basılmış; yalnız tablonun sorusu aktarıldı).
# Alıntı denetim tablosu: bosch-camasir-makinesi-kapak-acilmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Ekrandaki kapak simgesine bak; simge yanıyorsa kapak kilitlidir."
  - "Program sürüyorsa bitmesini bekle ya da Başlat/Reload tuşuna basarak programı durdur."
  - "Sıcaklık yüksekse suyun soğumasını bekle ya da Durulama programını başlat."
  - "Su seviyesi yüksekse Sıkma programını başlat ya da suyu boşaltan bir program seç."
  - "Elektrik kesildiyse elektriğin gelmesini bekle; program çalışmaya devam eder."
faq:
  - q: "Bosch çamaşır makinesinde program bitti ama kapak açılmıyor, neden?"
    a: "Bosch'un kullanma kılavuzlarındaki arıza tablosu 'Kapak açılmıyor' satırında üç sebep sayıyor: sıcaklık çok yüksek, su seviyesi çok yüksek ya da elektrik kesintisi. Bosch'a göre sıcaklık veya su seviyesi yüksek olduğunda kapak güvenlik nedeniyle kilitli kalır. Eski WAK serisi kılavuzu ayrıca her zaman programın bitmesinin beklenmesini, aksi hâlde cihazın hâlâ kilitli kalabileceğini hatırlatıyor."
  - q: "Ekrandaki kapak simgesi ne anlatıyor?"
    a: "Bosch'un WGA142X1TR kılavuzuna göre kapak simgesi yanıyorsa kapak kilitlidir ve açılamaz; yanıp sönüyorsa kapak açıktır; simge kapalıysa kapağın kilidi açılmıştır ve kapak açılabilir. Simge yanıp sönüyor ve program başlamıyorsa sorun kapağın kapanmamasıdır; bunun için Bosch E16 yazımıza bakabilirsin."
  - q: "Elektrik kesildi, çamaşırlar içeride kaldı. Ne yapmalıyım?"
    a: "Bosch'un kılavuzuna göre elektrik geldiğinde program çalışmaya devam eder. Acelen yoksa elektriğin gelmesini beklemek yeterli. Bosch'un kılavuzunda bir acil kilit açma mekanizması da var, ancak pompa boşaltma ve bir aletle mekanizmayı çekmeyi gerektiriyor; bu rehberde onu kullanıcı adımı olarak vermiyoruz, çamaşırları hemen çıkarman gerekiyorsa kilidi yetkili servise açtır."
images:
  coverAlt: "Banyoda duran beyaz ön yüklemeli çamaşır makinesinin kapalı kapağı, cam kapağın ardında çamaşırlar ve ekranda yanan kilit simgesi"
---

Program bitti ya da yarıda kaldı, kapak kolunu çekiyorsun ama kapak açılmıyor. Bosch'un çamaşır makinesi kullanma kılavuzlarındaki arıza tablosunda bu durumun ayrı bir satırı var: **"Kapak açılmıyor."** Bosch bu satırda üç sebep sayıyor: **"Sıcaklık çok yüksek"**, **"Su seviyesi çok yüksek"** ve **"Elektrik kesintisi"**. Üçünün de çözümü kapağı zorlamadan, makinenin kendi programlarıyla. Bu yazıda Bosch'un sırasını adım adım açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kapak simgesi yanıyorsa kapak kilitlidir. Sıcaklık yüksekse bekle ya da Durulama başlat; su seviyesi yüksekse Sıkma ya da suyu boşaltan bir program seç; elektrik kesildiyse elektrik gelince program devam eder. Kapağı zorlama. Çamaşırları hemen çıkarman gerekiyorsa acil kilit açmayı yetkili servise bırak.

## Adım adım: evde denenecekler

**1. Kapak simgesine bak.** Bosch'un WGA142X1TR kılavuzundaki gösterge tablosuna göre kapak simgesi **yanıyorsa kapak kilitlidir ve açılamaz**; yanıp sönüyorsa kapak açıktır; simge **kapalıysa** kapağın kilidi açılmıştır ve kapak açılabilir. Önce simgenin hangi durumda olduğunu gör.

**2. Programın bitmesini bekle ya da durdur.** Eski WAK serisi kılavuzu açık söylüyor: **her zaman programın bitmesini bekle**, aksi hâlde cihaz hâlâ kilitli kalabilir. Programı yarıda kesmen gerekiyorsa Bosch'un "programın iptal edilmesi" tarifi **Başlat/Reload** tuşuna basmakla başlıyor. Bosch'un notu: sıcaklık veya su seviyesi yüksek olduğunda kapak **güvenlik nedeniyle kilitli kalır.**

**3. Sıcaklık yüksekse bekle ya da Durulama başlat.** Tablodaki birinci sebep **sıcaklık çok yüksek**. Bosch'un çözümü: **sıcaklık düşene kadar bekle.** Beklemek istemiyorsan Bosch'un iptal tarifine göre sıcaklık yüksek olduğunda **Durulama** programını başlat.

**4. Su seviyesi yüksekse suyu boşalt.** İkinci sebep **su seviyesi çok yüksek**. Bosch'un çözümü: **tahliye için uygun bir program seç.** İptal tarifinde bu, **Sıkma** programını başlatmak ya da su tahliyesi için uygun bir program seçmek olarak geçiyor. Bosch'un program tablosunda **Sıkma/Boşaltma** programı sıkma ve su boşaltma yapıyor; yalnız su boşaltmak için sıkma devri kapatılabiliyor.

**5. Elektrik kesildiyse bekle.** Üçüncü sebep **elektrik kesintisi**. Bosch'un eski WAK kılavuzuna göre **elektrik geldiğinde program çalışmaya devam eder.** Acelen yoksa beklemek yeterli: elektrik gelsin, program bitsin, kapak simgesi sönsün.

## Çamaşırları hemen çıkarman gerekiyorsa

Bosch'un kılavuzunda elektrik kesintisi için bir **acil kilit açma mekanizması** tarif ediliyor. Ön şartı pis su pompasının boşaltılması; mekanizma da **bir aletle** aşağı çekiliyor. Bosch'un kesin kuralı: **camdan su görünüyorsa kapak açılmamalıdır.** Aletle kilit mekanizmasına müdahale ettiği için bu işlemi bu rehberde kullanıcı adımı olarak vermiyoruz. Acelen varsa kilidi yetkili servise açtır; acelen yoksa elektriğin gelmesini bekle, Bosch'a göre program kendiliğinden devam eder.

## Eski WAK serisinde farklı olan

Bosch'un eski WAK20200TR kılavuzunda aynı satır soru biçiminde: **"Çamaşır doldurma kapağı açılamazsa."** Tablo önce **güvenlik fonksiyonunun** devrede olup olmadığını ve programın iptal edilip edilmediğini soruyor. İkinci soru, sıkma devri göstergesinde **"– – –"** ayarının seçili olup olmadığı; aynı soru tablonun "deterjanlı su cihazdan pompalanıp boşaltılmıyor" satırında da geçiyor. Üçüncü madde, kapağın **yalnız acil durumda açma** fonksiyonuyla açılabileceği durumlar. Yani eski modellerde de mantık aynı: içeride su ya da sıcaklık varken kapak kilitli kalır.

Ekranda kapak simgesi **yanıp sönüyor** ve program başlamıyorsa sorun ters yönde, kapak kapanmıyordur; bunun için [Bosch çamaşır makinesi E16 hatası](/blog/bosch-camasir-makinesi-e16-hatasi/) yazısına bak. Ekrandaki diğer simgeler [Bosch çamaşır makinesi sembolleri ve anlamları](/blog/bosch-camasir-makinesi-sembolleri-ve-anlamlari/) yazısında. Markadan bağımsız genel kontrol listesi için [çamaşır makinesinin kapağı açılmıyor](/blog/camasir-makinesi-kapagi-acilmiyor/) yazısına bakabilirsin.

## Sınır nerede biter

Sıcaklık düştü, su boşaltıldı, elektrik geldi ve kapak hâlâ açılmıyorsa Bosch'un kılavuzu kullanıcıya başka yol vermiyor. Bosch'un uyarısı açık: **usulüne uygun olmayan onarımlar tehlikelidir**, cihazda onarımı **yalnız bunun eğitimini almış uzman personel** yapabilir. Eski WAK kılavuzunun sırası: program ayar düğmesini **Kapalı** konumuna getir, **fişi çek, musluğu kapat** ve yetkili servisi çağır.

⛔ **Kendin-çöz sınırı burada biter.** Bekleme ve program seçimi kullanıcıya; acil kilit açma, kilit mekanizması ve makinenin içi servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Kapak simgesi yanıyor mu, yanıp sönüyor mu, sönük mü?
2. Program bitti mi, ekranda "End" yazıyor mu?
3. Camda su görünüyor mu?
4. Son yıkama yüksek sıcaklıkta mıydı?
5. Elektrik kesintisi oldu mu?

Bu beşine cevabın varsa servise "kapak açılmıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

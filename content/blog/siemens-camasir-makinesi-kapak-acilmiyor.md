---
title: "Siemens çamaşır makinesi kapak açılmıyor"
description: "Siemens çamaşır makinesinin kapağı açılmıyorsa Siemens kılavuzundaki sıra: kapak simgesi, programı durdurma, sıcaklık için Durulama, su için Sıkma programı."
slug: "siemens-camasir-makinesi-kapak-acilmiyor"
date: "2026-09-30"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, Siemens çamaşır belirti koşusu). Sekiz belge bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bsh-group.com'dan yeniden indirildi, sekizi de HTTP 200;
#   md5'ler 28 Eyl'de indirilen yerel kopyalarla birebir aynı. Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-siemens-camasir-sprint/
# #88: web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan ya da Bosch sayfalarından alınmadı. Okuma pdftotext -layout, sayfa = PDF sayfası; kapak simgesi satırları pdftoppm görüntüsüyle teyit edildi.
#  A) WG54K2Y0TR  https://media3.bsh-group.com/Documents/9002046535_A.pdf  52 s.  md5 8053c84dd7b5f803d86e4c3d49bacec5  (sayfa atıfları esas olarak bu belgeye göre)
#  B) WG64K2Y0TR  https://media3.bsh-group.com/Documents/9002056894_B.pdf  52 s.  md5 f4cbecc8c654c2e7e933fca34e4c34b3
#  C) WG42K2Z0TR  https://media3.bsh-group.com/Documents/9001980893_B.pdf  48 s.  md5 c0e42ad468f8df3dbe9f2fc0741d42d8
#  D) WG44K2Z0TR  https://media3.bsh-group.com/Documents/9001980838_B.pdf  48 s.  md5 3b20397a2bd4b264a9d4ed3119260026
#  E) WG52K2Z0TR  https://media3.bsh-group.com/Documents/9002023719_C.pdf  52 s.  md5 6f1aa61eddb8e0eaf80a15ec35688479
#  F) WG64K2Z0TR  https://media3.bsh-group.com/Documents/9002013652_D.pdf  52 s.  md5 991c66e45c79ce9de0099d43e6f4e95a
#  G) WG52A203TR  https://media3.bsh-group.com/Documents/9002046516_A.pdf  44 s.  md5 003935ece93b182aa6038f0e4c226126
#  K) WN54C2A0TR  https://media3.bsh-group.com/Documents/9001771585_E.pdf  56 s.  md5 0659013f7dc77a65864215555fabb2f5
# Arızaları giderme satırları (A s.42, G s.36; sekiz belgede aynı):
#   "Program duraklatıldı veya iptal edildi, ancak kapak açılamıyor. — Sıcaklık çok yüksek. ▶ Programı Durulama başlatınız veya sıcaklık düşene kadar bekleyiniz. · Su seviyesi çok yüksek. ▶ İlgili Sıkma programını veya uygun bir boşaltma programını başlatınız."
#   "Elektrik kesintisi durumunda kapak açılamaz. — Kapak kilitli. ▶ Kapağı acil kilit açma düğmesi ile açınız." (A s.42 → s.45: "Gereklilik: Pis su pompası boş." "Camdan su görünüyorsa kapak açılmamalıdır. Acil kilit açma mekanizması bir alet ile aşağı doğru çekilmeli ve serbest bırakılmalıdır.")
# Diğer: A s.21 kapak simgesi "yanıyor: Kapak kilitli. – Çamaşır ilave edebilmek için, [simge] yanmakta iken kapak kilidi açılabilir. – Kapağı açmak için, programı iptal edebilirsiniz. · yanıp söner: Kapak açıktır."
#   · A s.29 13.8 "Programın iptal edilmesi: 1. Başlat/Reload seçeneğine basınız. 2. Kapağı açınız. Sıcaklık veya su seviyesi yüksek olduğunda, kapak güvenlik nedenlerinden dolayı kilitli kalır. – Sıcaklık yüksek olduğunda ilgili Durulama programını başlatınız. – Su seviyesi yüksek olduğunda, ilgili Sıkma programını başlatınız veya su tahliyesi için uygun bir program ayarlayınız."
#   · A s.28 13.7 "Programın başlamasından sonra program durumuna göre çamaşırları çıkarabilir veya ekleyebilirsiniz. 1. Başlat/Reload seçeneğine basınız. Cihaz beklemeye alınır. Not: Çamaşır eklemek istediğinizde ekrandaki uyarılara dikkat ediniz."
#   · A s.28 "Program bittikten sonra çamaşırları çıkarmamanız halinde, 15 dakika sonra yaklaşık 30 dakika sürecek kırışık azaltma programı başlar. … Kırışık azaltma programını iptal etmek ve çamaşırları çıkarmak için ekrandaki bir tuşa basınız." (A-F ve K'de var; G'de yok)
#   · A s.27 "Kapı kolunun altına uzanınız ve kapıyı çekiniz." · A s.24 Sıkma/Boşaltma · A s.37 sıcak deterjanlı su uyarısı.
# ALET KURALI (30 Eyl): acil kilit açma "bir alet ile" yapılıyor → steps'e ve numaralı adıma GİRMEDİ; gövdede numarasız anıldı, sonuç yetkili servis. Pompa boşaltma burada adım değil (su boşaltmıyor kardeş taslağında).
# BİLEREK YAZILMAYANLAR: kapı kilidi/kilit mekanizması arızası teşhisi (belgede yok) · çocuk kilidinin kapağı kilitlediği iddiası (A s.29 yalnız "Kumanda elemanları kilitlenir") · kilidin kaç dakikada açıldığı (belgede süre yok).
# Alıntı denetim tablosu: siemens-camasir-makinesi-kapak-acilmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor"]
steps:
  - "Ekrandaki kapak simgesine bak: yanıyorsa kapak kilitli, yanıp sönüyorsa kapak açık."
  - "Program sürüyorsa Başlat/Reload tuşuna basarak programı durdur ya da iptal et."
  - "Program bittiyse ve kırışık azaltma programı başladıysa ekrandaki bir tuşa basarak iptal et."
  - "Sıcaklık yüksek olduğu için kilitliyse Durulama programını başlat ya da sıcaklığın düşmesini bekle."
  - "Su seviyesi yüksek olduğu için kilitliyse Sıkma programını ya da uygun bir boşaltma programını başlat."
  - "Kilit açılınca kapı kolunun altına uzan ve kapıyı çek."
faq:
  - q: "Siemens çamaşır makinemi durdurdum ama kapak açılmıyor. Neden?"
    a: "Siemens'in kılavuzuna göre sıcaklık ya da su seviyesi yüksek olduğunda kapak güvenlik nedeniyle kilitli kalır. Sıcaklık yüksekse Durulama programını başlat ya da sıcaklığın düşmesini bekle; su seviyesi yüksekse Sıkma programını ya da suyu boşaltan uygun bir programı başlat."
  - q: "Program bitti, çamaşırları hemen çıkarmadım; ekranda yeni bir bildirim var. Ne yapmalıyım?"
    a: "Siemens'in kılavuzuna göre program bittikten sonra çamaşırları çıkarmazsan 15 dakika sonra yaklaşık 30 dakika süren kırışık azaltma programı başlıyor ve ekranda bununla ilgili bir bildirim görünüyor. Bu programı iptal edip çamaşırları çıkarmak için ekrandaki bir tuşa basman yeterli."
  - q: "Program sırasında içeri çorap eklemek istiyorum, kapak açılır mı?"
    a: "Program durumuna göre açılabiliyor. Siemens'e göre Başlat/Reload'a basınca cihaz beklemeye alınıyor; çamaşır ekleme simgesi yanıyorsa kapak kilidi açılabiliyor. Siemens çamaşır eklerken ekrandaki uyarılara dikkat etmeni istiyor."
  - q: "Elektrik kesildi, kapak kilitli kaldı. Ne yapmalıyım?"
    a: "Siemens'in tablosuna göre elektrik kesintisinde kapak kilitli kalır ve acil kilit açma düğmesiyle açılır. Ancak kılavuza göre bu iş bir aletle yapılıyor, önce pis su pompasının boşaltılmasını gerektiriyor ve camdan su görünüyorsa kapak açılmamalı. Elektrik geldiğinde yukarıdaki adımları dene; çamaşırları hemen çıkarman gerekiyorsa acil açmayı yetkili servise bırak."
images:
  coverAlt: "Kapalı cam kapaklı ön yüklemeli bir çamaşır makinesinin kapı koluna uzanan bir el; camın ardında ıslak çamaşırlar"
---

Program durdu ya da bitti ama kapak açılmıyor. Siemens'in çamaşır makinesi kılavuzlarındaki arıza tablosunda bu durumun satırı açık: **"Program duraklatıldı veya iptal edildi, ancak kapak açılamıyor."** Siemens'in saydığı iki sebep de bir güvenlik önlemi: **sıcaklık çok yüksek** ya da **su seviyesi çok yüksek.** Kılavuzun başka bir yerinde de aynı cümle var: sıcaklık veya su seviyesi yüksek olduğunda **kapak güvenlik nedenlerinden dolayı kilitli kalır.** Bu yazıda kilidin nasıl okunacağını ve Siemens'in sırasını açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kapak simgesi yanıyorsa kapak kilitli. Başlat/Reload ile programı durdur ya da iptal et. Program bittiyse ve kırışık azaltma başladıysa bir tuşa bas. Sıcaklık yüksekse Durulama başlat ya da bekle; su yüksekse Sıkma ya da boşaltma programı başlat. Elektrik kesintisinde acil açma alet istediği için servise bırak.

## Adım adım: evde denenecekler

**1. Kapak simgesini oku.** Siemens'in ekran tablosuna göre kapak simgesi **yanıyorsa kapak kilitli**, **yanıp sönüyorsa kapak açık.** Simge yanıyorsa kilit devrede; aşağıdaki adımlar bu durum için.

**2. Programı durdur ya da iptal et.** Siemens'in kılavuzuna göre kapağı açmak için **programı iptal edebilirsin.** Sıra: **Başlat/Reload tuşuna bas, sonra kapağı aç.** Program sırasında yalnız çamaşır eklemek ya da çıkarmak istiyorsan da Siemens **Başlat/Reload**'a basmanı söylüyor; **cihaz beklemeye alınır** ve program durumuna göre kapak açılabilir. Siemens'in notu: çamaşır eklerken **ekrandaki uyarılara dikkat et.**

**3. Kırışık azaltma programını iptal et.** Program bittikten sonra ekranda **End** görünür. Siemens'e göre çamaşırları çıkarmazsan **15 dakika sonra yaklaşık 30 dakika sürecek bir kırışık azaltma programı başlar** ve ekranda bununla ilgili bir bildirim görünür. Siemens'in talimatı: **kırışık azaltma programını iptal etmek ve çamaşırları çıkarmak için ekrandaki bir tuşa bas.** Bu not WG54K2Y0TR, WG42K2Z0TR gibi kılavuzlarda var; WG52A203TR kılavuzunda yok.

**4. Sıcaklık yüksekse Durulama başlat ya da bekle.** Tablodaki ilk sebep: **sıcaklık çok yüksek.** Siemens'in çözümü: **Durulama programını başlat ya da sıcaklık düşene kadar bekle.**

**5. Su seviyesi yüksekse Sıkma ya da boşaltma programı başlat.** İkinci sebep: **su seviyesi çok yüksek.** Siemens'in çözümü: **Sıkma programını ya da uygun bir boşaltma programını başlat.** Program tablosunda **Sıkma/Boşaltma** programı **sıkma ve su boşaltma** yapıyor. Makine suyu bu programda da boşaltmıyorsa Siemens'in "Deterjanlı su cihazdan pompalanıp boşaltılmıyor" satırındaki sıra [Siemens çamaşır makinesi su boşaltmıyor](/blog/siemens-camasir-makinesi-su-bosaltmiyor/) yazısında.

**6. Kapağı doğru aç.** Kilit açıldığında Siemens'in kapak açma talimatı basit: **kapı kolunun altına uzan ve kapıyı çek.**

## Elektrik kesildiyse

Siemens'in tablosunda ayrı bir satır var: **"Elektrik kesintisi durumunda kapak açılamaz. — Kapak kilitli."** Siemens'in çözümü kapağı **acil kilit açma düğmesiyle** açmak. Ancak kılavuza göre bu yordamın ön şartı **pis su pompasının boş olması**; uyarısı **camdan su görünüyorsa kapak açılmamalı**; ve kilit **bir alet ile aşağı doğru çekilip serbest bırakılıyor.** Aletle yapılan ve önce suyun boşaltılmasını gerektiren bu iş için çamaşırları hemen çıkarman gerekmiyorsa elektriğin gelmesini bekleyip yukarıdaki adımları dene; gerekiyorsa acil açmayı **yetkili servise bırak.** Siemens'in uyarısı da hatırlatmaya değer: yüksek sıcaklıkta yıkama yapıldıysa **deterjanlı su sıcak olur; sıcak suya dokunma.**

Ekranda bir hata kodu varsa önce [Siemens çamaşır makinesi hata kodları](/blog/siemens-camasir-makinesi-hata-kodlari/) listesine bak. Markadan bağımsız genel liste için [çamaşır makinesi kapağı açılmıyor](/blog/camasir-makinesi-kapagi-acilmiyor/) yazısı var.

## Sınır nerede biter

Program iptal edilmiş, sıcaklık düşmüş, Sıkma ya da boşaltma programı çalışmış, kapak hâlâ açılmıyorsa Siemens'in tablosu kullanıcıya başka adım vermiyor. Siemens'in uyarısı: **usulüne aykırı onarımlar tehlike teşkil eder; cihazda onarımları yalnız bunun eğitimini almış uzman personel yapabilir.**

⛔ **Kendin-çöz sınırı burada biter.** Programı durdurmak, soğumasını beklemek ve suyu programla boşaltmak kullanıcıya; kapak kilidi ve acil açma servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Kapak simgesi yanıyor mu, yanıp sönüyor mu, sönük mü?
2. Program ne zaman ve nasıl durdu: sen mi durdurdun, elektrik mi kesildi, kendisi mi bitti?
3. Camdan içeride su görünüyor mu?
4. Durulama ya da Sıkma programı denendi mi?
5. Ekranda bir hata kodu var mı?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

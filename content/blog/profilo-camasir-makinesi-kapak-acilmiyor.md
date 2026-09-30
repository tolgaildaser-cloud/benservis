---
title: "Profilo çamaşır makinesi kapak açılmıyor"
description: "Profilo çamaşır makinesinin kapağı açılmıyorsa Profilo'nun sırası: program durumu, çocuk kilidi, sıcaklık, tamburdaki su ve servis sınırı."
slug: "profilo-camasir-makinesi-kapak-acilmiyor"
date: "2026-09-30"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, belirti rehberi). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bsh-group.com'dan indirildi, HTTP 200.
# Belge adresleri Profilo'nun kendi ürün sayfalarından (www.profilo.com/tr/tr/product/...) alındı; titleKey "user-manuals". #88: forum/servis sitesi/üçüncü taraf kullanılmadı.
# Bosch/Siemens'in yayındaki belirti sayfaları açılmadı, metin Profilo belgesinden yeniden yazıldı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-profilo-sprint/ · okuma pdftotext -layout, sayfa = PDF sayfası (\f ile sayıldı; basılı sayfa no ile aynı).
#  (A) Profilo CGK264Z0TR kullanım kılavuzu  https://media3.bsh-group.com/Documents/9002013778_F.pdf  48 s.  md5 e8d78fecbda5478f066c2a5a79daf68d
#  (B) Profilo CGA242X3TR kullanım kılavuzu  https://media3.bsh-group.com/Documents/9002022851_B.pdf  44 s.  md5 26e5f99b6a19ecada2fa682a657b7d76
# Arıza tablosu (A s.39 · B s.36): "Program duraklatıldı veya iptal edildi, ancak kapak açılamıyor." → "Sıcaklık çok yüksek." → "Programı Durulama başlatınız veya sıcaklık düşene kadar bekleyiniz."
#   · "Su seviyesi çok yüksek." → "İlgili Sıkma programını veya uygun bir boşaltma programını başlatınız."
#   · "Elektrik kesintisi durumunda kapak açılamaz." → "Kapak kilitli." → "Kapağı acil kilit açma düğmesi ile açınız." (A s.42 · B s.38: "Acil kilit açma mekanizması bir alet ile aşağı doğru çekilmeli";
#     "Gereklilik: Pis su pompası boş."; "Camdan su görünüyorsa kapak açılmamalıdır.") → ALET KURALI: numaralı adım değil, gövdede servise yönlendirme.
# Diğer: A s.20 kapak sembolü "yanıyor: Kapak kilitli. – Çamaşır ilave edebilmek için, yanmakta iken kapak kilidi açılabilir. – Kapağı açmak için, programı iptal edebilirsiniz."
#   · A s.28 13.8 çamaşır ilavesi: "1. Başlat Beklet seçeneğine basınız. Cihaz beklemeye alınır. ... 2. Kapağı açınız." · A s.28-29 / B s.28 programın iptali: "Sıcaklık veya su seviyesi yüksek olduğunda, kapak güvenlik nedenlerinden dolayı kilitli kalır."
#   · A s.28 "Program sonundan sonra ekranda şu görüntülenir: End." + "çamaşırları çıkarmamanız halinde, 15 dakika sonra yaklaşık 30 dakika sürecek kırışık azaltma programı başlar" + "iptal etmek ve çamaşırları çıkarmak için ekrandaki bir tuşa basınız."
#   · A s.19 çocuk kilidi sembolü "yanar: Çocuk kilidi etkinleştirildi." · A s.29 "Kumanda elemanları kilitlenir." + "Cihaz bekleme (Standby) modunda olduğunda ve elektrik kesintisinde de çocuk emniyeti etkin kalır." + devre dışı: "cihaz çalıştırılmalıdır", "Her iki tuşa 3 sn." 
#   · A s.27 / B s.26 kapının açılması: "Kapı kolunun altına uzanınız ve kapıyı çekiniz." · A s.39 / B s.36 "Kapak tamamen kapatılmamış." → çamaşır kapağa sıkışmasın, kapağı kapat
#   · A s.38 gerilim dalgalanması: "Herhangi bir işleme gerek yoktur. Gerilim beslemesi stabil hale geldiğinde, program normal biçimde devam eder."
#   · A s.38 / B s.35 "Diğer tüm hata kodları" (yeniden başlat → 30 sn güç kes → müşteri hizmetleri) · A s.36-37 uzman personel uyarısı.
# BİLEREK YAZILMAYANLAR: kapı kilidi/kilit bobini arızası teşhisi (belgede yok) · acil kilit açma adımları (alet gerekir) · "çocuk kilidi kapağı kilitler" iddiası (belge yalnız kumanda elemanlarını kilitlediğini söylüyor) ·
#   kapağı zorlama/ip ile açma gibi yöntemler.
# Alıntı denetim tablosu: profilo-camasir-makinesi-kapak-acilmiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor"]
steps:
  - "Ekranda End yazıyorsa ve kırışık azaltma başladıysa ekrandaki bir tuşa basarak kırışık azaltmayı iptal et."
  - "Ekranda çocuk kilidi simgesi yanıyorsa iki tuşa yaklaşık 3 saniye basarak kilidi kaldır."
  - "Program sürüyorsa Başlat Beklet tuşuna basarak makineyi beklemeye al ya da programı iptal et."
  - "Sıcaklık yüksek olduğu için kapak kilitliyse Durulama programını başlat ya da sıcaklığın düşmesini bekle."
  - "Tamburda su görünüyorsa Sıkma/Boşaltma programını başlatıp suyun boşalmasını bekle."
  - "Kapak kilidi açılınca kapı kolunun altına uzanıp kapağı çek."
faq:
  - q: "Profilo çamaşır makinesinin kapağı program bitince neden açılmıyor?"
    a: "Profilo'nun kılavuzuna göre sıcaklık veya su seviyesi yüksek olduğunda kapak güvenlik nedeniyle kilitli kalır. Arıza tablosu bu durum için iki yol veriyor: sıcaklık yüksekse Durulama programını başlatmak ya da sıcaklık düşene kadar beklemek; su seviyesi yüksekse Sıkma programını ya da uygun bir boşaltma programını başlatmak. Ayrıca program bittikten sonra çamaşırlar çıkarılmazsa yaklaşık 15 dakika sonra kırışık azaltma programı başlar; bunu ekrandaki bir tuşa basarak iptal edebilirsin."
  - q: "Elektrik kesildi, kapak kilitli kaldı. Ne yapmalıyım?"
    a: "Profilo'nun tablosu elektrik kesintisinde kapağın kilitli kalabileceğini ve acil kilit açma mekanizmasıyla açılacağını söylüyor. Ancak bu mekanizma kılavuza göre bir aletle çekiliyor, önce pis su pompasının boşaltılmasını gerektiriyor ve camdan su görünüyorsa kapak açılmamalı. Elektrik geri geldiyse önce yukarıdaki adımlarla dene; olmazsa bu işi kılavuzundaki 'Acil kilit açma' bölümüne göre yetkili servise bırak."
  - q: "Çamaşır eklemek için kapağı program ortasında açabilir miyim?"
    a: "Profilo'ya göre programın başlamasından sonra program durumuna bağlı olarak çamaşır ekleyip çıkarabilirsin. Başlat Beklet tuşuna basarak makineyi beklemeye alırsın, ekrandaki uyarılara dikkat edip kapağı açarsın. Sıcaklık ya da su seviyesi yüksekse kapak güvenlik nedeniyle kilitli kalır."
  - q: "Kapak kapanıyor ama makine kapak açık diye uyarıyor. Ne yapmalı?"
    a: "Profilo'nun tablosunda kapak simgesinin yanıp sönmesi için verilen neden kapağın tamamen kapatılmamış olması. Çözüm, çamaşırların kapağa sıkışmadığından emin olup kapağı yeniden kapatmak. Aynı satırda tambur temizliğinin gerekebileceği de yazıyor; kılavuzundaki 'Tambur temizleme' bölümüne bakabilirsin."
images:
  coverAlt: "Ön yüklemeli çamaşır makinesinin kapalı kapağı ve camın ardında tamburda duran çamaşırlar, kontrol panelinde yanan kilit simgesi"
---

Program bitti ya da durdu, ama kapak açılmıyor. Profilo'nun çamaşır makinesi kullanım kılavuzundaki arıza tablosunda bu durum için ayrı bir satır var: **"Program duraklatıldı veya iptal edildi, ancak kapak açılamıyor."** Profilo'nun bu satırda saydığı iki neden de güvenlik kilidiyle ilgili: **sıcaklık çok yüksek** ya da **su seviyesi çok yüksek.** Bu yazıda Profilo'nun sırasını açıyoruz; program sonundaki kırışık azaltma, çocuk kilidi ve elektrik kesintisi için de Profilo'nun ne dediğine bakıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Ekranda End varsa kırışık azaltmayı bir tuşla iptal et → çocuk kilidini kaldır → programı Başlat Beklet ile beklemeye al → sıcaksa Durulama başlat ya da bekle → tamburda su varsa Sıkma/Boşaltma programını çalıştır → kapıyı kolundan çek. Elektrik kesintisindeki acil kilit açma alet ister; o iş servise.

## Adım adım: evde denenecekler

**1. Ekranda End var mı bak.** Profilo'ya göre program bittiğinde ekranda **"End"** görünür. Çamaşırları hemen çıkarmazsan **15 dakika sonra yaklaşık 30 dakika sürecek bir kırışık azaltma programı** başlar ve ekranda bununla ilgili bir bildirim çıkar. Profilo'nun tarifine göre kırışık azaltmayı iptal etmek ve çamaşırları çıkarmak için **ekrandaki bir tuşa bas.**

**2. Çocuk kilidini kaldır.** Ekranda çocuk kilidi simgesi yanıyorsa Profilo'ya göre **kumanda elemanları kilitlidir**; tuşlara bastığında simge yanıp söner. Kilit, makine bekleme modundayken ve **elektrik kesintisinde de etkin kalır.** Kaldırmak için makine açıkken kılavuzunda gösterilen **iki tuşa yaklaşık 3 saniye** bas; simge söner.

**3. Programı beklemeye al.** Kapak simgesi yanıyorsa Profilo'ya göre **kapak kilitlidir.** Çamaşır eklemek için **Başlat Beklet** tuşuna bas; makine beklemeye alınır, ekrandaki uyarılara dikkat ederek kapağı açarsın. Kapağı açmak için programı **iptal etmek** de mümkün; iptal de Başlat Beklet tuşuyla başlıyor.

**4. Sıcaksa Durulama başlat ya da bekle.** Profilo'nun tablosundaki ilk neden: **sıcaklık çok yüksek.** Kılavuza göre bu durumda kapak **güvenlik nedenlerinden dolayı kilitli kalır.** Profilo'nun çözümü **Durulama programını başlatmak ya da sıcaklık düşene kadar beklemek.**

**5. Tamburda su varsa boşalt.** Tablodaki ikinci neden: **su seviyesi çok yüksek.** Profilo'nun çözümü **Sıkma programını ya da uygun bir boşaltma programını** başlatmak. Program seçme düğmesini **Sıkma/Boşaltma** programına getir; yalnız suyu boşaltmak istiyorsan Profilo'ya göre bu programda sıkmasız seçeneği etkinleştirilir ve çamaşırlar sıkılmaz. Program bitene kadar bekle.

**6. Kapıyı kolundan aç.** Kilit açıldıktan sonra Profilo'nun tarifi basit: **kapı kolunun altına uzan ve kapıyı çek.**

## Elektrik kesildiyse: acil kilit açma

Profilo'nun tablosunda ayrı bir satır var: **elektrik kesintisi durumunda kapak kilitli kalır** ve **acil kilit açma düğmesi** ile açılır. Kılavuza göre bu mekanizma **bir aletle aşağı doğru çekilir**, öncesinde **pis su pompasının boş** olması gerekir ve **camdan su görünüyorsa kapak açılmamalıdır;** aksi hâlde dışarı akan su hasara neden olabilir. Elektrik geri geldiyse önce yukarıdaki adımları dene. Kapak yine açılmıyorsa bu işi kılavuzundaki "Acil kilit açma mekanizması" bölümüne göre **yetkili servise bırak.**

Profilo'nun tablosunda bir satır daha var: panelde ilgili uyarı simgesi yanıp sönüyor ve **program duraklatılmışsa** makine **gerilim beslemesinde dalgalanma** tespit etmiştir. Profilo'ya göre herhangi bir işlem gerekmez; gerilim stabil hâle gelince program normal biçimde devam eder, program süresi uzar. Simgenin şekli kılavuzundaki arıza tablosunda.

Kodlar için [Profilo çamaşır makinesi hata kodları](/blog/profilo-camasir-makinesi-hata-kodlari/) sayfasına, markadan bağımsız anlatım için [çamaşır makinesi kapağı açılmıyor](/blog/camasir-makinesi-kapagi-acilmiyor/) yazısına bakabilirsin. Kapak açıldıktan sonra çamaşır ıslak çıktıysa kardeş rehberimiz [Profilo çamaşır makinesi santrifüj yapmıyor](/blog/profilo-camasir-makinesi-santrifuj-yapmiyor/) yazısına geç.

## Ne zaman servis

Program bitmiş, çocuk kilidi kapalı, makine soğumuş, Sıkma/Boşaltma programı da çalışmış ve kapak yine açılmıyorsa ya da ekranda bir hata kodu çıkıyorsa Profilo'nun tablosu sırayı şöyle veriyor: **cihazı yeniden başlat; arıza tekrar oluşursa cihazı en az 30 saniye güç kaynağından ayır; arıza devam ederse müşteri hizmetlerini ara.** Ararken **hata mesajını eksiksiz** belirt.

⛔ **Kendin-çöz sınırı burada biter.** Kapağı zorlama. Profilo'nun uyarısına göre **cihazda onarımları sadece bunun eğitimini almış uzman personel yapabilir.** Program, kilit ve boşaltma kullanıcıya; kapak kilidinin ve makinenin içi uzmana aittir.

## Servisi aramadan önce kısa özet

1. Ekranda End, kapak simgesi ya da çocuk kilidi simgesi var mı?
2. Hangi programda, hangi sıcaklıkta yıkıyordun?
3. Camdan tamburda su görünüyor mu?
4. Sıkma/Boşaltma programı çalıştı mı?
5. Yakın zamanda elektrik kesintisi oldu mu?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

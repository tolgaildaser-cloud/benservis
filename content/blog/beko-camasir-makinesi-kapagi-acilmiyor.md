---
title: "Beko çamaşır makinesi kapağı açılmıyor"
description: "Beko çamaşır makinesinin kapağı açılmıyorsa Beko kılavuzundaki üç sebep: içeride su, süren program ve kapak kilidinin gecikmesi. Güvenli sıra burada."
slug: "beko-camasir-makinesi-kapagi-acilmiyor"
date: "2026-09-30"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, Beko çamaşır belirti koşusu). Belgelerin hepsi bu koşuda curl -sL -A "Mozilla/5.0" ile download.beko.com'dan indirildi, HTTP 200.
# #88: web araması YALNIZ belgelerin yerini bulmak için kullanıldı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı.
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-beko-camasir-sprint/ · okuma pdftotext -layout, sayfa = PDF sayfası (\f ile sayıldı).
#  (A) D4 9101 E  http://download.beko.com/Download.UsageManualsBeko/d4-9101-e-9-kg-camasir-makinesi-kullanim-kilavuzu-tr_TR_2820523451.pdf  40 s.  md5 38f838f5c669c87f517618be9a11edcb  (sayfa atıfları esas olarak bu belgeye göre)
#  (B) D4 9122 E  http://download.beko.com/Download.UsageManualsBeko/d4-9122-e-9-kg-camasir-makinesi-kullanim-kilavuzu-tr_TR_2820522537.pdf  37 s.  md5 89ab7801f624fc4f2a85f358033baa58
#  (C) D4 8102 E  http://download.beko.com/Download.UsageManualsBeko/32636_2820522712.pdf  37 s.  md5 eea66a69dc2384321a6f7227d0fe81f2
#  (D) D3 5061 B / D3 5062 B  https://download.beko.com/Download.UsageManualsBeko/32349_2820522636.pdf  36 s.  md5 6f40d18cb25aca2c9cebb4cecdea108f
# Sorun giderme satırı (A s.32, B s.30, C s.30, D s.29), dört belgede aynı:
#   "Yükleme kapağı açılmıyor. • Makinedeki su seviyesinden dolayı kapak kilidi devrededir. >>> Pompa ya da Sıkma programını çalıştırarak suyu tahliye edin.
#    • Makine suyu ısıtıyor ya da sıkma adımında olabilir. >>> Programın bitmesini bekleyin. • Kapak kilidi devrededir. Kapak kilidi program bittikten birkaç dakika sonra devreden çıkar. >>> Kapak kilidinin devreden çıkması için birkaç dakika bekleyin."
# Diğer: A s.26 5.15 yükleme kapağı kilidi (Kapak Kilitli sembolü yanıp söner; "Bu aşamada kapağı zorlamayın."; sembol söndükten sonra aç) · A s.26 "Makinenin içindeki su sıcaklığı yüksek veya su seviyesi kapak hizasının üzerinde ise kapak açılmayacaktır."
#   · A s.26 çamaşır ekleme/çıkarma: Başla / Bekle / İptal ile beklemeye al, kapak açılabilir olana kadar bekle · A s.27 5.18 programın iptali (3 sn basılı; "End") + "program düğmesini Pompa+Sıkma programına getirip makine içindeki suyu tahliye edin."
#   · A s.22 Sıkma+Pompa; yalnız tahliye için Sıkma Yok · A s.15 "Yükleme kapağı, program çalışırken kilitlenir. Program bittikten belli bir süre sonra kapak kilidi açılır."
#   · A s.35 kapanış: bayi ya da Yetkili Servis; "Çalışmayan ürünü kendiniz onarmayı asla denemeyin."
# BİLEREK YAZILMAYANLAR: acil kilit açma / kapak kilidini elle ya da aletle açma yöntemi (belgede yok; ALET KURALI) · pompa filtresinden su boşaltma bu yazıda adım yapılmadı (kardeş taslak su-bosaltmiyor'a link) ·
#   elektrik kesintisinde kapağın durumu (belgede yok) · kapak kilidi/kart arızası teşhisi (belgede yok).
# Alıntı denetim tablosu: beko-camasir-makinesi-kapagi-acilmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Makinenin kullanma kılavuzu"]
steps:
  - "Kapağı zorlama; Kapak Kilitli sembolünün yanıp yanmadığına bak."
  - "Makine suyu ısıtıyor ya da sıkma yapıyorsa programın bitmesini bekle."
  - "Program bittiyse kapak kilidinin devreden çıkması için birkaç dakika bekle."
  - "Program sürerken çamaşır eklemek ya da çıkarmak için Başla / Bekle / İptal tuşuyla makineyi beklemeye al ve kapak açılabilir olana kadar bekle."
  - "İçeride kapak hizasını aşan su görüyorsan programı Başla / Bekle / İptal tuşuna 3 saniye basarak iptal et."
  - "Program düğmesini Sıkma+Pompa programına getir ve makinedeki suyu boşalt; sıkma istemiyorsan Sıkma Yok'u seç."
  - "Kapak Kilitli sembolü sönünce kapağı aç."
faq:
  - q: "Beko çamaşır makinesinin kapağı neden açılmıyor?"
    a: "Beko'nun kullanma kılavuzlarındaki 'Yükleme kapağı açılmıyor' satırı üç sebep sayıyor: makinedeki su seviyesi yüzünden kapak kilidi devrede olabilir, makine suyu ısıtıyor ya da sıkma adımında olabilir, ya da kapak kilidi program bittikten birkaç dakika sonra devreden çıktığı için henüz açılmamış olabilir. Çözümleri sırasıyla Pompa ya da Sıkma programıyla suyu tahliye etmek, programın bitmesini beklemek ve birkaç dakika beklemek."
  - q: "Program bitti ama kapak hâlâ kilitli, bozuk mu?"
    a: "Hayır. Beko'ya göre kapak kilidi program bittikten birkaç dakika sonra devreden çıkar. Kapak Kilitli sembolü kapak açılabilir konuma gelene kadar yanıp söner; Beko bu aşamada kapağın zorlanmamasını, sembol söndükten sonra açılmasını istiyor."
  - q: "Programı iptal ettim, kapak yine açılmıyor. Ne yapmalıyım?"
    a: "Beko'nun kılavuzuna göre programı iptal ettikten sonra makinedeki su seviyesi kapak hizasından fazlaysa kapak açılmaz. Bu durumda program düğmesini Pompa+Sıkma programına getirip makinedeki suyu tahliye et. Beko ayrıca içerideki su sıcaklığı yüksekken de kapağın açılmayacağını yazıyor."
  - q: "Yıkama sürerken çamaşır ekleyebilir miyim?"
    a: "Beko'nun kılavuzuna göre evet: Başla / Bekle / İptal tuşuna basarak makineyi bekleme durumuna al, yükleme kapağı açılabilir duruma gelene kadar bekle, kapağı açıp çamaşırı ekle ya da çıkar, kapağı kapat ve Başla / Bekle / İptal tuşuna basarak makineyi yeniden çalıştır. İçerideki su sıcaksa ya da seviyesi kapak hizasının üzerindeyse kapak açılmaz."
images:
  coverAlt: "Kapağı kapalı ön yüklemeli çamaşır makinesinin cam kapağının ardında tamburda duran su ve çamaşırlar; kontrol panelinde yanan bir kilit simgesi"
---

Program bitti ya da yarıda kaldı, kapağı açmak istiyorsun ama kapak yerinden kıpırdamıyor. Beko'nun çamaşır makinesi kullanma kılavuzlarındaki sorun giderme bölümünde bunun satırı: **"Yükleme kapağı açılmıyor."** Beko bu satırda üç sebep sayıyor: **makinedeki su seviyesi yüzünden kapak kilidi devrede**, **makine suyu ısıtıyor ya da sıkma adımında**, ya da **kapak kilidi program bittikten birkaç dakika sonra devreden çıkıyor.** Üçünde de ilk kural aynı: kapağı zorlama. Bu yazıda Beko'nun sırasını açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kapağı zorlama. Program sürüyorsa bitmesini bekle; bittiyse birkaç dakika bekle. İçeride su varsa programı iptal et, Sıkma+Pompa ile suyu boşalt. Kapak Kilitli sembolü sönünce aç.

## Adım adım: evde denenecekler

**1. Kapağı zorlama, sembole bak.** Beko'nun kılavuzuna göre makinenin kapağında, su seviyesi uygun olmadığında kapağın açılmasını önleyen bir **kilit sistemi** var. Kapak kilitliyken **Kapak Kilitli sembolü** yanıyor; program sona erdiğinde ya da makine bekleme durumuna alındığında bu sembol kapak açılabilir konuma gelene kadar **yanıp sönüyor.** Beko'nun uyarısı: **bu aşamada kapağı zorlama.**

**2. Program sürüyorsa bitmesini bekle.** Tablodaki ikinci sebep: **makine suyu ısıtıyor ya da sıkma adımında olabilir.** Beko'nun çözümü: **programın bitmesini bekle.** Beko'ya göre yükleme kapağı **program çalışırken kilitlenir.**

**3. Program bittiyse birkaç dakika bekle.** Üçüncü sebep: **kapak kilidi program bittikten birkaç dakika sonra devreden çıkar.** Beko'nun çözümü: **kapak kilidinin devreden çıkması için birkaç dakika bekle.** Ekranda **"End"** yazısı göründükten hemen sonra kapağın açılmaması bu yüzden olağan.

**4. Çamaşır eklemek için beklemeye al.** Program sürerken kapağı açman gerekiyorsa Beko'nun tarifi: **Başla / Bekle / İptal** tuşuna basarak makineyi **bekleme durumuna al**, **yükleme kapağı açılabilir duruma gelene kadar bekle**, sonra kapağı açıp çamaşırı ekle ya da çıkar. Kapağı kapatıp Başla / Bekle / İptal tuşuna basınca makine devam ediyor. Beko'nun notu: içerideki **su sıcaklığı yüksekse** ya da **su seviyesi kapak hizasının üzerindeyse** kapak açılmaz.

**5. İçeride su varsa programı iptal et.** Tablodaki ilk sebep: **makinedeki su seviyesinden dolayı kapak kilidi devrede.** Önce programı iptal et: Beko'ya göre **Başla / Bekle / İptal** tuşunu **3 saniye** basılı tut; ekranda **"End"** görünür ve program iptal edilmiş olur.

**6. Suyu Sıkma+Pompa ile boşalt.** Beko'nun tablosundaki çözüm: **Pompa ya da Sıkma programını çalıştırarak suyu tahliye et.** Beko'nun iptal bölümündeki not da aynı: kapak, su seviyesi kapak hizasından fazla olduğu için açılmıyorsa **program düğmesini Pompa+Sıkma programına getirip** makinedeki suyu tahliye et. Çamaşırları sıktırmadan yalnız suyu boşaltmak istiyorsan programı seçtikten sonra Sıkma Devri Ayar tuşuyla **Sıkma Yok**'u seç ve **Başla / Bekle / İptal** tuşuna bas.

**7. Sembol sönünce kapağı aç.** Beko'ya göre kapak açılabilir duruma geldiğinde **Kapak Kilitli sembolü söner;** sembol söndükten sonra kapağı açabilirsin.

## Makine suyu boşaltamıyorsa

Sıkma+Pompa programı çalıştığı hâlde su tamburda duruyorsa sorun kapakta değil tahliye tarafında. Beko'nun tablosu bu durumda **tahliye hortumunun** ve **pompa filtresinin** kontrolünü istiyor; filtrenin elle temizlenmesi ve içerideki suyun kaba boşaltılması [Beko çamaşır makinesi su boşaltmıyor](/blog/beko-camasir-makinesi-su-bosaltmiyor/) yazısında sırayla anlatılıyor.

Kapağı açmak için kilidi aletle ya da zorlayarak açmaya çalışma; Beko'nun kılavuzunda böyle bir yöntem yok. Markadan bağımsız anlatım için [çamaşır makinesi kapağı açılmıyor](/blog/camasir-makinesi-kapagi-acilmiyor/) yazısına bakabilirsin. Ekranında bir hata kodu varsa [Beko çamaşır makinesi hata kodları](/blog/beko-camasir-makinesi-hata-kodlari/) yazısı var.

## Sınır nerede biter

Program bitmiş, birkaç dakika beklenmiş, içeride su kalmamış, Kapak Kilitli sembolü sönmüş ve kapak hâlâ açılmıyorsa Beko'nun tablosu kullanıcıya başka adım vermiyor. Beko'nun uyarısı: talimatları uygulamana rağmen sorun sürüyorsa **ürünü satın aldığın bayiye ya da Yetkili Servise başvur; çalışmayan ürünü kendin onarmayı asla deneme.**

⛔ **Kendin-çöz sınırı burada biter.** Beklemek, programı iptal etmek ve suyu boşaltmak kullanıcıya; kapak kilidinin kendisi servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Program bitti mi, yoksa yarıda mı kaldı?
2. Kapak Kilitli sembolü yanıyor mu, yanıp sönüyor mu, sönük mü?
3. Cam kapaktan tamburda su görünüyor mu?
4. Sıkma+Pompa programı suyu boşalttı mı?
5. Ekranda "End" ya da bir hata kodu görünüyor mu?

Bu beşine cevabın varsa servise "kapak açılmıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

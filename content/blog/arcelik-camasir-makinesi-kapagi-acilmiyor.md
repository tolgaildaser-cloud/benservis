---
title: "Arçelik çamaşır makinesi kapağı açılmıyor"
description: "Arçelik çamaşır makinesinin kapağı açılmıyorsa Arçelik kılavuzundaki sebepler: kapak kilidi, içerideki su, süren program, takılan kapak. Zorlamadan ne yapılır?"
slug: "arcelik-camasir-makinesi-kapagi-acilmiyor"
date: "2026-09-30"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, Arçelik çamaşır belirti koşusu). Belgeler 28 Eyl'de download.arcelik.com.tr'den indirildi; A/B bu koşuda
#   curl -sL -A "Mozilla/5.0" ile yeniden indirildi, HTTP 200, md5'ler yerel kopyalarla birebir. Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-arcelik-camasir-sprint/
# #88: web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı. Okuma pdftotext -layout, sayfa = PDF sayfası (basılı sayfa no ile aynı).
#  (A) 7103 D   https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_Manual_7144850100_tr_TR20171222-130958-092.pdf  44 s.  md5 de6298c4596bd93f57e5427ef9743c54  (sayfa atıfları esas olarak A)
#  (B) 9103 HE  https://download.arcelik.com.tr/download.usagemanuals/9103-he-9-kg-camasir-makineleri-kullanim-kilavuzu-tr_TR_2820523450.pdf  40 s.  md5 6610815f28099c1c73ea3a5681c20c0d
# Sorun giderme satırı (A s.35): "Yükleme kapağı açılmıyor." su seviyesi → kapak kilidi devrede → Pompa ya da Sıkma programını çalıştırarak suyu tahliye edin ·
#   ürün suyu ısıtıyor ya da sıkma adımında → Programın bitmesini bekleyin · kapak kilidi program bittikten birkaç dakika sonra devreden çıkar → birkaç dakika bekleyin ·
#   ön kapağa gelen baskı → "Ön kapak tutamaktan itip çekilerek takılı konumundan kurtarılır ve açılır." (bu dördüncü satır B s.33'te yok)
# Diğer: A s.30 4.6.14 yükleme kapağı kilidi (bekleme durumunda ışık yanıp söner; seviye uygunsa 1-2 dk içinde sabit yanar, kapak açılabilir; seviye uygun değilse ışık söner, açılamaz;
#   mutlaka açmak gerekiyorsa programı iptal et) · A s.31 4.6.16 programın iptali (Program Seçim düğmesini çevirip başka program seç; Pompa 1-2 dk çalışır) · A s.31 4.6.17 program sonu
#   · B s.27 5.15 Kapak Kilitli sembolü (yanar = kilitli; yanıp söner = bekle, "Bu aşamada kapağı zorlamayın"; söner = açılabilir; su sıcaklığı yüksek ya da seviye kapak hizasının üzerinde → açılmaz)
#   · B s.28 5.18 iptal: Başla/Bekle/İptal 3 sn · A s.17 4.5.4 kapak program çalışırken kilitlenir, program bittikten belli süre sonra kilit açılır.
# BİLEREK YAZILMAYANLAR: acil kapak açma yöntemi (bu koşuda okunan Arçelik kılavuzlarında kullanıcıya verilmiş bir yöntem bulunmadı; alet gerektiren yol zaten ALET KURALI dışında)
#   · kapak kilidi/menteşe arızası teşhisi (belgede yok) · hata kodu (kaynağı 28 Eyl'de 403) · fiyat.
# Alıntı denetim tablosu: arcelik-camasir-makinesi-kapagi-acilmiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Kapak ışığına ya da kapak kilidi sembolüne bak; yanıp sönüyorsa kapağı zorlamadan bekle."
  - "Makine suyu ısıtıyor ya da sıkma adımındaysa programın bitmesini bekle."
  - "Program bittiyse kapak kilidinin devreden çıkması için birkaç dakika bekle."
  - "Makinede su varsa Pompa ya da Sıkma programını çalıştırarak suyu tahliye et."
  - "Kapağı hemen açman gerekiyorsa çalışan programı iptal et ve pompanın suyu boşaltmasını bekle."
  - "Kapak kilitli değil ama takılı kalmışsa kapağı tutamağından önce itip sonra çekerek aç."
faq:
  - q: "Arçelik çamaşır makinemin kapağı program bitince neden hemen açılmıyor?"
    a: "Arçelik'in kılavuzuna göre yükleme kapağı program çalışırken kilitlenir ve kapak kilidi program bittikten birkaç dakika sonra devreden çıkar. Arçelik'in önerisi kapak kilidinin devreden çıkması için birkaç dakika beklemek."
  - q: "Kapak kilidi ışığı yanıp sönüyor, ne yapmalıyım?"
    a: "Beklemelisin. Arçelik 9103 HE kılavuzuna göre Kapak Kilitli sembolü, program sona erdiğinde ya da makine bekleme durumuna alındığında kapak açılabilir konuma gelene kadar yanıp söner ve kılavuz bu aşamada kapağın zorlanmamasını istiyor. Kapak açılabilir duruma geldiğinde sembol söner. 7103 D kılavuzunda ise yükleme kapağı ışığı yanıp söndükten sonra seviye uygunsa 1-2 dakika içinde sabit yanmaya başlar ve kapak açılabilir."
  - q: "İçeride su varken kapağı nasıl açarım?"
    a: "Arçelik'in sorun giderme tablosuna göre makinedeki su seviyesi yüzünden kapak kilidi devrededir; çözüm Pompa ya da Sıkma programını çalıştırarak suyu tahliye etmek. Makine suyu boşaltmıyorsa önce tahliye hortumunu ve pompa filtresini kontrol etmek gerekir."
  - q: "Programı iptal edince kapak açılır mı?"
    a: "Arçelik 7103 D kılavuzuna göre kapak ışığı sönükken kapağı mutlaka açman gerekiyorsa mevcut programı iptal etmen gerekiyor. İptalden sonra, makinede su olup olmadığına bakılmaksızın Pompa fonksiyonu 1-2 dakika çalışıyor."
images:
  coverAlt: "Kapalı cam kapaklı ön yüklemeli çamaşır makinesinin önünde bekleyen dolu çamaşır sepeti"
---

Program bitti ya da yarıda kaldı ve kapak açılmıyor. Arçelik'in çamaşır makinesi kullanma kılavuzundaki sorun giderme tablosunda bu durum tek satır: **"Yükleme kapağı açılmıyor."** Arçelik'in bu satırda saydığı sebeplerin çoğu arıza değil, **kapak kilidinin** kendi işi: içerideki su seviyesi, suyu ısıtan ya da sıkan program ve program bitince birkaç dakika süren kilit. Kılavuzun kendi ifadesiyle makinenin yükleme kapağında, **su seviyesinin uygun olmadığı durumlarda kapağın açılmasını önleyen bir kilit sistemi** var. Bu yazıda Arçelik'in sırasını açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Işık yanıp sönüyorsa zorlama, bekle. Program sürüyorsa bitmesini bekle. Bittiyse birkaç dakika bekle. İçeride su varsa Pompa ya da Sıkma programıyla boşalt. Acilse programı iptal et. Kilitli değil de takılıysa tutamaktan önce it, sonra çek.

## Adım adım: evde denenecekler

**1. Kapak ışığına bak, zorlama.** Arçelik'in kılavuzlarında kapak göstergesi modele göre farklı davranıyor. **9103 HE**'de yükleme kapağı kilitliyken **Kapak Kilitli sembolü yanar**; program sona erdiğinde ya da makine beklemeye alındığında kapak açılabilir konuma gelene kadar **yanıp söner**, kapak açılabilir olunca **söner.** Kılavuzun bu aşamadaki uyarısı: **kapağı zorlamayın.** **7103 D**'de ise makine beklemeye alındığında **Yükleme Kapağı ışığı yanıp sönmeye başlar**; su seviyesi uygunsa **1-2 dakika içinde sabit yanar** ve kapak açılabilir, seviye uygun değilse ışık **söner** ve kapak açılamaz. Yani iki modelde de yanıp sönme "bekle" demek.

**2. Program sürüyorsa bitmesini bekle.** Arçelik'in tablosundaki sebeplerden biri: **ürün suyu ısıtıyor ya da sıkma adımında olabilir.** Çözüm: **programın bitmesini bekle.** 9103 HE kılavuzuna göre makinenin içindeki **su sıcaklığı yüksekse** ya da **su seviyesi kapak hizasının üzerindeyse** kapak açılmaz.

**3. Program bittiyse birkaç dakika bekle.** Arçelik'e göre kapak kilidi **program bittikten birkaç dakika sonra devreden çıkar.** Çözüm: **kapak kilidinin devreden çıkması için birkaç dakika bekle.** Program sonunda 7103 D'nin ekranında **"End"** yazısı belirir; Arçelik'in sırası yükleme kapağı ışığı **sabit yanana kadar beklemek.**

**4. İçerideki suyu boşalt.** Tablodaki ilk sebep: **üründeki su seviyesinden dolayı kapak kilidi devrededir.** Arçelik'in çözümü: **Pompa ya da Sıkma programını çalıştırarak suyu tahliye et.** Makine suyu boşaltmıyorsa Arçelik'in tablosu bunu ayrı bir satırda anlatıyor (tıkalı ya da kıvrık tahliye hortumu, tıkalı pompa filtresi); o satırın adımları [Arçelik çamaşır makinesi su boşaltmıyor](/blog/arcelik-camasir-makinesi-su-bosaltmiyor/) yazısında.

**5. Acilse programı iptal et.** Arçelik 7103 D kılavuzuna göre Yükleme Kapağı ışığı sönükken kapağı **mutlaka açman gerekiyorsa mevcut programı iptal etmen** gerekiyor. 7103 D'de iptal için **Program Seçim düğmesini çevirip başka bir program seçiyorsun**; bundan sonra, makinede su olup olmadığına bakılmaksızın **Pompa fonksiyonu 1-2 dakika çalışıyor.** 9103 HE'de iptal için **Başla / Bekle / İptal tuşunu 3 saniye basılı tutuyorsun**; ekranda **"End"** görünüyor. İptalden sonra kapak ışığının davranışına tekrar bak ve kilit açılana kadar bekle.

**6. Takılan kapağı tutamağından kurtar.** 7103 D kılavuzundaki son satır: **ön kapağa gelen baskı sebebiyle ön kapak takılı kalabilir.** Arçelik'in çözümü: ön kapak **tutamaktan itip çekilerek** takılı konumundan kurtarılır ve açılır.

## Kapağı kapatırken

Arçelik'in çamaşır yükleme bölümüne göre yükleme kapağı, **kilitlenme sesini duyana kadar iterek** kapatılır ve **giysilerin kapağa takılmamasına** dikkat edilir. Aynı bölüm kilidin mantığını da özetliyor: kapak **program çalışırken kilitlenir**, program bittikten **belli bir süre sonra** kilit açılır.

Kapak göstergesinin ve diğer simgelerin anlamı için [Arçelik çamaşır makinesi sembolleri ve anlamları](/blog/arcelik-camasir-makinesi-sembolleri-ve-anlamlari/) yazısına, markadan bağımsız anlatım için [çamaşır makinesi kapağı açılmıyor](/blog/camasir-makinesi-kapagi-acilmiyor/) yazısına bakabilirsin.

## Sınır nerede biter

Beklemek, suyu programla boşaltmak, programı iptal etmek ve takılan kapağı tutamaktan kurtarmak kullanıcıya aittir. Arçelik'in güvenlik bölümü net: **kilitli yükleme kapağını zorla açmaya çalışma**; zorlarsan **kapak ve kilit mekanizması hasar görebilir.** Arçelik'in sorun giderme bölümünün sonundaki uyarı açık: talimatları uygulamana rağmen sorun sürüyorsa ürünü **satın aldığın bayiye ya da Yetkili Servise** başvur; **çalışmayan ürünü kendin onarmayı asla deneme.**

⛔ **Kendin-çöz sınırı burada biter.** Program bitmiş, içeride su yok, kapak ışığı "açılabilir" gösteriyor ve kapak hâlâ açılmıyorsa yetkili servise başvur. Diğer Arçelik konuları için [Arçelik çamaşır makinesi hata kodları](/blog/arcelik-camasir-makinesi-hata-kodlari/) yazısına bakabilirsin.

## Servisi aramadan önce iki dakikalık özet

1. Program bitti mi, yoksa yarıda mı kaldı?
2. Kapak ışığı ya da kapak kilidi sembolü ne yapıyor: yanıyor, yanıp sönüyor, sönük mü?
3. Camdan bakınca içeride su görünüyor mu?
4. Pompa ya da Sıkma programı suyu boşalttı mı?
5. Ekranda "End" ya da bir kod yazıyor mu?

Bu beşine cevabın varsa servise "kapak açılmıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

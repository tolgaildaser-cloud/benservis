---
title: "Arçelik çamaşır makinesi su almıyor"
description: "Arçelik çamaşır makinesi su almıyor ya da beklemeye geçiyorsa Arçelik kılavuzundaki sıra: musluk, bükük hortum, kapak, su kesintisi, giriş filtresi."
slug: "arcelik-camasir-makinesi-su-almiyor"
date: "2026-09-30"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, Arçelik çamaşır belirti koşusu). Belgeler 28 Eyl'de download.arcelik.com.tr'den indirildi; A/B/C bu koşuda
#   curl -sL -A "Mozilla/5.0" ile yeniden indirildi, HTTP 200, md5'ler yerel kopyalarla birebir. Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-arcelik-camasir-sprint/
# #88: web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı. Okuma pdftotext -layout, sayfa = PDF sayfası (basılı sayfa no ile aynı).
#  (A) 7103 D   https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_Manual_7144850100_tr_TR20171222-130958-092.pdf  44 s.  md5 de6298c4596bd93f57e5427ef9743c54  (sayfa atıfları esas olarak A)
#  (B) 9103 HE  https://download.arcelik.com.tr/download.usagemanuals/9103-he-9-kg-camasir-makineleri-kullanim-kilavuzu-tr_TR_2820523450.pdf  40 s.  md5 6610815f28099c1c73ea3a5681c20c0d
# Sorun giderme satırı (A s.35): "Program başladıktan sonra makine bekleme moduna geçiyor veya makine su almıyor." Musluk kapalı olabilir → Muslukları açın ·
#   Su girişi hortumu bükülmüş olabilir → Hortumu düzeltin · Su girişi filtresi tıkalı olabilir → Filtreyi temizleyin · Yükleme kapağı kapanmamış olabilir → Kapağını kapayın ·
#   Su bağlantısı doğru yapılmamış olabilir veya sular kesik olabilir (Sular kesik olduğunda yıkama yada durulama ledi yanıp söner) → su bağlantısını kontrol edin, sular geldikten sonra Başla/Bekle ile kaldığı yerden devam.
#   B s.33 "Makine su almıyor." aynı dört satır · B s.36 "Durulama sembolü yanıp sönüyor. (… su kesik sembolü de yanıyor olabilir) Su kesik olabilir."
# Diğer: A s.33 4.7.4 su giriş filtrelerinin temizlenmesi · A s.13 somunları elle sık, alet kullanma; muslukları açıp sızıntı kontrolü; tek su girişli model sıcak suya bağlanmaz
#   · A s.13 gerekli basınç 1-10 bar · A s.36 düşük su basıncında süre uzar · A s.17 kapağı kilitlenme sesini duyana kadar itip kapat.
# BİLEREK YAZILMAYANLAR: su giriş filtresinin penseyle çıkarılması (A s.33 kullanıcıya veriyor; ALET KURALI gereği adım değil) · valf/elektronik teşhisi (belgede yok)
#   · hata kodu (kod listesinin tek kaynağı arcelik.com.tr blog sayfası 28 Eyl'de curl'e 403 verdi; bu yazıda kod anılmadı) · fiyat.
# Alıntı denetim tablosu: arcelik-camasir-makinesi-su-almiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Yumuşak bir fırça"]
steps:
  - "Makinenin bağlı olduğu musluğun sonuna kadar açık olduğunu kontrol et."
  - "Su girişi hortumunda bükülme varsa hortumu düzelt."
  - "Yükleme kapağını kilitlenme sesini duyana kadar iterek kapat."
  - "Evde suyun kesik olmadığını kontrol et; su geldiyse Başla/Bekle tuşuna basarak programı kaldığı yerden sürdür."
  - "Musluğu kapat, su girişi hortumunun somununu çöz ve su girişi vanasındaki filtrenin üzerindeki tortuyu fırçayla temizle."
  - "Hortumun düz ucundaki filtreyi contasıyla birlikte çıkar ve musluk altında yıka."
  - "Conta ve filtreyi yerine tak, hortum somununu elle sık, musluğu açıp bağlantıda sızıntı olmadığını kontrol et."
faq:
  - q: "Arçelik çamaşır makinem program başlayınca beklemeye geçiyor, neden?"
    a: "Arçelik'in kılavuzu bu durumu su almama ile aynı satırda anlatıyor: 'Program başladıktan sonra makine bekleme moduna geçiyor veya makine su almıyor.' Sayılan sebepler kapalı musluk, bükülmüş su girişi hortumu, tıkalı su girişi filtresi, kapanmamış yükleme kapağı ve kesik su ya da hatalı su bağlantısı."
  - q: "Sular kesildiğinde makine ne yapıyor?"
    a: "Arçelik 7103 D kılavuzuna göre sular kesik olduğunda yıkama ya da durulama ledi yanıp söner; makine bekleme moduna geçer. Sular geldikten sonra Başla/Bekle tuşuna basarak kaldığı yerden devam ettirebilirsin. 9103 HE kılavuzunda aynı durumda Durulama sembolü yanıp söner, modele bağlı olarak su kesik sembolü de yanabilir."
  - q: "Su giriş filtresi nerede?"
    a: "Arçelik'in kılavuzuna göre makinenin arkasındaki su giriş musluklarının ucunda ve su giriş hortumlarının musluğa takıldığı uçlarda birer filtre var. Bu filtreler şebeke suyundaki yabancı maddelerin makineye girmesini engelliyor ve kirlendikçe temizlenmesi gerekiyor."
  - q: "Makine su alıyor ama yıkama çok uzun sürüyor, arıza mı?"
    a: "Arçelik'in sorun giderme tablosuna göre su basıncı düşükse makine, yıkama kalitesi düşmesin diye yeterli suyu alıncaya kadar bekler ve bu yüzden yıkama süresi uzar. Ekranlı modellerde makine yeterince su alıncaya kadar süre göstergesi de geri saymaz."
images:
  coverAlt: "Çamaşır makinesinin arkasında duvardaki su musluğuna bağlı beyaz su giriş hortumu, musluğun kolu yarı açık"
---

Programı başlattın ama tamburda su yok, ya da makine birkaç saniye sonra bekleme moduna geçti. Arçelik'in çamaşır makinesi kullanma kılavuzundaki sorun giderme tablosu bu iki durumu tek satırda topluyor: **"Program başladıktan sonra makine bekleme moduna geçiyor veya makine su almıyor."** Arçelik'in bu satırda saydığı beş sebebin hepsi makinenin dışında, musluk ile kapak arasında: kapalı musluk, bükülmüş hortum, tıkalı giriş filtresi, kapanmamış kapak ve kesik su. Bu yazıda Arçelik'in sırasını açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Musluk açık mı → sonuna kadar aç. Hortum bükük mü → düzelt. Kapak tam kapandı mı → klik sesine kadar it. Su kesik mi → su gelince Başla/Bekle. Hâlâ almıyorsa musluğu kapat, giriş filtrelerini temizle.

## Adım adım: evde denenecekler

**1. Musluğu kontrol et.** Arçelik'in tablosundaki ilk sebep: **musluk kapalı olabilir.** Çözüm: **muslukları aç.** Arçelik'in makineyi hazırlama sırasında da aynı madde var: **musluğu tamamen aç.** Arçelik ayrıca su sızıntılarına karşı musluğun makine **kullanılmadığı zamanlarda kapalı** tutulmasını istiyor; yıkamaya başlamadan önce açık olduğuna bak.

**2. Su girişi hortumunu düzelt.** İkinci sebep: **su girişi hortumu bükülmüş olabilir.** Çözüm: **hortumu düzelt.**

**3. Kapağı tam kapat.** Tablodaki bir sebep de **yükleme kapağının kapanmamış olması.** Arçelik'in çamaşır yükleme bölümüne göre kapak, **kilitlenme sesini duyana kadar iterek** kapatılır; giysilerin kapağa takılmamasına dikkat et.

**4. Su kesik mi bak.** Arçelik'in tablosuna göre su bağlantısı doğru yapılmamış ya da **sular kesik** olabilir. 7103 D kılavuzuna göre sular kesik olduğunda **yıkama ya da durulama ledi yanıp söner**; 9103 HE kılavuzunda aynı durumda **Durulama sembolü** yanıp söner, modele bağlı olarak **su kesik sembolü** de yanabilir. Arçelik'in çözümü: bekleme moduna geçen makineyi, sular geldikten sonra **Başla/Bekle tuşuna basarak kaldığı yerden** devam ettir.

**5. Musluğu kapat, vanadaki filtreyi temizle.** Tablodaki son kullanıcı sebebi: **su girişi filtresi tıkalı olabilir.** Arçelik'e göre makinenin arkasındaki su giriş musluklarının ucunda ve hortumların musluğa takıldığı uçlarda birer filtre var; bunlar şebeke suyundaki yabancı maddelerin makineye girmesini engelliyor. Temizlik sırası: önce **muslukları kapa**, sonra su girişi hortumunun somununu çöz ve **su girişi vanalarındaki** filtrelerin üzerindeki tortuyu **uygun bir fırçayla** temizle. Arçelik bu somunların **elle** sıkılmasını ve **kesinlikle yardımcı alet kullanılmamasını** istiyor.

**6. Hortum ucundaki filtreyi yıka.** Arçelik'in sırasındaki bir sonraki iş: su girişi hortumunun düz ucundaki filtreyi **contasıyla birlikte** yerinden çıkar ve **musluk altında iyice** temizle.

**7. Tak, sık, sızıntıya bak.** Conta ve filtreyi dikkatlice yerine tak, hortum somununu **elinle** sık. Arçelik'in kurulum bölümüne göre bağlantıdan sonra muslukları **sonuna kadar açıp** bağlantı yerlerinde sızıntı olup olmadığını kontrol et; sızıntı varsa musluğu kapat, contayı kontrol et ve somunu tekrar dikkatlice sık.

## Arıza sanılan durumlar

- **Yıkama uzun sürüyor:** Arçelik'in tablosuna göre **su basıncı düşükse** makine, yıkama kalitesi düşmesin diye yeterli suyu alıncaya kadar bekler; yıkama süresi bu yüzden uzar. Arçelik'in kurulum bölümü makinenin çalışması için gereken su basıncını **1-10 bar** olarak veriyor.
- **Süre geri saymıyor:** Ekranlı modellerde makine **yeterince su alıncaya kadar** süre göstergesi geri saymaz; su tamamlanınca geri sayım devam eder.
- **Yıkama sırasında içeride su görünmüyor:** Arçelik'e göre su makinenin görünmeyen bölümündedir; **bu bir arıza değildir.**
- **Tek su girişli model sıcak suya bağlıysa:** Arçelik'in uyarısı: tek su girişli modeller **sıcak su musluğuna bağlanmamalı**; aksi hâlde çamaşırlar hasar görebilir ya da makine **koruma durumuna geçerek çalışmayabilir.**

Ekrandaki ışık ve simgelerin anlamı için [Arçelik çamaşır makinesi sembolleri ve anlamları](/blog/arcelik-camasir-makinesi-sembolleri-ve-anlamlari/) yazısına, markadan bağımsız anlatım için [çamaşır makinesi su almıyor](/blog/camasir-makinesi-su-almiyor/) yazısına bakabilirsin.

## Sınır nerede biter

Musluk, hortumun dışı, kapak ve giriş filtreleri kullanıcıya aittir. Arçelik'in kılavuzu filtreler çok kirliyse onları **penseyle** yerinden çıkarmayı da anlatıyor; alet gerektiren bu işi burada adım olarak vermiyoruz, gerekiyorsa yetkili servise bırak. Arçelik'in sorun giderme bölümünün sonundaki uyarı açık: talimatları uygulamana rağmen sorun sürüyorsa ürünü **satın aldığın bayiye ya da Yetkili Servise** başvur; **çalışmayan ürünü kendin onarmayı asla deneme.**

⛔ **Kendin-çöz sınırı burada biter.** Musluk açık, hortum düz, kapak kapalı, su var, filtreler temiz ve makine hâlâ su almıyorsa yetkili servise başvur. Diğer Arçelik konuları için [Arçelik çamaşır makinesi hata kodları](/blog/arcelik-camasir-makinesi-hata-kodlari/) yazısına bakabilirsin.

## Servisi aramadan önce iki dakikalık özet

1. Makine hiç mi su almıyor, yoksa programa başlayıp beklemeye mi geçiyor?
2. Hangi gösterge ışığı ya da sembol yanıp sönüyor?
3. Evde başka musluklarda su var mı, basınç düşük mü?
4. Giriş filtrelerinde tortu var mıydı?
5. Makinen tek su girişli mi, hangi musluğa bağlı?

Bu beşine cevabın varsa servise "su almıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

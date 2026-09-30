---
title: "Arçelik çamaşır makinesi çalışmıyor"
description: "Arçelik çamaşır makinesi hiç açılmıyor ya da program başlamıyorsa Arçelik kılavuzundaki sıra: fiş, sigorta, Açma/Kapama, kapak, Başla/Bekle, su, iptal."
slug: "arcelik-camasir-makinesi-calismiyor"
date: "2026-09-30"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-30 PAZ alt ajanı (sprint #144, Arçelik çamaşır belirti koşusu). Belgeler 28 Eyl'de download.arcelik.com.tr'den indirildi; A/B bu koşuda
#   curl -sL -A "Mozilla/5.0" ile yeniden indirildi, HTTP 200, md5'ler yerel kopyalarla birebir. Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-arcelik-camasir-sprint/
# #88: web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı. Okuma pdftotext -layout, sayfa = PDF sayfası (basılı sayfa no ile aynı).
#  (B) 9103 HE  https://download.arcelik.com.tr/download.usagemanuals/9103-he-9-kg-camasir-makineleri-kullanim-kilavuzu-tr_TR_2820523450.pdf  40 s.  md5 6610815f28099c1c73ea3a5681c20c0d  (çalışmıyor satırları esas olarak B)
#  (A) 7103 D   https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_Manual_7144850100_tr_TR20171222-130958-092.pdf  44 s.  md5 de6298c4596bd93f57e5427ef9743c54
# Sorun giderme satırları:
#   B s.36 "Makine çalışmıyor. Ekranda hiçbir şey görünmüyor.": fiş prize takılı olmayabilir → fişi kontrol edip prize takın · sigorta arızalı olabilir → sigortayı kontrol edin ve gerekirse ehliyetli bir elektrikçiye değiştirtin
#     · elektrik kesik olabilir → elektriği kontrol edin · Açma/Kapama tuşuna basılmamış olabilir → Açma/Kapama tuşuna basın.
#   B s.36 "Programı seçtikten ve Başla/Bekle/İptal tuşuna basıldığında makine çalışmıyor.": yükleme kapağı kapanmamış olabilir → kapatın.
#   B s.36 "Durulama sembolü yanıp sönüyor (… su kesik sembolü de yanıyor olabilir)": su kesik olabilir → suyun kesik olmadığından emin olduktan sonra Başla/Beklet/İptal ile tekrar çalıştırın.
#   A s.35 "Makinenin kapağını kapattıktan sonra program başlamıyor.": Başla/Bekle/İptal düğmesine basılmamış → basın · aşırı yükleme → kapak zor kapanabilir → çamaşır azaltarak kapağın düzgün kapandığından emin olun.
#   A s.35 / B s.33 "Program başlatılamıyor veya program seçimi yapılamıyor.": altyapı kaynaklı problemler (şebeke voltajı, su basıncı vb.), ürün kendini korumaya almış olabilir
#     → A: Program Seçim düğmesini çevirerek başka bir program seçin · B: Başla/Bekle/İptal düğmesine 3 saniye basarak fabrika ayarlarına getirin.
#   A s.35 / B s.33 "program başladıktan bir süre sonra durdu": voltaj düşüklüğü → voltaj normale gelince kaldığı yerden devam eder.
# Diğer: A s.15 topraklı priz, 16 A sigorta; uzatma kablosu/çoklu priz kullanma · A s.22 Program Seçim düğmesinin en üst pozisyonu Açma/Kapama · A s.28 çocuk kilidi "Con"
#   · B s.28 "Çocuk kilidindeki makineyi, program sonlandıktan sonra çocuk kilidinden çıkarmayı unutmayın. Aksi halde, makine yeni bir program seçimine izin vermeyecektir."
#   · A s.29 seçimde 1 dk işlem yoksa bekleme durumu, ışıklar kısılır · A s.31 Bekleme Modu "Bu bir hata değildir." · A s.13 tek su girişli model sıcak suya bağlanırsa koruma durumuna geçerek çalışmayabilir.
# BİLEREK YAZILMAYANLAR: sigorta değişimi / priz ve tesisat işleri (kılavuz "ehliyetli bir elektrikçi" diyor) · kart, motor, kapak kilidi arızası teşhisi (belgede yok) · hata kodu (kaynağı 28 Eyl'de 403) · fiyat.
# Alıntı denetim tablosu: arcelik-camasir-makinesi-calismiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: []
steps:
  - "Makinenin fişinin prize takılı olduğunu kontrol et."
  - "Evde elektriğin olduğunu ve sigortanın atmadığını kontrol et."
  - "Açma/Kapama tuşuna bas ya da Program Seçim düğmesini açık konuma getir."
  - "Yükleme kapağını kilitlenme sesini duyana kadar iterek kapat; kapak zor kapanıyorsa çamaşırı azalt."
  - "Programı seçtikten sonra Başla/Bekle tuşuna bas."
  - "Durulama göstergesi ya da su kesik sembolü yanıp sönüyorsa suyun geldiğinden emin ol ve Başla/Bekle tuşuna yeniden bas."
  - "Program başlamıyor ya da seçilemiyorsa programı iptal et ve yeniden seç."
faq:
  - q: "Arçelik çamaşır makinemin ekranında hiçbir şey yok, ne yapmalıyım?"
    a: "Arçelik 9103 HE kılavuzunun 'Makine çalışmıyor. Ekranda hiçbir şey görünmüyor.' satırı dört şeye bakmanı istiyor: fişin prize takılı olması, sigorta, elektriğin kesik olup olmadığı ve Açma/Kapama tuşuna basılıp basılmadığı. Sigortanın değişmesi gerekiyorsa kılavuz bunu ehliyetli bir elektrikçiye bırakmanı istiyor."
  - q: "Program seçemiyorum, düğmeler tepki vermiyor. Neden?"
    a: "Arçelik'in tablosuna göre şebeke voltajı ya da su basıncı gibi altyapı kaynaklı problemler yüzünden makine kendini korumaya almış olabilir. 7103 D'de çözüm Program Seçim düğmesini çevirip başka bir program seçmek; 9103 HE'de Başla/Bekle/İptal düğmesine 3 saniye basarak makineyi fabrika ayarlarına getirmek. Ekranda 'Con' görünüyorsa çocuk kilidi açıktır; Arçelik'e göre çocuk kilidi program ve ayar değişikliğine izin vermez."
  - q: "Makine yıkamanın ortasında durdu, bozuldu mu?"
    a: "Arçelik'in tablosuna göre voltaj düşüklüğü nedeniyle makine bir süre durmuş olabilir; voltaj normal seviyeye geldiğinde makine kaldığı yerden çalışmaya devam eder. Sular kesildiyse de makine bekleme moduna geçer; su gelince Başla/Bekle tuşuyla kaldığı yerden sürdürebilirsin."
  - q: "Işıklar kendiliğinden kısıldı ya da ekran kapandı, arıza mı?"
    a: "Hayır. Arçelik'e göre program seçimi sırasında 1 dakika içinde program başlatılmazsa ya da bir tuşa basılmazsa makine bekleme durumuna geçer ve gösterge ışıklarının parlaklığı azalır; program bittikten sonra yaklaşık 2 dakika işlem yapılmazsa enerji tasarrufu moduna geçer. Program düğmesini çevirmek ya da bir tuşa dokunmak ışıkları geri getirir. Kılavuzun ifadesiyle bu bir hata değildir."
images:
  coverAlt: "Ekranı ve gösterge ışıkları sönük duran bir çamaşır makinesinin kontrol paneli, yanında duvardaki prize takılı fiş"
---

Makine hiç açılmıyor, ekran karanlık; ya da program seçiliyor ama başlamıyor. Arçelik'in çamaşır makinesi kullanma kılavuzlarındaki sorun giderme tablosu bu durumu birkaç satıra bölüyor: **"Makine çalışmıyor. Ekranda hiçbir şey görünmüyor."**, **"Makinenin kapağını kapattıktan sonra program başlamıyor."** ve **"Program başlatılamıyor veya program seçimi yapılamıyor."** Arçelik'in bu satırlarda saydığı sebeplerin çoğu makinenin dışında ya da bir tuşta: fiş, sigorta, elektrik, Açma/Kapama, kapak, Başla/Bekle ve su. Bu yazıda Arçelik'in sırasını açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Ekran karanlıksa fiş, elektrik, sigorta ve Açma/Kapama. Ekran açık ama program başlamıyorsa kapak tam kapalı mı, Başla/Bekle'ye basıldı mı, su var mı? Program seçilemiyorsa programı iptal edip yeniden seç; ekranda "Con" varsa çocuk kilidini kapat.

## Adım adım: evde denenecekler

**1. Fişe bak.** Arçelik 9103 HE kılavuzundaki ilk sebep: **fiş prize takılı olmayabilir.** Çözüm: **fişi kontrol edip prize tak.** Arçelik'in kurulum bölümüne göre makine **topraklı bir prize** bağlanır ve bağlantı **uzatma kablosu ya da çoklu prizle yapılmaz.**

**2. Elektriği ve sigortayı kontrol et.** Aynı satırın iki sebebi daha: **elektrik kesik olabilir** ve **sigorta arızalı olabilir.** Arçelik'in çözümü: **elektriği kontrol et**, sigortayı kontrol et ve **gerekirse ehliyetli bir elektrikçiye değiştirt.** Arçelik'in kurulum bölümü makinenin **16 amperlik** bir sigortayla korunan prize bağlanmasını istiyor.

**3. Açma/Kapama'ya bas.** Satırın son sebebi: **Açma/Kapama tuşuna basılmamış olabilir.** Çözüm: **Açma/Kapama tuşuna bas.** 7103 D'de Açma/Kapama ayrı bir tuş değil: **Program Seçim düğmesinin en üst pozisyonu Açma/Kapama** konumu.

**4. Kapağı tam kapat.** Arçelik'in tablosuna göre program seçip Başla/Bekle'ye bastığın hâlde makine çalışmıyorsa **yükleme kapağı kapanmamış olabilir.** Kılavuza göre kapak **kilitlenme sesini duyana kadar iterek** kapatılır. 7103 D'nin tablosu bir sebep daha ekliyor: **aşırı yükleme durumunda kapak zor kapanabilir**; çözüm **çamaşırı azaltarak** kapağın düzgün kapandığından emin olmak.

**5. Başla/Bekle'ye bas.** Tablodaki bir başka sebep: **Başla / Bekle / İptal düğmesine basılmamış olabilir.** Arçelik'in sırasında program düğmeyle seçildikten sonra başlaması için **Başla/Bekle** tuşuna basılıyor; programın başladığını **program takip ışığının yanması** gösteriyor.

**6. Su kesik mi bak.** 9103 HE kılavuzuna göre **Durulama sembolü yanıp sönüyorsa** (modele bağlı olarak **su kesik sembolü** de yanabilir) **su kesik olabilir.** Arçelik'in çözümü: suyun kesik olmadığından emin olduktan sonra **Başla / Bekle / İptal** tuşuna basarak makineyi yeniden çalıştır. 7103 D'de sular kesikken **yıkama ya da durulama ledi** yanıp söner. Su tarafının tamamı [Arçelik çamaşır makinesi su almıyor](/blog/arcelik-camasir-makinesi-su-almiyor/) yazısında.

**7. Programı iptal edip yeniden seç.** Arçelik'in tablosuna göre program başlatılamıyor ya da seçilemiyorsa **şebeke voltajı, su basıncı gibi altyapı kaynaklı problemler** yüzünden makine **kendini korumaya almış** olabilir. 7103 D'de çözüm **Program Seçim düğmesini çevirerek başka bir program seçmek**; bir önceki program iptal olur. 9103 HE'de çözüm **Başla / Bekle / İptal düğmesine 3 saniye basarak** makineyi **fabrika ayarlarına** getirmek. Sonra istediğin programı yeniden seçip başlat.

## Arıza sanılan durumlar

- **Ekranda "Con" yazıyor:** Arçelik'e göre bu, **çocuk kilidinin** açık olduğunu gösteriyor; çocuk kilidi programlarda ve sıcaklık, devir, yardımcı fonksiyon seçimlerinde değişikliğe izin vermiyor. 9103 HE kılavuzunun notu: çocuk kilidini program bitince kapatmazsan makine **yeni bir program seçimine izin vermez.** Kilidi kapatma yolu modele göre değişiyor: 7103 D'de bir program çalışırken **2. yardımcı fonksiyon tuşuna 3 saniye** basılıyor (ekranda "COF" görünür), 9103 HE'de **2. ve 4. yardımcı fonksiyon tuşlarına 3 saniye** basılıyor (ekranda "COFF" görünür). Kendi modelin için kılavuzun "Çocuk kilidi" bölümüne bak.
- **Işıklar kısıldı, ekran kapandı:** Arçelik'e göre program seçimi sırasında **1 dakika** işlem yapılmazsa makine bekleme durumuna geçer; program bittikten sonra **yaklaşık 2 dakika** işlem yapılmazsa enerji tasarrufu moduna geçer. Program düğmesini çevirmek ya da bir tuşa dokunmak ışıkları geri getirir. Kılavuzun ifadesiyle **bu bir hata değildir.**
- **Makine program ortasında durdu:** Arçelik'in tablosuna göre **voltaj düşüklüğü** nedeniyle makine bir süre durmuş olabilir; voltaj normal seviyeye geldiğinde makine **kaldığı yerden** çalışmaya devam eder.

Ekrandaki simgelerin anlamı için [Arçelik çamaşır makinesi sembolleri ve anlamları](/blog/arcelik-camasir-makinesi-sembolleri-ve-anlamlari/) yazısına, markadan bağımsız anlatım için [çamaşır makinesi çalışmıyor](/blog/camasir-makinesi-calismiyor/) yazısına bakabilirsin.

## Sınır nerede biter

Fiş, tuşlar, kapak, su ve programı yeniden seçmek kullanıcıya aittir. Sigortanın değiştirilmesi ya da evin elektrik tesisatı Arçelik'e göre **ehliyetli bir elektrikçinin** işi; Arçelik'in kurulum bölümüne göre **hasar görmüş elektrik kabloları Yetkili Servis tarafından** değiştirilmeli. Sorun giderme bölümünün sonundaki uyarı da açık: talimatları uygulamana rağmen sorun sürüyorsa ürünü **satın aldığın bayiye ya da Yetkili Servise** başvur; **çalışmayan ürünü kendin onarmayı asla deneme.**

⛔ **Kendin-çöz sınırı burada biter.** Fiş takılı, elektrik ve su var, kapak kapalı, program yeniden seçilmiş ve makine hâlâ çalışmıyorsa yetkili servise başvur. Diğer Arçelik konuları için [Arçelik çamaşır makinesi hata kodları](/blog/arcelik-camasir-makinesi-hata-kodlari/) yazısına bakabilirsin.

## Servisi aramadan önce iki dakikalık özet

1. Ekran tamamen karanlık mı, yoksa ışıklar yanıyor ama program mı başlamıyor?
2. Aynı prize başka bir cihaz takınca çalışıyor mu?
3. Hangi ışık ya da sembol yanıp sönüyor, ekranda "Con" var mı?
4. Makine program ortasında mı durdu, hiç mi başlamadı?
5. Sorun elektrik ya da su kesintisinden sonra mı başladı?

Bu beşine cevabın varsa servise "çalışmıyor" yerine somut bir tablo anlatabilirsin.

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

---
title: "Arçelik çamaşır makinesi titriyor"
description: "Arçelik çamaşır makinesi titriyor, sıkmada yerinden yürüyorsa Arçelik'in kontrolleri: zemin ve platform, dayanma, elle ayak ayarı, yük ve cepteki cisimler."
slug: "arcelik-camasir-makinesi-titriyor"
date: "2026-10-01"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-01 PAZ alt ajanı (sprint #144, Arçelik belirti koşusu). Belgeler 28 Eyl'de download.arcelik.com.tr'den indirildi; A ve B bu koşuda
#   curl -sL -A "Mozilla/5.0" ile yeniden indirildi, HTTP 200, md5'ler yerel kopyalarla birebir. Yerel: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-arcelik-camasir-sprint/ (m3=A, m12=B)
# #88: web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı. Okuma pdftotext -layout, sayfa = PDF sayfası (basılı "NN / TR" ile aynı).
#  (A) 7103 D   https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_Manual_7144850100_tr_TR20171222-130958-092.pdf  44 s.  md5 de6298c4596bd93f57e5427ef9743c54  (sayfa atıfları esas olarak A)
#  (B) 9103 HE  https://download.arcelik.com.tr/download.usagemanuals/9103-he-9-kg-camasir-makineleri-kullanim-kilavuzu-tr_TR_2820523450.pdf  40 s.  md5 6610815f28099c1c73ea3a5681c20c0d
# Sorun giderme (A s.35 · B s.33) "Ürün titreşim veya ses yapıyor.": dengesiz → Ayaklarını ayarlayarak ürünü dengeleyin · pompa filtresine sert cisim → Pompa filtresini temizleyin
#   · nakliye emniyet cıvataları → çıkarın · çamaşır az → daha çok yükleyin · aşırı → bir kısmını çıkarın ya da elinizle düzelterek eşit dağıtın · sert yüzeye dayanıyor → herhangi bir yere dayanmadığını kontrol edin
# Kurulum: A s.12 4.4.1 "sert, düz ve eğimsiz bir zemin"; uzun tüylü halı yok; kurutucu üst üste dolu hâlde ~180 kg → yeterli yük taşıma kapasitesine sahip sağlam ve düz yüzey; mobilyalarla en az 1 cm;
#   "basamaklı bir zemine kuracaksanız kesinlikle kenara yakın bir noktaya yerleştirmeyin"; "herhangi bir platformun üzerine yerleştirmeyin" · A s.12 yerine iterken hortum/kablo katlanmasın
#   · A s.14 4.4.6 UYARI "…ayakları üzerinde düzgün ve dengede durması gerekir… Aksi takdirde, ürün yerinden hareket edebilir, çarpma, ses ve titreşim problemlerine yol açabilir." + "Kilit somunlarını gevşetmek için herhangi bir alet kullanmayın."
#   · A s.15 ayak ayarı 1-3 (elle gevşet, ayarla, elle sık) · A s.13 nakliye cıvataları "uygun bir anahtarla" (ALET → numaralı adım DEĞİL), "Ürünü çalıştırmadan önce… sökün! Aksi takdirde ürün hasar görecektir."
# Yük ve hazırlık: A s.17 cepteki bozuk para, kalem, ataç "ürüne zarar verebilir veya ses problemine yol açabilir"; metal parçalı çamaşır torba/yastık kılıfında; çamaşırları gevşek yerleştir
#   · A s.18 aşırı yükte "ses ve titreşim problemleri oluşabilir" · A s.30 / s.39 (*) dengesiz dağılımda otomatik dengesiz yük algılama, sıkmaya geçmez: "Çamaşırları düzeltip tekrar sıkma yaptırın."
#   · A s.33 pompa filtresi yabancı cisim "ses problemine neden olabilir"; filtre temizliği A s.33-34 (elle; iki parçalı kapak elle) · A s.39 bayi / Yetkili Servis.
# YAKIN KOPYA KAPISI: yayındaki beko-camasir-makinesi-titriyor aynı tablo satırını taşıyor. Bu taslak farklı kuruldu: giriş A s.14 "yerinden hareket/çarpma" uyarısından; sıra yer → yük → cisim;
#   Beko sayfasında olmayan satırlar öne çıkarıldı (eğimsiz zemin, platform, basamak kenarı, üst üste kurutucu, cepteki cisimler, dengesiz yük algılama/tekrar sıkma); SSS soruları farklı.
# BİLEREK YAZILMAYANLAR: nakliye cıvatalarını sökme (anahtar → numarasız, yetkili servis) · amortisör/rulman/karşı ağırlık teşhisi (belgede yok) · ayak ayarında alet · fiyat (#46).
# Alıntı denetim tablosu: arcelik-camasir-makinesi-titriyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Bez"]
steps:
  - "Programı durdur ve makinenin fişini çek."
  - "Makinenin sert, düz ve eğimsiz bir zeminde durduğunu, bir platformun üzerinde ya da basamak kenarına yakın olmadığını kontrol et."
  - "Makinenin duvara ya da mobilyaya dayanmadığından emin ol; mobilyalarla arasında en az 1 cm boşluk bırak."
  - "Ayakların kilit somunlarını elle gevşet, makine düz ve dengeli durana kadar ayakları ayarla, somunları yeniden elle sık."
  - "Tamburdaki çamaşır çok azsa ekle, çok fazlaysa bir kısmını çıkar ya da elinle eşit dağıt."
  - "Sonraki yıkamalarda ceplerdeki bozuk para, kalem ve ataç gibi cisimleri çamaşırları makineye koymadan önce çıkar."
  - "Ses sürüyorsa içerideki su soğuduktan sonra pompa filtresini elle aç ve içine kaçan sert cismi temizle."
faq:
  - q: "Arçelik çamaşır makinem sıkmada yerinden yürüyor, neden?"
    a: "Arçelik'in kurulum bölümündeki uyarıya göre makinenin sessiz ve titreşimsiz çalışması için ayakları üzerinde düzgün ve dengede durması gerekiyor; aksi takdirde ürün yerinden hareket edebilir, çarpma, ses ve titreşim problemlerine yol açabilir. Sorun giderme tablosu da dengesiz durmayı, bir yere dayanmayı, az ya da aşırı yükü, pompa filtresine kaçan sert cismi ve sökülmemiş nakliye emniyet cıvatalarını sayıyor."
  - q: "Makineyi bir platformun ya da yükseltinin üzerine koyabilir miyim?"
    a: "Arçelik'in 7103 D kılavuzu buna açıkça hayır diyor: ürünü herhangi bir platformun üzerine yerleştirmeyin. Aynı bölüm makinenin sert, düz ve eğimsiz bir zemine konmasını, uzun tüylü halı üzerine konmamasını ve basamaklı bir zeminde kesinlikle kenara yakın bir noktaya yerleştirilmemesini istiyor."
  - q: "Makine hem titriyor hem de sıkmaya geçmiyor. Bağlantılı mı?"
    a: "Olabilir. Arçelik'e göre çamaşırlar makinenin içinde iyi dağılmadığında otomatik dengesiz yük algılama sistemi devreye girer ve makine kendisine ve çevresine zarar vermemek için sıkma adımına geçmez. Kılavuzun çözümü: çamaşırları düzeltip tekrar sıkma yaptırmak."
  - q: "Üstüne kurutma makinesi koyacağım, zemin için nelere dikkat etmeliyim?"
    a: "Arçelik'in kurulum bölümüne göre çamaşır makinesi ve kurutucu üst üste yerleştirildiğinde dolu hâlde toplam ağırlıkları yaklaşık 180 kilogramı bulur. Kılavuz bu yüzden ürünün yeterli yük taşıma kapasitesine sahip, sağlam ve düz bir yüzeye yerleştirilmesini istiyor."
images:
  coverAlt: "Banyoda sert ve düz bir zeminde, yanındaki dolapla arasında boşluk bırakılmış ön yüklemeli çamaşır makinesi; önünde ters çevrilmiş bir pantolon cebi ve çıkarılmış birkaç bozuk para"
---

Sıkma başladığında makine sarsılıyor, yanındaki dolaba vuruyor ya da birkaç santim yer değiştirmiş buluyorsun. Arçelik'in çamaşır makinesi kullanma kılavuzu bu tabloyu kurulum bölümünde önceden yazıyor: makine ayakları üzerinde **düzgün ve dengede** durmazsa **yerinden hareket edebilir, çarpma, ses ve titreşim problemlerine** yol açabilir. Sorun giderme tablosundaki satırın adı **"Ürün titreşim veya ses yapıyor."** Arçelik'in bu satırda ve kurulum bölümünde saydıkları üç yere toplanıyor: **makinenin durduğu yer, tamburdaki yük ve makinenin içine kaçan cisimler.** Kontrolleri bu sırayla yapıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Fişi çek. Zemin sert, düz, eğimsiz mi; makine bir platformda ya da basamak kenarında mı? Bir yere dayanıyor mu? Ayakları elle dengele, alet kullanma. Yük çok az ya da çok fazlaysa düzelt. Ceplerdeki bozuk parayı çıkar, ses sürüyorsa pompa filtresini temizle. Yeni kurulmuş makinede nakliye cıvataları yetkili servisin işi.

## Adım adım: evde denenecekler

**1. Programı durdur, fişi çek.** Makineyi yerinden oynatacak ya da altına bakacaksan önce programı durdur ve fişini çek. Arçelik'in kurulum uyarısına göre makine yerine itilirken **su giriş ve tahliye hortumlarıyla elektrik kablosunun** katlanmamasına, sıkışmamasına ve kırılmamasına dikkat et.

**2. Zemine bak.** Arçelik'in "Kurulum için doğru yer" bölümü makinenin **sert, düz ve eğimsiz** bir zemine konmasını istiyor; **uzun tüylü halı** ya da benzeri bir yüzey olmamalı. Aynı bölümde iki kural daha var: ürün **herhangi bir platformun üzerine** yerleştirilmemeli ve basamaklı bir zemine kurulacaksa **kesinlikle kenara yakın** bir noktaya konmamalı. Üstüne kurutucu yerleştirdiysen Arçelik'e göre ikisinin dolu hâldeki ağırlığı **yaklaşık 180 kilogramı** bulur; zemin bu yükü taşıyacak kadar **sağlam ve düz** olmalı.

**3. Dayanmayı kontrol et.** Tablodaki sebeplerden biri: **ürün sert bir yüzeye dayanıyor olabilir.** Arçelik'in çözümü: **ürünün herhangi bir yere dayanmadığını kontrol et.** Kurulum bölümüne göre makine ile mobilyalar arasında **en az 1 cm** boşluk kalmalı.

**4. Ayakları elle ayarla.** Tablodaki ilk sebep: **ürün dengesiz duruyor olabilir**; çözüm **ayaklarını ayarlayarak ürünü dengelemek.** Arçelik'in sırası üç adım: ayakların üzerindeki **kilit somunlarını elle gevşet**, ürün **düz ve dengeli** durana kadar ayakları ayarla, **tüm kilit somunlarını yeniden elle sık.** Kılavuzun uyarısı: kilit somunlarını gevşetmek için **herhangi bir alet kullanma**, aksi takdirde zarar görürler. Somun elle dönmüyorsa zorlama; bu işi yetkili servise bırak.

**5. Yükü dengele.** Tabloda yükle ilgili iki karşıt satır var. Tamburda **çamaşır miktarı az** ise Arçelik **daha çok çamaşır yüklemeni** öneriyor. **Aşırı miktarda** çamaşır konmuşsa bir kısmını **çıkar** ya da çamaşırları **elinle düzelterek** tamburun içine **eşit** dağıt. Arçelik'in yük bölümü aşırı yüklemede **ses ve titreşim problemleri** oluşabileceğini yazıyor ve çamaşırların makineye **gevşek biçimde** yerleştirilmesini istiyor.

**6. Ceplere bak.** Arçelik'in çamaşır hazırlama bölümü bir ses kaynağını ayrıca anıyor: ceplerdeki **bozuk para, kalem, ataç** gibi cisimler **ürüne zarar verebilir veya ses problemine yol açabilir.** Kılavuzun önerisi: bu cisimleri çıkar, mümkünse **cepleri ters çevirip fırçala.** Destek teli, kemer tokası ya da metal düğme gibi metal parçalı çamaşırları ise **çamaşır torbası veya yastık kılıfı** içinde yıka.

**7. Pompa filtresini temizle.** Ses sürüyorsa tablodaki bir sebep daha var: **pompa filtresine sert bir cisim kaçmış olabilir.** Arçelik'in bakım bölümüne göre filtrede kalan yabancı cisimler makineye zarar verebilir ya da **ses problemine** neden olabilir. İçerideki su **90 °C'ye kadar** çıkabildiği için filtreyi **su soğuduktan sonra**, kapağı elle açarak temizle. Kapaktan filtreye kadar Arçelik'in sırasının tamamı [Arçelik çamaşır makinesi su boşaltmıyor](/blog/arcelik-camasir-makinesi-su-bosaltmiyor/) rehberinde.

## Sıkmada sallanıp duruyorsa

Arçelik'in tablosunun dipnotunda titreşimle yakından ilgili bir açıklama var: çamaşırlar makinenin içinde **iyi dağılmadığında** makine, **kendisine ve çevresine zarar vermemek için** sıkma adımına geçmez. Kılavuz bunu **otomatik dengesiz yük algılama sistemi** olarak anıyor; aynı sistem program süresinin geri saymamasına da yol açabiliyor. Çözüm: **çamaşırları düzeltip tekrar sıkma yaptır.** Makine sıkmaya hiç geçmiyorsa [Arçelik çamaşır makinesi santrifüj yapmıyor](/blog/arcelik-camasir-makinesi-santrifuj-yapmiyor/) rehberine bak.

## Makine yeni kurulduysa

Tablodaki son sebep: **nakliye emniyet cıvataları çıkarılmamış olabilir.** Arçelik'in uyarısı: ürünü **çalıştırmadan önce** nakliye emniyet cıvatalarını sök; **aksi takdirde ürün hasar görecektir.** Kılavuzda cıvatalar **uygun bir anahtarla** gevşetiliyor ve Arçelik ürünün kurulumu için **en yakın yetkili servise** başvurulmasını istiyor. Alet gerektirdiği için bu işi adım olarak vermiyoruz: cıvatalar yerindeyse makineyi çalıştırma, yetkili servise bırak. Arçelik'e göre makine taşınacaksa cıvatalar yeniden takılmadan **kesinlikle taşınmamalı**; bu yüzden sökülen cıvataları güvenli bir yerde sakla.

Markadan bağımsız anlatım için [çamaşır makinesi ses ve titreşim](/blog/camasir-makinesi-ses-titresim/) yazısına, ekrandaki kodlar için [Arçelik çamaşır makinesi hata kodları](/blog/arcelik-camasir-makinesi-hata-kodlari/) sayfasına bakabilirsin.

## Ne zaman servis

Zemin uygun, makine hiçbir yere dayanmıyor, ayaklar dengeli, yük doğru, cepler boş, pompa filtresi temiz ve titreşim ya da ses sürüyorsa Arçelik'in tablosu kullanıcıya başka bir sebep göstermiyor. Arçelik'in sorun giderme bölümünün sonundaki uyarı: talimatları uygulamana rağmen sorun sürüyorsa ürünü **satın aldığın bayiye ya da Yetkili Servise** başvur; **çalışmayan ürünü kendin onarmayı asla deneme.**

⛔ **Kendin-çöz sınırı burada biter.** Yerleşim, elle ayak ayarı, yük ve filtre kullanıcıya; nakliye cıvataları ve makinenin içi yetkili servise aittir.

## Servisi aramadan önce kısa özet

1. Titreşim yıkamada mı, sıkmada mı başlıyor; makine yerinden kayıyor mu?
2. Makine hangi zeminde duruyor: düz zemin, platform, basamak?
3. Üstünde kurutucu var mı?
4. Tamburda ne kadar ve ne tür çamaşır vardı?
5. Makine yeni mi kuruldu ya da yakın zamanda taşındı mı?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

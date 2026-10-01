---
title: "Arçelik çamaşır makinesi köpük yapıyor"
description: "Arçelik çamaşır makinesi çok köpük yapıyor ya da çekmeceden köpük taşıyorsa Arçelik kılavuzundaki çözüm: deterjan türü, miktarı, gözü ve saklanması."
slug: "arcelik-camasir-makinesi-kopuk-yapiyor"
date: "2026-10-01"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-01 PAZ alt ajanı (sprint #144, Arçelik belirti koşusu). Belgeler 28 Eyl'de download.arcelik.com.tr'den indirildi; A ve B bu koşuda
#   curl -sL -A "Mozilla/5.0" ile yeniden indirildi, HTTP 200, md5'ler yerel kopyalarla birebir. Yerel: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-arcelik-camasir-sprint/ (m3=A, m12=B)
# #88: web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı. Okuma pdftotext -layout, sayfa = PDF sayfası (basılı "NN / TR" ile aynı).
#  (A) 7103 D   https://download.arcelik.com.tr/Download.UsageManuals/FACELIFT_ARCELIK/tr_TR_Manual_7144850100_tr_TR20171222-130958-092.pdf  44 s.  md5 de6298c4596bd93f57e5427ef9743c54  (sayfa atıfları esas olarak A)
#  (B) 9103 HE  https://download.arcelik.com.tr/download.usagemanuals/9103-he-9-kg-camasir-makineleri-kullanim-kilavuzu-tr_TR_2820523450.pdf  40 s.  md5 6610815f28099c1c73ea3a5681c20c0d
# Sorun giderme satırları:
#   A s.38 · B s.36 "Ürünün içinde çok miktarda köpük oluşuyor. (**)": uygun olmayan deterjan → Çamaşır makinesine uygun deterjanlar kullanın · aşırı deterjan → Yalnızca gerektiği kadar
#     · kötü koşullarda saklanmış → nemsiz ortamda, kapalı; aşırı sıcakta saklamayın · "Tül gibi delikli çamaşırlar yapıları nedeniyle çok köpürür." → az miktarda deterjan
#     · yanlış göz → Deterjanı doğru göze koyun · "Ürün, yumuşatıcıyı erken alıyor olabilir." → "Vanalarda veya deterjan çekmecesinde sorun olabilir. Yetkili Servisi arayın."
#   A s.39 · B s.36 "Deterjan çekmecesinden dışarı köpük taşıyor.": "1 çorba kaşığı yumuşatıcı ile ½ lt suyu karıştırıp deterjan çekmecesinin ana yıkama gözüne boşaltın."
#     · program ve azami yüklere uygun miktar · "Ekstra kimyasal kullandığınızda (leke çıkarıcılar, çamaşır suyu vb.), deterjan miktarını azaltın."
#   A s.39 (**) "Düzenli kazan temizliği uygulanmamış olabilir. Kazanı düzenli olarak temizleyin."
#   A s.36 süre uzuyor / sıkmaya geçmiyor · A s.39 çamaşır ıslak kalıyor: "Fazla deterjan kullanılması nedeniyle aşırı köpük oluşmuş ve otomatik köpük sönümleme sistemi devreye girmiş olabilir." → önerilen miktar
# Diğer: A s.18 sadece çamaşır makinesi deterjanı, sabun tozu kullanmayın; çekmece 1 ön yıkama / 2 ana yıkama / 3 yumuşatıcı; ön yıkamasız programda 1 no'lu göze deterjan koymayın;
#   sıvı deterjan kabı 2 no'lu göz; deterjan torbası/dozaj topu çamaşırların arasına · A s.19 dozajı aşmayın ("Aşırı köpük ve iyi durulamama sorunlarını engellemek…"), az/az kirli çamaşırda daha az
#   · A s.28 Kazan Temizleme: 1-2 ayda bir, makine tamamen boşken, 2 no'lu göze toz kireç çözücü, sonra kapağı aralık bırak · A s.32 çekmece temizliği 4-5 yıkamada bir, elle.
# BİLEREK YAZILMAYANLAR: vana/çekmece arızası teşhisi (Yetkili Servis satırı) · köpük sensörü/pompa iddiası (belgede yok) · deterjan marka/ölçü önerisi (belge paket dozajına gönderiyor)
#   · sirke/karbonat gibi ev yöntemleri (belgede yok) · fiyat (#46).
# Alıntı denetim tablosu: arcelik-camasir-makinesi-kopuk-yapiyor.KAYNAK.md
guide:
  difficulty: "Çok kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Yumuşatıcı", "Yarım litrelik bir kap"]
steps:
  - "Köpük çekmeceden taşıyorsa 1 çorba kaşığı yumuşatıcıyı yarım litre suyla karıştırıp çekmecenin ana yıkama gözüne boşalt."
  - "Kullandığın deterjanın çamaşır makinesi için üretildiğinden emin ol; sabun tozu kullanma."
  - "Bir sonraki yıkamada deterjanı paketteki dozajı aşmadan, çamaşır miktarına ve kirine göre azalt."
  - "Leke çıkarıcı ya da çamaşır suyu gibi ekstra bir kimyasal kullanıyorsan deterjan miktarını azalt."
  - "Tül gibi delikli çamaşırları yıkarken az miktarda deterjan kullan."
  - "Deterjanı doğru göze koy; ön yıkamasız programda 1 numaralı ön yıkama gözünü boş bırak."
  - "Deterjanı nemsiz, kapalı ve aşırı sıcak olmayan bir yerde sakla."
  - "Makine boşken Kazan Temizleme programını çalıştır, bittiğinde kapağı aralık bırak."
faq:
  - q: "Arçelik çamaşır makinem neden bu kadar köpük yapıyor?"
    a: "Arçelik'in sorun giderme tablosu 'Ürünün içinde çok miktarda köpük oluşuyor' satırında altı neden sayıyor: çamaşır makinesine uygun olmayan deterjan, aşırı miktarda deterjan, kötü koşullarda saklanmış deterjan, tül gibi delikli çamaşırlar, yanlış göze konmuş deterjan ve makinenin yumuşatıcıyı erken alması. İlk beşi kullanıcının düzeltebileceği şeyler; sonuncusu için Arçelik Yetkili Servisi işaret ediyor."
  - q: "Köpük çekmeceden dışarı taştı, şimdi ne yapmalıyım?"
    a: "Arçelik'in tarifi: 1 çorba kaşığı yumuşatıcıyı yarım litre suyla karıştır ve deterjan çekmecesinin ana yıkama gözüne boşalt. Sonraki yıkamalarda deterjanı 'Program ve tüketim tablosu'ndaki program ve azami yüke uygun miktarda koy."
  - q: "Fazla köpük programı uzatır mı?"
    a: "Uzatabilir. Arçelik 7103 D kılavuzuna göre fazla deterjan yüzünden aşırı köpük oluştuğunda otomatik köpük sönümleme sistemi devreye girebiliyor. Tablo bunu yıkamanın kılavuzda yazandan uzun sürmesi, makinenin sıkma adımına geçmemesi ve program sonunda çamaşırların ıslak kalması satırlarında anıyor. Çözüm üç satırda da aynı: önerilen miktarda deterjan kullanmak."
  - q: "Doğru miktarı ve doğru gözü nasıl bilirim?"
    a: "Arçelik deterjan paketinin üzerindeki tavsiye edilen dozajın aşılmamasını, az ya da az kirli çamaşır için daha az deterjan kullanılmasını istiyor. Çekmecede 1 numaralı göz ön yıkama, 2 numaralı göz ana yıkama, 3 numaralı göz yumuşatıcı için. Ön yıkamasız bir program seçtiysen 1 numaralı göze deterjan koyma."
images:
  coverAlt: "Ön yüklemeli çamaşır makinesinin camında yükselmiş beyaz köpük, açık deterjan çekmecesinin kenarında taşmış köpük izleri"
---

Tamburun camı beyaz köpükle doldu ya da deterjan çekmecesinin ağzından köpük taşıyor. Arçelik'in çamaşır makinesi kullanma kılavuzlarındaki sorun giderme tablosunda bu iki görüntünün ayrı ayrı satırı var: **"Ürünün içinde çok miktarda köpük oluşuyor."** ve **"Deterjan çekmecesinden dışarı köpük taşıyor."** Arçelik'in saydığı nedenlerin neredeyse tamamı deterjanla ilgili: **türü, miktarı, konduğu göz ve saklandığı yer.** Önce taşan köpüğü yatıştırıyoruz, sonra bir dahakine köpüğü baştan önleyen sırayı veriyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Köpük taşıyorsa 1 çorba kaşığı yumuşatıcı + yarım litre suyu ana yıkama gözüne dök. Sonra: yalnız çamaşır makinesi deterjanı, paketteki dozajı aşmadan; ekstra kimyasal ya da tül varsa daha az; doğru göz; kuru ve kapalı saklama; arada bir boş makinede Kazan Temizleme. Yumuşatıcıyı erken alıyorsa yetkili servis.

## Adım adım: evde denenecekler

**1. Taşan köpüğü yatıştır.** Arçelik'in "Deterjan çekmecesinden dışarı köpük taşıyor" satırındaki neden: **çok fazla deterjan kullanılmış olabilir.** Kılavuzun anlık çözümü: **1 çorba kaşığı yumuşatıcı ile ½ litre suyu karıştırıp** deterjan çekmecesinin **ana yıkama gözüne** boşalt. Arçelik'in çekmece düzeninde ana yıkama gözü **2 numaralı** göz.

**2. Deterjanın türüne bak.** Tablodaki ilk neden: **çamaşır makinesine uygun olmayan deterjanlar kullanılıyor olabilir.** Arçelik'in çözümü: **çamaşır makinesine uygun deterjanlar kullan.** Kılavuzun deterjan bölümü bunu iki uyarıyla netleştiriyor: **sadece çamaşır makineleri için özel olarak üretilmiş** deterjanları kullan ve **sabun tozu kullanma.**

**3. Miktarı azalt.** Tablodaki ikinci neden: **aşırı miktarda deterjan kullanılmış olabilir.** Arçelik'in çözümü: **yalnızca gerektiği kadar deterjan kullan.** Kılavuza göre kullanılacak miktar çamaşır miktarına, kirlilik derecesine ve suyun sertliğine bağlı; Arçelik **aşırı köpük ve iyi durulamama** sorunlarını engellemek için deterjan paketinin üzerindeki **tavsiye edilen dozajın aşılmamasını**, az ya da az kirli çamaşırda **daha az** deterjan kullanılmasını istiyor.

**4. Ekstra kimyasal varsa deterjanı kıs.** Çekmeceden taşma satırındaki ikinci öneri: deterjanı "Program ve tüketim tablosu"ndaki **program ve azami yüklere uygun** miktarda koy; **leke çıkarıcı, çamaşır suyu** gibi ekstra bir kimyasal kullandığında **deterjan miktarını azalt.**

**5. Tül ve delikli çamaşırda az deterjan kullan.** Arçelik'in tablosunda kumaşın kendisinden kaynaklanan bir satır da var: **tül gibi delikli çamaşırlar yapıları nedeniyle çok köpürür.** Çözüm: bu tür çamaşırlar için **az miktarda** deterjan kullan.

**6. Deterjanı doğru göze koy.** Tablodaki bir başka neden: **yanlış göze deterjan konulmuş olabilir.** Arçelik'in çekmecesi üç bölmeli: **1 ön yıkama**, **2 ana yıkama**, **3 yumuşatıcı.** Kılavuzun kuralları: ön yıkamasız bir program kullanıyorsan **1 numaralı göze deterjan koyma**; sıvı deterjan kabı varsa onu **2 numaralı göze** yerleştir; deterjan torbası ya da dozaj topu kullanıyorsan onu doğrudan **çamaşırların arasına** koy ve ön yıkamalı program seçme.

**7. Deterjanı kuru ve kapalı sakla.** Tablodaki neden: **deterjan kötü koşullarda saklanmış olabilir.** Arçelik'in çözümü: deterjanı **nemsiz ortamda, kapalı olarak** sakla ve **aşırı sıcak ortamlarda** tutma.

**8. Kazanı temizle.** Arçelik köpük satırını yıldızlı bir notla işaretliyor: **düzenli kazan temizliği uygulanmamış olabilir; kazanı düzenli olarak temizle.** Makinende Kazan Temizleme programı varsa 7103 D kılavuzuna göre bu programı **makine tamamen boşken** ve **1-2 ayda bir** çalıştır. Daha verimli sonuç için Arçelik **2 numaralı göze çamaşır makinelerine uygun toz kireç çözücü** konmasını öneriyor. Program bitince makinenin içinin kuruması için **yükleme kapağını aralık bırak.** Kılavuza göre bu bir çamaşır yıkama programı değil, **bakım programı.** 7103 D'de program **1. yardımcı fonksiyon tuşuna 3 saniye basılarak** seçiliyor; kendi modelindeki yolu kılavuzunun program bölümünde bulabilirsin.

## Köpük programı da etkileyebilir

Arçelik'in tablosunda köpüğün yan etkileri de var. 7103 D kılavuzuna göre fazla deterjan yüzünden aşırı köpük oluşunca **otomatik köpük sönümleme sistemi** devreye girebiliyor. Kılavuz bunu üç ayrı satırda anıyor: yıkamanın **kılavuzda belirtilenden uzun sürmesi**, makinenin **sıkma adımına geçmemesi** ve program sonunda çamaşırların **ıslak kalması.** Üç satırda da çözüm aynı: **önerilen miktarda deterjan kullan.**

Çekmecedeki gözlerin anlamı için [çamaşır makinesi deterjan çekmecesi hangi göz](/blog/camasir-makinesi-deterjan-cekmecesi-hangi-goz/) yazısına, kazan bakımı için [çamaşır makinesi kireç ve tambur temizliği](/blog/camasir-makinesi-kirec-ve-tambur-temizligi/) yazısına bakabilirsin. Makine sıkmaya hiç geçmiyorsa [Arçelik çamaşır makinesi santrifüj yapmıyor](/blog/arcelik-camasir-makinesi-santrifuj-yapmiyor/) rehberine geç.

## Ne zaman servis

Arçelik'in köpük satırında kullanıcıya bırakılmayan tek madde var: **ürün yumuşatıcıyı erken alıyor olabilir.** Kılavuzun açıklaması: **vanalarda veya deterjan çekmecesinde sorun olabilir; Yetkili Servisi ara.** Doğru deterjanı doğru miktarda ve doğru göze koyduğun hâlde köpük sürüyorsa Arçelik'in sorun giderme bölümünün sonundaki uyarı geçerli: ürünü **satın aldığın bayiye ya da Yetkili Servise** başvur; **çalışmayan ürünü kendin onarmayı asla deneme.**

⛔ **Kendin-çöz sınırı burada biter.** Deterjan seçimi, miktarı, göz ve kazan temizliği kullanıcıya; vanalar ve çekmecenin iç aksamı yetkili servise aittir.

## Servisi aramadan önce kısa özet

1. Köpük tamburun içinde mi, çekmeceden dışarı mı taşıyor?
2. Hangi deterjanı, ne kadar ve hangi göze koydun?
3. Aynı yıkamada leke çıkarıcı ya da çamaşır suyu kullandın mı?
4. Yumuşatıcı programın başında mı bitmiş görünüyor?
5. Kazan Temizleme en son ne zaman yapıldı?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

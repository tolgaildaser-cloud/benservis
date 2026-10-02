---
title: "Bosch çamaşır makinesi kokuyor"
description: "Bosch çamaşır makinesi kötü kokuyorsa Bosch kılavuzundaki sıra: lastik conta, deterjan çekmecesi, Tambur Temizleme programı ve açık bırakılan kapak."
slug: "bosch-camasir-makinesi-kokuyor"
date: "2026-10-02"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, Bosch belirti koşusu). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile media3.bosch-home.com'dan yeniden indirildi, üçü de HTTP 200;
#   md5'ler 28 Eyl yerel kopyalarıyla birebir aynı. Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-bosch-camasir-sprint/
# #88: bu belgeler için web araması kullanılmadı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı. Okuma pdftotext -layout, sayfa = PDF sayfası (\f ile sayıldı).
#  (B) WGA142X1TR  https://media3.bosch-home.com/Documents/9001583102_B.pdf  52 s.  md5 42506a8ca9a5e07e2a54a74b856293f4  (sayfa atıfları esas olarak bu belgeye göre)
#  (A) WGA244A0TR  https://media3.bosch-home.com/Documents/9001709506_A.pdf  60 s.  md5 23d5ed1b30b9787b05f53f1137de1679
#  (C) WAK20200TR  https://media3.bosch-home.com/Documents/9001044777_B.pdf  44 s.  md5 1820d3ebcf1c9020152b02a125d40d9d
# Arıza tablosu satırı (B s.45, A s.50 birebir): "Cihaz içinde koku oluşmuş. — Nem ve deterjan kalıntıları bakteri oluşumuna neden olabilir. ▶ → "Tamburun temizlenmesi", Sayfa 33
#   ▶ Cihazı kullanmayacaksanız kapak ve deterjan çekmecesi açık bırakılarak, kalan suyun kuruması sağlanmalıdır."
# Eski WAK satırı (C s.30): "Çamaşır makinesinde koku oluşması. — Program Pamuklular 90 °C cihaza çamaşır konmadan uygulanmalıdır. Uygun çamaşır deterjanı kullanınız."
# Diğer: B s.33 16.1 Tamburun temizlenmesi (DİKKAT: sürekli düşük sıcaklık + az havalandırılan cihaz tamburda hasar; düzenli tambur temizlik programı ya da en az 60 °C; her kullanımdan sonra kapak ve çekmece açık kurutma; Tambur Temizleme çamaşırsız toz deterjanla)
#   · B s.33 13.12 cihazın kapatılması ("Lastik conta kurutulmalı ve yabancı cisimler çıkarılmalıdır." / "Artık suyun kuruması için cihaz kapağını ve deterjan bölmesini açık bırakınız.")
#   · B s.27 program tablosu Tambur Temizleme (ilk kullanımdan önce / 40 °C ve altında sıkça yıkamada / uzun süre kullanım dışı; toz ya da ağartıcı içeren deterjan, miktar yarıya, yumuşatıcı yok, yünlü/hassas/sıvı deterjan yok;
#     60 °C ve üstü program uzun süre kullanılmadıysa tambur temizleme göstergesi hatırlatıcı olarak yanıp söner) · B s.21 "Tambur temizleme hatırlatması yanıp söner: Tambur kirli."
#   · B s.34 16.2 deterjan çekmecesinin temizlenmesi (çek, tertibatı bastır, çıkar, su ve fırçayla temizle, kurula, açıklığı temizle, tak) · C s.26 yıkama tamburu: klorsuz temizleme maddesi, çelik tel yok · B s.38 onarım yalnız eğitimli uzman.
# BİLEREK YAZILMAYANLAR: sirke/karbonat/çamaşır suyu (belgede yok) · tahliye hortumu ya da pompa kokusu teşhisi (koku satırında yok) · WMZ ekli belgelerdeki "sıvı deterjan veya beyazlatıcı" ifadesi (aynı belgenin bakım bölümüyle çelişiyor; kullanılmadı)
#   · eski WAK modellerinde Tambur Temizleme programı olup olmadığı (C'de program tablosunda yok; yalnız Pamuklular 90 °C satırı yazıldı) · fiyat/süre (#46).
# Alıntı denetim tablosu: bosch-camasir-makinesi-kokuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika (program süresi hariç)"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Temiz bez", "Fırça", "Toz deterjan"]
steps:
  - "Kapağı aç, lastik contayı kurula ve contadaki yabancı cisimleri çıkar."
  - "Deterjan çekmecesini çıkar, su ve fırçayla temizle, kurula ve çekmecenin açıklığını da temizle."
  - "Tamburu boşalt ve Tambur Temizleme programını çamaşırsız, toz deterjanla çalıştır; deterjanı yarıya indir, yumuşatıcı koyma."
  - "Makinende Tambur Temizleme programı yoksa Pamuklular 90 °C programını çamaşırsız çalıştır."
  - "Program bitince kapağı ve deterjan çekmecesini açık bırak, kalan su kurusun."
  - "Bundan sonra düzenli olarak tambur temizliği yap ya da en az 60 °C'de yıka."
faq:
  - q: "Bosch çamaşır makinesi neden kötü koku yapar?"
    a: "Bosch'un arıza tablosundaki 'Cihaz içinde koku oluşmuş' satırının açıklaması: nem ve deterjan kalıntıları bakteri oluşumuna neden olabilir. Bosch'un iki çözümü var: tamburu temizlemek ve cihazı kullanmadığın zaman kapağı ve deterjan çekmecesini açık bırakıp kalan suyun kurumasını sağlamak."
  - q: "Ekranda tambur temizleme işareti yanıp sönüyor, ne demek?"
    a: "WGA142X1TR kılavuzunun ekran tablosuna göre bu hatırlatma tamburun kirli olduğunu söylüyor; Bosch tamburun ve pis su haznesinin temizliği için Tambur Temizleme programını çalıştırmanı istiyor. Program tablosundaki nota göre 60 °C ya da daha yüksek sıcaklıktaki bir programı uzun süre kullanmadıysan bu gösterge hatırlatıcı olarak yanıp söner."
  - q: "Tambur Temizleme programında hangi deterjanı kullanmalıyım?"
    a: "Bosch'un program tablosuna göre toz deterjan ya da ağartıcı içeren deterjan. Köpük oluşmasın diye deterjan miktarını yarıya indir, yumuşatıcı kullanma; yünlülere uygun, hassas ya da sıvı deterjan kullanma. Program çamaşırsız çalıştırılıyor."
  - q: "Hep 30-40 derecede yıkıyorum, bunun koku ile ilgisi var mı?"
    a: "Bosch'un kılavuzu bu alışkanlığı tambur bakımıyla birlikte anıyor: sürekli düşük sıcaklıklarda ve az havalandırılan cihazla yıkama yapmak tambura zarar verebilir. Bosch'un önerisi düzenli olarak tambur temizlik programını çalıştırmak ya da en az 60 °C'de yıkamak. Program tablosu da Tambur Temizleme'yi 40 °C ve daha düşük sıcaklıkta sık yıkama yapılan durumlar için öneriyor."
images:
  coverAlt: "Kapağı ve deterjan çekmecesi açık bırakılmış boş bir ön yüklemeli çamaşır makinesi, lastik contanın yanında katlanmış kuru bir bez"
---

Kapağı açtığında içeriden ağır bir koku geliyor, ya da çamaşırlar makineden hoş kokmadan çıkıyor. Bosch'un çamaşır makinesi kılavuzlarındaki arıza tablosunda bu durumun satırı açık: **"Cihaz içinde koku oluşmuş."** Bosch'un açıklaması da tek cümle: **"Nem ve deterjan kalıntıları bakteri oluşumuna neden olabilir."** Yani çözüm parça değil temizlik ve kurutma alışkanlığı: lastik conta, deterjan çekmecesi, çamaşırsız bir tambur temizliği ve program sonrası açık bırakılan kapak. Bu yazıda Bosch'un sırasını açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Contayı kurula, içindeki yabancı cisimleri çıkar → deterjan çekmecesini fırçayla temizle → Tambur Temizleme programını çamaşırsız ve toz deterjanla çalıştır (eski WAK modellerinde Pamuklular 90 °C) → kapağı ve çekmeceyi açık bırak → bundan sonra düzenli tambur temizliği ya da en az 60 °C yıkama.

## Adım adım: evde denenecekler

**1. Lastik contayı kurula.** Bosch'un "cihazın kapatılması" sırasında her yıkamadan sonra istediği iş: **lastik conta kurutulmalı ve yabancı cisimler çıkarılmalı.** Kapağı aç, contayı temiz ve kuru bir bezle kurula, içinde kalan küçük parçaları al.

**2. Deterjan çekmecesini temizle.** Bosch'un bakım bölümündeki sıra: **deterjan bölmesini dışarı çek, tertibatı aşağıya bastırarak bölmeyi çıkar, ilgili tertibatı alttan yukarı bastırarak çıkar.** Sonra **çekmeceyi ve tertibatı su ve fırçayla temizle, kurula.** Parçaları yerine oturtmadan önce **çekmecenin açıklığını da temizle.** Bütün bunlar elle yapılıyor, alet gerekmiyor.

**3. Tambur Temizleme programını çalıştır.** Arıza tablosunun koku satırı doğrudan **"Tamburun temizlenmesi"** bölümüne gönderiyor. Bosch'a göre **Tambur Temizleme programı çamaşır olmadan, toz deterjan ile** çalıştırılmalı. Program tablosundaki ayrıntılar: **toz deterjan ya da ağartıcı içeren deterjan kullan, köpük olmasın diye miktarı yarıya indir, yumuşatıcı kullanma;** yünlülere uygun, hassas ya da sıvı deterjan koyma.

**4. Eski modellerde Pamuklular 90 °C.** Bosch'un eski WAK serisi kılavuzunda (ör. WAK20200TR) koku satırı farklı yazılmış: **Pamuklular 90 °C programı cihaza çamaşır konmadan uygulanmalı, uygun çamaşır deterjanı kullanılmalı.** Program düğmende Tambur Temizleme yoksa bu satırı uygula. Aynı kılavuz tamburda **klorsuz temizleme maddesi** kullanılmasını, **çelik tel** kullanılmamasını istiyor.

**5. Kapağı ve çekmeceyi açık bırak.** Koku satırındaki ikinci çözüm: **cihazı kullanmayacaksan kapak ve deterjan çekmecesi açık bırakılarak kalan suyun kuruması sağlanmalı.** Bosch'un tambur bakımı notu da aynı şeyi söylüyor: cihaz **her kullanımdan sonra kapak ve deterjan çekmecesi açık şekilde** kurutulmalı.

**6. Düzenli bakımı alışkanlık yap.** Bosch'un tambur bölümündeki uyarı: **sürekli olarak düşük sıcaklıklarda ve az havalandırılan cihazla yıkama yapmak tamburda hasara** neden olabilir. Önerisi: **düzenli olarak tambur temizlik programı yürütülmeli ya da en az 60 °C sıcaklıklarda yıkama yapılmalı.**

## Tambur temizleme hatırlatması

Yeni Bosch modellerinin ekranında tambur temizleme işareti yanıp sönebilir. WGA142X1TR kılavuzunun ekran tablosuna göre bunun anlamı **"Tambur kirli."** Bosch tamburun ve **pis su haznesinin** temizliği ve bakımı için **Tambur Temizleme programını** çalıştırmanı istiyor. Program tablosundaki not: **60 °C ya da daha yüksek sıcaklıktaki bir programı uzun süre kullanmadıysan** gösterge hatırlatıcı olarak yanıp söner. Bosch aynı programı **ilk kullanımdan önce**, **40 °C ve altında sık yıkamada** ve **makine uzun süre kullanılmadığında** da öneriyor.

Markadan bağımsız genel liste için [çamaşır makinesi kokuyor](/blog/camasir-makinesi-kokuyor/), tambur bakımının ayrıntısı için [çamaşır makinesi kireç ve tambur temizliği](/blog/camasir-makinesi-kirec-ve-tambur-temizligi/) yazısına bak. Ekranda bir kod varsa [Bosch çamaşır makinesi hata kodları](/blog/bosch-camasir-makinesi-hata-kodlari/) listesiyle başla.

## Ne zaman servis

Conta ve çekmece temiz, tambur temizliği yapılmış, kapak program sonrası açık bırakılıyor ve koku yine sürüyorsa Bosch'un tablosu kullanıcıya başka adım vermiyor. Bosch'un uyarısı: **usulüne uygun olmayan onarımlar tehlikelidir;** cihazda onarımı **yalnız bunun eğitimini almış uzman personel** yapabilir.

⛔ **Kendin-çöz sınırı burada biter.** Conta, çekmece ve programla temizlik kullanıcıya; makinenin içini açmak servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Koku tamburdan mı, çekmeceden mi, çamaşırdan mı geliyor?
2. Çoğunlukla hangi sıcaklıkta yıkıyorsun?
3. Tambur Temizleme ya da çamaşırsız 90 °C programı denendi mi?
4. Kapak ve çekmece program sonrası açık bırakılıyor mu?
5. Ekranda bir kod ya da tambur temizleme işareti var mı?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

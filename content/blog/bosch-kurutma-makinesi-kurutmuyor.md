---
title: "Bosch kurutma makinesi kurutmuyor"
description: "Bosch kurutma makinesinden çamaşırlar nemli çıkıyorsa Bosch kılavuzundaki sıra: dolum miktarı, kurutma hedefi, tiftik filtresi, nem sensörü ve oda havası."
slug: "bosch-kurutma-makinesi-kurutmuyor"
date: "2026-10-02"
category: "Kurutma makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-02 PAZ alt ajanı (sprint #144, Bosch belirti koşusu). Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile indirildi, üçü de HTTP 200.
# #88: web araması YALNIZ belgelerin yerini bulmak için kullanıldı; hiçbir cümle forumdan/servis sitesinden/üçüncü taraftan alınmadı. Okuma pdftotext -layout, sayfa = PDF sayfası (\f ile sayıldı).
# Yerel kopyalar: ~/Desktop/benservis-icerik/blog-taslaklar/kaynak-bosch-2eki/
#  (H) WTWH8760TR (ısı pompalı)  https://media3.bosch-home.com/Documents/9001851027_A.pdf  60 s.  md5 434892aeecaf2fa1c40307cdac205798  (sayfa atıfları esas olarak bu belgeye göre)
#  (Q) WQG244C1TR               https://media3.bsh-group.com/Documents/9001847050_E.pdf   40 s.  md5 7ff40c3f2504844ca9cbd584bda38b53
#  (W) WTW87460TR               https://media3.bosch-home.com/Documents/9001004673_A.pdf  32 s.  md5 6afdb7f1bfef765af4d9fdc143240ee9
# Arıza tablosu "Çamaşırlar çok nemli." (H s.50-51, Q s.33): program tekstil türüne uygun değil → yeniden kurutma için süreli program · elektrik beslemesi kesildi → oda aydınlatmasını/diğer cihazları kontrol (H) ·
#   doldurma miktarı çok yüksek → maksimum dolum miktarına dikkat · sıcak çamaşırlar daha ıslak algılanır → 1. hemen tamburdan çıkar 2. soğutmak için yay · kurutma hedefi uygun değil → değiştir ·
#   kurutma hedefi uyarlanmamış → uyarla · dolum miktarı çok düşük → süreli program · nem sensörü kirlenmiş → temizle · yoğuşma kabı dolu, kurutma iptal → kabı boşalt, it, programı başlat.
# "Kurutma süresi çok uzun." (H s.49-50, Q s.32): tiftik filtresi kirli → temizle · ortam >30 °C / <15 °C (Q: "15 °C ile 30 °C arasında") · kurulum yerinde yetersiz hava → havalandır · havalandırma boşluğu bloke → açık tut · eşanjör kirli → basit cihaz bakımı.
# W s.23-24 (eski yoğuşmalı): aynı satır "Çamaşırlar doğru biçimde kurutulmamış veya hala çok nemli." + "Tamburdaki nem sensörünü temizleyiniz. İnce bir kireç tabakası sensörleri engelleyebilir" · W s.24 ortam 35 °C üstü.
# Diğer: H s.26 kurutma hedefi değiştirme/uyarlama (+1/+2/+3) · H s.28 süreli programlar · H s.32-34 tiftik filtresi temizliği · H s.45 nem sensörü (süngerle; sert/kaba cisim, ovalama maddesi, çelik tel yok) · H s.43 basit cihaz bakımı (~1 saat, "CArE") · H s.47 onarım yalnız eğitimli uzman.
# BİLEREK YAZILMAYANLAR: ısıtıcı/kompresör/fan/sensör arızası teşhisi (belgede yok) · eşanjör/kondenser sökümü (bu belgelerde kullanıcıya verilen iş "basit cihaz bakımı" programı; programın çağrılma tuşları modele bağlı, numaralı adıma alınmadı)
#   · W'deki nem sensörü cümlesinin baskı hatalı hali ("aşındırma maddesi ve çelik telle temizleyiniz") kullanılmadı; H'nin açık uyarısı alındı · kg dolum değerleri (modele göre) · fiyat/süre (#46).
# Alıntı denetim tablosu: bosch-kurutma-makinesi-kurutmuyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Sünger", "Temiz bez"]
steps:
  - "Program bitince çamaşırları hemen tamburdan çıkar ve soğumaları için yay."
  - "Seçtiğin programın maksimum dolum miktarını aşma."
  - "Hâlâ nemli çamaşırlar için kumaşa uygun bir süreli programla yeniden kurut."
  - "Otomatik programda kurutma hedefini daha kuru bir seviyeye değiştir ya da uyarla."
  - "Tiftik filtresini çıkar, tiftikleri al, filtreyi sıcak akan su altında yıka, kurut ve yerine tak."
  - "Kapağı aç ve tamburdaki nem sensörünü bir süngerle temizle."
  - "Yoğuşma suyu kabı doluysa boşalt, dayanağa kadar it ve programı yeniden başlat."
  - "Cihazın havalandırma boşluğunu açık tut, odayı havalandır."
faq:
  - q: "Program bitti ama çamaşırlar nemli. Makine bozuk mu?"
    a: "Her zaman değil. Bosch'un arıza tablosuna göre sıcak çamaşırlar program sonunda olduklarından daha ıslak algılanır. Bosch'un çözümü çamaşırları kurutmadan hemen sonra tamburdan çıkarıp soğumaları için yaymak. Aynı satırda dolum miktarı, kurutma hedefi ve kirli nem sensörü de sebep olarak sayılıyor."
  - q: "Kurutma hedefini değiştirmek ile uyarlamak arasındaki fark ne?"
    a: "WTWH8760TR kılavuzuna göre kurutma hedefi, çamaşırların program sonunda ne kadar nemli ya da kuru olacağını belirliyor. Değiştirmek, bazı otomatik programlarda daha kuru ya da daha nemli bir hedef seçmek demek. Uyarlamak ise belirli bir hedefle kurutulan çamaşırlar sana göre hâlâ nemliyse aynı hedefi bir kademe ileri almak; kurutma hedefi tuşuna tekrar basınca ekranda +1, +2 ya da +3 görünüyor."
  - q: "Kurutma çok uzun sürüyor, sebebi ne olabilir?"
    a: "Bosch'un tablosundaki sebepler: kirli tiftik filtresi, kurulum yerinde yetersiz hava, kapalı havalandırma boşluğu, kirlenmiş eşanjör ve uygun olmayan oda sıcaklığı. WQG244C1TR kılavuzu ortam sıcaklığının 15 °C ile 30 °C arasında olmasını istiyor; eski yoğuşmalı WTW87460TR'de sınır 35 °C. Eşanjör kirliyse Bosch'un çözümü cihazın basit cihaz bakımı programı."
  - q: "Ekranda CArE yazıyor, ne yapmalıyım?"
    a: "WTWH8760TR kılavuzuna göre cihaz belirli bir kullanım süresinden sonra basit cihaz bakımı yapmanı öneriyor ve uyarı bakım yapılana kadar tekrar görünüyor. Basit bakım yaklaşık 1 saat sürüyor; önce tiftik filtresi temizleniyor ve yoğuşma suyu kabı boşaltılıyor. Programın nasıl çağrıldığı modele göre değiştiği için kendi kılavuzundaki Cihaz bakımı bölümüne bak."
images:
  coverAlt: "Kapağı açık bir kurutma makinesinin önünde masaya yayılmış hafif nemli havlular ve çıkarılmış tiftik filtresi"
---

Program bitti, ekranda "End" yazıyor ama havlular hâlâ nemli. Bosch'un kurutma makinesi kılavuzlarındaki arıza tablosunda bu durumun satırı kısaca **"Çamaşırlar çok nemli."** Bosch'un bu satırda saydığı sebeplerin çoğu kullanımla ilgili: fazla ya da çok az doldurulmuş tambur, kumaşa uymayan program, düşük kalmış kurutma hedefi, kirlenmiş nem sensörü ve dolan yoğuşma kabı. Satırın ilk sebebi ise şaşırtıcı biçimde basit: **sıcak çamaşırlar program sonunda olduklarından daha ıslak algılanır.** Bu yazıda Bosch'un WTWH8760TR, WQG244C1TR ve WTW87460TR kılavuzlarındaki sırayı açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Çamaşırları hemen çıkar ve yay → dolum miktarını aşma → nemli kalanlar için süreli program → kurutma hedefini yükselt → tiftik filtresini yıka → nem sensörünü süngerle sil → yoğuşma kabını boşalt → odayı havalandır, havalandırma boşluğunu açık tut.

## Adım adım: evde denenecekler

**1. Çamaşırları hemen çıkar ve yay.** Bosch'un tablosundaki sebep: **sıcak çamaşırlar genelde program sonunda olduklarından daha ıslak şekilde algılanır.** Çözüm iki adım: **çamaşırları kurutma sonrasında hemen tamburdan çıkar, soğutmak için yay.** Eski WTW87460TR kılavuzu aynı şeyi "ısının yok olmasını bekleyiniz" diye yazıyor. Ekranda **"Hot"** görünüyorsa cihaz çamaşırları soğutuyor; Bosch'a göre "Hot" sönünce çamaşırlar soğutulmuş oluyor.

**2. Dolum miktarına dikkat et.** Tablodaki ikinci sebep: **doldurma miktarı çok yüksek.** Bosch'un çözümü: **programların maksimum dolum miktarına dikkat et.** Her programın sınırı kılavuzdaki program tablosunda yazıyor. Tersi de sorun: **dolum miktarı çok düşükse** Bosch yeniden kurutma için **süreli program** öneriyor.

**3. Nemli kalanları süreli programla tamamla.** **Seçilen program tekstil türüne uygun değilse** Bosch'un çözümü **yeniden kurutma için bir süreli program ayarlamak.** Bosch'a göre süreli programlar, süre dolunca çamaşır henüz kurumamış olsa da sonlanıyor; tek parça çamaşırlar ve ince kumaşlar için uygun. WTWH8760TR'nin program tablosunda **Kurutma Süreli** programı **ön kurutması yapılmış ya da hafif nemli çamaşırlar** ve **çok katmanlı, kalın çamaşırlar** için gösteriliyor.

**4. Kurutma hedefini yükselt.** Bosch'a göre kurutma hedefi, çamaşırların program sonunda **ne kadar nemli ya da kuru** olacağını belirliyor. Tablodaki iki ayrı satır: **kurutma hedefi uygun değil → değiştir** ve **kurutma hedefi uyarlanmamış → uyarla.** WTWH8760TR'de otomatik bir program seçip kurutma hedefi seçeneğine bastığında ekranda öngörülen hedef görünüyor; uyarlamak için tuşa **tekrar** bastığında ekranda **"+1", "+2" ya da "+3"** çıkıyor. Bosch'un eski WTW87460TR kılavuzu bu ince ayar için şunu ekliyor: kurutma süresi uzar ama **sıcaklık artmaz.**

**5. Tiftik filtresini temizle.** "Kurutma süresi çok uzun" satırının ilk sebebi **kirli tiftik filtresi.** WTWH8760TR'deki sıra: **kapağı aç, kapaktaki tiftikleri temizle, iki parçalı filtreyi çıkar, ağızdaki tüyleri temizle** (hava kanalına tüy düşmesin), **filtreyi ayır ve aç, tiftikleri gider, iki filtreyi sıcak akan suyun altında temizleyip kurut,** sonra kapatıp birleştir ve yerine tak. Bosch'un notu: cihaz tarif edildiği gibi temizlenmezse fonksiyonları kötü etkilenebilir.

**6. Nem sensörünü sil.** Tablodaki bir diğer sebep: **nem sensörü kirlenmiş.** Bosch'a göre zamanla sensörün üzerinde **kireç, deterjan ve bakım ürünü artıkları** birikebiliyor; eski WTW87460TR kılavuzu **ince bir kireç tabakasının sensörleri engelleyebileceğini** yazıyor. Yapılacak iş: **kapağı aç, nem sensörünü bir süngerle temizle.** Bosch'un uyarısı: **sert ya da kaba cisimler, ovalama maddeleri ya da çelik tel** kullanma; sensör zarar görebilir.

**7. Yoğuşma suyu kabını boşalt.** Tablonun son satırı: **cihaz, dolu bir yoğuşma kabı nedeniyle kurutmayı iptal etti.** Bosch'un sırası: **yoğuşma suyu kabını yatay olarak çıkar ve boşalt, dayanak noktasına kadar geri it, programı başlat.** Ayrıntısı [kurutma makinesi su tankı dolu uyarısı](/blog/kurutma-makinesi-su-tanki-dolu-uyarisi/) yazısında.

**8. Oda havasını ve havalandırma boşluğunu kontrol et.** Kurutma uzunsa Bosch'un saydığı diğer sebepler: **kurulum yerinde yetersiz hava** → **kurulum yerini havalandır;** **cihazın havalandırma boşluğu bloke** → **açık tutulduğundan emin ol.** WQG244C1TR kılavuzu ortam sıcaklığının **15 °C ile 30 °C arasında** olmasını istiyor.

## Eşanjör bakımı ve CArE uyarısı

Bosch'un ısı pompalı modellerinde "Kurutma süresi çok uzun" satırında bir sebep daha var: **eşanjör kirlenmiş.** Çözüm cihazı açmak değil, makinenin kendi **basit cihaz bakımı** programı. WTWH8760TR kılavuzuna göre bu bakım **yaklaşık 1 saat** sürüyor; cihaz uzun kullanımdan sonra bakımı kendisi hatırlatıyor ve ekranda **"CArE"** iletisi bakım yapılana kadar görünüyor. Bakımdan önce tiftik filtresi temizleniyor ve yoğuşma suyu kabı boşaltılıyor. Programın hangi tuşla çağrıldığı modele göre değiştiği için kendi kılavuzundaki **Cihaz bakımı** bölümüne bak.

Paneldeki diğer işaretlerin anlamı [Bosch kurutma makinesi sembolleri ve anlamları](/blog/bosch-kurutma-makinesi-sembolleri-ve-anlamlari/) yazısında. Markadan bağımsız genel liste için [kurutma makinesi kurutmuyor](/blog/kurutma-makinesi-kurutmuyor/), filtre bakımının genel anlatımı için [kurutma makinesi filtre ve kondenser temizliği](/blog/kurutma-makinesi-filtre-ve-kondenser-temizligi/) yazısına bak.

## Ne zaman servis

Dolum doğru, kurutma hedefi yükseltilmiş, filtre ve nem sensörü temiz, yoğuşma kabı boş, oda havalandırılmış ve çamaşırlar yine nemli çıkıyorsa Bosch'un tablosu kullanıcıya başka adım vermiyor. Bosch'un uyarısı: **usulüne uygun olmayan onarımlar tehlikelidir;** cihazda onarımı **yalnız bunun eğitimini almış uzman personel** yapabilir.

⛔ **Kendin-çöz sınırı burada biter.** Program, filtre, sensör ve yoğuşma kabı kullanıcıya; cihazın içi servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Hangi programı ve hangi kurutma hedefini seçtin?
2. Tamburda ne kadar çamaşır vardı?
3. Tiftik filtresi ve nem sensörü en son ne zaman temizlendi?
4. Ekranda "CArE" ya da başka bir uyarı var mı?
5. Cihaz hangi odada, oda sıcaklığı ve havalandırması nasıl?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

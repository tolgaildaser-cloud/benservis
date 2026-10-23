---
title: "Bosch çamaşır makinesi E10 hatası: i-DOS pompası bloke"
description: "Bosch çamaşır makinesinde E:10-00, -10 ya da -20, akıllı dozajlama pompasının bloke olduğunu gösterir. Çekmece temizliği, manuel dozaj ve servis sınırı."
slug: "bosch-camasir-makinesi-e10-hatasi"
date: "2026-10-23"
category: "Çamaşır Makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 2, küme B, fork A). Konu seçimi: origin/main'de bosch-camasir-makinesi-e10-hatasi yok.
#   Yakın slug'lar: siemens-camasir-makinesi-e10-hatasi (kardeş marka, Siemens WN54C2A0TR kılavuzu; bu yazı Bosch WGB244A0TR/WGA244A0TR kılavuzlarından),
#   bosch-camasir-makinesi-deterjan-almiyor (eski WAK çekmecesi, E:10 yok), bosch-camasir-makinesi-hata-kodlari (hub, E:10 yok).
# GSC: https___www-3…6 dışa aktarımlarında bu sorgu yok.
# Arama kanıtı (bu koşuda Google otomatik tamamlama, hl=tr gl=tr): tohum "bosch çamaşır makinesi e10" → 1. "…e10 hatası", 2. "…e10 hatası nasıl giderilir",
#   3. "…e10 hatası nedir", 4. "bosch serie 4 çamaşır makinesi e10 hatası".
# Belgeler yerel kopya (blog-taslaklar/kaynak-bosch-camasir-sprint/, BSH media3.bsh-group.com kaynaklı). #88: forum/servis sitesi kullanılmadı.
#   Okuma pdftotext -layout, sayfa = PDF sayfası (\f ile ayrıldı).
#  (H) Bosch WGB244A0TR kullanım kılavuzu ve kurulum talimatları  9001708433_H.pdf  56 s.  md5 a02d83edad66dc95cd9392b467b767f1
#  (G) Bosch WGA244A0TR kullanım kılavuzu ve kurulum talimatları  9001709506_A.pdf  60 s.  md5 23d5ed1b30b9787b05f53f1137de1679
# E:10 satırı H s.42-43, G s.41 · "program başlamıyor" satırında pompa bloke G s.43 · çekmece temizliği H s.37-38, G s.35-36 · i-DOS tuşları H s.22, G s.23
#   · ekran simgeleri H s.21 · deterjan notları H s.28 · sirke uyarısı H s.29 · dozaj haznesi doldurma H s.32 · vızıltı sesleri G s.47 · deterjan artığı G s.49
#   · tip etiketi yeri G s.53.
# BİLEREK YAZILMAYANLAR: pompa ünitesini söküp içini açma ya da onarma · pompa ünitesini suyla yıkama (kılavuz yasaklıyor) · elektrik bağlantısına müdahale
#   · Siemens kılavuzundaki farklı adımlar · kodu silme hilesi · hangi deterjan markası · fiyat/ücret (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: bosch-camasir-makinesi-e10-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~20 dakika"
  totalTime: "PT20M"
  cost: "Ücretsiz"
  tools: ["Yumuşak, nemli bir bez", "Kuru bir bez", "Makinenin kullanım kılavuzu"]
steps:
  - "Makineyi kapat ya da modeline göre bekleme moduna al; program çalışırken çekmeceyi açma."
  - "Deterjan bölmesini dışarı çek, tertibatı aşağı doğru bastır ve bölmeyi çıkar."
  - "Pompa ünitesini çıkar; suya daldırma, bulaşık makinesine koyma ve arkasındaki elektrik bağlantısını nemden koru."
  - "Deterjan çekmecesini kapağının kilidini açarak çıkar ve içindeki deterjanı ya da yumuşatıcıyı boşalt."
  - "Pompa ünitesini nemli bir bezle sil; çekmeceyi ve kapağını yumuşak, nemli bir bezle temizle, bölmenin gövdesini de makinenin içinde sil."
  - "Çekmeceyi, kapağını ve pompa ünitesini kurula, yerlerine tak ve bölmeyi dayanak noktasına kadar içeri it."
  - "Makineyi aç; E:10 yeniden görünürse akıllı dozajlamayı i-DOS tuşuyla kapatıp manuel dozajla yıka ve müşteri hizmetlerini ara."
faq:
  - q: "Bosch çamaşır makinesinde E10 ne demek?"
    a: "Bosch'un WGB244A0TR ve WGA244A0TR kılavuzlarında E:10 -00, -10 ve -20 aynı satırda: akıllı dozajlama sistemi pompası bloke. Bu, deterjanı ve yumuşatıcıyı otomatik dozajlayan i-DOS sisteminin pompası. Kılavuzun çözümü deterjan çekmecesini, yani pompa ünitesini temizlemek; arıza sürerse müşteri hizmetlerini aramak."
  - q: "E10 varken çamaşır yıkayabilir miyim?"
    a: "Evet. Kılavuz, arıza giderilene kadar akıllı dozajlama sistemini devre dışı bırakıp manuel dozajlama yapabileceğini yazıyor. i-DOS tuşuna kısa basmak akıllı dozajlamayı açıp kapatıyor; deterjanı manuel dozajlama haznesine koyarak yıkayabilirsin."
  - q: "Pompa ünitesini musluğun altında yıkayabilir miyim?"
    a: "Hayır. Bosch'a göre pompa ünitesinde elektrikli bileşenler var ve bunlar su ile temas hâlinde hasar görebilir. Pompa ünitesi bulaşık makinesinde yıkanmamalı, suya daldırılmamalı; nemli bir bezle temizlenmeli. Arkadaki elektrikli bağlantı da nemden, deterjan ve yumuşatıcı artıklarından korunmalı."
  - q: "Dozaj haznesine sirke koyabilir miyim?"
    a: "Hayır. WGB244A0TR kılavuzu akıllı dozajlama sistemi için dozaj ayarlama haznesine sirke doldurulmamasını açıkça yazıyor. Haznede başka bir ürüne geçmek istiyorsan önce deterjan bölmesini temizlemen isteniyor."
  - q: "Makineyi açınca kısa bir vızıltı duyuyorum, bu E10'la ilgili mi?"
    a: "Tek başına değil. WGA244A0TR kılavuzuna göre cihaz açıldıktan sonra akıllı dozajlama sistemi bir fonksiyon testi yürütür ve kısa bir vızıltı normal çalışma sesidir. Yıkama ya da yumuşatma öncesindeki uzun vızıltı da sistemin dozajlama yaptığını gösterir."
images:
  coverAlt: "Beyaz önden yüklemeli bir çamaşır makinesinin üstte duran, yarı açık deterjan çekmecesi"
  steps:
    - "Kapalı ekranlı bir çamaşır makinesinin kumanda paneli"
    - "Çamaşır makinesinden tamamen dışarı çekilmiş bir deterjan bölmesi"
    - "Tezgâhın üstünde kuru bir bezin üzerine konmuş küçük plastik bir pompa ünitesi"
    - "Kapağı açılmış, iki hazneli boş bir deterjan çekmecesi"
    - "Nemli bir bezle silinen deterjan çekmecesinin iç yüzeyi"
    - "Yerine geri itilmiş ve kapanmış bir deterjan çekmecesi"
    - "Çamaşır makinesinin açık deterjan çekmecesinin önünde duran boş bir ölçü kabı"
---

Ekranda E:10 -00, E:10 -10 ya da E:10 -20 yanıyor ve makine yıkamaya başlamıyor. Bosch'un i-DOS akıllı dozajlama sistemli WGB244A0TR ve WGA244A0TR kılavuzlarında bu üç kod tek satırda: **akıllı dozajlama sistemi pompası bloke.** İyi haber şu ki kılavuzun ilk çözümü senin yapabileceğin bir temizlik. Bu yazıda kodun anlamını, çekmece ve pompa ünitesi temizliğini ve servisi beklerken nasıl yıkamaya devam edeceğini bu iki kılavuzdan sırayla topladık. Modelinde tuş adları farklı olabilir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E:10 = i-DOS pompası bloke. Makineyi kapat, deterjan bölmesini çıkar, pompa ünitesini nemli bezle sil (suya sokma), çekmeceyi temizle, kurulayıp tak. Kod geri gelirse akıllı dozajlamayı kapatıp manuel dozajla yıka, müşteri hizmetlerini ara.

## Ekran ne söylüyor

| Gördüğün | Kılavuza göre anlamı | Kim ne yapar |
|---|---|---|
| **E:10 -00 / -10 / -20** | Akıllı dozajlama sistemi pompası bloke | 🛠️ Çekmece ve pompa ünitesi temizliği |
| **Akıllı dozaj simgesi yanıp sönüyor** | Dozajlama haznesi minimum seviyenin altında | 🛠️ Hazneyi doldur |
| **Program başlamıyor** | Bölme dayanağa kadar itilmemiş ya da pompa bloke | 🛠️ Bölmeyi it, gerekirse temizlik |
| **Açılışta kısa vızıltı** | Akıllı dozajlamanın fonksiyon testi | ⏳ Normal |
| **Temizlikten sonra E:10 yine var** | Arıza sürüyor | 🔧 Müşteri hizmetleri |

## Adım adım: evde denenecekler

**1. Makineyi kapat.** WGA244A0TR kılavuzu E:10 için önce **cihazı kapatmanı** istiyor; WGB244A0TR'nin temizlik bölümü cihazı **bekleme (Standby) moduna** getirerek başlıyor. Program çalışırken çekmeceyle uğraşma.

**2. Deterjan bölmesini çıkar.** Bölmeyi dışarı çek, ardından **tertibatı aşağıya doğru bastır** ve deterjan bölmesini çıkar. WGB244A0TR kılavuzu sürecin animasyonunu görmek için kılavuzdaki QR kodun taratılmasını öneriyor.

**3. Pompa ünitesini çıkar, suya sokma.** Bu adımda dikkatli ol. Bosch'un uyarısına göre **pompa ünitesinde elektrikli bileşenler bulunur** ve su ile temas hâlinde hasar görebilir. Pompa ünitesi **bulaşık makinesinde yıkanmamalı, suya daldırılmamalı**; arkadaki elektrikli bağlantı neme, deterjana ve yumuşatıcı artıklarına karşı korunmalı.

**4. Çekmeceyi aç ve boşalt.** Deterjan çekmecesini **kapağının kilidini açarak** çıkar ve içini boşalt. Bosch, dozaj haznesindeki sıvı deterjanı ya da yumuşatıcıyı başka bir ürünle değiştirmek istediğinde ya da bölme kirlendiğinde de aynı temizliği öneriyor.

**5. Temizle.** Pompa ünitesini **nemli bir bezle** sil. Deterjan çekmecesini ve kapağını **yumuşak, nemli bir bez ya da bir püskürtme hortumuyla** temizle. Sonra deterjan bölmesinin gövdesini **makinenin içinde** sil.

**6. Kurula ve yerine tak.** Çekmeceyi, kapağını ve pompa ünitesini **kurula** ve yerlerine yerleştir. Bölmeyi içeri it. WGA244A0TR kılavuzunun "program çalışmaya başlamıyor" satırı ayrıca bölmenin **dayanak noktasına kadar** itilmesini istiyor; kılavuza göre bölme sonuna kadar itilmemişse program çalışmaya başlamaz.

**7. Makineyi aç, kodu izle.** Makineyi aç. Kılavuza göre pompa ünitesini temizledikten sonra **gösterge yeniden belirirse müşteri hizmetlerini ara.** O zamana kadar yıkamaya devam edebilirsin: arıza giderilene kadar **akıllı dozajlama sistemini devre dışı bırakıp manuel dozajlama** yapabilirsin. i-DOS tuşuna kısa basmak akıllı dozajlamayı açıp kapatıyor; deterjanı manuel dozajlama haznesine koy. WGB244A0TR kılavuzuna göre akıllı dozaj sistemini etkinleştirdiğinde ya da devre dışı bıraktığında **ayar kaydedilir**; temizlik ya da servis sonrası sistemi aynı tuşla yeniden açmayı unutma.

## Haznede ne olmamalı

Bosch'un deterjan notları akıllı dozajlamayla birlikte okunmalı. Dozajlama haznesine **yalnız uygun sıvı deterjan ve yumuşatıcı** doldurulmalı ve azami dolum işareti aşılmamalı. Ekleme yapacaksan aynı üründen ekle; başka bir ürüne geçeceksen önce bölmeyi temizle. Kılavuz sıvı deterjanlarda yalnız kendiliğinden akan ürünlerin kullanılmasını, farklı sıvı deterjanların ve deterjanla yumuşatıcının birbirine karıştırılmamasını, kombine ve çok yoğunlaştırılmış ürünlerin kullanılmamasını istiyor. WGB244A0TR kılavuzunda bir satır daha var: **dozaj ayarlama haznesine sirke doldurmayınız.** Akıllı dozajlama açıkken aşırı dozajlama ya da köpüklenmeyi önlemek için manuel dozajlama haznesine ekstra deterjan veya yumuşatıcı eklenmemeli. Ekranda akıllı dozaj simgesi yanıp sönüyorsa haznenin minimum dolum seviyesinin altına inildiği anlamına geliyor; hazneyi doldurduktan hemen sonra, sıvının kurumaması için kapağını kapat. Çamaşırlarda deterjan artığı görüyorsan WGA244A0TR'ye göre haznedeki deterjan uygun olmayabilir; hazneyi boşaltıp temizlemek ve yeniden doldurmak öneriliyor.

## Ne zaman servis

- Pompa ünitesi ve çekmece temizlendiği hâlde E:10 geri geliyorsa
- Pompa ünitesi ya da arkasındaki bağlantı ıslandıysa veya hasar gördüyse
- Bölme dayanağa kadar itildiği hâlde program başlamıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Çekmece, kapağı, pompa ünitesinin dış yüzeyi ve bölmenin gövdesi sende; pompa ünitesinin içi, elektrik bağlantısı ve makinenin gövdesinin arkası yetkili serviste.

## Servisi aramadan önce kısa özet

1. Ekrandaki kod tam olarak ne: E:10 -00, -10 ya da -20?
2. Çekmece ve pompa ünitesi temizlendi mi?
3. Haznede hangi ürün var, son zamanda değiştirildi mi?
4. Ürün numarası (E-Nr.) ve imalat numarası (FD) ne? Tip etiketi modele göre kapağın, bakım kapağının iç tarafında ya da cihazın arkasında.

Kodu ve belirtiyi benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Kardeş markadaki aynı kod [Siemens çamaşır makinesi E:10 hatası](/blog/siemens-camasir-makinesi-e10-hatasi/) yazısında, eski Bosch çekmecesi [Bosch çamaşır makinesi deterjan almıyor](/blog/bosch-camasir-makinesi-deterjan-almiyor/) rehberinde, diğer kodlar [Bosch çamaşır makinesi hata kodları](/blog/bosch-camasir-makinesi-hata-kodlari/) sayfasında. Bil, gör, çağır.

---
title: "Siemens çamaşır makinesi E:36-25 hatası"
description: "Siemens çamaşır makinesinde E:36-25 ya da E:36-26: deterjanlı su pompası tıkanmış. Suyu boşaltma ve pis su pompası temizliği Siemens'in sırasıyla."
slug: "siemens-camasir-makinesi-e36-25-hatasi"
date: "2026-09-28"
category: "Çamaşır makinesi"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile indirildi, sekizi de HTTP 200; pdftotext (düz ve -layout) ile okundu, tablo satırı sayfa görüntüsüyle (pdftoppm) teyit edildi.
# Web araması kullanılmadı: belgeler siemens-home.bsh-group.com/tr ürün sayfalarındaki kılavuz bağlantısından bulundu. Hepsi media3.bsh-group.com.
#  A) WG54K2Y0TR  https://media3.bsh-group.com/Documents/9002046535_A.pdf  52 s.  md5 8053c84dd7b5f803d86e4c3d49bacec5  (sayfa atıfları bu belgeye göre)
#  B) WG64K2Y0TR  https://media3.bsh-group.com/Documents/9002056894_B.pdf  52 s.  md5 f4cbecc8c654c2e7e933fca34e4c34b3
#  C) WG42K2Z0TR  https://media3.bsh-group.com/Documents/9001980893_B.pdf  48 s.  md5 c0e42ad468f8df3dbe9f2fc0741d42d8
#  D) WG44K2Z0TR  https://media3.bsh-group.com/Documents/9001980838_B.pdf  48 s.  md5 3b20397a2bd4b264a9d4ed3119260026
#  E) WG52K2Z0TR  https://media3.bsh-group.com/Documents/9002023719_C.pdf  52 s.  md5 6f1aa61eddb8e0eaf80a15ec35688479
#  F) WG64K2Z0TR  https://media3.bsh-group.com/Documents/9002013652_D.pdf  52 s.  md5 991c66e45c79ce9de0099d43e6f4e95a
#  G) WG52A203TR  https://media3.bsh-group.com/Documents/9002046516_A.pdf  44 s.  md5 003935ece93b182aa6038f0e4c226126
#  K) WN54C2A0TR  https://media3.bsh-group.com/Documents/9001771585_E.pdf  56 s.  md5 0659013f7dc77a65864215555fabb2f5
# E:36-25-26 satırı sekiz belgede birebir aynı (A s.40, B s.40, C s.37, D s.37, E s.38, F s.39, G s.34, K s.42):
#   "E:36 -25 -26 | Deterjanlı su pompası tıkanmış. ▶ Pis su pompasını temizleyiniz."
# Pompa boşaltma + temizleme: A s.36-38 ("18.3 Pis su pompasının temizlenmesi"); "en az yılda bir kez" A s.36; DİKKAT haşlanma A s.37.
# "Her iki kanatlı çarkın da döndürülebildiğinden emin olunuz" yalnız G s.32 ve K s.40'ta — yazıda böyle belirtildi.
# Renk ve kir tutucu kâğıt uyarısı: A s.27 ve s.38 (C, D, K'de yok). Tıkırtı satırı: A s.43. Ceplerdeki cisimler: A s.26.
# Bilerek YAZILMAYANLAR: pompa motoru/kart teşhisi; "fişi çek-bekle" reseti (E:36-25 satırında yok);
#   temizlik sonrası "1 litre su + boşaltma programı" adımı (Siemens kılavuzlarının pompa bölümünde YOK — eklenmedi).
# Alıntı denetim tablosu: siemens-camasir-makinesi-e36-25-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~30 dakika"
  totalTime: "PT30M"
  cost: "Ücretsiz"
  tools: ["Uygun büyüklükte bir kap"]
steps:
  - "Musluğu kapat."
  - "Cihazı bekleme (Standby) moduna getir ve fişini prizden çek."
  - "Bakım kapağını açıp çıkar ve açıklığın altına uygun bir kap koy."
  - "Su boşaltma hortumunu tutma düzeneğinden çıkar, kapatma kapağını çekip suyu kaba boşalt."
  - "Boşaltınca kapatma kapağına bastır ve hortumu tutma düzeneğine geri tak."
  - "Pompa kapağını dikkatlice çıkar; kiri ve sıkışmış filtre ünitesini temizle."
  - "Pompa kapağının iç kısmını, vida dişli bölümünü ve pompa gövdesini temizle."
  - "Pompa kapağını takıp dayanağa kadar çevir, tutamağın dik durduğunu gör ve bakım kapağını kapat."
faq:
  - q: "Siemens çamaşır makinesinde E:36-25 ne demek?"
    a: "Siemens'in yeni nesil çamaşır makinesi kılavuzlarında E:36-25 ve E:36-26'nın karşılığı: deterjanlı su pompası tıkanmış. Tablodaki tek talimat pis su pompasını temizlemek. Satır, taradığımız sekiz Siemens Türkiye kılavuzunda birebir aynı."
  - q: "E:36-25 ile E:36-10 aynı hata mı?"
    a: "Hayır. Siemens tablosunda E:36-10 (E:30-80 ile birlikte) deterjanlı suyun cihazdan pompalanıp boşaltılamadığı satırdır ve sebepleri hortum, gider, pompa ve fazla deterjandır. E:36-25 ve E:36-26 ise doğrudan pompanın tıkandığını söyler; talimat yalnızca pis su pompasının temizlenmesidir."
  - q: "Pompayı açarken nelere dikkat etmeliyim?"
    a: "Siemens önce musluğun kapatılmasını, cihazın bekleme moduna alınmasını ve fişin prizden çekilmesini istiyor. Yüksek sıcaklıkta yıkama yapıldıysa deterjanlı su sıcak olur; kılavuz sıcak suya dokunulmamasını söylüyor. Pompada su kalmış olabileceği için pompa kapağı dikkatlice çıkarılmalı."
  - q: "Pompa neden tıkanıyor, nasıl önlerim?"
    a: "Siemens kılavuzlarına göre renk ve kir tutan örtüler gider pompasını tıkayabilir; bu kâğıtlar yalnızca çamaşır filesi içinde kullanılmalı. Makineyi çalıştırmadan önce ceplerdeki tüm cisimler boşaltılmalı. Kılavuz pis su pompasının tıkanma ya da tıkırtı gibi durumlarda ve düzenli olarak en az yılda bir kez temizlenmesini istiyor."
images:
  coverAlt: "Çamaşır makinesinin ön alt köşesinde açılmış bakım kapağı, altında su toplamak için konmuş geniş bir kap"
---

Yıkama durdu, tamburda su kaldı ve ekranda **E:36-25** ya da **E:36-26** yazıyor. Siemens'in yeni nesil çamaşır makinesi kılavuzlarında bu satırın karşılığı tek cümle: **"Deterjanlı su pompası tıkanmış."** Talimat da tek: **pis su pompasını temizle.** Bu yazıda o temizliği, Siemens kılavuzundaki sırayla ve güvenlik uyarılarıyla adım adım anlatıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E:36-25 / E:36-26 = Siemens'e göre deterjanlı su pompası tıkanmış. Sıra şu: musluğu kapat → bekleme modu, fişi çek → bakım kapağını aç, altına kap koy → suyu boşalt → pompa kapağını çıkar, kiri temizle → kapağı dayanağa kadar çevir, bakım kapağını kapat. Kod sürerse → müşteri hizmetleri.

## Adım adım: evde denenecekler

**1. Musluğu kapat.** Siemens'in pis su pompasını boşaltma talimatı buradan başlar: **musluğu kapat.**

**2. Bekleme modu ve fiş.** Cihazı **bekleme (Standby)** moduna getir, ardından **fişini elektrik şebekesinden ayır.**

**3. Bakım kapağını aç, kabı yerleştir.** Ön alttaki **bakım kapağını** açıp çıkar. Yıkama suyunu boşaltmak için açıklığın altına **uygun bir kap** yerleştir.

**4. Suyu boşalt.** **Su boşaltma hortumunu** tutma düzeneğinden çıkar. Deterjanlı suyun kaba akması için **kapatma kapağını çekip çıkar.** ⚠️ Siemens'in uyarısı: yüksek sıcaklıkta yıkama yapıldıysa deterjanlı su **sıcak** olur, sıcak suya dokunma.

**5. Hortumu yerine al.** Su bittikten sonra **kapatma kapağına bastır** ve su boşaltma hortumunu tutma düzeneğine geri tak.

**6. Pompa kapağını çıkar, kiri al.** Pompada su kalmış olabileceği için **pompa kapağını dikkatlice** çıkar. Kılavuza göre yoğun kir yüzünden pompa haznesindeki **filtre ünitesi sıkışabilir**; kiri gider ve filtre ünitesini çıkar. Siemens, pompa kapağının temizlik için sökülebilen iki parçadan oluştuğunu yazıyor.

**7. Kapağı ve gövdeyi temizle.** Pompa kapağının **iç kısmını**, **vida dişli bölümünü** ve **pompa gövdesini** temizle. WG52A203TR ve WN54C2A0TR kılavuzları burada bir kontrol daha istiyor: **her iki kanatlı çarkın da döndürülebildiğinden** emin ol.

**8. Kapağı kapat.** Pompa kapağını, bileşenlerinin doğru takıldığından emin olarak tak ve **dayanağa kadar çevir.** Siemens'e göre pompa kapağının **tutamağı dik konumda** durmalı. Son olarak **bakım kapağını takıp kapat.**

## E:36-25 tam olarak neyi söylüyor?

Siemens'in tablosunda iki ayrı pompa satırı var ve karıştırılması kolay:

| Kod | Siemens'in karşılığı | Talimat |
|---|---|---|
| **E:36-10 / E:30-80** | Deterjanlı su cihazdan pompalanıp boşaltılmıyor | Hortum montajı, gider, pompa kapağı, pompa temizliği, deterjan miktarı |
| **E:36-25 / E:36-26** | Deterjanlı su pompası tıkanmış | **Pis su pompasını temizle** |

E:36-25 ve E:36-26'da Siemens hortuma ya da gidere işaret etmiyor; doğrudan pompanın kendisini gösteriyor. Bu yüzden ilk iş, yukarıdaki pompa temizliği.

Tablonun başka bir satırı da aynı yere çıkıyor: **deterjanlı su pompasında tıkırtı** duyuluyorsa Siemens'e göre tahliye pompasında **yabancı cisim** vardır ve talimat yine pis su pompasının temizliğidir. Pompadan bozuk para, toka gibi bir cisim çıkarsa markadan bağımsız anlatım için [çamaşır makinesine cisim kaçtı](/blog/camasir-makinesine-cisim-kacti/) yazısına bakabilirsin.

## Tekrarını önlemek için

Siemens kılavuzlarından çıkan üç alışkanlık:

- **Cepleri boşalt.** Kılavuza göre çamaşırlarda unutulan cisimler çamaşırlara ve tambura zarar verebilir; çalıştırmadan önce ceplerdeki tüm cisimler boşaltılmalı.
- **Renk tutucu kâğıdı filede kullan.** WG54K2Y0TR kılavuzunun uyarısı: renk ve kir tutan örtüler **gider pompasını tıkayabilir**; bu kâğıtları yalnızca **çamaşır filesi** içinde kullan.
- **Pompayı düzenli temizle.** Siemens pis su pompasının tıkanma ya da tıkırtı sesi gibi durumlarda ve düzenli olarak **en az yılda bir kez** temizlenmesini istiyor.

Tahliye tarafının markadan bağımsız anlatımı için [çamaşır makinesi tahliye filtresi temizleme](/blog/camasir-makinesi-tahliye-filtresi-temizleme/) rehberimize de bakabilirsin.

## Sınır nerede biter

Pompa temiz, kapak dayanağa kadar kapalı, tutamak dik ve E:36-25 yine geliyorsa kullanıcıya düşen iş bitmiştir. Siemens kılavuzunun arıza bölümündeki genel uyarı: usulüne aykırı onarımlar tehlike yaratır ve cihazda onarımı yalnızca bunun eğitimini almış uzman personel yapabilir; onarımda yalnızca orijinal yedek parça kullanılmalıdır.

⛔ **Kendin-çöz sınırı burada biter.** Bakım kapağının arkası, pompa kapağı ve filtre ünitesi kullanıcıya; pompanın motoru ve makinenin içi servise aittir.

Aradığında Siemens'in istediği bilgiler: cihazın ürün numarası (**E-Nr.**), imalat numarası (**FD**) ve sayma numarası (**Z-Nr.**). Diğer Siemens kodları için [Siemens çamaşır makinesi hata kodları](/blog/siemens-camasir-makinesi-hata-kodlari/) yazısına bakabilirsin.

Ekrandaki kodu ve makinenin modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

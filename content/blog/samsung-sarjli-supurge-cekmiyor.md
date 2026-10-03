---
title: "Samsung şarjlı süpürge çekmiyor (Jet 70)"
description: "Samsung Jet 70 şarjlı süpürgenin emişi azaldıysa ya da titreme sesi geliyorsa: toz haznesi, metal ağ filtre, mikro filtre, boru ve fırça. Samsung'un sırası."
slug: "samsung-sarjli-supurge-cekmiyor"
date: "2026-10-03"
category: "Süpürge"
# --- Provenans (yayında görünmez) ---
# 2026-10-03 PAZ alt ajanı (sprint #144, 3 Eki 2. koşu, süpürge). Belge bu koşuda curl -sL -A "Mozilla/5.0" ile Samsung'un KENDİ alan adından indirildi
#   (org.downloadcenter.samsung.com → downloadcenter.samsung.com, 1 yönlendirme, samsung.com alt alanı), HTTP 200. Adres samsung.com/tr/support/model/VS15T7036R5/TR/ sayfasından.
#   Yerel: blog-taslaklar/kaynak-supurge-3eki/ · okuma pdftotext -layout, sayfa = PDF sayfası (= basılı sayfa no).
#  S3) Samsung VS7000 (Jet 70: VS15T7036R5 / VS20T7536T5) kullanım kılavuzu  https://downloadcenter.samsung.com/content/UM/202303/20230330112026139/O_DJ68-00837L-06_IB_VS7000_TR_TR_230314.pdf  36 s.  md5 5b804a5dd032501c44783d85457d7907
# Tablo s.30 "Emiş gücü aniden azalıyor ve elektrik süpürgesi bir titreme sesi çıkarıyor." → "Bir fırça, toz haznesi veya borunun yabancı madde ile tıkalı olup olmadığını kontrol edin ve çıkarın."
#   "Borunun, toz haznesinin tozla tamamen dolu olup olmadığını kontrol edin. Doluysa hazneyi boşaltın." "Filtrenin kirli olup olmadığını kontrol edin. Kirliyse filtreyi temizleyin."
#   "Elektrik süpürgesi çalışmıyor." → "Borunun, toz haznesinin veya fırçanın engellenmiş olup olmadığını kontrol edin." "Yıkanabilir mikro filtrenin düzgün takılıp takılmadığını kontrol edin."
# s.31 "Elektrik süpürgesi temizleme sırasında çalışmayı durduruyor." → aşırı ısınmayı önleme: "dolu toz kutusuyla", "emiş bölümü veya fırça tıkalı", "Uzatma Oluk Aracı uzun süre" · "Sorunun nedeni
#   düzeltildikten sonra ürünü yeniden açın." · "Temizleme bitti ancak fırçadan küçük toz partikülleri geliyor." → "10 saniye veya daha uzun süre çalıştırın."
# Bakım s.22: "Elektrik süpürgesini temizlemeden önce kapatın." "Toz haznesi veya filtre tozla dolduğunda, elektrik süpürgesi motorun aşırı ısınmayı önleme cihazı nedeniyle durabilir." "Toz haznesini
#   veya filtreyi tamamen dolmadan (MAKS (MAX) işareti) temizlemeniz gerekir." "Toz haznesi çıkarma düğmesine bastıktan sonra, toz haznesini ok yönünde çekin." "Filtre kollarını ... tutarak yıkanabilir
#   mikro filtreyi dışarı çıkarın." · s.23 "Düğmeye basarken toz haznesi kapağını çevirin" "Metal ağ ızgara filtresi üzerindeki tozu birleştirme aracıyla çıkarın." "Metal ağ ızgara filtresine takılı
#   plastiği çekmeyin." "Toz haznesini boşalttıktan sonra temizleyin ve gölgede kurutun." "tık sesi duyana kadar iterek" · s.24 "filtredeki tozu sık sık çıkarın ve filtreyi su ile ayda bir kez
#   temizleyin." "24 saatten uzun süre gölgede iyice kurutun." "Isı uygulandığında ürünün şekli bozulabilir." · s.25 "Fırçada yabancı madde kaldığında, ıslak bir mendille veya kuru bir bezle çıkarın."
#   "Dönen fırçayı ve emiş bölümünü su ile temizlemeyin." "Fırçayı temizledikten sonra gücü kapatın ve sonra yeniden açın." · s.29 "Emişte sürekli bir azalma fark ederseniz veya ... anormal şekilde
#   aşırı ısınırsa ultra ince toz filtresini değiştirin." "Fırçanın tekerleği üzerinde kolayca çıkarılamayan yabancı bir madde varsa bir Samsung servis merkezine başvurun." · s.18 ekran "01 Tıkalı",
#   "02 Dönen fırça takılmış", "03 Filtre yok" · s.30 "Yedek filtreler, yerel Samsung servisi acentenizde mevcuttur."
# BİLEREK YAZILMAYANLAR: makasla yabancı madde kesme (s.25 → ALET KURALI, numarasız anıldı) · başka Jet serilerine genelleme · motor teşhisi · fiyat (#46).
# Alıntı denetim tablosu: samsung-sarjli-supurge-cekmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika (yıkanan filtre için 24 saatten uzun kuruma)"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kuru bez", "Süpürgeyle gelen birleştirme aracı"]
steps:
  - "Temizlemeden önce süpürgeyi kapat."
  - "Toz haznesini çıkarma düğmesiyle çıkar ve boşalt; hazneyi MAKS işaretine kadar doldurma."
  - "Metal ağ ızgara filtresindeki tozu birleştirme aracıyla al; üzerindeki plastiği çekme."
  - "Yıkanabilir mikro filtrenin tozunu al; ayda bir suyla yıkayıp 24 saatten uzun gölgede kurut."
  - "Boruyu, toz haznesinin girişini ve fırçayı yabancı madde açısından kontrol et, bulduğunu çıkar."
  - "Fırçada kalan yabancı maddeyi ıslak mendil ya da kuru bezle al; dönen fırçayı ve emiş bölümünü suyla yıkama."
  - "Mikro filtreyi düzgün tak, hazneyi tık sesiyle yerine it ve süpürgeyi kapatıp yeniden aç."
faq:
  - q: "Samsung Jet süpürgemin emişi birden azaldı ve titreme sesi geliyor, neden?"
    a: "Samsung'un Jet 70 (VS7000) kılavuzundaki sorun giderme tablosunda tam bu belirti var. Çözümler üç kontrol: fırçanın, toz haznesinin ya da borunun yabancı maddeyle tıkalı olup olmadığına bakıp çıkarmak; boru ve toz haznesinin tozla tamamen dolu olup olmadığını kontrol edip doluysa boşaltmak; filtrenin kirli olup olmadığına bakıp kirliyse temizlemek."
  - q: "Süpürge temizlik yaparken kendiliğinden duruyor."
    a: "Kılavuza göre bu üründe motorun aşırı ısınmayı önleme cihazı var ve süpürge toz kutusu doluyken, emiş bölümü ya da fırça tıkalıyken veya Uzatma Oluk Aracı uzun süre kullanıldığında çalışmayı geçici olarak durdurur. Nedeni düzeltip ürünü yeniden açman isteniyor."
  - q: "Filtreyi ne sıklıkla yıkamalıyım?"
    a: "Samsung filtredeki tozun sık sık alınmasını ve filtrenin ayda bir kez suyla temizlenmesini öneriyor. Yıkanan filtre kullanmadan önce 24 saatten uzun süre gölgede iyice kurutulmalı; ısı uygulanırsa şekli bozulabilir. Emişte sürekli bir azalma ya da anormal aşırı ısınma fark edersen kılavuz ultra ince toz filtresinin değiştirilmesini istiyor."
  - q: "Temizlik bitti ama fırçadan küçük toz parçacıkları dökülüyor."
    a: "Kılavuzun önerisi, temizlik bittikten sonra süpürgeyi küçük toz parçacıklarını çekmesi için 10 saniye ya da daha uzun süre çalıştırmak."
images:
  coverAlt: "Toz haznesi çıkarılmış kablosuz dikey süpürge ve yanında kurumaya bırakılmış yıkanabilir filtre"
---

Süpürge çalışıyor ama emişi birden düşüyor, üstüne bir de titreme sesi geliyor. Samsung'un Jet 70 (VS7000) kılavuzunun sorun giderme tablosunda bu belirti aynen var: **"Emiş gücü aniden azalıyor ve elektrik süpürgesi bir titreme sesi çıkarıyor."** Tablonun üç çözümü de hava yolunu temizlemekle ilgili: fırça, hazne, boru ve filtre.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Kapat → hazneyi boşalt (MAKS'a varmadan) → metal ağ filtrenin tozunu al → mikro filtreyi temizle, ayda bir yıka → boru, hazne girişi ve fırçaya bak → fırçadaki kalıntıyı bezle al → filtreyi düzgün tak, yeniden aç. Emiş sürekli düşükse ultra ince toz filtresi değişir.

## Adım adım: evde denenecekler

**1. Süpürgeyi kapat.** Samsung'un bakım bölümünün ilk ikazı: **elektrik süpürgesini temizlemeden önce kapat.**

**2. Toz haznesini boşalt.** Tablonun maddesi: **borunun ve toz haznesinin tozla tamamen dolu olup olmadığını kontrol et; doluysa hazneyi boşalt.** Hazneyi **toz haznesi çıkarma düğmesine basıp ok yönünde** çekerek çıkarıyorsun; kapağı düğmeye basarken çevirip ayırıyorsun. Samsung'un kuralı: hazneyi ve filtreyi **tamamen dolmadan (MAKS işareti)** temizle; dolu hazne ya da filtre, motoru koruyan aşırı ısınma önleme cihazı yüzünden süpürgenin **durmasına** neden olabilir.

**3. Metal ağ filtreyi temizle.** Kılavuz **metal ağ ızgara filtresi üzerindeki tozu birleştirme aracıyla** almanı söylüyor; filtreye takılı **plastiği çekme.** Hazneyi boşalttıktan sonra temizle ve **gölgede kurut.**

**4. Mikro filtreyi temizle.** Tablonun üçüncü maddesi: **filtrenin kirli olup olmadığını kontrol et; kirliyse temizle.** Yıkanabilir mikro filtreyi **filtre kollarından tutarak** çıkar. Samsung filtredeki tozu **sık sık** almanı ve filtreyi **ayda bir kez suyla** temizlemeni öneriyor. Yıkadıktan sonra kullanmadan önce **24 saatten uzun gölgede** iyice kurut; **ısı uygulama**, şekli bozulabilir.

**5. Boru, hazne girişi ve fırçaya bak.** Tablonun ilk maddesi: **bir fırçanın, toz haznesinin ya da borunun yabancı maddeyle tıkalı olup olmadığını kontrol et ve çıkar.** Süpürgenin ekranı da yardımcı olur: kılavuza göre ekranda **"Tıkalı"** göstergesi toz haznesi, boru ya da emiş bölümü tıkandığında, **"Dönen fırça takılmış"** göstergesi fırçayı yabancı bir madde tıkadığında yanar.

**6. Fırçayı bezle temizle.** Fırçada yabancı madde kaldığında onu **ıslak bir mendille ya da kuru bir bezle** çıkar. Samsung'un ikazı: **dönen fırçayı ve emiş bölümünü suyla temizleme.** Bez ya da başka bir madde fırçaya dolanırsa fırça motoru korumak için durur; temizledikten sonra **gücü kapatıp yeniden aç.** Kılavuz elle çıkmayan madde için makas tarif ediyor; aletle uğraşmak istemiyorsan yetkili servise bırak.

**7. Filtreyi düzgün tak, yeniden başlat.** Ekrandaki **"Filtre yok"** göstergesi yıkanabilir mikro filtre **düzgün takılmadığında** yanar; tablo da süpürge çalışmıyorsa mikro filtrenin düzgün takılıp takılmadığına bakmanı istiyor. Hazneyi **tık sesi duyana kadar** iterek tak ve süpürgeyi aç.

## Süpürge temizlik sırasında duruyorsa

Kılavuza göre motorun aşırı ısınmayı önleme cihazı süpürgeyi şu durumlarda geçici olarak durdurur: **toz kutusu doluyken**, **emiş bölümü ya da fırça tıkalıyken** ve **Uzatma Oluk Aracı uzun süre kullanıldığında.** Nedeni düzelttikten sonra ürünü yeniden aç. Yumuşak İşlem ya da Islak Fırça temizlendiği hâlde dönmüyorsa fırça motorunun aşırı ısınma koruması çalışıyor olabilir; Samsung **30 dakika ya da daha fazla** soğumasını beklemeni söylüyor.

Temizlik bittiği hâlde fırçadan küçük toz parçacıkları dökülüyorsa: süpürgeyi **10 saniye ya da daha uzun** çalıştır.

Markadan bağımsız kontrol listeleri için [süpürge çekmiyor](/blog/supurge-cekmiyor/) ve [süpürge hortumu tıkandı](/blog/supurge-hortumu-tikandi/) yazılarına bakabilirsin. Samsung robot süpürge için: [Samsung robot süpürge çalışmıyor](/blog/samsung-robot-supurge-calismiyor/).

## Ne zaman servis

- **Emiş sürekli düşükse ya da süpürge anormal ısınıyorsa:** kılavuz **ultra ince toz filtresinin değiştirilmesini** istiyor; yedek filtreler **yerel Samsung servis acentesinde** bulunuyor.
- **Fırçanın tekerleğinde kolayca çıkmayan bir madde varsa:** Samsung **servis merkezine** başvurmanı istiyor.
- Önerilen çözümler sorunu çözmezse kılavuz **Samsung Müşteri Hizmetleri**'ni aramanı söylüyor.

⛔ **Kendin-çöz sınırı burada biter.** Hazne, filtre, boru ve fırça temizliği kullanıcıya; motor, batarya ve elektronik servise aittir.

## Servisi aramadan önce iki dakikalık özet

1. Modelin ne (VS ile başlayan kod, ürün etiketinde)?
2. Ekranda "Tıkalı", "Dönen fırça takılmış" ya da "Filtre yok" göstergesi yanıyor mu?
3. Mikro filtre en son ne zaman yıkandı, tam kurudu mu?
4. Emiş tüm aparatlarda mı düşük, yalnız zemin fırçasında mı?
5. Süpürge çalışırken kendiliğinden duruyor mu?

Cihazının belirtisini ve modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

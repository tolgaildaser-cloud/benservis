---
title: "Bosch kombi sıcak su gelmiyor: evde bakılacaklar"
description: "Bosch kombide sıcak su gelmiyorsa kılavuzların sırası: açma tuşu, arıza kodu, gaz vanası, sıcak su işletmesi, sıcaklık ve eco ayarı, basınç."
slug: "bosch-kombi-sicak-su-gelmiyor"
date: "2026-10-23"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 2, küme D, fork B). origin/main'de bosch-kombi-sicak-su-gelmiyor / -vermiyor yok
#   (Bosch'ta ariza-kodlari, 1017/ce/e9/ea tek kod sayfaları ve bosch-kombi-kalorifer-isitmiyor var; bu yazı ayrı belirti: musluktan sıcak su yok).
# Arama kanıtı (bu koşuda Google otomatik tamamlama, hl=tr gl=tr): "bosch kombi sıcak su" → 1. "bosch kombi sıcak su gelmiyor",
#   2. "…vermiyor ama petekler ısınıyor"; "bosch kombi sıcak su gelmiyor" → "…neden", "…musluktan sıcak su gelmiyor". GSC (3 ay/7 gün): yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile bosch-tr-tr-b.boschhc-documents.com'dan yeniden indirildi (HTTP 200, application/pdf);
#   md5'ler 28 Eyl yerel kopyasıyla (kaynak-bosch-kombi-sprint/MD5SUMS-2026-09-28.txt) aynı. pdftotext -layout, sayfa = PDF sayfası.
#  (K1) Condens 2500 W kullanma kılavuzu 6721835246 (2021/03)  https://bosch-tr-tr-b.boschhc-documents.com/download/pdf/file/6721835246  md5 81853ab2ff146ad75d9398dc0c9832b0
#  (K2) Condens 1200W 6721835940 (2023/04)  …/download/pdf/file/6721835940  md5 a22315e51db093d2642aeb55bcbc8c02
#  (K3) Condens 2200i W 6721839341 (2023/04)  …/download/pdf/file/6721839341  md5 e06a7d8792003fe41f2a63b08204887b
#  (K5) Condens 7000iW 6721835270 (2021/03)  …/download/pdf/file/6721835270  md5 a485d15ed4c4466367fc4daa73fa1afb
# Gaz kokusu K1 s.3 · K tuşu K1 s.10 · kullanım suyu 40–60 °C K1 s.10; 35–60 °C K2 s.5, K3 s.6 · konfor/eco K1 s.10, K3 s.6
#   · "Sıcak kullanım suyu işletmesi yok" K5 s.10 · kireç/55 °C K1 s.10, K3 s.6 · yüksek sıcaklık → düşük akış K1 s.12
#   · basınç 1–2 bar, doldurma vanası K1 s.8; "göstermesini isteyin" K2 s.7 · gaz vanası kolu K2 s.7 · H/! reset K1 s.13, K2 s.7.
# BİLEREK YAZILMAYANLAR: musluk debisi/akış sensörü eşiği (Bosch kılavuzlarında kullanıcı bilgisi olarak yok) · plaka eşanjör, 3 yollu vana,
#   akış sensörü, kart teşhisi · "en sık neden" sıralaması · Condens 5700i W (sıcak su yalnız isteğe bağlı kitle; kapsam dışı) · fiyat (#46).
# Alıntı denetim tablosu: bosch-kombi-sicak-su-gelmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa hiçbir elektrikli şalteri kullanma, gaz beslemesini kes, pencere ve kapıları aç, binayı terk et ve dışarıdan gaz dağıtım şirketini ara."
  - "Ekran kapalıysa kombiyi açma tuşuyla çalıştır; ekranda gidiş suyu sıcaklığı görünmeli."
  - "Ekranda H sembolü ve bir kod varsa kodu not al, kılavuzdaki sıfırlama adımını bir kez uygula."
  - "Kombinin altındaki gaz vanasının kolunun akış yönünde, yani açık olduğunu kontrol et."
  - "Kumanda panelinde sıcak kullanım suyu işletmesinin kapatılmadığını kontrol et."
  - "Kullanım suyu sıcaklığını kontrol et; eco modundaysan konfor moduna geçmeyi dene."
  - "Basınç göstergesine bak; normal çalışma basıncı 1 ile 2 bar arasıdır."
  - "Ayarlar doğru olduğu hâlde sıcak su gelmiyorsa ya da kod geri dönüyorsa kodu ve cihaz bilgilerini yetkili servise bildir."
faq:
  - q: "Bosch kombi çalışıyor ama musluktan sıcak su gelmiyor, neden?"
    a: "Bosch kullanma kılavuzlarında bu belirti için ayrı bir tablo yok; ama kılavuzlar sıcak suyu etkileyen ayarları tek tek anlatıyor. Kombi bekleme modunda olabilir, sıcak kullanım suyu işletmesi kapatılmış olabilir, kullanım suyu sıcaklığı düşük kalmış olabilir ya da ekranda H sembolüyle bir arıza kodu duruyor olabilir. Bunlar doğruysa gaz vanası ve basınç sırada."
  - q: "Eco modu sıcak suyu keser mi?"
    a: "Kesmez, ama bekleme süresini uzatabilir. Bosch kılavuzlarına göre konfor modunda cihaz sürekli ayarlanmış sıcaklıkta tutulur ve sıcak su kısa sürede gelir. Eco modunda cihaz ancak sıcak su talebi olduğunda devreye girer. Musluğu açtıktan sonra suyun ısınmasını biraz bekle; sorun sürerse konfor moduna geç."
  - q: "Bosch kombide sıcak su sıcaklığı kaç derece olmalı?"
    a: "Condens 2500 W'de kullanım suyu 40 °C ile yaklaşık 60 °C, Condens 1200W ve 2200i W'de 35 °C ile 60 °C arasında ayarlanıyor. Bosch, normal işletmede 60 °C'nin üzerine çıkılmamasını, sert sularda kireçlenmeyi azaltmak için 55 °C'nin altında kalınmasını öneriyor."
  - q: "Ekranda H sembolü var, ne yapmalıyım?"
    a: "H, bir arıza olduğunu gösterir; nedeni yanındaki kodla belirtilir. Bazı arızalarda kombi sıfırlanmadan yeniden çalışmaz. Kılavuza göre cihazı kapatıp yeniden açabilir ya da modeline göre ilgili tuşlarla sıfırlayabilirsin. Arıza giderilemiyorsa servisi ara ve gösterilen kodu, cihaz bilgileriyle birlikte bildir."
  - q: "Basıncı kendim yükseltebilir miyim?"
    a: "Condens 2500 W kılavuzu basınç çok düşükse doldurma vanasını açıp manometrede 1 ile 2 bar arası okununca vanayı kapatmayı tarif ediyor. Condens 1200W ve 2200i W kılavuzları ise doldurmanın tesisata göre değiştiğini söylüyor ve yetkili servisten nasıl yapıldığını göstermesini istemeni öneriyor. Basınç sık sık düşüyorsa tesisatta kaçak olabilir."
images:
  coverAlt: "Mutfak duvarına asılı beyaz bir kombi ve altında açık duran bir lavabo musluğu"
  steps:
    - "Açık bir pencere ve önünde boş, sakin bir koridor"
    - "Duvara asılı beyaz bir kombinin kapalı duran kumanda paneli"
    - "Kombi ekranında beliren küçük bir uyarı simgesinin yakın planı"
    - "Kombinin altında borular arasında duran sarı kollu bir gaz vanası"
    - "Kombinin kumanda panelinde musluk biçimli bir sıcak su simgesi"
    - "Lavabo üzerinde buharı yükselen açık bir musluk"
    - "Kombinin önünde duran yuvarlak kadranlı bir basınç göstergesi"
    - "Tezgâhta duran katlanmış bir kullanma kılavuzu ve kapalı bir alet çantası"
---

Kombi açık görünüyor, petekler belki ısınıyor, ama musluktan sıcak su gelmiyor. Bosch'un Condens 2500 W, Condens 1200W, Condens 2200i W ve Condens 7000iW kullanma kılavuzlarında bu belirtinin tek bir satırı yok; ama dört kılavuz da sıcak suyu etkileyen ayarları, arıza göstergesini ve kullanıcıya bırakılan kontrolleri açıkça anlatıyor. Bu yazıda servisi çağırmadan önce evde bakabileceğin her şeyi bu kılavuzlardan sırayla topladık. Tuşların yeri modele göre değişir; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce ekrana bak. Ekran kapalıysa açma tuşu, H sembolü varsa arıza kodu. Sonra gaz vanası, sıcak su işletmesinin açık olup olmadığı, kullanım suyu sıcaklığı ve eco modu. Basınç 1–2 bar olmalı. Kod geri dönüyorsa yetkili servis.

## Ekran ne söylüyor

| Ekranda gördüğün | Kılavuza göre anlamı | Kim ne yapar |
|---|---|---|
| **Ekran kapalı** | Cihaz devre dışı ya da bekleme modunda | 🛠️ Açma tuşuyla çalıştır |
| **H sembolü + kod** | Bir arıza var; neden koddan okunur | 🛠️ Kodu not al, bir kez sıfırla |
| **Sıcak su işletmesi yok simgesi** | Sıcak su kumanda panelinden kapatılmış | 🛠️ Sıcak su işletmesini aç |
| **eco** | Cihaz yalnız sıcak su talebinde devreye girer | Bekleme süresi uzayabilir |

## Adım adım kontrol

**1. Gaz kokusu var mı?** Bosch'un güvenlik bölümü açık: gaz kokusu alırsan sigara içme, çakmak ve kibrit kullanma, hiçbir elektrikli şaltere dokunma, fiş çekme, telefonu ya da kapı zilini kullanma. Ana kapama tertibatından veya gaz sayacındaki vanadan gaz beslemesini kes, pencere ve kapıları aç, apartman sakinlerini uyar ve binayı terk et. İtfaiyeyi, polisi ve gaz dağıtım şirketini binanın dışından ara.

**2. Kombi açık mı?** Condens 2500 W kılavuzunda ilk adım cihazı **K tuşu** ile çalıştırmak; açıldığında ekranda ısıtma suyunun gidiş sıcaklığı görünür. Cihaz K tuşuyla kapatılmışsa ekranda yalnız birkaç sembol kalır ve kombi sıcak su hazırlamaz.

**3. Ekranda H sembolü var mı?** Kılavuzlara göre **H**, bir arıza meydana geldiğini gösterir ve nedeni bir kodla belirtilir. Bazı arızalarda kombi sıfırlanmadan yeniden çalışmaz. Condens 1200W ve 2200i W'de yol iki tane: cihazı kapatıp yeniden açmak ya da H ve ! sembolleri kaybolana kadar iki ok tuşunu birlikte basılı tutmak. Condens 2500 W'de H ve ! birlikte görünüyorsa ilgili reset tuşu, yalnız H görünüyorsa K tuşuyla kapatıp açmak. Kodun anlamını [Bosch kombi arıza kodları](/blog/bosch-kombi-ariza-kodlari/) sayfasında bulabilirsin. Kod geri dönüyorsa tekrar tekrar deneme.

**4. Gaz vanası açık mı?** Kılavuz gaz vanasının nasıl açılıp kapandığını kullanıcıya anlatıyor: kolu bastırıp sola doğru sonuna kadar çevirdiğinde kol **akış yönünde** durur, yani vana açıktır. Kol borunun enine duruyorsa vana kapalıdır. Ekranda alev algılanmadığını gösteren bir kod varsa Bosch'un ilk çözümü de gaz vanasının açık olup olmadığına bakmak. Ayrıntılar [Bosch kombi EA ve 227 hatası](/blog/bosch-kombi-ea-hatasi/) yazısında.

**5. Sıcak su işletmesi kapatılmış mı?** Condens 7000iW'de sıcak su için üç seçenek var: sıcak kullanım suyu işletmesi, ekonomik işletim ve **sıcak kullanım suyu işletmesi yok**. Kılavuzun uyarısı net: bu son ayar seçiliyse sıcak su, bağlı kumanda sistemi üzerinden de açılamaz. Sıcak su tuşuna basıp seçenekler arasında sıcak su işletmesini seç ve ok tuşuyla kaydet.

**6. Sıcaklık ve eco ayarı.** Kullanım suyu sıcaklığı Condens 2500 W'de 40 °C ile yaklaşık 60 °C, Condens 1200W ve 2200i W'de 35 °C ile 60 °C arasında ayarlanıyor; ayar birkaç saniye sonra kaydediliyor. Değer en alta indirilmişse su ılık gelir. Eco modunda cihaz yalnız **sıcak su talebi olduğunda** devreye girer; konfor modunda ise sürekli ayarlanmış sıcaklıkta tutulur ve sıcak su kısa sürede gelir. Musluğu açınca uzun süre soğuk su akıyorsa konfor moduna geç.

**7. Basınca bak.** Bosch'a göre normal çalışma basıncı **1 ile 2 bar** arası. Condens 2500 W kılavuzu, basınç çok düşükse doldurma vanasını açıp manometrede 1–2 bar okununca vanayı tekrar kapatmayı tarif ediyor. Condens 1200W ve 2200i W kılavuzları ise doldurmanın tesisata göre değiştiğini söylüyor ve yetkili servisten nasıl yapıldığını göstermesini istemeni öneriyor. Değerler için [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) sayfasına bak.

**8. Ayarlar doğruysa servis.** Ekran açık, kod yok, gaz vanası açık, sıcak su işletmesi ve sıcaklık doğru, basınç yerinde, yine de sıcak su gelmiyorsa ev turu bitmiştir. Bosch'un talimatı: arıza giderilemediğinde yetkili servisi ya da müşteri hizmetlerini ara, **arıza kodunu ve cihaz bilgilerini** bildir. Cihaz adı ve seri numarası kumanda paneli kapağındaki tip etiketinde yazılı.

## Kireç ve azalan sıcak su

Bosch, sert sularda kullanım suyu sıcaklığının **55 °C'nin altında** ayarlanmasını öneriyor. Kılavuza göre yüksek sıcaklıklar güçlü kireçlenmeye yol açıyor ve bu da cihazın çalışmasını olumsuz etkiliyor: ısıtma süresi uzuyor, akış miktarı düşüyor. Sıcak su yıllar içinde giderek azaldıysa sebep bu olabilir; kireç temizliği kombinin içinde yapılır ve servis işidir.

## Ne zaman servis

- H sembolü ve aynı kod sıfırlamadan sonra geri geliyorsa
- Gaz vanası açık olduğu hâlde alev algılanmıyorsa
- Basınç sık sık düşüyorsa (kılavuza göre tesisatta kaçak)
- Sıcak su giderek azalıyor ve akış zayıflıyorsa

⛔ **Kendin-çöz sınırı burada biter.** Ekran, tuşlar, gaz vanasının kolu ve basınç göstergesi sende; kombinin kapağının içi, gaz hattı, elektrik bağlantısı ve kireç temizliği yetkili servisin.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne (tip etiketinden)?
2. Ekranda H sembolü ve bir kod var mı?
3. Gaz vanasının kolu akış yönünde mi?
4. Sıcak su işletmesi ve sıcaklık ayarı ne gösteriyor?
5. Basınç kaç bar?

Belirtiyi ve ekrandaki kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bosch'un bütün kodları [Bosch kombi arıza kodları](/blog/bosch-kombi-ariza-kodlari/) sayfasında, petekler soğuksa [Bosch kombi kalorifer ısıtmıyor](/blog/bosch-kombi-kalorifer-isitmiyor/) yazısında, marka bağımsız nedenler [kombi sıcak su vermiyor](/blog/kombi-sicak-su-vermiyor/) yazısında. Bil, gör, çağır.

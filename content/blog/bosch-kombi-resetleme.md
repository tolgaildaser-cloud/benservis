---
title: "Bosch kombi resetleme nasıl yapılır?"
description: "Bosch kombi resetleme modele göre değişir: kapat-aç, iki ok tuşu ya da reset tuşu. Kılavuzların sırası, tekrar denemenin sınırı ve servis anı."
slug: "bosch-kombi-resetleme"
date: "2026-10-23"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 2, küme D, fork B). origin/main'de bosch-kombi-resetleme yok. Yakın: bosch-kombi-ariza-kodlari
#   (reset iki yolunu bir paragrafta anıyor; başlığı kod sorgusunu hedefliyor), bosch-kombi-ea/e9/ce/1017-hatasi. Bu yazı ayrı sorgu: "resetleme".
# Arama kanıtı (bu koşuda Google otomatik tamamlama, hl=tr gl=tr): "bosch kombi" → 3. "bosch kombi resetleme";
#   "bosch kombi reset" → 1. "bosch kombi resetleme", 2. "…nasıl yapılır", 3. "…reset tuşu", 5. "…resetleme yapmıyor". GSC (3 ay/7 gün): yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile yeniden indirildi (hepsi HTTP 200). PDF md5'leri 28 Eyl yerel kopyasıyla aynı. pdftotext -layout.
#  (K1) Condens 2500 W 6721835246  https://bosch-tr-tr-b.boschhc-documents.com/download/pdf/file/6721835246  md5 81853ab2ff146ad75d9398dc0c9832b0
#  (K2) Condens 1200W 6721835940  …/download/pdf/file/6721835940  md5 a22315e51db093d2642aeb55bcbc8c02
#  (K3) Condens 2200i W 6721839341  …/download/pdf/file/6721839341  md5 e06a7d8792003fe41f2a63b08204887b
#  (K4) Condens 2300i W 6721830375  …/download/pdf/file/6721830375  md5 167bfab2336acd938ef5e1d26bd5dec9
#  (K5) Condens 7000iW 6721835270  …/download/pdf/file/6721835270  md5 a485d15ed4c4466367fc4daa73fa1afb
#  (K6) Condens 5700i W 6721852676 (2023/03)  …/download/pdf/file/6721852676  md5 83780734e13a538386cd9f5cabc88c86
#  (FD) Bosch HC "Fd Arıza Kodu"  https://www.bosch-homecomfort.com/tr/tr/residential/servis-hizmetlerimiz/ariza-kodlari-ve-cozumleri/fd/  md5 aaaee9d41568e55c6a7f01d1b4d01a86 (dinamik)
#  (227) …/ariza-kodlari-ve-cozumleri/227/  md5 74f5686792a12b4bf3e62ee0f5d0106e · (2971) …/2971/  md5 63396581311d67e6397246a5a86658f4
# Gaz kokusu K1 s.3 · K1 reset: H+! ilgili tuş, yalnız H → K tuşu (s.13) · K2 s.7, K3 s.9, K4 s.11 kapat-aç / iki ok tuşu · K5 s.12 "Sıfırla gösterilene kadar
#   reset tuşuna basın" · K6 s.8 tekrarlanan girişim → 2980 blokajı, LoPr · tip etiketi = kumanda paneli kapağı K1 s.13 · basınç 1–2 bar K1 s.8.
# BİLEREK YAZILMAYANLAR: fişi çekme/sigorta indirme gibi belgede olmayan sıfırlama yolları · "kaç kez basılır" sayısı (Bosch belgelerinde sayı yok;
#   yalnız "tekrarlanan girişimler" uyarısı) · tuş simgelerinin adı (kılavuzda simge olarak basılı) · kombi içi parça teşhisi · fiyat (#46).
# Alıntı denetim tablosu: bosch-kombi-resetleme.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~5 dakika"
  totalTime: "PT5M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa resetlemeye çalışma; elektrikli şaltere dokunma, gaz beslemesini kes, pencereleri aç, binayı terk et ve dışarıdan gaz dağıtım şirketini ara."
  - "Ekrandaki H sembolünü ve yanındaki arıza kodunu not al."
  - "Kodun basit bir nedeni varsa önce onu gider: gaz vanasının açık olduğuna ve basıncın 1 ile 2 bar arasında olduğuna bak."
  - "Kombinin modeline göre kılavuzdaki sıfırlama yolunu bir kez uygula: kapatıp açmak, iki ok tuşunu birlikte basılı tutmak ya da reset tuşu."
  - "Tuşu yalnız sembol kaybolana ya da sıfırla yazısı çıkana kadar tut, uzun süre basılı bırakma."
  - "Kod geri geliyorsa sıfırlamayı art arda tekrarlama."
  - "Arıza giderilemiyorsa yetkili servisi ara; arıza kodunu ve tip etiketindeki cihaz bilgilerini bildir."
faq:
  - q: "Bosch kombide reset tuşu hangisi?"
    a: "Modele göre değişir. Condens 7000iW'de ayrı bir reset tuşu var; kılavuz, sıfırla yazısı görünene kadar bu tuşa basmayı söylüyor. Condens 1200W, 2200i W ve 2300i W'de ayrı tuş yerine iki ok tuşu, H ve ! sembolleri kaybolana kadar birlikte basılı tutuluyor. Condens 2500 W'de panelde reset işlevli bir tuş var; yalnız H görünüyorsa cihaz K tuşuyla kapatılıp açılıyor."
  - q: "Kapatıp açmak da reset sayılır mı?"
    a: "Evet. Bosch kılavuzlarında sıfırlama gerektiren arızalar için ilk yol cihazı kapatıp yeniden çalıştırmak, ikincisi tuşla sıfırlamak. İkisinden sonra da cihaz yeniden çalışmaya başlar ve ekranda gidiş suyu sıcaklığı görünür."
  - q: "Kaç kez resetleyebilirim?"
    a: "Bosch kılavuzları bir sayı vermiyor. Condens 5700i W kılavuzu ise bir arızayı sıfırlamak için tekrarlanan girişimlerin cihazı güvenlik nedeniyle 2980 koduyla bloke edebileceğini, bu blokajın ancak uzman bir firma ya da müşteri hizmetleri arızanın nedenini yerinde bulup giderdikten sonra kaldırılabileceğini yazıyor. Kod geri geliyorsa denemeyi bırakıp servisi aramak gerekiyor."
  - q: "Ekranda Fd yazıyor, ne demek?"
    a: "Bosch'un Fd kod sayfasına göre reset butonuna uzun süre basılmış. Çözüm olarak reset tuşuna 30 saniyeyi aşmayacak şekilde basmak ve yetkili servise başvurmak gösteriliyor."
  - q: "Resetledim, kombi çalıştı; servis çağırmalı mıyım?"
    a: "Arıza bir kez çıkıp sıfırlamayla gittiyse ve geri gelmiyorsa kombi normal çalışmaya döner. Aynı kod tekrar ediyorsa ya da sıfırlama işe yaramıyorsa Bosch'un talimatı servisi veya müşteri hizmetlerini aramak, gösterilen arıza kodunu ve cihaz bilgilerini bildirmek."
images:
  coverAlt: "Mutfak duvarına asılı beyaz bir kombinin kumanda paneli ve küçük ekranı"
  steps:
    - "Çizim: solda duvar tipi kombi, sağda açık bir pencere"
    - "Çizim: solda duvar tipi kombi, sağda panel ekranındaki uyarı"
    - "Çizim: solda duvar tipi kombi, sağda basınç göstergesi (manometre)"
    - "Çizim: solda duvar tipi kombi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi kombi, sağda panel ekranındaki uyarı"
    - "Çizim: solda duvar tipi kombi, sağda panel ekranındaki uyarı"
    - "Çizim: solda duvar tipi kombi, sağda telefon ve kullanım kılavuzu"
---

Bosch kombinin ekranında bir sembol ve bir kod belirdi, kombi durdu. Bazı arızalarda kombi sıfırlanmadan yeniden çalışmıyor; ama Bosch'un sıfırlama yolu tek değil, modele göre değişiyor. Bu yazıda Bosch'un Condens 2500 W, 1200W, 2200i W, 2300i W, 7000iW ve 5700i W kullanma kılavuzlarındaki sıfırlama adımlarını ve tekrar denemenin sınırını topladık. Kendi kombinin modelini kumanda paneli kapağındaki tip etiketinden öğrenebilirsin.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Önce kodu not al, gaz vanasına ve basınca bak. Sonra modelinin yolunu bir kez dene: kapatıp açmak, iki ok tuşu ya da reset tuşu. Tuşu uzun tutma. Kod geri geliyorsa art arda deneme; Bosch tekrarlanan girişimlerin cihazı kilitleyebileceğini yazıyor. Sonrası yetkili servis.

## Model model sıfırlama

| Model | Kılavuzdaki yol |
|---|---|
| **Condens 1200W, 2200i W, 2300i W** | Cihazı kapatıp aç ya da H ve ! kaybolana kadar iki ok tuşunu birlikte basılı tut |
| **Condens 2500 W** | H ve ! varsa reset işlevli tuşu basılı tut; yalnız H varsa K tuşuyla kapatıp aç |
| **Condens 7000iW** | Cihazı kapatıp aç ya da sıfırla yazısı görünene kadar reset tuşuna bas |
| **Condens 5700i W** | Cihazı kapatıp aç ya da arızayı cihazdan sıfırla |

Hepsinde sıfırlama başarılı olunca cihaz yeniden çalışmaya başlar ve ekranda gidiş suyu sıcaklığı görünür.

## Adım adım

**1. Gaz kokusu varsa reset yok.** Bosch'un güvenlik bölümüne göre gaz kokusu alırsan sigara içme, çakmak ve kibrit kullanma, hiçbir elektrikli şaltere dokunma, fiş çekme, telefonu ya da kapı zilini kullanma. Gaz beslemesini ana kapama tertibatından veya gaz sayacındaki vanadan kes, pencere ve kapıları aç, apartman sakinlerini uyar ve binayı terk et. İtfaiyeyi, polisi ve gaz dağıtım şirketini binanın dışından ara.

**2. Kodu not al.** Kılavuzlara göre **H** sembolü bir arıza meydana geldiğini gösterir; nedeni bir kodla belirtilir. Bazı modellerde H ile birlikte **!** sembolü de görünür. Kodu yaz; sıfırlama sonrasında kod gidip gitmediğini ve servise ne söyleyeceğini buna göre bileceksin. Kodun anlamı [Bosch kombi arıza kodları](/blog/bosch-kombi-ariza-kodlari/) sayfasında.

**3. Basit nedeni önce gider.** Bazı kodların çözümü sıfırlamadan önce gelir. Bosch'un 227 kod sayfası alev algılanmadığında ilk iş olarak gaz vanasının açık olup olmadığına bakmayı söylüyor; vana kolu akış yönündeyse açıktır. 2971 kodu çalışma basıncının çok düşük olduğunu gösterir; Bosch su basıncını kontrol edip gerekirse öngörülen basınca kadar su eklemeyi öneriyor. Normal çalışma basıncı **1 ile 2 bar** arası. Ayrıntılar [Bosch kombi EA ve 227 hatası](/blog/bosch-kombi-ea-hatasi/) ve [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) yazılarında.

**4. Modelinin yolunu bir kez uygula.** Yukarıdaki tabloya bak. Ayrı reset tuşu olmayan modellerde iki ok tuşu birlikte kullanılıyor; Condens 7000iW'de ayrı bir reset tuşu var. En basit yol her modelde aynı: cihazı kapatıp yeniden çalıştırmak.

**5. Tuşu uzun tutma.** Tuşu yalnız sembol kaybolana ya da sıfırla yazısı görünene kadar tut. Bosch'un **Fd** kod sayfası, reset butonuna uzun süre basıldığında bu kodun çıktığını yazıyor; çözüm olarak tuşa **30 saniyeyi aşmayacak** şekilde basmayı ve yetkili servise başvurmayı gösteriyor.

**6. Kod geri gelirse tekrarlama.** Condens 5700i W kılavuzunun uyarısı açık: bir arızayı sıfırlamak için tekrarlanan girişimler, cihazın güvenlik nedeniyle **2980** koduyla bloke olmasına yol açabilir. Bu blokaj ancak uzman bir firma ya da müşteri hizmetleri arızanın nedenini yerinde tespit edip giderdikten sonra kaldırılabilir. Yani sıfırlama, nedeni ortadan kalkmamış bir arızayı çözmez.

**7. Servise doğru bilgiyle git.** Bosch'un talimatı: arıza giderilemediğinde servisi ya da müşteri hizmetlerini ara, **gösterilen arıza kodunu ve cihaz bilgilerini** bildir. Kılavuzdaki tabloda istenenler cihaz adı, seri numarası, işletime alma tarihi ve yetkili servis; cihaz adı ve seri numarası kumanda paneli kapağındaki tip etiketinde yazılı.

## Basınç düşükse sıfırlama yetmez

Condens 5700i W'de basınç ayarlanan alt sınırın altına düştüğünde ekranda **LoPr** mesajı çıkar; 0,3 barın altında ısıtma tesisatı bloke edilir. Kılavuzun çözümü tesisatı doldurmak, yani reset değil. Doldurma işleminin tarifi modele göre değişiyor: Condens 2500 W kılavuzu doldurma vanasıyla 1–2 bara getirip vanayı kapatmayı anlatıyor; Condens 1200W ve 2200i W kılavuzları ise yetkili servisten nasıl yapıldığını göstermesini istemeni öneriyor.

## Ne zaman servis

- Aynı kod sıfırlamadan sonra geri geliyorsa
- Ekranda 2980 ya da Fd görüyorsan
- Gaz vanası açık olduğu hâlde alev algılanmıyorsa
- Basınç sık sık düşüyorsa

⛔ **Kendin-çöz sınırı burada biter.** Ekran, tuşlar, gaz vanasının kolu ve basınç göstergesi sende; kombinin kapağının içi, gaz hattı ve elektrik bağlantısı yetkili servisin.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ve seri numarası (tip etiketinden)
2. Ekrandaki kod ve H ya da ! sembolü
3. Sıfırlamadan sonra kod geri geldi mi?
4. Basınç kaç bar, gaz vanası açık mı?

Belirtiyi ve ekrandaki kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Petekler ısınmıyorsa [Bosch kombi kalorifer ısıtmıyor](/blog/bosch-kombi-kalorifer-isitmiyor/) yazısına bak. Bil, gör, çağır.

---
title: "Protherm kombi sıcak su veriyor, petekleri ısıtmıyor"
description: "Protherm kombi petekleri ısıtmıyorsa kılavuz önce ayara bakıyor: ısıtma konumu, gidiş suyu sıcaklığı, regler, basınç, radyatör vanaları ve hava."
slug: "protherm-kombi-kalorifer-isitmiyor"
date: "2026-10-23"
category: "Kombi"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ yazı alt ajanı (YK #182 Dalga 1, fork C). Bu konu yedekti: asıl atanan siemens-bulasik-makinesi-e24-hatasi YAZILMADI, çünkü Siemens'in
#   kendi belgelerinde E24 yok (kaynak-siemens-bulasik-sprint/ 4 kılavuz E:30/31/32/34/61-02/61-03 kullanıyor; siemens-home.bsh-group.com/tr destek
#   sayfalarında E24 sayfası yok, …/hata-kodu-e24 ve …/hata-kodlari bu koşuda 404). #88 gereği Bosch/Profilo belgesiyle Siemens yazısı yazılmadı.
# Konu seçimi (YK #179 kombi "ısıtmıyor" kümesi): origin/main'de protherm-kombi-kalorifer-isitmiyor yok. Protherm'de protherm-kombi-calismiyor
#   ("sıcak su da ısıtma da yok"), protherm-kombi-ariza-kodlari ve protherm-kombi-f22-hatasi var; bu yazı ayrı belirti: sıcak su var, petek soğuk.
# GSC: Sorgular.csv (3 ay ve 7 gün) Protherm + ısıtmıyor sorgusu yok.
# Otomatik tamamlama (#164, bu koşuda, hl=tr gl=tr) tohum "protherm kombi ısıtmıyor" → 1. "protherm kombi su ısıtmıyor", 2. "protherm kombi petekleri ısıtmıyor",
#   3. "protherm kombi su ısıtmıyor ne yapmalıyım", 4. "protherm kombi kalorifer ısıtmıyor", 8. "protherm kombi neden petekleri ısıtmıyor".
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile Protherm'in kendi alan adından yeniden indirildi; üçü de HTTP 200 application/pdf, md5 yerel kopyalarla
#   (kaynak-protherm-alarko-sprint/) aynı. Okuma pdftotext -layout, sayfa = PDF sayfası. #88: forum/servis sitesi kullanılmadı.
#  (P) Puma Condens 18/24 MKV-AS/1 kullanma kılavuzu 0020289282_02, 16 s.  https://www.protherm.com.tr/_temp/protherm-puma-condens-kullanma-kilavuzu-18-24.pdf  md5 ef689d0d0cd29a076485d66f769ceee4
#  (L) Lynx Condens 24/28 kW kullanma kılavuzu 0020277896_02, 20 s.  https://www.protherm.com.tr/_temp/7ba8cc34-c05a-44d9-90c1-607f1a2c579d.pdf  md5 a062e2f5414dde91e8e73afb33559a11
#  (G) Gepard Condens 20/24 KTV-FC/3 kullanma kılavuzu 0020281180_03, 16 s.  https://www.protherm.com.tr/_temp/c2f54fd4-f5ad-4a4c-a6a3-195cd32bb5f9.pdf  md5 e007ac08696eee927eb59ddd827dfb63
# Sayfa eşlemesi: gaz kokusu P s.3-4 · soğuk kışta ısıtma çalışır olsun P s.4 · gidiş suyu sıcaklığı + regler on/oF P s.7-8 · yaz konumu (oF) P s.8
#   · dolum basıncı kontrolü P s.8, doldurma 1,0-1,4 bar + radyatör termostat vanaları P s.9 · arıza kodu ekranı + rE sıfırlama P s.10 · Ek A/B tablo P s.12
#   ("Isıtma işletime geçmiyor (Sıcak su hazırlama çalışıyor) → Haricî regler doğru parametrelendirilmemiş") · işletme modları L s.12 · basınç 0,5-2,7 bar ayda bir L s.11
#   · tablo L s.15-16 (hava → "Radyatörün havasını alın", regler satırı) · oda termostatı sembolü G s.8 · basınç 1,0-2,0 bar, F10 G s.9 · kış konumu tuşu G s.10
#   · radyatör 30-80 °C G s.13 · tablo G s.13-14 (hava → "Yetkili servis tarafından ısıtma sisteminin havasını aldırın").
# BİLEREK YAZILMAYANLAR: regler/oda termostatı kablolama ve parametre (yetkili servis seviyesi kodla korunuyor) · 3 yollu vana, pompa, kart teşhisi
#   · "en sık neden" sıralaması · radyatör purjörünü kullanıcı adımı olarak dayatmak (Puma ve Gepard tabloları servise yönlendiriyor; model farkı olarak yazıldı)
#   · Eco/tasarruf modunun ısıtmayı kestiği iddiası (belgede yok) · fiyat/süre (#46) · pazar bağlantısı.
# Alıntı denetim tablosu: protherm-kombi-kalorifer-isitmiyor.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Kombinin kullanma kılavuzu", "Oda termostatının ya da reglerin kullanma kılavuzu (varsa)"]
steps:
  - "Ortamda gaz kokusu varsa kombiye ve elektrik düğmelerine dokunma; kapı ve pencereleri aç, gaz sayacındaki vanayı kapat, binadan çık ve gaz şirketini dışarıdan ara."
  - "Ekranda F ile başlayan bir arıza kodu var mı bak ve kodu not et."
  - "Isıtma konumunun açık olduğunu kontrol et; yaz konumundaysa kılavuzdaki tuşla ısıtmayı yeniden aç."
  - "Kalorifer gidiş suyu sıcaklığı çok düşük ayarlanmışsa artı tuşuyla yükselt ve onayla."
  - "Kombiye regler ya da oda termostatı bağlıysa ısıtma konumunun regler üzerinde açık ve doğru ayarlı olduğunu kontrol et."
  - "Ekrandaki dolum basıncına bak; kılavuzundaki aralığın altındaysa radyatör vanalarını açıp kılavuzdaki sırayla su takviyesi yap."
  - "Radyatör vanalarının açık olduğunu kontrol et; ısıtma sisteminde hava varsa kılavuzunun söylediği yolu izle."
  - "Tablodaki bütün kontrolleri yaptığın hâlde petekler ısınmıyorsa ya da kod tekrar ediyorsa Protherm yetkili servisine başvur."
faq:
  - q: "Protherm kombi sıcak su veriyor ama petekleri ısıtmıyor, neden?"
    a: "Protherm'in Puma Condens ve Lynx Condens kılavuzlarının arıza tablosunda tam bu satır var: sıcak su hazırlama çalışıyor, ısıtma işletime geçmiyor. Kılavuzun gösterdiği neden harici reglerin doğru ayarlanmamış olması, çözüm de regleri kendi kullanma kılavuzuna göre doğru ayarlamak. Regler yoksa önce ısıtma konumunun açık olduğuna ve gidiş suyu sıcaklığının çok düşük ayarlanmadığına bak."
  - q: "Protherm kombi yaz konumundan kış konumuna nasıl alınır?"
    a: "Model farkı var. Puma Condens'te regler bağlı değilse ısıtma, kalorifer gidiş suyu sıcaklığı oF seviyesine indirilerek kapatılıyor; ısıtmayı açmak için bir sıcaklık seçip onaylıyorsun. Lynx Condens'te ilgili tuşla ısıtma artı sıcak su ya da sadece ısıtma modunu seçiyorsun. Gepard Condens'te ısıtma konumu tuşu kış konumunu açıp kapatıyor; açıkken ekranda ısıtma sembolü ve gidiş suyu sıcaklığı görünüyor."
  - q: "Protherm kombide basınç kaç bar olmalı?"
    a: "Kılavuzlar farklı aralık veriyor. Puma Condens'te dolum basıncı 0,5 barın altındaysa sistem dolduruluyor, gerekli basınç 1,0 ile 1,4 bar. Gepard Condens'te 1,0 ile 2,0 bar öngörülüyor, 0,8 barın altında doldurma gerekiyor. Lynx Condens'te ayda bir kez basıncın 0,5 ile 2,7 bar arasında olduğundan emin olman isteniyor. Isıtma sistemi birden fazla kata yayılıyorsa daha yüksek değer gerekebilir; bunu yetkili servise sor."
  - q: "Peteklerin havasını kendim alabilir miyim?"
    a: "Kılavuzlar bu konuda farklı. Lynx Condens'in arıza tablosu ısıtma sisteminde hava varsa radyatörün havasını almanı, sorun tekrar ederse yetkili bayiye haber vermeni söylüyor. Puma Condens ve Gepard Condens tabloları ise ısıtma sisteminin havasını yetkili servise aldırmanı istiyor. Kendi modelinin kılavuzuna uy."
  - q: "Protherm kombide reset nasıl yapılır?"
    a: "Puma Condens'te ana ekrandaki açma/kapama tuşuna 3 saniyeden uzun basarak arızayı gideriyorsun, en fazla beş kez; ekranda rE görünüyor. Lynx Condens'te ilgili tuşa 3 saniyeden uzun basmak ürünü sıfırlıyor, Gepard Condens'te ayrı bir reset tuşu var. Ateşleme arızasını üç denemede gideremezsen kılavuzların talimatı yetkili servise başvurmak."
images:
  coverAlt: "Mutfak duvarında asılı beyaz bir kombi ve önünde soğuk görünen beyaz bir panel radyatör"
  steps:
    - "Çizim: solda duvar tipi kombi, sağda açık bir pencere"
    - "Çizim: solda duvar tipi kombi, sağda not defteri ve kalem"
    - "Çizim: solda duvar tipi kombi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi kombi, sağda kontrol panelindeki tuş ya da düğme"
    - "Çizim: solda duvar tipi kombi, sağda duvardaki oda termostatı"
    - "Çizim: solda duvar tipi kombi, sağda panel radyatör ve vanası"
    - "Çizim: solda duvar tipi kombi, sağda panel radyatör ve vanası"
    - "Çizim: solda duvar tipi kombi, sağda panel radyatör ve vanası"
---

Musluktan sıcak su geliyor, ama petekler soğuk. Kombi çalışıyor gibi görünüyor, sadece kaloriferi ısıtmıyor. Protherm'in Puma Condens ve Lynx Condens kullanma kılavuzlarının arıza tablosunda bu durum ayrı bir satır olarak geçiyor: **sıcak su hazırlama çalışıyor, ısıtma işletime geçmiyor.** Bu yazıda, servisi çağırmadan önce evde bakabileceğin her şeyi Puma Condens, Lynx Condens ve Gepard Condens kılavuzlarından sırayla topladık. Tuşlar modelden modele değişiyor; kendi kılavuzunla karşılaştır.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** Sıcak su var, ısıtma yoksa ilk şüpheli ayar. Isıtma konumu açık mı, gidiş suyu sıcaklığı çok mu düşük, regler doğru ayarlı mı bak. Basınç kılavuzdaki aralıkta, radyatör vanaları açık olmalı. Bunlar doğruysa Protherm yetkili servisi.

## Kılavuzun tablosu ne diyor

| Durum | Kılavuza göre neden | Kim ne yapar |
|---|---|---|
| **Sıcak su var, ısıtma yok** | Harici regler doğru ayarlanmamış | 🛠️ Regleri kendi kılavuzuna göre ayarla |
| **Gidiş suyu sıcaklığı çok düşük ya da kapalı** | Ayar | 🛠️ Sıcaklığı yükselt |
| **F.22 / F10** | Isıtma sisteminde yetersiz su | 🛠️ Su takviyesi; sık düşüyorsa servis |
| **Isıtma sisteminde hava** | Hava | Lynx: radyatörün havasını al · Puma, Gepard: yetkili servis |
| **F.28 / F04** | Ateşleme başarısız | 🛠️ Gaz kesme vanası, sıfırlama; sürerse servis |

## Adım adım: evde denenecekler

**1. Önce kokuya bak.** Puma Condens kılavuzunun emniyet bölümü gaz kokusuyla başlıyor: gaz kokusu olan yerde bulunma, mümkünse kapı ve pencereleri açıp cereyan yap, çakmak ve kibritle yaklaşma, sigara içme, elektrik şalterlerini, prizleri, zili ve telefonu kullanma. **Gaz sayacı kapatma düzeneğini** ya da ana kapatma düzeneğini kapat, mümkünse üründeki gaz kesme vanasını da kapat, diğer sakinleri uyar ve binayı terk et. Gaz şirketinin acil durum birimine **evin dışındaki bir telefondan** haber ver. Bu durumda aşağıdaki adımlara geçilmez.

**2. Ekranda kod var mı?** Puma Condens'te bir arıza oluştuğunda ana ekran **F ile başlayan arıza kodu** ile gidiş suyu sıcaklığı arasında geçiş yapar. Kod varsa önce onun satırına bak: **F.22** tesisat basıncının çok düşük olduğunu, **F.28** ateşlemenin başarısız olduğunu söyler. Gepard Condens'te aynı işi **F10** ve **F04** yapıyor. Ayrıntılar [Protherm kombi arıza kodları](/blog/protherm-kombi-ariza-kodlari/) sayfasında.

**3. Isıtma konumu açık mı?** Kombi yaz konumunda bırakılmışsa yalnız sıcak su verir. Puma Condens'te regler bağlı değilse ısıtma, kalorifer gidiş suyu sıcaklığı **oF** seviyesine indirilerek kapatılıyor; gidiş suyu ayarında oF görüyorsan bir sıcaklık seç ve onayla. Lynx Condens'te işletim modu tuşuyla **ısıtma + sıcak su** ya da **sadece ısıtma** modunu seç. Gepard Condens'te **ısıtma konumu tuşu** kış konumunu açıp kapatıyor; açıkken ekranda ısıtma sembolü ve gidiş suyu sıcaklığı görünür.

**4. Gidiş suyu sıcaklığına bak.** Üç kılavuzun tablosunda da "gidiş suyu sıcaklığı çok düşük ayarlanmış" ayrı bir neden. Puma Condens'te gidiş suyu sıcaklığı sembolü yanıp sönene kadar ilgili tuşa bir kez basıp eksi ya da artı tuşuyla ayarlıyor, sonra onaylıyorsun; ayarlanan değer iki kez hızla yanıp söner. Gepard Condens'in ayar tablosuna göre radyatörlü sistemde gidiş suyu **30–80 °C** arasında. Lynx Condens kılavuzu, yetkili bayinin ayarlayabileceğin en yüksek sıcaklığı sınırlamış olabileceğini de not ediyor.

**5. Regler ya da oda termostatı.** Puma ve Lynx kılavuzlarının tablosundaki satır tam bu belirti: sıcak su çalışıyor, ısıtma çalışmıyor; neden **harici reglerin doğru ayarlanmamış** olması, çözüm regleri kendi kullanma kılavuzuna göre doğru ayarlamak. Puma Condens'te regler bağlıysa gidiş suyu ekranında **on** ya da **oF** görünür: on ısıtma konumunun açık, oF kapalı olduğunu gösterir. oF varsa tuşla ısıtma konumunu aç, onayla ve sıcaklığı reglerden ayarla. Gepard Condens'te oda termostatı bağlıysa ekranda ayrı bir sembol yanar.

**6. Basıncı kontrol et.** Puma Condens'te ana ekranda ilgili tuşa üç kez basınca güncel dolum basıncı görünür; **0,5 barın altındaysa** sistemi doldur. Kılavuzun sırası: tüm radyatör termostat vanalarını aç, doldurma vanasını yavaşça aç, **1,0–1,4 bara** ulaşınca kapat. Gepard Condens'te öngörülen aralık **1,0–2,0 bar**, Lynx Condens'te **0,5–2,7 bar**. Lynx kılavuzuna göre basınç düşmesi sık yaşanıyorsa yetkili bayiye başvurmalısın. Ayrıntı [Protherm kombi F22 hatası](/blog/protherm-kombi-f22-hatasi/) yazısında.

**7. Radyatör vanaları ve hava.** Doldurma talimatı bile tüm radyatör vanalarının açık olmasıyla başlıyor; tek bir oda soğuksa önce o peteğin vanasına bak. Isıtma sisteminde hava varsa kılavuzlar farklı yol çiziyor: Lynx Condens tablosu **radyatörün havasını almanı**, sorun tekrar ederse yetkili bayiye haber vermeni söylüyor; Puma Condens ve Gepard Condens tabloları havayı **yetkili servise aldırmanı** istiyor. Kendi modelinin kılavuzuna uy.

**8. Ayarlar doğruysa servis.** Lynx Condens kılavuzunun cümlesi: tablodaki tüm noktaları kontrol ettiğin hâlde ürün sorunsuz çalışmıyorsa arıza giderme için yetkili bayiye başvur. Puma Condens de arızayı belirtilen önlemlerle gideremiyorsan yetkili servise başvurmanı söylüyor.

## Reset ne zaman işe yarar

Puma Condens'te ana ekrandaki açma/kapama tuşuna **3 saniyeden uzun** basarak arızayı gideriyorsun, en fazla beş kez; ekranda **rE** görünür. Lynx Condens'te ilgili tuşa 3 saniyeden uzun basmak ürünü sıfırlıyor, Gepard Condens'te ayrı bir reset tuşu var. Ateşleme arızasını üç denemede gideremiyorsan kılavuzların talimatı yetkili servise başvurmak. Reset bir ayar hatasını düzeltmez; ısıtma konumu kapalıysa petekler yine soğuk kalır.

## Ne zaman servis

- Isıtma konumu, sıcaklık ve regler doğru olduğu hâlde petekler soğuk kalıyorsa
- Basınç sık sık düşüyorsa
- F.28 ya da F04 üç sıfırlama denemesinden sonra geri geliyorsa
- Puma ya da Gepard'da sistemde hava varsa
- Gepard'da bakım sembolü yanıyorsa (ürün çalışmaya devam eder, ama bakım gerekir)

⛔ **Kendin-çöz sınırı burada biter.** Ekran, tuşlar, regler ayarı, basınç göstergesi ve radyatör vanaları sende; kombinin kapağının içi, gaz hattı, regler bağlantısı ve yetkili servis seviyesi uzmanın.

## Servisi aramadan önce kısa özet

1. Kombinin modeli ne (Puma, Lynx, Gepard ya da başka)?
2. Ekranda F ile başlayan bir kod var mı?
3. Isıtma konumu açık mı, gidiş suyu kaç dereceye ayarlı?
4. Basınç kaç bar?
5. Bütün odalar mı soğuk, yoksa tek bir oda mı?

Belirtiyi ve ekrandaki kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Ne sıcak su ne ısıtma varsa [Protherm kombi çalışmıyor](/blog/protherm-kombi-calismiyor/) yazısına, marka bağımsız nedenler için [petekler ısınmıyor](/blog/petekler-isinmiyor/) yazısına, basınç değerleri için [kombi basıncı kaç olmalı](/blog/kombi-basinci-kac-olmali/) sayfasına bak. Bil, gör, çağır.

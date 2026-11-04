---
title: "Profilo fırın sembolleri ve anlamları"
description: "Profilo ankastre fırında düğme ve ekran sembolleri: ısıtma türleri, ısıtma göstergesi, SAFE, saat ve E mesajı. FRMA226 ve FRGA103I kılavuzlarından."
slug: "profilo-firin-sembolleri-ve-anlamlari"
date: "2026-11-05"
category: "Fırın / Ocak"
# --- Provenans (yayında görünmez) ---
# 2026-11-04 Çar PAZ alt ajanı (YK #189 sembol kuyruğu, Per 5 Kas sembol yazısı). Konu: yk189/SEMBOL-ENVANTERI.md satır 7 (Profilo fırın, YAZILABİLİR, OT 3/3, kuyruk sırası 7).
#   Kuyruk 1-6 (Profilo çamaşır, Vestel kurutma, Siemens çamaşır, Arçelik fırın, Bosch fırın, Profilo bulaşık) origin/main'de VAR (4 Kas fetch); 7. sıradaki Profilo fırın YOK:
#   content/blog/ içinde profilo-firin-sembolleri* ve adında "profilo" + "firin" geçen içerik yok (Profilo'da fırın yazısı hiç yok). Slug origin/main'de yok.
# Konu kanıtı: Google otomatik tamamlama 4 Kas 2026 (hl=tr): tohum "profilo fırın sembolleri" → 1. "profilo fırın sembolleri ve anlamları", 2. "profilo fırın sembolleri", 3. "profilo ankastre fırın sembolleri ve anlamları";
#   tohum "profilo fırın sembolleri ve" → 1. "…ve anlamları", 2. "profilo ankastre fırın sembolleri ve anlamları". SEMBOL-ENVANTERI satır 7: OT 3/3, GSC 0. GSC kanıt sayılmadı.
# Belgeler (#88), düz curl -sL (özel başlık yok), HTTP 200 application/pdf; ham dosyalar _kaynak/profilo-firin-sembolleri-ve-anlamlari/:
#  (R) Profilo ankastre fırın FRMA226. kullanım kılavuzu ve kurulum talimatları (belge no 9001771866_D, 40 s.), md5 a86b168874d8778ca41272c5d7166c07 — PDF s.6, 7, 9, 10, 11, 17, 18 https://media3.bsh-group.com/Documents/9001771866_D.pdf
#  (G) Profilo ankastre fırın FRGA103I kullanım kılavuzu ve kurulum talimatları (belge no 9001627929_B, 32 s.), md5 1863661017c72bd0385ba56db04e62de — PDF s.6, 7, 8, 14 https://media3.bsh-group.com/Documents/9001627929_B.pdf
#  Marka kontrolü: iki PDF de media3.bsh-group.com'da durur (BSH adresi tuzağı) ama belgelerin kendisi Profilo'dur: R'nin PDF başlığı "...FRMA226. | Profilo", konusu "Profilo Ankastre fırın FRMA226", metinde www.profilo.com ve profilo-yetkiliservisi.com; G'de www.profilo.com ve profilo-yetkiliservisi.com. "Bosch" ya da "Siemens" yazıda geçmiyor.
#  Elendi: yok. Sayfa = PDF sayfası (iki belgede basılı numara PDF sayfasıyla aynı).
# BİLEREK YAZILMAYANLAR: sembol şekli tarifi (tablolardaki glifler metinde adlandırılmıyor; yalnız belgenin verdiği adlar yazıldı) · fırın lambası değişimi (cam kapak ve elektrik; servis/yetkili işi, firin-lambasi-yanmiyor'a bağlandı) · rezistans/fan/elektronik · kapı ve cam sökümü · Bosch/Siemens benzerliği iddiası · fiyat (#46).
# Alıntı denetimi: profilo-firin-sembolleri-ve-anlamlari.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Alet gerekmiyor"]
steps:
  - "Ekranda SAFE yanıyor ve fırın ayara tepki vermiyorsa işlev düğmesini sıfıra çevir, saat çizili tuşu SAFE sönene kadar basılı tut."
  - "Ekranda saat yanıp sönüyorsa eksi ya da artı tuşuyla güncel saati ayarla, saat tuşuna bas."
  - "Fırın ısınmıyorsa işlev düğmesinin sıfır dışında, sıcaklık düğmesinin sıfır konumunda olmadığını kontrol et."
  - "Isıtma göstergesi yanıyorsa bekle; gösterge ilk kez söndüğünde yemeği fırına koy."
  - "Hızlı ısıtma seçtiysen sinyal sesini bekle, işlev düğmesiyle uygun ısıtma türüne geç, sonra yemeği koy."
  - "Süre dolup sinyal sesi duyulduysa herhangi bir tuşa bas, işlev düğmesini sıfıra çevir."
  - "Ekranda E harfi içeren mesaj varsa saat tuşuna bas; mesaj tekrar belirirse müşteri hizmetlerini ara."
faq:
  - q: "Profilo fırında ekranda SAFE yazması ne demek?"
    a: "SAFE, çocuk kilidinin açık olduğunu gösterir. Profilo FRMA226 kılavuzunun arıza tablosuna göre ekranda SAFE yanıyorsa ve cihaz ayarlanamıyorsa çocuk kilidi etkindir. Kapatmak için işlev düğmesi sıfır konumundayken saat çizili tuşu ekranda SAFE sönene kadar basılı tut."
  - q: "Profilo fırında ısıtma göstergesi neden ara ara sönüyor?"
    a: "Isıtma molalarında söner. Profilo FRMA226 kılavuzuna göre gösterge cihaz ısıtma yaptığında yanar ve ısıtma molalarında söner. FRGA103I'de aynı iş sıcaklık düğmesinin üzerindeki gösterge lambasıdır. İki kılavuza göre ön ısıtmada gösterge ilk kez söndüğünde yemeği fırına koymanın en uygun zamanı gelmiştir."
  - q: "Profilo fırında saat neden yanıp sönüyor?"
    a: "Elektrik beslemesi kesilmiştir. Profilo FRMA226 kılavuzuna göre bağlantıdan ya da elektrik kesintisinden sonra ekranda saat yanıp söner ve 12:00 olarak başlar. İşlev düğmesi sıfır konumundayken eksi ya da artı tuşuyla güncel saati ayarlayıp saat tuşuna basman yeterlidir."
  - q: "Profilo fırında hızlı ısıtma ne zaman kullanılır?"
    a: "Yalnız 100 °C üzerindeki sıcaklıklarda. Profilo FRMA226 kılavuzu hızlı ısıtmayı sadece 100 °C üstünde kullanmanı istiyor. Bittiğinde sinyal sesi duyulur ve ısıtma göstergesi söner; yemek ancak bundan sonra fırına konur."
  - q: "Semboller bütün Profilo fırınlarda aynı mı?"
    a: "Değil. FRMA226'da ekran, saat, çocuk emniyeti, hızlı ısıtma, pizza, alttan ısıtma, sıcak hava hassas ve üstten/alttan ısıtma var; buz çözme yok. FRGA103I'de ekran yok, dört ısıtma türü var ve buz çözme onlardan biri. Kesin karşılık kendi modelinin kılavuzundadır."
images:
  coverAlt: "Düğmeli ve ekranlı sade ankastre fırın kumanda paneli çizimi"
  steps:
    - "Fırın panelindeki kilit tuşunu basılı tutan beyaz eldivenli sade siluet el çizimi"
    - "Fırın panelindeki saat tuşuna dokunan beyaz eldivenli sade siluet el çizimi"
    - "Fırının sıcaklık düğmesini çeviren beyaz eldivenli sade siluet el çizimi"
    - "Fırın düğmesinin yanındaki gösterge lambasının önünde bekleyen beyaz eldivenli sade siluet el çizimi"
    - "Fırının işlev düğmesini çeviren beyaz eldivenli sade siluet el çizimi"
    - "Fırın panelindeki bir tuşa basan beyaz eldivenli sade siluet el çizimi"
    - "Telefonu fırın panelinin yanında tutan beyaz eldivenli sade siluet el çizimi"
---

Profilo fırındaki sembollerin çoğu arıza değil, ısıtma türü ya da durum bilgisidir. Profilo FRMA226 kılavuzu 7 ısıtma türü ve 3 ek fonksiyon sembolünü, Profilo FRGA103I kılavuzu 4 ısıtma türü sembolünü listeliyor. İki kılavuzda da sıcaklık düğmesi 50 ile 275 °C arasında çalışıyor.

Arıza bildiren tek küme, ekranda E harfi içeren mesajdır. FRMA226 kılavuzu bu mesaj için tuşa basmayı, mesaj tekrar belirirse müşteri hizmetlerini aramayı yazıyor. Ekranda SAFE çocuk kilididir, yanıp sönen saat elektrik kesintisidir.

Bu yazı iki Profilo ankastre fırın kılavuzuna dayanıyor: ekranlı ve tuşlu **FRMA226** ile yalnız düğmeli **FRGA103I**. Kılavuzlar resimdeki bazı ayrıntıların cihaz tipine göre farklı olduğunu söylüyor; **kendi modelinin kılavuzu esastır.**

## Profilo fırında ısıtma türü sembolleri ne anlama gelir?

Soldaki işlev düğmesi ısıtma türünü seçer. İki kılavuzdaki ısıtma türü listesi şöyle:

| Isıtma türü | Ne için | FRMA226 | FRGA103I |
|---|---|---|---|
| 3D sıcak hava | Bir veya birden fazla seviyede pişirme ve kızartma | var | var |
| Sıcak hava hassas | Ön ısıtmasız, tek seviyede, 120-230 °C, kapak kapalı | var | yok |
| Pizza fonksiyonu | Alttan çok ısı isteyen yemek ve pizza | var | yok |
| Alttan ısıtma | Yemeği yeniden pişirme, sıcak suda pişirme | var | yok |
| Üstten/alttan ısıtma | Tek seviyede geleneksel pişirme; sulu kekler | var | yok |
| Izgara, geniş yüzey | Biftek, sosis, tost; gratine | var | var |
| Hava dolaşımlı ızgara | Kümes hayvanı, bütün balık, büyük et parçası | var | var |
| Buz çözme | Donmuş yiyeceğin buzunu hassas çözme | yok | var |

FRMA226'da ayrıca **hızlı ısıtma**, **ıslak temizlemeye yönelik temizleme asistanı** ve **fırın lambası** sembolleri var. Fırın lambası konumu, pişirme bölümünü ısıtmadan aydınlatır.

## Sıcaklık düğmesindeki işaretler ne anlama gelir?

- **Sıfır konumu:** cihaz ısıtmıyor.
- **50-275:** pişirme bölümündeki sıcaklık, °C olarak.
- **1, 2, 3 ya da I, II, III:** ızgara kademeleri. 1 zayıf, 2 orta, 3 güçlü.

FRMA226 kılavuzu 250 °C üzerindeki ayarlarda fırının yaklaşık 10 dakika sonra yaklaşık 240 °C'ye döndüğünü yazıyor. Üstten/alttan ve alttan ısıtmada bu düşüş olmuyor.

## Isıtma göstergesi ne zaman yanar, ne zaman söner?

Gösterge fırının ısıtma yaptığını söyler. FRMA226'da ekranda bir sembol, FRGA103I'de sıcaklık düğmesinin üzerinde bir lamba olarak görünür. Isıtma molalarında söner; bu arıza değildir.

İki kılavuzdan çıkan kural aynı: ön ısıtmada gösterge **ilk kez söndüğünde** yemeği fırına koymanın en uygun zamanı gelmiştir. FRGA103I'de bir not daha var: fırın lambası konumunda sıcaklık ayarlanırsa gösterge yanar ama cihaz ısıtmaz. Kılavuzlar ayrıca termik hareketsizlik nedeniyle gösterilen sıcaklıkla fırının içindeki gerçek sıcaklığın biraz farklı olduğunu yazıyor.

## Ekrandaki saat, zaman ve çocuk emniyeti sembolleri ne anlama gelir?

Bu bölüm yalnız ekranlı **FRMA226** için geçerli. FRGA103I kılavuzunda ekran, saat ve çocuk emniyeti yok.

- **Zil:** zamanlayıcı. Alarm saatini ayarlar, fırından bağımsız çalışır.
- **Saat çizili tuş:** zaman fonksiyonları. Saat, süre ve bitiş zamanı arasında geçmek için tuşa birkaç kez basılır. Kılavuz çocuk emniyetini de aynı tuş sembolüyle gösteriyor.
- **Eksi ve artı:** ayar değerini azaltır ya da artırır.
- **SAFE:** çocuk kilidi açık. Açıp kapatmak için işlev düğmesi sıfır konumundayken saat çizili tuş, ekranda SAFE görünene ya da sönene kadar basılı tutulur. Elektrik kesintisinden sonra çocuk emniyeti artık etkin değildir.
- **Yanıp sönen saat:** elektrik kesintisi oldu; saat 12:00'dan başlar.

## Hızlı ısıtma sembolü ne zaman kullanılır?

FRMA226 kılavuzu hızlı ısıtmayı sadece 100 °C üzerindeki sıcaklıklarda kullanmanı istiyor. Bittiğinde sinyal sesi duyulur ve ısıtma göstergesi söner. Eşit pişme için yemek ancak hızlı ısıtma bittikten sonra fırına konur. Kılavuz hızlı ısıtmadan sonra 3D sıcak hava ya da üstten/alttan ısıtmayı öneriyor.

## Hangi semboller arıza bildirir?

FRMA226 kılavuzunun arıza tablosu ekrandaki üç durumu sayıyor:

- **Saat yanıp sönüyor:** elektrik beslemesi kesildi; saati yeniden ayarla.
- **SAFE yanıyor, cihaz ayarlanamıyor:** çocuk kilidi etkin; tuşla devre dışı bırak.
- **E harfi içeren mesaj:** elektronik arızası. Saat çizili tuşa bas; arıza bir defaya mahsus ise mesaj kaybolur. Tekrar belirirse müşteri hizmetlerini ara, mesajı ve cihazın E numarasını eksiksiz söyle.

## Adım adım: sembol yandığında yapılacaklar

**1.** Ekranda SAFE yanıyor ve fırın ayara tepki vermiyorsa işlev düğmesini sıfıra çevir, saat çizili tuşu SAFE sönene kadar basılı tut.

**2.** Ekranda saat yanıp sönüyorsa eksi ya da artı tuşuyla güncel saati ayarla, saat tuşuna bas. İşlev düğmesi sıfırda olmalı.

**3.** Fırın ısınmıyorsa işlev düğmesinin sıfır dışında, sıcaklık düğmesinin sıfır konumunda olmadığını kontrol et. İşlev düğmesi fırın lambası konumundaysa fırın ısıtmaz.

**4.** Isıtma göstergesi yanıyorsa bekle; gösterge ilk kez söndüğünde yemeği fırına koy.

**5.** Hızlı ısıtma seçtiysen sinyal sesini bekle, işlev düğmesiyle uygun ısıtma türüne geç, sonra yemeği koy.

**6.** Süre dolup sinyal sesi duyulduysa herhangi bir tuşa bas, işlev düğmesini sıfıra çevir. Kılavuza göre süre sonunda fırın ısıtmayı durdurur; lamba ve soğutma fanı kapanmıyorsa işlev düğmesini sıfıra çevirmek gerekir.

**7.** Ekranda E harfi içeren mesaj varsa saat tuşuna bas; mesaj tekrar belirirse müşteri hizmetlerini ara ve cihazın E numarasını hazır tut.

## Ne zaman servis işi?

Çocuk kilidi, saat, ısıtma göstergesi ve hızlı ısıtma sembolleri bilgi veriyor; çözümleri sende. Tekrar eden E mesajı işin rengini değiştirir. Her iki Profilo kılavuzu da usulüne uygun olmayan onarımın tehlikeli olduğunu, onarımı yalnız eğitimli uzman personelin yapabileceğini yazıyor. Rezistans, fan ve elektronik **servis işidir**; kasayı açma.

Fırın hiç ısınmıyorsa [fırın ısınmıyor](/blog/firin-isinmiyor/), lamba yanmıyorsa [fırın lambası yanmıyor](/blog/firin-lambasi-yanmiyor/), kilit açılmıyorsa [fırın çocuk kilidi nasıl açılır](/blog/firin-cocuk-kilidi-nasil-acilir/) yazısına bak. Benzer bir sembol listesi için [Arçelik fırın sembolleri ve anlamları](/blog/arcelik-firin-sembolleri-ve-anlamlari/) ve Profilo'nun başka bir cihazı için [Profilo bulaşık makinesi sembolleri ve anlamları](/blog/profilo-bulasik-makinesi-sembolleri-ve-anlamlari/) sayfaları var.

Kaynak: Profilo FRMA226 kullanım kılavuzu (https://media3.bsh-group.com/Documents/9001771866_D.pdf) ve Profilo FRGA103I kullanım kılavuzu (https://media3.bsh-group.com/Documents/9001627929_B.pdf).

Belirtiyi ve fırının modelini benservis.com'a yaz; olası arızayı öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

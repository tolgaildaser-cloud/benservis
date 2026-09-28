---
title: "Daikin klima E0 hatası"
description: "Daikin klimada E0, Daikin Türkiye'ye göre iç ya da dış ünitede genel arıza. Fişten çekip 5 dakika bekleme, temel kontroller ve servis sınırı adım adım."
slug: "daikin-klima-e0-hatasi"
date: "2026-09-28"
category: "Klima"
# --- Provenans (yayında görünmez) ---
# 2026-09-28, curl -sL -A "Mozilla/5.0" ile indirildi, hepsi HTTP 200. HTML sayfalar script/style ayıklanıp düz metne çevrilerek okundu.
# Web araması yalnız belgelerin YERİNİ bulmak için.
#  W) daikin.com.tr "Daikin Klima Hata Kodları Nelerdir, Nasıl Çözülür?"  https://www.daikin.com.tr/bilgi-ve-ipuclari/daikin-klima-hata-kodlari-nelerdir-nasil-cozulur  md5 c2a49add61690e63ffe56243ecaf46ba
#  W2) daikin.com.tr "Klima Arızalarında Yapılması Gerekenler Nelerdir?"  https://www.daikin.com.tr/bilgi-ve-ipuclari/klima-arizalarinda-yapilmasi-gerekenler-nelerdir  md5 0579be2f212f6d73ada37c41be383b78
#  W3) daikin.com.tr "Klima Arızaları: Hangi Durumlarda Servis Çağırmalısınız?"  https://www.daikin.com.tr/bilgi-ve-ipuclari/hangi-durumlarda-servis-cagirmalisiniz  md5 fca3aecf50ef4d949689d526b34989ad
#  S) Sensira FTXF20~42E5V1B  https://st-daikin.mncdn.com/Content/media/img_shared/PDF/Daikin-Sensira-Kullanim-Kilavuzu.pdf  16 s.  md5 ab2d928437bec2a3d5f374f3aee85cb1
#  (HTML md5'leri indirme anına aittir; sayfa dinamik parça içeriyor.)
# E0 satırı YALNIZ W'de: "E0: Genel Arıza | Anlamı: İç ya da dış ünitede genel bir arıza tespit edilmiştir. | Çözüm: Cihazı kapatıp fişten çekin.
#   5 dakika bekledikten sonra yeniden başlatın. Sorun devam ediyorsa yetkili servisle iletişime geçin."
#   W "Hata Kodlarıyla Karşılaştığınızda Ne Yapmalısınız?": "1.Cihazınızı fişten çıkarın ve 5 dakika bekleyip tekrar başlatın. 2.Kumandanızda hata kodu varsa
#   not alın veya fotoğrafını çekin. Temel kontrolleri yapın (filtre, hava akışı, sigorta). Sorun devam ediyorsa mutlaka Daikin Yetkili Servisinden destek alın."
#   ⚠️ Kod tablosu içeren indirilen kılavuzlarda (Sensira, FTXA, FTXF50~71, FTXM-M, Ururu Sarara) E0 satırı YOK; Perfera/Emura/FTXM-A'da tablo yok. Gövdede E0 anlamı
#   yalnız W'ye dayandırıldı ve "tablolar seriye göre değişir, kesin karşılık modelin kılavuzunda" notu verildi.
# Kod okuma: S s.13 (CANCEL 5 sn → 00 yanıp söner → sürekli bip sesine kadar CANCEL art arda) · W aynı yolu tarif ediyor.
# Sigorta/elektrik: W2 "Sigortalar atmış olabilir, kontrol edin. Elektrik kaynaklı sorunlarda profesyonel destek alınması önerilir."
#   S s.11 "kesiciyi KAPATIN ya da besleme kordonunu fişten çekin" · W4 (klima-calismama-sorunu-ve-cozumleri, md5 b0698703898a71d2799b8334f8a537ad) "Sigorta kutusunda klimanın bağlı olduğu hattın aktif olduğundan emin olun."
#   W3 "Klima açıldığında evin sigortası atıyorsa ... Yetkili servise başvurulmalıdır." · S s.12 emniyet cihazı sık devreye girerse ana güç anahtarını KAPATIN.
# Filtre/hava akışı: W2 "Ön paneli açarak filtreleri çıkarıp temizleyin. Hava giriş ve çıkışlarının önünde engel olmadığından emin olun."
# Bilerek YAZILMAYANLAR: E0'ın kart/sensör/gaz gibi alt sebebi (W'de yok); başka markaların E0 anlamı; kod ekranını sıfırlama.
# Alıntı denetim tablosu: daikin-klima-e0-hatasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~15 dakika"
  totalTime: "PT15M"
  cost: "Ücretsiz"
  tools: ["Uzaktan kumanda", "Telefon kamerası"]
steps:
  - "Kumandada görünen kodu fotoğrafla ya da not al."
  - "Klimayı kumandadan kapat ve fişini çek ya da bağlı olduğu sigortayı kapat."
  - "5 dakika bekle."
  - "Fişi tak ya da sigortayı aç ve klimayı kumandayla yeniden başlat."
  - "İç ünitenin filtrelerini kontrol et; kirliyse ön paneli açıp çıkar ve temizle."
  - "İç ve dış ünitenin hava giriş ve çıkışlarının önünde engel olmadığından emin ol."
  - "E0 geri gelirse ya da sigorta atıyorsa klimayı kapat ve Daikin yetkili servisine başvur."
faq:
  - q: "Daikin klimada E0 hatası ne demek?"
    a: "Daikin Türkiye'nin hata kodları sayfasına göre E0 genel arıza kodudur: iç ya da dış ünitede genel bir arıza tespit edilmiştir. Kod tek başına arızanın hangi parçada olduğunu söylemez. Daikin'in kullanım kılavuzlarındaki kod tabloları seriye göre değiştiği için modelinin kılavuzunda E0 satırı olup olmadığına da bakmakta fayda var."
  - q: "E0'da ilk ne yapmalıyım?"
    a: "Daikin Türkiye'nin önerisi: cihazı kapatıp fişten çek, 5 dakika bekledikten sonra yeniden başlat. Sorun devam ediyorsa yetkili servisle iletişime geç. Aynı sayfa ayrıca kodu not almayı ya da fotoğrafını çekmeyi ve filtre, hava akışı, sigorta gibi temel kontrolleri yapmayı öneriyor."
  - q: "Klimanın fişine ulaşamıyorum, ne yapmalıyım?"
    a: "Daikin'in kullanım kılavuzu enerjiyi kesmek için iki yol veriyor: kesiciyi kapatmak ya da besleme kordonunu fişten çekmek. Fişe ulaşamıyorsan sigorta kutusunda klimanın bağlı olduğu sigortayı ya da kesiciyi kapat, 5 dakika bekle, sonra aç ve klimayı kumandayla yeniden başlat."
  - q: "Hata kodunu kumandadan nasıl görürüm?"
    a: "Daikin'in Sensira kılavuzundaki yol şu: kablosuz kumandayı iç üniteye doğrult ve CANCEL (iptal) düğmesine yaklaşık 5 saniye bas; sıcaklık alanında 00 yanıp söner. Sonra sürekli bir bip sesi duyana kadar CANCEL düğmesine art arda bas; o anda ekrandaki kod cihazın kodudur."
images:
  coverAlt: "Elinde klima kumandası tutan bir kişi; kumandanın küçük ekranında iki karakterli kod görünüyor, arka planda duvar tipi iç ünite"
---

Klima çalışmıyor ve ekranda ya da kumandada **E0** var. Daikin Türkiye'nin hata kodları sayfasında bu kodun karşılığı genel bir tanımdır: **"İç ya da dış ünitede genel bir arıza tespit edilmiştir."** Aynı sayfanın önerdiği ilk adım da nettir: **cihazı kapatıp fişten çek, 5 dakika bekledikten sonra yeniden başlat.** Bu yazıda o adımı ve Daikin'in önerdiği temel kontrolleri adım adım açıyoruz.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** E0 = Daikin Türkiye'ye göre iç ya da dış ünitede genel arıza. Sıra şu: kodu fotoğrafla → klimayı kapat, fişini çek ya da sigortasını kapat → 5 dakika bekle → yeniden başlat → filtreye ve hava yollarına bak. E0 sürüyorsa → Daikin yetkili servis.

## Adım adım: evde denenecekler

**1. Kodu kayda al.** Daikin'in önerisi, kumandada hata kodu varsa **not almak ya da fotoğrafını çekmek**. Kod, servisle konuşurken işine yarar.

**2. Klimayı kapat, enerjisini kes.** Kumandadan kapat, sonra **fişini çek**. Fişe ulaşamıyorsan klimanın bağlı olduğu **sigortayı ya da kesiciyi** kapat.

**3. 5 dakika bekle.** Daikin'in E0 çözümündeki süre **5 dakikadır**. Bu sürede cihaza enerji verme.

**4. Yeniden başlat.** Fişi tak ya da sigortayı aç ve klimayı kumandayla yeniden başlat. Klima normal çalışıyorsa izlemeye devam et.

**5. Filtreye bak.** Daikin Türkiye, arıza durumunda **ön paneli açarak filtreleri çıkarıp temizlemeyi** öneriyor; kirli filtreler hem verimi düşürür hem cihazı zorlar. Filtreyi çıkarmadan önce klimanın enerjisini yine kes.

**6. Hava yollarını aç.** Aynı sayfanın ikinci kontrolü: iç ve dış ünitenin **hava giriş ve çıkışlarının önünde engel olmadığından** emin ol.

**7. Sürüyorsa servise.** E0 yeniden başlatmadan sonra da geliyorsa Daikin'in talimatı açık: **yetkili servisle** iletişime geç. Klima açıldığında evin sigortası atıyorsa da Daikin'in önerisi aynıdır: elektriksel bağlantılarda sorun olabilir, yetkili servise başvur.

## E0 neden "genel" bir kod?

Daikin'in kullanım kılavuzlarındaki kod tabloları kodları üç gruba ayırıyor: **sistem (U), iç ünite (A, C) ve dış ünite (E, F, H, J, L, P)**. Bu tablolarda her kod belirli bir parçayı ya da korumayı adlandırır; örneğin A5 donma koruması veya yüksek basınç kontrolü, E7 dış ünite fanıdır. E0 ise Daikin Türkiye'nin tanımına göre iç ya da dış ünitede **genel** bir arızayı bildirir; hangi parça olduğunu kod söylemez.

Kod tabloları seriye göre değişir. Ekranında E0 görüyorsan modelinin kullanım kılavuzundaki hata kodu tablosuna da bak; kılavuzunda bu kod için ayrı bir tanım varsa o tanım cihazın için geçerlidir.

Belirli parçayı adlandıran kodlar ve kullanıcıya verdikleri kontroller için [Daikin klima A5 hatası](/blog/daikin-klima-a5-hatasi/), [Daikin klima E7 hatası](/blog/daikin-klima-e7-hatasi/) ve [Daikin klima F6 hatası](/blog/daikin-klima-f6-hatasi/) yazılarına; tüm tablo için [Daikin klima hata kodları](/blog/daikin-klima-hata-kodlari/) yazısına bakabilirsin.

## Kodu kumandadan okuma

Kablosuz kumandalı Daikin modellerinde kodu kumandadan da okuyabilirsin. Daikin'in Sensira kılavuzundaki sıra:

- Kablosuz kumandayı iç üniteye doğrult ve **CANCEL (iptal)** düğmesine yaklaşık **5 saniye** bas; sıcaklık alanında **00** yanıp söner.
- **Sürekli bir bip sesi** duyana kadar CANCEL düğmesine art arda bas. O anda ekranda görünen kod, cihazın kodudur.
- Kısa bir bip ve ardından iki bip, kodun eşleşmediğini gösterir.
- Kod ekranından çıkmak için CANCEL'e 5 saniye bas; 1 dakika hiçbir düğmeye basmazsan ekran kendiliğinden kapanır.

## Nerede durmalısın

⛔ **Kendin-çöz sınırı burada biter.** Fiş, sigorta, filtre ve hava yolu kullanıcıya aittir; kart, kablo bağlantıları ve dış ünitenin içi servise aittir. Daikin Türkiye, elektrik kaynaklı sorunlarda profesyonel destek alınmasını, hata kodu sürekli görünüyorsa yetkili servis desteğini zorunlu durumlar arasında sayıyor.

## Servisi aramadan önce iki dakikalık özet

1. Kodun fotoğrafı ya da notu elinde mi?
2. Klima 5 dakika enerjisiz bırakılıp yeniden başlatıldı mı?
3. Filtreler temiz, iç ve dış ünitenin önü açık mı?
4. E0 yeniden başlatmadan sonra ne zaman geldi: hemen mi, bir süre çalıştıktan sonra mı?
5. Klima açılınca sigorta atıyor mu?

Ekrandaki kodu ve klimanın modelini benservis.com'a yaz; olası arızayı ve tahmini maliyeti ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.

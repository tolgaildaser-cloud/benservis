---
title: "DemirDöküm şofben F4 arızası: ateşleme hatası"
description: "DemirDöküm şofben F4 arızası ateşleme hatası demek. Gaz vanaları, açma/kapama ile reset, üç deneme sınırı ve servis; L 275 F / L 350 F kılavuzundan."
slug: "demirdokum-sofben-f4-arizasi"
date: "2026-10-23"
category: "Kombi/Termosifon"
# --- Provenans (yayında görünmez) ---
# 2026-10-23 PAZ alt ajanı (YK #182 Dalga 3, küme G, fork C). Konu seçimi: origin/main'de hiç şofben sayfası yok (slug + başlık grep'i "şofben/sofben" boş);
#   DemirDöküm şofben hub'ı yok, dolayısıyla tekil kod sayfası hub kuralına takılmıyor. Diğer Dalga 3 klasörlerinde aynı slug yok.
# Arama kanıtı (bu koşuda Google otomatik tamamlama, hl=tr gl=tr): "demirdöküm şofben" → (yankı hariç) 1. "…fiyatları", 2. "demirdöküm şofben f4 arızası", 3. "…f1 arızası", 4. "…f5 arızası".
# GSC (https___www-6 7 gün, https___www-5 3 ay): şofben sorgusu yok.
# Belgeler bu koşuda curl -sL -A "Mozilla/5.0" ile demirdokum.com.tr'den indirildi (adresler DemirDöküm hermetik şofben ürün sayfasının "downloads" bölümünden); hepsi HTTP 200 application/pdf.
#  (K) Gazlı şofben L 275 F (H-TR) / L 350 F (H-TR) kullanma kılavuzu 0020265475_07 - 27.05.2024, 16 s.  https://www.demirdokum.com.tr/downloads/0020265475-07-3044972.pdf  md5 25f0fd3ea6f31600f5b10ccacfe493e9
#  (M) Aynı modeller montaj ve bakım kılavuzu 0020265474_10 - 24.02.2025, 28 s.  https://www.demirdokum.com.tr/downloads/0020265474-10-3044973.pdf  md5 0dda97382208617d52c29e561dab47d6
#  (S) L275 F - L 350 F Low Nox şofben SSS, 6 s.  https://www.demirdokum.com.tr/downloads/dd-hermetik-sofben-sss-3043907.pdf  md5 94799db0af3fd1ebc4c328f566ac7b4e
# Gaz kokusu K s.4 · ekran FXX yanıp söner, RESET sembolü K s.9 · kapatma vanaları sırası K s.10 · arıza giderme yönlendirmesi K s.11 · F04 satırı (3 doğalgaz / 1 LPG denemesi, KAPALI-AÇIK, üç denemede bayi) ve F05 K s.13
#   · F.01/F.04/F.05/F.07 kod tablosu, F04 "gaz vanası açık mı / gaz giriş basıncı / gaz armatürü kumanda arızası" M s.22 · 11 lt / 14 lt ve gaz kategorisi S s.2.
# BİLEREK YAZILMAYANLAR: gaz giriş basıncı ölçümü (servis işi; yalnız servisin bakacağı yer olarak) · ateşleme elektrodu, gaz armatürü, kart · kapak açma · baca boyu ve kısma halkası (montaj işi)
#   · belgede olmayan "fişi çekip bekle" yöntemi · fiyat (#46) · pazar bağlantısı. Alıntı denetim tablosu: demirdokum-sofben-f4-arizasi.KAYNAK.md
guide:
  difficulty: "Kolay"
  time: "~10 dakika"
  totalTime: "PT10M"
  cost: "Ücretsiz"
  tools: ["Şofbenin kullanma kılavuzu"]
steps:
  - "Ortamda gaz kokusu varsa hiçbir şeye dokunma; kapı ve pencereleri aç, elektrik düğmelerini kullanma, gaz sayacı vanasını kapat ve binayı terk et."
  - "Ekranda yanıp sönen kodun F04 olduğunu doğrula; F05 ya da F01 görüyorsan kendi satırına bak."
  - "Şofbenin dışındaki gaz kesme vanası ile şofbenin üzerindeki gaz kesme vanasının ikisinin de açık olduğunu kontrol et."
  - "Açma/kapama şalterini KAPALI konumuna getir, sonra yeniden AÇIK konumuna getir."
  - "Sıcak su musluğunu aç ve şofbenin yeniden çalışıp çalışmadığını izle."
  - "F04 tekrar gelirse resetlemeyi en fazla üç kez dene; doğalgazda her arıza üç ateşleme denemesinden sonra gelir."
  - "Üç denemede de geçmiyorsa resetlemeyi bırak, model ve gaz tipini not edip DemirDöküm yetkili bayisine başvur."
faq:
  - q: "DemirDöküm şofbende F4 ne demek?"
    a: "DemirDöküm'ün L 275 F ve L 350 F montaj kılavuzundaki kod tablosunda F.04 ateşleme arızası. Brülör ateşlenmiyor ya da ateşleme sırasında beklenmedik biçimde sönüyor. Kullanma kılavuzuna göre doğalgazda üç, sıvı gazda bir başarısız ateşleme denemesinden sonra şofben arıza konumuna geçiyor."
  - q: "F4 hatasını nasıl resetlerim?"
    a: "Kullanma kılavuzunun tarifi: açma/kapama şalterini KAPALI konumuna getir, sonra tekrar AÇIK konumuna getir; ürün yeniden çalışmaya başlar. Ateşleme arızasını üç arıza giderme denemesiyle gideremiyorsan yetkili bayiye başvur."
  - q: "Gaz vanaları açık ama F4 geçmiyor. Neden?"
    a: "Montaj kılavuzu servis için iki olasılık daha yazıyor: gaz giriş basıncı ve gaz armatürü kumanda arızası. İkisi de ölçüm ve parça işi; yetkili servisin bakacağı yerler."
  - q: "F4, F5 ve F1 arasındaki fark ne?"
    a: "Montaj kılavuzuna göre F.04 ateşleme arızası, F.05 hava basınç sensörü hatası (yanma havası/atık gaz sistemi ya da fan arızası), F.01 aşırı ısınma (su sıcaklığı 85 °C'nin üzerinde, gaz girişi kesilmiş). F05 için kullanma kılavuzu arızanın yetkili bayi tarafından giderilmesini istiyor."
  - q: "Tüplü gazda F4 daha mı çabuk çıkar?"
    a: "Kullanma kılavuzuna göre sıvı gazda tek bir başarısız ateşleme denemesi şofbeni arıza konumuna geçirir; doğalgazda bu sayı üç. SSS belgesine göre L 350 F doğalgaz ve LPG için, L 275 F yalnız doğalgaz için."
images:
  coverAlt: "Banyo duvarına asılı beyaz bir şofben ve altında kapalı duran sıcak su musluğu"
  steps:
    - "Kapısı ve penceresi açık, boş bir banyo"
    - "Şofben ekranında yanıp sönen kısa bir harf ve sayı dizisi"
    - "Duvardaki gaz borusu üzerinde sarı kollu bir vana"
    - "Şofbenin ön yüzünde yuvarlak bir döner düğme"
    - "Akan su altında lavabo musluğunun yakın planı"
    - "Şofbenin yanında duvara asılı boş bir not kâğıdı"
    - "Tezgâhta açık duran şofben kullanma kılavuzu"
---

Sıcak suyu açtın, su ısınmadı ve şofbenin ekranında F04 yanıp sönmeye başladı. DemirDöküm'ün L 275 F ve L 350 F gazlı şofben kılavuzlarında bu kodun anlamı açık: ateşleme arızası. Şofben gazı tutuşturamadı ya da alev ateşleme sırasında söndü, o yüzden kendini kilitledi. Kılavuzun kullanıcıya bıraktığı adımlar az ama net: gaz vanaları, açıp kapatarak reset ve üç deneme sınırı. Bu yazıda o sırayı DemirDöküm'ün kullanma kılavuzu ve montaj kılavuzundan topladık.

Cihazına özel tahmini maliyeti benservis.com'daki ücretsiz teşhisten alabilirsin.

> ⚡ **Kısa özet:** F04 = ateşleme arızası. Gaz kokusu varsa dokunma, binayı terk et. Yoksa iki gaz kesme vanasının açık olduğunu kontrol et, şalteri KAPALI sonra AÇIK konumuna getir. Üç denemede geçmiyorsa resetlemeyi bırak, yetkili bayiyi ara.

## F04 tam olarak ne diyor

DemirDöküm'ün montaj ve bakım kılavuzundaki kod tablosu F.04'ü **ateşleme arızası** diye adlandırıyor: brülör ateşlenmiyor ya da ateşleme konumunda beklenmedik biçimde sönüyor. Kullanma kılavuzu ne zaman kilitlendiğini de yazıyor: **doğalgazda üç, sıvı gazda bir** başarısız ateşleme denemesinden sonra ürün arıza konumuna geçer. Ekranda arıza mesajı ana ekranın yerine yanıp sönerek gösterilir.

| Ekrandaki kod | Kılavuza göre anlamı | Senin yapacağın |
|---|---|---|
| **F04** | Ateşleme arızası | Gaz vanaları, KAPALI-AÇIK, en fazla üç deneme |
| **F05** | Hava basınç sensörü; atık gaz yolu ya da fan | Yetkili bayi |
| **F01** | Aşırı ısınma, su 85 °C'nin üzerinde | Şalteri KAPALI-AÇIK, sonra müşteri hizmetleri |

## Adım adım: DemirDöküm şofbende F4 arızası

**1. Gaz kokusu varsa hiçbir şeye dokunma.** Kullanma kılavuzunun güvenlik bölümü doğal gaz kokusunda şunları istiyor: gaz kokusu olan yerde bulunma, mümkünse kapı ve pencereleri açıp cereyan yap, açık alevden kaçın, sigara içme, elektrik şalterlerini, prizleri, zili ve telefonu kullanma, gaz sayacı ya da ana kapatma düzeneğini kapat, diğer bina sakinlerini uyar, binayı hemen terk et ve dışarıdan polisi ve itfaiyeyi ara. Bu durumda reset denenmez.

**2. Kodu doğru oku.** Kullanma kılavuzuna göre arıza mesajı **FXX** biçiminde ana ekranın yerine yanıp sönerek gösterilir. F04 görüyorsan bu yazı senin için. F05 ya da F01 görüyorsan yukarıdaki tabloya bak; F05 için kullanma kılavuzu arızanın yetkili bayi tarafından giderilmesini istiyor.

**3. İki gaz kesme vanasını kontrol et.** Kılavuzun arıza tablosundaki ilk olası neden kapalı gaz vanası: şofbenin dışına monte edilen gaz kesme vanası ve/veya üründeki gaz kesme vanası. Tedbir: **her iki gaz kesme vanasını açın.** Vanaların yerini bilmiyorsan kılavuz, montajı yapan tesisatçıdan konumlarını ve nasıl kullanıldıklarını öğrenmeni istiyor. Kılavuz uzun süreli kapatmada (örneğin tatilde) gaz kesme vanasının kapatılmasını istiyor; tatilden döndüysen önce buraya bak.

**4. Şalteri kapatıp aç.** F04 için kullanma kılavuzunun tarifi tek cümle: açma/kapama şalterini **KAPALI** konumuna getir, sonra tekrar **AÇIK** konumuna getir. Ürün yeniden çalışmaya başlar. Ekranda bir RESET sembolü de var; kılavuza göre bu sembol reset işlevinin aktif olduğunu ve ürünün kapatıldığını gösterir.

**5. Sıcak suyu aç ve izle.** Şalteri açtıktan sonra sıcak su musluğunu aç. Şofben normal çalışırsa kılavuzun ekran tablosundaki brülör sembolü görünür. Kod geri gelirse şofben yine ateşleme denemelerini bitirip kilitlenmiştir.

**6. En fazla üç deneme.** Kullanma kılavuzu sınırı açıkça koyuyor: ateşleme arızasını **üç arıza giderme denemesiyle** gideremiyorsan yetkili bayiye başvur. Daha fazla denemek sorunu çözmez; sebep büyük ihtimalle gazın şofbene ulaşmasında ya da ateşleme parçalarındadır. Bu bir çıkarım, kılavuzun cümlesi yalnız "yetkili bayiye başvurun".

**7. Not al, bayiyi ara.** Modelini (L 275 F ya da L 350 F), kullandığın gazı ve kaç kez resetlediğini yaz. DemirDöküm'ün SSS belgesine göre L 275 F yalnız doğalgazlı, L 350 F doğalgaz ve LPG ile çalışabiliyor.

## Servisin bakacağı yerler

Montaj ve bakım kılavuzunun arıza giderme tablosunda F04 için iki satır var. Birincisi gaz girişinin kesilmesi: servis gaz vanasının açık olup olmadığını ve **gaz giriş basıncını** kontrol ediyor. İkincisi ateşleme elektrotlarının brülörü ateşlememesi: kılavuz bunu **gaz armatürü kumanda arızası** diye tanımlıyor ve müşteri hizmetlerine yönlendiriyor. İkisi de ölçüm, kapak açma ve parça işi.

⛔ **Kendin-çöz sınırı burada biter.** Gaz vanaları, açma/kapama şalteri ve sıcak su musluğu sende; gaz basıncı, ateşleme elektrodu, gaz armatürü, kart, baca ve şofbenin kapağının içi yetkili servisin.

## Ne zaman servis

- F04 üç denemede de geri geliyorsa
- Ekranda F05, F07 ya da F01 görüyorsan
- Şofben hiç açılmıyor, ekran kapalı kalıyor ve binadaki sigorta sağlamsa
- Gaz kokusu aldıysan (önce gaz şirketi ve binayı terk etme)

## Servisi aramadan önce kısa özet

1. Şofbenin modeli: L 275 F mi, L 350 F mi?
2. Doğalgaz mı, tüp mü?
3. Ekrandaki kod tam olarak ne?
4. Kaç kez KAPALI-AÇIK denedin?
5. İki gaz kesme vanası da açık mı?

Benzer bir kilitlenme kombide de görülür; DemirDöküm kombiler için [DemirDöküm kombi F28 hatası](/blog/demirdokum-kombi-f28-hatasi/) yazısına bak. Şofbenin yerine termosifon kullanıyorsan [termosifon suyu ısıtmıyor](/blog/termosifon-suyu-isitmiyor/) yazısı işine yarar. Kodu benservis.com'a yaz; olası arızayı ücretsiz öğren, sonra yakınındaki puanlı servislerden birini çağır. Bil, gör, çağır.
